### webpack

webpack 可以做的事情

```tex
代码转换、文件优化、代码分割、模块合并、自动刷新、代码效验、自动发布
```

- 安装本地的wenpack
- yarn init -y
- yarn add webpack  webpack-cli -D  // -D 代表开发依赖  上线不需要

```py
npm install module_name -S    即    npm install module_name --save    写入dependenciesnpm install module_name -D    即    npm install module_name --save-dev 写入devDependencies

你开发一个前端项目，在项目中你需要使用gulp构建你的开发和本地运行环境,这时你就要放到devDependencies里。gulp是你用来压缩代码，打包等需要的工具，程序实际运行的时候并不需要，所以放到dev里就ok了。你写程序要用element-ui,生产环境运行项目时肯定要用到element-ui,这时element-ui就应该安装到dependencies中去。

作者：itxing
链接：https://www.jianshu.com/p/2e7f3b69e51e
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```



webpack可以进行0配置

- 打包工具 -> 输出后的结果

- 打包（支持JS的模块化）

- 1. 文件目录：![1550672356609](D:\codeOfUsers\笔记\imgs\%5CUsers%5Ccallm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1550672356609.png)


  ```js
  打包命令：
  npx webpack 
  此时webpack就会按照默认配置去打包相应的文件
  ```

***0配置很弱 *** 手动配置webpack

- 默认配置文件的名字 webpack.config.js

  ```js
  // webpack 是node写出来的 所以采用node的写法
  let path = require('path');
  module.exports = {
      mode: '', //模式 默认两种 production development
      entry: './src/index.js', //入口
      output: {
          filename: 'bundle.js', // 打包后的文件名
          path: path.resolve(__dirname,'dist'), // 路径必须是一个绝对路径,所以此处采用了path模块的resolve()方法 将当前的相对路径解析为绝对路径
          //__dirname代表以当前目录下创建dist目录
      }
  }
  ```

- webpack 修改配置文件名称 

  ```js
  webpack --config webpack.config.my.js
  
  传参式写法
  webpack build --(这里加上两个横杠) --config webpack.config.my.js
  
  当运行命令过长时 就可以在package.json里配置一些脚本
  {
      ...
      "scripts": {
         "build": "webpack --config webpack.config.my.js"
      },
      ...
  }
  
  ```

本地安装运行环境

```js
yarn add webpack-dev-server -D

然后运行

npx webpack-dev-server
这样会在内存中生成一个打包 产生一个可以访问的路径
```

![1548686148018](D:\codeOfUsers\笔记\imgs\#向事件处理程序传递参数.md)

此时打开的是一个仓库路径，并不是直接打开想要的地址，应当去webpack.config.js中进行相关配置

```js
let path = require('path')
console.log(path.resolve('dist'))
module.exports = {
  devServer: { //开发服务器的配置
    port: 3000, //更改端口号
    progress: true, //加个进度条
    contentBase: './build' // 以./build作为当前服务的文件夹
  },
  mode:'development', // 模式 默认两种 production development
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), //路径必须是个绝对路径
  }
}
```

与此同时，希望再打包项目时就自动产生相应的`*.html`文件，并引入对应的`js`. 此时可以引入

`html-webpack-plugin`这个模块：

```js
yarn add html-webpack-plugin -D
```



```js
let HtmlWebpackPlugin = require('html-webpack-plugin')
这个模块 可以在npm run build的时候自动生成响应的html文件
plugins: [  // 数组 放着所有的webpack插件
    new HtmlWebpackPlugin({ // 每个模块都是类 所以需要new出来
        template: './src/index.html',
        filaname: 'index.html',
        minify: {
            removeAttributeQuotes: true, //删除双引号
            collapseWhitespace: true, //压缩空行
        },
        hash: true // 添加hash戳
    })
]
```

添加处理样式的loader yarn add less less-loader css-loader style-loader  -D

```js
, // 紧接plugins
  module: { //模块
    //loader
    rules: [ // 规则 css-loader 解析@import这种语法
      // style-loader 把css插入到head的标签
      // loader的特点 希望单一
      // 多个loader使用数组形式 从右向左执行(先走css-loader, 再走style-loader)  从下向上执行
      // loader还可以写成对象方式 [{loader: '', options: {}}] 这样就可以多传一个参数
      {
        // 可以处理less文件
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
          options: {
            insertAt: 'top' // 这样一来 新生成的style就会插到style顶部
          }
        },
         'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          'css-loader', // @import 解析路径
          'less-loader' // 把less => css
        ]
      }
    ]
  }
```

优化css

```js
// webpack 是Node写出来的 node的写法
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

console.log(path.resolve('dist'))
module.exports = {
  optimization: { // 优化项
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  mode:'production', // 模式 默认两种 production development
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), //路径必须是个绝对路径
  },
  plugins: [ // 数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // hash: true // 添加hash戳
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: { //模块
    //loader
    rules: [ // 规则 css-loader 解析@import这种语法
      // style-loader 把css插入到head的标签
      // loader的特点 希望单一
      // 多个loader使用数组形式 从右向左执行(先走css-loader, 再走style-loader)  从下向上执行
      // loader还可以写成对象方式 [{loader: '', options: {}}] 这样就可以多传一个参数
      {
        // 可以处理less文件
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
         'css-loader', //css解析完后 通过MiniCss...创建link标签 然后把style丢进去
         'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // @import 解析路径
          'postcss-loader', // 给css属性加前缀
          'less-loader' // 把less => css
        ]
      }
    ]
  }
}
```

新增babel

yarn add babel-loader @babel/core @babel/preset-env -D

根据情况可能还需要加@babel/polyfill  @babel/runtime @babel/plugin-proposal-class-properties  

 @babel/plugin-proposal-decorators @babel/plugin-transform-runtime

```.js
// webpack 是Node写出来的 node的写法
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin = require("uglifyjs-webpack-plugin");

console.log(path.resolve('dist'))

module.exports = {
  optimization: { // 优化项
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // es6转es5时 进行源码映射
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  mode:'development', // 模式 默认两种 production development
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), //路径必须是个绝对路径
  },
  plugins: [ // 数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // hash: true // 添加hash戳
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: { //模块
    //loader
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //   },
      //   enforce: 'pre' // previous最先 post最后
      // },
      {
        test: /\.js$/, // normal 普通的loader 中间
        use: [
          {
            loader: 'babel-loader',
            options: { // 用babel-loader 需要把es6 - > es5
              presets: [
                '@babel/preset-env'
              ],
              plugins: [
                ["@babel/plugin-transform-runtime"], // 优化代码 将函数公共部分进行抽离
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose" : true }]
              ]
            }
          } 
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/  // 需要排除掉/node_modules/下面的js
      },
      {
        // 可以处理less文件
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
         'css-loader', //css解析完后 通过MiniCss...创建link标签 然后把style丢进去
         'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // @import 解析路径
          'postcss-loader', // 给css属性加前缀
          'less-loader' // 把less => css
        ]
      }
    ]
  }
}
```



暴露全局的loader `expose-loader` 内联的loader  

pre 前面执行的loader normal 普通的loader  postloader 后置的loader

当你想暴露一个全局变量时

```js
module: {
    rules: [
        {
            test: require.resolve('jquery'),
            use: 'expose-loader?$'
        }
    ]
}
```



