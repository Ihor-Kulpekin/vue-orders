<template>
  <div class="listOrdersItem">
    <div class="option">
      {{order.id}}
    </div>
    <div class="option">
      {{order.description}}
    </div>
    <div class="option">
      {{order.docNum}}
    </div>
    <div class="option">
      {{order.docDate}}
    </div>
    <div class="option">
      <router-link :to="'/order/'+order.id">Go to Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListOrdersItem",
  props: ['order']
}
</script>

<style lang="scss">
.listOrdersItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 630px;
  width: 100%;

  a {
    color: black;
  }

  .option {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
