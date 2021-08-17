import { Family } from '../models';

export const DEFAULT_FAMILIES: Family[] = [
  {
    id: 1,
    name: 'Ivanov',
    father: {
      name: 'Ivan',
      age: 30,
    },
    mother: {
      name: 'Svetlana',
      age: 28,
    },
    children: [
      {
        name: 'Denis',
        age: 5
      }
    ],
  }
];
