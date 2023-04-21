<template>
    <L>
        <template #header>人员矩阵</template>
        <template #default>
            <div class="w">
                <vxe-table
                    :row-style="{backgroundColor:'#000000',color:'#ffffff'}"
                    border
                    :cell-style="cellStyle"
                    :data="tableData"
                    :edit-config="{trigger: 'click', mode: 'cell'}"
                >
                    <vxe-column type="seq" width="60"></vxe-column>
                    <vxe-column field="name" title="Name"></vxe-column>
                    <vxe-column field="sex" title="Sex"></vxe-column>
                    <vxe-column field="age" title="Age">
                        <template #edit="{ row }">
                            <vxe-input v-model="row.age" type="text"></vxe-input>
                        </template>
                    </vxe-column>
                    <vxe-column field="attr1" title="Attr1"></vxe-column>
                    <vxe-column field="address" title="Address" show-overflow></vxe-column>
                </vxe-table>
            </div>
        </template>
    </L>
</template>

<script>
export default {
    data () {
        return {
            tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        }
    },
    methods: {
        headerCellStyle ({ column, columnIndex }) {
            if (column.property === 'name') {
                return {
                    backgroundColor: '#f60',
                    color: '#ffffff'
                }
            }
        },
        cellStyle ({ row, rowIndex, column }) {
            if (column.property === 'sex') {
                if (row.sex === 'Women') {
                    return {
                        backgroundColor: '#187',
                        color: '#ffffff'
                    }
                } else if (row.age === 24) {
                    return {
                        backgroundColor: '#2db7f5',
                        color: '#000'
                    }
                }
            }
            if ([2, 3, 5].includes(rowIndex)) {
                return {
                    backgroundColor: 'red',
                    color: '#ffffff'
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
.my-downpanel1 {
  background-color: #fff;
  border: 1px solid #e8eaec;
}

.page-left {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
</style>
