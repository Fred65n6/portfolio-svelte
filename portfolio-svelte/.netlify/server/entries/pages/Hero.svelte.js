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
  default: () => Hero
});
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1w5gw17{font-size:5.5rem;letter-spacing:1rem;padding-bottom:3px;text-decoration:none;color:WHITE}a.svelte-1w5gw17{position:relative;top:6rem;font-size:3.5rem;scroll-margin-top:50px;scroll-behavior:smooth;color:white}a.svelte-1w5gw17:hover{text-decoration:none}.hero.svelte-1w5gw17{place-self:center;background-size:cover;position:static;z-index:5;overflow:hidden;width:100%;height:100vh;padding-top:14rem;padding-bottom:11.9rem;border-block:solid 6px;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6, 0.7) 0%,\r\n				rgb(179, 84, 26, 0.7) 27%,\r\n				rgb(169, 159, 21, 0.7) 49%,\r\n				rgb(65, 141, 187, 0.7) 67%,\r\n				rgb(7, 53, 162, 0.7) 100%\r\n			)\r\n			1}@media(max-width: 650px){.hero.svelte-1w5gw17{padding-block:15rem;padding-inline:2rem}h1.svelte-1w5gw17{font-size:1.5rem}}",
  map: null
};
const Hero = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero bg-pan-left bg-hero2 svelte-1w5gw17"}"><div class="${"hero-border grid place-items-center md:border-none "}"><img class="${"fade-in "}" src="${"./frederik_milland.svg"}" alt="${"logo"}">
		<h1 class="${"tracking-in-expand-fwd svelte-1w5gw17"}">WEBDESIGNER</h1>
		<a class="${"pulsate-fwd svelte-1w5gw17"}" href="${"#forside"}">\uFE3E</a></div>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
