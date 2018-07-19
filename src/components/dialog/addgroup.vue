<template>
    <div class="addGroup">
        <el-dialog
                title="创建群组"
                :visible.sync="dialogVisible1"
                width="650px"
                :before-close="handleClose">
            <span>请输入群组名称 </span><el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-transfer
                    filterable
                    :filter-method="filterMethod"
                    filter-placeholder="请输入用户名称"
                    v-model="value2"
                    :titles="['用户列表', '群组成员']"
                    :data="data2">
            </el-transfer>
            <span slot="footer" class="dialog-footer">
    <el-button @click="closed">取 消</el-button>
    <el-button type="primary" @click="closed">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        data() {
            const generateData2 = _ => {
                const data = [];
                const cities = ['张三', '李四', '王麻子', '王五', '小周', '小刘'];
                const pinyin = ['zhangsan', 'lisi', 'wangmazi', 'wangwu', 'xiaozhou', 'xiaoliu'];
                cities.forEach((city, index) => {
                    data.push({
                        label: city,
                        key: index,
                        pinyin: pinyin[index]
                    });
                });
                return data;
            };
            return {
                data2: generateData2(),
                value2: [],
                filterMethod(query, item) {
                    return item.pinyin.indexOf(query) > -1;
                },
                input: ''
            };
        },
        computed:{
            ...mapState({
                dialogVisible1:function (state) {
                    return state.dialogVisible
                }
            }),
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$store.commit('dialogVisible',false);
                    })
                    .catch(_ => {                this.$store.commit('dialogVisible',false);
                    });
            },
            closed(){
                this.$store.commit('dialogVisible',false);
            }
        }
    };
</script>

<style>
    label{margin-bottom: 0}
    .el-input{width: 460px;margin: 0 0 20px 20px}
    .el-transfer-panel__body .el-input{width: 80%;margin: 10px 20px}
    .el-popup-parent--hidden{padding-right: 0!important;}
</style>