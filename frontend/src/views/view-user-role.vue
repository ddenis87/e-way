<template>
    <div class="view-entry pt-10">
        <h3 class="mb-0">
            Укажите тип аккаунта:
        </h3>
        <v-btn
            variant="elevated"
            size="large"
            prepend-icon="mdi-car-back"
            color="success"
        >
            Веду машину
        </v-btn>
        <v-btn
            variant="outlined"
            size="large"
            prepend-icon="mdi-seat-passenger"
        >
            Ищу попутку
        </v-btn>

        <c-help-block icon="mdi-help-circle-outline">
            Тип аккаунта может быть изменен в любое время
        </c-help-block>
    </div>
</template>

<script setup lang="ts">

    import CHelpBlock from "../components/c-help-block.vue";
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