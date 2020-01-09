import { NgModule } from '@angular/core';
import { OhMyRepoElectronCoreModule } from '@oh-my-repo/electron';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, OhMyRepoElectronCoreModule],
  bootstrap: [AppComponent],
})
export class AppElectronModule {}
