import { c as create_ssr_component, v as validate_component } from "../../chunks/index-e03aaaec.js";
import { H as Header } from "../../chunks/Header-27610834.js";
import Hero from "./Hero.svelte.js";
import "../../chunks/stores-5fe3ad3b.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spacer.svelte-s6jc7f.svelte-s6jc7f{padding:2rem;width:100%;display:grid;place-items:center}#forside.svelte-s6jc7f a.svelte-s6jc7f:hover{color:black}@media(max-width: 650px){section.svelte-s6jc7f.svelte-s6jc7f{padding-block:6rem;position:relative;width:100%;display:grid;gap:10px}}.text-box.svelte-s6jc7f.svelte-s6jc7f{padding:2rem;height:auto;background:rgba(218, 217, 217, 0.605);box-shadow:2px 2px 4px;height:16rem}.text-box.svelte-s6jc7f.svelte-s6jc7f:hover{background:linear-gradient(to right, rgba(196, 196, 196, 0.7), rgba(255, 255, 255, 0.7)),\r\n			url(https://grainy-gradients.vercel.app/noise.svg);transform:scale(1.02);z-index:2;position:static;transition:0.5s linear}span.svelte-s6jc7f.svelte-s6jc7f{padding-left:1rem;font-weight:900}a.svelte-s6jc7f.svelte-s6jc7f:hover{text-decoration:none}@media(min-width: 650px){section.svelte-s6jc7f.svelte-s6jc7f{display:grid;grid-template-columns:1fr 1fr;place-items:center;width:100%;padding-block:12rem}.spacer.svelte-s6jc7f.svelte-s6jc7f{padding:4rem;width:100%;display:grid;place-items:center}#box-1.svelte-s6jc7f.svelte-s6jc7f{border-top:solid 4px white;border-image:linear-gradient(\r\n					90deg,\r\n					rgb(152, 6, 6) 0%,\r\n					rgb(179, 84, 26) 27%,\r\n					rgb(169, 159, 21) 49%,\r\n					rgb(65, 141, 187) 67%,\r\n					rgb(7, 53, 162) 100%\r\n				)\r\n				1;border-right:solid 4px white;border-image:linear-gradient(\r\n					90deg,\r\n					rgb(152, 6, 6) 0%,\r\n					rgb(179, 84, 26) 27%,\r\n					rgb(169, 159, 21) 49%,\r\n					rgb(65, 141, 187) 67%,\r\n					rgb(7, 53, 162) 100%\r\n				)\r\n				1}#box-2.svelte-s6jc7f.svelte-s6jc7f{border-bottom:solid 4px white;border-image:linear-gradient(\r\n					90deg,\r\n					rgb(7, 53, 162) 0%,\r\n					rgb(65, 141, 187) 27%,\r\n					rgb(169, 159, 21) 49%,\r\n					rgb(179, 84, 26) 67%,\r\n					rgb(152, 6, 6) 100%\r\n				)\r\n				1}}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>FM Design</title>`, ""}`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<section id="${"forside"}" class="${"svelte-s6jc7f"}"><div id="${"box-1"}" class="${"spacer  svelte-s6jc7f"}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-s6jc7f"}"><div class="${"text-box  svelte-s6jc7f"}"><h2>Portfolio</h2>
				<p>Se nogle af de forskellige projekter som jeg har arbejdet p\xE5 i den tid jeg har v\xE6ret
					studerende p\xE5 KEA<span class="${"svelte-s6jc7f"}">\u279D</span></p></div></a></div>

	<div id="${"box-2"}" class="${"spacer  svelte-s6jc7f"}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-s6jc7f"}"><div class="${"text-box  svelte-s6jc7f"}"><h2>Om mig</h2>
				<p>L\xE6r mig lidt bedre at kende og l\xE6s om hvilke kompetencer jeg besidder<span class="${"svelte-s6jc7f"}">\u279D</span></p></div></a></div>
</section>`;
});
export { Routes as default, prerender };
