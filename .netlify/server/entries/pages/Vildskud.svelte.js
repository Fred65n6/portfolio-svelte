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
  default: () => Vildskud,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_0c1d907c = require("../../chunks/Header_2-0c1d907c.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Vildskud_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1vlj9r5{max-width:1300px;width:100%;display:grid;grid-template-columns:1fr;gap:50px}.heading.svelte-1vlj9r5{margin-top:3rem;background-image:url('../../static/hero_bg_2.svg');background-repeat:no-repeat;background-size:contain;width:100%;height:15rem}.desk-link.svelte-1vlj9r5{display:none}.links.svelte-1vlj9r5{display:flex;justify-content:space-between;align-items:center;gap:80px}.se-siden.svelte-1vlj9r5{border:solid 2px white;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1;border-radius:20px;padding:0.5rem}section.svelte-1vlj9r5{display:grid}@media(min-width: 650px){.container.svelte-1vlj9r5{grid-template-columns:1fr 1fr 1fr}.heading.svelte-1vlj9r5{background-attachment:fixed;position:static;height:35rem;margin-top:4.2rem}.links.svelte-1vlj9r5{width:1100px}.mobil-link.svelte-1vlj9r5{display:none}.desk-link.svelte-1vlj9r5{display:grid}}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Vildskud = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_e03aaaec.v)(import_Header_2_0c1d907c.H, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading svelte-1vlj9r5"}"></div>

<section class="${"svelte-1vlj9r5"}"><h1>Vildskud</h1></section>

<section class="${"svelte-1vlj9r5"}"><div class="${"container svelte-1vlj9r5"}"><div><h4>Opgaven</h4>
			<p>Dette gruppe projekt havde to overskrifter: revoltion\xE6rt redesign og b\xE6redygtigt design. Vi
				skulle redesigne den eksisterende site for scenekunst festivallen &#39;Vildskud&#39;. Samtidig
				skulle vores design ogs\xE5 v\xE6re b\xE6redygtigt, s\xE5 de enkelte sider m\xE5tte ikke fylde mere end 0.5
				mb, hvilket satte en del begr\xE6nsninger.
			</p></div>

		<div><h4>Processen</h4>
			<p>I vores gruppe valgte vi at g\xE5 &quot;all out&quot; p\xE5 b\xE6redygtigheden, og ikke bruge nogle billeder
				eller animationer, men kun bygge vores side p\xE5 vector grafik og fonte. Det gjorde vi
				hovedsagligt for at udfordre os selv, og se om vi kunne lave et interessant design og nogle
				billeder overhovedet. Vi brugte nogle st\xE6rke farver og fonte til at skabe en visuel
				identitet og farveklatter til at skabe et sammenh\xE6ng p\xE5 siderne.
			</p></div>

		<div><h4>L\xF8sningen</h4>
			<p>Selve sitet er blevet kodet i SvelteKit, som er en hybrid imellem Svelte og Tailwind. Mit
				eget hovedansvarsomr\xE5de i dette projekt var ops\xE6tningen af sitet, og s\xE5 designede jeg det
				nye logo, som vi har brugt til at st\xF8tte op, om den nye visuelle identitet.
			</p></div></div></section>

<section class="${"grid place-items-center desk-link svelte-1vlj9r5"}"><a class="${"se-siden svelte-1vlj9r5"}" href="${"https://vildskud.netlify.app/"}" target="${"blank"}">SE SIDEN \u279D</a></section>

<section class="${"svelte-1vlj9r5"}"><div class="${"links svelte-1vlj9r5"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 SIDEN</a>
		<a class="${"se-siden mobil-link svelte-1vlj9r5"}" href="${"https://vildskud.netlify.app/"}" target="${"blank"}">SE ARTWORKS \u279D</a></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
