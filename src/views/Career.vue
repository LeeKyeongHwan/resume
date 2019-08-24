<template>
  <sections class="career">
    <template slot="section_title">경력</template>

    <section class="company">
      <h3>회사명</h3>
      <p>2018. 02. ~ 재직</p>
      <p>IT개발팀 프론트엔드개발 담당</p>
      <p>업무내용</p>
      <ul class="projects">
        <li class="project">
          <div class="project__date">2019.01~2019.01</div>
          <div class="project__title">프로젝트 제목</div>
          <div class="project_contents">
            <div class="project__desc">프로젝트 설명</div>
            <div class="project__contribution">기여</div>
            <div class="project__stack">
              <div class="project__stack__title">스택:</div>
              <ul>
                <li>Front-end</li>
                <li>Publishing</li>
                <li>Vue</li>
                <li>HTML</li>
                <li>CSS / Sass</li>
                <li>Semantic UI</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Subversion</li>
                <li>Restful API</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </sections>
</template>

<script>
export default {
  name: 'career'
}
</script>

<style lang="scss" scoped>
</style>
