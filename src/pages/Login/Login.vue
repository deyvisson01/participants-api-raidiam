<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <h1 class="card-title">
          Login simbólico
        </h1>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="E-mail"
            >
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              placeholder="Senha"
              class="form-control"
              v-model="form.password"
            >
          </div>

          <button class="btn" @click="redirectTable">
            Table
          </button>
          <button class="btn" @click="redirectChart">
            Chart
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  data: () => ({
    form: {
      email: 'raidiam@gmail.com',
      password: '123'
    }
  }),
  methods: {
    redirectTable() {
      this.$router.push('/HelloWorld')
    },
    redirectChart() {
      this.$router.push('/Charts')
    }
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title{
  margin-bottom: 20px;
  color: #105f66;
}
.form-control{
  border: solid 1px;
  width: 250px;
  height: 40px;

  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
}
.btn{
  background-color: #105f66;
  color: white;
  margin: 20px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
}
</style>