<script lang="ts">
  import { onMount } from 'svelte'
  import Spin from '@/components/atoms/Spin.svelte'
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
  <div class="loader-wrapper">
    <Spin show class="text-blue-500 h-10 w-10" />
  </div>
{:else}
  <slot />
{/if}

<style lang="sass">
.loader-wrapper
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
</style>
