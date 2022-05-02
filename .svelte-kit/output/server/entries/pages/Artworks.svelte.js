import { c as create_ssr_component, v as validate_component } from "../../chunks/index-e03aaaec.js";
import { H as Header_2 } from "../../chunks/Header_2-0c1d907c.js";
import { d as dev, b as browser } from "../../chunks/env-14926626.js";
import "../../chunks/stores-5fe3ad3b.js";
var Artworks_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-i7v3g{max-width:1300px;width:100%;display:grid;grid-template-columns:1fr;gap:50px}.heading.svelte-i7v3g{margin-top:3rem;background-image:url('../../static/sovereign.webp');background-repeat:no-repeat;background-size:contain;width:100%;height:15rem}.desk-link.svelte-i7v3g{display:none}.links.svelte-i7v3g{display:flex;justify-content:space-between;align-items:center;gap:80px}.se-siden.svelte-i7v3g{border:solid 2px white;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1;border-radius:20px;padding:0.5rem}section.svelte-i7v3g{display:grid}@media(min-width: 650px){.container.svelte-i7v3g{grid-template-columns:1fr 1fr 1fr}.heading.svelte-i7v3g{background-attachment:fixed;position:static;height:35rem;margin-top:4.2rem}.links.svelte-i7v3g{width:1100px}.mobil-link.svelte-i7v3g{display:none}.desk-link.svelte-i7v3g{display:grid}}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Artworks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header_2, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading svelte-i7v3g"}"></div>

<section class="${"svelte-i7v3g"}"><h1>Artworks</h1></section>

<section class="${"svelte-i7v3g"}"><div class="${"container svelte-i7v3g"}"><div><h4>Opgaven</h4>
			<p>Dette er artworks som er lavet for det band, som jeg spiller i ved siden af at l\xE6se
				multimediedesign. Alle artworks som vi har brugt gennem tiden har jeg lavet, og er ogs\xE5 det
				der startede min interesse for grafisk design.
			</p></div>

		<div><h4>Processen</h4>
			<p>Der er mange forskellige processer i at lave de forskellige artworks. Som regel starter det
				med at jeg snakker med de andre bandmedlemmer om hvilke tanker og f\xF8lelser den sang eller
				det v\xE6rk, som jeg laver artwork til t\xE6nder i dem. <br>
				Derefter tager jeg alle de ting med og og begynder at tegne skitser i h\xE5nden. N\xE5r jeg har nogle
				forskellige opl\xE6g s\xE5 begynder jeg at pr\xF8ve at s\xE6tte dem op i Photoshop. Hvis jeg skal bruge fotos,
				s\xE5 plejer jeg som regel at finde nogle placeholder fotos, indtil jeg kan f\xE5 taget nogle selv.
			</p></div>

		<div><h4>L\xF8sningen</h4>
			<p>I sidste ende er vi endt med nogle flotte artworks, som vi alle er meget glade for. De har
				alle en lettere r\xE5 stil, som ogs\xE5 gerne skulle afspejle musikken.
			</p></div></div></section>

<section class="${"grid place-items-center desk-link svelte-i7v3g"}"><a class="${"se-siden svelte-i7v3g"}" href="${"https://skuret.eu/kea/1semester/artworks/"}" target="${"blank"}">SE ARTWORKS \u279D</a></section>

<section class="${"svelte-i7v3g"}"><div class="${"links svelte-i7v3g"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
		<a class="${"se-siden mobil-link svelte-i7v3g"}" href="${"https://skuret.eu/kea/1semester/artworks/"}" target="${"blank"}">SE ARTWORKS \u279D</a></div>
</section>`;
});
export { Artworks as default, hydrate, prerender, router };
