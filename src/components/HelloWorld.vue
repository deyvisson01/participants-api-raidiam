<template>
  <div class="hello">
    Teste: {{ getData }}
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: mapGetters([
    'getData'
  ]),
  methods: mapActions([
    'actionGetData'
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
