<template>
  <div class="flex relative flex-row justify-between items-center">
    <div class="logo">
      <div class="desktop_logo hidden sm:block">
        <img class="w-full" src="@/assets/img/desktop_logo.svg" />
      </div>
      <div class="mobile_logo block sm:hidden">
        <img class="w-full" src="@/assets/img/mobile_logo.svg" />
      </div>
    </div>
    <div class="">
      <div @click="toggleModal()" class="profile_name flex items-center">
        <div class="w-10">
          <img class="w-full" src="@/assets/img/Face.png" />
        </div>
        <span class="hidden sm:block pl-2">{{ fullname }}</span>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
              fill="#111827"
            />
          </svg>
        </div>
      </div>
      <MenuDropDown @toggleModal="toggleModal" v-if="isRequest" />
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import MenuDropDown from "@/components/reusables_/MenuDropdown.vue";

export default {
  name: "Header",
  setup() {
    const store = useStore();
    const isRequest = ref(false);
    const toggleModal = () => {
      isRequest.value = !isRequest.value;
    };
    return {
      fullname: computed(() => store.getters["auth/fullname"]),
      isRequest,
      toggleModal,
    };
  },

  components: {
    MenuDropDown,
  },
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
