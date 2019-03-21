import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from './modules/loginStore'
import homeStore from './modules/homeStore'

Vue.use(Vuex)

const state = {

}


const getters = {
  
}

const mutations = {

}


const actions = {

}


export default new Vuex.Store({
	modules:{
		loginStore,
		homeStore

	},
	state,
	getters,
  mutations,
  actions,
})
