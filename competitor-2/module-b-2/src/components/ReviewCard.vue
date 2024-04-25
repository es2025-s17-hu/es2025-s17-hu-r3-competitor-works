<script setup>
    const props = defineProps(["name", "place"]);
</script>

<template>
    <div>
        <img src="/img/quote.svg" alt="Quote icon">
        <p><slot/></p>
        <h4>{{ name }}</h4>
        <p>{{ place }}</p>
    </div>
</template>
    
<style scoped>
    div {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        width: 100%;

        position: relative;
        background-color: white;
        border-radius: var(--radius);
        padding: 2rem 4rem;
    }

    img {
        width: 16px;
        height: 16px;

        position: absolute;
        top: 24px;
        left: 24px;
    }

    h4 {
        margin-top: 1rem;
    }

    h4+p {
        opacity: 50%;
    }
</style>