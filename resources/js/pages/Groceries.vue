<template>
    <div>
        Groceries

        <table>
            <thead>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </thead>

            <tr v-for="(product, i) in products" :key="i">
                <!-- A v-for here-->
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>
                    <input type="Number" v-model="product.quantity" />
                </td>
                <td>{{ product.price * product.quantity }}</td>
                <!--<td>{{ subtotal }}</td> -->
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: "bami",
                    price: 1.0,
                    quantity: 0
                },
                {
                    name: "nasi",
                    price: 2.0,
                    quantity: 2
                },
                {
                    name: "banana",
                    price: 1.0,
                    quantity: 2
                },
                {
                    name: "stone",
                    price: 2.03,
                    quantity: 71
                }
            ],
            test: 1
        };
    }
};
</script>
