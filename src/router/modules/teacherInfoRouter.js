/**
 * 老师管理模块
 * */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//在职页
const Inservice = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/index.vue')), 'Inservice');
//在职页面-调整固定时间
const InserviceEditTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/editTime.vue')), 'InserviceEditTime');
//在职页面-调整固定时间预览页面
const InservicePreviewTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/previewTime.vue')), 'InservicePreviewTime');
//在职页面-调整固定时间影响课程页面
const InserviceModifyCourse = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/modifyCourse.vue')), 'InserviceModifyCourse');
//在职页面-请假
const InserviceLeave = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/leave.vue')), 'InserviceLeave');
//在职页面-固定时间请假预览
const InserviceLeavePreview = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/previewLeave.vue')), 'InserviceLeavePreview');
//在职页面-调整临时时间
const TempEditTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/tempEditTime.vue')), 'TempEditTime');
//在职页面-临时时间请假预览
const TempPreviewTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/tempPreviewTime.vue')), 'TempPreviewTime');
//在职页面-调整临时时间影响课程页面
const TempModifyCourse = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/tempCourse.vue')), 'TempModifyCourse');
//在职页面-请假编辑
const InserviceLeaveEdit = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/editLeave.vue')), 'InserviceLeaveEdit');
//在职页面-编辑个人信息
const PersonalInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/personalInfo.vue')), 'PersonalInfo');
//在职页面-编辑工作信息
const WorkInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/workInfo.vue')), 'WorkInfo');
//在职页面-编辑老师信息页面
const SkillInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/skillInfo.vue')), 'SkillInfo');
//在职页面-老师乐器简历页面
const ResumeInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/resumeInfo.vue')), 'ResumeInfo');
//在职页面-老师乐器简历预览
const ResumeReview = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/resumeReview.vue')), 'ResumeReview');
//在职页面-详细资料页
const InserviceDetail = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/detail.vue')), 'InserviceDetail');
//在职页面-详细资料页-固定课详情页
const InserviceFixTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/fixTime.vue')), 'InserviceFixTime');
// 老师画像管理
const PortrayalManage = r => require.ensure([], () => r(require('@/pages/teacherInfo/portrayalManage/index.vue')), 'PortrayalManage');

//校招备用人才库
const CampusSpareTalent = r => require.ensure([], () => r(require('@/pages/teacherInfo/campusSpareTalent.vue')), 'CampusSpareTalent');
//简历审核
const VitaAudit = r => require.ensure([], () => r(require('@/pages/teacherInfo/vitaAudit/index.vue')), 'VitaAudit');
//校招备用人才库编辑
const CampusSpareEdit = r => require.ensure([], () => r(require('@/pages/teacherInfo/campusSpareEdit.vue')), 'CampusSpareEdit');
//校招待审核页面
const CampusRecruit = r => require.ensure([], () => r(require('@/pages/teacherInfo/campusRecruit/index.vue')), 'CampusRecruit');
//社招待审核页面
const SocialRecruit = r => require.ensure([], () => r(require('@/pages/teacherInfo/socialRecruit/index.vue')), 'SocialRecruit');
//离职页
const Dimission = r => require.ensure([], () => r(require('@/pages/teacherInfo/dimission.vue')), 'Dimission');



export default [
  {
    path: '/teacherInfo',
    name: 'teacherInfo',
    redirect: '/teacherInfo/inservice',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'inservice',
        name: 'inservice',
        component: Inservice,
        meta: {
          title: 'TMS - 在职'
        }
      },
      {
        path: 'inservice/tempEditTime',
        name: 'tempEditTime',
        component: TempEditTime,
        meta: {
          title: 'TMS - 在职'
        }
      },
      {
        path: 'inservice/tempPreviewTime',
        name: 'tempPreviewTime',
        component: TempPreviewTime,
        meta: {
          title: 'TMS - 在职'
        }
      },
      {
        path: 'inservice/tempCourse',
        name: 'tempCourse',
        component: TempModifyCourse,
        meta: {
          title: 'TMS - 在职'
        }
      },
      {
        path: 'vitaAudit',
        name: 'VitaAudit',
        component: VitaAudit,
        meta: {
          title: 'TMS - 简历审核'
        }
      },
      //校招备用人才库
      {
        path: 'campusSpareTalent',
        name: 'campusSpareTalent',
        component: CampusSpareTalent,
        meta: {
          title: 'TMS - 校招备用人才库'
        }
      },
      {
        path: 'portrayalManage',
        name: 'portrayalManage',
        component: PortrayalManage,
        meta: {
          title: 'TMS - 老师画像管理'
        }
      },
      //校招待审核
      {
        path: 'campusRecruit',
        name: 'campusRecruit',
        component: CampusRecruit,
        meta: {
          title: 'TMS - 校招待审核'
        }
      },
      //社招待审核
      {
        path: 'socialRecruit',
        name: 'socialRecruit',
        component: SocialRecruit,
        meta: {
          title: 'TMS - 社招待审核'
        }
      },
      //离职
      {
        path: 'dimission',
        name: 'dimission',
        component: Dimission,
        meta: {
          title: 'TMS - 离职'
        }
      }
    ]
  }
]
