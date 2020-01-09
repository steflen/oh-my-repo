import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { HeaderBaseComponent } from '@oh-my-repo/features';

@Component({
  moduleId: module.id,
  selector: 'oh-my-repo-header',
  // currently i don't know how to toggle between android and ios for dev environment (linter, compodoc, etc) :P
  // templateUrl: 'header.component.html'
  templateUrl: 'header.component.android.html'
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
