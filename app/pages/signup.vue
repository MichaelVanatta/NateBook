<script setup lang="ts">
import { validateUserValues, validateUserNotExists } from '../utils/inputvalidation';

const user = reactive({
    username: '',
    password: '',
    name_color: 0x00ff00,
});

async function createUser(username: string, password: string, name_color: number) {
    return await $fetch("api/createuser", {
        method: "POST",
        body: {
            username: username,
            password: password,
            name_color: name_color,
        },
    });
}

async function handleSubmit() {
    if ((await validateUserNotExists(user.username, user.password)) == false) {
        switch(validateUserValues(user.username, user.password)) {
        case 0:
            const res = await createUser(user.username, user.password, user.name_color);
            //console.log(res);
            user.username = '', user.password = '', user.name_color = 0xffffff;
            navigateTo('/login')
            break;
        case -1:
            alert("Enter a valid username!");
            break;
        case -2:
            alert("Enter a valid password!");
            break;
        }   
    }
    else {
        alert("Username Taken");
    }
}

async function goLogin() {
    navigateTo('/login')
}
</script>

<template>
    <main class="login_signUp">
        <div class="container">
            <h1>Sign Up Now</h1>
            <p>Fill in this form to join the board.</p>
            <hr />

          <label for="name"><b>Username</b></label> <br>
          <input class="putin" v-model="user.username" placeholder="Enter UserName" name="name" required> <br>


          <label for="psw-repeat"><b>Password</b></label> <br>
          <input class="putin" v-model="user.password" placeholder="Enter Password" name="psw" required>

          <div class="clearfix">
            <button type="button" class="cancelbtn" @click="goLogin">Cancel</button>
            <button type="button" class="signupbtn" @click="handleSubmit">Sign Up</button>
          </div>
          <label for="colorPicker">Choose a color:</label>
          <input type="color" id="colorPicker" v-bind:value="user.name_color">
        </div>
    </main>
</template>
