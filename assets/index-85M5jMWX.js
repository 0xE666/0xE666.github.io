(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ss="160",Go=0,ys=1,Ho=2,eo=1,Vo=2,jt=3,cn=0,yt=1,Ft=2,an=0,Yn=1,Ms=2,Es=3,Ss=4,Wo=5,vn=100,Xo=101,qo=102,bs=103,Ts=104,Yo=200,$o=201,jo=202,Ko=203,Yr=204,$r=205,Zo=206,Jo=207,Qo=208,el=209,tl=210,nl=211,il=212,rl=213,sl=214,al=0,ol=1,ll=2,Yi=3,cl=4,ul=5,dl=6,hl=7,to=0,fl=1,pl=2,on=0,ml=1,_l=2,gl=3,vl=4,xl=5,yl=6,no=300,jn=301,Kn=302,jr=303,Kr=304,tr=306,Zr=1e3,Ot=1001,Jr=1002,gt=1003,As=1004,ur=1005,Rt=1006,Ml=1007,fi=1008,ln=1009,El=1010,Sl=1011,as=1012,io=1013,rn=1014,sn=1015,pi=1016,ro=1017,so=1018,Mn=1020,bl=1021,Bt=1023,Tl=1024,Al=1025,En=1026,Zn=1027,wl=1028,ao=1029,Rl=1030,oo=1031,lo=1033,dr=33776,hr=33777,fr=33778,pr=33779,ws=35840,Rs=35841,Cs=35842,Ps=35843,co=36196,Ls=37492,Is=37496,Ds=37808,Us=37809,Ns=37810,Fs=37811,Os=37812,Bs=37813,ks=37814,zs=37815,Gs=37816,Hs=37817,Vs=37818,Ws=37819,Xs=37820,qs=37821,mr=36492,Ys=36494,$s=36495,Cl=36283,js=36284,Ks=36285,Zs=36286,uo=3e3,Sn=3001,Pl=3200,Ll=3201,Il=0,Dl=1,Pt="",lt="srgb",Zt="srgb-linear",os="display-p3",nr="display-p3-linear",$i="linear",$e="srgb",ji="rec709",Ki="p3",Rn=7680,Js=519,Ul=512,Nl=513,Fl=514,ho=515,Ol=516,Bl=517,kl=518,zl=519,Qs=35044,ea="300 es",Qr=1035,Kt=2e3,Zi=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,es=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function gr(i,e,t){return(1-t)*i+t*e}function ta(i){return(i&i-1)===0&&i!==0}function ts(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],p=n[7],h=n[2],m=n[5],y=n[8],x=r[0],f=r[3],u=r[6],g=r[1],_=r[4],v=r[7],R=r[2],S=r[5],T=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*f+a*_+l*S,s[6]=o*u+a*v+l*T,s[1]=c*x+d*g+p*R,s[4]=c*f+d*_+p*S,s[7]=c*u+d*v+p*T,s[2]=h*x+m*g+y*R,s[5]=h*f+m*_+y*S,s[8]=h*u+m*v+y*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,h=a*l-d*s,m=c*s-o*l,y=t*p+n*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=p*x,e[1]=(r*c-d*n)*x,e[2]=(a*n-r*o)*x,e[3]=h*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vr.makeScale(e,t)),this}rotate(e){return this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new Be;function fo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(){const i=Ji("canvas");return i.style.display="block",i}const na={};function di(i){i in na||(na[i]=!0,console.warn(i))}const ia=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[Zt]:{transfer:$i,primaries:ji,toReference:i=>i,fromReference:i=>i},[lt]:{transfer:$e,primaries:ji,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nr]:{transfer:$i,primaries:Ki,toReference:i=>i.applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia)},[os]:{transfer:$e,primaries:Ki,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia).convertLinearToSRGB()}},Vl=new Set([Zt,nr]),We={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Mi[e].toReference,r=Mi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Mi[i].primaries},getTransfer:function(i){return i===Pt?$i:Mi[i].transfer}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cn;class po{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cn===void 0&&(Cn=Ji("canvas")),Cn.width=e.width,Cn.height=e.height;const n=Cn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$n(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wl=0;class mo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yr(r[o].image)):s.push(yr(r[o]))}else s=yr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Tt extends Qn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Ot,r=Ot,s=Rt,o=fi,a=Bt,l=ln,c=Tt.DEFAULT_ANISOTROPY,d=Pt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=mi(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Sn?lt:Pt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==no)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Sn:uo}set encoding(e){di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sn?lt:Pt}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=no;Tt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],m=l[5],y=l[9],x=l[2],f=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-x)<.01&&Math.abs(y-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+x)<.1&&Math.abs(y+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(m+1)/2,R=(u+1)/2,S=(d+h)/4,T=(p+x)/4,D=(y+f)/4;return _>v&&_>R?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=S/n,s=T/n):v>R?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=S/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=T/s,r=D/s),this.set(n,r,s,t),this}let g=Math.sqrt((f-y)*(f-y)+(p-x)*(p-x)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(f-y)/g,this.y=(p-x)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sn?lt:Pt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _o extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3];const h=s[o+0],m=s[o+1],y=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=y,e[t+3]=x;return}if(p!==x||l!==h||c!==m||d!==y){let f=1-a;const u=l*h+c*m+d*y+p*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const R=Math.sqrt(_),S=Math.atan2(R,u*g);f=Math.sin(f*S)/R,a=Math.sin(a*S)/R}const v=a*g;if(l=l*f+h*v,c=c*f+m*v,d=d*f+y*v,p=p*f+x*v,f===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=R,c*=R,d*=R,p*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=s[o],h=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+d*p+l*m-c*h,e[t+1]=l*y+d*h+c*p-a*m,e[t+2]=c*y+d*m+a*h-l*p,e[t+3]=d*y-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),p=a(s/2),h=l(n/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*p+c*m*y,this._y=c*m*p-h*d*y,this._z=c*d*y+h*m*p,this._w=c*d*p-h*m*y;break;case"YXZ":this._x=h*d*p+c*m*y,this._y=c*m*p-h*d*y,this._z=c*d*y-h*m*p,this._w=c*d*p+h*m*y;break;case"ZXY":this._x=h*d*p-c*m*y,this._y=c*m*p+h*d*y,this._z=c*d*y+h*m*p,this._w=c*d*p-h*m*y;break;case"ZYX":this._x=h*d*p-c*m*y,this._y=c*m*p+h*d*y,this._z=c*d*y-h*m*p,this._w=c*d*p+h*m*y;break;case"YZX":this._x=h*d*p+c*m*y,this._y=c*m*p+h*d*y,this._z=c*d*y-h*m*p,this._w=c*d*p-h*m*y;break;case"XZY":this._x=h*d*p-c*m*y,this._y=c*m*p-h*d*y,this._z=c*d*y+h*m*p,this._w=c*d*p+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=n+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*d,this.y=n+l*d+a*c-s*p,this.z=r+l*p+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new I,sa=new _i;class wn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,It):It.fromBufferAttribute(s,o),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ei.copy(n.boundingBox)),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ri),Si.subVectors(this.max,ri),Pn.subVectors(e.a,ri),Ln.subVectors(e.b,ri),In.subVectors(e.c,ri),Jt.subVectors(Ln,Pn),Qt.subVectors(In,Ln),hn.subVectors(Pn,In);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-hn.z,hn.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,hn.z,0,-hn.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-hn.y,hn.x,0];return!Er(t,Pn,Ln,In,Si)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,Pn,Ln,In,Si))?!1:(bi.crossVectors(Jt,Qt),t=[bi.x,bi.y,bi.z],Er(t,Pn,Ln,In,Si))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new I,new I,new I,new I,new I,new I,new I,new I],It=new I,Ei=new wn,Pn=new I,Ln=new I,In=new I,Jt=new I,Qt=new I,hn=new I,ri=new I,Si=new I,bi=new I,fn=new I;function Er(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fn.fromArray(i,s);const a=r.x*Math.abs(fn.x)+r.y*Math.abs(fn.y)+r.z*Math.abs(fn.z),l=e.dot(fn),c=t.dot(fn),d=n.dot(fn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const $l=new wn,si=new I,Sr=new I;class ei{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$l.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;si.subVectors(e,this.center);const t=si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(si,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(si.copy(e.center).add(Sr)),this.expandByPoint(si.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new I,br=new I,Ti=new I,en=new I,Tr=new I,Ai=new I,Ar=new I;class ls{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){br.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),en.copy(this.origin).sub(br);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ti),a=en.dot(this.direction),l=-en.dot(Ti),c=en.lengthSq(),d=Math.abs(1-o*o);let p,h,m,y;if(d>0)if(p=o*l-a,h=o*a-l,y=s*d,p>=0)if(h>=-y)if(h<=y){const x=1/d;p*=x,h*=x,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-y?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=y?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(br).addScaledVector(Ti,h),m}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),r=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,r,s){Tr.subVectors(t,e),Ai.subVectors(n,e),Ar.crossVectors(Tr,Ai);let o=this.direction.dot(Ar),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const l=a*this.direction.dot(Ai.crossVectors(en,Ai));if(l<0)return null;const c=a*this.direction.dot(Tr.cross(en));if(c<0||l+c>o)return null;const d=-a*en.dot(Ar);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,r,s,o,a,l,c,d,p,h,m,y,x,f){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,p,h,m,y,x,f)}set(e,t,n,r,s,o,a,l,c,d,p,h,m,y,x,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=m,u[7]=y,u[11]=x,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Dn.setFromMatrixColumn(e,0).length(),s=1/Dn.setFromMatrixColumn(e,1).length(),o=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*p,y=a*d,x=a*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+y*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=y+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*p,y=c*d,x=c*p;t[0]=h+x*a,t[4]=y*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=m*a-y,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*p,y=c*d,x=c*p;t[0]=h-x*a,t[4]=-o*p,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*d,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*p,y=a*d,x=a*p;t[0]=l*d,t[4]=y*c-m,t[8]=h*c+x,t[1]=l*p,t[5]=x*c+h,t[9]=m*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=a*l,x=a*c;t[0]=l*d,t[4]=x-h*p,t[8]=y*p+m,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*p+y,t[10]=h-x*p}else if(e.order==="XZY"){const h=o*l,m=o*c,y=a*l,x=a*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+x,t[5]=o*d,t[9]=m*p-y,t[2]=y*p-m,t[6]=a*d,t[10]=x*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jl,e,Kl)}lookAt(e,t,n){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),tn.crossVectors(n,St),tn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),tn.crossVectors(n,St)),tn.normalize(),wi.crossVectors(St,tn),r[0]=tn.x,r[4]=wi.x,r[8]=St.x,r[1]=tn.y,r[5]=wi.y,r[9]=St.y,r[2]=tn.z,r[6]=wi.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],p=n[5],h=n[9],m=n[13],y=n[2],x=n[6],f=n[10],u=n[14],g=n[3],_=n[7],v=n[11],R=n[15],S=r[0],T=r[4],D=r[8],M=r[12],w=r[1],B=r[5],X=r[9],te=r[13],P=r[2],k=r[6],W=r[10],Y=r[14],H=r[3],V=r[7],q=r[11],J=r[15];return s[0]=o*S+a*w+l*P+c*H,s[4]=o*T+a*B+l*k+c*V,s[8]=o*D+a*X+l*W+c*q,s[12]=o*M+a*te+l*Y+c*J,s[1]=d*S+p*w+h*P+m*H,s[5]=d*T+p*B+h*k+m*V,s[9]=d*D+p*X+h*W+m*q,s[13]=d*M+p*te+h*Y+m*J,s[2]=y*S+x*w+f*P+u*H,s[6]=y*T+x*B+f*k+u*V,s[10]=y*D+x*X+f*W+u*q,s[14]=y*M+x*te+f*Y+u*J,s[3]=g*S+_*w+v*P+R*H,s[7]=g*T+_*B+v*k+R*V,s[11]=g*D+_*X+v*W+R*q,s[15]=g*M+_*te+v*Y+R*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],m=e[14],y=e[3],x=e[7],f=e[11],u=e[15];return y*(+s*l*p-r*c*p-s*a*h+n*c*h+r*a*m-n*l*m)+x*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+f*(+t*c*p-t*a*m-s*o*p+n*o*m+s*a*d-n*c*d)+u*(-r*a*d-t*l*p+t*a*h+r*o*p-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],m=e[11],y=e[12],x=e[13],f=e[14],u=e[15],g=p*f*c-x*h*c+x*l*m-a*f*m-p*l*u+a*h*u,_=y*h*c-d*f*c-y*l*m+o*f*m+d*l*u-o*h*u,v=d*x*c-y*p*c+y*a*m-o*x*m-d*a*u+o*p*u,R=y*p*l-d*x*l-y*a*h+o*x*h+d*a*f-o*p*f,S=t*g+n*_+r*v+s*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=g*T,e[1]=(x*h*s-p*f*s-x*r*m+n*f*m+p*r*u-n*h*u)*T,e[2]=(a*f*s-x*l*s+x*r*c-n*f*c-a*r*u+n*l*u)*T,e[3]=(p*l*s-a*h*s-p*r*c+n*h*c+a*r*m-n*l*m)*T,e[4]=_*T,e[5]=(d*f*s-y*h*s+y*r*m-t*f*m-d*r*u+t*h*u)*T,e[6]=(y*l*s-o*f*s-y*r*c+t*f*c+o*r*u-t*l*u)*T,e[7]=(o*h*s-d*l*s+d*r*c-t*h*c-o*r*m+t*l*m)*T,e[8]=v*T,e[9]=(y*p*s-d*x*s-y*n*m+t*x*m+d*n*u-t*p*u)*T,e[10]=(o*x*s-y*a*s+y*n*c-t*x*c-o*n*u+t*a*u)*T,e[11]=(d*a*s-o*p*s-d*n*c+t*p*c+o*n*m-t*a*m)*T,e[12]=R*T,e[13]=(d*x*r-y*p*r+y*n*h-t*x*h-d*n*f+t*p*f)*T,e[14]=(y*a*r-o*x*r-y*n*l+t*x*l+o*n*f-t*a*f)*T,e[15]=(o*p*r-d*a*r+d*n*l-t*p*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,p=a+a,h=s*c,m=s*d,y=s*p,x=o*d,f=o*p,u=a*p,g=l*c,_=l*d,v=l*p,R=n.x,S=n.y,T=n.z;return r[0]=(1-(x+u))*R,r[1]=(m+v)*R,r[2]=(y-_)*R,r[3]=0,r[4]=(m-v)*S,r[5]=(1-(h+u))*S,r[6]=(f+g)*S,r[7]=0,r[8]=(y+_)*T,r[9]=(f-g)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Dn.set(r[0],r[1],r[2]).length();const o=Dn.set(r[4],r[5],r[6]).length(),a=Dn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const c=1/s,d=1/o,p=1/a;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=d,Dt.elements[5]*=d,Dt.elements[6]*=d,Dt.elements[8]*=p,Dt.elements[9]*=p,Dt.elements[10]*=p,t.setFromRotationMatrix(Dt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Kt){const l=this.elements,c=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),h=(n+r)/(n-r);let m,y;if(a===Kt)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Zi)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Kt){const l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(o-s),h=(t+e)*c,m=(n+r)*d;let y,x;if(a===Kt)y=(o+s)*p,x=-2*p;else if(a===Zi)y=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dn=new I,Dt=new Ze,jl=new I(0,0,0),Kl=new I(1,1,1),tn=new I,wi=new I,St=new I,aa=new Ze,oa=new _i;class ir{constructor(e=0,t=0,n=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oa.setFromEuler(this),this.setFromQuaternion(oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class cs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zl=0;const la=new I,Un=new _i,qt=new Ze,Ri=new I,ai=new I,Jl=new I,Ql=new _i,ca=new I(1,0,0),ua=new I(0,1,0),da=new I(0,0,1),ec={type:"added"},tc={type:"removed"};class Mt extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new I,t=new ir,n=new _i,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Be}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(ca,e)}rotateY(e){return this.rotateOnAxis(ua,e)}rotateZ(e){return this.rotateOnAxis(da,e)}translateOnAxis(e,t){return la.copy(e).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ca,e)}translateY(e){return this.translateOnAxis(ua,e)}translateZ(e){return this.translateOnAxis(da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ri.copy(e):Ri.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(ai,Ri,this.up):qt.lookAt(Ri,ai,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Un.setFromRotationMatrix(qt),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ec)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,e,Jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,Ql,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new I(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new I,Yt=new I,wr=new I,$t=new I,Nn=new I,Fn=new I,ha=new I,Rr=new I,Cr=new I,Pr=new I;let Ci=!1;class Nt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ut.subVectors(r,t),Yt.subVectors(n,t),wr.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(Yt),l=Ut.dot(wr),c=Yt.dot(Yt),d=Yt.dot(wr),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$t)===null?!1:$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,n,r,s,o,a,l){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,$t)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$t.x),l.addScaledVector(o,$t.y),l.addScaledVector(a,$t.z),l)}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),Yt.subVectors(e,t),Ut.cross(Yt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Ut.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),Nt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Nt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Nn.subVectors(r,n),Fn.subVectors(s,n),Rr.subVectors(e,n);const l=Nn.dot(Rr),c=Fn.dot(Rr);if(l<=0&&c<=0)return t.copy(n);Cr.subVectors(e,r);const d=Nn.dot(Cr),p=Fn.dot(Cr);if(d>=0&&p<=d)return t.copy(r);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Nn,o);Pr.subVectors(e,s);const m=Nn.dot(Pr),y=Fn.dot(Pr);if(y>=0&&m<=y)return t.copy(s);const x=m*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(Fn,a);const f=d*y-m*p;if(f<=0&&p-d>=0&&m-y>=0)return ha.subVectors(s,r),a=(p-d)/(p-d+(m-y)),t.copy(r).addScaledVector(ha,a);const u=1/(f+x+h);return o=x*u,a=h*u,t.copy(n).addScaledVector(Nn,o).addScaledVector(Fn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Lr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=Gl(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lr(o,s,e+1/3),this.g=Lr(o,s,e),this.b=Lr(o,s,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return We.fromWorkingColorSpace(ft.copy(this),e),Math.round(xt(ft.r*255,0,255))*65536+Math.round(xt(ft.g*255,0,255))*256+Math.round(xt(ft.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,s=ft.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=lt){We.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(nn),this.setHSL(nn.h+e,nn.s+t,nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Pi);const n=gr(nn.h,Pi.h,t),r=gr(nn.s,Pi.s,t),s=gr(nn.l,Pi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new He;He.NAMES=go;let nc=0;class gi extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Yn,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=$r,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Js,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Js&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hi extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new I,Li=new ze;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix3(e),this.setXY(t,Li.x,Li.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qs&&(e.usage=this.usage),e}}class vo extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ic=0;const wt=new Ze,Ir=new Mt,On=new I,bt=new wn,oi=new wn,ot=new I;class Lt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fo(e)?xo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wt.makeRotationFromQuaternion(e),this.applyMatrix4(wt),this}rotateX(e){return wt.makeRotationX(e),this.applyMatrix4(wt),this}rotateY(e){return wt.makeRotationY(e),this.applyMatrix4(wt),this}rotateZ(e){return wt.makeRotationZ(e),this.applyMatrix4(wt),this}translate(e,t,n){return wt.makeTranslation(e,t,n),this.applyMatrix4(wt),this}scale(e,t,n){return wt.makeScale(e,t,n),this.applyMatrix4(wt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(bt.min,oi.min),bt.expandByPoint(ot),ot.addVectors(bt.max,oi.max),bt.expandByPoint(ot)):(bt.expandByPoint(oi.min),bt.expandByPoint(oi.max))}bt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ot.fromBufferAttribute(a,c),l&&(On.fromBufferAttribute(e,c),ot.add(On)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new I,d[w]=new I;const p=new I,h=new I,m=new I,y=new ze,x=new ze,f=new ze,u=new I,g=new I;function _(w,B,X){p.fromArray(r,w*3),h.fromArray(r,B*3),m.fromArray(r,X*3),y.fromArray(o,w*2),x.fromArray(o,B*2),f.fromArray(o,X*2),h.sub(p),m.sub(p),x.sub(y),f.sub(y);const te=1/(x.x*f.y-f.x*x.y);isFinite(te)&&(u.copy(h).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(te),g.copy(m).multiplyScalar(x.x).addScaledVector(h,-f.x).multiplyScalar(te),c[w].add(u),c[B].add(u),c[X].add(u),d[w].add(g),d[B].add(g),d[X].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,B=v.length;w<B;++w){const X=v[w],te=X.start,P=X.count;for(let k=te,W=te+P;k<W;k+=3)_(n[k+0],n[k+1],n[k+2])}const R=new I,S=new I,T=new I,D=new I;function M(w){T.fromArray(s,w*3),D.copy(T);const B=c[w];R.copy(B),R.sub(T.multiplyScalar(T.dot(B))).normalize(),S.crossVectors(D,B);const te=S.dot(d[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=te}for(let w=0,B=v.length;w<B;++w){const X=v[w],te=X.start,P=X.count;for(let k=te,W=te+P;k<W;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,d=new I,p=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),x=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(d),l.add(d),c.add(d),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,h=new c.constructor(l.length*d);let m=0,y=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let u=0;u<d;u++)h[y++]=c[m++]}return new kt(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,p=c.length;d<p;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let h=0,m=p.length;h<m;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new Ze,pn=new ls,Ii=new ei,pa=new I,Bn=new I,kn=new I,zn=new I,Dr=new I,Di=new I,Ui=new ze,Ni=new ze,Fi=new ze,ma=new I,_a=new I,ga=new I,Oi=new I,Bi=new I;class Ht extends Mt{constructor(e=new Lt,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Di.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],p=s[l];d!==0&&(Dr.fromBufferAttribute(p,e),o?Di.addScaledVector(Dr,d):Di.addScaledVector(Dr.sub(t),d))}t.add(Di)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(s),pn.copy(e.ray).recast(e.near),!(Ii.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Ii,pa)===null||pn.origin.distanceToSquared(pa)>(e.far-e.near)**2))&&(fa.copy(s).invert(),pn.copy(e.ray).applyMatrix4(fa),!(n.boundingBox!==null&&pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=h.length;y<x;y++){const f=h[y],u=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=g,R=_;v<R;v+=3){const S=a.getX(v),T=a.getX(v+1),D=a.getX(v+2);r=ki(this,u,e,n,c,d,p,S,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=y,u=x;f<u;f+=3){const g=a.getX(f),_=a.getX(f+1),v=a.getX(f+2);r=ki(this,o,e,n,c,d,p,g,_,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=h.length;y<x;y++){const f=h[y],u=o[f.materialIndex],g=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=g,R=_;v<R;v+=3){const S=v,T=v+1,D=v+2;r=ki(this,u,e,n,c,d,p,S,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=y,u=x;f<u;f+=3){const g=f,_=f+1,v=f+2;r=ki(this,o,e,n,c,d,p,g,_,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function rc(i,e,t,n,r,s,o,a){let l;if(e.side===yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===cn,a),l===null)return null;Bi.copy(a),Bi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bi);return c<t.near||c>t.far?null:{distance:c,point:Bi.clone(),object:i}}function ki(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Bn),i.getVertexPosition(l,kn),i.getVertexPosition(c,zn);const d=rc(i,e,t,n,Bn,kn,zn,Oi);if(d){r&&(Ui.fromBufferAttribute(r,a),Ni.fromBufferAttribute(r,l),Fi.fromBufferAttribute(r,c),d.uv=Nt.getInterpolation(Oi,Bn,kn,zn,Ui,Ni,Fi,new ze)),s&&(Ui.fromBufferAttribute(s,a),Ni.fromBufferAttribute(s,l),Fi.fromBufferAttribute(s,c),d.uv1=Nt.getInterpolation(Oi,Bn,kn,zn,Ui,Ni,Fi,new ze),d.uv2=d.uv1),o&&(ma.fromBufferAttribute(o,a),_a.fromBufferAttribute(o,l),ga.fromBufferAttribute(o,c),d.normal=Nt.getInterpolation(Oi,Bn,kn,zn,ma,_a,ga,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new I,materialIndex:0};Nt.getNormal(Bn,kn,zn,p.normal),d.face=p}return d}class vi extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],p=[];let h=0,m=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(p,2));function y(x,f,u,g,_,v,R,S,T,D,M){const w=v/T,B=R/D,X=v/2,te=R/2,P=S/2,k=T+1,W=D+1;let Y=0,H=0;const V=new I;for(let q=0;q<W;q++){const J=q*B-te;for(let K=0;K<k;K++){const G=K*w-X;V[x]=G*g,V[f]=J*_,V[u]=P,c.push(V.x,V.y,V.z),V[x]=0,V[f]=0,V[u]=S>0?1:-1,d.push(V.x,V.y,V.z),p.push(K/T),p.push(1-q/D),Y+=1}}for(let q=0;q<D;q++)for(let J=0;J<T;J++){const K=h+J+k*q,G=h+J+k*(q+1),$=h+(J+1)+k*(q+1),re=h+(J+1)+k*q;l.push(K,G,re),l.push(G,$,re),H+=6}a.addGroup(m,H,M),m+=H,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=Jn(i[t]);for(const r in n)e[r]=n[r]}return e}function sc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yo(i){return i.getRenderTarget()===null?i.outputColorSpace:We.workingColorSpace}const ac={clone:Jn,merge:_t};var oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oc,this.fragmentShader=lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jn(e.uniforms),this.uniformsGroups=sc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mo extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,Hn=1;class cc extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(Gn,Hn,e,t);r.layers=this.layers,this.add(r);const s=new Ct(Gn,Hn,e,t);s.layers=this.layers,this.add(s);const o=new Ct(Gn,Hn,e,t);o.layers=this.layers,this.add(o);const a=new Ct(Gn,Hn,e,t);a.layers=this.layers,this.add(a);const l=new Ct(Gn,Hn,e,t);l.layers=this.layers,this.add(l);const c=new Ct(Gn,Hn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,h,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Eo extends Tt{constructor(e,t,n,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uc extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sn?lt:Pt),this.texture=new Eo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:an});s.uniforms.tEquirect.value=t;const o=new Ht(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=Rt),new cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ur=new I,dc=new I,hc=new Be;class _n{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ur.subVectors(n,t).cross(dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hc.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new ei,zi=new I;class So{constructor(e=new _n,t=new _n,n=new _n,r=new _n,s=new _n,o=new _n){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kt){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],p=r[6],h=r[7],m=r[8],y=r[9],x=r[10],f=r[11],u=r[12],g=r[13],_=r[14],v=r[15];if(n[0].setComponents(l-s,h-c,f-m,v-u).normalize(),n[1].setComponents(l+s,h+c,f+m,v+u).normalize(),n[2].setComponents(l+o,h+d,f+y,v+g).normalize(),n[3].setComponents(l-o,h-d,f-y,v-g).normalize(),n[4].setComponents(l-a,h-p,f-x,v-_).normalize(),t===Kt)n[5].setComponents(l+a,h+p,f+x,v+_).normalize();else if(t===Zi)n[5].setComponents(a,p,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zi.x=r.normal.x>0?e.max.x:e.min.x,zi.y=r.normal.y>0?e.max.y:e.min.y,zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,d){const p=c.array,h=c.usage,m=p.byteLength,y=i.createBuffer();i.bindBuffer(d,y),i.bufferData(d,p,h),c.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,p){const h=d.array,m=d._updateRange,y=d.updateRanges;if(i.bindBuffer(p,c),m.count===-1&&y.length===0&&i.bufferSubData(p,0,h),y.length!==0){for(let x=0,f=y.length;x<f;x++){const u=y[x];t?i.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):i.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);if(p===void 0)n.set(c,r(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,d),p.version=c.version}}return{get:o,remove:a,update:l}}class us extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,p=e/a,h=t/l,m=[],y=[],x=[],f=[];for(let u=0;u<d;u++){const g=u*h-o;for(let _=0;_<c;_++){const v=_*p-s;y.push(v,-g,0),x.push(0,0,1),f.push(_/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const _=g+c*u,v=g+c*(u+1),R=g+1+c*(u+1),S=g+1+c*u;m.push(_,v,S),m.push(v,R,S)}this.setIndex(m),this.setAttribute("position",new ut(y,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var pc=`#ifdef USE_ALPHAHASH
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
#endif`,yc=`#ifdef USE_AOMAP
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
#endif`,Mc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ec=`#ifdef USE_BATCHING
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
} // validated`,wc=`#ifdef USE_IRIDESCENCE
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
#endif`,Rc=`#ifdef USE_BUMPMAP
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
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Oc=`#define PI 3.141592653589793
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
} // validated`,Bc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kc=`vec3 transformedNormal = objectNormal;
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
	
#endif`,$c=`#ifdef USE_ENVMAP
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
#endif`,jc=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
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
}`,nu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
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
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
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
#endif`,fu=`struct PhysicalMaterial {
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
}`,pu=`
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bu=`#if defined( USE_POINTS_UV )
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
#endif`,Tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
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
#endif`,Pu=`#ifdef USE_MORPHTARGETS
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
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
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
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ju=`float getShadowMask() {
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
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ed=`#ifdef USE_SKINNING
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
#endif`,td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
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
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ld=`#ifdef USE_TRANSMISSION
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`#include <common>
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
}`,yd=`#if DEPTH_PACKING == 3200
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
}`,Md=`#define DISTANCE
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
}`,Ed=`#define DISTANCE
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
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`uniform float scale;
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
}`,Ad=`uniform vec3 diffuse;
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
}`,wd=`#include <common>
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Cd=`#define LAMBERT
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
}`,Pd=`#define LAMBERT
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
}`,Ld=`#define MATCAP
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
}`,Id=`#define MATCAP
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
}`,Dd=`#define NORMAL
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
}`,Ud=`#define NORMAL
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
}`,Nd=`#define PHONG
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
}`,Fd=`#define PHONG
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
}`,Od=`#define STANDARD
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
}`,Bd=`#define STANDARD
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
}`,kd=`#define TOON
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
}`,zd=`#define TOON
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
}`,Gd=`uniform float size;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Wd=`uniform vec3 color;
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
}`,Xd=`uniform float rotation;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:pc,alphahash_pars_fragment:mc,alphamap_fragment:_c,alphamap_pars_fragment:gc,alphatest_fragment:vc,alphatest_pars_fragment:xc,aomap_fragment:yc,aomap_pars_fragment:Mc,batching_pars_vertex:Ec,batching_vertex:Sc,begin_vertex:bc,beginnormal_vertex:Tc,bsdfs:Ac,iridescence_fragment:wc,bumpmap_pars_fragment:Rc,clipping_planes_fragment:Cc,clipping_planes_pars_fragment:Pc,clipping_planes_pars_vertex:Lc,clipping_planes_vertex:Ic,color_fragment:Dc,color_pars_fragment:Uc,color_pars_vertex:Nc,color_vertex:Fc,common:Oc,cube_uv_reflection_fragment:Bc,defaultnormal_vertex:kc,displacementmap_pars_vertex:zc,displacementmap_vertex:Gc,emissivemap_fragment:Hc,emissivemap_pars_fragment:Vc,colorspace_fragment:Wc,colorspace_pars_fragment:Xc,envmap_fragment:qc,envmap_common_pars_fragment:Yc,envmap_pars_fragment:$c,envmap_pars_vertex:jc,envmap_physical_pars_fragment:ou,envmap_vertex:Kc,fog_vertex:Zc,fog_pars_vertex:Jc,fog_fragment:Qc,fog_pars_fragment:eu,gradientmap_pars_fragment:tu,lightmap_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:ru,lights_lambert_pars_fragment:su,lights_pars_begin:au,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:uu,lights_phong_pars_fragment:du,lights_physical_fragment:hu,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:_u,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:yu,map_fragment:Mu,map_pars_fragment:Eu,map_particle_fragment:Su,map_particle_pars_fragment:bu,metalnessmap_fragment:Tu,metalnessmap_pars_fragment:Au,morphcolor_vertex:wu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Cu,morphtarget_vertex:Pu,normal_fragment_begin:Lu,normal_fragment_maps:Iu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:ku,iridescence_pars_fragment:zu,opaque_fragment:Gu,packing:Hu,premultiplied_alpha_fragment:Vu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Ku,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:ed,skinning_vertex:td,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:rd,tonemapping_fragment:sd,tonemapping_pars_fragment:ad,transmission_fragment:od,transmission_pars_fragment:ld,uv_pars_fragment:cd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:hd,background_vert:fd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:_d,cube_vert:gd,cube_frag:vd,depth_vert:xd,depth_frag:yd,distanceRGBA_vert:Md,distanceRGBA_frag:Ed,equirect_vert:Sd,equirect_frag:bd,linedashed_vert:Td,linedashed_frag:Ad,meshbasic_vert:wd,meshbasic_frag:Rd,meshlambert_vert:Cd,meshlambert_frag:Pd,meshmatcap_vert:Ld,meshmatcap_frag:Id,meshnormal_vert:Dd,meshnormal_frag:Ud,meshphong_vert:Nd,meshphong_frag:Fd,meshphysical_vert:Od,meshphysical_frag:Bd,meshtoon_vert:kd,meshtoon_frag:zd,points_vert:Gd,points_frag:Hd,shadow_vert:Vd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:qd},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Gt={basic:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:_t([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:_t([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:_t([ie.points,ie.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:_t([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:_t([ie.common,ie.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:_t([ie.sprite,ie.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:_t([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:_t([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Gt.physical={uniforms:_t([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Gi={r:0,b:0,g:0};function Yd(i,e,t,n,r,s,o){const a=new He(0);let l=s===!0?0:1,c,d,p=null,h=0,m=null;function y(f,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===tr)?(d===void 0&&(d=new Ht(new vi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Jn(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=We.getTransfer(_.colorSpace)!==$e,(p!==_||h!==_.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=_,h=_.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ht(new us(2,2),new An({name:"BackgroundMaterial",uniforms:Jn(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=We.getTransfer(_.colorSpace)!==$e,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||h!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=_,h=_.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,u){f.getRGB(Gi,yo(i)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:y}}function $d(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,d=!1;function p(P,k,W,Y,H){let V=!1;if(o){const q=x(Y,W,k);c!==q&&(c=q,m(c.object)),V=u(P,Y,W,H),V&&g(P,Y,W,H)}else{const q=k.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=q,V=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,D(P,k,W,Y),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,k,W){const Y=W.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let V=H[k.id];V===void 0&&(V={},H[k.id]=V);let q=V[Y];return q===void 0&&(q=f(h()),V[Y]=q),q}function f(P){const k=[],W=[],Y=[];for(let H=0;H<r;H++)k[H]=0,W[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function u(P,k,W,Y){const H=c.attributes,V=k.attributes;let q=0;const J=W.getAttributes();for(const K in J)if(J[K].location>=0){const $=H[K];let re=V[K];if(re===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function g(P,k,W,Y){const H={},V=k.attributes;let q=0;const J=W.getAttributes();for(const K in J)if(J[K].location>=0){let $=V[K];$===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),H[K]=re,q++}c.attributes=H,c.attributesNum=q,c.index=Y}function _(){const P=c.newAttributes;for(let k=0,W=P.length;k<W;k++)P[k]=0}function v(P){R(P,0)}function R(P,k){const W=c.newAttributes,Y=c.enabledAttributes,H=c.attributeDivisors;W[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),H[P]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),H[P]=k)}function S(){const P=c.newAttributes,k=c.enabledAttributes;for(let W=0,Y=k.length;W<Y;W++)k[W]!==P[W]&&(i.disableVertexAttribArray(W),k[W]=0)}function T(P,k,W,Y,H,V,q){q===!0?i.vertexAttribIPointer(P,k,W,H,V):i.vertexAttribPointer(P,k,W,Y,H,V)}function D(P,k,W,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=Y.attributes,V=W.getAttributes(),q=k.defaultAttributeValues;for(const J in V){const K=V[J];if(K.location>=0){let G=H[J];if(G===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const $=G.normalized,re=G.itemSize,he=t.get(G);if(he===void 0)continue;const de=he.buffer,Se=he.type,Te=he.bytesPerElement,ge=n.isWebGL2===!0&&(Se===i.INT||Se===i.UNSIGNED_INT||G.gpuType===io);if(G.isInterleavedBufferAttribute){const Ne=G.data,U=Ne.stride,nt=G.offset;if(Ne.isInstancedInterleavedBuffer){for(let ve=0;ve<K.locationSize;ve++)R(K.location+ve,Ne.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let ve=0;ve<K.locationSize;ve++)v(K.location+ve);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ve=0;ve<K.locationSize;ve++)T(K.location+ve,re/K.locationSize,Se,$,U*Te,(nt+re/K.locationSize*ve)*Te,ge)}else{if(G.isInstancedBufferAttribute){for(let Ne=0;Ne<K.locationSize;Ne++)R(K.location+Ne,G.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ne=0;Ne<K.locationSize;Ne++)v(K.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Ne=0;Ne<K.locationSize;Ne++)T(K.location+Ne,re/K.locationSize,Se,$,re*Te,re/K.locationSize*Ne*Te,ge)}}else if(q!==void 0){const $=q[J];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(K.location,$);break;case 3:i.vertexAttrib3fv(K.location,$);break;case 4:i.vertexAttrib4fv(K.location,$);break;default:i.vertexAttrib1fv(K.location,$)}}}}S()}function M(){X();for(const P in a){const k=a[P];for(const W in k){const Y=k[W];for(const H in Y)y(Y[H].object),delete Y[H];delete k[W]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const k=a[P.id];for(const W in k){const Y=k[W];for(const H in Y)y(Y[H].object),delete Y[H];delete k[W]}delete a[P.id]}function B(P){for(const k in a){const W=a[k];if(W[P.id]===void 0)continue;const Y=W[P.id];for(const H in Y)y(Y[H].object),delete Y[H];delete W[P.id]}}function X(){te(),d=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:X,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function jd(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}function a(d,p){i.drawArrays(s,d,p),t.update(p,s,1)}function l(d,p,h){if(h===0)return;let m,y;if(r)m=i,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](s,d,p,h),t.update(p,s,h)}function c(d,p,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<h;y++)this.render(d[y],p[y]);else{m.multiDrawArraysWEBGL(s,d,0,p,0,h);let y=0;for(let x=0;x<h;x++)y+=p[x];t.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Kd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,v=o||e.has("OES_texture_float"),R=_&&v,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:S}}function Zd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new _n,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||r;return r=h,n=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,m){const y=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!r||y===null||y.length===0||s&&!f)s?d(null):c();else{const g=s?0:n,_=g*4;let v=u.clippingState||null;l.value=v,v=d(y,h,_,m);for(let R=0;R!==_;++R)v[R]=t[R];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,m,y){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,y!==!0||f===null){const u=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<u)&&(f=new Float32Array(u));for(let _=0,v=m;_!==x;++_,v+=4)o.copy(p[_]).applyMatrix4(g,a),o.normal.toArray(f,v),f[v+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Jd(i){let e=new WeakMap;function t(o,a){return a===jr?o.mapping=jn:a===Kr&&(o.mapping=Kn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jr||a===Kr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Qd extends Mo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xn=4,va=[.125,.215,.35,.446,.526,.582],xn=20,Nr=new Qd,xa=new He;let Fr=null,Or=0,Br=0;const gn=(1+Math.sqrt(5))/2,Vn=1/gn,ya=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,gn,Vn),new I(0,gn,-Vn),new I(Vn,0,gn),new I(-Vn,0,gn),new I(gn,Vn,0),new I(-gn,Vn,0)];class Ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===Kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:pi,format:Bt,colorSpace:Zt,depthBuffer:!1},r=Ea(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eh(s)),this._blurMaterial=th(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,r){const a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(xa),d.toneMapping=on,d.autoClear=!1;const m=new hi({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),y=new Ht(new vi,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(xa),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;Hi(r,g*_,u>2?_:0,_,_),d.setRenderTarget(r),x&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===jn||e.mapping===Kn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ya[(r-1)%ya.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ht(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xn-1),x=s/y,f=isFinite(s)?1+Math.floor(d*x):xn;f>xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xn}`);const u=[];let g=0;for(let T=0;T<xn;++T){const D=T/x,M=Math.exp(-D*D/2);u.push(M),T===0?g+=M:T<f&&(g+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-n;const v=this._sizeLods[r],R=3*v*(r>_-Xn?r-_+Xn:0),S=4*(this._cubeSize-v);Hi(t,R,S,3*v,2*v),l.setRenderTarget(t),l.render(p,Nr)}}function eh(i){const e=[],t=[],n=[];let r=i;const s=i-Xn+1+va.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Xn?l=va[o-i+Xn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,y=6,x=3,f=2,u=1,g=new Float32Array(x*y*m),_=new Float32Array(f*y*m),v=new Float32Array(u*y*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,D=S>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(M,x*y*S),_.set(h,f*y*S);const w=[S,S,S,S,S,S];v.set(w,u*y*S)}const R=new Lt;R.setAttribute("position",new kt(g,x)),R.setAttribute("uv",new kt(_,f)),R.setAttribute("faceIndex",new kt(v,u)),e.push(R),r>Xn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ea(i,e,t){const n=new Tn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function th(i,e,t){const n=new Float32Array(xn),r=new I(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ds(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Sa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ds(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function ba(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function ds(){return`

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
	`}function nh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jr||l===Kr,d=l===jn||l===Kn;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Ma(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new Ma(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ih(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rh(i,e,t,n){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const x=h.morphAttributes[y];for(let f=0,u=x.length;f<u;f++)e.remove(x[f])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const y in m){const x=m[y];for(let f=0,u=x.length;f<u;f++)e.update(x[f],i.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,y=p.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,v=g.length;_<v;_+=3){const R=g[_+0],S=g[_+1],T=g[_+2];h.push(R,S,S,T,T,R)}}else if(y!==void 0){const g=y.array;x=y.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const R=_+0,S=_+1,T=_+2;h.push(R,S,S,T,T,R)}}else return;const f=new(fo(h)?xo:vo)(h,1);f.version=x;const u=s.get(p);u&&e.remove(u),s.set(p,f)}function d(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function sh(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,y){i.drawElements(s,y,a,m*l),t.update(y,s,1)}function p(m,y,x){if(x===0)return;let f,u;if(r)f=i,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,y,a,m*l,x),t.update(y,s,x)}function h(m,y,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<x;u++)this.render(m[u]/l,y[u]);else{f.multiDrawElementsWEBGL(s,y,0,a,m,0,x);let u=0;for(let g=0;g<x;g++)u+=y[g];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=h}function ah(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function oh(i,e){return i[0]-e[0]}function lh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ch(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=y!==void 0?y.length:0;let f=s.get(d);if(f===void 0||f.count!==x){let k=function(){te.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const _=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),R===!0&&(M=3);let w=d.attributes.position.count*M,B=1;w>e.maxTextureSize&&(B=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const X=new Float32Array(w*B*4*x),te=new _o(X,w,B,x);te.type=sn,te.needsUpdate=!0;const P=M*4;for(let W=0;W<x;W++){const Y=S[W],H=T[W],V=D[W],q=w*B*4*W;for(let J=0;J<Y.count;J++){const K=J*P;_===!0&&(o.fromBufferAttribute(Y,J),X[q+K+0]=o.x,X[q+K+1]=o.y,X[q+K+2]=o.z,X[q+K+3]=0),v===!0&&(o.fromBufferAttribute(H,J),X[q+K+4]=o.x,X[q+K+5]=o.y,X[q+K+6]=o.z,X[q+K+7]=0),R===!0&&(o.fromBufferAttribute(V,J),X[q+K+8]=o.x,X[q+K+9]=o.y,X[q+K+10]=o.z,X[q+K+11]=V.itemSize===4?o.w:1)}}f={count:x,texture:te,size:new ze(w,B)},s.set(d,f),d.addEventListener("dispose",k)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const g=d.morphTargetsRelative?1:1-u;p.getUniforms().setValue(i,"morphTargetBaseInfluence",g),p.getUniforms().setValue(i,"morphTargetInfluences",h),p.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const y=h===void 0?0:h.length;let x=n[d.id];if(x===void 0||x.length!==y){x=[];for(let v=0;v<y;v++)x[v]=[v,0];n[d.id]=x}for(let v=0;v<y;v++){const R=x[v];R[0]=v,R[1]=h[v]}x.sort(lh);for(let v=0;v<8;v++)v<y&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(oh);const f=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const R=a[v],S=R[0],T=R[1];S!==Number.MAX_SAFE_INTEGER&&T?(f&&d.getAttribute("morphTarget"+v)!==f[S]&&d.setAttribute("morphTarget"+v,f[S]),u&&d.getAttribute("morphNormal"+v)!==u[S]&&d.setAttribute("morphNormal"+v,u[S]),r[v]=T,g+=T):(f&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),u&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),r[v]=0)}const _=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",_),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function uh(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class To extends Tt{constructor(e,t,n,r,s,o,a,l,c,d){if(d=d!==void 0?d:En,d!==En&&d!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===En&&(n=rn),n===void 0&&d===Zn&&(n=Mn),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ao=new Tt,wo=new To(1,1);wo.compareFunction=ho;const Ro=new _o,Co=new Yl,Po=new Eo,Ta=[],Aa=[],wa=new Float32Array(16),Ra=new Float32Array(9),Ca=new Float32Array(4);function ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ta[r];if(s===void 0&&(s=new Float32Array(r),Ta[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function it(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rr(i,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function ph(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function mh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Ca.set(n),i.uniformMatrix2fv(this.addr,!1,Ca),rt(t,n)}}function _h(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Ra.set(n),i.uniformMatrix3fv(this.addr,!1,Ra),rt(t,n)}}function gh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;wa.set(n),i.uniformMatrix4fv(this.addr,!1,wa),rt(t,n)}}function vh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function Mh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Eh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Th(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function Ah(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?wo:Ao;t.setTexture2D(e||s,r)}function wh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Co,r)}function Rh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Po,r)}function Ch(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ro,r)}function Ph(i){switch(i){case 5126:return dh;case 35664:return hh;case 35665:return fh;case 35666:return ph;case 35674:return mh;case 35675:return _h;case 35676:return gh;case 5124:case 35670:return vh;case 35667:case 35671:return xh;case 35668:case 35672:return yh;case 35669:case 35673:return Mh;case 5125:return Eh;case 36294:return Sh;case 36295:return bh;case 36296:return Th;case 35678:case 36198:case 36298:case 36306:case 35682:return Ah;case 35679:case 36299:case 36307:return wh;case 35680:case 36300:case 36308:case 36293:return Rh;case 36289:case 36303:case 36311:case 36292:return Ch}}function Lh(i,e){i.uniform1fv(this.addr,e)}function Ih(i,e){const t=ti(e,this.size,2);i.uniform2fv(this.addr,t)}function Dh(i,e){const t=ti(e,this.size,3);i.uniform3fv(this.addr,t)}function Uh(i,e){const t=ti(e,this.size,4);i.uniform4fv(this.addr,t)}function Nh(i,e){const t=ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fh(i,e){const t=ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Oh(i,e){const t=ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bh(i,e){i.uniform1iv(this.addr,e)}function kh(i,e){i.uniform2iv(this.addr,e)}function zh(i,e){i.uniform3iv(this.addr,e)}function Gh(i,e){i.uniform4iv(this.addr,e)}function Hh(i,e){i.uniform1uiv(this.addr,e)}function Vh(i,e){i.uniform2uiv(this.addr,e)}function Wh(i,e){i.uniform3uiv(this.addr,e)}function Xh(i,e){i.uniform4uiv(this.addr,e)}function qh(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ao,s[o])}function Yh(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Co,s[o])}function $h(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Po,s[o])}function jh(i,e,t){const n=this.cache,r=e.length,s=rr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ro,s[o])}function Kh(i){switch(i){case 5126:return Lh;case 35664:return Ih;case 35665:return Dh;case 35666:return Uh;case 35674:return Nh;case 35675:return Fh;case 35676:return Oh;case 5124:case 35670:return Bh;case 35667:case 35671:return kh;case 35668:case 35672:return zh;case 35669:case 35673:return Gh;case 5125:return Hh;case 36294:return Vh;case 36295:return Wh;case 36296:return Xh;case 35678:case 36198:case 36298:case 36306:case 35682:return qh;case 35679:case 36299:case 36307:return Yh;case 35680:case 36300:case 36308:case 36293:return $h;case 36289:case 36303:case 36311:case 36292:return jh}}class Zh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ph(t.type)}}class Jh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kh(t.type)}}class Qh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Pa(i,e){i.seq.push(e),i.map[e.id]=e}function ef(i,e,t){const n=i.name,r=n.length;for(kr.lastIndex=0;;){const s=kr.exec(n),o=kr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pa(t,c===void 0?new Zh(a,i,e):new Jh(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Qh(a),Pa(t,p)),t=p}}}class qi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ef(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function La(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tf=37297;let nf=0;function rf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sf(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===Ki&&t===ji?n="LinearDisplayP3ToLinearSRGB":e===ji&&t===Ki&&(n="LinearSRGBToLinearDisplayP3"),i){case Zt:case nr:return[n,"LinearTransferOETF"];case lt:case os:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ia(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rf(i.getShaderSource(e),o)}else return r}function af(i,e){const t=sf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function of(i,e){let t;switch(e){case ml:t="Linear";break;case _l:t="Reinhard";break;case gl:t="OptimizedCineon";break;case vl:t="ACESFilmic";break;case yl:t="AgX";break;case xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qn).join(`
`)}function cf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qn).join(`
`)}function uf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function df(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qn(i){return i!==""}function Da(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ua(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(hf,pf)}const ff=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pf(i,e){let t=Le[e];if(t===void 0){const n=ff.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ns(t)}const mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(i){return i.replace(mf,_f)}function _f(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jt&&(e="SHADOWMAP_TYPE_VSM"),e}function vf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jn:case Kn:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Kn:e="ENVMAP_MODE_REFRACTION";break}return e}function yf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case to:e="ENVMAP_BLENDING_MULTIPLY";break;case fl:e="ENVMAP_BLENDING_MIX";break;case pl:e="ENVMAP_BLENDING_ADD";break}return e}function Mf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ef(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gf(t),c=vf(t),d=xf(t),p=yf(t),h=Mf(t),m=t.isWebGL2?"":lf(t),y=cf(t),x=uf(s),f=r.createProgram();let u,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qn).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qn).join(`
`),g.length>0&&(g+=`
`)):(u=[Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qn).join(`
`),g=[m,Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Le.tonemapping_pars_fragment:"",t.toneMapping!==on?of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,af("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qn).join(`
`)),o=ns(o),o=Da(o,t),o=Ua(o,t),a=ns(a),a=Da(a,t),a=Ua(a,t),o=Na(o),a=Na(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+u+o,R=_+g+a,S=La(r,r.VERTEX_SHADER,v),T=La(r,r.FRAGMENT_SHADER,R);r.attachShader(f,S),r.attachShader(f,T),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function D(X){if(i.debug.checkShaderErrors){const te=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(S).trim(),k=r.getShaderInfoLog(T).trim();let W=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,S,T);else{const H=Ia(r,S,"vertex"),V=Ia(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+H+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||k==="")&&(Y=!1);Y&&(X.diagnostics={runnable:W,programLog:te,vertexShader:{log:P,prefix:u},fragmentShader:{log:k,prefix:g}})}r.deleteShader(S),r.deleteShader(T),M=new qi(r,f),w=df(r,f)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(f,tf)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=T,this}let Sf=0;class bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tf(e),t.set(e,n)),n}}class Tf{constructor(e){this.id=Sf++,this.code=e,this.usedTimes=0}}function Af(i,e,t,n,r,s,o){const a=new cs,l=new bf,c=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function f(M,w,B,X,te){const P=X.fog,k=te.geometry,W=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),H=Y&&Y.mapping===tr?Y.image.height:null,V=y[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=q!==void 0?q.length:0;let K=0;k.morphAttributes.position!==void 0&&(K=1),k.morphAttributes.normal!==void 0&&(K=2),k.morphAttributes.color!==void 0&&(K=3);let G,$,re,he;if(V){const pt=Gt[V];G=pt.vertexShader,$=pt.fragmentShader}else G=M.vertexShader,$=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const de=i.getRenderTarget(),Se=te.isInstancedMesh===!0,Te=te.isBatchedMesh===!0,ge=!!M.map,Ne=!!M.matcap,U=!!Y,nt=!!M.aoMap,ve=!!M.lightMap,we=!!M.bumpMap,fe=!!M.normalMap,je=!!M.displacementMap,Ie=!!M.emissiveMap,A=!!M.metalnessMap,E=!!M.roughnessMap,F=M.anisotropy>0,Q=M.clearcoat>0,Z=M.iridescence>0,ee=M.sheen>0,pe=M.transmission>0,oe=F&&!!M.anisotropyMap,ce=Q&&!!M.clearcoatMap,Me=Q&&!!M.clearcoatNormalMap,De=Q&&!!M.clearcoatRoughnessMap,j=Z&&!!M.iridescenceMap,Ve=Z&&!!M.iridescenceThicknessMap,ke=ee&&!!M.sheenColorMap,Ae=ee&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ue=!!M.specularColorMap,Pe=!!M.specularIntensityMap,Ge=pe&&!!M.transmissionMap,Je=pe&&!!M.thicknessMap,Fe=!!M.gradientMap,ne=!!M.alphaMap,C=M.alphaTest>0,se=!!M.alphaHash,ae=!!M.extensions,Ee=!!k.attributes.uv1,xe=!!k.attributes.uv2,Xe=!!k.attributes.uv3;let qe=on;return M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(qe=i.toneMapping),{isWebGL2:d,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:$,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Te,instancing:Se,instancingColor:Se&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Zt,map:ge,matcap:Ne,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:ve,bumpMap:we,normalMap:fe,displacementMap:h&&je,emissiveMap:Ie,normalMapObjectSpace:fe&&M.normalMapType===Dl,normalMapTangentSpace:fe&&M.normalMapType===Il,metalnessMap:A,roughnessMap:E,anisotropy:F,anisotropyMap:oe,clearcoat:Q,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,iridescence:Z,iridescenceMap:j,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:ue,specularIntensityMap:Pe,transmission:pe,transmissionMap:Ge,thicknessMap:Je,gradientMap:Fe,opaque:M.transparent===!1&&M.blending===Yn,alphaMap:ne,alphaTest:C,alphaHash:se,combine:M.combine,mapUv:ge&&x(M.map.channel),aoMapUv:nt&&x(M.aoMap.channel),lightMapUv:ve&&x(M.lightMap.channel),bumpMapUv:we&&x(M.bumpMap.channel),normalMapUv:fe&&x(M.normalMap.channel),displacementMapUv:je&&x(M.displacementMap.channel),emissiveMapUv:Ie&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:oe&&x(M.anisotropyMap.channel),clearcoatMapUv:ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(M.sheenRoughnessMap.channel),specularMapUv:_e&&x(M.specularMap.channel),specularColorMapUv:ue&&x(M.specularColorMap.channel),specularIntensityMapUv:Pe&&x(M.specularIntensityMap.channel),transmissionMapUv:Ge&&x(M.transmissionMap.channel),thicknessMapUv:Je&&x(M.thicknessMap.channel),alphaMapUv:ne&&x(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:xe,vertexUv3s:Xe,pointsUvs:te.isPoints===!0&&!!k.attributes.uv&&(ge||ne),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:te.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ge&&M.map.isVideoTexture===!0&&We.getTransfer(M.map.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)w.push(B),w.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(g(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function g(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const w=y[M.type];let B;if(w){const X=Gt[w];B=ac.clone(X.uniforms)}else B=M.uniforms;return B}function R(M,w){let B;for(let X=0,te=c.length;X<te;X++){const P=c[X];if(P.cacheKey===w){B=P,++B.usedTimes;break}}return B===void 0&&(B=new Ef(i,w,M,s),c.push(B)),B}function S(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:v,acquireProgram:R,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:D}}function wf(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ba(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,h,m,y,x,f){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:y,renderOrder:p.renderOrder,z:x,group:f},i[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=y,u.renderOrder=p.renderOrder,u.z=x,u.group=f),e++,u}function a(p,h,m,y,x,f){const u=o(p,h,m,y,x,f);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(p,h,m,y,x,f){const u=o(p,h,m,y,x,f);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(p,h){t.length>1&&t.sort(p||Rf),n.length>1&&n.sort(h||Oa),r.length>1&&r.sort(h||Oa)}function d(){for(let p=e,h=i.length;p<h;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Cf(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ba,i.set(n,[o])):r>=s.length?(o=new Ba,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Lf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let If=0;function Df(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Uf(i,e){const t=new Pf,n=Lf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,o=new Ze,a=new Ze;function l(d,p){let h=0,m=0,y=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,f=0,u=0,g=0,_=0,v=0,R=0,S=0,T=0,D=0,M=0;d.sort(Df);const w=p===!0?Math.PI:1;for(let X=0,te=d.length;X<te;X++){const P=d[X],k=P.color,W=P.intensity,Y=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*W*w,m+=k.g*W*w,y+=k.b*W*w;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],W);M++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const q=P.shadow,J=n.get(P);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=P.shadow.matrix,v++}r.directional[x]=V,x++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(W*w),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[u]=V;const q=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[u]=q.matrix,P.castShadow){const J=n.get(P);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=H,S++}u++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(k).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=V,g++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*w),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,J=n.get(P);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,r.pointShadow[f]=J,r.pointShadowMap[f]=H,r.pointShadowMatrix[f]=P.shadow.matrix,R++}r.point[f]=V,f++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(W*w),V.groundColor.copy(P.groundColor).multiplyScalar(W*w),r.hemi[_]=V,_++}}g>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==x||B.pointLength!==f||B.spotLength!==u||B.rectAreaLength!==g||B.hemiLength!==_||B.numDirectionalShadows!==v||B.numPointShadows!==R||B.numSpotShadows!==S||B.numSpotMaps!==T||B.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=g,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=S+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,B.directionalLength=x,B.pointLength=f,B.spotLength=u,B.rectAreaLength=g,B.hemiLength=_,B.numDirectionalShadows=v,B.numPointShadows=R,B.numSpotShadows=S,B.numSpotMaps=T,B.numLightProbes=M,r.version=If++)}function c(d,p){let h=0,m=0,y=0,x=0,f=0;const u=p.matrixWorldInverse;for(let g=0,_=d.length;g<_;g++){const v=d[g];if(v.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(v.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),y++}else if(v.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(v.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(u),m++}else if(v.isHemisphereLight){const R=r.hemi[f];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function ka(i,e){const t=new Uf(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(p){n.push(p)}function a(p){r.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Nf(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ka(i,e),t.set(s,[l])):o>=a.length?(l=new ka(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ff extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Of extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kf=`uniform sampler2D shadow_pass;
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
}`;function zf(i,e,t){let n=new So;const r=new ze,s=new ze,o=new ct,a=new Ff({depthPacking:Ll}),l=new Of,c={},d=t.maxTextureSize,p={[cn]:yt,[yt]:cn,[Ft]:Ft},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Bf,fragmentShader:kf}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new Lt;y.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(y,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let u=this.type;this.render=function(S,T,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),X=i.state;X.setBlending(an),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=u!==jt&&this.type===jt,P=u===jt&&this.type!==jt;for(let k=0,W=S.length;k<W;k++){const Y=S[k],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const V=H.getFrameExtents();if(r.multiply(V),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/V.x),r.x=s.x*V.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/V.y),r.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||te===!0||P===!0){const J=this.type!==jt?{minFilter:gt,magFilter:gt}:{};H.map!==null&&H.map.dispose(),H.map=new Tn(r.x,r.y,J),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const q=H.getViewportCount();for(let J=0;J<q;J++){const K=H.getViewport(J);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),X.viewport(o),H.updateMatrices(Y,J),n=H.getFrustum(),v(T,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===jt&&g(H,D),H.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(M,w,B)};function g(S,T){const D=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Tn(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,D,h,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,D,m,x,null)}function _(S,T,D,M){let w=null;const B=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)w=B;else if(w=D.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=w.uuid,te=T.uuid;let P=c[X];P===void 0&&(P={},c[X]=P);let k=P[te];k===void 0&&(k=w.clone(),P[te]=k,T.addEventListener("dispose",R)),w=k}if(w.visible=T.visible,w.wireframe=T.wireframe,M===jt?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=i.properties.get(w);X.light=D}return w}function v(S,T,D,M,w){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===jt)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const te=e.update(S),P=S.material;if(Array.isArray(P)){const k=te.groups;for(let W=0,Y=k.length;W<Y;W++){const H=k[W],V=P[H.materialIndex];if(V&&V.visible){const q=_(S,V,M,w);S.onBeforeShadow(i,S,T,D,te,q,H),i.renderBufferDirect(D,null,te,q,S,H),S.onAfterShadow(i,S,T,D,te,q,H)}}}else if(P.visible){const k=_(S,P,M,w);S.onBeforeShadow(i,S,T,D,te,k,null),i.renderBufferDirect(D,null,te,k,S,null),S.onAfterShadow(i,S,T,D,te,k,null)}}const X=S.children;for(let te=0,P=X.length;te<P;te++)v(X[te],T,D,M,w)}function R(S){S.target.removeEventListener("dispose",R);for(const D in c){const M=c[D],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Gf(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const se=new ct;let ae=null;const Ee=new ct(0,0,0,0);return{setMask:function(xe){ae!==xe&&!C&&(i.colorMask(xe,xe,xe,xe),ae=xe)},setLocked:function(xe){C=xe},setClear:function(xe,Xe,qe,st,pt){pt===!0&&(xe*=st,Xe*=st,qe*=st),se.set(xe,Xe,qe,st),Ee.equals(se)===!1&&(i.clearColor(xe,Xe,qe,st),Ee.copy(se))},reset:function(){C=!1,ae=null,Ee.set(-1,0,0,0)}}}function s(){let C=!1,se=null,ae=null,Ee=null;return{setTest:function(xe){xe?Te(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(xe){se!==xe&&!C&&(i.depthMask(xe),se=xe)},setFunc:function(xe){if(ae!==xe){switch(xe){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=xe}},setLocked:function(xe){C=xe},setClear:function(xe){Ee!==xe&&(i.clearDepth(xe),Ee=xe)},reset:function(){C=!1,se=null,ae=null,Ee=null}}}function o(){let C=!1,se=null,ae=null,Ee=null,xe=null,Xe=null,qe=null,st=null,pt=null;return{setTest:function(Ye){C||(Ye?Te(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!C&&(i.stencilMask(Ye),se=Ye)},setFunc:function(Ye,mt,zt){(ae!==Ye||Ee!==mt||xe!==zt)&&(i.stencilFunc(Ye,mt,zt),ae=Ye,Ee=mt,xe=zt)},setOp:function(Ye,mt,zt){(Xe!==Ye||qe!==mt||st!==zt)&&(i.stencilOp(Ye,mt,zt),Xe=Ye,qe=mt,st=zt)},setLocked:function(Ye){C=Ye},setClear:function(Ye){pt!==Ye&&(i.clearStencil(Ye),pt=Ye)},reset:function(){C=!1,se=null,ae=null,Ee=null,xe=null,Xe=null,qe=null,st=null,pt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,p=new WeakMap;let h={},m={},y=new WeakMap,x=[],f=null,u=!1,g=null,_=null,v=null,R=null,S=null,T=null,D=null,M=new He(0,0,0),w=0,B=!1,X=null,te=null,P=null,k=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=V>=2);let J=null,K={};const G=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),re=new ct().fromArray(G),he=new ct().fromArray($);function de(C,se,ae,Ee){const xe=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(C,Xe),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ae;qe++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(se+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Xe}const Se={};Se[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Se[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(i.DEPTH_TEST),l.setFunc(Yi),Ie(!1),A(ys),Te(i.CULL_FACE),fe(an);function Te(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function ge(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ne(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(C,se){let ae=x,Ee=!1;if(C)if(ae=y.get(se),ae===void 0&&(ae=[],y.set(se,ae)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(ae.length!==xe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,qe=xe.length;Xe<qe;Xe++)ae[Xe]=i.COLOR_ATTACHMENT0+Xe;ae.length=xe.length,Ee=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,Ee=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function nt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const ve={[vn]:i.FUNC_ADD,[Xo]:i.FUNC_SUBTRACT,[qo]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[bs]=i.MIN,ve[Ts]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ve[bs]=C.MIN_EXT,ve[Ts]=C.MAX_EXT)}const we={[Yo]:i.ZERO,[$o]:i.ONE,[jo]:i.SRC_COLOR,[Yr]:i.SRC_ALPHA,[tl]:i.SRC_ALPHA_SATURATE,[Qo]:i.DST_COLOR,[Zo]:i.DST_ALPHA,[Ko]:i.ONE_MINUS_SRC_COLOR,[$r]:i.ONE_MINUS_SRC_ALPHA,[el]:i.ONE_MINUS_DST_COLOR,[Jo]:i.ONE_MINUS_DST_ALPHA,[nl]:i.CONSTANT_COLOR,[il]:i.ONE_MINUS_CONSTANT_COLOR,[rl]:i.CONSTANT_ALPHA,[sl]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(C,se,ae,Ee,xe,Xe,qe,st,pt,Ye){if(C===an){u===!0&&(ge(i.BLEND),u=!1);return}if(u===!1&&(Te(i.BLEND),u=!0),C!==Wo){if(C!==g||Ye!==B){if((_!==vn||S!==vn)&&(i.blendEquation(i.FUNC_ADD),_=vn,S=vn),Ye)switch(C){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,R=null,T=null,D=null,M.set(0,0,0),w=0,g=C,B=Ye}return}xe=xe||se,Xe=Xe||ae,qe=qe||Ee,(se!==_||xe!==S)&&(i.blendEquationSeparate(ve[se],ve[xe]),_=se,S=xe),(ae!==v||Ee!==R||Xe!==T||qe!==D)&&(i.blendFuncSeparate(we[ae],we[Ee],we[Xe],we[qe]),v=ae,R=Ee,T=Xe,D=qe),(st.equals(M)===!1||pt!==w)&&(i.blendColor(st.r,st.g,st.b,pt),M.copy(st),w=pt),g=C,B=!1}function je(C,se){C.side===Ft?ge(i.CULL_FACE):Te(i.CULL_FACE);let ae=C.side===yt;se&&(ae=!ae),Ie(ae),C.blending===Yn&&C.transparent===!1?fe(an):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Ee=C.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){X!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),X=C)}function A(C){C!==Go?(Te(i.CULL_FACE),C!==te&&(C===ys?i.cullFace(i.BACK):C===Ho?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),te=C}function E(C){C!==P&&(H&&i.lineWidth(C),P=C)}function F(C,se,ae){C?(Te(i.POLYGON_OFFSET_FILL),(k!==se||W!==ae)&&(i.polygonOffset(se,ae),k=se,W=ae)):ge(i.POLYGON_OFFSET_FILL)}function Q(C){C?Te(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Z(C){C===void 0&&(C=i.TEXTURE0+Y-1),J!==C&&(i.activeTexture(C),J=C)}function ee(C,se,ae){ae===void 0&&(J===null?ae=i.TEXTURE0+Y-1:ae=J);let Ee=K[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},K[ae]=Ee),(Ee.type!==C||Ee.texture!==se)&&(J!==ae&&(i.activeTexture(ae),J=ae),i.bindTexture(C,se||Se[C]),Ee.type=C,Ee.texture=se)}function pe(){const C=K[J];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(C){re.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function Ge(C){he.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),he.copy(C))}function Je(C,se){let ae=p.get(se);ae===void 0&&(ae=new WeakMap,p.set(se,ae));let Ee=ae.get(C);Ee===void 0&&(Ee=i.getUniformBlockIndex(se,C.name),ae.set(C,Ee))}function Fe(C,se){const Ee=p.get(se).get(C);d.get(se)!==Ee&&(i.uniformBlockBinding(se,Ee,C.__bindingPointIndex),d.set(se,Ee))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,K={},m={},y=new WeakMap,x=[],f=null,u=!1,g=null,_=null,v=null,R=null,S=null,T=null,D=null,M=new He(0,0,0),w=0,B=!1,X=null,te=null,P=null,k=null,W=null,re.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:ge,bindFramebuffer:Ne,drawBuffers:U,useProgram:nt,setBlending:fe,setMaterial:je,setFlipSided:Ie,setCullFace:A,setLineWidth:E,setPolygonOffset:F,setScissorTest:Q,activeTexture:Z,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:_e,texImage3D:ue,updateUBOMapping:Je,uniformBlockBinding:Fe,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Me,texSubImage3D:De,compressedTexSubImage2D:j,compressedTexSubImage3D:Ve,scissor:Pe,viewport:Ge,reset:ne}}function Hf(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return m?new OffscreenCanvas(A,E):Ji("canvas")}function x(A,E,F,Q){let Z=1;if((A.width>Q||A.height>Q)&&(Z=Q/Math.max(A.width,A.height)),Z<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ee=E?ts:Math.floor,pe=ee(Z*A.width),oe=ee(Z*A.height);p===void 0&&(p=y(pe,oe));const ce=F?y(pe,oe):p;return ce.width=pe,ce.height=oe,ce.getContext("2d").drawImage(A,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pe+"x"+oe+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function f(A){return ta(A.width)&&ta(A.height)}function u(A){return a?!1:A.wrapS!==Ot||A.wrapT!==Ot||A.minFilter!==gt&&A.minFilter!==Rt}function g(A,E){return A.generateMipmaps&&E&&A.minFilter!==gt&&A.minFilter!==Rt}function _(A){i.generateMipmap(A)}function v(A,E,F,Q,Z=!1){if(a===!1)return E;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=E;if(E===i.RED&&(F===i.FLOAT&&(ee=i.R32F),F===i.HALF_FLOAT&&(ee=i.R16F),F===i.UNSIGNED_BYTE&&(ee=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ee=i.R8UI),F===i.UNSIGNED_SHORT&&(ee=i.R16UI),F===i.UNSIGNED_INT&&(ee=i.R32UI),F===i.BYTE&&(ee=i.R8I),F===i.SHORT&&(ee=i.R16I),F===i.INT&&(ee=i.R32I)),E===i.RG&&(F===i.FLOAT&&(ee=i.RG32F),F===i.HALF_FLOAT&&(ee=i.RG16F),F===i.UNSIGNED_BYTE&&(ee=i.RG8)),E===i.RGBA){const pe=Z?$i:We.getTransfer(Q);F===i.FLOAT&&(ee=i.RGBA32F),F===i.HALF_FLOAT&&(ee=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ee=pe===$e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(A,E,F){return g(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==gt&&A.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function S(A){return A===gt||A===As||A===ur?i.NEAREST:i.LINEAR}function T(A){const E=A.target;E.removeEventListener("dispose",T),M(E),E.isVideoTexture&&d.delete(E)}function D(A){const E=A.target;E.removeEventListener("dispose",D),B(E)}function M(A){const E=n.get(A);if(E.__webglInit===void 0)return;const F=A.source,Q=h.get(F);if(Q){const Z=Q[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(A),Object.keys(Q).length===0&&h.delete(F)}n.remove(A)}function w(A){const E=n.get(A);i.deleteTexture(E.__webglTexture);const F=A.source,Q=h.get(F);delete Q[E.__cacheKey],o.memory.textures--}function B(A){const E=A.texture,F=n.get(A),Q=n.get(E);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let ee=0;ee<F.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)i.deleteFramebuffer(F.__webglFramebuffer[Z]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,ee=E.length;Z<ee;Z++){const pe=n.get(E[Z]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(E[Z])}n.remove(E),n.remove(A)}let X=0;function te(){X=0}function P(){const A=X;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),X+=1,A}function k(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function W(A,E){const F=n.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,A,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function Y(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){re(F,A,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function H(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){re(F,A,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function V(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){he(F,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const q={[Zr]:i.REPEAT,[Ot]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},J={[gt]:i.NEAREST,[As]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},K={[Ul]:i.NEVER,[zl]:i.ALWAYS,[Nl]:i.LESS,[ho]:i.LEQUAL,[Fl]:i.EQUAL,[kl]:i.GEQUAL,[Ol]:i.GREATER,[Bl]:i.NOTEQUAL};function G(A,E,F){if(F?(i.texParameteri(A,i.TEXTURE_WRAP_S,q[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[E.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Ot||E.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,S(E.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==gt&&E.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===gt||E.minFilter!==ur&&E.minFilter!==fi||E.type===sn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===pi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function $(A,E){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));const Q=E.source;let Z=h.get(Q);Z===void 0&&(Z={},h.set(Q,Z));const ee=k(E);if(ee!==A.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[ee].usedTimes++;const pe=Z[A.__cacheKey];pe!==void 0&&(Z[A.__cacheKey].usedTimes--,pe.usedTimes===0&&w(E)),A.__cacheKey=ee,A.__webglTexture=Z[ee].texture}return F}function re(A,E,F){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const Z=$(A,E),ee=E.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+F);const pe=n.get(ee);if(ee.version!==pe.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const oe=We.getPrimaries(We.workingColorSpace),ce=E.colorSpace===Pt?null:We.getPrimaries(E.colorSpace),Me=E.colorSpace===Pt||oe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=u(E)&&f(E.image)===!1;let j=x(E.image,De,!1,r.maxTextureSize);j=Ie(E,j);const Ve=f(j)||a,ke=s.convert(E.format,E.colorSpace);let Ae=s.convert(E.type),_e=v(E.internalFormat,ke,Ae,E.colorSpace,E.isVideoTexture);G(Q,E,Ve);let ue;const Pe=E.mipmaps,Ge=a&&E.isVideoTexture!==!0&&_e!==co,Je=pe.__version===void 0||Z===!0,Fe=R(E,j,Ve);if(E.isDepthTexture)_e=i.DEPTH_COMPONENT,a?E.type===sn?_e=i.DEPTH_COMPONENT32F:E.type===rn?_e=i.DEPTH_COMPONENT24:E.type===Mn?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:E.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===En&&_e===i.DEPTH_COMPONENT&&E.type!==as&&E.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=rn,Ae=s.convert(E.type)),E.format===Zn&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,E.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Mn,Ae=s.convert(E.type))),Je&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,ke,Ae,null));else if(E.isDataTexture)if(Pe.length>0&&Ve){Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,Pe[0].width,Pe[0].height);for(let ne=0,C=Pe.length;ne<C;ne++)ue=Pe[ne],Ge?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,ke,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ke,Ae,ue.data);E.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ke,Ae,j.data)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,ke,Ae,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,_e,Pe[0].width,Pe[0].height,j.depth);for(let ne=0,C=Pe.length;ne<C;ne++)ue=Pe[ne],E.format!==Bt?ke!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,j.depth,ke,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,j.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,j.depth,ke,Ae,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,j.depth,0,ke,Ae,ue.data)}else{Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,Pe[0].width,Pe[0].height);for(let ne=0,C=Pe.length;ne<C;ne++)ue=Pe[ne],E.format!==Bt?ke!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,ke,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,ke,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ke,Ae,ue.data)}else if(E.isDataArrayTexture)Ge?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ke,Ae,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,ke,Ae,j.data);else if(E.isData3DTexture)Ge?(Je&&t.texStorage3D(i.TEXTURE_3D,Fe,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ke,Ae,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,ke,Ae,j.data);else if(E.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(i.TEXTURE_2D,Fe,_e,j.width,j.height);else{let ne=j.width,C=j.height;for(let se=0;se<Fe;se++)t.texImage2D(i.TEXTURE_2D,se,_e,ne,C,0,ke,Ae,null),ne>>=1,C>>=1}}else if(Pe.length>0&&Ve){Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,Pe[0].width,Pe[0].height);for(let ne=0,C=Pe.length;ne<C;ne++)ue=Pe[ne],Ge?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ke,Ae,ue):t.texImage2D(i.TEXTURE_2D,ne,_e,ke,Ae,ue);E.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,Ae,j)):t.texImage2D(i.TEXTURE_2D,0,_e,ke,Ae,j);g(E,Ve)&&_(Q),pe.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function he(A,E,F){if(E.image.length!==6)return;const Q=$(A,E),Z=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const ee=n.get(Z);if(Z.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const pe=We.getPrimaries(We.workingColorSpace),oe=E.colorSpace===Pt?null:We.getPrimaries(E.colorSpace),ce=E.colorSpace===Pt||pe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,De=E.image[0]&&E.image[0].isDataTexture,j=[];for(let ne=0;ne<6;ne++)!Me&&!De?j[ne]=x(E.image[ne],!1,!0,r.maxCubemapSize):j[ne]=De?E.image[ne].image:E.image[ne],j[ne]=Ie(E,j[ne]);const Ve=j[0],ke=f(Ve)||a,Ae=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),ue=v(E.internalFormat,Ae,_e,E.colorSpace),Pe=a&&E.isVideoTexture!==!0,Ge=ee.__version===void 0||Q===!0;let Je=R(E,Ve,ke);G(i.TEXTURE_CUBE_MAP,E,ke);let Fe;if(Me){Pe&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,ue,Ve.width,Ve.height);for(let ne=0;ne<6;ne++){Fe=j[ne].mipmaps;for(let C=0;C<Fe.length;C++){const se=Fe[C];E.format!==Bt?Ae!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,_e,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,Ae,_e,se.data)}}}else{Fe=E.mipmaps,Pe&&Ge&&(Fe.length>0&&Je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,ue,j[0].width,j[0].height));for(let ne=0;ne<6;ne++)if(De){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,j[ne].width,j[ne].height,Ae,_e,j[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,j[ne].width,j[ne].height,0,Ae,_e,j[ne].data);for(let C=0;C<Fe.length;C++){const ae=Fe[C].image[ne].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,ae.width,ae.height,Ae,_e,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,ae.width,ae.height,0,Ae,_e,ae.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,_e,j[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ae,_e,j[ne]);for(let C=0;C<Fe.length;C++){const se=Fe[C];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ae,_e,se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,Ae,_e,se.image[ne])}}}g(E,ke)&&_(i.TEXTURE_CUBE_MAP),ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function de(A,E,F,Q,Z,ee){const pe=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),ce=v(F.internalFormat,pe,oe,F.colorSpace);if(!n.get(E).__hasExternalTextures){const De=Math.max(1,E.width>>ee),j=Math.max(1,E.height>>ee);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,ce,De,j,E.depth,0,pe,oe,null):t.texImage2D(Z,ee,ce,De,j,0,pe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,n.get(F).__webglTexture,0,we(E)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,n.get(F).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(A,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||fe(E)){const Z=E.depthTexture;Z&&Z.isDepthTexture&&(Z.type===sn?Q=i.DEPTH_COMPONENT32F:Z.type===rn&&(Q=i.DEPTH_COMPONENT24));const ee=we(E);fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const Q=we(E);F&&fe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,E.width,E.height):fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const Q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0;Z<Q.length;Z++){const ee=Q[Z],pe=s.convert(ee.format,ee.colorSpace),oe=s.convert(ee.type),ce=v(ee.internalFormat,pe,oe,ee.colorSpace),Me=we(E);F&&fe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ce,E.width,E.height):fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ce,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ce,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const Q=n.get(E.depthTexture).__webglTexture,Z=we(E);if(E.depthTexture.format===En)fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Zn)fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ge(A){const E=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,A)}else if(F){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=i.createRenderbuffer(),Se(E.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Se(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(A,E,F){const Q=n.get(A);E!==void 0&&de(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ge(A)}function U(A){const E=A.texture,F=n.get(A),Q=n.get(E);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,ee=A.isWebGLMultipleRenderTargets===!0,pe=f(A)||a;if(Z){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let ce=0;ce<E.mipmaps.length;ce++)F.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const oe=A.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const De=n.get(oe[ce]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&fe(A)===!1){const oe=ee?E:[E];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const Me=oe[ce];F.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const De=s.convert(Me.format,Me.colorSpace),j=s.convert(Me.type),Ve=v(Me.internalFormat,De,j,Me.colorSpace,A.isXRRenderTarget===!0),ke=we(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),G(i.TEXTURE_CUBE_MAP,E,pe);for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)de(F.__webglFramebuffer[oe][ce],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else de(F.__webglFramebuffer[oe],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(E,pe)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const oe=A.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const De=oe[ce],j=n.get(De);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),G(i.TEXTURE_2D,De,pe),de(F.__webglFramebuffer,A,De,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),g(De,pe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),G(oe,E,pe),a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)de(F.__webglFramebuffer[ce],A,E,i.COLOR_ATTACHMENT0,oe,ce);else de(F.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,oe,0);g(E,pe)&&_(oe),t.unbindTexture()}A.depthBuffer&&ge(A)}function nt(A){const E=f(A)||a,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,Z=F.length;Q<Z;Q++){const ee=F[Q];if(g(ee,E)){const pe=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(ee).__webglTexture;t.bindTexture(pe,oe),_(pe),t.unbindTexture()}}}function ve(A){if(a&&A.samples>0&&fe(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,Q=A.height;let Z=i.COLOR_BUFFER_BIT;const ee=[],pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(A),ce=A.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){ee.push(i.COLOR_ATTACHMENT0+Me),A.depthBuffer&&ee.push(pe);const De=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),ce){const j=n.get(E[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const De=n.get(E[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function we(A){return Math.min(r.maxSamples,A.samples)}function fe(A){const E=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(A){const E=o.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function Ie(A,E){const F=A.colorSpace,Q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Qr||F!==Zt&&F!==Pt&&(We.getTransfer(F)===$e?a===!1?e.has("EXT_sRGB")===!0&&Q===Bt?(A.format=Qr,A.minFilter=Rt,A.generateMipmaps=!1):E=po.sRGBToLinear(E):(Q!==Bt||Z!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=U,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=de,this.useMultisampledRTT=fe}function Vf(i,e,t){const n=t.isWebGL2;function r(s,o=Pt){let a;const l=We.getTransfer(o);if(s===ln)return i.UNSIGNED_BYTE;if(s===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(s===so)return i.UNSIGNED_SHORT_5_5_5_1;if(s===El)return i.BYTE;if(s===Sl)return i.SHORT;if(s===as)return i.UNSIGNED_SHORT;if(s===io)return i.INT;if(s===rn)return i.UNSIGNED_INT;if(s===sn)return i.FLOAT;if(s===pi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bl)return i.ALPHA;if(s===Bt)return i.RGBA;if(s===Tl)return i.LUMINANCE;if(s===Al)return i.LUMINANCE_ALPHA;if(s===En)return i.DEPTH_COMPONENT;if(s===Zn)return i.DEPTH_STENCIL;if(s===Qr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wl)return i.RED;if(s===ao)return i.RED_INTEGER;if(s===Rl)return i.RG;if(s===oo)return i.RG_INTEGER;if(s===lo)return i.RGBA_INTEGER;if(s===dr||s===hr||s===fr||s===pr)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===dr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===dr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ws||s===Rs||s===Cs||s===Ps)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ws)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ps)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===co)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ls||s===Is)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ls)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Is)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ds||s===Us||s===Ns||s===Fs||s===Os||s===Bs||s===ks||s===zs||s===Gs||s===Hs||s===Vs||s===Ws||s===Xs||s===qs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ds)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Us)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ns)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Os)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ks)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ws)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qs)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mr||s===Ys||s===$s)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mr)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$s)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cl||s===js||s===Ks||s===Zs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===js)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Wf extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yn extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xf={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),u=this._getHandJoint(c,x);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qf extends Qn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,h=null,m=null,y=null;const x=t.getContextAttributes();let f=null,u=null;const g=[],_=[],v=new ze;let R=null;const S=new Ct;S.layers.enable(1),S.viewport=new ct;const T=new Ct;T.layers.enable(2),T.viewport=new ct;const D=[S,T],M=new Wf;M.layers.enable(1),M.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=g[G];return $===void 0&&($=new zr,g[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=g[G];return $===void 0&&($=new zr,g[G]=$),$.getGripSpace()},this.getHand=function(G){let $=g[G];return $===void 0&&($=new zr,g[G]=$),$.getHandSpace()};function X(G){const $=_.indexOf(G.inputSource);if($===-1)return;const re=g[$];re!==void 0&&(re.update(G.inputSource,G.frame,c||o),re.dispatchEvent({type:G.type,data:G.inputSource}))}function te(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",P);for(let G=0;G<g.length;G++){const $=_[G];$!==null&&(_[G]=null,g[G].disconnect($))}w=null,B=null,e.setRenderTarget(f),m=null,h=null,p=null,r=null,u=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",te),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(v),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Tn(m.framebufferWidth,m.framebufferHeight,{format:Bt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,re=null,he=null;x.depth&&(he=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=x.stencil?Zn:En,re=x.stencil?Mn:rn);const de={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Tn(h.textureWidth,h.textureHeight,{format:Bt,type:ln,depthTexture:new To(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Se=e.properties.get(u);Se.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(G){for(let $=0;$<G.removed.length;$++){const re=G.removed[$],he=_.indexOf(re);he>=0&&(_[he]=null,g[he].disconnect(re))}for(let $=0;$<G.added.length;$++){const re=G.added[$];let he=_.indexOf(re);if(he===-1){for(let Se=0;Se<g.length;Se++)if(Se>=_.length){_.push(re),he=Se;break}else if(_[Se]===null){_[Se]=re,he=Se;break}if(he===-1)break}const de=g[he];de&&de.connect(re)}}const k=new I,W=new I;function Y(G,$,re){k.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(re.matrixWorld);const he=k.distanceTo(W),de=$.projectionMatrix.elements,Se=re.projectionMatrix.elements,Te=de[14]/(de[10]-1),ge=de[14]/(de[10]+1),Ne=(de[9]+1)/de[5],U=(de[9]-1)/de[5],nt=(de[8]-1)/de[0],ve=(Se[8]+1)/Se[0],we=Te*nt,fe=Te*ve,je=he/(-nt+ve),Ie=je*-nt;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ie),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Te+je,E=ge+je,F=we-Ie,Q=fe+(he-Ie),Z=Ne*ge/E*A,ee=U*ge/E*A;G.projectionMatrix.makePerspective(F,Q,Z,ee,A,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.near=T.near=S.near=G.near,M.far=T.far=S.far=G.far,(w!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,B=M.far);const $=G.parent,re=M.cameras;H(M,$);for(let he=0;he<re.length;he++)H(re[he],$);re.length===2?Y(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),V(G,M,$)};function V(G,$,re){re===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=es*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let q=null;function J(G,$){if(d=$.getViewerPose(c||o),y=$,d!==null){const re=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let he=!1;re.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let de=0;de<re.length;de++){const Se=re[de];let Te=null;if(m!==null)Te=m.getViewport(Se);else{const Ne=p.getViewSubImage(h,Se);Te=Ne.viewport,de===0&&(e.setRenderTargetTextures(u,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(u))}let ge=D[de];ge===void 0&&(ge=new Ct,ge.layers.enable(de),ge.viewport=new ct,D[de]=ge),ge.matrix.fromArray(Se.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Se.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Te.x,Te.y,Te.width,Te.height),de===0&&(M.matrix.copy(ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(ge)}}for(let re=0;re<g.length;re++){const he=_[re],de=g[re];he!==null&&de!==void 0&&de.update(he,$,c||o)}q&&q(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),y=null}const K=new bo;K.setAnimationLoop(J),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}function Yf(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,yo(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),d(f,u)):u.isMeshStandardMaterial?(s(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,v)):u.isMeshMatcapMaterial?(s(f,u),y(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),x(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,g,_):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===yt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===yt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,g,_){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*g,f.scale.value=_*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,g){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,u){u.matcap&&(f.matcap.value=u.matcap)}function x(f,u){const g=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $f(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const v=_.program;n.uniformBlockBinding(g,v)}function c(g,_){let v=r[g.id];v===void 0&&(y(g),v=d(g),r[g.id]=v,g.addEventListener("dispose",f));const R=_.program;n.updateUBOMapping(g,R);const S=e.render.frame;s[g.id]!==S&&(h(g),s[g.id]=S)}function d(g){const _=p();g.__bindingPointIndex=_;const v=i.createBuffer(),R=g.__size,S=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function p(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],v=g.uniforms,R=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,T=v.length;S<T;S++){const D=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,w=D.length;M<w;M++){const B=D[M];if(m(B,S,M,R)===!0){const X=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let P=0;for(let k=0;k<te.length;k++){const W=te[k],Y=x(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,X+P,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(g,_,v,R){const S=g.value,T=_+"_"+v;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:R[T]=S.clone(),!0;{const D=R[T];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return R[T]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function y(g){const _=g.uniforms;let v=0;const R=16;for(let T=0,D=_.length;T<D;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,B=M.length;w<B;w++){const X=M[w],te=Array.isArray(X.value)?X.value:[X.value];for(let P=0,k=te.length;P<k;P++){const W=te[P],Y=x(W),H=v%R;H!==0&&R-H<Y.boundary&&(v+=R-H),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=Y.storage}}}const S=v%R;return S>0&&(v+=R-S),g.__size=v,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function f(g){const _=g.target;_.removeEventListener("dispose",f);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)i.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Lo{constructor(e={}){const{canvas:t=Hl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),y=new Int32Array(4);let x=null,f=null;const u=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=on,this.toneMappingExposure=1;const _=this;let v=!1,R=0,S=0,T=null,D=-1,M=null;const w=new ct,B=new ct;let X=null;const te=new He(0);let P=0,k=t.width,W=t.height,Y=1,H=null,V=null;const q=new ct(0,0,k,W),J=new ct(0,0,k,W);let K=!1;const G=new So;let $=!1,re=!1,he=null;const de=new Ze,Se=new ze,Te=new I,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return T===null?Y:1}let U=n;function nt(b,L){for(let O=0;O<b.length;O++){const z=b[O],N=t.getContext(z,L);if(N!==null)return N}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ss}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){const L=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&L.shift(),U=nt(L,b),U===null)throw nt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,we,fe,je,Ie,A,E,F,Q,Z,ee,pe,oe,ce,Me,De,j,Ve,ke,Ae,_e,ue,Pe,Ge;function Je(){ve=new ih(U),we=new Kd(U,ve,e),ve.init(we),ue=new Vf(U,ve,we),fe=new Gf(U,ve,we),je=new ah(U),Ie=new wf,A=new Hf(U,ve,fe,Ie,we,ue,je),E=new Jd(_),F=new nh(_),Q=new fc(U,we),Pe=new $d(U,ve,Q,we),Z=new rh(U,Q,je,Pe),ee=new uh(U,Z,Q,je),ke=new ch(U,we,A),De=new Zd(Ie),pe=new Af(_,E,F,ve,we,Pe,De),oe=new Yf(_,Ie),ce=new Cf,Me=new Nf(ve,we),Ve=new Yd(_,E,F,fe,ee,h,l),j=new zf(_,ee,we),Ge=new $f(U,je,we,fe),Ae=new jd(U,ve,je,we),_e=new sh(U,ve,je,we),je.programs=pe.programs,_.capabilities=we,_.extensions=ve,_.properties=Ie,_.renderLists=ce,_.shadowMap=j,_.state=fe,_.info=je}Je();const Fe=new qf(_,U);this.xr=Fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(k,W,!1))},this.getSize=function(b){return b.set(k,W)},this.setSize=function(b,L,O=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,W=L,t.width=Math.floor(b*Y),t.height=Math.floor(L*Y),O===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(k*Y,W*Y).floor()},this.setDrawingBufferSize=function(b,L,O){k=b,W=L,Y=O,t.width=Math.floor(b*O),t.height=Math.floor(L*O),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,L,O,z){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,L,O,z),fe.viewport(w.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,L,O,z){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,L,O,z),fe.scissor(B.copy(J).multiplyScalar(Y).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){fe.setScissorTest(K=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(b=!0,L=!0,O=!0){let z=0;if(b){let N=!1;if(T!==null){const le=T.texture.format;N=le===lo||le===oo||le===ao}if(N){const le=T.texture.type,me=le===ln||le===rn||le===as||le===Mn||le===ro||le===so,ye=Ve.getClearColor(),be=Ve.getClearAlpha(),Ue=ye.r,Re=ye.g,Ce=ye.b;me?(m[0]=Ue,m[1]=Re,m[2]=Ce,m[3]=be,U.clearBufferuiv(U.COLOR,0,m)):(y[0]=Ue,y[1]=Re,y[2]=Ce,y[3]=be,U.clearBufferiv(U.COLOR,0,y))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT),O&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),Me.dispose(),Ie.dispose(),E.dispose(),F.dispose(),ee.dispose(),Pe.dispose(),Ge.dispose(),pe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",pt),Fe.removeEventListener("sessionend",Ye),he&&(he.dispose(),he=null),mt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=je.autoReset,L=j.enabled,O=j.autoUpdate,z=j.needsUpdate,N=j.type;Je(),je.autoReset=b,j.enabled=L,j.autoUpdate=O,j.needsUpdate=z,j.type=N}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const L=b.target;L.removeEventListener("dispose",ae),Ee(L)}function Ee(b){xe(b),Ie.remove(b)}function xe(b){const L=Ie.get(b).programs;L!==void 0&&(L.forEach(function(O){pe.releaseProgram(O)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,O,z,N,le){L===null&&(L=ge);const me=N.isMesh&&N.matrixWorld.determinant()<0,ye=Oo(b,L,O,z,N);fe.setMaterial(z,me);let be=O.index,Ue=1;if(z.wireframe===!0){if(be=Z.getWireframeAttribute(O),be===void 0)return;Ue=2}const Re=O.drawRange,Ce=O.attributes.position;let et=Re.start*Ue,Et=(Re.start+Re.count)*Ue;le!==null&&(et=Math.max(et,le.start*Ue),Et=Math.min(Et,(le.start+le.count)*Ue)),be!==null?(et=Math.max(et,0),Et=Math.min(Et,be.count)):Ce!=null&&(et=Math.max(et,0),Et=Math.min(Et,Ce.count));const at=Et-et;if(at<0||at===1/0)return;Pe.setup(N,z,ye,O,be);let Vt,Ke=Ae;if(be!==null&&(Vt=Q.get(be),Ke=_e,Ke.setIndex(Vt)),N.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*Ne()),Ke.setMode(U.LINES)):Ke.setMode(U.TRIANGLES);else if(N.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),fe.setLineWidth(Oe*Ne()),N.isLineSegments?Ke.setMode(U.LINES):N.isLineLoop?Ke.setMode(U.LINE_LOOP):Ke.setMode(U.LINE_STRIP)}else N.isPoints?Ke.setMode(U.POINTS):N.isSprite&&Ke.setMode(U.TRIANGLES);if(N.isBatchedMesh)Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Ke.renderInstances(et,at,N.count);else if(O.isInstancedBufferGeometry){const Oe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ar=Math.min(O.instanceCount,Oe);Ke.renderInstances(et,at,ar)}else Ke.render(et,at)};function Xe(b,L,O){b.transparent===!0&&b.side===Ft&&b.forceSinglePass===!1?(b.side=yt,b.needsUpdate=!0,yi(b,L,O),b.side=cn,b.needsUpdate=!0,yi(b,L,O),b.side=Ft):yi(b,L,O)}this.compile=function(b,L,O=null){O===null&&(O=b),f=Me.get(O),f.init(),g.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==O&&b.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(_._useLegacyLights);const z=new Set;return b.traverse(function(N){const le=N.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const ye=le[me];Xe(ye,O,N),z.add(ye)}else Xe(le,O,N),z.add(le)}),g.pop(),f=null,z},this.compileAsync=function(b,L,O=null){const z=this.compile(b,L,O);return new Promise(N=>{function le(){if(z.forEach(function(me){Ie.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){N(b);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let qe=null;function st(b){qe&&qe(b)}function pt(){mt.stop()}function Ye(){mt.start()}const mt=new bo;mt.setAnimationLoop(st),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(b){qe=b,Fe.setAnimationLoop(b),b===null?mt.stop():mt.start()},Fe.addEventListener("sessionstart",pt),Fe.addEventListener("sessionend",Ye),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(L),L=Fe.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,L,T),f=Me.get(b,g.length),f.init(),g.push(f),de.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G.setFromProjectionMatrix(de),re=this.localClippingEnabled,$=De.init(this.clippingPlanes,re),x=ce.get(b,u.length),x.init(),u.push(x),zt(b,L,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(H,V),this.info.render.frame++,$===!0&&De.beginShadows();const O=f.state.shadowsArray;if(j.render(O,b,L),$===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(x,b),f.setupLights(_._useLegacyLights),L.isArrayCamera){const z=L.cameras;for(let N=0,le=z.length;N<le;N++){const me=z[N];ps(x,b,me,me.viewport)}}else ps(x,b,L);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,L),Pe.resetDefaultState(),D=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function zt(b,L,O,z){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){z&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const me=ee.update(b),ye=b.material;ye.visible&&x.push(b,me,ye,O,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const me=ee.update(b),ye=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Te.copy(me.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(ye)){const be=me.groups;for(let Ue=0,Re=be.length;Ue<Re;Ue++){const Ce=be[Ue],et=ye[Ce.materialIndex];et&&et.visible&&x.push(b,me,et,O,Te.z,Ce)}}else ye.visible&&x.push(b,me,ye,O,Te.z,null)}}const le=b.children;for(let me=0,ye=le.length;me<ye;me++)zt(le[me],L,O,z)}function ps(b,L,O,z){const N=b.opaque,le=b.transmissive,me=b.transparent;f.setupLightsView(O),$===!0&&De.setGlobalState(_.clippingPlanes,O),le.length>0&&Fo(N,le,L,O),z&&fe.viewport(w.copy(z)),N.length>0&&xi(N,L,O),le.length>0&&xi(le,L,O),me.length>0&&xi(me,L,O),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Fo(b,L,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const le=we.isWebGL2;he===null&&(he=new Tn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?pi:ln,minFilter:fi,samples:le?4:0})),_.getDrawingBufferSize(Se),le?he.setSize(Se.x,Se.y):he.setSize(ts(Se.x),ts(Se.y));const me=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(te),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const ye=_.toneMapping;_.toneMapping=on,xi(b,O,z),A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he);let be=!1;for(let Ue=0,Re=L.length;Ue<Re;Ue++){const Ce=L[Ue],et=Ce.object,Et=Ce.geometry,at=Ce.material,Vt=Ce.group;if(at.side===Ft&&et.layers.test(z.layers)){const Ke=at.side;at.side=yt,at.needsUpdate=!0,ms(et,O,z,Et,at,Vt),at.side=Ke,at.needsUpdate=!0,be=!0}}be===!0&&(A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he)),_.setRenderTarget(me),_.setClearColor(te,P),_.toneMapping=ye}function xi(b,L,O){const z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,le=b.length;N<le;N++){const me=b[N],ye=me.object,be=me.geometry,Ue=z===null?me.material:z,Re=me.group;ye.layers.test(O.layers)&&ms(ye,L,O,be,Ue,Re)}}function ms(b,L,O,z,N,le){b.onBeforeRender(_,L,O,z,N,le),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,L,O,z,b,le),N.transparent===!0&&N.side===Ft&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,_.renderBufferDirect(O,L,z,N,b,le),N.side=cn,N.needsUpdate=!0,_.renderBufferDirect(O,L,z,N,b,le),N.side=Ft):_.renderBufferDirect(O,L,z,N,b,le),b.onAfterRender(_,L,O,z,N,le)}function yi(b,L,O){L.isScene!==!0&&(L=ge);const z=Ie.get(b),N=f.state.lights,le=f.state.shadowsArray,me=N.state.version,ye=pe.getParameters(b,N.state,le,L,O),be=pe.getProgramCacheKey(ye);let Ue=z.programs;z.environment=b.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(b.isMeshStandardMaterial?F:E).get(b.envMap||z.environment),Ue===void 0&&(b.addEventListener("dispose",ae),Ue=new Map,z.programs=Ue);let Re=Ue.get(be);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===me)return gs(b,ye),Re}else ye.uniforms=pe.getUniforms(b),b.onBuild(O,ye,_),b.onBeforeCompile(ye,_),Re=pe.acquireProgram(ye,be),Ue.set(be,Re),z.uniforms=ye.uniforms;const Ce=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=De.uniform),gs(b,ye),z.needsLights=ko(b),z.lightsStateVersion=me,z.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function _s(b){if(b.uniformsList===null){const L=b.currentProgram.getUniforms();b.uniformsList=qi.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function gs(b,L){const O=Ie.get(b);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Oo(b,L,O,z,N){L.isScene!==!0&&(L=ge),A.resetTextureUnits();const le=L.fog,me=z.isMeshStandardMaterial?L.environment:null,ye=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zt,be=(z.isMeshStandardMaterial?F:E).get(z.envMap||me),Ue=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!O.morphAttributes.position,et=!!O.morphAttributes.normal,Et=!!O.morphAttributes.color;let at=on;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=_.toneMapping);const Vt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=Vt!==void 0?Vt.length:0,Oe=Ie.get(z),ar=f.state.lights;if($===!0&&(re===!0||b!==M)){const At=b===M&&z.id===D;De.setState(z,b,At)}let Qe=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ar.state.version||Oe.outputColorSpace!==ye||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||Oe.envMap!==be||z.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==De.numPlanes||Oe.numIntersection!==De.numIntersection)||Oe.vertexAlphas!==Ue||Oe.vertexTangents!==Re||Oe.morphTargets!==Ce||Oe.morphNormals!==et||Oe.morphColors!==Et||Oe.toneMapping!==at||we.isWebGL2===!0&&Oe.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,Oe.__version=z.version);let un=Oe.currentProgram;Qe===!0&&(un=yi(z,L,N));let vs=!1,ni=!1,or=!1;const dt=un.getUniforms(),dn=Oe.uniforms;if(fe.useProgram(un.program)&&(vs=!0,ni=!0,or=!0),z.id!==D&&(D=z.id,ni=!0),vs||M!==b){dt.setValue(U,"projectionMatrix",b.projectionMatrix),dt.setValue(U,"viewMatrix",b.matrixWorldInverse);const At=dt.map.cameraPosition;At!==void 0&&At.setValue(U,Te.setFromMatrixPosition(b.matrixWorld)),we.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,ni=!0,or=!0)}if(N.isSkinnedMesh){dt.setOptional(U,N,"bindMatrix"),dt.setOptional(U,N,"bindMatrixInverse");const At=N.skeleton;At&&(we.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),dt.setValue(U,"boneTexture",At.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(dt.setOptional(U,N,"batchingTexture"),dt.setValue(U,"batchingTexture",N._matricesTexture,A));const lr=O.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&we.isWebGL2===!0)&&ke.update(N,O,un),(ni||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,dt.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(dn.envMap.value=be,dn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ni&&(dt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&Bo(dn,or),le&&z.fog===!0&&oe.refreshFogUniforms(dn,le),oe.refreshMaterialUniforms(dn,z,Y,W,he),qi.upload(U,_s(Oe),dn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qi.upload(U,_s(Oe),dn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(U,"center",N.center),dt.setValue(U,"modelViewMatrix",N.modelViewMatrix),dt.setValue(U,"normalMatrix",N.normalMatrix),dt.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const At=z.uniformsGroups;for(let cr=0,zo=At.length;cr<zo;cr++)if(we.isWebGL2){const xs=At[cr];Ge.update(xs,un),Ge.bind(xs,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function Bo(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function ko(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,L,O){Ie.get(b.texture).__webglTexture=L,Ie.get(b.depthTexture).__webglTexture=O;const z=Ie.get(b);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,L){const O=Ie.get(b);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,O=0){T=b,R=L,S=O;let z=!0,N=null,le=!1,me=!1;if(b){const be=Ie.get(b);be.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):be.__webglFramebuffer===void 0?A.setupRenderTarget(b):be.__hasExternalTextures&&A.rebindTextures(b,Ie.get(b.texture).__webglTexture,Ie.get(b.depthTexture).__webglTexture);const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Re=Ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?N=Re[L][O]:N=Re[L],le=!0):we.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?N=Ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[O]:N=Re,w.copy(b.viewport),B.copy(b.scissor),X=b.scissorTest}else w.copy(q).multiplyScalar(Y).floor(),B.copy(J).multiplyScalar(Y).floor(),X=K;if(fe.bindFramebuffer(U.FRAMEBUFFER,N)&&we.drawBuffers&&z&&fe.drawBuffers(b,N),fe.viewport(w),fe.scissor(B),fe.setScissorTest(X),le){const be=Ie.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,O)}else if(me){const be=Ie.get(b.texture),Ue=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,O||0,Ue)}D=-1},this.readRenderTargetPixels=function(b,L,O,z,N,le,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){fe.bindFramebuffer(U.FRAMEBUFFER,ye);try{const be=b.texture,Ue=be.format,Re=be.type;if(Ue!==Bt&&ue.convert(Ue)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Re===pi&&(ve.has("EXT_color_buffer_half_float")||we.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Re!==ln&&ue.convert(Re)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===sn&&(we.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-z&&O>=0&&O<=b.height-N&&U.readPixels(L,O,z,N,ue.convert(Ue),ue.convert(Re),le)}finally{const be=T!==null?Ie.get(T).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(b,L,O=0){const z=Math.pow(2,-O),N=Math.floor(L.image.width*z),le=Math.floor(L.image.height*z);A.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,b.x,b.y,N,le),fe.unbindTexture()},this.copyTextureToTexture=function(b,L,O,z=0){const N=L.image.width,le=L.image.height,me=ue.convert(O.format),ye=ue.convert(O.type);A.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,b.x,b.y,N,le,me,ye,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,b.x,b.y,L.mipmaps[0].width,L.mipmaps[0].height,me,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,b.x,b.y,me,ye,L.image),z===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(b,L,O,z,N=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=b.max.x-b.min.x+1,me=b.max.y-b.min.y+1,ye=b.max.z-b.min.z+1,be=ue.convert(z.format),Ue=ue.convert(z.type);let Re;if(z.isData3DTexture)A.setTexture3D(z,0),Re=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)A.setTexture2DArray(z,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Ce=U.getParameter(U.UNPACK_ROW_LENGTH),et=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Et=U.getParameter(U.UNPACK_SKIP_PIXELS),at=U.getParameter(U.UNPACK_SKIP_ROWS),Vt=U.getParameter(U.UNPACK_SKIP_IMAGES),Ke=O.isCompressedTexture?O.mipmaps[N]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ke.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Re,N,L.x,L.y,L.z,le,me,ye,be,Ue,Ke.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Re,N,L.x,L.y,L.z,le,me,ye,be,Ke.data)):U.texSubImage3D(Re,N,L.x,L.y,L.z,le,me,ye,be,Ue,Ke),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),U.pixelStorei(U.UNPACK_SKIP_ROWS,at),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt),N===0&&z.generateMipmaps&&U.generateMipmap(Re),fe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){R=0,S=0,T=null,fe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===os?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===nr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Sn:uo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sn?lt:Zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jf extends Lo{}jf.prototype.isWebGL1Renderer=!0;class Kf extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class za extends kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wn=new Ze,Ga=new Ze,Vi=[],Ha=new wn,Zf=new Ze,li=new Ht,ci=new ei;class Gr extends Ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Zf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wn),Ha.copy(e.boundingBox).applyMatrix4(Wn),this.boundingBox.union(Ha)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wn),ci.copy(e.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ci.copy(this.boundingSphere),ci.applyMatrix4(n),e.ray.intersectsSphere(ci)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wn),Ga.multiplyMatrices(n,Wn),li.matrixWorld=Ga,li.raycast(e,Vi);for(let o=0,a=Vi.length;o<a;o++){const l=Vi[o];l.instanceId=s,l.object=this,t.push(l)}Vi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new I,Wa=new I,Xa=new Ze,Hr=new ls,Wi=new ei;class Jf extends Mt{constructor(e=new Lt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Va.fromBufferAttribute(t,r-1),Wa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Wi.radius+=s,e.ray.intersectsSphere(Wi)===!1)return;Xa.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(Xa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,d=new I,p=new I,h=new I,m=this.isLineSegments?2:1,y=n.index,f=n.attributes.position;if(y!==null){const u=Math.max(0,o.start),g=Math.min(y.count,o.start+o.count);for(let _=u,v=g-1;_<v;_+=m){const R=y.getX(_),S=y.getX(_+1);if(c.fromBufferAttribute(f,R),d.fromBufferAttribute(f,S),Hr.distanceSqToSegment(c,d,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=u,v=g-1;_<v;_+=m){if(c.fromBufferAttribute(f,_),d.fromBufferAttribute(f,_+1),Hr.distanceSqToSegment(c,d,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const qa=new I,Ya=new I;class is extends Jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qa.fromBufferAttribute(t,r),Ya.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qa.distanceTo(Ya);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class er extends Lt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let p=e;const h=(t-e)/r,m=new I,y=new ze;for(let x=0;x<=r;x++){for(let f=0;f<=n;f++){const u=s+f/n*o;m.x=p*Math.cos(u),m.y=p*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),y.x=(m.x/t+1)/2,y.y=(m.y/t+1)/2,d.push(y.x,y.y)}p+=h}for(let x=0;x<r;x++){const f=x*(n+1);for(let u=0;u<n;u++){const g=u+f,_=g,v=g+n+1,R=g+n+2,S=g+1;a.push(_,v,S),a.push(v,R,S)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hs extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],p=new I,h=new I,m=[],y=[],x=[],f=[];for(let u=0;u<=n;u++){const g=[],_=u/n;let v=0;u===0&&o===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const S=R/t;p.x=-e*Math.cos(r+S*s)*Math.sin(o+_*a),p.y=e*Math.cos(o+_*a),p.z=e*Math.sin(r+S*s)*Math.sin(o+_*a),y.push(p.x,p.y,p.z),h.copy(p).normalize(),x.push(h.x,h.y,h.z),f.push(S+v,1-_),g.push(c++)}d.push(g)}for(let u=0;u<n;u++)for(let g=0;g<t;g++){const _=d[u][g+1],v=d[u][g],R=d[u+1][g],S=d[u+1][g+1];(u!==0||o>0)&&m.push(_,v,S),(u!==n-1||l<Math.PI)&&m.push(v,R,S)}this.setIndex(m),this.setAttribute("position",new ut(y,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Io{constructor(e,t,n=0,r=1/0){this.ray=new ls(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return rs(e,this,n,t),n.sort($a),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)rs(e[r],this,n,t);return n.sort($a),n}}function $a(i,e){return i.distance-e.distance}function rs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)rs(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ss);function Qf(){const i=new Ct(35,1,1,5e3);i.position.set(0,0,1100),i.lookAt(0,0,0);let e=0,t=0,n=1,r=0,s=0,o=1,a=!1,l=0,c=0,d=0,p=0;const h=.005,m=new Map;let y=0,x=1;const f=v=>{if(m.set(v.pointerId,{x:v.clientX,y:v.clientY}),m.size===1)a=!0,l=v.clientX,c=v.clientY;else if(m.size===2){a=!1;const R=Array.from(m.values()),S=R[0].x-R[1].x,T=R[0].y-R[1].y;y=Math.hypot(S,T),x=o}},u=v=>{m.delete(v.pointerId),m.size<2&&(y=0),m.size===0&&(a=!1)},g=v=>{if(m.has(v.pointerId)&&m.set(v.pointerId,{x:v.clientX,y:v.clientY}),m.size>=2&&y>0){const R=Array.from(m.values()),S=R[0].x-R[1].x,T=R[0].y-R[1].y,M=Math.hypot(S,T)/y;o=Math.max(.5,Math.min(2.5,x*M));return}if(a){const R=v.clientX-l,S=v.clientY-c;l=v.clientX,c=v.clientY,r+=R*.005,s=Math.max(-.6,Math.min(.6,s+S*.003))}else d=(v.clientX/window.innerWidth-.5)*.06,p=(v.clientY/window.innerHeight-.5)*.04},_=v=>{v.preventDefault(),o=Math.max(.5,Math.min(2.5,o*(1-v.deltaY*8e-4)))};return{camera:i,update(v){e+=(r-e)*.08,t+=(s-t)*.08,n+=(o-n)*.08,!a&&m.size===0&&(r+=h*v);const R=1100/n,S=e+d,T=t+p;i.position.x=R*Math.sin(S)*Math.cos(T),i.position.y=R*Math.sin(T),i.position.z=R*Math.cos(S)*Math.cos(T),i.lookAt(0,0,0)},attach(v){return v.addEventListener("pointerdown",f),v.addEventListener("pointerup",u),v.addEventListener("pointercancel",u),v.addEventListener("pointerleave",u),v.addEventListener("pointermove",g),v.addEventListener("wheel",_,{passive:!1}),()=>{v.removeEventListener("pointerdown",f),v.removeEventListener("pointerup",u),v.removeEventListener("pointercancel",u),v.removeEventListener("pointerleave",u),v.removeEventListener("pointermove",g),v.removeEventListener("wheel",_)}}}}function fs(i){let e=i>>>0;const t=()=>(e=e*1664525+1013904223>>>0,(e>>>0)/4294967296);return t.gauss=()=>{let n=0,r=0;for(;!n;)n=t();for(;!r;)r=t();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)},t}const bn=[{id:"vaal",name:"VAAL",tier:1,nodeCount:140,lang:["python"],category:"ai",blurb:"AI coding agent CLI. Routes prompts across local Ollama models and cloud LLMs (Claude, OpenAI). Tool-use orchestration, install scaffolding, named for the PoE Vaal Orb.",githubUrl:"https://github.com/0xE666/vaal",pinIds:["vaal_route","vaal_tooluse"]},{id:"winint",name:"WINDOWS-INTERNALS",tier:1,nodeCount:140,lang:["cpp","c"],category:"security",blurb:"Educational whitehat security research: Windows process internals, PE-format manual mapping, kernel-driver dispatch, signature scanning, IAT patching. Documents the techniques the Windows AC/EDR landscape was built to detect.",pinIds:["manual_map","sigscan","ioctl_dispatch","iat_patch"]},{id:"soundmap",name:"SOUNDMAP-API",tier:2,nodeCount:75,lang:["python"],category:"security",blurb:"Python wrapper for the Soundmap iOS app, reverse-engineered from observed traffic. Replays signed mobile API requests for automated trading and song collection.",githubUrl:"https://github.com/0xE666/Soundmap-API",pinIds:["soundmap_sign","soundmap_request"]},{id:"poe_null",name:"POE_NULL",tier:2,nodeCount:70,lang:["csharp"],category:"game-tool",blurb:"C# Path of Exile 2 game-state visualizer. Real-time scene reconstruction and item-state diffing.",githubUrl:"https://github.com/0xE666/poe_null",pinIds:["poe_null_scene"]},{id:"trade_api",name:"POE-TRADE-API",tier:2,nodeCount:70,lang:["python"],category:"game-tool",blurb:"Python client for the Path of Exile trade API. Token-bucket rate limiter, session pooling, paginated query streaming.",githubUrl:"https://github.com/0xE666/path-of-exile-trade-api",pinIds:["trade_limit"]},{id:"poe_watcher",name:"POE-WATCHER",tier:2,nodeCount:65,lang:["python"],category:"game-tool",blurb:"Lightweight Windows tray utility. Detects which PoE process is foreground (1 vs 2) and launches the correct trading tool. <1% CPU, ~20MB RAM.",githubUrl:"https://github.com/0xE666/path-of-exile-watcher",pinIds:["poe_watcher_detect"]},{id:"minabot",name:"MINABOT",tier:3,nodeCount:45,lang:["python"],category:"bot",blurb:"Multi-purpose Discord bot. Cogs-based plugin architecture, async DB layer, scheduled scraping tasks.",githubUrl:"https://github.com/0xE666/minaBot",pinIds:["minabot_cog"]},{id:"pentest",name:"PENTEST-FRAMEWORK",tier:3,nodeCount:45,lang:["python"],category:"security",blurb:"Modular pentest framework. Pluggable payloads, wordlists, plugins, and report renderer.",pinIds:["pentest_plugin"]},{id:"crypto",name:"ALGO-TRADING",tier:3,nodeCount:45,lang:["python"],category:"data",blurb:"Algorithmic crypto trading toolkit. Alpha generation, backtesting engine, dashboard.",pinIds:["crypto_backtest"]},{id:"poe_ml",name:"POE-ML",tier:3,nodeCount:40,lang:["python"],category:"data",blurb:"ML training pipeline for Path of Exile data — items, prices, build classification.",pinIds:["poe_ml_train"]},{id:"assistant",name:"ASSISTANT",tier:3,nodeCount:35,lang:["python"],category:"ai",blurb:"Personal AI assistant scaffolding (full description filled in at impl time after deeper repo inspection).",pinIds:[]},{id:"govdeals",name:"GOVDEALS",tier:4,nodeCount:22,lang:["python"],category:"web",blurb:"Government auction (govdeals.com) scraper and watch-list.",githubUrl:"https://github.com/0xE666/govdeals",pinIds:[]},{id:"dndb",name:"DNDBEYOND-SCRAPER",tier:4,nodeCount:22,lang:["python"],category:"web",blurb:"D&D Beyond data scraper. Authenticated session reuse, rate-aware pagination.",githubUrl:"https://github.com/0xE666/dndbeyond-scraper",pinIds:[]},{id:"espotify",name:"ESPOTIFY",tier:4,nodeCount:22,lang:["python"],category:"misc",blurb:"Controller-driven Spotify control. Pause / next / volume from a PS4/Xbox pad without alt-tabbing out of games.",githubUrl:"https://github.com/0xE666/eSpotify",pinIds:[]},{id:"anime",name:"ANIME.E-E.LOL",tier:4,nodeCount:22,lang:["php","js"],category:"web",blurb:"Anime streaming site. PHP backend with embed-proxy layer, scraping, history tracking.",pinIds:[]},{id:"movies",name:"MOVIES.E-E.LOL",tier:4,nodeCount:22,lang:["php","js"],category:"web",blurb:"Movies streaming site. Companion to anime.e-e.lol.",pinIds:[]},{id:"vergil",name:"VERGIL",tier:4,nodeCount:18,lang:["python"],category:"bot",blurb:"Discord bot for misterdrprof's colorful traders server.",githubUrl:"https://github.com/0xE666/vergil",pinIds:[]},{id:"rlbot",name:"RLBOT",tier:4,nodeCount:18,lang:["python"],category:"bot",blurb:"Discord bot for Rocket League stats.",githubUrl:"https://github.com/0xE666/RLBot",pinIds:[]},{id:"rocketmem",name:"ROCKETMEMORY",tier:4,nodeCount:20,lang:["python"],category:"security",blurb:"Educational memory-edit experiment: locating and modifying Rocket League camera-FoV/angle/distance pointers via signature scanning, beyond the in-game UI limits.",githubUrl:"https://github.com/0xE666/rocketMemory",pinIds:[]},{id:"tarkov_market",name:"TARKOV-MARKET-API",tier:4,nodeCount:18,lang:["python"],category:"game-tool",blurb:"Wrapper for tarkov-market.com flea/item endpoints.",githubUrl:"https://github.com/0xE666/Tarkov-Market-API-Wrapper",pinIds:[]},{id:"nep",name:"NEP",tier:4,nodeCount:16,lang:["python"],category:"data",blurb:"Audio fingerprint / modification experiment.",pinIds:[]},{id:"leetcode",name:"LEETCODE",tier:5,nodeCount:8,lang:["python"],category:"misc",blurb:"Solved problem archive.",githubUrl:"https://github.com/0xE666/leetcode",pinIds:[]}],ep=850,tp=250,Xi=2500,Do=1600,Uo=900;function np(i,e){const t=[[800,460],[1180,240],[320,280],[1300,720],[220,700],[1430,200],[560,720],[1040,760],[200,460],[1500,460],[720,140],[120,180],[880,800],[1060,140],[400,140],[60,360],[1540,580],[60,580],[1540,320],[340,800],[1180,800],[120,800],[1540,100]],n=[...i].sort((s,o)=>s.tier-o.tier||o.nodeCount-s.nodeCount),r=[];for(let s=0;s<n.length;s++){const o=n[s],[a,l]=t[s]??[Do/2,Uo/2],c=a+(e()-.5)*30,d=l+(e()-.5)*30;r.push({id:o.id,project:o,x:Math.max(61,Math.min(1539,c)),y:Math.max(61,Math.min(839,d)),r:Math.max(45,o.nodeCount*1.6),nodes:0})}return r}function ip(i,e){const t=i.reduce((r,s)=>r+s.project.nodeCount,0),n=t>e?e/t:1;for(const r of i)r.nodes=Math.max(4,Math.round(r.project.nodeCount*n))}function rp(i,e,t=1){const n=fs(e),r=np(i,n);ip(r,ep);const s=[];for(const a of r){const l=Math.max(4,Math.round(a.nodes*.78*t)),c=Math.max(0,Math.round((a.nodes-Math.round(a.nodes*.78))*t));for(let d=0;d<l;d++){const p=n(),h=a.r*.55*Math.pow(p,.55),m=n()*Math.PI*2;s.push({x:a.x+Math.cos(m)*h+n.gauss()*6,y:a.y+Math.sin(m)*h+n.gauss()*6,z:n.gauss()*18,knotId:a.id,depth:.6+n()*.4})}for(let d=0;d<c;d++){const p=n()*Math.PI*2,h=a.r*(.78+n()*.34);s.push({x:a.x+Math.cos(p)*h,y:a.y+Math.sin(p)*h,z:n.gauss()*12,knotId:a.id,depth:.25+n()*.45})}}const o=Math.round(tp*t);for(let a=0;a<o;a++)s.push({x:60+n()*(Do-120),y:60+n()*(Uo-120),z:n.gauss()*30,knotId:null,depth:n()*.5});return{knots:r,nodes:s}}const sp=1600,ap=900,op=(i,e,t=0)=>new I(i-sp/2,-(e-ap/2),t);function ja(i,e,t,n=28){const r=[];for(let o=1;o<8;o++){const a=o/8*Math.PI,l=Math.sin(a),c=Math.cos(a);for(let d=0;d<n;d++){const p=d/n*Math.PI*2,h=(d+1)/n*Math.PI*2;r.push(Math.cos(p)*l*i,c*e,Math.sin(p)*l*t,Math.cos(h)*l*i,c*e,Math.sin(h)*l*t)}}for(let o=0;o<8;o++){const a=o/8*Math.PI*2;for(let l=0;l<n;l++){const c=l/n*Math.PI,d=(l+1)/n*Math.PI;r.push(Math.cos(a)*Math.sin(c)*i,Math.cos(c)*e,Math.sin(a)*Math.sin(c)*t,Math.cos(a)*Math.sin(d)*i,Math.cos(d)*e,Math.sin(a)*Math.sin(d)*t)}}const s=new Lt;return s.setAttribute("position",new ut(r,3)),s}function lp(i,e=66){const t=fs(e),n=new yn,r=[];for(const s of i){const o=new yn,a=op(s.x,s.y);o.position.copy(a);const l=Math.max(3,Math.floor(s.r/35)),c=.55;for(let p=0;p<l;p++){const h=s.r*(.55+p*.1),m=.45+t()*.55,y=h,x=h*m,f=h*(.55+t()*.5),u=ja(y,x,f,24),g=new Qi({color:16777215,transparent:!0,opacity:Math.max(.1,c-p*.06)}),_=new is(u,g);_.rotation.x=t()*Math.PI,_.rotation.y=t()*Math.PI,_.rotation.z=t()*Math.PI,o.add(_),r.push({mesh:_,vel:new I((t()-.5)*.04,(t()-.5)*.05,(t()-.5)*.03)})}const d=s.r*.22;for(let p=0;p<5;p++){const h=ja(d,d*.4,d,16),m=new Qi({color:16777215,transparent:!0,opacity:.7}),y=new is(h,m);y.rotation.set(t()*Math.PI,t()*Math.PI,p*.6),o.add(y),r.push({mesh:y,vel:new I((t()-.5)*.08,(t()-.5)*.08,(t()-.5)*.05)})}n.add(o)}return{group:n,spins:r}}function cp(i,e){for(const t of i)t.mesh.rotation.x+=t.vel.x*e,t.mesh.rotation.y+=t.vel.y*e,t.mesh.rotation.z+=t.vel.z*e}const up=(i,e)=>{const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return t*t+n*n+r*r};function dp(i,e){const t=fs(e),n=i.nodes,r=Math.floor(Xi*.6),s=Math.floor(Xi*.25),o=Xi-r-s,a=[],l=[],c=[],d=new Map;for(let f=0;f<n.length;f++){const u=n[f].knotId;u&&(d.has(u)||d.set(u,[]),d.get(u).push(f))}e:for(const f of d.values())for(const u of f){const g=f.filter(_=>_!==u).map(_=>({j:_,d:up(n[u],n[_])})).sort((_,v)=>_.d-v.d).slice(0,6+Math.floor(t()*4));for(const _ of g){if(a.length>=r)break e;a.push({a:u,b:_.j,layer:"inner",weight:1})}}const p=new Map,h=new Map;for(const f of i.knots){const u=f.project.category;p.has(u)||p.set(u,[]),p.get(u).push(f.id);for(const g of f.project.lang)h.has(g)||h.set(g,[]),h.get(g).push(f.id)}const m=new Set,y=(f,u)=>{if(f===u)return;const g=f<u?`${f}|${u}`:`${u}|${f}`;m.add(g)};for(const f of p.values())for(let u=0;u<f.length;u++)for(let g=u+1;g<f.length;g++)y(f[u],f[g]);for(const f of h.values())for(let u=0;u<f.length;u++)for(let g=u+1;g<f.length;g++)y(f[u],f[g]);for(const f of m){if(l.length>=s)break;const[u,g]=f.split("|"),_=d.get(u)??[],v=d.get(g)??[];if(!_.length||!v.length)continue;const R=4+Math.floor(t()*4);for(let S=0;S<R&&!(l.length>=s);S++)l.push({a:_[Math.floor(t()*_.length)],b:v[Math.floor(t()*v.length)],layer:"bridge",weight:.5})}const x=[];for(let f=0;f<n.length;f++)n[f].knotId===null&&x.push(f);for(let f=0;f<o;f++){const u=x[Math.floor(t()*x.length)],g=x[Math.floor(t()*x.length)];u!==g&&c.push({a:u,b:g,layer:"field",weight:.3})}return[...a,...l,...c].slice(0,Xi)}const Ka=1600,Za=900;function hp(i,e){const t={inner:[],bridge:[],field:[]};for(const l of e){const c=i.nodes[l.a],d=i.nodes[l.b];t[l.layer].push(c.x-Ka/2,-(c.y-Za/2),c.z,d.x-Ka/2,-(d.y-Za/2),d.z)}const n=(l,c)=>{const d=new Lt;return d.setAttribute("position",new ut(l,3)),new is(d,new Qi({color:16777215,transparent:!0,opacity:c}))},r=n(t.inner,.55),s=n(t.bridge,.32),o=n(t.field,.1),a=new yn;return a.add(o,s,r),{inner:r,bridge:s,field:o,group:a}}const fp=`# crypto_backtest.py — vectorized backtest loop with signal confluence, PnL, and drawdown
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
`,pp=`// iat_patch.cpp — kernel-assisted IAT resolution over IMAGE_IMPORT_DESCRIPTOR chain
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
`,mp=`// ioctl_dispatch.c — IRP_MJ_DEVICE_CONTROL dispatch table and completion routine
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
`,_p=`// manual_map.cpp — usermode manual mapper (IAT resolution + relocation + section copy)
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
`,gp=`# minabot_cog.py — economy cog: SQLite-backed balance, daily reward, and shop with role assignment
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
`,vp=`# pentest_plugin.py — plugin engine: YAML-template + Python module discovery and dispatch
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
`,xp=`# poe_ml_train.py — behavioral cloning training loop with FP16 mixed-precision + grad accumulation
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
`,yp=`// poe_null_scene.cs — GGPK bundle service: diff-based file patching over loose bundles
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
`,Mp=`# poe_watcher_detect.py — foreground-window detection with PoE1 vs PoE2 disambiguation
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
`,Ep=`// sigscan.cpp — kernel-mode pattern scanner with section-aware iteration
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
`,Sp=`# soundmap_request.py — authenticated request flow: trade creation, retry, and pagination
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
`,bp=`# soundmap_sign.py — Soundmap mobile API client: header construction and signing
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
`,Tp=`# trade_limit.py — token-bucket rate limiter with sliding-window backoff
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
`,Ap=`# vaal_route.py — multi-provider LLM router with per-provider format normalisation
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
`,wp=`# vaal_tooluse.py — streaming tool-use loop with permission gating and cancellation
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
`,sr=[{id:"manual_map",projectId:"winint",file:"manual_map.cpp",lang:"cpp",lineStart:218,lineEnd:246,label:"iat-walk",caption:"IAT resolution: walk IMAGE_IMPORT_DESCRIPTOR, resolve ordinal+named thunks, patch via WriteProcessMemory"},{id:"sigscan",projectId:"winint",file:"sigscan.cpp",lang:"cpp",lineStart:88,lineEnd:122,label:"simd-scan",caption:"SIMD pattern scan with mask construction"},{id:"ioctl_dispatch",projectId:"winint",file:"ioctl_dispatch.c",lang:"c",lineStart:301,lineEnd:348,label:"irp-route",caption:"IRP_MJ dispatch table and IRP completion routine"},{id:"iat_patch",projectId:"winint",file:"iat_patch.cpp",lang:"cpp",lineStart:142,lineEnd:178,label:"iat-rewrite",caption:"Cross-process IAT rewrite with relocation table fixup"},{id:"soundmap_sign",projectId:"soundmap",file:"soundmap_sign.py",lang:"python",lineStart:42,lineEnd:78,label:"hmac-chain",caption:"Multi-stage HMAC-chain that signs Soundmap mobile API requests"},{id:"soundmap_request",projectId:"soundmap",file:"soundmap_request.py",lang:"python",lineStart:88,lineEnd:124,label:"request-flow",caption:"Authenticated request flow with retry + token refresh"},{id:"poe_null_scene",projectId:"poe_null",file:"poe_null_scene.cs",lang:"csharp",lineStart:174,lineEnd:218,label:"game-state",caption:"Real-time game-state diff over the PoE2 ECS"},{id:"trade_limit",projectId:"trade_api",file:"trade_limit.py",lang:"python",lineStart:118,lineEnd:156,label:"token-bucket",caption:"Token-bucket limiter with sliding-window backoff"},{id:"poe_watcher_detect",projectId:"poe_watcher",file:"poe_watcher_detect.py",lang:"python",lineStart:33,lineEnd:68,label:"foreground-detect",caption:"Foreground-window detection with PoE1 vs PoE2 disambiguation"},{id:"vaal_route",projectId:"vaal",file:"vaal_route.py",lang:"python",lineStart:60,lineEnd:102,label:"model-routing",caption:"Model-router across Ollama and cloud providers with tool-use fan-out"},{id:"vaal_tooluse",projectId:"vaal",file:"vaal_tooluse.py",lang:"python",lineStart:140,lineEnd:176,label:"tool-use",caption:"Streaming tool-use loop with cancellation"},{id:"minabot_cog",projectId:"minabot",file:"minabot_cog.py",lang:"python",lineStart:212,lineEnd:254,label:"cog-loader",caption:"Hot-reloading cog plugin loader"},{id:"pentest_plugin",projectId:"pentest",file:"pentest_plugin.py",lang:"python",lineStart:88,lineEnd:134,label:"plugin-pipeline",caption:"Plugin pipeline with payload composition"},{id:"crypto_backtest",projectId:"crypto",file:"crypto_backtest.py",lang:"python",lineStart:144,lineEnd:186,label:"backtest-loop",caption:"Vectorized backtest with PnL and drawdown reporting"},{id:"poe_ml_train",projectId:"poe_ml",file:"poe_ml_train.py",lang:"python",lineStart:60,lineEnd:96,label:"train-loop",caption:"Training loop with mixed-precision + grad accumulation"}],Rp=Object.assign({"../snippets/crypto_backtest.py":fp,"../snippets/iat_patch.cpp":pp,"../snippets/ioctl_dispatch.c":mp,"../snippets/manual_map.cpp":_p,"../snippets/minabot_cog.py":gp,"../snippets/pentest_plugin.py":vp,"../snippets/poe_ml_train.py":xp,"../snippets/poe_null_scene.cs":yp,"../snippets/poe_watcher_detect.py":Mp,"../snippets/sigscan.cpp":Ep,"../snippets/soundmap_request.py":Sp,"../snippets/soundmap_sign.py":bp,"../snippets/trade_limit.py":Tp,"../snippets/vaal_route.py":Ap,"../snippets/vaal_tooluse.py":wp});function Cp(i){const e=Object.entries(Rp).find(([t])=>t.endsWith("/"+i));return e?e[1]:null}const Vr=1600,Wr=900,Pp=6,Lp=10,Ip=10.6,Xr=10414591;function Dp(i){const e=new Map;for(const s of sr)e.has(s.projectId)||e.set(s.projectId,[]),e.get(s.projectId).push(s);const t=new Map;i.nodes.forEach(s=>{s.knotId&&(t.has(s.knotId)||t.set(s.knotId,[]),t.get(s.knotId).push(s))});const n=[],r=[];for(const[s,o]of e){const a=i.knots.find(h=>h.id===s);if(!a)continue;const l=t.get(a.id)??[];if(!l.length)continue;const c=a.x-Vr/2,d=-(a.y-Wr/2),p=[...l].map(h=>{const m=h.x-Vr/2,y=-(h.y-Wr/2),x=(m-c)**2+(y-d)**2+h.z**2;return{n:h,d:x}}).sort((h,m)=>m.d-h.d).map(h=>h.n);for(let h=0;h<o.length;h++){const m=p[h%p.length];n.push(new I(m.x-Vr/2,-(m.y-Wr/2),m.z)),r.push(o[h])}}return{pos:n,anchors:r}}function Up(i){const{pos:e,anchors:t}=Dp(i),n=new hs(Pp,14,12),r=new hi({color:Xr}),s=new Gr(n,r,Math.max(1,e.length));s.frustumCulled=!1;const o=new er(Lp,Ip,40),a=new hi({color:Xr,transparent:!0,opacity:.7,side:Ft}),l=new Gr(o,a,Math.max(1,e.length));l.frustumCulled=!1;const c=new er(14,16,40),d=new hi({color:Xr,transparent:!0,opacity:.18,side:Ft}),p=new Gr(c,d,Math.max(1,e.length));p.frustumCulled=!1;const h=new Ze;for(let m=0;m<e.length;m++)h.identity(),h.setPosition(e[m]),s.setMatrixAt(m,h),l.setMatrixAt(m,h),p.setMatrixAt(m,h);return s.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,{pinDots:s,pinRings:l,pinHalos:p,pinPositions:e,pinAnchors:t}}function Np(i,e,t){const n=new Ze,r=e*.6,s=1+.18*Math.sin(e*1.4),o=1+.08*Math.sin(e*2.2);for(let a=0;a<i.pinPositions.length;a++){const l=i.pinPositions[a],c=a===t,d=(c?1.45:1)*o;n.makeScale(d,d,d),n.setPosition(l.x,l.y,l.z),i.pinDots.setMatrixAt(a,n);const p=c?1.25:1;n.makeRotationZ(r),n.scale(new I(p,p,p)),n.setPosition(l.x,l.y,l.z),i.pinRings.setMatrixAt(a,n);const h=(c?1.4:1)*s;n.makeRotationZ(-r*.5),n.scale(new I(h,h,h)),n.setPosition(l.x,l.y,l.z),i.pinHalos.setMatrixAt(a,n)}i.pinDots.instanceMatrix.needsUpdate=!0,i.pinRings.instanceMatrix.needsUpdate=!0,i.pinHalos.instanceMatrix.needsUpdate=!0}function Fp(i,e,t,n){const r=new Io,s=new ze;let o=null;const a=l=>{const c=i.getBoundingClientRect();s.x=(l.clientX-c.left)/c.width*2-1,s.y=-((l.clientY-c.top)/c.height)*2+1,r.setFromCamera(s,e);const d=r.intersectObject(t.pinDots,!1);let p=null;if(d.length){const h=d[0].instanceId;typeof h=="number"&&h<t.pinAnchors.length&&(p=h)}p!==o?(o=p,n({pin:p===null?null:t.pinAnchors[p],index:p,clientX:l.clientX,clientY:l.clientY})):p!==null&&n({pin:t.pinAnchors[p],index:p,clientX:l.clientX,clientY:l.clientY})};return i.addEventListener("pointermove",a),()=>i.removeEventListener("pointermove",a)}var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Op(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var No={exports:{}};(function(i){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function g(_){return _ instanceof l?new l(_.type,g(_.content),_.alias):Array.isArray(_)?_.map(g):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++s}),g.__id},clone:function g(_,v){v=v||{};var R,S;switch(a.util.type(_)){case"Object":if(S=a.util.objId(_),v[S])return v[S];R={},v[S]=R;for(var T in _)_.hasOwnProperty(T)&&(R[T]=g(_[T],v));return R;case"Array":return S=a.util.objId(_),v[S]?v[S]:(R=[],v[S]=R,_.forEach(function(D,M){R[M]=g(D,v)}),R);default:return _}},getLanguage:function(g){for(;g;){var _=r.exec(g.className);if(_)return _[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,_){g.className=g.className.replace(RegExp(r,"gi"),""),g.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(R){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(R.stack)||[])[1];if(g){var _=document.getElementsByTagName("script");for(var v in _)if(_[v].src==g)return _[v]}return null}},isActive:function(g,_,v){for(var R="no-"+_;g;){var S=g.classList;if(S.contains(_))return!0;if(S.contains(R))return!1;g=g.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,_){var v=a.util.clone(a.languages[g]);for(var R in _)v[R]=_[R];return v},insertBefore:function(g,_,v,R){R=R||a.languages;var S=R[g],T={};for(var D in S)if(S.hasOwnProperty(D)){if(D==_)for(var M in v)v.hasOwnProperty(M)&&(T[M]=v[M]);v.hasOwnProperty(D)||(T[D]=S[D])}var w=R[g];return R[g]=T,a.languages.DFS(a.languages,function(B,X){X===w&&B!=g&&(this[B]=T)}),T},DFS:function g(_,v,R,S){S=S||{};var T=a.util.objId;for(var D in _)if(_.hasOwnProperty(D)){v.call(_,D,_[D],R||D);var M=_[D],w=a.util.type(M);w==="Object"&&!S[T(M)]?(S[T(M)]=!0,g(M,v,null,S)):w==="Array"&&!S[T(M)]&&(S[T(M)]=!0,g(M,v,D,S))}}},plugins:{},highlightAll:function(g,_){a.highlightAllUnder(document,g,_)},highlightAllUnder:function(g,_,v){var R={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",R),R.elements=Array.prototype.slice.apply(R.container.querySelectorAll(R.selector)),a.hooks.run("before-all-elements-highlight",R);for(var S=0,T;T=R.elements[S++];)a.highlightElement(T,_===!0,R.callback)},highlightElement:function(g,_,v){var R=a.util.getLanguage(g),S=a.languages[R];a.util.setLanguage(g,R);var T=g.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(T,R);var D=g.textContent,M={element:g,language:R,grammar:S,code:D};function w(X){M.highlightedCode=X,a.hooks.run("before-insert",M),M.element.innerHTML=M.highlightedCode,a.hooks.run("after-highlight",M),a.hooks.run("complete",M),v&&v.call(M.element)}if(a.hooks.run("before-sanity-check",M),T=M.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!M.code){a.hooks.run("complete",M),v&&v.call(M.element);return}if(a.hooks.run("before-highlight",M),!M.grammar){w(a.util.encode(M.code));return}if(_&&n.Worker){var B=new Worker(a.filename);B.onmessage=function(X){w(X.data)},B.postMessage(JSON.stringify({language:M.language,code:M.code,immediateClose:!0}))}else w(a.highlight(M.code,M.grammar,M.language))},highlight:function(g,_,v){var R={code:g,grammar:_,language:v};if(a.hooks.run("before-tokenize",R),!R.grammar)throw new Error('The language "'+R.language+'" has no grammar.');return R.tokens=a.tokenize(R.code,R.grammar),a.hooks.run("after-tokenize",R),l.stringify(a.util.encode(R.tokens),R.language)},tokenize:function(g,_){var v=_.rest;if(v){for(var R in v)_[R]=v[R];delete _.rest}var S=new p;return h(S,S.head,g),d(g,S,_,S.head,0),y(S)},hooks:{all:{},add:function(g,_){var v=a.hooks.all;v[g]=v[g]||[],v[g].push(_)},run:function(g,_){var v=a.hooks.all[g];if(!(!v||!v.length))for(var R=0,S;S=v[R++];)S(_)}},Token:l};n.Prism=a;function l(g,_,v,R){this.type=g,this.content=_,this.alias=v,this.length=(R||"").length|0}l.stringify=function g(_,v){if(typeof _=="string")return _;if(Array.isArray(_)){var R="";return _.forEach(function(w){R+=g(w,v)}),R}var S={type:_.type,content:g(_.content,v),tag:"span",classes:["token",_.type],attributes:{},language:v},T=_.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(S.classes,T):S.classes.push(T)),a.hooks.run("wrap",S);var D="";for(var M in S.attributes)D+=" "+M+'="'+(S.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+D+">"+S.content+"</"+S.tag+">"};function c(g,_,v,R){g.lastIndex=_;var S=g.exec(v);if(S&&R&&S[1]){var T=S[1].length;S.index+=T,S[0]=S[0].slice(T)}return S}function d(g,_,v,R,S,T){for(var D in v)if(!(!v.hasOwnProperty(D)||!v[D])){var M=v[D];M=Array.isArray(M)?M:[M];for(var w=0;w<M.length;++w){if(T&&T.cause==D+","+w)return;var B=M[w],X=B.inside,te=!!B.lookbehind,P=!!B.greedy,k=B.alias;if(P&&!B.pattern.global){var W=B.pattern.toString().match(/[imsuy]*$/)[0];B.pattern=RegExp(B.pattern.source,W+"g")}for(var Y=B.pattern||B,H=R.next,V=S;H!==_.tail&&!(T&&V>=T.reach);V+=H.value.length,H=H.next){var q=H.value;if(_.length>g.length)return;if(!(q instanceof l)){var J=1,K;if(P){if(K=c(Y,V,g,te),!K||K.index>=g.length)break;var he=K.index,G=K.index+K[0].length,$=V;for($+=H.value.length;he>=$;)H=H.next,$+=H.value.length;if($-=H.value.length,V=$,H.value instanceof l)continue;for(var re=H;re!==_.tail&&($<G||typeof re.value=="string");re=re.next)J++,$+=re.value.length;J--,q=g.slice(V,$),K.index-=V}else if(K=c(Y,0,q,te),!K)continue;var he=K.index,de=K[0],Se=q.slice(0,he),Te=q.slice(he+de.length),ge=V+q.length;T&&ge>T.reach&&(T.reach=ge);var Ne=H.prev;Se&&(Ne=h(_,Ne,Se),V+=Se.length),m(_,Ne,J);var U=new l(D,X?a.tokenize(de,X):de,k,de);if(H=h(_,Ne,U),Te&&h(_,H,Te),J>1){var nt={cause:D+","+w,reach:ge};d(g,_,v,H.prev,V,nt),T&&nt.reach>T.reach&&(T.reach=nt.reach)}}}}}}function p(){var g={value:null,prev:null,next:null},_={value:null,prev:g,next:null};g.next=_,this.head=g,this.tail=_,this.length=0}function h(g,_,v){var R=_.next,S={value:v,prev:_,next:R};return _.next=S,R.prev=S,g.length++,S}function m(g,_,v){for(var R=_.next,S=0;S<v&&R!==g.tail;S++)R=R.next;_.next=R,R.prev=_,g.length-=S}function y(g){for(var _=[],v=g.head.next;v!==g.tail;)_.push(v.value),v=v.next;return _}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(g){var _=JSON.parse(g.data),v=_.language,R=_.code,S=_.immediateClose;n.postMessage(a.highlight(R,a.languages[v],v)),S&&n.close()},!1)),a;var x=a.util.currentScript();x&&(a.filename=x.src,x.hasAttribute("data-manual")&&(a.manual=!0));function f(){a.manual||a.highlightAll()}if(!a.manual){var u=document.readyState;u==="loading"||u==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(e);i.exports&&(i.exports=t),typeof Ja<"u"&&(Ja.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(x,f){return"✖ Error "+x+" while fetching file: "+f},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",d="failed",p="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function h(x,f,u){var g=new XMLHttpRequest;g.open("GET",x,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?f(g.responseText):g.status>=400?u(r(g.status,g.statusText)):u(s))},g.send(null)}function m(x){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(f){var u=Number(f[1]),g=f[2],_=f[3];return g?_?[u,Number(_)]:[u,void 0]:[u,u]}}t.hooks.add("before-highlightall",function(x){x.selector+=", "+p}),t.hooks.add("before-sanity-check",function(x){var f=x.element;if(f.matches(p)){x.code="",f.setAttribute(a,l);var u=f.appendChild(document.createElement("CODE"));u.textContent=n;var g=f.getAttribute("data-src"),_=x.language;if(_==="none"){var v=(/\.(\w+)$/.exec(g)||[,"none"])[1];_=o[v]||v}t.util.setLanguage(u,_),t.util.setLanguage(f,_);var R=t.plugins.autoloader;R&&R.loadLanguages(_),h(g,function(S){f.setAttribute(a,c);var T=m(f.getAttribute("data-range"));if(T){var D=S.split(/\r\n?|\n/g),M=T[0],w=T[1]==null?D.length:T[1];M<0&&(M+=D.length),M=Math.max(0,Math.min(M-1,D.length)),w<0&&(w+=D.length),w=Math.max(0,Math.min(w,D.length)),S=D.slice(M,w).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(M+1))}u.textContent=S,t.highlightElement(u)},function(S){f.setAttribute(a,d),u.textContent=S})}}),t.plugins.fileHighlight={highlight:function(f){for(var u=(f||document).querySelectorAll(p),g=0,_;_=u[g++];)t.highlightElement(_)}};var y=!1;t.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(No);var Bp=No.exports;const qr=Op(Bp);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(i){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,t=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return t})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Prism);(function(i){function e(V,q){return V.replace(/<<(\d+)>>/g,function(J,K){return"(?:"+q[+K]+")"})}function t(V,q,J){return RegExp(e(V,q),"")}function n(V,q){for(var J=0;J<q;J++)V=V.replace(/<<self>>/g,function(){return"(?:"+V+")"});return V.replace(/<<self>>/g,"[^\\s\\S]")}var r={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function s(V){return"\\b(?:"+V.trim().replace(/ /g,"|")+")\\b"}var o=s(r.typeDeclaration),a=RegExp(s(r.type+" "+r.typeDeclaration+" "+r.contextual+" "+r.other)),l=s(r.typeDeclaration+" "+r.contextual+" "+r.other),c=s(r.type+" "+r.typeDeclaration+" "+r.other),d=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),p=n(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,m=e(/<<0>>(?:\s*<<1>>)?/.source,[h,d]),y=e(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[l,m]),x=/\[\s*(?:,\s*)*\]/.source,f=e(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[y,x]),u=e(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[d,p,x]),g=e(/\(<<0>>+(?:,<<0>>+)+\)/.source,[u]),_=e(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[g,y,x]),v={keyword:a,punctuation:/[<>()?,.:[\]]/},R=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,S=/"(?:\\.|[^\\"\r\n])*"/.source,T=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;i.languages.csharp=i.languages.extend("clike",{string:[{pattern:t(/(^|[^$\\])<<0>>/.source,[T]),lookbehind:!0,greedy:!0},{pattern:t(/(^|[^@$\\])<<0>>/.source,[S]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[y]),lookbehind:!0,inside:v},{pattern:t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,_]),lookbehind:!0,inside:v},{pattern:t(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:t(/(\b<<0>>\s+)<<1>>/.source,[o,m]),lookbehind:!0,inside:v},{pattern:t(/(\bcatch\s*\(\s*)<<0>>/.source,[y]),lookbehind:!0,inside:v},{pattern:t(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:v},{pattern:t(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[_,c,h]),inside:v}],keyword:a,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),i.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),i.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),i.languages.insertBefore("csharp","class-name",{namespace:{pattern:t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[p]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[_,y]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[_]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:t(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,d]),inside:{function:t(/^<<0>>/.source,[h]),generic:{pattern:RegExp(d),alias:"class-name",inside:v}}},"type-list":{pattern:t(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[o,m,h,_,a.source,p,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[m,p]),lookbehind:!0,greedy:!0,inside:i.languages.csharp},keyword:a,"class-name":{pattern:RegExp(_),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var D=S+"|"+R,M=e(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[D]),w=n(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[M]),2),B=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,X=e(/<<0>>(?:\s*\(<<1>>*\))?/.source,[y,w]);i.languages.insertBefore("csharp","class-name",{attribute:{pattern:t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[B,X]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t(/^<<0>>(?=\s*:)/.source,[B]),alias:"keyword"},"attribute-arguments":{pattern:t(/\(<<0>>*\)/.source,[w]),inside:i.languages.csharp},"class-name":{pattern:RegExp(y),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var te=/:[^}\r\n]+/.source,P=n(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[M]),2),k=e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[P,te]),W=n(e(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[D]),2),Y=e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[W,te]);function H(V,q){return{interpolation:{pattern:t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[V]),lookbehind:!0,inside:{"format-string":{pattern:t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[q,te]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:i.languages.csharp}}},string:/[\s\S]+/}}i.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[k]),lookbehind:!0,greedy:!0,inside:H(k,P)},{pattern:t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[Y]),lookbehind:!0,greedy:!0,inside:H(Y,W)}],char:{pattern:RegExp(R),greedy:!0}}),i.languages.dotnet=i.languages.cs=i.languages.csharp})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(i){i.languages.typescript=i.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete i.languages.typescript.parameter,delete i.languages.typescript["literal-property"];var e=i.languages.extend("typescript",{});delete e["class-name"],i.languages.typescript["class-name"].inside=e,i.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),i.languages.ts=i.languages.typescript})(Prism);const kp={cpp:"cpp",c:"c",csharp:"csharp",python:"python",typescript:"typescript",php:"php"};function zp(i){const e=document.createElement("div");e.className="codepanel",i.appendChild(e);const t={openPinId:null,activeTabIdx:0,tabs:[]},n=()=>{const r=t.tabs[t.activeTabIdx];if(!r){e.innerHTML="";return}const s=bn.find(h=>h.id===r.projectId),o=Cp(r.file)??"// snippet not yet vendored",a=kp[r.lang]??"plain",l=qr.languages[a]??qr.languages.markup,p=qr.highlight(o,l,a).split(`
`).map((h,m)=>`<span class="ln">${m+1}</span>${h}`).join(`
`);e.innerHTML=`
      <div class="tabs">
        ${t.tabs.map((h,m)=>`<span class="tab ${m===t.activeTabIdx?"active":""}" data-idx="${m}">${ui(h.file)}</span>`).join("")}
      </div>
      <div class="head">
        <span>// ${ui(s?.name??"")} › ${ui(r.file)}</span>
        <span>L ${r.lineStart} — ${r.lineEnd}</span>
      </div>
      <pre><code>${p}</code></pre>
      <div class="footer">
        <span>${ui(r.caption)}</span>
        <span>${s?.githubUrl?`<a href="${s.githubUrl}" target="_blank" rel="noopener">${ui(s.githubUrl.replace(/^https?:\/\//,""))} ↗</a>`:""}</span>
      </div>
    `,e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{const m=Number(h.dataset.idx);t.activeTabIdx=m,n()})})};return{open(r){const s=sr.filter(o=>o.projectId===r.projectId);t.tabs=s,t.activeTabIdx=Math.max(0,s.findIndex(o=>o.id===r.id)),t.openPinId=r.id,e.classList.add("open"),n()},close(){t.openPinId=null,e.classList.remove("open")},isOpen:()=>t.openPinId!==null}}function ui(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Gp(i,e,t,n){const r=new Set;bn.forEach(m=>m.lang.forEach(y=>r.add(y)));const s=Array.from(r).map(m=>m.toUpperCase()).join(" · "),o=(t.length*2/e.nodes.length).toFixed(2),a=document.createElement("div");a.className="hud tl",a.innerHTML=`
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
  `,i.appendChild(a);const l=document.createElement("div");l.className="hud tr";const d=[...bn].filter(m=>m.tier<=4).sort((m,y)=>m.tier-y.tier||y.nodeCount-m.nodeCount).slice(0,8).map(m=>{const y=Math.round(m.nodeCount/140*10),x="▰".repeat(y),f="▱".repeat(10-y);return`<div>${m.name.padEnd(22," ")} ${x}${f} ${String(m.nodeCount).padStart(3," ")}</div>`}).join(`
`);l.innerHTML=`
    <nav>
      <b id="nav-works">WORKS</b> &nbsp;
      <span id="nav-about">ABOUT</span> &nbsp;
      <span id="nav-contact">CONTACT</span>
    </nav>
    <div class="sort">SORT <u>COMPLEXITY ▾</u></div>
    <div class="stats">
      <div style="opacity:0.55; letter-spacing:0.18em; margin-bottom:4px;">// CLUSTERS</div>
      <pre style="margin:0; font-family:inherit; font-size:8.5px; line-height:1.55;">${d}</pre>
    </div>
  `,i.appendChild(l);const p=document.createElement("div");p.className="hud bl",p.innerHTML="[DRAG] rotate &nbsp;·&nbsp; [SCROLL] zoom &nbsp;·&nbsp; [HOVER PIN] inspect &nbsp;·&nbsp; [/] search &nbsp;·&nbsp; [ESC] close",i.appendChild(p);const h=document.createElement("div");h.className="hud br",h.innerHTML=`
    v0.1.0 &nbsp;·&nbsp; build production · three.js
    <br />
    <span style="opacity:0.4">meiggs.dev &nbsp;·&nbsp; github.com/0xE666</span>
  `,i.appendChild(h),document.getElementById("nav-about")?.addEventListener("click",n.openAbout),document.getElementById("nav-contact")?.addEventListener("click",n.openContact)}function Hp(i){const e=document.createElement("div");e.className="slidepanel about",e.innerHTML=`
    <span class="close" data-close>×</span>
    <h3>// ABOUT</h3>
    <p>Full-stack engineer. I build at the seams &mdash; APIs that shouldn't exist (iOS reverse-engineering for Soundmap-API), agents that route across local + cloud LLMs (vaal), and Windows internals tooling for security research.</p>
    <p>Comfortable from PHP at the surface to PE/IAT walks in C++ at the bottom. Most of my public work is on GitHub as <a href="https://github.com/0xE666" target="_blank" rel="noopener">0xE666</a>.</p>
    <p style="opacity:0.55; font-size:11px; margin-top:32px;">
      Tier-1 work shown on the bridge: <strong>vaal</strong>, <strong>Windows-Internals research</strong>.
      Tier-2: <strong>Soundmap-API</strong>, <strong>poe_null</strong>, <strong>poe-trade-api</strong>, <strong>poe-watcher</strong>.
    </p>
  `,i.appendChild(e),e.querySelector("[data-close]")?.addEventListener("click",()=>e.classList.remove("open"));let t=!1;return{open(){t=!0,e.classList.add("open")},close(){t=!1,e.classList.remove("open")},isOpen:()=>t}}function Vp(i){const e=document.createElement("div");e.className="slidepanel contact",e.innerHTML=`
    <span class="close" data-close>×</span>
    <h3>// CONTACT</h3>
    <ul style="list-style:none; padding:0; margin:0; line-height:2;">
      <li>email &nbsp;&nbsp;&nbsp;<a href="mailto:ericflipreset@gmail.com">ericflipreset@gmail.com</a></li>
      <li>discord &nbsp;<span style="color:var(--fg);">eric.cpp</span></li>
    </ul>
    <p style="opacity:0.45; font-size:11px; margin-top:24px;">
      Open to: full-stack roles, security-research, AI agent / tooling work, contract.
    </p>
  `,i.appendChild(e),e.querySelector("[data-close]")?.addEventListener("click",()=>e.classList.remove("open"));let t=!1;return{open(){t=!0,e.classList.add("open")},close(){t=!1,e.classList.remove("open")},isOpen:()=>t}}function Wp(i,e){const t=document.createElement("div");t.className="search-overlay",t.innerHTML=`
    <input type="text" placeholder="search projects, pins, files…" />
    <div class="results"></div>
  `,i.appendChild(t);const n=t.querySelector("input"),r=t.querySelector(".results");let s=0,o=[],a=!1;const l=[...bn.map(h=>({type:"project",id:h.id,label:`${h.name}  //  T${h.tier}  ${h.lang.join(" ")}`})),...sr.map(h=>({type:"pin",id:h.id,label:`${h.file}:${h.lineStart}  //  ${h.label}`,pin:h}))],c=()=>{if(!o.length){r.innerHTML='<div class="result" style="opacity:0.4">no matches</div>';return}r.innerHTML=o.map((h,m)=>`<div class="result ${m===s?"active":""}" data-idx="${m}">${Xp(h.label)}</div>`).join(""),r.querySelectorAll(".result").forEach(h=>{h.addEventListener("click",()=>{s=Number(h.dataset.idx),d()})})},d=()=>{const h=o[s];h&&(h.type==="pin"&&h.pin&&e.open(h.pin),p.close())};n.addEventListener("input",()=>{const h=n.value.trim().toLowerCase();o=h?l.filter(m=>m.label.toLowerCase().includes(h)):l.slice(0,30),s=0,c()}),n.addEventListener("keydown",h=>{h.key==="ArrowDown"?(s=Math.min(o.length-1,s+1),c(),h.preventDefault()):h.key==="ArrowUp"?(s=Math.max(0,s-1),c(),h.preventDefault()):h.key==="Enter"?d():h.key==="Escape"&&p.close()});const p={toggle(){a?p.close():(a=!0,t.classList.add("open"),n.value="",o=l.slice(0,30),s=0,c(),n.focus())},close(){a=!1,t.classList.remove("open")},isOpen:()=>a};return p}function Xp(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Qa=2654435761;function qp(){if((navigator.deviceMemory??8)<4)return!0;try{const e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");if(!t)return!1;if(t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)<256)return!0}catch{}return!1}function Yp(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function $p(){document.getElementById("bridge-canvas")?.remove(),document.getElementById("hud-root")?.remove();const i=document.getElementById("fallback");i.style.display="block";const e=document.getElementById("fallback-table");e.innerHTML=`
    <thead><tr><th>Tier</th><th>Project</th><th>Lang</th><th>Description</th></tr></thead>
    <tbody>${bn.map(t=>`
      <tr>
        <td>T${t.tier}</td>
        <td>${t.githubUrl?`<a href="${t.githubUrl}">${t.name}</a>`:t.name}</td>
        <td>${t.lang.join(", ")}</td>
        <td>${t.blurb}</td>
      </tr>`).join("")}
    </tbody>
  `}function jp(){const i=document.getElementById("bridge-canvas");if(!i)throw new Error("canvas missing");const e=new Lo({canvas:i,antialias:!0,alpha:!1});e.setPixelRatio(Math.min(2,window.devicePixelRatio)),e.setClearColor(0,1);const t=new Kf,n=Qf();n.attach(i);const r=()=>{const T=window.innerWidth,D=window.innerHeight;e.setSize(T,D,!1),n.camera.aspect=T/D,n.camera.updateProjectionMatrix()};window.addEventListener("resize",r),r();const s=qp(),o=rp(bn,Qa,s?.5:1);window.__BRIDGE__=o;const a=lp(o.knots);t.add(a.group);const l=dp(o,Qa),c=hp(o,l);t.add(c.group);const d=Up(o);t.add(d.pinHalos,d.pinRings,d.pinDots),window.__PINS__=d;const p=document.getElementById("codepanel-root"),h=zp(p),m=document.getElementById("overlay-root"),y=Hp(m),x=Vp(m),f=Wp(m,h),u=document.getElementById("hud-root");Gp(u,o,l,{openAbout:()=>y.open(),openContact:()=>x.open()});const g=document.createElement("div");g.className="pin-tooltip",document.body.appendChild(g);let _=null;Fp(i,n.camera,d,T=>{if(_=T.index,T.pin){i.style.cursor="pointer",g.textContent=`${T.pin.label}  ·  ${T.pin.file}:${T.pin.lineStart}`,g.classList.add("visible");const D=Math.min(window.innerWidth-240,T.clientX+14),M=Math.max(8,T.clientY-28);g.style.left=`${D}px`,g.style.top=`${M}px`}else i.style.cursor="",g.classList.remove("visible")}),i.addEventListener("click",T=>{const D=i.getBoundingClientRect(),M=new ze((T.clientX-D.left)/D.width*2-1,-((T.clientY-D.top)/D.height)*2+1),w=new Io;w.setFromCamera(M,n.camera);const B=w.intersectObject(d.pinDots,!1);if(B.length){const X=B[0].instanceId,te=d.pinAnchors[X];te&&(h.open(te),g.classList.remove("visible"))}else h.isOpen()&&h.close()}),window.addEventListener("keydown",T=>{T.key==="/"&&!(T.target instanceof HTMLInputElement)&&(T.preventDefault(),f.toggle()),T.key==="Escape"&&(f.isOpen()?f.close():h.isOpen()?h.close():y.isOpen()?y.close():x.isOpen()&&x.close())});let v=performance.now();const R=v;function S(){const T=performance.now(),D=(T-v)/1e3;v=T;const M=(T-R)/1e3;n.update(D),cp(a.spins,D),Np(d,M,_),e.render(t,n.camera),requestAnimationFrame(S)}S(),console.log(`bridge: ${o.knots.length} knots, ${o.nodes.length} nodes, ${l.length} edges, ${d.pinAnchors.length} pins`)}Yp()?jp():$p();
