import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
  @Input() visibility: boolean = true;

  itens = [
    { label: 'Ação', routerLink: 'acao' },
    { label: 'Aventura', routerLink: 'aventura' },
    { label: 'Corrida', routerLink: 'corrida' },
    { label: 'Esporte', routerLink: 'esporte' },
    { label: 'RPG', routerLink: 'rpg' },
  ];
}
