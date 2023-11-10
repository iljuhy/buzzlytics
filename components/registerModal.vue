<script setup lang="ts">
  import { ref } from 'vue'
  import{useModalsToggle} from '../stores/modalsToggle'
  const store = useModalsToggle()

  const name = ref('');
  const email = ref('');
  const password = ref('');
</script>

<template>
  <div class="modal signin-modal">
    <div class="overlay" @click="store.closRegisterModal"></div>
    <div class="modal-container">
      <div class="close hover-link" @click="store.closRegisterModal">
        <img class="img" src="@/assets/images/close.svg"/>
      </div>
      <div class="modal-wrapper">
        <div class="top">
          <div class="title">Create Account</div>
          <div class="text">Register using your email, Discord or Google</div>
          <div class="fields">
            <input type="text" placeholder="Your Name" v-model="name"/>
            <input type="email" placeholder="Email" v-model="email"/>
            <input type="password" placeholder="Password" v-model="password"/>
          </div>
          <button class="button" @click="store.closRegisterModal">Create Account</button>
          <div class="links">
            <div class="text link hover-link" @click="store.openSignInModal">Log In</div>
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

