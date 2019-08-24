<template>
  <div class="main">
    <div class="page_index">
      <profile></profile>
      <about></about>
      <skills></skills>
      <career></career>
    </div>
  </div>
</template>

<script>
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Career from './Career'

export default {
  name: 'main',
  components: {
    Profile,
    About,
    Skills,
    Career
  }
}
</script>

<style lang="scss" scoped>
.page_index {
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  background-color: #fff;
  box-shadow: 1px 2px 3px rgba($dark, .2);
}
</style>
<style lang="scss">
@media print {
  html, body { background-color: #fff; }

  .page_index { box-shadow: none; }
}
</style>
