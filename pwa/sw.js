if(!self.define){let e,c={};const n=(n,i)=>(n=new URL(n+".js",i).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let d={};const o=e=>n(e,a),r={module:{uri:a},exports:d,require:o};c[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(s(...e),d)))}}define(["./workbox-8f0eebf3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"currency-top"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.750f2bd1.js",revision:"ba59c2b6127ab42521dc88399c050a01"},{url:"assets/dayjs.71d8c4fa.js",revision:"f65949b15686bbd22dc22658486eb422"},{url:"assets/dayjs.min.8e585243.js",revision:"697377f0dc704edcbcd0177b19ed9a61"},{url:"assets/ErrorNotFound.16b1a850.js",revision:"9d647075f69700b764a95967e6766810"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.25b66fd3.css",revision:"209f0c5e16f1d1abcf545a0f553fc3ce"},{url:"assets/index.f2061b87.js",revision:"ef4341a5c8302801262cbb3792ba20d9"},{url:"assets/IndexPage.e8f12bb5.js",revision:"8465a90ca8f75c3a7c17cbd35dcbcc6f"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.013450c7.js",revision:"d199aa1519679dc6d399ee3296ae3c33"},{url:"favicon.ico",revision:"61a36d78bad7526837a35885574dc206"},{url:"icons/apple-icon-120x120.png",revision:"0b30ae42ce871a6920a74264010a6ddc"},{url:"icons/apple-icon-152x152.png",revision:"7c5887e16300bcc06061174fdea67685"},{url:"icons/apple-icon-167x167.png",revision:"778c5d6563ec69df428545a2c665c753"},{url:"icons/apple-icon-180x180.png",revision:"248aa3772dfb26ede6adc07338d023c8"},{url:"icons/apple-launch-1080x2340.png",revision:"a001695faf6da3958e2225be728656a6"},{url:"icons/apple-launch-1125x2436.png",revision:"90788c506b067bc9b8e6cad08f69296c"},{url:"icons/apple-launch-1170x2532.png",revision:"d83ae6040edebfd593ea637dc179f183"},{url:"icons/apple-launch-1179x2556.png",revision:"2def8e9184e236b3e8924aa4a44db3c0"},{url:"icons/apple-launch-1242x2208.png",revision:"48c59e37ecc4dd9e5270067c8ddc165f"},{url:"icons/apple-launch-1242x2688.png",revision:"d254e80fb743657b7dc2b861e7db7c4c"},{url:"icons/apple-launch-1284x2778.png",revision:"76d2befd4233ec512962d88c07cebd03"},{url:"icons/apple-launch-1290x2796.png",revision:"3742ffd2fce7bc57b5c0796261837b0c"},{url:"icons/apple-launch-1536x2048.png",revision:"4f7eb00af51fed874f764213f6cdab43"},{url:"icons/apple-launch-1620x2160.png",revision:"93569e1754c5c2d422a02f569b4ed450"},{url:"icons/apple-launch-1668x2224.png",revision:"1d5bbb773f294925d35259eadaeb1f5b"},{url:"icons/apple-launch-1668x2388.png",revision:"d69d55300804b2ba7b9ebbd22f6691dd"},{url:"icons/apple-launch-2048x2732.png",revision:"64276d30ab2a1a20b4ea9175a8b21d1b"},{url:"icons/apple-launch-750x1334.png",revision:"c3b9d93d1dee17c1d802d6afa0d7ae75"},{url:"icons/apple-launch-828x1792.png",revision:"d5afd351b54013639d1f6a4997fd8bc7"},{url:"icons/favicon-128x128.png",revision:"b7d2140bc9feb84eda826797531f7fe1"},{url:"icons/favicon-16x16.png",revision:"5ac1b3c66ea55fc47f586d3753dd1ae5"},{url:"icons/favicon-32x32.png",revision:"58639990bd947c45ab2e9d97422473da"},{url:"icons/favicon-96x96.png",revision:"0de151e28266126294cb36a4f4768d55"},{url:"icons/icon-128x128.png",revision:"b7d2140bc9feb84eda826797531f7fe1"},{url:"icons/icon-192x192.png",revision:"bd5220c54ec7bc5177cba46b3762b228"},{url:"icons/icon-256x256.png",revision:"2ef721ee853c0e11ef7bc7669ddf3d11"},{url:"icons/icon-384x384.png",revision:"2c89115b9791c09e92e74ba6ea29acad"},{url:"icons/icon-512x512.png",revision:"8a5d116c18c3a0cefe746f1ccd3f67d0"},{url:"icons/icon.png",revision:"05c999b50413219ade84b2fc9ade154d"},{url:"icons/ms-icon-144x144.png",revision:"f7d96eed4a4c18d94708ab5c7735dd9d"},{url:"icons/safari-pinned-tab.svg",revision:"49c17bfcd8826644d3c48225ee546e55"},{url:"index.html",revision:"81664d2833d63a215a0d880b8e9a0c5b"},{url:"manifest.json",revision:"772c572b3d75c4f23e1194df9b7fbbba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
