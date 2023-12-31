"use strict";

// logs.js
var util = require('../../utils/util.js');
Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        };
      })
    });
  }
});