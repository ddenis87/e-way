<template>
    <div class="view-auth">
        Представтесь:
        <input type="text" />
        <v-btn @click="onAuth">
            ->
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

</style>