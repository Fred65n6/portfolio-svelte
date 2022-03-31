var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  B: () => Burgermenu,
  p: () => page
});
var import_index_8f0b34dd = require("./index-8f0b34dd.js");
const getStores = () => {
  const stores = (0, import_index_8f0b34dd.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Burgermenu_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 650px){.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0,.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before,.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after{box-sizing:border-box}body.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{font-size:1.2em;line-height:1.6;overflow-x:hidden}img.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{width:60px;filter:invert(1)}label.svelte-1n7l5c0 .menu.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{position:fixed;right:-100px;top:-100px;z-index:4;width:200px;height:200px;background:white;border-radius:50% 50% 50% 50%;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;box-shadow:0 0 0 0 #fff, 0 0 0 0 #fff;cursor:pointer}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{position:absolute;top:135px;left:50px;width:30px;height:3px;background:black;border-radius:12px;display:block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after,label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before{-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;content:'';position:absolute;display:block;width:100%;height:100%;background:black;border-radius:12px}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before{top:-10px}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after{bottom:-10px}label.svelte-1n7l5c0 input.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{display:none}label.svelte-1n7l5c0 input.svelte-1n7l5c0:checked+.menu.svelte-1n7l5c0.svelte-1n7l5c0{box-shadow:0 0 0 100vw #fff, 0 0 0 100vh #fff;border-radius:0}label.svelte-1n7l5c0 input:checked+.menu .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{-webkit-transform:rotate(45deg);transform:rotate(45deg)}label.svelte-1n7l5c0 input:checked+.menu .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);bottom:0}label.svelte-1n7l5c0 input:checked+.menu .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:0}label.svelte-1n7l5c0 input.svelte-1n7l5c0:checked+.menu.svelte-1n7l5c0+ul.svelte-1n7l5c0{opacity:1}label.svelte-1n7l5c0 ul.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{position:fixed;display:grid;place-items:center;text-align:center;z-index:200;gap:20px;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);opacity:0;-webkit-transition:0.25s 0s ease-in-out;transition:0.25s 0s ease-in-out}label.svelte-1n7l5c0 a.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{margin-bottom:1em;display:block;color:black;text-decoration:none}}@media(min-width: 650px){label.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{display:none}}",
  map: null
};
const Burgermenu = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_8f0b34dd.a)(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<body class="${"svelte-1n7l5c0"}"><label class="${"svelte-1n7l5c0"}"><input type="${"checkbox"}" class="${"svelte-1n7l5c0"}">
		<span class="${"menu svelte-1n7l5c0"}"><span class="${"hamburger svelte-1n7l5c0"}"></span></span>

		<ul class="${"svelte-1n7l5c0"}"><li class="${"svelte-1n7l5c0"}"><img src="${"FM.svg"}" alt="${""}" class="${"svelte-1n7l5c0"}"></li>
			<br class="${"svelte-1n7l5c0"}">
			<li class="${["svelte-1n7l5c0", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1n7l5c0"}">FORSIDE</a></li>
			<li class="${["svelte-1n7l5c0", $page.url.pathname === "/Portfolio" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-1n7l5c0"}">PORTFOLIO</a></li>
			<li class="${["svelte-1n7l5c0", $page.url.pathname === "/Om_mig" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-1n7l5c0"}">OM MIG</a></li></ul></label>
</body>`;
});
module.exports = __toCommonJS(stdin_exports);
