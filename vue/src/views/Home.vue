<template>
    <Container>
        <template #header>生产状态电子看板</template>
        <template #default>
            <div class="wrapper">
                <div class="left">
                    <div class="xinxi">
                        <div class="left1-line1">产线信息</div>
                        <div class="left1-line2">
                            <div class="label">
                                <div>生产总数</div>
                                <div>123</div>
                            </div>
                            <div class="label">
                                <div>生产总数</div>
                                <div>123</div>
                            </div>
                        </div>
                        <div class="left1-line2">
                            <div class="label">
                                <div>生产总数</div>
                                <div>123</div>
                            </div>
                            <div class="label">
                                <div>生产总数</div>
                                <div>123</div>
                            </div>
                        </div>
                    </div>
                    <div class="zhibiao">
                        <div class="dashboard">
                            <div style="position:relative;">
                                <el-progress type="dashboard" :percentage="PPM" :show-text="false" define-back-color="#ffffff" color="#ea5711" stroke-width="13" stroke-linecap="butt"></el-progress>
                                <div style="position: absolute;top:33%;left:36%">{{ PPM }}%</div>
                                <RouterLink to="/PPM" style="position: absolute;top:75%;left:32%;text-decoration: none;color:#ffffff;border: 1px solid #ea4a12;border-radius: 15px;padding: 5px">PPM</RouterLink>
                            </div>
                            <div style="position:relative;">
                                <el-progress type="dashboard" :percentage="OEE" :show-text="false" define-back-color="#ffffff" color="#ea5711" stroke-width="13" stroke-linecap="butt"></el-progress>
                                <div style="position: absolute;top:33%;left:36%">{{ OEE }}%</div>
                                <RouterLink to="/OEE" style="position: absolute;top:75%;left:32%;text-decoration: none;color:#ffffff;border: 1px solid #ea4a12;border-radius: 15px;padding: 5px">OEE</RouterLink>
                            </div>
                            <div style="position:relative;">
                                <el-progress type="dashboard" :percentage="TEEP" :show-text="false" define-back-color="#ffffff" color="#ea5711" stroke-width="13" stroke-linecap="butt"></el-progress>
                                <div style="position: absolute;top:33%;left:36%">{{ TEEP }}%</div>
                                <RouterLink to="/TEEP" style="position: absolute;top:75%;left:32%;text-decoration: none;color:#ffffff;border: 1px solid #ea4a12;border-radius: 15px;padding: 5px">TEEP</RouterLink>
                            </div>
                        </div>
                        <div class="menu">
                            <router-link class="menu1" to="/KeHuTouSu"></router-link>
                            <router-link class="menu2" to="/ShouJianGuanLi"></router-link>
                            <router-link class="menu3" to="/GaiShanGuanLi"></router-link>
                            <div class="menu4"></div>
                            <router-link class="menu5" to="/WuSGuanLi"></router-link>
                            <router-link class="menu6" to="/RenYuanJuZhen"></router-link>
                            <router-link class="menu7" to="/BianHuaDianGuanLi"></router-link>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="title">生产信息</div>
                    <div class="right-status">
                        <div>
                            <span>当前产品:</span> <span>xxx</span>
                        </div>
                        <div>
                            <span>产线状态:</span> <span>xxx</span>
                        </div>
                    </div>
                    <div class="right-content">
                        <table>
                            <thead>
                            <tr>
                                <th style="width: 20vh">时段</th>
                                <th style="width: 10vh">目标产量</th>
                                <th style="width: 10vh">当前产量</th>
                                <th style="width: 10vh">达成率</th>
                                <th style="width: 10vh">不良数</th>
                                <th style="width: 10vh">良率</th>
                                <th style="width: 20vh">备注</th>
                            </tr>
                            </thead>
                            <tbody>


                            <tr>
                                <td>8:00~9:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>9:00~10:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>10:00~11:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>11:00~12:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>12:00~13:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>13:00~14:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>14:00~15:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>15:00~16:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            <tr>
                                <td>16:00~17:00</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                                <td>---</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </template>
    </Container>
</template>

<script>
export default {
    data: function () {
        return {
            PPM : 12,
            OEE : 23,
            TEEP: 34
        }
    },
}
</script>

<style scoped lang='less'>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    border: 1px solid #ea5711;
    width: 47%;
    height: 100%;
    line-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;


    .xinxi {
      flex: 1;
      width: 100%;

      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;

      .left1-line1 {
        width: 100%;
        height: 20%;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-content: center;
        align-items: center;
      }

      .left1-line2 {
        width: 100%;
        height: 20%;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-content: center;
        align-items: center;
      }

      .label {
        width: 50%;
        display: flex;
        justify-content: space-around;
      }
    }

    .zhibiao {
      flex: 2;
      width: 100%;

      background-size: contain;
      background-repeat: no-repeat;

      display: flex;
      flex-direction: column;

      .dashboard {
        flex: 2;
        display: flex;
        justify-content: space-around;
      }

      .menu {
        flex-grow: 3;
        background-image: url('@/assets/image2.png');
        background-size: 100% 100%;

        background-repeat: no-repeat;

        display: flex;
        justify-content: space-around;

        .menu1 {
          flex: 1;
        }

        .menu2 {
          flex: 1;
        }

        .menu3 {
          flex: 1;
        }

        .menu4 {
          flex: 3;
        }

        .menu5 {
          flex: 1;
        }

        .menu6 {
          flex: 1;
        }

        .menu7 {
          flex: 1;
        }
      }
    }
  }

  .right {
    border: 1px solid #ea5711;
    width: 47%;
    height: 100%;

    display: flex;
    flex-direction: column;

    .title {
      font-size: large;
    }

    .right-status {
      display: flex;
      justify-content: space-around;
    }

    .right-content {
      table {
        line-height: 5vh;

        tr:nth-of-type(odd) {
          background: #171717;
        }

        tr:nth-of-type(even) {
          background: #150802;
        }
      }
    }
  }
}
</style>
