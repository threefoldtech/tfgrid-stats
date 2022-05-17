<script lang="ts">

  import Map from "./components/Map2.svelte";
  import CardList from './components/CardList.svelte';
  import type { MapActions } from "./types/map";

  import { onMount } from "svelte";

  let mapActions: MapActions;
  
  onMount(() => {
    mapActions.update("egypt", "red");
  });

  const handleHover = (e) => {
		console.log(e.detail)
	}


</script>

<div class="map"> 
  <Map bind:mapActions on:handleHover={handleHover} />
</div>

<div class="state-title">
  <h2 >Statistics</h2>
</div>
  <CardList />

<style>

  .map{
    background-color: #ebe7e7;
  }
  .state-title{
    background-color: #ebe7e7;
    color: #353434b6;
}

h2{
  margin: 0;
  padding: 1rem;

}
</style>

