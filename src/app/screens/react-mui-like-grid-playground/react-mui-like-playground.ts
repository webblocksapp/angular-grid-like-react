import { Component } from '@angular/core';
import { ColSize } from 'src/app/types/col-size';
import { GuttersSize } from 'src/app/types/gutters-size';
import { PaddingSize } from 'src/app/types/padding-size';

@Component({
  selector: 'react-mui-like-grid-playground',
  template: `
    <box containerMd>
      <box row [spacing]="spacing">
        <box [sm]="sm" [md]="md" *ngFor="let item of items">
          <card [p]="cardPadding">
            {{ item }}
          </card>
        </box>
      </box>
    </box>

    <hr />

    <box containerMd>
      <box row>
        <box [sm]="12" [md]="3">
          <label [pr]="1">SM</label>
          <input [(ngModel)]="sm" min="0" max="12" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">MD</label>
          <input [(ngModel)]="md" min="0" max="12" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Spacing</label>
          <input [(ngModel)]="spacing" min="0" max="5" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Card padding</label>
          <input [(ngModel)]="cardPadding" min="0" max="5" type="number" />
        </box>
      </box>
    </box>
  `,
  styles: [``],
})
export class ReactMuiLikeGridPlaygroundScreen {
  public sm: ColSize = 12;
  public md: ColSize = 4;
  public spacing: GuttersSize = 0;
  public cardPadding: PaddingSize = 0;

  public items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
}
