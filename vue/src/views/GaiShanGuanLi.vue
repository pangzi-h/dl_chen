<template>
    <L>
        <template #header>改善看板</template>
        <template #default>
            <div class="w">
                <vxe-table
                        ref="xTable"
                        height="490"
                        border
                        round
                        resizable
                        show-overflow
                        :data="tableData"
                        :edit-config="{trigger: 'click', mode: 'cell'}"
                        :header-row-style="{backgroundColor:'#ea5711',color:'#ffffff'}"
                        :row-style="{backgroundColor:'#000000',color:'#ffffff'}"
                        :scroll-y="{enabled: false}"
                        @edit-closed="submit"
                >
                    <vxe-column title="日期" field="datetime" :edit-render="{autofocus: '.vxe-input--inner'}">
                        <template #edit="{ row }">
                            <vxe-input v-model="row.datetime"></vxe-input>
                        </template>
                    </vxe-column>

                    <vxe-column title="问题描述" field="wentimiaoshu" :edit-render="{autofocus: '.vxe-input--inner'}">
                        <template #edit="{ row }">
                            <vxe-input v-model="row.wentimiaoshu"></vxe-input>
                        </template>
                    </vxe-column>

                    <vxe-column title="改善行动" field="gaishanxingdong" :edit-render="{autofocus: '.vxe-input--inner'}">
                        <template #edit="{ row }">
                            <vxe-input v-model="row.gaishanxingdong"></vxe-input>
                        </template>
                    </vxe-column>

                    <vxe-column title="负责人" field="fuzeren" :edit-render="{autofocus: '.vxe-input--inner'}">
                        <template #edit="{ row }">
                            <vxe-input v-model="row.fuzeren"></vxe-input>
                        </template>
                    </vxe-column>

                    <vxe-column title="完成时间" field="wanchengshijian" :edit-render="{autofocus: '.vxe-input--inner'}">
                        <template #edit="{ row }">
                            <vxe-input v-model="row.wanchengshijian"></vxe-input>
                        </template>
                    </vxe-column>

                </vxe-table>
                <div @click="insert()">+</div>
            </div>
        </template>
    </L>

</template>

<script>
export default {
    data      : function () {
        return {
            tableData: [
                {},
            ],
        }
    },
    methods   : {
        submit() {
            console.log(this.tableData);
        },
        async insert() {
            await this.$refs.xTable.insertAt({}, -1)
        },
    }
}
</script>

<style>
    .w{
        /*background-color: red;*/
    }
</style>