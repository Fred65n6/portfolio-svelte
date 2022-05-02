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
  default: () => Teater,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_0c1d907c = require("../../chunks/Header_2-0c1d907c.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Teater_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1v7p36i{max-width:1300px;width:100%;display:grid;grid-template-columns:1fr;gap:50px}.heading.svelte-1v7p36i{margin-top:3rem;background-image:url('../../static/grob_logo.webp');background-repeat:no-repeat;background-size:contain;width:100%;height:15rem}.desk-link.svelte-1v7p36i{display:none}.links.svelte-1v7p36i{display:flex;justify-content:space-between;align-items:center;gap:80px}.se-siden.svelte-1v7p36i{border:solid 2px white;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1;border-radius:20px;padding:0.5rem}section.svelte-1v7p36i{display:grid}@media(min-width: 650px){.container.svelte-1v7p36i{grid-template-columns:1fr 1fr 1fr}.heading.svelte-1v7p36i{background-attachment:fixed;position:static;height:35rem;margin-top:4.2rem}.links.svelte-1v7p36i{width:1100px}.mobil-link.svelte-1v7p36i{display:none}.desk-link.svelte-1v7p36i{display:grid}}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Teater = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_e03aaaec.v)(import_Header_2_0c1d907c.H, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading svelte-1v7p36i"}"></div>

<section class="${"svelte-1v7p36i"}"><h1>Teater Grob</h1></section>

<section class="${"svelte-1v7p36i"}"><div class="${"container svelte-1v7p36i"}"><div><h4>Opgaven</h4>
			<p>Dette var et gruppe projekt, der handlede om at lave et kampagnesite, som skulle lokke flere
				unge til at k\xF8be \xE5rskort til teater Grob. <br> Sitet skulle udover et tydeligt koncept ogs\xE5
				indholde en kampagnevideo, samt vidoer til sociale medier.
			</p></div>

		<div><h4>Processen</h4>
			<p>Vi startede projektet ud med at brainstorme id\xE9er til et slogan, som vi kunne basere vores
				koncept p\xE5. efter mange iterationer endte vi p\xE5 sloganet &quot;mangler du ogs\xE5 mere drama i din
				hverdag?&quot;. Sloganet lagde grund for vores kampagnevideoer, som viser forskellige folk, der
				m\xE5ske savner lidt drama i deres liv. Udover kampagne videoerne, s\xE5 fandt vi ogs\xE5 p\xE5 at
				kampagnen ogs\xE5 skulle handle om at samle N\xF8rrebro, med Teater Grob som centrum, s\xE5 hvis man
				k\xF8ber et \xE5rskort, s\xE5 ville man ogs\xE5 f\xE5 rabatter hos forskellige klassiske n\xF8rrebro
				forretninger, som feks. BRUS og FRIHEDEN.
			</p></div>

		<div><h4>L\xF8sningen</h4>
			<p>Den endelige l\xF8sning, blev et kampagnesite, bygget op i wordpress. I dette projekt som jo
				var et gruppeprojekt, havde jeg hovedsagligt ansvar for designet og ops\xE6tningen af
				kampagnesitet. Sitet og vidoerne blev pr\xE6senteret for repr\xE6sentanter fra Teater Grob, som
				var meget positive overfor hele konceptet.
			</p></div></div></section>

<section class="${"grid place-items-center desk-link svelte-1v7p36i"}"><a class="${"se-siden svelte-1v7p36i"}" href="${"https://skuret.eu/kea/teater_grob/"}" target="${"blank"}">SE SIDEN \u279D</a></section>

<section class="${"svelte-1v7p36i"}"><div class="${"links svelte-1v7p36i"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
		<a class="${"se-siden mobil-link svelte-1v7p36i"}" href="${"https://skuret.eu/kea/teater_grob/"}" target="${"blank"}">SE SIDEN \u279D</a></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
