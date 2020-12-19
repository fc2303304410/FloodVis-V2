// 基于准备好的dom，初始化echarts实例
var dom = document.getElementById("gante");
var myChart = echarts.init(dom);

var option;
option = {
    title: {
        text: '水质分析',
        left:'center',
        bottom:'0',
        align:'right'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },

    },
    legend: {
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        textStyle: {
             fontsize: 5,
            color: '#7c7c7d'
        },
        data: ['AD', 'GMSY', 'PH', 'RJY', 'SW', 'ZA', 'ZD', 'ZL', '降雨量','水位']
    },
    grid: {
        left: '3%',
        right: '4%',
        height:'65%',
        bottom: '18%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: function () {
            var list = [];
            for (var i = 1; i <= 23; i++) {
                list.push('9月' + i + '日');

            }
            return list;
        }()
    },
    yAxis: {
        type: 'value'
    },

    dataZoom: [
        {
            type: 'slider',
            startValue: 0,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '100%',
            handleStyle: {
                color: '#0B3C6F',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            bottom:'10%',
        }],

    series: [
        {
            name: 'ALL',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [112.57, 107.339, 93.54, 88.75, 89.42, 91.52, 83.49, 84.41, 77.539, 74.919, 76.69, 70.31, 68.66, 74.03, 75.169, 70.119, 69.64, 74.820, 67.0, 68.679, 68.19, 65.69, 66.699, 65.86, 65.65, 65.37, 67.09, 66.12, 65.52, 66.110]
        },

        {
            name: 'AD',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#e59c86', color: '#e59c86'},
                emphasis: {barBorderColor: '#e59c86', color: '#e59c86'}
            },
            data: [0.02, 0.03, 0.02, 0.09, 0.12, 0.04, 0.09, 0.09, 0.03, 0.03, 0.02, 0.05, 0.02, 0.02, 0.02, 0.03, 0.03, 0.03, 0.03, 0.11, 0.1, 0.04, 0.12, 0.04, 0.03, 0.03, 0.02, 0.01, 0.02, 0.0]
        },
        {
            name: 'GMSY',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#8cc0a8', color: '#8cc0a8'},
                emphasis: {barBorderColor: '#8cc0a8', color: '#8cc0a8'}
            },
            data: [2.38, 2.15, 2.46, 2.34, 2.19, 1.93, 2.16, 2.17, 1.8, 1.9, 1.86, 1.64, 1.94, 2.13, 1.75, 1.83, 1.75, 2.1, 1.9, 2.36, 2.22, 1.74, 1.74, 1.77, 1.67, 1.7, 1.84, 1.65, 1.73, 1.6]
        },
        {
            name: 'PH',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#e97e53', color: '#e97e53'},
                emphasis: {barBorderColor: '#e97e53', color: '#e97e53'}
            },
            data: [7.48, 7.49, 7.49, 7.44, 7.47, 7.51, 7.48, 7.53, 7.54, 7.46, 7.58, 7.62, 7.65, 7.58, 7.68, 7.73, 7.71, 7.47, 7.51, 7.5, 7.56, 7.68, 7.69, 7.7, 7.75, 7.72, 7.68, 7.72, 7.67, 7.54]
        },
        {
            name: 'RJY',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#eddc78', color: '#eddc78'},
                emphasis: {barBorderColor: '#eddc78', color: '#eddc78'}
            },
            data: [7.68, 7.58, 7.8, 7.61, 7.68, 7.76, 7.66, 7.19, 7.14, 7.04, 7.01, 7.73, 8.07, 7.85, 7.99, 8.12, 7.99, 7.64, 7.64, 7.53, 7.68, 7.9, 8.02, 8.23, 8.33, 8.39, 8.2, 8.14, 8.03, 7.95]
        },
        {
            name: 'SW',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#7eb37e', color: '#7eb37e'},
                emphasis: {barBorderColor: '#7eb37e', color: '#7eb37e'}
            },
            data: [24.03, 23.88, 23.85, 23.81, 23.85, 23.81, 23.78, 24.1, 24.19, 24.22, 24.25, 22.97, 22.45, 21.95, 21.27, 20.89, 20.86, 21.05, 21.73, 21.82, 21.92, 21.89, 21.64, 20.95, 20.71, 20.58, 20.49, 20.49, 20.46, 20.64]
        },
        {
            name: 'ZA',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#73b8bb', color: '#73b8bb'},
                emphasis: {barBorderColor: '#73b8bb', color: '#73b8bb'}
            },
            data: [1.6, 1.58, 1.51, 1.54, 1.45, 1.55, 1.63, 1.64, 1.64, 1.57, 1.52, 1.59, 1.58, 1.56, 1.51, 1.57, 1.59, 1.82, 1.72, 1.89, 1.75, 1.73, 1.78, 1.72, 1.71, 1.5, 1.66, 1.66, 1.66, 1.68]
        },
        {
            name: 'ZD',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#ffae48', color: '#ffae48'},
                emphasis: {barBorderColor: '#ffae48', color: '#ffae48'}
            },
            data: [69.3, 64.55, 50.33, 45.84, 46.59, 48.84, 40.61, 41.61, 35.13, 32.63, 34.38, 28.64, 26.89, 32.88, 34.88, 29.88, 29.63, 34.63, 26.39, 27.39, 26.89, 24.64, 25.64, 25.39, 25.39, 25.39, 27.14, 26.39, 25.89, 26.64]
        },
        {
            name: 'ZL',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {barBorderColor: '#ec2b30', color: '#ec2b30'},
                emphasis: {barBorderColor: '#ec2b30', color: '#ec2b30'}

            },
            data: [0.08, 0.08, 0.08, 0.08, 0.07, 0.08, 0.08, 0.08, 0.07, 0.07, 0.07, 0.07, 0.06, 0.06, 0.07, 0.07, 0.08, 0.08, 0.08, 0.08, 0.07, 0.07, 0.07, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06]
        },
        {
            name: '降雨量',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
            data: [42.57, 27.339, 43.54, 68.75, 159.42, 241.52, 183.49, 84.41, 7.539, 174.919, 174.69, 10.31, 28.66, 44.03, 175.169, 85.119, 15.64, 144.820, 157.0, 68.679, 168.19, 55.69, 166.699, 165.86, 65.65, 45.37, 97.09, 76.12, 125.52, 116.110]
        },
        {
            name: '水位',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
            data: [22.57, 2.339, 13.54, 78.75, 59.42, 41.52, 83.49, 184.41, 27.539, 74.919, 94.69, 109.31, 128.66, 154.03, 151.169, 185.119, 75.64, 74.820, 67.0, 18.679, 68.19, 75.69, 86.699, 65.86, 165.65, 145.37, 107.09, 176.12, 56.52, 76.110]
        },

    ]
};

myChart.setOption(option);
