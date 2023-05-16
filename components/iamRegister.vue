<template>
  <div class="container">
    <main class="form-signin w-100 m-auto">         
      <form>
        <div class="mt-5 mb-5 ml-2 mr-2 d-flex justify-content-center align-items-center">
          <NuxtLink to="/"><img src="~~/iam/ui/img/LOGOPEFFETRADEVERT.png/" class="w-100"/></NuxtLink>
        </div>
        <!-- Email verification -->
        <div v-if="verifyRegistrations" class="alert alert-warning" role="alert">
          <strong>Verifica email necessaria</strong>
        </div>  
        <h1 class="h3 mb-3 fw-normal text-center">Registrati</h1>
        <!-- Error message -->
        <div v-if="registerError" class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Errore: {{ registerError.message }}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi" @click="registerError = null"></button>
        </div>
        <!-- Register Success -->
        <div v-if="registerSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Registrazione completata!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="registerSuccess = null"></button>
        </div>              
        <div class="form-floating">
          <input v-model="registerForm.firstName" type="text" class="form-control" id="floatingFirstName" placeholder="Jeremy">
          <label for="floatingFirstName">Nome</label>
        </div>
        <div class="form-floating">
          <input v-model="registerForm.lastName" type="text" class="form-control" id="floatingLastName" placeholder="Mwangelwa">
          <label for="floatingLastName">Cognome</label>
        </div>
        <div class="form-floating">
          <input v-model="registerForm.email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
          <label for="floatingEmail">Email</label>
        </div>
        <div class="form-floating">
          <input v-model="registerForm.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>       
        <button class="w-100 btn btn-lg btn-primary" @click.prevent="tryRegister">Registrati</button>
        <p class="mt-2"><input type="checkbox" v-model="acceptTerms" /> Accetto 
          <NuxtLink class="text-decoration-none" to="/iam/register">termini e condizioni</NuxtLink></p>         
         <p class="my-2">Hai già un account? <NuxtLink class="text-decoration-none" to="/iam/login">Entra</NuxtLink></p>              
      </form>      
    </main>
  </div>
</template>

<script setup>
const { register } = useIam();
const verifyRegistrations =
  useRuntimeConfig().public.iamVerifyRegistrations === "true";

// Error and success flags
let registerError = ref(null);
let registerSuccess = ref(null);

// Flag for terms and conditions
const acceptTerms = ref(false);

// Object to hold registration data
const registerForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

// Attempt to register user
async function tryRegister() {
  // Check terms and conditions checkbox
  if (!acceptTerms.value) {
    registerError.value = {
      message: "You must accept terms and conditions",
    };
    return;
  }

  // Send registration data
  const { status, error } = await register(
    registerForm.firstName,
    registerForm.lastName,
    registerForm.email,
    registerForm.password
  );

  // If we get an error
  if (error) {
    console.log("error: ", error);
    registerError.value = error;
  }

  // If successful, show success message, wait, then navigate to login page
  if (status === "success") {
    registerSuccess.value = true;
    setTimeout(() => { navigateTo("/iam/login"); }, 1000);
  }
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

</style>
