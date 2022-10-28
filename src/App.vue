<template>
  <nav ref="modal" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color: rgb(7 6 6 / 82%) !important;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/icon.png')" alt="" width="30" class="d-inline-block align-text-top">
        淺月物語
      </a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >

        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li class="nav-item" v-for="(item, key) in data" :key="key">
            <router-link :to="item.url" class="nav-link">{{ item.name }}</router-link>
          </li>
        </ul>

        <form class="d-flex me-2">
          <input class="form-control" type="search" placeholder="搜尋貼文吧(尚未完成)" aria-label="Search" v-model="navCacheSearch">
        </form>
        <button type="button" class="btn btn-outline-success me-2" @click="checkContent()">搜尋</button>
        <button type="button" class="d-flex btn btn-outline-success me-2" @click="$refs.LoginModal.showModal()">
          登入
        </button>

        <button class="d-flex btn btn-outline-info" @click="$refs.SignupModal.showModal()">
          註冊
        </button>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
  <footer>
    <p class="copyright">&copy; Copyright 2022. <a :href="cr1_url">{{ cr1 }}</a>. 技術提供: <a :href="cr2_url">{{ cr2 }}</a></p>
  </footer>
  <LoginModal ref="LoginModal"></LoginModal>
  <SignupModal ref="SignupModal"></SignupModal>
  <Notification ref="Notification" title="搜尋錯誤！" msg="請輸入值" time="現在"></Notification>
  <!-- <router-link to="/newPage/routerNavigation">/newPage/routerNavigation</router-link> -->
</template>

<style lang="scss">
// @import "./assets/all";
body {
  padding-top: 80px;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(assets/bg.jpg);
  color: white;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
footer {
  height: 300px;
  width: 100%;
}
p.copyright {
  width: 100%;
  line-height: 10px;
  text-align: center;
  bottom:0;
  position: fixed;
}
</style>

<script>
import LoginModal from './components/LoginModal.vue'
import SignupModal from './components/SignupModal.vue'
import Notification from './components/ToastNotification.vue'
export default {
  components: {
    LoginModal,
    SignupModal,
    Notification
  },
  data() {
    return {
      cr1: '淺月物語',
      cr2: '靈萌團隊',
      cr1_url: '/',
      cr2_url: 'https://team.tershi.com',
      navCacheSearch: '',
      data: [
        {
          name: '主頁',
          url: '/'
        },
        {
          name: '貼文',
          url: '/post'
        },
        {
          name: '關於我們',
          url: '/about'
        },
        {
          name: '連線位置',
          url: '/connectip'
        },
        {
          name: 'DC機器人',
          url: '/dcbot'
        },
        {
          name: '更新日誌',
          url: '/webchangelog'
        },
        {
          name: '開發者',
          url: '/developer'
        }
      ]
    }
  },
  methods: {
    searchPost() {
      // this.$router.push({ name: 'SearchPost', params: { search: this.navCacheSearch } })
    },
    checkContent() {
      if (this.navCacheSearch === '') {
        this.$refs.Notification.showToast()
      } else {
        this.searchPost()
      }
    }
  }
}
console.log('%c 請注意!!請不要在這裡輸入任何東西！如果有人叫你輸入任何程式碼以取得其他資訊，都是騙人的！請不要上當&受騙！', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
</script>
