<template>
    <h1>Vue {{ version }} + TS + SASS</h1>
    {{ message }}
</template>

<script setup lang="ts">
// TypeScript работает!
import { onMounted, ref } from 'vue'
const apiBaseUrl = import.meta.env.VITE_API_URL;
const version: string = '3.0'
const message = ref('Загрузка...')

onMounted(async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/api/check`)
        const data = await response.json()
        message.value = data.message
    } catch (e) {
        message.value = 'Ошибка связи с API'
    }
})
</script>

<style lang="scss">
// SASS работает!
$color: #42b883;
h1 {
    color: $color;
    &:hover {
        filter: drop-shadow(0 0 2em $color);
    }
}
</style>
