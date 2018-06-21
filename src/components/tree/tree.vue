<template>
    <div>
        <ul>
            <li v-for="item in treelist">
                {{item.name}}
                <ul>
                    <li v-for="item1 in item.children">{{item1.name}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                treelist:[]
            }
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