import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridList,

  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatGridList,
    
  ],
  declarations: []
})
export class MaterialModule { }
