<template>
  <div>
    <recommend-slide :recommends="recommends"></recommend-slide>
  </div>
</template>

<script>
  import RecommendSlide from './childcomponents/RecommendSlide.vue'

  import { getRecommend } from 'network/recommend.js'
  import { ERR_OK } from 'network/config'

export default {
  name:'Recommend',
  components: {
    RecommendSlide
  },
  data() {
     return {
       recommends: []
     }
  },
  created() {
    this._getRecommend()
  
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(this.recommends)
        }
      })
    }
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>