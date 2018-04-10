import { EscolaDetailComponent } from './escola-detail/escola-detail.component';
import { HomeComponent } from './home/home.component';
import { TurmaComponent } from './turma/turma.component';
import { EscolaComponent } from './escola/escola.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'escola', component: EscolaComponent },
  { path: 'detalhe/:id', component: EscolaDetailComponent },
  { path: 'turma', component: TurmaComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }