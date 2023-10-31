import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},

]

const router = new VueRouter({
    routes,
})

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');


// createApp(App).mount('#app')
