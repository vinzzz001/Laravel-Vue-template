<<template>
    <div>
        <p>Roll({{ quantity }}d{{ d }}):</p>
        <p>Results: {{ values }}</p>
        <p>Roll Total: {{ totalValue }}</p>
        <br />
    </div>
</template>

<script>
export default {
    props: {
        values: {
            type: Array,
            required: false,
            default: []
        },
        quantity: { type: Number, default: 1 },
        d: { type: Number, default: 0 }
    },
    computed: {
        totalValue() {
            return this.values.reduce((sum, value) => sum + value);
        }
    }
};
</script>
