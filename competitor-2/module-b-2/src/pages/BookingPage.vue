<script setup>
    import { computed, ref } from "vue";

    const date = ref(null);

    const TIMESLOTS = {
        1: ["12:30", "13:00", "13:30", "14:00", "15:00"],
        2: ["8:30", "10:00", "10:30", "11:00", "12:00"],
        3: ["8:30", "9:00", "9:30", "10:00", "10:30"],
        4: ["13:30", "14:00", "14:30", "15:00", "15:30"],
        5: ["9:30", "10:00", "12:30", "14:00", "15:00"],
    }

    const availableTimeSlots = computed(() => {
        if (date.value == null) {
            return [];
        }

        const day = new Date(Date.parse(date.value)).getDay();
        console.log(day);
        return TIMESLOTS[day];
    });
</script>

<template>
    <div class="container">
        <h1>Book a Free <span class="demo">Demo</span></h1>
        <div class="content">
            <div class="datepicker">
                <label for="date">Date</label>
                <input type="date" id="date" v-model="date">
                <label for="time">Time</label>
                <label class="timeslot" :for="`time-${i}`" v-for="(slot, i) in availableTimeSlots" :key="i">
                    <input type="radio" name="time" :value="slot" :id="`time-${i}`">
                    {{ slot }}
                </label>
                <p v-if="date != null && !availableTimeSlots">No timeslots are available for this day.</p>
            </div>
            <div class="details">
                <label for="name">Name</label>
                <input type="text" id="name">
                <label for="phone">Phone number</label>
                <input type="tel" id="phone">
                <label for="email">Email address</label>
                <input type="email" id="email">
                <button class="button">Book Demo</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 4rem 8rem;
    }

    h1 {
        font-size: 3em;
        font-weight: normal;

        margin-bottom: 3rem;
    }

    .demo {
        color: var(--color-primary);
        font-weight: bold;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    label {
        opacity: 75%;
    }

    input {
        padding: 0.5rem 1rem;
        background: none;
        border: 1px solid gray;
        border-radius: var(--radius);

        margin-bottom: 1rem;
    }

    .datepicker, .details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input[type="date"] {
        size: 800px;
    }

    label.timeslot {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem 1rem;

        font-weight: bold;
        background-color: var(--color-primary-light);
        border-radius: var(--radius);
    }

    label.timeslot:has(input[type="radio"]:checked) {
        background-color: var(--color-primary);
    }

    input[type="radio"] {
        display: none;
    }

    button {
        background-color: var(--color-primary);
        color: white;
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        .content {
            flex-direction: row;
            justify-content: center;

            max-width: 800px;
        }

        .datepicker, .details {
            width: 100%;
        }
    }
</style>