import { c as create_ssr_component, v as validate_component } from "../../chunks/index-e03aaaec.js";
import Footer from "./Footer.svelte.js";
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
