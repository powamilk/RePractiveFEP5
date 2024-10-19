<template>
  <main>
      <RouterLink to="/create" class="btn btn-primary">Create Phim</RouterLink>
      <table class="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Genre</td>
            <td>Duration</td>
            <td>ReleaseDate</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
            <tr v-for="rapphim in rapphims" :key="rapphim.id">
              <td>{{ rapphim.id }}</td>
              <td>{{ rapphim.title }}</td>
              <td>{{ rapphim.genre }}</td>
              <td>{{ rapphim.duration }}</td>
              <td>{{ rapphim.releaseDate }}</td>
              <td>{{ rapphim.description }}</td>
              <td>
                <RouterLink :to="{name: 'detail', params: {id: rapphim.id}}" class="btn btn-info">View</RouterLink>
                <RouterLink :to="{name: 'edit', params: {id: rapphim.id}}" class="btn btn-info">Edit</RouterLink>
                <button class="btn btn-danger" @click="handleDelete(rapphim.id)">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
  </main>
</template>

<script setup>
    import {ref, onMounted } from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    
    const rapphims = ref([])

    const fetchRapPhims = async () => {
      const response = await instanceAxios.get('/rapphims')
      rapphims.value = response.data
    }

    const handleDelete = async (id) => {
      const isConfirm = confirm('Bạn có muốn xóa')
      if(!isConfirm) return
      await instanceAxios.delete(`/rapphims/${id}`)
      fetchRapPhims()
    }

    onMounted(fetchRapPhims)
</script>

<style lang="scss" scoped>

</style>