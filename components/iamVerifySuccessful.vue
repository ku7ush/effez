<template>
  <div class="container">
    <div>
      <NuxtLink to="/iam/"
        ><img src="~~/iam/ui/img/nuxt-iam-logo.png/" style="width: 200px"
      /></NuxtLink>
    </div>
    <h3>La tua password temporanea è {{ tempPassword }}</h3>
    <h3>Copiala, entra e cambiala.</h3>
  </div>
</template>

<script setup>
// Get token from route/
// This assumes route is [host]/iam/verifysuccessful?pass=[password]
const route = useRoute();
const tempPassword = route.fullPath.split("/iam/verifysuccessful?pass=")[1];
console.log(tempPassword.split("/iam/verifysuccessful?pass="));
</script>
