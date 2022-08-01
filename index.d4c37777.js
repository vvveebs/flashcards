var t,e,o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new Map,i=class{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return o&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new i(o,r)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new i("string"==typeof t?t:t+"",r))(e)})(t):t,a=window.trustedTypes,u=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h},m=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Eh(o,e);void 0!==r&&(this._$Eu.set(r,o),t.push(r))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r=e,n=this.constructor.elementStyles,o?r.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const e=document.createElement("style"),o=window.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=t.cssText,r.appendChild(e)})),e;var r,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=p){var r,n;const i=this.constructor._$Eh(t,o);if(void 0!==i&&!0===o.reflect){const s=(null!==(n=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:d.toAttribute)(e,o.type);this._$Ei=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(t,e){var o,r,n;const i=this.constructor,s=i._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=i.getPropertyOptions(s),l=t.converter,a=null!==(n=null!==(r=null===(o=l)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=s,this[s]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(t=globalThis.reactiveElementVersions)&&void 0!==t?t:globalThis.reactiveElementVersions=[]).push("1.3.2");var f=globalThis.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,g="?"+v,y=`<${g}>`,_=document,w=(t="")=>_.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,A=t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,N=/"/g,L=/^(?:script|style|textarea|title)$/i,O=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),M=O(1),D=O(2),z=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),U=new WeakMap,P=_.createTreeWalker(_,129,null,!1),F=(t,e)=>{const o=t.length-1,r=[];let n,i=2===e?"<svg>":"",s=k;for(let e=0;e<o;e++){const o=t[e];let l,a,u=-1,c=0;for(;c<o.length&&(s.lastIndex=c,a=s.exec(o),null!==a);)c=s.lastIndex,s===k?"!--"===a[1]?s=E:void 0!==a[1]?s=S:void 0!==a[2]?(L.test(a[2])&&(n=RegExp("</"+a[2],"g")),s=T):void 0!==a[3]&&(s=T):s===T?">"===a[0]?(s=null!=n?n:k,u=-1):void 0===a[1]?u=-2:(u=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?T:'"'===a[3]?N:C):s===N||s===C?s=T:s===E||s===S?s=k:(s=T,n=void 0);const d=s===T&&t[e+1].startsWith("/>")?" ":"";i+=s===k?o+y:u>=0?(r.push(l),o.slice(0,u)+"$lit$"+o.slice(u)+v+d):o+v+(-2===u?(r.push(void 0),e):d)}const l=i+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,r]},B=class{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,i=0;const s=t.length-1,l=this.parts,[a,u]=F(t,e);if(this.el=B.createElement(a,o),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=P.nextNode())&&l.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const o=u[i++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(o);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Y:"@"===e[1]?X:W})}else l.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(L.test(r.tagName)){const t=r.textContent.split(v),e=t.length-1;if(e>0){r.textContent=f?f.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],w()),P.nextNode(),l.push({type:2,index:++n});r.append(t[e],w())}}}else if(8===r.nodeType)if(r.data===g)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(v,t+1));)l.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const o=_.createElement("template");return o.innerHTML=t,o}};function H(t,e,o=t,r){var n,i,s,l;if(e===z)return e;let a=void 0!==r?null===(n=o._$Cl)||void 0===n?void 0:n[r]:o._$Cu;const u=x(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==u&&(null===(i=null==a?void 0:a._$AO)||void 0===i||i.call(a,!1),void 0===u?a=void 0:(a=new u(t),a._$AT(t,o,r)),void 0!==r?(null!==(s=(l=o)._$Cl)&&void 0!==s?s:l._$Cl=[])[r]=a:o._$Cu=a),void 0!==a&&(e=H(t,a._$AS(t,e.values),a,r)),e}var I,j,V=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(o,!0);P.currentNode=n;let i=P.nextNode(),s=0,l=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new q(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new Z(i,this,t)),this.v.push(e),a=r[++l]}s!==(null==a?void 0:a.index)&&(i=P.nextNode(),s++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},q=class{constructor(t,e,o,r){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),x(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):A(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==R&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=B.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new V(n,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new B(t)),e}S(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new q(this.M(w()),this.M(w()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},W=class{constructor(t,e,o,r,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const n=this.strings;let i=!1;if(void 0===n)t=H(this,t,e,0),i=!x(t)||t!==this._$AH&&t!==z,i&&(this._$AH=t);else{const r=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=H(this,r[o+s],e,s),l===z&&(l=this._$AH[s]),i||(i=!x(l)||l!==this._$AH[s]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+n[s+1]),this._$AH[s]=l}i&&!r&&this.C(t)}C(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},G=class extends W{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===R?void 0:t}},K=f?f.emptyScript:"",Y=class extends W{constructor(){super(...arguments),this.type=4}C(t){t&&t!==R?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}},X=class extends W{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=H(this,t,e,0))&&void 0!==o?o:R)===z)return;const r=this._$AH,n=t===R&&r!==R||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==R&&(r===R||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}},Z=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}},J={L:"$lit$",P:v,V:g,I:1,N:F,R:V,j:A,D:H,H:q,F:W,O:Y,W:X,B:G,Z:Z},Q=window.litHtmlPolyfillSupport;null==Q||Q(B,q),(null!==(e=globalThis.litHtmlVersions)&&void 0!==e?e:globalThis.litHtmlVersions=[]).push("2.2.4");var tt=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var r,n;const i=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=i._$litPart$;if(void 0===s){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;i._$litPart$=s=new q(e.insertBefore(w(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}};tt.finalized=!0,tt._$litElement$=!0,null===(I=globalThis.litElementHydrateSupport)||void 0===I||I.call(globalThis,{LitElement:tt});var et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(j=globalThis.litElementVersions)&&void 0!==j?j:globalThis.litElementVersions=[]).push("3.2.0");var ot=s`
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
`,rt=s`
  ${ot}

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
`,nt=(Object.create,Object.defineProperty),it=Object.defineProperties,st=Object.getOwnPropertyDescriptor,lt=Object.getOwnPropertyDescriptors,at=(Object.getOwnPropertyNames,Object.getOwnPropertySymbols),ut=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),ct=Object.prototype.propertyIsEnumerable,dt=(t,e,o)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ht=(t,e)=>{for(var o in e||(e={}))ut.call(e,o)&&dt(t,o,e[o]);if(at)for(var o of at(e))ct.call(e,o)&&dt(t,o,e[o]);return t},pt=(t,e)=>it(t,lt(e)),mt=(t,e,o,r)=>{for(var n,i=r>1?void 0:r?st(e,o):e,s=t.length-1;s>=0;s--)(n=t[s])&&(i=(r?n(e,o,i):n(i))||i);return r&&i&&nt(e,o,i),i},ft=class extends Event{constructor(t){super("formdata"),this.formData=t}},bt=class extends FormData{constructor(t){var e=(...t)=>{super(...t)};t?(e(t),this.form=t,t.dispatchEvent(new ft(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const r=this.getAll(t),n=r.indexOf(o.value);-1!==n&&r.splice(n,1),r.push(e),this.set(t,r)}else super.append(t,e);o.value=e}};function vt(){window.FormData&&!function(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",(t=>{new FormData(t.target),t.preventDefault()})),t.addEventListener("formdata",(()=>e=!0)),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}()&&(window.FormData=bt,window.addEventListener("submit",(t=>{t.defaultPrevented||new FormData(t.target)})))}"complete"===document.readyState?vt():window.addEventListener("DOMContentLoaded",(()=>vt()));var gt,yt=new WeakMap,_t=class{constructor(t,e){(this.host=t).addController(this),this.options=ht({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>t.disabled,reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>{t.value=e}},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),yt.has(this.form)||(yt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),yt.has(this.form)&&(this.form.reportValidity=yt.get(this.form),yt.delete(this.form)),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host);e||"string"!=typeof o||void 0===r||(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),o=this.options.reportValidity;!this.form||this.form.noValidate||e||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&["formaction","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))})),this.form.append(o),o.click(),o.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},wt=Symbol.for(""),xt=t=>{var e,o;if((null===(e=t)||void 0===e?void 0:e.r)===wt)return null===(o=t)||void 0===o?void 0:o._$litStatic$},$t=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:wt}),At=new Map,kt=t=>(e,...o)=>{const r=o.length;let n,i;const s=[],l=[];let a,u=0,c=!1;for(;u<r;){for(a=e[u];u<r&&void 0!==(i=o[u],n=xt(i));)a+=n+e[++u],c=!0;l.push(i),s.push(a),u++}if(u===r&&s.push(e[r]),c){const t=s.join("$$lit$$");void 0===(e=At.get(t))&&(s.raw=s,At.set(t,e=s)),o=l}return t(e,...o)},Et=kt(M),St=(kt(D),new Set),Tt=new MutationObserver(Ot),Ct=new Map,Nt=document.documentElement.dir||"ltr",Lt=document.documentElement.lang||navigator.language;function Ot(){Nt=document.documentElement.dir||"ltr",Lt=document.documentElement.lang||navigator.language,[...St.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Tt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Mt=class extends class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){St.add(this.host)}hostDisconnected(){St.delete(this.host)}dir(){return`${this.host.dir||Nt}`.toLowerCase()}lang(){return`${this.host.lang||Lt}`.toLowerCase()}term(t,...e){const o=this.lang().toLowerCase().slice(0,2),r=this.lang().length>2?this.lang().toLowerCase():"",n=Ct.get(r),i=Ct.get(o);let s;if(n&&n[t])s=n[t];else if(i&&i[t])s=i[t];else{if(!gt||!gt[t])return console.error(`No translation found for: ${String(t)}`),t;s=gt[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}{},Dt={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Ct.has(e)?Ct.set(e,Object.assign(Object.assign({},Ct.get(e)),t)):Ct.set(e,t),gt||(gt=t)})),Ot()}(Dt);var zt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};var Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=t=>(...e)=>({_$litDirective$:t,values:e}),Pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Ft=Ut(class extends Pt{constructor(t){var e;if(super(t),t.type!==Rt.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const o=!!e[t];o===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(o?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return z}}),Bt=t=>null!=t?t:R;function Ht(t,e,o){const r=new CustomEvent(e,ht({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return t.dispatchEvent(r),r}var It=t=>e=>{return"function"==typeof e?(o=t,r=e,window.customElements.define(o,r),r):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e);var o,r},jt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?pt(ht({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function Vt(t){return(e,o)=>{return void 0!==o?(r=t,n=o,void e.constructor.createProperty(n,r)):jt(t,e);var r,n}}function qt(t){return Vt(pt(ht({},t),{state:!0}))}var Wt,Gt=({finisher:t,descriptor:e})=>(o,r)=>{var n;if(void 0===r){const r=null!==(n=o.originalKey)&&void 0!==n?n:o.key,i=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:pt(ht({},o),{key:r});return null!=t&&(i.finisher=function(e){t(e,r)}),i}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(n,r)}};function Kt(t,e){return Gt({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}null===(Wt=window.HTMLSlotElement)||void 0===Wt||Wt.prototype.assignedElements;var Yt=class extends tt{constructor(){super(...arguments),this.formSubmitController=new _t(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new zt(this,"[default]","prefix","suffix"),this.localize=new Mt(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,Ht(this,"sl-blur")}handleFocus(){this.hasFocus=!0,Ht(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this),"reset"===this.type&&this.formSubmitController.reset(this)}render(){const t=!!this.href,e=t?$t`a`:$t`button`;return Et`
      <${e}
        part="base"
        class=${Ft({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Yt.styles=rt,mt([Kt(".button")],Yt.prototype,"button",2),mt([qt()],Yt.prototype,"hasFocus",2),mt([Vt({reflect:!0})],Yt.prototype,"variant",2),mt([Vt({reflect:!0})],Yt.prototype,"size",2),mt([Vt({type:Boolean,reflect:!0})],Yt.prototype,"caret",2),mt([Vt({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2),mt([Vt({type:Boolean,reflect:!0})],Yt.prototype,"loading",2),mt([Vt({type:Boolean,reflect:!0})],Yt.prototype,"outline",2),mt([Vt({type:Boolean,reflect:!0})],Yt.prototype,"pill",2),mt([Vt({type:Boolean,reflect:!0})],Yt.prototype,"circle",2),mt([Vt()],Yt.prototype,"type",2),mt([Vt()],Yt.prototype,"name",2),mt([Vt()],Yt.prototype,"value",2),mt([Vt()],Yt.prototype,"href",2),mt([Vt()],Yt.prototype,"target",2),mt([Vt()],Yt.prototype,"download",2),mt([Vt()],Yt.prototype,"form",2),mt([Vt({attribute:"formaction"})],Yt.prototype,"formAction",2),mt([Vt({attribute:"formmethod"})],Yt.prototype,"formMethod",2),mt([Vt({attribute:"formnovalidate",type:Boolean})],Yt.prototype,"formNoValidate",2),mt([Vt({attribute:"formtarget"})],Yt.prototype,"formTarget",2),Yt=mt([It("sl-button")],Yt);var Xt=s`
  ${ot}

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
`,Zt=class extends tt{render(){return M`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zt.styles=Xt,Zt=mt([It("sl-spinner")],Zt);var Jt=s`
  ${ot}
  ${s`
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
`}

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
`,{H:Qt}=J,te={},ee=Ut(class extends Pt{constructor(t){if(super(t),t.type!==Rt.PROPERTY&&t.type!==Rt.ATTRIBUTE&&t.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==t.strings)throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===z||e===R)return e;const o=t.element,r=t.name;if(t.type===Rt.PROPERTY){if(e===o[r])return z}else if(t.type===Rt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return z}else if(t.type===Rt.ATTRIBUTE&&o.getAttribute(r)===e+"")return z;return((t,e=te)=>{t._$AH=e})(t),e}});function oe(t,e){const o=ht({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:n}=e;if(t in e){const i=t;e.update=function(t){if(t.has(i)){const e=t.get(i),n=this[i];e!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,n))}n.call(this,t)}}}}var re=class extends tt{constructor(){super(...arguments),this.formSubmitController=new _t(this),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new Mt(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsDate)?e:null}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsNumber)?e:parseFloat(this.value)}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value,Ht(this,"sl-input"),Ht(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,Ht(this,"sl-blur")}handleChange(){this.value=this.input.value,Ht(this,"sl-change")}handleClearClick(t){this.value="",Ht(this,"sl-clear"),Ht(this,"sl-input"),Ht(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,Ht(this,"sl-focus")}handleInput(){this.value=this.input.value,Ht(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||this.formSubmitController.submit()}))}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,r=!!this.helpText||!!e,n=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return M`
      <div
        part="form-control"
        class=${Ft({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ft({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":navigator.userAgent.includes("Firefox")})}
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
              .value=${ee(this.value)}
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

            ${n?M`
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
            ${this.togglePassword&&!this.disabled?M`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?M`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:M`
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
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};re.styles=Jt,mt([Kt(".input__control")],re.prototype,"input",2),mt([qt()],re.prototype,"hasFocus",2),mt([qt()],re.prototype,"isPasswordVisible",2),mt([Vt({reflect:!0})],re.prototype,"type",2),mt([Vt({reflect:!0})],re.prototype,"size",2),mt([Vt()],re.prototype,"name",2),mt([Vt()],re.prototype,"value",2),mt([((t="value")=>(e,o)=>{const r=e.constructor,n=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(e,i,s){var l;const a=r.getPropertyOptions(t);if(e===("string"==typeof a.attribute?a.attribute:t)){const e=a.converter||d,r=("function"==typeof e?e:null!=(l=null==e?void 0:e.fromAttribute)?l:d.fromAttribute)(s,a.type);this[t]!==r&&(this[o]=r)}n.call(this,e,i,s)}})()],re.prototype,"defaultValue",2),mt([Vt({type:Boolean,reflect:!0})],re.prototype,"filled",2),mt([Vt({type:Boolean,reflect:!0})],re.prototype,"pill",2),mt([Vt()],re.prototype,"label",2),mt([Vt({attribute:"help-text"})],re.prototype,"helpText",2),mt([Vt({type:Boolean})],re.prototype,"clearable",2),mt([Vt({attribute:"toggle-password",type:Boolean})],re.prototype,"togglePassword",2),mt([Vt({attribute:"no-spin-buttons",type:Boolean})],re.prototype,"noSpinButtons",2),mt([Vt()],re.prototype,"placeholder",2),mt([Vt({type:Boolean,reflect:!0})],re.prototype,"disabled",2),mt([Vt({type:Boolean,reflect:!0})],re.prototype,"readonly",2),mt([Vt({type:Number})],re.prototype,"minlength",2),mt([Vt({type:Number})],re.prototype,"maxlength",2),mt([Vt()],re.prototype,"min",2),mt([Vt()],re.prototype,"max",2),mt([Vt({type:Number})],re.prototype,"step",2),mt([Vt()],re.prototype,"pattern",2),mt([Vt({type:Boolean,reflect:!0})],re.prototype,"required",2),mt([Vt({type:Boolean,reflect:!0})],re.prototype,"invalid",2),mt([Vt()],re.prototype,"autocapitalize",2),mt([Vt()],re.prototype,"autocorrect",2),mt([Vt()],re.prototype,"autocomplete",2),mt([Vt({type:Boolean})],re.prototype,"autofocus",2),mt([Vt()],re.prototype,"enterkeyhint",2),mt([Vt({type:Boolean})],re.prototype,"spellcheck",2),mt([Vt()],re.prototype,"inputmode",2),mt([oe("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1),mt([oe("value",{waitUntilFirstUpdate:!0})],re.prototype,"handleValueChange",1),re=mt([It("sl-input")],re);var ne="";function ie(t){ne=t}function se(){if(!ne){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)ie(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),ie(o.split("/").slice(0,-1).join("/"))}}return ne.replace(/\/$/,"")}var le={"check-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">\n      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',x:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ae=[{name:"default",resolver:t=>`${se()}/assets/icons/${t}.svg`},{name:"system",resolver:t=>t in le?`data:image/svg+xml,${encodeURIComponent(le[t])}`:""}],ue=[];function ce(t){return ae.find((e=>e.name===t))}var de=new Map;function he(t,e="cors"){if(de.has(t))return de.get(t);const o=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return de.set(t,o),o}var pe=new Map;async function me(t){if(pe.has(t))return pe.get(t);const e=await he(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const r=t.firstElementChild;o.svg="svg"===(null==r?void 0:r.tagName.toLowerCase())?r.outerHTML:""}return pe.set(t,o),o}var fe=s`
  ${ot}

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
`,be=class extends Pt{constructor(t){if(super(t),this.it=R,t.type!==Rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this.ft=void 0,this.it=t;if(t===z)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};be.directiveName="unsafeHTML",be.resultType=1;Ut(be);var ve=class extends be{};ve.directiveName="unsafeSVG",ve.resultType=2;var ge,ye=Ut(ve),_e=class extends tt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,ue.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,ue=ue.filter((e=>e!==t))}getUrl(){const t=ce(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=ce(this.library),o=this.getUrl();if(ge||(ge=new DOMParser),o)try{const r=await me(o);if(o!==this.getUrl())return;if(r.ok){const o=ge.parseFromString(r.svg,"text/html").body.querySelector("svg");null!==o?(null==(t=null==e?void 0:e.mutator)||t.call(e,o),this.svg=o.outerHTML,Ht(this,"sl-load")):(this.svg="",Ht(this,"sl-error"))}else this.svg="",Ht(this,"sl-error")}catch(t){Ht(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t="string"==typeof this.label&&this.label.length>0;return M` <div
      part="base"
      class="icon"
      role=${Bt(t?"img":void 0)}
      aria-label=${Bt(t?this.label:void 0)}
      aria-hidden=${Bt(t?void 0:"true")}
    >
      ${ye(this.svg)}
    </div>`}};_e.styles=fe,mt([qt()],_e.prototype,"svg",2),mt([Vt({reflect:!0})],_e.prototype,"name",2),mt([Vt()],_e.prototype,"src",2),mt([Vt()],_e.prototype,"label",2),mt([Vt({reflect:!0})],_e.prototype,"library",2),mt([oe("name"),oe("src"),oe("library")],_e.prototype,"setIcon",1),_e=mt([It("sl-icon")],_e);var we=s`
  ${ot}

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
`,xe=class extends tt{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer","header","image")}render(){return M`
      <div
        part="base"
        class=${Ft({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
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
    `}};xe.styles=we,xe=mt([It("sl-card")],xe);var $e={};
/*! @license DOMPurify 2.3.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.10/LICENSE */$e=function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,o){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,o)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function r(t,n,i){return(r=o()?Reflect.construct:function(t,o,r){var n=[null];n.push.apply(n,o);var i=new(Function.bind.apply(t,n));return r&&e(i,r.prototype),i}).apply(null,arguments)}function n(t){return i(t)||s(t)||l(t)||u()}function i(t){if(Array.isArray(t))return a(t)}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t,e){if(t){if("string"==typeof t)return a(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c=Object.hasOwnProperty,d=Object.setPrototypeOf,h=Object.isFrozen,p=Object.getPrototypeOf,m=Object.getOwnPropertyDescriptor,f=Object.freeze,b=Object.seal,v=Object.create,g="undefined"!=typeof Reflect&&Reflect,y=g.apply,_=g.construct;y||(y=function(t,e,o){return t.apply(e,o)}),f||(f=function(t){return t}),b||(b=function(t){return t}),_||(_=function(t,e){return r(t,n(e))});var w=L(Array.prototype.forEach),x=L(Array.prototype.pop),$=L(Array.prototype.push),A=L(String.prototype.toLowerCase),k=L(String.prototype.match),E=L(String.prototype.replace),S=L(String.prototype.indexOf),T=L(String.prototype.trim),C=L(RegExp.prototype.test),N=O(TypeError);function L(t){return function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return y(t,e,r)}}function O(t){return function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return _(t,o)}}function M(t,e,o){o=o||A,d&&d(t,null);for(var r=e.length;r--;){var n=e[r];if("string"==typeof n){var i=o(n);i!==n&&(h(e)||(e[r]=i),n=i)}t[n]=!0}return t}function D(t){var e,o=v(null);for(e in t)y(c,t,[e])&&(o[e]=t[e]);return o}function z(t,e){for(;null!==t;){var o=m(t,e);if(o){if(o.get)return L(o.get);if("function"==typeof o.value)return L(o.value)}t=p(t)}function r(t){return console.warn("fallback value for",t),null}return r}var R=f(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),U=f(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=f(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=f(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=f(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=f(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),I=f(["#text"]),j=f(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),V=f(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),q=f(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),W=f(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),K=b(/<%[\w\W]*|[\w\W]*%>/gm),Y=b(/^data-[\-\w.\u00B7-\uFFFF]/),X=b(/^aria-[\-\w]+$/),Z=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=b(/^(?:\w+script|data):/i),Q=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=b(/^html$/i),et=function(){return"undefined"==typeof window?null:window},ot=function(e,o){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var r=null,n="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(n)&&(r=o.currentScript.getAttribute(n));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(t){return t},createScriptURL:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),o=function(t){return rt(t)};if(o.version="2.3.10",o.removed=[],!e||!e.document||9!==e.document.nodeType)return o.isSupported=!1,o;var r=e.document,i=e.document,s=e.DocumentFragment,l=e.HTMLTemplateElement,a=e.Node,u=e.Element,c=e.NodeFilter,d=e.NamedNodeMap,h=void 0===d?e.NamedNodeMap||e.MozNamedAttrMap:d,p=e.HTMLFormElement,m=e.DOMParser,b=e.trustedTypes,v=u.prototype,g=z(v,"cloneNode"),y=z(v,"nextSibling"),_=z(v,"childNodes"),L=z(v,"parentNode");if("function"==typeof l){var O=i.createElement("template");O.content&&O.content.ownerDocument&&(i=O.content.ownerDocument)}var nt=ot(b,r),it=nt?nt.createHTML(""):"",st=i,lt=st.implementation,at=st.createNodeIterator,ut=st.createDocumentFragment,ct=st.getElementsByTagName,dt=r.importNode,ht={};try{ht=D(i).documentMode?i.documentMode:{}}catch(t){}var pt={};o.isSupported="function"==typeof L&&lt&&void 0!==lt.createHTMLDocument&&9!==ht;var mt,ft,bt=G,vt=K,gt=Y,yt=X,_t=J,wt=Q,xt=Z,$t=null,At=M({},[].concat(n(R),n(U),n(P),n(B),n(I))),kt=null,Et=M({},[].concat(n(j),n(V),n(q),n(W))),St=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Tt=null,Ct=null,Nt=!0,Lt=!0,Ot=!1,Mt=!1,Dt=!1,zt=!1,Rt=!1,Ut=!1,Pt=!1,Ft=!1,Bt=!0,Ht=!0,It=!1,jt={},Vt=null,qt=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Wt=null,Gt=M({},["audio","video","img","source","image","track"]),Kt=null,Yt=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xt="http://www.w3.org/1998/Math/MathML",Zt="http://www.w3.org/2000/svg",Jt="http://www.w3.org/1999/xhtml",Qt=Jt,te=!1,ee=["application/xhtml+xml","text/html"],oe="text/html",re=null,ne=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},se=function(e){re&&re===e||(e&&"object"===t(e)||(e={}),e=D(e),mt=mt=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?oe:e.PARSER_MEDIA_TYPE,ft="application/xhtml+xml"===mt?function(t){return t}:A,$t="ALLOWED_TAGS"in e?M({},e.ALLOWED_TAGS,ft):At,kt="ALLOWED_ATTR"in e?M({},e.ALLOWED_ATTR,ft):Et,Kt="ADD_URI_SAFE_ATTR"in e?M(D(Yt),e.ADD_URI_SAFE_ATTR,ft):Yt,Wt="ADD_DATA_URI_TAGS"in e?M(D(Gt),e.ADD_DATA_URI_TAGS,ft):Gt,Vt="FORBID_CONTENTS"in e?M({},e.FORBID_CONTENTS,ft):qt,Tt="FORBID_TAGS"in e?M({},e.FORBID_TAGS,ft):{},Ct="FORBID_ATTR"in e?M({},e.FORBID_ATTR,ft):{},jt="USE_PROFILES"in e&&e.USE_PROFILES,Nt=!1!==e.ALLOW_ARIA_ATTR,Lt=!1!==e.ALLOW_DATA_ATTR,Ot=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Mt=e.SAFE_FOR_TEMPLATES||!1,Dt=e.WHOLE_DOCUMENT||!1,Ut=e.RETURN_DOM||!1,Pt=e.RETURN_DOM_FRAGMENT||!1,Ft=e.RETURN_TRUSTED_TYPE||!1,Rt=e.FORCE_BODY||!1,Bt=!1!==e.SANITIZE_DOM,Ht=!1!==e.KEEP_CONTENT,It=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Qt=e.NAMESPACE||Jt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(St.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(St.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(St.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Mt&&(Lt=!1),Pt&&(Ut=!0),jt&&($t=M({},n(I)),kt=[],!0===jt.html&&(M($t,R),M(kt,j)),!0===jt.svg&&(M($t,U),M(kt,V),M(kt,W)),!0===jt.svgFilters&&(M($t,P),M(kt,V),M(kt,W)),!0===jt.mathMl&&(M($t,B),M(kt,q),M(kt,W))),e.ADD_TAGS&&($t===At&&($t=D($t)),M($t,e.ADD_TAGS,ft)),e.ADD_ATTR&&(kt===Et&&(kt=D(kt)),M(kt,e.ADD_ATTR,ft)),e.ADD_URI_SAFE_ATTR&&M(Kt,e.ADD_URI_SAFE_ATTR,ft),e.FORBID_CONTENTS&&(Vt===qt&&(Vt=D(Vt)),M(Vt,e.FORBID_CONTENTS,ft)),Ht&&($t["#text"]=!0),Dt&&M($t,["html","head","body"]),$t.table&&(M($t,["tbody"]),delete Tt.tbody),f&&f(e),re=e)},le=M({},["mi","mo","mn","ms","mtext"]),ae=M({},["foreignobject","desc","title","annotation-xml"]),ue=M({},["title","style","font","a","script"]),ce=M({},U);M(ce,P),M(ce,F);var de=M({},B);M(de,H);var he=function(t){var e=L(t);e&&e.tagName||(e={namespaceURI:Jt,tagName:"template"});var o=A(t.tagName),r=A(e.tagName);return t.namespaceURI===Zt?e.namespaceURI===Jt?"svg"===o:e.namespaceURI===Xt?"svg"===o&&("annotation-xml"===r||le[r]):Boolean(ce[o]):t.namespaceURI===Xt?e.namespaceURI===Jt?"math"===o:e.namespaceURI===Zt?"math"===o&&ae[r]:Boolean(de[o]):t.namespaceURI===Jt&&!(e.namespaceURI===Zt&&!ae[r])&&!(e.namespaceURI===Xt&&!le[r])&&!de[o]&&(ue[o]||!ce[o])},pe=function(t){$(o.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=it}catch(e){t.remove()}}},me=function(t,e){try{$(o.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){$(o.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!kt[t])if(Ut||Pt)try{pe(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},fe=function(t){var e,o;if(Rt)t="<remove></remove>"+t;else{var r=k(t,/^[\r\n\t ]+/);o=r&&r[0]}"application/xhtml+xml"===mt&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var n=nt?nt.createHTML(t):t;if(Qt===Jt)try{e=(new m).parseFromString(n,mt)}catch(t){}if(!e||!e.documentElement){e=lt.createDocument(Qt,"template",null);try{e.documentElement.innerHTML=te?"":n}catch(t){}}var s=e.body||e.documentElement;return t&&o&&s.insertBefore(i.createTextNode(o),s.childNodes[0]||null),Qt===Jt?ct.call(e,Dt?"html":"body")[0]:Dt?e.documentElement:s},be=function(t){return at.call(t.ownerDocument||t,t,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof p&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof h)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ge=function(e){return"object"===t(a)?e instanceof a:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ye=function(t,e,r){pt[t]&&w(pt[t],(function(t){t.call(o,e,r,re)}))},_e=function(t){var e;if(ye("beforeSanitizeElements",t,null),ve(t))return pe(t),!0;if(C(/[\u0080-\uFFFF]/,t.nodeName))return pe(t),!0;var r=ft(t.nodeName);if(ye("uponSanitizeElement",t,{tagName:r,allowedTags:$t}),t.hasChildNodes()&&!ge(t.firstElementChild)&&(!ge(t.content)||!ge(t.content.firstElementChild))&&C(/<[/\w]/g,t.innerHTML)&&C(/<[/\w]/g,t.textContent))return pe(t),!0;if("select"===r&&C(/<template/i,t.innerHTML))return pe(t),!0;if(!$t[r]||Tt[r]){if(!Tt[r]&&xe(r)){if(St.tagNameCheck instanceof RegExp&&C(St.tagNameCheck,r))return!1;if(St.tagNameCheck instanceof Function&&St.tagNameCheck(r))return!1}if(Ht&&!Vt[r]){var n=L(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&n)for(var s=i.length-1;s>=0;--s)n.insertBefore(g(i[s],!0),y(t))}return pe(t),!0}return t instanceof u&&!he(t)?(pe(t),!0):"noscript"!==r&&"noembed"!==r||!C(/<\/no(script|embed)/i,t.innerHTML)?(Mt&&3===t.nodeType&&(e=t.textContent,e=E(e,bt," "),e=E(e,vt," "),t.textContent!==e&&($(o.removed,{element:t.cloneNode()}),t.textContent=e)),ye("afterSanitizeElements",t,null),!1):(pe(t),!0)},we=function(t,e,o){if(Bt&&("id"===e||"name"===e)&&(o in i||o in ne))return!1;if(Lt&&!Ct[e]&&C(gt,e));else if(Nt&&C(yt,e));else if(!kt[e]||Ct[e]){if(!(xe(t)&&(St.tagNameCheck instanceof RegExp&&C(St.tagNameCheck,t)||St.tagNameCheck instanceof Function&&St.tagNameCheck(t))&&(St.attributeNameCheck instanceof RegExp&&C(St.attributeNameCheck,e)||St.attributeNameCheck instanceof Function&&St.attributeNameCheck(e))||"is"===e&&St.allowCustomizedBuiltInElements&&(St.tagNameCheck instanceof RegExp&&C(St.tagNameCheck,o)||St.tagNameCheck instanceof Function&&St.tagNameCheck(o))))return!1}else if(Kt[e]);else if(C(xt,E(o,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==S(o,"data:")||!Wt[t])if(Ot&&!C(_t,E(o,wt,"")));else if(o)return!1;return!0},xe=function(t){return t.indexOf("-")>0},$e=function(e){var r,n,i,s;ye("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:kt};for(s=l.length;s--;){var u=r=l[s],c=u.name,d=u.namespaceURI;if(n="value"===c?r.value:T(r.value),i=ft(c),a.attrName=i,a.attrValue=n,a.keepAttr=!0,a.forceKeepAttr=void 0,ye("uponSanitizeAttribute",e,a),n=a.attrValue,!a.forceKeepAttr&&(me(c,e),a.keepAttr))if(C(/\/>/i,n))me(c,e);else{Mt&&(n=E(n,bt," "),n=E(n,vt," "));var h=ft(e.nodeName);if(we(h,i,n)){if(nt&&"object"===t(b)&&"function"==typeof b.getAttributeType)if(d);else switch(b.getAttributeType(h,i)){case"TrustedHTML":n=nt.createHTML(n);break;case"TrustedScriptURL":n=nt.createScriptURL(n)}try{d?e.setAttributeNS(d,c,n):e.setAttribute(c,n),x(o.removed)}catch(t){}}}}ye("afterSanitizeAttributes",e,null)}},Ae=function t(e){var o,r=be(e);for(ye("beforeSanitizeShadowDOM",e,null);o=r.nextNode();)ye("uponSanitizeShadowNode",o,null),_e(o)||(o.content instanceof s&&t(o.content),$e(o));ye("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(n,i){var l,u,c,d,h;if((te=!n)&&(n="\x3c!--\x3e"),"string"!=typeof n&&!ge(n)){if("function"!=typeof n.toString)throw N("toString is not a function");if("string"!=typeof(n=n.toString()))throw N("dirty is not a string, aborting")}if(!o.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof n)return e.toStaticHTML(n);if(ge(n))return e.toStaticHTML(n.outerHTML)}return n}if(zt||se(i),o.removed=[],"string"==typeof n&&(It=!1),It){if(n.nodeName){var p=ft(n.nodeName);if(!$t[p]||Tt[p])throw N("root node is forbidden and cannot be sanitized in-place")}}else if(n instanceof a)1===(u=(l=fe("\x3c!----\x3e")).ownerDocument.importNode(n,!0)).nodeType&&"BODY"===u.nodeName||"HTML"===u.nodeName?l=u:l.appendChild(u);else{if(!Ut&&!Mt&&!Dt&&-1===n.indexOf("<"))return nt&&Ft?nt.createHTML(n):n;if(!(l=fe(n)))return Ut?null:Ft?it:""}l&&Rt&&pe(l.firstChild);for(var m=be(It?n:l);c=m.nextNode();)3===c.nodeType&&c===d||_e(c)||(c.content instanceof s&&Ae(c.content),$e(c),d=c);if(d=null,It)return n;if(Ut){if(Pt)for(h=ut.call(l.ownerDocument);l.firstChild;)h.appendChild(l.firstChild);else h=l;return kt.shadowroot&&(h=dt.call(r,h,!0)),h}var f=Dt?l.outerHTML:l.innerHTML;return Dt&&$t["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&C(tt,l.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+l.ownerDocument.doctype.name+">\n"+f),Mt&&(f=E(f,bt," "),f=E(f,vt," ")),nt&&Ft?nt.createHTML(f):f},o.setConfig=function(t){se(t),zt=!0},o.clearConfig=function(){re=null,zt=!1},o.isValidAttribute=function(t,e,o){re||se({});var r=ft(t),n=ft(e);return we(r,n,o)},o.addHook=function(t,e){"function"==typeof e&&(pt[t]=pt[t]||[],$(pt[t],e))},o.removeHook=function(t){if(pt[t])return x(pt[t])},o.removeHooks=function(t){pt[t]&&(pt[t]=[])},o.removeAllHooks=function(){pt={}},o}return rt()}();let Ae,ke=JSON.parse(window.localStorage.cards||"[]"),Ee=[],Se=!1;const Te=document.querySelector("#cards"),Ce=document.querySelector("#start-test"),Ne=document.querySelector("#flip-card"),Le=document.querySelector("#next-card"),Oe=document.querySelector("#front-text"),Me=document.querySelector("#back-text"),De=document.querySelector("div#test-container"),ze=document.querySelector("#save-btn"),Re=document.querySelector("form#create-card-form"),Ue=document.querySelector("#card-deck-summary-link"),Pe=()=>{window.localStorage.cards=JSON.stringify(ke)},Fe=()=>{const t=ke.map(((t,e)=>{const o=document.createRange().createContextualFragment(`<li>${(0,$e.sanitize)(t.frontText)} - ${(0,$e.sanitize)(t.backText)}<sl-button class="delete-card">Delete</sl-button></li>`);return o.querySelector("sl-button.delete-card").addEventListener("click",(t=>()=>{ke=[...ke.slice(0,t),...ke.slice(t+1)],Pe(),Fe()})(e)),o}));var e;Te.innerHTML="",Te.append(...t),e=ke.length>0,Ce.disabled=!e,Ke()},Be=()=>{const t=document.querySelector("#front-text"),e=document.querySelector("#back-text");try{((t,e)=>{t=t?.trim(),e=e?.trim();const o={frontText:t,backText:e};Object.entries(o).forEach((([t,e])=>{if(!e)throw`${t} - value required but was blank`})),ke.push({...o,createdAt:Date.now()})})(t.value,e.value)}catch(t){console.error(`Error adding card: ${t}`)}Pe(),Fe(),t.value="",e.value=""},He=t=>{De.innerHTML=`<sl-card>${t}</sl-card>`},Ie=()=>{Ae=new Ge(Ee.shift()),He(Ae.nextFaceText()),0===Ee.length&&(Le.disabled=!0)},je=t=>{Oe.disabled=t,Me.disabled=t,ze.disabled=t,(t=>{document.querySelectorAll(".delete-card").forEach((e=>e.disabled=t))})(t)},Ve=t=>{Ne.disabled=t,Le.disabled=t},qe=()=>{Se?(Se=!1,je(!1),Ve(!0),Ce.innerText="Start Test",De.innerHTML=""):(Se=!0,je(!0),Ve(!1),Ce.innerText="End Test",Ee=structuredClone(ke),Ie())},We=()=>{He(Ae.nextFaceText())};class Ge{constructor(t){this.card=t,this.frontIsCurrentFace=!0}nextFaceText(){const t=this.frontIsCurrentFace?this.card.frontText:this.card.backText;return this.frontIsCurrentFace=!this.frontIsCurrentFace,t}}const Ke=()=>{Ue.innerText=`Flashcards in deck (${ke.length})`},Ye=()=>{Te.hidden=!Te.hidden};document.addEventListener("DOMContentLoaded",(function(){Re.addEventListener("submit",(t=>{t.preventDefault(),Be()})),ze.addEventListener("click",(t=>{console.log("save clicked"),console.log(t.target)})),Ce.addEventListener("click",qe),Ne.addEventListener("click",We),Le.addEventListener("click",Ie),Ue.addEventListener("click",Ye),Ke(),Fe()}),!1);
//# sourceMappingURL=index.d4c37777.js.map
