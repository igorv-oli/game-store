import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutInternalComponent } from './pages/layouts/layout-internal/layout-internal.component';
import { JogosComponent } from './pages/internal/jogos/jogos.component';
import { RpgComponent } from './pages/internal/rpg/rpg.component';
import { EsporteComponent } from './pages/internal/esporte/esporte.component';
import { CorridaComponent } from './pages/internal/corrida/corrida.component';
import { AventuraComponent } from './pages/internal/aventura/aventura.component';
import { AcaoComponent } from './pages/internal/acao/acao.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutInternalComponent,
    children: [
      { path: '', component: JogosComponent },
      { path: 'jogos', component: JogosComponent },
      { path: 'acao', component: AcaoComponent },
      { path: 'aventura', component: AventuraComponent },
      { path: 'corrida', component: CorridaComponent },
      { path: 'esporte', component: EsporteComponent },
      { path: 'rpg', component: RpgComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
