(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.miHoYoH5log = factory());
})(this, (function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function commonjsRequire(path) {
        throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }

    var localforage$1 = { exports: {} };

    /*!
        localForage -- Offline Storage, Improved
        Version 1.10.0
        https://localforage.github.io/localForage
        (c) 2013-2017 Mozilla, Apache License 2.0
    */

    (function (module, exports) {
        (function (f) { { module.exports = f(); } })(function () {
            return (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof commonjsRequire == "function" && commonjsRequire; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw (f.code = "MODULE_NOT_FOUND", f) } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r); } return n[o].exports } var i = typeof commonjsRequire == "function" && commonjsRequire; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
                1: [function (_dereq_, module, exports) {
                    (function (global) {
                        var Mutation = global.MutationObserver || global.WebKitMutationObserver;

                        var scheduleDrain;

                        {
                            if (Mutation) {
                                var called = 0;
                                var observer = new Mutation(nextTick);
                                var element = global.document.createTextNode('');
                                observer.observe(element, {
                                    characterData: true
                                });
                                scheduleDrain = function () {
                                    element.data = (called = ++called % 2);
                                };
                            } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
                                var channel = new global.MessageChannel();
                                channel.port1.onmessage = nextTick;
                                scheduleDrain = function () {
                                    channel.port2.postMessage(0);
                                };
                            } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
                                scheduleDrain = function () {

                                    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                                    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                                    var scriptEl = global.document.createElement('script');
                                    scriptEl.onreadystatechange = function () {
                                        nextTick();

                                        scriptEl.onreadystatechange = null;
                                        scriptEl.parentNode.removeChild(scriptEl);
                                        scriptEl = null;
                                    };
                                    global.document.documentElement.appendChild(scriptEl);
                                };
                            } else {
                                scheduleDrain = function () {
                                    setTimeout(nextTick, 0);
                                };
                            }
                        }

                        var draining;
                        var queue = [];
                        //named nextTick for less confusing stack traces
                        function nextTick() {
                            draining = true;
                            var i, oldQueue;
                            var len = queue.length;
                            while (len) {
                                oldQueue = queue;
                                queue = [];
                                i = -1;
                                while (++i < len) {
                                    oldQueue[i]();
                                }
                                len = queue.length;
                            }
                            draining = false;
                        }

                        module.exports = immediate;
                        function immediate(task) {
                            if (queue.push(task) === 1 && !draining) {
                                scheduleDrain();
                            }
                        }

                    }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                }, {}], 2: [function (_dereq_, module, exports) {
                    var immediate = _dereq_(1);

                    /* istanbul ignore next */
                    function INTERNAL() { }

                    var handlers = {};

                    var REJECTED = ['REJECTED'];
                    var FULFILLED = ['FULFILLED'];
                    var PENDING = ['PENDING'];

                    module.exports = Promise;

                    function Promise(resolver) {
                        if (typeof resolver !== 'function') {
                            throw new TypeError('resolver must be a function');
                        }
                        this.state = PENDING;
                        this.queue = [];
                        this.outcome = void 0;
                        if (resolver !== INTERNAL) {
                            safelyResolveThenable(this, resolver);
                        }
                    }

                    Promise.prototype["catch"] = function (onRejected) {
                        return this.then(null, onRejected);
                    };
                    Promise.prototype.then = function (onFulfilled, onRejected) {
                        if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
                            typeof onRejected !== 'function' && this.state === REJECTED) {
                            return this;
                        }
                        var promise = new this.constructor(INTERNAL);
                        if (this.state !== PENDING) {
                            var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                            unwrap(promise, resolver, this.outcome);
                        } else {
                            this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
                        }

                        return promise;
                    };
                    function QueueItem(promise, onFulfilled, onRejected) {
                        this.promise = promise;
                        if (typeof onFulfilled === 'function') {
                            this.onFulfilled = onFulfilled;
                            this.callFulfilled = this.otherCallFulfilled;
                        }
                        if (typeof onRejected === 'function') {
                            this.onRejected = onRejected;
                            this.callRejected = this.otherCallRejected;
                        }
                    }
                    QueueItem.prototype.callFulfilled = function (value) {
                        handlers.resolve(this.promise, value);
                    };
                    QueueItem.prototype.otherCallFulfilled = function (value) {
                        unwrap(this.promise, this.onFulfilled, value);
                    };
                    QueueItem.prototype.callRejected = function (value) {
                        handlers.reject(this.promise, value);
                    };
                    QueueItem.prototype.otherCallRejected = function (value) {
                        unwrap(this.promise, this.onRejected, value);
                    };

                    function unwrap(promise, func, value) {
                        immediate(function () {
                            var returnValue;
                            try {
                                returnValue = func(value);
                            } catch (e) {
                                return handlers.reject(promise, e);
                            }
                            if (returnValue === promise) {
                                handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
                            } else {
                                handlers.resolve(promise, returnValue);
                            }
                        });
                    }

                    handlers.resolve = function (self, value) {
                        var result = tryCatch(getThen, value);
                        if (result.status === 'error') {
                            return handlers.reject(self, result.value);
                        }
                        var thenable = result.value;

                        if (thenable) {
                            safelyResolveThenable(self, thenable);
                        } else {
                            self.state = FULFILLED;
                            self.outcome = value;
                            var i = -1;
                            var len = self.queue.length;
                            while (++i < len) {
                                self.queue[i].callFulfilled(value);
                            }
                        }
                        return self;
                    };
                    handlers.reject = function (self, error) {
                        self.state = REJECTED;
                        self.outcome = error;
                        var i = -1;
                        var len = self.queue.length;
                        while (++i < len) {
                            self.queue[i].callRejected(error);
                        }
                        return self;
                    };

                    function getThen(obj) {
                        // Make sure we only access the accessor once as required by the spec
                        var then = obj && obj.then;
                        if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
                            return function appyThen() {
                                then.apply(obj, arguments);
                            };
                        }
                    }

                    function safelyResolveThenable(self, thenable) {
                        // Either fulfill, reject or reject with error
                        var called = false;
                        function onError(value) {
                            if (called) {
                                return;
                            }
                            called = true;
                            handlers.reject(self, value);
                        }

                        function onSuccess(value) {
                            if (called) {
                                return;
                            }
                            called = true;
                            handlers.resolve(self, value);
                        }

                        function tryToUnwrap() {
                            thenable(onSuccess, onError);
                        }

                        var result = tryCatch(tryToUnwrap);
                        if (result.status === 'error') {
                            onError(result.value);
                        }
                    }

                    function tryCatch(func, value) {
                        var out = {};
                        try {
                            out.value = func(value);
                            out.status = 'success';
                        } catch (e) {
                            out.status = 'error';
                            out.value = e;
                        }
                        return out;
                    }

                    Promise.resolve = resolve;
                    function resolve(value) {
                        if (value instanceof this) {
                            return value;
                        }
                        return handlers.resolve(new this(INTERNAL), value);
                    }

                    Promise.reject = reject;
                    function reject(reason) {
                        var promise = new this(INTERNAL);
                        return handlers.reject(promise, reason);
                    }

                    Promise.all = all;
                    function all(iterable) {
                        var self = this;
                        if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                            return this.reject(new TypeError('must be an array'));
                        }

                        var len = iterable.length;
                        var called = false;
                        if (!len) {
                            return this.resolve([]);
                        }

                        var values = new Array(len);
                        var resolved = 0;
                        var i = -1;
                        var promise = new this(INTERNAL);

                        while (++i < len) {
                            allResolver(iterable[i], i);
                        }
                        return promise;
                        function allResolver(value, i) {
                            self.resolve(value).then(resolveFromAll, function (error) {
                                if (!called) {
                                    called = true;
                                    handlers.reject(promise, error);
                                }
                            });
                            function resolveFromAll(outValue) {
                                values[i] = outValue;
                                if (++resolved === len && !called) {
                                    called = true;
                                    handlers.resolve(promise, values);
                                }
                            }
                        }
                    }

                    Promise.race = race;
                    function race(iterable) {
                        var self = this;
                        if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                            return this.reject(new TypeError('must be an array'));
                        }

                        var len = iterable.length;
                        var called = false;
                        if (!len) {
                            return this.resolve([]);
                        }

                        var i = -1;
                        var promise = new this(INTERNAL);

                        while (++i < len) {
                            resolver(iterable[i]);
                        }
                        return promise;
                        function resolver(value) {
                            self.resolve(value).then(function (response) {
                                if (!called) {
                                    called = true;
                                    handlers.resolve(promise, response);
                                }
                            }, function (error) {
                                if (!called) {
                                    called = true;
                                    handlers.reject(promise, error);
                                }
                            });
                        }
                    }

                }, { "1": 1 }], 3: [function (_dereq_, module, exports) {
                    (function (global) {
                        if (typeof global.Promise !== 'function') {
                            global.Promise = _dereq_(2);
                        }

                    }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                }, { "2": 2 }], 4: [function (_dereq_, module, exports) {

                    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

                    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                    function getIDB() {
                        /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
                        try {
                            if (typeof indexedDB !== 'undefined') {
                                return indexedDB;
                            }
                            if (typeof webkitIndexedDB !== 'undefined') {
                                return webkitIndexedDB;
                            }
                            if (typeof mozIndexedDB !== 'undefined') {
                                return mozIndexedDB;
                            }
                            if (typeof OIndexedDB !== 'undefined') {
                                return OIndexedDB;
                            }
                            if (typeof msIndexedDB !== 'undefined') {
                                return msIndexedDB;
                            }
                        } catch (e) {
                            return;
                        }
                    }

                    var idb = getIDB();

                    function isIndexedDBValid() {
                        try {
                            // Initialize IndexedDB; fall back to vendor-prefixed versions
                            // if needed.
                            if (!idb || !idb.open) {
                                return false;
                            }
                            // We mimic PouchDB here;
                            //
                            // We test for openDatabase because IE Mobile identifies itself
                            // as Safari. Oh the lulz...
                            var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

                            var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

                            // Safari <10.1 does not meet our requirements for IDB support
                            // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                            // Safari 10.1 shipped with fetch, we can use that to detect it.
                            // Note: this creates issues with `window.fetch` polyfills and
                            // overrides; see:
                            // https://github.com/localForage/localForage/issues/856
                            return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
                                // some outdated implementations of IDB that appear on Samsung
                                // and HTC Android devices <4.4 are missing IDBKeyRange
                                // See: https://github.com/mozilla/localForage/issues/128
                                // See: https://github.com/mozilla/localForage/issues/272
                                typeof IDBKeyRange !== 'undefined';
                        } catch (e) {
                            return false;
                        }
                    }

                    // Abstracts constructing a Blob object, so it also works in older
                    // browsers that don't support the native Blob constructor. (i.e.
                    // old QtWebKit versions, at least).
                    // Abstracts constructing a Blob object, so it also works in older
                    // browsers that don't support the native Blob constructor. (i.e.
                    // old QtWebKit versions, at least).
                    function createBlob(parts, properties) {
                        /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
                        parts = parts || [];
                        properties = properties || {};
                        try {
                            return new Blob(parts, properties);
                        } catch (e) {
                            if (e.name !== 'TypeError') {
                                throw e;
                            }
                            var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
                            var builder = new Builder();
                            for (var i = 0; i < parts.length; i += 1) {
                                builder.append(parts[i]);
                            }
                            return builder.getBlob(properties.type);
                        }
                    }

                    // This is CommonJS because lie is an external dependency, so Rollup
                    // can just ignore it.
                    if (typeof Promise === 'undefined') {
                        // In the "nopromises" build this will just throw if you don't have
                        // a global promise object, but it would throw anyway later.
                        _dereq_(3);
                    }
                    var Promise$1 = Promise;

                    function executeCallback(promise, callback) {
                        if (callback) {
                            promise.then(function (result) {
                                callback(null, result);
                            }, function (error) {
                                callback(error);
                            });
                        }
                    }

                    function executeTwoCallbacks(promise, callback, errorCallback) {
                        if (typeof callback === 'function') {
                            promise.then(callback);
                        }

                        if (typeof errorCallback === 'function') {
                            promise["catch"](errorCallback);
                        }
                    }

                    function normalizeKey(key) {
                        // Cast the key to a string, as that's all we can set as a key.
                        if (typeof key !== 'string') {
                            console.warn(key + ' used as a key, but it is not a string.');
                            key = String(key);
                        }

                        return key;
                    }

                    function getCallback() {
                        if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
                            return arguments[arguments.length - 1];
                        }
                    }

                    // Some code originally from async_storage.js in
                    // [Gaia](https://github.com/mozilla-b2g/gaia).

                    var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
                    var supportsBlobs = void 0;
                    var dbContexts = {};
                    var toString = Object.prototype.toString;

                    // Transaction Modes
                    var READ_ONLY = 'readonly';
                    var READ_WRITE = 'readwrite';

                    // Transform a binary string to an array buffer, because otherwise
                    // weird stuff happens when you try to work with the binary string directly.
                    // It is known.
                    // From http://stackoverflow.com/questions/14967647/ (continues on next line)
                    // encode-decode-image-with-base64-breaks-image (2013-04-21)
                    function _binStringToArrayBuffer(bin) {
                        var length = bin.length;
                        var buf = new ArrayBuffer(length);
                        var arr = new Uint8Array(buf);
                        for (var i = 0; i < length; i++) {
                            arr[i] = bin.charCodeAt(i);
                        }
                        return buf;
                    }

                    //
                    // Blobs are not supported in all versions of IndexedDB, notably
                    // Chrome <37 and Android <5. In those versions, storing a blob will throw.
                    //
                    // Various other blob bugs exist in Chrome v37-42 (inclusive).
                    // Detecting them is expensive and confusing to users, and Chrome 37-42
                    // is at very low usage worldwide, so we do a hacky userAgent check instead.
                    //
                    // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
                    // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
                    // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
                    //
                    // Code borrowed from PouchDB. See:
                    // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
                    //
                    function _checkBlobSupportWithoutCaching(idb) {
                        return new Promise$1(function (resolve) {
                            var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
                            var blob = createBlob(['']);
                            txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

                            txn.onabort = function (e) {
                                // If the transaction aborts now its due to not being able to
                                // write to the database, likely due to the disk being full
                                e.preventDefault();
                                e.stopPropagation();
                                resolve(false);
                            };

                            txn.oncomplete = function () {
                                var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                                var matchedEdge = navigator.userAgent.match(/Edge\//);
                                // MS Edge pretends to be Chrome 42:
                                // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
                                resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
                            };
                        })["catch"](function () {
                            return false; // error, so assume unsupported
                        });
                    }

                    function _checkBlobSupport(idb) {
                        if (typeof supportsBlobs === 'boolean') {
                            return Promise$1.resolve(supportsBlobs);
                        }
                        return _checkBlobSupportWithoutCaching(idb).then(function (value) {
                            supportsBlobs = value;
                            return supportsBlobs;
                        });
                    }

                    function _deferReadiness(dbInfo) {
                        var dbContext = dbContexts[dbInfo.name];

                        // Create a deferred object representing the current database operation.
                        var deferredOperation = {};

                        deferredOperation.promise = new Promise$1(function (resolve, reject) {
                            deferredOperation.resolve = resolve;
                            deferredOperation.reject = reject;
                        });

                        // Enqueue the deferred operation.
                        dbContext.deferredOperations.push(deferredOperation);

                        // Chain its promise to the database readiness.
                        if (!dbContext.dbReady) {
                            dbContext.dbReady = deferredOperation.promise;
                        } else {
                            dbContext.dbReady = dbContext.dbReady.then(function () {
                                return deferredOperation.promise;
                            });
                        }
                    }

                    function _advanceReadiness(dbInfo) {
                        var dbContext = dbContexts[dbInfo.name];

                        // Dequeue a deferred operation.
                        var deferredOperation = dbContext.deferredOperations.pop();

                        // Resolve its promise (which is part of the database readiness
                        // chain of promises).
                        if (deferredOperation) {
                            deferredOperation.resolve();
                            return deferredOperation.promise;
                        }
                    }

                    function _rejectReadiness(dbInfo, err) {
                        var dbContext = dbContexts[dbInfo.name];

                        // Dequeue a deferred operation.
                        var deferredOperation = dbContext.deferredOperations.pop();

                        // Reject its promise (which is part of the database readiness
                        // chain of promises).
                        if (deferredOperation) {
                            deferredOperation.reject(err);
                            return deferredOperation.promise;
                        }
                    }

                    function _getConnection(dbInfo, upgradeNeeded) {
                        return new Promise$1(function (resolve, reject) {
                            dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

                            if (dbInfo.db) {
                                if (upgradeNeeded) {
                                    _deferReadiness(dbInfo);
                                    dbInfo.db.close();
                                } else {
                                    return resolve(dbInfo.db);
                                }
                            }

                            var dbArgs = [dbInfo.name];

                            if (upgradeNeeded) {
                                dbArgs.push(dbInfo.version);
                            }

                            var openreq = idb.open.apply(idb, dbArgs);

                            if (upgradeNeeded) {
                                openreq.onupgradeneeded = function (e) {
                                    var db = openreq.result;
                                    try {
                                        db.createObjectStore(dbInfo.storeName);
                                        if (e.oldVersion <= 1) {
                                            // Added when support for blob shims was added
                                            db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                                        }
                                    } catch (ex) {
                                        if (ex.name === 'ConstraintError') {
                                            console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                                        } else {
                                            throw ex;
                                        }
                                    }
                                };
                            }

                            openreq.onerror = function (e) {
                                e.preventDefault();
                                reject(openreq.error);
                            };

                            openreq.onsuccess = function () {
                                var db = openreq.result;
                                db.onversionchange = function (e) {
                                    // Triggered when the database is modified (e.g. adding an objectStore) or
                                    // deleted (even when initiated by other sessions in different tabs).
                                    // Closing the connection here prevents those operations from being blocked.
                                    // If the database is accessed again later by this instance, the connection
                                    // will be reopened or the database recreated as needed.
                                    e.target.close();
                                };
                                resolve(db);
                                _advanceReadiness(dbInfo);
                            };
                        });
                    }

                    function _getOriginalConnection(dbInfo) {
                        return _getConnection(dbInfo, false);
                    }

                    function _getUpgradedConnection(dbInfo) {
                        return _getConnection(dbInfo, true);
                    }

                    function _isUpgradeNeeded(dbInfo, defaultVersion) {
                        if (!dbInfo.db) {
                            return true;
                        }

                        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
                        var isDowngrade = dbInfo.version < dbInfo.db.version;
                        var isUpgrade = dbInfo.version > dbInfo.db.version;

                        if (isDowngrade) {
                            // If the version is not the default one
                            // then warn for impossible downgrade.
                            if (dbInfo.version !== defaultVersion) {
                                console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
                            }
                            // Align the versions to prevent errors.
                            dbInfo.version = dbInfo.db.version;
                        }

                        if (isUpgrade || isNewStore) {
                            // If the store is new then increment the version (if needed).
                            // This will trigger an "upgradeneeded" event which is required
                            // for creating a store.
                            if (isNewStore) {
                                var incVersion = dbInfo.db.version + 1;
                                if (incVersion > dbInfo.version) {
                                    dbInfo.version = incVersion;
                                }
                            }

                            return true;
                        }

                        return false;
                    }

                    // encode a blob for indexeddb engines that don't support blobs
                    function _encodeBlob(blob) {
                        return new Promise$1(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onloadend = function (e) {
                                var base64 = btoa(e.target.result || '');
                                resolve({
                                    __local_forage_encoded_blob: true,
                                    data: base64,
                                    type: blob.type
                                });
                            };
                            reader.readAsBinaryString(blob);
                        });
                    }

                    // decode an encoded blob
                    function _decodeBlob(encodedBlob) {
                        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
                        return createBlob([arrayBuff], { type: encodedBlob.type });
                    }

                    // is this one of our fancy encoded blobs?
                    function _isEncodedBlob(value) {
                        return value && value.__local_forage_encoded_blob;
                    }

                    // Specialize the default `ready()` function by making it dependent
                    // on the current database operations. Thus, the driver will be actually
                    // ready when it's been initialized (default) *and* there are no pending
                    // operations on the database (initiated by some other instances).
                    function _fullyReady(callback) {
                        var self = this;

                        var promise = self._initReady().then(function () {
                            var dbContext = dbContexts[self._dbInfo.name];

                            if (dbContext && dbContext.dbReady) {
                                return dbContext.dbReady;
                            }
                        });

                        executeTwoCallbacks(promise, callback, callback);
                        return promise;
                    }

                    // Try to establish a new db connection to replace the
                    // current one which is broken (i.e. experiencing
                    // InvalidStateError while creating a transaction).
                    function _tryReconnect(dbInfo) {
                        _deferReadiness(dbInfo);

                        var dbContext = dbContexts[dbInfo.name];
                        var forages = dbContext.forages;

                        for (var i = 0; i < forages.length; i++) {
                            var forage = forages[i];
                            if (forage._dbInfo.db) {
                                forage._dbInfo.db.close();
                                forage._dbInfo.db = null;
                            }
                        }
                        dbInfo.db = null;

                        return _getOriginalConnection(dbInfo).then(function (db) {
                            dbInfo.db = db;
                            if (_isUpgradeNeeded(dbInfo)) {
                                // Reopen the database for upgrading.
                                return _getUpgradedConnection(dbInfo);
                            }
                            return db;
                        }).then(function (db) {
                            // store the latest db reference
                            // in case the db was upgraded
                            dbInfo.db = dbContext.db = db;
                            for (var i = 0; i < forages.length; i++) {
                                forages[i]._dbInfo.db = db;
                            }
                        })["catch"](function (err) {
                            _rejectReadiness(dbInfo, err);
                            throw err;
                        });
                    }

                    // FF doesn't like Promises (micro-tasks) and IDDB store operations,
                    // so we have to do it with callbacks
                    function createTransaction(dbInfo, mode, callback, retries) {
                        if (retries === undefined) {
                            retries = 1;
                        }

                        try {
                            var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                            callback(null, tx);
                        } catch (err) {
                            if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
                                return Promise$1.resolve().then(function () {
                                    if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                                        // increase the db version, to create the new ObjectStore
                                        if (dbInfo.db) {
                                            dbInfo.version = dbInfo.db.version + 1;
                                        }
                                        // Reopen the database for upgrading.
                                        return _getUpgradedConnection(dbInfo);
                                    }
                                }).then(function () {
                                    return _tryReconnect(dbInfo).then(function () {
                                        createTransaction(dbInfo, mode, callback, retries - 1);
                                    });
                                })["catch"](callback);
                            }

                            callback(err);
                        }
                    }

                    function createDbContext() {
                        return {
                            // Running localForages sharing a database.
                            forages: [],
                            // Shared database.
                            db: null,
                            // Database readiness (promise).
                            dbReady: null,
                            // Deferred operations on the database.
                            deferredOperations: []
                        };
                    }

                    // Open the IndexedDB database (automatically creates one if one didn't
                    // previously exist), using any options set in the config.
                    function _initStorage(options) {
                        var self = this;
                        var dbInfo = {
                            db: null
                        };

                        if (options) {
                            for (var i in options) {
                                dbInfo[i] = options[i];
                            }
                        }

                        // Get the current context of the database;
                        var dbContext = dbContexts[dbInfo.name];

                        // ...or create a new context.
                        if (!dbContext) {
                            dbContext = createDbContext();
                            // Register the new context in the global container.
                            dbContexts[dbInfo.name] = dbContext;
                        }

                        // Register itself as a running localForage in the current context.
                        dbContext.forages.push(self);

                        // Replace the default `ready()` function with the specialized one.
                        if (!self._initReady) {
                            self._initReady = self.ready;
                            self.ready = _fullyReady;
                        }

                        // Create an array of initialization states of the related localForages.
                        var initPromises = [];

                        function ignoreErrors() {
                            // Don't handle errors here,
                            // just makes sure related localForages aren't pending.
                            return Promise$1.resolve();
                        }

                        for (var j = 0; j < dbContext.forages.length; j++) {
                            var forage = dbContext.forages[j];
                            if (forage !== self) {
                                // Don't wait for itself...
                                initPromises.push(forage._initReady()["catch"](ignoreErrors));
                            }
                        }

                        // Take a snapshot of the related localForages.
                        var forages = dbContext.forages.slice(0);

                        // Initialize the connection process only when
                        // all the related localForages aren't pending.
                        return Promise$1.all(initPromises).then(function () {
                            dbInfo.db = dbContext.db;
                            // Get the connection or open a new one without upgrade.
                            return _getOriginalConnection(dbInfo);
                        }).then(function (db) {
                            dbInfo.db = db;
                            if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
                                // Reopen the database for upgrading.
                                return _getUpgradedConnection(dbInfo);
                            }
                            return db;
                        }).then(function (db) {
                            dbInfo.db = dbContext.db = db;
                            self._dbInfo = dbInfo;
                            // Share the final connection amongst related localForages.
                            for (var k = 0; k < forages.length; k++) {
                                var forage = forages[k];
                                if (forage !== self) {
                                    // Self is already up-to-date.
                                    forage._dbInfo.db = dbInfo.db;
                                    forage._dbInfo.version = dbInfo.version;
                                }
                            }
                        });
                    }

                    function getItem(key, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        var req = store.get(key);

                                        req.onsuccess = function () {
                                            var value = req.result;
                                            if (value === undefined) {
                                                value = null;
                                            }
                                            if (_isEncodedBlob(value)) {
                                                value = _decodeBlob(value);
                                            }
                                            resolve(value);
                                        };

                                        req.onerror = function () {
                                            reject(req.error);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Iterate over all items stored in database.
                    function iterate(iterator, callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        var req = store.openCursor();
                                        var iterationNumber = 1;

                                        req.onsuccess = function () {
                                            var cursor = req.result;

                                            if (cursor) {
                                                var value = cursor.value;
                                                if (_isEncodedBlob(value)) {
                                                    value = _decodeBlob(value);
                                                }
                                                var result = iterator(value, cursor.key, iterationNumber++);

                                                // when the iterator callback returns any
                                                // (non-`undefined`) value, then we stop
                                                // the iteration immediately
                                                if (result !== void 0) {
                                                    resolve(result);
                                                } else {
                                                    cursor["continue"]();
                                                }
                                            } else {
                                                resolve();
                                            }
                                        };

                                        req.onerror = function () {
                                            reject(req.error);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);

                        return promise;
                    }

                    function setItem(key, value, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = new Promise$1(function (resolve, reject) {
                            var dbInfo;
                            self.ready().then(function () {
                                dbInfo = self._dbInfo;
                                if (toString.call(value) === '[object Blob]') {
                                    return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                                        if (blobSupport) {
                                            return value;
                                        }
                                        return _encodeBlob(value);
                                    });
                                }
                                return value;
                            }).then(function (value) {
                                createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);

                                        // The reason we don't _save_ null is because IE 10 does
                                        // not support saving the `null` type in IndexedDB. How
                                        // ironic, given the bug below!
                                        // See: https://github.com/mozilla/localForage/issues/161
                                        if (value === null) {
                                            value = undefined;
                                        }

                                        var req = store.put(value, key);

                                        transaction.oncomplete = function () {
                                            // Cast to undefined so the value passed to
                                            // callback/promise is the same as what one would get out
                                            // of `getItem()` later. This leads to some weirdness
                                            // (setItem('foo', undefined) will return `null`), but
                                            // it's not my fault localStorage is our baseline and that
                                            // it's weird.
                                            if (value === undefined) {
                                                value = null;
                                            }

                                            resolve(value);
                                        };
                                        transaction.onabort = transaction.onerror = function () {
                                            var err = req.error ? req.error : req.transaction.error;
                                            reject(err);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function removeItem(key, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        // We use a Grunt task to make this safe for IE and some
                                        // versions of Android (including those used by Cordova).
                                        // Normally IE won't like `.delete()` and will insist on
                                        // using `['delete']()`, but we have a build step that
                                        // fixes this for us now.
                                        var req = store["delete"](key);
                                        transaction.oncomplete = function () {
                                            resolve();
                                        };

                                        transaction.onerror = function () {
                                            reject(req.error);
                                        };

                                        // The request will be also be aborted if we've exceeded our storage
                                        // space.
                                        transaction.onabort = function () {
                                            var err = req.error ? req.error : req.transaction.error;
                                            reject(err);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function clear(callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        var req = store.clear();

                                        transaction.oncomplete = function () {
                                            resolve();
                                        };

                                        transaction.onabort = transaction.onerror = function () {
                                            var err = req.error ? req.error : req.transaction.error;
                                            reject(err);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function length(callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        var req = store.count();

                                        req.onsuccess = function () {
                                            resolve(req.result);
                                        };

                                        req.onerror = function () {
                                            reject(req.error);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function key(n, callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            if (n < 0) {
                                resolve(null);

                                return;
                            }

                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        var advanced = false;
                                        var req = store.openKeyCursor();

                                        req.onsuccess = function () {
                                            var cursor = req.result;
                                            if (!cursor) {
                                                // this means there weren't enough keys
                                                resolve(null);

                                                return;
                                            }

                                            if (n === 0) {
                                                // We have the first key, return it if that's what they
                                                // wanted.
                                                resolve(cursor.key);
                                            } else {
                                                if (!advanced) {
                                                    // Otherwise, ask the cursor to skip ahead n
                                                    // records.
                                                    advanced = true;
                                                    cursor.advance(n);
                                                } else {
                                                    // When we get here, we've got the nth key.
                                                    resolve(cursor.key);
                                                }
                                            }
                                        };

                                        req.onerror = function () {
                                            reject(req.error);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function keys(callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                                    if (err) {
                                        return reject(err);
                                    }

                                    try {
                                        var store = transaction.objectStore(self._dbInfo.storeName);
                                        var req = store.openKeyCursor();
                                        var keys = [];

                                        req.onsuccess = function () {
                                            var cursor = req.result;

                                            if (!cursor) {
                                                resolve(keys);
                                                return;
                                            }

                                            keys.push(cursor.key);
                                            cursor["continue"]();
                                        };

                                        req.onerror = function () {
                                            reject(req.error);
                                        };
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function dropInstance(options, callback) {
                        callback = getCallback.apply(this, arguments);

                        var currentConfig = this.config();
                        options = typeof options !== 'function' && options || {};
                        if (!options.name) {
                            options.name = options.name || currentConfig.name;
                            options.storeName = options.storeName || currentConfig.storeName;
                        }

                        var self = this;
                        var promise;
                        if (!options.name) {
                            promise = Promise$1.reject('Invalid arguments');
                        } else {
                            var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

                            var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
                                var dbContext = dbContexts[options.name];
                                var forages = dbContext.forages;
                                dbContext.db = db;
                                for (var i = 0; i < forages.length; i++) {
                                    forages[i]._dbInfo.db = db;
                                }
                                return db;
                            });

                            if (!options.storeName) {
                                promise = dbPromise.then(function (db) {
                                    _deferReadiness(options);

                                    var dbContext = dbContexts[options.name];
                                    var forages = dbContext.forages;

                                    db.close();
                                    for (var i = 0; i < forages.length; i++) {
                                        var forage = forages[i];
                                        forage._dbInfo.db = null;
                                    }

                                    var dropDBPromise = new Promise$1(function (resolve, reject) {
                                        var req = idb.deleteDatabase(options.name);

                                        req.onerror = function () {
                                            var db = req.result;
                                            if (db) {
                                                db.close();
                                            }
                                            reject(req.error);
                                        };

                                        req.onblocked = function () {
                                            // Closing all open connections in onversionchange handler should prevent this situation, but if
                                            // we do get here, it just means the request remains pending - eventually it will succeed or error
                                            console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                                        };

                                        req.onsuccess = function () {
                                            var db = req.result;
                                            if (db) {
                                                db.close();
                                            }
                                            resolve(db);
                                        };
                                    });

                                    return dropDBPromise.then(function (db) {
                                        dbContext.db = db;
                                        for (var i = 0; i < forages.length; i++) {
                                            var _forage = forages[i];
                                            _advanceReadiness(_forage._dbInfo);
                                        }
                                    })["catch"](function (err) {
                                        (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () { });
                                        throw err;
                                    });
                                });
                            } else {
                                promise = dbPromise.then(function (db) {
                                    if (!db.objectStoreNames.contains(options.storeName)) {
                                        return;
                                    }

                                    var newVersion = db.version + 1;

                                    _deferReadiness(options);

                                    var dbContext = dbContexts[options.name];
                                    var forages = dbContext.forages;

                                    db.close();
                                    for (var i = 0; i < forages.length; i++) {
                                        var forage = forages[i];
                                        forage._dbInfo.db = null;
                                        forage._dbInfo.version = newVersion;
                                    }

                                    var dropObjectPromise = new Promise$1(function (resolve, reject) {
                                        var req = idb.open(options.name, newVersion);

                                        req.onerror = function (err) {
                                            var db = req.result;
                                            db.close();
                                            reject(err);
                                        };

                                        req.onupgradeneeded = function () {
                                            var db = req.result;
                                            db.deleteObjectStore(options.storeName);
                                        };

                                        req.onsuccess = function () {
                                            var db = req.result;
                                            db.close();
                                            resolve(db);
                                        };
                                    });

                                    return dropObjectPromise.then(function (db) {
                                        dbContext.db = db;
                                        for (var j = 0; j < forages.length; j++) {
                                            var _forage2 = forages[j];
                                            _forage2._dbInfo.db = db;
                                            _advanceReadiness(_forage2._dbInfo);
                                        }
                                    })["catch"](function (err) {
                                        (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () { });
                                        throw err;
                                    });
                                });
                            }
                        }

                        executeCallback(promise, callback);
                        return promise;
                    }

                    var asyncStorage = {
                        _driver: 'asyncStorage',
                        _initStorage: _initStorage,
                        _support: isIndexedDBValid(),
                        iterate: iterate,
                        getItem: getItem,
                        setItem: setItem,
                        removeItem: removeItem,
                        clear: clear,
                        length: length,
                        key: key,
                        keys: keys,
                        dropInstance: dropInstance
                    };

                    function isWebSQLValid() {
                        return typeof openDatabase === 'function';
                    }

                    // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
                    // it to Base64, so this is how we store it to prevent very strange errors with less
                    // verbose ways of binary <-> string data storage.
                    var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

                    var BLOB_TYPE_PREFIX = '~~local_forage_type~';
                    var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

                    var SERIALIZED_MARKER = '__lfsc__:';
                    var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

                    // OMG the serializations!
                    var TYPE_ARRAYBUFFER = 'arbf';
                    var TYPE_BLOB = 'blob';
                    var TYPE_INT8ARRAY = 'si08';
                    var TYPE_UINT8ARRAY = 'ui08';
                    var TYPE_UINT8CLAMPEDARRAY = 'uic8';
                    var TYPE_INT16ARRAY = 'si16';
                    var TYPE_INT32ARRAY = 'si32';
                    var TYPE_UINT16ARRAY = 'ur16';
                    var TYPE_UINT32ARRAY = 'ui32';
                    var TYPE_FLOAT32ARRAY = 'fl32';
                    var TYPE_FLOAT64ARRAY = 'fl64';
                    var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

                    var toString$1 = Object.prototype.toString;

                    function stringToBuffer(serializedString) {
                        // Fill the string into a ArrayBuffer.
                        var bufferLength = serializedString.length * 0.75;
                        var len = serializedString.length;
                        var i;
                        var p = 0;
                        var encoded1, encoded2, encoded3, encoded4;

                        if (serializedString[serializedString.length - 1] === '=') {
                            bufferLength--;
                            if (serializedString[serializedString.length - 2] === '=') {
                                bufferLength--;
                            }
                        }

                        var buffer = new ArrayBuffer(bufferLength);
                        var bytes = new Uint8Array(buffer);

                        for (i = 0; i < len; i += 4) {
                            encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                            encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                            encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                            encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

                            /*jslint bitwise: true */
                            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                        }
                        return buffer;
                    }

                    // Converts a buffer to a string to store, serialized, in the backend
                    // storage library.
                    function bufferToString(buffer) {
                        // base64-arraybuffer
                        var bytes = new Uint8Array(buffer);
                        var base64String = '';
                        var i;

                        for (i = 0; i < bytes.length; i += 3) {
                            /*jslint bitwise: true */
                            base64String += BASE_CHARS[bytes[i] >> 2];
                            base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                            base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                            base64String += BASE_CHARS[bytes[i + 2] & 63];
                        }

                        if (bytes.length % 3 === 2) {
                            base64String = base64String.substring(0, base64String.length - 1) + '=';
                        } else if (bytes.length % 3 === 1) {
                            base64String = base64String.substring(0, base64String.length - 2) + '==';
                        }

                        return base64String;
                    }

                    // Serialize a value, afterwards executing a callback (which usually
                    // instructs the `setItem()` callback/promise to be executed). This is how
                    // we store binary data with localStorage.
                    function serialize(value, callback) {
                        var valueType = '';
                        if (value) {
                            valueType = toString$1.call(value);
                        }

                        // Cannot use `value instanceof ArrayBuffer` or such here, as these
                        // checks fail when running the tests using casper.js...
                        //
                        // TODO: See why those tests fail and use a better solution.
                        if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
                            // Convert binary arrays to a string and prefix the string with
                            // a special marker.
                            var buffer;
                            var marker = SERIALIZED_MARKER;

                            if (value instanceof ArrayBuffer) {
                                buffer = value;
                                marker += TYPE_ARRAYBUFFER;
                            } else {
                                buffer = value.buffer;

                                if (valueType === '[object Int8Array]') {
                                    marker += TYPE_INT8ARRAY;
                                } else if (valueType === '[object Uint8Array]') {
                                    marker += TYPE_UINT8ARRAY;
                                } else if (valueType === '[object Uint8ClampedArray]') {
                                    marker += TYPE_UINT8CLAMPEDARRAY;
                                } else if (valueType === '[object Int16Array]') {
                                    marker += TYPE_INT16ARRAY;
                                } else if (valueType === '[object Uint16Array]') {
                                    marker += TYPE_UINT16ARRAY;
                                } else if (valueType === '[object Int32Array]') {
                                    marker += TYPE_INT32ARRAY;
                                } else if (valueType === '[object Uint32Array]') {
                                    marker += TYPE_UINT32ARRAY;
                                } else if (valueType === '[object Float32Array]') {
                                    marker += TYPE_FLOAT32ARRAY;
                                } else if (valueType === '[object Float64Array]') {
                                    marker += TYPE_FLOAT64ARRAY;
                                } else {
                                    callback(new Error('Failed to get type for BinaryArray'));
                                }
                            }

                            callback(marker + bufferToString(buffer));
                        } else if (valueType === '[object Blob]') {
                            // Conver the blob to a binaryArray and then to a string.
                            var fileReader = new FileReader();

                            fileReader.onload = function () {
                                // Backwards-compatible prefix for the blob type.
                                var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

                                callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                            };

                            fileReader.readAsArrayBuffer(value);
                        } else {
                            try {
                                callback(JSON.stringify(value));
                            } catch (e) {
                                console.error("Couldn't convert value into a JSON string: ", value);

                                callback(null, e);
                            }
                        }
                    }

                    // Deserialize data we've inserted into a value column/field. We place
                    // special markers into our strings to mark them as encoded; this isn't
                    // as nice as a meta field, but it's the only sane thing we can do whilst
                    // keeping localStorage support intact.
                    //
                    // Oftentimes this will just deserialize JSON content, but if we have a
                    // special marker (SERIALIZED_MARKER, defined above), we will extract
                    // some kind of arraybuffer/binary data/typed array out of the string.
                    function deserialize(value) {
                        // If we haven't marked this string as being specially serialized (i.e.
                        // something other than serialized JSON), we can just return it and be
                        // done with it.
                        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
                            return JSON.parse(value);
                        }

                        // The following code deals with deserializing some kind of Blob or
                        // TypedArray. First we separate out the type of data we're dealing
                        // with from the data itself.
                        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
                        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

                        var blobType;
                        // Backwards-compatible blob type serialization strategy.
                        // DBs created with older versions of localForage will simply not have the blob type.
                        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                            var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                            blobType = matcher[1];
                            serializedString = serializedString.substring(matcher[0].length);
                        }
                        var buffer = stringToBuffer(serializedString);

                        // Return the right type based on the code/type set during
                        // serialization.
                        switch (type) {
                            case TYPE_ARRAYBUFFER:
                                return buffer;
                            case TYPE_BLOB:
                                return createBlob([buffer], { type: blobType });
                            case TYPE_INT8ARRAY:
                                return new Int8Array(buffer);
                            case TYPE_UINT8ARRAY:
                                return new Uint8Array(buffer);
                            case TYPE_UINT8CLAMPEDARRAY:
                                return new Uint8ClampedArray(buffer);
                            case TYPE_INT16ARRAY:
                                return new Int16Array(buffer);
                            case TYPE_UINT16ARRAY:
                                return new Uint16Array(buffer);
                            case TYPE_INT32ARRAY:
                                return new Int32Array(buffer);
                            case TYPE_UINT32ARRAY:
                                return new Uint32Array(buffer);
                            case TYPE_FLOAT32ARRAY:
                                return new Float32Array(buffer);
                            case TYPE_FLOAT64ARRAY:
                                return new Float64Array(buffer);
                            default:
                                throw new Error('Unkown type: ' + type);
                        }
                    }

                    var localforageSerializer = {
                        serialize: serialize,
                        deserialize: deserialize,
                        stringToBuffer: stringToBuffer,
                        bufferToString: bufferToString
                    };

                    /*
                     * Includes code from:
                     *
                     * base64-arraybuffer
                     * https://github.com/niklasvh/base64-arraybuffer
                     *
                     * Copyright (c) 2012 Niklas von Hertzen
                     * Licensed under the MIT license.
                     */

                    function createDbTable(t, dbInfo, callback, errorCallback) {
                        t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
                    }

                    // Open the WebSQL database (automatically creates one if one didn't
                    // previously exist), using any options set in the config.
                    function _initStorage$1(options) {
                        var self = this;
                        var dbInfo = {
                            db: null
                        };

                        if (options) {
                            for (var i in options) {
                                dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
                            }
                        }

                        var dbInfoPromise = new Promise$1(function (resolve, reject) {
                            // Open the database; the openDatabase API will automatically
                            // create it for us if it doesn't exist.
                            try {
                                dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                            } catch (e) {
                                return reject(e);
                            }

                            // Create our key/value table if it doesn't exist.
                            dbInfo.db.transaction(function (t) {
                                createDbTable(t, dbInfo, function () {
                                    self._dbInfo = dbInfo;
                                    resolve();
                                }, function (t, error) {
                                    reject(error);
                                });
                            }, reject);
                        });

                        dbInfo.serializer = localforageSerializer;
                        return dbInfoPromise;
                    }

                    function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
                        t.executeSql(sqlStatement, args, callback, function (t, error) {
                            if (error.code === error.SYNTAX_ERR) {
                                t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                                    if (!results.rows.length) {
                                        // if the table is missing (was deleted)
                                        // re-create it table and retry
                                        createDbTable(t, dbInfo, function () {
                                            t.executeSql(sqlStatement, args, callback, errorCallback);
                                        }, errorCallback);
                                    } else {
                                        errorCallback(t, error);
                                    }
                                }, errorCallback);
                            } else {
                                errorCallback(t, error);
                            }
                        }, errorCallback);
                    }

                    function getItem$1(key, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;
                                dbInfo.db.transaction(function (t) {
                                    tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                                        var result = results.rows.length ? results.rows.item(0).value : null;

                                        // Check to see if this is serialized content we need to
                                        // unpack.
                                        if (result) {
                                            result = dbInfo.serializer.deserialize(result);
                                        }

                                        resolve(result);
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function iterate$1(iterator, callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;

                                dbInfo.db.transaction(function (t) {
                                    tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                                        var rows = results.rows;
                                        var length = rows.length;

                                        for (var i = 0; i < length; i++) {
                                            var item = rows.item(i);
                                            var result = item.value;

                                            // Check to see if this is serialized content
                                            // we need to unpack.
                                            if (result) {
                                                result = dbInfo.serializer.deserialize(result);
                                            }

                                            result = iterator(result, item.key, i + 1);

                                            // void(0) prevents problems with redefinition
                                            // of `undefined`.
                                            if (result !== void 0) {
                                                resolve(result);
                                                return;
                                            }
                                        }

                                        resolve();
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function _setItem(key, value, callback, retriesLeft) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                // The localStorage API doesn't return undefined values in an
                                // "expected" way, so undefined is always cast to null in all
                                // drivers. See: https://github.com/mozilla/localForage/pull/42
                                if (value === undefined) {
                                    value = null;
                                }

                                // Save the original value to pass to the callback.
                                var originalValue = value;

                                var dbInfo = self._dbInfo;
                                dbInfo.serializer.serialize(value, function (value, error) {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        dbInfo.db.transaction(function (t) {
                                            tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                                                resolve(originalValue);
                                            }, function (t, error) {
                                                reject(error);
                                            });
                                        }, function (sqlError) {
                                            // The transaction failed; check
                                            // to see if it's a quota error.
                                            if (sqlError.code === sqlError.QUOTA_ERR) {
                                                // We reject the callback outright for now, but
                                                // it's worth trying to re-run the transaction.
                                                // Even if the user accepts the prompt to use
                                                // more storage on Safari, this error will
                                                // be called.
                                                //
                                                // Try to re-run the transaction.
                                                if (retriesLeft > 0) {
                                                    resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                                    return;
                                                }
                                                reject(sqlError);
                                            }
                                        });
                                    }
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function setItem$1(key, value, callback) {
                        return _setItem.apply(this, [key, value, callback, 1]);
                    }

                    function removeItem$1(key, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;
                                dbInfo.db.transaction(function (t) {
                                    tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                                        resolve();
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Deletes every item in the table.
                    // TODO: Find out if this resets the AUTO_INCREMENT number.
                    function clear$1(callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;
                                dbInfo.db.transaction(function (t) {
                                    tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                                        resolve();
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Does a simple `COUNT(key)` to get the number of items stored in
                    // localForage.
                    function length$1(callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;
                                dbInfo.db.transaction(function (t) {
                                    // Ahhh, SQL makes this one soooooo easy.
                                    tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                                        var result = results.rows.item(0).c;
                                        resolve(result);
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Return the key located at key index X; essentially gets the key from a
                    // `WHERE id = ?`. This is the most efficient way I can think to implement
                    // this rarely-used (in my experience) part of the API, but it can seem
                    // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
                    // the ID of each key will change every time it's updated. Perhaps a stored
                    // procedure for the `setItem()` SQL would solve this problem?
                    // TODO: Don't change ID on `setItem()`.
                    function key$1(n, callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;
                                dbInfo.db.transaction(function (t) {
                                    tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                                        var result = results.rows.length ? results.rows.item(0).key : null;
                                        resolve(result);
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function keys$1(callback) {
                        var self = this;

                        var promise = new Promise$1(function (resolve, reject) {
                            self.ready().then(function () {
                                var dbInfo = self._dbInfo;
                                dbInfo.db.transaction(function (t) {
                                    tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                                        var keys = [];

                                        for (var i = 0; i < results.rows.length; i++) {
                                            keys.push(results.rows.item(i).key);
                                        }

                                        resolve(keys);
                                    }, function (t, error) {
                                        reject(error);
                                    });
                                });
                            })["catch"](reject);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // https://www.w3.org/TR/webdatabase/#databases
                    // > There is no way to enumerate or delete the databases available for an origin from this API.
                    function getAllStoreNames(db) {
                        return new Promise$1(function (resolve, reject) {
                            db.transaction(function (t) {
                                t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                                    var storeNames = [];

                                    for (var i = 0; i < results.rows.length; i++) {
                                        storeNames.push(results.rows.item(i).name);
                                    }

                                    resolve({
                                        db: db,
                                        storeNames: storeNames
                                    });
                                }, function (t, error) {
                                    reject(error);
                                });
                            }, function (sqlError) {
                                reject(sqlError);
                            });
                        });
                    }

                    function dropInstance$1(options, callback) {
                        callback = getCallback.apply(this, arguments);

                        var currentConfig = this.config();
                        options = typeof options !== 'function' && options || {};
                        if (!options.name) {
                            options.name = options.name || currentConfig.name;
                            options.storeName = options.storeName || currentConfig.storeName;
                        }

                        var self = this;
                        var promise;
                        if (!options.name) {
                            promise = Promise$1.reject('Invalid arguments');
                        } else {
                            promise = new Promise$1(function (resolve) {
                                var db;
                                if (options.name === currentConfig.name) {
                                    // use the db reference of the current instance
                                    db = self._dbInfo.db;
                                } else {
                                    db = openDatabase(options.name, '', '', 0);
                                }

                                if (!options.storeName) {
                                    // drop all database tables
                                    resolve(getAllStoreNames(db));
                                } else {
                                    resolve({
                                        db: db,
                                        storeNames: [options.storeName]
                                    });
                                }
                            }).then(function (operationInfo) {
                                return new Promise$1(function (resolve, reject) {
                                    operationInfo.db.transaction(function (t) {
                                        function dropTable(storeName) {
                                            return new Promise$1(function (resolve, reject) {
                                                t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                                    resolve();
                                                }, function (t, error) {
                                                    reject(error);
                                                });
                                            });
                                        }

                                        var operations = [];
                                        for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                                            operations.push(dropTable(operationInfo.storeNames[i]));
                                        }

                                        Promise$1.all(operations).then(function () {
                                            resolve();
                                        })["catch"](function (e) {
                                            reject(e);
                                        });
                                    }, function (sqlError) {
                                        reject(sqlError);
                                    });
                                });
                            });
                        }

                        executeCallback(promise, callback);
                        return promise;
                    }

                    var webSQLStorage = {
                        _driver: 'webSQLStorage',
                        _initStorage: _initStorage$1,
                        _support: isWebSQLValid(),
                        iterate: iterate$1,
                        getItem: getItem$1,
                        setItem: setItem$1,
                        removeItem: removeItem$1,
                        clear: clear$1,
                        length: length$1,
                        key: key$1,
                        keys: keys$1,
                        dropInstance: dropInstance$1
                    };

                    function isLocalStorageValid() {
                        try {
                            return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
                                // in IE8 typeof localStorage.setItem === 'object'
                                !!localStorage.setItem;
                        } catch (e) {
                            return false;
                        }
                    }

                    function _getKeyPrefix(options, defaultConfig) {
                        var keyPrefix = options.name + '/';

                        if (options.storeName !== defaultConfig.storeName) {
                            keyPrefix += options.storeName + '/';
                        }
                        return keyPrefix;
                    }

                    // Check if localStorage throws when saving an item
                    function checkIfLocalStorageThrows() {
                        var localStorageTestKey = '_localforage_support_test';

                        try {
                            localStorage.setItem(localStorageTestKey, true);
                            localStorage.removeItem(localStorageTestKey);

                            return false;
                        } catch (e) {
                            return true;
                        }
                    }

                    // Check if localStorage is usable and allows to save an item
                    // This method checks if localStorage is usable in Safari Private Browsing
                    // mode, or in any other case where the available quota for localStorage
                    // is 0 and there wasn't any saved items yet.
                    function _isLocalStorageUsable() {
                        return !checkIfLocalStorageThrows() || localStorage.length > 0;
                    }

                    // Config the localStorage backend, using options set in the config.
                    function _initStorage$2(options) {
                        var self = this;
                        var dbInfo = {};
                        if (options) {
                            for (var i in options) {
                                dbInfo[i] = options[i];
                            }
                        }

                        dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

                        if (!_isLocalStorageUsable()) {
                            return Promise$1.reject();
                        }

                        self._dbInfo = dbInfo;
                        dbInfo.serializer = localforageSerializer;

                        return Promise$1.resolve();
                    }

                    // Remove all keys from the datastore, effectively destroying all data in
                    // the app's key/value store!
                    function clear$2(callback) {
                        var self = this;
                        var promise = self.ready().then(function () {
                            var keyPrefix = self._dbInfo.keyPrefix;

                            for (var i = localStorage.length - 1; i >= 0; i--) {
                                var key = localStorage.key(i);

                                if (key.indexOf(keyPrefix) === 0) {
                                    localStorage.removeItem(key);
                                }
                            }
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Retrieve an item from the store. Unlike the original async_storage
                    // library in Gaia, we don't modify return values at all. If a key's value
                    // is `undefined`, we pass that value to the callback function.
                    function getItem$2(key, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = self.ready().then(function () {
                            var dbInfo = self._dbInfo;
                            var result = localStorage.getItem(dbInfo.keyPrefix + key);

                            // If a result was found, parse it from the serialized
                            // string into a JS object. If result isn't truthy, the key
                            // is likely undefined and we'll pass it straight to the
                            // callback.
                            if (result) {
                                result = dbInfo.serializer.deserialize(result);
                            }

                            return result;
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Iterate over all items in the store.
                    function iterate$2(iterator, callback) {
                        var self = this;

                        var promise = self.ready().then(function () {
                            var dbInfo = self._dbInfo;
                            var keyPrefix = dbInfo.keyPrefix;
                            var keyPrefixLength = keyPrefix.length;
                            var length = localStorage.length;

                            // We use a dedicated iterator instead of the `i` variable below
                            // so other keys we fetch in localStorage aren't counted in
                            // the `iterationNumber` argument passed to the `iterate()`
                            // callback.
                            //
                            // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
                            var iterationNumber = 1;

                            for (var i = 0; i < length; i++) {
                                var key = localStorage.key(i);
                                if (key.indexOf(keyPrefix) !== 0) {
                                    continue;
                                }
                                var value = localStorage.getItem(key);

                                // If a result was found, parse it from the serialized
                                // string into a JS object. If result isn't truthy, the
                                // key is likely undefined and we'll pass it straight
                                // to the iterator.
                                if (value) {
                                    value = dbInfo.serializer.deserialize(value);
                                }

                                value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

                                if (value !== void 0) {
                                    return value;
                                }
                            }
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Same as localStorage's key() method, except takes a callback.
                    function key$2(n, callback) {
                        var self = this;
                        var promise = self.ready().then(function () {
                            var dbInfo = self._dbInfo;
                            var result;
                            try {
                                result = localStorage.key(n);
                            } catch (error) {
                                result = null;
                            }

                            // Remove the prefix from the key, if a key is found.
                            if (result) {
                                result = result.substring(dbInfo.keyPrefix.length);
                            }

                            return result;
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function keys$2(callback) {
                        var self = this;
                        var promise = self.ready().then(function () {
                            var dbInfo = self._dbInfo;
                            var length = localStorage.length;
                            var keys = [];

                            for (var i = 0; i < length; i++) {
                                var itemKey = localStorage.key(i);
                                if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                                    keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                                }
                            }

                            return keys;
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Supply the number of keys in the datastore to the callback function.
                    function length$2(callback) {
                        var self = this;
                        var promise = self.keys().then(function (keys) {
                            return keys.length;
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Remove an item from the store, nice and simple.
                    function removeItem$2(key, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = self.ready().then(function () {
                            var dbInfo = self._dbInfo;
                            localStorage.removeItem(dbInfo.keyPrefix + key);
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    // Set a key's value and run an optional callback once the value is set.
                    // Unlike Gaia's implementation, the callback function is passed the value,
                    // in case you want to operate on that value only after you're sure it
                    // saved, or something like that.
                    function setItem$2(key, value, callback) {
                        var self = this;

                        key = normalizeKey(key);

                        var promise = self.ready().then(function () {
                            // Convert undefined values to null.
                            // https://github.com/mozilla/localForage/pull/42
                            if (value === undefined) {
                                value = null;
                            }

                            // Save the original value to pass to the callback.
                            var originalValue = value;

                            return new Promise$1(function (resolve, reject) {
                                var dbInfo = self._dbInfo;
                                dbInfo.serializer.serialize(value, function (value, error) {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        try {
                                            localStorage.setItem(dbInfo.keyPrefix + key, value);
                                            resolve(originalValue);
                                        } catch (e) {
                                            // localStorage capacity exceeded.
                                            // TODO: Make this a specific error/event.
                                            if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                                                reject(e);
                                            }
                                            reject(e);
                                        }
                                    }
                                });
                            });
                        });

                        executeCallback(promise, callback);
                        return promise;
                    }

                    function dropInstance$2(options, callback) {
                        callback = getCallback.apply(this, arguments);

                        options = typeof options !== 'function' && options || {};
                        if (!options.name) {
                            var currentConfig = this.config();
                            options.name = options.name || currentConfig.name;
                            options.storeName = options.storeName || currentConfig.storeName;
                        }

                        var self = this;
                        var promise;
                        if (!options.name) {
                            promise = Promise$1.reject('Invalid arguments');
                        } else {
                            promise = new Promise$1(function (resolve) {
                                if (!options.storeName) {
                                    resolve(options.name + '/');
                                } else {
                                    resolve(_getKeyPrefix(options, self._defaultConfig));
                                }
                            }).then(function (keyPrefix) {
                                for (var i = localStorage.length - 1; i >= 0; i--) {
                                    var key = localStorage.key(i);

                                    if (key.indexOf(keyPrefix) === 0) {
                                        localStorage.removeItem(key);
                                    }
                                }
                            });
                        }

                        executeCallback(promise, callback);
                        return promise;
                    }

                    var localStorageWrapper = {
                        _driver: 'localStorageWrapper',
                        _initStorage: _initStorage$2,
                        _support: isLocalStorageValid(),
                        iterate: iterate$2,
                        getItem: getItem$2,
                        setItem: setItem$2,
                        removeItem: removeItem$2,
                        clear: clear$2,
                        length: length$2,
                        key: key$2,
                        keys: keys$2,
                        dropInstance: dropInstance$2
                    };

                    var sameValue = function sameValue(x, y) {
                        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
                    };

                    var includes = function includes(array, searchElement) {
                        var len = array.length;
                        var i = 0;
                        while (i < len) {
                            if (sameValue(array[i], searchElement)) {
                                return true;
                            }
                            i++;
                        }

                        return false;
                    };

                    var isArray = Array.isArray || function (arg) {
                        return Object.prototype.toString.call(arg) === '[object Array]';
                    };

                    // Drivers are stored here when `defineDriver()` is called.
                    // They are shared across all instances of localForage.
                    var DefinedDrivers = {};

                    var DriverSupport = {};

                    var DefaultDrivers = {
                        INDEXEDDB: asyncStorage,
                        WEBSQL: webSQLStorage,
                        LOCALSTORAGE: localStorageWrapper
                    };

                    var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

                    var OptionalDriverMethods = ['dropInstance'];

                    var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

                    var DefaultConfig = {
                        description: '',
                        driver: DefaultDriverOrder.slice(),
                        name: 'localforage',
                        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
                        // we can use without a prompt.
                        size: 4980736,
                        storeName: 'keyvaluepairs',
                        version: 1.0
                    };

                    function callWhenReady(localForageInstance, libraryMethod) {
                        localForageInstance[libraryMethod] = function () {
                            var _args = arguments;
                            return localForageInstance.ready().then(function () {
                                return localForageInstance[libraryMethod].apply(localForageInstance, _args);
                            });
                        };
                    }

                    function extend() {
                        for (var i = 1; i < arguments.length; i++) {
                            var arg = arguments[i];

                            if (arg) {
                                for (var _key in arg) {
                                    if (arg.hasOwnProperty(_key)) {
                                        if (isArray(arg[_key])) {
                                            arguments[0][_key] = arg[_key].slice();
                                        } else {
                                            arguments[0][_key] = arg[_key];
                                        }
                                    }
                                }
                            }
                        }

                        return arguments[0];
                    }

                    var LocalForage = function () {
                        function LocalForage(options) {
                            _classCallCheck(this, LocalForage);

                            for (var driverTypeKey in DefaultDrivers) {
                                if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                                    var driver = DefaultDrivers[driverTypeKey];
                                    var driverName = driver._driver;
                                    this[driverTypeKey] = driverName;

                                    if (!DefinedDrivers[driverName]) {
                                        // we don't need to wait for the promise,
                                        // since the default drivers can be defined
                                        // in a blocking manner
                                        this.defineDriver(driver);
                                    }
                                }
                            }

                            this._defaultConfig = extend({}, DefaultConfig);
                            this._config = extend({}, this._defaultConfig, options);
                            this._driverSet = null;
                            this._initDriver = null;
                            this._ready = false;
                            this._dbInfo = null;

                            this._wrapLibraryMethodsWithReady();
                            this.setDriver(this._config.driver)["catch"](function () { });
                        }

                        // Set any config values for localForage; can be called anytime before
                        // the first API call (e.g. `getItem`, `setItem`).
                        // We loop through options so we don't overwrite existing config
                        // values.


                        LocalForage.prototype.config = function config(options) {
                            // If the options argument is an object, we use it to set values.
                            // Otherwise, we return either a specified config value or all
                            // config values.
                            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                                // If localforage is ready and fully initialized, we can't set
                                // any new configuration values. Instead, we return an error.
                                if (this._ready) {
                                    return new Error("Can't call config() after localforage " + 'has been used.');
                                }

                                for (var i in options) {
                                    if (i === 'storeName') {
                                        options[i] = options[i].replace(/\W/g, '_');
                                    }

                                    if (i === 'version' && typeof options[i] !== 'number') {
                                        return new Error('Database version must be a number.');
                                    }

                                    this._config[i] = options[i];
                                }

                                // after all config options are set and
                                // the driver option is used, try setting it
                                if ('driver' in options && options.driver) {
                                    return this.setDriver(this._config.driver);
                                }

                                return true;
                            } else if (typeof options === 'string') {
                                return this._config[options];
                            } else {
                                return this._config;
                            }
                        };

                        // Used to define a custom driver, shared across all instances of
                        // localForage.


                        LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
                            var promise = new Promise$1(function (resolve, reject) {
                                try {
                                    var driverName = driverObject._driver;
                                    var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                                    // A driver name should be defined and not overlap with the
                                    // library-defined, default drivers.
                                    if (!driverObject._driver) {
                                        reject(complianceError);
                                        return;
                                    }

                                    var driverMethods = LibraryMethods.concat('_initStorage');
                                    for (var i = 0, len = driverMethods.length; i < len; i++) {
                                        var driverMethodName = driverMethods[i];

                                        // when the property is there,
                                        // it should be a method even when optional
                                        var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                                        if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                                            reject(complianceError);
                                            return;
                                        }
                                    }

                                    var configureMissingMethods = function configureMissingMethods() {
                                        var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                                            return function () {
                                                var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                                                var promise = Promise$1.reject(error);
                                                executeCallback(promise, arguments[arguments.length - 1]);
                                                return promise;
                                            };
                                        };

                                        for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                                            var optionalDriverMethod = OptionalDriverMethods[_i];
                                            if (!driverObject[optionalDriverMethod]) {
                                                driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                                            }
                                        }
                                    };

                                    configureMissingMethods();

                                    var setDriverSupport = function setDriverSupport(support) {
                                        if (DefinedDrivers[driverName]) {
                                            console.info('Redefining LocalForage driver: ' + driverName);
                                        }
                                        DefinedDrivers[driverName] = driverObject;
                                        DriverSupport[driverName] = support;
                                        // don't use a then, so that we can define
                                        // drivers that have simple _support methods
                                        // in a blocking manner
                                        resolve();
                                    };

                                    if ('_support' in driverObject) {
                                        if (driverObject._support && typeof driverObject._support === 'function') {
                                            driverObject._support().then(setDriverSupport, reject);
                                        } else {
                                            setDriverSupport(!!driverObject._support);
                                        }
                                    } else {
                                        setDriverSupport(true);
                                    }
                                } catch (e) {
                                    reject(e);
                                }
                            });

                            executeTwoCallbacks(promise, callback, errorCallback);
                            return promise;
                        };

                        LocalForage.prototype.driver = function driver() {
                            return this._driver || null;
                        };

                        LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
                            var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

                            executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                            return getDriverPromise;
                        };

                        LocalForage.prototype.getSerializer = function getSerializer(callback) {
                            var serializerPromise = Promise$1.resolve(localforageSerializer);
                            executeTwoCallbacks(serializerPromise, callback);
                            return serializerPromise;
                        };

                        LocalForage.prototype.ready = function ready(callback) {
                            var self = this;

                            var promise = self._driverSet.then(function () {
                                if (self._ready === null) {
                                    self._ready = self._initDriver();
                                }

                                return self._ready;
                            });

                            executeTwoCallbacks(promise, callback, callback);
                            return promise;
                        };

                        LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
                            var self = this;

                            if (!isArray(drivers)) {
                                drivers = [drivers];
                            }

                            var supportedDrivers = this._getSupportedDrivers(drivers);

                            function setDriverToConfig() {
                                self._config.driver = self.driver();
                            }

                            function extendSelfWithDriver(driver) {
                                self._extend(driver);
                                setDriverToConfig();

                                self._ready = self._initStorage(self._config);
                                return self._ready;
                            }

                            function initDriver(supportedDrivers) {
                                return function () {
                                    var currentDriverIndex = 0;

                                    function driverPromiseLoop() {
                                        while (currentDriverIndex < supportedDrivers.length) {
                                            var driverName = supportedDrivers[currentDriverIndex];
                                            currentDriverIndex++;

                                            self._dbInfo = null;
                                            self._ready = null;

                                            return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                                        }

                                        setDriverToConfig();
                                        var error = new Error('No available storage method found.');
                                        self._driverSet = Promise$1.reject(error);
                                        return self._driverSet;
                                    }

                                    return driverPromiseLoop();
                                };
                            }

                            // There might be a driver initialization in progress
                            // so wait for it to finish in order to avoid a possible
                            // race condition to set _dbInfo
                            var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
                                return Promise$1.resolve();
                            }) : Promise$1.resolve();

                            this._driverSet = oldDriverSetDone.then(function () {
                                var driverName = supportedDrivers[0];
                                self._dbInfo = null;
                                self._ready = null;

                                return self.getDriver(driverName).then(function (driver) {
                                    self._driver = driver._driver;
                                    setDriverToConfig();
                                    self._wrapLibraryMethodsWithReady();
                                    self._initDriver = initDriver(supportedDrivers);
                                });
                            })["catch"](function () {
                                setDriverToConfig();
                                var error = new Error('No available storage method found.');
                                self._driverSet = Promise$1.reject(error);
                                return self._driverSet;
                            });

                            executeTwoCallbacks(this._driverSet, callback, errorCallback);
                            return this._driverSet;
                        };

                        LocalForage.prototype.supports = function supports(driverName) {
                            return !!DriverSupport[driverName];
                        };

                        LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
                            extend(this, libraryMethodsAndProperties);
                        };

                        LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
                            var supportedDrivers = [];
                            for (var i = 0, len = drivers.length; i < len; i++) {
                                var driverName = drivers[i];
                                if (this.supports(driverName)) {
                                    supportedDrivers.push(driverName);
                                }
                            }
                            return supportedDrivers;
                        };

                        LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
                            // Add a stub for each driver API method that delays the call to the
                            // corresponding driver method until localForage is ready. These stubs
                            // will be replaced by the driver methods as soon as the driver is
                            // loaded, so there is no performance impact.
                            for (var i = 0, len = LibraryMethods.length; i < len; i++) {
                                callWhenReady(this, LibraryMethods[i]);
                            }
                        };

                        LocalForage.prototype.createInstance = function createInstance(options) {
                            return new LocalForage(options);
                        };

                        return LocalForage;
                    }();

                    // The actual localForage object that we expose as a module or via a
                    // global. It's extended by pulling in one of our other libraries.


                    var localforage_js = new LocalForage();

                    module.exports = localforage_js;

                }, { "3": 3 }]
            }, {}, [4])(4)
        });
    }(localforage$1));

    var localforageExports = localforage$1.exports;
    var localforage = /*@__PURE__*/getDefaultExportFromCjs(localforageExports);

    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            Object.defineProperty(this, "listeners", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {}
            });
        }
        Object.defineProperty(EventEmitter.prototype, "on", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (eventName, listener) {
                if (!this.listeners[eventName]) {
                    this.listeners[eventName] = [];
                }
                this.listeners[eventName].push(listener);
            }
        });
        Object.defineProperty(EventEmitter.prototype, "off", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (eventName, listener) {
                var eventListeners = this.listeners[eventName];
                if (eventListeners) {
                    var index = eventListeners.indexOf(listener);
                    if (index !== -1) {
                        eventListeners.splice(index, 1);
                    }
                }
            }
        });
        Object.defineProperty(EventEmitter.prototype, "emit", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (eventName) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var eventListeners = this.listeners[eventName];
                if (eventListeners) {
                    eventListeners.forEach(function (listener) {
                        listener.apply(void 0, args);
                    });
                }
            }
        });
        Object.defineProperty(EventEmitter.prototype, "clear", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (eventName) {
                delete this.listeners[eventName];
            }
        });
        Object.defineProperty(EventEmitter.prototype, "clearAll", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                for (var eventName in this.listeners) {
                    delete this.listeners[eventName];
                }
            }
        });
        return EventEmitter;
    }());

    function getCookie(name) {
        var cookie = document.cookie;
        var cookieArr = cookie.split('; ');
        for (var i = 0; i < cookieArr.length; i++) {
            var cookieItem = cookieArr[i];
            var _a = cookieItem.split('='), cookieName = _a[0], cookieValue = _a[1];
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return '';
    }

    var LOG_RETENTION_STRATEGY_AGE_GATE_KEY = 'lrsag';
    var LOG_RETENTION_STRATEGY_AGE_GATE;
    (function (LOG_RETENTION_STRATEGY_AGE_GATE) {
        LOG_RETENTION_STRATEGY_AGE_GATE["DEFAULT"] = "0";
        LOG_RETENTION_STRATEGY_AGE_GATE["MINOR"] = "1";
    })(LOG_RETENTION_STRATEGY_AGE_GATE || (LOG_RETENTION_STRATEGY_AGE_GATE = {}));
    function checkMinor() {
        var minor = getCookie(LOG_RETENTION_STRATEGY_AGE_GATE_KEY) ===
            LOG_RETENTION_STRATEGY_AGE_GATE.MINOR;
        return minor;
    }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    // @ts-nocheck
    function debounce$1(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
        var lastInvokeTime = 0;
        var leading = false;
        var maxing = false;
        var trailing = true;
        // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
        var useRAF = !wait && wait !== 0 && typeof window.requestAnimationFrame === 'function';
        if (typeof func !== 'function') {
            throw new TypeError('Expected a function');
        }
        wait = +wait || 0;
        if (typeof options === 'object') {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
            var args = lastArgs;
            var thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
        }
        function startTimer(pendingFunc, wait) {
            if (useRAF) {
                window.cancelAnimationFrame(timerId);
                return window.requestAnimationFrame(pendingFunc);
            }
            return setTimeout(pendingFunc, wait);
        }
        function cancelTimer(id) {
            if (useRAF) {
                return window.cancelAnimationFrame(id);
            }
            clearTimeout(id);
        }
        function leadingEdge(time) {
            // Reset any `maxWait` timer.
            lastInvokeTime = time;
            // Start the timer for the trailing edge.
            timerId = startTimer(timerExpired, wait);
            // Invoke the leading edge.
            return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime;
            var timeSinceLastInvoke = time - lastInvokeTime;
            var timeWaiting = wait - timeSinceLastCall;
            return maxing
                ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
                : timeWaiting;
        }
        function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime;
            var timeSinceLastInvoke = time - lastInvokeTime;
            // Either this is the first call, activity has stopped and we're at the
            // trailing edge, the system time has gone backwards and we're treating
            // it as the trailing edge, or we've hit the `maxWait` limit.
            return (lastCallTime === undefined ||
                timeSinceLastCall >= wait ||
                timeSinceLastCall < 0 ||
                (maxing && timeSinceLastInvoke >= maxWait));
        }
        function timerExpired() {
            var time = Date.now();
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            // Restart the timer.
            timerId = startTimer(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
            timerId = undefined;
            // Only invoke if we have `lastArgs` which means `func` has been
            // debounced at least once.
            if (trailing && lastArgs) {
                return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
        }
        function cancel() {
            if (timerId !== undefined) {
                cancelTimer(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
        }
        function flush() {
            return timerId === undefined ? result : trailingEdge(Date.now());
        }
        function pending() {
            return timerId !== undefined;
        }
        function debounced() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var time = Date.now();
            var isInvoking = shouldInvoke(time);
            lastArgs = args;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
                if (timerId === undefined) {
                    return leadingEdge(lastCallTime);
                }
                if (maxing) {
                    // Handle invocations in a tight loop.
                    timerId = startTimer(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                }
            }
            if (timerId === undefined) {
                timerId = startTimer(timerExpired, wait);
            }
            return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        debounced.pending = pending;
        return debounced;
    }

    function debounce(wait, maxWait) {
        return function (target, propertyKey, descriptor) {
            var originalMethod = descriptor.value;
            descriptor.value = debounce$1(originalMethod, wait, { maxWait: maxWait });
            return descriptor;
        };
    }

    var LocalStorageStore = /** @class */ (function () {
        function LocalStorageStore(storageKeySuffix) {
            var _this = this;
            Object.defineProperty(this, "storageKey", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "innerStore", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "updateLocalDataSync", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: function () {
                    try {
                        var data = _this.innerStore;
                        var value = JSON.stringify(data);
                        localStorage.setItem(_this.storageKey, value);
                    }
                    catch (error) {
                        // noop
                    }
                }
            });
            this.storageKey = "MIHOYO_H5LOG_".concat(storageKeySuffix);
            var localData = this.getLocalData(localStorage.getItem(this.storageKey));
            this.innerStore = localData ? localData : [];
            this.updateLocalData();
            window.addEventListener('unload', this.updateLocalDataSync);
        }
        Object.defineProperty(LocalStorageStore.prototype, "destroy", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                window.removeEventListener('unload', this.updateLocalDataSync);
            }
        });
        Object.defineProperty(LocalStorageStore.prototype, "getLocalData", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (data) {
                try {
                    if (!data)
                        return false;
                    var parsedData = JSON.parse(data);
                    if (!Array.isArray(parsedData))
                        return false;
                    return parsedData.filter(function (v) { return v.app_name; });
                }
                catch (error) {
                    return false;
                }
            }
        });
        Object.defineProperty(LocalStorageStore.prototype, "updateLocalData", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                try {
                    var data = this.innerStore;
                    var value = JSON.stringify(data);
                    localStorage.setItem(this.storageKey, value);
                }
                catch (error) {
                    if (error instanceof DOMException &&
                        (error.code === 22 ||
                            error.code === 1014 ||
                            error.name === 'QuotaExceededError' ||
                            error.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
                        // 处理 localStorage 容量不足的错误
                        this.innerStore.splice(0, this.innerStore.length / 2);
                    }
                }
            }
        });
        Object.defineProperty(LocalStorageStore.prototype, "push", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (data) {
                this.innerStore.push(data);
                this.updateLocalData();
            }
        });
        Object.defineProperty(LocalStorageStore.prototype, "length", {
            get: function () {
                return this.innerStore.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LocalStorageStore.prototype, "splice", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (start, deleteCount) {
                var _a;
                var items = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    items[_i - 2] = arguments[_i];
                }
                var data;
                if (typeof deleteCount === 'number' && Array.isArray(items)) {
                    data = (_a = this.innerStore).splice.apply(_a, __spreadArray([start, deleteCount], items, false));
                }
                else {
                    data = this.innerStore.splice(start, deleteCount);
                }
                this.updateLocalData();
                return data;
            }
        });
        Object.defineProperty(LocalStorageStore.prototype, "getFirst", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return this.innerStore[0];
            }
        });
        Object.defineProperty(LocalStorageStore.prototype, "getLast", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.innerStore.length === 0)
                    return undefined;
                return this.innerStore[this.innerStore.length - 1];
            }
        });
        __decorate([
            debounce(200, 1000)
        ], LocalStorageStore.prototype, "updateLocalData", null);
        return LocalStorageStore;
    }());

    var MemoryStore = /** @class */ (function () {
        function MemoryStore() {
            Object.defineProperty(this, "innerStore", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.innerStore = [];
        }
        Object.defineProperty(MemoryStore.prototype, "destroy", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                /* noop */
            }
        });
        Object.defineProperty(MemoryStore.prototype, "push", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (data) {
                this.innerStore.push(data);
            }
        });
        Object.defineProperty(MemoryStore.prototype, "length", {
            get: function () {
                return this.innerStore.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MemoryStore.prototype, "splice", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (start, deleteCount) {
                var _a;
                var items = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    items[_i - 2] = arguments[_i];
                }
                var data;
                if (typeof deleteCount === 'number' && Array.isArray(items)) {
                    data = (_a = this.innerStore).splice.apply(_a, __spreadArray([start, deleteCount], items, false));
                }
                else {
                    data = this.innerStore.splice(start, deleteCount);
                }
                return data;
            }
        });
        Object.defineProperty(MemoryStore.prototype, "getFirst", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return this.innerStore[0];
            }
        });
        Object.defineProperty(MemoryStore.prototype, "getLast", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.innerStore.length === 0)
                    return undefined;
                return this.innerStore[this.innerStore.length - 1];
            }
        });
        return MemoryStore;
    }());

    var IStorageType;
    (function (IStorageType) {
        IStorageType["Memory"] = "memory";
        IStorageType["Local"] = "local";
        IStorageType["IndexedDB"] = "indexedDB";
    })(IStorageType || (IStorageType = {}));

    var IndexedDBStorageStore = /** @class */ (function () {
        function IndexedDBStorageStore(storageKeySuffix) {
            var _this = this;
            Object.defineProperty(this, "storageKey", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "innerStorage", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "innerStore", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.storageKey = storageKeySuffix;
            this.innerStorage = localforage.createInstance({
                driver: [localforage.INDEXEDDB],
                name: 'MIHOYO_H5LOG',
                storeName: this.storageKey,
            });
            this.innerStore = [];
            // 历史数据进栈
            this.getIndexedDBData()
                .then(function (list) {
                    var _a;
                    if (Array.isArray(list)) {
                        (_a = _this.innerStore).unshift.apply(_a, list);
                    }
                })
                .then(function () {
                    var _a;
                    // migrate from local storage
                    var legacyStore = new LocalStorageStore(storageKeySuffix);
                    if (legacyStore.length) {
                        var legacyData_1 = legacyStore.splice(0, legacyStore.length);
                        (_a = _this.innerStore).unshift.apply(_a, legacyData_1);
                        _this.updateIndexedDBData()
                            .catch(function () {
                                legacyStore.splice.apply(legacyStore, __spreadArray([0, 0], legacyData_1, false));
                            })
                            .finally(function () {
                                legacyStore.destroy();
                            });
                    }
                    else {
                        legacyStore.destroy();
                    }
                });
        }
        Object.defineProperty(IndexedDBStorageStore.prototype, "destroy", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                /* noop */
            }
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "updateIndexedDBData", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.innerStorage.setItem('H5LOG_LIST', this.innerStore)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "getIndexedDBData", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.innerStorage.getItem('H5LOG_LIST')];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "push", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (data) {
                this.innerStore.push(data);
                this.updateIndexedDBData();
            }
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "getFirst", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return this.innerStore[0];
            }
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "getLast", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.innerStore.length === 0)
                    return undefined;
                return this.innerStore[this.innerStore.length - 1];
            }
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "length", {
            get: function () {
                return this.innerStore.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IndexedDBStorageStore.prototype, "splice", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (start, deleteCount) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                data = this.innerStore.splice(start, deleteCount);
                                return [4 /*yield*/, this.updateIndexedDBData()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, data];
                        }
                    });
                });
            }
        });
        return IndexedDBStorageStore;
    }());

    var H5logCollector = /** @class */ (function (_super) {
        __extends(H5logCollector, _super);
        function H5logCollector(collectOptions) {
            var _a, _b, _c, _d;
            var _this = _super.call(this) || this;
            Object.defineProperty(_this, "collectOptions", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(_this, "store", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(_this, "prevBatchEventTimes", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(_this, "timer", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(_this, "dataIndex", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 0
            }); // 全局数据索引，用于配合快速查找所有error数据
            Object.defineProperty(_this, "errorIndexList", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: []
            }); // error数据索引
            Object.defineProperty(_this, "isFlushing", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: false
            }); // 是否正在flush
            if (collectOptions) {
                var DEFAULT_COLLECTOR_OPTIONS = H5logCollector.DEFAULT_COLLECTOR_OPTIONS;
                var batchSize = (_a = collectOptions.batchSize, _a === void 0 ? DEFAULT_COLLECTOR_OPTIONS.batchSize : _a), batchInterval = (_b = collectOptions.batchInterval, _b === void 0 ? DEFAULT_COLLECTOR_OPTIONS.batchInterval : _b), storageType = (_c = collectOptions.storageType, _c === void 0 ? DEFAULT_COLLECTOR_OPTIONS.storageType : _c);
                var highPriorityList = (_d = collectOptions.highPriorityList, _d === void 0 ? DEFAULT_COLLECTOR_OPTIONS.highPriorityList : _d);
                if (typeof batchSize === 'number' && (batchSize > 20 || batchSize <= 0)) {
                    console.warn("[h5log]: The parameter 'batchSize' is invalid.");
                    batchSize = DEFAULT_COLLECTOR_OPTIONS.batchSize;
                }
                if (typeof batchInterval === 'number' && batchInterval <= 0) {
                    console.warn("[h5log]: The parameter 'batchInterval' is invalid.\"");
                    batchInterval = DEFAULT_COLLECTOR_OPTIONS.batchInterval;
                }
                if (storageType === IStorageType.Local ||
                    storageType === IStorageType.IndexedDB) {
                    var storageKeySuffix = collectOptions.storageKeySuffix;
                    if (storageType === IStorageType.IndexedDB &&
                        !localforage.supports(localforage.INDEXEDDB)) {
                        storageType = IStorageType.Local;
                    }
                    _this.store =
                        storageType === IStorageType.IndexedDB
                            ? new IndexedDBStorageStore(storageKeySuffix)
                            : new LocalStorageStore(storageKeySuffix);
                    _this.collectOptions = {
                        batchSize: batchSize,
                        highPriorityList: highPriorityList,
                        storageType: storageType,
                        batchInterval: batchInterval,
                        storageKeySuffix: storageKeySuffix,
                    };
                }
                else {
                    _this.store = new MemoryStore();
                    _this.collectOptions = {
                        batchSize: batchSize,
                        highPriorityList: highPriorityList,
                        storageType: storageType,
                        batchInterval: batchInterval,
                    };
                }
            }
            else {
                _this.collectOptions = H5logCollector.DEFAULT_COLLECTOR_OPTIONS;
                _this.store = new MemoryStore();
            }
            _this.prevBatchEventTimes = 0;
            _this.flush = _this.flush.bind(_this);
            _this.findIndex = _this.findIndex.bind(_this);
            _this.initialInterval();
            return _this;
        }
        Object.defineProperty(H5logCollector.prototype, "first", {
            get: function () {
                return this.store.getFirst();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(H5logCollector.prototype, "last", {
            get: function () {
                return this.store.getLast();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(H5logCollector.prototype, "list", {
            get: function () {
                return this.store.innerStore;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * find index of item that it's dataIndex === given dataIndex
         * @param dataIndex
         * @returns
         */
        Object.defineProperty(H5logCollector.prototype, "findIndex", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (dataIndex) {
                var dataList = this.list;
                var lo = 0;
                var hi = dataList.length - 1;
                while (lo <= hi) {
                    var mid = Math.floor((lo + hi) / 2);
                    var currIndex = dataList[mid].dataIndex;
                    if (currIndex === dataIndex) {
                        return mid;
                    }
                    else if (currIndex < dataIndex) {
                        lo = mid + 1;
                    }
                    else {
                        hi = mid - 1;
                    }
                }
                return -1;
            }
        });
        Object.defineProperty(H5logCollector.prototype, "flush", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (options) {
                var _a, _b, _c, _d, _e, _f;
                var _this = this;
                if (this.collectOptions.storageType === IStorageType.IndexedDB) {
                    console.warn("[h5log]: storageType indexedDB not support flush");
                    return;
                }
                this.isFlushing = true;
                var tailFirst = (_a = options || {}, _b = _a.tailFirst, _b === void 0 ? false : _b), highPriorityFirst = (_c = _a.highPriorityFirst, _c === void 0 ? false : _c), batchSize = (_d = _a.batchSize, _d === void 0 ? this.collectOptions.batchSize : _d), interval = (_e = _a.interval, _e === void 0 ? this.collectOptions.batchInterval : _e), waitPrevious = (_f = _a.waitPrevious, _f === void 0 ? false : _f);
                var store = this.store;
                if (store.length === 0) {
                    this.isFlushing = false;
                    this.resetInterval(1);
                    return;
                }
                this.disableInterval();
                var timeRemain = interval - (Date.now() - this.prevBatchEventTimes);
                if (waitPrevious && timeRemain > 0) {
                    setTimeout(function () {
                        _this.flush(options);
                    }, timeRemain + 1);
                }
                var data = [];
                // send error data first
                if (highPriorityFirst && this.errorIndexList.length > 0) {
                    var errorIndex = tailFirst
                        ? this.errorIndexList.splice(Math.max(this.errorIndexList.length - batchSize, 0), batchSize)
                        : this.errorIndexList.splice(0, batchSize);
                    data = errorIndex
                        .map(function (dIndex) {
                            var index = _this.findIndex(dIndex);
                            return index >= 0 ? store.splice(index, 1) || [] : [];
                        })
                        .reduce(function (prev, curr) { return __spreadArray(__spreadArray([], prev, true), curr, true); }, []);
                }
                var sizeRemain = batchSize - data.length;
                if (sizeRemain > 0 && store.length > 0) {
                    data = __spreadArray(__spreadArray([], data, true), (tailFirst
                        ? store.splice(Math.max(0, store.length - sizeRemain), sizeRemain)
                        : store.splice(0, sizeRemain)), true);
                }
                this.prevBatchEventTimes = Date.now();
                this.emit('flush', data);
                setTimeout(function () {
                    _this.flush(options);
                }, interval);
            }
        });
        Object.defineProperty(H5logCollector.prototype, "collect", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (data) {
                var _a;
                this.dataIndex += 1;
                this.store.push(__assign(__assign(__assign({}, data), { dataIndex: this.dataIndex }), (checkMinor()
                    ? (_a = {},
                        _a[LOG_RETENTION_STRATEGY_AGE_GATE_KEY] = LOG_RETENTION_STRATEGY_AGE_GATE.MINOR,
                        _a) : {})));
                if (data.level === 'error') {
                    this.errorIndexList.push(this.dataIndex);
                }
                this.shouldSend();
            }
        });
        Object.defineProperty(H5logCollector.prototype, "disableInterval", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
        });
        Object.defineProperty(H5logCollector.prototype, "resetInterval", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (rate) {
                if (this.isFlushing) {
                    console.info('is flushing, can not reset interval');
                    return;
                }
                this.disableInterval();
                var batchInterval = this.collectOptions.batchInterval;
                this.collectOptions.batchInterval = batchInterval * rate;
                this.initialInterval();
            }
        });
        Object.defineProperty(H5logCollector.prototype, "initialInterval", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var _this = this;
                var batchInterval = this.collectOptions.batchInterval;
                this.timer = setInterval(function () {
                    _this.shouldSend(true);
                }, batchInterval);
            }
        });
        Object.defineProperty(H5logCollector.prototype, "emitBatch", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var batchSize, batchInterval, dis, data;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                batchSize = (_a = this.collectOptions, _a.batchSize), batchInterval = _a.batchInterval;
                                dis = Date.now() - this.prevBatchEventTimes;
                                if (dis < batchInterval) {
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, this.store.splice(0, batchSize)];
                            case 1:
                                data = _b.sent();
                                if (data.length > 0) {
                                    this.removeErrorIndexRange(data[0].dataIndex, data[data.length - 1].dataIndex);
                                }
                                this.prevBatchEventTimes = Date.now();
                                this.emit('flush', data);
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
        Object.defineProperty(H5logCollector.prototype, "shouldSend", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (checkStoreSize) {
                var _a;
                if (checkStoreSize === void 0) { checkStoreSize = false; }
                var highPriorityList = (_a = this.collectOptions, _a.highPriorityList), batchSize = _a.batchSize;
                if (this.last && highPriorityList.includes(this.last.level)) {
                    this.emitBatch();
                    return;
                }
                if (this.store.length >= batchSize) {
                    this.emitBatch();
                    return;
                }
                if (checkStoreSize && this.store.length > 0) {
                    this.emitBatch();
                }
            }
        });
        /**
         * remove [start, endExclusive) from errorIndexList
         */
        Object.defineProperty(H5logCollector.prototype, "removeErrorIndexRange", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (start, endExclusive) {
                if (start > endExclusive) {
                    return;
                }
                // find the index that indexList[index] >= target
                var binarySearch = function (target, indexList) {
                    var lo = 0;
                    var hi = indexList.length - 1;
                    while (lo <= hi) {
                        var mid = Math.floor((lo + hi) / 2);
                        if (indexList[mid] < target) {
                            lo = mid + 1;
                        }
                        else {
                            hi = mid - 1;
                        }
                    }
                    return lo;
                };
                var startIndex = binarySearch(start, this.errorIndexList);
                var endIndex = binarySearch(endExclusive, this.errorIndexList);
                this.errorIndexList.splice(startIndex, endIndex - startIndex);
            }
        });
        Object.defineProperty(H5logCollector, "DEFAULT_COLLECTOR_OPTIONS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                highPriorityList: ['error'],
                storageType: IStorageType.Memory,
                batchSize: 20,
                batchInterval: 3 * 1000,
            }
        });
        return H5logCollector;
    }(EventEmitter));

    /**
     * @link https://km.mihoyo.com/articleBase/351/722766
     */
    var CNBatchUrl;
    (function (CNBatchUrl) {
        CNBatchUrl["development"] = "https://testing-h5log-api-dualstack.mihoyo.com/common/h5log/log/batch?topic=";
        CNBatchUrl["test"] = "https://testing-h5log-api-dualstack.mihoyo.com/common/h5log/log/batch?topic=";
        CNBatchUrl["prerelease"] = "https://h5log-api-dualstack.mihoyo.com/common/h5log/log/batch?topic=";
        CNBatchUrl["beta"] = "https://h5log-api-dualstack.mihoyo.com/common/h5log/log/batch?topic=";
        CNBatchUrl["sandbox"] = "https://testing-h5log-api-dualstack.mihoyo.com/common/h5log/log/batch?topic=";
        CNBatchUrl["production"] = "https://h5log-api-dualstack.mihoyo.com/common/h5log/log/batch?topic=";
    })(CNBatchUrl || (CNBatchUrl = {}));
    var OSBatchUrl;
    (function (OSBatchUrl) {
        OSBatchUrl["development"] = "https://testing-h5log-api.hoyoverse.com/common/h5log/log/batch?topic=";
        OSBatchUrl["test"] = "https://testing-h5log-api.hoyoverse.com/common/h5log/log/batch?topic=";
        OSBatchUrl["prerelease"] = "https://minor-api-os.hoyoverse.com/common/h5log/log/batch?topic=";
        OSBatchUrl["beta"] = "https://minor-api-os.hoyoverse.com/common/h5log/log/batch?topic=";
        OSBatchUrl["sandbox"] = "https://testing-h5log-api.hoyoverse.com/common/h5log/log/batch?topic=";
        OSBatchUrl["production"] = "https://minor-api-os.hoyoverse.com/common/h5log/log/batch?topic=";
    })(OSBatchUrl || (OSBatchUrl = {}));

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    function chunk(arr, size) {
        var ret = [];
        size = size || 1;
        for (var i = 0, len = Math.ceil(arr.length / size); i < len; i++) {
            var start = i * size;
            var end = start + size;
            ret.push(arr.slice(start, end));
        }
        return ret;
    }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    var ucs2 = {
        encode: function (arr) {
            if (arr.length < 32768) {
                // eslint-disable-next-line prefer-spread
                return String.fromCodePoint.apply(String, arr);
            }
            return (chunk(arr, 32767)
                // eslint-disable-next-line prefer-spread
                .map(function (nums) { return String.fromCodePoint.apply(String, nums); })
                .join(''));
        },
        decode: function (str) {
            var ret = [];
            var i = 0;
            var len = str.length;
            while (i < len) {
                var c = str.charCodeAt(i++);
                // A high surrogate
                if (c >= 0xd800 && c <= 0xdbff && i < len) {
                    var tail = str.charCodeAt(i++);
                    // nextC >= 0xDC00 && nextC <= 0xDFFF
                    if ((tail & 0xfc00) === 0xdc00) {
                        // C = (H - 0xD800) * 0x400 + L - 0xDC00 + 0x10000
                        ret.push(((c & 0x3ff) << 10) + (tail & 0x3ff) + 0x10000);
                    }
                    else {
                        ret.push(c);
                        i--;
                    }
                }
                else {
                    ret.push(c);
                }
            }
            return ret;
        },
    };

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    var utf8 = {
        encode: function (str) {
            var codePoints = ucs2.decode(str);
            var byteArr = '';
            for (var i = 0, len = codePoints.length; i < len; i++) {
                byteArr += encodeCodePoint(codePoints[i]);
            }
            return byteArr;
        },
        decode: function (str, safe) {
            byteArr = ucs2.decode(str);
            byteIdx = 0;
            byteCount = byteArr.length;
            codePoint = 0;
            bytesSeen = 0;
            bytesNeeded = 0;
            lowerBoundary = 0x80;
            upperBoundary = 0xbf;
            var codePoints = [];
            var tmp;
            while ((tmp = decodeCodePoint(safe)) !== false) {
                codePoints.push(tmp);
            }
            return ucs2.encode(codePoints);
        },
    };
    var fromCharCode = String.fromCharCode;
    function encodeCodePoint(codePoint) {
        // U+0000 to U+0080, ASCII code point
        if ((codePoint & 0xffffff80) === 0) {
            return fromCharCode(codePoint);
        }
        var ret = '', count, offset;
        // U+0080 to U+07FF, inclusive
        if ((codePoint & 0xfffff800) === 0) {
            count = 1;
            offset = 0xc0;
        }
        else if ((codePoint & 0xffff0000) === 0) {
            // U+0800 to U+FFFF, inclusive
            count = 2;
            offset = 0xe0;
        }
        else if ((codePoint & 0xffe00000) == 0) {
            // U+10000 to U+10FFFF, inclusive
            count = 3;
            offset = 0xf0;
        }
        ret += fromCharCode((codePoint >> (6 * count)) + offset);
        while (count > 0) {
            var tmp = codePoint >> (6 * (count - 1));
            ret += fromCharCode(0x80 | (tmp & 0x3f));
            count--;
        }
        return ret;
    }
    var byteArr, byteIdx, byteCount, codePoint, bytesSeen, bytesNeeded, lowerBoundary, upperBoundary;
    function decodeCodePoint(safe) {
        /* eslint-disable no-constant-condition */
        while (true) {
            if (byteIdx >= byteCount && bytesNeeded) {
                if (safe)
                    return goBack();
                throw new Error('Invalid byte index');
            }
            if (byteIdx === byteCount)
                return false;
            var byte = byteArr[byteIdx];
            byteIdx++;
            if (!bytesNeeded) {
                // 0x00 to 0x7F
                if ((byte & 0x80) === 0) {
                    return byte;
                }
                // 0xC2 to 0xDF
                if ((byte & 0xe0) === 0xc0) {
                    bytesNeeded = 1;
                    codePoint = byte & 0x1f;
                }
                else if ((byte & 0xf0) === 0xe0) {
                    // 0xE0 to 0xEF
                    if (byte === 0xe0)
                        lowerBoundary = 0xa0;
                    if (byte === 0xed)
                        upperBoundary = 0x9f;
                    bytesNeeded = 2;
                    codePoint = byte & 0xf;
                }
                else if ((byte & 0xf8) === 0xf0) {
                    // 0xF0 to 0xF4
                    if (byte === 0xf0)
                        lowerBoundary = 0x90;
                    if (byte === 0xf4)
                        upperBoundary = 0x8f;
                    bytesNeeded = 3;
                    codePoint = byte & 0x7;
                }
                else {
                    if (safe)
                        return goBack();
                    throw new Error('Invalid UTF-8 detected');
                }
                continue;
            }
            if (byte < lowerBoundary || byte > upperBoundary) {
                if (safe) {
                    byteIdx--;
                    return goBack();
                }
                throw new Error('Invalid continuation byte');
            }
            lowerBoundary = 0x80;
            upperBoundary = 0xbf;
            codePoint = (codePoint << 6) | (byte & 0x3f);
            bytesSeen++;
            if (bytesSeen !== bytesNeeded)
                continue;
            var tmp = codePoint;
            codePoint = 0;
            bytesNeeded = 0;
            bytesSeen = 0;
            return tmp;
        }
    }
    function goBack() {
        var start = byteIdx - bytesSeen - 1;
        byteIdx = start + 1;
        codePoint = 0;
        bytesNeeded = 0;
        bytesSeen = 0;
        lowerBoundary = 0x80;
        upperBoundary = 0xbf;
        return byteArr[start];
    }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    function bytesToStr(bytes) {
        var str = [];
        for (var i = 0, len = bytes.length; i < len; i++) {
            str.push(String.fromCharCode(bytes[i]));
        }
        str = str.join('');
        str = utf8.decode(str);
        return str;
    }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    function strToBytes(str) {
        var bytes = [];
        str = utf8.encode(str);
        for (var i = 0, len = str.length; i < len; i++) {
            bytes.push(str.charCodeAt(i) & 0xff);
        }
        return bytes;
    }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    var base64 = {
        encode: function (bytes) {
            var ret = [];
            var len = bytes.length;
            var remain = len % 3;
            len = len - remain;
            for (var i = 0; i < len; i += 3) {
                ret.push(numToBase64((bytes[i] << 16) + (bytes[i + 1] << 8) + bytes[i + 2]));
            }
            len = bytes.length;
            var tmp;
            if (remain === 1) {
                tmp = bytes[len - 1];
                ret.push(code[tmp >> 2]);
                ret.push(code[(tmp << 4) & 0x3f]);
                ret.push('==');
            }
            else if (remain === 2) {
                tmp = (bytes[len - 2] << 8) + bytes[len - 1];
                ret.push(code[tmp >> 10]);
                ret.push(code[(tmp >> 4) & 0x3f]);
                ret.push(code[(tmp << 2) & 0x3f]);
                ret.push('=');
            }
            return ret.join('');
        },
        decode: function (str) {
            var len = str.length, remain = 0;
            if (str[len - 2] === '=')
                remain = 2;
            else if (str[len - 1] === '=')
                remain = 1;
            var ret = new Array((len * 3) / 4 - remain);
            len = remain > 0 ? len - 4 : len;
            var i, j;
            for (i = 0, j = 0; i < len; i += 4) {
                var num = base64ToNum(str[i], str[i + 1], str[i + 2], str[i + 3]);
                ret[j++] = (num >> 16) & 0xff;
                ret[j++] = (num >> 8) & 0xff;
                ret[j++] = num & 0xff;
            }
            var tmp;
            if (remain === 2) {
                tmp =
                    (codeMap[str.charCodeAt(i)] << 2) |
                    (codeMap[str.charCodeAt(i + 1)] >> 4);
                ret[j++] = tmp & 0xff;
            }
            else if (remain === 1) {
                tmp =
                    (codeMap[str.charCodeAt(i)] << 10) |
                    (codeMap[str.charCodeAt(i + 1)] << 4) |
                    (codeMap[str.charCodeAt(i + 2)] >> 2);
                ret[j++] = (tmp >> 8) & 0xff;
                ret[j++] = tmp & 0xff;
            }
            return ret;
        },
    };
    var codeMap = [];
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; i++) {
        codeMap[code.charCodeAt(i)] = i;
    }
    function numToBase64(num) {
        return (code[(num >> 18) & 0x3f] +
            code[(num >> 12) & 0x3f] +
            code[(num >> 6) & 0x3f] +
            code[num & 0x3f]);
    }
    function base64ToNum(str1, str2, str3, str4) {
        return ((codeMap[str1.charCodeAt(0)] << 18) |
            (codeMap[str2.charCodeAt(0)] << 12) |
            (codeMap[str3.charCodeAt(0)] << 6) |
            codeMap[str4.charCodeAt(0)]);
    }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-nocheck
    function rc4(key, str, decrypt) {
        key = strToBytes(key);
        if (!decrypt) {
            str = strToBytes(str);
        }
        else {
            str = base64.decode(str);
        }
        var result = [];
        var s = [];
        var j = 0;
        var i = 0;
        var x;
        for (i = 0; i < 256; i++) {
            s[i] = i;
        }
        for (i = 0; i < 256; i++) {
            j = (j + s[i] + key[i % key.length]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }
        i = 0;
        j = 0;
        for (var y = 0, len = str.length; y < len; y++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
            result.push(str[y] ^ s[(s[i] + s[j]) % 256]);
        }
        return !decrypt ? base64.encode(result) : bytesToStr(result);
    }
    var rc4$1 = {
        encrypt: function (key, str) {
            return rc4(key, str, false);
        },
        decrypt: function (key, str) {
            return rc4(key, str, true);
        },
    };

    var SECRET_KEY = 'F#ju0q8I9HbmH8PMpJzzBee&p0b5h@Yb';
    function rc4EncryptWithBase64(str, key) {
        if (key === void 0) { key = SECRET_KEY; }
        try {
            return rc4$1.encrypt(key, str);
        }
        catch (error) {
            return '';
        }
    }

    function request(options) {
        var xhr = new XMLHttpRequest();
        var method = options.method || 'GET';
        var url = options.url;
        var async = options.async || true;
        var timeout = options.timeout || 0;
        xhr.open(method, url, async);
        xhr.timeout = timeout;
        if (options.headers) {
            for (var key in options.headers) {
                xhr.setRequestHeader(key, options.headers[key]);
            }
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(options.data);
        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                try {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var response = JSON.parse(xhr.responseText);
                        if (response.retcode === 0) {
                            resolve(response);
                        }
                        else {
                            reject(xhr);
                        }
                    }
                    else {
                        reject(xhr);
                    }
                }
                catch (error) {
                    reject(xhr);
                }
            };
            xhr.onerror = function () {
                reject(xhr);
            };
            xhr.ontimeout = function () {
                reject(__assign(__assign({}, xhr), { isTimeout: true }));
            };
        });
    }

    var BatchUrl;
    (function (BatchUrl) {
        BatchUrl["development"] = "https://devapi-takumi.mihoyo.com/common/h5log/log/batch?topic=";
        BatchUrl["test"] = "https://devapi-takumi.mihoyo.com/common/h5log/log/batch?topic=";
        BatchUrl["prerelease"] = "https://api-takumi.mihoyo.com/common/h5log/log/batch?topic=";
        BatchUrl["beta"] = "https://minor-api.mihoyo.com/common/h5log/log/batch?topic=";
        BatchUrl["sandbox"] = "https://devapi-takumi.mihoyo.com/common/h5log/log/batch?topic=";
        BatchUrl["production"] = "https://minor-api.mihoyo.com/common/h5log/log/batch?topic=";
    })(BatchUrl || (BatchUrl = {}));
    var SenderEnv;
    (function (SenderEnv) {
        SenderEnv["Development"] = "development";
        SenderEnv["Test"] = "test";
        SenderEnv["Prerelease"] = "prerelease";
        SenderEnv["Beta"] = "beta";
        SenderEnv["Sandbox"] = "sandbox";
        SenderEnv["Production"] = "production";
    })(SenderEnv || (SenderEnv = {}));
    var Region;
    (function (Region) {
        Region["CN"] = "cn";
        Region["OS"] = "os";
    })(Region || (Region = {}));

    var H5logSender = /** @class */ (function (_super) {
        __extends(H5logSender, _super);
        function H5logSender(opts) {
            var _this = _super.call(this) || this;
            Object.defineProperty(_this, "sendOptions", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            _this.sendOptions = {
                topic: opts.topic,
                minorTopic: opts.minorTopic,
                env: opts.env || H5logSender.DEFAULT_SENDER_OPTIONS.env,
                region: opts.region || H5logSender.DEFAULT_SENDER_OPTIONS.region,
            };
            return _this;
        }
        Object.defineProperty(H5logSender.prototype, "send", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var env, topic, minorTopic, region, baseUrl, defaultData, minorData, innerSend;
                    var _a, _b;
                    var _this = this;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                env = (_a = this.sendOptions, _a.env), topic = _a.topic, minorTopic = _a.minorTopic, region = _a.region;
                                baseUrl = region === Region.CN ? CNBatchUrl : OSBatchUrl;
                                defaultData = (_b = [[], []], _b[0]), minorData = _b[1];
                                data.forEach(function (item) {
                                    var isMinor = LOG_RETENTION_STRATEGY_AGE_GATE_KEY in item &&
                                        item[LOG_RETENTION_STRATEGY_AGE_GATE_KEY] ===
                                        LOG_RETENTION_STRATEGY_AGE_GATE.MINOR;
                                    if (isMinor) {
                                        minorData.push(item);
                                    }
                                    else {
                                        defaultData.push(item);
                                    }
                                });
                                innerSend = function (data, isMinor) {
                                    return __awaiter(_this, void 0, void 0, function () {
                                        var useMinorTopic, url, error_1;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    useMinorTopic = isMinor && minorTopic;
                                                    url = "".concat(baseUrl[env]).concat(useMinorTopic ? minorTopic : topic).concat(isMinor
                                                        ? "&".concat(LOG_RETENTION_STRATEGY_AGE_GATE_KEY, "=").concat(LOG_RETENTION_STRATEGY_AGE_GATE.MINOR)
                                                        : '');
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    return [4 /*yield*/, request({
                                                        url: url,
                                                        method: 'POST',
                                                        timeout: 5000,
                                                        data: JSON.stringify({
                                                            data: rc4EncryptWithBase64(JSON.stringify({ data: data })),
                                                        }),
                                                    })];
                                                case 2:
                                                    _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    error_1 = _a.sent();
                                                    if (error_1 instanceof XMLHttpRequest) {
                                                        if (error_1.status > 400) {
                                                            this.emit('serverError');
                                                        }
                                                    }
                                                    this.emit('restoreData', data);
                                                    return [3 /*break*/, 4];
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    });
                                };
                                return [4 /*yield*/, Promise.allSettled([defaultData, minorData].map(function (data, i) {
                                    if (data.length) {
                                        return innerSend(data, i === 1);
                                    }
                                    else {
                                        return Promise.resolve();
                                    }
                                }))];
                            case 1:
                                _c.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
        Object.defineProperty(H5logSender, "SECRET_KEY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SECRET_KEY
        });
        Object.defineProperty(H5logSender, "DEFAULT_SENDER_OPTIONS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                env: SenderEnv.Production,
                region: Region.CN,
            }
        });
        return H5logSender;
    }(EventEmitter));

    var Level;
    (function (Level) {
        Level["Error"] = "error";
        Level["Warn"] = "warn";
        Level["Info"] = "info";
    })(Level || (Level = {}));
    var ErrorCode;
    (function (ErrorCode) {
        ErrorCode["Error"] = "-1";
    })(ErrorCode || (ErrorCode = {}));
    var Code;
    (function (Code) {
        Code["Warn"] = "0";
        Code["Info"] = "0";
    })(Code || (Code = {}));

    // https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
    var uuidv4 = function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    };

    var H5log = /** @class */ (function () {
        function H5log(collector, sender, options) {
            var _this = this;
            var _a, _b;
            Object.defineProperty(this, "collector", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "sender", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "flushPromise", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: null
            });
            Object.defineProperty(this, "flushResolve", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: null
            });
            Object.defineProperty(this, "options", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "commonInfo", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "serverErrorCount", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.collector = collector;
            this.sender = sender;
            this.commonInfo = null;
            this.options = {
                enable: (_a = options === null || options === void 0 ? void 0 : options.enable) !== null && _a !== void 0 ? _a : true,
                debug: (_b = options === null || options === void 0 ? void 0 : options.debug) !== null && _b !== void 0 ? _b : false,
            };
            this.serverErrorCount = 0;
            this.sender.send = this.sender.send.bind(this.sender);
            this.collector.on('flush', function (data) {
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.options.debug) {
                                    console.log('flush', data.map(function (item) { return item.level; }));
                                }
                                return [4 /*yield*/, this.sender.send(data)];
                            case 1:
                                _a.sent();
                                if (this.collector.list.length === 0) {
                                    this.flushResolve && this.flushResolve();
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            });
            this.sender.on('serverError', function () {
                if (_this.options.debug) {
                    console.log('serverError');
                }
                _this.serverErrorCount += 1;
                if (_this.serverErrorCount >= H5log.MAX_SERVER_ERROR) {
                    _this.options.enable = false;
                    _this.collector.disableInterval();
                }
                else if (_this.serverErrorCount > 1) {
                    _this.collector.resetInterval(_this.serverErrorCount);
                }
            });
            this.sender.on('restoreData', function (data) {
                var _a;
                // 还原数据到队首
                (_a = _this.collector.store).splice.apply(_a, __spreadArray([0, 0], data, false));
            });
        }
        Object.defineProperty(H5log, "create", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (options) {
                var _a, _b, _c, _d, _e;
                if (![
                    'development',
                    'test',
                    'prerelease',
                    'beta',
                    'sandbox',
                    'production',
                ].includes(options.env)) {
                    console.error("[h5log]: parameter env: ".concat(options.env, " is not allowed"));
                    options.env = 'production';
                }
                var env = options.env, topic = options.topic, minorTopic = options.minorTopic, region = (_a = options.region, _a === void 0 ? Region.CN : _a), enable = (_b = options.enable, _b === void 0 ? true : _b), debug = (_c = options.debug, _c === void 0 ? false : _c), collectorOptions = __rest(options, ["env", "topic", "minorTopic", "region", "enable", "debug"]);
                var storageType = (_d = collectorOptions.storageType, _d === void 0 ? 'memory' : _d);
                if (!topic) {
                    console.error("[h5log]: parameter topic is required");
                }
                var collector;
                if (storageType === 'local' || storageType === 'indexedDB') {
                    var storageKeySuffix = (_e = collectorOptions.storageKeySuffix, _e === void 0 ? "".concat(env, "_").concat(topic, "_").concat(region) : _e), otherOpts = __rest(collectorOptions, ["storageKeySuffix"]);
                    collector = new H5logCollector(__assign(__assign({}, otherOpts), { storageKeySuffix: storageKeySuffix }));
                }
                else {
                    collector = new H5logCollector(collectorOptions);
                }
                var sender = new H5logSender({ env: env, topic: topic, minorTopic: minorTopic, region: region });
                return new H5log(collector, sender, {
                    enable: enable,
                    debug: debug,
                });
            }
        });
        Object.defineProperty(H5log.prototype, "setCommonInfo", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (commonInfo) {
                this.commonInfo = commonInfo;
            }
        });
        Object.defineProperty(H5log.prototype, "updateCommonInfo", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (patchs) {
                if (!patchs) {
                    return;
                }
                this.commonInfo = __assign(__assign({}, this.commonInfo), patchs);
            }
        });
        Object.defineProperty(H5log.prototype, "error", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (msg, code, additionalData) {
                if (code === void 0) { code = ErrorCode.Error; }
                this.log(msg, code, 'error', additionalData);
            }
        });
        Object.defineProperty(H5log.prototype, "warn", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (msg, additionalData) {
                this.log(msg, Code.Warn, 'warn', additionalData);
            }
        });
        Object.defineProperty(H5log.prototype, "info", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (msg, additionalData) {
                this.log(msg, Code.Info, 'info', additionalData);
            }
        });
        Object.defineProperty(H5log.prototype, "flush", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (options) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // avoid call flush multiple times
                                if (this.flushPromise) {
                                    return [2 /*return*/];
                                }
                                this.collector.flush(options);
                                this.flushPromise = new Promise(function (resolve) {
                                    _this.flushResolve = resolve;
                                });
                                return [4 /*yield*/, this.flushPromise];
                            case 1:
                                _a.sent();
                                this.flushPromise = null;
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
        Object.defineProperty(H5log.prototype, "log", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (msg, code, level, additionalData) {
                var _a;
                var enable = (_a = this.options, _a.enable), debug = _a.debug;
                if (!enable) {
                    return;
                }
                var payload = __assign(__assign({ msg: msg, code: code, level: level, created_timestamp: "".concat(Date.now()), '@timestamp': "".concat(new Date().toISOString()), log_event_id: uuidv4() }, this.commonInfo), additionalData);
                if (debug && typeof console[level] === 'function') {
                    console[level]("[h5log]: ".concat(msg), payload);
                }
                if (!payload.app_name) {
                    console.warn("[h5log]: Invalid data, the app_name parameter is undefined.");
                    return;
                }
                this.collector.collect(this.normalizePayload(payload));
            }
        });
        Object.defineProperty(H5log.prototype, "normalizePayload", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (payload) {
                if (!payload)
                    return payload;
                var keys = Object.keys(payload);
                return keys.reduce(function (cur, key) {
                    var data = payload[key];
                    if (typeof data === 'string') {
                        cur[key] = data;
                    }
                    else if (typeof data === 'object') {
                        try {
                            cur[key] = JSON.stringify(data);
                        }
                        catch (error) {
                            cur[key] = "[h5log]: data dropped, stringify err";
                        }
                    }
                    else {
                        cur[key] = data;
                    }
                    return cur;
                }, {});
            }
        });
        Object.defineProperty(H5log.prototype, "list", {
            get: function () {
                return this.collector.list;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(H5log, "MAX_SERVER_ERROR", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 5
        });
        Object.defineProperty(H5log, "H5logCollector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: H5logCollector
        });
        Object.defineProperty(H5log, "H5logSender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: H5logSender
        });
        Object.defineProperty(H5log, "H5logSenderEnv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SenderEnv
        });
        Object.defineProperty(H5log, "H5logSenderRegion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Region
        });
        return H5log;
    }());

    return H5log;

}));
