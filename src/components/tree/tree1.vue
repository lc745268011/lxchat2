<template>
    <ul class="tree-menu">
        <li v-for="(item, index) in data" :class="item.tid==0||item.children ? '' : 'avatar'"
            v-show="currentTab!='message'">
            <span @click="toggle(item, index)" class="listTitle"
                  :style="{'padding-left':(parseInt(item.tid)+1)*20+'px'}" v-show="!item.last">
            <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text',item.tid=='0'?'first':'',currentTab=='message'?'message':'',currentTab=='dapp'?'dapp':'']"></i>
            <img :src="item.avatar" alt="" class="avatarImg">{{item.gname}}
                <i :class="['iconfont','star',item.star?'addStar':'']" v-show="item.last" @click.stop="addstar(item)">&#xe6b9;</i>
            </span>
            <span @click="toggle(item, index)" :style="{'padding-left':(parseInt(item.tid)+1)*20+'px'}"
                  v-show="item.last" class="clearfix">
            <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text',item.tid=='0'?'first':'',currentTab=='message'?'message':'',currentTab=='dapp'?'dapp':'']"></i>
            <img :src="item.avatar" alt="" class="avatarImg fl">
            <div class="fl" style="width: 70%;">
                <p>{{item.gname}}</p><p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap">{{item.position}}</p>
            </div>
            <i :class="['iconfont','star',item.star?'addStar':'']" v-show="item.last" @click.stop="addstar(item)">&#xe6b9;</i>
            </span>
            <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
        </li>
        <li v-for="(item, index) in data" :class="item.tid==0||item.children ? '' : 'avatar'"
            v-show="currentTab=='message'">
            <span @click="toggle(item, index)" class="listTitle" v-show="item.tid=='0'">
            <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text',item.tid=='0'?'first1':'',currentTab=='message'?'message':'',currentTab=='dapp'?'dapp':'']"></i>
            <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text',item.tid=='0'?'first':'',currentTab=='message'?'message':'',currentTab=='dapp'?'dapp':'']"></i>
                <div style="display: inline-block">
                    <div>
                        <p>{{item.gname}}</p>
                    </div>
                </div>
            </span>
            <span @click="toggle(item, index)" v-show="item.tid!='0'" class="clearfix">
                <img :src="item.avatar" alt="" class="avatarImg messageavatar fl">
                <div style="width: 80%" class="fl">
                    <div class="clearfix">
                        <p class="fl name">{{item.gname}}</p>
                        <p class="fr time">09:00</p>
                    </div>
                    <div class="clearfix">
                    <p class="msg fl">{{item.msg}}</p>
                    <i :class="['iconfont fr','star',item.star?'addStar':'']" v-show="item.last"
                       @click.stop="addstar(item)">&#xe6b9;</i>

                    </div>
                </div>

            </span>
            <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
        </li>
    </ul>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'treeMenu',
        props: {
            data: Array,
        },
        data() {
            return {
                folderIconList: [],
                scope: {},
                star: false,
            }
        },
        computed: {
            ...mapState({
                ucard: function (state) {
                    return state.ucard
                },
                currentTab: function (state) {
                    return state.currentTab

                }
            }),
        },

        created() {
            this.data.forEach((item, index) => {
                if (item.children && item.children.length) {
                    this.folderIconList[index] = 'folder';
                }
            });
        },
        methods: {
            doTask(index) {
                this.$set(this.scope, index, !this.scope[index]);
                this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
            },
            toggle(item, index) {
                if (item.children && item.children.length) {
                    this.doTask(index);
                } else if (!item.children && item.tid != 0) {
                    if (this.$store.state.currentTab == 'tongxunlu') {
                        this.$store.commit('ucard', true);
                        this.$store.commit('clickId', index);
                        this.$store.commit('reciveavatar', item.avatar);
                        this.$store.commit('replyusername', item.gname);
                    } else {
                        this.$store.commit('ucard', false);
                        this.$store.commit('reciveavatar', item.avatar);
                        this.$store.commit('replyusername', item.gname);
                    }

                }
            },
            addstar(item) {
                item.star = !item.star;
                var addPush = {
                    "recivename": item.gname,
                    "sendname": "我是用户",
                    "sendtime": "09:00",
                    "lastmsg": "青岛河北商会-秘书长",
                    "sendavatar": "",
                    "reciveavatar": item.avatar,
                    "id": 5
                };
                this.$store.state.conversion.push(addPush)
                /* this.$http.get('/api/conversion')//代替http://localhost:3000/getNewsList
                     .then((res) => {
                         res.data.push(addPush);
                         this.$store.commit('conversion',res.data);
                     }, (err) => {
                         console.log(err)
                     })*/

            },
        }
    }
</script>

<style scoped>
    .tree-menu {
        list-style: none;
    }

    .tree-menu li {
        line-height: 1.5;
    }

    .tree-menu li span {
        width: 100%;
        display: block;
        padding: 10px 20px;
        font-size: 14px;
        color: #666;
        cursor: pointer;
        height: 60px;
        border-bottom: 1px solid #dcdcdc;
    }

    .tree-menu li span:hover {
        background: #d5d5d5
    }

    .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        vertical-align: -2px;
        background-position: center;
        margin-right: 10px;
    }

    .icon.folder {
        background-image: url(../../assets/img/tree-2.png);
        transform: rotate(0deg);
        transition: transform 0.4s ease-out;

    }

    .icon.first.dapp {
        background-image: url(../../assets/img/dapp.png) !important;
        transform: rotate(0deg);
        transition: transform 0.4s ease-out;

    }

    .icon.first.message {
        background-image: url(../../assets/img/hudong.png) !important;
        transform: rotate(0deg);
        transition: transform 0.4s ease-out;

    }

    .icon.folder-open {
        background-image: url(../../assets/img/tree-2.png);
        transform: rotate(90deg);
        transition: transform 0.4s ease-out;
    }

    .icon.folder-open.first {
        transform: rotate(0deg);
        transition: transform 0.4s ease-out;
    }

    .icon.file-text {
        /*background-image: url(../../assets/img/file-text.png);*/
        display: none;
    }

    .icon.first {
        background-image: url(../../assets/img/tree-1.png) !important;
        display: inline-block;
    }

    .icon.first1 {
        background-image: url(../../assets/img/tree-2.png) !important;
        display: inline-block;
        width: 10px;
    }

    /*.avatarImg {
        display: none
    }*/

    .avatar img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .star {
        float: right;
        color: #ccc;
        font-size: 15px;
    }

    .star.addStar {
        color: #ffd000
    }

    .tree-menu li span.listTitle {
        height: 40px;
        line-height: 20px;
        font-size: 14px;
        border-bottom: 1px solid #dcdcdc;
    }

    .name {
        font-size: 14px;
        color: #333
    }

    .time {
        font-size: 13px;
        color: #999
    }

    .msg {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80%;
        font-size: 13px;
        color: #999;
    }
</style>