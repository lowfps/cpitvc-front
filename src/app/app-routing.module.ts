import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NormatividadComponent } from './components/normatividad/normatividad.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'certificados', component: CertificadosComponent},
  { path: 'normatividad', component: NormatividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
