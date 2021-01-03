<script lang="ts">
  export let params: { userId?: string } = {};
  $: {
    console.log(params);
  }
</script>

<h1>User index</h1>
<h2>params: {params.userId}</h2>
