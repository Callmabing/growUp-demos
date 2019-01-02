<template>
  <div id="note-detail">
    <h1>{{msg}} : {{ $route.params.noteId }}</h1>
    <div>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </div>
  </div>
</template>

<script>
import Auth from '@/apis/auth'

export default {
  name: 'Login',
  data () {
    return {
      msg: '笔记本详情页'
    }
  },
  created() {
    Auth.getInfo()
      .then(res => {
        if(!res.isLogin){
          this.$router.push({ path: '/login' })
        }
      })
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>

