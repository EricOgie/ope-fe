<template>
    <div>
        <div class="float-right">
            <button @click="isShow = !isShow" class="flex items-center p-2 border inline-block rounded"><img src="@/assets/img/add_btn.png" class="w-10 "/><span class="px-2">Request Loan</span></button>
        </div>
        <div class="stocks_list clear-right">
            <p class="p-2 font-bold">Portfolio Activities:</p>
            <StockCard
                v-for="index in 4"
                :key="index"
                :index = "index"
            />
        </div>
        <div class="overlay" @click="isShow = !isShow" v-show="isShow">
            <LoanFormModal />
        </div>
    </div>
</template>
<script>
import StockCard from '@/components/reusables_/StockCard.vue'
import LoanFormModal from '@/components/reusables_/LoanFormModal.vue'

export default {
    name: 'Loan',
    data() {
        return {
          
                isShow: false
            
        }
    },
    components: {
        StockCard,
        LoanFormModal
    }
}
</script>
<style lang="scss" scoped>
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
   
    animation: fadeIn .35s ease-in-out
}
@keyframes fadeIn {
    0% {
        opacity: 0
    } 100% {
        opacity: 1;
    }
}
</style>
