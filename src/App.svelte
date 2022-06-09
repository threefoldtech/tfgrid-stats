<script lang="ts">
  import { onMount } from "svelte";
  import { fetchData, IStatsRes } from "./utils/fetchData";
  import CardList from "./components/CardList.svelte";

  let data: IStatsRes;
  let loading = true;
  let error: string;

  $: refresh = async () => {
    try {
      data = await fetchData();
    } catch (err) {
      error = err;
      console.log("Statistics couldn't load due to:", err);
    } finally {
      loading = false;
    }
  };

  onMount(async () => {
    refresh();
  });
</script>

<main>
  {#if loading}
    <div class:lds-dual-ring={loading} />
  {:else if data}
    <div>
      <button class="refresh" on:click={refresh}>
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
      <h2 class="node-title">Node Distribution</h2>
    </div>
    <div class="map-container">
      <div class="map">
        <tf-map nodes={JSON.stringify(data.nodesDistribution)} />
      </div>
    </div>

    <div class="state-title">
      <h2>Statistics</h2>
    </div>
    <CardList {data} />
  {:else}
    <p>Statistics couldn't load due to: {error}</p>
  {/if}
</main>

<style>
  .refresh {
    /* display: block;
    margin-left: auto;
    margin-right: 1rem;*/
    border: none;
    padding: 1.5rem;
    background: transparent;
    float: right;
  }
  main {
    background-color: #ebe7e7;
  }

  .map-container {
    display: flex;
    justify-content: center;
  }
  .map {
    width: 65rem;
    display: inline-block;
  }
  .state-title,
  .node-title {
    background-color: #ebe7e7;
    color: #353434b6;
  }

  h2 {
    margin: 0;
    padding: 1rem;
  }

  .lds-dual-ring {
    display: inline-block;
    margin: auto;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
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
