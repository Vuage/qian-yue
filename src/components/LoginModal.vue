<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">登入</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
          <form class="row justify-content-center">
            <div class="col-md-6">
                <div class="mb-2">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                    v-model="user.email"
                />
                </div>
                <div class="mb-2">
                <label for="inputPassword" class="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="user.password"
                />
                </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" @click="$refs.LoginError.showToast()">登入</button>
        </div>
      </div>
    </div>
    <Notification ref="LoginError" title="登入錯誤！" msg="功能尚未完成" time="現在"></Notification>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import Notification from './ToastNotification.vue'
export default {
  name: 'LoginModal',
  components: {
    Notification
  },
  data () {
    return {
      modal: {},
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
