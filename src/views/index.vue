<template>
    <div>
        <lx-header></lx-header>
        <div class="contanier vCenter indexBox">
            <lx-aside></lx-aside>
            <lx-contact></lx-contact>
            <img src="../assets/logo.png" alt="" class="mslide" @click="showSlide">
        </div>

    </div>
</template>

<script>
    import lxHeader from '../components/header/index'
    import lxAside from '../components/aside/index'
    import lxContact from '../components/contact/index'

    import {mapState,mapActions} from 'vuex'
    export default {
        name: "index",
        data:function(){
            return{
                show:false,
            }
        },
        components:{
            lxHeader,
            lxAside,
            lxContact
        },
        methods:{
            //在手机尺寸点击切换显示组织列表
            showSlide:function () {
                this.show=!this.show
            },


        },
    }
</script>

<style scoped lang="scss">
</style>
