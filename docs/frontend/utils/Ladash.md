---
title: Ladash
---

# 介绍

[Lodash](https://www.lodashjs.com/) 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

> Ladash 是一个Js集成工具方法库，包含判断对象为空、防抖、节流等等


## 快速上手

### 安装

```shell
npm i --save lodash
```

### 使用
```JavaScript
let _ = require('lodash');
// Load the core build.
let _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
let fp = require('lodash/fp');
 
// Load method categories.
let array = require('lodash/array');
let object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
let at = require('lodash/at');
let curryN = require('lodash/fp/curryN');
let object={}
_.isEmpty(object)//true
```

### 判断是否为空

`isEmpty`

```
```



