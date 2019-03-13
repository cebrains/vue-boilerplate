/**
 *
 * 数据记录模块
 */


const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');

// 上课记录页
const ClassRecord = r => require.ensure([], () => r(require('@/pages/research/classRecord')), 'ClassRecord');
// 数据记录/请假记录页
const LeaveRecord = r => require.ensure([], () => r(require('@/pages/research/leaveRecord/index.vue')), 'LeaveRecord');
//数据记录/渠道佣金数据
const ChannelData = r => require.ensure([], () => r(require('@/pages/research/channelData/index.vue')), 'ChannelData');
// 渠道佣金详情
const CommissionDetails = r => require.ensure([], () => r(require('@/pages/research/channelData/commissionDetails.vue')), 'CommissionDetails');
// 渠道佣金发放记录
const ChannelRecord = r => require.ensure([], () => r(require('@/pages/research/channelRecord/index.vue')), 'ChannelRecord');
// 待监听页面
const ProbationRecord = r => require.ensure([], () => r(require('@/pages/research/probationRecord')), 'ProbationRecord');
// 诚信分数据统计
const CreditData = r => require.ensure([], () => r(require('@/pages/research/creditData/index.vue')), 'creditData');
// 请假页面 
const leaveMessage = r => require.ensure([], () => r(require('@/pages/research/leave/index.vue')), 'leaveMessage');


export default [
  {
    path: '/research',
    name: 'research',
    redirect: '/research/classRecord',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'classRecord',
        name: 'classRecord',
        component: ClassRecord,
        meta: {
          title: 'TMS - 上课记录'
        }
      },
      {
        path: 'probationRecord',
        name: 'probationRecord',
        component: ProbationRecord,
        meta: {
          title: 'TMS - 待监听'
        }
      },
      {
        path: 'leaveRecord',
        name: 'leaveRecord',
        component: LeaveRecord,
        meta: {
          title: 'TMS - 请假记录'
        }
      },
      {
        path: 'channelData',
        name: 'channelData',
        component: ChannelData,
        meta: {
          title: 'TMS - 渠道佣金数据'
        }
      },
      {
        path: 'channelRecord',
        name: 'ChannelRecord',
        component: ChannelRecord,
        meta: {
          title: 'TMS - 渠道佣金发放记录'
        }
      },
      {
        path: 'channelData/details',
        name: 'commissionDetails',
        component: CommissionDetails,
        meta: {
          title: 'TMS - 渠道佣金数据'
        }
      },
      {
        path: 'creditData',
        name: 'CreditData',
        component: CreditData,
        meta: {
          title: 'TMS - 诚信分数据统计'
        }
      },
      {
        path: 'leaveMessage',
        name: 'leaveMessage',
        component: leaveMessage,
        meta: {
          title: 'TMS - 请假处理'
        }
      },
    ]
  }
]
