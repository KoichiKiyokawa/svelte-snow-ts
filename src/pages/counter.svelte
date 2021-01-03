<script lang="ts">
  let counters: number[] = [];
  $: sum = counters.reduce((acc, current) => acc + current, 0);

  function add() {
    counters = [...counters, 0];
  }

  function increment(index: number) {
    counters[index]++;
  }

  function decrement(index: number) {
    if (counters[index] >= 1) counters[index]--;
  }
</script>

{#each counters as count, i}
  <div>
    <span>{count}</span>
    <button on:click={() => increment(i)}>+1</button>
    <button on:click={() => decrement(i)}>-1</button>
  </div>
{/each}
<p>sum: {sum}</p>
<button on:click={add}>add</button>
