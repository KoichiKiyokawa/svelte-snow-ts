<script lang="ts">
  import { onMount } from 'svelte'
  import { AuthService } from '@/services/AuthService'
  import { goto } from '@roxi/routify'
  export let redirectPath: string = '/login'
  let loading = true
  onMount(async () => {
    const auth = await AuthService.chechAuth()
    if (!auth) await $goto(redirectPath)
    else loading = false
  })
</script>

{#if loading}
  <span>Loading...</span>
{:else}
  <slot />
{/if}
