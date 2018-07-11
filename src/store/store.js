import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listheight:'',
        currentTab:'message',
        skintype:'#fb6161',
        //互动页面右侧聊天框
        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
        replyusername:'张三',
        replyposition:'',
        txTab:0,
        txTab1:2,
        txTab2:4,
        ucard:false,
        clickId:0,
        conversion:[
            {
                "recivename":"张三",
                "sendname":"我是用户",
                "sendtime":"09:00",
                "lastmsg":"青岛河北商会-秘书长",
                "sendavatar":"",
                "reciveavatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg",
                "id":0
            },
            {
                "recivename":"李四",
                "sendname":"我是用户",
                "sendtime":"09:00",
                "lastmsg":"联信科技-研发总监",
                "sendavatar":"",
                "reciveavatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg",
                "id":1
            }
        ]
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
        "replyposition":function (state,replyposition) {
            state.replyposition = replyposition
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
        "ucard":function (state,ucard) {
            state.ucard = ucard
        },
        "clickId":function (state,clickId) {
            state.clickId = clickId
        },
        "conversion":function (state,conversion) {
            state.conversion = conversion
            console.log(state.conversion)
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
            store.commit("replyusername", replyusername)
        },
        "replyposition": function(state, replyposition) {
            store.commit("replyposition", replyposition)
        },
        "txTab": function(state, txTab) {
            // console.log('获取', state.listheight)
            store.commit("txTab", txTab)
        },
        "txTab1": function(state, txTab1) {
            // console.log('获取', state.listheight)
            store.commit("txTab1", txTab1)
        },
        "txTab2": function(state, txTab2) {
            // console.log('获取', state.listheight)
            store.commit("txTab2", txTab2)
        },
        "ucard": function(state, ucard) {
            // console.log('获取', state.listheight)
            store.commit("ucard", ucard)
        },
        "clickId": function(state, clickId) {
            store.commit("clickId", clickId)
        },
        "conversion": function(state, conversion) {
            store.commit("conversion", conversion)
        }
    }
})
export default store;
