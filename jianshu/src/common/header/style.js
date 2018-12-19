import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: ${props => (props.top ? 'fixed' : 'fixed')};
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    background: white;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left
    }
    &.right {
        float: right
        color: #969696
    }
    &.active{
        color: red
    }
`
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        height: 30px;
        width: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background: #777;
            color: white;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out
    }
    &.slide-enter-active {
        width: 240px
    }
    &.slide-exit {
        transition: all .2s ease-out
    }
    &.slide-exit-active {
        width: 160px
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 20px;
    width: 260px;
    background: #fff;
    padding: 20px 20px 10px;
    box-shadow: 0 0 8px rgba(0,0,0,.2)
`;
export const SearchInfoTitle = styled.div`
    margin-bottom: 15px;
    line-height: 20px;
    color: #969696;
    font-size: 14px;    
`;
export const UlBox = styled.ul`
    display: block;
    padding-left: 0;
`;
export const LiItem = styled.li`
    margin-right: 10px;
    line-height: 28px;
    display: inline-block;
`;
export const LiItemA = styled.a`
    cursor: pointer;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    &:hover {
        color: #333;
        border: 1px solid #787878;
    }
`;
export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    &:hover {
        cursor: pointer
    }
    .spin {
        display: block;
        margin-right: 5px;
        font-size: 12px;
        transition: all .2s ease-in;
        transform-origin: center center;
        float: left;
    }
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button =  styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    padding: 0 20px;
    text-align: center;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writebtn{
        color: #fff;
        background: #ec6149;
    }
`
