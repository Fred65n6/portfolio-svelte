import { c as create_ssr_component } from "../../chunks/index-8f0b34dd.js";
var Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-16859tz{font-size:5.5rem;letter-spacing:1rem;padding-bottom:3px;text-decoration:none;color:WHITE}a.svelte-16859tz{position:relative;top:6rem;font-size:3.5rem;scroll-margin-top:50px;scroll-behavior:smooth;color:white}a.svelte-16859tz:hover{text-decoration:none}.hero.svelte-16859tz{background-image:url('../../static/background.img_portfolio.webp');place-self:center;background-size:cover;position:static;z-index:5;overflow:hidden;width:100%;height:100vh;padding-top:14rem;padding-bottom:11.9rem;border-block:solid 6px;border-image:linear-gradient(\r\n				90deg,\r\n				rgb(152, 6, 6, 0.7) 0%,\r\n				rgb(179, 84, 26, 0.7) 27%,\r\n				rgb(169, 159, 21, 0.7) 49%,\r\n				rgb(65, 141, 187, 0.7) 67%,\r\n				rgb(7, 53, 162, 0.7) 100%\r\n			)\r\n			1}@media(max-width: 650px){.hero.svelte-16859tz{padding-block:15rem;padding-inline:2rem}h1.svelte-16859tz{font-size:1.5rem}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero bg-pan-left bg-hero2 svelte-16859tz"}"><div class="${"hero-border grid place-items-center md:border-none "}"><img class="${"fade-in "}" src="${"./frederik_milland.svg"}" alt="${"logo"}">
		<h1 class="${"tracking-in-expand-fwd svelte-16859tz"}">WEBDESIGNER</h1>
		<a class="${"pulsate-fwd svelte-16859tz"}" href="${"#forside"}">\uFE3E</a></div>
</div>`;
});
export { Hero as default };
