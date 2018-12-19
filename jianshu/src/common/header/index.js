import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    UlBox,
    LiItem,
    LiItemA
} from './style'

// 向该函数传参数


class Header extends Component {
    getListArea = (show) => {
        const { list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                newList[i] && pageList.push(
                    <LiItem key={newList[i]}><LiItemA>{newList[i]}</LiItemA></LiItem>
                )
            }
        }
        return (show || mouseIn) && (
                <SearchInfo
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className={'iconfont spin'}>&#xe655;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <UlBox>
                        {
                            pageList
                        }
                    </UlBox>
                </SearchInfo>
        )
    }
    render() {
        const { top } = this.props;
        return (
            <HeaderWrapper top={top}>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe653;</i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writebtn'>
                        <i className="iconfont">&#xe60b;</i>写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // .get('header').get('focused')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFoucs());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(dom) {
            let originAngle = dom.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            dom.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            dispatch(actionCreators.changePage(dom));
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);