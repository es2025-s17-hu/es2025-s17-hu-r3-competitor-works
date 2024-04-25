<script setup>
    const props = defineProps(["name", "price", "features"]);
</script>

<template>
    <div class="plan">
        <div class="head">
            <h4>{{ name }}</h4>
            <p>$ <span class="price">{{ price }}</span> per month</p>
            <p><slot/></p>
        </div>
        <ul>
            <li :class="{active: features >= 1}">Real-time sales tracking</li>
            <li :class="{active: features >= 2}">{{ features >= 3 ? "Advanced inventory management" : "Basic inventory management" }}</li>
            <li :class="{active: features >= 4}">Priority phone support</li>
            <li :class="{active: features >= 5}">Multi-location management</li>
        </ul>
        <button class="button">Start free trial</button>
    </div>
</template>
    
<style scoped>
    .plan {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        background-color: white;
        border-radius: var(--radius);
    }

    .head {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
        gap: 2rem;  

        padding: 1rem;

        border: 1px solid gray;
        border-radius: var(--radius);
    }

    p:has(.price) {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    } 

    .price {
        font-size: 3em;
        font-weight: bold;
    }

    p:nth-of-type(2) {
        opacity: 75%;
    }

    ul {
        list-style: none;
        text-align: start;
        height: 100%;
    }

    li {
        margin: 0.3rem 0;
    }

    li:not(.active) {
        opacity: 50%;
    }

    li::before {
        content: "";
        display: inline-block;
        width: 1.5em;
    }

    li.active::before {
        content: "✓";
        color: green;
        font-size: 1.5em;
        width: 1em;
    }

    button {
        border: 1px solid gray;
        border-radius: 2rem;
    }

    .plan:nth-of-type(2) .head {
            background: var(--gradient);
            color: white;
    }

    .plan:nth-of-type(2) button {
            background: var(--gradient);
            color: white;
    }
</style>