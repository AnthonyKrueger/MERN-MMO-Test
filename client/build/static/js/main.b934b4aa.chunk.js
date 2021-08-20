(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(4),a=n.n(s),r=n(31),c=n.n(r),o=(n(37),n(5)),l=n.n(o),i=n(9),u=n(11),d=(n(39),n(16)),p=n(2),j=n(0);function x(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1];function r(){return(r=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/session");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),a(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:n||"No User Loaded"}),Object(j.jsx)("button",{onClick:function(){return r.apply(this,arguments)},children:"Fetch Data"})]})}var b=n(13),h=n.n(b);function m(e){var t=e.userData;return Object(j.jsxs)("div",{className:"bg-orange-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2 mx-5 lg:mx-20",children:[Object(j.jsxs)("h2",{className:"text-2xl text-white font-semibold",children:["Hello, ",t.username]}),Object(j.jsxs)("div",{className:"pl-2 container space-y-3 py-3 rounded bg-orange-light",children:[Object(j.jsxs)("p",{children:["Email: ",t.email]}),Object(j.jsxs)("p",{children:["UserID: ",t._id]})]})]})}function f(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/user/me");case 2:(t=e.sent)?a(t.data):console.log("error");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?Object(j.jsx)("div",{className:"mt-10",children:Object(j.jsx)(m,{userData:n})}):Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Loading..."})})}var g=n(14),O=n(15);function v(e){var t=e.type,n=e.placeholder,s=e.value,a=e.onChange;return Object(j.jsx)("input",{required:!0,type:t,placeholder:n,value:s,onChange:a,className:"shadow appearance-none bg-red-dark border-red-deep border rounded w-full py-2 px-3 placeholder-white placeholder-opacity-50 text-white leading-tight focus:outline-none focus:shadow-outline"})}function w(e){var t=e.type,n=e.text;return Object(j.jsx)("button",{className:"bg-red-dark hover:bg-red-deep text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:t,children:n})}function y(e){var t=e.loginFunction,n=Object(s.useState)({username:"",password:""}),a=Object(u.a)(n,2),r=a[0],c=a[1];function o(e,t){c(Object(O.a)(Object(O.a)({},r),{},Object(g.a)({},e,t)))}function d(){return(d=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.a.post("/api/user/login",{username:r.username,password:r.password}).catch((function(e){e.response?(console.log(e.response),alert(e.response.data.message)):e.request?(console.log(e.request),alert(e.request)):console.log("error:",e.message)}));case 3:e.sent?(console.log("Login Successful"),t(!0)):console.log("Login Failed");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"h-full",children:Object(j.jsxs)("form",{className:"bg-orange-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2",onSubmit:function(e){return function(e){return d.apply(this,arguments)}(e)},children:[Object(j.jsx)("h2",{className:"text-xl pb-5 text-white font-semibold",children:"Login"}),Object(j.jsx)(v,{type:"text",placeholder:"Username",value:r.username,onChange:function(e){return o("username",e.target.value)}}),Object(j.jsx)(v,{type:"password",placeholder:"Password",value:r.password,onChange:function(e){return o("password",e.target.value)}}),Object(j.jsx)("div",{className:"pt-5 mx-auto",children:Object(j.jsx)(w,{type:"submit",text:"Login"})})]})})}function N(e){var t=e.loginFunction,n=Object(s.useState)({username:"",password:"",email:""}),a=Object(u.a)(n,2),r=a[0],c=a[1];function o(e,t){c(Object(O.a)(Object(O.a)({},r),{},Object(g.a)({},e,t)))}function d(){return(d=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.a.post("/api/user",{username:r.username,password:r.password,email:r.email}).catch((function(e){e.response?(11e3===e.response.data.code?alert("Email or Username Not Available"):alert(e.response.data.message),console.log(e.response.data)):e.request?(console.log(e.request),alert(e.request)):console.log("error:",e.message)}));case 3:e.sent?(console.log("Sign-Up Successful"),t(!0)):console.log("Sign-Up Failed");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"h-full",children:Object(j.jsxs)("form",{className:"bg-orange-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2",onSubmit:function(e){return function(e){return d.apply(this,arguments)}(e)},children:[Object(j.jsx)("h2",{className:"text-xl pb-5 text-white font-semibold",children:"Sign Up"}),Object(j.jsx)(v,{type:"text",placeholder:"Email",value:r.email,onChange:function(e){return o("email",e.target.value)}}),Object(j.jsxs)("div",{className:"grid grid-cols-2 w-full gap-2",children:[Object(j.jsx)(v,{type:"text",placeholder:"Username",value:r.username,onChange:function(e){return o("username",e.target.value)}}),Object(j.jsx)(v,{type:"password",placeholder:"Password",value:r.password,onChange:function(e){return o("password",e.target.value)}})]}),Object(j.jsx)("div",{className:"pt-5 mx-auto",children:Object(j.jsx)(w,{type:"submit",text:"Sign-Up"})})]})})}function k(e){var t=e.loginFunction;return Object(j.jsxs)("div",{className:"grid pt-5 md:pt-20 grid-cols-1 mx-10 md:mx-20 lg:mx-30 xl:mx-40 md:grid-cols-2 my-10 gap-10",children:[Object(j.jsx)(y,{loginFunction:t}),Object(j.jsx)(N,{loginFunction:t})]})}function F(e){var t=e.logoutFunction;return Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!1),e.next=3,fetch("/api/user/logout");case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(j.jsx)(p.a,{to:"/"})}var S=function(){var e=a.a.useState(!1),t=Object(u.a)(e,2),n=t[0],s=t[1];return a.a.useEffect((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/loggedIn");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n.loggedIn);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-red-deep p-6",children:[Object(j.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:Object(j.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"FullStackApp"})}),Object(j.jsxs)("div",{className:"w-full flex lg:items-center lg:w-auto lg:space-x-10",children:[Object(j.jsx)("div",{className:"text-md lg:flex-grow",children:Object(j.jsx)(d.b,{to:"/",className:"block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4",children:"Home"})}),Object(j.jsx)("div",{className:"text-md lg:flex-grow",children:Object(j.jsx)(d.b,{to:"/user",className:"block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4",children:"User"})}),Object(j.jsx)("div",{className:"text-md lg:flex-grow",children:Object(j.jsx)(d.b,{to:n?"/logout":"/login",className:"block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4",children:n?"Logout":"Login"})})]})]}),Object(j.jsx)("div",{className:"container mx-auto",children:Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{exact:!0,path:"/",children:Object(j.jsx)(x,{loginFunction:s})}),Object(j.jsx)(p.b,{path:"/user",children:n?Object(j.jsx)(f,{}):Object(j.jsx)(p.a,{to:"/login"})}),Object(j.jsx)(p.b,{path:"/login",children:n?Object(j.jsx)(p.a,{to:"/"}):Object(j.jsx)(k,{loginFunction:s})}),Object(j.jsx)(p.b,{path:"/logout",children:n?Object(j.jsx)(F,{logoutFunction:s}):Object(j.jsx)(p.a,{to:"/"})})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.b934b4aa.chunk.js.map