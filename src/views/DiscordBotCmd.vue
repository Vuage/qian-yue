<template>
    <table class="table table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">指令名稱</th>
            <th scope="col">指令描述</th>
            <th scope="col">指令參數</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key) in general" :key="key">
                <td scope="row"> {{ key+1 }} </td>
                <td>{{ prefix + item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.params}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  data() {
    return {
      prefix: '/',
      general: [
        {
          name: 'help',
          description: '顯示幫助訊息',
          params: '[類別: String] [測試: int]'
        },
        {
          name: 'kick',
          description: '踢出成員',
          params: '[成員: MEMBER] [原因: String]'
        }
      ]
    }
  }
}
</script>
