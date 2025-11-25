<template>
    <div>
        <nav class="nav-bar-container">
            <NuxtLink class="nav-bar" to="/">Home</NuxtLink>
            <NuxtLink class="nav-bar" to="/login">Log in</NuxtLink>
            <NuxtLink class="nav-bar" to="/signup">Sign up</NuxtLink>
            <NuxtLink class="nav-bar" to="/messageboard">Board</NuxtLink>
        </nav>
        <slot />
      <footer>
        <h4>© Copyright 200-2025 Nathan & Nathan Attorneys Agenst Law</h4>
      </footer>
    </div>
</template>
<style src="../assets/css/app.css"/>
<script setup lang="ts">
</script>