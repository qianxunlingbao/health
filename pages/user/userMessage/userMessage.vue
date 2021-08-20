<template>
	<view class="page">
		<view>
			<u-navbar :background="background" :is-back="false" title-size="44" title="基本信息" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
				<view slot="right">

				</view>
			</u-navbar>
		</view>
		<view style="
			width: 100%;
			margin: 0 auto;
			
		">
			<uni-list-item :showArrow="true">
				<view slot="body" style="width: 47%;">
					<view style="margin-left: 15rpx;">
						<text style="float:left;">头像</text>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :showArrow="true">
				<view slot="body" style="width: 47%;">
					<view style="margin-left: 15rpx;">
						<text style="float:left;">人脸信息</text>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :showArrow="true">
				<view slot="body" style="width: 47%;">
					<view style="margin-left: 15rpx;">
						<text style="float:left;">昵称</text>
					</view>
				</view>
			</uni-list-item>
		</view>
		<view style="width: 100%;padding-top: 2%;margin: 0 auto;">
			<uni-list-item v-for="(item,index) in basicInfo" :key="index">
				<view slot="body" style="width: 47%;">
					<view style="margin-left: 15rpx;">
						<text style="float:left;">{{item.name}}</text>
					</view>
				</view>
				<view slot="footer">
					<view style="margin-left: 200rpx;">
						<text style="float:left;color: gray;">{{item.label}}</text>
					</view>
				</view>
			</uni-list-item>
			<!-- <u-form :model="form" ref="uForm">
				<u-form-item style="background-color: white;" label="姓名" label-width="150rpx" prop="password">
					<u-input v-model="form.password" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="证件类型" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="证件号码" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="志愿者编号" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="注册日期" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="性别" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="出生日期" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
				<u-form-item style="background-color: white;" label="政治面貌" label-width="150rpx" prop="newpassword">
					<u-input v-model="form.newpassword" placeholder="" />
				</u-form-item>
			</u-form> -->
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
				form: {
					password: '',
					newpassword: ''
				},
				basicInfo:[
					{
						name:'姓名',
						label:'小明'
					},
					{
						name:'证件类型',
						label:'身份证'
					},
					{
						name:'证件号码',
						label:'132211199909283456'
					},
					{
						name:'志愿者编号',
						label:'00000001'
					},
					{
						name:'注册日期',
						label:'2020-01-01'
					},
					{
						name:'性别',
						label:'男'
					},
					{
						name:'出生日期',
						label:'2000-01-01'
					},
					{
						name:'政治面貌',
						label:'共青团员'
					}
				]
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

	.touxiang {}
</style>
