import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecommendList } from '../store/actionCreators';
import { RecommendItem } from '../style';
class Recommend extends Component {
  componentDidMount() {
    this.props.getRecommendData();
  }

  render (){
    const { recommendList } = this.props;
    return (
      <div>
        {
          recommendList.map((item) => (
            <RecommendItem key={item} src={item} alt="" width="100%"/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getRecommendData() {  
      dispatch(getRecommendList());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Recommend);
