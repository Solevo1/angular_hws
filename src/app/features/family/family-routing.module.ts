import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFamilyComponent } from './pages/add-family/add-family.component';
import { FamiliesComponent } from './pages/families/families.component';
import { FamilyComponent } from './pages/family/family.component';
import { FamilyResolver } from './resolvers/family.resolver';

const routes: Routes = [
  {
    path: '',
    component: FamiliesComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-family',
    component: AddFamilyComponent,
  },
  {
    path: ':id',
    component: FamilyComponent,
    resolve: {
      family: FamilyResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }
