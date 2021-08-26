<template>
  <div class="listPositionsItem">
    <div>
      Name: {{ position.name }}
    </div>
    <div>
      Price: {{ position.price }}
    </div>
    <div>
      QTY: {{ position.qty }}
    </div>
    <div>
      SUM: {{ position.sum }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ListPositionsItem",
  props: ['position']
}
</script>

<style lang="scss">
.listPositionsItem {
  display: flex;
  justify-content: space-between;
  max-width: 630px;
  width: 100%;
}
</style>
