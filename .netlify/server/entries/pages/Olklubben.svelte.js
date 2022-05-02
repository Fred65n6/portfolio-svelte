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
  default: () => Olklubben,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_0c1d907c = require("../../chunks/Header_2-0c1d907c.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Olklubben_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-178i612{max-width:1300px;width:100%;display:grid;grid-template-columns:1fr;gap:50px}.heading.svelte-178i612{margin-top:3rem;background-image:url('../../static/olklubben_logo.svg');background-repeat:no-repeat;background-size:contain;width:100%;height:15rem}.desk-link.svelte-178i612{display:none}.links.svelte-178i612{display:flex;justify-content:space-between;align-items:center;gap:80px}.se-siden.svelte-178i612{border:solid 2px white;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1;border-radius:20px;padding:0.5rem}section.svelte-178i612{display:grid}@media(min-width: 650px){.container.svelte-178i612{grid-template-columns:1fr 1fr 1fr}.heading.svelte-178i612{background-attachment:fixed;position:static;height:35rem;margin-top:4.2rem}.links.svelte-178i612{width:1100px}.mobil-link.svelte-178i612{display:none}.desk-link.svelte-178i612{display:grid}}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Olklubben = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_e03aaaec.v)(import_Header_2_0c1d907c.H, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading svelte-178i612"}"></div>

<section class="${"svelte-178i612"}"><h1>\xD8lklubben</h1></section>

<section class="${"svelte-178i612"}"><div class="${"container svelte-178i612"}"><div><h4>Opgaven</h4>
			<p>\xD8lklubben var et projekt hvor vi en mindre gruppe, skulle finde en f\xE6llespassion, og
				derefter lave et site, med den passion i centrum. Et af form\xE5lene ved dette projekt var at
				lave et flot site, som skulle indeholde en eller anden form for filtrering af nogle
				produkter. Vi valgte derfor at lave en hjemmeside for en fiktiv \xF8lklub.
			</p></div>

		<div><h4>Processen</h4>
			<p>I dette projekt brugte vi lang tid p\xE5 at lave et logo til vores site. Det var en udfordring,
				fordi vi skulle lave logoet, inden vi havde nogen anelse om hvordan udtrykket for vores
				fiktive \xF8lklub skulle v\xE6re. Vi endte dog med et design vi f\xF8lte var meget universelt. En af
				de store opgaver i dette projekt, var at lave en filtrering. Filtreringen blev lavet igennem
				en databse, hvor vi trak data ind fra et array, som vi kunne sortere i.
			</p></div>

		<div><h4>L\xF8sningen</h4>
			<p>Det endelige site, endte med at f\xE5 en lidt dunkel og hyggelig boedga stemning, st\xF8ttet op af
				baggrundsbilledet som er gennemg\xE5ende p\xE5 sitet.
			</p></div></div></section>

<section class="${"grid place-items-center desk-link svelte-178i612"}"><a class="${"se-siden svelte-178i612"}" href="${"https://skuret.eu/kea/olklubben/"}" target="${"blank"}">SE SIDEN \u279D</a></section>

<section class="${"svelte-178i612"}"><div class="${"links svelte-178i612"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
		<a class="${"se-siden mobil-link svelte-178i612"}" href="${"https://skuret.eu/kea/olklubben/"}" target="${"blank"}">SE SIDEN \u279D</a></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
