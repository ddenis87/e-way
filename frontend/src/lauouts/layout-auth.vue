<template>
    <div class="layout-auth">
        <div class="auth-bar">
            <top-bar />
        </div>
        <div class="auth-body">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
    import TopBar from "../components/top-bar.vue";

</script>

<style scoped lang="scss">
    .layout-auth {
        display: grid;
        grid-template-areas: "auth-bar" "auth-body";
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto;
        margin: 0 auto;
        max-width: 100wv;
        width: 100%;
        height: 100vh;

        .auth-bar {
            grid-area: auth-bar;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0px 18px;
            border-bottom: thin solid lightgray;
        }

        .auth-body {
            grid-area: auth-body;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 18px 18px 0 18px;
        }
    }
</style>