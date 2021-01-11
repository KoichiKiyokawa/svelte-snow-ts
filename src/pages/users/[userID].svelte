<script lang="ts">
  import { onMount } from 'svelte'
  import { UserRepository } from '@/models/user/repository'
  import { params } from '@roxi/routify'
  let user: User
  onMount(async () => {
    console.log($params)
    const result = await new UserRepository().find($params.userID)
    user = result.data
  })
</script>

<ul>
  <li><span>氏名：{user.name}</span></li>
  <li><span>生年月日：{user.birthday}</span></li>
</ul>
