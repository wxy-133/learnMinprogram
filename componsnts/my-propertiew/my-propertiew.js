// componsnts/my-propertiew/my-propertiew.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: {
      type: String,
      value: '我是默认值',
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  }, externalClasses: [
 'titleclass'
  ]
})
