import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/blog",
    name: "blog-route",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "blog-detail-route",
    component: BlogDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
