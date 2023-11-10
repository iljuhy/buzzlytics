import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalsToggle = defineStore('modalsToggle', () => {
  const signInModalIsVisible = ref(false);
  const registerModalIsVisible = ref(false);
  const restoreModalIsVisible = ref(false);
  const restoreSuccessModalIsVisible = ref(false);
  
  function closeAllModals() {
    signInModalIsVisible.value = false;
    registerModalIsVisible.value = false;
    restoreModalIsVisible.value = false;
    restoreSuccessModalIsVisible.value = false;
  }

  function openSignInModal() {
    closeAllModals();
    signInModalIsVisible.value = true;
    document.body.classList.add('hidden')
  }
  function closeSignInModal() {
    signInModalIsVisible.value = false;
    document.body.classList.remove("hidden");
  }

  function openRegisterModal() {
    closeAllModals();
    registerModalIsVisible.value = true;
    document.body.classList.add('hidden')
  }
  function closRegisterModal() {
    registerModalIsVisible.value = false;
    document.body.classList.remove("hidden");
  }

  function openRestoreModal() {
    closeAllModals();
    restoreModalIsVisible.value = true;
    document.body.classList.add('hidden')
  }
  function closRestoreModal() {
    restoreModalIsVisible.value = false;
    document.body.classList.remove("hidden");
  }

  function openRestoreSuccessModal() {
    closeAllModals();
    restoreSuccessModalIsVisible.value = true;
    document.body.classList.add('hidden')
  }
  function closeRestoreSuccessModal() {
    restoreSuccessModalIsVisible.value = false;
    document.body.classList.remove("hidden");
  }

  

  return { 
    signInModalIsVisible, openSignInModal, closeSignInModal,
    registerModalIsVisible, openRegisterModal, closRegisterModal,
    restoreModalIsVisible, closRestoreModal, openRestoreModal,
    restoreSuccessModalIsVisible, openRestoreSuccessModal, closeRestoreSuccessModal
   }
})