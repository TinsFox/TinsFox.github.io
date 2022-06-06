# String 字符串

> 字符串常用方法

## 操作方法

- concat: 用于将一个或者多个字符串拼接返回新字符串

  ```javascript
  let stringValue = 'hello ';
  let result = stringValue.concat('world');
  console.log(result); // "hello world"
  console.log(stringValue); // "hello"
  ```

- slice(start, end) 返回字符串内 start,end 之内的字符串，end 默认为最后一位

  > 删除前面 start 个，end 后面的，返回中间的

- subStr(start, end) 返回字符串 start 之后的字符串，不包含 start

  > end 是要返回 start 后面的几个字符串

- subString： 返回 start 之后的字符串

  ```javascript
  let stringValue = 'hello world';
  console.log(stringValue.slice(3)); // "lo world"  删除前面3个
  console.log(stringValue.substring(3)); // "lo world"
  console.log(stringValue.substr(3)); // "lo world"
  console.log(stringValue.slice(3, 7)); // "lo w"
  console.log(stringValue.substring(3, 7)); // "lo w"
  console.log(stringValue.substr(3, 7)); // "lo worl"
  ```

- trim

- trimleft

- trimright

- repeat

  ```javascript
  let stringValue = 'na ';
  let copyResult = stringValue.repeat(2); // na na
  ```

-
