(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(13),s=n.n(c),a=n(6),i=n(1),o=n.n(i),r=n(2),l=n(14),u=n(5),d=n(3),j=n(7),b=n.n(j),m=n(12),h=n(10),f=n.n(h),O=function(e,t){return fetch("".concat("https://mate.academy/students-api").concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status," - ").concat(e.statusText)))}))},p=function(e,t,n,c){return O("/users",{method:"POST",body:JSON.stringify({name:e,username:t,email:n,phone:c}),headers:{"Content-type":"application/json; charset=UTF-8"}})},x=function(e){return O("/todos?userId=".concat(e))},v=function(e){return O("/todos/".concat(e),{method:"DELETE"})},N=n(0),g=o.a.createContext({todos:[],setTodos:function(){},user:null}),y=function(e){var t=e.children,n=Object(i.useState)([]),c=Object(d.a)(n,2),s=c[0],a=c[1],o=Object(i.useState)(null),r=Object(d.a)(o,2),l=r[0],u=r[1],j=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/users?username=".concat(t));case 2:0===(n=e.sent).length?p("Dina Samoilova","DinaSamoilova","dina.samoilova13@gmail.com","+380679326850").then(u):u(n[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){j("DinaSamoilova")}),[]);var b=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){l&&b(l.id)}),[l]);var h=Object(i.useMemo)((function(){return{todos:s,setTodos:a,user:l}}),[s,l]);return Object(N.jsx)(g.Provider,{value:h,children:t})},k=(n(21),function(){var e=Object(i.useContext)(g),t=e.todos,n=e.setTodos,c=e.user,s=Object(i.useState)(!1),a=Object(d.a)(s,2),o=a[0],r=a[1],j=Object(i.useState)(""),m=Object(d.a)(j,2),h=m[0],f=m[1],p=Object(i.useMemo)((function(){var e=t.filter((function(e){return!0===e.completed})).length;return e===t.length?r(!0):r(!1),e}),[t]),x=function(e,t){if(c&&t){!function(e,t){O("/todos",{method:"POST",body:JSON.stringify({title:t,userId:e,completed:!1}),headers:{"Content-type":"application/json; charset=UTF-8"}})}(e,t);var s={id:Date.now(),title:t,completed:!1,userId:e};n((function(e){return[].concat(Object(l.a)(e),[s])}))}f("")};return Object(N.jsx)("form",{className:"field field__form",onSubmit:function(e){e.preventDefault(),c&&x(null===c||void 0===c?void 0:c.id,h)},children:Object(N.jsxs)("div",{className:"control",children:[Object(N.jsx)("input",{type:"text",value:h,className:"input is-primary pl-6 is-relative",placeholder:"What needs to be done?",onChange:function(e){f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c&&x(null===c||void 0===c?void 0:c.id,h))}}),t&&t.length>0&&Object(N.jsx)("button",{type:"button",className:b()("button icon btnAll",{"has-text-grey-light":(null===t||void 0===t?void 0:t.length)!==p,"has-text-primary":(null===t||void 0===t?void 0:t.length)===p}),title:"select all",onClick:function(){!o&&t&&n(t.map((function(e){return e.completed?(r(!1),e):Object(u.a)(Object(u.a)({},e),{},{completed:!0})}))),o&&t&&n(t.map((function(e){return e.completed?Object(u.a)(Object(u.a)({},e),{},{completed:!1}):(r(!0),e)})))},children:Object(N.jsx)("i",{className:"fas fa-check"})}),h.length>0&&Object(N.jsx)("button",{type:"submit",className:"button icon has-text-primary btnAdd",title:"add todo",children:Object(N.jsx)("i",{className:"fas fa-add"})})]})})}),C=(n(22),function(){var e=Object(i.useContext)(g),t=e.todos,n=e.setTodos,c=Object(i.useState)(0),s=Object(d.a)(c,2),o=s[0],r=s[1],l=Object(i.useMemo)((function(){var e=t?t.filter((function(e){return!0===e.completed})).length:0;return e>0&&r(e),0===e&&r(0),e}),[t]);return Object(N.jsx)(N.Fragment,{children:t&&t.length>0&&Object(N.jsx)("div",{className:"panel-block",children:Object(N.jsx)("div",{className:"field field__footer",children:Object(N.jsx)("div",{className:"conteiner",children:Object(N.jsxs)("div",{className:"field is-grouped is-justify-content-space-between",children:[Object(N.jsx)("div",{className:"content mb-0",children:Object(N.jsx)("p",{className:"is-size-6",children:t&&"".concat((null===t||void 0===t?void 0:t.length)-o,"\n                  ").concat((null===t||void 0===t?void 0:t.length)-o===1?" item":" items"," left")})}),Object(N.jsx)("div",{className:"conteiner mb-0",children:Object(N.jsxs)("div",{className:"panel-tabs tabs is-small mb-0 status",children:[Object(N.jsx)(a.b,{to:"/",className:function(e){var t=e.isActive;return b()({"is-active has-text-white has-background-primary":t})},children:"All"}),Object(N.jsx)(a.b,{to:"/active",className:function(e){var t=e.isActive;return b()("status--middle",{"is-active has-text-white has-background-primary":t})},children:"Active"}),Object(N.jsx)(a.b,{to:"/completed",className:function(e){var t=e.isActive;return b()({"is-active has-text-white has-background-primary":t})},children:"Completed"})]})}),Object(N.jsx)("div",{className:b()("conteiner mb-0",{delCompleted:0===l}),children:Object(N.jsx)("div",{className:"buttons",children:Object(N.jsx)("button",{type:"button",className:"button is-danger is-rounded is-small",onClick:function(){n(t.filter((function(e){return e.completed&&v(e.id),!e.completed})))},children:"Clear completed"})})})]})})})})})}),w=(n(23),function(){var e=Object(i.useContext)(g).user;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"conteiner is-max-widescreen px-6",children:Object(N.jsx)("div",{className:"box m-auto app",children:Object(N.jsxs)("div",{className:"panel is-primary",children:[Object(N.jsxs)("h1",{className:"panel-heading has-text-centered is-size-1",children:[null===e||void 0===e?void 0:e.name.toUpperCase(),Object(N.jsx)("br",{}),"TODOS"]}),Object(N.jsx)("div",{className:"panel-block",children:Object(N.jsx)(k,{})}),Object(N.jsx)(r.a,{}),Object(N.jsx)(C,{})]})})})})}),S=(n(24),function(e){var t=e.id,n=e.title,c=e.completed,s=Object(i.useState)(n),a=Object(d.a)(s,2),o=a[0],r=a[1],l=Object(i.useState)(!1),j=Object(d.a)(l,2),m=j[0],h=j[1],f=Object(i.useState)(o),p=Object(d.a)(f,2),x=p[0],y=p[1],k=Object(i.useContext)(g),C=k.todos,w=k.setTodos,S=function(){h(!0)},D=function(e){!function(e,t){O("/todos/".concat(e),{method:"PATCH",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}})}(e,{title:x}),w(C.map((function(t){return e===t.id?Object(u.a)(Object(u.a)({},t),{},{title:x}):t})))};return Object(N.jsx)("li",{children:Object(N.jsxs)("div",{className:"field is-grouped is-justify-content-space-between",children:[Object(N.jsxs)("div",{className:"field field--width",children:[Object(N.jsxs)("label",{className:"field",title:"done",onDoubleClick:S,children:[Object(N.jsxs)("span",{className:"icon has-text-primary",children:[!1===c&&Object(N.jsx)("i",{className:"fa-regular fa-circle mx-1"}),!0===c&&Object(N.jsx)("i",{className:"fa-regular fa-circle-check mx-1"})]}),Object(N.jsx)("input",{type:"checkbox",checked:c,className:"checked",onChange:function(){return e=t,void w(C.map((function(t){return e===t.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})));var e}})]}),Object(N.jsx)("label",{className:"field",onDoubleClick:S,children:m?Object(N.jsx)("input",{type:"text",value:x,className:"input is-primary",style:{width:"80%"},onChange:function(e){y(e.target.value)},onKeyDown:function(e){return c=t,"Enter"===(n=e).key&&(n.preventDefault(),r(x),D(c),h(!1)),void("Escape"===n.key&&(n.preventDefault(),y(o),h(!1)));var n,c},onBlur:function(){return e=t,r(x),D(e),void h(!1);var e},autoFocus:!0}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("p",{className:b()("todo",{"todo--complete":!0===c}),children:o})})})]}),Object(N.jsxs)("div",{className:"buttons",children:[Object(N.jsx)("button",{type:"button",className:"button icon has-text-info btn",title:"edit",disabled:m,onClick:function(){h(!0)},children:Object(N.jsx)("i",{className:"fas fa-solid fa-feather fa-aling-right"})}),Object(N.jsx)("button",{type:"button",className:"button icon has-text-danger btn",title:"delete",disabled:m,onClick:function(){return v(e=t),void w(C.filter((function(t){return t.id!==e})));var e},children:Object(N.jsx)("i",{className:"fas fa-solid fa-circle-xmark fa-aling-right"})})]})]})})}),D=(n(25),function(){var e=Object(i.useContext)(g).todos,t=Object(r.h)().status,n=Object(i.useMemo)((function(){return e.filter((function(e){switch(t){case"active":return!1===e.completed;case"completed":return!0===e.completed;default:return e}}))}),[e,t]);return Object(N.jsx)(N.Fragment,{children:e.length>0&&Object(N.jsx)("div",{className:"panel-block",children:Object(N.jsx)("div",{className:"content content--width",children:Object(N.jsx)("ul",{className:"m-0 list",children:n.map((function(e){return Object(N.jsx)(S,Object(u.a)({},e),e.id)}))})})})})}),T=function(){return Object(N.jsx)("p",{className:"has-text-centered has-text-danger is-size-2",children:"Page not found"})},E=(n(26),n(27),function(){return Object(N.jsx)(y,{children:Object(N.jsx)(r.d,{children:Object(N.jsxs)(r.b,{path:"/",element:Object(N.jsx)(w,{}),children:[Object(N.jsx)(r.b,{path:"/",element:Object(N.jsx)(D,{}),children:Object(N.jsx)(r.b,{path:":status",element:Object(N.jsx)(D,{})})}),Object(N.jsx)(r.b,{path:"*",element:Object(N.jsx)(T,{})})]})})})});s.a.render(Object(N.jsx)(a.a,{children:Object(N.jsx)(E,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.47df88ab.chunk.js.map