(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../node_modules/process/browser.js
  var require_browser = __commonJS({
    "../node_modules/process/browser.js"(exports, module) {
      var process2 = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process2.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process2.title = "browser";
      process2.browser = true;
      process2.env = {};
      process2.argv = [];
      process2.version = "";
      process2.versions = {};
      function noop() {
      }
      process2.on = noop;
      process2.addListener = noop;
      process2.once = noop;
      process2.off = noop;
      process2.removeListener = noop;
      process2.removeAllListeners = noop;
      process2.emit = noop;
      process2.prependListener = noop;
      process2.prependOnceListener = noop;
      process2.listeners = function(name) {
        return [];
      };
      process2.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process2.cwd = function() {
        return "/";
      };
      process2.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process2.umask = function() {
        return 0;
      };
    }
  });

  // ../node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "../node_modules/color-name/index.js"(exports, module) {
      "use strict";
      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // ../node_modules/color-convert/conversions.js
  var require_conversions = __commonJS({
    "../node_modules/color-convert/conversions.js"(exports, module) {
      var cssKeywords = require_color_name();
      var reverseKeywords = {};
      for (const key of Object.keys(cssKeywords)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
      var convert = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] }
      };
      module.exports = convert;
      for (const model of Object.keys(convert)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        const { channels, labels } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
      convert.rgb.hsl = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        const l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function(rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h;
        let s;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = function(c) {
          return (v - c) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h = 0;
          s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [
          h * 360,
          s * 100,
          v * 100
        ];
      };
      convert.rgb.hwb = function(rgb) {
        const r = rgb[0];
        const g = rgb[1];
        let b = rgb[2];
        const h = convert.rgb.hsl(rgb)[0];
        const w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
      }
      convert.rgb.keyword = function(rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)) {
          const value = cssKeywords[keyword];
          const distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;
        r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
        g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
        b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z2 = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z2 * 100];
      };
      convert.rgb.lab = function(rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x = xyz[0];
        let y = xyz[1];
        let z2 = xyz[2];
        x /= 95.047;
        y /= 100;
        z2 /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z2);
        return [l, a, b];
      };
      convert.hsl.rgb = function(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        const t1 = 2 * l - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function(hsl) {
        const h = hsl[0];
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function(hsv) {
        const h = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v = hsv[2] / 100;
        const hi = Math.floor(h) % 6;
        const f = h - Math.floor(h);
        const p = 255 * v * (1 - s);
        const q = 255 * v * (1 - s * f);
        const t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function(hsv) {
        const h = hsv[0];
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const vmin = Math.max(v, 0.01);
        let sl;
        let l;
        l = (2 - s) * v;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };
      convert.hwb.rgb = function(hwb) {
        const h = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) {
          f = 1 - f;
        }
        const n = wh + f * (v - wh);
        let r;
        let g;
        let b;
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function(cmyk) {
        const c = cmyk[0] / 100;
        const m = cmyk[1] / 100;
        const y = cmyk[2] / 100;
        const k = cmyk[3] / 100;
        const r = 1 - Math.min(1, c * (1 - k) + k);
        const g = 1 - Math.min(1, m * (1 - k) + k);
        const b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function(xyz) {
        const x = xyz[0] / 100;
        const y = xyz[1] / 100;
        const z2 = xyz[2] / 100;
        let r;
        let g;
        let b;
        r = x * 3.2406 + y * -1.5372 + z2 * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z2 * 0.0415;
        b = x * 0.0557 + y * -0.204 + z2 * 1.057;
        r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
        g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
        b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function(xyz) {
        let x = xyz[0];
        let y = xyz[1];
        let z2 = xyz[2];
        x /= 95.047;
        y /= 100;
        z2 /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z2);
        return [l, a, b];
      };
      convert.lab.xyz = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let x;
        let y;
        let z2;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z2 = y - b / 200;
        const y2 = y ** 3;
        const x2 = x ** 3;
        const z22 = z2 ** 3;
        y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
        z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z2 *= 108.883;
        return [x, y, z2];
      };
      convert.lab.lch = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let h;
        const hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        const c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function(lch) {
        const l = lch[0];
        const c = lch[1];
        const h = lch[2];
        const hr = h / 360 * 2 * Math.PI;
        const a = c * Math.cos(hr);
        const b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function(args, saturation = null) {
        const [r, g, b] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function(args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function(args) {
        const r = args[0];
        const g = args[1];
        const b = args[2];
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function(args) {
        let color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r = (color & 1) * mult * 255;
        const g = (color >> 1 & 1) * mult * 255;
        const b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function(args) {
        if (args >= 232) {
          const c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        let rem;
        const r = Math.floor(args / 36) / 5 * 255;
        const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        const b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function(args) {
        const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split("").map((char) => {
            return char + char;
          }).join("");
        }
        const integer = parseInt(colorString, 16);
        const r = integer >> 16 & 255;
        const g = integer >> 8 & 255;
        const b = integer & 255;
        return [r, g, b];
      };
      convert.rgb.hcg = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const max = Math.max(Math.max(r, g), b);
        const min = Math.min(Math.min(r, g), b);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function(hsl) {
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
        let f = 0;
        if (c < 1) {
          f = (l - 0.5 * c) / (1 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function(hsv) {
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const c = s * v;
        let f = 0;
        if (c < 1) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function(hcg) {
        const h = hcg[0] / 360;
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        if (c === 0) {
          return [g * 255, g * 255, g * 255];
        }
        const pure = [0, 0, 0];
        const hi = h % 1 * 6;
        const v = hi % 1;
        const w = 1 - v;
        let mg = 0;
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        mg = (1 - c) * g;
        return [
          (c * pure[0] + mg) * 255,
          (c * pure[1] + mg) * 255,
          (c * pure[2] + mg) * 255
        ];
      };
      convert.hcg.hsv = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        let f = 0;
        if (v > 0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const l = g * (1 - c) + 0.5 * c;
        let s = 0;
        if (l > 0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function(hwb) {
        const w = hwb[1] / 100;
        const b = hwb[2] / 100;
        const v = 1 - b;
        const c = v - w;
        let g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function(apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function(rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function(args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = function(args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function(gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function(gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function(gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function(gray) {
        const val = Math.round(gray[0] / 100 * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function(rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }
  });

  // ../node_modules/color-convert/route.js
  var require_route = __commonJS({
    "../node_modules/color-convert/route.js"(exports, module) {
      var conversions2 = require_conversions();
      function buildGraph() {
        const graph = {};
        const models = Object.keys(conversions2);
        for (let len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
          };
        }
        return graph;
      }
      function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue = [fromModel];
        graph[fromModel].distance = 0;
        while (queue.length) {
          const current2 = queue.pop();
          const adjacents = Object.keys(conversions2[current2]);
          for (let len = adjacents.length, i = 0; i < len; i++) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current2].distance + 1;
              node.parent = current2;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function(args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        const path = [graph[toModel].parent, toModel];
        let fn = conversions2[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions2[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      module.exports = function(fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {};
        const models = Object.keys(graph);
        for (let len = models.length, i = 0; i < len; i++) {
          const toModel = models[i];
          const node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }
  });

  // ../node_modules/color-convert/index.js
  var require_color_convert = __commonJS({
    "../node_modules/color-convert/index.js"(exports, module) {
      var conversions2 = require_conversions();
      var route2 = require_route();
      var convert = {};
      var models = Object.keys(conversions2);
      function wrapRaw(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn(args);
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          const result = fn(args);
          if (typeof result === "object") {
            for (let len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      models.forEach((fromModel) => {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", { value: conversions2[fromModel].channels });
        Object.defineProperty(convert[fromModel], "labels", { value: conversions2[fromModel].labels });
        const routes = route2(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel) => {
          const fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module.exports = convert;
    }
  });

  // ../node_modules/ansi-styles/index.js
  var require_ansi_styles = __commonJS({
    "../node_modules/ansi-styles/index.js"(exports, module) {
      "use strict";
      var wrapAnsi16 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `\x1B[${code + offset}m`;
      };
      var wrapAnsi256 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `\x1B[${38 + offset};5;${code}m`;
      };
      var wrapAnsi16m = (fn, offset) => (...args) => {
        const rgb = fn(...args);
        return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
      };
      var ansi2ansi = (n) => n;
      var rgb2rgb = (r, g, b) => [r, g, b];
      var setLazyProperty = (object, property, get2) => {
        Object.defineProperty(object, property, {
          get: () => {
            const value = get2();
            Object.defineProperty(object, property, {
              value,
              enumerable: true,
              configurable: true
            });
            return value;
          },
          enumerable: true,
          configurable: true
        });
      };
      var colorConvert2;
      var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
        if (colorConvert2 === void 0) {
          colorConvert2 = require_color_convert();
        }
        const offset = isBackground ? 10 : 0;
        const styles = {};
        for (const [sourceSpace, suite] of Object.entries(colorConvert2)) {
          const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
          if (sourceSpace === targetSpace) {
            styles[name] = wrap(identity, offset);
          } else if (typeof suite === "object") {
            styles[name] = wrap(suite[targetSpace], offset);
          }
        }
        return styles;
      };
      function assembleStyles() {
        const codes = /* @__PURE__ */ new Map();
        const styles = {
          modifier: {
            reset: [0, 0],
            // 21 isn't widely supported and 22 does the same thing
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            // Bright color
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            // Bright color
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        styles.color.gray = styles.color.blackBright;
        styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
        styles.color.grey = styles.color.blackBright;
        styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
        for (const [groupName, group] of Object.entries(styles)) {
          for (const [styleName, style] of Object.entries(group)) {
            styles[styleName] = {
              open: `\x1B[${style[0]}m`,
              close: `\x1B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
          }
          Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
          });
        }
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
        styles.color.close = "\x1B[39m";
        styles.bgColor.close = "\x1B[49m";
        setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
        setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
        return styles;
      }
      Object.defineProperty(module, "exports", {
        enumerable: true,
        get: assembleStyles
      });
    }
  });

  // ../node_modules/supports-color/browser.js
  var require_browser2 = __commonJS({
    "../node_modules/supports-color/browser.js"(exports, module) {
      "use strict";
      module.exports = {
        stdout: false,
        stderr: false
      };
    }
  });

  // ../node_modules/chalk/source/util.js
  var require_util = __commonJS({
    "../node_modules/chalk/source/util.js"(exports, module) {
      "use strict";
      var stringReplaceAll = (string, substring, replacer) => {
        let index = string.indexOf(substring);
        if (index === -1) {
          return string;
        }
        const substringLength = substring.length;
        let endIndex = 0;
        let returnValue = "";
        do {
          returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
          endIndex = index + substringLength;
          index = string.indexOf(substring, endIndex);
        } while (index !== -1);
        returnValue += string.substr(endIndex);
        return returnValue;
      };
      var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
        let endIndex = 0;
        let returnValue = "";
        do {
          const gotCR = string[index - 1] === "\r";
          returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
          endIndex = index + 1;
          index = string.indexOf("\n", endIndex);
        } while (index !== -1);
        returnValue += string.substr(endIndex);
        return returnValue;
      };
      module.exports = {
        stringReplaceAll,
        stringEncaseCRLFWithFirstIndex
      };
    }
  });

  // ../node_modules/chalk/source/templates.js
  var require_templates = __commonJS({
    "../node_modules/chalk/source/templates.js"(exports, module) {
      "use strict";
      var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
      var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
      var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
      var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
      var ESCAPES = /* @__PURE__ */ new Map([
        ["n", "\n"],
        ["r", "\r"],
        ["t", "	"],
        ["b", "\b"],
        ["f", "\f"],
        ["v", "\v"],
        ["0", "\0"],
        ["\\", "\\"],
        ["e", "\x1B"],
        ["a", "\x07"]
      ]);
      function unescape(c) {
        const u = c[0] === "u";
        const bracket = c[1] === "{";
        if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
          return String.fromCharCode(parseInt(c.slice(1), 16));
        }
        if (u && bracket) {
          return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
        }
        return ESCAPES.get(c) || c;
      }
      function parseArguments(name, arguments_) {
        const results = [];
        const chunks = arguments_.trim().split(/\s*,\s*/g);
        let matches;
        for (const chunk of chunks) {
          const number = Number(chunk);
          if (!Number.isNaN(number)) {
            results.push(number);
          } else if (matches = chunk.match(STRING_REGEX)) {
            results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
          } else {
            throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
          }
        }
        return results;
      }
      function parseStyle(style) {
        STYLE_REGEX.lastIndex = 0;
        const results = [];
        let matches;
        while ((matches = STYLE_REGEX.exec(style)) !== null) {
          const name = matches[1];
          if (matches[2]) {
            const args = parseArguments(name, matches[2]);
            results.push([name].concat(args));
          } else {
            results.push([name]);
          }
        }
        return results;
      }
      function buildStyle(chalk2, styles) {
        const enabled = {};
        for (const layer of styles) {
          for (const style of layer.styles) {
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
          }
        }
        let current2 = chalk2;
        for (const [styleName, styles2] of Object.entries(enabled)) {
          if (!Array.isArray(styles2)) {
            continue;
          }
          if (!(styleName in current2)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          current2 = styles2.length > 0 ? current2[styleName](...styles2) : current2[styleName];
        }
        return current2;
      }
      module.exports = (chalk2, temporary) => {
        const styles = [];
        const chunks = [];
        let chunk = [];
        temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
          if (escapeCharacter) {
            chunk.push(unescape(escapeCharacter));
          } else if (style) {
            const string = chunk.join("");
            chunk = [];
            chunks.push(styles.length === 0 ? string : buildStyle(chalk2, styles)(string));
            styles.push({ inverse, styles: parseStyle(style) });
          } else if (close) {
            if (styles.length === 0) {
              throw new Error("Found extraneous } in Chalk template literal");
            }
            chunks.push(buildStyle(chalk2, styles)(chunk.join("")));
            chunk = [];
            styles.pop();
          } else {
            chunk.push(character);
          }
        });
        chunks.push(chunk.join(""));
        if (styles.length > 0) {
          const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
          throw new Error(errMessage);
        }
        return chunks.join("");
      };
    }
  });

  // ../node_modules/chalk/source/index.js
  var require_source = __commonJS({
    "../node_modules/chalk/source/index.js"(exports, module) {
      "use strict";
      var ansiStyles2 = require_ansi_styles();
      var { stdout: stdoutColor, stderr: stderrColor } = require_browser2();
      var {
        stringReplaceAll,
        stringEncaseCRLFWithFirstIndex
      } = require_util();
      var { isArray: isArray2 } = Array;
      var levelMapping = [
        "ansi",
        "ansi",
        "ansi256",
        "ansi16m"
      ];
      var styles = /* @__PURE__ */ Object.create(null);
      var applyOptions = (object, options = {}) => {
        if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
          throw new Error("The `level` option should be an integer from 0 to 3");
        }
        const colorLevel = stdoutColor ? stdoutColor.level : 0;
        object.level = options.level === void 0 ? colorLevel : options.level;
      };
      var ChalkClass = class {
        constructor(options) {
          return chalkFactory(options);
        }
      };
      var chalkFactory = (options) => {
        const chalk3 = {};
        applyOptions(chalk3, options);
        chalk3.template = (...arguments_) => chalkTag(chalk3.template, ...arguments_);
        Object.setPrototypeOf(chalk3, Chalk.prototype);
        Object.setPrototypeOf(chalk3.template, chalk3);
        chalk3.template.constructor = () => {
          throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
        };
        chalk3.template.Instance = ChalkClass;
        return chalk3.template;
      };
      function Chalk(options) {
        return chalkFactory(options);
      }
      for (const [styleName, style] of Object.entries(ansiStyles2)) {
        styles[styleName] = {
          get() {
            const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
            Object.defineProperty(this, styleName, { value: builder });
            return builder;
          }
        };
      }
      styles.visible = {
        get() {
          const builder = createBuilder(this, this._styler, true);
          Object.defineProperty(this, "visible", { value: builder });
          return builder;
        }
      };
      var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
      for (const model of usedModels) {
        styles[model] = {
          get() {
            const { level } = this;
            return function(...arguments_) {
              const styler = createStyler(ansiStyles2.color[levelMapping[level]][model](...arguments_), ansiStyles2.color.close, this._styler);
              return createBuilder(this, styler, this._isEmpty);
            };
          }
        };
      }
      for (const model of usedModels) {
        const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
        styles[bgModel] = {
          get() {
            const { level } = this;
            return function(...arguments_) {
              const styler = createStyler(ansiStyles2.bgColor[levelMapping[level]][model](...arguments_), ansiStyles2.bgColor.close, this._styler);
              return createBuilder(this, styler, this._isEmpty);
            };
          }
        };
      }
      var proto = Object.defineProperties(() => {
      }, {
        ...styles,
        level: {
          enumerable: true,
          get() {
            return this._generator.level;
          },
          set(level) {
            this._generator.level = level;
          }
        }
      });
      var createStyler = (open, close, parent) => {
        let openAll;
        let closeAll;
        if (parent === void 0) {
          openAll = open;
          closeAll = close;
        } else {
          openAll = parent.openAll + open;
          closeAll = close + parent.closeAll;
        }
        return {
          open,
          close,
          openAll,
          closeAll,
          parent
        };
      };
      var createBuilder = (self, _styler, _isEmpty) => {
        const builder = (...arguments_) => {
          if (isArray2(arguments_[0]) && isArray2(arguments_[0].raw)) {
            return applyStyle(builder, chalkTag(builder, ...arguments_));
          }
          return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
        };
        Object.setPrototypeOf(builder, proto);
        builder._generator = self;
        builder._styler = _styler;
        builder._isEmpty = _isEmpty;
        return builder;
      };
      var applyStyle = (self, string) => {
        if (self.level <= 0 || !string) {
          return self._isEmpty ? "" : string;
        }
        let styler = self._styler;
        if (styler === void 0) {
          return string;
        }
        const { openAll, closeAll } = styler;
        if (string.indexOf("\x1B") !== -1) {
          while (styler !== void 0) {
            string = stringReplaceAll(string, styler.close, styler.open);
            styler = styler.parent;
          }
        }
        const lfIndex = string.indexOf("\n");
        if (lfIndex !== -1) {
          string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
        }
        return openAll + string + closeAll;
      };
      var template;
      var chalkTag = (chalk3, ...strings) => {
        const [firstString] = strings;
        if (!isArray2(firstString) || !isArray2(firstString.raw)) {
          return strings.join(" ");
        }
        const arguments_ = strings.slice(1);
        const parts = [firstString.raw[0]];
        for (let i = 1; i < firstString.length; i++) {
          parts.push(
            String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
            String(firstString.raw[i])
          );
        }
        if (template === void 0) {
          template = require_templates();
        }
        return template(chalk3, parts.join(""));
      };
      Object.defineProperties(Chalk.prototype, styles);
      var chalk2 = Chalk();
      chalk2.supportsColor = stdoutColor;
      chalk2.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
      chalk2.stderr.supportsColor = stderrColor;
      module.exports = chalk2;
    }
  });

  // ../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/generateRandomBase64.js
  var require_generateRandomBase64 = __commonJS({
    "../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/generateRandomBase64.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateRandomBase64 = generateRandomBase642;
      function generateRandomBase642(bytesOfRandomness = 18) {
        const randomBytes = new Uint8Array(bytesOfRandomness);
        globalThis.crypto.getRandomValues(randomBytes);
        return btoa(String.fromCharCode(...randomBytes));
      }
    }
  });

  // ../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/readFileAsBase64.js
  var require_readFileAsBase64 = __commonJS({
    "../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/readFileAsBase64.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.readFileAsBase64 = readFileAsBase642;
      async function readFileAsBase642(_path) {
        return { success: false };
      }
    }
  });

  // ../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/terminalSize.js
  var require_terminalSize = __commonJS({
    "../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/terminalSize.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.terminalSize = terminalSize2;
      function terminalSize2() {
        return { columns: 80, rows: 24 };
      }
    }
  });

  // ../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/WebSocket.js
  var require_WebSocket = __commonJS({
    "../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser/WebSocket.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WebSocket = void 0;
      exports.WebSocket = globalThis.WebSocket;
    }
  });

  // ../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser.js
  var require_browser3 = __commonJS({
    "../node_modules/@lmstudio/lms-isomorphic/dist/cjs/browser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WebSocket = exports.terminalSize = exports.readFileAsBase64 = exports.generateRandomBase64 = void 0;
      var generateRandomBase64_js_1 = require_generateRandomBase64();
      Object.defineProperty(exports, "generateRandomBase64", { enumerable: true, get: function() {
        return generateRandomBase64_js_1.generateRandomBase64;
      } });
      var readFileAsBase64_js_1 = require_readFileAsBase64();
      Object.defineProperty(exports, "readFileAsBase64", { enumerable: true, get: function() {
        return readFileAsBase64_js_1.readFileAsBase64;
      } });
      var terminalSize_js_1 = require_terminalSize();
      Object.defineProperty(exports, "terminalSize", { enumerable: true, get: function() {
        return terminalSize_js_1.terminalSize;
      } });
      var WebSocket_js_1 = require_WebSocket();
      Object.defineProperty(exports, "WebSocket", { enumerable: true, get: function() {
        return WebSocket_js_1.WebSocket;
      } });
    }
  });

  // ../node_modules/zod/lib/index.mjs
  var util;
  (function(util2) {
    util2.assertEqual = (val) => val;
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  var getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  var quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = class _ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof _ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  var errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  var overrideErrorMap = errorMap;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }
  var makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === errorMap ? void 0 : errorMap
        // then global default map
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = class _ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return _ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  };
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = (value) => ({ status: "dirty", value });
  var OK = (value) => ({ status: "valid", value });
  var isAborted = (x) => x.status === "aborted";
  var isDirty = (x) => x.status === "dirty";
  var isValid = (x) => x.status === "valid";
  var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
  })(errorUtil || (errorUtil = {}));
  var _ZodEnum_cache;
  var _ZodNativeEnum_cache;
  var ParseInputLazyPath = class {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (this._key instanceof Array) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  };
  var handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      var _a2, _b;
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: (_a2 = message !== null && message !== void 0 ? message : required_error) !== null && _a2 !== void 0 ? _a2 : ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  var ZodType = class {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      var _a2;
      const ctx = {
        common: {
          issues: [],
          async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    "~validate"(data) {
      var _a2, _b;
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result) ? {
            value: result.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if ((_b = (_a2 = err === null || err === void 0 ? void 0 : err.message) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
        value: result.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  };
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[0-9a-z]+$/;
  var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var nanoidRegex = /^[a-z0-9_-]{21}$/i;
  var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  var emojiRegex;
  var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  var dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
      regex = `${regex}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if (!decoded.typ || !decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch (_a2) {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  var ZodString = class _ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch (_a2) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      var _a2, _b;
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        offset: (_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null && _a2 !== void 0 ? _a2 : false,
        local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options === null || options === void 0 ? void 0 : options.position,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodString.create = (params) => {
    var _a2;
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  var ZodNumber = class _ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max = null, min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  };
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  var ZodBigInt = class _ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch (_a2) {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodBigInt.create = (params) => {
    var _a2;
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
      ...processCreateParams(params)
    });
  };
  var ZodBoolean = class extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  var ZodDate = class _ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new _ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  };
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  var ZodSymbol = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  var ZodUndefined = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  var ZodNull = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  var ZodAny = class extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  var ZodUnknown = class extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  var ZodNever = class extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  };
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  var ZodVoid = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  var ZodArray = class _ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new _ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new _ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new _ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  var ZodObject = class _ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      return this._cached = { shape, keys };
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            var _a2, _b, _c, _d;
            const defaultError = (_c = (_b = (_a2 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new _ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new _ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new _ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      util.objectKeys(mask).forEach((key) => {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  };
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  var ZodUnion = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  var getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new _ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  };
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  var ZodIntersection = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  };
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  var ZodTuple = class _ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new _ZodTuple({
        ...this._def,
        rest
      });
    }
  };
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  var ZodRecord = class _ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new _ZodRecord({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new _ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second)
      });
    }
  };
  var ZodMap = class extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  };
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  var ZodSet = class _ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new _ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new _ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  var ZodFunction = class _ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me = this;
        return OK(async function(...args) {
          const error = new ZodError([]);
          const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
            error.addIssue(makeArgsIssue(args, e));
            throw error;
          });
          const result = await Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        const me = this;
        return OK(function(...args) {
          const parsedArgs = me._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn, this, parsedArgs.data);
          const parsedReturns = me._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new _ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new _ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new _ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params)
      });
    }
  };
  var ZodLazy = class extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  };
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  var ZodLiteral = class extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  };
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  var ZodEnum = class _ZodEnum extends ZodType {
    constructor() {
      super(...arguments);
      _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
        __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
      }
      if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return _ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  };
  _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
  ZodEnum.create = createZodEnum;
  var ZodNativeEnum = class extends ZodType {
    constructor() {
      super(...arguments);
      _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
        __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
      }
      if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  var ZodPromise = class extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  };
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  var ZodEffects = class extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return base;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return base;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
          });
        }
      }
      util.assertNever(effect);
    }
  };
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  var ZodOptional = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  var ZodNullable = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  var ZodDefault = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  var ZodCatch = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  var ZodNaN = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  };
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  var BRAND = Symbol("zod_brand");
  var ZodBranded = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  var ZodPipeline = class _ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a, b) {
      return new _ZodPipeline({
        in: a,
        out: b,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  };
  var ZodReadonly = class extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      const freeze2 = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result) ? result.then((data) => freeze2(data)) : freeze2(result);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
    const p2 = typeof p === "string" ? { message: p } : p;
    return p2;
  }
  function custom(check, _params = {}, fatal) {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        var _a2, _b;
        const r = check(data);
        if (r instanceof Promise) {
          return r.then((r2) => {
            var _a3, _b2;
            if (!r2) {
              const params = cleanParams(_params, data);
              const _fatal = (_b2 = (_a3 = params.fatal) !== null && _a3 !== void 0 ? _a3 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
              ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
            }
          });
        }
        if (!r) {
          const params = cleanParams(_params, data);
          const _fatal = (_b = (_a2 = params.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b !== void 0 ? _b : true;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
        return;
      });
    return ZodAny.create();
  }
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  var instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = () => stringType().optional();
  var onumber = () => numberType().optional();
  var oboolean = () => booleanType().optional();
  var coerce = {
    string: (arg) => ZodString.create({ ...arg, coerce: true }),
    number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
    boolean: (arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    }),
    bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
    date: (arg) => ZodDate.create({ ...arg, coerce: true })
  };
  var NEVER = INVALID;
  var z = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap,
    getErrorMap,
    makeIssue,
    EMPTY_PATH,
    addIssueToContext,
    ParseStatus,
    INVALID,
    DIRTY,
    OK,
    isAborted,
    isDirty,
    isValid,
    isAsync,
    get util() {
      return util;
    },
    get objectUtil() {
      return objectUtil;
    },
    ZodParsedType,
    getParsedType,
    ZodType,
    datetimeRegex,
    ZodString,
    ZodNumber,
    ZodBigInt,
    ZodBoolean,
    ZodDate,
    ZodSymbol,
    ZodUndefined,
    ZodNull,
    ZodAny,
    ZodUnknown,
    ZodNever,
    ZodVoid,
    ZodArray,
    ZodObject,
    ZodUnion,
    ZodDiscriminatedUnion,
    ZodIntersection,
    ZodTuple,
    ZodRecord,
    ZodMap,
    ZodSet,
    ZodFunction,
    ZodLazy,
    ZodLiteral,
    ZodEnum,
    ZodNativeEnum,
    ZodPromise,
    ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodCatch,
    ZodNaN,
    BRAND,
    ZodBranded,
    ZodPipeline,
    ZodReadonly,
    custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late,
    get ZodFirstPartyTypeKind() {
      return ZodFirstPartyTypeKind;
    },
    coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean,
    onumber,
    optional: optionalType,
    ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER,
    ZodIssueCode,
    quotelessJson,
    ZodError
  });

  // ../node_modules/@lmstudio/sdk/dist/index.mjs
  var import_process = __toESM(require_browser(), 1);
  var import_chalk = __toESM(require_source(), 1);
  var import_lms_isomorphic = __toESM(require_browser3(), 1);

  // ../node_modules/zod-to-json-schema/dist/esm/Options.js
  var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
  var defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
  };
  var getDefaultOptions = (options) => typeof options === "string" ? {
    ...defaultOptions,
    name: options
  } : {
    ...defaultOptions,
    ...options
  };

  // ../node_modules/zod-to-json-schema/dist/esm/Refs.js
  var getRefs = (options) => {
    const _options = getDefaultOptions(options);
    const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
    return {
      ..._options,
      currentPath,
      propertyPath: void 0,
      seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
        def._def,
        {
          def: def._def,
          path: [..._options.basePath, _options.definitionPath, name],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ]))
    };
  };

  // ../node_modules/zod-to-json-schema/dist/esm/errorMessages.js
  function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages)
      return;
    if (errorMessage) {
      res.errorMessage = {
        ...res.errorMessage,
        [key]: errorMessage
      };
    }
  }
  function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/any.js
  function parseAnyDef() {
    return {};
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/array.js
  function parseArrayDef(def, refs) {
    const res = {
      type: "array"
    };
    if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
      res.items = parseDef(def.type._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items"]
      });
    }
    if (def.minLength) {
      setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
      setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
      setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
      setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
  function parseBigintDef(def, refs) {
    const res = {
      type: "integer",
      format: "int64"
    };
    if (!def.checks)
      return res;
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMinimum = true;
            }
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          }
          break;
        case "max":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMaximum = true;
            }
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          }
          break;
        case "multipleOf":
          setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
          break;
      }
    }
    return res;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
  function parseBooleanDef() {
    return {
      type: "boolean"
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
  function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
  var parseCatchDef = (def, refs) => {
    return parseDef(def.innerType._def, refs);
  };

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/date.js
  function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
      return {
        anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
      };
    }
    switch (strategy) {
      case "string":
      case "format:date-time":
        return {
          type: "string",
          format: "date-time"
        };
      case "format:date":
        return {
          type: "string",
          format: "date"
        };
      case "integer":
        return integerDateParser(def, refs);
    }
  }
  var integerDateParser = (def, refs) => {
    const res = {
      type: "integer",
      format: "unix-time"
    };
    if (refs.target === "openApi3") {
      return res;
    }
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(
            res,
            "minimum",
            check.value,
            // This is in milliseconds
            check.message,
            refs
          );
          break;
        case "max":
          setResponseValueAndErrors(
            res,
            "maximum",
            check.value,
            // This is in milliseconds
            check.message,
            refs
          );
          break;
      }
    }
    return res;
  };

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/default.js
  function parseDefaultDef(_def, refs) {
    return {
      ...parseDef(_def.innerType._def, refs),
      default: _def.defaultValue()
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
  function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : {};
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
  function parseEnumDef(def) {
    return {
      type: "string",
      enum: Array.from(def.values)
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
  var isJsonSchema7AllOfType = (type) => {
    if ("type" in type && type.type === "string")
      return false;
    return "allOf" in type;
  };
  function parseIntersectionDef(def, refs) {
    const allOf = [
      parseDef(def.left._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "0"]
      }),
      parseDef(def.right._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "1"]
      })
    ].filter((x) => !!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
    const mergedAllOf = [];
    allOf.forEach((schema) => {
      if (isJsonSchema7AllOfType(schema)) {
        mergedAllOf.push(...schema.allOf);
        if (schema.unevaluatedProperties === void 0) {
          unevaluatedProperties = void 0;
        }
      } else {
        let nestedSchema = schema;
        if ("additionalProperties" in schema && schema.additionalProperties === false) {
          const { additionalProperties, ...rest } = schema;
          nestedSchema = rest;
        } else {
          unevaluatedProperties = void 0;
        }
        mergedAllOf.push(nestedSchema);
      }
    });
    return mergedAllOf.length ? {
      allOf: mergedAllOf,
      ...unevaluatedProperties
    } : void 0;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
  function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
      return {
        type: Array.isArray(def.value) ? "array" : "object"
      };
    }
    if (refs.target === "openApi3") {
      return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        enum: [def.value]
      };
    }
    return {
      type: parsedType === "bigint" ? "integer" : parsedType,
      const: def.value
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/string.js
  var emojiRegex2 = void 0;
  var zodPatterns = {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
     * `a-z` was added to replicate /i flag
     */
    email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
     * Constructed a valid Unicode RegExp
     *
     * Lazily instantiate since this type of regex isn't supported
     * in all envs (e.g. React Native).
     *
     * See:
     * https://github.com/colinhacks/zod/issues/2433
     * Fix in Zod:
     * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
     */
    emoji: () => {
      if (emojiRegex2 === void 0) {
        emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
      }
      return emojiRegex2;
    },
    /**
     * Unused
     */
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
     * Unused
     */
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
     * Unused
     */
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  };
  function parseStringDef(def, refs) {
    const res = {
      type: "string"
    };
    if (def.checks) {
      for (const check of def.checks) {
        switch (check.kind) {
          case "min":
            setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            break;
          case "max":
            setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
          case "email":
            switch (refs.emailStrategy) {
              case "format:email":
                addFormat(res, "email", check.message, refs);
                break;
              case "format:idn-email":
                addFormat(res, "idn-email", check.message, refs);
                break;
              case "pattern:zod":
                addPattern(res, zodPatterns.email, check.message, refs);
                break;
            }
            break;
          case "url":
            addFormat(res, "uri", check.message, refs);
            break;
          case "uuid":
            addFormat(res, "uuid", check.message, refs);
            break;
          case "regex":
            addPattern(res, check.regex, check.message, refs);
            break;
          case "cuid":
            addPattern(res, zodPatterns.cuid, check.message, refs);
            break;
          case "cuid2":
            addPattern(res, zodPatterns.cuid2, check.message, refs);
            break;
          case "startsWith":
            addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
            break;
          case "endsWith":
            addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
            break;
          case "datetime":
            addFormat(res, "date-time", check.message, refs);
            break;
          case "date":
            addFormat(res, "date", check.message, refs);
            break;
          case "time":
            addFormat(res, "time", check.message, refs);
            break;
          case "duration":
            addFormat(res, "duration", check.message, refs);
            break;
          case "length":
            setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
          case "includes": {
            addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
            break;
          }
          case "ip": {
            if (check.version !== "v6") {
              addFormat(res, "ipv4", check.message, refs);
            }
            if (check.version !== "v4") {
              addFormat(res, "ipv6", check.message, refs);
            }
            break;
          }
          case "base64url":
            addPattern(res, zodPatterns.base64url, check.message, refs);
            break;
          case "jwt":
            addPattern(res, zodPatterns.jwt, check.message, refs);
            break;
          case "cidr": {
            if (check.version !== "v6") {
              addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
            }
            if (check.version !== "v4") {
              addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
            }
            break;
          }
          case "emoji":
            addPattern(res, zodPatterns.emoji(), check.message, refs);
            break;
          case "ulid": {
            addPattern(res, zodPatterns.ulid, check.message, refs);
            break;
          }
          case "base64": {
            switch (refs.base64Strategy) {
              case "format:binary": {
                addFormat(res, "binary", check.message, refs);
                break;
              }
              case "contentEncoding:base64": {
                setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
                break;
              }
              case "pattern:zod": {
                addPattern(res, zodPatterns.base64, check.message, refs);
                break;
              }
            }
            break;
          }
          case "nanoid": {
            addPattern(res, zodPatterns.nanoid, check.message, refs);
          }
          case "toLowerCase":
          case "toUpperCase":
          case "trim":
            break;
          default:
            /* @__PURE__ */ ((_) => {
            })(check);
        }
      }
    }
    return res;
  }
  function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
  }
  var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  function escapeNonAlphaNumeric(source) {
    let result = "";
    for (let i = 0; i < source.length; i++) {
      if (!ALPHA_NUMERIC.has(source[i])) {
        result += "\\";
      }
      result += source[i];
    }
    return result;
  }
  function addFormat(schema, value, message, refs) {
    if (schema.format || schema.anyOf?.some((x) => x.format)) {
      if (!schema.anyOf) {
        schema.anyOf = [];
      }
      if (schema.format) {
        schema.anyOf.push({
          format: schema.format,
          ...schema.errorMessage && refs.errorMessages && {
            errorMessage: { format: schema.errorMessage.format }
          }
        });
        delete schema.format;
        if (schema.errorMessage) {
          delete schema.errorMessage.format;
          if (Object.keys(schema.errorMessage).length === 0) {
            delete schema.errorMessage;
          }
        }
      }
      schema.anyOf.push({
        format: value,
        ...message && refs.errorMessages && { errorMessage: { format: message } }
      });
    } else {
      setResponseValueAndErrors(schema, "format", value, message, refs);
    }
  }
  function addPattern(schema, regex, message, refs) {
    if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
      if (!schema.allOf) {
        schema.allOf = [];
      }
      if (schema.pattern) {
        schema.allOf.push({
          pattern: schema.pattern,
          ...schema.errorMessage && refs.errorMessages && {
            errorMessage: { pattern: schema.errorMessage.pattern }
          }
        });
        delete schema.pattern;
        if (schema.errorMessage) {
          delete schema.errorMessage.pattern;
          if (Object.keys(schema.errorMessage).length === 0) {
            delete schema.errorMessage;
          }
        }
      }
      schema.allOf.push({
        pattern: stringifyRegExpWithFlags(regex, refs),
        ...message && refs.errorMessages && { errorMessage: { pattern: message } }
      });
    } else {
      setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
    }
  }
  function stringifyRegExpWithFlags(regex, refs) {
    if (!refs.applyRegexFlags || !regex.flags) {
      return regex.source;
    }
    const flags = {
      i: regex.flags.includes("i"),
      m: regex.flags.includes("m"),
      s: regex.flags.includes("s")
      // `.` matches newlines
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for (let i = 0; i < source.length; i++) {
      if (isEscaped) {
        pattern += source[i];
        isEscaped = false;
        continue;
      }
      if (flags.i) {
        if (inCharGroup) {
          if (source[i].match(/[a-z]/)) {
            if (inCharRange) {
              pattern += source[i];
              pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
              inCharRange = false;
            } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
              pattern += source[i];
              inCharRange = true;
            } else {
              pattern += `${source[i]}${source[i].toUpperCase()}`;
            }
            continue;
          }
        } else if (source[i].match(/[a-z]/)) {
          pattern += `[${source[i]}${source[i].toUpperCase()}]`;
          continue;
        }
      }
      if (flags.m) {
        if (source[i] === "^") {
          pattern += `(^|(?<=[\r
]))`;
          continue;
        } else if (source[i] === "$") {
          pattern += `($|(?=[\r
]))`;
          continue;
        }
      }
      if (flags.s && source[i] === ".") {
        pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
        continue;
      }
      pattern += source[i];
      if (source[i] === "\\") {
        isEscaped = true;
      } else if (inCharGroup && source[i] === "]") {
        inCharGroup = false;
      } else if (!inCharGroup && source[i] === "[") {
        inCharGroup = true;
      }
    }
    try {
      new RegExp(pattern);
    } catch {
      console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
      return regex.source;
    }
    return pattern;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/record.js
  function parseRecordDef(def, refs) {
    if (refs.target === "openAi") {
      console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    }
    if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      return {
        type: "object",
        required: def.keyType._def.values,
        properties: def.keyType._def.values.reduce((acc, key) => ({
          ...acc,
          [key]: parseDef(def.valueType._def, {
            ...refs,
            currentPath: [...refs.currentPath, "properties", key]
          }) ?? {}
        }), {}),
        additionalProperties: refs.rejectedAdditionalProperties
      };
    }
    const schema = {
      type: "object",
      additionalProperties: parseDef(def.valueType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      }) ?? refs.allowedAdditionalProperties
    };
    if (refs.target === "openApi3") {
      return schema;
    }
    if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
      const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
      return {
        ...schema,
        propertyNames: keyType
      };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      return {
        ...schema,
        propertyNames: {
          enum: def.keyType._def.values
        }
      };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
      const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
      return {
        ...schema,
        propertyNames: keyType
      };
    }
    return schema;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/map.js
  function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
      return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "0"]
    }) || {};
    const values = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "1"]
    }) || {};
    return {
      type: "array",
      maxItems: 125,
      items: {
        type: "array",
        items: [keys, values],
        minItems: 2,
        maxItems: 2
      }
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
  function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key) => {
      return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key) => object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
    return {
      type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
      enum: actualValues
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/never.js
  function parseNeverDef() {
    return {
      not: {}
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/null.js
  function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
      enum: ["null"],
      nullable: true
    } : {
      type: "null"
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/union.js
  var primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
  };
  function parseUnionDef(def, refs) {
    if (refs.target === "openApi3")
      return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
      const types = options.reduce((types2, x) => {
        const type = primitiveMappings[x._def.typeName];
        return type && !types2.includes(type) ? [...types2, type] : types2;
      }, []);
      return {
        type: types.length > 1 ? types : types[0]
      };
    } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
      const types = options.reduce((acc, x) => {
        const type = typeof x._def.value;
        switch (type) {
          case "string":
          case "number":
          case "boolean":
            return [...acc, type];
          case "bigint":
            return [...acc, "integer"];
          case "object":
            if (x._def.value === null)
              return [...acc, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return acc;
        }
      }, []);
      if (types.length === options.length) {
        const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
        return {
          type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
          enum: options.reduce((acc, x) => {
            return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
          }, [])
        };
      }
    } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
      return {
        type: "string",
        enum: options.reduce((acc, x) => [
          ...acc,
          ...x._def.values.filter((x2) => !acc.includes(x2))
        ], [])
      };
    }
    return asAnyOf(def, refs);
  }
  var asAnyOf = (def, refs) => {
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", `${i}`]
    })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? { anyOf } : void 0;
  };

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
  function parseNullableDef(def, refs) {
    if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
      if (refs.target === "openApi3") {
        return {
          type: primitiveMappings[def.innerType._def.typeName],
          nullable: true
        };
      }
      return {
        type: [
          primitiveMappings[def.innerType._def.typeName],
          "null"
        ]
      };
    }
    if (refs.target === "openApi3") {
      const base2 = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [...refs.currentPath]
      });
      if (base2 && "$ref" in base2)
        return { allOf: [base2], nullable: true };
      return base2 && { ...base2, nullable: true };
    }
    const base = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", "0"]
    });
    return base && { anyOf: [base, { type: "null" }] };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/number.js
  function parseNumberDef(def, refs) {
    const res = {
      type: "number"
    };
    if (!def.checks)
      return res;
    for (const check of def.checks) {
      switch (check.kind) {
        case "int":
          res.type = "integer";
          addErrorMessage(res, "type", check.message, refs);
          break;
        case "min":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMinimum = true;
            }
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          }
          break;
        case "max":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMaximum = true;
            }
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          }
          break;
        case "multipleOf":
          setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
          break;
      }
    }
    return res;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/object.js
  function parseObjectDef(def, refs) {
    const forceOptionalIntoNullable = refs.target === "openAi";
    const result = {
      type: "object",
      properties: {}
    };
    const required = [];
    const shape = def.shape();
    for (const propName in shape) {
      let propDef = shape[propName];
      if (propDef === void 0 || propDef._def === void 0) {
        continue;
      }
      let propOptional = safeIsOptional(propDef);
      if (propOptional && forceOptionalIntoNullable) {
        if (propDef instanceof ZodOptional) {
          propDef = propDef._def.innerType;
        }
        if (!propDef.isNullable()) {
          propDef = propDef.nullable();
        }
        propOptional = false;
      }
      const parsedDef = parseDef(propDef._def, {
        ...refs,
        currentPath: [...refs.currentPath, "properties", propName],
        propertyPath: [...refs.currentPath, "properties", propName]
      });
      if (parsedDef === void 0) {
        continue;
      }
      result.properties[propName] = parsedDef;
      if (!propOptional) {
        required.push(propName);
      }
    }
    if (required.length) {
      result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) {
      result.additionalProperties = additionalProperties;
    }
    return result;
  }
  function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
      return parseDef(def.catchall._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      });
    }
    switch (def.unknownKeys) {
      case "passthrough":
        return refs.allowedAdditionalProperties;
      case "strict":
        return refs.rejectedAdditionalProperties;
      case "strip":
        return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
  }
  function safeIsOptional(schema) {
    try {
      return schema.isOptional();
    } catch {
      return true;
    }
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
  var parseOptionalDef = (def, refs) => {
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
      return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", "1"]
    });
    return innerSchema ? {
      anyOf: [
        {
          not: {}
        },
        innerSchema
      ]
    } : {};
  };

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
  var parsePipelineDef = (def, refs) => {
    if (refs.pipeStrategy === "input") {
      return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
      return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    });
    const b = parseDef(def.out._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
    });
    return {
      allOf: [a, b].filter((x) => x !== void 0)
    };
  };

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
  function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/set.js
  function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
    const schema = {
      type: "array",
      uniqueItems: true,
      items
    };
    if (def.minSize) {
      setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
      setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema;
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
  function parseTupleDef(def, refs) {
    if (def.rest) {
      return {
        type: "array",
        minItems: def.items.length,
        items: def.items.map((x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
        additionalItems: parseDef(def.rest._def, {
          ...refs,
          currentPath: [...refs.currentPath, "additionalItems"]
        })
      };
    } else {
      return {
        type: "array",
        minItems: def.items.length,
        maxItems: def.items.length,
        items: def.items.map((x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
      };
    }
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
  function parseUndefinedDef() {
    return {
      not: {}
    };
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
  function parseUnknownDef() {
    return {};
  }

  // ../node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
  var parseReadonlyDef = (def, refs) => {
    return parseDef(def.innerType._def, refs);
  };

  // ../node_modules/zod-to-json-schema/dist/esm/selectParser.js
  var selectParser = (def, typeName, refs) => {
    switch (typeName) {
      case ZodFirstPartyTypeKind.ZodString:
        return parseStringDef(def, refs);
      case ZodFirstPartyTypeKind.ZodNumber:
        return parseNumberDef(def, refs);
      case ZodFirstPartyTypeKind.ZodObject:
        return parseObjectDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBigInt:
        return parseBigintDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBoolean:
        return parseBooleanDef();
      case ZodFirstPartyTypeKind.ZodDate:
        return parseDateDef(def, refs);
      case ZodFirstPartyTypeKind.ZodUndefined:
        return parseUndefinedDef();
      case ZodFirstPartyTypeKind.ZodNull:
        return parseNullDef(refs);
      case ZodFirstPartyTypeKind.ZodArray:
        return parseArrayDef(def, refs);
      case ZodFirstPartyTypeKind.ZodUnion:
      case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
        return parseUnionDef(def, refs);
      case ZodFirstPartyTypeKind.ZodIntersection:
        return parseIntersectionDef(def, refs);
      case ZodFirstPartyTypeKind.ZodTuple:
        return parseTupleDef(def, refs);
      case ZodFirstPartyTypeKind.ZodRecord:
        return parseRecordDef(def, refs);
      case ZodFirstPartyTypeKind.ZodLiteral:
        return parseLiteralDef(def, refs);
      case ZodFirstPartyTypeKind.ZodEnum:
        return parseEnumDef(def);
      case ZodFirstPartyTypeKind.ZodNativeEnum:
        return parseNativeEnumDef(def);
      case ZodFirstPartyTypeKind.ZodNullable:
        return parseNullableDef(def, refs);
      case ZodFirstPartyTypeKind.ZodOptional:
        return parseOptionalDef(def, refs);
      case ZodFirstPartyTypeKind.ZodMap:
        return parseMapDef(def, refs);
      case ZodFirstPartyTypeKind.ZodSet:
        return parseSetDef(def, refs);
      case ZodFirstPartyTypeKind.ZodLazy:
        return () => def.getter()._def;
      case ZodFirstPartyTypeKind.ZodPromise:
        return parsePromiseDef(def, refs);
      case ZodFirstPartyTypeKind.ZodNaN:
      case ZodFirstPartyTypeKind.ZodNever:
        return parseNeverDef();
      case ZodFirstPartyTypeKind.ZodEffects:
        return parseEffectsDef(def, refs);
      case ZodFirstPartyTypeKind.ZodAny:
        return parseAnyDef();
      case ZodFirstPartyTypeKind.ZodUnknown:
        return parseUnknownDef();
      case ZodFirstPartyTypeKind.ZodDefault:
        return parseDefaultDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBranded:
        return parseBrandedDef(def, refs);
      case ZodFirstPartyTypeKind.ZodReadonly:
        return parseReadonlyDef(def, refs);
      case ZodFirstPartyTypeKind.ZodCatch:
        return parseCatchDef(def, refs);
      case ZodFirstPartyTypeKind.ZodPipeline:
        return parsePipelineDef(def, refs);
      case ZodFirstPartyTypeKind.ZodFunction:
      case ZodFirstPartyTypeKind.ZodVoid:
      case ZodFirstPartyTypeKind.ZodSymbol:
        return void 0;
      default:
        return /* @__PURE__ */ ((_) => void 0)(typeName);
    }
  };

  // ../node_modules/zod-to-json-schema/dist/esm/parseDef.js
  function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
      const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
      if (overrideResult !== ignoreOverride) {
        return overrideResult;
      }
    }
    if (seenItem && !forceResolution) {
      const seenSchema = get$ref(seenItem, refs);
      if (seenSchema !== void 0) {
        return seenSchema;
      }
    }
    const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
    const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema) {
      addMeta(def, refs, jsonSchema);
    }
    if (refs.postProcess) {
      const postProcessResult = refs.postProcess(jsonSchema, def, refs);
      newItem.jsonSchema = jsonSchema;
      return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
  }
  var get$ref = (item, refs) => {
    switch (refs.$refStrategy) {
      case "root":
        return { $ref: item.path.join("/") };
      case "relative":
        return { $ref: getRelativePath(refs.currentPath, item.path) };
      case "none":
      case "seen": {
        if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
          console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
          return {};
        }
        return refs.$refStrategy === "seen" ? {} : void 0;
      }
    }
  };
  var getRelativePath = (pathA, pathB) => {
    let i = 0;
    for (; i < pathA.length && i < pathB.length; i++) {
      if (pathA[i] !== pathB[i])
        break;
    }
    return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
  };
  var addMeta = (def, refs, jsonSchema) => {
    if (def.description) {
      jsonSchema.description = def.description;
      if (refs.markdownDescription) {
        jsonSchema.markdownDescription = def.description;
      }
    }
    return jsonSchema;
  };

  // ../node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
  var zodToJsonSchema = (schema, options) => {
    const refs = getRefs(options);
    const definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
      ...acc,
      [name2]: parseDef(schema2._def, {
        ...refs,
        currentPath: [...refs.basePath, refs.definitionPath, name2]
      }, true) ?? {}
    }), {}) : void 0;
    const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
    const main = parseDef(schema._def, name === void 0 ? refs : {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name]
    }, false) ?? {};
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) {
      main.title = title;
    }
    const combined = name === void 0 ? definitions ? {
      ...main,
      [refs.definitionPath]: definitions
    } : main : {
      $ref: [
        ...refs.$refStrategy === "relative" ? [] : refs.basePath,
        refs.definitionPath,
        name
      ].join("/"),
      [refs.definitionPath]: {
        ...definitions,
        [name]: main
      }
    };
    if (refs.target === "jsonSchema7") {
      combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
      combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
      console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    }
    return combined;
  };

  // ../node_modules/@lmstudio/sdk/dist/index.mjs
  function isSignalLike(value) {
    return typeof value === "object" && value !== null && typeof value.get === "function" && typeof value.subscribe === "function";
  }
  var Subscribable = class {
    subscribeOnce(listener) {
      const unsubscribe = this.subscribe((data) => {
        unsubscribe();
        listener(data);
      });
      return unsubscribe;
    }
    derive(deriver, outputEqualsPredicate = (a, b) => a === b) {
      if (isSignalLike(this)) {
        return LazySignal.deriveFrom([this], deriver);
      }
      const thisWithGetter = this;
      if (thisWithGetter.get !== void 0) {
        const initialValue = thisWithGetter.get();
        if (initialValue === LazySignal.NOT_AVAILABLE) {
          return LazySignal.createWithoutInitialValue((setDownstream) => {
            return thisWithGetter.subscribe((data) => {
              if (isAvailable(data)) {
                setDownstream(deriver(data));
              }
            });
          });
        }
        const thisNarrowed = thisWithGetter;
        return LazySignal.create(deriver(thisNarrowed.get()), (setDownstream) => {
          return thisNarrowed.subscribe((data) => {
            setDownstream(deriver(data));
          });
        }, outputEqualsPredicate);
      }
      return LazySignal.createWithoutInitialValue((setDownstream) => {
        return this.subscribe((data) => {
          if (isAvailable(data)) {
            setDownstream(deriver(data));
          }
        });
      }, outputEqualsPredicate);
    }
  };
  var Event = class _Event extends Subscribable {
    /**
     * Internal state that tracks whether the event has any subscribers.
     */
    constructor() {
      super();
      this.subscribers = /* @__PURE__ */ new Set();
      this.onSubscribed = null;
      this.onUnsubscribed = null;
    }
    emit(data) {
      queueMicrotask(() => {
        for (const subscriber of this.subscribers) {
          subscriber(data);
        }
      });
    }
    static create() {
      const event2 = new _Event();
      const emitter = (data) => {
        event2.emit(data);
      };
      return [event2, emitter];
    }
    subscribe(listener) {
      const previousSize = this.subscribers.size;
      this.subscribers.add(listener);
      if (previousSize === 0 && this.subscribers.size === 1) {
        this.onSubscribed?.();
      }
      return () => {
        const previousSize2 = this.subscribers.size;
        this.subscribers.delete(listener);
        if (previousSize2 === 1 && this.subscribers.size === 0) {
          this.onUnsubscribed?.();
        }
      };
    }
    batch({ minIdleTimeMs = 200, maxBatchTimeMs = 1e3 }) {
      const [batchedEvent, emitBatchedEvent] = _Event.create();
      batchedEvent.onSubscribed = () => {
        let batch = [];
        let emitBatchTimeout = null;
        let firstEventTime = 0;
        const emitBatch = () => {
          emitBatchTimeout = null;
          emitBatchedEvent(batch);
          batch = [];
        };
        batchedEvent.onUnsubscribed = this.subscribe((data) => {
          batch.push(data);
          if (emitBatchTimeout === null) {
            firstEventTime = Date.now();
            emitBatchTimeout = setTimeout(emitBatch, Math.min(minIdleTimeMs, maxBatchTimeMs));
          } else {
            clearTimeout(emitBatchTimeout);
            const timeSinceFirstEvent = Date.now() - firstEventTime;
            emitBatchTimeout = setTimeout(emitBatch, Math.min(minIdleTimeMs, Math.max(0, maxBatchTimeMs - timeSinceFirstEvent)));
          }
        });
      };
      return batchedEvent;
    }
  };
  function makePromise() {
    let resolve;
    let reject;
    const promise = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    return { promise, resolve, reject };
  }
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");
  var errors = true ? [
    // All error codes, starting by 0:
    function(plugin) {
      return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
      return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
      return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
      return `'original' expects a draft, got: ${thing}`;
    }
    // Note: if more errors are added, the errorOffset in Patches.ts should be increased
    // See Patches.ts for additional errors
  ] : [];
  function die(error, ...args) {
    if (true) {
      const e = errors[error];
      const msg = typeof e === "function" ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var getPrototypeOf = Object.getPrototypeOf;
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    if (!value)
      return false;
    return isPlainObject$2(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap$1(value) || isSet$1(value);
  }
  var objectCtorString = Object.prototype.constructor.toString();
  function isPlainObject$2(value) {
    if (!value || typeof value !== "object")
      return false;
    const proto = getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object)
      return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
  }
  function each(obj, iter) {
    if (getArchtype(obj) === 0) {
      Reflect.ownKeys(obj).forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 : isMap$1(thing) ? 2 : isSet$1(thing) ? 3 : 0;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function get(thing, prop) {
    return getArchtype(thing) === 2 ? thing.get(prop) : thing[prop];
  }
  function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2)
      thing.set(propOrOldValue, value);
    else if (t === 3) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  }
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function isMap$1(target) {
    return target instanceof Map;
  }
  function isSet$1(target) {
    return target instanceof Set;
  }
  function latest(state) {
    return state.copy_ || state.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap$1(base)) {
      return new Map(base);
    }
    if (isSet$1(base)) {
      return new Set(base);
    }
    if (Array.isArray(base))
      return Array.prototype.slice.call(base);
    const isPlain = isPlainObject$2(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = Object.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            configurable: true,
            writable: true,
            // could live with !!desc.set as well here...
            enumerable: desc.enumerable,
            value: base[key]
          };
      }
      return Object.create(getPrototypeOf(base), descriptors);
    } else {
      const proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return { ...base };
      }
      const obj = Object.create(proto);
      return Object.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }
    Object.freeze(obj);
    if (deep)
      Object.values(obj).forEach((value) => freeze(value, true));
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(obj) {
    return Object.isFrozen(obj);
  }
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  function loadPlugin(pluginKey, implementation) {
    if (!plugins[pluginKey])
      plugins[pluginKey] = implementation;
  }
  var currentScope;
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
  }
  function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 || state.type_ === 1)
      state.revoke_();
    else
      state.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_)
          maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope.patches_,
          scope.inversePatches_
        );
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    if (!state) {
      each(
        value,
        (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
      );
      return value;
    }
    if (state.scope_ !== rootScope)
      return value;
    if (!state.modified_) {
      maybeFreeze(rootScope, state.base_, true);
      return state.base_;
    }
    if (!state.finalized_) {
      state.finalized_ = true;
      state.scope_.unfinalizedDrafts_--;
      const result = state.copy_;
      let resultEach = result;
      let isSet2 = false;
      if (state.type_ === 3) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(
        resultEach,
        (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
      );
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(
          state,
          path,
          rootScope.patches_,
          rootScope.inversePatches_
        );
      }
    }
    return state.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (childValue === targetObject)
      die(5);
    if (isDraft(childValue)) {
      const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      const res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else
        return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      finalize(rootScope, childValue);
      if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
        maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function createProxyProxy(base, parent) {
    const isArray2 = Array.isArray(base);
    const state = {
      type_: isArray2 ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray2) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      const source = latest(state);
      if (!has(source, prop)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value === peek(state.base_, prop)) {
        prepareCopy(state);
        return state.copy_[prop] = createProxy(value, state);
      }
      return value;
    },
    has(state, prop) {
      return prop in latest(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto(latest(state), prop);
      if (desc?.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek(latest(state), prop);
        const currentState = current2?.[DRAFT_STATE];
        if (currentState && currentState.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_[prop] = false;
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_[prop] = true;
      return true;
    },
    deleteProperty(state, prop) {
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_[prop] = false;
        prepareCopy(state);
        markChanged(state);
      } else {
        delete state.assigned_[prop];
      }
      if (state.copy_) {
        delete state.copy_[prop];
      }
      return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc)
        return desc;
      return {
        writable: true,
        configurable: state.type_ !== 1 || prop !== "length",
        enumerable: desc.enumerable,
        value: owner[prop]
      };
    },
    defineProperty() {
      die(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf(state.base_);
    },
    setPrototypeOf() {
      die(12);
    }
  };
  var arrayTraps = {};
  each(objectTraps, (key, fn) => {
    arrayTraps[key] = function() {
      arguments[0] = arguments[0][0];
      return fn.apply(this, arguments);
    };
  });
  arrayTraps.deleteProperty = function(state, prop) {
    if (isNaN(parseInt(prop)))
      die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop)))
      die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      desc.get?.call(state.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source))
      return void 0;
    let proto = getPrototypeOf(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc)
        return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) {
        markChanged(state.parent_);
      }
    }
  }
  function prepareCopy(state) {
    if (!state.copy_) {
      state.copy_ = shallowCopy(
        state.base_,
        state.scope_.immer_.useStrictShallowCopy_
      );
    }
  }
  var Immer2 = class {
    constructor(config) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.produce = (base, recipe, patchListener) => {
        if (typeof base === "function" && typeof recipe !== "function") {
          const defaultBase = recipe;
          recipe = base;
          const self = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (typeof recipe !== "function")
          die(6);
        if (patchListener !== void 0 && typeof patchListener !== "function")
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError)
              revokeScope(scope);
            else
              leaveScope(scope);
          }
          usePatchesInScope(scope, patchListener);
          return processResult(result, scope);
        } else if (!base || typeof base !== "object") {
          result = recipe(base);
          if (result === void 0)
            result = base;
          if (result === NOTHING)
            result = void 0;
          if (this.autoFreeze_)
            freeze(result, true);
          if (patchListener) {
            const p = [];
            const ip = [];
            getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
            patchListener(p, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (typeof base === "function") {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (typeof config?.autoFreeze === "boolean")
        this.setAutoFreeze(config.autoFreeze);
      if (typeof config?.useStrictShallowCopy === "boolean")
        this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(base, void 0);
      proxy[DRAFT_STATE].isManual_ = true;
      leaveScope(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE];
      if (!state || !state.isManual_)
        die(9);
      const { scope_: scope } = state;
      usePatchesInScope(scope, patchListener);
      return processResult(void 0, scope);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) {
        patches = patches.slice(i + 1);
      }
      const applyPatchesImpl = getPlugin("Patches").applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(value, parent) {
    const draft = isMap$1(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet$1(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }
  function current(value) {
    if (!isDraft(value))
      die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    let copy2;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy2 = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    } else {
      copy2 = shallowCopy(value, true);
    }
    each(copy2, (key, childValue) => {
      set(copy2, key, currentImpl(childValue));
    });
    if (state) {
      state.finalized_ = false;
    }
    return copy2;
  }
  function enableMapSet() {
    class DraftMap extends Map {
      constructor(target, parent) {
        super();
        this[DRAFT_STATE] = {
          type_: 2,
          parent_: parent,
          scope_: parent ? parent.scope_ : getCurrentScope(),
          modified_: false,
          finalized_: false,
          copy_: void 0,
          assigned_: void 0,
          base_: target,
          draft_: this,
          isManual_: false,
          revoked_: false
        };
      }
      get size() {
        return latest(this[DRAFT_STATE]).size;
      }
      has(key) {
        return latest(this[DRAFT_STATE]).has(key);
      }
      set(key, value) {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        if (!latest(state).has(key) || latest(state).get(key) !== value) {
          prepareMapCopy(state);
          markChanged(state);
          state.assigned_.set(key, true);
          state.copy_.set(key, value);
          state.assigned_.set(key, true);
        }
        return this;
      }
      delete(key) {
        if (!this.has(key)) {
          return false;
        }
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        prepareMapCopy(state);
        markChanged(state);
        if (state.base_.has(key)) {
          state.assigned_.set(key, false);
        } else {
          state.assigned_.delete(key);
        }
        state.copy_.delete(key);
        return true;
      }
      clear() {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        if (latest(state).size) {
          prepareMapCopy(state);
          markChanged(state);
          state.assigned_ = /* @__PURE__ */ new Map();
          each(state.base_, (key) => {
            state.assigned_.set(key, false);
          });
          state.copy_.clear();
        }
      }
      forEach(cb, thisArg) {
        const state = this[DRAFT_STATE];
        latest(state).forEach((_value, key, _map) => {
          cb.call(thisArg, this.get(key), key, this);
        });
      }
      get(key) {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        const value = latest(state).get(key);
        if (state.finalized_ || !isDraftable(value)) {
          return value;
        }
        if (value !== state.base_.get(key)) {
          return value;
        }
        const draft = createProxy(value, state);
        prepareMapCopy(state);
        state.copy_.set(key, draft);
        return draft;
      }
      keys() {
        return latest(this[DRAFT_STATE]).keys();
      }
      values() {
        const iterator = this.keys();
        return {
          [Symbol.iterator]: () => this.values(),
          next: () => {
            const r = iterator.next();
            if (r.done)
              return r;
            const value = this.get(r.value);
            return {
              done: false,
              value
            };
          }
        };
      }
      entries() {
        const iterator = this.keys();
        return {
          [Symbol.iterator]: () => this.entries(),
          next: () => {
            const r = iterator.next();
            if (r.done)
              return r;
            const value = this.get(r.value);
            return {
              done: false,
              value: [r.value, value]
            };
          }
        };
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    }
    function proxyMap_(target, parent) {
      return new DraftMap(target, parent);
    }
    function prepareMapCopy(state) {
      if (!state.copy_) {
        state.assigned_ = /* @__PURE__ */ new Map();
        state.copy_ = new Map(state.base_);
      }
    }
    class DraftSet extends Set {
      constructor(target, parent) {
        super();
        this[DRAFT_STATE] = {
          type_: 3,
          parent_: parent,
          scope_: parent ? parent.scope_ : getCurrentScope(),
          modified_: false,
          finalized_: false,
          copy_: void 0,
          base_: target,
          draft_: this,
          drafts_: /* @__PURE__ */ new Map(),
          revoked_: false,
          isManual_: false
        };
      }
      get size() {
        return latest(this[DRAFT_STATE]).size;
      }
      has(value) {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        if (!state.copy_) {
          return state.base_.has(value);
        }
        if (state.copy_.has(value))
          return true;
        if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
          return true;
        return false;
      }
      add(value) {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        if (!this.has(value)) {
          prepareSetCopy(state);
          markChanged(state);
          state.copy_.add(value);
        }
        return this;
      }
      delete(value) {
        if (!this.has(value)) {
          return false;
        }
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        markChanged(state);
        return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
          /* istanbul ignore next */
          false
        ));
      }
      clear() {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        if (latest(state).size) {
          prepareSetCopy(state);
          markChanged(state);
          state.copy_.clear();
        }
      }
      values() {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        return state.copy_.values();
      }
      entries() {
        const state = this[DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        return state.copy_.entries();
      }
      keys() {
        return this.values();
      }
      [Symbol.iterator]() {
        return this.values();
      }
      forEach(cb, thisArg) {
        const iterator = this.values();
        let result = iterator.next();
        while (!result.done) {
          cb.call(thisArg, result.value, result.value, this);
          result = iterator.next();
        }
      }
    }
    function proxySet_(target, parent) {
      return new DraftSet(target, parent);
    }
    function prepareSetCopy(state) {
      if (!state.copy_) {
        state.copy_ = /* @__PURE__ */ new Set();
        state.base_.forEach((value) => {
          if (isDraftable(value)) {
            const draft = createProxy(value, state);
            state.drafts_.set(value, draft);
            state.copy_.add(draft);
          } else {
            state.copy_.add(value);
          }
        });
      }
    }
    function assertUnrevoked(state) {
      if (state.revoked_)
        die(3, JSON.stringify(latest(state)));
    }
    loadPlugin("MapSet", { proxyMap_, proxySet_ });
  }
  function enablePatches() {
    const errorOffset = 16;
    if (true) {
      errors.push(
        'Sets cannot have "replace" patches.',
        function(op) {
          return "Unsupported patch operation: " + op;
        },
        function(path) {
          return "Cannot apply patch, path doesn't resolve: " + path;
        },
        "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
      );
    }
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";
    function generatePatches_(state, basePath, patches, inversePatches) {
      switch (state.type_) {
        case 0:
        case 2:
          return generatePatchesFromAssigned(
            state,
            basePath,
            patches,
            inversePatches
          );
        case 1:
          return generateArrayPatches(state, basePath, patches, inversePatches);
        case 3:
          return generateSetPatches(
            state,
            basePath,
            patches,
            inversePatches
          );
      }
    }
    function generateArrayPatches(state, basePath, patches, inversePatches) {
      let { base_, assigned_ } = state;
      let copy_ = state.copy_;
      if (copy_.length < base_.length) {
        [base_, copy_] = [copy_, base_];
        [patches, inversePatches] = [inversePatches, patches];
      }
      for (let i = 0; i < base_.length; i++) {
        if (assigned_[i] && copy_[i] !== base_[i]) {
          const path = basePath.concat([i]);
          patches.push({
            op: REPLACE,
            path,
            // Need to maybe clone it, as it can in fact be the original value
            // due to the base/copy inversion at the start of this function
            value: clonePatchValueIfNeeded(copy_[i])
          });
          inversePatches.push({
            op: REPLACE,
            path,
            value: clonePatchValueIfNeeded(base_[i])
          });
        }
      }
      for (let i = base_.length; i < copy_.length; i++) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
      }
      for (let i = copy_.length - 1; base_.length <= i; --i) {
        const path = basePath.concat([i]);
        inversePatches.push({
          op: REMOVE,
          path
        });
      }
    }
    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
      const { base_, copy_ } = state;
      each(state.assigned_, (key, assignedValue) => {
        const origValue = get(base_, key);
        const value = get(copy_, key);
        const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
        if (origValue === value && op === REPLACE)
          return;
        const path = basePath.concat(key);
        patches.push(op === REMOVE ? { op, path } : { op, path, value });
        inversePatches.push(
          op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
        );
      });
    }
    function generateSetPatches(state, basePath, patches, inversePatches) {
      let { base_, copy_ } = state;
      let i = 0;
      base_.forEach((value) => {
        if (!copy_.has(value)) {
          const path = basePath.concat([i]);
          patches.push({
            op: REMOVE,
            path,
            value
          });
          inversePatches.unshift({
            op: ADD,
            path,
            value
          });
        }
        i++;
      });
      i = 0;
      copy_.forEach((value) => {
        if (!base_.has(value)) {
          const path = basePath.concat([i]);
          patches.push({
            op: ADD,
            path,
            value
          });
          inversePatches.unshift({
            op: REMOVE,
            path,
            value
          });
        }
        i++;
      });
    }
    function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
      patches.push({
        op: REPLACE,
        path: [],
        value: replacement === NOTHING ? void 0 : replacement
      });
      inversePatches.push({
        op: REPLACE,
        path: [],
        value: baseValue
      });
    }
    function applyPatches_(draft, patches) {
      patches.forEach((patch) => {
        const { path, op } = patch;
        let base = draft;
        for (let i = 0; i < path.length - 1; i++) {
          const parentType = getArchtype(base);
          let p = path[i];
          if (typeof p !== "string" && typeof p !== "number") {
            p = "" + p;
          }
          if ((parentType === 0 || parentType === 1) && (p === "__proto__" || p === "constructor"))
            die(errorOffset + 3);
          if (typeof base === "function" && p === "prototype")
            die(errorOffset + 3);
          base = get(base, p);
          if (typeof base !== "object")
            die(errorOffset + 2, path.join("/"));
        }
        const type = getArchtype(base);
        const value = deepClonePatchValue(patch.value);
        const key = path[path.length - 1];
        switch (op) {
          case REPLACE:
            switch (type) {
              case 2:
                return base.set(key, value);
              case 3:
                die(errorOffset);
              default:
                return base[key] = value;
            }
          case ADD:
            switch (type) {
              case 1:
                return key === "-" ? base.push(value) : base.splice(key, 0, value);
              case 2:
                return base.set(key, value);
              case 3:
                return base.add(value);
              default:
                return base[key] = value;
            }
          case REMOVE:
            switch (type) {
              case 1:
                return base.splice(key, 1);
              case 2:
                return base.delete(key);
              case 3:
                return base.delete(patch.value);
              default:
                return delete base[key];
            }
          default:
            die(errorOffset + 1, op);
        }
      });
      return draft;
    }
    function deepClonePatchValue(obj) {
      if (!isDraftable(obj))
        return obj;
      if (Array.isArray(obj))
        return obj.map(deepClonePatchValue);
      if (isMap$1(obj))
        return new Map(
          Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
        );
      if (isSet$1(obj))
        return new Set(Array.from(obj).map(deepClonePatchValue));
      const cloned = Object.create(getPrototypeOf(obj));
      for (const key in obj)
        cloned[key] = deepClonePatchValue(obj[key]);
      if (has(obj, DRAFTABLE))
        cloned[DRAFTABLE] = obj[DRAFTABLE];
      return cloned;
    }
    function clonePatchValueIfNeeded(obj) {
      if (isDraft(obj)) {
        return deepClonePatchValue(obj);
      } else
        return obj;
    }
    loadPlugin("Patches", {
      applyPatches_,
      generatePatches_,
      generateReplacementPatches_
    });
  }
  var immer = new Immer2();
  immer.produce;
  var produceWithPatches = immer.produceWithPatches.bind(
    immer
  );
  immer.setAutoFreeze.bind(immer);
  immer.setUseStrictShallowCopy.bind(immer);
  var applyPatches = immer.applyPatches.bind(immer);
  immer.createDraft.bind(immer);
  immer.finishDraft.bind(immer);
  enableMapSet();
  enablePatches();
  function cwt(...allTags) {
    return allTags.filter((tags) => tags !== void 0).reduce((acc, tags) => acc.concat(tags), []);
  }
  function makeRootReplacingPatches(value) {
    return [
      {
        op: "replace",
        path: [],
        value
      }
    ];
  }
  function makeSetterWithPatches(update, prependTagsFn) {
    const setter = (value, tags) => {
      update(() => [value, makeRootReplacingPatches(value)], cwt(prependTagsFn?.(), tags));
    };
    setter.withProducer = (producer, tags) => {
      update((oldData) => {
        const [newData, patches] = produceWithPatches(oldData, producer);
        if (isAvailable(newData)) {
          return [newData, patches];
        }
        throw new Error("Cannot update value to NOT_AVAILABLE");
      }, cwt(prependTagsFn?.(), tags));
    };
    setter.withUpdater = (updater, tags) => {
      update((oldData) => {
        const newData = updater(oldData);
        return [newData, makeRootReplacingPatches(newData)];
      }, cwt(prependTagsFn?.(), tags));
    };
    setter.withPatchUpdater = (updater, tags) => {
      update(updater, cwt(prependTagsFn?.(), tags));
    };
    setter.withPatches = (patches, tags) => {
      update((oldData) => {
        return [applyPatches(oldData, patches), patches];
      }, cwt(prependTagsFn?.(), tags));
    };
    setter.withValueAndPatches = (newValue, patches, tags) => {
      update(() => [newValue, patches], cwt(prependTagsFn?.(), tags));
    };
    return setter;
  }
  var equals = (a, b) => a === b;
  var Signal = class _Signal extends Subscribable {
    /**
     * Creates a signal.
     *
     * @param value - The initial value of the signal.
     * @param equalsPredicate - A function to compare two values. The subscribers will only be called
     * if the value changes according to the `equalsPredicate`. By default, it uses the `===`
     * operator.
     * @returns This method returns a tuple with two elements:
     * - The signal
     * - A function to update the value
     **/
    static create(value, equalsPredicate = equals) {
      const signal = new _Signal(value, equalsPredicate);
      const update = (updater, tags) => {
        signal.update(updater, tags);
      };
      const setter = makeSetterWithPatches(update);
      return [signal, setter];
    }
    static createReadonly(value) {
      return _Signal.create(value)[0];
    }
    constructor(value, equalsPredicate) {
      super();
      this.value = value;
      this.equalsPredicate = equalsPredicate;
      this.subscribers = /* @__PURE__ */ new Set();
      this.queuedUpdaters = [];
      this.isEmitting = false;
    }
    /**
     * Returns the current value of the signal.
     */
    get() {
      return this.value;
    }
    pull() {
      return this.value;
    }
    notifyFull(value, patches, tags) {
      for (const { type, callback } of this.subscribers) {
        if (type === "full") {
          callback(value, patches, tags);
        }
      }
    }
    notifyAll(value, patches, tags) {
      for (const { type, callback } of this.subscribers) {
        if (type === "regular") {
          callback(value);
        } else {
          callback(value, patches, tags);
        }
      }
    }
    notifyAndUpdateIfChanged(value, patches, tags) {
      if (!this.equalsPredicate(this.value, value)) {
        this.value = value;
        this.notifyAll(value, patches, tags);
      } else if (tags.length > 0) {
        this.notifyFull(value, patches, tags);
      }
    }
    isReplaceRoot(patch) {
      return patch.path.length === 0 && patch.op === "replace";
    }
    update(updater, tags) {
      this.queuedUpdaters.push([updater, tags]);
      if (this.isEmitting) {
        return;
      }
      this.isEmitting = true;
      try {
        while (this.queuedUpdaters.length > 0) {
          let value = this.value;
          let patches = [];
          const tags2 = [];
          while (this.queuedUpdaters.length > 0) {
            const [updater2, newTags] = this.queuedUpdaters.shift();
            const [newValue, newPatches] = updater2(value);
            value = newValue;
            const rootReplacerIndex = newPatches.findIndex(this.isReplaceRoot);
            if (rootReplacerIndex !== -1) {
              patches = newPatches.slice(rootReplacerIndex);
            } else {
              patches.push(...newPatches);
            }
            if (newTags !== void 0) {
              tags2.push(...newTags);
            }
          }
          this.notifyAndUpdateIfChanged(value, patches, tags2);
        }
      } finally {
        this.isEmitting = false;
      }
    }
    /**
     * Subscribes to the signal. The callback will be called whenever the value changes. All callbacks
     * are called synchronously upon updating. It will NOT be immediately called with the current
     * value. (Use `get()` to get the current value.) Returns a function to unsubscribe.
     *
     * Edge cases involving manipulating the signal in the callback:
     *
     * - If the callback adds new subscribers, they will also be called within the same update.
     * - If the callback causes removal of subscribers that have not been called yet, they will no
     *   longer be called.
     * - If the callback causes an update of the value, the update will be queued. If multiple updates
     *   are queued, only the last one will be executed.
     *
     * Edge cases involving adding the same callback multiple times.
     *
     *  - Callbacks are tracked with a set. Adding the same subscriber will not cause it to be called
     *    multiple times.
     */
    subscribe(callback) {
      const subscriber = {
        type: "regular",
        callback
      };
      this.subscribers.add(subscriber);
      return () => {
        this.subscribers.delete(subscriber);
      };
    }
    /**
     * Subscribes to the signal with the callback and trigger the callback immediately with the
     * current value.
     */
    subscribeAndNow(callback) {
      const unsubscribe = this.subscribe(callback);
      callback(this.value);
      return unsubscribe;
    }
    subscribeFull(callback) {
      const subscriber = {
        type: "full",
        callback
      };
      this.subscribers.add(subscriber);
      return () => {
        this.subscribers.delete(subscriber);
      };
    }
    /**
     * Wait until the signal satisfies a predicate. If the predicate is already satisfied, it will
     * return immediately. Otherwise, it will wait until the signal satisfies the predicate.
     */
    async until(predicate) {
      const current2 = this.get();
      if (predicate(current2)) {
        return current2;
      }
      const { promise, resolve } = makePromise();
      const unsubscribe = this.subscribe((data) => {
        if (predicate(data)) {
          resolve(data);
          unsubscribe();
        }
      });
      return await promise;
    }
  };
  function isAvailable(data) {
    return data !== LazySignal.NOT_AVAILABLE;
  }
  var LazySignal = class _LazySignal extends Subscribable {
    static {
      this.NOT_AVAILABLE = Symbol("notAvailable");
    }
    static create(initialValue, subscribeUpstream, equalsPredicate = (a, b) => a === b) {
      return new _LazySignal(initialValue, subscribeUpstream, equalsPredicate);
    }
    static createWithoutInitialValue(subscribeUpstream, equalsPredicate = (a, b) => a === b) {
      const fullEqualsPredicate = (a, b) => {
        if (a === _LazySignal.NOT_AVAILABLE || b === _LazySignal.NOT_AVAILABLE) {
          return a === b;
        }
        return equalsPredicate(a, b);
      };
      return new _LazySignal(_LazySignal.NOT_AVAILABLE, subscribeUpstream, fullEqualsPredicate);
    }
    static deriveFrom(sourceSignals, deriver, outputEqualsPredicate) {
      let fullEqualsPredicate = void 0;
      if (outputEqualsPredicate !== void 0) {
        fullEqualsPredicate = (a, b) => {
          if (a === _LazySignal.NOT_AVAILABLE || b === _LazySignal.NOT_AVAILABLE) {
            return a === b;
          }
          return outputEqualsPredicate(a, b);
        };
      }
      const derive = () => {
        const sourceValues = sourceSignals.map((signal) => signal.get());
        if (sourceValues.some((value) => value === _LazySignal.NOT_AVAILABLE)) {
          return _LazySignal.NOT_AVAILABLE;
        }
        return deriver(...sourceValues);
      };
      return new _LazySignal(derive(), (setDownstream) => {
        const unsubscriber = sourceSignals.map((signal) => signal.subscribe(() => {
          const value = derive();
          if (isAvailable(value)) {
            setDownstream(value);
          }
        }));
        const newValue = derive();
        if (isAvailable(newValue)) {
          setDownstream(newValue);
        }
        return () => {
          unsubscriber.forEach((unsub) => unsub());
        };
      }, fullEqualsPredicate);
    }
    static asyncDeriveFrom(strategy, sourceSignals, deriver, outputEqualsPredicate) {
      let fullEqualsPredicate = void 0;
      if (outputEqualsPredicate !== void 0) {
        fullEqualsPredicate = (a, b) => {
          if (a === _LazySignal.NOT_AVAILABLE || b === _LazySignal.NOT_AVAILABLE) {
            return a === b;
          }
          return outputEqualsPredicate(a, b);
        };
      }
      let lastAppliedUpdateId = -1;
      let lastIssuedUpdateId = -1;
      return new _LazySignal(_LazySignal.NOT_AVAILABLE, (setDownstream) => {
        const deriveAndUpdate = () => {
          lastIssuedUpdateId++;
          const updateId = lastIssuedUpdateId;
          const sourceValues = sourceSignals.map((signal) => signal.get());
          if (sourceValues.some((value) => value === _LazySignal.NOT_AVAILABLE)) {
            return;
          }
          deriver(...sourceValues).then((result) => {
            if (!isAvailable(result)) {
              return;
            }
            switch (strategy) {
              case "eager": {
                if (updateId > lastAppliedUpdateId) {
                  lastAppliedUpdateId = updateId;
                  setDownstream(result);
                }
                break;
              }
              default: {
                const exhaustiveCheck = strategy;
                throw new Error(`Unknown strategy: ${exhaustiveCheck}`);
              }
            }
          });
        };
        const unsubscriber = sourceSignals.map((signal) => signal.subscribe(() => {
          deriveAndUpdate();
        }));
        deriveAndUpdate();
        return () => {
          unsubscriber.forEach((unsub) => unsub());
        };
      }, fullEqualsPredicate);
    }
    constructor(initialValue, subscribeUpstream, equalsPredicate = (a, b) => a === b) {
      super();
      this.subscribeUpstream = subscribeUpstream;
      this.dataIsStale = true;
      this.upstreamUnsubscribe = null;
      this.subscribersCount = 0;
      this.isSubscribedToUpstream = false;
      this.updateReceivedSynchronousCallbacks = /* @__PURE__ */ new Set();
      [this.signal, this.setValue] = Signal.create(initialValue, equalsPredicate);
      [this.updateReceivedEvent, this.emitUpdateReceivedEvent] = Event.create();
    }
    /**
     * Returns whether the value is currently stale.
     *
     * A value is stale whenever the upstream subscription is not active. This can happen in three
     * cases:
     *
     * 1. When no subscriber is attached to this signal, the signal will not subscribe to the
     *    upstream. In this case, the value is always stale.
     * 2. When a subscriber is attached, but the upstream has not yet emitted a single value, the
     *    value is also stale.
     * 3. When the upstream has emitted an error. In this case, the subscription to the upstream is
     *    terminated and the value is stale.
     *
     * If you wish to get the current value and ensure that it is not stale, use the method
     * {@link LazySignal#pull}.
     */
    isStale() {
      return this.dataIsStale;
    }
    subscribeToUpstream() {
      this.isSubscribedToUpstream = true;
      let subscribed = true;
      let becameStale = false;
      const unsubscribeFromUpstream = this.subscribeUpstream(makeSetterWithPatches((updater, tags) => {
        if (!subscribed) {
          return;
        }
        this.setValue.withPatchUpdater(updater, tags);
        this.dataIsStale = becameStale;
        this.emitUpdateReceivedEvent();
        for (const callback of this.updateReceivedSynchronousCallbacks) {
          callback();
        }
      }), (error) => {
        if (!subscribed) {
          return;
        }
        Promise.reject(error);
        this.dataIsStale = true;
        this.isSubscribedToUpstream = false;
        this.upstreamUnsubscribe = null;
        subscribed = false;
      });
      this.upstreamUnsubscribe = () => {
        if (subscribed) {
          subscribed = false;
          becameStale = true;
          unsubscribeFromUpstream();
        }
      };
    }
    unsubscribeFromUpstream() {
      this.isSubscribedToUpstream = false;
      if (this.upstreamUnsubscribe !== null) {
        this.upstreamUnsubscribe();
        this.upstreamUnsubscribe = null;
        this.dataIsStale = true;
      }
    }
    /**
     * Gets the current value of the signal. If the value is not available, it will return
     * {@link LazySignal.NOT_AVAILABLE}. (A value will only be unavailable if the signal is created
     * without an initial value and the upstream has not emitted a value yet.)
     *
     * In addition, the value returned by this method may be stale. Use {@link LazySignal#isStale} to
     * check if the value is stale.
     *
     * If you wish to get the current value and ensure that it is not stale, use the method
     * {@link LazySignal#pull}.
     */
    get() {
      return this.signal.get();
    }
    /**
     * Pulls the current value of the signal. If the value is stale, it will subscribe and wait for
     * the next value from the upstream and return it.
     */
    async pull() {
      const { promise, resolve } = makePromise();
      if (!this.isStale()) {
        resolve(this.get());
      } else {
        const unsubscribe = this.subscribe(() => {
        });
        this.updateReceivedEvent.subscribeOnce(() => {
          resolve(this.get());
        });
        promise.then(unsubscribe);
      }
      return promise;
    }
    /**
     * If the data is not stale, the callback will be called synchronously with the current value.
     *
     * If the data is stale, it will pull the current value and call the callback with the value.
     */
    runOnNextFreshData(callback) {
      if (!this.isStale()) {
        callback(this.get());
      } else {
        let unsubscribe = null;
        const updateCallback = () => {
          this.updateReceivedSynchronousCallbacks.delete(updateCallback);
          callback(this.get());
          unsubscribe?.();
        };
        this.updateReceivedSynchronousCallbacks.add(updateCallback);
        unsubscribe = this.subscribe(() => {
        });
      }
    }
    async ensureAvailable() {
      await this.pull();
      return this;
    }
    subscribe(subscriber) {
      if (!this.isSubscribedToUpstream) {
        this.subscribeToUpstream();
      }
      this.subscribersCount++;
      const unsubscribe = this.signal.subscribe(subscriber);
      let unsubscribeCalled = false;
      return () => {
        if (unsubscribeCalled) {
          return;
        }
        unsubscribe();
        unsubscribeCalled = true;
        this.subscribersCount--;
        if (this.subscribersCount === 0 && this.isSubscribedToUpstream) {
          this.unsubscribeFromUpstream();
        }
      };
    }
    subscribeFull(subscriber) {
      if (!this.isSubscribedToUpstream) {
        this.subscribeToUpstream();
      }
      this.subscribersCount++;
      const unsubscribe = this.signal.subscribeFull(subscriber);
      let unsubscribeCalled = false;
      return () => {
        if (unsubscribeCalled) {
          return;
        }
        unsubscribe();
        unsubscribeCalled = true;
        this.subscribersCount--;
        if (this.subscribersCount === 0 && this.isSubscribedToUpstream) {
          this.unsubscribeFromUpstream();
        }
      };
    }
    /**
     * Subscribes to the signal. Will not cause the signal to subscribe to the upstream.
     */
    passiveSubscribe(subscriber) {
      return this.signal.subscribe(subscriber);
    }
    passiveSubscribeFull(subscriber) {
      return this.signal.subscribeFull(subscriber);
    }
  };
  var apiServerPorts = [41343, 52993, 16141, 39414, 22931];
  var waitForNextMicroTask = Symbol();
  var BufferedEvent = class _BufferedEvent extends Subscribable {
    static create() {
      const event2 = new _BufferedEvent();
      const emitter = (data) => {
        event2.emit(data);
      };
      return [event2, emitter];
    }
    constructor() {
      super();
      this.subscriber = null;
      this.queued = [];
      this.isNotifying = false;
    }
    emit(data) {
      if (this.queued.length === 0 && this.queued.at(-1) !== waitForNextMicroTask) {
        this.queued.push(waitForNextMicroTask);
      }
      this.queued.push(data);
      if (!this.isNotifying) {
        this.notifier();
      }
    }
    async notifier() {
      this.isNotifying = true;
      while (this.subscriber !== null && this.queued.length > 0) {
        const data = this.queued.shift();
        if (data === waitForNextMicroTask) {
          await Promise.resolve();
        } else {
          this.subscriber(data);
        }
      }
      this.isNotifying = false;
    }
    subscribe(listener) {
      if (this.subscriber !== null) {
        throw new Error("Cannot have more than one subscriber");
      }
      this.subscriber = listener;
      if (!this.isNotifying && this.queued.length > 0) {
        this.queued = [
          waitForNextMicroTask,
          ...this.queued.filter((data) => data !== waitForNextMicroTask)
        ];
        this.notifier();
      }
      return () => {
        this.subscriber = null;
      };
    }
    /**
     * Convert this buffered event to an event by stop buffering and triggering events on the new
     * returned event.
     */
    flow() {
      const [event2, emit] = Event.create();
      this.subscribe(emit);
      return event2;
    }
  };
  var Cleaner = class {
    constructor() {
      this.cleanups = [];
    }
    register(fn) {
      this.cleanups.push(fn);
    }
    [Symbol.dispose]() {
      for (const cleanup of this.cleanups) {
        cleanup();
      }
    }
  };
  function getCurrentStack(goAbove = 0) {
    const stack = new Error().stack;
    if (!stack) {
      return "";
    }
    const lines = stack.split("\n");
    return lines.slice(2 + goAbove).join("\n");
  }
  function changeErrorStackInPlace(error, newStack) {
    if (import_process.default.env.LMS_KEEP_INTERNAL_STACK) {
      return;
    }
    const stackContent = error.stack ?? "";
    error.stack = (stackContent.substring(0, stackContent.indexOf("\n    at ")).trimEnd() + "\n" + newStack).trimEnd();
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var boxen$1 = { exports: {} };
  var stringWidth = { exports: {} };
  var ansiRegex;
  var hasRequiredAnsiRegex;
  function requireAnsiRegex() {
    if (hasRequiredAnsiRegex) return ansiRegex;
    hasRequiredAnsiRegex = 1;
    ansiRegex = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
    return ansiRegex;
  }
  var stripAnsi;
  var hasRequiredStripAnsi;
  function requireStripAnsi() {
    if (hasRequiredStripAnsi) return stripAnsi;
    hasRequiredStripAnsi = 1;
    const ansiRegex2 = requireAnsiRegex();
    stripAnsi = (string) => typeof string === "string" ? string.replace(ansiRegex2(), "") : string;
    return stripAnsi;
  }
  var isFullwidthCodePoint = { exports: {} };
  var hasRequiredIsFullwidthCodePoint;
  function requireIsFullwidthCodePoint() {
    if (hasRequiredIsFullwidthCodePoint) return isFullwidthCodePoint.exports;
    hasRequiredIsFullwidthCodePoint = 1;
    const isFullwidthCodePoint$1 = (codePoint) => {
      if (Number.isNaN(codePoint)) {
        return false;
      }
      if (codePoint >= 4352 && (codePoint <= 4447 || // Hangul Jamo
      codePoint === 9001 || // LEFT-POINTING ANGLE BRACKET
      codePoint === 9002 || // RIGHT-POINTING ANGLE BRACKET
      // CJK Radicals Supplement .. Enclosed CJK Letters and Months
      11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
      12880 <= codePoint && codePoint <= 19903 || // CJK Unified Ideographs .. Yi Radicals
      19968 <= codePoint && codePoint <= 42182 || // Hangul Jamo Extended-A
      43360 <= codePoint && codePoint <= 43388 || // Hangul Syllables
      44032 <= codePoint && codePoint <= 55203 || // CJK Compatibility Ideographs
      63744 <= codePoint && codePoint <= 64255 || // Vertical Forms
      65040 <= codePoint && codePoint <= 65049 || // CJK Compatibility Forms .. Small Form Variants
      65072 <= codePoint && codePoint <= 65131 || // Halfwidth and Fullwidth Forms
      65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || // Kana Supplement
      110592 <= codePoint && codePoint <= 110593 || // Enclosed Ideographic Supplement
      127488 <= codePoint && codePoint <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
      131072 <= codePoint && codePoint <= 262141)) {
        return true;
      }
      return false;
    };
    isFullwidthCodePoint.exports = isFullwidthCodePoint$1;
    isFullwidthCodePoint.exports.default = isFullwidthCodePoint$1;
    return isFullwidthCodePoint.exports;
  }
  var emojiRegex3;
  var hasRequiredEmojiRegex;
  function requireEmojiRegex() {
    if (hasRequiredEmojiRegex) return emojiRegex3;
    hasRequiredEmojiRegex = 1;
    emojiRegex3 = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
    return emojiRegex3;
  }
  var hasRequiredStringWidth;
  function requireStringWidth() {
    if (hasRequiredStringWidth) return stringWidth.exports;
    hasRequiredStringWidth = 1;
    const stripAnsi2 = requireStripAnsi();
    const isFullwidthCodePoint2 = requireIsFullwidthCodePoint();
    const emojiRegex4 = requireEmojiRegex();
    const stringWidth$1 = (string) => {
      if (typeof string !== "string" || string.length === 0) {
        return 0;
      }
      string = stripAnsi2(string);
      if (string.length === 0) {
        return 0;
      }
      string = string.replace(emojiRegex4(), "  ");
      let width = 0;
      for (let i = 0; i < string.length; i++) {
        const code = string.codePointAt(i);
        if (code <= 31 || code >= 127 && code <= 159) {
          continue;
        }
        if (code >= 768 && code <= 879) {
          continue;
        }
        if (code > 65535) {
          i++;
        }
        width += isFullwidthCodePoint2(code) ? 2 : 1;
      }
      return width;
    };
    stringWidth.exports = stringWidth$1;
    stringWidth.exports.default = stringWidth$1;
    return stringWidth.exports;
  }
  var widestLine = { exports: {} };
  var hasRequiredWidestLine;
  function requireWidestLine() {
    if (hasRequiredWidestLine) return widestLine.exports;
    hasRequiredWidestLine = 1;
    const stringWidth2 = requireStringWidth();
    const widestLine$1 = (input) => {
      let max = 0;
      for (const line of input.split("\n")) {
        max = Math.max(max, stringWidth2(line));
      }
      return max;
    };
    widestLine.exports = widestLine$1;
    widestLine.exports.default = widestLine$1;
    return widestLine.exports;
  }
  var cliBoxes = { exports: {} };
  var single = {
    topLeft: "\u250C",
    topRight: "\u2510",
    bottomRight: "\u2518",
    bottomLeft: "\u2514",
    vertical: "\u2502",
    horizontal: "\u2500"
  };
  var double = {
    topLeft: "\u2554",
    topRight: "\u2557",
    bottomRight: "\u255D",
    bottomLeft: "\u255A",
    vertical: "\u2551",
    horizontal: "\u2550"
  };
  var round = {
    topLeft: "\u256D",
    topRight: "\u256E",
    bottomRight: "\u256F",
    bottomLeft: "\u2570",
    vertical: "\u2502",
    horizontal: "\u2500"
  };
  var bold = {
    topLeft: "\u250F",
    topRight: "\u2513",
    bottomRight: "\u251B",
    bottomLeft: "\u2517",
    vertical: "\u2503",
    horizontal: "\u2501"
  };
  var singleDouble = {
    topLeft: "\u2553",
    topRight: "\u2556",
    bottomRight: "\u255C",
    bottomLeft: "\u2559",
    vertical: "\u2551",
    horizontal: "\u2500"
  };
  var doubleSingle = {
    topLeft: "\u2552",
    topRight: "\u2555",
    bottomRight: "\u255B",
    bottomLeft: "\u2558",
    vertical: "\u2502",
    horizontal: "\u2550"
  };
  var classic = {
    topLeft: "+",
    topRight: "+",
    bottomRight: "+",
    bottomLeft: "+",
    vertical: "|",
    horizontal: "-"
  };
  var require$$0 = {
    single,
    double,
    round,
    bold,
    singleDouble,
    doubleSingle,
    classic
  };
  var hasRequiredCliBoxes;
  function requireCliBoxes() {
    if (hasRequiredCliBoxes) return cliBoxes.exports;
    hasRequiredCliBoxes = 1;
    const cliBoxes$1 = require$$0;
    cliBoxes.exports = cliBoxes$1;
    cliBoxes.exports.default = cliBoxes$1;
    return cliBoxes.exports;
  }
  var camelcase = { exports: {} };
  var hasRequiredCamelcase;
  function requireCamelcase() {
    if (hasRequiredCamelcase) return camelcase.exports;
    hasRequiredCamelcase = 1;
    const UPPERCASE = /[\p{Lu}]/u;
    const LOWERCASE = /[\p{Ll}]/u;
    const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
    const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
    const SEPARATORS = /[_.\- ]+/;
    const LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
    const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
    const NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
    const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
      let isLastCharLower = false;
      let isLastCharUpper = false;
      let isLastLastCharUpper = false;
      for (let i = 0; i < string.length; i++) {
        const character = string[i];
        if (isLastCharLower && UPPERCASE.test(character)) {
          string = string.slice(0, i) + "-" + string.slice(i);
          isLastCharLower = false;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = true;
          i++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
          string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = false;
          isLastCharLower = true;
        } else {
          isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
      }
      return string;
    };
    const preserveConsecutiveUppercase = (input, toLowerCase) => {
      LEADING_CAPITAL.lastIndex = 0;
      return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
    };
    const postProcess = (input, toUpperCase) => {
      SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
      NUMBERS_AND_IDENTIFIER.lastIndex = 0;
      return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
    };
    const camelCase = (input, options) => {
      if (!(typeof input === "string" || Array.isArray(input))) {
        throw new TypeError("Expected the input to be `string | string[]`");
      }
      options = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...options
      };
      if (Array.isArray(input)) {
        input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
      } else {
        input = input.trim();
      }
      if (input.length === 0) {
        return "";
      }
      const toLowerCase = options.locale === false ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale);
      const toUpperCase = options.locale === false ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
      if (input.length === 1) {
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
      }
      const hasUpperCase = input !== toLowerCase(input);
      if (hasUpperCase) {
        input = preserveCamelCase(input, toLowerCase, toUpperCase);
      }
      input = input.replace(LEADING_SEPARATORS, "");
      if (options.preserveConsecutiveUppercase) {
        input = preserveConsecutiveUppercase(input, toLowerCase);
      } else {
        input = toLowerCase(input);
      }
      if (options.pascalCase) {
        input = toUpperCase(input.charAt(0)) + input.slice(1);
      }
      return postProcess(input, toUpperCase);
    };
    camelcase.exports = camelCase;
    camelcase.exports.default = camelCase;
    return camelcase.exports;
  }
  var ansiAlign_1;
  var hasRequiredAnsiAlign;
  function requireAnsiAlign() {
    if (hasRequiredAnsiAlign) return ansiAlign_1;
    hasRequiredAnsiAlign = 1;
    const stringWidth2 = requireStringWidth();
    function ansiAlign(text2, opts) {
      if (!text2) return text2;
      opts = opts || {};
      const align = opts.align || "center";
      if (align === "left") return text2;
      const split = opts.split || "\n";
      const pad = opts.pad || " ";
      const widthDiffFn = align !== "right" ? halfDiff : fullDiff;
      let returnString = false;
      if (!Array.isArray(text2)) {
        returnString = true;
        text2 = String(text2).split(split);
      }
      let width;
      let maxWidth = 0;
      text2 = text2.map(function(str) {
        str = String(str);
        width = stringWidth2(str);
        maxWidth = Math.max(width, maxWidth);
        return {
          str,
          width
        };
      }).map(function(obj) {
        return new Array(widthDiffFn(maxWidth, obj.width) + 1).join(pad) + obj.str;
      });
      return returnString ? text2.join(split) : text2;
    }
    ansiAlign.left = function left(text2) {
      return ansiAlign(text2, { align: "left" });
    };
    ansiAlign.center = function center(text2) {
      return ansiAlign(text2, { align: "center" });
    };
    ansiAlign.right = function right(text2) {
      return ansiAlign(text2, { align: "right" });
    };
    ansiAlign_1 = ansiAlign;
    function halfDiff(maxWidth, curWidth) {
      return Math.floor((maxWidth - curWidth) / 2);
    }
    function fullDiff(maxWidth, curWidth) {
      return maxWidth - curWidth;
    }
    return ansiAlign_1;
  }
  var ansiStyles = { exports: {} };
  var colorName;
  var hasRequiredColorName;
  function requireColorName() {
    if (hasRequiredColorName) return colorName;
    hasRequiredColorName = 1;
    colorName = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
    return colorName;
  }
  var conversions;
  var hasRequiredConversions;
  function requireConversions() {
    if (hasRequiredConversions) return conversions;
    hasRequiredConversions = 1;
    const cssKeywords = requireColorName();
    const reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    const convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    conversions = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z2 = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z2 * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z2 = xyz[2];
      x /= 95.047;
      y /= 100;
      z2 /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z2);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z2 = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z2 * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z2 * 0.0415;
      b = x * 0.0557 + y * -0.204 + z2 * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z2 = xyz[2];
      x /= 95.047;
      y /= 100;
      z2 /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z2);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z2;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z2 = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z22 = z2 ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z2 *= 108.883;
      return [x, y, z2];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
    return conversions;
  }
  var route;
  var hasRequiredRoute;
  function requireRoute() {
    if (hasRequiredRoute) return route;
    hasRequiredRoute = 1;
    const conversions2 = requireConversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions2);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current2 = queue.pop();
        const adjacents = Object.keys(conversions2[current2]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current2].distance + 1;
            node.parent = current2;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions2[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions2[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    route = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
    return route;
  }
  var colorConvert;
  var hasRequiredColorConvert;
  function requireColorConvert() {
    if (hasRequiredColorConvert) return colorConvert;
    hasRequiredColorConvert = 1;
    const conversions2 = requireConversions();
    const route2 = requireRoute();
    const convert = {};
    const models = Object.keys(conversions2);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions2[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions2[fromModel].labels });
      const routes = route2(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    colorConvert = convert;
    return colorConvert;
  }
  ansiStyles.exports;
  var hasRequiredAnsiStyles;
  function requireAnsiStyles() {
    if (hasRequiredAnsiStyles) return ansiStyles.exports;
    hasRequiredAnsiStyles = 1;
    (function(module) {
      const wrapAnsi16 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `\x1B[${code + offset}m`;
      };
      const wrapAnsi256 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `\x1B[${38 + offset};5;${code}m`;
      };
      const wrapAnsi16m = (fn, offset) => (...args) => {
        const rgb = fn(...args);
        return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
      };
      const ansi2ansi = (n) => n;
      const rgb2rgb = (r, g, b) => [r, g, b];
      const setLazyProperty = (object, property, get2) => {
        Object.defineProperty(object, property, {
          get: () => {
            const value = get2();
            Object.defineProperty(object, property, {
              value,
              enumerable: true,
              configurable: true
            });
            return value;
          },
          enumerable: true,
          configurable: true
        });
      };
      let colorConvert2;
      const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
        if (colorConvert2 === void 0) {
          colorConvert2 = requireColorConvert();
        }
        const offset = isBackground ? 10 : 0;
        const styles = {};
        for (const [sourceSpace, suite] of Object.entries(colorConvert2)) {
          const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
          if (sourceSpace === targetSpace) {
            styles[name] = wrap(identity, offset);
          } else if (typeof suite === "object") {
            styles[name] = wrap(suite[targetSpace], offset);
          }
        }
        return styles;
      };
      function assembleStyles() {
        const codes = /* @__PURE__ */ new Map();
        const styles = {
          modifier: {
            reset: [0, 0],
            // 21 isn't widely supported and 22 does the same thing
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            // Bright color
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            // Bright color
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        styles.color.gray = styles.color.blackBright;
        styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
        styles.color.grey = styles.color.blackBright;
        styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
        for (const [groupName, group] of Object.entries(styles)) {
          for (const [styleName, style] of Object.entries(group)) {
            styles[styleName] = {
              open: `\x1B[${style[0]}m`,
              close: `\x1B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
          }
          Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
          });
        }
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
        styles.color.close = "\x1B[39m";
        styles.bgColor.close = "\x1B[49m";
        setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
        setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
        return styles;
      }
      Object.defineProperty(module, "exports", {
        enumerable: true,
        get: assembleStyles
      });
    })(ansiStyles);
    return ansiStyles.exports;
  }
  var wrapAnsi_1;
  var hasRequiredWrapAnsi;
  function requireWrapAnsi() {
    if (hasRequiredWrapAnsi) return wrapAnsi_1;
    hasRequiredWrapAnsi = 1;
    const stringWidth2 = requireStringWidth();
    const stripAnsi2 = requireStripAnsi();
    const ansiStyles2 = requireAnsiStyles();
    const ESCAPES = /* @__PURE__ */ new Set([
      "\x1B",
      "\x9B"
    ]);
    const END_CODE = 39;
    const ANSI_ESCAPE_BELL = "\x07";
    const ANSI_CSI = "[";
    const ANSI_OSC = "]";
    const ANSI_SGR_TERMINATOR = "m";
    const ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
    const wrapAnsi = (code) => `${ESCAPES.values().next().value}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
    const wrapAnsiHyperlink = (uri) => `${ESCAPES.values().next().value}${ANSI_ESCAPE_LINK}${uri}${ANSI_ESCAPE_BELL}`;
    const wordLengths = (string) => string.split(" ").map((character) => stringWidth2(character));
    const wrapWord = (rows, word, columns) => {
      const characters = [...word];
      let isInsideEscape = false;
      let isInsideLinkEscape = false;
      let visible = stringWidth2(stripAnsi2(rows[rows.length - 1]));
      for (const [index, character] of characters.entries()) {
        const characterLength = stringWidth2(character);
        if (visible + characterLength <= columns) {
          rows[rows.length - 1] += character;
        } else {
          rows.push(character);
          visible = 0;
        }
        if (ESCAPES.has(character)) {
          isInsideEscape = true;
          isInsideLinkEscape = characters.slice(index + 1).join("").startsWith(ANSI_ESCAPE_LINK);
        }
        if (isInsideEscape) {
          if (isInsideLinkEscape) {
            if (character === ANSI_ESCAPE_BELL) {
              isInsideEscape = false;
              isInsideLinkEscape = false;
            }
          } else if (character === ANSI_SGR_TERMINATOR) {
            isInsideEscape = false;
          }
          continue;
        }
        visible += characterLength;
        if (visible === columns && index < characters.length - 1) {
          rows.push("");
          visible = 0;
        }
      }
      if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) {
        rows[rows.length - 2] += rows.pop();
      }
    };
    const stringVisibleTrimSpacesRight = (string) => {
      const words = string.split(" ");
      let last = words.length;
      while (last > 0) {
        if (stringWidth2(words[last - 1]) > 0) {
          break;
        }
        last--;
      }
      if (last === words.length) {
        return string;
      }
      return words.slice(0, last).join(" ") + words.slice(last).join("");
    };
    const exec = (string, columns, options = {}) => {
      if (options.trim !== false && string.trim() === "") {
        return "";
      }
      let returnValue = "";
      let escapeCode;
      let escapeUrl;
      const lengths = wordLengths(string);
      let rows = [""];
      for (const [index, word] of string.split(" ").entries()) {
        if (options.trim !== false) {
          rows[rows.length - 1] = rows[rows.length - 1].trimStart();
        }
        let rowLength = stringWidth2(rows[rows.length - 1]);
        if (index !== 0) {
          if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
            rows.push("");
            rowLength = 0;
          }
          if (rowLength > 0 || options.trim === false) {
            rows[rows.length - 1] += " ";
            rowLength++;
          }
        }
        if (options.hard && lengths[index] > columns) {
          const remainingColumns = columns - rowLength;
          const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
          const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
          if (breaksStartingNextLine < breaksStartingThisLine) {
            rows.push("");
          }
          wrapWord(rows, word, columns);
          continue;
        }
        if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
          if (options.wordWrap === false && rowLength < columns) {
            wrapWord(rows, word, columns);
            continue;
          }
          rows.push("");
        }
        if (rowLength + lengths[index] > columns && options.wordWrap === false) {
          wrapWord(rows, word, columns);
          continue;
        }
        rows[rows.length - 1] += word;
      }
      if (options.trim !== false) {
        rows = rows.map(stringVisibleTrimSpacesRight);
      }
      const pre = [...rows.join("\n")];
      for (const [index, character] of pre.entries()) {
        returnValue += character;
        if (ESCAPES.has(character)) {
          const { groups } = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`).exec(pre.slice(index).join("")) || { groups: {} };
          if (groups.code !== void 0) {
            const code2 = Number.parseFloat(groups.code);
            escapeCode = code2 === END_CODE ? void 0 : code2;
          } else if (groups.uri !== void 0) {
            escapeUrl = groups.uri.length === 0 ? void 0 : groups.uri;
          }
        }
        const code = ansiStyles2.codes.get(Number(escapeCode));
        if (pre[index + 1] === "\n") {
          if (escapeUrl) {
            returnValue += wrapAnsiHyperlink("");
          }
          if (escapeCode && code) {
            returnValue += wrapAnsi(code);
          }
        } else if (character === "\n") {
          if (escapeCode && code) {
            returnValue += wrapAnsi(escapeCode);
          }
          if (escapeUrl) {
            returnValue += wrapAnsiHyperlink(escapeUrl);
          }
        }
      }
      return returnValue;
    };
    wrapAnsi_1 = (string, columns, options) => {
      return String(string).normalize().replace(/\r\n/g, "\n").split("\n").map((line) => exec(line, columns, options)).join("\n");
    };
    return wrapAnsi_1;
  }
  var hasRequiredBoxen;
  function requireBoxen() {
    if (hasRequiredBoxen) return boxen$1.exports;
    hasRequiredBoxen = 1;
    const stringWidth2 = requireStringWidth();
    const chalk$1 = import_chalk.default;
    const widestLine2 = requireWidestLine();
    const cliBoxes2 = requireCliBoxes();
    const camelCase = requireCamelcase();
    const ansiAlign = requireAnsiAlign();
    const wrapAnsi = requireWrapAnsi();
    const NL = "\n";
    const PAD = " ";
    const terminalColumns = () => {
      const { env, stdout, stderr } = process;
      if (stdout && stdout.columns) {
        return stdout.columns;
      }
      if (stderr && stderr.columns) {
        return stderr.columns;
      }
      if (env.COLUMNS) {
        return Number.parseInt(env.COLUMNS, 10);
      }
      return 80;
    };
    const getObject = (detail) => {
      return typeof detail === "number" ? {
        top: detail,
        right: detail * 3,
        bottom: detail,
        left: detail * 3
      } : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...detail
      };
    };
    const getBorderChars = (borderStyle) => {
      const sides = [
        "topLeft",
        "topRight",
        "bottomRight",
        "bottomLeft",
        "vertical",
        "horizontal"
      ];
      let chararacters;
      if (typeof borderStyle === "string") {
        chararacters = cliBoxes2[borderStyle];
        if (!chararacters) {
          throw new TypeError(`Invalid border style: ${borderStyle}`);
        }
      } else {
        for (const side of sides) {
          if (!borderStyle[side] || typeof borderStyle[side] !== "string") {
            throw new TypeError(`Invalid border style: ${side}`);
          }
        }
        chararacters = borderStyle;
      }
      return chararacters;
    };
    const makeTitle = (text2, horizontal, alignement) => {
      let title = "";
      const textWidth = stringWidth2(text2);
      switch (alignement) {
        case "left":
          title = text2 + horizontal.slice(textWidth);
          break;
        case "right":
          title = horizontal.slice(textWidth) + text2;
          break;
        default:
          horizontal = horizontal.slice(textWidth);
          if (horizontal.length % 2 === 1) {
            horizontal = horizontal.slice(Math.floor(horizontal.length / 2));
            title = horizontal.slice(1) + text2 + horizontal;
          } else {
            horizontal = horizontal.slice(horizontal.length / 2);
            title = horizontal + text2 + horizontal;
          }
          break;
      }
      return title;
    };
    const makeContentText = (text2, padding, columns, align) => {
      text2 = ansiAlign(text2, { align });
      let lines = text2.split(NL);
      const textWidth = widestLine2(text2);
      const max = columns - padding.left - padding.right;
      if (textWidth > max) {
        const newLines = [];
        for (const line of lines) {
          const createdLines = wrapAnsi(line, max, { hard: true });
          const alignedLines = ansiAlign(createdLines, { align });
          const alignedLinesArray = alignedLines.split("\n");
          const longestLength = Math.max(...alignedLinesArray.map((s) => stringWidth2(s)));
          for (const alignedLine of alignedLinesArray) {
            let paddedLine;
            switch (align) {
              case "center":
                paddedLine = PAD.repeat((max - longestLength) / 2) + alignedLine;
                break;
              case "right":
                paddedLine = PAD.repeat(max - longestLength) + alignedLine;
                break;
              default:
                paddedLine = alignedLine;
                break;
            }
            newLines.push(paddedLine);
          }
        }
        lines = newLines;
      }
      if (align === "center" && textWidth < max) {
        lines = lines.map((line) => PAD.repeat((max - textWidth) / 2) + line);
      } else if (align === "right" && textWidth < max) {
        lines = lines.map((line) => PAD.repeat(max - textWidth) + line);
      }
      const paddingLeft = PAD.repeat(padding.left);
      const paddingRight = PAD.repeat(padding.right);
      lines = lines.map((line) => paddingLeft + line + paddingRight);
      lines = lines.map((line) => {
        if (columns - stringWidth2(line) > 0) {
          switch (align) {
            case "center":
              return line + PAD.repeat(columns - stringWidth2(line));
            case "right":
              return line + PAD.repeat(columns - stringWidth2(line));
            default:
              return line + PAD.repeat(columns - stringWidth2(line));
          }
        }
        return line;
      });
      if (padding.top > 0) {
        lines = new Array(padding.top).fill(PAD.repeat(columns)).concat(lines);
      }
      if (padding.bottom > 0) {
        lines = lines.concat(new Array(padding.bottom).fill(PAD.repeat(columns)));
      }
      return lines.join(NL);
    };
    const isHex = (color) => color.match(/^#(?:[0-f]{3}){1,2}$/i);
    const isColorValid = (color) => typeof color === "string" && (chalk$1[color] || isHex(color));
    const getColorFn = (color) => isHex(color) ? chalk$1.hex(color) : chalk$1[color];
    const getBGColorFn = (color) => isHex(color) ? chalk$1.bgHex(color) : chalk$1[camelCase(["bg", color])];
    boxen$1.exports = (text2, options) => {
      options = {
        padding: 0,
        borderStyle: "single",
        dimBorder: false,
        textAlignment: "left",
        float: "left",
        titleAlignment: "left",
        ...options
      };
      if (options.align) {
        options.textAlignment = options.align;
      }
      const BORDERS_WIDTH = 2;
      if (options.borderColor && !isColorValid(options.borderColor)) {
        throw new Error(`${options.borderColor} is not a valid borderColor`);
      }
      if (options.backgroundColor && !isColorValid(options.backgroundColor)) {
        throw new Error(`${options.backgroundColor} is not a valid backgroundColor`);
      }
      const chars = getBorderChars(options.borderStyle);
      const padding = getObject(options.padding);
      const margin = getObject(options.margin);
      const colorizeBorder = (border) => {
        const newBorder = options.borderColor ? getColorFn(options.borderColor)(border) : border;
        return options.dimBorder ? chalk$1.dim(newBorder) : newBorder;
      };
      const colorizeContent = (content) => options.backgroundColor ? getBGColorFn(options.backgroundColor)(content) : content;
      const columns = terminalColumns() - 1;
      let contentWidth = widestLine2(wrapAnsi(text2, columns - BORDERS_WIDTH, { hard: true, trim: false })) + padding.left + padding.right;
      let title = options.title && options.title.slice(0, columns - 4 - margin.left - margin.right);
      if (title) {
        title = ` ${title} `;
        if (stringWidth2(title) > contentWidth) {
          contentWidth = stringWidth2(title);
        }
      }
      if (margin.left && margin.right && contentWidth + BORDERS_WIDTH + margin.left + margin.right > columns) {
        const spaceForMargins = columns - contentWidth - BORDERS_WIDTH;
        const multiplier = spaceForMargins / (margin.left + margin.right);
        margin.left = Math.max(0, Math.floor(margin.left * multiplier));
        margin.right = Math.max(0, Math.floor(margin.right * multiplier));
      }
      contentWidth = Math.min(contentWidth, columns - BORDERS_WIDTH - margin.left - margin.right);
      text2 = makeContentText(text2, padding, contentWidth, options.textAlignment);
      let marginLeft = PAD.repeat(margin.left);
      if (options.float === "center") {
        const marginWidth = Math.max((columns - contentWidth - BORDERS_WIDTH) / 2, 0);
        marginLeft = PAD.repeat(marginWidth);
      } else if (options.float === "right") {
        const marginWidth = Math.max(columns - contentWidth - margin.right - BORDERS_WIDTH, 0);
        marginLeft = PAD.repeat(marginWidth);
      }
      const horizontal = chars.horizontal.repeat(contentWidth);
      const top = colorizeBorder(NL.repeat(margin.top) + marginLeft + chars.topLeft + (title ? makeTitle(title, horizontal, options.titleAlignment) : horizontal) + chars.topRight);
      const bottom = colorizeBorder(marginLeft + chars.bottomLeft + horizontal + chars.bottomRight + NL.repeat(margin.bottom));
      const side = colorizeBorder(chars.vertical);
      const LINE_SEPARATOR = NL;
      const lines = text2.split(NL);
      const middle = lines.map((line) => {
        return marginLeft + side + colorizeContent(line) + side;
      }).join(LINE_SEPARATOR);
      return top + LINE_SEPARATOR + middle + LINE_SEPARATOR + bottom;
    };
    boxen$1.exports._borderStyles = cliBoxes2;
    return boxen$1.exports;
  }
  var boxenExports = requireBoxen();
  var boxen = /* @__PURE__ */ getDefaultExportFromCjs(boxenExports);
  function makeTitledPrettyError(title, content, stack) {
    return makePrettyError(import_chalk.default.redBright(title) + "\n\n" + content, stack);
  }
  function makePrettyError(content, stack) {
    if (import_process.default.browser || import_process.default.env.LMS_NO_FANCY_ERRORS || (0, import_lms_isomorphic.terminalSize)().columns < 80) {
      const error = new Error(content);
      if (stack === void 0) {
        changeErrorStackInPlace(error, "");
      } else {
        changeErrorStackInPlace(error, stack);
      }
      return error;
    } else {
      if (stack !== void 0) {
        content += "\n\n\n " + import_chalk.default.bgWhite.black("  </> STACK TRACE  ") + "\n\n" + import_chalk.default.gray(stack);
      }
      const error = new Error("\n" + boxen(content, { padding: 1, margin: 1, borderColor: "redBright", title: "Error" }));
      Object.defineProperty(error, "lmstudioRawError", { value: content, enumerable: false });
      changeErrorStackInPlace(error, "");
      return error;
    }
  }
  var compiledTemplatesCache = /* @__PURE__ */ new WeakMap();
  function text(strings, ...values) {
    if (values.length + 1 !== strings.length) {
      throw new Error("text called with the wrong number of arguments.");
    }
    let compiled = compiledTemplatesCache.get(strings);
    if (compiled === void 0) {
      compiled = compile(strings);
      compiledTemplatesCache.set(strings, compiled);
    }
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === "object") {
        if (typeof values[i].stack === "string") {
          compiled[i * 2 + 1] = values[i].stack;
        } else {
          try {
            compiled[i * 2 + 1] = JSON.stringify(values[i]);
          } catch (error) {
            compiled[i * 2 + 1] = "[Object failed to stringify]";
          }
        }
      } else {
        compiled[i * 2 + 1] = String(values[i]);
      }
    }
    return compiled.join("");
  }
  function removeLeadingNewlines(input) {
    return input.replace(/^\n+/, "");
  }
  function removeTrailingNewlinesAndWhitespace(input) {
    return input.replace(/[\n ]+$/, "");
  }
  function removeLeadingWhitespace(input) {
    return input.replace(/^ +/, "");
  }
  function removeTrailingWhitespace(input) {
    return input.replace(/ +$/, "");
  }
  function breakIntoLines(strings) {
    const lines = [];
    let currentLine = [];
    for (const string of strings) {
      let prevNewlineIndex = -1;
      let nextNewlineIndex;
      while ((nextNewlineIndex = string.indexOf("\n", prevNewlineIndex + 1)) !== -1) {
        currentLine.push(string.substring(prevNewlineIndex + 1, nextNewlineIndex));
        lines.push(currentLine);
        currentLine = [];
        prevNewlineIndex = nextNewlineIndex;
      }
      currentLine.push(string.substring(prevNewlineIndex + 1));
    }
    lines.push(currentLine);
    return lines;
  }
  function countStringIndentations(string) {
    let count = 0;
    for (const char of string) {
      if (char === " ") {
        count++;
      } else {
        return count;
      }
    }
    return Infinity;
  }
  function countLineIndentations(line) {
    const firstPart = line[0];
    const firstPartIndentation = countStringIndentations(firstPart);
    if (firstPartIndentation === Infinity) {
      if (line.length === 1) {
        return Infinity;
      } else {
        return firstPart.length;
      }
    }
    return firstPartIndentation;
  }
  function findMaxCommonIndentation(lines) {
    let minIndentation = Infinity;
    for (const line of lines) {
      minIndentation = Math.min(minIndentation, countLineIndentations(line));
    }
    return minIndentation;
  }
  function removeIndentation(line, indentation) {
    if (line.length < indentation) {
      return "";
    }
    return line.slice(indentation);
  }
  function removeAllIndentation(lines, indentation) {
    for (const line of lines) {
      line[0] = removeIndentation(line[0], indentation);
    }
  }
  function isEmptyLine(line) {
    if (line.length !== 1) {
      return false;
    }
    for (const char of line[0]) {
      if (char !== " ") {
        return false;
      }
    }
    return true;
  }
  function mergeLines(lines) {
    const linesAreEmpty = lines.map(isEmptyLine);
    const paragraphs = [];
    let currentParagraph = [];
    for (let i = 0; i < lines.length; i++) {
      if (linesAreEmpty[i]) {
        if (currentParagraph.length !== 0) {
          paragraphs.push(currentParagraph);
          currentParagraph = [];
        }
        continue;
      }
      if (currentParagraph.length !== 0) {
        const last = removeTrailingWhitespace(currentParagraph[currentParagraph.length - 1]);
        const next = removeLeadingWhitespace(lines[i][0]);
        currentParagraph[currentParagraph.length - 1] = last + " " + next;
        currentParagraph.push(...lines[i].slice(1));
      } else {
        currentParagraph.push(...lines[i]);
      }
    }
    if (currentParagraph.length !== 0) {
      paragraphs.push(currentParagraph);
    }
    return paragraphs;
  }
  function mergeParagraphs(paragraphs) {
    const result = [];
    if (paragraphs.length === 0) {
      return [""];
    }
    result.push(...paragraphs[0]);
    for (let i = 1; i < paragraphs.length; i++) {
      result[result.length - 1] += "\n\n" + paragraphs[i][0];
      result.push(...paragraphs[i].slice(1));
    }
    return result;
  }
  function addHolesForVariables(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
      result.push(strings[i]);
      if (i < strings.length - 1) {
        result.push("");
      }
    }
    return result;
  }
  function compile(readonlyStrings) {
    const strings = [...readonlyStrings];
    strings[0] = removeLeadingNewlines(strings[0]);
    strings[strings.length - 1] = removeTrailingNewlinesAndWhitespace(strings[strings.length - 1]);
    const lines = breakIntoLines(strings);
    const commonIndentation = findMaxCommonIndentation(lines);
    removeAllIndentation(lines, commonIndentation);
    const paragraphs = mergeLines(lines);
    return addHolesForVariables(mergeParagraphs(paragraphs));
  }
  var MaybeMutable = class {
    constructor(data, mutable) {
      this.data = data;
      this.mutable = mutable;
    }
    /**
     * Gets the underlying data without any access control. Only used internally.
     *
     * @internal
     */
    _internalGetData() {
      return this.data;
    }
    /**
     * If this instance is mutable, return as is.
     *
     * If this instance is immutable, return a mutable copy.
     *
     * Very easy to misuse, thus internal only for now.
     *
     * @internal
     */
    _internalToMutable() {
      if (this.mutable) {
        return this;
      }
      return this.asMutableCopy();
    }
    asMutableCopy() {
      return this.create(this.cloneData(this.data), true);
    }
    asImmutableCopy() {
      if (this.mutable) {
        return this.create(this.cloneData(this.data), false);
      }
      return this;
    }
    guardMutable() {
      if (!this.mutable) {
        throw new Error(text`
        Cannot modify immutable ${this.getClassName()} instance. Use asMutableCopy() to get a
        mutable copy.
      `);
      }
    }
  };
  function accessMaybeMutableInternals(maybeMutable) {
    return maybeMutable;
  }
  var OWLSignal = class _OWLSignal extends Subscribable {
    static {
      this.NOT_AVAILABLE = LazySignal.NOT_AVAILABLE;
    }
    applyOptimisticUpdates(data) {
      for (const update of this.queuedUpdates) {
        [data] = update.updater(data);
      }
      return data;
    }
    updateOptimisticValue(tags) {
      const innerValue = this.innerSignal.get();
      if (!isAvailable(innerValue)) {
        return;
      }
      this.setOuterSignal(this.applyOptimisticUpdates(innerValue), tags);
    }
    constructor(initialValue, subscribeUpstream, writeUpstream, equalsPredicate) {
      super();
      this.writeUpstream = writeUpstream;
      this.isWriteLoopRunning = false;
      this.isSubscriptionHandledByWriteLoop = false;
      this.queuedUpdates = [];
      this.currentEnsureAvailablePromise = null;
      [this.writeErrorEvent, this.emitWriteErrorEvent] = Event.create();
      [this.outerSignal, this.setOuterSignal] = Signal.create(initialValue, equalsPredicate);
      this.innerSignal = LazySignal.create(initialValue, subscribeUpstream, equalsPredicate);
      this.innerSignal.passiveSubscribeFull((_data, _patches, tags) => {
        if (this.isSubscriptionHandledByWriteLoop) {
          return;
        }
        this.updateOptimisticValue(tags);
      });
    }
    static create(initialValue, subscribeUpstream, writeUpstream, equalsPredicate = (a, b) => a === b) {
      const signal = new _OWLSignal(initialValue, subscribeUpstream, writeUpstream, equalsPredicate);
      const setSignal = makeSetterWithPatches(signal.update.bind(signal));
      const emitError = (tags, error) => signal.emitWriteErrorEvent({ tags, error });
      return [signal, setSignal, emitError];
    }
    static createWithoutInitialValue(subscribeUpstream, writeUpstream, equalsPredicate = (a, b) => a === b) {
      const fullEqualsPredicate = (a, b) => {
        if (a === _OWLSignal.NOT_AVAILABLE || b === _OWLSignal.NOT_AVAILABLE) {
          return a === b;
        }
        return equalsPredicate(a, b);
      };
      return _OWLSignal.create(_OWLSignal.NOT_AVAILABLE, subscribeUpstream, writeUpstream, fullEqualsPredicate);
    }
    async update(updater, tags) {
      const { promise, reject, resolve } = makePromise();
      this.queuedUpdates.push({
        updater,
        tags: tags ?? [],
        resolve,
        reject
      });
      this.updateOptimisticValue();
      this.ensureWriteLoop();
      return promise;
    }
    /**
     * Starts the write loop if it is not already running.
     */
    ensureWriteLoop() {
      if (!this.isWriteLoopRunning) {
        this.writeLoop();
      }
    }
    /**
     * The main write loop, it will keep running until there are no more updates to process.
     */
    async writeLoop() {
      const unsubscribe = this.innerSignal.subscribe(() => {
      });
      this.isWriteLoopRunning = true;
      if (this.isStale()) {
        await this.innerSignal.pull();
      }
      while (this.queuedUpdates.length > 0) {
        const numQueuedUpdatesToHandle = this.queuedUpdates.length;
        const updater = (data) => {
          const patches = [];
          for (let i = 0; i < numQueuedUpdatesToHandle; i++) {
            const [newData, newPatches] = this.queuedUpdates[i].updater(data);
            data = newData;
            patches.push(...newPatches);
          }
          return [data, patches];
        };
        const resolve = () => {
          for (let i = 0; i < numQueuedUpdatesToHandle; i++) {
            this.queuedUpdates[i].resolve();
          }
        };
        const reject = (error) => {
          for (let i = 0; i < numQueuedUpdatesToHandle; i++) {
            this.queuedUpdates[i].reject(error);
          }
        };
        const queuedUpdateTags = this.queuedUpdates.flatMap((update) => update.tags);
        const tag = Date.now() + "-" + Math.random();
        await new Promise((nextStep) => {
          this.isSubscriptionHandledByWriteLoop = true;
          const unsubscribeArray = [];
          const settle = () => {
            this.isSubscriptionHandledByWriteLoop = false;
            unsubscribeArray.forEach((unsubscribe2) => unsubscribe2());
            nextStep();
          };
          unsubscribeArray.push(this.innerSignal.subscribeFull((_data, _patches, tags) => {
            if (!this.isSubscriptionHandledByWriteLoop) {
              return;
            }
            if (tags?.includes(tag)) {
              settle();
              resolve();
              this.queuedUpdates.splice(0, numQueuedUpdatesToHandle);
              this.updateOptimisticValue(tags.filter((t) => t !== tag));
            } else {
              this.updateOptimisticValue(tags);
            }
          }));
          unsubscribeArray.push(this.writeErrorEvent.subscribe(({ tags, error }) => {
            if (!this.isSubscriptionHandledByWriteLoop) {
              return;
            }
            if (tags.includes(tag)) {
              settle();
              reject(error);
              this.queuedUpdates.splice(0, numQueuedUpdatesToHandle);
            }
          }));
          const sent = this.writeUpstream(...updater(this.innerSignal.get()), [tag, ...queuedUpdateTags]);
          if (!sent) {
            settle();
            resolve();
            this.queuedUpdates.splice(0, numQueuedUpdatesToHandle);
            this.updateOptimisticValue(queuedUpdateTags.filter((t) => t !== tag));
          }
        });
      }
      this.isWriteLoopRunning = false;
      unsubscribe();
    }
    /**
     * Returns whether the value is currently stale.
     *
     * A value is stale whenever the upstream subscription is not active. This can happen in three
     * cases:
     *
     * 1. When no subscriber is attached to this signal, the signal will not subscribe to the
     *    upstream. In this case, the value is always stale.
     * 2. When a subscriber is attached, but the upstream has not yet emitted a single value, the
     *    value is also stale.
     * 3. When the upstream has emitted an error. In this case, the subscription to the upstream is
     *    terminated and the value is stale.
     *
     * If you wish to get the current value and ensure that it is not stale, use the method
     * {@link OWLSignal#pull}.
     */
    isStale() {
      return this.innerSignal.isStale();
    }
    /**
     * Gets the current value of the signal. If the value is not available, it will return
     * {@link OWLSignal.NOT_AVAILABLE}. (A value will only be unavailable if the signal is created
     * without an initial value and the upstream has not emitted a value yet.)
     *
     * In addition, the value returned by this method may be stale. Use {@link OWLSignal#isStale} to
     * check if the value is stale.
     *
     * If you wish to get the current value and ensure that it is not stale, use the method
     * {@link OWLSignal#pull}.
     */
    get() {
      return this.outerSignal.get();
    }
    /**
     * Gets the current value of the signal pessimistically. If the value is not available, it will
     * return {@link OWLSignal.NOT_AVAILABLE}. (A value will only be unavailable if the signal is
     * created without an initial value and the upstream has not emitted a value yet.)
     */
    getPessimistic() {
      return this.innerSignal.get();
    }
    /**
     * Pulls the current value of the signal. If the value is stale, it will subscribe and wait for
     * the next value from the upstream and return it.
     *
     * You must also provide an `optimistic` flag. If `optimistic` is true, the pending optimistic
     * updates will be applied to the value before returning it.
     */
    async pull({ optimistic = true } = {}) {
      if (optimistic) {
        return this.applyOptimisticUpdates(await this.innerSignal.pull());
      } else {
        return this.innerSignal.pull();
      }
    }
    async ensureAvailable() {
      if (this.currentEnsureAvailablePromise === null) {
        this.currentEnsureAvailablePromise = (async () => {
          await this.innerSignal.pull();
          return this;
        })();
      }
      return this.currentEnsureAvailablePromise;
    }
    subscribe(subscriber) {
      const unsubscribeOuter = this.outerSignal.subscribe(subscriber);
      const unsubscribeInner = this.innerSignal.subscribe(() => {
      });
      return () => {
        unsubscribeOuter();
        unsubscribeInner();
      };
    }
    subscribeFull(subscriber) {
      const unsubscribeOuter = this.outerSignal.subscribeFull(subscriber);
      const unsubscribeInner = this.innerSignal.subscribeFull(() => {
      });
      return () => {
        unsubscribeOuter();
        unsubscribeInner();
      };
    }
  };
  function parseFileIdentifier(fileIdentifier) {
    if (!fileIdentifier.includes(":")) {
      fileIdentifier = `local:${fileIdentifier}`;
    }
    const colonIndex = fileIdentifier.indexOf(":");
    const namespace = fileIdentifier.slice(0, colonIndex);
    const content = fileIdentifier.slice(colonIndex + 1);
    switch (namespace) {
      case "local": {
        if (content.includes("/") || content.includes("\\") || content.length === 0) {
          throw new Error(`Invalid local file name: ${content}.`);
        }
        return {
          type: "local",
          fileName: content
        };
      }
      case "base64": {
        return {
          type: "base64",
          base64Data: content
        };
      }
      default: {
        throw new Error(`Unknown file identifier namespace: ${namespace}.`);
      }
    }
  }
  var allowableEnvVarKeys = ["HSA_OVERRIDE_GFX_VERSION"];
  var allowableEnvVarKeysSchema = z.enum(allowableEnvVarKeys);
  var allowableEnvVarsSchema = z.record(allowableEnvVarKeysSchema, z.string());
  var kebabCaseRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  var kebabCaseSchema = z.string().regex(kebabCaseRegex);
  var artifactManifestBaseSchema = z.object({
    owner: kebabCaseSchema,
    name: kebabCaseSchema.min(1, "Name is required").max(100, "Name too long"),
    description: z.string().max(1e3, "Description too long"),
    revision: z.number().int().optional()
  });
  var modelManifestSchema = z.object({
    type: z.literal("model"),
    virtual: z.literal(true),
    ...artifactManifestBaseSchema.shape
  });
  var pluginRunnerTypeSchema = z.enum(["ecmascript"]);
  var pluginManifestSchema = z.object({
    type: z.literal("plugin"),
    runner: pluginRunnerTypeSchema,
    ...artifactManifestBaseSchema.shape
  });
  var presetManifestSchema = z.object({
    type: z.literal("preset"),
    ...artifactManifestBaseSchema.shape
  });
  z.discriminatedUnion("type", [
    pluginManifestSchema,
    presetManifestSchema,
    modelManifestSchema
  ]);
  var backendNotificationSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    noAutoDismiss: z.boolean().optional()
  });
  var fileTypeSchema = z.enum([
    "image",
    "text/plain",
    "application/pdf",
    "application/word",
    "text/other",
    "unknown"
  ]);
  var jsonSerializableSchema = z.any().transform((val, ctx) => {
    try {
      return JSON.parse(JSON.stringify(val));
    } catch (e) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not JSON serializable: " + e.message
      });
      return val;
    }
  });
  var chatMessagePartTextDataSchema = z.object({
    type: z.literal("text"),
    text: z.string()
  });
  var chatMessagePartFileDataSchema = z.object({
    type: z.literal("file"),
    name: z.string(),
    identifier: z.string(),
    sizeBytes: z.number().int(),
    fileType: fileTypeSchema
  });
  var functionToolCallRequestSchema = z.object({
    id: z.string().optional(),
    type: z.literal("function"),
    arguments: z.record(jsonSerializableSchema).optional(),
    name: z.string()
  });
  var toolCallRequestSchema = z.discriminatedUnion("type", [
    functionToolCallRequestSchema
  ]);
  var chatMessagePartToolCallRequestDataSchema = z.object({
    type: z.literal("toolCallRequest"),
    toolCallRequest: toolCallRequestSchema
  });
  var chatMessagePartToolCallResultDataSchema = z.object({
    type: z.literal("toolCallResult"),
    content: z.string(),
    toolCallId: z.string().optional()
  });
  z.discriminatedUnion("type", [
    chatMessagePartTextDataSchema,
    chatMessagePartFileDataSchema,
    chatMessagePartToolCallRequestDataSchema,
    chatMessagePartToolCallResultDataSchema
  ]);
  z.enum(["assistant", "user", "system", "tool"]);
  var chatMessageDataSchema = z.discriminatedUnion("role", [
    z.object({
      role: z.literal("assistant"),
      content: z.array(z.discriminatedUnion("type", [
        chatMessagePartTextDataSchema,
        chatMessagePartFileDataSchema,
        chatMessagePartToolCallRequestDataSchema
      ]))
    }),
    z.object({
      role: z.literal("user"),
      content: z.array(z.discriminatedUnion("type", [chatMessagePartTextDataSchema, chatMessagePartFileDataSchema]))
    }),
    z.object({
      role: z.literal("system"),
      content: z.array(z.discriminatedUnion("type", [chatMessagePartTextDataSchema, chatMessagePartFileDataSchema]))
    }),
    z.object({
      role: z.literal("tool"),
      content: z.array(chatMessagePartToolCallResultDataSchema)
    })
  ]);
  var chatHistoryDataSchema = z.object({
    messages: z.array(chatMessageDataSchema)
  });
  var citationSourceSchema = z.object({
    fileName: z.string(),
    absoluteFilePath: z.string().optional(),
    pageNumber: z.union([z.number().int(), z.tuple([z.number().int(), z.number().int()])]).optional(),
    lineNumber: z.union([z.number().int(), z.tuple([z.number().int(), z.number().int()])]).optional()
  });
  var colorPalette = z.enum([
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "default"
  ]);
  var colorPaletteSchema = colorPalette;
  var diagnosticsLogEventDataSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("llm.prediction.input"),
      modelPath: z.string(),
      modelIdentifier: z.string(),
      input: z.string()
    })
  ]);
  var diagnosticsLogEventSchema = z.object({
    timestamp: z.number(),
    data: diagnosticsLogEventDataSchema
  });
  var llmLlamaAccelerationOffloadRatioSchema = z.union([
    z.number().min(0).max(1),
    z.literal("max"),
    z.literal("off")
  ]);
  var llmSplitStrategySchema = z.enum(["evenly", "favorMainGpu"]);
  var gpuSettingSchema = z.object({
    ratio: llmLlamaAccelerationOffloadRatioSchema.optional(),
    mainGpu: z.number().int().optional(),
    splitStrategy: llmSplitStrategySchema.optional(),
    disabledGpus: z.array(z.number().int()).optional()
  });
  var llmLlamaCacheQuantizationTypes = [
    "f32",
    "f16",
    "q8_0",
    "q4_0",
    "q4_1",
    "iq4_nl",
    "q5_0",
    "q5_1"
  ];
  var llmLlamaCacheQuantizationTypeSchema = z.enum(llmLlamaCacheQuantizationTypes);
  var llmMlxKvCacheBitsTypeSchema = z.union([
    z.literal(8),
    z.literal(6),
    z.literal(4),
    z.literal(3),
    z.literal(2)
  ]);
  var llmMlxKvCacheGroupSizeTypesSchema = z.union([
    z.literal(32),
    z.literal(64),
    z.literal(128)
  ]);
  var llmMlxKvCacheQuantizationSchema = z.object({
    enabled: z.boolean(),
    bits: llmMlxKvCacheBitsTypeSchema,
    groupSize: llmMlxKvCacheGroupSizeTypesSchema,
    quantizedStart: z.number().int().nonnegative()
  });
  var llmLoadModelConfigSchema = z.object({
    gpu: gpuSettingSchema.optional(),
    gpuStrictVramCap: z.boolean().optional(),
    contextLength: z.number().int().min(1).optional(),
    ropeFrequencyBase: z.number().optional(),
    ropeFrequencyScale: z.number().optional(),
    evalBatchSize: z.number().int().min(1).optional(),
    flashAttention: z.boolean().optional(),
    keepModelInMemory: z.boolean().optional(),
    seed: z.number().int().optional(),
    useFp16ForKVCache: z.boolean().optional(),
    tryMmap: z.boolean().optional(),
    numExperts: z.number().int().optional(),
    llamaKCacheQuantizationType: z.enum(llmLlamaCacheQuantizationTypes).or(z.literal(false)).optional(),
    llamaVCacheQuantizationType: z.enum(llmLlamaCacheQuantizationTypes).or(z.literal(false)).optional()
  });
  var embeddingLoadModelConfigSchema = z.object({
    gpu: gpuSettingSchema.optional(),
    contextLength: z.number().int().min(1).optional(),
    ropeFrequencyBase: z.number().optional(),
    ropeFrequencyScale: z.number().optional(),
    keepModelInMemory: z.boolean().optional(),
    tryMmap: z.boolean().optional()
  });
  var modelCompatibilityTypeSchema = z.enum([
    "gguf",
    "safetensors",
    "onnx",
    "ggml",
    "mlx_placeholder",
    "torch_safetensors"
  ]);
  var modelInfoBaseSchema = z.object({
    modelKey: z.string(),
    format: modelCompatibilityTypeSchema,
    displayName: z.string(),
    path: z.string(),
    sizeBytes: z.number().int(),
    paramsString: z.string().optional(),
    architecture: z.string().optional()
  });
  var modelInstanceInfoBaseSchema = modelInfoBaseSchema.extend({
    identifier: z.string(),
    instanceReference: z.string()
  });
  var embeddingModelAdditionalInfoSchema = z.object({
    maxContextLength: z.number().int()
  });
  var embeddingModelInstanceAdditionalInfoSchema = z.object({
    contextLength: z.number().int()
  });
  var embeddingModelInfoSchema = z.object({
    type: z.literal("embedding")
  }).extend(modelInfoBaseSchema.shape).extend(embeddingModelAdditionalInfoSchema.shape);
  var embeddingModelInstanceInfoSchema = z.object({ type: z.literal("embedding") }).extend(modelInstanceInfoBaseSchema.shape).extend(embeddingModelAdditionalInfoSchema.shape).extend(embeddingModelInstanceAdditionalInfoSchema.shape);
  var modelDomainTypeSchema = z.enum([
    "llm",
    "embedding",
    "imageGen",
    "transcription",
    "tts"
  ]);
  var reasonableKeyStringSchema = z.string().min(1).max(1024).refine((value) => value !== "__proto__", {
    message: 'For security reasons, "__proto__" is not allowed'
  }).refine((value) => /\p{C}/u.test(value) === false, {
    message: "Control characters are not allowed"
  });
  var modelQuerySchema = z.object({
    domain: modelDomainTypeSchema.optional(),
    identifier: reasonableKeyStringSchema.optional(),
    path: reasonableKeyStringSchema.optional(),
    vision: z.boolean().optional()
  });
  var modelSpecifierSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("query"),
      query: modelQuerySchema
    }),
    z.object({
      type: z.literal("instanceReference"),
      instanceReference: z.string()
    })
  ]);
  var genericErrorDisplayDataSchema = [
    z.object({
      code: z.literal("generic.specificModelUnloaded")
    }),
    z.object({
      code: z.literal("generic.noModelMatchingQuery"),
      query: modelQuerySchema,
      loadedModelsSample: z.array(z.string()),
      totalLoadedModels: z.number().int()
    }),
    z.object({
      code: z.literal("generic.pathNotFound"),
      path: z.string(),
      availablePathsSample: z.array(z.string()),
      totalModels: z.number().int()
    }),
    z.object({
      code: z.literal("generic.identifierNotFound"),
      identifier: z.string(),
      loadedModelsSample: z.array(z.string()),
      totalLoadedModels: z.number().int()
    }),
    z.object({
      code: z.literal("generic.domainMismatch"),
      path: z.string(),
      actualDomain: modelDomainTypeSchema,
      expectedDomain: modelDomainTypeSchema
    }),
    z.object({
      code: z.literal("generic.engineDoesNotSupportFeature"),
      feature: z.string(),
      engineName: z.string(),
      engineType: z.string(),
      installedVersion: z.string(),
      supportedVersion: z.string().nullable()
    }),
    z.object({
      code: z.literal("generic.presetNotFound"),
      specifiedFuzzyPresetIdentifier: z.string(),
      availablePresetsSample: z.array(z.object({
        identifier: z.string(),
        name: z.string()
      })),
      totalAvailablePresets: z.number().int()
    })
  ];
  var llmErrorDisplayDataSchema = [];
  var errorDisplayDataSchema = z.discriminatedUnion("code", [
    ...llmErrorDisplayDataSchema,
    ...genericErrorDisplayDataSchema
  ]);
  function failOk(schema) {
    return z.any().transform((val) => schema.safeParse(val).success ? val : void 0);
  }
  var serializedLMSExtendedErrorSchema = z.object({
    title: failOk(z.string()).default("Unknown error"),
    cause: failOk(z.string()).optional(),
    suggestion: failOk(z.string()).optional(),
    errorData: failOk(z.record(z.string(), z.unknown())).optional(),
    displayData: failOk(errorDisplayDataSchema).optional(),
    stack: failOk(z.string()).optional(),
    rootTitle: failOk(z.string()).optional()
  });
  function serializeError(error) {
    if (typeof error === "object") {
      const title = error.title ?? error.lmstudioRawError ?? error.message ?? "Unknown error";
      return serializedLMSExtendedErrorSchema.parse({
        title,
        cause: error.cause,
        suggestion: error.suggestion,
        errorData: error.errorData,
        displayData: error.displayData,
        stack: error.stack,
        rootTitle: title
      });
    } else {
      const title = String(error);
      return {
        title,
        rootTitle: title
      };
    }
  }
  function attachSerializedErrorData(error, serialized) {
    const untypedError = error;
    untypedError.title = serialized.title;
    if (serialized.cause !== void 0) {
      untypedError.cause = serialized.cause;
    }
    if (serialized.suggestion !== void 0) {
      untypedError.suggestion = serialized.suggestion;
    }
    if (serialized.errorData !== void 0) {
      untypedError.errorData = serialized.errorData;
    }
  }
  function fromSerializedError(error, message = "Rehydrated error", replacementStack) {
    const result = new Error(error.rootTitle);
    attachSerializedErrorData(result, error);
    if (error.displayData !== void 0) {
      result.displayData = error.displayData;
    }
    if (replacementStack !== void 0) {
      if (error.stack !== void 0) {
        result.stack = `Error: ${message}
${replacementStack}
- Caused By: ${error.stack}`;
      } else {
        result.stack = `Error: ${message}
${replacementStack}`;
      }
    } else {
      if (error.stack !== void 0) {
        result.stack = `Error: ${message}
${result.stack.substring(error.stack.indexOf("\n") + 1)}
- Caused By: ` + error.stack;
      } else {
        result.message += ` - caused by error without stack (${error.title})`;
      }
    }
    return result;
  }
  z.enum(["local", "base64"]);
  z.discriminatedUnion("type", [
    z.object({
      type: z.literal("local"),
      fileName: z.string()
    }),
    z.object({
      type: z.literal("base64"),
      base64Data: z.string()
    })
  ]);
  var gpuSplitStrategies = ["evenly", "priorityOrder", "custom"];
  var gpuSplitStrategySchema = z.enum(gpuSplitStrategies);
  var defaultGPUSplitConfig = {
    strategy: "evenly",
    disabledGpus: [],
    priority: [],
    customRatio: []
  };
  var gpuSplitConfigSchema = z.object({
    strategy: gpuSplitStrategySchema,
    disabledGpus: z.array(z.number().int().min(0)),
    priority: z.array(z.number().int().min(0)),
    customRatio: z.array(z.number().min(0))
  });
  function convertGPUSettingToGPUSplitConfig(gpuSetting) {
    return {
      strategy: gpuSetting?.splitStrategy == "favorMainGpu" ? "priorityOrder" : gpuSetting?.splitStrategy ?? "evenly",
      disabledGpus: gpuSetting?.disabledGpus ?? [],
      priority: gpuSetting?.mainGpu ? [gpuSetting.mainGpu] : [],
      customRatio: []
    };
  }
  var kvConfigFieldSchema = z.object({
    key: z.string(),
    value: z.any()
  });
  var kvConfigSchema = z.object({
    fields: z.array(kvConfigFieldSchema)
  });
  var kvConfigLayerNameSchema = z.enum([
    "currentlyEditing",
    "currentlyLoaded",
    "apiOverride",
    "conversationSpecific",
    "conversationGlobal",
    "preset",
    "serverSession",
    "httpServerRequestOverride",
    "completeModeFormatting",
    "instance",
    "userModelDefault",
    "virtualModel",
    "modelDefault",
    "hardware"
  ]);
  var kvConfigStackLayerSchema = z.object({
    layerName: kvConfigLayerNameSchema,
    config: kvConfigSchema
  });
  var kvConfigStackSchema = z.object({
    layers: z.array(kvConfigStackLayerSchema)
  });
  var kvConfigFieldDependencySchema = z.object({
    key: z.string(),
    condition: z.discriminatedUnion("type", [
      z.object({ type: z.literal("equals"), value: z.any() }),
      z.object({ type: z.literal("notEquals"), value: z.any() })
    ])
  });
  var contentBlockStyleSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("default")
    }),
    z.object({
      type: z.literal("customLabel"),
      label: z.string(),
      color: z.optional(colorPaletteSchema)
    }),
    z.object({
      type: z.literal("thinking"),
      ended: z.boolean().optional(),
      title: z.string().optional()
    })
  ]);
  var llmApplyPromptTemplateOptsSchema = z.object({
    omitBosToken: z.boolean().optional(),
    omitEosToken: z.boolean().optional()
  });
  var llmContextReferenceSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("jsonFile"),
      absPath: z.string()
    }),
    z.object({
      type: z.literal("yamlFile"),
      absPath: z.string()
    })
  ]);
  z.array(z.object({
    role: z.enum(["user", "assistant", "system"]),
    content: z.string()
  }));
  z.array(z.union([
    z.object({
      system: z.string()
    }),
    z.object({
      user: z.string()
    }),
    z.object({
      assistant: z.string()
    })
  ]));
  var llmAdditionalInfoSchema = z.object({
    vision: z.boolean(),
    trainedForToolUse: z.boolean(),
    maxContextLength: z.number().int()
  });
  var llmInstanceAdditionalInfoSchema = z.object({
    contextLength: z.number().int()
  });
  var llmInfoSchema = z.object({
    type: z.literal("llm")
  }).extend(modelInfoBaseSchema.shape).extend(llmAdditionalInfoSchema.shape);
  var llmInstanceInfoSchema = z.object({
    type: z.literal("llm")
  }).extend(modelInstanceInfoBaseSchema.shape).extend(llmAdditionalInfoSchema.shape).extend(llmInstanceAdditionalInfoSchema.shape);
  var zodSchemaSchema = z.custom((value) => {
    if (typeof value?.parse !== "function") {
      return false;
    }
    return true;
  }, "Expected a zod schema");
  var llmManualPromptTemplateSchema = z.object({
    beforeSystem: z.string(),
    afterSystem: z.string(),
    beforeUser: z.string(),
    afterUser: z.string(),
    beforeAssistant: z.string(),
    afterAssistant: z.string()
  });
  var llmJinjaInputMessagesContentImagesConfigSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("simple"),
      value: z.string()
    }),
    z.object({
      type: z.literal("numbered"),
      prefix: z.string(),
      suffix: z.string()
    }),
    z.object({
      type: z.literal("object")
    })
  ]);
  var llmJinjaInputMessagesContentConfigTextFieldNameSchema = z.enum(["content", "text"]);
  var llmJinjaInputMessagesContentConfigSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("string"),
      imagesConfig: llmJinjaInputMessagesContentImagesConfigSchema.optional()
    }),
    z.object({
      type: z.literal("array"),
      textFieldName: llmJinjaInputMessagesContentConfigTextFieldNameSchema,
      imagesConfig: llmJinjaInputMessagesContentImagesConfigSchema.optional()
    })
  ]);
  var llmJinjaInputMessagesConfigSchema = z.object({
    contentConfig: llmJinjaInputMessagesContentConfigSchema
  });
  var llmJinjaInputConfigSchema = z.object({
    messagesConfig: llmJinjaInputMessagesConfigSchema,
    useTools: z.boolean()
  });
  var llmJinjaPromptTemplateSchema = z.object({
    template: z.string(),
    bosToken: z.string(),
    eosToken: z.string(),
    inputConfig: llmJinjaInputConfigSchema
  });
  var llmPromptTemplateTypeSchema = z.enum(["manual", "jinja"]);
  var llmPromptTemplateSchema = z.object({
    type: llmPromptTemplateTypeSchema,
    manualPromptTemplate: llmManualPromptTemplateSchema.optional(),
    jinjaPromptTemplate: llmJinjaPromptTemplateSchema.optional(),
    stopStrings: z.array(z.string())
  });
  var llmStructuredPredictionTypeSchema = z.enum(["none", "json", "gbnf"]);
  var llmStructuredPredictionSettingSchema = z.object({
    type: llmStructuredPredictionTypeSchema,
    jsonSchema: jsonSerializableSchema.optional(),
    gbnfGrammar: z.string().optional()
  });
  var llmToolParametersSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("object"),
      properties: z.record(jsonSerializableSchema),
      required: z.array(z.string()).optional(),
      additionalProperties: z.boolean().optional()
    })
    // add more parameter types here
    // ...
  ]);
  var llmToolSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("function"),
      function: z.object({
        name: z.string(),
        description: z.string().optional(),
        parameters: llmToolParametersSchema.optional()
      })
    })
    // add more tool types here
    // ...
  ]);
  z.array(llmToolSchema);
  var llmToolUseSettingSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("none")
    }),
    z.object({
      type: z.literal("toolArray"),
      tools: z.array(llmToolSchema).optional()
    })
  ]);
  var llmContextOverflowPolicySchema = z.enum([
    "stopAtLimit",
    "truncateMiddle",
    "rollingWindow"
  ]);
  var llmReasoningParsingSchema = z.object({
    enabled: z.boolean(),
    startString: z.string(),
    endString: z.string()
  });
  var llmPredictionConfigInputSchema = z.object({
    maxTokens: z.number().int().min(-1).optional().or(z.literal(false)),
    temperature: z.number().min(0).optional(),
    stopStrings: z.array(z.string()).optional(),
    toolCallStopStrings: z.array(z.string()).optional(),
    contextOverflowPolicy: llmContextOverflowPolicySchema.optional(),
    structured: z.union([zodSchemaSchema, llmStructuredPredictionSettingSchema]).optional(),
    rawTools: llmToolUseSettingSchema.optional(),
    topKSampling: z.number().optional(),
    repeatPenalty: z.number().optional().or(z.literal(false)),
    minPSampling: z.number().optional().or(z.literal(false)),
    topPSampling: z.number().optional().or(z.literal(false)),
    cpuThreads: z.number().int().optional(),
    promptTemplate: llmPromptTemplateSchema.optional(),
    draftModel: z.string().optional(),
    speculativeDecodingNumDraftTokensExact: z.number().int().min(1).optional(),
    speculativeDecodingMinDraftLengthToConsider: z.number().int().min(0).optional(),
    speculativeDecodingMinContinueDraftingProbability: z.number().optional(),
    reasoningParsing: llmReasoningParsingSchema.optional()
  });
  z.object({
    ...llmPredictionConfigInputSchema.shape,
    structured: llmStructuredPredictionSettingSchema.optional()
  });
  var llmLlamaMirostatSamplingConfigSchema = z.object({
    version: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    learningRate: z.number(),
    targetEntropy: z.number()
  });
  var llmLlamaSingleLogitBiasModificationSchema = z.union([z.number(), z.literal("-inf")]);
  var llmLlamaLogitBiasConfigSchema = z.array(z.tuple([z.number(), llmLlamaSingleLogitBiasModificationSchema]));
  var llmPredictionFragmentReasoningTypeSchema = z.enum([
    "none",
    "reasoning",
    "reasoningStartTag",
    "reasoningEndTag"
  ]);
  var llmPredictionFragmentSchema = z.object({
    content: z.string(),
    tokensCount: z.number().int(),
    containsDrafted: z.boolean(),
    reasoningType: llmPredictionFragmentReasoningTypeSchema
  });
  var llmPredictionStopReasonSchema = z.enum([
    "userStopped",
    "modelUnloaded",
    "failed",
    "eosFound",
    "stopStringFound",
    "toolCalls",
    "maxPredictedTokensReached",
    "contextLengthReached"
  ]);
  var llmPredictionStatsSchema = z.object({
    stopReason: llmPredictionStopReasonSchema,
    tokensPerSecond: z.number().optional(),
    numGpuLayers: z.number().optional(),
    timeToFirstTokenSec: z.number().optional(),
    promptTokensCount: z.number().int().optional(),
    predictedTokensCount: z.number().int().optional(),
    totalTokensCount: z.number().int().optional(),
    usedDraftModelKey: z.string().optional(),
    totalDraftTokensCount: z.number().int().optional(),
    acceptedDraftTokensCount: z.number().int().optional(),
    rejectedDraftTokensCount: z.number().int().optional(),
    ignoredDraftTokensCount: z.number().int().optional()
  });
  var llmGenInfoSchema = z.object({
    indexedModelIdentifier: z.string(),
    identifier: z.string(),
    loadModelConfig: kvConfigSchema,
    predictionConfig: kvConfigSchema,
    stats: llmPredictionStatsSchema
  });
  var blockLocationSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("beforeId"),
      id: z.string()
    }),
    z.object({
      type: z.literal("afterId"),
      id: z.string()
    })
  ]);
  var statusStepStatusSchema = z.enum([
    "waiting",
    "loading",
    "done",
    "error",
    "canceled"
  ]);
  var statusStepStateSchema = z.object({
    status: statusStepStatusSchema,
    text: z.string()
  });
  var processingUpdateStatusCreateSchema = z.object({
    type: z.literal("status.create"),
    id: z.string(),
    state: statusStepStateSchema,
    location: blockLocationSchema.optional(),
    indentation: z.number().int().optional()
  });
  var processingUpdateStatusUpdateSchema = z.object({
    type: z.literal("status.update"),
    id: z.string(),
    state: statusStepStateSchema
  });
  var processingUpdateStatusRemoveSchema = z.object({
    type: z.literal("status.remove"),
    id: z.string()
  });
  var processingUpdateCitationBlockCreateSchema = z.object({
    type: z.literal("citationBlock.create"),
    id: z.string(),
    citedText: z.string(),
    fileName: z.string(),
    fileIdentifier: z.string(),
    pageNumber: z.union([z.number().int(), z.tuple([z.number().int(), z.number().int()])]).optional(),
    lineNumber: z.union([z.number().int(), z.tuple([z.number().int(), z.number().int()])]).optional()
  });
  var processingUpdateDebugInfoBlockCreateSchema = z.object({
    type: z.literal("debugInfoBlock.create"),
    id: z.string(),
    debugInfo: z.string()
  });
  var processingUpdateContentBlockCreateSchema = z.object({
    type: z.literal("contentBlock.create"),
    id: z.string(),
    includeInContext: z.boolean(),
    style: contentBlockStyleSchema.optional(),
    prefix: z.string().optional(),
    suffix: z.string().optional()
  });
  var processingUpdateContentBlockAppendTextSchema = z.object({
    type: z.literal("contentBlock.appendText"),
    id: z.string(),
    text: z.string(),
    tokensCount: z.number().int().optional(),
    fromDraftModel: z.boolean().optional()
  });
  var processingUpdateContentBlockReplaceTextSchema = z.object({
    type: z.literal("contentBlock.replaceText"),
    id: z.string(),
    text: z.string()
  });
  var processingUpdateContentBlockSetPrefixSchema = z.object({
    type: z.literal("contentBlock.setPrefix"),
    id: z.string(),
    prefix: z.string()
  });
  var processingUpdateContentBlockSetSuffixSchema = z.object({
    type: z.literal("contentBlock.setSuffix"),
    id: z.string(),
    suffix: z.string()
  });
  var processingUpdateContentBlockAttachGenInfoSchema = z.object({
    type: z.literal("contentBlock.attachGenInfo"),
    id: z.string(),
    genInfo: llmGenInfoSchema
  });
  var processingUpdateContentBlockSetStyleSchema = z.object({
    type: z.literal("contentBlock.setStyle"),
    id: z.string(),
    style: contentBlockStyleSchema
  });
  var processingUpdateSetSenderNameSchema = z.object({
    type: z.literal("setSenderName"),
    name: z.string()
  });
  var processingUpdateSchema = z.discriminatedUnion("type", [
    processingUpdateStatusCreateSchema,
    processingUpdateStatusUpdateSchema,
    processingUpdateStatusRemoveSchema,
    processingUpdateCitationBlockCreateSchema,
    processingUpdateDebugInfoBlockCreateSchema,
    processingUpdateContentBlockCreateSchema,
    processingUpdateContentBlockAppendTextSchema,
    processingUpdateContentBlockReplaceTextSchema,
    processingUpdateContentBlockSetPrefixSchema,
    processingUpdateContentBlockSetSuffixSchema,
    processingUpdateContentBlockAttachGenInfoSchema,
    processingUpdateContentBlockSetStyleSchema,
    processingUpdateSetSenderNameSchema
  ]);
  z.discriminatedUnion("type", [
    processingUpdateStatusCreateSchema,
    processingUpdateStatusUpdateSchema,
    processingUpdateStatusRemoveSchema,
    processingUpdateCitationBlockCreateSchema,
    processingUpdateDebugInfoBlockCreateSchema,
    processingUpdateContentBlockCreateSchema,
    processingUpdateContentBlockAppendTextSchema,
    processingUpdateContentBlockReplaceTextSchema,
    processingUpdateContentBlockAttachGenInfoSchema,
    processingUpdateContentBlockSetStyleSchema,
    processingUpdateSetSenderNameSchema
  ]);
  z.discriminatedUnion("type", [
    processingUpdateStatusCreateSchema,
    processingUpdateStatusUpdateSchema,
    processingUpdateStatusRemoveSchema,
    processingUpdateCitationBlockCreateSchema,
    processingUpdateDebugInfoBlockCreateSchema
  ]);
  z.object({
    modelTag: z.string().optional(),
    ignoreUserConfig: z.boolean().optional()
  });
  var modelInfoSchema = z.discriminatedUnion("type", [
    llmInfoSchema,
    embeddingModelInfoSchema
  ]);
  var modelInstanceInfoSchema = z.discriminatedUnion("type", [
    llmInstanceInfoSchema,
    embeddingModelInstanceInfoSchema
  ]);
  var downloadProgressUpdateSchema = z.object({
    downloadedBytes: z.number().int(),
    totalBytes: z.number().int(),
    speedBytesPerSecond: z.number()
  });
  var modelSearchResultDownloadOptionFitEstimationSchema = z.enum([
    "fullGPUOffload",
    "partialGPUOffload",
    "fitWithoutGPU",
    "willNotFit"
  ]);
  var modelSearchResultDownloadOptionDataSchema = z.object({
    quantization: z.string().optional(),
    name: z.string(),
    sizeBytes: z.number().int(),
    fitEstimation: modelSearchResultDownloadOptionFitEstimationSchema,
    recommended: z.boolean().optional(),
    downloadIdentifier: z.string(),
    indexedModelIdentifier: z.string()
  });
  var modelSearchResultIdentifierSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("catalog"),
      identifier: z.string()
    }),
    z.object({
      type: z.literal("hf"),
      identifier: z.string()
    })
  ]);
  var modelSearchResultEntryDataSchema = z.object({
    name: z.string(),
    identifier: modelSearchResultIdentifierSchema,
    exact: z.boolean().optional(),
    staffPick: z.boolean().optional()
  });
  var modelSearchOptsSchema = z.object({
    searchTerm: z.string().optional(),
    limit: z.number().int().positive().max(25).optional(),
    compatibilityTypes: z.array(modelCompatibilityTypeSchema).optional()
  });
  var internalRetrievalResultEntrySchema = z.object({
    content: z.string(),
    score: z.number(),
    sourceIndex: z.number().int(),
    pageNumber: z.union([z.number().int(), z.tuple([z.number().int(), z.number().int()])]).optional(),
    lineNumber: z.union([z.number().int(), z.tuple([z.number().int(), z.number().int()])]).optional()
  });
  var internalRetrievalResultSchema = z.object({
    entries: z.array(internalRetrievalResultEntrySchema)
  });
  z.object({
    content: z.string(),
    score: z.number(),
    citation: citationSourceSchema
  });
  var retrievalChunkingMethodSchema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("recursive-v1"),
      chunkSize: z.number().int(),
      chunkOverlap: z.number().int()
    })
  ]);
  var retrievalFileProcessingStepSchema = z.enum(["loading", "chunking", "embedding"]);
  var acceleratorTypeSchema = z.enum(["unknown", "integratedGpu", "dedicatedGpu"]);
  var acceleratorSchema = z.object({
    name: z.string(),
    deviceId: z.number().int(),
    totalMemoryBytes: z.number().int(),
    type: acceleratorTypeSchema
  });
  z.object({
    key: z.string(),
    name: z.string(),
    accelerators: z.array(acceleratorSchema)
  });
  var serializedKVConfigSchematicsFieldSchema = z.object({
    shortKey: z.string(),
    fullKey: z.string(),
    typeKey: z.string(),
    typeParams: jsonSerializableSchema,
    defaultValue: jsonSerializableSchema
  });
  var serializedKVConfigSchematicsSchema = z.object({
    fields: z.array(serializedKVConfigSchematicsFieldSchema)
  });
  z.object({
    fullKey: z.string(),
    error: jsonSerializableSchema
  });
  z.object({
    model: z.string().regex(/^[^/]+\/[^/]+$/),
    base: z.string(),
    config: z.object({
      load: kvConfigSchema.optional(),
      operation: kvConfigSchema.optional()
    }).optional()
  });
  var logLevelSchema = z.enum(["debug", "info", "warn", "error"]);
  function safeCallCallback(logger2, name, callback, args) {
    if (callback === void 0) {
      return;
    }
    try {
      const maybePromise = callback(...args);
      if (typeof maybePromise === "object" && typeof maybePromise.catch === "function") {
        maybePromise.catch((error) => {
          logger2.error(`Error in the ${name} callback (triggered asynchronously):`, error);
        });
      }
    } catch (error) {
      logger2.error(`Error in the ${name} callback:`, error);
    }
  }
  function isSimpleLogger(logger2) {
    return logger2?.isSimpleLogger === true;
  }
  var defaultInfoPrefix = import_chalk.default.greenBright("I");
  var defaultWarnPrefix = import_chalk.default.yellowBright("W");
  var defaultErrorPrefix = import_chalk.default.redBright("E");
  var defaultDebugPrefix = import_chalk.default.blueBright("D");
  var SimpleLogger = class _SimpleLogger {
    constructor(prefixText = "", parentLogger = console, { useLogLevelPrefixes, infoPrefix, warnPrefix, errorPrefix, debugPrefix } = {}) {
      this.isSimpleLogger = true;
      this.infoPrefix = [];
      this.warnPrefix = [];
      this.errorPrefix = [];
      this.debugPrefix = [];
      if (isSimpleLogger(parentLogger)) {
        useLogLevelPrefixes = useLogLevelPrefixes ?? parentLogger.opts.useLogLevelPrefixes;
        infoPrefix = infoPrefix === void 0 ? parentLogger.opts.infoPrefix : infoPrefix;
        warnPrefix = warnPrefix === void 0 ? parentLogger.opts.warnPrefix : warnPrefix;
        errorPrefix = errorPrefix === void 0 ? parentLogger.opts.errorPrefix : errorPrefix;
        debugPrefix = debugPrefix === void 0 ? parentLogger.opts.debugPrefix : debugPrefix;
        if (prefixText === "") {
          this.innerPrefix = parentLogger.innerPrefix;
          this.fullPrefix = parentLogger.fullPrefix;
        } else {
          if (parentLogger.fullPrefix === "") {
            this.innerPrefix = prefixText;
          } else {
            this.innerPrefix = `${parentLogger.innerPrefix}][${prefixText}`;
          }
          this.fullPrefix = import_chalk.default.whiteBright(`[${this.innerPrefix}]`);
        }
        this.parentLogger = parentLogger.parentLogger;
      } else {
        useLogLevelPrefixes = useLogLevelPrefixes ?? false;
        infoPrefix = infoPrefix === void 0 ? defaultInfoPrefix : infoPrefix;
        warnPrefix = warnPrefix === void 0 ? defaultWarnPrefix : warnPrefix;
        errorPrefix = errorPrefix === void 0 ? defaultErrorPrefix : errorPrefix;
        debugPrefix = debugPrefix === void 0 ? defaultDebugPrefix : debugPrefix;
        if (prefixText === "") {
          this.innerPrefix = "";
          this.fullPrefix = "";
        } else {
          this.innerPrefix = prefixText;
          this.fullPrefix = import_chalk.default.whiteBright(`[${this.innerPrefix}]`);
        }
        this.parentLogger = parentLogger;
      }
      if (useLogLevelPrefixes) {
        if (infoPrefix !== null) {
          this.infoPrefix.push(infoPrefix);
        }
        if (warnPrefix !== null) {
          this.warnPrefix.push(warnPrefix);
        }
        if (errorPrefix !== null) {
          this.errorPrefix.push(errorPrefix);
        }
        if (debugPrefix !== null) {
          this.debugPrefix.push(debugPrefix);
        }
      }
      if (this.fullPrefix !== "") {
        this.infoPrefix.push(this.fullPrefix);
        this.warnPrefix.push(this.fullPrefix);
        this.errorPrefix.push(this.fullPrefix);
        this.debugPrefix.push(this.fullPrefix);
      }
      this.opts = {
        useLogLevelPrefixes,
        infoPrefix,
        warnPrefix,
        errorPrefix,
        debugPrefix
      };
    }
    subclass(prefixText) {
      return new _SimpleLogger(`${this.innerPrefix}:${prefixText}`, this.parentLogger);
    }
    info(...messages) {
      this.parentLogger.info(...this.infoPrefix, ...messages);
    }
    infoText(strings, ...values) {
      this.info(text(strings, ...values));
    }
    infoWithoutPrefix(...messages) {
      this.parentLogger.info(...messages);
    }
    error(...messages) {
      this.parentLogger.error(...this.errorPrefix, ...messages);
    }
    errorText(strings, ...values) {
      this.error(text(strings, ...values));
    }
    errorWithoutPrefix(...messages) {
      this.parentLogger.error(...messages);
    }
    warn(...messages) {
      this.parentLogger.warn(...this.warnPrefix, ...messages);
    }
    warnText(strings, ...values) {
      this.warn(text(strings, ...values));
    }
    warnWithoutPrefix(...messages) {
      this.parentLogger.warn(...messages);
    }
    debug(...messages) {
      this.parentLogger.debug(...this.debugPrefix, ...messages);
    }
    debugText(strings, ...values) {
      this.debug(text(strings, ...values));
    }
    debugWithoutPrefix(...messages) {
      this.parentLogger.debug(...messages);
    }
    throw(message) {
      throw new Error(`${this.fullPrefix} ${message}`);
    }
    logAtLevel(level, ...messages) {
      switch (level) {
        case "debug":
          this.debug(...messages);
          break;
        case "info":
          this.info(...messages);
          break;
        case "warn":
          this.warn(...messages);
          break;
        case "error":
          this.error(...messages);
          break;
      }
    }
    static fromMultiple(loggers, opts) {
      return new _SimpleLogger("", {
        debug: (...messages) => {
          for (const logger2 of loggers) {
            logger2.debug(...messages);
          }
        },
        info: (...messages) => {
          for (const logger2 of loggers) {
            logger2.info(...messages);
          }
        },
        warn: (...messages) => {
          for (const logger2 of loggers) {
            logger2.warn(...messages);
          }
        },
        error: (...messages) => {
          for (const logger2 of loggers) {
            logger2.error(...messages);
          }
        }
      }, {
        ...opts,
        useLogLevelPrefixes: false
      });
    }
  };
  var _a;
  var finished = Symbol("finished");
  var StreamablePromise = class {
    /**
     * Called by the producer when it has finished producing values. If an error is provided, the
     * promise will be rejected with that error. If no error is provided, the promise will be resolved
     * with the final value.
     *
     * This method should be exposed in the static constructor of the subclass.
     *
     * @param error - The error to reject the promise with, if any.
     */
    finished(error) {
      if (this.status !== "pending") {
        throw new Error("`finished` called while not pending");
      }
      if (error === void 0) {
        this.status = "resolved";
        this.nextFragmentPromiseBundle?.resolve(finished);
        this.resolveFinal(this.collect(this.buffer));
      } else {
        this.status = "rejected";
        this.nextFragmentPromiseBundle?.reject(error);
        this.rejectFinal(error);
      }
    }
    /**
     * Called by the producer to push a new fragment into the buffer. This method should be exposed in
     * the static constructor of the subclass.
     *
     * This method should be exposed in the static constructor of the subclass.
     *
     * @param fragment - The fragment to push into the buffer.
     */
    push(fragment) {
      if (this.status !== "pending") {
        throw new Error("`push` called while not pending");
      }
      this.buffer.push(fragment);
      this.nextFragmentPromiseBundle?.resolve(fragment);
      this.nextFragmentPromiseBundle = null;
    }
    constructor() {
      this.status = "pending";
      this.buffer = [];
      this.nextFragmentPromiseBundle = null;
      this.hasIterator = false;
      this[_a] = "StreamablePromise";
      const { promise, resolve, reject } = makePromise();
      this.promiseFinal = promise;
      this.resolveFinal = resolve;
      this.rejectFinal = reject;
    }
    then(onfulfilled, onrejected) {
      return this.promiseFinal.then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return this.promiseFinal.catch(onrejected);
    }
    finally(onfinally) {
      return this.promiseFinal.finally(onfinally);
    }
    /**
     * If nextFragmentPromiseBundle exists, it is returned. Otherwise, a new one is created and
     * returned.
     */
    obtainNextFragmentPromiseBundle() {
      if (this.nextFragmentPromiseBundle === null) {
        this.nextFragmentPromiseBundle = makePromise();
      }
      return this.nextFragmentPromiseBundle;
    }
    async *[(_a = Symbol.toStringTag, Symbol.asyncIterator)]() {
      if (!this.hasIterator) {
        this.promiseFinal.catch(() => {
        });
        this.hasIterator = true;
      }
      let i = 0;
      while (i < this.buffer.length || this.status === "pending") {
        if (i < this.buffer.length) {
          yield this.buffer[i];
          i++;
        } else {
          const nextFragmentPromiseBundle = this.obtainNextFragmentPromiseBundle();
          const nextFragment = await nextFragmentPromiseBundle.promise;
          if (nextFragment === finished) {
            break;
          }
          yield nextFragment;
          i++;
        }
      }
      await this.promiseFinal;
      await Promise.resolve();
    }
  };
  var Validator = class _Validator {
    constructor({ attachStack } = {}) {
      this.attachStack = attachStack ?? true;
    }
    /**
     * Pretty-prints a Zod error.
     *
     * @param rootObjectName - The name of the object being validated (used for error messages)
     * @param error - The Zod error to pretty-print
     *
     * @returns The pretty-printed error in a string
     */
    static prettyPrintZod(rootObjectName, error) {
      return error.errors.map((e) => {
        if (e.path.length === 0) {
          return `- ${import_chalk.default.redBright(rootObjectName)}: ${e.message}`;
        }
        const path = import_chalk.default.red(`.${e.path.join(".")}`);
        return `- ${import_chalk.default.redBright(rootObjectName)}${path}: ${e.message}`;
      }).join("\n");
    }
    /**
     * Validates a value against a schema and throws an error if it's invalid.
     *
     * @param lead - The start of the error message (used for error messages)
     * @param rootObjectName - The name of the object being validated (used for error messages)
     * @param schema - The schema to validate against
     * @param value - The value to validate
     *
     * @returns The validated value
     * @throws An error if the value is invalid
     */
    validateOrThrow(lead, rootObjectName, schema, value, stack) {
      const result = schema.safeParse(value);
      if (result.success) {
        return result.data;
      } else {
        throw makePrettyError(`${lead}

${_Validator.prettyPrintZod(rootObjectName, result.error)}`, this.attachStack ? stack : void 0);
      }
    }
    /**
     * Validates multiple values against multiple schemas and throws an error if any of them are
     * invalid. All values are validated before any errors are thrown. This is useful when you want to
     * validate multiple values at once and want to see all the errors at once.
     *
     * @param leadProducer - The function to produce the start of the error message (used for error).
     * It is called with a set of indices of the invalid values.
     * @param rootObjectNames - The names of the objects being validated (used for error messages)
     * @param schemas - The schemas to validate against
     * @param values - The values to validate
     *
     * @returns The validated values
     * @throws An error if any of the values are invalid
     */
    validateMultipleOrThrow(leadProducer, rootObjectNames, schemas, values, stack) {
      const results = schemas.map((schema, index) => schema.safeParse(values[index]));
      const errors2 = results.map((result, index) => ({ result, index, rootObjectName: rootObjectNames[index] })).filter(({ result }) => !result.success).map(({ result, rootObjectName, index }) => ({
        error: result.error,
        rootObjectName,
        index
      }));
      if (errors2.length === 0) {
        return results.map((result) => result.data);
      } else {
        const erroredValues = new Set(errors2.map(({ index }) => index));
        const lead = leadProducer(erroredValues);
        throw makePrettyError(`${lead}

${errors2.map(({ error, rootObjectName }) => _Validator.prettyPrintZod(rootObjectName, error)).join("\n")}`, this.attachStack ? stack : void 0);
      }
    }
    /**
     * Validates a value against a schema and throws an error if it's invalid. This is a convenience
     * function for validating one single method parameter.
     *
     * @param className - The name of the class containing the method (used for error messages)
     * @param methodName - The name of the method (used for error messages)
     * @param paramName - The name of the parameter being validated (used for error messages)
     * @param schema - The schema to validate against
     * @param value - The value to validate
     *
     * @returns The validated value
     * @throws An error if the value is invalid
     */
    validateMethodParamOrThrow(className, methodName, paramName, schema, value, stack) {
      const functionCall = import_chalk.default.yellowBright(text`
    ${className}.${methodName}(${import_chalk.default.redBright(paramName)})
  `);
      return this.validateOrThrow(`Invalid parameter(s) for ${functionCall}:`, paramName, schema, value, stack);
    }
    /**
     * Validates multiple values against multiple schemas and throws an error if any of them are
     * invalid. This is a convenience function for validating multiple method parameters.
     *
     * @param className - The name of the class containing the method (used for error messages)
     * @param methodName - The name of the method (used for error messages)
     * @param paramNames - The names of the parameters being validated (used for error messages)
     * @param schemas - The schemas to validate against
     * @param values - The values to validate
     *
     * @returns The validated values
     * @throws An error if any of the values are invalid
     */
    validateMethodParamsOrThrow(className, methodName, paramNames, schemas, values, stack) {
      return this.validateMultipleOrThrow((erroredValues) => {
        const coloredParamNames = paramNames.map((name, index) => erroredValues.has(index) ? import_chalk.default.redBright(name) : name);
        const functionCall = import_chalk.default.yellowBright(text`
        ${className}.${methodName}(${coloredParamNames.join(", ")})
      `);
        return `Invalid parameter(s) for ${functionCall}:`;
      }, paramNames, schemas, values, stack);
    }
    /**
     * Validates a value against a schema and throws an error if it's invalid. This is a convenience
     * function for validating one single constructor parameter.
     *
     * @param className - The name of the class (used for error messages)
     * @param paramName - The name of the parameter being validated (used for error messages)
     * @param schema - The schema to validate against
     * @param value - The value to validate
     *
     * @returns The validated value
     * @throws An error if the value is invalid
     */
    validateConstructorParamOrThrow(className, paramName, schema, value, stack) {
      const functionCall = import_chalk.default.yellowBright(text`
    ${className}(${import_chalk.default.redBright(paramName)})
  `);
      return this.validateOrThrow(`Invalid parameter(s) when constructing ${functionCall}`, paramName, schema, value, stack);
    }
    /**
     * Validates multiple values against multiple schemas and throws an error if any of them are
     * invalid. This is a convenience function for validating multiple constructor parameters.
     *
     * @param className - The name of the class (used for error messages)
     * @param paramNames - The names of the parameters being validated (used for error messages)
     *
     * @param schemas - The schemas to validate against
     * @param values - The values to validate
     */
    validateConstructorParamsOrThrow(className, paramNames, schemas, values, stack) {
      return this.validateMultipleOrThrow((erroredValues) => {
        const coloredParamNames = paramNames.map((name, index) => erroredValues.has(index) ? import_chalk.default.redBright(name) : name);
        const functionCall = import_chalk.default.yellowBright(text`
        ${className}(${coloredParamNames.join(", ")})
      `);
        return `Invalid parameter(s) when constructing ${functionCall}:`;
      }, paramNames, schemas, values, stack);
    }
  };
  var sharedValidator = new Validator();
  var FileHandle = class {
    /**
     * @internal
     */
    constructor(filesNamespace, identifier, type, sizeBytes, name) {
      this.filesNamespace = filesNamespace;
      this.identifier = identifier;
      this.type = type;
      this.sizeBytes = sizeBytes;
      this.name = name;
      this.parsedIdentifier = parseFileIdentifier(identifier);
    }
    /**
     * Gets the absolute file path of this file.
     */
    async getFilePath() {
      switch (this.parsedIdentifier.type) {
        case "local": {
          return (await this.filesNamespace.getLocalFileAbsolutePath(this.parsedIdentifier.fileName)).path;
        }
        case "base64": {
          throw new Error("Not implemented. Please open an issue on GitHub if you encountered this error.");
        }
        default: {
          const _exhaustiveCheck = this.parsedIdentifier;
          throw new Error(`Unexpected file identifier type: ${JSON.stringify(_exhaustiveCheck)}`);
        }
      }
    }
    isImage() {
      return this.type === "image";
    }
  };
  var chatMessageInputSchema = z.object({
    role: z.enum(["user", "assistant", "system"]).optional(),
    content: z.string().optional(),
    images: z.array(z.instanceof(FileHandle)).optional()
  });
  var chatHistoryInputSchema = z.array(chatMessageInputSchema);
  function isChatMessageInputAsOpposeToChatMessageData(chatMessageInput) {
    return !Array.isArray(chatMessageInput.content);
  }
  function isChatMessageInputAsOpposeToChatHistoryData(chatMessageInput) {
    return !("messages" in chatMessageInput);
  }
  function chatMessageInputToChatMessageData(chatMessageInput) {
    const { role, content, images } = chatMessageInput;
    const parts = [];
    if (images === void 0 || images.length === 0) {
      if (content === void 0) {
        parts.push({
          type: "text",
          text: ""
        });
      }
    } else {
      for (const file of images) {
        parts.push({
          type: "file",
          identifier: file.identifier,
          name: file.name,
          fileType: file.type,
          sizeBytes: file.sizeBytes
        });
      }
    }
    if (content !== void 0) {
      parts.push({
        type: "text",
        text: content
      });
    }
    return {
      role: role ?? "user",
      content: parts
    };
  }
  var Chat = class _Chat extends MaybeMutable {
    getClassName() {
      return "Chat";
    }
    create(data, mutable) {
      return new _Chat(data, mutable);
    }
    cloneData(data) {
      return chatHistoryDataSchema.parse(data);
    }
    /**
     * Don't use this constructor directly.
     *
     * - To create an empty chat history, use `Chat.empty()`.
     * - To create a chat history with existing data, use `Chat.from()`.
     */
    constructor(data, mutable) {
      super(data, mutable);
    }
    /**
     * Creates an empty mutable chat history.
     */
    static empty() {
      return new _Chat({ messages: [] }, true);
    }
    /**
     * Quickly create a mutable chat history with something that can be converted to a chat history.
     *
     * The created chat history will be a mutable copy of the input.
     *
     * @example
     * ```ts
     * const history = Chat.from([
     *   { role: "user", content: "Hello" },
     *   { role: "assistant", content: "Hi!" },
     *   { role: "user", content: "What is your name?" },
     * ]);
     * ```
     */
    static from(initializer) {
      const stack = getCurrentStack(1);
      sharedValidator.validateMethodParamOrThrow("Chat", "from", "initializer", chatHistoryLikeSchema, initializer, stack);
      if (initializer instanceof _Chat) {
        return initializer.asMutableCopy();
      }
      if (typeof initializer === "string") {
        const chatHistory = _Chat.empty();
        chatHistory.append("user", initializer);
        return chatHistory;
      }
      if (Array.isArray(initializer)) {
        return new _Chat({ messages: initializer.map(chatMessageInputToChatMessageData) }, true);
      }
      if (isChatMessageInputAsOpposeToChatHistoryData(initializer)) {
        return new _Chat({ messages: [chatMessageInputToChatMessageData(initializer)] }, true);
      } else {
        return new _Chat(initializer, false).asMutableCopy();
      }
    }
    /**
     * Creates a chat history with raw data. This method is intended for internal use only.
     *
     * If mutable is set to false, you MUST ensure that the data is not mutated.
     *
     * @internal
     */
    static createRaw(data, mutable) {
      return new _Chat(data, mutable);
    }
    /**
     * Gets the raw data of this message. This method is intended for internal use only.
     *
     * If mutable is set to false, you MUST ensure that the data is not mutated.
     *
     * @internal
     */
    getRaw() {
      return this.data;
    }
    append(...args) {
      this.guardMutable();
      if (args.length === 1) {
        const [chatMessageLike] = args;
        const chatMessage = ChatMessage.from(chatMessageLike);
        const messageMutable = accessMaybeMutableInternals(chatMessage)._internalToMutable();
        this.data.messages.push(accessMaybeMutableInternals(messageMutable)._internalGetData());
      } else {
        const [role, content, opts = {}] = args;
        if (role === "user" || role === "system" || role === "assistant") {
          const parts = [
            { type: "text", text: content }
          ];
          if (opts.images !== void 0) {
            for (const image of opts.images) {
              parts.push({
                type: "file",
                name: image.name,
                identifier: image.identifier,
                sizeBytes: image.sizeBytes,
                fileType: image.type
              });
            }
          }
          this.data.messages.push({ role, content: parts });
        } else {
          throw new Error(text`
          Unsupported role for append() API with [role, content] parameters: ${role}.
          Supported roles are 'user', 'system', and 'assistant'.
        `);
        }
      }
    }
    withAppended(...args) {
      const copy2 = this.asMutableCopy();
      copy2.append(...args);
      return copy2;
    }
    /**
     * Get the number of messages in the history.
     */
    getLength() {
      return this.data.messages.length;
    }
    /**
     * Get the number of messages in the history.
     */
    get length() {
      return this.getLength();
    }
    /**
     * Remove the last message from the history. If the history is empty, this method will throw.
     */
    pop() {
      this.guardMutable();
      if (this.data.messages.length === 0) {
        throw new Error("Tried to pop from an empty history.");
      }
      const popped = this.data.messages.pop();
      return ChatMessage.createRaw(popped, true);
    }
    /**
     * Gets all files contained in this history.
     *
     * @param client - LMStudio client
     */
    getAllFiles(client) {
      return this.data.messages.flatMap((message) => message.content.filter((part) => part.type === "file")).map((part) => new FileHandle(client.files, part.identifier, part.fileType, part.sizeBytes, part.name));
    }
    /**
     * Allows iterating over the files in the history.
     */
    *files(client) {
      for (const message of this.data.messages) {
        for (const part of message.content) {
          if (part.type === "file") {
            yield new FileHandle(client.files, part.identifier, part.fileType, part.sizeBytes, part.name);
          }
        }
      }
    }
    /**
     * Returns true if this history contains any files.
     */
    hasFiles() {
      return this.data.messages.some((message) => message.content.some((part) => part.type === "file"));
    }
    /**
     * Gets the message at the given index. If the index is negative, it will be counted from the end.
     *
     * If the index is out of bounds, this method will throw as oppose to returning undefined. This is
     * to help catch bugs early.
     */
    at(index) {
      let actualIndex = index;
      if (index < 0) {
        actualIndex = this.data.messages.length + index;
      }
      if (actualIndex < 0 || actualIndex >= this.data.messages.length) {
        throw new Error(text`
        Tried to access the message at index ${index}, but the history only has
        ${this.data.messages.length} messages.
      `);
      }
      return ChatMessage.createRaw(this.data.messages[actualIndex], this.mutable);
    }
    /**
     * Allows iterating over the messages in the history.
     */
    *[Symbol.iterator]() {
      for (const message of this.data.messages) {
        yield ChatMessage.createRaw(message, this.mutable);
      }
    }
    /**
     * Given a predicate, the predicate is called for each file in the history.
     *
     * - If the predicate returns true, the file is removed from the history and is collected into the
     *   returned array.
     * - If the predicate returns false, the file is kept in the history.
     *
     * This method is useful if you are implementing a preprocessor that needs to convert certain
     * types of files.
     *
     * If the predicate needs to be async, use the {@link Chat#consumeFilesAsync} method.
     *
     * @param client - LMStudio client
     * @param predicate - The predicate to call for each file.
     * @returns The files that were consumed.
     */
    consumeFiles(client, predicate) {
      this.guardMutable();
      const consumedFiles = [];
      for (const message of this.data.messages) {
        consumedFiles.push(...ChatMessage.createRaw(message, true).consumeFiles(client, predicate));
      }
      return consumedFiles;
    }
    /**
     * Given an async predicate, the predicate is called for each file in the history.
     *
     * - If the predicate returns true, the file is removed from the history and is collected into the
     *  returned array.
     * - If the predicate returns false, the file is kept in the history.
     *
     * This method is useful if you are implementing a preprocessor that needs to convert certain
     * types of files.
     *
     * If you need a synchronous version, use the {@link Chat#consumeFiles} method.
     *
     * @param client - LMStudio client
     * @param predicate - The predicate to call for each file.
     * @returns The files that were consumed.
     */
    async consumeFilesAsync(client, predicate) {
      this.guardMutable();
      const consumedFiles = [];
      for (const message of this.data.messages) {
        consumedFiles.push(...await ChatMessage.createRaw(message, true).consumeFilesAsync(client, predicate));
      }
      return consumedFiles;
    }
    getSystemPrompt() {
      return this.data.messages.filter((message) => message.role === "system").map((message) => message.content.filter((part) => part.type === "text").map((part) => part.text).join(" ")).join("\n\n");
    }
    replaceSystemPrompt(content) {
      this.guardMutable();
      this.data.messages = this.data.messages.filter((message) => message.role !== "system");
      this.data.messages.unshift({ role: "system", content: [{ type: "text", text: content }] });
    }
    filterInPlace(predicate) {
      this.guardMutable();
      this.data.messages = this.data.messages.filter((message) => predicate(ChatMessage.createRaw(message, true)));
    }
    toString() {
      return "Chat {\n" + this.data.messages.map((message) => {
        const messageString = ChatMessage.createRaw(message, false).toString();
        return messageString.split("\n").map((line) => "  " + line).join("\n");
      }).join("\n") + "\n}";
    }
  };
  var chatHistoryLikeSchema = z.union([
    z.instanceof(Chat),
    chatHistoryDataSchema,
    z.string(),
    chatHistoryInputSchema,
    chatMessageInputSchema
  ]);
  var ChatMessage = class _ChatMessage extends MaybeMutable {
    getClassName() {
      return "ChatMessage";
    }
    create(data, mutable) {
      return new _ChatMessage(data, mutable);
    }
    cloneData(data) {
      return chatMessageDataSchema.parse(data);
    }
    constructor(data, mutable) {
      super(data, mutable);
    }
    /**
     * Create a mutable text only message.
     */
    static create(role, content) {
      return new _ChatMessage(chatMessageDataSchema.parse({
        role,
        content: [{ type: "text", text: content }]
      }), true);
    }
    /**
     * Quickly create a mutable message with something that can be converted to a message.
     */
    static from(initializer) {
      const stack = getCurrentStack(1);
      sharedValidator.validateMethodParamOrThrow("ChatMessage", "from", "initializer", chatMessageLikeSchema, initializer, stack);
      if (initializer instanceof _ChatMessage) {
        return initializer.asMutableCopy();
      }
      if (typeof initializer === "string") {
        return new _ChatMessage(chatMessageDataSchema.parse({
          role: "user",
          content: [{ type: "text", text: initializer }]
        }), true);
      }
      if (isChatMessageInputAsOpposeToChatMessageData(initializer)) {
        return new _ChatMessage(chatMessageInputToChatMessageData(initializer), true);
      } else {
        return new _ChatMessage(initializer, true);
      }
    }
    /**
     * Creates a chat history with raw data. This method is intended for internal use only.
     *
     * If mutable is set to false, you MUST ensure that the data is not mutated.
     *
     * @internal
     */
    static createRaw(data, mutable) {
      return new _ChatMessage(data, mutable);
    }
    /**
     * Gets the raw data of this message. This method is intended for internal use only.
     *
     * If mutable is set to false, you MUST ensure that the data is not mutated.
     *
     * @internal
     */
    getRaw() {
      return this.data;
    }
    getRole() {
      return this.data.role;
    }
    setRole(role) {
      this.guardMutable();
      this.data.role = role;
    }
    getFileParts() {
      return this.data.content.filter((part) => part.type === "file");
    }
    /**
     * Gets all text contained in this message.
     */
    getText() {
      return this.data.content.filter((part) => part.type === "text").map((part) => part.text).join(" ");
    }
    /**
     * Gets all files contained in this message.
     *
     * @param client - LMStudio client
     */
    getFiles(client) {
      return this.getFileParts().map((part) => new FileHandle(client.files, part.identifier, part.fileType, part.sizeBytes, part.name));
    }
    /**
     * Allows iterating over the files in the message.
     */
    *files(client) {
      for (const part of this.getFileParts()) {
        yield new FileHandle(client.files, part.identifier, part.fileType, part.sizeBytes, part.name);
      }
    }
    /**
     * Given a predicate, the predicate is called for each file in the message.
     *
     * - If the predicate returns true, the file is removed from the message and is collected into the
     *   returned array.
     * - If the predicate returns false, the file is kept in the message.
     *
     * This method is useful if you are implementing a preprocessor that needs to convert certain
     * types of files.
     *
     * If the predicate needs to be async, use the {@link ChatMessage#consumeFilesAsync} method.
     *
     * @param client - LMStudio client
     * @param predicate - The predicate to call for each file.
     * @returns The files that were consumed.
     */
    consumeFiles(client, predicate) {
      this.guardMutable();
      const consumedFiles = [];
      const partIndexesToRemove = /* @__PURE__ */ new Set();
      for (const [index, part] of this.data.content.entries()) {
        if (part.type !== "file") {
          continue;
        }
        const file = new FileHandle(client.files, part.identifier, part.fileType, part.sizeBytes, part.name);
        if (predicate(file)) {
          consumedFiles.push(file);
          partIndexesToRemove.add(index);
        }
      }
      this.data.content = this.data.content.filter((_, index) => !partIndexesToRemove.has(index));
      return consumedFiles;
    }
    /**
     * Given an async predicate, the predicate is called for each file in the message.
     *
     * - If the predicate returns true, the file is removed from the message and is collected into the
     *  returned array.
     * - If the predicate returns false, the file is kept in the message.
     *
     * This method is useful if you are implementing a preprocessor that needs to convert certain
     * types of files.
     *
     * If you need a synchronous version, use the {@link ChatMessage#consumeFiles} method.
     *
     * @param client - LMStudio client
     * @param predicate - The predicate to call for each file.
     * @returns The files that were consumed.
     */
    async consumeFilesAsync(client, predicate) {
      this.guardMutable();
      const consumedFiles = [];
      const partIndexesToRemove = /* @__PURE__ */ new Set();
      for (const [index, part] of this.data.content.entries()) {
        if (part.type !== "file") {
          continue;
        }
        const file = new FileHandle(client.files, part.identifier, part.fileType, part.sizeBytes, part.name);
        if (await predicate(file)) {
          consumedFiles.push(file);
          partIndexesToRemove.add(index);
        }
      }
      this.data.content = this.data.content.filter((_, index) => !partIndexesToRemove.has(index));
      return consumedFiles;
    }
    /**
     * Returns true if this message contains any files.
     */
    hasFiles() {
      return this.data.content.some((part) => part.type === "file");
    }
    /**
     * Append text to the message.
     */
    appendText(text2) {
      this.guardMutable();
      switch (this.data.role) {
        case "assistant":
        case "user":
        case "system":
          this.data.content.push({
            type: "text",
            text: text2
          });
          break;
        case "tool":
          throw new Error(`Cannot append text to a message with role "${this.data.role}"`);
        default: {
          const exhaustiveCheck = this.data;
          throw new Error(`Unhandled role in switch statement: ${exhaustiveCheck.role}`);
        }
      }
    }
    /**
     * Append a file to the message. Takes in a FileHandle. You can obtain a FileHandle from
     * `client.files.prepareImage`.
     */
    appendFile(file) {
      this.guardMutable();
      switch (this.data.role) {
        case "assistant":
        case "user":
        case "system":
          this.data.content.push({
            type: "file",
            name: file.name,
            identifier: file.identifier,
            sizeBytes: file.sizeBytes,
            fileType: file.type
          });
          break;
        case "tool":
          throw new Error(`Cannot append text to a message with role "${this.data.role}"`);
        default: {
          const exhaustiveCheck = this.data;
          throw new Error(`Unhandled role in switch statement: ${exhaustiveCheck.role}`);
        }
      }
    }
    /**
     * Replaces all text in the messages.
     *
     * If the message contains other components (such as files), they will kept. The replaced text
     * will be inserted to the beginning of the message.
     */
    replaceText(text2) {
      this.guardMutable();
      switch (this.data.role) {
        case "assistant":
        case "user":
        case "system":
          this.data.content = [
            { type: "text", text: text2 },
            ...this.data.content.filter((part) => part.type !== "text")
          ];
          break;
        case "tool":
          throw new Error(`Cannot replace text in a message with role "${this.data.role}"`);
        default: {
          const exhaustiveCheck = this.data;
          throw new Error(`Unhandled role in switch statement: ${exhaustiveCheck.role}`);
        }
      }
    }
    isSystemPrompt() {
      return this.data.role === "system";
    }
    isUserMessage() {
      return this.data.role === "user";
    }
    isAssistantMessage() {
      return this.data.role === "assistant";
    }
    toString() {
      const text2 = this.data.content.map((part) => {
        switch (part.type) {
          case "text":
            return part.text;
          case "file":
            return `<file ${part.name}>`;
          case "toolCallRequest":
            return part.toolCallRequest.name + `(${JSON.stringify(part.toolCallRequest.arguments)})`;
          case "toolCallResult":
            return part.content;
          default: {
            const exhaustiveCheck = part;
            throw new Error(`Unknown part type: ${exhaustiveCheck.type}`);
          }
        }
      }).join(" ");
      if (text2.includes("\n")) {
        return this.data.role + ":\n" + text2.split("\n").map((line) => "  " + line).join("\n");
      } else {
        return this.data.role + ": " + text2;
      }
    }
  };
  var chatMessageLikeSchema = z.union([
    z.instanceof(ChatMessage),
    chatMessageInputSchema,
    z.string(),
    chatMessageDataSchema
  ]);
  var KVFieldValueTypesLibraryBuilder = class {
    constructor(baseSchema) {
      this.baseSchema = baseSchema;
      this.valueTypes = /* @__PURE__ */ new Map();
    }
    /**
     * Define a new field value type.
     */
    valueType(key, param) {
      if (this.valueTypes.has(key)) {
        throw new Error(`ValueType with key ${key} already exists`);
      }
      this.valueTypes.set(key, {
        paramType: z.object({
          ...this.baseSchema,
          ...param.paramType
        }),
        schemaMaker: param.schemaMaker,
        effectiveEquals: param.effectiveEquals,
        stringify: param.stringify
      });
      return this;
    }
    build() {
      return new KVFieldValueTypeLibrary(this.valueTypes);
    }
  };
  var KVFieldValueTypeLibrary = class {
    constructor(valueTypes) {
      this.valueTypes = valueTypes;
    }
    /**
     * Gets the schema for a specific field value type with the given key and parameters.
     */
    getSchema(key, param) {
      return this.valueTypes.get(key).schemaMaker(param);
    }
    parseParamTypes(key, param) {
      return this.valueTypes.get(key).paramType.parse(param);
    }
    effectiveEquals(key, typeParam, a, b) {
      return this.valueTypes.get(key).effectiveEquals(a, b, typeParam);
    }
    stringify(key, typeParam, opts, value) {
      return this.valueTypes.get(key).stringify(value, typeParam, opts);
    }
  };
  var KVConfigSchematicsBuilder = class _KVConfigSchematicsBuilder {
    constructor(valueTypeLibrary) {
      this.valueTypeLibrary = valueTypeLibrary;
      this.fields = /* @__PURE__ */ new Map();
    }
    /**
     * Adds a field
     */
    field(key, valueTypeKey, valueTypeParams, defaultValue) {
      const schema = this.valueTypeLibrary.getSchema(valueTypeKey, valueTypeParams);
      const defaultValueParseResult = schema.safeParse(defaultValue);
      if (!defaultValueParseResult.success) {
        throw new Error(`Invalid default value for field ${key}: ${defaultValueParseResult.error.message}`);
      }
      defaultValue = defaultValueParseResult.data;
      this.fields.set(key, {
        valueTypeKey,
        valueTypeParams,
        schema: this.valueTypeLibrary.getSchema(valueTypeKey, valueTypeParams),
        fullKey: key,
        defaultValue
      });
      return this;
    }
    /**
     * Convenience method for grouping a set of fields under a shared namespace.
     *
     * For example, if we want to create two fields: `some:namespace:a` and `some:namespace:b`.
     * Instead of doing:
     *
     * ```ts
     * builder
     *   .field("some:namespace:a", ...)
     *   .field("some:namespace:b", ...)
     * ```
     *
     * We can do:
     *
     * ```ts
     * builder.scope("some:namespace", builder =>
     *  builder
     *   .field("a", ...)
     *   .field("b", ...)
     * )
     * ```
     *
     * This method does support nesting. Whether to nest or not is up to the user.
     */
    scope(scopeKey, fn) {
      const innerBuilder = fn(new _KVConfigSchematicsBuilder(this.valueTypeLibrary));
      for (const [key, { valueTypeKey, valueTypeParams, schema, defaultValue }] of innerBuilder.fields.entries()) {
        const fullKey = `${scopeKey}.${key}`;
        this.fields.set(fullKey, {
          valueTypeKey,
          valueTypeParams,
          schema,
          fullKey,
          defaultValue
        });
      }
      return this;
    }
    build() {
      return new KVConfigSchematics(this.valueTypeLibrary, this.fields);
    }
  };
  var createParsedKVConfig = Symbol("createParsedKVConfig");
  var KVConfigSchematics = class _KVConfigSchematics {
    constructor(valueTypeLibrary, fields) {
      this.valueTypeLibrary = valueTypeLibrary;
      this.fields = fields;
      this.fullKepMap = void 0;
      this.lenientZodSchema = void 0;
    }
    getFieldsMap() {
      return new Map([...this.fields.values()].map((field) => [field.fullKey, field]));
    }
    obtainField(key) {
      const field = this.fields.get(key);
      if (field === void 0) {
        const fieldKeys = [...this.fields.keys()];
        let availableList = fieldKeys.slice(0, 10).map((key2) => `- ${key2}`).join("\n");
        if (fieldKeys.length > 10) {
          availableList += `
... and ${fieldKeys.length - 10} more`;
        }
        throw new Error(`Cannot access key ${key}. Key does not exist in the schematics. Available keys:

` + availableList);
      }
      return field;
    }
    obtainFieldByFullKey(fullKey) {
      const field = this.getFullKeyMap().get(fullKey);
      if (field === void 0) {
        const fieldKeys = [...this.getFullKeyMap().keys()];
        let availableList = fieldKeys.slice(0, 10).map((key) => `- ${key}`).join("\n");
        if (fieldKeys.length > 10) {
          availableList += `
... and ${fieldKeys.length - 10} more`;
        }
        throw new Error(`Cannot access full key ${fullKey}. Full key does not exist in the schematics. Availablekeys:

` + availableList);
      }
      return field;
    }
    getSchemaForKey(key) {
      const field = this.obtainField(key);
      return field.schema;
    }
    parseField(fieldSchema, value) {
      if (value === void 0) {
        if (fieldSchema.defaultValue === void 0) {
          throw new Error(`Field with key ${fieldSchema.fullKey} is missing and has no default value`);
        }
        return fieldSchema.defaultValue;
      }
      const parseResult = fieldSchema.schema.safeParse(value);
      if (!parseResult.success) {
        throw new Error(`Field with key ${fieldSchema.fullKey} does not satisfy the schema:` + parseResult.error.message);
      }
      return parseResult.data;
    }
    parseFieldWithoutDefault(field, value) {
      if (value === void 0) {
        return void 0;
      }
      const parseResult = field.schema.safeParse(value);
      if (!parseResult.success) {
        throw new Error(`Field with key ${field.fullKey} does not satisfy the schema:` + parseResult.error.message);
      }
      return parseResult.data;
    }
    /**
     * Parse and access a field in the config.
     */
    access(config, key) {
      const field = this.obtainField(key);
      return this.parseField(field, config.fields.find((f) => f.key === field.fullKey)?.value);
    }
    accessByFullKey(config, fullKey) {
      const field = this.obtainFieldByFullKey(fullKey);
      return this.parseField(field, config.fields.find((f) => f.key === field.fullKey)?.value);
    }
    /**
     * Parse and access a field in the config. Returns undefined if the field is missing.
     */
    accessPartial(config, key) {
      const field = this.obtainField(key);
      return this.parseFieldWithoutDefault(field, config.fields.find((f) => f.key === field.fullKey)?.value);
    }
    /**
     * Gets a slice of the config schema with the given key patterns. Support syntax:
     *
     * - `some.namespace.key`: Matches exactly `some.namespace.key`
     * - `some.namespace.*`: Matches anything that starts with `some.namespace.`
     */
    sliced(...patterns) {
      const parsedPatterns = patterns.map((p) => {
        if (p.endsWith("*")) {
          return { type: "prefix", value: p.substring(0, p.length - 1) };
        }
        return { type: "exact", value: p };
      });
      const newFields = /* @__PURE__ */ new Map();
      for (const [key, field] of this.fields.entries()) {
        for (const pattern of parsedPatterns) {
          if (pattern.type === "exact" && key === pattern.value || pattern.type === "prefix" && key.startsWith(pattern.value)) {
            newFields.set(key, field);
          }
        }
      }
      return new _KVConfigSchematics(this.valueTypeLibrary, newFields);
    }
    /**
     * Get a subset of the config schema with a specific scope.
     */
    scoped(scopeKey) {
      const newFields = /* @__PURE__ */ new Map();
      for (const [key, field] of this.fields.entries()) {
        if (key.startsWith(`${scopeKey}.`)) {
          newFields.set(key.substring(scopeKey.length + 1), field);
        }
      }
      return new _KVConfigSchematics(this.valueTypeLibrary, newFields);
    }
    union(other) {
      const newFields = /* @__PURE__ */ new Map();
      for (const [key, field] of this.fields.entries()) {
        newFields.set(key, field);
      }
      for (const [key, field] of other.fields.entries()) {
        if (newFields.has(key)) {
          throw new Error("Cannot union two KVConfigSchematics. The following key is duplicated: " + key);
        }
        newFields.set(key, field);
      }
      return new _KVConfigSchematics(this.valueTypeLibrary, newFields);
    }
    /**
     * Combine baseKey into the fields. Effectively removes the baseKey.
     */
    flattenBaseKey() {
      const newFields = /* @__PURE__ */ new Map();
      for (const field of this.fields.values()) {
        newFields.set(field.fullKey, field);
      }
      return new _KVConfigSchematics(this.valueTypeLibrary, newFields);
    }
    parseToMap(config) {
      const rawConfigMap = kvConfigToMap(config);
      const parsedConfigMap = /* @__PURE__ */ new Map();
      for (const [key, field] of this.fields.entries()) {
        const value = rawConfigMap.get(field.fullKey);
        const parsedValue = this.parseField(field, value);
        parsedConfigMap.set(key, parsedValue);
      }
      return parsedConfigMap;
    }
    parseToMapPartial(config) {
      const rawConfigMap = kvConfigToMap(config);
      const parsedConfigMap = /* @__PURE__ */ new Map();
      for (const [key, field] of this.fields.entries()) {
        const value = rawConfigMap.get(field.fullKey);
        const parsedValue = this.parseFieldWithoutDefault(field, value);
        if (parsedValue !== void 0) {
          parsedConfigMap.set(key, parsedValue);
        }
      }
      return parsedConfigMap;
    }
    /**
     * Parse the given config to a ParsedKVConfig. **Will throw** if the config does not satisfy the
     * schema.
     */
    parse(config) {
      return ParsedKVConfig[createParsedKVConfig](this.parseToMap(config));
    }
    parsePartial(config) {
      return PartialParsedKVConfig[createParsedKVConfig](this.parseToMapPartial(config));
    }
    /**
     * Builds a full KV config from the given values record. **Will throw** if any of the values are
     * missing or do not satisfy the schema.
     */
    buildFullConfig(valuesRecord) {
      return {
        fields: Array.from(this.fields.entries()).map(([key, field]) => {
          const value = this.parseField(field, valuesRecord[key]);
          return { key: field.fullKey, value };
        })
      };
    }
    /**
     * Builds a partial KV config from the given values record. Will leave holes in the config if the
     * values are missing. **Will throw** if any of the values do not satisfy the schema.
     */
    buildPartialConfig(valuesRecord) {
      return {
        fields: Object.entries(valuesRecord).filter(([_key, value]) => value !== void 0).map(([key, value]) => {
          const field = this.obtainField(key);
          return { key: field.fullKey, value: this.parseField(field, value) };
        })
      };
    }
    createBuildPartialConfigInput() {
      return {};
    }
    configBuilder() {
      return new KVConfigBuilder(this.fields);
    }
    clone() {
      return new _KVConfigSchematics(this.valueTypeLibrary, new Map(this.fields));
    }
    withTypeParamOverride(key, paramMapper) {
      const field = this.obtainField(key);
      const clone = this.clone();
      clone.fields.set(key, {
        ...field,
        valueTypeParams: paramMapper(field.valueTypeParams),
        schema: this.valueTypeLibrary.getSchema(field.valueTypeKey, paramMapper(field.valueTypeParams))
      });
      return clone;
    }
    getFullKeyMap() {
      if (this.fullKepMap !== void 0) {
        return this.fullKepMap;
      }
      this.fullKepMap = new Map([...this.fields.values()].map((field) => [field.fullKey, field]));
      return this.fullKepMap;
    }
    makeLenientZodSchema() {
      const fullKeyMap = this.getFullKeyMap();
      return kvConfigSchema.transform((value) => {
        const seenKeys = /* @__PURE__ */ new Set();
        return {
          fields: value.fields.filter((field) => {
            if (seenKeys.has(field.key)) {
              return false;
            }
            const fieldDef = fullKeyMap.get(field.key);
            if (fieldDef === void 0) {
              return false;
            }
            const parsed = fieldDef.schema.safeParse(field.value);
            if (!parsed.success) {
              return false;
            }
            seenKeys.add(field.key);
            return true;
          })
        };
      });
    }
    /**
     * Makes a zod schema that parses a KVConfig which only allows fields with correct keys and types
     * through.
     *
     * Will filter out any fields that are not in the schema.
     */
    getLenientZodSchema() {
      if (this.lenientZodSchema !== void 0) {
        return this.lenientZodSchema;
      }
      this.lenientZodSchema = this.makeLenientZodSchema();
      return this.lenientZodSchema;
    }
    getValueType(key) {
      const field = this.fields.get(key);
      if (field === void 0) {
        return null;
      }
      return field.valueTypeKey;
    }
    getValueTypeParam(key) {
      const field = this.fields.get(key);
      if (field === void 0) {
        return null;
      }
      return field.valueTypeParams;
    }
    getValueTypeParamByFullKey(key) {
      const field = this.getFullKeyMap().get(key);
      if (field === void 0) {
        throw new Error(`Field with key ${key} does not exist in the schematics`);
      }
      return field.valueTypeParams;
    }
    hasFullKey(key) {
      const field = this.getFullKeyMap().get(key);
      return field !== void 0;
    }
    /**
     * Given a KVConfig, filter it to only include fields that are in the schematics.
     */
    filterConfig(config, additionalFilter) {
      const fullKeyMap = this.getFullKeyMap();
      return {
        fields: config.fields.filter((configField) => {
          const field = fullKeyMap.get(configField.key);
          if (field === void 0) {
            return false;
          }
          if (additionalFilter !== void 0) {
            return additionalFilter(field.fullKey, {
              type: field.valueTypeKey,
              param: field.valueTypeParams
            });
          }
          return true;
        })
      };
    }
    /**
     * Given a KVConfigStack, filter it to only include fields that are in the schematics.
     */
    filterStack(stack) {
      return {
        layers: stack.layers.map((layer) => ({
          layerName: layer.layerName,
          config: this.filterConfig(layer.config)
        }))
      };
    }
    twoWayFilterConfig(config, additionalFilter) {
      const includedFields = [];
      const excludedFields = [];
      const fullKeyMap = this.getFullKeyMap();
      for (const configField of config.fields) {
        const field = fullKeyMap.get(configField.key);
        let include = field !== void 0;
        if (field !== void 0 && additionalFilter !== void 0) {
          include = additionalFilter(field.fullKey, {
            type: field.valueTypeKey,
            param: field.valueTypeParams
          });
        }
        if (include) {
          includedFields.push(configField);
        } else {
          excludedFields.push(configField);
        }
      }
      return [{ fields: includedFields }, { fields: excludedFields }];
    }
    /**
     * Given a list of keys, filter it to only include keys that are in the schematics.
     */
    filterFullKeys(keys) {
      const fullKeyMap = this.getFullKeyMap();
      return keys.filter((key) => fullKeyMap.has(key));
    }
    /**
     * Compares two KV config. Compare with "effective equals". Only compare fields in the schematics.
     * Does not apply defaults.
     */
    configEffectiveEquals(a, b) {
      const aMap = kvConfigToMap(a);
      const bMap = kvConfigToMap(b);
      for (const field of this.fields.values()) {
        const aValue = aMap.get(field.fullKey);
        const bValue = bMap.get(field.fullKey);
        if (aValue === void 0) {
          if (bValue === void 0) {
            continue;
          } else {
            return false;
          }
        }
        this.valueTypeLibrary.effectiveEquals(field.valueTypeKey, field.valueTypeParams, aValue, bValue);
      }
      return true;
    }
    /**
     * Compares two KV config field. Compare with "effective equals". Can only compare fields in the
     * schematics.
     */
    fieldEffectiveEquals(key, a, b) {
      const field = this.obtainField(key);
      return this.valueTypeLibrary.effectiveEquals(field.valueTypeKey, field.valueTypeParams, a, b);
    }
    fieldEffectiveEqualsWithFullKey(fullKey, a, b) {
      const fullKeyMap = this.getFullKeyMap();
      const field = fullKeyMap.get(fullKey);
      if (field === void 0) {
        throw new Error(`Field with key ${fullKey} does not exist in the schematics`);
      }
      return this.valueTypeLibrary.effectiveEquals(field.valueTypeKey, field.valueTypeParams, a, b);
    }
    makeInternalFieldStringifyOpts(opts) {
      return {
        t: opts.t ?? ((_key, fallback) => fallback),
        desiredLength: opts.desiredLength
      };
    }
    stringifyField(key, value, opts = {}) {
      const field = this.obtainField(key);
      return this.valueTypeLibrary.stringify(field.valueTypeKey, field.valueTypeParams, this.makeInternalFieldStringifyOpts(opts), value);
    }
    tryStringifyFieldWithFullKey(key, value, opts) {
      const fullKeyMap = this.getFullKeyMap();
      const field = fullKeyMap.get(key);
      if (field === void 0) {
        return null;
      }
      return this.valueTypeLibrary.stringify(field.valueTypeKey, field.valueTypeParams, this.makeInternalFieldStringifyOpts(opts), value);
    }
    /**
     * Apply config in patch to target. Only apply fields that are in the schematics.
     */
    apply(target, patch) {
      const filteredPatch = this.filterConfig(patch);
      return collapseKVStackRaw([target, filteredPatch]);
    }
    /**
     * Tries to un-apply the patch from the target. Will only un-apply fields that are in the
     * schematics.
     *
     * If the value in the target is not effective equal to the value in the patch, it will not be
     * removed.
     */
    unApply(target, patch) {
      const filteredPatch = this.filterConfig(patch);
      const patchMap = kvConfigToMap(filteredPatch);
      const newMap = new Map(kvConfigToMap(target));
      const fullKeyMap = this.getFullKeyMap();
      for (const [key, value] of patchMap.entries()) {
        const field = fullKeyMap.get(key);
        if (field === void 0) {
          continue;
        }
        const targetValue = newMap.get(key);
        if (targetValue !== void 0) {
          if (!this.valueTypeLibrary.effectiveEquals(field.valueTypeKey, field.valueTypeParams, value, targetValue)) {
            continue;
          }
          newMap.delete(key);
        }
      }
      return mapToKVConfig(newMap);
    }
    /**
     * Given a KVConfig, iterate through all the fields that are in the schematics. Keys will be full
     * keys.
     */
    *iterateFieldsOfConfig(config) {
      const fullKeyMap = this.getFullKeyMap();
      for (const { key, value } of config.fields) {
        const field = fullKeyMap.get(key);
        if (field !== void 0) {
          yield [key, value];
        }
      }
    }
    /**
     * Given a KVConfig, iterate through all the fields that are in the schematics.
     */
    *fullKeys() {
      const fullKeyMap = this.getFullKeyMap();
      for (const key of fullKeyMap.keys()) {
        yield key;
      }
    }
    /**
     * Effectively compare two KV config, and return full keys of fields that are different.
     */
    effectiveCompareConfig(a, b, opts = {}) {
      const { fieldFilter } = opts;
      const aMap = kvConfigToMap(a);
      const bMap = kvConfigToMap(b);
      const onlyInA = [];
      const onlyInB = [];
      const inBothButDifferent = [];
      for (const field of this.fields.values()) {
        if (fieldFilter !== void 0) {
          if (!fieldFilter(field.fullKey, {
            type: field.valueTypeKey,
            param: field.valueTypeParams
          })) {
            continue;
          }
        }
        const aValue = aMap.get(field.fullKey);
        const bValue = bMap.get(field.fullKey);
        if (aValue === void 0) {
          if (bValue === void 0) {
            continue;
          } else {
            onlyInB.push(field.fullKey);
          }
        } else {
          if (bValue === void 0) {
            onlyInA.push(field.fullKey);
          } else {
            if (!this.valueTypeLibrary.effectiveEquals(field.valueTypeKey, field.valueTypeParams, aValue, bValue)) {
              inBothButDifferent.push(field.fullKey);
            }
          }
        }
      }
      return { onlyInA, onlyInB, inBothButDifferent };
    }
    serialize() {
      return {
        fields: [...this.fields.entries()].map(([key, field]) => ({
          shortKey: key,
          fullKey: field.fullKey,
          typeKey: field.valueTypeKey,
          typeParams: field.valueTypeParams,
          defaultValue: field.defaultValue
        }))
      };
    }
    static deserialize(valueTypeLibrary, serialized) {
      const fields = new Map(serialized.fields.map((field) => {
        const typeParams = valueTypeLibrary.parseParamTypes(field.typeKey, field.typeParams);
        const valueSchema = valueTypeLibrary.getSchema(field.typeKey, typeParams);
        return [
          field.shortKey,
          {
            valueTypeKey: field.typeKey,
            valueTypeParams: typeParams,
            schema: valueSchema,
            fullKey: field.fullKey,
            defaultValue: valueSchema.parse(field.defaultValue)
          }
        ];
      }));
      return new _KVConfigSchematics(valueTypeLibrary, fields);
    }
    static tryDeserialize(valueTypeLibrary, serialized) {
      const fields = /* @__PURE__ */ new Map();
      const errors2 = [];
      for (const field of serialized.fields) {
        try {
          const typeParams = valueTypeLibrary.parseParamTypes(field.typeKey, field.typeParams);
          const valueSchema = valueTypeLibrary.getSchema(field.typeKey, typeParams);
          fields.set(field.shortKey, {
            valueTypeKey: field.typeKey,
            valueTypeParams: typeParams,
            schema: valueSchema,
            fullKey: field.fullKey,
            defaultValue: valueSchema.parse(field.defaultValue)
          });
        } catch (error) {
          errors2.push({
            fullKey: field.fullKey,
            error: serializeError(error)
          });
        }
      }
      return {
        schematics: new _KVConfigSchematics(valueTypeLibrary, fields),
        errors: errors2
      };
    }
  };
  var KVConfigBuilder = class {
    constructor(fieldDefs) {
      this.fieldDefs = fieldDefs;
      this.fields = /* @__PURE__ */ new Map();
    }
    with(key, value) {
      const field = this.fieldDefs.get(key);
      if (field === void 0) {
        throw new Error(`Field with key ${key} does not exist in the schematics.`);
      }
      this.fields.set(field.fullKey, value);
      return this;
    }
    build() {
      return mapToKVConfig(this.fields);
    }
  };
  var ParsedKVConfig = class _ParsedKVConfig {
    constructor(configMap) {
      this.configMap = configMap;
    }
    /**
     * @internal
     */
    static [createParsedKVConfig](configMap) {
      return new _ParsedKVConfig(configMap);
    }
    get(key) {
      return this.configMap.get(key);
    }
  };
  var PartialParsedKVConfig = class _PartialParsedKVConfig {
    constructor(configMap) {
      this.configMap = configMap;
    }
    static [createParsedKVConfig](configMap) {
      return new _PartialParsedKVConfig(configMap);
    }
    get(key) {
      return this.configMap.get(key);
    }
    has(key) {
      return this.configMap.has(key);
    }
  };
  function kvConfigToMap(config) {
    return new Map(config.fields.map((f) => [f.key, f.value]));
  }
  function mapToKVConfig(map) {
    return {
      fields: Array.from(map.entries()).map(([key, value]) => ({ key, value }))
    };
  }
  function collapseKVStackRaw(configs) {
    const map = /* @__PURE__ */ new Map();
    for (const config of configs) {
      for (const { key, value } of config.fields) {
        map.set(key, value);
      }
    }
    return mapToKVConfig(map);
  }
  function singleLayerKVConfigStackOf(name, config) {
    return {
      layers: [
        {
          layerName: name,
          config
        }
      ]
    };
  }
  function addKVConfigToStack(stack, newLayerName, newLayerConfig) {
    return {
      layers: [
        ...stack.layers,
        {
          layerName: newLayerName,
          config: newLayerConfig
        }
      ]
    };
  }
  function deepEquals(a, b) {
    if (a === b) {
      return true;
    }
    if (typeof a !== "object" || typeof b !== "object") {
      return false;
    }
    if (a === null || b === null) {
      return false;
    }
    if (Array.isArray(a) !== Array.isArray(b)) {
      return false;
    }
    if (Array.isArray(a)) {
      if (a.length !== b?.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!deepEquals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    const aKeys = new Set(Object.keys(a));
    const bKeys = new Set(Object.keys(b));
    if (aKeys.size !== bKeys.size) {
      return false;
    }
    for (const key of aKeys) {
      if (!bKeys.has(key)) {
        return false;
      }
      if (!deepEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  function quoteString(str, empty) {
    if (str === void 0 || str === "") {
      return empty ?? '""';
    }
    return JSON.stringify(str);
  }
  function quoteStringWithManualEscape(str, empty) {
    return quoteString(str?.replace(/\\n/g, "\n"), empty);
  }
  var kvValueTypesLibrary = new KVFieldValueTypesLibraryBuilder({
    /**
     * Display name of the field.
     */
    displayName: z.string().optional(),
    /**
     * Hint about the field. Shown when hovering over the field.
     */
    hint: z.string().optional(),
    /**
     * A field can be marked as model centric when it loses its meaning when there is no model to
     * reference.
     *
     * An example would be prompt template. There is no point to configure prompt template when there
     * isn't a specific model.
     */
    modelCentric: z.boolean().optional(),
    /**
     * A field can be marked as non-configurable when it is only used as a means to carry information.
     * As a result, it will not be shown in the UI.
     *
     * An example would be context length for MLX, as you cannot change it.
     */
    nonConfigurable: z.boolean().optional(),
    /**
     * A field can be marked as machine dependent when its value is highly dependent on the machine
     * that is being used. When exporting the config, one may decide to not include machine dependent
     * fields by default.
     *
     * An example would be GPU offload settings.
     */
    machineDependent: z.boolean().optional(),
    warning: z.string().optional(),
    isExperimental: z.boolean().optional(),
    dependencies: z.array(kvConfigFieldDependencySchema).optional()
  }).valueType("numeric", {
    paramType: {
      min: z.number().optional(),
      max: z.number().optional(),
      step: z.number().optional(),
      int: z.boolean().optional(),
      precision: z.number().int().nonnegative().optional(),
      slider: z.object({
        min: z.number(),
        max: z.number(),
        step: z.number()
      }).optional(),
      shortHand: z.string().optional()
    },
    schemaMaker: ({ min, max, int, precision }) => {
      let schema = z.number();
      if (min !== void 0) {
        schema = schema.min(min);
      }
      if (max !== void 0) {
        schema = schema.max(max);
      }
      if (int) {
        if (precision !== void 0) {
          throw new Error("Cannot specify both int and precision.");
        }
        schema = schema.int();
      }
      return schema;
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value, { int, precision }) => {
      if (int) {
        return String(Math.round(value));
      }
      return value.toFixed(precision ?? 2);
    }
  }).valueType("checkboxNumeric", {
    paramType: {
      min: z.number().optional(),
      max: z.number().optional(),
      step: z.number().optional(),
      int: z.boolean().optional(),
      uncheckedHint: z.string().optional(),
      precision: z.number().int().nonnegative().optional(),
      slider: z.object({
        min: z.number(),
        max: z.number(),
        step: z.number()
      }).optional()
    },
    schemaMaker: ({ min, max, int, precision }) => {
      let numberSchema = z.number();
      if (min !== void 0) {
        numberSchema = numberSchema.min(min);
      }
      if (max !== void 0) {
        numberSchema = numberSchema.max(max);
      }
      if (int) {
        if (precision !== void 0) {
          throw new Error("Cannot specify both int and precision.");
        }
        numberSchema = numberSchema.int();
      }
      return z.object({
        checked: z.boolean(),
        value: numberSchema
      });
    },
    effectiveEquals: (a, b) => {
      if (a.checked !== b.checked) {
        return false;
      }
      if (!a.checked) {
        return true;
      }
      return a.value === b.value;
    },
    stringify: (value, { int, precision }, { t }) => {
      if (!value.checked) {
        return t("config:customInputs.checkboxNumeric.off", "OFF");
      }
      if (int) {
        return String(Math.round(value.value));
      }
      return value.value.toFixed(precision ?? 2);
    }
  }).valueType("string", {
    paramType: {
      minLength: z.number().optional(),
      maxLength: z.number().optional(),
      isParagraph: z.boolean().optional(),
      isProtected: z.boolean().optional(),
      /**
       * If true, the string should match to a single token.
       */
      isToken: z.boolean().optional(),
      placeholder: z.string().optional()
    },
    schemaMaker: ({ minLength, maxLength }) => {
      let schema = z.string();
      if (minLength !== void 0) {
        schema = schema.min(minLength);
      }
      if (maxLength !== void 0) {
        schema = schema.max(maxLength);
      }
      return schema;
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value, { isParagraph, isProtected }, { t, desiredLength }) => {
      if (isProtected) {
        return "********";
      }
      if (isParagraph) {
        if (value === "") {
          return t("config:customInputs.string.emptyParagraph", "<Empty>");
        } else {
          if (desiredLength === void 0 || value.length <= desiredLength) {
            return value;
          } else {
            return value.slice(0, Math.floor(desiredLength / 2)) + " ... " + value.slice(-Math.ceil(desiredLength / 2));
          }
        }
      } else {
        const quoted = quoteString(value);
        if (desiredLength === void 0 || quoted.length <= desiredLength) {
          return quoted;
        } else {
          return quoted.slice(0, Math.floor(desiredLength / 2)) + "..." + quoted.slice(-Math.ceil(desiredLength / 2));
        }
      }
    }
  }).valueType("select", {
    paramType: {
      options: z.array(z.object({ value: z.string(), displayName: z.string() }).or(z.string()))
    },
    schemaMaker: ({ options }) => {
      const allowedValues = new Set(options.map((option) => typeof option === "string" ? option : option.value));
      return z.string().refine((value) => allowedValues.has(value));
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value) => {
      return value;
    }
  }).valueType("boolean", {
    paramType: {},
    schemaMaker: () => {
      return z.boolean();
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value) => {
      return value ? "ON" : "OFF";
    }
  }).valueType("stringArray", {
    paramType: {
      maxNumItems: z.number().optional(),
      /**
       * Whether to allow empty strings in the array. Default is false.
       */
      allowEmptyStrings: z.boolean().optional()
    },
    schemaMaker: ({ maxNumItems, allowEmptyStrings }) => {
      let stringSchema = z.string();
      if (!allowEmptyStrings) {
        stringSchema = stringSchema.min(1);
      }
      let schema = z.array(stringSchema);
      if (maxNumItems !== void 0) {
        schema = schema.max(maxNumItems);
      }
      return schema;
    },
    effectiveEquals: (a, b) => {
      return a.length === b.length && a.every((v, i) => v === b[i]);
    },
    stringify: (value, _typeParam, { t, desiredLength }) => {
      const quoted = value.map((v) => quoteString(v));
      if (quoted.length === 0) {
        return t("config:customInputs.stringArray.empty", "<Empty>");
      }
      if (quoted.length <= 2 || desiredLength === void 0) {
        return quoted.join(", ");
      }
      let currentLength = quoted[0].length + quoted[1].length + 6;
      for (let i = 1; i < quoted.length - 1; i++) {
        currentLength += quoted[i].length + 2;
        if (currentLength >= desiredLength) {
          return quoted.slice(0, i).join(", ") + ", ..." + quoted[quoted.length - 1];
        }
      }
      return quoted.join(", ");
    }
  }).valueType("numericArray", {
    paramType: {
      min: z.number().optional(),
      max: z.number().optional(),
      int: z.boolean().optional()
    },
    schemaMaker: ({ min, max, int }) => {
      let numberSchema = z.number();
      if (min !== void 0) {
        numberSchema = numberSchema.min(min);
      }
      if (max !== void 0) {
        numberSchema = numberSchema.max(max);
      }
      if (int) {
        numberSchema = numberSchema.int();
      }
      return z.array(numberSchema);
    },
    effectiveEquals: (a, b) => {
      return a.length === b.length && a.every((v, i) => v === b[i]);
    },
    stringify: (value, { int }) => {
      return value.map((v) => int ? String(Math.round(v)) : String(v)).join(", ");
    }
  }).valueType("contextOverflowPolicy", {
    paramType: {},
    schemaMaker: () => {
      return llmContextOverflowPolicySchema;
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value, _typeParam, { t }) => {
      switch (value) {
        case "stopAtLimit":
          return t("config:customInputs.contextOverflowPolicy.stopAtLimit", "Stop At Limit");
        case "truncateMiddle":
          return t("config:customInputs.contextOverflowPolicy.truncateMiddle", "Truncate Middle");
        case "rollingWindow":
          return t("config:customInputs.contextOverflowPolicy.rollingWindow", "Rolling Window");
      }
    }
  }).valueType("context", {
    paramType: {},
    schemaMaker: () => {
      return z.array(llmContextReferenceSchema);
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("contextLength", {
    paramType: {
      max: z.number().optional()
    },
    schemaMaker: () => {
      return z.number().int().positive();
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value, { max }) => {
      if (max === void 0) {
        return String(value);
      }
      return `${value}/${max}`;
    }
  }).valueType("modelIdentifier", {
    paramType: {
      domain: z.array(modelDomainTypeSchema).optional()
    },
    schemaMaker: () => {
      return z.string();
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value) => {
      return value;
    }
  }).valueType("llmPromptTemplate", {
    paramType: {},
    schemaMaker: () => {
      return llmPromptTemplateSchema;
    },
    effectiveEquals: (a, b) => {
      if (a.type !== b.type) {
        return false;
      }
      if (a.stopStrings.length !== b.stopStrings.length) {
        return false;
      }
      if (!a.stopStrings.every((v, i) => v === b.stopStrings[i])) {
        return false;
      }
      switch (a.type) {
        case "jinja":
          return a.jinjaPromptTemplate?.bosToken === b.jinjaPromptTemplate?.bosToken && a.jinjaPromptTemplate?.eosToken === b.jinjaPromptTemplate?.eosToken && a.jinjaPromptTemplate?.template === b.jinjaPromptTemplate?.template;
        case "manual":
          return a.manualPromptTemplate?.beforeSystem === b.manualPromptTemplate?.beforeSystem && a.manualPromptTemplate?.afterSystem === b.manualPromptTemplate?.afterSystem && a.manualPromptTemplate?.beforeUser === b.manualPromptTemplate?.beforeUser && a.manualPromptTemplate?.afterUser === b.manualPromptTemplate?.afterUser && a.manualPromptTemplate?.beforeAssistant === b.manualPromptTemplate?.beforeAssistant && a.manualPromptTemplate?.afterAssistant === b.manualPromptTemplate?.afterAssistant;
        default: {
          const exhaustiveCheck = a.type;
          throw new Error("Unknown template type: " + exhaustiveCheck);
        }
      }
    },
    stringify: (value, _typeParam, { t, desiredLength }) => {
      switch (value.type) {
        case "jinja": {
          const lead = `${t("config:customInputs.llmPromptTemplate.type", "Type")}: ${t("config:customInputs.llmPromptTemplate.types.jinja/label", "Jinja")}
${t("config:customInputs.llmPromptTemplate.jinja.bosToken/label", "BOS Token")}: ${value.jinjaPromptTemplate?.bosToken}
${t("config:customInputs.llmPromptTemplate.jinja.eosToken/label", "EOS Token")}: ${value.jinjaPromptTemplate?.eosToken}
${t("config:customInputs.llmPromptTemplate.jinja.template/label", "Template")}: `;
          if (desiredLength === void 0) {
            return lead + value.jinjaPromptTemplate?.template;
          }
          const currentLength = lead.length;
          const remainingLength = Math.min(100, desiredLength - currentLength);
          const template = value.jinjaPromptTemplate?.template ?? "";
          if (template.length <= remainingLength) {
            return lead + template;
          }
          return lead + template.slice(0, Math.floor(remainingLength / 2)) + "..." + template.slice(-Math.ceil(remainingLength / 2));
        }
        case "manual": {
          return `${t("config:customInputs.llmPromptTemplate.type", "Type")}: ${t("config:customInputs.llmPromptTemplate.types.manual/label", "Manual")}
${t("config:customInputs.llmPromptTemplate.manual.subfield.beforeSystem/label", "Before System")}: ${quoteStringWithManualEscape(value.manualPromptTemplate?.beforeSystem)}
${t("config:customInputs.llmPromptTemplate.manual.subfield.afterSystem/label", "After System")}: ${quoteStringWithManualEscape(value.manualPromptTemplate?.afterSystem)}
${t("config:customInputs.llmPromptTemplate.manual.subfield.beforeUser/label", "Before User")}: ${quoteStringWithManualEscape(value.manualPromptTemplate?.beforeUser)}
${t("config:customInputs.llmPromptTemplate.manual.subfield.afterUser/label", "After User")}: ${quoteStringWithManualEscape(value.manualPromptTemplate?.afterUser)}
${t("config:customInputs.llmPromptTemplate.manual.subfield.beforeAssistant/label", "Before Assistant")}: ${quoteStringWithManualEscape(value.manualPromptTemplate?.beforeAssistant)}
${t("config:customInputs.llmPromptTemplate.manual.subfield.afterAssistant/label", "After Assistant")}: ${quoteStringWithManualEscape(value.manualPromptTemplate?.afterAssistant)}`;
        }
        default: {
          const exhaustiveCheck = value.type;
          throw new Error("Unknown template type: " + exhaustiveCheck);
        }
      }
    }
  }).valueType("llmReasoningParsing", {
    paramType: {},
    schemaMaker: () => {
      return llmReasoningParsingSchema;
    },
    effectiveEquals: (a, b) => {
      return a.startString === b.startString && a.endString === b.endString;
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("llamaStructuredOutput", {
    paramType: {},
    schemaMaker: () => {
      return llmStructuredPredictionSettingSchema;
    },
    effectiveEquals: (a, b) => {
      if (a.type === "json" && b.type === "json") {
        return deepEquals(a, b);
      } else if (a.type === "none" && b.type === "none") {
        return true;
      } else {
        return false;
      }
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("speculativeDecodingDraftModel", {
    paramType: {},
    schemaMaker: () => {
      return z.string();
    },
    effectiveEquals: (a, b) => {
      return a === b;
    },
    stringify: (value, _typeParam, { t }) => {
      if (value === "") {
        return t("config:customInputs.speculativeDecodingDraftModel.off", "OFF");
      }
      return value;
    }
  }).valueType("toolUse", {
    paramType: {},
    schemaMaker: () => {
      return llmToolUseSettingSchema;
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("llamaAccelerationOffloadRatio", {
    paramType: {
      numLayers: z.number().optional()
    },
    schemaMaker: () => {
      return llmLlamaAccelerationOffloadRatioSchema;
    },
    effectiveEquals: (a, b) => {
      const ratioA = a === "max" ? 1 : a === "off" ? 0 : a;
      const ratioB = b === "max" ? 1 : b === "off" ? 0 : b;
      return ratioA === ratioB;
    },
    stringify: (value, { numLayers }, { t }) => {
      if (value === "max" || value === 1) {
        const label = t("config:customInputs.llamaAccelerationOffloadRatio.max", "MAX");
        if (numLayers !== 0) {
          return `${label} (${numLayers})`;
        }
        return label;
      }
      if (value === "off" || value === 0) {
        return t("config:customInputs.llamaAccelerationOffloadRatio.off", "OFF");
      }
      if (numLayers !== void 0) {
        return String(Math.round(numLayers * value));
      }
      return (value * 100).toFixed(0) + "%";
    }
  }).valueType("llamaMirostatSampling", {
    paramType: {},
    schemaMaker: () => {
      return llmLlamaMirostatSamplingConfigSchema;
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("llamaLogitBias", {
    paramType: {},
    schemaMaker: () => {
      return llmLlamaLogitBiasConfigSchema;
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("llamaCacheQuantizationType", {
    paramType: {},
    schemaMaker: () => {
      return z.object({
        checked: z.boolean(),
        value: llmLlamaCacheQuantizationTypeSchema
      });
    },
    effectiveEquals: (a, b) => {
      if (a.checked !== b.checked) {
        return false;
      }
      if (!a.checked) {
        return true;
      }
      return a.value === b.value;
    },
    stringify: (value, _typeParam, { t }) => {
      if (!value.checked) {
        return t("config:customInputs.llamaCacheQuantizationType.off", "OFF");
      }
      return value.value;
    }
  }).valueType("mlxKvCacheQuantizationType", {
    paramType: {},
    schemaMaker: () => {
      return llmMlxKvCacheQuantizationSchema;
    },
    effectiveEquals: (a, b) => {
      if (a.enabled !== b.enabled) {
        return false;
      }
      if (!a.enabled) {
        return true;
      }
      return a.bits === b.bits && a.groupSize === b.groupSize && a.quantizedStart === b.quantizedStart;
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("retrievalChunkingMethod", {
    paramType: {},
    schemaMaker: () => {
      return retrievalChunkingMethodSchema;
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("envVars", {
    paramType: {},
    schemaMaker: () => {
      return allowableEnvVarsSchema;
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).valueType("gpuSplitConfig", {
    paramType: {},
    schemaMaker: () => {
      return gpuSplitConfigSchema;
    },
    effectiveEquals: (a, b) => {
      return deepEquals(a, b);
    },
    stringify: (value) => {
      return JSON.stringify(value, null, 2);
    }
  }).build();
  var globalConfigSchematics = new KVConfigSchematicsBuilder(kvValueTypesLibrary).field("envVars", "envVars", {}, {}).scope("llm.prediction", (builder) => builder.field("temperature", "numeric", {
    min: 0,
    step: 0.01,
    slider: { min: 0, max: 1, step: 0.01 },
    precision: 2,
    shortHand: "temp"
  }, 0.8).field("contextOverflowPolicy", "contextOverflowPolicy", {}, "truncateMiddle").field("maxPredictedTokens", "checkboxNumeric", { min: 1, int: true }, { checked: false, value: 1e3 }).field("stopStrings", "stringArray", {}, []).field("toolCallStopStrings", "stringArray", {}, []).field("structured", "llamaStructuredOutput", {}, { type: "none" }).scope("speculativeDecoding", (builder2) => builder2.field("draftModel", "speculativeDecodingDraftModel", {
    modelCentric: true
  }, "").field("minDraftLengthToConsider", "numeric", {
    modelCentric: true,
    min: 0,
    int: true,
    slider: { min: 0, max: 10, step: 1 }
  }, 0).field("numReuseTokens", "numeric", { modelCentric: true, min: 1, int: true }, 256).field("minContinueDraftingProbability", "numeric", {
    modelCentric: true,
    min: 0,
    max: 1,
    step: 0.01,
    precision: 2,
    slider: { min: 0, max: 1, step: 0.01 }
  }, 0.75).field("maxTokensToDraft", "numeric", { modelCentric: true, min: 1, int: true, slider: { min: 10, max: 30, step: 1 } }, 16).field("numDraftTokensExact", "numeric", {
    modelCentric: true,
    min: 1,
    int: true,
    slider: { min: 1, max: 10, step: 1 }
  }, 2)).field("tools", "toolUse", {}, { type: "none" }).field("promptTemplate", "llmPromptTemplate", { modelCentric: true }, {
    type: "manual",
    manualPromptTemplate: {
      beforeSystem: "Instruct: ",
      afterSystem: "\n",
      beforeAssistant: "AI: ",
      afterAssistant: "\n",
      beforeUser: "Human: ",
      afterUser: "\n"
    },
    stopStrings: []
  }).field("systemPrompt", "string", { isParagraph: true }, "").field("seed", "checkboxNumeric", { int: true, min: -1, uncheckedHint: "config:seedUncheckedHint" }, { checked: false, value: -1 }).field("contextPrefill", "context", {}, []).field("topKSampling", "numeric", { min: -1, max: 500, int: true }, 40).field("repeatPenalty", "checkboxNumeric", { min: -1, step: 0.01 }, { checked: true, value: 1.1 }).field("minPSampling", "checkboxNumeric", { min: 0, max: 1, step: 0.01, precision: 2, slider: { min: 0, max: 1, step: 0.01 } }, { checked: true, value: 0.05 }).field("topPSampling", "checkboxNumeric", { min: 0, max: 1, step: 0.01, precision: 2, slider: { min: 0, max: 1, step: 0.01 } }, { checked: true, value: 0.95 }).field("logProbs", "checkboxNumeric", { min: 0, max: 100, int: true }, { checked: false, value: 0 }).scope("reasoning", (builder2) => builder2.field("parsing", "llmReasoningParsing", {}, {
    enabled: true,
    startString: "<think>",
    endString: "</think>"
  })).scope("llama", (builder2) => builder2.field("cpuThreads", "numeric", { min: 1, int: true }, 4).field("frequencyPenalty", "checkboxNumeric", { precision: 2 }, { checked: false, value: 0 }).field("xtcProbability", "checkboxNumeric", { min: 0, max: 1, step: 0.01, precision: 2, slider: { min: 0, max: 1, step: 0.01 } }, { checked: false, value: 0.5 }).field("xtcThreshold", "checkboxNumeric", { min: 0, max: 1, step: 0.01, precision: 2, slider: { min: 0, max: 0.5, step: 0.01 } }, { checked: false, value: 0.1 }).field("presencePenalty", "checkboxNumeric", { precision: 2 }, { checked: false, value: 0 }).field("mirostatSampling", "llamaMirostatSampling", {}, {
    // Disabled by default
    version: 0,
    learningRate: 0.1,
    targetEntropy: 5
  }).field("tailFreeSampling", "checkboxNumeric", { min: 0, max: 1, step: 0.01, precision: 2, slider: { min: 0, max: 1, step: 0.01 } }, { checked: false, value: 0.95 }).field("locallyTypicalSampling", "checkboxNumeric", { min: 0, max: 1, step: 0.01, precision: 2, slider: { min: 0, max: 1, step: 0.01 } }, { checked: false, value: 0.9 }).field("logitBias", "llamaLogitBias", {}, []))).scope("llm.load", (builder) => builder.field("contextLength", "contextLength", {
    machineDependent: true
  }, 2048).field("numExperts", "numeric", { min: 0, int: true }, 0).field("seed", "checkboxNumeric", { int: true, min: -1, uncheckedHint: "config:seedUncheckedHint" }, { checked: false, value: -1 }).scope("llama", (builder2) => builder2.scope("acceleration", (builder3) => builder3.field("offloadRatio", "llamaAccelerationOffloadRatio", { machineDependent: true }, "max")).field("cpuThreadPoolSize", "numeric", { min: 1, machineDependent: true }, 4).field("evalBatchSize", "numeric", { min: 1, int: true }, 512).field("flashAttention", "boolean", { isExperimental: true, warning: "config:flashAttentionWarning" }, false).field("ropeFrequencyBase", "checkboxNumeric", { min: 0, uncheckedHint: "config:ropeFrequencyBaseUncheckedHint" }, { checked: false, value: 0 }).field("ropeFrequencyScale", "checkboxNumeric", { min: 0, uncheckedHint: "config:ropeFrequencyScaleUncheckedHint" }, { checked: false, value: 0 }).field("keepModelInMemory", "boolean", {}, true).field("useFp16ForKVCache", "boolean", {}, true).field("tryMmap", "boolean", {}, true).field("kCacheQuantizationType", "llamaCacheQuantizationType", { isExperimental: true }, { checked: false, value: "f16" }).field("vCacheQuantizationType", "llamaCacheQuantizationType", { isExperimental: true, warning: "config:llamaKvCacheQuantizationWarning" }, { checked: false, value: "f16" })).scope("mlx", (builder2) => builder2.field("kvCacheQuantization", "mlxKvCacheQuantizationType", { isExperimental: true }, { enabled: false, bits: 8, groupSize: 64, quantizedStart: 5e3 }))).scope("load", (builder) => builder.field("gpuSplitConfig", "gpuSplitConfig", {}, defaultGPUSplitConfig).field("gpuStrictVramCap", "boolean", {}, false)).scope("embedding.load", (builder) => builder.field("contextLength", "contextLength", { machineDependent: true }, 2048).field("seed", "checkboxNumeric", { int: true, min: -1, uncheckedHint: "config:seedUncheckedHint" }, { checked: false, value: -1 }).scope("llama", (builder2) => builder2.scope("acceleration", (builder3) => builder3.field("offloadRatio", "llamaAccelerationOffloadRatio", { machineDependent: true }, "max")).field("evalBatchSize", "numeric", { min: 1, int: true }, 512).field("ropeFrequencyBase", "checkboxNumeric", { min: 0, uncheckedHint: "config:ropeFrequencyBaseUncheckedHint" }, { checked: false, value: 0 }).field("ropeFrequencyScale", "checkboxNumeric", { min: 0, uncheckedHint: "config:ropeFrequencyScaleUncheckedHint" }, { checked: false, value: 0 }).field("keepModelInMemory", "boolean", {}, true).field("tryMmap", "boolean", {}, true))).scope("retrieval", (builder) => builder.field("databaseFile", "string", { machineDependent: true }, "").field("chunkingMethod", "retrievalChunkingMethod", {}, {
    type: "recursive-v1",
    chunkSize: 512,
    chunkOverlap: 100
  }).field("limit", "numeric", { min: 1, int: true }, 5).field("embeddingModel", "modelIdentifier", { domain: ["embedding"] }, "")).build();
  var llmPredictionConfigSchematics = globalConfigSchematics.scoped("llm.prediction");
  var llmSharedPredictionConfigSchematics = llmPredictionConfigSchematics.sliced("temperature", "maxPredictedTokens", "promptTemplate", "systemPrompt", "seed", "contextPrefill", "tools", "reasoning.*");
  llmSharedPredictionConfigSchematics.union(llmPredictionConfigSchematics.sliced("llama.*", "contextOverflowPolicy", "stopStrings", "toolCallStopStrings", "structured", "topKSampling", "repeatPenalty", "minPSampling", "topPSampling", "logProbs", "speculativeDecoding.draftModel", "speculativeDecoding.minContinueDraftingProbability", "speculativeDecoding.minDraftLengthToConsider", "speculativeDecoding.maxTokensToDraft", "speculativeDecoding.numReuseTokens"));
  llmSharedPredictionConfigSchematics.union(llmPredictionConfigSchematics.sliced("mlx.*", "contextOverflowPolicy", "stopStrings", "toolCallStopStrings", "structured", "repeatPenalty", "minPSampling", "topPSampling", "speculativeDecoding.draftModel", "speculativeDecoding.numDraftTokensExact"));
  llmSharedPredictionConfigSchematics.union(llmPredictionConfigSchematics.sliced("transformers.*"));
  llmSharedPredictionConfigSchematics.union(llmPredictionConfigSchematics.sliced("onnx.*", "repeatPenalty", "topPSampling", "topKSampling"));
  var llmLoadSchematics = globalConfigSchematics.scoped("llm.load").union(globalConfigSchematics.sliced("envVars"));
  var llmSharedLoadConfigSchematics = llmLoadSchematics.sliced("contextLength", "seed", "envVars");
  var llamaLoadConfigSchematics = globalConfigSchematics.sliced("llama.load.*", "load.*");
  var llmLlamaLoadConfigSchematics = llmSharedLoadConfigSchematics.union(llmLoadSchematics.sliced("llama.*", "load.*")).union(llamaLoadConfigSchematics);
  llmSharedLoadConfigSchematics.union(llmLoadSchematics.sliced("mlx.*"));
  llmSharedLoadConfigSchematics.union(llmLoadSchematics.sliced("transformers.*"));
  llmSharedLoadConfigSchematics.union(llmLoadSchematics.sliced("onnx.*"));
  var llmLlamaMoeAdditionalLoadConfigSchematics = llmLoadSchematics.sliced("numExperts");
  var llmLlamaMoeLoadConfigSchematics = llmLlamaLoadConfigSchematics.union(llmLlamaMoeAdditionalLoadConfigSchematics);
  var embeddingLoadSchematics = globalConfigSchematics.scoped("embedding.load").union(globalConfigSchematics.sliced("load.*"));
  var embeddingSharedLoadConfigSchematics = embeddingLoadSchematics.sliced("contextLength", "seed");
  var retrievalSchematics = globalConfigSchematics.scoped("retrieval");
  var embeddingLlamaLoadConfigSchematics = embeddingSharedLoadConfigSchematics.union(embeddingLoadSchematics.sliced("llama.*")).union(llamaLoadConfigSchematics);
  new KVConfigSchematicsBuilder(kvValueTypesLibrary).build();
  function maybeFalseNumberToCheckboxNumeric(maybeFalseNumber, valueWhenUnchecked) {
    if (maybeFalseNumber === void 0) {
      return void 0;
    }
    if (maybeFalseNumber === false) {
      return { checked: false, value: valueWhenUnchecked };
    }
    return { checked: true, value: maybeFalseNumber };
  }
  function kvConfigToLLMPredictionConfig(config) {
    const result = {};
    const parsed = globalConfigSchematics.parsePartial(config);
    const maxPredictedTokens = parsed.get("llm.prediction.maxPredictedTokens");
    if (maxPredictedTokens !== void 0) {
      result.maxTokens = maxPredictedTokens.checked ? maxPredictedTokens.value : false;
    }
    const temperature = parsed.get("llm.prediction.temperature");
    if (temperature !== void 0) {
      result.temperature = temperature;
    }
    const stopStrings = parsed.get("llm.prediction.stopStrings");
    if (stopStrings !== void 0) {
      result.stopStrings = stopStrings;
    }
    const toolCallStopStrings = parsed.get("llm.prediction.toolCallStopStrings");
    if (toolCallStopStrings !== void 0) {
      result.toolCallStopStrings = toolCallStopStrings;
    }
    const contextOverflowPolicy = parsed.get("llm.prediction.contextOverflowPolicy");
    if (contextOverflowPolicy !== void 0) {
      result.contextOverflowPolicy = contextOverflowPolicy;
    }
    const structured = parsed.get("llm.prediction.structured");
    if (structured !== void 0) {
      result.structured = structured;
    }
    const tools = parsed.get("llm.prediction.tools");
    if (tools !== void 0) {
      result.rawTools = tools;
    }
    const topKSampling = parsed.get("llm.prediction.topKSampling");
    if (topKSampling !== void 0) {
      result.topKSampling = topKSampling;
    }
    const repeatPenalty = parsed.get("llm.prediction.repeatPenalty");
    if (repeatPenalty !== void 0) {
      result.repeatPenalty = repeatPenalty.checked ? repeatPenalty.value : false;
    }
    const minPSampling = parsed.get("llm.prediction.minPSampling");
    if (minPSampling !== void 0) {
      result.minPSampling = minPSampling.checked ? minPSampling.value : false;
    }
    const topPSampling = parsed.get("llm.prediction.topPSampling");
    if (topPSampling !== void 0) {
      result.topPSampling = topPSampling.checked ? topPSampling.value : false;
    }
    const xtcProbability = parsed.get("llm.prediction.llama.xtcProbability");
    if (xtcProbability !== void 0) {
      result.xtcProbability = xtcProbability.checked ? xtcProbability.value : false;
    }
    const xtcThreshold = parsed.get("llm.prediction.llama.xtcThreshold");
    if (xtcThreshold !== void 0) {
      result.xtcThreshold = xtcThreshold.checked ? xtcThreshold.value : false;
    }
    const logProbs = parsed.get("llm.prediction.logProbs");
    if (logProbs !== void 0) {
      result.logProbs = logProbs.checked ? logProbs.value : false;
    }
    const cpuThreads = parsed.get("llm.prediction.llama.cpuThreads");
    if (cpuThreads !== void 0) {
      result.cpuThreads = cpuThreads;
    }
    const promptTemplate = parsed.get("llm.prediction.promptTemplate");
    if (promptTemplate !== void 0) {
      result.promptTemplate = promptTemplate;
    }
    const speculativeDecodingDraftModel = parsed.get("llm.prediction.speculativeDecoding.draftModel");
    if (speculativeDecodingDraftModel !== void 0) {
      result.draftModel = speculativeDecodingDraftModel;
    }
    const speculativeDecodingDraftTokensExact = parsed.get("llm.prediction.speculativeDecoding.numDraftTokensExact");
    if (speculativeDecodingDraftTokensExact !== void 0) {
      result.speculativeDecodingNumDraftTokensExact = speculativeDecodingDraftTokensExact;
    }
    const speculativeDecodingMinContinueDraftingProbability = parsed.get("llm.prediction.speculativeDecoding.minContinueDraftingProbability");
    if (speculativeDecodingMinContinueDraftingProbability !== void 0) {
      result.speculativeDecodingMinContinueDraftingProbability = speculativeDecodingMinContinueDraftingProbability;
    }
    const speculativeDecodingMinDraftLengthToConsider = parsed.get("llm.prediction.speculativeDecoding.minDraftLengthToConsider");
    if (speculativeDecodingMinDraftLengthToConsider !== void 0) {
      result.speculativeDecodingMinDraftLengthToConsider = speculativeDecodingMinDraftLengthToConsider;
    }
    const reasoningParsing = parsed.get("llm.prediction.reasoning.parsing");
    if (reasoningParsing !== void 0) {
      result.reasoningParsing = reasoningParsing;
    }
    return result;
  }
  function llmPredictionConfigToKVConfig(config) {
    return llmPredictionConfigSchematics.buildPartialConfig({
      "temperature": config.temperature,
      "contextOverflowPolicy": config.contextOverflowPolicy,
      "maxPredictedTokens": maybeFalseNumberToCheckboxNumeric(config.maxTokens, 1),
      "stopStrings": config.stopStrings,
      "toolCallStopStrings": config.toolCallStopStrings,
      "structured": config.structured,
      "tools": config.rawTools,
      "topKSampling": config.topKSampling,
      "repeatPenalty": maybeFalseNumberToCheckboxNumeric(config.repeatPenalty, 1.1),
      "minPSampling": maybeFalseNumberToCheckboxNumeric(config.minPSampling, 0.05),
      "topPSampling": maybeFalseNumberToCheckboxNumeric(config.topPSampling, 0.95),
      "llama.xtcProbability": maybeFalseNumberToCheckboxNumeric(config.xtcProbability, 0),
      "llama.xtcThreshold": maybeFalseNumberToCheckboxNumeric(config.xtcThreshold, 0),
      "logProbs": maybeFalseNumberToCheckboxNumeric(config.logProbs, 0),
      "llama.cpuThreads": config.cpuThreads,
      "promptTemplate": config.promptTemplate,
      "speculativeDecoding.draftModel": config.draftModel,
      "speculativeDecoding.numDraftTokensExact": config.speculativeDecodingNumDraftTokensExact,
      "speculativeDecoding.minDraftLengthToConsider": config.speculativeDecodingMinDraftLengthToConsider,
      "speculativeDecoding.minContinueDraftingProbability": config.speculativeDecodingMinContinueDraftingProbability,
      "reasoning.parsing": config.reasoningParsing
    });
  }
  var toolBaseSchema = z.object({
    name: z.string(),
    description: z.string()
  });
  var functionToolSchema = toolBaseSchema.extend({
    type: z.literal("function"),
    parametersSchema: zodSchemaSchema,
    implementation: z.function()
  });
  z.discriminatedUnion("type", [functionToolSchema]);
  function functionToolToLLMTool(tool) {
    return {
      type: "function",
      function: {
        name: tool.name,
        description: tool.description,
        parameters: zodToJsonSchema(tool.parametersSchema)
      }
    };
  }
  function toolToLLMTool(tool) {
    const type = tool.type;
    switch (type) {
      case "function":
        return functionToolToLLMTool(tool);
      default: {
        const exhaustiveCheck = type;
        throw new Error(`Unhandled type: ${exhaustiveCheck}`);
      }
    }
  }
  var BackendInterface = class {
    constructor() {
      this.unhandledEndpoints = /* @__PURE__ */ new Set();
      this.existingEndpointNames = /* @__PURE__ */ new Set();
      this.rpcEndpoints = /* @__PURE__ */ new Map();
      this.channelEndpoints = /* @__PURE__ */ new Map();
      this.signalEndpoints = /* @__PURE__ */ new Map();
      this.writableSignalEndpoints = /* @__PURE__ */ new Map();
    }
    withContextType() {
      return this;
    }
    assertEndpointNameNotExists(endpointName) {
      if (this.existingEndpointNames.has(endpointName)) {
        throw new Error(`Endpoint with name ${endpointName} already exists`);
      }
    }
    /**
     * Register an Rpc endpoint.
     */
    addRpcEndpoint(endpointName, { parameter, returns, serialization = "raw" }) {
      this.assertEndpointNameNotExists(endpointName);
      this.existingEndpointNames.add(endpointName);
      this.rpcEndpoints.set(endpointName, {
        name: endpointName,
        parameter,
        returns,
        serialization,
        handler: null
      });
      return this;
    }
    addChannelEndpoint(endpointName, { creationParameter, toServerPacket, toClientPacket, serialization = "raw" }) {
      this.assertEndpointNameNotExists(endpointName);
      this.existingEndpointNames.add(endpointName);
      this.channelEndpoints.set(endpointName, {
        name: endpointName,
        creationParameter,
        toServerPacket,
        toClientPacket,
        serialization,
        handler: null
      });
      return this;
    }
    addSignalEndpoint(endpointName, { creationParameter, signalData, serialization = "raw" }) {
      this.assertEndpointNameNotExists(endpointName);
      this.existingEndpointNames.add(endpointName);
      this.signalEndpoints.set(endpointName, {
        name: endpointName,
        creationParameter,
        signalData,
        serialization,
        handler: null
      });
      return this;
    }
    addWritableSignalEndpoint(endpointName, { creationParameter, signalData, serialization = "raw" }) {
      this.assertEndpointNameNotExists(endpointName);
      this.existingEndpointNames.add(endpointName);
      this.writableSignalEndpoints.set(endpointName, {
        name: endpointName,
        creationParameter,
        signalData,
        serialization,
        handler: null
      });
      return this;
    }
    /**
     * Adds a handler for an Rpc endpoint.
     *
     * @param endpointName - The name of the endpoint.
     * @param handler - The handler function. Will be called when the endpoint is invoked. When
     * called, the first parameter is the context, and the second parameter is the "parameter" for the
     * RPC call. Can return a value or a promise that resolves to the result.
     */
    handleRpcEndpoint(endpointName, handler) {
      const endpoint = this.rpcEndpoints.get(endpointName);
      if (endpoint === void 0) {
        throw new Error(`No Rpc endpoint with name ${endpointName}`);
      }
      if (endpoint.handler !== null) {
        throw new Error(`Rpc endpoint with name ${endpointName} already has a handler`);
      }
      endpoint.handler = handler;
      this.unhandledEndpoints.delete(endpointName);
    }
    /**
     * Adds a handler for a channel endpoint.
     *
     * @param endpointName - The name of the endpoint.
     * @param handler - The handler function. Will be called when the client creates a channel for
     * this endpoint. When called, the first parameter is the context, the second parameter is the
     * "creationParameter" for the channel, and the third parameter is a channel object that can be
     * used to send and receive messages from the client.
     *
     * Must return a promise. Once that promise is settled, the channel will be closed.
     */
    handleChannelEndpoint(endpointName, handler) {
      const endpoint = this.channelEndpoints.get(endpointName);
      if (endpoint === void 0) {
        throw new Error(`No channel endpoint with name ${endpointName}`);
      }
      if (endpoint.handler !== null) {
        throw new Error(`Channel endpoint with name ${endpointName} already has a handler`);
      }
      endpoint.handler = handler;
      this.unhandledEndpoints.delete(endpointName);
    }
    /**
     * Adds a handler for a signal endpoint.
     *
     * @param endpointName - The name of the endpoint.
     * @param handler - The handler function. Will be called when the client creates a signal, and at
     * least one subscriber is attached to that signal. When called, the first parameter is the
     * context, and the second parameter is the "creationParameter" for the signal. This method should
     * return a SignalLike, or a promise that resolves to a SignalLike.
     *
     * Note: There is no 1-to-1 correlation between the signal on the client side and the number of
     * times this handler is called. Every time the number of client subscribers changes from 0 to 1,
     * this handler will be called. Every time the number of client subscribers changes from 1 to 0,
     * the signal returned from this handler will be unsubscribed.
     *
     * Caution: Do NOT create new subscriptions that don't self-terminate in this handler, as it will
     * cause memory leaks. That is, either:
     *
     * - Return a signal that already exists
     * - Create and return a LazySignal
     */
    handleSignalEndpoint(endpointName, handler) {
      const endpoint = this.signalEndpoints.get(endpointName);
      if (endpoint === void 0) {
        throw new Error(`No signal endpoint with name ${endpointName}`);
      }
      if (endpoint.handler !== null) {
        throw new Error(`Signal endpoint with name ${endpointName} already has a handler`);
      }
      endpoint.handler = handler;
      this.unhandledEndpoints.delete(endpointName);
    }
    /**
     * Adds a handler for a writable signal endpoint.
     *
     * @param endpointName - The name of the endpoint.
     * @param handler - The handler function. Will be called when the client creates a writable
     * signal, and at least one subscriber is attached to that signal. When called, the first
     * parameter is the context, and the second parameter is the "creationParameter" for the signal.
     * This method should return a tuple of the signal and an update function. The update function
     * should be called with the new data, patches, and tags to update the signal.
     *
     * Note: There is no 1-to-1 correlation between the signal on the client side and the number of
     * times this handler is called. Every time the number of client subscribers changes from 0 to 1,
     * this handler will be called. Every time the number of client subscribers changes from 1 to 0
     * the signal returned from this handler will be unsubscribed.
     *
     * Caution: Do NOT create new subscriptions that don't self-terminate in this handler, as it will
     * cause memory leaks. That is, either:
     *
     * - Return a signal that already exists
     * - Create and return a LazySignal
     */
    handleWritableSignalEndpoint(endpointName, handler) {
      const endpoint = this.writableSignalEndpoints.get(endpointName);
      if (endpoint === void 0) {
        throw new Error(`No writable signal endpoint with name ${endpointName}`);
      }
      if (endpoint.handler !== null) {
        throw new Error(`Writable signal endpoint with name ${endpointName} already has a handler`);
      }
      endpoint.handler = handler;
      this.unhandledEndpoints.delete(endpointName);
    }
    assertAllEndpointsHandled() {
      if (this.unhandledEndpoints.size > 0) {
        throw new Error(`The following endpoints were not handled: ${Array.from(this.unhandledEndpoints).join(", ")}`);
      }
    }
    getRpcEndpoint(endpointName) {
      return this.rpcEndpoints.get(endpointName);
    }
    getAllRpcEndpoints() {
      return [...this.rpcEndpoints.values()];
    }
    getChannelEndpoint(endpointName) {
      return this.channelEndpoints.get(endpointName);
    }
    getAllChannelEndpoints() {
      return [...this.channelEndpoints.values()];
    }
    getSignalEndpoint(endpointName) {
      return this.signalEndpoints.get(endpointName);
    }
    getAllSignalEndpoints() {
      return [...this.signalEndpoints.values()];
    }
    getWritableSignalEndpoint(endpointName) {
      return this.writableSignalEndpoints.get(endpointName);
    }
    getAllWritableSignalEndpoints() {
      return [...this.writableSignalEndpoints.values()];
    }
  };
  var ConnectionStatus;
  (function(ConnectionStatus2) {
    ConnectionStatus2["Connected"] = "CONNECTED";
    ConnectionStatus2["Errored"] = "ERRORED";
    ConnectionStatus2["Closed"] = "CLOSED";
  })(ConnectionStatus || (ConnectionStatus = {}));
  var logger = new SimpleLogger("Channel");
  var Channel = class _Channel {
    constructor(innerSend) {
      this.innerSend = innerSend;
      this.nextAckId = 0;
      this.waitingForAck = /* @__PURE__ */ new Map();
      this.receivedACK = (ackId) => {
        if (this.connectionStatus.get() !== ConnectionStatus.Connected) {
          logger.warn("Received ACK while in status", this.connectionStatus.get());
          return;
        }
        const waiting = this.waitingForAck.get(ackId);
        if (waiting === void 0) {
          logger.warn("Received ACK for a message that is no longer waiting for ACK, ackId =", ackId);
          return;
        }
        waiting.resolve();
        this.waitingForAck.delete(ackId);
      };
      this.receivedMessage = (packet) => {
        if (this.connectionStatus.get() !== ConnectionStatus.Connected) {
          logger.warn("Received message while in status", this.connectionStatus.get());
          return;
        }
        this.emitOnMessage(packet);
      };
      this.errored = (error) => {
        if (this.connectionStatus.get() !== ConnectionStatus.Connected) {
          logger.warn("Received error while in status", this.connectionStatus.get());
          return;
        }
        this.rejectAllWaitingForAck(error);
        this.setConnectionStatus(ConnectionStatus.Errored);
        this.emitOnError(error);
      };
      this.closed = () => {
        this.rejectAllWaitingForAck(new Error("Channel closed"));
        this.setConnectionStatus(ConnectionStatus.Closed);
        this.emitOnClose();
      };
      [this.onMessage, this.emitOnMessage] = BufferedEvent.create();
      [this.onError, this.emitOnError] = BufferedEvent.create();
      [this.onClose, this.emitOnClose] = BufferedEvent.create();
      [this.connectionStatus, this.setConnectionStatus] = Signal.create(ConnectionStatus.Connected);
    }
    rejectAllWaitingForAck(error) {
      const rejects = Array.from(this.waitingForAck.values()).map(({ reject }) => reject);
      this.waitingForAck.clear();
      for (const reject of rejects) {
        reject(error);
      }
    }
    static create(innerSend) {
      const channel = new _Channel(innerSend);
      return {
        channel,
        receivedAck: channel.receivedACK,
        receivedMessage: channel.receivedMessage,
        errored: channel.errored,
        closed: channel.closed
      };
    }
    send(packet) {
      this.innerSend(packet);
    }
    sendAndWaitForACK(packet) {
      const { promise, resolve, reject } = makePromise();
      const ackId = this.nextAckId;
      this.nextAckId++;
      this.waitingForAck.set(ackId, { resolve, reject });
      this.innerSend(packet, ackId);
      return promise;
    }
  };
  var DoubleIndexedKV = (
    /** @class */
    function() {
      function DoubleIndexedKV2() {
        this.keyToValue = /* @__PURE__ */ new Map();
        this.valueToKey = /* @__PURE__ */ new Map();
      }
      DoubleIndexedKV2.prototype.set = function(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
      };
      DoubleIndexedKV2.prototype.getByKey = function(key) {
        return this.keyToValue.get(key);
      };
      DoubleIndexedKV2.prototype.getByValue = function(value) {
        return this.valueToKey.get(value);
      };
      DoubleIndexedKV2.prototype.clear = function() {
        this.keyToValue.clear();
        this.valueToKey.clear();
      };
      return DoubleIndexedKV2;
    }()
  );
  var Registry = (
    /** @class */
    function() {
      function Registry2(generateIdentifier) {
        this.generateIdentifier = generateIdentifier;
        this.kv = new DoubleIndexedKV();
      }
      Registry2.prototype.register = function(value, identifier) {
        if (this.kv.getByValue(value)) {
          return;
        }
        if (!identifier) {
          identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
      };
      Registry2.prototype.clear = function() {
        this.kv.clear();
      };
      Registry2.prototype.getIdentifier = function(value) {
        return this.kv.getByValue(value);
      };
      Registry2.prototype.getValue = function(identifier) {
        return this.kv.getByKey(identifier);
      };
      return Registry2;
    }()
  );
  var __extends = globalThis && globalThis.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var ClassRegistry = (
    /** @class */
    function(_super) {
      __extends(ClassRegistry2, _super);
      function ClassRegistry2() {
        var _this = _super.call(this, function(c) {
          return c.name;
        }) || this;
        _this.classToAllowedProps = /* @__PURE__ */ new Map();
        return _this;
      }
      ClassRegistry2.prototype.register = function(value, options) {
        if (typeof options === "object") {
          if (options.allowProps) {
            this.classToAllowedProps.set(value, options.allowProps);
          }
          _super.prototype.register.call(this, value, options.identifier);
        } else {
          _super.prototype.register.call(this, value, options);
        }
      };
      ClassRegistry2.prototype.getAllowedProps = function(value) {
        return this.classToAllowedProps.get(value);
      };
      return ClassRegistry2;
    }(Registry)
  );
  var __read$3 = globalThis && globalThis.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  function valuesOfObj(record) {
    if ("values" in Object) {
      return Object.values(record);
    }
    var values = [];
    for (var key in record) {
      if (record.hasOwnProperty(key)) {
        values.push(record[key]);
      }
    }
    return values;
  }
  function find(record, predicate) {
    var values = valuesOfObj(record);
    if ("find" in values) {
      return values.find(predicate);
    }
    var valuesNotNever = values;
    for (var i = 0; i < valuesNotNever.length; i++) {
      var value = valuesNotNever[i];
      if (predicate(value)) {
        return value;
      }
    }
    return void 0;
  }
  function forEach(record, run) {
    Object.entries(record).forEach(function(_a2) {
      var _b = __read$3(_a2, 2), key = _b[0], value = _b[1];
      return run(value, key);
    });
  }
  function includes(arr, value) {
    return arr.indexOf(value) !== -1;
  }
  function findArr(record, predicate) {
    for (var i = 0; i < record.length; i++) {
      var value = record[i];
      if (predicate(value)) {
        return value;
      }
    }
    return void 0;
  }
  var CustomTransformerRegistry = (
    /** @class */
    function() {
      function CustomTransformerRegistry2() {
        this.transfomers = {};
      }
      CustomTransformerRegistry2.prototype.register = function(transformer) {
        this.transfomers[transformer.name] = transformer;
      };
      CustomTransformerRegistry2.prototype.findApplicable = function(v) {
        return find(this.transfomers, function(transformer) {
          return transformer.isApplicable(v);
        });
      };
      CustomTransformerRegistry2.prototype.findByName = function(name) {
        return this.transfomers[name];
      };
      return CustomTransformerRegistry2;
    }()
  );
  var getType$1 = function(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
  };
  var isUndefined = function(payload) {
    return typeof payload === "undefined";
  };
  var isNull = function(payload) {
    return payload === null;
  };
  var isPlainObject$1 = function(payload) {
    if (typeof payload !== "object" || payload === null)
      return false;
    if (payload === Object.prototype)
      return false;
    if (Object.getPrototypeOf(payload) === null)
      return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
  };
  var isEmptyObject = function(payload) {
    return isPlainObject$1(payload) && Object.keys(payload).length === 0;
  };
  var isArray$1 = function(payload) {
    return Array.isArray(payload);
  };
  var isString = function(payload) {
    return typeof payload === "string";
  };
  var isNumber = function(payload) {
    return typeof payload === "number" && !isNaN(payload);
  };
  var isBoolean = function(payload) {
    return typeof payload === "boolean";
  };
  var isRegExp = function(payload) {
    return payload instanceof RegExp;
  };
  var isMap = function(payload) {
    return payload instanceof Map;
  };
  var isSet = function(payload) {
    return payload instanceof Set;
  };
  var isSymbol = function(payload) {
    return getType$1(payload) === "Symbol";
  };
  var isDate = function(payload) {
    return payload instanceof Date && !isNaN(payload.valueOf());
  };
  var isError = function(payload) {
    return payload instanceof Error;
  };
  var isNaNValue = function(payload) {
    return typeof payload === "number" && isNaN(payload);
  };
  var isPrimitive = function(payload) {
    return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
  };
  var isBigint = function(payload) {
    return typeof payload === "bigint";
  };
  var isInfinite = function(payload) {
    return payload === Infinity || payload === -Infinity;
  };
  var isTypedArray = function(payload) {
    return ArrayBuffer.isView(payload) && !(payload instanceof DataView);
  };
  var isURL = function(payload) {
    return payload instanceof URL;
  };
  var escapeKey = function(key) {
    return key.replace(/\./g, "\\.");
  };
  var stringifyPath = function(path) {
    return path.map(String).map(escapeKey).join(".");
  };
  var parsePath = function(string) {
    var result = [];
    var segment = "";
    for (var i = 0; i < string.length; i++) {
      var char = string.charAt(i);
      var isEscapedDot = char === "\\" && string.charAt(i + 1) === ".";
      if (isEscapedDot) {
        segment += ".";
        i++;
        continue;
      }
      var isEndOfSegment = char === ".";
      if (isEndOfSegment) {
        result.push(segment);
        segment = "";
        continue;
      }
      segment += char;
    }
    var lastSegment = segment;
    result.push(lastSegment);
    return result;
  };
  var __assign$1 = globalThis && globalThis.__assign || function() {
    __assign$1 = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign$1.apply(this, arguments);
  };
  var __read$2 = globalThis && globalThis.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray$2 = globalThis && globalThis.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
      isApplicable,
      annotation,
      transform,
      untransform
    };
  }
  var simpleRules = [
    simpleTransformation(isUndefined, "undefined", function() {
      return null;
    }, function() {
      return void 0;
    }),
    simpleTransformation(isBigint, "bigint", function(v) {
      return v.toString();
    }, function(v) {
      if (typeof BigInt !== "undefined") {
        return BigInt(v);
      }
      console.error("Please add a BigInt polyfill.");
      return v;
    }),
    simpleTransformation(isDate, "Date", function(v) {
      return v.toISOString();
    }, function(v) {
      return new Date(v);
    }),
    simpleTransformation(isError, "Error", function(v, superJson) {
      var baseError = {
        name: v.name,
        message: v.message
      };
      superJson.allowedErrorProps.forEach(function(prop) {
        baseError[prop] = v[prop];
      });
      return baseError;
    }, function(v, superJson) {
      var e = new Error(v.message);
      e.name = v.name;
      e.stack = v.stack;
      superJson.allowedErrorProps.forEach(function(prop) {
        e[prop] = v[prop];
      });
      return e;
    }),
    simpleTransformation(isRegExp, "regexp", function(v) {
      return "" + v;
    }, function(regex) {
      var body = regex.slice(1, regex.lastIndexOf("/"));
      var flags = regex.slice(regex.lastIndexOf("/") + 1);
      return new RegExp(body, flags);
    }),
    simpleTransformation(
      isSet,
      "set",
      // (sets only exist in es6+)
      // eslint-disable-next-line es5/no-es6-methods
      function(v) {
        return __spreadArray$2([], __read$2(v.values()));
      },
      function(v) {
        return new Set(v);
      }
    ),
    simpleTransformation(isMap, "map", function(v) {
      return __spreadArray$2([], __read$2(v.entries()));
    }, function(v) {
      return new Map(v);
    }),
    simpleTransformation(function(v) {
      return isNaNValue(v) || isInfinite(v);
    }, "number", function(v) {
      if (isNaNValue(v)) {
        return "NaN";
      }
      if (v > 0) {
        return "Infinity";
      } else {
        return "-Infinity";
      }
    }, Number),
    simpleTransformation(function(v) {
      return v === 0 && 1 / v === -Infinity;
    }, "number", function() {
      return "-0";
    }, Number),
    simpleTransformation(isURL, "URL", function(v) {
      return v.toString();
    }, function(v) {
      return new URL(v);
    })
  ];
  function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
      isApplicable,
      annotation,
      transform,
      untransform
    };
  }
  var symbolRule = compositeTransformation(function(s, superJson) {
    if (isSymbol(s)) {
      var isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
      return isRegistered;
    }
    return false;
  }, function(s, superJson) {
    var identifier = superJson.symbolRegistry.getIdentifier(s);
    return ["symbol", identifier];
  }, function(v) {
    return v.description;
  }, function(_, a, superJson) {
    var value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
      throw new Error("Trying to deserialize unknown symbol");
    }
    return value;
  });
  var constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
  ].reduce(function(obj, ctor) {
    obj[ctor.name] = ctor;
    return obj;
  }, {});
  var typedArrayRule = compositeTransformation(isTypedArray, function(v) {
    return ["typed-array", v.constructor.name];
  }, function(v) {
    return __spreadArray$2([], __read$2(v));
  }, function(v, a) {
    var ctor = constructorToName[a[1]];
    if (!ctor) {
      throw new Error("Trying to deserialize unknown typed array");
    }
    return new ctor(v);
  });
  function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
      var isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
      return isRegistered;
    }
    return false;
  }
  var classRule = compositeTransformation(isInstanceOfRegisteredClass, function(clazz, superJson) {
    var identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return ["class", identifier];
  }, function(clazz, superJson) {
    var allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
      return __assign$1({}, clazz);
    }
    var result = {};
    allowedProps.forEach(function(prop) {
      result[prop] = clazz[prop];
    });
    return result;
  }, function(v, a, superJson) {
    var clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
      throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
    }
    return Object.assign(Object.create(clazz.prototype), v);
  });
  var customRule = compositeTransformation(function(value, superJson) {
    return !!superJson.customTransformerRegistry.findApplicable(value);
  }, function(value, superJson) {
    var transformer = superJson.customTransformerRegistry.findApplicable(value);
    return ["custom", transformer.name];
  }, function(value, superJson) {
    var transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
  }, function(v, a, superJson) {
    var transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
      throw new Error("Trying to deserialize unknown custom value");
    }
    return transformer.deserialize(v);
  });
  var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
  var transformValue = function(value, superJson) {
    var applicableCompositeRule = findArr(compositeRules, function(rule) {
      return rule.isApplicable(value, superJson);
    });
    if (applicableCompositeRule) {
      return {
        value: applicableCompositeRule.transform(value, superJson),
        type: applicableCompositeRule.annotation(value, superJson)
      };
    }
    var applicableSimpleRule = findArr(simpleRules, function(rule) {
      return rule.isApplicable(value, superJson);
    });
    if (applicableSimpleRule) {
      return {
        value: applicableSimpleRule.transform(value, superJson),
        type: applicableSimpleRule.annotation
      };
    }
    return void 0;
  };
  var simpleRulesByAnnotation = {};
  simpleRules.forEach(function(rule) {
    simpleRulesByAnnotation[rule.annotation] = rule;
  });
  var untransformValue = function(json, type, superJson) {
    if (isArray$1(type)) {
      switch (type[0]) {
        case "symbol":
          return symbolRule.untransform(json, type, superJson);
        case "class":
          return classRule.untransform(json, type, superJson);
        case "custom":
          return customRule.untransform(json, type, superJson);
        case "typed-array":
          return typedArrayRule.untransform(json, type, superJson);
        default:
          throw new Error("Unknown transformation: " + type);
      }
    } else {
      var transformation = simpleRulesByAnnotation[type];
      if (!transformation) {
        throw new Error("Unknown transformation: " + type);
      }
      return transformation.untransform(json, superJson);
    }
  };
  var getNthKey = function(value, n) {
    var keys = value.keys();
    while (n > 0) {
      keys.next();
      n--;
    }
    return keys.next().value;
  };
  function validatePath(path) {
    if (includes(path, "__proto__")) {
      throw new Error("__proto__ is not allowed as a property");
    }
    if (includes(path, "prototype")) {
      throw new Error("prototype is not allowed as a property");
    }
    if (includes(path, "constructor")) {
      throw new Error("constructor is not allowed as a property");
    }
  }
  var getDeep = function(object, path) {
    validatePath(path);
    for (var i = 0; i < path.length; i++) {
      var key = path[i];
      if (isSet(object)) {
        object = getNthKey(object, +key);
      } else if (isMap(object)) {
        var row = +key;
        var type = +path[++i] === 0 ? "key" : "value";
        var keyOfRow = getNthKey(object, row);
        switch (type) {
          case "key":
            object = keyOfRow;
            break;
          case "value":
            object = object.get(keyOfRow);
            break;
        }
      } else {
        object = object[key];
      }
    }
    return object;
  };
  var setDeep = function(object, path, mapper) {
    validatePath(path);
    if (path.length === 0) {
      return mapper(object);
    }
    var parent = object;
    for (var i = 0; i < path.length - 1; i++) {
      var key = path[i];
      if (isArray$1(parent)) {
        var index = +key;
        parent = parent[index];
      } else if (isPlainObject$1(parent)) {
        parent = parent[key];
      } else if (isSet(parent)) {
        var row = +key;
        parent = getNthKey(parent, row);
      } else if (isMap(parent)) {
        var isEnd = i === path.length - 2;
        if (isEnd) {
          break;
        }
        var row = +key;
        var type = +path[++i] === 0 ? "key" : "value";
        var keyOfRow = getNthKey(parent, row);
        switch (type) {
          case "key":
            parent = keyOfRow;
            break;
          case "value":
            parent = parent.get(keyOfRow);
            break;
        }
      }
    }
    var lastKey = path[path.length - 1];
    if (isArray$1(parent)) {
      parent[+lastKey] = mapper(parent[+lastKey]);
    } else if (isPlainObject$1(parent)) {
      parent[lastKey] = mapper(parent[lastKey]);
    }
    if (isSet(parent)) {
      var oldValue = getNthKey(parent, +lastKey);
      var newValue = mapper(oldValue);
      if (oldValue !== newValue) {
        parent["delete"](oldValue);
        parent.add(newValue);
      }
    }
    if (isMap(parent)) {
      var row = +path[path.length - 2];
      var keyToRow = getNthKey(parent, row);
      var type = +lastKey === 0 ? "key" : "value";
      switch (type) {
        case "key": {
          var newKey = mapper(keyToRow);
          parent.set(newKey, parent.get(keyToRow));
          if (newKey !== keyToRow) {
            parent["delete"](keyToRow);
          }
          break;
        }
        case "value": {
          parent.set(keyToRow, mapper(parent.get(keyToRow)));
          break;
        }
      }
    }
    return object;
  };
  var __read$1 = globalThis && globalThis.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray$1 = globalThis && globalThis.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  function traverse(tree, walker2, origin) {
    if (origin === void 0) {
      origin = [];
    }
    if (!tree) {
      return;
    }
    if (!isArray$1(tree)) {
      forEach(tree, function(subtree, key) {
        return traverse(subtree, walker2, __spreadArray$1(__spreadArray$1([], __read$1(origin)), __read$1(parsePath(key))));
      });
      return;
    }
    var _a2 = __read$1(tree, 2), nodeValue = _a2[0], children = _a2[1];
    if (children) {
      forEach(children, function(child, key) {
        traverse(child, walker2, __spreadArray$1(__spreadArray$1([], __read$1(origin)), __read$1(parsePath(key))));
      });
    }
    walker2(nodeValue, origin);
  }
  function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, function(type, path) {
      plain = setDeep(plain, path, function(v) {
        return untransformValue(v, type, superJson);
      });
    });
    return plain;
  }
  function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
      var object = getDeep(plain, parsePath(path));
      identicalPaths.map(parsePath).forEach(function(identicalObjectPath) {
        plain = setDeep(plain, identicalObjectPath, function() {
          return object;
        });
      });
    }
    if (isArray$1(annotations)) {
      var _a2 = __read$1(annotations, 2), root = _a2[0], other = _a2[1];
      root.forEach(function(identicalPath) {
        plain = setDeep(plain, parsePath(identicalPath), function() {
          return plain;
        });
      });
      if (other) {
        forEach(other, apply);
      }
    } else {
      forEach(annotations, apply);
    }
    return plain;
  }
  var isDeep = function(object, superJson) {
    return isPlainObject$1(object) || isArray$1(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
  };
  function addIdentity(object, path, identities) {
    var existingSet = identities.get(object);
    if (existingSet) {
      existingSet.push(path);
    } else {
      identities.set(object, [path]);
    }
  }
  function generateReferentialEqualityAnnotations(identitites, dedupe) {
    var result = {};
    var rootEqualityPaths = void 0;
    identitites.forEach(function(paths) {
      if (paths.length <= 1) {
        return;
      }
      if (!dedupe) {
        paths = paths.map(function(path) {
          return path.map(String);
        }).sort(function(a, b) {
          return a.length - b.length;
        });
      }
      var _a2 = __read$1(paths), representativePath = _a2[0], identicalPaths = _a2.slice(1);
      if (representativePath.length === 0) {
        rootEqualityPaths = identicalPaths.map(stringifyPath);
      } else {
        result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
      }
    });
    if (rootEqualityPaths) {
      if (isEmptyObject(result)) {
        return [rootEqualityPaths];
      } else {
        return [rootEqualityPaths, result];
      }
    } else {
      return isEmptyObject(result) ? void 0 : result;
    }
  }
  var walker = function(object, identities, superJson, dedupe, path, objectsInThisPath, seenObjects) {
    var _a2;
    if (path === void 0) {
      path = [];
    }
    if (objectsInThisPath === void 0) {
      objectsInThisPath = [];
    }
    if (seenObjects === void 0) {
      seenObjects = /* @__PURE__ */ new Map();
    }
    var primitive = isPrimitive(object);
    if (!primitive) {
      addIdentity(object, path, identities);
      var seen = seenObjects.get(object);
      if (seen) {
        return dedupe ? {
          transformedValue: null
        } : seen;
      }
    }
    if (!isDeep(object, superJson)) {
      var transformed_1 = transformValue(object, superJson);
      var result_1 = transformed_1 ? {
        transformedValue: transformed_1.value,
        annotations: [transformed_1.type]
      } : {
        transformedValue: object
      };
      if (!primitive) {
        seenObjects.set(object, result_1);
      }
      return result_1;
    }
    if (includes(objectsInThisPath, object)) {
      return {
        transformedValue: null
      };
    }
    var transformationResult = transformValue(object, superJson);
    var transformed = (_a2 = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _a2 !== void 0 ? _a2 : object;
    var transformedValue = isArray$1(transformed) ? [] : {};
    var innerAnnotations = {};
    forEach(transformed, function(value, index) {
      var recursiveResult = walker(value, identities, superJson, dedupe, __spreadArray$1(__spreadArray$1([], __read$1(path)), [index]), __spreadArray$1(__spreadArray$1([], __read$1(objectsInThisPath)), [object]), seenObjects);
      transformedValue[index] = recursiveResult.transformedValue;
      if (isArray$1(recursiveResult.annotations)) {
        innerAnnotations[index] = recursiveResult.annotations;
      } else if (isPlainObject$1(recursiveResult.annotations)) {
        forEach(recursiveResult.annotations, function(tree, key) {
          innerAnnotations[escapeKey(index) + "." + key] = tree;
        });
      }
    });
    var result = isEmptyObject(innerAnnotations) ? {
      transformedValue,
      annotations: !!transformationResult ? [transformationResult.type] : void 0
    } : {
      transformedValue,
      annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
    };
    if (!primitive) {
      seenObjects.set(object, result);
    }
    return result;
  };
  function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
  }
  function isArray(payload) {
    return getType(payload) === "Array";
  }
  function isPlainObject(payload) {
    if (getType(payload) !== "Object")
      return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
  }
  function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
    if (propType === "enumerable")
      carry[key] = newVal;
    if (includeNonenumerable && propType === "nonenumerable") {
      Object.defineProperty(carry, key, {
        value: newVal,
        enumerable: false,
        writable: true,
        configurable: true
      });
    }
  }
  function copy(target, options = {}) {
    if (isArray(target)) {
      return target.map((item) => copy(item, options));
    }
    if (!isPlainObject(target)) {
      return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [...props, ...symbols].reduce((carry, key) => {
      if (isArray(options.props) && !options.props.includes(key)) {
        return carry;
      }
      const val = target[key];
      const newVal = copy(val, options);
      assignProp(carry, key, newVal, target, options.nonenumerable);
      return carry;
    }, {});
  }
  var __assign = globalThis && globalThis.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __read = globalThis && globalThis.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
  var SuperJSON = (
    /** @class */
    function() {
      function SuperJSON2(_a2) {
        var _b = _a2 === void 0 ? {} : _a2, _c = _b.dedupe, dedupe = _c === void 0 ? false : _c;
        this.classRegistry = new ClassRegistry();
        this.symbolRegistry = new Registry(function(s) {
          var _a3;
          return (_a3 = s.description) !== null && _a3 !== void 0 ? _a3 : "";
        });
        this.customTransformerRegistry = new CustomTransformerRegistry();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
      }
      SuperJSON2.prototype.serialize = function(object) {
        var identities = /* @__PURE__ */ new Map();
        var output = walker(object, identities, this, this.dedupe);
        var res = {
          json: output.transformedValue
        };
        if (output.annotations) {
          res.meta = __assign(__assign({}, res.meta), { values: output.annotations });
        }
        var equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
        if (equalityAnnotations) {
          res.meta = __assign(__assign({}, res.meta), { referentialEqualities: equalityAnnotations });
        }
        return res;
      };
      SuperJSON2.prototype.deserialize = function(payload) {
        var json = payload.json, meta = payload.meta;
        var result = copy(json);
        if (meta === null || meta === void 0 ? void 0 : meta.values) {
          result = applyValueAnnotations(result, meta.values, this);
        }
        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
          result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
        }
        return result;
      };
      SuperJSON2.prototype.stringify = function(object) {
        return JSON.stringify(this.serialize(object));
      };
      SuperJSON2.prototype.parse = function(string) {
        return this.deserialize(JSON.parse(string));
      };
      SuperJSON2.prototype.registerClass = function(v, options) {
        this.classRegistry.register(v, options);
      };
      SuperJSON2.prototype.registerSymbol = function(v, identifier) {
        this.symbolRegistry.register(v, identifier);
      };
      SuperJSON2.prototype.registerCustom = function(transformer, name) {
        this.customTransformerRegistry.register(__assign({ name }, transformer));
      };
      SuperJSON2.prototype.allowErrorProps = function() {
        var _a2;
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          props[_i] = arguments[_i];
        }
        (_a2 = this.allowedErrorProps).push.apply(_a2, __spreadArray([], __read(props)));
      };
      SuperJSON2.defaultInstance = new SuperJSON2();
      SuperJSON2.serialize = SuperJSON2.defaultInstance.serialize.bind(SuperJSON2.defaultInstance);
      SuperJSON2.deserialize = SuperJSON2.defaultInstance.deserialize.bind(SuperJSON2.defaultInstance);
      SuperJSON2.stringify = SuperJSON2.defaultInstance.stringify.bind(SuperJSON2.defaultInstance);
      SuperJSON2.parse = SuperJSON2.defaultInstance.parse.bind(SuperJSON2.defaultInstance);
      SuperJSON2.registerClass = SuperJSON2.defaultInstance.registerClass.bind(SuperJSON2.defaultInstance);
      SuperJSON2.registerSymbol = SuperJSON2.defaultInstance.registerSymbol.bind(SuperJSON2.defaultInstance);
      SuperJSON2.registerCustom = SuperJSON2.defaultInstance.registerCustom.bind(SuperJSON2.defaultInstance);
      SuperJSON2.allowErrorProps = SuperJSON2.defaultInstance.allowErrorProps.bind(SuperJSON2.defaultInstance);
      return SuperJSON2;
    }()
  );
  var serialize$1 = SuperJSON.serialize;
  var deserialize$1 = SuperJSON.deserialize;
  function serialize(type, value) {
    switch (type) {
      case "raw":
        return value;
      case "superjson":
        return serialize$1(value);
    }
  }
  function deserialize(type, value) {
    switch (type) {
      case "raw":
        return value;
      case "superjson":
        return deserialize$1(value);
    }
  }
  var serializedOpaqueSchema = z.any();
  var clientToServerMessageSchema = z.discriminatedUnion("type", [
    // Communication
    z.object({
      type: z.literal("communicationWarning"),
      warning: z.string()
    }),
    z.object({
      type: z.literal("keepAlive")
    }),
    // Channel
    z.object({
      type: z.literal("channelCreate"),
      endpoint: z.string(),
      channelId: z.number().int(),
      creationParameter: serializedOpaqueSchema
    }),
    z.object({
      type: z.literal("channelSend"),
      channelId: z.number().int(),
      message: serializedOpaqueSchema,
      ackId: z.number().int().optional()
    }),
    z.object({
      type: z.literal("channelAck"),
      channelId: z.number().int(),
      ackId: z.number().int()
    }),
    // RPC
    z.object({
      type: z.literal("rpcCall"),
      endpoint: z.string(),
      callId: z.number().int(),
      parameter: serializedOpaqueSchema
    }),
    // Readonly signal
    z.object({
      type: z.literal("signalSubscribe"),
      creationParameter: serializedOpaqueSchema,
      endpoint: z.string(),
      subscribeId: z.number().int()
    }),
    z.object({
      type: z.literal("signalUnsubscribe"),
      subscribeId: z.number().int()
    }),
    // Writable signal
    z.object({
      type: z.literal("writableSignalSubscribe"),
      creationParameter: serializedOpaqueSchema,
      endpoint: z.string(),
      subscribeId: z.number().int()
    }),
    z.object({
      type: z.literal("writableSignalUnsubscribe"),
      subscribeId: z.number().int()
    }),
    z.object({
      type: z.literal("writableSignalUpdate"),
      subscribeId: z.number().int(),
      patches: z.array(serializedOpaqueSchema),
      tags: z.array(z.string())
    })
  ]);
  var serverToClientMessageSchema = z.discriminatedUnion("type", [
    // Communication
    z.object({
      type: z.literal("communicationWarning"),
      warning: z.string()
    }),
    z.object({
      type: z.literal("keepAliveAck")
    }),
    // Channel
    z.object({
      type: z.literal("channelSend"),
      channelId: z.number().int(),
      message: serializedOpaqueSchema,
      ackId: z.number().int().optional()
    }),
    z.object({
      type: z.literal("channelAck"),
      channelId: z.number().int(),
      ackId: z.number().int()
    }),
    z.object({
      type: z.literal("channelClose"),
      channelId: z.number().int()
    }),
    z.object({
      type: z.literal("channelError"),
      channelId: z.number().int(),
      error: serializedLMSExtendedErrorSchema
    }),
    // RPC
    z.object({
      type: z.literal("rpcResult"),
      callId: z.number().int(),
      result: serializedOpaqueSchema
    }),
    z.object({
      type: z.literal("rpcError"),
      callId: z.number().int(),
      error: serializedLMSExtendedErrorSchema
    }),
    // Readonly signal
    z.object({
      type: z.literal("signalUpdate"),
      subscribeId: z.number().int(),
      patches: z.array(serializedOpaqueSchema),
      tags: z.array(z.string())
    }),
    z.object({
      type: z.literal("signalError"),
      subscribeId: z.number().int(),
      error: serializedLMSExtendedErrorSchema
    }),
    // Writable signal
    z.object({
      type: z.literal("writableSignalUpdate"),
      subscribeId: z.number().int(),
      patches: z.array(serializedOpaqueSchema),
      tags: z.array(z.string())
    }),
    z.object({
      type: z.literal("writableSignalError"),
      subscribeId: z.number().int(),
      error: serializedLMSExtendedErrorSchema
    })
  ]);
  var Transport = class {
  };
  var ClientTransport = class extends Transport {
    parseIncomingMessage(message) {
      return serverToClientMessageSchema.parse(message);
    }
    send(message) {
      const result = clientToServerMessageSchema.parse(message);
      this.sendViaTransport(result);
    }
    /**
     * Called by the client port when the number of open communications changes from 0 to 1. This
     * usually indicates the `socket.ref()` should be called to prevent the process from exiting.
     */
    onHavingOneOrMoreOpenCommunication() {
    }
    // The following snippet is intentionally not a tsdoc (only 1 star as oppose to 2). There is
    // likely a bug in TypeScript that when we change it to tsdoc, on darwin and linux, it causes the
    // generated .d.ts file to be invalid. We have considered reporting this to TypeScript, but it is
    // way too difficult to narrow down, thus we just hope this is the only case that this error
    // occurs.
    /*
     * Called by the client port when the number of open communications changes from 1 or more to 0.
     * This usually indicates the `socket.unref()` should be called to allow the process to exit.
     */
    onHavingNoOpenCommunication() {
    }
  };
  var wsAuthenticationResultSchema = z.discriminatedUnion("success", [
    z.object({
      success: z.literal(true)
    }),
    z.object({
      success: z.literal(false),
      error: z.string()
    })
  ]);
  var WsClientTransportStatus;
  (function(WsClientTransportStatus2) {
    WsClientTransportStatus2["Disconnected"] = "DISCONNECTED";
    WsClientTransportStatus2["Connecting"] = "CONNECTING";
    WsClientTransportStatus2["Connected"] = "CONNECTED";
  })(WsClientTransportStatus || (WsClientTransportStatus = {}));
  var WsClientTransport = class _WsClientTransport extends ClientTransport {
    constructor(url, receivedMessage, errored, parentLogger) {
      super();
      this.url = url;
      this.receivedMessage = receivedMessage;
      this.errored = errored;
      this.ws = null;
      this.queuedMessages = [];
      this.status = WsClientTransportStatus.Disconnected;
      this.resolvedUrl = null;
      this.shouldRef = false;
      this.logger = new SimpleLogger("WsClientTransport", parentLogger);
    }
    static createWsClientTransportFactory(url) {
      return (receivedMessage, errored, parentLogger) => new _WsClientTransport(url, receivedMessage, errored, parentLogger);
    }
    connect() {
      if (this.status !== WsClientTransportStatus.Disconnected) {
        this.logger.warn("connect() called while not disconnected");
        return;
      }
      this.status = WsClientTransportStatus.Connecting;
      Promise.resolve(this.url).then((url) => {
        this.resolvedUrl = url;
        this.ws = new import_lms_isomorphic.WebSocket(url);
        this.ws.addEventListener("open", this.onWsOpen.bind(this));
        this.ws.addEventListener("error", (event2) => this.onWsError(event2.error));
      });
    }
    // private timeOut
    // private setupWebsocketKeepAlive(ws: WebSocket, onTimeout: () => void) {
    //   const socket = (ws as any)._socket as Socket | null | undefined;
    //   if (socket) {
    //     // Exists, use node.js methods
    //     socket.setKeepAlive(true, KEEP_ALIVE_INTERVAL);
    //     socket.setTimeout(KEEP_ALIVE_TIMEOUT, onTimeout);
    //   } else {
    //   }
    // }
    onWsOpen() {
      this.ws.addEventListener("message", this.onWsMessage.bind(this));
      this.status = WsClientTransportStatus.Connected;
      this.queuedMessages.forEach((message) => this.sendViaTransport(message));
      this.queuedMessages = [];
      this.updateShouldRef(this.shouldRef);
    }
    onWsMessage(event2) {
      if (this.status !== WsClientTransportStatus.Connected) {
        this.logger.warn("Received message while not connected. Message ignored:", event2.data);
        return;
      }
      let message;
      try {
        message = JSON.parse(String(event2.data));
      } catch (error) {
        this.logger.warn("Received invalid JSON message from server:", event2.data);
        return;
      }
      let parsed;
      try {
        parsed = this.parseIncomingMessage(message);
      } catch (error) {
        this.logger.warn("Received invalid message from server:", message);
        return;
      }
      this.receivedMessage(parsed);
    }
    onWsError(error) {
      if (this.status === WsClientTransportStatus.Disconnected) {
        return;
      }
      this.logger.warn("WebSocket error:", error);
      if (error.code === "ECONNREFUSED") {
        this.logger.warnText`
          WebSocket connection refused. This can happen if the server is not running or the client
          is trying to connect to the wrong path. The server path that this client is
          attempting to connect to is:
          ${this.resolvedUrl ?? "Unknown"}.

          Please make sure the following:

            1. LM Studio is running

            2. The API server in LM Studio has started

            3. The client is attempting to connect to the correct path
        `;
      }
      try {
        this.ws?.close();
      } catch (error2) {
      }
      this.status = WsClientTransportStatus.Disconnected;
      this.errored(event);
    }
    onWsTimeout() {
      if (this.status === WsClientTransportStatus.Disconnected) {
        return;
      }
      this.logger.warn("Websocket timed out");
      try {
        this.ws?.close();
      } catch (error) {
      }
      this.status = WsClientTransportStatus.Disconnected;
      this.errored(new Error("WebSocket timed out"));
    }
    onHavingNoOpenCommunication() {
      this.updateShouldRef(false);
    }
    onHavingOneOrMoreOpenCommunication() {
      this.updateShouldRef(true);
    }
    updateShouldRef(shouldRef) {
      this.shouldRef = shouldRef;
      if (this.ws === null) {
        return;
      }
      if (!this.ws._socket) {
        return;
      }
      if (shouldRef) {
        this.ws._socket.ref();
      } else {
        this.ws._socket.unref();
      }
    }
    sendViaTransport(message) {
      if (this.status === WsClientTransportStatus.Connected) {
        this.ws.send(JSON.stringify(message));
      } else {
        this.queuedMessages.push(message);
        if (this.status === WsClientTransportStatus.Disconnected) {
          this.connect();
        }
      }
    }
  };
  var AuthenticatedWsClientTransport = class _AuthenticatedWsClientTransport extends WsClientTransport {
    constructor(url, clientIdentifier, clientPasskey, receivedMessage, errored, parentLogger) {
      super(url, receivedMessage, errored, parentLogger);
      this.clientIdentifier = clientIdentifier;
      this.clientPasskey = clientPasskey;
      this.logger = this.logger.subclass("AuthenticatedWsClientTransport");
    }
    static createAuthenticatedWsClientTransportFactory({ url, clientIdentifier, clientPasskey }) {
      return (receivedMessage, errored, parentLogger) => new _AuthenticatedWsClientTransport(url, clientIdentifier, clientPasskey, receivedMessage, errored, parentLogger);
    }
    onWsOpen() {
      this.ws.send(JSON.stringify({
        authVersion: 1,
        clientIdentifier: this.clientIdentifier,
        clientPasskey: this.clientPasskey
      }));
      this.ws.addEventListener("message", (event2) => {
        try {
          const data = JSON.parse(event2.data.toString("utf-8"));
          const result = wsAuthenticationResultSchema.parse(data);
          if (result.success) {
            super.onWsOpen();
          } else {
            this.onWsError(new Error("Failed to authenticate: " + result.error));
          }
        } catch (error) {
          this.onWsError(new Error("Failed to parse authentication result: " + error?.message));
        }
      }, {
        once: true
      });
    }
  };
  function defaultErrorDeserializer(serialized, directCause, stack) {
    return fromSerializedError(serialized, directCause, stack);
  }
  var ClientPort = class {
    constructor(backendInterface, factory, { parentLogger, errorDeserializer, verboseErrorMessage } = {}) {
      this.backendInterface = backendInterface;
      this.openChannels = /* @__PURE__ */ new Map();
      this.ongoingRpcs = /* @__PURE__ */ new Map();
      this.openSignalSubscriptions = /* @__PURE__ */ new Map();
      this.openWritableSignalSubscriptions = /* @__PURE__ */ new Map();
      this.openCommunicationsCount = 0;
      this.nextChannelId = 0;
      this.nextSubscribeId = 0;
      this.nextWritableSubscribeId = 0;
      this.producedCommunicationWarningsCount = 0;
      this.receivedMessage = (message) => {
        switch (message.type) {
          case "channelSend": {
            this.receivedChannelSend(message);
            break;
          }
          case "channelAck": {
            this.receivedChannelAck(message);
            break;
          }
          case "channelClose": {
            this.receivedChannelClose(message);
            break;
          }
          case "channelError": {
            this.receivedChannelError(message);
            break;
          }
          case "rpcResult": {
            this.receivedRpcResult(message);
            break;
          }
          case "rpcError": {
            this.receivedRpcError(message);
            break;
          }
          case "signalUpdate": {
            this.receivedSignalUpdate(message);
            break;
          }
          case "signalError": {
            this.receivedSignalError(message);
            break;
          }
          case "writableSignalUpdate": {
            this.receivedWritableSignalUpdate(message);
            break;
          }
          case "writableSignalError": {
            this.receivedWritableSignalError(message);
            break;
          }
          case "communicationWarning": {
            this.receivedCommunicationWarning(message);
            break;
          }
          case "keepAliveAck": {
            this.receivedKeepAliveAck(message);
            break;
          }
        }
      };
      this.errored = (error) => {
        for (const openChannel of this.openChannels.values()) {
          openChannel.errored(error);
        }
        for (const ongoingRpc of this.ongoingRpcs.values()) {
          ongoingRpc.reject(error);
        }
        for (const openSignalSubscription of this.openSignalSubscriptions.values()) {
          openSignalSubscription.errored(error);
        }
        for (const openWritableSignalSubscription of this.openWritableSignalSubscriptions.values()) {
          openWritableSignalSubscription.errored(error);
        }
      };
      this.logger = new SimpleLogger("ClientPort", parentLogger);
      this.errorDeserializer = errorDeserializer ?? defaultErrorDeserializer;
      this.verboseErrorMessage = verboseErrorMessage ?? true;
      this.transport = factory(this.receivedMessage, this.errored, this.logger);
    }
    communicationWarning(warning) {
      if (this.producedCommunicationWarningsCount >= 5) {
        return;
      }
      this.logger.warnText`
      Produced communication warning: ${warning}
      
      This is usually caused by communication protocol incompatibility. Please make sure you are
      using the up-to-date versions of the SDK and LM Studio.
    `;
      this.transport.send({
        type: "communicationWarning",
        warning
      });
      this.producedCommunicationWarningsCount++;
      if (this.producedCommunicationWarningsCount >= 5) {
        this.logger.errorText`
        5 communication warnings have been produced. Further warnings will not be printed.
      `;
      }
    }
    updateOpenCommunicationsCount() {
      const previousCount = this.openCommunicationsCount;
      this.openCommunicationsCount = this.openChannels.size + this.ongoingRpcs.size + this.openSignalSubscriptions.size + this.openWritableSignalSubscriptions.size;
      if (this.openCommunicationsCount === 0 && previousCount > 0) {
        this.transport.onHavingNoOpenCommunication();
      } else if (this.openCommunicationsCount === 1 && previousCount === 0) {
        this.transport.onHavingOneOrMoreOpenCommunication();
      }
    }
    receivedChannelSend(message) {
      const openChannel = this.openChannels.get(message.channelId);
      if (openChannel === void 0) {
        this.communicationWarning(`Received channelSend for unknown channel, channelId = ${message.channelId}`);
        return;
      }
      const deserializedMessage = deserialize(openChannel.endpoint.serialization, message.message);
      const parsed = openChannel.endpoint.toClientPacket.safeParse(deserializedMessage);
      if (!parsed.success) {
        this.communicationWarning(text`
        Received invalid message for channel: endpointName = ${openChannel.endpoint.name}, message =
        ${deserializedMessage}. Zod error:

        ${Validator.prettyPrintZod("message", parsed.error)}
      `);
        return;
      }
      openChannel.receivedMessage(parsed.data);
    }
    receivedChannelAck(message) {
      const openChannel = this.openChannels.get(message.channelId);
      if (openChannel === void 0) {
        this.communicationWarning(`Received channelAck for unknown channel, channelId = ${message.channelId}`);
        return;
      }
      openChannel.receivedAck(message.ackId);
    }
    receivedChannelClose(message) {
      const openChannel = this.openChannels.get(message.channelId);
      if (openChannel === void 0) {
        this.communicationWarning(`Received channelClose for unknown channel, channelId = ${message.channelId}`);
        return;
      }
      this.openChannels.delete(message.channelId);
      openChannel.closed();
      this.updateOpenCommunicationsCount();
    }
    receivedChannelError(message) {
      const openChannel = this.openChannels.get(message.channelId);
      if (openChannel === void 0) {
        this.communicationWarning(`Received channelError for unknown channel, channelId = ${message.channelId}`);
        return;
      }
      this.openChannels.delete(message.channelId);
      const error = this.errorDeserializer(message.error, "Channel Error", this.verboseErrorMessage ? openChannel.stack : void 0);
      openChannel.errored(error);
      this.updateOpenCommunicationsCount();
    }
    receivedRpcResult(message) {
      const ongoingRpc = this.ongoingRpcs.get(message.callId);
      if (ongoingRpc === void 0) {
        this.communicationWarning(`Received rpcResult for unknown rpc, callId = ${message.callId}`);
        return;
      }
      const deserializedResult = deserialize(ongoingRpc.endpoint.serialization, message.result);
      const parsed = ongoingRpc.endpoint.returns.safeParse(deserializedResult);
      if (!parsed.success) {
        this.communicationWarning(text`
        Received invalid result for rpc, endpointName = ${ongoingRpc.endpoint.name}, result =
        ${deserializedResult}. Zod error:

        ${Validator.prettyPrintZod("result", parsed.error)}
      `);
        return;
      }
      ongoingRpc.resolve(parsed.data);
      this.ongoingRpcs.delete(message.callId);
      this.updateOpenCommunicationsCount();
    }
    receivedRpcError(message) {
      const ongoingRpc = this.ongoingRpcs.get(message.callId);
      if (ongoingRpc === void 0) {
        this.communicationWarning(`Received rpcError for unknown rpc, callId = ${message.callId}`);
        return;
      }
      const error = this.errorDeserializer(message.error, "RPC Error", this.verboseErrorMessage ? ongoingRpc.stack : void 0);
      ongoingRpc.reject(error);
      this.ongoingRpcs.delete(message.callId);
      this.updateOpenCommunicationsCount();
    }
    receivedSignalUpdate(message) {
      const openSignalSubscription = this.openSignalSubscriptions.get(message.subscribeId);
      if (openSignalSubscription === void 0) {
        return;
      }
      const patches = message.patches.map((patch) => deserialize(openSignalSubscription.endpoint.serialization, patch));
      const beforeValue = openSignalSubscription.getValue();
      let afterValue;
      try {
        afterValue = applyPatches(beforeValue, patches);
      } catch (error) {
        this.communicationWarning(text`
        Failed to apply patches to signal on signalUpdate. subscribeId = ${message.subscribeId}.

        beforeValue = ${JSON.stringify(beforeValue, null, 2)},

        patches = ${JSON.stringify(patches, null, 2)}.

        Error: ${String(error)}
      `);
        return;
      }
      const parseResult = openSignalSubscription.endpoint.signalData.safeParse(afterValue);
      if (!parseResult.success) {
        this.communicationWarning(text`
        Received invalid signal patch data, subscribeId = ${message.subscribeId}

        patches = ${patches},

        beforeValue = ${beforeValue},

        afterValue = ${afterValue}.

        Zod error:

        ${Validator.prettyPrintZod("value", parseResult.error)}
      `);
        return;
      }
      openSignalSubscription.receivedPatches(afterValue, patches, message.tags);
    }
    receivedSignalError(message) {
      const openSignalSubscription = this.openSignalSubscriptions.get(message.subscribeId);
      if (openSignalSubscription === void 0) {
        this.communicationWarning(`Received signalError for unknown signal, subscribeId = ${message.subscribeId}`);
        return;
      }
      const error = this.errorDeserializer(message.error, "Signal Error", this.verboseErrorMessage ? openSignalSubscription.stack : void 0);
      openSignalSubscription.errored(error);
      this.openSignalSubscriptions.delete(message.subscribeId);
      this.updateOpenCommunicationsCount();
    }
    receivedWritableSignalUpdate(message) {
      const openSignalSubscription = this.openWritableSignalSubscriptions.get(message.subscribeId);
      if (openSignalSubscription === void 0) {
        return;
      }
      const patches = message.patches.map((patch) => deserialize(openSignalSubscription.endpoint.serialization, patch));
      const beforeValue = openSignalSubscription.getValue();
      let afterValue;
      try {
        afterValue = applyPatches(openSignalSubscription.getValue(), patches);
      } catch (error) {
        this.communicationWarning(text`
        Failed to apply patches to writable signal on writableSignalUpdate. subscribeId =
        ${message.subscribeId}.

        beforeValue = ${JSON.stringify(beforeValue, null, 2)},

        patches = ${JSON.stringify(patches, null, 2)}.

        Error: ${String(error)}
      `);
      }
      const parseResult = openSignalSubscription.endpoint.signalData.safeParse(afterValue);
      if (!parseResult.success) {
        this.communicationWarning(text`
        Received invalid writable signal patch data, subscribeId = ${message.subscribeId}

        patches = ${patches},

        beforeValue = ${beforeValue},

        afterValue = ${afterValue}.

        Zod error:

        ${Validator.prettyPrintZod("value", parseResult.error)}
      `);
        return;
      }
      openSignalSubscription.firstUpdateReceived = true;
      openSignalSubscription.receivedPatches(afterValue, patches, message.tags);
    }
    receivedWritableSignalError(message) {
      const openSignalSubscription = this.openWritableSignalSubscriptions.get(message.subscribeId);
      if (openSignalSubscription === void 0) {
        this.communicationWarning(`Received writableSignalError for unknown signal, subscribeId = ${message.subscribeId}`);
        return;
      }
      const error = this.errorDeserializer(message.error, "Writable Signal Error", this.verboseErrorMessage ? openSignalSubscription.stack : void 0);
      openSignalSubscription.errored(error);
      this.openWritableSignalSubscriptions.delete(message.subscribeId);
      this.updateOpenCommunicationsCount();
    }
    receivedCommunicationWarning(message) {
      this.logger.warnText`
      Received communication warning from the server: ${message.warning}
      
      This is usually caused by communication protocol incompatibility. Please make sure you are
      using the up-to-date versions of the SDK and LM Studio.

      Note: This warning was received from the server and is printed on the client for convenience.
    `;
    }
    receivedKeepAliveAck(_message) {
    }
    async callRpc(endpointName, param, { stack } = {}) {
      const endpoint = this.backendInterface.getRpcEndpoint(endpointName);
      if (endpoint === void 0) {
        throw new Error(`No Rpc endpoint with name ${endpointName}`);
      }
      const parameter = endpoint.parameter.parse(param);
      const serializedParameter = serialize(endpoint.serialization, parameter);
      const callId = this.nextChannelId;
      this.nextChannelId++;
      const { promise, resolve, reject } = makePromise();
      stack = stack ?? getCurrentStack(1);
      this.ongoingRpcs.set(callId, {
        endpoint,
        stack,
        resolve,
        reject
      });
      this.transport.send({
        type: "rpcCall",
        endpoint: endpointName,
        callId,
        parameter: serializedParameter
      });
      this.updateOpenCommunicationsCount();
      return await promise;
    }
    createChannel(endpointName, param, onMessage, { stack } = {}) {
      const channelEndpoint = this.backendInterface.getChannelEndpoint(endpointName);
      if (channelEndpoint === void 0) {
        throw new Error(`No channel endpoint with name ${endpointName}`);
      }
      const creationParameter = channelEndpoint.creationParameter.parse(param);
      const serializedCreationParameter = serialize(channelEndpoint.serialization, creationParameter);
      const channelId = this.nextChannelId;
      this.nextChannelId++;
      this.transport.send({
        type: "channelCreate",
        endpoint: endpointName,
        channelId,
        creationParameter: serializedCreationParameter
      });
      stack = stack ?? getCurrentStack(1);
      const openChannel = {
        endpoint: channelEndpoint,
        stack,
        ...Channel.create((packet) => {
          const parsed = channelEndpoint.toServerPacket.parse(packet);
          const serializedMessage = serialize(channelEndpoint.serialization, parsed);
          this.transport.send({
            type: "channelSend",
            channelId,
            message: serializedMessage
          });
        })
      };
      if (onMessage !== void 0) {
        openChannel.channel.onMessage.subscribe(onMessage);
      }
      this.openChannels.set(channelId, openChannel);
      this.updateOpenCommunicationsCount();
      return openChannel.channel;
    }
    /**
     * Creates a readonly lazy signal will subscribe to the signal endpoint with the given name.
     */
    createSignal(endpointName, param, { stack } = {}) {
      const signalEndpoint = this.backendInterface.getSignalEndpoint(endpointName);
      if (signalEndpoint === void 0) {
        throw new Error(`No signal endpoint with name ${endpointName}`);
      }
      const creationParameter = signalEndpoint.creationParameter.parse(param);
      const serializedCreationParameter = serialize(signalEndpoint.serialization, creationParameter);
      stack = stack ?? getCurrentStack(1);
      const signal = LazySignal.createWithoutInitialValue((setDownstream, errorListener) => {
        const subscribeId = this.nextSubscribeId;
        this.nextSubscribeId++;
        this.transport.send({
          type: "signalSubscribe",
          endpoint: endpointName,
          subscribeId,
          creationParameter: serializedCreationParameter
        });
        this.openSignalSubscriptions.set(subscribeId, {
          endpoint: signalEndpoint,
          getValue: () => signal.get(),
          receivedPatches: setDownstream.withValueAndPatches,
          errored: errorListener,
          stack
        });
        this.updateOpenCommunicationsCount();
        return () => {
          this.transport.send({
            type: "signalUnsubscribe",
            subscribeId
          });
          this.openSignalSubscriptions.delete(subscribeId);
        };
      });
      return signal;
    }
    createWritableSignal(endpointName, param, { stack } = {}) {
      const signalEndpoint = this.backendInterface.getWritableSignalEndpoint(endpointName);
      if (signalEndpoint === void 0) {
        throw new Error(`No writable signal endpoint with name ${endpointName}`);
      }
      const creationParameter = signalEndpoint.creationParameter.parse(param);
      const serializedCreationParameter = serialize(signalEndpoint.serialization, creationParameter);
      stack = stack ?? getCurrentStack(1);
      let currentSubscribeId = null;
      const writeUpstream = (_data, patches, tags) => {
        if (currentSubscribeId === null) {
          console.warn("writeUpstream called when not subscribed");
          return false;
        }
        const subscription = this.openWritableSignalSubscriptions.get(currentSubscribeId);
        if (!subscription?.firstUpdateReceived) {
          console.warn("writeUpstream called before the first update is received");
          return false;
        }
        this.transport.send({
          type: "writableSignalUpdate",
          subscribeId: currentSubscribeId,
          patches: patches.map((patch) => serialize(signalEndpoint.serialization, patch)),
          tags
        });
        return true;
      };
      const [signal, setter] = OWLSignal.createWithoutInitialValue((setDownstream, errorListener) => {
        const subscribeId = this.nextWritableSubscribeId;
        currentSubscribeId = subscribeId;
        this.nextWritableSubscribeId++;
        this.transport.send({
          type: "writableSignalSubscribe",
          endpoint: endpointName,
          subscribeId,
          creationParameter: serializedCreationParameter
        });
        this.openWritableSignalSubscriptions.set(subscribeId, {
          endpoint: signalEndpoint,
          getValue: () => signal.getPessimistic(),
          receivedPatches: setDownstream.withValueAndPatches,
          firstUpdateReceived: false,
          errored: errorListener,
          stack
        });
        this.updateOpenCommunicationsCount();
        return () => {
          currentSubscribeId = null;
          this.transport.send({
            type: "writableSignalUnsubscribe",
            subscribeId
          });
          this.openWritableSignalSubscriptions.delete(subscribeId);
        };
      }, writeUpstream);
      return [signal, setter];
    }
  };
  var GenericClientTransport = class _GenericClientTransport extends ClientTransport {
    constructor(onMessage, onClose, sendMessage, receivedMessage, errored, parentLogger) {
      super();
      this.sendMessage = sendMessage;
      this.receivedMessage = receivedMessage;
      this.errored = errored;
      this.closed = false;
      this.logger = new SimpleLogger("GenericClientTransport", parentLogger);
      onMessage.subscribe((message) => {
        let parsed;
        try {
          parsed = this.parseIncomingMessage(message);
        } catch (error) {
          this.logger.warn("Received invalid message from server:", message);
          return;
        }
        this.receivedMessage(parsed);
      });
      onClose.subscribeOnce(() => {
        if (this.closed) {
          return;
        }
        this.closed = true;
        this.errored(new Error("Server closed the connection"));
      });
    }
    static createFactory(onMessage, onClose, sendMessage) {
      return (receivedMessage, errored, parentLogger) => new _GenericClientTransport(onMessage, onClose, sendMessage, receivedMessage, errored, parentLogger);
    }
    sendViaTransport(message) {
      this.sendMessage(message);
    }
  };
  function getHostedEnv() {
    let anyWindow;
    try {
      anyWindow = window;
    } catch (error) {
      anyWindow = void 0;
    }
    if (anyWindow !== void 0 && anyWindow.lmsHostedEnv !== void 0) {
      return anyWindow.lmsHostedEnv;
    }
    return null;
  }
  function createBaseModelBackendInterface(specificModelInstanceInfoSchemaInput, specificModelInfoSchemaInput) {
    const specificModelInstanceInfoSchema = specificModelInstanceInfoSchemaInput;
    const specificModelInfoSchema = specificModelInfoSchemaInput;
    return new BackendInterface().addChannelEndpoint("loadModel", {
      creationParameter: z.object({
        modelKey: z.string(),
        identifier: z.string().optional(),
        /**
         * If provided, when the model is not used for this amount of time, it will be unloaded.
         */
        ttlMs: z.number().int().min(1).optional(),
        loadConfigStack: kvConfigStackSchema
      }),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("resolved"),
          info: specificModelInfoSchema,
          ambiguous: z.array(z.string()).optional()
        }),
        z.object({
          type: z.literal("progress"),
          progress: z.number()
        }),
        z.object({
          type: z.literal("success"),
          info: specificModelInstanceInfoSchema
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("cancel")
        })
      ])
    }).addRpcEndpoint("unloadModel", {
      parameter: z.object({
        identifier: z.string()
      }),
      returns: z.void()
    }).addRpcEndpoint("listLoaded", {
      parameter: z.undefined(),
      returns: z.array(specificModelInstanceInfoSchema)
    }).addRpcEndpoint("getModelInfo", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        throwIfNotFound: z.boolean()
      }),
      returns: specificModelInstanceInfoSchema.optional()
    }).addRpcEndpoint("getLoadConfig", {
      parameter: z.object({
        specifier: modelSpecifierSchema
      }),
      returns: kvConfigSchema
    }).addChannelEndpoint("getOrLoad", {
      creationParameter: z.object({
        identifier: z.string(),
        /**
         * If provided and a new instance is loaded as a result of this call, it will be unloaded
         * after idling for this amount of time.
         */
        loadTtlMs: z.number().int().min(1).optional(),
        loadConfigStack: kvConfigStackSchema
      }),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("alreadyLoaded"),
          info: specificModelInstanceInfoSchema
        }),
        z.object({
          type: z.literal("startLoading"),
          identifier: z.string(),
          info: specificModelInfoSchema
        }),
        z.object({
          // We are unloading other JIT model
          type: z.literal("unloadingOtherJITModel"),
          info: modelInstanceInfoSchema
        }),
        z.object({
          type: z.literal("loadProgress"),
          progress: z.number()
        }),
        z.object({
          type: z.literal("loadSuccess"),
          info: specificModelInstanceInfoSchema
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("cancel")
        })
      ])
    });
  }
  function createDiagnosticsBackendInterface() {
    return new BackendInterface().addChannelEndpoint("streamLogs", {
      creationParameter: z.void(),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("stop")
        })
      ]),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("log"),
          log: diagnosticsLogEventSchema
        })
      ])
    });
  }
  function createEmbeddingBackendInterface() {
    const baseModelBackendInterface = createBaseModelBackendInterface(embeddingModelInstanceInfoSchema, embeddingModelInfoSchema);
    return baseModelBackendInterface.addRpcEndpoint("embedString", {
      parameter: z.object({
        modelSpecifier: modelSpecifierSchema,
        inputString: z.string()
      }),
      returns: z.object({
        embedding: z.array(z.number())
      })
    }).addRpcEndpoint("tokenize", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        inputString: z.string()
      }),
      returns: z.object({
        tokens: z.array(z.number())
      })
    }).addRpcEndpoint("countTokens", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        inputString: z.string()
      }),
      returns: z.object({
        tokenCount: z.number().int()
      })
    });
  }
  function createFilesBackendInterface() {
    return new BackendInterface().addRpcEndpoint("getLocalFileAbsolutePath", {
      parameter: z.object({
        fileName: z.string()
      }),
      returns: z.object({
        path: z.string()
      })
    }).addRpcEndpoint("uploadFileBase64", {
      parameter: z.object({
        name: z.string(),
        contentBase64: z.string()
      }),
      returns: z.object({
        identifier: z.string(),
        fileType: fileTypeSchema,
        sizeBytes: z.number().int()
      })
    }).addChannelEndpoint("retrieve", {
      creationParameter: z.object({
        query: z.string(),
        fileIdentifiers: z.array(z.string()),
        config: kvConfigSchema
      }),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("stop")
        })
      ]),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("onFileProcessList"),
          indices: z.array(z.number().int())
        }),
        z.object({
          type: z.literal("onFileProcessingStart"),
          index: z.number().int()
        }),
        z.object({
          type: z.literal("onFileProcessingEnd"),
          index: z.number().int()
        }),
        z.object({
          type: z.literal("onFileProcessingStepStart"),
          index: z.number().int(),
          step: retrievalFileProcessingStepSchema
        }),
        z.object({
          type: z.literal("onFileProcessingStepProgress"),
          index: z.number().int(),
          step: retrievalFileProcessingStepSchema,
          progress: z.number()
        }),
        z.object({
          type: z.literal("onFileProcessingStepEnd"),
          index: z.number().int(),
          step: retrievalFileProcessingStepSchema
        }),
        z.object({
          type: z.literal("onSearchingStart")
        }),
        z.object({
          type: z.literal("onSearchingEnd")
        }),
        z.object({
          type: z.literal("result"),
          result: internalRetrievalResultSchema
        })
      ])
    });
  }
  function createLlmBackendInterface() {
    const baseModelBackendInterface = createBaseModelBackendInterface(llmInstanceInfoSchema, llmInfoSchema);
    return baseModelBackendInterface.addChannelEndpoint("predict", {
      creationParameter: z.object({
        modelSpecifier: modelSpecifierSchema,
        history: chatHistoryDataSchema,
        predictionConfigStack: kvConfigStackSchema,
        /**
         * Which preset to use. Supports limited fuzzy matching.
         */
        fuzzyPresetIdentifier: z.string().optional(),
        ignoreServerSessionConfig: z.boolean().optional()
      }),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("fragment"),
          fragment: llmPredictionFragmentSchema,
          logprobs: z.array(z.array(z.object({ text: z.string(), logprob: z.number() }))).optional()
        }),
        z.object({
          type: z.literal("promptProcessingProgress"),
          progress: z.number()
        }),
        z.object({
          type: z.literal("toolCallGenerationStart")
        }),
        z.object({
          type: z.literal("toolCallGenerationEnd"),
          toolCallRequest: toolCallRequestSchema
        }),
        z.object({
          type: z.literal("toolCallGenerationFailed")
        }),
        z.object({
          type: z.literal("success"),
          stats: llmPredictionStatsSchema,
          modelInfo: llmInstanceInfoSchema,
          loadModelConfig: kvConfigSchema,
          predictionConfig: kvConfigSchema
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("cancel")
        })
      ])
    }).addRpcEndpoint("applyPromptTemplate", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        history: chatHistoryDataSchema,
        predictionConfigStack: kvConfigStackSchema,
        opts: llmApplyPromptTemplateOptsSchema
      }),
      returns: z.object({
        formatted: z.string()
      })
    }).addRpcEndpoint("tokenize", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        inputString: z.string()
      }),
      returns: z.object({
        tokens: z.array(z.number())
      })
    }).addRpcEndpoint("countTokens", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        inputString: z.string()
      }),
      returns: z.object({
        tokenCount: z.number().int()
      })
    }).addRpcEndpoint("preloadDraftModel", {
      parameter: z.object({
        specifier: modelSpecifierSchema,
        draftModelKey: z.string()
      }),
      returns: z.void()
    });
  }
  function createPluginsBackendInterface() {
    return new BackendInterface().addChannelEndpoint("registerDevelopmentPlugin", {
      creationParameter: z.object({
        manifest: pluginManifestSchema
      }),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("ready"),
          clientIdentifier: z.string(),
          clientPasskey: z.string()
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("end")
        })
      ])
    }).addRpcEndpoint("reindexPlugins", {
      parameter: z.void(),
      returns: z.void()
    }).addChannelEndpoint("setPreprocessor", {
      creationParameter: z.void(),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("preprocess"),
          taskId: z.string(),
          input: chatMessageDataSchema,
          config: kvConfigSchema,
          pluginConfig: kvConfigSchema,
          /** Processing Context Identifier */
          pci: z.string(),
          token: z.string()
        }),
        z.object({
          type: z.literal("abort"),
          taskId: z.string()
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("complete"),
          taskId: z.string(),
          processed: chatMessageDataSchema
        }),
        z.object({
          type: z.literal("aborted"),
          taskId: z.string()
        }),
        z.object({
          type: z.literal("error"),
          taskId: z.string(),
          error: serializedLMSExtendedErrorSchema
        })
      ])
    }).addChannelEndpoint("setGenerator", {
      creationParameter: z.void(),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("generate"),
          taskId: z.string(),
          config: kvConfigSchema,
          pluginConfig: kvConfigSchema,
          /** Processing Context Identifier */
          pci: z.string(),
          token: z.string()
        }),
        z.object({
          type: z.literal("abort"),
          taskId: z.string()
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("complete"),
          taskId: z.string()
        }),
        z.object({
          type: z.literal("aborted"),
          taskId: z.string()
        }),
        z.object({
          type: z.literal("error"),
          taskId: z.string(),
          error: serializedLMSExtendedErrorSchema
        })
      ])
    }).addRpcEndpoint("processingHandleUpdate", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string(),
        update: processingUpdateSchema
      }),
      returns: z.void()
    }).addRpcEndpoint("processingPullHistory", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string(),
        includeCurrent: z.boolean()
      }),
      returns: chatHistoryDataSchema
    }).addRpcEndpoint("processingGetOrLoadModel", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string()
      }),
      returns: z.object({
        identifier: z.string()
      })
    }).addRpcEndpoint("processingHasStatus", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string()
      }),
      returns: z.boolean()
    }).addRpcEndpoint("processingNeedsNaming", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string()
      }),
      returns: z.boolean()
    }).addRpcEndpoint("processingSuggestName", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string(),
        name: z.string()
      }),
      returns: z.void()
    }).addRpcEndpoint("processingSetSenderName", {
      parameter: z.object({
        /** Processing Context Identifier */
        pci: z.string(),
        token: z.string(),
        name: z.string()
      }),
      returns: z.void()
    }).addRpcEndpoint("setConfigSchematics", {
      parameter: z.object({
        schematics: serializedKVConfigSchematicsSchema
      }),
      returns: z.void()
    }).addRpcEndpoint("pluginInitCompleted", {
      parameter: z.void(),
      returns: z.void()
    });
  }
  function createRepositoryBackendInterface() {
    return new BackendInterface().addRpcEndpoint("searchModels", {
      parameter: z.object({
        opts: modelSearchOptsSchema
      }),
      returns: z.object({
        results: z.array(modelSearchResultEntryDataSchema)
      })
    }).addRpcEndpoint("getModelDownloadOptions", {
      parameter: z.object({
        modelSearchResultIdentifier: modelSearchResultIdentifierSchema
      }),
      returns: z.object({
        results: z.array(modelSearchResultDownloadOptionDataSchema)
      })
    }).addChannelEndpoint("downloadModel", {
      creationParameter: z.object({
        downloadIdentifier: z.string()
      }),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("downloadProgress"),
          update: downloadProgressUpdateSchema
        }),
        z.object({
          type: z.literal("startFinalizing")
        }),
        z.object({
          type: z.literal("success"),
          defaultIdentifier: z.string()
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("cancel")
        })
      ])
    }).addChannelEndpoint("downloadArtifact", {
      creationParameter: z.object({
        artifactOwner: kebabCaseSchema,
        artifactName: kebabCaseSchema,
        revisionNumber: z.number().int().nullable(),
        path: z.string()
      }),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("downloadProgress"),
          update: downloadProgressUpdateSchema
        }),
        z.object({
          type: z.literal("startFinalizing")
        }),
        z.object({
          type: z.literal("success")
        })
      ]),
      toServerPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("cancel")
        })
      ])
    }).addRpcEndpoint("installPluginDependencies", {
      parameter: z.object({
        pluginFolder: z.string()
      }),
      returns: z.void()
    }).addChannelEndpoint("pushArtifact", {
      creationParameter: z.object({
        path: z.string()
      }),
      toServerPacket: z.void(),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("message"),
          message: z.string()
        })
      ])
    }).addChannelEndpoint("ensureAuthenticated", {
      creationParameter: z.void(),
      toServerPacket: z.void(),
      toClientPacket: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("authenticationUrl"),
          url: z.string()
        }),
        z.object({
          type: z.literal("authenticated")
        })
      ])
    });
  }
  function createSystemBackendInterface() {
    return new BackendInterface().addRpcEndpoint("listDownloadedModels", {
      parameter: z.void(),
      returns: z.array(modelInfoSchema)
    }).addChannelEndpoint("alive", {
      creationParameter: z.void(),
      toServerPacket: z.void(),
      toClientPacket: z.void()
    }).addRpcEndpoint("notify", {
      parameter: backendNotificationSchema,
      returns: z.void()
    }).addRpcEndpoint("version", {
      parameter: z.void(),
      returns: z.object({
        /**
         * `major.minor.patch`
         */
        version: z.string(),
        /**
         * LM Studio build number
         */
        build: z.number()
      })
    }).addRpcEndpoint("setExperimentFlag", {
      parameter: z.object({
        code: z.string(),
        value: z.boolean()
      }),
      returns: z.void()
    }).addRpcEndpoint("getExperimentFlags", {
      parameter: z.void(),
      returns: z.array(z.string())
    });
  }
  function createAuthenticatedIpcTransportFactory(apiNamespace, hostedEnv, clientIdentifier, clientPasskey) {
    const [onMessage, emitOnMessage] = BufferedEvent.create();
    const [onClose, emitOnClose] = BufferedEvent.create();
    const sendToServer = hostedEnv.getApiIpcTunnel(apiNamespace, {
      authVersion: 1,
      clientIdentifier,
      clientPasskey
    }, emitOnMessage, emitOnClose);
    return GenericClientTransport.createFactory(onMessage, onClose, sendToServer);
  }
  function createAuthenticatedWsTransportFactory(apiNamespace, wsAddress, clientIdentifier, clientPasskey) {
    return AuthenticatedWsClientTransport.createAuthenticatedWsClientTransportFactory({
      url: Promise.resolve(wsAddress).then((wsAddress2) => `${wsAddress2}/${apiNamespace}`),
      clientIdentifier,
      clientPasskey
    });
  }
  function createAuthenticatedClientPort(backendInterface, wsAddress, apiNamespace, clientIdentifier, clientPasskey, logger2, { errorDeserializer, verboseErrorMessage } = {}) {
    const hostedEnv = getHostedEnv();
    if (hostedEnv !== null) {
      if (wsAddress !== void 0) {
        logger2.debug("Ignoring wsAddress parameter when constructing the client because the client is running in a hosted environment. This is not an error.");
      }
      return new ClientPort(backendInterface, createAuthenticatedIpcTransportFactory(apiNamespace, hostedEnv, clientIdentifier, clientPasskey), { parentLogger: logger2, errorDeserializer, verboseErrorMessage });
    } else {
      return new ClientPort(backendInterface, createAuthenticatedWsTransportFactory(apiNamespace, wsAddress, clientIdentifier, clientPasskey), { parentLogger: logger2, errorDeserializer, verboseErrorMessage });
    }
  }
  var DiagnosticsNamespace = class {
    /** @internal */
    constructor(diagnosticsPort, validator, parentLogger) {
      this.diagnosticsPort = diagnosticsPort;
      this.validator = validator;
      this.logger = new SimpleLogger("Diagnostics", parentLogger);
    }
    /**
     * Register a callback to receive log events. Return a function to stop receiving log events.
     *
     * This method is in alpha. Do not use this method in production yet.
     * @alpha
     */
    unstable_streamLogs(listener) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("client.diagnostics", "unstable_streamLogs", "listener", z.function(), listener, stack);
      const channel = this.diagnosticsPort.createChannel("streamLogs", void 0, void 0, {
        stack
      });
      const unsubscribe = channel.onMessage.subscribe((message) => {
        if (message.type === "log") {
          listener(message.log);
        }
      });
      return () => {
        unsubscribe();
        channel.send({
          type: "stop"
        });
      };
    }
  };
  function makeLoadModelOptsSchema(loadModelConfigSchema) {
    return z.object({
      identifier: z.string().optional(),
      config: loadModelConfigSchema.optional(),
      signal: z.instanceof(AbortSignal).optional(),
      ttl: z.number().optional(),
      verbose: z.union([z.boolean(), logLevelSchema]).optional(),
      onProgress: z.function().optional()
    });
  }
  var ModelNamespace = class {
    /** @internal */
    getLoadModelOptsSchema() {
      if (this.loadModelOptsSchema === null) {
        this.loadModelOptsSchema = makeLoadModelOptsSchema(this.loadModelConfigSchema);
      }
      return this.loadModelOptsSchema;
    }
    /** @internal */
    constructor(client, port, logger2, validator) {
      this.client = client;
      this.port = port;
      this.logger = logger2;
      this.validator = validator;
      this.loadModelOptsSchema = null;
    }
    /**
     * Load a model for inferencing. The first parameter is the model key. The second parameter is an
     * optional object with additional options.
     *
     * To find out what models are available, you can use the `lms ls` command, or programmatically
     * use the `client.system.listDownloadedModels` method.
     *
     * Here are some examples:
     *
     * Loading Llama 3.2:
     *
     * ```typescript
     * const model = await client.llm.load("llama-3.2-3b-instruct");
     * ```
     *
     * Once loaded, see {@link LLMDynamicHandle} or {@link EmbeddingDynamicHandle} for how to use the
     * model for inferencing or other things you can do with the model.
     *
     * @param modelKey - The path of the model to load.
     * @param opts - Options for loading the model.
     * @returns A promise that resolves to the model that can be used for inferencing
     */
    async load(modelKey, opts = {}) {
      const stack = getCurrentStack(1);
      [modelKey, opts] = this.validator.validateMethodParamsOrThrow(`client.${this.namespace}`, "load", ["modelKey", "opts"], [reasonableKeyStringSchema, this.getLoadModelOptsSchema()], [modelKey, opts], stack);
      const { identifier, signal, verbose = "info", config, onProgress } = opts;
      let lastVerboseCallTime = 0;
      const { promise, resolve, reject } = makePromise();
      const verboseLevel = typeof verbose === "boolean" ? "info" : verbose;
      const startTime = Date.now();
      if (verbose) {
        this.logger.logAtLevel(verboseLevel, text`
          Verbose logging is enabled. To hide progress logs, set the "verbose" option to false in
          client.llm.load.
        `);
      }
      let fullPath = modelKey;
      const channel = this.port.createChannel("loadModel", {
        modelKey,
        identifier,
        ttlMs: opts.ttl === void 0 ? void 0 : opts.ttl * 1e3,
        loadConfigStack: singleLayerKVConfigStackOf("apiOverride", this.loadConfigToKVConfig(config ?? this.defaultLoadConfig))
      }, (message) => {
        switch (message.type) {
          case "resolved": {
            fullPath = message.info.modelKey;
            if (message.ambiguous !== void 0) {
              this.logger.warn(text`
                Multiple models found for key ${modelKey}:

                ${message.ambiguous.map((x) => ` - ${x}`).join("\n")}

                Using the first one.
              `);
            }
            if (verbose) {
              this.logger.logAtLevel(verboseLevel, text`
                  Start loading model ${fullPath}...
                `);
            }
            break;
          }
          case "success": {
            if (verbose) {
              this.logger.logAtLevel(verboseLevel, text`
                  Successfully loaded model ${fullPath} in ${Date.now() - startTime}ms
                `);
            }
            resolve(this.createDomainSpecificModel(this.port, message.info, this.validator, this.logger));
            break;
          }
          case "progress": {
            const { progress } = message;
            if (onProgress !== void 0) {
              safeCallCallback(this.logger, "onProgress", onProgress, [progress]);
            } else if (verbose) {
              const now = Date.now();
              if (now - lastVerboseCallTime > 500 || progress === 1) {
                const progressText = (progress * 100).toFixed(1);
                this.logger.logAtLevel(verboseLevel, `Loading the model, progress: ${progressText}%`);
                lastVerboseCallTime = now;
              }
            }
          }
        }
      }, { stack });
      channel.onError.subscribeOnce(reject);
      signal?.addEventListener("abort", () => {
        channel.send({ type: "cancel" });
        reject(signal.reason);
      });
      return await promise;
    }
    /**
     * Unload a model. Once a model is unloaded, it can no longer be used. If you wish to use the
     * model afterwards, you will need to load it with {@link LLMNamespace#loadModel} again.
     *
     * @param identifier - The identifier of the model to unload.
     */
    unload(identifier) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow(`client.${this.namespace}`, "unload", "identifier", reasonableKeyStringSchema, identifier, stack);
      return this.port.callRpc("unloadModel", { identifier }, { stack });
    }
    /**
     * List all the currently loaded models.
     */
    async listLoaded() {
      const stack = getCurrentStack(1);
      const infos = await this.port.callRpc("listLoaded", void 0, { stack });
      return infos.map((info) => this.createDomainSpecificModel(this.port, info, this.validator, this.logger));
    }
    /**
     * Get any loaded model of this domain.
     */
    async getAny(stack) {
      const info = await this.port.callRpc("getModelInfo", { specifier: { type: "query", query: {} }, throwIfNotFound: true }, { stack });
      if (info === void 0) {
        throw new Error("Backend should have thrown.");
      }
      return this.createDomainSpecificModel(this.port, info, this.validator, new SimpleLogger("LLM", this.logger));
    }
    createDynamicHandle(param) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow(`client.${this.namespace}`, "createDynamicHandle", "param", z.union([reasonableKeyStringSchema, modelQuerySchema]), param, stack);
      let query;
      if (typeof param === "string") {
        query = {
          identifier: param
        };
      } else {
        query = param;
      }
      if (query.path?.includes("\\")) {
        throw makePrettyError(text`
          Model path should not contain backslashes, even if you are on Windows. Use forward
          slashes instead.
        `, stack);
      }
      return this.createDomainDynamicHandle(this.port, {
        type: "query",
        query
      }, this.validator, new SimpleLogger("DynamicHandle", this.logger));
    }
    /**
     * Create a dynamic handle from the internal instance reference.
     *
     * @alpha
     */
    createDynamicHandleFromInstanceReference(instanceReference) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow(`client.${this.namespace}`, "createDynamicHandleFromInstanceReference", "instanceReference", z.string(), instanceReference, stack);
      return this.createDomainDynamicHandle(this.port, {
        type: "instanceReference",
        instanceReference
      }, this.validator, new SimpleLogger("DynamicHandle", this.logger));
    }
    async model(modelKey, opts = {}) {
      const stack = getCurrentStack(1);
      if (modelKey === void 0) {
        return await this.getAny(stack);
      }
      [modelKey, opts] = this.validator.validateMethodParamsOrThrow(`client.${this.namespace}`, "model", ["modelKey", "opts"], [reasonableKeyStringSchema, this.getLoadModelOptsSchema()], [modelKey, opts], stack);
      const { identifier, signal, verbose = "info", config, onProgress } = opts;
      if (identifier !== void 0) {
        throw new Error("The identifier option is not allowed when using `.model`.");
      }
      let lastVerboseCallTime = 0;
      const { promise, resolve, reject } = makePromise();
      const verboseLevel = typeof verbose === "boolean" ? "info" : verbose;
      const startTime = Date.now();
      const channel = this.port.createChannel("getOrLoad", {
        identifier: modelKey,
        loadTtlMs: opts.ttl === void 0 ? void 0 : opts.ttl * 1e3,
        loadConfigStack: singleLayerKVConfigStackOf("apiOverride", this.loadConfigToKVConfig(config ?? this.defaultLoadConfig))
      }, (message) => {
        switch (message.type) {
          case "alreadyLoaded": {
            return resolve(this.createDomainSpecificModel(this.port, message.info, this.validator, this.logger));
          }
          case "unloadingOtherJITModel": {
            if (verbose) {
              this.logger.logAtLevel(verboseLevel, text`
                  Unloading other JIT model ${message.info.modelKey}. (You can disable this behavior
                  by going to LM Studio -> Settings -> Developer -> Turn OFF JIT models auto-evict)
                `);
            }
            break;
          }
          case "startLoading": {
            if (verbose) {
              this.logger.logAtLevel(verboseLevel, text`
                  Verbose logging is enabled. To hide progress logs, set the "verbose" option to
                  false in .model().
                `);
              this.logger.logAtLevel(verboseLevel, text`
                  Model ${modelKey} is not loaded. Start loading...
                `);
            }
            break;
          }
          case "loadProgress": {
            const { progress } = message;
            if (onProgress !== void 0) {
              safeCallCallback(this.logger, "onProgress", onProgress, [progress]);
            } else if (verbose) {
              const now = Date.now();
              if (now - lastVerboseCallTime > 500 || progress === 1) {
                const progressText = (progress * 100).toFixed(1);
                this.logger.logAtLevel(verboseLevel, `Loading the model, progress: ${progressText}%`);
                lastVerboseCallTime = now;
              }
            }
            break;
          }
          case "loadSuccess": {
            if (verbose) {
              this.logger.logAtLevel(verboseLevel, text`
                  Successfully loaded model ${message.info.modelKey} in ${Date.now() - startTime}ms
                `);
            }
            resolve(this.createDomainSpecificModel(this.port, message.info, this.validator, this.logger));
          }
        }
      }, { stack });
      channel.onError.subscribeOnce(reject);
      signal?.addEventListener("abort", () => {
        channel.send({ type: "cancel" });
        reject(signal.reason);
      });
      return await promise;
    }
  };
  function numberToCheckboxNumeric(value, uncheckedValue, valueWhenUnchecked) {
    if (value === void 0) {
      return void 0;
    }
    if (value === uncheckedValue) {
      return { checked: false, value: valueWhenUnchecked };
    }
    return { checked: true, value };
  }
  var DynamicHandle = class {
    /**
     * Don't construct this on your own. Use {@link LLMNamespace#get} or {@link LLMNamespace#load}
     * instead.
     *
     * @internal
     */
    constructor(port, specifier) {
      this.port = port;
      this.specifier = specifier;
    }
    /**
     * Gets the information of the model that is currently associated with this `DynamicHandle`. If no
     * model is currently associated, this will return `undefined`.
     *
     * Note: As models are loaded/unloaded, the model associated with this `LLMModel` may change at
     * any moment.
     */
    async getModelInfo() {
      const info = await this.port.callRpc("getModelInfo", { specifier: this.specifier, throwIfNotFound: false }, { stack: getCurrentStack(1) });
      if (info === void 0) {
        return void 0;
      }
      return info;
    }
    async getLoadConfig(stack) {
      const loadConfig = await this.port.callRpc("getLoadConfig", { specifier: this.specifier }, { stack });
      return loadConfig;
    }
  };
  var EmbeddingDynamicHandle = class extends DynamicHandle {
    /**
     * Don't construct this on your own. Use {@link EmbeddingNamespace#get} or
     * {@link EmbeddingNamespace#load}
     * instead.
     *
     * @internal
     */
    constructor(port, specifier, validator, logger2 = new SimpleLogger(`EmbeddingModel`)) {
      super(port, specifier);
      this.validator = validator;
      this.logger = logger2;
    }
    async embed(inputString) {
      const stack = getCurrentStack(1);
      inputString = this.validator.validateMethodParamOrThrow("client.embedding", "embed", "inputString", z.string().or(z.array(z.string())), inputString, stack);
      if (Array.isArray(inputString)) {
        return await Promise.all(inputString.map((s) => this.port.callRpc("embedString", { inputString: s, modelSpecifier: this.specifier }, { stack })));
      } else {
        return await this.port.callRpc("embedString", { inputString, modelSpecifier: this.specifier }, { stack });
      }
    }
    async getContextLength() {
      const stack = getCurrentStack(1);
      const loadConfig = await this.getLoadConfig(stack);
      return embeddingSharedLoadConfigSchematics.access(loadConfig, "contextLength");
    }
    async getEvalBatchSize() {
      const stack = getCurrentStack(1);
      const loadConfig = await this.getLoadConfig(stack);
      return globalConfigSchematics.access(loadConfig, "embedding.load.llama.evalBatchSize");
    }
    async tokenize(inputString) {
      const stack = getCurrentStack(1);
      inputString = this.validator.validateMethodParamOrThrow("model", "tokenize", "inputString", z.string().or(z.array(z.string())), inputString, stack);
      if (Array.isArray(inputString)) {
        return (await Promise.all(inputString.map((s) => this.port.callRpc("tokenize", { specifier: this.specifier, inputString: s }, { stack })))).map((r) => r.tokens);
      } else {
        return (await this.port.callRpc("tokenize", {
          specifier: this.specifier,
          inputString
        }, { stack })).tokens;
      }
    }
    async countTokens(inputString) {
      const stack = getCurrentStack(1);
      inputString = this.validator.validateMethodParamOrThrow("model", "countTokens", "inputString", z.string(), inputString, stack);
      return (await this.port.callRpc("countTokens", {
        specifier: this.specifier,
        inputString
      }, { stack })).tokenCount;
    }
  };
  var EmbeddingModel = class extends EmbeddingDynamicHandle {
    /** @internal */
    constructor(embeddingPort, info, validator, logger2 = new SimpleLogger(`EmbeddingModel`)) {
      const specifier = {
        type: "instanceReference",
        instanceReference: info.instanceReference
      };
      super(embeddingPort, specifier, validator, logger2);
      this.identifier = info.identifier;
      this.path = info.path;
      this.modelKey = info.modelKey;
      this.format = info.format;
      this.displayName = info.displayName;
      this.sizeBytes = info.sizeBytes;
    }
    async unload() {
      const stack = getCurrentStack(1);
      await this.port.callRpc("unloadModel", { identifier: this.identifier }, { stack });
    }
    async getModelInfo() {
      const info = await super.getModelInfo();
      if (info === void 0) {
        const stack = getCurrentStack(1);
        throw makePrettyError("This model has already been unloaded", stack);
      }
      return info;
    }
  };
  var EmbeddingNamespace = class extends ModelNamespace {
    constructor() {
      super(...arguments);
      this.namespace = "embedding";
      this.defaultLoadConfig = {};
      this.loadModelConfigSchema = embeddingLoadModelConfigSchema;
    }
    /** @internal */
    loadConfigToKVConfig(config) {
      return embeddingLlamaLoadConfigSchematics.buildPartialConfig({
        "llama.acceleration.offloadRatio": config.gpu?.ratio,
        "load.gpuSplitConfig": convertGPUSettingToGPUSplitConfig(config.gpu),
        "contextLength": config.contextLength,
        "llama.ropeFrequencyBase": numberToCheckboxNumeric(config.ropeFrequencyBase, 0, 0),
        "llama.ropeFrequencyScale": numberToCheckboxNumeric(config.ropeFrequencyScale, 0, 0),
        "llama.keepModelInMemory": config.keepModelInMemory,
        "llama.tryMmap": config.tryMmap
      });
    }
    /** @internal */
    createDomainSpecificModel(port, info, validator, logger2) {
      return new EmbeddingModel(port, info, validator, logger2);
    }
    /** @internal */
    createDomainDynamicHandle(port, specifier, validator, logger2) {
      return new EmbeddingDynamicHandle(port, specifier, validator, logger2);
    }
  };
  var retrievalCallbacksSchema = z.object({
    onFileProcessList: z.function().optional(),
    onFileProcessingStart: z.function().optional(),
    onFileProcessingEnd: z.function().optional(),
    onFileProcessingStepStart: z.function().optional(),
    onFileProcessingStepProgress: z.function().optional(),
    onFileProcessingStepEnd: z.function().optional(),
    onSearchingStart: z.function().optional(),
    onSearchingEnd: z.function().optional(),
    verbose: z.union([z.boolean(), z.string()]).optional()
  });
  var retrievalOptsSchema = z.object({
    chunkingMethod: retrievalChunkingMethodSchema.optional(),
    limit: z.number().int().optional(),
    embeddingModel: z.instanceof(EmbeddingDynamicHandle).optional(),
    databasePath: z.string().optional(),
    signal: z.instanceof(AbortSignal).optional(),
    ...retrievalCallbacksSchema.shape
  });
  function getProcessingStepName(processingStep) {
    switch (processingStep) {
      case "loading":
        return "Loading";
      case "chunking":
        return "Chunking";
      case "embedding":
        return "Embedding";
      default: {
        const exhaustiveCheck = processingStep;
        throw new Error(`Unexpected processing step: ${exhaustiveCheck}`);
      }
    }
  }
  var FilesNamespace = class {
    /** @internal */
    constructor(filesPort, validator, parentLogger) {
      this.filesPort = filesPort;
      this.validator = validator;
      this.logger = new SimpleLogger("File", parentLogger);
    }
    /**
     * Gets the absolute path to a local file.
     *
     * @internal
     */
    async getLocalFileAbsolutePath(fileName, stack) {
      return await this.filesPort.callRpc("getLocalFileAbsolutePath", { fileName }, { stack });
    }
    /**
     * Creates a file handle from a chat message part file data. Used internally.
     *
     * @internal
     */
    createFileHandleFromChatMessagePartFileData(data) {
      return new FileHandle(this, data.identifier, data.fileType, data.sizeBytes, data.name);
    }
    /**
     * Adds a temporary image to LM Studio, and returns a FileHandle that can be used to reference
     * this image. This image will be deleted when the client disconnects.
     *
     * This method can only be used in environments that have file system access (such as Node.js).
     */
    async prepareImage(path) {
      const result = await (0, import_lms_isomorphic.readFileAsBase64)(path);
      if (result.success === false) {
        throw new Error(text`
        Your current JavaScript environment does not support reading files. If you can read the file
        using other methods, please use "prepareImageBase64".
      `);
      }
      const fileName = path.split(/[\\/]/).at(-1);
      const { identifier, fileType, sizeBytes } = await this.filesPort.callRpc("uploadFileBase64", {
        name: fileName,
        contentBase64: result.base64
      });
      return new FileHandle(this, identifier, fileType, sizeBytes, fileName);
    }
    /**
     * Adds a temporary image to LM Studio. The content of the file is specified using base64. If you
     * are using Node.js and have a file laying around, consider using `prepareImage` instead.
     */
    async prepareImageBase64(fileName, contentBase64) {
      const { identifier, fileType, sizeBytes } = await this.filesPort.callRpc("uploadFileBase64", {
        name: fileName,
        contentBase64
      });
      return new FileHandle(this, identifier, fileType, sizeBytes, fileName);
    }
    /**
     * Adds a temporary file to LM Studio, and returns a FileHandle that can be used to reference this
     * file. This file will be deleted when the client disconnects.
     *
     * This method can only be used in environments that have file system access (such as Node.js).
     *
     * @deprecated Retrieval API is still in active development. Stay tuned for updates.
     */
    async prepareFile(path) {
      const result = await (0, import_lms_isomorphic.readFileAsBase64)(path);
      if (result.success === false) {
        throw new Error(text`
        Your current JavaScript environment does not support reading files. If you can read the file
        using other methods, please use "prepareFileBase64".
      `);
      }
      const fileName = path.split(/[\\/]/).at(-1);
      const { identifier, fileType, sizeBytes } = await this.filesPort.callRpc("uploadFileBase64", {
        name: fileName,
        contentBase64: result.base64
      });
      return new FileHandle(this, identifier, fileType, sizeBytes, fileName);
    }
    /**
     * Adds a temporary file to LM Studio. The content of the file is specified using base64. If you
     * are using Node.js and have a file laying around, consider using `prepareFile` instead.
     *
     * @deprecated Retrieval API is still in active development. Stay tuned for updates.
     */
    async prepareFileBase64(fileName, contentBase64) {
      const { identifier, fileType, sizeBytes } = await this.filesPort.callRpc("uploadFileBase64", {
        name: fileName,
        contentBase64
      });
      return new FileHandle(this, identifier, fileType, sizeBytes, fileName);
    }
    /**
     * @deprecated Retrieval API is still in active development. Stay tuned for updates.
     */
    async retrieve(query, files, opts = {}) {
      const logger2 = this.logger;
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamsOrThrow("client.retrieval", "retrieve", ["query", "filePaths", "opts"], [z.string(), z.array(z.instanceof(FileHandle)), retrievalOptsSchema], [query, files, opts], stack);
      const { verbose = "info" } = opts;
      const verboseLevel = typeof verbose === "boolean" ? "info" : verbose;
      const shouldLog = verbose && opts.onFileProcessList === void 0 && opts.onFileProcessingStart === void 0 && opts.onFileProcessingEnd === void 0 && opts.onFileProcessingStepStart === void 0 && opts.onFileProcessingStepProgress === void 0 && opts.onFileProcessingStepEnd === void 0 && opts.onSearchingStart === void 0 && opts.onSearchingEnd === void 0;
      if (opts.embeddingModel === void 0) {
        throw new Error("Embedding model currently is required.");
      }
      const resolveFileIndex = (index) => {
        const file = files[index];
        if (file === void 0) {
          throw new Error(`File not found: ${index}`);
        }
        return file;
      };
      const resolveFileIndices = (indices) => {
        return indices.map(resolveFileIndex);
      };
      const kvConfig = retrievalSchematics.buildPartialConfig({
        chunkingMethod: opts.chunkingMethod,
        databaseFile: opts.databasePath,
        embeddingModel: (await opts.embeddingModel.getModelInfo())?.identifier,
        limit: opts.limit
      });
      let filesToProcess;
      const filesProcessingStartTimes = [];
      let searchingStartTime = 0;
      let lastVerboseCallTime = 0;
      let lastVerboseLine = "";
      return await new Promise((resolve, reject) => {
        const channel = this.filesPort.createChannel("retrieve", { query, fileIdentifiers: files.map((file) => file.identifier), config: kvConfig }, (message) => {
          switch (message.type) {
            case "onFileProcessList":
              filesToProcess = resolveFileIndices(message.indices);
              safeCallCallback(logger2, "onFileProcessList", opts.onFileProcessList, [
                filesToProcess
              ]);
              if (shouldLog) {
                logger2.logAtLevel(verboseLevel, text`
                    Found ${filesToProcess.length} files need processing:
                    ${filesToProcess.map((file) => file.name).join(", ")}
                  `);
              }
              break;
            case "onFileProcessingStart": {
              if (filesToProcess === null) {
                throw new Error("onFileProcessList must be called before onFileProcessingStart");
              }
              const file = resolveFileIndex(message.index);
              safeCallCallback(logger2, "onFileProcessingStart", opts.onFileProcessingStart, [
                file,
                filesToProcess.indexOf(file),
                filesToProcess
              ]);
              if (shouldLog) {
                filesProcessingStartTimes[message.index] = Date.now();
                logger2.logAtLevel(verboseLevel, text`
                    Start processing file: ${file.name}
                    (${message.index + 1}/${filesToProcess.length})
                  `);
              }
              break;
            }
            case "onFileProcessingEnd": {
              if (filesToProcess === null) {
                throw new Error("onFileProcessList must be called before onFileProcessingEnd");
              }
              const file = resolveFileIndex(message.index);
              safeCallCallback(logger2, "onFileProcessingEnd", opts.onFileProcessingEnd, [
                file,
                filesToProcess.indexOf(file),
                filesToProcess
              ]);
              if (shouldLog) {
                logger2.logAtLevel(verboseLevel, text`
                    File processed: ${file.name}.
                    Time took: ${Date.now() - filesProcessingStartTimes[message.index]}ms
                  `);
              }
              break;
            }
            case "onFileProcessingStepStart":
              safeCallCallback(logger2, "onFileProcessingStepStart", opts.onFileProcessingStepStart, [resolveFileIndex(message.index), message.step]);
              break;
            case "onFileProcessingStepProgress": {
              safeCallCallback(logger2, "onFileProcessingStepProgress", opts.onFileProcessingStepProgress, [resolveFileIndex(message.index), message.step, message.progress]);
              const now = Date.now();
              if (shouldLog && (now - lastVerboseCallTime > 500 || message.progress === 1)) {
                lastVerboseCallTime = now;
                const line = text`
                  > ${getProcessingStepName(message.step)}: ${Math.round(message.progress * 100)}%
                `;
                if (lastVerboseLine !== line) {
                  lastVerboseLine = line;
                  logger2.logAtLevel(verboseLevel, line);
                }
              }
              break;
            }
            case "onFileProcessingStepEnd":
              safeCallCallback(logger2, "onFileProcessingStepEnd", opts.onFileProcessingStepEnd, [
                resolveFileIndex(message.index),
                message.step
              ]);
              break;
            case "onSearchingStart":
              safeCallCallback(logger2, "onSearchingStart", opts.onSearchingStart, []);
              if (shouldLog) {
                searchingStartTime = Date.now();
                logger2.logAtLevel(verboseLevel, "Start searching in the vector database...");
              }
              break;
            case "onSearchingEnd":
              safeCallCallback(logger2, "onSearchingEnd", opts.onSearchingEnd, []);
              if (shouldLog) {
                logger2.logAtLevel(verboseLevel, text`
                    Finished searching in the vector database.
                    Time took: ${Date.now() - searchingStartTime}ms
                  `);
              }
              break;
            case "result": {
              resolve({
                entries: message.result.entries.map((entry) => ({
                  content: entry.content,
                  score: entry.score,
                  source: files[entry.sourceIndex]
                }))
              });
              break;
            }
          }
        });
        opts.signal?.addEventListener("abort", () => {
          reject(opts.signal.reason);
          channel.send({ type: "stop" });
        });
        channel.onError.subscribeOnce(reject);
      });
    }
  };
  function deserializeOtherError(serialized, stack) {
    let content = import_chalk.default.redBright(` ${serialized.title} `);
    if (serialized.suggestion !== void 0) {
      content += "\n\n\n " + import_chalk.default.bgWhite.black("  (!) SUGGESTION  ") + "\n\n" + import_chalk.default.white(serialized.suggestion);
    }
    if (serialized.cause !== void 0) {
      content += "\n\n\n " + import_chalk.default.bgWhite.black("  (X) CAUSE  ") + "\n\n" + import_chalk.default.gray(serialized.cause);
    }
    return makePrettyError(content, stack);
  }
  var errorDeserializersMap = /* @__PURE__ */ new Map();
  function registerErrorDeserializer(code, deserializer) {
    errorDeserializersMap.set(code, deserializer);
  }
  function formatAvailableLLMs(availablePathsSample, totalModels) {
    if (availablePathsSample.length === 0) {
      return import_chalk.default.gray("    You don't have any LLMs downloaded.");
    }
    let text2 = availablePathsSample.map((path) => import_chalk.default.cyanBright(" \u2022 " + path)).join("\n");
    if (availablePathsSample.length < totalModels) {
      text2 += import_chalk.default.gray(`
     ... (and ${totalModels - availablePathsSample.length} more)`);
    }
    return text2;
  }
  registerErrorDeserializer("generic.pathNotFound", ({ availablePathsSample, path, totalModels }, stack) => {
    return makeTitledPrettyError(`Cannot find a model with path "${import_chalk.default.yellowBright(path)}"`, text`
        Here are your available models:

        ${formatAvailableLLMs(availablePathsSample, totalModels)}

        Run

            ${import_chalk.default.yellowBright("lms ls")}

        to see a full list of loadable models
      `, stack);
  });
  function formatLoadedModels(loadedModelsSample, totalLoadedModels) {
    if (loadedModelsSample.length === 0) {
      return import_chalk.default.gray("    You don't have any models loaded.");
    }
    let text2 = loadedModelsSample.map((path) => import_chalk.default.cyanBright(" \u2022 " + path)).join("\n");
    if (loadedModelsSample.length < totalLoadedModels) {
      text2 += import_chalk.default.gray(`
     ... (and ${totalLoadedModels - loadedModelsSample.length} more)`);
    }
    return text2;
  }
  registerErrorDeserializer("generic.identifierNotFound", ({ loadedModelsSample, identifier, totalLoadedModels }, stack) => {
    return makeTitledPrettyError(`Cannot find a model with identifier "${import_chalk.default.yellowBright(identifier)}"`, text`
        Here are your loaded models:

        ${formatLoadedModels(loadedModelsSample, totalLoadedModels)}

        Run

            ${import_chalk.default.yellowBright("lms ps")}

        to see a full list of loaded models
      `, stack);
  });
  registerErrorDeserializer("generic.specificModelUnloaded", (_, stack) => {
    return makePrettyError(import_chalk.default.bgRed.white(text`
      This model has already been unloaded.
    `), stack);
  });
  function getModelDomainTypeDisplayNameSingular(domain) {
    switch (domain) {
      case "llm":
        return "an LLM";
      case "embedding":
        return "an embedding model";
      case "imageGen":
        return "an image generation model";
      case "transcription":
        return "a transcription model";
      case "tts":
        return "a text-to-speech model";
      default: {
        const exhaustiveCheck = domain;
        console.error(`Unexpected domain type: ${exhaustiveCheck}`);
        return "Unknown Model Domain";
      }
    }
  }
  function formatQuery(query) {
    const requirements = [];
    if (query.domain !== void 0) {
      requirements.push(text`
      The model must be ${import_chalk.default.yellowBright(getModelDomainTypeDisplayNameSingular(query.domain))}
    `);
    }
    if (query.identifier !== void 0) {
      requirements.push(`The identifier must be exactly "${import_chalk.default.yellowBright(query.identifier)}"`);
    }
    if (query.path !== void 0) {
      requirements.push(`The path must match "${import_chalk.default.yellowBright(query.path)}"`);
    }
    if (requirements.length === 0) {
      return import_chalk.default.gray(" \u2022 Any Model");
    }
    return requirements.map((req) => import_chalk.default.white(" \u2022 " + req)).join("\n");
  }
  registerErrorDeserializer("generic.noModelMatchingQuery", ({ loadedModelsSample, totalLoadedModels, query }, stack) => {
    return makePrettyError(text`
        ${import_chalk.default.bgRed.white(" No loaded model satisfies all requirements specified in the query. ")}

        Loaded Models:

        ${formatLoadedModels(loadedModelsSample, totalLoadedModels)}

        Your query:

        ${formatQuery(query)}

        Run

            ${import_chalk.default.yellowBright("lms ps")}

        to see a full list of loaded models with details
      `, stack);
  });
  registerErrorDeserializer("generic.domainMismatch", ({ actualDomain, expectedDomain, path }, stack) => {
    return makePrettyError(text`
        ${import_chalk.default.bgRed.white(" Model has wrong domain. ")}

        Expecting ${import_chalk.default.greenBright(path)} to be ${import_chalk.default.yellowBright(getModelDomainTypeDisplayNameSingular(expectedDomain))}, but it is actually ${import_chalk.default.yellowBright(getModelDomainTypeDisplayNameSingular(actualDomain))}.
      `, stack);
  });
  function formatAvailablePresets(presets, totalAvailablePresets) {
    if (presets.length === 0) {
      return import_chalk.default.gray("    You don't have any presets available.");
    }
    let text2 = presets.map(({ identifier, name }) => import_chalk.default.cyanBright(` \u2022 ${name} (${import_chalk.default.cyan(identifier)})`)).join("\n");
    if (presets.length < totalAvailablePresets) {
      text2 += import_chalk.default.gray(`
     ... (and ${totalAvailablePresets - presets.length} more)`);
    }
    return text2;
  }
  registerErrorDeserializer("generic.presetNotFound", ({ specifiedFuzzyPresetIdentifier, availablePresetsSample, totalAvailablePresets }) => {
    return makeTitledPrettyError(`Cannot find a preset with identifier "${import_chalk.default.yellowBright(specifiedFuzzyPresetIdentifier)}"`, text`
        Here are your available presets:

        ${formatAvailablePresets(availablePresetsSample, totalAvailablePresets)}

        Note: To specify a preset in the SDK, you need to use its identifier (in parentheses). You
        can get a preset's identifier by right-clicking on it and then select "Copy Preset
        Identifier".
      `);
  });
  function friendlyErrorDeserializer(serialized, _directCause, stack) {
    if (serialized.displayData === void 0) {
      return deserializeOtherError(serialized, stack);
    }
    let error;
    const specificDeserializer = errorDeserializersMap.get(serialized.displayData.code);
    if (specificDeserializer !== void 0) {
      error = specificDeserializer(serialized.displayData, stack);
      attachSerializedErrorData(error, serialized);
      return error;
    } else {
      return deserializeOtherError(serialized, stack);
    }
  }
  function cacheQuantizationTypeToCheckbox({ value, falseDefault }) {
    return value === void 0 ? void 0 : value === false ? { checked: false, value: falseDefault } : { checked: true, value };
  }
  var ActResult = class {
    constructor(rounds, totalExecutionTimeSeconds) {
      this.rounds = rounds;
      this.totalExecutionTimeSeconds = totalExecutionTimeSeconds;
    }
  };
  var PredictionResult = class {
    constructor(content, reasoningContent, nonReasoningContent, stats, modelInfo, roundIndex, loadConfig, predictionConfig) {
      this.content = content;
      this.reasoningContent = reasoningContent;
      this.nonReasoningContent = nonReasoningContent;
      this.stats = stats;
      this.modelInfo = modelInfo;
      this.roundIndex = roundIndex;
      this.loadConfig = loadConfig;
      this.predictionConfig = predictionConfig;
    }
  };
  var StructuredPredictionResult = class extends PredictionResult {
    constructor(content, reasoningContent, nonReasoningContent, stats, modelInfo, roundIndex, loadConfig, predictionConfig, parsed) {
      super(content, reasoningContent, nonReasoningContent, stats, modelInfo, roundIndex, loadConfig, predictionConfig);
      this.parsed = parsed;
    }
  };
  var OngoingPrediction = class _OngoingPrediction extends StreamablePromise {
    async collect(fragments) {
      const content = fragments.map(({ content: content2 }) => content2).join("");
      const reasoningContent = fragments.filter(({ reasoningType }) => reasoningType === "reasoning").map(({ content: content2 }) => content2).join("");
      const nonReasoningContent = fragments.filter(({ reasoningType }) => reasoningType === "none").map(({ content: content2 }) => content2).join("");
      if (this.stats === null) {
        throw new Error("Stats should not be null");
      }
      if (this.modelInfo === null) {
        throw new Error("Model info should not be null");
      }
      if (this.loadModelConfig === null) {
        throw new Error("Load model config should not be null");
      }
      if (this.predictionConfig === null) {
        throw new Error("Prediction config should not be null");
      }
      if (this.parser === null) {
        return new PredictionResult(
          content,
          reasoningContent,
          nonReasoningContent,
          this.stats,
          this.modelInfo,
          // Currently, OngoingPrediction is only used with single round predictions. Thus always
          // use roundIndex 0.
          /* roundIndex */
          0,
          this.loadModelConfig,
          this.predictionConfig
        );
      } else {
        return new StructuredPredictionResult(
          content,
          reasoningContent,
          nonReasoningContent,
          this.stats,
          this.modelInfo,
          // Currently, OngoingPrediction is only used with single round predictions. Thus always
          // use roundIndex 0.
          /* predictionIndex */
          0,
          this.loadModelConfig,
          this.predictionConfig,
          this.parser(content)
        );
      }
    }
    constructor(onCancel, parser) {
      super();
      this.onCancel = onCancel;
      this.parser = parser;
      this.stats = null;
      this.modelInfo = null;
      this.loadModelConfig = null;
      this.predictionConfig = null;
    }
    /** @internal */
    static create(onCancel, parser) {
      const ongoingPrediction = new _OngoingPrediction(onCancel, parser);
      const finished2 = (stats, modelInfo, loadModelConfig, predictionConfig) => {
        ongoingPrediction.stats = stats;
        ongoingPrediction.modelInfo = modelInfo;
        ongoingPrediction.loadModelConfig = loadModelConfig;
        ongoingPrediction.predictionConfig = predictionConfig;
        ongoingPrediction.finished();
      };
      const failed = (error) => ongoingPrediction.finished(error);
      const push = (fragment) => ongoingPrediction.push(fragment);
      return { ongoingPrediction, finished: finished2, failed, push };
    }
    /**
     * Get the final prediction results. If you have been streaming the results, awaiting on this
     * method will take no extra effort, as the results are already available in the internal buffer.
     *
     * Example:
     *
     * ```typescript
     * const prediction = model.complete("When will The Winds of Winter be released?");
     * for await (const { content } of prediction) {
     *   process.stdout.write(content);
     * }
     * const result = await prediction.result();
     * console.log(result.stats);
     * ```
     *
     * Technically, awaiting on this method is the same as awaiting on the instance itself:
     *
     * ```typescript
     * await prediction.result();
     *
     * // Is the same as:
     *
     * await prediction;
     * ```
     */
    async result() {
      return await this;
    }
    /**
     * Cancels the prediction. This will stop the prediction with stop reason `userStopped`. See
     * {@link LLMPredictionStopReason} for other reasons that a prediction might stop.
     */
    async cancel() {
      this.onCancel();
    }
  };
  var llmPredictionOptsSchema = llmPredictionConfigInputSchema.extend({
    onPromptProcessingProgress: z.function().optional(),
    onFirstToken: z.function().optional(),
    onPredictionFragment: z.function().optional(),
    signal: z.instanceof(AbortSignal).optional(),
    preset: z.string().optional()
  });
  function splitPredictionOpts(opts) {
    const { onPromptProcessingProgress, onFirstToken, onPredictionFragment, signal, preset, ...config } = opts;
    return [
      config,
      { onPromptProcessingProgress, onFirstToken, onPredictionFragment, signal, preset }
    ];
  }
  var llmRespondOptsSchema = llmPredictionOptsSchema.extend({
    onMessage: z.function().optional()
  });
  function splitRespondOpts(opts) {
    const { onMessage, ...remaining } = opts;
    const [config, llmPredictionOpts] = splitPredictionOpts(remaining);
    return [config, llmPredictionOpts, { onMessage }];
  }
  var llmActionOptsSchema = llmPredictionConfigInputSchema.extend({
    onFirstToken: z.function().optional(),
    onPredictionFragment: z.function().optional(),
    onMessage: z.function().optional(),
    onRoundStart: z.function().optional(),
    onRoundEnd: z.function().optional(),
    onPredictionCompleted: z.function().optional(),
    onPromptProcessingProgress: z.function().optional(),
    handleInvalidToolRequest: z.function().optional(),
    maxPredictionRounds: z.number().int().min(1).optional(),
    signal: z.instanceof(AbortSignal).optional(),
    preset: z.string().optional()
  });
  var defaultHandleInvalidToolRequest = (error, request) => {
    if (request) {
      return error.message;
    }
    throw error;
  };
  function splitOperationOpts(opts) {
    const { onFirstToken, onPredictionFragment, onMessage, onRoundStart, onRoundEnd, onPredictionCompleted, onPromptProcessingProgress, handleInvalidToolRequest, maxPredictionRounds, signal, preset, ...config } = opts;
    return [
      config,
      {
        onFirstToken,
        onPredictionFragment,
        onMessage,
        onRoundStart,
        onRoundEnd,
        onPredictionCompleted,
        onPromptProcessingProgress,
        handleInvalidToolRequest,
        maxPredictionRounds,
        signal,
        preset
      }
    ];
  }
  var noFormattingTemplate = text`
  {% for message in messages %}{{ message['content'] }}{% endfor %}
`;
  var noFormattingInputConfig = {
    messagesConfig: {
      contentConfig: {
        type: "string"
      }
    },
    useTools: false
  };
  var LLMDynamicHandle = class extends DynamicHandle {
    /**
     * Don't construct this on your own. Use {@link LLMNamespace#get} or {@link LLMNamespace#load}
     * instead.
     *
     * @internal
     */
    constructor(port, specifier, validator, logger2 = new SimpleLogger(`LLMModel`)) {
      super(port, specifier);
      this.validator = validator;
      this.logger = logger2;
      this.internalKVConfigStack = { layers: [] };
      this.internalIgnoreServerSessionConfig = void 0;
    }
    /** @internal */
    predictInternal(history, predictionConfigStack, cancelEvent, extraOpts, onFragment, onFinished, onError) {
      let finished2 = false;
      let firstTokenTriggered = false;
      const channel = this.port.createChannel("predict", {
        modelSpecifier: this.specifier,
        history,
        predictionConfigStack,
        fuzzyPresetIdentifier: extraOpts.preset,
        ignoreServerSessionConfig: this.internalIgnoreServerSessionConfig
      }, (message) => {
        switch (message.type) {
          case "fragment":
            if (!firstTokenTriggered) {
              firstTokenTriggered = true;
              safeCallCallback(this.logger, "onFirstToken", extraOpts.onFirstToken, []);
            }
            safeCallCallback(this.logger, "onFragment", extraOpts.onPredictionFragment, [
              message.fragment
            ]);
            onFragment(message.fragment);
            break;
          case "promptProcessingProgress":
            safeCallCallback(this.logger, "onPromptProcessingProgress", extraOpts.onPromptProcessingProgress, [message.progress]);
            break;
          case "success":
            finished2 = true;
            onFinished(message.stats, message.modelInfo, message.loadModelConfig, message.predictionConfig);
            break;
        }
      }, { stack: getCurrentStack(2) });
      cancelEvent.subscribeOnce(() => {
        if (finished2) {
          return;
        }
        channel.send({ type: "cancel" });
      });
      channel.onError.subscribeOnce(onError);
    }
    predictionConfigInputToKVConfig(config) {
      let structuredField = void 0;
      if (typeof config.structured?.parse === "function") {
        structuredField = {
          type: "json",
          jsonSchema: zodToJsonSchema(config.structured)
        };
      } else {
        structuredField = config.structured;
      }
      const convertedConfig = {
        ...config,
        structured: structuredField
      };
      return llmPredictionConfigToKVConfig(convertedConfig);
    }
    createZodParser(zodSchema) {
      return (content) => {
        try {
          return zodSchema.parse(JSON.parse(content));
        } catch (e) {
          throw new Error("Failed to parse structured output: " + JSON.stringify(content), {
            cause: e
          });
        }
      };
    }
    /**
     * Use the loaded model to predict text.
     *
     * This method returns an {@link OngoingPrediction} object. An ongoing prediction can be used as a
     * promise (if you only care about the final result) or as an async iterable (if you want to
     * stream the results as they are being generated).
     *
     * Example usage as a promise (Resolves to a {@link PredictionResult}):
     *
     * ```typescript
     * const result = await model.complete("When will The Winds of Winter be released?");
     * console.log(result.content);
     * ```
     *
     * Or
     *
     * ```typescript
     * model.complete("When will The Winds of Winter be released?")
     *  .then(result =\> console.log(result.content))
     *  .catch(error =\> console.error(error));
     * ```
     *
     * Example usage as an async iterable (streaming):
     *
     * ```typescript
     * for await (const { content } of model.complete("When will The Winds of Winter be released?")) {
     *   process.stdout.write(content);
     * }
     * ```
     *
     * If you wish to stream the result, but also getting the final prediction results (for example,
     * you wish to get the prediction stats), you can use the following pattern:
     *
     * ```typescript
     * const prediction = model.complete("When will The Winds of Winter be released?");
     * for await (const { content } of prediction) {
     *   process.stdout.write(content);
     * }
     * const result = await prediction.result();
     * console.log(result.stats);
     * ```
     *
     * @param prompt - The prompt to use for prediction.
     * @param opts - Options for the prediction.
     */
    complete(prompt, opts = {}) {
      const stack = getCurrentStack(1);
      [prompt, opts] = this.validator.validateMethodParamsOrThrow("model", "complete", ["prompt", "opts"], [z.string(), llmPredictionOptsSchema], [prompt, opts], stack);
      const [config, extraOpts] = splitPredictionOpts(opts);
      const [cancelEvent, emitCancelEvent] = BufferedEvent.create();
      if (extraOpts.signal !== void 0) {
        extraOpts.signal.addEventListener("abort", () => {
          emitCancelEvent();
        }, { once: true });
      }
      const zodSchemaParseResult = zodSchemaSchema.safeParse(config.structured);
      const { ongoingPrediction, finished: finished2, failed, push } = OngoingPrediction.create(emitCancelEvent, !zodSchemaParseResult.success ? null : this.createZodParser(zodSchemaParseResult.data));
      this.predictInternal(this.resolveCompletionContext(prompt), {
        layers: [
          ...this.internalKVConfigStack.layers,
          {
            layerName: "apiOverride",
            config: this.predictionConfigInputToKVConfig({
              // If the user did not specify `stopStrings`, we default to an empty array. This is to
              // prevent the model from using the value set in the preset.
              stopStrings: [],
              ...config
            })
          },
          {
            layerName: "completeModeFormatting",
            config: llmSharedPredictionConfigSchematics.buildPartialConfig({
              promptTemplate: {
                type: "jinja",
                jinjaPromptTemplate: {
                  bosToken: "",
                  eosToken: "",
                  template: noFormattingTemplate,
                  inputConfig: noFormattingInputConfig
                },
                stopStrings: []
              }
            })
          }
        ]
      }, cancelEvent, extraOpts, (fragment) => push(fragment), (stats, modelInfo, loadModelConfig, predictionConfig) => finished2(stats, modelInfo, loadModelConfig, predictionConfig), (error) => failed(error));
      return ongoingPrediction;
    }
    resolveCompletionContext(contextInput) {
      return {
        messages: [
          {
            role: "user",
            content: [{ type: "text", text: contextInput }]
          }
        ]
      };
    }
    /**
     * Use the loaded model to generate a response based on the given history.
     *
     * This method returns an {@link OngoingPrediction} object. An ongoing prediction can be used as a
     * promise (if you only care about the final result) or as an async iterable (if you want to
     * stream the results as they are being generated).
     *
     * Example usage as a promise (Resolves to a {@link PredictionResult}):
     *
     * ```typescript
     * const history = [{ role: 'user', content: "When will The Winds of Winter be released?" }];
     * const result = await model.respond(history);
     * console.log(result.content);
     * ```
     *
     * Or
     *
     * ```typescript
     * const history = [{ role: 'user', content: "When will The Winds of Winter be released?" }];
     * model.respond(history)
     *  .then(result => console.log(result.content))
     *  .catch(error => console.error(error));
     * ```
     *
     * Example usage as an async iterable (streaming):
     *
     * ```typescript
     * const history = [{ role: 'user', content: "When will The Winds of Winter be released?" }];
     * for await (const { content } of model.respond(history)) {
     *   process.stdout.write(content);
     * }
     * ```
     *
     * If you wish to stream the result, but also getting the final prediction results (for example,
     * you wish to get the prediction stats), you can use the following pattern:
     *
     * ```typescript
     * const history = [{ role: 'user', content: "When will The Winds of Winter be released?" }];
     * const prediction = model.respond(history);
     * for await (const { content } of prediction) {
     *   process.stdout.write(content);
     * }
     * const result = await prediction;
     * console.log(result.stats);
     * ```
     *
     * @param chat - The LLMChatHistory array to use for generating a response.
     * @param opts - Options for the prediction.
     */
    respond(chat, opts = {}) {
      const stack = getCurrentStack(1);
      [chat, opts] = this.validator.validateMethodParamsOrThrow("model", "respond", ["chat", "opts"], [chatHistoryLikeSchema, llmRespondOptsSchema], [chat, opts], stack);
      const [cancelEvent, emitCancelEvent] = BufferedEvent.create();
      const [config, predictionOpts, respondOpts] = splitRespondOpts(opts);
      if (predictionOpts.signal !== void 0) {
        predictionOpts.signal.addEventListener("abort", () => {
          emitCancelEvent();
        }, { once: true });
      }
      const zodSchemaParseResult = zodSchemaSchema.safeParse(config.structured);
      const { ongoingPrediction, finished: finished2, failed, push } = OngoingPrediction.create(emitCancelEvent, !zodSchemaParseResult.success ? null : this.createZodParser(zodSchemaParseResult.data));
      this.predictInternal(accessMaybeMutableInternals(Chat.from(chat))._internalGetData(), addKVConfigToStack(this.internalKVConfigStack, "apiOverride", this.predictionConfigInputToKVConfig(config)), cancelEvent, predictionOpts, (fragment) => push(fragment), (stats, modelInfo, loadModelConfig, predictionConfig) => finished2(stats, modelInfo, loadModelConfig, predictionConfig), (error) => failed(error));
      ongoingPrediction.then((result) => {
        safeCallCallback(this.logger, "onMessage", respondOpts.onMessage, [
          ChatMessage.create("assistant", result.content)
        ]);
      });
      return ongoingPrediction;
    }
    /**
     * @param chat - The LLMChatHistory array to act from as the base
     * @param tool - An array of tools that the model can use during the operation. You can create
     * tools by using the `tool` function.
     * @param opts - Additional options
     *
     * Example:
     *
     * ```
     * import { LMStudioClient, tool } from "@lmstudio/sdk";
     * import { z } from "zod";
     *
     * const client = new LMStudioClient();
     * const model = await client.llm.model();
     *
     * const additionTool = tool({
     *   name: "add",
     *   description: "Add two numbers",
     *   parameters: {
     *     a: z.number(),
     *     b: z.number(),
     *   },
     *   implementation: ({ a, b }) => a + b,
     * });
     *
     * await model.act("What is 1234 + 4321?", [additionTool], {
     *   onMessage: message => console.log(message.toString()),
     * });
     * ```
     */
    async act(chat, tools, opts = {}) {
      const startTime = performance.now();
      const stack = getCurrentStack(1);
      [chat, opts] = this.validator.validateMethodParamsOrThrow("model", "act", ["chat", "opts"], [chatHistoryLikeSchema, llmActionOptsSchema], [chat, opts], stack);
      const [config, extraOpts] = splitOperationOpts(opts);
      const abortController = new AbortController();
      const mutableChat = Chat.from(chat);
      if (extraOpts.signal !== void 0) {
        extraOpts.signal.addEventListener("abort", () => {
          abortController.abort(extraOpts.signal?.reason);
        }, { once: true });
      }
      if (config.structured !== void 0) {
        throw makePrettyError("Structured output is currently not supported in act.", stack);
      }
      if (config.rawTools !== void 0) {
        throw makePrettyError("`rawTools` is not supported in act. Use `tools` instead", stack);
      }
      let shouldContinue = false;
      let predictionsPerformed = 0;
      let rawTools;
      if (tools.length === 0) {
        rawTools = { type: "none" };
      } else {
        rawTools = {
          type: "toolArray",
          tools: tools.map(toolToLLMTool)
        };
      }
      const configWithTools = addKVConfigToStack(this.internalKVConfigStack, "apiOverride", this.predictionConfigInputToKVConfig({
        ...config,
        rawTools
      }));
      const configWithoutTools = addKVConfigToStack(this.internalKVConfigStack, "apiOverride", this.predictionConfigInputToKVConfig({
        ...config,
        rawTools: { type: "none" }
      }));
      const toolsMap = /* @__PURE__ */ new Map();
      for (const tool of tools) {
        if (toolsMap.has(tool.name)) {
          this.logger.warnText`
          Duplicate tool (${tool.name}) found in the tools array. The last tool with the same name
          will be used.
        `;
        }
        toolsMap.set(tool.name, tool);
      }
      do {
        let configToUse = configWithTools;
        if (
          // If there is a defined number of max predictions,
          extraOpts.maxPredictionRounds !== void 0 && // ... and this is the last chance to perform predictions, don't allow the model to use
          // tools.
          predictionsPerformed + 1 >= extraOpts.maxPredictionRounds
        ) {
          configToUse = configWithoutTools;
        }
        let finished2 = false;
        let firstTokenTriggered = false;
        const contentArray = [];
        const reasoningContentArray = [];
        const nonReasoningContentArray = [];
        const toolCallRequests = [];
        let nextToolCallIndex = 0;
        const toolCallResults = [];
        const toolCallPromises = [];
        const { promise: predictionPromise, resolve: predictionResolve, reject: predictionReject } = makePromise();
        const { promise: finalPromise, resolve: finalResolve, reject: finalReject } = makePromise();
        const internalHandleInvalidToolCallRequest = async (error, request, toolCallIndex) => {
          let result;
          try {
            result = await (extraOpts.handleInvalidToolRequest ?? defaultHandleInvalidToolRequest)(error, request);
          } catch (error2) {
            abortController.abort();
            throw error2;
          }
          if (result === void 0) {
            return;
          }
          let resultString;
          try {
            resultString = JSON.stringify(result);
          } catch (error2) {
            abortController.abort();
            throw makePrettyError("handleInvalidToolRequest returned a value that cannot be converted to JSON.", stack);
          }
          if (request === void 0) {
            this.logger.warnText`
            The "handleInvalidToolRequest" callback has returned a result, but the tool request has
            completely failed to parse, thus LM Studio cannot provide the result to the tool call.
            Please avoid returning a result when the second parameter of the callback is undefined.
            See the documentation for "handleInvalidToolRequest" for more information.
          `;
          } else {
            toolCallResults.push({
              index: toolCallIndex,
              data: {
                type: "toolCallResult",
                toolCallId: request.id,
                content: resultString
              }
            });
            nextToolCallIndex++;
          }
        };
        abortController.signal.throwIfAborted();
        safeCallCallback(this.logger, "onRoundStart", extraOpts.onRoundStart, [predictionsPerformed]);
        const channel = this.port.createChannel("predict", {
          modelSpecifier: this.specifier,
          history: accessMaybeMutableInternals(mutableChat)._internalGetData(),
          predictionConfigStack: configToUse,
          fuzzyPresetIdentifier: extraOpts.preset,
          ignoreServerSessionConfig: this.internalIgnoreServerSessionConfig
        }, (message) => {
          switch (message.type) {
            case "fragment": {
              const fragment = message.fragment;
              if (!firstTokenTriggered) {
                firstTokenTriggered = true;
                safeCallCallback(this.logger, "onFirstToken", extraOpts.onFirstToken, [
                  predictionsPerformed
                ]);
              }
              safeCallCallback(this.logger, "onFragment", extraOpts.onPredictionFragment, [
                { roundIndex: predictionsPerformed, ...fragment }
              ]);
              contentArray.push(fragment.content);
              if (fragment.reasoningType === "reasoning") {
                reasoningContentArray.push(fragment.content);
              } else {
                nonReasoningContentArray.push(fragment.content);
              }
              break;
            }
            case "promptProcessingProgress": {
              safeCallCallback(this.logger, "onPromptProcessingProgress", extraOpts.onPromptProcessingProgress, [predictionsPerformed, message.progress]);
              break;
            }
            case "toolCallGenerationEnd": {
              const toolCallIndex = nextToolCallIndex;
              nextToolCallIndex++;
              const toolCallRequest = message.toolCallRequest;
              toolCallRequests.push(toolCallRequest);
              const tool = toolsMap.get(toolCallRequest.name);
              if (tool === void 0) {
                toolCallPromises.push(internalHandleInvalidToolCallRequest(new Error(`Cannot find tool with name ${toolCallRequest.name}.`), toolCallRequest, toolCallIndex).catch(finalReject));
                break;
              }
              const parseResult = tool.parametersSchema.safeParse(toolCallRequest.arguments ?? {});
              if (!parseResult.success) {
                toolCallPromises.push(internalHandleInvalidToolCallRequest(new Error(text`
                      Failed to parse arguments for tool ${toolCallRequest.name}:
                      ${parseResult.error.message}
                    `), toolCallRequest, toolCallIndex).catch(finalReject));
                break;
              }
              toolCallPromises.push((async () => {
                const result = await tool.implementation(parseResult.data);
                let resultString;
                if (result === void 0) {
                  resultString = "undefined";
                } else {
                  try {
                    resultString = JSON.stringify(result);
                  } catch (error) {
                    throw makePrettyError(`Return value of tool ${tool.name} cannot be converted to JSON.`, stack);
                  }
                }
                toolCallResults.push({
                  index: toolCallIndex,
                  data: {
                    type: "toolCallResult",
                    toolCallId: toolCallRequest.id,
                    content: resultString
                  }
                });
              })().catch(finalReject));
              break;
            }
            case "toolCallGenerationFailed": {
              toolCallPromises.push(internalHandleInvalidToolCallRequest(
                new Error(`Failed to parse tool call request.`),
                // We don't have a request in this because the model has failed miserably.
                void 0,
                // Tool call index. Doesn't matter because if there is no request, there cannot be
                // a replacement.
                0
              ).catch(finalReject));
              break;
            }
            case "success": {
              const predictionResult = new PredictionResult(contentArray.join(""), reasoningContentArray.join(""), nonReasoningContentArray.join(""), message.stats, message.modelInfo, predictionsPerformed, message.loadModelConfig, message.predictionConfig);
              safeCallCallback(this.logger, "onPredictionCompleted", extraOpts.onPredictionCompleted, [predictionResult]);
              predictionResolve();
              break;
            }
          }
        }, { stack });
        const abortListener = () => {
          if (finished2) {
            return;
          }
          finished2 = true;
          channel.send({ type: "cancel" });
        };
        abortController.signal.addEventListener("abort", abortListener);
        channel.onError.subscribeOnce((error) => {
          finished2 = true;
          predictionReject(error);
        });
        predictionPromise.then(() => {
          const assistantMessage = ChatMessage.from({
            role: "assistant",
            content: [
              {
                type: "text",
                text: contentArray.join("")
              },
              ...toolCallRequests.map((toolCallRequest) => ({
                type: "toolCallRequest",
                toolCallRequest
              }))
            ]
          });
          mutableChat.append(assistantMessage.asMutableCopy());
          safeCallCallback(this.logger, "onMessage", extraOpts.onMessage, [assistantMessage]);
        }).then(() => Promise.all(toolCallPromises)).then(() => finalResolve(), finalReject);
        await finalPromise;
        shouldContinue = false;
        if (toolCallResults.length > 0) {
          toolCallResults.sort((a, b) => a.index - b.index);
          const toolMessage = ChatMessage.from({
            role: "tool",
            content: toolCallResults.map((r) => r.data)
          });
          mutableChat.append(toolMessage.asMutableCopy());
          safeCallCallback(this.logger, "onMessage", extraOpts.onMessage, [toolMessage]);
          shouldContinue = true;
        }
        safeCallCallback(this.logger, "onRoundEnd", extraOpts.onRoundEnd, [predictionsPerformed]);
        predictionsPerformed++;
        if (extraOpts.maxPredictionRounds !== void 0 && predictionsPerformed >= extraOpts.maxPredictionRounds) {
          shouldContinue = false;
        }
      } while (shouldContinue);
      return new ActResult(predictionsPerformed, (performance.now() - startTime) / 1e3);
    }
    async getContextLength() {
      const stack = getCurrentStack(1);
      const loadConfig = await this.getLoadConfig(stack);
      return llmSharedLoadConfigSchematics.access(loadConfig, "contextLength");
    }
    async applyPromptTemplate(history, opts = {}) {
      const stack = getCurrentStack(1);
      [history, opts] = this.validator.validateMethodParamsOrThrow("model", "applyPromptTemplate", ["history", "opts"], [chatHistoryLikeSchema, llmApplyPromptTemplateOptsSchema], [history, opts], stack);
      return (await this.port.callRpc("applyPromptTemplate", {
        specifier: this.specifier,
        history: accessMaybeMutableInternals(Chat.from(history))._internalGetData(),
        predictionConfigStack: this.internalKVConfigStack,
        opts
      }, {
        stack
      })).formatted;
    }
    async tokenize(inputString) {
      const stack = getCurrentStack(1);
      inputString = this.validator.validateMethodParamOrThrow("model", "tokenize", "inputString", z.string().or(z.array(z.string())), inputString, stack);
      if (Array.isArray(inputString)) {
        return (await Promise.all(inputString.map((s) => this.port.callRpc("tokenize", { specifier: this.specifier, inputString: s }, { stack })))).map((r) => r.tokens);
      } else {
        return (await this.port.callRpc("tokenize", {
          specifier: this.specifier,
          inputString
        }, { stack })).tokens;
      }
    }
    async countTokens(inputString) {
      const stack = getCurrentStack(1);
      inputString = this.validator.validateMethodParamOrThrow("model", "countTokens", "inputString", z.string(), inputString, stack);
      return (await this.port.callRpc("countTokens", {
        specifier: this.specifier,
        inputString
      }, { stack })).tokenCount;
    }
    /**
     * Starts to eagerly preload a draft model. This is useful when you want a draft model to be ready
     * for speculative decoding.
     *
     * Preloading is done on a best-effort basis and may not always succeed. It is not guaranteed that
     * the draft model is actually loaded when this method returns. Thus, this method should only be
     * used as an optimization. The actual draft model used only depends on the parameter set when
     * performing the prediction.
     */
    async unstable_preloadDraftModel(draftModelKey) {
      const stack = getCurrentStack(1);
      draftModelKey = this.validator.validateMethodParamOrThrow("model", "unstable_preloadDraftModel", "draftModelKey", z.string(), draftModelKey, stack);
      await this.port.callRpc("preloadDraftModel", { specifier: this.specifier, draftModelKey }, { stack });
    }
  };
  var LLM = class extends LLMDynamicHandle {
    /** @internal */
    constructor(llmPort, info, validator, logger2 = new SimpleLogger(`LLM`)) {
      const specifier = {
        type: "instanceReference",
        instanceReference: info.instanceReference
      };
      super(llmPort, specifier, validator, logger2);
      this.identifier = info.identifier;
      this.path = info.path;
      this.modelKey = info.modelKey;
      this.format = info.format;
      this.displayName = info.displayName;
      this.sizeBytes = info.sizeBytes;
      this.vision = info.vision;
      this.trainedForToolUse = info.trainedForToolUse;
    }
    async unload() {
      const stack = getCurrentStack(1);
      await this.port.callRpc("unloadModel", { identifier: this.identifier }, { stack });
    }
    async getModelInfo() {
      const info = await super.getModelInfo();
      if (info === void 0) {
        const stack = getCurrentStack(1);
        throw makePrettyError("This model has already been unloaded", stack);
      }
      return info;
    }
  };
  var LLMNamespace = class extends ModelNamespace {
    constructor() {
      super(...arguments);
      this.namespace = "llm";
      this.defaultLoadConfig = {};
      this.loadModelConfigSchema = llmLoadModelConfigSchema;
    }
    /** @internal */
    loadConfigToKVConfig(config) {
      return llmLlamaMoeLoadConfigSchematics.buildPartialConfig({
        "contextLength": config.contextLength,
        "llama.evalBatchSize": config.evalBatchSize,
        "llama.acceleration.offloadRatio": config.gpu?.ratio,
        "load.gpuSplitConfig": convertGPUSettingToGPUSplitConfig(config.gpu),
        "llama.flashAttention": config.flashAttention,
        "llama.ropeFrequencyBase": numberToCheckboxNumeric(config.ropeFrequencyBase, 0, 0),
        "llama.ropeFrequencyScale": numberToCheckboxNumeric(config.ropeFrequencyScale, 0, 0),
        "llama.keepModelInMemory": config.keepModelInMemory,
        "seed": numberToCheckboxNumeric(config.seed, -1, 0),
        "llama.useFp16ForKVCache": config.useFp16ForKVCache,
        "llama.tryMmap": config.tryMmap,
        "numExperts": config.numExperts,
        "llama.kCacheQuantizationType": cacheQuantizationTypeToCheckbox({
          value: config.llamaKCacheQuantizationType,
          falseDefault: "f16"
        }),
        "llama.vCacheQuantizationType": cacheQuantizationTypeToCheckbox({
          value: config.llamaVCacheQuantizationType,
          falseDefault: "f16"
        })
      });
    }
    /** @internal */
    createDomainSpecificModel(port, info, validator, logger2) {
      return new LLM(port, info, validator, logger2);
    }
    /** @internal */
    createDomainDynamicHandle(port, specifier, validator, logger2) {
      return new LLMDynamicHandle(port, specifier, validator, logger2);
    }
  };
  var __addDisposableResource = globalThis && globalThis.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources = globalThis && globalThis.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  function stringifyAny(message) {
    switch (typeof message) {
      case "string":
        return message;
      case "number":
        return message.toString();
      case "boolean":
        return message ? "true" : "false";
      case "undefined":
        return "undefined";
      case "object":
        if (message === null) {
          return "null";
        }
        if (message instanceof Error) {
          return message.stack;
        }
        return JSON.stringify(message, null, 2);
      case "bigint":
        return message.toString();
      case "symbol":
        return message.toString();
      case "function":
        return message.toString();
      default:
        return "unknown";
    }
  }
  function concatenateDebugMessages(...messages) {
    return messages.map(stringifyAny).join(" ");
  }
  function createId() {
    return `${Date.now()}-${Math.random()}`;
  }
  var ProcessingConnector = class {
    constructor(pluginsPort, abortSignal, processingContextIdentifier, token, logger2) {
      this.pluginsPort = pluginsPort;
      this.abortSignal = abortSignal;
      this.processingContextIdentifier = processingContextIdentifier;
      this.token = token;
      this.logger = logger2;
    }
    handleUpdate(update) {
      this.pluginsPort.callRpc("processingHandleUpdate", {
        pci: this.processingContextIdentifier,
        token: this.token,
        update
      }).catch((error) => {
        this.logger.error("Failed to send update", error);
      });
    }
    async pullHistory(includeCurrent) {
      const chatHistoryData = await this.pluginsPort.callRpc("processingPullHistory", {
        pci: this.processingContextIdentifier,
        token: this.token,
        includeCurrent
      });
      return Chat.createRaw(
        chatHistoryData,
        /* mutable */
        false
      ).asMutableCopy();
    }
    async getOrLoadModel() {
      const result = await this.pluginsPort.callRpc("processingGetOrLoadModel", {
        pci: this.processingContextIdentifier,
        token: this.token
      });
      return result.identifier;
    }
    async hasStatus() {
      return await this.pluginsPort.callRpc("processingHasStatus", {
        pci: this.processingContextIdentifier,
        token: this.token
      });
    }
    async needsNaming() {
      return await this.pluginsPort.callRpc("processingNeedsNaming", {
        pci: this.processingContextIdentifier,
        token: this.token
      });
    }
    async suggestName(name) {
      await this.pluginsPort.callRpc("processingSuggestName", {
        pci: this.processingContextIdentifier,
        token: this.token,
        name
      });
    }
  };
  var ProcessingController = class {
    /** @internal */
    constructor(client, connector, config, pluginConfig, shouldIncludeCurrentInHistory) {
      this.client = client;
      this.connector = connector;
      this.config = config;
      this.pluginConfig = pluginConfig;
      this.shouldIncludeCurrentInHistory = shouldIncludeCurrentInHistory;
      this.model = Object.freeze({
        getOrLoad: async () => {
          const identifier = await this.connector.getOrLoadModel();
          const model = await this.client.llm.model(identifier);
          model.internalIgnoreServerSessionConfig = true;
          model.internalKVConfigStack = {
            layers: [
              {
                layerName: "conversationSpecific",
                config: this.config
              }
            ]
          };
          return model;
        }
      });
      this.abortSignal = connector.abortSignal;
      this.processingControllerHandle = {
        abortSignal: connector.abortSignal,
        sendUpdate: (update) => {
          connector.handleUpdate(update);
        }
      };
    }
    sendUpdate(update) {
      this.processingControllerHandle.sendUpdate(update);
    }
    getPluginConfig(configSchematics) {
      return configSchematics.parse(this.pluginConfig);
    }
    /**
     * Gets a mutable copy of the current history. The returned history is a copy, so mutating it will
     * not affect the actual history. It is mutable for convenience reasons.
     *
     * - If you are a preprocessor, this will not include the user message you are currently
     *   preprocessing.
     * - If you are a generator, this will include the user message, and can be fed into the
     *   {@link LLMDynamicHandle#respond} directly.
     */
    async pullHistory() {
      return await this.connector.pullHistory(this.shouldIncludeCurrentInHistory);
    }
    createStatus(initialState) {
      const id = createId();
      this.sendUpdate({
        type: "status.create",
        id,
        state: initialState
      });
      const statusController = new PredictionProcessStatusController(this.processingControllerHandle, initialState, id);
      return statusController;
    }
    addCitations(arg) {
      if (Array.isArray(arg)) {
        for (const entry of arg) {
          this.createCitationBlock(entry.content, {
            fileName: entry.source.name,
            fileIdentifier: entry.source.identifier
          });
        }
      } else {
        for (const entry of arg.entries) {
          this.createCitationBlock(entry.content, {
            fileName: entry.source.name,
            fileIdentifier: entry.source.identifier
          });
        }
      }
    }
    createCitationBlock(citedText, source) {
      const id = createId();
      this.sendUpdate({
        type: "citationBlock.create",
        id,
        citedText,
        ...source
      });
      const citationBlockController = new PredictionProcessCitationBlockController(this.processingControllerHandle, id);
      return citationBlockController;
    }
    /**
     * @internal
     */
    createDebugInfoBlock(debugInfo) {
      const id = createId();
      this.sendUpdate({
        type: "debugInfoBlock.create",
        id,
        debugInfo
      });
      const debugInfoBlockController = new PredictionProcessDebugInfoBlockController(this.processingControllerHandle, id);
      return debugInfoBlockController;
    }
    createContentBlock({ includeInContext = true, style, prefix, suffix } = {}) {
      const id = createId();
      this.sendUpdate({
        type: "contentBlock.create",
        id,
        includeInContext,
        style,
        prefix,
        suffix
      });
      const contentBlockController = new PredictionProcessContentBlockController(this.processingControllerHandle, id);
      return contentBlockController;
    }
    debug(...messages) {
      this.createDebugInfoBlock(concatenateDebugMessages(...messages));
    }
    getPredictionConfig() {
      return kvConfigToLLMPredictionConfig(this.config);
    }
    /**
     * Sets the sender name for this message. The sender name shown above the message in the chat.
     */
    async setSenderName(name) {
      this.sendUpdate({
        type: "setSenderName",
        name
      });
    }
    /**
     * Throws an error if the prediction process has been aborted. Sprinkle this throughout your code
     * to ensure that the prediction process is aborted as soon as possible.
     */
    guardAbort() {
      this.abortSignal.throwIfAborted();
    }
    /**
     * Whether this prediction process has had any status.
     */
    async hasStatus() {
      return await this.connector.hasStatus();
    }
    /**
     * Returns whether this conversation needs a name.
     */
    async needsNaming() {
      return await this.connector.needsNaming();
    }
    /**
     * Suggests a name for this conversation.
     */
    async suggestName(name) {
      await this.connector.suggestName(name);
    }
  };
  var PredictionProcessStatusController = class _PredictionProcessStatusController {
    /** @internal */
    constructor(handle, initialState, id, indentation = 0) {
      this.handle = handle;
      this.id = id;
      this.indentation = indentation;
      this.lastSubStatus = this;
      this.lastState = initialState;
    }
    setText(text2) {
      this.lastState.text = text2;
      this.handle.sendUpdate({
        type: "status.update",
        id: this.id,
        state: this.lastState
      });
    }
    setState(state) {
      this.lastState = state;
      this.handle.sendUpdate({
        type: "status.update",
        id: this.id,
        state
      });
    }
    remove() {
      this.handle.sendUpdate({
        type: "status.remove",
        id: this.id
      });
    }
    getNestedLastSubStatusBlockId() {
      let current2 = this.lastSubStatus;
      while (current2 !== current2.lastSubStatus) {
        current2 = current2.lastSubStatus;
      }
      return current2.id;
    }
    addSubStatus(initialState) {
      const id = createId();
      this.handle.sendUpdate({
        type: "status.create",
        id,
        state: initialState,
        location: {
          type: "afterId",
          id: this.getNestedLastSubStatusBlockId()
        },
        indentation: this.indentation + 1
      });
      const controller = new _PredictionProcessStatusController(this.handle, initialState, id, this.indentation + 1);
      this.lastSubStatus = controller;
      return controller;
    }
  };
  var PredictionProcessCitationBlockController = class {
    /** @internal */
    constructor(handle, id) {
      this.handle = handle;
      this.id = id;
    }
  };
  var PredictionProcessDebugInfoBlockController = class {
    /** @internal */
    constructor(handle, id) {
      this.handle = handle;
      this.id = id;
    }
  };
  var PredictionProcessContentBlockController = class {
    /** @internal */
    constructor(handle, id) {
      this.handle = handle;
      this.id = id;
    }
    appendText(text2, { tokensCount, fromDraftModel } = {}) {
      this.handle.sendUpdate({
        type: "contentBlock.appendText",
        id: this.id,
        text: text2,
        tokensCount,
        fromDraftModel
      });
    }
    replaceText(text2) {
      this.handle.sendUpdate({
        type: "contentBlock.replaceText",
        id: this.id,
        text: text2
      });
    }
    setStyle(style) {
      this.handle.sendUpdate({
        type: "contentBlock.setStyle",
        id: this.id,
        style
      });
    }
    setPrefix(prefix) {
      this.handle.sendUpdate({
        type: "contentBlock.setPrefix",
        id: this.id,
        prefix
      });
    }
    setSuffix(suffix) {
      this.handle.sendUpdate({
        type: "contentBlock.setSuffix",
        id: this.id,
        suffix
      });
    }
    attachGenInfo(genInfo) {
      this.handle.sendUpdate({
        type: "contentBlock.attachGenInfo",
        id: this.id,
        genInfo
      });
    }
    async pipeFrom(prediction) {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const cleaner = __addDisposableResource(env_1, new Cleaner(), false);
        const abortListener = () => {
          prediction.cancel();
        };
        this.handle.abortSignal.addEventListener("abort", abortListener);
        cleaner.register(() => {
          this.handle.abortSignal.removeEventListener("abort", abortListener);
        });
        for await (const { content } of prediction) {
          this.appendText(content);
        }
        const result = await prediction;
        this.attachGenInfo({
          indexedModelIdentifier: result.modelInfo.path,
          identifier: result.modelInfo.identifier,
          loadModelConfig: result.loadConfig,
          predictionConfig: result.predictionConfig,
          stats: result.stats
        });
        this.handle.abortSignal.throwIfAborted();
        return result;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources(env_1);
      }
    }
  };
  var registerDevelopmentPluginOptsSchema = z.object({
    manifest: pluginManifestSchema
  });
  var PluginsNamespace = class {
    /** @internal */
    constructor(port, client, validator, parentLogger, rootLogger) {
      this.port = port;
      this.client = client;
      this.validator = validator;
      this.rootLogger = rootLogger;
      this.logger = new SimpleLogger("Plugins", parentLogger);
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async registerDevelopmentPlugin(opts) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("plugins", "registerDevelopmentPlugin", "opts", registerDevelopmentPluginOptsSchema, opts, stack);
      const { promise, resolve } = makePromise();
      const channel = this.port.createChannel("registerDevelopmentPlugin", opts, (message) => {
        if (message.type === "ready") {
          resolve({
            clientIdentifier: message.clientIdentifier,
            clientPasskey: message.clientPasskey
          });
        }
      }, { stack });
      const unregister = async () => {
        channel.send({ type: "end" });
        const { promise: promise2, resolve: resolve2 } = makePromise();
        channel.onClose.subscribeOnce(resolve2);
        await promise2;
      };
      const base = await promise;
      return {
        ...base,
        unregister
      };
    }
    /**
     * Requests LM Studio to reindex all the plugins.
     *
     * CAVEAT: Currently, we do not wait for the reindex to complete before returning. In the future,
     * we will change this behavior and only return after the reindex is completed.
     *
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async reindexPlugins() {
      const stack = getCurrentStack(1);
      await this.port.callRpc("reindexPlugins", void 0, { stack });
    }
    /**
     * Sets the preprocessor to be used by the plugin represented by this client.
     *
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    setPreprocessor(preprocessor) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("plugins", "registerPreprocessor", "preprocessor", z.function(), preprocessor, stack);
      const logger2 = new SimpleLogger(`Preprocessor`, this.rootLogger);
      logger2.info("Register with LM Studio");
      const tasks = /* @__PURE__ */ new Map();
      const channel = this.port.createChannel("setPreprocessor", void 0, (message) => {
        switch (message.type) {
          case "preprocess": {
            const taskLogger = new SimpleLogger(`Request (${message.taskId.substring(0, 6)})`, logger2);
            taskLogger.info(`New preprocess request received.`);
            const abortController = new AbortController();
            const connector = new ProcessingConnector(this.port, abortController.signal, message.pci, message.token, taskLogger);
            const input = ChatMessage.createRaw(
              message.input,
              /* mutable */
              false
            );
            const controller = new ProcessingController(
              this.client,
              connector,
              message.config,
              message.pluginConfig,
              /* shouldIncludeInputInHistory */
              false
            );
            tasks.set(message.taskId, {
              cancel: () => {
                abortController.abort();
              },
              taskLogger
            });
            preprocessor(controller, input.asMutableCopy()).then((result) => {
              taskLogger.info(`Preprocess request completed.`);
              const parsedReturned = z.union([z.string(), z.custom((v) => v instanceof ChatMessage)]).safeParse(result);
              if (!parsedReturned.success) {
                throw new Error("Preprocessor returned an invalid value:" + Validator.prettyPrintZod("result", parsedReturned.error));
              }
              const returned = parsedReturned.data;
              let processed;
              if (typeof returned === "string") {
                const messageCopy = input.asMutableCopy();
                messageCopy.replaceText(returned);
                processed = messageCopy.getRaw();
              } else {
                processed = returned.getRaw();
              }
              channel.send({
                type: "complete",
                taskId: message.taskId,
                processed
              });
            }).catch((error) => {
              if (error.name === "AbortError") {
                logger2.info(`Request successfully aborted.`);
                channel.send({
                  type: "aborted",
                  taskId: message.taskId
                });
                return;
              }
              logger2.warn(`Preprocessing failed.`, error);
              channel.send({
                type: "error",
                taskId: message.taskId,
                error: serializeError(error)
              });
            }).finally(() => {
              tasks.delete(message.taskId);
            });
            break;
          }
          case "abort": {
            const task = tasks.get(message.taskId);
            if (task !== void 0) {
              task.taskLogger.info(`Received abort request.`);
              task.cancel();
              tasks.delete(message.taskId);
            }
            break;
          }
        }
      }, { stack });
    }
    /**
     * Sets the preprocessor to be used by the plugin represented by this client.
     *
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    setGenerator(generator) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("plugins", "setGenerator", "generator", z.function(), generator, stack);
      const logger2 = new SimpleLogger(`   Generator`, this.rootLogger);
      logger2.info("Register with LM Studio");
      const tasks = /* @__PURE__ */ new Map();
      const channel = this.port.createChannel("setGenerator", void 0, (message) => {
        switch (message.type) {
          case "generate": {
            const taskLogger = new SimpleLogger(`Request (${message.taskId.substring(0, 6)})`, logger2);
            taskLogger.info(`New generate request received.`);
            const abortController = new AbortController();
            const connector = new ProcessingConnector(this.port, abortController.signal, message.pci, message.token, taskLogger);
            const controller = new ProcessingController(
              this.client,
              connector,
              message.config,
              message.pluginConfig,
              /* shouldIncludeInputInHistory */
              true
            );
            tasks.set(message.taskId, {
              cancel: () => {
                abortController.abort();
              },
              taskLogger
            });
            generator(controller).then(() => {
              channel.send({
                type: "complete",
                taskId: message.taskId
              });
            }).catch((error) => {
              if (error.name === "AbortError") {
                logger2.info(`Request successfully aborted.`);
                channel.send({
                  type: "aborted",
                  taskId: message.taskId
                });
                return;
              }
              logger2.warn(`Generation failed.`, error);
              channel.send({
                type: "error",
                taskId: message.taskId,
                error: serializeError(error)
              });
            }).finally(() => {
              tasks.delete(message.taskId);
            });
            break;
          }
          case "abort": {
            const task = tasks.get(message.taskId);
            if (task !== void 0) {
              task.taskLogger.info(`Received abort request.`);
              task.cancel();
              tasks.delete(message.taskId);
            }
            break;
          }
        }
      }, { stack });
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async setConfigSchematics(configSchematics) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("llm", "setConfigSchematics", "configSchematics", z.instanceof(KVConfigSchematics), configSchematics, stack);
      await this.port.callRpc("setConfigSchematics", {
        schematics: configSchematics.serialize()
      }, { stack });
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async initCompleted() {
      const stack = getCurrentStack(1);
      await this.port.callRpc("pluginInitCompleted", void 0, { stack });
    }
  };
  var downloadOptsSchema = z.object({
    onProgress: z.function().optional(),
    onStartFinalizing: z.function().optional(),
    signal: z.instanceof(AbortSignal).optional()
  });
  var ModelSearchResultDownloadOption = class {
    /** @internal */
    constructor(repositoryPort, validator, logger2, data) {
      this.repositoryPort = repositoryPort;
      this.validator = validator;
      this.logger = logger2;
      this.data = data;
      this.quantization = data.quantization;
      this.name = data.name;
      this.sizeBytes = data.sizeBytes;
      this.fitEstimation = this.data.fitEstimation;
      this.indexedModelIdentifier = this.data.indexedModelIdentifier;
    }
    isRecommended() {
      return this.data.recommended ?? false;
    }
    /**
     * Download the model. Returns the model key which can be used to load the model.
     */
    async download(opts = {}) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("ModelSearchResultDownloadOption", "download", "opts", downloadOptsSchema, opts, stack);
      const { promise, resolve, reject } = makePromise();
      const channel = this.repositoryPort.createChannel("downloadModel", {
        downloadIdentifier: this.data.downloadIdentifier
      }, (message) => {
        switch (message.type) {
          case "downloadProgress": {
            safeCallCallback(this.logger, "onProgress", opts.onProgress, [message.update]);
            break;
          }
          case "startFinalizing": {
            safeCallCallback(this.logger, "onStartFinalizing", opts.onStartFinalizing, []);
            break;
          }
          case "success": {
            resolve(message.defaultIdentifier);
            break;
          }
          default: {
            const exhaustiveCheck = message;
            throw new Error(`Unexpected message type: ${exhaustiveCheck}`);
          }
        }
      }, { stack });
      channel.onError.subscribeOnce(reject);
      channel.onClose.subscribeOnce(() => {
        if (opts.signal?.aborted) {
          reject(opts.signal.reason);
        } else {
          reject(new Error("Channel closed unexpectedly."));
        }
      });
      const abortListener = () => {
        channel.send({ type: "cancel" });
      };
      opts.signal?.addEventListener("abort", abortListener);
      promise.finally(() => {
        opts.signal?.removeEventListener("abort", abortListener);
      });
      return await promise;
    }
  };
  var ModelSearchResultEntry = class {
    /**
     * @internal
     */
    constructor(repositoryPort, validator, logger2, data) {
      this.repositoryPort = repositoryPort;
      this.validator = validator;
      this.logger = logger2;
      this.data = data;
      this.name = data.name;
    }
    isExactMatch() {
      return this.data.exact ?? false;
    }
    isStaffPick() {
      return this.data.staffPick ?? false;
    }
    async getDownloadOptions() {
      const { results } = await this.repositoryPort.callRpc("getModelDownloadOptions", {
        modelSearchResultIdentifier: this.data.identifier
      });
      return results.map((data) => new ModelSearchResultDownloadOption(this.repositoryPort, this.validator, this.logger, data));
    }
  };
  var downloadArtifactOptsSchema = z.object({
    owner: z.string(),
    name: z.string(),
    revisionNumber: z.number(),
    path: z.string(),
    onProgress: z.function().optional(),
    onStartFinalizing: z.function().optional(),
    signal: z.instanceof(AbortSignal).optional()
  });
  var pushArtifactOptsSchema = z.object({
    path: z.string(),
    onMessage: z.function().optional()
  });
  var ensureAuthenticatedOptsSchema = z.object({
    onAuthenticationUrl: z.function()
  });
  var RepositoryNamespace = class {
    /** @internal */
    constructor(repositoryPort, validator, parentLogger) {
      this.repositoryPort = repositoryPort;
      this.validator = validator;
      this.logger = new SimpleLogger("Repository", parentLogger);
    }
    async searchModels(opts) {
      const stack = getCurrentStack(1);
      opts = this.validator.validateMethodParamOrThrow("repository", "search", "opts", modelSearchOptsSchema, opts, stack);
      const { results } = await this.repositoryPort.callRpc("searchModels", { opts }, { stack });
      return results.map((data) => new ModelSearchResultEntry(this.repositoryPort, this.validator, this.logger, data));
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async installPluginDependencies(pluginFolder) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("repository", "installPluginDependencies", "pluginFolder", z.string(), pluginFolder, stack);
      await this.repositoryPort.callRpc("installPluginDependencies", { pluginFolder }, { stack });
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async downloadArtifact(opts) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("client.repository", "downloadArtifact", "opts", downloadArtifactOptsSchema, opts, stack);
      const { owner, name, revisionNumber, path, onProgress, onStartFinalizing, signal } = opts;
      const { promise, resolve, reject } = makePromise();
      const channel = this.repositoryPort.createChannel("downloadArtifact", { artifactOwner: owner, artifactName: name, revisionNumber, path }, (message) => {
        switch (message.type) {
          case "downloadProgress": {
            safeCallCallback(this.logger, "onProgress", opts.onProgress, [message.update]);
            break;
          }
          case "startFinalizing": {
            safeCallCallback(this.logger, "onStartFinalizing", opts.onStartFinalizing, []);
            break;
          }
          case "success": {
            resolve();
            break;
          }
          default: {
            const exhaustiveCheck = message;
            throw new Error(`Unexpected message type: ${exhaustiveCheck}`);
          }
        }
      }, { stack });
      channel.onError.subscribeOnce(reject);
      channel.onClose.subscribeOnce(() => {
        if (opts.signal?.aborted) {
          reject(opts.signal.reason);
        } else {
          reject(new Error("Channel closed unexpectedly."));
        }
      });
      const abortListener = () => {
        channel.send({ type: "cancel" });
      };
      opts.signal?.addEventListener("abort", abortListener);
      promise.finally(() => {
        opts.signal?.removeEventListener("abort", abortListener);
      });
      return await promise;
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async pushArtifact(opts) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("repository", "pushArtifact", "opts", pushArtifactOptsSchema, opts, stack);
      const channel = this.repositoryPort.createChannel("pushArtifact", { path: opts.path }, (message) => {
        const type = message.type;
        switch (type) {
          case "message": {
            safeCallCallback(this.logger, "onMessage", opts.onMessage, [message.message]);
            break;
          }
          default: {
            const exhaustiveCheck = type;
            throw new Error(`Unexpected message type: ${exhaustiveCheck}`);
          }
        }
      }, { stack });
      const { promise, resolve, reject } = makePromise();
      channel.onError.subscribeOnce(reject);
      channel.onClose.subscribeOnce(resolve);
      await promise;
    }
    /**
     * @deprecated Plugin support is still in development. Stay tuned for updates.
     */
    async ensureAuthenticated(opts) {
      const stack = getCurrentStack(1);
      this.validator.validateMethodParamOrThrow("repository", "ensureAuthenticated", "opts", ensureAuthenticatedOptsSchema, opts, stack);
      const { promise, resolve, reject } = makePromise();
      const channel = this.repositoryPort.createChannel("ensureAuthenticated", void 0, (message) => {
        const type = message.type;
        switch (type) {
          case "authenticationUrl": {
            safeCallCallback(this.logger, "onAuthenticationUrl", opts.onAuthenticationUrl, [
              message.url
            ]);
            break;
          }
          case "authenticated": {
            resolve();
            break;
          }
          default: {
            const exhaustiveCheck = type;
            throw new Error(`Unexpected message type: ${exhaustiveCheck}`);
          }
        }
      });
      channel.onError.subscribeOnce(reject);
      await promise;
    }
  };
  var SystemNamespace = class {
    /** @internal */
    constructor(systemPort, validator, parentLogger) {
      this.systemPort = systemPort;
      this.validator = validator;
      this.logger = new SimpleLogger("System", parentLogger);
    }
    async listDownloadedModels(domain) {
      const stack = getCurrentStack(1);
      domain = this.validator.validateMethodParamOrThrow("client.system", "listDownloadedModels", "domain", z.union([z.literal("llm"), z.literal("embedding"), z.undefined()]), domain, stack);
      const models = await this.systemPort.callRpc("listDownloadedModels", void 0, {
        stack: getCurrentStack(1)
      });
      if (domain === void 0) {
        return models;
      }
      return models.filter((model) => model.type === domain);
    }
    async whenDisconnected() {
      const stack = getCurrentStack(1);
      const channel = this.systemPort.createChannel("alive", void 0, void 0, { stack });
      const { promise, resolve } = makePromise();
      channel.onError.subscribeOnce(resolve);
      channel.onClose.subscribeOnce(resolve);
      await promise;
    }
    async notify(notification) {
      const stack = getCurrentStack(1);
      notification = this.validator.validateMethodParamOrThrow("client.system", "notify", "notification", backendNotificationSchema, notification, stack);
      await this.systemPort.callRpc("notify", notification, { stack });
    }
    async getLMStudioVersion() {
      const stack = getCurrentStack(1);
      return await this.systemPort.callRpc("version", void 0, { stack });
    }
    /**
     * Sets an experiment flags for LM Studio. This is an unstable API and may change without notice.
     *
     * @experimental
     */
    async unstable_setExperimentFlag(flag, value) {
      const stack = getCurrentStack(1);
      [flag, value] = this.validator.validateMethodParamsOrThrow("client.system", "setExperimentFlag", ["flag", "value"], [z.string(), z.boolean()], [flag, value], stack);
      await this.systemPort.callRpc("setExperimentFlag", { code: flag, value }, { stack });
    }
    /**
     * Gets all experiment flags for LM Studio. This is an unstable API and may change without notice.
     *
     * @experimental
     */
    async unstable_getExperimentFlags() {
      const stack = getCurrentStack(1);
      return await this.systemPort.callRpc("getExperimentFlags", void 0, { stack });
    }
  };
  var constructorOptsSchema = z.object({
    logger: z.any().optional(),
    baseUrl: z.string().optional(),
    verboseErrorMessages: z.boolean().optional(),
    clientIdentifier: z.string().optional(),
    clientPasskey: z.string().optional(),
    // Internal testing options
    disableConnection: z.boolean().optional(),
    llmPort: z.any().optional(),
    embeddingPort: z.any().optional(),
    systemPort: z.any().optional(),
    diagnosticsPort: z.any().optional(),
    retrievalPort: z.any().optional(),
    filesPort: z.any().optional(),
    repositoryPort: z.any().optional(),
    pluginsPort: z.any().optional()
  }).strict();
  var LMStudioClient = class {
    /** @internal */
    validateBaseUrlOrThrow(baseUrl) {
      let url;
      try {
        url = new URL(baseUrl);
      } catch (e) {
        this.logger.throw(text`
        Failed to construct LMStudioClient. The baseUrl passed in is invalid. Received: ${baseUrl}
      `);
      }
      if (!["ws:", "wss:"].includes(url.protocol)) {
        this.logger.throw(text`
        Failed to construct LMStudioClient. The baseUrl passed in must have protocol "ws" or "wss". 
        Received: ${baseUrl}
      `);
      }
      if (url.search !== "") {
        this.logger.throw(text`
        Failed to construct LMStudioClient. The baseUrl passed contains search parameters
        ("${url.search}").
      `);
      }
      if (url.hash !== "") {
        this.logger.throw(text`
        Failed to construct LMStudioClient. The baseUrl passed contains a hash ("${url.hash}").
      `);
      }
      if (url.username !== "" || url.password !== "") {
        this.logger.throw(text`
        Failed to construct LMStudioClient. The baseUrl passed contains a username or password. We
        do not support these in the baseUrl. Received: ${baseUrl}
      `);
      }
      if (baseUrl.endsWith("/")) {
        this.logger.throw(text`
        Failed to construct LMStudioClient. The baseUrl passed in must not end with a "/". If you
        are reverse-proxying, you should remove the trailing slash from the baseUrl. Received:
        ${baseUrl}
      `);
      }
    }
    async isLocalhostWithGivenPortLMStudioServer(port) {
      const response = await fetch(`http://127.0.0.1:${port}/lmstudio-greeting`);
      if (response.status !== 200) {
        throw new Error("Status is not 200.");
      }
      const json = await response.json();
      if (json?.lmstudio !== true) {
        throw new Error("Not an LM Studio server.");
      }
      return port;
    }
    /**
     * Guess the base URL of the LM Studio server by visiting localhost on various default ports.
     */
    async guessBaseUrl(stack) {
      if (getHostedEnv() !== null) {
        return Promise.resolve("Using hosted env");
      }
      if (import_process.default.browser) {
        try {
          this.isLocalhostWithGivenPortLMStudioServer(1234);
          return "ws://127.0.0.1:1234";
        } catch (error) {
          text`
          ${import_chalk.default.redBright("Failed to connect to LM Studio.")}

          Is LM Studio running? If not, please start it by running:

              ${import_chalk.default.yellow("lms server start --cors")}

          If you are attempting to connect to LM Studio on a separate machine, please provide the
          baseUrl option when creating the LMStudioClient:

              ${import_chalk.default.blueBright(text`
                const client = new LMStudioClient({ baseUrl: 'ws://<host_name>:<port>' });
              `)}

          ${import_chalk.default.white("(i) For more information, refer to the LM Studio documentation:")}

              ${import_chalk.default.gray("https://lmstudio.ai/docs/local-server")}
        `;
        }
      }
      return Promise.any(apiServerPorts.map(this.isLocalhostWithGivenPortLMStudioServer)).then((port) => `ws://127.0.0.1:${port}`, () => {
        throw makePrettyError(text`
            ${import_chalk.default.redBright("Failed to connect to LM Studio.")}

            Please make sure LM Studio is running on your machine.
            
            If you are attempting to connect to LM Studio on a separate machine, please provide the
            baseUrl option when creating the LMStudioClient:

                ${import_chalk.default.blueBright(text`
                  const client = new LMStudioClient({ baseUrl: 'ws://<host_name>:<port>' });
                `)}

            ${import_chalk.default.white("(i) For more information, refer to the LM Studio documentation:")}

                ${import_chalk.default.gray("https://lmstudio.ai/docs/local-server")}
          `, stack);
      });
    }
    createPort(namespace, name, backendInterface) {
      return createAuthenticatedClientPort(backendInterface, this.resolvingBaseUrl, namespace, this.clientIdentifier, this.clientPasskey, new SimpleLogger(name, this.logger), {
        errorDeserializer: friendlyErrorDeserializer,
        verboseErrorMessage: this.verboseErrorMessages
      });
    }
    constructor(opts = {}) {
      const { logger: logger2, baseUrl, verboseErrorMessages, clientIdentifier, clientPasskey, disableConnection, llmPort, embeddingPort, systemPort, diagnosticsPort, retrievalPort, filesPort, repositoryPort, pluginsPort } = new Validator().validateConstructorParamOrThrow("LMStudioClient", "opts", constructorOptsSchema, opts);
      if (globalThis.__LMS_PLUGIN_CONTEXT) {
        throw new Error(text`
          You cannot create LMStudioClient in a plugin context. To use LM Studio APIs, use the
          "client" property attached to the GeneratorController/PreprocessorController.

          For example, instead of:

          ${"const client = new LMStudioClient(); // <-- Error\nexport async function generate(ctl: GeneratorController) {\n  const model = client.llm.load(...);\n}"}

          Do this:
            
          ${"export async function generate(ctl: GeneratorController) {\n  const model = ctl.client.llm.load(...);\n}"}
        `);
      }
      this.logger = new SimpleLogger("LMStudioClient", logger2);
      this.clientIdentifier = clientIdentifier ?? (0, import_lms_isomorphic.generateRandomBase64)(18);
      this.clientPasskey = clientPasskey ?? (0, import_lms_isomorphic.generateRandomBase64)(18);
      const stack = getCurrentStack(1);
      if (disableConnection) {
        this.resolvingBaseUrl = new Promise(() => void 0);
      } else {
        if (baseUrl === void 0) {
          this.resolvingBaseUrl = this.guessBaseUrl(verboseErrorMessages ? stack : void 0);
        } else {
          this.validateBaseUrlOrThrow(baseUrl);
          this.resolvingBaseUrl = baseUrl;
        }
      }
      this.verboseErrorMessages = verboseErrorMessages ?? true;
      this.llmPort = llmPort ?? this.createPort("llm", "LLM", createLlmBackendInterface());
      this.embeddingPort = embeddingPort ?? this.createPort("embedding", "Embedding", createEmbeddingBackendInterface());
      this.systemPort = systemPort ?? this.createPort("system", "System", createSystemBackendInterface());
      this.diagnosticsPort = diagnosticsPort ?? this.createPort("diagnostics", "Diagnostics", createDiagnosticsBackendInterface());
      this.filesPort = filesPort ?? this.createPort("files", "Files", createFilesBackendInterface());
      this.repositoryPort = repositoryPort ?? this.createPort("repository", "Repository", createRepositoryBackendInterface());
      this.pluginsPort = pluginsPort ?? this.createPort("plugins", "Plugins", createPluginsBackendInterface());
      const validator = new Validator();
      this.llm = new LLMNamespace(this, this.llmPort, new SimpleLogger("LLM", this.logger), validator);
      this.embedding = new EmbeddingNamespace(this, this.embeddingPort, new SimpleLogger("Embedding", this.logger), validator);
      this.system = new SystemNamespace(this.systemPort, validator, this.logger);
      this.diagnostics = new DiagnosticsNamespace(this.diagnosticsPort, validator, this.logger);
      this.files = new FilesNamespace(this.filesPort, validator, this.logger);
      this.repository = new RepositoryNamespace(this.repositoryPort, validator, this.logger);
      this.plugins = new PluginsNamespace(this.pluginsPort, this, validator, this.logger, logger2);
    }
  };

  // lmstudiofunction.js
  async function lm_studio(baseurl, language_model, prompt) {
    const client = new LMStudioClient({ baseUrl: baseurl });
    const model = await client.llm.model(language_model);
    const chat = Chat.from(prompt);
    const result = await model.respond(chat, { temperature: 0.7, num_ctx: -1 });
    return result.content;
  }
  async function lm_studio_embed(baseurl, language_model, prompt) {
    const client = new LMStudioClient({ baseUrl: baseurl });
    const model = await client.embedding.model(language_model);
    const { embedding } = await model.embed(prompt);
    return embedding;
  }

  // lmstudio_app.js
  window.lm_studio = lm_studio;
  window.lm_studio_embed = lm_studio_embed;
})();
