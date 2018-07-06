<template>
    <div>
        <my-tree :data="theData" :name="menuName"></my-tree>
    </div>
</template>
<script>
    const myData = [
        {
            id: '1',
            menuName: '基础管理',
            tid:0
        },
        {
            id: '2',
            menuName: '商品管理',
            tid:0

        },
        {
            id: '3',
            menuName: '订单管理',
            tid:0,
            children: [
                {
                    menuName: '订单列表',
                    tid:'1',
                    children:[{
                        menuName:'列表1',
                        tid:'2',
                        avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg'
                    }]
                },
                {
                    menuName: '退货列表',
                    tid:'1',
                    avatar:'https://tva2.sinaimg.cn/crop.0.0.512.512.180/005LMAegjw8f2bp9qg4mrj30e80e8dg5.jpg'


                }
            ]
        },
        {
            id: '4',
            menuName: '商家管理',
            children: [],
            tid:0

        }
    ];
    import myTree from './tree1.vue'
    export default {
        components: {
            myTree
        },
        data () {
            return {
                theData: myData,
                menuName: 'menuName', // 显示菜单名称的属性
            }
        },
    }

</script>

<style scoped>

</style>