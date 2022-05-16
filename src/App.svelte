<script lang="ts">

  import Map from "./components/Map2.svelte";
  import CardList from './components/CardList.svelte';
  import type { MapActions } from "./types/map";

  import { onMount } from "svelte";

  let mapActions: MapActions;
  
  onMount(() => {
    mapActions.update("egypt", "red");
  });


</script>

<Map bind:mapActions />
<CardList />



