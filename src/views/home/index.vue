<template>
  <div class="container" v-if="isShow">
    <header class="header">
      <div class="header-left">
				<div class="sysName">教师管理后台</div>
			</div>
       <div class="header-right">
				  <button class="login-btn"  @click="goLogin"> 登 录</button>
				</div>
    </header>
    <div class="content">
      <aside class="menuBar">
        <el-menu :default-openeds="['1']"
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
import { mapGetters,mapActions,mapMutations } from 'vuex';
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
    //this.getMenuList()
   
  },
  methods:{
    ...mapActions([
      'fetchUserInfo',
      'fetchMenuList',
    ]),
    getMenuList(){
       homeService.getUserInfo().then(res=>{
         console.log(99,res)
        //commit("update_userInfo",res.data)   //store.commit可传入额外的参数，即mutation的载荷（payload）
      }).catch(error=>{
        Message.error({
          message: error.data.msg,
          center: true,
          duration:1500
        })
      })

    },
    getLoginStatus(){
      loginService.getLoginStatus().then(res=>{
       if(res.code == 200){
          this.isLogin = true;
          Promise.all([this.fetchUserInfo(),this.fetchMenuList()]).then(response=>{
            this.isShow = true;
          }).catch(err=>{
            console.log(err)
          })
        }
       
      }).catch(error=>{
        console.log('catch',error)
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
      display: flex;
      margin-left: 0;
      .sysName {
        width: 200px;
        height: 64px;
        line-height: 64px;
        font-size: 20px;
        color: #fff;
        background: #304156;
        text-align: center;
      }
		}
		.header-right{
			margin-right:20px;
			.login-btn{
				padding: 0 20px;
				height: 40px;
        line-height: 40px;
				font-size: 16px;
				border:solid 1px #3B8CFF;
				border-radius: 10px;
				cursor: pointer;
			}
		}
  }
  .content{
		width: 100%;
    height: 100%;
		@include flex($direction: row,$justify: center,$align: center,$wrap: nowrap);
		.menuBar {
      background: #3E4455;
      overflow-x: hidden;
      width: 200px;
      height: 100%;
      overflow-y: auto;
      display: flex;
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
      flex:1;
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

