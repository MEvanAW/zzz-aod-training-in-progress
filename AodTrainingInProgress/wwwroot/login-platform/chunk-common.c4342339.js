(self["webpackChunkhoyoverse_account_flow"] = self["webpackChunkhoyoverse_account_flow"] || []).push([[3064], {
    74420: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return Ie
            }
        });
        var r = t(98518)
          , o = t(62141)
          , i = t(70242)
          , a = (t(81934),
        t(98288),
        t(14181),
        t(36454))
          , c = {
            [r.Y2.SG]: "https://testing-sg-public-api.hoyoverse.com",
            [r.Y2.US]: "https://testing-us-sdk-api.hoyoverse.com",
            [r.Y2.EU]: "https://testing-eu-sdk-api.hoyoverse.com"
        }
          , u = c[r.Y2.SG]
          , s = c[r.Y2.SG]
          , l = "https://testing-sg-public-api-static.hoyoverse.com"
          , d = "https://account-test.hoyoverse.com"
          , f = "https://account-test.hoyoverse.com/login-platform"
          , p = "https://account-test.hoyoverse.com/single-page"
          , _ = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA46mYOXyR5oCiIxUoyd5C\n6L/fpaW5CFGCf+eRQ+nPtxYF9MUD1yd2tQOi4N1xHV4JGb53GcSMwZXav1Poycfu\nYKjVI71+C78x6ibwYbJlvcZRuIBsPpCppLNOzKbLA3RkfcAF1pjXjeYpzsNvdg7T\nYO3uaAocf0Kck4+LtmhjiRL0zIfYL7mPl/30mjeYJ2vPGlGSM0kLNPqL7oo9J34L\nuUpi9Oo9vE//i+WD+ZbA4PY0HibJ/QPQmN65D/ZkPYO/iuMjbaLkSbGynJwhFmY+\nfsQyDxdnNmQ//MIcepswGZZ4585u4QPQfjTxEpfr+t5zAJdMAcmWZ+3tDtagHwzp\n1wIDAQAB"
          , v = {}
          , m = {
            appId: 26,
            appKey: "218333c6-756c-4889-9109-ec559a234aba",
            experimentScheme: v,
            isTest: !0
        }
          , g = (0,
        i.Z)((0,
        i.Z)({}, a.kX), {}, {
            isPreview: "1"
        })
          , h = (Object.fromEntries(Object.entries(a.fI).map((function(e) {
            var n = (0,
            o.Z)(e, 2)
              , t = n[0]
              , r = n[1];
            return [t, (0,
            i.Z)((0,
            i.Z)({}, r), {}, {
                isPreview: "1"
            })]
        }
        ))),
        "https://testing-sg-public-api.hoyoverse.com")
          , E = "https://testing-sg-public-api.hoyoverse.com"
          , y = {
            API_BASE: c,
            BINDING_API_BASE: u,
            STATIC_API_BASE: s,
            BOX_API_BASE: l,
            PASSPORT_FE_BASE: d,
            ENCRYPT_KEY: _,
            LOGIN_PLATFORM_FE_BASE: f,
            LOGIN_SINGLE_PAGE_FE_BASE: p,
            AB_CONFIG: m,
            CONTENT_PAGE_INFO: g,
            SDK_CDN_API_BASE: h,
            SDK_API_BASE: E
        }
          , I = {
            [r.Y2.SG]: "https://testing-sg-public-api.hoyoverse.com",
            [r.Y2.US]: "https://testing-us-sdk-api.hoyoverse.com",
            [r.Y2.EU]: "https://testing-eu-sdk-api.hoyoverse.com"
        }
          , k = I[r.Y2.SG]
          , w = "https://testing-sg-public-api.hoyoverse.com"
          , b = "https://account-test.hoyoverse.com"
          , A = "https://dev.hoyoverse.com:8080"
          , S = "https://dev.hoyoverse.com:8082"
          , T = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA46mYOXyR5oCiIxUoyd5C\n6L/fpaW5CFGCf+eRQ+nPtxYF9MUD1yd2tQOi4N1xHV4JGb53GcSMwZXav1Poycfu\nYKjVI71+C78x6ibwYbJlvcZRuIBsPpCppLNOzKbLA3RkfcAF1pjXjeYpzsNvdg7T\nYO3uaAocf0Kck4+LtmhjiRL0zIfYL7mPl/30mjeYJ2vPGlGSM0kLNPqL7oo9J34L\nuUpi9Oo9vE//i+WD+ZbA4PY0HibJ/QPQmN65D/ZkPYO/iuMjbaLkSbGynJwhFmY+\nfsQyDxdnNmQ//MIcepswGZZ4585u4QPQfjTxEpfr+t5zAJdMAcmWZ+3tDtagHwzp\n1wIDAQAB"
          , N = {
            API_BASE: I,
            BINDING_API_BASE: k,
            ENCRYPT_KEY: T,
            STATIC_API_BASE: w,
            BOX_API_BASE: l,
            PASSPORT_FE_BASE: b,
            LOGIN_PLATFORM_FE_BASE: A,
            LOGIN_SINGLE_PAGE_FE_BASE: S,
            SDK_CDN_API_BASE: h,
            SDK_API_BASE: E
        }
          , R = {
            [r.Y2.SG]: "https://account-pre-sg-public-api.hoyoverse.com",
            [r.Y2.US]: "https://pre-passport-api-us.hoyoverse.com",
            [r.Y2.EU]: "https://pre-passport-api-eu.hoyoverse.com"
        }
          , O = "https://pre-sg-public-api.hoyoverse.com"
          , C = "https://account-pre-sg-public-api-static.hoyoverse.com"
          , L = "https://account-pre.hoyoverse.com"
          , P = "https://account-pre.hoyoverse.com/login-platform"
          , x = "https://account-pre.hoyoverse.com/single-page"
          , D = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4PMS2JVMwBsOIrYWRluY\nwEiFZL7Aphtm9z5Eu/anzJ09nB00uhW+ScrDWFECPwpQto/GlOJYCUwVM/raQpAj\n/xvcjK5tNVzzK94mhk+j9RiQ+aWHaTXmOgurhxSp3YbwlRDvOgcq5yPiTz0+kSeK\nZJcGeJ95bvJ+hJ/UMP0Zx2qB5PElZmiKvfiNqVUk8A8oxLJdBB5eCpqWV6CUqDKQ\nKSQP4sM0mZvQ1Sr4UcACVcYgYnCbTZMWhJTWkrNXqI8TMomekgny3y+d6NX/cFa6\n6jozFIF4HCX5aW8bp8C8vq2tFvFbleQ/Q3CU56EWWKMrOcpmFtRmC18s9biZBVR/\n8QIDAQAB"
          , B = {
            hk4e: "https://hk4e-pre-sdk-os.hoyoverse.com",
            bh3: "https://sg-pre-api.hoyoverse.com",
            nxx: "https://sg-pre-api.hoyoverse.com",
            nap: "https://nap-pre-sdk-os.hoyoverse.com",
            hkrpg: "https://hkrpg-pre-sdk-os.hoyoverse.com",
            hyg: "https://hyg-pre-sdk-os.hoyoverse.com",
            abc: "https://abc-pre-sdk-os.hoyoverse.com"
        }
          , U = {
            API_BASE: R,
            BINDING_API_BASE: O,
            ENCRYPT_KEY: D,
            STATIC_API_BASE: C,
            BOX_API_BASE: a.Uk,
            PASSPORT_FE_BASE: L,
            LOGIN_PLATFORM_FE_BASE: P,
            LOGIN_SINGLE_PAGE_FE_BASE: x,
            SDK_CDN_API_BASE: a.WR,
            SDK_API_BASE: B
        }
          , Z = {
            [r.Y2.SG]: "https://account-pre-sg-public-api.hoyoverse.com",
            [r.Y2.US]: "https://pre-passport-api-us.hoyoverse.com",
            [r.Y2.EU]: "https://pre-passport-api-eu.hoyoverse.com"
        }
          , G = "https://pre-sg-public-api.hoyoverse.com"
          , M = "https://account-pre-sg-public-api-static.hoyoverse.com"
          , F = "https://account-pre.hoyoverse.com"
          , K = "https://account-pre.hoyoverse.com/login-platform"
          , Y = "https://account-pre.hoyoverse.com/single-page"
          , V = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4PMS2JVMwBsOIrYWRluY\nwEiFZL7Aphtm9z5Eu/anzJ09nB00uhW+ScrDWFECPwpQto/GlOJYCUwVM/raQpAj\n/xvcjK5tNVzzK94mhk+j9RiQ+aWHaTXmOgurhxSp3YbwlRDvOgcq5yPiTz0+kSeK\nZJcGeJ95bvJ+hJ/UMP0Zx2qB5PElZmiKvfiNqVUk8A8oxLJdBB5eCpqWV6CUqDKQ\nKSQP4sM0mZvQ1Sr4UcACVcYgYnCbTZMWhJTWkrNXqI8TMomekgny3y+d6NX/cFa6\n6jozFIF4HCX5aW8bp8C8vq2tFvFbleQ/Q3CU56EWWKMrOcpmFtRmC18s9biZBVR/\n8QIDAQAB"
          , $ = {
            API_BASE: Z,
            BINDING_API_BASE: G,
            STATIC_API_BASE: M,
            BOX_API_BASE: a.Uk,
            ENCRYPT_KEY: V,
            PASSPORT_FE_BASE: F,
            LOGIN_PLATFORM_FE_BASE: K,
            LOGIN_SINGLE_PAGE_FE_BASE: Y,
            SDK_CDN_API_BASE: a.WR,
            SDK_API_BASE: B
        }
          , J = {
            [r.Y2.SG]: "https://passport-api-sg.hoyoverse.com",
            [r.Y2.US]: "https://passport-api-us.hoyoverse.com",
            [r.Y2.EU]: "https://passport-api-eu.hoyoverse.com"
        }
          , H = J[r.Y2.SG]
          , j = "https://sg-public-api-static.hoyoverse.com"
          , W = "https://account.hoyoverse.com"
          , z = "https://account.hoyoverse.com/beta/login-platform"
          , q = "https://account.hoyoverse.com/beta/single-page"
          , Q = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4PMS2JVMwBsOIrYWRluY\nwEiFZL7Aphtm9z5Eu/anzJ09nB00uhW+ScrDWFECPwpQto/GlOJYCUwVM/raQpAj\n/xvcjK5tNVzzK94mhk+j9RiQ+aWHaTXmOgurhxSp3YbwlRDvOgcq5yPiTz0+kSeK\nZJcGeJ95bvJ+hJ/UMP0Zx2qB5PElZmiKvfiNqVUk8A8oxLJdBB5eCpqWV6CUqDKQ\nKSQP4sM0mZvQ1Sr4UcACVcYgYnCbTZMWhJTWkrNXqI8TMomekgny3y+d6NX/cFa6\n6jozFIF4HCX5aW8bp8C8vq2tFvFbleQ/Q3CU56EWWKMrOcpmFtRmC18s9biZBVR/\n8QIDAQAB"
          , X = {
            hk4e: "https://hk4e-beta-sdk-os.hoyoverse.com",
            bh3: "https://sg-beta-api.hoyoverse.com",
            nxx: "https://sg-beta-api.hoyoverse.com",
            nap: "https://nap-beta-sdk-os.hoyoverse.com",
            hkrpg: "https://hkrpg-beta-sdk-os.hoyoverse.com",
            hyg: "https://hyg-beta-sdk-os.hoyoverse.com",
            abc: "https://abc-beta-sdk-os.hoyoverse.com"
        }
          , ee = {
            hk4e: "https://hk4e-beta-sdk-os.hoyoverse.com",
            bh3: "https://sg-beta-api.hoyoverse.com",
            nxx: "https://sg-beta-api.hoyoverse.com",
            nap: "https://nap-beta-sdk-os.hoyoverse.com",
            hkrpg: "https://hkrpg-beta-sdk-os.hoyoverse.com",
            hyg: "https://hyg-beta-sdk-os.hoyoverse.com",
            abc: "https://abc-beta-sdk-os.hoyoverse.com"
        }
          , ne = {
            API_BASE: J,
            BINDING_API_BASE: H,
            STATIC_API_BASE: j,
            BOX_API_BASE: a.Uk,
            ENCRYPT_KEY: Q,
            PASSPORT_FE_BASE: W,
            LOGIN_PLATFORM_FE_BASE: z,
            LOGIN_SINGLE_PAGE_FE_BASE: q,
            SDK_API_BASE: ee,
            SDK_CDN_API_BASE: X
        }
          , te = {
            [r.Y2.SG]: "https://sg-sandbox-api.hoyoverse.com",
            [r.Y2.US]: "https://sandbox-sdk-us.hoyoverse.com",
            [r.Y2.EU]: "https://sandbox-sdk-eu.hoyoverse.com"
        }
          , re = te[r.Y2.SG]
          , oe = "https://sg-sandbox-api.hoyoverse.com"
          , ie = "https://testing-sg-public-api-static.hoyoverse.com"
          , ae = "https://account-pre.hoyoverse.com/sandbox"
          , ce = "https://account-pre.hoyoverse.com/sandbox/login-platform"
          , ue = "https://account-pre.hoyoverse.com/sandbox/single-page"
          , se = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtWkQ1mst7FxNcqMZ5+41\nHlxOWrqEAjnKXHca51XeV1qpDDU8vm31Wj9tQi4FUopidW6wVnhG4hxxZeCI8iky\n4WNYiJ+Es34cm0TqYLtRlX6AvygQxdP3rqDoTEV6w0hArssPGnh2pz/GEnJuDiRQ\noVE0FnprjjJ7Hf3/nQVeAM8DpR3K5E/1iCecdzHGVV7xsCpq/OHZN8UBoONoNPSr\np/kTbSa0Sf4WD1lW0mZ+CIqQCrGaGofTUBTfX7C0UYkGcSgTuEr4XPsL3L6Z5AE6\nljf/T8fbGgL1mU6SiKzH0WThiIBo/CJjkKurRkfuDyoT5VrR62VH8Xa9CGl6I+tA\nBQIDAQAB"
          , le = "https://sandbox-sdk-os.hoyoverse.com"
          , de = "https://sandbox-sdk-os.hoyoverse.com"
          , fe = {
            API_BASE: te,
            BINDING_API_BASE: re,
            STATIC_API_BASE: oe,
            BOX_API_BASE: ie,
            ENCRYPT_KEY: se,
            PASSPORT_FE_BASE: ae,
            LOGIN_PLATFORM_FE_BASE: ce,
            LOGIN_SINGLE_PAGE_FE_BASE: ue,
            SDK_CDN_API_BASE: le,
            SDK_API_BASE: de
        }
          , pe = {
            [r.Y2.SG]: "https://uebbs-api-os.hoyoverse.com",
            [r.Y2.US]: "https://ue-passport-api-us.hoyoverse.com",
            [r.Y2.EU]: "https://ue-passport-api-eu.hoyoverse.com"
        }
          , _e = pe[r.Y2.SG]
          , ve = "https://uebbs-api-os.hoyoverse.com"
          , me = "https://account.hoyoverse.com"
          , ge = "https://account.hoyoverse.com/ue/login-platform"
          , he = "https://account.hoyoverse.com/ue/single-page"
          , Ee = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA46mYOXyR5oCiIxUoyd5C\n6L/fpaW5CFGCf+eRQ+nPtxYF9MUD1yd2tQOi4N1xHV4JGb53GcSMwZXav1Poycfu\nYKjVI71+C78x6ibwYbJlvcZRuIBsPpCppLNOzKbLA3RkfcAF1pjXjeYpzsNvdg7T\nYO3uaAocf0Kck4+LtmhjiRL0zIfYL7mPl/30mjeYJ2vPGlGSM0kLNPqL7oo9J34L\nuUpi9Oo9vE//i+WD+ZbA4PY0HibJ/QPQmN65D/ZkPYO/iuMjbaLkSbGynJwhFmY+\nfsQyDxdnNmQ//MIcepswGZZ4585u4QPQfjTxEpfr+t5zAJdMAcmWZ+3tDtagHwzp\n1wIDAQAB"
          , ye = {
            API_BASE: pe,
            BINDING_API_BASE: _e,
            STATIC_API_BASE: ve,
            BOX_API_BASE: a.Uk,
            PASSPORT_FE_BASE: me,
            ENCRYPT_KEY: Ee,
            LOGIN_PLATFORM_FE_BASE: ge,
            LOGIN_SINGLE_PAGE_FE_BASE: he,
            SDK_CDN_API_BASE: a.WR,
            SDK_API_BASE: a.vR
        }
          , Ie = {
            development: N,
            test: y,
            pre: $,
            prerelease: U,
            beta: ne,
            sandbox: fe,
            ue: ye,
            production: a.ZP
        }
    },
    36454: function(e, n, t) {
        "use strict";
        t.d(n, {
            Sg: function() {
                return i
            },
            Uk: function() {
                return u
            },
            VL: function() {
                return s
            },
            WR: function() {
                return y
            },
            c3: function() {
                return m
            },
            eF: function() {
                return d
            },
            fI: function() {
                return E
            },
            hu: function() {
                return p
            },
            jN: function() {
                return a
            },
            kX: function() {
                return g
            },
            q9: function() {
                return c
            },
            tQ: function() {
                return f
            },
            vR: function() {
                return I
            },
            wv: function() {
                return l
            },
            xl: function() {
                return _
            }
        });
        var r = t(70242)
          , o = t(98518)
          , i = {
            [o.Y2.SG]: "https://passport-api-sg.hoyoverse.com",
            [o.Y2.US]: "https://passport-api-us.hoyoverse.com",
            [o.Y2.EU]: "https://passport-api-eu.hoyoverse.com"
        }
          , a = i[o.Y2.SG]
          , c = "https://sg-public-api-static.hoyoverse.com"
          , u = "https://sdk-os-static.hoyoverse.com"
          , s = "https://www.hoyolab.com"
          , l = "https://account.hoyoverse.com"
          , d = "https://account.hoyoverse.com/login-platform"
          , f = "https://account.hoyoverse.com/single-page"
          , p = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4PMS2JVMwBsOIrYWRluY\nwEiFZL7Aphtm9z5Eu/anzJ09nB00uhW+ScrDWFECPwpQto/GlOJYCUwVM/raQpAj\n/xvcjK5tNVzzK94mhk+j9RiQ+aWHaTXmOgurhxSp3YbwlRDvOgcq5yPiTz0+kSeK\nZJcGeJ95bvJ+hJ/UMP0Zx2qB5PElZmiKvfiNqVUk8A8oxLJdBB5eCpqWV6CUqDKQ\nKSQP4sM0mZvQ1Sr4UcACVcYgYnCbTZMWhJTWkrNXqI8TMomekgny3y+d6NX/cFa6\n6jozFIF4HCX5aW8bp8C8vq2tFvFbleQ/Q3CU56EWWKMrOcpmFtRmC18s9biZBVR/\n8QIDAQAB"
          , _ = "https://sg-public-api-static.hoyoverse.com/content_v2_user"
          , v = {}
          , m = {
            appId: 36,
            appKey: "297f12df-a0fe-448d-a220-7ce5826ec04b",
            experimentScheme: v,
            isTest: !1
        }
          , g = {
            iAppId: "35",
            sAppSn: "8fb0dd70d6014dfa"
        }
          , h = (0,
        r.Z)((0,
        r.Z)({}, g), {}, {
            isPreview: "0"
        })
          , E = {
            KoreaPrivacyDigestInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "103464",
                iChanId: "324"
            }),
            hk4eToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127565",
                iChanId: "324"
            }),
            hkrpgToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127566",
                iChanId: "324"
            }),
            napToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127567",
                iChanId: "324"
            }),
            bbsToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127568",
                iChanId: "324"
            }),
            nxxToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127569",
                iChanId: "324"
            }),
            bh3ToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127570",
                iChanId: "324"
            }),
            abcToS: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "157544",
                iChanId: "324"
            }),
            hk4ePayInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127854",
                iChanId: "324"
            }),
            hkrpgPayInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127934",
                iChanId: "324"
            }),
            nxxPayInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127935",
                iChanId: "324"
            }),
            napPayInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127936",
                iChanId: "324"
            }),
            bh3PayInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "127937",
                iChanId: "324"
            }),
            abcPayInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "157543",
                iChanId: "324"
            }),
            userAgreementInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "102822",
                iChanId: "324"
            }),
            privacyInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "102821",
                iChanId: "324"
            }),
            questionsInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "103227",
                iChanId: "324"
            }),
            koreaPII2OSInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "103465",
                iChanId: "324"
            }),
            koreaCollectPersonalInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "113797",
                iChanId: "324"
            }),
            koreaMarketingInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "113891",
                iChanId: "324"
            }),
            koreaPrivacyDigestInfo: (0,
            r.Z)((0,
            r.Z)({}, h), {}, {
                iInfoId: "103464",
                iChanId: "324"
            })
        }
          , y = {
            hk4e: "https://hk4e-sdk-os-static.hoyoverse.com",
            bh3: "https://bh3-sdk-os-static.hoyoverse.com",
            nxx: "https://nxx-sdk-os-static.hoyoverse.com",
            nap: "https://nap-sdk-os-static.hoyoverse.com",
            hkrpg: "https://hkrpg-sdk-os-static.hoyoverse.com",
            hyg: "https://hyg-sdk-os-static.hoyoverse.com",
            abc: "https://abc-sdk-os-static.hoyoverse.com"
        }
          , I = {
            hk4e: "https://hk4e-sdk-os-s.hoyoverse.com",
            bh3: "https://bh3-sdk-os-s.hoyoverse.com",
            nxx: "https://nxx-sdk-os-s.hoyoverse.com",
            nap: "https://nap-sdk-os-s.hoyoverse.com",
            hkrpg: "https://hkrpg-sdk-os-s.hoyoverse.com",
            hyg: "https://hyg-sdk-os-s.hoyoverse.com",
            abc: "https://abc-sdk-os-s.hoyoverse.com"
        };
        n["ZP"] = {
            API_BASE: i,
            BINDING_API_BASE: a,
            ENCRYPT_KEY: p,
            CONTENT_API_BASE: _,
            STATIC_API_BASE: c,
            BOX_API_BASE: u,
            PASSPORT_FE_BASE: l,
            LOGIN_PLATFORM_FE_BASE: d,
            LOGIN_SINGLE_PAGE_FE_BASE: f,
            AB_CONFIG: m,
            CONTENT_INFO_CONFIG: E,
            CONTENT_PAGE_INFO: h,
            SDK_CDN_API_BASE: y,
            SDK_API_BASE: I
        }
    },
    98518: function(e, n, t) {
        "use strict";
        t.d(n, {
            $2: function() {
                return ee
            },
            AD: function() {
                return Y
            },
            Ag: function() {
                return ne
            },
            BU: function() {
                return W
            },
            Bh: function() {
                return g
            },
            FB: function() {
                return M
            },
            GL: function() {
                return u
            },
            HT: function() {
                return Q
            },
            Ho: function() {
                return L
            },
            I5: function() {
                return v
            },
            JJ: function() {
                return U
            },
            Lb: function() {
                return R
            },
            Mr: function() {
                return ce
            },
            Ms: function() {
                return N
            },
            N8: function() {
                return o
            },
            Nb: function() {
                return d
            },
            O2: function() {
                return H
            },
            O6: function() {
                return K
            },
            Of: function() {
                return P
            },
            Pt: function() {
                return be
            },
            RB: function() {
                return he
            },
            Rg: function() {
                return i
            },
            Rm: function() {
                return _
            },
            S: function() {
                return J
            },
            Te: function() {
                return r
            },
            Ty: function() {
                return q
            },
            UZ: function() {
                return Ee
            },
            Us: function() {
                return I
            },
            Vi: function() {
                return h
            },
            Vy: function() {
                return b
            },
            Y2: function() {
                return me
            },
            Yz: function() {
                return l
            },
            Z1: function() {
                return z
            },
            Zk: function() {
                return ye
            },
            c_: function() {
                return C
            },
            de: function() {
                return fe
            },
            do: function() {
                return T
            },
            dy: function() {
                return ue
            },
            eP: function() {
                return X
            },
            eh: function() {
                return Z
            },
            ft: function() {
                return _e
            },
            g9: function() {
                return D
            },
            gA: function() {
                return ie
            },
            iX: function() {
                return F
            },
            iv: function() {
                return k
            },
            jK: function() {
                return S
            },
            k2: function() {
                return G
            },
            l4: function() {
                return m
            },
            lD: function() {
                return re
            },
            li: function() {
                return j
            },
            lt: function() {
                return de
            },
            md: function() {
                return f
            },
            oU: function() {
                return we
            },
            q2: function() {
                return E
            },
            q5: function() {
                return A
            },
            rH: function() {
                return ge
            },
            sG: function() {
                return Ie
            },
            sU: function() {
                return B
            },
            t6: function() {
                return le
            },
            tm: function() {
                return w
            },
            v9: function() {
                return $
            },
            wG: function() {
                return oe
            },
            wK: function() {
                return y
            },
            wN: function() {
                return O
            },
            wt: function() {
                return x
            },
            x4: function() {
                return p
            },
            xD: function() {
                return ae
            },
            xN: function() {
                return c
            },
            yD: function() {
                return V
            },
            yd: function() {
                return pe
            },
            zH: function() {
                return se
            },
            zZ: function() {
                return ke
            }
        });
        var r, o, i, a, c, u, s, l, d, f, p, _, v, m, g, h = {
            test: "test",
            production: "production",
            pre: "pre",
            prerelease: "prerelease",
            sandbox: "sandbox",
            ue: "ue",
            beta: "beta",
            development: "development"
        }, E = "hyv-";
        (function(e) {
            e["WEB"] = "web",
            e["MOBILE_SINGLESTEP"] = "mobile_singleStep",
            e["MOBILE_MULTISTEP"] = "mobile_multiStep"
        }
        )(r || (r = {})),
        function(e) {
            e[e["CHECK_ACCOUNT"] = 0] = "CHECK_ACCOUNT",
            e[e["CHECK_ACCOUNT_FAIL"] = 1] = "CHECK_ACCOUNT_FAIL",
            e[e["ACCOUNT_DEACTIVATION"] = 2] = "ACCOUNT_DEACTIVATION",
            e[e["ACCOUNT_DEACTIVATION_SUCCESS"] = 3] = "ACCOUNT_DEACTIVATION_SUCCESS"
        }(o || (o = {})),
        function(e) {
            e[e["SET_EMAIL"] = 0] = "SET_EMAIL",
            e[e["VERIFICATION"] = 1] = "VERIFICATION",
            e[e["SET_PASSWORD"] = 2] = "SET_PASSWORD"
        }(i || (i = {})),
        function(e) {
            e[e["EMAIL"] = 0] = "EMAIL",
            e[e["ACCOUNT_NAME"] = 1] = "ACCOUNT_NAME"
        }(a || (a = {})),
        function(e) {
            e[e["UNKNOWN"] = 0] = "UNKNOWN",
            e[e["MOBILE"] = 1] = "MOBILE",
            e[e["EMAIL"] = 2] = "EMAIL",
            e[e["GOOGLE"] = 20] = "GOOGLE",
            e[e["FACEBOOK"] = 21] = "FACEBOOK",
            e[e["APPLE"] = 22] = "APPLE",
            e[e["TWITTER"] = 23] = "TWITTER",
            e[e["GAME_CENTER"] = 24] = "GAME_CENTER",
            e[e["PASSWORD"] = 32] = "PASSWORD"
        }(c || (c = {})),
        function(e) {
            e["UNKNOWN"] = "",
            e["FORGOT_PASSWORD"] = "forgot-password",
            e["BIND_EMAIL"] = "bind-email",
            e["BIND_PSN"] = "bind-psn",
            e["BIND_CX"] = "bind-cx",
            e["BIND_THIRD"] = "bind-third",
            e["SECURITY_VERIFICATION"] = "security-verification",
            e["VN_REAL_NAME"] = "vn-real-name",
            e["GAME_AUTH"] = "game-auth",
            e["AGE_VERIFY"] = "age-verify",
            e["AGE_APPEAL"] = "age-appeal",
            e["RETURN_USER_INFO"] = "return-user-info",
            e["CHILD_REGISTER"] = "child-register",
            e["PARENT_VERIFY"] = "parent-verify",
            e["BIND_USERNAME"] = "bind-username",
            e["BIND_MOBILE"] = "bind-mobile",
            e["REBIND_EMAIL"] = "rebind-email",
            e["CHANGE_PASSWORD"] = "change-password",
            e["DELETE_ACCOUNT"] = "delete-account",
            e["USER_CENTER"] = "user-center",
            e["SWITCH_ACCOUNT"] = "switch-account",
            e["UPDATE_PARENT_EMAIL"] = "update-parent-email"
        }(u || (u = {})),
        function(e) {
            e["EMAIL_LOGIN"] = "email",
            e["USERNAME_LOGIN"] = "username",
            e["FB_LOGIN"] = "fb",
            e["GL_LOGIN"] = "gl",
            e["AP_LOGIN"] = "ap",
            e["TW_LOGIN"] = "tw"
        }(s || (s = {})),
        function(e) {
            e["ThirdpartyUnknown"] = "unknown",
            e["ThirdpartyFacebook"] = "fb",
            e["ThirdpartyTwitter"] = "tw",
            e["ThirdpartyGoogle"] = "gl",
            e["ThirdpartyGameCenter"] = "gc",
            e["ThirdpartyApple"] = "ap",
            e["ThirdpartySony"] = "sn",
            e["ThirdpartySteam"] = "nt",
            e["ThirdpartyXbox"] = "cx"
        }(l || (l = {})),
        function(e) {
            e[e["STATUS_NEW"] = 0] = "STATUS_NEW",
            e[e["STATUS_BIRTHDAY_REQUIRED"] = 1] = "STATUS_BIRTHDAY_REQUIRED",
            e[e["STATUS_BIRTHDAY_ALLOWED"] = 2] = "STATUS_BIRTHDAY_ALLOWED",
            e[e["STATUS_PARENT_REQUIRED"] = 3] = "STATUS_PARENT_REQUIRED",
            e[e["STATUS_PARENT_PENDING"] = 4] = "STATUS_PARENT_PENDING",
            e[e["STATUS_PROHIBITED"] = 11] = "STATUS_PROHIBITED"
        }(d || (d = {})),
        function(e) {
            e[e["Unspecified"] = 0] = "Unspecified",
            e[e["Init"] = 1] = "Init",
            e[e["Verifying"] = 2] = "Verifying",
            e[e["Verified"] = 3] = "Verified",
            e[e["ParentLinked"] = 4] = "ParentLinked",
            e[e["NeedChildEmail"] = 5] = "NeedChildEmail",
            e[e["ChildVerify"] = 6] = "ChildVerify",
            e[e["Done"] = 7] = "Done"
        }(f || (f = {})),
        function(e) {
            e["PASSWORD_LOGIN"] = "password-login",
            e["EMAIL_REGISTER"] = "email-register",
            e["FORGOT_PASSWORD"] = "forgot-password",
            e["BIND_THIRD"] = "bind-third",
            e["BIND_EMAIL"] = "bind-email",
            e["BIND_PSN"] = "bind-psn",
            e["BIND_STEAM"] = "bind-steam",
            e["BIND_CX"] = "bind-cx",
            e["SECURITY_VERIFICATION"] = "security-verification",
            e["CHILD_REGISTER"] = "child-register",
            e["PARENT_VERIFY"] = "parent-verify",
            e["PARENTAL_CONSENT"] = "parental-consent",
            e["AGE_VERIFY"] = "age-verify",
            e["AGE_APPEAL"] = "age-appeal",
            e["APPEAL_RESULT"] = "appeal-result",
            e["VN_REAL_NAME"] = "vn-real-name",
            e["GAME_AUTH"] = "game-auth",
            e["BIND_USERNAME"] = "bind-username",
            e["BIND_MOBILE"] = "bind-mobile",
            e["REBIND_EMAIL"] = "rebind-email",
            e["CHANGE_PASSWORD"] = "change-password",
            e["DELETE_ACCOUNT"] = "delete-account",
            e["GAME_USER_CENTER"] = "game-user-center",
            e["FORGOT_PASSWORD_SET_ACC"] = "forgot-password/set-acc",
            e["FORGOT_PASSWORD_VERIFY"] = "forgot-password/verify",
            e["FORGOT_PASSWORD_SET_PWD"] = "forgot-password/set-pwd",
            e["EMAIL_REGISTER_SET_ACC"] = "email-register/set-acc",
            e["EMAIL_REGISTER_VERIFY"] = "email-register/verify",
            e["EMAIL_REGISTER_SET_PWD"] = "email-register/set-pwd",
            e["BIND_EMAIL_SET_ACC"] = "bind-email/set-acc",
            e["BIND_EMAIL_SET_PWD"] = "bind-email/set-pwd",
            e["BIND_EMAIL_SUCCESS"] = "bind-email/success",
            e["UPDATE_PARENT_EMAIL"] = "update-parent-email",
            e["PARENTAL_DIRECT_NOTICE"] = "parental-direct-notice",
            e["PARENTAL_DIRECT_NOTICE_VERIFYING"] = "parental-direct-notice/verifying",
            e["PARENTAL_DIRECT_NOTICE_CONFIRM"] = "parental-direct-notice/confirm",
            e["PARENTAL_DIRECT_NOTICE_SUCCESS"] = "parental-direct-notice/success",
            e["PARENTAL_DIRECT_NOTICE_PENDING"] = "parental-direct-notice/pending"
        }(p || (p = {})),
        function(e) {
            e["light"] = "light",
            e["dark"] = "dark"
        }(_ || (_ = {})),
        function(e) {
            e["default"] = "default",
            e["hk4e"] = "hk4e",
            e["hoyolab"] = "hoyolab",
            e["bbs"] = "bbs",
            e["bh3"] = "bh3",
            e["nap"] = "nap",
            e["hkrpg"] = "hkrpg",
            e["nxx"] = "nxx",
            e["ys"] = "ys",
            e["rpg"] = "rpg",
            e["wd"] = "wd",
            e["hyp"] = "hyp",
            e["abc"] = "abc"
        }(v || (v = {})),
        function(e) {
            e["BRIDGE"] = "BRIDGE",
            e["WEB"] = "WEB"
        }(m || (m = {})),
        function(e) {
            e[e["Unknown"] = 0] = "Unknown",
            e[e["IOS"] = 1] = "IOS",
            e[e["Android"] = 2] = "Android",
            e[e["PC"] = 3] = "PC",
            e[e["WEB"] = 4] = "WEB",
            e[e["WAP"] = 5] = "WAP",
            e[e["PS4"] = 6] = "PS4",
            e[e["Nintendo"] = 7] = "Nintendo",
            e[e["CloudAndroid"] = 8] = "CloudAndroid",
            e[e["CloudPC"] = 9] = "CloudPC",
            e[e["CloudiOS"] = 10] = "CloudiOS",
            e[e["PS5"] = 11] = "PS5",
            e[e["Xbox"] = 26] = "Xbox"
        }(g || (g = {}));
        g.Unknown,
        g.IOS,
        g.Android,
        g.PC,
        g.WAP,
        g.WEB,
        g.CloudAndroid,
        g.CloudPC,
        g.CloudiOS;
        var y, I, k, w = {
            [l.ThirdpartyApple]: c.APPLE,
            [l.ThirdpartyGoogle]: c.GOOGLE,
            [l.ThirdpartyTwitter]: c.TWITTER,
            [l.ThirdpartyFacebook]: c.FACEBOOK,
            [l.ThirdpartyGameCenter]: c.GAME_CENTER
        };
        (function(e) {
            e["NEW"] = "StatusNew",
            e["VERIFIED"] = "StatusVerified"
        }
        )(y || (y = {})),
        function(e) {
            e["ActionUnknown"] = "",
            e["ActionTypeParentLogin"] = "age_gate_parent",
            e["ActionBindThirdParty"] = "bind_thirdparty",
            e["ActionUnbindThirdParty"] = "unbind_thirdparty",
            e["ActionLogin"] = "login",
            e["ActionRegist"] = "regist",
            e["ActionRegistByEmail"] = "regist_by_email",
            e["ActionLoginByCatpcha"] = "login_by_captcha",
            e["ActionLoginByPassword"] = "login_by_password",
            e["ActionLoginByFlash"] = "login_by_flash",
            e["ActionBindMobile"] = "bind_mobile",
            e["ActionBindEmail"] = "bind_email",
            e["ActionRebindMobile"] = "rebind_mobile",
            e["ActionRebindMobileEnd"] = "rebind_mobile_end",
            e["ActionReactivateAccount"] = "reactivate_account",
            e["ActionLoginVerify"] = "login_verfiy",
            e["ActionChangePassword"] = "change_password",
            e["ActionForgetPassword"] = "forget_password",
            e["ActionAppeal"] = "appeal",
            e["ActionAppealRebindMobile"] = "appeal_rebind_mobile",
            e["ActionAppealRebindMobileEnd"] = "appeal_rebind_mobile_end",
            e["ActionVerifyComponent"] = "verify_for_component",
            e["ActionRealName"] = "real_name",
            e["ActionGameAuth"] = "game_auth",
            e["ActionBindUsername"] = "bind_username",
            e["ActionRebindEmail"] = "rebind_email",
            e["ActionUnbindMobile"] = "unbind_mobile",
            e["ActionDeleteAccount"] = "delete_account",
            e["ActionAgeGateParent"] = "age_gate_parent",
            e["ActionBindGuardian"] = "bind_guardian",
            e["ActionBindRealname"] = "bind_realname"
        }(I || (I = {})),
        function(e) {
            e[e["TokenTypeUnknown"] = 0] = "TokenTypeUnknown",
            e[e["TokenTypeStoken"] = 1] = "TokenTypeStoken",
            e[e["TokenTypeLtoken"] = 2] = "TokenTypeLtoken",
            e[e["TokenTypeCookieToken"] = 4] = "TokenTypeCookieToken",
            e[e["TokenTypeCookieTokenAndLToken"] = 6] = "TokenTypeCookieTokenAndLToken"
        }(k || (k = {}));
        var b, A = {
            PASSWORD_LOGIN: "PASSWORD_LOGIN",
            FORGOT_PASSWORD: "FORGOT_PASSWORD",
            EMAIL_REGISTER: "EMAIL_REGISTER",
            BIND_EMAIL: "BIND_EMAIL",
            BIND_PSN: "BIND_PSN",
            BIND_CX: "BIND_CX",
            BIND_THIRD: "BIND_THIRD",
            SECURITY_VERIFICATION: "SECURITY_VERIFICATION",
            AGE_VERIFY: "AGE_VERIFY",
            AGE_APPEAL: "AGE_APPEAL",
            CHILD_REGISTER: "CHILD_REGISTER",
            PARENT_VERIFY: "PARENT_VERIFY",
            PARENTAL_CONSENT: "PARENTAL_CONSENT",
            VN_REAL_NAME: "VN_REAL_NAME",
            GAME_AUTH: "GAME_AUTH",
            BIND_USERNAME: "BIND_USERNAME",
            BIND_MOBILE: "BIND_MOBILE",
            REBIND_EMAIL: "REBIND_EMAIL",
            CHANGE_PASSWORD: "CHANGE_PASSWORD",
            DELETE_ACCOUNT: "DELETE_ACCOUNT",
            GAME_ACCOUNT_CENTER: "GAME_ACCOUNT_CENTER",
            UPDATE_PARENT_EMAIL: "UPDATE_PARENT_EMAIL"
        };
        (function(e) {
            e[e["RISK_NEED_VERIFY_OTHER_REASON_OR_NEW_DEVICE"] = 1] = "RISK_NEED_VERIFY_OTHER_REASON_OR_NEW_DEVICE",
            e[e["BANNED_BY_RISK_CONTROL"] = 2] = "BANNED_BY_RISK_CONTROL"
        }
        )(b || (b = {}));
        var S, T = "/mobile.html", N = "/index.html", R = {
            [A.EMAIL_REGISTER]: "#/email-register",
            [A.FORGOT_PASSWORD]: "#/forgot-password",
            [A.PASSWORD_LOGIN]: "#/password-login",
            [A.BIND_EMAIL]: "#/bind-email",
            [A.BIND_PSN]: "#/bind-psn",
            [A.BIND_CX]: "#/bind-cx",
            [A.BIND_THIRD]: "#/bind-third",
            [A.SECURITY_VERIFICATION]: "#/security-verification",
            [A.AGE_VERIFY]: "#/age-verify",
            [A.AGE_APPEAL]: "#/age-appeal",
            [A.CHILD_REGISTER]: "#/child-register",
            [A.PARENT_VERIFY]: "#/parent-verify",
            [A.PARENTAL_CONSENT]: "#/parental-consent",
            [A.VN_REAL_NAME]: "#/vn-real-name",
            [A.GAME_AUTH]: "#/game-auth",
            [A.BIND_USERNAME]: "#/bind-username",
            [A.BIND_MOBILE]: "#/bind-mobile",
            [A.REBIND_EMAIL]: "#/rebind-email",
            [A.CHANGE_PASSWORD]: "#/change-password",
            [A.DELETE_ACCOUNT]: "#/delete-account",
            [A.GAME_ACCOUNT_CENTER]: "#/game-user-center",
            [A.UPDATE_PARENT_EMAIL]: "#/update-parent-email"
        }, O = {
            [c.GOOGLE]: "gl",
            [c.FACEBOOK]: "fb",
            [c.APPLE]: "ap",
            [c.TWITTER]: "tw",
            [c.GAME_CENTER]: "gc"
        }, C = {
            ChangeBrowser: "/change-browser.html",
            CrossLogin: "/cross-login.html",
            CommunityInit: "/community-init.html",
            AgreementInGame: "/agreement-in-game.html",
            ThirdPartyOAuth: "/third-party-oauth.html",
            AgeVerifyRedirect: "/age-verify-redirect.html",
            ContentPage: "/content-page.html",
            OAuthResultCallback: "/oauth-result-callback.html"
        };
        (function(e) {
            e[e["NETWORK_ERROR"] = -1] = "NETWORK_ERROR",
            e[e["TOKEN_INVALID"] = -100] = "TOKEN_INVALID",
            e[e["INVALID_PARENT_TOKEN"] = -101] = "INVALID_PARENT_TOKEN",
            e[e["INTERNAL_ERROR"] = 1500] = "INTERNAL_ERROR",
            e[e["SERVICE_UNAVAILABLE"] = -502] = "SERVICE_UNAVAILABLE",
            e[e["INVALID_ACCOUNT"] = -105] = "INVALID_ACCOUNT",
            e[e["USER_NOT_EXIST"] = -3203] = "USER_NOT_EXIST",
            e[e["WRONG_PASSWORD"] = -3208] = "WRONG_PASSWORD",
            e[e["EMAIL_REGISTERED"] = -3204] = "EMAIL_REGISTERED",
            e[e["AIGIS_FAIL"] = -3101] = "AIGIS_FAIL",
            e[e["INVALID_VERIFY"] = -3003] = "INVALID_VERIFY",
            e[e["PASSWORD_NOT_SET"] = -3233] = "PASSWORD_NOT_SET",
            e[e["NEW_DEVICE_VERIFICATION"] = -3239] = "NEW_DEVICE_VERIFICATION",
            e[e["RISK_NEED_VERIFY_OTHER_REASON"] = -3240] = "RISK_NEED_VERIFY_OTHER_REASON",
            e[e["BANNED_BY_RISK_CONTROL"] = -3105] = "BANNED_BY_RISK_CONTROL",
            e[e["HYV_ACCOUNT_BINDED_SONY"] = -3261] = "HYV_ACCOUNT_BINDED_SONY",
            e[e["SONY_BINDED_HYV_ACCOUNT"] = -3262] = "SONY_BINDED_HYV_ACCOUNT",
            e[e["HYV_ACCOUNT_BINDED_CX"] = -3280] = "HYV_ACCOUNT_BINDED_CX",
            e[e["CX_BINDED_HYV_ACCOUNT"] = -3281] = "CX_BINDED_HYV_ACCOUNT",
            e[e["INVALID_CHILD_TICKET"] = -4200] = "INVALID_CHILD_TICKET",
            e[e["BIRTHDAY_ALREADY_SET"] = -4201] = "BIRTHDAY_ALREADY_SET",
            e[e["CHANGE_PARENT_EMAIL_NOT_ALLOWED"] = -4202] = "CHANGE_PARENT_EMAIL_NOT_ALLOWED",
            e[e["INVALID_PAYLOAD"] = -4209] = "INVALID_PAYLOAD",
            e[e["INVALID_APPEAL_TICKET"] = -4215] = "INVALID_APPEAL_TICKET",
            e[e["KWS_VERIFY_TOO_MANY"] = -4216] = "KWS_VERIFY_TOO_MANY",
            e[e["INVALID_PARENT_TICKET"] = -4204] = "INVALID_PARENT_TICKET",
            e[e["AGE_GATE_LOGIN_RESTRICTED_CHALLENGE"] = -4212] = "AGE_GATE_LOGIN_RESTRICTED_CHALLENGE",
            e[e["AGE_GATE_REGISTER_RESTRICTED_CHALLENGE"] = -4213] = "AGE_GATE_REGISTER_RESTRICTED_CHALLENGE",
            e[e["NON_ADULT_BIRTHDAY_EXPECTED"] = -4223] = "NON_ADULT_BIRTHDAY_EXPECTED",
            e[e["HYV_ACCOUNT_BINDED_THIRDPARTY"] = -3305] = "HYV_ACCOUNT_BINDED_THIRDPARTY"
        }
        )(S || (S = {}));
        var L, P, x, D, B = 6e4;
        (function(e) {
            e[e["LOGIN"] = 1] = "LOGIN",
            e[e["REGISTER"] = 2] = "REGISTER",
            e[e["BIND"] = 3] = "BIND"
        }
        )(L || (L = {})),
        function(e) {
            e[e["ACCOUNT"] = 50] = "ACCOUNT",
            e[e["PASSWORD"] = 30] = "PASSWORD",
            e[e["CAPTCHA"] = 6] = "CAPTCHA",
            e[e["USERNAME"] = 15] = "USERNAME"
        }(P || (P = {})),
        function(e) {
            e[e["USERNAME"] = 6] = "USERNAME"
        }(x || (x = {})),
        function(e) {
            e["ON_BLUR"] = "onBlur",
            e["ON_CHANGE"] = "onChange",
            e["ON_INPUT"] = "onInput"
        }(D || (D = {}));
        var U, Z = {
            LANDSCAPE: "landscape",
            PORTRAIT: "portrait"
        }, G = 5, M = window.screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange");
        (function(e) {
            e["POPUP"] = "popup",
            e["REDIRECT"] = "redirect"
        }
        )(U || (U = {}));
        var F, K, Y, V, $ = "v2.webLogin";
        (function(e) {
            e[e["TIMEOUT"] = -100001] = "TIMEOUT",
            e[e["CLOSE"] = -100002] = "CLOSE",
            e[e["INVALID_ACTION"] = -100003] = "INVALID_ACTION",
            e[e["BEOWSER_NOT_SUPPORTED"] = -100004] = "BEOWSER_NOT_SUPPORTED",
            e[e["SYNC_CROSS_LOGIN_FAIL"] = -100005] = "SYNC_CROSS_LOGIN_FAIL",
            e[e["USER_CANCEL_COMMUNITY_INIT"] = -100006] = "USER_CANCEL_COMMUNITY_INIT",
            e[e["USER_COMMUNITY_INIT_FAIL"] = -100007] = "USER_COMMUNITY_INIT_FAIL",
            e[e["UNKNOWN"] = -100099] = "UNKNOWN"
        }
        )(F || (F = {})),
        function(e) {
            e[e["GEETEST"] = 1] = "GEETEST",
            e[e["IDENTITY"] = 2] = "IDENTITY"
        }(K || (K = {})),
        function(e) {
            e[e["SUCCESS"] = 0] = "SUCCESS",
            e[e["FAIL"] = 1] = "FAIL"
        }(Y || (Y = {})),
        function(e) {
            e["UNKNOWN"] = "UNKNOWN",
            e["NEW"] = "NEW",
            e["EXISTING"] = "EXISTING",
            e["OTHER_EXISTING"] = "OTHER_EXISTING"
        }(V || (V = {}));
        var J, H, j, W, z, q, Q, X, ee = "HYV_LOGIN_PLATFORM_";
        (function(e) {
            e[e["UNSPECIFIED"] = 0] = "UNSPECIFIED",
            e[e["AGE_SELECT"] = 1] = "AGE_SELECT",
            e[e["SELECT_VERIFY_METHOD"] = 2] = "SELECT_VERIFY_METHOD",
            e[e["SET_PARENT_EMAIL"] = 3] = "SET_PARENT_EMAIL",
            e[e["PENDING_PARENT"] = 4] = "PENDING_PARENT",
            e[e["PARENT_CONSENT_REQUIRED"] = 5] = "PARENT_CONSENT_REQUIRED",
            e[e["ACCESS_ALLOWD"] = 6] = "ACCESS_ALLOWD",
            e[e["TICKET_EXPIRE"] = 7] = "TICKET_EXPIRE",
            e[e["PROHIBITED"] = 8] = "PROHIBITED",
            e[e["NETWORK_ERROR"] = 9] = "NETWORK_ERROR"
        }
        )(J || (J = {})),
        function(e) {
            e[e["UNSPECIFIED"] = 0] = "UNSPECIFIED",
            e[e["AGE_SELECT"] = 1] = "AGE_SELECT",
            e[e["SET_EMAIL"] = 2] = "SET_EMAIL",
            e[e["REQUEST_SENT"] = 3] = "REQUEST_SENT",
            e[e["TICKET_EXPIRE"] = 4] = "TICKET_EXPIRE",
            e[e["NETWORK_ERROR"] = 5] = "NETWORK_ERROR"
        }(H || (H = {})),
        function(e) {
            e[e["UNSPECIFIED"] = 0] = "UNSPECIFIED",
            e[e["INIT"] = 1] = "INIT",
            e[e["VERIFYING"] = 2] = "VERIFYING",
            e[e["PENDING_LINK"] = 3] = "PENDING_LINK",
            e[e["PENDING_HYV_AGREEMENT"] = 4] = "PENDING_HYV_AGREEMENT",
            e[e["PENDING_GAME_AGREEMENT"] = 5] = "PENDING_GAME_AGREEMENT",
            e[e["PENDING_OTHER_AGREEMENTS"] = 6] = "PENDING_OTHER_AGREEMENTS",
            e[e["PENDING_PAYMENT_PERMISSION"] = 7] = "PENDING_PAYMENT_PERMISSION",
            e[e["NEED_CHILD_EMAIL"] = 8] = "NEED_CHILD_EMAIL",
            e[e["CHILD_VERIFY"] = 9] = "CHILD_VERIFY",
            e[e["DONE"] = 10] = "DONE",
            e[e["TICKET_EXPIRE"] = 11] = "TICKET_EXPIRE",
            e[e["NETWORK_ERROR"] = 12] = "NETWORK_ERROR",
            e[e["NOT_NOW_LINK"] = 13] = "NOT_NOW_LINK",
            e[e["NOT_NOW_AGREEMENT"] = 14] = "NOT_NOW_AGREEMENT"
        }(j || (j = {})),
        function(e) {
            e["SWITCH_STATUS"] = "SWITCH_STATUS",
            e["OPTIONAL_AGREEMENT"] = "OPTIONAL_AGREEMENT",
            e["ACTION_TICKET_INFO"] = "ACTION_TICKET_INFO",
            e["EXTRA_HEADER_INFO"] = "EXTRA_HEADER_INFO",
            e["TRACKING_MAP"] = "TRACKING_MAP",
            e["LIFECYCLE_ID"] = "LIFECYCLE_ID",
            e["TEST_ACCOUNT_LIST"] = "TEST_ACCOUNT_LIST",
            e["LOAD_TIMEOUT"] = "LOAD_TIMEOUT",
            e["BOX_CONFIG"] = "BOX_CONFIG",
            e["BOX_CONFIG_LAST_UPDATED"] = "BOX_CONFIG_LAST_UPDATED",
            e["MA_PASSPORT_REGION"] = "ma_passport_region",
            e["MA_PASSPORT_REGION_ENABLE"] = "ma_passport_region_enable"
        }(W || (W = {})),
        function(e) {
            e[e["COOKIE"] = 0] = "COOKIE",
            e[e["LOCAL_STORAGE"] = 1] = "LOCAL_STORAGE",
            e[e["SESSION_STORAGE"] = 2] = "SESSION_STORAGE"
        }(z || (z = {})),
        function(e) {
            e["BIND_MANUAL"] = "bindManual",
            e["BIND_THIRDPARTY"] = "bindThirdparty",
            e["SUCCESS"] = "success"
        }(q || (q = {})),
        function(e) {
            e["LOGIN_BY_PASSWORD"] = "loginByPassword",
            e["LOGIN_BY_THIRD"] = "loginByThird",
            e["BIND_EMAIL_IN_PASSPORT"] = "bindEmailInPassport",
            e["BIND_EMAIL_FOR_PS"] = "bindEmailForPs"
        }(Q || (Q = {})),
        function(e) {
            e["BIND"] = "bind",
            e["SUCCESS"] = "success",
            e["BINDED"] = "binded",
            e["EXPIRED"] = "expired",
            e["LOADING"] = "loading",
            e["ERROR"] = "error"
        }(X || (X = {}));
        var ne, te, re, oe, ie = {
            login: "login"
        }, ae = {
            pw: "password_login",
            [l.ThirdpartyApple]: "apple_login",
            [l.ThirdpartyFacebook]: "facebook_login",
            [l.ThirdpartyTwitter]: "twitter_login",
            [l.ThirdpartyGoogle]: "google_login",
            [l.ThirdpartySony]: "sony_login",
            [l.ThirdpartyGameCenter]: "gamecenter_login",
            [l.ThirdpartySteam]: "nonExclusiveSteam_login"
        }, ce = {
            [l.ThirdpartyFacebook]: "Facebook",
            [l.ThirdpartyTwitter]: "Twitter",
            [l.ThirdpartyGoogle]: "Google",
            [l.ThirdpartyGameCenter]: "Game Center",
            [l.ThirdpartyApple]: "Apple",
            [l.ThirdpartySteam]: "Steam",
            [l.ThirdpartySony]: "PlayStation™ Network",
            [l.ThirdpartyXbox]: "Microsoft"
        }, ue = {
            [l.ThirdpartyGoogle]: "google",
            [l.ThirdpartyApple]: "apple",
            [l.ThirdpartyGameCenter]: "game_center",
            [l.ThirdpartyTwitter]: "twitter",
            [l.ThirdpartyFacebook]: "facebook"
        };
        (function(e) {
            e["third_login"] = "thirdLogin",
            e["google_login"] = "glLogin",
            e["facebook_login"] = "fbLogin",
            e["apple_login"] = "apLogin",
            e["twitter_login"] = "twLogin",
            e["psn_login"] = "snlogin",
            e["pwd_login_tab"] = "pwdLogin",
            e["account_register_tab"] = "accountRegister",
            e["password_reset_entry"] = "forgotPwdEntry",
            e["common_question_entry"] = "cmnQuestionEntry",
            e["marketing_authorization"] = "marketAuth"
        }
        )(ne || (ne = {})),
        function(e) {
            e["third_login"] = "third_login",
            e["google_login"] = "google_login",
            e["facebook_login"] = "facebook_login",
            e["apple_login"] = "apple_login",
            e["twitter_login"] = "twitter_login",
            e["psn_login"] = "psn_login",
            e["non_exclusive_steam_login"] = "non_exclusive_steam_login",
            e["pwd_login_tab"] = "pwd_login_tab",
            e["account_register_tab"] = "account_register_tab",
            e["password_reset_entry"] = "password_reset_entry",
            e["common_question_entry"] = "common_question_entry",
            e["marketing_authorization"] = "marketing_authorization"
        }(te || (te = {})),
        function(e) {
            e[e["REGISTER"] = 1] = "REGISTER",
            e[e["LOGIN"] = 2] = "LOGIN",
            e[e["PAYMENT"] = 3] = "PAYMENT",
            e[e["LOGIN_DIRECT_NOTICE_UPDATE"] = 4] = "LOGIN_DIRECT_NOTICE_UPDATE",
            e[e["LOGIN_HYV_UPDATE"] = 5] = "LOGIN_HYV_UPDATE",
            e[e["UNSPECIFIED"] = 0] = "UNSPECIFIED"
        }(re || (re = {})),
        function(e) {
            e["UNSPECIFIED"] = "unspecified",
            e["PARENT"] = "parent",
            e["CHILD"] = "child"
        }(oe || (oe = {}));
        var se, le, de = {
            [ne.third_login]: te.third_login,
            [ne.google_login]: te.google_login,
            [ne.facebook_login]: te.facebook_login,
            [ne.apple_login]: te.apple_login,
            [ne.twitter_login]: te.twitter_login,
            [ne.psn_login]: te.psn_login,
            [ne.pwd_login_tab]: te.pwd_login_tab,
            [ne.account_register_tab]: te.account_register_tab,
            [ne.password_reset_entry]: te.password_reset_entry,
            [ne.common_question_entry]: te.common_question_entry,
            [ne.marketing_authorization]: te.marketing_authorization
        }, fe = {
            NOT_EXIST: -1,
            DENY: 1,
            GRANTED: 2
        }, pe = {
            [fe.GRANTED]: !0,
            [fe.NOT_EXIST]: !0,
            [fe.DENY]: !1
        }, _e = {
            [v.hk4e]: "common_game_label_hk4e",
            [v.hkrpg]: "common_game_label_hkrpg",
            [v.nap]: "common_game_label_nap",
            [v.nxx]: "common_game_label_nxx",
            [v.bh3]: "common_game_label_bh3",
            [v.bbs]: "common_game_label_bbs",
            [v.abc]: "common_game_label_abc"
        }, ve = {
            PAYMENT: "allow_pay",
            COMMUNITY: "allow_community"
        };
        ve.PAYMENT,
        ve.COMMUNITY;
        (function(e) {
            e[e["UNSET"] = 0] = "UNSET",
            e[e["CHILD"] = 1] = "CHILD",
            e[e["TEEN"] = 2] = "TEEN"
        }
        )(se || (se = {})),
        function(e) {
            e["YEAR_MONTH"] = "YearMonth",
            e["YEAR_MONTH_DAY"] = "YearMonthDay",
            e["YEAR_MONTH_DAY_TIME"] = "YearMonthDayTime",
            e["YEAR_MONTH_DAY_TIME_LONG"] = "YearMonthDayTimeLong"
        }(le || (le = {}));
        var me, ge = {
            JP: "common_birthday_help_email",
            US: "common_birthday_help_age_gate_email"
        }, he = {
            US: "common_country_help_age_gate_email",
            NON_US: "common_country_help_email"
        }, Ee = {
            UNSPECIFIED: "unspecified",
            REGISTER: "register",
            LOGIN: "login",
            PAYMENT: "payment",
            LOGIN_HYV_UPDATE: "hoyoversePrivacyUpdate"
        }, ye = {
            HYV: "hyv",
            GAME: "game",
            OTHER: "other"
        }, Ie = {
            "zh-cn": "zh-cn",
            "zh-tw": "zh-tw",
            "en-us": "en-us",
            "fr-fr": "fr-fr",
            "de-de": "de-de",
            "es-es": "es-es",
            "pt-pt": "pt-pt",
            "ru-ru": "ru-ru",
            "ja-jp": "ja-jp",
            "ko-kr": "ko-kr",
            "th-th": "th-th",
            "vi-vn": "vi-vn",
            "id-id": "id-id",
            "tr-tr": "tr-tr",
            "it-it": "it-it",
            en: "en-us",
            fr: "fr-fr",
            de: "de-de",
            es: "es-es",
            pt: "pt-pt",
            ru: "ru-ru",
            ja: "ja-jp",
            ko: "ko-kr",
            th: "th-th",
            vi: "vi-vn",
            id: "id-id",
            tr: "tr-tr",
            it: "it-it"
        };
        (function(e) {
            e["SG"] = "SG",
            e["US"] = "US",
            e["EU"] = "EU"
        }
        )(me || (me = {}));
        var ke, we = "porte-fe-os", be = "config";
        (function(e) {
            e["INITIAL"] = "initial",
            e["SUCCESS"] = "success"
        }
        )(ke || (ke = {}))
    },
    22213: function(e, n, t) {
        "use strict";
        t.d(n, {
            Cs: function() {
                return r
            },
            Nd: function() {
                return a
            },
            um: function() {
                return i
            }
        });
        var r, o;
        t(98518);
        (function(e) {
            e["H5LOG_INFO"] = "login-platform:h5log-info",
            e["H5LOG_WARN"] = "login-platform:h5log-warn",
            e["H5LOG_ERROR"] = "login-platform:h5log-error",
            e["INPUT_FOCUS"] = "login-platform:input-focus",
            e["INPUT_BLUR"] = "login-platform:input-blur",
            e["CLOSE"] = "login-platform:close",
            e["ERROR"] = "login-platform:error",
            e["LOADED"] = "login-platform:loaded",
            e["LOGIN_SUCCESS"] = "login-platform:login-success",
            e["REGISTER_SUCCESS"] = "login-platform:register-success",
            e["VERIFY_SUCCESS"] = "login-platform:verify-success",
            e["BIND_EMAIL_SUCCESS"] = "login-platform:bind-email-success",
            e["BIND_THIRD_SUCCESS"] = "login-platform:bind-third-success",
            e["COMMUNITY_INIT_SUCCESS"] = "login-platform:community-init-success",
            e["COMMUNITY_INIT_FAIL"] = "login-platform:community-init-fail",
            e["BIND_USERNAME_SUCCESS"] = "login-platform:bind-username-success",
            e["BIND_MOBILE_SUCCESS"] = "login-platform:bind-mobile-success",
            e["REBIND_EMAIL_SUCCESS"] = "login-platform:rebind-email-success",
            e["CHANGE_PASSWORD_SUCCESS"] = "login-platform:change-password-success",
            e["DELETE_ACCOUNT_SUCCESS"] = "login-platform:delete-account-success",
            e["AGE_VERIFY_SUCCESS"] = "login-platform:age-verify-success",
            e["UPDATE_PARENT_EMAIL_SUCCESS"] = "login-platform:update-parent-email-success",
            e["OAUTH_RESULT_CALLBACK"] = "login-platform:oauth-result-callback"
        }
        )(r || (r = {})),
        function(e) {
            e["Centered"] = "1",
            e["Fullscreen"] = "2"
        }(o || (o = {}));
        var i, a = "ap_";
        (function(e) {
            e["mobilePopupStyle"] = "mps",
            e["mps"] = "mobilePopupStyle"
        }
        )(i || (i = {}))
    },
    67226: function(e, n, t) {
        "use strict";
        t.d(n, {
            Zr: function() {
                return l
            },
            jI: function() {
                return o
            },
            w1: function() {
                return r
            }
        });
        var r, o, i = t(70242);
        t(71935),
        t(8220),
        t(5165),
        t(98970),
        t(79630),
        t(32467);
        (function(e) {
            e["close"] = "close",
            e["error"] = "error",
            e["unknownMmtType"] = "unknown_mmt_type",
            e["invaildJson"] = "invaild_json",
            e["timeout"] = "timeout"
        }
        )(r || (r = {})),
        function(e) {
            e[e["success"] = 0] = "success",
            e[e["close"] = -21001] = "close",
            e[e["error"] = -21002] = "error",
            e[e["unknownMmtType"] = -21003] = "unknownMmtType",
            e[e["invaildJson"] = -21004] = "invaildJson",
            e[e["timeout"] = -21005] = "timeout"
        }(o || (o = {}));
        var a = function(e) {
            return !(null === e || void 0 === e || !e.use_v4)
        }
          , c = {
            de: "deu",
            es: "spa",
            id: "ind",
            ja: "jpn",
            pt: "por",
            th: "tha",
            vi: "vie",
            en: "eng",
            fr: "fra",
            it: "isl",
            ko: "kor",
            ru: "rus",
            tr: "tur",
            "zh-cn": "zho",
            "zh-tw": "zho-tw"
        }
          , u = window.initGeetest
          , s = window.initGeetest4
          , l = {
            defaults: {
                width: "100%",
                product: "bind",
                timeout: 1e4,
                apiv6: !0,
                lang: ""
            },
            config: function(e) {
                l.defaults = (0,
                i.Z)((0,
                i.Z)({}, l.defaults), e)
            }
        }
          , d = function(e, n) {
            var t = e.geetestData
              , i = e.lang
              , d = e.onInit
              , f = void 0 === d ? function() {}
            : d
              , p = e.onReady
              , _ = void 0 === p ? function() {}
            : p
              , v = e.onComplete
              , m = void 0 === v ? function() {}
            : v;
            return new Promise((function(e, d) {
                var p, v, g = l.defaults, h = g.timeout, E = g.width, y = g.product, I = g.lang, k = a(t), w = I || i, b = 0, A = function() {
                    p && (p.destroy(),
                    p = null);
                    var e = {
                        duration: Date.now() - b,
                        retcode: o.timeout,
                        data: {
                            error_type: r.timeout
                        }
                    };
                    m(e),
                    d({
                        data: e
                    })
                }, S = function(n) {
                    function t(e) {
                        var n = k ? "geetest_popup_ghost" : "geetest_panel_ghost";
                        e.target.className.includes(n) && e.stopPropagation(),
                        e.preventDefault()
                    }
                    function i() {
                        p && (p.destroy(),
                        p = null)
                    }
                    h && (v = setTimeout((function() {
                        A()
                    }
                    ), h)),
                    p = n,
                    n.onReady((function() {
                        _({
                            duration: Date.now() - b
                        }),
                        h && (clearTimeout(v),
                        v = null),
                        k ? n.showCaptcha() : n.verify(),
                        window.addEventListener("click", t, !0),
                        window.addEventListener("popstate", i),
                        n.onClose((function() {
                            var e = {
                                duration: Date.now() - b,
                                retcode: o.close,
                                data: {
                                    error_type: r.close
                                }
                            };
                            m(e),
                            window.removeEventListener("click", t, !0),
                            window.removeEventListener("popstate", i),
                            d({
                                data: e
                            }),
                            p = null,
                            n.destroy()
                        }
                        )),
                        n.onSuccess((function() {
                            window.removeEventListener("click", t, !0),
                            window.removeEventListener("popstate", i);
                            var r = {
                                duration: Date.now() - b,
                                retcode: o.success,
                                data: n.getValidate()
                            };
                            m(r),
                            e(r),
                            p = null,
                            n.destroy()
                        }
                        ))
                    }
                    )),
                    n.onError((function(e) {
                        window.removeEventListener("click", t, !0),
                        window.removeEventListener("popstate", i);
                        var a = {
                            duration: Date.now() - b,
                            retcode: o.error,
                            data: {
                                error_type: r.error,
                                error_data: e
                            }
                        };
                        m(a),
                        d({
                            data: a
                        }),
                        p = null,
                        n.destroy()
                    }
                    ))
                };
                if (b = Date.now(),
                f({}),
                k && n) {
                    var T = t.risk_type
                      , N = t.gt
                      , R = n.session_id;
                    s ? s({
                        captchaId: N,
                        riskType: T,
                        language: c[w] || "eng",
                        product: y,
                        hideSuccess: !0,
                        userInfo: JSON.stringify({
                            session_id: R
                        }),
                        onError: function(e) {
                            d({
                                retcode: -1,
                                message: "geetest fail, please retry",
                                data: {
                                    error_type: "error",
                                    error_data: e
                                }
                            })
                        }
                    }, S) : d({
                        retcode: -1,
                        message: "geetest fail, please retry",
                        data: {
                            error_type: "resources_timeout"
                        }
                    })
                } else {
                    var O = t.gt
                      , C = t.challenge
                      , L = t.new_captcha
                      , P = t.success;
                    u ? u({
                        width: E,
                        lang: w,
                        gt: O,
                        challenge: C,
                        new_captcha: L,
                        product: y,
                        offline: !P,
                        api_server: "api-na.geetest.com",
                        onError: function(e) {
                            d({
                                retcode: -1,
                                message: "geetest fail, please retry",
                                data: {
                                    error_type: "error",
                                    error_data: e
                                }
                            })
                        }
                    }, S) : d({
                        retcode: -1,
                        message: "geetest fail, please retry",
                        data: {
                            error_type: "resources_timeout"
                        }
                    })
                }
            }
            ))
        };
        n["ZP"] = d
    },
    22843: function(e, n, t) {
        "use strict";
        t.d(n, {
            O: function() {
                return E
            },
            J: function() {
                return I
            }
        });
        var r = t(67787)
          , o = t(47796)
          , i = (t(27920),
        t(99944),
        t(79541))
          , a = {
            initEnv: "util",
            initDir: "/src/hooks/i18n/mi18n",
            initJson: !1,
            appId: "m04131715591001",
            i18nVersion: "default",
            gameBiz: "plat_oversea",
            languages: ["zh-cn", "zh-tw", "en-us", "fr-fr", "de-de", "ja-jp", "ko-kr", "th-th", "vi-vn", "id-id", "es-es", "pt-pt", "ru-ru"],
            inner: !1
        };
        t(71935),
        t(78766),
        t(53861),
        t(30359),
        t(63785),
        t(95151),
        t(89069),
        t(86991),
        t(26188);
        function c(e) {
            return "undefined" !== typeof e && null !== e
        }
        function u(e) {
            return !e || 0 === Object.keys(e).length
        }
        function s(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }
        function l(e) {
            return s(e) ? e : {}
        }
        function d(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , t = e.match(/\{[^{]*?\}/g)
              , r = e;
            return t && t.forEach((function(e, t) {
                c(n[t]) && (r = r.replace(e, n[t]))
            }
            )),
            r
        }
        function f(e, n) {
            var t = n.data
              , r = void 0 === t ? {} : t
              , o = e;
            return Object.keys(r).forEach((function(e) {
                var n = new RegExp(`{${e}}`,"g");
                c(r[e]) && (o = o.replace(n, r[e]))
            }
            )),
            o
        }
        function p(e, n, t) {
            if ("object" === typeof n) {
                var r = n.key
                  , o = e[r] || t;
                return e[r] || console.warn(`[i18n] key：${r} 不存在，核对后重试`),
                o ? f(o, n) : ""
            }
            if (Array.isArray(t) && "string" === typeof n) {
                var i = e[n] || (arguments.length <= 3 ? void 0 : arguments[3]);
                return e[n] || console.warn(`[i18n] key: ${n} 不存在，核对后重试`),
                i ? d(i, t) : ""
            }
            var a = e[n] || t;
            return a || (console.warn(`[i18n] key：${n} 不存在，核对后重试`),
            "")
        }
        function _(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (u(e))
                return t;
            if (Array.isArray(n)) {
                var r = {}
                  , o = l(t);
                return n.forEach((function(n) {
                    if ("object" === typeof n) {
                        var t = n.key;
                        r[t] = p(e, n, o[t])
                    } else
                        r[n] = p(e, n, o[n])
                }
                )),
                r
            }
            for (var i = arguments.length, a = new Array(i > 3 ? i - 3 : 0), c = 3; c < i; c++)
                a[c - 3] = arguments[c];
            return p.apply(void 0, [e, n, t].concat(a))
        }
        var v = (0,
        r.iH)({})
          , m = (0,
        r.iH)("en-us")
          , g = (0,
        i.getI18nEvent)()
          , h = "";
        g.on("langChange", function() {
            var e = (0,
            o.Z)(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = {
                                appId: a.appId,
                                gameBiz: a.gameBiz,
                                env: h,
                                lang: n,
                                zone: "s3"
                            },
                            m.value = n,
                            e.next = 4,
                            (0,
                            i.initSimpleI18n)(t);
                        case 4:
                            v.value = e.sent;
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }());
        var E = function() {
            var e = (0,
            o.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, o, c, u, s, l;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return o = n.lang,
                            c = n.env,
                            u = o,
                            h = c,
                            s = null !== (t = null !== (r = null !== u && void 0 !== u ? u : g.getLang()) && void 0 !== r ? r : (0,
                            i.getLang)()) && void 0 !== t ? t : "en-us",
                            m.value = s,
                            l = {
                                appId: a.appId,
                                gameBiz: a.gameBiz,
                                env: c,
                                lang: s,
                                zone: "s3"
                            },
                            e.next = 8,
                            (0,
                            i.initSimpleI18n)(l);
                        case 8:
                            v.value = e.sent;
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , y = function(e) {
            return "string" === typeof e ? e : "object" === typeof e && "key"in e ? e.key : void 0
        }
          , I = function() {
            var e = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , t = y(e);
                if (!e || !t || !v.value || !v.value[t])
                    return n;
                for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
                    o[i - 2] = arguments[i];
                return _.apply(void 0, [v.value, e, n].concat(o))
            }
              , n = function(e) {
                m.value = e,
                v.value = {},
                (0,
                i.setLang)(e)
            };
            return {
                t: e,
                setLang: n,
                lang: m
            }
        }
    },
    75706: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return f
            },
            g: function() {
                return d
            }
        });
        var r, o = t(70242), i = (t(71935),
        t(75428),
        t(402)), a = t(62406), c = !1, u = "apple_auth_script_id", s = new Promise((function(e) {
            r = e
        }
        )), l = function() {
            var e = document.getElementById(u);
            if (e)
                return Promise.resolve();
            var n = (0,
            a.V)();
            return (0,
            i.S)({
                element: "script",
                attrs: {
                    src: `https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/${n}/appleid.auth.js`,
                    id: u
                }
            })
        }, d = function() {
            if (!c)
                throw new Error("appleSignIn plugin is not registered");
            return s.then((function() {
                return window.AppleID.auth.signIn()
            }
            ))
        };
        function f(e) {
            c = !0,
            l().then((function() {
                var n, t, i;
                window.AppleID.auth.init((0,
                o.Z)((0,
                o.Z)({}, e), {}, {
                    scope: null !== (n = e.scope) && void 0 !== n ? n : "name email",
                    redirectURI: null !== (t = e.redirectURI) && void 0 !== t ? t : location.origin,
                    usePopup: null === (i = e.usePopup) || void 0 === i || i
                })),
                r()
            }
            ))
        }
    },
    65378: function(e, n, t) {
        "use strict";
        t.d(n, {
            d: function() {
                return r
            }
        });
        var r = function() {
            return "com.hoyoverse.platoversealogin"
        }
    },
    77456: function(e, n, t) {
        "use strict";
        t.d(n, {
            h: function() {
                return u
            }
        });
        var r = t(70329)
          , o = t(86656)
          , i = t(33181)
          , a = (t(53861),
        t(86937),
        t(27920),
        t(98518))
          , c = function() {
            function e(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "[ThirdParty]";
                (0,
                r.Z)(this, e),
                (0,
                i.Z)(this, "environment", void 0),
                (0,
                i.Z)(this, "logPrefix", void 0),
                this.environment = n,
                this.logPrefix = t
            }
            return (0,
            o.Z)(e, [{
                key: "shouldLog",
                value: function() {
                    return this.environment === a.Vi.development || this.environment === a.Vi.test
                }
            }, {
                key: "log",
                value: function() {
                    if (this.shouldLog()) {
                        for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                            t[r] = arguments[r];
                        (e = console).log.apply(e, [this.logPrefix].concat(t))
                    }
                }
            }, {
                key: "warn",
                value: function() {
                    if (this.shouldLog()) {
                        for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                            t[r] = arguments[r];
                        (e = console).warn.apply(e, [this.logPrefix].concat(t))
                    }
                }
            }, {
                key: "error",
                value: function() {
                    if (this.shouldLog()) {
                        for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                            t[r] = arguments[r];
                        (e = console).error.apply(e, [this.logPrefix].concat(t))
                    }
                }
            }, {
                key: "updateEnvironment",
                value: function(e) {
                    this.environment = e
                }
            }]),
            e
        }()
          , u = function(e, n) {
            return new c(e,n)
        }
    },
    57103: function(e, n, t) {
        "use strict";
        t.d(n, {
            N: function() {
                return v
            }
        });
        var r = t(62141)
          , o = t(70242)
          , i = t(57111)
          , a = (t(71935),
        t(62402),
        t(50142),
        t(29617),
        t(53861),
        t(95151),
        t(98288),
        t(14181),
        t(75428),
        t(86937),
        t(22213))
          , c = t(17372)
          , u = t(84629)
          , s = t(98518)
          , l = t(74420)
          , d = t(20837)
          , f = t.n(d)
          , p = t(77456)
          , _ = ["st"]
          , v = function(e) {
            var n = e.environment
              , t = e.callback
              , d = e.onWindowClosed
              , v = e.logPrefix
              , m = void 0 === v ? "[PopupHandler]" : v
              , g = null
              , h = (0,
            c.k$)()
              , E = null
              , y = (0,
            p.h)(n, m)
              , I = {
                width: 500,
                height: 600,
                scrollbars: "yes",
                resizable: "yes",
                toolbar: "no",
                menubar: "no",
                location: "no",
                directories: "no",
                status: "no"
            }
              , k = function() {
                if (window.removeEventListener("message", T),
                E && (clearInterval(E),
                E = null),
                g && !g.closed)
                    try {
                        g.close()
                    } catch (e) {
                        y.warn("Error closing window:", e)
                    }
                g = null
            }
              , w = function() {
                var e;
                null === (e = g) || void 0 === e || e.focus()
            }
              , b = function() {
                return g && !g.closed
            }
              , A = function() {
                E && clearInterval(E),
                E = setInterval((function() {
                    g && g.closed && (y.log("Window closed by user detected, cleaning up resources"),
                    E && (clearInterval(E),
                    E = null),
                    null === d || void 0 === d || d(),
                    k())
                }
                ), 200)
            }
              , S = function(e) {
                var n = e || {}
                  , t = n.st
                  , r = void 0 === t ? window.location.href : t
                  , a = (0,
                i.Z)(n, _)
                  , c = new URL(r)
                  , d = c.origin
                  , p = f().stringify((0,
                o.Z)({
                    message_id: h,
                    message_origin: d
                }, a), {
                    addQueryPrefix: !0
                });
                return `${l.Z[R()].LOGIN_SINGLE_PAGE_FE_BASE.replace("hoyoverse.com", (0,
                u.K)())}${s.c_.OAuthResultCallback}${p}`
            }
              , T = function(e) {
                var n;
                if ((0,
                c.tj)(e.origin) && (null === (n = e.data) || void 0 === n ? void 0 : n.type) === a.Cs.OAUTH_RESULT_CALLBACK) {
                    var r = e.data.payload;
                    r.message_id === h && (null === t || void 0 === t || t(r),
                    k())
                }
            }
              , N = function(e) {
                var n = e.url
                  , t = e.windowFeatures
                  , i = e.allowMultipleStart
                  , a = void 0 === i || i;
                if (b()) {
                    if (!a)
                        return y.log("Existing window detected, focusing existing window"),
                        void w();
                    y.log("Existing window detected, destroying and restarting"),
                    k()
                } else
                    k();
                if (window.addEventListener("message", T),
                void 0 !== t) {
                    var c = (0,
                    o.Z)((0,
                    o.Z)({}, I), t)
                      , u = Object.entries(c).map((function(e) {
                        var n = (0,
                        r.Z)(e, 2)
                          , t = n[0]
                          , o = n[1];
                        return `${t}=${String(o)}`
                    }
                    )).join(",");
                    g = window.open(n, "_blank", u)
                } else
                    g = window.open(n, "_blank");
                if (!b()) {
                    var s = void 0 !== t ? "window" : "tab";
                    throw new Error(`Popup blocked (${s} mode)`)
                }
                A()
            }
              , R = function() {
                return n === s.Vi.development || n === s.Vi.test ? s.Vi.test : n === s.Vi.pre || n === s.Vi.prerelease ? s.Vi.pre : s.Vi.production
            };
            return {
                windowRef: g,
                messageId: h,
                init: N,
                focus: w,
                isWindowOpened: b,
                buildCallbackUrl: S,
                destroy: k
            }
        }
    },
    60369: function(e, n, t) {
        "use strict";
        t.d(n, {
            r: function() {
                return o
            }
        });
        var r = {
            "https://dev.hoyoverse.com:8080": "3128068033932026",
            "https://dev.hoyoverse.com:8083": "3128068033932026",
            "https://account-test.hoyoverse.com": "3128068033932026",
            "https://account-test.hoyolab.com": "3128068033932026",
            "https://account-pre.hoyoverse.com": "3128068033932026",
            "https://account-pre.hoyolab.com": "3128068033932026",
            "https://account.hoyoverse.com": "2099441543493930",
            "https://account.hoyolab.com": "2099441543493930",
            "https://webstatic-test.mihoyo.com": "3128068033932026",
            "https://webstatic-test.hoyoverse.com": "3128068033932026",
            "https://account.mihoyo.com": "2099441543493930",
            "https://webstatic-sea-test.mihoyo.com": "3719011044882868",
            "https://webstatic-sea-test.hoyoverse.com": "3719011044882868",
            "https://act-test.hoyoverse.com": "3719011044882868",
            "https://act-test.hoyolab.com": "3719011044882868",
            "https://sdk-test.hoyoverse.com": "3719011044882868",
            "https://zenless.hoyoverse.com": "2099441543493930",
            "https://genshin.mihoyo.com": "477564436235493",
            "https://genshin.hoyoverse.com": "477564436235493",
            "https://webstatic-sea.mihoyo.com": "146101413312764",
            "https://webstatic-sea.hoyoverse.com": "146101413312764",
            "https://act.hoyoverse.com": "146101413312764",
            "https://act.hoyolab.com": "146101413312764",
            "https://act-pre.hoyoverse.com": "146101413312764",
            "https://act-pre.hoyolab.com": "146101413312764",
            "https://sdk-pre.hoyoverse.com": "146101413312764",
            "https://sdk.hoyoverse.com": "146101413312764",
            "https://webstatic-sea.hoyolab.com": "146101413312764",
            "https://webstatic-pre.hoyoverse.com": "146101413312764",
            "https://webstatic.hoyoverse.com": "146101413312764",
            "https://webstatic.hoyolab.com": "146101413312764",
            "https://webstatic-pre.hoyolab.com": "146101413312764",
            "https://tot.tw.mihoyo.com": "201551234423325",
            "https://tot.tw.hoyoverse.com": "201551234423325",
            "https://tot.mihoyo.com": "911119509699150",
            "https://tot.hoyoverse.com": "911119509699150",
            "https://www.hoyolab.com": "636826203526380",
            "https://preforums.hoyolab.com": "636826203526380",
            "https://paladin.hoyolab.com": "636826203526380",
            "https://m.hoyolab.com": "467287944163459",
            "https://pre-m.hoyolab.com": "467287944163459",
            "https://devforums.hoyolab.com": "557434778135959",
            "https://test-m.hoyolab.com": "557434778135959",
            "https://uebbs.hoyolab.com": "557434778135959",
            "https://uebbs-m.hoyolab.com": "557434778135959",
            "https://hsr.hoyoverse.com": "623266168718305"
        }
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "production"
              , n = "production" === e ? "2099441543493930" : "3128068033932026";
            return r[window.location.origin] || n
        }
    },
    54505: function(e, n, t) {
        "use strict";
        t.d(n, {
            A: function() {
                return f
            },
            Z: function() {
                return p
            }
        });
        var r, o = t(70242), i = (t(71935),
        t(75428),
        t(402)), a = t(62406), c = !1, u = !1, s = "facebook_auth_script_id", l = new Promise((function(e) {
            r = e
        }
        )), d = function(e) {
            var n = document.getElementById(s);
            if (n)
                return Promise.resolve();
            var t = (0,
            a.V)();
            return (0,
            i.S)({
                element: "script",
                attrs: {
                    src: `https://connect.facebook.net/${t}/sdk.js`,
                    id: s
                }
            })
        }, f = function() {
            if (!c)
                throw new Error("facebookSignIn plugin not registered");
            return l.then((function() {
                return new Promise((function(e, n) {
                    var t = function(t) {
                        "connected" === t.status && t.authResponse && t.authResponse.accessToken ? e(t) : n(new Error)
                    };
                    window.FB.getLoginStatus((function(e) {
                        "connected" === e.status ? window.FB.logout((function() {
                            window.FB.login(t, {
                                scope: "public_profile,email"
                            })
                        }
                        )) : window.FB.login(t, {
                            scope: "public_profile,email"
                        })
                    }
                    ))
                }
                ))
            }
            ))
        };
        function p(e) {
            c = !0,
            u || d(e.appId).then((function() {
                var n = {
                    cookie: !0,
                    xfbml: !0,
                    version: "v15.0"
                };
                window.FB.init((0,
                o.Z)((0,
                o.Z)({}, n), e)),
                r(),
                u = !0
            }
            ))
        }
    },
    88260: function(e, n, t) {
        "use strict";
        t.d(n, {
            C: function() {
                return r
            }
        });
        var r = {
            test: "121465581469-brlsu15rgtsm5udm0i4kilh2lnl326bm.apps.googleusercontent.com",
            ue: "121465581469-brlsu15rgtsm5udm0i4kilh2lnl326bm.apps.googleusercontent.com",
            development: "121465581469-brlsu15rgtsm5udm0i4kilh2lnl326bm.apps.googleusercontent.com",
            sandbox: "332303543001-mt3n63m59a8o33vs496a55ct6l42vipc.apps.googleusercontent.com",
            prerelease: "332303543001-mt3n63m59a8o33vs496a55ct6l42vipc.apps.googleusercontent.com",
            production: "332303543001-mt3n63m59a8o33vs496a55ct6l42vipc.apps.googleusercontent.com"
        }
    },
    568: function(e, n, t) {
        "use strict";
        t.d(n, {
            nP: function() {
                return u
            },
            nS: function() {
                return c
            }
        });
        var r, o = t(70242), i = (t(53861),
        t(95151),
        t(98288),
        t(13048),
        t(35503),
        t(60303),
        t(51552),
        t(35533),
        t(71935),
        t(78766),
        "google_auth_script_id"), a = function() {
            var e = document.createElement("script");
            return e.addEventListener("load", (function() {
                window.onGapiLoad()
            }
            )),
            e.src = "https://accounts.google.com/gsi/client",
            e.async = !0,
            e.defer = !0,
            e.id = i,
            document.head.appendChild(e),
            !1
        };
        function c() {
            r.requestCode()
        }
        function u(e) {
            var n, t = new Promise((function(e) {
                n = e
            }
            ));
            window.onGapiLoad = function() {
                window.google ? (r = window.google.accounts.oauth2.initCodeClient((0,
                o.Z)({}, e)),
                n(r)) : n(null)
            }
            ;
            var i = a();
            return i ? Promise.resolve(r) : t
        }
    },
    402: function(e, n, t) {
        "use strict";
        t.d(n, {
            S: function() {
                return r
            }
        });
        t(75428),
        t(71935),
        t(63785);
        var r = function(e) {
            var n = e.element
              , t = void 0 === n ? "script" : n
              , r = e.attrs;
            if (!r.src)
                throw new Error("loadScript src is required");
            return new Promise((function(e, n) {
                var o = document.head
                  , i = document.createElement(t);
                Object.keys(r).forEach((function(e) {
                    i.setAttribute(e, String(r[e]))
                }
                )),
                o.appendChild(i),
                i.onload = function(n) {
                    e(n)
                }
                ,
                i.onerror = function(e) {
                    n(e)
                }
            }
            ))
        }
    },
    63009: function(e, n, t) {
        "use strict";
        t.d(n, {
            Eg: function() {
                return w
            }
        });
        t(98970);
        var r = t(70242)
          , o = t(34314)
          , i = (t(74420),
        t(62141))
          , a = t(57111)
          , c = (t(71935),
        t(62402),
        t(50142),
        t(29617),
        t(63785),
        t(14181),
        t(78766),
        t(57103))
          , u = t(77456)
          , s = t(70329)
          , l = t(86656)
          , d = t(33181)
          , f = {
            CANCELLED: "cancelled",
            WINDOW_CLOSED: "window_closed",
            POPUP_BLOCKED: "popup_blocked",
            INVALID_RESPONSE: "invalid_response",
            ERROR_MODE: "error_mode",
            UNKNOWN: "unknown_error"
        }
          , p = function(e, n) {
            return {
                error: e,
                error_description: n
            }
        }
          , _ = function() {
            function e(n, t) {
                (0,
                s.Z)(this, e),
                (0,
                d.Z)(this, "logger", void 0),
                this.logger = (0,
                u.h)(t, n)
            }
            return (0,
            l.Z)(e, [{
                key: "updateEnvironment",
                value: function(e) {
                    this.logger.updateEnvironment(e)
                }
            }, {
                key: "handleWindowClosed",
                value: function() {
                    var e = p(f.WINDOW_CLOSED, "Authentication window was closed by user");
                    return this.logger.warn(e.error_description),
                    e
                }
            }, {
                key: "handlePopupBlocked",
                value: function() {
                    var e = p(f.POPUP_BLOCKED, "Popup window was blocked by browser");
                    return this.logger.error(e.error_description),
                    e
                }
            }, {
                key: "handleCancellation",
                value: function() {
                    var e = p(f.CANCELLED, "Authentication was cancelled");
                    return this.logger.log(e.error_description),
                    e
                }
            }, {
                key: "handleCallbackError",
                value: function(e) {
                    if ("error" === e["openid.mode"]) {
                        var n = p(f.ERROR_MODE, e["openid.error"] || "OpenID provider returned error");
                        return this.logger.error("OpenID error:", n),
                        n
                    }
                    if ("cancel" === e["openid.mode"]) {
                        var t = p(f.CANCELLED, "User cancelled OpenID authentication");
                        return this.logger.log("User cancelled"),
                        t
                    }
                    if (!e["openid.signed"] || !e["openid.sig"]) {
                        var r = p(f.INVALID_RESPONSE, "Missing signature in OpenID response");
                        return this.logger.error("Invalid OpenID response:", e),
                        r
                    }
                    return p(f.UNKNOWN, "Unknown OpenID error")
                }
            }]),
            e
        }()
          , v = ["full_url", "message_id", "message_origin"]
          , m = function(e) {
            var n = e.environment
              , t = e.logPrefix
              , o = void 0 === t ? "[OpenId]" : t
              , s = null
              , l = null
              , d = (0,
            u.h)(n, o)
              , f = new _(o,n)
              , p = function(e) {
                if (d.log("OpenID callback received:", e),
                s) {
                    var n = e["openid.mode"];
                    if ("cancel" === n) {
                        var t = f.handleCancellation()
                          , o = s;
                        return s = null,
                        void o.authPromise.reject(t)
                    }
                    if ("error" === n) {
                        var i = f.handleCallbackError(e)
                          , c = s;
                        return s = null,
                        void c.authPromise.reject(i)
                    }
                    var u = e.full_url
                      , l = e.message_id
                      , p = e.message_origin
                      , _ = (0,
                    a.Z)(e, v)
                      , m = (0,
                    r.Z)((0,
                    r.Z)({}, _), {}, {
                        fullUrl: u,
                        messageId: l,
                        messageOrigin: p
                    });
                    d.log("OpenID authentication successful (params received)", m);
                    var g = s;
                    s = null,
                    g.authPromise.resolve(m)
                } else
                    d.error("No active OpenID state")
            }
              , m = function() {
                return l || (l = (0,
                c.N)({
                    environment: n,
                    logPrefix: o,
                    callback: p,
                    onWindowClosed: g
                })),
                l
            }
              , g = function() {
                if (s) {
                    d.log("Window closed by user");
                    var e = s;
                    s = null;
                    var n = f.handleWindowClosed();
                    e.authPromise.reject(n)
                }
            }
              , h = function(e) {
                var n = m()
                  , t = n.buildCallbackUrl()
                  , r = e.realm || window.location.origin
                  , o = e.authUrl
                  , a = "http://specs.openid.net/auth/2.0"
                  , c = "checkid_setup"
                  , u = "http://specs.openid.net/auth/2.0/identifier_select"
                  , s = new URL(o);
                s.searchParams.set("openid.ns", e.openidNs || a),
                s.searchParams.set("openid.mode", e.openidMode || c),
                s.searchParams.set("openid.return_to", t),
                s.searchParams.set("openid.realm", r),
                s.searchParams.set("openid.identity", e.openidIdentity || u),
                s.searchParams.set("openid.claimed_id", e.openidClaimedId || u),
                e.additionalParams && Object.entries(e.additionalParams).forEach((function(e) {
                    var n = (0,
                    i.Z)(e, 2)
                      , t = n[0]
                      , r = n[1];
                    s.searchParams.set(t, r)
                }
                ));
                var l, d, f = s.toString(), p = new Promise((function(e, n) {
                    l = e,
                    d = n
                }
                ));
                return {
                    authUrl: f,
                    redirectUri: t,
                    authPromise: {
                        promise: p,
                        resolve: l,
                        reject: d
                    }
                }
            }
              , E = function() {
                if (s) {
                    if (l && l.destroy(),
                    s.authPromise) {
                        var e = f.handleCancellation();
                        s.authPromise.reject(e)
                    }
                    s = null
                }
            }
              , y = function(e) {
                try {
                    if (d.log("Starting OpenID login flow"),
                    s && !1 === e.allowMultipleStart) {
                        d.log("Focusing existing window");
                        var n = m();
                        return n.focus(),
                        s.authPromise.promise
                    }
                    E(),
                    s = h(e);
                    var t = s
                      , r = t.authUrl
                      , o = m()
                      , i = e.windowFeatures;
                    return !1 === e.useWindowMode && (i = void 0),
                    o.init({
                        url: r,
                        windowFeatures: i,
                        allowMultipleStart: e.allowMultipleStart
                    }),
                    s.authPromise.promise
                } catch (a) {
                    throw d.error("Failed to start:", a),
                    E(),
                    a
                }
            }
              , I = function() {
                E()
            }
              , k = function() {
                var e;
                null === (e = l) || void 0 === e || e.focus()
            }
              , w = function() {
                var e;
                return (null === (e = l) || void 0 === e ? void 0 : e.isWindowOpened()) || !1
            };
            return {
                start: y,
                cleanup: E,
                cancel: I,
                focus: k,
                isWindowOpened: w
            }
        }
          , g = t(98518)
          , h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "OpenID"
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (0,
            o.r)((function() {
                var t, o = g.Vi.production, i = null, a = (0,
                u.h)(o, `[${e}]`), c = new _(`[${e}]`,o), s = function() {
                    return i || (i = m({
                        environment: o,
                        logPrefix: `[${e}]`
                    })),
                    i
                }, l = function(e) {
                    var n;
                    a.log("Initializing:", e),
                    null === (n = i) || void 0 === n || n.cleanup(),
                    o = e.environment,
                    t = e.realm,
                    a.updateEnvironment(o),
                    c.updateEnvironment(o),
                    i = null,
                    s()
                }, d = function(e) {
                    try {
                        a.log("Starting login flow");
                        var o = (0,
                        r.Z)((0,
                        r.Z)((0,
                        r.Z)({}, n), e), {}, {
                            realm: t || (null === e || void 0 === e ? void 0 : e.realm) || n.realm
                        })
                          , i = s();
                        return i.start(o)
                    } catch (c) {
                        throw a.error("Failed to start login:", c),
                        c
                    }
                }, f = function() {
                    var e;
                    null === (e = i) || void 0 === e || e.cancel()
                }, p = function() {
                    var e;
                    null === (e = i) || void 0 === e || e.focus()
                }, v = function() {
                    var e;
                    return (null === (e = i) || void 0 === e ? void 0 : e.isWindowOpened()) || !1
                };
                return {
                    init: l,
                    signIn: d,
                    cancel: f,
                    focus: p,
                    isWindowOpened: v,
                    errorHandler: c
                }
            }
            ))
        }
          , E = "https://steamcommunity.com/openid/login"
          , y = "openid#"
          , I = t(76767)
          , k = h("SteamAuth", {
            authUrl: E,
            useWindowMode: !1,
            allowMultipleStart: !1
        })
          , w = function() {
            var e = k();
            return {
                init: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        environment: g.Vi.production
                    };
                    return e.init(n)
                },
                signIn: function(n) {
                    return e.signIn({
                        realm: n || window.location.origin
                    }).then((function(e) {
                        var n = (0,
                        I.cv)(JSON.stringify({
                            state: e.state,
                            "openid.ns": e["openid.ns"],
                            "openid.mode": e["openid.mode"],
                            "openid.op_endpoint": e["openid.op_endpoint"],
                            "openid.claimed_id": e["openid.claimed_id"],
                            "openid.identity": e["openid.identity"],
                            "openid.return_to": e["openid.return_to"],
                            "openid.response_nonce": e["openid.response_nonce"],
                            "openid.assoc_handle": e["openid.assoc_handle"],
                            "openid.signed": e["openid.signed"],
                            "openid.sig": e["openid.sig"]
                        }));
                        return {
                            login_only: !0,
                            access_token: `${y}${n}`
                        }
                    }
                    ))
                },
                cancel: e.cancel,
                focus: e.focus,
                isWindowOpened: e.isWindowOpened
            }
        }
    },
    86846: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return l
            },
            O: function() {
                return d
            }
        });
        var r = t(70242)
          , o = (t(53861),
        t(86937),
        t(8220),
        t(75428),
        t(71935),
        t(84629))
          , i = {
            test: "aoRfIUi5T7qXzkfpMAO1Da8iR",
            pre: "eU6E76HxlHl5iRXzpuE7a5r2U",
            prod: "BWp7j5fzl1uHaUEG2zzFRdw4E"
        }
          , a = {
            production: `https://account.${(0,
            o.K)()}/twitter.html`,
            ue: `https://account.${(0,
            o.K)()}/twitter.html`,
            beta: `https://account.${(0,
            o.K)()}/twitter.html`,
            pre: `https://account-pre.${(0,
            o.K)()}/twitter.html`,
            prerelease: `https://account-pre.${(0,
            o.K)()}/twitter.html`,
            test: `https://account-test.${(0,
            o.K)()}/twitter.html`,
            sandbox: `https://account-pre.${(0,
            o.K)()}/sandbox/twitter.html`,
            development: `https://account-test.${(0,
            o.K)()}/twitter.html`
        }
          , c = {
            environment: "production",
            consumer_key: i.test,
            redirectURI: location.href,
            usePopup: !0
        }
          , u = (0,
        r.Z)({}, c)
          , s = !1;
        function l(e) {
            null !== e && void 0 !== e && e.environment && (u.environment = e.environment);
            var n = i.test
              , t = i.pre
              , r = i.prod;
            ["production", "beta"].includes(u.environment) ? u.consumer_key = r : ["prerelease", "pre", "sandbox"].includes(u.environment) ? u.consumer_key = t : u.consumer_key = n,
            null !== e && void 0 !== e && e.redirectURI && (u.redirectURI = e.redirectURI),
            void 0 !== (null === e || void 0 === e ? void 0 : e.usePopup) && (u.usePopup = e.usePopup),
            s = !0
        }
        var d = function(e, n) {
            if (!s)
                throw new Error("twitterSignIn need register before use, please call registerTwitterAuth before twitterSignIn");
            return new Promise((function(t, r) {
                var o = u.consumer_key
                  , i = u.environment
                  , c = u.usePopup
                  , s = (null === n || void 0 === n ? void 0 : n.redirectURI) || u.redirectURI
                  , l = a[i];
                if (!s)
                    throw new Error("twitter login redirectURI is required");
                var d = c ? window.open("about:blank") : null
                  , f = function() {
                    return `${l}?version=3&callbackUrl=${s}`
                };
                e({
                    consumer_key: o,
                    callback: f()
                }).then((function(e) {
                    var n = e.twitter_auth_url;
                    if (n)
                        if (c && d) {
                            d.location.href = n;
                            var o = function e(n) {
                                var o = n.data;
                                o && "twitterCallback" === o.type && (o.access_token ? t({
                                    access_token: o.access_token
                                }) : r(),
                                window.removeEventListener("message", e),
                                d.close())
                            };
                            window.addEventListener("message", o)
                        } else
                            window.location.href = n;
                    else
                        null === d || void 0 === d || d.close(),
                        r(e)
                }
                )).catch((function(e) {
                    null === d || void 0 === d || d.close(),
                    r()
                }
                ))
            }
            ))
        }
    },
    62406: function(e, n, t) {
        "use strict";
        t.d(n, {
            V: function() {
                return c
            }
        });
        var r = t(62141)
          , o = (t(53861),
        t(7061),
        t(20837))
          , i = t.n(o)
          , a = function(e) {
            var n = (null === e || void 0 === e ? void 0 : e.split("-")) || []
              , t = (0,
            r.Z)(n, 2)
              , o = t[0]
              , i = t[1];
            return o && i ? `${o}_${i.toUpperCase()}` : "en_US"
        }
          , c = function() {
            var e = i().parse(window.location.search, {
                ignoreQueryPrefix: !0
            })
              , n = e.lang ? e.lang : "en-us";
            return a(n)
        }
    },
    14935: function(e, n, t) {
        "use strict";
        t.d(n, {
            Ic: function() {
                return I
            },
            Jv: function() {
                return g
            },
            L1: function() {
                return E
            },
            Uw: function() {
                return y
            },
            WZ: function() {
                return v
            },
            j8: function() {
                return h
            },
            o7: function() {
                return _
            },
            qG: function() {
                return m
            }
        });
        var r = t(70242)
          , o = (t(98970),
        t(8220),
        t(5165),
        t(71935),
        t(78766),
        t(98518))
          , i = t(78670)
          , a = t.n(i)
          , c = t(67977)
          , u = function(e) {
            return function(n) {
                var t = n.actionType
                  , r = n.actionTicket
                  , i = n.meta
                  , a = void 0 === i ? {} : i
                  , u = JSON.stringify({
                    actionType: t,
                    actionTicket: r,
                    meta: a
                });
                (0,
                c.b7)(e)(o.BU.ACTION_TICKET_INFO, u)
            }
        }
          , s = function(e) {
            return function() {
                return (0,
                c.$7)(e)(o.BU.ACTION_TICKET_INFO)
            }
        }
          , l = function(e) {
            return function(n, t) {
                var r = s(e)()
                  , i = JSON.stringify(a()(r, n, t));
                (0,
                c.b7)(e)(o.BU.ACTION_TICKET_INFO, i)
            }
        }
          , d = function(e) {
            return function(n) {
                if (null !== n && void 0 !== n && n.ticketOnly) {
                    var t, i, a, l = s(e)(), d = (0,
                    r.Z)((0,
                    r.Z)({}, l), {}, {
                        actionTicket: "",
                        meta: {
                            account: null === l || void 0 === l || null === (t = l.meta) || void 0 === t ? void 0 : t.account,
                            captchaCreateAt: null === l || void 0 === l || null === (i = l.meta) || void 0 === i ? void 0 : i.captchaCreateAt,
                            verifyMethodCombinations: null === l || void 0 === l || null === (a = l.meta) || void 0 === a ? void 0 : a.verifyMethodCombinations
                        }
                    });
                    u(e)(d)
                } else
                    (0,
                    c.Rc)(e)(o.BU.ACTION_TICKET_INFO)
            }
        }
          , f = function(e) {
            return function(n, t) {
                var r, o = p(e)(t), i = s(e)(), a = null === i || void 0 === i || null === (r = i.meta) || void 0 === r ? void 0 : r.account, c = o > 0 && a === n;
                return c
            }
        }
          , p = function(e) {
            return function(n) {
                var t, r = s(e)(), i = null === r || void 0 === r || null === (t = r.meta) || void 0 === t || null === (t = t.captchaCreateAt) || void 0 === t ? void 0 : t[n], a = Date.now() - i;
                if (isNaN(a))
                    return -1;
                var c = Math.floor((o.sU - a) / 1e3);
                return c
            }
        }
          , _ = function(e, n, t) {
            var r, i, a, c, u, s = (null === (r = e.matched[0]) || void 0 === r ? void 0 : r.name) === (null === (i = n.matched[0]) || void 0 === i ? void 0 : i.name), l = !(null !== n && void 0 !== n && n.matched[0]) && t !== o.JJ.POPUP, d = [o.x4.SECURITY_VERIFICATION, o.x4.BIND_EMAIL, o.x4.REBIND_EMAIL, o.x4.BIND_THIRD, o.x4.BIND_USERNAME, o.x4.BIND_MOBILE, o.x4.CHANGE_PASSWORD, o.x4.DELETE_ACCOUNT];
            return (null === (a = e.name) || void 0 === a || !a.toString().includes(o.x4.PASSWORD_LOGIN)) && (null !== (c = e.name) && void 0 !== c && c.toString().includes(o.x4.EMAIL_REGISTER) || null !== (u = e.name) && void 0 !== u && u.toString().includes(o.x4.FORGOT_PASSWORD) ? s || l : !(!e.name || !d.some((function(n) {
                return e.name.toString().includes(n)
            }
            ))) || l)
        }
          , v = u(o.Z1.COOKIE)
          , m = u(o.Z1.SESSION_STORAGE)
          , g = s(o.Z1.SESSION_STORAGE)
          , h = l(o.Z1.SESSION_STORAGE)
          , E = d(o.Z1.SESSION_STORAGE)
          , y = f(o.Z1.SESSION_STORAGE)
          , I = p(o.Z1.SESSION_STORAGE)
    },
    84138: function(e, n, t) {
        "use strict";
        t.d(n, {
            R7: function() {
                return u
            },
            TI: function() {
                return c
            },
            Ut: function() {
                return _
            },
            _q: function() {
                return p
            },
            c2: function() {
                return f
            },
            ep: function() {
                return m
            },
            qO: function() {
                return v
            }
        });
        t(74420);
        var r = t(70242)
          , o = (t(71935),
        t(78766),
        t(8220),
        t(98518))
          , i = t(67977)
          , a = {
            enableDomainRedirect: "false",
            enableV2XLogin: "false",
            boxConfigMaxAge: 180
        }
          , c = function() {
            try {
                var e = (0,
                i.$7)(o.Z1.LOCAL_STORAGE)(o.BU.BOX_CONFIG);
                if ("[object Object]" === Object.prototype.toString.call(e))
                    return e
            } catch (n) {}
            return null
        }
          , u = function() {
            return (0,
            r.Z)((0,
            r.Z)({}, a), c() || {})
        }
          , s = function(e) {
            return (0,
            i.b7)(o.Z1.LOCAL_STORAGE)(o.BU.BOX_CONFIG, e)
        }
          , l = function() {
            try {
                var e = (0,
                i.$7)(o.Z1.LOCAL_STORAGE)(o.BU.BOX_CONFIG_LAST_UPDATED);
                if (e) {
                    var n = Number(e);
                    if (!isNaN(n))
                        return n
                }
            } catch (t) {}
            return 0
        }
          , d = function(e) {
            return (0,
            i.b7)(o.Z1.LOCAL_STORAGE)(o.BU.BOX_CONFIG_LAST_UPDATED, e)
        }
          , f = u()
          , p = function() {
            var e = l();
            if (!e)
                return !0;
            var n = Math.abs(Date.now() - e);
            return n > 1e3 * f.boxConfigMaxAge
        }
          , _ = function(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            Object.assign(f, e),
            n && (s(e),
            d(Date.now()))
        }
          , v = function(e) {
            return ["true", !0].includes(e)
        }
          , m = function(e) {
            return ["false", !1].includes(e)
        }
    },
    67977: function(e, n, t) {
        "use strict";
        t.d(n, {
            $7: function() {
                return u
            },
            Rc: function() {
                return c
            },
            X1: function() {
                return s
            },
            b7: function() {
                return a
            }
        });
        t(71935),
        t(63785),
        t(98970);
        var r = t(98518)
          , o = t(17526)
          , i = t(84629)
          , a = function(e) {
            return function(n, t) {
                return e === r.Z1.COOKIE ? d(n, t) : e === r.Z1.LOCAL_STORAGE ? _(n, t) : g(n, t)
            }
        }
          , c = function(e) {
            return function(n) {
                return e === r.Z1.COOKIE ? f(n) : e === r.Z1.LOCAL_STORAGE ? v(n) : h(n)
            }
        }
          , u = function(e) {
            return function(n) {
                return e === r.Z1.COOKIE ? p(n) : e === r.Z1.LOCAL_STORAGE ? m(n) : E(n)
            }
        }
          , s = function(e, n, t) {
            t.forEach((function(t) {
                var r = u(e)(t);
                r && (c(e)(t),
                a(n)(t, r))
            }
            ))
        }
          , l = `.${(0,
        i.K)()}`
          , d = function(e, n) {
            try {
                var t = "string" !== typeof n ? JSON.stringify(n) : n;
                return o.Z.set(`${r.$2}${e}`, t, {
                    domain: l,
                    sameSite: "strict"
                }),
                !0
            } catch (i) {
                return !1
            }
        }
          , f = function(e) {
            try {
                return o.Z.remove(`${r.$2}${e}`, {
                    domain: l,
                    sameSite: "strict"
                }),
                !0
            } catch (n) {
                return !1
            }
        }
          , p = function(e) {
            try {
                var n = o.Z.get(`${r.$2}${e}`);
                return n ? JSON.parse(n) : null
            } catch (t) {
                return null
            }
        }
          , _ = function(e, n) {
            try {
                var t = "string" !== typeof n ? JSON.stringify(n) : n;
                return localStorage.setItem(`${r.$2}${e}`, t),
                !0
            } catch (o) {
                return !1
            }
        }
          , v = function(e) {
            try {
                return localStorage.removeItem(`${r.$2}${e}`),
                !0
            } catch (n) {
                return !1
            }
        }
          , m = function(e) {
            try {
                var n = localStorage.getItem(`${r.$2}${e}`);
                return n ? JSON.parse(n) : null
            } catch (t) {
                return null
            }
        }
          , g = function(e, n) {
            try {
                var t = "string" !== typeof n ? JSON.stringify(n) : n;
                return sessionStorage.setItem(`${r.$2}${e}`, t),
                !0
            } catch (o) {
                return !1
            }
        }
          , h = function(e) {
            try {
                return sessionStorage.removeItem(`${r.$2}${e}`),
                !0
            } catch (n) {
                return !1
            }
        }
          , E = function(e) {
            try {
                var n = sessionStorage.getItem(`${r.$2}${e}`);
                return n ? JSON.parse(n) : null
            } catch (t) {
                return null
            }
        }
    },
    87200: function(e, n, t) {
        "use strict";
        t.d(n, {
            Y: function() {
                return p
            }
        });
        t(98288);
        var r = t(44285)
          , o = t.n(r)
          , i = t(73579)
          , a = t.n(i)
          , c = t(36985)
          , u = t.n(c)
          , s = t(34481)
          , l = t.n(s)
          , d = t(399)
          , f = t.n(d)
          , p = function e(n) {
            return o()(n) ? a()(u()(n, (function(e, n) {
                return l()(n)
            }
            )), e) : f()(n) ? n.map(e) : n
        }
    },
    34314: function(e, n, t) {
        "use strict";
        function r(e) {
            var n, t = !1;
            return function() {
                return t || (n = e(),
                t = !0),
                n
            }
        }
        t.d(n, {
            r: function() {
                return r
            }
        })
    },
    65857: function(e, n, t) {
        "use strict";
        t.d(n, {
            pv: function() {
                return c
            },
            qS: function() {
                return a
            },
            Nz: function() {
                return r.Nz
            },
            zx: function() {
                return r.zx
            },
            JH: function() {
                return r.JH
            },
            ID: function() {
                return r.ID
            }
        });
        var r = t(71160)
          , o = (t(74420),
        t(70242))
          , i = (t(53861),
        t(95151),
        t(84629))
          , a = function(e, n) {
            var t = n.isEnabled
              , a = n.apiBaseMap;
            try {
                var c, u = null !== (c = e.enableDomainRedirect) && void 0 !== c ? c : e.domainRedirect && (null === t || void 0 === t ? void 0 : t());
                if (u && a) {
                    var s = (0,
                    r.Nz)(e.maPassportRegion)
                      , l = a[s];
                    l && (e.headers = (0,
                    o.Z)((0,
                    o.Z)({}, e.headers), {}, {
                        "x-rpc-domain_redirect": "true"
                    }),
                    e.baseURL = l.replace("hoyoverse.com", (0,
                    i.K)()))
                }
            } catch (d) {}
            return e
        }
          , c = function(e) {
            return function(n) {
                return a(n, e)
            }
        }
    },
    71160: function(e, n, t) {
        "use strict";
        t.d(n, {
            ID: function() {
                return _
            },
            JH: function() {
                return s
            },
            Nz: function() {
                return f
            },
            VL: function() {
                return d
            },
            zx: function() {
                return l
            }
        });
        t(8220),
        t(5165),
        t(76999);
        var r = t(17526)
          , o = t(98518)
          , i = t(84138)
          , a = t(62325)
          , c = t.n(a)
          , u = (t(84629),
        function(e) {
            return Object.values(o.Y2).includes(e)
        }
        )
          , s = function() {
            return r.Z.get(o.BU.MA_PASSPORT_REGION)
        }
          , l = function() {
            return r.Z.get(o.BU.MA_PASSPORT_REGION_ENABLE)
        }
          , d = function(e) {
            var n = String(e).toUpperCase();
            return u(n) ? n : null
        }
          , f = function(e) {
            var n;
            return null !== (n = d(e || s())) && void 0 !== n ? n : o.Y2.SG
        }
          , p = function() {
            var e = l();
            if ((0,
            i.qO)(e) || (0,
            i.ep)(e))
                return e
        }
          , _ = function(e) {
            return (0,
            i.qO)(c()(p(), e.enableDomainRedirect))
        }
    },
    74352: function(e, n, t) {
        "use strict";
        var r = t(15382)
          , o = new r.Z({});
        n["Z"] = o
    },
    84629: function(e, n, t) {
        "use strict";
        t.d(n, {
            K: function() {
                return r
            }
        });
        t(35533);
        var r = function() {
            if ("undefined" === typeof window)
                return "hoyoverse.com";
            try {
                return window.location.hostname.split(".").slice(-2).join(".")
            } catch (e) {
                return "hoyoverse.com"
            }
        }
    },
    94814: function(e, n, t) {
        "use strict";
        t.d(n, {
            DB: function() {
                return m
            },
            p6: function() {
                return h
            },
            PC: function() {
                return v
            }
        });
        var r = t(70329)
          , o = t(86656)
          , i = t(33181)
          , a = t(70242)
          , c = t(62141)
          , u = (t(59568),
        t(71935),
        t(53861),
        t(95151),
        t(78766),
        t(75428),
        t(98970),
        t(98288),
        t(14181),
        t(8220),
        t(17526))
          , s = (t(74420),
        t(57111))
          , l = t(65857)
          , d = t(84138)
          , f = ["response"]
          , p = function(e, n) {
            var t = function(e) {
                var t = e.data
                  , r = e.config
                  , o = e.headers
                  , i = e.status
                  , c = e.statusText
                  , u = r.url
                  , d = null !== t && void 0 !== t ? t : {}
                  , p = d.retcode
                  , _ = n()
                  , v = {
                    status_code: i,
                    status_text: c,
                    retcode: p,
                    response: JSON.stringify(t),
                    headers: JSON.stringify(o),
                    domain_redirect_info: JSON.stringify({
                        maPassportRegionRaw: (0,
                        l.JH)() || ""
                    }),
                    base_url: r.baseURL
                }
                  , g = (v.response,
                (0,
                s.Z)(v, f));
                200 === i && 0 === p ? _.info(m.NETWORK_REQUEST, (0,
                a.Z)((0,
                a.Z)({}, g), {}, {
                    additionalInfo: `server api: ${u} response`
                })) : i < 200 || i >= 300 ? _.warn(m.NETWORK_REQUEST, (0,
                a.Z)((0,
                a.Z)({}, g), {}, {
                    additionalInfo: `server api: ${u} response status_code: ${i}`
                })) : 0 !== p && _.warn(m.NETWORK_REQUEST, (0,
                a.Z)((0,
                a.Z)({}, g), {}, {
                    additionalInfo: `server api: ${u} code: ${p}`
                }))
            }
              , r = function(e) {
                if (e.response)
                    t(e.response);
                else if (e.request) {
                    var r = n()
                      , o = e.config.url;
                    r.error(m.NETWORK_REQUEST, {
                        additionalInfo: `server api: ${o} not response code: ${(null === e || void 0 === e ? void 0 : e.code) || "unknown"} message: ${e.message}`
                    })
                } else {
                    var i = n()
                      , a = e.config.url;
                    i.error(m.NETWORK_REQUEST, {
                        additionalInfo: `server request error api: ${a} code: ${(null === e || void 0 === e ? void 0 : e.code) || "unknown"} message: ${e.message}`
                    })
                }
            };
            e.interceptors.request.use((function(e) {
                if (!1 !== (null === e || void 0 === e ? void 0 : e.httpH5log))
                    try {
                        var t, r = n();
                        r.info(m.NETWORK_REQUEST, {
                            headers: JSON.stringify(e.headers),
                            data: JSON.stringify(e.data),
                            domain_redirect_info: JSON.stringify({
                                maPassportRegionRaw: (0,
                                l.JH)() || "",
                                maPassportRegionEnableRaw: (0,
                                l.zx)() || "",
                                domainRedirectConfig: Boolean(e.domainRedirect),
                                enableDomainRedirectConfig: Boolean(e.enableDomainRedirect),
                                maPassportRegionConfig: e.maPassportRegion || "",
                                enableDomainRedirectBoxConfigRaw: (null === (t = (0,
                                d.TI)()) || void 0 === t ? void 0 : t.enableDomainRedirect) || "",
                                enableDomainRedirectBoxConfig: d.c2.enableDomainRedirect
                            }),
                            base_url: e.baseURL,
                            additionalInfo: `server api: ${e.url} request`
                        })
                    } catch (o) {
                        console.warn("h5log request interceptor err", o)
                    }
                return e
            }
            )),
            e.interceptors.response.use((function(e) {
                var n;
                if (!1 !== (null === e || void 0 === e || null === (n = e.config) || void 0 === n ? void 0 : n.httpH5log))
                    try {
                        t(e)
                    } catch (r) {
                        console.warn("h5log res interceptor err", r)
                    }
                return e
            }
            ), (function(e) {
                var n;
                if (!1 !== (null === e || void 0 === e || null === (n = e.config) || void 0 === n ? void 0 : n.httpH5log))
                    try {
                        r(e)
                    } catch (t) {
                        console.warn("h5log err interceptor err", t)
                    }
                return Promise.reject(e)
            }
            ))
        }
          , _ = function(e) {
            return Object.keys(e).reduce((function(n, t) {
                var r = e[t];
                if (null != r) {
                    var o = t.replace(/([A-Z])/g, "_$1").toLowerCase()
                      , i = function(e) {
                        return "function" === typeof e && "() => {}" !== e.toString()
                    };
                    n[o] = i(r) ? "1" : r
                }
                return n
            }
            ), {})
        }
          , v = p
          , m = {
            THIRD_PARTY_ERROR: "THIRD_PARTY_ERROR",
            NETWORK_REQUEST: "NETWORK_REQUEST",
            SDK_CLIENT_MESSAGE: "SDK_CLIENT_MESSAGE",
            ROUTER_CHANGE: "ROUTER_CHANGE",
            JSSDK_INVOKE: "JSSDK_INVOKE",
            LOAD_PERFORMANCE: "LOAD_PERFORMANCE",
            COMMON: "COMMON"
        };
        function g(e) {
            var n = function(e, n) {
                var t;
                return t = "undefined" === typeof n ? "undefined" : null === n ? "null" : n instanceof Error ? JSON.stringify(n, Object.getOwnPropertyNames(n)) : "string" !== typeof n ? JSON.stringify(n) : n,
                t.replace(/[\u4e00-\u9fa5]/g, "xx")
            }
              , t = Object.entries(e).map((function(e) {
                var t = (0,
                c.Z)(e, 2)
                  , r = t[0]
                  , o = t[1];
                return [r, n(r, o)]
            }
            )).reduce((function(e, n) {
                var t = (0,
                c.Z)(n, 2)
                  , r = t[0]
                  , o = t[1];
                return (0,
                a.Z)((0,
                a.Z)({}, e), {}, {
                    [r]: o
                })
            }
            ), {});
            return t
        }
        var h = function() {
            function e() {
                (0,
                r.Z)(this, e),
                (0,
                i.Z)(this, "loadPromise", null),
                (0,
                i.Z)(this, "initPromise", void 0),
                (0,
                i.Z)(this, "env", void 0),
                this.loadPromise = null,
                this.env = "production"
            }
            return (0,
            o.Z)(e, [{
                key: "isProduction",
                value: function(e) {
                    return ["pre", "prerelease", "production", "ue"].includes(e)
                }
            }, {
                key: "getBaseInfo",
                value: function() {
                    return {
                        aid: u.Z.get("account_id_v2") || u.Z.get("account_id") || u.Z.get("ltuid_v2") || u.Z.get("ltuid") || "unknown"
                    }
                }
            }, {
                key: "initial",
                value: function(e) {
                    var n = this
                      , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this.initPromise && this.env === e || (this.env = e,
                    this.initPromise = new Promise((function(r, o) {
                        n.load(e).then((function() {
                            window.miHoYoH5log && window.miHoYoH5log.create || o(new Error("h5log not defined"));
                            var i = window.miHoYoH5log.create({
                                topic: "plat_h5log-oversea-account-fe",
                                minorTopic: "plat_h5log-oversea-account-minor-fe",
                                env: n.isProduction(e) ? "production" : "test",
                                region: "os",
                                storageType: "local",
                                batchSize: 20,
                                batchInterval: 5e3,
                                debug: !1,
                                enable: t
                            });
                            r(i)
                        }
                        ))
                    }
                    ))),
                    this.initPromise
                }
            }, {
                key: "setCommonInfo",
                value: function(e) {
                    this.initial(this.env).then((function(n) {
                        n.setCommonInfo.call(n, g(_(e)))
                    }
                    ))
                }
            }, {
                key: "info",
                value: function(e) {
                    var n = this
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.initial(this.env).then((function(r) {
                        r.info.call(r, e, g(_((0,
                        a.Z)((0,
                        a.Z)({}, n.getBaseInfo()), t))))
                    }
                    ))
                }
            }, {
                key: "warn",
                value: function(e) {
                    var n = this
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.initial(this.env).then((function(r) {
                        r.warn.call(r, e, g(_((0,
                        a.Z)((0,
                        a.Z)({}, n.getBaseInfo()), t))))
                    }
                    ))
                }
            }, {
                key: "error",
                value: function(e) {
                    var n = this
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.initial(this.env).then((function(r) {
                        r.error.call(r, e, "-1", g(_((0,
                        a.Z)((0,
                        a.Z)({}, n.getBaseInfo()), t))))
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(n) {
                    return this.loadPromise || (this.loadPromise = new Promise((function(n, t) {
                        if ("undefined" === typeof window[e.H5LOG_GLOBAL_NAME]) {
                            var r = document.querySelector("script[src*='/hoyoverse-h5log/']");
                            r || (r = document.createElement("script"),
                            r.src = "https://webstatic.hoyoverse.com/dora/biz/hoyoverse-h5log/v2.1/main.js",
                            document.head.appendChild(r)),
                            r.addEventListener("load", (function() {
                                n(window[e.H5LOG_GLOBAL_NAME])
                            }
                            )),
                            r.addEventListener("error", (function(e) {
                                t(e)
                            }
                            ))
                        } else
                            n(window[e.H5LOG_GLOBAL_NAME])
                    }
                    ))),
                    this.loadPromise
                }
            }], [{
                key: "create",
                value: function() {
                    return new e
                }
            }]),
            e
        }();
        (0,
        i.Z)(h, "instance", void 0),
        (0,
        i.Z)(h, "H5LOG_GLOBAL_NAME", "miHoYoH5log")
    },
    17372: function(e, n, t) {
        "use strict";
        t.d(n, {
            tj: function() {
                return I
            },
            A3: function() {
                return x
            },
            iU: function() {
                return d
            },
            rh: function() {
                return h
            },
            Ds: function() {
                return f
            },
            p6: function() {
                return G
            },
            _x: function() {
                return K
            },
            Y$: function() {
                return Y
            },
            Fg: function() {
                return C
            },
            eK: function() {
                return V
            },
            iH: function() {
                return Z
            },
            gh: function() {
                return L
            },
            bY: function() {
                return R
            },
            mG: function() {
                return k
            },
            cL: function() {
                return b
            },
            Z0: function() {
                return w
            },
            zd: function() {
                return y
            },
            tq: function() {
                return g
            },
            T6: function() {
                return T
            },
            YR: function() {
                return m
            },
            of: function() {
                return E
            },
            T8: function() {
                return N
            },
            jQ: function() {
                return B
            },
            yD: function() {
                return F
            },
            HI: function() {
                return M
            },
            Rp: function() {
                return U
            },
            k$: function() {
                return O
            },
            M7: function() {
                return D
            }
        });
        var r = t(70242)
          , o = t(62141)
          , i = (t(53861),
        t(86937),
        t(8220),
        t(5165),
        t(95151),
        t(71935),
        t(78766),
        t(62402),
        t(50142),
        t(29617),
        t(30359),
        t(59568),
        t(14181),
        t(98288),
        t(98518))
          , a = t(11282)
          , c = t.n(a)
          , u = t(85440);
        function s() {
            if (i.FB)
                return window.screen.orientation.type.indexOf("landscape") >= 0 ? i.eh.LANDSCAPE : i.eh.PORTRAIT;
            var e = window.screen.width
              , n = window.screen.height
              , t = Math.min(e, n)
              , r = window.document.documentElement.clientWidth;
            return r - i.k2 <= t && t <= r + i.k2 ? i.eh.PORTRAIT : i.eh.LANDSCAPE
        }
        var l = function() {
            return s() === i.eh.LANDSCAPE
        }
          , d = function(e) {
            return `${i.q2}${e}`
        }
          , f = function(e) {
            return c()(e, 300, {
                leading: !0,
                trailing: !1
            })
        }
          , p = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
          , _ = /android|ipad|playbook|silk/i;
        function v() {
            var e = window.navigator.userAgent;
            if ("string" !== typeof e)
                return !1;
            var n = p.test(e) || _.test(e);
            return !n && navigator && navigator.maxTouchPoints > 1 && -1 !== e.indexOf("Macintosh") && -1 !== e.indexOf("Safari") && (n = !0),
            n
        }
        var m = function(e) {
            return !!e && ![i.Bh.Unknown, i.Bh.WEB, i.Bh.WAP, i.Bh.PS4, i.Bh.PS5, i.Bh.Xbox, i.Bh.Nintendo].includes(e)
        }
          , g = function() {
            return v() && (l() ? window.innerHeight : window.innerWidth) < 768
        };
        function h() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var n = 16 * Math.random() | 0
                  , t = "x" === e ? n : 3 & n | 8;
                return t.toString(16)
            }
            ))
        }
        function E(e) {
            var n = e.indexOf("@");
            return "" === e || n < 0 ? "" : n < 6 ? e.substring(0, 1) + "****" + e.substring(n) : e.substring(0, 2) + "****" + e.substring(n - 2)
        }
        var y = function() {
            return window.top !== window.self
        }
          , I = function(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            try {
                var t = new URL(e).origin
                  , r = /\.(hoyoverse\.com|hoyolab\.com|honkaistarrail\.vn)(:\d*)?$/.test(t)
                  , o = /\.(mihoyo\.com)(:\d*)?$/.test(t)
                  , i = r || n && o;
                return i || console.warn("invalid domain:", e),
                i
            } catch (a) {
                return !1
            }
        }
          , k = !!document.documentMode
          , w = Boolean(window.navigator.userAgent.match(/miHoYo(BBS|BBSOversea|CG|DP|DPOversea)\/(.*)?/))
          , b = (/MicroMessenger/i.test(window.navigator.userAgent),
        function(e) {
            return e === i.JJ.POPUP
        }
        )
          , A = function(e, n) {
            var t = new URL(e)
              , r = new URL(n);
            return t.protocol === r.protocol && t.host === r.host && t.port === r.port
        }
          , S = function(e, n) {
            var t = new URL(e)
              , r = new URL(n);
            return t.pathname === r.pathname && t.origin === r.origin
        }
          , T = function(e, n) {
            return A(e, n) && S(e, n)
        }
          , N = function(e) {
            try {
                if (A(window.location.href, e) && S(window.location.href, e)) {
                    var n = new URL(e)
                      , t = window.internalRouter;
                    window.history.replaceState({
                        allowLeave: !0
                    }, "", n.href),
                    t.replace(n.hash.replace(/^#\/?/, ""), {
                        allowLeave: !0
                    })
                } else
                    window.location.href = e
            } catch (r) {
                console.error(r)
            }
        }
          , R = function() {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                orientation: window.innerWidth > window.innerHeight ? "landscape" : window.innerHeight === window.innerWidth ? "square" : "portrait"
            }
        }
          , O = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var n = 16 * Math.random() | 0
                  , t = "x" === e ? n : 3 & n | 8;
                return t.toString(16)
            }
            ))
        }
          , C = function(e) {
            return e && String(e)in i.Rm !== !1 ? e : i.Rm.light
        }
          , L = function(e) {
            return e && String(e)in i.I5 !== !1 ? e === i.I5.ys ? i.I5.hk4e : e === i.I5.rpg ? i.I5.hkrpg : e === i.I5.wd ? i.I5.nxx : e : i.I5["default"]
        }
          , P = function(e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
          , x = function(e) {
            return e ? Object.entries(e).reduce((function(e, n) {
                var t = (0,
                o.Z)(n, 2)
                  , i = t[0]
                  , a = t[1];
                if ("string" !== typeof i || "" === i)
                    return console.warn("Invalid key: " + i),
                    e;
                var c = P(i);
                return c in e ? (console.warn("Duplicate key: " + c),
                e) : (0,
                r.Z)((0,
                r.Z)({}, e), {}, {
                    [c]: a
                })
            }
            ), {}) : {}
        }
          , D = function(e, n) {
            try {
                return (0,
                u.n)(e, n)
            } catch (t) {
                return -1
            }
        }
          , B = function(e) {
            try {
                var n = new Date(e);
                return n.toLocaleString()
            } catch (t) {
                return ""
            }
        };
        function U(e, n, t) {
            return e.map((function(e) {
                var r = e[n]
                  , o = e[t];
                return {
                    label: r,
                    value: o
                }
            }
            ))
        }
        var Z = function(e) {
            return !0 === e ? 2 : !1 === e ? 1 : void 0
        };
        function G(e) {
            var n = e.timestamp
              , t = e.lang
              , r = e.dateFormat
              , o = void 0 === r ? i.t6.YEAR_MONTH_DAY : r
              , a = e.isPassword
              , c = void 0 !== a && a;
            if (!n || isNaN(Number(n)) || "0" == n)
                return "-";
            var u = new Date(1e3 * Number(n))
              , s = u.getFullYear();
            if (c && s <= 1980)
                return "-";
            var l = "th-th" === t ? "th-th-u-ca-gregory" : t
              , d = {};
            i.t6.YEAR_MONTH_DAY === o ? d = {
                year: "numeric",
                month: "numeric",
                day: "numeric"
            } : i.t6.YEAR_MONTH === o ? d = {
                year: "numeric",
                month: "numeric"
            } : i.t6.YEAR_MONTH_DAY_TIME === o ? d = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            } : i.t6.YEAR_MONTH_DAY_TIME_LONG === o && (d = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            var f = new Intl.DateTimeFormat(l,d).format(u);
            return f
        }
        function M(e, n, t, r) {
            var o = new Date(Date.UTC(n, e - 1, t))
              , a = o.toLocaleDateString(null === r || void 0 === r ? void 0 : r.lang, {
                day: (null === r || void 0 === r ? void 0 : r.dateFormat) === i.t6.YEAR_MONTH ? void 0 : "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC"
            });
            return a
        }
        function F(e, n) {
            var t = new Date(Date.UTC(0, 0, 1));
            return t.setUTCFullYear(n),
            t.setUTCMonth(e - 1),
            t.setUTCDate(1),
            t.setUTCMonth(t.getUTCMonth() + 1),
            Math.floor(t.getTime() / 1e3)
        }
        function K(e) {
            var n = new Date(1e3 * e);
            n.setUTCMonth(n.getUTCMonth() - 1);
            var t = n.getUTCDate()
              , r = n.getUTCMonth() + 1
              , o = n.getUTCFullYear();
            return {
                day: t,
                month: r,
                year: o
            }
        }
        var Y = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-us"
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.t6.YEAR_MONTH;
            if (!e || isNaN(Number(e)) || "0" == e)
                return "-";
            var r = K(Number(e))
              , o = r.day
              , a = r.month
              , c = r.year;
            return M(Number(a), Number(c), Number(o), {
                lang: n,
                dateFormat: t
            })
        }
          , V = function(e) {
            return `https://sdk.hoyoverse.com/sdk-account-admin-upload/age-gate/game-icon/${e}.png`
        }
    },
    42304: function(e, n, t) {
        "use strict";
        t.d(n, {
            T: function() {
                return c
            }
        });
        t(74420);
        var r = t(70242)
          , o = (t(53861),
        t(7061),
        t(17526))
          , i = t(20837)
          , a = t.n(i)
          , c = function(e) {
            if (!1 === e.enableLrsag)
                return e;
            var n = a().parse(window.location.search, {
                ignoreQueryPrefix: !0
            })
              , t = n.lrsag
              , i = o.Z.get("lrsag");
            return "1" !== i && "1" !== t || (e.headers = (0,
            r.Z)((0,
            r.Z)({}, e.headers || {}), {}, {
                "x-rpc-lrsag": 1
            }),
            e.params = (0,
            r.Z)((0,
            r.Z)({}, e.params || {}), {}, {
                lrsag: 1
            })),
            e
        }
    },
    6010: function(e, n, t) {
        "use strict";
        t.d(n, {
            G: function() {
                return c
            }
        });
        t(71935);
        var r = Object.freeze({
            loading: "loading",
            waiting: "waiting",
            hiding: "hiding"
        })
          , o = Object.freeze({
            show: "show",
            wait: "wait",
            hide: "hide"
        })
          , i = ".hyv-login-platform__loading"
          , a = null;
        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "body";
            if (!a) {
                a = document.createElement("div"),
                a.setAttribute("class", i.slice(1)),
                a.innerHTML = '<div class="hyv-login-platform__loading--rotation">    <div/>    </div>';
                var n = document.querySelector(e);
                n ? (n.appendChild(a),
                a.classList.add("hidden")) : console.error("Container not found for selector:", e)
            }
            var t = function() {
                a ? a.classList.remove("hidden") : console.error("showLoading called but loadingEle is null")
            }
              , c = function(e) {
                var n = null
                  , r = new Promise((function(r) {
                    n = setTimeout((function() {
                        t(),
                        r()
                    }
                    ), e)
                }
                ));
                return {
                    promise: r,
                    timer: n
                }
            }
              , u = function() {
                a ? a.classList.add("hidden") : console.error("hideLoading called but loadingEle is null")
            }
              , s = function() {
                t(),
                u()
            }
              , l = r.hiding
              , d = null
              , f = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                switch (l) {
                case r.loading:
                    e === o.hide && (l = r.hiding,
                    u());
                    break;
                case r.waiting:
                    e === o.show && (l = r.loading,
                    clearTimeout(d),
                    t()),
                    e === o.hide && (l = r.hiding,
                    clearTimeout(d),
                    u());
                    break;
                case r.hiding:
                    if (e === o.hide && u(),
                    e === o.show && (l = r.loading,
                    t()),
                    e === o.wait) {
                        l = r.waiting;
                        var i = c(null === n || void 0 === n ? void 0 : n.timeout)
                          , a = i.promise
                          , s = i.timer;
                        d = s,
                        a.then((function() {
                            l === r.waiting && (l = r.loading)
                        }
                        ))
                    }
                    break;
                default:
                    console.warn("loading Invalid State!");
                    break
                }
            };
            return {
                getState: function() {
                    return l
                },
                showLoading: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = e.wait
                      , t = void 0 === n ? 0 : n;
                    t ? f(o.wait, {
                        timeout: t
                    }) : f(o.show)
                },
                hideLoading: function() {
                    f(o.hide)
                },
                resetLoading: s
            }
        }
    },
    64660: function(e, n, t) {
        "use strict";
        t.d(n, {
            P: function() {
                return p
            }
        });
        var r, o = t(70769), i = t(17372), a = t(70242), c = t(2140), u = t(67977), s = t(98518), l = t(95038), d = t(14935), f = window.miHoYoAnalysis, p = function() {
            if (!f)
                return {
                    trackEvent: function() {}
                };
            if (r)
                return r;
            var e = (0,
            o.a)()
              , n = e.token_type
              , t = e.app_version
              , p = e.theme
              , _ = e.client_type
              , v = e.ux_mode
              , m = (0,
            u.$7)(s.Z1.COOKIE)(s.BU.TRACKING_MAP) || {}
              , g = (0,
            c.dN)() ? {
                app_version: t
            } : {};
            r = f.init({
                appId: "192",
                env: "production",
                autoTrackPageview: !1,
                type: "tool",
                isSea: !0,
                setMiaToVue: !1,
                useBeacon: !0,
                pagename: "hoyoverse-account-sdk",
                pageExtrainfo: (0,
                a.Z)({
                    token_type: n,
                    business_url: window.business_url,
                    theme: p,
                    client_type: _,
                    ux_mode: v
                }, g)
            });
            var h = r.trackEvent.bind(r);
            return r.trackEvent = function() {
                for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                    t[r] = arguments[r];
                var o = t[0]
                  , c = void 0 === o ? "" : o
                  , u = t[1]
                  , s = void 0 === u ? "" : u
                  , l = t[2]
                  , f = void 0 === l ? "" : l
                  , p = t[3]
                  , _ = void 0 === p ? "" : p
                  , v = t[4]
                  , g = void 0 === v ? {} : v
                  , E = (null === (e = (0,
                d.Jv)()) || void 0 === e || null === (e = e.meta) || void 0 === e ? void 0 : e.trackingInfo) || {}
                  , y = (0,
                a.Z)((0,
                a.Z)((0,
                a.Z)((0,
                a.Z)({}, (0,
                i.bY)()), g), m), E);
                return h(c, s, f, _, y)
            }
            ,
            (0,
            l.D)().then((function(e) {
                r.pageExtrainfo = (0,
                a.Z)((0,
                a.Z)({}, r.pageExtrainfo), e)
            }
            )),
            r
        }
    },
    13455: function(e, n, t) {
        "use strict";
        t.d(n, {
            v: function() {
                return y
            }
        });
        var r = t(91226)
          , o = t(36842)
          , i = t(42698)
          , a = t(67787)
          , c = t(30182)
          , u = t(70769)
          , s = t(17372)
          , l = t(3762)
          , d = t(47796)
          , f = (t(99944),
        t(79531),
        t(71935),
        t(8220),
        t(5165),
        t(2140))
          , p = t(22213)
          , _ = t(14935)
          , v = t(98518)
          , m = t(67977)
          , g = t(35297)
          , h = t(6010)
          , E = t(94814)
          , y = function() {
            var e = (0,
            r.tv)()
              , n = (0,
            r.yj)()
              , t = (0,
            o.R)()
              , y = (0,
            i.u)()
              , I = y.h5logger
              , k = (0,
            a.iH)(!1)
              , w = (0,
            a.iH)(!1)
              , b = (0,
            a.iH)(!0)
              , A = (0,
            a.iH)("")
              , S = (0,
            u.a)()
              , T = S.ux_mode
              , N = S.st
              , R = (0,
            a.iH)([])
              , O = (0,
            h.G)()
              , C = O.showLoading
              , L = O.hideLoading;
            window.business_url = N,
            (0,
            c.YP)(k, (function(e, n) {
                !0 === e && !1 === n && (0,
                s.cL)(T) && (0,
                f.bG)({
                    type: p.Cs.LOADED
                })
            }
            ));
            var P = [v.x4.SECURITY_VERIFICATION, v.x4.AGE_VERIFY];
            (0,
            c.m0)((function() {
                k.value = w.value
            }
            )),
            e.beforeEach((function(e) {
                var n, t, r, o, i, a, c, u, s, l, d;
                (C(),
                (0,
                m.X1)(v.Z1.COOKIE, v.Z1.SESSION_STORAGE, [v.BU.ACTION_TICKET_INFO]),
                b.value = null === (n = null === (t = e.meta) || void 0 === t || null === (r = t.hideNav) || void 0 === r ? void 0 : r.call(t)) || void 0 === n || n,
                A.value = null !== (o = null === (i = e.meta) || void 0 === i || null === (a = i.title) || void 0 === a ? void 0 : a.call(i)) && void 0 !== o ? o : "",
                document.title = null !== (c = null === (u = e.meta) || void 0 === u || null === (s = u.title) || void 0 === s ? void 0 : s.call(u)) && void 0 !== c ? c : "",
                null !== (l = e.meta) && void 0 !== l && l.pageView) && (null === (d = e.meta) || void 0 === d || d.pageView())
            }
            )),
            e.afterEach(function() {
                var e = (0,
                d.Z)(regeneratorRuntime.mark((function e(n, t) {
                    var r, o, i, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                L(),
                                I.info(E.DB.ROUTER_CHANGE, {
                                    to: n.path,
                                    from: t.path
                                }),
                                o = (0,
                                u.a)(),
                                i = o.ux_mode,
                                (0,
                                _.o7)(n, t, i) || (0,
                                _.L1)(),
                                a = null === (r = n.name) || void 0 === r ? void 0 : r.split("/")[0],
                                R.value = (0,
                                l.Z)(R.value.filter((function(e) {
                                    return e !== a
                                }
                                ))),
                                R.value.push(a),
                                w.value = !0,
                                (0,
                                c.Y3)((function() {
                                    P.includes(n.name) && (0,
                                    f.a5)()
                                }
                                ));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }());
            var x = function() {
                if ((0,
                g.k2)(n),
                B())
                    (0,
                    f.bG)({
                        type: p.Cs.CLOSE
                    }, !1);
                else {
                    var e, r = (0,
                    u.a)(), o = r.redirect_url, i = null === (e = D.value) || void 0 === e || null === (e = e.children) || void 0 === e ? void 0 : e[0], c = (0,
                    a.SU)(D);
                    R.value.length > 0 && R.value.pop(),
                    c && i && i.name !== n.name ? t(i.name) : o && (0,
                    s.T8)(o)
                }
            }
              , D = (0,
            c.Fl)((function() {
                return n.matched[n.matched.length - 2]
            }
            ))
              , B = function() {
                return [v.x4.BIND_EMAIL_SET_ACC, v.x4.BIND_EMAIL_SET_PWD].includes(n.name)
            }
              , U = ((0,
            c.Fl)((function() {
                var e = n.name;
                return e === v.x4.AGE_VERIFY
            }
            )),
            function() {
                var e = !B();
                (0,
                g.Q$)(n),
                (0,
                f.bG)({
                    type: p.Cs.CLOSE
                }, e)
            }
            )
              , Z = (0,
            c.Fl)((function() {
                var e = n.name
                  , t = (0,
                u.a)()
                  , r = t.redirect_url
                  , o = t.ux_mode;
                if (o === v.JJ.REDIRECT)
                    return !!r;
                var i, a = null === (i = D.value) || void 0 === i || null === (i = i.children) || void 0 === i ? void 0 : i[0];
                return a && a.name !== e
            }
            ));
            return document.addEventListener("focus", (function(e) {
                var n;
                "input" === (null === e || void 0 === e || null === (n = e.target) || void 0 === n || null === (n = n.tagName) || void 0 === n ? void 0 : n.toLowerCase()) && (0,
                s.zd)() && (0,
                f.bG)({
                    type: p.Cs.INPUT_FOCUS
                })
            }
            ), !0),
            document.addEventListener("blur", (function(e) {
                var n, t = (0,
                u.a)(), r = t.client_type;
                "input" === (null === e || void 0 === e || null === (n = e.target) || void 0 === n || null === (n = n.tagName) || void 0 === n ? void 0 : n.toLowerCase()) && ((0,
                s.zd)() && (0,
                f.bG)({
                    type: p.Cs.INPUT_BLUR
                }),
                r === v.Bh.IOS && setTimeout((function() {
                    console.error("ios handling scroll to 0"),
                    window.scrollTo(0, 0)
                }
                ), 100))
            }
            ), !0),
            {
                handleIFrameClose: U,
                handleIframeAbort: x,
                showIframeBack: Z,
                frameVisible: k,
                hideNav: b,
                title: A,
                cachedRoutes: R
            }
        }
    },
    65581: function(e, n, t) {
        "use strict";
        t.d(n, {
            a: function() {
                return c
            }
        });
        var r = t(70769)
          , o = t(67787)
          , i = (t(8220),
        (0,
        r.a)())
          , a = (0,
        o.iH)(i.autotest)
          , c = function() {
            var e = ["development", "test"].includes("production")
              , n = function() {
                a.value = !a.value
            };
            return {
                isValid: e,
                isEnabled: a,
                toggleEnable: n
            }
        }
    },
    42698: function(e, n, t) {
        "use strict";
        t.d(n, {
            u: function() {
                return c
            }
        });
        var r = t(17372)
          , o = t(38101)
          , i = t(2140)
          , a = t(22213)
          , c = function() {
            var e = {
                info: function(e, n) {
                    (0,
                    r.zd)() ? (0,
                    i.bG)({
                        type: a.Cs.H5LOG_INFO,
                        payload: {
                            msg: e,
                            data: n
                        }
                    }) : o.Z.h5logger.info(e, n)
                },
                warn: function(e, n) {
                    (0,
                    r.zd)() ? (0,
                    i.bG)({
                        type: a.Cs.H5LOG_WARN,
                        payload: {
                            msg: e,
                            data: n
                        }
                    }) : o.Z.h5logger.warn(e, n)
                },
                error: function(e, n) {
                    (0,
                    r.zd)() ? (0,
                    i.bG)({
                        type: a.Cs.H5LOG_ERROR,
                        payload: {
                            msg: e,
                            data: n
                        }
                    }) : o.Z.h5logger.error(e, n)
                }
            };
            return {
                h5logger: e
            }
        }
    },
    70769: function(e, n, t) {
        "use strict";
        t.d(n, {
            a: function() {
                return s
            }
        });
        var r = t(17372)
          , o = (t(53861),
        t(7061),
        t(79531),
        t(71935),
        t(58373),
        t(59568),
        t(95151),
        t(98518))
          , i = t(22213)
          , a = t(20837)
          , c = t.n(a)
          , u = function() {
            var e = c().parse(window.location.search, {
                ignoreQueryPrefix: !0
            });
            if (e) {
                var n = Object.keys(e).filter((function(e) {
                    return e.startsWith(i.Nd)
                }
                ));
                return n.reduce((function(n, t) {
                    var r = t.replace(i.Nd, "");
                    return e[t] && (n[i.um[r]] = e[t]),
                    n
                }
                ), {})
            }
        }
          , s = function() {
            var e, n, t, i, a, s, l, d, f, p, _, v, m, g, h, E, y = c().parse(window.location.search, {
                ignoreQueryPrefix: !0
            }), I = Number(y.token_type)in o.iv, k = I ? Number(y.token_type) : o.iv.TokenTypeCookieToken;
            E = y.client_type ? Number(y.client_type) : (0,
            r.tq)() ? o.Bh.WAP : o.Bh.WEB;
            var w = y.sdk_version ? y.sdk_version : "0.0.0"
              , b = y.callback_type
              , A = null !== (e = y.auto_login) && void 0 !== e ? e : ""
              , S = null !== (n = y.user_type) && void 0 !== n ? n : ""
              , T = y.lang ? y.lang : "en-us"
              , N = null !== (t = y.redirect_url) && void 0 !== t ? t : ""
              , R = u()
              , O = null !== (i = y.account) && void 0 !== i ? i : ""
              , C = null !== (a = y.app_id) && void 0 !== a ? a : ""
              , L = null !== (s = y.app_version) && void 0 !== s ? s : ""
              , P = null !== (l = y.game_biz) && void 0 !== l ? l : ""
              , x = null !== (d = y.theme) && void 0 !== d ? d : "light-default"
              , D = null !== (f = y.ticket_payload) && void 0 !== f ? f : ""
              , B = null !== (p = y.ux_mode) && void 0 !== p ? p : null
              , U = Number(y.iframe_level) || 0
              , Z = "true" === y.autotest
              , G = null !== (_ = y.st) && void 0 !== _ ? _ : ""
              , M = null !== (v = y.action_ticket) && void 0 !== v ? v : ""
              , F = null !== (m = y.kws_verify) && void 0 !== m ? m : ""
              , K = null !== (g = y.parent_ticket) && void 0 !== g ? g : ""
              , Y = y.action_type ? y.action_type : o.Us.ActionUnknown
              , V = y.iso
              , $ = (null === (h = y.bind_plat) || void 0 === h ? void 0 : h.split(",")) || []
              , J = Number(y.is_guest) || 0
              , H = Number(y.allow_back) || 0
              , j = Number(y.hide_logo) || 0
              , W = y.action_scene
              , z = {};
            return (y.google_login || y.third_login) && (z.google_login = y.third_login ? !!Number(y.third_login) : !!Number(y.google_login)),
            (y.apple_login || y.third_login) && (z.apple_login = y.third_login ? !!Number(y.third_login) : !!Number(y.apple_login)),
            (y.twitter_login || y.third_login) && (z.twitter_login = y.third_login ? !!Number(y.third_login) : !!Number(y.twitter_login)),
            (y.facebook_login || y.third_login) && (z.facebook_login = y.third_login ? !!Number(y.third_login) : !!Number(y.facebook_login)),
            y.psn_login && (z.psn_login = !!Number(y.psn_login)),
            y.account_register_tab && (z.account_register_tab = Boolean(+y.account_register_tab)),
            y.pwd_login_tab && (z.pwd_login_tab = Boolean(+y.pwd_login_tab)),
            y.password_reset_entry && (z.password_reset_entry = Boolean(+y.password_reset_entry)),
            y.common_question_entry && (z.common_question_entry = Boolean(+y.common_question_entry)),
            {
                action_scene: W,
                st: G,
                user_type: S,
                theme: x,
                auto_login: A,
                ticket_payload: D,
                token_type: k,
                kws_verify: F,
                client_type: E,
                callback_type: b,
                lang: T,
                allow_back: H,
                redirect_url: N,
                app_id: C,
                appearance: R,
                app_version: L,
                is_guest: J,
                hide_logo: j,
                bind_plat: $,
                game_biz: P,
                ux_mode: B,
                sdk_version: w,
                autotest: Z,
                iframe_level: U,
                action_ticket: M,
                parent_ticket: K,
                action_type: Y,
                iso: V,
                switchStatus: z,
                account: O
            }
        }
    },
    36842: function(e, n, t) {
        "use strict";
        t.d(n, {
            R: function() {
                return a
            }
        });
        var r = t(91226)
          , o = t(47796)
          , i = (t(99944),
        t(53861),
        t(95151),
        t(2140))
          , a = function() {
            var e = (0,
            r.tv)()
              , n = function() {
                var n = (0,
                o.Z)(regeneratorRuntime.mark((function n(t) {
                    var r, o, a, c, u = arguments;
                    return regeneratorRuntime.wrap((function(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                if (o = u.length > 1 && void 0 !== u[1] ? u[1] : {},
                                a = u.length > 2 && void 0 !== u[2] ? u[2] : {},
                                c = null !== (r = o.replace) && void 0 !== r ? r : (0,
                                i.m8)(),
                                !c) {
                                    n.next = 8;
                                    break
                                }
                                return n.next = 6,
                                e.replace({
                                    name: t,
                                    params: o,
                                    state: a
                                });
                            case 6:
                                n.next = 10;
                                break;
                            case 8:
                                return n.next = 10,
                                e.push({
                                    name: t,
                                    params: o,
                                    state: a
                                });
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }();
            return n
        }
    },
    40922: function(e, n, t) {
        "use strict";
        t.d(n, {
            h: function() {
                return _
            }
        });
        var r = t(67787)
          , o = t(70769)
          , i = t(62141)
          , a = t(47796)
          , c = t(70242)
          , u = (t(99944),
        t(81934),
        t(98288),
        t(14181),
        t(18294))
          , s = t(67977)
          , l = t(98518)
          , d = (0,
        r.iH)({})
          , f = function() {
            var e = (0,
            s.$7)(l.Z1.LOCAL_STORAGE)(l.BU.SWITCH_STATUS)
              , n = (0,
            o.a)()
              , t = n.switchStatus;
            return (0,
            c.Z)((0,
            c.Z)({}, e), t)
        };
        d.value = f();
        var p = (0,
        r.iH)(!1)
          , _ = function() {
            var e = (0,
            o.a)()
              , n = e.app_id
              , t = e.client_type
              , r = function() {
                var e = (0,
                a.Z)(regeneratorRuntime.mark((function e() {
                    var r, o, a, c;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                (0,
                                u.JY)({
                                    app_id: n,
                                    client_type: t
                                }, {
                                    loading: !p.value,
                                    errorToast: !1
                                });
                            case 3:
                                o = e.sent,
                                a = null !== (r = null === o || void 0 === o ? void 0 : o.switch_status_map) && void 0 !== r ? r : {},
                                c = Object.fromEntries(Object.entries(a).map((function(e) {
                                    var n = (0,
                                    i.Z)(e, 2)
                                      , t = n[0]
                                      , r = n[1];
                                    return [t, r.enabled]
                                }
                                ))),
                                d.value = c,
                                (0,
                                s.b7)(l.Z1.LOCAL_STORAGE)(l.BU.SWITCH_STATUS, c),
                                d.value = f(),
                                p.value = !0,
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e["catch"](0),
                                p.value = !0;
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 12]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return {
                switchInited: p,
                loadSwitchStatus: r,
                switchStatus: d
            }
        }
    },
    21393: function(e, n, t) {
        "use strict";
        t.d(n, {
            Hp: function() {
                return m
            },
            ND: function() {
                return E
            },
            NM: function() {
                return g
            },
            Nn: function() {
                return v
            },
            Ph: function() {
                return w
            },
            Qs: function() {
                return T
            },
            Uw: function() {
                return y
            },
            YL: function() {
                return N
            },
            bo: function() {
                return k
            },
            df: function() {
                return b
            },
            jW: function() {
                return h
            },
            lJ: function() {
                return S
            },
            oZ: function() {
                return A
            },
            qT: function() {
                return f
            },
            z4: function() {
                return _
            },
            zu: function() {
                return I
            }
        });
        var r = t(70769)
          , o = t(70242)
          , i = (t(8220),
        t(5165),
        t(71935),
        t(75428),
        t(96442))
          , a = t(17372)
          , c = t(94814)
          , u = t(42698)
          , s = t(98518);
        window.miHoYoGameJSSDK = i.Z;
        var l = "2.0.0"
          , d = 6e5
          , f = {
            back: "accountActionBack",
            setActionTicket: "accountSetActionTicketInfo",
            loadReady: "loadReady",
            login: "login",
            verifySuccess: "verifySuccess",
            gameAuth: "gameAuth",
            close: "close"
        }
          , p = function() {
            var e = (0,
            r.a)()
              , n = e.client_type;
            return [s.Bh.PC, s.Bh.CloudPC].includes(n) ? 1e3 : 200
        }
          , _ = function(e) {
            i.Z.on(f.back, e)
        }
          , v = function(e) {
            i.Z.remove(f.back, e)
        }
          , m = function(e) {
            i.Z.on(f.setActionTicket, e)
        }
          , g = function(e) {
            i.Z.remove(f.setActionTicket, e)
        }
          , h = function() {
            i.Z.execCmd(f.loadReady)
        }
          , E = function() {
            var e = (0,
            r.a)()
              , n = e.sdk_version;
            return (0,
            a.M7)(n, l) >= 0
        }
          , y = function() {
            var e = (0,
            u.u)()
              , n = e.h5logger
              , t = {
                method: "closeWebview"
            };
            console.log(c.DB.SDK_CLIENT_MESSAGE, t, Date.now()),
            n.info(c.DB.SDK_CLIENT_MESSAGE, t),
            E() ? i.Z.postMessageByBridge("closeWeb", null, (function() {}
            )) : i.Z.closeWebview()
        }
          , I = function(e) {
            var n = (0,
            u.u)()
              , t = n.h5logger
              , r = (0,
            o.Z)({
                method: "resultCallback"
            }, e);
            console.log(c.DB.SDK_CLIENT_MESSAGE, r, Date.now()),
            t.info(c.DB.SDK_CLIENT_MESSAGE, r),
            E() ? i.Z.postMessageByBridge("resultCallback", e.payload) : i.Z.execCmd(e.cmd)
        }
          , k = function(e) {
            var n = (0,
            u.u)()
              , t = n.h5logger
              , r = (0,
            o.Z)({
                method: "errorCallback"
            }, e);
            console.log(c.DB.SDK_CLIENT_MESSAGE, r, Date.now()),
            t.info(c.DB.SDK_CLIENT_MESSAGE, r),
            i.Z.postMessageByBridge("errorCallback", e.payload)
        }
          , w = function() {
            var e = Date.now()
              , n = (0,
            u.u)()
              , t = n.h5logger;
            return new Promise((function(n, r) {
                var a = setTimeout((function() {
                    var e = {
                        method: "getCustomLogInfoFromSDK",
                        error: "getCustomLogInfoFromSDK timeout"
                    };
                    console.error(c.DB.SDK_CLIENT_MESSAGE, e, Date.now()),
                    t.error(c.DB.SDK_CLIENT_MESSAGE, e),
                    r(new Error("getCustomLogInfoFromSDK timeout"))
                }
                ), p());
                i.Z.postMessageByBridge("getCustomLogInfo", null, (function(r) {
                    var i = (0,
                    o.Z)((0,
                    o.Z)({
                        method: "getCustomLogInfoFromSDK"
                    }, r), {}, {
                        duration: Date.now() - e
                    });
                    console.log(c.DB.SDK_CLIENT_MESSAGE, i, Date.now()),
                    t.info(c.DB.SDK_CLIENT_MESSAGE, i),
                    clearTimeout(a),
                    n(r)
                }
                ))
            }
            ))
        }
          , b = function() {
            var e = Date.now()
              , n = (0,
            u.u)()
              , t = n.h5logger;
            return new Promise((function(n, r) {
                var a = {
                    method: "getHTTPRequestHeaders",
                    error: "getHTTPRequestHeaders timeout"
                }
                  , u = setTimeout((function() {
                    console.error(c.DB.SDK_CLIENT_MESSAGE, a, Date.now()),
                    t.error(c.DB.SDK_CLIENT_MESSAGE, a),
                    r(new Error("getHTTPRequestHeaders timeout"))
                }
                ), p());
                i.Z.postMessageByBridge("getHTTPRequestHeaders", null, (function(r) {
                    var i = (0,
                    o.Z)((0,
                    o.Z)({
                        method: "getHTTPRequestHeadersFromSDK"
                    }, r), {}, {
                        duration: Date.now() - e
                    });
                    console.log(c.DB.SDK_CLIENT_MESSAGE, i, Date.now()),
                    t.info(c.DB.SDK_CLIENT_MESSAGE, i),
                    clearTimeout(u),
                    n(r)
                }
                ))
            }
            ))
        }
          , A = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z
              , t = Date.now()
              , r = (0,
            u.u)()
              , a = r.h5logger
              , s = (0,
            o.Z)({
                method: "getThirdToken"
            }, e);
            return console.log(c.DB.SDK_CLIENT_MESSAGE, s, Date.now()),
            a.info(c.DB.SDK_CLIENT_MESSAGE, s),
            new Promise((function(r, i) {
                var u = setTimeout((function() {
                    var e = {
                        method: "getThirdToken",
                        error: "getThirdToken timeout"
                    };
                    console.error(c.DB.SDK_CLIENT_MESSAGE, e, Date.now()),
                    a.error(c.DB.SDK_CLIENT_MESSAGE, e),
                    i(new Error("getThirdToken timeout"))
                }
                ), d);
                n.postMessageByBridge("getThirdToken", e.payload, (function(e) {
                    var n = (0,
                    o.Z)((0,
                    o.Z)({
                        method: "getThirdTokenFromSDK"
                    }, e), {}, {
                        duration: Date.now() - t
                    });
                    console.log(c.DB.SDK_CLIENT_MESSAGE, n, Date.now()),
                    a.info(c.DB.SDK_CLIENT_MESSAGE, n),
                    clearTimeout(u),
                    r(e)
                }
                ))
            }
            ))
        }
          , S = function() {
            var e = Date.now()
              , n = (0,
            u.u)()
              , t = n.h5logger;
            return E() ? new Promise((function(n, r) {
                var a = setTimeout((function() {
                    var e = {
                        method: "getActionTicketInfoFromSDK",
                        error: "getActionTicketInfoFromSDK timeout"
                    };
                    console.error(c.DB.SDK_CLIENT_MESSAGE, e, Date.now()),
                    t.error(c.DB.SDK_CLIENT_MESSAGE, e),
                    r(new Error("getActionTicketInfoFromSDK timeout"))
                }
                ), p());
                i.Z.postMessageByBridge("getActionTicketInfo", null, (function(r) {
                    var i = (0,
                    o.Z)((0,
                    o.Z)({
                        method: "getActionTicketInfoFromSDK"
                    }, r), {}, {
                        duration: Date.now() - e
                    });
                    console.log(c.DB.SDK_CLIENT_MESSAGE, i, Date.now()),
                    t.info(c.DB.SDK_CLIENT_MESSAGE, i),
                    clearTimeout(a),
                    n(r)
                }
                ))
            }
            )) : Promise.resolve()
        }
          , T = function() {
            return new Promise((function(e, n) {
                i.Z.postMessageByBridge("checkShowGoogleGameServiceLoginEntry", null, (function(n) {
                    e(n)
                }
                ))
            }
            ))
        }
          , N = function() {
            return new Promise((function(e, n) {
                i.Z.postMessageByBridge("googleGameServiceLogin", null, (function(n) {
                    e(n)
                }
                ))
            }
            ))
        }
    },
    45162: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return x
            }
        });
        var r = t(17372)
          , o = (t(71935),
        t(63785),
        t(31105),
        t(15559))
          , i = t(22843)
          , a = t(30182)
          , c = t(37220)
          , u = t(11279)
          , s = t(69630)
          , l = t(39661)
          , d = t(67787)
          , f = {
            class: "hyv-common-popup__root-container"
        }
          , p = {
            key: 0,
            class: "hyv-text-main text-left hyv-popup-title"
        }
          , _ = {
            class: "hyv-common-popup__container"
        }
          , v = ["innerHTML"]
          , m = {
            key: 1
        }
          , g = {
            key: 2,
            class: "hyv-mobile-dialog-footer"
        }
          , h = (0,
        a.aZ)({
            setup(e, n) {
                var t = n.expose
                  , r = (0,
                i.J)()
                  , o = r.t
                  , h = (0,
                d.iH)(!1)
                  , E = (0,
                d.iH)("")
                  , y = (0,
                d.iH)(null)
                  , I = (0,
                d.iH)("")
                  , k = (0,
                d.iH)((function() {}
                ))
                  , w = (0,
                d.iH)((function() {}
                ))
                  , b = (0,
                d.iH)(o("common_confirm"))
                  , A = (0,
                d.iH)(o("common_cancel"))
                  , S = (0,
                d.iH)("")
                  , T = (0,
                d.iH)("");
                return (0,
                a.bv)((function() {
                    var e = document.activeElement;
                    e instanceof HTMLElement && e.blur()
                }
                )),
                t({
                    title: E,
                    message: I,
                    vNode: y,
                    show: h,
                    mode: S,
                    onCancel: k,
                    onConfirm: w,
                    confirmText: b,
                    cancelText: A,
                    confirmLink: T
                }),
                function(e, n) {
                    var t = s.Z
                      , r = u.Z
                      , o = c.Z;
                    return (0,
                    a.wg)(),
                    (0,
                    a.j4)(o, {
                        "modal-class": "hyv-flow-dialog-overlay-wrapper",
                        position: "bottom",
                        class: "hyv-common-popup hyv-flow-dialog-overlay-wrapper",
                        show: h.value,
                        "onUpdate:show": n[2] || (n[2] = function(e) {
                            return h.value = e
                        }
                        ),
                        closeable: "popup" === S.value,
                        "close-icon": "close"
                    }, {
                        default: (0,
                        a.w5)((function() {
                            return [(0,
                            a._)("div", f, [E.value ? ((0,
                            a.wg)(),
                            (0,
                            a.iD)("div", p, (0,
                            l.zw)(E.value), 1)) : (0,
                            a.kq)("", !0), (0,
                            a._)("div", _, [I.value ? ((0,
                            a.wg)(),
                            (0,
                            a.iD)("div", {
                                key: 0,
                                class: "text-left hyv-text-sub hyv-font-body2",
                                innerHTML: I.value
                            }, null, 8, v)) : (0,
                            a.kq)("", !0), y.value ? ((0,
                            a.wg)(),
                            (0,
                            a.iD)("div", m, [((0,
                            a.wg)(),
                            (0,
                            a.j4)((0,
                            a.LL)(y.value)))])) : (0,
                            a.kq)("", !0), "popup" !== S.value ? ((0,
                            a.wg)(),
                            (0,
                            a.iD)("div", g, [(0,
                            a.Wm)(t, {
                                class: "hyv-popup-primary-button",
                                type: "primary",
                                size: "large",
                                block: "",
                                href: T.value,
                                target: "_blank",
                                rel: "noopener",
                                onClick: n[0] || (n[0] = function(e) {
                                    h.value = !1,
                                    w.value()
                                }
                                )
                            }, {
                                default: (0,
                                a.w5)((function() {
                                    return [(0,
                                    a.Uk)((0,
                                    l.zw)(b.value), 1)]
                                }
                                )),
                                _: 1
                            }, 8, ["href"]), "confirm" === S.value ? ((0,
                            a.wg)(),
                            (0,
                            a.j4)(r, {
                                key: 0,
                                type: "primary",
                                class: "mt-p16 text-center cancel-link",
                                onClick: n[1] || (n[1] = function(e) {
                                    h.value = !1,
                                    k.value()
                                }
                                )
                            }, {
                                default: (0,
                                a.w5)((function() {
                                    return [(0,
                                    a.Uk)((0,
                                    l.zw)(A.value), 1)]
                                }
                                )),
                                _: 1
                            })) : (0,
                            a.kq)("", !0)])) : (0,
                            a.kq)("", !0)])])]
                        }
                        )),
                        _: 1
                    }, 8, ["show", "closeable"])
                }
            }
        });
        const E = h;
        var y = E
          , I = t(95013)
          , k = {
            key: 0
        }
          , w = ["innerHTML"]
          , b = {
            key: 1
        }
          , A = {
            class: "dialog-footer"
        }
          , S = (0,
        a.aZ)({
            setup(e, n) {
                var t = n.expose
                  , r = (0,
                i.J)()
                  , o = r.t
                  , c = (0,
                d.iH)(!1)
                  , u = (0,
                d.iH)("")
                  , f = (0,
                d.iH)("")
                  , p = (0,
                d.iH)(null)
                  , _ = (0,
                d.iH)((function() {}
                ))
                  , v = (0,
                d.iH)((function() {}
                ))
                  , m = (0,
                d.iH)(o("common_confirm"))
                  , g = (0,
                d.iH)(o("common_cancel"))
                  , h = (0,
                d.iH)(!0)
                  , E = (0,
                d.iH)("")
                  , y = (0,
                d.iH)("")
                  , S = function() {
                    c.value = !1,
                    _.value()
                };
                return (0,
                a.bv)((function() {
                    var e = document.activeElement;
                    e instanceof HTMLElement && e.blur()
                }
                )),
                t({
                    title: u,
                    message: f,
                    vNode: p,
                    show: c,
                    mode: E,
                    closable: h,
                    onCancel: _,
                    onConfirm: v,
                    confirmText: m,
                    cancelText: g,
                    confirmLink: y
                }),
                function(e, n) {
                    var t = s.Z
                      , r = I.Z;
                    return (0,
                    a.wg)(),
                    (0,
                    a.j4)(r, {
                        customClass: "hyv-common-dialog",
                        "modal-class": "hyv-flow-dialog-overlay-wrapper",
                        title: u.value,
                        modelValue: c.value,
                        "onUpdate:modelValue": n[2] || (n[2] = function(e) {
                            return c.value = e
                        }
                        ),
                        "show-close": h.value,
                        "before-close": S
                    }, (0,
                    a.Nv)({
                        default: (0,
                        a.w5)((function() {
                            return [f.value ? ((0,
                            a.wg)(),
                            (0,
                            a.iD)("span", k, [(0,
                            a._)("span", {
                                class: "mt-p12 hyv-text-sub",
                                innerHTML: f.value
                            }, null, 8, w)])) : (0,
                            a.kq)("", !0), p.value ? ((0,
                            a.wg)(),
                            (0,
                            a.iD)("div", b, [((0,
                            a.wg)(),
                            (0,
                            a.j4)((0,
                            a.LL)(p.value)))])) : (0,
                            a.kq)("", !0)]
                        }
                        )),
                        _: 2
                    }, ["popup" !== E.value ? {
                        name: "footer",
                        fn: (0,
                        a.w5)((function() {
                            return [(0,
                            a._)("div", A, ["confirm" === E.value ? ((0,
                            a.wg)(),
                            (0,
                            a.j4)(t, {
                                key: 0,
                                type: "default",
                                onClick: n[0] || (n[0] = function(e) {
                                    c.value = !1,
                                    _.value()
                                }
                                )
                            }, {
                                default: (0,
                                a.w5)((function() {
                                    return [(0,
                                    a.Uk)((0,
                                    l.zw)(g.value), 1)]
                                }
                                )),
                                _: 1
                            })) : (0,
                            a.kq)("", !0), (0,
                            a.Wm)(t, {
                                type: "primary",
                                href: y.value,
                                target: "_blank",
                                rel: "noopener",
                                onClick: n[1] || (n[1] = function(e) {
                                    c.value = !1,
                                    v.value()
                                }
                                )
                            }, {
                                default: (0,
                                a.w5)((function() {
                                    return [(0,
                                    a.Uk)((0,
                                    l.zw)(m.value), 1)]
                                }
                                )),
                                _: 1
                            }, 8, ["href"])])]
                        }
                        ))
                    } : void 0]), 1032, ["title", "modelValue", "show-close"])
                }
            }
        });
        const T = S;
        var N = T
          , R = function() {}
          , O = function(e) {
            "Enter" === e.key && e.preventDefault()
        }
          , C = function() {
            var e, n = null === (e = document) || void 0 === e || null === (e = e.body) || void 0 === e ? void 0 : e.getElementsByClassName("hyv-flow-dialog-overlay-wrapper");
            (null === n || void 0 === n ? void 0 : n.length) > 0 && Array.from(n).forEach((function(e) {
                e.remove()
            }
            ))
        }
          , L = function(e) {
            var n;
            document.addEventListener("keydown", O),
            null === (n = document.getElementById("app")) || void 0 === n || n.appendChild(e.$el)
        }
          , P = {
            alert: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                C();
                var n = document.createElement("div")
                  , t = (0,
                r.tq)() ? y : N
                  , i = (0,
                o.ri)(t).mount(n);
                return i.title = e.title || "",
                i.message = e.message || "",
                i.closable = e.closable,
                i.vNode = e.vNode,
                i.show = !0,
                i.mode = "alert",
                i.onConfirm = function() {
                    document.removeEventListener("keydown", O);
                    var n = e.onConfirm || R;
                    n()
                }
                ,
                e.onCancel && (i.onCancel = function() {
                    document.removeEventListener("keydown", O),
                    e.onCancel()
                }
                ),
                e.confirmText && (i.confirmText = e.confirmText),
                L(i),
                i
            },
            confirm: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                C();
                var n = document.createElement("div")
                  , t = (0,
                r.tq)() ? y : N
                  , i = (0,
                o.ri)(t).mount(n);
                return i.closable = e.closable,
                i.title = e.title || "",
                i.message = e.message || "",
                i.vNode = e.vNode,
                i.show = !0,
                i.mode = "confirm",
                i.confirmLink = e.confirmLink,
                i.onConfirm = function() {
                    document.removeEventListener("keydown", O);
                    var n = e.onConfirm || R;
                    n()
                }
                ,
                i.onCancel = function() {
                    document.removeEventListener("keydown", O);
                    var n = e.onCancel || R;
                    n()
                }
                ,
                e.confirmText && (i.confirmText = e.confirmText),
                e.cancelText && (i.cancelText = e.cancelText),
                L(i),
                i
            },
            popup: function() {
                var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                C();
                var i = document.createElement("div")
                  , a = (0,
                r.tq)() ? y : N
                  , c = (0,
                o.ri)(a)
                  , u = c.mount(i);
                return u.title = t.title || "",
                u.message = t.message || "",
                u.closable = null === (e = t.closable) || void 0 === e || e,
                u.cancelOnClose = null === (n = t.cancelOnClose) || void 0 === n || n,
                u.vNode = t.vNode,
                u.show = !0,
                u.mode = "popup",
                u.onCancel = function() {
                    document.removeEventListener("keydown", O);
                    var e = t.onCancel || R;
                    e()
                }
                ,
                L(u),
                u
            }
        }
          , x = P
    },
    6163: function(e, n, t) {
        "use strict";
        t.d(n, {
            U2: function() {
                return D
            },
            v_: function() {
                return B
            }
        });
        var r = t(22843)
          , o = t(70769)
          , i = t(40922)
          , a = t(17372)
          , c = t(70242)
          , u = t(47796)
          , s = (t(99944),
        t(53861),
        t(95151),
        t(35503),
        t(60303),
        t(51552),
        t(98970),
        t(71935),
        t(67226))
          , l = t(31301)
          , d = t.n(l)
          , f = t(2140)
          , p = t(98518)
          , _ = t(42304)
          , v = t(36454)
          , m = t(6010)
          , g = t(14935)
          , h = t(84629)
          , E = t(38101)
          , y = t(35297)
          , I = t(45162)
          , k = t(95038)
          , w = t(42698)
          , b = t(94814)
          , A = t(65857)
          , S = t(84138)
          , T = (0,
        y.fx)()
          , N = T.tracks
          , R = (0,
        m.G)()
          , O = (R.showLoading,
        R.hideLoading)
          , C = (0,
        r.J)()
          , L = C.t
          , P = d().create({
            baseURL: v.Sg.SG.replace("hoyoverse.com", (0,
            h.K)()),
            timeout: 1e4,
            timeoutErrorMessage: L("common_network_err"),
            withCredentials: !0
        })
          , x = null;
        (0,
        b.PC)(P, (function() {
            var e = (0,
            w.u)()
              , n = e.h5logger;
            return n
        }
        )),
        P.interceptors.request.use(_.T),
        P.interceptors.request.use(k.z),
        P.interceptors.request.use((0,
        A.pv)({
            isEnabled: function() {
                return (0,
                A.ID)(S.c2)
            },
            apiBaseMap: v.Sg
        })),
        P.interceptors.response.use(function() {
            var e = (0,
            u.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, l, d, _, v, m, h, k, w, b, A, S, T, R, C, D, B, U, Z, G, M, F, K, Y, V, $, J, H, j, W, z, q, Q, X, ee;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = (0,
                            o.a)(),
                            l = (0,
                            i.h)(),
                            d = l.switchStatus,
                            _ = null === (t = d.value.password_reset_entry) || void 0 === t || t,
                            v = n.config,
                            m = n.data,
                            h = n.headers,
                            k = v.errorToast,
                            w = void 0 === k || k,
                            b = v.account,
                            A = v.trackingInfo,
                            S = void 0 === A ? {} : A,
                            0 !== m.retcode) {
                                e.next = 10;
                                break
                            }
                            return O(),
                            e.abrupt("return", null === (T = n.data) || void 0 === T ? void 0 : T.data);
                        case 10:
                            if (m.retcode !== p.jK.AIGIS_FAIL) {
                                e.next = 36;
                                break
                            }
                            return e.prev = 11,
                            document.activeElement instanceof HTMLElement && document.activeElement.blur(),
                            R = (0,
                            y.Uv)(),
                            C = R.tracks,
                            D = h["x-rpc-aigis"],
                            B = JSON.parse(D),
                            U = B.session_id,
                            Z = JSON.parse(B.data),
                            G = {
                                captchaType: "geetest",
                                captchaVersion: null !== Z && void 0 !== Z && Z.use_v4 ? "4.0" : "3.0",
                                isMobile: (0,
                                a.tq)()
                            },
                            e.next = 21,
                            (0,
                            s.ZP)({
                                geetestData: Z,
                                lang: r.lang,
                                onInit: function(e) {
                                    C.captcha_init((0,
                                    c.Z)((0,
                                    c.Z)({}, e), G))
                                },
                                onReady: function(e) {
                                    C.captcha_pv((0,
                                    c.Z)((0,
                                    c.Z)({}, e), G))
                                },
                                onComplete: function(e) {
                                    C.captcha_verify((0,
                                    c.Z)((0,
                                    c.Z)({}, e), G))
                                }
                            }, B);
                        case 21:
                            if (M = e.sent,
                            O(),
                            F = M.retcode,
                            K = M.data,
                            0 !== F) {
                                e.next = 26;
                                break
                            }
                            return e.abrupt("return", P((0,
                            c.Z)((0,
                            c.Z)({}, v), {}, {
                                headers: (0,
                                c.Z)((0,
                                c.Z)({}, v.headers), {}, {
                                    "x-rpc-aigis": `${U};${btoa(JSON.stringify(K))}`
                                })
                            })));
                        case 26:
                            e.next = 34;
                            break;
                        case 28:
                            if (e.prev = 28,
                            e.t0 = e["catch"](11),
                            O(),
                            (null === e.t0 || void 0 === e.t0 || null === (Y = e.t0.data) || void 0 === Y ? void 0 : Y.retcode) !== s.jI.close) {
                                e.next = 33;
                                break
                            }
                            return e.abrupt("return", Promise.reject());
                        case 33:
                            return e.abrupt("return", Promise.reject({
                                data: {
                                    retcode: -1,
                                    data: null,
                                    message: L("common_verify_fail")
                                }
                            }));
                        case 34:
                            e.next = 85;
                            break;
                        case 36:
                            if (m.retcode !== p.jK.AGE_GATE_LOGIN_RESTRICTED_CHALLENGE && m.retcode !== p.jK.AGE_GATE_REGISTER_RESTRICTED_CHALLENGE) {
                                e.next = 49;
                                break
                            }
                            return O(),
                            J = h["x-rpc-age_gate_payload"],
                            H = h["x-rpc-age_gate_time"],
                            H ? (W = (0,
                            a.p6)({
                                timestamp: H,
                                lang: r.lang,
                                dateFormat: p.t6.YEAR_MONTH_DAY_TIME_LONG
                            }),
                            j = L({
                                key: "msg_agegate_deadline",
                                data: {
                                    date: W
                                }
                            })) : j = L("msg_agegate_no_deadline"),
                            e.next = 43,
                            new Promise((function(e, n) {
                                I.Z.confirm({
                                    title: L("title_age_verification"),
                                    closable: !1,
                                    message: j,
                                    onConfirm: function() {
                                        var t = (0,
                                        u.Z)(regeneratorRuntime.mark((function t() {
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        (0,
                                                        f.a5)(),
                                                        E.Z.passport.ageVerify({
                                                            ticketPayload: J,
                                                            confirmText: L("common_confirm"),
                                                            uxMode: (0,
                                                            a.zd)() ? p.JJ.REDIRECT : p.JJ.POPUP,
                                                            onSuccess: function(n) {
                                                                e(n)
                                                            },
                                                            onError: function() {
                                                                n()
                                                            }
                                                        });
                                                    case 2:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        function r() {
                                            return t.apply(this, arguments)
                                        }
                                        return r
                                    }(),
                                    onCancel: function() {
                                        n()
                                    }
                                })
                            }
                            ));
                        case 43:
                            return z = e.sent,
                            null === (V = v.headers) || void 0 === V || delete V["x-rpc-verify"],
                            null === ($ = v.headers) || void 0 === $ || delete $["x-rpc-aigis"],
                            e.abrupt("return", P((0,
                            c.Z)((0,
                            c.Z)({}, v), {}, {
                                headers: (0,
                                c.Z)((0,
                                c.Z)({}, v.headers), {}, {
                                    "x-rpc-age_gate_ticket": null === z || void 0 === z ? void 0 : z.ageTicketId
                                })
                            })));
                        case 49:
                            if (m.retcode !== p.jK.INVALID_VERIFY) {
                                e.next = 54;
                                break
                            }
                            O(),
                            (0,
                            g.L1)(),
                            e.next = 85;
                            break;
                        case 54:
                            if (m.retcode !== p.jK.BANNED_BY_RISK_CONTROL || !_) {
                                e.next = 61;
                                break
                            }
                            O(),
                            q = m.message,
                            m.message = "",
                            I.Z.confirm({
                                title: L("common_reset_password"),
                                message: q,
                                confirmText: L("common_reset_password"),
                                confirmLink: (0,
                                f.oV)(b),
                                onConfirm: function() {
                                    N.verify_confirm({
                                        type: p.Vy.BANNED_BY_RISK_CONTROL
                                    })
                                },
                                onCancel: function() {
                                    N.verify_cancel({
                                        type: p.Vy.BANNED_BY_RISK_CONTROL
                                    })
                                }
                            }),
                            e.next = 85;
                            break;
                        case 61:
                            if (m.retcode !== p.jK.RISK_NEED_VERIFY_OTHER_REASON && m.retcode !== p.jK.NEW_DEVICE_VERIFICATION) {
                                e.next = 83;
                                break
                            }
                            if (e.prev = 62,
                            O(),
                            h["x-rpc-verify"]) {
                                e.next = 66;
                                break
                            }
                            return e.abrupt("return");
                        case 66:
                            return X = m.message,
                            m.message = "",
                            ee = JSON.parse(h["x-rpc-verify"]),
                            ee.verify_str = JSON.parse(ee.verify_str),
                            e.next = 72,
                            new Promise((function(e, n) {
                                var t;
                                null === (t = x) || void 0 === t || t(),
                                x = n,
                                I.Z.confirm({
                                    title: L("common_label_verify"),
                                    message: X,
                                    closable: !1,
                                    confirmText: L("common_label_verify"),
                                    onConfirm: function() {
                                        var t = (0,
                                        u.Z)(regeneratorRuntime.mark((function t() {
                                            var r, i, c, u, s;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        N.verify_confirm({
                                                            type: p.Vy.RISK_NEED_VERIFY_OTHER_REASON_OR_NEW_DEVICE
                                                        }),
                                                        u = (0,
                                                        o.a)(),
                                                        s = Number(null === ee || void 0 === ee || null === (r = ee.verify_str) || void 0 === r ? void 0 : r.verify_type),
                                                        s === p.O6.IDENTITY && (0,
                                                        f.a5)(),
                                                        E.Z.verifier.risky({
                                                            verifyType: Number(null === ee || void 0 === ee || null === (i = ee.verify_str) || void 0 === i ? void 0 : i.verify_type),
                                                            ticket: null === (c = ee.verify_str) || void 0 === c ? void 0 : c.ticket,
                                                            redirectUrl: window.location.href,
                                                            trackingInfo: S,
                                                            uxMode: (0,
                                                            a.zd)() ? p.JJ.REDIRECT : p.JJ.POPUP,
                                                            iframeLevel: u.iframe_level + 1,
                                                            onSuccess: function(n) {
                                                                e(n)
                                                            },
                                                            onError: n
                                                        });
                                                    case 5:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        function r() {
                                            return t.apply(this, arguments)
                                        }
                                        return r
                                    }(),
                                    onCancel: function() {
                                        N.verify_cancel({
                                            type: p.Vy.RISK_NEED_VERIFY_OTHER_REASON_OR_NEW_DEVICE
                                        }),
                                        n()
                                    }
                                })
                            }
                            ));
                        case 72:
                            return null === (Q = v.headers) || void 0 === Q || delete Q["x-rpc-aigis"],
                            e.abrupt("return", P((0,
                            c.Z)((0,
                            c.Z)({}, v), {}, {
                                headers: (0,
                                c.Z)((0,
                                c.Z)({}, v.headers), {}, {
                                    "x-rpc-verify": JSON.stringify({
                                        risk_ticket: ee.risk_ticket
                                    })
                                })
                            })));
                        case 76:
                            if (e.prev = 76,
                            e.t1 = e["catch"](62),
                            O(),
                            (null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.retcode) !== p.jK.INVALID_VERIFY) {
                                e.next = 81;
                                break
                            }
                            throw {
                                data: e.t1
                            };
                        case 81:
                            e.next = 85;
                            break;
                        case 83:
                            O(),
                            w && m.message && (0,
                            f.CF)(m.message);
                        case 85:
                            return e.abrupt("return", Promise.reject(n));
                        case 86:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[11, 28], [62, 76]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }(), (function(e) {
            var n;
            return O(),
            !1 !== (null === e || void 0 === e || null === (n = e.config) || void 0 === n ? void 0 : n.errorToast) && (0,
            f.CF)(L("common_network_err")),
            Promise.reject({
                data: {
                    retcode: -1,
                    data: null,
                    message: L("common_network_err")
                }
            })
        }
        ));
        var D = function(e, n) {
            return P.get(e, n)
        }
          , B = function(e, n, t) {
            return P.post(e, n, t)
        }
    },
    95038: function(e, n, t) {
        "use strict";
        t.d(n, {
            D: function() {
                return I
            },
            z: function() {
                return k
            }
        });
        var r, o = t(70769), i = t(17372), a = (t(74420),
        t(70242)), c = t(47796), u = (t(99944),
        t(71935),
        t(78766),
        t(73304)), s = t.n(u), l = t(67262), d = t.n(l), f = t(6010), p = t(78883), _ = t.n(p), v = t(65581), m = t(66423), g = t(2140), h = t(21393), E = t(67977), y = t(98518), I = function() {
            var e = (0,
            c.Z)(regeneratorRuntime.mark((function e() {
                var n, t, c, u, l, f;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = (0,
                            E.$7)(y.Z1.COOKIE)(y.BU.EXTRA_HEADER_INFO),
                            n && (0,
                            E.X1)(y.Z1.COOKIE, y.Z1.SESSION_STORAGE, [y.BU.EXTRA_HEADER_INFO]),
                            t = (0,
                            E.$7)(y.Z1.SESSION_STORAGE)(y.BU.EXTRA_HEADER_INFO),
                            !r) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", (0,
                            a.Z)((0,
                            a.Z)({}, r), t));
                        case 5:
                            if (c = (0,
                            o.a)(),
                            u = function() {
                                var e, n;
                                return {
                                    app_id: c.app_id || "",
                                    app_version: c.app_version || "",
                                    sdk_version: m.J,
                                    game_biz: c.game_biz,
                                    device_fp: s().getDeviceFp() || "",
                                    device_id: _().getUuid() || "",
                                    client_type: c.client_type.toString() || "",
                                    device_model: `${d().name} ${d().version}` || "",
                                    device_name: d().name || "",
                                    device_os: (null === (e = d().os) || void 0 === e ? void 0 : e.toString()) || "",
                                    lifecycle_id: (null === (n = (0,
                                    E.$7)(y.Z1.SESSION_STORAGE)(y.BU.LIFECYCLE_ID)) || void 0 === n ? void 0 : n.value) || (0,
                                    i.k$)()
                                }
                            }
                            ,
                            l = function(e) {
                                var n, t;
                                return {
                                    app_id: e.data["x-rpc-app_id"] || c.app_id || "",
                                    app_version: e.data["x-rpc-app_version"] || c.app_version || "",
                                    sdk_version: e.data["x-rpc-sdk_version"] || m.J,
                                    game_biz: e.data["x-rpc-game_biz"] || c.game_biz,
                                    device_fp: e.data["x-rpc-device_fp"] || s().getDeviceFp() || "",
                                    device_id: e.data["x-rpc-device_id"] || _().getUuid() || "",
                                    client_type: e.data["x-rpc-client_type"] || c.client_type.toString() || "",
                                    device_model: e.data["x-rpc-device_model"] || `${d().name} ${d().version}` || "",
                                    device_name: e.data["x-rpc-device_name"] || d().name || "",
                                    device_os: e.data["x-rpc-device_os"] || (null === (n = d().os) || void 0 === n ? void 0 : n.toString()) || "",
                                    lifecycle_id: e.data["x-rpc-lifecycle_id"] || (null === (t = (0,
                                    E.$7)(y.Z1.SESSION_STORAGE)(y.BU.LIFECYCLE_ID)) || void 0 === t ? void 0 : t.value) || (0,
                                    i.k$)()
                                }
                            }
                            ,
                            e.prev = 8,
                            !(0,
                            g.dN)()) {
                                e.next = 16;
                                break
                            }
                            return e.next = 12,
                            (0,
                            h.df)();
                        case 12:
                            f = e.sent,
                            r = l(f),
                            e.next = 17;
                            break;
                        case 16:
                            r = u();
                        case 17:
                            e.next = 22;
                            break;
                        case 19:
                            e.prev = 19,
                            e.t0 = e["catch"](8),
                            r = u();
                        case 22:
                            return e.abrupt("return", (0,
                            a.Z)((0,
                            a.Z)({}, r), t));
                        case 23:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[8, 19]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }(), k = function() {
            var e = (0,
            c.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, i, c, u, s, l;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = (0,
                            f.G)(),
                            r = t.hideLoading,
                            i = t.showLoading,
                            c = (0,
                            v.a)(),
                            u = (0,
                            o.a)(),
                            !1 !== (null === n || void 0 === n ? void 0 : n.loading) && i(),
                            e.prev = 4,
                            n.headers || (n.headers = {}),
                            u.lang && (n.headers["x-rpc-language"] = u.lang),
                            u.st && (n.headers["x-rpc-referrer"] = u.st),
                            c.isEnabled.value && (n.headers["x-rpc-auto_test"] = "true"),
                            e.next = 11,
                            I();
                        case 11:
                            return s = e.sent,
                            l = {
                                "x-rpc-app_id": s.app_id,
                                "x-rpc-app_version": s.app_version,
                                "x-rpc-sdk_version": s.sdk_version,
                                "x-rpc-game_biz": s.game_biz,
                                "x-rpc-device_fp": s.device_fp,
                                "x-rpc-device_id": s.device_id,
                                "x-rpc-client_type": s.client_type,
                                "x-rpc-device_model": s.device_model,
                                "x-rpc-device_name": s.device_name,
                                "x-rpc-lifecycle_id": s.lifecycle_id,
                                "x-rpc-device_os": s.device_os,
                                "x-rpc-aigis_v4": !0,
                                "x-rpc-age_gate": !0
                            },
                            n.headers = (0,
                            a.Z)((0,
                            a.Z)({}, n.headers), l),
                            e.abrupt("return", n);
                        case 17:
                            e.prev = 17,
                            e.t0 = e["catch"](4),
                            r();
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 17]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
    },
    18294: function(e, n, t) {
        "use strict";
        t.d(n, {
            I8: function() {
                return T
            },
            $I: function() {
                return N
            },
            KZ: function() {
                return C
            },
            ru: function() {
                return D
            },
            CT: function() {
                return O
            },
            Cp: function() {
                return L
            },
            $N: function() {
                return P
            },
            tm: function() {
                return x
            },
            o9: function() {
                return w
            },
            bB: function() {
                return S
            },
            iE: function() {
                return A
            },
            JY: function() {
                return V
            },
            Rn: function() {
                return K
            },
            Dg: function() {
                return b
            },
            av: function() {
                return U
            },
            l9: function() {
                return R
            },
            pI: function() {
                return Z
            },
            bo: function() {
                return G
            },
            VB: function() {
                return M
            },
            SC: function() {
                return B
            },
            El: function() {
                return Y
            },
            EL: function() {
                return F
            },
            pA: function() {
                return $
            }
        });
        t(74420);
        var r = t(70769)
          , o = t(70242)
          , i = (t(51986),
        t(74352))
          , a = t(6163)
          , c = t(47796)
          , u = (t(99944),
        t(53861),
        t(95151),
        t(71935),
        t(31301))
          , s = t.n(u)
          , l = t(36454)
          , d = t(6010)
          , f = t(84629)
          , p = t(42304)
          , _ = t(95038)
          , v = (0,
        d.G)()
          , m = v.showLoading
          , g = v.hideLoading
          , h = s().create({
            baseURL: l.q9.replace("hoyoverse.com", (0,
            f.K)()),
            timeout: 1e4,
            withCredentials: !0
        });
        h.interceptors.request.use(p.T),
        h.interceptors.request.use(_.z),
        h.interceptors.response.use(function() {
            var e = (0,
            c.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.data,
                            0 !== t.retcode) {
                                e.next = 4;
                                break
                            }
                            return g(),
                            e.abrupt("return", null === (r = n.data) || void 0 === r ? void 0 : r.data);
                        case 4:
                            return g(),
                            e.abrupt("return", Promise.reject(n));
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }(), (function(e) {
            return g(),
            Promise.reject(e)
        }
        ));
        var E = function(e, n) {
            return !1 !== (null === n || void 0 === n ? void 0 : n.loading) && m(),
            h.get(e, n)
        }
          , y = t(98518)
          , I = t(17372)
          , k = "/account/ma-passport/api"
          , w = function(e, n) {
            return (0,
            a.v_)(`${k}/forgetPassword`, {
                password: i.Z.encrypt(e.password),
                action_ticket: e.action_ticket
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , b = function(e, n) {
            var t = (0,
            r.a)()
              , i = t.token_type;
            return (0,
            a.v_)(`${k}/webLoginByThirdParty`, {
                thirdparty_type: e.thirdparty,
                token: e.token,
                login_only: e.login_only,
                token_type: i
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , A = function(e) {
            return (0,
            a.v_)(`${k}/getConfig`, {}, e)
        }
          , S = function(e) {
            return (0,
            a.v_)(`${k}/getAreaCode`, {}, e)
        }
          , T = function(e, n) {
            var t = e.email ? i.Z.encrypt(e.email) : void 0
              , r = e.password ? i.Z.encrypt(e.password) : void 0;
            return (0,
            a.v_)(`${k}/bindEmail`, {
                action_ticket: e.action_ticket,
                email: t,
                password: r
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , N = function(e, n) {
            return (0,
            a.v_)(`${k}/bindEmailByCookieToken`, {
                action_ticket: e.action_ticket
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , R = function(e, n) {
            return (0,
            a.v_)(`${k}/reBindEmail`, {
                action_ticket: e.action_ticket
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , O = function(e, n) {
            var t = e.password ? i.Z.encrypt(e.password) : void 0;
            return (0,
            a.v_)(`${k}/bindUsername`, {
                action_ticket: e.action_ticket,
                username: e.username,
                password: t
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , C = function(e, n) {
            return (0,
            a.v_)(`${k}/bindMobile`, {
                action_ticket: e.action_ticket
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , L = function(e, n) {
            return (0,
            a.v_)(`${k}/changePassword`, {
                action_ticket: e.action_ticket,
                password: i.Z.encrypt(e.password)
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , P = function(e, n) {
            return (0,
            a.v_)(`${k}/checkAccount`, {
                action_ticket: e.action_ticket
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , x = function(e, n) {
            return (0,
            a.v_)(`${k}/deleteAccount`, {
                action_ticket: e.action_ticket
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , D = function(e, n) {
            var t = (0,
            r.a)()
              , i = t.token_type;
            return i === y.iv.TokenTypeLtoken ? (0,
            a.v_)(`${k}/bindThirdPartyByLToken`, e, (0,
            o.Z)({
                domainRedirect: !0
            }, n)) : (0,
            a.v_)(`${k}/bindThirdPartyByCookieToken`, e, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , B = function(e, n) {
            var t = (0,
            r.a)()
              , i = t.token_type;
            return i === y.iv.TokenTypeLtoken ? (0,
            a.v_)(`${k}/unBindThirdPartyByLToken`, e, (0,
            o.Z)({
                domainRedirect: !0
            }, n)) : (0,
            a.v_)(`${k}/unBindThirdPartyByCookieToken`, e, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , U = function(e, n) {
            return (0,
            a.v_)(`${k}/reactivateAccount`, {
                action_ticket: e.action_ticket
            }, (0,
            o.Z)((0,
            o.Z)({
                domainRedirect: !0
            }, n), {}, {
                headers: (0,
                o.Z)((0,
                o.Z)({}, null === n || void 0 === n ? void 0 : n.headers), {}, {
                    "x-rpc-acc_reactivate": "1"
                })
            }))
        }
          , Z = function(e, n) {
            var t = (0,
            r.a)()
              , c = t.token_type;
            return (0,
            a.v_)(`${k}/registerByEmail`, {
                action_ticket: e.action_ticket,
                email: i.Z.encrypt(e.email),
                password: i.Z.encrypt(e.password),
                token_type: c,
                marketing_status: (0,
                I.iH)(e.marketing_status)
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , G = function(e, n) {
            var t = (0,
            r.a)()
              , c = t.token_type
              , u = {
                action_ticket: e.action_ticket,
                token_type: c,
                marketing_status: (0,
                I.iH)(e.marketing_status)
            };
            return e.password && (u.password = i.Z.encrypt(e.password)),
            (0,
            a.v_)(`${k}/registerByThirdParty`, u, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , M = function(e) {
            return (0,
            a.v_)(`${k}/twitterRequestToken`, e, {
                domainRedirect: !0
            })
        }
          , F = function(e, n) {
            var t = (0,
            r.a)()
              , c = t.token_type;
            return (0,
            a.v_)(`${k}/webLoginByPassword`, {
                account: e.account,
                password: i.Z.encrypt(e.password),
                token_type: c
            }, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , K = function(e, n) {
            return (0,
            a.v_)(`${k}/getUserMarketingStatus`, e, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , Y = function(e, n) {
            return (0,
            a.v_)(`${k}/updateUserMarketingStatus`, e, (0,
            o.Z)({
                domainRedirect: !0
            }, n))
        }
          , V = function(e, n) {
            return E(`${k}/getSwitchStatus`, (0,
            o.Z)({
                params: {
                    app_id: e.app_id,
                    platform: e.client_type
                }
            }, n))
        }
          , $ = function(e) {
            return (0,
            a.v_)(`${k}/logout`, {}, (0,
            o.Z)({
                domainRedirect: !0
            }, e))
        }
    },
    35297: function(e, n, t) {
        "use strict";
        t.d(n, {
            G$: function() {
                return d
            },
            Hs: function() {
                return l
            },
            Q$: function() {
                return m
            },
            Uv: function() {
                return v
            },
            a7: function() {
                return s
            },
            fx: function() {
                return f
            },
            iv: function() {
                return _
            },
            jL: function() {
                return p
            },
            k2: function() {
                return g
            }
        });
        var r = t(64660)
          , o = t(17372)
          , i = t(70242)
          , a = t(98518)
          , c = t(51586)
          , u = t(24549)
          , s = function() {
            var e = (0,
            r.P)()
              , n = {
                invalidAID_view: function(n) {
                    e.trackEvent("曝光", "view", "注销激活弹窗", "invalidAID_view", n)
                },
                invalidAID_cancel: function(n) {
                    e.trackEvent("click", "click", "取消", "invalidAID_cancel", n)
                },
                invalidAID_activation: function(n) {
                    e.trackEvent("click", "click", "重新激活", "invalidAID_activation", n)
                },
                invalidAID_loginSuccess: function(n) {
                    e.trackEvent("曝光", "explore", "账号激活登录成功", "invalidAID_loginSuccess", n)
                }
            };
            return {
                tracks: n
            }
        }
          , l = function() {
            var e = (0,
            r.P)()
              , n = {
                webRegister_agreements: function(n) {
                    e.trackEvent("click", "button_click", "协议勾选", (0,
                    o.tq)() ? "webRegister_inputEmail_agreements" : "webRegister_agreements", n)
                },
                webRegister_agreementswindow_agree: function(n) {
                    e.trackEvent("click", "button_click", "协议弹窗同意", (0,
                    o.tq)() ? "webRegister_inputEmail_agreementswindow_agree" : "webRegister_agreementswindow_agree", n)
                },
                webRegister_agreementswindow_cancel: function(n) {
                    e.trackEvent("click", "button_click", "协议弹窗取消", (0,
                    o.tq)() ? "webRegister_inputEmail_agreementswindow_cancel" : "webRegister_agreementswindow_cancel", n)
                }
            };
            return {
                tracks: n
            }
        }
          , d = function() {
            var e = (0,
            r.P)()
              , n = {
                psnLogin_invalid_account_view: function() {
                    e.trackEvent("page", "view", "未绑定aid弹窗曝光", "psnLogin_invalid_account_view")
                },
                psnLogin_invalid_account_change: function() {
                    e.trackEvent("click", "click", "切换登录方式按钮点击", "psnLogin_invalid_account_change")
                },
                psnLogin_invalid_account_close: function() {
                    e.trackEvent("click", "click", "关闭按钮点击", "psnLogin_invalid_account_close")
                },
                SteamLogin_invalid_account_view: function() {
                    e.trackEvent("page", "view", "未绑定aid弹窗曝光", "SteamLogin_invalid_account_view")
                },
                SteamLogin_invalid_account_change: function() {
                    e.trackEvent("click", "click", "切换登录方式按钮点击", "SteamLogin_invalid_account_change")
                },
                SteamLogin_invalid_account_close: function() {
                    e.trackEvent("click", "click", "关闭按钮点击", "SteamLogin_invalid_account_close")
                },
                webLogin_nonExclusiveSteamLogin: function(n) {
                    e.trackEvent("click", "click", "Steam登录入口", "webLogin_nonExclusiveSteamLogin", n)
                },
                webLogin_psnLogin: function(n) {
                    e.trackEvent("click", "click", "PSN登录入口", "webLogin_psnLogin", n)
                },
                webLogin_googleLogin: function(n) {
                    e.trackEvent("click", "click", "Google登录入口", "webLogin_googleLogin", n)
                },
                webLogin_appleLogin: function(n) {
                    e.trackEvent("click", "click", "Apple登录入口", "webLogin_appleLogin", n)
                },
                webLogin_facebookLogin: function(n) {
                    e.trackEvent("click", "click", "Fcebook登录入口", "webLogin_facebookLogin", n)
                },
                webLogin_twitterLogin: function(n) {
                    e.trackEvent("click", "click", "Twitter登录入口", "webLogin_twitterLogin", n)
                },
                webLogin_googleLogin_success: function(n) {
                    e.trackEvent("click", "click", "Google登录成功", "webLogin_googleLogin_success", n)
                },
                webLogin_appleLogin_success: function(n) {
                    e.trackEvent("click", "click", "Apple登录成功", "webLogin_appleLogin_success", n)
                },
                webLogin_facebookLogin_success: function(n) {
                    e.trackEvent("click", "click", "Facebook登录成功", "webLogin_facebookLogin_success", n)
                },
                webLogin_twitterLogin_success: function(n) {
                    e.trackEvent("click", "click", "Twitter登录成功", "webLogin_twitterLogin_success", n)
                },
                webLogin_psnLoginSuccess: function(n) {
                    e.trackEvent("曝光", "explore", "PSN登录成功", "webLogin_psnLoginSuccess", n)
                },
                webLogin_nonExclusiveSteamLoginSuccess: function(n) {
                    e.trackEvent("曝光", "explore", "Steam登录成功", "webLogin_nonExclusiveSteamLogin_success", n)
                }
            };
            return {
                tracks: n
            }
        }
          , f = function() {
            var e = (0,
            r.P)()
              , n = {
                verify_view: function(n) {
                    e.trackEvent("曝光", "view", "风险拦截弹窗", "verify_view", n)
                },
                verify_cancel: function(n) {
                    e.trackEvent("click", "click", "取消", "verify_cancel", n)
                },
                verify_confirm: function(n) {
                    e.trackEvent("click", "click", "确定/重置密码", "verify_confirm", n)
                }
            };
            return {
                tracks: n
            }
        }
          , p = function() {
            var e = (0,
            r.P)()
              , n = {
                verify_confirm: function(n) {
                    e.trackEvent("click", "button_click", "身份验证-三方验证下一步", "thirdpartyVerify_next", n)
                },
                verify_success: function(n) {
                    e.trackEvent("曝光", "explore", "身份验证-三方验证成功", "thirdpartyVerify_success", n)
                },
                verify_fail: function(n) {
                    e.trackEvent("曝光", "explore", "身份验证-三方验证失败", "thirdpartyVerify_fail", n)
                }
            }
              , t = {
                common: {
                    ticketInvalid_view: function(n) {
                        e.trackEvent("曝光", "view", "ticket失效弹窗", "ticketInvalid_view", n)
                    },
                    ticketInvalid_confirm: function(n) {
                        e.trackEvent("click", "button_click", "确定", "ticketInvalid_confirm", n)
                    },
                    selectVerify_view: function(n) {
                        e.trackEvent("Page", "view", "验证方式选择页", "selectVerify_view", n)
                    },
                    selectVerify_mode: function(n) {
                        e.trackEvent("曝光", "explore", "呈现某验证方式", "selectVerify_mode", n)
                    },
                    selectVerify_select: function(n) {
                        e.trackEvent("click", "button_click", "选择某验证方式", "selectVerify_select", n)
                    }
                },
                thirdparty: {
                    thirdpartyVerify_view: function(n) {
                        e.trackEvent("Page", "view", "身份验证-三方验证展示", "thirdpartyVerify_view", n)
                    }
                },
                [a.xN.UNKNOWN]: {
                    verify_view: function(e) {},
                    verify_getCode: function(e) {},
                    verify_inputCode: function(e) {},
                    verify_confirm: function(e) {},
                    verify_otherVerify: function(e) {},
                    verify_success: function(e) {}
                },
                [a.xN.EMAIL]: {
                    verify_view: function(n) {
                        e.trackEvent("Page", "view", "邮箱验证页", "emailVerify_view", n)
                    },
                    verify_getCode: function(n) {
                        e.trackEvent("click", "button_click", "获取验证码", "emailVerify_getCode", n)
                    },
                    verify_inputCode: function(n) {
                        e.trackEvent("click", "input_click", "验证码输入框", "emailVerify_inputCode", n)
                    },
                    verify_confirm: function(n) {
                        e.trackEvent("click", "button_click", "确认/下一步(或自动提交)", "emailVerify_confirm", n)
                    },
                    verify_otherVerify: function(n) {
                        e.trackEvent("click", "click", "其他方式验证", "emailVerify_otherVerify", n)
                    },
                    verify_success: function(n) {
                        e.trackEvent("曝光", "explore", "邮箱验证通过", "emailVerify_success", n)
                    }
                },
                [a.xN.MOBILE]: {
                    verify_view: function(n) {
                        e.trackEvent("Page", "view", "短信验证页", "phoneVerify_view", n)
                    },
                    verify_getCode: function(n) {
                        e.trackEvent("click", "button_click", "获取验证码", "phoneVerify_getCode", n)
                    },
                    verify_inputCode: function(n) {
                        e.trackEvent("click", "input_click", "验证码输入框", "phoneVerify_inputCode", n)
                    },
                    verify_confirm: function(n) {
                        e.trackEvent("click", "button_click", "确认/下一步(或自动提交)", "phoneVerify_confirm", n)
                    },
                    verify_otherVerify: function(n) {
                        e.trackEvent("click", "click", "其他方式验证", "phoneVerify_otherVerify", n)
                    },
                    verify_success: function(n) {
                        e.trackEvent("曝光", "explore", "短信验证通过", "phoneVerify_success", n)
                    }
                },
                [a.xN.PASSWORD]: {
                    verify_view: function(n) {
                        e.trackEvent("Page", "view", "密码验证页", "pwdVerify_view", n)
                    },
                    verify_getCode: function(e) {},
                    verify_inputCode: function(n) {
                        e.trackEvent("click", "input_click", "密码输入框", "pwdVerify_inputCode", n)
                    },
                    verify_confirm: function(n) {
                        e.trackEvent("click", "button_click", "确认/下一步", "pwdVerify_confirm", n)
                    },
                    verify_otherVerify: function(n) {
                        e.trackEvent("click", "click", "其他方式验证", "pwdVerify_otherVerify", n)
                    },
                    verify_success: function(n) {
                        e.trackEvent("曝光", "explore", "密码验证通过", "pwdVerify_success", n)
                    }
                },
                [a.xN.GOOGLE]: (0,
                i.Z)({}, n),
                [a.xN.FACEBOOK]: (0,
                i.Z)({}, n),
                [a.xN.APPLE]: (0,
                i.Z)({}, n),
                [a.xN.TWITTER]: (0,
                i.Z)({}, n),
                [a.xN.GAME_CENTER]: (0,
                i.Z)({}, n)
            };
            return {
                tracks: t
            }
        }
          , _ = function() {
            var e = (0,
            r.P)()
              , n = {
                pwdNull_view: function() {
                    e.trackEvent("曝光", "view", "未设置密码弹窗", "pwdNull_view")
                },
                pwdNull_confirm: function() {
                    e.trackEvent("click", "click", "取消", "pwdNull_confirm")
                },
                pwdNull_findPwd: function() {
                    e.trackEvent("click", "click", "忘记密码", "pwdNull_findPwd")
                },
                pwdError_view: function() {
                    e.trackEvent("曝光", "view", "密码错误弹窗", "pwdError_view")
                },
                pwdError_confirm: function() {
                    e.trackEvent("click", "click", "确定", "pwdError_confirm")
                },
                pwdError_findPwd: function() {
                    e.trackEvent("click", "click", "忘记密码", "pwdError_findPwd")
                },
                webLogin_setPwd: function() {
                    e.trackEvent("click", "click", "设置密码", "webLogin_setPwd")
                }
            };
            return {
                tracks: n
            }
        }
          , v = function() {
            var e = (0,
            r.P)()
              , n = {
                captcha_init: function(n) {
                    e.trackEvent("曝光", "explore", "验证码初始化", "captcha_init", n)
                },
                captcha_pv: function(n) {
                    e.trackEvent("曝光", "explore", "验证码加载完成", "captcha_pv", n)
                },
                captcha_verify: function(n) {
                    e.trackEvent("曝光", "explore", "验证码验证完成", "captcha_verify", n)
                }
            };
            return {
                tracks: n
            }
        }
          , m = function(e) {
            var n = (0,
            c.N)()
              , t = n.tracks
              , r = (0,
            u.N)()
              , o = r.tracks;
            e.name === a.x4.BIND_EMAIL_SET_ACC ? t.otherLogin_bindEmail_skip() : e.name === a.x4.BIND_EMAIL_SET_PWD ? t.otherLogin_setPwd_skip() : e.name === a.x4.BIND_THIRD && o.otherLogin_cancel()
        }
          , g = function(e) {
            var n = (0,
            c.N)()
              , t = n.tracks;
            e.name === a.x4.BIND_EMAIL_SET_ACC ? t.otherLogin_bindEmail_skip() : e.name === a.x4.BIND_EMAIL_SET_PWD && t.otherLogin_setPwd_skip()
        }
    },
    51586: function(e, n, t) {
        "use strict";
        t.d(n, {
            N: function() {
                return o
            }
        });
        var r = t(64660)
          , o = function() {
            var e = (0,
            r.P)()
              , n = {
                otherLogin_bindEmail_inputEmail: function() {
                    e.trackEvent("click", "button_click", "邮箱输入框", "otherLogin_bindEmail_inputEmail")
                },
                otherLogin_bindEmail_inputCode: function() {
                    e.trackEvent("click", "input_click", "验证码输入框", "otherLogin_bindEmail_inputCode")
                },
                otherLogin_bindEmail_getCode: function() {
                    e.trackEvent("click", "button_click", "获取验证码", "otherLogin_bindEmail_getCode")
                },
                otherLogin_bindEmail_next: function() {
                    e.trackEvent("click", "button_click", "下一步", "otherLogin_bindEmail_next")
                },
                otherLogin_bindEmail_Success: function() {
                    e.trackEvent("曝光", "explore", "绑定成功", "otherLogin_bindEmail_Success")
                },
                otherLogin_bindEmail_skip: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.trackEvent("click", "button_click", "跳过", "otherLogin_bindEmail_skip", n)
                },
                otherLogin_linkEmail_view: function(n) {
                    e.trackEvent("曝光", "explore", "直接绑定邮箱页面展示", "otherLogin_linkEmail_view", n)
                },
                otherLogin_linkEmail_link: function(n) {
                    e.trackEvent("click", "button_click", "直接绑定邮箱-关联", "otherLogin_linkEmail_link", n)
                },
                otherLogin_linkEmail_linkAnother: function(n) {
                    e.trackEvent("click", "button_click", "直接绑定邮箱-关联其他", "otherLogin_linkEmail_linkAnother", n)
                },
                otherLogin_linkEmail_linkCurrentThirdparty: function(n) {
                    e.trackEvent("click", "button_click", "直接绑定邮箱-关联当前三方邮箱", "otherLogin_linkEmail_linkCurrentThirdparty", n)
                },
                otherLogin_linkEmail_success: function(n) {
                    e.trackEvent("曝光", "explore", "直接绑定邮箱-成功", "otherLogin_linkEmail_success", n)
                },
                otherLogin_linkEmail_fail: function(n) {
                    e.trackEvent("曝光", "explore", "直接绑定邮箱-失败", "otherLogin_linkEmail_fail", n)
                },
                otherLogin_setPwd_inputPwd: function() {
                    e.trackEvent("click", "input_click", "输入密码框", "otherLogin_setPwd_inputPwd")
                },
                otherLogin_setPwd_confirmPwd: function() {
                    e.trackEvent("click", "input_click", "二次输入密码框", "otherLogin_setPwd_confirmPwd")
                },
                otherLogin_setPwd_confirm: function() {
                    e.trackEvent("click", "button_click", "确认按钮", "otherLogin_setPwd_confirm")
                },
                otherLogin_setPwd_skip: function() {
                    e.trackEvent("click", "click", "跳过", "otherLogin_setPwd_skip")
                },
                otherLogin_setPwd_Success: function() {
                    e.trackEvent("曝光", "explore", "密码设置成功", "otherLogin_setPwd_Success")
                }
            };
            return {
                tracks: n
            }
        }
    },
    24549: function(e, n, t) {
        "use strict";
        t.d(n, {
            N: function() {
                return o
            }
        });
        var r = t(64660)
          , o = function() {
            var e = (0,
            r.P)()
              , n = {
                otherLogin_linkOtherAccount_inputEmail: function(n) {
                    return e.trackEvent("click", "input_click", "输入邮箱", "otherLogin_linkOtherAccount_inputEmail", n)
                },
                otherLogin_linkOtherAccount_inputPwd: function(n) {
                    return e.trackEvent("click", "input_click", "输入密码", "otherLogin_linkOtherAccount_inputPwd", n)
                },
                otherLogin_createAccount_inputPwd: function(n) {
                    e.trackEvent("click", "input_click", "输入密码", "otherLogin_createAccount_inputPwd", n)
                },
                otherLogin_createAccount_confirmPwd: function(n) {
                    e.trackEvent("click", "input_click", "输入确认密码", "otherLogin_createAccount_confirmPwd", n)
                },
                otherLogin_linkAccount_inputPwd: function(n) {
                    e.trackEvent("click", "input_click", "输入密码", "otherLogin_linkAccount_inputPwd", n)
                },
                otherLogin_linkOtherAccount_continue: function(n) {
                    e.trackEvent("click", "button_click", "继续按钮", "otherLogin_linkOtherAccount_continue", n)
                },
                otherLogin_linkAccount_continue: function(n) {
                    e.trackEvent("click", "button_click", "继续按钮", "otherLogin_linkAccount_continue", n)
                },
                otherLogin_createAccount_continue: function(n) {
                    e.trackEvent("click", "button_click", "继续按钮", "otherLogin_createAccount_continue", n)
                },
                otherLogin_linkOtherAccount_useCurrent: function(n) {
                    e.trackEvent("click", "button_click", "使用当前账号", "otherLogin_linkOtherAccount_useCurrent", n)
                },
                otherLogin_linkAccount_linkAnother: function(n) {
                    e.trackEvent("click", "button_click", "关联其他账号", "otherLogin_linkAccount_linkAnother", n)
                },
                otherLogin_createAccount_linkAnother: function(n) {
                    e.trackEvent("click", "button_click", "关联其他账号", "otherLogin_createAccount_linkAnother", n)
                },
                otherLogin_cancel: function() {
                    e.trackEvent("click", "button_click", "关联三方账号页面取消", "otherLogin_cancel")
                },
                otherLogin_createAccount_skip: function(n) {
                    e.trackEvent("click", "button_click", "跳过", "otherLogin_createAccount_skip", n)
                },
                otherLogin_linkAccount_skip: function(n) {
                    e.trackEvent("click", "button_click", "跳过", "otherLogin_linkAccount_skip", n)
                },
                otherLogin_skip_view: function(n) {
                    e.trackEvent("click", "button_click", "直接注册弹窗-展示", "otherLogin_skip_view", n)
                },
                otherLogin_skip_confirm: function(n) {
                    e.trackEvent("click", "button_click", "直接注册弹窗-确认", "otherLogin_skip_confirm", n)
                },
                otherLogin_skip_cancel: function(n) {
                    e.trackEvent("click", "button_click", "直接注册弹窗-取消", "otherLogin_skip_cancel", n)
                },
                otherLogin_createAccount_view: function(n) {
                    e.trackEvent("page", "view", "直接注册页面展示", "otherLogin_createAccount_view", n)
                },
                otherLogin_linkAccount_view: function(n) {
                    e.trackEvent("page", "view", "关联已有账号页面展示", "otherLogin_linkAccount_view", n)
                },
                otherLogin_linkOtherAccount_view: function(n) {
                    e.trackEvent("page", "view", "关联其他账号页面展示", "otherLogin_linkOtherAccount_view", n)
                }
            };
            return {
                tracks: n
            }
        }
    },
    38101: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return f
            },
            x: function() {
                return d
            }
        });
        var r = t(70769)
          , o = t(62141)
          , i = t(47796)
          , a = (t(99944),
        t(23273))
          , c = a.ZP
          , u = t(6010)
          , s = t(67977)
          , l = t(98518)
          , d = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, i, a, d, f, p, _, v, m, g, h;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            a = (0,
                            r.a)(),
                            d = (0,
                            u.G)(),
                            f = d.showLoading,
                            p = d.hideLoading,
                            _ = a.theme.split("-"),
                            v = (0,
                            o.Z)(_, 2),
                            m = v[0],
                            g = v[1],
                            h = "production",
                            c.init({
                                innerBoxConfig: !0,
                                inner: !0,
                                appId: a.app_id,
                                gameBiz: a.game_biz,
                                lang: a.lang,
                                environment: h,
                                theme: g,
                                colorMode: m,
                                tokenType: a.token_type,
                                loading: {
                                    show: f,
                                    hide: p
                                },
                                clientType: a.client_type,
                                appearance: a.appearance,
                                syncLoginStatus: !1,
                                loadTimeout: Number(null === (t = (0,
                                s.$7)(l.Z1.COOKIE)(l.BU.LOAD_TIMEOUT)) || void 0 === t ? void 0 : t.value),
                                extraTrackingInfo: (0,
                                s.$7)(l.Z1.COOKIE)(l.BU.TRACKING_MAP) || {},
                                optionalAgreement: (null === (i = (0,
                                s.$7)(l.Z1.COOKIE)(l.BU.OPTIONAL_AGREEMENT)) || void 0 === i ? void 0 : i.content) || [],
                                extraSdkInfo: n
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , f = c
    },
    2140: function(e, n, t) {
        "use strict";
        t.d(n, {
            CF: function() {
                return d
            },
            Q1: function() {
                return v
            },
            a5: function() {
                return E
            },
            bG: function() {
                return h
            },
            dN: function() {
                return _
            },
            k1: function() {
                return y
            },
            m8: function() {
                return g
            },
            mS: function() {
                return m
            },
            oV: function() {
                return p
            }
        });
        var r = t(70769)
          , o = t(17372)
          , i = (t(7704),
        t(81574))
          , a = (t(53861),
        t(7061),
        t(95151),
        t(8220),
        t(5165),
        t(71935),
        t(62402),
        t(50142),
        t(29617),
        t(98518))
          , c = t(20837)
          , u = t.n(c)
          , s = t(36454)
          , l = t(84629)
          , d = function(e) {
            var n = (0,
            r.a)()
              , t = n.ux_mode;
            (0,
            i.Z)({
                message: e,
                position: (0,
                o.tq)() && !(0,
                o.zd)() && t === a.JJ.REDIRECT ? "bottom" : "middle"
            })
        }
          , f = function() {
            var e = (0,
            r.a)()
              , n = e.ux_mode;
            return (0,
            o.zd)() && n !== a.JJ.REDIRECT ? window.parent : window
        }
          , p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = u().parse(window.location.search, {
                ignoreQueryPrefix: !0
            });
            delete n.client_type,
            n.ux_mode = a.JJ.REDIRECT;
            var t = u().stringify(n)
              , r = s.eF.replace("hoyoverse.com", (0,
            l.K)())
              , o = `${r}/index.html?${t}&account=${e}${a.Lb[a.q5.FORGOT_PASSWORD]}`;
            return o
        };
        function _() {
            var e = (0,
            r.a)()
              , n = e.client_type
              , t = e.callback_type
              , i = e.ux_mode;
            return i !== a.JJ.POPUP && (t !== a.l4.WEB && (0,
            o.YR)(n))
        }
        function v() {
            var e = (0,
            r.a)()
              , n = e.iframe_level
              , t = e.client_type;
            return 1 === n && (0,
            o.YR)(t)
        }
        function m() {
            var e = (0,
            r.a)()
              , n = e.theme;
            return null === n || void 0 === n ? void 0 : n.includes("hoyolab")
        }
        function g() {
            var e = (0,
            r.a)()
              , n = e.ux_mode;
            return n === a.JJ.POPUP
        }
        function h(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (e) {
                var t = f();
                if (t) {
                    var i = (0,
                    r.a)()
                      , c = i.st
                      , u = i.ux_mode;
                    try {
                        var s = new URL(c)
                            , l = s.origin
                            , d = new URL(window.business_url)
                            , p = d.origin;
                        n && t.parent && t.parent !== t && u !== a.JJ.POPUP ? t.parent.postMessage(e, p) : t.postMessage(e, l)
                    } catch (_) {
                        console.error(_)
                    }
                }
            }
        }
        var E = function() {
            var e = document.querySelector(".hyv-web-login-dialog");
            e && (e.style.display = "none")
        }
          , y = function() {
            var e = document.querySelector(".hyv-web-login-dialog");
            e && (e.style.display = "block")
        }
    },
    56026: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return P
            }
        });
        var r = t(70769)
          , o = t(17372)
          , i = t(15559)
          , a = t(22843)
          , c = t(62141)
          , u = t(47796)
          , s = (t(99944),
        t(71935),
        t(62402),
        t(8220),
        t(5165),
        t(53861),
        t(95151),
        t(63785),
        t(76999),
        t(51546),
        t(59854))
          , l = t(40189)
          , d = t(2140)
          , f = t(22213)
          , p = t(17526)
          , _ = t(98518)
          , v = t(38101)
          , m = t(34782)
          , g = t.n(m)
          , h = t(73304)
          , E = t.n(h)
          , y = t(2087)
          , I = t.n(y)
          , k = t(36454)
          , w = t(95038)
          , b = t(67977)
          , A = t(74352)
          , S = t(21393)
          , T = t(6163)
          , N = "/combo"
          , R = function() {
            return (0,
            T.U2)(`${N}/box/api/config/${_.oU}/${_.Pt}`, {
                baseURL: k.Uk,
                params: {
                    type: "common"
                },
                enableLrsag: !1,
                httpH5log: !1,
                withCredentials: !1,
                loading: !1,
                errorToast: !1
            })
        }
          , O = t(84138)
          , C = function() {
            var e = (0,
            u.Z)(regeneratorRuntime.mark((function e() {
                var n, t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0,
                            (0,
                            O._q)()) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            R();
                        case 5:
                            n = e.sent,
                            t = n.vals,
                            (0,
                            O.Ut)(t),
                            e.next = 12;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e["catch"](0);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 10]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        A.Z.setPublicKey(k.hu);
        var L = function() {
            var e = (0,
            u.Z)(regeneratorRuntime.mark((function e(n, t) {
                var u, m, h, y, A, T, N, R, O, L, P, x, D, B, U, Z, G, M, F, K;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (u = (0,
                            r.a)(),
                            console.log("VUE_APP_ENV:", "production"),
                            console.log("query", u),
                            console.log("lrsag value", p.Z.get("lrsag")),
                            m = u.lang,
                            h = "production",
                            !(0,
                            d.dN)()) {
                                e.next = 16;
                                break
                            }
                            return y = (0,
                            S.Ph)().catch((function() {
                                (0,
                                b.b7)(_.Z1.COOKIE)(_.BU.TRACKING_MAP, {})
                            }
                            )),
                            e.next = 10,
                            Promise.all([y]);
                        case 10:
                            A = e.sent,
                            T = (0,
                            c.Z)(A, 1),
                            N = T[0],
                            0 === (null === N || void 0 === N ? void 0 : N.retcode) && (0,
                            b.b7)(_.Z1.COOKIE)(_.BU.TRACKING_MAP, N.data.extra_info),
                            e.next = 17;
                            break;
                        case 16:
                            (0,
                            b.X1)(_.Z1.COOKIE, _.Z1.SESSION_STORAGE, [_.BU.LIFECYCLE_ID]);
                        case 17:
                            return e.next = 19,
                            (0,
                            w.D)();
                        case 19:
                            return R = e.sent,
                            (0,
                            o.tq)() && window.location.href.includes("/index.html") && (window.location.href = window.location.href.replace("/index.html", "/mobile.html")),
                            !(0,
                            o.tq)() && window.location.href.includes("/mobile.html") && (window.location.href = window.location.href.replace("/mobile.html", "/index.html")),
                            u.appearance && (O = (0,
                            o.A3)(u.appearance),
                            Object.keys(O).forEach((function(e) {
                                window.document.documentElement.setAttribute(e, O[e])
                            }
                            ))),
                            L = u.theme.split("-"),
                            P = (0,
                            o.Fg)(null === L || void 0 === L ? void 0 : L[0]),
                            x = (0,
                            o.gh)(null === L || void 0 === L ? void 0 : L[1]),
                            [P, x].forEach((function(e) {
                                return document.body.classList.add(`hyv-${e}`)
                            }
                            )),
                            e.prev = 27,
                            C(),
                            D = (0,
                            a.O)({
                                lang: m,
                                env: h
                            }),
                            e.next = 32,
                            (0,
                            v.x)(R);
                        case 32:
                            return B = e.sent,
                            U = g().init({
                                appId: k.c3.appId,
                                appKey: k.c3.appKey,
                                isTest: k.c3.isTest,
                                uid: E().getDeviceFp(),
                                experimentListConfig: Object.values(k.c3.experimentScheme)
                            }),
                            e.next = 36,
                            Promise.allSettled([D, B, U.catch((function(e) {
                                return e
                            }
                            ))]);
                        case 36:
                            Z = (0,
                            i.ri)(t),
                            Z.use(n).component("circle-check-filled", s.Z).component("warning", l.Z).mount("#app"),
                            G = (0,
                            a.J)(),
                            M = G.t,
                            F = 1e3 * parseInt(M("common_service_not_available_start"), 10),
                            K = 1e3 * parseInt(M("common_service_not_available_end"), 10),
                            F < Date.now() && Date.now() < K && I().show({
                                text: M({
                                    key: "common_service_not_available_banner",
                                    data: {
                                        start_timestamp: (0,
                                        o.jQ)(F),
                                        end_timestamp: (0,
                                        o.jQ)(K)
                                    }
                                })
                            }),
                            e.next = 47;
                            break;
                        case 44:
                            e.prev = 44,
                            e.t0 = e["catch"](27),
                            (0,
                            d.dN)() ? console.error(e.t0) : (0,
                            d.bG)({
                                type: f.Cs.ERROR,
                                payload: {
                                    retcode: _.iX.UNKNOWN,
                                    message: e.t0.message
                                }
                            });
                        case 47:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[27, 44]])
            }
            )));
            return function(n, t) {
                return e.apply(this, arguments)
            }
        }()
          , P = L
    },
    43076: function(e, n, t) {
        "use strict";
        t.d(n, {
            Ey: function() {
                return o
            },
            Ie: function() {
                return c
            },
            RS: function() {
                return i
            },
            vV: function() {
                return a
            }
        });
        var r = t(30182);
        t(75428),
        t(71935),
        t(78766),
        t(80056),
        t(15178);
        function o(e, n) {
            var t = (0,
            r.f3)(e, n);
            if (!t)
                throw new Error(`Could not resolve ${Object(e).toString()}`);
            return t
        }
        var i = Symbol("updatePageKey")
          , a = Symbol("popRoutesKey")
          , c = Symbol("updateClosable")
    },
    23273: function(e, n, t) {
        "use strict";
        t.d(n, {
            ZP: function() {
                return nr
            },
            jJ: function() {
                return er
            }
        });
        var r = t(70242)
          , o = t(57111)
          , i = t(47796)
          , a = (t(99944),
        t(71935),
        t(63785),
        t(78766),
        t(67262))
          , c = t.n(a)
          , u = t(78883)
          , s = t.n(u)
          , l = t(73304)
          , d = t.n(l)
          , f = (t(53861),
        t(30359),
        t(59568),
        t(22213))
          , p = t(17372)
          , _ = t(87200)
          , v = (t(95151),
        t(98288),
        t(98970),
        t(84629))
          , m = t(70329)
          , g = t(86656)
          , h = t(33181)
          , E = (t(86937),
        t(53974))
          , y = t.n(E)
          , I = t(18472)
          , k = t.n(I)
          , w = t(6171)
          , b = t.n(w)
          , A = t(98518)
          , S = t(74420)
          , T = t(45714)
          , N = {
            baseUrl: ""
        }
          , R = function(e, n) {
            (0,
            T.Z)(e);
            var t = n.host
              , r = `${t}${A.Ms}`;
            N.baseUrl = r
        }
          , O = function() {
            return N
        }
          , C = {
            baseUrl: "",
            passwordLoginUrl: "",
            securityVerificationUrl: ""
        }
          , L = function(e, n) {
            (0,
            T.Z)(e);
            var t = n.host
              , r = `${t}${A["do"]}`;
            C.baseUrl = r
        }
          , P = function() {
            return C
        }
          , x = t(6010)
          , D = t(85299)
          , B = t.n(D)
          , U = t(67977)
          , Z = {
            host: "",
            appId: "",
            loadTimeout: 0,
            colorMode: "light",
            theme: "default",
            gameBiz: "account_os",
            communityInit: !1,
            communityBiz: "",
            syncLoginStatus: void 0,
            query: {},
            lang: "en-us",
            environment: "test",
            tokenType: A.iv.TokenTypeCookieToken,
            loading: {
                show: function() {},
                hide: function() {}
            },
            inner: !1,
            extraTrackingInfo: {},
            extraSdkInfo: {},
            lifecycleId: "",
            hideLogo: 0,
            innerBoxConfig: !1
        }
          , G = {}
          , M = function(e) {
            var n = e.environment
              , t = e.tokenType
              , o = e.clientType
              , i = e.appId
              , a = e.lang
              , c = e.appearance
              , u = e.gameBiz
              , s = e.colorMode
              , l = e.theme
              , d = e.syncLoginStatus
              , _ = e.autotest
              , m = e.communityInit
              , g = e.communityBiz
              , h = e.loading
              , E = e.optionalAgreement
              , y = e.extraTrackingInfo
              , I = e.extraSdkInfo
              , k = e.inner
              , w = e.loadTimeout
              , b = e.hideLogo
              , T = e.innerBoxConfig
              , N = (0,
            x.G)()
              , O = N.showLoading
              , C = N.hideLoading;
            Z.loading = {
                show: O,
                hide: C
            },
            G = e;
            var P = {};
            c && Object.keys(c).forEach((function(e) {
                P[`${f.Nd}${f.um[e]}`] = c[e]
            }
            )),
            _ && (P.autotest = _);
            var D = (0,
            r.Z)({
                st: window.location.href,
                token_type: t,
                client_type: o,
                app_id: i,
                game_biz: u,
                lang: a,
                theme: `${s}-${l}`,
                hide_logo: b ? 1 : 0
            }, P)
              , M = (0,
            U.$7)(A.Z1.COOKIE)(A.BU.OPTIONAL_AGREEMENT);
            E && !B()(null === M || void 0 === M ? void 0 : M.content, E) && (0,
            U.b7)(A.Z1.COOKIE)(A.BU.OPTIONAL_AGREEMENT, {
                content: E
            }),
            (0,
            U.b7)(A.Z1.COOKIE)(A.BU.LOAD_TIMEOUT, {
                value: w
            });
            var F = S.Z[n].LOGIN_PLATFORM_FE_BASE
              , K = F.replace("hoyoverse.com", (0,
            v.K)());
            Z.host = (0,
            p.tj)(K, !1) ? K : F,
            Z.lang = a,
            Z.loadTimeout = w,
            Z.query = D,
            Z.environment = n,
            Z.communityInit = null !== m && void 0 !== m ? m : Z.communityInit,
            Z.communityBiz = null !== g && void 0 !== g ? g : Z.communityBiz,
            Z.syncLoginStatus = d,
            Z.extraTrackingInfo = null !== y && void 0 !== y ? y : Z.extraTrackingInfo,
            Z.extraSdkInfo = null !== I && void 0 !== I ? I : Z.extraSdkInfo,
            Z.inner = null !== k && void 0 !== k ? k : Z.inner,
            h && "function" === typeof h.show && "function" === typeof h.hide && (Z.loading = h),
            Z.innerBoxConfig = null !== T && void 0 !== T ? T : Z.innerBoxConfig,
            R({}, Z),
            L({}, Z)
        }
          , F = function() {
            return (0,
            r.Z)((0,
            r.Z)({}, Z), {}, {
                mobile: P(),
                web: O(),
                getCurrentInitOpts: function() {
                    return G
                }
            })
        }
          , K = t(66423)
          , Y = "miHoYoAnalysis"
          , V = function() {
            function e() {
                (0,
                m.Z)(this, e),
                (0,
                h.Z)(this, "loadPromise", null),
                (0,
                h.Z)(this, "initPromise", null),
                (0,
                h.Z)(this, "extraTrackingInfo", {})
            }
            return (0,
            g.Z)(e, [{
                key: "load",
                value: function() {
                    return this.loadPromise = new Promise((function(e, n) {
                        var t = F();
                        t.environment;
                        if ("undefined" === typeof window[Y]) {
                            var r = document.querySelector("script[src*='/analysis/']");
                            r || (r = document.createElement("script"),
                            r.src = "https://webstatic.hoyoverse.com/dora/biz/analysis/v2/main.js",
                            document.head.appendChild(r)),
                            r.addEventListener("load", (function() {
                                e(window[Y])
                            }
                            )),
                            r.addEventListener("error", (function(e) {
                                n(e)
                            }
                            ))
                        } else
                            e(window[Y])
                    }
                    )),
                    this.loadPromise
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    if (!this.initPromise) {
                        F();
                        this.initPromise = (0,
                        i.Z)(regeneratorRuntime.mark((function n() {
                            var t, o, i, a, c, u, l, f, _, v, m, g, h, E;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return t = F(),
                                        o = t.environment,
                                        i = t.query,
                                        a = t.extraTrackingInfo,
                                        c = t.syncLoginStatus,
                                        u = t.inner,
                                        l = t.extraSdkInfo,
                                        n.next = 3,
                                        e.load();
                                    case 3:
                                        return f = n.sent,
                                        _ = i.app_id,
                                        v = i.token_type,
                                        m = i.theme,
                                        g = i.game_biz,
                                        h = "hoyoverse-account-sdk",
                                        e.setExtraTrackingInfo(a, !0, u),
                                        E = f.init({
                                            appId: "192",
                                            env: o === A.Vi.production ? A.Vi.production : A.Vi.test,
                                            type: "tool",
                                            useBeacon: !0,
                                            isSea: !0,
                                            autoTrackPageview: !1,
                                            setMiaToVue: !1,
                                            pagename: h,
                                            pageExtrainfo: (0,
                                            r.Z)((0,
                                            r.Z)({
                                                device_fp: d().getDeviceFp(),
                                                token_type: v,
                                                app_id: _,
                                                game_biz: g,
                                                client_type: (0,
                                                p.tq)() ? A.Bh.WAP : A.Bh.WEB,
                                                device_id: s().getUuid(),
                                                sdk_version: K.J,
                                                business_url: window.location.href,
                                                theme: m,
                                                sync_login_status: c,
                                                environment: o
                                            }, l), a)
                                        }),
                                        E.pageurl = h,
                                        n.abrupt("return", E);
                                    case 10:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        )))()
                    }
                    return this.initPromise
                }
            }, {
                key: "setExtraTrackingInfo",
                value: function(e, n, t) {
                    var o = F();
                    o.mobile,
                    o.web;
                    this.extraTrackingInfo = !t && n ? e : (0,
                    r.Z)((0,
                    r.Z)({}, this.extraTrackingInfo), e),
                    (0,
                    U.b7)(A.Z1.COOKIE)(A.BU.TRACKING_MAP, this.extraTrackingInfo)
                }
            }, {
                key: "trackEvent",
                value: function() {
                    var e = (0,
                    i.Z)(regeneratorRuntime.mark((function e() {
                        var n, t, o, i, a, c, u, s, l, d, f, p = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    for (n = p.length,
                                    t = new Array(n),
                                    o = 0; o < n; o++)
                                        t[o] = p[o];
                                    return i = t[0],
                                    a = t[1],
                                    c = t[2],
                                    u = t[3],
                                    s = t[4],
                                    l = void 0 === s ? {} : s,
                                    e.next = 4,
                                    this.init();
                                case 4:
                                    d = e.sent,
                                    f = (0,
                                    r.Z)((0,
                                    r.Z)({}, l), this.extraTrackingInfo),
                                    d.trackEvent(i, a, c, u, f);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function n() {
                        return e.apply(this, arguments)
                    }
                    return n
                }()
            }]),
            e
        }()
          , $ = new V
          , J = {
            trackResultAccess(e) {
                var n = []
                  , t = k()((function() {
                    if (n.length) {
                        var t = y()(n).join(",");
                        n = [],
                        $.trackEvent("result", "access", e, t)
                    }
                }
                ), 5e3, {
                    leading: !1,
                    trailing: !0
                })
                  , r = function e(r) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    Array.isArray(r) ? r.forEach((function(n) {
                        return e(n, o)
                    }
                    )) : b()(r) && Object.keys(r).forEach((function(i) {
                        var a = r[i];
                        e(a, `${o}${i}.`),
                        Object.defineProperty(r, i, {
                            enumerable: !0,
                            configurable: !0,
                            get() {
                                return n.push(`${o}${i}`),
                                t(),
                                a
                            },
                            set(e) {
                                a = e
                            }
                        })
                    }
                    ))
                };
                return r
            },
            init_call(e) {
                $.trackEvent("init", "call", "", (0,
                r.Z)({}, e))
            },
            sdk_iframe_loaded(e) {
                $.trackEvent("iframe_loaded", "call", "", e)
            },
            getFp_call() {
                $.trackEvent("getFp", "call", "")
            },
            passport_call_get_config() {
                $.trackEvent("get_config", "call")
            },
            passport_call_check_token(e) {
                $.trackEvent("check_token", "call", "", e)
            },
            passport_call_show_account_flow_success() {
                $.trackEvent("show_account_flow_success", "call", "")
            },
            passport_call_show_account_flow(e) {
                $.trackEvent("show_account_flow", "call", "", e)
            },
            passport_call_find_password(e) {
                $.trackEvent("find_password", "call", "", e)
            },
            passport_call_change_password(e) {
                $.trackEvent("change_password", "call", "", e)
            },
            passport_call_age_verify(e) {
                $.trackEvent("passport_call_age_verify", "call", "", e)
            },
            passport_call_update_parent_email(e) {
                $.trackEvent("passport_call_update_parent_email", "call", "", e)
            },
            passport_call_ticket_access(e) {
                $.trackEvent("passport_call_ticket_access", "call", "", e)
            },
            passport_call_delete_account(e) {
                $.trackEvent("delete_account", "call", "", e)
            },
            passport_call_logout() {
                $.trackEvent("logout", "call")
            },
            passport_call_sync_login_status() {
                $.trackEvent("sync_login_status", "call")
            },
            passport_call_force_sync_login_status() {
                $.trackEvent("force_sync_login_status", "call")
            },
            passport_call_community_init(e) {
                $.trackEvent("passport_call_community_init", "call", "", e)
            },
            passport_call_get_oauth_info(e) {
                $.trackEvent("passport_call_get_oauth_info", "call", "", e)
            },
            passport_call_oauth_authorize(e) {
                $.trackEvent("passport_call_oauth_authorize", "call", "", e)
            },
            passport_call_list_oauths() {
                $.trackEvent("passport_call_list_oauths", "call")
            },
            passport_call_revoke_oauth(e) {
                $.trackEvent("passport_call_revoke_oauth", "call", "", e)
            },
            verifier_call_verify(e) {
                $.trackEvent("verify", "call", "", e)
            },
            verifier_call_geetest(e) {
                $.trackEvent("geetest", "call", "", e)
            },
            verifier_call_risky(e) {
                $.trackEvent("risky", "call", "", e)
            },
            verifier_call_gen_auth_key(e) {
                $.trackEvent("gen_auth_key", "call", "", e)
            },
            verifier_call_compare_ugc_protocol_version(e) {
                $.trackEvent("compare_ugc_protocol_version", "call", "", e)
            },
            binder_call_bind_email(e) {
                $.trackEvent("bind_email", "call", "", e)
            },
            binder_call_rebind_email(e) {
                $.trackEvent("rebind_email", "call", "", e)
            },
            binder_call_bind_username(e) {
                $.trackEvent("bind_username", "call", "", e)
            },
            binder_call_bind_mobile(e) {
                $.trackEvent("bind_mobile", "call", "", e)
            },
            binder_call_unbind_mobile(e) {
                $.trackEvent("unbind_mobile", "call", "", e)
            },
            binder_call_bind_thirdparty(e) {
                $.trackEvent("bind_thirdparty", "call", "", e)
            },
            binder_call_bind_unthirdparty(e) {
                $.trackEvent("unbind_thirdparty", "call", "", e)
            },
            unbindMobile_success() {
                $.trackEvent("曝光", "explore", "解绑手机成功", "unbindMobile_success")
            },
            unbindMobile_fail(e) {
                $.trackEvent("曝光", "explore", "解绑手机失败", "unbindMobile_fail", e)
            },
            bindThirdparty_success(e) {
                $.trackEvent("曝光", "explore", "绑定三方成功", "bindThirdparty_success", e)
            },
            bindThirdparty_fail(e) {
                $.trackEvent("曝光", "explore", "绑定三方失败", "bindThirdparty_fail", e)
            },
            unbindThirdparty_success(e) {
                $.trackEvent("曝光", "explore", "解绑三方成功", "unbindThirdparty_success", e)
            },
            unbindThirdparty_fail(e) {
                $.trackEvent("曝光", "explore", "解绑三方失败", "unbindThirdparty_fail", e)
            },
            authApps_remove_success(e) {
                $.trackEvent("曝光", "explore", "解除授权成功", "authApps_remove_success", e)
            },
            authApps_remove_fail(e) {
                $.trackEvent("曝光", "explore", "解除授权失败", "authApps_remove_fail", e)
            },
            binder_call_bind_third(e) {
                $.trackEvent("bind_third", "call", "", e)
            },
            result_access_login(e) {
                return this.trackResultAccess("login")(e)
            },
            result_access_check_token(e) {
                return this.trackResultAccess("check_token")(e)
            }
        }
          , H = (t(62402),
        t(50142),
        t(29617),
        t(17526))
          , j = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href
              , t = arguments.length > 2 ? arguments[2] : void 0
              , r = `${e}/account/ma-passport/token/crossLogout`
              , o = new URL(n);
            o.searchParams.delete("lrsag");
            var i = o.toString()
              , a = [`dest=${encodeURIComponent(i)}`];
            "1" === t && a.push("lrsag=1"),
            window.location.href = `${r}?${a.join("&")}`
        }
          , W = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
            window.location.href = z(e, n)
        }
          , z = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href
              , t = H.Z.get("lrsag")
              , r = `${e}/account/ma-passport/token/crossLoginStart`
              , o = [`dest=${encodeURIComponent(n)}`];
            return "1" === t && o.push("lrsag=1"),
            `${r}?${o.join("&")}`
        }
          , q = t(65857)
          , Q = t(84138)
          , X = t(31301)
          , ee = t.n(X)
          , ne = t(94814)
          , te = ne.p6.create()
          , re = te
          , oe = t(42304)
          , ie = {
            BOX: S.Z.production.BOX_API_BASE
        }
          , ae = function() {
            var e = ee().create({
                timeout: 1e4,
                withCredentials: !0
            });
            return (0,
            ne.PC)(e, (function() {
                return re
            }
            )),
            e.interceptors.request.use(oe.T),
            e.interceptors.response.use((function(e) {
                var n, t = e.data;
                return 0 === t.retcode ? null === (n = e.data) || void 0 === n ? void 0 : n.data : Promise.reject(e.data)
            }
            ), (function() {
                return Promise.reject({
                    retcode: -1,
                    data: null,
                    message: "network error"
                })
            }
            )),
            e
        }
          , ce = ae()
          , ue = function(e) {
            var n = F()
              , t = n.environment
              , r = n.innerBoxConfig
              , o = (0,
            q.qS)(e, {
                apiBaseMap: S.Z[t].API_BASE,
                isEnabled: function() {
                    return r && (0,
                    Q.Ut)((0,
                    Q.R7)(), !1),
                    (0,
                    q.ID)(Q.c2)
                }
            })
              , i = o.baseURL;
            return i || ce.defaults.baseURL
        }
          , se = void 0
          , le = function() {
            var e = window.location.host;
            return e.indexOf(".hoyoverse.com") > -1 ? "hoyoverse" : e.indexOf(".mihoyo.com") > -1 ? "mihoyo" : e.indexOf(".hoyolab.com") > -1 ? "hoyolab" : "hoyoverse"
        }
          , de = function(e) {
            var n, t = null === (n = S.Z[e].LOGIN_SINGLE_PAGE_FE_BASE) || void 0 === n ? void 0 : n.replace("hoyoverse.com", (0,
            v.K)()), r = A.c_.CrossLogin;
            return t + r
        }
          , fe = (le(),
        {
            toolbar: "no",
            location: "no",
            directories: "no",
            status: "no",
            menubar: "no",
            scrollbars: "yes",
            resizable: "yes",
            width: 500,
            height: 400,
            top: function(e, n) {
                return (n.innerHeight - e.height) / 2 + n.screenY
            },
            left: function(e, n) {
                return (n.innerWidth - e.width) / 2 + n.screenX
            }
        })
          , pe = null
          , _e = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = Object.assign({}, fe, e);
            return Object.keys(n).map((function(e) {
                return `${e}=${"function" === typeof n[e] ? n[e].call(se, n, window) : n[e]}`
            }
            )).join(",")
        }
          , ve = function(e, n) {
            var t = [`origin=${encodeURIComponent(n)}`]
              , r = H.Z.get("lrsag");
            return "1" === r && t.push("lrsag=1"),
            `${e}?${t.join("&")}`
        }
          , me = function(e) {
            var n = e.environment
              , t = e.syncMethod
              , r = e.forceSyncOnPopupFailed
              , o = e.onSyncPopupSuccess
              , i = e.onError;
            try {
                J.passport_call_sync_login_status();
                var a = le()
                  , c = de(n);
                if (c) {
                    if ("redirect" === t)
                        return void W(ue({
                            domainRedirect: !0
                        }));
                    var u = function e(n) {
                        var t = n.data;
                        t && "syncLoginStatusCallback" === t.type && (window.removeEventListener("message", e),
                        pe && pe.close(),
                        o())
                    };
                    window.addEventListener("message", u);
                    var s = ve(c, a);
                    pe = window.open(s, "_blank", _e()),
                    pe ? setTimeout((function() {
                        var e;
                        window.removeEventListener("message", u),
                        !1 === (null === (e = pe) || void 0 === e ? void 0 : e.closed) && (i({
                            retcode: A.iX.SYNC_CROSS_LOGIN_FAIL,
                            message: "sync cross login faled: timeout"
                        }),
                        pe.close())
                    }
                    ), 5e3) : (i({
                        retcode: A.iX.SYNC_CROSS_LOGIN_FAIL,
                        message: "sync cross login failed: browser blocked"
                    }),
                    r && (J.passport_call_force_sync_login_status(),
                    W(ue({
                        domainRedirect: !0
                    }))))
                }
            } catch (l) {
                i({
                    retcode: A.iX.SYNC_CROSS_LOGIN_FAIL,
                    message: `sync cross login failed: ${JSON.stringify(l)}`
                })
            }
        }
          , ge = t(85003)
          , he = function(e) {
            var n = e.src
              , t = new URL(n)
              , r = t.origin
              , o = new ge.EventEmitter
              , i = function(e) {
                var n = e.origin
                  , t = e.data
                  , i = t.type
                  , a = t.payload;
                n === r && o.emit(i, a)
            }
              , a = function() {
                window.addEventListener("message", i)
            }
              , c = function() {
                window.removeEventListener("message", i)
            };
            return {
                init: a,
                destroy: c,
                observer: o
            }
        }
          , Ee = new ge.EventEmitter
          , ye = function(e) {
            var n = null
              , t = function() {
                n = document.getElementById("hyv-account-frame"),
                n && r(),
                n = document.createElement("iframe"),
                Object.assign(n.style, {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 9999,
                    border: 0,
                    background: "transparent",
                    opacity: 0,
                    "pointer-events": "none"
                });
                var t = new URL(e.src);
                return t.searchParams.append("iframe_level", `${e.iframeLevel || 1}`),
                n.id = "hyv-account-frame",
                n.src = t.toString(),
                document.body.classList.add("hyv-login-platform__overflow-hidden"),
                document.body.appendChild(n),
                n
            }
              , r = function() {
                var e;
                n && (n.src = "",
                document.body.classList.remove("hyv-login-platform__overflow-hidden"),
                null === (e = n.parentElement) || void 0 === e || e.removeChild(n),
                n = null)
            };
            return {
                init: t,
                destroy: r
            }
        }
          , Ie = function(e) {
            var n = e.src
              , t = e.loading
              , r = function() {
                t.hide(),
                (0,
                p.T8)(n)
            }
              , o = function() {};
            return {
                init: r,
                destroy: o
            }
        }
          , ke = function(e) {
            var n = e.src
              , t = e.uxMode
              , r = e.iframeLevel
              , o = e.loading
              , i = he({
                src: n
            })
              , a = {
                [A.JJ.POPUP]: ye,
                [A.JJ.REDIRECT]: Ie
            }
              , c = a[t]({
                src: n,
                iframeLevel: r,
                loading: o
            })
              , u = function() {
                var e;
                return i.init(),
                null === (e = c.init) || void 0 === e ? void 0 : e.call(c)
            }
              , s = function() {
                var e;
                i.destroy(),
                null === (e = c.destroy) || void 0 === e || e.call(c)
            };
            return {
                init: u,
                destroy: s,
                observer: i.observer
            }
        }
          , we = function(e, n, t) {
            var r = !1
              , o = e.init()
              , i = F()
              , a = i.loadTimeout
              , c = i.loading;
            if (o) {
                var u = Date.now();
                c.show(),
                a && setTimeout((function() {
                    r || (c.hide(),
                    e.destroy(),
                    n({
                        retcode: A.iX.TIMEOUT,
                        message: "sdk load timeout"
                    }))
                }
                ), a),
                e.observer.on(f.Cs.LOADED, (function() {
                    var e;
                    r = !0;
                    var n = {
                        duration: Date.now() - u,
                        src: null !== (e = null === o || void 0 === o ? void 0 : o.src) && void 0 !== e ? e : ""
                    };
                    re.info(ne.DB.LOAD_PERFORMANCE, n),
                    J.sdk_iframe_loaded(n),
                    c.hide(),
                    o.style.opacity = "1",
                    o.style["pointer-events"] = "auto",
                    t()
                }
                ))
            }
            e.observer.on(f.Cs.ERROR, (function(t) {
                c.hide(),
                e.destroy(),
                n(t)
            }
            )),
            e.observer.on(f.Cs.CLOSE, (function() {
                c.hide(),
                e.destroy(),
                n({
                    retcode: A.iX.CLOSE,
                    message: "close"
                })
            }
            )),
            e.observer.on(f.Cs.INPUT_BLUR, (function() {
                Ee.emit(f.Cs.INPUT_BLUR)
            }
            )),
            e.observer.on(f.Cs.INPUT_FOCUS, (function() {
                Ee.emit(f.Cs.INPUT_FOCUS)
            }
            )),
            e.observer.on(f.Cs.H5LOG_INFO, (function(e) {
                re.info(e.msg, e.data)
            }
            )),
            e.observer.on(f.Cs.H5LOG_WARN, (function(e) {
                re.warn(e.msg, e.data)
            }
            )),
            e.observer.on(f.Cs.H5LOG_ERROR, (function(e) {
                re.error(e.msg, e.data)
            }
            ))
        }
          , be = (t(76999),
        Object.values(A.Ag))
          , Ae = (t(7061),
        t(20837))
          , Se = t.n(Ae)
          , Te = function(e, n) {
            var t = new URL(e);
            return t.searchParams.append("redirect_url", n),
            t.toString()
        }
          , Ne = function(e, n) {
            var t = new URL(e);
            return t.searchParams.append("ux_mode", n),
            t.toString()
        }
          , Re = function(e) {
            var n = e.lang
              , t = e.environment;
            if (p.mG) {
                var r = encodeURIComponent(n)
                  , o = encodeURIComponent(window.location.href)
                  , i = `${S.Z[t].LOGIN_SINGLE_PAGE_FE_BASE}${A.c_.ChangeBrowser}?lang=${r}&redirect=${o}`;
                return window.open(i, "_blank"),
                !0
            }
            return !1
        }
          , Oe = function(e, n) {
            var t;
            if ((0,
            p.tq)()) {
                var r = b()(e) ? e.mobile : e
                  , o = b()(n) ? n.mobile : n;
                t = r || o
            } else {
                var i = b()(e) ? e.web : e
                  , a = b()(n) ? n.web : n;
                t = i || a
            }
            return t
        }
          , Ce = function(e) {
            var n, t, r = !0, o = !1, i = (0,
            p.tq)() ? "redirect" : "popup", a = (0,
            p.tq)() ? "mobile" : "web", c = "object" === typeof e && !e.web && !e.mobile;
            if (!1 === e)
                r = !1;
            else if ("object" === typeof e) {
                var u;
                if (c) {
                    if ("popup" === e.method)
                        o = null !== (u = e.force) && void 0 !== u && u
                } else if (!1 === e[a])
                    r = !1;
                else if ("object" === typeof e[a] && "popup" === e[a].method) {
                    var s;
                    o = null !== (s = e[a].force) && void 0 !== s && s
                }
            }
            r && (c && null !== e && void 0 !== e && e.method && (i = null === e || void 0 === e ? void 0 : e.method),
            !c && null !== (n = e[a]) && void 0 !== n && n.method && (i = null === (t = e[a]) || void 0 === t ? void 0 : t.method));
            return {
                isSyncLoginStatus: r,
                forceSyncOnPopupFailed: o,
                syncMethod: i
            }
        }
          , Le = t(62141)
          , Pe = (t(14181),
        function(e) {
            var n = Object.entries(e).reduce((function(e, n) {
                var t, r = (0,
                Le.Z)(n, 2), o = r[0], i = r[1], a = o;
                return t = b()(i) ? (0,
                p.tq)() ? Number(i.mobile) : Number(i.web) : Number(i),
                isNaN(t) || (e[A.lt[a]] = t),
                e
            }
            ), {});
            return n
        }
        )
          , xe = (t(8220),
        -200)
          , De = 2001
          , Be = [xe, De]
          , Ue = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, p, _, m, g, h, E, y, I, k;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (o = F(),
                            i = o.lang,
                            a = o.environment,
                            c = o.query,
                            u = o.communityBiz,
                            s = o.loading,
                            l = o.colorMode,
                            d = n.onSuccess,
                            p = n.onFail,
                            _ = n.agree,
                            m = n.colorMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)((0,
                            r.Z)({
                                method: "showAccountFlowPopup"
                            }, n), {}, {
                                communityBiz: u
                            })),
                            J.passport_call_community_init((0,
                            r.Z)((0,
                            r.Z)({
                                uxMode: "redirect"
                            }, n), {}, {
                                communityBiz: u
                            })),
                            g = null === (t = window) || void 0 === t || null === (t = t.communityInitSea) || void 0 === t ? void 0 : t.checkCommunityInitStatus,
                            "function" === typeof g) {
                                e.next = 8;
                                break
                            }
                            return p({
                                retcode: A.iX.USER_COMMUNITY_INIT_FAIL,
                                message: "communityInitFail"
                            }),
                            e.abrupt("return");
                        case 8:
                            return e.prev = 8,
                            e.next = 11,
                            g({
                                environment: a
                            });
                        case 11:
                            if (h = e.sent,
                            !h) {
                                e.next = 15;
                                break
                            }
                            return d(),
                            e.abrupt("return");
                        case 15:
                            e.next = 22;
                            break;
                        case 17:
                            if (e.prev = 17,
                            e.t0 = e["catch"](8),
                            Be.includes(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.retcode)) {
                                e.next = 22;
                                break
                            }
                            return p({
                                retcode: A.iX.USER_COMMUNITY_INIT_FAIL,
                                message: "communityInitFail"
                            }),
                            e.abrupt("return");
                        case 22:
                            E = {
                                st: window.location.href,
                                app_id: c.app_id,
                                ux_mode: A.JJ.POPUP,
                                environment: a,
                                color_mode: m || l,
                                agree: _,
                                biz: u,
                                lang: i
                            },
                            y = Se().stringify(E, {
                                addQueryPrefix: !0
                            }),
                            I = `${S.Z[a].LOGIN_SINGLE_PAGE_FE_BASE.replace("hoyoverse.com", (0,
                            v.K)())}${A.c_.CommunityInit}${y}`,
                            k = ke({
                                src: I,
                                uxMode: A.JJ.POPUP
                            }),
                            we(k, p, (function() {}
                            )),
                            k.observer.on(f.Cs.COMMUNITY_INIT_SUCCESS, (function() {
                                s.hide(),
                                k.destroy(),
                                d()
                            }
                            )),
                            k.observer.on(f.Cs.COMMUNITY_INIT_FAIL, (function(e) {
                                s.hide(),
                                k.destroy(),
                                p(e)
                            }
                            ));
                        case 29:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[8, 17]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Ze = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, f, p, _, m;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.st,
                            o = n.dest,
                            i = n.agree,
                            a = n.colorMode,
                            c = F(),
                            u = c.lang,
                            s = c.environment,
                            l = c.query,
                            d = c.communityBiz,
                            f = c.colorMode,
                            J.passport_call_community_init((0,
                            r.Z)({
                                uxMode: "redirect",
                                communityBiz: d
                            }, n)),
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "showAccountFlowRedirect",
                                communityBiz: d
                            }, n)),
                            p = {
                                app_id: l.app_id,
                                environment: s,
                                agree: i,
                                color_mode: a || f,
                                ux_mode: A.JJ.REDIRECT,
                                biz: d,
                                lang: u,
                                st: t,
                                dest: o
                            },
                            _ = Se().stringify(p, {
                                addQueryPrefix: !0
                            }),
                            m = `${S.Z[s].LOGIN_SINGLE_PAGE_FE_BASE.replace("hoyoverse.com", (0,
                            v.K)())}${A.c_.CommunityInit}${_}`,
                            e.abrupt("return", m);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Ge = "2.38.0"
          , Me = function() {
            var e, n, t = null !== (e = null === (n = window) || void 0 === n || null === (n = n.navigator) || void 0 === n ? void 0 : n.userAgent) && void 0 !== e ? e : "", r = /miHoYoBBSOversea\/([\d.]+)/, o = t.match(r), i = (null === o || void 0 === o ? void 0 : o[1]) || "";
            return (0,
            p.M7)(i, Ge) >= 0
        }
          , Fe = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t, o, a, c, u, s, l, d, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L, P, x, D, B, U, Z, G, M, K, Y, V, H, j, W, q, Q, X, ee, te, oe, ie, ae, ce = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = ce.length > 0 && void 0 !== ce[0] ? ce[0] : {},
                            t = n.onSuccess,
                            o = void 0 === t ? function() {}
                            : t,
                            a = n.onLoginSuccess,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onRegisterSuccess,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onSyncPopupSuccess,
                            d = void 0 === l ? function() {}
                            : l,
                            v = n.onError,
                            m = void 0 === v ? function() {}
                            : v,
                            g = n.initialFlow,
                            h = void 0 === g ? void 0 : g,
                            E = n.colorMode,
                            y = void 0 === E ? void 0 : E,
                            I = n.extraTrackingInfo,
                            k = void 0 === I ? {} : I,
                            w = n.uxMode,
                            b = n.redirectUrl,
                            S = void 0 === b ? void 0 : b,
                            T = function() {
                                var e;
                                null === n || void 0 === n || null === (e = n.onLoad) || void 0 === e || e.call(n)
                            }
                            ,
                            J.passport_call_show_account_flow(n && Object.keys(n).join(",") || ""),
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "showAccountFlow"
                            }, n)),
                            N = F(),
                            !Me()) {
                                e.next = 10;
                                break
                            }
                            return console.error("native login"),
                            window.location.href = "uniwebview://nativeLogin",
                            e.abrupt("return");
                        case 10:
                            if (R = be.reduce((function(e, t) {
                                return "undefined" !== typeof n[t] && (e[t] = n[t]),
                                e
                            }
                            ), {}),
                            O = Pe(R),
                            C = N.mobile,
                            L = N.web,
                            P = N.lang,
                            x = N.query,
                            D = N.environment,
                            B = N.syncLoginStatus,
                            U = N.loading,
                            Z = N.communityInit,
                            !Re({
                                lang: P,
                                environment: D
                            })) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return");
                        case 15:
                            if (G = Ce(B),
                            M = G.syncMethod,
                            K = G.isSyncLoginStatus,
                            Y = G.forceSyncOnPopupFailed,
                            V = {
                                web: A.JJ.POPUP,
                                mobile: K ? A.JJ.REDIRECT : A.JJ.POPUP
                            },
                            H = Oe(w, V),
                            H === A.JJ.REDIRECT && K && console.warn("using redirect login status sync in redirect uxMode"),
                            j = (0,
                            p.tq)() ? C : L,
                            W = j.baseUrl,
                            q = (0,
                            r.Z)({}, x),
                            y && (Q = x.theme.split("-"),
                            X = (0,
                            p.gh)(null === Q || void 0 === Q ? void 0 : Q[1]),
                            q.theme = `${(0,
                            p.Fg)(y)}-${X}`),
                            O && (q = (0,
                            r.Z)((0,
                            r.Z)({}, q), O)),
                            $.setExtraTrackingInfo(k),
                            ee = function(e) {
                                var n = Se().stringify(e, {
                                    addQueryPrefix: !0
                                })
                                  , t = A.Lb[A.q5.PASSWORD_LOGIN];
                                h === A.x4.EMAIL_REGISTER && (t = A.Lb[A.q5.EMAIL_REGISTER]);
                                var r = `${W}${n}${t}`;
                                return r = Ne(r, H),
                                r
                            }
                            ,
                            te = function(e, n) {
                                n ? c(e) : s(e),
                                o(e)
                            }
                            ,
                            H !== A.JJ.REDIRECT) {
                                e.next = 38;
                                break
                            }
                            if (S && (0,
                            p.tj)(S) && (q.st = S),
                            K && (q.st = z(ue({
                                domainRedirect: !0
                            }), q.st)),
                            !Z) {
                                e.next = 34;
                                break
                            }
                            return e.next = 33,
                            Ze({
                                agree: h === A.x4.EMAIL_REGISTER ? 1 : 0,
                                colorMode: (0,
                                p.Fg)(y),
                                st: window.location.href,
                                dest: q.st
                            });
                        case 33:
                            q.st = e.sent;
                        case 34:
                            oe = ke({
                                src: ee(q),
                                uxMode: H,
                                loading: U
                            }),
                            we(oe, m, T),
                            e.next = 43;
                            break;
                        case 38:
                            ie = ke({
                                src: ee(q),
                                uxMode: H,
                                loading: U
                            }),
                            ie.observer.on(f.Cs.LOGIN_SUCCESS, function() {
                                var e = (0,
                                i.Z)(regeneratorRuntime.mark((function e(n) {
                                    return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                ae(n, !0);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()),
                            ie.observer.on(f.Cs.REGISTER_SUCCESS, function() {
                                var e = (0,
                                i.Z)(regeneratorRuntime.mark((function e(n) {
                                    return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                ae(n, !1);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()),
                            ae = function(e, n) {
                                var t = (0,
                                _.Y)(e);
                                J.passport_call_show_account_flow_success(),
                                J.result_access_login(t),
                                ie.destroy(),
                                Z ? Ue({
                                    colorMode: (0,
                                    p.Fg)(y),
                                    agree: n ? 0 : 1,
                                    onSuccess: function() {
                                        te(t, n),
                                        K && me({
                                            environment: D,
                                            syncMethod: M,
                                            forceSyncOnPopupFailed: Y,
                                            onSyncPopupSuccess: d,
                                            onError: m
                                        })
                                    },
                                    onFail: m
                                }) : (K && me({
                                    environment: D,
                                    syncMethod: M,
                                    forceSyncOnPopupFailed: Y,
                                    onSyncPopupSuccess: d,
                                    onError: m
                                }),
                                te(t, n))
                            }
                            ,
                            we(ie, m, T);
                        case 43:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Ke = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Fe(e)
        }
          , Ye = "/account/ma-passport"
          , Ve = "/account/ma-passport/api"
          , $e = ce.post
          , Je = function() {
            return $e(`${Ye}/api/logout`, {}, {
                domainRedirect: !0
            })
        }
          , He = function() {
            return $e(`${Ye}/token/verifyCookieToken`, {}, {
                domainRedirect: !0
            })
        }
          , je = function() {
            return $e(`${Ye}/token/verifyLToken`, {}, {
                domainRedirect: !0
            })
        }
          , We = function(e, n) {
            return $e(`${Ve}/unBindMobile`, {
                action_ticket: e.action_ticket
            }, (0,
            r.Z)({
                domainRedirect: !0
            }, n))
        }
          , ze = function(e, n) {
            return $e(`${Ve}/bindThirdPartyByCookieToken`, e, (0,
            r.Z)({
                domainRedirect: !0
            }, n))
        }
          , qe = (0,
        p.Ds)(ze)
          , Qe = function(e, n) {
            return $e(`${Ve}/unBindThirdPartyByCookieToken`, e, (0,
            r.Z)({
                domainRedirect: !0
            }, n))
        }
          , Xe = (0,
        p.Ds)(Qe)
          , en = function(e) {
            return $e(`${Ve}/twitterRequestToken`, e, {
                domainRedirect: !0
            })
        }
          , nn = function() {
            return $e(`${Ve}/getConfig`)
        }
          , tn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t, r, o, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (re.info(ne.DB.JSSDK_INVOKE, {
                                method: "logout"
                            }),
                            J.passport_call_logout(),
                            n = F(),
                            t = n.syncLoginStatus,
                            r = Ce(t),
                            o = r.isSyncLoginStatus,
                            !o) {
                                e.next = 11;
                                break
                            }
                            return i = H.Z.get("lrsag"),
                            e.next = 8,
                            Je();
                        case 8:
                            return e.abrupt("return", new Promise((function() {
                                return j(ue({
                                    domainRedirect: !0
                                }), window.location.href, i)
                            }
                            )));
                        case 11:
                            return e.next = 13,
                            Je();
                        case 13:
                            return e.abrupt("return", e.sent);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , rn = t(14935)
          , on = ["st", "client_type"]
          , an = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, i, a, c, u, s, l, d, f, _, v, m, g, h, E;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.ticket,
                            i = F(),
                            a = i.mobile,
                            c = i.web,
                            u = i.loading,
                            s = i.lang,
                            l = i.environment,
                            d = i.query,
                            !Re({
                                lang: s,
                                environment: l
                            })) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            f = (0,
                            p.tq)() ? a : c,
                            (0,
                            rn.WZ)({
                                actionType: A.Us.ActionBindThirdParty,
                                actionTicket: t
                            }),
                            _ = f.baseUrl,
                            d.st,
                            d.client_type,
                            v = (0,
                            o.Z)(d, on),
                            m = Se().stringify((0,
                            r.Z)((0,
                            r.Z)({}, v), {}, {
                                action_ticket: t,
                                action_type: A.Us.ActionRealName
                            }), {
                                addQueryPrefix: !0
                            }),
                            g = `${_}${m}${A.Lb[A.q5.VN_REAL_NAME]}`,
                            h = A.JJ.REDIRECT,
                            E = ke({
                                src: g,
                                uxMode: h,
                                loading: u
                            }),
                            E.init();
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , cn = function(e) {
            an(e)
        }
          , un = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = F(),
                            t = n.environment,
                            window.communityInitSea) {
                                e.next = 3;
                                break
                            }
                            throw {
                                data: null,
                                message: "community init fail",
                                retcode: A.iX.USER_COMMUNITY_INIT_FAIL
                            };
                        case 3:
                            return e.next = 5,
                            window.communityInitSea.checkCommunityInitStatus({
                                environment: t
                            });
                        case 5:
                            if (r = e.sent,
                            r) {
                                e.next = 8;
                                break
                            }
                            throw {
                                data: null,
                                message: "community init fail",
                                retcode: A.iX.USER_COMMUNITY_INIT_FAIL
                            };
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , sn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t, r, o, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return re.info(ne.DB.JSSDK_INVOKE, {
                                method: "checkLoginStatusByLToken"
                            }),
                            n = A.iv.TokenTypeLtoken,
                            t = F(),
                            r = t.communityInit,
                            J.passport_call_check_token({
                                token_type: n
                            }),
                            e.next = 6,
                            je();
                        case 6:
                            if (o = e.sent,
                            !r) {
                                e.next = 18;
                                break
                            }
                            return e.prev = 8,
                            e.next = 11,
                            un();
                        case 11:
                            e.next = 18;
                            break;
                        case 13:
                            return e.prev = 13,
                            e.t0 = e["catch"](8),
                            e.next = 17,
                            Je();
                        case 17:
                            throw e.t0;
                        case 18:
                            return i = (0,
                            _.Y)(o),
                            J.result_access_check_token(i),
                            e.abrupt("return", i);
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[8, 13]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , ln = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t, r, o, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return re.info(ne.DB.JSSDK_INVOKE, {
                                method: "checkLoginStatusByCookieToken"
                            }),
                            n = F(),
                            t = n.communityInit,
                            r = A.iv.TokenTypeCookieToken,
                            J.passport_call_check_token({
                                token_type: r
                            }),
                            e.next = 6,
                            He();
                        case 6:
                            if (o = e.sent,
                            !t) {
                                e.next = 18;
                                break
                            }
                            return e.prev = 8,
                            e.next = 11,
                            un();
                        case 11:
                            e.next = 18;
                            break;
                        case 13:
                            return e.prev = 13,
                            e.t0 = e["catch"](8),
                            e.next = 17,
                            Je();
                        case 17:
                            throw e.t0;
                        case 18:
                            return i = (0,
                            _.Y)(o),
                            J.result_access_check_token(i),
                            e.abrupt("return", i);
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[8, 13]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , dn = function() {
            var e;
            re.info(ne.DB.JSSDK_INVOKE, {
                method: "getAgreedTerms"
            });
            var n = (0,
            U.$7)(A.Z1.COOKIE)(A.BU.OPTIONAL_AGREEMENT);
            return null !== (e = null === n || void 0 === n ? void 0 : n.result) && void 0 !== e ? e : []
        }
          , fn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            re.info(ne.DB.JSSDK_INVOKE, (0,
            r.Z)({
                method: "findPassword"
            }, e)),
            J.passport_call_find_password(e && Object.keys(e).join(",") || "");
            var n = e.account
              , t = e.redirectUrl
              , o = e.redirectMethod
              , i = void 0 === o ? "open" : o
              , a = F()
              , c = a.mobile
              , u = a.web
              , s = a.lang
              , l = a.query
              , d = a.environment;
            if (!Re({
                lang: s,
                environment: d
            })) {
                var f = window.location.href;
                if (l.st) {
                    var _ = new URL(l.st).search;
                    _ && (f = new URLSearchParams(_).get("st") || l.st)
                }
                (0,
                rn.WZ)({
                    actionType: A.Us.ActionForgetPassword,
                    meta: {
                        account: n
                    }
                });
                var v = (0,
                p.tq)() ? c : u
                  , m = v.baseUrl
                  , g = Se().stringify((0,
                r.Z)((0,
                r.Z)({}, l), {}, {
                    st: f
                }), {
                    addQueryPrefix: !0
                })
                  , h = `${m}${g}${A.Lb[A.q5.FORGOT_PASSWORD]}`;
                t && (h = Te(h, t)),
                h = Ne(h, A.JJ.REDIRECT),
                "replace" === i ? window.location.replace(h) : "assign" === i ? window.location.assign(h) : window.open(h)
            }
        }
          , pn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.iframeLevel,
                            a = n.manualClose,
                            c = void 0 === a || a,
                            u = n.onSuccess,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onError,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.onLoad,
                            v = void 0 === _ ? function() {}
                            : _,
                            m = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "changePassword"
                            }, n)),
                            J.passport_call_change_password(n && Object.keys(n).join(",") || ""),
                            g = F(),
                            h = g.mobile,
                            E = g.web,
                            y = g.loading,
                            I = g.lang,
                            k = g.query,
                            w = g.environment,
                            !Re({
                                lang: I,
                                environment: w
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            b = (0,
                            p.tq)() ? h : E,
                            S = b.baseUrl,
                            T = Se().stringify(k, {
                                addQueryPrefix: !0
                            }),
                            N = `${S}${T}${A.Lb[A.q5.CHANGE_PASSWORD]}`,
                            N = Te(N, t || window.location.href),
                            R = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            O = Oe(m, R),
                            N = Ne(N, O),
                            C = {
                                actionType: A.Us.ActionChangePassword,
                                actionTicket: o,
                                meta: {
                                    manualClose: c
                                }
                            },
                            (0,
                            rn.WZ)(C),
                            L = ke({
                                src: N,
                                uxMode: O,
                                iframeLevel: i,
                                loading: y
                            }),
                            we(L, d, v),
                            L.observer.on(f.Cs.CHANGE_PASSWORD_SUCCESS, (function(e) {
                                L.destroy(),
                                s({
                                    retcode: 0,
                                    data: (0,
                                    r.Z)({}, e)
                                })
                            }
                            ));
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , _n = function(e) {
            pn(e)
        }
          , vn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L, P;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.iframeLevel,
                            a = n.manualClose,
                            c = void 0 === a || a,
                            u = n.onSuccess,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onError,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.onLoad,
                            v = void 0 === _ ? function() {}
                            : _,
                            m = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "deleteAccount"
                            }, n)),
                            J.passport_call_delete_account(n && Object.keys(n).join(",") || ""),
                            g = F(),
                            h = g.mobile,
                            E = g.web,
                            y = g.loading,
                            I = g.lang,
                            k = g.query,
                            w = g.environment,
                            !Re({
                                lang: I,
                                environment: w
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            b = (0,
                            p.tq)() ? h : E,
                            S = {
                                retcode: 0,
                                data: {}
                            },
                            T = b.baseUrl,
                            N = Se().stringify(k, {
                                addQueryPrefix: !0
                            }),
                            R = `${T}${N}${A.Lb[A.q5.DELETE_ACCOUNT]}`,
                            R = Te(R, t || window.location.href),
                            O = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            C = Oe(m, O),
                            R = Ne(R, C),
                            L = {
                                actionType: A.Us.ActionDeleteAccount,
                                actionTicket: o,
                                meta: {
                                    manualClose: c
                                }
                            },
                            (0,
                            rn.WZ)(L),
                            P = ke({
                                src: R,
                                uxMode: C,
                                iframeLevel: i,
                                loading: y
                            }),
                            we(P, d, v),
                            P.observer.on(f.Cs.DELETE_ACCOUNT_SUCCESS, (function() {
                                P.destroy(),
                                s(S)
                            }
                            ));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , mn = function(e) {
            vn(e)
        }
          , gn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return re.info(ne.DB.JSSDK_INVOKE, {
                                method: "getConfig"
                            }),
                            J.passport_call_get_config(),
                            e.next = 4,
                            nn();
                        case 4:
                            return n = e.sent,
                            t = (0,
                            _.Y)(n),
                            e.abrupt("return", t);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , hn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticketPayload,
                            i = n.iframeLevel,
                            a = n.onSuccess,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onError,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onLoad,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.allowBack,
                            v = void 0 === _ || _,
                            m = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "ageVerify"
                            }, n)),
                            J.passport_call_age_verify(n && Object.keys(n).join(",") || ""),
                            g = F(),
                            h = g.mobile,
                            E = g.web,
                            y = g.loading,
                            I = g.lang,
                            k = g.query,
                            w = g.environment,
                            !Re({
                                lang: I,
                                environment: w
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            b = (0,
                            p.tq)() ? h : E,
                            {
                                retcode: 0,
                                data: {}
                            },
                            S = b.baseUrl,
                            T = Se().stringify((0,
                            r.Z)((0,
                            r.Z)({}, k), {}, {
                                ticket_payload: o,
                                allow_back: v ? 1 : 0
                            }), {
                                addQueryPrefix: !0
                            }),
                            N = `${S}${T}${A.Lb[A.q5.AGE_VERIFY]}`,
                            N = Te(N, t || window.location.href),
                            R = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            O = Oe(m, R),
                            N = Ne(N, O),
                            C = ke({
                                src: N,
                                uxMode: O,
                                iframeLevel: i,
                                loading: y
                            }),
                            we(C, s, d),
                            C.observer.on(f.Cs.AGE_VERIFY_SUCCESS, (function(e) {
                                C.destroy(),
                                c(e)
                            }
                            ));
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , En = function(e) {
            hn(e)
        }
          , yn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, f, _, v, m, g, h, E, y, I, k, w, b, S, T, N;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.iframeLevel,
                            a = n.onSuccess,
                            void 0 === a ? function() {}
                            : a,
                            c = n.onError,
                            u = void 0 === c ? function() {}
                            : c,
                            s = n.onLoad,
                            l = void 0 === s ? function() {}
                            : s,
                            d = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "parentVerify"
                            }, n)),
                            J.passport_call_ticket_access(n && Object.keys(n).join(",") || ""),
                            f = F(),
                            _ = f.mobile,
                            v = f.web,
                            m = f.loading,
                            g = f.lang,
                            h = f.query,
                            E = f.environment,
                            !Re({
                                lang: g,
                                environment: E
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            y = (0,
                            r.Z)((0,
                            r.Z)({}, h), {}, {
                                parent_ticket: o
                            }),
                            I = (0,
                            p.tq)() ? _ : v,
                            k = I.baseUrl,
                            w = Se().stringify(y, {
                                addQueryPrefix: !0
                            }),
                            b = `${k}${w}${A.Lb[A.q5.PARENT_VERIFY]}`,
                            b = Te(b, t || window.location.href),
                            S = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            T = Oe(d, S),
                            b = Ne(b, T),
                            N = ke({
                                src: b,
                                uxMode: T,
                                iframeLevel: i,
                                loading: m
                            }),
                            we(N, u, l);
                        case 17:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , In = function(e) {
            yn(e)
        }
          , kn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            a = n.iframeLevel,
                            c = n.onSuccess,
                            u = void 0 === c ? function() {}
                            : c,
                            s = n.onError,
                            l = void 0 === s ? function() {}
                            : s,
                            d = n.onLoad,
                            _ = void 0 === d ? function() {}
                            : d,
                            v = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "childRegister"
                            }, n)),
                            J.passport_call_ticket_access(n && Object.keys(n).join(",") || ""),
                            m = F(),
                            g = m.mobile,
                            h = m.web,
                            E = m.loading,
                            y = m.lang,
                            I = m.query,
                            k = m.environment,
                            !Re({
                                lang: y,
                                environment: k
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            w = (0,
                            r.Z)((0,
                            r.Z)({}, I), {}, {
                                parent_ticket: o
                            }),
                            b = (0,
                            p.tq)() ? g : h,
                            S = {
                                retcode: 0,
                                data: {}
                            },
                            T = b.baseUrl,
                            N = Se().stringify(w, {
                                addQueryPrefix: !0
                            }),
                            R = `${T}${N}${A.Lb[A.q5.CHILD_REGISTER]}`,
                            R = Te(R, t || window.location.href),
                            O = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            C = Oe(v, O),
                            R = Ne(R, C),
                            L = ke({
                                src: R,
                                uxMode: C,
                                iframeLevel: a,
                                loading: E
                            }),
                            we(L, l, _),
                            L.observer.on(f.Cs.LOGIN_SUCCESS, (0,
                            i.Z)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            L.destroy(),
                                            u(S);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))),
                            L.observer.on(f.Cs.REGISTER_SUCCESS, (0,
                            i.Z)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            L.destroy(),
                                            u(S);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , wn = function(e) {
            kn(e)
        }
          , bn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, f, _, v, m, g, h, E, y, I, k, w, b, S, T;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticketPayload,
                            i = n.iframeLevel,
                            a = n.onSuccess,
                            void 0 === a ? function() {}
                            : a,
                            c = n.onError,
                            u = void 0 === c ? function() {}
                            : c,
                            s = n.onLoad,
                            l = void 0 === s ? function() {}
                            : s,
                            d = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "ageAppeal"
                            }, n)),
                            J.passport_call_age_verify(n && Object.keys(n).join(",") || ""),
                            f = F(),
                            _ = f.mobile,
                            v = f.web,
                            m = f.loading,
                            g = f.lang,
                            h = f.query,
                            E = f.environment,
                            !Re({
                                lang: g,
                                environment: E
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            y = (0,
                            p.tq)() ? _ : v,
                            {
                                retcode: 0,
                                data: {}
                            },
                            I = y.baseUrl,
                            k = Se().stringify((0,
                            r.Z)((0,
                            r.Z)({}, h), {}, {
                                ticket_payload: o
                            }), {
                                addQueryPrefix: !0
                            }),
                            w = `${I}${k}${A.Lb[A.q5.AGE_APPEAL]}`,
                            w = Te(w, t || window.location.href),
                            b = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            S = Oe(d, b),
                            w = Ne(w, S),
                            T = ke({
                                src: w,
                                uxMode: S,
                                iframeLevel: i,
                                loading: m
                            }),
                            we(T, u, l);
                        case 17:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , An = function(e) {
            bn(e)
        }
          , Sn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.iframeLevel,
                            i = n.onSuccess,
                            a = void 0 === i ? function() {}
                            : i,
                            c = n.onError,
                            u = void 0 === c ? function() {}
                            : c,
                            s = n.onLoad,
                            l = void 0 === s ? function() {}
                            : s,
                            d = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "updateParentEmail"
                            }, n)),
                            J.passport_call_update_parent_email(n && Object.keys(n).join(",") || ""),
                            _ = F(),
                            v = _.mobile,
                            m = _.web,
                            g = _.loading,
                            h = _.lang,
                            E = _.query,
                            y = _.environment,
                            !Re({
                                lang: h,
                                environment: y
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            I = (0,
                            p.tq)() ? v : m,
                            k = I.baseUrl,
                            w = Se().stringify(E, {
                                addQueryPrefix: !0
                            }),
                            b = `${k}${w}${A.Lb[A.q5.UPDATE_PARENT_EMAIL]}`,
                            b = Te(b, t || window.location.href),
                            S = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            T = Oe(d, S),
                            b = Ne(b, T),
                            N = ke({
                                src: b,
                                uxMode: T,
                                iframeLevel: o,
                                loading: g
                            }),
                            we(N, u, l),
                            N.observer.on(f.Cs.UPDATE_PARENT_EMAIL_SUCCESS, (function(e) {
                                N.destroy(),
                                a(e)
                            }
                            ));
                        case 17:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Tn = function(e) {
            Sn(e)
        }
          , Nn = {
            showAccountFlow: Ke,
            checkLoginStatusByCookieToken: ln,
            checkLoginStatusByLToken: sn,
            logout: tn,
            getAgreedTerms: dn,
            findPassword: fn,
            vnRealName: cn,
            ageVerify: En,
            ageAppeal: An,
            childRegister: wn,
            parentVerify: In,
            updateParentEmail: Tn
        }
          , Rn = {
            showAccountFlow: Ke,
            checkLoginStatusByCookieToken: ln,
            checkLoginStatusByLToken: sn,
            logout: tn,
            getAgreedTerms: dn,
            findPassword: fn,
            vnRealName: cn,
            ageVerify: En,
            ageAppeal: An,
            childRegister: wn,
            parentVerify: In,
            updateParentEmail: Tn,
            changePassword: _n,
            deleteAccount: mn,
            getConfig: gn
        }
          , On = "/account/ma-verifier/api"
          , Cn = ce.post
          , Ln = function(e, n) {
            return Cn(`${On}/getActionTicketInfo`, {
                action_type: e.action_type,
                action_ticket: e.action_ticket
            }, {
                domainRedirect: !0
            })
        }
          , Pn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L, P, x, D, B, U, Z;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.actionType,
                            i = n.ticket,
                            a = n.iframeLevel,
                            c = n.trackingInfo,
                            u = void 0 === c ? {} : c,
                            s = n.onSuccess,
                            l = void 0 === s ? function() {}
                            : s,
                            d = n.onError,
                            _ = void 0 === d ? function() {}
                            : d,
                            v = n.onLoad,
                            m = void 0 === v ? function() {}
                            : v,
                            g = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "verify"
                            }, n)),
                            J.verifier_call_verify(n && Object.keys(n).join(",") || ""),
                            h = F(),
                            E = h.mobile,
                            y = h.web,
                            I = h.loading,
                            k = h.lang,
                            w = h.environment,
                            b = h.query,
                            !Re({
                                lang: k,
                                environment: w
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            return S = (0,
                            p.tq)() ? E : y,
                            T = {
                                retcode: 0,
                                data: {}
                            },
                            e.prev = 8,
                            e.next = 11,
                            Ln({
                                action_type: o,
                                action_ticket: i
                            });
                        case 11:
                            if (N = e.sent,
                            R = (null === N || void 0 === N ? void 0 : N.verify_info) || {},
                            O = R.status,
                            C = R.verify_method_combinations,
                            O !== A.wK.VERIFIED && 0 !== (null === C || void 0 === C ? void 0 : C.length)) {
                                e.next = 17;
                                break
                            }
                            return I.hide(),
                            l(T),
                            e.abrupt("return");
                        case 17:
                            e.next = 24;
                            break;
                        case 19:
                            return e.prev = 19,
                            e.t0 = e["catch"](8),
                            I.hide(),
                            _(e.t0),
                            e.abrupt("return");
                        case 24:
                            L = S.baseUrl,
                            P = Se().stringify(b, {
                                addQueryPrefix: !0
                            }),
                            x = `${L}${P}${A.Lb[A.q5.SECURITY_VERIFICATION]}`,
                            x = Te(x, t || window.location.href),
                            D = {
                                web: A.JJ.REDIRECT,
                                mobile: A.JJ.REDIRECT
                            },
                            B = Oe(g, D),
                            x = Ne(x, B),
                            U = {
                                actionType: o,
                                actionTicket: i,
                                meta: {
                                    trackingInfo: u
                                }
                            },
                            (0,
                            rn.WZ)(U),
                            Z = ke({
                                src: x,
                                uxMode: B,
                                iframeLevel: a,
                                loading: I
                            }),
                            we(Z, _, m),
                            Z.observer.on(f.Cs.VERIFY_SUCCESS, (function() {
                                Z.destroy(),
                                l(T)
                            }
                            ));
                        case 36:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[8, 19]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , xn = function(e) {
            Pn(e)
        }
          , Dn = (t(35503),
        t(60303),
        t(51552),
        "/account/ma-aigis/api")
          , Bn = ce.post
          , Un = function(e, n) {
            return Bn(`${Dn}/createBySmartCaptchaTicket`, e, n)
        }
          , Zn = function(e, n) {
            return Bn(`${Dn}/checkSmartCaptcha`, e, n)
        }
          , Gn = t(67226)
          , Mn = t(71160)
          , Fn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, f, p, _, v, m, g, h, E, y, I, k, w, b, A, S, T;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "geetest"
                            }, n)),
                            J.verifier_call_geetest(n && Object.keys(n).join(",") || ""),
                            t = F(),
                            o = t.loading,
                            i = n.ticket,
                            a = n.onError,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onSuccess,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onLoad,
                            d = void 0 === l ? function() {}
                            : l,
                            f = n.enableDomainRedirect,
                            p = (0,
                            Mn.VL)(n.maPassportRegion),
                            _ = {
                                maPassportRegion: p,
                                enableDomainRedirect: null !== f && void 0 !== f ? f : !!p || void 0
                            },
                            v = function(e) {
                                o.hide(),
                                c(e)
                            }
                            ,
                            m = function() {
                                o.hide(),
                                d()
                            }
                            ,
                            g = function(e) {
                                o.hide(),
                                s(e)
                            }
                            ,
                            h = function() {
                                o.hide(),
                                c({
                                    retcode: Gn.jI.close,
                                    message: "close"
                                })
                            }
                            ,
                            e.prev = 10,
                            o.show(),
                            e.next = 14,
                            Un({
                                ticket: i
                            }, _);
                        case 14:
                            E = e.sent,
                            y = E.mmt_type,
                            I = E.data,
                            o.hide(),
                            k = F(),
                            w = k.lang,
                            e.t0 = y,
                            e.next = 0 === e.t0 ? 21 : 1 === e.t0 ? 23 : 39;
                            break;
                        case 21:
                            return g({
                                retcode: Gn.jI.success,
                                data: {
                                    ticket: i
                                }
                            }),
                            e.abrupt("break", 40);
                        case 23:
                            return b = JSON.parse(I),
                            e.prev = 24,
                            e.next = 27,
                            (0,
                            Gn.ZP)({
                                geetestData: b,
                                lang: w,
                                onReady: function() {
                                    return m()
                                }
                            }, E);
                        case 27:
                            return A = e.sent,
                            S = A.data,
                            o.show(),
                            e.next = 32,
                            Zn({
                                ticket: i,
                                check_data: btoa(JSON.stringify(S))
                            }, _);
                        case 32:
                            g({
                                retcode: Gn.jI.success,
                                data: (0,
                                r.Z)({
                                    ticket: i
                                }, S)
                            }),
                            e.next = 38;
                            break;
                        case 35:
                            e.prev = 35,
                            e.t1 = e["catch"](24),
                            (null === e.t1 || void 0 === e.t1 || null === (T = e.t1.data) || void 0 === T ? void 0 : T.retcode) === Gn.jI.close ? h() : v(e.t1);
                        case 38:
                            return e.abrupt("break", 40);
                        case 39:
                            v({
                                retcode: Gn.jI.unknownMmtType,
                                data: {
                                    error_type: Gn.w1.unknownMmtType,
                                    error_data: I
                                }
                            });
                        case 40:
                            e.next = 45;
                            break;
                        case 42:
                            e.prev = 42,
                            e.t2 = e["catch"](10),
                            v({
                                retcode: Gn.jI.error,
                                data: {
                                    error_type: Gn.w1.error,
                                    error_data: e.t2
                                }
                            });
                        case 45:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[10, 42], [24, 35]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }();
        Fn.defaults = Gn.Zr.defaults,
        Fn.config = Gn.Zr.config;
        var Kn = function(e) {
            var n = e.uxMode
              , t = e.verifyType
              , o = e.ticket
              , i = e.onSuccess
              , a = e.onError
              , c = e.redirectUrl
              , u = e.actionType
              , s = e.iframeLevel
              , l = e.trackingInfo
              , d = void 0 === l ? {} : l;
            re.info(ne.DB.JSSDK_INVOKE, (0,
            r.Z)({
                method: "geetest"
            }, e)),
            J.verifier_call_risky(e && Object.keys(e).join(",") || ""),
            t ? o ? t === A.O6.GEETEST ? Fn({
                ticket: o,
                onError: a,
                onSuccess: i
            }) : t === A.O6.IDENTITY && xn({
                uxMode: n,
                ticket: o,
                actionType: u || "verify_for_component",
                redirectUrl: c,
                iframeLevel: s,
                onError: a,
                onSuccess: i,
                trackingInfo: d
            }) : console.error("risky: invalid ticket") : console.error("risky: invalid verifyType")
        }
          , Yn = function() {
            return re.info(ne.DB.JSSDK_INVOKE, {
                method: "getFp"
            }),
            J.getFp_call(),
            d().getDeviceFp()
        }
          , Vn = {
            verify: xn,
            geetest: Fn,
            risky: Kn,
            getFp: Yn
        }
          , $n = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.scene,
                            a = n.iframeLevel,
                            c = n.onSuccess,
                            u = void 0 === c ? function() {}
                            : c,
                            s = n.onError,
                            l = void 0 === s ? function() {}
                            : s,
                            d = n.onLoad,
                            _ = void 0 === d ? function() {}
                            : d,
                            v = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "bindEmail"
                            }, n)),
                            J.binder_call_bind_email(n && Object.keys(n).join(",") || ""),
                            m = F(),
                            g = m.mobile,
                            h = m.web,
                            E = m.loading,
                            y = m.lang,
                            I = m.environment,
                            k = m.query,
                            !Re({
                                lang: y,
                                environment: I
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            w = (0,
                            p.tq)() ? g : h,
                            b = {
                                retcode: 0,
                                data: {}
                            },
                            S = w.baseUrl,
                            T = Se().stringify(k, {
                                addQueryPrefix: !0
                            }),
                            N = `${S}${T}${A.Lb[A.q5.BIND_EMAIL]}`,
                            N = Te(N, t || window.location.href),
                            R = {
                                web: A.JJ.REDIRECT,
                                mobile: A.JJ.REDIRECT
                            },
                            O = Oe(v, R),
                            N = Ne(N, O),
                            C = {
                                actionType: A.Us.ActionBindEmail,
                                actionTicket: o,
                                meta: {
                                    scene: i
                                }
                            },
                            (0,
                            rn.WZ)(C),
                            L = ke({
                                src: N,
                                uxMode: O,
                                iframeLevel: a,
                                loading: E
                            }),
                            we(L, l, _),
                            L.observer.on(f.Cs.BIND_EMAIL_SUCCESS, (function() {
                                L.destroy(),
                                u(b)
                            }
                            ));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Jn = function(e) {
            $n(e)
        }
          , Hn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.iframeLevel,
                            i = n.ticket,
                            a = n.onSuccess,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onError,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onLoad,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "bindThird"
                            }, n)),
                            J.binder_call_bind_third(n && Object.keys(n).join(",") || ""),
                            v = F(),
                            m = v.mobile,
                            g = v.web,
                            h = v.loading,
                            E = v.lang,
                            y = v.environment,
                            I = v.query,
                            !Re({
                                lang: E,
                                environment: y
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            k = (0,
                            p.tq)() ? m : g,
                            w = k.baseUrl,
                            b = Se().stringify(I, {
                                addQueryPrefix: !0
                            }),
                            S = `${w}${b}${A.Lb[A.q5.BIND_THIRD]}`,
                            S = Te(S, t || window.location.href),
                            T = {
                                web: A.JJ.REDIRECT,
                                mobile: A.JJ.REDIRECT
                            },
                            N = Oe(_, T),
                            S = Ne(S, N),
                            R = {
                                actionType: A.Us.ActionBindThirdParty,
                                actionTicket: i
                            },
                            (0,
                            rn.WZ)(R),
                            O = ke({
                                src: S,
                                uxMode: N,
                                iframeLevel: o,
                                loading: h
                            }),
                            we(O, s, d),
                            O.observer.on(f.Cs.BIND_THIRD_SUCCESS, (function(e) {
                                var n;
                                O.destroy(),
                                c(null !== (n = null === e || void 0 === e ? void 0 : e.userInfo) && void 0 !== n ? n : {})
                            }
                            ));
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , jn = function(e) {
            Hn(e)
        }
          , Wn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.iframeLevel,
                            a = n.onSuccess,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onError,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onLoad,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "rebindEmail"
                            }, n)),
                            J.binder_call_rebind_email(n && Object.keys(n).join(",") || ""),
                            v = F(),
                            m = v.mobile,
                            g = v.web,
                            h = v.loading,
                            E = v.lang,
                            y = v.environment,
                            I = v.query,
                            !Re({
                                lang: E,
                                environment: y
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            k = (0,
                            p.tq)() ? m : g,
                            w = {
                                retcode: 0,
                                data: {}
                            },
                            b = k.baseUrl,
                            S = Se().stringify(I, {
                                addQueryPrefix: !0
                            }),
                            T = `${b}${S}${A.Lb[A.q5.REBIND_EMAIL]}`,
                            T = Te(T, t || window.location.href),
                            N = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            R = Oe(_, N),
                            T = Ne(T, R),
                            O = {
                                actionType: A.Us.ActionRebindEmail,
                                actionTicket: o
                            },
                            (0,
                            rn.WZ)(O),
                            C = ke({
                                src: T,
                                uxMode: R,
                                iframeLevel: i,
                                loading: h
                            }),
                            we(C, s, d),
                            C.observer.on(f.Cs.REBIND_EMAIL_SUCCESS, (function() {
                                C.destroy(),
                                c(w)
                            }
                            ));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , zn = function(e) {
            Wn(e)
        }
          , qn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.iframeLevel,
                            a = n.onSuccess,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onError,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onLoad,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "bindUsername"
                            }, n)),
                            J.binder_call_bind_username(n && Object.keys(n).join(",") || ""),
                            v = F(),
                            m = v.mobile,
                            g = v.web,
                            h = v.loading,
                            E = v.lang,
                            y = v.environment,
                            I = v.query,
                            !Re({
                                lang: E,
                                environment: y
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            k = (0,
                            p.tq)() ? m : g,
                            w = {
                                retcode: 0,
                                data: {}
                            },
                            b = k.baseUrl,
                            S = Se().stringify(I, {
                                addQueryPrefix: !0
                            }),
                            T = `${b}${S}${A.Lb[A.q5.BIND_USERNAME]}`,
                            T = Te(T, t || window.location.href),
                            N = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            R = Oe(_, N),
                            T = Ne(T, R),
                            O = {
                                actionType: A.Us.ActionBindUsername,
                                actionTicket: o
                            },
                            (0,
                            rn.WZ)(O),
                            C = ke({
                                src: T,
                                uxMode: R,
                                iframeLevel: i,
                                loading: h
                            }),
                            we(C, s, d),
                            C.observer.on(f.Cs.BIND_USERNAME_SUCCESS, (function() {
                                C.destroy(),
                                c(w)
                            }
                            ));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Qn = function(e) {
            qn(e)
        }
          , Xn = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.redirectUrl,
                            o = n.ticket,
                            i = n.iframeLevel,
                            a = n.onSuccess,
                            c = void 0 === a ? function() {}
                            : a,
                            u = n.onError,
                            s = void 0 === u ? function() {}
                            : u,
                            l = n.onLoad,
                            d = void 0 === l ? function() {}
                            : l,
                            _ = n.uxMode,
                            re.info(ne.DB.JSSDK_INVOKE, (0,
                            r.Z)({
                                method: "bindMobile"
                            }, n)),
                            J.binder_call_bind_mobile(n && Object.keys(n).join(",") || ""),
                            v = F(),
                            m = v.mobile,
                            g = v.web,
                            h = v.loading,
                            E = v.lang,
                            y = v.environment,
                            I = v.query,
                            !Re({
                                lang: E,
                                environment: y
                            })) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            k = (0,
                            p.tq)() ? m : g,
                            w = {
                                retcode: 0,
                                data: {}
                            },
                            b = k.baseUrl,
                            S = Se().stringify(I, {
                                addQueryPrefix: !0
                            }),
                            T = `${b}${S}${A.Lb[A.q5.BIND_MOBILE]}`,
                            T = Te(T, t || window.location.href),
                            N = {
                                web: A.JJ.POPUP,
                                mobile: A.JJ.POPUP
                            },
                            R = Oe(_, N),
                            T = Ne(T, R),
                            O = {
                                actionType: A.Us.ActionBindMobile,
                                actionTicket: o
                            },
                            (0,
                            rn.WZ)(O),
                            C = ke({
                                src: T,
                                uxMode: R,
                                iframeLevel: i,
                                loading: h
                            }),
                            we(C, s, d),
                            C.observer.on(f.Cs.BIND_MOBILE_SUCCESS, (function() {
                                C.destroy(),
                                c(w)
                            }
                            ));
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , et = function(e) {
            Xn(e)
        }
          , nt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.ticket,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "unbindMobile"
                            }),
                            J.binder_call_unbind_mobile(n && Object.keys(n).join(",") || ""),
                            e.prev = 3,
                            e.next = 6,
                            We({
                                action_ticket: t
                            });
                        case 6:
                            return r = e.sent,
                            J.unbindMobile_success(),
                            e.abrupt("return", r);
                        case 11:
                            throw e.prev = 11,
                            e.t0 = e["catch"](3),
                            J.unbindMobile_fail({
                                error_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.retcode
                            }),
                            e.t0;
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 11]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , tt = (t(5165),
        t(54505))
          , rt = t(60369)
          , ot = t(86846)
          , it = t(75706)
          , at = t(65378)
          , ct = t(76767)
          , ut = t(568)
          , st = t(88260)
          , lt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, o, i, a, c, u, s, l, d, f, p, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.ticket,
                            r = n.thirdPartyType,
                            o = n.environment,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "bindThirdParty"
                            }),
                            J.binder_call_bind_thirdparty(n && Object.keys(n).join(",") || ""),
                            i = null,
                            r !== A.Yz.ThirdpartyFacebook) {
                                e.next = 19;
                                break
                            }
                            return a = (0,
                            rt.r)(o),
                            (0,
                            tt.Z)({
                                appId: a
                            }),
                            e.next = 9,
                            (0,
                            tt.A)();
                        case 9:
                            if (c = e.sent,
                            u = c.status,
                            s = c.authResponse,
                            "connected" === u) {
                                e.next = 13;
                                break
                            }
                            return e.abrupt("return");
                        case 13:
                            if (l = s.accessToken,
                            i = l,
                            i) {
                                e.next = 17;
                                break
                            }
                            return e.abrupt("return");
                        case 17:
                            e.next = 51;
                            break;
                        case 19:
                            if (r !== A.Yz.ThirdpartyTwitter) {
                                e.next = 28;
                                break
                            }
                            return (0,
                            ot.Z)({
                                environment: o
                            }),
                            e.next = 23,
                            (0,
                            ot.O)(en);
                        case 23:
                            d = e.sent,
                            f = d.access_token,
                            i = f,
                            e.next = 51;
                            break;
                        case 28:
                            if (r !== A.Yz.ThirdpartyApple) {
                                e.next = 40;
                                break
                            }
                            return (0,
                            it.Z)({
                                clientId: (0,
                                at.d)()
                            }),
                            e.next = 32,
                            (0,
                            it.g)();
                        case 32:
                            p = e.sent,
                            _ = p.authorization,
                            v = _.code,
                            m = _.id_token,
                            g = p.user || {},
                            h = g.name,
                            E = h || {},
                            y = E.firstName,
                            I = void 0 === y ? "" : y,
                            k = E.lastName,
                            w = void 0 === k ? "" : k,
                            b = E.middleName,
                            S = void 0 === b ? "" : b,
                            T = `${I}${S}${w}` || "apple",
                            i = (0,
                            ct.cv)(JSON.stringify({
                                auth_code: v,
                                id_token: m,
                                username: T
                            })),
                            e.next = 51;
                            break;
                        case 40:
                            if (r !== A.Yz.ThirdpartyGoogle) {
                                e.next = 51;
                                break
                            }
                            return N = null,
                            R = null,
                            O = st.C["production"],
                            e.next = 46,
                            (0,
                            ut.nP)({
                                client_id: O,
                                callback: function(e) {
                                    try {
                                        var n, t = btoa(JSON.stringify({
                                            authorization_code: e.code,
                                            redirect_url: window.location.origin,
                                            client_id: O
                                        }));
                                        null === (n = N) || void 0 === n || n(t)
                                    } catch (o) {
                                        var r;
                                        null === (r = R) || void 0 === r || r()
                                    }
                                },
                                scope: "email profile"
                            });
                        case 46:
                            return (0,
                            ut.nS)(),
                            e.next = 49,
                            new Promise((function(e, n) {
                                N = e,
                                R = n
                            }
                            ));
                        case 49:
                            C = e.sent,
                            i = C;
                        case 51:
                            if (e.prev = 51,
                            ![A.Yz.ThirdpartyApple, A.Yz.ThirdpartyFacebook, A.Yz.ThirdpartyGoogle, A.Yz.ThirdpartyTwitter].includes(r) || i) {
                                e.next = 54;
                                break
                            }
                            return e.abrupt("return");
                        case 54:
                            return e.next = 56,
                            qe({
                                action_ticket: t,
                                token: i,
                                thirdparty_type: r
                            });
                        case 56:
                            return L = e.sent,
                            J.bindThirdparty_success({
                                thirdpartyType: r
                            }),
                            e.abrupt("return", L);
                        case 61:
                            throw e.prev = 61,
                            e.t0 = e["catch"](51),
                            J.bindThirdparty_fail({
                                thirdpartyType: r,
                                error_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.retcode
                            }),
                            e.t0;
                        case 65:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[51, 61]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , dt = t(63009)
          , ft = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, o, i, a, c, u, s, l, d, f, p, _, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L, P, x, D, B;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.ticket,
                            o = n.thirdPartyType,
                            i = n.environment,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "unbindThirdParty"
                            }),
                            J.binder_call_bind_unthirdparty(n && Object.keys(n).join(",") || ""),
                            a = null,
                            o !== A.Yz.ThirdpartyFacebook) {
                                e.next = 19;
                                break
                            }
                            return c = (0,
                            rt.r)(i),
                            (0,
                            tt.Z)({
                                appId: c
                            }),
                            e.next = 9,
                            (0,
                            tt.A)();
                        case 9:
                            if (u = e.sent,
                            s = u.status,
                            l = u.authResponse,
                            "connected" === s) {
                                e.next = 13;
                                break
                            }
                            return e.abrupt("return");
                        case 13:
                            if (d = l.accessToken,
                            a = d,
                            a) {
                                e.next = 17;
                                break
                            }
                            return e.abrupt("return");
                        case 17:
                            e.next = 61;
                            break;
                        case 19:
                            if (o !== A.Yz.ThirdpartyTwitter) {
                                e.next = 28;
                                break
                            }
                            return (0,
                            ot.Z)({
                                environment: i
                            }),
                            e.next = 23,
                            (0,
                            ot.O)(en);
                        case 23:
                            f = e.sent,
                            p = f.access_token,
                            a = p,
                            e.next = 61;
                            break;
                        case 28:
                            if (o !== A.Yz.ThirdpartyApple) {
                                e.next = 40;
                                break
                            }
                            return (0,
                            it.Z)({
                                clientId: (0,
                                at.d)()
                            }),
                            e.next = 32,
                            (0,
                            it.g)();
                        case 32:
                            _ = e.sent,
                            v = _.authorization,
                            m = v.code,
                            g = v.id_token,
                            h = _.user || {},
                            E = h.name,
                            y = E || {},
                            I = y.firstName,
                            k = void 0 === I ? "" : I,
                            w = y.lastName,
                            b = void 0 === w ? "" : w,
                            S = y.middleName,
                            T = void 0 === S ? "" : S,
                            N = `${k}${T}${b}` || "apple",
                            a = (0,
                            ct.cv)(JSON.stringify({
                                auth_code: m,
                                id_token: g,
                                username: N
                            })),
                            e.next = 61;
                            break;
                        case 40:
                            if (o !== A.Yz.ThirdpartyGoogle) {
                                e.next = 53;
                                break
                            }
                            return R = null,
                            O = null,
                            C = st.C["production"],
                            e.next = 46,
                            (0,
                            ut.nP)({
                                client_id: C,
                                callback: function(e) {
                                    try {
                                        var n, t = btoa(JSON.stringify({
                                            authorization_code: e.code,
                                            redirect_url: window.location.origin,
                                            client_id: C
                                        }));
                                        null === (n = R) || void 0 === n || n(t)
                                    } catch (o) {
                                        var r;
                                        null === (r = O) || void 0 === r || r()
                                    }
                                },
                                scope: "email profile"
                            });
                        case 46:
                            return (0,
                            ut.nS)(),
                            e.next = 49,
                            new Promise((function(e, n) {
                                R = e,
                                O = n
                            }
                            ));
                        case 49:
                            L = e.sent,
                            a = L,
                            e.next = 61;
                            break;
                        case 53:
                            if (o !== A.Yz.ThirdpartySteam) {
                                e.next = 61;
                                break
                            }
                            return P = (0,
                            dt.Eg)(),
                            P.init({
                                environment: i
                            }),
                            e.next = 58,
                            P.signIn();
                        case 58:
                            x = e.sent,
                            D = x.access_token,
                            a = D;
                        case 61:
                            if (e.prev = 61,
                            ![A.Yz.ThirdpartyApple, A.Yz.ThirdpartyFacebook, A.Yz.ThirdpartyGoogle, A.Yz.ThirdpartyTwitter, A.Yz.ThirdpartySteam].includes(o) || a) {
                                e.next = 64;
                                break
                            }
                            return e.abrupt("return");
                        case 64:
                            return e.next = 66,
                            Xe((0,
                            r.Z)((0,
                            r.Z)({
                                action_ticket: t
                            }, null !== a && {
                                token: a
                            }), {}, {
                                thirdparty_type: o
                            }));
                        case 66:
                            return B = e.sent,
                            J.unbindThirdparty_success({
                                thirdpartyType: o
                            }),
                            e.abrupt("return", B);
                        case 71:
                            throw e.prev = 71,
                            e.t0 = e["catch"](61),
                            J.unbindThirdparty_fail({
                                thirdpartyType: o,
                                error_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.retcode
                            }),
                            e.t0;
                        case 75:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[61, 71]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , pt = {
            bindEmail: Jn,
            bindThird: jn
        }
          , _t = {
            bindEmail: Jn,
            bindThird: jn,
            rebindEmail: zn,
            bindUsername: Qn,
            bindMobile: et,
            unbindMobile: nt,
            bindThirdParty: lt,
            unbindThirdParty: ft
        }
          , vt = ce.post
          , mt = function(e, n, t) {
            return vt(`${n}/genAuthKeyByCookieToken`, e, t)
        }
          , gt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, o, i, a, c, u, s;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.gameBiz,
                            r = n.region,
                            o = n.gameUid,
                            i = n.authAppid,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "genAuthKey"
                            }),
                            J.verifier_call_gen_auth_key(n && Object.keys(n).join(",") || ""),
                            a = F(),
                            c = a.environment,
                            u = null !== c && void 0 !== c ? c : "production",
                            s = `${S.Z[u].BINDING_API_BASE.replace("hoyoverse.com", (0,
                            v.K)())}/account/binding/api`,
                            e.next = 8,
                            mt({
                                game_biz: t,
                                region: r,
                                game_uid: o,
                                auth_appid: i
                            }, s);
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , ht = ["game_biz"]
          , Et = ce.post
          , yt = function(e, n, t) {
            var r = e.game_biz
              , i = (0,
            o.Z)(e, ht);
            return Et(`${n}/${r}/combo/granter/api/compareUgcProtocolVersion`, i, t)
        }
          , It = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, o, i, a, c, u, s, l, d, f, p;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.gameBiz,
                            r = n.appId,
                            o = n.language,
                            i = n.channelId,
                            a = F(),
                            c = a.environment,
                            u = null !== c && void 0 !== c ? c : "production",
                            l = S.Z[u].SDK_API_BASE,
                            "string" !== typeof l ? (d = t.split("_"),
                            f = (0,
                            Le.Z)(d, 1),
                            p = f[0],
                            s = l[p]) : s = l,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "compareUgcProtocolVersion",
                                payload: {
                                    opts: n,
                                    baseUrl: s
                                }
                            }),
                            J.verifier_call_compare_ugc_protocol_version(n && Object.keys(n).join(",") || ""),
                            e.next = 9,
                            yt({
                                game_biz: t,
                                app_id: r,
                                language: o,
                                channel_id: i
                            }, s, {
                                enableLrsag: !1,
                                withCredentials: !1,
                                loading: !1,
                                errorToast: !1
                            });
                        case 9:
                            return e.abrupt("return", e.sent);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , kt = {
            genAuthKey: gt,
            compareUgcProtocolVersion: It
        }
          , wt = "/ma-open-platform/api"
          , bt = ce.get
          , At = ce.post
          , St = function(e) {
            return bt(`${wt}/oauth/info`, {
                params: e
            })
        }
          , Tt = function(e, n) {
            return At(`${wt}/oauth/authorize`, e, n)
        }
          , Nt = function() {
            return bt(`${wt}/authorizations`)
        }
          , Rt = function(e, n) {
            return At(`${wt}/authorization/revoke`, e, n)
        }
          , Ot = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.clientId,
                            r = n.scope,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "getOAuthInfo"
                            }),
                            J.passport_call_get_oauth_info(n && Object.keys(n).join(",") || ""),
                            e.next = 5,
                            St({
                                client_id: t,
                                scope: r
                            });
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Ct = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, o, i, a, c;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.responseType,
                            r = n.clientId,
                            o = n.redirectUri,
                            i = n.scope,
                            a = n.grant,
                            c = n.state,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "authorizeOAuth"
                            }),
                            J.passport_call_oauth_authorize(n && Object.keys(n).join(",") || ""),
                            e.next = 5,
                            Tt({
                                response_type: t,
                                client_id: r,
                                redirect_uri: o,
                                scope: i,
                                grant: a,
                                state: c
                            });
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Lt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return re.info(ne.DB.JSSDK_INVOKE, {
                                method: "listOAuths"
                            }),
                            J.passport_call_list_oauths(),
                            e.next = 4,
                            Nt();
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Pt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, r, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.clientId,
                            r = n.openId,
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "revokeOAuth"
                            }),
                            J.passport_call_revoke_oauth(n && Object.keys(n).join(",") || ""),
                            e.prev = 3,
                            e.next = 6,
                            Rt({
                                client_id: t,
                                open_id: r
                            });
                        case 6:
                            return o = e.sent,
                            J.authApps_remove_success({
                                client_id: t
                            }),
                            e.abrupt("return", o);
                        case 11:
                            throw e.prev = 11,
                            e.t0 = e["catch"](3),
                            J.authApps_remove_fail({
                                client_id: t,
                                error_code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.retcode
                            }),
                            e.t0;
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 11]])
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , xt = {
            getOAuthInfo: Ot,
            authorize: Ct,
            listOAuths: Lt,
            revokeOAuth: Pt
        }
          , Dt = !1
          , Bt = null
          , Ut = function(e) {
            var n = e.environment
              , t = e.gameBiz
              , r = e.clientType
              , o = (0,
            p.YR)(r);
            Dt || (o ? d().initInWebview() : d().init({
                environment: n === A.Vi.ue ? A.Vi.production : n,
                isSea: !0,
                gameBiz: t || "account_os",
                extraDataMap: {
                    packageVersion: K.J
                }
            })),
            Dt = !0
        }
          , Zt = function(e) {
            var n, t = e.innerBoxConfig, r = e.environment, o = void 0 === r ? "production" : r, i = e.gameBiz, a = e.lang, c = e.appId, u = e.clientType, s = e.extraSdkInfo;
            ce.defaults.baseURL = null === (n = S.Z[o].API_BASE) || void 0 === n || null === (n = n.SG) || void 0 === n ? void 0 : n.replace("hoyoverse.com", (0,
            v.K)()),
            ie.BOX = S.Z[o].BOX_API_BASE,
            Bt && ce.interceptors.request.eject(Bt),
            Bt = ce.interceptors.request.use((0,
            q.pv)({
                isEnabled: function() {
                    return t && (0,
                    Q.Ut)((0,
                    Q.R7)(), !1),
                    (0,
                    q.ID)(Q.c2)
                },
                apiBaseMap: S.Z[o].API_BASE
            }));
            var l = {
                "x-rpc-language": a,
                "x-rpc-game_biz": i,
                "x-rpc-app_id": c,
                "x-rpc-source": A.v9,
                "x-rpc-sdk_version": null === s || void 0 === s ? void 0 : s.sdk_version,
                "x-rpc-device_fp": null === s || void 0 === s ? void 0 : s.device_fp,
                "x-rpc-device_id": null === s || void 0 === s ? void 0 : s.device_id,
                "x-rpc-lifecycle_id": null === s || void 0 === s ? void 0 : s.lifecycle_id,
                "x-rpc-device_model": null === s || void 0 === s ? void 0 : s.device_model,
                "x-rpc-device_name": null === s || void 0 === s ? void 0 : s.device_name,
                "x-rpc-device_os": null === s || void 0 === s ? void 0 : s.device_os,
                "x-rpc-client_type": u,
                "x-rpc-referrer": window.location.href,
                "x-rpc-aigis_v4": !0,
                "x-rpc-age_gate": !0
            };
            ce.defaults.headers = l
        }
          , Gt = t(86169)
          , Mt = t.n(Gt)
          , Ft = "/combo"
          , Kt = ce.get
          , Yt = function() {
            return Kt(`${Ft}/box/api/config/${A.oU}/${A.Pt}`, {
                baseURL: ie.BOX,
                params: {
                    type: "common"
                },
                enableLrsag: !1,
                httpH5log: !1,
                withCredentials: !1
            })
        }
          , Vt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e() {
                var n, t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0,
                            (0,
                            Q._q)()) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            Yt();
                        case 5:
                            n = e.sent,
                            t = n.vals,
                            (0,
                            Q.Ut)(t),
                            e.next = 12;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e["catch"](0);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 10]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , $t = ["plugins", "syncLoginStatus", "inner", "loading"]
          , Jt = F()
          , Ht = Jt.getCurrentInitOpts
          , jt = {
            registerModule: function(e, n) {
                Xt[e] = n
            }
        }
          , Wt = null
          , zt = function(e) {
            var n = e.plugins
              , t = void 0 === n ? [] : n;
            0 !== t.length && t.forEach((function(n) {
                n(jt, e, Xt)
            }
            ))
        }
          , qt = function() {
            var e = (0,
            i.Z)(regeneratorRuntime.mark((function e(n) {
                var t, i, a, u, l, f, v, m, g, h, E, y, I, k, w, b, S, T, N, R, O, C, L, P, x, D, B, Z, G, F, Y, V, H, j, W, z, q, Q, X, ee, te, oe, ie, ae;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (i = Mt()(Wt, n),
                            a = i.appId,
                            u = i.gameBiz,
                            l = i.environment,
                            f = i.tokenType,
                            v = i.loading,
                            m = i.loadTimeout,
                            g = i.clientType,
                            h = i.appearance,
                            E = i.communityInit,
                            y = i.communityBiz,
                            I = i.lang,
                            k = void 0 === I ? "en" : I,
                            w = i.colorMode,
                            b = i.theme,
                            S = i.syncLoginStatus,
                            T = void 0 === S || S,
                            N = i.autotest,
                            R = void 0 !== N && N,
                            O = i.optionalAgreement,
                            C = void 0 === O ? [] : O,
                            L = i.extraTrackingInfo,
                            P = void 0 === L ? {} : L,
                            x = i.plugins,
                            void 0 === x ? [] : x,
                            D = i.inner,
                            B = void 0 !== D && D,
                            Z = i.innerBoxConfig,
                            G = void 0 !== Z && Z,
                            F = i.extraSdkInfo,
                            Y = i.hideLogo,
                            V = (0,
                            p.gh)(b),
                            H = !(!window.communityInitSea || !E),
                            j = (0,
                            p.Fg)(w),
                            W = null !== g && void 0 !== g ? g : (0,
                            p.tq)() ? A.Bh.WAP : A.Bh.WEB,
                            f && a && l && u) {
                                e.next = 9;
                                break
                            }
                            return console.warn("必传参数environment, appId, gameBiz, tokenType"),
                            e.abrupt("return");
                        case 9:
                            return Ut({
                                environment: l,
                                gameBiz: u
                            }),
                            z = (null === F || void 0 === F ? void 0 : F.lifecycle_id) || (0,
                            p.k$)(),
                            q = (null === F || void 0 === F ? void 0 : F.device_id) || s().getUuid(),
                            Q = (null === F || void 0 === F ? void 0 : F.device_fp) || d().getDeviceFp(),
                            X = (null === F || void 0 === F ? void 0 : F.device_model) || `${c().name} ${c().version}`,
                            ee = (null === F || void 0 === F ? void 0 : F.device_name) || `${c().name} ${c().version}`,
                            te = (null === F || void 0 === F ? void 0 : F.device_os) || (null === (t = c().os) || void 0 === t ? void 0 : t.toString()),
                            oe = (null === F || void 0 === F ? void 0 : F.sdk_version) || K.J,
                            ie = {
                                lifecycle_id: z,
                                device_id: q,
                                device_fp: Q,
                                sdk_version: oe,
                                device_model: X,
                                device_name: ee,
                                device_os: te
                            },
                            B ? (0,
                            U.b7)(A.Z1.SESSION_STORAGE)(A.BU.EXTRA_HEADER_INFO, ie) : (0,
                            U.b7)(A.Z1.COOKIE)(A.BU.LIFECYCLE_ID, {
                                value: z
                            }),
                            re.initial("ue" === l ? A.Vi.production : l, "ue" !== l),
                            i.plugins,
                            i.syncLoginStatus,
                            i.inner,
                            i.loading,
                            ae = (0,
                            o.Z)(i, $t),
                            re.setCommonInfo((0,
                            r.Z)((0,
                            r.Z)((0,
                            r.Z)({}, ae), ie), {}, {
                                business_url: window.location.href,
                                app_name: "login-platform-sdk"
                            })),
                            re.info(ne.DB.JSSDK_INVOKE, {
                                method: "init"
                            }),
                            zt(n),
                            M({
                                optionalAgreement: C,
                                environment: l,
                                lang: k,
                                clientType: W,
                                tokenType: f,
                                appearance: h,
                                appId: a,
                                gameBiz: u,
                                communityInit: H,
                                communityBiz: y,
                                colorMode: j,
                                theme: V,
                                extraTrackingInfo: P,
                                syncLoginStatus: T,
                                autotest: R,
                                loading: v,
                                inner: B,
                                extraSdkInfo: ie,
                                loadTimeout: m,
                                hideLogo: Y,
                                innerBoxConfig: G
                            }),
                            Zt({
                                innerBoxConfig: G,
                                environment: l,
                                lang: k,
                                gameBiz: u,
                                appId: a,
                                clientType: W,
                                tokenType: f,
                                theme: V,
                                colorMode: j,
                                extraSdkInfo: ie
                            }),
                            G || Vt(),
                            $.init(),
                            J.init_call((0,
                            r.Z)({
                                appId: a,
                                gameBiz: u,
                                environment: l,
                                tokenType: f,
                                loading: v,
                                lang: k,
                                colorMode: j,
                                theme: V,
                                syncLoginStatus: T,
                                autotest: R,
                                optionalAgreement: C,
                                inner: B
                            }, (0,
                            _.Y)(ie))),
                            e.abrupt("return");
                        case 30:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
          , Qt = function(e) {
            if (e) {
                var n = Ht();
                if (n && 0 !== Object.keys(n).length) {
                    var t = Mt()(n, e);
                    M(t),
                    Zt(t)
                } else
                    Wt = Mt()(Wt, e)
            }
        }
          , Xt = {
            init: qt,
            updateInitOptions: Qt,
            h5logger: re,
            events: Ee,
            passport: Nn,
            verifier: Vn,
            binder: pt,
            misc: kt,
            version: K.J
        }
          , er = {
            init: qt,
            updateInitOptions: Qt,
            h5logger: re,
            events: Ee,
            passport: Rn,
            verifier: Vn,
            binder: _t,
            misc: kt,
            auth: xt,
            version: K.J
        }
          , nr = Xt
    },
    66423: function(e, n, t) {
        "use strict";
        t.d(n, {
            J: function() {
                return o
            }
        });
        var r = {
            i8: "2.49.0"
        }
          , o = r.i8
    },
    79630: function(e, n, t) {
        t(75428),
        t(53861),
        t(86937),
        t(95151),
        function(e) {
            "use strict";
            if ("undefined" === typeof e)
                throw new Error("Geetest requires browser environment");
            var n = e.document
              , t = e.Math
              , r = n.getElementsByTagName("head")[0];
            function o(e) {
                this._obj = e
            }
            function i(e) {
                var n = this;
                new o(e)._each((function(e, t) {
                    n[e] = t
                }
                ))
            }
            o.prototype = {
                _each: function(e) {
                    var n = this._obj;
                    for (var t in n)
                        n.hasOwnProperty(t) && e(t, n[t]);
                    return this
                }
            },
            i.prototype = {
                api_server: "api.geetest.com",
                protocol: "http://",
                typePath: "/gettype.php",
                fallback_config: {
                    slide: {
                        static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                        type: "slide",
                        slide: "/static/js/geetest.0.0.0.js"
                    },
                    fullpage: {
                        static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                        type: "fullpage",
                        fullpage: "/static/js/fullpage.0.0.0.js"
                    }
                },
                _get_fallback_config: function() {
                    var e = this;
                    return c(e.type) ? e.fallback_config[e.type] : e.new_captcha ? e.fallback_config.fullpage : e.fallback_config.slide
                },
                _extend: function(e) {
                    var n = this;
                    new o(e)._each((function(e, t) {
                        n[e] = t
                    }
                    ))
                }
            };
            var a = function(e) {
                return "number" === typeof e
            }
              , c = function(e) {
                return "string" === typeof e
            }
              , u = function(e) {
                return "boolean" === typeof e
            }
              , s = function(e) {
                return "object" === typeof e && null !== e
            }
              , l = function(e) {
                return "function" === typeof e
            }
              , d = /Mobi/i.test(navigator.userAgent)
              , f = d ? 3 : 0
              , p = {}
              , _ = {}
              , v = function() {
                var e = new Date
                  , n = e.getFullYear()
                  , t = e.getMonth() + 1
                  , r = e.getDate()
                  , o = e.getHours()
                  , i = e.getMinutes()
                  , a = e.getSeconds();
                t >= 1 && t <= 9 && (t = "0" + t),
                r >= 0 && r <= 9 && (r = "0" + r),
                o >= 0 && o <= 9 && (o = "0" + o),
                i >= 0 && i <= 9 && (i = "0" + i),
                a >= 0 && a <= 9 && (a = "0" + a);
                var c = n + "-" + t + "-" + r + " " + o + ":" + i + ":" + a;
                return c
            }
              , m = function() {
                return parseInt(1e4 * t.random()) + (new Date).valueOf()
            }
              , g = function(e, t) {
                var o = n.createElement("script");
                o.charset = "UTF-8",
                o.async = !0,
                /static\.geetest\.com/g.test(e) && (o.crossOrigin = "anonymous"),
                o.onerror = function() {
                    t(!0)
                }
                ;
                var i = !1;
                o.onload = o.onreadystatechange = function() {
                    i || o.readyState && "loaded" !== o.readyState && "complete" !== o.readyState || (i = !0,
                    setTimeout((function() {
                        t(!1)
                    }
                    ), 0))
                }
                ,
                o.src = e,
                r.appendChild(o)
            }
              , h = function(e) {
                return e.replace(/^https?:\/\/|\/$/g, "")
            }
              , E = function(e) {
                return e = e.replace(/\/+/g, "/"),
                0 !== e.indexOf("/") && (e = "/" + e),
                e
            }
              , y = function(e) {
                if (!e)
                    return "";
                var n = "?";
                return new o(e)._each((function(e, t) {
                    (c(t) || a(t) || u(t)) && (n = n + encodeURIComponent(e) + "=" + encodeURIComponent(t) + "&")
                }
                )),
                "?" === n && (n = ""),
                n.replace(/&$/, "")
            }
              , I = function(e, n, t, r) {
                n = h(n);
                var o = E(t) + y(r);
                return n && (o = e + n + o),
                o
            }
              , k = function(e, n, t, r, o, i, a) {
                var c = function c(u) {
                    var s = I(t, r[u], o, i);
                    g(s, (function(i) {
                        if (i)
                            if (u >= r.length - 1) {
                                if (a(!0),
                                n) {
                                    e.error_code = 508;
                                    var s = t + r[u] + o;
                                    b(e, s)
                                }
                            } else
                                c(u + 1);
                        else
                            a(!1)
                    }
                    ))
                };
                c(0)
            }
              , w = function(n, t, r, o) {
                if (s(r.getLib))
                    return r._extend(r.getLib),
                    void o(r);
                if (r.offline)
                    o(r._get_fallback_config());
                else {
                    var i = "geetest_" + m();
                    e[i] = function(n) {
                        "success" == n.status ? o(n.data) : n.status ? o(r._get_fallback_config()) : o(n),
                        e[i] = void 0;
                        try {
                            delete e[i]
                        } catch (t) {}
                    }
                    ,
                    k(r, !0, r.protocol, n, t, {
                        gt: r.gt,
                        callback: i
                    }, (function(e) {
                        e && o(r._get_fallback_config())
                    }
                    ))
                }
            }
              , b = function(e, n) {
                k(e, !1, e.protocol, ["monitor.geetest.com"], "/monitor/send", {
                    time: v(),
                    captcha_id: e.gt,
                    challenge: e.challenge,
                    pt: f,
                    exception_url: n,
                    error_code: e.error_code
                }, (function(e) {}
                ))
            }
              , A = function(e, n) {
                var t = {
                    networkError: "网络错误",
                    gtTypeError: "gt字段不是字符串类型"
                };
                if ("function" !== typeof n.onError)
                    throw new Error(t[e]);
                n.onError(t[e])
            }
              , S = function() {
                return e.Geetest || n.getElementById("gt_lib")
            };
            S() && (_.slide = "loaded"),
            e.initGeetest = function(n, t) {
                var r = new i(n);
                n.https ? r.protocol = "https://" : n.protocol || (r.protocol = e.location.protocol + "//"),
                "050cffef4ae57b5d5e529fea9540b0d1" !== n.gt && "3bd38408ae4af923ed36e13819b14d42" !== n.gt || (r.apiserver = "yumchina.geetest.com/",
                r.api_server = "yumchina.geetest.com"),
                n.gt && (e.GeeGT = n.gt),
                n.challenge && (e.GeeChallenge = n.challenge),
                s(n.getType) && r._extend(n.getType),
                w([r.api_server || r.apiserver], r.typePath, r, (function(n) {
                    var o = n.type
                      , i = function() {
                        r._extend(n),
                        t(new e.Geetest(r))
                    };
                    p[o] = p[o] || [];
                    var a = _[o] || "init";
                    "init" === a ? (_[o] = "loading",
                    p[o].push(i),
                    k(r, !0, r.protocol, n.static_servers || n.domains, n[o] || n.path, null, (function(e) {
                        if (e)
                            _[o] = "fail",
                            A("networkError", r);
                        else {
                            _[o] = "loaded";
                            for (var n = p[o], t = 0, i = n.length; t < i; t += 1) {
                                var a = n[t];
                                l(a) && a()
                            }
                            p[o] = []
                        }
                    }
                    ))) : "loaded" === a ? i() : "fail" === a ? A("networkError", r) : "loading" === a && p[o].push(i)
                }
                ))
            }
        }(window)
    },
    32467: function(e, n, t) {
        t(75428),
        t(53861),
        t(95151),
        t(71935),
        t(78766),
        t(86937),
        t(35533),
        t(27920),
        function(e) {
            "use strict";
            if ("undefined" === typeof e)
                throw new Error("Geetest requires browser environment");
            var n = e.document
              , t = e.Math
              , r = n.getElementsByTagName("head")[0]
              , o = 1e4;
            function i(e) {
                this._obj = e
            }
            i.prototype = {
                _each: function(e) {
                    var n = this._obj;
                    for (var t in n)
                        n.hasOwnProperty(t) && e(t, n[t]);
                    return this
                },
                _extend: function(e) {
                    var n = this;
                    new i(e)._each((function(e, t) {
                        n._obj[e] = t
                    }
                    ))
                }
            };
            var a = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var n = 16 * t.random() | 0
                      , r = "x" === e ? n : 3 & n | 8;
                    return r.toString(16)
                }
                ))
            };
            function c(e) {
                var n = this;
                new i(e)._each((function(e, t) {
                    n[e] = t
                }
                ))
            }
            c.prototype = {
                apiServers: ["gcaptcha4.geetest.com", "gcaptcha4.geevisit.com", "gcaptcha4.gsensebot.com"],
                staticServers: ["static.geetest.com", "static.geevisit.com"],
                protocol: "http://",
                typePath: "/load",
                fallback_config: {
                    bypass: {
                        staticServers: ["static.geetest.com", "static.geevisit.com"],
                        type: "bypass",
                        bypass: "/v4/bypass.js"
                    }
                },
                _get_fallback_config: function() {
                    var e = this;
                    return s(e.type) ? e.fallback_config[e.type] : e.fallback_config.bypass
                },
                _extend: function(e) {
                    var n = this;
                    new i(e)._each((function(e, t) {
                        n[e] = t
                    }
                    ))
                }
            };
            var u = function(e) {
                return "number" === typeof e
            }
              , s = function(e) {
                return "string" === typeof e
            }
              , l = function(e) {
                return "boolean" === typeof e
            }
              , d = function(e) {
                return "object" === typeof e && null !== e
            }
              , f = function(e) {
                return "function" === typeof e
            }
              , p = /Mobi/i.test(navigator.userAgent)
              , _ = {}
              , v = {}
              , m = function() {
                return parseInt(1e4 * t.random()) + (new Date).valueOf()
            }
              , g = function(e, n) {
                if ("function" === typeof e) {
                    var t = Array.prototype.slice.call(arguments, 2);
                    return Function.prototype.bind ? e.bind(n, t) : function() {
                        var r = Array.prototype.slice.call(arguments);
                        return e.apply(n, t.concat(r))
                    }
                }
            }
              , h = Object.prototype.toString
              , E = function(e) {
                return "function" === typeof e
            }
              , y = function(e) {
                return e === Object(e)
            }
              , I = function(e) {
                return "[object Array]" == h.call(e)
            }
              , k = function(e) {
                return "[object Date]" == h.call(e)
            }
              , w = function(e) {
                return "[object RegExp]" == h.call(e)
            }
              , b = function(e) {
                return "[object Boolean]" == h.call(e)
            };
            function A(e) {
                return e.replace(/(\S)(_([a-zA-Z]))/g, (function(e, n, t, r) {
                    return n + r.toUpperCase() || ""
                }
                ))
            }
            function S(e, n) {
                if (!y(e) || k(e) || w(e) || b(e) || E(e))
                    return n ? A(e) : e;
                if (I(e))
                    for (var t = [], r = 0; r < e.length; r++)
                        t.push(S(e[r]));
                else {
                    t = {};
                    for (var o in e)
                        e.hasOwnProperty(o) && (t[S(o, !0)] = S(e[o]))
                }
                return t
            }
            var T = function(e, t, i) {
                var a = n.createElement("script");
                a.charset = "UTF-8",
                a.async = !0,
                /static\.geetest\.com/g.test(e) && (a.crossOrigin = "anonymous"),
                a.onerror = function() {
                    t(!0),
                    c = !0
                }
                ;
                var c = !1;
                a.onload = a.onreadystatechange = function() {
                    c || a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (c = !0,
                    setTimeout((function() {
                        t(!1)
                    }
                    ), 0))
                }
                ,
                a.src = e,
                r.appendChild(a),
                setTimeout((function() {
                    c || (a.onerror = a.onload = null,
                    a.remove && a.remove(),
                    t(!0))
                }
                ), i || o)
            }
              , N = function(e) {
                return e.replace(/^https?:\/\/|\/$/g, "")
            }
              , R = function(e) {
                return e = e && e.replace(/\/+/g, "/"),
                0 !== e.indexOf("/") && (e = "/" + e),
                e
            }
              , O = function(e) {
                if (!e)
                    return "";
                var n = "?";
                return new i(e)._each((function(e, t) {
                    (s(t) || u(t) || l(t)) && (n = n + encodeURIComponent(e) + "=" + encodeURIComponent(t) + "&")
                }
                )),
                "?" === n && (n = ""),
                n.replace(/&$/, "")
            }
              , C = function(e, n, t, r) {
                n = N(n);
                var o = R(t) + O(r);
                return n && (o = e + n + o),
                o
            }
              , L = function(n, t, r, o, i, a, c) {
                var u = function u(s) {
                    if (c) {
                        var l = "geetest_" + m();
                        e[l] = g(c, null, l),
                        i.callback = l
                    }
                    var d = C(t, r[s], o, i);
                    T(d, (function(n) {
                        if (n) {
                            if (l)
                                try {
                                    e[l] = function() {
                                        e[l] = null
                                    }
                                } catch (t) {}
                            s >= r.length - 1 ? a(!0) : u(s + 1)
                        } else
                            a(!1)
                    }
                    ), n.timeout)
                };
                u(0)
            }
              , P = function(n, t, r, o) {
                var i = function(n, t) {
                    "success" == t.status ? o(t.data) : (t.status,
                    o(t)),
                    e[n] = void 0;
                    try {
                        delete e[n]
                    } catch (r) {}
                };
                L(r, r.protocol, n, t, {
                    callback: "",
                    captcha_id: r.captchaId,
                    challenge: r.challenge || a(),
                    client_type: p ? "h5" : "web",
                    risk_type: r.riskType,
                    user_info: r.userInfo,
                    call_type: r.callType,
                    lang: r.language ? r.language : "Netscape" === navigator.appName ? navigator.language.toLowerCase() : navigator.userLanguage.toLowerCase()
                }, (function(e) {
                    e && "function" === typeof r.offlineCb ? r.offlineCb() : e && o(r._get_fallback_config())
                }
                ), i)
            }
              , x = function(e, n, t) {
                var r = {
                    networkError: "ç½‘ç»œé”™è¯¯",
                    gtTypeError: "gtå­—æ®µä¸æ˜¯å­—ç¬¦ä¸²ç±»åž‹"
                };
                if ("function" !== typeof n.onError)
                    throw new Error(r[e]);
                n.onError({
                    desc: t.desc,
                    msg: t.msg,
                    code: t.code
                })
            }
              , D = function() {
                return e.Geetest || n.getElementById("gt_lib")
            };
            D() && (v.slide = "loaded");
            var B = function(e) {
                var t = !1
                  , r = {
                    js: "script",
                    css: "link"
                }
                  , o = e && r[e.split(".").pop()];
                if (void 0 !== o) {
                    var i = n.getElementsByTagName(o);
                    for (var a in i)
                        (i[a].href && i[a].href.toString().indexOf(e) > 0 || i[a].src && i[a].src.toString().indexOf(e) > 0) && (t = !0)
                }
                return t
            };
            e.initGeetest4 = function(n, t) {
                var r = new c(n);
                n.https ? r.protocol = "https://" : n.protocol || (r.protocol = e.location.protocol + "//"),
                d(n.getType) && r._extend(n.getType),
                P(r.apiServers, r.typePath, r, (function(n) {
                    n = S(n);
                    if ("error" === n.status)
                        return x("networkError", r, n);
                    var o = n.type;
                    r.debug && new i(n)._extend(r.debug);
                    var a = function() {
                        r._extend(n),
                        t(new e.Geetest4(r))
                    };
                    _[o] = _[o] || [];
                    var c = v[o] || "init";
                    if ("init" === c)
                        v[o] = "loading",
                        _[o].push(a),
                        n.gctPath && L(r, r.protocol, Object.hasOwnProperty.call(r, "staticServers") ? r.staticServers : n.staticServers || r.staticServers, n.gctPath, null, (function(e) {
                            e && x("networkError", r, {
                                code: "60205",
                                msg: "Network failure",
                                desc: {
                                    detail: "gct resource load timeout"
                                }
                            })
                        }
                        )),
                        L(r, r.protocol, Object.hasOwnProperty.call(r, "staticServers") ? r.staticServers : n.staticServers || r.staticServers, n.bypass || n.staticPath + n.js, null, (function(e) {
                            if (e)
                                v[o] = "fail",
                                x("networkError", r, {
                                    code: "60204",
                                    msg: "Network failure",
                                    desc: {
                                        detail: "js resource load timeout"
                                    }
                                });
                            else {
                                v[o] = "loaded";
                                for (var n = _[o], t = 0, i = n.length; t < i; t += 1) {
                                    var a = n[t];
                                    f(a) && a()
                                }
                                _[o] = [],
                                v[o] = "init"
                            }
                        }
                        ));
                    else {
                        if ("loaded" === c)
                            return n.gctPath && !B(n.gctPath) && L(r, r.protocol, Object.hasOwnProperty.call(r, "staticServers") ? r.staticServers : n.staticServers || r.staticServers, n.gctPath, null, (function(e) {
                                e && x("networkError", r, {
                                    code: "60205",
                                    msg: "Network failure",
                                    desc: {
                                        detail: "gct resource load timeout"
                                    }
                                })
                            }
                            )),
                            a();
                        "fail" === c ? x("networkError", r, {
                            code: "60204",
                            msg: "Network failure",
                            desc: {
                                detail: "js resource load timeout"
                            }
                        }) : "loading" === c && _[o].push(a)
                    }
                }
                ))
            }
        }(window)
    },
    76767: function(e, n, t) {
        "use strict";
        t(13048),
        t(35503),
        t(60303),
        t(51552),
        t(27920),
        t(71935),
        t(63785),
        t(93377),
        t(48749),
        t(27534),
        t(56740),
        t(21319),
        t(62059),
        t(21305),
        t(82897),
        t(87211),
        t(39707),
        t(41071),
        t(17061),
        t(15909),
        t(92878),
        t(18908),
        t(75018),
        t(71050),
        t(58020),
        t(28205),
        t(6128),
        t(53551),
        t(71967),
        t(12920),
        t(88834),
        t(37754),
        t(24145),
        t(71015),
        t(3959),
        t(17380),
        t(31345),
        t(60627),
        t(98288),
        t(35533),
        t(53861),
        t(95151),
        t(75428),
        t(78766),
        t(86937),
        n.cv = void 0;
        var r = "3.6.1";
        var o = r;
        var i = "function" === typeof atob
          , a = "function" === typeof btoa
          , c = "function" === typeof Buffer
          , u = "function" === typeof TextDecoder ? new TextDecoder : void 0
          , s = "function" === typeof TextEncoder ? new TextEncoder : void 0
          , l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          , d = [].concat(l)
          , f = function(e) {
            var n = {};
            return e.forEach((function(e, t) {
                return n[e] = t
            }
            )),
            n
        }(d)
          , p = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
          , _ = String.fromCharCode.bind(String)
          , v = "function" === typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function(e, n) {
            return void 0 === n && (n = function(e) {
                return e
            }
            ),
            new Uint8Array(Array.prototype.slice.call(e, 0).map(n))
        }
          , m = function(e) {
            return e.replace(/[+\/]/g, (function(e) {
                return "+" == e ? "-" : "_"
            }
            )).replace(/=+$/m, "")
        }
          , g = function(e) {
            return e.replace(/[^A-Za-z0-9\+\/]/g, "")
        }
          , h = function(e) {
            for (var n, t, r, o, i = "", a = e.length % 3, c = 0; c < e.length; ) {
                if ((t = e.charCodeAt(c++)) > 255 || (r = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255)
                    throw new TypeError("invalid character found");
                n = t << 16 | r << 8 | o,
                i += d[n >> 18 & 63] + d[n >> 12 & 63] + d[n >> 6 & 63] + d[63 & n]
            }
            return a ? i.slice(0, a - 3) + "===".substring(a) : i
        };
        var E = a ? function(e) {
            return btoa(e)
        }
        : c ? function(e) {
            return Buffer.from(e, "binary").toString("base64")
        }
        : h;
        var y = c ? function(e) {
            return Buffer.from(e).toString("base64")
        }
        : function(e) {
            for (var n = 4096, t = [], r = 0, o = e.length; r < o; r += n)
                t.push(_.apply(null, e.subarray(r, r + n)));
            return E(t.join(""))
        }
          , I = function(e, n) {
            return void 0 === n && (n = !1),
            n ? m(y(e)) : y(e)
        };
        var k = function(e) {
            if (e.length < 2) {
                var n = e.charCodeAt(0);
                return n < 128 ? e : n < 2048 ? _(192 | n >>> 6) + _(128 | 63 & n) : _(224 | n >>> 12 & 15) + _(128 | n >>> 6 & 63) + _(128 | 63 & n)
            }
            n = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return _(240 | n >>> 18 & 7) + _(128 | n >>> 12 & 63) + _(128 | n >>> 6 & 63) + _(128 | 63 & n)
        }
          , w = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
          , b = function(e) {
            return e.replace(w, k)
        };
        var A = c ? function(e) {
            return Buffer.from(e, "utf8").toString("base64")
        }
        : s ? function(e) {
            return y(s.encode(e))
        }
        : function(e) {
            return E(b(e))
        }
          , S = function(e, n) {
            return void 0 === n && (n = !1),
            n ? m(A(e)) : A(e)
        };
        n.cv = S;
        var T = function(e) {
            return S(e, !0)
        };
        var N = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
          , R = function(e) {
            switch (e.length) {
            case 4:
                var n = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)
                  , t = n - 65536;
                return _(55296 + (t >>> 10)) + _(56320 + (1023 & t));
            case 3:
                return _((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
            default:
                return _((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
            }
        }
          , O = function(e) {
            return e.replace(N, R)
        };
        var C = function(e) {
            if (e = e.replace(/\s+/g, ""),
            !p.test(e))
                throw new TypeError("malformed base64.");
            e += "==".slice(2 - (3 & e.length));
            for (var n, t, r, o = "", i = 0; i < e.length; )
                n = f[e.charAt(i++)] << 18 | f[e.charAt(i++)] << 12 | (t = f[e.charAt(i++)]) << 6 | (r = f[e.charAt(i++)]),
                o += 64 === t ? _(n >> 16 & 255) : 64 === r ? _(n >> 16 & 255, n >> 8 & 255) : _(n >> 16 & 255, n >> 8 & 255, 255 & n);
            return o
        };
        var L = i ? function(e) {
            return atob(g(e))
        }
        : c ? function(e) {
            return Buffer.from(e, "base64").toString("binary")
        }
        : C;
        var P = c ? function(e) {
            return v(Buffer.from(e, "base64"))
        }
        : function(e) {
            return v(L(e), (function(e) {
                return e.charCodeAt(0)
            }
            ))
        }
          , x = function(e) {
            return P(B(e))
        };
        var D = c ? function(e) {
            return Buffer.from(e, "base64").toString("utf8")
        }
        : u ? function(e) {
            return u.decode(P(e))
        }
        : function(e) {
            return O(L(e))
        }
          , B = function(e) {
            return g(e.replace(/[-_]/g, (function(e) {
                return "-" == e ? "+" : "/"
            }
            )))
        }
          , U = function(e) {
            return D(B(e))
        };
        var Z = function(e) {
            if ("string" !== typeof e)
                return !1;
            var n = e.replace(/\s+/g, "").replace(/=+$/, "");
            return !/[^\s0-9a-zA-Z\+/]/.test(n) || !/[^\s0-9a-zA-Z\-_]/.test(n)
        };
        var G = function(e) {
            return {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }
          , M = function() {
            var e = function(e, n) {
                return Object.defineProperty(String.prototype, e, G(n))
            };
            e("fromBase64", (function() {
                return U(this)
            }
            )),
            e("toBase64", (function(e) {
                return S(this, e)
            }
            )),
            e("toBase64URI", (function() {
                return S(this, !0)
            }
            )),
            e("toBase64URL", (function() {
                return S(this, !0)
            }
            )),
            e("toUint8Array", (function() {
                return x(this)
            }
            ))
        };
        var F = function() {
            var e = function(e, n) {
                return Object.defineProperty(Uint8Array.prototype, e, G(n))
            };
            e("toBase64", (function(e) {
                return I(this, e)
            }
            )),
            e("toBase64URI", (function() {
                return I(this, !0)
            }
            )),
            e("toBase64URL", (function() {
                return I(this, !0)
            }
            ))
        };
        var K = function() {
            M(),
            F()
        };
        var Y = {
            version: r,
            VERSION: o,
            atob: L,
            atobPolyfill: C,
            btoa: E,
            btoaPolyfill: h,
            fromBase64: U,
            toBase64: S,
            encode: S,
            encodeURI: T,
            encodeURL: T,
            utob: b,
            btou: O,
            decode: U,
            isValid: Z,
            fromUint8Array: I,
            toUint8Array: x,
            extendString: M,
            extendUint8Array: F,
            extendBuiltins: K
        }
    },
    16070: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return d
            }
        });
        var r = t(69630)
          , o = t(30182)
          , i = t(67787)
          , a = t(39661)
          , c = t(65581)
          , u = (0,
        o.aZ)({
            setup(e) {
                var n = (0,
                c.a)();
                return function(e, t) {
                    var c = r.Z;
                    return (0,
                    i.SU)(n).isValid ? ((0,
                    o.wg)(),
                    (0,
                    o.j4)(c, {
                        key: 0,
                        class: "cmn-autotest-button",
                        type: "primary",
                        size: "small",
                        onClick: t[0] || (t[0] = function(e) {
                            return (0,
                            i.SU)(n).toggleEnable()
                        }
                        )
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [(0,
                            o.Uk)((0,
                            a.zw)((0,
                            i.SU)(n).isEnabled.value ? "已关闭极验" : "已开启极验"), 1)]
                        }
                        )),
                        _: 1
                    })) : (0,
                    o.kq)("", !0)
                }
            }
        })
          , s = t(16932);
        const l = (0,
        s.Z)(u, [["__scopeId", "data-v-aa69dd4a"]]);
        var d = l
    },
    69630: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return l
            }
        });
        var r = t(30182)
          , o = t(39253)
          , i = (t(72122),
        t(39661))
          , a = t(67787)
          , c = ["href"]
          , u = (0,
        r.aZ)({
            props: {
                block: {
                    type: Boolean
                },
                type: {
                    default: "primary"
                },
                href: null
            },
            setup(e) {
                var n = e
                  , t = (0,
                r.l1)()
                  , u = (0,
                r.Fl)((function() {
                    return {
                        ["cmn-button"]: !0,
                        ["cmn-button__block"]: n.block
                    }
                }
                ))
                  , s = (0,
                r.Fl)((function() {
                    return {
                        ["is-link"]: !0,
                        ["el-button"]: !0,
                        ["cmn-button"]: !0,
                        ["cmn-button__block"]: n.block,
                        [`el-button--${t.size}`]: t.size,
                        [`el-button--${n.type}`]: !0
                    }
                }
                ));
                return function(n, t) {
                    var l = o.mi;
                    return e.href ? ((0,
                    r.wg)(),
                    (0,
                    r.iD)("a", {
                        key: 0,
                        href: e.href,
                        class: (0,
                        i.C_)((0,
                        a.SU)(s))
                    }, [(0,
                    r.WI)(n.$slots, "default")], 10, c)) : ((0,
                    r.wg)(),
                    (0,
                    r.j4)(l, {
                        key: 1,
                        class: (0,
                        i.C_)((0,
                        a.SU)(u)),
                        type: e.type
                    }, (0,
                    r.Nv)({
                        _: 2
                    }, [(0,
                    r.Ko)(n.$slots, (function(e, t) {
                        return {
                            name: t,
                            fn: (0,
                            r.w5)((function() {
                                return [(0,
                                r.WI)(n.$slots, t)]
                            }
                            ))
                        }
                    }
                    ))]), 1032, ["class", "type"]))
                }
            }
        });
        const s = u;
        var l = s
    },
    11279: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return s
            }
        });
        var r = t(61719)
          , o = (t(81390),
        t(30182));
        function i(e, n) {
            var t = r.E2;
            return (0,
            o.wg)(),
            (0,
            o.j4)(t, {
                class: "cmn-link",
                underline: !1
            }, (0,
            o.Nv)({
                _: 2
            }, [(0,
            o.Ko)(e.$slots, (function(n, t) {
                return {
                    name: t,
                    fn: (0,
                    o.w5)((function() {
                        return [(0,
                        o.WI)(e.$slots, t)]
                    }
                    ))
                }
            }
            ))]), 1024)
        }
        var a = t(16932);
        const c = {}
          , u = (0,
        a.Z)(c, [["render", i]]);
        var s = u
    },
    37220: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return u
            }
        });
        var r = t(30182)
          , o = t(59122)
          , i = (t(27037),
        t(67787))
          , a = (0,
        r.aZ)({
            props: {
                closeOnClickOutside: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                var n = e
                  , t = (0,
                r.l1)();
                return function(e, a) {
                    var c = o.G;
                    return (0,
                    r.wg)(),
                    (0,
                    r.j4)(c, (0,
                    r.dG)({
                        class: "hyv-mobile-popup text-left"
                    }, (0,
                    i.SU)(t), {
                        teleport: "#app",
                        "close-on-click-overlay": n.closeOnClickOutside
                    }), (0,
                    r.Nv)({
                        _: 2
                    }, [(0,
                    r.Ko)(e.$slots, (function(n, t) {
                        return {
                            name: t,
                            fn: (0,
                            r.w5)((function() {
                                return [(0,
                                r.WI)(e.$slots, t)]
                            }
                            ))
                        }
                    }
                    ))]), 1040, ["close-on-click-overlay"])
                }
            }
        });
        const c = a;
        var u = c
    },
    95013: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return u
            }
        });
        var r = t(30182)
          , o = t(46119)
          , i = (t(6600),
        t(67787))
          , a = (0,
        r.aZ)({
            props: {
                customClass: {
                    default: ""
                },
                closeOnClickOutside: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                var n = e
                  , t = (0,
                r.l1)();
                return function(e, a) {
                    var c = o.d0;
                    return (0,
                    r.wg)(),
                    (0,
                    r.j4)(c, (0,
                    r.dG)((0,
                    i.SU)(t), {
                        "custom-class": `hyv-lp-dialog ${n.customClass}`,
                        "close-on-click-modal": n.closeOnClickOutside,
                        "append-to-body": ""
                    }), (0,
                    r.Nv)({
                        _: 2
                    }, [(0,
                    r.Ko)(e.$slots, (function(n, t) {
                        return {
                            name: t,
                            fn: (0,
                            r.w5)((function() {
                                return [(0,
                                r.WI)(e.$slots, t)]
                            }
                            ))
                        }
                    }
                    ))]), 1040, ["custom-class", "close-on-click-modal"])
                }
            }
        });
        const c = a;
        var u = c
    },
    52621: function() {}
}]);
