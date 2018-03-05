import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocprofilePage } from './docprofile';

@NgModule({
  declarations: [
    DocprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(DocprofilePage),
  ],
})
export class DocprofilePageModule {}
