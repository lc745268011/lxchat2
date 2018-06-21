import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listheight:''
    },
    mutations: {
        "setId": function(state, listheight) {
            state.listheight = listheight
            // console.log('保存', state.listheight)
        }
    },
    actions: {
        "setId": function(state, listheight) {
            // console.log('获取', state.listheight)
            store.commit("setId", listheight)
        }
    }
})
export default store;
