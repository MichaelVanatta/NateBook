<!--"npm run dev" to run page-->

<template>
  <div class="main_board">
  <header>
    <h1 class="rule"> Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule Test rule</h1>
  </header>
  <div>
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
  </div>
  <footer>
    <p name="input" class="posting">
      Here is a concise post crafted to be exactly two hundred characters long, giving you a clear, simple message that is useful, readable, and neatly contained within the limit Enjoy this extra note here!
    </p>
    <UButton icon="send-button.png" loading-auto @click="readInput" />
  </footer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {User} from "../objects/userPost"
const users = ref<User[]>([])
//read from database



async function readInput() {

}
</script>