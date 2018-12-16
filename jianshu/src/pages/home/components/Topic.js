import React, { Component } from 'react';
import { TopicWrapper, TopicItem, TopicMore } from '../style';
import { connect } from 'react-redux';
class Topic extends Component {
  render (){
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map(val => (
            <TopicItem key={val.get('id')}>
              <img src={val.get('img')} alt=""/>
              {val.get('title')}
            </TopicItem>
          ))
        }
        <TopicMore>
          更多热门专题 >>
        </TopicMore>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.get('home').get('topicList')
})

// const mapDispathToProps = (dispatch) => {
//   console.log(1);
// }

export default connect(mapStateToProps, null)(Topic);
