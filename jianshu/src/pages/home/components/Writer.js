import React, { Component } from 'react';
import {
  RecommendBox,
  WriterTop,
  WriterChange,
  WriterList,
  WriterListItem,
  WriterImg,
  WriterFocus,
  WriterName,
  WriterInfo
} from '../style';
class Writer extends Component {
  render (){
    return (
      <div>
        <RecommendBox>
          <WriterTop>
            推荐作者
            <WriterChange>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe655;</i>
              换一批
            </WriterChange>
          </WriterTop>
          <WriterList>
            <WriterListItem>
              <WriterImg src="http://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
              <WriterFocus>+关注</WriterFocus>
              <WriterName>北美之美</WriterName>
              <WriterInfo>写了219.5k字 · 818喜欢</WriterInfo>
            </WriterListItem>
          </WriterList>
        </RecommendBox>
      </div>
    )
  }
}



export default Writer;
