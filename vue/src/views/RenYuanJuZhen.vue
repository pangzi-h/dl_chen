<template>
    <L>
        <template #header>人员矩阵</template>
        <template #default>
            <div class="w">
                <div class="dashboard-container" @click="closeEdit()">
                    <div class="tableContent">
                        <vxe-table
                                resizable
                                width="100%"
                                height="600"
                                highlight-hover-row
                                border
                                show-overflow
                                :scroll-y="{enabled: false}"
                                ref="xTable"
                                :merge-cells="mergeCells"
                                :data="tableData"
                                :edit-config="{trigger: 'click', mode: 'cell', icon: 'fa fa-pencil'}"
                                :cell-style="cellStyle"
                        >
                            <vxe-table-colgroup title="Team:">
                                <template v-slot:header>
                                    <div class="first-col" @click.stop="closeEdit();iseditTeam=true">
                                        <div class="first-col-top">Team:</div>
                                        <vxe-input v-if="iseditTeam" type="text" class="teamnames" v-model="teamName"></vxe-input>

                                    </div>
                                </template>
                                <vxe-table-column field="lader" title="" width="100"></vxe-table-column>
                                <vxe-table-column field="avtar" title="照片" width="120">
                                    <template v-slot="{ row }">
                                        <div style="position: relative">
                                            <input type="file" @change='handleFileChange($event,row)' accept=".jpg,.jpeg,.png" name="file" style="opacity:0;position: absolute; top: 0;left: 0;right: 0;bottom: 0"/>
                                            <img :src="row.avtar" alt="" class="imgavtar">
                                        </div>
                                    </template>
                                </vxe-table-column>
                                <vxe-table-column field="name" title="姓名" :edit-render="{autofocus: '.custom-input'}" width="120">
                                    <template v-slot:edit="{ row }">
                                        <vxe-input type="text" v-model="row.name"></vxe-input>
                                    </template>
                                </vxe-table-column>
                                <vxe-table-colgroup title="工作内容">
                                    <vxe-table-column width="100" v-for="(item,index) in gongzuodata" :key="index" :field="item.name" title="">
                                        <template v-slot:header>
                                            <div class="first-col-gongzuo" @click.stop="tianxie(item,index)">
                                                <div class="teamnames" v-if="!item.isedit">{{ item.content }}</div>
                                                <vxe-input v-if="item.isedit" type="text" class="teamnames" v-model="item.content"></vxe-input>
                                            </div>
                                        </template>
                                        <template v-slot="{ row,rowIndex }">
                                            <div class="clickcontent">
                                                <div class="rongall" @click.stop="tisheng(row,item.name,index)">
                                                    <div class="xian" v-for="(items,index_ss) in row[item.name]" :key="index_ss" :class="items.ischecked?'solids':''"></div>
                                                </div>
                                                <div class="rongright">
                                                    <div class="shijian" v-for="(items,index_ss) in row[item.name]" :key="index_ss"> {{ items.time ? items.name + ':' + items.time : '' }}</div>
                                                </div>
                                            </div>
                                        </template>
                                    </vxe-table-column>
                                </vxe-table-colgroup>
                            </vxe-table-colgroup>
                        </vxe-table>
                    </div>
                </div>
            </div>
        </template>
    </L>
</template>

