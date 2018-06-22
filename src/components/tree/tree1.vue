<template>
    <ul class="tree-menu">
        <li v-for="(item, index) in data" :style="{'padding-left':item.tid*20+'px'}">
            <span @click="toggle(item, index)">
            <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text',item.tid=='0'?'first':'']"></i>
            {{item.menuName }}
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
        line-height: 2;
    }
    .tree-menu li span {
        cursor: default;
    }
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
</style>