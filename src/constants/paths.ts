import type { RouteDefinition } from "svelte-spa-router";

import Index from "@/pages/index.svelte";
import Counter from "@/pages/counter.svelte";
import Users from "@/pages/users/index.svelte";

export const paths = {
  index: () => "/",
  counter: () => "/counter",
  users: (userId?: string) => `/users/${userId ?? ""}`,
};

export const routes: RouteDefinition = {
  [paths.index()]: Index,
  [paths.counter()]: Counter,
  [paths.users()]: Users,
  [paths.users(":userId")]: Users,
};
