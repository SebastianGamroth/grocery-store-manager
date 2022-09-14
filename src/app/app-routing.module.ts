import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodsComponent } from './add-foods/add-foods.component';
import { ChalkboardPlannerComponent } from './chalkboard-planner/chalkboard-planner.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { StartInfoComponent } from './start-info/start-info.component';
import { OrderFoodsComponent } from './order-foods/order-foods.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'start-info', component: StartInfoComponent },
  { path: 'add-foods', component: AddFoodsComponent },
  { path: 'chalkboard-planner', component: ChalkboardPlannerComponent },
  { path: 'edit-list', component: EditListComponent },
  { path: 'order-foods', component: OrderFoodsComponent },
  { path: 'copyright', component: CopyrightComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
