<template>
    <div class="view-entry">
        <h3 class="mb-0">
            Укажите тип аккаунта:
        </h3>
        <v-btn
            variant="elevated"
            prepend-icon="mdi-car-back"
            color="success"
        >
            Веду машину
        </v-btn>
        <v-btn
            variant="outlined"
            prepend-icon="mdi-seat-passenger"
        >
            Ищу машину
        </v-btn>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .view-entry {
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 100%;

        h3 {
            color: #2ab728;
        }
    }
</style>