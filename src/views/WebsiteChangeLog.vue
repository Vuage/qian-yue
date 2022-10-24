<template>
  <h1>淺月物語官網 - 更新日誌</h1>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(item, key) in log" :key="key">
        <h2 class="accordion-header" :id="`log`+item.version">
        <button @click="item.closed = !item.closed" class="accordion-button " :class="{'collapsed':item.closed}" type="button" data-bs-toggle="collapse" :data-bs-target="`#log`+key" aria-expanded="true" :aria-controls="`log`+key">
            {{ item.name }}
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
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import json from '../assets/changeLog.json'
export default {
  name: 'WebsiteChangeLog',
  data() {
    return {
      log: json
    }
  }
}
</script>
