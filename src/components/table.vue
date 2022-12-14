<template>
  <v-main class="ma-5">
    <v-container class="grey lighten-3 container-test">
      <v-card flat class="pa-3 card-participants" justify="space-between">
        <!-- Table to display -->
        <table class="table table-participants">
          <thead>
            <tr>
              <th
                class="text-left"
                v-for="column in columns"
                :key="column.dataKey"
              >
                <v-btn
                  text
                  block
                  x-large
                  depressed
                  @click="column.sorter ? sortBy(column.dataKey) : null"
                >
                  <span class="caption text-capitalize">
                    <h3>{{ column.name }}</h3>
                  </span>
                  <v-icon v-if="column.sorter" right>mdi-sort</v-icon>
                </v-btn>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rowfilters" :key="row.code">
              <td
                v-for="column in columns"
                :key="column.dataKey"
                :class="column.align"
              >
                {{ row[column.dataKey] }}
              </td>
            </tr>
          </tbody>
        </table>

      </v-card>

      <!-- Bottom Pagination -->
      <div class="text-center">
        <v-container class="grey lighten-3 container-test">
          <v-row justify="start">
            <v-col cols="auto">
              <v-container calss="red">
                <v-layout row warp>
                  <v-pagination
                    v-model="currentPage"
                    :length="numberPages"
                    total-visible="9"
                    @input="onPageChange"
                  ></v-pagination>
                </v-layout>
              </v-container>
            </v-col>
            <v-layout shrink class="align-center">
              <v-flex warp>
                <div>{{ numberPages }} pages</div>
              </v-flex>
            </v-layout>
            <v-layout shrink class="align-center ml-3">
              <v-flex warp>
                <div>({{ rows.length }} results)</div>
              </v-flex>
            </v-layout>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  components: {},

  props: {
    columns: Array,
    rows: Array,
    perpage: Number,
  },

  data() {
    return {
      formatrow: this.rows,
      sort: "Asc",
      currentPage: 1,
      currentindex: 0,
    };
  },

  created() {
    // format the value using the column's 'formatValue' method
    for (let i = 0; i < this.formatrow.length; i++) {
      for (let j = 0; j < this.columns.length; j++) {
        try {
          this.formatrow[i][this.columns[j]["dataKey"]] = this.columns[j].formatValue(this.formatrow[i][this.columns[j]["dataKey"]]);
        } catch (e) {
          //console.log("'formatValue' method is not present in data key:", this.columns[j]["dataKey"]);
          continue;
        }
      }
    }
    this.onPageChange(1);
  },

  computed: {
    // retrun the total page number
    numberPages() {
      return Math.ceil(this.rows.length / this.perpage);
    },

    // get the row data for specific page
    rowfilters() {
      return this.formatrow.slice(this.currentindex, this.currentindex + this.perpage);
    },
  },

  methods: {
    sortBy(prop) {
      if (this.sort === "Asc") {
        this.formatrow.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
        this.sort = "Desc";
      } else if (this.sort === "Desc") {
        this.formatrow.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
        this.sort = "Asc";
      }
    },

    onPageChange(value) {
      this.currentPage = value;
      this.currentindex = value * this.perpage - this.perpage;
    },
  },
};
</script>

<style scoped>
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
  min-height: 100%;
}

th {
  border-bottom: 2px solid #ddd;
  text-align: left;
}

td.left {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td.right {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td.center {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.container-test {
  max-width: 100%;
}

.card-participants {
  min-height: 90vh;
}

.table-participants {
  min-height: none;
}
</style>