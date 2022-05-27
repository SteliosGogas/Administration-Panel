import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PieComponent } from './modules/pie/pie.component';
import { LineComponent } from './modules/line/line.component';
 
const routes: Routes = [
  { path: '', component: DefaultComponent,
    children: [{
      path: '', component: DashboardComponent
    },
    {
      path: 'pie', component: PieComponent
    },
    { 
      path: 'line' , component: LineComponent
    }
   ]
  },
  { path: '**' , pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
