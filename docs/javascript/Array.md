# 数组

一、创建数组

1.  使用数组字面量表示方法

```javascript
var array1 = [];
var array2 = [20];
var array3 = ['Tony', 'lucy', 'lily'];
```

2.  使用 Array 构造函数

#### 无参构造

```javascript
var array4 = new Array();
var array5 = new Array(5); // 指定长度
```

#### 有参构造

### 手写 reduce

```js
//语法 array.reduce(function(prev, currentValue, currentIndex, arr), initialValue)
Array.prototype.MyReduce = function (fn, initialValue) {
  //浅拷贝数组
  var arr = Array.prototype.slice.call(this);
  //注意: reduce() 对于空数组是不会执行回调函数的。
  if (!arr.length) {
    return;
  }
  var res; //res(是上面的prev)
  //默认初始值
  res = initialValue ? initialValue : arr[0];
  //遍历数组的每一个值
  for (var i = 0; i < arr.length; i++) {
    //每一个值都会在该方法中被（加工处理），
    res = fn.call(null, res, arr[i], i, this);
  }
  //最后的返回值
  return res;
};
```

## 类数组

```js
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

## 变异数组 API

> 修改原有数组数据

### 01. `push()`

```js
/**
 * @param: value
 * @return: Array.length
 * @description: 将value添加到数组的最后
 */
let a = [1, 2, 3, 4, 5, 6];
let result = a.push(7);
console.log(a); // [1,2,3,4,5,6,7]
console.log(result); // 7
```

### 02. `unshift()`

```js
/**
 * @param: value
 * @return: Array.length
 * @description: 添加元素到数组的开头
 */

let a = [1, 2, 3, 4, 5, 6];
a.unshift(0);
a; // [0,1,2,3,4,5,6]
a.length; //7
```

### 03. `pop()`

```js
/**
 * @param: Null
 * @return: Array[-1]，被删除元素
 * @description: 删除数组中的最后一个元素
 */
let a = [1, 2, 3, 4, 5, 6];
a.pop(); // 6
a; // [1, 2, 3, 4, 5]
```

### 04. `shift()`

```js
/**
 * @param: Null
 * @return: Array[0]，被删除元素
 * @description: 删除数组第一个原始
 */
let a = [5];
let result = a.shift();
console.log(result); // 5
console.log(a); // []
```

### 05. `reverse()`

```js
/**
 * @param: Null
 * @return: new Array
 * @description: 反转数组
 */
let a = [1, 2, , 3, , 4, 5];
let result = a.reverse();
console.log(result); //  [5, 4 ,3 ,2 ,1]
console.log(a); //  [5, 4 ,3 ,2 ,1]
```

### 06. `splice(index, count, value1, value2)`

> 从索引位 index 处删除 count 个元素，插入 value1, value2 等元素，返回被删除的元素组成的新数组(改变原数组)

```js
// Base
let a = [1, 2, 3, 4, 5];
let result = a.splice(1, 2, 0);
console.log(result); // [2, 3]
console.log(a); // [1, 0, 4, 5]

// More
a = [1, 2, 3, 4, 5];
console.log(a.splice(-2)); // [4, 5]  当参数为单个且小于0时，将截取从倒数|index|位到数组的末尾
console.log(a); // [1, 2, 3]

a = [1, 2, 3, 4, 5];
console.log(a.splice(-1)); // [5]  当参数为单个且小于0时，将截取从倒数|index|位到数组的末尾
console.log(a); // [1, 2, 3, 4]

a = [1, 2, 3, 4, 5];
console.log(a.splice(0)); // [1, 2, 3, 4, 5] 当参数为单个且不小于0时，将截取从index位到数组的末尾
console.log(a); // []

a = [1, 2, 3, 4, 5];
console.log(a.splice(1)); // [2, 3, 4, 5]  当参数为单个且不小于0时，将截取从index位到数组的末尾
console.log(a); // [1]

a = [1, 2, 3, 4, 5];
console.log(a.splice(-1, 2)); // [5]  从倒数第1位开始截取两个元素
console.log(a); // [1, 2, 3, 4]

a = [1, 2, 3, 4, 5];
console.log(a.splice(0, 2, 'a', 'b', 'c')); // [1, 2]
console.log(a); // ['a', 'b', 'c', 3, 4, 5]  截取后将value值依次填充到截取位置处，旧值被向后顺移
```

### 07. `sort()`

> 对数组元素进行排序

```js
// Base
let a = [31, 22, 27, 1, 9];
let result = a.sort();
console.log(result); // [1, 22, 27, 31, 9]
console.log(a); // [1, 22, 27, 31, 9]

// More
a = [
  'c',
  'ac',
  'ab',
  'A1',
  '1c',
  13,
  12,
  '13',
  '12',
  '3',
  '2',
  '1b',
  '1a',
  1,
  'aa',
  'a',
  3,
  'b',
  2,
];
a.sort();
console.log(a); // [1, 12, "12", 13, "13", "1a", "1b", "1c", "2", 2, "3", 3, "A1", "a", "aa", "ab", "ac", "b", "c"]
// 可以看出sort排序是根据每个字符对应的ASCII码值进行排序的，而非值的大小。
// 先比较第一位的ASCII码值，如果第一位的ASCII码值相同，则开始比较第二位的ASCII码值，以此类推
// ASCII码表(http://tool.oschina.net/commons?type=4 + K)
a = [31, 22, 27, 1, 9];
a.sort((a, b) => {
  return a - b;
});
console.log(a); // [1, 9, 22, 27, 31]  按数值大小正序排列

