"use strict";(self.webpackChunktinsfox_blog=self.webpackChunktinsfox_blog||[]).push([[5694],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),y=o,d=f["".concat(i,".").concat(y)]||f[y]||s[y]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7504:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(5443),o=t(3010),a=(t(9496),t(9613)),l=["components"],c={},i=void 0,p={unversionedId:"type-challenges/warn-up/HelloWord",id:"type-challenges/warn-up/HelloWord",title:"HelloWord",description:"Warn Up",source:"@site/docs/type-challenges/warn-up/13-HelloWord.mdx",sourceDirName:"type-challenges/warn-up",slug:"/type-challenges/warn-up/HelloWord",permalink:"/en/docs/type-challenges/warn-up/HelloWord",draft:!1,editUrl:"http://github.com/TinsFox.github.io/docs/type-challenges/warn-up/13-HelloWord.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"noteSidebar",previous:{title:"type-challenges1",permalink:"/en/docs/type-challenges/"},next:{title:"CSS",permalink:"/en/docs/category/css"}},u={},s=[{value:"Warn Up",id:"warn-up",level:2}],f={toc:s};function y(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"warn-up"},"Warn Up"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"// a\ntype H = string;\n//\n// import type { Equal, Expect, NotAny } from '@type-challenges/utils';\n//\n// type cases = [\n//   Expect<NotAny<H>>,\n//   Expect<Equal<H, string>>,\n// ]\n\n")))}y.isMDXComponent=!0}}]);