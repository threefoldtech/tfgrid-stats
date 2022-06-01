<script lang="ts">
  import { onMount } from "svelte";
  import { fetchData, IStatsRes } from "./utils/fetchData";
  import CardList from "./components/CardList.svelte";

  let data: IStatsRes;
  let loading = true;

  onMount(async () => {
    try {
      data = await fetchData();
    } catch (err) {
      console.log(
        "Statistics couldn't load due to:",
        err,
        " . Retrying to Load Statistics."
      );
      try {
        data = await fetchData();
      } catch (err) {
        console.log("Statistics couldn't load due to:", err);
      }
    } finally {
      loading = false;
    }
  });
</script>

<main>
  {#if loading}
    <div class:lds-dual-ring={loading} />
  {:else if data}
    <h2 class="node-title">Node Distribution</h2>
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
    <p>Statistics aren't loading probably, Please refresh.</p>
  {/if}
</main>

<style>
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
