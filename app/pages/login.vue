<script setup lang="ts">
import type { userRes } from '~~/types/natebooktypes';

    const user = reactive({
        username: '',
        password: '',
    })
    
    async function checkAccount(username: string, password: string): Promise<userRes> {
        return await $fetch('api/checkaccount', {
            method: 'POST',
            body: {
                username: username,
                password: password
            }
        });
    }

    async function handleSubmit(){
        const res:userRes = await checkAccount(user.username, user.password);
        console.log(res.result.rows[0])
        user.username = '', user.password = '';
    }

</script>
    
<template>
<main class="login_signUp">
    <div class="container">
        <h1>Login Now</h1>


        <label for="name"><b>UserName</b></label> <br>
        <input class="putin" v-model="user.username" placeholder="Enter UserName" name="name" required> <br>


        <label for="psw-repeat"><b> Password</b></label> <br>
        <input class="putin" v-model="user.password" placeholder="Enter Password" name="psw" required>

        <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="loginbtn" @click="handleSubmit">Login</button>
        </div>
    </div>
</main>
</template>
<style src="assets/css/app.css"/>
