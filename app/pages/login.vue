<script setup lang="ts">
    //import { User } from '~/objects/userPost';
    //import {LoggedInUser} from '~~/types/natebooktypes'

    const user = reactive({
        username: "",
        password: ""
    })
    
    async function checkAccount(username: string, password: string) {
        return await $fetch('api/checkaccount', {
            method: 'POST',
            body: {
                username: username,
                password: password
            }
        })
    }

    async function handleSubmit(){
        const res:any = await checkAccount(user.username, user.password);
        console.log(res.user.rows[0])
        var temp = res.user.rows[0]
        console.log(temp.userid)
        user.username = "";
        user.password = "";
    }

    // export function getUser(): any{
    //     console.log("GetUser")
    //     return currentUser;
    // }

</script>
    
<template>
<main class="login_signUp">
    <div class="container">
        <h1>Login Now</h1>


        <label for="name"><b>UserName</b></label> <br>
        <input v-model="user.username" placeholder="Enter UserName" name="name" required> <br>


        <label for="psw-repeat"><b> Password</b></label> <br>
        <input v-model="user.password" placeholder="Enter Password" name="psw" required>

        <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="loginbtn" @click="handleSubmit">Login</button>
        </div>
    </div>
</main>
</template>
<style src="assets/css/app.css"/>
