import {
  u as r,
  r as i,
  S as p,
  a as f,
  b as a,
  j as e,
} from "./index.d8eab2d1.js";
import { S as v } from "./document.9215659b.js";
import { G as u, f as N, a as c } from "./helper.6caa5df2.js";
function D() {
  const t = r({ speed: -20, translateY: [40, 20] }),
    o = r({ speed: 10, translateX: [0, -20] }),
    n = r({ speed: 10, translateX: [0, 20] }),
    d = r({ speed: -20, translateY: [-40, 20] }),
    [h, m] = i.exports.useState([
      { title: "Total Value Locked", desc: "$35,094,419" },
      { title: "Holder", desc: "2,655" },
      { title: "Collateral Ratio", desc: "190.94%" },
    ]);
  i.exports.useEffect(() => {
    document.title = "Why DCHF | DCHF";
    const l = p();
    return l.reveal(".reveal", f), () => l.destroy();
  }, []),
    i.exports.useEffect(() => {
      g();
    }, []);
  const g = async () => {
    const l = await u();
    if (l.status !== 200) return;
    const s = l.data;
    m(() => [
      { title: "Total Value Locked", desc: N(s.tvl) },
      { title: "Holder", desc: c(s.holder) },
      { title: "Collateral Ratio", desc: `${c(s.tcr * 100, 2)}%` },
    ]);
  };
  return a("div", {
    className: "about main",
    children: [
      e("section", {
        className: "dchf-page-hero dchf-about-hero",
        children: e("div", {
          className: "dchf-container",
          children: a("div", {
            className: "row justify-content-between dchf-page-hero-wrap",
            children: [
              e("div", {
                className: "col-md-6 col-lg-6 col-xl-5",
                children: a("div", {
                  className: "dchf-page-hero-content reveal",
                  children: [
                    e("h1", {
                      className: "font-primary",
                      children: "Why DCHF?",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "A new way of decentralized finance based on the strongest currency in the world - The Swiss Franc.",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "The DCHF gives you the opportunity to diversify your crypto portfolio even further. Not just by holding stablecoins but holding the right stable coin.",
                    }),
                  ],
                }),
              }),
              e("div", {
                className: "col-md-6 col-lg-6 col-xl-7",
                children: e("div", {
                  className: "dchf-page-hero-img reveal",
                  children: e("img", {
                    src: "/img/about/why-mockup.png",
                    alt: "about-bg",
                    className: "img-fluid",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      e("section", {
        className: "dchf-about-info mg-top-140",
        children: e("div", {
          className: "container",
          children: e("div", {
            className: "row justify-content-center",
            children: e("div", {
              className: "col-md-10 col-lg-8",
              children: e("div", {
                className: "dchf-about-info-content reveal",
                children: a("p", {
                  children: [
                    "Hold on to your purchasing power by choosing ",
                    e("span", { children: "DCHF" }),
                    " over stablecoins pegged to the ",
                    e("span", { children: "USD" }),
                    " or the ",
                    e("span", { children: "EUR" }),
                    " while benefiting from the lowest DeFi interest rates.",
                  ],
                }),
              }),
            }),
          }),
        }),
      }),
      e("section", {
        className: "dchf-benefits mg-top-140",
        children: a("div", {
          className: "container",
          children: [
            e("div", {
              className: "row",
              children: e("div", {
                className: "col-md-6 col-lg-5",
                children: a("div", {
                  className: "main-title reveal",
                  children: [
                    e("h1", {
                      className: "font-primary",
                      children: "DCHF Benefits",
                    }),
                    e("p", {
                      children: "Learn about all the benefits of using DCHF",
                    }),
                  ],
                }),
              }),
            }),
            e("div", {
              className: "row",
              children: a("div", {
                className: "col-md-12 col-lg-12",
                children: [
                  a("div", {
                    className: "dchf-benefits-wrap",
                    children: [
                      e("div", {
                        className: "item reveal",
                        children: a("div", {
                          className: "item-wrap",
                          children: [
                            e("img", {
                              src: "/img/landing/low-rate.svg",
                              alt: "low-rate",
                            }),
                            e("h1", {
                              className: "font-bold",
                              children: "Low Collateral Rate",
                            }),
                            e("p", {
                              children:
                                "Borrow with a collateral rate of only 110%. This makes the DCHF ecosystem one of the most capital efficient ways of borrowing money.",
                            }),
                          ],
                        }),
                      }),
                      e("div", {
                        className: "item reveal",
                        children: a("div", {
                          className: "item-wrap",
                          children: [
                            e("img", {
                              src: "/img/landing/shield-tick.svg",
                              alt: "shield-tick",
                            }),
                            e("h1", {
                              className: "font-bold",
                              children: "Over-Collateralization",
                            }),
                            e("p", {
                              children:
                                "Be sure there is always a way for you to convert your DCHF back to ETH no matter what happens to the market.",
                            }),
                          ],
                        }),
                      }),
                      e("div", {
                        className: "item reveal",
                        children: a("div", {
                          className: "item-wrap",
                          children: [
                            e("img", {
                              src: "/img/landing/bubble.svg",
                              alt: "bubble",
                            }),
                            e("h1", {
                              className: "font-bold",
                              children: "Decentralization",
                            }),
                            e("p", {
                              children:
                                "The DCHF Ecosystem is fully decentralized and non custodial which makes it easy to use for users and developers all over the world.",
                            }),
                          ],
                        }),
                      }),
                      e("div", {
                        className: "item reveal",
                        children: a("div", {
                          className: "item-wrap",
                          children: [
                            e("img", {
                              src: "/img/landing/recovery-convert.svg",
                              alt: "recovery-convert",
                            }),
                            e("h1", {
                              className: "font-bold",
                              children: "Low Fees on Loans",
                            }),
                            e("p", {
                              children:
                                "Say goodbye to varying interest rates and hello to a one-time fee of 0.5% on the DCHF you borrow. Make your DeFi income plannable.",
                            }),
                          ],
                        }),
                      }),
                      e("div", {
                        className: "item reveal",
                        children: a("div", {
                          className: "item-wrap",
                          children: [
                            e("img", {
                              src: "/img/landing/shield-tick.svg",
                              alt: "shield-tick",
                            }),
                            e("h1", {
                              className: "font-bold",
                              children: "In-house Yield",
                            }),
                            e("p", {
                              children:
                                "Don\u2019t leave the platform and earn through the DCHF Stability Pool which pays out returns in ETH and more DCHF. The easiest way to earn on your DCHF.",
                            }),
                          ],
                        }),
                      }),
                      e("div", {
                        className: "item reveal",
                        children: a("div", {
                          className: "item-wrap",
                          children: [
                            e("img", {
                              src: "/img/landing/money.svg",
                              alt: "money",
                            }),
                            e("h1", {
                              className: "font-bold",
                              children: "Security",
                            }),
                            e("p", {
                              children:
                                "Benefit from two types of Security. Top Audited Smart Contracts and being pegged to the strongest currency in the world.",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e("div", {
                    className: "dchf-benefits-button reveal",
                    children: e("a", {
                      href: "https://app-defifranc-top.vercel.app/",
                      rel: "noreferrer",
                      target: "_blank",
                      className: "button button-primary-alt self-end",
                      children: "Launch App",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e("section", {
        className: "dchf-about-stats mg-top-140",
        children: e("div", {
          className: "dchf-container",
          children: e("div", {
            className: "dchf-about-stats-wrap",
            children: e("div", {
              className: "container",
              children: a("div", {
                className: "row",
                children: [
                  e("div", {
                    className: "col-md-7 col-lg-7",
                    children: a("div", {
                      className: "dchf-about-stats-items-wrap",
                      children: [
                        e("div", {
                          className: "dchf-about-stats-items",
                          children: h.map((l, s) =>
                            a(
                              "div",
                              {
                                className: "item reveal",
                                children: [
                                  e("h1", {
                                    className: "font-book",
                                    children: l.title,
                                  }),
                                  e("div", {
                                    className: "dchf-stats-value",
                                    children: e("p", { children: l.desc }),
                                  }),
                                ],
                              },
                              s
                            )
                          ),
                        }),
                        e("div", {
                          className: "dchf-about-stats-content reveal",
                          children: e("p", {
                            className: "font-bold",
                            children:
                              "\u201DNo matter if used for personal use or business purposes, DCHF offers benefits that go beyond technology.\u201D",
                          }),
                        }),
                      ],
                    }),
                  }),
                  e("div", {
                    className: "col-md-5 col-lg-5",
                    children: e("div", {
                      className: "dchf-about-stats-img reveal",
                      children: e("img", {
                        src: "/img/general/dchf-coin.png",
                        alt: "dchf-coin",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
      e("section", {
        className: "dchf-for-page mg-top-140",
        children: a("div", {
          className: "container",
          children: [
            e("div", {
              className: "row",
              children: e("div", {
                className: "col-md-6 col-lg-6",
                children: a("div", {
                  className: "main-title reveal",
                  children: [
                    e("h1", {
                      className: "font-primary",
                      children: "For who?",
                    }),
                    e("p", {
                      children:
                        "The stablecoin that is disrupting the stablecoin ecosystem.",
                    }),
                  ],
                }),
              }),
            }),
            a("div", {
              className: "row dchf-for-page-wrap",
              children: [
                a("div", {
                  className:
                    "col-md-6 col-lg-6 col-xl-3 dchf-for-page-item-wrap",
                  children: [
                    a("div", {
                      className: "dchf-for-page-item reveal",
                      children: [
                        e("img", {
                          src: "/img/landing/user-octagon.svg",
                          alt: "user-octagon",
                        }),
                        e("h1", {
                          className: "font-medium",
                          children: "For Individuals",
                        }),
                        e("p", {
                          children:
                            "Use the DCHF to diversify your portfolio with the Swiss Franc stablecoins or use the ecosystem to borrow against your ETH the right way.",
                        }),
                      ],
                    }),
                    e("div", {
                      className: "shape circle-1",
                      ref: t.ref,
                      draggable: !1,
                      children: e("img", {
                        src: "/img/shapes/sphere-large.svg",
                        alt: "shape-sphere",
                      }),
                    }),
                  ],
                }),
                a("div", {
                  className:
                    "col-md-6 col-lg-6 col-xl-3 dchf-for-page-item-wrap",
                  children: [
                    a("div", {
                      className: "dchf-for-page-item reveal",
                      children: [
                        e("img", {
                          src: "/img/landing/plus-circle.svg",
                          alt: "plus-circle",
                        }),
                        e("h1", {
                          className: "font-medium",
                          children: "A stablecoin built for DeFi",
                        }),
                        e("p", {
                          children:
                            "There are endless possibilities using the DCHF now and the team is constantly looking for new ways to improve the ecosystem by adding more features which give you the opportunity to earn the best yields.",
                        }),
                      ],
                    }),
                    e("div", {
                      className: "shape circle-2",
                      ref: o.ref,
                      draggable: !1,
                      children: e("img", {
                        src: "/img/shapes/sphere-large.svg",
                        alt: "shape-sphere",
                      }),
                    }),
                  ],
                }),
                a("div", {
                  className:
                    "col-md-6 col-lg-6 col-xl-3 dchf-for-page-item-wrap",
                  children: [
                    a("div", {
                      className: "dchf-for-page-item reveal",
                      children: [
                        e("img", {
                          src: "/img/landing/layer.svg",
                          alt: "layer",
                        }),
                        e("h1", {
                          className: "font-medium",
                          children: "For Developers",
                        }),
                        e("p", {
                          children:
                            "Use the endless possibilities the DCHF ecosystem brings by implementing the DCHF into your dapp.",
                        }),
                      ],
                    }),
                    e("div", {
                      className: "shape circle-3",
                      ref: n.ref,
                      draggable: !1,
                      children: e("img", {
                        src: "/img/shapes/sphere-large.svg",
                        alt: "shape-sphere",
                      }),
                    }),
                  ],
                }),
                a("div", {
                  className:
                    "col-md-6 col-lg-6 col-xl-3 dchf-for-page-item-wrap",
                  children: [
                    a("div", {
                      className: "dchf-for-page-item reveal",
                      children: [
                        e("img", {
                          src: "/img/landing/card-coin.svg",
                          alt: "card-coin",
                        }),
                        e("h1", {
                          className: "font-medium",
                          children: "For Exchanges",
                        }),
                        e("p", {
                          children:
                            "Exchanges use the DCHF to process trades and give users the opportunity to get out of volatile assets and into a stablecoin pegged to the Swiss Franc.",
                        }),
                      ],
                    }),
                    e("div", {
                      className: "shape circle-4",
                      ref: d.ref,
                      draggable: !1,
                      children: e("img", {
                        src: "/img/shapes/sphere-large.svg",
                        alt: "shape-sphere",
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "col-md-12 col-lg-12",
                  children: e("div", {
                    className: "dchf-for-page-button reveal",
                    children: e("a", {
                      href: "https://app-defifranc-top.vercel.app/",
                      rel: "noreferrer",
                      target: "_blank",
                      className: "button button-primary-alt self-center",
                      children: "Launch App",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { D as default };
