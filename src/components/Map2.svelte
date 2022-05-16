<script lang="ts">
  import { onMount } from "svelte";
  import type { MapActions } from "../types/map";
  import SvgMap from "./SvgMap.svelte";

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
</script>

<SvgMap bind:map />
