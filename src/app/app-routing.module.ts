import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodsComponent } from './add-foods/add-foods.component';
import { ChalkboardPlannerComponent } from './chalkboard-planner/chalkboard-planner.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { StartInfoComponent } from './start-info/start-info.component';
import { OrderFoodsComponent } from './order-foods/order-foods.component';

const routes: Routes = [
  { path: 'start-info', component: StartInfoComponent },
  { path: 'add-foods', component: AddFoodsComponent },
  { path: 'chalkboard-planner', component: ChalkboardPlannerComponent },
  { path: 'edit-list', component: EditListComponent },
  { path: 'order-foods', component: OrderFoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
