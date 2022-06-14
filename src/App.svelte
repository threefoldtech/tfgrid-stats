<script lang="ts">
  import { onMount } from "svelte";
  import { fetchData, IStatsRes } from "./utils/fetchData";
  import CardList from "./components/CardList.svelte";

  let data: IStatsRes;
  let loading = true;
  let error: string;

  $: disabled = false;

  let refresh = async () => {
    try {
      disabled = true;

      data = await fetchData();
    } catch (err) {
      error = err;
      console.log("Statistics couldn't load due to:", err);
    } finally {
      loading = false;
      disabled = false;
    }
  };

  onMount(async () => {
    refresh();
  });
</script>

<main>
  <div>
    <button class="refresh" on:click={refresh} {disabled} class:disabled>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
      </svg></button
    >
  </div>
  {#if loading}
    <div class:lds-dual-ring={loading} />
  {:else if data}
<<<<<<< HEAD
    <div>
      <h2 class="node-title">Node Distribution</h2>
    </div>
=======
    <h2 class="node-title map-container">Node Distribution</h2>
>>>>>>> 53ea1d9b9d8a42f1c00e420a10da1411c4952313
    <div class="map-container">
      <div class="map">
        <tf-map
          r="76"
          g="187"
          b="217"
          nodes={JSON.stringify(data.nodesDistribution)}
        />
      </div>
    </div>
    <div class="map-container">
      <div class="state-title">
        <h2>Statistics</h2>
        <CardList {data} />
      </div>
    </div>
  {:else}
    <p>Statistics couldn't load due to: {error}</p>
  {/if}
</main>

<style>
  p {
    margin: 0px;
    padding: 25px;
  }
  .refresh {
    border: none;
    background: #333;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    float: right;
    color: white;
  }
  .disabled {
    background-color: rgba(221, 221, 221, 0.633);
  }
  main {
    background-color: #ebe7e7;
    min-height: 100vh;
  }

  .map-container {
    display: flex;
    justify-content: center;
    padding: 0.7rem 0rem;
  }
  .map {
    width: 55rem;
    display: inline-block;
  }

<<<<<<< HEAD
=======
  /* .state-title {
    padding: 0 15rem;
  } */

>>>>>>> 53ea1d9b9d8a42f1c00e420a10da1411c4952313
  .state-title,
  .node-title {
    background-color: #333;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
<<<<<<< HEAD
  }
  .refresh-div {
    background-color: #333;
    color: #fff;
    text-align: center;
=======
>>>>>>> 53ea1d9b9d8a42f1c00e420a10da1411c4952313
  }

  h2 {
    margin: 0;
    padding: 0.6rem;
    font-weight: 400;
  }

  .lds-dual-ring {
    display: inline-block;
    margin: auto;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: auto;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
