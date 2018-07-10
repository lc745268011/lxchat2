<template>
    <div>
        <lx-header></lx-header>
        <div class="contanier vCenter indexBox">
            <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']" v-show="currentTab == 'message'">
                <div class="messagetab">
                    <ul>
                        <li :class="{'active':txTab1===2}" @click="txTablist1(2)" :style="{'border-bottom-color':txTab1===2 ? this.$store.state.skintype:''}">常用</li>
                        <li :class="{'active':txTab1===3}" @click="txTablist1(3)" :style="{'border-bottom-color':txTab1===3 ? this.$store.state.skintype:''}">更多</li>
                    </ul>
                </div>
                <ul class="conversationlist" v-show="txTab1 == 2">
                    <li :class="index==clickId?'active':''" v-for="(item,index) in conversion2">
                        <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                        <div class="fl">
                            <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                            <div class="messageInfo">{{item.lastmsg}}</div>
                            <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion(index)">&#xe776;</i>
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
            <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']"  v-show="currentTab == 'tongxunlu'">
                <div class="messagetab">
                    <ul>
                        <li :class="{'active':txTab===0}" @click="txTablist(0)" :style="{'border-bottom-color':txTab===0 ? this.$store.state.skintype:''}">常用</li>
                        <li :class="{'active':txTab===1}" @click="txTablist(1)" :style="{'border-bottom-color':txTab===1 ? this.$store.state.skintype:''}">更多</li>
                    </ul>
                </div>
                <div v-show="txTab == 0">
                    <ul class="conversationlist">
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
            <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']"  v-show="currentTab == 'dapp'">
                <div class="messagetab">
                    <ul>
                        <li :class="{'active':txTab2===4}" @click="txTablist2(4)" :style="{'border-bottom-color':txTab2===4 ? this.$store.state.skintype:''}">常用</li>
                        <li :class="{'active':txTab2===5}" @click="txTablist2(5)" :style="{'border-bottom-color':txTab2===5 ? this.$store.state.skintype:''}">更多</li>
                    </ul>
                </div>
                <div v-show="txTab2 == 4">
                    <ul class="conversationlist">
                        <li :class="index==clickId?'active':''" v-for="(item,index) in conversion1" @click="openconversion(index)">
                            <img :src=item.reciveavatar alt="" class="replyuseravatar fl">
                            <div class="fl">
                                <div class="replyusername">{{item.recivename}} <span class="fr time">{{item.sendtime}}</span></div>
                                <div class="messageInfo">{{item.lastmsg}}</div>
                                <i class="iconfont closeconversion" @mouseover="closecolor"  @mouseout="closecolor1" :style="{'color':closeColor}" @click="closeconversion(index)">&#xe776;</i>
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
            <div id="userchat" :style="{'height':listheight+'px'}">
                <div id="usercard" v-show="this.ucard">
                    <div class="top">
                        <img :src=recavatar alt="" class="avatar">
                        <div class="uname">
                            {{recusername}}
                        </div>
                        <button class="openmsg" :style="{'background-color':this.$store.state.skintype}" @click="openconversion(clickId)">
                            <i class="iconfont">&#xe712;</i>
                        </button>
                    </div>
                    <div class="nickname bottom">昵称：<span>{{recusername}}</span></div>
                </div>
                <div class="chatInfo clearfix">
                    <div class="fl">
                        <img :src=recavatar alt="" class="chatavatar">
                        <span class="chatname">{{recusername}}</span>
                    </div>
                    <div class="fr">
                        <i class="iconfont">&#xe634;</i>
                        <i class="iconfont">&#xe600;</i>
                    </div>

                </div>
                <div class="msgBox" :style="{'height':msgBoxHeight+'px','width':'100%'}">
                    <ul v-for="item in msgBox" v-show="clickId==item.id">
                        <li v-for="m in item.msg" class="clearfix">

                            <div v-if="m.usertype==1" style="width: 61.8%;" class="fr clearfix">
                                <div class="fr">
                                    <img :src=m.avatar alt="" class="msgBoxAvatar">
                                </div>
                                <div v-html="m.msgInfo" style="background: #d8e8f9;margin-right: 10px;" class="msgInfo fr">
                                </div>

                            </div>
                            <div v-else-if="m.usertype==0" style="width: 61.8%;" class="fl clearfix">
                                <div class="fl">
                                    <img :src=m.avatar alt="" class="msgBoxAvatar">
                                </div>
                                <div v-html="m.msgInfo" style="background: #e8e8e8;margin-left: 10px;" class="msgInfo fl">

                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
                <div class="editorbox">
                    <div></div>
                    <quill-editor :options="editorOption"
                                  :content="content"
                                  ref="QuillEditor"
                                  @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                  @change="onEditorChange($event)"
                                  @ready="onEditorReady($event)">
                    </quill-editor>
                    <div class="sendbtn">
                        <button :style="{'background-color':this.$store.state.skintype}" @click="sendMsg(clickId)">发送</button>
                    </div>
                </div>
            </div>
            <img src="../assets/logo.png" alt="" class="mslide" @click="showSlide">
        </div>

    </div>
