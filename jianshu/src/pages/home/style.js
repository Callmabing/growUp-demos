import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  height: 300px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
  .bannerImg {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  padding-top: 25px;
`;

export const TopicWrapper = styled.div`
  display: flex;
  padding: 20px 0px 10px 0px;
  flex-wrap: wrap;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  display: flex;
  line-height: 32px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  padding-right: 5px;
  margin: 5px 15px 5px 0px;
  overflow: hidden;
  img {
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`;

export const TopicMore = styled.div`
  line-height: 32px;
  font-size: 14px;
  color: #9b9b9b;
  margin: 5px 15px 5px 0px;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0px;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
  }
`;
export const ListInfo = styled.div`
  float: right;
  width: 500px;
  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendBox = styled.div`
  width: 100%;
`; 
export const RecommendItem = styled.img`
  height: 50px;
  margin-bottom: 6px;
`;
export const DownLoad = styled.div`
  position: relative;
  padding: 10px 22px;
  margin-bottom: 30px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;
export const DownInfo = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 6px;
  p {
    font-size: 14px;
    color: #333;
  }
  b {
    margin-top: 4px;
    font-weight: nomarl;
    font-size: 12px;
    color: #999;
  }
`;
export const DownLoadImgBox = styled.div`
  display: ${props => (props.getDownLoadImg ? 'block' : 'none')}
  position: absolute;
  top: -181px;
  left: 51px;
  padding: 10px;
  width: 184px;
  height: 184px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
`;
export const DownLoadImg = styled.img`
  width: 164px;
  height: 164px;
`;
export const WriterTop = styled.div`
  width: 100%;
  font-size: 14px;
  color: #969696;
`;
export const WriterChange = styled.span`
  float: right;
  font-size: 14px;
  color: #969696;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  i {
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const WriterList = styled.ul`
  width: 100%;
  margin: 0px 0px 20px;
`;
export const WriterListItem = styled.li`
  width: 100%;
  margin-top: 15px;
  box-sizing: border-box;
`;
export const WriterImg = styled.img`
  float: left;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
export const WriterFocus = styled.a`
  display: inline-block;
  float: right;
  font-size: 13px;
  padding-top: 5px;
`;
export const WriterName = styled.p`
  padding-top: 5px;
  padding-left: 63px;
`;
export const WriterInfo = styled.p`
  margin-top: 10px;
  padding-left: 63px;
  font-size: 12px;
  color: #969696;
`;