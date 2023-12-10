import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'projects',
        loadComponent: () =>
          import('./../projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full',
      },
    ],
  },
];
