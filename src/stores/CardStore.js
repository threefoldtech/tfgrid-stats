import { writable } from 'svelte/store';

const CardStore = writable([
  {
    id: 1,
    title: 'Python or JavaScript?',
    icon: 'Python',
    result: 15,
  },
  {
    id: 2,
    title: 'Python or JavaScript?',
    icon: 'Python',
    result: 15,
  },
  {
    id: 3,
    title: 'Python or JavaScript?',
    icon: 'Python',
    result: 15,
  },
  {
    id: 4,
    title: 'Python or JavaScript?',
    icon: 'Python',
    result: 15,
  },
  {
    id: 8,
    title: 'Python or JavaScript?',
    icon: 'Python',
 
    result: 15,
  },
  {
    id: 5,
    title: 'Python or JavaScript?',
    icon: 'Python',
    result: 15,
  },
  {
    id: 6,
    title: 'Python or JavaScript?',
    icon: 'Python', 
    result: 15,
  },
  {
    id: 7,
    title: 'Python or JavaScript?',
    icon: 'Python',
    result: 15,
  },
]);

export default CardStore;