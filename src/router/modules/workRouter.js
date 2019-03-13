/**
 * 工作处理模块
 * */

//教师管理主页
const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');

//编辑标签
const EditLabel = r => require.ensure([], () => r(require('@/pages/work/components/label.vue')), 'EditLabel');
//回访
const VisitBack = r => require.ensure([], () => r(require('@/pages/work/components/visitBack.vue')), 'VisitBack');
//课后单
const AfterClass = r => require.ensure([], () => r(require('@/pages/work/components/afterClass.vue')), 'AfterClass');
//录音
const Recording = r => require.ensure([], () => r(require('@/pages/work/components/recording.vue')), 'Recording');
//录音单条
const RecordingSingle = r => require.ensure([], () => r(require('@/pages/work/components/recordingPlay.vue')), 'Recording');
//乐谱
const Score = r => require.ensure([], () => r(require('@/pages/work/components/score.vue')), 'Score');
const EDetail = r => require.ensure([], () => r(require('@/components/detail.vue')), 'EDetail');

//低评处理页
const LowRating = r => require.ensure([], () => r(require('@/pages/work/lowRating/index.vue')), 'LowRating');
// 抢单首课教研
const RobbingResearch = r => require.ensure([], () => r(require('@/pages/work/RobbingResearch')), 'RobbingResearch');

// 学生首课教研
const StudentResearch = r => require.ensure([], () => r(require('@/pages/work/studentResearch')), 'StudentResearch');

// 学生首课教研
const TrialClass = r => require.ensure([], () => r(require('@/pages/work/components/TrialClass')), 'TrialClass');

// 新进老师教研
const TeacherResearch = r => require.ensure([], () => r(require('@/pages/work/teacherResearch')), 'TeacherResearch');

// 添加新进老师教研
const AddTeacherResearch = r => require.ensure([], () => r(require('@/pages/work/teacherResearch/addTeacherResearch.vue')), 'AddTeacherResearch');

// 新进老师教研记录
const ResearchRecord = r => require.ensure([], () => r(require('@/pages/work/teacherResearch/researchRecord.vue')), 'ResearchRecord');
// 已教研列表
const DoneResearch = r => require.ensure([], () => r(require('@/pages/work/components/DoneResearch')), 'DoneResearch');

// 首日教研
const FirstResearch = r => require.ensure([], () => r(require('@/pages/work/components/FirstResearch')), 'FirstResearch');

// 新进教研
const NewResearch = r => require.ensure([], () => r(require('@/pages/work/components/NewResearch')), 'NewResearch');

// 教研课程列表
const CourseList = r => require.ensure([], () => r(require('@/pages/work/components/CourseList.vue')), 'CourseList');
//迟到处理页
const Late = r => require.ensure([], () => r(require('@/pages/work/late')), 'Late');
//投诉处理
//投诉处理主页
const Complaint = r => require.ensure([], () => r(require('@/pages/work/complaint')), 'Complaint');
//投诉添加页
const AddComplaint = r => require.ensure([], () => r(require('@/pages/work/complaint/addComplaint.vue')), 'AddComplaint');

const FeedbackVerify = r => require.ensure([], () => r(require('@/pages/work/workFeedbackVerify/index.vue')), 'FeedbackVerify');

//监察问题处理页
const Supervise = r => require.ensure([], () => r(require('@/pages/work/supervise/index.vue')), 'Supervise');
const SuperviseDetail = r => require.ensure([], () => r(require('@/pages/work/supervise/detail.vue')), 'SuperviseDetail');

