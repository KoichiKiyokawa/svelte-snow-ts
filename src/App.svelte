<script lang="ts">
  import Header from '@/components/organisms/Header.svelte'
  import { routes } from '@/routify/routes'
  import { Router } from '@roxi/routify'
</script>

<header>
  <Header />
</header>

<main class="px-4 py-8">
  <Router {routes} />
</main>

<style lang="sass" global>
@tailwind base
@tailwind components
@tailwind utilities

[disabled]
  @apply opacity-25 cursor-not-allowed
</style>
