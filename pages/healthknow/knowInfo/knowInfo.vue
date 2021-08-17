<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="知识百科" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="health1" @click="openInfo">
			<view style="">
				<text style="
							font-size: 40rpx;
							font-weight: bold;
						">关节疼痛怎么处理_骨科疼痛常用的治疗方法_健康百科 </text>
			</view>
			<view style="height: 50rpx;margin-top: 10rpx;">
				<text style="font-size: 25rpx;">
					2020年3月28日 星期六
					<span style="margin-left: 20rpx;">来源：</span>
					<span style="font-weight: bold;">健康快点</span>
				</text>
			</view>
			<hr>
			<view>
				<text style="text-indent: 40rpx;line-height: 50rpx;">
					零点医学期刊作为霍尔果斯易含文化传媒有限公司旗下的旗舰品牌，是一家以医学学术为特色，集历史性、专业性、科研性于一体的医学期刊发表平台。
					零点医学期刊服务内容涵盖学术期刊服务、SCI期刊服务、医学论文投稿服务等，专门为医学工作者提供全方位、高品质、精益化的医学期刊服务。
				　　零点医学期刊始终坚持“服务至上，只为见刊”的宗旨。汇集了512位中外资深编辑专家，人均编辑经验10年，帮助客户预估评审论文，提升文章接收率；并长期与1600+杂志社成为合作伙伴关系，绿色通道，快速见刊。
				　　本着“全心全意为客户服务”的理念，零点医学期刊砥砺前行，致力于为客户提供更满意的医学期刊服务，让每一篇论文都能成功见刊！
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '健康知识-详情',
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: '../../../static/images/aunt.png',
			}
		},
		created() {

		},
		methods: {
			goBack(){
				uni.navigateTo({
					url: '/pages/healthknow/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
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
	.health1 {
		margin: 0 auto;
		width: 95%;
		margin-top: 30rpx;
	}
</style>
