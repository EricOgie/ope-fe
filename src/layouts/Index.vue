<template>
  <div id="main-page" class="mx-auto pt-4">
    <Header />
    <div class="page_container">
      <div v-show="$route.name != 'Overview'" class="inline-block">
        <GoBack />
      </div>
      <div>
        <p class="font-bold text-2xl">{{ $route.name }}</p>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import GoBack from "@/components/reusables_/GoBack.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    GoBack,
  },
};
</script>
<style lang="scss" scoped>
#main-page {
  width: 90%;
  min-height: 100vh;
}
</style>
