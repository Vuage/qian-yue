<template>
  <div class="form-floating text-dark">
    <textarea class="form-control" placeholder="開始搜尋貼文吧" id="searchDeveloper" v-model="cacheSearch"></textarea>
    <label for="searchDeveloper">搜尋貼文</label>
  </div>
  <br>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="(item, key) in searchPost" :key="key">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-dark gap-2 d-md-block">{{ item.title }}</h5>
          <hr class="text-dark">
          <p class="text-dark">{{ item.short_content }}</p>
          <p class="text-dark alert alert-primary">
            發文時間: {{ item.date }} <br>
            發文者: {{ item.author }}
          </p>
          <button type="button" class="btn btn-primary" @click="showPost(key)">展開</button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-for="(item, key) in searchPost" :key="key">
    {{ item }} -->
    <PostModal :data="post" ref="PostModal"></PostModal>
  <!-- </div> -->
</template>

<script>
import PostModal from '@/components/PostModal.vue'
import json from '@/assets/data/Post.json'
export default {
  components: {
    PostModal
  },
  data() {
    return {
      cacheSearch: '',
      searchPost: [],
      post: json
    }
  },
  methods: {
    search() {
      this.sortDate()
      this.searchPost = this.post.filter((post) => {
        if (!post.title.includes(this.cacheSearch)) {
          return post.short_content.includes(this.cacheSearch)
        } else {
          return post.title.includes(this.cacheSearch)
        }
      })
    },
    sortDate() {
      this.post.sort((a, b) => {
        console.log(a.date.toLowerCase().charCodeAt(0))
        return new Date(b.date) - new Date(a.date)
      })
    },
    showPost(id) {
      this.$refs.PostModal.showModal(id)
    }
  },
  watch: {
    cacheSearch() {
      this.search()
    }
  },
  created() {
    this.search()
  }
}
</script>
