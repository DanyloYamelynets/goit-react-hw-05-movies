"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[706],{25:function(e,r,t){t.d(r,{Cf:function(){return o},DL:function(){return f},Z$:function(){return i},g1:function(){return s},h7:function(){return p}});var n=t(861),c=t(757),a=t.n(c),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"fce4697c079fffcd8ee7621b4b30c3c1"}}),i=function(){var e=(0,n.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},706:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.r(r),t.d(r,{default:function(){return x}});var u=t(861),i=t(439),s=t(757),o=t.n(s),f=t(25),p=t(323),l=t(791),d=t(689),h=t(87),v=t(184),j=function(e){var r,t,n=e.poster_path,c=e.title,a=e.release_date,u=e.genres,i=e.vote_average,s=e.overview,o=(0,d.TH)(),f=(0,l.useRef)(null===(r=o.state)||void 0===r?void 0:r.from);return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:(0,v.jsx)(h.rU,{to:null!==(t=f.current)&&void 0!==t?t:"/",children:(0,v.jsx)("button",{children:"Go back"})})}),n&&(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n),alt:c,width:"250"}),(0,v.jsxs)("h1",{children:[c,", ",new Date(a).getFullYear()]}),(0,v.jsxs)("p",{children:["User score: ",Math.round(10*i),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:s}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:u.map((function(e){return e.name})).join(" ")})]})},x=function(){var e=(0,l.useState)(null),r=(0,i.Z)(e,2),t=r[0],n=r[1],c=(0,l.useState)(!1),s=(0,i.Z)(c,2),x=s[0],b=s[1],w=(0,l.useState)(null),m=(0,i.Z)(w,2),g=m[0],y=m[1],O=(0,d.UO)().id;return(0,l.useEffect)((function(){var e=function(){var e=(0,u.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,f.Cf)(O);case 4:r=e.sent,n(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),y(e.t0.message);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[O]),(0,v.jsxs)("div",{children:[t&&(0,v.jsx)(j,a({},t)),x&&(0,v.jsx)("div",{children:(0,v.jsx)(p.Z,{})}),g&&(0,v.jsxs)("div",{children:["Error: ",g]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]})]})]})}}}]);
//# sourceMappingURL=706.842cb5af.chunk.js.map