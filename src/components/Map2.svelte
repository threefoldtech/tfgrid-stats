<script lang="ts">
  import SvgMap from "./SvgMap.svelte";
  import {createEventDispatcher} from 'svelte';
  import { fade } from 'svelte/transition';


  export let country = null;
  export let nodes = 0;

  let dispatch = createEventDispatcher()

  let map: SVGElement;


  const handleHover = (e) => {
    if (e.target instanceof SVGPathElement) {
      dispatch('handleHover', e);
      let el = document.querySelector('#nodes') as HTMLElement | null;
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.left = e.screenX+'px';
      el.style.top = e.screenY+'px';      
    }
    country = e.target.getAttribute("title")      
  }

  const destroyTooltip = (e) => { 
    if (e.target instanceof SVGPathElement) {
      let el = document.querySelector('#nodes') as HTMLElement | null;
      el.style.opacity = '0';
      el.style.display = 'hidden';
      country = null;
      nodes = 0;
      dispatch('destroyTooltip', e);
    }
  }





</script>

<div id="nodes">
  <div class="tooltip">
    <p class="country">{country}</p>
    <p><span>No.of nodes:</span>  {nodes}</p>
  </div>
</div>


    
<SvgMap bind:map on:mouseover={handleHover} on:mouseout={destroyTooltip} />

<style>
  #nodes{
    min-width: 10rem;
    max-width: fit-content;
    min-height: 5rem;
    max-height: fit-content;
    border-radius: 10px;
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
    transition-property: opacity, left, top,  ease-in-out;
    transition-duration: 0, 1s, 1s;
    position: absolute;
  }

  .tooltip{
    padding: 0 1rem;
  }
  .country{
    font-size: 18px;
    font-weight: bold;
  }
</style>
