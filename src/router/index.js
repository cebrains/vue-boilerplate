/*
*  模块化路由配置
*/

import Vue from 'vue';
import Router from 'vue-router'; // vue-router
import title from 'vue-wechat-title'; // 页面标题

// 子模块路由
import CommonRouter from './modules/commonRouter' // 公共模块
import HomeRouter from './modules/homeRouter' // 主页模块  公共页面
import ErrorRouter from './modules/errorRouter';  // 错误页面模块
import RecruitRouter from './modules/recruitRouter' // 培训管理模块
import WorkRouter from './modules/workRouter'  // 工作管理模块
import TeacherInfoRouter from './modules/teacherInfoRouter' // 老师管理模块
import ResearchRouter from './modules/researchRouter'  // 数据记录模块
import OrderRouter from './modules/orderRouter'  // 工单管理模块
import ConfigurationRouter from './modules/configurationRouter'  // 配置管理模块
import SalaryRouter from './modules/salaryRouter';  // 薪资信息模块
import ResumeRouter from './modules/resumeRouter';  // 简历优化模块
import ChartRouter from './modules/chartRouter'; // 图表模块
import ChatRouter from './modules/chatRouter';  //  聊天模块
import ToolRouter from './modules/toolRouter';  //  小工具模块

Vue.use(title);
Vue.use(Router);

export default new Router(
 {
    mode: 'history',
    routes: [
      ...CommonRouter,  
      ...HomeRouter,   
      ...ErrorRouter, 
      ...RecruitRouter, 
      ...WorkRouter,
      ...TeacherInfoRouter,
      ...ResearchRouter,
      ...OrderRouter,
      ...ConfigurationRouter,
      ...SalaryRouter,
      ...ResumeRouter,
      ...ChartRouter,
      ...ChatRouter,
      ...ToolRouter
      ]
  }
);

