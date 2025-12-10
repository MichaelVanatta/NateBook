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
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
      <p class="posted">test</p>
    </div>
  </div>
  <div>
    <footer>
      <input name="input" class="posting" placeholder="Add your post following the RULE" />
      <button class="seb" @click="addMessage">&#x2b9a</button>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { selectRandomRule } from "~~/server/api/selectrule";
import { User, Message } from "../objects/userMessage";
import type { user, userRes } from "~~/types/natebooktypes";
import { fetchCurrentUser } from "~/utils/getcurrentuser";

const rule = await selectRandomRule();

var users: User[] = [];
const messages: Message[] = [];
//read from database
let text: string = "";
var u: User = await fetchCurrentUser();
//get user ID

async function createMessage(id: number, userId: number | null, text: string) {
  return await $fetch('api/createmessage', {
    method: 'POST',
    body: {
      id: id,
      userId: userId,
      text: text
    }
  })
}

async function getUsers(): Promise<user[]> {
  const fetchedUsers: userRes = await $fetch('api/getallusers');

  return fetchedUsers.result.rows;
}

var newUsers: user[] = [];
getUsers().then(result => newUsers = result);

newUsers.forEach(element => {
  users.push(new User(element.user_id, element.username, element.name_color))
})

messages.forEach(element => {
  const newMessage = document.createElement('div');
  const name = document.createElement('h2');
  const text = document.createElement('p');
  name.textContent ?? users.find(x => x.id == element.userId)?.username
  name.style = 'color="${users.find(x => x.id == element.userId)?.username?fd}"';
  text.textContent ?? messages.find(x => x.userId == element.userId)?.text
  newMessage.appendChild(name);
  newMessage.appendChild(text);
})

async function addMessage() {
  var message = u.addMessage(messages.length, text)
  const res: any = await createMessage(message.id, message.userId, message.text);
  console.log(res.message)

  message.id = 0;
  message.userId = 0;
  message.text = "";

  messages.push(message)
}
</script>