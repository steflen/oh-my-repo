import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UISharedModule } from '@oh-my-repo/features';

import { UI_COMPONENTS } from './components';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  UISharedModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS]
})
export class UIModule {}
