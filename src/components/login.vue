<template>
<div class="sign">
  <div class="main">
    <div class="title">
      <a class="active" href="/">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user" :rules="rules">

        <el-form-item class="input-prepend restyle" prop="phone" >
          <div >
            <el-input type="text" placeholder="手机号" v-model="user.phone"/>
            <i class="iconfont icon-user" />
          </div>
        </el-form-item>

        <br>

        <el-form-item class="input-prepend" prop="password" >
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password" />
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://qy.free.idcfengye.com/api/ucenter/weixinLogin/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  import '@/assets/css/sign.css'
  import '@/assets/css/iconfont.css'
  import cookie from 'js-cookie'
  import loginApi from '@/api/login.js'
  import globalReferer from '@/utils/request'
  import bus from '@/utils/bus.js'

  export default {
    name:'login',
    layout:'sign',
    data () {
      return {
        globalReferer: globalReferer,
        user:{},
        loginInfo:{},
        // phone:'',
        prevLink:'',
        // password:'',
        // usn和prop对应
          rules: {
          // usn和prop对应
          phone: [
            // blur表示鼠标失焦时触发
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            //多个表单验证
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    created(){

    },
    mounted(){
      // 在组件创建时，将全局变量中的 Referer 赋值给组件的变量
      this.prevLink = document.referrer;
      bus.emit("prevLink",{prevLink:this.prevLink});
      console.log(this.prevLink);//记录跳转登录页面之前的页面
    },

    methods: {
      submitLogin(){
        // 1.调用接口获取token字符串
        // console.log(JSON.stringify(this.user))
        if(cookie.get("user_token")=='undefined')
          cookie.remove("user_token")
        loginApi.doLogin(this.user).then(response => {
          if(cookie.get("user_token")=='undefined')
            cookie.remove("user_token")
          //2.将token放入cookie中
          if(!cookie.get('user_token'))
          cookie.set('user_token',response.data.map.user_token)
          //3.判断cookie中是否有token，有就放到header中 在request.js中
          // loginApi.getUserInfo().then(response => {
          //   this.loginInfo = response.data.data
          //   console.log(this.loginInfo)
          //   //4.把信息放入cookie中
          //    cookie.set("user_info", JSON.stringify(this.loginInfo), {domain: 'localhost',});
          // })


          //以下为适应接口
          if(response.data.code==1){
            // window.location.href = this.prevLink;
            window.location.href = '/qdmdlx';
            console.log(window.location.href);  //http://localhost:8000/register


          }else{
            alert("登录失败！")
          }
        })
      },
    }
  }
</script>
<style>
   .el-form-item__error{
    z-index: 9999999;
  }
</style>
