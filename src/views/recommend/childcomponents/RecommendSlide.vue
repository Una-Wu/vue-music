<template>
    <Slide v-if="recommends.length">
      <div  v-for="(item,index) in recommends" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" >
        </a>
      </div>
    </Slide>
</template>

<script>
  import Slide from 'components/common/slide/Slide'

export default {
  name:'RecommendSlide',
  components: {
    Slide
  },
  props: {
     recommends: {
       type: Array,
       default() {
         return []
       }
     }
     
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>