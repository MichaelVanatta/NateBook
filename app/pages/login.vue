<script setup lang="ts">
import type { userRes } from '~~/types/natebooktypes';
import type { colorRes } from '~~/types/natebooktypes';
import type { user } from '~~/types/natebooktypes';

const user = reactive({
    id: 0,
    username: '',
    password: '',
    nameColor: ''
})

async function checkAccount(id: number, username: string, password: string): Promise<userRes> {
    return await $fetch('api/checkaccount', {
        method: 'POST',
        body: {
            id: id,
            username: username,
            password: password
        }
    });
}

async function addColor(userId: number, nameColor: string): Promise<colorRes> {
    return await $fetch('api/setcolor', {
        method: 'POST',
        body: {
            userId: userId,
            nameColor: nameColor
        }
    })
}

async function handleSubmit() {
    const ures: userRes = await checkAccount(user.id, user.username, user.password);
    console.log(ures.result.rows[0])
    user.id = 0, user.username = '', user.password = '';

    const cres: colorRes = await addColor(user.id, user.nameColor);
    console.log(cres.result.rows[0])
    user.id = 0, user.nameColor = '';

    const currentUser: user = ures.result.rows[0];

    logIn(currentUser);
    console.log("WORKY", fetchCurrentUser());

    console.log(ures.result.rows[0], (ures.result.rows[0].name_color + 0x000000));
    user.username = '';
    user.password = '';
    user.nameColor = ures.result.rows[0].name_color;
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

            <label for="colorPicker">Choose a color:</label>
            <input type="color" id="colorPicker" v-bind:value="user.nameColor" />
        </div>
    </main>
</template>
<style src="assets/css/app.css" />