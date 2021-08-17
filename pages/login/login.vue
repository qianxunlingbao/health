<template>
	<view class="page1">
		<view class="header">
			<view class="loginView">
				<text class="login">登录</text>
			</view>
		</view>
		<view class="center">
			<view class="biaodan">
				<u-form :model="form" ref="uForm">
					<u-form-item prop="user" label-width="150rpx">
						<u-input v-model="form.user" placeholder="请输入用户名" />
					</u-form-item>
					<u-form-item prop="pass" label-width="150rpx">
						<u-input type="password" v-model="form.pass" placeholder="请输入密码" />
					</u-form-item>
				</u-form>
				<view class="footer">
					<text class="xinren" @click="logon">新人注册</text>
					<text class="wangji" @click="forgetPass">忘记密码</text>
				</view>
				<view class="anniu" @click="login">
					<u-toast ref="uToast" />
					<text class="dengluanniu">登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: 1,
				form: {
					user: '',
					pass: '',
				},
				message:'',
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
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		mounted() {
			const tokenLogin = uni.getStorageSync('storage_key')
			const tokenHeadLogin = tokenLogin.tokenHead
			const tokenInfo = tokenLogin.token
			const message = tokenHeadLogin + tokenInfo
			console.log(message)
			this.message = message
			console.log(navigator.userAgent)
		},
		methods: {
			// 进入登录成功之后的界面
			login() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.request({
							url: `http://121.89.195.17/mall-portal/sso/login`, //注册接口
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							data: {
								password: this.form.pass,
								username: this.form.user
							},
							method: 'POST',
							// dataType: 'json',
							success: (res) => {
								if (res.statusCode === 200) {
									const loginInfo = res.data.data
									uni.setStorage({
										key: 'storage_key',
										data: loginInfo,
										success: function() {
											// console.log('success');
										}
									});
									uni.setStorage({
										key: 'info',
										data: this.info,
										success: function() {
											// console.log('success');
										}
									})
									// this.$refs.uToast.show({
									// 	title: 'login成功',
									// 	type: 'success',
									// 	isTab: true,
									// 	duration: 200,
									// 	url: `/pages/parent/index`,		
									// })
									if (loginInfo !== '') {
										uni.switchTab({
											url: `/pages/user/index`,
										})
									}else{
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
		font-size: 40rpx;
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
