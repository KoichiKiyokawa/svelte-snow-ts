<script lang="ts">
  import { location, push } from 'svelte-spa-router'
  import { paths } from '@/constants/paths'
  import { AuthService } from '@/services/AuthService'
  $: showMenu = ['/users'].some((prefix) => $location.startsWith(prefix))
  function logout() {
    AuthService.logout().then(() => push(paths.login()))
  }
</script>

<nav class="flex items-center bg-blue-400 h-12 px-4">
  <h1 class="text-white text-3xl">Svelte+Snowpack+Typescript</h1>
  {#if showMenu}
    <div class="ml-auto"><button on:click={logout} class="text-white">Logout</button></div>
  {/if}
</nav>
