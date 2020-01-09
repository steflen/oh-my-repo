export interface IXPlatWindow {
  navigator: any;
  location: any;
  localStorage: any;
  process?: any;
  require?: any;
  alert(msg: any): Promise<any>;
  confirm(msg: any): Promise<any>;
  setTimeout(handler: (...args: Array<any>) => void, timeout?: number): number;
  clearTimeout(timeoutId: number): void;
  setInterval(handler: (...args: Array<any>) => void, ms?: number, ...args: Array<any>): number;
  clearInterval(intervalId: number): void;

  // ...expand support for more window methods as you needed here...
}

export type XPlatWindow = Partial<Pick<Window, Exclude<keyof Window, keyof IXPlatWindow>>> & IXPlatWindow;
