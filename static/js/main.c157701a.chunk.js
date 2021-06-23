(this.webpackJsonpecard=this.webpackJsonpecard||[]).push([[0],{31:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var a,r,c,i=t(0),o=t.n(i),l=t(21),u=t.n(l),d=(t(31),t(6)),b=t(8),s=t(2),j=t(3),p=t(1),x=j.a.div(a||(a=Object(s.a)(["\n  position: relative;\n  width: calc(100vw - 20px);\n  background: var(--background-lighter);\n  margin-bottom: 7px;\n  display: flex;\n  flex-direction: column;\n  padding: 6px 6px 8px 6px;\n"]))),f="\n  border: none;\n",O="\n  border-radius: 5px;\n  max-width: 100%;\n",h=j.a.span(r||(r=Object(s.a)(["\n  &, & > input {\n    font-size: 14px;\n    ","\n  }\n  & > input {\n    ","\n  }\n"])),f,O),v=j.a.span(c||(c=Object(s.a)(["\n  &, & > input {\n    font-size: 24px;\n    margin: 2px 5px 0px 5px;\n    ","\n  }\n  & > input {\n    ","\n  }\n"])),f,O),g=function(n){var e=n.label,t=n.value;return Object(p.jsxs)(x,{children:[Object(p.jsx)(h,{children:e}),Object(p.jsx)(v,{children:t})]})};var m,w,C,y,S=function(n){var e=n.handleChange,t=n.index;return Object(p.jsx)(g,{label:Object(p.jsx)("input",{type:"text",placeholder:"Name",onChange:function(n){return e(n.target.value,"label",t)}}),value:Object(p.jsx)("input",{type:"text",placeholder:"Value",onChange:function(n){return e(n.target.value,"value",t)}})})},k=function(n){for(var e=new Uint16Array(n.length),t=0;t<e.length;t++)e[t]=n.charCodeAt(t);return btoa(String.fromCharCode.apply(String,Object(b.a)(new Uint8Array(e.buffer))))},A=j.a.footer(m||(m=Object(s.a)(["\n  position: fixed;\n  width: 100vw;\n  bottom: 0;\n  padding: 12px 0 7px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-darker);\n"]))),N=j.a.div(w||(w=Object(s.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),U="\n  padding: 20px 15px;\n  border: 0px solid transparent;\n  margin: 15px;\n  border-radius: 20px;\n  cursor: pointer;\n",z=j.a.button(C||(C=Object(s.a)(["\n ","\n"])),U),F=j.a.input(y||(y=Object(s.a)(["\n  ","\n"])),U);var J=function(){var n=Object(i.useState)([{label:"",value:""}]),e=Object(d.a)(n,2),t=e[0],a=e[1],r=function(n,e,r){t[r][e]=n,a(t)};return Object(p.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=k(JSON.stringify(t));window.location.replace("".concat(window.location.origin,"?info=").concat(e))},children:[Object(p.jsx)(N,{children:t.map((function(n,e){return Object(p.jsx)(S,{handleChange:r,index:e},e)}))}),Object(p.jsxs)(A,{children:[Object(p.jsx)(z,{type:"button",onClick:function(){t.push({label:"",value:""}),a(Object(b.a)(t))},children:"Add property"}),Object(p.jsx)(F,{type:"submit",value:"Submit"})]})]})},I=t(25),L=t(26),P=t.n(L);var T=function(){var n=Object(i.useState)(""),e=Object(d.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(!1),c=Object(d.a)(r,2),o=c[0],l=c[1],u=Object(i.useCallback)((function(){l(!o)}),[o,l]);Object(i.useEffect)((function(){I.toCanvas(window.location.href).then((function(n){return a(n.toDataURL())}))}),[a]);var b=o?"Tap to unzoom":"Tap to zoom";return Object(p.jsxs)("div",{className:P()("qrcode",{expanded:o}),onClick:u,children:[Object(p.jsx)("img",{src:t,alt:"qrcode"}),Object(p.jsx)("div",{children:b})]})};var D=function(n){var e=n.data.map((function(n,e){var t=n.label,a=n.value;return Object(p.jsx)(g,{label:t,value:a},"cell-".concat(e))}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return window.location.replace(window.location.origin)},children:"New Card"}),Object(p.jsx)(N,{children:e})]}),Object(p.jsx)(A,{children:Object(p.jsx)(T,{})})]})},E=function(n){for(var e=window.atob(n),t=new Uint8Array(e.length),a=0;a<t.length;a++)t[a]=e.charCodeAt(a);return String.fromCharCode.apply(String,Object(b.a)(new Uint16Array(t.buffer)))};var q=function(){var n=o.a.useState([]),e=Object(d.a)(n,2),t=e[0],a=e[1];return console.log(k('[{"label":"Imi\u0119","value":"Ja\u015b"},{"label":"Nazwisko","value":"Kapela"},{"label":"NIP","value":"123456789"}]')),o.a.useEffect((function(){var n=new URLSearchParams(document.location.search),e=E(n.get("info")||"");a(JSON.parse(e||"[]"))}),[]),Object(p.jsx)("div",{className:"App",children:t.length?Object(p.jsx)(D,{data:t}):Object(p.jsx)(J,{})})},B=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};u.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),B()}},[[60,1,2]]]);
//# sourceMappingURL=main.c157701a.chunk.js.map