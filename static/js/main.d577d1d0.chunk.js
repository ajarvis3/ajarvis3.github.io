(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(0),s=a.n(n),r=a(8),o=a.n(r),c=(a(59),a(60),a(17)),h=a(5),d=a(98),l=a(90),p=a(99),b=a(91),m=Object(c.b)({key:"menuState",default:0}),j=function(e){var t=e.className,a=Object(c.c)(m),n=Object(h.a)(a,2),s=n[0],r=n[1];return Object(i.jsx)(d.a,{variant:"permanent",anchor:"left",className:t,children:Object(i.jsxs)(l.a,{className:t,children:[Object(i.jsx)(p.a,{children:Object(i.jsx)(b.a,{primary:"Andrew Jarvis"})}),["About Me","Projects","Future Projects"].map((function(e,t){return Object(i.jsx)(p.a,{button:!0,selected:s===t,onClick:function(e){return function(e,t){r(e)}(t)},children:Object(i.jsx)(b.a,{primary:e})},e)}))]})})},u=a(28),g=function(){return Object(i.jsxs)("div",{id:"about",children:[Object(i.jsxs)("div",{id:"about-text",className:"about-item",children:[Object(i.jsx)(u.a,{paragraph:!0,children:"My name's Andrew and I'm currently a senior at the University of Rochester."}),Object(i.jsx)(u.a,{paragraph:!0,children:"Whenever I'm writing about myself, I'm tempted to start with: \"In the beginning, I was born.\""}),Object(i.jsx)(u.a,{paragraph:!0,children:"In the beginning, I was born. It's pretty much all been downhill from there."}),Object(i.jsx)(u.a,{paragraph:!0,children:"In my freetime, I like to bake. I kinda lost the memo about a lot of experimentation, so I usually break out the hits of chocolate chip cookies and brownies with apple cinnamon muffins and oatmeal raisin cookies mixed in. I make the recipes my own by adding too much vanilla."}),Object(i.jsx)(u.a,{paragraph:!0,children:"I also enjoy the Netflix show Lucifer. I look forward to the day that season 5B is released (if that day does in fact come)."}),Object(i.jsx)(u.a,{paragraph:!0,children:'My greatest desire (at the time of writing) is to work on a project and know someone who uses it so I can say: "I made that!"'})]}),Object(i.jsxs)("div",{id:"self-image-container",className:"about-item",children:[Object(i.jsx)("img",{id:"self-image",src:"https://dm2301files.storage.live.com/y4mOQ4kpH0t2-F-JV026l7uVQTdh7Z16KvtmTLBkgO1hLCpC8LMCdMVpDpY5UXAjW5bdLf8F92mtYGUWJFMCVkhyIiTcXCaUF4MCMxPpiM4TXT6NBbh7gPxsl2Q057enyzk254urnfKRJVlt368yC0az8zPj1n7zWxmBUn9wGcfKVKINXoldF3G46dBHbjiVyUh?width=720&height=777&cropmode=none",alt:"me"}),Object(i.jsx)("label",{children:"A picture of myself at a point in time"})]})]})},f=a(93),x=a(94),O=a(95),y=a(96),w=a(92),v=function(e){var t=e.name,a=e.repository,s=e.site,r=e.description,o=Object(n.useState)(!1),c=Object(h.a)(o,2),d=c[0],l=c[1],p=function(){l(!d)};return Object(i.jsx)(w.a,{variant:"outlined",children:Object(i.jsxs)(f.a,{children:[Object(i.jsx)(u.a,{variant:"h5",children:t}),a&&Object(i.jsx)(x.a,{children:Object(i.jsx)(O.a,{target:"_blank",href:a,children:"Repository"})}),s&&Object(i.jsx)(x.a,{children:Object(i.jsx)(O.a,{target:"_blank",href:s,children:"Website"})}),d?Object(i.jsxs)(f.a,{children:[Object(i.jsx)(u.a,{paragraph:!0,children:r}),Object(i.jsx)(y.a,{size:"small",onClick:p,children:"Minimize"})]}):Object(i.jsx)(x.a,{children:Object(i.jsx)(y.a,{size:"small",onClick:p,children:"Learn More"})})]})})},k=function(e){return e.projects.map((function(e){return Object(i.jsx)(v,{name:e.name,repository:e.repository,site:e.site,description:e.description},e.name)}))},I=[{_id:{$oid:"60221c553ec6205d21b05e33"},name:"Whiteboard",repository:"https://github.com/ajarvis3/canvas",site:"https://ajarvis3.github.io/canvas",description:"A collaborative application that allows users to share a virtual whiteboard. Compared to the one supported by Zoom, I would like to add functionality to save images of the whiteboard and create additional whiteboards. Linked website and repo are for the preliminary version of the canvas."},{name:"Scheduling",description:"Current scheduling tools (that I've used) are good at showing a person's availability, but not great at actually scheduling. I'd like to create an app that does this better. The simple case is when all members need to find a common meeting time: just find a meeting time. A more difficult problem would be assigning users to different times (as I had to do when scheduling recitations...) There are other use cases I'd like to consider, so this is a mental concept that I'll give myself more time to implement."}],C=[{name:"React-Chat",repository:"https://github.com/ajarvis3/react-chat",site:"https://ajarvis3.github.io/React-Chat",description:"A simple chat application implemented using SignalR and React. The backend is hosted on Azure, this isn't as reliable as I'd like and expect, but it seems that it only takes ~30 seconds to start the application if it has stopped running."},{name:"Senate Scraper",repository:"https://github.com/ajarvis3/congress",site:"https://ajarvis3.github.io/congress",description:"An application to integrate some different concepts. I created a web scraper (that I could not get to run on Heroku :( ) to get information on Senators from senate.gov and stored that in a MongoDB database. The information can then be retrieved by a website using a Spring Boot API that is hosted on Heroku (though it currently takes a bit of time to retrieve)."},{name:"Recipe Box (Front End)",repository:"https://github.com/ajarvis3/recipe-box",site:"https://recipeboxapp.azurewebsites.net",description:"An application that helps users to store and organize recipes they find from around the internet. A work in progress that uses React, Recoil, Material UI, and React Router"},{name:"Recipe Box (Backend)",repository:"https://github.com/ajarvis3/recipe-box-api",site:"https://recipeboxapp.azurewebsites.net",description:"The backend of my recipe app. Returns the front end to the client along with providing an API to access and store information, as well as to authenticate users. A work in progress built using Express"}],A=function(e){var t=e.className,a=Object(c.d)(m),n=0===a?Object(i.jsx)(g,{}):1===a?Object(i.jsx)(k,{projects:C}):Object(i.jsx)(k,{projects:I});return Object(i.jsx)("main",{className:t,children:n})},M=a(97),R=Object(M.a)({drawer:{width:160},content:{marginTop:20,marginLeft:160}});var T=function(){var e=R();return Object(i.jsxs)(c.a,{children:[Object(i.jsx)(j,{className:e.drawer}),Object(i.jsx)(A,{className:e.content})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,101)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),B()}},[[66,1,2]]]);
//# sourceMappingURL=main.d577d1d0.chunk.js.map