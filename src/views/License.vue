<template>
  <sections class="licenseetc">
    <template slot="section_title">자격사항</template>

    <div class="license_wrap">
      <ul class="liecense list_wrap">
        <li v-for="(item, index) in licenses" :key='index'>
          <ul class="list">
            <li>{{ item.title }}</li>
            <li>{{ item.organiztion }}</li>
            <li>{{ item.date }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </sections>
</template>

<script>
export default {
  name: 'license',
  data () {
    return {
      licenses: [
        {
          title: '웹디자인기능사',
          organiztion: '한국산업인력공단',
          date: '2011. 07. 05'
        },
        {
          title: '컴퓨터그래픽스운용기능사',
          organiztion: '한국산업인력공단',
          date: '2010. 11. 08'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
