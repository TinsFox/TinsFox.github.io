# position

> position 属性用来指定一个元素在网页上的位置，一共有五种定位方式

- static
- relative
- fixed
- absoule
- sticky

### static

> static 是 position 的默认值

浏览器会根据源码的顺序，决定每个元素的位置，称之为“正常的页面流”（normal flow），每个块级元素占有自己的区块（block），元素之间会不重叠，这个位置就是元素的默认位置。

static 定位的元素位置由浏览器自主决定，`top` `bottom` `left` `right` 属性无效

 <img src="https://pic.tinsfox.com/uPic/image-20210826135523581.png" alt="image-20210826135523581" style="zoom:50%;text-align: right" />

### relative、absolute、fixed

> 这三个属性值有一个共同点，都是相对于某个几点定位，不同之处仅在于几点的不同。这三种定位都不会对其他元素的位置产生影响，因此元素之间可能产生重叠。

#### relative

> relative 表示相对于自己默认（原来）位置（即 `static` 时的位置进行偏移，即定位基点是元素的默认位置 ）
>
> 必须搭配`top` `bottom` `right` `left` 使用，制定偏移的方向和距离

 <img src="https://pic.tinsfox.com/uPic/image-20210826140348544.png" alt="image-20210826140348544" style="zoom:50%;" />

 <img src="https://pic.tinsfox.com/uPic/image-20210826140415670.png" alt="image-20210826140415670" style="zoom:50%;" />

 <img src="https://pic.tinsfox.com/uPic/image-20210826140512726.png" alt="image-20210826140512726" style="zoom:50%;" />

#### absolute

> `absoult` 表示相对于上级元素，一般是父元素进行偏移，即定位几点是父元素
>
> 有一个重要的条件显示，定位几点不能是 `static` 定位，否者定位基点就会变成整个网页的根元素。
>
> 必须搭配`top` `bottom` `right` `left` 使用，制定偏移的方向和距离
>
> 相对于最近的有定位的父级定位，如果父级没有则相对于文档定位

 <img src="https://pic.tinsfox.com/uPic/image-20210826141115895.png" alt="image-20210826141115895" style="zoom:50%;" />

```html
<div id="father">
  <div id="son"></div>
</div>
```

```css
#father {
  positon: relative;
}
#son {
  position: absolute;
  top: 20px;
}
```

> 上面代码中，父元素是`relative`定位，子元素是`absolute`定位，所以子元素的定位基点是父元素，相对于父元素的顶部向下偏移`20px`。如果父元素是`static`定位，上例的子元素就是距离网页的顶部向下偏移`20px`。
>
> 注意，`absolute`定位的元素会被"正常页面流"忽略，即在"正常页面流"中，该元素所占空间为零，周边元素不受影响。

#### fixed

> `fixed` 表示相对于视口（viewport，浏览器窗口）进行偏移，即定位几点是浏览器窗口。这会导致元素的位置不随页面滚动而滚动，好像固定在网页上一样
>
> 如果搭配`top`、`bottom`、`left`、`right`这四个属性一起使用，表示元素的初始位置是基于视口计算的，否则初始位置就是元素的默认位置。

 <img src="https://pic.tinsfox.com/uPic/image-20210826141605962.png" alt="image-20210826141605962" style="zoom:50%;" />

```css
div {
  position: fixed;
  top: 0;
}
/* div元素始终在视口顶部，不随网页滚动而变化。 */
```

#### sticky

> sticky 跟前面四个属性值不一样，它会产生动态效果，很像 relative 和 fixed 的结合，一些时候是 relative 定位（定位的基点是自身默认位置），另一些时候自动变成 fixed 定位（定位基点是视口）
>
> IE 不支持，afari 浏览器需要加上浏览器前缀 `-webkit- `

sticky 生效的前提是必须搭配 top bottom left right 这四个属性中的一个或多个使用，不能省略否则等同于 relative 定位，不产生动态固定的效果，原因是，这四个属性用来定义偏移的距离，浏览器把它当作 sticky 的生效门槛。

具体规则是，当页面滚动，父元素开始脱离视口时（即部分不可见），只要 sticky 元素的距离达到生效的门槛，relative 定位自动切换为 fixed 定位，等到父元素完全脱离视口时（即完全不可见），fixed 定位自动切换回 relative 定位

```css
#toolbar {
  position: -webkit-sticky; /* safari 浏览器 */
  position: sticky; /* 其他浏览器 */
  top: 20px;
}
```