//开放时段申请处理页
const Application = r => require.ensure([], () => r(require('@/pages/work/application/index.vue')), 'Application');
//开放时间配置
const ApplyTimeConfig = r => require.ensure([], () => r(require('@/pages/work/application/config.vue')), 'ApplyTimeConfig');
//查看开放时段详情
const ApplyTimeDetail = r => require.ensure([], () => r(require('@/pages/work/application/detail.vue')), 'ApplyTimeDetail');
//开放时段申请编辑
const ApplyTimeEdit = r => require.ensure([], () => r(require('@/pages/work/application/editTime.vue')), 'ApplyTimeEdit');
//修改开放时段影响课
const ModifyCourse = r => require.ensure([], () => r(require('@/pages/work/application/modifyCourse.vue')), 'ModifyCourse');
//临时开放时段申请处理页
const Temporary = r => require.ensure([], () => r(require('@/pages/work/temporary/index.vue')), 'Temporary');
//查看临时开放时段详情
const TimeDetail = r => require.ensure([], () => r(require('@/pages/work/temporary/detail.vue')), 'TimeDetail');
//查看临时时段开放数据统计
const DataStatistics = r => require.ensure([], () => r(require('@/pages/work/temporary/data.vue')), 'DataStatistics');
//临时开放时段申请编辑
const TimeEdit = r => require.ensure([], () => r(require('@/pages/work/temporary/editTime.vue')), 'TimeEdit');
//体验课教研处理页
const ExperienceLesson = r => require.ensure([], () => r(require('@/pages/work/experienceLesson/index.vue')), 'ExperienceLesson');
//更换老师
const ChangeTeacher = r => require.ensure([], () => r(require('@/pages/work/experienceLesson/changeTeacher.vue')), 'ChangeTeacher');
//更换老师记录
const ChangeTeacherHistory = r => require.ensure([], () => r(require('@/pages/work/experienceLesson/history.vue')), 'ChangeTeacherHistory');
//复购课教研处理页
const RepurchaseLesson = r => require.ensure([], () => r(require('@/pages/work/purchase/index.vue')), 'RepurchaseLesson');
//主课老师反馈处理页·
const Feedback = r => require.ensure([], () => r(require('@/pages/work/feedback.vue')), 'Feedback');
//离职申请页面·-->在页眉上
const Dimission = r => require.ensure([], () => r(require('@/pages/work/dimission')), 'Dimission');
//全职/兼职变更
const WorkTypeChange = r => require.ensure([], () => r(require('@/pages/work/workTypeChange/index.vue')), 'WorkeTypeChange');

