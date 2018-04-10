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

@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
    EscolaDetailComponent,
    TurmaDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ EscolaService, TurmaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
