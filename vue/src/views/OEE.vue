<template>
    <Container>
        <template #header>内部OEE跟踪表</template>
        <template #default>
            <div class="wrapper">
                <div class="top">
                    <div id="chart1"></div>
                    <div id="chart2"></div>
                </div>
                <div class="bottom">
                    <table border="1" cellspacing="0">
                        <tr>
                            <td rowspan="2" style="width: 100px">一班</td>
                            <td style="width: 100px">不良品的数量</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>总产量</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td rowspan="2">二班</td>
                            <td>不良品的数量</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>总产量</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </table>
                </div>
            </div>
        </template>
    </Container>
</template>
<script>
import * as echarts from 'echarts';

export default {
    data: function () {
        return {
            dataset: [
                {
                    source: [
                        {'day': "1", 'num': 1},
                        {'day': "2", 'num': 2},
                        {'day': "3", 'num': 4},
                        {'day': "4", 'num': 5},
                        {'day': "5", 'num': 6},
                        {'day': "6", 'num': 7},
                    ]
                },
                {
                    source: [
                        {'day': "1", 'num': 2},
                        {'day': "2", 'num': 3},
                        {'day': "3", 'num': 5},
                        {'day': "4", 'num': 6},
                        {'day': "5", 'num': 4},
                        {'day': "6", 'num': 2},
                    ]
                },
            ]
        }
    },
    mounted() {
        // fetch('http://localhost/api/v1.ppm').then(data => {
        //     return data.json()
        // }).then(json => {
        //     this.dataset = json.data.dataset
        // }).then(() => {
        this.chart1();
        this.chart2();
        console.log(111);
        // })
    },
    methods: {
        chart1: function () {
            echarts.init(document.getElementById('chart1')).setOption({
                xAxis : {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis : {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            })
        },
        chart2: function () {
            echarts.init(document.getElementById('chart2')).setOption(
                {
                    xAxis  : {type: 'category',},
                    yAxis  : {type: 'value'},
                    dataset: this.dataset,
                    series : [
                        {type: 'line', name: 0, datasetIndex: 0,},
                        {type: 'line', name: 1, datasetIndex: 1,}
                    ],
                }
            )
        }
    }
}
</script>

<style scoped lang="less">
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        height: 100%;
        width: 100%;
        flex-grow: 2;
        display: flex;
        justify-content: space-around;

        #chart1 {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #chart2 {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .bottom {
        width: 100%;
        height: auto;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        table {
            width: 90.7%;
            height: auto;
        }
    }
}
</style>