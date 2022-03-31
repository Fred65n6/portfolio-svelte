const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\Musikloftet.svelte"),
	() => import("..\\..\\src\\routes\\Ungdomsbyen.svelte"),
	() => import("..\\..\\src\\routes\\Burgermenu.svelte"),
	() => import("..\\..\\src\\routes\\Olklubben.svelte"),
	() => import("..\\..\\src\\routes\\Portfolio.svelte"),
	() => import("..\\..\\src\\routes\\Artworks.svelte"),
	() => import("..\\..\\src\\routes\\Footer.svelte"),
	() => import("..\\..\\src\\routes\\Om_mig.svelte"),
	() => import("..\\..\\src\\routes\\Teater.svelte"),
	() => import("..\\..\\src\\routes\\Toast.svelte"),
	() => import("..\\..\\src\\routes\\Hero.svelte"),
	() => import("..\\..\\src\\routes\\Spil.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/Musikloftet.svelte
	[/^\/Musikloftet\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Ungdomsbyen.svelte
	[/^\/Ungdomsbyen\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/Burgermenu.svelte
	[/^\/Burgermenu\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/Olklubben.svelte
	[/^\/Olklubben\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/Portfolio.svelte
	[/^\/Portfolio\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/Artworks.svelte
	[/^\/Artworks\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/Footer.svelte
	[/^\/Footer\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/Om_mig.svelte
	[/^\/Om_mig\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/Teater.svelte
	[/^\/Teater\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/Toast.svelte
	[/^\/Toast\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/Hero.svelte
	[/^\/Hero\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/Spil.svelte
	[/^\/Spil\/?$/, [c[0], c[14]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];