import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@oh-my-repo/nativescript';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
