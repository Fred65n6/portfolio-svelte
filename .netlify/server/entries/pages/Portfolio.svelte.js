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
  default: () => Portfolio,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_27610834 = require("../../chunks/Header-27610834.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Portfolio_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-n9xk60.svelte-n9xk60{gap:30px}img.svelte-n9xk60.svelte-n9xk60{box-shadow:2px 2px 4px}#portfolio.svelte-n9xk60 a.svelte-n9xk60:hover{color:black}span.svelte-n9xk60.svelte-n9xk60{color:red;font-weight:500}.card.svelte-n9xk60.svelte-n9xk60{display:flex}.container.svelte-n9xk60.svelte-n9xk60{position:relative;width:100%;display:grid;gap:10px}.mobile-link.svelte-n9xk60.svelte-n9xk60{padding-bottom:2rem;text-align:right}.overlay.svelte-n9xk60.svelte-n9xk60{display:grid;place-items:center;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:0.5s ease;background:linear-gradient(to right, rgba(233, 231, 231, 0.8), rgba(255, 255, 255, 0.9)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg)}.text.svelte-n9xk60.svelte-n9xk60{color:white;position:absolute;top:50%;left:50%;justify-items:center;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);transition:0.4s linear}.disclaimer.svelte-n9xk60.svelte-n9xk60{font-style:italic}@media(max-width: 650px){.overlay.svelte-n9xk60.svelte-n9xk60{display:none}.text.svelte-n9xk60.svelte-n9xk60{display:none}.desk-link.svelte-n9xk60.svelte-n9xk60{pointer-events:none}}@media(min-width: 650px){#portfolio.svelte-n9xk60.svelte-n9xk60{display:grid;align-items:center;width:1300px;gap:15px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto}.card.svelte-n9xk60.svelte-n9xk60:hover{transform:scale(1.02);z-index:2;position:static;transition:0.5s linear}.card.svelte-n9xk60:hover img.svelte-n9xk60{filter:blur(3px)}.container.svelte-n9xk60:hover .overlay.svelte-n9xk60{opacity:1}.mobile-link.svelte-n9xk60.svelte-n9xk60{display:none}}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Portfolio = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Portfolio</title>`, ""}`, ""}

${(0, import_index_e03aaaec.v)(import_Header_27610834.H, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading"}" id="${"top"}"><h1>PORTFOLIO</h1></div>



<section id="${"portfolio"}" class="${"svelte-n9xk60"}"><div class="${""}"><a class="${"desk-link svelte-n9xk60"}" sveltekit:prefetch href="${"/Vildskud"}"><div class="${"card  svelte-n9xk60"}"><div class="${"container svelte-n9xk60"}"><img src="${"hero_bg_2.svg"}" alt="${"Spil"}" class="${"svelte-n9xk60"}">
					<div class="${"overlay svelte-n9xk60"}"><div class="${"text svelte-n9xk60"}"><h4>WEBSITE:</h4>
							<h3>VILDSKUD\u279D</h3></div></div></div></div></a></div>
	<div class="${"mobile-link svelte-n9xk60"}"><a sveltekit:prefetch href="${"/Vildskud"}" class="${"svelte-n9xk60"}"><h4>WEBSITE: VILDSKUD \u279D</h4></a></div>

	<div class="${""}"><a class="${"desk-link svelte-n9xk60"}" sveltekit:prefetch href="${"/Musikloftet"}"><div class="${"card  svelte-n9xk60"}"><div class="${"container svelte-n9xk60"}"><img src="${"musikloftet.svg"}" alt="${"Musikloftet"}" class="${"svelte-n9xk60"}">
					<div class="${"overlay svelte-n9xk60"}"><div class="${"text svelte-n9xk60"}"><h4>WEBSITE:</h4>
							<h3>MUSIKLOFTET \u279D</h3></div></div></div></div></a></div>
	<div class="${"mobile-link svelte-n9xk60"}"><a sveltekit:prefetch href="${"/Musikloftet"}" class="${"svelte-n9xk60"}"><h4>WEBSITE: MUSIKLOFTET \u279D</h4></a></div>

	<div class="${""}"><a class="${"desk-link svelte-n9xk60"}" sveltekit:prefetch href="${"/Toast"}"><div class="${"card  svelte-n9xk60"}"><div class="${"container svelte-n9xk60"}"><img src="${"toast_logo.webp"}" alt="${"Toast no.9"}" class="${"svelte-n9xk60"}">
					<div class="${"overlay svelte-n9xk60"}"><div class="${"text svelte-n9xk60"}"><h4>WEBSITE:</h4>
							<h3>TOAST no.9 \u279D</h3></div></div></div></div></a></div>
	<div class="${"mobile-link svelte-n9xk60"}"><a sveltekit:prefetch href="${"/Toast"}" class="${"svelte-n9xk60"}"><h4>WEBSITE: TOAST no.9 \u279D</h4></a></div>

	<div class="${""}"><a class="${"desk-link svelte-n9xk60"}" sveltekit:prefetch href="${"/Artworks"}"><div class="${"card  svelte-n9xk60"}"><div class="${"container svelte-n9xk60"}"><img src="${"sovereign.webp"}" alt="${"Artworks"}" class="${"svelte-n9xk60"}">
					<div class="${"overlay svelte-n9xk60"}"><div class="${"text svelte-n9xk60"}"><h4>DESIGN:</h4>
							<h3>ARTWORKS\u279D</h3></div></div></div></div></a></div>
	<div class="${"mobile-link svelte-n9xk60"}"><a sveltekit:prefetch href="${"/Artworks"}" class="${"svelte-n9xk60"}"><h4>DESIGN: ARTWORKS\u279D</h4></a></div>

	<div class="${""}"><a class="${"desk-link svelte-n9xk60"}" sveltekit:prefetch href="${"/Teater"}"><div class="${"card svelte-n9xk60"}"><div class="${"container svelte-n9xk60"}"><img src="${"grob_logo.webp"}" alt="${"Teater grob"}" class="${"svelte-n9xk60"}">
					<div class="${"overlay svelte-n9xk60"}"><div class="${"text svelte-n9xk60"}"><h4>KAMPAGNESITE:</h4>
							<h3>TEATER GROB\u279D</h3></div></div></div></div></a></div>
	<div class="${"mobile-link svelte-n9xk60"}"><a sveltekit:prefetch href="${"/Teater"}" class="${"svelte-n9xk60"}"><h4>KAMPAGENSITE: TEATER GROB \u279D</h4></a></div>
	

	<div class="${""}"><a class="${"desk-link svelte-n9xk60"}" sveltekit:prefetch href="${"/Olklubben"}"><div class="${"card  svelte-n9xk60"}"><div class="${"container svelte-n9xk60"}"><img src="${"olklubben_logo.svg"}" alt="${"\xD8lklubben"}" class="${"svelte-n9xk60"}">
					<div class="${"overlay svelte-n9xk60"}"><div class="${"text svelte-n9xk60"}"><h4>WEBSITE:</h4>
							<h3>\xD8LKLUBBEN\u279D</h3></div></div></div></div></a></div>
	<div class="${"mobile-link svelte-n9xk60"}"><a sveltekit:prefetch href="${"/Olklubben"}" class="${"svelte-n9xk60"}"><h4>WEBSITE: \xD8LKLUBBEN \u279D</h4></a></div></section>

<section class="${"svelte-n9xk60"}"><div class="${"disclaimer svelte-n9xk60"}"><p><span class="${"svelte-n9xk60"}">* </span> Siderne er ikke f\xE6rdige produkter, men opgaver der har haft et bestemt fokuspunkt,
			eller en problemstilling der skulle l\xF8ses. Derfor vil der v\xE6re ufuldtendte stier og forskellige
			mangler ved siderne.
		</p></div>
	<div class="${"til-toppen hover:pulsate-fwd"}"><a href="${"#top"}">\uFE3D<br> Til toppen</a></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
