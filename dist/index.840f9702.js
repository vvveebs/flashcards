// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9pdHW":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fec9d251840f9702";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9XOu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _buttonJs = require("@shoelace-style/shoelace/dist/components/button/button.js");
var _inputJs = require("@shoelace-style/shoelace/dist/components/input/input.js");
var _textareaJs = require("@shoelace-style/shoelace/dist/components/textarea/textarea.js");
var _iconButtonJs = require("@shoelace-style/shoelace/dist/components/icon-button/icon-button.js");
var _iconJs = require("@shoelace-style/shoelace/dist/components/icon/icon.js");
var _cardJs = require("@shoelace-style/shoelace/dist/components/card/card.js");
var _lightCss = require("@shoelace-style/shoelace/dist/themes/light.css");
var _mainScss = require("./main.scss");
var _formJs = require("@shoelace-style/shoelace/dist/utilities/form.js");
var _dompurify = require("dompurify");
var _card = require("./card");
var _cardDefault = parcelHelpers.interopDefault(_card);
let testCards = [];
let currentTestCard;
let cardToCreate = {};
const toggleStartButtonEnabled = (isOn)=>{
    document.querySelector("#start-test").disabled = !isOn;
};
const displayCards = ()=>{
    const cardFragments = (0, _cardDefault.default).all().map((card)=>{
        const fragment = document.createRange().createContextualFragment(`<li>${(0, _dompurify.sanitize)(card.frontText)} - ${(0, _dompurify.sanitize)(card.backText)}<sl-button name="trash" label="Delete card" class="delete-card" size="small" pill variant="danger" outline>Delete</sl-button></li>`);
        fragment.querySelector("sl-button.delete-card").addEventListener("click", ()=>{
            card.delete();
            displayCards();
        });
        return fragment;
    });
    const cardsDOMList = document.querySelector("#cards");
    cardsDOMList.innerHTML = "";
    cardsDOMList.append(...cardFragments);
    toggleStartButtonEnabled((0, _cardDefault.default).all().length > 0);
};
const displayCardText = (text)=>{
    document.querySelector("#test-container").innerHTML = `<sl-card>${text}</sl-card>`;
};
const shiftAndDisplayNextCard = ()=>{
    currentTestCard = new CardTestPresenter(testCards.shift());
    displayCardText(currentTestCard.nextFaceText());
    if (testCards.length === 0) {
        const nextCardButton = document.querySelector("#next-card");
        nextCardButton.removeEventListener("click", shiftAndDisplayNextCard);
        nextCardButton.innerText = "End Test";
        nextCardButton.setAttribute("variant", "success");
        nextCardButton.addEventListener("click", renderIndex);
    }
};
const flipCurrentTestCard = ()=>{
    displayCardText(currentTestCard.nextFaceText());
};
class CardTestPresenter {
    constructor(card){
        this.card = card;
        this.frontIsCurrentFace = true;
    }
    nextFaceText() {
        const text = this.frontIsCurrentFace ? this.card.frontText : this.card.backText;
        this.frontIsCurrentFace = !this.frontIsCurrentFace;
        return text;
    }
}
const renderStepOne = ()=>{
    document.querySelector(".app-container").innerHTML = `
    <div>
      <a id="back-link" href="#">Back</a>
    </div>

    <form id="create-card-form">
      <div class="form-group">
        <label for="front-text">Front Text</label>
        <sl-textarea id="front-text" name="frontText" required></sl-textarea>
      </div>

      <sl-button id="next-btn" variant="neutral" type="submit">Next</sl-button>
    </form>
  `;
    document.querySelector("#front-text").value = cardToCreate.frontText || "";
    document.querySelector("#create-card-form").addEventListener("submit", (e)=>{
        e.preventDefault();
        const form = document.querySelector("form");
        const data = (0, _formJs.serialize)(form);
        cardToCreate = {
            ...cardToCreate,
            frontText: data.frontText
        };
        onRouteChange("/cards/new/step2");
    });
    document.querySelector("#back-link").addEventListener("click", ()=>{
        cardToCreate = {};
        onRouteChange("/");
    });
};
const renderStepTwo = ()=>{
    document.querySelector(".app-container").innerHTML = `
    <a id="back-link" href="#">Back</a>

    <form id="create-card-form">
      <div class="form-group">
        <label for="back-text">Back Text</label>
        <sl-textarea id="back-text" name="backText" required></sl-textarea>
      </div>

      <sl-button id="next-btn" variant="success" type="submit">Create</sl-button>
    </form>
  `;
    document.querySelector("#back-text").value = cardToCreate.backText || "";
    document.querySelector("#create-card-form").addEventListener("submit", (e)=>{
        e.preventDefault();
        const form = document.querySelector("form");
        const data = (0, _formJs.serialize)(form);
        cardToCreate = {
            ...cardToCreate,
            backText: data.backText
        };
        try {
            const card = new (0, _cardDefault.default)({
                ...cardToCreate
            });
            card.save();
        } catch (error) {
            console.log(`Unable to create card: ${error}`);
        }
        onRouteChange("/");
    });
    document.querySelector("#back-link").addEventListener("click", ()=>{
        cardToCreate = {
            ...cardToCreate,
            backText: document.querySelector("#back-text").value
        };
        onRouteChange("/cards/new/step1");
    });
};
const renderIndex = ()=>{
    const range = document.createRange();
    const fragment = range.createContextualFragment(`
    <div class="form-group">
      <a href="#" id="card-deck-summary-link"></a>
    </div>

    <ul id="cards"></ul>

    <sl-button id="add-new-card">Add New Card</sl-button>
    <sl-button id="start-test" variant="success">Start Test</sl-button>
  `);
    fragment.querySelector("#add-new-card").addEventListener("click", ()=>{
        cardToCreate = {};
        onRouteChange("/cards/new/step1");
    });
    fragment.querySelector("#start-test").addEventListener("click", ()=>{
        onRouteChange("/cards/test");
    });
    document.querySelector(".app-container").replaceChildren(fragment);
    displayCards();
};
const renderTest = ()=>{
    testCards = structuredClone((0, _cardDefault.default).all());
    document.querySelector(".app-container").innerHTML = `
    <a id="back-link" href="#">Back</a>

    <div id="test-container"></div>

    <div class="form-group">
      <sl-button id="flip-card" variant="primary">Flip Card</sl-button>
    </div>

    <div class="form-group">
      <sl-button id="next-card" variant="neutral">Next Card</sl-button>
    </div>`;
    document.querySelector("#flip-card").addEventListener("click", flipCurrentTestCard);
    document.querySelector("#next-card").addEventListener("click", shiftAndDisplayNextCard);
    document.querySelector("#back-link").addEventListener("click", renderIndex);
    shiftAndDisplayNextCard();
};
const routesToRenders = {
    "/": ()=>renderIndex(),
    "/cards/new/step1": ()=>renderStepOne(),
    "/cards/new/step2": ()=>renderStepTwo(),
    "/cards/test": ()=>renderTest()
};
const onRouteChange = (newRoute)=>{
    routesToRenders[newRoute]();
};
renderIndex();

},{"@shoelace-style/shoelace/dist/components/button/button.js":"iJdFu","@shoelace-style/shoelace/dist/components/input/input.js":"czVGE","@shoelace-style/shoelace/dist/components/textarea/textarea.js":"5vLQP","@shoelace-style/shoelace/dist/components/card/card.js":"2d8Q4","@shoelace-style/shoelace/dist/utilities/form.js":"S4tYT","@shoelace-style/shoelace/dist/themes/light.css":"iTA3u","./main.scss":"eOh0E","dompurify":"bFCiL","./card":"dJeae","@shoelace-style/shoelace/dist/components/icon-button/icon-button.js":"gbGFb","@shoelace-style/shoelace/dist/components/icon/icon.js":"elp81","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"iJdFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkFFW5B42RJs.SlButton));
var _chunkFFW5B42RJs = require("../../chunks/chunk.FFW5B42R.js");
var _chunk3F2UD5YRJs = require("../../chunks/chunk.3F2UD5YR.js");
var _chunkJ2AWH46CJs = require("../../chunks/chunk.J2AWH46C.js");
var _chunkFYYNL5GRJs = require("../../chunks/chunk.FYYNL5GR.js");
var _chunk67FQMIF5Js = require("../../chunks/chunk.67FQMIF5.js");
var _chunk6G3UULFWJs = require("../../chunks/chunk.6G3UULFW.js");
var _chunk6WMYSCDCJs = require("../../chunks/chunk.6WMYSCDC.js");
var _chunk3IYPB6RRJs = require("../../chunks/chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("../../chunks/chunk.IAELDRGJ.js");
var _chunk7MO772SNJs = require("../../chunks/chunk.7MO772SN.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkUY5AQKHPJs = require("../../chunks/chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("../../chunks/chunk.VKNZYXSO.js");
var _chunk7IGWJVQFJs = require("../../chunks/chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("../../chunks/chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("../../chunks/chunk.K2NRSETB.js");

},{"../../chunks/chunk.FFW5B42R.js":"6LiZk","../../chunks/chunk.3F2UD5YR.js":"kVMwm","../../chunks/chunk.J2AWH46C.js":"64MQB","../../chunks/chunk.FYYNL5GR.js":"9QHXt","../../chunks/chunk.67FQMIF5.js":"gTciw","../../chunks/chunk.6G3UULFW.js":"7ZMcg","../../chunks/chunk.6WMYSCDC.js":"hqQxU","../../chunks/chunk.3IYPB6RR.js":"fQ2UY","../../chunks/chunk.IAELDRGJ.js":"i92Ja","../../chunks/chunk.7MO772SN.js":"VBtJX","../../chunks/chunk.2JQPDYNA.js":"37wp6","../../chunks/chunk.UY5AQKHP.js":"919RN","../../chunks/chunk.VKNZYXSO.js":"8m9Nr","../../chunks/chunk.7IGWJVQF.js":"aRwgb","../../chunks/chunk.WWAD5WF4.js":"e0MYj","../../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"6LiZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlButton", ()=>SlButton);
var _chunkFYYNL5GRJs = require("./chunk.FYYNL5GR.js");
var _chunk67FQMIF5Js = require("./chunk.67FQMIF5.js");
var _chunk6G3UULFWJs = require("./chunk.6G3UULFW.js");
var _chunk6WMYSCDCJs = require("./chunk.6WMYSCDC.js");
var _chunk3IYPB6RRJs = require("./chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("./chunk.IAELDRGJ.js");
var _chunk7MO772SNJs = require("./chunk.7MO772SN.js");
var _chunkUY5AQKHPJs = require("./chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/components/button/button.ts
var SlButton = class extends (0, _chunkWWAD5WF4Js.s) {
    constructor(){
        super(...arguments);
        this.formSubmitController = new (0, _chunk67FQMIF5Js.FormSubmitController)(this, {
            form: (input)=>{
                if (input.hasAttribute("form")) {
                    const doc = input.getRootNode();
                    const formId = input.getAttribute("form");
                    return doc.getElementById(formId);
                }
                return input.closest("form");
            }
        });
        this.hasSlotController = new (0, _chunk3IYPB6RRJs.HasSlotController)(this, "[default]", "prefix", "suffix");
        this.localize = new (0, _chunk6WMYSCDCJs.LocalizeController)(this);
        this.hasFocus = false;
        this.variant = "default";
        this.size = "medium";
        this.caret = false;
        this.disabled = false;
        this.loading = false;
        this.outline = false;
        this.pill = false;
        this.circle = false;
        this.type = "button";
    }
    click() {
        this.button.click();
    }
    focus(options) {
        this.button.focus(options);
    }
    blur() {
        this.button.blur();
    }
    handleBlur() {
        this.hasFocus = false;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-blur");
    }
    handleFocus() {
        this.hasFocus = true;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-focus");
    }
    handleClick(event) {
        if (this.disabled || this.loading) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (this.type === "submit") this.formSubmitController.submit(this);
        if (this.type === "reset") this.formSubmitController.reset(this);
    }
    render() {
        const isLink = this.href ? true : false;
        const tag = isLink ? (0, _chunk6G3UULFWJs.l)`a` : (0, _chunk6G3UULFWJs.l)`button`;
        return (0, _chunk6G3UULFWJs.n)`
      <${tag}
        part="base"
        class=${(0, _chunkIAELDRGJJs.o)({
            button: true,
            "button--default": this.variant === "default",
            "button--primary": this.variant === "primary",
            "button--success": this.variant === "success",
            "button--neutral": this.variant === "neutral",
            "button--warning": this.variant === "warning",
            "button--danger": this.variant === "danger",
            "button--text": this.variant === "text",
            "button--small": this.size === "small",
            "button--medium": this.size === "medium",
            "button--large": this.size === "large",
            "button--caret": this.caret,
            "button--circle": this.circle,
            "button--disabled": this.disabled,
            "button--focused": this.hasFocus,
            "button--loading": this.loading,
            "button--standard": !this.outline,
            "button--outline": this.outline,
            "button--pill": this.pill,
            "button--rtl": this.localize.dir() === "rtl",
            "button--has-label": this.hasSlotController.test("[default]"),
            "button--has-prefix": this.hasSlotController.test("prefix"),
            "button--has-suffix": this.hasSlotController.test("suffix")
        })}
        ?disabled=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : this.disabled)}
        type=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : this.type)}
        name=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : this.name)}
        value=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : this.value)}
        href=${(0, _chunk7MO772SNJs.l)(isLink ? this.href : void 0)}
        target=${(0, _chunk7MO772SNJs.l)(isLink ? this.target : void 0)}
        download=${(0, _chunk7MO772SNJs.l)(isLink ? this.download : void 0)}
        rel=${(0, _chunk7MO772SNJs.l)(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
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
        ${this.caret ? (0, _chunk6G3UULFWJs.n)`
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
              ` : ""}
        ${this.loading ? (0, _chunk6G3UULFWJs.n)`<sl-spinner></sl-spinner>` : ""}
      </${tag}>
    `;
    }
};
SlButton.styles = (0, _chunkFYYNL5GRJs.button_styles_default);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.i)(".button")
], SlButton.prototype, "button", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.t)()
], SlButton.prototype, "hasFocus", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlButton.prototype, "variant", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlButton.prototype, "size", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "caret", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "disabled", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "loading", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "outline", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "pill", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "circle", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "type", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "name", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "value", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "href", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "target", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "download", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlButton.prototype, "form", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "formaction"
    })
], SlButton.prototype, "formAction", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "formmethod"
    })
], SlButton.prototype, "formMethod", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "formnovalidate",
        type: Boolean
    })
], SlButton.prototype, "formNoValidate", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "formtarget"
    })
], SlButton.prototype, "formTarget", 2);
SlButton = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-button")
], SlButton);

},{"./chunk.FYYNL5GR.js":"9QHXt","./chunk.67FQMIF5.js":"gTciw","./chunk.6G3UULFW.js":"7ZMcg","./chunk.6WMYSCDC.js":"hqQxU","./chunk.3IYPB6RR.js":"fQ2UY","./chunk.IAELDRGJ.js":"i92Ja","./chunk.7MO772SN.js":"VBtJX","./chunk.UY5AQKHP.js":"919RN","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"9QHXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button_styles_default", ()=>button_styles_default);
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/button/button.styles.ts
var button_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}

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
`;

},{"./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"aRwgb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component_styles_default", ()=>component_styles_default);
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/styles/component.styles.ts
var component_styles_default = (0, _chunkWWAD5WF4Js.r)`
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
`;

},{"./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"e0MYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "r", ()=>r) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */  /**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "o", ()=>o2);
parcelHelpers.export(exports, "$", ()=>$);
parcelHelpers.export(exports, "y", ()=>y);
parcelHelpers.export(exports, "b", ()=>b);
parcelHelpers.export(exports, "w", ()=>w);
parcelHelpers.export(exports, "R", ()=>R);
parcelHelpers.export(exports, "s", ()=>s4);
// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = /* @__PURE__ */ new Map();
var s = class {
    constructor(t3, n5){
        if (this._$cssResult$ = true, n5 !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3;
    }
    get styleSheet() {
        let e4 = n.get(this.cssText);
        return t && void 0 === e4 && (n.set(this.cssText, e4 = new CSSStyleSheet()), e4.replaceSync(this.cssText)), e4;
    }
    toString() {
        return this.cssText;
    }
};
var o = (t3)=>new s("string" == typeof t3 ? t3 : t3 + "", e);
var r = (t3, ...n5)=>{
    const o5 = 1 === t3.length ? t3[0] : n5.reduce((e4, n6, s5)=>e4 + ((t4)=>{
            if (true === t4._$cssResult$) return t4.cssText;
            if ("number" == typeof t4) return t4;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n6) + t3[s5 + 1], t3[0]);
    return new s(o5, e);
};
var i = (e4, n5)=>{
    t ? e4.adoptedStyleSheets = n5.map((t3)=>t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n5.forEach((t3)=>{
        const n6 = document.createElement("style"), s5 = window.litNonce;
        void 0 !== s5 && n6.setAttribute("nonce", s5), n6.textContent = t3.cssText, e4.appendChild(n6);
    });
};
var S = t ? (t3)=>t3 : (t3)=>t3 instanceof CSSStyleSheet ? ((t4)=>{
        let e4 = "";
        for (const n5 of t4.cssRules)e4 += n5.cssText;
        return o(e4);
    })(t3) : t3;
// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window.trustedTypes;
var r2 = e2 ? e2.emptyScript : "";
var h = window.reactiveElementPolyfillSupport;
var o2 = {
    toAttribute (t3, i3) {
        switch(i3){
            case Boolean:
                t3 = t3 ? r2 : null;
                break;
            case Object:
            case Array:
                t3 = null == t3 ? t3 : JSON.stringify(t3);
        }
        return t3;
    },
    fromAttribute (t3, i3) {
        let s5 = t3;
        switch(i3){
            case Boolean:
                s5 = null !== t3;
                break;
            case Number:
                s5 = null === t3 ? null : Number(t3);
                break;
            case Object:
            case Array:
                try {
                    s5 = JSON.parse(t3);
                } catch (t4) {
                    s5 = null;
                }
        }
        return s5;
    }
};
var n2 = (t3, i3)=>i3 !== t3 && (i3 == i3 || t3 == t3);
var l = {
    attribute: true,
    type: String,
    converter: o2,
    reflect: false,
    hasChanged: n2
};
var a = class extends HTMLElement {
    constructor(){
        super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t3) {
        var i3;
        null !== (i3 = this.l) && void 0 !== i3 || (this.l = []), this.l.push(t3);
    }
    static get observedAttributes() {
        this.finalize();
        const t3 = [];
        return this.elementProperties.forEach((i3, s5)=>{
            const e4 = this._$Eh(s5, i3);
            void 0 !== e4 && (this._$Eu.set(e4, s5), t3.push(e4));
        }), t3;
    }
    static createProperty(t3, i3 = l) {
        if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
            const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e4 = this.getPropertyDescriptor(t3, s5, i3);
            void 0 !== e4 && Object.defineProperty(this.prototype, t3, e4);
        }
    }
    static getPropertyDescriptor(t3, i3, s5) {
        return {
            get () {
                return this[i3];
            },
            set (e4) {
                const r4 = this[t3];
                this[i3] = e4, this.requestUpdate(t3, r4, s5);
            },
            configurable: true,
            enumerable: true
        };
    }
    static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return false;
        this.finalized = true;
        const t3 = Object.getPrototypeOf(this);
        if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
            const t4 = this.properties, i3 = [
                ...Object.getOwnPropertyNames(t4),
                ...Object.getOwnPropertySymbols(t4)
            ];
            for (const s5 of i3)this.createProperty(s5, t4[s5]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i3) {
        const s5 = [];
        if (Array.isArray(i3)) {
            const e4 = new Set(i3.flat(1 / 0).reverse());
            for (const i4 of e4)s5.unshift(S(i4));
        } else void 0 !== i3 && s5.push(S(i3));
        return s5;
    }
    static _$Eh(t3, i3) {
        const s5 = i3.attribute;
        return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    o() {
        var t3;
        this._$Ep = new Promise((t4)=>this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), null === (t3 = this.constructor.l) || void 0 === t3 || t3.forEach((t4)=>t4(this));
    }
    addController(t3) {
        var i3, s5;
        (null !== (i3 = this._$Eg) && void 0 !== i3 ? i3 : this._$Eg = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
    }
    removeController(t3) {
        var i3;
        null === (i3 = this._$Eg) || void 0 === i3 || i3.splice(this._$Eg.indexOf(t3) >>> 0, 1);
    }
    _$Em() {
        this.constructor.elementProperties.forEach((t3, i3)=>{
            this.hasOwnProperty(i3) && (this._$Et.set(i3, this[i3]), delete this[i3]);
        });
    }
    createRenderRoot() {
        var t3;
        const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
        return i(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
        var t3;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$Eg) || void 0 === t3 || t3.forEach((t4)=>{
            var i3;
            return null === (i3 = t4.hostConnected) || void 0 === i3 ? void 0 : i3.call(t4);
        });
    }
    enableUpdating(t3) {}
    disconnectedCallback() {
        var t3;
        null === (t3 = this._$Eg) || void 0 === t3 || t3.forEach((t4)=>{
            var i3;
            return null === (i3 = t4.hostDisconnected) || void 0 === i3 ? void 0 : i3.call(t4);
        });
    }
    attributeChangedCallback(t3, i3, s5) {
        this._$AK(t3, s5);
    }
    _$ES(t3, i3, s5 = l) {
        var e4, r4;
        const h3 = this.constructor._$Eh(t3, s5);
        if (void 0 !== h3 && true === s5.reflect) {
            const n5 = (null !== (r4 = null === (e4 = s5.converter) || void 0 === e4 ? void 0 : e4.toAttribute) && void 0 !== r4 ? r4 : o2.toAttribute)(i3, s5.type);
            this._$Ei = t3, null == n5 ? this.removeAttribute(h3) : this.setAttribute(h3, n5), this._$Ei = null;
        }
    }
    _$AK(t3, i3) {
        var s5, e4, r4;
        const h3 = this.constructor, n5 = h3._$Eu.get(t3);
        if (void 0 !== n5 && this._$Ei !== n5) {
            const t4 = h3.getPropertyOptions(n5), l4 = t4.converter, a3 = null !== (r4 = null !== (e4 = null === (s5 = l4) || void 0 === s5 ? void 0 : s5.fromAttribute) && void 0 !== e4 ? e4 : "function" == typeof l4 ? l4 : null) && void 0 !== r4 ? r4 : o2.fromAttribute;
            this._$Ei = n5, this[n5] = a3(i3, t4.type), this._$Ei = null;
        }
    }
    requestUpdate(t3, i3, s5) {
        let e4 = true;
        void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || n2)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), true === s5.reflect && this._$Ei !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e4 = false), !this.isUpdatePending && e4 && (this._$Ep = this._$E_());
    }
    async _$E_() {
        this.isUpdatePending = true;
        try {
            await this._$Ep;
        } catch (t4) {
            Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t3;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i4)=>this[i4] = t4), this._$Et = void 0);
        let i3 = false;
        const s5 = this._$AL;
        try {
            i3 = this.shouldUpdate(s5), i3 ? (this.willUpdate(s5), null === (t3 = this._$Eg) || void 0 === t3 || t3.forEach((t4)=>{
                var i4;
                return null === (i4 = t4.hostUpdate) || void 0 === i4 ? void 0 : i4.call(t4);
            }), this.update(s5)) : this._$EU();
        } catch (t4) {
            throw i3 = false, this._$EU(), t4;
        }
        i3 && this._$AE(s5);
    }
    willUpdate(t3) {}
    _$AE(t3) {
        var i3;
        null === (i3 = this._$Eg) || void 0 === i3 || i3.forEach((t4)=>{
            var i4;
            return null === (i4 = t4.hostUpdated) || void 0 === i4 ? void 0 : i4.call(t4);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EU() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$Ep;
    }
    shouldUpdate(t3) {
        return true;
    }
    update(t3) {
        void 0 !== this._$EC && (this._$EC.forEach((t4, i3)=>this._$ES(i3, this[i3], t4)), this._$EC = void 0), this._$EU();
    }
    updated(t3) {}
    firstUpdated(t3) {}
};
a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = {
    mode: "open"
}, null == h || h({
    ReactiveElement: a
}), (null !== (s2 = globalThis.reactiveElementVersions) && void 0 !== s2 ? s2 : globalThis.reactiveElementVersions = []).push("1.3.2");
// node_modules/lit-html/lit-html.js
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", {
    createHTML: (t3)=>t3
}) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l2 = document;
var h2 = (t3 = "")=>l2.createComment(t3);
var r3 = (t3)=>null === t3 || "object" != typeof t3 && "function" != typeof t3;
var d = Array.isArray;
var u = (t3)=>{
    var i3;
    return d(t3) || "function" == typeof (null === (i3 = t3) || void 0 === i3 ? void 0 : i3[Symbol.iterator]);
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a2 = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea|title)$/i;
var p = (t3)=>(i3, ...s5)=>({
            _$litType$: t3,
            strings: i3,
            values: s5
        });
var $ = p(1);
var y = p(2);
var b = Symbol.for("lit-noChange");
var w = Symbol.for("lit-nothing");
var T = /* @__PURE__ */ new WeakMap();
var x = (t3, i3, s5)=>{
    var e4, o5;
    const n5 = null !== (e4 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e4 ? e4 : i3;
    let l4 = n5._$litPart$;
    if (void 0 === l4) {
        const t4 = null !== (o5 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o5 ? o5 : null;
        n5._$litPart$ = l4 = new N(i3.insertBefore(h2(), t4), t4, void 0, null != s5 ? s5 : {});
    }
    return l4._$AI(t3), l4;
};
var A = l2.createTreeWalker(l2, 129, null, false);
var C = (t3, i3)=>{
    const o5 = t3.length - 1, l4 = [];
    let h3, r4 = 2 === i3 ? "<svg>" : "", d2 = c;
    for(let i4 = 0; i4 < o5; i4++){
        const s5 = t3[i4];
        let o6, u3, p2 = -1, $2 = 0;
        for(; $2 < s5.length && (d2.lastIndex = $2, u3 = d2.exec(s5), null !== u3);)$2 = d2.lastIndex, d2 === c ? "!--" === u3[1] ? d2 = v : void 0 !== u3[1] ? d2 = a2 : void 0 !== u3[2] ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : void 0 !== u3[3] && (d2 = f) : d2 === f ? ">" === u3[0] ? (d2 = null != h3 ? h3 : c, p2 = -1) : void 0 === u3[1] ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o6 = u3[1], d2 = void 0 === u3[3] ? f : '"' === u3[3] ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h3 = void 0);
        const y2 = d2 === f && t3[i4 + 1].startsWith("/>") ? " " : "";
        r4 += d2 === c ? s5 + n3 : p2 >= 0 ? (l4.push(o6), s5.slice(0, p2) + "$lit$" + s5.slice(p2) + e3 + y2) : s5 + e3 + (-2 === p2 ? (l4.push(void 0), i4) : y2);
    }
    const u2 = r4 + (t3[o5] || "<?>") + (2 === i3 ? "</svg>" : "");
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== s3 ? s3.createHTML(u2) : u2,
        l4
    ];
};
var E = class {
    constructor({ strings: t3 , _$litType$: s5  }, n5){
        let l4;
        this.parts = [];
        let r4 = 0, d2 = 0;
        const u2 = t3.length - 1, c2 = this.parts, [v2, a3] = C(t3, s5);
        if (this.el = E.createElement(v2, n5), A.currentNode = this.el.content, 2 === s5) {
            const t4 = this.el.content, i3 = t4.firstChild;
            i3.remove(), t4.append(...i3.childNodes);
        }
        for(; null !== (l4 = A.nextNode()) && c2.length < u2;){
            if (1 === l4.nodeType) {
                if (l4.hasAttributes()) {
                    const t4 = [];
                    for (const i3 of l4.getAttributeNames())if (i3.endsWith("$lit$") || i3.startsWith(e3)) {
                        const s6 = a3[d2++];
                        if (t4.push(i3), void 0 !== s6) {
                            const t5 = l4.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i4 = /([.?@])?(.*)/.exec(s6);
                            c2.push({
                                type: 1,
                                index: r4,
                                name: i4[2],
                                strings: t5,
                                ctor: "." === i4[1] ? M : "?" === i4[1] ? H : "@" === i4[1] ? I : S2
                            });
                        } else c2.push({
                            type: 6,
                            index: r4
                        });
                    }
                    for (const i31 of t4)l4.removeAttribute(i31);
                }
                if (g.test(l4.tagName)) {
                    const t4 = l4.textContent.split(e3), s6 = t4.length - 1;
                    if (s6 > 0) {
                        l4.textContent = i2 ? i2.emptyScript : "";
                        for(let i3 = 0; i3 < s6; i3++)l4.append(t4[i3], h2()), A.nextNode(), c2.push({
                            type: 2,
                            index: ++r4
                        });
                        l4.append(t4[s6], h2());
                    }
                }
            } else if (8 === l4.nodeType) {
                if (l4.data === o3) c2.push({
                    type: 2,
                    index: r4
                });
                else {
                    let t4 = -1;
                    for(; -1 !== (t4 = l4.data.indexOf(e3, t4 + 1));)c2.push({
                        type: 7,
                        index: r4
                    }), t4 += e3.length - 1;
                }
            }
            r4++;
        }
    }
    static createElement(t3, i3) {
        const s5 = l2.createElement("template");
        return s5.innerHTML = t3, s5;
    }
};
function P(t3, i3, s5 = t3, e4) {
    var o5, n5, l4, h3;
    if (i3 === b) return i3;
    let d2 = void 0 !== e4 ? null === (o5 = s5._$Cl) || void 0 === o5 ? void 0 : o5[e4] : s5._$Cu;
    const u2 = r3(i3) ? void 0 : i3._$litDirective$;
    return (null == d2 ? void 0 : d2.constructor) !== u2 && (null === (n5 = null == d2 ? void 0 : d2._$AO) || void 0 === n5 || n5.call(d2, false), void 0 === u2 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e4)), void 0 !== e4 ? (null !== (l4 = (h3 = s5)._$Cl) && void 0 !== l4 ? l4 : h3._$Cl = [])[e4] = d2 : s5._$Cu = d2), void 0 !== d2 && (i3 = P(t3, d2._$AS(t3, i3.values), d2, e4)), i3;
}
var V = class {
    constructor(t3, i3){
        this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t3) {
        var i3;
        const { el: { content: s5  } , parts: e4  } = this._$AD, o5 = (null !== (i3 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i3 ? i3 : l2).importNode(s5, true);
        A.currentNode = o5;
        let n5 = A.nextNode(), h3 = 0, r4 = 0, d2 = e4[0];
        for(; void 0 !== d2;){
            if (h3 === d2.index) {
                let i4;
                2 === d2.type ? i4 = new N(n5, n5.nextSibling, this, t3) : 1 === d2.type ? i4 = new d2.ctor(n5, d2.name, d2.strings, this, t3) : 6 === d2.type && (i4 = new L(n5, this, t3)), this.v.push(i4), d2 = e4[++r4];
            }
            h3 !== (null == d2 ? void 0 : d2.index) && (n5 = A.nextNode(), h3++);
        }
        return o5;
    }
    m(t3) {
        let i3 = 0;
        for (const s5 of this.v)void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i3), i3 += s5.strings.length - 2) : s5._$AI(t3[i3])), i3++;
    }
};
var N = class {
    constructor(t3, i3, s5, e4){
        var o5;
        this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s5, this.options = e4, this._$Cg = null === (o5 = null == e4 ? void 0 : e4.isConnected) || void 0 === o5 || o5;
    }
    get _$AU() {
        var t3, i3;
        return null !== (i3 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i3 ? i3 : this._$Cg;
    }
    get parentNode() {
        let t3 = this._$AA.parentNode;
        const i3 = this._$AM;
        return void 0 !== i3 && 11 === t3.nodeType && (t3 = i3.parentNode), t3;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t3, i3 = this) {
        t3 = P(this, t3, i3), r3(t3) ? t3 === w || null == t3 || "" === t3 ? (this._$AH !== w && this._$AR(), this._$AH = w) : t3 !== this._$AH && t3 !== b && this.$(t3) : void 0 !== t3._$litType$ ? this.T(t3) : void 0 !== t3.nodeType ? this.k(t3) : u(t3) ? this.S(t3) : this.$(t3);
    }
    M(t3, i3 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t3, i3);
    }
    k(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.M(t3));
    }
    $(t3) {
        this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.k(l2.createTextNode(t3)), this._$AH = t3;
    }
    T(t3) {
        var i3;
        const { values: s5 , _$litType$: e4  } = t3, o5 = "number" == typeof e4 ? this._$AC(t3) : (void 0 === e4.el && (e4.el = E.createElement(e4.h, this.options)), e4);
        if ((null === (i3 = this._$AH) || void 0 === i3 ? void 0 : i3._$AD) === o5) this._$AH.m(s5);
        else {
            const t4 = new V(o5, this), i4 = t4.p(this.options);
            t4.m(s5), this.k(i4), this._$AH = t4;
        }
    }
    _$AC(t3) {
        let i3 = T.get(t3.strings);
        return void 0 === i3 && T.set(t3.strings, i3 = new E(t3)), i3;
    }
    S(t3) {
        d(this._$AH) || (this._$AH = [], this._$AR());
        const i3 = this._$AH;
        let s5, e4 = 0;
        for (const o5 of t3)e4 === i3.length ? i3.push(s5 = new N(this.M(h2()), this.M(h2()), this, this.options)) : s5 = i3[e4], s5._$AI(o5), e4++;
        e4 < i3.length && (this._$AR(s5 && s5._$AB.nextSibling, e4), i3.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
        var s5;
        for(null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i3); t3 && t3 !== this._$AB;){
            const i4 = t3.nextSibling;
            t3.remove(), t3 = i4;
        }
    }
    setConnected(t3) {
        var i3;
        void 0 === this._$AM && (this._$Cg = t3, null === (i3 = this._$AP) || void 0 === i3 || i3.call(this, t3));
    }
};
var S2 = class {
    constructor(t3, i3, s5, e4, o5){
        this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e4, this.options = o5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = w;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t3, i3 = this, s5, e4) {
        const o5 = this.strings;
        let n5 = false;
        if (void 0 === o5) t3 = P(this, t3, i3, 0), n5 = !r3(t3) || t3 !== this._$AH && t3 !== b, n5 && (this._$AH = t3);
        else {
            const e5 = t3;
            let l4, h3;
            for(t3 = o5[0], l4 = 0; l4 < o5.length - 1; l4++)h3 = P(this, e5[s5 + l4], i3, l4), h3 === b && (h3 = this._$AH[l4]), n5 || (n5 = !r3(h3) || h3 !== this._$AH[l4]), h3 === w ? t3 = w : t3 !== w && (t3 += (null != h3 ? h3 : "") + o5[l4 + 1]), this._$AH[l4] = h3;
        }
        n5 && !e4 && this.C(t3);
    }
    C(t3) {
        t3 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
    }
};
var M = class extends S2 {
    constructor(){
        super(...arguments), this.type = 3;
    }
    C(t3) {
        this.element[this.name] = t3 === w ? void 0 : t3;
    }
};
var k = i2 ? i2.emptyScript : "";
var H = class extends S2 {
    constructor(){
        super(...arguments), this.type = 4;
    }
    C(t3) {
        t3 && t3 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
};
var I = class extends S2 {
    constructor(t3, i3, s5, e4, o5){
        super(t3, i3, s5, e4, o5), this.type = 5;
    }
    _$AI(t3, i3 = this) {
        var s5;
        if ((t3 = null !== (s5 = P(this, t3, i3, 0)) && void 0 !== s5 ? s5 : w) === b) return;
        const e4 = this._$AH, o5 = t3 === w && e4 !== w || t3.capture !== e4.capture || t3.once !== e4.once || t3.passive !== e4.passive, n5 = t3 !== w && (e4 === w || o5);
        o5 && this.element.removeEventListener(this.name, this, e4), n5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
        var i3, s5;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i3 = this.options) || void 0 === i3 ? void 0 : i3.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
};
var L = class {
    constructor(t3, i3, s5){
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s5;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t3) {
        P(this, t3);
    }
};
var R = {
    L: "$lit$",
    P: e3,
    V: o3,
    I: 1,
    N: C,
    R: V,
    j: u,
    D: P,
    H: N,
    F: S2,
    O: H,
    W: I,
    B: M,
    Z: L
};
var z = window.litHtmlPolyfillSupport;
null == z || z(E, N), (null !== (t2 = globalThis.litHtmlVersions) && void 0 !== t2 ? t2 : globalThis.litHtmlVersions = []).push("2.2.4");
// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends a {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Dt = void 0;
    }
    createRenderRoot() {
        var t3, e4;
        const i3 = super.createRenderRoot();
        return null !== (t3 = (e4 = this.renderOptions).renderBefore) && void 0 !== t3 || (e4.renderBefore = i3.firstChild), i3;
    }
    update(t3) {
        const i3 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = x(i3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t3;
        super.connectedCallback(), null === (t3 = this._$Dt) || void 0 === t3 || t3.setConnected(true);
    }
    disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), null === (t3 = this._$Dt) || void 0 === t3 || t3.setConnected(false);
    }
    render() {
        return b;
    }
};
s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, {
    LitElement: s4
});
var n4 = globalThis.litElementPolyfillSupport;
null == n4 || n4({
    LitElement: s4
});
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.0");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"aMYfM":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gTciw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormSubmitController", ()=>FormSubmitController);
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/internal/formdata-event-polyfill.ts
var FormDataEventPolyfill = class extends Event {
    constructor(formData){
        super("formdata");
        this.formData = formData;
    }
};
var FormDataPolyfill = class extends FormData {
    constructor(form){
        var __super = (...args)=>{
            super(...args);
        };
        if (form) {
            __super(form);
            this.form = form;
            form.dispatchEvent(new FormDataEventPolyfill(this));
        } else __super();
    }
    append(name, value) {
        if (!this.form) return super.append(name, value);
        let input = this.form.elements[name];
        if (!input) {
            input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            this.form.appendChild(input);
        }
        if (this.has(name)) {
            const entries = this.getAll(name);
            const index = entries.indexOf(input.value);
            if (index !== -1) entries.splice(index, 1);
            entries.push(value);
            this.set(name, entries);
        } else super.append(name, value);
        input.value = value;
    }
};
function supportsFormDataEvent() {
    const form = document.createElement("form");
    let isSupported = false;
    document.body.append(form);
    form.addEventListener("submit", (event)=>{
        new FormData(event.target);
        event.preventDefault();
    });
    form.addEventListener("formdata", ()=>isSupported = true);
    form.dispatchEvent(new Event("submit", {
        cancelable: true
    }));
    form.remove();
    return isSupported;
}
function polyfillFormData() {
    if (!window.FormData || supportsFormDataEvent()) return;
    window.FormData = FormDataPolyfill;
    window.addEventListener("submit", (event)=>{
        if (!event.defaultPrevented) new FormData(event.target);
    });
}
if (document.readyState === "complete") polyfillFormData();
else window.addEventListener("DOMContentLoaded", ()=>polyfillFormData());
// src/internal/form.ts
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var FormSubmitController = class {
    constructor(host, options){
        (this.host = host).addController(this);
        this.options = (0, _chunkK2NRSETBJs.__spreadValues)({
            form: (input)=>input.closest("form"),
            name: (input)=>input.name,
            value: (input)=>input.value,
            defaultValue: (input)=>input.defaultValue,
            disabled: (input)=>input.disabled,
            reportValidity: (input)=>{
                return typeof input.reportValidity === "function" ? input.reportValidity() : true;
            },
            setValue: (input, value)=>{
                input.value = value;
            }
        }, options);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormReset = this.handleFormReset.bind(this);
        this.reportFormValidity = this.reportFormValidity.bind(this);
    }
    hostConnected() {
        this.form = this.options.form(this.host);
        if (this.form) {
            this.form.addEventListener("formdata", this.handleFormData);
            this.form.addEventListener("submit", this.handleFormSubmit);
            this.form.addEventListener("reset", this.handleFormReset);
            if (!reportValidityOverloads.has(this.form)) {
                reportValidityOverloads.set(this.form, this.form.reportValidity);
                this.form.reportValidity = ()=>this.reportFormValidity();
            }
        }
    }
    hostDisconnected() {
        if (this.form) {
            this.form.removeEventListener("formdata", this.handleFormData);
            this.form.removeEventListener("submit", this.handleFormSubmit);
            this.form.removeEventListener("reset", this.handleFormReset);
            if (reportValidityOverloads.has(this.form)) {
                this.form.reportValidity = reportValidityOverloads.get(this.form);
                reportValidityOverloads.delete(this.form);
            }
            this.form = void 0;
        }
    }
    handleFormData(event) {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        if (!disabled && typeof name === "string" && typeof value !== "undefined") {
            if (Array.isArray(value)) value.forEach((val)=>{
                event.formData.append(name, val.toString());
            });
            else event.formData.append(name, value.toString());
        }
    }
    handleFormSubmit(event) {
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    handleFormReset() {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
    }
    reportFormValidity() {
        if (this.form && !this.form.noValidate) {
            const elements = this.form.querySelectorAll("*");
            for (const element of elements)if (typeof element.reportValidity === "function") {
                if (!element.reportValidity()) return false;
            }
        }
        return true;
    }
    doAction(type, invoker) {
        if (this.form) {
            const button = document.createElement("button");
            button.type = type;
            button.style.position = "absolute";
            button.style.width = "0";
            button.style.height = "0";
            button.style.clipPath = "inset(50%)";
            button.style.overflow = "hidden";
            button.style.whiteSpace = "nowrap";
            if (invoker) [
                "formaction",
                "formmethod",
                "formnovalidate",
                "formtarget"
            ].forEach((attr)=>{
                if (invoker.hasAttribute(attr)) button.setAttribute(attr, invoker.getAttribute(attr));
            });
            this.form.append(button);
            button.click();
            button.remove();
        }
    }
    reset(invoker) {
        this.doAction("reset", invoker);
    }
    submit(invoker) {
        this.doAction("submit", invoker);
    }
};

},{"./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"dR47F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__spreadValues", ()=>__spreadValues);
parcelHelpers.export(exports, "__spreadProps", ()=>__spreadProps);
parcelHelpers.export(exports, "__objRest", ()=>__objRest);
parcelHelpers.export(exports, "__commonJS", ()=>__commonJS);
parcelHelpers.export(exports, "__export", ()=>__export);
parcelHelpers.export(exports, "__toESM", ()=>__toESM);
parcelHelpers.export(exports, "__decorateClass", ()=>__decorateClass);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(b))if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(source))if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __decorateClass = (decorators, target, key, kind)=>{
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for(var i = decorators.length - 1, decorator; i >= 0; i--)if (decorator = decorators[i]) result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"7ZMcg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l) /**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "n", ()=>n);
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// node_modules/lit-html/static.js
var o = Symbol.for("");
var e = (t)=>{
    var r, e2;
    if ((null === (r = t) || void 0 === r ? void 0 : r.r) === o) return null === (e2 = t) || void 0 === e2 ? void 0 : e2._$litStatic$;
};
var l = (t, ...r)=>({
        _$litStatic$: r.reduce((r2, o2, e2)=>r2 + ((t2)=>{
                if (void 0 !== t2._$litStatic$) return t2._$litStatic$;
                throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t2}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
            })(o2) + t[e2 + 1], t[0]),
        r: o
    });
var a = /* @__PURE__ */ new Map();
var s = (t)=>(r, ...o2)=>{
        const i = o2.length;
        let l2, s2;
        const n2 = [], u2 = [];
        let c, v = 0, $2 = false;
        for(; v < i;){
            for(c = r[v]; v < i && void 0 !== (s2 = o2[v], l2 = e(s2));)c += l2 + r[++v], $2 = true;
            u2.push(s2), n2.push(c), v++;
        }
        if (v === i && n2.push(r[i]), $2) {
            const t2 = n2.join("$$lit$$");
            void 0 === (r = a.get(t2)) && (n2.raw = n2, a.set(t2, r = n2)), o2 = u2;
        }
        return t(r, ...o2);
    };
var n = s((0, _chunkWWAD5WF4Js.$));
var u = s((0, _chunkWWAD5WF4Js.y));

},{"./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"hqQxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerTranslation", ()=>registerTranslation);
parcelHelpers.export(exports, "en_default", ()=>en_default);
parcelHelpers.export(exports, "LocalizeController", ()=>LocalizeController2);
// node_modules/@shoelace-style/localize/dist/index.js
var connectedElements = /* @__PURE__ */ new Set();
var documentElementObserver = new MutationObserver(update);
var translations = /* @__PURE__ */ new Map();
var documentDirection = document.documentElement.dir || "ltr";
var documentLanguage = document.documentElement.lang || navigator.language;
var fallback;
documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [
        "dir",
        "lang"
    ]
});
function registerTranslation(...translation2) {
    translation2.map((t)=>{
        const code = t.$code.toLowerCase();
        if (translations.has(code)) translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
        else translations.set(code, t);
        if (!fallback) fallback = t;
    });
    update();
}
function update() {
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    [
        ...connectedElements.keys()
    ].map((el)=>{
        if (typeof el.requestUpdate === "function") el.requestUpdate();
    });
}
var LocalizeController = class {
    constructor(host){
        this.host = host;
        this.host.addController(this);
    }
    hostConnected() {
        connectedElements.add(this.host);
    }
    hostDisconnected() {
        connectedElements.delete(this.host);
    }
    dir() {
        return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
        return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    term(key, ...args) {
        const code = this.lang().toLowerCase().slice(0, 2);
        const regionCode = this.lang().length > 2 ? this.lang().toLowerCase() : "";
        const primary = translations.get(regionCode);
        const secondary = translations.get(code);
        let term;
        if (primary && primary[key]) term = primary[key];
        else if (secondary && secondary[key]) term = secondary[key];
        else if (fallback && fallback[key]) term = fallback[key];
        else {
            console.error(`No translation found for: ${String(key)}`);
            return key;
        }
        if (typeof term === "function") return term(...args);
        return term;
    }
    date(dateToFormat, options) {
        dateToFormat = new Date(dateToFormat);
        return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
        numberToFormat = Number(numberToFormat);
        return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
        return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
};
// src/utilities/localize.ts
var LocalizeController2 = class extends LocalizeController {
};
// src/translations/en.ts
var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    clearEntry: "Clear entry",
    close: "Close",
    copy: "Copy",
    currentValue: "Current value",
    hidePassword: "Hide password",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    toggleColorFormat: "Toggle color format"
};
registerTranslation(translation);
var en_default = translation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"fQ2UY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HasSlotController", ()=>HasSlotController);
parcelHelpers.export(exports, "getTextContent", ()=>getTextContent);
// src/internal/slot.ts
var HasSlotController = class {
    constructor(host, ...slotNames){
        this.slotNames = [];
        (this.host = host).addController(this);
        this.slotNames = slotNames;
        this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    hasDefaultSlot() {
        return [
            ...this.host.childNodes
        ].some((node)=>{
            if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") return true;
            if (node.nodeType === node.ELEMENT_NODE) {
                const el = node;
                const tagName = el.tagName.toLowerCase();
                if (tagName === "sl-visually-hidden") return false;
                if (!el.hasAttribute("slot")) return true;
            }
            return false;
        });
    }
    hasNamedSlot(name) {
        return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
        return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
        this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
        this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
    handleSlotChange(event) {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) this.host.requestUpdate();
    }
};
function getTextContent(slot) {
    if (!slot) return "";
    const nodes = slot.assignedNodes({
        flatten: true
    });
    let text = "";
    [
        ...nodes
    ].forEach((node)=>{
        if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    });
    return text;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"i92Ja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "o", ()=>o) /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
var _chunk2JQPDYNAJs = require("./chunk.2JQPDYNA.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// node_modules/lit-html/directives/class-map.js
var o = (0, _chunk2JQPDYNAJs.e)(class extends (0, _chunk2JQPDYNAJs.i) {
    constructor(t2){
        var i2;
        if (super(t2), t2.type !== (0, _chunk2JQPDYNAJs.t).ATTRIBUTE || "class" !== t2.name || (null === (i2 = t2.strings) || void 0 === i2 ? void 0 : i2.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t2) {
        return " " + Object.keys(t2).filter((i2)=>t2[i2]).join(" ") + " ";
    }
    update(i2, [s]) {
        var r, o2;
        if (void 0 === this.et) {
            this.et = /* @__PURE__ */ new Set(), void 0 !== i2.strings && (this.st = new Set(i2.strings.join(" ").split(/\s/).filter((t2)=>"" !== t2)));
            for(const t21 in s)s[t21] && !(null === (r = this.st) || void 0 === r ? void 0 : r.has(t21)) && this.et.add(t21);
            return this.render(s);
        }
        const e2 = i2.element.classList;
        this.et.forEach((t2)=>{
            t2 in s || (e2.remove(t2), this.et.delete(t2));
        });
        for(const t22 in s){
            const i3 = !!s[t22];
            i3 === this.et.has(t22) || (null === (o2 = this.st) || void 0 === o2 ? void 0 : o2.has(t22)) || (i3 ? (e2.add(t22), this.et.add(t22)) : (e2.remove(t22), this.et.delete(t22)));
        }
        return 0, _chunkWWAD5WF4Js.b;
    }
});

},{"./chunk.2JQPDYNA.js":"37wp6","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"37wp6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "t", ()=>t) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "e", ()=>e);
parcelHelpers.export(exports, "i", ()=>i);
// node_modules/lit-html/directive.js
var t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
};
var e = (t2)=>(...e2)=>({
            _$litDirective$: t2,
            values: e2
        });
var i = class {
    constructor(t2){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t2, e2, i2) {
        this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
    }
    _$AS(t2, e2) {
        return this.update(t2, e2);
    }
    update(t2, e2) {
        return this.render(...e2);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"VBtJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l) /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// node_modules/lit-html/directives/if-defined.js
var l = (l2)=>null != l2 ? l2 : (0, _chunkWWAD5WF4Js.w);

},{"./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"919RN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emit", ()=>emit);
parcelHelpers.export(exports, "waitForEvent", ()=>waitForEvent);
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/internal/event.ts
function emit(el, name, options) {
    const event = new CustomEvent(name, (0, _chunkK2NRSETBJs.__spreadValues)({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
    }, options));
    el.dispatchEvent(event);
    return event;
}
function waitForEvent(el, eventName) {
    return new Promise((resolve)=>{
        function done(event) {
            if (event.target === el) {
                el.removeEventListener(eventName, done);
                resolve();
            }
        }
        el.addEventListener(eventName, done);
    });
}

},{"./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"8m9Nr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "n", ()=>n) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */  /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "e", ()=>e);
parcelHelpers.export(exports, "t", ()=>t);
parcelHelpers.export(exports, "i", ()=>i2);
parcelHelpers.export(exports, "e2", ()=>e2);
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// node_modules/@lit/reactive-element/decorators/custom-element.js
var n = (n3)=>(e4)=>"function" == typeof e4 ? ((n4, e5)=>(window.customElements.define(n4, e5), e5))(n3, e4) : ((n4, e5)=>{
            const { kind: t2 , elements: i3  } = e5;
            return {
                kind: t2,
                elements: i3,
                finisher (e6) {
                    window.customElements.define(n4, e6);
                }
            };
        })(n3, e4);
// node_modules/@lit/reactive-element/decorators/property.js
var i = (i3, e4)=>"method" === e4.kind && e4.descriptor && !("value" in e4.descriptor) ? (0, _chunkK2NRSETBJs.__spreadProps)((0, _chunkK2NRSETBJs.__spreadValues)({}, e4), {
        finisher (n3) {
            n3.createProperty(e4.key, i3);
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e4.key,
        initializer () {
            "function" == typeof e4.initializer && (this[e4.key] = e4.initializer.call(this));
        },
        finisher (n3) {
            n3.createProperty(e4.key, i3);
        }
    };
function e(e4) {
    return (n3, t2)=>void 0 !== t2 ? ((i3, e5, n4)=>{
            e5.constructor.createProperty(n4, i3);
        })(e4, n3, t2) : i(e4, n3);
}
// node_modules/@lit/reactive-element/decorators/state.js
function t(t2) {
    return e((0, _chunkK2NRSETBJs.__spreadProps)((0, _chunkK2NRSETBJs.__spreadValues)({}, t2), {
        state: true
    }));
}
// node_modules/@lit/reactive-element/decorators/base.js
var o = ({ finisher: e4 , descriptor: t2  })=>(o2, n3)=>{
        var r;
        if (void 0 === n3) {
            const n4 = null !== (r = o2.originalKey) && void 0 !== r ? r : o2.key, i3 = null != t2 ? {
                kind: "method",
                placement: "prototype",
                key: n4,
                descriptor: t2(o2.key)
            } : (0, _chunkK2NRSETBJs.__spreadProps)((0, _chunkK2NRSETBJs.__spreadValues)({}, o2), {
                key: n4
            });
            return null != e4 && (i3.finisher = function(t3) {
                e4(t3, n4);
            }), i3;
        }
        {
            const r2 = o2.constructor;
            void 0 !== t2 && Object.defineProperty(o2, n3, t2(n3)), null == e4 || e4(r2, n3);
        }
    };
// node_modules/@lit/reactive-element/decorators/query.js
function i2(i3, n3) {
    return o({
        descriptor: (o2)=>{
            const t2 = {
                get () {
                    var o3, n4;
                    return null !== (n4 = null === (o3 = this.renderRoot) || void 0 === o3 ? void 0 : o3.querySelector(i3)) && void 0 !== n4 ? n4 : null;
                },
                enumerable: true,
                configurable: true
            };
            if (n3) {
                const n4 = "symbol" == typeof o2 ? Symbol() : "__" + o2;
                t2.get = function() {
                    var o3, t3;
                    return void 0 === this[n4] && (this[n4] = null !== (t3 = null === (o3 = this.renderRoot) || void 0 === o3 ? void 0 : o3.querySelector(i3)) && void 0 !== t3 ? t3 : null), this[n4];
                };
            }
            return t2;
        }
    });
}
// node_modules/@lit/reactive-element/decorators/query-async.js
function e2(e4) {
    return o({
        descriptor: (r)=>({
                async get () {
                    var r2;
                    return await this.updateComplete, null === (r2 = this.renderRoot) || void 0 === r2 ? void 0 : r2.querySelector(e4);
                },
                enumerable: true,
                configurable: true
            })
    });
}
// node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var n2;
var e3 = null != (null === (n2 = window.HTMLSlotElement) || void 0 === n2 ? void 0 : n2.prototype.assignedElements) ? (o2, n3)=>o2.assignedElements(n3) : (o2, n3)=>o2.assignedNodes(n3).filter((o3)=>o3.nodeType === Node.ELEMENT_NODE);

},{"./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"kVMwm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlSpinner", ()=>SlSpinner);
var _chunkJ2AWH46CJs = require("./chunk.J2AWH46C.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/components/spinner/spinner.ts
var SlSpinner = class extends (0, _chunkWWAD5WF4Js.s) {
    render() {
        return (0, _chunkWWAD5WF4Js.$)`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
};
SlSpinner.styles = (0, _chunkJ2AWH46CJs.spinner_styles_default);
SlSpinner = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-spinner")
], SlSpinner);

},{"./chunk.J2AWH46C.js":"64MQB","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"64MQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spinner_styles_default", ()=>spinner_styles_default);
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/spinner/spinner.styles.ts
var spinner_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}

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
`;

},{"./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"czVGE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkR4YQKXFZJs.SlInput));
var _chunkR4YQKXFZJs = require("../../chunks/chunk.R4YQKXFZ.js");
var _chunkSAY7IFENJs = require("../../chunks/chunk.SAY7IFEN.js");
var _chunkTNVY3ST3Js = require("../../chunks/chunk.TNVY3ST3.js");
var _chunkR5Z37LZLJs = require("../../chunks/chunk.R5Z37LZL.js");
var _chunkXM2NSF2IJs = require("../../chunks/chunk.XM2NSF2I.js");
var _chunk67FQMIF5Js = require("../../chunks/chunk.67FQMIF5.js");
var _chunk6WMYSCDCJs = require("../../chunks/chunk.6WMYSCDC.js");
var _chunk3IYPB6RRJs = require("../../chunks/chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("../../chunks/chunk.IAELDRGJ.js");
var _chunkMIC5DZYPJs = require("../../chunks/chunk.MIC5DZYP.js");
var _chunkQVHXM2I3Js = require("../../chunks/chunk.QVHXM2I3.js");
var _chunk5S5G5ZT7Js = require("../../chunks/chunk.5S5G5ZT7.js");
var _chunkB2DPRLWSJs = require("../../chunks/chunk.B2DPRLWS.js");
var _chunkOAACI5QOJs = require("../../chunks/chunk.OAACI5QO.js");
var _chunkP52GZVKGJs = require("../../chunks/chunk.P52GZVKG.js");
var _chunkRPB53XXVJs = require("../../chunks/chunk.RPB53XXV.js");
var _chunkLNQI5NZSJs = require("../../chunks/chunk.LNQI5NZS.js");
var _chunk7MO772SNJs = require("../../chunks/chunk.7MO772SN.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkW6MGCO4GJs = require("../../chunks/chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("../../chunks/chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("../../chunks/chunk.VKNZYXSO.js");
var _chunk7IGWJVQFJs = require("../../chunks/chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("../../chunks/chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("../../chunks/chunk.K2NRSETB.js");

},{"../../chunks/chunk.R4YQKXFZ.js":"iYKd8","../../chunks/chunk.SAY7IFEN.js":"avA8I","../../chunks/chunk.TNVY3ST3.js":"bcn46","../../chunks/chunk.R5Z37LZL.js":"9fwm8","../../chunks/chunk.XM2NSF2I.js":"7nK9J","../../chunks/chunk.67FQMIF5.js":"gTciw","../../chunks/chunk.6WMYSCDC.js":"hqQxU","../../chunks/chunk.3IYPB6RR.js":"fQ2UY","../../chunks/chunk.IAELDRGJ.js":"i92Ja","../../chunks/chunk.MIC5DZYP.js":"lu8AQ","../../chunks/chunk.QVHXM2I3.js":"a9dql","../../chunks/chunk.5S5G5ZT7.js":"am3B9","../../chunks/chunk.B2DPRLWS.js":"adyCY","../../chunks/chunk.OAACI5QO.js":"32agx","../../chunks/chunk.P52GZVKG.js":"6rEYR","../../chunks/chunk.RPB53XXV.js":"hJOTz","../../chunks/chunk.LNQI5NZS.js":"2YiLm","../../chunks/chunk.7MO772SN.js":"VBtJX","../../chunks/chunk.2JQPDYNA.js":"37wp6","../../chunks/chunk.W6MGCO4G.js":"2rlCH","../../chunks/chunk.UY5AQKHP.js":"919RN","../../chunks/chunk.VKNZYXSO.js":"8m9Nr","../../chunks/chunk.7IGWJVQF.js":"aRwgb","../../chunks/chunk.WWAD5WF4.js":"e0MYj","../../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"iYKd8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlInput", ()=>SlInput);
var _chunkSAY7IFENJs = require("./chunk.SAY7IFEN.js");
var _chunkR5Z37LZLJs = require("./chunk.R5Z37LZL.js");
var _chunkXM2NSF2IJs = require("./chunk.XM2NSF2I.js");
var _chunk67FQMIF5Js = require("./chunk.67FQMIF5.js");
var _chunk6WMYSCDCJs = require("./chunk.6WMYSCDC.js");
var _chunk3IYPB6RRJs = require("./chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("./chunk.IAELDRGJ.js");
var _chunk7MO772SNJs = require("./chunk.7MO772SN.js");
var _chunkW6MGCO4GJs = require("./chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("./chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/components/input/input.ts
var SlInput = class extends (0, _chunkWWAD5WF4Js.s) {
    constructor(){
        super(...arguments);
        this.formSubmitController = new (0, _chunk67FQMIF5Js.FormSubmitController)(this);
        this.hasSlotController = new (0, _chunk3IYPB6RRJs.HasSlotController)(this, "help-text", "label");
        this.localize = new (0, _chunk6WMYSCDCJs.LocalizeController)(this);
        this.hasFocus = false;
        this.isPasswordVisible = false;
        this.type = "text";
        this.size = "medium";
        this.value = "";
        this.defaultValue = "";
        this.filled = false;
        this.pill = false;
        this.label = "";
        this.helpText = "";
        this.clearable = false;
        this.togglePassword = false;
        this.noSpinButtons = false;
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.invalid = false;
    }
    get valueAsDate() {
        var _a, _b;
        return (_b = (_a = this.input) == null ? void 0 : _a.valueAsDate) != null ? _b : null;
    }
    set valueAsDate(newValue) {
        const input = document.createElement("input");
        input.type = "date";
        input.valueAsDate = newValue;
        this.value = input.value;
    }
    get valueAsNumber() {
        var _a, _b;
        return (_b = (_a = this.input) == null ? void 0 : _a.valueAsNumber) != null ? _b : parseFloat(this.value);
    }
    set valueAsNumber(newValue) {
        const input = document.createElement("input");
        input.type = "number";
        input.valueAsNumber = newValue;
        this.value = input.value;
    }
    firstUpdated() {
        this.invalid = !this.input.checkValidity();
    }
    focus(options) {
        this.input.focus(options);
    }
    blur() {
        this.input.blur();
    }
    select() {
        this.input.select();
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
        this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    setRangeText(replacement, start, end, selectMode = "preserve") {
        this.input.setRangeText(replacement, start, end, selectMode);
        if (this.value !== this.input.value) {
            this.value = this.input.value;
            (0, _chunkUY5AQKHPJs.emit)(this, "sl-input");
            (0, _chunkUY5AQKHPJs.emit)(this, "sl-change");
        }
    }
    reportValidity() {
        return this.input.reportValidity();
    }
    setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    handleBlur() {
        this.hasFocus = false;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-blur");
    }
    handleChange() {
        this.value = this.input.value;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-change");
    }
    handleClearClick(event) {
        this.value = "";
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-clear");
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-input");
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-change");
        this.input.focus();
        event.stopPropagation();
    }
    handleDisabledChange() {
        this.input.disabled = this.disabled;
        this.invalid = !this.input.checkValidity();
    }
    handleFocus() {
        this.hasFocus = true;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-focus");
    }
    handleInput() {
        this.value = this.input.value;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-input");
    }
    handleInvalid() {
        this.invalid = true;
    }
    handleKeyDown(event) {
        const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
        if (event.key === "Enter" && !hasModifier) setTimeout(()=>{
            if (!event.defaultPrevented) this.formSubmitController.submit();
        });
    }
    handlePasswordToggle() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }
    handleValueChange() {
        this.invalid = !this.input.checkValidity();
    }
    render() {
        const hasLabelSlot = this.hasSlotController.test("label");
        const hasHelpTextSlot = this.hasSlotController.test("help-text");
        const hasLabel = this.label ? true : !!hasLabelSlot;
        const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        const hasClearIcon = this.clearable && !this.disabled && !this.readonly && (typeof this.value === "number" || this.value.length > 0);
        return (0, _chunkWWAD5WF4Js.$)`
      <div
        part="form-control"
        class=${(0, _chunkIAELDRGJJs.o)({
            "form-control": true,
            "form-control--small": this.size === "small",
            "form-control--medium": this.size === "medium",
            "form-control--large": this.size === "large",
            "form-control--has-label": hasLabel,
            "form-control--has-help-text": hasHelpText
        })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0, _chunkIAELDRGJJs.o)({
            input: true,
            "input--small": this.size === "small",
            "input--medium": this.size === "medium",
            "input--large": this.size === "large",
            "input--pill": this.pill,
            "input--standard": !this.filled,
            "input--filled": this.filled,
            "input--disabled": this.disabled,
            "input--focused": this.hasFocus,
            "input--empty": !this.value,
            "input--invalid": this.invalid,
            "input--no-spin-buttons": this.noSpinButtons,
            "input--is-firefox": navigator.userAgent.includes("Firefox")
        })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.isPasswordVisible ? "text" : this.type}
              name=${(0, _chunk7MO772SNJs.l)(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0, _chunk7MO772SNJs.l)(this.placeholder)}
              minlength=${(0, _chunk7MO772SNJs.l)(this.minlength)}
              maxlength=${(0, _chunk7MO772SNJs.l)(this.maxlength)}
              min=${(0, _chunk7MO772SNJs.l)(this.min)}
              max=${(0, _chunk7MO772SNJs.l)(this.max)}
              step=${(0, _chunk7MO772SNJs.l)(this.step)}
              .value=${(0, _chunkR5Z37LZLJs.l)(this.value)}
              autocapitalize=${(0, _chunk7MO772SNJs.l)(this.type === "password" ? "off" : this.autocapitalize)}
              autocomplete=${(0, _chunk7MO772SNJs.l)(this.type === "password" ? "off" : this.autocomplete)}
              autocorrect=${(0, _chunk7MO772SNJs.l)(this.type === "password" ? "off" : this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0, _chunk7MO772SNJs.l)(this.spellcheck)}
              pattern=${(0, _chunk7MO772SNJs.l)(this.pattern)}
              enterkeyhint=${(0, _chunk7MO772SNJs.l)(this.enterkeyhint)}
              inputmode=${(0, _chunk7MO772SNJs.l)(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid ? "true" : "false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? (0, _chunkWWAD5WF4Js.$)`
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
                ` : ""}
            ${this.togglePassword && !this.disabled ? (0, _chunkWWAD5WF4Js.$)`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible ? (0, _chunkWWAD5WF4Js.$)`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : (0, _chunkWWAD5WF4Js.$)`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
};
SlInput.styles = (0, _chunkSAY7IFENJs.input_styles_default);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.i)(".input__control")
], SlInput.prototype, "input", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.t)()
], SlInput.prototype, "hasFocus", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.t)()
], SlInput.prototype, "isPasswordVisible", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlInput.prototype, "type", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlInput.prototype, "size", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "name", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "value", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkXM2NSF2IJs.defaultValue)()
], SlInput.prototype, "defaultValue", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlInput.prototype, "filled", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlInput.prototype, "pill", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "label", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "help-text"
    })
], SlInput.prototype, "helpText", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean
    })
], SlInput.prototype, "clearable", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "toggle-password",
        type: Boolean
    })
], SlInput.prototype, "togglePassword", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "no-spin-buttons",
        type: Boolean
    })
], SlInput.prototype, "noSpinButtons", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "placeholder", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlInput.prototype, "disabled", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlInput.prototype, "readonly", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Number
    })
], SlInput.prototype, "minlength", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Number
    })
], SlInput.prototype, "maxlength", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "min", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "max", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Number
    })
], SlInput.prototype, "step", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "pattern", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlInput.prototype, "required", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlInput.prototype, "invalid", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "autocapitalize", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "autocorrect", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "autocomplete", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean
    })
], SlInput.prototype, "autofocus", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "enterkeyhint", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean
    })
], SlInput.prototype, "spellcheck", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlInput.prototype, "inputmode", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkW6MGCO4GJs.watch)("disabled", {
        waitUntilFirstUpdate: true
    })
], SlInput.prototype, "handleDisabledChange", 1);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkW6MGCO4GJs.watch)("value", {
        waitUntilFirstUpdate: true
    })
], SlInput.prototype, "handleValueChange", 1);
SlInput = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-input")
], SlInput);

},{"./chunk.SAY7IFEN.js":"avA8I","./chunk.R5Z37LZL.js":"9fwm8","./chunk.XM2NSF2I.js":"7nK9J","./chunk.67FQMIF5.js":"gTciw","./chunk.6WMYSCDC.js":"hqQxU","./chunk.3IYPB6RR.js":"fQ2UY","./chunk.IAELDRGJ.js":"i92Ja","./chunk.7MO772SN.js":"VBtJX","./chunk.W6MGCO4G.js":"2rlCH","./chunk.UY5AQKHP.js":"919RN","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"avA8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "input_styles_default", ()=>input_styles_default);
var _chunkTNVY3ST3Js = require("./chunk.TNVY3ST3.js");
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/input/input.styles.ts
var input_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}
  ${(0, _chunkTNVY3ST3Js.form_control_styles_default)}

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
`;

},{"./chunk.TNVY3ST3.js":"bcn46","./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"bcn46":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "form_control_styles_default", ()=>form_control_styles_default);
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/styles/form-control.styles.ts
var form_control_styles_default = (0, _chunkWWAD5WF4Js.r)`
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
`;

},{"./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"9fwm8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l) /**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
var _chunk2JQPDYNAJs = require("./chunk.2JQPDYNA.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// node_modules/lit-html/directive-helpers.js
var { H: i2  } = (0, _chunkWWAD5WF4Js.R);
var r = (o)=>void 0 === o.strings;
var f = {};
var s = (o, i3 = f)=>o._$AH = i3;
// node_modules/lit-html/directives/live.js
var l = (0, _chunk2JQPDYNAJs.e)(class extends (0, _chunk2JQPDYNAJs.i) {
    constructor(r2){
        if (super(r2), r2.type !== (0, _chunk2JQPDYNAJs.t).PROPERTY && r2.type !== (0, _chunk2JQPDYNAJs.t).ATTRIBUTE && r2.type !== (0, _chunk2JQPDYNAJs.t).BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
        if (!r(r2)) throw Error("`live` bindings can only contain a single expression");
    }
    render(r2) {
        return r2;
    }
    update(i3, [t2]) {
        if (t2 === (0, _chunkWWAD5WF4Js.b) || t2 === (0, _chunkWWAD5WF4Js.w)) return t2;
        const o = i3.element, l2 = i3.name;
        if (i3.type === (0, _chunk2JQPDYNAJs.t).PROPERTY) {
            if (t2 === o[l2]) return 0, _chunkWWAD5WF4Js.b;
        } else if (i3.type === (0, _chunk2JQPDYNAJs.t).BOOLEAN_ATTRIBUTE) {
            if (!!t2 === o.hasAttribute(l2)) return 0, _chunkWWAD5WF4Js.b;
        } else if (i3.type === (0, _chunk2JQPDYNAJs.t).ATTRIBUTE && o.getAttribute(l2) === t2 + "") return 0, _chunkWWAD5WF4Js.b;
        return s(i3), t2;
    }
});

},{"./chunk.2JQPDYNA.js":"37wp6","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"7nK9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultValue", ()=>defaultValue);
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/internal/default-value.ts
var defaultValue = (propertyName = "value")=>(proto, key)=>{
        const ctor = proto.constructor;
        const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
        ctor.prototype.attributeChangedCallback = function(name, old, value) {
            var _a;
            const options = ctor.getPropertyOptions(propertyName);
            const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
            if (name === attributeName) {
                const converter = options.converter || (0, _chunkWWAD5WF4Js.o);
                const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : (0, _chunkWWAD5WF4Js.o).fromAttribute;
                const newValue = fromAttribute(value, options.type);
                if (this[propertyName] !== newValue) this[key] = newValue;
            }
            attributeChangedCallback.call(this, name, old, value);
        };
    };

},{"./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"2rlCH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watch", ()=>watch);
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/internal/watch.ts
function watch(propName, options) {
    const resolvedOptions = (0, _chunkK2NRSETBJs.__spreadValues)({
        waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName)=>{
        const { update  } = proto;
        if (propName in proto) {
            const propNameKey = propName;
            proto.update = function(changedProps) {
                if (changedProps.has(propNameKey)) {
                    const oldValue = changedProps.get(propNameKey);
                    const newValue = this[propNameKey];
                    if (oldValue !== newValue) {
                        if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) this[decoratedFnName](oldValue, newValue);
                    }
                }
                update.call(this, changedProps);
            };
        }
    };
}

},{"./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"lu8AQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "o", ()=>o) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "SlIcon", ()=>SlIcon);
var _chunkQVHXM2I3Js = require("./chunk.QVHXM2I3.js");
var _chunkP52GZVKGJs = require("./chunk.P52GZVKG.js");
var _chunkLNQI5NZSJs = require("./chunk.LNQI5NZS.js");
var _chunk7MO772SNJs = require("./chunk.7MO772SN.js");
var _chunk2JQPDYNAJs = require("./chunk.2JQPDYNA.js");
var _chunkW6MGCO4GJs = require("./chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("./chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// node_modules/lit-html/directives/unsafe-html.js
var e3 = class extends (0, _chunk2JQPDYNAJs.i) {
    constructor(i2){
        if (super(i2), this.it = (0, _chunkWWAD5WF4Js.w), i2.type !== (0, _chunk2JQPDYNAJs.t).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, _chunkWWAD5WF4Js.w) || null == r) return this.ft = void 0, this.it = r;
        if (r === (0, _chunkWWAD5WF4Js.b)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this.ft;
        this.it = r;
        const s2 = [
            r
        ];
        return s2.raw = s2, this.ft = {
            _$litType$: this.constructor.resultType,
            strings: s2,
            values: []
        };
    }
};
e3.directiveName = "unsafeHTML", e3.resultType = 1;
var o = (0, _chunk2JQPDYNAJs.e)(e3);
// node_modules/lit-html/directives/unsafe-svg.js
var t3 = class extends e3 {
};
t3.directiveName = "unsafeSVG", t3.resultType = 2;
var o2 = (0, _chunk2JQPDYNAJs.e)(t3);
// src/components/icon/icon.ts
var parser;
var SlIcon = class extends (0, _chunkWWAD5WF4Js.s) {
    constructor(){
        super(...arguments);
        this.svg = "";
        this.label = "";
        this.library = "default";
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _chunkQVHXM2I3Js.watchIcon)(this);
    }
    firstUpdated() {
        this.setIcon();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        (0, _chunkQVHXM2I3Js.unwatchIcon)(this);
    }
    getUrl() {
        const library = (0, _chunkQVHXM2I3Js.getIconLibrary)(this.library);
        if (this.name && library) return library.resolver(this.name);
        return this.src;
    }
    redraw() {
        this.setIcon();
    }
    async setIcon() {
        var _a;
        const library = (0, _chunkQVHXM2I3Js.getIconLibrary)(this.library);
        const url = this.getUrl();
        if (!parser) parser = new DOMParser();
        if (url) try {
            const file = await (0, _chunkP52GZVKGJs.requestIcon)(url);
            if (url !== this.getUrl()) return;
            else if (file.ok) {
                const doc = parser.parseFromString(file.svg, "text/html");
                const svgEl = doc.body.querySelector("svg");
                if (svgEl !== null) {
                    (_a = library == null ? void 0 : library.mutator) == null || _a.call(library, svgEl);
                    this.svg = svgEl.outerHTML;
                    (0, _chunkUY5AQKHPJs.emit)(this, "sl-load");
                } else {
                    this.svg = "";
                    (0, _chunkUY5AQKHPJs.emit)(this, "sl-error");
                }
            } else {
                this.svg = "";
                (0, _chunkUY5AQKHPJs.emit)(this, "sl-error");
            }
        } catch (e4) {
            (0, _chunkUY5AQKHPJs.emit)(this, "sl-error");
        }
        else if (this.svg.length > 0) this.svg = "";
    }
    handleChange() {
        this.setIcon();
    }
    render() {
        const hasLabel = typeof this.label === "string" && this.label.length > 0;
        return (0, _chunkWWAD5WF4Js.$)` <div
      part="base"
      class="icon"
      role=${(0, _chunk7MO772SNJs.l)(hasLabel ? "img" : void 0)}
      aria-label=${(0, _chunk7MO772SNJs.l)(hasLabel ? this.label : void 0)}
      aria-hidden=${(0, _chunk7MO772SNJs.l)(hasLabel ? void 0 : "true")}
    >
      ${o2(this.svg)}
    </div>`;
    }
};
SlIcon.styles = (0, _chunkLNQI5NZSJs.icon_styles_default);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.t)()
], SlIcon.prototype, "svg", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlIcon.prototype, "name", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIcon.prototype, "src", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIcon.prototype, "label", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlIcon.prototype, "library", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkW6MGCO4GJs.watch)("name"),
    (0, _chunkW6MGCO4GJs.watch)("src"),
    (0, _chunkW6MGCO4GJs.watch)("library")
], SlIcon.prototype, "setIcon", 1);
SlIcon = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-icon")
], SlIcon);

},{"./chunk.QVHXM2I3.js":"a9dql","./chunk.P52GZVKG.js":"6rEYR","./chunk.LNQI5NZS.js":"2YiLm","./chunk.7MO772SN.js":"VBtJX","./chunk.2JQPDYNA.js":"37wp6","./chunk.W6MGCO4G.js":"2rlCH","./chunk.UY5AQKHP.js":"919RN","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"a9dql":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watchIcon", ()=>watchIcon);
parcelHelpers.export(exports, "unwatchIcon", ()=>unwatchIcon);
parcelHelpers.export(exports, "getIconLibrary", ()=>getIconLibrary);
parcelHelpers.export(exports, "registerIconLibrary", ()=>registerIconLibrary);
parcelHelpers.export(exports, "unregisterIconLibrary", ()=>unregisterIconLibrary);
var _chunk5S5G5ZT7Js = require("./chunk.5S5G5ZT7.js");
var _chunkOAACI5QOJs = require("./chunk.OAACI5QO.js");
// src/components/icon/library.ts
var registry = [
    (0, _chunk5S5G5ZT7Js.library_default_default),
    (0, _chunkOAACI5QOJs.library_system_default)
];
var watchedIcons = [];
function watchIcon(icon) {
    watchedIcons.push(icon);
}
function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el)=>el !== icon);
}
function getIconLibrary(name) {
    return registry.find((lib)=>lib.name === name);
}
function registerIconLibrary(name, options) {
    unregisterIconLibrary(name);
    registry.push({
        name,
        resolver: options.resolver,
        mutator: options.mutator
    });
    watchedIcons.forEach((icon)=>{
        if (icon.library === name) icon.redraw();
    });
}
function unregisterIconLibrary(name) {
    registry = registry.filter((lib)=>lib.name !== name);
}

},{"./chunk.5S5G5ZT7.js":"am3B9","./chunk.OAACI5QO.js":"32agx","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"am3B9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library_default_default", ()=>library_default_default);
var _chunkB2DPRLWSJs = require("./chunk.B2DPRLWS.js");
// src/components/icon/library.default.ts
var library = {
    name: "default",
    resolver: (name)=>`${(0, _chunkB2DPRLWSJs.getBasePath)()}/assets/icons/${name}.svg`
};
var library_default_default = library;

},{"./chunk.B2DPRLWS.js":"adyCY","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"adyCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBasePath", ()=>setBasePath);
parcelHelpers.export(exports, "getBasePath", ()=>getBasePath);
// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
    basePath = path;
}
function getBasePath() {
    if (!basePath) {
        const scripts = [
            ...document.getElementsByTagName("script")
        ];
        const configScript = scripts.find((script)=>script.hasAttribute("data-shoelace"));
        if (configScript) setBasePath(configScript.getAttribute("data-shoelace"));
        else {
            const fallbackScript = scripts.find((s)=>/shoelace(\.min)?\.js($|\?)/.test(s.src));
            let path = "";
            if (fallbackScript) path = fallbackScript.getAttribute("src");
            setBasePath(path.split("/").slice(0, -1).join("/"));
        }
    }
    return basePath.replace(/\/$/, "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"32agx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library_system_default", ()=>library_system_default);
// src/components/icon/library.system.ts
var icons = {
    "check-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    x: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
};
var systemLibrary = {
    name: "system",
    resolver: (name)=>{
        if (name in icons) return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
        return "";
    }
};
var library_system_default = systemLibrary;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"6rEYR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requestIcon", ()=>requestIcon);
var _chunkRPB53XXVJs = require("./chunk.RPB53XXV.js");
// src/components/icon/request.ts
var iconFiles = /* @__PURE__ */ new Map();
async function requestIcon(url) {
    if (iconFiles.has(url)) return iconFiles.get(url);
    const fileData = await (0, _chunkRPB53XXVJs.requestInclude)(url);
    const iconFileData = {
        ok: fileData.ok,
        status: fileData.status,
        svg: null
    };
    if (fileData.ok) {
        const div = document.createElement("div");
        div.innerHTML = fileData.html;
        const svg = div.firstElementChild;
        iconFileData.svg = (svg == null ? void 0 : svg.tagName.toLowerCase()) === "svg" ? svg.outerHTML : "";
    }
    iconFiles.set(url, iconFileData);
    return iconFileData;
}

},{"./chunk.RPB53XXV.js":"hJOTz","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"hJOTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requestInclude", ()=>requestInclude);
// src/components/include/request.ts
var includeFiles = /* @__PURE__ */ new Map();
function requestInclude(src, mode = "cors") {
    if (includeFiles.has(src)) return includeFiles.get(src);
    const fileDataPromise = fetch(src, {
        mode
    }).then(async (response)=>{
        return {
            ok: response.ok,
            status: response.status,
            html: await response.text()
        };
    });
    includeFiles.set(src, fileDataPromise);
    return fileDataPromise;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"2YiLm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_styles_default", ()=>icon_styles_default);
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/icon/icon.styles.ts
var icon_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}

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
`;

},{"./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"5vLQP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkHH55DZ3SJs.SlTextarea));
var _chunkHH55DZ3SJs = require("../../chunks/chunk.HH55DZ3S.js");
var _chunkDHYHU7DAJs = require("../../chunks/chunk.DHYHU7DA.js");
var _chunkTNVY3ST3Js = require("../../chunks/chunk.TNVY3ST3.js");
var _chunkR5Z37LZLJs = require("../../chunks/chunk.R5Z37LZL.js");
var _chunkXM2NSF2IJs = require("../../chunks/chunk.XM2NSF2I.js");
var _chunk67FQMIF5Js = require("../../chunks/chunk.67FQMIF5.js");
var _chunk3IYPB6RRJs = require("../../chunks/chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("../../chunks/chunk.IAELDRGJ.js");
var _chunk7MO772SNJs = require("../../chunks/chunk.7MO772SN.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkW6MGCO4GJs = require("../../chunks/chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("../../chunks/chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("../../chunks/chunk.VKNZYXSO.js");
var _chunk7IGWJVQFJs = require("../../chunks/chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("../../chunks/chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("../../chunks/chunk.K2NRSETB.js");

},{"../../chunks/chunk.HH55DZ3S.js":"hlg4K","../../chunks/chunk.DHYHU7DA.js":"kQDAl","../../chunks/chunk.TNVY3ST3.js":"bcn46","../../chunks/chunk.R5Z37LZL.js":"9fwm8","../../chunks/chunk.XM2NSF2I.js":"7nK9J","../../chunks/chunk.67FQMIF5.js":"gTciw","../../chunks/chunk.3IYPB6RR.js":"fQ2UY","../../chunks/chunk.IAELDRGJ.js":"i92Ja","../../chunks/chunk.7MO772SN.js":"VBtJX","../../chunks/chunk.2JQPDYNA.js":"37wp6","../../chunks/chunk.W6MGCO4G.js":"2rlCH","../../chunks/chunk.UY5AQKHP.js":"919RN","../../chunks/chunk.VKNZYXSO.js":"8m9Nr","../../chunks/chunk.7IGWJVQF.js":"aRwgb","../../chunks/chunk.WWAD5WF4.js":"e0MYj","../../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"hlg4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlTextarea", ()=>SlTextarea);
var _chunkDHYHU7DAJs = require("./chunk.DHYHU7DA.js");
var _chunkR5Z37LZLJs = require("./chunk.R5Z37LZL.js");
var _chunkXM2NSF2IJs = require("./chunk.XM2NSF2I.js");
var _chunk67FQMIF5Js = require("./chunk.67FQMIF5.js");
var _chunk3IYPB6RRJs = require("./chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("./chunk.IAELDRGJ.js");
var _chunk7MO772SNJs = require("./chunk.7MO772SN.js");
var _chunkW6MGCO4GJs = require("./chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("./chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/components/textarea/textarea.ts
var SlTextarea = class extends (0, _chunkWWAD5WF4Js.s) {
    constructor(){
        super(...arguments);
        this.formSubmitController = new (0, _chunk67FQMIF5Js.FormSubmitController)(this);
        this.hasSlotController = new (0, _chunk3IYPB6RRJs.HasSlotController)(this, "help-text", "label");
        this.hasFocus = false;
        this.size = "medium";
        this.value = "";
        this.filled = false;
        this.label = "";
        this.helpText = "";
        this.rows = 4;
        this.resize = "vertical";
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.invalid = false;
        this.defaultValue = "";
    }
    connectedCallback() {
        super.connectedCallback();
        this.resizeObserver = new ResizeObserver(()=>this.setTextareaHeight());
        this.updateComplete.then(()=>{
            this.setTextareaHeight();
            this.resizeObserver.observe(this.input);
        });
    }
    firstUpdated() {
        this.invalid = !this.input.checkValidity();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(this.input);
    }
    focus(options) {
        this.input.focus(options);
    }
    blur() {
        this.input.blur();
    }
    select() {
        this.input.select();
    }
    scrollPosition(position) {
        if (position) {
            if (typeof position.top === "number") this.input.scrollTop = position.top;
            if (typeof position.left === "number") this.input.scrollLeft = position.left;
            return;
        }
        return {
            top: this.input.scrollTop,
            left: this.input.scrollTop
        };
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
        this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    setRangeText(replacement, start, end, selectMode = "preserve") {
        this.input.setRangeText(replacement, start, end, selectMode);
        if (this.value !== this.input.value) {
            this.value = this.input.value;
            (0, _chunkUY5AQKHPJs.emit)(this, "sl-input");
        }
        if (this.value !== this.input.value) {
            this.value = this.input.value;
            this.setTextareaHeight();
            (0, _chunkUY5AQKHPJs.emit)(this, "sl-input");
            (0, _chunkUY5AQKHPJs.emit)(this, "sl-change");
        }
    }
    reportValidity() {
        return this.input.reportValidity();
    }
    setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    handleBlur() {
        this.hasFocus = false;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-blur");
    }
    handleChange() {
        this.value = this.input.value;
        this.setTextareaHeight();
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-change");
    }
    handleDisabledChange() {
        this.input.disabled = this.disabled;
        this.invalid = !this.input.checkValidity();
    }
    handleFocus() {
        this.hasFocus = true;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-focus");
    }
    handleInput() {
        this.value = this.input.value;
        this.setTextareaHeight();
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-input");
    }
    handleRowsChange() {
        this.setTextareaHeight();
    }
    handleValueChange() {
        this.invalid = !this.input.checkValidity();
    }
    setTextareaHeight() {
        if (this.resize === "auto") {
            this.input.style.height = "auto";
            this.input.style.height = `${this.input.scrollHeight}px`;
        } else this.input.style.height = void 0;
    }
    render() {
        const hasLabelSlot = this.hasSlotController.test("label");
        const hasHelpTextSlot = this.hasSlotController.test("help-text");
        const hasLabel = this.label ? true : !!hasLabelSlot;
        const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        return (0, _chunkWWAD5WF4Js.$)`
      <div
        part="form-control"
        class=${(0, _chunkIAELDRGJJs.o)({
            "form-control": true,
            "form-control--small": this.size === "small",
            "form-control--medium": this.size === "medium",
            "form-control--large": this.size === "large",
            "form-control--has-label": hasLabel,
            "form-control--has-help-text": hasHelpText
        })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0, _chunkIAELDRGJJs.o)({
            textarea: true,
            "textarea--small": this.size === "small",
            "textarea--medium": this.size === "medium",
            "textarea--large": this.size === "large",
            "textarea--standard": !this.filled,
            "textarea--filled": this.filled,
            "textarea--disabled": this.disabled,
            "textarea--focused": this.hasFocus,
            "textarea--empty": !this.value,
            "textarea--invalid": this.invalid,
            "textarea--resize-none": this.resize === "none",
            "textarea--resize-vertical": this.resize === "vertical",
            "textarea--resize-auto": this.resize === "auto"
        })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${(0, _chunk7MO772SNJs.l)(this.name)}
              .value=${(0, _chunkR5Z37LZLJs.l)(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0, _chunk7MO772SNJs.l)(this.placeholder)}
              rows=${(0, _chunk7MO772SNJs.l)(this.rows)}
              minlength=${(0, _chunk7MO772SNJs.l)(this.minlength)}
              maxlength=${(0, _chunk7MO772SNJs.l)(this.maxlength)}
              autocapitalize=${(0, _chunk7MO772SNJs.l)(this.autocapitalize)}
              autocorrect=${(0, _chunk7MO772SNJs.l)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0, _chunk7MO772SNJs.l)(this.spellcheck)}
              enterkeyhint=${(0, _chunk7MO772SNJs.l)(this.enterkeyhint)}
              inputmode=${(0, _chunk7MO772SNJs.l)(this.inputmode)}
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
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
};
SlTextarea.styles = (0, _chunkDHYHU7DAJs.textarea_styles_default);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.i)(".textarea__control")
], SlTextarea.prototype, "input", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.t)()
], SlTextarea.prototype, "hasFocus", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        reflect: true
    })
], SlTextarea.prototype, "size", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "name", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "value", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlTextarea.prototype, "filled", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "label", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        attribute: "help-text"
    })
], SlTextarea.prototype, "helpText", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "placeholder", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Number
    })
], SlTextarea.prototype, "rows", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "resize", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlTextarea.prototype, "disabled", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlTextarea.prototype, "readonly", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Number
    })
], SlTextarea.prototype, "minlength", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Number
    })
], SlTextarea.prototype, "maxlength", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlTextarea.prototype, "required", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlTextarea.prototype, "invalid", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "autocapitalize", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "autocorrect", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "autocomplete", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean
    })
], SlTextarea.prototype, "autofocus", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "enterkeyhint", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean
    })
], SlTextarea.prototype, "spellcheck", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlTextarea.prototype, "inputmode", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkXM2NSF2IJs.defaultValue)()
], SlTextarea.prototype, "defaultValue", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkW6MGCO4GJs.watch)("disabled", {
        waitUntilFirstUpdate: true
    })
], SlTextarea.prototype, "handleDisabledChange", 1);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkW6MGCO4GJs.watch)("rows", {
        waitUntilFirstUpdate: true
    })
], SlTextarea.prototype, "handleRowsChange", 1);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkW6MGCO4GJs.watch)("value", {
        waitUntilFirstUpdate: true
    })
], SlTextarea.prototype, "handleValueChange", 1);
SlTextarea = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-textarea")
], SlTextarea);

},{"./chunk.DHYHU7DA.js":"kQDAl","./chunk.R5Z37LZL.js":"9fwm8","./chunk.XM2NSF2I.js":"7nK9J","./chunk.67FQMIF5.js":"gTciw","./chunk.3IYPB6RR.js":"fQ2UY","./chunk.IAELDRGJ.js":"i92Ja","./chunk.7MO772SN.js":"VBtJX","./chunk.W6MGCO4G.js":"2rlCH","./chunk.UY5AQKHP.js":"919RN","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"kQDAl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textarea_styles_default", ()=>textarea_styles_default);
var _chunkTNVY3ST3Js = require("./chunk.TNVY3ST3.js");
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/textarea/textarea.styles.ts
var textarea_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}
  ${(0, _chunkTNVY3ST3Js.form_control_styles_default)}

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
`;

},{"./chunk.TNVY3ST3.js":"bcn46","./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"2d8Q4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkBZXWAEEGJs.SlCard));
var _chunkBZXWAEEGJs = require("../../chunks/chunk.BZXWAEEG.js");
var _chunkADBSWGHRJs = require("../../chunks/chunk.ADBSWGHR.js");
var _chunk3IYPB6RRJs = require("../../chunks/chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("../../chunks/chunk.IAELDRGJ.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkVKNZYXSOJs = require("../../chunks/chunk.VKNZYXSO.js");
var _chunk7IGWJVQFJs = require("../../chunks/chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("../../chunks/chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("../../chunks/chunk.K2NRSETB.js");

},{"../../chunks/chunk.BZXWAEEG.js":"gvH0p","../../chunks/chunk.ADBSWGHR.js":"cDuvT","../../chunks/chunk.3IYPB6RR.js":"fQ2UY","../../chunks/chunk.IAELDRGJ.js":"i92Ja","../../chunks/chunk.2JQPDYNA.js":"37wp6","../../chunks/chunk.VKNZYXSO.js":"8m9Nr","../../chunks/chunk.7IGWJVQF.js":"aRwgb","../../chunks/chunk.WWAD5WF4.js":"e0MYj","../../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"gvH0p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlCard", ()=>SlCard);
var _chunkADBSWGHRJs = require("./chunk.ADBSWGHR.js");
var _chunk3IYPB6RRJs = require("./chunk.3IYPB6RR.js");
var _chunkIAELDRGJJs = require("./chunk.IAELDRGJ.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/components/card/card.ts
var SlCard = class extends (0, _chunkWWAD5WF4Js.s) {
    constructor(){
        super(...arguments);
        this.hasSlotController = new (0, _chunk3IYPB6RRJs.HasSlotController)(this, "footer", "header", "image");
    }
    render() {
        return (0, _chunkWWAD5WF4Js.$)`
      <div
        part="base"
        class=${(0, _chunkIAELDRGJJs.o)({
            card: true,
            "card--has-footer": this.hasSlotController.test("footer"),
            "card--has-image": this.hasSlotController.test("image"),
            "card--has-header": this.hasSlotController.test("header")
        })}
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
    `;
    }
};
SlCard.styles = (0, _chunkADBSWGHRJs.card_styles_default);
SlCard = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-card")
], SlCard);

},{"./chunk.ADBSWGHR.js":"cDuvT","./chunk.3IYPB6RR.js":"fQ2UY","./chunk.IAELDRGJ.js":"i92Ja","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"cDuvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "card_styles_default", ()=>card_styles_default);
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/card/card.styles.ts
var card_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}

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
`;

},{"./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"S4tYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serialize", ()=>serialize);
var _chunkK2NRSETBJs = require("../chunks/chunk.K2NRSETB.js");
// src/utilities/form.ts
function serialize(form) {
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key)=>{
        if (Reflect.has(object, key)) {
            const entry = object[key];
            if (Array.isArray(entry)) entry.push(value);
            else object[key] = [
                object[key],
                value
            ];
        } else object[key] = value;
    });
    return object;
}

},{"../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"iTA3u":[function() {},{}],"eOh0E":[function() {},{}],"bFCiL":[function(require,module,exports) {
/*! @license DOMPurify 2.3.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.10/LICENSE */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _typeof(obj1) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj1);
    }
    function _setPrototypeOf(o1, p1) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o1, p1);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent1, args1, Class1) {
        if (_isNativeReflectConstruct()) _construct = Reflect.construct;
        else _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var freeze = Object.freeze, seal = Object.seal, create = Object.create; // eslint-disable-line import/no-mutable-exports
    var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
    if (!apply) apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
    if (!freeze) freeze = function freeze(x) {
        return x;
    };
    if (!seal) seal = function seal(x) {
        return x;
    };
    if (!construct) construct = function construct(Func, args) {
        return _construct(Func, _toConsumableArray(args));
    };
    var arrayForEach = unapply(Array.prototype.forEach);
    var arrayPop = unapply(Array.prototype.pop);
    var arrayPush = unapply(Array.prototype.push);
    var stringToLowerCase = unapply(String.prototype.toLowerCase);
    var stringMatch = unapply(String.prototype.match);
    var stringReplace = unapply(String.prototype.replace);
    var stringIndexOf = unapply(String.prototype.indexOf);
    var stringTrim = unapply(String.prototype.trim);
    var regExpTest = unapply(RegExp.prototype.test);
    var typeErrorCreate = unconstruct(TypeError);
    function unapply(func) {
        return function(thisArg) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            return apply(func, thisArg, args);
        };
    }
    function unconstruct(func) {
        return function() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            return construct(func, args);
        };
    }
    /* Add properties to a lookup table */ function addToSet(set, array, transformCaseFunc) {
        transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;
        if (setPrototypeOf) // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
        var l = array.length;
        while(l--){
            var element = array[l];
            if (typeof element === "string") {
                var lcElement = transformCaseFunc(element);
                if (lcElement !== element) {
                    // Config presets (e.g. tags.js, attrs.js) are immutable.
                    if (!isFrozen(array)) array[l] = lcElement;
                    element = lcElement;
                }
            }
            set[element] = true;
        }
        return set;
    }
    /* Shallow clone an object */ function clone(object) {
        var newObject = create(null);
        var property;
        for(property in object)if (apply(hasOwnProperty, object, [
            property
        ])) newObject[property] = object[property];
        return newObject;
    }
    /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */ function lookupGetter(object, prop) {
        while(object !== null){
            var desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
                if (desc.get) return unapply(desc.get);
                if (typeof desc.value === "function") return unapply(desc.value);
            }
            object = getPrototypeOf(object);
        }
        function fallbackValue(element) {
            console.warn("fallback value for", element);
            return null;
        }
        return fallbackValue;
    }
    var html$1 = freeze([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "select",
        "shadow",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr"
    ]); // SVG
    var svg$1 = freeze([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern"
    ]);
    var svgFilters = freeze([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence"
    ]); // List of SVG elements that are disallowed by default.
    // We still need to know them so that we can do namespace
    // checks properly in case one wants to add them to
    // allow-list.
    var svgDisallowed = freeze([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "fedropshadow",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use"
    ]);
    var mathMl$1 = freeze([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover"
    ]); // Similarly to SVG, we want to know all MathML elements,
    // even those that we disallow by default.
    var mathMlDisallowed = freeze([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none"
    ]);
    var text = freeze([
        "#text"
    ]);
    var html1 = freeze([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "pattern",
        "placeholder",
        "playsinline",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "xmlns",
        "slot"
    ]);
    var svg = freeze([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan"
    ]);
    var mathMl = freeze([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnsalign",
        "columnlines",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lspace",
        "lquote",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns"
    ]);
    var xml = freeze([
        "xlink:href",
        "xml:id",
        "xlink:title",
        "xml:space",
        "xmlns:xlink"
    ]);
    var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
    var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
    );
    var DOCTYPE_NAME = seal(/^html$/i);
    var getGlobal = function getGlobal() {
        return typeof window === "undefined" ? null : window;
    };
    /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */ var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
        if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
         // Allow the callers to control the unique policy name
        // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
        // Policy creation with duplicate names throws in Trusted Types.
        var suffix = null;
        var ATTR_NAME = "data-tt-policy-suffix";
        if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) suffix = document.currentScript.getAttribute(ATTR_NAME);
        var policyName = "dompurify" + (suffix ? "#" + suffix : "");
        try {
            return trustedTypes.createPolicy(policyName, {
                createHTML: function createHTML(html) {
                    return html;
                },
                createScriptURL: function createScriptURL(scriptUrl) {
                    return scriptUrl;
                }
            });
        } catch (_) {
            // Policy creation failed (most likely another DOMPurify script has
            // already run). Skip creating the policy, as this will only cause errors
            // if TT are enforced.
            console.warn("TrustedTypes policy " + policyName + " could not be created.");
            return null;
        }
    };
    function createDOMPurify() {
        var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
        var DOMPurify = function DOMPurify(root) {
            return createDOMPurify(root);
        };
        /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */ DOMPurify.version = "2.3.10";
        /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */ DOMPurify.removed = [];
        if (!window || !window.document || window.document.nodeType !== 9) {
            // Not running in a browser, provide a factory function
            // so that you can pass your own Window
            DOMPurify.isSupported = false;
            return DOMPurify;
        }
        var originalDocument = window.document;
        var document = window.document;
        var DocumentFragment = window.DocumentFragment, HTMLTemplateElement = window.HTMLTemplateElement, Node = window.Node, Element = window.Element, NodeFilter = window.NodeFilter, _window$NamedNodeMap = window.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window.HTMLFormElement, DOMParser = window.DOMParser, trustedTypes = window.trustedTypes;
        var ElementPrototype = Element.prototype;
        var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
        var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
        var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
        var getParentNode = lookupGetter(ElementPrototype, "parentNode"); // As per issue #47, the web-components registry is inherited by a
        // new document created via createHTMLDocument. As per the spec
        // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
        // a new empty registry is used when creating a template contents owner
        // document, so we use that as our parent document to ensure nothing
        // is inherited.
        if (typeof HTMLTemplateElement === "function") {
            var template = document.createElement("template");
            if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
        }
        var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
        var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
        var _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
        var importNode = originalDocument.importNode;
        var documentMode = {};
        try {
            documentMode = clone(document).documentMode ? document.documentMode : {};
        } catch (_) {}
        var hooks = {};
        /**
     * Expose whether this browser supports running the full DOMPurify.
     */ DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
        var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
        var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
        /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */ /* allowed element names */ var ALLOWED_TAGS = null;
        var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
        /* Allowed attribute names */ var ALLOWED_ATTR = null;
        var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html1), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
        /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */ var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
            tagNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            attributeNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: false
            }
        }));
        /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ var FORBID_TAGS = null;
        /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ var FORBID_ATTR = null;
        /* Decide if ARIA attributes are okay */ var ALLOW_ARIA_ATTR = true;
        /* Decide if custom data attributes are okay */ var ALLOW_DATA_ATTR = true;
        /* Decide if unknown protocols are okay */ var ALLOW_UNKNOWN_PROTOCOLS = false;
        /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */ var SAFE_FOR_TEMPLATES = false;
        /* Decide if document with <html>... should be returned */ var WHOLE_DOCUMENT = false;
        /* Track whether config is already set on this instance of DOMPurify. */ var SET_CONFIG = false;
        /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */ var FORCE_BODY = false;
        /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */ var RETURN_DOM = false;
        /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */ var RETURN_DOM_FRAGMENT = false;
        /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */ var RETURN_TRUSTED_TYPE = false;
        /* Output should be free from DOM clobbering attacks? */ var SANITIZE_DOM = true;
        /* Keep element content when removing element? */ var KEEP_CONTENT = true;
        /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */ var IN_PLACE = false;
        /* Allow usage of profiles like html, svg and mathMl */ var USE_PROFILES = {};
        /* Tags to ignore content of when KEEP_CONTENT is true */ var FORBID_CONTENTS = null;
        var DEFAULT_FORBID_CONTENTS = addToSet({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp"
        ]);
        /* Tags that are safe for data: URIs */ var DATA_URI_TAGS = null;
        var DEFAULT_DATA_URI_TAGS = addToSet({}, [
            "audio",
            "video",
            "img",
            "source",
            "image",
            "track"
        ]);
        /* Attributes safe for values like "javascript:" */ var URI_SAFE_ATTRIBUTES = null;
        var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns"
        ]);
        var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        /* Document namespace */ var NAMESPACE = HTML_NAMESPACE;
        var IS_EMPTY_INPUT = false;
        /* Parsing of strict XHTML documents */ var PARSER_MEDIA_TYPE;
        var SUPPORTED_PARSER_MEDIA_TYPES = [
            "application/xhtml+xml",
            "text/html"
        ];
        var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
        var transformCaseFunc;
        /* Keep a reference to config to pass to hooks */ var CONFIG = null;
        /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ var formElement = document.createElement("form");
        var isRegexOrFunction = function isRegexOrFunction(testValue) {
            return testValue instanceof RegExp || testValue instanceof Function;
        };
        /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */ // eslint-disable-next-line complexity
        var _parseConfig = function _parseConfig(cfg) {
            if (CONFIG && CONFIG === cfg) return;
            /* Shield configuration object from tampering */ if (!cfg || _typeof(cfg) !== "object") cfg = {};
            /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
            PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
            transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? function(x) {
                return x;
            } : stringToLowerCase;
            /* Set configuration parameters */ ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
            URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc // eslint-disable-line indent
            ) // eslint-disable-line indent
             : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc // eslint-disable-line indent
            ) // eslint-disable-line indent
             : DEFAULT_DATA_URI_TAGS;
            FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
            FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
            FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
            USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
            RETURN_DOM = cfg.RETURN_DOM || false; // Default false
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
            FORCE_BODY = cfg.FORCE_BODY || false; // Default false
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
            IN_PLACE = cfg.IN_PLACE || false; // Default false
            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
            if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
            /* Parse profile info */ if (USE_PROFILES) {
                ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
                ALLOWED_ATTR = [];
                if (USE_PROFILES.html === true) {
                    addToSet(ALLOWED_TAGS, html$1);
                    addToSet(ALLOWED_ATTR, html1);
                }
                if (USE_PROFILES.svg === true) {
                    addToSet(ALLOWED_TAGS, svg$1);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.svgFilters === true) {
                    addToSet(ALLOWED_TAGS, svgFilters);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.mathMl === true) {
                    addToSet(ALLOWED_TAGS, mathMl$1);
                    addToSet(ALLOWED_ATTR, mathMl);
                    addToSet(ALLOWED_ATTR, xml);
                }
            }
            /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
            if (cfg.ADD_ATTR) {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
            if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
            if (cfg.FORBID_CONTENTS) {
                if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
                addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
            }
            /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
            /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
                "html",
                "head",
                "body"
            ]);
            /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
                addToSet(ALLOWED_TAGS, [
                    "tbody"
                ]);
                delete FORBID_TAGS.tbody;
            } // Prevent further manipulation of configuration.
            // Not available in IE8, Safari 5, etc.
            if (freeze) freeze(cfg);
            CONFIG = cfg;
        };
        var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
            "mi",
            "mo",
            "mn",
            "ms",
            "mtext"
        ]);
        var HTML_INTEGRATION_POINTS = addToSet({}, [
            "foreignobject",
            "desc",
            "title",
            "annotation-xml"
        ]); // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erroneously deleted from
        // HTML namespace.
        var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
            "title",
            "style",
            "font",
            "a",
            "script"
        ]);
        /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */ var ALL_SVG_TAGS = addToSet({}, svg$1);
        addToSet(ALL_SVG_TAGS, svgFilters);
        addToSet(ALL_SVG_TAGS, svgDisallowed);
        var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
        addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
        /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */ var _checkValidNamespace = function _checkValidNamespace(element) {
            var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
            // can be null. We just simulate parent in this case.
            if (!parent || !parent.tagName) parent = {
                namespaceURI: HTML_NAMESPACE,
                tagName: "template"
            };
            var tagName = stringToLowerCase(element.tagName);
            var parentTagName = stringToLowerCase(parent.tagName);
            if (element.namespaceURI === SVG_NAMESPACE) {
                // The only way to switch from HTML namespace to SVG
                // is via <svg>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
                 // The only way to switch from MathML to SVG is via
                // svg if parent is either <annotation-xml> or MathML
                // text integration points.
                if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
                 // We only allow elements that are defined in SVG
                // spec. All others are disallowed in SVG namespace.
                return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
                // The only way to switch from HTML namespace to MathML
                // is via <math>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
                 // The only way to switch from SVG to MathML is via
                // <math> and HTML integration points
                if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
                 // We only allow elements that are defined in MathML
                // spec. All others are disallowed in MathML namespace.
                return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
                // The only way to switch from SVG to HTML is via
                // HTML integration points, and from MathML to HTML
                // is via MathML text integration points
                if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
                if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
                 // We disallow tags that are specific for MathML
                // or SVG and should never appear in HTML namespace
                return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
            } // The code should never reach this place (this means
            // that the element somehow got namespace that is not
            // HTML, SVG or MathML). Return false just in case.
            return false;
        };
        /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */ var _forceRemove = function _forceRemove(node) {
            arrayPush(DOMPurify.removed, {
                element: node
            });
            try {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                node.parentNode.removeChild(node);
            } catch (_) {
                try {
                    node.outerHTML = emptyHTML;
                } catch (_) {
                    node.remove();
                }
            }
        };
        /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */ var _removeAttribute = function _removeAttribute(name, node) {
            try {
                arrayPush(DOMPurify.removed, {
                    attribute: node.getAttributeNode(name),
                    from: node
                });
            } catch (_) {
                arrayPush(DOMPurify.removed, {
                    attribute: null,
                    from: node
                });
            }
            node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes
            if (name === "is" && !ALLOWED_ATTR[name]) {
                if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
                    _forceRemove(node);
                } catch (_) {}
                else try {
                    node.setAttribute(name, "");
                } catch (_1) {}
            }
        };
        /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */ var _initDocument = function _initDocument(dirty) {
            /* Create a HTML document */ var doc;
            var leadingWhitespace;
            if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
            else {
                /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ var matches = stringMatch(dirty, /^[\r\n\t ]+/);
                leadingWhitespace = matches && matches[0];
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml") // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
            var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */ if (NAMESPACE === HTML_NAMESPACE) try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
            /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
                doc = implementation.createDocument(NAMESPACE, "template", null);
                try {
                    doc.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
                } catch (_) {}
            }
            var body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
            return WHOLE_DOCUMENT ? doc.documentElement : body;
        };
        /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */ var _createIterator = function _createIterator(root) {
            return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
        };
        /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */ var _isClobbered = function _isClobbered(elm) {
            return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function");
        };
        /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */ var _isNode = function _isNode(object) {
            return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
        };
        /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */ var _executeHook = function _executeHook(entryPoint, currentNode, data) {
            if (!hooks[entryPoint]) return;
            arrayForEach(hooks[entryPoint], function(hook) {
                hook.call(DOMPurify, currentNode, data, CONFIG);
            });
        };
        /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */ var _sanitizeElements = function _sanitizeElements(currentNode) {
            var content;
            /* Execute a hook if present */ _executeHook("beforeSanitizeElements", currentNode, null);
            /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Check if tagname contains Unicode */ if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Now let's check the element's type and name */ var tagName = transformCaseFunc(currentNode.nodeName);
            /* Execute a hook if present */ _executeHook("uponSanitizeElement", currentNode, {
                tagName: tagName,
                allowedTags: ALLOWED_TAGS
            });
            /* Detect mXSS attempts abusing namespace confusion */ if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Mitigate a problem with templates inside select */ if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Remove element if anything forbids its presence */ if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
                }
                /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                    var parentNode = getParentNode(currentNode) || currentNode.parentNode;
                    var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                    if (childNodes && parentNode) {
                        var childCount = childNodes.length;
                        for(var i = childCount - 1; i >= 0; --i)parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                    }
                }
                _forceRemove(currentNode);
                return true;
            }
            /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
                /* Get the element's text content */ content = currentNode.textContent;
                content = stringReplace(content, MUSTACHE_EXPR$1, " ");
                content = stringReplace(content, ERB_EXPR$1, " ");
                if (currentNode.textContent !== content) {
                    arrayPush(DOMPurify.removed, {
                        element: currentNode.cloneNode()
                    });
                    currentNode.textContent = content;
                }
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeElements", currentNode, null);
            return false;
        };
        /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */ // eslint-disable-next-line complexity
        var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
            /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
            /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                if (// b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
                else return false;
            /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
            else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
            else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
            else if (!value) ;
            else return false;
            return true;
        };
        /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */ var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
            return tagName.indexOf("-") > 0;
        };
        /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */ var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
            var attr;
            var value;
            var lcName;
            var l;
            /* Execute a hook if present */ _executeHook("beforeSanitizeAttributes", currentNode, null);
            var attributes = currentNode.attributes;
            /* Check if we have attributes; if not we might have a text node */ if (!attributes) return;
            var hookEvent = {
                attrName: "",
                attrValue: "",
                keepAttr: true,
                allowedAttributes: ALLOWED_ATTR
            };
            l = attributes.length;
            /* Go backwards over all attributes; safely remove bad ones */ while(l--){
                attr = attributes[l];
                var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
                value = name === "value" ? attr.value : stringTrim(attr.value);
                lcName = transformCaseFunc(name);
                /* Execute a hook if present */ hookEvent.attrName = lcName;
                hookEvent.attrValue = value;
                hookEvent.keepAttr = true;
                hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
                _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
                value = hookEvent.attrValue;
                /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) continue;
                /* Remove attribute */ _removeAttribute(name, currentNode);
                /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) continue;
                /* Work around a security issue in jQuery 3.0 */ if (regExpTest(/\/>/i, value)) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) {
                    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
                    value = stringReplace(value, ERB_EXPR$1, " ");
                }
                /* Is `value` valid for this attribute? */ var lcTag = transformCaseFunc(currentNode.nodeName);
                if (!_isValidAttribute(lcTag, lcName, value)) continue;
                /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && _typeof(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function") {
                    if (namespaceURI) ;
                    else switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case "TrustedHTML":
                            value = trustedTypesPolicy.createHTML(value);
                            break;
                        case "TrustedScriptURL":
                            value = trustedTypesPolicy.createScriptURL(value);
                            break;
                    }
                }
                /* Handle invalid data-* attribute set by try-catching it */ try {
                    if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
                    else /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                    arrayPop(DOMPurify.removed);
                } catch (_) {}
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeAttributes", currentNode, null);
        };
        /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */ var _sanitizeShadowDOM1 = function _sanitizeShadowDOM(fragment) {
            var shadowNode;
            var shadowIterator = _createIterator(fragment);
            /* Execute a hook if present */ _executeHook("beforeSanitizeShadowDOM", fragment, null);
            while(shadowNode = shadowIterator.nextNode()){
                /* Execute a hook if present */ _executeHook("uponSanitizeShadowNode", shadowNode, null);
                /* Sanitize tags and elements */ if (_sanitizeElements(shadowNode)) continue;
                /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
                /* Check attributes, sanitize if necessary */ _sanitizeAttributes(shadowNode);
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeShadowDOM", fragment, null);
        };
        /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */ // eslint-disable-next-line complexity
        DOMPurify.sanitize = function(dirty, cfg) {
            var body;
            var importedNode;
            var currentNode;
            var oldNode;
            var returnNode;
            /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) dirty = "<!-->";
            /* Stringify, in case dirty is an object */ if (typeof dirty !== "string" && !_isNode(dirty)) {
                // eslint-disable-next-line no-negated-condition
                if (typeof dirty.toString !== "function") throw typeErrorCreate("toString is not a function");
                else {
                    dirty = dirty.toString();
                    if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
                }
            }
            /* Check we can run. Otherwise fall back or ignore */ if (!DOMPurify.isSupported) {
                if (_typeof(window.toStaticHTML) === "object" || typeof window.toStaticHTML === "function") {
                    if (typeof dirty === "string") return window.toStaticHTML(dirty);
                    if (_isNode(dirty)) return window.toStaticHTML(dirty.outerHTML);
                }
                return dirty;
            }
            /* Assign config vars */ if (!SET_CONFIG) _parseConfig(cfg);
            /* Clean up removed elements */ DOMPurify.removed = [];
            /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === "string") IN_PLACE = false;
            if (IN_PLACE) /* Do some early pre-sanitization to avoid unsafe root nodes */ {
                if (dirty.nodeName) {
                    var tagName = transformCaseFunc(dirty.nodeName);
                    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
                }
            } else if (dirty instanceof Node) {
                /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */ body = _initDocument("<!---->");
                importedNode = body.ownerDocument.importNode(dirty, true);
                if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") /* Node is already a body, use as is */ body = importedNode;
                else if (importedNode.nodeName === "HTML") body = importedNode;
                else // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            } else {
                /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
                /* Initialize the document to work on */ body = _initDocument(dirty);
                /* Check we have a DOM node from the data */ if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
            }
            /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) _forceRemove(body.firstChild);
            /* Get node iterator */ var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
            /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
                /* Fix IE's strange behavior with manipulated textNodes #89 */ if (currentNode.nodeType === 3 && currentNode === oldNode) continue;
                /* Sanitize tags and elements */ if (_sanitizeElements(currentNode)) continue;
                /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM1(currentNode.content);
                /* Check attributes, sanitize if necessary */ _sanitizeAttributes(currentNode);
                oldNode = currentNode;
            }
            oldNode = null;
            /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) return dirty;
            /* Return sanitized string or DOM */ if (RETURN_DOM) {
                if (RETURN_DOM_FRAGMENT) {
                    returnNode = createDocumentFragment.call(body.ownerDocument);
                    while(body.firstChild)// eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                } else returnNode = body;
                if (ALLOWED_ATTR.shadowroot) /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */ returnNode = importNode.call(originalDocument, returnNode, true);
                return returnNode;
            }
            var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
            /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) {
                serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
                serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
            }
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
        };
        /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */ DOMPurify.setConfig = function(cfg) {
            _parseConfig(cfg);
            SET_CONFIG = true;
        };
        /**
     * Public method to remove the configuration
     * clearConfig
     *
     */ DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
        };
        /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */ DOMPurify.isValidAttribute = function(tag, attr, value) {
            /* Initialize shared config vars if necessary. */ if (!CONFIG) _parseConfig({});
            var lcTag = transformCaseFunc(tag);
            var lcName = transformCaseFunc(attr);
            return _isValidAttribute(lcTag, lcName, value);
        };
        /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */ DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== "function") return;
            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
        };
        /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */ DOMPurify.removeHook = function(entryPoint) {
            if (hooks[entryPoint]) return arrayPop(hooks[entryPoint]);
        };
        /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */ DOMPurify.removeHooks = function(entryPoint) {
            if (hooks[entryPoint]) hooks[entryPoint] = [];
        };
        /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */ DOMPurify.removeAllHooks = function() {
            hooks = {};
        };
        return DOMPurify;
    }
    var purify = createDOMPurify();
    return purify;
});

},{}],"dJeae":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
class Card {
    static all() {
        return (0, _storageDefault.default).getRecords().map((record)=>new Card(record));
    }
    constructor({ frontText , backText , createdAt =Date.now()  } = {}){
        frontText = frontText?.trim();
        backText = backText?.trim();
        const cardObj = {
            frontText,
            backText
        };
        Object.entries(cardObj).forEach(([textKey, textValue])=>{
            if (!textValue) throw `${textKey} - value required but was blank`;
        });
        this.frontText = frontText;
        this.backText = backText;
        this.createdAt = createdAt;
    }
    save() {
        (0, _storageDefault.default).createRecord(this);
    }
    delete() {
        (0, _storageDefault.default).deleteRecord(this);
    }
}
exports.default = Card;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM","./storage":"kcZ3C"}],"kcZ3C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const STORAGE_KEY = "cards";
class CardStorage {
    static records = [];
    static getRecords() {
        this.records = JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify([]));
        return this.records;
    }
    static deleteRecord(record) {
        const recordToDelete = this.records.find((r)=>r.createdAt === record.createdAt);
        const recordIndex = this.records.indexOf(recordToDelete);
        if (recordIndex < 0) throw "Cannot delete a record which does not exist";
        this.records = [
            ...this.records.slice(0, recordIndex),
            ...this.records.slice(recordIndex + 1)
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.records));
    }
    static createRecord(record) {
        this.records = [
            ...this.records,
            record
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.records));
    }
}
exports.default = CardStorage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"gbGFb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkYV2CQ4IUJs.SlIconButton));
var _chunkYV2CQ4IUJs = require("../../chunks/chunk.YV2CQ4IU.js");
var _chunkJP2OUECEJs = require("../../chunks/chunk.JP2OUECE.js");
var _chunk6G3UULFWJs = require("../../chunks/chunk.6G3UULFW.js");
var _chunkIAELDRGJJs = require("../../chunks/chunk.IAELDRGJ.js");
var _chunkMIC5DZYPJs = require("../../chunks/chunk.MIC5DZYP.js");
var _chunkQVHXM2I3Js = require("../../chunks/chunk.QVHXM2I3.js");
var _chunk5S5G5ZT7Js = require("../../chunks/chunk.5S5G5ZT7.js");
var _chunkB2DPRLWSJs = require("../../chunks/chunk.B2DPRLWS.js");
var _chunkOAACI5QOJs = require("../../chunks/chunk.OAACI5QO.js");
var _chunkP52GZVKGJs = require("../../chunks/chunk.P52GZVKG.js");
var _chunkRPB53XXVJs = require("../../chunks/chunk.RPB53XXV.js");
var _chunkLNQI5NZSJs = require("../../chunks/chunk.LNQI5NZS.js");
var _chunk7MO772SNJs = require("../../chunks/chunk.7MO772SN.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkW6MGCO4GJs = require("../../chunks/chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("../../chunks/chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("../../chunks/chunk.VKNZYXSO.js");
var _chunk7IGWJVQFJs = require("../../chunks/chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("../../chunks/chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("../../chunks/chunk.K2NRSETB.js");

},{"../../chunks/chunk.YV2CQ4IU.js":"g4a5B","../../chunks/chunk.JP2OUECE.js":"kh45t","../../chunks/chunk.6G3UULFW.js":"7ZMcg","../../chunks/chunk.IAELDRGJ.js":"i92Ja","../../chunks/chunk.MIC5DZYP.js":"lu8AQ","../../chunks/chunk.QVHXM2I3.js":"a9dql","../../chunks/chunk.5S5G5ZT7.js":"am3B9","../../chunks/chunk.B2DPRLWS.js":"adyCY","../../chunks/chunk.OAACI5QO.js":"32agx","../../chunks/chunk.P52GZVKG.js":"6rEYR","../../chunks/chunk.RPB53XXV.js":"hJOTz","../../chunks/chunk.LNQI5NZS.js":"2YiLm","../../chunks/chunk.7MO772SN.js":"VBtJX","../../chunks/chunk.2JQPDYNA.js":"37wp6","../../chunks/chunk.W6MGCO4G.js":"2rlCH","../../chunks/chunk.UY5AQKHP.js":"919RN","../../chunks/chunk.VKNZYXSO.js":"8m9Nr","../../chunks/chunk.7IGWJVQF.js":"aRwgb","../../chunks/chunk.WWAD5WF4.js":"e0MYj","../../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"g4a5B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlIconButton", ()=>SlIconButton);
var _chunkJP2OUECEJs = require("./chunk.JP2OUECE.js");
var _chunk6G3UULFWJs = require("./chunk.6G3UULFW.js");
var _chunkIAELDRGJJs = require("./chunk.IAELDRGJ.js");
var _chunk7MO772SNJs = require("./chunk.7MO772SN.js");
var _chunkUY5AQKHPJs = require("./chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("./chunk.VKNZYXSO.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("./chunk.K2NRSETB.js");
// src/components/icon-button/icon-button.ts
var SlIconButton = class extends (0, _chunkWWAD5WF4Js.s) {
    constructor(){
        super(...arguments);
        this.hasFocus = false;
        this.label = "";
        this.disabled = false;
    }
    click() {
        this.button.click();
    }
    focus(options) {
        this.button.focus(options);
    }
    blur() {
        this.button.blur();
    }
    handleBlur() {
        this.hasFocus = false;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-blur");
    }
    handleFocus() {
        this.hasFocus = true;
        (0, _chunkUY5AQKHPJs.emit)(this, "sl-focus");
    }
    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    render() {
        const isLink = this.href ? true : false;
        const tag = isLink ? (0, _chunk6G3UULFWJs.l)`a` : (0, _chunk6G3UULFWJs.l)`button`;
        return (0, _chunk6G3UULFWJs.n)`
      <${tag}
        part="base"
        class=${(0, _chunkIAELDRGJJs.o)({
            "icon-button": true,
            "icon-button--disabled": !isLink && this.disabled,
            "icon-button--focused": this.hasFocus
        })}
        ?disabled=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : this.disabled)}
        type=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : "button")}
        href=${(0, _chunk7MO772SNJs.l)(isLink ? this.href : void 0)}
        target=${(0, _chunk7MO772SNJs.l)(isLink ? this.target : void 0)}
        download=${(0, _chunk7MO772SNJs.l)(isLink ? this.download : void 0)}
        rel=${(0, _chunk7MO772SNJs.l)(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${(0, _chunk7MO772SNJs.l)(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${(0, _chunk7MO772SNJs.l)(this.name)}
          library=${(0, _chunk7MO772SNJs.l)(this.library)}
          src=${(0, _chunk7MO772SNJs.l)(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
};
SlIconButton.styles = (0, _chunkJP2OUECEJs.icon_button_styles_default);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.t)()
], SlIconButton.prototype, "hasFocus", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.i)(".icon-button")
], SlIconButton.prototype, "button", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "name", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "library", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "src", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "href", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "target", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "download", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)()
], SlIconButton.prototype, "label", 2);
(0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.e)({
        type: Boolean,
        reflect: true
    })
], SlIconButton.prototype, "disabled", 2);
SlIconButton = (0, _chunkK2NRSETBJs.__decorateClass)([
    (0, _chunkVKNZYXSOJs.n)("sl-icon-button")
], SlIconButton);

},{"./chunk.JP2OUECE.js":"kh45t","./chunk.6G3UULFW.js":"7ZMcg","./chunk.IAELDRGJ.js":"i92Ja","./chunk.7MO772SN.js":"VBtJX","./chunk.UY5AQKHP.js":"919RN","./chunk.VKNZYXSO.js":"8m9Nr","./chunk.WWAD5WF4.js":"e0MYj","./chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"kh45t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_button_styles_default", ()=>icon_button_styles_default);
var _chunk7IGWJVQFJs = require("./chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("./chunk.WWAD5WF4.js");
// src/components/icon-button/icon-button.styles.ts
var icon_button_styles_default = (0, _chunkWWAD5WF4Js.r)`
  ${(0, _chunk7IGWJVQFJs.component_styles_default)}

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
`;

},{"./chunk.7IGWJVQF.js":"aRwgb","./chunk.WWAD5WF4.js":"e0MYj","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}],"elp81":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkMIC5DZYPJs.SlIcon));
var _chunkMIC5DZYPJs = require("../../chunks/chunk.MIC5DZYP.js");
var _chunkQVHXM2I3Js = require("../../chunks/chunk.QVHXM2I3.js");
var _chunk5S5G5ZT7Js = require("../../chunks/chunk.5S5G5ZT7.js");
var _chunkB2DPRLWSJs = require("../../chunks/chunk.B2DPRLWS.js");
var _chunkOAACI5QOJs = require("../../chunks/chunk.OAACI5QO.js");
var _chunkP52GZVKGJs = require("../../chunks/chunk.P52GZVKG.js");
var _chunkRPB53XXVJs = require("../../chunks/chunk.RPB53XXV.js");
var _chunkLNQI5NZSJs = require("../../chunks/chunk.LNQI5NZS.js");
var _chunk7MO772SNJs = require("../../chunks/chunk.7MO772SN.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkW6MGCO4GJs = require("../../chunks/chunk.W6MGCO4G.js");
var _chunkUY5AQKHPJs = require("../../chunks/chunk.UY5AQKHP.js");
var _chunkVKNZYXSOJs = require("../../chunks/chunk.VKNZYXSO.js");
var _chunk7IGWJVQFJs = require("../../chunks/chunk.7IGWJVQF.js");
var _chunkWWAD5WF4Js = require("../../chunks/chunk.WWAD5WF4.js");
var _chunkK2NRSETBJs = require("../../chunks/chunk.K2NRSETB.js");

},{"../../chunks/chunk.MIC5DZYP.js":"lu8AQ","../../chunks/chunk.QVHXM2I3.js":"a9dql","../../chunks/chunk.5S5G5ZT7.js":"am3B9","../../chunks/chunk.B2DPRLWS.js":"adyCY","../../chunks/chunk.OAACI5QO.js":"32agx","../../chunks/chunk.P52GZVKG.js":"6rEYR","../../chunks/chunk.RPB53XXV.js":"hJOTz","../../chunks/chunk.LNQI5NZS.js":"2YiLm","../../chunks/chunk.7MO772SN.js":"VBtJX","../../chunks/chunk.2JQPDYNA.js":"37wp6","../../chunks/chunk.W6MGCO4G.js":"2rlCH","../../chunks/chunk.UY5AQKHP.js":"919RN","../../chunks/chunk.VKNZYXSO.js":"8m9Nr","../../chunks/chunk.7IGWJVQF.js":"aRwgb","../../chunks/chunk.WWAD5WF4.js":"e0MYj","../../chunks/chunk.K2NRSETB.js":"dR47F","@parcel/transformer-js/src/esmodule-helpers.js":"aMYfM"}]},["9pdHW","9XOu0"], "9XOu0", "parcelRequire561b")

//# sourceMappingURL=index.840f9702.js.map
