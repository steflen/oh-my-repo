/**
 * NativeScript helpers
 */

declare var NSObject;
declare var NSString;
declare var android;
declare var java;
declare var window;

/**
 * Determine if running on native iOS mobile app
 */
export const isIOS = () => {
  return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
};

/**
 * Determine if running on native Android mobile app
 */
export const isAndroid = () => {
  return typeof android !== 'undefined' && typeof java !== 'undefined';
};

/**
 * Determine if running on native iOS or Android mobile app
 */
export const isNativeScript = () => {
  return isIOS() || isAndroid();
};

/**
 * Electron helpers
 */
export const isElectro = () => {
  return typeof window !== 'undefined' && window.process && window.process.type;
};
