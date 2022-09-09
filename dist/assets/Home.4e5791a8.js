import{d as ne,r as W,c as Ct,o as re,a as oe,b as m,t as ot,u as pt,e as bt,f as ie,p as se,g as ue,_ as ae}from"./index.08a2f4c9.js";var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ht={exports:{}};(function(e,t){(function(i,o){e.exports=o()})(ce,function(){var i=1e3,o=6e4,r=36e5,n="millisecond",s="second",a="minute",u="hour",l="day",d="week",D="month",C="quarter",g="year",E="date",A="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(w,h,c){var v=String(w);return!v||v.length>=h?w:""+Array(h+1-v.length).join(c)+w},p={s:y,z:function(w){var h=-w.utcOffset(),c=Math.abs(h),v=Math.floor(c/60),f=c%60;return(h<=0?"+":"-")+y(v,2,"0")+":"+y(f,2,"0")},m:function w(h,c){if(h.date()<c.date())return-w(c,h);var v=12*(c.year()-h.year())+(c.month()-h.month()),f=h.clone().add(v,D),_=c-f<0,M=h.clone().add(v+(_?-1:1),D);return+(-(v+(c-f)/(_?f-M:M-f))||0)},a:function(w){return w<0?Math.ceil(w)||0:Math.floor(w)},p:function(w){return{M:D,y:g,w:d,d:l,D:E,h:u,m:a,s,ms:n,Q:C}[w]||String(w||"").toLowerCase().replace(/s$/,"")},u:function(w){return w===void 0}},b="en",I={};I[b]=T;var F=function(w){return w instanceof z},U=function w(h,c,v){var f;if(!h)return b;if(typeof h=="string"){var _=h.toLowerCase();I[_]&&(f=_),c&&(I[_]=c,f=_);var M=h.split("-");if(!f&&M.length>1)return w(M[0])}else{var $=h.name;I[$]=h,f=$}return!v&&f&&(b=f),f||!v&&b},N=function(w,h){if(F(w))return w.clone();var c=typeof h=="object"?h:{};return c.date=w,c.args=arguments,new z(c)},S=p;S.l=U,S.i=F,S.w=function(w,h){return N(w,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var z=function(){function w(c){this.$L=U(c.locale,null,!0),this.parse(c)}var h=w.prototype;return h.parse=function(c){this.$d=function(v){var f=v.date,_=v.utc;if(f===null)return new Date(NaN);if(S.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var M=f.match(R);if(M){var $=M[2]-1||0,L=(M[7]||"0").substring(0,3);return _?new Date(Date.UTC(M[1],$,M[3]||1,M[4]||0,M[5]||0,M[6]||0,L)):new Date(M[1],$,M[3]||1,M[4]||0,M[5]||0,M[6]||0,L)}}return new Date(f)}(c),this.$x=c.x||{},this.init()},h.init=function(){var c=this.$d;this.$y=c.getFullYear(),this.$M=c.getMonth(),this.$D=c.getDate(),this.$W=c.getDay(),this.$H=c.getHours(),this.$m=c.getMinutes(),this.$s=c.getSeconds(),this.$ms=c.getMilliseconds()},h.$utils=function(){return S},h.isValid=function(){return this.$d.toString()!==A},h.isSame=function(c,v){var f=N(c);return this.startOf(v)<=f&&f<=this.endOf(v)},h.isAfter=function(c,v){return N(c)<this.startOf(v)},h.isBefore=function(c,v){return this.endOf(v)<N(c)},h.$g=function(c,v,f){return S.u(c)?this[v]:this.set(f,c)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(c,v){var f=this,_=!!S.u(v)||v,M=S.p(c),$=function(q,H){var K=S.w(f.$u?Date.UTC(f.$y,H,q):new Date(f.$y,H,q),f);return _?K:K.endOf(l)},L=function(q,H){return S.w(f.toDate()[q].apply(f.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(H)),f)},P=this.$W,k=this.$M,J=this.$D,Y="set"+(this.$u?"UTC":"");switch(M){case g:return _?$(1,0):$(31,11);case D:return _?$(1,k):$(0,k+1);case d:var nt=this.$locale().weekStart||0,rt=(P<nt?P+7:P)-nt;return $(_?J-rt:J+(6-rt),k);case l:case E:return L(Y+"Hours",0);case u:return L(Y+"Minutes",1);case a:return L(Y+"Seconds",2);case s:return L(Y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(c){return this.startOf(c,!1)},h.$set=function(c,v){var f,_=S.p(c),M="set"+(this.$u?"UTC":""),$=(f={},f[l]=M+"Date",f[E]=M+"Date",f[D]=M+"Month",f[g]=M+"FullYear",f[u]=M+"Hours",f[a]=M+"Minutes",f[s]=M+"Seconds",f[n]=M+"Milliseconds",f)[_],L=_===l?this.$D+(v-this.$W):v;if(_===D||_===g){var P=this.clone().set(E,1);P.$d[$](L),P.init(),this.$d=P.set(E,Math.min(this.$D,P.daysInMonth())).$d}else $&&this.$d[$](L);return this.init(),this},h.set=function(c,v){return this.clone().$set(c,v)},h.get=function(c){return this[S.p(c)]()},h.add=function(c,v){var f,_=this;c=Number(c);var M=S.p(v),$=function(k){var J=N(_);return S.w(J.date(J.date()+Math.round(k*c)),_)};if(M===D)return this.set(D,this.$M+c);if(M===g)return this.set(g,this.$y+c);if(M===l)return $(1);if(M===d)return $(7);var L=(f={},f[a]=o,f[u]=r,f[s]=i,f)[M]||1,P=this.$d.getTime()+c*L;return S.w(P,this)},h.subtract=function(c,v){return this.add(-1*c,v)},h.format=function(c){var v=this,f=this.$locale();if(!this.isValid())return f.invalidDate||A;var _=c||"YYYY-MM-DDTHH:mm:ssZ",M=S.z(this),$=this.$H,L=this.$m,P=this.$M,k=f.weekdays,J=f.months,Y=function(H,K,yt,at){return H&&(H[K]||H(v,_))||yt[K].slice(0,at)},nt=function(H){return S.s($%12||12,H,"0")},rt=f.meridiem||function(H,K,yt){var at=H<12?"AM":"PM";return yt?at.toLowerCase():at},q={YY:String(this.$y).slice(-2),YYYY:this.$y,M:P+1,MM:S.s(P+1,2,"0"),MMM:Y(f.monthsShort,P,J,3),MMMM:Y(J,P),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:Y(f.weekdaysMin,this.$W,k,2),ddd:Y(f.weekdaysShort,this.$W,k,3),dddd:k[this.$W],H:String($),HH:S.s($,2,"0"),h:nt(1),hh:nt(2),a:rt($,L,!0),A:rt($,L,!1),m:String(L),mm:S.s(L,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:M};return _.replace(B,function(H,K){return K||q[H]||M.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(c,v,f){var _,M=S.p(v),$=N(c),L=($.utcOffset()-this.utcOffset())*o,P=this-$,k=S.m(this,$);return k=(_={},_[g]=k/12,_[D]=k,_[C]=k/3,_[d]=(P-L)/6048e5,_[l]=(P-L)/864e5,_[u]=P/r,_[a]=P/o,_[s]=P/i,_)[M]||P,f?k:S.a(k)},h.daysInMonth=function(){return this.endOf(D).$D},h.$locale=function(){return I[this.$L]},h.locale=function(c,v){if(!c)return this.$L;var f=this.clone(),_=U(c,v,!0);return _&&(f.$L=_),f},h.clone=function(){return S.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},w}(),G=z.prototype;return N.prototype=G,[["$ms",n],["$s",s],["$m",a],["$H",u],["$W",l],["$M",D],["$y",g],["$D",E]].forEach(function(w){G[w[1]]=function(h){return this.$g(h,w[0],w[1])}}),N.extend=function(w,h){return w.$i||(w(h,z,N),w.$i=!0),N},N.locale=U,N.isDayjs=F,N.unix=function(w){return N(1e3*w)},N.en=I[b],N.Ls=I,N.p={},N})})(Ht);const Lt=Ht.exports;var le=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ot={},O={};let It;const fe=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];O.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};O.getSymbolTotalCodewords=function(t){return fe[t]};O.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};O.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');It=t};O.isKanjiModeEnabled=function(){return typeof It<"u"};O.toSJIS=function(t){return It(t)};var ht={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(ht);function zt(){this.buffer=[],this.length=0}zt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var de=zt;function ut(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}ut.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};ut.prototype.get=function(e,t){return this.data[e*this.size+t]};ut.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};ut.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var he=ut,Vt={};(function(e){const t=O.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let u=1;u<r-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||r.push([n[a],n[u]]);return r}})(Vt);var Yt={};const ge=O.getSymbolSize,Rt=7;Yt.getPositions=function(t){const i=ge(t);return[[0,0],[i-Rt,0],[0,i-Rt]]};var Jt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,u=0,l=null,d=null;for(let D=0;D<n;D++){a=u=0,l=d=null;for(let C=0;C<n;C++){let g=r.get(D,C);g===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=g,a=1),g=r.get(C,D),g===d?u++:(u>=5&&(s+=t.N1+(u-5)),d=g,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const l=r.get(a,u)+r.get(a,u+1)+r.get(a+1,u)+r.get(a+1,u+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,u=0;for(let l=0;l<n;l++){a=u=0;for(let d=0;d<n;d++)a=a<<1&2047|r.get(l,d),d>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|r.get(d,l),d>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let u=0;u<s;u++)n+=r.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(r,u,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let l=0;l<s;l++){n(l),e.applyMask(l,r);const d=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(l,r),d<u&&(u=d,a=l)}return a}})(Jt);var gt={};const j=ht,ct=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],lt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];gt.getBlocksCount=function(t,i){switch(i){case j.L:return ct[(t-1)*4+0];case j.M:return ct[(t-1)*4+1];case j.Q:return ct[(t-1)*4+2];case j.H:return ct[(t-1)*4+3];default:return}};gt.getTotalCodewordsCount=function(t,i){switch(i){case j.L:return lt[(t-1)*4+0];case j.M:return lt[(t-1)*4+1];case j.Q:return lt[(t-1)*4+2];case j.H:return lt[(t-1)*4+3];default:return}};var Kt={},mt={};const it=new Uint8Array(512),ft=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)it[i]=t,ft[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)it[i]=it[i-255]})();mt.log=function(t){if(t<1)throw new Error("log("+t+")");return ft[t]};mt.exp=function(t){return it[t]};mt.mul=function(t,i){return t===0||i===0?0:it[ft[t]+ft[i]]};(function(e){const t=mt;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(o[s],r[a]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let u=0;u<r.length;u++)n[u]^=t.mul(r[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Kt);const jt=Kt;function $t(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}$t.prototype.initialize=function(t){this.degree=t,this.genPoly=jt.generateECPolynomial(this.degree)};$t.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=jt.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var me=$t,xt={},x={},Nt={};Nt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var V={};const Gt="[0-9]+",we="[A-Z $%*+\\-./:]+";let st="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";st=st.replace(/u/g,"\\u");const ye="(?:(?![A-Z0-9 $%*+\\-./:]|"+st+`)(?:.|[\r
]))+`;V.KANJI=new RegExp(st,"g");V.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");V.BYTE=new RegExp(ye,"g");V.NUMERIC=new RegExp(Gt,"g");V.ALPHANUMERIC=new RegExp(we,"g");const Ce=new RegExp("^"+st+"$"),pe=new RegExp("^"+Gt+"$"),Ee=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");V.testKanji=function(t){return Ce.test(t)};V.testNumeric=function(t){return pe.test(t)};V.testAlphanumeric=function(t){return Ee.test(t)};(function(e){const t=Nt,i=V;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(x);(function(e){const t=O,i=gt,o=ht,r=x,n=Nt,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=t.getBCHDigit(s);function u(C,g,E){for(let A=1;A<=40;A++)if(g<=e.getCapacity(A,E,C))return A}function l(C,g){return r.getCharCountIndicator(C,g)+4}function d(C,g){let E=0;return C.forEach(function(A){E+=l(A.mode,g)+A.getBitsLength()}),E}function D(C,g){for(let E=1;E<=40;E++)if(d(C,E)<=e.getCapacity(E,g,r.MIXED))return E}e.from=function(g,E){return n.isValid(g)?parseInt(g,10):E},e.getCapacity=function(g,E,A){if(!n.isValid(g))throw new Error("Invalid QR Code version");typeof A>"u"&&(A=r.BYTE);const R=t.getSymbolTotalCodewords(g),B=i.getTotalCodewordsCount(g,E),T=(R-B)*8;if(A===r.MIXED)return T;const y=T-l(A,g);switch(A){case r.NUMERIC:return Math.floor(y/10*3);case r.ALPHANUMERIC:return Math.floor(y/11*2);case r.KANJI:return Math.floor(y/13);case r.BYTE:default:return Math.floor(y/8)}},e.getBestVersionForData=function(g,E){let A;const R=o.from(E,o.M);if(Array.isArray(g)){if(g.length>1)return D(g,R);if(g.length===0)return 1;A=g[0]}else A=g;return u(A.mode,A.getLength(),R)},e.getEncodedBits=function(g){if(!n.isValid(g)||g<7)throw new Error("Invalid QR Code version");let E=g<<12;for(;t.getBCHDigit(E)-a>=0;)E^=s<<t.getBCHDigit(E)-a;return g<<12|E}})(xt);var qt={};const At=O,Wt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Be=1<<14|1<<12|1<<10|1<<4|1<<1,Ut=At.getBCHDigit(Wt);qt.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;At.getBCHDigit(r)-Ut>=0;)r^=Wt<<At.getBCHDigit(r)-Ut;return(o<<10|r)^Be};var Qt={};const ve=x;function Q(e){this.mode=ve.NUMERIC,this.data=e.toString()}Q.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var Me=Q;const _e=x,Et=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Z(e){this.mode=_e.ALPHANUMERIC,this.data=e}Z.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Z.prototype.getLength=function(){return this.data.length};Z.prototype.getBitsLength=function(){return Z.getBitsLength(this.data.length)};Z.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=Et.indexOf(this.data[i])*45;o+=Et.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(Et.indexOf(this.data[i]),6)};var Ae=Z,Se=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const De=Se,Te=x;function X(e){this.mode=Te.BYTE,typeof e=="string"&&(e=De(e)),this.data=new Uint8Array(e)}X.getBitsLength=function(t){return t*8};X.prototype.getLength=function(){return this.data.length};X.prototype.getBitsLength=function(){return X.getBitsLength(this.data.length)};X.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var be=X;const Ie=x,$e=O;function tt(e){this.mode=Ie.KANJI,this.data=e}tt.getBitsLength=function(t){return t*13};tt.prototype.getLength=function(){return this.data.length};tt.prototype.getBitsLength=function(){return tt.getBitsLength(this.data.length)};tt.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=$e.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Ne=tt,Zt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var u,l,d,D,C,g,E,A,R;!a.empty();){u=a.pop(),l=u.value,D=u.cost,C=i[l]||{};for(d in C)C.hasOwnProperty(d)&&(g=C[d],E=D+g,A=s[d],R=typeof s[d]>"u",(R||A>E)&&(s[d]=E,a.push(d,E),n[d]=l))}if(typeof r<"u"&&typeof s[r]>"u"){var B=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(B)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Zt);(function(e){const t=x,i=Me,o=Ae,r=be,n=Ne,s=V,a=O,u=Zt.exports;function l(B){return unescape(encodeURIComponent(B)).length}function d(B,T,y){const p=[];let b;for(;(b=B.exec(y))!==null;)p.push({data:b[0],index:b.index,mode:T,length:b[0].length});return p}function D(B){const T=d(s.NUMERIC,t.NUMERIC,B),y=d(s.ALPHANUMERIC,t.ALPHANUMERIC,B);let p,b;return a.isKanjiModeEnabled()?(p=d(s.BYTE,t.BYTE,B),b=d(s.KANJI,t.KANJI,B)):(p=d(s.BYTE_KANJI,t.BYTE,B),b=[]),T.concat(y,p,b).sort(function(F,U){return F.index-U.index}).map(function(F){return{data:F.data,mode:F.mode,length:F.length}})}function C(B,T){switch(T){case t.NUMERIC:return i.getBitsLength(B);case t.ALPHANUMERIC:return o.getBitsLength(B);case t.KANJI:return n.getBitsLength(B);case t.BYTE:return r.getBitsLength(B)}}function g(B){return B.reduce(function(T,y){const p=T.length-1>=0?T[T.length-1]:null;return p&&p.mode===y.mode?(T[T.length-1].data+=y.data,T):(T.push(y),T)},[])}function E(B){const T=[];for(let y=0;y<B.length;y++){const p=B[y];switch(p.mode){case t.NUMERIC:T.push([p,{data:p.data,mode:t.ALPHANUMERIC,length:p.length},{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.ALPHANUMERIC:T.push([p,{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.KANJI:T.push([p,{data:p.data,mode:t.BYTE,length:l(p.data)}]);break;case t.BYTE:T.push([{data:p.data,mode:t.BYTE,length:l(p.data)}])}}return T}function A(B,T){const y={},p={start:{}};let b=["start"];for(let I=0;I<B.length;I++){const F=B[I],U=[];for(let N=0;N<F.length;N++){const S=F[N],z=""+I+N;U.push(z),y[z]={node:S,lastCount:0},p[z]={};for(let G=0;G<b.length;G++){const w=b[G];y[w]&&y[w].node.mode===S.mode?(p[w][z]=C(y[w].lastCount+S.length,S.mode)-C(y[w].lastCount,S.mode),y[w].lastCount+=S.length):(y[w]&&(y[w].lastCount=S.length),p[w][z]=C(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,T))}}b=U}for(let I=0;I<b.length;I++)p[b[I]].end=0;return{map:p,table:y}}function R(B,T){let y;const p=t.getBestModeForData(B);if(y=t.from(T,p),y!==t.BYTE&&y.bit<p.bit)throw new Error('"'+B+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(p));switch(y===t.KANJI&&!a.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new i(B);case t.ALPHANUMERIC:return new o(B);case t.KANJI:return new n(B);case t.BYTE:return new r(B)}}e.fromArray=function(T){return T.reduce(function(y,p){return typeof p=="string"?y.push(R(p,null)):p.data&&y.push(R(p.data,p.mode)),y},[])},e.fromString=function(T,y){const p=D(T,a.isKanjiModeEnabled()),b=E(p),I=A(b,y),F=u.find_path(I.map,"start","end"),U=[];for(let N=1;N<F.length-1;N++)U.push(I.table[F[N]].node);return e.fromArray(g(U))},e.rawSplit=function(T){return e.fromArray(D(T,a.isKanjiModeEnabled()))}})(Qt);const wt=O,Bt=ht,Fe=de,Pe=he,Le=Vt,Re=Yt,St=Jt,Dt=gt,Ue=me,dt=xt,ke=qt,He=x,vt=Qt;function Oe(e,t){const i=e.size,o=Re.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function ze(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Ve(e,t){const i=Le.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function Ye(e,t){const i=e.size,o=dt.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function Mt(e,t,i){const o=e.size,r=ke.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function Je(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(r,a-u)){let l=!1;s<t.length&&(l=(t[s]>>>n&1)===1),e.set(r,a-u,l),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function Ke(e,t,i){const o=new Fe;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),He.getCharCountIndicator(u.mode,e)),u.write(o)});const r=wt.getSymbolTotalCodewords(e),n=Dt.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let u=0;u<a;u++)o.put(u%2?17:236,8);return je(o,e,t)}function je(e,t,i){const o=wt.getSymbolTotalCodewords(t),r=Dt.getTotalCodewordsCount(t,i),n=o-r,s=Dt.getBlocksCount(t,i),a=o%s,u=s-a,l=Math.floor(o/s),d=Math.floor(n/s),D=d+1,C=l-d,g=new Ue(C);let E=0;const A=new Array(s),R=new Array(s);let B=0;const T=new Uint8Array(e.buffer);for(let F=0;F<s;F++){const U=F<u?d:D;A[F]=T.slice(E,E+U),R[F]=g.encode(A[F]),E+=U,B=Math.max(B,U)}const y=new Uint8Array(o);let p=0,b,I;for(b=0;b<B;b++)for(I=0;I<s;I++)b<A[I].length&&(y[p++]=A[I][b]);for(b=0;b<C;b++)for(I=0;I<s;I++)y[p++]=R[I][b];return y}function xe(e,t,i,o){let r;if(Array.isArray(e))r=vt.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const d=vt.rawSplit(e);l=dt.getBestVersionForData(d,i)}r=vt.fromString(e,l||40)}else throw new Error("Invalid data");const n=dt.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Ke(t,i,r),a=wt.getSymbolSize(t),u=new Pe(a);return Oe(u,t),ze(u),Ve(u,t),Mt(u,i,0),t>=7&&Ye(u,t),Je(u,s),isNaN(o)&&(o=St.getBestMask(u,Mt.bind(null,u,i))),St.applyMask(o,u),Mt(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Ot.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=Bt.M,r,n;return typeof i<"u"&&(o=Bt.from(i.errorCorrectionLevel,Bt.M),r=dt.from(i.version),n=St.from(i.maskPattern),i.toSJISFunc&&wt.setToSJISFunction(i.toSJISFunc)),xe(t,r,o,n)};var Xt={},Ft={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,u=e.getScale(s,n),l=Math.floor((s+n.margin*2)*u),d=n.margin*u,D=[n.color.light,n.color.dark];for(let C=0;C<l;C++)for(let g=0;g<l;g++){let E=(C*l+g)*4,A=n.color.light;if(C>=d&&g>=d&&C<l-d&&g<l-d){const R=Math.floor((C-d)/u),B=Math.floor((g-d)/u);A=D[a[R*s+B]?1:0]}o[E++]=A.r,o[E++]=A.g,o[E++]=A.b,o[E]=A.a}}})(Ft);(function(e){const t=Ft;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,l=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(l=o()),u=t.getOptions(u);const d=t.getImageWidth(n.modules.size,u),D=l.getContext("2d"),C=D.createImageData(d,d);return t.qrToImageData(C.data,n,u),i(D,l,d),D.putImageData(C,0,0),l},e.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const l=e.render(n,s,u),d=u.type||"image/png",D=u.rendererOpts||{};return l.toDataURL(d,D.quality)}})(Xt);var te={};const Ge=Ft;function kt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function _t(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function qe(e,t,i){let o="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),l=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(o+=n?_t("M",u+i,.5+l+i):_t("m",r,0),r=0,n=!1),u+1<t&&e[a+1]||(o+=_t("h",s),s=0)):r++}return o}te.render=function(t,i,o){const r=Ge.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,u=r.color.light.a?"<path "+kt(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+kt(r.color.dark,"stroke")+' d="'+qe(s,n,r.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',D=r.width?'width="'+r.width+'" height="'+r.width+'" ':"",C='<svg xmlns="http://www.w3.org/2000/svg" '+D+d+' shape-rendering="crispEdges">'+u+l+`</svg>
`;return typeof o=="function"&&o(null,C),C};const We=le,Tt=Ot,ee=Xt,Qe=te;function Pt(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!We())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,l){try{const d=Tt.create(i,o);u(e(d,t,o))}catch(d){l(d)}})}try{const u=Tt.create(i,o);r(null,e(u,t,o))}catch(u){r(u)}}Tt.create;var Ze=Pt.bind(null,ee.render);Pt.bind(null,ee.renderToDataURL);Pt.bind(null,function(e,t,i){return Qe.render(e,i)});const et=e=>(se("data-v-9e6b3d07"),e=e(),ue(),e),Xe={class:"card"},tn={class:"cardContent"},en=et(()=>m("div",null,[bt("\u5DF2\u626B\u7801 "),m("span")],-1)),nn={class:"centerBox"},rn={class:"centerBoxContent"},on={class:"_top"},sn={class:"_unit_name"},un={class:"_qr_code"},an={class:"_left"},cn=et(()=>m("div",null,"\u5B81\u6CE2\u5065\u5EB7\u7801",-1)),ln=et(()=>m("div",null,"\u7EFF\u7801\uFF1A\u5065\u5EB7\u72B6\u6001\u4E3A\u4F4E\u98CE\u9669",-1)),fn=et(()=>m("div",{class:"_right"},[m("div",null,"\u75AB\u60C5\u91CD\u70B9\u5730\u533A\u6838\u9A8C"),m("div",null,"\u67E5\u770B7\u5929\u662F\u5426\u5230\u8FC7\u75AB\u60C5\u91CD\u70B9\u5730\u533A"),m("div",null,[m("div",null,[bt(" \u7ACB\u5373\u67E5\u770B "),m("svg",{t:"1662737611470",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2368",width:"200",height:"200"},[m("path",{d:"M724 511.4L361 947.6c-12.2 14.6-33.9 16.6-48.5 4.4-14.6-12.2-16.6-33.9-4.4-48.5l326.2-392-326.3-391c-12.2-14.6-10.2-36.3 4.4-48.5 14.6-12.2 36.3-10.2 48.5 4.4l363.1 435z","p-id":"2369"})])]),m("div",null,"\u884C\u7A0B\u5361\u8BE6\u60C5")])],-1)),dn=et(()=>m("div",{class:"footer"},[m("div",{class:"footerCpntent"},[m("div",null,[m("div",{class:"_title"},[m("div",{class:"icon"},[m("svg",{t:"1662739892246",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3265",width:"200",height:"200"},[m("path",{d:"M964.693333 229.333333a55.466667 55.466667 0 0 1 0 78.08L472.106667 794.666667a56.533333 56.533333 0 0 1-33.92 16h-7.466667a55.253333 55.253333 0 0 1-37.546667-16.213334L59.093333 464.853333a55.253333 55.253333 0 0 1 0-77.866666 55.893333 55.893333 0 0 1 78.933334 0l294.4 289.706666 453.333333-448a56.32 56.32 0 0 1 78.933333 0.64z","p-id":"3266"})])]),m("span",null,"\u6838\u9178\u68C0\u6D4B\u91C7\u6837")]),m("div",{class:"_number"},[m("div",null,"24"),m("div",null,"\u5C0F\u65F6")]),m("div",{class:"_result"},"\u9634\u6027"),m("div",{class:"_result_msg"},[m("div",null,"\u8DDD\u79BB72\u5C0F\u65F6\u5269\u4F59"),m("div",null,"20\u65F626\u5206")])]),m("div",null,[m("div",{class:"_title"},[m("div",{class:"icon"},[m("svg",{t:"1662739892246",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3265",width:"200",height:"200"},[m("path",{d:"M964.693333 229.333333a55.466667 55.466667 0 0 1 0 78.08L472.106667 794.666667a56.533333 56.533333 0 0 1-33.92 16h-7.466667a55.253333 55.253333 0 0 1-37.546667-16.213334L59.093333 464.853333a55.253333 55.253333 0 0 1 0-77.866666 55.893333 55.893333 0 0 1 78.933334 0l294.4 289.706666 453.333333-448a56.32 56.32 0 0 1 78.933333 0.64z","p-id":"3266"})])]),m("span",null,"\u75AB\u82D7\u63A5\u79CD\u8BB0\u5F55")]),m("div",{class:"_number"},"\u5DF2\u63A5\u79CD3\u9488"),m("div",{class:"_result_msg"},[m("div",null,"2022-02-07 00:00:00"),m("div",null,"\u6F58\u706B\u8857\u9053\u793E\u533A\u536B\u751F\u670D\u52A1\u4E2D\u5FC3")])])])],-1)),hn=et(()=>m("div",{class:"footer_msg"},[m("div",null,"\u672C\u670D\u52A1\u7531\u5B81\u6CE2\u5E02\u4EBA\u6C11\u653F\u5E9C\u63D0\u4F9B"),m("div",null,"\u670D\u52A1\u70ED\u7EBF\uFF1A 0574-12345")],-1)),gn=ne({__name:"Home",setup(e){const t=W(Lt()),i=Ct(()=>t.value.format("MM\u6708DD\u65E5")),o=Ct(()=>t.value.format("HH:mm:ss")),r=W({name:"\u5F20\u4E91\u5C71",unit_name:"\u6D59\u6C5F\u7701\u5B81\u6CE2\u5E02\u911E\u5DDE\u533A\u90B1\u9698\u9547\u5F15\u53D1\u5E7C\u513F\u56ED\uFF08\u4E1C\u96C5\u56ED\uFF09"}),n=W(!1),s=Ct(()=>r.value.name.replace(/(.)(.)(.*)/,`$1${n.value?"$2":"*"}$3`)),a=W();re(()=>{setInterval(()=>{t.value=Lt()},1e3),Ze(a.value,"https://h5.dingtalk.com/healthAct/index.html?qrCode=V2befdaeb652d32121d8650bb3297a7659#/result",{color:{dark:"#01a95b"},width:155,margin:2})});const u=W(!1),l=W(),d=()=>{u.value?document.exitFullscreen():document.body.requestFullscreen(),u.value=!u.value};return(D,C)=>(ie(),oe("div",{class:"Home",onClick:d,ref_key:"el",ref:l},[m("div",Xe,[m("div",tn,[m("div",null,ot(pt(i)),1),m("div",null,ot(pt(o)),1),en])]),m("div",nn,[m("div",rn,[m("div",on,[bt(ot(pt(s))+" ",1),m("span",{onClick:C[0]||(C[0]=g=>n.value=!n.value)},ot(n.value?"\u9690\u85CF":"\u663E\u793A"),1)]),m("div",sn,ot(r.value.unit_name),1),m("div",un,[m("div",an,[m("div",null,[m("canvas",{ref_key:"canvas",ref:a},null,512)]),cn,ln]),fn])])]),dn,hn],512))}});const wn=ae(gn,[["__scopeId","data-v-9e6b3d07"]]);export{wn as default};
