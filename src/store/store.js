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
        ],
        conversion1:[
            {
                recivename:'记事本',
                sendname:'我是用户',
                sendtime:'09:00',
                lastmsg:'我是最后一条显示数据',
                sendavatar:'',
                reciveavatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531388445127&di=b92e9354558a01fc4e5386cdbbaf3de5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a0205818056ea84a0d304fb02a48.jpg',
                id:0
            },
            {
                recivename:'项目计划',
                sendname:'我是用户',
                sendtime:'09:00',
                lastmsg:'我是最后一条显示数据',
                sendavatar:'',
                reciveavatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531388445126&di=7e78479a5f5a7cd9b736823f869aa583&imgtype=0&src=http%3A%2F%2Fcdns2.freepik.com%2Ffree-photo%2Flaptop-computer-with-loud-speaker_318-39515.jpg',
                id:1
            }
        ],
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
        },
        "conversion1":function (state,conversion1) {
            state.conversion1 = conversion1
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
        },
        "conversion1": function(state, conversion1) {
            store.commit("conversion1", conversion1)
        }
    }
})
export default store;
