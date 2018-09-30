//index.js
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad: function () {
    
  },

  gotoProfile: function () {
    let name    = 'My Restaurant'
    let address = 'BKK, TH'
    let email   = 'my@restaurant.com'
    wx.navigateTo({
      url: `/pages/profile/profile?name=${name}&address=${address}&email=${email}`
    })
  }
})
