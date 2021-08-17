<template>
	<view class="page1">
		<view>
			<u-navbar :background="background" title-size="44" :is-back="false" title="康养商城" title-color="white">
			<image style="
				width: 40rpx;
				height: 40rpx;
				margin-left: 35rpx;
				" 
				@click="goBack()"
				src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="health1">
			<!-- <view>
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
					swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
						
					</scroll-view>
				</swiper-item>
			</swiper> -->
			<u-dropdown>
				<u-dropdown-item v-model="value1" title="综合" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="销量" :options="options2"></u-dropdown-item>、
				<u-dropdown-item v-model="value3" title="价格" :options="options3"></u-dropdown-item>
			</u-dropdown>
			<uni-list>
				<uni-list-item>
					<view slot="header">
						<image style="
							width: 230rpx;
							height: 280rpx;
							" :src="srcImg">
						</image>
					</view>
					<view slot="body" @click="openShopInfo" >
						<text>海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器</text>
						<br>
						<text style="color: #F0AD4E;">
							爱心价￥99 
							<span style="color: gray;">
								原价
							</span>
							<span style="color: gray;text-decoration: line-through;">
								￥170
							</span>
						</text>
						<br>
						<br>
						<br>
						<text>1290人付款</text>
					</view>
					<view slot="footer" style="margin-top: 200rpx;">
						<text style="font-size: 50rpx;">...</text>
					</view>
				</uni-list-item>
				<uni-list-item>
					<view slot="header">
						<image style="
							width: 230rpx;
							height: 280rpx;
							" src="../../static/images/shopping1.png">
						</image>
					</view>
					<view slot="body" @click="openShopInfo" >
						<text>鱼跃雾化机儿童医用家用化痰止咳小儿宝宝婴儿装用医疗压缩雾化器</text>
						<br>
						<text style="color: #F0AD4E;">
							爱心价￥79 
							<span style="color: gray;">
								原价
							</span>
							<span style="color: gray;text-decoration: line-through;">
								￥139
							</span>
						</text>
						<br>
						<br>
						<br>
						<text>1130人付款</text>
					</view>
					<view slot="footer" style="margin-top: 200rpx;">
						<text style="font-size: 50rpx;">...</text>
					</view>
				</uni-list-item>
				<uni-list-item>
					<view slot="header">
						<image style="
							width: 230rpx;
							height: 280rpx;
							" src="../../static/images/shopping2.png">
						</image>
					</view>
					<view slot="body" @click="openShopInfo" >
						<text>手摇床家用护理床床椅分离家用医疗多功能老人手动轮椅床</text>
						<br>
						<text style="color: #F0AD4E;">
							爱心价￥499 
							<span style="color: gray;">
								原价
							</span>
							<span style="color: gray;text-decoration: line-through;">
								￥1200
							</span>
						</text>
						<br>
						<br>
						<br>
						<text>953人付款</text>
					</view>
					<view slot="footer" style="margin-top: 200rpx;">
						<text style="font-size: 50rpx;">...</text>
					</view>
				</uni-list-item>
				<uni-list-item>
					<view slot="header">
						<image style="
							width: 230rpx;
							height: 280rpx;
							" src="../../static/images/shopping3.png">
						</image>
					</view>
					<view slot="body" @click="openShopInfo" >
						<text>医药箱家用药箱家庭装特大小号多层急救医疗箱带药全套应急收纳盒</text>
						<br>
						<text style="color: #F0AD4E;">
							爱心价￥35
							<span style="color: gray;">
								原价
							</span>
							<span style="color: gray;text-decoration: line-through;">
								￥99
							</span>
						</text>
						<br>
						<br>
						<br>
						<text>888人付款</text>
					</view>
					<view slot="footer" style="margin-top: 200rpx;">
						<text style="font-size: 50rpx;">...</text>
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
				title: '康养商城',
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: '../../static/images/zhiliao.png',
				// list: [{
				// 	name: '综合'
				// }, {
				// 	name: '销量'
				// }, {
				// 	name: '价格'
				// }],
				// // 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				// current: 0, // tabs组件的current值，表示当前活动的tab选项
				// swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				// tabs: [{
				// 	name: '十年'
				// }, {
				// 	name: '青春'
				// }, {
				// 	name: '之约'
				// }],
				value1: 1,
				value2: 2,
				value3: 3,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '多',
						value: 1,
					},
					{
						label: '少',
						value: 2,
					},
				],
				options3: [{
						label: '1000-1500',
						value: 1,
					},
					{
						label: '1500-2000',
						value: 2,
					},
				],
			}
		},
		created() {

		},
		methods: {
			// // tabs通知swiper切换
			// tabsChange(index) {
			// 	this.swiperCurrent = index;
			// },
			// // swiper-item左右移动，通知tabs的滑块跟随移动
			// transition(e) {
			// 	let dx = e.detail.dx;
			// 	this.$refs.uTabs.setDx(dx);
			// },
			// // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// // swiper滑动结束，分别设置tabs和swiper的状态
			// animationfinish(e) {
			// 	let current = e.detail.current;
			// 	this.$refs.uTabs.setFinishCurrent(current);
			// 	this.swiperCurrent = current;
			// 	this.current = current;
			// },
			// // scroll-view到底部加载更多
			// onreachBottom() {

			// }
			openShopInfo(){
				uni.navigateTo({
					url: '/pages/shopInfo/shopInfo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			goBack(){
				uni.switchTab({
					url: '/pages/life/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
		margin-top: 30rpx;
	}
</style>
