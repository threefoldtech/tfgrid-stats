<script lang="ts">
  import { onMount } from "svelte";
  import type { MapActions } from "../types/map";
  import SvgMap from "./SvgMap.svelte";
  import {createEventDispatcher} from 'svelte';


  let dispatch = createEventDispatcher()

  let map: SVGElement;
  export let mapActions: MapActions;

  onMount(() => {
    const countryPaths = map.querySelectorAll(
      "path"
    ) as unknown as SVGPathElement[];

    const countries = Array.from(countryPaths).reduce((res, el) => {
      const name = el.getAttribute("title");
      res.set(name.toLocaleLowerCase(), el);
      return res;
    }, new Map<string, SVGPathElement>());

    mapActions = {
      update(country, color) {
        countries.get(country).style.fill = color;
      },
    };
  });


  const controllTooltip = (e) => {
    let el = document.querySelector('#nodes') as HTMLElement | null;
    el.style.display = 'block';
  }

  const destroyTooltip = (e) => {
    let el = document.querySelector('#nodes') as HTMLElement | null;
    el.style.display = 'none';
    console.log(el.style);
  }

  const handleHover = (e) => {
    controllTooltip(e);
  }




</script>

<div id="nodes">
  <div class="tooltip">
    <p class="country">country</p>
    <p><span>No.of nodes:</span> value</p>
  </div>
</div>

    
    <SvgMap bind:map on:mouseover={handleHover} on:mouseleave={destroyTooltip} />

<style>
  #nodes{
    display: none;
    width: 10rem;
    height: 5rem;
    border-radius: 10px;
    background-color: #fff;
  }
  .country{
    font-size: bold;
  }
</style>
