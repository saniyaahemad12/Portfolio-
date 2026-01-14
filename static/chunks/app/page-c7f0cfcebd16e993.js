(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    8536: function(e, t, A) {
        Promise.resolve().then(A.bind(A, 7648)),
        Promise.resolve().then(A.bind(A, 6580)),
        Promise.resolve().then(A.bind(A, 4484)),
        Promise.resolve().then(A.bind(A, 7646)),
        Promise.resolve().then(A.t.bind(A, 1749, 23)),
        Promise.resolve().then(A.t.bind(A, 5250, 23)),
        Promise.resolve().then(A.bind(A, 7141)),
        Promise.resolve().then(A.bind(A, 6586)),
        Promise.resolve().then(A.bind(A, 7825)),
        Promise.resolve().then(A.bind(A, 8124)),
        Promise.resolve().then(A.bind(A, 6146)),
        Promise.resolve().then(A.bind(A, 9767)),
        Promise.resolve().then(A.bind(A, 9605)),
        Promise.resolve().then(A.bind(A, 1280)),
        Promise.resolve().then(A.bind(A, 5589)),
        Promise.resolve().then(A.bind(A, 4662)),
        Promise.resolve().then(A.bind(A, 7782)),
        Promise.resolve().then(A.bind(A, 9426)),
        Promise.resolve().then(A.bind(A, 3948)),
        Promise.resolve().then(A.bind(A, 3815)),
        Promise.resolve().then(A.bind(A, 4434)),
        Promise.resolve().then(A.bind(A, 8786)),
        Promise.resolve().then(A.bind(A, 6908)),
        Promise.resolve().then(A.bind(A, 5399)),
        Promise.resolve().then(A.bind(A, 5397)),
        Promise.resolve().then(A.bind(A, 9044)),
        Promise.resolve().then(A.bind(A, 495)),
        Promise.resolve().then(A.bind(A, 6780)),
        Promise.resolve().then(A.bind(A, 474)),
        Promise.resolve().then(A.bind(A, 3143)),
        Promise.resolve().then(A.bind(A, 7139)),
        Promise.resolve().then(A.bind(A, 7320)),
        Promise.resolve().then(A.bind(A, 3894)),
        Promise.resolve().then(A.bind(A, 7875)),
        Promise.resolve().then(A.bind(A, 1154)),
        Promise.resolve().then(A.bind(A, 3612)),
        Promise.resolve().then(A.bind(A, 3318)),
        Promise.resolve().then(A.bind(A, 9501)),
        Promise.resolve().then(A.bind(A, 7355)),
        Promise.resolve().then(A.bind(A, 507)),
        Promise.resolve().then(A.bind(A, 7186)),
        Promise.resolve().then(A.bind(A, 7388)),
        Promise.resolve().then(A.bind(A, 5627)),
        Promise.resolve().then(A.bind(A, 6834)),
        Promise.resolve().then(A.bind(A, 7706)),
        Promise.resolve().then(A.bind(A, 328)),
        Promise.resolve().then(A.bind(A, 9275)),
        Promise.resolve().then(A.bind(A, 5781)),
        Promise.resolve().then(A.bind(A, 1110)),
        Promise.resolve().then(A.bind(A, 772)),
        Promise.resolve().then(A.bind(A, 610)),
        Promise.resolve().then(A.bind(A, 3796)),
        Promise.resolve().then(A.bind(A, 1657)),
        Promise.resolve().then(A.bind(A, 2393)),
        Promise.resolve().then(A.bind(A, 7828)),
        Promise.resolve().then(A.bind(A, 7490)),
        Promise.resolve().then(A.bind(A, 8196)),
        Promise.resolve().then(A.bind(A, 961)),
        Promise.resolve().then(A.bind(A, 729)),
        Promise.resolve().then(A.bind(A, 3059)),
        Promise.resolve().then(A.bind(A, 2495)),
        Promise.resolve().then(A.bind(A, 8459)),
        Promise.resolve().then(A.bind(A, 5633)),
        Promise.resolve().then(A.bind(A, 6886)),
        Promise.resolve().then(A.bind(A, 7069)),
        Promise.resolve().then(A.bind(A, 9760)),
        Promise.resolve().then(A.bind(A, 2882)),
        Promise.resolve().then(A.bind(A, 2433)),
        Promise.resolve().then(A.bind(A, 8636)),
        Promise.resolve().then(A.bind(A, 1171)),
        Promise.resolve().then(A.bind(A, 855)),
        Promise.resolve().then(A.bind(A, 5187)),
        Promise.resolve().then(A.bind(A, 3449)),
        Promise.resolve().then(A.bind(A, 8203)),
        Promise.resolve().then(A.bind(A, 8850)),
        Promise.resolve().then(A.bind(A, 9483)),
        Promise.resolve().then(A.bind(A, 4936)),
        Promise.resolve().then(A.bind(A, 1878)),
        Promise.resolve().then(A.bind(A, 2430)),
        Promise.resolve().then(A.bind(A, 4473)),
        Promise.resolve().then(A.bind(A, 1311)),
        Promise.resolve().then(A.bind(A, 4128)),
        Promise.resolve().then(A.bind(A, 8646)),
        Promise.resolve().then(A.bind(A, 5607)),
        Promise.resolve().then(A.bind(A, 8753))
    },
    7648: function(e, t, A) {
        "use strict";
        A.r(t);
        var i = A(7437)
          , s = A(2862)
          , r = A.n(s);
        t.default = e => {
            let {animationPath: t, width: A} = e;
            return (0,
            i.jsx)(r(), {
                loop: !0,
                autoplay: !0,
                animationData: t,
                style: {
                    width: "95%"
                }
            })
        }
    },
    6580: function(e, t, A) {
        "use strict";
        A.r(t);
        var i = A(7437)
          , s = A(2265);
        t.default = e => {
            let {children: t, identifier: A} = e;
            return (0,
            s.useEffect)( () => {
                let e = document.querySelector(".glow-container-".concat(A))
                  , t = document.querySelectorAll(".glow-card-".concat(A))
                  , i = {
                    proximity: 40,
                    spread: 80,
                    blur: 12,
                    gap: 32,
                    vertical: !1,
                    opacity: 0
                }
                  , s = e => {
                    for (let A of t) {
                        let t = A.getBoundingClientRect();
                        (null == e ? void 0 : e.x) > t.left - i.proximity && (null == e ? void 0 : e.x) < t.left + t.width + i.proximity && (null == e ? void 0 : e.y) > t.top - i.proximity && (null == e ? void 0 : e.y) < t.top + t.height + i.proximity ? A.style.setProperty("--active", 1) : A.style.setProperty("--active", i.opacity);
                        let s = [t.left + .5 * t.width, t.top + .5 * t.height]
                          , r = 180 * Math.atan2((null == e ? void 0 : e.y) - s[1], (null == e ? void 0 : e.x) - s[0]) / Math.PI;
                        r = r < 0 ? r + 360 : r,
                        A.style.setProperty("--start", r + 90)
                    }
                }
                ;
                return document.body.addEventListener("pointermove", s),
                e.style.setProperty("--gap", i.gap),
                e.style.setProperty("--blur", i.blur),
                e.style.setProperty("--spread", i.spread),
                e.style.setProperty("--direction", i.vertical ? "column" : "row"),
                s(),
                () => {
                    document.body.removeEventListener("pointermove", s)
                }
            }
            , [A]),
            (0,
            i.jsx)("div", {
                className: "glow-container-".concat(A, " glow-container"),
                children: (0,
                i.jsxs)("article", {
                    className: "glow-card glow-card-".concat(A, " h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full"),
                    children: [(0,
                    i.jsx)("div", {
                        className: "glows"
                    }), t]
                })
            })
        }
    },
    4484: function(e, t, A) {
        "use strict";
        A.r(t);
        var i = A(7437)
          , s = A(9089)
          , r = A(5986)
          , n = A(7908)
          , a = A(2265)
          , l = A(1921)
          , d = A(7566)
          , u = A(6123)
          , h = A(9079);
        t.default = function() {
            let[e,t] = (0,
            a.useState)({
                name: "",
                email: "",
                message: ""
            })
              , [A,c] = (0,
            a.useState)(null)
              , [o,g] = (0,
            a.useState)({
                email: !1,
                required: !1
            })
              , b = () => {
                e.email && e.message && e.name && g({
                    ...o,
                    required: !1
                })
            }
              , m = async t => {
                if (t.preventDefault(),
                !A) {
                    u.toast.error("Please complete the captcha!");
                    return
                }
                if (e.email && e.message && e.name) {
                    if (o.email)
                        return;
                    g({
                        ...o,
                        required: !1
                    })
                } else {
                    g({
                        ...o,
                        required: !0
                    });
                    return
                }
                let i = h.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
                  , s = h.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
                  , a = {
                    publicKey: h.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                };
                try {
                    let e = await r.ZP.send(i, s, userInput, a)
                      , t = await n.Z.post("".concat(h.env.NEXT_PUBLIC_APP_URL, "/api/contact"), userInput);
                    (200 === e.status || 200 === t.status) && (u.toast.success("Message sent successfully!"),
                    setUserInput({
                        name: "",
                        email: "",
                        message: ""
                    }),
                    c(null))
                } catch (e) {
                    u.toast.error((null == e ? void 0 : e.text) || e)
                }
            }
            ;
            return (0,
            i.jsxs)("div", {
                className: "",
                children: [(0,
                i.jsx)("p", {
                    className: "font-medium mb-5 text-[#16f2b3] text-xl uppercase",
                    children: "Contact with me"
                }), (0,
                i.jsxs)("div", {
                    className: "max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5",
                    children: [(0,
                    i.jsx)("p", {
                        className: "text-sm text-[#d3d8e8]",
                        children: "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
                    }), (0,
                    i.jsxs)("div", {
                        className: "mt-6 flex flex-col gap-4",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-base",
                                children: "Your Name: "
                            }), (0,
                            i.jsx)("input", {
                                className: "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",
                                type: "text",
                                maxLength: "100",
                                required: !0,
                                onChange: A => t({
                                    ...e,
                                    name: A.target.value
                                }),
                                onBlur: b,
                                value: e.name
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-base",
                                children: "Your Email: "
                            }), (0,
                            i.jsx)("input", {
                                className: "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",
                                type: "email",
                                maxLength: "100",
                                required: !0,
                                value: e.email,
                                onChange: A => t({
                                    ...e,
                                    email: A.target.value
                                }),
                                onBlur: () => {
                                    b(),
                                    g({
                                        ...o,
                                        email: !(0,
                                        s.v)(e.email)
                                    })
                                }
                            }), o.email && (0,
                            i.jsx)("p", {
                                className: "text-sm text-red-400",
                                children: "Please provide a valid email!"
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-base",
                                children: "Your Message: "
                            }), (0,
                            i.jsx)("textarea", {
                                className: "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",
                                maxLength: "500",
                                name: "message",
                                required: !0,
                                onChange: A => t({
                                    ...e,
                                    message: A.target.value
                                }),
                                onBlur: b,
                                rows: "4",
                                value: e.message
                            })]
                        }), (0,
                        i.jsx)(l.Z, {
                            sitekey: h.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                            onChange: e => c(e)
                        }), (0,
                        i.jsxs)("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [o.required && (0,
                            i.jsx)("p", {
                                className: "text-sm text-red-400",
                                children: "Email and Message are required!"
                            }), (0,
                            i.jsxs)("button", {
                                className: "flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold",
                                role: "button",
                                onClick: m,
                                children: [(0,
                                i.jsx)("span", {
                                    children: "Send Message"
                                }), (0,
                                i.jsx)(d.hlH, {
                                    className: "mt-1",
                                    size: 18
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    7646: function(e, t, A) {
        "use strict";
        A.r(t);
        var i = A(7437)
          , s = A(9089)
          , r = A(7908)
          , n = A(2265)
          , a = A(7566)
          , l = A(6123)
          , d = A(9079);
        t.default = function() {
            let[e,t] = (0,
            n.useState)({
                email: !1,
                required: !1
            })
              , [A,u] = (0,
            n.useState)({
                name: "",
                email: "",
                message: ""
            })
              , h = () => {
                A.email && A.message && A.name && t({
                    ...e,
                    required: !1
                })
            }
              , c = async i => {
                if (i.preventDefault(),
                A.email && A.message && A.name) {
                    if (e.email)
                        return;
                    t({
                        ...e,
                        required: !1
                    })
                } else {
                    t({
                        ...e,
                        required: !0
                    });
                    return
                }
                let s = d.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
                  , n = d.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
                  , a = {
                    publicKey: d.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                };
                try {
                    let e = await emailjs.send(s, n, A, a)
                      , t = await r.Z.post("".concat(d.env.NEXT_PUBLIC_APP_URL, "/api/contact"), A);
                    (200 === e.status || 200 === t.status) && (l.toast.success("Message sent successfully!"),
                    u({
                        name: "",
                        email: "",
                        message: ""
                    }))
                } catch (e) {
                    l.toast.error((null == e ? void 0 : e.text) || e)
                }
            }
            ;
            return (0,
            i.jsxs)("div", {
                className: "",
                children: [(0,
                i.jsx)("p", {
                    className: "font-medium mb-5 text-[#16f2b3] text-xl uppercase",
                    children: "Contact with me"
                }), (0,
                i.jsxs)("div", {
                    className: "max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5",
                    children: [(0,
                    i.jsx)("p", {
                        className: "text-sm text-[#d3d8e8]",
                        children: "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
                    }), (0,
                    i.jsxs)("div", {
                        className: "mt-6 flex flex-col gap-4",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-base",
                                children: "Your Name: "
                            }), (0,
                            i.jsx)("input", {
                                className: "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",
                                type: "text",
                                maxLength: "100",
                                required: !0,
                                onChange: e => u({
                                    ...A,
                                    name: e.target.value
                                }),
                                onBlur: h,
                                value: A.name
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-base",
                                children: "Your Email: "
                            }), (0,
                            i.jsx)("input", {
                                className: "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",
                                type: "email",
                                maxLength: "100",
                                required: !0,
                                value: A.email,
                                onChange: e => u({
                                    ...A,
                                    email: e.target.value
                                }),
                                onBlur: () => {
                                    h(),
                                    t({
                                        ...e,
                                        email: !(0,
                                        s.v)(A.email)
                                    })
                                }
                            }), e.email && (0,
                            i.jsx)("p", {
                                className: "text-sm text-red-400",
                                children: "Please provide a valid email!"
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-base",
                                children: "Your Message: "
                            }), (0,
                            i.jsx)("textarea", {
                                className: "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",
                                maxLength: "500",
                                name: "message",
                                required: !0,
                                onChange: e => u({
                                    ...A,
                                    message: e.target.value
                                }),
                                onBlur: h,
                                rows: "4",
                                value: A.message
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [e.required && (0,
                            i.jsx)("p", {
                                className: "text-sm text-red-400",
                                children: "Email and Message are required!"
                            }), (0,
                            i.jsxs)("button", {
                                className: "flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold",
                                role: "button",
                                onClick: c,
                                children: [(0,
                                i.jsx)("span", {
                                    children: "Send Message"
                                }), (0,
                                i.jsx)(a.hlH, {
                                    className: "mt-1",
                                    size: 18
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    9089: function(e, t, A) {
        "use strict";
        function i(e) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
        }
        A.d(t, {
            v: function() {
                return i
            }
        })
    },
    6586: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/ayla.19ea4d31.jpg",
            height: 4501,
            width: 4501,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGnB//EABYQAAMAAAAAAAAAAAAAAAAAAAETFP/aAAgBAQABBQIMo//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAABETL/2gAIAQEABj8Cdwf/xAAXEAEAAwAAAAAAAAAAAAAAAAAhAAEx/9oACAEBAAE/IbhYGf/aAAwDAQACAAMAAAAQC//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EK//xAAaEAEAAQUAAAAAAAAAAAAAAAABEQAhcZGh/9oACAEBAAE/EDk6oMtnG+V//9k=",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    7825: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/crefin.7d465e7f.jpg",
            height: 2e3,
            width: 3e3,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABpAn/AP/EABUQAQEAAAAAAAAAAAAAAAAAABIi/9oACAEBAAEFAqX/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwGP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAADJB/9oACAEBAAY/Amp//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQABPyGpWj//2gAMAwEAAgADAAAAEPf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAYEAADAQEAAAAAAAAAAAAAAAABETEAIf/aAAgBAQABPxA9WolABLN//9k=",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    8124: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/real-estate.aafb3b94.jpg",
            height: 2e3,
            width: 3e3,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAG8E//EABYQAAMAAAAAAAAAAAAAAAAAAAISE//aAAgBAQABBQJjv//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AY//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGv/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEREjL/2gAIAQEABj8C24uf/8QAGRAAAQUAAAAAAAAAAAAAAAAAAQARITFh/9oACAEBAAE/ITBoA2L/2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/ED//xAAZEAADAAMAAAAAAAAAAAAAAAABESEAMaH/2gAIAQEAAT8QNdBRgUNd3n//2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    6146: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/travel.374bd821.jpg",
            height: 4500,
            width: 4500,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABoAn/xAAWEAADAAAAAAAAAAAAAAAAAAACERL/2gAIAQEAAQUCZV//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAhUf/aAAgBAQABPyFWkQeu7c//2gAMAwEAAgADAAAAEA//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QDL//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxBb/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAITFRYf/aAAgBAQABPxA2ItgYSvEg9z//2Q==",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    9767: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/adobe-xd.f0c5ce4c.svg",
            height: 50,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9605: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/adobeaudition.96b89ff6.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1280: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/after-effects.4f10a51c.svg",
            height: 50,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5589: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/angular.397f2b6c.svg",
            height: 272,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    4662: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/aws.8dff8f22.svg",
            height: 153,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7782: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/azure.9c9dc7f7.svg",
            height: 244,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9426: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/blender.eed352b2.svg",
            height: 219,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3948: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/bootstrap.9e6ddba8.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3815: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/bulma.5fcd03fd.svg",
            height: 373,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    4434: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/c.0ffdbd71.svg",
            height: 288,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8786: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/canva.0344c508.svg",
            height: 44,
            width: 44,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    6908: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/capacitorjs.ef35ab1a.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5399: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/coffeescript.c4e09c86.svg",
            height: 206,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5397: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/cplusplus.d264bdc1.svg",
            height: 288,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9044: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/csharp.7851ee36.svg",
            height: 288,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    495: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/css.e5e99f36.svg",
            height: 290,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    6780: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/dart.ee3b2b6d.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    474: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/deno.2e2b830f.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3143: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/django.0d24a6f2.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7139: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/docker.23787008.svg",
            height: 50,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7320: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/fastify.af94c3f5.svg",
            height: 165,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3894: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/figma.00471f51.svg",
            height: 384,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7875: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/firebase.20c6dcf8.svg",
            height: 351,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1154: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/flutter.49095fa4.svg",
            height: 299,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3612: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/gcp.05f3d772.svg",
            height: 77,
            width: 95,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3318: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/gimp.d563c9d7.svg",
            height: 256,
            width: 296,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9501: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/git.21d80414.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7355: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/go.c93ed780.svg",
            height: 192,
            width: 512,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    507: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/graphql.3a7e3927.svg",
            height: 288,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7186: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/haxe.32ac7bcf.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7388: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/html.ed6aaa50.svg",
            height: 290,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5627: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/illustrator.7eb9c9f7.svg",
            height: 50,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    6834: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/ionic.f459d036.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7706: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/java.31c00271.svg",
            height: 346,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    328: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/javascript.b472cbc1.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9275: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/julia.c330fbca.svg",
            height: 330,
            width: 512,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5781: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/kotlin.02ff0930.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1110: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/lightroom.3238a8d1.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    772: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/markdown.58d59da0.svg",
            height: 158,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    610: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/materialui.2900e517.svg",
            height: 204,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3796: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/matlab.77f7303a.svg",
            height: 234,
            width: 257,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1657: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/memsql.f40f9c44.svg",
            height: 184,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    2393: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/microsoftoffice.974515ca.svg",
            height: 326,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7828: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/mongoDB.d8d2b67f.svg",
            height: 249,
            width: 112,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7490: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/mysql.2ddb80d9.svg",
            height: 252,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8196: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/nextJS.99e26750.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    961: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/nginx.dd577355.svg",
            height: 291,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    729: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/numpy.0fd80405.svg",
            height: 274,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3059: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/nuxtJS.0d94fb0c.svg",
            height: 191,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    2495: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/opencv.96c1a6d0.svg",
            height: 238,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8459: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/photoshop.c2d8557c.svg",
            height: 50,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5633: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/php.bdee88ab.svg",
            height: 258,
            width: 512,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    6886: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/picsart.c8403ac7.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    7069: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/postgresql.1b536c2f.svg",
            height: 264,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9760: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/premierepro.f608c54b.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    2882: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/python.4ef95129.svg",
            height: 255,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    2433: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/pytorch.7c4e25e8.svg",
            height: 310,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8636: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/react.512a3a7e.svg",
            height: 228,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1171: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/ruby.f8a4bb76.svg",
            height: 255,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    855: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/selenium.80aec726.svg",
            height: 269,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5187: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/sketch.f176352b.svg",
            height: 232,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3449: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/strapi.e4741f5a.svg",
            height: 252,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8203: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/svelte.b1b7be9c.svg",
            height: 308,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8850: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/swift.757616d9.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    9483: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/tailwind.c0bbaf6f.svg",
            height: 154,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    4936: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/tensorflow.a44ae670.svg",
            height: 287,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1878: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/typescript.97711300.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    2430: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/unity.4e0bcc82.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    4473: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/vitejs.b0428eab.svg",
            height: 257,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1311: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/vue.522784e9.svg",
            height: 221,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    4128: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/vuetifyjs.88928116.svg",
            height: 293,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8646: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/webix.61c9b31f.svg",
            height: 213,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5607: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/wolframalpha.1ac762c0.svg",
            height: 256,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    8753: function(e, t, A) {
        "use strict";
        A.r(t),
        t.default = {
            src: "/_next/static/media/wordpress.9f06d992.svg",
            height: 255,
            width: 256,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}, function(e) {
    e.O(0, [465, 705, 250, 749, 430, 889, 971, 69, 744], function() {
        return e(e.s = 8536)
    }),
    _N_E = e.O()
}
]);
