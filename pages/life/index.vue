<template>
	<view class="page1">
		<view class="nav">
			<u-navbar 
				:background="background" 
				:is-back="false" 
				title="生活服务" 
				title-size="44"
				title-color="white"
				>
			</u-navbar>
		</view>
		<view class="header11">
			<image style="width: 100%;height: 100%;" src="../../static/images/leftHeader.png"></image>
		</view>
		<view class="content">
			<view class="content1" @click="openFirst">
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">家政清洁</text>
					<br>
					<text style="font-size: 30rpx;color: #2979ff;">Housekeeping</text>
				</view>
			</view>
			<view class="content2" @click="openSecond">
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">健康服务</text>
					<br>
					<text style="font-size: 30rpx;color: #18b566;">Healthy</text>
				</view>
			</view>
			<view class="content3" @click="openThird">
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">在线问诊</text>
					<br>
					<text style="font-size: 30rpx;color: #18b566;">Online inquiry</text>
				</view>
			</view>
			<view class="content4" @click="openFourth">
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">健康知识</text>
					<br>
					<text style="font-size: 30rpx;color: #2979ff;">Health knowledge</text>
				</view>
			</view>
			<view class="content5" @click="openFifth">
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">康养商城</text>
					<br>
					<text style="font-size: 30rpx;color: #2979ff;">Shopping Mall</text>
				</view>
			</view>
			<view class="content6" @click="openSixth">
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">在线挂号</text>
					<br>
					<text style="font-size: 30rpx;color: #9370D8;">Registr</text>
				</view>
			</view>
			<view class="content7" @click="openSeventh">
				<u-toast ref="uToast" />
				<view style="position: relative;margin-top: 5%;margin-left: 3%;">
					<text style="font-size: 40rpx;">志愿者</text>
					<br>
					<text style="font-size: 30rpx;color: #18b566;">Volunteers</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tabBar from '../../components/tarBar/tabBar.vue'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				title: '生活服务',
				background: {
					backgroundColor: '#007AFF',
				},
			}
		},
		methods: {
			// 打开家政清洁
			openFirst() {
				uni.navigateTo({
					url: '/pages/houseKeeping/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			},
			// 打开健康服务
			openSecond(){
				uni.navigateTo({
					url: '/pages/healthy/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 打开在线问诊
			openThird(){
				uni.navigateTo({
					url: '/pages/inquiry/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 打开健康知识
			openFourth(){
				uni.navigateTo({
					url: '/pages/healthknow/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 打开康养商城
			openFifth(){
				uni.navigateTo({
					// url: '/pages/shopping/shopping',
					url: '/pages/life/supermarket/supermarket',
					// url: '/pages/life/market/market',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 打开在线挂号
			openSixth(){
				uni.navigateTo({
					url: '/pages/registr/registr',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 打开志愿者
			openSeventh(){
				uni.navigateTo({
					url: '/pages/volunteer/volunteer',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				// this.$refs.uToast.show({
				// 	title: '界面还在赶工',
				// 	type: 'warning',
				// 	// duration: 200,
				// 	// url: '/pages/editPass/editPass'
				// })
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}
	
	.page1{
		width: 100%;
		height: 100%;
	}
	.header11 {
		margin: 0 auto;
		width: 90%;
		height: 18vh;
		margin-top: 5vw;
	}

	.content {
		position: absolute;
		margin: 0 auto;
		width: 100%;
/* 		height: 55vh; */
		margin-top: 1vw;
	}

	.content1 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		background-image: url(../../static/images/clean1.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content2 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		background-image: url(../../static/images/Online.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content3 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		background-image: url(../../static/images/Lifeservice.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content4 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		background-image: url(../../static/images/HealthEducation.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content5 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		background-image: url(../../static/images/ShoppingMall.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content6 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		background-image: url(../../static/images/Register.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content7 {
		float: left;
		width: 45.5%;
		height: 15vh;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 1%;
		/* background-color: blue; */
		background-image: url(../../static/images/Volunteers.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
