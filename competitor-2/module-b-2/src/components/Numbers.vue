<script setup>
    import NumberTicker from "./NumberTicker.vue";
</script>

<template>
    <div id="numbers">
        <h1>DineEase by the Numbers</h1>
        <p>Our achievement in the journey depicted in numbers</p>
        <div class="boxes">
            <number-ticker number=2531 title="Customers" suffix="+" />
            <number-ticker number=1235764 title="Transactions monthly" suffix="" />
            <number-ticker number=98 title="Customer Satisfaction" suffix="%" />
            <number-ticker number=25 title="Awards Won" suffix="" />
        </div>
    </div>
</template>
    
<style scoped>
    #numbers {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        background-color: var(--color-primary-light);
        color: white;
        text-align: center;

        padding: 4rem 4rem;
    }

    .boxes {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        gap: 1rem;

        margin: 2rem 0;
    }

    @media screen and (min-width: 768px) {
        .boxes {
            flex-direction: row;
            justify-content: center;
        }
    }
</style>