<template>
    <div>
                <div class="flex w-full mb-2 flex-col items-start sm:flex-row justify-between sm:items-center border rounded p-2 px-4">
                    <div class="stock_name_container my-2 flex-grow flex items-center">
                        <div class="border p-2 w-12 rounded-3xl">
                            <img src="@/assets/img/Face.png" class="w-full"/>
                        </div>
                        <div class="mx-4 flex-grow">
                            <p class="stock_abbr font-bold">AWMN</p>
                            <p class="stock_fullname text-grey-400">Awenemen</p>
                        </div>
                    </div>
                    <div class="stock_details w-full my-2 grid grid-cols-3 gap-10">
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
    name: 'StockCard'
}
</script>
