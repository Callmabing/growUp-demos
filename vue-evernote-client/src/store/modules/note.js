import Note from '@/apis/notes'
import { Message } from 'element-ui'

const state = {
  notes: [],
  curNote: {}
}

const getters = {
  notes: state => state.notes
}

const mutations = {
  setNote(state, payload) {
    state.notes = payload.notes
  },
  addNote(state, payload) {
    state.notes.unshift(payload.note)
  },
  updateNote(state, payload) {
    let note = state.notes.find(note => note.id === payload.noteId) || {}
    note.title = payload.title
    note.content = payload.content
  },
  deleteNote(state, payload) {
    state.notes = state.notes.filter(note => note.id !== payload.noteId)
  }
}

const actions = {
  getNotes({ commit }, payload) {
    Note.getAll({ notebookId: payload.notebookId })
      .then(res => {
        commit('setNote', { notes: res.data })
      })
  },
  addNote({ commit }, payload) {
    Note.addNote({ notebookId: payload.notebookId, title: payload.title, content: payload.content })
      .then(res => {
        commit('addNote', { note: res.data })
        Message.success(res.msg)
      })
  },
  updateNote({ commit }, payload) {
    Note.updateNote({ noteId: payload.noteId, title: payload.title, content: payload.content })
      .then(res => {
        commit('updateNote', { notes: res.data })
        Message.success(res.msg)
      })
  },
  deleteNote({ commit }, payload) {
    Notebook.deleteNotebook({ noteId: payload.noteId })
      .then(res => {
        commit('deleteNote', { notes: res.data })
        Message.success(res.msg)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}