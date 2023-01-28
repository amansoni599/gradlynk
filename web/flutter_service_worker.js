'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "974079ca3b7d64b99aa68e8fca993dee",
"index.html": "e482c18e05dab56dd62c12767ec31499",
"/": "e482c18e05dab56dd62c12767ec31499",
"main.dart.js": "8db78e0f568a477d6ecf5e4dbd05d530",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d6787adae3c1d30acf8aca4456c41d96",
"assets/AssetManifest.json": "bf763836b76b62b105f5d27445b4def4",
"assets/NOTICES": "c3a59066609cb34ec8581cd25d4c14b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/upload_doc.png": "2fd303115bd80d4bf2d2ccb8d6d4d5ce",
"assets/assets/images/University-of-Melbourne.png": "f35b5437e11aa0de0247dbb4c2958e73",
"assets/assets/images/logotest.jpg": "29725f6a1b7402d74a1b2724e072f53d",
"assets/assets/images/otp.png": "1bd5f9bc4f5db1e93f4b774644f27da5",
"assets/assets/images/arrow.png": "c001385735113190055a241f7299e594",
"assets/assets/images/track.png": "d8f3c556774c6780dfb197701e033da8",
"assets/assets/images/logo.png": "ba300d7b3a5c2a417667359aa71370cb",
"assets/assets/images/logow.png": "305586431ce420765b4ac377459eb223",
"assets/assets/images/logotest1.jpg": "00a09350cde93a09425aac4c84ccf31f",
"assets/assets/images/University-of-Toronto.png": "31b629c5b276ba86ff91e43ffb75da0d",
"assets/assets/images/study.gif": "fc35c9352e84ea45808a103fae87f5ed",
"assets/assets/images/login-page.png": "fd695327748e782fe709f4f84c8dc135",
"assets/assets/images/track.gif": "3eb2ee0bd54d76f726ba69aa127ba690",
"assets/assets/images/logotest.jpeg": "b1eff4f143aab4e1f2959844537a830b",
"assets/assets/icons/search.svg": "bc7d9815490603347e76160a7a03653f",
"assets/assets/icons/list.svg": "a8508ccd5ba53ad0a1b42dd340d5bbe2",
"assets/assets/icons/logo1.gif": "50374a2afa3f1627018e80705923be42",
"assets/assets/icons/track.svg": "d0683177c48d6c685295ca6e22b73471",
"assets/assets/icons/arrow.svg": "1a7d4dc2e2011bbb9a39d0dcd226bb29",
"assets/assets/icons/home.svg": "7241e6fb58bf3c54a8de1fa7a8309829",
"assets/assets/icons/logout.svg": "e453d39260495c43b9687966f1cbfe7b",
"assets/assets/icons/logo-4.gif": "11972fec799b5609bf95b81df5327ed8",
"assets/assets/icons/messanger.svg": "9c30f2fb667a311f729029697f3a5ea7",
"assets/assets/icons/unread-notification.svg": "fcbed32ed3a23e176f4f264a02434f34",
"assets/assets/icons/enqiry.svg": "f3f6309ee4206e2e6110e91f2acae6ae",
"assets/assets/icons/switchcamera.svg": "a180ccc6114f094c54211d3a4186f2b6",
"assets/assets/icons/calender.svg": "9be92d508087633ef0ca6727da60d1ee",
"assets/assets/icons/mail.svg": "8dad1ba0d5544c3ac138285abc6a14c1",
"assets/assets/icons/gallery.svg": "bef6a2a6c9a471d90a6478415a3878c1",
"assets/assets/icons/i.svg": "27d14370887df97512b33e4a42e9a893",
"assets/assets/icons/upload_document.svg": "99f5c861a2e8922d8e83117fbf3bccc3",
"assets/assets/icons/update.svg": "2dd04a9f9581020bb6728603212a3411",
"assets/assets/icons/nextscreen_arrow.svg": "47ac943badbb5a5a6efcd09d31020d52",
"assets/assets/icons/work.svg": "47b017ce1dace41f71b3cec05aef8be7",
"assets/assets/icons/plus.svg": "92c05ab4f8e9b1664ceb5adc28749449",
"assets/assets/icons/warning.svg": "6008ab110b1135f0103949198d74ef8c",
"assets/assets/icons/next-icon.svg": "fe879361b746c73dea429b35687220d8",
"assets/assets/icons/upload_doc.svg": "fa6bee458557517dae8a6b329469566e",
"assets/assets/icons/add.svg": "61d3cdba7c2a1b3e0960b6484461a6c7",
"assets/assets/icons/logogif.gif": "65cfa320da7cbaeaea221f5520bd5764",
"assets/assets/icons/compare.svg": "e3346dc43f93f8ff01948e6184f9e1ac",
"assets/assets/icons/upload-01.svg": "99f5c861a2e8922d8e83117fbf3bccc3",
"assets/assets/icons/notification.svg": "538fb00522858eed3889b3d408d20e52",
"assets/assets/icons/previous-icon.svg": "1e239e4df6b9dae61a4c6749b913ebef",
"assets/assets/icons/create_profile.svg": "f0d9eb1dc37b26388b40bbb2b4d1337a",
"assets/assets/icons/camera.svg": "eab3aadaecfbde0203c561f7566a5917",
"assets/assets/icons/star.svg": "40f5e23e60dadc26122d9009a412fb6c",
"assets/assets/icons/edit.svg": "1953e0ee01f96e565ae3dd2859121287",
"assets/assets/icons/logoanimation.gif": "3173953ca2697f5bf09bc4ff1ada3e8f",
"assets/assets/icons/clock.svg": "92d025432d0ac245b316db4fce9a3993",
"assets/assets/icons/eye.svg": "a5dc1f5b766a512e69b4d72c417bf21a",
"assets/assets/icons/location.svg": "fce4abf5f2ceceef813a8ec806d18b81",
"assets/assets/icons/profile.svg": "f6aca222ebbf3206e0fee0c40b67821a",
"assets/assets/icons/sort.svg": "60ddf4d5dfc7522b9082a11aaa918d01",
"assets/assets/icons/filter.svg": "e88d08780e1cdba221d55741c7b59a0b",
"assets/assets/icons/university.svg": "546c3480d533ac8eb3bb0ecfa2eadc41",
"assets/assets/icons/course.svg": "ed165a565b47b5a9daedfe649854a749",
"assets/assets/icons/cameracapture.svg": "bc038fe6324b20a7f7d3bcbd1fc062ad",
"assets/assets/icons/profile-bottom.svg": "a48e0c433362b5127630dbfebe965601",
"assets/assets/icons/Qualification.svg": "174426be1641d6fd634cb165948dac3f",
"assets/assets/icons/menu.svg": "92e7f0fc861600f091ca4e740bbf64f6",
"assets/assets/icons/video-call.svg": "b9c4d7b6b1d0d670f2d8a0d1ab6b97f5",
"assets/assets/icons/alarm.svg": "c205a3c1995653d07d78c08e40fb4366",
"assets/assets/icons/submit.svg": "6358fa22d0b8d392d54db23d223c13be",
"assets/assets/icons/price.svg": "474f7beaaf071bb7601adc6a47e54475",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
