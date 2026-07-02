import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/khushiii-logo.png
var khushiii_logo_default = "/assets/khushiii-logo-VRvZpfVj.png";
//#endregion
//#region src/assets/hero-children.jpg
var hero_children_default = "/assets/hero-children-DnUDky1m.jpg";
//#endregion
//#region src/assets/education.jpg
var education_default = "/assets/education-BdpOGmta.jpg";
//#endregion
//#region src/assets/nutrition.jpg
var nutrition_default = "/assets/nutrition-BKJZyrvk.jpg";
//#endregion
//#region src/assets/healthcare.jpg
var healthcare_default = "/assets/healthcare-B2zDQ4Tw.jpg";
//#endregion
//#region src/assets/development.jpg
var development_default = "/assets/development-BRjQiGRQ.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Nav() {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: khushiii_logo_default,
						alt: "Khushiii Foundation",
						className: "h-12 w-12 rounded-full object-cover"
					}), /* @__PURE__ */ jsxs("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-xl text-primary",
							style: {
								fontFamily: "Dancing Script, cursive",
								fontWeight: 700
							},
							children: "Khushiii"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] tracking-[0.25em] text-muted-foreground uppercase",
							children: "Foundation"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#about",
							className: "hover:text-primary transition",
							children: "About"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#work",
							className: "hover:text-primary transition",
							children: "What We Do"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#impact",
							className: "hover:text-primary transition",
							children: "Impact"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#volunteer",
							className: "hover:text-primary transition",
							children: "Volunteer"
						})
					]
				}),
				/* @__PURE__ */ jsx("a", {
					href: "https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-primary text-sm",
					children: "Donate"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary",
					children: "Educate • Nourish • Empower"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground",
					children: [
						"Together, We Can Build a",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							style: {
								fontFamily: "Dancing Script, cursive",
								fontWeight: 700
							},
							children: "Better Future"
						}),
						" ",
						"for Every Child."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed",
					children: "Khushiii Foundation is dedicated to empowering underprivileged children through education, nutritious meals, healthcare, and opportunities that help them build a brighter future."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-9 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-primary",
						children: [/* @__PURE__ */ jsx("span", { children: "❤" }), " Donate Now"]
					}), /* @__PURE__ */ jsx("a", {
						href: "https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-ghost",
						children: "Become a Volunteer"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex items-center gap-8 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-2xl font-display font-bold text-foreground",
							children: "10k+"
						}), "Children reached"] }),
						/* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-border" }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-2xl font-display font-bold text-foreground",
							children: "100%"
						}), "Transparent"] }),
						/* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-border" }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-2xl font-display font-bold text-foreground",
							children: "50+"
						}), "Communities"] })
					]
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-rose/30 via-blush/40 to-transparent blur-2xl" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative rounded-[2rem] overflow-hidden shadow-2xl border border-border",
						children: /* @__PURE__ */ jsx("img", {
							src: hero_children_default,
							alt: "Smiling children reading together",
							width: 1600,
							height: 1200,
							className: "w-full h-[540px] object-cover"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute -bottom-6 -left-6 soft-card px-5 py-4 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("img", {
							src: khushiii_logo_default,
							alt: "",
							className: "h-12 w-12 rounded-full"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "A better tomorrow"
						}), /* @__PURE__ */ jsx("div", {
							className: "font-display text-lg text-primary",
							children: "for every child"
						})] })]
					})
				]
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "py-24 bg-gradient-to-b from-transparent to-secondary/40",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.3em] uppercase text-primary font-semibold",
					children: "About Us"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-4xl md:text-5xl font-bold",
					children: "Every child deserves love, dignity, and a chance to dream."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-lg text-muted-foreground leading-relaxed",
					children: "Khushiii Foundation is a non-profit organization committed to creating a world where every child has access to quality education, healthy food, essential healthcare, and equal opportunities. We work with compassion, transparency, and dedication to support children from economically weaker backgrounds and help them become confident, educated, and independent individuals."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 mt-16 grid md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "soft-card p-8",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.25em] uppercase text-primary font-semibold",
					children: "Our Mission"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-foreground/85 leading-relaxed",
					children: "To provide quality education, nutritious food, healthcare support, and life-changing opportunities to underprivileged children while creating a society where every child can grow with dignity, hope, and confidence."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "soft-card p-8",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.25em] uppercase text-primary font-semibold",
					children: "Our Vision"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-foreground/85 leading-relaxed",
					children: "A world where no child is deprived of education, nutrition, healthcare, or the opportunity to achieve their dreams."
				})]
			})]
		})]
	});
}
var values = [
	{
		icon: "❤️",
		label: "Compassion"
	},
	{
		icon: "📚",
		label: "Education"
	},
	{
		icon: "🤝",
		label: "Equality"
	},
	{
		icon: "🌱",
		label: "Empowerment"
	},
	{
		icon: "🔍",
		label: "Transparency"
	},
	{
		icon: "🌍",
		label: "Community"
	}
];
function Values() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.3em] uppercase text-primary font-semibold",
					children: "Our Values"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-3xl md:text-4xl font-bold",
					children: "The principles that guide us"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
				children: values.map((v) => /* @__PURE__ */ jsxs("div", {
					className: "soft-card p-6 text-center hover:-translate-y-1 transition",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl",
						children: v.icon
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 font-semibold text-foreground",
						children: v.label
					})]
				}, v.label))
			})]
		})
	});
}
var works = [
	{
		img: education_default,
		title: "Education",
		desc: "School support, books, uniforms, stationery, scholarships and digital learning for children in need."
	},
	{
		img: nutrition_default,
		title: "Nutrition",
		desc: "Distributing healthy meals and nutrition kits so no child learns on an empty stomach."
	},
	{
		img: healthcare_default,
		title: "Healthcare",
		desc: "Health check-up camps, medical assistance, and preventive care for children and families."
	},
	{
		img: development_default,
		title: "Child Development",
		desc: "Skill development, personality building, career guidance and long-term mentorship."
	}
];
function WhatWeDo() {
	return /* @__PURE__ */ jsx("section", {
		id: "work",
		className: "py-24 bg-secondary/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.3em] uppercase text-primary font-semibold",
					children: "What We Do"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-4xl md:text-5xl font-bold",
					children: "Programs that change lives, every single day."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid md:grid-cols-2 gap-8",
				children: works.map((w) => /* @__PURE__ */ jsxs("article", {
					className: "group soft-card overflow-hidden",
					children: [/* @__PURE__ */ jsx("div", {
						className: "relative h-64 overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: w.img,
							alt: w.title,
							width: 1200,
							height: 900,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-105 transition duration-700"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-7",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-primary",
							children: w.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground leading-relaxed",
							children: w.desc
						})]
					})]
				}, w.title))
			})]
		})
	});
}
var impacts = [
	"Educate children",
	"Feed hungry families",
	"Support school admissions",
	"Organize health camps",
	"Build a brighter future"
];
function Impact() {
	return /* @__PURE__ */ jsx("section", {
		id: "impact",
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.3em] uppercase text-primary font-semibold",
					children: "Our Impact"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-4xl md:text-5xl font-bold",
					children: "Every contribution helps us do more."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-muted-foreground text-lg",
					children: "Small acts of kindness are the seeds of lasting change. Here's what your support makes possible."
				})
			] }), /* @__PURE__ */ jsx("ul", {
				className: "space-y-3",
				children: impacts.map((i, idx) => /* @__PURE__ */ jsxs("li", {
					className: "soft-card px-6 py-5 flex items-center gap-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold",
						children: String(idx + 1).padStart(2, "0")
					}), /* @__PURE__ */ jsx("span", {
						className: "font-medium text-lg",
						children: i
					})]
				}, i))
			})]
		})
	});
}
var reasons = [
	{
		t: "100% Transparent",
		d: "Every rupee is tracked and reported. You always know where your donation goes."
	},
	{
		t: "Child-Centered Programs",
		d: "Designed around the real needs of children, not top-down assumptions."
	},
	{
		t: "Dedicated Volunteers",
		d: "A passionate team giving time, skills, and love every single day."
	},
	{
		t: "Community Driven",
		d: "We work with families and local leaders to create lasting change."
	},
	{
		t: "Long-Term Impact",
		d: "We stay for the long haul — from first classroom to first job."
	}
];
function WhyUs() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-gradient-to-b from-secondary/30 to-transparent",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.3em] uppercase text-primary font-semibold",
					children: "Why Choose Us"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-4xl md:text-5xl font-bold",
					children: "Trust, transparency, and heart."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid md:grid-cols-3 gap-6",
				children: reasons.map((r) => /* @__PURE__ */ jsxs("div", {
					className: "soft-card p-7",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center",
							"aria-hidden": "true",
							children: "❤"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-4 text-xl font-bold",
							children: r.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-muted-foreground leading-relaxed",
							children: r.d
						})
					]
				}, r.t))
			})]
		})
	});
}
function Volunteer() {
	return /* @__PURE__ */ jsx("section", {
		id: "volunteer",
		className: "py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center",
				style: { background: "linear-gradient(135deg, oklch(0.72 0.16 4) 0%, oklch(0.5 0.2 2) 100%)" },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs tracking-[0.3em] uppercase text-white/80 font-semibold",
						children: "Become a Volunteer"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 text-4xl md:text-5xl font-bold text-white",
						children: "Your time can change someone's future."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-white/90 max-w-2xl mx-auto text-lg",
						children: "Join Khushiii Foundation and become part of our mission to bring hope, happiness, and opportunities into the lives of children."
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-8 inline-flex btn-ghost",
						style: {
							borderColor: "white",
							color: "white"
						},
						children: "Message us on Instagram"
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border/60 bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: khushiii_logo_default,
						alt: "",
						className: "h-14 w-14 rounded-full"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-bold text-xl text-primary",
						style: { fontFamily: "Dancing Script, cursive" },
						children: "Khushiii Foundation"
					}), /* @__PURE__ */ jsx("div", {
						className: "text-[10px] tracking-[0.25em] uppercase text-muted-foreground",
						children: "Educate • Nourish • Empower"
					})] })]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed",
					children: "A non-profit building a better tomorrow for every child through education, nutrition, healthcare, and opportunity."
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-semibold uppercase tracking-widest text-foreground",
					children: "Explore"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#about",
							className: "hover:text-primary",
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#work",
							className: "hover:text-primary",
							children: "What We Do"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#impact",
							className: "hover:text-primary",
							children: "Impact"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#volunteer",
							className: "hover:text-primary",
							children: "Volunteer"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-primary",
							children: "Donate"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-semibold uppercase tracking-widest text-foreground",
					children: "Get in touch"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "mailto:khushiiifoundation1111@gmail.com",
							className: "hover:text-primary break-all",
							children: "khushiiifoundation1111@gmail.com"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "https://www.instagram.com/teamkhf1111?igsh=YjExMGNqdzRvdDdm",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-primary",
							children: "Instagram: @teamkhf1111"
						}) }),
						/* @__PURE__ */ jsx("li", { children: "India" })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between text-xs text-muted-foreground",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Khushiii Foundation. All rights reserved."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "mt-2 text-xs",
					children: [
						"You dream it. I'll make it happen.",
						/* @__PURE__ */ jsx("br", {}),
						"I Love You. ❤️"
					]
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/message",
					className: "inline-flex items-center gap-1.5 hover:text-primary transition",
					children: ["Made with ", /* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "❤"
					})]
				})]
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Nav, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Values, {}),
			/* @__PURE__ */ jsx(WhatWeDo, {}),
			/* @__PURE__ */ jsx(Impact, {}),
			/* @__PURE__ */ jsx(WhyUs, {}),
			/* @__PURE__ */ jsx(Volunteer, {})
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Home as component };
