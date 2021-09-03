<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around">
						<u-navbar 
							height="50" 
							:background="background" 
							title-size="40" 
							:is-back="false" 
							title="政策解读" 
							title-color="white">
							<image style="
							width: 40rpx;
							height: 40rpx;
							margin-left: 25rpx;
							" @click="goBack()" src="../../../static/images/back.png"></image>
						</u-navbar>
				</u-row>
			</view>
			<view>
				<u-row gutter="16" justify="space-around">
					<u-col span="12" style="margin-bottom: 20rpx;">
						<uni-list>
							<uni-list-item link @click="click(index)" v-for="(item,index) in list" :key="index">
								<view slot="header" style="margin-left: 0rpx;margin-right: 2%;margin-top: 1%;">
									<image style="width: 260rpx;height: 200rpx;" :src="item.img"  />
								</view>
								<view slot="body">
									<text>{{item.name}}</text><br>
									<br>
									<text style="font-size: 25rpx;color: gray;">{{item.time}}</text>
								</view>
							</uni-list-item>
						</uni-list>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../../api/request.js'
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#007AFF',
				},
				value: '',
				list: [{
					image: '../../../static/images/lifelife.png'
				}],
				list:[
					{
						name:'乡村振兴|绿色宜居村镇的内涵是什么？未来该如何发展？',
						time:'2021年1月1日',
						img: '/static/images/volunteer1.png'
					}
					
				]
			}
		},
		onShow() {

		},
		mounted() {},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			//点击事件
			click(e) {
				console.log(e)
			},
			// },
			// 定位
			// locationType(e) {
			// 	this.locationTypeIndex = e.target.value;
			// 	this.locationTypeArrayType = this.locationTypeArray[this.locationTypeIndex]
			// },
		}
	}
</script>

<style lang="scss" scoped>
	/* 全局界面颜色,高度,宽度 */
	page {
		height: 100%;
	}

	.page1 {
		height: 100vh;
	}

	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.top1 {
		width: 70%;
		height: 10vh;
	}
</style>
