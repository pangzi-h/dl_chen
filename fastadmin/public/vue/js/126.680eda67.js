"use strict";(self["webpackChunkdl_chen"]=self["webpackChunkdl_chen"]||[]).push([[126],{54126:function(e,i,t){t.r(i),t.d(i,{default:function(){return h}});var c=function(){var e=this,i=e._self._c;return i("L",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("人员矩阵")]},proxy:!0},{key:"default",fn:function(){return[i("div",{staticClass:"w"},[i("div",{staticClass:"dashboard-container",on:{click:function(i){return e.closeEdit()}}},[i("div",{staticClass:"tableContent"},[i("vxe-table",{ref:"xTable",attrs:{align:"center",resizable:"",width:"100%","highlight-hover-row":"",border:"","show-overflow":"","scroll-y":{enabled:!1},"merge-cells":e.mergeCells,data:e.tableData,"edit-config":{trigger:"click",mode:"cell",icon:"fa fa-pencil"}}},[i("vxe-table-colgroup",{attrs:{title:"Team:"},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"first-col",on:{click:function(i){i.stopPropagation(),e.closeEdit(),e.iseditTeam=!0}}},[i("div",{staticClass:"first-col-top"},[e._v("Team:")]),e.iseditTeam?i("vxe-input",{staticClass:"teamnames",attrs:{type:"text"},model:{value:e.teamName,callback:function(i){e.teamName=i},expression:"teamName"}}):e._e(),e.iseditTeam?e._e():i("div",{staticClass:"teamnames"},[e._v(e._s(e.teamName))])],1)]},proxy:!0}])},[i("vxe-table-column",{attrs:{field:"lader",title:"",width:"100","class-name":"laders"}}),i("vxe-table-column",{attrs:{field:"avtar",title:"照片",width:"120","class-name":"laders"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[i("div",{staticStyle:{position:"relative"}},[i("input",{staticStyle:{opacity:"0",position:"absolute",top:"0",left:"0",right:"0",bottom:"0"},attrs:{type:"file",accept:".jpg,.jpeg,.png",name:"file"},on:{change:function(i){return e.handleFileChange(i,t)}}}),i("img",{staticClass:"imgavtar",attrs:{src:t.avtar,alt:""}})])]}}])}),i("vxe-table-column",{attrs:{field:"name",title:"姓名","class-name":"laders","edit-render":{autofocus:".custom-input"},width:"120"},scopedSlots:e._u([{key:"edit",fn:function({row:t}){return[i("vxe-input",{attrs:{type:"text"},model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"row.name"}})]}}])}),i("vxe-table-colgroup",{attrs:{title:"工作内容"}},e._l(e.gongzuodata,(function(t,c){return i("vxe-table-column",{key:c,attrs:{field:t.name,title:"","class-name":"laders"},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"first-col-gongzuo",on:{click:function(i){return i.stopPropagation(),e.tianxie(t,c)}}},[t.isedit?e._e():i("div",{staticClass:"teamnames"},[e._v(e._s(t.content))]),t.isedit?i("vxe-input",{staticClass:"teamnames",attrs:{type:"text"},model:{value:t.content,callback:function(i){e.$set(t,"content",i)},expression:"item.content"}}):e._e()],1)]},proxy:!0},{key:"default",fn:function({row:a,rowIndex:m}){return[i("div",{staticClass:"clickcontent"},[i("div",{staticClass:"rongall",on:{click:function(i){return i.stopPropagation(),e.tisheng(a,t.name,c)}}},e._l(a[t.name],(function(e,t){return i("div",{key:t,staticClass:"xian",class:e.ischecked?"solids":""})})),0)])]}}],null,!0)})})),1)],1)],1)],1),i("div",{staticClass:"tableright"},[i("div",{staticClass:"title"},[e._v("注:")]),i("div",{staticClass:"tableonerow tableonerowone"},[i("span",[e._v("1、")]),i("div",{staticClass:"tableonerowoneRight"},[e._v("达到初级的标注“ "),i("div",{staticClass:"rongall"},e._l(e.yiji,(function(e,t){return i("div",{key:t,staticClass:"xian",class:e.ischecked?"solids":""})})),0),i("span",[e._v("“、")]),e._v(" 达到二级的标注“ "),i("div",{staticClass:"rongall"},e._l(e.erji,(function(e,t){return i("div",{key:t,staticClass:"xian",class:e.ischecked?"solids":""})})),0),i("span",[e._v("“、")]),e._v(" 达到三级的标注“ "),i("div",{staticClass:"rongall"},e._l(e.sanji,(function(e,t){return i("div",{key:t,staticClass:"xian",class:e.ischecked?"solids":""})})),0),i("span",[e._v("“、")]),e._v(" 达到高级的标注“ "),i("div",{staticClass:"rongall"},e._l(e.siji,(function(e,t){return i("div",{key:t,staticClass:"xian",class:e.ischecked?"solids":""})})),0),i("span",[e._v("“；")])])]),i("div",{staticClass:"tableonerow"},[e._v("2、在记号的下方注明评定的日期。")]),i("div",{staticClass:"tableonerow"},[i("div",{staticClass:"flex-rows"},[i("span",{staticStyle:{width:"26px",display:"inline-block"}},[e._v("3、")]),e._v(" 初级: "),i("span",{staticClass:"flex-rows-rightspan",staticStyle:{display:"inline-block"}},[e._v("已完成岗位受训并生产出合格品不少于一个月 "),i("br"),e._v("(能独立胜任本岗位是最低要求);")])]),i("div",{staticClass:"flex-rows"},[i("span",{staticStyle:{width:"26px",display:"inline-block"}}),e._v("二级: "),i("span",{staticClass:"flex-rows-rightspan",staticStyle:{display:"inline-block"}},[e._v("已完成岗位受训并达到标准工作要求不少于一个月 "),i("br"),e._v("(无需返工是最低要求); ")])]),i("div",{staticClass:"flex-rows"},[i("span",{staticStyle:{width:"26px",display:"inline-block"}}),e._v("三级: "),i("span",{staticClass:"flex-rows-rightspan",staticStyle:{display:"inline-block"}},[e._v("已完成岗位受训并达到标准工作要求不少于半年 "),i("br"),e._v("(无质量反馈是最低要求) ")])]),i("div",{staticClass:"flex-rows"},[i("span",{staticStyle:{width:"26px",display:"inline-block"}}),e._v("高级: "),i("span",{staticClass:"flex-rows-rightspan",staticStyle:{display:"inline-block"}},[e._v("能培训他人生产出合格品，并按照标准化工作执行不少于一年")])])])])])])]},proxy:!0}])})},a=[],m={data(){return{teamName:"",iseditTeam:!1,yiji:[{name:"初级",ischecked:!0,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],erji:[{name:"初级",ischecked:!0,time:""},{name:"二级",ischecked:!0,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],sanji:[{name:"初级",ischecked:!0,time:""},{name:"二级",ischecked:!0,time:""},{name:"三级",ischecked:!0,time:""},{name:"高级",ischecked:!1,time:""}],siji:[{name:"初级",ischecked:!0,time:""},{name:"二级",ischecked:!0,time:""},{name:"三级",ischecked:!0,time:""},{name:"高级",ischecked:!0,time:""}],gongzuodata:[{name:"date1",content:"",isedit:!1},{name:"date2",content:"",isedit:!1},{name:"date3",content:"",isedit:!1},{name:"date4",content:"",isedit:!1},{name:"date5",content:"",isedit:!1},{name:"date6",content:"",isedit:!1},{name:"date7",content:"",isedit:!1}],tableData:[{id:10001,avtar:"https://vxetable.cn/logo.png",lader:"领导",name:"Test1",role:"Develop",sex:"Man",date1:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]},{id:10002,avtar:"https://vxetable.cn/logo.png",lader:"固定成员",name:"Test2",role:"Test",sex:"Women",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]},{id:10003,avtar:"https://vxetable.cn/logo.png",lader:"固定成员",name:"Test3",role:"PM",sex:"Man",date1:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!1,time:""},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]},{id:10004,avtar:"https://vxetable.cn/logo.png",lader:"固定成员",name:"Test4",role:"Designer",sex:"Women ",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]},{id:10005,avtar:"https://vxetable.cn/logo.png",lader:"固定成员",name:"Test5",role:"Develop",sex:"Women ",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]},{id:10006,avtar:"https://vxetable.cn/logo.png",lader:"固定成员",name:"Test6",role:"Designer",sex:"Women ",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]},{id:10007,avtar:"https://vxetable.cn/logo.png",lader:"固定成员",name:"Test7",role:"Test",sex:"Man ",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!0,time:"2022-12-09"}]},{id:10008,avtar:"https://vxetable.cn/logo.png",lader:"临时成员",name:"Test8",role:"Develop",sex:"Man ",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!0,time:"2022-12-09"},{name:"三级",ischecked:!0,time:"2022-12-09"},{name:"高级",ischecked:!1,time:""}]},{id:10009,avtar:"https://vxetable.cn/logo.png",lader:"临时成员",name:"Test8",role:"Develop",sex:"Man ",date1:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date2:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date3:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date4:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date5:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date6:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}],date7:[{name:"初级",ischecked:!0,time:"2022-12-09"},{name:"二级",ischecked:!1,time:""},{name:"三级",ischecked:!1,time:""},{name:"高级",ischecked:!1,time:""}]}],mergeCells:[{row:1,col:0,rowspan:6,colspan:1},{row:7,col:0,rowspan:2,colspan:1}]}},created(){},methods:{closeEdit(){this.iseditTeam=!1,this.gongzuodata.map(((e,i)=>{e.isedit=!1}))},tianxie(e,i){this.closeEdit(),e.isedit=!0,this.$set(this.gongzuodata,i,e)},tisheng(e,i,t){let c=null;e[i].forEach(((e,i)=>{e.ischecked&&(c=i)})),null==c&&(c=-1),c<3?(e[i][c+1].ischecked=!0,e[i][c+1].time=this.getNowdate()):3==c&&e[i].map(((e,i)=>{e.ischecked=!1,e.time=""})),console.log("=type",i,e,e[i])},getNowdate(){let e=null;var i=new Date,t=i.getFullYear(),c=i.getMonth()+1,a=i.getDate(),m=i.getHours(),s=i.getMinutes(),n=i.getSeconds();return e=t+"-"+c+"-"+a+" "+m+":"+s+":"+n,e},handleFileChange(e,i){var t=new FileReader(e.target.files[0]);t.readAsDataURL(e.target.files[0]),t.onload=function(e){i.avtar=e.target.result}}}},s=m,n=t(1001),d=(0,n.Z)(s,c,a,!1,null,null,null),h=d.exports}}]);
//# sourceMappingURL=126.680eda67.js.map