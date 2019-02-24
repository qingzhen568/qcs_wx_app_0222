const apiUrl = "https://h5.watsons.com.cn";

//获取数据的封装
const pageData = {
  //获取数据二次封装,
  getData(callback,url){
    wx.request({
      url:url,
      header:{
        'content-type':'application/json'
      },
      success(resp){
        callback('success',resp);
      }
    })
  },
  
  //轮播图数据
  // swiper(callback) {
  //   wx.request({
  //     url: 'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22new_header%22,%22sylunbo%22,%22new_Home_4navs_180105_1%22,%22%E4%B8%B4%E6%97%B6%22,%22pingou_B%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=2aa466a0-34ab-11e9-a135-0d6c496671bc',
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success(resp) {
  //       callback('success', resp);
  //     }
  //   })
  // },
}
//导出数据
module.exports = {
  pageData
}