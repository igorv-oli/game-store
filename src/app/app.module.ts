import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutInternalComponent } from './pages/layouts/layout-internal/layout-internal.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { JogosComponent } from './pages/internal/jogos/jogos.component';
import { AcaoComponent } from './pages/internal/acao/acao.component';
import { AventuraComponent } from './pages/internal/aventura/aventura.component';
import { CorridaComponent } from './pages/internal/corrida/corrida.component';
import { EsporteComponent } from './pages/internal/esporte/esporte.component';
import { RpgComponent } from './pages/internal/rpg/rpg.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutInternalComponent,
    NotFoundComponent,
    LeftMenuComponent,
    FooterComponent,
    MenuComponent,
    JogosComponent,
    AcaoComponent,
    AventuraComponent,
    CorridaComponent,
    EsporteComponent,
    RpgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
