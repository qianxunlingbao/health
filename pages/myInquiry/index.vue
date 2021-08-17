<template>
	<view class="page1">
		<view>
			<u-navbar 
				:background="background" 
				back-icon-color="white" 
				title="我的问诊"  
				title-size="44"
				:is-back="false"
				title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view>
			<view @click="openInfo">
				<image style="
					position: absolute;
					width: 20%;
					height: 200rpx;
					margin-left: 5%;
					margin-top: 100rpx;
					" :src="srcImg">
				</image>
				<view style="
					position: absolute;
					float: left;
					height: 60rpx;
					margin-left: 5%;
					margin-top: 20rpx;
				">
					<text style="font-size: 40rpx;float: left;">描述：身上好像过敏了，出现了小红点</text>
				</view>
				<view style="
					position: absolute;
					float: left;
					height: 60rpx;
					margin-left: 60%;
					margin-top: 100rpx;
				">
					<text style="color: gray;">2020-01-01 19:00</text>
				</view>
				<view style="
					position: absolute;
					float: left;
					height: 60rpx;
					margin-left: 60%;
					margin-top: 240rpx;
				">
					<text style="font-size: 40rpx;color: gray;">状态：已答复</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '我的问诊',
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: '../../static/images/douzi.png',
			}
		},
		created() {

		},
		methods: {
			openInfo(){
				uni.navigateTo({
					url: '/pages/inquiryInfo/inquiryInfo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			goBack(){
				// uni.navigateTo({
				// 	url: '/pages/inquiry/index',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// })
				uni.navigateBack({
				    delta: 1
				});
			},
		}
	}
</script>

<style scoped>
page {
		height: 100%;
	}
	
	.page1{
		width: 100%;
		height: 100%;
	}
</style>
