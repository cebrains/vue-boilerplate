/**
 * 
 * 配置管理模块
 */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//渠道配置页
const Channel = r => require.ensure([], () => r(require('@/pages/configuration/channel/index.vue')), 'Channel');
//增加渠道页
const ChannelAdd = r => require.ensure([], () => r(require('@/pages/configuration/channel/add.vue')), 'ChannelAdd');
//编辑渠道页
const ChannelEdit = r => require.ensure([], () => r(require('@/pages/configuration/channel/edit.vue')), 'ChannelEdit');
//渠道/佣金规则页
const CommissionRule = r => require.ensure([], () => r(require('@/pages/configuration/channel/commissionRule.vue')), 'CommissionRule');
//渠道/佣金规则/编辑规则
const EditCommissionRule = r => require.ensure([], () => r(require('@/pages/configuration/channel/editRule.vue')), 'EditCommissionRule');
//渠道/佣金调整
const AdjustCommission = r => require.ensure([], () => r(require('@/pages/configuration/channel/adjustCommission.vue')), 'AdjustCommission');
//渠道/佣金调整/添加调整
const AddCommissionRule = r => require.ensure([], () => r(require('@/pages/configuration/channel/addRule.vue')), 'AddCommissionRule');
//显示渠道二维码页
const ChannelQrcode = r => require.ensure([], () => r(require('@/pages/configuration/channel/qrcode.vue')), 'ChannelQrcode');

//标签管理页
const LabelManagement = r => require.ensure([], () => r(require('@/pages/configuration/labelManagement/index.vue')), 'LabelManagement');

// 诚信分配置页
const CreditConfig = r => require.ensure([], () => r(require('@/pages/configuration/credit/index.vue')), 'CreditConfig');

//账号配置页/编辑
const AccountEdit = r => require.ensure([], () => r(require('@/pages/configuration/account/edit.vue')), 'AccountEdit');
//账号配置页/添加
const AccountAdd = r => require.ensure([], () => r(require('@/pages/configuration/account/add.vue')), 'AccountAdd');
//账号管理页
const Account = r => require.ensure([], () => r(require('@/pages/configuration/account/index')), 'Account');
//角色管理页
const Role = r => require.ensure([], () => r(require('@/pages/configuration/role')), 'Role');
//增加角色页
const RoleAdd = r => require.ensure([], () => r(require('@/pages/configuration/role/add.vue')), 'RoleAdd');
//编辑角色页
const RoleEdit = r => require.ensure([], () => r(require('@/pages/configuration/role/edit.vue')), 'RoleEdit');
//分派角色权限页
const RoleAssign = r => require.ensure([], () => r(require('@/pages/configuration/role/assign.vue')), 'RoleAssign');
//部门管理页
const Department = r => require.ensure([], () => r(require('@/pages/configuration/department/index.vue')), 'Department');
//部门编辑页
const DepartmentEdit = r => require.ensure([], () => r(require('@/pages/configuration/department/edit.vue')), 'DepartmentEdit');
//部门增加页
const DepartmentAdd = r => require.ensure([], () => r(require('@/pages/configuration/department/add.vue')), 'DepartmentAdd');


export default [
  {
    path: '/configuration',
    name: 'configuration',
    redirect: '/configuration/channel',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'channel',
        name: 'channel',
        component: Channel,
        meta: {
          title: 'TMS - 渠道配置'
        }
      },
      {
        path: 'channel/add',
        name: 'channelAdd',
        component: ChannelAdd,
        meta: {
          title: 'TMS - 添加渠道'
        }
      },
      {
        path: 'channel/edit',
        name: 'channelEdit',
        component: ChannelEdit,
        meta: {
          title: 'TMS - 编辑渠道'
        }
      },
      {
        path: 'channel/qrcode',
        name: 'channelQrcode',
        component: ChannelQrcode,
        meta: {
          title: 'TMS - 渠道二维码'
        }
      },
      {
        path: 'channel/adjust',
        name: 'adjustCommission',
        component: AdjustCommission,
        meta: {
          title: 'TMS - 佣金调整'
        }
      },
      {
        path: 'channel/commission',
        name: 'commissionRule',
        component: CommissionRule,
        meta: {
          title: 'TMS - 佣金规则'
        }
      },
      {
        path: 'channel/editRule',
        name: 'editCommissionRule',
        component: EditCommissionRule,
        meta: {
          title: 'TMS - 添加规则'
        }
      },
      {
        path: 'channel/addRule',
        name: 'addCommissionRule',
        component: AddCommissionRule,
        meta: {
          title: 'TMS - 添加调整'
        }
      },
      {
        path: 'labelManagement',
        name: 'labelManagement',
        component: LabelManagement,
        meta: {
          title: 'TMS - 标签管理'
        }
      },
      // 诚信分配置
      {
        path: 'credit',
        name: 'creditConfig',
        component: CreditConfig,
        meta: {
          title: 'TMS - 诚信分配置'
        }
      },
      {
        path: 'account',
        name: 'account',
        component: Account,
        meta: {
          title: 'TMS - 账号管理'
        }
      },
      {
        path: 'account/edit',
        name: 'accountEdit',
        component: AccountEdit,
        meta: {
          title: 'TMS - 编辑账号'
        }
      },
      {
        path: 'account/add',
        name: 'accountAdd',
        component: AccountAdd,
        meta: {
          title: 'TMS - 添加账号'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: Role,
        meta: {
          title: 'TMS - 角色管理'
        }
      },
      {
        path: 'role/add',
        name: 'roleAdd',
        component: RoleAdd,
        meta: {
          title: 'TMS - 添加角色'
        }
      },
      {
        path: 'role/edit',
        name: 'roleEdit',
        component: RoleEdit,
        meta: {
          title: 'TMS - 编辑角色'
        }
      },
      {
        path: 'role/assign',
        name: 'roleAssign',
        component: RoleAssign,
        meta: {
          title: 'TMS - 分派权限'
        }
      },
      {
        path: 'department',
        name: 'department',
        component: Department,
        meta: {
          title: 'TMS - 部门管理'
        }
      },
      {
        path: 'department/add',
        name: 'departmentAdd',
        component: DepartmentAdd,
        meta: {
          title: 'TMS - 添加部门'
        }
      },
      {
        path: 'department/edit',
        name: 'departmentEdit',
        component: DepartmentEdit,
        meta: {
          title: 'TMS - 编辑部门'
        }
      }
    ]
  }
]
