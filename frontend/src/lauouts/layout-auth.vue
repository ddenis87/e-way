<template>
    <div class="layout-auth">
        <div class="auth-bar">
            <div class="brand">
                <h3 class="text-h4 font-weight-bold mb-3 mt-3">
                    <span class="text-gradient">e-Way</span>
                    <span class="mx-2 text-grey-lighten-1">|</span>
                    <small class="text-subtitle-1 text-grey-darken-1 font-italic">Попутчик</small>
                </h3>
            </div>
        </div>
        <div class="auth-body">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">

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
            border-bottom: thin solid grey;

            .text-gradient {
                background: linear-gradient(45deg, #1867C0, #5CBBFF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
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