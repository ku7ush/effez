<template>
    <div class="form-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="form">
            <div>
                <label>Email</label>
                <input v-model="email" type="email" required/>
            </div>
            <div>
                <label>Password</label>
                <input v-model="password" type="password" required/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
      }
    },
    methods: {
      async login() {
        try {
          console.log('Logging');
          this.$router.push('/');
          // Call your login endpoint here
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              error: this.error
            }),
          })
          if (response.ok) {
            // Redirect to home page on successful login
            this.$router.push('/')
          } else {
            const { message } = await response.json()
            this.error = message
          }
        } catch (err) {
          console.error(err)
          this.error = 'An error occurred. Please try again later.'
        }
      },
    },
  }
</script>

<style scoped>
    .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    }

    .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 300px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    }
</style>