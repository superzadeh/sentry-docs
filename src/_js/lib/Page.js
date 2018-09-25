export const logPageview = function() {
  window.amplitude.getInstance().logEvent('Viewed Blog Page', {
    path: window.canonicalPath(),
    referrer: document.referrer,
    search: location.search,
    title: document.title,
    url: window.canonicalUrl(location.search)
  });
};
