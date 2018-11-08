<template>
  <div class="hello">
    <li v-for="(item, index) in data"
        :key="index"
        @click="show(item, index)"
    >
        {{ index }}
        <span v-if="msg === index"> : {{ item }}</span>
        <!-- <span v-else>请点击上方条目查看详情</span>     -->
    </li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ["data", "person"], //此处接收父组件的值
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    show: function(value, index){
      this.$emit("childEvent",value)   //这里触发的是父组件提交的方法
      this.msg = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
