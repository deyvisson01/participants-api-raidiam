<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">
          Login simbólico
        </div>
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

          <button class="btn btn-primary" @click="handleClick">
            Entrar
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
    handleClick() {
      this.$router.push('/HelloWorld')
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
</style>