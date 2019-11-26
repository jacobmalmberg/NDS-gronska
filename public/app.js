

const routes = [
	{ path: '/', redirect: '/forening' },
	{ path: '/forening',  name:'forening', component: Vue.component('route-forening') },
	{ path: '/admin',  name:'admin', component: Vue.component('route-admin') },
	{ path: '/rabatt', name:'rabatt', component: Vue.component('route-rabatt'), props: true },
	//{ path: '/rabatt/:id', component: Vue.component('route-rabatt') },
	{ path: '/insekt/:id', component: Vue.component('route-insekt') },
];

// Create VueRouter
// Docs: https://router.vuejs.org/guide
const router = new VueRouter({
	routes
});


Vue.component('vue-multiselect', window.VueMultiselect.default);

// Create VueApp
// Docs: https://vuejs.org/v2/guide
const app = new Vue({
	// el: '#app' // can't use element property with VueRouter
	router,
	data: {
		rabatt: undefined,
		vaxt_id: undefined,
		typ: undefined
	},
	methods: {
		redirect(target) {
			// Used in the navigation
			this.$router.push(target);
		}
	}
}).$mount('#app');
