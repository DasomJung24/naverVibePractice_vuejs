<template>
  <swiper
    class="swiper"
    :options="swiperOptions"
    @sliceChange="onSlideChange"
    @ready="on"
  >
    <swiper-slide v-for="item in data" :key="item.id">
      <div>
        <img height="350" width="350" :src="item.image" />
        <p class="itemTitle mt-5" v-html="item.title"></p>
        <p class="mt-5 textGrey">{{ item.date }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
    <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "CardComponent",
  props: { data: Array },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    on(swiper) {
      console.log("ready", swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
