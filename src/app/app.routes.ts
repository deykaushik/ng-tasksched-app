import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/app-shell/app-shell.routes').then((c) => c.appRoutes),
  },
];
