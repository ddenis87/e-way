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
                @click="confirm"
            />
        </div>
        <v-dialog
            v-model="showConfirm"
            persistent
        >
            <v-card>
                <template #title>
                    <v-icon
                        icon="mdi-alert-circle-outline"
                        color="warning"
                        class="me-2"
                    />
                    Выйти?
                </template>

                <template #text>
                    После выхода будут удалены все ваши маршруты и поездки. Пользователи не будут видеть вас в списке маршрутов и пассажиров.
                </template>

                <template #actions>
                    <v-spacer />

                    <v-btn @click="logout">
                        Выйти
                    </v-btn>

                    <v-btn @click="showConfirm = false">
                        Остаться
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import routers from '../plugins/routers.ts';
    import useAuthManager from '../services/AuthManager.ts';
    import useNavigationManager from '../services/NavigationManager.ts';

    const {state, userLogout} = useAuthManager();
    const {NAV_LOGIN} = useNavigationManager();
    const showConfirm = ref(false);

    const confirm = () => {
        showConfirm.value = true;
    };

    const logout = () => {
        showConfirm.value = false;

        userLogout();

        routers.replace({ name: NAV_LOGIN });
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