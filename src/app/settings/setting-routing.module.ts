import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings.component";

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./home.module').then(m => m.LazyModule())
    component: SettingsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingsRoutingModule {}