<template>
    <div>
        <my-tree :data="theData" :name="menuName"></my-tree>
    </div>
</template>
<script>
    import myTree from './tree1.vue'
    export default {
        components: {
            myTree
        },
        data () {
            return {
                theData: [],
                menuName: 'menuName', // 显示菜单名称的属性
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                this.$http.get('/api/mailList')//代替http://localhost:3000/getNewsList
                    .then((res) => {
                        this.theData = res.data
                    }, (err) => {
                        console.log(err)
                    })
            }
        }
    }

</script>

<style scoped>

</style>