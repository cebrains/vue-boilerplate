<template>
  <div class="container">
    <div class="main">
       <div class="header">
        <img class="icon-logo" src="../../assets/images/icon_logo.png">
        <h1>教师管理后台</h1>
      </div>
      <section class="content">
         <div class="username">
          <el-input
          class="user-input"
          placeholder="用户名"
          v-model="username"
          clearable 
          >
          </el-input>
        </div>

         <div class="password">
          <el-input
          class="user-input"
          placeholder="密码"
          v-model="password"
          type="password"
          clearable
          >
          </el-input>
        </div>
         <div class="submitBar" :class="{'active':isClickable}" @click="login">
          <span>登 录</span>
        </div>

      </section>
    </div>
     <footer class="footer">
      <span class="copyRight">Copyright © 2018 </span>
      <span class="company">上海妙克信息科技有限公司</span>
    </footer>

  </div>
</template>


<script>
import loginService from '../../service/loginService';
export default {
  name:'about',
  data(){
    return {
      isClickable:false,
      username:'',
      password:'',
    }

  },
  created(){


  },
  methods:{
    login(){
      if(!this.username && this.password){
        this.$message.error({
          message: '用户名不能为空',
          center: true,
          duration:1500
        })
      }
      if(this.username && !this.password){
        this.$message.error({
          message: '密码不能为空',
          center: true,
          duration:1500
        })
      }
      if(!this.username && !this.password){
        this.$message.error({
          message: '请输入用户名和密码',
          center: true,
          duration:1500
        })
      }

      if(this.username && this.password){
        this.isClickable = true;
        let params = {
          username: this.username,
          passwd: this.password
        }
        loginService.getLogin(params).then(res=>{
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
    }
  },
  
  
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #2E363F;
  width: 100%;
  height: auto;
  min-height: 100%;
  @include flex($direction: column,$justify: space-between,$align: center,$wrap: nowrap);
  .main{
    width: 100%;
    .header{
      margin-top:8%;
      @include flex($direction: column,$justify: center,$align: center,$wrap: nowrap);
      .icon-logo{
        width:150px;
        height: 150px;
        border-radius: 20%;
      }
       h1{
        display: block;
        font-size: 36px;
        line-height: 1.1;
        color: $mk-color-white ;
        padding: 40px 0;
      }
    }
    .content{
      width: 100%;
      @include flex($direction: column,$justify: center,$align: center,$wrap: nowrap);
      .username{
        width: 350px;
        .user-input{
          height: 40px;
          line-height: 40px;
        }
      }
      .password{
        margin-top: 40px;
        width: 350px;
        .user-input{
          height: 40px;
          line-height: 40px;
        }
      }
      .submitBar{
        cursor: pointer;
        margin-top: 40px;
        width: 350px;
        height: 40px;
        border-radius: 4px;
        background: #fd5e01; 
        color: $mk-color-white ;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active{
          background: $mk-bg-orange ;
        }
        span{
          font-size: 18px;
          font-weight: 400;
        }
      }

    }
  }
  .footer{
    width: 100%;
    margin-top: 20%;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    height: 40px;
    span{
      padding: 0 5px;
      color: $mk-color-white ;
    }
  }

}


</style>

