import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="d-flex px-3 pt-2">
      <a
        class="me-3 d-block nav-link"
        routerLink="/normal-bootstrap-grid"
        routerLinkActive="active"
      >
        Normal Bootstrap Grid
      </a>
      <a
        class="me-3 d-block nav-link"
        routerLink="/react-mui-like-grid"
        routerLinkActive="active"
      >
        React Mui Like Grid
      </a>
      <a
        class="me-3 d-block nav-link"
        routerLink="/react-mui-like-grid-playground"
        routerLinkActive="active"
      >
        React Mui Like Grid Playground
      </a>
      <a
        class="me-3 d-block nav-link"
        routerLink="/nested-grid-example"
        routerLinkActive="active"
      >
        Nested Grid Example
      </a>
    </div>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
