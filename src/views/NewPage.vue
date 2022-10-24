<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-act">
          元件 A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-act">
          元件 B
        </router-link>
      </div>
    </div>

    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
