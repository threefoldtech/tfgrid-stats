<script>
  import CardStore from "../stores/CardStore";
  import CardDetails from "./CardDetails.svelte";


</script>

<div class="card-list">
  {#each $CardStore as card, index (card.id)}
  {#if index % 2 == 0}
    <CardDetails {card} primaryTitle={true} secondaryTitle={false}/>
    {:else}
    <CardDetails {card} secondaryDetails={true} />
  {/if}
  {/each}
</div>

<style>
  .card-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
</style>
