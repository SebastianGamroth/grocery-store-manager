import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodsComponent } from './add-foods/add-foods.component';
import { ChalkboardPlannerComponent } from './chalkboard-planner/chalkboard-planner.component';
import { EditListComponent } from './edit-list/edit-list.component';

const routes: Routes = [
  { path: 'add-foods', component: AddFoodsComponent },
  { path: 'chalkboard-planner', component: ChalkboardPlannerComponent },
  { path: 'edit-list', component: EditListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
