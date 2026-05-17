import { LitElement, html } from 'lit';
import {
  AmbientLight,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from 'three';

class CodeConstellation extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this._frame = null;
    this._resizeObserver = null;
    this._pointer = { x: 0, y: 0 };
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this._canvas = this.querySelector('canvas');

    if (!this._canvas) {
      return;
    }

    this._initScene();
  }

  disconnectedCallback() {
    this._disposeScene();
    super.disconnectedCallback();
  }

  _initScene() {
    this._renderer = new WebGLRenderer({
      canvas: this._canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this._renderer.setClearColor(0x000000, 0);
    this._renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    this._scene = new Scene();
    this._camera = new PerspectiveCamera(42, 1, 0.1, 100);
    this._camera.position.set(0, 0, 7);

    this._rig = new Group();
    this._scene.add(this._rig);

    const ambient = new AmbientLight(0xffffff, 1.35);
    const key = new PointLight(0xf2523a, 8, 18);
    key.position.set(2.8, 2.4, 3.2);
    const fill = new PointLight(0x52c4a3, 5, 16);
    fill.position.set(-3.2, -2.6, 2.4);
    this._scene.add(ambient, key, fill);

    this._buildGeometry();

    this._resizeObserver = new ResizeObserver(() => this._resize());
    this._resizeObserver.observe(this);
    this.addEventListener('pointermove', this._handlePointerMove);
    this.addEventListener('pointerleave', this._handlePointerLeave);

    this._resize();
    this._animate(0);
  }

  _buildGeometry() {
    const coreGeometry = new IcosahedronGeometry(1.18, 2);
    const coreMaterial = new MeshStandardMaterial({
      color: 0xf2523a,
      emissive: 0x240907,
      metalness: 0.16,
      opacity: 0.72,
      roughness: 0.48,
      transparent: true,
      wireframe: true,
    });
    this._core = new Mesh(coreGeometry, coreMaterial);
    this._rig.add(this._core);

    const ringMaterial = new MeshBasicMaterial({
      color: 0x52c4a3,
      opacity: 0.55,
      transparent: true,
    });

    this._rings = [1.82, 2.26, 2.68].map((radius, index) => {
      const ring = new Mesh(new TorusGeometry(radius, 0.008, 8, 128), ringMaterial.clone());
      ring.rotation.x = Math.PI / 2.8 + index * 0.42;
      ring.rotation.y = index * 0.8;
      this._rig.add(ring);
      return ring;
    });

    const positions = [];
    const linePositions = [];
    const total = 170;

    for (let index = 0; index < total; index += 1) {
      const angle = index * 0.42;
      const radius = 1.55 + (index % 7) * 0.18;
      const y = Math.sin(index * 0.21) * 1.22;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      positions.push(x, y, z);

      if (index > 0 && index % 4 === 0) {
        const previous = positions.length - 6;
        linePositions.push(positions[previous], positions[previous + 1], positions[previous + 2], x, y, z);
      }
    }

    const pointGeometry = new BufferGeometry();
    pointGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const pointMaterial = new PointsMaterial({
      color: 0xf7f4ef,
      opacity: 0.84,
      size: 0.035,
      sizeAttenuation: true,
      transparent: true,
    });
    this._points = new Points(pointGeometry, pointMaterial);
    this._rig.add(this._points);

    const lineGeometry = new BufferGeometry();
    lineGeometry.setAttribute('position', new Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new LineBasicMaterial({
      color: 0xf2523a,
      opacity: 0.22,
      transparent: true,
    });
    this._lines = new LineSegments(lineGeometry, lineMaterial);
    this._rig.add(this._lines);
  }

  _handlePointerMove = (event) => {
    const rect = this.getBoundingClientRect();
    this._pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.28;
    this._pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * -0.22;
  };

  _handlePointerLeave = () => {
    this._pointer.x = 0;
    this._pointer.y = 0;
  };

  _resize() {
    const width = Math.max(this.clientWidth, 1);
    const height = Math.max(this.clientHeight, 1);
    this._renderer.setSize(width, height, false);
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
  }

  _animate = (time) => {
    const seconds = time * 0.001;

    this._rig.rotation.x += (this._pointer.y - this._rig.rotation.x) * 0.04;
    this._rig.rotation.y = seconds * 0.18 + this._pointer.x;
    this._rig.rotation.z = Math.sin(seconds * 0.34) * 0.045;
    this._core.rotation.x = seconds * 0.42;
    this._core.rotation.y = seconds * 0.58;
    this._points.rotation.y = seconds * -0.08;
    this._lines.rotation.y = seconds * -0.08;

    this._rings.forEach((ring, index) => {
      ring.rotation.z = seconds * (0.18 + index * 0.05);
    });

    this._renderer.render(this._scene, this._camera);
    this._frame = requestAnimationFrame(this._animate);
  };

  _disposeScene() {
    if (this._frame) {
      cancelAnimationFrame(this._frame);
    }

    this._resizeObserver?.disconnect();
    this.removeEventListener('pointermove', this._handlePointerMove);
    this.removeEventListener('pointerleave', this._handlePointerLeave);

    this._scene?.traverse((object) => {
      object.geometry?.dispose?.();

      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose?.());
      } else {
        object.material?.dispose?.();
      }
    });

    this._renderer?.dispose();
  }

  render() {
    return html`
      <canvas class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas>
    `;
  }
}

customElements.define('code-constellation', CodeConstellation);
