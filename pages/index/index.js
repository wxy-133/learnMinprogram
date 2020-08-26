Page({
  data:{
    name:'code why',
    students:[{
      id:1,
      name:'jack'
    },
    {
      id:2,
      name:'luxi'
    },
    {
      id:3,
      name:'daxi'
    }
  ],
  counter:0
  },
  handleBtnclick(){
    this.setData({
      counter: this.data.counter+1
    })
  
  },
  handleBtnclick2(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})