<template>
    <div id="main-page" class="mx-auto pt-4">
        <Header />
        <div class="page_container">
            <router-view />
        </div>
        
    </div>
</template>
<script>
import Header from './Header.vue'

export default {
    name: 'Dashboard',
    components: {
        Header
    }
}
</script>
<style lang="scss" scoped>
    #main-page {
        width: 90%;
        min-height: 100vh;
    }
</style>

