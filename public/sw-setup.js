'use strict';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function (reg) {
        reg.update();

        reg.onupdatefound = function () {
            var installingWorker = reg.installing;
            installingWorker.onstatechange = function () {
                switch (installingWorker.state) {
                    case 'installed':
                        if (navigator.serviceWorker.controller) {
                            console.log('New or updated content is available.');
                        } else {
                            var alertOffline = document.getElementsByClassName('alert-offline')[0];
                            alertOffline.classList.add('show-offlline-ready');
                            alertOffline.onclick = function () {
                                alertOffline.classList.remove('show-offlline-ready');
                            };

                            var timeout = setTimeout(function () {
                                alertOffline.classList.remove('show-offlline-ready');
                                clearTimeout(timeout);
                            }, 3000);
                        }
                        break;
                    case 'redundant':
                        console.error('The installing service worker became redundant.');
                        break;
                }
            };
        };
    }).catch(function (e) {
        console.error('Error during service worker registration:', e);
    });
}