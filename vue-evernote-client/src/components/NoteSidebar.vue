<template>
  <div class="note-sidebar">
    <div class="btn add-note" @click="addNote">添加笔记</div>
    <el-dropdown class="notebook-title" @command="handleCommand" placement="bottom">
      <span class="el-dropdown-link">
        {{ curBook.title }} <i class="iconfont icon-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks" :key="notebook.id" :command="notebook.id">
          {{notebook.title}}
        </el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes" :key="note.id">
        <router-link :to="`/note?noteId=${note.id}&notebookId=${curBook.id}`">
          <span class="date">{{note.updatedAtFriendly}}</span>
          <span class="title">{{note.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Notebooks from '@/apis/notebooks'
import Notes from '@/apis/notes'
import Bus from '@/helpers/bus'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'


export default {
  created() {
    Notebooks.getAll()
      .then((res) => {
        this.notebooks = res.data
        this.curBook = this.notebooks.find(notebook => notebook.id == this.$route.query.notebookId) || this.notebooks[0] || {}
        return Notes.getAll({ notebookId: this.curBook.id })
      }).then(res => {
        this.notes = res.data
        this.$emit('update:notes', this.notes)
        Bus.$emit('update:notes', this.notes)
      })
  },
  props: ['curNote'],
  data() {
    return {
      notebooks: [],
      notes: [],
      curBook: {}
    }
  },
  computed: {
    ...mapGetters([
      ' '
    ])
  },
  methods: {
    handleCommand(cmd) {
      if (cmd === 'trash') {
        return this.$router.push({ path: '/trash' })
      }
      this.curBook = this.notebooks.find(notebook => notebook.id == cmd)
      Notes.getAll({ notebookId: cmd })
        .then(res => {
          this.notes = res.data
          this.$emit('update:notes', this.notes)
        })
    },
    addNote() {
      Notes.addNote({ notebookId: this.curBook.id })
        .then(res => {
          this.notes.unshift(res.data)
        })
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/note-sidebar.less);

</style>
