//index.js
//获取应用实例
const app = getApp()//可以获取调用APP产生的示例对象
console.log(app.globalData.age)
const name = app.globalData.name;
const age = app.globalData.age
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name: 'code why',
    students: [{
      id: 1,
      name: 'jack'
    },
    {
      id: 2,
      name: 'luxi'
    },
    {
      id: 3,
      name: 'daxi'
    }
    ],
    counter: 0,
    list:[]
  },

  handleBtnclick() {
    this.setData({
      counter: this.data.counter + 1
    })

  },
  handleBtnclick2() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetInfo(event) {
    console.log(event)

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      //
      url: 'https://www.runoob.com/try/ajax/json_demo.json',
      success:(res)=>{
         console.log(res)
         const data =res.data.sites
         this.setData({
           list:data
         })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
