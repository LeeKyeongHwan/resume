<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  directives: {},
  filters: {},
  extends: {},
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';

.fade-enter-active,
.fade-leave-active { transition: opacity .1s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>
