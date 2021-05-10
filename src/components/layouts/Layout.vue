<template>
  <div class="base">
    <div class="content">
      <router-view></router-view>
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
  },
};
</script>
