<template>
	<view>
		<view>
			<view>
				<view style="
					position: fixed;
					z-index: 10;
					background-color: #666666;
				">
					<text style="color: white;">当前定位:经度:{{this.longitude}} 纬度:{{this.latitude}}</text>
				</view>
				<map style="width: 100%; height: 300px;position: fixed;" :latitude="latitude" :longitude="longitude"
					scale="16" :markers=markers show-location="true" @markertap="clickmaker">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	import GPS from '../static/js/tools.js'
	export default {
		data() {
			return {
				markers: [{
					id: 1,
					latitude: 38.04276,
					longitude: 114.5143,
					title: '父亲',
					width: 1,
					height: 1
				}, {
					id: 2,
					latitude: 38.04220,
					longitude: 114.5143,
					title: '母亲',
					width: 1,
					height: 1
				}, {
					id: 3,
					latitude: 38.04220,
					longitude: 114.5160,
					title: '儿子',
					width: 1,
					height: 1
				}, ],
				title: 'map',
				latitude: 38.045474,
				longitude: 114.502461,
			}
		},
		created() {
			// var that = this
			// uni.getLocation({
			// 	type: 'gcj02',
			// 	success: function(res) {
			// 		console.log('当前位置的经度：' + res.longitude);
			// 		console.log('当前位置的纬度：' + res.latitude);
			// 		// const num = GPS.gcj_encrypt(res.longitude,res.latitude)
			// 		// console.log(num)
			// 		this.longitude = 114.502461
			// 		this.latitude = 38.045474
			// 	},
			// 	fail: function() {
			// 		// uni.showToast({
			// 		// 	title: '获取地址失败，将导致部分功能不可用',
			// 		// 	icon: 'none'
			// 		// });
			// 	}
			// });
		},

		methods: {
			clickmaker() {
				console.log('成功获取当前位置')
			}
		}
	}
</script>

<style>
</style>
