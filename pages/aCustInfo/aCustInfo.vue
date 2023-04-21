<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" title-size="44" back-icon-color="white" title="概况"
				title-color="black">
			</u-navbar>
		</view>
		<view style="width: 100%;height: 300px;background-color:lightgreen;">
			<text
				style="color: white;font-size: 40rpx;font-family: 'Courier New', Courier, monospace;font-weight: bold;margin-left: 20px;margin-top: 5px;">创优数字化综合管理平台</text>
			<view style="width: 90%;height: 70%;background-color: white;margin: auto;margin-top:10px">
				<view style="display: flex;height: 25%;height: 30%;">
					<view style="width: 40%;margin-top: 10px;">
						<text>销售单</text>
					</view>
					<view style="width: 80%;margin-top: 10px;">
						<text>今日/本周/本月/本年</text>
					</view>
					<u-select v-model="showTody" mode="single-column" :list="olderlist">
					</u-select>
					<view style="width: 20%;">
						<u-input type="select" @click="showTody = true" placeholder="今日">
						</u-input>
					</view>
				</view>
				<view style="height: 50%;">
					<view style="text-align: center;">
						<p>
							￥<span style="font-weight: bold;font-size: 18px;">1,6845</span>.00
						</p>
						<p>订单金额</p>
					</view>
				</view>
				<view style="display: flex;">
					<view style="width: 33%;text-align: center;">
						<p>90</p>
						<p>订单总数</p>
					</view>
					<view style="width: 33%;text-align: center;">
						<p>￥1,580.00</p>
						<p>回款金额</p>
					</view>
					<view style="width: 33%;text-align: center;">
						<p style="color: red;">￥1,472.00</p>
						<p>欠款金额</p>
					</view>
				</view>
			</view>
		</view>
		<view style="width: 100%;height: 300px;">
			<canvas style="width: 90%;margin: auto;height: 300px;" id="myEcharts"></canvas>
		</view>
		<view style="width: 90%;margin: auto;">

		</view>
	</view>
</template>

<script>
	import md5 from 'js-md5';
	import * as echarts from 'echarts';
	import echartss from './echarts.js'

	export default {
		data() {
			return {
				myChart: null,
				showTody: false,
				olderlist: [
					{
						label:'今日'
					}
				]
			}
		},
		onLoad(options) {
			// let that = this;
			// // 通过nextTick异步画图
			// uni.getStorage({
			// 	key: '_token',
			// 	success: function(res) {
			// 		console.log(res.data);
			// 		uni.request({
			// 			url: `http://chuangyou.yunyiit.com/api.statistics/getInfo`, //概况
			// 			header: {
			// 				'content-type': 'application/x-www-form-urlencoded',
			// 				'X-CSRF-TOKEN': res.data
			// 			},
			// 			data: {
			// 				timeType: 'all',
			// 				timeDate: '2022-03-21'
			// 			},
			// 			success: (res) => {
			// 				if (res.statusCode === 200) {
			// 					console.log(res.data, '概况')
			// 					that.myChart = document.getElementById('myEcharts');
			// 					that.$nextTick(() => {
			// 						echartss(res.data.data.receipt_line, that.myChart)
			// 					});
			// 				}
			// 			},
			// 			fail: err => {
			// 				console.log(err);
			// 			},
			// 		})
			// 	}
			// });

		},
		beforeDestroy() {
			// 页面关闭时销毁echarts实例
			this.myChart.clear();
			this.myChart.dispose();
		},
		onReady() {},
		mounted() {
			let that = this;
			// 通过nextTick异步画图
			uni.getStorage({
				key: '_token',
				success: function(res) {
					console.log(res.data);
					uni.request({
						url: `http://chuangyou.yunyiit.com/api.statistics/getInfo`, //概况
						header: {
							'content-type': 'application/x-www-form-urlencoded',
							'X-CSRF-TOKEN': res.data
						},
						data: {
							timeType: 'all',
							timeDate: '2022-03-21'
						},
						success: (res) => {
							if (res.statusCode === 200) {
								console.log(res.data, '概况')
								that.myChart = document.getElementById('myEcharts');
								// that.$nextTick(() => {
									echartss(res.data.data.receipt_line, that.myChart)
								// });
							}
						},
						fail: err => {
							console.log(err);
						},
					})
				}
			});
		},
		methods: {},
	}
</script>

<style scoped>
	/* 全局颜色高度 */
	page {
		height: 100%;
	}

	.page1 {
		width: 100%;
		height: 100%;
		background-color: #f3f4f6
	}

	/* 中心 */
	.center {
		width: 90%;
		margin: 0 auto;
		height: 45vh;
		border: 1px solid blcak;
		border-radius: 5%;
		background-color: white;
		margin-top: -13vh;
	}

	/* 头部蓝色背景 */
	.header {
		width: 100%;
		height: 30vh;
		background-color: #007AFF;
	}

	/* 头部登录的view */
	.loginView {
		margin: 0 auto;
		width: 80%;
		padding-top: 9vh;
	}

	/* 头部登录标题的样式 */
	.login {
		color: white;
		font-size: 60rpx;
	}

	/* 表单 */
	.biaodan {
		width: 80%;
		margin: 0 auto;
		padding-top: 50rpx;
	}

	/* 按钮登录 */
	.anniu {
		width: 100%;
		height: 5vh;
		margin: 0 auto;
		text-align: center;
		border: 1rpx solid #007AFF;
		background-color: #007AFF;
		margin-top: 15vh;
		padding-top: 8rpx;

	}

	/* 登录按钮字体 */
	.dengluanniu {
		font-size: 30rpx;
		color: white;
	}

	/* 新人注册和忘记密码的view */
	.footer {
		width: 100%;
		float: left;
		margin-top: 5vh;
	}

	/* 新人注册字体 */
	.xinren {
		color: #007AFF;
	}

	/* 忘记密码字体 */
	.wangji {
		float: right;
	}
</style>