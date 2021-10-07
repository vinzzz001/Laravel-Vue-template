<template>
    <tr>
        <!-- This intentionally doesn't have a surrounding div, since that would make the tablerow div useless.
        <!-- A D20 is a dice with 20 sides, a D6, a dice with 6 sides. -->
        <td>D{{ d + " " }}</td>
        <td><button @click="throwDice(d)">Throw!</button></td>
        <td>{{ this.values }}</td>
    </tr>
</template>

<script>
import dieLog from "../components/die-text-log.vue";

export default {
    name: "die",
    components: { dieLog },

    data() {
        return {
            values: [],
            quantity: 3
        };
    },

    props: {
        d: 0
    },

    methods: {
        throwDice(d) {
            let x = [];
            for (let i = 0; i < this.quantity; i++) {
                x.push(this.randomNumber(d)); //Array of all dice thrown.
            }

            this.values = x;
            this.$parent.$emit("diceResults", {
                values: x,
                quantity: this.quantity,
                d: d
            });
        },

        randomNumber(d) {
            //Math sign ensures that the chosen number itself can be thrown.
            return Math.trunc(Math.random() * d + Math.sign(d));
        }
    }
};
</script>
