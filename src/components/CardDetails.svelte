<script>
  import Card from "./Card.svelte";
  export let card;
  export let primaryTitle = true;
  export let secondaryTitle = true;
  export let secondaryDetails = false;
</script>

<Card>
  <div class="card">
    <div
      class="title"
      class:title-primary={primaryTitle}
      class:title-secondary={secondaryTitle}
    >
      <p>{card.title}</p>
    </div>
    <div class="card-details" class:details-secondary={secondaryDetails}>
      <div>icon</div>
      <div>{card.data}</div>
    </div>
  </div>
</Card>

<style>
  p {
    margin: 0;
  }
  .card {
    display: grid;
    grid-template-rows: 1fr 3fr;
  }

  .card-details {
    display: grid;
    grid-template-columns: 1fr 3fr;
    text-align: end;
    align-content: center;
    padding: 0.5rem 1rem;
    font-size: 23px;
    color: #353434b6;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 2.5rem;
    color: #fff;
    font-weight: 500;
    text-align: end;
    padding: 0 1rem;
  }
  .title-primary {
    background-color: #1982b1;
  }

  .title-secondary {
    background-color: #4cbbd9;
  }

  .details-secondary {
    background-color: #ebe7e7;
  }
</style>
