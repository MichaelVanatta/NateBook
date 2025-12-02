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
        Here is a concise post crafted to be exactly two hundred characters long, giving you a clear, simple message that is useful, readable, and neatly contained within the limit Enjoy this extra note here!
      </input>
      <UButton icon="send-button.png" loading-auto @click="readInput" />
    </footer>
  </div>
</template>
<script setup lang="ts">
  import { selectRandomRule } from '~~/server/api/selectrule';
  const rule = selectRandomRule();

  import {User} from "../objects/userPost"
  import {Post} from "../objects/userPost"
  const users: User[] = []
  const posts: Post[] = []
  //read from database

  let text: string = "";
  var u: User = new User(1, "pluh", "ffffff")
  //get user ID

  users.push(u)

  posts.forEach(element => {
    const newPost = document.createElement('p');
    var name = users.find(x => x.id == element.userId)?.username
    newPost.textContent = name + element.text
  });

  async function readInput() {
    var post: Post = new Post(text, u.id)
    posts.push(post)
  }
</script>