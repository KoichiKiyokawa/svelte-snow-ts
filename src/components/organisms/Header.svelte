<script lang="ts">
  import { location, push } from 'svelte-spa-router'
  import { paths } from '@/constants/paths'
  import { AuthService } from '@/services/AuthService'
  $: showMenu = ['/users'].some((prefix) => $location.startsWith(prefix))
  function logout() {
    AuthService.logout().then(() => push(paths.login()))
  }
</script>

<nav>
  <h1>Svelte+Snowpack+Typescript</h1>
  {#if showMenu}
    <div class="menu"><button on:click={logout}>Logout</button></div>
  {/if}
</nav>

<style>
  nav {
    display: flex;
    background-color: #333333;
  }
  .menu {
    margin-left: auto;
  }
</style>
