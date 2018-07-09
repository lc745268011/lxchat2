<template>
    <div id="aside">
        <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']" v-show="currentTab == 'message'">
            <div class="messagetab">
                <ul>
                    <li :class="{'active':txTab1===2}" @click="txTablist1(2)" :style="{'border-bottom-color':txTab1===2 ? this.$store.state.skintype:''}">常用</li>
                    <li :class="{'active':txTab1===3}" @click="txTablist1(3)" :style="{'border-bottom-color':txTab1===3 ? this.$store.state.skintype:''}">更多</li>
                </ul>
            </div>
            <ul class="conversationlist" v-show="txTab1 == 2">1
                <li :class="index==clickId?'active':''" v-for="(item,index) in conversion" @click="openconversion(index)">
                    <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                    <div class="fl">
                        <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                        <div class="messageInfo">{{item.lastmsg}}</div>
                        <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion(index)">&#xe776;</i>
                    </div>
                </li>
            </ul>
            <ul class="conversationlist" v-show="txTab1 == 3">
                <li :class="index==clickId?'active':''" v-for="(item,index) in conversion" @click="openconversion(index)">
                    <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                    <div class="fl">
                        <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                        <div class="messageInfo">{{item.lastmsg}}</div>
                        <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion(index)">&#xe776;</i>
                    </div>
                </li>
            </ul>
        </div>
        <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']"  v-show="currentTab == 'tongxunlu'">
            <div class="messagetab">
                <ul>
                    <li :class="{'active':txTab===0}" @click="txTablist(0)" :style="{'border-bottom-color':txTab===0 ? this.$store.state.skintype:''}">好友</li>
                    <li :class="{'active':txTab===1}" @click="txTablist(1)" :style="{'border-bottom-color':txTab===1 ? this.$store.state.skintype:''}">群组</li>
                </ul>
            </div>
            <div v-show="txTab == 0" style="margin: 10px 0">
                <tree></tree>
            </div>
            <div v-show="txTab == 1" style="margin: 10px 0">
                <tree></tree>
            </div>
        </div>
        <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']"  v-show="currentTab == 'dapp'">dapp
        </div>
    </div>
</template>

<script>
    import tree from '../components/tree/tree'

    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "index",
        data :function() {
            return {
                listheight:'',
                show:false,
                closeColor:'#666',
                conversion:[
                    {
                        recivename:'我是接受者',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'我是最后一条显示数据',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:0
                    },
                    {
                        recivename:'我是接受者1',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'我是最后一条显示数据',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:1
                    }
                ],
                clickId:0,
            }
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
                reciveavatar: function (state) {
                    return state.reciveavatar
                },
                replyusername: function (state) {
                    return state.replyusername
                }
            }),
        },

        methods:{
            init:function () {
                this.listheight=document.documentElement.clientHeight-this.$store.state.listheight
            },
            //在手机尺寸点击切换显示组织列表
            showSlide:function () {
                this.show=!this.show
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
            ...mapMutations({
                txTablist: "txTab",
                txTablist1: "txTab1",
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
</style>