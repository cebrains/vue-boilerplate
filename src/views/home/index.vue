
<template>
  <div class="container" v-if="isShow">
    <header class="header">
      <div class="header-left">
				<div class="sysName">教师管理后台</div>
			</div> 
       <div class="header-right">
         <span class="userName" v-if="isLogin">{{username}}</span>
         <button class="login-btn"  v-if="!isLogin" @click="goLogin">登录</button>
         <button class="logout-btn" v-if="isLogin"  @click="goLogout">登出</button>
				</div>
    </header>
    <div class="content">
      <aside class="menuBar">
        <el-menu  class="verticalMenu"
          :default-openeds="['1']"
					router
					:default-active="activeIndex"
					background-color="#3E4455"
          text-color="#fff"
          active-text-color="#3e9eff">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </aside>
			 <main :class="{'homeBg':$route.path==='/'}">
        <router-view :key='routerKey'></router-view>
       </main>
  
  
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import homeService from '../../service/homeService';
import loginService from '../../service/loginService';

export default {
  
  name: 'home',
  components: {
  
  },
  data() {
    return {
			routerKey:0,
      activeIndex:'/',
      isShow: true,
      isLogin:true,
    }
  },
  computed:{
    ...mapGetters({
      username:'fetch_username',
      avatar:'fetch_avatar',
      menuList:'fetch_menuList',
      permitted:'fetch_permitted'
    })
  },
  created(){
    this.getLoginStatus();
   
  },
  methods:{
    ...mapActions([
      'fetchUserInfo',
      'fetchMenuList',
    ]),
    getMenuList(){
       homeService.getUserInfo().then(res=>{
        console.log(11,res)
      }).catch(error=>{
        this.msgTip(error.data.msg)
      })

    },
    getLoginStatus(){
      loginService.getLoginStatus().then(res=>{
       if(res.code == 200){
          this.isLogin = true;
          Promise.all([this.fetchUserInfo(),this.fetchMenuList()]).then(response=>{
            console.log(22,response)
            this.isShow = true;
          }).catch(err=>{
            console.log(err)
          })
        }
       
      }).catch(error=>{
        this.msgTip(error.data.msg)

      })


    },
    msgTip(errorMessage) {
      this.$message.error({
        message: errorMessage,
        center: true,
        duration:1500,
      })
    },
   
    goLogin(){
      this.$router.push('/login');
        
    },
    goLogout(){
      loginService.getLogout().then(res=>{
        if(res.code==200){
          this.isLogin = false;
          this.$router.replace('/login');
        }
      }).catch(error=>{
        this.errorTip(error.data.msg);
      })
        
    }

  }
}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
  height: 100%;
  .header{
		@include flex($direction: row,$justify: space-between,$align: center,$wrap: nowrap);
		.header-left {
     @extend .flex-base;
      margin-left: 0;
      .sysName {
        width: 200px;
        height: 64px;
        line-height: 64px;
        font-size: 20px;
        color: $mk-color-white;
        background: $mk-color-navigation-left;
        @include text-align($align: center);
      }
		}
		.header-right{
      font-size:$mk-font-size-base;
      @include flex($direction: row,$justify: center,$align: center,$wrap: nowrap);
			margin-right:20px;
			.login-btn,.logout-btn{
        height: 30px;
        line-height: 30px;
				padding: 0 15px;
        cursor: pointer;
        color: $mk-color-info;
        background: #ecf5ff;
        border: solid 1px #b3d8ff;
        border-radius: $mk-border-radius-base ;
      }
      .userName{
        font-size: 13px;
        padding-right: 20px;
      }
    
		}
  }
  .content{
		width: 100%;
    height: 100%;
		@include flex($direction: row,$justify: center,$align: center,$wrap: nowrap);
		.menuBar {
      background: $mk-bg-grey ;
      overflow-x: hidden;
      width: 200px;
      height: 100%;
      overflow-y: auto;
      @extend .flex-base;
      flex-shrink: 0;
      .verticalMenu {
        height: 100%;
        &.el-menu{
          border-right: 0;
          width: 200px;
        }
      }
		}
		main{
      height: 100%;
      @include flex-value(1);
      flex-shrink: 0;
      overflow: auto;
      &.homeBg{
        background: url('../../assets/images/weclome.png') no-repeat center center;
        background-size: cover;
      }
    }

  }
	

}

</style>

