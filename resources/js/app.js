require("./bootstrap");
import Vue from "vue";

//Main pages
import App from "./App.vue";

new Vue({
    el: "#app",
    render: (h) => h(App),
});
