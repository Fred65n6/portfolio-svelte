import { c as create_ssr_component } from "../../chunks/index-8f0b34dd.js";
import { d as dev, b as browser } from "../../chunks/env-14926626.js";
var Toast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-11h9vqr.svelte-11h9vqr{position:relative;width:100%;display:grid;gap:10px}img.svelte-11h9vqr.svelte-11h9vqr{box-shadow:2px 2px 4px}.overlay.svelte-11h9vqr.svelte-11h9vqr{display:grid;place-items:center;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:0.5s ease;background:linear-gradient(to right, rgba(233, 231, 231, 0.8), rgba(255, 255, 255, 0.9)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg)}.text.svelte-11h9vqr.svelte-11h9vqr{color:white;position:absolute;top:50%;left:50%;justify-items:center;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);transition:0.4s linear}.se-siden.svelte-11h9vqr.svelte-11h9vqr{border:solid 1px black;border-radius:12px;padding:0.5rem}.link.svelte-11h9vqr.svelte-11h9vqr{font-size:2.5rem}.card.svelte-11h9vqr.svelte-11h9vqr:hover{transform:scale(1.02);z-index:2;position:static;transition:0.5s linear}.card.svelte-11h9vqr:hover img.svelte-11h9vqr{filter:blur(3px)}.card.svelte-11h9vqr:hover .overlay.svelte-11h9vqr{opacity:1}section.svelte-11h9vqr.svelte-11h9vqr{display:grid}img.svelte-11h9vqr.svelte-11h9vqr{width:60rem}.container.svelte-11h9vqr.svelte-11h9vqr{display:grid;max-width:980px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"heading"}"><h2>Toast no.9</h2></div>

<div class="${"card  svelte-11h9vqr"}"><div class="${"container svelte-11h9vqr"}"><img src="${"toast.webp"}" alt="${"Toast no.9"}" class="${"svelte-11h9vqr"}">
		<div class="${"overlay svelte-11h9vqr"}"><div class="${"text svelte-11h9vqr"}"><a class="${"link svelte-11h9vqr"}" href="${"https://skuret.eu/kea/toastno9"}" target="${"blank"}">SE SIDEN \u279D</a></div></div></div></div>

<div class="${"container svelte-11h9vqr"}"><section class="${"svelte-11h9vqr"}"><h3>Opgaven</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p></section>

	<section class="${"svelte-11h9vqr"}"><h3>Udfordringer og proces</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p></section>

	<section class="${"svelte-11h9vqr"}"><h3>L\xF8sning</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus? Aspernatur illum illo
			atque quia, temporibus aliquam magnam expedita dignissimos obcaecati adipisci voluptatum
			eaque, voluptate sapiente necessitatibus cumque ipsa aperiam voluptas harum omnis. Earum velit
			doloribus suscipit eaque ullam, odio tenetur, quod consequatur vero repellendus veniam
			molestias iusto, recusandae qui.
		</p></section>

	<section class="${"svelte-11h9vqr"}"><div class="${"my-8 flex justify-between"}"><a sveltekit:prefetch href="${"/Portfolio"}">\u{1F814} G\xC5 TILBAGE</a>
			<a class="${"se-siden svelte-11h9vqr"}" href="${"https://skuret.eu/kea/toastno9"}" target="${"blank"}">SE SIDEN \u279D</a></div></section>
</div>`;
});
export { Toast as default, hydrate, prerender, router };
