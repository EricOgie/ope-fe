<template>
    <div>
        <div class="card_box flex flex-col sm:grid grid-cols-2 gap-4">
            <div class="portfolio_card relative p-2 flex justify-center items-center">
                <p class="title absolute top-0 m-2 mx-4 left-0">
                    Your Portfolio Value:
                </p>
                    <p class="value text-3xl font-bold">$20,000.00</p>
            </div>
            <div class="little_card_box grid grid-cols-2 gap-4">
                <div class="link_box border items-center justify-center text-center flex-col flex rounded-md w-full mx-auto p-4">
                    <p class="mb-8">Apply For A New Loan</p>
                    <div class="add_icon w-10">
                        <img class="w-full" src="@/assets/img/add_btn.png"/>
                    </div>
                </div>
                <div class="link_box border items-center justify-center text-center flex-col flex rounded-md w-full mx-auto p-4">
                    <p class="mb-8">Click to Buy Stocks</p>
                    <div class="add_icon w-10">
                        <img class="w-full" src="@/assets/img/add_btn.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Overview'
}
</script>
