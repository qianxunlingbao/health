<template>
	<view class="page1">
		<view>
			<u-navbar 
				:background="background" 
				back-icon-color="white" 
				title="科室医护" 
				title-size="44"
				:is-back="false"
				title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="doctorHeader">
			<uni-list>
				<uni-list-item  >
					<view slot="header"></view>
					<view slot="body" @click="openDoctor">
						<text>
							谢汉兴 
						</text>
						<br>
						<text class="doctorone"
						>主任医师</text>
						<br>
						<view class="doctortwo">
							<text class="doctorthree">
								全科
							</text>		
						</view>
						<view class="doctorfour">
							<text class="doctorfive">康宁社区卫生服务站</text>
						</view>
						<view class="doctorsix">
							<u-avatar :src="src"></u-avatar>
						</view>	
					</view>
					<view slot="footer" >
						
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="doctorContent">
			<uni-list>
				<uni-list-item v-for="(item,index) in data" :key="index">
					<view slot="header">
						<text>{{item.title}}</text>
						<br>
						<br>
						<text class="doctorseven">{{item.note}}</text>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
			<navigator url="/pages/registr/registrNumber/registrNumber" open-type="navigate">
			    <view style="
					width: 70%;
					height: 60rpx;
					margin: 0 auto;
					text-align: center;
					border: 1rpx solid #007AFF;
					background-color: #007AFF;
					margin-top: 50rpx;
					">
					<text style="
						font-size: 40rpx;
						color: white;
					">立即预约</text>
				</view>
			</navigator>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '科室医护',
				background: {
					backgroundColor: '#007AFF',
				},
				src: '../../../static/images/doct.png',
				data: [
					{
						title:'个人简介',
						note:'医学博士，教授，主任医师，博士大师，元珠海中医院，耳鼻口科科主任，是从。。。'
					},
					{
						title:'擅长方向',
						note:'妇科肿瘤的临床诊断与治疗，开展的腹腔镜手术、盆底重建手术以及阴道手术居市领先水平。'
					},
				]
			}
		},
		created() {

		},
		methods: {
			goBack() {
				uni.navigateTo({
					url: '/pages/registr/hospitalInfo/hospitalInfo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			openDoctor(){
				uni.navigateTo({
					url: '/pages/registr/registrNumber/registrNumber',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.doctorone{
		color: gray;
		font-size: 25rpx;
	}
	.doctortwo{
		width: 70rpx;
		height: 45rpx;
		border: 1px solid green;
		border-radius: 5%;
		text-align: center;
		margin-top: 10rpx;
		float: left;
	}
	.doctorthree{
		font-size: 25rpx;
		color: gray;	
	}
	.doctorfour{
		margin-top: 10rpx;
	}
	.doctorfive{
		font-size: 25rpx; color: gray;margin-left: 10px;
	}
	.doctorsix{
		float: left;margin-left: 600rpx;margin-top: -100rpx;
	}
	.doctorseven{
		color: gray;font-size: 25rpx;
	}
	.doctoreight{
		margin-top: 50rpx;
		width: 80%;
	}
	page {
		height: 100%;
	}
	
	.page1{
		width: 100%;
		height: 100%;
	}
</style>
