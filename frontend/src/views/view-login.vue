<template>
    <div class="view-auth pt-10">
        <h3 class="mb-0">
            Представтесь:
        </h3>
        <v-text-field
            v-model="login"
            label="Имя или логин"
            variant="underlined"
            @keyup.enter="onLogin"
        />
        <div class="d-flex justify-end ga-2">
            <v-btn
                variant="tonal"
                :color="gender === FEMALE ? 'green' : 'blue-grey-lighten-1'"
                :ripple="false"
                size="large"
                density="comfortable"
                prepend-icon="mdi-gender-female"
                @click="() => gender = FEMALE"
            >
                Жен.
            </v-btn>
            <v-btn
                variant="tonal"
                :color="gender === MALE ? 'green' : 'blue-grey-lighten-1'"
                :ripple="false"
                size="large"
                density="comfortable"
                prepend-icon="mdi-gender-male"
                @click="() => gender = MALE"
            >
                Муж.
            </v-btn>
        </div>
        <v-btn
            size="large"
            @click="onLogin"
        >
            Продолжить 
        </v-btn>

        <c-help-block icon="mdi-help-circle-outline">
            Логин может быть изменен в любое время
        </c-help-block>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import useAuthManager from "../services/AuthManager.ts";
    import CHelpBlock from "../components/c-help-block.vue";
    import useNavigationManager from "../services/NavigationManager.ts";
    import {FEMALE, MALE} from "../enums/gender.ts";

    const {navigationReplace, NAV_USER_ROLE} = useNavigationManager();
    const {userLogin} = useAuthManager();
    const login = ref('');
    let gender = ref('');

    const onLogin = () => {
        userLogin(login.value, gender.value);
        navigationReplace(NAV_USER_ROLE);
    };
</script>

<style scoped lang="scss">
    .view-auth {
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 100%;

        h3 {
            color: #4CAF50;
        }
    }
</style>