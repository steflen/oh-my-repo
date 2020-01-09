// angular
import { Inject, Injectable, ViewContainerRef } from '@angular/core';
import { isNativeScript, isObject } from '@oh-my-repo/utils';

import { XPlatWindow } from '../models';

import { PlatformWindowToken } from './tokens';

@Injectable()
export class WindowService {
  constructor(@Inject(PlatformWindowToken) private _platformWindow: XPlatWindow) {
  }

  public get navigator(): void {
    return this._platformWindow.navigator;
  }

  public get location(): void {
    return this._platformWindow.location;
  }

  public get process(): void {
    return this._platformWindow.process;
  }

  public get require(): void {
    return this._platformWindow.require;
  }

  public alert(msg: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = this._platformWindow.alert(msg);
      if (isObject(result) && result.then) {
        // console.log('WindowService -- using result.then promise');
        result.then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  public confirm(msg: any, action?: Function /* used for fancyalerts on mobile*/): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = (this._platformWindow as any).confirm(msg, isNativeScript() ? action : undefined);
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else if (result) {
        resolve();
      } else {
        reject();
      }
    });
  }

  public setTimeout(handler: (...args: Array<any>) => void, timeout?: number): number {
    return this._platformWindow.setTimeout(handler, timeout);
  }

  public clearTimeout(timeoutId: number): void {
    return this._platformWindow.clearTimeout(timeoutId);
  }

  public setInterval(handler: (...args: Array<any>) => void, ms?: number, ...args: Array<any>): number {
    return this._platformWindow.setInterval(handler, ms, args);
  }

  public clearInterval(intervalId: number): void {
    return this._platformWindow.clearInterval(intervalId);
  }
}
