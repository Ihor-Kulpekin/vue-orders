<template>
  <ListOrders :orders="orders"/>
</template>

<script>
import ListOrders from "@/components/ListOrders/ListOrders";
export default {
  name: "ListOrdersPage",
  components: {ListOrders},
  computed: {
    orders() {
      return this.$store.state.orders
    }
  },
  mounted() {
    this.$store.dispatch('getOrders')
  }
}
</script>

<style scoped>

</style>
