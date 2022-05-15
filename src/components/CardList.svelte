<script>
  import CardStore from "../stores/CardStore";
  import CardDetails from "./CardDetails.svelte";
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
