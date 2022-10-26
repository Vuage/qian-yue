<template>
    <Accordion :data="data" :url="url"></Accordion>
</template>

<script>
import Accordion from '@/components/AccordionApi.vue';
import api from '../assets/data/DiscordBotApi.json';
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      url: 'https://api.qian-yue.tk',
      data: api
    }
  }
}
</script>
