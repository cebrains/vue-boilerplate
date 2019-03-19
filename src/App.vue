<template>
  <div id="app">
      <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="scss">
html{
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}
body {
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background: #fff;
  margin: 0;
  border: none;
  color: #333;
  font-family: "Helvetica", 'Microsoft Yahei';
  font-size: 14px;
}
#app{
  width: 100%;
  margin: 0 auto;
  height: 100%;
}

</style>
