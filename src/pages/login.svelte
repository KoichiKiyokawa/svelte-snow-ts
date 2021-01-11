<script lang="ts">
  import Spin from '@/components/atoms/Spin.svelte'
  import { AuthService } from '@/services/AuthService'
  import { goto } from '@roxi/routify'
  let form = { email: '', password: '' }
  let loading = false
  function login() {
    loading = true
    AuthService.login(form.email, form.password)
      .then(() => $goto('/users'))
      .finally(() => (loading = false))
  }
</script>

<form on:submit|preventDefault={login} class="border rounded shadow max-w-screen-sm mx-auto p-4">
  <label> Email: <input bind:value={form.email} type="email" class="input" required /> </label>
  <label> Password: <input bind:value={form.password} type="password" class="input" required /> </label>
  <button disabled={loading} class="bg-blue-400 text-white border rounded px-4 py-2 mt-4">
    <Spin show={loading} />
    login
  </button>
</form>

<style lang="sass">
.input
  @apply block border w-full rounded px-2
</style>
