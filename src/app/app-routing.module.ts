import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodsComponent } from './add-foods/add-foods.component';

const routes: Routes = [
  { path: 'add-foods', component: AddFoodsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
