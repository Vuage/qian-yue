<template>
  <IntroCard :data="data" :row="`row-cols-md-`+row"></IntroCard>
    <!-- <ul>
        <li v-for="(item, key) in data" :key="key">
            {{ item.name }} - {{ item.description }}
        </li>
    </ul> -->
</template>

<script>
import IntroCard from '@/components/IntroCard.vue';
export default {
  components: {
    IntroCard,
  },
  data() {
    return {
      row: 2,
      data: [
        {
          name: '夏特稀',
          img: require('@/assets/tershixia.webp'),
          link: 'https://tershi.com',
          yt: 'https://www.youtube.com/@TershiXia',
          github: 'https://github.com/mmm25002500',
          description: '我是一個在台灣通過自主學習程式語言的一個高中生，擁有將近五年使用Linux系統的經驗，也有開發專案的經驗，我也喜歡拍影片剪影片。'
        },
        {
          name: 'yyw',
          img: require('@/assets/haimo.png'),
          link: 'https://haimo.tk',
          yt: 'https://www.youtube.com/channel/UCVssTv4Cyd_DdO-mFyKaDlg',
          github: 'https://github.com/yywbadm',
          description: '一個來自臺灣,愛寫程式的新生兒w'
        },
        {
          name: '',
          img: '',
          link: '',
          yt: '',
          github: '',
          description: ''
        }
      ]
    }
  }
}
</script>
