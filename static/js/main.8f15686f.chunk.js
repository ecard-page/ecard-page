(this.webpackJsonpecard=this.webpackJsonpecard||[]).push([[0],{23:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),o=n.n(c),i=(n(23),n(4)),l=n(6),u=n(0);var s=function(e){var t=e.handleChange,n=e.index;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return t(e.target.value,"label",n)}}),Object(u.jsx)("input",{type:"text",onChange:function(e){return t(e.target.value,"value",n)}})]})},j=function(e){for(var t=new Uint16Array(e.length),n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return btoa(String.fromCharCode.apply(String,Object(l.a)(new Uint8Array(t.buffer))))};var b=function(){var e=Object(a.useState)([{label:"",value:""}]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(e,t,a){n[a][t]=e,r(n)};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=j(JSON.stringify(n));window.location.replace("".concat(window.location.origin,"?info=").concat(t))},children:[n.map((function(e,t){return Object(u.jsx)(s,{handleChange:c,index:t},t)})),Object(u.jsx)("button",{type:"button",onClick:function(){n.push({label:"",value:""}),r(Object(l.a)(n))},children:"Add property"}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})};var d=function(e){var t=e.data.map((function(e){var t=e.label,n=e.value;return Object(u.jsxs)("div",{className:"propertyRow",children:[Object(u.jsx)("span",{className:"propertyRow-label",children:t}),Object(u.jsx)("span",{className:"propertyRow-value",children:n})]},n)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return window.location.replace(window.location.origin)},children:"New Card"}),Object(u.jsx)("div",{className:"propertyList",children:t})]})},f=function(e){for(var t=window.atob(e),n=new Uint8Array(t.length),a=0;a<n.length;a++)n[a]=t.charCodeAt(a);return String.fromCharCode.apply(String,Object(l.a)(new Uint16Array(n.buffer)))},p=n(17),h=n(18),v=n.n(h);var O=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(i.a)(c,2),l=o[0],s=o[1],j=Object(a.useCallback)((function(){s(!l)}),[l,s]);Object(a.useEffect)((function(){p.toCanvas(window.location.href).then((function(e){return r(e.toDataURL())}))}),[r]);var b=l?"Tap to unzoom":"Tap to zoom";return Object(u.jsxs)("div",{className:v()("qrcode",{expanded:l}),onClick:j,children:[Object(u.jsx)("img",{src:n,alt:"qrcode"}),Object(u.jsx)("div",{children:b})]})};var x=function(){return Object(u.jsx)("footer",{children:Object(u.jsx)(O,{})})};var g=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return console.log(j('[{"label":"Imi\u0119","value":"Ja\u015b"},{"label":"Nazwisko","value":"Kapela"},{"label":"NIP","value":"123456789"}]')),r.a.useEffect((function(){var e=new URLSearchParams(document.location.search),t=f(e.get("info")||"");a(JSON.parse(t||"[]"))}),[]),Object(u.jsxs)("div",{className:"App",children:[n.length?Object(u.jsx)(d,{data:n}):Object(u.jsx)(b,{}),n.length?Object(u.jsx)(x,{}):null]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),w()}},[[50,1,2]]]);
//# sourceMappingURL=main.8f15686f.chunk.js.map