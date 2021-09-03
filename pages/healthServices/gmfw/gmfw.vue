<template>
	<view class="page1">

		<u-navbar height="50"  :background="background" title-size="44" :is-back="false" title="购买服务" title-color="white">
			<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
		</u-navbar>

		<!-- 轮播 -->
		<u-col span="12" style="margin-bottom: 20rpx;">
			<u-swiper :list="list"></u-swiper>
		</u-col>
		
		<u-grid :col="5" :border="false">
			<u-grid-item v-for="(item,index) in listdata" :key="index">
				<view @click="click(index)">
					<view style="
						border-radius: 40%;
						width: 110rpx;
						height: 110rpx;
						background-color: #007AFF;">
						<image style="width: 80rpx;height: 70rpx;left: 15%;top: 18%;" :src="item.images"></image>
					</view>
					<text style="margin-left: 15rpx;">{{item.name}}</text>
				</view>
			</u-grid-item>
		</u-grid>
		
		<uni-list>
			<uni-list-item link @click="click(index)" v-for="(item,index) in listData" :key="index">
				<view slot="header" style="margin-left: 0rpx;margin-right: 2%;margin-top: 1%;">
					<image style="width: 260rpx;height: 200rpx;" :src="item.img" />
				</view>
				<view slot="body">
					<text>{{item.name}}</text><br>
					<text style="font-size: 25rpx;color: gray;">{{item.address}}</text><br>
					<br>
					<text style="font-size: 25rpx;color: gray;">{{item.time}}</text>
				</view>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '购买服务',
				background: {
					backgroundColor: '#007AFF',
				},
				list: [{
					image: '../../../static/images/aiziyanglao.png'
				}],
				listData: [{
						name: '2020年10月1号，顺平县政府购买智慧养老服务平台',
						time: '2021年1月1日',
						img: '/static/images/xibao.png'
					}
				],
				listdata: [{
						name: '顺平县',
						images: '../../../static/images/dingwei (1).png'
					},
					{
						name: '宣化区',
						images: '../../../static/images/dingwei (2).png'
					},{
						name: '康保县',
						images: '../../../static/images/dingwei (3).png'
					},
					{
						name: '曲阳县',
						images: '../../../static/images/dingwei (4).png'
					},{
						name: '饶阳县',
						images: '../../../static/images/dingwei (5).png'
					}
				]
			}
		},
		created() {

		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			click(e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}

	.page1 {
		width: 100%;
		height: 100%;
	}

	.fengmian {
		margin: 0 auto;
		width: 95%;
		height: 25vh;
		margin-top: 1vw;
	}
</style>
