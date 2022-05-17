<script lang="ts">
  import { onMount } from "svelte";
  import axios from "../utils/axios";
  import toTeraOrGiga from "../filters/toTeraOrGiga";

  interface IStatsRes {
    nodes: number;
    farms: number;
    countries: number;
    totalCru: number;
    totalSru: number;
    totalMru: number;
    totalHru: number;
    publicIps: number;
    accessNodes: number;
    gateways: number;
    twins: number;
    contracts: number;
  }

  interface IStats {
    id: number;
    data: string;
    title: string;
    icon: string;
  }

  let stats: IStats[] = [];

  onMount(() => {
    axios
      .get<IStatsRes>("/stats")
      .then((res) => res.data)
      .then(setStats);
  });

  function setStats(res: IStatsRes): void {
    stats = [
      {
        id: 0,
        data: res.nodes.toString(),
        title: "Nodes Online",
        icon: "mdi-laptop",
      },
      {
        id: 1,
        data: res.farms.toString(),
        title: "Farms",
        icon: "mdi-tractor",
      },
      {
        id: 2,
        data: res.countries.toString(),
        title: "Countries",
        icon: "mdi-earth",
      },
      {
        id: 3,
        data: res.totalCru.toString(),
        title: "CPUs Online",
        icon: "mdi-cpu-64-bit",
      },
      {
        id: 4,
        data: toTeraOrGiga(res.totalSru.toString()),
        title: "SSD Storage",
        icon: "mdi-nas",
      },
      {
        id: 5,
        data: toTeraOrGiga(res.totalHru.toString()),
        title: "HDD Storage",
        icon: "mdi-harddisk",
      },
      {
        id: 6,
        data: toTeraOrGiga(res.totalMru.toString()),
        title: "RAM Online",
        icon: "mdi-memory",
      },
      {
        id: 7,
        data: res.accessNodes.toString(),
        title: "Access Nodes",
        icon: "mdi-gate",
      },
      {
        id: 8,
        data: res.gateways.toString(),
        title: "Gateways Online",
        icon: "mdi-boom-gate-outline",
      },
      { id: 9, data: res.twins.toString(), title: "Twins", icon: "mdi-brain" },
      {
        id: 10,
        data: res.publicIps.toString(),
        title: "Public IPs",
        icon: "mdi-access-point",
      },
      {
        id: 11,
        data: res.contracts.toString(),
        title: "Contracts",
        icon: "mdi-file-document-edit-outline",
      },
    ];
  }
</script>

{#each stats as s}
  <div>
    {JSON.stringify(s)}
    <!-- {JSON.stringify(s.title)} -->
  </div>
{/each}
<!-- <script>
  import {CardStore, apiData} from "../stores/CardStore.ts";
  import CardDetails from "./CardDetails.svelte";
  import { onMount } from "svelte";
  onMount(async () => {
    fetch("https://gridproxy.dev.grid.tf/stats")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.nodes);



      apiData.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });
  });
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


 -->
