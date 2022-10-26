<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(category, key) in data" :key="key">
        <h2 class="accordion-header" :id="`log`+category.version">
        <button @click="category.closed = !category.closed" class="accordion-button " :class="{'collapsed':category.closed}" type="button" data-bs-toggle="collapse" :data-bs-target="`#log`+key" aria-expanded="true" :aria-controls="`log`+key">
            {{ category.name }}
        </button>
        </h2>
        <div :id="`log`+key" class="accordion-collapse collapse" :class="{'collapsed':!category.closed}" :aria-labelledby="`log`+category.version" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <table class="table table-dark">
                <thead>
                <h2>{{ category.name }}</h2>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">指令名稱</th>
                    <th scope="col">指令描述</th>
                    <th scope="col">指令參數</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key2) in category.data" :key="key2">
                        <td scope="row"> {{ key2 + 1 }} </td>
                        <td>{{ prefix + item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td v-if="item.params">{{ item.params}}</td>
                        <td v-else>無</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    prefix: {
      type: String,
      default: '/'
    },
    data: {
      type: Array,
    },
  }
}
</script>
