import { c as create_ssr_component, v as validate_component } from "../../chunks/index-e03aaaec.js";
import { H as Header_2 } from "../../chunks/Header_2-0c1d907c.js";
import { d as dev, b as browser } from "../../chunks/env-14926626.js";
import "../../chunks/stores-5fe3ad3b.js";
var Toast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-2mtujb{max-width:1300px;width:100%;display:grid;grid-template-columns:1fr;gap:50px}.heading.svelte-2mtujb{margin-top:3rem;background-image:url('../../static/toast_logo.webp');background-repeat:no-repeat;background-size:contain;width:100%;height:15rem}.desk-link.svelte-2mtujb{display:none}.links.svelte-2mtujb{display:flex;justify-content:space-between;align-items:center;gap:80px}.se-siden.svelte-2mtujb{border:solid 2px white;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6) 0%,\r\n				rgb(179, 84, 26) 27%,\r\n				rgb(169, 159, 21) 49%,\r\n				rgb(65, 141, 187) 67%,\r\n				rgb(7, 53, 162) 100%\r\n			)\r\n			1;border-radius:20px;padding:0.5rem}section.svelte-2mtujb{display:grid}@media(min-width: 650px){.container.svelte-2mtujb{grid-template-columns:1fr 1fr 1fr}.heading.svelte-2mtujb{background-attachment:fixed;position:static;height:35rem;margin-top:4.2rem}.links.svelte-2mtujb{width:1100px}.mobil-link.svelte-2mtujb{display:none}.desk-link.svelte-2mtujb{display:grid}}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header_2, "Header").$$render($$result, {}, {}, {})}

<div class="${"heading svelte-2mtujb"}"></div>

<section class="${"svelte-2mtujb"}"><h1>Toast no.9</h1></section>

<section class="${"svelte-2mtujb"}"><div class="${"container svelte-2mtujb"}"><div><h4>Opgaven</h4>
			<p>Dette var eksamensprojektet p\xE5 2. semester. Det var et stort projekt, hvor vi kom ud i alle
				afkroge af det at v\xE6re Multimedie Designer. Vores case var den lille charmerende toast caf\xE9
				&#39;Toast no.9&#39;, som vi skulle udvikle en hjemmeside for, samt at producere videomateriale og
				en so-me strategi.
			</p></div>

		<div><h4>Processen</h4>
			<p>At udfylde alle kravene der var i denne opgave, var en stor mundfuld, og kr\xE6vede at vi
				udeligerede ansvarsomr\xE5der i gruppen. Mit hovedansvarsomr\xE5de var design og ops\xE6tning af
				hjemmesiden. <br> I designprocessen var vi meget inspirerede af 90&#39;er stil og udtryk. Vi vil
				ogs\xE5 gerne have etr let og legende udtryk, derfor valgte vi at tegne forskellige objekter fra
				caf\xE9en, og s\xE6tte dem ind p\xE5 siden som grafik.
			</p></div>

		<div><h4>L\xF8sningen</h4>
			<p>Den endelige l\xF8sning blev et hyggeligt, gult og lyser\xF8dt samsurium af tegninger og gakkede
				elementer, som afspejlede caf\xE9en og ejeren Boris personlighed. Sitet blev pr\xE6senteret for
				ejeren af &#39;Toast no.9&#39; som var utrolig tilfreds, med den visuelle identitet vi havde skabt
				for hans caf\xE9.
			</p></div></div></section>

<section class="${"grid place-items-center desk-link svelte-2mtujb"}"><a class="${"se-siden svelte-2mtujb"}" href="${"https://skuret.eu/kea/toastno9"}" target="${"blank"}">SE SIDEN \u279D</a></section>

<section class="${"svelte-2mtujb"}"><div class="${"links svelte-2mtujb"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
		<a class="${"se-siden mobil-link svelte-2mtujb"}" href="${"https://skuret.eu/kea/toastno9"}" target="${"blank"}">SE SIDEN \u279D</a></div>
</section>`;
});
export { Toast as default, hydrate, prerender, router };
