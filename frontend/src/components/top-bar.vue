<template>
    <div class="top-bar">
        <div class="bar-brand">
            <h3 class="text-h4 font-weight-bold mb-3 mt-3">
                <span class="text-gradient">e-Way</span>
                <span class="mx-2 text-grey-lighten-1">|</span>
                <small class="text-subtitle-1 text-grey-darken-1 font-italic">Попутчик</small>
            </h3>
        </div>
        <div
            v-if="state.isLogin"
            class="bar-avatar"
        >
            <span>{{ state.login }}</span>
            <v-btn
                variant="plain"
                icon="mdi-logout"
                @click="logout"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import routers from "../plugins/routers.ts";
    import useAuthManager from "../services/AuthManager.ts";

    const {state, userLogout} = useAuthManager();

    const logout = () => {
        userLogout();
        routers.push({ name: 'login' });
    };
</script>

<style scoped lang="scss">
.top-bar {
    display: flex;
    gap: 18px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .bar-brand {
        .text-gradient {
            background: linear-gradient(45deg, #1867C0, #5CBBFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .bar-avatar {
        display: flex;
        align-items: center;
        gap: 12px;
    }
}
</style>