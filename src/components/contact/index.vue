<template>
    <div id="userchat" :style="{'height':listheight+'px'}">
        <div id="usercard" v-show="this.ucard">
            <div class="top">
                <img :src=reciveavatar alt="" class="avatar">
                <div class="uname">
                    {{replyusername}}
                </div>
                <button class="openmsg" :style="{'background-color':this.$store.state.skintype}" @click="openconversion(clickId)">
                    <i class="iconfont">&#xe712;</i>
                </button>
            </div>
            <div class="nickname bottom">昵称：<span>{{replyusername}}</span><br>职位：<span>{{replyusername}}</span></div>
        </div>
        <div v-show="!this.ucard">
            <div class="chatInfo vCenter">
                <div>
                    <img :src=reciveavatar alt="" class="chatavatar">
                    <span class="chatname">{{replyusername}}</span>
                </div>
                <div>
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

    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'

    export default {
        name: "index",
        data:function () {
          return{
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
              listheight:'',
              msgBoxHeight:'',
              content: '',
          }
        },
        mounted(){
            this.init()
        },
        watch: {
            clickId: function () {
                this.scrolldown()
            },
            msgBoxHeight:function () {
                this.msgBoxHeight=this.listheight-document.getElementsByClassName('editorbox')[0].offsetHeight-document.getElementsByClassName('chatInfo')[0].offsetHeight;
            }
        },
        computed:{
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
                }
            }),
        },
        methods:{
            init(){
                this.listheight=document.documentElement.clientHeight-this.$store.state.listheight
                this.msgBoxHeight=this.listheight-document.getElementsByClassName('editorbox')[0].offsetHeight-document.getElementsByClassName('chatInfo')[0].offsetHeight;
                this.scrolldown()
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
                this.$store.commit('ucard',this.false);
                this.$store.commit('clickId',i);
                this.$store.commit('reciveavatar',this.conversion[i].reciveavatar);
                this.$store.commit('replyusername',this.conversion[i].recivename);
                this.$store.commit('replyposition',this.conversion[i].lastmsg);
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
            //会话窗口滚动条在底部
            scrolldown:function(){
                this.$nextTick(function(){
                    var div = document.getElementsByClassName('msgBox');
                    div[0].scrollTop = div[0].scrollHeight;
                })
            },
        }
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
        div {
            width: 50%;

        }
        div:last-child{
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