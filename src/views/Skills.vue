<template>
  <sections class="skills">
    <template slot="section_title">스킬</template>

    <ul class="skills_list">
      <li class="skills">
        <div class="skill__title">언어 / 기술</div>
        <div class="skill_list">
          <span class="skill">HTML</span>
          <span class="skill">CSS</span>
          <span class="skill">Sass</span>
          <span class="skill">JavaScript</span>
          <span class="skill">ES6</span>
        </div>
      </li>
      <li class="skills">
        <div class="skill__title">라이브러리 / 프레임워크</div>
        <ul class="skill_list">
          <li class="skill">Vue</li>
          <li class="skill">jQuery</li>
          <li class="skill">Bootstrap</li>
          <li class="skill">Semantic UI</li>
        </ul>
      </li>
      <li class="skills list">
        <div class="skill__title">Etc / Tools</div>
        <ul class="skill_list">
          <li class="skill">NPM / Yarn</li>
          <li class="skill">SEO</li>
          <li class="skill">Rest API</li>
          <li class="skill">git</li>
          <li class="skill">subversion</li>
          <li class="skill">SorceTree</li>
          <li class="skill">VSCode</li>
          <li class="skill">JetBrains</li>
        </ul>
      </li>
      <li class="skills">
        <div class="skill__title">Backend</div>
        <ul class="skill_list">
          <li class="skill skill--past">Spring MVC</li>
          <li class="skill skill--past">MySQL</li>
        </ul>
      </li>
    </ul>
  </sections>
</template>

<script>
export default {
  name: 'skills'
}
</script>

<style lang="scss" scoped>
.skills_list {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  .skills {
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px dotted darken($gray, 20%);
    &:first-child { border-top: 1px dotted darken($gray, 20%); }

    .skill__title { flex: 3; }
    .skill_list {
      flex: 9;

      .skill {
        display: inline-block;
        margin-right: 1rem;

        &::before {
          content: '·';
          display: inline-block;
        }

        &.skill--past { color: darken($gray, 20%); }
      }
    }
  }
}
</style>
