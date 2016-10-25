/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/android-chrome-144x144.png","73430093f55ea1aeddfd80b6e18f98e8"],["/android-chrome-192x192.png","46e60a71e72a789a46c0cac388f806b3"],["/android-chrome-36x36.png","d7a577cfdf4239c1623bef37e3246fa0"],["/android-chrome-48x48.png","ac97014448030bd737b6dde77438c145"],["/android-chrome-72x72.png","04abdd1facc0f3dd203534578409fac0"],["/android-chrome-96x96.png","7c11de3f6f0a6c8b4365ab4a667e92fe"],["/apple-touch-icon-114x114.png","a479ebd3530d050872261c8297df9b6b"],["/apple-touch-icon-120x120.png","4e0bd33f67b57aa0874d6520f83a7bcd"],["/apple-touch-icon-144x144.png","73430093f55ea1aeddfd80b6e18f98e8"],["/apple-touch-icon-152x152.png","1da5b6ce201c84d675b57b9c01224381"],["/apple-touch-icon-180x180.png","8c34230db9647097bfbfb28afaf7e933"],["/apple-touch-icon-57x57.png","9f0e8c9f5976792d7f42085755e60597"],["/apple-touch-icon-60x60.png","6ce1ec7f89437370c2a0f550a83eafdb"],["/apple-touch-icon-72x72.png","04abdd1facc0f3dd203534578409fac0"],["/apple-touch-icon-76x76.png","bf47bd35c03fe24ab69f7de051deab92"],["/apple-touch-icon-precomposed.png","228b3f2c7784ab11bd9c91f27d762f57"],["/apple-touch-icon.png","8c34230db9647097bfbfb28afaf7e933"],["/css/main.css","8a0b89b7d6d3de9c05b6a5c3f88b336e"],["/favicon-16x16.png","9405267ad93c9cd84543d4e7b256d87c"],["/favicon-32x32.png","d3ac9cde2a850ba6300fa417817b29cc"],["/favicon-96x96.png","7c11de3f6f0a6c8b4365ab4a667e92fe"],["/fonts/DINPro-CondBold.woff","c0f02b279cf4044753c253781c1dd425"],["/fonts/DINPro-CondBold.woff2","f4c0686fc776bb21910df7b7376f602e"],["/fonts/DINPro-CondMedium.woff","ebcebd6dc691f3aff288c90a6b80dedc"],["/fonts/DINPro-CondMedium.woff2","6f02913e4e4a2aa87decc2d3a2aa2d07"],["/fonts/DINPro.woff","cf5dd321f2ac748b8bdfdce568114cee"],["/fonts/DINPro.woff2","8159823db42bcef768941f5b46bf8ff3"],["/images/landing1.jpg","374dab157475883e9789bbed877aa922"],["/images/logosv2.png","4ef52ce8b520923bc1ee5cc9d235675d"],["/images/social-mini.png","42740050a7c68f1309d3601dd089b44b"],["/mstile-144x144.png","021b982239e57a52fdb6cad8f4d89c69"],["/mstile-150x150.png","efa8785fd703502a2f2fedd6249d08ad"],["/mstile-310x150.png","5a72b84ad4912890f9a72ee6291fb7c1"],["/mstile-310x310.png","8110309d274af8c21ee37fff875530f8"],["/mstile-70x70.png","e9797f49a314409c51ea3b4151512437"],["/scripts/main.js","8a7fa85df431aa29a511910a35732652"],["/scripts/page.js","771cfcb2b5eca592f6f9b12ecd0b5209"],["/scripts/require.js","ac4356ce79f286304ef3f94b91e4f144"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







