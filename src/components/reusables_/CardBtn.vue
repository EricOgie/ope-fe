<template>
  <div
    @click="$router.push({ name: route })"
    class="
      link_box
      relative
      border
      items-center
      cursor-default
      select-none
      hover:shadow
      justify-center
      text-center
      flex-col flex
      rounded-md
      w-full
      mx-auto
      p-4
    "
  >
    <p class="mb-8">{{ text }}</p>
    <div v-if="img === 'arrow'" class="arrow_icon absolute bottom-0 my-3 mx-1 right-0 w-10">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 8L21 12M21 12L17 16M21 12L3 12"
          stroke="#111827"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div v-if="img === 'add'" class="add_icon w-10">
      <img class="w-full" src="@/assets/img/add_btn.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "CardBtn",
  props: {
    text: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "arrow",
    },
    route: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.link_box:hover .arrow_icon {
  animation: direct-right 0.7s infinite ease-in-out;
}
.link_box:hover .add_icon {
  animation: bounce-up 0.7s infinite ease-in-out;
}
@keyframes direct-right {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes bounce-up {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
