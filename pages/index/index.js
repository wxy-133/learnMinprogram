//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    titles: ["如", '方法', '果']
  },
  handleBtnClick() {
    console.log("cilck")
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleTab() {
    console.log("handleTab")
  },
  handleLongPress() {
    console.log("handleLongPress")
  },
  handleEventClick(event) {
    console.log("handleEventClick", event)
  },
  handleTouchEnd(event) {
    console.log("+++++", event)
  },
  handleInner(event) {
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItemClick(event) {

    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },

  // 事件冒泡和事件捕获
  handleView1() {
    console.log("handleView1")
  },
  handleCaptureView1() {
    console.log("handleCaptureView1")
  },
  handleView2() {
    console.log("handleView2")
  }, handleCaptureView2() {
    console.log("handleCaptureView2")
  },
  handleView3() {
    console.log("handleView3")
  },
  handleCaptureView3() {
    console.log("handleCaptureView3")
  }
})
