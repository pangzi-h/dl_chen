<template>
  <L>
    <template #header>人员矩阵</template>
    <template #default>
      <div class="w">
        <div class="dashboard-container" @click="closeEdit()">
          <div class="tableContent">
            <vxe-table
                align="center"
                resizable
                width="100%"
                highlight-hover-row
                border
                show-overflow
                :scroll-y="{enabled: false}"
                ref="xTable"
                :merge-cells="mergeCells"
                :data="tableData"
                :edit-config="{trigger: 'click', mode: 'cell', icon: 'fa fa-pencil'}"
            >
              <vxe-table-colgroup title="Team:">
                <template v-slot:header>
                  <div class="first-col" @click.stop="closeEdit();iseditTeam=true">
                    <div class="first-col-top">Team:</div>
                    <vxe-input v-if="iseditTeam" type="text" class="teamnames" v-model="teamName"></vxe-input>
                    <div class="teamnames" v-if="!iseditTeam">{{ teamName }}</div>

                  </div>
                </template>
                <vxe-table-column field="lader" title="" width="100" class-name="laders"></vxe-table-column>
                <vxe-table-column field="avtar" title="照片" width="120" class-name="laders">
                  <template v-slot="{ row }">
                    <div style="position: relative">
                      <input type="file" @change='handleFileChange($event,row)' accept=".jpg,.jpeg,.png" name="file" style="opacity:0;position: absolute; top: 0;left: 0;right: 0;bottom: 0"/>
                      <img :src="row.avtar" alt="" class="imgavtar">
                    </div>
                  </template>
                </vxe-table-column>
                <vxe-table-column field="name" title="姓名" class-name="laders" :edit-render="{autofocus: '.custom-input'}" width="120">
                  <template v-slot:edit="{ row }">
                    <vxe-input type="text" v-model="row.name"></vxe-input>
                  </template>
                </vxe-table-column>
                <vxe-table-colgroup title="工作内容">
                  <vxe-table-column v-for="(item,index) in gongzuodata" :key="index" :field="item.name" title=""  class-name="laders">
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
<!--                        <div class="rongright">-->
<!--                          <div class="shijian" v-for="(items,index_ss) in row[item.name]" :key="index_ss"> {{ items.time ? items.name + ':' + items.time : '' }}</div>-->
<!--                        </div>-->
                      </div>
                    </template>
                  </vxe-table-column>
                </vxe-table-colgroup>
              </vxe-table-colgroup>
            </vxe-table>
          </div>
          <div class="tableright">
            <div class="title">注:</div>
            <div class="tableonerow tableonerowone"><span>1、</span>
              <div class="tableonerowoneRight">达到初级的标注“
                <div class="rongall">
                  <div class="xian" v-for="(items,index_ss) in yiji" :key="index_ss" :class="items.ischecked?'solids':''"></div>
                </div><span>“、</span>
                达到二级的标注“
                <div class="rongall">
                  <div class="xian" v-for="(items,index_ss) in erji" :key="index_ss" :class="items.ischecked?'solids':''"></div>
                </div><span>“、</span>
                达到三级的标注“
                <div class="rongall">
                  <div class="xian" v-for="(items,index_ss) in sanji" :key="index_ss" :class="items.ischecked?'solids':''"></div>
                </div><span>“、</span>
                达到高级的标注“
                <div class="rongall">
                  <div class="xian" v-for="(items,index_ss) in siji" :key="index_ss" :class="items.ischecked?'solids':''"></div>
                </div><span>“；</span></div>
            </div>
            <div class="tableonerow">2、在记号的下方注明评定的日期。</div>
            <div class="tableonerow">
              <div class="flex-rows"><span style="width: 26px;display: inline-block">3、</span>
                初级: <span style="display: inline-block" class="flex-rows-rightspan">已完成岗位受训并生产出合格品不少于一个月
                               <br/>(能独立胜任本岗位是最低要求);</span>
              </div>
              <div class="flex-rows">
                <span style="width: 26px;display: inline-block"></span>二级: <span class="flex-rows-rightspan" style="display: inline-block">已完成岗位受训并达到标准工作要求不少于一个月
                           <br/>(无需返工是最低要求);
                             </span>
              </div>
              <div class="flex-rows">
                <span style="width: 26px;display: inline-block"></span>三级: <span class="flex-rows-rightspan" style="display: inline-block">已完成岗位受训并达到标准工作要求不少于半年
                           <br/>(无质量反馈是最低要求)
                        </span>
              </div>
              <div class="flex-rows">
                <span style="width: 26px;display: inline-block"></span>高级: <span class="flex-rows-rightspan" style="display: inline-block">能培训他人生产出合格品，并按照标准化工作执行不少于一年</span>
              </div>

            </div>

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
      teamName: '',
      iseditTeam: false,
      yiji: [{name: '初级', ischecked: true, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
      erji: [{name: '初级', ischecked: true, time: ''}, {name: '二级', ischecked: true, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
      sanji: [{name: '初级', ischecked: true, time: ''}, {name: '二级', ischecked: true, time: ''}, {name: '三级', ischecked: true, time: ''}, {name: '高级', ischecked: false, time: ''}],
      siji: [{name: '初级', ischecked: true, time: ''}, {name: '二级', ischecked: true, time: ''}, {name: '三级', ischecked: true, time: ''}, {name: '高级', ischecked: true, time: ''}],
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
          id:10001, avtar: 'https://vxetable.cn/logo.png', lader:'领导', name: 'Test1', role: 'Develop', sex: 'Man',
          date1: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id:10002, avtar: 'https://vxetable.cn/logo.png', lader:'固定成员', name: 'Test2', role: 'Test', sex: 'Women',
          date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id:10003, avtar: 'https://vxetable.cn/logo.png', lader:'固定成员', name: 'Test3', role: 'PM', sex: 'Man',
          date1: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: false, time: ''}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id: 10004, avtar: 'https://vxetable.cn/logo.png', lader:'固定成员', name: 'Test4', role: 'Designer', sex: 'Women ',
          date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id   : 10005, avtar: 'https://vxetable.cn/logo.png', lader:'固定成员', name: 'Test5', role: 'Develop', sex: 'Women ',
          date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: false, time: ''}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id:10006, avtar: 'https://vxetable.cn/logo.png', lader:'固定成员', name: 'Test6', role: 'Designer', sex: 'Women ',
          date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: false, time: ''}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id:10007, avtar: 'https://vxetable.cn/logo.png', lader: '固定成员', name: 'Test7', role: 'Test', sex: 'Man ',
          date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
          date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
          date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
          date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
          date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
          date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}],
          date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: true, time: '2022-12-09'}]
        },
        {
          id:10008, avtar: 'https://vxetable.cn/logo.png', lader: '临时成员', name: 'Test8', role: 'Develop', sex: 'Man ',
          date1: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
          date2: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
          date3: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
          date4: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
          date5: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
          date6: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
          date7: [{name: '初级', ischecked: true, time: '2022-12-09'}, {name: '二级', ischecked: true, time: '2022-12-09'}, {name: '三级', ischecked: true, time: '2022-12-09'}, {name: '高级', ischecked: false, time: ''}],
        },
        {
          id: 10009, avtar: 'https://vxetable.cn/logo.png', lader: '临时成员', name: 'Test8', role: 'Develop', sex: 'Man ',
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
      // if (this.gongzuodata[gongzuoindex].content) {
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
        row[type][indexs + 1].time = this.getNowdate()
      }else if(indexs == 3){
        row[type].map((item, index_s) => {
          item.ischecked = false
          item.time = ''
        })
      }
      console.log("=type", type, row, row[type])
      // }
      // else {
      //     this.$XModal.message({message: '请填写工作内容', status: 'error'})
      // }
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
.container{
  overflow: hidden;
}
.teamnames.vxe-input{
  margin-left: 4px!important;
}
.main{
  padding-bottom: 0!important;
  padding-top: 10px!important;
}
.dashboard-container{
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
}
.tableContent {
  width: 70%;
}
.tableright{
  width: 30%;
  padding-top:8% ;
  padding-left: 5%;
  border: 1px solid #ffffff;
  border-left: 0;
  text-align: left;
}
.vxe-table--render-default .vxe-header--column:not(.col--ellipsis) {
   padding: 4px 0!important;
}
.title{
  color:#ea5711;
}
.flex-rows{
  display: flex;
}
.flex-rows-rightspan{
  width: 70%;
  margin-left: 4px;
}
.imgavtar {
  width: 100%;
  height: 50px;
  /*border-radius: 50%;*/
}

.clickcontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border: 1px dashed #fff;
}

.rongall > .xian:nth-of-type(4) {
  position: absolute;
  width: 90%;
  right: 0;
  top: 0;
  border: 1px dashed #fff;
}

.rongall > .xian:nth-of-type(2) {
  position: absolute;
  width: 90%;
  bottom: 0;
  left: 0px;
  border: 1px dashed #fff;
}

.rongall > .xian:nth-of-type(3) {
  position: absolute;
  bottom: 0;
  height: 90%;
  right: 0;
  border: 1px dashed #fff;
}

.rongall > .solids {
  border: 1px solid #fff !important;
}

.rongright {
  height: 60%;
}

.shijian {
  font-size: 12px;
  color: #fff;
}

.first-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.first-col-top{
  margin-left: 20%;
}
.teamnames.vxe-input {
  margin-left: 10px;
  width: 400px;
  height: 20px;
}

.teamnames {
  margin-left: 10px;
  width: 400px;
  text-align: left;
}

.first-col-gongzuo {
  height: 40px;
}

.first-col-gongzuo > .teamnames.vxe-input {
  width: 90%;
}

.first-col-gongzuo > .teamnames {
  width: 90%;
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
  /*height: 150px !important;*/
}

.vxe-table--render-default .vxe-body--column.col--ellipsis > .vxe-cell {
  /*max-height: 150px !important;*/
}
.vxe-table .laders.vxe-body--column{
  background: #000!important;
  border-bottom: 0.5px solid;
  border-right: 0.5px solid;
}
.tableonerow{
  color: #fff!important;
  font-size: 14px;
  line-height: 24px;
}
.tableonerowone{
  display: flex;
}
.tableonerowone .tableonerowoneRight{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
}
.tableonerowoneRight .rongall{
  width: 20px;
  height: 20px;
  margin-left: 8px;
}
</style>
