<template>
    <div class="view-auth">
        <h3 class="mb-2">
            Представтесь:
        </h3>
        <v-text-field
            v-model="login"
            label="Логин"
            @keyup.enter="onLogin"
        />
        <v-btn @click="onLogin">
            Продолжить 
        </v-btn>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import useAuthManager from "../services/AuthManager.ts";

    const router = useRouter();
    const {userLogin} = useAuthManager();
    const login = ref('');

    const onLogin = () => {
        userLogin(login.value);
        router.push({ name: 'user-role' });
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