<script setup lang="ts">
    let username: string = "";
    let password: string = "";

    async function createUser() {
        const res = await $fetch('utils/createuser', {
            method: 'POST',
            body: {
            username: username,
            password: password,
            },
        })
        username = "";
        password = "";
    }
</script>

<template>
    <main class="login_signUp">
        <div class="container">
          <h1>Sign Up Now</h1>
          <p>Fill in this form to join the board.</p>
          <hr>

          <label for="name"><b>UserName</b></label> <br>
          <input v-model="username" placeholder="Enter UserName" name="name" required> <br>


          <label for="psw-repeat"><b> Password</b></label> <br>
          <input v-model="password" placeholder="Enter Password" name="psw" required>

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
            <button @click="createUser">Go</button>

          </div>
        </div>
    </main>
</template>