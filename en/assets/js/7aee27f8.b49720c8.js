"use strict";(self.webpackChunktinsfox_blog=self.webpackChunktinsfox_blog||[]).push([[3557],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6953:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(5443),o=n(3010),s=(n(9496),n(9613)),a=["components"],i={},u="Promise",c={permalink:"/en/blog/promise",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/promise.md",source:"@site/blog/promise.md",title:"Promise",description:"1. \u6ca1\u6709\u8003\u8651\u5f02\u6b65\u7248\u672c",date:"2021-07-02T06:15:45.000Z",formattedDate:"July 2, 2021",tags:[],readingTime:.94,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"EventLoop \u4e8b\u4ef6\u5faa\u73af",permalink:"/en/blog/EventLoop"},nextItem:{title:"\u4f5c\u7528\u57df",permalink:"/en/blog/\u4f5c\u7528\u57df"}},l={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u8003\u8651\u5f02\u6b65\u7248\u672c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const PENING ="PENDING"\nconst FULFLLED = "FULFILLED"\nconst REJECTED = "REJECTED"\nclass Promise(){\n  constructor(executor){\n    this.status = PENDING;\n    this.value = undefined;\n    this.reason = undefined;\n  }\n  resolve =(value) =>{\n    if(this.status === PENDING){\n      this.status = FULFILLED;\n      this.value = value;\n    }\n  }\n  reject = (reason) =>{\n    if(this.status===PENDING){\n      this.status = REJECTED;\n      this.reason = reason;\n    }\n  }\n  try{\n    excutor(resolve,reject)\n  }catch(error){\n    reject(error)\n  }\n  then(onFulfilled,onRejected){\n    if(this.status === FULFILLED){\n      onFulfilled(this.value)\n    }\n    if(this.status === REJECTED){\n      OnRejected(this.reason)\n    }\n  }\n}\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u5f02\u6b65")),(0,s.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f \u6536\u96c6\u4f9d\u8d56 -> \u89e6\u53d1\u901a\u77e5 -> \u53d6\u51fa\u4f9d\u8d56\u6267\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const PENDING = "PENDING"\nconst FULFILLED = "FULFILLED"\nconst REJECTED = "REJECTED"\nclass Promise{\n  constructor(executor){\n    this.status = PENDING\n    this.value = undefined\n    this.reason = undefined\n  }\n  let resolve = (value) =>{\n    if(this.status === PENDING){\n      this.status = FULFILLED;\n      this.value = value;\n    }\n  }\n  let reject = (reason)=>{\n    if(this.status === PENDING){\n      this.status = REJECTED;\n      this.reason = reason;\n    }\n  }\n  try{\n    executor(resolve,reject)\n  }catch(error){\n    reject(errod)\n  }\n    then(onFulfilled,onRejected){\n    if(this.status === FULFILLED){\n      onFulfilled(this.value)\n    }\n    if(this.status === REJECTED){\n      onRejacted(this.reason)\n    }\n    if(this.status ===PENDING){\n      this.onReslovedCallbacks.push(()=>{\n        onFulfilled(this.value)\n      })\n      this.onRejectedCallbacks.push(())=>{\n        onRejected(this.reason)\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);