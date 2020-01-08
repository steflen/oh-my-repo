import { NgModule } from '@angular/core';
import { OhMyRepoElectronCoreModule } from '@oh-my-repo/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, OhMyRepoElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
