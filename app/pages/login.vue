<script setup lang="ts">
import type { userRes } from '~~/types/natebooktypes';
import type { colorRes } from '~~/types/natebooktypes';

const user = reactive({
    id: 0,
    username: '',
    password: '',
    nameColor: 0
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

    const cres: colorRes = await addColor(user.id, user.nameColor.toString());
    console.log(cres.result.rows[0])
    user.id = 0, user.nameColor = 0;
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
            <input name="colorPicker" type="color" id="colorPicker" value="#ff0000">
        </div>
    </main>
</template>
<style src="assets/css/app.css" />