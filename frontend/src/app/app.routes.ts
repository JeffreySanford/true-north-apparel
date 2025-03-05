import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'design',
      loadChildren: () =>
        import('./features/design/design.module').then((m) => m.DesignModule),
    },
    // ...
    { path: '**', redirectTo: '' }, // fallback
  ];
