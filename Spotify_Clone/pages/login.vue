<template>
  <div class="flex flex-col items-center justify-center" :style="{ marginTop: '25vh' }">
    <button
      @click="handleLogin"
      class="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      Let's Connect with Spotify
    </button>
  </div>
</template>



<script setup>
const auth = useAuth()

const handleLogin = () => {
  auth.login()
}
</script>