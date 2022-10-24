<template>
  <div class="home">
    <img alt="Vue logo" style="width: 100px" src="../assets/icon.png">
    <HelloWorld msg="歡迎來到淺月物語"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
