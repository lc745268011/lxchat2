<template>
    <div id="aside">{{this.$refs.show}}
        <div id="userlist" :style="{'height':listheight+'px'}" :class="[this.$store.state.show?'show':'noshow']" v-show="currentTab == 'message'">
            <div class="messagetab">
                <ul>
                    <li :class="{'active':txTab1===2}" @click="txTablist1(2)" :style="{'border-bottom-color':txTab1===2 ? this.$store.state.skintype:''}">常用</li>
                    <li :class="{'active':txTab1===3}" @click="txTablist1(3)" :style="{'border-bottom-color':txTab1===3 ? this.$store.state.skintype:''}">更多</li>
                </ul>
            </div>
            <ul class="conversationlist" v-show="txTab1 == 2">
                <li :class="index==clickId?'active':''" v-for="(item,index) in conversion2" @click="openconversion(index)">
                    <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                    <div class="fl">
                        <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                        <div class="messageInfo"><span style="color:red">[未读]</span>{{item.lastmsg}}</div>
                        <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion1(index)">&#xe776;</i>
                    </div>
                </li>
            </ul>
            <div v-show="txTab1 == 3">
                <tree></tree>
                <div class="addgn">
                    <ul>
                        <li>+新建对话</li>
                        <li>+创建群组</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="userlist" :style="{'height':listheight+'px'}" :class="[this.$store.state.show?'show':'noshow']"  v-show="currentTab == 'tongxunlu'">
            <div class="messagetab">
                <ul>
                    <li :class="{'active':txTab===0}" @click="txTablist(0)" :style="{'border-bottom-color':txTab===0 ? this.$store.state.skintype:''}">常用</li>
                    <li :class="{'active':txTab===1}" @click="txTablist(1)" :style="{'border-bottom-color':txTab===1 ? this.$store.state.skintype:''}">更多</li>
                </ul>
            </div>
            <div v-show="txTab == 0">
                <ul class="conversationlist">
                    <li :class="index==clickId?'active':''" v-for="(item,index) in this.conversionabc" @click="opencard(index)">
                        <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                        <div class="fl">
                            <div class="replyusername">{{item.recivename}}</div>
                            <div class="messageInfo">
                               {{item.lastmsg}}</div>
                            <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion(index)">&#xe776;</i>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="txTab == 1">
                <treetx></treetx>
                <div class="addgn">
                    <ul>
                        <li>+添加好友</li>
                        <li>+创建组织</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="userlist" :style="{'height':listheight+'px'}" :class="[this.$store.state.show?'show':'noshow']"  v-show="currentTab == 'dapp'">
            <div class="messagetab">
                <ul>
                    <li :class="{'active':txTab2===4}" @click="txTablist2(4)" :style="{'border-bottom-color':txTab2===4 ? this.$store.state.skintype:''}">常用</li>
                    <li :class="{'active':txTab2===5}" @click="txTablist2(5)" :style="{'border-bottom-color':txTab2===5 ? this.$store.state.skintype:''}">更多</li>
                </ul>
            </div>
            <div v-show="txTab2 == 4">
                <ul class="conversationlist">
                    <li :class="index==clickId?'active':''" v-for="(item,index) in conversionabc1" @click="openconversion1(index)">
                        <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                        <div class="fl">
                            <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                            <div class="messageInfo">{{item.lastmsg}}</div>
                            <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion2(index)">&#xe776;</i>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="txTab2 == 5">
                <treedapp></treedapp>
                <div class="addgn">
                    +创建DAPP
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tree from '../tree/tree'
    import treetx from '../tree/treetx'
    import treedapp from '../tree/treedapp'
    import {mapState,mapActions} from 'vuex'

    export default {
        name: "index",
        data :function() {
            return {
                listheight:'',
                // show:false,
                conversion:[],
                conversion1:[],
                conversion2:[
                    {
                        recivename:'张三',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:0
                    },
                    {
                        recivename:'李四',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好，请传文件过来',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:1
                    },
                    {
                        recivename:'系统消息',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好，请传文件过来',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:2
                    },
                    {
                        recivename:'消息平台',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好，请传文件过来',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:3
                    }
                ],
                closeColor:'#666',
                clickId:0,
            }
        },
        components:{
            tree,
            treetx,
            treedapp,
        },
        mounted (){
            this.init();
            window.onresize = () => {
                this.init();
            };
        },
        computed:{
            ...mapState({
                skintype: function (state) {
                    return state.skintype
                },
                currentTab: function (state) {
                    return state.currentTab
                },
                txTab: function (state) {
                    return state.txTab
                },
                txTab1: function (state) {
                    return state.txTab1
                },
                txTab2: function (state) {
                    return state.txTab2
                },
                ucard: function (state) {
                    return state.ucard
                },
                conversionabc: function (state) {
                    return state.conversion
                },
                conversionabc1: function (state) {
                    return state.conversion1
                }
            }),
        },
        methods:{
            //初始化时计算左右两栏高度
            init:function () {
                this.listheight=document.documentElement.clientHeight-this.$store.state.listheight;
               /* this.$http.get('/api/conversion')//代替http://localhost:3000/getNewsList
                    .then((res) => {
                        this.conversion = res.data
                    }, (err) => {
                        console.log(err)
                    })*/
            },

            //鼠标悬浮关闭按钮，颜色变换
            closecolor:function () {
                this.closeColor=this.skintype
            },
            //鼠标离开返回初始颜色
            closecolor1:function () {
                this.closeColor='#666'
            },
            //关闭按钮删除选中的会话
            closeconversion:function (index) {
                this.conversion.splice(index,1)
            },
            //关闭按钮删除选中的会话
            closeconversion1:function (index) {
                this.conversion2.splice(index,1)
            },
            //关闭按钮删除选中的会话
            closeconversion2:function (index) {
                this.conversion1.splice(index,1)
            },
            //左侧会话列表和右侧会话窗口联动
            openconversion:function (i) {
                this.clickId=i;
                this.$store.commit('ucard',false);
                this.$store.commit('clickId',this.clickId);
                this.$store.commit('reciveavatar',this.$store.state.conversion[i].reciveavatar);
                this.$store.commit('replyusername',this.$store.state.conversion[i].recivename);
                this.$store.commit('replyposition',this.$store.state.conversion[i].lastmsg);
            },
            openconversion1:function (i) {
                this.clickId=i;
                this.$store.commit('ucard',false);
                this.$store.commit('clickId',this.clickId);
                this.$store.commit('reciveavatar',this.$store.state.conversion1[i].reciveavatar);
                this.$store.commit('replyusername',this.$store.state.conversion1[i].recivename);
                this.$store.commit('replyposition',this.$store.state.conversion1[i].lastmsg);
            },
            opencard:function (i) {
                this.clickId=i;
                this.$store.commit('ucard',true);
                this.$store.commit('clickId',this.clickId);
                this.$store.commit('reciveavatar',this.$store.state.conversion[i].reciveavatar);
                this.$store.commit('replyusername',this.$store.state.conversion[i].recivename);
                this.$store.commit('replyposition',this.$store.state.conversion[i].lastmsg);
            },
            ...mapActions({
                txTablist: "txTab",
                txTablist1: "txTab1",
                txTablist2: "txTab2",
            })
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .messagetab{
        width: 100%;
        border-bottom: 1px solid #dcdcdc;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        li{
            width: 50%;
            float: left;
            text-align: center;
            border-bottom: 2px solid transparent;
            margin-top: -2px;
        }
        :hover{
            cursor: pointer;
        }
        .active{
            border-bottom: 2px solid;
        }
    }
    .conversationlist{
        li{
            height: 60px;
            /*line-height: 60px;*/
            font-size: 14px;
            padding:10px;
            display: flex;
            cursor: pointer;
            div.fl{
                line-height: normal;
                width: 80%;
                position: relative;
            }
            .closeconversion{
                position: absolute;
                bottom: 0;
                right: 0;
                cursor: pointer;
                display: none;
            }
            .replyuseravatar{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .time{
                font-size: 12px;
            }
            .messageInfo{
                font-size: 12px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                width: 100%;
            }
        }
        li.active{
            background:#ebebec;
        }
        li:hover{
            background: #ebebec;
            .closeconversion{
                display: block;
            }
        }
    }
    .addgn {
        position: fixed;
        bottom: 0;
        width: 20%;
        text-align: center;
        li{width: 50%;float: left}
    }
</style>