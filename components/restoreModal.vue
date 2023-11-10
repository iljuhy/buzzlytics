<script setup lang="ts">
  import { ref } from 'vue'
  import{useModalsToggle} from '../stores/modalsToggle'
  const store = useModalsToggle()

  const email = ref('');
</script>

<template>
  <div class="modal signin-modal">
    <div class="overlay" @click="store.closRestoreModal"></div>
    <div class="modal-container">
      <div class="close hover-link" @click="store.closRestoreModal">
        <img class="img" src="@/assets/images/close.svg"/>
      </div>
      <div class="modal-wrapper">
        <div class="top">
          <div class="title">Restore Password</div>
          <div class="text">Please enter your email to restore password</div>
          <div class="fields">
            <input type="email" placeholder="Email" v-model="email"/>
          </div>
          <button class="button" @click="store.openRestoreSuccessModal">Restore Password</button>
          <div class="links">
            <div class="text link hover-link" @click="store.openSignInModal">Log In</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

