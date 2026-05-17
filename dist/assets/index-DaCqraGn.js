import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as ee,t as m,u as te}from"./three-C1G62Z9z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var h=globalThis,g=h.ShadowRoot&&(h.ShadyCSS===void 0||h.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,_=Symbol(),ne=new WeakMap,re=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(g&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ne.set(t,e))}return e}toString(){return this.cssText}},ie=e=>new re(typeof e==`string`?e:e+``,void 0,_),ae=(e,t)=>{if(g)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=h.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},v=g?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ie(t)})(e):e,{is:oe,defineProperty:se,getOwnPropertyDescriptor:ce,getOwnPropertyNames:le,getOwnPropertySymbols:ue,getPrototypeOf:de}=Object,y=globalThis,b=y.trustedTypes,fe=b?b.emptyScript:``,pe=y.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},me=(e,t)=>!oe(e,t),he={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:me};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&se(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ce(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(x(`elementProperties`)))return;let e=de(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x(`properties`))){let e=this.properties,t=[...le(e),...ue(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(v(e))}else e!==void 0&&t.push(v(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?S:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?S:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??me)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[x(`elementProperties`)]=new Map,C[x(`finalized`)]=new Map,pe?.({ReactiveElement:C}),(y.reactiveElementVersions??=[]).push(`2.1.2`);var w=globalThis,ge=e=>e,T=w.trustedTypes,_e=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,E=`$lit$`,D=`lit$${Math.random().toFixed(9).slice(2)}$`,O=`?`+D,ve=`<${O}>`,k=document,A=()=>k.createComment(``),j=e=>e===null||typeof e!=`object`&&typeof e!=`function`,M=Array.isArray,ye=e=>M(e)||typeof e?.[Symbol.iterator]==`function`,N=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,I=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),R=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),H=Symbol.for(`lit-noChange`),U=Symbol.for(`lit-nothing`),W=new WeakMap,G=k.createTreeWalker(k,129);function K(e,t){if(!M(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return _e===void 0?t:_e.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=P;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===P?c[1]===`!--`?o=F:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=L):(B.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=L):o=I:o===L?c[0]===`>`?(o=i??P,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?L:c[3]===`"`?z:R):o===z||o===R?o=L:o===F||o===I?o=P:(o=L,i=void 0);let d=o===L&&e[t+1].startsWith(`/>`)?` `:``;a+=o===P?n+ve:l>=0?(r.push(s),n.slice(0,l)+E+n.slice(l)+D+d):n+D+(l===-2?t:d)}return[K(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},q=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),G.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=G.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(E)){let t=u[o++],n=i.getAttribute(e).split(D),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:X}),i.removeAttribute(e)}else e.startsWith(D)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(B.test(i.tagName)){let e=i.textContent.split(D),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],A()),G.nextNode(),c.push({type:2,index:++a});i.append(e[t],A())}}}else if(i.nodeType===8)if(i.data===O)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(D,e+1))!==-1;)c.push({type:7,index:a}),e+=D.length-1}a++}}static createElement(e,t){let n=k.createElement(`template`);return n.innerHTML=e,n}};function J(e,t,n=e,r){if(t===H)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=J(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);G.currentNode=r;let i=G.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Y(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=G.nextNode(),a++)}return G.currentNode=k,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Y=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),j(e)?e===U||e==null||e===``?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==H&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=q.createElement(K(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return t===void 0&&W.set(e.strings,t=new q(e)),t}k(t){M(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(A()),this.O(A()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ge(e).nextSibling;ge(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=J(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==H,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=J(this,r[n+o],t,o),s===H&&(s=this._$AH[o]),a||=!j(s)||s!==this._$AH[o],s===U?e=U:e!==U&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},Ce=class extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}},we=class extends X{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??U)===H)return;let n=this._$AH,r=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==U&&(n===U||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}},Ee=w.litHtmlPolyfillSupport;Ee?.(q,Y),(w.litHtmlVersions??=[]).push(`3.3.3`);var De=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Y(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},Z=globalThis,Q=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};Q._$litElement$=!0,Q.finalized=!0,Z.litElementHydrateSupport?.({LitElement:Q});var Oe=Z.litElementPolyfillSupport;Oe?.({LitElement:Q}),(Z.litElementVersions??=[]).push(`4.2.2`);var $={name:`Javier Ferrer Díaz`,role:`Junior Software Developer`,location:`Granada, Spain`,email:`javierferrerdiaz1@gmail.com`,github:`https://github.com/Jaferdi`,linkedin:`https://linkedin.com/in/javierfd1`,summary:`Junior software developer trained in web and multiplatform application development. I work with Java, PHP, Laravel, React, JavaScript, TypeScript, MySQL, MongoDB, Git, and GitHub, with professional experience resolving incidents, debugging, planning development tasks, and adapting to new languages and codebases.`},ke=[{group:`Frontend & UI`,items:[`React`,`JavaScript`,`TypeScript`,`HTML`,`CSS`,`Tailwind CSS`]},{group:`Backend`,items:[`Java`,`PHP`,`Laravel`,`Object-oriented programming`,`Functional analysis`]},{group:`Data & Tools`,items:[`MySQL`,`MongoDB`,`Git`,`GitHub`,`Debugging`]},{group:`Languages & Work`,items:[`Spanish`,`English B2 in progress`,`Teamwork`,`Task planning`,`Continuous improvement`]}],Ae=[{language:`Español`,label:`Ver CV en español`,description:`Currículo técnico completo con experiencia, estudios, competencias, idiomas y proyectos públicos.`,action:`Abrir CV en español`,href:`/cv/javier-ferrer-cv-es.html`},{language:`English`,label:`View CV in English`,description:`English version focused on junior software development roles, public work, and technical skills.`,action:`Open English CV`,href:`/cv/javier-ferrer-cv-en.html`},{language:`PDF`,label:`Descargar CV PDF`,description:`Versión imprimible y más limpia para candidaturas, generada desde el CV actualizado.`,action:`Abrir PDF`,href:`/cv/javier-ferrer-cv-es.pdf`}],je=[{title:`Portfolio`,description:`Personal portfolio built to present my projects, experience, education, and technical profile with a polished, responsive interface.`,stack:[`JavaScript`,`Lit`,`Vite`,`Tailwind CSS`,`Three.js`],live:`https://portfolio-jaferdi.vercel.app/`,source:`https://github.com/Jaferdi/Portfolio`},{title:`Tres en Raya`,description:`Java tic-tac-toe project with domain classes for the board, cells, players, and generated Javadoc documentation published through GitHub Pages.`,stack:[`Java`,`HTML`,`CSS`,`JavaScript`,`Javadoc`],live:`https://jaferdi.github.io/TresEnRaya/`,source:`https://github.com/Jaferdi/TresEnRaya`}],Me=[{period:`2025 - Present`,title:`Software Developer`,company:`Innovaciones Tecnológicas del Sur`,detail:`Develops and maintains software while resolving incidents, debugging, and improving existing functionality.`,highlights:[`Software development`,`Incident resolution`,`Debugging`,`Continuous improvement`]},{period:`2025`,title:`Software Development Intern`,company:`Innovaciones Tecnológicas del Sur`,detail:`Supported programming tasks, incident resolution, functional analysis, and adaptation to new languages during professional practice.`,highlights:[`Coding tasks`,`Functional analysis`,`Task planning`,`New language adaptation`]},{period:`2024`,title:`Intern`,company:`Grupo Euro-CENTER`,detail:`Completed technical internship work focused on problem solving, observation, analysis, planning, and collaborative delivery.`,highlights:[`Problem solving`,`Planning and organization`,`Observation and analysis`,`Teamwork`]}],Ne=[{period:`2024 - 2025`,school:`STEM Granada`,degree:`Higher Technician in Web Application Development`,detail:`Specialized training in web development, application structure, databases, and modern programming workflows.`},{period:`2022 - 2024`,school:`MEDAC Nevada`,degree:`Higher Technician in Multiplatform Application Development`,detail:`Training in software development fundamentals, Java, databases, and multiplatform application logic.`}],Pe=[{value:`2`,label:`higher degrees`},{value:`3`,label:`professional stages`},{value:`2`,label:`public GitHub repos`}],Fe=[`About`,`Skills`,`Projects`,`Experience`,`Education`,`CV`,`Contact`],Ie=class extends Q{createRenderRoot(){return this}render(){return V`
      <header class="sticky top-0 z-40 border-b border-[color:var(--line-color)] bg-[color:var(--bg)]/82 backdrop-blur-xl">
        <div class="h-px w-full origin-left bg-gradient-to-r from-accent via-mint to-transparent"></div>
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Primary navigation"
        >
          <a href="#top" class="group inline-flex shrink-0 items-center gap-3 font-display text-sm font-semibold tracking-[0.16em] uppercase" aria-label="${$.name} home">
            <span class="grid h-7 w-7 place-items-center border border-[color:var(--line-color)] bg-[color:var(--panel)]">
              <span class="h-2.5 w-2.5 rounded-full bg-accent transition-transform group-hover:scale-125"></span>
            </span>
            <span>JF</span>
          </a>
          <div class="hidden items-center gap-1 rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--panel)] p-1 lg:flex">
            ${Fe.map(e=>V`
                <a
                  class="magnetic-link rounded-[6px] px-3 py-2 text-sm text-[color:var(--muted-copy)] hover:bg-[color:var(--soft)] hover:text-[color:var(--fg)]"
                  href="#${e.toLowerCase()}"
                >
                  ${e}
                </a>
              `)}
          </div>
          <a
            class="shrink-0 rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-2 text-sm font-medium shadow-sm hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_14px_40px_rgba(242,82,58,0.14)]"
            href="mailto:${$.email}"
          >
            Contact
          </a>
        </nav>
      </header>
    `}};customElements.define(`site-header`,Ie);var Le=class extends Q{connectedCallback(){super.connectedCallback(),this._frame=null,this._resizeObserver=null,this._pointer={x:0,y:0}}createRenderRoot(){return this}firstUpdated(){this._canvas=this.querySelector(`canvas`),this._canvas&&this._initScene()}disconnectedCallback(){this._disposeScene(),super.disconnectedCallback()}_initScene(){this._renderer=new m({canvas:this._canvas,alpha:!0,antialias:!0,powerPreference:`high-performance`}),this._renderer.setClearColor(0,0),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this._scene=new a,this._camera=new i(42,1,.1,100),this._camera.position.set(0,0,7),this._rig=new t,this._scene.add(this._rig);let e=new u(16777215,1.35),n=new f(15880762,8,18);n.position.set(2.8,2.4,3.2);let r=new f(5424291,5,16);r.position.set(-3.2,-2.6,2.4),this._scene.add(e,n,r),this._buildGeometry(),this._resizeObserver=new ResizeObserver(()=>this._resize()),this._resizeObserver.observe(this),this.addEventListener(`pointermove`,this._handlePointerMove),this.addEventListener(`pointerleave`,this._handlePointerLeave),this._resize(),this._animate(0)}_buildGeometry(){let t=new d(1.18,2),i=new r({color:15880762,emissive:2361607,metalness:.16,opacity:.72,roughness:.48,transparent:!0,wireframe:!0});this._core=new c(t,i),this._rig.add(this._core);let a=new te({color:5424291,opacity:.55,transparent:!0});this._rings=[1.82,2.26,2.68].map((t,n)=>{let r=new c(new e(t,.008,8,128),a.clone());return r.rotation.x=Math.PI/2.8+n*.42,r.rotation.y=n*.8,this._rig.add(r),r});let u=[],f=[];for(let e=0;e<170;e+=1){let t=e*.42,n=1.55+e%7*.18,r=Math.sin(e*.21)*1.22,i=Math.cos(t)*n,a=Math.sin(t)*n;if(u.push(i,r,a),e>0&&e%4==0){let e=u.length-6;f.push(u[e],u[e+1],u[e+2],i,r,a)}}let m=new p;m.setAttribute(`position`,new s(u,3));let h=new o({color:16250095,opacity:.84,size:.035,sizeAttenuation:!0,transparent:!0});this._points=new l(m,h),this._rig.add(this._points);let g=new p;g.setAttribute(`position`,new s(f,3));let _=new ee({color:15880762,opacity:.22,transparent:!0});this._lines=new n(g,_),this._rig.add(this._lines)}_handlePointerMove=e=>{let t=this.getBoundingClientRect();this._pointer.x=((e.clientX-t.left)/t.width-.5)*.28,this._pointer.y=((e.clientY-t.top)/t.height-.5)*-.22};_handlePointerLeave=()=>{this._pointer.x=0,this._pointer.y=0};_resize(){let e=Math.max(this.clientWidth,1),t=Math.max(this.clientHeight,1);this._renderer.setSize(e,t,!1),this._camera.aspect=e/t,this._camera.updateProjectionMatrix()}_animate=e=>{let t=e*.001;this._rig.rotation.x+=(this._pointer.y-this._rig.rotation.x)*.04,this._rig.rotation.y=t*.18+this._pointer.x,this._rig.rotation.z=Math.sin(t*.34)*.045,this._core.rotation.x=t*.42,this._core.rotation.y=t*.58,this._points.rotation.y=t*-.08,this._lines.rotation.y=t*-.08,this._rings.forEach((e,n)=>{e.rotation.z=t*(.18+n*.05)}),this._renderer.render(this._scene,this._camera),this._frame=requestAnimationFrame(this._animate)};_disposeScene(){this._frame&&cancelAnimationFrame(this._frame),this._resizeObserver?.disconnect(),this.removeEventListener(`pointermove`,this._handlePointerMove),this.removeEventListener(`pointerleave`,this._handlePointerLeave),this._scene?.traverse(e=>{e.geometry?.dispose?.(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose?.()):e.material?.dispose?.()}),this._renderer?.dispose()}render(){return V`
      <canvas class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas>
    `}};customElements.define(`code-constellation`,Le);var Re=class extends Q{firstUpdated(){let e=this.querySelector(`.hero-art`);!e||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||(e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.setProperty(`--tilt-y`,`${r*7}deg`),e.style.setProperty(`--tilt-x`,`${i*-7}deg`),e.style.setProperty(`--mx`,`${r*18}px`),e.style.setProperty(`--my`,`${i*18}px`)}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--tilt-y`,`0deg`),e.style.setProperty(`--tilt-x`,`0deg`),e.style.setProperty(`--mx`,`0px`),e.style.setProperty(`--my`,`0px`)}))}createRenderRoot(){return this}render(){return V`
      <section id="top" class="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
        <div class="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-[42rem] -translate-x-1/2 border border-[color:var(--line-color)] opacity-50"></div>
        <div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="max-w-4xl">
            <p class="reveal mb-5 inline-flex items-center gap-3 rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">
              <span class="h-2 w-2 animate-pulse bg-mint"></span>
              Based in ${$.location}
            </p>
            <h1 class="reveal delay-1 font-display text-4xl font-semibold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              ${$.name}
              <span class="block">${$.role}</span>
              <span class="block text-accent">building practical software.</span>
            </h1>
            <p class="reveal delay-2 mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted-copy)] sm:text-xl">
              ${$.summary}
            </p>
            <div class="reveal delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                class="inline-flex items-center justify-center rounded-[6px] bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(242,82,58,0.24)] hover:-translate-y-1 hover:bg-[#d84430] hover:shadow-[0_24px_70px_rgba(242,82,58,0.34)]"
              >
                View selected work
              </a>
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-6 py-3 text-sm font-semibold hover:-translate-y-1 hover:border-mint hover:text-mint"
              >
                Contact me
              </a>
            </div>
            <div class="reveal delay-4 mt-12 grid max-w-2xl grid-cols-3 border-y border-[color:var(--line-color)]">
              ${Pe.map(({value:e,label:t})=>V`
                  <div class="border-r border-[color:var(--line-color)] py-4 pr-4 last:border-r-0 last:pl-4 sm:pr-6 sm:last:pl-6">
                    <p class="font-display text-2xl font-semibold sm:text-3xl">${e}</p>
                    <p class="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[color:var(--muted-copy)]">${t}</p>
                  </div>
                `)}
            </div>
          </div>

          <div class="hero-art reveal delay-2 relative min-h-[30rem] sm:min-h-[36rem]" aria-hidden="true">
            <div class="hero-plane absolute inset-0 overflow-hidden border border-[color:var(--line-color)] bg-[color:var(--panel-strong)] shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <code-constellation class="absolute inset-0 z-0 opacity-95"></code-constellation>
              <div class="absolute inset-6 z-10 border border-[color:var(--line-color)]"></div>
              <div class="scan-line absolute left-6 right-6 top-1/2 z-10 h-px bg-accent/80"></div>
              <div class="orbit-ring absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[color:var(--fg)]/28"></div>
              <div class="absolute left-1/2 top-1/2 z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 border-2 border-[color:var(--fg)] bg-[color:var(--bg)]/10"></div>
              <div class="absolute left-[18%] top-[40%] z-10 h-px w-[64%] bg-[color:var(--fg)]/70"></div>
              <div class="absolute left-[52%] top-[18%] z-10 h-[64%] w-px bg-[color:var(--fg)]/70"></div>
              <div class="floating-node absolute left-8 top-8 z-10 h-20 w-20 border border-accent bg-accent/10"></div>
              <div class="floating-node absolute right-10 top-12 z-10 h-28 w-28 bg-mint/18"></div>
              <div class="floating-node absolute bottom-10 left-10 z-10 h-36 w-36 border border-[color:var(--line-color)] bg-[color:var(--soft)]/50"></div>
              <div class="floating-node absolute bottom-16 right-8 z-10 h-44 w-44 bg-accent/75 mix-blend-multiply dark:mix-blend-normal"></div>
              <div class="absolute bottom-8 left-8 right-8 z-20 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <span class="font-display text-7xl font-semibold leading-none text-[color:var(--fg)]/10">01</span>
                <div class="grid w-full max-w-xs gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">
                  <div>
                    <div class="mb-2 flex justify-between gap-4">
                      <span>Frontend</span>
                      <span>92</span>
                    </div>
                    <div class="metric-bar h-1.5 bg-[color:var(--line-color)]">
                      <div class="h-full w-[92%] bg-accent"></div>
                    </div>
                  </div>
                  <div>
                    <div class="mb-2 flex justify-between gap-4">
                      <span>Backend</span>
                      <span>88</span>
                    </div>
                    <div class="metric-bar h-1.5 bg-[color:var(--line-color)]">
                      <div class="h-full w-[88%] bg-mint"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}};customElements.define(`hero-section`,Re);var ze=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="about" class="border-y border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">A junior profile with real delivery practice.</h2>
          </div>
          <div class="motion-item grid gap-8 text-lg leading-8 text-[color:var(--muted-copy)]" style="--delay: 120ms">
            <p>
              ${$.summary}
            </p>
            <p>
              My background combines Web Application Development and Multiplatform Application Development studies with professional practice at Grupo Euro-CENTER and Innovaciones Tecnológicas del Sur.
            </p>
            <div class="grid gap-3 pt-2 sm:grid-cols-3">
              ${[`Software development`,`Incident resolution`,`Functional analysis`].map((e,t)=>V`
                  <div class="interactive-card rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/70 p-4" style="--delay: ${180+t*80}ms">
                    <span class=${t===1?`mb-5 block h-1.5 w-10 bg-mint`:`mb-5 block h-1.5 w-10 bg-accent`}></span>
                    <p class="font-display text-lg font-semibold text-[color:var(--fg)]">${e}</p>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </section>
    `}};customElements.define(`about-section`,ze);var Be=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="skills" class="px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="motion-item mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div class="flex max-w-3xl flex-col gap-4">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Skills</p>
              <h2 class="font-display text-3xl font-semibold sm:text-5xl">A compact toolkit for complete products.</h2>
            </div>
            <div class="hidden border border-[color:var(--line-color)] bg-[color:var(--panel)] p-4 text-right lg:block">
              <p class="font-display text-4xl font-semibold">${String(ke.length).padStart(2,`0`)}</p>
              <p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">disciplines</p>
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            ${ke.map((e,t)=>V`
                <article class="motion-item interactive-card group rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--panel)] p-6 backdrop-blur-sm hover:border-accent/70" style="--delay: ${t*90}ms">
                  <div class="flex items-start justify-between gap-4">
                    <h3 class="font-display text-xl font-semibold">${e.group}</h3>
                    <span class="font-display text-3xl font-semibold text-[color:var(--fg)]/10">0${t+1}</span>
                  </div>
                  <div class="mt-6 flex flex-wrap gap-2">
                    ${e.items.map(e=>V`
                        <span class="rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/40 px-3 py-2 text-sm text-[color:var(--muted-copy)] transition-colors duration-200 group-hover:border-[color:var(--fg)]/20 group-hover:text-[color:var(--fg)]">
                          ${e}
                        </span>
                      `)}
                  </div>
                </article>
              `)}
          </div>
        </div>
      </section>
    `}};customElements.define(`skills-section`,Be);var Ve=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="projects" class="border-y border-[color:var(--line-color)] bg-[color:var(--soft)]/60 px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="motion-item mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Projects</p>
              <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Public work from GitHub.</h2>
            </div>
            <p class="max-w-2xl text-lg leading-8 text-[color:var(--muted-copy)] lg:justify-self-end">
              These projects are pulled from the public profile and described around what is visible in the repositories: source code, documentation, deployment, and stack.
            </p>
          </div>
          <div class="grid gap-5 lg:grid-cols-2">
            ${je.map((e,t)=>V`
                <article class="motion-item interactive-card group flex min-h-[25rem] flex-col rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)] p-6 hover:border-accent/80" style="--delay: ${t*110}ms">
                  <div class="flex items-center justify-between gap-6">
                    <span class="font-display text-5xl font-semibold text-[color:var(--fg)]/10">0${t+1}</span>
                    <span class=${t===1?`h-3 w-12 bg-mint transition-all duration-300 group-hover:w-16`:`h-3 w-12 bg-accent transition-all duration-300 group-hover:w-16`}></span>
                  </div>
                  <h3 class="mt-10 font-display text-2xl font-semibold">${e.title}</h3>
                  <p class="mt-4 flex-1 leading-7 text-[color:var(--muted-copy)]">${e.description}</p>
                  <div class="mt-8 flex flex-wrap gap-2">
                    ${e.stack.map(e=>V`
                        <span class="rounded-[6px] bg-[color:var(--soft)] px-3 py-1.5 text-xs font-medium text-[color:var(--muted-copy)]">
                          ${e}
                        </span>
                      `)}
                  </div>
                  <div class="mt-8 flex gap-4 text-sm font-semibold">
                    <a class="magnetic-link rounded-[6px] px-1 text-accent hover:opacity-70" href=${e.live} target="_blank" rel="noopener" aria-label="Open live preview for ${e.title}">
                      Live
                    </a>
                    <a class="magnetic-link rounded-[6px] px-1 text-[color:var(--fg)] hover:text-accent" href=${e.source} target="_blank" rel="noopener" aria-label="Open source code for ${e.title}">
                      Source
                    </a>
                  </div>
                </article>
              `)}
          </div>
        </div>
      </section>
    `}};customElements.define(`projects-section`,Ve);var He=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="experience" class="px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Experience</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Career highlights, reduced to signal.</h2>
          </div>
          <div class="relative">
            <div class="timeline-line absolute bottom-0 left-[0.42rem] top-2 w-px bg-gradient-to-b from-accent via-mint to-[color:var(--line-color)]"></div>
            <ol class="grid gap-10">
              ${Me.map((e,t)=>V`
                  <li class="motion-item interactive-card group relative grid gap-2 rounded-[8px] border border-transparent bg-[color:var(--bg)]/40 py-5 pl-10 pr-5 hover:border-[color:var(--line-color)]" style="--delay: ${t*100}ms">
                    <span class="absolute left-0 top-7 h-3 w-3 bg-accent ring-4 ring-[color:var(--bg)] transition-transform duration-300 group-hover:scale-125"></span>
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">${e.period}</p>
                    <h3 class="font-display text-2xl font-semibold">${e.title}</h3>
                    <p class="font-semibold text-accent">${e.company}</p>
                    <p class="max-w-2xl leading-7 text-[color:var(--muted-copy)]">${e.detail}</p>
                    <div class="mt-3 flex max-w-2xl flex-wrap gap-2">
                      ${e.highlights.map(e=>V`
                          <span class="rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--soft)]/70 px-3 py-1.5 text-xs font-semibold text-[color:var(--muted-copy)]">
                            ${e}
                          </span>
                        `)}
                    </div>
                  </li>
                `)}
            </ol>
          </div>
        </div>
      </section>
    `}};customElements.define(`experience-section`,He);var Ue=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="education" class="border-y border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Education</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Formal studies behind the technical profile.</h2>
          </div>
          <div class="grid gap-4">
            ${Ne.map((e,t)=>V`
                <article class="motion-item interactive-card rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/70 p-6" style="--delay: ${t*100}ms">
                  <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">${e.period}</p>
                  <h3 class="mt-3 font-display text-2xl font-semibold">${e.degree}</h3>
                  <p class="mt-1 font-semibold text-accent">${e.school}</p>
                  <p class="mt-4 max-w-3xl leading-7 text-[color:var(--muted-copy)]">${e.detail}</p>
                </article>
              `)}
          </div>
        </div>
      </section>
    `}};customElements.define(`education-section`,Ue);var We=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="cv" class="border-y border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Curriculum vitae</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Two versions, one technical profile.</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            ${Ae.map((e,t)=>V`
                <article class="motion-item interactive-card flex min-h-[18rem] flex-col rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/70 p-6" style="--delay: ${t*100}ms">
                  <div class="flex items-start justify-between gap-4">
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">${e.language}</p>
                    <span class=${t===0?`h-3 w-12 bg-accent`:`h-3 w-12 bg-mint`}></span>
                  </div>
                  <h3 class="mt-8 font-display text-2xl font-semibold">${e.label}</h3>
                  <p class="mt-4 flex-1 leading-7 text-[color:var(--muted-copy)]">${e.description}</p>
                  <a
                    class="mt-8 inline-flex items-center justify-center rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-3 text-sm font-semibold hover:-translate-y-1 hover:border-accent hover:text-accent"
                    href=${e.href}
                    target="_blank"
                    rel="noopener"
                  >
                    ${e.action}
                  </a>
                </article>
              `)}
          </div>
        </div>
      </section>
    `}};customElements.define(`cv-section`,We);var Ge=class extends Q{createRenderRoot(){return this}render(){return V`
      <section id="contact" class="px-5 pb-8 pt-20 sm:px-8 lg:pt-28">
        <div class="mx-auto max-w-7xl border-t border-[color:var(--line-color)] pt-12">
          <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div class="motion-item">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 class="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Available for software development roles and technical internships.
              </h2>
            </div>
            <div class="motion-item grid gap-4 text-sm" style="--delay: 140ms">
              <a
                class="relative overflow-hidden rounded-[6px] bg-accent px-5 py-4 text-center font-semibold text-white shadow-[0_20px_60px_rgba(242,82,58,0.26)] hover:-translate-y-1 hover:bg-[#d84430] hover:shadow-[0_26px_80px_rgba(242,82,58,0.34)]"
                href="mailto:${$.email}"
              >
                ${$.email}
              </a>
              <div class="grid grid-cols-2 gap-3">
                <a class="interactive-card rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-3 text-center font-semibold hover:border-accent hover:text-accent" href=${$.github}>
                  GitHub
                </a>
                <a class="interactive-card rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-3 text-center font-semibold hover:border-accent hover:text-accent" href=${$.linkedin}>
                  LinkedIn
                </a>
              </div>
              <a class="interactive-card rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-3 text-center font-semibold hover:border-accent hover:text-accent" href="tel:${$.phone.replaceAll(` `,``)}">
                ${$.phone}
              </a>
            </div>
          </div>
          <footer class="mt-16 flex flex-col gap-3 border-t border-[color:var(--line-color)] py-6 text-sm text-[color:var(--muted-copy)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ${$.name}. Built with Lit, Vite, Tailwind CSS, and pnpm.</p>
            <a class="hover:text-accent" href="#top">Back to top</a>
          </footer>
        </div>
      </section>
    `}};customElements.define(`contact-section`,Ge);var Ke=class extends Q{connectedCallback(){super.connectedCallback(),this._observer=null}firstUpdated(){requestAnimationFrame(()=>this._setupMotion())}_setupMotion(){if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){this.querySelectorAll(`.motion-item, .timeline-line`).forEach(e=>{e.classList.add(`is-visible`)});return}this._observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),this._observer.unobserve(e.target))})},{rootMargin:`0px 0px -10% 0px`,threshold:.16}),this.querySelectorAll(`.motion-item, .timeline-line`).forEach(e=>{this._observer.observe(e)}),this.querySelectorAll(`.interactive-card`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();e.style.setProperty(`--spot-x`,`${t.clientX-n.left}px`),e.style.setProperty(`--spot-y`,`${t.clientY-n.top}px`)})})}disconnectedCallback(){this._observer?.disconnect(),super.disconnectedCallback()}createRenderRoot(){return this}render(){return V`
      <a
        class="skip-link rounded-[6px] bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg"
        href="#main"
      >
        Skip to content
      </a>
      <site-header></site-header>
      <main id="main" class="relative">
        <hero-section></hero-section>
        <about-section></about-section>
        <skills-section></skills-section>
        <projects-section></projects-section>
        <experience-section></experience-section>
        <education-section></education-section>
        <cv-section></cv-section>
        <contact-section></contact-section>
      </main>
    `}};customElements.define(`portfolio-app`,Ke),document.documentElement.classList.add(`js-enabled`);