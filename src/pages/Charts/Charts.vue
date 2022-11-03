<template>
  <div>
    CHARTSsss
    <chartBar v-if="getLoadedData" :labels="getUniqueCities" :data="getCountUniqueCities"/>
  </div>
</template>

<script>
import chartBar from '../../components/chartBar.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Charts',
  components: {
    chartBar
  },
  computed: mapGetters([
    'getCities',
    'getUniqueCities',
    'getCountUniqueCities',
    'getLoadedData'
  ]),
  methods: mapActions([
    'actionGetData',
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
a {
  color: #42b983;
}
</style>
