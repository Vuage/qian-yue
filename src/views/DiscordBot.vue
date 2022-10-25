<template>
  <!-- TODO: 把Card都放在 Component 用 Props 去呼叫，就不用每個都新增一個card元件 -->
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/dcbot/intro" class="list-group-item list-group-item-act">
          介紹
        </router-link>
        <router-link to="/dcbot/cmd" class="list-group-item list-group-item-act">
          指令
        </router-link>
        <router-link to="/dcbot/api" class="list-group-item list-group-item-act">
          API
        </router-link>
        <router-link to="/dcbot/doc" class="list-group-item list-group-item-act">
          文檔
        </router-link>
        <router-link to="/dcbot/log" class="list-group-item list-group-item-act">
          更新日誌
        </router-link>
        <router-link to="/dcbot/dev" class="list-group-item list-group-item-act">
          開發者
        </router-link>
      </div>
    </div>

    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
