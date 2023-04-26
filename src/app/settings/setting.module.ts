import { NgModule } from "@angular/core";
import { SettingsRoutingModule } from "./setting-routing.module";
import { SettingsComponent } from "./settings.component";

@NgModule({
  declarations: [SettingsComponent],
  imports: [SettingsRoutingModule]
})

export class SettingModule {}