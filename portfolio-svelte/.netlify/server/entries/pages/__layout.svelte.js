var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var import_Burgermenu_2af3965e = require("../../chunks/Burgermenu-2af3965e.js");
var import_Footer_svelte = __toESM(require("./Footer.svelte.js"));
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 650px){header.svelte-15h0oec.svelte-15h0oec{border-bottom:solid 2px black;position:fixed;z-index:3;margin:0 auto;gap:30px;display:flex;justify-content:space-between;align-items:center;padding:10px;right:0;width:100%;background:linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),\r\n				url(https://grainy-gradients.vercel.app/noise.svg)}.corner.svelte-15h0oec img.svelte-15h0oec{filter:invert(1);width:4rem;height:auto;padding:5px;object-fit:contain}nav.svelte-15h0oec.svelte-15h0oec{display:flex;justify-content:center}ul.svelte-15h0oec.svelte-15h0oec{gap:30px;position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-15h0oec.svelte-15h0oec{position:relative;height:100%}nav.svelte-15h0oec a.svelte-15h0oec{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:400;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}img.svelte-15h0oec.svelte-15h0oec:hover{color:rgb(6, 128, 172);text-decoration:underline}a.svelte-15h0oec.svelte-15h0oec:hover{color:rgb(6, 128, 172);text-decoration:underline}}@media(max-width: 650px){header.svelte-15h0oec.svelte-15h0oec{display:none}}",
  map: null
};
const Header = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_8f0b34dd.a)(import_Burgermenu_2af3965e.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"svelte-15h0oec"}"><div class="${"corner svelte-15h0oec"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-15h0oec"}"><img class="${"hover:pulsate-fwd svelte-15h0oec"}" src="${"./FM.svg"}" alt="${"SvelteKit"}"></a></div>

	<nav class="${"svelte-15h0oec"}"><ul class="${"svelte-15h0oec"}"><li class="${["svelte-15h0oec", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-15h0oec"}">Forside</a></li>
			<li class="${["svelte-15h0oec", $page.url.pathname === "/Portfolio" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-15h0oec"}">Portfolio</a></li>
			<li class="${["svelte-15h0oec", $page.url.pathname === "/Om_mig" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-15h0oec"}">om mig</a></li></ul></nav>
</header>`;
});
var app = "";
const _layout = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_8f0b34dd.v)(Header, "Header").$$render($$result, {}, {}, {})}
${(0, import_index_8f0b34dd.v)(import_Burgermenu_2af3965e.B, "Burgermenu").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_8f0b34dd.v)(import_Footer_svelte.default, "Footer").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
