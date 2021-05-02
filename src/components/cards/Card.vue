<template>
  <div class="slide pt-10 flex">
    <font-awesome-icon
      icon="arrow-alt-circle-left"
      size="3x"
      class="arrow-l-1 po-absolute white"
    />
    <div class="floatLeft mr-15" v-for="item in data" :key="item.id">
      <img height="350" width="350" :src="item.image" />
      <p class="itemTitle mt-5" v-html="item.title"></p>
      <p class="mt-5 textGrey">{{ item.date }}</p>
    </div>
    <font-awesome-icon
      icon="arrow-alt-circle-right"
      size="3x"
      class="arrow-r-1 po-absolute white"
    />
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: { data: Array },
  data() {
    return {};
  },
};
</script>
