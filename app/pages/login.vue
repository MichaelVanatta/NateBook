<template>
    <main>
        <label>Username: </label><br/>
        <input v-model="username" placeholder="Username"><br/>

        <label>Password: </label><br/>
        <input v-model="password" placeholder="Password"><br/>

        <button @click="displayInfo">Submit</button>

        <p>{{ info }}</p>
    </main>
</template>


<script setup lang="ts">
import {ref} from "vue";
    const {data} = await useFetch('/api/db');
    var username: string;
    var password: string;
    const info = ref('No Account');

    function displayInfo(): void{
        console.log("Username: " + username + " || Password: " + password)
        info.value = "Username: " + username + " || Password: " + password
        console.log(info)
    }
</script>

<style src="assets/css/app.css"/>