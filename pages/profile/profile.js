// pages/profile/profile.js
Page({

  data: {

  },

  onLoad: function (options) {
    // check query from previous page
    console.log(options)
    // Save data to data State
    this.setData({ 
      name    : options.name,
      address : options.address,
      email   : options.email 
    })
    
  },

  goBack: function () {
    wx.navigateBack({
      delta: 1
    })
  }

})