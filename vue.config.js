const axios = require('axios')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    before(app) {
      app.get('/api/getTopBanner', (req, res) => {
        const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        
        axios.get(url, {
          headers: {
            referer: 'https://u.y.qq.com/',
            host: 'u.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          response = response.data
          if (response.code === 0) {
            const slider = []
            const content = response.focus.data && response.focus.data.shelf.v_niche[0].v_card
            if (content) {
              for (let i = 0; i < content.length; i++) {
                const item = content[i]
                const sliderItem = {}
                sliderItem.id = item.miscellany.CfgID
                sliderItem.linkUrl = item.id
                sliderItem.picUrl = item.cover
                slider.push(sliderItem)
              }
            }
            res.json({
              code: 0,
              data: {
                slider
              }
            })            
          } else {
            res.json(response)
          }
        }).catch((e) => {
          console.log(e)
        })
      })
    }
  }
}