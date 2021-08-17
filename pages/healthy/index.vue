<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="健康服务" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="house">
			<image style="
				position: absolute;
				width: 20%;
				height: 200rpx;
				margin-left: 5%;
				" :src="srcImg">
			</image>
			<view style="
				position: absolute;
				float: left;
				height: 60rpx;
				margin-left: 30%;
			">
				<text style="font-size: 40rpx;float: left;">五行推拿</text>
				<u-button style="width: 20rpx;float: left;height: 40rpx;margin-top: 8rpx;margin-left: 8rpx;"
					type="success">上门</u-button>
				<u-button style="width: 20rpx;float: left;height: 40rpx;margin-top: 8rpx;margin-left: 8rpx;"
					type="success">到店</u-button>
			</view>
			<view style="
				position: absolute;
				float: left;
				height: 80rpx;
				margin-left: 30%;
				margin-top: 60rpx;
			">
				<u-rate style="float: left;" :count="count" v-model="value"></u-rate>
				<text style="margin-left: 20rpx;">{{ this.value}}分</text>
			</view>
			<view style="
				position: absolute;
				float: left;
				margin-left: 30%;
				margin-top: 150rpx;
			">
				<image style="width: 50rpx;height: 50rpx;float: left;" src="../../static/images/location.png"></image>
				<text style="margin-top: 8rpx;float: left;color: gray;">河北省石家庄市裕华区181号</text>
			</view>
		</view>
		<view class="houseContent">
			<uni-list class="header3">
				<uni-list-item title="五行推拿,中医推拿" rightText="已售50" style="height: 150rpx;">
					<view slot="header" style="margin-left: 10rpx;margin-right: 5%;margin-top: 1%;">
						<text style="color: #fa3534;font-size: 40rpx;">99.00</text>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '健康服务',
				width: '',
				height: '',
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: '../../static/images/tuina.png',
				count: 5,
				value: 0,
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
		}
	}
</script>

<style>page {
		height: 100%;
	}
	
	.page1{
		width: 100%;
		height: 100%;
	}
	.house {
		margin: 0 auto;
		width: 96%;
		height: 14vh;
		margin-top: 30rpx;
	}

	.houseContent {
		margin: 0 auto;
		width: 96%;
		margin-top: 30rpx;
	}
</style>