</template>

<script>
    import lxHeader from '../components/header/index'
    import tree from '../components/tree/tree'
    import treetx from '../components/tree/treetx'
    import treedapp from '../components/tree/treedapp'
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "index",
        data:function(){
            return{
                listheight:'',
                show:false,
                closeColor:'#666',
                clickId:0,
                content: '',
                conversion:[
                    {
                        recivename:'张三',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'青岛河北商会-秘书长',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:0
                    },
                    {
                        recivename:'李四',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'联信科技-研发总监',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:1
                    }
                ],
                conversion1:[
                    {
                        recivename:'记事本',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'我是最后一条显示数据',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:0
                    },
                    {
                        recivename:'项目计划',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'我是最后一条显示数据',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:1
                    }
                ],
                conversion2:[
                    {
                        recivename:'张三',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'最后消息',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:0
                    },
                    {
                        recivename:'李四',
                        sendname:'我是用户',
                        sendtime:'09:00',
                        lastmsg:'最后消息',
                        sendavatar:'',
                        reciveavatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                        id:1
                    }
                ],
                msgBoxHeight:'',
                msgBox:[
                    {
                        id:0,
                        msg:[{
                            time:'09:00',
                            msgInfo:'hello',
                            usertype:1,
                            avatar:'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username:'我是用户'
                        },{
                            time:'09:03',
                            msgInfo:'hello',
                            usertype:0,
                            avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username:'我是接受者'
                        },{
                            time:'09:00',
                            msgInfo:'hello',
                            usertype:1,
                            avatar:'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username:'我是用户'
                        },{
                            time:'09:03',
                            msgInfo:'hello',
                            usertype:0,
                            avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username:'我是接受者'
                        },{
                            time:'09:00',
                            msgInfo:'hello',
                            usertype:1,
                            avatar:'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username:'我是用户'
                        },{
                            time:'09:03',
                            msgInfo:'hello',
                            usertype:0,
                            avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username:'我是接受者'
                        },{
                            time:'09:00',
                            msgInfo:'hello',
                            usertype:1,
                            avatar:'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username:'我是用户'
                        },{
                            time:'09:03',
                            msgInfo:'hello',
                            usertype:0,
                            avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username:'我是接受者'
                        }]
                    },{
                        id:1,
                        msg:[{
                            time:'09:00',
                            msgInfo:'hello1',
                            usertype:1,
                            avatar:'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username:'我是用户'
                        },{
                            time:'09:03',
                            msgInfo:'hello1',
                            usertype:0,
                            avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username:'我是接受者'
                        }]
                    }],
                editorOption:{
                    modules:{//自定义编辑器工具栏
                        toolbar:[
                            ['bold', 'underline', 'strike'],        // toggled buttons
                            // ['blockquote', 'code-block'],

                            // [{'header': 1}, {'header': 2}],               // custom button values
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                            [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                            // [{'direction': 'rtl'}],                         // text direction

                            [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],

                            [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                            [{'font': []}],
                            [{'align': []}],
                            ['link', 'image', 'video', 'formula']//去除video即可
                        ]
                    }
                },
                recavatar:'',
                recusername:'',
                editorInfo:'',
                // ucard:false
            }
        },
        components:{
            lxHeader,
            tree,
            treetx,
            treedapp,
        },
        mounted (){
            this.init();
            window.onresize = () => {
                this.init();
            };
            this.openconversion(this.clickId)
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
                reciveavatar: function (state) {
                    return state.reciveavatar
                },
                replyusername: function (state) {
                    return state.replyusername
                },
                ucard: function (state) {
                    return state.ucard
                }
            }),
        },
        methods:{
            //初始化时计算左右两栏高度
            init:function () {
                this.listheight=document.documentElement.clientHeight-this.$store.state.listheight
                this.msgBoxHeight=this.listheight-document.getElementsByClassName('editorbox')[0].offsetHeight-document.getElementsByClassName('chatInfo')[0].offsetHeight;
                this.scrolldown()
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
            //富文本编辑器状态
            onEditorBlur(quill) {
                console.log('editor blur!', quill)
            },
            onEditorFocus(quill) {
                console.log('editor focus!', quill)
            },
            onEditorReady(quill) {
                console.log('editor ready!', quill)
            },
            onEditorChange({ quill, html, text }) {
                console.log('editor change!', quill, html, text)
                this.content = html
            },

            //左侧会话列表和右侧会话窗口联动
            openconversion:function (i) {
                this.$store.commit('ucard',false);
                this.clickId=i;
                this.$store.commit('reciveavatar',this.conversion[i].reciveavatar);
                this.$store.commit('replyusername',this.conversion[i].recivename);
                this.recavatar=this.reciveavatar;
                this.recusername=this.replyusername;
                this.scrolldown();
            },
            //会话窗口滚动条在底部
            scrolldown:function(){
                this.$nextTick(function(){
                    var div = document.getElementsByClassName('msgBox');
                    div[0].scrollTop = div[0].scrollHeight;
                })
            },
            //发送消息
            sendMsg:function (i) {
                this.msgBox[i].msg.push({
                    time:'09:00',
                    msgInfo:this.content,
                    usertype:1,
                    avatar:'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                    username:'我是用户'
                });
                this.content='';
                this.scrolldown()
            },
            ...mapActions({
                txTablist: "txTab",
                txTablist1: "txTab1",
                txTablist2: "txTab2",
            })

        },
    }
