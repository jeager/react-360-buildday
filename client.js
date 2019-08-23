// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  
  const location = new Location([0, 0, -300]);

  r360.renderToLocation(
    r360.createRoot('World'),
    location,
  );

  r360.renderToSurface(
    r360.createRoot('HUD'),
    r360.getDefaultSurface(),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
