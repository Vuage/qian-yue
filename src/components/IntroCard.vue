<template>
    <div class="row row-cols-1 g-4 " :class="getRow()">
        <div class="col d-flex justify-content-center" v-for="(item, key) in data" :key="key">
            <div class="card" style="width: 18rem;" v-if="item.name">
                <img :src="item.img" v-if="item.img" class="card-img-top" alt="圖片無法顯示" />
                <div class="card-body">
                    <h5 class="card-title text-info">{{ item.name }}</h5>
                    <p class="card-text text-dark">{{ item.description }}</p>
                    <div class="btn-group d-grid gap-2 d-md-block">
                        <a :href="item.link" target="_blank" v-if="item.link" class="btn btn-primary ">個人網站</a>
                        <a :href="item.yt" target="_blank" v-if="item.yt" class="btn btn-danger">YouTube</a>
                        <a :href="item.github" target="_blank" v-if="item.github" class="btn btn-dark">Github</a>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    row: {
      type: Number,
      default: 2
    }
  },
  methods: {
    getRow() {
      return 'row-cols-md-' + this.row
    }
  }
}
</script>
