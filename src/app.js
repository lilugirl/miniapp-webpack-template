// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let a=[1,2,3].map(n=>n ** 2)
        console.log('a',a)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
