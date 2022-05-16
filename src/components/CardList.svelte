<script>
  import {CardStore, apiData} from "../stores/CardStore.ts";
  import CardDetails from "./CardDetails.svelte";
  import { onMount } from "svelte";
  onMount(async () => {
    fetch("https://gridproxy.dev.grid.tf/stats")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.nodes);



      apiData.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });
  });
</script>


 <div class="card-list">

  {#each $CardStore as card (card.id)}
    <CardDetails {card} /> 
  {/each} 


</div> 

<style>
  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6rem;
  }
</style>



