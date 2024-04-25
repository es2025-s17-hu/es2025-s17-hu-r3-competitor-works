<script setup>
import { onMounted, ref } from "vue";

    const props = defineProps(["number", "title", "suffix"]);

    const currentNumber = ref(0);

    function IncreaseNumber() {
        if (currentNumber.value < props.number) {
            currentNumber.value = Math.min(Math.floor(currentNumber.value + (props.number * 0.04)), props.number);

            window.requestAnimationFrame(IncreaseNumber);
        }
    }

    onMounted(() => window.requestAnimationFrame(IncreaseNumber));
</script>

<template>
    <div>
        <h4>{{ currentNumber.toLocaleString() }}{{ props.suffix }}</h4>
        <p>{{ props.title }}</p>
    </div>
</template>
    
<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        padding: 2rem;
        width: 100%;

        color: white;
        background-color: var(--color-primary);
        border-radius: var(--radius);
    }

    h4 {
        font-size: 2em;
    }
</style>