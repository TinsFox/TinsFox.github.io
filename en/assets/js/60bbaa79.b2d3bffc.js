"use strict";(self.webpackChunktinsfox_blog=self.webpackChunktinsfox_blog||[]).push([[3500],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(9496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=s,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(5443),s=n(3010),o=(n(9496),n(9613)),a=["components"],i={},c="Promise",u={unversionedId:"javascript/promise",id:"javascript/promise",title:"Promise",description:"1. \u6ca1\u6709\u8003\u8651\u5f02\u6b65\u7248\u672c",source:"@site/docs/javascript/promise.md",sourceDirName:"javascript",slug:"/javascript/promise",permalink:"/en/docs/javascript/promise",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/promise.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventLoop \u4e8b\u4ef6\u5faa\u73af",permalink:"/en/docs/javascript/EventLoop"},next:{title:"String \u5b57\u7b26\u4e32",permalink:"/en/docs/javascript/string"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promise"},"Promise"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u8003\u8651\u5f02\u6b65\u7248\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const PENING ="PENDING"\nconst FULFLLED = "FULFILLED"\nconst REJECTED = "REJECTED"\nclass Promise(){\n  constructor(executor){\n    this.status = PENDING;\n    this.value = undefined;\n    this.reason = undefined;\n  }\n  resolve =(value) =>{\n    if(this.status === PENDING){\n      this.status = FULFILLED;\n      this.value = value;\n    }\n  }\n  reject = (reason) =>{\n    if(this.status===PENDING){\n      this.status = REJECTED;\n      this.reason = reason;\n    }\n  }\n  try{\n    excutor(resolve,reject)\n  }catch(error){\n    reject(error)\n  }\n  then(onFulfilled,onRejected){\n    if(this.status === FULFILLED){\n      onFulfilled(this.value)\n    }\n    if(this.status === REJECTED){\n      OnRejected(this.reason)\n    }\n  }\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5f02\u6b65")),(0,o.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f \u6536\u96c6\u4f9d\u8d56 -> \u89e6\u53d1\u901a\u77e5 -> \u53d6\u51fa\u4f9d\u8d56\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const PENDING = "PENDING"\nconst FULFILLED = "FULFILLED"\nconst REJECTED = "REJECTED"\nclass Promise{\n  constructor(executor){\n    this.status = PENDING\n    this.value = undefined\n    this.reason = undefined\n  }\n  let resolve = (value) =>{\n    if(this.status === PENDING){\n      this.status = FULFILLED;\n      this.value = value;\n    }\n  }\n  let reject = (reason)=>{\n    if(this.status === PENDING){\n      this.status = REJECTED;\n      this.reason = reason;\n    }\n  }\n  try{\n    executor(resolve,reject)\n  }catch(error){\n    reject(errod)\n  }\n    then(onFulfilled,onRejected){\n    if(this.status === FULFILLED){\n      onFulfilled(this.value)\n    }\n    if(this.status === REJECTED){\n      onRejacted(this.reason)\n    }\n    if(this.status ===PENDING){\n      this.onReslovedCallbacks.push(()=>{\n        onFulfilled(this.value)\n      })\n      this.onRejectedCallbacks.push(())=>{\n        onRejected(this.reason)\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);