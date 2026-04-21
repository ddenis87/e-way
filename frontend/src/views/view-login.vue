<template>
    <div class="view-auth pt-10">
        <h3 class="mb-0">
            Представтесь:
        </h3>
        <v-text-field
            ref="loginFieldRef"
            v-model="login"
            :rules="[v => !!v || 'Поле не может быть пустым.']"
            validate-on="submit"
            label="Имя или логин"
            variant="underlined"
            @keyup.enter="onLogin"
            @input="resetLoginValidate"
        />

        <v-input
            ref="genderFieldRef"
            v-model="gender"
            :rules="[v => !!v || 'Укажите пол.']"
            validate-on="submit"
            class="text-end"
        >
            <div class="d-flex justify-end ga-2 w-100">
                <v-btn
                    variant="tonal"
                    :color="gender === FEMALE ? 'green' : 'blue-grey-lighten-1'"
                    :ripple="false"
                    size="large"
                    density="comfortable"
                    prepend-icon="mdi-gender-female"
                    @click="() => setGender(FEMALE)"
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
                    @click="() => setGender(MALE)"
                >
                    Муж.
                </v-btn>
            </div>
        </v-input>

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
    let loginFieldRef = ref(null);
    let genderFieldRef = ref(null);

    const onLogin = async () => {
        if (!loginFieldRef.value || !genderFieldRef.value) return;

        const validLogin = await loginFieldRef.value.validate();
        const validGender = await genderFieldRef.value.validate();

        if (validLogin && validGender) {
            userLogin(login.value, gender.value);
            navigationReplace(NAV_USER_ROLE);
        }
    };
    const setGender = (value: string) => {
        gender.value = value;
        if (genderFieldRef.value) {
            genderFieldRef.value.resetValidation();
        }
    };
    const resetLoginValidate = () => {
        if (loginFieldRef.value) {
            loginFieldRef.value.resetValidation();
        }
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