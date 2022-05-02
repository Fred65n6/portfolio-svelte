export const manifest = {
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","background.img_portfolio-2.jpg","background.img_portfolio.jpg","background.img_portfolio.png","background.img_portfolio.webp","background.png","background.webp","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.svg","fm.png","FM.svg","frederik_milland.svg","grob.png","grob.webp","grob_logo.png","grob_logo.webp","hero_bg_2.png","hero_bg_2.svg","kramer.png","kramer.webp","logo.png","musikloftet.png","musikloftet.svg","musikloftet.webp","olklubben_logo.svg","om-mig.png","om-mig.webp","PhInstagramLogoLight.svg","portræt-3.jpg","portræt-3.webp","Rectangle 540.png","robots.txt","site.webmanifest","sovereign.png","sovereign.webp","sovereign_edits-70.jpg","spil.png","spil.webp","svelte-welcome.png","svelte-welcome.webp","toast.png","toast.webp","toast_logo.webp","ungdomsbyen.png","ungdomsbyen.webp","vildskud.png","zach-miles-Y84-eo8drzk-unsplash.png"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain",".webmanifest":"application/manifest+json"},
		entry: {"file":"start-2a20967c.js","js":["start-2a20967c.js","chunks/vendor-c78dc340.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "Musikloftet",
				pattern: /^\/Musikloftet\/?$/,
				params: null,
				path: "/Musikloftet",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "Olklubben",
				pattern: /^\/Olklubben\/?$/,
				params: null,
				path: "/Olklubben",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "Portfolio",
				pattern: /^\/Portfolio\/?$/,
				params: null,
				path: "/Portfolio",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "Artworks",
				pattern: /^\/Artworks\/?$/,
				params: null,
				path: "/Artworks",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "Vildskud",
				pattern: /^\/Vildskud\/?$/,
				params: null,
				path: "/Vildskud",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "Footer",
				pattern: /^\/Footer\/?$/,
				params: null,
				path: "/Footer",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				key: "Om_mig",
				pattern: /^\/Om_mig\/?$/,
				params: null,
				path: "/Om_mig",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				key: "Teater",
				pattern: /^\/Teater\/?$/,
				params: null,
				path: "/Teater",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				key: "Toast",
				pattern: /^\/Toast\/?$/,
				params: null,
				path: "/Toast",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				key: "Hero",
				pattern: /^\/Hero\/?$/,
				params: null,
				path: "/Hero",
				shadow: null,
				a: [0,12],
				b: [1]
			}
		]
	}
};
