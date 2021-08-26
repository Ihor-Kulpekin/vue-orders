<template>
  <div class="listOrders">
    <ListOrdersItem v-for="order of orders" :order="order" :key="order.id"/>
  </div>
</template>

<script>
import ListOrdersItem from "@/components/ListItem/ListOrdersItem";

export default {
  name: "ListOrders",
  components: {
    ListOrdersItem
  },
  props: ['orders']
}
</script>

<style lang="scss">
.listOrders {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
