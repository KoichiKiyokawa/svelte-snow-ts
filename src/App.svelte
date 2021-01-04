<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "@/constants/paths";
  import Header from "@/components/organisms/Header.svelte";
</script>

<style global>
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
</style>

<header>
  <Header />
</header>
<main>
  <Router {routes} />
</main>
