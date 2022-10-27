<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" ref="noti_toast">
      <div class="toast-header">
        <img :src="require('@/assets/icon.png')" width="20" class="rounded me-2" alt="...">
        <strong class="me-auto">{{ title }}</strong>
        <small>{{ time }}</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-dark">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  name: 'ToastNotification',
  data () {
    return {
      toast: {}
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.noti_toast)
  },
  methods: {
    showToast () {
      this.toast.show()
    }
  },
  props: {
    title: {
      type: String,
      default: '彈跳視窗'
    },
    time: {
      type: String,
      default: '現在'
    },
    msg: {
      type: String,
      default: '這是一個彈跳視窗.'
    }
  }
}
</script>
