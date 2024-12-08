import o from"dayjs";const r={verbose:Number.NEGATIVE_INFINITY,log:1,info:2,warn:3,error:4,silent:Number.POSITIVE_INFINITY},e="padding: 2px 4px; border-radius: 4px; font-size: 14px;",s="color: #6c757d; font-size: 12px; font-style: italic;",n={verbose:"color: #6c757d",log:`color: #fff; background-color: #66b2ff; ${e}`,info:`color: #fff; background-color: #007bff; ${e}`,warn:`color: #000; background-color: #ffc107; ${e}`,error:`color: #fff; background-color: #dc3545; ${e}`,silent:"display: none"};class l{currentLevel=1;showTimeStamps=!0;constructor(o={}){var e;this.currentLevel=(e=o.level||r.log)<r.verbose?r.log:e>r.error?r.error:e}shouldLog(o){return r[o]>=this.currentLevel}logMessage(r,e){if(!this.shouldLog(r))return;const l=function(o){return n[o]||""}(r),c=`%c[${r}]`,i=`%c${o().format("YYYY-MM-DD HH:mm:ss.SSS")}`;if("string"==typeof e[0]){let o=[`${c}%c ${e[0]}`,l,"",...e.slice(1)];this.showTimeStamps&&(o=[`${i} ${c}%c ${e[0]}`,s,l,"",...e.slice(1)]),console[r](...o)}else this.showTimeStamps?console[r](`${i} ${c}`,s,l,...e):console[r](c,l,...e)}log(...o){this.logMessage("log",o)}info(...o){this.logMessage("info",o)}warn(...o){this.logMessage("warn",o)}error(...o){this.logMessage("error",o)}}const c=new l,i=()=>l;i.log=c.log.bind(c),i.info=c.info.bind(c),i.warn=c.warn.bind(c),i.error=c.error.bind(c);var t=i();export{t as default};
