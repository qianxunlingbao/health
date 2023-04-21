<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" title-size="44" back-icon-color="white" title="工作台" title-color="black">
			</u-navbar>
		</view>
		<view style="width: 100%;height: 18%;background-color: white;margin-top: 20px;">
			<view style="width: 90%;margin: auto;padding-top: 20px;font-size: 16px;">
				<span style="color: #00AC7D;">|</span>客户
			</view>
			<view style="width: 90%;margin: auto;padding-top: 20px;font-size: 16px;">
				<u-grid :col="4" :border='false'>
					<u-grid-item>
						<u-icon name="account" :size="46"></u-icon>
						<view class="grid-text">客户列表</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="account" :size="46"></u-icon>
						<view class="grid-text">已成交</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="account" :size="46"></u-icon>
						<view class="grid-text">客户统计</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(options) {

		},
		beforeDestroy() {},
		onReady() {},
		mounted() {

		},
		methods: {},
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

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
</style>