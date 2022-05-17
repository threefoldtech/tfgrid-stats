// import { writable } from 'svelte/store';

// const CardStore = writable([
//   {
//     id: 1,
//     title: 'Python or JavaScript?',
//     icon: 'Python',
//     result: 15,
//   },

import { writable, derived } from 'svelte/store';
import toTeraOrGiga from "../filters/toTeraOrGiga";

export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const CardStore = derived(apiData, ($apiData:any) => {
    if(apiData){ 
console.log($apiData.nodes);
        return [
        { id: 0, data: $apiData.nodes, title: "Nodes Online", icon: "mdi-laptop" },
        { id: 1, data: $apiData.farms, title: "Farms", icon: "mdi-tractor" },
        { id: 2, data: $apiData.countries, title: "Countries", icon: "mdi-earth" },
        { id: 3, data: $apiData.totalCru, title: "CPUs Online", icon: "mdi-cpu-64-bit" },
        { id: 4, data: toTeraOrGiga($apiData.totalSru), title: "SSD Storage", icon: "mdi-nas" },
        { id: 5, data: toTeraOrGiga($apiData.totalHru), title: "HDD Storage", icon: "mdi-harddisk" },
        { id: 6, data: toTeraOrGiga($apiData.totalMru), title: "RAM Online", icon: "mdi-memory" },
        { id: 7, data: $apiData.accessNodes, title: "Access Nodes", icon: "mdi-gate" },
        { id: 8, data: $apiData.gateways, title: "Gateways Online", icon: "mdi-boom-gate-outline" },
        { id: 9, data: $apiData.twins, title: "Twins", icon: "mdi-brain" },
        { id: 10, data: $apiData.publicIps, title: "Public IPs", icon: "mdi-access-point" },
        { id: 11, data: $apiData.contracts, title: "Contracts", icon: "mdi-file-document-edit-outline" },
      ]

    }
    else{
        return [];

    }

 
 
});