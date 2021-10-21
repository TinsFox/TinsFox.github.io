# 介绍

关于 CSS 的概念

<img src="https://pic.tinsfox.com/uPic/dc35c91eb2d64ca1aa829d2f070a2d6f~tplv-k3u1fbpfcp-zoom-1.image" alt="img" style="zoom:50%;" />

## @ 规则

1. **@charset**

   @charset 用户定义样式表使用的字符集。他必须是样式表中的第一个元素。如果有多个 @charset 被声明，只有第一个会被使用，而且不能在 HTML 元素或 HTML 页面的`<style>` 元素内使用

   对于字节编码，浏览器又一套识别顺序：

   - 文件开头的 Byte order mark 字符值，不过一般编辑器并不能看到文件头里的 BOM 值

   - HTTP 响应头里的 `content-type` 字段包含的 charset 所指定的值，比如:

     ```
     Content-Type: text/css; charset=utf-8
     ```

   - CSS 文件头定义的 @charset 规则置顶的编码

   - `<link>` 标签的 charset 属性（在 H5 中废除）

   - 默认是 UTF-8

2. **@import**

   @import 用于告诉 CSS 引擎引入一个外部样式表。

   link 和 @import 都能导入样式文件，它们的区别在哪里？

   - link 是 HTML 标签，除了等导入 CSS 外还能导入别的资源，比如图片、脚本、字体等，而@import 是 CSS 的语法，只能用来导入 CSS；
   - link 导入的样式会在页面加载时同时加载，而@import 导入的样式需要等待页面加载完成后再加载；
   - link 没有兼容性问题，@import 不兼容 IE5 以下；
   - link 可以通过操作 JS 操作 DOM 动态引入样式表改变样式，而@import 不可以

3. **@supports**

   @supports 用于查询特定的 CSS 是否生效，可以结合 not、and 和 or 操作符进行后续的操作。

   ```css
   /* 如果支持自定义属性，则把 body 颜色设置为变量 varName 指定的颜色 */
   @supports (--foo: green) {
     body {
       color: var(--varName);
     }
   }
   ```

## 层叠性

层叠样式表，这里的层叠怎么理解呢？其实它是 CSS 中的核心特性之一，用于合并来自多个源的属性值的算法。比如说针对某个 HTML 标签，有许多的 CSS 声明都能作用到的时候，那最后谁应该起作用呢？层叠性说的大概就是这个。

针对不同源的样式，将按照如下的顺序进行层叠，越往下优先级越高：

- 用户代理样式表中的声明(例如，浏览器的默认样式，在没有设置其他样式时使用)。
- ~~用户样式表中的常规声明(由用户设置的自定义样式。由于 Chrome 在很早的时候就放弃了用户样式表的功能，所以这里将不再考虑它的排序。)~~。
- 作者样式表中的常规声明(这些是我们 Web 开发人员设置的样式)。
- 作者样式表中的 !important 声明。
- ~~用户样式表中的 !important 声明 S~~。

理解层叠性的时候需要结合 CSS 选择器的优先级以及继承性来理解。比如针对同一个选择器，定义在后面的声明会覆盖前面的；作者定义的样式会比默认继承的样式优先级更高。

## 选择器

### 基础选择器

- 标签选择器 `h1`
- 类选择器 `.box`
- ID 选择器 `#box`
- 通配选择器 `*`

### 属性选择器

- `[attr]` : 指定属性的元素；
- `[attr=val]`: 属性等于指定值的元素；
- `[attr*=val]`: 属性包含指定值的元素；
- `[]`

## 高度坍塌

产生原因：当父元素没有设置高度时，他的高度是由他的内容撑开。一旦他的所有子元素脱离文档流，那么父元素的高度就会变为 0。

未脱离文档流情景

```html
<!DOCTYPE html>
<html lang="en">
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .parent {
          width: 200px;
          background-color: green;
        }
        .child {
          width: 100px;
          height: 100px;
          background-color: purple;
          /* float: left; */
        }
      </style>
    </head>
    <body>
      <div class="parent">
        <div class="child"></div>
      </div>
    </body>
  </html>
</html>
```

![image-20210518101840306](https://pic.tinsfox.com/uPic/image-20210518101840306.png)

​ 脱离文档流之后看不到子元素的内容

```html
<!DOCTYPE html>
<html lang="en">
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .parent {
          width: 200px;
          background-color: green;
        }
        .child {
          width: 100px;
          height: 100px;
          background-color: purple;
          float: left;
        }
      </style>
    </head>
    <body>
      <div class="parent">
        <div class="child"></div>
      </div>
    </body>
  </html>
</html>
```

![image-20210518101904624](https://pic.tinsfox.com/uPic/image-20210518101904624.png)

解决办法

```css
.parent::after {
  content: '';
  display: block;
  clear: both;
} //他的实质就是在最后父元素的最后添加一个块级小儿子，同时给他清除浮动
```

## 外边距的重合

两个 div 上下排列时，上面的 div 设置了 10px 的下外边距，下面的 div 设置了 20px 的上外边距，这时候 div1 与 div2 的垂直方向的边距就会重合在一起，垂直方向的距离会以最大的边距的值为准，所以此时的垂直距离为 20px 而不是 10+20=30px。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .d1 {
        width: 100px;
        height: 100px;
        background-color: green;
        margin-bottom: 10px;
      }
      .d2 {
        width: 100px;
        height: 100px;
        background-color: purple;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="d1"></div>
    <div class="d2"></div>
  </body>
</html>
```

![image-20210518103313060](https://pic.tinsfox.com/uPic/image-20210518103313060.png)

解决办法

1. 设置的时候尽可能单方面设计
2. 其中一个使用 padding 进行设置

# 外边距溢出

如果父盒子没有设置边距，并且子盒子的上边缘和父盒子的上边缘重合时，给外边距溢出提供了条件，这时候如果给子盒子设置上 10px 的上外边距，子盒子不会相对父盒子下移 10px，而是父盒子整体向下移动 10px。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .d1 {
        width: 100px;
        height: 100px;
        background-color: green;
      }
      .d2 {
        width: 100px;
        height: 100px;
        background-color: purple;
      }
      .d3 {
        width: 50px;
        height: 50px;
        background-color: blue;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="d1"></div>
    <div class="d2">
      <div class="d3"></div>
    </div>
  </body>
</html>
```

![image-20210518104230152](https://pic.tinsfox.com/uPic/image-20210518104230152.png)

解决办法

1. 给父元素加上边框，有弊端（增加了父元素的实际占地高度）

2. 给父元素加上内边距，有弊端（增加了父元素的实际占地高度）

3. 给父元素添加 overflow:hidden/auto，弊端（如果想要溢出可见就不行了）

4. 给父元素增加一个子元素

   ```html
   <div class="d2">
     <table></table>
     <!-- 这里多了页面结构也不太好 -->
     <div class="d3"></div>
   </div>
   ```

5. 使用 CSS3 伪类`::before` 给父元素添加内容

   ```css
   .d2::before{
     content:'',
     display:table
   }//原理是方法4
   ```
