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
        txTab:0,
        txTab1:2,
        txTab2:4
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
        "txTab":function (state,txTab) {
            state.txTab = txTab
        },
        "txTab1":function (state,txTab1) {
            state.txTab1 = txTab1
        },
        "txTab2":function (state,txTab2) {
            state.txTab2 = txTab2
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
        },
        "txTab": function(state, txTab) {
            // console.log('获取', state.listheight)
            store.commit("txTab", txTab)
        },
        "txTab1": function(state, txTab1) {
            // console.log('获取', state.listheight)
            store.commit("txTab1", txTab1)
        }
    }
})
export default store;
