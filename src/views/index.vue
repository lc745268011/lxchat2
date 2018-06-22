<template>
    <div>
        <lx-header></lx-header>
        <div class="contanier vCenter">
            <div id="userlist" :style="{'height':listheight+'px'}">
                <tree></tree>
            </div>
            <div id="userchat" :style="{'height':listheight+'px'}">

            </div>
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
                listheight:''
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
            }
        },
    }
</script>

<style scoped>
    #userlist{
        padding:0 20px;
    }
</style>