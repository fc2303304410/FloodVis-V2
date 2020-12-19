window.onload = function () {
	d3.json('../static/files/data/shuiku.json', function (data) {
		var parallel = echarts.init(document.getElementById('paralle'))
		var name = []
		var SW = []
		var series = new Array()
		var lineStyle = {
			normal: {
				width: 1,
				opacity: 0.5,
			},
		};
		for (var i = 0; i < data.length / 9; i++) {
			name.push(data[i].data_up_uuid)
		}
		var j = 0
		for (var i = 0; i < data.length / 9; i++, j++) {
			SW[i] = [i + 1, data[j].zi, data[j + 31].zi, data[j + 62].zi, data[j + 93].zi, data[j + 124].zi, data[j + 155].zi, data[j + 186].zi, data[j + 217].zi, data[j + 248].zi]
		}
		for (var i = 0; i < data.length / 9; i++) {
			series[i] = [i, SW[i]]
		}
		for (var i = 0; i < data.length / 9; i++) {
			series.push({
				name: i + 1,
				type: 'parallel',
				lineStyle: lineStyle,
				data: SW[i],
				emphasis: {
					activeOpacity: 1,
				}
			})
		}
		var schema = [{
				name: 'shuiku',
				index: 0,
				text: '站点'
			},
			{
				name: 'date1',
				index: 0,
				text: '水位\n2020/12/1',
			},
			{
				name: 'date2',
				index: 0,
				text: '水位\n2020/12/2'
			},
			{
				name: 'date3',
				index: 0,

				text: '水位\n2020/12/3'
			},
			{
				name: 'date4',
				index: 0,
				text: '水位\n2020/12/4'
			},
			{
				name: 'date5',
				index: 0,
				text: '水位\n2020/12/5'
			},
			{
				name: 'date6',
				index: 0,
				text: '水位\n2020/12/6'
			},
			{
				name: 'date7',
				index: 0,
				text: '水位\n2020/12/7'
			},
			{
				name: 'date8',
				index: 0,
				text: '水位\n2020/12/8'
			},
			{
				name: 'date9',
				index: 0,
				text: '水位\n2020/12/9'
			},
		];

		option = {
			title: {
				text: '站点水位变化',
				x: "center",
				y: "bottom",
			},
			backgroundColor: '#fff',
			parallelAxis: [{
					dim: 0,
					name: schema[0].text,
					inverse: true,
					max: 31,
					nameLocation: 'start'
				},
				{
					dim: 1,
					name: schema[1].text
				},
				{
					dim: 2,
					name: schema[2].text
				},
				{
					dim: 3,
					name: schema[3].text
				},
				{
					dim: 4,
					name: schema[4].text
				},
				{
					dim: 5,
					name: schema[5].text
				},
				{
					dim: 6,
					name: schema[6].text
				},
				{
					dim: 7,
					name: schema[7].text
				},
				{
					dim: 8,
					name: schema[8].text
				},
				{
					dim: 9,
					name: schema[9].text
				},
			],
			visualMap: {
				itemWidth: '10%',
				itemHeight: '80%',
				show: true,
				calculable: true,
				bottom: "15%",
				min: 10,
				max: 95,
				textStyle: {
					fontSize: 10,
				},
				dimension: 2,
				inRange: {
					color: ['#d94e5d', '#eac736', '#50a3ba'].reverse(),
				}
			},
			parallel: {
				left: '5%',
				right: '7%',
				bottom: '12%',
				top: '21%',
				parallelAxisDefault: {
					type: 'value',
					name: '水库水位',
					nameLocation: 'end',
					nameGap: 20,
					nameTextStyle: {
						color: '#333',
						fontSize: 12,
					},
					axisLine: {
						lineStyle: {
							color: '#333',
						}
					},
					axisTick: {
						lineStyle: {
							color: '#777',
						}
					},
					splitLine: {
						show: false
					},
					axisLabel: {
						color: '#333',
						fontSize: 12,
					}
				}
			},
			series: {
				lineStyle: lineStyle,
				type: 'parallel',
				name: name,
				data: SW,
			}
		}
		parallel.setOption(option)
	})
}