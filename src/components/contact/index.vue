<template>
    <div id="userchat">
        <!--通讯录卡片-->
        <div id="usercard" v-show="this.ucard">
            <div class="top">
                <img :src=reciveavatar alt="" class="avatar">
                <div class="uname">
                    {{replyusername}}
                </div>

                <button class="openmsg" :style="{'background-color':this.$store.state.skintype}"
                        @click="openconversion(clickId)">
                    <i class="iconfont">&#xe712;</i>
                </button>
            </div>
            <div class="nickname bottom">昵称：<span>{{replyusername}}</span><br>职位：<span>{{replyusername}}</span></div>
        </div>
        <!--互动和dapp消息样式-->
        <div v-show="!this.ucard" style="height: 100%">
            <!--dapp样式-->
            <div id="dapp" v-show="currentTab=='dapp'" style="height: 100%">
                <div class="dappBox">
                    <img :src=reciveavatar alt="" class="chatavatar">
                    <span class="chatname">{{replyusername}}</span>
                </div>
            </div>
            <!--互动消息样式-->
            <div v-show="currentTab!='dapp'">
                <div class="chatInfo vCenter">
                    <div>
                        <img :src=reciveavatar alt="" class="chatavatar" @click="ucardshow">
                        <span class="chatname">{{replyusername}}</span>

                    </div>
                    <div>
                        <ul class="clearfix funicon">
                            <li class="fr" v-for="(item,index) in functions" @mouseover="showtips(index)"
                                @mouseout="hidetips" @click="open5(index)">
                                <i class="iconfont" v-html="item.icon" :style="{'color':skintype}"></i>
                                <div class="tips" v-show="tips==index">{{item.tipsname}}</div>
                            </li>
                        </ul>
                    </div>


                </div>
                <div class="msgBox" :style="{'height':fullHeight+'px','width':'100%'}">
                    <div v-for="item in msgBox" v-show="clickId==item.id">
                        <div v-for="(m,index) in item.msg" class="clearfix list">
                            <!--我发出的消息样式-->
                            <div v-if="m.usertype==1" style="max-width: 61.8%;" class="fr clearfix" @mouseleave="tipsBoxhide">
                                <div>
                                    <div v-html="m.msgInfo" :style="{'background': skintype,'color':'#fff'}" class="msgInfo fr"
                                         @mouseover="tipsBoxshow(index)">
                                    </div>
                                    <div class="tipList" :style="{'top':y+'px','right':'35px'}" v-show="tipList==index" @mouseleave="tipsBoxhide">
                                        <div class="clearfix">
                                            <div class="fl">复制</div>
                                            <div class="fl">转发</div>
                                            <div class="fl">链存</div>
                                            <div class="fl">存为</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--我接受的消息样式-->
                            <div v-else-if="m.usertype==0" style="max-width: 61.8%;" class="fl clearfix" @mouseleave="tipsBoxhide">
                                <div v-html="m.msgInfo" style="background: #e8e8e8;" class="msgInfo fl" @mouseover="tipsBoxshow(index)">
                                </div>
                                <div class="tipList" :style="{'top':y+'px','left':'28px'}" v-show="tipList==index">
                                    <div class="clearfix">
                                        <div class="fl">复制</div>
                                        <div class="fl">转发</div>
                                        <div class="fl">链存</div>
                                        <div class="fl">存为</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="editorbox">
                    <div class="toolbar clearfix">
                        <ul class="clearfix fl">
                            <li @click="gongneng(1)"><img src="../../assets/img/font.png" alt=""
                                                          :class="{'itemActive':itemActive===1}" title="字体"></li>
                            <li @click="gongneng(2)"><img src="../../assets/img/expression.png" alt=""
                                                          :class="{'itemActive':itemActive===2}" title="表情"></li>
                            <li @click="gongneng(3)"><img src="../../assets/img/screenshots.png" alt=""
                                                          :class="{'itemActive':itemActive===3}" title="截屏"></li>
                            <li @click="gongneng(4)"><img src="../../assets/img/pic.png" alt=""
                                                          :class="{'itemActive':itemActive===4}" title="图片"></li>
                            <li @click="gongneng(5)"><img src="../../assets/img/files.png" alt=""
                                                          :class="{'itemActive':itemActive===5}" title="文件"></li>
                            <li><span class="line">|</span></li>
                            <li @click="gongneng(6)"><img src="../../assets/img/vote.png" alt=""
                                                          :class="{'itemActive':itemActive===6}" title="投票"></li>
                            <li @click="gongneng(7)"><img src="../../assets/img/sign.png" alt=""
                                                          :class="{'itemActive':itemActive===7}" title="签到"></li>
                            <li @click="gongneng(8)"><img src="../../assets/img/log.png" alt=""
                                                          :class="{'itemActive':itemActive===8}" title="日志"></li>
                            <li @click="gongneng(9)"><img src="../../assets/img/whiteboard.png" alt=""
                                                          :class="{'itemActive':itemActive===9}" title="白板"></li>
                            <li @click="gongneng(10)"><img src="../../assets/img/news.png" alt=""
                                                           :class="{'itemActive':itemActive===10}" title="新闻"></li>
                            <li @click="gongneng(11)"><img src="../../assets/img/more.png" alt=""
                                                           :class="{'itemActive':itemActive===11}" title="更多"></li>
                        </ul>
                        <div class="fr"><img src="../../assets/img/msgIcon.png" alt="" style="margin-right: 10px">消息记录</div>
                    </div>
                    <editor></editor>
                    <div class="sendbtn">
                        <button :style="{'background-color':this.$store.state.skintype}"><span @click="sendMsg(clickId)">发送</span><i :class="['iconfont',SendMethod==true?'hignLight':'']" @click="showSendMethod">&#xe608;</i>
                        </button>
                        <ul class="sendList" v-show="SendMethod">
                            <li @click="SendMethod=false">
                                <img src="../../assets/img/choose.png" alt="">
                                按Ctrl+Enter键发送消息
                            </li>
                        </ul>
                    </div>

                </div>
                <dialogs></dialogs>
            </div>

        </div>

    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import dialogs from '../dialog/addgroup'
    import editor from '../../components/editor/editor'
    export default {
        name: "index",
        data: function () {
            const generateData2 = _ => {
                const data = [];
                const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
                const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index,
                        pinyin: pinyin[index]
                    });
                });
                return data;
            };
            return {
                msgBox: [
                    {
                        id: 0,
                        msg: [{
                            time: '09:00',
                            msgInfo: '正在设计页面',
                            usertype: 1,
                            avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username: '我是用户',
                        }, {
                            time: '09:03',
                            msgInfo: '你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢你好啊，在干嘛呢',
                            usertype: 0,
                            avatar: 'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username: '我是接受者'
                        }, {
                            time: '09:00',
                            msgInfo: 'hello',
                            usertype: 1,
                            avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username: '我是用户',
                        }, {
                            time: '09:03',
                            msgInfo: 'hello',
                            usertype: 0,
                            avatar: 'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username: '我是接受者',
                        }, {
                            time: '09:00',
                            msgInfo: 'hello',
                            usertype: 1,
                            avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username: '我是用户',
                        }, {
                            time: '09:03',
                            msgInfo: 'hello',
                            usertype: 0,
                            avatar: 'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username: '我是接受者',
                        }, {
                            time: '09:00',
                            msgInfo: 'hello',
                            usertype: 1,
                            avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username: '我是用户',

                        }, {
                            time: '09:03',
                            msgInfo: 'hello',
                            usertype: 0,
                            avatar: 'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username: '我是接受者',
                        }]
                    }, {
                        id: 1,
                        msg: [{
                            time: '09:00',
                            msgInfo: 'hello1',
                            usertype: 1,
                            avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                            username: '我是用户'
                        }, {
                            time: '09:03',
                            msgInfo: 'hello1',
                            usertype: 0,
                            avatar: 'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg',
                            username: '我是接受者'
                        }]
                    }],
                editorOption: {
                    modules: {//自定义编辑器工具栏
                        toolbar: [
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
                    },
                    placeholder: ''
                },
                listheight: '',
                winheight:'',
                content: '',
                barStatus: false,
                x: 0,
                y: 0,
                SendMethod:false,
                tipList:-1,
                itemActive: -1,
                functions: [{
                    fid: 0,
                    icon: '&#xe60e;',
                    tipsname: '远程协助'
                },{
                    fid: 1,
                    icon: '&#xe60d;',
                    tipsname: '请求控制'
                },{
                    fid: 2,
                    icon: '&#xe60c;',
                    tipsname: '视频聊天'
                }, {
                    fid: 3,
                    icon: '&#xe60f;',
                    tipsname: '网络电话'
                }, {
                    fid: 4,
                    icon: '&#xe60b;',
                    tipsname: '创建讨论组'
                },],
                tips: -1,
                data2: generateData2(),
                value2: [],
                filterMethod(query, item) {
                    return item.pinyin.indexOf(query) > -1;
                }
            }
        },
        mounted() {
            var that = this;
            that.init();
            that.toolbar();
            window.onresize = () => {
                that.init();
                that.scrolldown();
            };


            /*CKEDITOR.on("instanceReady", function(e){
                CKEDITOR.instances.editor.document.$.body.addEventListener('keydown',function (e) {
                    if (e.ctrlKey &&e.keyCode == 13)  {
                        var key=that.$store.state.clickId;
                        // console.log(that.$options.methods.sendMsg.bind(this))
                        that.$options.methods.sendMsg(key);

                    }
                })
            })*/
        },
        components: {
            dialogs,
            editor
        },
        computed: {
            ...mapState({
                skintype: function (state) {
                    return state.skintype
                },
                clickId: function (state) {
                    return state.clickId
                },
                reciveavatar: function (state) {
                    return state.reciveavatar
                },
                replyusername: function (state) {
                    return state.replyusername
                },
                replyposition: function (state) {
                    return state.replyposition
                },
                ucard: function (state) {
                    return state.ucard
                },
                currentTab: function (state) {
                    return state.currentTab
                },
                winHeight: function (state) {
                    return state.winHeight
                },
            }),
            fullHeight(){
                return this.$store.state.winHeight-60-260
            }
        },
        updated:function(){
            this.scrolldown();
        },
        methods: {
            init() {
            },
            toolbar() {

            },
            //左侧会话列表和右侧会话窗口联动
            openconversion: function (i) {
                this.$store.commit('ucard', this.false);
                this.$store.commit('currentTab', 'message');
                this.$store.commit('clickId', i);
                this.$store.commit('reciveavatar', this.$store.state.conversion[i].reciveavatar);
                this.$store.commit('replyusername', this.$store.state.conversion[i].recivename);
                this.$store.commit('replyposition', this.$store.state.conversion[i].lastmsg);
            },
            //发送消息
            sendMsg: function (i) {
                var CHtml= CKEDITOR.instances.editor.getData();
                var CHtml1= CKEDITOR.instances.editor1.getData();
                if(CHtml==''&&CHtml1!=''){
                    this.msgBox[i].msg.push({
                        time: '09:00',
                        msgInfo: CHtml1,
                        usertype: 1,
                        avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                        username: '我是用户'
                    });
                }else if(CHtml1==''&&CHtml!=''){
                    this.msgBox[i].msg.push({
                        time: '09:00',
                        msgInfo: CHtml,
                        usertype: 1,
                        avatar: 'https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg',
                        username: '我是用户'
                    });
                }


                CKEDITOR.instances.editor.setData("");
                this.scrolldown()
            },
            showSendMethod(){
                this.SendMethod=true
            },
            //会话窗口滚动条在底部
            scrolldown: function () {
                this.$nextTick(function () {
                    var div = document.getElementsByClassName('msgBox');
                    div[0].scrollTop = div[0].scrollHeight;
                })
            },
            gongneng(i) {
                if (i == 1) {
                    this.barStatus = true;
                    document.getElementById('cke_editor').style.display='none'
                    document.getElementById('cke_editor1').style.display='block'
                    this.toolbar()
                } else {
                    this.barStatus = false;
                    document.getElementById('cke_editor1').style.display='none'
                    document.getElementById('cke_editor').style.display='block'
                    this.toolbar()
                }
                this.itemActive = i
            },
            showtips(t) {
                this.tips = t
            },
            hidetips() {
                this.tips = -1
            },
            open5(t) {
                if (t == 4) {
                    this.$store.commit('dialogVisible', true);
                }
            },
            tipsBoxshow(index) {
                this.tipList = index;
                this.y = event.target.offsetTop - document.getElementsByClassName('msgBox')[0].scrollTop+event.target.offsetHeight;
            },
            tipsBoxhide() {
                this.tipList = -1;
            },
            ucardshow(){
                this.$store.commit('ucard', true);
                this.$store.commit('currentTab', 'tongxunlu');
            }
        }
    }
