/**
 *  主页   均采用懒加载
 */

//主页
const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//回访
const VisitBack = r => require.ensure([], () => r(require('@/pages/work/components/visitBack.vue')), 'VisitBack');
//课后单
const AfterClass = r => require.ensure([], () => r(require('@/pages/work/components/afterClass.vue')), 'AfterClass');
//录音
const Recording = r => require.ensure([], () => r(require('@/pages/work/components/recording.vue')), 'Recording');
//乐谱
const Score = r => require.ensure([], () => r(require('@/pages/work/components/score.vue')), 'Score');
//课程要求
const EDetail = r => require.ensure([], () => r(require('@/components/detail.vue')), 'EDetail');
//人才编辑
const TeachEdit = r => require.ensure([], () => r(require('@/pages/recruit/teachEdit.vue')), 'TeachEdit');
//在职页面-调整固定时间
const InserviceEditTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/editTime.vue')), 'InserviceEditTime');
//在职页面-调整固定时间预览页面
const InservicePreviewTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/previewTime.vue')), 'InservicePreviewTime');
//在职页面-调整固定时间影响课程页面
const InserviceModifyCourse = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/modifyCourse.vue')), 'InserviceModifyCourse');
//公共页
const Archives = r => require.ensure([], () => r(require('@/pages/components/archives.vue')), 'Archives');
//在职页面-详细资料页
const InserviceDetail = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/detail.vue')), 'InserviceDetail');
//在职页面-编辑个人信息
const PersonalInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/personalInfo.vue')), 'PersonalInfo');
//在职页面-老师乐器简历预览
const ResumeReview = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/resumeReview.vue')), 'ResumeReview');
//在职页面-老师乐器简历页面
const ResumeInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/resumeInfo.vue')), 'ResumeInfo');
//在职页面-编辑工作信息
const WorkInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/workInfo.vue')), 'WorkInfo');
//在职页面-编辑老师信息页面
const SkillInfo = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/skillInfo.vue')), 'SkillInfo');
//在职页面-请假
const InserviceLeave = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/leave.vue')), 'InserviceLeave');
//在职页面-详细资料页-固定课详情页
const InserviceFixTime = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/fixTime.vue')), 'InserviceFixTime');
//在职页面-固定时间请假预览
const InserviceLeavePreview = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/previewLeave.vue')), 'InserviceLeavePreview');
//在职页面-请假编辑
const InserviceLeaveEdit = r => require.ensure([], () => r(require('@/pages/teacherInfo/inservice/editLeave.vue')), 'InserviceLeaveEdit');
//课程记录
const ClassRecordDetails = r => require.ensure([], () => r(require('@/pages/research/components/classRecordDetails.vue')), 'ClassRecordDetails');
// 离职&&全职兼职变更/影响学生的查看详情
const AffectStudents = r => require.ensure([], () => r(require('@/pages/work/components/affectStudents.vue')), 'AffectStudents');

