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
                        "gname":"个人好友",
                        "tid":0,
                        "children":[
                            {
                                "gname": "小学同学",
                                "tid":1,
                                "children":[
                                    {
                                        "gname": "张三",
                                        "tid":1,
                                        "star":false,
                                        "position":"联信科技-研发总监联信科技-研发总监联信科技-研发总监",
                                        "avatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "gid":1,
                        "gname":"联信科技公司",
                        "tid":0,
                        "children":[
                            {
                                "gname": "技术部",
                                "tid":1,
                                "children":[
                                    {
                                        "gname": "张三",
                                        "tid":1,
                                        "star":false,
                                        "position":"联信科技-研发总监",
                                        "avatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "gid":2,
                        "gname":"青岛河北商会",
                        "tid":0,
                        "children":[
                            {
                                "gname": "李四",
                                "tid":1,
                                "star":false,
                                "position":"青岛河北商会-秘书长",
                                "avatar":"https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg"
                            }
                        ]
                    },
                    {
                        "gid":3,
                        "gname":"昕苑丽都社区",
                        "tid":0,
                        "children":[
                            {
                                "gname": "王麻子",
                                "tid":1,
                                "star":false,
                                "position":"B座501业主",
                                "avatar":"https://tva2.sinaimg.cn/crop.0.8.751.751.180/961a9be5jw8fczq7q98i7j20kv0lcwfn.jpg"
                            }
                        ]
                    },
                    {
                        "gid":4,
                        "gname":"智慧城市",
                        "tid":0
                    },
                    {
                        "gid":5,
                        "gname":"我的设备",
                        "tid":0,
                        "children":[
                            {
                                "gname": "我的冰箱",
                                "tid":1,
                                "star":false,
                                "position":"B座501业主",
                                "avatar":"https://tva2.sinaimg.cn/crop.0.8.751.751.180/961a9be5jw8fczq7q98i7j20kv0lcwfn.jpg"
                            },
                            {
                                "gname": "我的手机",
                                "tid":1,
                                "star":false,
                                "position":"B座501业主",
                                "avatar":"https://tva2.sinaimg.cn/crop.0.8.751.751.180/961a9be5jw8fczq7q98i7j20kv0lcwfn.jpg"
                            }
                        ]
                    },
                    {
                        "gid":6,
                        "gname":"附近的",
                        "tid":0
                    },
                ],
                        menuName: 'menuName', // 显示菜单名称的属性
                    }
            }
        /*mounted(){
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
        }*/
    }

</script>

<style scoped>

</style>