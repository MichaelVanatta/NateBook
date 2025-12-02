<script setup lang="ts">
    const {data} = await useFetch('/api/db');
    import { selectRandomRule } from '~~/server/api/selectrule';
    const rule = selectRandomRule();
</script>

<template>
    <main>
        Hog Tuah
        <!-- {{ data }} -->
        {{ rule }}
    </main>
</template>

<style src="assets/css/app.css"/>
<script setup lang="ts">
</script>