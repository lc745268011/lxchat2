<template>
    <li>
        <div>{{ treelist.name }}</div>
        <ul>
            <item v-for="treelist in treelist.children"></item>
        </ul>
    </li>
</template>
<script>
    import item from './tree1'
    export default {
        data(){
            return{
                treelist:[]
            }
        },
        components:{
            item
        },
        mounted(){
            this.$http.post('http://localhost:8080/api/tree').then(response => {
                // success callback
                console.log(response.data.data)
                this.treelist=response.data.data
            }, response => {
                // error callback
            })
        }
    }

</script>

<style scoped>

</style>