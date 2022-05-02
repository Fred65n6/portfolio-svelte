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
  H: () => Header_2
});
var import_index_e03aaaec = require("./index-e03aaaec.js");
var import_stores_5fe3ad3b = require("./stores-5fe3ad3b.js");
var Header_2_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{position:fixed;display:flex;justify-content:space-between;top:0;z-index:3;width:100%;border-bottom:solid 1px black;padding:10px;align-items:center;background:linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg)}nav.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{display:flex;justify-content:space-between}.corner.svelte-1ucd2kk img.svelte-1ucd2kk.svelte-1ucd2kk{filter:invert(1);height:2rem}nav.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{position:sticky;width:100%;display:flex}ul.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{position:relative;padding:0;margin:0;height:3em;display:flex;align-items:center;list-style:none;background-size:contain}nav.svelte-1ucd2kk a.svelte-1ucd2kk.svelte-1ucd2kk{display:flex;height:100%;align-items:center;padding:0 1em;font-weight:400;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}.hamburger-menu.svelte-1ucd2kk li.svelte-1ucd2kk.svelte-1ucd2kk{padding:1rem;margin-top:2rem}#menu__toggle.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{opacity:0}#menu__toggle.svelte-1ucd2kk:checked~.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk{transform:rotate(45deg)}#menu__toggle.svelte-1ucd2kk:checked~.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk::before{top:0;transform:rotate(0)}#menu__toggle.svelte-1ucd2kk:checked~.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-1ucd2kk:checked~.menu__box.svelte-1ucd2kk.svelte-1ucd2kk{visibility:visible;right:0}.menu__btn.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{display:flex;align-items:center;position:fixed;top:15px;right:20px;width:26px;height:22px;cursor:pointer;z-index:1}.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk.svelte-1ucd2kk,.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk.svelte-1ucd2kk::before,.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk.svelte-1ucd2kk::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk.svelte-1ucd2kk::before{content:'';top:-8px}.menu__btn.svelte-1ucd2kk>span.svelte-1ucd2kk.svelte-1ucd2kk::after{content:'';top:8px}.menu__box.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{display:flex;flex-direction:column;position:fixed;visibility:hidden;top:0;right:-100%;width:100%;height:100%;margin:0;padding:80px 0;list-style:none;background:linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg);transition-duration:0.25s}@media(max-width: 650px){.desktop-menu.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{display:none}}@media(min-width: 650px){.hamburger-menu.svelte-1ucd2kk.svelte-1ucd2kk.svelte-1ucd2kk{display:none}}",
  map: null
};
const Header_2 = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"svelte-1ucd2kk"}"><nav class="${"svelte-1ucd2kk"}"><div class="${"corner svelte-1ucd2kk"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1ucd2kk"}"><img class="${"hover:pulsate-fwd svelte-1ucd2kk"}" src="${"./FM.svg"}" alt="${"SvelteKit"}"></a></div>

		<div class="${"desktop-menu svelte-1ucd2kk"}"><ul class="${"svelte-1ucd2kk"}"><li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-1ucd2kk"}">Forside</a></li>
				<li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/Portfolio" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-1ucd2kk"}">Portfolio</a></li>
				<li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/Om_mig" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-1ucd2kk"}">om mig</a></li></ul></div>
		<div class="${"hamburger-menu svelte-1ucd2kk"}"><input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-1ucd2kk"}">
			<label class="${"menu__btn svelte-1ucd2kk"}" for="${"menu__toggle"}"><span class="${"svelte-1ucd2kk"}"></span></label>

			<ul class="${"menu__box svelte-1ucd2kk"}"><div class="${"corner svelte-1ucd2kk"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1ucd2kk"}"><img class="${"hover:pulsate-fwd svelte-1ucd2kk"}" src="${"./FM.svg"}" alt="${"SvelteKit"}"></a></div>
				<li class="${["svelte-1ucd2kk", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1ucd2kk"}">Forside</a></li>
				<li class="${["svelte-1ucd2kk", $page.url.pathname === "/Portfolio" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-1ucd2kk"}">Portfolio</a></li>
				<li class="${["svelte-1ucd2kk", $page.url.pathname === "/Om_mig" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-1ucd2kk"}">om mig</a></li></ul></div></nav>
</header>`;
});
module.exports = __toCommonJS(stdin_exports);
