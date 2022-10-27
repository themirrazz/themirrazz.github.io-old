var Is = Object.defineProperty,
    Es = Object.defineProperties;
var Cs = Object.getOwnPropertyDescriptors;
var Ba = Object.getOwnPropertySymbols,
    Ss = Object.getPrototypeOf,
    xs = Object.prototype.hasOwnProperty,
    _s = Object.prototype.propertyIsEnumerable,
    Ps = Reflect.get;
var We = Math.pow,
    ya = (r, t, e) => (t in r ? Is(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e)),
    l = (r, t) => {
        for (var e in t || (t = {})) xs.call(t, e) && ya(r, e, t[e]);
        if (Ba) for (var e of Ba(t)) _s.call(t, e) && ya(r, e, t[e]);
        return r;
    },
    c = (r, t) => Es(r, Cs(t));
var s = (r, t, e) => (ya(r, typeof t != "symbol" ? t + "" : t, e), e);
var G = (r, t, e) => Ps(Ss(r), e, t);
var o = (r, t, e) =>
    new Promise((a, i) => {
        var n = (m) => {
                try {
                    h(e.next(m));
                } catch (v) {
                    i(v);
                }
            },
            d = (m) => {
                try {
                    h(e.throw(m));
                } catch (v) {
                    i(v);
                }
            },
            h = (m) => (m.done ? a(m.value) : Promise.resolve(m.value).then(n, d));
        h((e = e.apply(r, t)).next());
    });
import {
    c as Ts,
    j as _e,
    i as As,
    a as Ds,
    u as ft,
    b as ie,
    r as ja,
    d as Dt,
    e as ks,
    f as ds,
    s as Xe,
    g as te,
    h as cs,
    w as Ha,
    k as Ls,
    l as Rs,
    m as A,
    n as Os,
    o as Fs,
    p as pa,
    q as Ws,
    t as Us,
    v as Gs,
    x as Ns,
    y as Fe,
    z as L,
    A as V,
    B as _,
    C as de,
    D as $e,
    T as us,
    E as Ms,
    F as Vs,
    G as gt,
    H as $s,
    I as Pe,
    J as ut,
    K as _a,
    L as k,
    M as zs,
    N as Je,
    O as ga,
    P as Ya,
    Q as Bs,
    R as js,
    S as Hs,
    U as Ys,
    V as Js,
} from "./vendor-8eeedc94.js";
const qs = function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
    new MutationObserver((i) => {
        for (const n of i) if (n.type === "childList") for (const d of n.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
    }).observe(document, { childList: !0, subtree: !0 });
    function e(i) {
        const n = {};
        return (
            i.integrity && (n.integrity = i.integrity),
            i.referrerpolicy && (n.referrerPolicy = i.referrerpolicy),
            i.crossorigin === "use-credentials" ? (n.credentials = "include") : i.crossorigin === "anonymous" ? (n.credentials = "omit") : (n.credentials = "same-origin"),
            n
        );
    }
    function a(i) {
        if (i.ep) return;
        i.ep = !0;
        const n = e(i);
        fetch(i.href, n);
    }
};
qs();
const Ks = "modulepreload",
    Ja = {},
    Xs = "/app/",
    f = function (t, e) {
        return !e || e.length === 0
            ? t()
            : Promise.all(
                  e.map((a) => {
                      if (((a = `${Xs}${a}`), a in Ja)) return;
                      Ja[a] = !0;
                      const i = a.endsWith(".css"),
                          n = i ? '[rel="stylesheet"]' : "";
                      if (document.querySelector(`link[href="${a}"]${n}`)) return;
                      const d = document.createElement("link");
                      if (((d.rel = i ? "stylesheet" : Ks), i || ((d.as = "script"), (d.crossOrigin = "")), (d.href = a), document.head.appendChild(d), i))
                          return new Promise((h, m) => {
                              d.addEventListener("load", h), d.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${a}`)));
                          });
                  })
              ).then(() => t());
    },
    Zs = {
        language: "English",
        components: {
            TheLoadingDialog: { loading: "Loading" },
            TheNavigationDrawer: {
                loggedInAsSuperAdmin: "Super admin",
                loggedInAsSchoolAdmin: "School admin",
                loggedInAsAdminAndPro: "Pro & Admin",
                loggedInAsProUser: "Pro account",
                loggedInAsProTrialingUser1: "Trial (",
                loggedInAsProTrialingUser2NIs1: " day left)",
                loggedInAsProTrialingUser2NIsMore: " days left)",
                trialExpired: "Trial expired",
                loggedInAsFreeUser: "Logged in",
                notLoggedIn: "Not logged in",
                logIn: "Log in",
                logOut: "Log out",
                goTo: "Go to",
                goToLogIn: "login",
                goToSignUp: "signup",
            },
        },
        events: { Login: { validateEmailMessage: "Please use the link in the verification email to confirm your email address.", validateEmailButton: "resend" } },
        pages: {
            TermsAndConditionsPage: {
                router: { title: "Updated Terms" },
                tos: {
                    part1: "Here you can find our",
                    conditions: "Terms and Conditions",
                    part2: "and our",
                    privacyPolicy: "Privacy Policy",
                    part3: ".",
                    label: "I agree to the terms and the privacy policy.",
                    warningMessage: "You will have to accept the conditions listed above in order to continue!",
                    accept: "Accept",
                    close: "Close",
                },
            },
            SignUpPage: {
                router: { title: "Sign up" },
                or: "or",
                tos: {
                    part1: "Here you can find our",
                    conditions: "Terms and Conditions",
                    part2: "and our",
                    privacyPolicy: "Privacy Policy",
                    part3: ".",
                    label: "I agree to the terms and the privacy policy.",
                    warningMessage: "You will have to accept the conditions listed above in order to continue!",
                    close: "Close",
                },
                account: { labelBold: "Option 2", label: "Create an account with email and password:", button: "Sign up" },
                email: { label: "Email", required: "Email is required", valid: "Please enter a valid email address" },
                password: { label: "Password", required: "Password is required", valid: "Password must be at least 8 characters long" },
                social: { labelBold: "Option 1", label: "Sign up using your account at one of the following services:", google: "Sign up with Google", microsoft: "Sign up with Microsoft" },
                other: { alreadyAccount: "Do you already have an account?", login: "Log in" },
                messages: {
                    accountExists: "This e-mail address is already in use. Try logging in.",
                    loginButton: "Log in",
                    verificationEmailSent: "We have sent you an e-mail to validate your email address. Use the link in the email to activate your account.",
                    verificationEmailReminder: "Please activate your account using the activation email we sent you. If you cannot find the email, it might be in the spambox.",
                },
            },
            LoginPage: {
                router: { title: "Log in" },
                account: { labelBold: "Option 2", label: "Log in with email and password:", button: "Log in" },
                email: { label: "E-mail", required: "Email is required", valid: "Please enter a valid email address" },
                password: { label: "Password", required: "Password is required" },
                social: { labelBold: "Option 1", label: "Log in using an account with one of the following services:", google: "Log in with Google", microsoft: "Log in with Microsoft" },
                other: { noAccountYet: "You have not got an account yet?", signUp: "Sign up", forgotPassword: "Forgot your password?", resetPassword: "Recover your password" },
                messages: {
                    unknownAccount: "An account with this email address does not exist.",
                    signupButton: "sign up",
                    invalidPassword: "The password is incorrect.",
                    resetPasswordButton: "reset password",
                    tooManyRequests: "You have made too many login attempts within a short period. Please try again later.",
                },
            },
            LogoutPage: { router: { title: "Logging out" }, main: { message: "One moment, we're logging you out..." } },
            ResetPasswordPage: { router: { title: "Restore password" }, p: "Send me an email to reset my password", button: "Send email", createdNewPassword: "Have you reset your password?", login: "Log in" },
            ActivationPage: {
                textBold: "Activating your account",
                text: "Please use the code from your activation email to activate your account:",
                activationCode: { label: "Activation Code", required: "The activation code is required.", valid: "The activation code should be 36 characters long." },
                processing: "Your request is being processed. Your account type will be changed soon if the supplied code is valid.",
                button: "Activate",
            },
        },
    },
    hs = {
        core: Zs,
        widgets: {
            Background: { caption: "background", captionSpaced: "background" },
            Calendar: { caption: "calendar", captionSpaced: "calendar", todayIts: "Today is" },
            Clock: { caption: "clock", captionSpaced: "clock" },
            Dice: { caption: "dice", captionSpaced: "dice" },
            Draw: { caption: "draw", captionSpaced: "draw" },
            Embed: { caption: "embed", captionSpaced: "embed" },
            GroupMaker: { caption: "groupmaker", captionSpaced: "group maker" },
            Image: { caption: "image", captionSpaced: "image" },
            MoreWidgets: { caption: "more widgets", captionSpaced: "more widgets" },
            Poll: { caption: "poll", captionSpaced: "poll" },
            QrCode: { caption: "qr-code", captionSpaced: "qr code" },
            RandomName: { caption: "random name", captionSpaced: "random name" },
            SoundLevel: { caption: "sound level", captionSpaced: "sound level" },
            Stopwatch: { caption: "stopwatch", captionSpaced: "stopwatch" },
            Text: { caption: "text", captionSpaced: "text" },
            Timer: { caption: "timer", captionSpaced: "timer" },
            TrafficLight: { caption: "traffic light", captionSpaced: "traffic light" },
            Video: { caption: "video", captionSpaced: "video" },
            Webcam: { caption: "webcam", captionSpaced: "webcam" },
            WorkSymbols: { caption: "work symbols", captionSpaced: "work symbols", silence: "silence", whisper: "whisper", askNeighbor: "ask neighbor", workTogether: "work together" },
        },
    };
var Qs = Object.freeze({ __proto__: null, [Symbol.toStringTag]: "Module", en_us: hs });
function ei(r) {
    switch (r) {
        case "./locales/af.ts":
            return f(() => import("./af-9a33dcde.js"), ["af-9a33dcde.js", "vendor-8eeedc94.js"]);
        case "./locales/ar.ts":
            return f(() => import("./ar-b6fc38dc.js"), ["ar-b6fc38dc.js", "vendor-8eeedc94.js"]);
        case "./locales/ast.ts":
            return f(() => import("./ast-5a079827.js"), ["ast-5a079827.js", "vendor-8eeedc94.js"]);
        case "./locales/az_az.ts":
            return f(() => import("./az_az-db4f5c26.js"), ["az_az-db4f5c26.js", "vendor-8eeedc94.js"]);
        case "./locales/be.ts":
            return f(() => import("./be-c0eabeeb.js"), ["be-c0eabeeb.js", "vendor-8eeedc94.js"]);
        case "./locales/bg.ts":
            return f(() => import("./bg-1b4a014a.js"), ["bg-1b4a014a.js", "vendor-8eeedc94.js"]);
        case "./locales/bre.ts":
            return f(() => import("./bre-e8679193.js"), ["bre-e8679193.js", "vendor-8eeedc94.js"]);
        case "./locales/bs.ts":
            return f(() => import("./bs-d8a60fb2.js"), ["bs-d8a60fb2.js", "vendor-8eeedc94.js"]);
        case "./locales/ca.ts":
            return f(() => import("./ca-5ae63c59.js"), ["ca-5ae63c59.js", "vendor-8eeedc94.js"]);
        case "./locales/cor.ts":
            return f(() => import("./cor-436026be.js"), ["cor-436026be.js", "vendor-8eeedc94.js"]);
        case "./locales/cs.ts":
            return f(() => import("./cs-99a3205e.js"), ["cs-99a3205e.js", "vendor-8eeedc94.js"]);
        case "./locales/cy.ts":
            return f(() => import("./cy-bf146044.js"), ["cy-bf146044.js", "vendor-8eeedc94.js"]);
        case "./locales/da.ts":
            return f(() => import("./da-db73f792.js"), ["da-db73f792.js", "vendor-8eeedc94.js"]);
        case "./locales/dar.ts":
            return f(() => import("./dar-366309a8.js"), ["dar-366309a8.js", "vendor-8eeedc94.js"]);
        case "./locales/de_ch.ts":
            return f(() => import("./de_ch-a5931c31.js"), ["de_ch-a5931c31.js", "vendor-8eeedc94.js"]);
        case "./locales/de_de.ts":
            return f(() => import("./de_de-8b5a1a2a.js"), ["de_de-8b5a1a2a.js", "vendor-8eeedc94.js"]);
        case "./locales/el.ts":
            return f(() => import("./el-486c048f.js"), ["el-486c048f.js", "vendor-8eeedc94.js"]);
        case "./locales/en_au.ts":
            return f(() => import("./en_au-4fd68b48.js"), ["en_au-4fd68b48.js", "vendor-8eeedc94.js"]);
        case "./locales/en_ca.ts":
            return f(() => import("./en_ca-c123ba3d.js"), ["en_ca-c123ba3d.js", "vendor-8eeedc94.js"]);
        case "./locales/en_gb.ts":
            return f(() => import("./en_gb-7797243a.js"), ["en_gb-7797243a.js", "vendor-8eeedc94.js"]);
        case "./locales/en_ie.ts":
            return f(() => import("./en_ie-317c0254.js"), ["en_ie-317c0254.js", "vendor-8eeedc94.js"]);
        case "./locales/en_nz.ts":
            return f(() => import("./en_nz-802881a9.js"), ["en_nz-802881a9.js", "vendor-8eeedc94.js"]);
        case "./locales/en_us.ts":
            return f(
                () =>
                    Promise.resolve().then(function () {
                        return Qs;
                    }),
                void 0
            );
        case "./locales/eo.ts":
            return f(() => import("./eo-d41ec138.js"), ["eo-d41ec138.js", "vendor-8eeedc94.js"]);
        case "./locales/es_ar.ts":
            return f(() => import("./es_ar-0e6d79cb.js"), ["es_ar-0e6d79cb.js", "vendor-8eeedc94.js"]);
        case "./locales/es_es.ts":
            return f(() => import("./es_es-9f8d1103.js"), ["es_es-9f8d1103.js", "vendor-8eeedc94.js"]);
        case "./locales/et.ts":
            return f(() => import("./et-26b334f0.js"), ["et-26b334f0.js", "vendor-8eeedc94.js"]);
        case "./locales/eu.ts":
            return f(() => import("./eu-0946054a.js"), ["eu-0946054a.js", "vendor-8eeedc94.js"]);
        case "./locales/fa.ts":
            return f(() => import("./fa-f2f60424.js"), ["fa-f2f60424.js", "vendor-8eeedc94.js"]);
        case "./locales/fi.ts":
            return f(() => import("./fi-b73e7a66.js"), ["fi-b73e7a66.js", "vendor-8eeedc94.js"]);
        case "./locales/fr_ca.ts":
            return f(() => import("./fr_ca-06bc4758.js"), ["fr_ca-06bc4758.js", "vendor-8eeedc94.js"]);
        case "./locales/fr_fr.ts":
            return f(() => import("./fr_fr-527a6106.js"), ["fr_fr-527a6106.js", "vendor-8eeedc94.js"]);
        case "./locales/fy.ts":
            return f(() => import("./fy-08ef645a.js"), ["fy-08ef645a.js", "vendor-8eeedc94.js"]);
        case "./locales/gd.ts":
            return f(() => import("./gd-a80ce305.js"), ["gd-a80ce305.js", "vendor-8eeedc94.js"]);
        case "./locales/gl.ts":
            return f(() => import("./gl-53aef086.js"), ["gl-53aef086.js", "vendor-8eeedc94.js"]);
        case "./locales/gu.ts":
            return f(() => import("./gu-f79cb09e.js"), ["gu-f79cb09e.js", "vendor-8eeedc94.js"]);
        case "./locales/haw.ts":
            return f(() => import("./haw-b0d54f19.js"), ["haw-b0d54f19.js", "vendor-8eeedc94.js"]);
        case "./locales/he.ts":
            return f(() => import("./he-75dba604.js"), ["he-75dba604.js", "vendor-8eeedc94.js"]);
        case "./locales/hr.ts":
            return f(() => import("./hr-1fbea16b.js"), ["hr-1fbea16b.js", "vendor-8eeedc94.js"]);
        case "./locales/hu.ts":
            return f(() => import("./hu-ab6a8296.js"), ["hu-ab6a8296.js", "vendor-8eeedc94.js"]);
        case "./locales/hy.ts":
            return f(() => import("./hy-d6d42e24.js"), ["hy-d6d42e24.js", "vendor-8eeedc94.js"]);
        case "./locales/id.ts":
            return f(() => import("./id-dd21c1bd.js"), ["id-dd21c1bd.js", "vendor-8eeedc94.js"]);
        case "./locales/is.ts":
            return f(() => import("./is-fab9948e.js"), ["is-fab9948e.js", "vendor-8eeedc94.js"]);
        case "./locales/it_it.ts":
            return f(() => import("./it_it-2562b9c2.js"), ["it_it-2562b9c2.js", "vendor-8eeedc94.js"]);
        case "./locales/ja.ts":
            return f(() => import("./ja-f248bc25.js"), ["ja-f248bc25.js", "vendor-8eeedc94.js"]);
        case "./locales/kn.ts":
            return f(() => import("./kn-996f2270.js"), ["kn-996f2270.js", "vendor-8eeedc94.js"]);
        case "./locales/ko.ts":
            return f(() => import("./ko-e1ac80b9.js"), ["ko-e1ac80b9.js", "vendor-8eeedc94.js"]);
        case "./locales/la.ts":
            return f(() => import("./la-fa6baeed.js"), ["la-fa6baeed.js", "vendor-8eeedc94.js"]);
        case "./locales/lt.ts":
            return f(() => import("./lt-6d2c619c.js"), ["lt-6d2c619c.js", "vendor-8eeedc94.js"]);
        case "./locales/lv.ts":
            return f(() => import("./lv-4496f974.js"), ["lv-4496f974.js", "vendor-8eeedc94.js"]);
        case "./locales/mai.ts":
            return f(() => import("./mai-9d2f4652.js"), ["mai-9d2f4652.js", "vendor-8eeedc94.js"]);
        case "./locales/ms_my.ts":
            return f(() => import("./ms_my-b6690587.js"), ["ms_my-b6690587.js", "vendor-8eeedc94.js"]);
        case "./locales/mt.ts":
            return f(() => import("./mt-21bc779e.js"), ["mt-21bc779e.js", "vendor-8eeedc94.js"]);
        case "./locales/nl_nl.ts":
            return f(() => import("./nl_nl-a240aa6d.js"), []);
        case "./locales/no_no.ts":
            return f(() => import("./no_no-7cfd3704.js"), ["no_no-7cfd3704.js", "vendor-8eeedc94.js"]);
        case "./locales/oc.ts":
            return f(() => import("./oc-10dbe654.js"), ["oc-10dbe654.js", "vendor-8eeedc94.js"]);
        case "./locales/pas.ts":
            return f(() => import("./pas-68f6f757.js"), ["pas-68f6f757.js", "vendor-8eeedc94.js"]);
        case "./locales/pl.ts":
            return f(() => import("./pl-6d80c0a0.js"), ["pl-6d80c0a0.js", "vendor-8eeedc94.js"]);
        case "./locales/pt_br.ts":
            return f(() => import("./pt_br-626e3318.js"), ["pt_br-626e3318.js", "vendor-8eeedc94.js"]);
        case "./locales/pt_pt.ts":
            return f(() => import("./pt_pt-b0210c85.js"), ["pt_pt-b0210c85.js", "vendor-8eeedc94.js"]);
        case "./locales/rm.ts":
            return f(() => import("./rm-2d1c998b.js"), ["rm-2d1c998b.js", "vendor-8eeedc94.js"]);
        case "./locales/ro.ts":
            return f(() => import("./ro-10cf843a.js"), ["ro-10cf843a.js", "vendor-8eeedc94.js"]);
        case "./locales/ru.ts":
            return f(() => import("./ru-caa1f612.js"), ["ru-caa1f612.js", "vendor-8eeedc94.js"]);
        case "./locales/si.ts":
            return f(() => import("./si-7758aa8a.js"), ["si-7758aa8a.js", "vendor-8eeedc94.js"]);
        case "./locales/si_lk.ts":
            return f(() => import("./si_lk-1a555768.js"), ["si_lk-1a555768.js", "vendor-8eeedc94.js"]);
        case "./locales/sk.ts":
            return f(() => import("./sk-da290e50.js"), ["sk-da290e50.js", "vendor-8eeedc94.js"]);
        case "./locales/sl.ts":
            return f(() => import("./sl-8cc50342.js"), ["sl-8cc50342.js", "vendor-8eeedc94.js"]);
        case "./locales/sq.ts":
            return f(() => import("./sq-7cc7c7b7.js"), ["sq-7cc7c7b7.js", "vendor-8eeedc94.js"]);
        case "./locales/sr.ts":
            return f(() => import("./sr-04e374a1.js"), ["sr-04e374a1.js", "vendor-8eeedc94.js"]);
        case "./locales/sv_se.ts":
            return f(() => import("./sv_se-fc530dd6.js"), ["sv_se-fc530dd6.js", "vendor-8eeedc94.js"]);
        case "./locales/sw.ts":
            return f(() => import("./sw-97191e2f.js"), ["sw-97191e2f.js", "vendor-8eeedc94.js"]);
        case "./locales/th.ts":
            return f(() => import("./th-68a01671.js"), ["th-68a01671.js", "vendor-8eeedc94.js"]);
        case "./locales/tl_ph.ts":
            return f(() => import("./tl_ph-f5970eb5.js"), ["tl_ph-f5970eb5.js", "vendor-8eeedc94.js"]);
        case "./locales/tr.ts":
            return f(() => import("./tr-9290cf7e.js"), ["tr-9290cf7e.js", "vendor-8eeedc94.js"]);
        case "./locales/uk.ts":
            return f(() => import("./uk-8c1252b1.js"), ["uk-8c1252b1.js", "vendor-8eeedc94.js"]);
        case "./locales/uz.ts":
            return f(() => import("./uz-f2de818c.js"), ["uz-f2de818c.js", "vendor-8eeedc94.js"]);
        case "./locales/vi.ts":
            return f(() => import("./vi-d53f3f60.js"), ["vi-d53f3f60.js", "vendor-8eeedc94.js"]);
        case "./locales/zh_cn.ts":
            return f(() => import("./zh_cn-8cb629ac.js"), ["zh_cn-8cb629ac.js", "vendor-8eeedc94.js"]);
        case "./locales/zh_tw.ts":
            return f(() => import("./zh_tw-e3ed5bb0.js"), ["zh_tw-e3ed5bb0.js", "vendor-8eeedc94.js"]);
        default:
            return new Promise(function (t, e) {
                (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(e.bind(null, new Error("Unknown variable dynamic import: " + r)));
            });
    }
}
const oa = Ts({ locale: "en_us", fallbackLocale: "en_us", messages: { en_us: hs } });
function ti(r) {
    return o(this, null, function* () {
        const t = oa.getLocaleMessage(r);
        if (!Object.keys(t).length) {
            const e = (yield ei(`./locales/${r}.ts`))[r];
            oa.setLocaleMessage(r, e);
        }
        oa.changeLocale(r);
    });
}
class y extends Error {
    constructor(e) {
        var a, i, n, d, h, m, v, I, C, O, U, D;
        super();
        s(this, "isLsipError", !0);
        s(this, "code");
        s(this, "type");
        s(this, "message");
        s(this, "description");
        s(this, "logTo");
        s(this, "source");
        (this.message = e.message),
            (this.code = (a = e.code) != null ? a : 500),
            (this.type = (i = e.type) != null ? i : e.message),
            (this.description = (n = e.description) != null ? n : e.message),
            (this.logTo = {
                analytics: (d = e.logToAnalytics) != null ? d : !0,
                console: (h = e.logToConsole) != null ? h : !0,
                email: (m = e.logToEmail) != null ? m : !1,
                logs: (v = e.logToLogs) != null ? v : !0,
                sentry: (I = e.logToSentry) != null ? I : !0,
            }),
            (this.source = {
                function: (C = e.sourceFunction) != null ? C : "",
                objectId: (O = e.sourceObjectId) != null ? O : "",
                objectType: (U = e.sourceObjectType) != null ? U : "",
                url: (D = e.sourceUrl) != null ? D : "",
                error: e.originalError,
            });
    }
    toString() {
        return `
message:${this.message}

code:${this.code}
type:${this.type}
description:${this.description}

logToAnalytics:${this.logTo.analytics}
logToConsole:${this.logTo.console}
logToEmail:${this.logTo.email}
logToLogs:${this.logTo.logs}
logToSentry:${this.logTo.sentry}

sourceFunction:${this.source.function}
sourceUrl:${this.source.url}
sourceObjectType:${this.source.objectType}
sourceObjectId:${this.source.objectId}

originalError:${this.source.error}
    `;
    }
}
function T(r) {
    return typeof r == "object" ? !!r.isLsipError : !1;
}
const Pt = (r) => {
    if (T(r.originalError)) {
        const t = r.originalError;
        return (
            (t.source.error = _e(t)),
            (t.message = r.message),
            r.code && (t.code = r.code),
            r.type && (t.type = r.type),
            r.description && (t.description = r.description),
            r.logToAnalytics !== void 0 && (t.logTo.analytics = r.logToAnalytics),
            r.logToConsole !== void 0 && (t.logTo.console = r.logToConsole),
            r.logToEmail !== void 0 && (t.logTo.email = r.logToEmail),
            r.logToLogs !== void 0 && (t.logTo.logs = r.logToLogs),
            r.logToSentry !== void 0 && (t.logTo.sentry = r.logToSentry),
            r.sourceFunction !== void 0 && (t.source.function = r.sourceFunction + (t.source.function ? " <- " : "") + t.source.function),
            !t.source.url && r.sourceUrl && (t.source.url = r.sourceUrl),
            !t.source.objectType && r.sourceObjectType && (t.source.objectType = r.sourceObjectType),
            !t.source.objectId && r.sourceObjectId && (t.source.objectId = r.sourceObjectId),
            t
        );
    } else return new y(r);
};
class Q extends Error {
    constructor(t, e) {
        return (
            super(`TypeScript thought we could never end up here
${e}`),
            t
        );
    }
}
function et(r) {
    return new Promise((t) => setTimeout(t, r));
}
function Lt() {
    let r = new Date().getTime(),
        t = (typeof performance != "undefined" && performance.now && performance.now() * 1e3) || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        let a = Math.random() * 16;
        return r > 0 ? ((a = (r + a) % 16 | 0), (r = Math.floor(r / 16))) : ((a = (t + a) % 16 | 0), (t = Math.floor(t / 16))), (e === "x" ? a : (a & 3) | 8).toString(16);
    });
}
const mt = { config: null };
let P = null;
const ai = (r) => ((mt.config = si(r)), P || (P = As(mt.config)), P),
    si = (r) => (
        Object.keys(r.config).forEach((t) => {
            if (r.config[t] === void 0) throw Error("Firebase configuration is missing value for : " + t);
            if (r.config[t].length === 0) throw Error("Firebase configuration is missing value for : " + t);
        }),
        r.config
    ),
    ht = class {
        static getMethods() {
            return o(this, null, function* () {
                if (!P) throw new y({ message: "Firebase is not initialized", sourceFunction: "Analytics" });
                return ht.methods || (ht.methods = yield f(() => import("./firebase-analytics-4fdf403e.js"), ["firebase-analytics-4fdf403e.js", "vendor-8eeedc94.js"])), ht.methods;
            });
        }
        static logEvent(t) {
            return o(this, null, function* () {
                const e = yield ht.getMethods(),
                    a = e.getAnalytics(P);
                e.logEvent(a, t.eventName, t.eventParams);
            });
        }
    };
let la = ht;
s(la, "methods");
const B = class {
    static getMethods() {
        return o(this, null, function* () {
            var t;
            if (!P) throw new y({ message: "Firebase is not initialized", sourceFunction: "Auth" });
            if (!B.methods && ((B.methods = yield f(() => import("./firebase-auth-e1b9871d.js"), ["firebase-auth-e1b9871d.js", "vendor-8eeedc94.js"])), (t = mt.config) != null && t._useEmulator)) {
                const e = B.methods.getAuth(P);
                B.methods.connectAuthEmulator(e, "localhost");
            }
            return B.methods;
        });
    }
    static onAuthStateChanged(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            return e.onAuthStateChanged(a, t.callback);
        });
    }
    static onIdTokenChanged(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            return e.onIdTokenChanged(a, t.callback);
        });
    }
    static logInWithPassword(t) {
        return o(this, null, function* () {
            try {
                const e = yield B.getMethods(),
                    a = e.getAuth(P);
                return yield e.signInWithEmailAndPassword(a, t.email, t.password);
            } catch (e) {
                throw e.code === "auth/user-not-found"
                    ? Pt({ message: e.code, originalError: e, type: "user-not-found", sourceFunction: "login-email" })
                    : e.code === "auth/wrong-password"
                    ? Pt({ message: e.code, originalError: e, type: "wrong-password", sourceFunction: "login-email" })
                    : e.code === "auth/too-many-requests"
                    ? Pt({ message: e.code, originalError: e, type: "too-many-requests", sourceFunction: "login-email" })
                    : e;
            }
        });
    }
    static logInWithGoogle(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            a.useDeviceLanguage();
            const i = new e.GoogleAuthProvider();
            return i.addScope("email"), i.addScope("profile"), i.setCustomParameters({ prompt: "select_account" }), yield e.signInWithPopup(a, i);
        });
    }
    static logInWithMicrosoft(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            a.useDeviceLanguage();
            const i = new e.OAuthProvider("microsoft.com");
            return i.setCustomParameters({ prompt: "select_account" }), yield e.signInWithPopup(a, i);
        });
    }
    static reauthenticateUser(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            if (!a.currentUser) throw new y({ message: "User is null", sourceFunction: "reauthenticateUser" });
            const i = e.EmailAuthProvider.credential(t.email, t.password);
            return yield e.reauthenticateWithCredential(a.currentUser, i);
        });
    }
    static signOut(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            return yield e.signOut(a), {};
        });
    }
    static signUpWithPassword(t) {
        return o(this, null, function* () {
            try {
                const e = yield B.getMethods(),
                    a = e.getAuth(P);
                return yield e.createUserWithEmailAndPassword(a, t.email, t.password);
            } catch (e) {
                throw e.code === "auth/email-already-in-use" ? Pt({ message: e.code, originalError: e, type: "email-already-in-use", sourceFunction: "signup-email" }) : e;
            }
        });
    }
    static signUpWithGoogle(t) {
        return o(this, null, function* () {
            return yield B.logInWithGoogle(t);
        });
    }
    static signUpWithMicrosoft(t) {
        return o(this, null, function* () {
            return yield B.logInWithMicrosoft(t);
        });
    }
    static sendPasswordResetEmail(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                a = e.getAuth(P);
            return yield e.sendPasswordResetEmail(a, t.email, { url: "https://classroomscreen.com/app/login", handleCodeInApp: !1 });
        });
    }
    static sendEmailVerification() {
        return o(this, null, function* () {
            const t = yield B.getMethods(),
                a = t.getAuth(P).currentUser;
            if (a) return yield t.sendEmailVerification(a, { url: "https://classroomscreen.com/app/login", handleCodeInApp: !1 });
            throw new y({ message: "No active user found", sourceFunction: "sendEmailVerification" });
        });
    }
    static updatePassword(t) {
        return o(this, null, function* () {
            const e = yield B.getMethods(),
                i = e.getAuth(P).currentUser;
            if (i) return yield e.updatePassword(i, t.newPassword), {};
            throw new y({ message: "No active user found", sourceFunction: "updatePassword" });
        });
    }
};
let W = B;
s(W, "methods");
const ae = class {
    static getMethods() {
        return o(this, null, function* () {
            var t;
            if (!P) throw new y({ message: "Firebase is not initialized", sourceFunction: "Firestore" });
            if (!ae.methods && ((ae.methods = yield f(() => import("./firebase-firestore-59054d7e.js"), ["firebase-firestore-59054d7e.js", "vendor-8eeedc94.js"])), (t = mt.config) != null && t._useEmulator)) {
                const e = ae.methods.getFirestore(P);
                ae.methods.connectFirestoreEmulator(e, "localhost", 9e3);
            }
            return ae.methods;
        });
    }
    static readDocument(t) {
        return o(this, null, function* () {
            const e = yield ae.getMethods(),
                a = e.getFirestore(P);
            try {
                const i = e.doc(a, t.path),
                    n = yield e.getDoc(i);
                if (n.exists()) {
                    const d = n.data();
                    if (d) return { data: d };
                    throw new Error("Data is falsy");
                } else throw new y({ message: "Document does not exist", code: 404, sourceFunction: "readDocument", sourceObjectId: t.path, sourceObjectType: t.path, logToSentry: !1 });
            } catch (i) {
                throw i.code === "permission-denied" ? new y({ message: "Permission denied", code: 403, type: i.code, sourceFunction: "readDocument", sourceObjectId: t.path, sourceObjectType: t.path, originalError: i }) : i;
            }
        });
    }
    static writeDocument(t) {
        return o(this, null, function* () {
            try {
                const e = yield ae.getMethods(),
                    a = e.getFirestore(P),
                    i = e.doc(a, t.path);
                return yield e.setDoc(i, t.data, { merge: !1 }), {};
            } catch (e) {
                throw e.code === "permission-denied" ? new y({ message: "Permission denied", code: 403, type: e.code, sourceFunction: "writeDocument", sourceObjectId: t.path, sourceObjectType: t.path, originalError: e }) : e;
            }
        });
    }
    static deleteDocument(t) {
        return o(this, null, function* () {
            try {
                const e = yield ae.getMethods(),
                    a = e.getFirestore(P),
                    i = e.doc(a, t.path);
                return yield e.deleteDoc(i), {};
            } catch (e) {
                throw e.code === "permission-denied" ? new y({ message: "Permission denied", code: 403, type: e.code, sourceFunction: "deleteDocument", sourceObjectId: t.path, sourceObjectType: t.path, originalError: e }) : e;
            }
        });
    }
    static onSnapshot(t) {
        return o(this, null, function* () {
            const e = yield ae.getMethods(),
                a = e.getFirestore(P),
                i = e.doc(a, t.path);
            return { unsubscribe: e.onSnapshot(i, { next: t.next }) };
        });
    }
    static getSetLogLevel() {
        return o(this, null, function* () {
            return (yield ae.getMethods()).setLogLevel;
        });
    }
    static serverTimestamp() {
        return ae.methods ? ae.methods.serverTimestamp() : null;
    }
    static toDate(t) {
        return t ? t.toDate() : null;
    }
    static toTimestamp(t) {
        return !t || !ae.methods ? null : ae.methods.Timestamp.fromDate(t);
    }
};
let Re = ae;
s(Re, "methods");
const Ae = class {
    static getMethods() {
        return o(this, null, function* () {
            if (!P) throw new y({ message: "Firebase is not initialized", sourceFunction: "Rtdb" });
            return Ae.methods || (Ae.methods = yield f(() => import("./firebase-database-73356609.js"), ["firebase-database-73356609.js", "vendor-8eeedc94.js"])), Ae.methods;
        });
    }
    static getDatabaseUrl(t) {
        var n, d;
        const e = [...t].reduce((h, m) => h + m.charCodeAt(0), 0),
            a = (d = (n = mt.config) == null ? void 0 : n.databaseURLs) != null ? d : [];
        if (a.length === 0) throw new y({ message: "no database found" });
        const i = e % a.length;
        return a[i];
    }
    static readDocument(t) {
        return o(this, null, function* () {
            const e = yield Ae.getMethods(),
                a = Ae.getDatabaseUrl(t.ownerId),
                i = e.getDatabase(void 0, a),
                n = e.ref(i, t.path),
                d = yield e.get(n);
            if (d.exists()) {
                const h = d.val();
                if (h) return { data: h };
                throw new Error("Data is falsy");
            } else throw new y({ message: "Document does not exist", code: 404, sourceFunction: "readDocument", sourceObjectId: t.path, sourceObjectType: t.path });
        });
    }
    static writeDocument(t) {
        return o(this, null, function* () {
            const e = yield Ae.getMethods(),
                a = Ae.getDatabaseUrl(t.ownerId),
                i = e.getDatabase(void 0, a),
                n = e.ref(i, t.path);
            return yield e.set(n, t.data), {};
        });
    }
    static deleteDocument(t) {
        return o(this, null, function* () {
            const e = yield Ae.getMethods(),
                a = Ae.getDatabaseUrl(t.ownerId),
                i = e.getDatabase(void 0, a),
                n = e.ref(i, t.path);
            return yield e.remove(n), {};
        });
    }
    static onValue(t) {
        return o(this, null, function* () {
            const e = yield Ae.getMethods(),
                a = Ae.getDatabaseUrl(t.ownerId),
                i = e.getDatabase(void 0, a),
                n = e.ref(i, t.path);
            return { unsubscribe: e.onValue(n, t.callback) };
        });
    }
};
let qe = Ae;
s(qe, "methods");
const je = class {
    static getMethods() {
        return o(this, null, function* () {
            var t;
            if (!P) throw new y({ message: "Firebase is not initialized", sourceFunction: "Functions" });
            if (!je.methods && ((je.methods = yield f(() => import("./firebase-functions-b162532a.js"), ["firebase-functions-b162532a.js", "vendor-8eeedc94.js"])), (t = mt.config) != null && t._useEmulator)) {
                const e = je.methods.getFunctions(P);
                je.methods.connectFunctionsEmulator(e, "localhost", 9e3);
            }
            return je.methods;
        });
    }
    static httpsCallable(t) {
        return o(this, null, function* () {
            const e = yield je.getMethods(),
                a = e.getFunctions(P, "https://functions.classroomscreen.com");
            return e.httpsCallable(a, t.functionName);
        });
    }
};
let da = je;
s(da, "methods");
const He = class {
    static getMethods() {
        return o(this, null, function* () {
            if (!P) throw new y({ message: "Firebase is not initialized", sourceFunction: "Storage" });
            return He.methods || (He.methods = yield f(() => import("./firebase-storage-31218fdc.js"), ["firebase-storage-31218fdc.js", "vendor-8eeedc94.js"])), He.methods;
        });
    }
    static getDownloadUrl(t) {
        return o(this, null, function* () {
            try {
                const e = yield He.getMethods(),
                    a = e.getStorage(P),
                    i = e.ref(a, t.path);
                return { url: yield e.getDownloadURL(i) };
            } catch (e) {
                return { url: null };
            }
        });
    }
    static readBytes(t) {
        return o(this, null, function* () {
            throw new y({ message: "Not implemented", sourceFunction: "readDocument" });
        });
    }
    static writeBytes(t) {
        return o(this, null, function* () {
            const e = yield He.getMethods(),
                a = e.getStorage(P),
                i = e.ref(a, t.path);
            return yield e.uploadBytes(i, t.data, t.metadata);
        });
    }
    static deleteFile(t) {
        return o(this, null, function* () {
            const e = yield He.getMethods(),
                a = e.getStorage(P),
                i = e.ref(a, t.path);
            return yield e.deleteObject(i), {};
        });
    }
};
let tt = He;
s(tt, "methods");
const ii = ["debug"],
    ri = ["debug", "info"],
    ni = ["debug", "info", "warning"],
    oi = ["debug", "info", "warning", "error"];
class li {
    constructor(t) {
        s(this, "configuration");
        this.configuration = t.configuration;
    }
    debug(t, e) {
        return this.log("debug", t, e);
    }
    info(t, e) {
        return this.log("info", t, e);
    }
    warning(t, e) {
        return this.log("warning", t, e);
    }
    error(t, e) {
        return this.log("error", `${t} - in: ${e.source.function}: mdg: ${e.message} - code: ${e.code} - type: ${e.type} - desc: ${e.description}`, e.source.error);
    }
    log(t, e, a) {
        switch (t) {
            case "debug":
                ii.includes(this.configuration.logLevel) && console.debug(e, JSON.stringify(a != null ? a : {}));
                return;
            case "info":
                ri.includes(this.configuration.logLevel) && console.info(e, JSON.stringify(a != null ? a : {}));
                return;
            case "warning":
                ni.includes(this.configuration.logLevel) && console.warn(e, JSON.stringify(a != null ? a : {}));
                return;
            case "error":
                oi.includes(this.configuration.logLevel) && console.error(e, JSON.stringify(a != null ? a : {})), Ds(e);
                return;
            default:
                throw new Q(t, "Unexaustive switch detected");
        }
    }
}
function Me(r, t) {
    return o(this, null, function* () {
        try {
            return yield r(t);
        } catch (e) {
            throw T(e) ? e : new y({ message: "Unexpected exception", code: 500, description: `${e}`, sourceFunction: r.name, sourceObjectId: t == null ? void 0 : t.path, originalError: e });
        }
    });
}
function di() {
    return {
        read: (a) =>
            o(this, null, function* () {
                const { data: i } = yield Me(Re.readDocument, a);
                return i;
            }),
        remove: (a) =>
            o(this, null, function* () {
                return yield Me(Re.deleteDocument, a);
            }),
        write: (a) =>
            o(this, null, function* () {
                return yield Me(Re.writeDocument, a);
            }),
    };
}
function ci() {
    const r = (i) =>
            o(this, null, function* () {
                const { data: n } = yield Me(qe.readDocument, i);
                return n;
            }),
        t = (i) =>
            o(this, null, function* () {
                return yield Me(qe.writeDocument, i);
            }),
        e = (i) =>
            o(this, null, function* () {
                return yield Me(qe.deleteDocument, i);
            }),
        a = qe.onValue;
    return { read: r, remove: e, write: t, onValue: a };
}
function ui() {
    return {
        read: (i) =>
            o(this, null, function* () {
                const { data: n } = yield Me(tt.readBytes, i);
                return n;
            }),
        remove: (i) =>
            o(this, null, function* () {
                return yield Me(tt.deleteFile, i);
            }),
        write: (i) =>
            o(this, null, function* () {
                return yield Me(tt.writeBytes, i);
            }),
        getDownloadUrl: (i) =>
            o(this, null, function* () {
                return yield Me(tt.getDownloadUrl, i);
            }),
    };
}
function hi() {
    return { firestore: di(), rtdb: ci(), storage: ui() };
}
function pi() {
    const r = (t, e) =>
        o(this, null, function* () {
            return (yield (yield da.httpsCallable({ functionName: t }))(e)).data;
        });
    return {
        addLicenseNote: (t) =>
            o(this, null, function* () {
                return yield r("schoolAdminAddLicenseNote", t);
            }),
        addSchoolSubscriptionAdmin: (t) =>
            o(this, null, function* () {
                return yield r("schoolOwnerAddSchoolSubscriptionAdmin", t);
            }),
        addUserClaims: (t) =>
            o(this, null, function* () {
                return yield r("superadminAddUserClaims", t);
            }),
        claimEnterpriseLicense: (t) =>
            o(this, null, function* () {
                return yield r("enterpriseClaimEnterpriseLicense", t);
            }),
        claimLicense: (t) =>
            o(this, null, function* () {
                return yield r("authClaimLicense", t);
            }),
        createOneOffStripeCustomer: (t) =>
            o(this, null, function* () {
                return yield r("stripeCreateOneOffCustomer", t);
            }),
        createStripeBillingPortalSession: (t) =>
            o(this, null, function* () {
                return yield r("stripeCreateBillingPortalSession", t);
            }),
        createStripeCustomer: (t) =>
            o(this, null, function* () {
                return yield r("superadminCreateStripeCustomer", t);
            }),
        createStripeGiftCheckoutSession: (t) =>
            o(this, null, function* () {
                return yield r("stripeCreateGiftCheckoutSession", t);
            }),
        createStripeProIndividualSubscription: (t) =>
            o(this, null, function* () {
                return yield r("stripeCreateProIndividualSubscription", t);
            }),
        createStripeProSchoolSubscription: (t) =>
            o(this, null, function* () {
                return yield r("stripeCreateProSchoolSubscription", t);
            }),
        createStripeProTrialSubscription: (t) =>
            o(this, null, function* () {
                return yield r("stripeCreateProTrialSubscription", t);
            }),
        deleteUser: (t) =>
            o(this, null, function* () {
                return yield r("authDeleteUser", t);
            }),
        getAuthCouponNote: (t) =>
            o(this, null, function* () {
                return yield r("authGetCouponNote", t);
            }),
        getIpInfo: (t) =>
            o(this, null, function* () {
                return yield r("ipGetIpInfo", t);
            }),
        getStripeCustomerInfo: (t) =>
            o(this, null, function* () {
                return yield r("stripeGetOrCreateCustomer", t);
            }),
        getPaddlePaymentLink: (t) =>
            o(this, null, function* () {
                return yield r("paddleGetPaymentLink", t);
            }),
        getPaddleSubscription: (t) =>
            o(this, null, function* () {
                return yield r("paddleGetSubscription", t);
            }),
        getSchoolSubscriptionAdmins: (t) =>
            o(this, null, function* () {
                return yield r("schoolOwnerGetSchoolSubscriptionAdmins", t);
            }),
        getStripeCustomer: (t) =>
            o(this, null, function* () {
                return yield r("stripeGetCustomer", t);
            }),
        getStripePublicKey: (t) =>
            o(this, null, function* () {
                return yield r("stripeGetPublicKey", t);
            }),
        getStripeUpcomingInvoice: (t) =>
            o(this, null, function* () {
                return yield r("stripeGetUpcomingInvoice", t);
            }),
        getUserInfo: (t) =>
            o(this, null, function* () {
                return yield r("superadminGetUserInfo", t);
            }),
        listPaymentMethods: (t) =>
            o(this, null, function* () {
                return yield r("stripeListPaymentMethods", t);
            }),
        listStripeSubscriptions: (t) =>
            o(this, null, function* () {
                return yield r("stripeListSubscriptions", t);
            }),
        readStorage: (t) =>
            o(this, null, function* () {
                return yield r("storageReadStorage", t);
            }),
        recallLicense: (t) =>
            o(this, null, function* () {
                return yield r("authRecallLicense", t);
            }),
        removeSchoolSubscriptionAdmin: (t) =>
            o(this, null, function* () {
                return yield r("schoolOwnerRemoveSchoolSubscriptionAdmin", t);
            }),
        removeStorage: (t) =>
            o(this, null, function* () {
                return yield r("storageRemoveStorage", t);
            }),
        sendEmail: (t) =>
            o(this, null, function* () {
                return yield r("mailSendEmail", t);
            }),
        sendEmailToBilling: (t) =>
            o(this, null, function* () {
                return yield r("mailSendEmailToBilling", t);
            }),
        sendEmailToInfo: (t) =>
            o(this, null, function* () {
                return yield r("mailSendEmailToInfo", t);
            }),
        sendLicenseInvitationEmail: (t) =>
            o(this, null, function* () {
                return yield r("authSendLicenseInvitationEmail", t);
            }),
        setUserEmailVerified: (t) =>
            o(this, null, function* () {
                return yield r("superadminSetUserEmailVerified", t);
            }),
        updateStripeCustomer: (t) =>
            o(this, null, function* () {
                return yield r("stripeUpdateCustomer", t);
            }),
        updateStripeProSchoolSubscription: (t) =>
            o(this, null, function* () {
                return yield r("stripeUpdateProSchoolSubscription", t);
            }),
        updateUserEmail: (t) =>
            o(this, null, function* () {
                return yield r("superadminUpdateUserEmail", t);
            }),
        updateUserPassword: (t) =>
            o(this, null, function* () {
                return yield r("superadminUpdateUserPassword", t);
            }),
        writeStorage: (t) =>
            o(this, null, function* () {
                return yield r("storageWriteStorage", t);
            }),
    };
}
function ba(r, t, e, a) {
    return o(this, null, function* () {
        try {
            const i = { Authorization: `Bearer ${t}` },
                n = yield fetch(`${r}/https/${e}`, { headers: i, method: "POST", body: JSON.stringify(a) });
            if (n.status === 200) {
                const d = yield n.json();
                if (d.success) return d.data;
                throw d.error;
            }
            throw new y({ code: n.status, message: "Unexpected exception", description: n.statusText });
        } catch (i) {
            throw T(i) ? i : Pt({ message: `function ${e} failed`, description: `${i}`, originalError: i });
        }
    });
}
function gi(r) {
    const t = (e, a) =>
        o(this, null, function* () {
            const i = r.user.user.value;
            if (!i) throw new y({ message: "no user" });
            const n = yield i.getIdToken(!1);
            if (!n) throw new y({ message: "token not valid" });
            try {
                return yield ba(r.configuration.network.https.regularEndpoint, n, e, a);
            } catch (d) {
                if (!T(d) || d.code !== 403) throw d;
                yield new Promise((h) => setTimeout(h, 250 + Math.round(Math.random() * 1e3)));
                try {
                    return yield ba(r.configuration.network.https.regularEndpoint, n, e, a);
                } catch (h) {
                    if (!T(h) || h.code !== 403) throw h;
                    return yield new Promise((m) => setTimeout(m, 1e3 + Math.round(Math.random() * 2e3))), yield ba(r.configuration.network.https.regularEndpoint, n, e, a);
                }
            }
        });
    return {
        deleteFirestoreDocument: (e) =>
            o(this, null, function* () {
                return yield t("firestore-delete-document", e);
            }),
        readFirestoreDocument: (e) =>
            o(this, null, function* () {
                return yield t("firestore-read-document", e);
            }),
        writeFirestoreDocument: (e) =>
            o(this, null, function* () {
                return yield t("firestore-write-document", e);
            }),
        deleteRtdbDocument: (e) =>
            o(this, null, function* () {
                return yield t("rtdb-delete-document", e);
            }),
        readRtdbDocument: (e) =>
            o(this, null, function* () {
                return yield t("rtdb-read-document", e);
            }),
        writeRtdbDocument: (e) =>
            o(this, null, function* () {
                return yield t("rtdb-write-document", e);
            }),
        migrateUserPreferencesGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-user-preferences-get-v2", e);
            }),
        migrateRootForStudentListsGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-root-for-student-lists-get-v2", e);
            }),
        migrateRootForScreenBackgroundsGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-root-for-screen-backgrounds-get-v2", e);
            }),
        migrateRootForWidgetImagesGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-root-for-widget-images-get-v2", e);
            }),
        migrateStudentListGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-student-list-get-v2", e);
            }),
        migrateImageGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-image-get-v2", e);
            }),
        migrateRootForWorkspacesGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-root-for-workspaces-get-v2", e);
            }),
        migrateWorkspaceGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-workspace-get-v2", e);
            }),
        migrateScreenGroupGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-screen-group-get-v2", e);
            }),
        migrateScreenGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-screen-get-v2", e);
            }),
        migrateWidgetCalendarGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-calendar-get-v2", e);
            }),
        migrateWidgetClockGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-clock-get-v2", e);
            }),
        migrateWidgetDiceGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-dice-get-v2", e);
            }),
        migrateWidgetDrawGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-draw-get-v2", e);
            }),
        migrateWidgetEmbedGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-embed-get-v2", e);
            }),
        migrateWidgetGroupMakerGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-group-maker-get-v2", e);
            }),
        migrateWidgetImageGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-image-get-v2", e);
            }),
        migrateWidgetPollGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-poll-get-v2", e);
            }),
        migrateWidgetQrCodeGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-qr-code-get-v2", e);
            }),
        migrateWidgetRandomNameGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-random-name-get-v2", e);
            }),
        migrateWidgetSoundLevelGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-sound-level-get-v2", e);
            }),
        migrateWidgetStopwatchGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-stopwatch-get-v2", e);
            }),
        migrateWidgetTextGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-text-get-v2", e);
            }),
        migrateWidgetTimerGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-timer-get-v2", e);
            }),
        migrateWidgetTrafficLightGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-traffic-light-get-v2", e);
            }),
        migrateWidgetVideoGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-video-get-v2", e);
            }),
        migrateWidgetWebcamGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-webcam-get-v2", e);
            }),
        migrateWidgetWorkSymbolsGetV2: (e) =>
            o(this, null, function* () {
                return yield t("migrate-widget-work-symbols-get-v2", e);
            }),
        pollGetOrCreateRoom: (e) =>
            o(this, null, function* () {
                return yield t("poll-get-or-create-room", e);
            }),
        pollOverwritePolls: (e) =>
            o(this, null, function* () {
                return yield t("poll-overwrite-polls", e);
            }),
        pollOverwriteSessions: (e) =>
            o(this, null, function* () {
                return yield t("poll-overwrite-sessions", e);
            }),
        pollGetSession: (e) =>
            o(this, null, function* () {
                return yield t("poll-get-session", e);
            }),
        pollCreateVote: (e) =>
            o(this, null, function* () {
                return yield t("poll-create-vote", e);
            }),
        createStripeCheckoutSession: (e) =>
            o(this, null, function* () {
                return yield t("stripe-create-checkout-session", e);
            }),
        getStripeCustomerInfo: (e) =>
            o(this, null, function* () {
                return yield t("stripe-get-customer-info", e);
            }),
        updateStripeCustomer: (e) =>
            o(this, null, function* () {
                return yield t("stripe-update-customer", e);
            }),
        createProTrial: (e) =>
            o(this, null, function* () {
                return yield t("create-pro-trial", e);
            }),
        getIpInfo: (e) =>
            o(this, null, function* () {
                return yield t("utilities-get-ip-info", e);
            }),
    };
}
class mi {
    constructor(t) {
        s(this, "configuration");
        s(this, "logger");
        s(this, "user");
        s(this, "callable_", pi());
        s(this, "db_", hi());
        s(this, "getHttps", () => gi({ configuration: this.configuration, user: this.user }));
        s(this, "auth", {
            logInWithPassword: (t) =>
                o(this, null, function* () {
                    return this.execute(W.logInWithPassword, t);
                }),
            logInWithGoogle: (t) =>
                o(this, null, function* () {
                    return this.execute(W.logInWithGoogle, t);
                }),
            logInWithMicrosoft: (t) =>
                o(this, null, function* () {
                    return this.execute(W.logInWithMicrosoft, t);
                }),
            reauthenticateUser: (t) =>
                o(this, null, function* () {
                    return this.execute(W.reauthenticateUser, t);
                }),
            signOut: (t) =>
                o(this, null, function* () {
                    return this.execute(W.signOut, t);
                }),
            signUpWithPassword: (t) =>
                o(this, null, function* () {
                    return this.execute(W.signUpWithPassword, t);
                }),
            signUpWithGoogle: (t) =>
                o(this, null, function* () {
                    return this.execute(W.signUpWithGoogle, t);
                }),
            signUpWithMicrosoft: (t) =>
                o(this, null, function* () {
                    return this.execute(W.signUpWithMicrosoft, t);
                }),
            updatePassword: (t) =>
                o(this, null, function* () {
                    return this.execute(W.updatePassword, t);
                }),
        });
        s(this, "db", {
            firestore: {
                read: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.firestore.read, t, "firestore.read", 1e4);
                    }),
                remove: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.firestore.remove, t, "firestore.remove", 1e4);
                    }),
                write: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.firestore.write, t, "firestore.write", 1e4);
                    }),
            },
            rtdb: {
                read: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.rtdb.read, t, "rtdb.read");
                    }),
                remove: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.rtdb.remove, t, "rtdb.remove");
                    }),
                write: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.rtdb.write, t, "rtdb.write");
                    }),
                onValue: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.rtdb.onValue, t, "rtdb.onValue");
                    }),
            },
            storage: {
                read: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.storage.read, t, "storage.read");
                    }),
                remove: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.storage.remove, t, "storage.remove");
                    }),
                write: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.storage.write, t, "storage.write", 6e4);
                    }),
                getDownloadUrl: (t) =>
                    o(this, null, function* () {
                        return this.execute(this.db_.storage.getDownloadUrl, t, "storage.getDownloadUrl");
                    }),
            },
        });
        s(this, "functions", {
            addLicenseNote: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.addLicenseNote, t);
                }),
            addSchoolSubscriptionAdmin: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.addSchoolSubscriptionAdmin, t);
                }),
            addUserClaims: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.addUserClaims, t);
                }),
            claimEnterpriseLicense: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.claimEnterpriseLicense, t);
                }),
            claimLicense: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.claimLicense, t);
                }),
            createOneOffStripeCustomer: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createOneOffStripeCustomer, t);
                }),
            createStripeBillingPortalSession: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createStripeBillingPortalSession, t);
                }),
            createStripeCustomer: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createStripeCustomer, t);
                }),
            createStripeGiftCheckoutSession: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createStripeGiftCheckoutSession, t);
                }),
            createStripeProIndividualSubscription: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createStripeProIndividualSubscription, t);
                }),
            createStripeProSchoolSubscription: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createStripeProSchoolSubscription, t);
                }),
            createStripeProTrialSubscription: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.createStripeProTrialSubscription, t);
                }),
            deleteUser: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.deleteUser, t);
                }),
            getAuthCouponNote: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getAuthCouponNote, t);
                }),
            getPaddlePaymentLink: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getPaddlePaymentLink, t);
                }),
            getPaddleSubscription: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getPaddleSubscription, t);
                }),
            getSchoolSubscriptionAdmins: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getSchoolSubscriptionAdmins, t);
                }),
            getStripeCustomer: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getStripeCustomer, t);
                }),
            getStripePublicKey: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getStripePublicKey, t);
                }),
            getStripeUpcomingInvoice: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getStripeUpcomingInvoice, t);
                }),
            getUserInfo: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.getUserInfo, t);
                }),
            listPaymentMethods: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.listPaymentMethods, t);
                }),
            listStripeSubscriptions: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.listStripeSubscriptions, t);
                }),
            readStorage: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.readStorage, t);
                }),
            recallLicense: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.recallLicense, t);
                }),
            removeSchoolSubscriptionAdmin: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.removeSchoolSubscriptionAdmin, t);
                }),
            removeStorage: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.removeStorage, t);
                }),
            sendEmail: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.sendEmail, t);
                }),
            sendEmailToBilling: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.sendEmailToBilling, t);
                }),
            sendEmailToInfo: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.sendEmailToInfo, t);
                }),
            sendLicenseInvitationEmail: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.sendLicenseInvitationEmail, t);
                }),
            setUserEmailVerified: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.setUserEmailVerified, t);
                }),
            updateStripeProSchoolSubscription: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.updateStripeProSchoolSubscription, t);
                }),
            updateUserEmail: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.updateUserEmail, t);
                }),
            updateUserPassword: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.updateUserPassword, t);
                }),
            writeStorage: (t) =>
                o(this, null, function* () {
                    return this.execute(this.callable_.writeStorage, t);
                }),
            deleteFirestoreDocument: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().deleteFirestoreDocument, t);
                }),
            readFirestoreDocument: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().readFirestoreDocument, t);
                }),
            writeFirestoreDocument: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().writeFirestoreDocument, t);
                }),
            deleteRtdbDocument: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().deleteRtdbDocument, t);
                }),
            readRtdbDocument: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().readRtdbDocument, t);
                }),
            writeRtdbDocument: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().writeRtdbDocument, t);
                }),
            migrateUserPreferencesGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateUserPreferencesGetV2, t);
                }),
            migrateRootForStudentListsGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateRootForStudentListsGetV2, t);
                }),
            migrateRootForScreenBackgroundsGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateRootForScreenBackgroundsGetV2, t);
                }),
            migrateRootForWidgetImagesGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateRootForWidgetImagesGetV2, t);
                }),
            migrateStudentListGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateStudentListGetV2, t);
                }),
            migrateImageGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateImageGetV2, t);
                }),
            migrateRootForWorkspacesGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateRootForWorkspacesGetV2, t);
                }),
            migrateWorkspaceGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWorkspaceGetV2, t);
                }),
            migrateScreenGroupGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateScreenGroupGetV2, t);
                }),
            migrateScreenGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateScreenGetV2, t);
                }),
            migrateWidgetCalendarGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetCalendarGetV2, t);
                }),
            migrateWidgetClockGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetClockGetV2, t);
                }),
            migrateWidgetDiceGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetDiceGetV2, t);
                }),
            migrateWidgetDrawGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetDrawGetV2, t);
                }),
            migrateWidgetEmbedGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetEmbedGetV2, t);
                }),
            migrateWidgetGroupMakerGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetGroupMakerGetV2, t);
                }),
            migrateWidgetImageGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetImageGetV2, t);
                }),
            migrateWidgetPollGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetPollGetV2, t);
                }),
            migrateWidgetQrCodeGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetQrCodeGetV2, t);
                }),
            migrateWidgetRandomNameGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetRandomNameGetV2, t);
                }),
            migrateWidgetSoundLevelGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetSoundLevelGetV2, t);
                }),
            migrateWidgetStopwatchGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetStopwatchGetV2, t);
                }),
            migrateWidgetTextGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetTextGetV2, t);
                }),
            migrateWidgetTimerGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetTimerGetV2, t);
                }),
            migrateWidgetTrafficLightGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetTrafficLightGetV2, t);
                }),
            migrateWidgetVideoGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetVideoGetV2, t);
                }),
            migrateWidgetWebcamGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetWebcamGetV2, t);
                }),
            migrateWidgetWorkSymbolsGetV2: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().migrateWidgetWorkSymbolsGetV2, t);
                }),
            pollGetOrCreateRoom: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().pollGetOrCreateRoom, t);
                }),
            pollOverwritePolls: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().pollOverwritePolls, t);
                }),
            pollOverwriteSessions: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().pollOverwriteSessions, t);
                }),
            pollGetSession: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().pollGetSession, t);
                }),
            pollCreateVote: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().pollCreateVote, t);
                }),
            createStripeCheckoutSession: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().createStripeCheckoutSession, t);
                }),
            getStripeCustomerInfo: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().getStripeCustomerInfo, t);
                }),
            updateStripeCustomer: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().updateStripeCustomer, t);
                }),
            createProTrial: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().createProTrial, t);
                }),
            getIpInfo: (t) =>
                o(this, null, function* () {
                    return this.execute(this.getHttps().getIpInfo, t);
                }),
        });
        (this.configuration = t.configuration), (this.logger = t.logger), (this.user = t.user);
    }
    execute(n, d, h) {
        return o(this, arguments, function* (t, e, a, i = this.configuration.network.https.defaultTimeoutMs) {
            var v;
            const m = a != null ? a : t.name;
            this.logger.info(`Network - ${m} - execute`), this.logger.debug(`Network - ${m} - execute:`, e);
            try {
                const I = yield this.executeWithTimeout(t, e, i);
                return this.logger.debug(`Network - ${m} - result:`, I), I;
            } catch (I) {
                const C = T(I) ? I : new y({ message: (v = I == null ? void 0 : I.message) != null ? v : "Unkown error", originalError: I });
                throw (C.code === 404 ? this.logger.info(`Network - ${m} - error:`, C) : this.logger.error(`Network - ${m} - error:`, C), C);
            }
        });
    }
    executeWithTimeout(t, e, a) {
        return o(this, null, function* () {
            if (a === 0) return t(e);
            const i = new Promise((h) => setTimeout(h, a, "timed out")),
                n = t(e),
                d = yield Promise.race([i, n]);
            if (d === "timed out") throw new y({ code: 504, message: "function timed out", sourceFunction: t.name });
            return d;
        });
    }
}
function Ue(r) {
    var n, d;
    const { object: t } = r,
        e = (n = r.delayMs) != null ? n : w.configuration.autoSaveDebounceDelayMs,
        a = (d = r.delayMs) != null ? d : w.configuration.autoSaveDebounceMaxWaitMs,
        i = ft(() => t.save(), e, { maxWait: a });
    return (
        onMounted(() => {
            watch([t.isLoaded, t.autosaveTicker, r.isEnabled, t.isPersistenceEnabled], () =>
                o(this, null, function* () {
                    const h = t.isPersistenceEnabled.value && t.isLoaded.value && t.autosaveTicker.value > 0,
                        m = r.mode === "ALWAYS" || (r.mode === "USER" && r.isEnabled.value);
                    h && m && (w.logger.debug(`autosave - ${t.type}-${t.id}`), yield i());
                })
            );
        }),
        {}
    );
}
class fi {
    constructor() {}
    onBeforeLogout() {
        return o(this, null, function* () {});
    }
    onLogout() {
        return o(this, null, function* () {});
    }
    onLogin() {
        return o(this, null, function* () {});
    }
}
const F = class extends fi {
    constructor(e) {
        super();
        s(this, "data");
        s(this, "_id");
        s(
            this,
            "isLoaded",
            computed(() => this.data.isLoaded.value)
        );
        s(
            this,
            "isLoading",
            computed(() => this.data.isLoading.value)
        );
        s(
            this,
            "isReloading",
            computed(() => this.data.isReloading.value)
        );
        s(
            this,
            "isPersistenceEnabled",
            computed(() => this.data.isPersistenceEnabled.value)
        );
        s(
            this,
            "isSaved",
            computed(() => this.data.isSaved.value)
        );
        s(
            this,
            "isSaving",
            computed(() => this.data.isSaving.value)
        );
        s(
            this,
            "autosaveTicker",
            computed(() => this.data.autosaveTicker.value)
        );
        s(
            this,
            "loadingError",
            computed(() => this.data.loadingError.value)
        );
        s(
            this,
            "savingError",
            computed(() => this.data.savingError.value)
        );
        s(
            this,
            "deletingError",
            computed(() => this.data.deletingError.value)
        );
        (this.data = e.data), (this._id = e.data.configuration.id);
    }
    static getBaseConfiguration(e) {
        return { type: e.type, id: e.id, endpoints: [], allowPersistence: { forAnonymousUser: !1, forFreeUser: !1, forProUser: !1 }, xstateDevTools: !1 };
    }
    get id() {
        return this._id;
    }
    static getCachedObjectOrNull(e) {
        try {
            return F.___getCached(e);
        } catch (a) {
            return null;
        }
    }
    static ___getCached(e) {
        const a = F.getCacheKey(e),
            i = F.getFromCache({ cacheKey: a });
        if (!i) throw new y({ message: `Object is not cached: ${e.type} - ${e.id}` });
        return i;
    }
    static ___getCachedOrEmpty(e) {
        const a = F.getCacheKey(e);
        try {
            return { bo: F.___getCached(e), isFromCache: !0 };
        } catch (i) {
            const { object: n, cleanup: d } = F.wrapInVueComponent({ cacheKey: a, setup: e.setup });
            return F.putInCache({ cacheKey: a, object: n, cleanup: d }), { bo: n, isFromCache: !1 };
        }
    }
    static ___getNew(e) {
        const a = Lt(),
            i = F.getCacheKey({ type: e.type, id: a }),
            { bo: n, isFromCache: d } = F.___getCachedOrEmpty({ type: e.type, id: a, setup: () => e.setup({ id: a }) });
        if ((n.skipLoad(), d)) throw new y({ message: `A new object can not be cached: ${i}` });
        return n;
    }
    static wrapInVueComponent(e) {
        let a = null;
        const i = defineComponent({
                setup() {
                    a = e.setup();
                },
                render: () => null,
            }),
            n = document.createElement("div");
        n.id = e.cacheKey;
        const d = "object-store",
            h = document.getElementById(d);
        if (!h) throw new y({ message: `Please provide an object store root element with id: '${d}'` });
        h.appendChild(n);
        const m = window.lsipVueApp;
        if (!m) throw new y({ message: "Please provide the global Vue app on window.lsipVueApp", sourceFunction: "wrapInVueComponent" });
        const v = ie(i);
        return (
            (v.appContext = m._context),
            ja(v, n),
            {
                object: a,
                cleanup: () => {
                    ja(null, n), h.removeChild(n);
                },
            }
        );
    }
    static getCacheKey(e) {
        return `${e.type}-${e.id}`;
    }
    static putInCache(e) {
        F.objectsCache[e.cacheKey] = { object: e.object, cleanup: e.cleanup };
    }
    static getFromCache(e) {
        var a;
        return ((a = F.objectsCache[e.cacheKey]) == null ? void 0 : a.object) || null;
    }
    static removeFromCache(e) {
        var i;
        const a = ((i = F.objectsCache[e.cacheKey]) == null ? void 0 : i.cleanup) || null;
        a && a(), delete F.objectsCache[e.cacheKey];
    }
    static onLogin() {
        return o(this, null, function* () {
            yield F.callMethodOnEachStoredObject("onLogin");
        });
    }
    static onBeforeLogout() {
        return o(this, null, function* () {
            yield F.callMethodOnEachStoredObject("onBeforeLogout"), sessionStorage.clear();
        });
    }
    static onBeforeLogin() {
        return o(this, null, function* () {
            yield F.callMethodOnEachStoredObject("onBeforeLogin");
        });
    }
    static onLogout() {
        return o(this, null, function* () {
            yield F.callMethodOnEachStoredObject("onLogout");
        });
    }
    static onUpgradePro() {
        return o(this, null, function* () {
            yield F.callMethodOnEachStoredObject("onUpgradePro");
        });
    }
    static onClaimsUpdated() {
        return o(this, null, function* () {
            yield F.callMethodOnEachStoredObject("onClaimsUpdated");
        });
    }
    static callMethodOnEachStoredObject(e) {
        return o(this, null, function* () {
            const a = Object.getOwnPropertyNames(F.objectsCache).map((i) =>
                o(this, null, function* () {
                    const n = F.objectsCache[i].object;
                    switch (e) {
                        case "onLogin":
                            return yield n.onLogin();
                        case "onBeforeLogout":
                            return yield n.onBeforeLogout();
                        case "onLogout":
                            return yield n.onLogout();
                        case "onBeforeLogin":
                            return yield n.onBeforeLogin();
                        case "onUpgradePro":
                            return yield n.onUpgradePro();
                        case "onClaimsUpdated":
                            return yield n.onClaimsUpdated();
                        default:
                            throw new Q(e, "Unexaustive switch detected");
                    }
                })
            );
            yield Promise.all(a);
        });
    }
    triggerAutoSave() {
        this.data.triggerAutoSave();
    }
    skipLoad() {
        this.data.sendSkipLoad(), this.triggerAutoSave();
    }
    load() {
        return o(this, null, function* () {
            return yield this.data.sendLoad();
        });
    }
    merge() {
        return o(this, null, function* () {
            return yield this.data.sendMerge();
        });
    }
    reload() {
        return o(this, null, function* () {
            return yield this.data.sendReload();
        });
    }
    remove() {
        return o(this, null, function* () {
            return yield this.data.sendRemove();
        });
    }
    reset() {
        return this.data.sendReset();
    }
    save() {
        return o(this, null, function* () {
            return yield this.data.sendSave();
        });
    }
    getVersion() {
        return this.data.metadata.version;
    }
    destroy() {
        const e = F.getCacheKey({ type: this.type, id: this.id });
        this.reset(), F.removeFromCache({ cacheKey: e });
    }
};
let Oe = F;
s(Oe, "objectsCache", {});
var ps = Pa;
function Pa(r, t) {
    return r === t || (r !== r && t !== t)
        ? !0
        : {}.toString.call(r) != {}.toString.call(t) || r !== Object(r) || !r
        ? !1
        : Array.isArray(r)
        ? qa(r, t)
        : {}.toString.call(r) == "[object Set]"
        ? qa(Array.from(r), Array.from(t))
        : {}.toString.call(r) == "[object Object]"
        ? wi(r, t)
        : vi(r, t);
}
function vi(r, t) {
    return r.toString() === t.toString();
}
function qa(r, t) {
    var e = r.length;
    if (e != t.length) return !1;
    for (var a = !0, i = 0; i < e; i++)
        if (!Pa(r[i], t[i])) {
            a = !1;
            break;
        }
    return a;
}
function wi(r, t) {
    var e = Object.keys(r).sort(),
        a = Object.keys(t).sort(),
        i = e.length;
    if (i != a.length) return !1;
    for (var n = 0; n < i; n++) {
        var d = e[n],
            h = a[n];
        if (!(d == h && Pa(r[d], t[h]))) return !1;
    }
    return !0;
}
const Ta = 5,
    Aa = 1,
    ee = Dt(0),
    se = Dt(0);
function yi(r) {
    return o(this, null, function* () {
        if (se.value >= Aa)
            try {
                const i = yield Ka({ path: r.path });
                return se.value++, w.logger.debug(`readFromFirestore - REGULAR-SUCCESS - #success (${se.value}) #fallback (${ee.value})`), i.data;
            } catch (i) {
                if (T(i) && i.code === 404) throw i;
                const n = yield Ia({ path: r.path });
                return ee.value++, w.logger.debug(`readFromFirestore - REGULAR-FAIL - #success (${se.value}) #fallback (${ee.value})`), n.data;
            }
        else if (ee.value > Ta) {
            const i = yield Ia({ path: r.path });
            return w.logger.debug(`readFromFirestore - FALLBACK-SUCCESS - #success (${se.value}) #fallback (${ee.value})`), i.data;
        }
        const t = () =>
                o(this, null, function* () {
                    return yield w.utils.sleep(1e3), yield Ia({ path: r.path });
                }),
            e = Ka({ path: r.path }),
            a = t();
        try {
            const i = yield Promise.race([e, a]);
            return (
                i.fromPrimary
                    ? (w.logger.debug(`readFromFirestore - TRIAGE-SUCCESS - #success (${se.value}) #fallback (${ee.value})`), se.value++)
                    : (ee.value++, w.logger.debug(`readFromFirestore - TRIAGE-FAIL - #success (${se.value}) #fallback (${ee.value})`)),
                i.data
            );
        } catch (i) {
            try {
                const n = yield e;
                return se.value++, w.logger.debug(`readFromFirestore - TRIAGE-SUCCESS-2 - #success (${se.value}) #fallback (${ee.value})`), n.data;
            } catch (n) {
                if (T(n) && n.code === 404) throw (se.value++, n);
                ee.value += 1;
                const d = yield a;
                return w.logger.debug(`readFromFirestore - TRIAGE-FAIL-2 - #success (${se.value}) #fallback (${ee.value})`), d.data;
            }
        }
    });
}
function Ka(r) {
    return o(this, null, function* () {
        try {
            return { data: yield w.network.db.firestore.read({ path: r.path }), fromPrimary: !0 };
        } catch (t) {
            const e = T(t) ? t : new y({ code: 500, message: "Unexpected error", originalError: t });
            return Promise.reject(e);
        }
    });
}
function Ia(r) {
    return o(this, null, function* () {
        try {
            return { data: yield w.network.functions.readFirestoreDocument({ path: r.path }), fromPrimary: !1 };
        } catch (t) {
            const e = T(t) ? t : new y({ code: 500, message: "Unexpected error", originalError: t });
            return Promise.reject(e);
        }
    });
}
function bi(r) {
    return o(this, null, function* () {
        if (se.value >= Aa || ee.value < Ta)
            try {
                yield w.network.db.firestore.write({ path: r.path, data: r.data }), se.value++;
            } catch (t) {
                if (T(t) && t.code === 504) {
                    ee.value += 1;
                    try {
                        yield w.network.functions.writeFirestoreDocument({ path: r.path, data: r.data });
                    } catch (e) {
                        if (T(e) && e.code === 401) return;
                        throw e;
                    }
                } else {
                    if (T(t) && [401, 403].includes(t.code)) throw t;
                    (ee.value += 1), yield w.network.functions.writeFirestoreDocument({ path: r.path, data: r.data });
                }
            }
        else yield w.network.functions.writeFirestoreDocument({ path: r.path, data: r.data });
    });
}
function Ii(r) {
    return o(this, null, function* () {
        if (se.value >= Aa || ee.value < Ta)
            try {
                yield w.network.db.firestore.remove({ path: r.path }), se.value++;
            } catch (t) {
                if (T(t) && t.code === 504) (ee.value += 1), yield w.network.functions.deleteFirestoreDocument({ path: r.path });
                else {
                    if (T(t) && [401, 403].includes(t.code)) throw t;
                    (ee.value += 1), yield w.network.functions.deleteFirestoreDocument({ path: r.path });
                }
            }
        else yield w.network.functions.deleteFirestoreDocument({ path: r.path });
    });
}
function Ei(r) {
    return o(this, null, function* () {
        switch (r.function) {
            case "migrateUserPreferencesGetV2":
                return yield w.network.functions.migrateUserPreferencesGetV2(r.args);
            case "migrateRootForStudentListsGetV2":
                return yield w.network.functions.migrateRootForStudentListsGetV2(r.args);
            case "migrateRootForScreenBackgroundsGetV2":
                return yield w.network.functions.migrateRootForScreenBackgroundsGetV2(r.args);
            case "migrateRootForWidgetImagesGetV2":
                return yield w.network.functions.migrateRootForWidgetImagesGetV2(r.args);
            case "migrateStudentListGetV2":
                return yield w.network.functions.migrateStudentListGetV2(r.args);
            case "migrateImageGetV2":
                return yield w.network.functions.migrateImageGetV2(r.args);
            case "migrateRootForWorkspacesGetV2":
                return yield w.network.functions.migrateRootForWorkspacesGetV2(r.args);
            case "migrateWorkspaceGetV2":
                return yield w.network.functions.migrateWorkspaceGetV2(r.args);
            case "migrateScreenGroupGetV2":
                return yield w.network.functions.migrateScreenGroupGetV2(r.args);
            case "migrateScreenGetV2":
                return yield w.network.functions.migrateScreenGetV2(r.args);
            case "migrateWidgetCalendarGetV2":
                return yield w.network.functions.migrateWidgetCalendarGetV2(r.args);
            case "migrateWidgetClockGetV2":
                return yield w.network.functions.migrateWidgetClockGetV2(r.args);
            case "migrateWidgetDiceGetV2":
                return yield w.network.functions.migrateWidgetDiceGetV2(r.args);
            case "migrateWidgetDrawGetV2":
                return yield w.network.functions.migrateWidgetDrawGetV2(r.args);
            case "migrateWidgetEmbedGetV2":
                return yield w.network.functions.migrateWidgetEmbedGetV2(r.args);
            case "migrateWidgetGroupMakerGetV2":
                return yield w.network.functions.migrateWidgetGroupMakerGetV2(r.args);
            case "migrateWidgetImageGetV2":
                return yield w.network.functions.migrateWidgetImageGetV2(r.args);
            case "migrateWidgetPollGetV2":
                return yield w.network.functions.migrateWidgetPollGetV2(r.args);
            case "migrateWidgetQrCodeGetV2":
                return yield w.network.functions.migrateWidgetQrCodeGetV2(r.args);
            case "migrateWidgetRandomNameGetV2":
                return yield w.network.functions.migrateWidgetRandomNameGetV2(r.args);
            case "migrateWidgetSoundLevelGetV2":
                return yield w.network.functions.migrateWidgetSoundLevelGetV2(r.args);
            case "migrateWidgetStopwatchGetV2":
                return yield w.network.functions.migrateWidgetStopwatchGetV2(r.args);
            case "migrateWidgetTextGetV2":
                return yield w.network.functions.migrateWidgetTextGetV2(r.args);
            case "migrateWidgetTimerGetV2":
                return yield w.network.functions.migrateWidgetTimerGetV2(r.args);
            case "migrateWidgetTrafficLightGetV2":
                return yield w.network.functions.migrateWidgetTrafficLightGetV2(r.args);
            case "migrateWidgetVideoGetV2":
                return yield w.network.functions.migrateWidgetVideoGetV2(r.args);
            case "migrateWidgetWebcamGetV2":
                return yield w.network.functions.migrateWidgetWebcamGetV2(r.args);
            case "migrateWidgetWorkSymbolsGetV2":
                return yield w.network.functions.migrateWidgetWorkSymbolsGetV2(r.args);
            default:
                throw new Q(r.function, "Unexaustive switch detected");
        }
    });
}
function ma(r) {
    const { text: t, docId: e, userId: a } = r;
    return t.replace("{{id}}", e).replace("{{userId}}", a);
}
function Ci(r) {
    return Object.keys(r.obj).reduce((t, e) => {
        const a = r.obj[e];
        return (t[e] = typeof a == "string" ? ma({ text: a, docId: r.docId, userId: r.userId }) : a), t;
    }, {});
}
const Xa = (r) =>
        o(void 0, null, function* () {
            const { endpoints: t, id: e } = r.configuration;
            let a;
            for (const [i, n] of t.entries())
                try {
                    switch (n.type) {
                        case "firestore":
                            return { serialized: yield yi({ path: ma({ text: n.path, docId: e, userId: r.userId }) }), endpoint: n };
                        case "https":
                            return { serialized: yield Ei({ function: n.function, args: Ci({ obj: n.functionArgs, docId: e, userId: r.userId }) }), endpoint: n };
                        case "local-storage":
                            throw new y({ message: "Not implemented" });
                        case "rtdb":
                            throw new y({ message: "Not implemented" });
                        case "firebase-storage":
                            throw new y({ message: "Not implemented" });
                        default:
                            throw new Q(n, "Unexhaustive switch detected");
                    }
                } catch (d) {
                    if (((a = d), T(d) && d.code === 404)) continue;
                    throw d;
                }
            throw a;
        }),
    Si = (r) =>
        o(void 0, null, function* () {
            const { endpoints: t, id: e } = r.configuration;
            let a;
            for (const i of t)
                try {
                    switch (i.type) {
                        case "firestore":
                            yield Ii({ path: ma({ text: i.path, docId: e, userId: r.userId }) });
                            return;
                        case "https":
                            throw new y({ message: "Not implemented" });
                        case "local-storage":
                            throw new y({ message: "Not implemented" });
                        case "rtdb":
                            throw new y({ message: "Not implemented" });
                        case "firebase-storage":
                            throw new y({ message: "Not implemented" });
                        default:
                            throw new Q(i, "Unexhaustive switch detected");
                    }
                } catch (n) {
                    if (((a = n), T(n) && n.code === 404)) continue;
                    throw n;
                }
            throw a;
        });
function xi(r) {
    return o(this, null, function* () {
        const { endpoints: t, id: e } = r.configuration,
            a = t[0];
        if (!a) throw new y({ message: "No endpoint specified", sourceFunction: "write" });
        switch (a.type) {
            case "firestore":
                yield bi({ path: ma({ text: a.path, docId: e, userId: r.userId }), data: r.serialized });
                return;
            case "https":
                throw new y({ message: "Not implemented" });
            case "local-storage":
                throw new y({ message: "Not implemented" });
            case "rtdb":
                throw new y({ message: "Not implemented" });
            case "firebase-storage":
                throw new y({ message: "Not implemented" });
            default:
                throw new Q(a, "Unexhaustive switch detected");
        }
    });
}
class Rt {
    constructor(t) {
        s(this, "id");
        s(this, "type");
        s(this, "encryption");
        s(this, "createdBy");
        s(this, "createdOn");
        s(this, "modifiedBy");
        s(this, "modifiedOn");
        s(this, "protected");
        s(this, "version");
        (this.id = t.id), (this.type = t.type), (this.encryption = "none"), (this.createdBy = null), (this.createdOn = null), (this.modifiedBy = null), (this.modifiedOn = null), (this.protected = !0), (this.version = 0);
    }
    updateMetadata(t) {
        (this.encryption = t.updated.encryption),
            (this.createdBy = t.updated.createdBy),
            (this.createdOn = t.updated.createdOn),
            (this.modifiedBy = t.updated.modifiedBy),
            (this.modifiedOn = t.updated.modifiedOn),
            (this.version = t.updated.version);
    }
    toUpdated() {
        var t;
        return {
            id: this.id,
            type: this.type,
            encryption: this.encryption,
            createdBy: (t = this.createdBy) != null ? t : w.user.userId.value,
            createdOn: this.createdOn,
            modifiedBy: w.user.userId.value,
            modifiedOn: null,
            protected: this.protected,
            version: this.version + 1,
        };
    }
    static toSerialized(t) {
        if (t.toType === "firestore") return this.toSerializedFirestore(t);
        if (t.toType === "https") return this.toSerializedFirestore(t);
        throw new y({ message: `metadata.toSerialized - endpointType ${t.toType} not implemented` });
    }
    static toSerializedFirestore(t) {
        const { deserialized: e } = t;
        return {
            _id: e.id,
            _type: e.type,
            _encryption: e.encryption,
            _createdBy: e.createdBy,
            _createdOn: e.createdOn ? Re.toTimestamp(e.createdOn) : Re.serverTimestamp(),
            _modifiedBy: e.modifiedBy,
            _modifiedOn: e.modifiedOn ? Re.toTimestamp(e.modifiedOn) : Re.serverTimestamp(),
            _protected: e.protected,
            _version: e.version,
        };
    }
    static toDeserialized(t) {
        if (t.fromType === "firestore") return this.toDeserializedFirestore(t);
        if (t.fromType === "https") return this.toDeserializedFirestore(t);
        throw new y({ message: `metadata.toDeserialized - endpointType ${t.fromType} not implemented` });
    }
    static toDeserializedFirestore(t) {
        const { serialized: e } = t,
            a = { id: e._id, type: e._type, encryption: e._encryption, createdBy: e._createdBy, createdOn: new Date(), modifiedBy: e._modifiedBy, modifiedOn: new Date(), protected: e._protected, version: e._version };
        try {
            a.createdOn = Re.toDate(e._createdOn);
        } catch (i) {}
        try {
            a.modifiedOn = Re.toDate(e._modifiedOn);
        } catch (i) {}
        return a;
    }
}
class gs {
    constructor(t) {
        s(this, "configuration");
        s(this, "dataSpecAndDefaults");
        s(this, "dataRefs");
        s(this, "metadata");
        s(this, "dataComputed");
        s(this, "_autosaveTicker", ref(0));
        s(
            this,
            "autosaveTicker",
            computed(() => this._autosaveTicker.value)
        );
        s(this, "persistenceMachine");
        s(this, "persistenceService");
        s(this, "loadingState", ref(null));
        s(this, "updatingState", ref(null));
        s(this, "savingState", ref(null));
        s(this, "deletingState", ref(null));
        s(this, "saveImmediatelyAfterFinishLoading", ref(!1));
        s(
            this,
            "isPersistenceEnabled",
            computed(() =>
                w.user.hasProAccess.value
                    ? this.configuration.allowPersistence.forProUser || this.configuration.allowPersistence.forFreeUser || this.configuration.allowPersistence.forAnonymousUser
                    : w.user.isFreeUser.value
                    ? this.configuration.allowPersistence.forFreeUser || this.configuration.allowPersistence.forAnonymousUser
                    : this.configuration.allowPersistence.forAnonymousUser
            )
        );
        s(
            this,
            "isLoading",
            computed(() => ["loading"].includes(this.loadingState.value))
        );
        s(
            this,
            "isLoaded",
            computed(() => ["loaded", "merging", "reloading"].includes(this.loadingState.value))
        );
        s(
            this,
            "isMerging",
            computed(() => ["merging"].includes(this.loadingState.value))
        );
        s(
            this,
            "isReloading",
            computed(() => ["reloading"].includes(this.loadingState.value))
        );
        s(
            this,
            "isSaving",
            computed(() => ["saving"].includes(this.savingState.value))
        );
        s(
            this,
            "isSaved",
            computed(() => ["saved"].includes(this.savingState.value))
        );
        s(
            this,
            "isRemoving",
            computed(() => ["deleting"].includes(this.deletingState.value))
        );
        s(
            this,
            "isRemoved",
            computed(() => ["deleted"].includes(this.deletingState.value))
        );
        s(this, "loadingError_", ref(null));
        s(
            this,
            "loadingError",
            computed(() => (["loadingError"].includes(this.loadingState.value) ? this.loadingError_.value : !1))
        );
        s(this, "savingError_", ref(null));
        s(
            this,
            "savingError",
            computed(() => (["savingError"].includes(this.savingState.value) ? this.savingError_.value : !1))
        );
        s(this, "deletingError_", ref(null));
        s(
            this,
            "deletingError",
            computed(() => (["deletingError"].includes(this.deletingState.value) ? this.deletingError_.value : !1))
        );
        (this.configuration = t.configuration),
            (this.dataSpecAndDefaults = t.dataSpecAndDefaults),
            (this.metadata = new Rt({ type: this.configuration.type, id: this.configuration.id })),
            (this.dataRefs = this.toRefs({ plain: _e(t.dataSpecAndDefaults) })),
            (this.dataComputed = this.toComputed({ refs: this.dataRefs })),
            (this.persistenceMachine = this.makeMachine());
        const e = w.configuration.xstate.inspect && this.configuration.xstateDevTools;
        (this.persistenceService = ks(this.persistenceMachine, { devTools: e })),
            this.persistenceService.onTransition((a) => {
                (this.loadingState.value = a.value.loading), (this.updatingState.value = a.value.updating), (this.savingState.value = a.value.saving), (this.deletingState.value = a.value.deleting);
            }),
            this.persistenceService.start();
    }
    triggerAutoSave() {
        this._autosaveTicker.value++;
    }
    toRefs(t) {
        return Object.keys(this.dataSpecAndDefaults).reduce((e, a) => ((e[a] = ref(t.plain[a])), e), {});
    }
    toPlain(t) {
        return Object.keys(this.dataSpecAndDefaults).reduce((e, a) => ((e[a] = t.refs[a].value), e), {});
    }
    toSerialized(t) {
        return l(l({}, Rt.toSerialized(c(l({}, t), { deserialized: this.metadata.toUpdated() }))), this.toPlain({ refs: this.dataRefs }));
    }
    toDeserialized(t) {
        const e = Rt.toDeserialized({ fromType: t.fromType, serialized: t.serialized });
        return { data: Object.keys(this.dataSpecAndDefaults).reduce((i, n) => ((i[n] = n in t.serialized ? t.serialized[n] : this.dataSpecAndDefaults[n]), i), {}), metadata: e };
    }
    sendLoad() {
        return o(this, null, function* () {
            if (!this.isPersistenceEnabled.value) {
                this.persistenceService.send("SKIP_LOAD");
                return;
            }
            for (this.persistenceService.send("LOAD"); this.isLoading.value; ) yield et(100);
            if (this.loadingError.value && this.loadingError.value.code !== 404) throw this.loadingError.value;
            this.saveImmediatelyAfterFinishLoading.value && ((this.saveImmediatelyAfterFinishLoading.value = !1), this.sendUpdate(), yield this.sendSave());
        });
    }
    sendMerge() {
        return o(this, null, function* () {
            if (this.isPersistenceEnabled.value) {
                for (this.persistenceService.send("MERGE"); this.isMerging.value; ) yield et(100);
                if (this.loadingError.value && this.loadingError.value.code !== 404) throw this.loadingError.value;
            }
        });
    }
    sendSkipLoad() {
        this.persistenceService.send("SKIP_LOAD");
    }
    sendReload() {
        return o(this, null, function* () {
            if (this.isPersistenceEnabled.value) {
                for (this.persistenceService.send("RELOAD"); this.isReloading.value; ) yield et(100);
                if (this.loadingError.value && this.loadingError.value.code !== 404) throw this.loadingError.value;
            }
        });
    }
    sendRemove() {
        return o(this, null, function* () {
            if (this.isPersistenceEnabled.value) for (this.persistenceService.send("DELETE"); this.isRemoving.value; ) yield et(100);
            else w.logger.warning(`${this.configuration.type} - ${this.configuration.id} - DELETE - ignored: persistence is disabled`);
        });
    }
    sendReset() {
        this.resetData(), this.persistenceService.send("RESET");
    }
    sendSave() {
        return o(this, null, function* () {
            if (this.isPersistenceEnabled.value) for (this.persistenceService.send("SAVE"); this.isSaving.value; ) yield et(100);
            else w.logger.warning(`${this.configuration.type} - ${this.configuration.id} - SAVE - ignored: persistence is disabled`);
        });
    }
    sendUpdate() {
        this.persistenceService.send("UPDATE"), this.triggerAutoSave(), this.onUpdate();
    }
    onUpdate() {}
    resetData() {
        return (
            (this.metadata = new Rt({ type: this.configuration.type, id: this.configuration.id })),
            Object.keys(this.dataSpecAndDefaults).forEach((t) => {
                const e = this.dataRefs;
                e[t].value = this.dataSpecAndDefaults[t];
            })
        );
    }
    loadData() {
        return o(this, null, function* () {
            try {
                if (this.configuration.endpoints.length === 0) return;
                const { serialized: t, endpoint: e } = yield Xa({ configuration: this.configuration, userId: w.user.userId.value }),
                    a = this.toDeserialized({ fromType: e.type, serialized: t });
                this.metadata.updateMetadata({ updated: a.metadata }), this.updateDataRefs({ updated: a.data }), ps(this.configuration.endpoints[0], e) || (this.saveImmediatelyAfterFinishLoading.value = !0);
            } catch (t) {
                if (T(t) && t.code === 404) return;
                throw t;
            }
        });
    }
    mergeData() {
        return o(this, null, function* () {
            try {
                const { serialized: t, endpoint: e } = yield Xa({ configuration: this.configuration, userId: w.user.userId.value }),
                    a = this.toDeserialized({ fromType: e.type, serialized: t });
                this.metadata.updateMetadata({ updated: a.metadata }), this.updateDataRefs({ updated: a.data });
            } catch (t) {
                if (T(t) && t.code === 404) return;
                throw t;
            }
        });
    }
    updateDataRefs(t) {
        Object.keys(this.dataSpecAndDefaults).forEach((e) => {
            const a = this.dataRefs;
            a[e].value = e in t.updated ? t.updated[e] : this.dataSpecAndDefaults[e];
        });
    }
    overwriteRefs(t) {
        Object.keys(this.dataSpecAndDefaults).forEach((e) => {
            const a = this.dataRefs,
                i = e in t.refs ? t.refs[e].value : this.dataSpecAndDefaults[e];
            a[e].value = i && typeof i == "object" ? _e(i) : i;
        });
    }
    overwriteRefsExcept(t) {
        const e = this.dataRefs;
        Object.keys(this.dataSpecAndDefaults).forEach((a) => {
            if (!t.exceptKeys.includes(a)) {
                const i = a in t.refs ? t.refs[a].value : this.dataSpecAndDefaults[a];
                e[a].value = i && typeof i == "object" ? _e(i) : i;
            }
        });
    }
    saveData() {
        return o(this, null, function* () {
            if (this.configuration.endpoints.length === 0) return;
            const t = this.configuration.endpoints[0];
            if (!t) throw new y({ message: "No endpoint specified", sourceFunction: "saveData" });
            const e = this.toSerialized({ toType: t.type });
            try {
                yield xi({ configuration: this.configuration, userId: w.user.userId.value, serialized: e });
            } catch (a) {
                throw (T(a) && [401, 403].includes(a.code) && (yield this.sendReload()), a);
            }
            (this.metadata.version = e._version), yield w.reactivity.reportChange({ ownerId: w.user.userId.value, type: this.configuration.type, id: this.configuration.id, version: this.metadata.version });
        });
    }
    removeData() {
        return o(this, null, function* () {
            this.configuration.endpoints.length !== 0 && (yield Si({ configuration: this.configuration, userId: w.user.userId.value }));
        });
    }
    toComputed(t) {
        return Object.entries(t.refs).reduce((a, [i, n]) => {
            if (!isRef(n)) throw new y({ message: `Configuration error: ${i} is not a ref`, sourceFunction: "makeComputed" });
            const d = () => n.value,
                h = (m) => {
                    if (_i(n.value, m)) w.logger.debug(`computed - changed - ${i} - old: ${n.value} - new: ${m}`), (n.value = m), this.sendUpdate();
                    else {
                        w.logger.debug(`mutation - no change - ${i} - old: ${n.value} - new: ${m}`), (n.value = m);
                        return;
                    }
                };
            return (a[i] = computed({ get: d, set: h })), a;
        }, {});
    }
    makeMachine() {
        return ds({
            id: `${this.configuration.type}:${this.configuration.id}`,
            type: "parallel",
            context: { data: {}, metadata: {} },
            states: {
                loading: {
                    initial: "initialized",
                    states: {
                        initialized: { on: { SKIP_LOAD: "loaded", LOAD: "loading", MERGE: "loading", RELOAD: "loading" } },
                        loading: {
                            invoke: {
                                src: () =>
                                    o(this, null, function* () {
                                        return yield this.loadData(), { data: this.toPlain({ refs: this.dataRefs }), metadata: this.metadata };
                                    }),
                                onDone: [{ target: "loaded", actions: [Xe("LOADED"), te({ data: (t, e) => e.data.data }), te({ metadata: (t, e) => e.data.metadata })] }],
                                onError: { target: "loadingError", actions: [Xe("LOAD_FAILED"), te({ loadingError: (t, e) => ((this.loadingError_.value = e.data), e.data) })] },
                            },
                            on: { RESET: "initialized" },
                        },
                        reloading: {
                            invoke: {
                                src: () =>
                                    o(this, null, function* () {
                                        return yield this.loadData(), { data: this.toPlain({ refs: this.dataRefs }), metadata: this.metadata };
                                    }),
                                onDone: [{ target: "loaded", actions: [Xe("LOADED"), te({ data: (t, e) => e.data.data }), te({ metadata: (t, e) => e.data.metadata })] }],
                                onError: { target: "loadingError", actions: [Xe("LOAD_FAILED"), te({ loadingError: (t, e) => ((this.loadingError_.value = e.data), e.data) })] },
                            },
                            on: { RESET: "initialized" },
                        },
                        merging: {
                            invoke: {
                                src: () =>
                                    o(this, null, function* () {
                                        return yield this.mergeData(), { data: this.toPlain({ refs: this.dataRefs }), metadata: this.metadata };
                                    }),
                                onDone: [{ target: "loaded", actions: [te({ data: (t, e) => e.data.data }), te({ metadata: (t, e) => e.data.metadata })] }],
                                onError: { target: "loadingError", actions: [Xe("LOAD_FAILED"), te({ loadingError: (t, e) => ((this.loadingError_.value = e.data), e.data) })] },
                            },
                            on: { RESET: "initialized" },
                        },
                        loaded: { on: { RELOAD: "reloading", MERGE: "merging", RESET: "initialized" } },
                        loadingError: { on: { LOAD: "loading", RELOAD: "loading", MERGE: "loading", RESET: "initialized" } },
                    },
                },
                saving: {
                    initial: "initialized",
                    states: {
                        initialized: { on: { LOADED: "saved", SKIP_LOAD: "updated", LOAD_FAILED: "initialized" } },
                        saved: { on: { UPDATE: "updated", RESET: "initialized", LOAD_FAILED: "initialized" } },
                        updated: { on: { LOADED: "saved", SAVE: "saving", RESET: "initialized", LOAD_FAILED: "initialized" } },
                        saving: {
                            invoke: {
                                src: () =>
                                    o(this, null, function* () {
                                        return yield this.saveData(), { data: this.toPlain({ refs: this.dataRefs }), metadata: this.metadata };
                                    }),
                                onDone: { target: "saved", actions: [te({ data: (t, e) => e.data.data }), te({ metadata: (t, e) => e.data.metadata })] },
                                onError: { target: "savingError", actions: te({ savingError: (t, e) => ((this.savingError_.value = e.data), e.data) }) },
                            },
                            on: { LOADED: "saved", UPDATE: "updated", RESET: "initialized", LOAD_FAILED: "initialized" },
                        },
                        savingError: { on: { LOADED: "saved", UPDATE: "updated", SAVE: "saving", RESET: "initialized", LOAD_FAILED: "initialized" } },
                    },
                },
                deleting: {
                    initial: "initialized",
                    states: {
                        initialized: { on: { DELETE: "deleting" } },
                        deleting: {
                            invoke: {
                                src: () =>
                                    o(this, null, function* () {
                                        return yield this.removeData(), { data: this.toPlain({ refs: this.dataRefs }), metadata: this.metadata };
                                    }),
                                onDone: { target: "deleted", actions: [Xe("DELETED"), te({ data: (t, e) => e.data }), te({ metadata: (t, e) => e.data })] },
                                onError: { target: "deletingError", actions: te({ deletingError: (t, e) => ((this.deletingError_.value = e.data), e.data) }) },
                            },
                            on: { RESET: "initialized" },
                        },
                        deleted: { on: { SAVE: "initialized", RESET: "initialized" } },
                        deletingError: { on: { DELETE: "deleting", RESET: "initialized" } },
                    },
                },
            },
        });
    }
}
function _i(r, t) {
    return ((typeof r != "object" || typeof t != "object") && r !== t) || !ps(l({}, r), l({}, t));
}
class Pi {
    constructor(t) {
        s(this, "localStore", cs("reactivity", JSON.stringify({})));
        s(this, "stopServerStore");
        s(this, "data", {});
        s(this, "network");
        s(this, "user");
        s(this, "startServerStore", (t) =>
            o(this, null, function* () {
                return (
                    yield this.network.db.rtdb.write({ path: `/user-state/${t}/reactivity`, ownerId: t, data: {} }),
                    qe.onValue({
                        path: `/user-state/${t}/reactivity`,
                        ownerId: t,
                        callback: (e) => {
                            const a = e.val();
                            a && this.onUpdate(a);
                        },
                    })
                );
            })
        );
        s(this, "onUpdate", (t) => {
            (this.data = t),
                Object.getOwnPropertyNames(t).forEach((a) => {
                    Object.getOwnPropertyNames(t[a]).forEach((n) => {
                        var m;
                        const d = Oe.getCachedObjectOrNull({ type: a, id: n }),
                            h = t[a][n];
                        d && ((m = d.getVersion()) != null ? m : 0) < h && d.reload();
                    });
                });
        });
        (this.network = t.network),
            (this.user = t.user),
            Ha(
                this.user.hasProAccess,
                () =>
                    o(this, null, function* () {
                        if ((this.stopServerStore && this.stopServerStore(), this.user.hasProAccess.value)) {
                            const { unsubscribe: e } = yield this.startServerStore(this.user.userId.value);
                            this.stopServerStore = e;
                        }
                    }),
                { immediate: !0 }
            ),
            Ha(this.localStore, () => {
                this.user.hasProAccess.value || this.onUpdate(JSON.parse(this.localStore.value));
            });
    }
    reportChange(t) {
        return o(this, null, function* () {
            this.data[t.type] || (this.data[t.type] = {}),
                (this.data[t.type][t.id] = t.version),
                this.user.hasProAccess.value ? yield this.network.db.rtdb.write({ path: `/user-state/${t.ownerId}/reactivity`, ownerId: t.ownerId, data: this.data }) : (this.localStore.value = JSON.stringify(this.data));
        });
    }
}
const Ti = (r) => {};
var Be = ((r) => ((r.GOOGLE = "google"), (r.MICROSOFT = "microsoft"), (r.USERNAME_PASSWORD = "username-password"), (r.UNKNOWN = "unknown"), r))(Be || {}),
    Tt = ((r) => ((r[(r.ANONYMOUS = 0)] = "ANONYMOUS"), (r[(r.FREE = 10)] = "FREE"), (r[(r.PRO = 20)] = "PRO"), (r[(r.ADMIN = 40)] = "ADMIN"), (r[(r.SUPER_ADMIN = 80)] = "SUPER_ADMIN"), r))(Tt || {});
class R {}
s(R, "SUPER_ADMIN", "super_admin"),
    s(R, "SCHOOL_OWNER", "school_owner"),
    s(R, "SCHOOL_ADMIN", "school_admin"),
    s(R, "PRO_USER", "pro_user"),
    s(R, "PRO_USER_TRIALING", "pro_trialing"),
    s(R, "PRO_TRIAL_END_DATE", "pro_trial_end_date"),
    s(R, "PRO_TRIAL_USED", "pro_trial_used"),
    s(R, "STRIPE_CUSTOMER_ID", "stripe_customer_id"),
    s(R, "TEMPORARY_PRO_USER_ON", "temporary_pro_user_on"),
    s(R, "ERROR_TRACKING", "error_tracking"),
    s(R, "KEEP_PRO_ACTIVE_UNITL", "keep_pro_active_until"),
    s(R, "PADDLE_ACTIVE_SUBSCRIPTION_ID", "paddle_active_subscription_id");
const Ai = JSON.parse('["heritagehall.com"]');
class Di {
    constructor() {
        s(this, "isLoggingIn", Dt(!0));
        s(this, "user", Dt(null));
        s(this, "tokenResult", Dt(null));
        s(this, "cancelClaimsListener", null);
        s(
            this,
            "userId",
            A(() => {
                var t;
                return ((t = this.user.value) == null ? void 0 : t.uid) || "anonymous-" + Lt();
            })
        );
        s(
            this,
            "userEmail",
            A(() => {
                var t;
                return ((t = this.user.value) == null ? void 0 : t.email) || "";
            })
        );
        s(
            this,
            "userEmailVerified",
            A(() => {
                var t, e;
                return !(this.accountTypes.value.length === 1 && this.accountTypes.value.includes(Be.USERNAME_PASSWORD) && ((e = (t = this.user.value) == null ? void 0 : t.emailVerified) != null ? e : !1) === !1);
            })
        );
        s(
            this,
            "userName",
            A(() => {
                var t;
                return ((t = this.user.value) == null ? void 0 : t.displayName) || null;
            })
        );
        s(
            this,
            "userPhotoUrl",
            A(() => {
                var t;
                return ((t = this.user.value) == null ? void 0 : t.photoURL) || null;
            })
        );
        s(
            this,
            "planDescription",
            A(() => {
                const t = [this.isSuperAdmin.value ? "Wizard" : null, this.isSchoolOwner.value || this.isSchoolAdmin.value ? "School Pro" : null, this.isProUser.value ? "Pro" : null].filter((e) => e !== null);
                if (t.length > 0) return t.join(" & ") + " subscription" + (t.length > 1 ? "s" : "");
                {
                    const e = this.proTrialDaysLeft.value;
                    return this.isProTrialUser.value ? `Pro Trial (${e} day${e > 1 ? "s" : ""} left)` : "Basic account";
                }
            })
        );
        s(
            this,
            "isEmailEnterpriseDomain",
            A(() => {
                const t = this.userEmail.value.split("@")[1];
                return Ai.includes(t);
            })
        );
        s(
            this,
            "isEmailEnterpriseQualified",
            A(() => {
                const t = this.userEmail.value.split("@")[0],
                    a = this.userEmail.value.split("@")[1] === "heritagehall.com" && ki(t.slice(-2));
                return this.isEmailEnterpriseDomain.value && !a;
            })
        );
        s(
            this,
            "accountTypes",
            A(() => {
                var e, a, i, n;
                return this.user.value
                    ? (n =
                          (i = (a = (e = this.user) == null ? void 0 : e.value) == null ? void 0 : a.providerData) == null
                              ? void 0
                              : i.map((d) => {
                                    var h;
                                    switch ((h = d == null ? void 0 : d.providerId) != null ? h : "") {
                                        case "password":
                                            return Be.USERNAME_PASSWORD;
                                        case "google.com":
                                            return Be.GOOGLE;
                                        case "microsoft":
                                            return Be.MICROSOFT;
                                        case "microsoft.com":
                                            return Be.MICROSOFT;
                                        default:
                                            return Be.UNKNOWN;
                                    }
                                })) != null
                        ? n
                        : []
                    : [Be.UNKNOWN];
            })
        );
        s(
            this,
            "permissionLevel",
            A(() => (this.isSuperAdmin.value ? Tt.SUPER_ADMIN : this.hasProAccess.value ? Tt.PRO : this.user.value ? Tt.FREE : Tt.ANONYMOUS))
        );
        s(
            this,
            "claims",
            A(() => {
                var t, e;
                return (e = (t = this.tokenResult.value) == null ? void 0 : t.claims) != null ? e : {};
            })
        );
        s(
            this,
            "isLoggedIn",
            A(() => !!this.user.value)
        );
        s(
            this,
            "isAnonymousUser",
            A(() => !this.isLoggedIn.value)
        );
        s(
            this,
            "proTrialEndDate",
            A(() => {
                const t = this.claims.value[R.PRO_TRIAL_END_DATE];
                return t ? new Date(t) : null;
            })
        );
        s(
            this,
            "proTrialDaysLeft",
            A(() => (this.proTrialEndDate.value ? Math.round((this.proTrialEndDate.value.getTime() - new Date().getTime()) / (1e3 * 60 * 60 * 24)) : 0))
        );
        s(
            this,
            "isProTrialUser",
            A(() => !this.isProUser.value && this.claims.value[R.PRO_USER_TRIALING] === !0 && this.proTrialDaysLeft.value >= 0)
        );
        s(
            this,
            "isProUser",
            A(() => {
                var i;
                const t = this.claims.value[R.PRO_USER] === !0,
                    e = this.claims.value[R.TEMPORARY_PRO_USER_ON] === new Date().toISOString().split("T")[0],
                    a = ((i = this.claims.value[R.KEEP_PRO_ACTIVE_UNITL]) != null ? i : 0) > new Date().getTime() + 60 * 60 * 24 * 1e3;
                return t || e || a;
            })
        );
        s(
            this,
            "isSchoolOwnerOfSubscriptions",
            A(() => {
                var t;
                return (t = this.claims.value[R.SCHOOL_OWNER]) != null ? t : [];
            })
        );
        s(
            this,
            "isSchoolAdminOfSubscriptions",
            A(() => {
                var t;
                return [...this.isSchoolOwnerOfSubscriptions.value, ...((t = this.claims.value[R.SCHOOL_ADMIN]) != null ? t : [])];
            })
        );
        s(
            this,
            "isSchoolOwner",
            A(() => this.isSchoolOwnerOfSubscriptions.value.length > 0)
        );
        s(
            this,
            "isSchoolAdmin",
            A(() => this.isSchoolAdminOfSubscriptions.value.length > 0)
        );
        s(
            this,
            "isSuperAdmin",
            A(() => this.claims.value[R.SUPER_ADMIN] === !0)
        );
        s(
            this,
            "isAllowedToTrial",
            A(() => this.claims.value[R.PRO_TRIAL_USED] !== "v2")
        );
        s(
            this,
            "hasProAccess",
            A(() => this.isProTrialUser.value || this.isProUser.value)
        );
        s(
            this,
            "hasErrorTrackingEnabled",
            A(() => this.claims.value[R.ERROR_TRACKING] === !0)
        );
        s(
            this,
            "isFreeUser",
            A(() => this.isLoggedIn.value && !this.hasProAccess.value)
        );
        s(
            this,
            "isPaddleCustomer",
            A(() => !!this.paddleSubscriptionId.value)
        );
        s(
            this,
            "isStripeCustomer",
            A(() => {
                var t;
                return ((t = this.claims.value[R.STRIPE_CUSTOMER_ID]) == null ? void 0 : t.length) > 0;
            })
        );
        s(
            this,
            "paddleSubscriptionId",
            A(() => {
                var t;
                return (t = this.claims.value[R.PADDLE_ACTIVE_SUBSCRIPTION_ID]) != null ? t : null;
            })
        );
        s(
            this,
            "paddleCancelledButActiveUntilDate",
            A(() => {
                const t = this.claims.value[R.KEEP_PRO_ACTIVE_UNITL];
                return t || null;
            })
        );
        s(
            this,
            "adminForSubscriptionIds",
            A(() => {
                var a, i;
                const t = (a = this.claims.value[R.SCHOOL_OWNER]) != null ? a : [],
                    e = (i = this.claims.value[R.SCHOOL_OWNER]) != null ? i : [];
                return [...t, ...e];
            })
        );
        s(this, "onAuthStateChanged", (t) => W.onAuthStateChanged(t));
        s(this, "logInWithPassword", (t) => W.logInWithPassword(t));
        s(this, "logInWithGoogle", (t) => W.logInWithGoogle(t));
        s(this, "logInWithMicrosoft", (t) => W.logInWithMicrosoft(t));
        s(this, "reauthenticateUser", (t) => W.reauthenticateUser(t));
        s(this, "signOut", (t) => W.signOut(t));
        s(this, "signUpWithPassword", (t) => W.signUpWithPassword(t));
        s(this, "signUpWithGoogle", (t) => W.signUpWithGoogle(t));
        s(this, "signUpWithMicrosoft", (t) => W.signUpWithMicrosoft(t));
        s(this, "sendEmailVerification", (t) => W.sendEmailVerification());
        s(this, "sendPasswordResetEmail", (t) => W.sendPasswordResetEmail(t));
        s(this, "listenToClaims", () =>
            o(this, null, function* () {
                var e;
                const t = (e = this.user.value) == null ? void 0 : e.uid;
                if (t) {
                    const a = `user-claims/${t}`,
                        i = (d) =>
                            o(this, null, function* () {
                                const h = d.data();
                                if (h != null && h._propagationProcessed && this.user.value) {
                                    const m = this.hasProAccess.value;
                                    (this.tokenResult.value = yield this.user.value.getIdTokenResult(!0)), this.hasProAccess.value && !m && (yield Oe.onUpgradePro()), yield Oe.onClaimsUpdated();
                                }
                            }),
                        { unsubscribe: n } = yield Re.onSnapshot({ path: a, next: i });
                    this.cancelClaimsListener = n;
                }
            })
        );
        s(this, "stopListenToClaims", () => {
            this.cancelClaimsListener && this.cancelClaimsListener();
        });
        s(this, "logout", () =>
            o(this, null, function* () {
                yield Oe.onBeforeLogout(), yield W.signOut({});
            })
        );
        W.onAuthStateChanged({
            callback: (t) =>
                o(this, null, function* () {
                    var e;
                    try {
                        if (t) {
                            yield Oe.onBeforeLogin(), (this.user.value = t);
                            try {
                                this.tokenResult.value = yield t.getIdTokenResult(!0);
                            } catch (a) {
                                this.tokenResult.value = yield t.getIdTokenResult(!1);
                            }
                            Ls({ email: (e = t.email) != null ? e : "unknown" }),
                                this.stopListenToClaims(),
                                yield this.listenToClaims(),
                                this.isLoggedIn.value && !this.isProUser.value && this.userEmailVerified.value && this.isEmailEnterpriseQualified.value && (yield w.network.functions.claimEnterpriseLicense({})),
                                yield Oe.onLogin();
                        } else Rs((a) => a.setUser(null)), this.stopListenToClaims(), (this.user.value = null), (this.tokenResult.value = null), this.isLoggingIn.value || (yield Oe.onLogout());
                    } finally {
                        this.isLoggingIn.value = !1;
                    }
                }),
        });
    }
}
function ki(r) {
    const t = Number(r);
    return Number.isInteger(t) && t > 0;
}
let Ot, Ft, Ea, Ca, Wt;
class w {
    static get configuration() {
        if (!Ot) throw new y({ message: "Lsip.configuration is not initialized" });
        return Ot;
    }
    static get logger() {
        if (!Ft) throw new y({ message: "Lsip.logger is not initialized" });
        return Ft;
    }
    static get network() {
        if (!Ea) throw new y({ message: "Lsip.network is not initialized" });
        return Ea;
    }
    static get reactivity() {
        if (!Ca) throw new y({ message: "Lsip.reactivity is not initialized" });
        return Ca;
    }
    static get user() {
        if (!Wt) throw new y({ message: "Lsip.user is not initialized" });
        return Wt;
    }
    static initialize(t) {
        (Ot = t.configuration),
            (Ft = new li(t)),
            Ti(l({}, t.configuration.sentry)),
            ai({ config: t.configuration.firebase }),
            (Wt = new Di()),
            (Ea = new mi({ configuration: Ot, logger: this.logger, user: this.user })),
            (Ca = new Pi({ network: this.network, user: this.user }));
    }
    static logAnalytics(t) {
        return o(this, null, function* () {
            yield la.logEvent(t);
        });
    }
    static restoreSession() {
        return o(this, null, function* () {
            for (; Wt.isLoggingIn.value; ) Ft.debug("waiting for login"), yield et(100);
        });
    }
}
s(w, "utils", { sleep: et, uuidv4: Lt });
class vt {
    constructor(t) {
        s(this, "host");
        s(this, "infos");
        s(
            this,
            "all",
            computed(() => this.infos.value)
        );
        s(
            this,
            "trashed",
            computed(() => this.infos.value.filter((t) => t.isTrashed))
        );
        s(
            this,
            "untrashed",
            computed(() => this.infos.value.filter((t) => !t.isTrashed))
        );
        (this.infos = t.infos), (this.host = t.host);
    }
    add(t) {
        const e = this.infos.value.filter((a) => a.id !== t.info.id);
        t.onIndex === void 0 ? (this.infos.value = [...e, t.info]) : (this.infos.value = [...e.slice(0, t.onIndex), t.info, ...e.slice(t.onIndex)]);
    }
    exists(t) {
        return (t.excludeTrashed ? this.untrashed : this.infos).value.findIndex((a) => a.id === t.id) >= 0;
    }
    get(t) {
        const e = this.infos.value.findIndex((a) => a.id === t.id);
        if (e < 0) throw new y({ message: `Could not get info with id: ${t.id}` });
        return { info: this.infos.value[e], index: e };
    }
    orderFirst(t) {
        const { info: e } = this.get({ id: t.id }),
            a = this.infos.value.filter((i) => i.id !== t.id);
        this.infos.value = [e, ...a];
    }
    orderLast(t) {
        const { info: e } = this.get({ id: t.id }),
            a = this.infos.value.filter((i) => i.id !== t.id);
        this.infos.value = [...a, e];
    }
    orderAfterId(t) {
        const { info: e } = this.get({ id: t.id }),
            a = this.infos.value.filter((n) => n.id !== t.id),
            i = a.findIndex((n) => n.id === t.afterId);
        i >= 0 && (this.infos.value = [...a.slice(0, i + 1), e, ...a.slice(i + 1)]);
    }
    orderToUntrashedIndex(t) {
        if (t.toIndex <= 0) this.orderFirst({ id: t.id });
        else if (t.toIndex >= this.untrashed.value.length - 1) this.orderLast({ id: t.id });
        else {
            const e = this.untrashed.value.findIndex((a) => a.id === t.id);
            if (e >= 0) {
                if (e < t.toIndex) {
                    const a = this.untrashed.value[t.toIndex].id;
                    this.orderAfterId({ id: t.id, afterId: a });
                } else if (e > t.toIndex) {
                    const a = this.untrashed.value[t.toIndex - 1].id;
                    this.orderAfterId({ id: t.id, afterId: a });
                }
            }
        }
    }
    replace(t) {
        const { index: e } = this.get({ id: t.info.id });
        this.infos.value = this.unique({ infos: [...this.infos.value.slice(0, e), t.info, ...this.infos.value.slice(e + 1)] });
    }
    remove(t) {
        this.infos.value = [...this.infos.value.filter((e) => e.id !== t.id)];
    }
    trash(t) {
        const e = { isTrashed: !0 };
        this.update({ id: t.id, updates: e });
    }
    untrash(t) {
        const e = { isTrashed: !1 };
        this.update({ id: t.id, updates: e });
    }
    update(t) {
        const { info: e } = this.get({ id: t.id });
        this.replace({ info: l(l({}, e), t.updates) });
    }
    unique(t) {
        return t.infos.filter((e, a) => t.infos.findIndex((i) => i.id === e.id) === a);
    }
}
const Za = 25;
class Da extends vt {
    constructor(e) {
        super({ host: e.host, infos: e.images });
        s(this, "allowedMimeTypes");
        s(this, "maxUploads", ref(0));
        s(this, "create", (e) => {
            if (!this.allowedMimeTypes.includes(e.file.type)) throw new y({ message: `Images of type ${e.file.type.replace("image/", "")} are currently not supported.`, sourceFunction: "ImageCollection.create" });
            if (e.file.size > Za * 1024 * 1024) throw new y({ message: `The maximum size for an image is ${Za}MB.`, sourceFunction: "ImageCollection.create" });
            if (this.untrashed.value.length >= this.maxUploads.value) throw new y({ message: "Upload limit reached", sourceFunction: "ImageCollection.create" });
            const a = xe.getNew({ parentType: this.host.type, file: e.file });
            return (
                this.add({ info: { type: a.type, id: a.id, sessionId: a.sessionId.value, processingStatus: "idle", localUrl: "", originalUrl: "", thumbUrl: "", resizedUrl: "", fit: "cover", fill: "blur", rotation: 0, size: 0 } }),
                a.startProcessing(e),
                a
            );
        });
        s(this, "update", (e) => super.update(e));
        s(this, "delete", (e) =>
            o(this, null, function* () {
                const a = xe.getCachedOrEmpty({ parentType: this.host.type, id: e.id });
                this.trash({ id: e.id }), u.getUserPreferences().unmarkBackgroundFavorite({ id: e.id });
                try {
                    a.processingStatus.value === "resizing" || a.processingStatus.value === "uploading" ? (yield u.utils.sleep(30 * 1e3), yield a.delete()) : yield a.delete();
                } catch (i) {}
                this.remove({ id: e.id });
            })
        );
        s(
            this,
            "maxAdditionalImages",
            computed(() => this.maxUploads.value - this.untrashed.value.length)
        );
        (this.allowedMimeTypes = e.allowedMimeTypes), (this.maxUploads.value = e.maxUploads), (this.host = e.host);
    }
}
const Li = [
        {
            path: "/",
            name: "home",
            redirect: "/workspaces",
            component: () =>
                o(void 0, null, function* () {
                    return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                        "dashboard-pages-dac8abe6.js",
                        "vendor-8eeedc94.js",
                        "languages-14b4e254.js",
                        "CrsContextMenu-ac80e859.js",
                        "EditableTitle-bb1ca18a.js",
                        "UserBoldIcon-6c4a8709.js",
                        "PlusIcon-764a1459.js",
                        "DashboardChild-f615e887.js",
                        "PlusBoldIcon-3cb4e6c1.js",
                        "stripe-locales-bfbcdfeb.js",
                    ])).DashboardPage;
                }),
            props: !0,
            children: [
                {
                    path: "/workspaces",
                    name: "workspaces",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).WorkspacesOverviewPage;
                        }),
                    meta: { forwardAnonymous: !0, forwardFree: !0, requiresAcceptedTerms: !0 },
                    props: !0,
                    children: [
                        {
                            path: ":workspaceId",
                            name: "workspace",
                            component: () =>
                                o(void 0, null, function* () {
                                    return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                        "dashboard-pages-dac8abe6.js",
                                        "vendor-8eeedc94.js",
                                        "languages-14b4e254.js",
                                        "CrsContextMenu-ac80e859.js",
                                        "EditableTitle-bb1ca18a.js",
                                        "UserBoldIcon-6c4a8709.js",
                                        "PlusIcon-764a1459.js",
                                        "DashboardChild-f615e887.js",
                                        "PlusBoldIcon-3cb4e6c1.js",
                                        "stripe-locales-bfbcdfeb.js",
                                    ])).WorkspaceDetailsPage;
                                }),
                            meta: { forwardAnonymous: !0, forwardFree: !0, requiresAcceptedTerms: !0 },
                            props: !0,
                            beforeEnter: (r, t) => {
                                if (!r.params.ownerId) return { name: "workspaces", params: r.params };
                            },
                        },
                    ],
                },
                {
                    path: "/retry-migration/:migrationToken",
                    name: "retry-migration",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).RetryMigrationPage;
                        }),
                    meta: { forwardAnonymous: !0, requiresUser: !0, requiresAcceptedTerms: !0 },
                    props: !0,
                },
                {
                    path: "/student-lists",
                    name: "student-lists",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).StudentListsPage;
                        }),
                    meta: { forwardAnonymous: !0 },
                },
                {
                    path: "/backgrounds",
                    name: "backgrounds",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).BackgroundsPage;
                        }),
                    meta: { forwardAnonymous: !0 },
                },
                {
                    path: "/settings",
                    name: "settings",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).SettingsPage;
                        }),
                    meta: { forwardAnonymous: !0 },
                },
                {
                    path: "/account",
                    name: "account",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).AccountPage;
                        }),
                    meta: { forwardAnonymous: !0 },
                },
                {
                    path: "/subscription",
                    name: "subscription",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./dashboard-pages-dac8abe6.js"), [
                                "dashboard-pages-dac8abe6.js",
                                "vendor-8eeedc94.js",
                                "languages-14b4e254.js",
                                "CrsContextMenu-ac80e859.js",
                                "EditableTitle-bb1ca18a.js",
                                "UserBoldIcon-6c4a8709.js",
                                "PlusIcon-764a1459.js",
                                "DashboardChild-f615e887.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "stripe-locales-bfbcdfeb.js",
                            ])).SubscriptionPage;
                        }),
                    meta: { forwardAnonymous: !0 },
                },
                {
                    path: "/login",
                    name: "login",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).LogInPage;
                        }),
                    props: (r) => r.query,
                },
                {
                    path: "/logout",
                    name: "logout",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).SignOutPage;
                        }),
                    meta: { allowWithoutTerms: !0 },
                },
                {
                    path: "/signup",
                    name: "signup",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).SignUpPage;
                        }),
                    props: (r) => r.query,
                },
                {
                    path: "/signup-email",
                    name: "signup-email",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).SignUpPage;
                        }),
                    props: (r) => {
                        const t = r.query || {};
                        return l({ isEmailPasswordLogin: !0 }, t);
                    },
                },
                {
                    path: "/signin-heritagehall",
                    name: "signin-heritagehall",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).SignUpPage;
                        }),
                    props: { districtName: "Heritage Hall", isEnterpriseGoogleLogin: !0, showTerms: !1, redirectPath: "/wait-for-enterprise-privileges" },
                },
                {
                    path: "/reset-password",
                    name: "reset-password",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).ResetPasswordPage;
                        }),
                    props: (r) => r.query,
                },
                {
                    path: "/accept-the-terms",
                    name: "accept-the-terms",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).TermsAndConditionsPage;
                        }),
                    props: (r) => r.query,
                },
                {
                    path: "/verify-email",
                    name: "verify-email",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./auth-pages-2a93c8e9.js"), ["auth-pages-2a93c8e9.js", "DashboardChild-f615e887.js", "vendor-8eeedc94.js"])).VerifyEmailPage;
                        }),
                    props: (r) => r.query,
                },
                {
                    path: "/al/:licenseId/:activationSecret",
                    name: "activate-license",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).ActivateLicensePage;
                        }),
                    meta: { requiresUser: !0, requiresAcceptedTerms: !0, requiresVerifiedEmailAddress: !0 },
                    props: !0,
                },
                {
                    path: "/activate-coupon/:couponId",
                    name: "activate-coupon",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).ActivateCouponPage;
                        }),
                    meta: { requiresUser: !0, requiresAcceptedTerms: !0, requiresVerifiedEmailAddress: !0 },
                    props: !0,
                },
                {
                    path: "/choose-plan",
                    name: "choose-plan",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).ChoosePlanPage;
                        }),
                },
                {
                    path: "/checkout-pro",
                    name: "checkout-pro",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).CheckoutProPage;
                        }),
                    meta: { requiresUser: !0, requiresAcceptedTerms: !0, requiresVerifiedEmailAddress: !0 },
                },
                {
                    path: "/checkout-pro-paddle",
                    name: "checkout-pro-paddle",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).CheckoutProPage;
                        }),
                    meta: { requiresUser: !0, requiresAcceptedTerms: !0, requiresVerifiedEmailAddress: !0 },
                    props: { preferPaddle: !0 },
                },
                {
                    path: "/checkout-pro-school",
                    name: "checkout-pro-school",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).CheckoutProSchoolPage;
                        }),
                    meta: { requiresUser: !0, requiresAcceptedTerms: !0, requiresVerifiedEmailAddress: !0 },
                },
                {
                    path: "/checkout-pro-trial",
                    name: "checkout-pro-trial",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).CheckoutProTrialPage;
                        }),
                    meta: { requiresUser: !0, requiresAcceptedTerms: !0, requiresVerifiedEmailAddress: !0 },
                },
                {
                    path: "/wait-for-pro-trial-privileges",
                    name: "wait-for-pro-trial-privileges",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).WaitForPrivilegesPage;
                        }),
                    props: { privilegeType: "pro-trial" },
                    meta: { requiresUser: !0 },
                },
                {
                    path: "/wait-for-pro-privileges",
                    name: "wait-for-pro-privileges",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).WaitForPrivilegesPage;
                        }),
                    props: { privilegeType: "pro" },
                    meta: { requiresUser: !0 },
                },
                {
                    path: "/privileges-updated/:privilegeType",
                    name: "privileges-updated",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).PrivilegesUpdatedPage;
                        }),
                    props: !0,
                    meta: { requiresUser: !0 },
                },
                {
                    path: "/wait-for-enterprise-privileges",
                    name: "wait-for-enterprise-privileges",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).WaitForPrivilegesPage;
                        }),
                    props: { privilegeType: "enterprise" },
                    meta: { requiresUser: !0 },
                },
                {
                    path: "/wait-for-pro-school-privileges",
                    name: "wait-for-pro-school-privileges",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(() => import("./upgrade-pages-4288c23a.js"), [
                                "upgrade-pages-4288c23a.js",
                                "DashboardChild-f615e887.js",
                                "vendor-8eeedc94.js",
                                "stripe-locales-bfbcdfeb.js",
                                "PlusBoldIcon-3cb4e6c1.js",
                                "languages-14b4e254.js",
                                "InfoBoldIcon-3fab79a8.js",
                                "SliderInput-2ab07079.js",
                                "SetTheme-7fb46b3d.js",
                            ])).WaitForPrivilegesPage;
                        }),
                    props: { privilegeType: "pro-school" },
                    meta: { requiresUser: !0 },
                },
            ],
        },
        {
            path: "/screen/w/:workspaceId",
            name: "screen-workspace",
            component: () =>
                o(void 0, null, function* () {
                    return (yield f(
                        () =>
                            import("./screen-pages-1862d790.js").then(function (r) {
                                return r.x;
                            }),
                        ["screen-pages-1862d790.js", "vendor-8eeedc94.js", "CrsContextMenu-ac80e859.js", "languages-14b4e254.js", "HouseBoldIcon-c2761409.js", "SetTheme-7fb46b3d.js"]
                    )).ViewWorkspacePage;
                }),
            meta: {},
            props: !0,
            children: [
                {
                    path: "g/:screenGroupId",
                    name: "screen-screengroup",
                    component: () =>
                        o(void 0, null, function* () {
                            return (yield f(
                                () =>
                                    import("./screen-pages-1862d790.js").then(function (r) {
                                        return r.x;
                                    }),
                                ["screen-pages-1862d790.js", "vendor-8eeedc94.js", "CrsContextMenu-ac80e859.js", "languages-14b4e254.js", "HouseBoldIcon-c2761409.js", "SetTheme-7fb46b3d.js"]
                            )).ViewScreenGroupPage;
                        }),
                    meta: {},
                    props: !0,
                    children: [
                        {
                            path: "s/:screenId",
                            name: "screen",
                            component: () =>
                                o(void 0, null, function* () {
                                    return (yield f(
                                        () =>
                                            import("./screen-pages-1862d790.js").then(function (r) {
                                                return r.x;
                                            }),
                                        ["screen-pages-1862d790.js", "vendor-8eeedc94.js", "CrsContextMenu-ac80e859.js", "languages-14b4e254.js", "HouseBoldIcon-c2761409.js", "SetTheme-7fb46b3d.js"]
                                    )).ViewScreenPage;
                                }),
                            meta: { forwardAnonymous: !0, forwardFree: !0 },
                            props: !0,
                        },
                    ],
                },
            ],
        },
        {
            path: "/test",
            component: () =>
                o(void 0, null, function* () {
                    return (yield f(() => import("./test-pages-6c4c552e.js"), [
                        "test-pages-6c4c552e.js",
                        "HouseBoldIcon-c2761409.js",
                        "vendor-8eeedc94.js",
                        "SetTheme-7fb46b3d.js",
                        "CrsThemeButton-ce58528a.js",
                        "plugin-vue_export-helper-b1e42fc4.js",
                    ])).ViewButtonsPage;
                }),
        },
        {
            path: "/test-themes",
            component: () =>
                o(void 0, null, function* () {
                    return (yield f(() => import("./test-pages-6c4c552e.js"), [
                        "test-pages-6c4c552e.js",
                        "HouseBoldIcon-c2761409.js",
                        "vendor-8eeedc94.js",
                        "SetTheme-7fb46b3d.js",
                        "CrsThemeButton-ce58528a.js",
                        "plugin-vue_export-helper-b1e42fc4.js",
                    ])).ViewThemeButtonsPage;
                }),
        },
        { path: "/:pathMatch(.*)*", redirect: "/" },
    ],
    ka = Os({ history: Fs("/app/"), routes: Li });
ka.beforeEach((r, t) =>
    o(void 0, null, function* () {
        var e, a, i, n;
        try {
            if ((e = r.meta) != null && e.requiresUser && !u.user.isLoggedIn.value && (u.user.isLoggingIn.value && (yield u.restoreSession()), !u.user.isLoggedIn.value)) return { name: "signup", query: { redirectPath: r.path } };
            if ((a = r.meta) != null && a.requiresVerifiedEmailAddress && u.user.isLoggedIn.value && (yield (i = u.user.user.value) == null ? void 0 : i.reload(), !u.user.userEmailVerified.value))
                return { name: "verify-email", query: { redirectPath: r.path } };
            if ((n = r.meta) != null && n.requiresAcceptedTerms && u.user.isLoggedIn.value) {
                const d = ke.getCachedOrEmpty();
                if ((yield d.load(), d.needsToAcceptLatestTerms.value)) return { name: "accept-the-terms", query: { redirectPath: r.path } };
            }
            return !0;
        } catch (d) {
            return !0;
        }
    })
);
class ms {
    constructor() {
        s(this, "parent", null);
    }
}
class fs extends gs {}
class pt extends Oe {
    constructor() {
        super(...arguments);
        s(
            this,
            "parent",
            computed(() => {
                var e;
                return (e = this.data.dataComputed.parent.value) != null ? e : this.fallbackParent.value;
            })
        );
        s(this, "fallbackParent", ref(null));
    }
    static __getNew(e) {
        const a = pt.___getNew({ type: e.type, setup: e.setup });
        return a.updateParent({ parent: e.parent, triggerSave: !1 }), a;
    }
    static __getCachedOrEmpty(e) {
        const { bo: a, isFromCache: i } = pt.___getCachedOrEmpty(e);
        return e.parent && (a.fallbackParent.value = e.parent), { bo: a, isFromCache: i };
    }
    load() {
        return o(this, null, function* () {
            yield G(pt.prototype, this, "load").call(this), this.checkParent();
        });
    }
    updateParent(e) {
        e.triggerSave ? (this.data.dataComputed.parent.value = e.parent) : (this.data.dataRefs.parent.value = e.parent);
    }
}
class fa extends ms {}
class va extends fs {}
class wt extends pt {
    constructor(e) {
        super(e);
        s(this, "_ownerId");
        s(this, "_workspaceId");
        (this._ownerId = e.ownerId), (this._workspaceId = e.workspaceId);
    }
    static getPerWorkspaceConfiguration(e) {
        const a = wt.getBaseConfiguration(e);
        return c(l({}, a), { allowPersistence: { forAnonymousUser: !1, forFreeUser: !1, forProUser: !0 } });
    }
    get ownerId() {
        return this._ownerId;
    }
    get workspaceId() {
        return this._workspaceId;
    }
    onBeforeLogout() {
        return o(this, null, function* () {
            try {
                yield this.save();
            } finally {
                this.reset(), this.destroy();
            }
        });
    }
    onLogout() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onBeforeLogin() {
        return o(this, null, function* () {
            this.reset(), this.destroy();
        });
    }
    onLogin() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onUpgradePro() {
        return o(this, null, function* () {
            yield this.save();
        });
    }
    onClaimsUpdated() {
        return o(this, null, function* () {});
    }
}
const p = {
        white: { name: "white", variant: 0, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white950: { name: "white", variant: 950, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white900: { name: "white", variant: 900, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white800: { name: "white", variant: 800, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white700: { name: "white", variant: 700, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white600: { name: "white", variant: 600, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white500: { name: "white", variant: 500, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white400: { name: "white", variant: 400, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white300: { name: "white", variant: 300, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white200: { name: "white", variant: 200, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        white100: { name: "white", variant: 100, hex: "#FFFFFF", h: 0, s: 0, l: 100 },
        black: { name: "black", variant: 0, hex: "#000000", h: 0, s: 0, l: 0 },
        black950: { name: "black", variant: 950, hex: "#000000", h: 0, s: 0, l: 0 },
        black900: { name: "black", variant: 900, hex: "#000000", h: 0, s: 0, l: 0 },
        black800: { name: "black", variant: 800, hex: "#000000", h: 0, s: 0, l: 0 },
        black700: { name: "black", variant: 700, hex: "#000000", h: 0, s: 0, l: 0 },
        black600: { name: "black", variant: 600, hex: "#000000", h: 0, s: 0, l: 0 },
        black500: { name: "black", variant: 500, hex: "#000000", h: 0, s: 0, l: 0 },
        black400: { name: "black", variant: 400, hex: "#000000", h: 0, s: 0, l: 0 },
        black300: { name: "black", variant: 300, hex: "#000000", h: 0, s: 0, l: 0 },
        black200: { name: "black", variant: 200, hex: "#000000", h: 0, s: 0, l: 0 },
        black100: { name: "black", variant: 100, hex: "#000000", h: 0, s: 0, l: 0 },
        lime950: { name: "lime", variant: 950, hex: "#335214", h: 90, s: 61, l: 20 },
        lime900: { name: "lime", variant: 900, hex: "#3B6312", h: 90, s: 69, l: 23 },
        lime800: { name: "lime", variant: 800, hex: "#457B0F", h: 90, s: 78, l: 27 },
        lime700: { name: "lime", variant: 700, hex: "#59A50D", h: 90, s: 85, l: 35 },
        lime600: { name: "lime", variant: 600, hex: "#70CB15", h: 90, s: 81, l: 44 },
        lime500: { name: "lime", variant: 500, hex: "#8FDD40", h: 90, s: 70, l: 56 },
        lime400: { name: "lime", variant: 400, hex: "#ABF263", h: 90, s: 85, l: 67 },
        lime300: { name: "lime", variant: 300, hex: "#CCF99F", h: 90, s: 88, l: 80 },
        lime200: { name: "lime", variant: 200, hex: "#E3FCCA", h: 90, s: 89, l: 89 },
        lime100: { name: "lime", variant: 100, hex: "#F2FEE7", h: 91, s: 92, l: 95 },
        teal950: { name: "teal", variant: 950, hex: "#134E4E", h: 180, s: 61, l: 19 },
        teal900: { name: "teal", variant: 900, hex: "#115F5F", h: 180, s: 70, l: 22 },
        teal800: { name: "teal", variant: 800, hex: "#0F7575", h: 180, s: 77, l: 26 },
        teal700: { name: "teal", variant: 700, hex: "#009E9E", h: 180, s: 100, l: 31 },
        teal600: { name: "teal", variant: 600, hex: "#14B8B8", h: 180, s: 80, l: 40 },
        teal500: { name: "teal", variant: 500, hex: "#2DE1E1", h: 180, s: 75, l: 53 },
        teal400: { name: "teal", variant: 400, hex: "#5DEAEA", h: 180, s: 77, l: 64 },
        teal300: { name: "teal", variant: 300, hex: "#98F6F6", h: 180, s: 84, l: 78 },
        teal200: { name: "teal", variant: 200, hex: "#CBFBFB", h: 180, s: 86, l: 89 },
        teal100: { name: "teal", variant: 100, hex: "#E4FBFB", h: 180, s: 74, l: 94 },
        indigo950: { name: "indigo", variant: 950, hex: "#2E2F7F", h: 239, s: 47, l: 34 },
        indigo900: { name: "indigo", variant: 900, hex: "#2F31A2", h: 239, s: 55, l: 41 },
        indigo800: { name: "indigo", variant: 800, hex: "#3A3CCB", h: 239, s: 58, l: 51 },
        indigo700: { name: "indigo", variant: 700, hex: "#484BE5", h: 239, s: 75, l: 59 },
        indigo600: { name: "indigo", variant: 600, hex: "#6265ED", h: 239, s: 79, l: 66 },
        indigo500: { name: "indigo", variant: 500, hex: "#8082FF", h: 239, s: 100, l: 75 },
        indigo400: { name: "indigo", variant: 400, hex: "#A6A7FC", h: 239, s: 93, l: 82 },
        indigo300: { name: "indigo", variant: 300, hex: "#C8C9FE", h: 239, s: 96, l: 89 },
        indigo200: { name: "indigo", variant: 200, hex: "#E0E1FF", h: 238, s: 100, l: 94 },
        indigo100: { name: "indigo", variant: 100, hex: "#F0F0FF", h: 240, s: 100, l: 97 },
        rose950: { name: "rose", variant: 950, hex: "#861332", h: 344, s: 75, l: 30 },
        rose900: { name: "rose", variant: 900, hex: "#A11238", h: 344, s: 80, l: 35 },
        rose800: { name: "rose", variant: 800, hex: "#BF1240", h: 344, s: 83, l: 41 },
        rose700: { name: "rose", variant: 700, hex: "#E21D52", h: 344, s: 77, l: 50 },
        rose600: { name: "rose", variant: 600, hex: "#F43E6F", h: 344, s: 89, l: 60 },
        rose500: { name: "rose", variant: 500, hex: "#FF668F", h: 344, s: 100, l: 70 },
        rose400: { name: "rose", variant: 400, hex: "#FDA5BD", h: 344, s: 96, l: 82 },
        rose300: { name: "rose", variant: 300, hex: "#FECDDA", h: 344, s: 96, l: 90 },
        rose200: { name: "rose", variant: 200, hex: "#FFE5EC", h: 344, s: 100, l: 95 },
        rose100: { name: "rose", variant: 100, hex: "#FFF0F4", h: 344, s: 100, l: 97 },
        gray950: { name: "gray", variant: 950, hex: "#111827", h: 221, s: 39, l: 11 },
        gray900: { name: "gray", variant: 900, hex: "#1F2937", h: 215, s: 28, l: 17 },
        gray800: { name: "gray", variant: 800, hex: "#374151", h: 217, s: 19, l: 27 },
        gray700: { name: "gray", variant: 700, hex: "#4B5563", h: 215, s: 14, l: 34 },
        gray600: { name: "gray", variant: 600, hex: "#6B7280", h: 220, s: 9, l: 46 },
        gray500: { name: "gray", variant: 500, hex: "#9CA3AF", h: 218, s: 11, l: 65 },
        gray400: { name: "gray", variant: 400, hex: "#D1D5DB", h: 216, s: 12, l: 84 },
        gray300: { name: "gray", variant: 300, hex: "#E5E7EB", h: 220, s: 13, l: 91 },
        gray200: { name: "gray", variant: 200, hex: "#F3F4F6", h: 220, s: 14, l: 96 },
        gray100: { name: "gray", variant: 100, hex: "#F9FAFB", h: 210, s: 20, l: 98 },
        red950: { name: "red", variant: 950, hex: "#790C0C", h: 0, s: 82, l: 26 },
        red900: { name: "red", variant: 900, hex: "#950F0F", h: 0, s: 82, l: 32 },
        red800: { name: "red", variant: 800, hex: "#C21313", h: 0, s: 82, l: 42 },
        red700: { name: "red", variant: 700, hex: "#E81A1A", h: 0, s: 82, l: 51 },
        red600: { name: "red", variant: 600, hex: "#EB3737", h: 0, s: 82, l: 57 },
        red500: { name: "red", variant: 500, hex: "#F87171", h: 0, s: 91, l: 71 },
        red400: { name: "red", variant: 400, hex: "#FCA5A5", h: 0, s: 94, l: 82 },
        red300: { name: "red", variant: 300, hex: "#FECACA", h: 0, s: 96, l: 89 },
        red200: { name: "red", variant: 200, hex: "#FEE2E2", h: 0, s: 93, l: 94 },
        red100: { name: "red", variant: 100, hex: "#FEF2F2", h: 0, s: 86, l: 97 },
        orange950: { name: "orange", variant: 950, hex: "#7C2712", h: 12, s: 75, l: 28 },
        orange900: { name: "orange", variant: 900, hex: "#9A3212", h: 14, s: 79, l: 34 },
        orange800: { name: "orange", variant: 800, hex: "#C23D0C", h: 16, s: 88, l: 40 },
        orange700: { name: "orange", variant: 700, hex: "#EA4F0C", h: 18, s: 90, l: 48 },
        orange600: { name: "orange", variant: 600, hex: "#F97316", h: 25, s: 95, l: 53 },
        orange500: { name: "orange", variant: 500, hex: "#FB923C", h: 27, s: 96, l: 61 },
        orange400: { name: "orange", variant: 400, hex: "#FDBA74", h: 31, s: 97, l: 72 },
        orange300: { name: "orange", variant: 300, hex: "#FED7AA", h: 32, s: 98, l: 83 },
        orange200: { name: "orange", variant: 200, hex: "#FFEDD5", h: 34, s: 100, l: 92 },
        orange100: { name: "orange", variant: 100, hex: "#FFF4E5", h: 35, s: 100, l: 95 },
        green950: { name: "green", variant: 950, hex: "#14532D", h: 144, s: 61, l: 20 },
        green900: { name: "green", variant: 900, hex: "#166534", h: 143, s: 64, l: 24 },
        green800: { name: "green", variant: 800, hex: "#15803D", h: 142, s: 72, l: 29 },
        green700: { name: "green", variant: 700, hex: "#16A34A", h: 142, s: 76, l: 36 },
        green600: { name: "green", variant: 600, hex: "#22C55E", h: 142, s: 71, l: 45 },
        green500: { name: "green", variant: 500, hex: "#4ADE80", h: 142, s: 69, l: 58 },
        green400: { name: "green", variant: 400, hex: "#86EFAC", h: 142, s: 77, l: 73 },
        green300: { name: "green", variant: 300, hex: "#BBF7D0", h: 141, s: 79, l: 85 },
        green200: { name: "green", variant: 200, hex: "#DCFCE7", h: 141, s: 84, l: 93 },
        green100: { name: "green", variant: 100, hex: "#EDFDF2", h: 139, s: 80, l: 96 },
        amber950: { name: "amber", variant: 950, hex: "#78350F", h: 22, s: 78, l: 26 },
        amber900: { name: "amber", variant: 900, hex: "#92400E", h: 23, s: 83, l: 31 },
        amber800: { name: "amber", variant: 800, hex: "#B45309", h: 26, s: 90, l: 37 },
        amber700: { name: "amber", variant: 700, hex: "#D97706", h: 32, s: 95, l: 44 },
        amber600: { name: "amber", variant: 600, hex: "#F59E0B", h: 38, s: 92, l: 50 },
        amber500: { name: "amber", variant: 500, hex: "#FBBF24", h: 43, s: 96, l: 56 },
        amber400: { name: "amber", variant: 400, hex: "#FCD34D", h: 46, s: 97, l: 65 },
        amber300: { name: "amber", variant: 300, hex: "#FDE68A", h: 48, s: 97, l: 77 },
        amber200: { name: "amber", variant: 200, hex: "#FEF3C7", h: 48, s: 96, l: 89 },
        amber100: { name: "amber", variant: 100, hex: "#FFFBEB", h: 48, s: 100, l: 96 },
        yellow950: { name: "yellow", variant: 950, hex: "#713F12", h: 28, s: 73, l: 26 },
        yellow900: { name: "yellow", variant: 900, hex: "#854D0E", h: 32, s: 81, l: 29 },
        yellow800: { name: "yellow", variant: 800, hex: "#A16207", h: 35, s: 92, l: 33 },
        yellow700: { name: "yellow", variant: 700, hex: "#CA8A04", h: 41, s: 96, l: 40 },
        yellow600: { name: "yellow", variant: 600, hex: "#EAB308", h: 45, s: 93, l: 47 },
        yellow500: { name: "yellow", variant: 500, hex: "#FACC15", h: 48, s: 96, l: 53 },
        yellow400: { name: "yellow", variant: 400, hex: "#FDE047", h: 50, s: 98, l: 64 },
        yellow300: { name: "yellow", variant: 300, hex: "#FEF08A", h: 53, s: 98, l: 77 },
        yellow200: { name: "yellow", variant: 200, hex: "#FEF9C3", h: 55, s: 97, l: 88 },
        yellow100: { name: "yellow", variant: 100, hex: "#FEFCE8", h: 55, s: 92, l: 95 },
        emerald950: { name: "emerald", variant: 950, hex: "#064E3B", h: 164, s: 86, l: 16 },
        emerald900: { name: "emerald", variant: 900, hex: "#065F46", h: 163, s: 88, l: 20 },
        emerald800: { name: "emerald", variant: 800, hex: "#047857", h: 163, s: 94, l: 24 },
        emerald700: { name: "emerald", variant: 700, hex: "#059669", h: 161, s: 94, l: 30 },
        emerald600: { name: "emerald", variant: 600, hex: "#10B981", h: 160, s: 84, l: 39 },
        emerald500: { name: "emerald", variant: 500, hex: "#34D399", h: 158, s: 64, l: 52 },
        emerald400: { name: "emerald", variant: 400, hex: "#6EE7B7", h: 156, s: 72, l: 67 },
        emerald300: { name: "emerald", variant: 300, hex: "#A7F3D0", h: 152, s: 76, l: 80 },
        emerald200: { name: "emerald", variant: 200, hex: "#D1FAE5", h: 149, s: 80, l: 90 },
        emerald100: { name: "emerald", variant: 100, hex: "#DFFCEE", h: 151, s: 83, l: 93 },
        lightBlue950: { name: "lightBlue", variant: 950, hex: "#0C4A6E", h: 202, s: 80, l: 24 },
        lightBlue900: { name: "lightBlue", variant: 900, hex: "#075985", h: 201, s: 90, l: 27 },
        lightBlue800: { name: "lightBlue", variant: 800, hex: "#0369A1", h: 201, s: 96, l: 32 },
        lightBlue700: { name: "lightBlue", variant: 700, hex: "#0284C7", h: 200, s: 98, l: 39 },
        lightBlue600: { name: "lightBlue", variant: 600, hex: "#0EA5E9", h: 199, s: 89, l: 48 },
        lightBlue500: { name: "lightBlue", variant: 500, hex: "#38BDF8", h: 198, s: 93, l: 60 },
        lightBlue400: { name: "lightBlue", variant: 400, hex: "#7DD3FC", h: 199, s: 95, l: 74 },
        lightBlue300: { name: "lightBlue", variant: 300, hex: "#BAE6FD", h: 201, s: 94, l: 86 },
        lightBlue200: { name: "lightBlue", variant: 200, hex: "#E0F2FE", h: 204, s: 94, l: 94 },
        lightBlue100: { name: "lightBlue", variant: 100, hex: "#F0F9FF", h: 204, s: 100, l: 97 },
        blue950: { name: "blue", variant: 950, hex: "#1E3A8A", h: 224, s: 64, l: 33 },
        blue900: { name: "blue", variant: 900, hex: "#1E40AF", h: 226, s: 71, l: 40 },
        blue800: { name: "blue", variant: 800, hex: "#1D4ED8", h: 224, s: 76, l: 48 },
        blue700: { name: "blue", variant: 700, hex: "#2563EB", h: 221, s: 83, l: 53 },
        blue600: { name: "blue", variant: 600, hex: "#3B82F6", h: 217, s: 91, l: 60 },
        blue500: { name: "blue", variant: 500, hex: "#60A5FA", h: 213, s: 94, l: 68 },
        blue400: { name: "blue", variant: 400, hex: "#93C5FD", h: 212, s: 96, l: 78 },
        blue300: { name: "blue", variant: 300, hex: "#BFDBFE", h: 213, s: 97, l: 87 },
        blue200: { name: "blue", variant: 200, hex: "#DBEAFE", h: 214, s: 95, l: 93 },
        blue100: { name: "blue", variant: 100, hex: "#F0F6FF", h: 216, s: 100, l: 97 },
        violet950: { name: "violet", variant: 950, hex: "#4C1D95", h: 264, s: 67, l: 35 },
        violet900: { name: "violet", variant: 900, hex: "#115F5F", h: 180, s: 70, l: 22 },
        violet800: { name: "violet", variant: 800, hex: "#6D28D9", h: 263, s: 70, l: 50 },
        violet700: { name: "violet", variant: 700, hex: "#7C3AED", h: 262, s: 83, l: 58 },
        violet600: { name: "violet", variant: 600, hex: "#8B5CF6", h: 258, s: 90, l: 66 },
        violet500: { name: "violet", variant: 500, hex: "#A78BFA", h: 255, s: 92, l: 76 },
        violet400: { name: "violet", variant: 400, hex: "#C4B5FD", h: 252, s: 95, l: 85 },
        violet300: { name: "violet", variant: 300, hex: "#DDD6FE", h: 251, s: 95, l: 92 },
        violet200: { name: "violet", variant: 200, hex: "#EDE9FE", h: 251, s: 91, l: 95 },
        violet100: { name: "violet", variant: 100, hex: "#F5F3FF", h: 250, s: 100, l: 98 },
        purple950: { name: "purple", variant: 950, hex: "#000", h: 0, s: 100, l: 0 },
        purple900: { name: "purple", variant: 900, hex: "#6B21A8", h: 273, s: 67, l: 39 },
        purple800: { name: "purple", variant: 800, hex: "#7E22CE", h: 272, s: 72, l: 47 },
        purple700: { name: "purple", variant: 700, hex: "#9333EA", h: 271, s: 81, l: 56 },
        purple600: { name: "purple", variant: 600, hex: "#A855F7", h: 271, s: 91, l: 65 },
        purple500: { name: "purple", variant: 500, hex: "#C084FC", h: 270, s: 95, l: 75 },
        purple400: { name: "purple", variant: 400, hex: "#D8B4FE", h: 269, s: 97, l: 85 },
        purple300: { name: "purple", variant: 300, hex: "#E9D5FF", h: 269, s: 100, l: 92 },
        purple200: { name: "purple", variant: 200, hex: "#F3E8FF", h: 269, s: 100, l: 95 },
        purple100: { name: "purple", variant: 100, hex: "#F7F0FF", h: 268, s: 100, l: 97 },
        fuchsia950: { name: "fuchsia", variant: 950, hex: "#701A75", h: 297, s: 64, l: 28 },
        fuchsia900: { name: "fuchsia", variant: 900, hex: "#86198F", h: 295, s: 70, l: 33 },
        fuchsia800: { name: "fuchsia", variant: 800, hex: "#A21CAF", h: 295, s: 72, l: 40 },
        fuchsia700: { name: "fuchsia", variant: 700, hex: "#C026D3", h: 293, s: 69, l: 49 },
        fuchsia600: { name: "fuchsia", variant: 600, hex: "#D946EF", h: 292, s: 84, l: 61 },
        fuchsia500: { name: "fuchsia", variant: 500, hex: "#E879F9", h: 292, s: 91, l: 73 },
        fuchsia400: { name: "fuchsia", variant: 400, hex: "#F0ABFC", h: 291, s: 93, l: 83 },
        fuchsia300: { name: "fuchsia", variant: 300, hex: "#F5D0FE", h: 288, s: 96, l: 91 },
        fuchsia200: { name: "fuchsia", variant: 200, hex: "#FAE8FF", h: 287, s: 100, l: 95 },
        fuchsia100: { name: "fuchsia", variant: 100, hex: "#FDF4FF", h: 289, s: 100, l: 98 },
        pink950: { name: "pink", variant: 950, hex: "#831843", h: 336, s: 69, l: 30 },
        pink900: { name: "pink", variant: 900, hex: "#9D174D", h: 336, s: 74, l: 35 },
        pink800: { name: "pink", variant: 800, hex: "#BE185D", h: 335, s: 78, l: 42 },
        pink700: { name: "pink", variant: 700, hex: "#DB2777", h: 333, s: 71, l: 51 },
        pink600: { name: "pink", variant: 600, hex: "#EC4899", h: 330, s: 81, l: 60 },
        pink500: { name: "pink", variant: 500, hex: "#FF52AC", h: 329, s: 100, l: 66 },
        pink400: { name: "pink", variant: 400, hex: "#F9A8D4", h: 327, s: 87, l: 82 },
        pink300: { name: "pink", variant: 300, hex: "#FBCFE8", h: 326, s: 85, l: 90 },
        pink200: { name: "pink", variant: 200, hex: "#FCE7F3", h: 326, s: 78, l: 95 },
        pink100: { name: "pink", variant: 100, hex: "#FCEDF5", h: 328, s: 71, l: 96 },
    },
    Sa = "WORKSPACE_V1";
class Ri extends fa {
    constructor() {
        super(...arguments);
        s(this, "screenGroups", []);
    }
}
class La extends va {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.screenGroups.value];
            yield G(La.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.screenGroups.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.screenGroups.value = [...this.dataRefs.screenGroups.value, ...a]);
        });
    }
}
class Y extends wt {
    constructor(e) {
        super(l({}, e));
        s(this, "screenGroups");
        s(
            this,
            "info",
            computed(() => {
                const e = { type: this.type, id: this.id, ownerId: this.ownerId, workspaceId: this.id, title: "New workspace" },
                    a = J.getCachedOrError();
                return a.workspaces.exists({ id: this.id }) ? a.workspaces.get({ id: this.id }).info : e;
            })
        );
        s(this, "title", computed({ get: () => this.info.value.title, set: (e) => this.updateInfo({ updates: { title: e } }) }));
        const a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: this.type, id: this.id };
        this.screenGroups = new Hi({ host: a, screenGroups: this.data.dataComputed.screenGroups });
    }
    static getConfiguration(e) {
        const a = Y.getPerWorkspaceConfiguration(c(l({}, e), { type: Y.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.id}/workspace-v1/${e.id}` },
                { type: "https", function: "migrateWorkspaceGetV2", functionArgs: { workspaceId: e.id } },
            ],
        });
    }
    static get type() {
        return Sa;
    }
    get type() {
        return Y.type;
    }
    static setup(e) {
        const a = new La({ configuration: Y.getConfiguration({ ownerId: e.ownerId, workspaceId: e.id, id: e.id }), dataSpecAndDefaults: new Ri() }),
            i = new Y(c(l({}, e), { workspaceId: e.id, parent: { ownerId: e.ownerId, type: J.type, id: J.id }, data: a }));
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: i }), i;
    }
    static getCachedOrError(e) {
        return Y.___getCached({ type: Sa, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return Y.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => Y.setup(e),
            i = { ownerId: e.ownerId, type: J.type, id: J.id };
        return Y.__getCachedOrEmpty({ type: Sa, id: e.id, setup: a, parent: i }).bo;
    }
    static getNew(e) {
        const a = Lt(),
            i = { ownerId: e.ownerId, type: J.type, id: J.id },
            n = Y.getCachedOrEmpty(c(l({}, e), { id: a }));
        return n.skipLoad(), (n.data.dataRefs.parent.value = i), n;
    }
    load() {
        return o(this, null, function* () {
            yield G(Y.prototype, this, "load").call(this),
                this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && J.getCachedOrError().workspaces.exists({ id: this.id }) && (this.reset(), this.skipLoad());
        });
    }
    checkParent() {}
    updateInfo(e) {
        J.getCachedOrError().workspaces.update({ id: this.id, updates: e.updates });
    }
}
const xa = "SCREEN_GROUP_V1";
class Oi extends fa {
    constructor() {
        super(...arguments);
        s(this, "screens", []);
        s(this, "widgets", []);
        s(this, "widgetBar", "regular");
        s(this, "widgetsPreview", { h: 2914, w: [] });
    }
}
class Ra extends va {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.screens.value],
                e = [...this.dataRefs.widgets.value];
            yield G(Ra.prototype, this, "mergeData").call(this);
            const a = this.dataComputed.screens.value.map((h) => h.id),
                i = this.dataComputed.widgets.value.map((h) => h.id),
                n = t.filter((h) => !a.includes(h.id)),
                d = e.filter((h) => !i.includes(h.id));
            n.length > 0 && (this.dataComputed.screens.value = [...this.dataRefs.screens.value, ...n]), d.length > 0 && (this.dataComputed.widgets.value = [...this.dataRefs.widgets.value, ...d]);
        });
    }
}
const N = class extends wt {
    constructor(e) {
        super(e);
        s(this, "router");
        s(this, "screens");
        s(this, "widgets");
        s(this, "save", () =>
            o(this, null, function* () {
                yield Promise.all([this.data.sendSave(), this.screens.save(), this.widgets.save()]);
            })
        );
        s(this, "reload", () =>
            o(this, null, function* () {
                yield G(N.prototype, this, "reload").call(this), this.widgets.onReloadParent();
            })
        );
        s(
            this,
            "parentBO",
            computed(() => (this.parent.value ? Y.getCachedOrNull(this.parent.value) : null))
        );
        s(
            this,
            "info",
            computed(() => {
                var a, i;
                const e = { type: this.type, id: this.id, colorId: N.DEFAULT_COLOR_ID, title: N.DEFAULT_SCREEN_GROUP_TITLE };
                return (i = (a = this.parentBO.value) == null ? void 0 : a.screenGroups) != null && i.exists({ id: this.id }) ? this.parentBO.value.screenGroups.get({ id: this.id }).info : e;
            })
        );
        s(
            this,
            "colorId",
            computed({
                get: () => {
                    var e;
                    return (e = this.info.value.colorId) != null ? e : N.DEFAULT_COLOR_ID;
                },
                set: (e) => this.updateInfo({ updates: { colorId: e } }),
            })
        );
        s(
            this,
            "title",
            computed({
                get: () => {
                    var e;
                    return (e = this.info.value.title) != null ? e : N.DEFAULT_SCREEN_GROUP_TITLE;
                },
                set: (e) => this.updateInfo({ updates: { title: e } }),
            })
        );
        s(this, "widgetBar", this.data.dataComputed.widgetBar);
        s(this, "widgetsPreview", this.data.dataComputed.widgetsPreview);
        s(this, "active", ref(!1));
        s(this, "widgetBarEditMode", ref(!1));
        s(this, "isSpotlightModeActive", ref(!1));
        s(this, "isPollSpotlighted", ref(!1));
        s(
            this,
            "currentScreenId",
            computed(() => this.router.currentRoute.value.params.screenId || null)
        );
        s(
            this,
            "leftScreenId",
            computed(() => {
                if (this.currentScreenId.value) {
                    const e = this.screens.untrashed.value.findIndex((a) => a.id === this.currentScreenId.value);
                    if (e > 0) return this.screens.untrashed.value[e - 1].id;
                }
                return null;
            })
        );
        s(
            this,
            "currentScreenNumber",
            computed(() => {
                const e = this.screens.untrashed.value.findIndex((a) => a.id === this.currentScreenId.value);
                return e >= 0 ? e + 1 : 0;
            })
        );
        s(
            this,
            "rightScreenId",
            computed(() => {
                if (this.currentScreenId.value) {
                    const e = this.screens.untrashed.value.findIndex((a) => a.id === this.currentScreenId.value);
                    if (e < this.screens.untrashed.value.length - 1) return this.screens.untrashed.value[e + 1].id;
                }
                return null;
            })
        );
        s(
            this,
            "hasLeftScreen",
            computed(() => !!this.leftScreenId.value)
        );
        s(
            this,
            "hasRightScreen",
            computed(() => !!this.rightScreenId.value)
        );
        s(
            this,
            "color",
            computed(() => N.colors.find((a) => a.id === this.colorId.value) || N.colors[0])
        );
        s(this, "updatePreview", () => {
            this.widgetsPreview.value = this.widgets.getPreview({ maxWidgets: N.MAX_WIDGETS_IN_PREVIEW });
        });
        s(this, "activate", () => (this.active.value = !0));
        s(this, "deactivate", () => (this.active.value = !1));
        s(this, "openLeftScreen", () =>
            o(this, null, function* () {
                const e = this.leftScreenId.value;
                e && (yield this.openScreen({ screenId: e }));
            })
        );
        s(this, "openRightScreen", () =>
            o(this, null, function* () {
                const e = this.rightScreenId.value;
                e && (yield this.openScreen({ screenId: e }));
            })
        );
        s(this, "openNewScreen", () =>
            o(this, null, function* () {
                const e = this.screens.create({});
                yield this.openScreen({ screenId: e.id });
            })
        );
        s(this, "openScreen", (e) =>
            o(this, null, function* () {
                if (!this.parent.value) throw new y({ message: "parent is null", sourceFunction: "ScreenGroupBO.openScreen" });
                yield this.router.push({ name: "screen", params: { workspaceId: this.parent.value.id, screenGroupId: this.id, screenId: e.screenId } });
            })
        );
        s(this, "collapseWidgetBar", () => {
            this.widgetBar.value === "extended" ? ((this.widgetBar.value = this.widgetBar.value = "regular"), (this.widgetBarEditMode.value = !1)) : (this.widgetBar.value = "collapsed");
        });
        s(this, "extendWidgetBar", () => (this.widgetBar.value = this.widgetBar.value === "collapsed" ? "regular" : "extended"));
        const a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: this.type, id: this.id };
        (this.screens = new ji({ host: a, screens: this.data.dataComputed.screens })), (this.widgets = new ys({ host: a, widgets: this.data.dataComputed.widgets })), (this.router = pa());
    }
    static get DEFAULT_COLOR_ID() {
        return this.COLORS[0].id;
    }
    static get colors() {
        return N.COLORS;
    }
    static getConfiguration(e) {
        const a = N.getPerWorkspaceConfiguration(c(l({}, e), { type: N.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/screen-group-v1/${e.id}` },
                { type: "https", function: "migrateScreenGroupGetV2", functionArgs: { compoundScreenGroupId: e.id } },
            ],
        });
    }
    static get type() {
        return xa;
    }
    get type() {
        return N.type;
    }
    static setup(e) {
        const a = new Ra({ configuration: N.getConfiguration(e), dataSpecAndDefaults: new Oi() }),
            i = new N(c(l({}, e), { data: a }));
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: i }), i;
    }
    static getCachedOrError(e) {
        return N.___getCached({ type: xa, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return N.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => N.setup(e),
            i = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: Y.type, id: e.workspaceId };
        return N.__getCachedOrEmpty({ type: xa, id: e.id, setup: a, parent: i }).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i } = e,
            n = (d) => N.setup({ ownerId: a, workspaceId: i, id: d.id });
        return N.__getNew({ type: N.type, setup: n, parent: { ownerId: e.ownerId, workspaceId: e.workspaceId, type: "WORKSPACE_V1", id: e.workspaceId } });
    }
    clone(e) {
        return o(this, null, function* () {
            const a = N.getNew({ ownerId: e.parent.ownerId, workspaceId: e.parent.workspaceId });
            a.data.overwriteRefsExcept({ refs: this.data.dataRefs, exceptKeys: ["parent", "screens", "widgets"] });
            for (const i of this.screens.untrashed.value) yield a.screens.clone({ from: { parentBO: this, screenId: i.id } });
            return yield Promise.all(this.widgets.untrashed.value.map((i) => a.widgets.clone({ from: { parentBO: this, widgetId: i.id } }))), a;
        });
    }
    checkParent() {
        this.data.dataRefs.parent.value || this.updateParent({ parent: this.fallbackParent.value, triggerSave: !1 });
    }
    updateInfo(e) {
        var a, i;
        (i = (a = this.parentBO.value) == null ? void 0 : a.screenGroups) == null || i.update({ id: this.id, updates: e.updates });
    }
    sortTop() {
        this.parent.value && u.workspace.getCachedOrError({ id: this.parent.value.id }).screenGroups.orderFirst({ id: this.id });
    }
    sortBottom() {
        this.parent.value && u.workspace.getCachedOrError({ id: this.parent.value.id }).screenGroups.orderLast({ id: this.id });
    }
    sortUp() {
        if (this.parent.value) {
            const e = u.workspace.getCachedOrError({ id: this.parent.value.id }),
                a = e.screenGroups.untrashed.value.findIndex((i) => i.id === this.id);
            a > 0 && e.screenGroups.orderToUntrashedIndex({ id: this.id, toIndex: a - 1 });
        }
    }
    sortDown() {
        if (this.parent.value) {
            const e = u.workspace.getCachedOrError({ id: this.parent.value.id }),
                a = e.screenGroups.untrashed.value.findIndex((i) => i.id === this.id);
            a < e.screenGroups.untrashed.value.length - 1 && e.screenGroups.orderToUntrashedIndex({ id: this.id, toIndex: a + 1 });
        }
    }
    maxWidgetZIndexOnScreen(e) {
        const a = u.screen.getCachedOrError({ id: e.screenId });
        return [...this.widgets.untrashed.value, ...a.widgets.untrashed.value].reduce((n, d) => {
            const h = u.widget.getCachedOrError(d);
            return Math.max(h.z.value, n);
        }, 0);
    }
};
let z = N;
s(z, "DEFAULT_SCREEN_GROUP_TITLE", "New Collection"),
    s(z, "MAX_WIDGETS_IN_PREVIEW", 10),
    s(z, "COLORS", [
        { id: "color-gray", name: "gray", background: p.gray100.hex, border: p.gray400.hex },
        { id: "color-fuchsia", name: "fuchsia", background: p.fuchsia100.hex, border: p.fuchsia600.hex },
        { id: "color-indigo", name: "indigo", background: p.indigo100.hex, border: p.indigo600.hex },
        { id: "color-blue", name: "blue", background: p.blue100.hex, border: p.blue600.hex },
        { id: "color-teal", name: "teal", background: p.teal100.hex, border: p.teal600.hex },
        { id: "color-emerald", name: "emerald", background: p.emerald100.hex, border: p.emerald600.hex },
        { id: "color-amber", name: "amber", background: p.amber100.hex, border: p.amber600.hex },
        { id: "color-red", name: "red", background: p.red100.hex, border: p.red600.hex },
    ]);
const Ut = "SCREEN_V1";
class Fi extends fa {
    constructor() {
        super(...arguments);
        s(this, "widgets", []);
        s(this, "description", "");
    }
}
class Oa extends va {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.widgets.value];
            yield G(Oa.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.widgets.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.widgets.value = [...this.dataRefs.widgets.value, ...a]);
        });
    }
}
const X = class extends wt {
    constructor(e) {
        super(e);
        s(this, "widgets");
        s(this, "save", () =>
            o(this, null, function* () {
                yield Promise.all([this.data.sendSave(), this.widgets.save()]);
            })
        );
        s(this, "reload", () =>
            o(this, null, function* () {
                yield G(X.prototype, this, "reload").call(this), this.widgets.onReloadParent();
            })
        );
        s(
            this,
            "parentBO",
            computed(() => (this.parent.value ? z.getCachedOrNull(this.parent.value) : null))
        );
        s(
            this,
            "info",
            computed(() => {
                var a, i;
                const e = { type: this.type, id: this.id, backgroundInfo: { type: "crs-color", id: "color-white" }, title: "Screen", widgetsPreview: { h: 2914, w: [] } };
                return (i = (a = this.parentBO.value) == null ? void 0 : a.screens) != null && i.exists({ id: this.id }) ? this.parentBO.value.screens.get({ id: this.id }).info : e;
            })
        );
        s(
            this,
            "backgroundInfo",
            computed(() => {
                var e;
                return (e = this.info.value.backgroundInfo) != null ? e : { type: "crs-color", id: "color-white" };
            })
        );
        s(
            this,
            "title",
            computed({
                get: () => {
                    var e;
                    return (e = this.info.value.title) != null ? e : "Screen";
                },
                set: (e) => this.updateInfo({ updates: { title: e } }),
            })
        );
        s(this, "updatePreview", () => {
            this.updateInfo({ updates: { widgetsPreview: this.widgets.getPreview({ maxWidgets: X.MAX_WIDGETS_IN_PREVIEW }) } });
        });
        s(this, "description", this.data.dataComputed.description);
        s(this, "activeWidgetId", ref(null));
        s(this, "selectedWidgetIds", ref([]));
        s(this, "isBackgroundModalOpen", ref(!1));
        s(this, "isSettingsModalOpen", ref(!1));
        s(this, "_spotlightedWidget", ref(null));
        s(
            this,
            "spotlightedWidget",
            computed({
                get: () => {
                    var a, i, n, d, h, m;
                    return [...this.widgets.untrashed.value, ...((d = (n = (i = (a = this.parentBO.value) == null ? void 0 : a.widgets) == null ? void 0 : i.untrashed) == null ? void 0 : n.value) != null ? d : [])]
                        .map((v) => v.id)
                        .includes((m = (h = this._spotlightedWidget.value) == null ? void 0 : h.id) != null ? m : "")
                        ? this._spotlightedWidget.value
                        : null;
                },
                set: (e) => {
                    this._spotlightedWidget.value = e;
                },
            })
        );
        s(
            this,
            "background",
            computed(() => u.getRootForScreenBackgrounds().getBackgroundOrNull({ id: this.backgroundInfo.value.id }))
        );
        s(
            this,
            "isBackgroundDark",
            computed(() => {
                var e;
                return ((e = this.background.value) == null ? void 0 : e.type) === "crs-color" ? this.background.value.isDark : !0;
            })
        );
        s(
            this,
            "isBackgroundWhite",
            computed(() => {
                var e;
                return ((e = this.background.value) == null ? void 0 : e.type) === "crs-color" ? this.background.value.cssColor.toLocaleLowerCase() === "#ffffff" : !1;
            })
        );
        s(this, "setBackground", (e) => {
            this.updateInfo({ updates: { backgroundInfo: e.backgroundInfo } });
        });
        const a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: this.type, id: this.id };
        this.widgets = new ys({ host: a, widgets: this.data.dataComputed.widgets });
    }
    static getConfiguration(e) {
        const a = X.getPerWorkspaceConfiguration(c(l({}, e), { type: X.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/screen-v1/${e.id}` },
                { type: "https", function: "migrateScreenGetV2", functionArgs: { workspaceId: e.workspaceId, compoundScreenId: e.id } },
            ],
        });
    }
    static get type() {
        return Ut;
    }
    get type() {
        return X.type;
    }
    static setup(e) {
        const a = new Oa({ configuration: X.getConfiguration(e), dataSpecAndDefaults: new Fi() }),
            i = new X(c(l({}, e), { data: a }));
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: i }), i;
    }
    static getCachedOrError(e) {
        return X.___getCached({ type: Ut, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return X.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => X.setup(e);
        if (e.screenGroupId) {
            const i = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: z.type, id: e.screenGroupId };
            return X.__getCachedOrEmpty({ type: Ut, id: e.id, setup: a, parent: i }).bo;
        } else return X.__getCachedOrEmpty({ type: Ut, id: e.id, setup: a }).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenGroupId: n } = e,
            d = { ownerId: a, workspaceId: i, type: z.type, id: n },
            h = (v) => X.setup({ ownerId: a, workspaceId: i, id: v.id }),
            m = X.__getNew({ type: X.type, setup: h, parent: d });
        return m.updateParent({ parent: d, triggerSave: !0 }), m;
    }
    clone(e) {
        return o(this, null, function* () {
            const a = X.getNew({ ownerId: e.parent.ownerId, workspaceId: e.parent.workspaceId, screenGroupId: e.parent.id });
            a.data.overwriteRefsExcept({ refs: this.data.dataRefs, exceptKeys: ["parent", "widgets"] });
            const i = this.widgets.untrashed.value.map((n) => a.widgets.clone({ from: { parentBO: this, widgetId: n.id } }));
            return yield Promise.all(i), a;
        });
    }
    checkParent() {
        if ((this.data.dataRefs.parent.value || this.updateParent({ parent: this.fallbackParent.value, triggerSave: !1 }), !this.data.dataRefs.parent.value)) return;
        let e = z.getCachedOrNull(this.data.dataRefs.parent.value);
        if (((!e || !e.screens.exists({ id: this.id })) && this.updateParent({ parent: this.fallbackParent.value, triggerSave: !1 }), (e = z.getCachedOrNull(this.data.dataRefs.parent.value)), !e || !e.screens.exists({ id: this.id }))) {
            (this.fallbackParent.value = null), this.updateParent({ parent: null, triggerSave: !1 });
            return;
        }
    }
    updateInfo(e) {
        var a, i;
        (i = (a = this.parentBO.value) == null ? void 0 : a.screens) == null || i.update({ id: this.id, updates: e.updates });
    }
    maxWidgetZIndexOnScreen() {
        return this.parentBO.value
            ? this.parentBO.value.maxWidgetZIndexOnScreen({ screenId: this.id })
            : this.widgets.untrashed.value.reduce((e, a) => {
                  const i = u.widget.getCachedOrError(a);
                  return Math.max(i.z.value, e);
              }, 0);
    }
    openScreenPage() {
        return o(this, null, function* () {
            const e = this.parent.value;
            !e || (yield ka.push({ name: "screen", params: { workspaceId: this.workspaceId, screenGroupId: e.id, screenId: this.id } }));
        });
    }
};
let re = X;
s(re, "BACKGROUND_IF_REMOVED", { type: "crs-image", id: "not-found" }), s(re, "MAX_WIDGETS_IN_PREVIEW", 20);
class at {}
class st extends gs {}
class $ extends Oe {
    static getPerUserConfiguration(t) {
        const e = $.getBaseConfiguration(t);
        return c(l({}, e), { allowPersistence: { forAnonymousUser: !1, forFreeUser: !1, forProUser: !0 } });
    }
    constructor(t) {
        super(t);
    }
    onBeforeLogout() {
        return o(this, null, function* () {
            yield this.save(), this.reset();
        });
    }
    onLogout() {
        return o(this, null, function* () {
            this.reset(), this.skipLoad();
        });
    }
    onBeforeLogin() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onLogin() {
        return o(this, null, function* () {
            this.reset(), yield this.load();
        });
    }
    onUpgradePro() {
        return o(this, null, function* () {});
    }
    onClaimsUpdated() {
        return o(this, null, function* () {});
    }
}
const It = "ROOT_FOR_WIDGET_IMAGES",
    it = "--root-for-image-widget-backgrounds--";
class Wi extends at {
    constructor() {
        super(...arguments);
        s(this, "images", []);
    }
}
class Fa extends st {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.images.value];
            yield G(Fa.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.images.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.images.value = [...this.dataRefs.images.value, ...a]);
        });
    }
}
const Ne = class extends $ {
    constructor(e) {
        super(e);
        s(this, "images");
        s(
            this,
            "thumbUrl",
            computed(() => (e) => (this.images.exists({ id: e.imageId }) ? this.images.all.value.find((a) => a.id === e.imageId).thumbUrl : null))
        );
        this.images = new Da({ host: { type: It, id: it }, images: this.data.dataComputed.images, allowedMimeTypes: Ne.MIME_TYPES, maxUploads: Ne.MAX_UPLOADS });
    }
    static getConfiguration() {
        const e = Ne.getPerUserConfiguration({ id: it, type: Ne.type });
        return c(l({}, e), {
            endpoints: [
                { type: "firestore", path: `user-data/{{userId}}/image-data/${it}` },
                { type: "https", function: "migrateRootForWidgetImagesGetV2", functionArgs: {} },
            ],
        });
    }
    static get type() {
        return It;
    }
    get type() {
        return It;
    }
    static get id() {
        return it;
    }
    static setup() {
        const e = new Ne({ data: new Fa({ configuration: Ne.getConfiguration(), dataSpecAndDefaults: new Wi() }) });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: e }), e;
    }
    static getCachedOrEmpty() {
        return $.___getCachedOrEmpty({ type: It, id: it, setup: Ne.setup }).bo;
    }
    static getCachedOrError() {
        return $.___getCached({ type: It, id: it });
    }
    load() {
        return o(this, null, function* () {
            yield G(Ne.prototype, this, "load").call(this), this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && (this.reset(), this.skipLoad());
        });
    }
    onUpgradePro() {
        return o(this, null, function* () {
            yield this.merge(), yield this.save();
        });
    }
    resumeProcessingImages() {
        return o(this, null, function* () {
            yield Promise.all(
                this.images.untrashed.value.map((e) =>
                    o(this, null, function* () {
                        let a;
                        switch (e.processingStatus) {
                            case "done":
                                break;
                            case "failed":
                                this.images.trash({ id: e.id });
                                break;
                            default:
                                (a = xe.getCachedOrEmpty({ parentType: this.type, id: e.id })), yield a.load(), a.resumeProcessing();
                        }
                    })
                )
            ),
                yield Promise.all(
                    this.images.trashed.value.map((e) =>
                        o(this, null, function* () {
                            return this.images.delete({ id: e.id });
                        })
                    )
                );
        });
    }
};
let ze = Ne;
s(ze, "MIME_TYPES", ["image/jpeg", "image/png", "image/gif"]), s(ze, "MAX_UPLOADS", 300);
var S = ((r) => (
    (r.DICE = "dice.mp3"),
    (r.TRAFFIC_LIGHT = "traffic_light_swipe.mp3"),
    (r.WORK_SYMBOLS = "work_symbols_swipe.mp3"),
    (r.PING = "sound_level_ping.mp3"),
    (r.RANDOM_NAME_1 = "randomname-zacht.mp3"),
    (r.RANDOM_NAME_2 = "randomname-hard.mp3"),
    (r.MUTED = ""),
    (r.DINGDONG = "timer1_dingdong.mp3"),
    (r.COWBELL = "timer2_cowbell.mp3"),
    (r.BUZZER = "timer3_buzzer.mp3"),
    (r.EGG = "timer4_egg.mp3"),
    (r.COIN = "timer5_coin.mp3"),
    (r.HARP = "timer6_harp.mp3"),
    (r.ARABIC = "timer7_arabic.mp3"),
    (r.COUNTRY = "timer8_country.mp3"),
    (r.MARIO = "timer9_mario.mp3"),
    (r.TROPICAL = "timer10_tropical.mp3"),
    (r.ALARM = "timer11_alarmclock.mp3"),
    (r.CRICKET = "timer12_cricket.mp3"),
    (r.GONG = "timer13_gong.mp3"),
    r
))(S || {});
const Ui = "https://static.classroomscreen.com/sounds",
    kt = {},
    Ze = (r) =>
        o(void 0, null, function* () {
            if (r !== "" && !kt[r]) {
                const t = yield f(
                    () =>
                        import("./howler-4d38d400.js").then(function (e) {
                            return e.h;
                        }),
                    ["howler-4d38d400.js", "vendor-8eeedc94.js"]
                );
                kt[r] = new t.Howl({ src: `${Ui}/${r}` });
            }
        });
function wa(r) {
    return o(this, null, function* () {
        if (r !== "" && (yield Ze(r), kt[r]))
            if (u.utils.isIOS) kt[r].play();
            else {
                const t = kt[r];
                (t.currentTime = 0), yield t.play();
            }
    });
}
const Gt = "USER_INFO",
    Et = "info";
class Gi extends at {
    constructor() {
        super(...arguments);
        s(this, "email", null);
        s(this, "nickName", null);
        s(this, "isTrial", !1);
        s(this, "isPro", !1);
        s(this, "isSchoolOwner", !1);
        s(this, "isSchoolAdmin", !1);
        s(this, "proRenewalDateString", null);
        s(this, "proIsCanceled", !1);
        s(this, "proSchoolRenewalDateString", null);
        s(this, "proSchoolIsCanceled", !1);
        s(this, "hasUsedNameList", !1);
        s(this, "hasUsedBackground", !1);
        s(this, "hasUsedWorkspace", !1);
    }
}
class Ni extends st {}
class De extends $ {
    constructor(e) {
        super(e);
        s(this, "email", this.data.dataComputed.email);
        s(this, "nickName", this.data.dataComputed.nickName);
        s(this, "isTrial", this.data.dataComputed.isTrial);
        s(this, "isPro", this.data.dataComputed.isPro);
        s(this, "isSchoolOwner", this.data.dataComputed.isSchoolOwner);
        s(this, "isSchoolAdmin", this.data.dataComputed.isSchoolAdmin);
        s(this, "proRenewalDateString", this.data.dataComputed.proRenewalDateString);
        s(this, "proIsCanceled", this.data.dataComputed.proIsCanceled);
        s(this, "proSchoolRenewalDateString", this.data.dataComputed.proSchoolRenewalDateString);
        s(this, "proSchoolIsCanceled", this.data.dataComputed.proSchoolIsCanceled);
        s(this, "hasUsedNameList", this.data.dataComputed.hasUsedNameList);
        s(this, "hasUsedBackground", this.data.dataComputed.hasUsedBackground);
        s(this, "hasUsedWorkspace", this.data.dataComputed.hasUsedWorkspace);
    }
    static getConfiguration() {
        const e = De.getPerUserConfiguration({ id: Et, type: De.type });
        return c(l({}, e), { endpoints: [{ type: "firestore", path: `user-data/{{userId}}/user-data/${Et}` }], allowPersistence: { forAnonymousUser: !1, forFreeUser: !0, forProUser: !0 } });
    }
    static get type() {
        return Gt;
    }
    get type() {
        return Gt;
    }
    static get id() {
        return Et;
    }
    static setup() {
        const e = new De({ data: new Ni({ configuration: De.getConfiguration(), dataSpecAndDefaults: new Gi() }) });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: e }), e;
    }
    static getCachedOrEmpty() {
        return $.___getCachedOrEmpty({ type: Gt, id: Et, setup: De.setup }).bo;
    }
    static getCachedOrError() {
        return $.___getCached({ type: Gt, id: Et });
    }
    static getCachedOrNull() {
        try {
            return this.getCachedOrError();
        } catch (e) {
            return null;
        }
    }
    load() {
        return o(this, null, function* () {
            yield G(De.prototype, this, "load").call(this), this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && (this.reset(), this.skipLoad()), this.updateInfo();
        });
    }
    onClaimsUpdated() {
        return o(this, null, function* () {
            yield G(De.prototype, this, "onClaimsUpdated").call(this), this.updateInfo();
        });
    }
    updateInfo() {
        const { userEmail: e } = u.user;
        this.email.value = e.value;
        const { nickName: a } = u.getUserPreferences();
        (this.nickName.value = a.value),
            (this.isTrial.value = u.user.isProTrialUser.value),
            (this.isPro.value = u.user.isProUser.value),
            (this.isSchoolOwner.value = u.user.isSchoolOwner.value),
            (this.isSchoolAdmin.value = u.user.isSchoolAdmin.value);
        const { images: i } = u.getRootForScreenBackgrounds(),
            { studentLists: n } = u.getRootForStudentLists(),
            { workspaces: d } = u.getRootForWorkspaces();
        (this.hasUsedBackground.value = this.hasUsedBackground.value || i.all.value.length > 0),
            (this.hasUsedNameList.value = this.hasUsedNameList.value || n.all.value.length > 0),
            (this.hasUsedWorkspace.value = this.hasUsedWorkspace.value || d.all.value.length > 1);
    }
}
const Ct = "USER_PREFERENCES",
    rt = "preferences",
    Qa = "accepted-terms-version";
class Mi extends at {
    constructor() {
        super(...arguments);
        s(this, "dashboardStyleId", "primary");
        s(this, "primaryWidgets", [
            "WIDGET_BACKGROUND_V1",
            "WIDGET_POLL_V1",
            "WIDGET_RANDOM_NAME_V1",
            "WIDGET_QR_CODE_V1",
            "WIDGET_SOUND_LEVEL_V1",
            "WIDGET_IMAGE_V1",
            "WIDGET_TEXT_V1",
            "WIDGET_DRAW_V1",
            "WIDGET_WORK_SYMBOLS_V1",
            "WIDGET_TRAFFIC_LIGHT_V1",
            "WIDGET_TIMER_V1",
            "WIDGET_CLOCK_V1",
        ]);
        s(this, "secondaryWidgets", []);
        s(this, "viewedNotificationIds", []);
        s(this, "isDeleteScreenWarningEnabled", !1);
        s(this, "isDeleteScreenGroupWarningEnabled", !0);
        s(this, "isSnapToGridEnabled", !1);
        s(this, "isStealthModeEnabled", !1);
        s(this, "isWidgetBarCounterVisible", !0);
        s(this, "locale", "en_us");
        s(this, "nickName", null);
        s(this, "photoUrl", null);
        s(this, "photoImageId", null);
        s(this, "screenButtonsLocation", "bottom-right");
        s(this, "tosAacceptedVersion", null);
        s(this, "tosAcceptedOn", null);
        s(this, "images", []);
        s(this, "defaultThemeId", "theme-light-1");
        s(this, "userThemes", []);
        s(this, "backgroundFavoriteIds", []);
        s(this, "clockAlarms", []);
        s(this, "clockDefaultSound", S.EGG);
        s(this, "clockDefaultShowAm", !0);
        s(this, "calendarWeekStartsOn", "monday");
        s(this, "diceIsSoundEnabled", !0);
        s(this, "drawArrowColor", "var(--color-theme-500)");
        s(this, "drawArrowSize", 5);
        s(this, "drawArrowStyle", "solid");
        s(this, "drawDrawColor", "var(--color-theme-500)");
        s(this, "drawDrawSize", 5);
        s(this, "drawDrawStyle", "solid");
        s(this, "drawEllipseColor", "var(--color-theme-500)");
        s(this, "drawEllipseSize", 5);
        s(this, "drawEllipseStyle", "solid");
        s(this, "drawLineColor", "var(--color-theme-500)");
        s(this, "drawLineSize", 5);
        s(this, "drawLineStyle", "solid");
        s(this, "drawRectangleColor", "var(--color-theme-500)");
        s(this, "drawRectangleSize", 5);
        s(this, "drawRectangleStyle", "solid");
        s(this, "drawStylusColor", "var(--color-theme-500)");
        s(this, "drawStylusSize", 5);
        s(this, "groupMakerDefaultFontSize", "sm");
        s(this, "groupMakerIsAnimationEnabled", !0);
        s(this, "groupMakerIsSoundEnabled", !0);
        s(this, "pollVotingMode", "remote");
        s(this, "soundLevelIsAlarmEnabled", !0);
        s(this, "soundLevelPreferredMicrophoneId", null);
        s(this, "soundLevelSensitivity", 100);
        s(this, "soundLevelDefaultThreshold", 4);
        s(this, "textDefaultFontFamily", "quicksand");
        s(this, "textDefaultFontSize", "28px");
        s(this, "textIsSpellCheckEnabled", !1);
        s(this, "randomNameIsAnimationEnabled", !0);
        s(this, "randomNameIsSoundEnabled", !0);
        s(this, "trafficLightIsSoundEnabled", !0);
        s(this, "timerDefaultAlarmSound", S.DINGDONG);
        s(this, "timerIsRedIndicatorEnabled", !0);
        s(this, "timerIsTimeInBrowserTabEnabled", !1);
        s(this, "timerRedIndicatorType", "percentage");
        s(this, "timerRedIndicatorPercentage", 25);
        s(this, "timerRedIndicatorSeconds", 10);
        s(this, "timerDefaultTimeMinutes", 10);
        s(this, "timerDefaultTimeSeconds", 0);
        s(this, "webcamPreferredCameraId", null);
        s(this, "workSymbolsIsSoundEnabled", !0);
    }
}
class Wa extends st {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.images.value];
            yield G(Wa.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.images.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.images.value = [...this.dataRefs.images.value, ...a]);
        });
    }
}
const H = class extends $ {
    constructor(e) {
        super(e);
        s(this, "images");
        s(this, "dashboardStyleId", this.data.dataComputed.dashboardStyleId);
        s(
            this,
            "primaryWidgets",
            computed({
                get: () => this.data.dataComputed.primaryWidgets.value.filter((a, i, n) => n.indexOf(a) === i),
                set: (e) => {
                    this.data.dataComputed.primaryWidgets.value = e;
                },
            })
        );
        s(
            this,
            "secondaryWidgets",
            computed({
                get: () => {
                    const e = this.data.dataComputed.secondaryWidgets.value,
                        a = Gr.filter((n) => !this.primaryWidgets.value.includes(n) && !e.includes(n));
                    return [...e, ...a].filter((n) => n !== "WIDGET_DRAW_V0").filter((n, d, h) => h.indexOf(n) === d);
                },
                set: (e) => {
                    this.data.dataComputed.secondaryWidgets.value = e;
                },
            })
        );
        s(this, "viewedNotificationIds", this.data.dataComputed.viewedNotificationIds);
        s(this, "isDeleteScreenWarningEnabled", this.data.dataComputed.isDeleteScreenWarningEnabled);
        s(this, "isDeleteScreenGroupWarningEnabled", this.data.dataComputed.isDeleteScreenGroupWarningEnabled);
        s(this, "isSnapToGridEnabled", this.data.dataComputed.isSnapToGridEnabled);
        s(this, "isStealthModeEnabled", this.data.dataComputed.isStealthModeEnabled);
        s(this, "isWidgetBarCounterVisible", this.data.dataComputed.isWidgetBarCounterVisible);
        s(this, "locale", this.data.dataComputed.locale);
        s(
            this,
            "nickName",
            computed({
                get: () => {
                    var e;
                    return this.data.dataComputed.nickName.value === null ? ((e = u.user.userName.value) != null ? e : "") : this.data.dataComputed.nickName.value;
                },
                set: (e) => {
                    this.data.dataComputed.nickName.value = e;
                },
            })
        );
        s(this, "photoImageId", this.data.dataComputed.photoImageId);
        s(
            this,
            "photoUrl",
            computed(() => {
                var e, a;
                if (this.photoImageId.value && this.images.exists({ id: this.photoImageId.value })) {
                    const i = this.images.all.value.find((n) => n.id === this.photoImageId.value);
                    return i.sessionId === u.sessionId ? i.originalUrl : i.thumbUrl;
                }
                return (a = (e = this.data.dataComputed.photoUrl.value) != null ? e : u.user.userPhotoUrl.value) != null ? a : "https://static.classroomscreen.com/placeholders/profile-image-empty-state.png";
            })
        );
        s(this, "screenButtonsLocation", this.data.dataComputed.screenButtonsLocation);
        s(this, "tosAacceptedVersion", this.data.dataComputed.tosAacceptedVersion);
        s(this, "tosAcceptedOn", this.data.dataComputed.tosAcceptedOn);
        s(
            this,
            "needsToAcceptLatestTerms",
            computed(() => (u.user.isLoggedIn.value ? (u.user.isEmailEnterpriseQualified.value ? !1 : this.isLoaded.value ? this.tosAacceptedVersion.value !== H.TERMS_LATEST_VERSION : !1) : !1))
        );
        s(
            this,
            "defaultThemeId",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.defaultThemeId.value) != null ? e : this.themes.value[0].id;
                },
                set: (e) => (this.data.dataComputed.defaultThemeId.value = e),
            })
        );
        s(this, "userThemes", this.data.dataComputed.userThemes);
        s(
            this,
            "backgroundFavoriteIds",
            computed(() => this.data.dataComputed.backgroundFavoriteIds.value)
        );
        s(this, "clockAlarms", this.data.dataComputed.clockAlarms);
        s(this, "clockDefaultSound", this.data.dataComputed.clockDefaultSound);
        s(this, "clockDefaultShowAm", this.data.dataComputed.clockDefaultShowAm);
        s(this, "calendarWeekStartsOn", this.data.dataComputed.calendarWeekStartsOn);
        s(this, "diceIsSoundEnabled", this.data.dataComputed.diceIsSoundEnabled);
        s(this, "drawArrowColor", this.data.dataComputed.drawArrowColor);
        s(this, "drawArrowSize", this.data.dataComputed.drawArrowSize);
        s(this, "drawArrowStyle", this.data.dataComputed.drawArrowStyle);
        s(this, "drawDrawColor", this.data.dataComputed.drawDrawColor);
        s(this, "drawDrawSize", this.data.dataComputed.drawDrawSize);
        s(this, "drawDrawStyle", this.data.dataComputed.drawDrawStyle);
        s(this, "drawEllipseColor", this.data.dataComputed.drawEllipseColor);
        s(this, "drawEllipseSize", this.data.dataComputed.drawEllipseSize);
        s(this, "drawEllipseStyle", this.data.dataComputed.drawEllipseStyle);
        s(this, "drawLineColor", this.data.dataComputed.drawLineColor);
        s(this, "drawLineSize", this.data.dataComputed.drawLineSize);
        s(this, "drawLineStyle", this.data.dataComputed.drawLineStyle);
        s(this, "drawRectangleColor", this.data.dataComputed.drawRectangleColor);
        s(this, "drawRectangleSize", this.data.dataComputed.drawRectangleSize);
        s(this, "drawRectangleStyle", this.data.dataComputed.drawRectangleStyle);
        s(this, "drawStylusColor", this.data.dataComputed.drawStylusColor);
        s(this, "drawStylusSize", this.data.dataComputed.drawStylusSize);
        s(this, "groupMakerDefaultFontSize", this.data.dataComputed.groupMakerDefaultFontSize);
        s(this, "groupMakerIsAnimationEnabled", this.data.dataComputed.groupMakerIsAnimationEnabled);
        s(this, "groupMakerIsSoundEnabled", this.data.dataComputed.groupMakerIsSoundEnabled);
        s(this, "pollVotingMode", computed({ get: () => (u.user.isLoggedIn.value ? this.data.dataComputed.pollVotingMode.value : "local"), set: (e) => (this.data.dataComputed.pollVotingMode.value = e) }));
        s(
            this,
            "pollIsLocalVotingEnabled",
            computed(() => this.pollVotingMode.value !== "remote")
        );
        s(
            this,
            "pollIsRemoteVotingEnabled",
            computed(() => this.pollVotingMode.value !== "local")
        );
        s(this, "soundLevelIsAlarmEnabled", this.data.dataComputed.soundLevelIsAlarmEnabled);
        s(this, "soundLevelPreferredMicrophoneId", this.data.dataComputed.soundLevelPreferredMicrophoneId);
        s(this, "soundLevelSensitivity", this.data.dataComputed.soundLevelSensitivity);
        s(this, "soundLevelDefaultThreshold", this.data.dataComputed.soundLevelDefaultThreshold);
        s(this, "textDefaultFontFamily", this.data.dataComputed.textDefaultFontFamily);
        s(this, "textDefaultFontSize", this.data.dataComputed.textDefaultFontSize);
        s(this, "textIsSpellCheckEnabled", this.data.dataComputed.textIsSpellCheckEnabled);
        s(this, "randomNameIsAnimationEnabled", this.data.dataComputed.randomNameIsAnimationEnabled);
        s(this, "randomNameIsSoundEnabled", this.data.dataComputed.randomNameIsSoundEnabled);
        s(this, "trafficLightIsSoundEnabled", this.data.dataComputed.trafficLightIsSoundEnabled);
        s(this, "timerDefaultAlarmSound", this.data.dataComputed.timerDefaultAlarmSound);
        s(this, "timerIsTimeInBrowserTabEnabled", this.data.dataComputed.timerIsTimeInBrowserTabEnabled);
        s(this, "timerIsRedIndicatorEnabled", this.data.dataComputed.timerIsRedIndicatorEnabled);
        s(this, "timerRedIndicatorType", this.data.dataComputed.timerRedIndicatorType);
        s(
            this,
            "timerRedIndicatorPercentage",
            computed({
                get: () => this.data.dataComputed.timerRedIndicatorPercentage.value,
                set: (e) => {
                    typeof e == "number" && (this.data.dataComputed.timerRedIndicatorPercentage.value = e);
                },
            })
        );
        s(
            this,
            "timerRedIndicatorSeconds",
            computed({
                get: () => this.data.dataComputed.timerRedIndicatorSeconds.value,
                set: (e) => {
                    typeof e == "number" && (this.data.dataComputed.timerRedIndicatorSeconds.value = e);
                },
            })
        );
        s(
            this,
            "timerDefaultTimeMinutes",
            computed({
                get: () => this.data.dataComputed.timerDefaultTimeMinutes.value,
                set: (e) => {
                    typeof e == "number" && (this.data.dataComputed.timerDefaultTimeMinutes.value = e);
                },
            })
        );
        s(
            this,
            "timerDefaultTimeSeconds",
            computed({
                get: () => this.data.dataComputed.timerDefaultTimeSeconds.value,
                set: (e) => {
                    typeof e == "number" && (this.data.dataComputed.timerDefaultTimeSeconds.value = e);
                },
            })
        );
        s(this, "webcamPreferredCameraId", this.data.dataComputed.webcamPreferredCameraId);
        s(this, "workSymbolsIsSoundEnabled", this.data.dataComputed.workSymbolsIsSoundEnabled);
        s(this, "moveWidgetButton", (e) => {
            (this.primaryWidgets.value = [...this.primaryWidgets.value.filter((a) => a !== e.type)]),
                (this.secondaryWidgets.value = [...this.secondaryWidgets.value.filter((a) => a !== e.type)]),
                e.toGroup === "primary"
                    ? (this.primaryWidgets.value.length >= 12 && (this.primaryWidgets.value = [...this.primaryWidgets.value.slice(0, 11)]),
                      (this.primaryWidgets.value = [...this.primaryWidgets.value.slice(0, e.toIndex), e.type, ...this.primaryWidgets.value.slice(e.toIndex)]))
                    : (this.secondaryWidgets.value = [...this.secondaryWidgets.value.slice(0, e.toIndex), e.type, ...this.secondaryWidgets.value.slice(e.toIndex)]);
        });
        s(
            this,
            "hasAcceptedLatestTerms",
            computed(() => this.tosAacceptedVersion.value === this.TERMS_LATEST_VERSION)
        );
        s(
            this,
            "dashboardStyle",
            computed(() => H.DASHBOARD_STYLES.find((e) => e.id === this.dashboardStyleId.value) || H.DASHBOARD_STYLES[0])
        );
        s(this, "markNotificationViewed", (e) => {
            this.viewedNotificationIds.value.includes(e.id) || (this.viewedNotificationIds.value = [...this.viewedNotificationIds.value, e.id]);
        });
        s(
            this,
            "themes",
            computed(() => [...H.THEMES, ...this.userThemes.value])
        );
        s(this, "findTheme", (e) => {
            var a, i;
            return (i = (a = this.themes.value.find((n) => n.id === e.id)) != null ? a : this.themes.value.find((n) => n.id === this.defaultThemeId.value)) != null ? i : this.themes.value[0];
        });
        this.images = new Da({ host: { type: Ct, id: rt }, images: this.data.dataComputed.images, allowedMimeTypes: H.MIME_TYPES, maxUploads: H.MAX_UPLOADS });
    }
    static getConfiguration() {
        const e = H.getPerUserConfiguration({ id: rt, type: H.type });
        return c(l({}, e), {
            endpoints: [
                { type: "firestore", path: `user-data/{{userId}}/user-data/${rt}` },
                { type: "https", function: "migrateUserPreferencesGetV2", functionArgs: {} },
            ],
            allowPersistence: { forAnonymousUser: !1, forFreeUser: !0, forProUser: !0 },
        });
    }
    static get type() {
        return Ct;
    }
    get type() {
        return Ct;
    }
    static get id() {
        return rt;
    }
    static setup() {
        onMounted(() => {
            watch(e.nickName, (a) => {
                if (a) {
                    const i = De.getCachedOrNull();
                    i && (i.nickName.value = a);
                }
            });
        });
        const e = new H({ data: new Wa({ configuration: H.getConfiguration(), dataSpecAndDefaults: new Mi() }) });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: e }), e;
    }
    static getCachedOrEmpty() {
        return $.___getCachedOrEmpty({ type: Ct, id: rt, setup: H.setup }).bo;
    }
    static getCachedOrError() {
        return $.___getCached({ type: Ct, id: rt });
    }
    load() {
        return o(this, null, function* () {
            yield G(H.prototype, this, "load").call(this),
                this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && (this.reset(), this.skipLoad()),
                yield ti(this.locale.value),
                this.needsToAcceptLatestTerms.value && sessionStorage.getItem(Qa) === H.TERMS_LATEST_VERSION && ((this.tosAacceptedVersion.value = H.TERMS_LATEST_VERSION), sessionStorage.setItem(Qa, ""));
        });
    }
    onLogout() {
        return o(this, null, function* () {
            yield G(H.prototype, this, "onLogout").call(this), j.resetRoomAndSession();
        });
    }
    resumeProcessingImages() {
        return o(this, null, function* () {
            yield Promise.all(
                this.images.untrashed.value.map((e) =>
                    o(this, null, function* () {
                        let a;
                        switch (e.processingStatus) {
                            case "done":
                                break;
                            case "failed":
                                this.images.trash({ id: e.id });
                                break;
                            default:
                                (a = xe.getCachedOrEmpty({ parentType: this.type, id: e.id })), yield a.load(), a.resumeProcessing();
                        }
                    })
                )
            ),
                yield Promise.all(
                    this.images.trashed.value.map((e) =>
                        o(this, null, function* () {
                            return this.images.delete({ id: e.id });
                        })
                    )
                );
        });
    }
    markBackgroundFavorite(e) {
        this.backgroundFavoriteIds.value.includes(e.id) || (this.data.dataComputed.backgroundFavoriteIds.value = [...this.backgroundFavoriteIds.value, e.id]);
    }
    unmarkBackgroundFavorite(e) {
        this.backgroundFavoriteIds.value.includes(e.id) && (this.data.dataComputed.backgroundFavoriteIds.value = [...this.backgroundFavoriteIds.value.filter((a) => a !== e.id)]);
    }
    get TERMS_LATEST_VERSION() {
        return H.TERMS_LATEST_VERSION;
    }
    get crsThemes() {
        return H.THEMES;
    }
};
let ke = H;
s(ke, "MIME_TYPES", ["image/jpeg", "image/png"]),
    s(ke, "MAX_UPLOADS", 100),
    s(ke, "TERMS_LATEST_VERSION", "2.0"),
    s(ke, "DASHBOARD_STYLES", [
        { id: "primary", backgroundClass: "bg-primary-500", selectedClass: "ring-2 ring-primary-500", logoStyle: "dark", hex: p.indigo600.hex },
        { id: "dark", backgroundClass: "bg-gray-950", selectedClass: "ring-2 ring-gray-950", logoStyle: "dark", hex: p.gray950.hex },
        { id: "rose", backgroundClass: "bg-rose-700", selectedClass: "ring-2 ring-rose-700", logoStyle: "bright", hex: p.rose700.hex },
        { id: "teal", backgroundClass: "bg-teal-700", selectedClass: "ring-2 ring-teal-700", logoStyle: "bright", hex: p.teal700.hex },
        { id: "lime", backgroundClass: "bg-lime-700", selectedClass: "ring-2 ring-lime-700", logoStyle: "bright", hex: p.lime700.hex },
        { id: "red", backgroundClass: "bg-red-700", selectedClass: "ring-2 ring-red-700", logoStyle: "bright", hex: p.red700.hex },
        { id: "amber", backgroundClass: "bg-amber-700", selectedClass: "ring-2 ring-amber-700", logoStyle: "bright", hex: p.amber700.hex },
        { id: "emerald", backgroundClass: "bg-emerald-600", selectedClass: "ring-2 ring-emerald-600", logoStyle: "bright", hex: p.emerald600.hex },
        { id: "lightblue", backgroundClass: "bg-lightblue-600", selectedClass: "ring-2 ring-lightblue-600", logoStyle: "bright", hex: p.lightBlue600.hex },
        { id: "purple", backgroundClass: "bg-purple-600", selectedClass: "ring-2 ring-purple-600", logoStyle: "bright", hex: p.purple600.hex },
        { id: "fuchsia", backgroundClass: "bg-fuchsia-700", selectedClass: "ring-2 ring-fuchsia-700", logoStyle: "bright", hex: p.fuchsia700.hex },
        { id: "pink", backgroundClass: "bg-pink-600", selectedClass: "ring-2 ring-pink-600", logoStyle: "bright", hex: p.pink600.hex },
    ]),
    s(ke, "THEMES", [
        {
            id: "theme-light-1",
            name: "Light",
            background: c(l({}, p.white), { a: 1 }),
            color: c(l({}, p.gray950), { a: 1 }),
            accent1: c(l({}, p.indigo600), { a: 1 }),
            accent2: c(l({}, p.gray950), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        {
            id: "theme-overcast-1",
            name: "Overcast",
            background: c(l({}, p.white), { a: 0 }),
            color: c(l({}, p.gray950), { a: 1 }),
            accent1: c(l({}, p.gray950), { a: 1 }),
            accent2: c(l({}, p.gray950), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        { id: "theme-bright-1", name: "Bright", background: c(l({}, p.gray950), { a: 0 }), color: c(l({}, p.white), { a: 1 }), accent1: c(l({}, p.white), { a: 1 }), accent2: c(l({}, p.white), { a: 1 }), red: c(l({}, p.red800), { a: 1 }) },
        {
            id: "theme-clean-1",
            name: "Clean",
            background: c(l({}, p.white), { a: 1 }),
            color: c(l({}, p.lightBlue800), { a: 1 }),
            accent1: c(l({}, p.lightBlue800), { a: 1 }),
            accent2: c(l({}, p.gray950), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        {
            id: "theme-winter-1",
            name: "Winter",
            background: c(l({}, p.teal100), { a: 1 }),
            color: c(l({}, p.teal800), { a: 1 }),
            accent1: c(l({}, p.teal800), { a: 1 }),
            accent2: c(l({}, p.teal800), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        {
            id: "theme-river-1",
            name: "River",
            background: c(l({}, p.lightBlue300), { a: 1 }),
            color: c(l({}, p.blue900), { a: 1 }),
            accent1: c(l({}, p.blue900), { a: 1 }),
            accent2: c(l({}, p.lightBlue900), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        {
            id: "theme-dune-1",
            name: "Dune",
            background: c(l({}, p.amber300), { a: 1 }),
            color: c(l({}, p.gray950), { a: 1 }),
            accent1: c(l({}, p.emerald900), { a: 1 }),
            accent2: c(l({}, p.red800), { a: 1 }),
            red: c(l({}, p.red700), { a: 1 }),
        },
        {
            id: "theme-sand-1",
            name: "Sand",
            background: c(l({}, p.amber300), { a: 1 }),
            color: c(l({}, p.orange900), { a: 1 }),
            accent1: c(l({}, p.orange900), { a: 1 }),
            accent2: c(l({}, p.orange900), { a: 1 }),
            red: c(l({}, p.red700), { a: 1 }),
        },
        {
            id: "theme-cotton-candy-1",
            name: "Cotton Candy",
            background: c(l({}, p.pink300), { a: 1 }),
            color: c(l({}, p.violet800), { a: 1 }),
            accent1: c(l({}, p.violet800), { a: 1 }),
            accent2: c(l({}, p.violet800), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        { id: "theme-fall-1", name: "Fall", background: c(l({}, p.orange400), { a: 1 }), color: c(l({}, p.red900), { a: 1 }), accent1: c(l({}, p.red900), { a: 1 }), accent2: c(l({}, p.red900), { a: 1 }), red: c(l({}, p.red700), { a: 1 }) },
        {
            id: "theme-swamp-1",
            name: "Swamp",
            background: c(l({}, p.green400), { a: 1 }),
            color: c(l({}, p.teal900), { a: 1 }),
            accent1: c(l({}, p.teal900), { a: 1 }),
            accent2: c(l({}, p.teal900), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        {
            id: "theme-jungle-1",
            name: "Jungle",
            background: c(l({}, p.amber500), { a: 1 }),
            color: c(l({}, p.lightBlue900), { a: 1 }),
            accent1: c(l({}, p.lightBlue900), { a: 1 }),
            accent2: c(l({}, p.red900), { a: 1 }),
            red: c(l({}, p.red700), { a: 1 }),
        },
        {
            id: "theme-sea-1",
            name: "Sea",
            background: c(l({}, p.blue900), { a: 1 }),
            color: c(l({}, p.teal500), { a: 1 }),
            accent1: c(l({}, p.teal500), { a: 1 }),
            accent2: c(l({}, p.lightBlue300), { a: 1 }),
            red: c(l({}, p.red600), { a: 1 }),
        },
        {
            id: "theme-spring-1",
            name: "Spring",
            background: c(l({}, p.violet950), { a: 1 }),
            color: c(l({}, p.purple400), { a: 1 }),
            accent1: c(l({}, p.purple400), { a: 1 }),
            accent2: c(l({}, p.lightBlue300), { a: 1 }),
            red: c(l({}, p.red600), { a: 1 }),
        },
        {
            id: "theme-sunset-1",
            name: "Sunset",
            background: c(l({}, p.red900), { a: 1 }),
            color: c(l({}, p.orange400), { a: 1 }),
            accent1: c(l({}, p.orange400), { a: 1 }),
            accent2: c(l({}, p.orange400), { a: 1 }),
            red: c(l({}, p.red600), { a: 1 }),
        },
        {
            id: "theme-forest-1",
            name: "Forest",
            background: c(l({}, p.emerald900), { a: 1 }),
            color: c(l({}, p.white), { a: 1 }),
            accent1: c(l({}, p.amber300), { a: 1 }),
            accent2: c(l({}, p.red300), { a: 1 }),
            red: c(l({}, p.red700), { a: 1 }),
        },
        {
            id: "theme-autumn-1",
            name: "Autumn",
            background: c(l({}, p.blue950), { a: 1 }),
            color: c(l({}, p.orange500), { a: 1 }),
            accent1: c(l({}, p.orange500), { a: 1 }),
            accent2: c(l({}, p.lightBlue500), { a: 1 }),
            red: c(l({}, p.red600), { a: 1 }),
        },
        { id: "theme-bee-1", name: "Bee", background: c(l({}, p.gray950), { a: 1 }), color: c(l({}, p.white), { a: 1 }), accent1: c(l({}, p.amber500), { a: 1 }), accent2: c(l({}, p.amber500), { a: 1 }), red: c(l({}, p.red800), { a: 1 }) },
        {
            id: "theme-lime-1",
            name: "Lime",
            background: c(l({}, p.gray950), { a: 1 }),
            color: c(l({}, p.white), { a: 1 }),
            accent1: c(l({}, p.green500), { a: 1 }),
            accent2: c(l({}, p.green500), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
        {
            id: "theme-dark-1",
            name: "Dark",
            background: c(l({}, p.gray950), { a: 1 }),
            color: c(l({}, p.white), { a: 1 }),
            accent1: c(l({}, p.indigo500), { a: 1 }),
            accent2: c(l({}, p.indigo500), { a: 1 }),
            red: c(l({}, p.red800), { a: 1 }),
        },
    ]);
const Nt = "IMAGE_V1",
    Vi = 1e4,
    es = 5,
    ts = !0,
    St = "https://files.prd.classroomscreen.com",
    as = "https://static.classroomscreen.com/backgrounds/not-found/thumb-not-found.jpg";
class $i extends at {
    constructor() {
        super(...arguments);
        s(this, "name", "");
        s(this, "mimeType", "");
        s(this, "extension", "");
        s(this, "size", 0);
        s(this, "processingStatus", "idle");
        s(this, "localUrl", "");
        s(this, "originalUrl", "");
        s(this, "resizedUrl", "");
        s(this, "thumbUrl", "");
        s(this, "storagePath", null);
        s(this, "resizedPath", null);
        s(this, "thumbPath", null);
        s(this, "sessionId", "");
        s(this, "fit", "cover");
        s(this, "fill", "blur");
        s(this, "rotation", 0);
    }
}
class zi extends st {}
class xe extends $ {
    constructor(e) {
        super(e);
        s(this, "processingService");
        s(this, "_parent", ref(null));
        s(this, "name", this.data.dataComputed.name);
        s(this, "mimeType", this.data.dataComputed.mimeType);
        s(this, "extension", this.data.dataComputed.extension);
        s(this, "storagePath", this.data.dataComputed.storagePath);
        s(this, "resizedPath", this.data.dataComputed.resizedPath);
        s(this, "thumbPath", this.data.dataComputed.thumbPath);
        s(this, "sessionId", this.data.dataComputed.sessionId);
        s(
            this,
            "size",
            computed({
                get: () => this.data.dataComputed.size.value,
                set: (e) => {
                    (this.data.dataComputed.size.value = e), this.updateInParent({ updates: { size: e } });
                },
            })
        );
        s(
            this,
            "processingStatus",
            computed({
                get: () => this.data.dataComputed.processingStatus.value,
                set: (e) => {
                    (this.data.dataComputed.processingStatus.value = e),
                        e === "failed"
                            ? this.updateInParent({ updates: { processingStatus: e, isTrashed: !0 } })
                            : e === "done" && !this.thumbUrl.value
                            ? this.updateInParent({ updates: { processingStatus: e, thumbUrl: as } })
                            : this.updateInParent({ updates: { processingStatus: e } });
                },
            })
        );
        s(
            this,
            "localUrl",
            computed({
                get: () => this.data.dataComputed.localUrl.value,
                set: (e) => {
                    (this.data.dataComputed.localUrl.value = e), this.updateInParent({ updates: { localUrl: e } });
                },
            })
        );
        s(
            this,
            "originalUrl",
            computed({
                get: () => this.data.dataComputed.originalUrl.value,
                set: (e) => {
                    (this.data.dataComputed.originalUrl.value = e), this.updateInParent({ updates: { originalUrl: e } });
                },
            })
        );
        s(
            this,
            "thumbUrl",
            computed({
                get: () => this.data.dataComputed.thumbUrl.value,
                set: (e) => {
                    (this.data.dataComputed.thumbUrl.value = e), this.updateInParent({ updates: { thumbUrl: e } });
                },
            })
        );
        s(
            this,
            "resizedUrl",
            computed({
                get: () => this.data.dataComputed.resizedUrl.value,
                set: (e) => {
                    (this.data.dataComputed.resizedUrl.value = e), this.updateInParent({ updates: { resizedUrl: e } });
                },
            })
        );
        s(
            this,
            "fit",
            computed({
                get: () => this.data.dataComputed.fit.value,
                set: (e) => {
                    (this.data.dataComputed.fit.value = e), this.updateInParent({ updates: { fit: e } });
                },
            })
        );
        s(
            this,
            "fill",
            computed({
                get: () => this.data.dataComputed.fill.value,
                set: (e) => {
                    (this.data.dataComputed.fill.value = e), this.updateInParent({ updates: { fill: e } });
                },
            })
        );
        s(
            this,
            "rotation",
            computed({
                get: () => this.data.dataComputed.rotation.value,
                set: (e) => {
                    (this.data.dataComputed.rotation.value = e), this.updateInParent({ updates: { rotation: e } });
                },
            })
        );
        s(this, "file");
        s(
            this,
            "parent",
            computed(() => this._parent.value)
        );
        s(
            this,
            "isUploadingEnabled",
            computed(() => u.user.hasProAccess.value || (u.user.isLoggedIn.value && this.data.configuration.allowPersistence.forFreeUser))
        );
        s(this, "resumeProcessing", () => {
            this.processingStatus.value === "done"
                ? this.originalUrl.value
                    ? this.updateInParent({ updates: { originalUrl: this.originalUrl.value, thumbUrl: this.thumbUrl.value || as, resizedUrl: this.resizedUrl.value, processingStatus: this.processingStatus.value } })
                    : this.updateInParent({ updates: { isTrashed: !0 } })
                : this.processingStatus.value === "failed"
                ? this.updateInParent({ updates: { isTrashed: !0 } })
                : this.processingService.send("RESUME");
        });
        (this._parent.value = e.parent),
            (this.storagePath.value = e.isProfileImage ? `/user-state/${u.user.userId.value}/images/profile/${this.id}` : `/user-state/${u.user.userId.value}/images/${this.id}`),
            (this.resizedPath.value = `${this.storagePath.value}_1920x1080`),
            (this.thumbPath.value = `${this.storagePath.value}_480x270`),
            (this.sessionId.value = u.sessionId),
            (this.processingService = this.getProcessingService());
    }
    static getConfiguration(e) {
        const a = xe.getPerUserConfiguration(c(l({}, e), { type: xe.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: e.isProfileImage ? `user-data/{{userId}}/image-data-free/${e.id}` : `user-data/{{userId}}/image-data/${e.id}` },
                { type: "https", function: "migrateImageGetV2", functionArgs: { imageId: e.id } },
            ],
            allowPersistence: { forAnonymousUser: !1, forFreeUser: e.isProfileImage, forProUser: !0 },
        });
    }
    static get type() {
        return Nt;
    }
    get type() {
        return xe.type;
    }
    static setup(e) {
        let a;
        switch (e.parentType) {
            case Le.type:
                a = { type: Le.type, id: Le.id };
                break;
            case ke.type:
                a = { type: ke.type, id: ke.id };
                break;
            case ze.type:
                a = { type: ze.type, id: ze.id };
                break;
            default:
                throw new Q(e.parentType, "Unreachable code detected");
        }
        const i = new xe({
            parent: a,
            data: new zi({ configuration: xe.getConfiguration(c(l({}, e), { isProfileImage: e.parentType === "USER_PREFERENCES" })), dataSpecAndDefaults: new $i() }),
            isProfileImage: e.parentType === "USER_PREFERENCES",
        });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: i }), i;
    }
    static getCachedOrEmpty(e) {
        const a = () => xe.setup(e);
        return $.___getCachedOrEmpty({ type: Nt, id: e.id, setup: a }).bo;
    }
    static getCachedOrError(e) {
        return $.___getCached({ type: Nt, id: e.id });
    }
    static getNew(e) {
        const { parentType: a } = e,
            i = (d) => xe.setup({ parentType: a, id: d.id });
        return xe.___getNew({ type: Nt, setup: i });
    }
    onBeforeLogout() {
        return o(this, null, function* () {
            try {
                yield this.save();
            } finally {
                this.reset(), this.destroy();
            }
        });
    }
    onLogout() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onBeforeLogin() {
        return o(this, null, function* () {
            this.reset(), this.destroy();
        });
    }
    onLogin() {
        return o(this, null, function* () {});
    }
    onUpgradePro() {
        return o(this, null, function* () {
            yield this.save(), this.resumeProcessing();
        });
    }
    delete() {
        return o(this, null, function* () {
            this.originalUrl.value && (yield u.network.db.storage.remove({ path: this.storagePath.value })),
                this.resizedUrl.value && (yield u.network.db.storage.remove({ path: this.resizedPath.value })),
                this.thumbUrl.value && (yield u.network.db.storage.remove({ path: this.thumbPath.value })),
                yield this.remove();
        });
    }
    makeProcessingMachine(e) {
        return ds({
            id: e.id,
            context: e.initialContext,
            initial: "idle",
            states: {
                idle: { on: { NEW: "initializing", RESUME: "resizing" } },
                initializing: {
                    invoke: {
                        src: () =>
                            o(this, null, function* () {
                                return yield this.processLocal();
                            }),
                        onDone: [
                            { cond: (a, i) => !this.isUploadingEnabled.value, target: "local" },
                            { cond: (a, i) => this.isUploadingEnabled.value, target: "uploading" },
                        ],
                        onError: { target: "failed" },
                    },
                },
                local: { on: { RESUME: "uploading" } },
                uploading: {
                    invoke: {
                        src: () =>
                            o(this, null, function* () {
                                return yield this.processUpload();
                            }),
                        onDone: "resizing",
                        onError: "failed",
                    },
                    on: { RESUME: "failed" },
                },
                resizing: {
                    invoke: {
                        src: () =>
                            o(this, null, function* () {
                                return yield this.processResize();
                            }),
                        onDone: { target: "done" },
                        onError: [
                            { cond: (a, i) => a.tries < es, actions: [te({ tries: (a, i) => a.tries + 1 }), Xe({ type: "RESUME" }, { delay: Vi })] },
                            { cond: (a, i) => a.tries >= es, target: "done" },
                        ],
                    },
                    on: { RESUME: "resizing" },
                },
                done: { type: "final" },
                failed: { type: "final" },
            },
        });
    }
    getProcessingService() {
        const e = this.makeProcessingMachine({ id: `PROCESS_IMAGE-${this.id}`, initialContext: { tries: 0 } }),
            { service: a } = Ws(e, { devTools: !0 });
        return (
            a.onTransition((i) => {
                this.processingStatus.value !== i.value && (this.processingStatus.value = i.value);
            }),
            a.start(),
            a
        );
    }
    processLocal() {
        return o(this, null, function* () {
            if (!this.file) throw new y({ message: "Local file does not exist" });
            (this.name.value = this.file.name),
                (this.mimeType.value = this.file.type),
                (this.extension.value = this.file.name.split(".").pop() || "unknown"),
                (this.localUrl.value = URL.createObjectURL(this.file)),
                (this.size.value = this.file.size);
        });
    }
    processUpload() {
        return o(this, null, function* () {
            if (this.isUploadingEnabled.value && this.file)
                if ((yield u.network.db.storage.write({ path: this.storagePath.value, data: this.file, metadata: { contentType: this.mimeType.value } }), ts)) (this.originalUrl.value = `${St}${this.storagePath.value}`), yield this.save();
                else {
                    const e = yield u.network.db.storage.getDownloadUrl({ path: this.storagePath.value });
                    if (!e.url) throw new y({ message: "No Pro access" });
                    (this.originalUrl.value = e.url), yield this.save();
                }
        });
    }
    processResize() {
        return o(this, null, function* () {
            if (!this.thumbPath.value || !this.resizedPath.value) throw new y({ message: "paths not ready" });
            if (ts) {
                if (!(yield fetch(`${St}${this.thumbPath.value}`)).ok) throw new y({ message: "Not found", code: 404 });
                if (((this.thumbUrl.value = `${St}${this.thumbPath.value}`), !(yield fetch(`${St}${this.resizedPath.value}`)).ok)) throw new y({ message: "Not found", code: 404 });
                this.resizedUrl.value = `${St}${this.resizedPath.value}`;
            } else {
                const e = yield u.network.db.storage.getDownloadUrl({ path: this.thumbPath.value });
                if (!e.url) throw new y({ message: "thumb not yet ready" });
                this.thumbUrl.value = e.url;
                const a = yield u.network.db.storage.getDownloadUrl({ path: this.resizedPath.value });
                if (!a.url) throw new y({ message: "resized not yet ready" });
                this.resizedUrl.value = a.url;
            }
        });
    }
    startProcessing(e) {
        (this.file = e.file), this.processingService.send("NEW");
    }
    updateInParent(e) {
        if (this.parent.value) {
            let a;
            switch (this.parent.value.type) {
                case "ROOT_FOR_SCREEN_BACKGROUNDS":
                    a = u.getRootForScreenBackgrounds();
                    break;
                case "USER_PREFERENCES":
                    a = u.getUserPreferences();
                    break;
                case "ROOT_FOR_WIDGET_IMAGES":
                    a = u.getRootForWidgetImages();
                    break;
                default:
                    return;
            }
            a.images.update(l({ id: this.id }, e));
        } else throw new y({ message: `Could not find parent for image: ${this.id}` });
    }
}
const xt = "ROOT_FOR_SCREEN_BACKGROUNDS",
    nt = "--root-for-screen-backgrounds--";
class Bi extends at {
    constructor() {
        super(...arguments);
        s(this, "images", []);
    }
}
class Ua extends st {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.images.value];
            yield G(Ua.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.images.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.images.value = [...this.dataRefs.images.value, ...a]);
        });
    }
}
const g = class extends $ {
    constructor(e) {
        super(e);
        s(this, "images");
        s(
            this,
            "thumbUrl",
            computed(() => (e) => (this.images.exists({ id: e.imageId }) ? this.images.all.value.find((a) => a.id === e.imageId).thumbUrl : null))
        );
        this.images = new Da({ host: { type: xt, id: nt }, images: this.data.dataComputed.images, allowedMimeTypes: g.MIME_TYPES, maxUploads: g.MAX_UPLOADS });
    }
    static getPublicImageJpg(e, a, i) {
        const n = ".jpg",
            d = "btn.jpg",
            h = g.getPublicImageUrls(e, a, n, d);
        return c(l({}, h), { type: "crs-image", id: `${e}-${a}`, caption: i != null ? i : null });
    }
    static getPublicImageJpeg(e, a, i) {
        const n = ".jpeg",
            d = "btn.jpeg",
            h = g.getPublicImageUrls(e, a, n, d);
        return c(l({}, h), { type: "crs-image", id: `${e}-${a}`, caption: i != null ? i : null });
    }
    static getPublicAnimation(e, a) {
        const i = ".gif",
            n = "btn.jpg",
            d = g.getPublicImageUrls(e, a, i, n);
        return c(l({}, d), { type: "crs-animation", id: `${e}-${a}` });
    }
    static getPublicPattern(e, a) {
        const i = ".png",
            n = "btn.png",
            d = g.getPublicImageUrls(e, a, i, n);
        return c(l({}, d), { type: "crs-pattern", id: `${e}-${a}` });
    }
    static getPublicImageUrls(e, a, i, n) {
        const d = "https://static.classroomscreen.com/backgrounds";
        switch (e) {
            case "animation":
                return { url: `${d}/gif/gif${a}${i}`, thumbUrl: `${d}/gif/gif${a}${n}` };
            case "regular":
                return { url: `${d}/regular/${a}${i}`, thumbUrl: `${d}/regular/${a}${n}` };
            case "poll":
                return { url: `${d}/poll/${a}${i}`, thumbUrl: `${d}/poll/${a}${n}` };
            case "pattern":
                return { url: `${d}/draw/draw_back${a}${i}`, thumbUrl: `${d}/draw/draw_back${a}${n}` };
            default:
                return { url: `${d}/theme/${e}/${a}${i}`, thumbUrl: `${d}/theme/${e}/${a}${n}` };
        }
    }
    static get allCrsBackgrounds() {
        return g.crsBackgrounds;
    }
    static get allCrsPatterns() {
        return g.crsBackgrounds.filter((e) => e.type === "crs-pattern");
    }
    static get enabledCrsPatterns() {
        return this.allCrsPatterns.filter((e) => ["pattern-8", "pattern-9", "pattern-10", "pattern-11", "pattern-12", "pattern-13", "pattern-14"].includes(e.id));
    }
    static get categories() {
        return [
            { title: "Spring", ids: ["spring-1", "spring-2", "spring-3", "spring-4", "spring-5"], isEnabled: g.activeSeason === "spring" },
            { title: "Summer", ids: ["regular-3", "summer-6", "summer-8", "summer-4", "summer-5", "summer-7", "summer-3", "summer-2"], isEnabled: g.activeSeason === "summer" },
            { title: "Summer & Back to School", ids: ["regular-3", "summer-6", "summer-8", "summer-4", "summer-5", "summer-7", "summer-1", "summer-9"], isEnabled: g.activeSeason === "back-to-school" },
            { title: "Autumn", ids: ["autumn-1", "autumn-2", "autumn-3", "autumn-4", "autumn-5", "autumn-6", "autumn-7"], isEnabled: g.activeSeason === "autumn" },
            { title: "Halloween / Autumn", ids: ["halloween-1", "halloween-2", "autumn-1", "autumn-2", "autumn-3", "autumn-4", "autumn-5", "autumn-6"], isEnabled: g.activeSeason === "halloween" },
            { title: "Winter", ids: ["winter-1", "winter-2", "winter-3", "winter-4", "winter-5", "regular-13", "regular-7"], isEnabled: g.activeSeason === "winter" },
            { title: "Easter", ids: ["easter-1"], isEnabled: g.activeSeason === "easter" },
            { title: "Christmas", ids: ["christmas-1", "christmas-2", "christmas-3"], isEnabled: g.activeSeason === "christmas" },
            {
                title: "The Best of Nature",
                ids: [
                    "regular-1",
                    "regular-36",
                    "regular-37",
                    "regular-4",
                    "regular-38",
                    "regular-39",
                    "regular-40",
                    "regular-41",
                    "regular-42",
                    "regular-43",
                    "regular-11",
                    "regular-44",
                    "regular-45",
                    "regular-14",
                    "regular-46",
                    "regular-47",
                ],
                isEnabled: !0,
            },
            {
                title: "Landmarks",
                ids: [
                    "regular-15",
                    "regular-48",
                    "regular-17",
                    "regular-49",
                    "regular-19",
                    "regular-50",
                    "regular-21",
                    "regular-22",
                    "regular-51",
                    "regular-24",
                    "regular-52",
                    "regular-26",
                    "regular-27",
                    "regular-28",
                    "regular-53",
                    "regular-54",
                ],
                isEnabled: !0,
            },
            { title: "Calm & Neutral", ids: ["regular-55", "regular-30", "regular-31", "regular-32", "regular-33", "regular-34", "regular-35", "regular-56"], isEnabled: !0 },
            { title: "Animation", ids: ["animation-8", "animation-9", "animation-10", "animation-11", "animation-12", "animation-13", "animation-14", "animation-15"], isEnabled: !0 },
            {
                title: "Colors & Gradients",
                ids: [
                    "color-white",
                    "color-gray-light",
                    "color-gray-dark",
                    "color-emerald",
                    "color-pink",
                    "color-indigo",
                    "color-blue",
                    "color-yellow",
                    "gradient-1",
                    "gradient-2",
                    "gradient-3",
                    "gradient-4",
                    "gradient-5",
                    "gradient-6",
                    "gradient-7",
                    "gradient-8",
                    "gradient-9",
                    "gradient-10",
                    "gradient-11",
                ],
                isEnabled: !0,
            },
        ];
    }
    static get activeSeason() {
        const e = new Date(),
            a = e.getMonth(),
            i = e.getDate();
        switch (a) {
            case 0:
                return "winter";
            case 1:
                return "winter";
            case 2:
                return "spring";
            case 3:
                return "spring";
            case 4:
                return "spring";
            case 5:
                return "summer";
            case 6:
                return "summer";
            case 7:
                return "back-to-school";
            case 8:
                return "autumn";
            case 9:
                return i < 7 ? "autumn" : "halloween";
            case 10:
                return "autumn";
            case 11:
                return "christmas";
            default:
                return null;
        }
    }
    static get crsBackgroundsPerCategory() {
        return g.categories
            .filter((e) => e.isEnabled)
            .map((e) => {
                const a = e.ids.map((n) => g.crsBackgrounds.find((d) => d.id === n)).filter((n) => !!n);
                return { title: e.title, backgrounds: a };
            });
    }
    static get crsBackgroundInfosPerCategory() {
        return g.crsBackgroundsPerCategory.map((e) => ({ title: e.title, backgroundInfos: e.backgrounds.map((a) => ({ id: a.id, type: a.type })) }));
    }
    static getCrsBackground(e) {
        var a;
        return (a = g.crsBackgrounds.find((i) => i.id === e.id)) != null ? a : null;
    }
    static getRandomCrsBackgroundId() {
        const e = this.categories.flatMap((i) => (i.isEnabled ? i.ids : [])).filter((i) => i.startsWith("regular-")),
            a = Math.floor(Math.random() * e.length);
        return e[a];
    }
    static getConfiguration() {
        const e = g.getPerUserConfiguration({ id: nt, type: g.type });
        return c(l({}, e), {
            endpoints: [
                { type: "firestore", path: `user-data/{{userId}}/image-data/${nt}` },
                { type: "https", function: "migrateRootForScreenBackgroundsGetV2", functionArgs: {} },
            ],
        });
    }
    static get type() {
        return xt;
    }
    get type() {
        return xt;
    }
    static get id() {
        return nt;
    }
    static setup() {
        onMounted(() => {
            watch(e.images.all, (a, i) => {
                if (a.length > 0 && i.length === 0) {
                    const n = De.getCachedOrNull();
                    n && (n.hasUsedBackground.value = !0);
                }
            });
        });
        const e = new g({ data: new Ua({ configuration: g.getConfiguration(), dataSpecAndDefaults: new Bi() }) });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: e }), e;
    }
    static getCachedOrEmpty() {
        return $.___getCachedOrEmpty({ type: xt, id: nt, setup: g.setup }).bo;
    }
    static getCachedOrError() {
        return $.___getCached({ type: xt, id: nt });
    }
    load() {
        return o(this, null, function* () {
            yield G(g.prototype, this, "load").call(this), this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && (this.reset(), this.skipLoad());
        });
    }
    onUpgradePro() {
        return o(this, null, function* () {
            yield this.merge(), yield this.save();
        });
    }
    resumeProcessingImages() {
        return o(this, null, function* () {
            yield Promise.all(
                this.images.untrashed.value.map((e) =>
                    o(this, null, function* () {
                        let a;
                        switch (e.processingStatus) {
                            case "done":
                                break;
                            case "failed":
                                this.images.trash({ id: e.id });
                                break;
                            default:
                                (a = xe.getCachedOrEmpty({ parentType: this.type, id: e.id })), yield a.load(), a.resumeProcessing();
                        }
                    })
                )
            ),
                yield Promise.all(
                    this.images.trashed.value.map((e) =>
                        o(this, null, function* () {
                            return this.images.delete({ id: e.id });
                        })
                    )
                );
        });
    }
    getBackgroundOrNull(e) {
        const a = g.allCrsBackgrounds.find((n) => n.id === e.id);
        if (a) return a;
        const i = this.images.all.value.find((n) => n.id === e.id);
        return i ? { imageId: i.id, type: "user-image", fit: i.fit, fill: i.fill, rotation: i.rotation } : null;
    }
};
let Le = g;
s(Le, "MAX_UPLOADS", 50),
    s(Le, "MIME_TYPES", ["image/jpeg", "image/png", "image/gif"]),
    s(Le, "REGULAR_IMAGE_ID_MAX", 35),
    s(Le, "CAPTION_DURATION_MS", 20 * 1e3),
    s(Le, "crsBackgrounds", [
        l({}, g.getPublicImageJpeg("regular", 1, "Kanchenjunga, the Himalayas")),
        l({}, g.getPublicImageJpeg("regular", 2, "Monument Valley, USA")),
        l({}, g.getPublicImageJpeg("regular", 3, "Krabi, Thailand")),
        l({}, g.getPublicImageJpeg("regular", 4, "Antelope Canyon, USA")),
        l({}, g.getPublicImageJpeg("regular", 5, "The Twelve Apostles, Australia")),
        l({}, g.getPublicImageJpeg("regular", 6, "Erg Chebbi, Merzouga, Morocco")),
        l({}, g.getPublicImageJpeg("regular", 7, "Antarctica")),
        l({}, g.getPublicImageJpeg("regular", 8, "Buddy Rainbow")),
        l({}, g.getPublicImageJpeg("regular", 9, "Little Louis")),
        l({}, g.getPublicImageJpeg("regular", 10, "Bruce Bubbles")),
        l({}, g.getPublicImageJpeg("regular", 11, "Proud Patrick")),
        l({}, g.getPublicImageJpeg("regular", 12, "Sweet Amelie")),
        l({}, g.getPublicImageJpeg("regular", 13, "Henry the 7th")),
        l({}, g.getPublicImageJpeg("regular", 14, "Hairy Hazel")),
        l({}, g.getPublicImageJpeg("regular", 15, "The Colosseum, Rome, Italy")),
        l({}, g.getPublicImageJpeg("regular", 16, "Christ the Redeemer, Rio de Janeiro, Brazil")),
        l({}, g.getPublicImageJpeg("regular", 17, "Chichen Itza, Yucat\xE1n, Mexico")),
        l({}, g.getPublicImageJpeg("regular", 18, "Great Wall of China, China")),
        l({}, g.getPublicImageJpeg("regular", 19, "Machu Picchu, Peru")),
        l({}, g.getPublicImageJpeg("regular", 20, "Petra, Jordan")),
        l({}, g.getPublicImageJpeg("regular", 21, "Taj Mahal, India")),
        l({}, g.getPublicImageJpeg("regular", 22, "Great Pyramid of Giza, Egypt")),
        l({}, g.getPublicImageJpeg("regular", 23, "Golden Gate Bridge, San Francisco, USA")),
        l({}, g.getPublicImageJpeg("regular", 24, "Statue of Liberty, New York, USA")),
        l({}, g.getPublicImageJpeg("regular", 25, "Eiffel Tower, Paris, France")),
        l({}, g.getPublicImageJpeg("regular", 26, "Tower Bridge, London, England")),
        l({}, g.getPublicImageJpeg("regular", 27, "Brandenburg Gate, Berlin, Germany")),
        l({}, g.getPublicImageJpeg("regular", 28, "Sydney Opera House, Sydney, Australia")),
        l({}, g.getPublicImageJpeg("regular", 29)),
        l({}, g.getPublicImageJpeg("regular", 30)),
        l({}, g.getPublicImageJpeg("regular", 31)),
        l({}, g.getPublicImageJpeg("regular", 32)),
        l({}, g.getPublicImageJpeg("regular", 33)),
        l({}, g.getPublicImageJpeg("regular", 34)),
        l({}, g.getPublicImageJpeg("regular", 35)),
        l({}, g.getPublicImageJpeg("regular", 36)),
        l({}, g.getPublicImageJpeg("regular", 37)),
        l({}, g.getPublicImageJpeg("regular", 38)),
        l({}, g.getPublicImageJpeg("regular", 39)),
        l({}, g.getPublicImageJpeg("regular", 40)),
        l({}, g.getPublicImageJpeg("regular", 41)),
        l({}, g.getPublicImageJpeg("regular", 42)),
        l({}, g.getPublicImageJpeg("regular", 43)),
        l({}, g.getPublicImageJpeg("regular", 44)),
        l({}, g.getPublicImageJpeg("regular", 45)),
        l({}, g.getPublicImageJpeg("regular", 46)),
        l({}, g.getPublicImageJpeg("regular", 47)),
        l({}, g.getPublicImageJpeg("regular", 48)),
        l({}, g.getPublicImageJpeg("regular", 49)),
        l({}, g.getPublicImageJpeg("regular", 50)),
        l({}, g.getPublicImageJpeg("regular", 51)),
        l({}, g.getPublicImageJpeg("regular", 52)),
        l({}, g.getPublicImageJpeg("regular", 53)),
        l({}, g.getPublicImageJpeg("regular", 54)),
        l({}, g.getPublicImageJpeg("regular", 55)),
        l({}, g.getPublicImageJpeg("regular", 56)),
        l({}, g.getPublicImageJpg("poll", 1)),
        l({}, g.getPublicImageJpg("poll", 2)),
        l({}, g.getPublicImageJpg("poll", 3)),
        l({}, g.getPublicImageJpg("poll", 4)),
        l({}, g.getPublicImageJpg("poll", 5)),
        l({}, g.getPublicImageJpg("autumn", 1)),
        l({}, g.getPublicImageJpg("autumn", 2)),
        l({}, g.getPublicImageJpg("autumn", 3)),
        l({}, g.getPublicImageJpg("autumn", 4)),
        l({}, g.getPublicImageJpg("autumn", 5)),
        l({}, g.getPublicImageJpg("autumn", 6)),
        l({}, g.getPublicImageJpg("autumn", 7)),
        l({}, g.getPublicImageJpg("halloween", 1)),
        l({}, g.getPublicImageJpg("halloween", 2)),
        l({}, g.getPublicImageJpg("winter", 1)),
        l({}, g.getPublicImageJpg("winter", 2)),
        l({}, g.getPublicImageJpg("winter", 3)),
        l({}, g.getPublicImageJpg("winter", 4)),
        l({}, g.getPublicImageJpg("winter", 5)),
        l({}, g.getPublicAnimation("christmas", 1)),
        l({}, g.getPublicImageJpg("christmas", 2)),
        l({}, g.getPublicImageJpg("christmas", 3)),
        l({}, g.getPublicImageJpg("easter", 1)),
        l({}, g.getPublicImageJpg("spring", 1)),
        l({}, g.getPublicImageJpg("spring", 2)),
        l({}, g.getPublicImageJpg("spring", 3)),
        l({}, g.getPublicImageJpg("spring", 4)),
        l({}, g.getPublicImageJpg("spring", 5)),
        l({}, g.getPublicImageJpg("summer", 1)),
        l({}, g.getPublicImageJpg("summer", 2)),
        l({}, g.getPublicImageJpg("summer", 3)),
        l({}, g.getPublicImageJpg("summer", 4)),
        l({}, g.getPublicImageJpg("summer", 5)),
        l({}, g.getPublicImageJpg("summer", 6)),
        l({}, g.getPublicImageJpg("summer", 7)),
        l({}, g.getPublicImageJpg("summer", 8)),
        l({}, g.getPublicImageJpg("summer", 9)),
        l({}, g.getPublicAnimation("animation", 1)),
        l({}, g.getPublicAnimation("animation", 2)),
        l({}, g.getPublicAnimation("animation", 3)),
        l({}, g.getPublicAnimation("animation", 4)),
        l({}, g.getPublicAnimation("animation", 5)),
        l({}, g.getPublicAnimation("animation", 6)),
        l({}, g.getPublicAnimation("animation", 7)),
        l({}, g.getPublicAnimation("animation", 8)),
        l({}, g.getPublicAnimation("animation", 9)),
        l({}, g.getPublicAnimation("animation", 10)),
        l({}, g.getPublicAnimation("animation", 11)),
        l({}, g.getPublicAnimation("animation", 12)),
        l({}, g.getPublicAnimation("animation", 13)),
        l({}, g.getPublicAnimation("animation", 14)),
        l({}, g.getPublicAnimation("animation", 15)),
        l({}, g.getPublicPattern("pattern", 1)),
        l({}, g.getPublicPattern("pattern", 2)),
        l({}, g.getPublicPattern("pattern", 3)),
        l({}, g.getPublicPattern("pattern", 4)),
        l({}, g.getPublicPattern("pattern", 5)),
        l({}, g.getPublicPattern("pattern", 6)),
        l({}, g.getPublicPattern("pattern", 7)),
        l({}, g.getPublicPattern("pattern", 8)),
        l({}, g.getPublicPattern("pattern", 9)),
        l({}, g.getPublicPattern("pattern", 10)),
        l({}, g.getPublicPattern("pattern", 11)),
        l({}, g.getPublicPattern("pattern", 12)),
        l({}, g.getPublicPattern("pattern", 13)),
        l({}, g.getPublicPattern("pattern", 14)),
        { type: "crs-color", id: "color-white", cssColor: p.white.hex },
        { type: "crs-color", id: "color-gray-light", cssColor: p.gray300.hex },
        { type: "crs-color", id: "color-gray-dark", cssColor: p.gray800.hex },
        { type: "crs-color", id: "color-emerald", cssColor: p.emerald700.hex },
        { type: "crs-color", id: "color-pink", cssColor: p.pink800.hex },
        { type: "crs-color", id: "color-indigo", cssColor: p.indigo500.hex },
        { type: "crs-color", id: "color-blue", cssColor: p.blue300.hex },
        { type: "crs-color", id: "color-yellow", cssColor: p.yellow200.hex },
        { type: "crs-gradient", id: "gradient-1", cssColor: "#0093E9", cssImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" },
        { type: "crs-gradient", id: "gradient-2", cssColor: "#FFDEE9", cssImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)" },
        { type: "crs-gradient", id: "gradient-3", cssColor: p.emerald900.hex, cssImage: `linear-gradient(90deg, ${p.emerald700.hex} 0%, ${p.emerald800.hex} 100%)` },
        { type: "crs-gradient", id: "gradient-4", cssColor: "#FBDA61", cssImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)" },
        { type: "crs-gradient", id: "gradient-5", cssColor: p.gray700.hex, cssImage: `linear-gradient(115deg, ${p.gray950.hex} 0%, ${p.gray700.hex} 100%)` },
        { type: "crs-gradient", id: "gradient-6", cssColor: "#ee9ca7", cssImage: "linear-gradient(270deg, #ee9ca7 0%, #ffdde1 100%)" },
        { type: "crs-gradient", id: "gradient-7", cssColor: "#3c1053", cssImage: "linear-gradient(270deg, #3c1053 0%, #ad5389 100%)" },
        { type: "crs-gradient", id: "gradient-8", cssColor: "#f2994a", cssImage: "linear-gradient(19deg, #f2994a 0%, #f2c94c 100%)" },
        {
            type: "crs-image",
            id: "not-found",
            url: "https://static.classroomscreen.com/backgrounds/not-found/image-not-found-with-text-blue.jpg",
            thumbUrl: "https://static.classroomscreen.com/backgrounds/not-found/image-not-found-with-text-blue.jpg",
        },
    ]);
class ji extends vt {
    constructor(e) {
        super({ host: e.host, infos: e.screens });
        s(this, "create", (e) => {
            var n;
            let a = (n = e.onIndex) != null ? n : this.all.value.length;
            if (e.beforeId) {
                const { index: d } = this.get({ id: e.beforeId });
                a = Math.max(0, d - 1);
            }
            if (e.afterId) {
                const { index: d } = this.get({ id: e.afterId });
                a = d + 1;
            }
            const i = re.getNew({ ownerId: this.host.ownerId, workspaceId: this.host.workspaceId, screenGroupId: this.host.id });
            return this.add({ info: { type: i.type, id: i.id, title: "New screen", backgroundInfo: { type: "crs-image", id: Le.getRandomCrsBackgroundId() }, widgetsPreview: { h: 2914, w: [] } }, onIndex: a }), i;
        });
        s(this, "move", (e) =>
            o(this, null, function* () {
                const a = re.getCachedOrEmpty({ ownerId: this.host.ownerId, workspaceId: this.host.workspaceId, id: e.screenId }),
                    i = u.screenGroup.getCachedOrNull({ id: e.toScreenGroupId });
                if (i) {
                    const { info: n } = this.get({ id: e.screenId });
                    this.host.id === i.id
                        ? this.orderToUntrashedIndex({ id: e.screenId, toIndex: e.toIndex })
                        : (i.screens.add({ info: n }),
                          i.screens.orderToUntrashedIndex({ id: n.id, toIndex: e.toIndex }),
                          this.remove({ id: n.id }),
                          yield a.load(),
                          a.updateParent({ parent: { ownerId: this.host.ownerId, workspaceId: this.host.workspaceId, type: i.type, id: i.id }, triggerSave: !0 }));
                }
            })
        );
        s(this, "save", () =>
            o(this, null, function* () {
                yield Promise.all(
                    this.infos.value
                        .map((e) => re.getCachedOrNull(e))
                        .filter((e) => e && e.isLoaded.value)
                        .map((e) => e.save())
                );
            })
        );
        s(this, "update", (e) => super.update(e));
    }
    clone(e) {
        return o(this, null, function* () {
            const { info: a } = e.from.parentBO.screens.get({ id: e.from.screenId }),
                i = u.screen.getCachedOrEmpty({ ownerId: e.from.parentBO.ownerId, workspaceId: e.from.parentBO.workspaceId, id: a.id });
            yield i.load();
            const n = yield i.clone({ parent: this.host }),
                d = c(l({}, _e(a)), { id: n.id, title: e.addCopyNote && !a.title.endsWith("(Copy)") ? `${a.title} (Copy)` : a.title });
            if (e.afterId) {
                const { index: h } = this.get({ id: e.afterId });
                this.add({ info: d, onIndex: h + 1 });
            } else this.add({ info: d });
            return n;
        });
    }
}
class Hi extends vt {
    constructor(e) {
        super({ host: e.host, infos: e.screenGroups });
        s(this, "create", (e) => {
            var h;
            let a = (h = e.onIndex) != null ? h : this.all.value.length;
            if (e.beforeId) {
                const { index: m } = this.get({ id: e.beforeId });
                a = Math.max(0, m - 1);
            }
            if (e.afterId) {
                const { index: m } = this.get({ id: e.afterId });
                a = m + 1;
            }
            const i = z.getNew({ ownerId: this.host.ownerId, workspaceId: this.host.workspaceId }),
                { type: n, id: d } = i;
            return this.add(c(l({}, e), { info: { type: n, id: d, colorId: z.DEFAULT_COLOR_ID, title: z.DEFAULT_SCREEN_GROUP_TITLE }, onIndex: a })), i;
        });
        s(this, "update", (e) => super.update(e));
    }
    clone(e) {
        return o(this, null, function* () {
            const { info: a } = e.from.parentBO.screenGroups.get({ id: e.from.screenGroupId }),
                i = u.screenGroup.getCachedOrEmpty({ ownerId: e.from.parentBO.ownerId, workspaceId: e.from.parentBO.workspaceId, id: a.id });
            yield i.load();
            const n = yield i.clone({ parent: this.host }),
                d = c(l({}, _e(a)), { id: n.id, title: e.addCopyNote && !a.title.endsWith("(Copy)") ? `${a.title} (Copy)` : a.title });
            if (e.afterId) {
                const { index: h } = this.get({ id: e.afterId });
                this.add({ info: d, onIndex: h + 1 });
            } else this.add({ info: d, onIndex: 0 });
            return n;
        });
    }
}
const Mt = "STUDENT_LIST_V1";
class Yi extends ms {
    constructor() {
        super(...arguments);
        s(this, "title", "New students list");
        s(this, "students", []);
        s(this, "exclusions", []);
        s(this, "idsChosen", []);
        s(this, "idsNotPresent", []);
        s(this, "isRememberingEnabled", !0);
    }
}
class Ji extends fs {}
class Z extends pt {
    constructor(e) {
        super(l({}, e));
        s(this, "_ownerId");
        s(
            this,
            "parentBO",
            computed(() => (u.user.userId.value === this.ownerId ? u.getRootForStudentLists() : null))
        );
        s(
            this,
            "title",
            computed({
                get: () => this.data.dataComputed.title.value,
                set: (e) => {
                    (this.data.dataComputed.title.value = e), this.updateInfo({ updates: { title: e } });
                },
            })
        );
        s(
            this,
            "students",
            computed({
                get: () => this.data.dataComputed.students.value.sort((e, a) => (e.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1)),
                set: (e) => {
                    const a = e.slice(0, Z.MAX_STUDENTS);
                    (this.data.dataComputed.students.value = [...a]), this.updateInfo({ updates: { students: [...a] } });
                },
            })
        );
        s(this, "exclusions", this.data.dataComputed.exclusions);
        s(this, "idsChosen", this.data.dataComputed.idsChosen);
        s(this, "idsNotPresent", this.data.dataComputed.idsNotPresent);
        s(this, "isRememberingEnabled", this.data.dataComputed.isRememberingEnabled);
        s(
            this,
            "studentName",
            computed(() => (e) => {
                var a, i;
                return (i = (a = this.students.value.find((n) => n.id === e)) == null ? void 0 : a.name) != null ? i : "";
            })
        );
        s(this, "addStudents", (e) => {
            Ke.studentsFromNames({ namesString: e.names }).forEach((i) => this.addStudent({ student: i }));
        });
        this._ownerId = e.ownerId;
    }
    static get MAX_STUDENTS() {
        return 100;
    }
    static getConfiguration(e) {
        const a = Z.getBaseConfiguration(c(l({}, e), { type: Z.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/student-list-data/${e.id}` },
                { type: "https", function: "migrateStudentListGetV2", functionArgs: { studentListId: e.id } },
            ],
            allowPersistence: { forAnonymousUser: !1, forFreeUser: !0, forProUser: !0 },
        });
    }
    get ownerId() {
        return this._ownerId;
    }
    static get type() {
        return Mt;
    }
    get type() {
        return Z.type;
    }
    static setup(e) {
        const a = new Ji({ configuration: Z.getConfiguration(e), dataSpecAndDefaults: new Yi() }),
            i = new Z(c(l({}, e), { data: a }));
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: i }), i;
    }
    static getCachedOrError(e) {
        return Z.___getCached({ type: Mt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return Z.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => Z.setup(e),
            i = { type: Ve.type, id: Ve.id, ownerId: e.ownerId };
        return Z.__getCachedOrEmpty({ type: Mt, id: e.id, setup: a, parent: i }).bo;
    }
    static getNew() {
        const e = u.user.userId.value,
            a = (n) => Z.setup({ ownerId: e, id: n.id }),
            i = { type: Ve.type, id: Ve.id, ownerId: e };
        return Z.__getNew({ type: Mt, setup: a, parent: i });
    }
    onBeforeLogout() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onLogout() {
        return o(this, null, function* () {
            this.reset(), this.skipLoad();
        });
    }
    onBeforeLogin() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onLogin() {
        return o(this, null, function* () {
            this.reset();
        });
    }
    onUpgradePro() {
        return o(this, null, function* () {
            yield this.merge(), yield this.save();
        });
    }
    onClaimsUpdated() {
        return o(this, null, function* () {});
    }
    clone() {
        const e = Z.getNew();
        return e.data.overwriteRefs({ refs: this.data.dataRefs }), e;
    }
    checkParent() {}
    updateInfo(e) {
        var a, i;
        (i = (a = this.parentBO.value) == null ? void 0 : a.studentLists) == null || i.update({ id: this.id, updates: e.updates });
    }
    addStudent(e) {
        this.replaceStudent(e);
    }
    replaceStudent(e) {
        this.students.value = [...this.students.value.filter((a) => a.id !== e.student.id), e.student];
    }
    removeStudent(e) {
        this.students.value = [...this.students.value.filter((a) => a.id !== e.studentId)];
    }
    addExclusion(e) {
        this.exclusions.value.find((a) => (a.studentId1 === e.studentId1 && a.studentId2 === e.studentId2) || (a.studentId1 === e.studentId2 && a.studentId2 === e.studentId1)) ||
            (this.exclusions.value = [...this.exclusions.value, { studentId1: e.studentId1, studentId2: e.studentId2 }]);
    }
    removeExclusion(e) {
        this.exclusions.value = this.exclusions.value.filter((a) => !((a.studentId1 === e.studentId1 && a.studentId2 === e.studentId2) || (a.studentId1 === e.studentId2 && a.studentId2 === e.studentId1)));
    }
}
const ha = class extends vt {
    constructor(e) {
        super({ host: e.host, infos: e.studentLists });
        s(this, "create", (e) => {
            var n;
            let a = (n = e.onIndex) != null ? n : this.all.value.length;
            if (e.beforeId) {
                const { index: d } = this.get({ id: e.beforeId });
                a = Math.max(0, d - 1);
            }
            if (e.afterId) {
                const { index: d } = this.get({ id: e.afterId });
                a = d + 1;
            }
            const i = Z.getNew();
            return this.add(c(l({}, e), { info: { type: i.type, id: i.id, title: i.title.value, students: i.students.value }, onIndex: a })), (i.title.value = e.title), (i.students.value = e.students), i;
        });
        s(this, "update", (e) => super.update(e));
        s(
            this,
            "untrashed",
            computed(() => (u.user.hasProAccess.value ? this.infos.value.filter((e) => !e.isTrashed) : this.infos.value.filter((e) => !e.isTrashed).slice(0, Ve.MAX_STUDENT_LISTS_FREE)))
        );
    }
    static studentsFromNames(e) {
        return e.namesString
            .split(
                `
`
            )
            .map((a) => a.trim())
            .filter((a) => a.length > 0)
            .reduce(ha.reduceRenameDuplicates, [])
            .map((a) => ({ id: u.utils.uuidv4(), name: a, notWithIds: [] }));
    }
    clone(e) {
        return o(this, null, function* () {
            const { info: a } = u.getRootForStudentLists().studentLists.get({ id: e.from.studentListId }),
                i = Z.getCachedOrEmpty({ id: a.id, ownerId: u.user.userId.value });
            yield i.load();
            const n = i.clone(),
                d = c(l({}, _e(a)), { id: n.id, title: e.addCopyNote && !a.title.endsWith("(Copy)") ? `${a.title} (Copy)` : a.title }),
                { index: h } = this.get({ id: e.afterId });
            return this.add({ info: d, onIndex: h + 1 }), n;
        });
    }
};
let Ke = ha;
s(Ke, "MAX_NAME_LENGTH", 40),
    s(Ke, "reduceRenameDuplicates", (e, a) => {
        let i = 1,
            n = a.slice(0, ha.MAX_NAME_LENGTH);
        for (; e.includes(n) && !(i > 10); ) (n = a + `(${i})`), i++;
        return [...e, n];
    });
class q extends fa {
    constructor() {
        super(...arguments);
        s(this, "isFlippedHorizontally", !1);
        s(this, "isFlippedVertically", !1);
    }
}
class K extends va {
    onUpdate() {
        u.widget.getCachedOrError({ type: this.metadata.type, id: this.metadata.id }).onUpdate();
    }
}
class E extends wt {
    constructor() {
        super(...arguments);
        s(this, "spotlightSize", 1);
        s(
            this,
            "parentBO",
            computed(() => (this.parent.value ? (this.parent.value.type === "SCREEN_GROUP_V1" ? z.getCachedOrNull(this.parent.value) : re.getCachedOrNull(this.parent.value)) : null))
        );
        s(
            this,
            "info",
            computed(() => {
                var a, i;
                const e = {
                    type: this.type,
                    id: this.id,
                    height: this.settings.initialHeight,
                    width: this.settings.initialWidth,
                    x: this.settings.initialX,
                    y: this.settings.initialY,
                    z: {},
                    rotation: 0,
                    themeId: u.getUserPreferences().defaultThemeId.value,
                };
                return (i = (a = this.parentBO.value) == null ? void 0 : a.widgets) != null && i.exists({ id: this.id }) ? this.parentBO.value.widgets.get({ id: this.id }).info : e;
            })
        );
        s(this, "_height", ref(null));
        s(this, "_width", ref(null));
        s(this, "_x", ref(null));
        s(this, "_y", ref(null));
        s(this, "_z", ref(null));
        s(this, "_rotation", ref(null));
        s(this, "_themeId", ref(null));
        s(this, "onReloadParent", () => {
            (this._height.value = null), (this._width.value = null), (this._x.value = null), (this._y.value = null), (this._z.value = null), (this._rotation.value = null), (this._themeId.value = null);
        });
        s(
            this,
            "height",
            computed({
                get: () => {
                    var e, a;
                    return (a = (e = this._height.value) != null ? e : this.info.value.height) != null ? a : 0;
                },
                set: (e) => {
                    (this._height.value = e), this.debouncedUpdateInfo();
                },
            })
        );
        s(
            this,
            "width",
            computed({
                get: () => {
                    var e, a;
                    return (a = (e = this._width.value) != null ? e : this.info.value.width) != null ? a : 0;
                },
                set: (e) => {
                    (this._width.value = e), this.debouncedUpdateInfo();
                },
            })
        );
        s(
            this,
            "x",
            computed({
                get: () => {
                    var e, a;
                    return (a = (e = this._x.value) != null ? e : this.info.value.x) != null ? a : 0;
                },
                set: (e) => {
                    (this._x.value = e), this.debouncedUpdateInfo();
                },
            })
        );
        s(
            this,
            "y",
            computed({
                get: () => {
                    var e, a;
                    return (a = (e = this._y.value) != null ? e : this.info.value.y) != null ? a : 0;
                },
                set: (e) => {
                    (this._y.value = e), this.debouncedUpdateInfo();
                },
            })
        );
        s(
            this,
            "z",
            computed({
                get: () => {
                    var i, n, d, h;
                    const e = ((i = this.parentBO.value) == null ? void 0 : i.type) === "SCREEN_GROUP_V1" ? this.parentBO.value.currentScreenId.value : (n = this.parentBO.value) == null ? void 0 : n.id,
                        a = (d = this._z.value) != null ? d : this.info.value.z;
                    return e ? ((h = a[e]) != null ? h : this.settings.initialZ) : this.settings.initialZ;
                },
                set: (e) => {
                    var a, i;
                    if (((a = this.parentBO.value) == null ? void 0 : a.type) === "SCREEN_GROUP_V1") {
                        const n = this.parentBO.value.currentScreenId.value;
                        if (n) {
                            const d = {};
                            (d[n] = e), (this._z.value = l(l({}, this._z.value), d)), this.debouncedUpdateInfo();
                        }
                    } else if (((i = this.parentBO.value) == null ? void 0 : i.type) === "SCREEN_V1") {
                        const n = {};
                        (n[this.parentBO.value.id] = e), (this._z.value = l({}, n)), this.debouncedUpdateInfo();
                    }
                },
            })
        );
        s(
            this,
            "rotation",
            computed({
                get: () => {
                    var e, a;
                    return (a = (e = this._rotation.value) != null ? e : this.info.value.rotation) != null ? a : 0;
                },
                set: (e) => {
                    (this._rotation.value = e), this.debouncedUpdateInfo();
                },
            })
        );
        s(
            this,
            "themeId",
            computed({
                get: () => {
                    var e, a;
                    return (a = (e = this._themeId.value) != null ? e : this.info.value.themeId) != null ? a : u.getUserPreferences().defaultThemeId.value;
                },
                set: (e) => {
                    (this._themeId.value = e), this.debouncedUpdateInfo();
                },
            })
        );
        s(this, "debouncedUpdateInfo", ft(this.updateInfo, 500, { maxWait: 1e4 }));
        s(
            this,
            "theme",
            computed(() => u.getUserPreferences().findTheme({ id: this.themeId.value }))
        );
        s(this, "_isMounted", ref(!1));
        s(
            this,
            "isMounted",
            computed(() => this._isMounted.value)
        );
        s(this, "onMounted", () => {
            this._isMounted.value = !0;
        });
        s(this, "onUnmounted", () => {
            this._isMounted.value = !1;
        });
        s(this, "isFlippedHorizontally", this.data.dataComputed.isFlippedHorizontally);
        s(this, "isFlippedVertically", this.data.dataComputed.isFlippedVertically);
        s(this, "isDragging", ref(!1));
        s(this, "isResizing", ref(!1));
        s(this, "isSettingsOpen", ref(!1));
        s(this, "showTransition", ref(!1));
        s(
            this,
            "isSpotlighted",
            computed(() => (e) => {
                var a;
                return ((a = e.screen.spotlightedWidget.value) == null ? void 0 : a.id) === this.id;
            })
        );
        s(this, "isDraggingDisabled", ref(!1));
        s(
            this,
            "isActive",
            computed(() => (e) => e.screen.activeWidgetId.value === this.id && !this.isSpotlighted.value({ screen: e.screen }))
        );
        s(
            this,
            "isSelected",
            computed(() => (e) => e.screen.selectedWidgetIds.value.includes(this.id) && !this.isSpotlighted.value({ screen: e.screen }))
        );
        s(
            this,
            "isSelectionOverlayVisible",
            computed(() => (e) => this.settings.hasSelectionOverlay && !this.isActive.value(e) && !this.isSpotlighted.value(e))
        );
        s(this, "isAspectRatioLocked", ref(this.settings.hasLockedAspectRatio));
        s(this, "isDraggableWithButton", ref(this.settings.isDraggableWithButton));
        s(
            this,
            "isTransparent",
            computed(() => this.theme.value.background.a < 0.7)
        );
        s(
            this,
            "aspectRatio",
            computed(() => this.width.value / Math.max(0, this.height.value))
        );
    }
    static get settings() {
        return {
            minHeight: 0,
            initialHeight: 200,
            maxHeight: 9999,
            minWidth: 0,
            initialWidth: 120,
            maxWidth: 9999,
            minAspectRatio: 0,
            maxAspectRatio: 99,
            initialX: 500,
            initialY: 120,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            hasSelectionOverlay: !1,
            isDraggableWithButton: !1,
            isDuplicatable: !0,
            isPinnable: !0,
            isResizable: !0,
            isRotatable: !1,
            isFlippable: !1,
            isSpotlightable: !0,
            openSettingsOnCreate: !1,
            contentScaleBasedOn: "height",
            rotationStep: 5,
        };
    }
    get settings() {
        return E.settings;
    }
    static _getCachedOrEmpty(e) {
        let a;
        return (
            e.screenId ? (a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: re.type, id: e.screenId }) : e.screenGroupId && (a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: z.type, id: e.screenGroupId }),
            E.__getCachedOrEmpty({ type: e.type, id: e.id, setup: e.setup, parent: a })
        );
    }
    static _getNew(e) {
        let a;
        if ((e.screenId ? (a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: re.type, id: e.screenId }) : e.screenGroupId && (a = { ownerId: e.ownerId, workspaceId: e.workspaceId, type: z.type, id: e.screenGroupId }), !a))
            throw new y({ message: "Cannot create widget without parent" });
        return E.__getNew({ type: e.type, setup: e.setup, parent: a });
    }
    checkParent() {
        const e = this.parent.value,
            a = this.fallbackParent.value,
            i = e && (e.type === "SCREEN_GROUP_V1" ? z.getCachedOrNull({ id: e.id }) : re.getCachedOrNull({ id: e.id })),
            n = a && (a.type === "SCREEN_GROUP_V1" ? z.getCachedOrNull({ id: a.id }) : re.getCachedOrNull({ id: a.id }));
        if (!(i && i.widgets.exists({ id: this.id, excludeTrashed: !0 })))
            if (n && n.widgets.exists({ id: this.id, excludeTrashed: !0 })) this.updateParent({ parent: a, triggerSave: !1 });
            else {
                if (i && i.widgets.exists({ id: this.id, excludeTrashed: !1 })) return;
                if (n && n.widgets.exists({ id: this.id, excludeTrashed: !1 })) this.updateParent({ parent: a, triggerSave: !1 });
                else {
                    (this.fallbackParent.value = null), this.updateParent({ parent: null, triggerSave: !1 });
                    return;
                }
            }
    }
    updateZ() {
        var e, a;
        if (((e = this.parentBO.value) == null ? void 0 : e.type) === "SCREEN_GROUP_V1") {
            const i = this.parentBO.value.currentScreenId.value;
            if (i) {
                const n = this.parentBO.value.maxWidgetZIndexOnScreen({ screenId: i });
                this.z.value = n + 5;
            }
        } else if (((a = this.parentBO.value) == null ? void 0 : a.type) === "SCREEN_V1") {
            const i = this.parentBO.value.maxWidgetZIndexOnScreen();
            this.z.value = i + 5;
        }
    }
    updateInfo() {
        var a, i;
        const e = {};
        this._height.value !== null && (e.height = this._height.value),
            this._width.value !== null && (e.width = this._width.value),
            this._x.value !== null && (e.x = this._x.value),
            this._y.value !== null && (e.y = this._y.value),
            this._z.value !== null && (e.z = this._z.value),
            this._rotation.value !== null && (e.rotation = this._rotation.value),
            this.themeId.value !== null && (e.themeId = this.themeId.value),
            (i = (a = this.parentBO.value) == null ? void 0 : a.widgets) == null || i.update({ id: this.id, updates: e });
    }
    rotateLeft() {
        this.rotation.value -= this.settings.rotationStep;
    }
    rotateRight() {
        this.rotation.value += this.settings.rotationStep;
    }
    activate(e) {
        this.isActive.value(e) || (this.updateZ(), (e.screen.activeWidgetId.value = this.id), (e.screen.selectedWidgetIds.value = []));
    }
    deactivate(e) {
        this.isActive.value(e) && (e.screen.activeWidgetId.value = null);
    }
    spotlight(e) {
        return o(this, null, function* () {
            var i;
            (this.showTransition.value = !0), (this.isSettingsOpen.value = !1), (e.screen.spotlightedWidget.value = { id: this.id, type: this.type });
            const a = (i = e.screen.parent.value) == null ? void 0 : i.id;
            if (a) {
                const n = u.screenGroup.getCachedOrError({ id: a });
                (n.isSpotlightModeActive.value = !0), this.type === "WIDGET_POLL_V1" && (n.isPollSpotlighted.value = !0);
            }
            yield u.utils.sleep(250), (this.showTransition.value = !1);
        });
    }
    exitSpotlight(e) {
        return o(this, null, function* () {
            var i;
            (this.showTransition.value = !0), (e.screen.spotlightedWidget.value = null);
            const a = (i = e.screen.parent.value) == null ? void 0 : i.id;
            if (a) {
                const n = u.screenGroup.getCachedOrError({ id: a });
                (n.isSpotlightModeActive.value = !1), (n.isPollSpotlighted.value = !1);
            }
            yield u.utils.sleep(250), (this.showTransition.value = !1);
        });
    }
    onUpdate() {
        var e;
        (e = this.parentBO.value) == null || e.triggerAutoSave();
    }
    initialize(e) {
        var a, i, n, d;
        (this._height.value = (a = this._height.value) != null ? a : e.height),
            (this._width.value = (i = this._width.value) != null ? i : e.width),
            (this._x.value = (n = this._x.value) != null ? n : e.x),
            (this._y.value = (d = this._y.value) != null ? d : e.y);
    }
    updateFromParent(e) {
        (this._height.value = e.height), (this._width.value = e.width), (this._x.value = e.x), (this._y.value = e.y);
    }
    trash() {
        var e, a;
        (a = (e = this.parentBO.value) == null ? void 0 : e.widgets) == null || a.trash({ id: this.id });
    }
    closeSettings() {
        this.isSettingsOpen.value && (this.isSettingsOpen.value = !1);
    }
    openSettings() {
        this.isSettingsOpen.value || (this.isSettingsOpen.value = !0);
    }
    toggleSettings() {
        this.isSettingsOpen.value ? this.closeSettings() : this.openSettings();
    }
    load() {
        return o(this, null, function* () {
            yield G(E.prototype, this, "load").call(this);
        });
    }
    clone(e) {
        const a = Te.getNew({
            ownerId: e.parent.ownerId,
            workspaceId: e.parent.workspaceId,
            screenGroupId: (e.parent.type === "SCREEN_GROUP_V1" && e.parent.id) || void 0,
            screenId: (e.parent.type === "SCREEN_V1" && e.parent.id) || void 0,
            type: this.type,
        });
        return a.data.overwriteRefs({ refs: this.data.dataRefs }), a;
    }
}
const Vt = "WIDGET_CALENDAR_V1";
class qi extends q {}
class Ki extends K {}
class ce extends E {
    constructor(e) {
        super(e);
        s(this, "selectedYear", ref(new Date().getFullYear()));
        s(this, "selectedMonth", ref(new Date().getMonth()));
    }
    static getConfiguration(e) {
        const a = ce.getPerWorkspaceConfiguration(c(l({}, e), { type: ce.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-calendar-v1/${e.id}` },
                { type: "https", function: "migrateWidgetCalendarGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 210,
            initialHeight: 400,
            minWidth: 140,
            initialWidth: 500,
            minAspectRatio: 0.7,
            maxAspectRatio: 1.5,
            initialX: 1920 - 100 - 500,
            initialY: 100,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return ce.settings;
    }
    static get type() {
        return Vt;
    }
    get type() {
        return ce.type;
    }
    static setup(e) {
        const a = new Ki({ configuration: ce.getConfiguration(e), dataSpecAndDefaults: new qi() });
        return new ce(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return ce.___getCached({ type: Vt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return ce.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => ce.setup(e);
        return ce._getCachedOrEmpty(c(l({}, e), { type: Vt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => ce.setup({ ownerId: a, workspaceId: i, id: m.id });
        return ce._getNew({ type: Vt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
const $t = "WIDGET_CLOCK_V1";
class Xi extends q {
    constructor() {
        super(...arguments);
        s(this, "alarms", []);
        s(this, "showAm", null);
        s(this, "selectedSound", null);
    }
}
class Zi extends K {}
class ue extends E {
    constructor(e) {
        super(e);
        s(
            this,
            "showAm",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.showAm.value) != null ? e : u.getUserPreferences().clockDefaultShowAm.value;
                },
                set: (e) => {
                    (this.data.dataComputed.showAm.value = e), (u.getUserPreferences().clockDefaultShowAm.value = e);
                },
            })
        );
        s(
            this,
            "selectedSound",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.selectedSound.value) != null ? e : u.getUserPreferences().clockDefaultSound.value;
                },
                set: (e) => {
                    (this.data.dataComputed.selectedSound.value = e), (u.getUserPreferences().clockDefaultSound.value = e);
                },
            })
        );
        s(
            this,
            "alarms",
            computed(() => {
                const e = u.getUserPreferences(),
                    a = this.data.dataComputed.alarms.value.map((n) => c(l({}, n), { isGlobal: !1 })),
                    i = e.clockAlarms.value.map((n) => c(l({}, n), { isGlobal: !0 }));
                return [...a, ...i]
                    .sort((n, d) => {
                        const h = n.id > d.id ? 0 : 0.5;
                        return n.hours * 60 + n.minutes - (d.hours * 60 + d.minutes) + h;
                    })
                    .map((n) => c(l({}, n), { formattedTime: this.getFormattedTimeAlarm({ alarm: n }) }));
            })
        );
        s(this, "epochNow", ref(0));
        s(this, "nextAlarm", ref(null));
        s(this, "updateTime", (e) => {
            this.epochNow.value = e.epochNow;
        });
        s(
            this,
            "seconds",
            computed(() => new Date(this.epochNow.value).getSeconds())
        );
        s(
            this,
            "minutes",
            computed(() => new Date(this.epochNow.value).getMinutes())
        );
        s(
            this,
            "hours",
            computed(() => new Date(this.epochNow.value).getHours())
        );
        s(
            this,
            "formattedTime",
            computed(() => new Date(this.epochNow.value).toLocaleTimeString("en-US", { hour12: this.showAm.value, hour: "numeric", minute: "numeric" }))
        );
        s(
            this,
            "formattedTimeNextAlarm",
            computed(() => (this.nextAlarm.value ? this.getFormattedTimeAlarm({ alarm: this.nextAlarm.value }) : ""))
        );
        s(this, "getFormattedTimeAlarm", (e) => {
            const a = new Date(),
                i = (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds(),
                n = a.getTime() + (-i + e.alarm.hours * 3600 + e.alarm.minutes * 60) * 1e3;
            return new Date(n).toLocaleTimeString("en-US", { hour12: this.showAm.value, hour: "numeric", minute: "numeric" });
        });
        s(this, "updateNextAlarm", () => {
            const e = new Date(),
                a = (e.getHours() * 60 + e.getMinutes()) * 60 + e.getSeconds(),
                i = 24 * 60 * 60,
                n = this.alarms.value
                    .filter((d) => d.enabled)
                    .map((d) => {
                        const h = (d.hours * 60 + d.minutes) * 60,
                            m = (i + h - a) % i;
                        return c(l({}, d), { secondsDueIn: m });
                    })
                    .filter((d) => d.secondsDueIn > 0)
                    .sort((d, h) => d.secondsDueIn - h.secondsDueIn);
            this.nextAlarm.value = n.length > 0 ? n[0] : null;
        });
        s(this, "addAlarm", (e) => (this.replaceAlarm(e), e.alarm));
        s(this, "getAlarm", (e) => {
            var a;
            return (a = this.alarms.value.find((i) => i.id === e.alarmId)) != null ? a : null;
        });
        s(this, "removeAlarm", (e) => {
            this.removeAlarmLocal(e), this.removeAlarmGlobal(e);
        });
        s(this, "removeAlarmLocal", (e) => {
            this.data.dataComputed.alarms.value = [...this.data.dataComputed.alarms.value.filter((a) => a.id !== e.alarmId)];
        });
        s(this, "removeAlarmGlobal", (e) => {
            const a = u.getUserPreferences();
            a.clockAlarms.value = [...a.clockAlarms.value.filter((i) => i.id !== e.alarmId)];
        });
        s(this, "replaceAlarm", (e) => {
            if ((this.removeAlarm({ alarmId: e.alarm.id }), e.alarm.isGlobal)) {
                const a = u.getUserPreferences();
                a.clockAlarms.value = [...a.clockAlarms.value, e.alarm];
            } else this.data.dataComputed.alarms.value = [...this.data.dataComputed.alarms.value, e.alarm];
        });
        s(this, "playSound", () => {
            wa(this.selectedSound.value);
        });
    }
    static getConfiguration(e) {
        const a = ue.getPerWorkspaceConfiguration(c(l({}, e), { type: ue.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-clock-v1/${e.id}` },
                { type: "https", function: "migrateWidgetClockGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 60,
            initialHeight: 380,
            minWidth: 150,
            initialWidth: 300,
            minAspectRatio: 300 / 380,
            maxAspectRatio: 150 / 60,
            initialX: 1920 - 300 - 50,
            initialY: 180,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return ue.settings;
    }
    static get type() {
        return $t;
    }
    get type() {
        return ue.type;
    }
    static setup(e) {
        const a = new Zi({ configuration: ue.getConfiguration(e), dataSpecAndDefaults: new Xi() });
        return new ue(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return ue.___getCached({ type: $t, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return ue.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => ue.setup(e);
        return ue._getCachedOrEmpty(c(l({}, e), { type: $t, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => ue.setup({ ownerId: a, workspaceId: i, id: m.id });
        return ue._getNew({ type: $t, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
    get sounds() {
        return [
            { title: "Ding dong", sound: S.DINGDONG },
            { title: "Alarm clock", sound: S.ALARM },
            { title: "Cow bell", sound: S.COWBELL },
            { title: "Buzzer", sound: S.BUZZER },
            { title: "Kitchen timer", sound: S.EGG },
            { title: "Coin taken (gamified)", sound: S.COIN },
            { title: "Mario tune (gamified)", sound: S.MARIO },
            { title: "Harp", sound: S.HARP },
            { title: "Arabic", sound: S.ARABIC },
            { title: "Western", sound: S.COUNTRY },
            { title: "Tropical", sound: S.TROPICAL },
            { title: "Cricket", sound: S.CRICKET },
            { title: "Gong", sound: S.GONG },
        ];
    }
}
const zt = "WIDGET_DICE_V1";
class Qi extends q {
    constructor() {
        super(...arguments);
        s(this, "diceType", le.diceTypes[0]);
        s(this, "diceOptionsIndex", 0);
    }
}
class er extends K {}
class le extends E {
    constructor(e) {
        super(e);
        s(this, "diceType", this.data.dataComputed.diceType);
        s(
            this,
            "diceOptionsCount",
            computed(() => this.diceOptions.value.values.length)
        );
        s(
            this,
            "diceOptionsIndex",
            computed({
                get: () => Math.min(this.diceOptionsCount.value - 1, this.data.dataComputed.diceOptionsIndex.value),
                set: (e) => {
                    this.data.dataComputed.diceOptionsIndex.value = e;
                },
            })
        );
        s(
            this,
            "diceCurrentOption",
            computed(() => {
                const e = _e(this.diceOptions.value);
                return (e.values = [e.values[this.diceOptionsIndex.value]]), e;
            })
        );
        s(
            this,
            "diceOptions",
            computed(() => {
                switch (this.diceType.value) {
                    case "dice-single":
                        return { type: "dice-single", values: ["1", "2", "3", "4", "5", "6"] };
                    case "dice-double":
                        return {
                            type: "dice-double",
                            values: Array.from(Array(6 * 6)).map((e, a) => {
                                const i = a % 6;
                                return { 1: `${(a - i) / 6 + 1}`, 2: `${i + 1}` };
                            }),
                        };
                    case "dice-triple":
                        return {
                            type: "dice-triple",
                            values: Array.from(Array(6 * 6 * 6)).map((e, a) => {
                                const i = a % 6,
                                    n = (((a % 36) - i) / 6) % 6;
                                return { 1: `${Math.floor(a / 36) + 1}`, 2: `${n + 1}`, 3: `${i + 1}` };
                            }),
                        };
                    case "dice-plus-six":
                        return { type: "dice-plus-six", values: ["+1", "+2", "+3", "+4", "+5", "+6"] };
                    case "dice-minus-six":
                        return { type: "dice-minus-six", values: ["-1", "-2", "-3", "-4", "-5", "-6"] };
                    case "dice-operator":
                        return { type: "dice-operator", values: ["+", "-", "x", "\xF7"] };
                    case "dice-colors":
                        return { type: "dice-colors", values: ["blue", "green", "purple", "red", "white", "yellow"] };
                    case "dice-twelve":
                        return { type: "dice-twelve", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] };
                    case "dice-twenty":
                        return { type: "dice-twenty", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"] };
                    default:
                        throw new Q(this.diceType.value, "Unreachable code detected");
                }
            })
        );
        s(this, "roll", () =>
            o(this, null, function* () {
                (this.isRolling.value = !0),
                    u.getUserPreferences().diceIsSoundEnabled.value && (yield wa(S.DICE)),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(50),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(50),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(50),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(50),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(100),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(100),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(100),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(100),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(150),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(150),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(150),
                    this.takeNextRandomOption(),
                    yield u.utils.sleep(150),
                    this.takeNextRandomOption(),
                    (this.isRolling.value = !1);
            })
        );
        s(this, "isRolling", ref(!1));
        s(this, "takeNextRandomOption", () => {
            this.diceOptionsIndex.value = Math.floor(Math.random() * this.diceOptionsCount.value);
        });
    }
    static getConfiguration(e) {
        const a = le.getPerWorkspaceConfiguration(c(l({}, e), { type: le.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-dice-v1/${e.id}` },
                { type: "https", function: "migrateWidgetDiceGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), { minHeight: 150, initialHeight: 300, minWidth: 128, initialWidth: 256, initialX: 100, initialY: 100, initialZ: 10, hasLockedAspectRatio: !0, isDraggableWithButton: !1, isRotatable: !1 });
    }
    static get diceTypes() {
        return ["dice-single", "dice-double", "dice-triple", "dice-plus-six", "dice-minus-six", "dice-operator", "dice-colors", "dice-twelve", "dice-twenty"];
    }
    static get diceOptions() {
        return ["dice-single", "dice-double", "dice-triple", "dice-plus-six", "dice-minus-six", "dice-operator", "dice-colors", "dice-twelve", "dice-twenty"];
    }
    get settings() {
        return le.settings;
    }
    static get type() {
        return zt;
    }
    get type() {
        return le.type;
    }
    static setup(e) {
        const a = new er({ configuration: le.getConfiguration(e), dataSpecAndDefaults: new Qi() });
        return new le(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return le.___getCached({ type: zt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return le.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => le.setup(e);
        return le._getCachedOrEmpty(c(l({}, e), { type: zt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => le.setup({ ownerId: a, workspaceId: i, id: m.id });
        return le._getNew({ type: zt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
const Bt = "WIDGET_DRAW_V0";
class tr extends q {
    constructor() {
        super(...arguments);
        s(this, "backgroundInfo", null);
        s(this, "lines", []);
    }
}
class ar extends K {}
const Ie = class extends E {
    constructor(e) {
        super(e);
        s(this, "lines", this.data.dataComputed.lines);
        s(this, "backgroundInfo", this.data.dataComputed.backgroundInfo);
    }
    static getConfiguration(e) {
        const a = Ie.getPerWorkspaceConfiguration(c(l({}, e), { type: Ie.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-draw-v0/${e.id}` },
                { type: "https", function: "migrateWidgetDrawGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 250,
            initialHeight: 400,
            minWidth: 250,
            initialWidth: 800,
            initialX: (1920 - 800) / 2,
            initialY: 300,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            hasSelectionOverlay: !1,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return Ie.settings;
    }
    static get type() {
        return Bt;
    }
    get type() {
        return Ie.type;
    }
    static setup(e) {
        const a = new ar({ configuration: Ie.getConfiguration(e), dataSpecAndDefaults: new tr() });
        return new Ie(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return Ie.___getCached({ type: Bt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return Ie.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => Ie.setup(e);
        return Ie._getCachedOrEmpty(c(l({}, e), { type: Bt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => Ie.setup({ ownerId: a, workspaceId: i, id: m.id });
        return Ie._getNew({ type: Bt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
};
let ca = Ie;
s(ca, "hasAppliedKonvaplugin", ref(!1));
const jt = "WIDGET_DRAW_V1";
class sr extends q {
    constructor() {
        super(...arguments);
        s(this, "svg", null);
        s(this, "patternId", null);
        s(this, "brushMode", "stylus");
        s(this, "brushArrowColor", null);
        s(this, "brushArrowSize", null);
        s(this, "brushArrowStyle", null);
        s(this, "brushDrawColor", null);
        s(this, "brushDrawSize", null);
        s(this, "brushDrawStyle", null);
        s(this, "brushEllipseColor", null);
        s(this, "brushEllipseSize", null);
        s(this, "brushEllipseStyle", null);
        s(this, "brushLineColor", null);
        s(this, "brushLineSize", null);
        s(this, "brushLineStyle", null);
        s(this, "brushRectangleColor", null);
        s(this, "brushRectangleSize", null);
        s(this, "brushRectangleStyle", null);
        s(this, "brushStylusColor", null);
        s(this, "brushStylusSize", null);
        s(this, "svgHeight", 1080 * 3);
        s(this, "svgWidth", 1920 * 3);
        s(this, "svgOffsetX", -1920);
        s(this, "svgOffsetY", -1080);
    }
}
class ir extends K {}
const Ee = class extends E {
    constructor(e) {
        super(e);
        s(this, "svg", this.data.dataComputed.svg);
        s(this, "patternId", this.data.dataComputed.patternId);
        s(this, "brushMode", this.data.dataComputed.brushMode);
        s(this, "svgOffsetX", this.data.dataComputed.svgOffsetX);
        s(this, "svgOffsetY", this.data.dataComputed.svgOffsetY);
        s(
            this,
            "svgHeight",
            computed(() => this.data.dataComputed.svgHeight.value)
        );
        s(
            this,
            "svgWidth",
            computed(() => this.data.dataComputed.svgWidth.value)
        );
        s(
            this,
            "brushArrowColor",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushArrowColor.value) != null ? e : u.getUserPreferences().drawArrowColor.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawArrowColor.value = e), (this.data.dataComputed.brushArrowColor.value = e);
                },
            })
        );
        s(
            this,
            "brushArrowSize",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushArrowSize.value) != null ? e : u.getUserPreferences().drawArrowSize.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawArrowSize.value = e), (this.data.dataComputed.brushArrowSize.value = e);
                },
            })
        );
        s(
            this,
            "brushArrowStyle",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushArrowStyle.value) != null ? e : u.getUserPreferences().drawArrowStyle.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawArrowStyle.value = e), (this.data.dataComputed.brushArrowStyle.value = e);
                },
            })
        );
        s(
            this,
            "brushDrawColor",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushDrawColor.value) != null ? e : u.getUserPreferences().drawDrawColor.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawDrawColor.value = e), (this.data.dataComputed.brushDrawColor.value = e);
                },
            })
        );
        s(
            this,
            "brushDrawSize",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushDrawSize.value) != null ? e : u.getUserPreferences().drawDrawSize.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawDrawSize.value = e), (this.data.dataComputed.brushDrawSize.value = e);
                },
            })
        );
        s(
            this,
            "brushDrawStyle",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushDrawStyle.value) != null ? e : u.getUserPreferences().drawDrawStyle.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawDrawStyle.value = e), (this.data.dataComputed.brushDrawStyle.value = e);
                },
            })
        );
        s(
            this,
            "brushEllipseColor",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushEllipseColor.value) != null ? e : u.getUserPreferences().drawEllipseColor.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawEllipseColor.value = e), (this.data.dataComputed.brushEllipseColor.value = e);
                },
            })
        );
        s(
            this,
            "brushEllipseSize",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushEllipseSize.value) != null ? e : u.getUserPreferences().drawEllipseSize.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawEllipseSize.value = e), (this.data.dataComputed.brushEllipseSize.value = e);
                },
            })
        );
        s(
            this,
            "brushEllipseStyle",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushEllipseStyle.value) != null ? e : u.getUserPreferences().drawEllipseStyle.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawEllipseStyle.value = e), (this.data.dataComputed.brushEllipseStyle.value = e);
                },
            })
        );
        s(
            this,
            "brushLineColor",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushLineColor.value) != null ? e : u.getUserPreferences().drawLineColor.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawLineColor.value = e), (this.data.dataComputed.brushLineColor.value = e);
                },
            })
        );
        s(
            this,
            "brushLineSize",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushLineSize.value) != null ? e : u.getUserPreferences().drawLineSize.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawLineSize.value = e), (this.data.dataComputed.brushLineSize.value = e);
                },
            })
        );
        s(
            this,
            "brushLineStyle",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushLineStyle.value) != null ? e : u.getUserPreferences().drawLineStyle.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawLineStyle.value = e), (this.data.dataComputed.brushLineStyle.value = e);
                },
            })
        );
        s(
            this,
            "brushRectangleColor",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushRectangleColor.value) != null ? e : u.getUserPreferences().drawRectangleColor.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawRectangleColor.value = e), (this.data.dataComputed.brushRectangleColor.value = e);
                },
            })
        );
        s(
            this,
            "brushRectangleSize",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushRectangleSize.value) != null ? e : u.getUserPreferences().drawRectangleSize.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawRectangleSize.value = e), (this.data.dataComputed.brushRectangleSize.value = e);
                },
            })
        );
        s(
            this,
            "brushRectangleStyle",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushRectangleStyle.value) != null ? e : u.getUserPreferences().drawRectangleStyle.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawRectangleStyle.value = e), (this.data.dataComputed.brushRectangleStyle.value = e);
                },
            })
        );
        s(
            this,
            "brushStylusColor",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushStylusColor.value) != null ? e : u.getUserPreferences().drawStylusColor.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawStylusColor.value = e), (this.data.dataComputed.brushStylusColor.value = e);
                },
            })
        );
        s(
            this,
            "brushStylusSize",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.brushStylusSize.value) != null ? e : u.getUserPreferences().drawStylusSize.value;
                },
                set: (e) => {
                    (u.getUserPreferences().drawStylusSize.value = e), (this.data.dataComputed.brushStylusSize.value = e);
                },
            })
        );
        s(
            this,
            "brushColor",
            computed({
                get: () => {
                    switch (this.brushMode.value) {
                        case "arrow":
                            return this.brushArrowColor.value;
                        case "draw":
                            return this.brushDrawColor.value;
                        case "ellipse":
                            return this.brushEllipseColor.value;
                        case "eraseLine":
                            return "white";
                        case "line":
                            return this.brushLineColor.value;
                        case "move":
                            return "white";
                        case "rectangle":
                            return this.brushRectangleColor.value;
                        case "stylus":
                            return this.brushStylusColor.value;
                        default:
                            throw new Q(this.brushMode.value, "Unreachable code detected");
                    }
                },
                set: (e) => {
                    switch (this.brushMode.value) {
                        case "arrow":
                            this.brushArrowColor.value = e;
                            break;
                        case "draw":
                            this.brushDrawColor.value = e;
                            break;
                        case "ellipse":
                            this.brushEllipseColor.value = e;
                            break;
                        case "eraseLine":
                            break;
                        case "line":
                            this.brushLineColor.value = e;
                            break;
                        case "move":
                            break;
                        case "rectangle":
                            this.brushRectangleColor.value = e;
                            break;
                        case "stylus":
                            this.brushStylusColor.value = e;
                            break;
                        default:
                            throw new Q(this.brushMode.value, "Unreachable code detected");
                    }
                },
            })
        );
        s(
            this,
            "brushSize",
            computed({
                get: () => {
                    switch (this.brushMode.value) {
                        case "arrow":
                            return this.brushArrowSize.value;
                        case "draw":
                            return this.brushDrawSize.value;
                        case "eraseLine":
                            return 5;
                        case "ellipse":
                            return this.brushEllipseSize.value;
                        case "line":
                            return this.brushLineSize.value;
                        case "move":
                            return 5;
                        case "rectangle":
                            return this.brushRectangleSize.value;
                        case "stylus":
                            return this.brushStylusSize.value;
                        default:
                            throw new Q(this.brushMode.value, "Unreachable code detected");
                    }
                },
                set: (e) => {
                    switch (this.brushMode.value) {
                        case "arrow":
                            this.brushArrowSize.value = e;
                            break;
                        case "draw":
                            this.brushDrawSize.value = e;
                            break;
                        case "ellipse":
                            this.brushEllipseSize.value = e;
                            break;
                        case "eraseLine":
                            break;
                        case "line":
                            this.brushLineSize.value = e;
                            break;
                        case "move":
                            break;
                        case "rectangle":
                            this.brushRectangleSize.value = e;
                            break;
                        case "stylus":
                            this.brushStylusSize.value = e;
                            break;
                        default:
                            throw new Q(this.brushMode.value, "Unreachable code detected");
                    }
                },
            })
        );
        s(
            this,
            "brushStyle",
            computed({
                get: () => {
                    switch (this.brushMode.value) {
                        case "arrow":
                            return this.brushArrowStyle.value;
                        case "draw":
                            return this.brushDrawStyle.value;
                        case "ellipse":
                            return this.brushEllipseStyle.value;
                        case "eraseLine":
                            return "solid";
                        case "line":
                            return this.brushLineStyle.value;
                        case "move":
                            return "solid";
                        case "rectangle":
                            return this.brushRectangleStyle.value;
                        case "stylus":
                            return "solid";
                        default:
                            throw new Q(this.brushMode.value, "Unreachable code detected");
                    }
                },
                set: (e) => {
                    switch (this.brushMode.value) {
                        case "arrow":
                            this.brushArrowStyle.value = e;
                            break;
                        case "draw":
                            this.brushDrawStyle.value = e;
                            break;
                        case "ellipse":
                            this.brushEllipseStyle.value = e;
                            break;
                        case "eraseLine":
                            break;
                        case "line":
                            this.brushLineStyle.value = e;
                            break;
                        case "move":
                            break;
                        case "rectangle":
                            this.brushRectangleStyle.value = e;
                            break;
                        case "stylus":
                            break;
                        default:
                            throw new Q(this.brushMode.value, "Unreachable code detected");
                    }
                },
            })
        );
    }
    static getConfiguration(e) {
        const a = Ee.getPerWorkspaceConfiguration(c(l({}, e), { type: Ee.type }));
        return c(l({}, a), { endpoints: [{ type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-draw-v1/${e.id}` }] });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 250,
            initialHeight: 400,
            minWidth: 250,
            initialWidth: 800,
            initialX: (1920 - 800) / 2,
            initialY: 300,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            hasSelectionOverlay: !0,
            isDraggableWithButton: !0,
            isRotatable: !1,
        });
    }
    get settings() {
        return Ee.settings;
    }
    static get type() {
        return jt;
    }
    get type() {
        return Ee.type;
    }
    static setup(e) {
        const a = new ir({ configuration: Ee.getConfiguration(e), dataSpecAndDefaults: new sr() });
        return new Ee(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return Ee.___getCached({ type: jt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return Ee.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => Ee.setup(e);
        return Ee._getCachedOrEmpty(c(l({}, e), { type: jt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => Ee.setup({ ownerId: a, workspaceId: i, id: m.id });
        return Ee._getNew({ type: jt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
};
let ua = Ee;
s(ua, "COLORS", [p.gray950.hex, p.gray700.hex, p.gray400.hex, p.white.hex, p.red600.hex, p.orange600.hex, p.yellow500.hex, p.green600.hex, p.blue700.hex, p.lightBlue500.hex, p.purple700.hex, p.pink500.hex]);
const Ht = "WIDGET_EMBED_V1";
class rr extends q {
    constructor() {
        super(...arguments);
        s(this, "rawCode", "");
        s(this, "embedCode", null);
        s(this, "isScrollingEnabled", null);
    }
}
class nr extends K {}
class ne extends E {
    constructor(e) {
        super(e);
        s(
            this,
            "isSelectionOverlayVisible",
            computed(() => (e) => this.settings.hasSelectionOverlay && !this.isActive.value({ screen: e.screen }) && this.isSourceValid.value)
        );
        s(
            this,
            "isDraggableWithButton",
            computed(() => this.isSourceValid.value)
        );
        s(this, "embedCode", this.data.dataComputed.embedCode);
        s(this, "rawCode", this.data.dataComputed.rawCode);
        s(
            this,
            "isScrollingEnabled",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.isScrollingEnabled.value) != null ? e : this.isWebsite.value;
                },
                set: (e) => {
                    this.data.dataComputed.isScrollingEnabled.value = e;
                },
            })
        );
        s(this, "source", ref(null));
        s(this, "isProcessing", ref(!1));
        s(
            this,
            "isSourceValid",
            computed(() => {
                var e, a;
                return ((a = (e = this.source.value) == null ? void 0 : e.length) != null ? a : 0) > 0;
            })
        );
        s(
            this,
            "isSourceInvalid",
            computed(() => {
                var e;
                return ((e = this.source.value) == null ? void 0 : e.length) === 0;
            })
        );
        s(this, "isWebsite", ref(!1));
        s(this, "feedback", ref("Please enter an embed code or url"));
    }
    static getConfiguration(e) {
        const a = ne.getPerWorkspaceConfiguration(c(l({}, e), { type: ne.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-embed-v1/${e.id}` },
                { type: "https", function: "migrateWidgetEmbedGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 125,
            initialHeight: 315,
            minWidth: 125,
            initialWidth: 600,
            initialX: 100,
            initialY: 240,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            hasSelectionOverlay: !0,
            isDraggableWithButton: !1,
            isRotatable: !1,
            openSettingsOnCreate: !1,
        });
    }
    get settings() {
        return ne.settings;
    }
    static get type() {
        return Ht;
    }
    get type() {
        return ne.type;
    }
    static setup(e) {
        const a = new nr({ configuration: ne.getConfiguration(e), dataSpecAndDefaults: new rr() }),
            i = new ne(c(l({}, e), { data: a })),
            n = ft(() => i.processCode(), 1e3);
        return (
            onMounted(() => {
                watch(
                    i.embedCode,
                    () => {
                        (i.feedback.value = "Processing..."), (i.isProcessing.value = !0), n();
                    },
                    { immediate: !0 }
                );
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return ne.___getCached({ type: Ht, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return ne.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => ne.setup(e);
        return ne._getCachedOrEmpty(c(l({}, e), { type: Ht, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => ne.setup({ ownerId: a, workspaceId: i, id: m.id });
        return ne._getNew({ type: Ht, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
    load() {
        return o(this, null, function* () {
            yield G(ne.prototype, this, "load").call(this), this.processCode();
        });
    }
    processCode() {
        var h, m;
        if (this.embedCode.value === null) {
            (this.source.value = null), (this.feedback.value = "Please enter an iframe"), (this.isProcessing.value = !1);
            return;
        }
        const e = (m = (h = this.embedCode.value) == null ? void 0 : h.replace(/\r?\n|\r/g, "")) != null ? m : "";
        if (new RegExp(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/g).test(e.toLowerCase()))
            try {
                const C = new DOMParser().parseFromString(e, "text/html").getElementsByTagName("iframe");
                (this.source.value = C[0].src), (this.feedback.value = "Code processed"), (this.isProcessing.value = !1), (this.isWebsite.value = !1);
                return;
            } catch (v) {
                (this.source.value = ""), (this.feedback.value = "Could not find a valid source in the embed code"), (this.isProcessing.value = !1), (this.isWebsite.value = !1);
            }
        const { url: i, valid: n, exists: d } = this.testUrl({ url: e });
        n && d
            ? ((this.source.value = i), (this.feedback.value = "Code processed"), (this.isProcessing.value = !1), (this.isWebsite.value = !0))
            : n
            ? ((this.source.value = ""), (this.feedback.value = "Website not found"), (this.isProcessing.value = !1), (this.isWebsite.value = !0))
            : ((this.source.value = ""), (this.feedback.value = "Please enter an iframe"), (this.isProcessing.value = !1), (this.isWebsite.value = !1));
    }
    testUrl(e) {
        const a = e.url.startsWith("http") ? e.url : `https://${e.url}`;
        try {
            new URL(a);
        } catch (i) {
            return { url: "", valid: !1, exists: !1 };
        }
        return { url: a, valid: !0, exists: !0 };
    }
}
const Yt = "WIDGET_GROUP_MAKER_V1";
class or extends q {
    constructor() {
        super(...arguments);
        s(this, "selectedListLocation", null);
        s(this, "localStudents", []);
        s(this, "numberOfGroups", 4);
        s(this, "groups", [
            { id: u.utils.uuidv4(), title: "Group 1", color: "var(--color-theme-accent1)", students: [] },
            { id: u.utils.uuidv4(), title: "Group 2", color: "var(--color-theme-accent1)", students: [] },
            { id: u.utils.uuidv4(), title: "Group 3", color: "var(--color-theme-accent1)", students: [] },
            { id: u.utils.uuidv4(), title: "Group 4", color: "var(--color-theme-accent1)", students: [] },
        ]);
        s(this, "pinnedStudents", []);
        s(this, "fontSize", null);
    }
}
class lr extends K {}
const Ce = class extends E {
    constructor(e) {
        super(e);
        s(this, "selectedListLocation", this.data.dataComputed.selectedListLocation);
        s(this, "localStudents", this.data.dataComputed.localStudents);
        s(this, "numberOfGroups", this.data.dataComputed.numberOfGroups);
        s(this, "pinnedStudents", this.data.dataComputed.pinnedStudents);
        s(this, "groups", this.data.dataComputed.groups);
        s(
            this,
            "fontSize",
            computed({
                get: () => (this.data.dataComputed.fontSize.value ? this.data.dataComputed.fontSize.value : u.getUserPreferences().groupMakerDefaultFontSize.value),
                set: (e) => {
                    (this.data.dataComputed.fontSize.value = e), (u.getUserPreferences().groupMakerDefaultFontSize.value = e);
                },
            })
        );
        s(this, "_globalList", null);
        s(this, "_globalListLoaded", ref(!1));
        s(
            this,
            "globalStudents",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.students.value : []))
        );
        s(
            this,
            "globalIdsNotPresent",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.idsNotPresent.value : []))
        );
        s(
            this,
            "globalExclusions",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.exclusions.value : []))
        );
        s(
            this,
            "students",
            computed(() => (this.selectedListLocation.value ? this.globalStudents.value : this.localStudents.value))
        );
        s(
            this,
            "idsNotPresent",
            computed({
                get: () => (this.selectedListLocation.value ? this.globalIdsNotPresent.value : []),
                set: (e) => {
                    this.selectedListLocation.value && this._globalListLoaded.value && this._globalList && (this._globalList.idsNotPresent.value = e);
                },
            })
        );
        s(
            this,
            "idsPresent",
            computed({
                get: () => this.students.value.map((e) => e.id).filter((e) => !this.idsNotPresent.value.includes(e)),
                set: (e) => {
                    this.idsNotPresent.value = this.students.value.map((a) => a.id).filter((a) => !e.includes(a));
                },
            })
        );
        s(
            this,
            "studentsPresent",
            computed(() => (this.selectedListLocation.value ? this.students.value.filter((e) => !this.globalIdsNotPresent.value.includes(e.id)) : this.students.value))
        );
        s(this, "exlusions", this.globalExclusions);
        s(this, "isCreatingGroups", ref(!1));
        s(
            this,
            "maxStudentsPerGroup",
            computed(() => Math.ceil(this.studentsPresent.value.length / this.numberOfGroups.value))
        );
        s(this, "hasIllegalGroups", ref(!1));
        s(this, "updateGroupTitle", (e) => {
            const a = _e(this.groups.value),
                i = a.find((n) => n.id === e.groupId);
            i && (i.title = e.title), (this.groups.value = a);
        });
        s(this, "pinStudent", (e) => {
            this.unpinStudent({ studentId: e.studentId }), (this.pinnedStudents.value = [...this.pinnedStudents.value, { studentId: e.studentId, groupId: e.groupId }]);
        });
        s(this, "unpinStudent", (e) => {
            this.pinnedStudents.value = [...this.pinnedStudents.value.filter((a) => a.studentId !== e.studentId)];
        });
        s(
            this,
            "isPinnedStudent",
            computed(() => (e) => !!this.pinnedStudents.value.find((a) => a.studentId === e.studentId && a.groupId === e.groupId))
        );
        s(this, "moveStudentToGroup", (e) => {
            const a = _e(this.groups.value),
                i = a.find((h) => h.id === e.groupId),
                n = this.students.value.find((h) => h.id === e.studentId),
                d = !!this.pinnedStudents.value.find((h) => h.studentId === e.studentId);
            i &&
                n &&
                (a.forEach((h) => {
                    h.students = [...h.students.filter((m) => m.id !== e.studentId)];
                }),
                (i.students = [...i.students.slice(0, e.index), n, ...i.students.slice(e.index)]),
                (this.groups.value = a),
                d && this.pinStudent({ studentId: e.studentId, groupId: e.groupId }));
        });
        s(this, "updateGroupColor", (e) => {
            const a = _e(this.groups.value),
                i = a.find((n) => n.id === e.groupId);
            i && ((i.color = e.color), (this.groups.value = a));
        });
        s(this, "createGroups", () =>
            o(this, null, function* () {
                (this.isCreatingGroups.value = !0), (this.hasIllegalGroups.value = !1), yield u.utils.sleep(500);
                let e = !1,
                    a = 25;
                const { newGroups: i, placedStudentIds: n } = this.createGroupsWithPinnedStudents(),
                    d = this.studentsPresent.value.filter((h) => !n.includes(h.id));
                for (; a && !e; ) {
                    const { groups: h, success: m } = this.tryPopulateGroups({ newGroups: i, studentsToPopulate: d });
                    (a -= 1),
                        (e = m),
                        (e || !a) &&
                            (h.forEach((v) => {
                                v.students = v.students.sort((I, C) => (I.name > C.name ? 1 : -1));
                            }),
                            (this.groups.value = h));
                }
                yield u.utils.sleep(500), (this.hasIllegalGroups.value = !e), (this.isCreatingGroups.value = !1);
            })
        );
        s(this, "createGroupsWithPinnedStudents", () => {
            const e = Array.from(Array(this.numberOfGroups.value)).map((n, d) =>
                    d < this.groups.value.length ? c(l({}, this.groups.value[d]), { students: [] }) : { id: u.utils.uuidv4(), title: `Group ${d + 1}`, color: "var(--color-theme-accent1)", students: [] }
                ),
                a = [],
                i = e.map((n) => n.id);
            return (
                (this.pinnedStudents.value = [...this.pinnedStudents.value.filter((n) => i.includes(n.groupId))]),
                this.pinnedStudents.value.forEach((n) => {
                    const d = e.find((m) => m.id === n.groupId),
                        h = this.studentsPresent.value.find((m) => m.id === n.studentId);
                    d && h && (d.students.push(l({}, h)), a.push(h.id));
                }),
                { newGroups: e, placedStudentIds: a }
            );
        });
        s(this, "tryPopulateGroups", (e) => {
            let a = !0;
            const { newGroups: i, studentsToPopulate: n } = e;
            return (
                dr(_e(n))
                    .map((h) => {
                        const m = this.exlusions.value.filter((v) => v.studentId1 === h.id || v.studentId2 === h.id).length;
                        return c(l({}, h), { numberOfExclusions: m });
                    })
                    .sort((h, m) => (h.numberOfExclusions < m.numberOfExclusions ? 1 : -1))
                    .forEach((h) => {
                        var v;
                        const m = _e(i).sort((I, C) => (I.students.length > C.students.length ? 1 : I.students.length < C.students.length ? -1 : Math.random() > 0.5 ? 1 : -1));
                        for (const [I, C] of m.entries()) {
                            if (C.students.length >= this.maxStudentsPerGroup.value) continue;
                            if (
                                !!this.exlusions.value.find((U) => {
                                    const D = U.studentId1 === h.id && !!C.students.find((M) => M.id === U.studentId2),
                                        Ge = U.studentId2 === h.id && !!C.students.find((M) => M.id === U.studentId1);
                                    return D || Ge;
                                })
                            ) {
                                if (I < m.length - 1) continue;
                                a = !1;
                            }
                            (v = i.find((U) => U.id === C.id)) == null || v.students.push({ id: h.id, name: h.name });
                            return;
                        }
                    }),
                { groups: i, success: a }
            );
        });
        s(
            this,
            "isConfigured",
            computed(() => this.selectedListLocation.value || this.students.value.length > 0)
        );
        s(
            this,
            "isDraggableWithButton",
            computed(() => !!this.isConfigured.value && this.settings.isDraggableWithButton)
        );
    }
    static getConfiguration(e) {
        const a = Ce.getPerWorkspaceConfiguration(c(l({}, e), { type: Ce.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-group-maker-v1/${e.id}` },
                { type: "https", function: "migrateWidgetGroupMakerGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 250,
            initialHeight: 600,
            minWidth: 250,
            initialWidth: 720,
            initialX: (1920 - 600) / 2,
            initialY: 60,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: u.utils.isTouchDevice,
            isRotatable: !1,
            hasSelectionOverlay: u.utils.isTouchDevice,
        });
    }
    get settings() {
        return Ce.settings;
    }
    static get type() {
        return Yt;
    }
    get type() {
        return Ce.type;
    }
    static setup(e) {
        const a = new lr({ configuration: Ce.getConfiguration(e), dataSpecAndDefaults: new or() }),
            i = new Ce(c(l({}, e), { data: a }));
        return (
            onMounted(() => {
                watch(
                    i.selectedListLocation,
                    (n) =>
                        o(this, null, function* () {
                            (i._globalListLoaded.value = !1), n ? ((i._globalList = Z.getCachedOrEmpty({ ownerId: n.ownerId, id: n.studentListId })), yield i._globalList.load(), (i._globalListLoaded.value = !0)) : (i._globalList = null);
                        }),
                    { immediate: !0 }
                );
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return Ce.___getCached({ type: Yt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return Ce.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => Ce.setup(e);
        return Ce._getCachedOrEmpty(c(l({}, e), { type: Yt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (I) => Ce.setup({ ownerId: a, workspaceId: i, id: I.id }),
            m = Ce._getNew({ type: Yt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d }),
            v = u.getRootForStudentLists();
        return v.favoriteListId.value && (m.selectedListLocation.value = { ownerId: u.user.userId.value, studentListId: v.favoriteListId.value }), m;
    }
    updateLocalStudents(e) {
        const a = Ke.studentsFromNames({ namesString: e.localNames }),
            i = a.map((h) => h.name);
        this.localStudents.value = [...this.localStudents.value.filter((h) => i.includes(h.name))];
        const n = this.localStudents.value.map((h) => h.name),
            d = a.filter((h) => !n.includes(h.name));
        (this.localStudents.value = [...this.localStudents.value, ...d]), (this.selectedListLocation.value = null);
    }
};
let At = Ce;
s(At, "COLORS", [p.gray950.hex, p.gray700.hex, p.gray400.hex, p.white.hex, p.red600.hex, p.orange600.hex, p.yellow500.hex, p.green600.hex, p.blue700.hex, p.lightBlue500.hex, p.purple700.hex, p.pink500.hex]),
    s(At, "FONT_SIZES", [
        { caption: "Small", value: "sm" },
        { caption: "Medium", value: "md" },
        { caption: "Large", value: "lg" },
        { caption: "Extra Large", value: "xl" },
    ]);
function dr(r) {
    for (let t = r.length - 1; t > 0; t--) {
        const e = Math.floor(Math.random() * r.length);
        [r[t], r[e]] = [r[e], r[t]];
    }
    return r;
}
const Jt = "WIDGET_IMAGE_V1";
class cr extends q {
    constructor() {
        super(...arguments);
        s(this, "imageId", null);
        s(this, "fit", "contain");
    }
}
class ur extends K {}
class he extends E {
    constructor(e) {
        super(e);
        s(this, "imageId", this.data.dataComputed.imageId);
        s(this, "fit", this.data.dataComputed.fit);
        s(this, "feedback", ref("Upload or select an image in the widget settings"));
    }
    static getConfiguration(e) {
        const a = he.getPerWorkspaceConfiguration(c(l({}, e), { type: he.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-image-v1/${e.id}` },
                { type: "https", function: "migrateWidgetImageGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 50,
            initialHeight: 300,
            minWidth: 50,
            initialWidth: 400,
            initialX: 50 + 500 + 20,
            initialY: 140 + 20,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isRotatable: !0,
            openSettingsOnCreate: !1,
        });
    }
    get settings() {
        return he.settings;
    }
    static get type() {
        return Jt;
    }
    get type() {
        return he.type;
    }
    static setup(e) {
        const a = new ur({ configuration: he.getConfiguration(e), dataSpecAndDefaults: new cr() });
        return new he(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return he.___getCached({ type: Jt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return he.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => he.setup(e);
        return he._getCachedOrEmpty(c(l({}, e), { type: Jt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => he.setup({ ownerId: a, workspaceId: i, id: m.id });
        return he._getNew({ type: Jt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
function vs(r) {
    let t = 0;
    if (r.text.length == 0) return t;
    for (let e = 0; e < r.text.length; e++) {
        const a = r.text.charCodeAt(e);
        (t = (t << 5) - t + a), (t = t & t);
    }
    return t;
}
const qt = "WIDGET_POLL_V1",
    Kt = Number.parseInt("10");
class hr extends q {
    constructor() {
        super(...arguments);
        s(this, "votingRound", Math.round(Math.random() * We(10, 10)));
        s(this, "isVotingClosed", !1);
        s(this, "isResultVisible", !0);
        s(this, "question", "What do you think of today's lesson?");
        s(this, "pollType", "undefined");
        s(this, "subtypeBinary", "v-x");
        s(this, "subtypeSmileys", "smileys-5");
        s(this, "chartTypeOpen", "word-cloud");
        s(this, "chartTypeBinary", "pie");
        s(this, "chartTypeSmileys", "pie");
        s(this, "chartTypeText", "horizontal-bar");
        s(this, "textChoicesEnabled", 4);
        s(this, "textChoice1Letter", "A");
        s(this, "textChoice1Text", "Option 1");
        s(this, "textChoice2Letter", "B");
        s(this, "textChoice2Text", "Option 2");
        s(this, "textChoice3Letter", "C");
        s(this, "textChoice3Text", "Option 3");
        s(this, "textChoice4Letter", "D");
        s(this, "textChoice4Text", "Option 4");
        s(this, "textChoice5Letter", "E");
        s(this, "textChoice5Text", "Option 5");
        s(this, "textChoice6Letter", "F");
        s(this, "textChoice6Text", "Option 6");
        s(this, "votesOpen", {});
        s(this, "votesBinary", {});
        s(this, "votesSmileys", {});
        s(this, "votesText", {});
    }
}
class pr extends K {}
const b = class extends E {
    constructor(e) {
        super(e);
        s(this, "votingRound", this.data.dataComputed.votingRound);
        s(this, "isResultVisible", this.data.dataComputed.isResultVisible);
        s(this, "isVotingClosed", this.data.dataComputed.isVotingClosed);
        s(
            this,
            "question",
            computed({
                get: () => this.data.dataComputed.question.value,
                set: (e) => {
                    const a = e.slice(0, b.textMaxQuestionLength);
                    this.data.dataComputed.question.value = a;
                },
            })
        );
        s(this, "pollType", this.data.dataComputed.pollType);
        s(this, "subtypeBinary", this.data.dataComputed.subtypeBinary);
        s(this, "subtypeSmileys", this.data.dataComputed.subtypeSmileys);
        s(this, "chartTypeOpen", this.data.dataComputed.chartTypeOpen);
        s(this, "chartTypeBinary", this.data.dataComputed.chartTypeBinary);
        s(this, "chartTypeSmileys", this.data.dataComputed.chartTypeSmileys);
        s(this, "chartTypeText", this.data.dataComputed.chartTypeText);
        s(this, "textChoicesEnabled", this.data.dataComputed.textChoicesEnabled);
        s(this, "textChoice1Letter", this.data.dataComputed.textChoice1Letter);
        s(this, "textChoice1Text", this.data.dataComputed.textChoice1Text);
        s(this, "textChoice2Letter", this.data.dataComputed.textChoice2Letter);
        s(this, "textChoice2Text", this.data.dataComputed.textChoice2Text);
        s(this, "textChoice3Letter", this.data.dataComputed.textChoice3Letter);
        s(this, "textChoice3Text", this.data.dataComputed.textChoice3Text);
        s(this, "textChoice4Letter", this.data.dataComputed.textChoice4Letter);
        s(this, "textChoice4Text", this.data.dataComputed.textChoice4Text);
        s(this, "textChoice5Letter", this.data.dataComputed.textChoice5Letter);
        s(this, "textChoice5Text", this.data.dataComputed.textChoice5Text);
        s(this, "votesOpen", this.data.dataComputed.votesOpen);
        s(this, "votesBinary", this.data.dataComputed.votesBinary);
        s(this, "votesSmileys", this.data.dataComputed.votesSmileys);
        s(this, "votesText", this.data.dataComputed.votesText);
        s(
            this,
            "hashCode",
            computed(() => vs({ text: JSON.stringify({ pollType: this.pollType.value, question: this.question.value, answerOptions: this.answerOptions.value }) }))
        );
        s(
            this,
            "answerOptions",
            computed(() =>
                this.pollType.value === "text"
                    ? this.optionsText.value.options.map((e) => ({ type: e.type, letter: e.letter, text: e.text }))
                    : this.pollType.value === "smileys"
                    ? this.optionsSmileys.value.options.map((e) => ({ type: e.type, name: e.name }))
                    : this.pollType.value === "binary"
                    ? this.optionsBinary.value.options.map((e) => ({ type: e.type, name: e.name }))
                    : []
            )
        );
        s(this, "unsubscribe", ref(null));
        s(this, "_isListening", ref(!1));
        s(
            this,
            "isListening",
            computed(() => this._isListening.value)
        );
        s(this, "startListeningForVotes", () =>
            o(this, null, function* () {
                if (!u.user.isLoggedIn.value) return;
                const e = 10;
                if (this.unsubscribe.value === null) {
                    const { unsubscribe: a } = yield u.network.db.rtdb.onValue({
                        path: `/user-state/${u.user.userId.value}/polls/${this.id}/votes`,
                        ownerId: this.ownerId,
                        callback: (i) => {
                            if (i.exists() && (this.pollType.value === "binary" || this.pollType.value === "smileys" || this.pollType.value === "text")) {
                                const n = i.val();
                                Object.keys(n).forEach((d) => n[d]++),
                                    this.pollType.value === "binary"
                                        ? (this.votesBinary.value = l(l({}, this.votesBinary.value), n))
                                        : this.pollType.value === "smileys"
                                        ? (this.votesSmileys.value = l(l({}, this.votesSmileys.value), n))
                                        : this.pollType.value === "text" && (this.votesText.value = l(l({}, this.votesText.value), n)),
                                    Object.keys(n).length >= e;
                            }
                        },
                    });
                    (this.unsubscribe.value = a), (this._isListening.value = !0);
                }
            })
        );
        s(this, "stopListeningForVotes", () => {
            !u.user.isLoggedIn.value || (this.unsubscribe.value !== null && (this.unsubscribe.value(), (this.unsubscribe.value = null), (this._isListening.value = !1)));
        });
        s(this, "castLocalVote", (e) => {
            const a = u.utils.uuidv4();
            if (this.pollType.value === "binary") {
                const i = l({}, this.votesBinary.value);
                (i[a] = e.optionKey), (this.votesBinary.value = i);
            } else if (this.pollType.value === "smileys") {
                const i = l({}, this.votesSmileys.value);
                (i[a] = e.optionKey), (this.votesSmileys.value = i);
            } else if (this.pollType.value === "text") {
                const i = l({}, this.votesText.value);
                (i[a] = e.optionKey), (this.votesText.value = i);
            }
        });
        s(this, "_isResettingResults", ref(!1));
        s(
            this,
            "isResettingResults",
            computed(() => this._isResettingResults.value)
        );
        s(this, "resetResults", () =>
            o(this, null, function* () {
                (this._isResettingResults.value = !0),
                    (this.votesBinary.value = {}),
                    (this.votesOpen.value = {}),
                    (this.votesSmileys.value = {}),
                    (this.votesText.value = {}),
                    (this.votingRound.value = Math.round(Math.random() * We(10, 10))),
                    yield u.utils.sleep(500),
                    (this._isResettingResults.value = !1);
            })
        );
        s(
            this,
            "optionsMixed",
            computed(() => {
                switch (this.pollType.value) {
                    case "binary":
                        return l({ pollType: this.pollType.value }, this.optionsBinary.value);
                    case "smileys":
                        return l({ pollType: this.pollType.value }, this.optionsSmileys.value);
                    case "text":
                        return l({ pollType: this.pollType.value }, this.optionsText.value);
                    default:
                        return { pollType: this.pollType.value, options: [], maxLength: 1 };
                }
            })
        );
        s(
            this,
            "optionsBinary",
            computed(() => ({
                options: [
                    { key: 1, type: "icon", name: "b-v", color: b.colors.smileyGreen },
                    { key: 2, type: "icon", name: "b-x", color: b.colors.smileyRed },
                ],
                maxLength: 1,
            }))
        );
        s(
            this,
            "optionsSmileys",
            computed(() => {
                const e = {
                        option1: { key: 1, type: "icon", name: "s-5", color: b.colors.smileyGreen },
                        option2: { key: 2, type: "icon", name: "s-4", color: b.colors.smileyLightGreen },
                        option3: { key: 3, type: "icon", name: "s-3", color: b.colors.smileyYellow },
                        option4: { key: 4, type: "icon", name: "s-2", color: b.colors.smileyOrange },
                        option5: { key: 5, type: "icon", name: "s-1", color: b.colors.smileyRed },
                    },
                    a = 1;
                switch (this.subtypeSmileys.value) {
                    case "smileys-2":
                        return { options: [e.option1, e.option5], maxLength: a };
                    case "smileys-3":
                        return { options: [e.option1, e.option3, e.option5], maxLength: a };
                    case "smileys-4":
                        return { options: [e.option1, e.option2, e.option4, e.option5], maxLength: a };
                    case "smileys-5":
                        return { options: [e.option1, e.option2, e.option3, e.option4, e.option5], maxLength: a };
                    default:
                        throw new Q(this.subtypeSmileys.value, "Unkown poll binary subtype");
                }
            })
        );
        s(
            this,
            "optionsText",
            computed(() => {
                const e = [
                        { key: 1, type: "text", letter: this.textChoice1Letter.value, text: this.textChoice1Text.value, color: b.colors.option1 },
                        { key: 2, type: "text", letter: this.textChoice2Letter.value, text: this.textChoice2Text.value, color: b.colors.option2 },
                        { key: 3, type: "text", letter: this.textChoice3Letter.value, text: this.textChoice3Text.value, color: b.colors.option3 },
                        { key: 4, type: "text", letter: this.textChoice4Letter.value, text: this.textChoice4Text.value, color: b.colors.option4 },
                        { key: 5, type: "text", letter: this.textChoice5Letter.value, text: this.textChoice5Text.value, color: b.colors.option5 },
                    ].slice(0, this.textChoicesEnabled.value),
                    a = Math.max(...e.map((i) => i.text.length));
                return { options: e, maxLength: a };
            })
        );
        s(
            this,
            "resultsMixed",
            computed(() => {
                switch (this.pollType.value) {
                    case "binary":
                        return c(l({ pollType: this.pollType.value }, this.resultsBinary.value), { options: this.optionsBinary.value.options, maxLength: 1 });
                    case "open":
                        return c(l({ pollType: this.pollType.value }, this.resultsOpen.value), { options: [], maxLength: 1 });
                    case "smileys":
                        return c(l({ pollType: this.pollType.value }, this.resultsSmileys.value), { options: this.optionsSmileys.value.options, maxLength: 1 });
                    case "text":
                        return c(l({ pollType: this.pollType.value }, this.resultsText.value), { options: this.optionsText.value.options, maxLength: this.optionsText.value.maxLength });
                    default:
                        return { pollType: this.pollType.value, results: [], voteCount: 0, options: [], maxLength: 1 };
                }
            })
        );
        s(
            this,
            "resultsOpen",
            computed(() => {
                let e = 0;
                return { results: Object.values(this.votesOpen.value).reduce((i, n) => (this.isResultVisible.value ? (n in i ? i[n]++ : (i[n] = 1)) : n in i || (i[n] = 0), e++, i), {}), voteCount: e };
            })
        );
        s(
            this,
            "resultsBinary",
            computed(() => {
                let e = 0;
                const a = Object.values(this.votesBinary.value).reduce((i, n) => (n === 1 ? i.option1++ : n === 2 && i.option2++, e++, i), { option1: 0, option2: 0 });
                return { results: this.isResultVisible.value ? [a.option1, a.option2] : [0, 0], voteCount: e };
            })
        );
        s(
            this,
            "resultsSmileys",
            computed(() => {
                let e = 0;
                const a = Object.values(this.votesSmileys.value).reduce(
                    (i, n) => (this.isResultVisible.value && (n === 1 ? i.option1++ : n === 2 ? i.option2++ : n === 3 ? i.option3++ : n === 4 ? i.option4++ : n === 5 && i.option5++), e++, i),
                    { option1: 0, option2: 0, option3: 0, option4: 0, option5: 0 }
                );
                switch (this.subtypeSmileys.value) {
                    case "smileys-2":
                        return { results: [a.option1, a.option5], voteCount: e };
                    case "smileys-3":
                        return { results: [a.option1, a.option3, a.option5], voteCount: e };
                    case "smileys-4":
                        return { results: [a.option1, a.option2, a.option4, a.option5], voteCount: e };
                    case "smileys-5":
                        return { results: [a.option1, a.option2, a.option3, a.option4, a.option5], voteCount: e };
                    default:
                        throw new Q(this.subtypeSmileys.value, "Unkown poll binary subtype");
                }
            })
        );
        s(
            this,
            "resultsText",
            computed(() => {
                let e = 0;
                const a = Object.values(this.votesText.value).reduce(
                    (i, n) => (this.isResultVisible.value && (n === 1 ? i.option1++ : n === 2 ? i.option2++ : n === 3 ? i.option3++ : n === 4 ? i.option4++ : n === 5 && i.option5++), e++, i),
                    { option1: 0, option2: 0, option3: 0, option4: 0, option5: 0 }
                );
                return { results: [a.option1, a.option2, a.option3, a.option4, a.option5].slice(0, this.textChoicesEnabled.value), voteCount: e };
            })
        );
        s(this, "textUpdateLetter", (e) => {
            const a = e.letter.slice(0, 1);
            e.choiceNumber === 1
                ? (this.textChoice1Letter.value = a)
                : e.choiceNumber === 2
                ? (this.textChoice2Letter.value = a)
                : e.choiceNumber === 3
                ? (this.textChoice3Letter.value = a)
                : e.choiceNumber === 4
                ? (this.textChoice4Letter.value = a)
                : e.choiceNumber === 5 && (this.textChoice5Letter.value = a);
        });
        s(this, "textUpdateText", (e) => {
            const a = e.text.slice(0, b.textMaxAnswerLength);
            e.choiceNumber === 1
                ? (this.textChoice1Text.value = a)
                : e.choiceNumber === 2
                ? (this.textChoice2Text.value = a)
                : e.choiceNumber === 3
                ? (this.textChoice3Text.value = a)
                : e.choiceNumber === 4
                ? (this.textChoice4Text.value = a)
                : e.choiceNumber === 5 && (this.textChoice5Text.value = a);
        });
        s(
            this,
            "chartType",
            computed({
                get: () => {
                    const e = this.pollType.value;
                    if (e === "undefined") return "donut";
                    if (e === "open") return this.chartTypeOpen.value;
                    if (e === "binary") return this.chartTypeBinary.value;
                    if (e === "smileys") return this.chartTypeSmileys.value;
                    if (e === "text") return this.chartTypeText.value;
                    throw new Q(e, "Unkown poll type");
                },
                set: (e) => {
                    const a = this.pollType.value;
                    a === "open" ? (this.chartTypeOpen.value = e) : a === "binary" ? (this.chartTypeBinary.value = e) : a === "smileys" ? (this.chartTypeSmileys.value = e) : a === "text" && (this.chartTypeText.value = e);
                },
            })
        );
        s(
            this,
            "isReady",
            computed(() => this.pollType.value !== "undefined")
        );
        s(this, "isResultHidden", computed({ get: () => !this.isResultVisible.value, set: (e) => (this.isResultVisible.value = !e) }));
    }
    static getConfiguration(e) {
        const a = b.getPerWorkspaceConfiguration(c(l({}, e), { type: b.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-poll-v1/${e.id}` },
                { type: "https", function: "migrateWidgetPollGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 100,
            initialHeight: 400,
            minWidth: 100 * 1.4,
            initialWidth: 800,
            minAspectRatio: 1.4,
            maxAspectRatio: 2.5,
            initialX: (1920 - 800) / 2,
            initialY: 200,
            initialZ: 10,
            contentScaleBasedOn: "width",
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isDuplicatable: !1,
            isPinnable: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return b.settings;
    }
    static get pollTypes() {
        return ["undefined", "text", "smileys", "binary", "open"];
    }
    static get subtypesBinary() {
        return ["v-x"];
    }
    static get subtypesSmileys() {
        return ["smileys-2", "smileys-3", "smileys-4", "smileys-5"];
    }
    static get chartTypesBinary() {
        return ["horizontal-bar", "pie", "donut"];
    }
    static get chartTypesSmileys() {
        return ["horizontal-bar", "pie", "donut"];
    }
    static get chartTypesText() {
        return ["horizontal-bar", "pie", "donut"];
    }
    static get chartTypesOpen() {
        return ["word-cloud"];
    }
    static get colors() {
        return {
            option1: { background: p.teal500.hex, color: p.teal950.hex },
            option2: { background: p.lime500.hex, color: p.lime950.hex },
            option3: { background: p.yellow500.hex, color: p.yellow950.hex },
            option4: { background: p.rose500.hex, color: p.rose950.hex },
            option5: { background: p.indigo500.hex, color: p.indigo950.hex },
            smileyGreen: { background: p.green600.hex, color: p.green950.hex },
            smileyLightGreen: { background: p.lime500.hex, color: p.lime950.hex },
            smileyYellow: { background: p.yellow500.hex, color: p.yellow950.hex },
            smileyOrange: { background: p.orange500.hex, color: p.orange950.hex },
            smileyRed: { background: p.red500.hex, color: p.red950.hex },
        };
    }
    static get type() {
        return qt;
    }
    get type() {
        return b.type;
    }
    static setup(e) {
        const a = new pr({ configuration: b.getConfiguration(e), dataSpecAndDefaults: new hr() }),
            i = new b(c(l({}, e), { data: a })),
            n = u.getUserPreferences(),
            { pollIsRemoteVotingEnabled: d } = n,
            h = ft(() => {
                this.updatePoll({ pollId: i.id });
            }, 5e3);
        return (
            onMounted(() => {
                watch([u.user.isLoggedIn, d, i.isMounted, i.isVotingClosed], () =>
                    o(this, null, function* () {
                        u.user.isLoggedIn.value && (d.value && i.isMounted.value && !i.isVotingClosed.value ? yield b.activateBroadcast({ pollId: i.id }) : yield b.deactivateBroadcast({ pollId: i.id }));
                    })
                ),
                    watch([u.user.isLoggedIn, i.votingRound, i.isReady], () =>
                        o(this, null, function* () {
                            u.user.isLoggedIn.value && (yield b.updatePoll({ pollId: i.id }), yield b.updateSession({ pollId: i.id }));
                        })
                    ),
                    watch([u.user.isLoggedIn, i.question, i.optionsMixed], () => {
                        u.user.isLoggedIn.value && h();
                    });
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return b.___getCached({ type: qt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return b.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => b.setup(e);
        return b._getCachedOrEmpty(c(l({}, e), { type: qt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => b.setup({ ownerId: a, workspaceId: i, id: m.id });
        return b._getNew({ type: qt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
    reset() {
        super.reset(), (b._roomId.value = null), (b._sessionId.value = null);
    }
};
let j = b;
s(j, "textMaxAnswerOptions", 5),
    s(j, "textMaxAnswerLength", 70),
    s(j, "textMaxQuestionLength", 160),
    s(j, "_roomId", ref(null)),
    s(
        j,
        "roomId",
        computed(() => b._roomId.value)
    ),
    s(j, "_sessionId", ref(null)),
    s(j, "broadcastingPollId", ref(null)),
    s(j, "deactivateBroadcast", (e) =>
        o(b, null, function* () {
            !u.user.isLoggedIn.value || (b.broadcastingPollId.value === e.pollId && ((b.broadcastingPollId.value = null), yield b.updateSession({ pollId: null }), b.stopListenForVotes({ pollId: e.pollId })));
        })
    ),
    s(j, "activateBroadcast", (e) =>
        o(b, null, function* () {
            !u.user.isLoggedIn.value ||
                ((b.broadcastingPollId.value = e.pollId), yield b.initializeRoomIfNeeded(), yield b.updatePoll({ pollId: e.pollId }), yield b.updateSession({ pollId: e.pollId }), yield b.listenForVotes({ pollId: e.pollId }));
        })
    ),
    s(j, "initializeRoomIfNeeded", () =>
        o(b, null, function* () {
            if (!!u.user.isLoggedIn.value && (!b.roomId.value || !b._sessionId.value)) {
                const { roomId: e, sessionId: a } = yield u.network.functions.pollGetOrCreateRoom({ newRoom: !1, newSession: !1, databaseCount: Kt });
                (b._roomId.value = e), (b._sessionId.value = a);
            }
        })
    ),
    s(j, "resetRoomAndSession", () => {
        (b._roomId.value = null), (b._sessionId.value = null);
    }),
    s(j, "updateSession", (e) =>
        o(b, null, function* () {
            if (!u.user.isLoggedIn.value) return;
            const a = b._sessionId.value;
            if (!!a)
                if (!e.pollId) yield u.network.functions.pollOverwriteSessions({ sessionId: a, pollId: null, remoteVotingEnabled: !0, pollVotingEnabled: !1, pollReady: !1, pollHash: 0, pollVotingRound: 0, databaseCount: Kt });
                else {
                    const i = b.getCachedOrError({ id: e.pollId }),
                        n = i.id,
                        d = u.getUserPreferences().pollIsRemoteVotingEnabled.value,
                        h = !i.isVotingClosed.value,
                        m = i.isReady.value,
                        v = i.hashCode.value,
                        I = i.votingRound.value;
                    yield u.network.functions.pollOverwriteSessions({ sessionId: a, pollId: n, remoteVotingEnabled: d, pollVotingEnabled: h, pollReady: m, pollHash: v, pollVotingRound: I, databaseCount: Kt });
                }
        })
    ),
    s(j, "updatePoll", (e) =>
        o(b, null, function* () {
            if (!u.user.isLoggedIn.value) return;
            const a = b.getCachedOrError({ id: e.pollId }),
                i = a.id,
                n = a.votingRound.value,
                d = a.question.value,
                h = a.answerOptions.value,
                m = a.hashCode.value;
            yield u.network.functions.pollOverwritePolls({ pollId: i, votingRound: n, question: d, answerOptions: h, hash: m, databaseCount: Kt });
        })
    ),
    s(j, "listenForVotes", (e) =>
        o(b, null, function* () {
            if (!u.user.isLoggedIn.value) return;
            const a = b.getCachedOrError({ id: e.pollId });
            a.isListening.value || (yield a.startListeningForVotes());
        })
    ),
    s(j, "stopListenForVotes", (e) => {
        if (!u.user.isLoggedIn.value) return;
        const a = b.getCachedOrError({ id: e.pollId });
        a.isListening.value && a.stopListeningForVotes();
    });
const Xt = "WIDGET_QR_CODE_V1";
class gr extends q {
    constructor() {
        super(...arguments);
        s(this, "rawCode", "");
        s(this, "code", null);
        s(this, "isTitleEnabled", !1);
        s(this, "title", "");
    }
}
class mr extends K {}
class pe extends E {
    constructor(e) {
        super(e);
        s(this, "rawCode", this.data.dataComputed.rawCode);
        s(this, "code", this.data.dataComputed.code);
        s(this, "title", this.data.dataComputed.title);
        s(this, "isTitleEnabled", this.data.dataComputed.isTitleEnabled);
        s(this, "source", ref(null));
        s(this, "isProcessing", ref(!1));
        s(
            this,
            "isSourceValid",
            computed(() => {
                var e, a;
                return ((a = (e = this.source.value) == null ? void 0 : e.length) != null ? a : 0) > 0;
            })
        );
        s(
            this,
            "isSourceInvalid",
            computed(() => {
                var e;
                return ((e = this.source.value) == null ? void 0 : e.length) === 0;
            })
        );
        s(this, "feedback", ref("Please enter an embed code or url"));
    }
    static getConfiguration(e) {
        const a = pe.getPerWorkspaceConfiguration(c(l({}, e), { type: pe.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-qr-code-v1/${e.id}` },
                { type: "https", function: "migrateWidgetQrCodeGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 250,
            initialHeight: 315,
            minWidth: 250,
            initialWidth: 315,
            initialX: 50 + 300 + 20,
            initialY: 100,
            initialZ: 10,
            hasLockedAspectRatio: !0,
            isDraggableWithButton: !1,
            isRotatable: !1,
            openSettingsOnCreate: !1,
            contentScaleBasedOn: "width",
        });
    }
    get settings() {
        return pe.settings;
    }
    static get type() {
        return Xt;
    }
    get type() {
        return pe.type;
    }
    static setup(e) {
        const a = new mr({ configuration: pe.getConfiguration(e), dataSpecAndDefaults: new gr() }),
            i = new pe(c(l({}, e), { data: a })),
            n = ft(() => i.processCode(), 1e3);
        return (
            onMounted(() => {
                watch(
                    i.code,
                    () => {
                        (i.feedback.value = "Processing..."), (i.isProcessing.value = !0), n();
                    },
                    { immediate: !0 }
                );
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return pe.___getCached({ type: Xt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return pe.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => pe.setup(e);
        return pe._getCachedOrEmpty(c(l({}, e), { type: Xt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => pe.setup({ ownerId: a, workspaceId: i, id: m.id });
        return pe._getNew({ type: Xt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
    processCode() {
        if (this.code.value === null) {
            (this.source.value = null), (this.feedback.value = "Please enter a text or url"), (this.isProcessing.value = !1);
            return;
        }
        (this.source.value = this.code.value), (this.feedback.value = this.isSourceValid.value ? "QR-code updated" : "Please enter a text or url"), (this.isProcessing.value = !1);
    }
}
const Zt = "WIDGET_RANDOM_NAME_V1";
class fr extends q {
    constructor() {
        super(...arguments);
        s(this, "selectedListLocation", null);
        s(this, "localStudents", []);
        s(this, "localChosenIds", []);
        s(this, "localIsRememberingEnabled", !0);
        s(this, "selectedStudentId", null);
    }
}
class vr extends K {}
class ge extends E {
    constructor(e) {
        super(e);
        s(
            this,
            "selectedListLocation",
            computed({
                get: () => {
                    var n;
                    const e = u.getRootForStudentLists(),
                        a = this.data.dataComputed.selectedListLocation.value;
                    return e.studentLists.exists({ id: (n = a == null ? void 0 : a.studentListId) != null ? n : "", excludeTrashed: !0 }) ? a : null;
                },
                set: (e) => {
                    this.data.dataComputed.selectedListLocation.value = e;
                },
            })
        );
        s(this, "localStudents", this.data.dataComputed.localStudents);
        s(this, "localChosenIds", this.data.dataComputed.localChosenIds);
        s(this, "localIsRememberingEnabled", this.data.dataComputed.localIsRememberingEnabled);
        s(this, "selectedStudentId", this.data.dataComputed.selectedStudentId);
        s(this, "_globalList", null);
        s(this, "_globalListLoaded", ref(!1));
        s(
            this,
            "globalStudents",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.students.value : []))
        );
        s(
            this,
            "globalChosenIds",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.idsChosen.value : []))
        );
        s(
            this,
            "globalIdsNotPresent",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.idsNotPresent.value : []))
        );
        s(
            this,
            "globalIsRememberingEnabled",
            computed(() => (this._globalListLoaded.value && this._globalList ? this._globalList.isRememberingEnabled.value : !0))
        );
        s(
            this,
            "students",
            computed(() => (this.selectedListLocation.value ? this.globalStudents.value : this.localStudents.value))
        );
        s(
            this,
            "isRememberingEnabled",
            computed({
                get: () => (this.selectedListLocation.value ? this.globalIsRememberingEnabled.value : this.localIsRememberingEnabled.value),
                set: (e) => {
                    this.selectedListLocation.value ? this._globalListLoaded.value && this._globalList && (this._globalList.isRememberingEnabled.value = e) : (this.localIsRememberingEnabled.value = e);
                },
            })
        );
        s(
            this,
            "idsChosen",
            computed({
                get: () => (this.selectedListLocation.value ? this.globalChosenIds.value : this.localChosenIds.value),
                set: (e) => {
                    this.selectedListLocation.value ? this._globalListLoaded.value && this._globalList && (this._globalList.idsChosen.value = e) : (this.localChosenIds.value = e);
                },
            })
        );
        s(
            this,
            "idsNotPresent",
            computed({
                get: () => (this.selectedListLocation.value ? this.globalIdsNotPresent.value : []),
                set: (e) => {
                    this.selectedListLocation.value && this._globalListLoaded.value && this._globalList && (this._globalList.idsNotPresent.value = e);
                },
            })
        );
        s(
            this,
            "idsPresent",
            computed({
                get: () => this.students.value.map((e) => e.id).filter((e) => !this.idsNotPresent.value.includes(e)),
                set: (e) => {
                    this.idsNotPresent.value = this.students.value.map((a) => a.id).filter((a) => !e.includes(a));
                },
            })
        );
        s(
            this,
            "studentsPresent",
            computed(() => (this.selectedListLocation.value ? this.students.value.filter((e) => !this.globalIdsNotPresent.value.includes(e.id)) : this.students.value))
        );
        s(
            this,
            "studentsChosen",
            computed(() => this.students.value.filter((e) => this.idsChosen.value.includes(e.id)))
        );
        s(
            this,
            "studentsAvailableForChoosing",
            computed(() => (this.isRememberingEnabled.value ? this.studentsPresent.value.filter((e) => !this.idsChosen.value.includes(e.id)) : this.studentsPresent.value))
        );
    }
    static getConfiguration(e) {
        const a = ge.getPerWorkspaceConfiguration(c(l({}, e), { type: ge.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-random-name-v1/${e.id}` },
                { type: "https", function: "migrateWidgetRandomNameGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 150,
            initialHeight: 300,
            minWidth: 280,
            initialWidth: 500,
            initialX: 50,
            initialY: 220 + 20,
            initialZ: 10,
            minAspectRatio: 1,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return ge.settings;
    }
    static get type() {
        return Zt;
    }
    get type() {
        return ge.type;
    }
    static setup(e) {
        const a = new vr({ configuration: ge.getConfiguration(e), dataSpecAndDefaults: new fr() }),
            i = new ge(c(l({}, e), { data: a }));
        return (
            onMounted(() => {
                watch(
                    i.selectedListLocation,
                    (n) =>
                        o(this, null, function* () {
                            (i._globalListLoaded.value = !1), n ? ((i._globalList = Z.getCachedOrEmpty({ ownerId: n.ownerId, id: n.studentListId })), yield i._globalList.load(), (i._globalListLoaded.value = !0)) : (i._globalList = null);
                        }),
                    { immediate: !0 }
                );
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return ge.___getCached({ type: Zt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return ge.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => ge.setup(e);
        return ge._getCachedOrEmpty(c(l({}, e), { type: Zt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (I) => ge.setup({ ownerId: a, workspaceId: i, id: I.id }),
            m = ge._getNew({ type: Zt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d }),
            v = u.getRootForStudentLists();
        return v.favoriteListId.value && (m.selectedListLocation.value = { ownerId: u.user.userId.value, studentListId: v.favoriteListId.value }), m;
    }
    updateLocalStudents(e) {
        const a = Ke.studentsFromNames({ namesString: e.localNames }),
            i = a.map((h) => h.name);
        this.localStudents.value = [...this.localStudents.value.filter((h) => i.includes(h.name))];
        const n = this.localStudents.value.map((h) => h.name),
            d = a.filter((h) => !n.includes(h.name));
        (this.localStudents.value = [...this.localStudents.value, ...d]), (this.selectedListLocation.value = null);
    }
}
const Qt = "WIDGET_SOUND_LEVEL_V1",
    ss = 1e4;
class wr extends q {
    constructor() {
        super(...arguments);
        s(this, "isMicrophoneEnabled", !0);
        s(this, "threshold", null);
    }
}
class yr extends K {}
class me extends E {
    constructor(e) {
        super(e);
        s(this, "isMicrophoneEnabled", this.data.dataComputed.isMicrophoneEnabled);
        s(
            this,
            "threshold",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.threshold.value) != null ? e : u.getUserPreferences().soundLevelDefaultThreshold.value;
                },
                set: (e) => {
                    (u.getUserPreferences().soundLevelDefaultThreshold.value = e), (this.data.dataComputed.threshold.value = e);
                },
            })
        );
        s(this, "thresholdCountDownMilliseconds", ref(0));
        s(
            this,
            "thresholdCountDownPercentage",
            computed(() => this.thresholdCountDownMilliseconds.value / ss)
        );
        s(this, "onThresholdExceeded", () =>
            o(this, null, function* () {
                this.thresholdCountDownMilliseconds.value <= 0 && ((this.thresholdCountDownMilliseconds.value = ss), yield wa(S.PING));
            })
        );
    }
    static getConfiguration(e) {
        const a = me.getPerWorkspaceConfiguration(c(l({}, e), { type: me.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-sound-level-v1/${e.id}` },
                { type: "https", function: "migrateWidgetSoundLevelGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), { minHeight: 160, initialHeight: 320, minWidth: 150, initialWidth: 300, initialX: 50, initialY: 100, initialZ: 10, hasLockedAspectRatio: !0, isDraggableWithButton: !1, isRotatable: !1 });
    }
    get settings() {
        return me.settings;
    }
    static get type() {
        return Qt;
    }
    get type() {
        return me.type;
    }
    static setup(e) {
        const a = new yr({ configuration: me.getConfiguration(e), dataSpecAndDefaults: new wr() });
        return new me(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return me.___getCached({ type: Qt, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return me.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => me.setup(e);
        return me._getCachedOrEmpty(c(l({}, e), { type: Qt, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => me.setup({ ownerId: a, workspaceId: i, id: m.id });
        return me._getNew({ type: Qt, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
const ea = "WIDGET_STOPWATCH_V1";
class br extends q {
    constructor() {
        super(...arguments);
        s(this, "times", []);
        s(this, "startTimeSplit", 0);
        s(this, "startTimeLap", 0);
        s(this, "lapMode", "lap");
        s(this, "areLapTimesVisible", !1);
    }
}
class Ir extends K {}
class fe extends E {
    constructor(e) {
        super(e);
        s(this, "times", this.data.dataComputed.times);
        s(this, "startTimeSplit", this.data.dataComputed.startTimeSplit);
        s(this, "startTimeLap", this.data.dataComputed.startTimeLap);
        s(this, "lapMode", this.data.dataComputed.lapMode);
        s(this, "areLapTimesVisible", this.data.dataComputed.areLapTimesVisible);
        s(this, "isRunning", ref(!1));
    }
    static getConfiguration(e) {
        const a = fe.getPerWorkspaceConfiguration(c(l({}, e), { type: fe.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-stopwatch-v1/${e.id}` },
                { type: "https", function: "migrateWidgetStopwatchGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 150 / 2,
            initialHeight: (150 / 2) * 3,
            minWidth: 310 / 2,
            initialWidth: (310 / 2) * 3,
            initialX: (1920 - (310 / 2) * 3) / 2,
            initialY: 175 + 20,
            initialZ: 10,
            hasLockedAspectRatio: !0,
            isDraggableWithButton: !1,
            isRotatable: !1,
            contentScaleBasedOn: "width",
        });
    }
    get settings() {
        return fe.settings;
    }
    static get type() {
        return ea;
    }
    get type() {
        return fe.type;
    }
    static setup(e) {
        const a = new Ir({ configuration: fe.getConfiguration(e), dataSpecAndDefaults: new br() });
        return new fe(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return fe.___getCached({ type: ea, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return fe.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => fe.setup(e);
        return fe._getCachedOrEmpty(c(l({}, e), { type: ea, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => fe.setup({ ownerId: a, workspaceId: i, id: m.id });
        return fe._getNew({ type: ea, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
const ta = "WIDGET_TEXT_V1",
    ws = '{"ops":[{"insert":""}]}',
    Er = '{"ops":[{"insert":"\\n"}]}';
class Cr extends q {
    constructor() {
        super(...arguments);
        s(this, "text", ws);
        s(this, "localDefaultFontFamily", null);
        s(this, "localDefaultFontSize", null);
        s(this, "version", "1.0");
    }
}
class Sr extends K {}
const Se = class extends E {
    constructor(e) {
        super(e);
        s(this, "text", this.data.dataComputed.text);
        s(this, "version", this.data.dataComputed.version);
        s(this, "localDefaultFontFamily", this.data.dataComputed.localDefaultFontFamily);
        s(this, "localDefaultFontSize", this.data.dataComputed.localDefaultFontSize);
        s(
            this,
            "isUntouched",
            computed(() => this.text.value === ws || this.text.value === Er)
        );
        s(
            this,
            "isImageInline",
            computed(() => this.version.value === "1.1")
        );
    }
    static getConfiguration(e) {
        const a = Se.getPerWorkspaceConfiguration(c(l({}, e), { type: Se.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-text-v1/${e.id}` },
                { type: "https", function: "migrateWidgetTextGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 48,
            initialHeight: 400,
            minWidth: 120,
            initialWidth: 650,
            initialX: (1920 - 550) / 2,
            initialY: 140,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !0,
            isRotatable: !1,
            hasSelectionOverlay: u.utils.isTouchDevice,
        });
    }
    get settings() {
        return Se.settings;
    }
    static get type() {
        return ta;
    }
    get type() {
        return Se.type;
    }
    static setup(e) {
        const a = new Sr({ configuration: Se.getConfiguration(e), dataSpecAndDefaults: new Cr() });
        return new Se(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return Se.___getCached({ type: ta, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return Se.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => Se.setup(e);
        return Se._getCachedOrEmpty(c(l({}, e), { type: ta, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (v) => Se.setup({ ownerId: a, workspaceId: i, id: v.id }),
            m = Se._getNew({ type: ta, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
        return (m.version.value = "1.1"), m;
    }
};
let Qe = Se;
s(Qe, "FONT_FAMILIES", [
    { caption: "Quicksand", value: "quicksand", enabled: !0 },
    { caption: "Aref Ruqaa", value: "aref ruqaa", enabled: !0 },
    { caption: "Bangers", value: "bangers", enabled: !0 },
    { caption: "Graduate", value: "graduate", enabled: !0 },
    { caption: "Mali", value: "mali", enabled: !0 },
    { caption: "Pacifico", value: "pacifico", enabled: !0 },
    { caption: "Playfair", value: "playfair", enabled: !0 },
    { caption: "Roboto", value: "roboto", enabled: !0 },
    { caption: "Nunito", value: "nunito", enabled: !1 },
    { caption: "Open Sans", value: "open sans", enabled: !1 },
    { caption: "Ubuntu", value: "ubuntu", enabled: !1 },
]),
    s(
        Qe,
        "FONT_SIZES",
        Array.from({ length: 96 * 2 - 28 / 2 + 1 }, (e, a) => 28 / 2 + a).map((e) => {
            switch (e) {
                case 14:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 18:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 22:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 28:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 36:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 48:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 64:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                case 96:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !0 };
                default:
                    return { caption: `${e}px`, value: `${e}px`, enabled: !1 };
            }
        })
    ),
    s(Qe, "BACKGROUND_COLORS", ["transparent", p.gray950.hex, p.gray400.hex, p.red600.hex, p.orange600.hex, p.yellow500.hex, p.green600.hex, p.blue700.hex, p.lightBlue500.hex, p.purple700.hex, p.pink500.hex]),
    s(Qe, "FONT_COLORS", [p.gray950.hex, p.gray700.hex, p.gray400.hex, p.white.hex, p.red600.hex, p.orange600.hex, p.yellow500.hex, p.green600.hex, p.blue700.hex, p.lightBlue500.hex, p.purple700.hex, p.pink500.hex]);
const aa = "WIDGET_TIMER_V1";
class xr extends q {
    constructor() {
        super(...arguments);
        s(this, "intervals", [{ title: "Interval 1", milliseconds: null }]);
        s(this, "intervalIndex", 0);
        s(this, "epochStarted", null);
        s(this, "millisecondsCumulative", 0);
        s(this, "millisecondsDelta", 0);
        s(this, "selectedSound", null);
    }
}
class _r extends K {}
class oe extends E {
    constructor(e) {
        super(e);
        s(
            this,
            "intervals",
            computed({
                get: () =>
                    this.data.dataComputed.intervals.value.map((e) => {
                        if (e.milliseconds === null) {
                            const a = u.getUserPreferences(),
                                i = 1e3 * (a.timerDefaultTimeMinutes.value * 60 + a.timerDefaultTimeSeconds.value);
                            return c(l({}, e), { milliseconds: i });
                        }
                        return e;
                    }),
                set: (e) => {
                    this.data.dataComputed.intervals.value = e;
                },
            })
        );
        s(this, "intervalIndex", this.data.dataComputed.intervalIndex);
        s(this, "epochStarted", this.data.dataComputed.epochStarted);
        s(this, "millisecondsCumulative", this.data.dataComputed.millisecondsCumulative);
        s(this, "millisecondsDelta", this.data.dataComputed.millisecondsDelta);
        s(
            this,
            "selectedSound",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.selectedSound.value) != null ? e : u.getUserPreferences().timerDefaultAlarmSound.value;
                },
                set: (e) => {
                    (this.data.dataComputed.selectedSound.value = e), (u.getUserPreferences().timerDefaultAlarmSound.value = e);
                },
            })
        );
        s(this, "millisecondsElapsed", ref(0));
        s(this, "millisecondsLeft", ref(0));
        s(this, "updateTime", (e) => {
            if (!this.epochStarted.value) return;
            (this.millisecondsElapsed.value = e.epochNow - this.epochStarted.value), this.recalcTimeLeft();
            let a = -this.millisecondsLeft.value;
            if (a >= 0) {
                if (a < 1e3) return this.playSound(), this.intervalsLeft.value ? this.nextInterval() : this.stop();
                for (; a >= 0 && this.intervalsLeft.value > 0; )
                    if ((this.intervalIndex.value++, a < this.currentInterval.value.milliseconds)) {
                        (this.epochStarted.value = e.epochNow - a), (this.millisecondsCumulative.value = 0), (this.millisecondsDelta.value = 0);
                        return;
                    } else a -= this.currentInterval.value.milliseconds;
                this.stop();
            }
        });
        s(
            this,
            "status",
            computed(() => (this.epochStarted.value ? "running" : this.millisecondsCumulative.value ? "paused" : "stopped"))
        );
        s(
            this,
            "currentInterval",
            computed(() => {
                try {
                    return this.intervals.value[this.intervalIndex.value];
                } catch (e) {
                    return { title: "Interval not found", milliseconds: 0 };
                }
            })
        );
        s(
            this,
            "intervalsLeft",
            computed(() => Math.max(0, this.intervals.value.length - this.intervalIndex.value - 1))
        );
        s(
            this,
            "progress",
            computed(() => Math.max(0, this.millisecondsElapsed.value + this.millisecondsCumulative.value) / Math.max(1, this.millisecondsElapsed.value + this.millisecondsCumulative.value + this.millisecondsLeft.value))
        );
        s(
            this,
            "secondsLeft",
            computed(() => Math.max(0, Math.ceil(this.millisecondsLeft.value / 1e3)))
        );
        s(this, "start", () => {
            (this.epochStarted.value = Number(new Date())), this.recalcTimeLeft();
        });
        s(this, "pause", () => {
            (this.millisecondsCumulative.value += this.millisecondsElapsed.value), (this.millisecondsElapsed.value = 0), (this.epochStarted.value = null), this.recalcTimeLeft();
        });
        s(this, "stop", () => {
            (this.millisecondsElapsed.value = 0), (this.millisecondsCumulative.value = 0), (this.millisecondsDelta.value = 0), (this.epochStarted.value = null), (this.intervalIndex.value = 0), this.recalcTimeLeft();
        });
        s(this, "editTime", (e) => {
            this.epochStarted.value || this.millisecondsCumulative.value
                ? ((this.millisecondsDelta.value += Math.max(-this.millisecondsLeft.value, e.deltaSeconds * 1e3)), this.recalcTimeLeft())
                : ((this.intervals.value = this.intervals.value.map((a) => c(l({}, a), { milliseconds: Math.max(0, this.currentInterval.value.milliseconds + e.deltaSeconds * 1e3) }))), this.recalcTimeLeft());
        });
        s(this, "addInterval", () => {
            this.intervals.value = [...this.intervals.value, { title: `Interval ${this.intervals.value.length + 1}`, milliseconds: this.currentInterval.value.milliseconds }];
        });
        s(this, "removeInterval", () => {
            this.intervals.value.length > 1 && (this.intervals.value = [...this.intervals.value.slice(0, -1)]);
        });
        s(
            this,
            "isRunning",
            computed(() => {
                var e;
                return (e = this.epochStarted.value) != null ? e : 0 > 0;
            })
        );
        s(this, "toggleStart", () => {
            this.isRunning.value ? this.pause() : this.start();
        });
        s(this, "playSound", () => {
            wa(this.selectedSound.value);
        });
    }
    static getConfiguration(e) {
        const a = oe.getPerWorkspaceConfiguration(c(l({}, e), { type: oe.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-timer-v1/${e.id}` },
                { type: "https", function: "migrateWidgetTimerGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 150,
            initialHeight: 230,
            minWidth: 150,
            initialWidth: 620,
            minAspectRatio: 1,
            maxAspectRatio: 620 / 230,
            initialX: 1920 - 620 - 50,
            initialY: 200,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return oe.settings;
    }
    static get type() {
        return aa;
    }
    get type() {
        return oe.type;
    }
    static setup(e) {
        const a = new _r({ configuration: oe.getConfiguration(e), dataSpecAndDefaults: new xr() });
        return new oe(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return oe.___getCached({ type: aa, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return oe.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => oe.setup(e);
        return oe._getCachedOrEmpty(c(l({}, e), { type: aa, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => oe.setup({ ownerId: a, workspaceId: i, id: m.id });
        return oe._getNew({ type: aa, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
    load() {
        return o(this, null, function* () {
            yield G(oe.prototype, this, "load").call(this), this.recalcTimeLeft();
        });
    }
    recalcTimeLeft() {
        this.millisecondsLeft.value = this.currentInterval.value.milliseconds + this.millisecondsDelta.value - this.millisecondsCumulative.value - this.millisecondsElapsed.value;
    }
    nextInterval() {
        this.intervalIndex.value++, (this.millisecondsCumulative.value = 0), (this.millisecondsDelta.value = 0), (this.millisecondsElapsed.value = 0), this.start(), this.recalcTimeLeft();
    }
    get sounds() {
        return [
            { title: "Muted", sound: S.MUTED },
            { title: "Ding dong", sound: S.DINGDONG },
            { title: "Alarm clock", sound: S.ALARM },
            { title: "Cow bell", sound: S.COWBELL },
            { title: "Buzzer", sound: S.BUZZER },
            { title: "Kitchen timer", sound: S.EGG },
            { title: "Coin taken (gamified)", sound: S.COIN },
            { title: "Mario tune (gamified)", sound: S.MARIO },
            { title: "Harp", sound: S.HARP },
            { title: "Arabic", sound: S.ARABIC },
            { title: "Western", sound: S.COUNTRY },
            { title: "Tropical", sound: S.TROPICAL },
            { title: "Cricket", sound: S.CRICKET },
            { title: "Gong", sound: S.GONG },
        ];
    }
}
const sa = "WIDGET_TRAFFIC_LIGHT_V1";
class Pr extends q {
    constructor() {
        super(...arguments);
        s(this, "lightColor", "off");
        s(this, "design", "model-1");
        s(this, "isDescriptionsEnabled", !1);
        s(this, "descriptionRed", "");
        s(this, "descriptionYellow", "");
        s(this, "descriptionGreen", "");
    }
}
class Tr extends K {}
class ve extends E {
    constructor(e) {
        super(e);
        s(this, "lightColor", this.data.dataComputed.lightColor);
        s(this, "design", this.data.dataComputed.design);
        s(this, "isDescriptionsEnabled", this.data.dataComputed.isDescriptionsEnabled);
        s(this, "descriptionRed", this.data.dataComputed.descriptionRed);
        s(this, "descriptionYellow", this.data.dataComputed.descriptionYellow);
        s(this, "descriptionGreen", this.data.dataComputed.descriptionGreen);
        s(
            this,
            "isAspectRatioLocked",
            computed(() => this.settings.hasLockedAspectRatio && !this.isDescriptionsEnabled.value)
        );
        s(this, "selectGreen", () => this.selectColor({ lightColor: "green" }));
        s(this, "selectYellow", () => this.selectColor({ lightColor: "yellow" }));
        s(this, "selectRed", () => this.selectColor({ lightColor: "red" }));
        s(this, "selectColor", (e) => {
            this.lightColor.value = this.lightColor.value === e.lightColor ? "off" : e.lightColor;
        });
    }
    static getConfiguration(e) {
        const a = ve.getPerWorkspaceConfiguration(c(l({}, e), { type: ve.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-traffic-light-v1/${e.id}` },
                { type: "https", function: "migrateWidgetTrafficLightGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 343 / 2,
            initialHeight: 343,
            minWidth: 180 / 2,
            initialWidth: 180,
            initialX: 1920 - 300 - 50 - 20 - 180,
            initialY: 190,
            initialZ: 10,
            hasLockedAspectRatio: !0,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return ve.settings;
    }
    static get type() {
        return sa;
    }
    get type() {
        return ve.type;
    }
    static setup(e) {
        const a = new Tr({ configuration: ve.getConfiguration(e), dataSpecAndDefaults: new Pr() });
        return new ve(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return ve.___getCached({ type: sa, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return ve.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => ve.setup(e);
        return ve._getCachedOrEmpty(c(l({}, e), { type: sa, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => ve.setup({ ownerId: a, workspaceId: i, id: m.id });
        return ve._getNew({ type: sa, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
const ia = "WIDGET_VIDEO_V1";
class Ar extends q {
    constructor() {
        super(...arguments);
        s(this, "rawCode", "");
        s(this, "code", null);
        s(this, "timePlayed", 0);
    }
}
class Dr extends K {}
class we extends E {
    constructor(e) {
        super(e);
        s(
            this,
            "isSelectionOverlayVisible",
            computed(() => (e) => this.settings.hasSelectionOverlay && !this.isActive.value(e) && this.isSourceValid.value)
        );
        s(this, "rawCode", this.data.dataComputed.rawCode);
        s(this, "code", this.data.dataComputed.code);
        s(this, "timePlayed", this.data.dataComputed.timePlayed);
        s(this, "source", ref(null));
        s(this, "isProcessing", ref(!1));
        s(
            this,
            "isSourceValid",
            computed(() => {
                var e, a;
                return ((a = (e = this.source.value) == null ? void 0 : e.length) != null ? a : 0) > 0;
            })
        );
        s(
            this,
            "isSourceInvalid",
            computed(() => {
                var e;
                return ((e = this.source.value) == null ? void 0 : e.length) === 0;
            })
        );
        s(this, "feedback", ref("Please enter a YouTube id or url"));
    }
    static getConfiguration(e) {
        const a = we.getPerWorkspaceConfiguration(c(l({}, e), { type: we.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-video-v1/${e.id}` },
                { type: "https", function: "migrateWidgetVideoGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 108,
            initialHeight: 315,
            minWidth: 192,
            initialWidth: 560,
            initialX: 1920 - 100 - 560,
            initialY: 230,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            hasSelectionOverlay: !0,
            isDraggableWithButton: !1,
            isRotatable: !1,
            isPinnable: !1,
            openSettingsOnCreate: !1,
        });
    }
    get settings() {
        return we.settings;
    }
    static get type() {
        return ia;
    }
    get type() {
        return we.type;
    }
    static setup(e) {
        const a = new Dr({ configuration: we.getConfiguration(e), dataSpecAndDefaults: new Ar() }),
            i = new we(c(l({}, e), { data: a })),
            n = ft(() => i.processCode(), 1e3);
        return (
            onMounted(() => {
                watch(
                    i.code,
                    () => {
                        (i.feedback.value = "Processing..."), (i.isProcessing.value = !0), n();
                    },
                    { immediate: !0 }
                );
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return we.___getCached({ type: ia, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return we.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => we.setup(e);
        return we._getCachedOrEmpty(c(l({}, e), { type: ia, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => we.setup({ ownerId: a, workspaceId: i, id: m.id });
        return we._getNew({ type: ia, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
    processCode() {
        var e, a, i;
        if (this.code.value === null) {
            (this.source.value = null), (this.feedback.value = "Please enter a YouTube id or url"), (this.isProcessing.value = !1);
            return;
        }
        if (((this.source.value = (a = (e = this.code.value) == null ? void 0 : e.trim()) != null ? a : ""), this.source.value.includes("/"))) {
            const h = [...((i = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/.exec(this.source.value)) != null ? i : [])];
            h.length > 5 ? (this.source.value = h[5]) : (this.source.value = "");
        }
        (this.feedback.value = this.code.value === null ? "Please enter a YouTube id or url" : this.isSourceValid.value ? "Video updated" : "Please enter a YouTube id or url"), (this.isProcessing.value = !1);
    }
}
const ra = "WIDGET_WEBCAM_V1";
class kr extends q {
    constructor() {
        super(...arguments);
        s(this, "preferredCameraId", null);
    }
}
class Lr extends K {}
class ye extends E {
    constructor(e) {
        super(e);
        s(
            this,
            "preferredCameraId",
            computed({
                get: () => {
                    var e;
                    return (e = this.data.dataComputed.preferredCameraId.value) != null ? e : u.getUserPreferences().webcamPreferredCameraId.value;
                },
                set: (e) => {
                    (u.getUserPreferences().webcamPreferredCameraId.value = e), (this.data.dataComputed.preferredCameraId.value = e);
                },
            })
        );
        s(
            this,
            "videoElementId",
            computed(() => `webcam-video-${this.id}`)
        );
        s(this, "hasStream", ref(!1));
    }
    static getConfiguration(e) {
        const a = ye.getPerWorkspaceConfiguration(c(l({}, e), { type: ye.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-webcam-v1/${e.id}` },
                { type: "https", function: "migrateWidgetWebcamGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 108,
            initialHeight: 108 * 2.5,
            minWidth: 192,
            initialWidth: 192 * 2.5,
            initialX: (1920 - 320) / 2,
            initialY: 240,
            initialZ: 10,
            hasLockedAspectRatio: !1,
            isDraggableWithButton: !1,
            isFlippable: !0,
            isPinnable: !1,
            rotationStep: 90,
        });
    }
    get settings() {
        return ye.settings;
    }
    static get type() {
        return ra;
    }
    get type() {
        return ye.type;
    }
    static setup(e) {
        const a = new Lr({ configuration: ye.getConfiguration(e), dataSpecAndDefaults: new kr() }),
            i = new ye(c(l({}, e), { data: a })),
            n = ref(!1),
            { videoInputs: d } = Us({ constraints: { audio: !1, video: !0 }, requestPermissions: !0 }),
            h = computed(() => {
                var v, I;
                return (I = i.preferredCameraId.value) != null ? I : (v = d.value[0]) == null ? void 0 : v.deviceId;
            }),
            { stream: m } = Gs({ videoDeviceId: h, audioDeviceId: !1, autoSwitch: !0, enabled: n });
        return (
            onMounted(() => {
                watch(
                    [i.isMounted, m],
                    () =>
                        o(this, null, function* () {
                            if (i.isMounted.value) {
                                n.value = !0;
                                const v = document.getElementById(i.videoElementId.value);
                                v && m.value && ((v.srcObject = m.value), (i.hasStream.value = !0));
                            } else u.utils.isIOS ? ((n.value = !1), (i.hasStream.value = !1)) : (yield u.utils.sleep(5e3), i.isMounted.value || ((n.value = !1), (i.hasStream.value = !1)));
                        }),
                    { immediate: !0 }
                );
            }),
            i
        );
    }
    static getCachedOrError(e) {
        return ye.___getCached({ type: ra, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return ye.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => ye.setup(e);
        return ye._getCachedOrEmpty(c(l({}, e), { type: ra, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => ye.setup({ ownerId: a, workspaceId: i, id: m.id });
        return ye._getNew({ type: ra, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
const na = "WIDGET_WORK_SYMBOLS_V1";
class Rr extends q {
    constructor() {
        super(...arguments);
        s(this, "option", "silence");
        s(this, "optionType", "classic");
    }
}
class Or extends K {}
class be extends E {
    constructor(e) {
        super(e);
        s(this, "option", this.data.dataComputed.option);
        s(this, "optionType", this.data.dataComputed.optionType);
    }
    static getConfiguration(e) {
        const a = be.getPerWorkspaceConfiguration(c(l({}, e), { type: be.type }));
        return c(l({}, a), {
            endpoints: [
                { type: "firestore", path: `user-data/${e.ownerId}/workspace-data/${e.workspaceId}/widget-work-symbols-v1/${e.id}` },
                { type: "https", function: "migrateWidgetWorkSymbolsGetV2", functionArgs: { compoundWidgetId: e.id } },
            ],
        });
    }
    static get settings() {
        return c(l({}, E.settings), {
            minHeight: 200,
            initialHeight: 400,
            minWidth: 160,
            initialWidth: 320,
            initialX: (1920 - 550) / 2 + 550 - 320,
            initialY: 140 + 400 + 20 + 300 - 400,
            initialZ: 10,
            hasLockedAspectRatio: !0,
            isDraggableWithButton: !1,
            isRotatable: !1,
        });
    }
    get settings() {
        return be.settings;
    }
    static get type() {
        return na;
    }
    get type() {
        return be.type;
    }
    static setup(e) {
        const a = new Or({ configuration: be.getConfiguration(e), dataSpecAndDefaults: new Rr() });
        return new be(c(l({}, e), { data: a }));
    }
    static getCachedOrError(e) {
        return be.___getCached({ type: na, id: e.id });
    }
    static getCachedOrNull(e) {
        try {
            return be.getCachedOrError(e);
        } catch (a) {
            return null;
        }
    }
    static getCachedOrEmpty(e) {
        const a = () => be.setup(e);
        return be._getCachedOrEmpty(c(l({}, e), { type: na, id: e.id, setup: a })).bo;
    }
    static getNew(e) {
        const { ownerId: a, workspaceId: i, screenId: n, screenGroupId: d } = e,
            h = (m) => be.setup({ ownerId: a, workspaceId: i, id: m.id });
        return be._getNew({ type: na, setup: h, ownerId: a, workspaceId: i, screenId: n, screenGroupId: d });
    }
}
class Te {
    static getBoForType(t) {
        switch (t.type) {
            case "WIDGET_BACKGROUND_V1":
                throw new y({ message: "Cannot instantiate background" });
            case "WIDGET_CALENDAR_V1":
                return ce;
            case "WIDGET_CLOCK_V1":
                return ue;
            case "WIDGET_DICE_V1":
                return le;
            case "WIDGET_DRAW_V0":
                return ca;
            case "WIDGET_DRAW_V1":
                return ua;
            case "WIDGET_EMBED_V1":
                return ne;
            case "WIDGET_GROUP_MAKER_V1":
                return At;
            case "WIDGET_IMAGE_V1":
                return he;
            case "WIDGET_POLL_V1":
                return j;
            case "WIDGET_QR_CODE_V1":
                return pe;
            case "WIDGET_RANDOM_NAME_V1":
                return ge;
            case "WIDGET_SOUND_LEVEL_V1":
                return me;
            case "WIDGET_STOPWATCH_V1":
                return fe;
            case "WIDGET_TEXT_V1":
                return Qe;
            case "WIDGET_TIMER_V1":
                return oe;
            case "WIDGET_TRAFFIC_LIGHT_V1":
                return ve;
            case "WIDGET_VIDEO_V1":
                return we;
            case "WIDGET_WEBCAM_V1":
                return ye;
            case "WIDGET_WORK_SYMBOLS_V1":
                return be;
            default:
                throw new Q(t.type, "Unexaustive switch detected");
        }
    }
    static getNew(t) {
        return Te.getBoForType({ type: t.type }).getNew(t);
    }
    static getCachedOrEmpty(t) {
        return Te.getBoForType({ type: t.type }).getCachedOrEmpty(t);
    }
    static getCachedOrNull(t) {
        return Te.getBoForType({ type: t.type }).getCachedOrNull(t);
    }
    static getCachedOrError(t) {
        return Te.getBoForType({ type: t.type }).getCachedOrError(t);
    }
}
class ys extends vt {
    constructor(e) {
        super({ host: e.host, infos: e.widgets });
        s(this, "create", (e) => {
            const a = Te.getNew({
                type: e.type,
                ownerId: this.host.ownerId,
                workspaceId: this.host.workspaceId,
                screenGroupId: this.host.type === "SCREEN_GROUP_V1" ? this.host.id : void 0,
                screenId: this.host.type === "SCREEN_V1" ? this.host.id : void 0,
            });
            let i = a.settings.initialX,
                n = a.settings.initialY;
            if (
                (this.all.value.find((d) => d.x === a.settings.initialX && d.y == a.settings.initialY) && ((i += Math.min(50, Math.max(-50, 75 * (Math.random() - 0.5)))), (n += Math.min(50, Math.max(-50, 75 * (Math.random() - 0.5))))),
                this.add({ info: { type: a.type, id: a.id, height: a.settings.initialHeight, width: a.settings.initialWidth, x: i, y: n, z: {}, rotation: 0, themeId: u.getUserPreferences().defaultThemeId.value } }),
                this.host.type === "SCREEN_V1")
            ) {
                const d = u.screen.getCachedOrError({ id: this.host.id });
                a.activate({ screen: d });
            }
            return a;
        });
        s(this, "move", (e) =>
            o(this, null, function* () {
                const { info: a } = this.get({ id: e.widgetId }),
                    i = Te.getCachedOrEmpty({ ownerId: this.host.ownerId, workspaceId: this.host.workspaceId, type: a.type, id: e.widgetId }),
                    n = e.to.type === "SCREEN_GROUP_V1" ? u.screenGroup.getCachedOrNull({ id: e.to.id }) : u.screen.getCachedOrNull({ id: e.to.id });
                if (n) {
                    n.widgets.add({ info: a }), this.remove({ id: a.id }), i.updateParent({ parent: { ownerId: this.host.ownerId, workspaceId: this.host.workspaceId, type: n.type, id: n.id }, triggerSave: !0 });
                    const d = Oe.getCachedObjectOrNull(this.host);
                    d && (yield Promise.all([i.save(), n.save(), d.save()]));
                }
            })
        );
        s(this, "getIdsInArea", (e) => this.untrashed.value.filter((a) => a.x > e.startX && a.x + a.width < e.endX && a.y > e.startY && a.y + a.height < e.endY).map((a) => a.id));
        s(this, "getPreview", (e) => {
            const a = this.untrashed.value
                .map((i) => {
                    const n = Math.min(u.grid.height, i.y + i.height) - Math.max(0, i.y),
                        d = Math.min(u.grid.width, i.x + i.width) - Math.max(0, i.x);
                    return l({ visibleArea: n * d }, i);
                })
                .filter((i) => i.visibleArea > 0)
                .sort((i, n) => n.visibleArea - i.visibleArea)
                .slice(0, e.maxWidgets)
                .sort((i, n) => {
                    var m, v;
                    const d = (m = i.z[this.host.id]) != null ? m : 9999999999,
                        h = (v = n.z[this.host.id]) != null ? v : 9999999999;
                    return d - h;
                })
                .map((i) => ({ t: i.type, h: i.height, w: i.width, x: i.x, y: i.y, th: i.themeId }));
            return { h: vs({ text: JSON.stringify(a) }), w: a };
        });
        s(this, "save", () =>
            o(this, null, function* () {
                yield Promise.all(
                    this.infos.value
                        .map((e) => Te.getCachedOrNull(e))
                        .filter((e) => e && e.isLoaded.value)
                        .map((e) => e.save())
                );
            })
        );
        s(this, "onReloadParent", () => {
            this.infos.value
                .map((e) => Te.getCachedOrNull(e))
                .filter((e) => e && e.isLoaded.value)
                .forEach((e) => e.onReloadParent());
        });
        s(
            this,
            "visibleTrafficLightV1Infos",
            computed(() => this.untrashed.value.filter((e) => e.type === "WIDGET_TRAFFIC_LIGHT_V1"))
        );
        s(
            this,
            "untrashedOfType",
            computed(() => (e) => this.untrashed.value.filter((a) => a.type === e))
        );
        s(this, "update", (e) => super.update(e));
    }
    clone(e) {
        return o(this, null, function* () {
            const { info: a } = e.from.parentBO.widgets.get({ id: e.from.widgetId }),
                i = u.widget.getCachedOrEmpty({ ownerId: e.from.parentBO.ownerId, workspaceId: e.from.parentBO.workspaceId, type: a.type, id: a.id });
            i.parent.value, yield i.load();
            const n = i.clone({ parent: this.host }),
                d = c(l({}, _e(a)), { id: n.id });
            return this.add({ info: d }), n;
        });
    }
}
class Fr extends vt {
    constructor(e) {
        super({ host: e.host, infos: e.workspaces });
        s(this, "create", (e) => {
            var i;
            const a = Y.getNew({ ownerId: e.ownerId });
            return this.add({ info: { ownerId: e.ownerId, workspaceId: a.id, type: a.type, id: a.id, title: (i = e.title) != null ? i : "New workspace" } }), a;
        });
        s(this, "update", (e) => super.update(e));
    }
}
const ot = "ROOT_FOR_STUDENT_LISTS",
    lt = "--root-for-student-lists--";
class Wr extends at {
    constructor() {
        super(...arguments);
        s(this, "studentLists", []);
        s(this, "favoriteListId", null);
    }
}
class Ga extends st {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.studentLists.value];
            yield G(Ga.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.studentLists.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.studentLists.value = [...this.dataRefs.studentLists.value, ...a]);
        });
    }
}
const Ye = class extends $ {
    constructor(e) {
        super(e);
        s(this, "studentLists");
        s(this, "favoriteListId", this.data.dataComputed.favoriteListId);
        s(
            this,
            "maximumReached",
            computed(() => !u.user.hasProAccess.value && this.studentLists.untrashed.value.length >= Ye.MAX_STUDENT_LISTS_FREE)
        );
        this.studentLists = new Ke({ host: { type: ot, id: lt }, studentLists: this.data.dataComputed.studentLists });
    }
    static getConfiguration() {
        const e = Ye.getPerUserConfiguration({ id: lt, type: ot });
        return c(l({}, e), {
            endpoints: [
                { type: "firestore", path: `user-data/{{userId}}/student-list-data/${lt}` },
                { type: "https", function: "migrateRootForStudentListsGetV2", functionArgs: {} },
            ],
            allowPersistence: { forAnonymousUser: !1, forFreeUser: !0, forProUser: !0 },
        });
    }
    get type() {
        return ot;
    }
    static get type() {
        return ot;
    }
    static get id() {
        return lt;
    }
    static setup() {
        onMounted(() => {
            watch(e.studentLists.all, (a, i) => {
                if (a.length > 0 && i.length === 0) {
                    const n = De.getCachedOrNull();
                    n && (n.hasUsedNameList.value = !0);
                }
            });
        });
        const e = new Ye({ data: new Ga({ configuration: Ye.getConfiguration(), dataSpecAndDefaults: new Wr() }) });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: e }), e;
    }
    static getCachedOrEmpty() {
        return $.___getCachedOrEmpty({ type: ot, id: lt, setup: Ye.setup }).bo;
    }
    static getCachedOrError() {
        return $.___getCached({ type: ot, id: lt });
    }
    load() {
        return o(this, null, function* () {
            yield G(Ye.prototype, this, "load").call(this), this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && (this.reset(), this.skipLoad());
        });
    }
};
let Ve = Ye;
s(Ve, "MAX_STUDENT_LISTS_FREE", 3);
const dt = "ROOT_FOR_WORKSPACES",
    ct = "--root-for-workspaces--";
class Ur extends at {
    constructor() {
        super(...arguments);
        s(this, "hasV1Data", !1);
        s(this, "workspaces", []);
        s(this, "migrations", []);
    }
}
class Na extends st {
    mergeData() {
        return o(this, null, function* () {
            const t = [...this.dataRefs.workspaces.value];
            yield G(Na.prototype, this, "mergeData").call(this);
            const e = this.dataComputed.workspaces.value.map((i) => i.id),
                a = t.filter((i) => !e.includes(i.id));
            a.length > 0 && (this.dataComputed.workspaces.value = [...this.dataRefs.workspaces.value, ...a]);
        });
    }
}
class J extends $ {
    constructor(e) {
        super(e);
        s(this, "workspaces");
        s(this, "migrations", this.data.dataComputed.migrations);
        s(
            this,
            "isMigrated",
            computed(() => !this.data.dataComputed.hasV1Data.value || this.data.dataComputed.migrations.value.length > 0)
        );
        this.workspaces = new Fr({ host: { type: dt, id: ct }, workspaces: this.data.dataComputed.workspaces });
    }
    static getConfiguration() {
        const e = J.getPerUserConfiguration({ id: ct, type: dt });
        return c(l({}, e), {
            endpoints: [
                { type: "firestore", path: `user-data/{{userId}}/workspace-data/${ct}` },
                { type: "https", function: "migrateRootForWorkspacesGetV2", functionArgs: { screenWidth: u.browserWindow.width.value } },
            ],
        });
    }
    get type() {
        return dt;
    }
    static get type() {
        return dt;
    }
    static get id() {
        return ct;
    }
    static setup() {
        onMounted(() => {
            watch(e.workspaces.all, (a, i) => {
                if (a.length > 1 && i.length <= 1) {
                    const n = De.getCachedOrNull();
                    n && (n.hasUsedWorkspace.value = !0);
                }
            });
        });
        const e = new J({ data: new Na({ configuration: J.getConfiguration(), dataSpecAndDefaults: new Ur() }) });
        return Ue({ isEnabled: u.isAutosaveEnabled, mode: "ALWAYS", object: e }), e;
    }
    static getCachedOrEmpty() {
        return $.___getCachedOrEmpty({ type: dt, id: ct, setup: J.setup }).bo;
    }
    static getCachedOrError() {
        return $.___getCached({ type: dt, id: ct });
    }
    load() {
        return o(this, null, function* () {
            yield G(J.prototype, this, "load").call(this),
                this.loadingError.value && T(this.loadingError.value) && this.loadingError.value.code === 404 && (this.reset(), this.skipLoad()),
                this.workspaces.all.value.length === 0 && this.createWorkspace();
        });
    }
    skipLoad() {
        super.skipLoad(), this.workspaces.all.value.length === 0 && this.createWorkspace();
    }
    onUpgradePro() {
        return o(this, null, function* () {
            yield this.merge(), yield this.save();
        });
    }
    createWorkspace() {
        return this.workspaces.create({ ownerId: u.user.userId.value });
    }
}
const Gr = [
        "WIDGET_BACKGROUND_V1",
        "WIDGET_CALENDAR_V1",
        "WIDGET_CLOCK_V1",
        "WIDGET_DICE_V1",
        "WIDGET_DRAW_V0",
        "WIDGET_DRAW_V1",
        "WIDGET_EMBED_V1",
        "WIDGET_GROUP_MAKER_V1",
        "WIDGET_IMAGE_V1",
        "WIDGET_POLL_V1",
        "WIDGET_QR_CODE_V1",
        "WIDGET_RANDOM_NAME_V1",
        "WIDGET_SOUND_LEVEL_V1",
        "WIDGET_STOPWATCH_V1",
        "WIDGET_TEXT_V1",
        "WIDGET_TIMER_V1",
        "WIDGET_TRAFFIC_LIGHT_V1",
        "WIDGET_WEBCAM_V1",
        "WIDGET_VIDEO_V1",
        "WIDGET_WORK_SYMBOLS_V1",
    ],
    _t = 1920,
    Nr = 16 / 10,
    Mr = 16 / 7,
    Vr = 16 / 12,
    x = class {
        static get sessionId() {
            return x._sessionId;
        }
        static initialize(t) {
            w.initialize(t);
        }
        static restoreSession() {
            return o(this, null, function* () {
                return yield w.restoreSession();
            });
        }
        static get configuration() {
            return w.configuration;
        }
        static get logger() {
            return w.logger;
        }
        static get logAnalytics() {
            return w.logAnalytics;
        }
        static get network() {
            return w.network;
        }
        static get reactivity() {
            return w.reactivity;
        }
        static get user() {
            return w.user;
        }
        static get isIOS() {
            return /Mac|iPad|iPhone|iPod/.test(navigator.platform);
        }
        static get isSafari() {
            return this.isIOS && !/crios|fxios/.test(navigator.userAgent.toLowerCase());
        }
        static isTouchDevice() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0;
        }
        static get utils() {
            return c(l({}, w.utils), { isIOS: this.isIOS, isSafari: this.isSafari, isTouchDevice: this.isTouchDevice() });
        }
        static get zIndexes() {
            return {
                widgetInitial: 10,
                spotlightOverlay: We(10, 6) + 90,
                spotlightedWidget: We(10, 6) + 95,
                screenButtons: We(10, 6) + 100,
                widgetBar: We(10, 6) + 110,
                backgroundModal: We(10, 6) + 120,
                widgetSettings: We(10, 6) + 130,
                screenSettings: We(10, 6) + 150,
                confirmationDialogs: We(10, 6) + 999,
            };
        }
    };
let u = x;
s(u, "_sessionId", Lt()),
    s(u, "getUserPreferences", () => ke.getCachedOrError()),
    s(u, "getRootForStudentLists", () => Ve.getCachedOrError()),
    s(u, "getRootForScreenBackgrounds", () => Le.getCachedOrError()),
    s(u, "getRootForWidgetImages", () => ze.getCachedOrError()),
    s(u, "getRootForWorkspaces", () => J.getCachedOrError()),
    s(u, "workspace", { getCachedOrEmpty: (t) => Y.getCachedOrEmpty(t), getCachedOrError: (t) => Y.getCachedOrError(t), getCachedOrNull: (t) => Y.getCachedOrNull(t), getNew: (t) => Y.getNew(t) }),
    s(u, "screenGroup", { getCachedOrEmpty: (t) => z.getCachedOrEmpty(t), getCachedOrError: (t) => z.getCachedOrError(t), getCachedOrNull: (t) => z.getCachedOrNull(t), getNew: (t) => z.getNew(t) }),
    s(u, "screen", { getCachedOrEmpty: (t) => re.getCachedOrEmpty(t), getCachedOrError: (t) => re.getCachedOrError(t), getCachedOrNull: (t) => re.getCachedOrNull(t), getNew: (t) => re.getNew(t) }),
    s(u, "widget", { getCachedOrEmpty: (t) => Te.getCachedOrEmpty(t), getCachedOrError: (t) => Te.getCachedOrError(t), getCachedOrNull: (t) => Te.getCachedOrNull(t), getNew: (t) => Te.getNew(t) }),
    s(u, "gridHeight", _t / Nr),
    s(
        u,
        "gridOffsetX",
        computed(() => {
            switch (x.windowShape.value) {
                case "wide":
                    return (x.windowWidth.value - _t * x.gridScale.value) / 2;
                case "narrow":
                    return 0;
                case "regular":
                default:
                    return 0;
            }
        })
    ),
    s(
        u,
        "gridOffsetY",
        computed(() => {
            switch (x.windowShape.value) {
                case "wide":
                    return 0;
                case "narrow":
                    return (x.windowHeight.value - x.gridHeight * x.gridScale.value) / 2;
                case "regular":
                default:
                    return 0;
            }
        })
    ),
    s(
        u,
        "gridScale",
        computed(() => {
            switch (x.windowShape.value) {
                case "wide":
                    return x.windowHeight.value / x.gridHeight;
                case "narrow":
                    return x.windowWidth.value / _t;
                case "regular":
                default:
                    return x.windowWidth.value / _t;
            }
        })
    ),
    s(
        u,
        "windowAspectRatio",
        computed(() => x.windowWidth.value / x.windowHeight.value)
    ),
    s(u, "windowSize", Ns()),
    s(u, "windowHeight", x.windowSize.height),
    s(u, "windowWidth", x.windowSize.width),
    s(
        u,
        "windowShape",
        computed(() => (x.windowAspectRatio.value < Vr ? "narrow" : x.windowAspectRatio.value > Mr ? "wide" : "regular"))
    ),
    s(u, "browserWindow", {
        aspectRatio: x.windowAspectRatio,
        height: x.windowHeight,
        orientation: computed(() => (x.windowHeight.value / x.windowWidth.value > 1 ? "portait" : "landscape")),
        size: computed(() => (x.windowWidth.value >= 1536 ? "2xl" : x.windowWidth.value >= 1280 ? "xl" : x.windowWidth.value >= 1024 ? "lg" : x.windowWidth.value >= 768 ? "md" : x.windowWidth.value >= 640 ? "sm" : "xs")),
        width: x.windowWidth,
    }),
    s(u, "grid", { height: x.gridHeight, width: _t, offsetX: x.gridOffsetX, offsetY: x.gridOffsetY, scale: x.gridScale }),
    s(u, "isAutosaveEnabled", ref(!0)),
    s(u, "lastOpenedScreenId", ref(null));
const $r = { class: "flex h-full items-center justify-center" },
    zr = { class: "flex flex-row items-center justify-center" },
    Br = { key: 0, class: "-mt-3 h-6 w-6 animate-spin rounded-full border-2 border-t-2 border-gray-300 border-t-primary-500 ease-linear" },
    Ma = Fe({
        setup(r) {
            onMounted(() =>
                o(this, null, function* () {
                    yield u.utils.sleep(500), (t.value = !0);
                })
            );
            const t = ref(!1);
            return (e, a) => (L(), V("div", $r, [_("div", zr, [ie(us, { name: "fade" }, { default: de(() => [t.value ? (L(), V("div", Br)) : $e("", !0)]), _: 1 })])]));
        },
    }),
    jr = Fe({
        setup(r) {
            onMounted(() =>
                o(this, null, function* () {
                    if (
                        (u.logAnalytics({ eventName: "app start", eventParams: {} }),
                        u.user.isLoggedIn.value && (yield j.initializeRoomIfNeeded()),
                        yield Promise.all([Ze(a.timerDefaultAlarmSound.value), Ze(S.DICE), Ze(S.PING), Ze(S.RANDOM_NAME_1), Ze(S.TRAFFIC_LIGHT), Ze(S.WORK_SYMBOLS)]),
                        u.user.isLoggedIn.value && Promise.all([a.resumeProcessingImages(), i.resumeProcessingImages(), n.resumeProcessingImages()]),
                        (!u.user.isLoggedIn.value && t.currentRoute.value.meta.forwardAnonymous) || (!u.user.hasProAccess.value && t.currentRoute.value.meta.forwardFree))
                    ) {
                        const h = J.getCachedOrEmpty();
                        yield h.load(), h.workspaces.untrashed.value.length === 0 && h.workspaces.create({ ownerId: "null" });
                        const m = h.workspaces.untrashed.value[0],
                            v = u.workspace.getCachedOrEmpty({ ownerId: "anonymous", id: m.id });
                        yield v.load(), v.screenGroups.untrashed.value.length === 0 && v.screenGroups.create({});
                        const I = v.screenGroups.untrashed.value[0],
                            C = u.screenGroup.getCachedOrEmpty({ ownerId: v.ownerId, workspaceId: v.id, id: I.id });
                        yield C.load();
                        const O = C.screens.create({});
                        yield t.replace({ name: "home" }), yield t.replace({ name: "screen", params: { workspaceId: v.id, screenGroupId: C.id, screenId: O.id } });
                    }
                    const d = document.getElementById("app-splash-text");
                    d && (d.textContent = "Loading data"), (e.value = !0);
                })
            );
            const t = pa(),
                e = ref(!1),
                a = u.getUserPreferences(),
                i = u.getRootForScreenBackgrounds(),
                n = u.getRootForWidgetImages();
            return (
                Ms({
                    title: "Classroomscreen",
                    link: [
                        { rel: "shortcut icon", type: "image/png", href: "https://static.classroomscreen.com/favicon-v2.png" },
                        { rel: "apple-touch-icon", type: "image/png", href: "https://static.classroomscreen.com/favicon-v2.png" },
                    ],
                    meta: [{ name: "theme-color", content: a.dashboardStyle.value.hex }],
                }),
                (d, h) => {
                    const m = Vs("router-view");
                    return L(), gt(m, null, { default: de(({ Component: v }) => [(L(), gt($s(v)))]), _: 1 });
                }
            );
        },
    }),
    Hr = Fe({
        setup(r) {
            return (
                onMounted(() =>
                    o(this, null, function* () {
                        const t = document.getElementById("app-splash");
                        t && (t.setAttribute("data-ready", "1"), t.getAttribute("animation-ready") && t.remove()), De.getCachedOrEmpty().load();
                    })
                ),
                (t, e) => Pe(t.$slots, "default")
            );
        },
    }),
    Yr = { class: "absolute inset-0" },
    Jr = Fe({
        props: { businessObjects: { type: Object, required: !0 } },
        setup(r) {
            const t = r;
            onMounted(() =>
                o(this, null, function* () {
                    yield Promise.all(
                        t.businessObjects.map((a) =>
                            o(this, null, function* () {
                                return a.load();
                            })
                        )
                    ),
                        (e.value = !1);
                })
            );
            const e = ref(!0);
            return (a, i) => (e.value ? Pe(a.$slots, "loading", { key: 0 }, () => [_("div", Yr, [ie(Ma)])]) : Pe(a.$slots, "default", { key: 1 }));
        },
    }),
    qr = { class: "relative h-full w-full" },
    Kr = { key: 0, class: "h-full w-full" },
    Va = Fe({
        props: {
            color: { type: String, default: "white" },
            size: { type: String, default: "md" },
            loading: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            outlined: { type: Boolean, default: !1 },
            text: { type: Boolean, default: !1 },
            icon: { type: Boolean, default: !1 },
            iconPost: { type: Boolean, default: !1 },
            fab: { type: Boolean, default: !1 },
            hideFocus: { type: Boolean, default: !1 },
        },
        setup(r) {
            const t = r,
                e = ref(null),
                a = (D) => {
                    t.disabled && D.stopImmediatePropagation();
                },
                i = computed(() => "focus-visible:outline-none border " + (t.hideFocus || t.disabled ? "" : "focus-visible:ring-offset-2 focus-visible:ring-2") + " " + (t.disabled ? "cursor-disabled" : "cursor-pointer")),
                n = computed(() => {
                    switch (t.size) {
                        case "2xl":
                            return t.fab ? "h-12 w-12 p-2.5" : "h-14 px-4 py-2 text-lg";
                        case "xl":
                            return t.fab ? "h-10 w-10 p-2" : "h-14 px-4 py-2 text-lg";
                        case "lg":
                            return t.fab ? "h-9 w-9 p-[7px]" : "h-12 px-4 py-[7px] text-base";
                        case "md":
                            return t.fab ? "h-8 w-8 p-1.5" : "h-11 px-4 py-1.5 text-sm";
                        case "sm":
                            return t.fab ? "h-7 w-7 p-[5px]" : "h-10 px-3 py-[5px] text-sm";
                        case "xs":
                            return t.fab ? "h-6 w-6 p-1" : "h-9 px-2 py-1 text-xs";
                        default:
                            return t.fab ? "h-8 w-8 p-1.5" : "h-11 px-4 py-1.5 text-md";
                    }
                }),
                d = computed(() => {
                    switch (t.size) {
                        case "2xl":
                            return "h-9 w-9";
                        case "xl":
                            return "h-8 w-8";
                        case "lg":
                            return "h-7 w-7";
                        case "md":
                            return "h-5 w-5";
                        case "sm":
                            return "h-4 w-4";
                        case "xs":
                            return "h-4 w-4";
                        default:
                            return "h-5 w-5";
                    }
                }),
                h = computed(() => {
                    switch (t.size) {
                        case "2xl":
                            return "mr-2";
                        case "xl":
                            return "mr-2";
                        case "lg":
                            return "mr-2";
                        case "md":
                            return "mr-2";
                        case "sm":
                            return "mr-1.5";
                        case "xs":
                            return "mr-1";
                        default:
                            return "mr-2";
                    }
                }),
                m = computed(() => {
                    switch (t.size) {
                        case "2xl":
                            return "ml-2";
                        case "xl":
                            return "ml-2";
                        case "lg":
                            return "ml-2";
                        case "md":
                            return "ml-2";
                        case "sm":
                            return "ml-1.5";
                        case "xs":
                            return "ml-1";
                        default:
                            return "ml-2";
                    }
                }),
                v = computed(() => "rounded-full"),
                I = computed(() => {
                    if (t.disabled) return "bg-gray-100";
                    if (t.outlined || t.text)
                        switch (t.color) {
                            case "white":
                                return "hover:bg-gray-600/10 active:bg-gray-600/20";
                            case "lightgray":
                                return "hover:bg-gray-600/10 active:bg-gray-600/20";
                            case "gray":
                                return "hover:bg-gray-800/10 active:bg-gray-600/20";
                            case "lightblue":
                                return "hover:bg-lightblue-600/10 active:bg-lightblue-600/20";
                            case "primary":
                                return "hover:bg-primary-500/10 active:bg-primary-500/20";
                            case "secondary":
                                return "hover:bg-secondary-500/10 active:bg-secondary-500/20";
                            case "tertiary":
                                return "hover:bg-tertiary-500/10 active:bg-tertiary-500/20";
                            case "red":
                                return "hover:bg-red-600/10 active:bg-red-600/20";
                            default:
                                return "hover:bg-gray-800/10 active:bg-gray-600/20";
                        }
                    switch (t.color) {
                        case "stealth":
                            return "bg-black/30 hover:bg-black/40 focus-visible:ring-black/50 focus-visible:ring-offset-white/30";
                        case "white":
                            return "bg-white hover:bg-gray-100 active:bg-gray-300 focus-visible:ring-gray-600";
                        case "lightgray":
                            return "bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus-visible:ring-gray-600";
                        case "gray":
                            return "bg-gray-800 hover:bg-gray-900 active:bg-gray-950 focus-visible:ring-gray-800";
                        case "lightblue":
                            return "bg-lightblue-600 hover:bg-lightblue-700 active:bg-lightblue-900 focus-visible:ring-lightblue-600";
                        case "primary":
                            return "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 focus-visible:ring-primary-500";
                        case "secondary":
                            return "bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 focus-visible:ring-secondary-500";
                        case "tertiary":
                            return "bg-tertiary-500 hover:bg-tertiary-600 active:bg-tertiary-700 focus-visible:ring-tertiary-500";
                        case "red":
                            return "bg-red-600 hover:bg-red-800 active:bg-red-900 focus-visible:ring-red-600";
                        default:
                            return "bg-gray-800 hover:bg-gray-900 active:bg-gray-950 focus-visible:ring-gray-800";
                    }
                }),
                C = computed(() => {
                    if (t.disabled) return "text-gray-400 border-gray-200";
                    if (t.outlined)
                        switch (t.color) {
                            case "white":
                                return "text-white border-white hover:text-gray-200 focus-visible:ring-white";
                            case "lightgray":
                                return "text-gray-600 border-gray-600 hover:text-gray-500 focus-visible:ring-gray-600";
                            case "gray":
                                return "text-gray-800 border-gray-600 hover:text-gray-700 focus-visible:ring-gray-600";
                            case "lightblue":
                                return "text-lightblue-600 border-lightblue-600 hover:text-lightblue-700 focus-visible:ring-lightblue-600";
                            case "primary":
                                return "text-primary-500 border-primary-500 hover:text-primary-600 focus-visible:ring-primary-500";
                            case "secondary":
                                return "text-secondary-500 border-secondary-500 hover:text-secondary-600 focus-visible:ring-secondary-500";
                            case "tertiary":
                                return "text-tertiary-500 border-tertiary-500 hover:text-tertiary-600 focus-visible:ring-tertiary-500";
                            case "red":
                                return "text-red-600 border-red-600 hover:text-red-800 focus-visible:ring-red-600";
                            default:
                                return "text-gray-800 border-gray-600 hover:text-gray-700 focus-visible:ring-gray-600";
                        }
                    if (t.text)
                        switch (t.color) {
                            case "white":
                                return "text-white border-0 hover:text-gray-200 focus-visible:ring-white";
                            case "lightgray":
                                return "text-gray-500 border-0 hover:text-gray-600 focus-visible:ring-gray-500";
                            case "gray":
                                return "text-gray-800 border-0 hover:text-gray-700 focus-visible:ring-gray-800";
                            case "lightblue":
                                return "text-lightblue-600 border-0 hover:text-lightblue-700 focus-visible:ring-lightblue-600";
                            case "primary":
                                return "text-primary-500 border-0 hover:text-primary-600 focus-visible:ring-primary-500";
                            case "secondary":
                                return "text-secondary-500 border-0 hover:text-secondary-600 focus-visible:ring-secondary-500";
                            case "tertiary":
                                return "text-tertiary-500 border-0 hover:text-tertiary-600 focus-visible:ring-tertiary-500";
                            case "red":
                                return "text-red-600 border-0 hover:text-red-800 focus-visible:ring-red-600";
                            default:
                                return "text-gray-800 border-0 hover:text-gray-700 focus-visible:ring-gray-800";
                        }
                    switch (t.color) {
                        case "stealth":
                        case "lightgray":
                        case "gray":
                        case "lightblue":
                        case "primary":
                        case "secondary":
                        case "tertiary":
                        case "red":
                            return "text-white border-transparent";
                        case "white":
                            return "text-gray-800 border-gray-500";
                        default:
                            return "text-white border-transparent";
                    }
                }),
                O = computed(() => {
                    if (t.disabled) return "border-gray-200 border-t-gray-400";
                    if (t.outlined)
                        switch (t.color) {
                            case "white":
                                return "border-gray-200 border-t-gray-400";
                            case "lightgray":
                                return "border-gray-200 border-t-gray-600";
                            case "gray":
                                return "border-gray-200 border-t-gray-600";
                            case "primary":
                                return "border-primary-100 border-t-primary-500";
                            case "secondary":
                                return "border-secondary-100 border-t-secondary-500";
                            case "tertiary":
                                return "border-tertiary-100 border-t-tertiary-500";
                            case "red":
                                return "border-red-100 border-t-red-600";
                            default:
                                return "border-gray-200 border-t-gray-600";
                        }
                    else
                        switch (t.color) {
                            case "white":
                                return "border-gray-400 border-t-white";
                            case "lightgray":
                                return "border-gray-400 border-t-white";
                            case "gray":
                                return "border-gray-400 border-t-white";
                            case "primary":
                                return "border-primary-300 border-t-white";
                            case "secondary":
                                return "border-secondary-300 border-t-white";
                            case "tertiary":
                                return "border-tertiary-300 border-t-white";
                            case "red":
                                return "border-red-300 border-t-white";
                            default:
                                return "border-gray-400 border-t-white";
                        }
                }),
                U = computed(() => "font-semibold");
            return (D, Ge) => (
                L(),
                V(
                    "button",
                    { onClick: a, type: "button", ref_key: "el", ref: e, class: ut([k(i), k(n), k(I), k(v), k(C), k(U)]) },
                    [
                        _("div", qr, [
                            _(
                                "div",
                                { class: ut(["flex h-full w-full flex-row items-center justify-center", r.loading ? "opacity-0" : null]) },
                                [
                                    r.fab
                                        ? (L(), V("div", Kr, [Pe(D.$slots, "default")]))
                                        : (L(),
                                          V(
                                              _a,
                                              { key: 1 },
                                              [
                                                  r.icon ? (L(), V("div", { key: 0, class: ut([k(d), k(h)]) }, [Pe(D.$slots, "pre")], 2)) : $e("", !0),
                                                  Pe(D.$slots, "default"),
                                                  r.iconPost ? (L(), V("div", { key: 1, class: ut([k(d), k(m)]) }, [Pe(D.$slots, "post")], 2)) : $e("", !0),
                                              ],
                                              64
                                          )),
                                ],
                                2
                            ),
                            r.loading
                                ? (L(),
                                  V("div", { key: 0, class: ut(["absolute top-0 left-0 h-6 w-6 animate-spin rounded-full border-2 border-t-2 ease-linear", k(O)]), style: { top: "calc(50% - 12px)", left: "calc(50% - 12px)" } }, null, 2))
                                : $e("", !0),
                        ]),
                    ],
                    2
                )
            );
        },
    }),
    Xr = { class: "absolute inset-0 flex flex-col items-center justify-center" },
    Zr = { key: 0, class: "text-center" },
    Qr = _("p", { class: "crs-title mb-2" }, "Oops! Something went wrong.", -1),
    en = _("p", { class: "crs-body" }, "Perhaps there was a temporary connnection issue.", -1),
    tn = _("p", { class: "crs-body" }, [ga("Please use the retry button or "), _("u", null, "refresh the page entirely.")], -1),
    an = ga("Retry"),
    sn = { class: "crs-caption mt-4 !text-gray-600" },
    bs = Fe({
        props: { isRetryable: { type: Boolean, default: !1 }, showIcon: { type: Boolean, default: !1 } },
        setup(r) {
            const t = r,
                e = 3;
            onErrorCaptured((v, I, C) => {
                var D;
                a.value = !0;
                let O = "Something went wrong";
                T(v) ? ((O = v.message), (i.value = v.code)) : v.message && (O = v.message);
                const U = new y({
                    message: T(v) ? v.message : `${v.message || v}`,
                    code: T(v) ? v.code : 500,
                    type: T(v) ? v.type : "Error Boundary",
                    description: T(v) ? `${C} - ${v.description}` : C,
                    originalError: v,
                    sourceUrl: (D = I == null ? void 0 : I.$options) == null ? void 0 : D.__file,
                });
                return u.logger.error("Error captured", U), u.utils.sleep(500).then(() => (n.value = O)), !1;
            });
            const a = ref(!1),
                i = ref(null),
                n = ref(""),
                d = ref(!1),
                h = () =>
                    o(this, null, function* () {
                        m.value >= e || ((n.value = "loading..."), m.value++, (d.value = !0), yield u.utils.sleep(500), (a.value = !1), (d.value = !1));
                    }),
                m = ref(0);
            return (v, I) =>
                a.value
                    ? Pe(v.$slots, "error", { key: 0, errorCode: i.value, errorText: n.value, retry: h, isRetrying: d.value, canRetry: t.isRetryable && m.value < e }, () => [
                          _("div", Xr, [
                              ie(
                                  us,
                                  { name: "fade" },
                                  {
                                      default: de(() => [
                                          n.value
                                              ? (L(),
                                                V("div", Zr, [
                                                    r.showIcon ? (L(), gt(k(zs), { key: 0, class: "mb-4 h-96 w-full", style: { "max-height": "50vh" } })) : $e("", !0),
                                                    Qr,
                                                    en,
                                                    tn,
                                                    t.isRetryable
                                                        ? (L(),
                                                          gt(Va, { key: 1, onClick: h, loading: d.value, disabled: m.value >= e, size: "sm", color: "primary", class: "mt-4" }, { default: de(() => [an]), _: 1 }, 8, ["loading", "disabled"]))
                                                        : $e("", !0),
                                                    _("p", sn, "(the error was: " + Je(n.value) + ")", 1),
                                                ]))
                                              : $e("", !0),
                                      ]),
                                      _: 1,
                                  }
                              ),
                          ]),
                      ])
                    : Pe(v.$slots, "default", { key: 1 });
        },
    }),
    rn = Fe({
        setup(r) {
            const t = ke.getCachedOrEmpty(),
                e = J.getCachedOrEmpty(),
                a = Ve.getCachedOrEmpty(),
                i = Le.getCachedOrEmpty(),
                n = ze.getCachedOrEmpty();
            return (d, h) => (
                L(),
                gt(
                    bs,
                    { isRetryable: !0, showIcon: !0 },
                    { default: de(() => [ie(Jr, { businessObjects: [k(t), k(e), k(a), k(i), k(n)] }, { default: de(() => [ie(Hr, null, { default: de(() => [Pe(d.$slots, "default")]), _: 3 })]), _: 3 }, 8, ["businessObjects"])]), _: 3 }
                )
            );
        },
    }),
    nn = { class: "p-4" },
    on = { class: "mt-4" },
    ln = { for: "current", class: "crs-subtitle" },
    dn = { class: "mt-2" },
    cn = { class: "space-y-3" },
    un = ["disabled", "id", "onClick", "name", "checked"],
    hn = ["onClick", "for"],
    pn = { key: 0 },
    gn = _("div", { class: "mt-4" }, [_("label", { for: "current", class: "crs-subtitle" }, " No, I have created most of my screens using: ")], -1),
    mn = { class: "mt-2" },
    fn = { class: "space-y-3" },
    vn = ["id", "onClick", "checked"],
    wn = ["onClick", "for"],
    yn = ga("Start migration"),
    bn = { key: 1, class: "crs-caption" },
    In = { key: 2, class: "crs-caption mt-2 !text-red" },
    En = Fe({
        props: { migrationToken: { type: String, required: !0 } },
        setup(r) {
            const t = r,
                e = u.getRootForWorkspaces(),
                a = computed(
                    () =>
                        e.workspaces.all.value.filter((D) => {
                            var Ge;
                            return ((Ge = D.migration) == null ? void 0 : Ge.token) === t.migrationToken;
                        }).length > 0
                ),
                i = computed(() => ["initial", "retry", "another-retry", "yet-another-retry"].includes(t.migrationToken)),
                n = () =>
                    o(this, null, function* () {
                        var za;
                        const D = U.value === "Yes" ? h.value : (za = I.value) == null ? void 0 : za.width;
                        if (!D) return;
                        const Ge = u.utils.uuidv4(),
                            M = t.migrationToken === "initial" ? "Migrated data" : "Migration retry",
                            bt = { type: "WORKSPACE_V1", id: Ge, ownerId: u.user.userId.value, title: M, workspaceId: Ge, migration: { token: t.migrationToken, screenWidth: D } },
                            $a = u.getRootForWorkspaces();
                        $a.workspaces.add({ info: bt, onIndex: 0 }), $a.migrations.value.push({ token: t.migrationToken, screenWidth: D }), d.push({ name: "workspace", params: { workspaceId: Ge } });
                    }),
                d = pa(),
                { width: h } = u.browserWindow,
                m = computed(() => [
                    { id: "w1024", width: 1024, text: "a 1024px wide display (very small monitor)" },
                    { id: "w1080", width: 1080, text: "a 1080px wide display (regular iPad)" },
                    { id: "w1280", width: 1280, text: "a 1280px wide display (small monitor)" },
                    { id: "w1366", width: 1366, text: "a 1366px wide display (regular laptop or iPad PRO)" },
                    { id: "w1440", width: 1440, text: "a 1440px wide display" },
                    { id: "w1536", width: 1536, text: "a 1536px wide display" },
                    { id: "w1600", width: 1600, text: "a 1600px wide display (HD plus monitor)" },
                    { id: "w1920", width: 1920, text: "a 1920px wide display (full HD monitor)" },
                ]),
                v = ref("w1366"),
                I = computed(() => m.value.find((D) => D.id === v.value)),
                C = ref("Yes"),
                O = computed(() => h.value < 1024),
                U = computed({
                    get: () => (O.value ? "No" : C.value),
                    set: (D) => {
                        C.value = D;
                    },
                });
            return (D, Ge) => (
                L(),
                V("div", nn, [
                    Pe(D.$slots, "default"),
                    _("div", on, [
                        _("label", ln, " Your current browser window is " + Je(k(h)) + " pixels wide. Is this (approximately) the screen size that you used to create your screens in the previous version of Classroomscreen? ", 1),
                    ]),
                    _("div", null, [
                        _("fieldset", dn, [
                            _("div", cn, [
                                (L(),
                                V(
                                    _a,
                                    null,
                                    Ya(["Yes", "No"], (M) =>
                                        _("div", { key: M, class: "flex items-center" }, [
                                            _(
                                                "input",
                                                { disabled: k(O), id: M, onClick: (bt) => (U.value = M), name: M, type: "radio", checked: k(U) === M, class: "h-4 w-4 border-gray-400 text-primary-600 focus:ring-primary-500" },
                                                null,
                                                8,
                                                un
                                            ),
                                            _("label", { onClick: (bt) => (U.value = M), for: M, class: ut(["ml-3 block cursor-pointer text-sm font-medium text-gray-800", k(O) && M === "Yes" ? "!text-gray-400" : null]) }, Je(M), 11, hn),
                                        ])
                                    ),
                                    64
                                )),
                            ]),
                        ]),
                    ]),
                    k(U) === "No"
                        ? (L(),
                          V("div", pn, [
                              gn,
                              _("div", null, [
                                  _("fieldset", mn, [
                                      _("div", fn, [
                                          (L(!0),
                                          V(
                                              _a,
                                              null,
                                              Ya(
                                                  k(m),
                                                  (M) => (
                                                      L(),
                                                      V("div", { key: M.id, class: "flex items-center" }, [
                                                          _(
                                                              "input",
                                                              {
                                                                  id: M.id,
                                                                  onClick: (bt) => (v.value = M.id),
                                                                  name: "notification-method",
                                                                  type: "radio",
                                                                  checked: v.value === M.id,
                                                                  class: "h-4 w-4 border-gray-400 text-primary-600 focus:ring-primary-500",
                                                              },
                                                              null,
                                                              8,
                                                              vn
                                                          ),
                                                          _("label", { onClick: (bt) => (v.value = M.id), for: M.id, class: "ml-3 block cursor-pointer text-sm font-medium text-gray-800" }, Je(M.text), 9, wn),
                                                      ])
                                                  )
                                              ),
                                              128
                                          )),
                                      ]),
                                  ]),
                              ]),
                          ]))
                        : $e("", !0),
                    ie(Va, { disabled: k(a) || !k(i), color: "primary", class: "mt-4", onClick: n }, { default: de(() => [yn]), _: 1 }, 8, ["disabled"]),
                    k(a) ? (L(), V("p", bn, "This migration has been completed.")) : $e("", !0),
                    k(i) ? $e("", !0) : (L(), V("p", In, "Please use a correct migration token.")),
                ])
            );
        },
    }),
    Cn = { key: 1, class: "flex h-screen w-screen flex-col items-center justify-start overflow-y-auto bg-primary-500 p-4" },
    Sn = ["src"],
    xn = { class: "max-w-xl rounded-xl bg-white p-8 shadow-xl" },
    _n = _("p", { class: "crs-title" }, "Migrate your data", -1),
    Pn = _("p", { class: "crs-body mt-4" }, "Welcome to the new version of Classroomscreen!", -1),
    Tn = _(
        "p",
        { class: "crs-body mt-2" },
        " The screens you created in the previous version of Classroomscreen must be converted to this new version. To convert your saved screens in the best possible way, it would be very helpful to know the size of your screen that you normally use when using Classroomscreen. ",
        -1
    ),
    An = Fe({
        setup(r) {
            const t = J.getCachedOrError(),
                { isMigrated: e } = t,
                a = "https://static.classroomscreen.com";
            return (i, n) =>
                k(e)
                    ? Pe(i.$slots, "default", { key: 0 })
                    : (L(),
                      V("div", Cn, [
                          _("img", { class: "mt-4 mb-8 block h-8", src: `${a}/logo/logo-transparent-on-dark-lime.png`, alt: "Classroomscreen" }, null, 8, Sn),
                          _("div", xn, [ie(En, { migrationToken: "initial" }, { default: de(() => [_n, Pn, Tn]), _: 1 })]),
                      ]));
        },
    }),
    Dn = { key: 0, class: "h-full" },
    kn = Fe({
        setup(r) {
            onMounted(() =>
                o(this, null, function* () {
                    yield u.restoreSession(), (t.value = !0);
                    const e = document.getElementById("app-splash-text");
                    e && (e.textContent = "Loading data");
                })
            );
            const t = ref(!1);
            return (e, a) => (t.value ? Pe(e.$slots, "default", { key: 1 }) : (L(), V("div", Dn, [ie(Ma)])));
        },
    });
class Ln {
    constructor(t, e, a) {
        s(this, "type", "browser");
        (this.name = t), (this.version = e), (this.os = a);
    }
}
class Rn {
    constructor(t) {
        s(this, "type", "node");
        s(this, "name", "node");
        s(this, "os", process.platform);
        this.version = t;
    }
}
class On {
    constructor(t, e, a, i) {
        s(this, "type", "bot-device");
        (this.name = t), (this.version = e), (this.os = a), (this.bot = i);
    }
}
class Fn {
    constructor() {
        s(this, "type", "bot");
        s(this, "bot", !0);
        s(this, "name", "bot");
        s(this, "version", null);
        s(this, "os", null);
    }
}
class Wn {
    constructor() {
        s(this, "type", "react-native");
        s(this, "name", "react-native");
        s(this, "version", null);
        s(this, "os", null);
    }
}
const Un = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    Gn = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
    is = 3,
    Nn = [
        ["aol", /AOLShield\/([0-9._]+)/],
        ["edge", /Edge\/([0-9._]+)/],
        ["edge-ios", /EdgiOS\/([0-9._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9.]+)/],
        ["samsung", /SamsungBrowser\/([0-9.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9.]+)/],
        ["edge-chromium", /EdgA?\/([0-9.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9.]+)/],
        ["opera", /Opera\/([0-9.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+.\d+)$/],
        ["pie", /^Mozilla\/\d.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7.0.*rv:([0-9.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9.]+)/],
        ["android", /Android\s([0-9.]+)/],
        ["ios", /Version\/([0-9._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9.]+)/],
        ["instagram", /Instagram\s([0-9.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9.]+)$/],
        ["searchbot", Un],
    ],
    rs = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/],
    ];
function Mn(r) {
    return r ? ns(r) : typeof document == "undefined" && typeof navigator != "undefined" && navigator.product === "ReactNative" ? new Wn() : typeof navigator != "undefined" ? ns(navigator.userAgent) : zn();
}
function Vn(r) {
    return (
        r !== "" &&
        Nn.reduce((t, [e, a]) => {
            if (t) return t;
            const i = a.exec(r);
            return !!i && [e, i];
        }, !1)
    );
}
function ns(r) {
    const t = Vn(r);
    if (!t) return null;
    const [e, a] = t;
    if (e === "searchbot") return new Fn();
    let i = a[1] && a[1].split(".").join("_").split("_").slice(0, 3);
    i ? i.length < is && (i = [...i, ...Bn(is - i.length)]) : (i = []);
    const n = i.join("."),
        d = $n(r),
        h = Gn.exec(r);
    return h && h[1] ? new On(e, n, d, h[1]) : new Ln(e, n, d);
}
function $n(r) {
    for (let t = 0, e = rs.length; t < e; t++) {
        const [a, i] = rs[t];
        if (i.exec(r)) return a;
    }
    return null;
}
function zn() {
    return typeof process != "undefined" && process.version ? new Rn(process.version.slice(1)) : null;
}
function Bn(r) {
    const t = [];
    for (let e = 0; e < r; e++) t.push("0");
    return t;
}
const jn = { key: 0, class: "mx-auto flex h-screen max-w-3xl flex-col items-center justify-center" },
    Hn = _("div", { class: "crs-title" }, "Unsupported browser version", -1),
    Yn = { key: 0, class: "crs-subtitle mt-4" },
    Jn = { key: 1, class: "crs-subtitle mt-4" },
    qn = { key: 2, class: "crs-subtitle mt-4" },
    Kn = { class: "mt-4 flex items-center" },
    Xn = _("label", { for: "dont_show", class: "crs-body ml-2 block !text-sm !font-semibold text-gray-900" }, " Do not show again ", -1),
    Zn = ga(" Dismiss "),
    Qn = Fe({
        setup(r) {
            onMounted(() =>
                o(this, null, function* () {
                    var I, C;
                    try {
                        const O = Mn();
                        if (
                            ((i.value = (I = O == null ? void 0 : O.name) != null ? I : "unknown"),
                            (n.value = Number.parseInt((C = O == null ? void 0 : O.version) != null ? C : "0", 10)),
                            i.value === "chrome" && n.value >= 93 && (e.value = !1),
                            i.value === "firefox" && n.value >= 88 && (e.value = !1),
                            i.value === "edge" && n.value >= 88 && (e.value = !1),
                            i.value === "edge-chromium" && n.value >= 88 && (e.value = !1),
                            i.value === "safari" && n.value >= 15 && (e.value = !1),
                            e.value === !1)
                        )
                            return;
                        const U = window.navigator.userAgent;
                        let D = U.indexOf("OS ");
                        if ((U.indexOf("iPhone") > -1 || U.indexOf("iPad") > -1) && D > -1 && ((d.value = !0), (h.value = Number(U.substr(D + 3, 3).replace("_", "."))), d.value && h.value >= 15)) {
                            e.value = !1;
                            return;
                        }
                    } catch (O) {
                        a.value = !0;
                    }
                })
            );
            const t = cs("doNotShowBrowserWarning", !1),
                e = ref(!0),
                a = ref(!1),
                i = ref("unknown"),
                n = ref(0),
                d = ref(!1),
                h = ref(0),
                m = ref(!1),
                v = () => {
                    m.value && (t.value = !0), (a.value = !0);
                };
            return (I, C) =>
                !k(t) && e.value && !a.value
                    ? (L(),
                      V("div", jn, [
                          Hn,
                          d.value && h.value >= 14
                              ? (L(), V("p", Yn, " We do not officially support iOS version " + Je(h.value) + ". For the best experience we recommend iOS version 15 or later. ", 1))
                              : d.value
                              ? (L(), V("p", Jn, " We do not support iOS version " + Je(h.value) + " which causes unexpected behavior in our application. Please upgrade to iOS version 15 or later. ", 1))
                              : (L(),
                                V(
                                    "p",
                                    qn,
                                    " We do not support " +
                                        Je(i.value) +
                                        " version " +
                                        Je(n.value) +
                                        " which might cause unexpected behavior in our application. Please use a recent version of Edge, Chrome, Firefox and Safari for the best experience. ",
                                    1
                                )),
                          _("div", Kn, [
                              Bs(
                                  _(
                                      "input",
                                      { id: "dont_show", "onUpdate:modelValue": C[0] || (C[0] = (O) => (m.value = O)), name: "dont_show", type: "checkbox", class: "h-4 w-4 rounded border-gray-400 text-primary-500 focus:ring-primary-600" },
                                      null,
                                      512
                                  ),
                                  [[js, m.value]]
                              ),
                              Xn,
                          ]),
                          ie(Va, { onClick: v, color: "primary", class: "mt-4" }, { default: de(() => [Zn]), _: 1 }),
                      ]))
                    : Pe(I.$slots, "default", { key: 1 });
        },
    }),
    eo = { key: 0, class: "h-full" },
    to = Fe({
        setup(r) {
            onMounted(() =>
                o(this, null, function* () {
                    yield i.isReady();
                    const d = document.getElementById("app-splash-text");
                    d && (d.textContent = "Restoring session"), (n.value = !0);
                })
            );
            const t = Number.parseInt("10"),
                e = Array.from(Array(t)).map(
                    (d, h) =>
                        `${
                            {
                                VITE_USER_NODE_ENV: "production",
                                VITE_NODE_ENV: "production",
                                VITE_LOG_LEVEL: "silent",
                                VITE_XSTATE_INSPECT: "false",
                                VITE_APP_BASE_URL: "https://classroomscreen.com/app",
                                VITE_FIREBASE_API_KEY: "AIzaSyAvDy5r1iMR6jWF_Aa7BEImO51mNO0Leks",
                                VITE_FIREBASE_AUTH_DOMAIN: "auth.classroomscreen.com",
                                VITE_FIREBASE_DATABASE_COUNT: "10",
                                VITE_FIREBASE_DATABASE_URL_1: "https://prd-classroomscreen-com-1.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_2: "https://prd-classroomscreen-com-2.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_3: "https://prd-classroomscreen-com-3.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_4: "https://prd-classroomscreen-com-4.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_5: "https://prd-classroomscreen-com-5.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_6: "https://prd-classroomscreen-com-6.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_7: "https://prd-classroomscreen-com-7.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_8: "https://prd-classroomscreen-com-8.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_9: "https://prd-classroomscreen-com-9.firebaseio.com",
                                VITE_FIREBASE_DATABASE_URL_10: "https://prd-classroomscreen-com-10.firebaseio.com",
                                VITE_FIREBASE_PROJECT_ID: "prd-classroomscreen-com",
                                VITE_FIREBASE_STORAGE_BUCKET: "prd-classroomscreen-com.appspot.com",
                                VITE_FIREBASE_MESSAGING_SENDER_ID: "903847878453",
                                VITE_FIREBASE_APP_ID: "1:903847878453:web:da8fcf7377c8d0b0e6367c",
                                VITE_FIREBASE_MEASUREMENT_ID: "G-B9GFJW2HQJ",
                                VITE_FIREBASE_FUNCTIONS_REGION: "us-central1",
                                VITE_SENTRY_DSN: "https://0bce544393e340a993114802ac65e4a4@o443016.ingest.sentry.io/5415915",
                                VITE_SENTRY_ENVIRONMENT: "PRODUCTION",
                                VITE_SENTRY_SAMPLE_RATE: "1",
                                VITE_FUNCTIONS_BASE_URL: "https://functions.classroomscreen.com",
                                VITE_JOIN_DOMAIN: "joincrs.com",
                                VITE_STATIC_BASE_URL: "https://static.classroomscreen.com",
                                VITE_WEBSITE_BASE_URL: "https://classroomscreen.com",
                                VITE_SCHOOL_ADMIN_BASE_URL: "https://classroomscreen.com/school-admin",
                                VITE_STORAGE_CUSTOM_DOMAIN_ENABLED: "1",
                                VITE_STORAGE_CUSTOM_DOMAIN: "https://files.prd.classroomscreen.com",
                                VITE_AUTO_SAVE_DELAY: "3000",
                                VITE_AUTO_SAVE_MAX_WAIT: "15000",
                                VITE_PADDLE_SANDBOX: "0",
                                VITE_PADDLE_VENDOR_ID: "116797",
                                VITE_PADDLE_PRO_PLAN_ID: "597901",
                                VITE_STRIPE_API_VERSION: "2020-03-02",
                                VITE_STRIPE_PUBLIC_KEY: "pk_live_NsPb27JBeBM8dqQnh45EVnBv00KmCR3Owk",
                                VITE_ENTERPRISE_DOMAINS: '["heritagehall.com"]',
                                BASE_URL: "/app/",
                                MODE: "prd",
                                DEV: !1,
                                PROD: !0,
                            }["VITE_FIREBASE_DATABASE_URL_" + (h + 1)]
                        }`
                ),
                a = (d) => {
                    Hs({
                        app: window.lsipVueApp,
                        dsn: d.sentryDsn,
                        release: `app.classroomscreen.com@${d.version}`,
                        environment: `${d.environment}`,
                        sampleRate: d.sampleRate,
                        beforeSend(h, m) {
                            var I;
                            const v = JSON.stringify({ event: h, hint: m });
                            return v.includes("Extension context invalidated") || v.includes("ResizeObserver loop limit exceeded") || !((I = h == null ? void 0 : h.user) != null && I.email) ? null : h;
                        },
                    });
                };
            u.initialize({
                configuration: {
                    autoSaveDebounceDelayMs: Number.parseInt("3000"),
                    autoSaveDebounceMaxWaitMs: Number.parseInt("15000"),
                    logLevel: "silent",
                    firebase: {
                        _useEmulator: !1,
                        apiKey: "AIzaSyAvDy5r1iMR6jWF_Aa7BEImO51mNO0Leks",
                        authDomain: "auth.classroomscreen.com",
                        databaseName: "(default)",
                        databaseURLs: e,
                        projectId: "prd-classroomscreen-com",
                        storageBucket: "prd-classroomscreen-com.appspot.com",
                        messagingSenderId: "903847878453",
                        appId: "1:903847878453:web:da8fcf7377c8d0b0e6367c",
                        measurementId: "G-B9GFJW2HQJ",
                        functionsRegion: "us-central1",
                        dynamicImportTimeoutMs: 30 * 1e3,
                        storageReadTimeoutMs: 30 * 1e3,
                        storageWriteTimeoutMs: 30 * 1e3,
                    },
                    network: { https: { regularEndpoint: "https://functions.classroomscreen.com", keysEndpoint: "", defaultTimeoutMs: 30 * 1e3 } },
                    sentry: { environment: "PRODUCTION", version: "2.2.9", sentryDsn: "https://0bce544393e340a993114802ac65e4a4@o443016.ingest.sentry.io/5415915", sampleRate: Number.parseFloat("1") },
                    xstate: { inspect: !1 },
                },
            });
            const i = pa();
            a({ environment: "PRODUCTION", version: "2.2.9", sentryDsn: "https://0bce544393e340a993114802ac65e4a4@o443016.ingest.sentry.io/5415915", sampleRate: Number.parseFloat("1") });
            const n = ref(!1);
            return (d, h) =>
                n.value
                    ? (L(),
                      gt(
                          bs,
                          { key: 1 },
                          {
                              default: de(() => [ie(Qn, null, { default: de(() => [ie(kn, null, { default: de(() => [ie(rn, null, { default: de(() => [ie(An, null, { default: de(() => [ie(jr)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 })]),
                              _: 1,
                          }
                      ))
                    : (L(), V("div", eo, [ie(Ma)]));
        },
    }),
    ao = { app: null },
    os = document.getElementById("app-splash-text-initial");
os && os.remove();
const ls = document.getElementById("app-splash-text");
ls && (ls.textContent = "Initializing app");
function so() {
    const r = document.getElementById("app-splash");
    r && (r.setAttribute("data-ready", "1"), r.getAttribute("animation-ready") && r.remove());
}
window.setTimeout(so, 10 * 1e3);
const yt = Ys(c(l({}, to), { name: "_MAIN_" })),
    io = Js();
yt.use(io);
yt.use(oa);
yt.use(ka);
ao.app = yt;
window.lsipVueApp = yt;
yt.mount("#app");
window.addEventListener(
    "dragover",
    (r) => {
        (r = r || event), r.preventDefault();
    },
    !1
);
window.addEventListener(
    "drop",
    (r) => {
        (r = r || event), r.preventDefault();
    },
    !1
);
export {
    u as A,
    Oe as B,
    ce as C,
    gs as D,
    ne as E,
    wa as F,
    At as G,
    me as H,
    xe as I,
    fe as J,
    ve as K,
    y as L,
    ye as M,
    be as N,
    ca as O,
    j as P,
    pe as Q,
    Le as R,
    Z as S,
    oe as T,
    ke as U,
    ao as V,
    Y as W,
    Qe as X,
    we as Y,
    Va as _,
    bs as a,
    En as b,
    Ma as c,
    Jr as d,
    Zs as e,
    Ke as f,
    z as g,
    Be as h,
    T as i,
    ze as j,
    Q as k,
    ti as l,
    p as m,
    re as n,
    f as o,
    Te as p,
    ue as q,
    ka as r,
    et as s,
    Ze as t,
    Ue as u,
    le as v,
    S as w,
    ua as x,
    he as y,
    ge as z,
};
