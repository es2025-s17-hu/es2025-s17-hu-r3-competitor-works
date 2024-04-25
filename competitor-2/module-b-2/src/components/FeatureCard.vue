<script setup>
    const props = defineProps(["icon", "title"]);
</script>

<template>
    <div>
        <img :src="icon" :alt="title">
        <h2>{{ title }}</h2>
        <p><slot/></p>
        <a href="#">Know more →</a>
    </div>
</template>
    
<style scoped>
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    img {
        width: 32px;
    }

    a {
        font-weight: bold;
    }
</style>