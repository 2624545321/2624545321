import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'setting',
    loadChildren: () => import('./settings/setting.module').then(m => m.SettingModule)
  },
  // {
  //   path: 'auth',
  //   loadChildren: loadRouteModule('./auth')
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    preloadingStrategy: NoPreloading
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }