import {reactive} from 'vue';

interface AuthState {
    login: string | null;
    isLogin: boolean;
    gender: string|null;
    userRole: string|null;
}

const state = reactive<AuthState>({
    login: null,
    isLogin: false,
    gender: null,
    userRole: null,
});

function initialize() {
    const login = window.localStorage.getItem('login');
    const gender = window.localStorage.getItem('gender');
    const userRole = window.localStorage.getItem('userRole');

    if (login?.length) {
        state.login = login;
        state.gender = gender;
        state.userRole = userRole;
        state.isLogin = true;

    }
}

function userLogin(login: string, gender: string) {
    if (login.length) {
        window.localStorage.setItem('login', login);
        window.localStorage.setItem('gender', gender);
        state.login = login;
        state.gender = gender;
        state.isLogin = true;
    }
}

function userRole(userRole: string) {
    state.userRole = userRole;
    window.localStorage.setItem('userRole', userRole);
}

function userLogout() {
    window.localStorage.removeItem('login');
    window.localStorage.removeItem('gender');
    window.localStorage.removeItem('userRole');
    state.isLogin = false;
}

export default function useAuthManager() {
    return {
        initialize,
        userLogin,
        userRole,
        userLogout,
        state,
    };
}
