<template>
  <div>
    <div
      :style="{ '--order': index }"
      id="stockcard"
      class="
        flex
        w-full
        mb-4
        flex-col
        items-start
        sm:flex-row
        justify-between
        sm:items-center
        border
        rounded
        p-2
        px-4
      "
    >
      <div class="stock_name_container my-2 flex-grow flex items-center">
        <div class="border p-2 w-12 rounded-3xl">
          <img src="@/assets/img/Face.png" class="w-full" />
        </div>
        <div class="mx-4 flex-grow">
          <p class="stock_abbr font-bold">AWMN</p>
          <p class="stock_fullname text-gray-500">Awenemen</p>
        </div>
      </div>
      <div class="stock_details border-t sm:border-0 py-2 w-full my-2 grid grid-cols-3 gap-10">
        <div class="text-center">
          <p class="font-medium text-gray-500 text-xs">Total Equity</p>
          <p>20</p>
        </div>
        <div class="text-center">
          <p class="font-medium text-gray-500 text-xs">Price Share</p>
          <p>5</p>
        </div>
        <div class="text-center">
          <p class="font-medium text-gray-500 text-xs">Equity Value</p>
          <p class="ibm font-bold">$2000</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StockCard",
  props: ["index"],
};
</script>
<style lang="scss" scoped>
#stockcard {
  box-shadow: 0px 0px 10px rgba(12, 24, 37, 0.05);

  animation-name: fadeUpOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.35s;
  animation-delay: calc(var(--order) * 200ms);
}
@keyframes fadeUpOpacity {
  20% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