</script>

<style scoped lang="scss">
    .msgBox{
        padding:10px 20px;
        overflow: auto;
        ul{
            height: 100%;
            li{margin-bottom: 20px}
        }

        .msgInfo{
            padding: 10px 15px;
            border-radius: 15px;
            font-size: 14px;
            max-width: 80%;
        }
        .msgBoxAvatar {
            width: 40px;
            height: 40px;
            border-radius: 50%
        }
    }
    ::-webkit-scrollbar {/*滚动条整体样式*/
        width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        background: #999;
    }
    ::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        border-radius: 5px;
        background: #EDEDED;
    }
    .sendbtn{
        text-align: right;
        button{
            margin-right: 15px;
            margin-bottom: 15px;
            border: 0;
            padding: 5px 10px;
            color: #fff;
            font-size: 14px;
        }
        :hover{
            cursor: pointer;
        }
        :focus{
            outline: none;
        }
    }
    .editorbox {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .chatInfo {
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        border-bottom: 1px solid #dcdcdc;
        .chatavatar{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 15px;
        }
        .chatname{
            font-size: 18px;
        }
        i.iconfont{
            font-size: 26px;
            margin-left: 10px;
        }
    }
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

    #usercard {
        position: absolute;
        width: 260px;
        height: 400px;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url("https://lzy1043.github.io/vue-im-demo/dist/static/img/2.6d96e8d.jpg");
        background-size: cover;
        box-shadow: 0 0 20px rgba(0, 0, 0, .15);
        border-radius: 10px;
        z-index: 999;
        text-align: center;
        .top{
            border-bottom: 1px solid #dcdcdc;
            padding: 20px;
            position: relative;
            .avatar{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin: 0 auto;
            }
            .uname{
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin-top: 20px;
            }
            .openmsg{
                border: 0;
                background: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;right: 20px;
                cursor: pointer;
                outline: none;
                i{
                    color: #fff;
                    font-size: 24px;
                }
            }
        }
        .nickname{
            font-size: 14px;
            margin-top: 20px;
            span{
                color: #333;
                font-weight: bold;
            }
        }
    }
</style>
<style>
    .quill-editor .ql-editor{height: 180px;}
    .quill-editor .ql-toolbar.ql-snow,.quill-editor .ql-container.ql-snow{border: 0}
    .quill-editor .ql-toolbar.ql-snow{
        border-top: 1px solid #dcdcdc;}
</style>