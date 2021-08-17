<template>
	<view class="page">
		<view>
			<u-navbar :background="background" :is-back="false" title-size="44" title="修改密码" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../static/images/back.png"></image>
				<view slot="right">

				</view>
			</u-navbar>
		</view>
		<view style="
			width: 90%;
			margin: 0 auto;
			margin-top: 10rpx;
		">
			<u-form :model="form" ref="uForm">
				<u-form-item style="background-color: white;" label="请输入当前登录密码" label-width="300rpx" prop="password">
					<u-input v-model="form.password" placeholder="请输入当前登录密码" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="确认新密码" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="确认新密码" />
				</u-form-item>
				<text>
					必须是6-20个英文字母、数字或符号(除空格),且字母、数字和标点符号至少包含两种
				</text>
			</u-form>
		</view>
		<view>
			<u-toast ref="uToast" />
			<u-button shape="circle" :custom-style="customStyle" type="primary" @click="save">保存</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: true,
				background: {
					backgroundColor: '#007AFF',
				},
				customStyle: {
					marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: 'white',
					fontSize: '40rpx',
					width: '80%',
					marginTop: '10vh'
				},
				form: {
					password: '',
					newpassword: ''
				}
			}
		},
		methods: {
			goBack() {
				// this.$refs.uToast.show({
				// 	title: '进入登录界面',
				// 	type: 'success',
				// 	url: '/pages/login/login',		
				// })
				uni.switchTab({
					url: `/pages/user/index`
				})
			},
			save(){
				this.$refs.uToast.show({
					title: '修改成功',
					type: 'success',
					// url: '/pages/login/login',		
				})
			},
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		background-color: #f3f4f6
	}

	.page-section-spacing {
		/* padding: 0 30rpx;
	        margin-top: 20rpx; */
		width: 100%;
		height: 100%;
	}
</style>
