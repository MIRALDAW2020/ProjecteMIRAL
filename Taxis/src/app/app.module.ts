import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciComponent } from './components/inici/inici.component';
import { QuiSomComponent } from './components/qui-som/qui-som.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { CompanyiaComponent } from './components/companyia/companyia.component';
import { TrabomComponent } from './components/trabom/trabom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IniciComponent,
    QuiSomComponent,
    ContacteComponent,
    CompanyiaComponent,
    TrabomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
