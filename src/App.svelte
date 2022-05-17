<script lang="ts">
  import Map from "./components/Map2.svelte";
  import CardList from "./components/CardList.svelte";
  import type { MapActions } from "./types/map";


  let mapActions: MapActions;

  const handleHover = (e) => {
    console.log(e.detail);
  };

  const destroyTooltip = (e) => {
    console.log('destroyed', e.detail); 
  }
</script>


<main>
  <h2 class="node-title">Node Distribution</h2>
  <div class="map-container">
    <div class="map">
      <Map on:handleHover={handleHover} on:destroyTooltip={destroyTooltip} />
    </div>
  </div>

  
  <div class="state-title">
    <h2>Statistics</h2>
  </div>
  <CardList />
</main>


<style>
  main{
    background-color: #ebe7e7;
  }

  .map-container{
    display: flex;
    justify-content: center;
  }
  .map {
    width: 65rem;
    display: inline-block;
  }
  .state-title, .node-title {
    background-color: #ebe7e7;
    color: #353434b6;
  }

  h2 {
    margin: 0;
    padding: 1rem;
  }
</style>
