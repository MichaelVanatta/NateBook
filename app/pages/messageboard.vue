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
            <textarea name="input" class="posting" placeholder="Add your post following the RULE"/>
            <button class="seb">&#x2b9a</button>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { selectRandomRule } from "~~/server/api/selectrule";
import { User, Message } from "../objects/userMessage";

const rule = selectRandomRule();

const users: User[] = [];
const messages: Message[] = [];
//read from database

const text: string = "";
const u: User = new User(1, "pluh", "ffffff");
//get user ID

messages.forEach(element => {
    const newPost = document.createElement('p');
    var name = users.find(x => x.id == element.userId)?.username
    newPost.textContent = name + element.text
  });

async function addMEssage() {

//var message: Message = u.addPost(Id, text)
//messages.push(message)
}
</script>
