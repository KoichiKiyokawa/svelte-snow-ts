import { wrap } from 'svelte-spa-router/wrap'
import { AuthService } from '@/services/AuthService'
import type { RouteDefinition } from 'svelte-spa-router'
import type { SvelteComponentDev } from 'svelte/internal'

import Counter from '@/pages/counter.svelte'
import Users from '@/pages/users/index.svelte'
import Index from '@/pages/index.svelte'

export const paths = {
  index: () => '/',
  counter: () => '/counter',
  users: {
    index: () => '/users',
    show: (userId: string) => paths.users.index() + '/' + userId,
    edit: (userId: string) => paths.users.show(userId) + '/edit',
  },
}

export const routes: RouteDefinition = {
  [paths.index()]: Index,
  [paths.counter()]: Counter,
  [paths.users.index()]: withAuth(Users),
  [paths.users.show(':userId')]: Users,
}

function withAuth(component: typeof SvelteComponentDev) {
  return wrap({ component, conditions: [AuthService.chechAuth] })
}
