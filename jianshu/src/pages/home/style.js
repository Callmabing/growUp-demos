import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  height: 300px;
  background: yellow;
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
  width: 240px;
  background: green;
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