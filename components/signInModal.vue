<script setup lang="ts">
  import { ref } from 'vue'
  import{useModalsToggle} from '../stores/modalsToggle'
  const store = useModalsToggle()

  const email = ref('');
  const password = ref('');
</script>

<template>
  <div class="modal signin-modal">
    <div class="overlay" @click="store.closeSignInModal"></div>
    <div class="modal-container">
      <div class="close hover-link" @click="store.closeSignInModal">
        <img class="img" src="@/assets/images/close.svg"/>
      </div>
      <div class="modal-wrapper">
        <div class="top">
          <div class="title">Welcome Back! 👋🏼</div>
          <div class="text">Please log-in to continue with Buzzlytics</div>
          <div class="fields">
            <input type="email" placeholder="Email" v-model="email"/>
            <input type="password" placeholder="Password" v-model="password"/>
          </div>
          <button class="button" @click="store.closeSignInModal">Log In</button>
          <div class="links">
            <div class="text link hover-link" @click="store.openRestoreModal">Forgot Password?</div>
            <div class="text link hover-link" @click="store.openRegisterModal">Create Account</div>
          </div>
        </div>
        <div class="bottom">
          <button class="button discord">
            <img class="img" src="@/assets/images/discord.svg"/>
            Sign In with Discord
          </button>
          <button class="button google">
            <img class="img" src="@/assets/images/google.svg"/>
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

