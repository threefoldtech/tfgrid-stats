<script>
  import Card from "./Card.svelte";
  export let card;
  export let primaryTitle = false;
  export let secondaryTitle = true;
  export let secondaryDetails = false

</script>

<Card>
  <div class="card">
    <div class='title' class:title-primary={primaryTitle} class:title-secondary={secondaryTitle}>
      <p>{card.title}</p>
    </div>
    <div class="card-details" class:details-secondary={secondaryDetails}>
      <div>icon</div>
      <div>{card.result}</div>
    </div>

  </div>
</Card>

<style>
  .card{
    display: grid;
    grid-template-rows: 1fr 4fr;
    height: 10rem;
  }

  .card-details{
    display: grid;
    grid-template-columns: 1fr 3fr;
    text-align: end;
    padding: .5rem 1rem;
    font-size: 23px;
    color: #333333;
    align-content: center;
  }


  .title{
    height: 3rem;
    color: #fff;
    font-weight: bold;
    text-align: end;
    padding: 0 1rem;
  }
  .title-primary{
    background-color: #1982b1;
  }

  .title-secondary{
    background-color:  #4cbbd9;
  }

  .details-secondary{
    background-color: #e0dcdc;
  }
</style>
