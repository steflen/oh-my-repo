import { isIOS } from 'tns-core-modules/platform';

export const backIcon = () => {
  return `fa-${isIOS ? 'chevron-left' : 'arrow-left'}`;
};

export const moreIcon = () => {
  return `fa-${isIOS ? 'ellipsis-h' : 'ellipsis-v'}`;
};
