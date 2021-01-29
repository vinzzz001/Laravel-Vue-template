require("./bootstrap");
import Vue from "vue";

//Main pages
import App from "./App.vue";

//Import store
import store from "./store/store";

//Import router
import router from "./router/index";

new Vue({
    el: "#app",
    store,
    router,
    render: (h) => h(App),
});
