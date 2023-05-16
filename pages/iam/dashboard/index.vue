<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <!--h1>Benvenuto</h1>
      <span v-if="firstName && lastName">
        {{ firstName }} {{ lastName }}
      </span-->
    </div>
    <header class="mb-3 border-bottom">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-block col-6">
            <h5>Benvenuto Utente Test</h5>
          </div>
          
          <div class="d-flex col-6 justify-content-end">
            <ul class="nav justify-content-center">
              <li><NuxtLink class="nav-link px-2 link-secondary" to="/iam/dashboard/ordini">Ordini</NuxtLink></li>                  
              <li><NuxtLink class="nav-link px-2 link-dark" to="/iam/dashboard/configuratore">Nuovo Ordine</NuxtLink></li>                                    
            </ul>
          </div>
        <div>                     
      </div>
      </div>
      </div>
    </header>
    <br/>
    <h3 class="mt-5">Ultimi Ordini</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Cognome</th>
          <th scope="col">Indirizzo</th>
          <th scope="col">Ordine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Ciro</td>
          <td>Annicchiarico</td>
          <td>Via Pescara 13, Grottaglie (TA)</td>
          <td><a href="#" class="text-decoration-none">13224</a></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Giorgio</td>
          <td>Mastrota</td>
          <td>Via della Repubblica 12, Grottaglie (TA)</td>
          <td><a href="#" class="text-decoration-none">13225</a></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Giorgio</td>
          <td>Mastrota</td>
          <td>Via della Repubblica 12, Grottaglie (TA)</td>
          <td><a href="#" class="text-decoration-none">13226</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useIamProfileStore } from '@/stores/useIamProfileStore'

// Pinia store for iamProfile
const iamStore = useIamProfileStore();
const { logout } = useIam();

const iAmLoggedIn = ref(false);
const showMenu = ref(false);

// Profile variables
const firstName = ref(<string|undefined>(undefined))
const lastName = ref(<string|undefined>(undefined))
const avatar = ref(<string|undefined>(undefined))

// Watch the iamProfile store
iamStore.$subscribe((mutation, state) => { 
  iAmLoggedIn.value = state.isLoggedIn
 
  // If profile values
  if (iAmLoggedIn.value) {
    const temp = iamStore.getProfile
    if (temp) {
      firstName.value = temp.firstName
      lastName.value = temp.lastName
      avatar.value = temp.avatar
    }
  }
})
</script>