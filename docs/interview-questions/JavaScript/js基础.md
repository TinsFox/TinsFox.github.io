# Js 基础

## js 概念与类型检测

1. 以下不属于 typeof 运算符返回值的是: ~C~ D

   ```js
   A. "string"
   B. "function"
   C. "object"
   D. "null"
   ```

2. 执行以下代码，错误的输出结果是: ~D~ C
   ```js
   A. 输入：typeof {"x":1} 输出："object"
   B. 输入：typeof 1 输出："number"
   C. 输入：typeof [{x:1}] 输出："array"
   D. 输入：typeof NaN 输出："number"
   ```
3. 可以用 typeof 来判断的基本类型有 A
   ```js
   A.undefined; // undefined
   B.null; // object
   C.array; // object
   D.object; // object
   ```
4. 以下不属于 JavaScript 基本数据类型的是：C
   ```javascript
   A.Boolean;
   B.undefined;
   C.Symbol;
   D.Array; // 引用数据类型
   ```
5. 以下关于 JavaScript 中数据类型的说法错误的是: ~D~ C
   ```javascript
   A. 数据类型分为基本数据类型和引用数据类型
   B. JavaScript一共有8种数据类型
   C. Object是引用数据类型，且只存储于堆(heap)中
   D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中
   ```

## 逻辑判断

1. 请选择结果为 ture 的表达式？C
   ```js
   A.null instanceof Object;
   B.null === undefined;
   C.null == undefined;
   D.NaN == NaN;
   ```
2. 下列代码结果为 true 的是？A
   ```js
    A. Symbol.for('a') === Symbol.for('a')
    B. Symbol('a') === Symbol('a')
    C. NaN === NaN
    D. {} === {}
   ```
3. 根据如下变量，下列表达式中返回值为 true 的是 A D 只有 D
   ```js
   var a = 1;
   var b = [];
   var c = '';
   var d = true;
   A. (a || b) === true // 1 === true output: false === 不会进行类型转换
   B. (b && c) === true
   C. (c && d) === true
   D. (d || a) === true
   ```
4. 1==true 的返回值是 true，这句话是否正确？T
5. 下面代码输出为 true 的是? D

   ```javascript
   A.console.log([] === []);
   B.console.log(undefined == 0);
   C.console.log(undefined == false);
   D.console.log(false == '');
   ```

6. 浏览器环境下，以下打印结果为 true 的是 C

   ```javascript
   A.console.log('12' === 12);
   B.console.log(NaN === NaN);
   C.console.log(typeof null === typeof window);
   D.console.log([1, 2, 3] === [1, 2, 3]);
   ```

7. 以下表达式，正确的是 D
   ```javascript
   A. Number('a') == Number('a')
   B. -1 == true
   C. 3 + '2' === 5 // '21'
   D. ![] == ''
   ```

## Math

根据原型对小程序进行 UI 重绘，提升用户的视觉、交互体验
根据需求文档进行功能开发，完成电商配送方式的扩展、接入腾讯地图定位用户位置信息、完成拼团营销活动的开发
优化产品应用的性能减少资源消耗
优化项目的结构设计，为项目的扩展性提供了良好的基础
对 uniapp cli 进行改造，实现小程序的 CI/CD
评审项目技术需求和架构，对需求的可实现性进行分析，同时对前端任务进行拆解分配，跟踪项目进度，确保项目的准时交付
基于 Docker+Jenkins+GitLab+webhook 构建 CI/CD 流水线，实现全项目的 DevOps

项目简介：这是一个面向购买顾客群体的电商 H5 商城
负责对前端的技术需求进行框架选型，搭建项目骨架
基于 React + Nextjs 结合 scss 与 React Hook 完成需求编码
使用 CSS module 对 CSS 进行模块化
