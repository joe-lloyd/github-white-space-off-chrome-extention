(function() {
  'use strict';

  // Check if we're on a PR page
  if (window.location.href.includes('/pull/')) {
    // Check if the URL already has query parameters (a question mark)
    if (window.location.href.includes('?')) {
      // Check if it already has the w=1 parameter
      if (!window.location.href.includes('w=1')) {
        window.location.href = `${window.location.href}&w=1`;
      }
    } else {
      window.location.href = `${window.location.href}?w=1`;
    }
  }
})();
