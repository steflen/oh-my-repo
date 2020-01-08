import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@oh-my-repo/web';

@Component({
  selector: 'oh-my-repo-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
