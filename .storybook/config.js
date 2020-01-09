import { addParameters, configure } from '@storybook/angular';

// for colored backgrounds addon
addParameters({
  backgrounds: [
    { name: 'light', value: '#fff' },
    { name: 'dark', value: '#222', default:true }
  ]
});

// to load all available stories dynamically
function loadStories() {
  const req = require.context('./../libs', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

// Storybook Options:
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    hierarchySeparator: '/[/.]/',
    hierarchyRootSeparator: '/|/',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined
  }
});
