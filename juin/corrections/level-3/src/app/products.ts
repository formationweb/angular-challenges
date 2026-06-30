export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  status: 'Disponible' | 'Archive';
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Angular Essentials',
    category: 'Formation',
    description: 'Les bases modernes des composants, templates et services.',
    status: 'Disponible',
  },
  {
    id: 2,
    name: 'Signals Starter Kit',
    category: 'Outils',
    description: 'Des exemples pratiques pour manipuler signal et computed.',
    status: 'Disponible',
  },
  {
    id: 3,
    name: 'RxJS Deep Dive',
    category: 'Formation',
    description: 'Comprendre les flux asynchrones et les operateurs utiles.',
    status: 'Archive',
  },
  {
    id: 4,
    name: 'TypeScript Handbook',
    category: 'Documentation',
    description: 'Reference pour typer proprement les applications Angular.',
    status: 'Disponible',
  },
  {
    id: 5,
    name: 'Component Patterns',
    category: 'Architecture',
    description: 'Structurer une interface avec des composants reutilisables.',
    status: 'Disponible',
  },
  {
    id: 6,
    name: 'Testing Recipes',
    category: 'Qualite',
    description: 'Scenarios de tests unitaires pour composants Angular.',
    status: 'Archive',
  },
];
