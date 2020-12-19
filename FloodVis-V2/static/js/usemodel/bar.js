var dom = document.getElementById("bar");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title:{
        text:'31天内气温变化情况',
        left: 'center',
        bottom:'12%'
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日', '9月6日', '9月7日','9月8日','9月9日','9月10日','9月11日','9月12日','9月13日','9月14日', '9月15日', '9月16日', '9月17日', '9月18日', '9月19日', '9月20日','9月21日','9月22日','9月23日','9月24日','9月25日','9月26日','9月27日', '9月28日', '9月29日', '9月30日', '9月31日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data:  [181.04, 58.81, 111.87, 126.72, 63.69, 55.21, 86.66, 176.81, 54.51, 38.97, 63.9, 10.53, 129.1, 173.71, 141.4, 146.73, 24.3, 1.23, 144.3, 47.42, 122.03, 188.07, 149.78, 176.37, 134.56, 16.52, 192.23, 68.51, 19.43, 176.04,16.52],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}