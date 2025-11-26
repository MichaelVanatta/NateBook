<template>
    <main class="login_signUp">
      <form action="action_page.php" >
        <div class="container">
          <h1>Sign Up Now</h1>
          <p>Fill in this form to join the board.</p>
          <hr>

          <label for="name"><b>UserName</b></label> <br>
          <input type="text" placeholder="Enter UserName" name="name" required> <br>


          <label for="psw-repeat"><b> Password</b></label> <br>
          <input type="password" placeholder="Enter Password" name="psw" required>

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </main>
</template>
<script setup lang="ts">

</script>