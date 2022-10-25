<template>
    <ul>
        <li v-for="(item, key) in data" :key="key">
            {{ item.name }} - {{ item.description }}
        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: '夏特稀',
          description: '我是一個在台灣通過自主學習程式語言的一個高中生，擁有將近五年使用Linux系統的經驗，也有開發專案的經驗，我也喜歡拍影片剪影片。'
        },
        {
          name: '小龍',
          description: 'abc'
        }
      ]
    }
  }
}
</script>
