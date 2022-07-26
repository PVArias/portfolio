import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'sobre-mi', component: SobreMiComponent},
  { path: 'habilidades', component: HabilidadesComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
