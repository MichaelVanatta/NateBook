<template>
    <main>
        <label>Username: </label><br/>
        <input v-model="username" placeholder="Username"><br/>

        <label>Password: </label><br/>
        <input v-model="password" placeholder="Password"><br/>

        <button @click="checkAccount">Submit</button>
    </main>
</template>


<script setup lang="ts">
import {ref} from "vue";
    
    var username: string;
    var password: string;

    async function checkAccount() {
        const user: any = await $fetch('api/checkaccount', {
            method: 'POST',
            body: {
                username: username,
                password: password
            }

            
        })
        console.log(user.user)
    }
</script>

<style src="assets/css/app.css"/>