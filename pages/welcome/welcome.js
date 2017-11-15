// pages/welcome/welcome.js
Page({
  onTap: function (options) {
    wx.redirectTo({
      url: '../posts/post',
    })
  }
})