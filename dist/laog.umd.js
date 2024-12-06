
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Laog = {}));
})(this, (function (exports) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var dayjs_min$1 = {exports: {}};

	var dayjs_min = dayjs_min$1.exports;

	var hasRequiredDayjs_min;

	function requireDayjs_min () {
		if (hasRequiredDayjs_min) return dayjs_min$1.exports;
		hasRequiredDayjs_min = 1;
		(function (module, exports) {
			!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
		} (dayjs_min$1));
		return dayjs_min$1.exports;
	}

	var dayjs_minExports = requireDayjs_min();
	var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

	const LogLevels$1 = {
	  silent: Number.NEGATIVE_INFINITY,
	  fatal: 0,
	  error: 0,
	  warn: 1,
	  log: 2,
	  info: 3,
	  success: 3,
	  fail: 3,
	  ready: 3,
	  start: 3,
	  box: 3,
	  debug: 4,
	  trace: 5,
	  verbose: Number.POSITIVE_INFINITY
	};
	const LogTypes = {
	  // Silent
	  silent: {
	    level: -1
	  },
	  // Level 0
	  fatal: {
	    level: LogLevels$1.fatal
	  },
	  error: {
	    level: LogLevels$1.error
	  },
	  // Level 1
	  warn: {
	    level: LogLevels$1.warn
	  },
	  // Level 2
	  log: {
	    level: LogLevels$1.log
	  },
	  // Level 3
	  info: {
	    level: LogLevels$1.info
	  },
	  success: {
	    level: LogLevels$1.success
	  },
	  fail: {
	    level: LogLevels$1.fail
	  },
	  ready: {
	    level: LogLevels$1.info
	  },
	  start: {
	    level: LogLevels$1.info
	  },
	  box: {
	    level: LogLevels$1.info
	  },
	  // Level 4
	  debug: {
	    level: LogLevels$1.debug
	  },
	  // Level 5
	  trace: {
	    level: LogLevels$1.trace
	  },
	  // Verbose
	  verbose: {
	    level: LogLevels$1.verbose
	  }
	};

	function isObject(value) {
	  return value !== null && typeof value === "object";
	}
	function _defu(baseObject, defaults, namespace = ".", merger) {
	  if (!isObject(defaults)) {
	    return _defu(baseObject, {}, namespace);
	  }
	  const object = Object.assign({}, defaults);
	  for (const key in baseObject) {
	    if (key === "__proto__" || key === "constructor") {
	      continue;
	    }
	    const value = baseObject[key];
	    if (value === null || value === void 0) {
	      continue;
	    }
	    if (Array.isArray(value) && Array.isArray(object[key])) {
	      object[key] = [...value, ...object[key]];
	    } else if (isObject(value) && isObject(object[key])) {
	      object[key] = _defu(
	        value,
	        object[key],
	        (namespace ? `${namespace}.` : "") + key.toString());
	    } else {
	      object[key] = value;
	    }
	  }
	  return object;
	}
	function createDefu(merger) {
	  return (...arguments_) => (
	    // eslint-disable-next-line unicorn/no-array-reduce
	    arguments_.reduce((p, c) => _defu(p, c, ""), {})
	  );
	}
	const defu = createDefu();

	function isPlainObject(obj) {
	  return Object.prototype.toString.call(obj) === "[object Object]";
	}
	function isLogObj(arg) {
	  if (!isPlainObject(arg)) {
	    return false;
	  }
	  if (!arg.message && !arg.args) {
	    return false;
	  }
	  if (arg.stack) {
	    return false;
	  }
	  return true;
	}

	let paused = false;
	const queue = [];
	class Consola {
	  constructor(options = {}) {
	    const types = options.types || LogTypes;
	    this.options = defu(
	      {
	        ...options,
	        defaults: { ...options.defaults },
	        level: _normalizeLogLevel(options.level, types),
	        reporters: [...options.reporters || []]
	      },
	      {
	        types: LogTypes,
	        throttle: 1e3,
	        throttleMin: 5,
	        formatOptions: {
	          date: true,
	          colors: false,
	          compact: true
	        }
	      }
	    );
	    for (const type in types) {
	      const defaults = {
	        type,
	        ...this.options.defaults,
	        ...types[type]
	      };
	      this[type] = this._wrapLogFn(defaults);
	      this[type].raw = this._wrapLogFn(
	        defaults,
	        true
	      );
	    }
	    if (this.options.mockFn) {
	      this.mockTypes();
	    }
	    this._lastLog = {};
	  }
	  get level() {
	    return this.options.level;
	  }
	  set level(level) {
	    this.options.level = _normalizeLogLevel(
	      level,
	      this.options.types,
	      this.options.level
	    );
	  }
	  prompt(message, opts) {
	    if (!this.options.prompt) {
	      throw new Error("prompt is not supported!");
	    }
	    return this.options.prompt(message, opts);
	  }
	  create(options) {
	    const instance = new Consola({
	      ...this.options,
	      ...options
	    });
	    if (this._mockFn) {
	      instance.mockTypes(this._mockFn);
	    }
	    return instance;
	  }
	  withDefaults(defaults) {
	    return this.create({
	      ...this.options,
	      defaults: {
	        ...this.options.defaults,
	        ...defaults
	      }
	    });
	  }
	  withTag(tag) {
	    return this.withDefaults({
	      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
	    });
	  }
	  addReporter(reporter) {
	    this.options.reporters.push(reporter);
	    return this;
	  }
	  removeReporter(reporter) {
	    if (reporter) {
	      const i = this.options.reporters.indexOf(reporter);
	      if (i >= 0) {
	        return this.options.reporters.splice(i, 1);
	      }
	    } else {
	      this.options.reporters.splice(0);
	    }
	    return this;
	  }
	  setReporters(reporters) {
	    this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
	    return this;
	  }
	  wrapAll() {
	    this.wrapConsole();
	    this.wrapStd();
	  }
	  restoreAll() {
	    this.restoreConsole();
	    this.restoreStd();
	  }
	  wrapConsole() {
	    for (const type in this.options.types) {
	      if (!console["__" + type]) {
	        console["__" + type] = console[type];
	      }
	      console[type] = this[type].raw;
	    }
	  }
	  restoreConsole() {
	    for (const type in this.options.types) {
	      if (console["__" + type]) {
	        console[type] = console["__" + type];
	        delete console["__" + type];
	      }
	    }
	  }
	  wrapStd() {
	    this._wrapStream(this.options.stdout, "log");
	    this._wrapStream(this.options.stderr, "log");
	  }
	  _wrapStream(stream, type) {
	    if (!stream) {
	      return;
	    }
	    if (!stream.__write) {
	      stream.__write = stream.write;
	    }
	    stream.write = (data) => {
	      this[type].raw(String(data).trim());
	    };
	  }
	  restoreStd() {
	    this._restoreStream(this.options.stdout);
	    this._restoreStream(this.options.stderr);
	  }
	  _restoreStream(stream) {
	    if (!stream) {
	      return;
	    }
	    if (stream.__write) {
	      stream.write = stream.__write;
	      delete stream.__write;
	    }
	  }
	  pauseLogs() {
	    paused = true;
	  }
	  resumeLogs() {
	    paused = false;
	    const _queue = queue.splice(0);
	    for (const item of _queue) {
	      item[0]._logFn(item[1], item[2]);
	    }
	  }
	  mockTypes(mockFn) {
	    const _mockFn = mockFn || this.options.mockFn;
	    this._mockFn = _mockFn;
	    if (typeof _mockFn !== "function") {
	      return;
	    }
	    for (const type in this.options.types) {
	      this[type] = _mockFn(type, this.options.types[type]) || this[type];
	      this[type].raw = this[type];
	    }
	  }
	  _wrapLogFn(defaults, isRaw) {
	    return (...args) => {
	      if (paused) {
	        queue.push([this, defaults, args, isRaw]);
	        return;
	      }
	      return this._logFn(defaults, args, isRaw);
	    };
	  }
	  _logFn(defaults, args, isRaw) {
	    if ((defaults.level || 0) > this.level) {
	      return false;
	    }
	    const logObj = {
	      date: /* @__PURE__ */ new Date(),
	      args: [],
	      ...defaults,
	      level: _normalizeLogLevel(defaults.level, this.options.types)
	    };
	    if (!isRaw && args.length === 1 && isLogObj(args[0])) {
	      Object.assign(logObj, args[0]);
	    } else {
	      logObj.args = [...args];
	    }
	    if (logObj.message) {
	      logObj.args.unshift(logObj.message);
	      delete logObj.message;
	    }
	    if (logObj.additional) {
	      if (!Array.isArray(logObj.additional)) {
	        logObj.additional = logObj.additional.split("\n");
	      }
	      logObj.args.push("\n" + logObj.additional.join("\n"));
	      delete logObj.additional;
	    }
	    logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
	    logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
	    const resolveLog = (newLog = false) => {
	      const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
	      if (this._lastLog.object && repeated > 0) {
	        const args2 = [...this._lastLog.object.args];
	        if (repeated > 1) {
	          args2.push(`(repeated ${repeated} times)`);
	        }
	        this._log({ ...this._lastLog.object, args: args2 });
	        this._lastLog.count = 1;
	      }
	      if (newLog) {
	        this._lastLog.object = logObj;
	        this._log(logObj);
	      }
	    };
	    clearTimeout(this._lastLog.timeout);
	    const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
	    this._lastLog.time = logObj.date;
	    if (diffTime < this.options.throttle) {
	      try {
	        const serializedLog = JSON.stringify([
	          logObj.type,
	          logObj.tag,
	          logObj.args
	        ]);
	        const isSameLog = this._lastLog.serialized === serializedLog;
	        this._lastLog.serialized = serializedLog;
	        if (isSameLog) {
	          this._lastLog.count = (this._lastLog.count || 0) + 1;
	          if (this._lastLog.count > this.options.throttleMin) {
	            this._lastLog.timeout = setTimeout(
	              resolveLog,
	              this.options.throttle
	            );
	            return;
	          }
	        }
	      } catch {
	      }
	    }
	    resolveLog(true);
	  }
	  _log(logObj) {
	    for (const reporter of this.options.reporters) {
	      reporter.log(logObj, {
	        options: this.options
	      });
	    }
	  }
	}
	function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
	  if (input === void 0) {
	    return defaultLevel;
	  }
	  if (typeof input === "number") {
	    return input;
	  }
	  if (types[input] && types[input].level !== void 0) {
	    return types[input].level;
	  }
	  return defaultLevel;
	}
	Consola.prototype.add = Consola.prototype.addReporter;
	Consola.prototype.remove = Consola.prototype.removeReporter;
	Consola.prototype.clear = Consola.prototype.removeReporter;
	Consola.prototype.withScope = Consola.prototype.withTag;
	Consola.prototype.mock = Consola.prototype.mockTypes;
	Consola.prototype.pause = Consola.prototype.pauseLogs;
	Consola.prototype.resume = Consola.prototype.resumeLogs;
	function createConsola$1(options = {}) {
	  return new Consola(options);
	}

	class BrowserReporter {
	  constructor(options) {
	    this.options = { ...options };
	    this.defaultColor = "#7f8c8d";
	    this.levelColorMap = {
	      0: "#c0392b",
	      // Red
	      1: "#f39c12",
	      // Yellow
	      3: "#00BCD4"
	      // Cyan
	    };
	    this.typeColorMap = {
	      success: "#2ecc71"
	      // Green
	    };
	  }
	  _getLogFn(level) {
	    if (level < 1) {
	      return console.__error || console.error;
	    }
	    if (level === 1) {
	      return console.__warn || console.warn;
	    }
	    return console.__log || console.log;
	  }
	  log(logObj) {
	    const consoleLogFn = this._getLogFn(logObj.level);
	    const type = logObj.type === "log" ? "" : logObj.type;
	    const tag = logObj.tag || "";
	    const color = this.typeColorMap[logObj.type] || this.levelColorMap[logObj.level] || this.defaultColor;
	    const style = `
      background: ${color};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `;
	    const badge = `%c${[tag, type].filter(Boolean).join(":")}`;
	    if (typeof logObj.args[0] === "string") {
	      consoleLogFn(
	        `${badge}%c ${logObj.args[0]}`,
	        style,
	        // Empty string as style resets to default console style
	        "",
	        ...logObj.args.slice(1)
	      );
	    } else {
	      consoleLogFn(badge, style, ...logObj.args);
	    }
	  }
	}

	function createConsola(options = {}) {
	  const consola2 = createConsola$1({
	    reporters: options.reporters || [new BrowserReporter({})],
	    prompt(message, options2 = {}) {
	      if (options2.type === "confirm") {
	        return Promise.resolve(confirm(message));
	      }
	      return Promise.resolve(prompt(message));
	    },
	    ...options
	  });
	  return consola2;
	}
	const consola = createConsola();

	/**
	 * 日志级别常量。
	 *
	 * 该常量定义了不同日志类型对应的数值级别，用于控制日志的输出。
	 *
	 * @type {Record<LogType | string, number>}
	 * @property {number} verbose - 详细日志级别，数值为负无穷大。
	 * @property {number} log - 普通日志级别，数值为1。
	 * @property {number} info - 信息日志级别，数值为2。
	 * @property {number} warn - 警告日志级别，数值为3。
	 * @property {number} error - 错误日志级别，数值为4。
	 * @property {number} silent - 静默日志级别，数值为正无穷大。
	 */
	const LogLevels = {
	    verbose: Number.NEGATIVE_INFINITY,
	    log: 1,
	    info: 2,
	    warn: 3,
	    error: 4,
	    silent: Number.POSITIVE_INFINITY,
	};

	const commonStyles = 'padding: 2px 4px; border-radius: 4px; font-size: 14px;';
	const timeStampsStyles = 'color: #6c757d; font-size: 12px; font-style: italic;';
	const LogStyles = {
	    verbose: 'color: #6c757d',
	    log: `color: #fff; background-color: #66b2ff; ${commonStyles}`, // 修改背景色
	    info: `color: #fff; background-color: #007bff; ${commonStyles}`,
	    warn: `color: #000; background-color: #ffc107; ${commonStyles}`,
	    error: `color: #fff; background-color: #dc3545; ${commonStyles}`,
	    silent: 'display: none',
	};
	function getLogStyle(type) {
	    return LogStyles[type] || '';
	}

	consola.info('%c hello', 'color: red;');
	consola.warn('%c hello', 'color: red;');
	consola.error('%c hello', 'color: red;');
	// 处理日志等级方法
	function handleLogLevel(level) {
	    if (level < LogLevels.verbose) {
	        return LogLevels.log;
	    }
	    if (level > LogLevels.error) {
	        return LogLevels.error;
	    }
	    return level;
	}
	class Laog {
	    currentLevel = 1;
	    showTimeStamps = true;
	    constructor(options = {}) {
	        this.currentLevel = handleLogLevel(options.level || LogLevels.log);
	    }
	    shouldLog(type) {
	        return LogLevels[type] >= this.currentLevel;
	    }
	    logMessage(type, args) {
	        if (!this.shouldLog(type)) {
	            return;
	        }
	        const style = getLogStyle(type);
	        const badge = `%c[${type}]`;
	        const timestamps = `%c${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}`;
	        if (typeof args[0] === 'string') {
	            let params = [`${badge}%c ${args[0]}`, style, '', ...args.slice(1)];
	            if (this.showTimeStamps) {
	                params = [
	                    `${timestamps} ${badge}%c ${args[0]}`,
	                    timeStampsStyles,
	                    style,
	                    '',
	                    ...args.slice(1),
	                ];
	            }
	            console[type](...params);
	        }
	        else if (this.showTimeStamps) {
	            console[type](`${timestamps} ${badge}`, timeStampsStyles, style, ...args);
	        }
	        else {
	            console[type](badge, style, ...args);
	        }
	    }
	    log(...args) {
	        this.logMessage('log', args);
	    }
	    info(...args) {
	        this.logMessage('info', args);
	    }
	    warn(...args) {
	        this.logMessage('warn', args);
	    }
	    error(...args) {
	        this.logMessage('error', args);
	    }
	}

	// 创建一个默认实例
	const defaultLaogInstance = new Laog();
	const laog = () => {
	    return Laog;
	};
	laog.log = defaultLaogInstance.log.bind(defaultLaogInstance);
	laog.info = defaultLaogInstance.info.bind(defaultLaogInstance);
	laog.warn = defaultLaogInstance.warn.bind(defaultLaogInstance);
	laog.error = defaultLaogInstance.error.bind(defaultLaogInstance);
	// 导出默认实例和类
	var index = laog();

	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=laog.umd.js.map
