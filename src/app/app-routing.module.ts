import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutoleappsComponent } from './tutoleapps/tutoleapps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutoleappDetailComponent } from './tutoleapp-detail/tutoleapp-detail.component';

const routes: Routes = [
  { path: 'tutoleapps', component: TutoleappsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TutoleappDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
