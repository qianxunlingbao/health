<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="健康知识" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="health1" @click="openInfo">
			<view style="">
				<text style="
							font-size: 40rpx;
						">关节疼痛怎么处理_骨科疼痛常用的治疗方法_健康百科 </text>
			</view>
			<view style="height: 220rpx;">
				<image style="
							width: 33%;
							height: 200rpx;
							margin-top: 10rpx;
							" :src="srcImg">
				</image>
			</view>
			<view style="height: 50rpx;">
				<text style="font-size: 25rpx;">健康快点</text>
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
				title: '健康知识',
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: 'https://img2.baidu.com/it/u=2480557862,3975596080&fm=26&fmt=auto&gp=0.jpg',
			}
		},
		created() {

		},
		methods: {
			goBack(){
				uni.switchTab({
					url: `/pages/life/index`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			openInfo(){
				uni.navigateTo({
					url: '/pages/healthknow/knowInfo/knowInfo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
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
	.health1 {
		margin: 0 auto;
		width: 95%;
		margin-top: 30rpx;
	}
</style>
