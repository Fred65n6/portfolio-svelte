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
  default: () => Om_mig,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var Om_mig_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-e01wyf.svelte-e01wyf{gap:30px;display:grid;margin-inline:1rem;padding-block:1rem}address.svelte-e01wyf.svelte-e01wyf{font-style:normal;display:grid;gap:20px;text-align:center;margin-top:2rem}.kontakt.svelte-e01wyf.svelte-e01wyf{display:grid;place-items:center;margin-top:2rem}address.svelte-e01wyf p.svelte-e01wyf{font-weight:400}@media(min-width: 650px){address.svelte-e01wyf.svelte-e01wyf{grid-template-columns:1fr 1fr 1fr}.text.svelte-e01wyf.svelte-e01wyf{grid-template-columns:1fr 1fr}.box.svelte-e01wyf.svelte-e01wyf{grid-template-columns:1fr}}.box.svelte-e01wyf.svelte-e01wyf{padding-block:6rem;text-align:center;box-shadow:2px 2px 4px;background:rgba(218, 217, 217, 0.605);padding:4rem;display:grid}.container.svelte-e01wyf.svelte-e01wyf{margin-top:3rem;border-block:solid 6px;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1}.pictures.svelte-e01wyf.svelte-e01wyf{object-fit:cover;display:flex}article.svelte-e01wyf.svelte-e01wyf{margin-block:3rem;max-width:900px;display:grid;place-items:center}.text.svelte-e01wyf.svelte-e01wyf{gap:1rem;display:grid}li.svelte-e01wyf.svelte-e01wyf{font-weight:100;font-size:1.1rem}address.svelte-e01wyf.svelte-e01wyf{font-size:1.1rem}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Om_mig = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Om mig</title>`, ""}`, ""}

<div class="${"heading"}"><h1>OM MIG</h1></div>

<div class="${"container svelte-e01wyf"}"><div class="${"pictures svelte-e01wyf"}"><img src="${"./om-mig.webp"}" alt="${"port\xE6t"}"></div></div>
<section id="${"om-mig"}" class="${"svelte-e01wyf"}"><article class="${"svelte-e01wyf"}"><h2>Frederik Milland</h2>
		<div class="${"text svelte-e01wyf"}"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores porro rerum
				temporibus possimus. Nostrum ex odio cupiditate quia, corrupti ea nobis voluptatum ipsa
				voluptatibus dolore dolorem reprehenderit architecto nisi consectetur, fugit laborum modi.
				Nemo impedit tempore mollitia, et voluptatum aperiam sed aliquid. Ipsam, tempora optio
				veniam facere perferendis nihil, alias iste illo esse sint rerum quis accusamus dolores
				recusandae officia quos cupiditate ratione laborum, consequuntur nobis vel pariatur modi
				autem! Earum magni quaerat facere.
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi officiis nulla qui atque
				aliquam quo nesciunt, quae ex mollitia. Sint atque quae fugit totam reprehenderit numquam
				veniam sapiente. Mollitia, distinctio? Consequuntur officia exercitationem vero esse, eius
				veniam earum temporibus laborum possimus quisquam dolore reprehenderit. Quia, odit dolor.
				Pariatur, necessitatibus! Unde minima, assumenda vero natus optio quaerat fugiat molestias
				cumque mollitia tempora amet placeat nihil aut id ducimus sed, rem nesciunt, deserunt
				laborum expedita porro.
			</p></div></article></section>

<div class="${"box svelte-e01wyf"}"><div class="${"kompetencer"}"><h2>Kompetencer</h2>
		<ol><li class="${"svelte-e01wyf"}">- Erfaring med Photoshop, Illustrator, Premiere Pro, InDesign og Figma</li>
			<br>
			<li class="${"svelte-e01wyf"}">- Erfaring med at kode basic html, css og javascript, samt frameworks som Svelte og Tailwind
			</li>
			<br>
			<li class="${"svelte-e01wyf"}">- Erfaring med ops\xE6tning af hjemmesider i diverse CMS som wordpress og shopify</li></ol></div></div>

<section class="${"svelte-e01wyf"}"><div class="${"kontakt svelte-e01wyf"}"><h2>Kontakt</h2>
		<address class="${"svelte-e01wyf"}"><div class="${""}"><p class="${"svelte-e01wyf"}">E-mail:</p>
				<a href="${"mailto:frederik-milland@hotmail.com"}">frederik-milland@hotmail.com</a></div>
			<div class="${""}"><p class="${"svelte-e01wyf"}">Telefon:</p>
				<a href="${"tel:+4522901244"}">+4522901244</a></div>
			<div class="${""}"><p class="${"svelte-e01wyf"}">LinkedIn</p>
				<a href="${"https://www.linkedin.com/in/frederik-milland-a2b671205/"}">https://bit.ly/3qOJCFY</a></div></address></div></section>

<div class="${"til-toppen hover:pulsate-fwd"}"><a href="${"#top"}">\uFE3D<br> Til toppen</a>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
