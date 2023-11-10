<script setup lang="ts">

useSeoMeta({
  title: 'Buzzlytics',
  ogTitle: 'Buzzlytics',
  description: 'Buzzlytics description.',
  ogDescription: 'Buzzlytics description.',
  ogImage: ''
})

import SignInModal from '@/components/signInModal.vue'
import RegisterModal from '@/components/registerModal.vue'
import{useModalsToggle} from '@/stores/modalsToggle'
const store = useModalsToggle()

</script>


<template>
  <div>
    <div class="page">

      <header class="header">
        <NuxtLink class="logo" to="/">
          <img class="img" src="@/assets/images/logo.svg"/>
        </NuxtLink>
        <div class="right">
          <div class="text hover-link" @click="store.openRegisterModal">Register</div>
          <button class="button" @click="store.openSignInModal">Log In</button>
        </div>
      </header>

      <NuxtPage />
      
      <transition name="fade">
        <signInModal v-if="store.signInModalIsVisible" />
      </transition>
      <transition name="fade">
        <registerModal v-if="store.registerModalIsVisible" />
      </transition>
      <transition name="fade">
        <restoreModal v-if="store.restoreModalIsVisible" />
      </transition>
      <transition name="fade">
        <restoreSuccessModal v-if="store.restoreSuccessModalIsVisible" />
      </transition>
      
    </div>
  </div>
</template>


<style>
@import '@/assets/styles/main.scss';
</style>
