<script lang="ts">
  import SvgMap from "./SvgMap.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import noOfNodesv3 from "../filters/noOfNodes";

  export let country = null;
  export let nodes = 0;
  let NoNodes = 0;

  let dispatch = createEventDispatcher();
  let noNodes_dev = 0;
  let noNodes_test = 0;
  let noNodes_main = 0;

  let map: SVGElement;

  const handleHover = async (e) => {
    if (e.target instanceof SVGPathElement) {
      dispatch("handleHover", e);
      let el = document.querySelector("#nodes") as HTMLElement | null;
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.left = e.screenX + "px";
      el.style.top = e.screenY + "px";
    }
    country = e.target.getAttribute("title");
    const response_dev = await fetch("https://gridproxy.dev.grid.tf/nodes");
    const body_dev = await response_dev.json();
    for (var d of body_dev) {
      if (d.country == country) {
        noNodes_dev = noNodes_dev + 1;
      }
    }

    const response_test = await fetch("https://gridproxy.test.grid.tf/nodes");
    const body_test = await response_test.json();
    for (var d of body_test) {
      if (d.country == country) {
        noNodes_test = noNodes_test + 1;
      }
    }
    const response_main = await fetch("https://gridproxy.grid.tf/nodes");
    const body_main = await response_main.json();
    for (var d of body_main) {
      if (d.country == country) {
        noNodes_main = noNodes_main + 1;
      }
    }
    nodes = noNodes_main + noNodes_dev + noNodes_test;

  //   fetch("https://explorer.grid.tf/api/v1/nodes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data.approved);
  //       // for (var i =0; ) {
  //       //   console.log(d.country);
  //       //   if (d.country == country) {
  //       //     console.log(d.country);
  //       //     // NoNodes = NoNodes + 1;
  //       //   }
  //       // }

  //       // nodes = NoNodes + noNodes_v3;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       return [];
  //     });
  // };

  const destroyTooltip = (e) => {
    if (e.target instanceof SVGPathElement) {
      let el = document.querySelector("#nodes") as HTMLElement | null;
      el.style.opacity = "0";
      el.style.display = "hidden";
      country = null;
      nodes = 0;
      noNodes_main = 0;
      noNodes_test = 0;
      noNodes_dev = 0;

      dispatch("destroyTooltip", e);
    }
  };
</script>

<div id="nodes">
  <div class="tooltip">
    <p class="country">{country}</p>
    <p><span>No.of nodes:</span> {nodes}</p>
  </div>
</div>

<SvgMap bind:map on:mouseover={handleHover} on:mouseout={destroyTooltip} />

<style>
  #nodes {
    min-width: 10rem;
    max-width: fit-content;
    min-height: 5rem;
    max-height: fit-content;
    border-radius: 10px;
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
    transition-property: opacity, left, top, ease-in-out;
    transition-duration: 0, 1s, 1s;
    position: absolute;
  }

  .tooltip {
    padding: 0 1rem;
  }
  .country {
    font-size: 18px;
    font-weight: bold;
  }
</style>
