<template>
    <div id="aside">
        <!--互动侧栏列表-->
        <div id="userlist" :class="[this.$store.state.show?'show':'noshow']" v-show="currentTab == 'message'">
            <div class="triangle_border_nw" :style="{'border-color':skintype+' transparent transparent transparent'}" @click="tabToggle"></div>
            <div class="messagetab">
                <ul class="clearfix" v-show="tabStatus">
                    <li :class="{'active':txTab1===2}" @click="txTablist1(2)">
                        <div :style="{'border-bottom-color':txTab1===2 ? skintype:'','color':txTab1===2 ? skintype:''}">
                            <i class="iconfont">&#xe605;</i>常用
                        </div>
                    </li>
                    <li :class="{'active':txTab1===3}" @click="txTablist1(3)">
                        <div :style="{'border-bottom-color':txTab1===3 ? skintype:'','color':txTab1===3 ? skintype:''}">
                            <i class="iconfont">&#xe609;</i>更多
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="conversationlist" v-show="txTab1 == 2">
                <li :class="index==clickId?'active':''" v-for="(item,index) in conversion2" @click="openconversion(index)" style="position: relative" @mouseleave="rightListhide" @mouseenter="menuIcon(index)">
                    <el-badge :value="item.unread" :max="99" class="item" :hidden="item.unread!=0?false:true">
                        <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                    </el-badge>
                    <div class="fl">
                        <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                        <div class="messageInfo clearfix">
                            <p class="fl">
                            {{item.lastmsg}}</p>
                            <div>
                                <div @mouseenter="rightList(index)" v-show="status==index">
                                    <i :class="['iconfont fr','star',item.star?'addStar':'']">&#xe617;</i>
                                    <div id="ball"><img :src=item.reciveavatar alt=""></div>
                                </div>
                                <ul id="rightList" v-show="showRightList==index">
                                    <li @click.stop="closeconversion1(index)"><img src="../../assets/img/deleteIcon.png" alt="">删除消息</li>
                                    <li><img src="../../assets/img/upIcon.png" alt="">置顶消息</li>
                                    <li><img src="../../assets/img/collectIcon.png" alt="">取消常用</li>
                                    <li><img src="../../assets/img/userIcon.png" alt="">个人资料</li>
                                </ul>
                            </div>

                        </div>
                        <!--<i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion1(index)">&#xe776;</i>-->
                    </div>
                </li>
            </ul>
            <div v-show="txTab1 == 3">
                <tree></tree>
            </div>
            <div id="movie" @mouseleave="hideMenu">
                <div class="addicon" :style="{'background-color':skintype}" @mouseenter="showMenu">
                    <img src="../../assets/img/addicon.png" alt="">
                </div>
                <transition name="move">
                    <div class="menu" v-show="addMenu">
                        <div class="inner inner-1">1</div>
                        <div class="inner inner-2">2</div>
                        <div class="inner inner-3">3</div>
                    </div>
                </transition>
            </div>

        </div>
        <!--通讯录侧栏列表-->
        <div id="userlist" :class="[this.$store.state.show?'show':'noshow']"  v-show="currentTab == 'tongxunlu'">
            <div class="triangle_border_nw" :style="{'border-color':skintype+' transparent transparent transparent'}" @click="tabToggle1"></div>
            <div class="messagetab">
                <ul class="clearfix" v-show="tabStatus1">
                    <li :class="{'active':txTab===0}" @click="txTablist(0)">
                        <div :style="{'border-bottom-color':txTab===0 ? skintype:'','color':txTab===0 ? skintype:''}">
                            <i class="iconfont">&#xe605;</i>常用
                        </div>
                    </li>
                    <li :class="{'active':txTab===1}" @click="txTablist(1)">
                        <div :style="{'border-bottom-color':txTab===1 ? skintype:'','color':txTab===1 ? skintype:''}">
                            <i class="iconfont">&#xe609;</i>更多
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="txTab == 0">
                <ul class="conversationlist">
                    <li :class="index==clickId?'active':''" v-for="(item,index) in this.conversionabc" @click="opencard(index)">
                        <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                        <div class="fl">
                            <div class="replyusername clearfix">
                                <span class="fl">{{item.recivename}}</span>
                                <span class="fr position">{{item.position}}</span>
                            </div>
                            <div class="messageInfo">
                               <p class="fl">{{item.company}}</p>
                            </div>
                            <div>
                                <div @mouseenter="rightList(index)">
                                    <i :class="['iconfont fr','star',item.star?'addStar':'']">&#xe617;</i>
                                    <div id="ball"><img :src=item.reciveavatar alt=""></div>
                                </div>
                                <ul id="rightList" v-show="showRightList==index">
                                    <li @click.stop="closeconversion(index)"><img src="../../assets/img/deleteIcon.png" alt="">删除消息</li>
                                    <li><img src="../../assets/img/upIcon.png" alt="">置顶消息</li>
                                    <li><img src="../../assets/img/collectIcon.png" alt="">取消常用</li>
                                    <li><img src="../../assets/img/userIcon.png" alt="">个人资料</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="txTab == 1">
                <treetx></treetx>
            </div>
            <div id="movie" @mouseleave="hideMenu">
                <div class="addicon" :style="{'background-color':skintype}" @mouseenter="showMenu">
                    <img src="../../assets/img/addicon.png" alt="">
                </div>
                <transition name="move">
                    <div class="menu" v-show="addMenu">
                        <div class="inner inner-1">1</div>
                        <div class="inner inner-2">2</div>
                        <div class="inner inner-3">3</div>
                    </div>
                </transition>
            </div>

        </div>
        <!--dapp侧栏列表-->
        <div id="userlist" :class="[this.$store.state.show?'show':'noshow']"  v-show="currentTab == 'dapp'">
            <div class="triangle_border_nw" :style="{'border-color':skintype+' transparent transparent transparent'}" @click="tabToggle2"></div>
            <div class="messagetab">
                <ul class="clearfix" v-show="tabStatus2">
                    <li :class="{'active':txTab2===4}" @click="txTablist2(4)">
                        <div :style="{'border-bottom-color':txTab2===4 ? skintype:'','color':txTab2===4 ? skintype:''}">
                            <i class="iconfont">&#xe605;</i>常用
                        </div>
                    </li>
                    <li :class="{'active':txTab2===5}" @click="txTablist2(5)">
                        <div :style="{'border-bottom-color':txTab2===5 ? skintype:'','color':txTab2===5 ? skintype:''}">
                            <i class="iconfont">&#xe609;</i>更多
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="txTab2 == 4">
                <ul class="conversationlist">
                    <li :class="index==clickId?'active':''" v-for="(item,index) in conversionabc1" @click="openconversion1(index)">
                        <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                        <div class="fl">
                            <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                            <div class="messageInfo">{{item.lastmsg}}</div>
                            <!--<i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion2(index)">&#xe776;</i>-->
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="txTab2 == 5">
                <treedapp></treedapp>
            </div>
            <div id="movie" @mouseleave="hideMenu">
                <div class="addicon" :style="{'background-color':skintype}" @mouseenter="showMenu">
                    <img src="../../assets/img/addicon.png" alt="">
                </div>
                <transition name="move">
                    <div class="menu" v-show="addMenu">
                        <div class="inner inner-1">1</div>
                        <div class="inner inner-2">2</div>
                        <div class="inner inner-3">3</div>
                    </div>
                </transition>
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
                addMenu:false,
                status:-1,
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
                        id:0,
                        star:false,
                        unread:12
                    },
                    {
                        recivename:'李四',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好，请传文件过来你好，请传文件过来你好，请传文件过来你好，请传文件过来',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:1,
                        star:false,
                        unread:500

                    },
                    {
                        recivename:'系统消息',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好，请传文件过来',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:2,
                        star:false,
                        unread:0


                    },
                    {
                        recivename:'消息平台',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'你好，请传文件过来',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:3,
                        star:false,
                        unread:5

                    }
                ],
                // closeColor:'#666',
                clickId:0,
                showRightList:-1,
                tabStatus:true,
                tabStatus1:true,
                tabStatus2:true,
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
                this.listheight = window.innerHeight-this.$store.state.listheight
                /* this.$http.get('/api/conversion')//代替http://localhost:3000/getNewsList
                     .then((res) => {
                         this.conversion = res.data
                     }, (err) => {
                         console.log(err)
                     })*/
            },

           /* //鼠标悬浮关闭按钮，颜色变换
            closecolor:function () {
                this.closeColor=this.skintype
            },
            //鼠标离开返回初始颜色
            closecolor1:function () {
                this.closeColor='#666'
            },*/
            //关闭按钮删除选中的会话
            closeconversion:function (index) {
                this.$store.state.conversion.splice(index,1)
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
            addStar(item,event){
                item.star=!item.star;
                if(item.star==true){
                    event.target.nextSibling.nextSibling.style.top= event.pageY+'px';
                    event.target.nextSibling.nextSibling.style.display='block'
                    event.target.nextSibling.nextSibling.style.left = event.pageX+'px';
                    event.target.nextSibling.nextSibling.style.transition = 'left 0s, top 0s';
                    setTimeout(()=>{
                        event.target.nextSibling.nextSibling.style.top = '80px';
                        event.target.nextSibling.nextSibling.style.left = '80px';
                        event.target.nextSibling.nextSibling.style.transition = 'left 1s linear, top 1s ease-in';
                    }, 20);
                    setTimeout(()=>{
                        event.target.nextSibling.nextSibling.style.display='none'

                    }, 1200)
                }

            },
            tabToggle(){
                this.tabStatus=!this.tabStatus
            },
            tabToggle1(){
                this.tabStatus1=!this.tabStatus1
            },
            tabToggle2(){
                this.tabStatus2=!this.tabStatus2
            },
            showMenu() {
                this.addMenu = true;
            },
            hideMenu() {
                this.addMenu = false;
            },
            //右侧折叠功能
            rightList(i){
                this.showRightList=i
            },
            rightListhide(){
                this.showRightList=-1;
                this.status=-1
            },
            menuIcon(status){
                this.status=status
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
        font-size: 14px;
        li{
            width: 50%;
            font-size: 16px;
            float: left;
            text-align: center;
            height: 60px;
            line-height: 60px;
            div{
                width: 50%;
                margin: 0 auto;
                height: 60px;
            }
            i{margin-right: 10px;}
        }
        :hover{
            cursor: pointer;
        }
        .active{
            div{
                border-bottom: 4px solid;
            }
        }
    }
    .conversationlist{
        li{
            height: 60px;
            /*line-height: 60px;*/
            font-size: 14px;
            color: #333;
            padding:10px 20px;
            display: flex;
            cursor: pointer;
            border-bottom: 1px solid #dcdcdc;
            position: relative;
            div.fl{
                line-height: 1.5;
                width: 78%;
            }
            .closeconversion{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 5px;
                cursor: pointer;
                display: none;
            }
            .replyuseravatar{
                width: 42px;
                height: 42px;
                border-radius: 50%;
                margin-right: 12px;
            }
            .time{
                font-size: 13px;
                color: #999;
            }
            .messageInfo{
                font-size: 13px;
                width: 100%;
                color: #999;
                p {
                    width: 80%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
        li.active{
            background:#dcdcdc;
        }
        li:hover{
            background: #f0f0f0;
            .closeconversion{
                display: block;
            }
        }
    }
    .addicon{
        width: 42px;
        height: 42px;
        text-align: center;
        line-height: 38px;
        position: fixed;
        left:20px;
        bottom: 20px;
        border-radius: 50%;
        z-index: 99;
    }
    .star{
        color: #999;
        font-size: 15px;
    }
    .addStar{color: #ffd000; }
    .triangle_border_nw{
        width:0;
        height:0;
        border-width:10px 0 0 10px;
        border-style:solid;
        position:absolute;
        right: 0;
        top: 0;
        z-index: 99;
        cursor: pointer;
    }
    #ball {
        width:30px;
        height:30px;
        position: fixed;
        transition: left 1s linear, top 1s ease-in;
        display: none;
        img{
            width: 100%;
            border-radius: 50%;
            z-index: 999;
        }
    }

    #rightList {
        top: 0;
        position: absolute;
        background: #fff;
        left: 300px;
        z-index: 999;
        width: 140px;
        border-radius: 4px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        padding: 6px 0;
        img{
            width: 14px;
            height: 15px;
            margin-top: 7px;
            margin-right: 10px;
        }
        li{
            height: 30px;
            line-height: 30px;
            padding: 0 13px;
            border-bottom: 0;
        }
        :hover{
            background: #edebea;
        }
    }
    .position{
        color: #999;
        font-size: 13px;
    }

</style>
<style lang="stylus" rel="stylesheet/stylus">
    #app
        .btn
            position: fixed
            bottom: 100px
            right: 10px
            z-index: 10
            width: 50px
            height: 50px
            line-height: 50px
            border-radius: 50%
            border: none
            outline: none
            color: #fff
            font-size: 18px
            background: blue
        .menu
            position: fixed
            bottom: 20px
            left: 20px
            width: 100px
            height: 100px
            border-radius: 50%
            transition: all .7s ease-in
            &.move-enter-active
                .inner
                    transform: translate3d(0, 0, 0)
                    transition-timing-function: cubic-bezier(0, .57, .44, 1.97)
                .inner-1
                    transition-delay: .3s
                .inner-2
                    transition-delay: .2s
                .inner-3
                    transition-delay: .3s
            &.move-enter, &.move-leave-active
                .inner
                    transition-timing-function: ease-in-out
                .inner-1
                    transform: translate3d(10px, 60px, 0)
                    transition-delay: .1s
                .inner-2
                    transform: translate3d(-40px, 40px, 0)
                    transition-delay: .2s
                .inner-3
                    transform: translate3d(-60px, -10px, 0)
                    transition-delay: .3s
        .inner
            display: inline-block
            position: absolute
            width: 30px
            height: 30px
            line-height: 30px
            border-radius: 50%
            background: red
            text-align: center
            color: #fff
            transition: all .4s
        .inner-1
            bottom: 70px
            left: 0
        .inner-2
            left: 50px
            bottom: 50px
        .inner-3
            left: 70px
            bottom: 0
</style>
<style>
    .item .el-badge__content.is-fixed{
        top:-2px;
        right: 6px;
        border: 0;
        padding: 0 5px;
        height: 16px;
        line-height: 14px;
        background-color: #ff3b30!important;
        transform: translateY(0) translateX(0);
    }
</style>