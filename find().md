find() 

该方法返回通过测试的第一个元素

```js
demo1:
var ages = [3, 10, 6];

function checkAdult(age) {
    return age >= 5;
}
function myFunction() {
    document.getElementById('demo').innerHTML = ages.find(checkAdult)
}
// 10

demo2:
this.notebooks.find(notebook => notebook.id == this.$route.query.notebookId)

```

即： find() 中调用一个返回函数，通过该函数进行数据筛选，返回满足该函数的第一个数据。