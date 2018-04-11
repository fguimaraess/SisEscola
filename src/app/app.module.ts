import { TurmaService } from './turma.service';
import { EscolaService } from './escola.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EscolaComponent } from './escola/escola.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TurmaComponent } from './turma/turma.component';
import { FormsModule } from '@angular/forms';
import { EscolaDetailComponent } from './escola-detail/escola-detail.component';
import { TurmaDetailComponent } from './turma-detail/turma-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EscolaFormComponent } from './escola-form/escola-form.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
    EscolaDetailComponent,
    TurmaDetailComponent,
    HomeComponent,
    EscolaFormComponent,
    TurmaFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ EscolaService, TurmaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
