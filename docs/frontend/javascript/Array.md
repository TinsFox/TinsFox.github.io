---
title: 数组
order: 2
---

## 数组

一、创建数组

1. 使用数组字面量表示方法

```javascript
var array1 = []; 
var array2 = [20];
var array3 = ["Tony","lucy","lily"];
```

2. 使用 Array 构造函数

#### 无参构造

```javascript
var array4 = new Array();
```

#### 有参构造

### 手写reduce

```js
//语法 array.reduce(function(prev, currentValue, currentIndex, arr), initialValue)
Array.prototype.MyReduce = function(fn, initialValue){
  //浅拷贝数组  
  var arr = Array.prototype.slice.call(this);
  //注意: reduce() 对于空数组是不会执行回调函数的。
  if(!arr.length){
      return
  }
  var res;//res(是上面的prev) 
  //默认初始值  
  res = initialValue ? initialValue : arr[0];
  //遍历数组的每一个值  
  for(var i = 0; i < arr.length; i++) {
    //每一个值都会在该方法中被（加工处理），  
    res = fn.call(null, res, arr[i], i, this);
  }
  //最后的返回值
  return res
}
```

## 类数组

```js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```



## 变异数组API