<template>
	<view class="page1">
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="志愿者服务" title-color="white">
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
			<view class="fengmian">
				<image style="
					width: 100%;
					height: 100%;
					border-radius: 3%;
					" src="../../static/images/voluteerFengMian.png"></image>
					
			</view>
			<view style="height: 4vh;margin-top: 1vh;">
				<text style="font-size: 40rpx">活动</text>
				<text style="float: right;">更多> </text>
			</view>
			<uni-list>
				<uni-list-item link @click="openActivity" v-for="(item,index) in list" :key="index">
					<view slot="header" style="margin-left: 0rpx;margin-right: 2%;margin-top: 1%;">
						<image style="width: 260rpx;height: 200rpx;" :src="item.img"  />
					</view>
					<view slot="body">
						<text>{{item.name}}</text><br>
						<text style="font-size: 25rpx;color: gray;">地址：{{item.address}}</text><br>
						<text style="font-size: 25rpx;color: gray;">
							招募：<span style="color: red;font-weight: bold;">{{item.recruit}}</span>名&nbsp&nbsp&nbsp 已招募：<span style="color: red;font-weight: bold;">{{item.overrecruit}}</span>名
						</text><br>
						<text style="font-size: 25rpx;color: gray;">{{item.time}}</text>
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
				title: '志愿者服务平台',
				background: {
					backgroundColor: '#FF4500',
				},
				list:[
					{
						name:'志愿者爱心助老活动',
						address:'河北省石家庄裕华区想德养老院',
						recruit:25,
						overrecruit:20,
						time:'2021年1月1日',
						img: '/static/images/volunteer1.png'
					},
					{
						name:'留守儿童关爱活动',
						address:'河北省石家庄市',
						recruit:10,
						overrecruit:9,
						time:'2020年2月1日',
						img: '/static/images/volunteer2.png'
					},
					{
						name:'社区垃圾分类志愿者',
						address:'河北省石家庄市',
						recruit:10,
						overrecruit:5,
						time:'2020年2月1日',
						img: '/static/images/volunteer3.png'
					},
					
				]
			}
		},
		created() {

		},
		methods: {
			goBack() {
				uni.switchTab({
					url: '/pages/life/index',
				})
			},
			openActivity(){
				uni.navigateTo({
					url:`/pages/volunteer/activity/activity`
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
	.fengmian{
		margin: 0 auto;
		width: 95%;
		height: 25vh;
		margin-top: 1vw;
	}
</style>
