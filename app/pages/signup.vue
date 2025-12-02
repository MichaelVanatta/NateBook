<script setup lang="ts">
    const user = reactive({
        username: '',
        password: '',
    });

    async function createUser(username: string, password: string) {
        return await $fetch('api/createuser', {
            method: 'POST',
            body: {
                username: username,
                password: password,
            }
        });
    }

    async function handleSubmit() {
        const res:any = await createUser(user.username, user.password);
        console.log(res.user);
        user.username = '';
        user.password = '';
    }
</script>

<template>
    <main class="login_signUp">
        <div class="container">
          <h1>Sign Up Now</h1>
          <p>Fill in this form to join the board.</p>
          <hr>

          <label for="name"><b>Username</b></label> <br>
          <input v-model="user.username" placeholder="Enter UserName" name="name" required> <br>


          <label for="psw-repeat"><b>Password</b></label> <br>
          <input v-model="user.password" placeholder="Enter Password" name="psw" required>

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="button" class="signupbtn" @click="handleSubmit">Sign Up</button>
          </div>
        </div>
    </main>
</template>