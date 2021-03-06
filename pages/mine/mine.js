// pages/shelf/shelf.js
//获取应用实例
const dev_request = require('../../utils/dev_request')
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: '../../image/dev.png',
        username: '未登录',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let userinfo = app.globalData.user_info;
        if (userinfo) {
            this.setData({
                avatar: dev_request.BASE_URL + userinfo.icon,
                username: userinfo.nickname,
            })
        }
    },

    bindTapUseravatar: function () {
        if (this.data.username === '未登录') {
            wx.navigateTo({
                url: "../login/login"
            })
        }
    },
    /**
     * 关于作者
     */
    aboutAuthor:function () {
        wx.navigateTo({
            url: "../about/about"
        })
    }
    ,
    /**
     * 退出登录
     */
    outLogin: function () {
        let that=this
        wx.showModal({
            title: '是否退出登录？',
            content: '退出后将清除用户本地用户信息以及阅读记录',
            success: res => {
                if (res.confirm) {
                    wx.clearStorage()
                    app.globalData.user_info = ''
                    that.setData({
                        avatar: '../../image/dev.png',
                        username: '未登录',
                    })
                }
            }
        })
    }
})