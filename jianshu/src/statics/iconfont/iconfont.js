import { injectGlobal } from 'styled-components'

injectGlobal`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1545317286260'); /* IE9*/
  src: url('./iconfont.eot?t=1545317286260#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1545317286260') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1545317286260#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`