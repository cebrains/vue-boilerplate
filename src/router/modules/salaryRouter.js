/** 
 * 薪资信息模块
 * */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//工资详情页
const SalaryDetail = r => require.ensure([], () => r(require('@/pages/salary/details/index.vue')), 'SalaryDetail');
//工资详情-明细页
const SalaryDetailStructure = r => require.ensure([], () => r(require('@/pages/salary/details/structure.vue')), 'SalaryDetailStructure');
// //查看详情页
// const Check = r => require.ensure([], () => r(require('@/pages/salary/detail/check.vue')), 'Check');
//等级规则配置页
const SalaryRule = r => require.ensure([], () => r(require('@/pages/salary/rule/index.vue')), 'SalaryRule');
//等级规则编辑页
const SalaryEditRule = r => require.ensure([], () => r(require('@/pages/salary/rule/edit.vue')), 'SalaryEditRule');
//等级规则添加页
const SalaryAddRule = r => require.ensure([], () => r(require('@/pages/salary/rule/add.vue')), 'SalaryAddRule');


export default [
  //薪资信息模块
  {
    path: '/salary',
    name: 'salary',
    redirect: '/salary/detail',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'detail',
        name: 'salaryDetail',
        component: SalaryDetail,
        meta: {
          title: 'TMS - 工资详情'
        }
      },
      {
        path: 'detail/structure',
        name: 'salaryDetailStructure',
        component: SalaryDetailStructure,
        meta: {
          title: 'TMS - 工资详情'
        }
      },
      // {path: 'detail/check',name: 'check',component: Check,meta: {title: 'TMS - 老师管理系统'}},
      // {path: 'rule',name: 'rule',component: Rule,meta: {title: 'TMS - 老师管理系统'}},
      // {path: 'rule/edit',name: 'check',component: EditRule,meta: {title: 'TMS - 老师管理系统'}},
      // {path: 'rule/check',name: 'check',component: CheckRule,meta: {title: 'TMS - 老师管理系统'}},
      // {path: 'rule/add',name: 'check',component: AddRule,meta: {title: 'TMS - 老师管理系统'}},
      {
        path: 'rule',
        name: 'salaryRule',
        component: SalaryRule,
        meta: {
          title: 'TMS - 等级规则配置'
        }
      },
      {
        path: 'rule/edit',
        name: 'salaryEditRule',
        component: SalaryEditRule,
        meta: {
          title: 'TMS - 等级规则配置'
        }
      },
      {
        path: 'rule/add',
        name: 'salaryAddRule',
        component: SalaryAddRule,
        meta: {
          title: 'TMS - 等级规则配置'
        }
      },
    ]
  }
]
