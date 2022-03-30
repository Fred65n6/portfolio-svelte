var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "artworks.png", "artworks.webp", "artwork_1.png", "background.img_portfolio-2.jpg", "background.img_portfolio.jpg", "background.img_portfolio.png", "background.img_portfolio.webp", "background.png", "background.webp", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "favicon.svg", "fm.png", "FM.svg", "frederik_milland.svg", "grob.png", "grob.webp", "kramer.png", "kramer.webp", "musikloftet.png", "musikloftet.webp", "Musikloftet_logo2_v2.svg", "olklubben.png", "olklubben.webp", "om-mig.png", "om-mig.webp", "PhInstagramLogoLight.svg", "portr\xE6t-3.jpg", "portr\xE6t-3.webp", "robots.txt", "site.webmanifest", "sovereign_edits-70.jpg", "spil.png", "spil.webp", "svelte-welcome.png", "svelte-welcome.webp", "toast.png", "toast.webp", "ungdomsbyen.png", "ungdomsbyen.webp", "zach-miles-Y84-eo8drzk-unsplash.png"]),
  _: {
    mime: { ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".txt": "text/plain", ".webmanifest": "application/manifest+json" },
    entry: { "file": "start-bf5b006c.js", "js": ["start-bf5b006c.js", "chunks/vendor-55574a2a.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js")))
    ],
    routes: [
      {
        type: "page",
        key: "",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        key: "Musikloftet",
        pattern: /^\/Musikloftet\/?$/,
        params: null,
        path: "/Musikloftet",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        key: "Ungdomsbyen",
        pattern: /^\/Ungdomsbyen\/?$/,
        params: null,
        path: "/Ungdomsbyen",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        key: "Burgermenu",
        pattern: /^\/Burgermenu\/?$/,
        params: null,
        path: "/Burgermenu",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        key: "Olklubben",
        pattern: /^\/Olklubben\/?$/,
        params: null,
        path: "/Olklubben",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        key: "Portfolio",
        pattern: /^\/Portfolio\/?$/,
        params: null,
        path: "/Portfolio",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        key: "Artworks",
        pattern: /^\/Artworks\/?$/,
        params: null,
        path: "/Artworks",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        key: "Footer",
        pattern: /^\/Footer\/?$/,
        params: null,
        path: "/Footer",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        key: "Om_mig",
        pattern: /^\/Om_mig\/?$/,
        params: null,
        path: "/Om_mig",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        key: "Teater",
        pattern: /^\/Teater\/?$/,
        params: null,
        path: "/Teater",
        shadow: null,
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        key: "Toast",
        pattern: /^\/Toast\/?$/,
        params: null,
        path: "/Toast",
        shadow: null,
        a: [0, 12],
        b: [1]
      },
      {
        type: "page",
        key: "Hero",
        pattern: /^\/Hero\/?$/,
        params: null,
        path: "/Hero",
        shadow: null,
        a: [0, 13],
        b: [1]
      },
      {
        type: "page",
        key: "Spil",
        pattern: /^\/Spil\/?$/,
        params: null,
        path: "/Spil",
        shadow: null,
        a: [0, 14],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
