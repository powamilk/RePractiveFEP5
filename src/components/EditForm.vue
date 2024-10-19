<template>
    <div>
        <h1>Tạo phim</h1>
        <form @submit.prevent="handleUpdate">
            <div class="form-group" >
                <label for="title" class="form-label">Tiêu Đề</label>
                <input v-model="rapphim.title" type="" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="genre" class="form-label">Thể Loại</label>
                <input v-model="rapphim.genre" type="" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="duration" class="form-label">Thời gian chiếu</label>
                <input v-model="rapphim.duration" type="" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="releaseDate" class="form-label">Ngày Phát Hành</label>
                <input v-model="rapphim.releaseDate" type="date" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="description" class="form-label"></label>
                <input v-model="rapphim.description" type="" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">xác nhận sửa</button>
        </form>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()
    const rapphim = ref({})

    const fetchRapPhim = async () => {
        const response = await instanceAxios.get(`/rapphims/${route.params.id}`)
        rapphim.value = response.data
    }

    const handleUpdate = async () => {
        await instanceAxios.put(`/rapphims/${rapphim.value.id}`, rapphim.value)
        router.push({name: 'home'})
    }
    onMounted(fetchRapPhim)
</script>

<style lang="scss" scoped>

</style>