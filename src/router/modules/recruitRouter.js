/**
 * 培训管理模块 
 * */


const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//初筛页
const InitialScreen = r => require.ensure([], () => r(require('@/pages/recruit/initialScreen/index.vue')), 'InitialScreen');
//老师分配页
const Distribution = r => require.ensure([], () => r(require('@/pages/recruit/distribution.vue')), 'Distribution');
//老师分配调整页
const AdjustDistribution = r => require.ensure([], () => r(require('@/pages/recruit/adjustDistribution.vue')), 'Distribution');
//社招注册待分配
const SocialRegister = r => require.ensure([], () => r(require('@/pages/recruit/socialRegister/index.vue')), 'socialRegister');
//社招注册待分配-修改渠道
const RecruitEditSchool = r => require.ensure([], () => r(require('@/pages/recruit/components/editSchoolId.vue')), 'RecruitEditSchool');
//培训页
const TeacherForTrain = r => require.ensure([], () => r(require('@/pages/recruit/train')), 'TeacherForTrain');
//完成培训审核
const TeacherForTrainAudit = r => require.ensure([], () => r(require('@/pages/recruit/train/teacherAudit/index.vue')), 'TeacherForTrainAudit');
//培训师调整时间页
const TrainTeacherCalendar = r => require.ensure([], () => r(require('@/pages/recruit/train/calendar/teacher.vue')), 'TrainTeacherCalendar');
//培训师组长时间安排页
const TrainMasterCalendar = r => require.ensure([], () => r(require('@/pages/recruit/train/calendar/master.vue')), 'TrainMasterCalendar');
//备用人才库页
const SpareTalent = r => require.ensure([], () => r(require('@/pages/recruit/spareTalent/index.vue')), 'SpareTalent');
//招聘中教研考核
const TrainResearch = r => require.ensure([], () => r(require('@/pages/recruit/trainResearch/index.vue')), 'TrainResearch');
// 正式考核/预约规则
const ResearchRule = r => require.ensure([], () => r(require('@/pages/recruit/trainResearch/rules.vue')), 'ResearchRule');
//招聘中教研考核/考核记录
const TrainResearchHistory = r => require.ensure([], () => r(require('@/pages/recruit/trainResearch/trainResearchHistory/index.vue')), 'TrainResearchHistory');
//招聘中教研考核/批量分配教研员
const BatchResearchDistribution = r => require.ensure([], () => r(require('@/pages/recruit/trainResearch/batchResearchDistribution/index.vue')), 'TrainResearchHistory');
//社招注册待分配/添加老师页面
const TeachAdd = r => require.ensure([], () => r(require('@/pages/recruit/socialRegister/teacherAdd.vue')), 'TeachAdd');


export default [
  //招聘管理模块
  {
    path: '/recruit',
    name: 'recruit',
    redirect: '/recruit/initialScreen',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'initialScreen',
        name: 'initialScreen',
        component: InitialScreen,
        meta: {
          title: 'TMS - 面试'
        }
      },
      {
        path: ':subUrl/distribution',
        name: 'distribution',
        component: Distribution,
        meta: {
          title: 'TMS - 手动分配'
        }
      },
      {
        path: ':subUrl/adjustDistribution',
        name: 'adjustDistribution',
        component: AdjustDistribution,
        meta: {
          title: 'TMS - 调整分配'
        }
      },
      {
        path: 'spareTalent',
        name: 'spareTalent',
        component: SpareTalent,
        meta: {
          title: 'TMS - 备用人才'
        }
      },
      {
        path: 'teacherForTrain',
        name: 'teacherForTrain',
        component: TeacherForTrain,
        meta: {
          title: 'TMS - 培训'
        }
      },
      {
        path: 'teacherForTrain/teacherForTrainAudit',
        name: 'teacherForTrainAudit',
        component: TeacherForTrainAudit,
        meta: {
          title: 'TMS - 培训'
        }
      },
      {
        path: 'teacherForTrain/teacherCalendar',
        name: 'trainTeacherCalendar',
        component: TrainTeacherCalendar,
        meta: {
          title: 'TMS - 调整时间'
        }
      },
      {
        path: 'teacherForTrain/masterCalendar',
        name: 'trainMasterCalendar',
        component: TrainMasterCalendar,
        meta: {
          title: 'TMS - 时间安排'
        }
      },
      {
        path: 'socialRegister',
        name: 'socialRegister',
        component: SocialRegister,
        meta: {
          title: 'TMS - 社招注册待分配'
        }
      },
      {
        path: 'socialRegister/teacherAdd',
        name: 'teacherAdd',
        component: TeachAdd,
        meta: {
          title: 'TMS - 添加老师'
        }
      },
      {
        path: ':subUrl/recruitEditSchool',
        name: 'recruitEditSchool',
        component: RecruitEditSchool,
        meta: {
          title: 'TMS - 修改渠道'
        }
      },
      {
        path: 'trainResearch',
        name: 'trainResearch',
        component: TrainResearch,
        meta: {
          title: 'TMS - 正式考核'
        }
      },
      {
        path: 'trainResearch/rules',
        name: 'researchRule',
        component: ResearchRule,
        meta: {
          title: 'TMS - 预约规则'
        }
      },
      {
        path: 'trainResearch/trainResearchHistory',
        name: 'trainResearchHistory',
        component: TrainResearchHistory,
        meta: {
          title: 'TMS - 考核记录'
        }
      },
      {
        path: 'trainResearch/batchResearchDistribution',
        name: 'batchResearchDistribution',
        component: BatchResearchDistribution,
        meta: {
          title: 'TMS - 批量分配'
        }
      },
    ]
  },
]
