import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisionandmissionPageRoutingModule } from './visionandmission-routing.module';

import { VisionandmissionPage } from './visionandmission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisionandmissionPageRoutingModule
  ],
  declarations: [VisionandmissionPage]
})
export class VisionandmissionPageModule {}
