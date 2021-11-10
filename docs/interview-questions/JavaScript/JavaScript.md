---
group:
  order: 2
---

# JavaScript 面试题

## 请写出 foo 的值

```javascript
var foo = 10 + '20';
```

## 清除字符串空格

**解法一**

```js
var trim = function (str) {
  return str.replace(/\s*/g, '');
};
str.replace(/\s*/g, ''); //去除字符串内所有的空格
str.replace(/^\s*|\s*$/g, ''); //去除字符串内两头的空格
str.replace(/^\s*/, ''); //去除字符串内左侧的空格
str.replace(/(\s*$)/g, ''); //去除字符串内右侧的空格
```

**解法二**

```js
var str = ' 1 2 3445 6    ';
console.log(str.split(' ').join('')
```
