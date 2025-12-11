<script setup lang="ts">
import type { userRes } from '~~/types/natebooktypes';
import type { user } from '~~/types/natebooktypes';

const user = reactive({
    user_id: 0,
    username: '',
    password: '',
    name_color: '',
})

resetUser();

async function checkAccount(user_id: number, username: string, password: string) {
    return await $fetch('api/checkaccount', {
        method: 'POST',
        body: {
            user_id: user_id,
            username: username,
            password: password,
        }
    });
}

async function handleSubmit() {
    const ures: any = await checkAccount(user.user_id, user.username, user.password);
    console.log(typeof ures.result.rows[0])
    console.log(ures.result.rows[0])
    user.user_id = 0, user.username = '', user.password = '';
    user.user_id = 0, user.name_color = '';

    const currentUser: user = ures.result.rows[0];

    // switch(validateUserValues(user.username, user.password)) {
    //     case -1:
    //         alert("No worky!");
    //         break;
    //     case -2: 
    //         alert("No such account. Lock in maybe.");
    //         break;
    //     case 0:
            
    //         break;
    // }

    logIn(currentUser);
    console.log("WORKY", fetchCurrentUser());

    console.log(ures.result.rows[0], (ures.result.rows[0].name_color + 0x000000));
    user.username = '';
    user.password = '';
    user.name_color = ures.result.rows[0].name_color;

    console.log('Works here');
    navigateTo('/messageboard');
            
}


async function goSignUp() {
    navigateTo('/signup')
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
                <button type="submit" class="loginbtn" @click="handleSubmit">Login</button>
            </div>
            
            <label for="colorPicker">Choose a color:</label>
            <input type="color" id="colorPicker" v-bind:value="user.name_color" />

            <br/> <br/>
            <div class="clearfix">
                <button type="button" class="signupbtn" @click="goSignUp">Sign Up</button>
            </div>
        </div>
    </main>
</template>
<style src="assets/css/app.css" />