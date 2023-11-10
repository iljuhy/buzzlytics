<script setup lang="ts">
  import { ref } from 'vue'
  import{useModalsToggle} from '../stores/modalsToggle'
  const store = useModalsToggle()

  const email = ref('');
</script>

<template>
  <div class="modal signin-modal">
    <div class="overlay" @click="store.closeRestoreSuccessModal"></div>
    <div class="modal-container">
      <div class="close hover-link" @click="store.closeRestoreSuccessModal">
        <img class="img" src="@/assets/images/close.svg"/>
      </div>
      <div class="modal-wrapper">
        <div class="top">
          <div class="title">Please check your email</div>
          <div class="text">We sent a password recovery link to your email</div>
          <img class="img" src="@/assets/images/success.svg"/>
          <button class="button" @click="store.closeRestoreSuccessModal">Close Window</button>
        </div>
      </div>
    </div>
  </div>
</template>

