import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './pages/family/family.component';
import { FamiliesComponent } from './pages/families/families.component';
import { AddFamilyComponent } from './pages/add-family/add-family.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FamilyComponent,
    FamiliesComponent,
    AddFamilyComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FamilyRoutingModule
  ]
})
export class FamilyModule { }
