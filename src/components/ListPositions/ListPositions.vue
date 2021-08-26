<template>
  <div class="positions">
    <ListPositionsItem v-for="position of positions" :position="position" :key="position.id"/>
  </div>
</template>

<script>
import ListPositionsItem from "@/components/ListItem/ListPositionsItem";

export default {
  name: "ListPositions",
  components: {
    ListPositionsItem
  },
  props: ['positions']
}
</script>

<style lang="scss">
.positions {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
