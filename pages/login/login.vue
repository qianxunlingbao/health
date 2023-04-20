<template>
	<view class="page1">
		<!-- <view class="header">
			<view class="loginView">
				<text class="login">登录</text>
			</view>
		</view> -->
		<!-- <view class="center"> -->
		<view>
			<view class="biaodan">
				<u-form :model="form" ref="uForm">
					<u-form-item prop="user" label-width="150rpx">
						<u-input v-model="form.user" placeholder="请输入用户名" />
					</u-form-item>
					<u-form-item prop="pass" label-width="150rpx">
						<u-input type="password" v-model="form.pass" placeholder="请输入密码" />
					</u-form-item>
					<u-form-item>
						<u-input v-model="form.captch" placeholder="验证码" /><u-image slot="right"
							style="position: absolute;width: 30%;right: 0;top: 30%;" mode="widthFix"
							:src="src"></u-image>
					</u-form-item>
				</u-form>
				<!-- <view class="footer"> -->
				<view>
					<u-button style="background-color: lightgreen;" shape="circle" text="按钮形状" @click="login">登录</u-button>
					<!-- <text class="xinren" @click="logon">新人注册</text>
					<text class="wangji" @click="forgetPass">忘记密码</text> -->
				</view>
				<!-- <view class="anniu" @click="login">
					<u-toast ref="uToast" />
					<text class="dengluanniu">登录</text>
				</view> -->
			</view>
		</view>
		<view style="width: 100%;height: 300px;background-color:lightgreen;padding-top: 20px;margin-top: 20px;">
			<text
				style="color: white;font-size: 40rpx;font-family: 'Courier New', Courier, monospace;font-weight: bold;margin-left: 20px;">创优数字化综合管理平台</text>
			<view style="width: 90%;height: 70%;background-color: white;margin: auto;margin-top:20px">
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

	export default {
		data() {
			return {
				myChart: null,
				showTody: false,
				olderlist: [],
				src: '',
				info: 1,
				form: {
					user: '',
					pass: '',
					captch: '',
				},
				message: '',
				isLogin: false,
				rules: {
					user: [{
						required: true,
						message: '请输入用户名',
						trigger: ['blur', 'change'],
					}],
					pass: [{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change'],
					}],
					captch: [{
						required: true,
						message: '请输入验证码',
						trigger: ['blur', 'change'],
					}],
				}
			}
		},
		onLoad(options) {
			let that = this;
			// 通过nextTick异步画图
			this.$nextTick(() => {
				that.drawLines();
			});
		},
		beforeDestroy() {
			// 页面关闭时销毁echarts实例
			this.myChart.clear();
			this.myChart.dispose();
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		mounted() {
			uni.request({
				url: `http://chuangyou.yunyiit.com/captcha?Math.random()`, //注册接口
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					// 'X-CSRF-TOKEN':'xxx'
				},
				responseType: 'arraybuffer',
				success: (res) => {
					if (res.statusCode === 200) {
						console.log(res.data)
						let url = 'data:image/png;base64,' + uni.arrayBufferToBase64(res.data);
						this.src = url
						// console.log(res.data)
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			const tokenLogin = uni.getStorageSync('storage_key')
			const tokenHeadLogin = tokenLogin.tokenHead
			const tokenInfo = tokenLogin.token
			const message = tokenHeadLogin + tokenInfo
			console.log(message)
			this.message = message
			console.log(navigator.userAgent)
		},
		methods: {
			async drawLines() {
				// 这里是初始化的方式，通过id查询找到你的canvas标签
				this.myChart = echarts.init(document.getElementById('myEcharts'));
				// 这里我初始化了4个数组用来存放 后端接口给我的数据

				// 这里开始就是echarts的配置项了
				let option = {
					title: {
						text: '回款状况'
					},
					// x轴数据
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					},
					// y轴数据
					yAxis: {
						type: 'value',
					},
					// 这里写2个对象是2条线条，3个则是3条
					series: [{
						// data使用刚才定义的数组，数据从后端接口中取得
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line',
						smooth: true,
					}],
					grid: {
						// 这里可以防止Y轴显示不全
						containLabel: true
					}
				}

				// 这里不要忘记把option设置给echarts实例
				this.myChart.setOption(option);

				// 这里是用于窗口变化时的自适应，利用的是echarts自带的resize方法
				// 如果你打印出来这个echarts实例，可以在函数里面找到这个方法
				window.addEventListener('resize', () => {
					this.myChart.resize()
				});
			},

			// 进入登录成功之后的界面
			login() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// let ps = md5(this.form.pass)
						// console.log(ps)
						uni.request({
							url: `http://chuangyou.yunyiit.com/login/login`, //注册接口
							header: {
								'content-type': 'application/x-www-form-urlencoded',
								// 'X-CSRF-TOKEN':'xxx'
							},
							data: {
								password: md5(this.form.pass),
								username: this.form.user,
								yzm: this.form.captch,
								device: 'PC'
							},
							method: 'POST',
							// dataType: 'json',
							success: (res) => {
								if (res.statusCode === 200) {
									console.log(res)
									uni.request({
										url: `http://chuangyou.yunyiit.com/api.Report/sale`, //销售报表
										header: {
											'content-type': 'application/x-www-form-urlencoded',
											'X-CSRF-TOKEN': res.data._token
										},
										data:{
											timeType:'all',
											timeDate:'2022-03-21'
										},
										success: (res) => {
											if (res.statusCode === 200) {
												console.log(res.data)
											}
										},
										fail: err => {
											console.log(err);
										},
									})
									uni.request({
										url: `http://chuangyou.yunyiit.com/api.statistics/getInfo`, //概况
										header: {
											'content-type': 'application/x-www-form-urlencoded',
											'X-CSRF-TOKEN': res.data._token
										},
										data:{
											timeType:'all',
											timeDate:'2022-03-21'
										},
										success: (res) => {
											if (res.statusCode === 200) {
												console.log(res.data)
											}
										},
										fail: err => {
											console.log(err);
										},
									})
									uni.request({
										url: `http://chuangyou.yunyiit.com/api.Customer/customerFollow`, //跟进客户列表
										header: {
											'content-type': 'application/x-www-form-urlencoded',
											'X-CSRF-TOKEN': res.data._token
										},
										data:{
											timeType:'all',
											timeDate:'2022-03-21'
										},
										success: (res) => {
											if (res.statusCode === 200) {
												console.log(res.data)
											}
										},
										fail: err => {
											console.log(err);
										},
									})
									uni.request({
										url: `http://chuangyou.yunyiit.com/api.CustomerFollow/custInfo`, //客户详情
										header: {
											'content-type': 'application/x-www-form-urlencoded',
											'X-CSRF-TOKEN': res.data._token
										},
										data:{
											customer_id:1
										},
										success: (res) => {
											if (res.statusCode === 200) {
												console.log(res.data)
											}
										},
										fail: err => {
											console.log(err);
										},
									})
									
									if (loginInfo !== '') {
										// uni.switchTab({
										// 	url: `/pages/user/index`,
										// })
									} else {
										this.$refs.uToast.show({
											title: '请输入正确的用户名或者密码',
											type: 'success',

										})
									}
								}
							},
							fail: err => {
								console.log(err);
							},
						})
					} else {
						console.log('验证失败');
					}
				});

			},
			// 进入注册界面
			logon() {
				// this.$refs.uToast.show({
				// 	title: '进入注册界面',
				// 	type: 'success',
				// 	url: '/pages/logon/logon',		
				// })
				uni.reLaunch({
					url: '/pages/logon/logon',
				})
			},
			// 进入忘记密码界面
			forgetPass() {
				// this.$refs.uToast.show({
				// 	title: '忘记密码',
				// 	type: 'success',
				// 	url: '/pages/forgetPass/forgetPass',		
				// })
				uni.reLaunch({
					url: '/pages/forgetPass/forgetPass',
				})
			},
		}
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