a = [31, 22, 27, 1, 9];
a.sort((a, b) => {
  return b - a;
});
console.log(a); // [31, 27, 22, 9, 1]  按数值大小倒序排列
```

## 非变异数组 API

### 01. `json()`

```js
let a = [1, 2, 3, 4, 5];
let result = a.join();
console.log(result); // 1,2,3,4,5
result = a.join('');
console.log(result); // 12345
result = a.join(',');
console.log(result); // 1,2,3,4,5
result = a.join('&');
console.log(result); // 1&2&3&4&5
```

### 02. `slice(start, end)`

```js
/**
 * @param: start
 * @param: end
 * @return: 子数组
 * @description: 获取字数组，包含原数组start到end的值（不包含end，也就是 arr[start]~arr[end-1]）
 */
let a = [1, 2, 3, 4, 5];
let result = a.slice(2, 4);
console.log(result); // [3, 4]
console.log(a); // [1, 2, 3, 4, 5]
```

### 03. `toString()`

> 将数组中的元素用逗号拼接成字符串，返回拼接后的字符串

```javascript
// Base
let a = [1, 2, 3, 4, 5];
let result = a.toString();
console.log(result); // 1,2,3,4,5
console.log(a); // [1, 2, 3, 4, 5]

// 除了toString()方法之外，String()方法也可以将数组转换成字符串
result = String(a);
console.log(result); // 1,2,3,4,5
```

### 04. `indexOf()`

> 从索引为 0 开始，检查数组中是否包含有 value，有则返回匹配到的第一个索引，没有则返回-1

```js
// Base
let a = [1, 2, 3, 4, 5];
let result = a.indexOf(2);
console.log(result); // 1
console.log(a); // [1, 2, 3, 4, 5]

result = a.indexOf(6);
console.log(result); // -1
console.log(a); // [1, 2, 3, 4, 5]
```

### 05. `lastIndexOf()`

> 从最后的索引开始，检查数组找那个是否包含 value，有则返回匹配到的第一个索引，没有返回-1

```js
// Base
let a = [1, 2, 3, 2, 5];
let result = a.lastIndexOf(2);
console.log(result); // 3
console.log(a); // [1, 2, 3, 4, 5]

result = a.lastIndexOf(6);
console.log(result); // -1
console.log(a); // [1, 2, 3, 4, 5]
```

### 06. `concat()`

> 将数组和(或)值连接成新数组，返回新数组

```js
// Base
let a = [1, 2],
  b = [3, 4],
  c = 5;
let result = a.concat(b, c);
console.log(result); // [1, 2, 3, 4, 5]
console.log(a); // [1, 2]

// More
b = [3, [4]];
result = a.concat(b, c);
console.log(result); // [1, 2, 3, [4], 5]  concat对于嵌套数组无法拉平
console.log(a); // [1, 2]
```

### 07. `forEach()`

> 对数组进行遍历循环，对数组中每一项运行给定函数，参数都是 function 类型，默认有传参，参数分别为：遍历数组内容、对应的数组索引、数组本身。没有返回值

```js
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, index, a) {
  console.log(item + '|' + index + '|' + (a === true));
});
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
```

### 08. `map(key, value)`

> 指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.map(function (item, index, a) {
  return item * item;
});
console.log(arr1); // [1, 4, 9, 16, 25]
```

### 09. `filter()`

> “过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr1 = arr.filter(function (item, index, a) {
  return index % 3 === 0 || item >= 8;
});
console.log(arr1); // [1, 4, 7, 8, 9, 10]
```

### 10. `every()`

> 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.every(function (item, index, a) {
  return item < 10;
});
console.log(arr1); // true
var arr2 = arr.every(function (item, index, a) {
  return item < 3;
});
console.log(arr2); // false
```

### 11. `some()`

> 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true

```js
var arr = [1, 2, 3, 4, 5];
var arr1 = arr.some(function (item, index, a) {
  return item < 3;
});
console.log(arr1); // true
var arr2 = arr.some(function (item, index, a) {
  return item < 1;
});
console.log(arr2); // false
```

### 12. `reduce()`

> 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

- array.reduce(function(previousValue, currentValue, currentIndex, arr), initialValue)

  如果 initialValue 省略，则 previousValue 和 currentValue 分别为数组中的第一项元素和第二项元素；如果 initialValue 存在，则 previousValue 为 initialValue，而 currentValue 为数组中的第一项

- reduce() 对于空数组是不会执行回调函数的

```js
var arr = [1, 2, 3, 4, 5]

var result1 = arr.reduce((previousValue, currentValue, index, arr) => {
        return previousValue + currentValue
    }，
    10)

console.log('result1:', result1) // 25

var result2 = arr.reduce((previousValue, currentValue, index, arr) => {
    return previousValue + currentValue
})
console.log('result2:', result2) // 15
```