export default [
  //主页
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      //回访
      {
        path: '/:mainUrl/:subUrl/visitBack',
        name: 'VisitBack',
        component: VisitBack,
        meta: {
          title: 'TMS - 回访'
        }
      },
      //课后单
      {
        path: '/:mainUrl/:subUrl/afterClass',
        name: 'AfterClass',
        component: AfterClass,
        meta: {
          title: 'TMS - 课后单'
        }
      },
      //录音
      {
        path: '/:mainUrl/:subUrl/recording',
        name: 'Recording',
        component: Recording,
        meta: {
          title: 'TMS - 录音'
        }
      },
      //查看乐谱
      {
        path: '/:mainUrl/:subUrl/score',
        name: 'RatingScore',
        component: Score,
        meta: {
          title: 'TMS - 乐谱'
        }
      },
      // 课程要求
      {
        path: '/:mainUrl/:subUrl/courseDetail',
        name: 'EDetail',
        component: EDetail,
        meta: {
          title: 'TMS - 课程要求'
        }
      },
      // 编辑资料
      {
        path: '/:mainUrl/:subUrl/techerEdit',
        name: 'TeachEdit',
        component: TeachEdit,
        meta: {
          title: 'TMS - 编辑资料'
        }
      },
      //编辑固定时间
      {
        path: '/:mainUrl/:subUrl/editTime',
        name: 'editTime',
        component: InserviceEditTime,
        meta: {
          title: 'TMS - 调整固定时间'
        }
      },
      //预览固定时段
      {
        path: '/:mainUrl/:subUrl/previewTime',
        name: 'previewTime',
        component: InservicePreviewTime,
        meta: {
          title: 'TMS - 调整固定时间预览页面'
        }
      },
      //固定时段排课修改查看
      {
        path: '/:mainUrl/:subUrl/modifyCourse',
        name: 'modifyCourse',
        component: InserviceModifyCourse,
        meta: {
          title: 'TMS - 调整固定时间影响课程页面'
        }
      },
      //老师生命周期详情
      {
        path: '/:mainUrl/:subUrl/archives',
        name: 'archives',
        component: Archives,
        meta: {
          title: 'TMS - 老师生命周期详情'
        }
      },
      // 老师详情
      {
        path: '/:mainUrl/:subUrl/detail',
        name: 'inserviceDetail',
        component: InserviceDetail,
        meta: {
          title: 'TMS - 详细资料'
        }
      },
       // 课程记录
       {
        path: '/:mainUrl/:subUrl/classRecordDetails',
        name: 'ClassRecordDetails',
        component: ClassRecordDetails,
        meta: {
          title: 'TMS - 课程记录'
        }
      },
      // 编辑个人信息
      {
        path: '/:mainUrl/:subUrl/personalInfo',
        name: 'inservicePersonalInfo',
        component: PersonalInfo,
        meta: {
          title: 'TMS - 编辑个人信息'
        }
      },
      // 查看简历
      {
        path: '/:mainUrl/:subUrl/resumeReview',
        name: 'inserviceResumeReview',
        component: ResumeReview,
        meta: {
          title: 'TMS - 查看简历'
        }
      },
      // 编辑简历
      {
        path: '/:mainUrl/:subUrl/resumeInfo',
        name: 'inserviceResumeInfo',
        component: ResumeInfo,
        meta: {
          title: 'TMS - 编辑简历'
        }
      },
      // 编辑工作信息
      {
        path: '/:mainUrl/:subUrl/workInfo',
        name: 'inserviceWorkInfo',
        component: WorkInfo,
        meta: {
          title: 'TMS - 编辑工作信息'
        }
      },
      // 编辑技能信息
      {
        path: '/:mainUrl/:subUrl/skillInfo',
        name: 'inserviceSkillInfo',
        component: SkillInfo,
        meta: {
          title: 'TMS - 编辑技能信息'
        }
      },
      // 老师请假
      {
        path: '/:mainUrl/:subUrl/leave',
        name: 'inserviceLeave',
        component: InserviceLeave,
        meta: {
          title: 'TMS - 请假'
        }
      },
      // 老师固定时段/固定课详情
      {
        path: '/:mainUrl/:subUrl/fixTime',
        name: 'inserviceFixTime',
        component: InserviceFixTime,
        meta: {
          title: 'TMS - 请假'
        }
      },
      // 老师固定时段/请假预览
      {
        path: '/:mainUrl/:subUrl/previewLeave',
        name: 'inserviceLeavePreview',
        component: InserviceLeavePreview,
        meta: {
          title: 'TMS - 请假'
        }
      },
      // 老师请假编辑
      {
        path: '/:mainUrl/:subUrl/editLeave',
        name: 'inserviceLeaveEdit',
        component: InserviceLeaveEdit,
        meta: {
          title: 'TMS - 请假'
        }
      },
      // 离职&&全职兼职变更/影响学生的查看详情
      {
        path: '/:mainUrl/:subUrl/affectStudents',
        name: 'affectStudents',
        component: AffectStudents,
        meta: {
          title: 'TMS - 影响学生'
        }
      },
    ]
  },
]
