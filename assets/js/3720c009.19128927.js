"use strict";(self.webpackChunktinsfox_blog=self.webpackChunktinsfox_blog||[]).push([[3751],{8913:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(9496),r=n(1626),l=n(9719),c=n(1937),u=n(5617),s=n(6739),o=n(4461),i=n(239);function m(e){var t=e.tags,n=(0,l.M)();return a.createElement(c.FG,{className:(0,r.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},a.createElement(c.d,{title:n}),a.createElement(i.Z,{tag:"doc_tags_list"}),a.createElement(s.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("h1",null,n),a.createElement(o.Z,{tags:t}))))))}},298:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9496),r=n(1626),l=n(7880),c="tag_hF7t",u="tagRegular_Gwyl",s="tagWithCount_BHGw";function o(e){var t=e.permalink,n=e.label,o=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(c,o?s:u)},n,o&&a.createElement("span",null,o))}},4461:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(9496),r=n(9719),l=n(298),c="tag_5tIP";function u(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:c},a.createElement(l.Z,e))}))),a.createElement("hr",null))}function s(e){var t=e.tags,n=(0,r.P)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(u,{key:e.letter,letterEntry:e})})))}},9719:function(e,t,n){n.d(t,{M:function(){return r},P:function(){return l}});var a=n(5868),r=function(){return(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);