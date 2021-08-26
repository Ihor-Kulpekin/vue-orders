<template>
  <header class="header">
    <div class="myContainer">
      <div class="logo">
        <router-link to="/">Orders</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="js">
export default {
  name: "Header"
}
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 50px;
    background-color: #42b983;
    margin-bottom: 30px;

    a {
      color: white;
    }

    .myContainer {
      display: flex;
      max-width: 1480px;
      margin: 0 auto;
      justify-content: flex-start;
      align-items: center;
    }

    .logo {
      padding-top: 5px;
      font-size: 30px;
      color: white;
      font-weight: bold;
    }
  }
</style>
