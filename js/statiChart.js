//周下载量统计
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart04'));

// 指定图表的配置项和数据
var option = {
    title: {
//      text: '周下载量分布',
        left: 'left'
    },
    tooltip: {
        trigger: 'axis',
//      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'center',
        data: ['交易笔数']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        boundaryGap: false,
        data: ['2016/5/30','2016/5/31','2016/6/1','2016/6/2','2016/6/3','2016/6/4','2016/6/5']
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        name: 'y'
    },
    series: [
        {
            name: '交易笔数',
            type: 'line',
            data: [2830, 2650, 2930, 2490, 3103, 3509, 3894],itemStyle:{
                			normal:{
                				color:'#359bff'
                			}
                		}
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
