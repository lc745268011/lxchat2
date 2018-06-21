<template>
    <div id="header">
        <!--width大于769-->
        <div class="clearfix big">
            <div class="fl">
                <ul class="clearfix">
                    <li class="fl"><img src="../../assets/logo.png" alt="" class="userHeadImg"></li>
                    <li class="fl active"><a href="">通讯录</a></li>
                    <li class="fl"><a href="">消息</a></li>
                    <li class="fl"><a href="">应用</a></li>
                </ul>
            </div>
            <div class="fr">
                <ul class="clearfix">
                    <li class="fl"><input type="text" placeholder="搜索" class="search"></li>
                    <li class="fl"><a href="">换肤</a></li>
                    <li class="fl"><a href="">退出</a></li>
                </ul>
            </div>
        </div>
        <!--width小于769-->
        <div class="small">
            <div class="fl">
                <ul class="clearfix">
                    <li class="fl"><img src="../../assets/logo.png" alt="" class="userHeadImg"></li>
                    <li class="fl active"><a href="">通讯录</a></li>
                    <li class="fl"><a href="">消息</a></li>
                    <li class="fl"><a href="">应用</a></li>
                </ul>
            </div>
            <div class="fr">
                <img src="../../assets/img/menu.png" alt="" class="rightBoxBtn">
              <!--  <ul class="clearfix">
                    <li class="fl"><input type="text" placeholder="搜索" class="search"></li>
                    <li class="fl"><a href="">退出</a></li>
                </ul>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data :function() {
            return {
                aheight:''
            }
        },
        mounted (){
            this.init()
        },
        methods:{
            init:function () {
               this.aheight=document.getElementById('header').scrollHeight ;
               this.$store.commit('setId',this.aheight)
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    #header{background-color: $color}
</style>