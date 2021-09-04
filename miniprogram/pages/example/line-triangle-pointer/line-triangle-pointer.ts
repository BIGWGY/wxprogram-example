// {{component}}.ts
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    headPos: 0,
    colCount: 5,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectHead(e: any) {
      console.log(e)
      this.setData({
        headPos: e.currentTarget.dataset.headPos
      })
    }
  }
})
