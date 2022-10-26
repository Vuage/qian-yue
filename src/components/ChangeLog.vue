<template>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(item, key) in log" :key="key">
          <h2 class="accordion-header" :id="`log`+item.version">
          <button @click="item.closed = !item.closed" class="accordion-button " :class="{'collapsed':item.closed}" type="button" data-bs-toggle="collapse" :data-bs-target="`#log`+key" aria-expanded="true" :aria-controls="`log`+key">
            <div v-if="key===0">
              <div class="badge rounded-pill bg-danger">最新版</div>
            </div>
            <div v-else>
              <span class="badge rounded-pill bg-success">穩定版</span>
            </div>
              &nbsp;{{ item.name }} - {{ item.description }}
          </button>
          </h2>
          <div :id="`log`+key" class="accordion-collapse collapse" :class="{'collapsed':!item.closed}" :aria-labelledby="`log`+item.version" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              <ul>
                  <li
                    v-for="(content, key2) in item.changes"
                    :key="key2"
                    style="color: black"
                    >{{ content }}</li>
              </ul>
              <p class="text-dark">更新時間：{{ item.date }}</p>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ChangeLog',
  props: {
    log: {
      type: Array,
    }
  }
}
</script>
