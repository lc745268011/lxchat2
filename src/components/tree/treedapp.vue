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
                theData: [
                    {
                        "gid":0,
                        "gname":"个人应用",
                        "tid":0,
                        "children":[
                            {
                                "gname": "电子白板",
                                "tid":1,
                                "star":false,
                                "last":true,
                                "avatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg"
                            }
                        ]
                    },
                    {
                        "gid":1,
                        "gname":"我收到的",
                        "tid":0,
                        "children":[
                            {
                                "gname": "收到的邮件",
                                "tid":1,
                                "star":false,
                                "last":true,
                                "avatar":"https://tva1.sinaimg.cn/crop.0.23.1242.1242.180/8693225ajw8fbimjimpjwj20yi0zs77l.jpg"
                            }
                        ]
                    },
                    {
                        "gid":2,
                        "gname":"我发出的",
                        "tid":0,
                        "children":[
                            {
                                "gname": "发出的邮件",
                                "tid":1,
                                "star":false,
                                "last":true,
                                "avatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg"
                            }
                        ]
                    },
                    {
                        "gid":3,
                        "gname":"联信科技公司应用",
                        "tid":0,
                        "children":[
                            {
                                "gname": "我的电视",
                                "tid":1,
                                "star":false,
                                "last":true,
                                "avatar":"https://tva2.sinaimg.cn/crop.0.8.751.751.180/961a9be5jw8fczq7q98i7j20kv0lcwfn.jpg"
                            }
                        ]
                    },
                    {
                        "gid":4,
                        "gname":"青岛河北商会应用",
                        "tid":0
                    }
                ],
                menuName: 'menuName', // 显示菜单名称的属性
            }
        },
       /* mounted(){
            this.init()
        },
        methods:{
            init(){
                this.$http.get('/api/dapp')//代替http://localhost:3000/getNewsList
                    .then((res) => {
                        this.theData = res.data
                    }, (err) => {
                        console.log(err)
                    })
            }
        }*/
    }

</script>

<style scoped>

</style>