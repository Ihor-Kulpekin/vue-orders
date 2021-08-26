<template>
<ListPositions :positions="positions"/>
</template>

<script>
import ListPositions from "@/components/ListPositions/ListPositions";

export default {
  name: "OrderDetailsPAge",
  components: {
    ListPositions
  },
  computed: {
    positions(){
      return this.$store.state.positions
    }
  },
  mounted() {
    this.$store.dispatch('getPositions', this.$route.params.id)
  }
}
</script>

<style lang="scss">
</style>
