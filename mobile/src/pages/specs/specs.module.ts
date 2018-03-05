import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecsPage } from './specs';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SpecsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecsPage),
    TranslateModule.forChild()
  ],
})
export class SpecsPageModule {}
