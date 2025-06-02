import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null
  }),

  persist: true,
  
  actions: {
    setToken(newToken) {
      this.token = newToken
    },
    
    setUser(newUser) {
      this.user = newUser
    },
    
    clearAuth() {
      this.token = null
      this.user = null
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token
  }
}) 