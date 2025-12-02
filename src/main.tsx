import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import reportWebVitals from "./reportWebVitals.ts";

import Header from "./layout/Header.tsx";
import "./styles/global.css.ts";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/home/index.tsx";
import { Article } from "./pages/article/index.tsx";
import { getPostBySlug } from "./utils/posts";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const articleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "posts/$slug",
  loader: ({ params }) => getPostBySlug(params.slug),
  component: Article,
});

const routeTree = rootRoute.addChildren([indexRoute, articleRoute]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
