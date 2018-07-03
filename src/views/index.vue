<template>
    <div>
        <lx-header></lx-header>
        <div class="contanier vCenter indexBox">
            <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']" v-show="currentTab == 'xiaoxi'">消息
            </div>
            <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']"  v-show="currentTab == 'tongxunlu'">通讯录
                <tree></tree>
            </div>
            <div id="userlist" :style="{'height':listheight+'px'}" :class="[show?'show':'noshow']"  v-show="currentTab == 'dapp'">dapp
            </div>
            <div id="userchat" :style="{'height':listheight+'px'}">

            </div>
            <img src="../assets/logo.png" alt="" class="mslide" @click="showSlide">
        </div>

    </div>
</template>

<script>
    import lxHeader from '../components/header/index'
    import tree from '../components/tree/tree'

    export default {
        name: "index",
        data:function(){
            return{
                listheight:'',
                show:false,
            }
        },
        components:{
            lxHeader,
            tree
        },
        mounted (){
            this.init()
        },
        methods:{
            //初始化时计算左右两栏高度
            init:function () {
                this.listheight=document.documentElement.clientHeight-this.$store.state.listheight
            },
            //在手机尺寸点击切换显示组织列表
            showSlide:function () {
                this.show=!this.show
            }
        },
        computed:{
            currentTab () {
                return this.$store.state.currentTab
            }
        }
    }
</script>

<style scoped>
    /*#userlist{
        padding:0 20px;
    }*/
</style>