<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script setup lang="ts">
// TypeScript работает!
import {computed} from 'vue';
import {useRoute} from "vue-router";
import LayoutAuth from "./lauouts/layout-auth.vue";

const route = useRoute()
const layouts = {
    LayoutAuth,
}

const layout = computed(() => {
    return layouts[route.meta.layout] || LayoutAuth;
});

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
