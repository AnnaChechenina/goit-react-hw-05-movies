"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{806:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87),u=n(689),a="MoviesList_list__0Owr9",s="MoviesList_item__eePYv",c=n(184),i=function(e){var t=e.movies,n=(0,u.TH)();return(0,c.jsx)("ul",{className:a,children:t.map((function(e){var t=e.id,u=e.title;return(0,c.jsx)("li",{className:s,children:(0,c.jsx)(r.OL,{to:"/movies/".concat(t),state:{from:n},children:u})},t)}))})}},931:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),u=n(134),a=n(791),s="Search_search__Wncrn",c="Search_searchInput__Qk-44",i="Search_searchBtn__kEs6t",o=n(184),l=function(e){var t=e.onSubmit,n=e.query,u=(0,a.useState)(n),l=(0,r.Z)(u,2),f=l[0],h=l[1],m=function(){h("")};return(0,o.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault(),t(f),m()},children:[(0,o.jsx)("input",{className:c,type:"text",value:f,onChange:function(e){var t=e.target.value;h(t)},autoComplete:"off",placeholder:"Search movie"}),(0,o.jsx)("button",{className:i,type:"submit",children:"Search"})]})},f=n(806),h=n(87),m=function(){var e,t,n=(0,a.useState)([]),s=(0,r.Z)(n,2),c=s[0],i=s[1],m=(0,h.lr)(),v=(0,r.Z)(m,2),_=v[0],d=v[1],p=null!==(e=_.get("query"))&&void 0!==e?e:"",S=(0,a.useState)(p),x=(0,r.Z)(S,2),j=x[0],g=x[1],k=null!==(t=_.get("query"))&&void 0!==t?t:"";(0,a.useEffect)((function(){k&&(0,u.gH)(k).then((function(e){i(e.results)})).catch((function(e){return e.message})).finally((function(){}))}),[k]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{query:j,onSubmit:function(e){g(e),d(""!==e?{query:e}:{})}}),c.length>0&&(0,o.jsx)(f.Z,{movies:c})]})}}}]);
//# sourceMappingURL=931.9f326491.chunk.js.map