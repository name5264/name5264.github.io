"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[942],{5482:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(1597),i=n(7294),r=n(1074),o=r.default.div.withConfig({displayName:"card__Container",componentId:"sc-1p3xbt3-0"})(["width:250px;height:300px;border-bottom:1px solid ",";border-top:1px solid ",";display:flex;flex:100;flex-direction:column;"],(function(t){return t.theme.text}),(function(t){return t.theme.text})),l=r.default.h1.withConfig({displayName:"card__Title",componentId:"sc-1p3xbt3-1"})(['flex:20;font-family:"Noto Sans KR",sans-serif;font-size:2rem;color:',";display:flex;align-items:center;"],(function(t){return t.theme.text})),c=r.default.p.withConfig({displayName:"card__Description",componentId:"sc-1p3xbt3-2"})(['flex:50;font-family:"Noto Sans KR",sans-serif;font-size:1.4rem;color:',";opacity:0.5;"],(function(t){return t.theme.text})),s=r.default.div.withConfig({displayName:"card__Tags",componentId:"sc-1p3xbt3-3"})(["flex:30;"]),d=n(4763),u=function(t){var e=t.title,n=t.to,r=t.description,u=t.tag;return i.createElement(o,{onClick:function(){return(0,a.navigate)(n)}},i.createElement(l,null,e),i.createElement(c,{dangerouslySetInnerHTML:{__html:r}}),i.createElement(s,null,u.slice(0,2).map((function(t){return i.createElement(d.Z,{tagName:t})}))))}},4763:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(7294),i=n(1074),r=i.default.span.withConfig({displayName:"tags__TagContainer",componentId:"sc-myi8pu-0"})(["border:1px solid ",";padding:5px 15px;color:",';text-align:center;font-family:"Noto Sans KR",sans-serif;font-weight:300;font-size:1.4rem;border-radius:50px;line-height:5rem;margin:0 8px;white-space:nowrap;'],(function(t){return t.theme.text}),(function(t){return t.theme.text})),o=i.default.span.withConfig({displayName:"tags__Hashtag",componentId:"sc-myi8pu-1"})(["padding-right:5px;"]),l=i.default.span.withConfig({displayName:"tags__TagName",componentId:"sc-myi8pu-2"})([""]),c=n(1597),s=function(t){var e=t.tagName,n=t.children;return e?a.createElement(r,{onClick:function(){return(0,c.navigate)("/tag/"+e)}},a.createElement(o,null,"#"),a.createElement(l,null,e,n?" ("+n+")":null)):null}},9051:function(t,e,n){n.d(e,{W:function(){return i},_:function(){return r}});var a=n(1074),i=a.default.div.withConfig({displayName:"pages__Container",componentId:"sc-11s6xgi-0"})(["width:90%;margin-top:50px;"]),r=a.default.div.withConfig({displayName:"pages__CardContainer",componentId:"sc-11s6xgi-1"})(["display:grid;grid-template-columns:",";grid-gap:25px;"],(function(t){for(var e=0===Math.floor(9*t.width/10/250)?1:Math.floor(9*t.width/10/250),n="250px",a=1;a<e;a++)n+=" 250px";return n}))},2185:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=n(7294),i=n(9012),r=n(262),o=n(1074).default.h1.withConfig({displayName:"tags__Title",componentId:"sc-u1k8l6-0"})(["text-align:center;color:",";font-size:3rem;"],(function(t){return t.theme.text})),l=n(4763),c=n(5482),s=n(9051),d=function(t){var e=t.pageContext,n=t.data,d=t.location,u=a.useState(0),f=u[0],p=u[1];a.useEffect((function(){p(window.innerWidth)}),[]);var m=e.tag,g=n.allMdx.edges,h=n.site.siteMetadata.title;return a.createElement(i.Z,{location:d,title:h},a.createElement(r.Z,{title:m}),a.createElement(o,null,a.createElement(l.Z,{tagName:m})),a.createElement(s.W,null,a.createElement(s._,{width:f},g.map((function(t){var e=t.node.frontmatter,n=e.title||"";return a.createElement(c.Z,{to:"/post/"+n+"/",key:"title-"+m,title:n,description:e.description,tag:e.tags})})))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-8fdb40962ca03caa6641.js.map