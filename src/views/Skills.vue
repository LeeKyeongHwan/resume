<template>
  <sections class="skills">
    <template slot="section_title">스킬</template>

    <ul class="skills_list">
      <li class="skills">
        <div class="skill__title">언어/기술</div>
        <ul class="skill_list">
          <li class="skill">HTML</li>
          <li class="skill">CSS / Sass</li>
          <li class="skill">JavaScript / ES6</li>
        </ul>
      </li>
      <li class="skills">
        <div class="skill__title">라이브러리 / 프레임워크</div>
        <ul class="skill_list">
          <li class="skill">Vue</li>
          <li class="skill">jQuery</li>
          <li class="skill">Bootstrap / Semantic UI</li>
        </ul>
      </li>
      <li class="skills">
        <div class="skill__title">Etc / Tools</div>
        <ul class="skill_list">
          <li class="skill">NPM / Yarn</li>
          <li class="skill">SEO</li>
          <li class="skill">Rest API</li>
          <li class="skill">VCS (git, subversion)</li>
          <li class="skill">SorceTree</li>
          <li class="skill">VSCode</li>
          <li class="skill">JetBrains</li>
        </ul>
      </li>
      <li class="skills">
        <div class="skill__title">Backend</div>
        <ul class="skill_list">
          <li class="skill">Spring MVC</li>
          <li class="skill">MySQL</li>
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
</style>
