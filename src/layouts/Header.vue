<template>
  <div class="flex flex-row justify-between items-center">
    <div class="logo">
      <div class="desktop_logo hidden sm:block">
        <img class="w-full" src="@/assets/img/desktop_logo.svg" />
      </div>
      <div class="mobile_logo block sm:hidden">
        <img class="w-full" src="@/assets/img/mobile_logo.svg" />
      </div>
    </div>
    <div class="profile_name flex items-center">
      <div class="w-10">
        <img class="w-full" src="@/assets/img/Face.png" />
      </div>
      <span class="hidden sm:block px-2">Didier Senou</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss">
.desktop_logo {
  // display: none;
  max-width: 8em;
}
.mobile_logo {
  // display: none;
  max-width: 2.5em;
}
</style>
