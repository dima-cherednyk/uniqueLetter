(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),u=n(4),i=n.n(u),a=(n(10),n(3)),s=n(5),l=n.n(s),o=(n(11),n(0)),p=function(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],c=e[1],u=Object(r.useState)(""),i=Object(a.a)(u,2),s=i[0],p=i[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h3",{children:"Find unique letter"}),Object(o.jsxs)("div",{className:"app__main",children:[Object(o.jsx)("input",{value:n,onChange:function(t){return c(t.currentTarget.value)},type:"text"}),Object(o.jsx)("button",{onClick:function(){return c("")},type:"button",disabled:!n,children:"Delete all"})]}),Object(o.jsx)("button",{onClick:function(){return function(t){var e=t.split(" ").map((function(t){return t.replace(/[\n]/g," ")})).filter((function(t){return""!==t})).map((function(t){return t.toLowerCase()})),n=[];e.forEach((function(t){t.split("").find((function(e){return t.indexOf(e)===t.lastIndexOf(e)?n.push(e):null}))}));var r=n.filter((function(t){return n.indexOf(t)===n.lastIndexOf(t)?t:null}));return p(r[0]||"No unique letter!")}(n)},type:"button",disabled:!n,children:"Find unique letter"}),Object(o.jsx)("p",{className:l()("app__result",{"app__result--hidden":!s}),children:"Result: ".concat(s)})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c02c5c02.chunk.js.map