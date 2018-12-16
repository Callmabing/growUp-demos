import React, { Component } from 'react';
import { connect } from 'react-redux';   
import { ListItem, ListInfo } from '../style';
class List extends Component {
  render (){
    return (
      <>
        <ListItem>
          <img className="pic" src="https://upload-images.jianshu.io/upload_images/13238265-45f924c3546b716e.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
          <ListInfo>
            <h3 className="title">“撞脸姐妹”已成过去式，孙怡发掘圆脸优势，美出了超高辨识度！</h3>
            <p className="desc">众所周知，娱乐圈是有很多撞脸明星的！ 他们本来是八竿子打不着，没有任何关系的，但是由于长相极度相似，这也让不少网友有种哭笑不得的感觉，毕竟她们太...</p>
          </ListInfo>
        </ListItem>
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect()(List);
