<template>
    <div class="dialog">
    <el-dialog ref="dialogHW"
        title="提示"
        :visible.sync="visible"
        :close-on-click-modal="false"
        @close="QualityDialogClose" >

        <span slot="footer" class="dialog-footer">
            <el-button @click="QualityDialogClose">取 消</el-button>
            <el-button type="primary" @click="QualityDialogClose">确 定</el-button>
        </span>
    </el-dialog>
    </div>
</template>

<script>
export default {
    name: "QualityDialog",
    components: {},
    props: {
        QualityDialogFlag: {
            default: false
        },
    },
    data() {
        return {
            visible: false
        };
    },
    created() {
        console.log(this.$refs.dialogHW)
    },
    mounted() {},
    methods: {
        QualityDialogClose() {
            this.$emit("update:QualityDialogFlag", false);
        }
    },
    watch: {
        QualityDialogFlag() {
            this.visible = this.QualityDialogFlag;
        },
    }
};
</script>