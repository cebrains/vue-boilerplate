/**
 * 
 * 第三方简历优化
 */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
// 简历审核
const ResumeReviews = r => require.ensure([], () => r(require('@/pages/resumeThird/review/index.vue')), 'ResumeReviews');
// 简历审核 审核简历页面
const ReviewInfo = r => require.ensure([], () => r(require('@/pages/resumeThird/components/reviewInfo.vue')), 'ReviewInfo');
// 审核记录 修改简历页面
const RecordsInfo = r => require.ensure([], () => r(require('@/pages/resumeThird/components/recordsInfo.vue')), 'RecordsInfo');
// 审核记录
const ResumeRecords = r => require.ensure([], () => r(require('@/pages/resumeThird/records/index.vue')), 'ResumeRecords');

export default [
  {
    path: '/resume',
    name: 'resume',
    redirect: '/resume/review',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'review',
        name: 'review',
        component: ResumeReviews,
        meta: {
          title: 'TMS - 简历审核'
        }
      },
      {
        path: 'review/reviewInfo',
        name: 'reviewInfo',
        component: ReviewInfo,
        meta: {
          title: 'TMS - 简历审核'
        }
      },
      {
        path: 'records',
        name: 'records',
        component: ResumeRecords,
        meta: {
          title: 'TMS - 审核记录'
        }
      },
      {
        path: 'records/recordsInfo',
        name: 'recordsInfo',
        component: RecordsInfo,
        meta: {
          title: 'TMS - 审核记录'
        }
      },
    ]
  }
]
