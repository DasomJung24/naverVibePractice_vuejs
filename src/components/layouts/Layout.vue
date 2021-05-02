<template>
  <div class="base">
    <div class="content">
      <Content />
    </div>
    <Menu />
    <Player />
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Menu: () => import("@/components/layouts/Menu.vue"),
    Player: () => import("@/components/layouts/Player.vue"),
    Content: () => import("@/views/Today.vue"),
  },
};
</script>
