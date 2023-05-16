<template>
  <div class="container">
    <main class="form-signin w-100 m-auto">
      <div v-if="formSent === false">
        <form>
          <div class="mt-5 mb-5 ml-2 mr-2 d-flex justify-content-center align-items-center">
          <NuxtLink to="/"><img src="~~/iam/ui/img/LOGOPEFFETRADEVERT.png/" class="w-100"/></NuxtLink>
        </div>        
        <h1 class="h3 mb-3 fw-normal">Recupero Password</h1>
        <p>
          Inserisci il tuo indirizzo email.<br>
          Ti invieremo un link per recuperare la tua password.
        </p>       
        <div class="form-floating">
          <input v-model="resetForm.email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
          <label for="floatingEmail">Email</label>
        </div>           
        <button class="w-100 btn btn-lg btn-primary" @click.prevent="resetMyPassword">Resetta Password</button>
        <div class="row my-2">
          <div class="col"><NuxtLink class="text-decoration-none" to="/iam/register">Registrati</NuxtLink></div>
          <div class="col"><NuxtLink class="text-decoration-none" to="/iam/login">Login</NuxtLink></div>          
        </div>              
      </form>
      </div>
      <div v-else>
        <p>Controlla la tua mail per le istruzioni sul reset della password</p>
      </div>            
    </main>
  </div>
</template>

<script setup>
const { resetPassword } = useIam();
const formSent = ref(false);

const resetForm = {
  email: "",
};


async function resetMyPassword() {
  // If nothing is in form, just return without sending anything to server
  if (resetForm.email.length === 0) return;

  // For security purposes, this always returns successful
  // Check your server console logs for debugging purposes
  const result = await resetPassword(resetForm.email);
  console.log("reset form: ", result);
  formSent.value = true;
}

useHead({
  title: "Nuxt IAM Register", 
});
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.or-seperator i {
  padding: 0 10px;
  background: #f7f7f7;
  position: relative;
  top: -11px;
  z-index: 1;
}
</style>
