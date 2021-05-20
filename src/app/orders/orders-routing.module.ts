import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [{ path: 'orders', redirectTo: 'orders/index', pathMatch: 'full' },
{ path: 'orders/list', component: ListComponent },
{ path: 'orders/:playerId/details', component: DetailsComponent },
{ path: 'orders/create', component: CreateComponent },
{ path: 'orders/:playerId/edit', component: EditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
