<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="item in data" :key="item.id">
      <div>
        <img height="200" width="200" :src="item.image" />
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
  name: "SmallCardComponent",
  props: { data: Array },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
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
  methods: {},
};
</script>
