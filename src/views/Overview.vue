<template>
  <div>
    <div class="card_box flex flex-col my-4 sm:grid grid-cols-2 gap-4">
      <div class="portfolio_card relative p-2 flex justify-center items-center">
        <p class="title absolute top-0 m-2 mx-4 left-0">Your Portfolio Value:</p>
        <p class="value text-3xl font-bold">$20,000.00</p>
      </div>
      <div class="little_card_box grid grid-cols-2 gap-4">
        <CardBtn :text="'Apply For A New Loan'" :img="'arrow'" :route="'Loan'" />
        <CardBtn :text="'Click to Buy Stocks'" :img="'add'" :route="'Stocks'" />
      </div>
    </div>
    <div class="stocks_list">
      <p class="p-2 font-bold">Portfolio Activities:</p>
      <template v-if="portfolios.length <= 0">
        <Empty />
      </template>
      <template v-else>
        <StockCard v-for="index in portfolios" :key="index" :index="index" />
      </template>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Empty from "@/components/reusables_/Empty.vue";
import StockCard from "@/components/reusables_/StockCard.vue";
import CardBtn from "@/components/reusables_/CardBtn.vue";

export default {
  name: "Overview",
  setup() {
    const store = useStore();
    return {
      portfolios: computed(() => store.getters["auth/portfolios"]),
    };
  },
  components: {
    StockCard,
    CardBtn,
    Empty,
  },
};
</script>
