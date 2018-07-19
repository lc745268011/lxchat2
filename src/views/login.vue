<template>
    <div>
        <lheader></lheader>
        <div id="section">
            <div class="contanier clearfix">
                <div class="fr loginBox">
                    <div class="tab clearfix">
                        <div :class="tabshow=='tabuser'?'fl active':'fl'" @click="changeTab('tabuser')">帐户密码登录</div>
                        <div :class="tabshow=='tabewm'?'fl active':'fl'" @click="changeTab('tabewm')">二维码登录</div>

                    </div>
                    <div class="tabewm" v-show="tabshow=='tabewm'">
                        <img src="../assets/img/erwei.png" alt="" class="ewm">
                        <p>请使用联信app扫二维码登录 <span>刷新</span></p>
                    </div>
                    <div class="tabuser" v-show="tabshow=='tabuser'">
                        <input type="text" placeholder="请输入手机号/邮箱" class="username"  v-model='username' @focus="onFocus" @blur="onBlur">
                        <input :type="inputType" placeholder="请输入登录密码" class="password"  v-model='password' @focus="onFocus1" @blur="onBlur1">
                        <router-link to="/index" target="_blank">
                            <button class="submit">登录</button>
                        </router-link>
                        <div class="clearfix linkBtn">
                            <router-link to="/regisiter" target="_blank">
                                <span class="fl">新用户注册</span>
                            </router-link>
                            <router-link to="/forget" target="_blank">
                                <span class="fr">忘记密码</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            在线人数：166/在线访客：张三，李四
        </div>
    </div>

</template>

<script>
    import lheader from '../components/header/loginheader'

    export default {
        name: "login",
        data:function(){
            return{
                tabshow:'tabuser',
                username:'',
                password:'',
                inputType:'password'
            }
        },
        components:{
            lheader
        },
        mounted(){
            this.init()
        },
        methods:{
            init:function(){
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if(fIEVersion == 9) {
                        this.username="请输入手机号/邮箱"
                        this.password="请输入登录密码"
                        this.inputType='text'
                    }
                } else{
                    return -1;//不是ie浏览器
                }

            },
            changeTab:function (tabshow) {
                this.tabshow=tabshow;
            },
            onFocus:function () {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if(fIEVersion == 9) {
                        if(this.username=='请输入手机号/邮箱') {
                            this.username = ''
                        }
                    }
                } else{
                    return -1;//不是ie浏览器
                }

            },
            onBlur:function () {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if(fIEVersion == 9) {
                        if(this.username=='') {
                            this.username='请输入手机号/邮箱'
                        }
                    }
                } else{
                    return -1;//不是ie浏览器
                }

            },
            onFocus1:function () {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if(fIEVersion == 9) {
                        if(this.password=='请输入登录密码') {
                            this.password = ''
                            this.inputType="password"
                        }
                    }
                } else{
                    return -1;//不是ie浏览器
                }

            },
            onBlur1:function () {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if(fIEVersion == 9) {
                        if(this.password=='') {
                            this.password='请输入登录密码'
                            this.inputType="text"
                        }
                    }
                } else{
                    return -1;//不是ie浏览器
                }

            },
        }
    }
</script>

<style scoped>
    * {
        transition-property: all;
        -ms-transition-property: all;
        -moz-transition-property: all;
        -webkit-transition-property: all;
        -o-transition-property: all;
        -webkit-transition-duration: 0s;
        -moz-transition-duration: 0s;
        -ms-transition-duration: 0s;
        -o-transition-duration: 0s;
    }
    .contanier{width: 1200px;margin: 0 auto}
    #section{background: url("../assets/img/loginbg.jpg");width: 100%}
    #section .loginBox{margin: 126px 0;background: #fff;width: 360px;height: 380px;border-radius: 6px;}
    #section .loginBox .tab{height: 53px;line-height: 51px;border-bottom: 1px solid #dcdcdc}
    #section .loginBox .tab>div{width: 50%;text-align: center;font-size: 16px;cursor: pointer;color: #333}
    #section .loginBox .tab>div.active{border-bottom: 2px solid #2e9cf1;}
    #section .loginBox .tabuser{width: 312px;margin: 0 auto;margin-top: 40px;}
    .username,.password,.submit{width: 100%;height: 44px;font-size: 16px;margin-bottom: 23px;padding: 0 17px;border: 1px solid #dcdcdc;border-radius: 4px;}
    .submit{background: #2e9cf1;color: #fff;border: 0;cursor: pointer}
    input:focus{box-shadow: 0 0 11px rgba(84, 166, 239, 06);border-color: #218CD9;}
    .linkBtn a{font-size: 16px;color: #2e9cf1}
    .tabewm{text-align: center}
    .tabewm p{font-size: 14px;}
    .tabewm p span{color: #2e9cf1;cursor: pointer}
    .ewm{width: 180px;height: 180px;margin: 40px auto;}
    @media (max-width: 1199px) {
        .contanier{width: 970px;margin: 0 auto}
    }
    @media (max-width: 969px) {
        .contanier{width: 780px;margin: 0 auto}
        #nav {
            margin-left: 30px;
        }
        #nav li{
            margin-left: 30px;
        }
    }
    @media (max-width: 779px) {
        .contanier{width: 680px;margin: 0 auto}
        #section .loginBox{margin: 100px auto}
    }
    @media (max-width: 679px) {
        .contanier{width: 480px;margin: 0 auto}
        #nav{display: none}
        #section .loginBox{margin: 100px auto;float: none}
    }
    @media (max-width: 479px) {
        .contanier{width: 300px;margin: 0 auto}
        #section .loginBox{margin: 50px auto;width: 100%}
        #section .loginBox .tabuser{width: 90%}
    }
</style>