<script>
export default {
    data() {
        return {
            teamName   : '',
            iseditTeam : false,
            gongzuodata: [
                {name: 'date1', content: '', isedit: false},
                {name: 'date2', content: '', isedit: false},
                {name: 'date3', content: '', isedit: false},
                {name: 'date4', content: '', isedit: false},
                {name: 'date5', content: '', isedit: false},
                {name: 'date6', content: '', isedit: false},
                {name: 'date7', content: '', isedit: false},
            ],
            tableData  : [
                {
                    id   : 10001, avtar: 'https://vxetable.cn/logo.png', lader: '领导', name: 'Test1', role: 'Develop', sex: 'Man',
                    date1: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10002, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test2', role: 'Test', sex: 'Women',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10003, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test3', role: 'PM', sex: 'Man',
                    date1: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10004, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test4', role: 'Designer', sex: 'Women ',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10005, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test5', role: 'Develop', sex: 'Women ',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10006, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test6', role: 'Designer', sex: 'Women ',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10007, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test7', role: 'Test', sex: 'Man ',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}]
                },
                {
                    id   : 10008, avtar: 'https://vxetable.cn/logo.png', lader: '临时成员', name: 'Test8', role: 'Develop', sex: 'Man ',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
                },
                {
                    id   : 10009, avtar: 'https://vxetable.cn/logo.png', lader: '临时成员', name: 'Test8', role: 'Develop', sex: 'Man ',
                    date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                    date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
                }
            ],
            mergeCells : [
                {row: 1, col: 0, rowspan: 6, colspan: 1},
                {row: 7, col: 0, rowspan: 2, colspan: 1}
            ],
        }
    },
    created() {
    },
    methods: {
        closeEdit() {
            this.iseditTeam = false
            this.gongzuodata.map((item, index) => {
                item.isedit = false
            })
        },
        tianxie(item, index) {
            this.closeEdit()
            item.isedit = true
            this.$set(this.gongzuodata, index, item)
        },
        tisheng(row, type, gongzuoindex) {
            if (this.gongzuodata[gongzuoindex].content) {
                let indexs = null
                row[type].forEach((item, index_s) => {
                    if (item.ischecked) {
                        indexs = index_s
                    }
                })
                if (indexs == null) {
                    indexs = -1
                }
                if (indexs < 3) {
                    row[type][indexs + 1].ischecked = true
                    row[type][indexs + 1].time      = this.getNowdate()
                }
                console.log("=type", type, row, row[type])
            } else {
                this.$XModal.message({message: '请填写工作内容', status: 'error'})
            }
        },
        getNowdate() {
            let time   = null;
            var now    = new Date();
            var year   = now.getFullYear(); //获取完整的年份(4位,1970-????)
            var month  = now.getMonth() + 1; //获取当前月份(0-11,0代表1月)
            var day    = now.getDate(); //获取当前日(1-31)
            var hour   = now.getHours(); //获取当前小时数(0-23)
            var minute = now.getMinutes(); //获取当前分钟数(0-59)
            var second = now.getSeconds(); //获取当前秒数(0-59)
            time       = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
            return time;
        },
        //文件上传
        handleFileChange(file, row) {
            var reader = new FileReader(file.target.files[0]);
            reader.readAsDataURL(file.target.files[0]);
            reader.onload = function (ev) {
                row.avtar = ev.target.result;
            }
        }
    }
}
</script>

<style>
.tableContent {
    width: 100%;
}

.imgavtar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.clickcontent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 150px;
}

.rongall {
    width: 40px;
    height: 40px;
    position: relative;
}

.rongall > .xian:nth-of-type(1) {
    position: absolute;
    height: 90%;
    left: 0;
    top: 0;
    border: 2px dashed #ccc;
}

.rongall > .xian:nth-of-type(4) {
    position: absolute;
    width: 90%;
    right: 0;
    top: 0;
    border: 2px dashed #ccc;
}

.rongall > .xian:nth-of-type(2) {
    position: absolute;
    width: 90%;
    bottom: 0;
    left: 0px;
    border: 2px dashed #ccc;
}

.rongall > .xian:nth-of-type(3) {
    position: absolute;
    bottom: 0;
    height: 90%;
    right: 0;
    border: 2px dashed #ccc;
}

.rongall > .solids {
    border: 2px solid #333 !important;
}

.rongright {
    height: 60%;
}

.shijian {
    font-size: 12px;
}

.first-col {
    display: flex;
    justify-content: center;
    align-items: center;
}

.teamnames.vxe-input {
    margin-left: 10px;
    width: 400px;
}

.teamnames {
    margin-left: 10px;
    width: 400px;
}

.first-col-gongzuo {
    height: 40px;
}

.first-col-gongzuo > .teamnames.vxe-input {
    width: 140px;
}

.first-col-gongzuo > .teamnames {
    width: 140px;
    height: 100%;
    overflow-y: scroll;
}

/* 整个滚动条 */
.first-col-gongzuo > .teamnames::-webkit-scrollbar {
    width: 5px;
}

/* 滚动条上的滚动滑块 */
.first-col-gongzuo > .teamnames::-webkit-scrollbar-thumb {
}

.vxe-body--column {
    height: 150px !important;
}

.vxe-table--render-default .vxe-body--column.col--ellipsis > .vxe-cell {
    max-height: 150px !important;
}
</style>