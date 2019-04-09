HTML+CSS



空格/回车： 代表文本分割符  所以在html中无论你敲多少个空格 始终展示效果只有一个

`asdasdsadsadasdasdadasd`:  这样的英文输入 是不会自动换行的 因为浏览器觉得这是一个单词

`萨达萨达萨达撒旦`:  这样的中文输入是可以触发换行的 因为一个汉字就是一个独立的单位

`&nbsp;`代表空格  `&lt`小于 `<`    `&gt`大于`>`



`ol` 有个`type`属性 有五个值	`1/a/A/i/I`分别代表着不同的排序

`ol`的`reversed="reversed"`会倒着（仅仅是序号倒）排序 `start="2"`即从第2个开始排



`ul`有个`type`属性 有三个值 `disc 实心圆 默认值`  `circle 空心圆`  `square实心方块` 



`img`的`alt(图片占位符)`属性 最好加上 `title`图片提示符



`a`标签的`href="tel:13836014778"`这样写就可以调起电话界面

`<a href="sms:18688888888">发短信</a> ` 

`a`标签中`href="javascript: while(1){alert('opps!')}"`其中 `javascript`后面就可以一些功能性的代码实现，这种用法叫做协议限定符。



`<img src="" />`多个排列的时候 中间会产生缝隙 这就好比`sad ASA`之间的缝隙 这种缝隙都是带有`inline`的属性产生的



开发过程中可以先通看页面元素 然后先写公共 css 部分

`body`默认的margin是`8px` 



在开发过程中常常遇到这样一个问题 一个大的div里面包含一个小的div 在竖直方向上 大的div和小的div的margin 会以最大的那个为主 

解决这种问题的手段可以使用`BFC` : 常见的触发bfc有以下几种方式：

```css
position: absolute;
display: inline-block;
float: left/right;
overflow: hidden;
```

当元素设置成`position：absolute;float`时 系统内部已经把元素转换成`inline-block`



浮动

浮动元素产生了浮动流，块级元素看不到他们 产生了bfc的元素和文本类属性（inline）的元素以及文本都能看到浮动元素



:: 伪元素

天生与html标签共同存在的  `<span> ::before  ::after</span>`一般来说通过`css`去定义伪元素的样式， 伪元素默认是行内元素 通常可以利用伪元素来清除浮动

```css
span::after {
    content: "";
    clear: both;
    display: block;
}
```



单行文字溢出显示...

```css
三件套
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```



行级元素只能嵌套行级元素 块级元素可以嵌套任何元素 

但是 p标签不能嵌套div       a标签不能嵌套a标签

