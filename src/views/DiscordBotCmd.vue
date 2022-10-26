<template>
  <!-- 改成元件，弄成像是更新日誌那樣，只是裡面放表格 -->
  <Accordion :data="data" :prefix="prefix"></Accordion>
</template>

<script>
import Accordion from '@/components/AccordionCmd.vue';
import cmd from '../assets/data/DiscordBotCmd.json';
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      prefix: '/',
      data: cmd
    }
  }
}
</script>
