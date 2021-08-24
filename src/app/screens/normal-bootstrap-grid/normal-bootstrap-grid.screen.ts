import { Component } from '@angular/core';

@Component({
  selector: 'normal-bootstrap-grid',
  template: `
    <div class="px-3">
      <div class="row">
        <div *ngFor="let item of items" class="col-xs-12 col-md-4 g-3">
          <div class="card">{{ item }}</div>
        </div>
      </div>
    </div>
  `,
})
export class NormalBootstrapGridScreen {
  public items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
}
