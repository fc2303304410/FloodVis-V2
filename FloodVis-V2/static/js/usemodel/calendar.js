d3.csv("../static/files/data/river.csv", function (data) {
	let calendar = echarts.init(document.getElementById("calender"))
	let data1 = []
	let data2 = []
	for (let i = 0; i < data.length; i++) {
		if (data[i].data_up_uuid == "161610320") {
			data1.push(data[i].zr)
			data2.push(data[i].data_up_time.split(" ")[0])
		}
	}
	let data3 = []
	for (let i = 0; i < 61; i++) {
		data3.push([data2[i], data1[i]])
	}
	// console.log(data)
	let option = {
		backgroundColor: '#ffffff',
		title: {
			text: '水位日历',
			x: "center",
			y: "88%",
			textStyle: {
				color: '#000000'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		grid: {
			height: '70%',
			width: '80%',
		},
		legend: {
			bottom: '1%',
			right: '5%',
			data: ['水位', 'Top 5'],
			textStyle: {
				color: '#000000'
			}
		},
		calendar: [{
			top: "10%",
			left: 'center',
			cellSize: [25, 25],
			range: ['2020/6/1', '2020/7/31'],
			splitLine: {
				show: true,
				lineStyle: {
					color: '#000',
					width: 4,
					type: 'solid'
				}
			},
			yearLabel: {
				formatter: '{start}  6th~7th',
				textStyle: {
					color: '#000000'
				}
			},
			itemStyle: {
				color: '#7e7e7e',
				borderWidth: 1,
				borderColor: '#111'
			}
		}],
		series: [{
				name: '水位',
				type: 'scatter',
				coordinateSystem: 'calendar',
				data: data3,
				width: '100%',
				height: '80%',
				symbolSize: function (val) {
					return val[1] / 5;
				},
				itemStyle: {
					color: '#ddb926'
				}
			},
			{
				name: 'Top 5',
				type: 'effectScatter',
				coordinateSystem: 'calendar',
				data: data3.sort(function (a, b) {
					return b[1] - a[1];
				}).slice(0, 5),
				symbolSize: function (val) {
					return val[1] / 5;
				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				itemStyle: {
					color: '#f4e925',
					shadowBlur: 10,
					shadowColor: '#333'
				},
				zlevel: 1
			},
		]
	};
	calendar.setOption(option)
})