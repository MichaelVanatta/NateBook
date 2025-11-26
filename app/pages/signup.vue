<script setup lang="ts">
    let username: string = "";
    let password: string = "";

    async function createUser() {
        const res = await $fetch('api/createuser', {
            method: 'POST',
            body: {
            username: username,
            password: password,
            },
        })
        username = "";
        password = "";
    }
</script>

<template>
    <main>
        <input type="text" placeholder="Username" v-model="username"/>
        <input type="text" placeholder="Password" v-model="password"/>
        <button @click="createUser">Go</button>
    </main>
</template>