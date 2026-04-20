import {useRouter} from 'vue-router';
import useAuthManager from './AuthManager';

const { state: stateAuth } = useAuthManager();

function initialize() {
    const router = useRouter();

    router.beforeEach((to, _, next) => {
        if (to.name !== 'login' && !stateAuth.isLogin) {
            // Если не авторизован и идет не на страницу логина — на логин
            next({ name: 'login' });
        } else if (to.name === 'login' && stateAuth.isLogin) {
            // Если авторизован и идет на страницу логина — на главную
            next({ name: 'user-role' });
        } else {
            next(); // В остальных случаях просто пропускаем
        }
    });
}
export default function useNavigationManager() {
    return {
        initialize,
    };
}