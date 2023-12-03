import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisionandmissionPage } from './visionandmission.page';

const routes: Routes = [
  {
    path: '',
    component: VisionandmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisionandmissionPageRoutingModule {}
