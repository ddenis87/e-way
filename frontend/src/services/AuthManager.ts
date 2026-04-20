import {reactive} from 'vue';

interface AuthState {
    login: string | null;
    isLogin: boolean;
}

const state = reactive<AuthState>({
    login: null,
    isLogin: false,
});

function initialize() {
    const login = window.localStorage.getItem('login');

    if (login?.length) {
        state.login = login;
        state.isLogin = true;
    }
}

function userLogin(value: string) {
    if (value.length) {
        window.localStorage.setItem('login', value);
        state.login = value;
        state.isLogin = true;
    }
}

function userLogout() {
    window.localStorage.removeItem('login');
    state.isLogin = false;
}

export default function useAuthManager() {
    return {
        initialize,
        userLogin,
        userLogout,
        state,
    };
}
