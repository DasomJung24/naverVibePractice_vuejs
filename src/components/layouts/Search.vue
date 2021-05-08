<template>
  <div
    class="search"
    v-bind:class="{ disableSearch: !$store.getters.getSearchBtn }"
  >
    <div class="relative">
      <font-awesome-icon icon="search" size="2x" class="absoluteSearch" />
      <input class="input" placeholder="VIBE 검색" />
      <font-awesome-icon
        icon="times"
        size="2x"
        class="absoluteTimes"
        @click="closeSearch"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  methods: {
    closeSearch() {
      this.$store.commit("changeSearch");
    },
  },
};
</script>
