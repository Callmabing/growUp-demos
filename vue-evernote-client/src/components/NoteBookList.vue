<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.stop.="onCreate"><i class="iconfont icon-plus"></i> 新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks.length }})</h3>
        <div class="book-list">
          <router-link  v-for="notebook in notebooks" :to="`/note?notebookId=${notebook.id}`" :key="notebook.id" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span> {{ notebook.title }} <span>{{ notebook.noteCounts }}</span><span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete(notebook)">删除</span>
              <span class="date">{{notebook.createdAtFriendly}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
import Notebooks from '@/apis/notebooks'
import friendlyDate from '@/helpers/util.js'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'NoteBookList',
  data () {
    return {
    }
  },
  created() {
    Auth.getInfo()
      .then(res => {
        if(!res.isLogin){
          this.$router.push({ path: '/login' })
        }
      })
    this.$store.dispatch('getNotebooks')
  },
  computed: {
    ...mapGetters(['notebooks'])
  },
  methods: {
    ...mapActions([
      'getNotebooks',
      'addNotebook',
      'updateNotebook',
      'deleteNotebook'
    ]),
    onCreate() {
        this.$prompt('请输入新笔记本标题', '创建笔记本', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,30}$/,
          inputErrorMessage: '标题不能为空， 且不超过30个字符'
        }).then(({ value }) => {
          this.addNotebook({ title: value })
        })
    },
    onEdit(notebook) {
      let title = ''
      this.$prompt('请输入新笔记本标题', '修改笔记本标题', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,30}$/,
          inputValue: notebook.title,
          inputErrorMessage: '标题不能为空， 且不超过30个字符'
        }).then(({ value }) => {
          title = value
          this.updateNotebook({ notebookId: notebook.id, title: value })
        })
    },
    onDelete(notebook) {
      this.$confirm('此操作将删除该笔记本, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteNotebook({ notebookId: notebook.id })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/notebook-list.less');
</style>
