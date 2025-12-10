import type { User } from "../objects/userMessage"

export default defineNuxtPlugin((nuxtApp) => {
    const currentUser: User = {
        id: 0,
        username: "",
        nameColor: "ffffff",
        messages: [],
    }

    nuxtApp.provide('myGlobal', currentUser);
})