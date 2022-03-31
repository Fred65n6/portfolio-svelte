import { c as create_ssr_component } from "../../chunks/index-8f0b34dd.js";
import { d as dev, b as browser } from "../../chunks/env-14926626.js";
var Ungdomsbyen_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-lwnjp5.svelte-lwnjp5{position:relative;width:100%;display:grid;gap:10px}img.svelte-lwnjp5.svelte-lwnjp5{box-shadow:2px 2px 4px}.se-siden.svelte-lwnjp5.svelte-lwnjp5{border:solid 1px black;border-radius:12px;padding:0.5rem}.link.svelte-lwnjp5.svelte-lwnjp5{font-size:2.5rem}.overlay.svelte-lwnjp5.svelte-lwnjp5{display:grid;place-items:center;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:0.5s ease;background:linear-gradient(to right, rgba(233, 231, 231, 0.8), rgba(255, 255, 255, 0.9)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg)}.text.svelte-lwnjp5.svelte-lwnjp5{color:white;position:absolute;top:50%;left:50%;justify-items:center;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);transition:0.4s linear}.card.svelte-lwnjp5.svelte-lwnjp5:hover{transform:scale(1.02);z-index:2;position:static;transition:0.5s linear}.card.svelte-lwnjp5:hover img.svelte-lwnjp5{filter:blur(3px)}.card.svelte-lwnjp5:hover .overlay.svelte-lwnjp5{opacity:1}section.svelte-lwnjp5.svelte-lwnjp5{display:grid}img.svelte-lwnjp5.svelte-lwnjp5{width:60rem}.container.svelte-lwnjp5.svelte-lwnjp5{display:grid;max-width:980px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Ungdomsbyen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"heading"}"><h2>Ungdomsbyen</h2></div>

<div class="${"card  svelte-lwnjp5"}"><div class="${"container svelte-lwnjp5"}"><img src="${"ungdomsbyen.webp"}" alt="${"Ungdomsbyen"}" class="${"svelte-lwnjp5"}">
		<div class="${"overlay svelte-lwnjp5"}"><div class="${"text svelte-lwnjp5"}"><a class="${"link svelte-lwnjp5"}" href="${"https://skuret.eu/kea/ungdomsbyen"}" target="${"blank"}">SE SIDEN \u279D</a></div></div></div></div>

<div class="${"container svelte-lwnjp5"}"><section class="${"svelte-lwnjp5"}"><h3>Opgaven</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p></section>

	<section class="${"svelte-lwnjp5"}"><h3>Udfordringer og proces</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p></section>

	<section class="${"svelte-lwnjp5"}"><h3>L\xF8sning</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus? Aspernatur illum illo
			atque quia, temporibus aliquam magnam expedita dignissimos obcaecati adipisci voluptatum
			eaque, voluptate sapiente necessitatibus cumque ipsa aperiam voluptas harum omnis. Earum velit
			doloribus suscipit eaque ullam, odio tenetur, quod consequatur vero repellendus veniam
			molestias iusto, recusandae qui.
		</p></section>

	<section class="${"svelte-lwnjp5"}"><div class="${"my-8 flex justify-between"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
			<a class="${"se-siden svelte-lwnjp5"}" href="${"https://skuret.eu/kea/ungdomsbyen"}" target="${"blank"}">SE SIDEN \u279D</a></div></section>
</div>`;
});
export { Ungdomsbyen as default, hydrate, prerender, router };
