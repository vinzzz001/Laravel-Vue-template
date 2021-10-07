<template>
    <div>
        <!-- a 'for' method based on an array that dissap-->
        <die v-for="die in dice" :d="die" />
        <dieTextLog
            v-for="item in textLog"
            :values="item.values"
            :quantity="item.quantity"
            :d="item.d"
        />

        <br /><br />
    </div>
</template>

<script>
import die from "../components/die.vue";
import dieTextLog from "../components/die-text-log.vue";

export default {
    components: { die, dieTextLog },
    data() {
        return {
            textLog: [],
            dice: [4, 6, 8, 10, 100, 12, 20]
        };
    },

    methods: {
        addValues(x) {
            this.textLog.push(x);
        }
    },

    created() {
        this.$on("diceResults", function(x) {
            this.addValues(x);
        });
    }
};
</script>
