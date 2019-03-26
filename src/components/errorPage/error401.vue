<template>
  <div>
    <section>
        <div class="error-content">
            <dl>
                <dt class="error-img"><img src="../assets/images/403.svg" /></dt>
                <dd class="error-msg">登录已过期，请重新登陆～</dd>
                <dd class="error-btn"><button @click="btnClick">返回登录页</button></dd>
            </dl>
        </div>
    </section>
    <footer></footer>
  </div>
</template>
<script>
  import loginService from '../service/loginService';
  export default {
    data() {
      return {
      }
    },
    methods: {
      btnClick(){
        this.$router.replace('/login');
      }
    }
  }

</script>

<style lang="less">
    .error-content{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 500px;
        height: 500px;
        text-align: center;
        margin: auto;
        dl{
            .error-img{
                img{
                    display: block;
                    margin: 0px auto;
                }
            }
            .error-msg{
                margin: 20px auto;
                font-size: 20px;
                color: #645C58;
            }
            .error-btn{
                button{
                    margin: 25px auto 0;
                    background: #fd5e02;
                    color: #fff;
                    display: block;
                    height: 45px;
                    width: 150px;
                    font-size: 14px;
                    border-radius: 45px;
                    -webkit-border-radius: 45px;
                    -moz-border-radius: 45px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
