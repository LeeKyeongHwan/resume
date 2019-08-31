<template>
  <sections class="etc">
    <template slot="section_title">활동 및 기타</template>

    <div class="etc_wrap">
      <ul class="etc list_wrap">
        <li v-for="(item, index) in etcs" :key='index'>
          <ul class="list">
            <li>{{ item.title }}</li>
            <li>{{ item.date }}</li>
            <li>{{ item.className }}</li>
            <li>{{ item.contents }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </sections>
</template>

<script>
export default {
  name: 'etc',
  data () {
    return {
      etcs: [
        {
          title: '한국직업전문학교',
          date: '2017. 02 ~ 2017. 07',
          className: '웹표준 퍼블리싱 실무자 양성 과정',
          contents: 'HTML, CSS, Javascript, jQuery'
        },
        {
          title: '청년취업아카데미',
          date: '2013. 07 ~ 2013. 12',
          className: '웹 개발자 전문가 과정',
          contents: 'JAVA, JSP, JavaScript, jQuery, Oracle'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
