<template>
    <div id="header" :style="{'background-color':skintype}">
        <!--width大于769-->
        <div class="clearfix big">
            <div class="fl">
                <ul class="clearfix">
                    <li class="fl"><img src="../../assets/logo.png" alt="" class="userHeadImg"></li>
                    <li :class="{'active':currentTab==='xiaoxi'}"><a href="javascript:;" @click="changenav('xiaoxi')">消息</a><p class="sanjiao"></p></li>
                    <li :class="{'active':currentTab==='tongxunlu'}" @click="changenav('tongxunlu')"><a href="javascript:;">通讯录</a><p class="sanjiao"></p></li>
                    <li :class="{'active':currentTab==='dapp'}"><a href="javascript:;" @click="changenav('dapp')">应用</a><p class="sanjiao"></p></li>
                </ul>
            </div>
            <div class="fr">
                <ul class="clearfix">
                    <li class="fl"><input type="text" placeholder="搜索" class="search"></li>
                    <li class="fl skin"><a href="javascript:;" @click="skin">换肤</a>
                        <ul v-show="skinlist" class="skinlist">
                            <li @click="skinchange('red')">红色</li>
                            <li @click="skinchange('blue')">蓝色</li>
                            <li @click="skinchange('black')">黑色</li>
                        </ul>
                    </li>
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
                aheight:'',
                currentTab:'xiaoxi',
                skinlist:false,
                skintype:'red'
            }
        },
        mounted (){
            this.init()
        },
        methods:{
            init:function () {
               this.aheight=document.getElementById('header').scrollHeight ;
               this.$store.commit('setId',this.aheight)
            },
            changenav:function (type) {
                this.currentTab=type;
                this.$store.commit('currentTab',this.currentTab)
            },
            skin:function () {
                this.skinlist=!this.skinlist
            },
            skinchange:function (type) {
                this.skinlist=!this.skinlist
                this.$store.commit('skintype',type)
                this.skintype=this.$store.state.skintype
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    #header{background-color: $color}
    #header .skin{position: relative}
    #header .skin .skinlist{position: absolute;width: 100px;background: #f3f3f3;border-radius: 4px;}
    #header .skin .skinlist li{width: 100%;text-align: center;margin-left: 0;line-height: 2;padding: 5px 15px;border-bottom: 1px solid #dcdcdc;font-size: 14px;color: #666;cursor: pointer}
    #header .skin .skinlist li:last-child{border-bottom: 0;}
</style>