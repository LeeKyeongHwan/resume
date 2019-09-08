<template>
  <sections class="career">
    <template slot="section_title">경력</template>

    <ul class="company_wrap">
      <li class="company" v-for="(company, index_c) in companies" :key="`company_${index_c}`">
        <div class="company_item company__info">
          <p class="company__title">{{ company.title }}</p>
          <p>{{ company.date }}</p>
          <p>{{ company.team }}</p>
          <p>{{ company.working }}</p>
        </div>
        <div class="company_item company__projects">
          <ul class="projects">
            <li class="project" v-for="(project, index_p) in company.projects" :key="`project_${index_p}`">
              <p class="project__title">{{ project.title }} <small class="project__date">{{ project.date }}</small></p>
              <div class="project_contents">
                <p class="project__desc" v-html="project.desc"></p>
                <ul class="project__stack">
                  <li v-for="(stack, index_s) in project.stacks" :key="`stack_${index_s}`">{{ stack }}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </sections>
</template>

<script>
export default {
  name: 'career',
  data () {
    return {
      companies: [{
        title: '피플라이프',
        date: '2018. 02 ~ 재직',
        team: 'IT개발팀/사원',
        working: 'Front-end 개발',
        projects: [{
          title: '# 영업지원시스템 ‘T시스템’ Front-end 개발/운영',
          date: '2019.03 ~ 현재',
          desc: `- 전화 보험판매원을 위한 영업관리 시스템<br>
          - 유선 및 무선 전화 업체와 협업을 위한 Web Socket 통신 개발<br>
          - Vue를 활용한 SPA 애플리케이션<br>
          - Front-end 기여도 80%`,
          stacks: ['HTML', 'CSS', 'Sass', 'Vue', 'Restful API', 'WebSocket', 'Semantic UI', 'Git']
        }, {
          title: '# 사내 ERP ‘Pines’ Front-end 개발/운영',
          date: '2018.06 ~ 현재',
          desc: `- 기존 운영되던 ERP의 차세대 개발<br>
            - 레거시 ERP와 동시 운영 / 유지보수<br>
            - Vue를 활용한 중대규모 SPA 애플리케이션<br>
            - 프로젝트 초기 기획부터 운영, Front-end 개발 메인<br>
            - Front-end 기여도 70%`,
          stacks: ['HTML', 'CSS', 'Sass', 'Vue', 'Restful API', 'jQuery', 'Semantic UI', 'Git']
        }, {
          title: '# 기업 홈페이지 퍼블리싱/유지보수',
          date: '2018.02 ~ 현재',
          desc: `- 회사에서 운영되고 있는 홈페이지들의 퍼블리싱 및 유지보수<br>
            <a href="https://peoplelife.co.kr/main" target="_blank">https://peoplelife.co.kr/main</a><br>
            <a href="https://www.bohumclinic.com" target="_blank">https://www.bohumclinic.com</a><br>
            <a href="https://ceo-clinic.co.kr/" target="_blank">https://ceo-clinic.co.kr/</a><br>
            <a href="https://mkbiz.kr/" target="_blank">https://mkbiz.kr/</a><br>
            <a href="http://inside.peoplelife.co.kr/peopleinside/main" target="_blank">http://inside.peoplelife.co.kr/peopleinside/main</a>`,
          stacks: ['HTML', 'CSS', 'Sass', 'Vue', 'Restful API', 'jQuery', 'Bootstarp', 'gulp', 'Git']
        }, {
          title: '# 보장분석시스템 ‘Assist’ 개발/운영',
          date: '2018.02 ~ 현재',
          desc: `- 보험판매원을 위한 영업지원 및 보장분석 시스템<br>
            - Front-end 기여도 90%`,
          stacks: ['HTML', 'CSS', 'Sass', 'Vue', 'Restful API', 'jQuery', 'Bootstarp', 'gulp', 'Git']
        }, {
          title: '# 연말정산시스템 개발/운영',
          date: '2017.11 ~ 현재',
          desc: `- 보험판매원을 위한 연말정산 시스템 개발<br>
            - 첫 Front-end 실무 개발<br>
            - Front-end 기여도 100%`,
          stacks: ['HTML', 'CSS', 'Sass', 'Restful API', 'jQuery', 'Bootstarp', 'gulp', 'Git']
        }]
      }, {
        title: '생클',
        date: '2016. 11. 21 ~ 2017. 01. 06',
        team: '개발팀/사원',
        working: 'Back-end 개발',
        projects: [{
          title: '# 토마토클래스 고도화 개발/운영',
          date: '2016. 11. 21 ~ 2017. 01. 06',
          desc: `- 기존 운영되던 토마토클래스 사이트의 고도화 개발 참여<br>
            - QA 및 C/S, 운영 담당<br>
            - 무분별한 코드와 저장 프로시저를 정리하는 코드 최소화 작업`,
          stacks: ['Spring MVC', 'JSP', 'jQuery', 'MS-SQL', 'SVN']
        }]
      }, {
        title: '사이버라인',
        date: '2014. 02. 10 ~ 2016. 03. 12',
        team: '솔루션팀/사원',
        working: 'Back-end 개발',
        projects: [{
          title: '# 구축형 전자연구노트 시스템 AsteleElnEdit 개발/운영',
          date: '2015. 02 ~ 2016. 03',
          desc: `- 기존 AsteleEln의 업그레이드 버전<br>
            - 스니펫(템플릿) 기반 WYSIWYG 에디터 개발 (JavsScript/jQuery)<br>
            - 사내 솔루션 최초로 사기업 진출 사례 추가`,
          stacks: ['Spring MVC', '전자정부프레임워크', 'JSP', 'jQuery', 'Cubrid', 'Oracle', 'SVN']
        }, {
          title: '# 구축형 전자연구노트 시스템 AsteleEln 고도화 개발/운영',
          date: '2014. 07 ~ 2015. 02',
          desc: `- 문서(hwp, docs, ppt 등)의 PDF 변환 기능 개발`,
          stacks: ['Spring MVC', '전자정부프레임워크', 'JSP', 'jQuery', 'Cubrid', 'Oracle', 'SVN']
        }, {
          title: '# 클라우드 전자연구노트 서비스 알앤디오피스 개발/운영',
          date: '2014. 02 ~ 2014. 06',
          desc: `- 사내 최초 솔루션 사업 도입<br>
            - 해당 프로젝트로 인하여 웹 개발의 전반적인 프로세스를 경험할 수 있었음 `,
          stacks: ['Spring MVC', '전자정부프레임워크', 'JSP', 'jQuery', 'Cubrid', 'Oracle', 'SVN']
        }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.company_wrap { border-top: 1px dotted darken($gray, 20%); }
.company {
  display: flex;
  border-bottom: 1px dotted darken($gray, 20%);

  > .company_item {
    flex: 1;

    .company__title {
      font-size: 1.2rem;
      font-weight: 700;
      vertical-align: top;
    }
  }
  > .company__projects { flex: 3; }
}

.project {
  margin-bottom: 2rem;

  .project__title {
    font-weight: 700;

    .project__date {
      margin-left: 1rem;
      font-weight: 400;
    }
  }

  .project__stack {
    li {
        display: inline-block;
        margin-right: 1rem;

        &::before {
          content: '·';
          display: inline-block;
        }
      }
  }
}

@media (max-width: 717px) {
  .company { flex-direction: column; }
  .company__info p { margin: .5em 0;}
}
</style>
