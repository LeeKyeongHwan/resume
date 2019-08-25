<template>
  <sections class="career_summary">
    <template slot="section_title">경력요약</template>

    <div class="summary_wrap">
      <ul class="list summary" v-for="(item, index) in career" :key='index'>
        <li>{{ item.name }}</li>
        <li>{{ item.date }}</li>
        <li>{{ item.work }}</li>
        <li>{{ item.duty }}</li>
      </ul>
    </div>
  </sections>
</template>

<script>
export default {
  name: 'career-summary',
  data () {
    return {
      career: [
        {
          name: '피플라이프',
          date: '2018. 02 ~ 재직',
          duty: 'IT개발팀, 사원',
          work: 'Front-end 개발 및 운영'
        },
        {
          name: '생클',
          date: '2016. 11 ~ 2017. 01',
          duty: '개발팀, 사원',
          work: 'Back-end 개발 및 운영'
        },
        {
          name: '사이버라인',
          date: '2014. 02 ~ 2016. 03',
          duty: '솔루션팀, 사원',
          work: 'Back-end 개발 및 운영'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
