import VueRouter from 'vue-router'
import Vue from "vue";
import ListOrdersPage from "@/page/ListOrdersPage";
import OrderDetailsPAge from "@/page/OrderDetailsPAge";

Vue.use(VueRouter)

const routes = [
    { path: '', component: ListOrdersPage },
    { path: '/order/:id', component: OrderDetailsPAge }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;
