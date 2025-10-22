await fetch('/api/v1/recruitment/apply', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    recruitment_id: 301,
    self_introduction: '저는 백엔드 개발 경험이 있습니다.',
    motivation: '팀 프로젝트를 통해 실력을 쌓고 싶습니다.',
    objective: '스터디 참여 후 Django 프로젝트 완성',
    available_time: '화/목 19:00~22:00',
    has_study_experience: true,
    study_experience: '이전 팀 프로젝트에서 CRUD 웹앱 개발 경험 있음',
  }),
})
