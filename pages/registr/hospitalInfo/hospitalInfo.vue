<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="科室医护"
				title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view>
			<view class="end-title">
				<view v-for="(item,index) in list" :key="index" :class="{btna:count == index}" @tap="change(index)">
					{{item.name}}
				</view>
			</view>
			<view class="end-cont" :class="{dis:btnnum == 0}">
				　　<uni-list>
							<uni-list-item  >
								<view slot="header">
									<u-avatar :src="src"></u-avatar>
								</view>
								<view slot="body" @click="openDoctor" style="margin-left: 20rpx;">
									<text>
										谢汉兴 
										<span style="color: gray;font-size: 30rpx;margin-left: 20rpx;">
											全科
										</span>
									</text>
									<br><br>
									<view 
										style="
											width: 70%;
											overflow: hidden;
											text-overflow: ellipsis;
											white-space: nowrap;
											color: gray;
											font-size: 30rpx
										"
									>
										医学博士、教授、主任医师、博士导师、原珠海医院院长
									</view>
								</view>
								<view slot="footer" >
									
								</view>
							</uni-list-item>
						</uni-list>
			</view>
			<view class="end-cont" :class="{dis:btnnum == 1}">
				　　1信息
			</view>
			<view class="end-cont" :class="{dis:btnnum == 2}">
				　　2信息
			</view>
			<!-- <view>
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
					swiperWidth="750"></u-tabs-swiper>
			</view> -->
			<!-- <swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
						<uni-list>
							<uni-list-item  >
								<view slot="header">
									<u-avatar :src="src"></u-avatar>
								</view>
								<view slot="body" @click="openDoctor" style="margin-left: 20rpx;">
									<text>
										谢汉兴 
										<span style="color: gray;font-size: 30rpx;margin-left: 20rpx;">
											全科
										</span>
									</text>
									<br><br>
									<view 
										style="
											width: 70%;
											overflow: hidden;
											text-overflow: ellipsis;
											white-space: nowrap;
											color: gray;
											font-size: 30rpx
										"
									>
										医学博士、教授、主任医师、博士导师、原珠海医院院长
									</view>
								</view>
								<view slot="footer" >
									
								</view>
							</uni-list-item>
						</uni-list>
					</scroll-view>
				</swiper-item>
			</swiper> -->
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				btnnum: 0,
				items: ["基本信息", "公告信息", "换区信息"],
				count: "",
				title: '科室医护',
				background: {
					backgroundColor: '#007AFF',
				},
				src: '../../../static/images/doct.png',
				list: [{
						name: '全科'
					}, {
						name: '检验科'
					}, {
						name: '公共卫生科'
					},
					{
						name: '中医科'
					}, {
						name: '口腔科'
					}, {
						name: '康复科'
					},
					{
						name: '内科'
					}, {
						name: '妇科'
					}, {
						name: '外科'
					},
				],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				tabs: [{
					name: '十年'
				}, {
					name: '青春'
				}, {
					name: '之约'
				}],
			}
		},
		created() {

		},
		methods: {
			change(e) {
				this.count = e
				this.btnnum = e
				console.log(this.count)
			},
			goBack() {
				uni.navigateTo({
					url: '/pages/registr/registr',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			openDoctor() {
				uni.navigateTo({
					url: '/pages/registr/docotor/docotor',
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

	.page1 {
		width: 100%;
		height: 100%;
	}

	/* 将三个内容view的display设置为none(隐藏) */
	.end-title {
		display: flex;
	}

	.end-title view {
		flex-grow: 1;
		text-align: center;
	}

	.end-cont {
		display: none;
		background: #C8C7CC;
	}

	.btna {
		color: #FFFFFF;
		background: #00A0FF;
	}

	.dis {
		display: block;
	}
</style>
