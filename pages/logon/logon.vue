<template>
	<view class="page1">
		<view class="header">
			<view class="loginView">
				<text class="login">注册</text>
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
					<u-form-item prop="phone" label-width="150rpx">
						<u-input v-model="form.phone" placeholder="手机号" />
					</u-form-item>
					<!-- <u-form-item label-width="150rpx">
						<u-input v-model="form.captcha" placeholder="验证码" />
						<text class="xinren">获取验证码</text>
					</u-form-item> -->
				</u-form>
				<view class="footer">
					<text class="xinren" @click="logon">返回登录</text>
				</view>
				<view class="anniu" @click="login">
					<u-toast ref="uToast" />
					<text class="dengluanniu">注册</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					user: '',
					pass: '',
					phone: '',
					captcha: '123456'
				},
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
					phone: [
						{
							required: true,
							message: '请输入手机号',
							trigger: ['blur', 'change'],
						},
						{
							pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
							transform(value) {
								return String(value);
							},
							message: '请输入合法的手机号',
							trigger: ['change', 'blur'],
						},
					],
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			// 进入登录界面
			login(captcha, pass, phone, user) {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.request({
							url: `http://121.89.195.17/mall-portal/sso/register`, //注册接口
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							data: {
								authCode: this.form.captcha,
								password: this.form.pass,
								telephone: this.form.phone,
								username: this.form.user,
							},
							method: 'POST',
							dataType: 'json',
							success: (res) => {
								if (res.statusCode === 200) {
									console.log(res.data)
									// this.$refs.uToast.show({
									// 	title: '注册成功',
									// 	type: 'success',
									// 	url: '/pages/login/login',		
									// })
									uni.reLaunch({
										url: '/pages/login/login',
									})
								}
							},
						})
					} else {
						console.log('验证失败')
					}
				})
			},
			//重新进入登录界面
			logon() {
				// this.$refs.uToast.show({
				// 	title: '进入登录',
				// 	type: 'success',
				// 	url: '/pages/login/login',		
				// })
				uni.reLaunch({
					url: '/pages/login/login',
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
		height: 50vh;
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

	/* 头部注册的view */
	.loginView {
		margin: 0 auto;
		width: 80%;
		padding-top: 9vh;
	}

	/* 头部注册标题的样式 */
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

	/* 注册登录 */
	.anniu {
		width: 100%;
		height: 5vh;
		margin: 0 auto;
		text-align: center;
		border: 1rpx solid #007AFF;
		background-color: #007AFF;
		margin-top: 10vh;
		padding-top: 8rpx;
	}

	/* 注册按钮字体 */
	.dengluanniu {
		font-size: 40rpx;
		color: white;
	}

	/* 获取验证码字体 */
	.xinren {
		color: #007AFF;
	}

	/* 新人注册和忘记密码的view */
	.footer {
		width: 100%;
		float: left;
		margin-top: 4vh;
	}
</style>
