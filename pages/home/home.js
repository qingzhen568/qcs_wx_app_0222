// pages/home/home.js
//引入屈臣氏数据
const qcsData = require('../../utils/data.js');
//引入时间戳转正常时间
const formatTime = require('../../utils/formatTime.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperArr:[],
    fourNavGif:[],
    luckyMoneyGif:[],
    secKillData:[],//今日秒杀数据
    countDownData:[], //倒计时
    topSaleData:[], //热卖
    skinCareData:[],//护肤
    maskData:[],//面膜
    personalLifeData:[],//个护生活
    makeUpData:[],//美妆
    fashionLifeData: [],//居家生活
    recommendData:[], //大牌精选 好货推荐
    floorstatus: false, //回到顶部 底部状态初始值
    topNum: 0, //设置回到顶部初始值
   
  },
  // 获取滚动条当前位置
  scrollToTop: function (e) {
    if (e.detail.scrollTop > 300) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    this.setData({
      topNum: this.data.topNum = 0
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //保存this指向
    let that = this;
    //获取轮播图数据方式一:太过繁杂
    // qcsData.pageData.swiper((state, resp) => {
    //   if (state == 'success') {
    //     that.setData({
    //       swiperArr: resp.data.data.sylunbo.datas
    //     })
    //   }
    // });
    //获取轮播图数据,将回调函数和url传递过去给封装好的函数
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          swiperArr: resp.data.data.sylunbo.datas
        })
      }
    },'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22new_header%22,%22sylunbo%22,%22new_Home_4navs_180105_1%22,%22%E4%B8%B4%E6%97%B6%22,%22pingou_B%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=2aa466a0-34ab-11e9-a135-0d6c496671bc');
   
    //获取头部4格导航数据
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          fourNavGif: resp.data.data.new_Home_4navs_180105_1.datas
        })
      }
    }, 'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=["new_header","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=b2beebb0-0e2b-11e9-9cde-fb9ddcb01ef6');

   
    //获取今日秒杀数据
    setInterval(()=>{
      qcsData.pageData.getData((state, resp) => {
        if (state == 'success') {
          //获取倒计时时间
          let countDown_timeStamp = resp.data.data.specials_info_d_t_o.end_time - resp.data.data.now
          // console.log(formatTime.formatTime(countDown_timeStamp));
          that.setData({
            secKillData: resp.data.data.specials_item_v_o_s,
            countDownData: formatTime.formatTime(countDown_timeStamp)
          })
        }
      }, 'https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=dc062990-3002-11e9-abbb-b17c1ba0ea79')
    },1000);
    

    //获取商品组列表数据 #1st.TopSale
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          topSaleData: resp.data.data.item_list
        })
      }
    },'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=13996&device_id=0d2465c0-33e4-11e9-ac25-bb3c1c6b4529');

     //获取商品组列表数据 #2nd.护肤
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          skinCareData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=13960&device_id=40822b00-343e-11e9-8923-31e940924ab7');

    //获取商品组列表数据 #3rd.面膜
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          maskData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=9&group_id=13998&device_id=40822b00-343e-11e9-8923-31e940924ab7');


    //获取商品组列表数据 #4th.personalLifeData 个护生活
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          personalLifeData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=13959&device_id=40822b00-343e-11e9-8923-31e940924ab7');

    //获取商品组列表数据 #5th.personalLifeData 美妆
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          makeUpData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=13753&device_id=40822b00-343e-11e9-8923-31e940924ab7');


    //获取商品组列表数据 #6th.fashionLifeData 居家生活
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          fashionLifeData: resp.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=13756&device_id=40822b00-343e-11e9-8923-31e940924ab7');

    //获取 大牌精选|好货推荐 数据 recommendData 
    qcsData.pageData.getData((state, resp) => {
      if (state == 'success') {
        that.setData({
          recommendData: resp.data.data.Home_TopicCase_170505_7.datas
        })
      }
    }, 'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=["new_header","new_Home_topBig_forcase_180105_1","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=aaafc600-0e8b-11e9-8d8c-f108b9b519de');


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