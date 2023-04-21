<template>
    <L>
        <template #header>产品开线&换线检查表</template>
        <template #default>
            <div class="w">
                <table>
                    <tr>
                        <td style="width:40px;">序号</td>
                        <td style="width:222px;">项目</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">料号</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>是否按照BOP作业</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>是否按照TKC检验</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>dummysample是否点检并记录</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>TPM是否点检并记录</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>LOT表是否正确填写</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>BOP/KTC/LOT表是否正确</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>确认原材料是否清线完成</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>下线物料是否均独立包装并且有对应的标示</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>上线的物料是否与LOT表一致</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td colspan="2">备注</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td colspan="2">产线QC确认</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                    <tr>
                        <td colspan="2">产线拉长确认</td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                        <td @click="gx"></td>
                    </tr>
                </table>
            </div>
        </template>
    </L>
</template>

<script>
export default {
    data() {
        return {
            gridOptions2: {
                border      : false,
                showOverflow: false,
                height      : 400,
                showHeader  : false,
                columns     : [],
                data        : []
            }
        }
    },
    created() {
        const myColumns2 = [
            {field: 'id', title: 'ID'},
            {field: 'name', title: 'Name'},
            {field: 'role', title: 'Role'},
            {field: 'sex', title: 'Sex'},
            {field: 'age', title: 'Age'},
            {field: 'address', title: 'Address'},
            {field: 'rate', title: 'Rate'},
            {field: 'date3', title: 'Date'},
            {field: 'updateTime', title: 'UpdateTime'},
            {field: 'createTime', title: 'CreateTime'}
        ]
        const myData2    = [
            {id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2020-09-16', createTime: '2020-09-16'},
            {id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, rate: 2, address: 'Beijin', date3: '20:30', updateTime: '2019-09-16', createTime: '2020-09-16'},
            {id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, rate: 6, address: 'Shanghai', date3: '20:30', updateTime: '2020-09-16', createTime: '2021-09-16'},
            {id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2020-09-16', createTime: '2020-09-16'},
            {id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, rate: 10, address: 'Shanghai Beijin Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16'},
            {id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2018-09-16', createTime: '2020-09-16'},
            {id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, rate: 3, address: 'Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16'},
            {id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, rate: 2, address: 'Beijin Beijin Beijin', date3: '20:30', updateTime: '2017-09-16', createTime: '2020-09-16'},
            {id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: 'Man', age: 29, rate: 3, address: 'Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16'},
            {id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 50, rate: 5, address: 'Shenzhen', date3: '20:30', updateTime: '2017-09-16', createTime: '2020-09-16'}
        ]
    },
    methods: {
        gx: function (e) {
            let k = 'gx'
            let v = (e.target.getAttribute(k) - 0 + 1) % 3
            switch (v) {
                case 0:
                    e.target.setAttribute('style', 'background:black')
                    break
                case 1:
                    e.target.setAttribute('style', 'background:green')
                    break
                case 2:
                    e.target.setAttribute('style', 'background:red')
                    break
            }
            e.target.setAttribute(k, v)
        }
    }
}
</script>

<style scoped lang="less">
.w {
  display: flex;
  justify-content: center;

  table {
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-all;

    td {
      border: 1px solid #938585;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
