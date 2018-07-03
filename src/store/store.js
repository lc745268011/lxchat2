import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listheight:'',
        currentTab:'xiaoxi',
        skintype:'red'
    },
    mutations: {
        "setId": function(state, listheight) {
            state.listheight = listheight
            // console.log('保存', state.listheight)
        },
        "currentTab": function(state, currentTab) {
            state.currentTab = currentTab
            // console.log('保存', state.listheight)
        },
        "skintype": function(state, skintype) {
            state.skintype = skintype
            // console.log('保存', state.listheight)
        }
    },
    actions: {
        "setId": function(state, listheight) {
            // console.log('获取', state.listheight)
            store.commit("setId", listheight)
        },
        "currentTab": function(state, currentTab) {
            // console.log('获取', state.listheight)
            store.commit("currentTab", currentTab)
        },
        "skintype": function(state, skintype) {
            // console.log('获取', state.listheight)
            store.commit("skintype", skintype)
        }
    }
})
export default store;
