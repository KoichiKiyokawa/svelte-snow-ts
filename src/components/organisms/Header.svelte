<script lang="ts">
  import { AuthService } from '@/services/AuthService'
  import { goto } from '@roxi/routify'
  $: showMenu = true
  function logout() {
    AuthService.logout().then(() => $goto('/login'))
  }
</script>

<nav class="flex items-center bg-blue-400 h-12 px-4">
  <h1 class="text-white text-3xl"><a href="/">Svelte+Snowpack+Typescript</a></h1>
  {#if showMenu}
    <div class="ml-auto"><button on:click={logout} class="text-white">Logout</button></div>
  {/if}
</nav>
