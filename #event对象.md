##### #event对象

和普通浏览器一样，事件监听函数会被自动传入一个 `event` 对象，这个对象和普通的浏览器 `event` 对象所包含的方法和属性都基本一致。不同的是 React.js 中的 `event` 对象并不是浏览器提供的，而是它自己内部所构建的。React.js 将浏览器原生的 `event` 对象封装了一下，对外提供统一的 API 和属性，这样你就不用考虑不同浏览器的兼容性问题。这个 `event` 对象是符合 W3C 标准（ [W3C UI Events](https://www.w3.org/TR/DOM-Level-3-Events/) ）的，它具有类似于`event.stopPropagation`、`event.preventDefault` 这种常用的方法。