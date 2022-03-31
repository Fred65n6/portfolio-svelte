import { g as getContext, c as create_ssr_component, a as subscribe } from "./index-8f0b34dd.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Burgermenu_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 650px){.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0,.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before,.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after{box-sizing:border-box}body.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{font-size:1.2em;line-height:1.6;overflow-x:hidden}img.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{width:60px;filter:invert(1)}label.svelte-1n7l5c0 .menu.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{position:fixed;right:-100px;top:-100px;z-index:4;width:200px;height:200px;background:white;border-radius:50% 50% 50% 50%;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;box-shadow:0 0 0 0 #fff, 0 0 0 0 #fff;cursor:pointer}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{position:absolute;top:135px;left:50px;width:30px;height:3px;background:black;border-radius:12px;display:block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after,label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before{-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;content:'';position:absolute;display:block;width:100%;height:100%;background:black;border-radius:12px}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before{top:-10px}label.svelte-1n7l5c0 .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after{bottom:-10px}label.svelte-1n7l5c0 input.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{display:none}label.svelte-1n7l5c0 input.svelte-1n7l5c0:checked+.menu.svelte-1n7l5c0.svelte-1n7l5c0{box-shadow:0 0 0 100vw #fff, 0 0 0 100vh #fff;border-radius:0}label.svelte-1n7l5c0 input:checked+.menu .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{-webkit-transform:rotate(45deg);transform:rotate(45deg)}label.svelte-1n7l5c0 input:checked+.menu .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);bottom:0}label.svelte-1n7l5c0 input:checked+.menu .hamburger.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0:before{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:0}label.svelte-1n7l5c0 input.svelte-1n7l5c0:checked+.menu.svelte-1n7l5c0+ul.svelte-1n7l5c0{opacity:1}label.svelte-1n7l5c0 ul.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{position:fixed;display:grid;place-items:center;text-align:center;z-index:200;gap:20px;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);opacity:0;-webkit-transition:0.25s 0s ease-in-out;transition:0.25s 0s ease-in-out}label.svelte-1n7l5c0 a.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{margin-bottom:1em;display:block;color:black;text-decoration:none}}@media(min-width: 650px){label.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0.svelte-1n7l5c0{display:none}}",
  map: null
};
const Burgermenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<body class="${"svelte-1n7l5c0"}"><label class="${"svelte-1n7l5c0"}"><input type="${"checkbox"}" class="${"svelte-1n7l5c0"}">
		<span class="${"menu svelte-1n7l5c0"}"><span class="${"hamburger svelte-1n7l5c0"}"></span></span>

		<ul class="${"svelte-1n7l5c0"}"><li class="${"svelte-1n7l5c0"}"><img src="${"FM.svg"}" alt="${""}" class="${"svelte-1n7l5c0"}"></li>
			<br class="${"svelte-1n7l5c0"}">
			<li class="${["svelte-1n7l5c0", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1n7l5c0"}">FORSIDE</a></li>
			<li class="${["svelte-1n7l5c0", $page.url.pathname === "/Portfolio" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Portfolio"}" class="${"svelte-1n7l5c0"}">PORTFOLIO</a></li>
			<li class="${["svelte-1n7l5c0", $page.url.pathname === "/Om_mig" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/Om_mig"}" class="${"svelte-1n7l5c0"}">OM MIG</a></li></ul></label>
</body>`;
});
export { Burgermenu as B, page as p };
