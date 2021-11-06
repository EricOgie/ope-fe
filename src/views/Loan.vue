<template>
    <div>
        <div class="float-right">
            <button class="flex items-center p-2 border inline-block rounded"><img src="@/assets/img/add_btn.png" class="w-10 "/><span class="px-2">Request Loan</span></button>
        </div>
        <div class="stocks_list clear-right">
            <p class="p-2 font-bold">Portfolio Activities:</p>
            <StockCard
                v-for="index in 4"
                :key="index"
                :index = "index"
            />
        </div>
        <div >
            <div class="overlay">
                <div class="modal rounded">
                    <p>Choose Package</p>
                    <div class="flex overflow-x-auto">
                        <div :class="'active'" class="price_card w-full text-center border hover:bg-black hover:text-white cursor-pointer py-2 border-2 rounded-md">
                            <p class="font-medium text-lg">2% Interest Rate</p>
                            <p>6 Months</p>
                        </div>
                        <div class="price_card w-full text-center border hover:bg-black hover:text-white cursor-pointer py-2 border-2 rounded-md">
                            <p class="font-medium text-lg">2% Interest Rate</p>
                            <p>6 Months</p>
                        </div>
                        <div class="price_card w-full text-center border hover:bg-black hover:text-white cursor-pointer py-2 border-2 rounded-md">
                            <p class="font-medium text-lg">2% Interest Rate</p>
                            <p>6 Months</p>
                        </div>
                    </div>
                    <div class="my-4">
                        <p class="font-medium">Amount</p>
                        <input type="text" class="border p-2 rounded w-full outline-none"/>
                    </div>
                    <div>
                        <p class="font-medium">Payment Plan:</p>
                        <p class="ibm font-bold">$25,000</p>
                    </div>
                    <div class="float-right">
                        <button class="bg-black rounded text-white font-medium p-2 px-4">Request Loan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StockCard from '@/components/reusables_/StockCard.vue'

export default {
    name: 'Loan',
    components: {
        StockCard
    }
}
</script>
<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(12, 24, 37, 0.54);;
    align-items: center;
}
.modal {
    max-width: 600px;
    width: 90%;
    padding: 2em;
    background-color: white;
}
.price_card {
    transition: .35s ease-in-out;
    min-width: 15em;
    margin-right: 1em;
}
.price_card.active {
    background-color:#0c1825;
    color: white;
}
</style>
