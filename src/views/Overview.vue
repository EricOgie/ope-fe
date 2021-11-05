<template>
    <div>
        <div class="card_box flex flex-col my-4 sm:grid grid-cols-2 gap-4">
            <div class="portfolio_card relative p-2 flex justify-center items-center">
                <p class="title absolute top-0 m-2 mx-4 left-0">
                    Your Portfolio Value:
                </p>
                <p class="value text-3xl font-bold">$20,000.00</p>
            </div>
            <div class="little_card_box  grid grid-cols-2 gap-4">
                <div class="link_box relative border items-center justify-center text-center flex-col flex rounded-md w-full mx-auto p-4">
                    <p class="mb-8">Apply For A New Loan</p>
                    <div class="arrow_icon absolute bottom-0 my-3 mx-1 right-0 w-10">
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
                </div>
                <div class="link_box border items-center justify-center text-center flex-col flex rounded-md w-full mx-auto p-4">
                    <p class="mb-8">Click to Buy Stocks</p>
                    <div class="add_icon w-10">
                        <img
                            class="w-full"
                            src="@/assets/img/add_btn.png"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="stocks_list">
            <p class="p-2 font-bold">Portfolio Activities:</p>
            <StockCard
                v-for="index in 4"
                :key="index"
                :index = "index"
            />
        </div>
    </div>
</template>
<script>
import StockCard from '@/components/StockCard.vue'

export default {
    name: 'Overview',
    components: {
        StockCard
    }
}
</script>

<style lang="scss">
.link_box:hover .arrow_icon {
    animation: direct-right 0.7s infinite ease-in-out
}
.link_box:hover .add_icon {
    animation: bounce-up 0.7s infinite ease-in-out
}
@keyframes direct-right {
    0% {
    
            transform: translateX(0px);
  } 50% {
      transform: translateX(5px);
  } 100% {
      transform: translateX(0px);
  }
}
@keyframes bounce-up {
    0% {
    
            transform: translateY(0px);
  } 50% {
      transform: translateY(5px);
  } 100% {
      transform: translateY(0px);
  }
}
</style>
