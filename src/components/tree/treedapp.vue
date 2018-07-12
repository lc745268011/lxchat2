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
                                "avatar":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531388445126&di=7e78479a5f5a7cd9b736823f869aa583&imgtype=0&src=http%3A%2F%2Fcdns2.freepik.com%2Ffree-photo%2Flaptop-computer-with-loud-speaker_318-39515.jpg"
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
                                "avatar":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531388445126&di=7e78479a5f5a7cd9b736823f869aa583&imgtype=0&src=http%3A%2F%2Fcdns2.freepik.com%2Ffree-photo%2Flaptop-computer-with-loud-speaker_318-39515.jpg"
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
                                "avatar":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531388445127&di=b92e9354558a01fc4e5386cdbbaf3de5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a0205818056ea84a0d304fb02a48.jpg"
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
                                "avatar":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531388445127&di=b92e9354558a01fc4e5386cdbbaf3de5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a0205818056ea84a0d304fb02a48.jpg"
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