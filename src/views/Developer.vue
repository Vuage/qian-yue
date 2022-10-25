<template>
    <div class="form-floating text-dark">
      <textarea class="form-control" placeholder="開始搜尋開發者吧" id="searchDeveloper" v-model="cacheSearch"></textarea>
      <label for="searchDeveloper">搜尋開發者</label>
    </div>
    <br>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col d-flex justify-content-center" v-for="(item, key) in searchData" :key="key">
            <div class="card" style="width: 18rem;">
                <img :src="item.img" v-if="item.img" class="card-img-top" alt="圖片無法顯示" />
                <div class="card-body">
                    <h5 class="card-title text-info">{{ item.name }}</h5>
                    <p class="card-text text-dark">{{ item.description }}</p>
                    <div class="btn-group">
                        <a :href="item.link" target="_blank" v-if="item.link" class="btn btn-primary ">個人網站</a>
                        <a :href="item.yt" target="_blank" v-if="item.yt" class="btn btn-danger">YouTube</a>
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
  data() {
    return {
      cacheSearch: '',
      searchData: [],
      card_data: [
        {
          name: '夏特稀',
          img: 'https://tershi.com/images/img.webp',
          link: 'https://tershi.com',
          yt: 'https://www.youtube.com/@TershiXia',
          description: '我是一個在台灣通過自主學習程式語言的一個高中生，擁有將近五年使用Linux系統的經驗，也有開發專案的經驗，我也喜歡拍影片剪影片。'
        },
        {
          name: 'YYW',
          img: 'https://yt3.ggpht.com/dIM38NvqSTvfbqUOokSxnRjmIlEBeECUg_A4VMpM41bDvB54owj5xLXafjLP__Ct9FlelLYtZw=s88-c-k-c0x00ffffff-no-rj',
          link: '',
          yt: 'https://www.youtube.com/channel/UCVssTv4Cyd_DdO-mFyKaDlg',
          description: '這裡啥都沒有！'
        },
        {
          name: '開發者',
          img: '',
          link: '',
          yt: '',
          description: '這裡啥都沒有！'
        }
      ]
    }
  },
  watch: {
    cacheSearch: function (val) {
      this.searchData = this.card_data.filter((item) => {
        return item.name.toUpperCase().includes(val.toUpperCase())
      })
    }
  },
  created() {
    this.searchData = this.card_data
  }
};
</script>
