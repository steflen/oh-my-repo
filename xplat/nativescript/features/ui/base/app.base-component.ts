import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@oh-my-repo/core';
import { AppService } from '@oh-my-repo/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();

  }
}
