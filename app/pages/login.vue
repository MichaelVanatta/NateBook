    
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


<script setup lang="ts">
import {ref} from "vue";
    const {data} = await useFetch('/api/db');
    var username: string;
    var password: string;
    const info = ref('No Account');

    function displayInfo(): void{
        console.log("Username: " + username + " || Password: " + password)
        info.value = "Username: " + username + " || Password: " + password
        console.log(info)
    }
</script>

<style src="assets/css/app.css"/>
