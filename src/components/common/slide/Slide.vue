<template>
  <div class="slide-wrapper" ref="slideWrapper">
    <div class="slide-content" ref="slideContent">
      <slot></slot>
    </div>
  
    <div class="dots-wrapper">
      <span class="dot"
            v-for="(item,index) in dots"
            :key="index"
            :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'
  BScroll.use(Slide)

  import { addClass } from 'common/js/dom'

export default {
  name:'Slide',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSlideWidth()
      this._initDots()
      this._initSlide()
      
      if (this.autoplay) {
        this.slide.startPlay()
      }
    }, 20)
  },
  methods: {
    _setSlideWidth() {
      this.children = this.$refs.slideContent.children
      // this.length = this.chlidren.length

      let width = 0
      let slideWidth = this.$refs.slideWrapper.clientWidth
      this.children.forEach(item => {
        addClass(item, 'slide-page')
        item.style.width = slideWidth + 'px'
        width += slideWidth
      })

      if (this.loop) {
        width += 2*slideWidth
      }
      this.$refs.slideContent.style.width = width + 'px'
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _initSlide() {
      this.slide = new BScroll('.slide-wrapper', {    
        scrollX: true,
        scrollY: false,
        slide: {
          threshold: 0.1,
          loop: this.loop,
          autoplay: this.autoplay,
          interval: this.interval
        },
        momentum: false,
        bounce: false,
        stopPropagation: true,
        click: true
      })

      this.slide.on('scrollEnd', () => {
        let pageIndex = this.slide.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"

  .slide-wrapper
    position: relative
    min-height: 1px
    .slide-content
      position: relative
      overflow: hidden
      white-space: nowrap
      .slide-page
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots-wrapper
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>