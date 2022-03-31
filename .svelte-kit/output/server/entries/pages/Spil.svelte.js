import { c as create_ssr_component } from "../../chunks/index-8f0b34dd.js";
import { d as dev, b as browser } from "../../chunks/env-14926626.js";
var Spil_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-47teqd.svelte-47teqd{position:relative;width:100%;display:grid;gap:10px}img.svelte-47teqd.svelte-47teqd{box-shadow:2px 2px 4px}.se-siden.svelte-47teqd.svelte-47teqd{border:solid 1px black;border-radius:12px;padding:0.5rem}.link.svelte-47teqd.svelte-47teqd{font-size:2.5rem}.overlay.svelte-47teqd.svelte-47teqd{display:grid;place-items:center;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:0.5s ease;background:linear-gradient(to right, rgba(233, 231, 231, 0.8), rgba(255, 255, 255, 0.9)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg)}.text.svelte-47teqd.svelte-47teqd{color:white;position:absolute;top:50%;left:50%;justify-items:center;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);transition:0.4s linear}.card.svelte-47teqd.svelte-47teqd:hover{transform:scale(1.02);z-index:2;position:static;transition:0.5s linear}.card.svelte-47teqd:hover img.svelte-47teqd{filter:blur(3px)}.card.svelte-47teqd:hover .overlay.svelte-47teqd{opacity:1}section.svelte-47teqd.svelte-47teqd{display:grid}img.svelte-47teqd.svelte-47teqd{width:60rem}.container.svelte-47teqd.svelte-47teqd{display:grid;max-width:980px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Spil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"heading"}"><h2>Impress A Girl</h2></div>

<div class="${"card  svelte-47teqd"}"><div class="${"container svelte-47teqd"}"><img src="${"spil.webp"}" alt="${"spil"}" class="${"svelte-47teqd"}">
		<div class="${"overlay svelte-47teqd"}"><div class="${"text svelte-47teqd"}"><a class="${"link svelte-47teqd"}" href="${"https://skuret.eu/kea/1semester/04_animation/spil/"}" target="${"blank"}">SE SIDEN \u279D</a></div></div></div></div>

<div class="${"container svelte-47teqd"}"><section class="${"svelte-47teqd"}"><h3>Opgaven</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p></section>

	<section class="${"svelte-47teqd"}"><h3>Udfordringer og proces</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p></section>

	<section class="${"svelte-47teqd"}"><h3>L\xF8sning</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus? Aspernatur illum illo
			atque quia, temporibus aliquam magnam expedita dignissimos obcaecati adipisci voluptatum
			eaque, voluptate sapiente necessitatibus cumque ipsa aperiam voluptas harum omnis. Earum velit
			doloribus suscipit eaque ullam, odio tenetur, quod consequatur vero repellendus veniam
			molestias iusto, recusandae qui.
		</p></section>

	<section class="${"svelte-47teqd"}"><div class="${"my-8 flex justify-between"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
			<a class="${"se-siden svelte-47teqd"}" href="${"https://skuret.eu/kea/1semester/04_animation/spil/"}" target="${"blank"}">SE SIDEN \u279D</a></div></section>
</div>`;
});
export { Spil as default, hydrate, prerender, router };
