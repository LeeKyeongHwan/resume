<template>
  <main class="main">
    <div class="page_index">
      <profile></profile>
      <about></about>
      <skills></skills>
      <career-summary></career-summary>
      <career></career>
      <education></education>
      <etc></etc>
      <license></license>
    </div>
  </main>
</template>

<script>
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import CareerSummary from './CareerSummary'
import Career from './Career'
import Education from './Education'
import Etc from './Etc'
import License from './License'

export default {
  name: 'layout',
  components: {
    Profile,
    About,
    Skills,
    CareerSummary,
    Career,
    Education,
    Etc,
    License
  }
}
</script>

<style lang="scss" scoped>
.page_index {
  margin: 1rem auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  background-color: #fff;
  box-shadow: 1px 2px 3px rgba($dark, .2);
}

@media (max-width: 717px) {
  .page_index { margin: 0; }
}
</style>
<style lang="scss">
@media print {
  html, body { background-color: #fff; }

  .page_index { box-shadow: none; }
}
</style>
