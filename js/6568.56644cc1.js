"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[6568],{50797:(e,t,n)=>{function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function a(e,t,n){let r=0,a=e.length;const o=a/n;while(a>t){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;a-=t}const i=e.slice();for(let s=0;s<o;++s)for(let t=0;t<n;++t)e[n*s+t]=i[(n-t-1)*o+s]}function o(e,t,n,o,i,s){if(!t||1===t)return e;for(let r=0;r<i.length;++r){if(i[r]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[r]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const d=i[0]/8,c=2===s?1:i.length;for(let l=0;l<o;++l){if(l*c*n*d>=e.byteLength)break;let o;if(2===t){switch(i[0]){case 8:o=new Uint8Array(e,l*c*n*d,c*n*d);break;case 16:o=new Uint16Array(e,l*c*n*d,c*n*d/2);break;case 32:o=new Uint32Array(e,l*c*n*d,c*n*d/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}r(o,c,d)}else 3===t&&(o=new Uint8Array(e,l*c*n*d,c*n*d),a(o,c,d))}return e}n.d(t,{A:()=>i});class i{async decode(e,t){const n=await this.decodeBlock(t),r=e.Predictor||1;if(1!==r){const t=!e.StripOffsets,a=t?e.TileWidth:e.ImageWidth,i=t?e.TileLength:e.RowsPerStrip||e.ImageLength;return o(n,r,a,i,e.BitsPerSample,e.PlanarConfiguration)}return n}}},6568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(50797);class a extends r.A{constructor(){if(super(),"undefined"===typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"===typeof document&&"undefined"===typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available")}async decode(e,t){const n=new Blob([t]),r=await createImageBitmap(n);let a;"undefined"!==typeof document?(a=document.createElement("canvas"),a.width=r.width,a.height=r.height):a=new OffscreenCanvas(r.width,r.height);const o=a.getContext("2d");return o.drawImage(r,0,0),o.getImageData(0,0,r.width,r.height).data.buffer}}}}]);
//# sourceMappingURL=6568.56644cc1.js.map