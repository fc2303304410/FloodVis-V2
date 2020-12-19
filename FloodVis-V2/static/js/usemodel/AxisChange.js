function AxisChange() {
	var dom = document.getElementById("stack_bar");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	var xAxisData = [];
	var data1 = [
		"23.7300",
		"27.2100",
		"28.9600",
		"23.1400",
		"17.9600",
		"16.6900",
		"18.8900",
		"19.2400",
		"19.7600",
		"18.1400",
		"20.5100",
		"18.8100",
		"22.5200",
		"17.0700",
		"19.7700",
		"18.4600",
		"17.9600",
		"18.9700",
		"19.4600",
		"29.4600",
		"31.6200",
		"27.4000",
		"25.9000",
		"16.9500",
		"18.4500",
		"30.1300",
		"38.6500"
	];
	var data2 = [
		"29.4500",
		"32.1300",
		"36.6500",
		"18.7300",
		"18.7100",
		"22.0200",
		"19.8200",
		"18.5300",
		"15.8500",
		"18.5200",
		"17.3400",
		"20.1100",
		"17.4800",
		"18.5300",
		"10.3300",
		"16.9400",
		"11.6200",
		"17.4000",
		"25.9000",
		"36.9500",
		"36.9400",
		"31.6200",
		"17.4000",
		"25.9000",
		"16.9500",
		"30.1300",
		"37.6500"
	];
	var data3 = [
		"27.13",
		"29.55",
		"31.41",
		"23.55",
		"23.55",
		"21.22",
		"21.20",
		"20.96",
		"20.95",
		"23.55",
		"20.91",
		"20.91",
		"23.55",
		"21.29",
		"23.55",
		"23.55",
		"21.32",
		"21.32",
		"23.55",
		"31.03",
		"36.04",
		"31.05",
		"17.04",
		"25.05",
		"16.06",
		"32.10",
		"36.60"
	];
	var data4 = [
		"57.2900",
		"59.2500",
		"61.5700",
		"17.3800",
		"25.1500",
		"23.5600",
		"20.5400",
		"24.2300",
		"22.4200",
		"26.5800",
		"21.4200",
		"22.9100",
		"17.2800",
		"28.7600",
		"16.6900",
		"29.8700",
		"28.7600",
		"21.4200",
		"29.0200",
		"65.9000",
		"66.9400",
		"61.6200",
		"17.4000",
		"25.9000",
		"16.9500",
		"60.1300",
		"61.6500"
	];
	for (var i = 3; i < 30; i++) {
		if (i < 10)
			xAxisData.push('2020-07-0' + i)
		else
			xAxisData.push('2020-07-' + i)
	}

	option = {
		backgroundColor: '#ffffff',
		title: {
			text: '各类站点水位概览',
			x: "center",
			y: "bottom",
		},
		legend: {
			data: ['湖泊', '港渠', '涵闸', '河道'],
			top: 20,
		},
		toolbox: {
			// y: 'bottom',
			feature: {
				magicType: {
					type: ['stack', 'tiled']
				},
				dataView: {},
				saveAsImage: {
					pixelRatio: 2
				}
			}
		},
		tooltip: {},
		xAxis: {
			data: xAxisData,
			splitLine: {
				show: false
			}
		},
		yAxis: {},
		series: [{
			name: '湖泊',
			type: 'bar',
			data: data1,

			markLine: {
				itemStyle: {
					normal: {
						borderWidth: 1,
						lineStyle: {
							type: 'dash',
							color: 'rgb(194,53,49)',
							width: 2,
						},
						label: {
							formatter: '湖泊警戒水位',
							textStyle: {
								fontSize: 10,
								fontWeight: "bolder",
							},
						}
					},
				},
				data: [{
					yAxis: 21.437
				}, ]
			},

			animationDelay: function (idx) {
				return idx * 10;
			}
		}, {
			name: '港渠',
			type: 'bar',
			data: data2,
			markLine: {
				itemStyle: {
					normal: {
						borderWidth: 1,
						lineStyle: {
							type: 'dash',
							color: 'rgb(47,69,84)',
							width: 2,
						},
						label: {
							formatter: '港渠警戒水位',
							textStyle: {
								fontSize: 10,
								fontWeight: "bolder",
							},
						}
					},
				},
				data: [{
					yAxis: 22.948
				}, ]
			},

			animationDelay: function (idx) {
				return idx * 10 + 100;
			}
		}, {
			name: '涵闸',
			type: 'bar',
			data: data3,
			markLine: {
				itemStyle: {
					normal: {
						borderWidth: 1,
						lineStyle: {
							type: 'dash',
							color: 'rgb(97,160,168)',
							width: 2,
						},
						label: {
							formatter: '涵闸警戒水位',
							textStyle: {
								fontSize: 10,
								fontWeight: "bolder",
							},
						}
					},
				},
				data: [{
					yAxis: 24.74
				}, ]
			},

			animationDelay: function (idx) {
				return idx * 10 + 100;
			}
		}, {
			name: '河道',
			type: 'bar',
			data: data4,
			markLine: {
				itemStyle: {
					normal: {
						borderWidth: 1,
						lineStyle: {
							type: 'dash',
							color: 'rgb(212,130,101)',
							width: 2,
						},
						label: {
							formatter: '河道警戒水位',
							textStyle: {
								fontSize: 10,
								fontWeight: "bolder",
							},
						}
					},
				},
				data: [{
					yAxis: 34.466
				}, ]
			},
			animationDelay: function (idx) {
				return idx * 10 + 100;
			}
		}],
		animationEasing: 'elasticOut',
		animationDelayUpdate: function (idx) {
			return idx * 5;
		}
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
AxisChange()