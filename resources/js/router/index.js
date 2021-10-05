import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../pages/Home.vue'

import dice from '../pages/Dice.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },

        {
            path: "/dice",
            component: dice
        }
    ]
});
