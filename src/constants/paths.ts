import { push, RouteDefinition } from 'svelte-spa-router'
import { wrap } from 'svelte-spa-router/wrap'
import type { SvelteComponentDev } from 'svelte/internal'

import Counter from '@/pages/counter.svelte'
import Index from '@/pages/index.svelte'
import Login from '@/pages/login.svelte'
import Users from '@/pages/users/index.svelte'
import { AuthService } from '@/services/AuthService'

export const paths = {
  index: () => '/',
  login: () => '/login',
  counter: () => '/counter',
  users: {
    index: () => '/users',
    show: (userId: string) => paths.users.index() + '/' + userId,
    edit: (userId: string) => paths.users.show(userId) + '/edit',
  },
}

export const routes: RouteDefinition = {
  [paths.index()]: Index,
  [paths.login()]: Login,
  [paths.counter()]: Counter,
  [paths.users.index()]: withAuth(Users),
  [paths.users.show(':userId')]: Users,
}

function withAuth(component: typeof SvelteComponentDev) {
  return wrap({ component, conditions: [redirectIfNotLoggedIn] })
}

async function redirectIfNotLoggedIn() {
  if (await AuthService.chechAuth()) return true
  else {
    push(paths.login())
    return false
  }
}
