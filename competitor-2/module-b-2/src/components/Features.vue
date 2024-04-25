<script setup>
    import FeatureCard from "./FeatureCard.vue";
</script>

<template>
    <div id="features">
        <h1>Powerful Features Designed for Efficiency</h1>
        <div class="cards">
            <feature-card icon="/img/feature1.svg" title="Inventory Management">
                Reduce waste with precise tracking and predictive ordering.
            </feature-card>
            <feature-card icon="/img/feature2.svg" title="Real-Time Analytics">
                Make informed decisions with up-to-the-minute data on sales, staffing, and customer preferences.
            </feature-card>
            <feature-card icon="/img/feature3.svg" title="CRM">
                Enhance guest experiences through personalized service and targeted marketing.
            </feature-card>
        </div>
    </div>
</template>
    
<style scoped>
    #features {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        padding: 4rem 4rem;
    }

    .cards {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        margin-top: 2rem;
    }

    .cards>div {
        animation: 1s ease-in 0s 1 normal card;
        opacity: 0%;
        animation-fill-mode: forwards;
    }

    .cards>div:nth-child(2) {
        animation-delay: 1s;
    }

    .cards>div:nth-child(3) {
        animation-delay: 2s;
    }

    @keyframes card {
        0% {
            opacity: 0%;
            scale: 0.1;
        } 
        100% {
            opacity: 100%;
            scale: 1;
        }
    }

    @media screen and (min-width: 768px) {
        .cards {
            flex-direction: row;
        }
    }
        
</style>