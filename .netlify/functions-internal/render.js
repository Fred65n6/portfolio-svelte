const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","artworks.png","artworks.webp","artwork_1.png","background.img_portfolio-2.jpg","background.img_portfolio.jpg","background.img_portfolio.png","background.img_portfolio.webp","background.png","background.webp","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.svg","fm.png","FM.svg","frederik_milland.svg","grob.png","grob.webp","kramer.png","kramer.webp","musikloftet.png","musikloftet.webp","Musikloftet_logo2_v2.svg","olklubben.png","olklubben.webp","om-mig.png","om-mig.webp","PhInstagramLogoLight.svg","portræt-3.jpg","portræt-3.webp","robots.txt","site.webmanifest","sovereign_edits-70.jpg","spil.png","spil.webp","svelte-welcome.png","svelte-welcome.webp","toast.png","toast.webp","ungdomsbyen.png","ungdomsbyen.webp","zach-miles-Y84-eo8drzk-unsplash.png"]),
	_: {
		mime: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain",".webmanifest":"application/manifest+json"},
		entry: {"file":"start-ad47f78f.js","js":["start-ad47f78f.js","chunks/vendor-55574a2a.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js'))
		],
		routes: [
			{
				type: 'page',
				key: "Burgermenu",
				pattern: /^\/Burgermenu\/?$/,
				params: null,
				path: "/Burgermenu",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "Footer",
				pattern: /^\/Footer\/?$/,
				params: null,
				path: "/Footer",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "Hero",
				pattern: /^\/Hero\/?$/,
				params: null,
				path: "/Hero",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		]
	}
});
