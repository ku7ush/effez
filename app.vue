<template>
  <NuxtLayout>      
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
  body {
    background: linear-gradient(-45deg, #dd92f0, #a874ce, #643c74, #84349e);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(0.25rem);
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.3s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>