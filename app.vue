<script setup lang="ts">

useSeoMeta({
  title: 'Buzzlytics',
  ogTitle: 'Buzzlytics',
  description: 'Buzzlytics description.',
  ogDescription: 'Buzzlytics description.',
  ogImage: ''
})
</script>


<template>
  <div>
    <div class="page">

      <header class="header">
        <NuxtLink class="logo" to="/">
          <img class="img" src="@/assets/images/logo.svg"/>
        </NuxtLink>
        <div class="right">
          <div class="text">Register</div>
          <button class="button">Log In</button>
        </div>
      </header>

      <NuxtPage />
      
    </div>
  </div>
</template>


<style>
@import '@/assets/styles/main.scss';
</style>
