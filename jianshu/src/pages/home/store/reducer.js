import * as type from './actionTypes'; 
import { fromJS } from 'immutable';

const defaultState = fromJS({  
  topicList: [{
    id: 1,
    title: '社会热点',
    img: '//upload-images.jianshu.io/upload_images/2069606-997e688996251853.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '手绘',
    img: '//upload-images.jianshu.io/upload_images/6167143-4d3c94b8ea9c4652.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '社会热点',
    img: '//upload-images.jianshu.io/upload_images/2069606-997e688996251853.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '手绘',
    img: '//upload-images.jianshu.io/upload_images/6167143-4d3c94b8ea9c4652.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 5,
    title: '社会热点',
    img: '//upload-images.jianshu.io/upload_images/2069606-997e688996251853.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 6,
    title: '手绘',
    img: '//upload-images.jianshu.io/upload_images/6167143-4d3c94b8ea9c4652.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  articleList: [{
    id: 1-1,
    title: '使用 React 与 Vue 创建同一款 App，差别究竟有多大？',
    desc: '众所周知，娱乐圈是有很多撞脸明星的！ 他们本来是八竿子打不着，没有任何关系的，但是由于长相极度相似，这也让不少网友有种哭笑不得的感觉，毕竟她们太...',
    img: '//upload-images.jianshu.io/upload_images/2321684-837c244ef687cb70?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 1-2,
    title: '使用 React 与 Vue 创建同一款 App，差别究竟有多大？',
    desc: '众所周知，娱乐圈是有很多撞脸明星的！ 他们本来是八竿子打不着，没有任何关系的，但是由于长相极度相似，这也让不少网友有种哭笑不得的感觉，毕竟她们太...',
    img: '//upload-images.jianshu.io/upload_images/2321684-837c244ef687cb70?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 1-3,
    title: '使用 React 与 Vue 创建同一款 App，差别究竟有多大？',
    desc: '众所周知，娱乐圈是有很多撞脸明星的！ 他们本来是八竿子打不着，没有任何关系的，但是由于长相极度相似，这也让不少网友有种哭笑不得的感觉，毕竟她们太...',
    img: '//upload-images.jianshu.io/upload_images/2321684-837c244ef687cb70?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 1-4,
    title: '使用 React 与 Vue 创建同一款 App，差别究竟有多大？',
    desc: '众所周知，娱乐圈是有很多撞脸明星的！ 他们本来是八竿子打不着，没有任何关系的，但是由于长相极度相似，这也让不少网友有种哭笑不得的感觉，毕竟她们太...',
    img: '//upload-images.jianshu.io/upload_images/2321684-837c244ef687cb70?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 1-5,
    title: '使用 React 与 Vue 创建同一款 App，差别究竟有多大？',
    desc: '众所周知，娱乐圈是有很多撞脸明星的！ 他们本来是八竿子打不着，没有任何关系的，但是由于长相极度相似，这也让不少网友有种哭笑不得的感觉，毕竟她们太...',
    img: '//upload-images.jianshu.io/upload_images/2321684-837c244ef687cb70?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList: [],
  showDownImg: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case type.GET_RECOMMEND:
      console.log(action.data);
      return state.set('recommendList', action.data);
    case type.MOUSE_ENTER:
      return state.set('showDownImg', true);
    case type.MOUSE_LEAVE:
      return state.set('showDownImg', false);
    default:
      return state;
  }
}