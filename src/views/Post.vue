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
          <h5 class="card-title text-dark">{{ item.title }}</h5>
          <p class="card-text text-dark"> {{ item.short_content }} </p>
          <button type="button" class="btn btn-primary">展開</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cacheSearch: '',
      searchPost: [],
      post: [
        {
          title: '你好，世界！',
          short_content: 'hi',
          content: 'asdasdasda',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        },
        {
          title: '測試貼文',
          short_content: '山上有個小女孩，它叫做小花。',
          content: '小花是一個很可愛的女孩，她有一個很可愛的小狗，它叫做小狗。',
          author: '',
          date: ''
        }
      ]
    }
  },
  methods: {
    search() {
      this.searchPost = this.post.filter((post) => {
        return post.title.includes(this.cacheSearch)
      })
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
