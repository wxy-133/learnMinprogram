// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     imagePath:''
  },
  handleChooseAlbum(){
    console.log('---')
    // 系统api 让用户在相册中选择图片（或者拍照
    wx.chooseImage({
      success:(res)=>{
          // 取出路径
          const path = res.tempFilePaths[0]
          // 设置imagePath
          //响应式必须用setData
          // 
          this.setData({
            imagePath:path
          })
         
      }
    })

  },
  handImageLoad(){
    console.log('imageload')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})