import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() changeVisibility: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeVisibility.emit();
  }
}
