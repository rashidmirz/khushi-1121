import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/message-BabzXGZC.js
var import_jsx_runtime = require_jsx_runtime();
function MessagePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden flex items-center justify-center px-6",
		style: { background: "radial-gradient(1000px 700px at 50% 20%, oklch(0.94 0.06 10 / 0.8), transparent 60%), radial-gradient(800px 500px at 80% 90%, oklch(0.9 0.08 5 / 0.6), transparent 60%), var(--color-background)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingHearts, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative text-center max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.4em] uppercase text-primary/80 font-semibold",
					children: "A little note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-8 text-4xl md:text-6xl leading-tight font-bold text-foreground",
					style: { fontFamily: "Playfair Display, serif" },
					children: [
						"Sapne tum dekhna,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"pure ham karenge."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-3xl md:text-5xl text-primary flex items-center justify-center gap-3",
					style: {
						fontFamily: "Dancing Script, cursive",
						fontWeight: 700
					},
					children: ["I Love You", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "text-4xl md:text-6xl",
						style: { color: "#e11d48" },
						children: "❤"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex items-center justify-center gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl md:text-3xl font-display tracking-[0.3em] text-foreground/80",
							children: "11 : 11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg md:text-xl text-muted-foreground italic",
					children: "i love you"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-ghost",
						children: "← Back home"
					})
				})
			]
		})]
	});
}
function FloatingHearts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [Array.from({ length: 14 }).map((_, i) => {
			const left = i * 73 % 100;
			const delay = i * .6 % 6;
			const duration = 8 + i * 1.3 % 6;
			const size = 14 + i * 7 % 22;
			const opacity = .15 + i * .07 % .35;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-[-40px] text-primary",
				style: {
					left: `${left}%`,
					fontSize: `${size}px`,
					opacity,
					animation: `floatUp ${duration}s linear ${delay}s infinite`
				},
				children: "❤"
			}, i);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
        }
      ` })]
	});
}
//#endregion
export { MessagePage as component };
