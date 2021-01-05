<script lang="ts">
  import { onMount } from 'svelte'
  import { UserRepository } from '@/models/users/repository'
  import { DateUtil } from '@/utils/DateUtil'
  import type { logDOM } from '@testing-library/svelte'
  let users: User[]
  let form: Omit<User, 'createdAt' | 'updatedAt'> = { name: '', birthday: new Date() }
  onMount(async () => {
    const userRepoResult = await new UserRepository().all()
    users = userRepoResult.map((res) => res.data)
  })
  function addUser(): void {}
</script>

<h1>User index</h1>

<form on:submit={addUser}>
  <label> 氏名 <input /> </label>
  <label>生年月日
    <input
      type="data"
      value={DateUtil(form.birthday).formatYYYYMMDD()}
      on:change={(e) => console.log(e.target)} /></label>
</form>

<ul>
  {#each users as user}
    <li>{user}</li>
  {/each}
</ul>
