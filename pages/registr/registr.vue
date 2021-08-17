<template>
	<view class="page1">
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="在线问诊" title-color="white">
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
			<uni-list>
				<uni-list-item>
					<view slot="header" style="margin-left: 10rpx;margin-right: 5%;margin-top: 1%;">
						<image style="width: 250rpx;height: 250rpx;" src="/static/images/registr1.png" mode="widthFix" />
					</view>
					<view slot="body">
						<text>石家庄市和平医院</text><br>
						<text style="font-size: 25rpx;color: gray;">中国人民解放军白求恩国际和平医院成立于1937年11月7日,是一家综合性三级甲等医院</text>
					</view>
					<view slot="footer">
						<u-button 
							@click="openhosInfo"
							type="primary"
							style="
								margin-top: 200rpx;
								width: 100rpx;
								height: 40rpx;
								font-size: 20rpx;
								background-color: #2B85E4;
							"
						>在线挂号</u-button>
					</view>
				</uni-list-item>
				<uni-list-item>
					<view slot="header" style="margin-left: 10rpx;margin-right: 5%;margin-top: 1%;">
						<image style="width: 250rpx;height: 250rpx;" src="/static/images/registr2.png" mode="widthFix" />
					</view>
					<view slot="body">
						<text>石家庄市第六医院</text><br>
						<text style="font-size: 25rpx;color: gray;">石家庄市妇幼保健院（石家庄市第六医院）始建于1951年，是一所二级甲等妇幼保健院。</text>
					</view>
					<view slot="footer">
						<u-button 
							type="primary"
							@click="openhosInfo"
							style="
								margin-top: 200rpx;
								width: 100rpx;
								height: 40rpx;
								font-size: 20rpx;
								background-color: #2B85E4;
							"
						>在线挂号</u-button>
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
				title: '在线问诊',
				background: {
					backgroundColor: '#007AFF',
				},
			}
		},
		created() {

		},
		methods: {
			openhosInfo(){
				uni.navigateTo({
					url: '/pages/registr/hospitalInfo/hospitalInfo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			goBack() {
				uni.switchTab({
					url: '/pages/life/index',
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
</style>
