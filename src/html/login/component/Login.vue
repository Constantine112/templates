<style>
.change input {
    border: 0;
    border-bottom: 1px solid #9f9a96;

    background-color: rgba(0,0,0,0);
}
.change input:hover {
    outline: none;
}
.change input::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 500;

    color: #9f9a96 !important;
}
.change input:-moz-placeholder {
    font-size: 14px;
    font-weight: 500;

    color: #9f9a96 !important;
}
.change input::-moz-placeholder {
    font-size: 14px;
    font-weight: 500;

    color: #9f9a96 !important;
}
.change input:-ms-input-placeholder {
    font-size: 14px;
    font-weight: 500;

    color: #9f9a96 !important;
}
.input-cont {
    display: flex;

    width: 330px;

    align-items: center;
    justify-content: center;
}
.input-cont img {
    width: 28px;
    height: 30px;
}
.head-login-title {
    font-size: 24px;

    color: #1aad19;
}
/* input:focus {
    border-color: #333;

    box-shadow: none;
} */

</style>
<template>
  <div class="divlogin">
    <div class="log-contain">
    	<div id="login">
			<div class="head-login-title">
				登录账号
			</div>
				<div class="input-cont">
        			<img src="../../../assets/images/account.png" />
					<Input type="text" id="userAccount" name="userAccount" required v-model="userAccount" style="width: 70%; margin: 10px;background-color: rgba(0,0,0,0);input:focus:'border-color: #333';" placeholder="请输入你的用户名" class='change'></Input>
        		</div>
				<div class="input-cont">
					<img src="../../../assets/images/password.png" />
					<Input type="password" id="userPassword" name="userPassword" required v-model="userPassword" style="width: 70%; margin: 10px;"  @on-enter="loginQuest" placeholder="请输入你的密码" class='change'></Input>
    			</div>
				<!-- <router-link to="/register" class="register-contain"> -->
    			<!-- <div class="register12">注册新用户</div> -->
    		<!-- </router-link> -->
        	<button type="submit" v-on:click="loginQuest">登录</button>
    	</div>
    </div>
  </div>
</template>
<script>

import {mapState, mapActions} from 'vuex';

	export default {
		name: 'login',
		
		data(){
			return {
				userAccount:'',
				userPassword:'',
				loginSuccess: false,
			}
		},
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('user' ,{
				// 这里用到的是 es6 的函数写法，讲数据存入其中
        'visual': state => {
          return state
				},
			}),
      // 'visual': this.$store
		},
		methods:{
			...mapActions('user', [
        'login',
			]),
			
				
			/**
			 * 请求函数点击登录时向后台进行请求
			 * 
			 * 
			 */
			loginQuest () {
				let that = this;
				if(this.userPassword.length===0||this.userAccount.length===0){
					this.$Notice.error({
						title: '请将账号密码填写完整',
						// desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
					});
					return false;
				}

				this.login({
					account:this.userAccount,
					password:this.userPassword,
					// remember:true   //是否记住账户，boolean数据
				}).then((res) => {
					
					if (res.data.state === 200) {
						location.href = '../../../wxg/html/index.html'
					} else {
						that.$Notice.error({
							title: '账号或密码出现错误，请检查'
						})
						// this.$Notice.error({
						// 	title: 'Notification title',
						// 	desc: 'Here is the notification description. Here is the notification description. '
						// })
					}
				}).catch((err) => {
					this.$Notice.error({
						title: '登录失败，请重新登录',
					});
				})
			},

			
			/**
			 * 请求函数点击登录时向后台进行请求
			 * 这个将用于注册，但是实际未动工
			 * 
			 */
			request (e) {
				var that = this
				this.login({
					userAccount: that.userAccount,
					userPassword:that.userPassword
				}).then((data)=>{
						
					if (this.user.success) {
						//登录成功
						window.location = '../../wxg/index/index.html'
					} else {
						//登录失败
						this.$Message.info('登录失败');
					}

				}).catch(err => {
					console.log(err)
				})
			}
		},
		created: function () {
			document.getElementsByTagName('body')[0].className = '';
		}

	}
</script>
<style scoped src="../../../assets/css/login_register.css"></style>
<style>
</style>