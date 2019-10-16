const routes = [
	{ path: '/', redirect: '/forening' },
	{ path: '/forening', component: Vue.component('route-forening') },
	{ path: '/booking_confirm', name:'booking_confirm', component: Vue.component('route-booking_confirm'), props: true },
	{ path: '/rabatt', name:'rabatt', component: Vue.component('route-rabatt'), props: true },
	{ path: '/admin_login', component: Vue.component('route-admin_login') },
	{ path: '/admin_page/:name', component: Vue.component('route-admin_page') }
];

// Create VueRouter
// Docs: https://router.vuejs.org/guide
const router = new VueRouter({
	routes
});

// Create VueApp
// Docs: https://vuejs.org/v2/guide
const app = new Vue({
	// el: '#app' // can't use element property with VueRouter
	router,
	methods: {
		redirect(target) {
			// Used in the navigation
			this.$router.push(target);
		}
	}
}).$mount('#app');
