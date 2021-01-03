<script lang="ts">
  import { link } from "svelte-spa-router";
  import { paths } from "@/constants/paths";
</script>

<ul>
  <li><a href={paths.counter()} use:link>counter</a></li>
  <li><a href={paths.users()} use:link>users</a></li>
</ul>
