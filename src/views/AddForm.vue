<template>
    <div>
        <h1>Tạo phim</h1>
        <form @submit.prevent="handleSubmit">
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
            <button type="submit" class="btn btn-primary">xác nhận thêm</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import instanceAxios from '@/ultis/configAxios';
    import { useRouter } from 'vue-router';

    const rapphim = ref({
        title: '',
        genre: '',
        duration: '',
        releaseDate: '',
        description: ''
    })

    const router = useRouter()

    const handleSubmit = async () => {
        await instanceAxios.post('/rapphims', rapphim.value)
        router.push({name: 'home'})
    }
</script>

<style lang="scss" scoped>

</style>