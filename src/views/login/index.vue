<template>
  <div id="container">
    <h1>This is login page</h1>
    <div class="login-btn" @click="loginIn()">登录</div>
  </div>
</template>


<script>
import loginService from '../../service/loginService';
export default {
  name:'about',
  data(){
    return {

    }

  },
  created(){


  },
  methods:{
    loginIn(){
      let params = {
        username: "liuna",
        passwd: "liuna0814"
      }
      loginService.getLogon(params).then(res=>{
        if(res.code == 200){
          this.$router.replace('/');
        }
      }).catch(error=>{
        this.$message.error({
          message: error.data.msg,
          center: true,
          duration: 1000
        })

      })
    }
  },
  
  
}
</script>

<style lang="scss" scoped>
#container {
  .login-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align:center;
    background: #ddd;
    cursor: pointer;
  }

}


</style>

