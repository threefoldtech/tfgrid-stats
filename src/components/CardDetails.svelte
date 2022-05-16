<script>
  import Card from "./Card.svelte";
  export let card;
</script>

<Card>
  <div class="container ">
    <div class="row align-middle">
      <div class="col-md-6 col-lg-4 column">
        <div class="card gr-1">
          <div class="txt">
          
            <h1>{card.title}</h1>
            <p>{card.data}</p>
          </div>
          <div class="ico-card">
            <i class={card.icon} />
          </div>
        </div>
      </div>
    </div>
  </div>
</Card>

<style lang="scss">
  $gr-1: linear-gradient(170deg, #01e4f8 0%, #1d3ede 100%);


  .gr-1 {
    background: $gr-1;
  }


  * {
    transition: 0.5s;
  }

  .h-100 {
    height: 100vh !important;
  }
  .align-middle {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .column {
    margin-top: 3rem;
    padding-left: 3rem;
    &:hover {
      padding-left: 0;
      .card .txt {
        margin-left: 1rem;
        h1,
        p {
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
      a {
        color: rgba(255, 255, 255, 1);
        &:after {
          width: 10%;
        }
      }
    }
  }
  .card {
    min-height: 170px;
    margin: 0;
    padding: 1.7rem 1.2rem;
    border: none;
    border-radius: 0;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.05rem;
    font-family: "Oswald", sans-serif;
    box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
    .txt {
      margin-left: -3rem;
      z-index: 1;
      h1 {
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: uppercase;
      }
      p {
        font-size: 0.7rem;
        font-family: "Open Sans", sans-serif;
        letter-spacing: 0rem;
        margin-top: 33px;
        opacity: 0;
        color: rgba(255, 255, 255, 1);
      }
    }
    a {
      z-index: 3;
      font-size: 0.7rem;
      color: rgba(0, 0, 0, 1);
      margin-left: 1rem;
      position: relative;
      bottom: -0.5rem;
      text-transform: uppercase;
      &:after {
        content: "";
        display: inline-block;
        height: 0.5em;
        width: 0;
        margin-right: -100%;
        margin-left: 10px;
        border-top: 1px solid rgba(255, 255, 255, 1);
        transition: 0.5s;
      }
    }
    .ico-card {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    i {
      position: relative;
      right: -50%;
      top: 60%;
      font-size: 12rem;
      line-height: 0;
      opacity: 0.2;
      color: rgba(255, 255, 255, 1);
      z-index: 0;
    }
  }
</style>
