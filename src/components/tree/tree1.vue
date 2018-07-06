<template>
    <ul class="tree-menu">
        <li v-for="(item, index) in data" :class="item.tid==0||item.children ? '' : 'avatar'">
            <span @click="toggle(item, index)" :style="{'padding-left':(parseInt(item.tid)+1)*20+'px'}">
            <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text',item.tid=='0'?'first':'']"></i>
            <img :src="item.avatar" alt="" class="avatarImg">{{item.menuName }}
            </span>
            <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'treeMenu',
        props: {
            data: Array,
        },
        data () {
            return {
                folderIconList: [],
                scope: {}
            }
        },
        created () {
            this.data.forEach((item, index) => {
                if (item.children && item.children.length) {
                    this.folderIconList[index] = 'folder';
                }
            });
        },
        methods: {
            doTask (index) {
                this.$set(this.scope, index, !this.scope[index]);
                this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
            },
            toggle (item, index) {
                if (item.children && item.children.length) {
                    this.doTask(index);
                }
            }
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
        padding: 5px 0;
        padding-right:20px;
        font-size: 14px;
        color: #666;
        cursor: pointer;
    }
    .tree-menu li span:hover{background: #d5d5d5}
    .icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
        vertical-align: -2px;
        background-position: center;
        margin-right: 10px;
    }
    .icon.folder {
        background-image: url(../../assets/img/tree-2.png);
        transform:rotate(0deg);transition: transform 0.4s ease-out;

    }
    .icon.folder-open {
        background-image: url(../../assets/img/tree-2.png);
        transform:rotate(90deg);transition: transform 0.4s ease-out;
    }
    .icon.folder-open.first{
        transform:rotate(0deg);transition: transform 0.4s ease-out;
    }
    .icon.file-text {
        /*background-image: url(../../assets/img/file-text.png);*/
    }
    .icon.first{
        background-image: url(../../assets/img/tree-1.png);
    }

    .avatarImg {
        display: none
    }

    .avatar img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
    }
</style>