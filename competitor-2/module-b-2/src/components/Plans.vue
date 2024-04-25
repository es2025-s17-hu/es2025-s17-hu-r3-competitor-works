<script setup>
    import PlanCard from "./PlanCard.vue";
</script>

<template>
    <div id="plans">
        <h1>Flexible Pricing Plans</h1>
        <p>Choose the plan that best fits your business. No hidden fees, no surprises.</p>
        <div class="cards">
            <plan-card name="Starter" price="19" features=2>
                Ideal for new or small restaurants looking to streamline operations.
            </plan-card>
            <plan-card name="Professional" price="49" features=4>
                Perfect for growing restaurants needing advanced analytics and marketing tools.
            </plan-card>
            <plan-card name="Enterprise" price="99" features=5>
                Comprehensive solutions for large-scale or multi-location operations.
            </plan-card>
        </div>
    </div>
</template>
    
<style scoped>
    #plans {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        text-align: center;
        padding: 4rem 4rem;
    }

    .cards {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        margin-top: 2rem;
    }

    @media screen and (min-width: 768px) {
        .cards {
            flex-direction: row;
        }
    }
        
</style>