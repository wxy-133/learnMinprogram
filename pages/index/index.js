//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  handleBtnClick(){
    console.log("cilck")
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleTouchStart(){
console.log("handleTouchStart")
  },
  handleTouchMove(){
console.log("handleTouchMove")
  },
  handleTouchEnd(){
console.log("handleTouchEnd")
  },
  handleTab(){
console.log("handleTab")
  },
  handleLongPress(){
console.log("handleLongPress")
  },
  handleEventClick(event){
    console.log("handleEventClick",event)
  },
  handleTouchEnd(event){
    console.log("+++++",event)
  },
  handleInner(event){
    console.log(event)
  },
  handleOuter(event){
    console.log(event)
  }
})
