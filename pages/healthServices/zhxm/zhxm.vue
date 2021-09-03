<template>
	<view class="page1">
		<u-navbar 
			height="50"  
			:background="background" 
			title-size="44" 
			:is-back="false" 
			title="智慧项目" 
			title-color="white">
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
		
		<u-grid :col="4" :border="false">
			<u-grid-item v-for="(item,index) in listdata" :key="index">
				<view @click="click(index)">
					<view style="
						border-radius: 40%;
						width: 110rpx;
						height: 110rpx;
						background-color: #007AFF;">
						<!-- <image style="width: 80rpx;height: 70rpx;left: 15%;top: 18%;position: absolute" :src="item.images"></image> -->
						<image style="width: 80rpx;height: 70rpx;left: 15%;top: 18%;" :src="item.images"></image>
					</view>
					<text style="margin-left: 0rpx;">{{item.name}}</text>
				</view>
			</u-grid-item>
		</u-grid>
		<u-row gutter="16" justify="space-around">
			<u-col span="6" style="margin-bottom: 20rpx;" v-for="(item,index) in lslfData" :key="index">
				<view style="text-align: center;border-right: gray solid 1rpx;">
					<text style="color: #F29100;">
						——{{item.name}}——
					</text>
					<br>
					<text style="color: gray;font-size: 24rpx;">
						{{item.nameMessage}}
					</text>
					<br>
					<u-col span="12">
						<u-col span="12">
							<image style="width: 150rpx;height: 150rpx;padding-left: 15rpx;" :src="item.images"></image>
							<image style="width: 150rpx;height: 150rpx;padding-left: 15rpx;" :src="item.imagess"></image>
						</u-col>
					</u-col>
				</view>
			</u-col>
		</u-row>
		<u-row gutter="16" justify="space-around">
			<u-col span="3"  v-for="(item,index) in yqData" :key="index">
				<view style="text-align: center;border-right: gray solid 1rpx;border-top: gray solid 1rpx;">
					<text style="color: #F29100;">
						{{item.name}}
					</text>
					<br>
					<text style="color: gray;font-size: 24rpx;">
						{{item.nameMessage}}
					</text>
					<br>
					<image style="width: 100rpx;height: 120rpx;padding-top: 20rpx;" :src="item.images"></image>
				</view>
			</u-col>
		</u-row>
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
						name: '健康问诊',
						images: '../../../static/images/Firstaidkit.png'
					},
					{
						name: '健康保健',
						images: '../../../static/images/Seed.png'
					},{
						name: '中医按摩',
						images: '../../../static/images/Massage.png'
					},
					{
						name: '健康检测',
						images: '../../../static/images/Heartratemonitorfreeicon.png'
					}
				],
				lslfData: [
					{
						name:'绿色疗法',
						nameMessage: '家用血压测量仪',
						images:'../../../static/images/zhiliao.png',
						imagess:'../../../static/images/zhiliao.png',
					},
					{
						name:'为爱而生',
						nameMessage: '医用压缩雾化器',
						images:'../../../static/images/zhiliao.png',
						imagess:'../../../static/images/zhiliao.png',
					}
				],
				yqData: [
					{
						name:'监测仪',
						nameMessage:'血糖尿酸',
						images:'../../../static/images/jcy.png'
					},
					{
						name:'治疗仪',
						nameMessage:'捍卫健康',
						images:'../../../static/images/zly.png'
					},
					{
						name:'血压计',
						nameMessage:'双组记忆',
						images:'../../../static/images/xyj.png'
					},
					{
						name:'惠诺德',
						nameMessage:'抑菌凝胶',
						images:'../../../static/images/hnd.png'
					},
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
