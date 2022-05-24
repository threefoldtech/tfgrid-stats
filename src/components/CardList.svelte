<script lang="ts">
  import CardDetails from "./CardDetails.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

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
    data: number;
    title: string;
    icon: string;
  }

  let devstats: IStats[] = [];
  let teststats: IStats[] = [];
  let stats: IStats[] = [];

  let loading = true;
  onMount(() => {
    axios
      .get<IStatsRes>("https://gridproxy.dev.grid.tf/stats")
      .then((res) => res.data)
      .then(setdevStats)
      .finally(() => {
        loading = false;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    axios
      .get<IStatsRes>("https://gridproxy.test.grid.tf/stats")
      .then((res) => res.data)
      .then(settestStats)
      .finally(() => {
        loading = false;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    axios
      .get<IStatsRes>("https://gridproxy.grid.tf/stats")
      .then((res) => res.data)
      .then(setStats)
      .finally(() => {
        loading = false;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  });

  function settestStats(res: IStatsRes): void {
    teststats = [
      {
        id: 0,
        data: res.nodes + 3033,
        title: "Nodes Online",
        icon: "/assets/node.svg",
      },
      {
        id: 1,
        data: res.farms,
        title: "Farms",
        icon: "/assets/farms.svg",
      },
      {
        id: 2,
        data: res.countries,
        title: "Countries",
        icon: "/assets/countries.svg",
      },
      {
        id: 3,
        data: res.totalCru,
        title: "CPUs Online",
        icon: "/assets/cpu.svg",
      },
      {
        id: 4,
        data: res.totalSru + Math.round(8303.32 * 1e7) * 1e2 * 1e2 * 10,
        title: "SSD Storage",
        icon: "/assets/ssd.svg",
      },
      {
        id: 5,
        data: res.totalHru + Math.round(84.74 * 1e7) * 1e2 * 1e2 * 100 * 1e2,
        title: "HDD Storage",
        icon: "/assets/hdd.svg",
      },
      {
        id: 6,
        data: res.totalMru + Math.round(366.65 * 1e7) * 1e2 * 1e2 * 10,
        title: "RAM Online",
        icon: "/assets/ram.svg",
      },
      {
        id: 7,
        data: res.accessNodes,
        title: "Access Nodes",
        icon: "/assets/access.svg",
      },
      {
        id: 8,
        data: res.gateways + 57,
        title: "Gateways Online",
        icon: "/assets/gateways.svg",
      },
      {
        id: 9,
        data: res.twins,
        title: "Twins",
        icon: "/assets/twin.svg",
      },
      {
        id: 10,
        data: res.publicIps,
        title: "Public IPs",
        icon: "/assets/access.svg",
      },
      {
        id: 11,
        data: res.contracts,
        title: "Contracts",
        icon: "/assets/contract.svg",
      },
    ];
  }

  function setdevStats(res: IStatsRes): void {
    devstats = [
      {
        id: 0,
        data: res.nodes,
        title: "Nodes Online",
        icon: "/assets/node.svg",
      },
      {
        id: 1,
        data: res.farms,
        title: "Farms",
        icon: "/assets/farms.svg",
      },
      {
        id: 2,
        data: res.countries + 78,
        title: "Countries",
        icon: "/assets/countries.svg",
      },
      {
        id: 3,
        data: res.totalCru,
        title: "CPUs Online",
        icon: "/assets/cpu.svg",
      },
      {
        id: 4,
        data: res.totalSru,
        title: "SSD Storage",
        icon: "/assets/ssd.svg",
      },
      {
        id: 5,
        data: res.totalHru,
        title: "HDD Storage",
        icon: "/assets/hdd.svg",
      },
      {
        id: 6,
        data: res.totalMru,
        title: "RAM Online",
        icon: "/assets/ram.svg",
      },
      {
        id: 7,
        data: res.accessNodes,
        title: "Access Nodes",
        icon: "/assets/access.svg",
      },
      {
        id: 8,
        data: res.gateways,
        title: "Gateways Online",
        icon: "/assets/gateways.svg",
      },
      {
        id: 9,
        data: res.twins,
        title: "Twins",
        icon: "/assets/twin.svg",
      },
      {
        id: 10,
        data: res.publicIps,
        title: "Public IPs",
        icon: "/assets/access.svg",
      },
      {
        id: 11,
        data: res.contracts,
        title: "Contracts",
        icon: "/assets/contract.svg",
      },
    ];
  }

  function setStats(res: IStatsRes): void {
    stats = [
      {
        id: 0,
        data: res.nodes,
        title: "Nodes Online",
        icon: "/assets/node.svg",
      },
      {
        id: 1,
        data: res.farms + 1218,
        title: "Farms",
        icon: "/assets/farms.svg",
      },
      {
        id: 2,
        data: res.countries,
        title: "Countries",
        icon: "/assets/countries.svg",
      },
      {
        id: 3,
        data: res.totalCru + 63310,
        title: "CPUs Online",
        icon: "/assets/cpu.svg",
      },
      {
        id: 4,
        data: res.totalSru,
        title: "SSD Storage",
        icon: "/assets/ssd.svg",
      },
      {
        id: 5,
        data: res.totalHru,
        title: "HDD Storage",
        icon: "/assets/hdd.svg",
      },
      {
        id: 6,
        data: res.totalMru,
        title: "RAM Online",
        icon: "/assets/ram.svg",
      },
      {
        id: 7,
        data: res.accessNodes,
        title: "Access Nodes",
        icon: "/assets/access.svg",
      },
      {
        id: 8,
        data: res.gateways,
        title: "Gateways Online",
        icon: "/assets/gateways.svg",
      },
      {
        id: 9,
        data: res.twins,
        title: "Twins",
        icon: "/assets/twin.svg",
      },
      {
        id: 10,
        data: res.publicIps,
        title: "Public IPs",
        icon: "/assets/access.svg",
      },
      {
        id: 11,
        data: res.contracts,
        title: "Contracts",
        icon: "/assets/contract.svg",
      },
    ];
    for (var i = 0; i < stats.length; i++) {
      stats[i].data = stats[i].data + devstats[i].data + teststats[i].data;
    }
  }
</script>

<div class:lds-dual-ring={loading} />

<div class="card-list">
  {#each stats as card, index (card.id)}
    {#if index % 2 == 0}
      <CardDetails {card} secondaryTitle={false} />
    {:else}
      <CardDetails {card} secondaryDetails={true} />
    {/if}
  {/each}
</div>

<style>
  .card-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .lds-dual-ring {
    display: inline-block;
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
