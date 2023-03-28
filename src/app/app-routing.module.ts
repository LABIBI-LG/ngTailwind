import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { STATIC_ROUTES } from './core/constant/routes.constant';

const routes: Routes = [
  {
    path: STATIC_ROUTES.HOME,
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: STATIC_ROUTES.TEST,
    loadChildren: () => import('./pages/test-page/test-page.module').then(m => m.TestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
