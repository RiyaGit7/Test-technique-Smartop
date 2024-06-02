import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurgeonRankingComponent } from './components/surgeon-ranking/surgeon-ranking.component';

const routes: Routes = [
  { path: '', redirectTo: '/surgeons', pathMatch: 'full' },
  { path: 'surgeons', component: SurgeonRankingComponent },
  { path: '', component: SurgeonRankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
