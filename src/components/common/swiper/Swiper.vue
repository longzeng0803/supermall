<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" v-if="homeSwiper.length > 1">
      <swiper-slide v-for="(item,index) in homeSwiper" :key="index">
        <img :src="item.img" alt class="swiper-img" :style="{height:height,width:width}" />
      </swiper-slide>
      <div id="home-pagination" slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import 'swiper/css/swiper.css'
export default {
  name: "homeSwiper",
  data() {
    return {
      swiperOption: {
        // 轮播图配置，参数同swiper官方api参数
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: true,
        slidesPerView: 1, // wrapper中显示的图片数量
        speed: 600, // 图片切换速度
        pagination: {
          // 分页器
          el: "#home-pagination",
        },
        loop: true, // 循环播放
        preloadImages: false,
        on: {
          touchEnd: function (event) {
            //你的事件
          },
        },
      },
    };
  },
  directives: {
    swiper: directive,
  },
  methods: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    homeSwiper: {
      type: Array,
      default() {
        return [];
      },
    },
    height: {
      type: String,
      default() {
        return "100%";
      },
    },
    width: {
      type: String,
      default() {
        return "100%";
      },
    },
  },
  computed: {},
  mounted() {
    // this.swiper.slideTo(1, 1000, false);
    // 只有一张图时，autoplay为false
    this.swiperOption.autoplay =
      this.homeSwiper.length != 1
        ? {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }
        : false;
  },
};
</script>
 
<style scoped>
</style>