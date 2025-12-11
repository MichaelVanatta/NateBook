<!--"npm run dev" to run page-->

<template>
  <div class="main_board">
    <header>
      <h1 class="rule">{{ rule }}</h1>
    </header>
    <div>
      <p class="posted">
        Here is a concise post crafted to be exactly two hundred
        characters long, giving you a clear, simple message that is
        useful, readable, and neatly contained within the limit Enjoy
        this extra note here!
      </p>
      <p>test</p>
      <div v-for="(m) in messages">
        <p class="posted">{{ m.text }}</p>
      </div>
    </div>
  </div>
  <div>
    <footer>
      <input name="input" class="posting" placeholder="Add your post following the RULE" v-model="post.text"/>
      <button class="seb" @click="postMessage">&#x2b9a</button>
    </footer>
  </div>
</template>
<script setup lang="ts">
import type { user, userRes, message, messageRes } from "~~/types/natebooktypes";
import { selectRandomRule } from "~~/server/api/selectrule";
import { enforceRule } from "~~/server/api/selectrule";
import { fetchCurrentUser } from "~/utils/getcurrentuser";

const post = reactive({
    text: '',
});

const rule = await selectRandomRule();

var users: user[] = [];
let messages: message[] = (await $fetch('/api/fetchallmessages')).result.rows;
const currentUser: user = await fetchCurrentUser();

async function createMessage(user_id: number, text: string) {
  return await $fetch('api/createmessage', {
    method: 'POST',
    body: {
      user_id: user_id,
      text: text
    }
  });
}

async function postMessage() {
  var res = await enforceRule(post.text,rule);
  if (res) {
    killUser(currentUser);
    navigateTo('/login');
  }
  else {
    await createMessage(currentUser.user_id, post.text);
    messages.push({
      post_id: NaN,
      user_id: currentUser.user_id,
      text: post.text,
    });
    messages = (await $fetch('/api/fetchallmessages')).result.rows;
    post.text = '';
  }
}

async function killUser(user: user) {
  return $fetch('/api/deleteuser', {
  method: "POST",
  user: {
    username: user.username,
    password: user.password,
  }
  });
}

async function getUsers(): Promise<user[]> {
  const fetchedUsers: any= await $fetch('api/getallusers');

  return fetchedUsers.result.rows;
}
</script>