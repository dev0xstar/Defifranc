import {
  r as d,
  j as e,
  u as i,
  S as u,
  a as N,
  b as a,
  R as b,
  L as t,
} from "./index.d8eab2d1.js";
import { S as w } from "./document.9215659b.js";
import { G as y, f as F, a as n } from "./helper.6caa5df2.js";
function C() {
  const [o, m] = d.exports.useState([
      {
        title: "Value of DCHF",
        desc: [
          e("b", { children: "1 DCHF" }),
          " = ",
          e("b", { children: "1.00 CHF" }),
        ],
      },
      { title: "Total Value Locked", desc: ["$35,094,419"] },
      { title: "Holder", desc: ["2,655"] },
      { title: "Collateral Ratio", desc: ["190.94%"] },
    ]),
    h = i({ speed: 10, translateX: [10, 30] }),
    f = i({ speed: -10, translateX: [-20, 0] }),
    g = i({ speed: 10, translateX: [-20, 0] }),
    v = i({ speed: -10, translateX: [0, -30] });
  d.exports.useEffect(() => {
    document.title = "Discover | DCHF";
    const s = u();
    return s.reveal(".reveal", N), () => s.destroy();
  }, []),
    d.exports.useEffect(() => {
      p();
    }, []);
  const p = async () => {
    const s = await y();
    if (s.status !== 200) return;
    const l = s.data;
    m(() => {
      var c, r;
      return [
        {
          title: "Value of DCHF",
          desc: [
            e("b", { children: "1 DCHF" }),
            " = ",
            a("b", {
              children: [
                (r = (c = l.dchfChfPrice) == null ? void 0 : c.toFixed(2)) !=
                null
                  ? r
                  : "--",
                " CHF",
              ],
            }),
          ],
        },
        { title: "Total Value Locked", desc: [F(l.tvl)] },
        { title: "Holder", desc: [n(l.holder)] },
        { title: "Collateral Ratio", desc: [`${n(l.tcr * 100, 2)}%`] },
      ];
    });
  };
  return a("div", {
    className: "discover main",
    children: [
      a("section", {
        className: "hero",
        children: [
          e("div", {
            className: "dchf-container",
            children: e("div", {
              className: "hero-wrap",
              children: a("div", {
                className: "row",
                children: [
                  a("div", {
                    className: "col-md-6 col-lg-6",
                    children: [
                      a("div", {
                        className: "hero-content reveal",
                        children: [
                          a("h1", {
                            className: "font-primary",
                            children: [
                              "ReDEFIning ",
                              e("span", { children: "Stability" }),
                              ".",
                            ],
                          }),
                          e("p", {
                            className: "font-regular",
                            children:
                              "The DeFi Franc (DCHF) is a decentralized stablecoin, pegged to the Swiss Franc - The most secure, trusted and stable fiat currency in the world. The DeFi Franc is over-collateralized and is created through loans which are backed by ETH and WBTC.",
                          }),
                          e("img", {
                            src: "/img/discover/discover-bg.png",
                            alt: "dchf-coin",
                            className: "img-mobile",
                          }),
                        ],
                      }),
                      a("div", {
                        className: "hero-buttons reveal",
                        children: [
                          e("a", {
                            href: "https://app-defifranc-top.vercel.app/",
                            rel: "noreferrer",
                            target: "_blank",
                            className: "button button-primary self-end",
                            children: "Launch App",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e("div", {
                    className: "col-md-6 col-lg-6",
                    children: e("div", {
                      className: "hero-img reveal mobile-hidden",
                      children: e("img", {
                        src: "/img/discover/discover-bg.png",
                        alt: "discover-bg",
                        className: "img-fluid",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
          e("div", {
            className: "hero-background",
            style: { backgroundImage: "url(/img/general/dchf-mount.png)" },
          }),
          a("div", {
            className: "clouds",
            children: [
              e("img", {
                className: "cloud-1",
                src: "/img/general/cloud-1.png",
                alt: "cloud",
              }),
              e("img", {
                className: "cloud-2",
                src: "/img/general/cloud-2.png",
                alt: "cloud",
              }),
              e("img", {
                className: "cloud-3",
                src: "/img/general/cloud-3.png",
                alt: "cloud",
              }),
            ],
          }),
        ],
      }),
      e("section", {
        className: "dchf-stats",
        children: e("div", {
          className: "dchf-container",
          children: e("div", {
            className: "dchf-stats-wrap",
            children: o.map((s, l) =>
              a(
                "div",
                {
                  className: "dchf-stats-item reveal",
                  children: [
                    e("h1", {
                      className: "font-medium",
                      id: "title",
                      children: s.title,
                    }),
                    e("div", {
                      className: "dchf-stats-value",
                      id: "stats-value",
                      children: e("p", {
                        id: "value",
                        children: s.desc.map((c, r) =>
                          e(b.Fragment, { children: c }, r)
                        ),
                      }),
                    }),
                  ],
                },
                l
              )
            ),
          }),
        }),
      }),
      e("section", {
        className: "dchf-about mg-top-140",
        children: e("div", {
          className: "container",
          children: a("div", {
            className: "row align-items-center",
            children: [
              e("div", {
                className: "col-md-6 col-lg-5",
                children: a("div", {
                  className: "dchf-about-content reveal",
                  children: [
                    e("h1", {
                      className: "font-primary",
                      children: "Why DCHF?",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "In times of uncertainty people have always been trusting the Swiss Franc more than other currencies which is also the case right now.",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "In 2022 the US-Inflation reached double-digits while Switzerland kept theirs at 2.8%. This is due to Switzerland's neutrality, financial stability through its own central bank and a strong economy which isn\u2019t affected as much by outside happenings.",
                    }),
                    e(t, {
                      to: "about",
                      className: "button button-primary-alt self-end",
                      children: "Learn More",
                    }),
                  ],
                }),
              }),
              e("div", {
                className: "col-md-6 col-lg-5 offset-lg-2",
                children: e("div", {
                  className: "dchf-about-img reveal",
                  children: e("img", {
                    src: "/img/about/why-mockup-alt.png",
                    alt: "mockup",
                    className: "img-fluid",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      e("section", {
        className: "dchf-impression mg-top-120",
        children: e("div", {
          className: "dchf-container",
          children: a("div", {
            className: "dchf-impression-wrap",
            children: [
              a("div", {
                className: "item reveal",
                children: [
                  e("h1", { className: "font-bold", children: "Stable" }),
                  e("img", {
                    src: "/img/shapes/pyramid-red.png",
                    alt: "shape",
                  }),
                ],
              }),
              a("div", {
                className: "item reveal",
                children: [
                  e("h1", { className: "font-bold", children: "Useable" }),
                  e("img", {
                    src: "/img/shapes/pyramid-red-1.png",
                    alt: "shape",
                  }),
                ],
              }),
              a("div", {
                className: "item reveal",
                children: [
                  e("h1", {
                    className: "font-bold",
                    children: "Decentralized",
                  }),
                  e("img", { src: "/img/shapes/cube-red.png", alt: "shape" }),
                ],
              }),
              a("div", {
                className: "item reveal",
                children: [
                  e("h1", {
                    className: "font-bold",
                    children: "Over-Collateralized",
                  }),
                  e("img", {
                    src: "/img/shapes/cylinder-red.png",
                    alt: "shape",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e("section", {
        className: "dchf-about mg-top-140",
        children: e("div", {
          className: "container",
          children: a("div", {
            className: "row align-items-center dchf-about-row-mobile",
            children: [
              e("div", {
                className: "col-md-6 col-lg-5",
                children: e("div", {
                  className: "dchf-about-img reveal",
                  children: e("img", {
                    src: "/img/story/story-mockup.png",
                    alt: "mockup",
                    className: "img-fluid",
                  }),
                }),
              }),
              e("div", {
                className: "col-md-6 col-lg-5 offset-lg-1",
                children: a("div", {
                  className: "dchf-about-content reveal",
                  children: [
                    e("h1", {
                      className: "font-primary",
                      children: "The story",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "The Swiss Franc has proven to perform far better than other currencies like the USD over the course of the past 50 years. In 1971 one USD was worth over 4 CHF while today 50 years later 1 CHF is approximately worth 1 USD. An over 400% gain in 50 years.",
                    }),
                    e(t, {
                      to: "about",
                      className: "button button-primary-alt self-end",
                      children: "Learn More",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      e("section", {
        className: "dchf-for mg-top-160",
        children: e("div", {
          className: "container",
          children: a("div", {
            className: "row",
            children: [
              e("div", {
                className: "col-md-12 col-lg-5",
                children: a("div", {
                  className: "dchf-for-content reveal",
                  children: [
                    e("h1", {
                      className: "font-primary",
                      children: "For who?",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "DCHFs are created through loans backed by Ethereum which means you can use Ethereum as collateral and take out loans in DCHF to use it as you wish. - No restrictions.",
                    }),
                    e("p", {
                      className: "font-regular",
                      children:
                        "The DCHF Ecosystem allows for cheap loans at only a one-time fee of 0.5%. Use your DCHF in DeFi and build a passive income while still holding ETH and benefitting from a stable currency like the Swiss Franc.",
                    }),
                  ],
                }),
              }),
              e("div", {
                className: "col-md-12 col-lg-6 offset-lg-1",
                children: a("div", {
                  className: "row",
                  children: [
                    e("div", {
                      className: "col-md-6 col-lg-6",
                      children: a("div", {
                        className: "dchf-for-items-wrap first",
                        children: [
                          a("div", {
                            className: "dchf-for-items reveal",
                            children: [
                              a("div", {
                                className: "dchf-for-items-inner",
                                children: [
                                  e("img", {
                                    src: "/img/landing/user-octagon.svg",
                                    alt: "user-octagon",
                                  }),
                                  e("h1", {
                                    className: "font-medium",
                                    children: "For Individuals",
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "dchf-for-items-shape circle-1",
                                ref: h.ref,
                                draggable: !1,
                                children: e("img", {
                                  src: "/img/shapes/sphere.svg",
                                  alt: "sphere-shape",
                                }),
                              }),
                            ],
                          }),
                          a("div", {
                            className: "dchf-for-items reveal",
                            children: [
                              a("div", {
                                className: "dchf-for-items-inner",
                                children: [
                                  e("img", {
                                    src: "/img/landing/card-coin.svg",
                                    alt: "card-coin",
                                  }),
                                  e("h1", {
                                    className: "font-medium",
                                    children: "For Exchanges",
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "dchf-for-items-shape circle-2",
                                ref: f.ref,
                                draggable: !1,
                                children: e("img", {
                                  src: "/img/shapes/sphere.svg",
                                  alt: "sphere-shape",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e("div", {
                      className: "col-md-6 col-lg-6",
                      children: a("div", {
                        className: "dchf-for-items-wrap",
                        children: [
                          a("div", {
                            className: "dchf-for-items reveal",
                            children: [
                              a("div", {
                                className: "dchf-for-items-inner",
                                children: [
                                  e("img", {
                                    src: "/img/landing/plus-circle.svg",
                                    alt: "plus-circle",
                                  }),
                                  e("h1", {
                                    className: "font-medium",
                                    children: "A stablecoin built for DeFi",
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "dchf-for-items-shape circle-3",
                                ref: g.ref,
                                draggable: !1,
                                children: e("img", {
                                  src: "/img/shapes/sphere.svg",
                                  alt: "sphere-shape",
                                }),
                              }),
                            ],
                          }),
                          a("div", {
                            className: "dchf-for-items reveal",
                            children: [
                              a("div", {
                                className: "dchf-for-items-inner",
                                children: [
                                  e("img", {
                                    src: "/img/landing/layer.svg",
                                    alt: "layer",
                                  }),
                                  e("h1", {
                                    className: "font-medium",
                                    children: "For Developers",
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "dchf-for-items-shape circle-4",
                                ref: v.ref,
                                draggable: !1,
                                children: e("img", {
                                  src: "/img/shapes/sphere.svg",
                                  alt: "sphere-shape",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      e("section", {
        className: "dchf-works mg-top-130",
        children: e("div", {
          className: "dchf-container",
          children: e("div", {
            className: "dchf-works-wrap",
            children: a("div", {
              className: "container",
              children: [
                a("div", {
                  className:
                    "row justify-content-between dchf-works-row-mobile",
                  children: [
                    e("div", {
                      className: "col-md-6 col-lg-5 col-xl-4",
                      children: a("div", {
                        className: "dchf-works-content reveal",
                        children: [
                          e("h1", {
                            className: "font-primary",
                            children: "How it works",
                          }),
                          e("p", {
                            className: "font-regular",
                            children:
                              "The DCHF is over-collateralized at all times through users ETH deposits. This creates maximum security for the whole ecosystem.",
                          }),
                        ],
                      }),
                    }),
                    e("div", {
                      className: "col-md-6 col-lg-5",
                      children: e("div", {
                        className: "dchf-works-img reveal",
                        children: e("img", {
                          src: "/img/discover/dchf-plus-alt.svg",
                          alt: "dchf-plus",
                          className: "img-fluid",
                        }),
                      }),
                    }),
                  ],
                }),
                a("div", {
                  className: "row mg-top-50",
                  children: [
                    e("div", {
                      className: "col-md-4 col-lg-4 dchf-works-item-wrap",
                      children: a("div", {
                        className: "dchf-works-item reveal",
                        children: [
                          e("div", {
                            className: "icon",
                            children: e("img", {
                              src: "/img/landing/deposit-eth.svg",
                              alt: "icon",
                            }),
                          }),
                          a("div", {
                            className: "content",
                            children: [
                              e("h1", {
                                className: "font-primary",
                                children: "Deposit ETH",
                              }),
                              e("p", {
                                className: "font-regular",
                                children:
                                  "Use your ETH as collateral by depositing it into the DCHF protocol.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e("div", {
                      className: "col-md-4 col-lg-4 dchf-works-item-wrap",
                      children: a("div", {
                        className: "dchf-works-item reveal",
                        children: [
                          e("div", {
                            className: "icon",
                            children: e("img", {
                              src: "/img/landing/borrow-dchf.svg",
                              alt: "icon",
                            }),
                          }),
                          a("div", {
                            className: "content reveal",
                            children: [
                              e("h1", {
                                className: "font-primary",
                                children: "Borrow DCHF",
                              }),
                              e("p", {
                                className: "font-regular",
                                children:
                                  "Borrow against your ETH at a collateralization ratio of only 110% and only pay a one-time fee of 0.5% on your loan",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e("div", {
                      className: "col-md-4 col-lg-4 dchf-works-item-wrap",
                      children: a("div", {
                        className: "dchf-works-item reveal",
                        children: [
                          e("div", {
                            className: "icon",
                            children: e("img", {
                              src: "/img/landing/use-dchf.svg",
                              alt: "icon",
                            }),
                          }),
                          a("div", {
                            className: "content",
                            children: [
                              e("h1", {
                                className: "font-primary",
                                children: "Use DCHF",
                              }),
                              e("p", {
                                className: "font-regular",
                                children:
                                  "Use your DCHF in the DCHF Ecosystem to earn yields on decentralized finance ecosystems or use it to leverage them",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
export { C as default };
