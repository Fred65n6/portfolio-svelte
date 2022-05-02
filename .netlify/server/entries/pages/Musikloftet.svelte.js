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
  default: () => Musikloftet,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_0c1d907c = require("../../chunks/Header_2-0c1d907c.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Musikloftet_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-10ztac7{max-width:1300px;width:100%;display:grid;grid-template-columns:1fr;gap:50px}.heading.svelte-10ztac7{margin-top:3rem;background-image:url('../../static/musikloftet.svg');background-repeat:no-repeat;background-size:contain;width:100%;height:15rem}.desk-link.svelte-10ztac7{display:none}.links.svelte-10ztac7{display:flex;justify-content:space-between;align-items:center;gap:80px}.se-siden.svelte-10ztac7{border:solid 2px white;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1;border-radius:20px;padding:0.5rem}section.svelte-10ztac7{display:grid}@media(min-width: 650px){.container.svelte-10ztac7{grid-template-columns:1fr 1fr 1fr}.heading.svelte-10ztac7{background-attachment:fixed;position:static;height:35rem;margin-top:4.2rem}.links.svelte-10ztac7{width:1100px}.mobil-link.svelte-10ztac7{display:none}.desk-link.svelte-10ztac7{display:grid}}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Musikloftet = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_e03aaaec.v)(import_Header_2_0c1d907c.H, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading svelte-10ztac7"}"></div>

<section class="${"svelte-10ztac7"}"><h1>Musiklofet</h1></section>

<section class="${"svelte-10ztac7"}"><div class="${"container svelte-10ztac7"}"><div><h4>Opgaven</h4>
			<p>I dette projekt skulle vi designe en hjemmeside, for en fiktiv klient, der udlejer
				\xF8velokaler. Projektet handlede f\xF8rst og fremmest om at lave et indbyende design, samt at f\xE5
				en masse forskellige informationer ind p\xE5 siden.
			</p></div>

		<div><h4>Processen</h4>
			<p>Med dette projekt fik vi vores f\xF8rste rigtige m\xF8de med Figma som vi brugte til at lave
				prototyper samt at udarbejde designsystemer. Derudover skulle vi bruge framworket Tailwind
				til at kode siden, som ogs\xE5 var en hel ny m\xE5de at kode p\xE5.
			</p></div>

		<div><h4>L\xF8sning</h4>
			<p>I vores endelige l\xF8sning valgte vi at bruge den r\xF8de farve til at skabe en visuel identitet,
				samt at str\xF8mline billederne ved at tr\xE6kke lidt farve ud af dem, og s\xE5 give dem den her lidt
				r\xE5 grynede effekt. Sitet indeholder information om b\xE5de medlemspriser, hvem Musikloftet er
				samt et helt flow for hvordan man booker et lokale.
			</p></div></div></section>

<section class="${"grid place-items-center desk-link svelte-10ztac7"}"><a class="${"se-siden svelte-10ztac7"}" href="${"https://skuret.eu/kea/3semester/musikloftet/"}" target="${"blank"}">SE SIDEN \u279D</a></section>

<section class="${"svelte-10ztac7"}"><div class="${"links svelte-10ztac7"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
		<a class="${"se-siden mobil-link svelte-10ztac7"}" href="${"https://skuret.eu/kea/3semester/musikloftet/"}" target="${"blank"}">SE SIDEN \u279D</a></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
