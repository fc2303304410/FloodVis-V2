
    var myChart1 = echarts.init(document.getElementById('one'));
    var option;
    var uploadedDataURL = "../data/hubei.json";
    $.get(uploadedDataURL, function(geoJson) {
    // console.log(geoJson)
    echarts.registerMap('nanshan', geoJson);
    let data = [

    [
      "114.3824",
      "30.4048",
      "23.1000"
    ],
    [
      "114.01996",
      "30.777101",
      "18.1000"
    ],
    [
      "114.092357",
      "30.319983",
      "19.6000"
    ],
    [
      "114.0395",
      "30.501328",
      "16.3000"
    ],
    [
      "114.828324",
      "30.780536",
      "152.8000"
    ],
    [
      "114.715184",
      "30.783071",
      "21.1000"
    ],
    [
      "114.226289",
      "30.882304",
      "25.6000"
    ],
    [
      "114.1912",
      "30.1312",
      "19.6000"
    ],
    [
      "114.1536",
      "31.0448",
      "18.2000"
    ],
    [
      "114.264038",
      "30.335257",
      "16.1000"
    ],
    [
      "114.129606",
      "30.731423",
      "25.7000"
    ],
    [
      "114.2106",
      "30.0721",
      "23.0000"
    ],
    [
      "114.535252",
      "30.922743",
      "0.0000"
    ],
    [
      "114.0004",
      "30.3804",
      "17.6000"
    ],
    [
      "113.905693",
      "30.344387",
      "26.5000"
    ],
    [
      "113.854459",
      "30.395858",
      "0.0000"
    ],
    [
      "114.683409",
      "30.878171",
      "25.4000"
    ],
    [
      "113.992315",
      "30.306874",
      "23.9000"
    ]
    ];
    let areaData = [];
    data.map(item => { // 扩大热力图效果
        areaData.push(...new Array(1).fill(item));
    });
    let mapMax = Math.max(...data.map(item => item[2]));
    let mapMin = Math.min(...data.map(item => item[2]));
    myChart1.setOption(
        option = {

            tooltip: {
                show: false,
                trigger: 'item',

                axisPointer: {
                    type: 'shadow'
                }
            },

            visualMap: {
                bottom: 0,
                left: 'center',
                orient: 'horizontal',
                show: true,
                itemWidth: 10,
                color: ['#ff4601', '#fffc00', '#87cffa'],
                min: mapMin,
                max: 200,
                calculable: true,
                textStyle: {
                    color: '#575757',
                    fontSize: 12
                }
            },
            grid: {
                height: '100%',
                width: '100%',
            },
            geo: {
                map: 'nanshan',
                label: {
                    show: false
                },
                top: 'center',
                left: 'center',
                roam: false,
                width: '80%',
                height: '70%',
                zoom: 1.01,
                // label: {
                //     normal: {
                //         show: true,
                //         color: '#5b5a5a',
                //         textStyle: {
                //             fontSize: 8
                //         }
                //     },
                //     emphasis: {
                //         color: '#fff'
                //     }
                // },
                itemStyle: {

                    normal: {
                        areaColor: '#ffffff',
                        borderColor: '#5c5c5c',
                        shadowColor: '#ffffff',
                        shadowBlur: 10,
                        borderWidth: 1
                    },
                    emphasis: {
                        // 鼠标移入颜色
                        areaColor: '#409EFF',
                        borderWidth: 0
                    }
                }
            },

            series: [{
                mapType: 'nanshan',
                top: 'center',
                left: 'center',
                width: '90%',
                height: '90%',

                name: 'AQI',
                type: 'heatmap',
                coordinateSystem: 'geo',
                blurSize: 40,
                data: areaData,
                // 鼠标移入
                // emphasis: {
                //     show: false,
                //     itemStyle: {
                //         areaColor: 'rgb(255,255,0,1)'
                //     }
                // }
            }]
        })

        myChart1.setOption(option);
})