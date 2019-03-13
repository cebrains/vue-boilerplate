/**
 * 
 * 工单管理模块
 */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//接受工单页
const OrderReceived = r => require.ensure([], () => r(require('@/pages/order/received.vue')), 'OrderReceived');
//发出工单页
const OrderSent = r => require.ensure([], () => r(require('@/pages/order/sent.vue')), 'OrderSent');

export default [
  {
    path: '/workOrder',
    name: 'workOrder',
    redirect: '/workOrder/received',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'received',
        name: 'orderReceived',
        component: OrderReceived,
        meta: {
          title: 'TMS - 工单管理'
        }
      },
      {
        path: 'sent',
        name: 'orderSent',
        component: OrderSent,
        meta: {
          title: 'TMS - 工单管理'
        }
      }
    ]
  }
]
