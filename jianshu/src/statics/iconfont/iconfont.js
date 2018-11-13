import { injectGlobal } from 'styled-components'

injectGlobal `
    @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1542030602153'); /* IE9*/
      src: url('./iconfont.eot?t=1542030602153#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('./iconfont.ttf?t=1542030602153') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1542030602153#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`