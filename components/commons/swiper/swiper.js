// components/commons/swiper/swiper.js

//引入数据
const qcsData = require('../../../utils/data.js');

Component({
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },
  /**
   * 组件的属性列表
   */
  properties: {
    swiperArr:{
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
