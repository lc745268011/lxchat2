import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listheight:'',
        currentTab:'message',
        skintype:'#fb6161',
        //互动页面右侧聊天框
        reciveavatar:'',
        replyusername:'',
    },
    mutations: {
        "setId": function(state, listheight) {
            state.listheight = listheight
        },
        "currentTab": function(state, currentTab) {
            state.currentTab = currentTab
        },
        "skintype": function(state, skintype) {
            state.skintype = skintype
        },
        "reciveavatar":function (state,reciveavatar) {
            state.reciveavatar = reciveavatar
        },
        "replyusername":function (state,replyusername) {
            state.replyusername = replyusername
        },
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
        },
        "reciveavatar": function(state, reciveavatar) {
            // console.log('获取', state.listheight)
            store.commit("reciveavatar", reciveavatar)
        },
        "replyusername": function(state, replyusername) {
            // console.log('获取', state.listheight)
            store.commit("replyusername", replyusername)
        }
    }
})
export default store;
