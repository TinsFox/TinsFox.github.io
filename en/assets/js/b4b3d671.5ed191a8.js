"use strict";(self.webpackChunktinsfox_blog=self.webpackChunktinsfox_blog||[]).push([[5697],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1736:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(5443),a=r(3010),l=(r(9496),r(9613)),o=["components"],i={},c="String \u5b57\u7b26\u4e32",s={unversionedId:"javascript/string",id:"javascript/string",title:"String \u5b57\u7b26\u4e32",description:"\u5b57\u7b26\u4e32\u5e38\u7528\u65b9\u6cd5",source:"@site/docs/javascript/string.md",sourceDirName:"javascript",slug:"/javascript/string",permalink:"/en/docs/javascript/string",draft:!1,editUrl:"http://github.com/TinsFox.github.io/docs/javascript/string.md",tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Promise",permalink:"/en/docs/javascript/promise"},next:{title:"this \u6307\u5411",permalink:"/en/docs/javascript/this"}},p={},u=[{value:"\u64cd\u4f5c\u65b9\u6cd5",id:"\u64cd\u4f5c\u65b9\u6cd5",level:2}],m={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"string-\u5b57\u7b26\u4e32"},"String \u5b57\u7b26\u4e32"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b57\u7b26\u4e32\u5e38\u7528\u65b9\u6cd5")),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u65b9\u6cd5"},"\u64cd\u4f5c\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"concat: \u7528\u4e8e\u5c06\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5b57\u7b26\u4e32\u62fc\u63a5\u8fd4\u56de\u65b0\u5b57\u7b26\u4e32"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let stringValue = 'hello ';\nlet result = stringValue.concat('world');\nconsole.log(result); // \"hello world\"\nconsole.log(stringValue); // \"hello\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"slice(start, end) \u8fd4\u56de\u5b57\u7b26\u4e32\u5185 start,end \u4e4b\u5185\u7684\u5b57\u7b26\u4e32\uff0cend \u9ed8\u8ba4\u4e3a\u6700\u540e\u4e00\u4f4d"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5220\u9664\u524d\u9762 start \u4e2a\uff0cend \u540e\u9762\u7684\uff0c\u8fd4\u56de\u4e2d\u95f4\u7684"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"subStr(start, end) \u8fd4\u56de\u5b57\u7b26\u4e32 start \u4e4b\u540e\u7684\u5b57\u7b26\u4e32\uff0c\u4e0d\u5305\u542b start"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"end \u662f\u8981\u8fd4\u56de start \u540e\u9762\u7684\u51e0\u4e2a\u5b57\u7b26\u4e32"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"subString\uff1a \u8fd4\u56de start \u4e4b\u540e\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'let stringValue = \'hello world\';\nconsole.log(stringValue.slice(3)); // "lo world"  \u5220\u9664\u524d\u97623\u4e2a\nconsole.log(stringValue.substring(3)); // "lo world"\nconsole.log(stringValue.substr(3)); // "lo world"\nconsole.log(stringValue.slice(3, 7)); // "lo w"\nconsole.log(stringValue.substring(3, 7)); // "lo w"\nconsole.log(stringValue.substr(3, 7)); // "lo worl"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"trim")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"trimleft")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"trimright")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"repeat"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let stringValue = 'na ';\nlet copyResult = stringValue.repeat(2); // na na\n"))),(0,l.kt)("li",{parentName:"ul"})))}g.isMDXComponent=!0}}]);