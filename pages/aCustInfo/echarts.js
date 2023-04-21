import * as echarts from 'echarts';

function echartss(data, ele) {
	console.log(data)
	console.log(ele)
	setTimeout(function() {
		const myChart = echarts.init(ele);

		var option = {
			backgroundColor: 'rgba(255,255,255,1)', //背景色
			animation: false,
			grid: {
				left: '3%',
				right: '4%',
				bottom: '15%',
				containLabel: true
			},
			title: {
				text: data.name,
				textStyle: {
					color: 'black',
					fontSize: 20
				}
			},
			//提示信息展示
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#283b56'
					}
				}
			},
			//x轴的数据展示
			xAxis: {
				type: 'category',
				data: data.xAxis,
			},
			//y轴的数据展示
			yAxis: {
				type: "value",
				axisLabel: {
					formatter: "{value}",
					textStyle: {
						color: 'black'
					}
				},
			},
			//绑定的数据展示
			series: [{
				// data使用刚才定义的数组，数据从后端接口中取得
				data: data.yAxis,
				type: 'line',
				smooth: true,
			}],
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.clear(); //清空上次加载的option数据
		option && myChart.setOption(option);

		setTimeout(function() {
			window.onresize = function() {
				myChart.resize()
			}
		}, 200)
		return myChart
	}, 200)
}

export default echartss;