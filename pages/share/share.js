var config = require('../../config');
var util = require('../../utils/util.js');
Page({
  data:{
    userInfo: {},
    packet_info: {},
    id:'',
  },
  onLoad:function(options){
    //拿到红包的id 发红的头像 和口令
    var id = options.id;
    this.data.id=id;
    var command = options.command ||"大吉大利晚上吃鸡好的哈哈浩浩荡荡好的";
    var avatar = options.avatar || "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJXwkccAK33PyXUzHiaz0iaBZIThu8mFvgTQqVfkyKrYWWZojHVv6dsYET6gNqOdEFFl0vIicbDUuKiaQ/0";
    console.log("id=" + id + "  command=" + command + " avatar=" + avatar);
    this.setData({
      command: command,
      avatar: avatar
    })

    //添加用户信息
    this.setData({
      userInfo: wx.getStorageSync("userinfo")
    });
  },
  goBack:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target);
    }
    return {
      title: '恭喜发财，我们为您准备了礼物！',
      path: '/pages/redpacket/redpacket?id=' + this.data.id,
      success: function (res) {
        console.log("转发成功");
        util.showSuccess("转发成功");
      },
      fail: function (res) {
        console.log("转发失败")
      }
    }
  }
})