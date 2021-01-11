<script lang="ts">
  import { onMount } from 'svelte'
  import { UserRepository } from '@/models/user/repository'
  import { DateUtil } from '@/utils/DateUtil'
  let users: RepositoryResult<User>[] = []
  let form: Omit<User, 'birthday' | 'createdAt' | 'updatedAt'> & { birthday: string } = {
    name: '',
    birthday: '2000-1-1',
  }
  onMount(async () => {
    users = await new UserRepository().all()
  })
  async function addUser(): Promise<void> {
    const res = await new UserRepository().create({ ...form, birthday: new Date(form.birthday) })
    users = [...users, res]
  }
</script>

<form on:submit|preventDefault={addUser} class="max-w-screen-sm border rounded shadow p-4">
  <h2 class="text-xl font-bold">ユーザー作成</h2>
  <label> 氏名 <input bind:value={form.name} class="input" required /> </label>
  <label class="mt-4">生年月日 <input type="date" class="input" required bind:value={form.birthday} /></label>
  <button class="bg-indigo-500 rounded text-white px-4 py-2 mt-4">作成</button>
</form>

<div class="border rounded shadow mt-8 p-4">
  <h2 class="text-xl font-bold">ユーザー一覧</h2>
  <table class="border-collapse border">
    <thead>
      <tr>
        <th class="border p-2">氏名</th>
        <th class="border p-2">生年月日</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr>
          <td class="border p-2">
            <a class="text-blue-400 hover:underline" href={`/users/${user.id}`}>{user.data.name}</a>
          </td>
          <td class="border p-2">{DateUtil(user.data.birthday).formatYYYYMMDD()}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="sass">
.input
  @apply block border rounded w-full p-2
</style>
