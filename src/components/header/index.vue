<template>
    <div id="header" :style="{'background-color':skintype}">
        <!--width大于769-->
        <div class="clearfix big">
            <div class="fl">
                <ul class="clearfix">
                    <li class="fl first"><router-link to="/setting"><img src="https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg" alt="" class="userHeadImg"></router-link></li>
                    <li :class="{'active':currentTabstate==='message'}"><a href="javascript:;" @click="changenav('message')">互动</a><p class="sanjiao"></p></li>
                    <li :class="{'active':currentTabstate==='tongxunlu'}" @click="changenav('tongxunlu')"><a href="javascript:;">通讯录</a><p class="sanjiao"></p></li>
                    <li :class="{'active':currentTabstate==='dapp'}"><a href="javascript:;" @click="changenav('dapp')">DAPP</a><p class="sanjiao"></p></li>
                </ul>
            </div>
            <div class="fr">
                <ul class="clearfix">
                    <li class="fl searchBox">
                        <div class="search">
                            <input type="text" placeholder="搜索">
                            <i class="iconfont searchBtn">&#xe603;</i>
                        </div>

                    </li>
                    <li class="fl skin"><a href="javascript:;" @click="skin"><img src="../../assets/img/skin.png" alt=""></a>
                        <ul v-show="skinlist" class="skinlist">
                            <li @click="skinchange('#fb6161')">红色</li>
                            <li @click="skinchange('#0e8de6')">蓝色</li>
                            <li @click="skinchange('black')">黑色</li>
                        </ul>
                    </li>
                    <li class="fl">
                        <router-link to="/login1">
                            <img src="../../assets/img/close.png" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--width小于769-->
        <div class="small">
            <div class="fl">
                <ul class="clearfix">
                    <li class="fl"><img src="../../assets/logo.png" alt="" class="userHeadImg"></li>
                    <li class="fl active"><a href="javascript:;" @click="changenav('message')">互动</a></li>
                    <li class="fl"><a href="javascript:;" @click="changenav('tongxunlu')">通讯录</a></li>
                    <li class="fl"><a href="javascript:;" @click="changenav('dapp')">dapp</a></li>
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
    import {mapState} from 'vuex'

    export default {
        name: "index",
        data :function() {
            return {
                aheight:'',
                currentTab:'message',
                skinlist:false,
                skintype:'#fb6161'
            }
        },
        mounted (){
            this.init()
        },
        computed:{
            ...mapState({
                currentTabstate: function (state) {
                    return state.currentTab
                },
            }),
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
    #header .skin .skinlist{position: absolute;width: 100px;background: #f3f3f3;border-radius: 4px;    z-index: 999;right: 0}
    #header .skin .skinlist li{width: 100%;text-align: center;margin-left: 0;line-height: 2;padding: 5px 15px;border-bottom: 1px solid #dcdcdc;font-size: 14px;color: #666;cursor: pointer}
    #header .skin .skinlist li:last-child{border-bottom: 0;}
    .searchBox{position: relative;height: 60px}
    .searchBox>div.search{position: absolute;right: 10px;top: 50%;transform: translateY(-50%);overflow: hidden}
    .searchBox>div>input{height: 30px;padding:5px 5px 5px 8px;display: inline-block;border: 0;width: 160px;position: absolute;top: 0;left: 0;color: #666}
    .searchBtn{cursor:pointer;font-size: 20px;color: #999;position: absolute;right: 10px;top: 0}

</style>