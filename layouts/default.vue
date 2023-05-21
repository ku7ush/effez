<template>
  <div class="container">
    <nav class="py-2 bg-light border-bottom" :class="{'invisible': !iAmLoggedIn}">
      <div class="container d-flex">
        <ul class="nav me-auto">          
          <li><NuxtLink to="/iam/dashboard" class="nav-link px-2 link-dark" aria-current="page">
            <img src="~~/iam/ui/img/LOGOPEFFETRADEORIZ.png" style="width: 25%; display: inline" />
          </NuxtLink></li>       
        </ul>
        <iamLoginMenu />
      </div>
    </nav>      
      <iamLoggedInHeader />
      <slot />
    <footer v-if="iAmLoggedIn" class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted text-center">&copy; 2023 Effetrade</p> 
    </footer>
  </div>
</template>

<script setup>
const showMenu = ref(false);
import { useIamProfileStore } from '@/stores/useIamProfileStore'

const iamStore = useIamProfileStore()
const { getProfile } = useIam();
const iAmLoggedIn = ref(false);
const isAdmin = ref(false)

iamStore.$subscribe(async (mutation, state) => { 
  iAmLoggedIn.value = state.isLoggedIn
})

/**
 * @Desc Toggle Nuxt IAM docs menu
 */
 async function toggleDocsMenu() {
  showMenu.value = !showMenu.value;   
}

useHead({  
  link: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    type: "text/css",
  },
  script: {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  },
});
</script>

<style scoped>
footer {
  /*margin-top: 19em !important;*/
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
</style>
