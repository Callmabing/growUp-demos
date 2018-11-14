#### 丁丁神途项目总结  ddst.com

##### 采用框架 Vue

-- 文件存放

- `php` 项目根目录会有一个 `index.php` 
- `views`中的所有`php`页面里的资源，图片，CSS，JS等的链入，路径皆为 index.php 到该资源的路径( 资源指 图片，css，js )



-- 样式设置

- 注意图片命名， 注意页面内容的工整

- 注意排版的顺序，例如两个元素之间的间距可以用两个元素的累加，而不是一边

- 凡是和项目主体名称有关的地方应该加上链接( 跳转首页 `<a href="/">首页</a>    在给a添加样式的时候应当注意样式display: block` )

- `vue`项目中，应注意`v-if`与`v-show`的区别

- 注意在使用图片的时候，记得设置图片的大小，切记不要根据图片自身的大小进行设置

- 少用行内式

- 布局时应考虑“模块化” ，将不同的样式分给相应的模块，这样在内容更改或者复用的时候才能保证排版，例如头部是一块区域`<div></div>`这个头部下面的元素距离头部应该保持`30px`的距离，那么我们就应该给这个头部增加`margin-bottom: 30px`而不是给下面的元素增加`margin-top`

- vue动画效果

  ```html
  <style>
      .show-enter-active,.show-leave-active{
          transition: all 0.4s ease;
          padding-left: 0px;
      }
      .show-enter, .show-leave-active{
          padding-left: 100px;
      }
  </style>
  
  <transition name="show">
  	
  </transition>	
  ```


-- 移动端字体样式

- ``` js
  以360px 屏幕为主
  function isDesktop() {
      var innerWidth = window.innerWidth;
      var deviceWidth = Math.min(1024, innerWidth);
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  }
  ```

- rem布局

- 移动端点击按钮视频播放 

  ``` js
  <ul class="video-area">
          <template v-for="(game,index) in gameListMb">
              <li v-if="game.up" :key="index">
                  <div class="video-box">
                      <div class="video-img" v-show="nowIndex != index">
                          <img class="video-cover"  :src="game.videoImg" >
                          <img class="play-btn" src="/assets/images/wap/play-btn.png" @click="videoPlay(index)">
                      </div>
                      <video class="video" :src="game.video" autoplay="autoplay" controls="controls" height="100%" v-if="nowIndex == index"></video>
                  </div>
              </li>
          </template>
      </ul>
  这种方式需要给每个视频加上封面，见 <img class="video-cover"  :src="game.videoImg" > 点击封面的时候就转换video的地址 并自动播放就行
  ```
