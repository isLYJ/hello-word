//app.js
App({
  data: {
    
  },
  onLaunch: function () {
    // var o="";
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // if(res.code){
        //   console.log(res.code)
        //   console.log(res.code)
        //   console.log("1111",this.data.o)
        //   wx.request({
        //     url:'http://localhost:8080/Test/tst',
        //     data:{
        //       username:'admin',
        //       password:'admin'
        //     },
        //     method:'GET',
        //     header:{
        //       'content-type':'application/json'
        //     },
        //     success:function(res){
        //       console.log(res.data);
        //     },
        //     fail:function(res){
        //       console.log("--------fail--------");
        //     }
        //   })
        // }
        // }
        // })
        
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          
          wx.getUserInfo({
            
            success: res => {
              
              // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userInfo = res.userInfo
            //  console.log(res.userInfo)
            //  o=res.userInfo
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
              //     var app = getApp()
              //     var th = this;
              //     var appid1 = "wx77829bf1956b3b04"
              //     var secret1 = "aefc74b0fc8bd1f42600e1a603b04727"
              //     console.log('获取的code', code1, appid1, secret1)
              //     var ul = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid1 + '&secret=' + secret1 + '&js_code=' + code1 + '&grant_type=authorization_code'
              //     wx.request({
              //       url: ul,
              //       method: 'GET',
              //       success: function (e) {
              //         var openid = e.data.openid
              //         console.log('获取登录身份的唯一openid', openid)
              //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
              //     if(res.code){
              //       console.log(res.code)
              //       console.log(res.code)
              //       console.log("1111",o)
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
                        
              //           console.log("1111",o)
              //           //console.log(res)
              //           // th.setData({
              //           //   request:res.data
              //           // });
              //         },
              //         fail:function(res){
              //           console.log("--------fail--------");
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
  },
  globalData: {
    userInfo: null
  }
})