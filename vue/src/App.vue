<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
console.log(process.env.NODE_ENV);
export default {

}





// let table = document.createElement('table');
// for (let i = 0; i < 3; i++) {
//     let row = document.createElement('tr');
//     for (let j = 0; j < 3; j++) {
//         let td = document.createElement('td');
//         td.setAttribute('x', '0');
//         td.onmouseup = e => {
//             let x = (parseInt(e.currentTarget.getAttribute('x')) + 1) % 3
//             e.currentTarget.setAttribute('x', x)
//             if (x === 0) {
//                 e.currentTarget.setAttribute('style', 'background:#FFF')
//             }
//             if (x === 1) {
//                 e.currentTarget.setAttribute('style', 'background:red')
//             }
//             if (x === 2) {
//                 e.currentTarget.setAttribute('style', 'background:yellow')
//             }
//         };
//         row.appendChild(td);
//     }
//     table.appendChild(row);
// }
// document.querySelector('#content').innerHTML = '';
// document.querySelector('#content').appendChild(table);
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

/*.container {*/
/*    box-sizing: border-box;*/
/*    height: 100vh;*/
/*    background-image: url('@/assets/bg.png');*/
/*    background-size: 100% 100%;*/
/*    color: #ea5711;*/
/*    text-align: center;*/

/*    display: flex;*/
/*    flex-direction: column;*/
/*    justify-content: center;*/
/*    align-items: center;*/

/*    .top {*/
/*        !*background-color: pink;*!*/
/*        width: 90%;*/
/*        height: auto;*/
/*    }*/

/*    .content {*/
/*        !*background-color: deeppink;*!*/
/*        width: 90%;*/
/*        height: 100%;*/
/*        box-sizing: border-box;*/
/*        padding: 20px;*/
/*    }*/

/*    .bottom {*/
/*        !*background-color: hotpink;*!*/
/*        width: 90%;*/
/*        height: auto;*/
/*    }*/
/*}*/

/*修改表头背景色*/
.vxe-table--header-wrapper, .vxe-header--row, .vxe-table--header {
  /*background-color: #2C3846;*/
}

/*调整表格行高*/
.vxe-table .vxe-body--column:not(.col--ellipsis), .vxe-table .vxe-footer--column:not(.col--ellipsis), .vxe-table .vxe-header--column:not(.col--ellipsis) {
  padding: 5px 0;
}

/*调整表格 单元格背景颜色*/
.vxe-table .vxe-table--body-wrapper, .vxe-table .vxe-table--footer-wrapper {
  background-color: #1B2838;
}

/*调整表格文字及位置*/
.vxe-table .vxe-body--column, .vxe-table .vxe-footer--column, .vxe-table .vxe-header--column {
  position: relative;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
}

/*调整表头首行  line 的颜色*/
.vxe-table .vxe-table--header-wrapper .vxe-table--header-border-line{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  border-bottom: 1px solid #e8eaec;
}

.vxe-body--row.row--hover {
  background-color: rgba(255, 255, 255, 0.3) !important;
}


/*表格滚动条样式*/
.vxe-table--body-wrapper::-webkit-scrollbar {
  width: 8px;
}

.vxe-table--body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 5px;
  height: 50px;
  background-color: #5C6974 !important;
  border-radius: 30px !important;
}

.vxe-table--body-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.4);
}

.vxe-table.border--default .vxe-table--header-wrapper, .vxe-table.border--full .vxe-table--header-wrapper, .vxe-table.border--outer .vxe-table--header-wrapper {
  background-color: #113238;
}

/*有垂直 垂直下拉时  右上角处多出块状 背景色调整*/
.vxe-table--header-wrapper {
  background-color: transparent !important;
}
</style>
