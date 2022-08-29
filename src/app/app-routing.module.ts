import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodsComponent } from './add-foods/add-foods.component';
import { ChalkboardPlannerComponent } from './chalkboard-planner/chalkboard-planner.component';

const routes: Routes = [
  { path: 'add-foods', component: AddFoodsComponent },
  { path: 'chalkboard -planner', component: ChalkboardPlannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
