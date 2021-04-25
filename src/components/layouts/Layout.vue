<template>
  <div class="base">
    <div class="content">content</div>
    <Menu />
    <Player />
  </div>
</template>
<script>
export default {
  name: "Layout",
  components: {
    Menu: () => import("@/components/layouts/Menu.vue"),
    Player: () => import("@/components/layouts/Player.vue"),
  },
};
</script>
