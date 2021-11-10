---
title: 算法
---

# 算法

## 1. 用递归算法实现，数组长度为 5 且元素的随机数在 2-32 间不重复的值

**知识点**

1. 递归
2. 随机数
3. 重复值跳过

**解法一**

```js
var arr = new Array(5);
var num = randomNumber();
var i = 0;
randomArr(arr, num);

function randomArr(arr, num) {
  if (arr.indexOf(num) < 0) {
    arr[i] = num;
    i++;
  } else {
    num = randomNumber();
  }
  if (i >= arr.length) {
    console.log(arr);
    return;
  } else {
    randomArr(arr, num);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 31 + 2);
}
```

**解法二**

```js
var arr = new Array(5);
var randomNum = 2 + Math.floor(Math.random() * 30);
var i = 0;

function ArrPushItem(arr, randomNum) {
  if (arr.indexOf(randomNum) > -1) {
    randomNum = 2 + Math.floor(Math.random() * 30);
  } else {
    arr[i] = randomNum;
    i++;
    randomNum = 2 + Math.floor(Math.random() * 30);
  }
  if (i == arr.length) {
    return arr;
  } else {
    ArrPushItem(arr, randomNum);
  }
}
ArrPushItem(arr, randomNum);
console.log(arr);
```

```javascript
function sayHello() {
  console.log('hello');
}
```
