<template>
	<view style="background-color: #f3f4f6" class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="问诊详情" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="info1">
			<view>
				<image style="
					float: left;
					width: 23%;
					height: 180rpx;
					margin-top: 10rpx;
					margin-left: 10rpx;
					" :src="srcImg">
				</image>
			</view>
			<view style="margin-top: 20rpx;">
				<text style="color: #4335D6;margin-left: 20rpx;;">
					邓福宝
					<span style="margin-left: 20rpx;color: black;">
						聊城市人民医院
					</span>
					<span style="margin-left: 20rpx;color: black;">主治医师</span>
				</text><br><br>
				<view style="">
					<text style="margin-left: 20rpx;;">擅长：短暂性脑缺血发作，心律失常，慢性胃炎，消化不良</text>
				</view>
			</view>

		</view>
		<view class="info2">
			<image style="
				position: absolute;
				width: 20%;
				height: 200rpx;
				margin-top: 100rpx;
				" :src="srcImg">
			</image>
			<view style="
				position: absolute;
				float: left;
				height: 60rpx;
				margin-top: 20rpx;
			">
				<text style="font-size: 40rpx;float: left;">描述：身上好像过敏了，出现了小红点</text>
			</view>
			<view style="
				position: absolute;
				float: left;
				height: 60rpx;
				margin-left: 55%;
				margin-top: 100rpx;
			">
				<text style="color: gray;">{{this.nowTime}}</text>
			</view>
			<view style="
				position: absolute;
				float: left;
				height: 60rpx;
				margin-left: 55%;
				margin-top: 240rpx;
			">
				<text style="font-size: 40rpx;color: #007AFF;">状态：已答复</text>
			</view>
		</view>
		<view class="info3">
			<image style="
				width: 20%;
				height: 200rpx;
				float: left;
				" :src="srcImg">
			</image>
			<view class="info31">
				<text>当身体局部皮肤组织出现了皮疹伴有瘙痒剧烈加重的情况，考虑是接触性皮炎或者是接触过敏物质以后引起的皮疹表现。</text>
			</view>
		</view>
		<view class="infoFooter">
			<u-input style="width: 80%;float: left;" v-model="value" :type="type" :border="border" />
			<text style="font-size: 50rpx;margin-left: 50rpx;">+</text>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				title: '问诊详情',
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: '../../static/images/douzi.png',
				value: '',
				type: 'text',
				border: true,
				nowTime: '',
			}
		},
		created() {
			const timeStr = this.dateTimeStr('y-m-d h:i'); // y:年 m:月 d:日 h:时 i:分 s:秒 中间的分割符号可更改
			this.nowTime = timeStr
		},
		
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
				// uni.navigateTo({
				// 	url: '/pages/myInquiry/index',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// })
			},
			dateTimeStr(str){
				  var date = new Date(),
					  year = date.getFullYear(), //年
					  month = date.getMonth() + 1, //月
					  day = date.getDate(), //日
					  hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), //时
					  minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(), //分
					  second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
				  month >= 1 && month <= 9 ? (month = "0" + month) : "";
				  day >= 0 && day <= 9 ? (day = "0" + day) : "";
				  hour >= 0 && hour <= 9 ? (hour = "0" + hour) : "";
				  minute >= 0 && minute <= 9 ? (minute = "0" + minute) : "";
				  second >= 0 && second <= 9 ? (second = "0" + second) : "";
				  if(str.indexOf('y') != -1){
					str = str.replace('y', year)
				  }
				  if(str.indexOf('m') != -1){
					str = str.replace('m', month)
				  }
				  if(str.indexOf('d') != -1){
					str = str.replace('d', day)
				  }
				  if(str.indexOf('h') != -1){
					str = str.replace('h', hour)
				  }
				  if(str.indexOf('i') != -1){
					str = str.replace('i', minute)
				  }
				  if(str.indexOf('s') != -1){
					str = str.replace('s', second)
				  }
				  return str;
				},
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
	.info1 {
		margin: 0 auto;
		width: 95%;
		height: 200rpx;
		background-color: white;
	}

	.info2 {
		margin: 0 auto;
		width: 95%;
		height: 330rpx;
		margin-top: 50rpx;
		background-color: white;
	}

	.info3 {
		margin: 0 auto;
		width: 95%;
		margin-top: 50rpx;
		height: 46vh;
	}

	.info31 {
		border: 0.5rpx solid gray;
		border-radius: 6%;
		width: 70%;
		margin-left: 30%;
		background-color: white;
		line-height: 50rpx;
		text-indent: 55rpx;
	}

	.infoFooter {
		position: fixed;
		margin: 0 auto;
		margin-left: 5%;
		width: 95%;
	}
</style>
