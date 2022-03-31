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
  default: () => Footer
});
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "address.svelte-4ad0rb{padding-block:3rem;display:grid;font-style:normal;font-size:1.1rem}p.svelte-4ad0rb{font-weight:400}footer.svelte-4ad0rb{margin-bottom:-25px;background:rgba(218, 217, 217, 0.605);width:100%;border-top:solid 4px;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1}img.svelte-4ad0rb{filter:invert(1)}",
  map: null
};
const Footer = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"text-center w-full grid place-items-center svelte-4ad0rb"}"><img class="${"w-28 pb-8 pt-8 border-b-2 svelte-4ad0rb"}" src="${"FM.svg"}" alt="${"footer_logo"}">
	<address class="${"svelte-4ad0rb"}"><p class="${"svelte-4ad0rb"}">E-mail:</p>
		<a href="${"mailto:frederik-milland@hotmail.com"}">frederik-milland@hotmail.com</a>

		<br>
		<p class="${"svelte-4ad0rb"}">Telefon:</p>
		<a href="${"tel:+4522901244"}">+4522901244</a></address>
</footer>`;
});
module.exports = __toCommonJS(stdin_exports);
