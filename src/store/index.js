import Vue from 'vue'
import Vuex from 'vuex'
import { postsStore } from './posts.store.js';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: { postsStore },
  plugins: [createPersistedState(postsStore)],
})
