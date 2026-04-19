<template>
    <div class="view-auth">
            <h3>Представтесь:</h3>
            <v-text-field label="Логин" />
            <v-btn @click="onAuth">
                Продолжить
            </v-btn>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const onAuth = () => {
    router.push('./entry');
};
</script>

<style scoped lang="scss">
    .view-auth {
        display: flex;
        flex-direction: column;
        width: 100%;

        h3 {
            color: #2ab728;
        }
    }
</style>