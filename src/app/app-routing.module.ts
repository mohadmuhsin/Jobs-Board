import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"view",component:DetailViewComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
