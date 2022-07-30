<template>
    <menuList/>
</template>

<script>
import { menuList } from "../components/NestedVList.vue"
export default {
    name: "testing-component",
    components: { menuList },
    data() {
        return {
            items: [
                {
                    title: "Dashboard",
                    icon: "fas fa-tachometer-alt",
                    link: "dashboard",
                },
                { title: "Buku", icon: "fas fa-book", link: "buku" },
                { title: "Transaksi", icon: "fas fa-exchange-alt", link: "transaksi" },
            ],
            mini: false,
        }
    },
}
</script>

<style lang="scss">
</style>