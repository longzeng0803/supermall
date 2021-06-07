<template>
    <div class="tab-bar-item" @click="btnClick">
      <div v-if='!isact'><slot name="icon-slot"></slot></div>
      <div v-else><slot name="icon-slot-act"></slot></div>
      <div :style="{color:isact?actColor:''}"><slot name="text-slot"></slot></div>
      </div>
</template>

<script>
  export default{
    name:'tabbaritem',
	data(){
		return{
      // isact:true
		}
	},
  props:{
    path:String,
    actColor:{
      type:String,
      default:'royalblue'
    }
  },
  computed:{
    isact(){
      return this.$route.path.indexOf(this.path) !==-1
    }
  },
	methods: {
    btnClick(){
      this.$router.replace(this.path).catch(err=>{err})
    }
	},
	components: {

	}
  }
</script>

<style scoped>
  .tab-bar-item{flex: 1;text-align: center;height: 80px;font-size: 23px;}
   .tab-bar-item img{height: 38rpx;width: 38px;display: block;margin: 5px auto;vertical-align: middle;}
</style>
