"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{580:function(e,i,s){s.r(i),s.d(i,{default:function(){return d}});var t=s(439),l=s(791),o=s(87),a=s(689),r=s(134),n="BackBtn_btn__W1hYz",c=s(184),m=function(e){var i=e.to,s=e.children;return(0,c.jsx)("button",{className:n,type:"button",children:(0,c.jsx)(o.rU,{to:i,children:s})})},v={section:"MovieDetails_section__Sz94J",movieDetails:"MovieDetails_movieDetails__ptV5y",movieDetailsPoster:"MovieDetails_movieDetailsPoster__CakNF",movieDetailsDescription:"MovieDetails_movieDetailsDescription__bIro9",movieDetailsInformTitle:"MovieDetails_movieDetailsInformTitle__8RKbJ",movieDetailsInformList:"MovieDetails_movieDetailsInformList__sJoaD"},d=function(){var e,i,s=(0,a.UO)().movieId,n=(0,l.useState)({}),d=(0,t.Z)(n,2),h=d[0],_=d[1],D=(0,a.TH)();(0,l.useEffect)((function(){(0,r.mU)(s).then((function(e){_(e)}))}),[s]);var j=h.poster_path,u=h.original_title,f=h.vote_average,x=h.overview,p=h.genres,k=h.release_date,b=new Date(k).getFullYear(),w=Math.round(10*f),I=null!==(e=null===(i=D.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/";return(0,c.jsxs)("section",{className:v.section,children:[(0,c.jsx)(m,{to:I,children:"Go back"}),(0,c.jsxs)("div",{className:v.movieDetails,children:[(0,c.jsx)("img",{className:v.movieDetailsPoster,src:j,alt:u}),(0,c.jsxs)("div",{className:v.movieDetailsDescription,children:[(0,c.jsxs)("h2",{children:[u," (",b,")"]}),(0,c.jsxs)("p",{children:["User Score: ",w," %"]}),(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{children:x}),(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("p",{children:p})]})]}),(0,c.jsxs)("div",{className:v.movieDetailsInform,children:[(0,c.jsx)("h3",{className:v.movieDetailsInformTitle,children:"Additional information"}),(0,c.jsxs)("ul",{className:v.movieDetailsInformList,children:[(0,c.jsx)("li",{children:(0,c.jsx)(o.OL,{to:"cast",state:{from:I},children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.OL,{to:"reviews",state:{from:I},children:"Reviews"})})]}),(0,c.jsx)(l.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading ..."}),children:(0,c.jsx)(a.j3,{})})]})]})}}}]);
//# sourceMappingURL=580.43ed8b78.chunk.js.map