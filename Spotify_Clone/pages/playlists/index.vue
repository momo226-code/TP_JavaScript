<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Your Playlists</h1>
        <button @click="showCreateModal = true" class="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-full transition duration-300">
          Create Playlist
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <NuxtLink 
          v-for="playlist in userPlaylists"
          :key="playlist.id"
          :to="`/playlists/${playlist.id}`"
          class="transition duration-300 transform hover:scale-105"
        >
          <PlaylistCard :playlist="playlist" />
        </NuxtLink>
      </div>

      <!-- Create Playlist Modal -->
      <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-gray-800 rounded-lg p-8 w-full max-w-md">
          <h2 class="text-2xl font-bold mb-6">Create New Playlist</h2>
          <form @submit.prevent="createPlaylist">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium mb-2">Playlist Name</label>
              <input
                v-model="newPlaylist.name"
                type="text"
                id="name"
                required
                placeholder="My Awesome Playlist"
                class="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>
            <div class="mb-6">
              <label for="description" class="block text-sm font-medium mb-2">Description</label>
              <textarea
                v-model="newPlaylist.description"
                id="description"
                placeholder="Add an optional description"
                class="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-24 resize-none"
              ></textarea>
            </div>
            <div class="flex justify-end space-x-4">
              <button type="button" @click="showCreateModal = false" class="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500 transition duration-300">
                Cancel
              </button>
              <button type="submit" class="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition duration-300">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userPlaylists = ref([])
const authStore = useAuthStore()
const router = useRouter()

const showCreateModal = ref(false)
const newPlaylist = ref({
  name: '',
  description: ''
})

const fetchUserPlaylists = async () => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    const data = await response.json()
    userPlaylists.value = data.items
  } catch (error) {
    console.error('Error fetching playlists:', error)
  }
}

const createPlaylist = async () => {
  try {
    const userResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    const userData = await userResponse.json()

    const response = await fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newPlaylist.value.name,
        description: newPlaylist.value.description,
        public: true
      })
    })

    if (response.ok) {
      const playlist = await response.json()
      await fetchUserPlaylists()
      newPlaylist.value = { name: '', description: '' }
      showCreateModal.value = false
      navigateTo(`/playlists/${playlist.id}`)
    } else {
      throw new Error('Failed to create playlist')
    }
  } catch (error) {
    console.error('Error creating playlist:', error)
    alert('Failed to create playlist')
  }
}

onMounted(() => {
  fetchUserPlaylists()
})
</script>