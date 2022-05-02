
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/Frede/OneDrive/Billeder/Skrivebord/kea/portfolio-svelte/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/Frede/OneDrive/Billeder/Skrivebord/kea/portfolio-svelte/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/Frede/OneDrive/Billeder/Skrivebord/kea/portfolio-svelte/.svelte-kit/runtime/env.js';
import * as user_hooks from "..\\..\\src\\hooks.js";

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\r\n<html class=\"scroll-smooth\" lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<meta name=\"description\" content=\"Svelte demo app\" />\r\n\t\t<link class=\"favicon\" rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n\t\t<link\r\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap\"\r\n\t\t\trel=\"stylesheet\"\r\n\t\t/>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div>" + body + "</div>\r\n\t</body>\r\n</html>\r\n\r\n<style></style>\r\n";

let read = null;

set_paths({"base":"","assets":""});

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ event, resolve }) => resolve(event)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		const hooks = get_hooks(user_hooks);

		this.options = {
			amp: false,
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
