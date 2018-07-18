<template>
    <div>
        <div id="section">
            <router-link to="/">返回</router-link>
            忘记密码
        </div>
    </div>

</template>

<script>
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
                if(this.username=='请输入手机号/邮箱') {
                    this.username = ''
                }
            },
            onBlur:function () {
                if(this.username=='') {
                    this.username='请输入手机号/邮箱'
                }
            },
            onFocus1:function () {
                if(this.password=='请输入登录密码') {
                    this.password = ''
                    this.inputType="password"
                }
            },
            onBlur1:function () {
                if(this.password=='') {
                    this.password='请输入登录密码'
                    this.inputType="text"
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
    #head{height: 80px;line-height: 80px}
    .loginBtn a{color: #2e9cf1;display: inline-block;width: 111px;height: 40px;border-radius: 20px;border: 2px solid #2e9cf1;text-align: center;font-size: 16px;line-height: 36px}
    #nav{margin-left: 70px}
    #nav li{float: left;font-size: 16px;margin-left: 60px;}
    #nav li a{color: #333}
    #nav li.active a,#section .loginBox .tab>div.active{color:#2e9cf1 }
    /*#section{background: url("../assets/img/loginbg.jpg");width: 100%}*/
    #section .loginBox{margin: 126px auto;background: #fff;width: 360px;height: 380px;border-radius: 6px;}
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