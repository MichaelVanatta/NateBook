<script setup lang="ts">
import type { user, userRes } from '~~/types/natebooktypes';
import { logIn, fetchCurrentUser } from '../utils/getcurrentuser';

    const user = reactive({
        username: '',
        password: '',
        name_color: 0x00ff00,
    })
    
    async function checkAccount(username: string, password: string, name_color: number): Promise<userRes> {
        return await $fetch('api/checkaccount', {
            method: 'POST',
            body: {
                username: username,
                password: password,
                name_color: name_color,
            }
        });
    }

    async function handleSubmit(){
        const res:userRes = await checkAccount(user.username, user.password, user.name_color);

        const currentUser: user = res.result.rows[0];

        logIn(currentUser);
        console.log("WORKY", fetchCurrentUser()); 

        console.log(res.result.rows[0], (res.result.rows[0].name_color + 0x000000));
        user.username = '';
        user.password = '';
        user.name_color = res.result.rows[0].name_color;
    }
</script>
    
<template>
<main class="login_signUp">
    <div class="container">
        <h1>Login Now</h1>


        <label for="name"><b>UserName</b></label> <br>
<<<<<<< HEAD
        <input class="putin" v-model="user.username" placeholder="Enter UserName" name="name" required> <br>


        <label for="psw-repeat"><b> Password</b></label> <br>
        <input class="putin" v-model="user.password" placeholder="Enter Password" name="psw" required>

        <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="loginbtn" @click="handleSubmit">Login</button>
        </div>
      <label for="colorPicker">Choose a color:</label>
      <input type="color" id="colorPicker" v-bind:value="user.name_color">
=======
        <input v-model="username" placeholder="Enter UserName" name="name" required> <br>


        <label for="psw-repeat"><b> Password</b></label> <br>
        <input v-model="password" placeholder="Enter Password" name="psw" required>

        <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="loginbtn" @click="checkAccount">login</button>
            <!-- <button @click="displayInfo">Submit</button> -->
        </div>
>>>>>>> d7dc93e (Fixed signup and login)
    </div>
</main>
</template>
<style src="assets/css/app.css"/>
