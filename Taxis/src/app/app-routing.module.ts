// import { TrobamComponent } from './trobam/trobam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyiaComponent } from './components/companyia/companyia.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { Error404Component } from './components/error404/error404.component';
import { IniciComponent } from './components/inici/inici.component';
import { QuiSomComponent } from './components/qui-som/qui-som.component';
import { TrobamComponent } from './components/trobam/trobam.component';
import { SigninComponent } from './components/signin/signin.component';
import { IngresComponent } from './components/ingres/ingres.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TrobamConnectatComponent } from './components/trobam-connectat/trobam-connectat.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inici' },
  { path: 'inici', component: IniciComponent},
  { path: 'error404', component: Error404Component},
  { path: 'perfil', component: PerfilComponent},
  { path: 'trobam', component: TrobamComponent},
  { path: 'quisom', component: QuiSomComponent},
  { path: 'contacte', component: ContacteComponent},
  { path: 'companyia', component: CompanyiaComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'ingres', component: IngresComponent},
  { path: 'trobam-connectat', component: TrobamConnectatComponent},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
