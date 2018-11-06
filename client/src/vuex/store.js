import Vue from 'vue'
import Vuex from 'vuex'
import challenges from './modules/challenges'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		challenges,
	},
	strict: debug,
})