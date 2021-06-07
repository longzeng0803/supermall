<template>
    <tab-bar>
   <tabbaritem path='/home'>
     <img slot="icon-slot" src="~assets/img/tabbar/icon_10.png" alt="">
     <img slot="icon-slot-act" src="~assets/img/tabbar/icon_11.png" alt="">
     <div slot="text-slot">首页</div>
   </tabbaritem>
   <tabbaritem path="/category">
     <img slot="icon-slot" src="~assets/img/tabbar/icon_30.png" alt="">
     <img slot="icon-slot-act" src="~assets/img/tabbar/icon_31.png" alt="">
     <div slot="text-slot">分类</div>
   </tabbaritem>
   <tabbaritem path="/cart">
     <img slot="icon-slot" src="~assets/img/tabbar/kf0.png" alt="">
     <img slot="icon-slot-act" src="~assets/img/tabbar/kf.png" alt="">
     <div slot="text-slot">购物车</div>
   </tabbaritem>
   <tabbaritem path="/my">
     <img slot="icon-slot" src="~assets/img/tabbar/icon_20.png" alt="">
     <img slot="icon-slot-act" src="~assets/img/tabbar/icon_21.png" alt="">
     <div slot="text-slot">我的</div>
   </tabbaritem>
  </tab-bar>
</template>

<script>
  import tabBar from 'components/common/tabbar/tabBar'
  import tabbaritem from'components/common/tabbar/tabbaritem'
  export default{
    name:'maintabbar',
    components:{
      tabBar,tabbaritem
    }
  }
</script>

<style>
</style>
