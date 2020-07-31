//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
     // url: '../logs/logs'
    })
  },
  getPhoneNumber: function(e) {
    console.log(e.detail.errMsg)
    console.log("iv:",e.detail.iv)
    console.log("session_key:", wx.getStorageSync("session_key"))
    console.log("session_key:", e.detail.session_key)
    console.log("data:", e.detail.encryptedData)

      　　wx.checkSession({
        　　　　success: function (res) {
             
          　　　　　　console.log("处于登录态");
          
        　　　　},
        　　　　fail: function (res) {
          　　　　　　console.log("需要重新登录");
          　　　　　　wx.login({
                  success: res => {
                  console.log("session_key", res.code)
                  }
          })
        　　　　}
      　　})
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     //console.log("session", res.checkSession)
    //     if(res.code){
    //       console.log("session_key",res.code)
          
    //       // wx.request({
    //       //   url:'http://localhost:8080/Test/tst',
    //       //   data:{
    //       //     code:res.code,
    //       //     operFlag:'getOpenid'
    //       //   },
    //       //   method:'GET',
    //       //   header:{
    //       //     'content-type':'application/json'
    //       //   },
    //       //   success:function(res){
    //       //     console.log(res.data);
             
    //       //   },
    //       //   fail:function(res){
    //       //     console.log("--------fail--------");
    //       //   }
    //       // })
    //     }
    //     }
    //     })
  },
  onLoad: function () {
    // wx.request({
    //   url: 'http://localhost:8080/getWord',
    //   data:{
       
    //   },
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)//打印到控制台
    //     var message = res.data.message;
    //     if (message == null) {
    //       var toastText = '数据获取失败';
    //       wx.showToast({
    //         title: toastText,
    //         icon: '',
    //         duration: 2000
    //       });
    //     } else {
    //       that.setData({
    //         message: message
    //       })
    //     }
    //   }
    // })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取用户信息
onLoad: function() {
  // console.log('onLoad')
  var that = this
  //调用应用实例的方法获取全局数据
  // app.getUserInfo(function(userInfo) {
  //   //更新数据
  //   that.setData({
  //     userInfo: userInfo
  //   })
  // })
  wx.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        
        wx.getUserInfo({
          
          success: res => {
            
            // 可以将 res 发送给后台解码出 unionId
            //this.globalData.userInfo = res.userInfo
          //  console.log(res.userInfo)
           
          var o=res.userInfo
          //  console.log(res.code)
          //  console.log("1111",o)
           
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            // if (this.userInfoReadyCallback) {
            //   this.userInfoReadyCallback(res)
            // }
            
            // wx.login({
            //   // success: res => {
                
            //     success: function (res) {
            //     var code1 = res.code
            //    // var app = getApp()
            //    // var th = this;
            //   // var that=this;
            //     var appid1 = "wx77829bf1956b3b04"
            //     var secret1 = "aefc74b0fc8bd1f42600e1a603b04727"
            //    // console.log('获取的code', code1, appid1, secret1)
            //     var ul = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid1 + '&secret=' + secret1 + '&js_code=' + code1 + '&grant_type=authorization_code'
            //     wx.request({
            //       url: ul,
            //       method: 'GET',
            //       success: function (e) {
            //         var openid = e.data.openid
            //         //console.log('获取登录身份的唯一openid', openid)
            //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
            //     if(res.code){
            //       // console.log(res.code)
            //       // console.log(res.code)
            //       // console.log("1111",o)
            //       wx.request({
            //         url:'http://localhost:8010/Ch10/buttonTest2.do',
            //         data:{
            //           // code:res.code,
            //           // operFlag:'getOpenid',
            //           openid:openid,
            //           userInfo:o
            //         },
            //         method:'GET',
            //         header:{
            //           'content-type':'application/json'
            //         },
            //         success:function(res){
            //           console.log(res)
            //           console.log(res.data.errMsg)
                     
            //           that.setData({                  
            //             banner: res.data
            //           })              
                     
            //         },
            //         fail:function(res){
            //           console.log("--------fail---1-----");
            //         }
            //       })
            //     }
            //     }
            //   })
            // }
            //      })
          }
        })
      }
    }
  
  })
}
})

