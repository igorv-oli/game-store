import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-internal',
  templateUrl: './layout-internal.component.html',
  styleUrl: './layout-internal.component.scss',
})
export class LayoutInternalComponent {
  visibility: boolean = true;

  onChangeVisibility() {
    this.visibility = !this.visibility;
  }

}
