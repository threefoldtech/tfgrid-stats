<script>
</script>

<div class="card">
  <slot />
</div>

<style>
  .card {
    display: inline-block;
    border-radius: 10px;
    padding: 0 1rem;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding-left: 3rem;
    background-color: aquamarine;
  }

  * {
    transition: 0.5s;
  }

  .card:hover {
    padding-left: 0px;
  }

  /* @keyframes main {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  } */
</style>
