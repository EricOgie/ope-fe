<template>
  <div v-click-away="close" class="menudropdown rounded p-2 shadow bg-white w-full">
    <div>
      <p class="font-medium">{{ fullname }}</p>
    </div>
    <div>
      <ul class="my-2">
        <li class="hover:bg-gray-200 p-2 font-medium">Profile</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MenuDropdown",
  setup() {
    const store = useStore();
    return {
      fullname: computed(() => store.getters["auth/fullname"]),
    };
  },

  methods: {
    close() {
      this.$emit("toggleModal");
    },
  },
};
</script>
<style lang="scss">
.menudropdown {
  max-width: 240px;
  position: absolute;
  bottom: -120px;
  right: 0;
  z-index: 2;
}
</style>
