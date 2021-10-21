# EventLoop

JavaScript 是**单线程**语言，JavaScript 中一切多线程都是使用单线程模拟出来的。

### 单线程任务

> https://www.yuque.com/fe9/basic/cdpfk3
>
> https://juejin.cn/post/6999514306345697294

```javascript
console.log("1"); √

setTimeout(function () {
    console.log("2");
    new Promise(function (resolve) {
        console.log("3");
        resolve();
    }).then(function () {
        console.log("4");
    });
});

new Promise(function (resolve) {
    console.log("5");
    resolve();
}).then(function () {
    console.log("6");
});

setTimeout(function () {
    console.log("7");
});

setTimeout(function () {
    console.log("8");
    new Promise(function (resolve) {
        console.log("9");
        resolve();
    }).then(function () {
        console.log("10");
    });
});

new Promise(function (resolve) {
    console.log("11");
    resolve();
}).then(function () {
    console.log("12");
});

console.log("13");
// result 1 5 11 13 6 12 2 3 7 8 9 4 10
答案是：1 -- 5 -- 11 -- 13 -- 6 -- 12 -- 2 -- 3 -- 4 -- 7 -- 8 -- 9 -- 10
```
