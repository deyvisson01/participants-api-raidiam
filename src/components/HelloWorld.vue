<template>
  <div class="hello">
    <Table v-if="getLoadedData" :columns="getColumns" :rows="getData" :perpage="getPageSize"/>
  </div>
</template>

<script>
import Table from './table.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    Table
  },
  computed: mapGetters([
    'getData',
    'getColumns',
    'getPageSize',
    'getLoadedData'
  ]),
  methods: mapActions([
    'actionGetData',
    'actionSetPageSize'
  ]),
  created () {
    this.actionGetData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
