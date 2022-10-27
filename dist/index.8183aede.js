var t,e,r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new Map,i=class{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return r&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},a=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new i(r,o)},s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",o))(e)})(t):t,l=window.trustedTypes,c=l?l.emptyScript:"",u=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h},b=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Eh(r,e);void 0!==o&&(this._$Eu.set(o,r),t.push(o))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return o=e,n=this.constructor.elementStyles,r?o.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,o.appendChild(e)})),e;var o,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=p){var o,n;const i=this.constructor._$Eh(t,r);if(void 0!==i&&!0===r.reflect){const a=(null!==(n=null===(o=r.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:d.toAttribute)(e,r.type);this._$Ei=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Ei=null}}_$AK(t,e){var r,o,n;const i=this.constructor,a=i._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=i.getPropertyOptions(a),s=t.converter,l=null!==(n=null!==(o=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(t=globalThis.reactiveElementVersions)&&void 0!==t?t:globalThis.reactiveElementVersions=[]).push("1.3.2");var m=globalThis.trustedTypes,f=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,g="?"+v,y=`<${g}>`,_=document,w=(t="")=>_.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,$=t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,N=/"/g,z=/^(?:script|style|textarea|title)$/i,L=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),O=L(1),R=L(2),M=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),F=new WeakMap,U=_.createTreeWalker(_,129,null,!1),P=(t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",a=A;for(let e=0;e<r;e++){const r=t[e];let s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,l=a.exec(r),null!==l);)u=a.lastIndex,a===A?"!--"===l[1]?a=E:void 0!==l[1]?a=S:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=T):void 0!==l[3]&&(a=T):a===T?">"===l[0]?(a=null!=n?n:A,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?T:'"'===l[3]?N:C):a===N||a===C?a=T:a===E||a===S?a=A:(a=T,n=void 0);const d=a===T&&t[e+1].startsWith("/>")?" ":"";i+=a===A?r+y:c>=0?(o.push(s),r.slice(0,c)+"$lit$"+r.slice(c)+v+d):r+v+(-2===c?(o.push(void 0),e):d)}const s=i+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(s):s,o]},B=class{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[l,c]=P(t,e);if(this.el=B.createElement(l,r),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=U.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const r=c[i++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Y:"@"===e[1]?J:W})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(z.test(o.tagName)){const t=o.textContent.split(v),e=t.length-1;if(e>0){o.textContent=m?m.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],w()),U.nextNode(),s.push({type:2,index:++n});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===g)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(v,t+1));)s.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const r=_.createElement("template");return r.innerHTML=t,r}};function H(t,e,r=t,o){var n,i,a,s;if(e===M)return e;let l=void 0!==o?null===(n=r._$Cl)||void 0===n?void 0:n[o]:r._$Cu;const c=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,o)),void 0!==o?(null!==(a=(s=r)._$Cl)&&void 0!==a?a:s._$Cl=[])[o]=l:r._$Cu=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,o)),e}var I,V,j=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(r,!0);U.currentNode=n;let i=U.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new q(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new X(i,this,t)),this.v.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(i=U.nextNode(),a++)}return n}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},q=class{constructor(t,e,r,o){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),x(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):$(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==D&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=B.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(r);else{const t=new j(n,this),e=t.p(this.options);t.m(r),this.k(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new B(t)),e}S(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new q(this.M(w()),this.M(w()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},W=class{constructor(t,e,r,o,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=H(this,t,e,0),i=!x(t)||t!==this._$AH&&t!==M,i&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=H(this,o[r+a],e,a),s===M&&(s=this._$AH[a]),i||(i=!x(s)||s!==this._$AH[a]),s===D?t=D:t!==D&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}i&&!o&&this.C(t)}C(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},G=class extends W{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===D?void 0:t}},K=m?m.emptyScript:"",Y=class extends W{constructor(){super(...arguments),this.type=4}C(t){t&&t!==D?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}},J=class extends W{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=H(this,t,e,0))&&void 0!==r?r:D)===M)return;const o=this._$AH,n=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==D&&(o===D||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}},X=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}},Z={L:"$lit$",P:v,V:g,I:1,N:P,R:j,j:$,D:H,H:q,F:W,O:Y,W:J,B:G,Z:X},Q=window.litHtmlPolyfillSupport;null==Q||Q(B,q),(null!==(e=globalThis.litHtmlVersions)&&void 0!==e?e:globalThis.litHtmlVersions=[]).push("2.2.4");var tt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var o,n;const i=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let a=i._$litPart$;if(void 0===a){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=a=new q(e.insertBefore(w(),t),t,void 0,null!=r?r:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}};tt.finalized=!0,tt._$litElement$=!0,null===(I=globalThis.litElementHydrateSupport)||void 0===I||I.call(globalThis,{LitElement:tt});var et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.0");var rt=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ot=a`
  ${rt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,nt=(Object.create,Object.defineProperty),it=Object.defineProperties,at=Object.getOwnPropertyDescriptor,st=Object.getOwnPropertyDescriptors,lt=(Object.getOwnPropertyNames,Object.getOwnPropertySymbols),ct=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),ut=Object.prototype.propertyIsEnumerable,dt=(t,e,r)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ht=(t,e)=>{for(var r in e||(e={}))ct.call(e,r)&&dt(t,r,e[r]);if(lt)for(var r of lt(e))ut.call(e,r)&&dt(t,r,e[r]);return t},pt=(t,e)=>it(t,st(e)),bt=(t,e,r,o)=>{for(var n,i=o>1?void 0:o?at(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&nt(e,r,i),i},mt=class extends Event{constructor(t){super("formdata"),this.formData=t}},ft=class extends FormData{constructor(t){var e=(...t)=>{super(...t)};t?(e(t),this.form=t,t.dispatchEvent(new mt(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let r=this.form.elements[t];if(r||(r=document.createElement("input"),r.type="hidden",r.name=t,this.form.appendChild(r)),this.has(t)){const o=this.getAll(t),n=o.indexOf(r.value);-1!==n&&o.splice(n,1),o.push(e),this.set(t,o)}else super.append(t,e);r.value=e}};function vt(){window.FormData&&!function(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",(t=>{new FormData(t.target),t.preventDefault()})),t.addEventListener("formdata",(()=>e=!0)),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}()&&(window.FormData=ft,window.addEventListener("submit",(t=>{t.defaultPrevented||new FormData(t.target)})))}"complete"===document.readyState?vt():window.addEventListener("DOMContentLoaded",(()=>vt()));var gt,yt=new WeakMap,_t=class{constructor(t,e){(this.host=t).addController(this),this.options=ht({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>t.disabled,reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>{t.value=e}},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),yt.has(this.form)||(yt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),yt.has(this.form)&&(this.form.reportValidity=yt.get(this.form),yt.delete(this.form)),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host);e||"string"!=typeof r||void 0===o||(Array.isArray(o)?o.forEach((e=>{t.formData.append(r,e.toString())})):t.formData.append(r,o.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),r=this.options.reportValidity;!this.form||this.form.noValidate||e||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}doAction(t,e){if(this.form){const r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&["formaction","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&r.setAttribute(t,e.getAttribute(t))})),this.form.append(r),r.click(),r.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},wt=Symbol.for(""),xt=t=>{var e,r;if((null===(e=t)||void 0===e?void 0:e.r)===wt)return null===(r=t)||void 0===r?void 0:r._$litStatic$},kt=(t,...e)=>({_$litStatic$:e.reduce(((e,r,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[o+1]),t[0]),r:wt}),$t=new Map,At=t=>(e,...r)=>{const o=r.length;let n,i;const a=[],s=[];let l,c=0,u=!1;for(;c<o;){for(l=e[c];c<o&&void 0!==(i=r[c],n=xt(i));)l+=n+e[++c],u=!0;s.push(i),a.push(l),c++}if(c===o&&a.push(e[o]),u){const t=a.join("$$lit$$");void 0===(e=$t.get(t))&&(a.raw=a,$t.set(t,e=a)),r=s}return t(e,...r)},Et=At(O),St=(At(R),new Set),Tt=new MutationObserver(Lt),Ct=new Map,Nt=document.documentElement.dir||"ltr",zt=document.documentElement.lang||navigator.language;function Lt(){Nt=document.documentElement.dir||"ltr",zt=document.documentElement.lang||navigator.language,[...St.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Tt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Ot=class extends class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){St.add(this.host)}hostDisconnected(){St.delete(this.host)}dir(){return`${this.host.dir||Nt}`.toLowerCase()}lang(){return`${this.host.lang||zt}`.toLowerCase()}term(t,...e){const r=this.lang().toLowerCase().slice(0,2),o=this.lang().length>2?this.lang().toLowerCase():"",n=Ct.get(o),i=Ct.get(r);let a;if(n&&n[t])a=n[t];else if(i&&i[t])a=i[t];else{if(!gt||!gt[t])return console.error(`No translation found for: ${String(t)}`),t;a=gt[t]}return"function"==typeof a?a(...e):a}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}}{},Rt={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Ct.has(e)?Ct.set(e,Object.assign(Object.assign({},Ct.get(e)),t)):Ct.set(e,t),gt||(gt=t)})),Lt()}(Rt);var Mt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};var Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ft=t=>(...e)=>({_$litDirective$:t,values:e}),Ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Pt=Ft(class extends Ut{constructor(t){var e;if(super(t),t.type!==Dt.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,o;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const r=!!e[t];r===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(r?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return M}}),Bt=t=>null!=t?t:D;function Ht(t,e,r){const o=new CustomEvent(e,ht({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return t.dispatchEvent(o),o}var It=t=>e=>{return"function"==typeof e?(r=t,o=e,window.customElements.define(r,o),o):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e);var r,o},Vt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?pt(ht({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function jt(t){return(e,r)=>{return void 0!==r?(o=t,n=r,void e.constructor.createProperty(n,o)):Vt(t,e);var o,n}}function qt(t){return jt(pt(ht({},t),{state:!0}))}var Wt,Gt=({finisher:t,descriptor:e})=>(r,o)=>{var n;if(void 0===o){const o=null!==(n=r.originalKey)&&void 0!==n?n:r.key,i=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:pt(ht({},r),{key:o});return null!=t&&(i.finisher=function(e){t(e,o)}),i}{const n=r.constructor;void 0!==e&&Object.defineProperty(r,o,e(o)),null==t||t(n,o)}};function Kt(t,e){return Gt({descriptor:r=>{const o={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[e]&&(this[e]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}null===(Wt=window.HTMLSlotElement)||void 0===Wt||Wt.prototype.assignedElements;var Yt=class extends tt{constructor(){super(...arguments),this.formSubmitController=new _t(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),r=t.getAttribute("form");return e.getElementById(r)}return t.closest("form")}}),this.hasSlotController=new Mt(this,"[default]","prefix","suffix"),this.localize=new Ot(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,Ht(this,"sl-blur")}handleFocus(){this.hasFocus=!0,Ht(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this),"reset"===this.type&&this.formSubmitController.reset(this)}render(){const t=!!this.href,e=t?kt`a`:kt`button`;return Et`
      <${e}
        part="base"
        class=${Pt({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Bt(t?void 0:this.disabled)}
        type=${Bt(t?void 0:this.type)}
        name=${Bt(t?void 0:this.name)}
        value=${Bt(t?void 0:this.value)}
        href=${Bt(t?this.href:void 0)}
        target=${Bt(t?this.target:void 0)}
        download=${Bt(t?this.download:void 0)}
        rel=${Bt(t&&this.target?"noreferrer noopener":void 0)}
        role=${Bt(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?Et`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?Et`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};Yt.styles=ot,bt([Kt(".button")],Yt.prototype,"button",2),bt([qt()],Yt.prototype,"hasFocus",2),bt([jt({reflect:!0})],Yt.prototype,"variant",2),bt([jt({reflect:!0})],Yt.prototype,"size",2),bt([jt({type:Boolean,reflect:!0})],Yt.prototype,"caret",2),bt([jt({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2),bt([jt({type:Boolean,reflect:!0})],Yt.prototype,"loading",2),bt([jt({type:Boolean,reflect:!0})],Yt.prototype,"outline",2),bt([jt({type:Boolean,reflect:!0})],Yt.prototype,"pill",2),bt([jt({type:Boolean,reflect:!0})],Yt.prototype,"circle",2),bt([jt()],Yt.prototype,"type",2),bt([jt()],Yt.prototype,"name",2),bt([jt()],Yt.prototype,"value",2),bt([jt()],Yt.prototype,"href",2),bt([jt()],Yt.prototype,"target",2),bt([jt()],Yt.prototype,"download",2),bt([jt()],Yt.prototype,"form",2),bt([jt({attribute:"formaction"})],Yt.prototype,"formAction",2),bt([jt({attribute:"formmethod"})],Yt.prototype,"formMethod",2),bt([jt({attribute:"formnovalidate",type:Boolean})],Yt.prototype,"formNoValidate",2),bt([jt({attribute:"formtarget"})],Yt.prototype,"formTarget",2),Yt=bt([It("sl-button")],Yt);var Jt=a`
  ${rt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Xt=class extends tt{render(){return O`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Xt.styles=Jt,Xt=bt([It("sl-spinner")],Xt);var Zt=a`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,Qt=a`
  ${rt}
  ${Zt}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,{H:te}=Z,ee={},re=Ft(class extends Ut{constructor(t){if(super(t),t.type!==Dt.PROPERTY&&t.type!==Dt.ATTRIBUTE&&t.type!==Dt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==t.strings)throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===M||e===D)return e;const r=t.element,o=t.name;if(t.type===Dt.PROPERTY){if(e===r[o])return M}else if(t.type===Dt.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return M}else if(t.type===Dt.ATTRIBUTE&&r.getAttribute(o)===e+"")return M;return((t,e=ee)=>{t._$AH=e})(t),e}}),oe=(t="value")=>(e,r)=>{const o=e.constructor,n=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,i,a){var s;const l=o.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||d,o=("function"==typeof e?e:null!=(s=null==e?void 0:e.fromAttribute)?s:d.fromAttribute)(a,l.type);this[t]!==o&&(this[r]=o)}n.call(this,e,i,a)}};function ne(t,e){const r=ht({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:n}=e;if(t in e){const i=t;e.update=function(t){if(t.has(i)){const e=t.get(i),n=this[i];e!==n&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,n))}n.call(this,t)}}}}var ie=class extends tt{constructor(){super(...arguments),this.formSubmitController=new _t(this),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new Ot(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsDate)?e:null}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsNumber)?e:parseFloat(this.value)}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,o="preserve"){this.input.setRangeText(t,e,r,o),this.value!==this.input.value&&(this.value=this.input.value,Ht(this,"sl-input"),Ht(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,Ht(this,"sl-blur")}handleChange(){this.value=this.input.value,Ht(this,"sl-change")}handleClearClick(t){this.value="",Ht(this,"sl-clear"),Ht(this,"sl-input"),Ht(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,Ht(this,"sl-focus")}handleInput(){this.value=this.input.value,Ht(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||this.formSubmitController.submit()}))}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=!!this.label||!!t,o=!!this.helpText||!!e,n=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return O`
      <div
        part="form-control"
        class=${Pt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Pt({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":navigator.userAgent.includes("Firefox")})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.isPasswordVisible?"text":this.type}
              name=${Bt(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Bt(this.placeholder)}
              minlength=${Bt(this.minlength)}
              maxlength=${Bt(this.maxlength)}
              min=${Bt(this.min)}
              max=${Bt(this.max)}
              step=${Bt(this.step)}
              .value=${re(this.value)}
              autocapitalize=${Bt("password"===this.type?"off":this.autocapitalize)}
              autocomplete=${Bt("password"===this.type?"off":this.autocomplete)}
              autocorrect=${Bt("password"===this.type?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Bt(this.spellcheck)}
              pattern=${Bt(this.pattern)}
              enterkeyhint=${Bt(this.enterkeyhint)}
              inputmode=${Bt(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?O`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.togglePassword&&!this.disabled?O`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?O`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:O`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ie.styles=Qt,bt([Kt(".input__control")],ie.prototype,"input",2),bt([qt()],ie.prototype,"hasFocus",2),bt([qt()],ie.prototype,"isPasswordVisible",2),bt([jt({reflect:!0})],ie.prototype,"type",2),bt([jt({reflect:!0})],ie.prototype,"size",2),bt([jt()],ie.prototype,"name",2),bt([jt()],ie.prototype,"value",2),bt([oe()],ie.prototype,"defaultValue",2),bt([jt({type:Boolean,reflect:!0})],ie.prototype,"filled",2),bt([jt({type:Boolean,reflect:!0})],ie.prototype,"pill",2),bt([jt()],ie.prototype,"label",2),bt([jt({attribute:"help-text"})],ie.prototype,"helpText",2),bt([jt({type:Boolean})],ie.prototype,"clearable",2),bt([jt({attribute:"toggle-password",type:Boolean})],ie.prototype,"togglePassword",2),bt([jt({attribute:"no-spin-buttons",type:Boolean})],ie.prototype,"noSpinButtons",2),bt([jt()],ie.prototype,"placeholder",2),bt([jt({type:Boolean,reflect:!0})],ie.prototype,"disabled",2),bt([jt({type:Boolean,reflect:!0})],ie.prototype,"readonly",2),bt([jt({type:Number})],ie.prototype,"minlength",2),bt([jt({type:Number})],ie.prototype,"maxlength",2),bt([jt()],ie.prototype,"min",2),bt([jt()],ie.prototype,"max",2),bt([jt({type:Number})],ie.prototype,"step",2),bt([jt()],ie.prototype,"pattern",2),bt([jt({type:Boolean,reflect:!0})],ie.prototype,"required",2),bt([jt({type:Boolean,reflect:!0})],ie.prototype,"invalid",2),bt([jt()],ie.prototype,"autocapitalize",2),bt([jt()],ie.prototype,"autocorrect",2),bt([jt()],ie.prototype,"autocomplete",2),bt([jt({type:Boolean})],ie.prototype,"autofocus",2),bt([jt()],ie.prototype,"enterkeyhint",2),bt([jt({type:Boolean})],ie.prototype,"spellcheck",2),bt([jt()],ie.prototype,"inputmode",2),bt([ne("disabled",{waitUntilFirstUpdate:!0})],ie.prototype,"handleDisabledChange",1),bt([ne("value",{waitUntilFirstUpdate:!0})],ie.prototype,"handleValueChange",1),ie=bt([It("sl-input")],ie);var ae="";function se(t){ae=t}function le(){if(!ae){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)se(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let r="";e&&(r=e.getAttribute("src")),se(r.split("/").slice(0,-1).join("/"))}}return ae.replace(/\/$/,"")}var ce={"check-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">\n      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',x:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ue=[{name:"default",resolver:t=>`${le()}/assets/icons/${t}.svg`},{name:"system",resolver:t=>t in ce?`data:image/svg+xml,${encodeURIComponent(ce[t])}`:""}],de=[];function he(t){return ue.find((e=>e.name===t))}var pe=new Map;function be(t,e="cors"){if(pe.has(t))return pe.get(t);const r=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return pe.set(t,r),r}var me=new Map;async function fe(t){if(me.has(t))return me.get(t);const e=await be(t),r={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const o=t.firstElementChild;r.svg="svg"===(null==o?void 0:o.tagName.toLowerCase())?o.outerHTML:""}return me.set(t,r),r}var ve=a`
  ${rt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ge=class extends Ut{constructor(t){if(super(t),this.it=D,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||null==t)return this.ft=void 0,this.it=t;if(t===M)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ge.directiveName="unsafeHTML",ge.resultType=1;Ft(ge);var ye=class extends ge{};ye.directiveName="unsafeSVG",ye.resultType=2;var _e,we=Ft(ye),xe=class extends tt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,de.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,de=de.filter((e=>e!==t))}getUrl(){const t=he(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=he(this.library),r=this.getUrl();if(_e||(_e=new DOMParser),r)try{const o=await fe(r);if(r!==this.getUrl())return;if(o.ok){const r=_e.parseFromString(o.svg,"text/html").body.querySelector("svg");null!==r?(null==(t=null==e?void 0:e.mutator)||t.call(e,r),this.svg=r.outerHTML,Ht(this,"sl-load")):(this.svg="",Ht(this,"sl-error"))}else this.svg="",Ht(this,"sl-error")}catch(t){Ht(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t="string"==typeof this.label&&this.label.length>0;return O` <div
      part="base"
      class="icon"
      role=${Bt(t?"img":void 0)}
      aria-label=${Bt(t?this.label:void 0)}
      aria-hidden=${Bt(t?void 0:"true")}
    >
      ${we(this.svg)}
    </div>`}};xe.styles=ve,bt([qt()],xe.prototype,"svg",2),bt([jt({reflect:!0})],xe.prototype,"name",2),bt([jt()],xe.prototype,"src",2),bt([jt()],xe.prototype,"label",2),bt([jt({reflect:!0})],xe.prototype,"library",2),bt([ne("name"),ne("src"),ne("library")],xe.prototype,"setIcon",1),xe=bt([It("sl-icon")],xe);var ke=a`
  ${rt}
  ${Zt}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,$e=class extends tt{constructor(){super(...arguments),this.formSubmitController=new _t(this),this.hasSlotController=new Mt(this,"help-text","label"),this.hasFocus=!1,this.size="medium",this.value="",this.filled=!1,this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,o="preserve"){this.input.setRangeText(t,e,r,o),this.value!==this.input.value&&(this.value=this.input.value,Ht(this,"sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),Ht(this,"sl-input"),Ht(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,Ht(this,"sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),Ht(this,"sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,Ht(this,"sl-focus")}handleInput(){this.value=this.input.value,this.setTextareaHeight(),Ht(this,"sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity()}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=!!this.label||!!t,o=!!this.helpText||!!e;return O`
      <div
        part="form-control"
        class=${Pt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Pt({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${Bt(this.name)}
              .value=${re(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Bt(this.placeholder)}
              rows=${Bt(this.rows)}
              minlength=${Bt(this.minlength)}
              maxlength=${Bt(this.maxlength)}
              autocapitalize=${Bt(this.autocapitalize)}
              autocorrect=${Bt(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Bt(this.spellcheck)}
              enterkeyhint=${Bt(this.enterkeyhint)}
              inputmode=${Bt(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$e.styles=ke,bt([Kt(".textarea__control")],$e.prototype,"input",2),bt([qt()],$e.prototype,"hasFocus",2),bt([jt({reflect:!0})],$e.prototype,"size",2),bt([jt()],$e.prototype,"name",2),bt([jt()],$e.prototype,"value",2),bt([jt({type:Boolean,reflect:!0})],$e.prototype,"filled",2),bt([jt()],$e.prototype,"label",2),bt([jt({attribute:"help-text"})],$e.prototype,"helpText",2),bt([jt()],$e.prototype,"placeholder",2),bt([jt({type:Number})],$e.prototype,"rows",2),bt([jt()],$e.prototype,"resize",2),bt([jt({type:Boolean,reflect:!0})],$e.prototype,"disabled",2),bt([jt({type:Boolean,reflect:!0})],$e.prototype,"readonly",2),bt([jt({type:Number})],$e.prototype,"minlength",2),bt([jt({type:Number})],$e.prototype,"maxlength",2),bt([jt({type:Boolean,reflect:!0})],$e.prototype,"required",2),bt([jt({type:Boolean,reflect:!0})],$e.prototype,"invalid",2),bt([jt()],$e.prototype,"autocapitalize",2),bt([jt()],$e.prototype,"autocorrect",2),bt([jt()],$e.prototype,"autocomplete",2),bt([jt({type:Boolean})],$e.prototype,"autofocus",2),bt([jt()],$e.prototype,"enterkeyhint",2),bt([jt({type:Boolean})],$e.prototype,"spellcheck",2),bt([jt()],$e.prototype,"inputmode",2),bt([oe()],$e.prototype,"defaultValue",2),bt([ne("disabled",{waitUntilFirstUpdate:!0})],$e.prototype,"handleDisabledChange",1),bt([ne("rows",{waitUntilFirstUpdate:!0})],$e.prototype,"handleRowsChange",1),bt([ne("value",{waitUntilFirstUpdate:!0})],$e.prototype,"handleValueChange",1),$e=bt([It("sl-textarea")],$e);var Ae=a`
  ${rt}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Ee=class extends tt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,Ht(this,"sl-blur")}handleFocus(){this.hasFocus=!0,Ht(this,"sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?kt`a`:kt`button`;return Et`
      <${e}
        part="base"
        class=${Pt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Bt(t?void 0:this.disabled)}
        type=${Bt(t?void 0:"button")}
        href=${Bt(t?this.href:void 0)}
        target=${Bt(t?this.target:void 0)}
        download=${Bt(t?this.download:void 0)}
        rel=${Bt(t&&this.target?"noreferrer noopener":void 0)}
        role=${Bt(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Bt(this.name)}
          library=${Bt(this.library)}
          src=${Bt(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ee.styles=Ae,bt([qt()],Ee.prototype,"hasFocus",2),bt([Kt(".icon-button")],Ee.prototype,"button",2),bt([jt()],Ee.prototype,"name",2),bt([jt()],Ee.prototype,"library",2),bt([jt()],Ee.prototype,"src",2),bt([jt()],Ee.prototype,"href",2),bt([jt()],Ee.prototype,"target",2),bt([jt()],Ee.prototype,"download",2),bt([jt()],Ee.prototype,"label",2),bt([jt({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2),Ee=bt([It("sl-icon-button")],Ee);var Se=a`
  ${rt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Te=class extends tt{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${Pt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};function Ce(t){const e=new FormData(t),r={};return e.forEach(((t,e)=>{if(Reflect.has(r,e)){const o=r[e];Array.isArray(o)?o.push(t):r[e]=[r[e],t]}else r[e]=t})),r}Te.styles=Se,Te=bt([It("sl-card")],Te);var Ne={};
/*! @license DOMPurify 2.3.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.10/LICENSE */Ne=function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,r){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,r)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t,n,i){return(o=r()?Reflect.construct:function(t,r,o){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(t,n));return o&&e(i,o.prototype),i}).apply(null,arguments)}function n(t){return i(t)||a(t)||s(t)||c()}function i(t){if(Array.isArray(t))return l(t)}function a(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,d=Object.setPrototypeOf,h=Object.isFrozen,p=Object.getPrototypeOf,b=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,v=Object.create,g="undefined"!=typeof Reflect&&Reflect,y=g.apply,_=g.construct;y||(y=function(t,e,r){return t.apply(e,r)}),m||(m=function(t){return t}),f||(f=function(t){return t}),_||(_=function(t,e){return o(t,n(e))});var w=z(Array.prototype.forEach),x=z(Array.prototype.pop),k=z(Array.prototype.push),$=z(String.prototype.toLowerCase),A=z(String.prototype.match),E=z(String.prototype.replace),S=z(String.prototype.indexOf),T=z(String.prototype.trim),C=z(RegExp.prototype.test),N=L(TypeError);function z(t){return function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return y(t,e,o)}}function L(t){return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return _(t,r)}}function O(t,e,r){r=r||$,d&&d(t,null);for(var o=e.length;o--;){var n=e[o];if("string"==typeof n){var i=r(n);i!==n&&(h(e)||(e[o]=i),n=i)}t[n]=!0}return t}function R(t){var e,r=v(null);for(e in t)y(u,t,[e])&&(r[e]=t[e]);return r}function M(t,e){for(;null!==t;){var r=b(t,e);if(r){if(r.get)return z(r.get);if("function"==typeof r.value)return z(r.value)}t=p(t)}function o(t){return console.warn("fallback value for",t),null}return o}var D=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),F=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),I=m(["#text"]),V=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),j=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),q=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),W=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),K=f(/<%[\w\W]*|[\w\W]*%>/gm),Y=f(/^data-[\-\w.\u00B7-\uFFFF]/),J=f(/^aria-[\-\w]+$/),X=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Z=f(/^(?:\w+script|data):/i),Q=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=f(/^html$/i),et=function(){return"undefined"==typeof window?null:window},rt=function(e,r){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var o=null,n="data-tt-policy-suffix";r.currentScript&&r.currentScript.hasAttribute(n)&&(o=r.currentScript.getAttribute(n));var i="dompurify"+(o?"#"+o:"");try{return e.createPolicy(i,{createHTML:function(t){return t},createScriptURL:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function ot(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),r=function(t){return ot(t)};if(r.version="2.3.10",r.removed=[],!e||!e.document||9!==e.document.nodeType)return r.isSupported=!1,r;var o=e.document,i=e.document,a=e.DocumentFragment,s=e.HTMLTemplateElement,l=e.Node,c=e.Element,u=e.NodeFilter,d=e.NamedNodeMap,h=void 0===d?e.NamedNodeMap||e.MozNamedAttrMap:d,p=e.HTMLFormElement,b=e.DOMParser,f=e.trustedTypes,v=c.prototype,g=M(v,"cloneNode"),y=M(v,"nextSibling"),_=M(v,"childNodes"),z=M(v,"parentNode");if("function"==typeof s){var L=i.createElement("template");L.content&&L.content.ownerDocument&&(i=L.content.ownerDocument)}var nt=rt(f,o),it=nt?nt.createHTML(""):"",at=i,st=at.implementation,lt=at.createNodeIterator,ct=at.createDocumentFragment,ut=at.getElementsByTagName,dt=o.importNode,ht={};try{ht=R(i).documentMode?i.documentMode:{}}catch(t){}var pt={};r.isSupported="function"==typeof z&&st&&void 0!==st.createHTMLDocument&&9!==ht;var bt,mt,ft=G,vt=K,gt=Y,yt=J,_t=Z,wt=Q,xt=X,kt=null,$t=O({},[].concat(n(D),n(F),n(U),n(B),n(I))),At=null,Et=O({},[].concat(n(V),n(j),n(q),n(W))),St=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Tt=null,Ct=null,Nt=!0,zt=!0,Lt=!1,Ot=!1,Rt=!1,Mt=!1,Dt=!1,Ft=!1,Ut=!1,Pt=!1,Bt=!0,Ht=!0,It=!1,Vt={},jt=null,qt=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Wt=null,Gt=O({},["audio","video","img","source","image","track"]),Kt=null,Yt=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Jt="http://www.w3.org/1998/Math/MathML",Xt="http://www.w3.org/2000/svg",Zt="http://www.w3.org/1999/xhtml",Qt=Zt,te=!1,ee=["application/xhtml+xml","text/html"],re="text/html",oe=null,ne=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},ae=function(e){oe&&oe===e||(e&&"object"===t(e)||(e={}),e=R(e),bt=bt=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?re:e.PARSER_MEDIA_TYPE,mt="application/xhtml+xml"===bt?function(t){return t}:$,kt="ALLOWED_TAGS"in e?O({},e.ALLOWED_TAGS,mt):$t,At="ALLOWED_ATTR"in e?O({},e.ALLOWED_ATTR,mt):Et,Kt="ADD_URI_SAFE_ATTR"in e?O(R(Yt),e.ADD_URI_SAFE_ATTR,mt):Yt,Wt="ADD_DATA_URI_TAGS"in e?O(R(Gt),e.ADD_DATA_URI_TAGS,mt):Gt,jt="FORBID_CONTENTS"in e?O({},e.FORBID_CONTENTS,mt):qt,Tt="FORBID_TAGS"in e?O({},e.FORBID_TAGS,mt):{},Ct="FORBID_ATTR"in e?O({},e.FORBID_ATTR,mt):{},Vt="USE_PROFILES"in e&&e.USE_PROFILES,Nt=!1!==e.ALLOW_ARIA_ATTR,zt=!1!==e.ALLOW_DATA_ATTR,Lt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ot=e.SAFE_FOR_TEMPLATES||!1,Rt=e.WHOLE_DOCUMENT||!1,Ft=e.RETURN_DOM||!1,Ut=e.RETURN_DOM_FRAGMENT||!1,Pt=e.RETURN_TRUSTED_TYPE||!1,Dt=e.FORCE_BODY||!1,Bt=!1!==e.SANITIZE_DOM,Ht=!1!==e.KEEP_CONTENT,It=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Qt=e.NAMESPACE||Zt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(St.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(St.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(St.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ot&&(zt=!1),Ut&&(Ft=!0),Vt&&(kt=O({},n(I)),At=[],!0===Vt.html&&(O(kt,D),O(At,V)),!0===Vt.svg&&(O(kt,F),O(At,j),O(At,W)),!0===Vt.svgFilters&&(O(kt,U),O(At,j),O(At,W)),!0===Vt.mathMl&&(O(kt,B),O(At,q),O(At,W))),e.ADD_TAGS&&(kt===$t&&(kt=R(kt)),O(kt,e.ADD_TAGS,mt)),e.ADD_ATTR&&(At===Et&&(At=R(At)),O(At,e.ADD_ATTR,mt)),e.ADD_URI_SAFE_ATTR&&O(Kt,e.ADD_URI_SAFE_ATTR,mt),e.FORBID_CONTENTS&&(jt===qt&&(jt=R(jt)),O(jt,e.FORBID_CONTENTS,mt)),Ht&&(kt["#text"]=!0),Rt&&O(kt,["html","head","body"]),kt.table&&(O(kt,["tbody"]),delete Tt.tbody),m&&m(e),oe=e)},se=O({},["mi","mo","mn","ms","mtext"]),le=O({},["foreignobject","desc","title","annotation-xml"]),ce=O({},["title","style","font","a","script"]),ue=O({},F);O(ue,U),O(ue,P);var de=O({},B);O(de,H);var he=function(t){var e=z(t);e&&e.tagName||(e={namespaceURI:Zt,tagName:"template"});var r=$(t.tagName),o=$(e.tagName);return t.namespaceURI===Xt?e.namespaceURI===Zt?"svg"===r:e.namespaceURI===Jt?"svg"===r&&("annotation-xml"===o||se[o]):Boolean(ue[r]):t.namespaceURI===Jt?e.namespaceURI===Zt?"math"===r:e.namespaceURI===Xt?"math"===r&&le[o]:Boolean(de[r]):t.namespaceURI===Zt&&!(e.namespaceURI===Xt&&!le[o])&&!(e.namespaceURI===Jt&&!se[o])&&!de[r]&&(ce[r]||!ue[r])},pe=function(t){k(r.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=it}catch(e){t.remove()}}},be=function(t,e){try{k(r.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){k(r.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!At[t])if(Ft||Ut)try{pe(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},me=function(t){var e,r;if(Dt)t="<remove></remove>"+t;else{var o=A(t,/^[\r\n\t ]+/);r=o&&o[0]}"application/xhtml+xml"===bt&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var n=nt?nt.createHTML(t):t;if(Qt===Zt)try{e=(new b).parseFromString(n,bt)}catch(t){}if(!e||!e.documentElement){e=st.createDocument(Qt,"template",null);try{e.documentElement.innerHTML=te?"":n}catch(t){}}var a=e.body||e.documentElement;return t&&r&&a.insertBefore(i.createTextNode(r),a.childNodes[0]||null),Qt===Zt?ut.call(e,Rt?"html":"body")[0]:Rt?e.documentElement:a},fe=function(t){return lt.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof p&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof h)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ge=function(e){return"object"===t(l)?e instanceof l:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ye=function(t,e,o){pt[t]&&w(pt[t],(function(t){t.call(r,e,o,oe)}))},_e=function(t){var e;if(ye("beforeSanitizeElements",t,null),ve(t))return pe(t),!0;if(C(/[\u0080-\uFFFF]/,t.nodeName))return pe(t),!0;var o=mt(t.nodeName);if(ye("uponSanitizeElement",t,{tagName:o,allowedTags:kt}),t.hasChildNodes()&&!ge(t.firstElementChild)&&(!ge(t.content)||!ge(t.content.firstElementChild))&&C(/<[/\w]/g,t.innerHTML)&&C(/<[/\w]/g,t.textContent))return pe(t),!0;if("select"===o&&C(/<template/i,t.innerHTML))return pe(t),!0;if(!kt[o]||Tt[o]){if(!Tt[o]&&xe(o)){if(St.tagNameCheck instanceof RegExp&&C(St.tagNameCheck,o))return!1;if(St.tagNameCheck instanceof Function&&St.tagNameCheck(o))return!1}if(Ht&&!jt[o]){var n=z(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&n)for(var a=i.length-1;a>=0;--a)n.insertBefore(g(i[a],!0),y(t))}return pe(t),!0}return t instanceof c&&!he(t)?(pe(t),!0):"noscript"!==o&&"noembed"!==o||!C(/<\/no(script|embed)/i,t.innerHTML)?(Ot&&3===t.nodeType&&(e=t.textContent,e=E(e,ft," "),e=E(e,vt," "),t.textContent!==e&&(k(r.removed,{element:t.cloneNode()}),t.textContent=e)),ye("afterSanitizeElements",t,null),!1):(pe(t),!0)},we=function(t,e,r){if(Bt&&("id"===e||"name"===e)&&(r in i||r in ne))return!1;if(zt&&!Ct[e]&&C(gt,e));else if(Nt&&C(yt,e));else if(!At[e]||Ct[e]){if(!(xe(t)&&(St.tagNameCheck instanceof RegExp&&C(St.tagNameCheck,t)||St.tagNameCheck instanceof Function&&St.tagNameCheck(t))&&(St.attributeNameCheck instanceof RegExp&&C(St.attributeNameCheck,e)||St.attributeNameCheck instanceof Function&&St.attributeNameCheck(e))||"is"===e&&St.allowCustomizedBuiltInElements&&(St.tagNameCheck instanceof RegExp&&C(St.tagNameCheck,r)||St.tagNameCheck instanceof Function&&St.tagNameCheck(r))))return!1}else if(Kt[e]);else if(C(xt,E(r,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==S(r,"data:")||!Wt[t])if(Lt&&!C(_t,E(r,wt,"")));else if(r)return!1;return!0},xe=function(t){return t.indexOf("-")>0},ke=function(e){var o,n,i,a;ye("beforeSanitizeAttributes",e,null);var s=e.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:At};for(a=s.length;a--;){var c=o=s[a],u=c.name,d=c.namespaceURI;if(n="value"===u?o.value:T(o.value),i=mt(u),l.attrName=i,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,ye("uponSanitizeAttribute",e,l),n=l.attrValue,!l.forceKeepAttr&&(be(u,e),l.keepAttr))if(C(/\/>/i,n))be(u,e);else{Ot&&(n=E(n,ft," "),n=E(n,vt," "));var h=mt(e.nodeName);if(we(h,i,n)){if(nt&&"object"===t(f)&&"function"==typeof f.getAttributeType)if(d);else switch(f.getAttributeType(h,i)){case"TrustedHTML":n=nt.createHTML(n);break;case"TrustedScriptURL":n=nt.createScriptURL(n)}try{d?e.setAttributeNS(d,u,n):e.setAttribute(u,n),x(r.removed)}catch(t){}}}}ye("afterSanitizeAttributes",e,null)}},$e=function t(e){var r,o=fe(e);for(ye("beforeSanitizeShadowDOM",e,null);r=o.nextNode();)ye("uponSanitizeShadowNode",r,null),_e(r)||(r.content instanceof a&&t(r.content),ke(r));ye("afterSanitizeShadowDOM",e,null)};return r.sanitize=function(n,i){var s,c,u,d,h;if((te=!n)&&(n="\x3c!--\x3e"),"string"!=typeof n&&!ge(n)){if("function"!=typeof n.toString)throw N("toString is not a function");if("string"!=typeof(n=n.toString()))throw N("dirty is not a string, aborting")}if(!r.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof n)return e.toStaticHTML(n);if(ge(n))return e.toStaticHTML(n.outerHTML)}return n}if(Mt||ae(i),r.removed=[],"string"==typeof n&&(It=!1),It){if(n.nodeName){var p=mt(n.nodeName);if(!kt[p]||Tt[p])throw N("root node is forbidden and cannot be sanitized in-place")}}else if(n instanceof l)1===(c=(s=me("\x3c!----\x3e")).ownerDocument.importNode(n,!0)).nodeType&&"BODY"===c.nodeName||"HTML"===c.nodeName?s=c:s.appendChild(c);else{if(!Ft&&!Ot&&!Rt&&-1===n.indexOf("<"))return nt&&Pt?nt.createHTML(n):n;if(!(s=me(n)))return Ft?null:Pt?it:""}s&&Dt&&pe(s.firstChild);for(var b=fe(It?n:s);u=b.nextNode();)3===u.nodeType&&u===d||_e(u)||(u.content instanceof a&&$e(u.content),ke(u),d=u);if(d=null,It)return n;if(Ft){if(Ut)for(h=ct.call(s.ownerDocument);s.firstChild;)h.appendChild(s.firstChild);else h=s;return At.shadowroot&&(h=dt.call(o,h,!0)),h}var m=Rt?s.outerHTML:s.innerHTML;return Rt&&kt["!doctype"]&&s.ownerDocument&&s.ownerDocument.doctype&&s.ownerDocument.doctype.name&&C(tt,s.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+s.ownerDocument.doctype.name+">\n"+m),Ot&&(m=E(m,ft," "),m=E(m,vt," ")),nt&&Pt?nt.createHTML(m):m},r.setConfig=function(t){ae(t),Mt=!0},r.clearConfig=function(){oe=null,Mt=!1},r.isValidAttribute=function(t,e,r){oe||ae({});var o=mt(t),n=mt(e);return we(o,n,r)},r.addHook=function(t,e){"function"==typeof e&&(pt[t]=pt[t]||[],k(pt[t],e))},r.removeHook=function(t){if(pt[t])return x(pt[t])},r.removeHooks=function(t){pt[t]&&(pt[t]=[])},r.removeAllHooks=function(){pt={}},r}return ot()}();class ze{static records=[];static getRecords(){return this.records=JSON.parse(localStorage.getItem("cards")||JSON.stringify([])),this.records}static deleteRecord(t){const e=this.records.find((e=>e.createdAt===t.createdAt)),r=this.records.indexOf(e);if(r<0)throw"Cannot delete a record which does not exist";this.records=[...this.records.slice(0,r),...this.records.slice(r+1)],localStorage.setItem("cards",JSON.stringify(this.records))}static createRecord(t){this.records=[...this.records,t],localStorage.setItem("cards",JSON.stringify(this.records))}}class Le{static all(){return ze.getRecords().map((t=>new Le(t)))}constructor({frontText:t,backText:e,createdAt:r=Date.now()}={}){t=t?.trim(),e=e?.trim();const o={frontText:t,backText:e};Object.entries(o).forEach((([t,e])=>{if(!e)throw`${t} - value required but was blank`})),this.frontText=t,this.backText=e,this.createdAt=r}save(){ze.createRecord(this)}delete(){ze.deleteRecord(this)}}let Oe,Re=[],Me={};const De=()=>{const t=Le.all().map((t=>{const e=document.createRange().createContextualFragment(`<li>${(0,Ne.sanitize)(t.frontText)} - ${(0,Ne.sanitize)(t.backText)}<sl-button name="trash" label="Delete card" class="delete-card" size="small" pill variant="danger" outline>Delete</sl-button></li>`);return e.querySelector("sl-button.delete-card").addEventListener("click",(()=>{t.delete(),De()})),e})),e=document.querySelector("#cards");var r;e.innerHTML="",e.append(...t),r=Le.all().length>0,document.querySelector("#start-test").disabled=!r},Fe=t=>{document.querySelector("#test-container").innerHTML=`<sl-card>${t}</sl-card>`},Ue=()=>{if(Oe=new Be(Re.shift()),Fe(Oe.nextFaceText()),0===Re.length){const t=document.querySelector("#next-card");t.removeEventListener("click",Ue),t.innerText="End Test",t.setAttribute("variant","success"),t.addEventListener("click",He)}},Pe=()=>{Fe(Oe.nextFaceText())};class Be{constructor(t){this.card=t,this.frontIsCurrentFace=!0}nextFaceText(){const t=this.frontIsCurrentFace?this.card.frontText:this.card.backText;return this.frontIsCurrentFace=!this.frontIsCurrentFace,t}}const He=()=>{const t=document.createRange().createContextualFragment('\n    <div class="form-group">\n      <a href="#" id="card-deck-summary-link"></a>\n    </div>\n\n    <ul id="cards"></ul>\n\n    <sl-button id="add-new-card">Add New Card</sl-button>\n    <sl-button id="start-test" variant="success">Start Test</sl-button>\n  ');t.querySelector("#add-new-card").addEventListener("click",(()=>{Me={},Ve("/cards/new/step1")})),t.querySelector("#start-test").addEventListener("click",(()=>{Ve("/cards/test")})),document.querySelector(".app-container").replaceChildren(t),De()},Ie={"/":()=>He(),"/cards/new/step1":()=>(document.querySelector(".app-container").innerHTML='\n    <div>\n      <a id="back-link" href="#">Back</a>\n    </div>\n\n    <form id="create-card-form">\n      <div class="form-group">\n        <label for="front-text">Front Text</label>\n        <sl-textarea id="front-text" name="frontText" required></sl-textarea>\n      </div>\n\n      <sl-button id="next-btn" variant="neutral" type="submit">Next</sl-button>\n    </form>\n  ',document.querySelector("#front-text").value=Me.frontText||"",document.querySelector("#create-card-form").addEventListener("submit",(t=>{t.preventDefault();const e=Ce(document.querySelector("form"));Me={...Me,frontText:e.frontText},Ve("/cards/new/step2")})),void document.querySelector("#back-link").addEventListener("click",(()=>{Me={},Ve("/")}))),"/cards/new/step2":()=>(document.querySelector(".app-container").innerHTML='\n    <a id="back-link" href="#">Back</a>\n\n    <form id="create-card-form">\n      <div class="form-group">\n        <label for="back-text">Back Text</label>\n        <sl-textarea id="back-text" name="backText" required></sl-textarea>\n      </div>\n\n      <sl-button id="next-btn" variant="success" type="submit">Create</sl-button>\n    </form>\n  ',document.querySelector("#back-text").value=Me.backText||"",document.querySelector("#create-card-form").addEventListener("submit",(t=>{t.preventDefault();const e=Ce(document.querySelector("form"));Me={...Me,backText:e.backText};try{new Le({...Me}).save()}catch(t){console.log(`Unable to create card: ${t}`)}Ve("/")})),void document.querySelector("#back-link").addEventListener("click",(()=>{Me={...Me,backText:document.querySelector("#back-text").value},Ve("/cards/new/step1")}))),"/cards/test":()=>(Re=structuredClone(Le.all()),document.querySelector(".app-container").innerHTML='\n    <a id="back-link" href="#">Back</a>\n\n    <div id="test-container"></div>\n\n    <div class="form-group">\n      <sl-button id="flip-card" variant="primary">Flip Card</sl-button>\n    </div>\n\n    <div class="form-group">\n      <sl-button id="next-card" variant="neutral">Next Card</sl-button>\n    </div>',document.querySelector("#flip-card").addEventListener("click",Pe),document.querySelector("#next-card").addEventListener("click",Ue),document.querySelector("#back-link").addEventListener("click",He),void Ue())},Ve=t=>{Ie[t]()};He();
//# sourceMappingURL=index.8183aede.js.map
