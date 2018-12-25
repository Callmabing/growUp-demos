import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecommendList, getDownLoadImg, hideDownLoadImg } from '../store/actionCreators';
import { RecommendItem, DownLoad, DownLoadImgBox, DownLoadImg, DownInfo } from '../style';
class Recommend extends Component {
  componentDidMount() {
    this.props.getRecommendData();
  }

  render (){
    const {
      recommendList,
      showDownImg,
      getDownLoadImg,
      hideDownLoadImg
    } = this.props;
    return (
      <div>
        {
          recommendList.map((item) => (
            <RecommendItem key={item} src={item} alt="" width="100%"/>
          ))
        }
        <DownLoad
          onMouseEnter={getDownLoadImg}
          onMouseLeave={hideDownLoadImg}
        >
          <DownLoadImgBox getDownLoadImg={showDownImg}>
            <DownLoadImg src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
          </DownLoadImgBox>
          <img style={{verticalAlign: 'middle'}} width="60px" height="60px" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="img"/>
          <DownInfo>
            <p>下载简书手机App<i className="iconfont">&#xe600;</i></p>
            <b>随时随地发现和创作内容</b>
          </DownInfo>
        </DownLoad>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList']),
    showDownImg: state.getIn(['home', 'showDownImg'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getRecommendData() {  
      dispatch(getRecommendList());
    },
    getDownLoadImg() {
      dispatch(getDownLoadImg());
    },
    hideDownLoadImg() {
      dispatch(hideDownLoadImg());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Recommend);
