import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@oh-my-repo/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS]
})
export class OhMyRepoElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: OhMyRepoElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'OhMyRepoElectronCoreModule');
  }
}
