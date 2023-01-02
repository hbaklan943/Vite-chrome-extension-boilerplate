(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/contentScripts.js.924ea084.js")
    );
  })().catch(console.error);

})();
