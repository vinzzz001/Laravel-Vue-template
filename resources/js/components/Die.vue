<template>
    <div>
        <tr>
            <!-- A D20 is a dice with 20 sides, a D6, a dice with 6 sides. -->
            <td>D {{ d }}</td>
            <td><button @click="throwDice(d)">Throw!</button></td>
            <td>{{ this.values }}</td>
        </tr>
    </div>
</template>

<script>
export default {
    methods: {
        randomNumber(d = 0) {
            //Math sign ensures that the chosen number itself can be thrown.
            return Math.trunc(Math.random() * d + Math.sign(d));
        },

        throwDice(d = 0) {
            let x = [];
            for (let i = 0; i < this.quantity; i++) {
                x.push(this.randomNumber(d)); //Array of all dice thrown.
            }

            this.values = x;
        }
    }
};
</script>
