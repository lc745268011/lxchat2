<template>
    <div>
       <!-- <div id="div1">

            <ul>

                <li><strong>JavaScript 学习</strong></li>

                <li>响应用户操作</li>

                <li>事件驱动</li>

                <li>元素属性操作</li>

                <li>函数传参</li>

                <li>JavaScript组成</li>

                <li>JavaScript出现的位置、优缺点</li>

                <li>变量、类型、变量作用域</li>

                <li>闭包</li>

                <li>运算符</li>

                <li>程序流程控制</li>

                <li>定时器的使用</li>

            </ul>

        </div>-->
        <lx-header></lx-header>
        <div class="contanier vCenter indexBox" :style="{'height':winHeight+'px'}">
            <lx-aside></lx-aside>
            <lx-contact></lx-contact>
            <img src="../assets/logo.png" alt="" class="mslide" @click="showSlide">
        </div>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import lxHeader from '../components/header/index'
    import lxAside from '../components/aside/index'
    import lxContact from '../components/contact/index'

    export default {
        name: "index",
        data:function(){
            return{
                listheight:''
            }
        },
        components:{
            lxHeader,
            lxAside,
            lxContact
        },
        mounted() {
            this.init();
            window.onresize = () => {
                this.init();
            };
        },
        computed: {
            ...mapState({
                winHeight: function (state) {
                    return state.winHeight
                },
            }),
        },
        methods:{
            init() {
                this.$store.commit('winHeight',window.innerHeight-this.$store.state.listheight)

            },
            //在手机尺寸点击切换显示组织列表
            showSlide:function () {
                this.$store.commit('show',!this.$store.state.show);
            },
            /*init:function () {
                //右键自定义
                document.oncontextmenu = function (ev)

                {

                    var oEvent=ev||event;

                    var oDiv=document.getElementById('div1');

                    oDiv.style.display='block';

                    oDiv.style.left=oEvent.clientX+'px';

                    oDiv.style.top=oEvent.clientY+'px';

                    return false;

                };

                document.onclick=function ()

                {

                    var oDiv=document.getElementById('div1');

                    oDiv.style.display='none';

                };
            }*/

        },
    }
</script>

<style scoped lang="scss">
    #cen {font-size:36px; color:#60F; text-align:center;}

    #div1 { position:absolute; display:none;z-index: 999 }

    #div1 ul { position:absolute; float:left; border:1px solid #979797;background:#f1f1f1; padding:2px; box-shadow:2px 2px 2px rgba(0, 0, 0, .6); width:230px; overflow:hidden; }

    #div1 ul li { float:left; clear:both; height:24px; cursor:pointer; line-height:24px; white-space:nowrap; padding:0 30px; width:100%; display:inline-block; }

    #div1 ul li:hover { background:#E6EDF6; border:1px solid #B4D2F6; }
</style>
