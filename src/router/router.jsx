import { createBrowserRouter } from 'react-router-dom';

import { CharacterPage, HomePage, HousesPage, ProfessorsPage, SpellsPage, StudentsPage } from '@/pages/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/character/:id',
    element: <CharacterPage />,
  },
  {
    path: '/spells',
    element: <SpellsPage />,
  },
  {
    path: '/houses',
    element: <HousesPage />,
  },
  {
    path: '/students/:house',
    element: <StudentsPage />,
  },
  {
    path: '/professors',
    element: <ProfessorsPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
]);
