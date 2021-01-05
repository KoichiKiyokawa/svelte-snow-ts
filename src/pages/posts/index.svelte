<script lang="ts">
  import { link } from 'svelte-spa-router'
  import { onMount } from 'svelte'
  import { paths } from '@/constants/paths'
  import { PostRepository } from '@/models/post/repository'
  import { UserRepository } from '@/models/user/repository'
  import { DateUtil } from '@/utils/DateUtil'
  let posts: RepositoryResult<Post>[] = []
  let users: RepositoryResult<User>[] = []
  let form: Omit<Post, 'userID' | 'createdAt' | 'updatedAt'> & { userID: string } = { title: '', body: '', userID: '' }
  onMount(async () => {
    ;[posts, users] = await Promise.all([new PostRepository().all(), new UserRepository().all()])
    console.log(posts)
    console.log(users)
  })
  function formatBody(body: string) {
    const MAX_LENGTH = 6
    if (body.length <= MAX_LENGTH) return body
    return body.substring(0, MAX_LENGTH + 1) + '...'
  }
  async function addPost() {
    const result = await new PostRepository().create(form)
    posts = [...posts, result]
  }
</script>

<form on:submit|preventDefault={addPost} class="max-w-screen-sm border rounded shadow p-4">
  <h2 class="text-xl font-bold">投稿作成</h2>
  <label class="mt-4"> タイトル <input bind:value={form.title} class="input" required /> </label>
  <label class="mt-4"> 本文 <input bind:value={form.body} class="input" required /> </label>
  <label class="mt-4">投稿主
    <select bind:value={form.userID} required class="input">
      <option value="">投稿主を選択してください</option>
      {#each users as user}
        <option value={user.id}>{user.data.name}</option>
      {/each}
    </select>
  </label>
  <button class="bg-indigo-500 rounded text-white px-4 py-2 mt-4">作成</button>
</form>

<div class="border rounded shadow mt-8 p-4">
  <h2 class="text-xl font-bold">投稿一覧</h2>
  <table class="border-collapse border">
    <thead>
      <tr>
        <th class="border p-2">タイトル</th>
        <th class="border p-2">本文</th>
        <th class="border p-2">投稿日</th>
      </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr>
          <td class="border p-2">
            <a class="text-blue-400 hover:underline" use:link href={paths.users.show(post.id)}>{post.data.title}</a>
          </td>
          <td class="border p-2">{formatBody(post.data.body)}</td>
          <td class="border p-2">{DateUtil(post.data.createdAt).formatYYYYMMDD()}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="sass">
.input
  @apply block border rounded w-full p-2
</style>
