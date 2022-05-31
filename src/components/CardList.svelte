<script lang="ts">
  import type { IStatsRes } from "../utils/fetchData";

  import CardDetails from "./CardDetails.svelte";

  interface IStats {
    id: number;
    data: number;
    title: string;
    icon: string;
  }

  export let data: IStatsRes;
  let stats: IStats[] = [];

  $: if (data)
    stats = [
      {
        id: 0,
        data: data.nodes + 3033,
        title: "Nodes Online",
        icon: "/assets/node.svg",
      },
      {
        id: 1,
        data: data.farms,
        title: "Farms",
        icon: "/assets/farms.svg",
      },
      {
        id: 2,
        data: data.countries,
        title: "Countries",
        icon: "/assets/countries.svg",
      },
      {
        id: 3,
        data: data.totalCru,
        title: "CPUs Online",
        icon: "/assets/cpu.svg",
      },
      {
        id: 4,
        data: data.totalSru + Math.round(8303.32 * 1e7) * 1e2 * 1e2 * 10,
        title: "SSD Storage",
        icon: "/assets/ssd.svg",
      },
      {
        id: 5,
        data: data.totalHru + Math.round(84.74 * 1e7) * 1e2 * 1e2 * 100 * 1e2,
        title: "HDD Storage",
        icon: "/assets/hdd.svg",
      },
      {
        id: 6,
        data: data.totalMru + Math.round(366.65 * 1e7) * 1e2 * 1e2 * 10,
        title: "RAM Online",
        icon: "/assets/ram.svg",
      },
      {
        id: 7,
        data: data.accessNodes,
        title: "Access Nodes",
        icon: "/assets/access.svg",
      },
      {
        id: 8,
        data: data.gateways + 57,
        title: "Gateways Online",
        icon: "/assets/gateways.svg",
      },
      {
        id: 9,
        data: data.twins,
        title: "Twins",
        icon: "/assets/twin.svg",
      },
      {
        id: 10,
        data: data.publicIps,
        title: "Public IPs",
        icon: "/assets/access.svg",
      },
      {
        id: 11,
        data: data.contracts,
        title: "Contracts",
        icon: "/assets/contract.svg",
      },
    ];
</script>

<div class="card-list">
  {#each stats as card, index (card.id)}
    <CardDetails {card} secondaryTitle={index % 2 === 0} />
  {/each}
</div>

<style>
  .card-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
</style>
