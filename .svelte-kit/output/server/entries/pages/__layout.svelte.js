import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-8f0b34dd.js";
import { p as page, B as Burgermenu } from "../../chunks/Burgermenu-2af3965e.js";
import Footer from "./Footer.svelte.js";
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 650px){header.svelte-9vlwq7.svelte-9vlwq7{border-bottom:solid 2px black;position:fixed;z-index:3;margin:0 auto;gap:30px;display:flex;justify-content:space-between;align-items:center;padding:10px;right:0;width:100%;background:linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),\r\n				url(https://grainy-gradients.vercel.app/noise.svg)}.corner.svelte-9vlwq7 img.svelte-9vlwq7{filter:invert(1);width:4rem;height:auto;padding:5px;object-fit:contain}nav.svelte-9vlwq7.svelte-9vlwq7{display:flex;justify-content:center}ul.svelte-9vlwq7.svelte-9vlwq7{gap:30px;position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-9vlwq7.svelte-9vlwq7{position:relative;height:100%}nav.svelte-9vlwq7 a.svelte-9vlwq7{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:400;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}img.svelte-9vlwq7.svelte-9vlwq7:hover{color:rgb(6, 128, 172);text-decoration:underline}a.svelte-9vlwq7.svelte-9vlwq7:hover{color:rgb(6, 128, 172);text-decoration:underline}}@media(max-width: 650px){header.svelte-9vlwq7.svelte-9vlwq7{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"svelte-9vlwq7"}"><div class="${"corner svelte-9vlwq7"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-9vlwq7"}"><img class="${"hover:pulsate-fwd svelte-9vlwq7"}" src="${"./FM.svg"}" alt="${"SvelteKit"}"></a></div>

	<nav class="${"svelte-9vlwq7"}"><ul class="${"svelte-9vlwq7"}"><li class="${["svelte-9vlwq7", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-9vlwq7"}">Forside</a></li>
			<li class="${["svelte-9vlwq7", $page.url.pathname === "/Portfolio" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-9vlwq7"}">Portfolio</a></li>
			<li class="${["svelte-9vlwq7", $page.url.pathname === "/Om_mig" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-9vlwq7"}">om mig</a></li></ul></nav>
</header>`;
});
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Burgermenu, "Burgermenu").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
