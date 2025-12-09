<!--"npm run dev" to run page-->

<template>
  <div class="main_board">
    <header>
      <h1 class="rule"> {{ rule }} </h1>
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
      <input name="input" class="posting" placeholder="Add your post following the RULE">
        <!-- <button @click="readInput">Post</button> -->
      </input>
      
    </footer>
  </div>
</template>
<script setup lang="ts">
  import { printRandomRule } from '~~/server/api/selectrule';
  const rule = printRandomRule();

  import {User} from "../objects/userPost"
  import {Post} from "../objects/userPost"
  const users: User[] = []
  const posts: Post[] = []
  //read from database

  let text: string = "";

  //import { loggedUser } from '~~/server/api/checkaccount.post';
  //console.log(loggedUser.password);

  //get user ID

  //users.push(user.value)

  posts.forEach(element => {
    const newPost = document.createElement('p');
    var name = users.find(x => x.id == element.userId)?.username
    newPost.textContent = name + element.text
  });

  // async function readInput() {
  //   var post: Post = new Post(text, user.value)
  //   posts.push(post)
  // }
</script>