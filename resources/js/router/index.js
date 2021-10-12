import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../pages/Home.vue'

import Dice from '../pages/Dice.vue'
import Groceries from '../pages/Groceries.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },

        {
            path: "/dice",
            component: Dice
        },

        {
            path: "/groceries",
            component: Groceries
        }
    ]
});
