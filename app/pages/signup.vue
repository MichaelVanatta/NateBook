<script setup lang="ts">
import { validateUserValues, validateUserNotExists } from '../utils/inputvalidation';

const user = reactive({
    username: '',
    password: '',
});

async function createUser(username: string, password: string) {
    return await $fetch("api/createuser", {
        method: "POST",
        body: {
            username: username,
            password: password,
        },
    });
}

async function handleSubmit() {
    if ((await validateUserNotExists(user.username, user.password)) == false) {
        switch(validateUserValues(user.username, user.password)) {
        case 0:
            const res = await createUser(user.username, user.password);
            console.log(res);
            user.username = '', user.password = '';
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
</script>

<template>
    <main class="login_signUp">
        <div class="container">
            <h1>Sign Up Now</h1>
            <p>Fill in this form to join the board.</p>
            <hr />

          <label for="name"><b>Username</b></label> <br>
          <input class="putin" v-model="user.username" placeholder="Enter UserName" name="name" required> <br>

            <label for="psw-repeat"><b>Password</b></label> <br />
            <input
                v-model="user.password"
                placeholder="Enter Password"
                name="psw"
                required
            />

          <label for="psw-repeat"><b>Password</b></label> <br>
          <input class="putin" v-model="user.password" placeholder="Enter Password" name="psw" required>

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="button" class="signupbtn" @click="handleSubmit">Sign Up</button>
          </div>
        </div>
    </main>
</template>
