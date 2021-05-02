<template>
  <div class="pt-10 flex">
    <div class="floatLeft mr-15" v-for="item in data" :key="item.id">
      <img width="200" height="200" :src="item.image" />
      <p class="itemTitle mt-5" v-html="item.title"></p>
      <p class="mt-5 textGrey">{{ item.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SmallCardComponent",
  props: { data: Array },
  data() {
    return {};
  },
};
</script>