</script>

<style scoped lang="scss">
    .msgBox {
        .list {
            margin-bottom: 20px;
            padding: 0;
            overflow: inherit;

        }
        padding: 28px;
        overflow: auto;
        .msgInfo {
            padding: 14px 20px;
            border-radius: 15px;
            font-size: 13px;

        }
        .msgBoxAvatar {
            width: 40px;
            height: 40px;
            border-radius: 50%
        }
    }

    ::-webkit-scrollbar { /*滚动条整体样式*/
        width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    ::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        background: #999;
    }

    ::-webkit-scrollbar-track { /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        background: #EDEDED;
    }

    .sendbtn {
        text-align: right;
        width: 96px;
        height: 32px;
        float: right;
        margin-right: 15px;
        position: relative;

        .sendList{
            position: absolute;
            top: -50px;
            background: #fff;
            font-size: 12px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            width: 185px;
            border-radius: 4px;
            right: 0;
            padding: 6px 0;
            li{
                height: 28px;
                line-height: 28px;
                text-align: left;
                padding:0 12px;
                img {
                    margin-right: 5px
                }

            }
            :hover{
                background: #edebea;
            }
        }
        button {
            width: 100%;
            /*margin-right: 15px;*/
            margin-bottom: 15px;
            border: 0;
            padding: 0;
            color: #fff;
            height: 100%;
            font-size: 14px;
            border-radius: 4px;
            span{
                width: 63px;
                text-align: center;
                display: inline-block;
                /*height: 100%;*/
                line-height: 18px;
                /*padding: 7px 0;*/
                border-right: 1px solid rgba(255,255,255,0.5);
            }
            i {
                width: 32px;
                /*height: 32px;*/
                display: inline-block;
                height: 100%;
                padding: 7px 0;
                text-align: center;
            }
            i.hignLight{
                background: rgba(255,255,255,0.2);
            }
        }
        :hover {
            cursor: pointer;
        }
        :focus {
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
        padding: 0 30px;
        border-bottom: 1px solid #dcdcdc;
        .chatavatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            margin-right: 20px;
        }
        .chatname {
            font-size: 16px;
        }
        i.iconfont {
            font-size: 30px;
            margin-left: 20px;
            cursor: pointer;
        }
        div {
            width: 50%;

        }
        div:last-child {
            text-align: right;
        }
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
        .top {
            border-bottom: 1px solid #dcdcdc;
            padding: 20px;
            position: relative;
            .avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin: 0 auto;
            }
            .uname {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin-top: 20px;
            }
            .openmsg {
                border: 0;
                background: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                right: 20px;
                cursor: pointer;
                outline: none;
                i {
                    color: #fff;
                    font-size: 24px;
                }
            }
        }
        .nickname {
            font-size: 14px;
            margin-top: 20px;
            span {
                color: #333;
                font-weight: bold;
            }
        }
    }

    #dapp {
        position: relative
    }

    .dappBox {
        width: 50%;
        margin: auto;
        height: 500px;
        position: absolute;
        background: #dcdcdc;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0
    }

    .dappBox img {
        width: 60px;
        height: 60px;
        border-radius: 50%
    }

    .editorbox {
        border-top: 1px solid #dcdcdc;
        height: 260px
    }

    .toolbar {
        padding: 10px 11px 0;
        li {
            float: left;
            margin-right: 10px;
            .line {
                display: inline-block;
                color: #dcdcdc;
                width: 1px;
                margin: 2px 20px;
            }
            .itemActive {
                background: #f2f2f2
            }
        }
    }

    .funicon {
        li {
            position: relative;
            .tips {
                position: absolute;
                width: 64px;
                height: 28px;
                right: -10px;
                bottom: -20px;
                font-size: 12px;
                color: #fff;
                background: #333;
                line-height: 28px;
                text-align: center;
                border-radius: 3px;
                box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.35);
            }
        }
    }

    .tipList {
        position: absolute;
        right: 0;
        z-index: 1;
        background: #333;
        color: #fff;
        white-space: normal;
        width: 192px;
        div{
            cursor: pointer;
            padding:5px 8px;
        }
    }
</style>
<style>
    .quill-editor {
        height: 180px;
    }

    /*.quill-editor .ql-editor{height: 180px;}*/
    .quill-editor .ql-toolbar.ql-snow, .quill-editor .ql-container.ql-snow {
        border: 0
    }

    .quill-editor .ql-toolbar.ql-snow {
        display: none
    }
    em{font-style: italic}
    #cke_editor1{display:none }
</style>