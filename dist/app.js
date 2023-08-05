"use strict";

// app.js
App({
  onLaunch: function onLaunch() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: function success(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var a = [1, 2, 3].map(function (n) {
          return Math.pow(n, 2);
        });
        console.log('a', a);
      }
    });
  },
  globalData: {
    userInfo: null
  }
});