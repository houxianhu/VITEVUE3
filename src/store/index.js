import { createStore } from "vuex";
import getters from './getters'
import app from './modules/app'
import setting from './modules/setting'

const store = new createStore({
    modules: {
        app,
        setting,
    },
    getters,
})

export default store;