<template>
  <div class="container">
    <img alt="Vue logo" src="../../assets/logo.png">
    <button class="login-btn"  @click="goLogin"> 请点击登录 </button>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
  
  },
  created(){
   
  },
  methods:{
    goLogin(){
      this.$router.push('/login');
        
    }

  }
}
</script>

<style lang="scss" scoped>
.container{
	.login-btn{
		padding: 20px;
		font-size: 16px;
		color:#fff;
		background: #3B8CFF;
		border-radius: 10px;
		cursor: pointer;
	}

}

</style>

