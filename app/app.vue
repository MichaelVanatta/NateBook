<!--"npm run dev" to run page-->
<style>
@import url('https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap');
.rule {
  font-family: "Eagle Lake", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  color: red;
  text-align: center;
  background-image: url("~/img/oldPaper.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 400px;
  position: fixed;

}
.main_board {
  background-image: url("~/img/doom_background.jpg");
  background-repeat: repeat-y;
  background-size: 1725px;
  background-position: center center;
  margin: 0;
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding: 20px;
  background-color: #552206;
}
.posted {
  text-align: left;
  font-size: 35px;
  background-image: url("~/img/posted_paper.png");
  background-repeat: repeat-y;
  background-size: 50% 100%;
  padding: 15px 25%;
  background-position: center center;
  overflow-y: auto;
  position: relative;
}
.posting{
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  color: red;
  text-align: center;
  background-image: url("~/img/post_paper.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 400px;
  position: fixed;
}
</style>

<template>
  <header>
    <h1 class="rule"> Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule</h1>
  </header>
  <body class="main_board">
  <p class="posted">
    Here is a concise post crafted to be exactly two hundred characters long, giving you a clear, simple message that is useful, readable, and neatly contained within the limit Enjoy this extra note here!  </p>
  <p class="posted">
    test
  </p>
  <p class="posted">
    test
  </p><p class="posted">
    test
  </p>
  <p class="posted">
    test
  </p>
  <p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p><p class="posted">
    test
  </p>
  </body>
  <footer>
    <p class="posting">    Here is a concise post crafted to be exactly two hundred characters long, giving you a clear, simple message that is useful, readable, and neatly contained within the limit Enjoy this extra note here!  </p>

  </footer>
</template>
<script setup lang="ts">
</script>