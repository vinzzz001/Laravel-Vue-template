<template>
    <div>
        <!-- a 'for' method based on an array that dissap-->
        <die v-for="die in dice" :d="die" />

        <!-- <p>{{textLog}}</p> -->
    </div>
</template>

<script>
import die from "../components/Die.vue";
export default {
    components: { die },
    data() {
        return {
            textLog: [],
            dice: [4, 6, 8, 10, 100, 12, 20]
        };
    },
    methods: {}
};
</script>
