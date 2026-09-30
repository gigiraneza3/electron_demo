import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../vue/Home.vue';
import Contact from '../vue/Contact.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: Contact },
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;