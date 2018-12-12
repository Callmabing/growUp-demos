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
  height: 50px;
  background: green;
`;