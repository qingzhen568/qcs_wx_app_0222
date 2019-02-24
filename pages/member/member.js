// pages/member/member.js
//引入数据
const qcsData = require('../../utils/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0,
    vipTopSaleData:[],//会员爆款
    saleOffData:[],  //会员3折起
    moreVipPriceData:[],//更多会员价

  },
  //获取当前滑块的index,滑动切换topNavBar
  bindchange: function (ev) {
    const that = this;
    that.setData({
      currentTabIndex: ev.detail.current
    })
  },
  //点击切换顶部导航，滑块index赋值
  checkCurrent: function (ev) {
    const that = this;
    if (that.data.currentTabIndex === ev.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTabIndex: ev.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    //获取 会员爆款 数据,将回调函数和url传递过去给封装好的函数
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          vipTopSaleData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=9966&device_id=7dbdb6d0-372a-11e9-80bf-e983bb4043ff');

    // saleOffData 会员3折起 数据
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          saleOffData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=9967&device_id=7dbdb6d0-372a-11e9-80bf-e983bb4043ff');

    // saleOffData 更多会员价 数据
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          moreVipPriceData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=9968&device_id=7dbdb6d0-372a-11e9-80bf-e983bb4043ff');



  },

 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

