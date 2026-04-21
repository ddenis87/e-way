import useAuthManager from './AuthManager';
import type {Router} from 'vue-router';

const NAV_LOGIN = 'login';
const NAV_USER_ROLE = 'user-role';

const { state: stateAuth } = useAuthManager();
let router: Router|null = null;

function initialize(r: Router) {
    router = r;

    router.beforeEach((to, _, next) => {
        if (to.name !== NAV_LOGIN && !stateAuth.isLogin) {
            // Если не авторизован и идет не на страницу логина — на логин
            next({ name: NAV_LOGIN });
        } else if (to.name === NAV_LOGIN && stateAuth.isLogin) {
            // Если авторизован и идет на страницу логина — на главную
            next({ name: NAV_USER_ROLE });
        } else {
            next(); // В остальных случаях просто пропускаем
        }
    });
}

function navigationReplace(to: string) {
    // @ts-expect-error: router может быть null, но мы гарантируем, что initialize будет вызван до этого метода
    router.replace({name: to});
}

export default function useNavigationManager() {
    return {
        initialize,
        navigationReplace,
        NAV_LOGIN,
        NAV_USER_ROLE,
    };
}