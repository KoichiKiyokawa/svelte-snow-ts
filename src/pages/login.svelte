<script lang="ts">
  import { push } from 'svelte-spa-router'
  import { paths } from '@/constants/paths'
  import { AuthService } from '@/services/AuthService'
  let form = { email: '', password: '' }
  function login() {
    AuthService.login(form.email, form.password).then(() => push(paths.users.index()))
  }
</script>

<form on:submit|preventDefault={login}>
  <label> Email: <input bind:value={form.email} type="email" /> </label>
  <label> Password: <input bind:value={form.password} type="password" /> </label>
  <button>login</button>
</form>

<style>
  label {
    display: block;
  }
</style>
