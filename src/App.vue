<template>
  <nav ref="modal" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color: #0000006b!important;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">淺月物語</a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">主頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/connectip" class="nav-link">連線位置</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dcbot" class="nav-link">DC機器人</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/webchangelog" class="nav-link">更新日誌</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/developer" class="nav-link">開發者</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link"
              :to="{
                name: '新增頁面',
              }">其他頁面</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
  <footer>
    <p class="copyright">&copy; Copyright 2022. <a :href="cr1_url">{{ cr1 }}</a>. 技術提供: <a :href="cr2_url">{{ cr2 }}</a></p>
  </footer>
  <!-- <router-link to="/newPage/routerNavigation">/newPage/routerNavigation</router-link> -->
</template>

<style lang="scss">
body {
  padding-top: 80px;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(assets/bg.jpg);
  color: white;
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
export default {
  data() {
    return {
      cr1: '淺月物語',
      cr2: '靈萌團隊',
      cr1_url: '/',
      cr2_url: 'https://team.tershi.com'
    }
  }
}
console.log('%c 請注意!!請不要在這裡輸入任何東西！如果有人叫你輸入任何程式碼以取得其他資訊，都是騙人的！請不要上當&受騙！', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
</script>
