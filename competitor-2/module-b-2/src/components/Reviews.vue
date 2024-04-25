<script setup>
    import ReviewCard from "./ReviewCard.vue";
</script>

<template>
    <div id="reviews">
        <h1>Trusted by Restaurants Worldwide</h1>
        <div class="cards">
            <review-card name="Jane Cooper" place="The Gourmet Bistro">
                DineEase helped us reduce operational costs by 20% within the first six months.
            </review-card>
            <review-card name="Floyd Miles" place="OceanView Cafe">
                DineEase revolutionized our operations, making it easy to manage multiple locations seamlessly. Their support team is incredibly responsive and truly understands the needs of the hospitality industry.
            </review-card><review-card name="Kristin Watson" place="City Diner">
                Our customer satisfaction has never been higher, thanks to the personalized service we can provide with DineEase.
            </review-card>
        </div>
    </div>
</template>
    
<style scoped>
    #reviews {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        padding: 4rem 4rem;
        background-color: var(--color-lightblue);
    }

    .cards {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        margin-top: 2rem;
    }

    @media screen and (min-width: 768px) {
        .cards {
            flex-direction: row;
        }
    }
        
</style>