<template>
    <v-app>
        <component :is="layout">
            <router-view />
        </component>
    </v-app>
</template>

<script setup lang="ts">
    import {computed, type Component} from 'vue';
    import {useRoute} from "vue-router";
    import LayoutAuth from "./lauouts/layout-auth.vue";

    const route = useRoute()

    const layouts: Record<string, Component> = {
        LayoutAuth,
    };

    const layout = computed(() => {
        const layout = route.meta.layout as string
        return layouts[layout] || LayoutAuth;
    });
</script>

<style lang="scss">
</style>
