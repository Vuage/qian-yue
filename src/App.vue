<template>
  <nav ref="modal" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color: transparent!important;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">淺月物語</a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" @click="openModal">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" v-bind:class="{ in: show }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">主頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/webchangelog" class="nav-link">更新日誌</router-link>
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
import * as bootstrap from 'bootstrap'
export default {
  data() {
    return {
      cr1: '淺月物語',
      cr2: '靈萌團隊',
      cr1_url: '/',
      cr2_url: 'https://team.tershi.com',
      bsModal: ''
    }
  },
  methods: {
    openModal() {
      this.bsModal.show();
    }
  },
  mounted() {
    this.bsModal = new bootstrap.Modal(this.$refs.modal);
  }
}
</script>
