import { Component } from '@angular/core';

@Component({
  selector: 'react-mui-like-grid',
  template: `
    <box containerMd>
      <box row spacingY="5">
        <box col [sm]="12" [md]="4" *ngFor="let item of items">
          <card>
            {{ item }}
          </card>
        </box>
      </box>
    </box>
  `,
  styles: [``],
})
export class ReactMuiLikeGridScreen {
  public items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
}
