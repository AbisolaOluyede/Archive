import { createRouter, createWebHistory } from "vue-router";

// Standard lazy-loading for Vue Router
const HomeView = () => import("@/views/HomeView.vue");
const PostDetail = () => import("@/views/PostDetail.vue");
const AboutView = () => import("@/views/AboutView.vue");
const NotFound = () => import("@/views/NotFound.vue");

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: { title: "Home — The Blog" },
	},
	{
		path: "/posts/:id",
		name: "post-detail",
		component: PostDetail,
		// FIX: This enables passing the :id param as a prop to the component
		props: true,
		meta: { title: "Post — The Blog" },
		beforeEnter: (to, from, next) => {
			if (!to.params.id) {
				next({ name: "not-found" });
			} else {
				next();
			}
		},
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
		meta: { title: "About — The Blog" },
	},
	{
		path: "/:pathMatch(.*)*",
		name: "not-found",
		component: NotFound,
		meta: { title: "404 — The Blog" },
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition;
		return { top: 0, behavior: "smooth" };
	},
});

router.afterEach((to) => {
	document.title = to.meta.title || "The Blog";
});

export default router;