export default [
  {
    path: '/work',
    name: 'work',
    redirect: '/work/late',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: ':parentUrl/courseList',
        name: 'CourseList',
        component: CourseList,
        meta: {
          title: 'TMS - 课程列表'
        }
      },
      {
        path: 'teacherResearch',
        name: 'TeacherResearch',
        component: TeacherResearch,
        meta: {
          title: 'TMS - 新进老师教研'
        }
      },
      {
        path: ':parentUrl/researchRecord',
        name: 'ResearchRecord',
        component: ResearchRecord,
        meta: {
          title: 'TMS - 新进老师教研'
        }
      },
      {
        path: ':parentUrl/addTeacherResearch',
        name: 'AddTeacherResearch',
        component: AddTeacherResearch,
        meta: {
          title: 'TMS - 新进老师教研'
        }
      },
      {
        path: 'robbingResearch',
        name: 'RobbingResearch',
        component: RobbingResearch,
        meta: {
          title: 'TMS - 老师抢单教研'
        }
      },
      {
        path: 'studentResearch',
        name: 'StudentResearch',
        component: StudentResearch,
        meta: {
          title: 'TMS - 学生首课教研'
        }
      },
      {
        path: ':parentUrl/firstResearch',
        name: 'FirstResearch',
        component: FirstResearch,
        meta: {
          title: 'TMS - 新进老师教研'
        }
      },
      {
        path: ':parentUrl/newResearch',
        name: 'NewResearch',
        component: NewResearch,
        meta: {
          title: 'TMS - 新进老师教研'
        }
      },
      {
        path: ':parentUrl/doneResearch',
        name: 'DoneResearch',
        component: DoneResearch,
        meta: {
          title: 'TMS - 已教研列表'
        }
      },
      {
        path: ':parentUrl/trialClass',
        name: 'TrialClass',
        component: TrialClass,
        meta: {
          title: 'TMS - 学生首课教研'
        }
      },
      {
        path: 'visitBack',
        name: 'LowRatingVisitBack',
        component: VisitBack,
        meta: {
          title: 'TMS - 回访'
        }
      },
      {
        path: ':subUrl/editLabel',
        name: 'editLabel',
        component: EditLabel,
        meta: {
          title: 'TMS - 编辑标签'
        }
      },
      {
        path: 'afterClass',
        name: 'LowRatingAfterClass',
        component: AfterClass,
        meta: {
          title: 'TMS - 课后单'
        }
      },
      {
        path: 'recording',
        name: 'LowRatingRecording',
        component: Recording,
        meta: {
          title: 'TMS - 录音'
        }
      },
      {
        path: 'score',
        name: 'LowRatingScore',
        component: Score,
        meta: {
          title: 'TMS - 乐谱'
        }
      },
      {
        path: 'late',
        name: 'late',
        component: Late,
        meta: {
          title: 'TMS - 迟到申诉处理'
        }
      },
      {
        path: 'lowRating',
        name: 'lowRating',
        component: LowRating,
        meta: {
          title: 'TMS - 低评处理'
        }
      },
      {
        path: 'complaint',
        name: 'complaint',
        component: Complaint,
        meta: {
          title: 'TMS - 投诉处理'
        }
      },
      {
        path: 'complaint/add',
        name: 'addComplaint',
        component: AddComplaint,
        meta: {
          title: 'TMS - 投诉处理'
        }
      },
      {
        path: 'feedbackVerify',
        name: 'feedbackVerify',
        component: FeedbackVerify,
        meta: {
          title: 'TMS - 核实反馈'
        }
      },
      {
        path: 'supervise',
        name: 'Supervise',
        component: Supervise,
        meta: {
          title: 'TMS - 监察问题处理'
        }
      },
      {
        path: 'supervise/detail',
        name: 'SuperviseDetail',
        component: SuperviseDetail,
        meta: {
          title: 'TMS - 监察问题处理'
        }
      },
      {
        path: 'application',
        name: 'application',
        component: Application,
        meta: {
          title: 'TMS - 开放时段申请处理'
        }
      },
      {
        path: 'application/config',
        name: 'applyTimeConfig',
        component: ApplyTimeConfig,
        meta: {
          title: 'TMS - 开放时段可选时段配置'
        }
      },
      {
        path: 'application/applyTimeDetail',
        name: 'applyTimeDetail',
        component: ApplyTimeDetail,
        meta: {
          title: 'TMS - 时段修改申请详情'
        }
      },
      {
        path: 'application/edit',
        name: 'applyTimeEdit',
        component: ApplyTimeEdit,
        meta: {
          title: 'TMS - 开放时段编辑待处理申请时间'
        }
      },
      {
        path: 'application/modifySchedule',
        name: 'modifySchedule',
        component: ModifyCourse,
        meta: {
          title: 'TMS - 排课修改'
        }
      },
      {
        path: 'temporary',
        name: 'temporary',
        component: Temporary,
        meta: {
          title: 'TMS - 临时开放时段申请处理'
        }
      },
      {
        path: 'temporary/timeDetail',
        name: 'timeDetail',
        component: TimeDetail,
        meta: {
          title: 'TMS - 临时时段修改申请详情'
        }
      },
      {
        path: 'temporary/data',
        name: 'data',
        component: DataStatistics,
        meta: {
          title: 'TMS - 临时时段开放数据统计'
        }
      },
      {
        path: 'temporary/edit',
        name: 'timeEdit',
        component: TimeEdit,
        meta: {
          title: 'TMS - 临时时段编辑待处理申请时间'
        }
      },
      {
        path: 'experienceLesson',
        name: 'experienceLesson',
        component: ExperienceLesson,
        meta: {
          title: 'TMS - 体验课教研'
        }
      },
      {
        path: 'experienceLesson/changeTeacher',
        name: 'changeTeacher',
        component: ChangeTeacher,
        meta: {
          title: 'TMS - 体验课教研'
        }
      },
      {
        path: 'experienceLesson/changeTeacherHistory',
        name: 'changeTeacherhistory',
        component: ChangeTeacherHistory,
        meta: {
          title: 'TMS - 体验课教研'
        }
      },
      {
        path: 'repurchaseLesson',
        name: 'repurchaseLesson',
        component: RepurchaseLesson,
        meta: {
          title: 'TMS - 复购课教研'
        }
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: Feedback,
        meta: {
          title: 'TMS - 主课老师反馈处理',
        }
      },
      {
        path: 'dimission',
        name: 'Dimission',
        component: Dimission,
        meta: {
          title: 'TMS - 离职申请',
        }
      },
      {
        path: 'workTypeChange',
        name: 'workTypeChange',
        component: WorkTypeChange,
        meta: {
          title: 'TMS - 全职/兼职变更',
        }
      }
    ]
  }
]
