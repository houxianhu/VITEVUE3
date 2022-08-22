const state = {
    theme: "dark"
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  } // 同步

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
    },
} // 可异步

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}