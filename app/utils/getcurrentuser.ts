import type { user } from '../../types/natebooktypes'

export function logIn(user: user): void {
        //deleteCookie("current user");
        const cookie = useCookie("current-user", {
            default: () => ({
                user_id: user.user_id,
                username: user.username,
                password: user.password,
                name_color: user.name_color,
            }),
            maxAge: 86400,
            secure: true,
            sameSite: true,
        });
        console.log(toRaw(useCookie("current user").value));
    }

export function fetchCurrentUser(): any {
    console.log(useCookie("current-user").value);
    return toRaw(useCookie("current-user").value);
}