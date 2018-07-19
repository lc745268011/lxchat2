<template>
    <div id="head">
        <div class="contanier clearfix">
            <div id="logo" class="fl">
                <img src="../../assets/img/logo.png" alt="">
            </div>
            <ul id="nav" class="clearfix fl">
                <li>
                    <router-link to="/login">首页</router-link>
                </li>
                <li>
                    <router-link to="/contacts">找人脉</router-link>
                </li>
                <li>
                    <router-link to="/industry">找行业</router-link>
                </li>
                <li>
                    <router-link to="/dapp">找供求</router-link>
                </li>
                <li>
                    <router-link to="/login1">聊天</router-link>
                </li>
                <li>
                    <router-link to="/group">联盟</router-link>
                </li>
            </ul>
            <div class="loginBtn fr">
                <router-link to="/login">登录/注册</router-link>
                <router-link to="/index" target="_blank">在线服务</router-link>/
                <router-link to="/backstage" target="_blank">后台管理</router-link>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginheader"
    }
</script>

<style scoped>
    .contanier{width: 1200px;margin: 0 auto}
    #head{height: 80px;line-height: 80px}
    .loginBtn a{color: #2e9cf1;display: inline-block;width: 111px;height: 40px;border-radius: 20px;border: 2px solid #2e9cf1;text-align: center;font-size: 16px;line-height: 36px}
    #nav{margin-left: 70px}
    #nav li{float: left;font-size: 16px;margin-left: 60px;}
    #nav li a{color: #333}
    #nav li a.router-link-active,#section .loginBox .tab>div.active{color:#2e9cf1 }
</style>