<script setup lang="ts">
import {ref} from "vue";
    
    var username: string;
    var password: string;

    async function checkAccount() {
        const user: any = await $fetch('api/checkaccount', {
            method: 'POST',
            body: {
                username: username,
                password: password
            }
        })
        console.log(user.user)
    }
</script>
    
<template>
<main class="login_signUp">
      <form action="action_page.php" >
        <div class="container">
          <h1>Login Now</h1>


          <label for="name"><b>UserName</b></label> <br>
          <input v-model="username" placeholder="Enter UserName" name="name" required> <br>


          <label for="psw-repeat"><b> Password</b></label> <br>
          <input v-model="password" placeholder="Enter Password" name="psw" required>

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="loginbtn">login</button>
            <button @click="displayInfo">Submit</button>

        <p>{{ info }}</p>
          </div>
        </div>
      </form>
</main>
</template>
<style src="assets/css/app.css"/>
