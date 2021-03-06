const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
})
module.exports={
  devServer:{
      open:true,
      proxy:{
          '/3000': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              pathRewrite:{
                  "^/3000":""
              }
          },
          '/163': {
            target:'https://m.you.163.com',
            changeOrigin: true,
            pathRewrite:{
                "^/163":""
            }
        }
      }
      // proxy: 'http://localhost:4000'
  },

  lintOnSave:false,

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}
