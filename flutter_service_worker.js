'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f0e852510203fce352766fbb87c17d0c",
".git/config": "21a4f5ab37b1643619f87faecc96f852",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0b0fcf9cf672db57948791c32a973a42",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "286f7e33af53736a779038c5b1939124",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8ce7a76bfe97556fb872c46e365c540",
".git/logs/refs/heads/master": "a8ce7a76bfe97556fb872c46e365c540",
".git/logs/refs/remotes/origin/main": "e17e3dbbeeed0d66f215da44b9e52cb2",
".git/logs/refs/remotes/origin/master": "ba659a72daf871d52908633f867d1d95",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/10/c1bd79cd4312141485927985dd999ffb246716": "745c5714918bbe10d0f60bf46b1be402",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/1b/9d37fc253b17bc0866dd0f80cdea96a01c6495": "fd4f892083653927450217bc97ee2492",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/21/d97ba0f5ffb95c4a3f8ecf9a13c49daa3d35be": "07f7e1f6a4f34d7c026f887eb68f2a51",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/9eca6d4123f26c9a45662b1193cbb9eb43f3f2": "29f735c3f851599ea0174fdc47aff046",
".git/objects/27/82d153ce50411ee992d272cc6e6a80f0bf1631": "aa6158d31606d4a1c1e4f628ead00667",
".git/objects/2b/58a28d756f67444997754f1e45d29cee6ed046": "ef29f4cc8d2275030c48a9ec4a4cdf02",
".git/objects/2c/493810d3d3bd3a0cea8f56695897990b34b5d2": "e77a38d2de26c0a021117c3bc07fc15a",
".git/objects/2c/d583dbd9520c036e19eb7037095b63cf805d0d": "08423c3f2210b25a314a6f400ef52ebd",
".git/objects/2f/1c4ed97fa26c086d2bfaa89994cb99df0affd1": "3cbda80ed1e995eaf1e90d4c95d6c7c7",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/021950dbee195655df4c45e334af25a474185b": "0c56a7502374b90cd821dd8676ca3186",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/39/5bdab9954b2386083979db71af3059915dc39b": "fce199276ad76ca10e7ed5cba8bba8f2",
".git/objects/3e/db567baffd104e7445df9478306410492fb0c7": "d427fa25c79553f44b2d3f43bdd330a9",
".git/objects/41/9fb9aa2c9108800e9fbecfeb8c075fe5e3c8bb": "6ed74c5802c1798712a5c665de90b554",
".git/objects/42/f72c5e8fc201ebc1b4792a44c656da5e9a8a81": "a750037854a98abe442db52c3602fdb4",
".git/objects/44/e95755293d5ac09fdd1d52aaf1ec4a3559e871": "5d2031f8fc815dff5b97961ed8460d14",
".git/objects/45/11191547b51b394ebb3c7d3156781ffe96f035": "00c7f131807f257e55826909ce5894a4",
".git/objects/45/239be79dd68e331cf52dfe2f63bec385165e25": "57d2c940501369dcfc7e1681461dea82",
".git/objects/47/9a5b17691aa3950989f6430004fba860ab3053": "e5e686144a130f62933b8e6ab35ce5ed",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4c/fbe8ad912efa58a90cb553be47c5f48e7e6d2a": "0d190ccafa29778d181fbe9133d96fc3",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/52/b699586b87d1433253bf6d24eb3f87fb44a927": "f2312d78163e8e18bd8cd4ff89434651",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/5a/735c7979328be770a7d7b6dd2b7071cdeff100": "bbda902cbed660acb19f4dec7464771c",
".git/objects/5a/d2d967e347e1d69a73d1eddaa3ca53f2cca4fa": "699186ee9e1f3957bbfddd93f54d2768",
".git/objects/63/7457e15d2d19ea7e6b5a6ec8f35bf1db0ec15d": "454674075980fde4a6bece4357163bc1",
".git/objects/6b/de97eb5f2a05ed943b0cac629abf8fb098e2a5": "320a93d2ab5f29b388e4302098d861d1",
".git/objects/6f/eb3908c6dca3d6af78a4a985e77563169efeb3": "c041b10a3587656616e0f0d363eb528a",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7d/2df91110e38b7f2434f24e1d17b2a6bc2c1f16": "054cc16d010ef7073558ea716e9b32e2",
".git/objects/7f/800dfee6edf790b645cfa6179b66cf4ef262e9": "2eec321a3c59f35ff200eca238f4bc3a",
".git/objects/81/32df5e7c268d882b3e6b212cb184a8018f5fb2": "aec6359eb26e587c4dc4df216e57a37b",
".git/objects/81/8f87ee7e8d16c33f8352d2557ba14b3045eda1": "5197d385a36327c21c18cd5c7eae714a",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/38a91f9793179465d35e5796e8dd09da49ce83": "7b1f7ad1c6acc2200e1951222f30776b",
".git/objects/8b/1a7208d905a902115fea9551521792bba7ad2d": "44735f6aacd89a51c87c696fe7d4b69e",
".git/objects/8d/608d9e2b7dd2863cb8e90135cf2f647d16b1a6": "384b00661ee676771f1e606539af411c",
".git/objects/8e/c3481f75280bda077b740f9e3b439be244f3c1": "5477d8e94ac8ff9a10f7e6bd3047b297",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/98/c34e4387b0da45e77a62ddc20115b0ddc59ac6": "baf5ccf98216bc59775ada368e33b4b8",
".git/objects/99/8de0de0a07cd31caf7a04c41009ae14c46d2c6": "e2e71cba8c55ecd165f9e12fe580b24f",
".git/objects/9b/6928652a18812e5c45b8aaf295806d2ed83667": "08fc71b813c151276ac015dd242355e9",
".git/objects/9f/46bb964af7d8c41a134391edb52ffe8753b078": "a0cbe4b89871c9a19495997dc3e45e1f",
".git/objects/9f/4b5d4fff078d0eea3a11a09214162ccc4490dd": "f2b247fa606688678885243f16e6a337",
".git/objects/a8/118f3773c2ea91632e03a99f9491c65240f3f4": "f011803b68bb663bb884c59bd89c192b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ae/8bdb69a7657d717c9d852844db91e3d8bd2171": "aec5c32223d90d527aab92a179f47dcd",
".git/objects/b0/355a50ca6caf17ac8a46ac0e74a03ef42824e5": "229abd54b3e2fe10c0bf83cd3466c105",
".git/objects/b0/ac4f89ba7a4a5d5d127fced48ee9f467b6cb84": "a8f3a10b2d8d986104ce1df9a0e27f43",
".git/objects/b3/19b4c2a7be796894954e2afd6c91ed4f2b3cbd": "ccf6d0db5bb6dd9100aa6b52c3dec431",
".git/objects/b5/b57a960efd5889e11377d701789b700cba8500": "78dc075aa53e107a26eeea4e0345d70c",
".git/objects/b9/ca4de24518c0312838f15f6d9cdc626046fa50": "1307657c2976f147915f74229a8228d6",
".git/objects/ba/1781781fc67f90a2c3ec41fd0dce3bda088b93": "62f749b5185c15c53b1dff5232ad5dd2",
".git/objects/bb/51e4ac41aa2e26105b922271251230ee092613": "1dc1b068357331daacb5b8700862b26d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/eed10802fe015d1c74fcbaf68ae1e8e389c9e1": "68cadaa7c73746acde73569b934e19f1",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/cd/9e909e4420421d741bca4897d9db280fe4ad25": "25b29c5ae949cc5dd80e04f1fb0f35a6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3c857bfb182bd4bc7c76139a9bcb789e298034": "06ce17640c88e186dc10c36e05fb8879",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/881e5ea316b4c55f3dd558b4c1804c7bd1d0c8": "765e2e2b650c6201421a01fab2e83811",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e6/9089e135fbdecdf5d984635ec12b1c8b344075": "b9359167b0651ab59b56ba7dd7702285",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/d02b73aab1fa78e8ca7c1495b6f253d720ee5d": "90861c07132ce18f9defd0af3726130f",
".git/objects/ec/5bbde0e58148c2fdcf0c6d6ef13e8fb1b32943": "5ccaf2eb93fe160d0d4f53893cf40d96",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/5431084ad5660af8c48cf309dbcd6a7f713374": "d07f45cec5bb99394b7dd444a1ea07de",
".git/objects/ff/687c1f08f9d018cefa1eddba069298231b2fc4": "a5649ba608ef4618749da2176e7ab60f",
".git/objects/pack/pack-74fc20bb38110682ccb923fedf16ba03829621a1.idx": "27af54288149d09a1807c9a42d135f3e",
".git/objects/pack/pack-74fc20bb38110682ccb923fedf16ba03829621a1.pack": "e7e02a4b427179dd1a38c8c58519bbcd",
".git/objects/pack/pack-74fc20bb38110682ccb923fedf16ba03829621a1.rev": "2cec00e114edb38ce150b0b9846f21f2",
".git/refs/heads/master": "87cc1c2c1858b3b3c2d3cbb559474147",
".git/refs/remotes/origin/main": "87cc1c2c1858b3b3c2d3cbb559474147",
".git/refs/remotes/origin/master": "3ed8f59a52aebce941f0eb93e8f1c004",
"assets/AssetManifest.bin": "d5769bf1606eb4cdfdaf629b412fcb36",
"assets/AssetManifest.json": "a50d6e7fd47f6fd6dc288e58429fe600",
"assets/assets/images/fixed.png": "7ac402837d41bfe754bab6ed3967be79",
"assets/assets/images/fixed_lite.png": "cceecce25e444a438a903660227b7f29",
"assets/assets/images/icon/logoV.png": "db26ee31bfc7269138b1a68d3c67b6da",
"assets/assets/images/profile.jpg": "f2076cfba0899b56aca672b5e6a730ba",
"assets/assets/images/textures/grainy_texture0.jpg": "3ebb564761dc8e199a79d09d2b69c51a",
"assets/assets/images/textures/grainy_texture1.jpg": "71f388e7aa985e02fdfb3a6ec23b50e3",
"assets/assets/images/textures/grainy_texture2.jpg": "5f39cf1d6fb34a36a1a8c3de835ccef5",
"assets/assets/images/textures/grainy_texture3.jpg": "ec61581a76ebdc7b83efe55d3a6c278a",
"assets/assets/json/dummy_spotify_data.json": "da1d925b10e81159dee3c107e1b97406",
"assets/assets/json/dummy_spotify_data_multiple.json": "eacace733c2671c80f658e9338cc749f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "acc3eceb23c6312736bd25325434d264",
"assets/NOTICES": "21daf07cba26b53dfb41e0e22b20a07d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "cc810f50bbbb0517451a78d6f3427805",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "35abe0a09d1fe57cceb81ef4e7b57188",
"icons/Icon-512.png": "8f196f191da94fe84060365b157d41a3",
"icons/Icon-maskable-192.png": "35abe0a09d1fe57cceb81ef4e7b57188",
"icons/Icon-maskable-512.png": "8f196f191da94fe84060365b157d41a3",
"index.html": "463fc15886284dfe1633637c28bd7344",
"/": "463fc15886284dfe1633637c28bd7344",
"main.dart.js": "d26aae38301215bdc466f8390d0a4fe3",
"manifest.json": "565af84ffd59ae76b72b6408ed6b0e82",
"version.json": "8b5da8f696527946d4c26951ff413dd7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
