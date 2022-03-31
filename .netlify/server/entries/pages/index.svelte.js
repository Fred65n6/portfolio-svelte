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
  default: () => Routes,
  prerender: () => prerender
});
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var import_Hero_svelte = __toESM(require("./Hero.svelte.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spacer.svelte-1fgo7an{padding:2rem;width:100%;display:grid;place-items:center}section.svelte-1fgo7an{padding-block:6rem}@media(min-width: 650px){section.svelte-1fgo7an{padding-block:12rem}}.text-box.svelte-1fgo7an{padding:2rem;height:auto;background:rgba(218, 217, 217, 0.605);box-shadow:2px 2px 4px;height:15rem}.text-box.svelte-1fgo7an:hover{background:linear-gradient(to right, rgba(196, 196, 196, 0.7), rgba(255, 255, 255, 0.7)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg);transform:scale(1.02);z-index:2;position:static;transition:0.5s linear}span.svelte-1fgo7an{padding-left:1rem;font-weight:900}a.svelte-1fgo7an:hover{text-decoration:none}@media(min-width: 650px){section.svelte-1fgo7an{display:grid;grid-template-columns:1fr 1fr;place-items:center;width:100%}.spacer.svelte-1fgo7an{padding:4rem;width:100%;display:grid;place-items:center}#box-1.svelte-1fgo7an{border-top:solid 4px white;border-image:linear-gradient(\r\n					90deg,\r\n					rgb(152, 6, 6) 0%,\r\n					rgb(179, 84, 26) 27%,\r\n					rgb(169, 159, 21) 49%,\r\n					rgb(65, 141, 187) 67%,\r\n					rgb(7, 53, 162) 100%\r\n				)\r\n				1;border-right:solid 4px white;border-image:linear-gradient(\r\n					90deg,\r\n					rgb(152, 6, 6) 0%,\r\n					rgb(179, 84, 26) 27%,\r\n					rgb(169, 159, 21) 49%,\r\n					rgb(65, 141, 187) 67%,\r\n					rgb(7, 53, 162) 100%\r\n				)\r\n				1}#box-2.svelte-1fgo7an{border-bottom:solid 4px white;border-image:linear-gradient(\r\n					90deg,\r\n					rgb(7, 53, 162) 0%,\r\n					rgb(65, 141, 187) 27%,\r\n					rgb(169, 159, 21) 49%,\r\n					rgb(179, 84, 26) 67%,\r\n					rgb(152, 6, 6) 100%\r\n				)\r\n				1}}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>FM Design</title>`, ""}`, ""}

${(0, import_index_8f0b34dd.v)(import_Hero_svelte.default, "Hero").$$render($$result, {}, {}, {})}

<section id="${"forside"}" class="${"svelte-1fgo7an"}"><div id="${"box-1"}" class="${"spacer  svelte-1fgo7an"}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-1fgo7an"}"><div class="${"text-box  svelte-1fgo7an"}"><h2>Portfolio</h2>
				<p>Se nogle af de forskellige projekter som jeg har arbejdet p\xE5 i den tid jeg har v\xE6ret
					studerende p\xE5 KEA<span class="${"svelte-1fgo7an"}">\u279D</span></p></div></a></div>

	<div id="${"box-2"}" class="${"spacer  svelte-1fgo7an"}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-1fgo7an"}"><div class="${"text-box  svelte-1fgo7an"}"><h2>Om mig</h2>
				<p>L\xE6r mig lidt bedre at kende og l\xE6s om hvilke kompetencer jeg besidder<span class="${"svelte-1fgo7an"}">\u279D</span></p></div></a></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
