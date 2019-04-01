import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NoteBookList from '@/components/NoteBookList'
import NoteDetail from '@/components/NoteDetail'
import TashDetail from '@/components/TashDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notebooks',
      name: 'Notebooks',
      component: NoteBookList
    },
    {
      path: '/note',
      name: 'NoteDetail',
      component: NoteDetail
    },
    {
      path: '/trash',
      name: 'TashDetail',
      component: TashDetail
    }
  ]
})
