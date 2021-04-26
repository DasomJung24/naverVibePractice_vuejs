<template>
  <div class="base">
    <div class="content">
      <template>
        <router-view />
      </template>
    </div>
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
