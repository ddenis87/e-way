<template>
    <v-app>
        <component :is="layout">
            <router-view />
        </component>
    </v-app>
</template>

<script setup lang="ts">
    import {computed, type Component} from 'vue';
    import {useRoute, useRouter} from "vue-router";
    import LayoutAuth from './lauouts/layout-auth.vue'
    import useAuthManager from "./services/AuthManager.ts";
    import useNavigationManager from "./services/NavigationManager.ts";

    const route = useRoute();
    const router = useRouter();

    const {initialize: initializeAuthManager} = useAuthManager();
    const {initialize: initializeNavigationManager} = useNavigationManager();

    initializeAuthManager();
    initializeNavigationManager(router);

    const layouts: Record<string, Component> = {
        LayoutAuth,
    };

    const layout = computed(() => {
        const layout = route.meta.layout as string;
        return layouts[layout] || LayoutAuth;
    });
</script>

<style lang="scss">
@media screen and (min-width: 450px) {
    #app {
        max-width: 450px;
        margin: 0 auto;
    }
}

</style>
