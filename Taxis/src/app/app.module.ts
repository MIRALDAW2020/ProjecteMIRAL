import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciComponent } from './components/inici/inici.component';
import { QuiSomComponent } from './components/qui-som/qui-som.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { CompanyiaComponent } from './components/companyia/companyia.component';
import { Error404Component } from './components/error404/error404.component';
import { TrobamComponent } from './components/trobam/trobam.component';
import { SigninComponent } from './components/signin/signin.component';
import { IngresComponent } from './components/ingres/ingres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TrobamConnectatComponent } from './components/trobam-connectat/trobam-connectat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IniciComponent,
    QuiSomComponent,
    ContacteComponent,
    CompanyiaComponent,
    TrobamComponent,
    Error404Component,
    SigninComponent,
    IngresComponent,
    PerfilComponent,
    TrobamConnectatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
