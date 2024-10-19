<template>
    <div v-if="rapphim">
        <h2>Chi tiết Phim</h2>
        <p>Id: {{ rapphim.id }}</p>
        <p>Tiêu Đề: {{ rapphim.title }}</p>
        <p>Thể Loại: {{ rapphim.genre }}</p>
        <p>Thời Lượng: {{ rapphim.duration }}</p>
        <p>Ngày phát hành: {{ rapphim.releaseDate }}</p>
        <p>Mô tả: {{ rapphim.description }}</p>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const rapphim = ref([])

    const fetchRapPhim = async () => {
        const response = await instanceAxios.get(`/rapphims/${route.params.id}`)
        rapphim.value = response.data
    }

    onMounted(fetchRapPhim)
</script>

<style lang="scss" scoped>

</style>