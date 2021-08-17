<template>
	<view class="header">
		{{title}}
	</view>
</template>
<script>
	
	export default {
		
		props:{
			title:String
		},
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>
	.header {
		padding: 25rpx;
		font-size: 36rpx;
		line-height: 20rpx;
		text-align: center;
		height: 80rpx;
		background-color: #007AFF;
		color: white;
	}
</style>
