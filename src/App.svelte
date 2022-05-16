<script lang="ts">
  import { onMount } from "svelte";

  import Map from "./components/Map2.svelte";
  import type { MapActions } from "./types/map";

  let mapActions: MapActions;

  onMount(() => {
    mapActions.update("egypt", "red");
  });
</script>

<Map bind:mapActions />

<!-- <script lang="ts">
  import CardList from "./components/CardList.svelte";
  import Map from "./components/Map.svelte";
</script>

<main>
  <Map />
  <CardList />
</main>

<style>
  main {
    padding: 6rem;
  }
</style> -->
