<script>
  import Card from "./Card.svelte";
  export let card;
</script>

<Card>
  <div class="card-details">
    <p class="card-title">{card.title}</p>
    <p>{card.result}</p>
    <p>{card.icon}</p>
  </div>
</Card>

<style>
  .card-details {
    display: inline-block;
    width: 100%;
  }
  .card-title {
    margin-left: -3rem;
  }
</style>
