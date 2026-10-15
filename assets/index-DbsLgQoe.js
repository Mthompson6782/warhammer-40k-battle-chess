(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zr="170",hi={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mc=0,va=1,gc=2,Po=1,Do=2,ln=3,Cn=0,Ie=1,he=2,An=0,ui=1,Ma=2,ya=3,Sa=4,_c=5,kn=100,xc=101,vc=102,Mc=103,yc=104,Sc=200,wc=201,Ec=202,Tc=203,lr=204,hr=205,bc=206,Ac=207,Rc=208,Cc=209,Pc=210,Dc=211,Lc=212,Ic=213,Uc=214,ur=0,dr=1,fr=2,pi=3,pr=4,mr=5,gr=6,_r=7,Lo=0,Nc=1,Fc=2,Rn=0,Oc=1,Bc=2,kc=3,Io=4,zc=5,Hc=6,Gc=7,Uo=300,mi=301,gi=302,xr=303,vr=304,ws=306,Mr=1e3,Hn=1001,yr=1002,je=1003,Vc=1004,Hi=1005,Je=1006,Ps=1007,Gn=1008,pn=1009,No=1010,Fo=1011,Ni=1012,Jr=1013,Vn=1014,un=1015,Fi=1016,Qr=1017,ta=1018,_i=1020,Oo=35902,Bo=1021,ko=1022,$e=1023,zo=1024,Ho=1025,di=1026,xi=1027,Go=1028,ea=1029,Vo=1030,na=1031,ia=1033,us=33776,ds=33777,fs=33778,ps=33779,Sr=35840,wr=35841,Er=35842,Tr=35843,br=36196,Ar=37492,Rr=37496,Cr=37808,Pr=37809,Dr=37810,Lr=37811,Ir=37812,Ur=37813,Nr=37814,Fr=37815,Or=37816,Br=37817,kr=37818,zr=37819,Hr=37820,Gr=37821,ms=36492,Vr=36494,Wr=36495,Wo=36283,Xr=36284,qr=36285,Yr=36286,Wc=3200,Xc=3201,Xo=0,qc=1,En="",He="srgb",Mi="srgb-linear",Es="linear",jt="srgb",$n=7680,wa=519,Yc=512,$c=513,jc=514,qo=515,Kc=516,Zc=517,Jc=518,Qc=519,Ea=35044,Ta="300 es",dn=2e3,xs=2001;class qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,$r=180/Math.PI;function Oi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function tl(s,t){return(s%t+t)%t}function Ds(s,t,e){return(1-e)*s+e*t}function Ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const el={DEG2RAD:gs};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,r,a,o,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],m=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],u=i[6],y=i[1],M=i[4],x=i[7],D=i[2],R=i[5],b=i[8];return r[0]=a*_+o*y+c*D,r[3]=a*p+o*M+c*R,r[6]=a*u+o*x+c*b,r[1]=l*_+h*y+m*D,r[4]=l*p+h*M+m*R,r[7]=l*u+h*x+m*b,r[2]=d*_+f*y+g*D,r[5]=d*p+f*M+g*R,r[8]=d*u+f*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*m+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=m*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Ut;function Yo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nl(){const s=vs("canvas");return s.style.display="block",s}const ba={};function Li(s){s in ba||(ba[s]=!0,console.warn(s))}function il(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(s.r=fn(s.r),s.g=fn(s.g),s.b=fn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?Es:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Aa=[.64,.33,.3,.6,.15,.06],Ra=[.2126,.7152,.0722],Ca=[.3127,.329],Pa=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Da=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Mi]:{primaries:Aa,whitePoint:Ca,transfer:Es,toXYZ:Pa,fromXYZ:Da,luminanceCoefficients:Ra,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:Aa,whitePoint:Ca,transfer:jt,toXYZ:Pa,fromXYZ:Da,luminanceCoefficients:Ra,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let jn;class al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=vs("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fn(e[n]/255)*255):e[n]=fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ol=0;class $o{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Is(i[a].image)):r.push(Is(i[a]))}else r=Is(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Is(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?al.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cl=0;class Re extends qn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Hn,i=Hn,r=Je,a=Gn,o=$e,c=pn,l=Re.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=Oi(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Uo;Re.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],m=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,D=(u+1)/2,R=(h+d)/4,b=(m+_)/4,C=(g+p)/4;return M>x&&M>D?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=b/n):x>D?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=C/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=b/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(m-_)*(m-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(m-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ll extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],m=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(m!==_||c!==d||l!==f||h!==g){let p=1-o;const u=c*d+l*f+h*g+m*_,y=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const D=Math.sqrt(M),R=Math.atan2(D,u*y);p=Math.sin(p*R)/D,o=Math.sin(o*R)/D}const x=o*y;if(c=c*p+d*x,l=l*p+f*x,h=h*p+g*x,m=m*p+_*x,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=D,l*=D,h*=D,m*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],m=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*m+c*f-l*d,t[e+1]=c*g+h*d+l*m-o*f,t[e+2]=l*g+h*f+o*d-c*m,t[e+3]=h*g-o*m-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),m=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*m+l*f*g,this._y=l*f*m-d*h*g,this._z=l*h*g+d*f*m,this._w=l*h*m-d*f*g;break;case"YXZ":this._x=d*h*m+l*f*g,this._y=l*f*m-d*h*g,this._z=l*h*g-d*f*m,this._w=l*h*m+d*f*g;break;case"ZXY":this._x=d*h*m-l*f*g,this._y=l*f*m+d*h*g,this._z=l*h*g+d*f*m,this._w=l*h*m-d*f*g;break;case"ZYX":this._x=d*h*m-l*f*g,this._y=l*f*m+d*h*g,this._z=l*h*g-d*f*m,this._w=l*h*m+d*f*g;break;case"YZX":this._x=d*h*m+l*f*g,this._y=l*f*m+d*h*g,this._z=l*h*g-d*f*m,this._w=l*h*m-d*f*g;break;case"XZY":this._x=d*h*m-l*f*g,this._y=l*f*m-d*h*g,this._z=l*h*g+d*f*m,this._w=l*h*m+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],m=e[10],d=n+o+m;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>m){const f=2*Math.sqrt(1+n-o-m);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>m){const f=2*Math.sqrt(1+o-n-m);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+m-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),m=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*m+this._w*d,this._x=n*m+this._x*d,this._y=i*m+this._y*d,this._z=r*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),m=2*(r*n-a*e);return this.x=e+c*l+a*m-o*h,this.y=n+c*h+o*l-r*m,this.z=i+c*m+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new A,La=new Xn;class Bi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),Vi.subVectors(this.max,bi),Kn.subVectors(t.a,bi),Zn.subVectors(t.b,bi),Jn.subVectors(t.c,bi),_n.subVectors(Zn,Kn),xn.subVectors(Jn,Zn),Ln.subVectors(Kn,Jn);let e=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Ln.z,Ln.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Ln.z,0,-Ln.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Ln.y,Ln.x,0];return!Ns(e,Kn,Zn,Jn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,Kn,Zn,Jn,Vi))?!1:(Wi.crossVectors(_n,xn),e=[Wi.x,Wi.y,Wi.z],Ns(e,Kn,Zn,Jn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sn=[new A,new A,new A,new A,new A,new A,new A,new A],We=new A,Gi=new Bi,Kn=new A,Zn=new A,Jn=new A,_n=new A,xn=new A,Ln=new A,bi=new A,Vi=new A,Wi=new A,In=new A;function Ns(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=t.dot(In),l=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ul=new Bi,Ai=new A,Fs=new A;class Ts{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ul.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Fs)),this.expandByPoint(Ai.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new A,Os=new A,Xi=new A,vn=new A,Bs=new A,qi=new A,ks=new A;class bs{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Os.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(Os);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xi),o=vn.dot(this.direction),c=-vn.dot(Xi),l=vn.lengthSq(),h=Math.abs(1-a*a);let m,d,f,g;if(h>0)if(m=a*c-o,d=a*o-c,g=r*h,m>=0)if(d>=-g)if(d<=g){const _=1/h;m*=_,d*=_,f=m*(m+a*d+2*o)+d*(a*m+d+2*c)+l}else d=r,m=Math.max(0,-(a*d+o)),f=-m*m+d*(d+2*c)+l;else d=-r,m=Math.max(0,-(a*d+o)),f=-m*m+d*(d+2*c)+l;else d<=-g?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-c),r),f=-m*m+d*(d+2*c)+l):d<=g?(m=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-c),r),f=-m*m+d*(d+2*c)+l);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),f=-m*m+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(Os).addScaledVector(Xi,d),f}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),m>=0?(o=(t.min.z-d.z)*m,c=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,c=(t.min.z-d.z)*m),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,i,r){Bs.subVectors(e,t),qi.subVectors(n,t),ks.crossVectors(Bs,qi);let a=this.direction.dot(ks),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const c=o*this.direction.dot(qi.crossVectors(vn,qi));if(c<0)return null;const l=o*this.direction.dot(Bs.cross(vn));if(l<0||c+l>a)return null;const h=-o*vn.dot(ks);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,a,o,c,l,h,m,d,f,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,m,d,f,g,_,p)}set(t,e,n,i,r,a,o,c,l,h,m,d,f,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=m,u[14]=d,u[3]=f,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*m,g=o*h,_=o*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*m,g=l*h,_=l*m;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*m,g=l*h,_=l*m;e[0]=d-_*o,e[4]=-a*m,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*m,g=o*h,_=o*m;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*m,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*m,e[8]=g*m+f,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*m+g,e[10]=d-_*m}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=d*m+_,e[5]=a*h,e[9]=f*m-g,e[2]=g*m-f,e[6]=o*h,e[10]=_*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dl,t,fl)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Mn.crossVectors(n,Ne),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Mn.crossVectors(n,Ne)),Mn.normalize(),Yi.crossVectors(Ne,Mn),i[0]=Mn.x,i[4]=Yi.x,i[8]=Ne.x,i[1]=Mn.y,i[5]=Yi.y,i[9]=Ne.y,i[2]=Mn.z,i[6]=Yi.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],m=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],u=n[14],y=n[3],M=n[7],x=n[11],D=n[15],R=i[0],b=i[4],C=i[8],w=i[12],v=i[1],P=i[5],U=i[9],B=i[13],W=i[2],Y=i[6],X=i[10],Z=i[14],G=i[3],rt=i[7],ut=i[11],St=i[15];return r[0]=a*R+o*v+c*W+l*G,r[4]=a*b+o*P+c*Y+l*rt,r[8]=a*C+o*U+c*X+l*ut,r[12]=a*w+o*B+c*Z+l*St,r[1]=h*R+m*v+d*W+f*G,r[5]=h*b+m*P+d*Y+f*rt,r[9]=h*C+m*U+d*X+f*ut,r[13]=h*w+m*B+d*Z+f*St,r[2]=g*R+_*v+p*W+u*G,r[6]=g*b+_*P+p*Y+u*rt,r[10]=g*C+_*U+p*X+u*ut,r[14]=g*w+_*B+p*Z+u*St,r[3]=y*R+M*v+x*W+D*G,r[7]=y*b+M*P+x*Y+D*rt,r[11]=y*C+M*U+x*X+D*ut,r[15]=y*w+M*B+x*Z+D*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],m=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*c*m-i*l*m-r*o*d+n*l*d+i*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+p*(+e*l*m-e*o*f-r*a*m+n*a*f+r*o*h-n*l*h)+u*(-i*o*h-e*c*m+e*o*d+i*a*m-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],u=t[15],y=m*p*l-_*d*l+_*c*f-o*p*f-m*c*u+o*d*u,M=g*d*l-h*p*l-g*c*f+a*p*f+h*c*u-a*d*u,x=h*_*l-g*m*l+g*o*f-a*_*f-h*o*u+a*m*u,D=g*m*c-h*_*c-g*o*d+a*_*d+h*o*p-a*m*p,R=e*y+n*M+i*x+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=y*b,t[1]=(_*d*r-m*p*r-_*i*f+n*p*f+m*i*u-n*d*u)*b,t[2]=(o*p*r-_*c*r+_*i*l-n*p*l-o*i*u+n*c*u)*b,t[3]=(m*c*r-o*d*r-m*i*l+n*d*l+o*i*f-n*c*f)*b,t[4]=M*b,t[5]=(h*p*r-g*d*r+g*i*f-e*p*f-h*i*u+e*d*u)*b,t[6]=(g*c*r-a*p*r-g*i*l+e*p*l+a*i*u-e*c*u)*b,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*b,t[8]=x*b,t[9]=(g*m*r-h*_*r-g*n*f+e*_*f+h*n*u-e*m*u)*b,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*u+e*o*u)*b,t[11]=(h*o*r-a*m*r-h*n*l+e*m*l+a*n*f-e*o*f)*b,t[12]=D*b,t[13]=(h*_*i-g*m*i+g*n*d-e*_*d-h*n*p+e*m*p)*b,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*p-e*o*p)*b,t[15]=(a*m*i-h*o*i+h*n*c-e*m*c-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,m=o+o,d=r*l,f=r*h,g=r*m,_=a*h,p=a*m,u=o*m,y=c*l,M=c*h,x=c*m,D=n.x,R=n.y,b=n.z;return i[0]=(1-(_+u))*D,i[1]=(f+x)*D,i[2]=(g-M)*D,i[3]=0,i[4]=(f-x)*R,i[5]=(1-(d+u))*R,i[6]=(p+y)*R,i[7]=0,i[8]=(g+M)*b,i[9]=(p-y)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qn.set(i[0],i[1],i[2]).length();const a=Qn.set(i[4],i[5],i[6]).length(),o=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const l=1/r,h=1/a,m=1/o;return Xe.elements[0]*=l,Xe.elements[1]*=l,Xe.elements[2]*=l,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=m,Xe.elements[9]*=m,Xe.elements[10]*=m,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=dn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),m=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===dn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=dn){const c=this.elements,l=1/(e-t),h=1/(n-i),m=1/(a-r),d=(e+t)*l,f=(n+i)*h;let g,_;if(o===dn)g=(a+r)*m,_=-2*m;else if(o===xs)g=r*m,_=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new A,Xe=new oe,dl=new A(0,0,0),fl=new A(1,1,1),Mn=new A,Yi=new A,Ne=new A,Ia=new oe,Ua=new Xn;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],m=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class sa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pl=0;const Na=new A,ti=new Xn,an=new oe,$i=new A,Ri=new A,ml=new A,gl=new Xn,Fa=new A(1,0,0),Oa=new A(0,1,0),Ba=new A(0,0,1),ka={type:"added"},_l={type:"removed"},ei={type:"childadded",child:null},zs={type:"childremoved",child:null};class xe extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new A,e=new tn,n=new Xn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ut}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ri,$i,this.up):an.lookAt($i,Ri,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(an),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ka),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_l),zs.child=t,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ka),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,ml),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,gl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),m=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new A(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new A,on=new A,Hs=new A,cn=new A,ni=new A,ii=new A,za=new A,Gs=new A,Vs=new A,Ws=new A,Xs=new Zt,qs=new Zt,Ys=new Zt;class Ye{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qe.subVectors(i,e),on.subVectors(n,e),Hs.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(on),c=qe.dot(Hs),l=on.dot(on),h=on.dot(Hs),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;const d=1/m,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(t,e),qs.fromBufferAttribute(t,n),Ys.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Xs,r.x),a.addScaledVector(qs,r.y),a.addScaledVector(Ys,r.z),a}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),on.subVectors(t,e),qe.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),qe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ni.subVectors(i,n),ii.subVectors(r,n),Gs.subVectors(t,n);const c=ni.dot(Gs),l=ii.dot(Gs);if(c<=0&&l<=0)return e.copy(n);Vs.subVectors(t,i);const h=ni.dot(Vs),m=ii.dot(Vs);if(h>=0&&m<=h)return e.copy(i);const d=c*m-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ni,a);Ws.subVectors(t,r);const f=ni.dot(Ws),g=ii.dot(Ws);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ii,o);const p=h*g-f*m;if(p<=0&&m-h>=0&&f-g>=0)return za.subVectors(r,i),o=(m-h)/(m-h+(f-g)),e.copy(i).addScaledVector(za,o);const u=1/(p+_+d);return a=_*u,o=d*u,e.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function $s(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=tl(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$s(a,r,t+1/3),this.g=$s(a,r,t),this.b=$s(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Ko[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Wt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ae(Te.r*255,0,255))*65536+Math.round(Ae(Te.g*255,0,255))*256+Math.round(Ae(Te.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case n:c=(i-r)/m+(i<r?6:0);break;case i:c=(r-n)/m+2;break;case r:c=(n-i)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=He){Wt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(ji);const n=Ds(yn.h,ji.h,e),i=Ds(yn.s,ji.s,e),r=Ds(yn.l,ji.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new xt;xt.NAMES=Ko;let xl=0;class yi extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Oi(),this.name="",this.blending=ui,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lr,this.blendDst=hr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lr&&(n.blendSrc=this.blendSrc),this.blendDst!==hr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pe extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new A,Ki=new Tt;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ki.fromBufferAttribute(this,e),Ki.applyMatrix3(t),this.setXY(e,Ki.x,Ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}}class Zo extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jo extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vl=0;const ze=new oe,js=new xe,si=new A,Fe=new Bi,Ci=new Bi,Se=new A;class Ce extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vl++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yo(t)?Jo:Zo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Fe.min,Ci.min),Fe.expandByPoint(Se),Se.addVectors(Fe.max,Ci.max),Fe.expandByPoint(Se)):(Fe.expandByPoint(Ci.min),Fe.expandByPoint(Ci.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Se.fromBufferAttribute(o,l),c&&(si.fromBufferAttribute(t,l),Se.add(si)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new A,c[C]=new A;const l=new A,h=new A,m=new A,d=new Tt,f=new Tt,g=new Tt,_=new A,p=new A;function u(C,w,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),m.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(l),m.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(P),p.copy(m).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[w].add(_),o[v].add(_),c[C].add(p),c[w].add(p),c[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,w=y.length;C<w;++C){const v=y[C],P=v.start,U=v.count;for(let B=P,W=P+U;B<W;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new A,x=new A,D=new A,R=new A;function b(C){D.fromBufferAttribute(i,C),R.copy(D);const w=o[C];M.copy(w),M.sub(D.multiplyScalar(D.dot(w))).normalize(),x.crossVectors(R,w);const P=x.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,w=y.length;C<w;++C){const v=y[C],P=v.start,U=v.count;for(let B=P,W=P+U;B<W;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,m=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),m.subVectors(i,r),h.cross(m),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),m.subVectors(i,r),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,m=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let u=0;u<h;u++)d[g++]=l[f++]}return new Qe(d,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,m=l.length;h<m;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let m=0,d=l.length;m<d;m++){const f=l[m];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],m=r[l];for(let d=0,f=m.length;d<f;d++)h.push(m[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new oe,Un=new bs,Zi=new Ts,Ga=new A,Ji=new A,Qi=new A,ts=new A,Ks=new A,es=new A,Va=new A,ns=new A;class L extends xe{constructor(t=new Ce,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],m=r[c];h!==0&&(Ks.fromBufferAttribute(m,t),a?es.addScaledVector(Ks,h):es.addScaledVector(Ks.sub(e),h))}e.add(es)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(Zi.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Zi,Ga)===null||Un.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(Ha.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,D=M;x<D;x+=3){const R=o.getX(x),b=o.getX(x+1),C=o.getX(x+2);i=is(this,u,t,n,l,h,m,R,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,u=_;p<u;p+=3){const y=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);i=is(this,a,t,n,l,h,m,y,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,D=M;x<D;x+=3){const R=x,b=x+1,C=x+2;i=is(this,u,t,n,l,h,m,R,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,u=_;p<u;p+=3){const y=p,M=p+1,x=p+2;i=is(this,a,t,n,l,h,m,y,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ml(s,t,e,n,i,r,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Cn,o),c===null)return null;ns.copy(o),ns.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ns);return l<e.near||l>e.far?null:{distance:l,point:ns.clone(),object:s}}function is(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Ji),s.getVertexPosition(c,Qi),s.getVertexPosition(l,ts);const h=Ml(s,t,e,n,Ji,Qi,ts,Va);if(h){const m=new A;Ye.getBarycoord(Va,Ji,Qi,ts,m),i&&(h.uv=Ye.getInterpolatedAttribute(i,o,c,l,m,new Tt)),r&&(h.uv1=Ye.getInterpolatedAttribute(r,o,c,l,m,new Tt)),a&&(h.normal=Ye.getInterpolatedAttribute(a,o,c,l,m,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new A,materialIndex:0};Ye.getNormal(Ji,Qi,ts,d.normal),h.face=d,h.barycoord=m}return h}class it extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],m=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(m,2));function g(_,p,u,y,M,x,D,R,b,C,w){const v=x/b,P=D/C,U=x/2,B=D/2,W=R/2,Y=b+1,X=C+1;let Z=0,G=0;const rt=new A;for(let ut=0;ut<X;ut++){const St=ut*P-B;for(let Ot=0;Ot<Y;Ot++){const Jt=Ot*v-U;rt[_]=Jt*y,rt[p]=St*M,rt[u]=W,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[p]=0,rt[u]=R>0?1:-1,h.push(rt.x,rt.y,rt.z),m.push(Ot/b),m.push(1-ut/C),Z+=1}}for(let ut=0;ut<C;ut++)for(let St=0;St<b;St++){const Ot=d+St+Y*ut,Jt=d+St+Y*(ut+1),$=d+(St+1)+Y*(ut+1),et=d+(St+1)+Y*ut;c.push(Ot,Jt,et),c.push(Jt,$,et),G+=6}o.addGroup(f,G,w),f+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const n=vi(s[e]);for(const i in n)t[i]=n[i]}return t}function yl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qo(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Sl={clone:vi,merge:be};var wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,El=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wl,this.fragmentShader=El,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new A,Wa=new Tt,Xa=new Tt;class Oe extends tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,ai=1;class Tl extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(ri,ai,t,e);i.layers=this.layers,this.add(i);const r=new Oe(ri,ai,t,e);r.layers=this.layers,this.add(r);const a=new Oe(ri,ai,t,e);a.layers=this.layers,this.add(a);const o=new Oe(ri,ai,t,e);o.layers=this.layers,this.add(o);const c=new Oe(ri,ai,t,e);c.layers=this.layers,this.add(c);const l=new Oe(ri,ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(m,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ec extends Re{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bl extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new it(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:An});r.uniforms.tEquirect.value=e;const a=new L(i,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Je),new Tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Zs=new A,Al=new A,Rl=new Ut;class wn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zs.subVectors(n,e).cross(Al.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rl.getNormalMatrix(t),i=this.coplanarPoint(Zs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ts,ss=new A;class ra{constructor(t=new wn,e=new wn,n=new wn,i=new wn,r=new wn,a=new wn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],m=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],u=i[12],y=i[13],M=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,p-f,x-u).normalize(),n[1].setComponents(c+r,d+l,p+f,x+u).normalize(),n[2].setComponents(c+a,d+h,p+g,x+y).normalize(),n[3].setComponents(c-a,d-h,p-g,x-y).normalize(),n[4].setComponents(c-o,d-m,p-_,x-M).normalize(),e===dn)n[5].setComponents(c+o,d+m,p+_,x+M).normalize();else if(e===xs)n[5].setComponents(o,m,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ss.x=i.normal.x>0?t.max.x:t.min.x,ss.y=i.normal.y>0?t.max.y:t.min.y,ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cl(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,m=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const h=c.array,m=c.updateRanges;if(s.bindBuffer(l,o),m.length===0)s.bufferSubData(l,0,h);else{m.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<m.length;f++){const g=m[d],_=m[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,m[d]=_)}m.length=d+1;for(let f=0,g=m.length;f<g;f++){const _=m[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class bn extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,m=t/o,d=e/c,f=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*d-a;for(let M=0;M<l;M++){const x=M*m-r;g.push(x,-y,0),_.push(0,0,1),p.push(M/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<o;y++){const M=y+l*u,x=y+l*(u+1),D=y+1+l*(u+1),R=y+1+l*u;f.push(M,x,R),f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dl=`#ifdef USE_ALPHAHASH
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
#endif`,Ll=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Il=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ul=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fl=`#ifdef USE_AOMAP
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
#endif`,Ol=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vl=`#ifdef USE_IRIDESCENCE
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
#endif`,Wl=`#ifdef USE_BUMPMAP
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
#endif`,Xl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ql=`#define PI 3.141592653589793
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
} // validated`,th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eh=`vec3 transformedNormal = objectNormal;
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
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",oh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ch=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_h=`#ifdef USE_GRADIENTMAP
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
}`,xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Sh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ah=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ch=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kh=`#if defined( USE_POINTS_UV )
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
#endif`,zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jh=`#ifdef USE_NORMALMAP
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
#endif`,Qh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,su=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ru=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,du=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gu=`#ifdef USE_SKINNING
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
#endif`,_u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xu=`#ifdef USE_SKINNING
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
#endif`,vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Su=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eu=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pu=`uniform sampler2D t2D;
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Fu=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ou=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Bu=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Wu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Xu=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,qu=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Yu=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,$u=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ju=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Ku=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zu=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Ju=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qu=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,td=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ed=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,nd=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,id=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,sd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ad=`uniform vec3 color;
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
}`,od=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,cd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ft={alphahash_fragment:Pl,alphahash_pars_fragment:Dl,alphamap_fragment:Ll,alphamap_pars_fragment:Il,alphatest_fragment:Ul,alphatest_pars_fragment:Nl,aomap_fragment:Fl,aomap_pars_fragment:Ol,batching_pars_vertex:Bl,batching_vertex:kl,begin_vertex:zl,beginnormal_vertex:Hl,bsdfs:Gl,iridescence_fragment:Vl,bumpmap_pars_fragment:Wl,clipping_planes_fragment:Xl,clipping_planes_pars_fragment:ql,clipping_planes_pars_vertex:Yl,clipping_planes_vertex:$l,color_fragment:jl,color_pars_fragment:Kl,color_pars_vertex:Zl,color_vertex:Jl,common:Ql,cube_uv_reflection_fragment:th,defaultnormal_vertex:eh,displacementmap_pars_vertex:nh,displacementmap_vertex:ih,emissivemap_fragment:sh,emissivemap_pars_fragment:rh,colorspace_fragment:ah,colorspace_pars_fragment:oh,envmap_fragment:ch,envmap_common_pars_fragment:lh,envmap_pars_fragment:hh,envmap_pars_vertex:uh,envmap_physical_pars_fragment:Sh,envmap_vertex:dh,fog_vertex:fh,fog_pars_vertex:ph,fog_fragment:mh,fog_pars_fragment:gh,gradientmap_pars_fragment:_h,lightmap_pars_fragment:xh,lights_lambert_fragment:vh,lights_lambert_pars_fragment:Mh,lights_pars_begin:yh,lights_toon_fragment:wh,lights_toon_pars_fragment:Eh,lights_phong_fragment:Th,lights_phong_pars_fragment:bh,lights_physical_fragment:Ah,lights_physical_pars_fragment:Rh,lights_fragment_begin:Ch,lights_fragment_maps:Ph,lights_fragment_end:Dh,logdepthbuf_fragment:Lh,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Uh,logdepthbuf_vertex:Nh,map_fragment:Fh,map_pars_fragment:Oh,map_particle_fragment:Bh,map_particle_pars_fragment:kh,metalnessmap_fragment:zh,metalnessmap_pars_fragment:Hh,morphinstance_vertex:Gh,morphcolor_vertex:Vh,morphnormal_vertex:Wh,morphtarget_pars_vertex:Xh,morphtarget_vertex:qh,normal_fragment_begin:Yh,normal_fragment_maps:$h,normal_pars_fragment:jh,normal_pars_vertex:Kh,normal_vertex:Zh,normalmap_pars_fragment:Jh,clearcoat_normal_fragment_begin:Qh,clearcoat_normal_fragment_maps:tu,clearcoat_pars_fragment:eu,iridescence_pars_fragment:nu,opaque_fragment:iu,packing:su,premultiplied_alpha_fragment:ru,project_vertex:au,dithering_fragment:ou,dithering_pars_fragment:cu,roughnessmap_fragment:lu,roughnessmap_pars_fragment:hu,shadowmap_pars_fragment:uu,shadowmap_pars_vertex:du,shadowmap_vertex:fu,shadowmask_pars_fragment:pu,skinbase_vertex:mu,skinning_pars_vertex:gu,skinning_vertex:_u,skinnormal_vertex:xu,specularmap_fragment:vu,specularmap_pars_fragment:Mu,tonemapping_fragment:yu,tonemapping_pars_fragment:Su,transmission_fragment:wu,transmission_pars_fragment:Eu,uv_pars_fragment:Tu,uv_pars_vertex:bu,uv_vertex:Au,worldpos_vertex:Ru,background_vert:Cu,background_frag:Pu,backgroundCube_vert:Du,backgroundCube_frag:Lu,cube_vert:Iu,cube_frag:Uu,depth_vert:Nu,depth_frag:Fu,distanceRGBA_vert:Ou,distanceRGBA_frag:Bu,equirect_vert:ku,equirect_frag:zu,linedashed_vert:Hu,linedashed_frag:Gu,meshbasic_vert:Vu,meshbasic_frag:Wu,meshlambert_vert:Xu,meshlambert_frag:qu,meshmatcap_vert:Yu,meshmatcap_frag:$u,meshnormal_vert:ju,meshnormal_frag:Ku,meshphong_vert:Zu,meshphong_frag:Ju,meshphysical_vert:Qu,meshphysical_frag:td,meshtoon_vert:ed,meshtoon_frag:nd,points_vert:id,points_frag:sd,shadow_vert:rd,shadow_frag:ad,sprite_vert:od,sprite_frag:cd},nt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ze={basic:{uniforms:be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:be([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:be([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:be([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:be([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:be([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:be([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:be([nt.common,nt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:be([nt.lights,nt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ze.physical={uniforms:be([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const rs={r:0,b:0,g:0},Fn=new tn,ld=new oe;function hd(s,t,e,n,i,r,a){const o=new xt(0);let c=r===!0?0:1,l,h,m=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const x=g(y);x===null?u(o,c):x&&x.isColor&&(u(x,1),M=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===ws)?(h===void 0&&(h=new L(new it(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:vi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fn.copy(M.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ld.makeRotationFromEuler(Fn)),h.material.toneMapped=Wt.getTransfer(x.colorSpace)!==jt,(m!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,m=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new L(new bn(2,2),new Pn({name:"BackgroundMaterial",uniforms:vi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,m=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,M){y.getRGB(rs,Qo(s)),n.buffers.color.setClear(rs.r,rs.g,rs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),c=M,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(o,c)},render:_,addToRenderList:p}}function ud(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,P,U,B,W){let Y=!1;const X=m(B,U,P);r!==X&&(r=X,l(r.object)),Y=f(v,B,U,W),Y&&g(v,B,U,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(v,P,U,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function m(v,P,U){const B=U.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let X=Y[B];return X===void 0&&(X=d(c()),Y[B]=X),X}function d(v){const P=[],U=[],B=[];for(let W=0;W<e;W++)P[W]=0,U[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,P,U,B){const W=r.attributes,Y=P.attributes;let X=0;const Z=U.getAttributes();for(const G in Z)if(Z[G].location>=0){const ut=W[G];let St=Y[G];if(St===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),ut===void 0||ut.attribute!==St||St&&ut.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(v,P,U,B){const W={},Y=P.attributes;let X=0;const Z=U.getAttributes();for(const G in Z)if(Z[G].location>=0){let ut=Y[G];ut===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const St={};St.attribute=ut,ut&&ut.data&&(St.data=ut.data),W[G]=St,X++}r.attributes=W,r.attributesNum=X,r.index=B}function _(){const v=r.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function p(v){u(v,0)}function u(v,P){const U=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;U[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),W[v]!==P&&(s.vertexAttribDivisor(v,P),W[v]=P)}function y(){const v=r.newAttributes,P=r.enabledAttributes;for(let U=0,B=P.length;U<B;U++)P[U]!==v[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function M(v,P,U,B,W,Y,X){X===!0?s.vertexAttribIPointer(v,P,U,W,Y):s.vertexAttribPointer(v,P,U,B,W,Y)}function x(v,P,U,B){_();const W=B.attributes,Y=U.getAttributes(),X=P.defaultAttributeValues;for(const Z in Y){const G=Y[Z];if(G.location>=0){let rt=W[Z];if(rt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const ut=rt.normalized,St=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const Jt=Ot.buffer,$=Ot.type,et=Ot.bytesPerElement,vt=$===s.INT||$===s.UNSIGNED_INT||rt.gpuType===Jr;if(rt.isInterleavedBufferAttribute){const at=rt.data,Rt=at.stride,Dt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)u(G.location+Bt,at.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)p(G.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let Bt=0;Bt<G.locationSize;Bt++)M(G.location+Bt,St/G.locationSize,$,ut,Rt*et,(Dt+St/G.locationSize*Bt)*et,vt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)u(G.location+at,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<G.locationSize;at++)p(G.location+at);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let at=0;at<G.locationSize;at++)M(G.location+at,St/G.locationSize,$,ut,St*et,St/G.locationSize*at*et,vt)}}else if(X!==void 0){const ut=X[Z];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(G.location,ut);break;case 3:s.vertexAttrib3fv(G.location,ut);break;case 4:s.vertexAttrib4fv(G.location,ut);break;default:s.vertexAttrib1fv(G.location,ut)}}}}y()}function D(){C();for(const v in n){const P=n[v];for(const U in P){const B=P[U];for(const W in B)h(B[W].object),delete B[W];delete P[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const U in P){const B=P[U];for(const W in B)h(B[W].object),delete B[W];delete P[U]}delete n[v.id]}function b(v){for(const P in n){const U=n[P];if(U[v.id]===void 0)continue;const B=U[v.id];for(const W in B)h(B[W].object),delete B[W];delete U[v.id]}}function C(){w(),a=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function dd(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,m){m!==0&&(s.drawArraysInstanced(n,l,h,m),e.update(h,n,m))}function o(l,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,m);let f=0;for(let g=0;g<m;g++)f+=h[g];e.update(f,n,1)}function c(l,h,m,d){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,m);let g=0;for(let _=0;_<m;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==$e&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==pn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==un&&!C)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const m=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function pd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new wn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const f=m.length!==0||d||n!==0||i;return i=d,n=m.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,f){const g=m.clippingPlanes,_=m.clipIntersection,p=m.clipShadows,u=s.get(m);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,M=y*4;let x=u.clippingState||null;c.value=x,x=h(g,d,M,f);for(let D=0;D!==M;++D)x[D]=e[D];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,d,f,g){const _=m!==null?m.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,x=f;M!==_;++M,x+=4)a.copy(m[M]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function md(s){let t=new WeakMap;function e(a,o){return o===xr?a.mapping=mi:o===vr&&(a.mapping=gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xr||o===vr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new bl(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ic extends tc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,qa=[.125,.215,.35,.446,.526,.582],zn=20,Js=new ic,Ya=new xt;let Qs=null,tr=0,er=0,nr=!1;const Bn=(1+Math.sqrt(5))/2,oi=1/Bn,$a=[new A(-Bn,oi,0),new A(Bn,oi,0),new A(-oi,0,Bn),new A(oi,0,Bn),new A(0,Bn,-oi),new A(0,Bn,oi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qs=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,tr,er),this._renderer.xr.enabled=nr,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Fi,format:$e,colorSpace:Mi,depthBuffer:!1},i=Ka(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gd(r)),this._blurMaterial=_d(r,t,e)}return i}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,i){const o=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,d=h.toneMapping;h.getClearColor(Ya),h.toneMapping=Rn,h.autoClear=!1;const f=new pe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new L(new it,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Ya),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):y===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const M=this._cubeSize;as(i,y*M,u>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=m,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===mi||t.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new L(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;as(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$a[(i-r-1)%$a.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new L(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const u=[];let y=0;for(let b=0;b<zn;++b){const C=b/_,w=Math.exp(-C*C/2);u.push(w),b===0?y+=w:b<p&&(y+=2*w)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[i],D=3*x*(i>M-li?i-M+li:0),R=4*(this._cubeSize-x);as(e,D,R,3*x,2*x),c.setRenderTarget(e),c.render(m,Js)}}function gd(s){const t=[],e=[],n=[];let i=s;const r=s-li+1+qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-li?c=qa[a-s+li-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,m=1+l,d=[h,h,m,h,m,m,h,h,m,m,h,m],f=6,g=6,_=3,p=2,u=1,y=new Float32Array(_*g*f),M=new Float32Array(p*g*f),x=new Float32Array(u*g*f);for(let R=0;R<f;R++){const b=R%3*2/3-1,C=R>2?0:-1,w=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(w,_*g*R),M.set(d,p*g*R);const v=[R,R,R,R,R,R];x.set(v,u*g*R)}const D=new Ce;D.setAttribute("position",new Qe(y,_)),D.setAttribute("uv",new Qe(M,p)),D.setAttribute("faceIndex",new Qe(x,u)),t.push(D),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ka(s,t,e){const n=new Wn(s,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _d(s,t,e){const n=new Float32Array(zn),i=new A(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:aa(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Za(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ja(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}function xd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===xr||c===vr,h=c===mi||c===gi;if(l||h){let m=t.get(o);const d=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ja(s)),m=l?e.fromEquirectangular(o,m):e.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),m.texture;if(m!==void 0)return m.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ja(s)),m=l?e.fromEquirectangular(o):e.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),o.addEventListener("dispose",r),m.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Md(s,t,e,n){const i={},r=new WeakMap;function a(m){const d=m.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(m){const d=m.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=m.morphAttributes;for(const g in f){const _=f[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(m){const d=[],f=m.index,g=m.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){const D=y[M+0],R=y[M+1],b=y[M+2];d.push(D,R,R,b,b,D)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const D=M+0,R=M+1,b=M+2;d.push(D,R,R,b,b,D)}}else return;const p=new(Yo(d)?Jo:Zo)(d,1);p.version=_;const u=r.get(m);u&&t.remove(u),r.set(m,p)}function h(m){const d=r.get(m);if(d){const f=m.index;f!==null&&d.version<f.version&&l(m)}else l(m);return r.get(m)}return{get:o,update:c,getWireframeAttribute:h}}function yd(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let u=0;u<g;u++)p+=f[u];e.update(p,n,1)}function m(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/a,f[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let u=0;for(let y=0;y<g;y++)u+=f[y]*_[y];e.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Sd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wd(s,t,e){const n=new WeakMap,i=new Zt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==m){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let D=o.attributes.position.count*x,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const b=new Float32Array(D*R*4*m),C=new jo(b,D,R,m);C.type=un,C.needsUpdate=!0;const w=x*4;for(let P=0;P<m;P++){const U=u[P],B=y[P],W=M[P],Y=D*R*4*P;for(let X=0;X<U.count;X++){const Z=X*w;g===!0&&(i.fromBufferAttribute(U,X),b[Y+Z+0]=i.x,b[Y+Z+1]=i.y,b[Y+Z+2]=i.z,b[Y+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,X),b[Y+Z+4]=i.x,b[Y+Z+5]=i.y,b[Y+Z+6]=i.z,b[Y+Z+7]=0),p===!0&&(i.fromBufferAttribute(W,X),b[Y+Z+8]=i.x,b[Y+Z+9]=i.y,b[Y+Z+10]=i.z,b[Y+Z+11]=W.itemSize===4?i.w:1)}}d={count:m,texture:C,size:new Tt(D,R)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ed(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,m=t.get(c,h);if(i.get(m)!==l&&(t.update(m),i.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return m}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class sc extends Re{constructor(t,e,n,i,r,a,o,c,l,h=di){if(h!==di&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=Vn),n===void 0&&h===xi&&(n=_i),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rc=new Re,Qa=new sc(1,1),ac=new jo,oc=new hl,cc=new ec,to=[],eo=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function Si(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=to[i];if(r===void 0&&(r=new Float32Array(i),to[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function As(s,t){let e=eo[t];e===void 0&&(e=new Int32Array(t),eo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Td(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Ad(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Rd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Cd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;so.set(n),s.uniformMatrix2fv(this.addr,!1,so),ye(e,n)}}function Pd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;io.set(n),s.uniformMatrix3fv(this.addr,!1,io),ye(e,n)}}function Dd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;no.set(n),s.uniformMatrix4fv(this.addr,!1,no),ye(e,n)}}function Ld(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Id(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Ud(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Nd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Fd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function zd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qa.compareFunction=qo,r=Qa):r=rc,e.setTexture2D(t||r,i)}function Hd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||oc,i)}function Gd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cc,i)}function Vd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ac,i)}function Wd(s){switch(s){case 5126:return Td;case 35664:return bd;case 35665:return Ad;case 35666:return Rd;case 35674:return Cd;case 35675:return Pd;case 35676:return Dd;case 5124:case 35670:return Ld;case 35667:case 35671:return Id;case 35668:case 35672:return Ud;case 35669:case 35673:return Nd;case 5125:return Fd;case 36294:return Od;case 36295:return Bd;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Hd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Vd}}function Xd(s,t){s.uniform1fv(this.addr,t)}function qd(s,t){const e=Si(t,this.size,2);s.uniform2fv(this.addr,e)}function Yd(s,t){const e=Si(t,this.size,3);s.uniform3fv(this.addr,e)}function $d(s,t){const e=Si(t,this.size,4);s.uniform4fv(this.addr,e)}function jd(s,t){const e=Si(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Kd(s,t){const e=Si(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zd(s,t){const e=Si(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jd(s,t){s.uniform1iv(this.addr,t)}function Qd(s,t){s.uniform2iv(this.addr,t)}function tf(s,t){s.uniform3iv(this.addr,t)}function ef(s,t){s.uniform4iv(this.addr,t)}function nf(s,t){s.uniform1uiv(this.addr,t)}function sf(s,t){s.uniform2uiv(this.addr,t)}function rf(s,t){s.uniform3uiv(this.addr,t)}function af(s,t){s.uniform4uiv(this.addr,t)}function of(s,t,e){const n=this.cache,i=t.length,r=As(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rc,r[a])}function cf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||oc,r[a])}function lf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cc,r[a])}function hf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ac,r[a])}function uf(s){switch(s){case 5126:return Xd;case 35664:return qd;case 35665:return Yd;case 35666:return $d;case 35674:return jd;case 35675:return Kd;case 35676:return Zd;case 5124:case 35670:return Jd;case 35667:case 35671:return Qd;case 35668:case 35672:return tf;case 35669:case 35673:return ef;case 5125:return nf;case 36294:return sf;case 36295:return rf;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return hf}}class df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wd(e.type)}}class ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uf(e.type)}}class pf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function ro(s,t){s.seq.push(t),s.map[t.id]=t}function mf(s,t,e){const n=s.name,i=n.length;for(ir.lastIndex=0;;){const r=ir.exec(n),a=ir.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ro(e,l===void 0?new df(o,s,t):new ff(o,s,t));break}else{let m=e.map[o];m===void 0&&(m=new pf(o),ro(e,m)),e=m}}}class _s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);mf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ao(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const gf=37297;let _f=0;function xf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const oo=new Ut;function vf(s){Wt._getMatrix(oo,Wt.workingColorSpace,s);const t=`mat3( ${oo.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Es:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function co(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+xf(s.getShaderSource(t),a)}else return i}function Mf(s,t){const e=vf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yf(s,t){let e;switch(t){case Oc:e="Linear";break;case Bc:e="Reinhard";break;case kc:e="Cineon";break;case Io:e="ACESFilmic";break;case Hc:e="AgX";break;case Gc:e="Neutral";break;case zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const os=new A;function Sf(){Wt.getLuminanceCoefficients(os);const s=os.x.toFixed(4),t=os.y.toFixed(4),e=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Ef(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ii(s){return s!==""}function lo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ho(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(s){return s.replace(bf,Rf)}const Af=new Map;function Rf(s,t){let e=Ft[t];if(e===void 0){const n=Af.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const Cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uo(s){return s.replace(Cf,Pf)}function Pf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Df(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Po?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Do?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Lf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function If(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Uf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Fc:t="ENVMAP_BLENDING_ADD";break}return t}function Nf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ff(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Df(e),l=Lf(e),h=If(e),m=Uf(e),d=Nf(e),f=wf(e),g=Ef(r),_=i.createProgram();let p,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),u.length>0&&(u+=`
`)):(p=[fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),u=[fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Rn?yf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Mf("linearToOutputTexel",e.outputColorSpace),Sf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),a=jr(a),a=lo(a,e),a=ho(a,e),o=jr(o),o=lo(o,e),o=ho(o,e),a=uo(a),o=uo(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=y+p+a,x=y+u+o,D=ao(i,i.VERTEX_SHADER,M),R=ao(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(D).trim(),W=i.getShaderInfoLog(R).trim();let Y=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,R);else{const Z=co(i,D,"vertex"),G=co(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Z+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:u}})}i.deleteShader(D),i.deleteShader(R),C=new _s(i,_),w=Tf(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,gf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_f++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let Of=0;class Bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kf(t),e.set(t,n)),n}}class kf{constructor(t){this.id=Of++,this.code=t,this.usedTimes=0}}function zf(s,t,e,n,i,r,a){const o=new sa,c=new Bf,l=new Set,h=[],m=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,v,P,U,B){const W=U.fog,Y=B.geometry,X=w.isMeshStandardMaterial?U.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),G=Z&&Z.mapping===ws?Z.image.height:null,rt=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=ut!==void 0?ut.length:0;let Ot=0;Y.morphAttributes.position!==void 0&&(Ot=1),Y.morphAttributes.normal!==void 0&&(Ot=2),Y.morphAttributes.color!==void 0&&(Ot=3);let Jt,$,et,vt;if(rt){const $t=Ze[rt];Jt=$t.vertexShader,$=$t.fragmentShader}else Jt=w.vertexShader,$=w.fragmentShader,c.update(w),et=c.getVertexShaderID(w),vt=c.getFragmentShaderID(w);const at=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,le=!!w.map,Gt=!!w.matcap,fe=!!Z,O=!!w.aoMap,Be=!!w.lightMap,kt=!!w.bumpMap,zt=!!w.normalMap,Et=!!w.displacementMap,ie=!!w.emissiveMap,wt=!!w.metalnessMap,T=!!w.roughnessMap,S=w.anisotropy>0,k=w.clearcoat>0,j=w.dispersion>0,J=w.iridescence>0,q=w.sheen>0,Mt=w.transmission>0,ot=S&&!!w.anisotropyMap,dt=k&&!!w.clearcoatMap,Vt=k&&!!w.clearcoatNormalMap,Q=k&&!!w.clearcoatRoughnessMap,ft=J&&!!w.iridescenceMap,bt=J&&!!w.iridescenceThicknessMap,Ct=q&&!!w.sheenColorMap,pt=q&&!!w.sheenRoughnessMap,Ht=!!w.specularMap,Nt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,I=Mt&&!!w.transmissionMap,st=Mt&&!!w.thicknessMap,V=!!w.gradientMap,K=!!w.alphaMap,ht=w.alphaTest>0,ct=!!w.alphaHash,Lt=!!w.extensions;let ue=Rn;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ue=s.toneMapping);const we={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:Jt,fragmentShader:$,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Mi,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:Gt,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:Be,bumpMap:kt,normalMap:zt,displacementMap:d&&Et,emissiveMap:ie,normalMapObjectSpace:zt&&w.normalMapType===qc,normalMapTangentSpace:zt&&w.normalMapType===Xo,metalnessMap:wt,roughnessMap:T,anisotropy:S,anisotropyMap:ot,clearcoat:k,clearcoatMap:dt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:j,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:Nt,specularIntensityMap:Qt,transmission:Mt,transmissionMap:I,thicknessMap:st,gradientMap:V,opaque:w.transparent===!1&&w.blending===ui&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:ct,combine:w.combine,mapUv:le&&_(w.map.channel),aoMapUv:O&&_(w.aoMap.channel),lightMapUv:Be&&_(w.lightMap.channel),bumpMapUv:kt&&_(w.bumpMap.channel),normalMapUv:zt&&_(w.normalMap.channel),displacementMapUv:Et&&_(w.displacementMap.channel),emissiveMapUv:ie&&_(w.emissiveMap.channel),metalnessMapUv:wt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ot&&_(w.anisotropyMap.channel),clearcoatMapUv:dt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ht&&_(w.specularMap.channel),specularColorMapUv:Nt&&_(w.specularColorMap.channel),specularIntensityMapUv:Qt&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(zt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(le||K),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===jt,decodeVideoTextureEmissive:ie&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===he,flipSided:w.side===Ie,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function u(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(v,w),M(v,w),v.push(s.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function y(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function M(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const v=g[w.type];let P;if(v){const U=Ze[v];P=Sl.clone(U.uniforms)}else P=w.uniforms;return P}function D(w,v){let P;for(let U=0,B=h.length;U<B;U++){const W=h[U];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Ff(s,v,w,r),h.push(P)),P}function R(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function b(w){c.remove(w)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:D,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:C}}function Hf(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function po(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function mo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(m,d,f,g,_,p){let u=s[t];return u===void 0?(u={id:m.id,object:m,geometry:d,material:f,groupOrder:g,renderOrder:m.renderOrder,z:_,group:p},s[t]=u):(u.id=m.id,u.object=m,u.geometry=d,u.material=f,u.groupOrder=g,u.renderOrder=m.renderOrder,u.z=_,u.group=p),t++,u}function o(m,d,f,g,_,p){const u=a(m,d,f,g,_,p);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):e.push(u)}function c(m,d,f,g,_,p){const u=a(m,d,f,g,_,p);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):e.unshift(u)}function l(m,d){e.length>1&&e.sort(m||Gf),n.length>1&&n.sort(d||po),i.length>1&&i.sort(d||po)}function h(){for(let m=t,d=s.length;m<d;m++){const f=s[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Vf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new mo,s.set(n,[a])):i>=r.length?(a=new mo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Wf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new xt};break;case"SpotLight":e={position:new A,direction:new A,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Xf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let qf=0;function Yf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $f(s){const t=new Wf,e=Xf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new oe,a=new oe;function o(l){let h=0,m=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,p=0,u=0,y=0,M=0,x=0,D=0,R=0,b=0;l.sort(Yf);for(let w=0,v=l.length;w<v;w++){const P=l[w],U=P.color,B=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*B,m+=U.g*B,d+=U.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],B);b++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Z=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,Z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Y,x++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=X,p++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[u]=X,u++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==D||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=D,C.numLightProbes=b,n.version=qf++)}function c(l,h){let m=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let u=0,y=l.length;u<y;u++){const M=l[u];if(M.isDirectionalLight){const x=n.directional[m];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),m++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function go(s){const t=new $f(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function jf(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new go(s),t.set(i,[o])):r>=a.length?(o=new go(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Kf extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zf extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qf=`uniform sampler2D shadow_pass;
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
}`;function tp(s,t,e){let n=new ra;const i=new Tt,r=new Tt,a=new Zt,o=new Kf({depthPacking:Xc}),c=new Zf,l={},h=e.maxTextureSize,m={[Cn]:Ie,[Ie]:Cn,[he]:he},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Jf,fragmentShader:Qf}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new L(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let u=this.type;this.render=function(R,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const w=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(An),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=u!==ln&&this.type===ln,W=u===ln&&this.type!==ln;for(let Y=0,X=R.length;Y<X;Y++){const Z=R[Y],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||B===!0||W===!0){const St=this.type!==ln?{minFilter:je,magFilter:je}:{};G.map!==null&&G.map.dispose(),G.map=new Wn(i.x,i.y,St),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ut=G.getViewportCount();for(let St=0;St<ut;St++){const Ot=G.getViewport(St);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),U.viewport(a),G.updateMatrices(Z,St),n=G.getFrustum(),x(b,C,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===ln&&y(G,C),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(w,v,P)};function y(R,b){const C=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(b,null,C,f,_,null)}function M(R,b,C,w){let v=null;const P=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,B=b.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let Y=W[B];Y===void 0&&(Y=v.clone(),W[B]=Y,b.addEventListener("dispose",D)),v=Y}if(v.visible=b.visible,v.wireframe=b.wireframe,w===ln?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:m[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=s.properties.get(v);U.light=C}return v}function x(R,b,C,w,v){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===ln)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const Y=B.groups;for(let X=0,Z=Y.length;X<Z;X++){const G=Y[X],rt=W[G.materialIndex];if(rt&&rt.visible){const ut=M(R,rt,w,v);R.onBeforeShadow(s,R,b,C,B,ut,G),s.renderBufferDirect(C,null,B,ut,R,G),R.onAfterShadow(s,R,b,C,B,ut,G)}}}else if(W.visible){const Y=M(R,W,w,v);R.onBeforeShadow(s,R,b,C,B,Y,null),s.renderBufferDirect(C,null,B,Y,R,null),R.onAfterShadow(s,R,b,C,B,Y,null)}}const U=R.children;for(let B=0,W=U.length;B<W;B++)x(U[B],b,C,w,v)}function D(R){R.target.removeEventListener("dispose",D);for(const C in l){const w=l[C],v=R.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const ep={[ur]:dr,[fr]:gr,[pr]:_r,[pi]:mr,[dr]:ur,[gr]:fr,[_r]:pr,[mr]:pi};function np(s,t){function e(){let I=!1;const st=new Zt;let V=null;const K=new Zt(0,0,0,0);return{setMask:function(ht){V!==ht&&!I&&(s.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){I=ht},setClear:function(ht,ct,Lt,ue,we){we===!0&&(ht*=ue,ct*=ue,Lt*=ue),st.set(ht,ct,Lt,ue),K.equals(st)===!1&&(s.clearColor(ht,ct,Lt,ue),K.copy(st))},reset:function(){I=!1,V=null,K.set(-1,0,0,0)}}}function n(){let I=!1,st=!1,V=null,K=null,ht=null;return{setReversed:function(ct){if(st!==ct){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ht;ht=null,this.setClear(ue)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?at(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(ct){V!==ct&&!I&&(s.depthMask(ct),V=ct)},setFunc:function(ct){if(st&&(ct=ep[ct]),K!==ct){switch(ct){case ur:s.depthFunc(s.NEVER);break;case dr:s.depthFunc(s.ALWAYS);break;case fr:s.depthFunc(s.LESS);break;case pi:s.depthFunc(s.LEQUAL);break;case pr:s.depthFunc(s.EQUAL);break;case mr:s.depthFunc(s.GEQUAL);break;case gr:s.depthFunc(s.GREATER);break;case _r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ct}},setLocked:function(ct){I=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){I=!1,V=null,K=null,ht=null,st=!1}}}function i(){let I=!1,st=null,V=null,K=null,ht=null,ct=null,Lt=null,ue=null,we=null;return{setTest:function($t){I||($t?at(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function($t){st!==$t&&!I&&(s.stencilMask($t),st=$t)},setFunc:function($t,Ge,en){(V!==$t||K!==Ge||ht!==en)&&(s.stencilFunc($t,Ge,en),V=$t,K=Ge,ht=en)},setOp:function($t,Ge,en){(ct!==$t||Lt!==Ge||ue!==en)&&(s.stencilOp($t,Ge,en),ct=$t,Lt=Ge,ue=en)},setLocked:function($t){I=$t},setClear:function($t){we!==$t&&(s.clearStencil($t),we=$t)},reset:function(){I=!1,st=null,V=null,K=null,ht=null,ct=null,Lt=null,ue=null,we=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},m={},d=new WeakMap,f=[],g=null,_=!1,p=null,u=null,y=null,M=null,x=null,D=null,R=null,b=new xt(0,0,0),C=0,w=!1,v=null,P=null,U=null,B=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let rt=null,ut={};const St=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Jt=new Zt().fromArray(St),$=new Zt().fromArray(Ot);function et(I,st,V,K){const ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(I,ct),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<V;Lt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(st+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}const vt={};vt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(pi),kt(!1),zt(va),at(s.CULL_FACE),O(An);function at(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Dt(I,st){return m[I]!==st?(s.bindFramebuffer(I,st),m[I]=st,I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=st),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(I,st){let V=f,K=!1;if(I){V=d.get(st),V===void 0&&(V=[],d.set(st,V));const ht=I.textures;if(V.length!==ht.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Lt=ht.length;ct<Lt;ct++)V[ct]=s.COLOR_ATTACHMENT0+ct;V.length=ht.length,K=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,K=!0);K&&s.drawBuffers(V)}function le(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Gt={[kn]:s.FUNC_ADD,[xc]:s.FUNC_SUBTRACT,[vc]:s.FUNC_REVERSE_SUBTRACT};Gt[Mc]=s.MIN,Gt[yc]=s.MAX;const fe={[Sc]:s.ZERO,[wc]:s.ONE,[Ec]:s.SRC_COLOR,[lr]:s.SRC_ALPHA,[Pc]:s.SRC_ALPHA_SATURATE,[Rc]:s.DST_COLOR,[bc]:s.DST_ALPHA,[Tc]:s.ONE_MINUS_SRC_COLOR,[hr]:s.ONE_MINUS_SRC_ALPHA,[Cc]:s.ONE_MINUS_DST_COLOR,[Ac]:s.ONE_MINUS_DST_ALPHA,[Dc]:s.CONSTANT_COLOR,[Lc]:s.ONE_MINUS_CONSTANT_COLOR,[Ic]:s.CONSTANT_ALPHA,[Uc]:s.ONE_MINUS_CONSTANT_ALPHA};function O(I,st,V,K,ht,ct,Lt,ue,we,$t){if(I===An){_===!0&&(Rt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),I!==_c){if(I!==p||$t!==w){if((u!==kn||x!==kn)&&(s.blendEquation(s.FUNC_ADD),u=kn,x=kn),$t)switch(I){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ma:s.blendFunc(s.ONE,s.ONE);break;case ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ma:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,D=null,R=null,b.set(0,0,0),C=0,p=I,w=$t}return}ht=ht||st,ct=ct||V,Lt=Lt||K,(st!==u||ht!==x)&&(s.blendEquationSeparate(Gt[st],Gt[ht]),u=st,x=ht),(V!==y||K!==M||ct!==D||Lt!==R)&&(s.blendFuncSeparate(fe[V],fe[K],fe[ct],fe[Lt]),y=V,M=K,D=ct,R=Lt),(ue.equals(b)===!1||we!==C)&&(s.blendColor(ue.r,ue.g,ue.b,we),b.copy(ue),C=we),p=I,w=!1}function Be(I,st){I.side===he?Rt(s.CULL_FACE):at(s.CULL_FACE);let V=I.side===Ie;st&&(V=!V),kt(V),I.blending===ui&&I.transparent===!1?O(An):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){v!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),v=I)}function zt(I){I!==mc?(at(s.CULL_FACE),I!==P&&(I===va?s.cullFace(s.BACK):I===gc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),P=I}function Et(I){I!==U&&(X&&s.lineWidth(I),U=I)}function ie(I,st,V){I?(at(s.POLYGON_OFFSET_FILL),(B!==st||W!==V)&&(s.polygonOffset(st,V),B=st,W=V)):Rt(s.POLYGON_OFFSET_FILL)}function wt(I){I?at(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+Y-1),rt!==I&&(s.activeTexture(I),rt=I)}function S(I,st,V){V===void 0&&(rt===null?V=s.TEXTURE0+Y-1:V=rt);let K=ut[V];K===void 0&&(K={type:void 0,texture:void 0},ut[V]=K),(K.type!==I||K.texture!==st)&&(rt!==V&&(s.activeTexture(V),rt=V),s.bindTexture(I,st||vt[I]),K.type=I,K.texture=st)}function k(){const I=ut[rt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(I){Jt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Jt.copy(I))}function pt(I){$.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ht(I,st){let V=l.get(st);V===void 0&&(V=new WeakMap,l.set(st,V));let K=V.get(I);K===void 0&&(K=s.getUniformBlockIndex(st,I.name),V.set(I,K))}function Nt(I,st){const K=l.get(st).get(I);c.get(st)!==K&&(s.uniformBlockBinding(st,K,I.__bindingPointIndex),c.set(st,K))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ut={},m={},d=new WeakMap,f=[],g=null,_=!1,p=null,u=null,y=null,M=null,x=null,D=null,R=null,b=new xt(0,0,0),C=0,w=!1,v=null,P=null,U=null,B=null,W=null,Jt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Rt,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:le,setBlending:O,setMaterial:Be,setFlipSided:kt,setCullFace:zt,setLineWidth:Et,setPolygonOffset:ie,setScissorTest:wt,activeTexture:T,bindTexture:S,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:ft,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Ct,viewport:pt,reset:Qt}}function _o(s,t,e,n){const i=ip(n);switch(e){case Bo:return s*t;case zo:return s*t;case Ho:return s*t*2;case Go:return s*t/i.components*i.byteLength;case ea:return s*t/i.components*i.byteLength;case Vo:return s*t*2/i.components*i.byteLength;case na:return s*t*2/i.components*i.byteLength;case ko:return s*t*3/i.components*i.byteLength;case $e:return s*t*4/i.components*i.byteLength;case ia:return s*t*4/i.components*i.byteLength;case us:case ds:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fs:case ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wr:case Tr:return Math.max(s,16)*Math.max(t,8)/4;case Sr:case Er:return Math.max(s,8)*Math.max(t,8)/2;case br:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ur:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Or:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ms:case Vr:case Wr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wo:case Xr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qr:case Yr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(s){switch(s){case pn:case No:return{byteLength:1,components:1};case Ni:case Fo:case Fi:return{byteLength:2,components:1};case Qr:case ta:return{byteLength:2,components:4};case Vn:case Jr:case un:return{byteLength:4,components:1};case Oo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,h=new WeakMap;let m;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):vs("canvas")}function _(T,S,k){let j=1;const J=wt(T);if((J.width>k||J.height>k)&&(j=k/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(j*J.width),Mt=Math.floor(j*J.height);m===void 0&&(m=g(q,Mt));const ot=S?g(q,Mt):m;return ot.width=q,ot.height=Mt,ot.getContext("2d").drawImage(T,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Mt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(T,S,k,j,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=S;if(S===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),S===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),S===s.RGBA){const Mt=J?Es:Wt.getTransfer(j);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=Mt===jt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(T,S){let k;return T?S===null||S===Vn||S===_i?k=s.DEPTH24_STENCIL8:S===un?k=s.DEPTH32F_STENCIL8:S===Ni&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vn||S===_i?k=s.DEPTH_COMPONENT24:S===un?k=s.DEPTH_COMPONENT32F:S===Ni&&(k=s.DEPTH_COMPONENT16),k}function D(T,S){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==Je?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),C(S),S.isVideoTexture&&h.delete(S)}function b(T){const S=T.target;S.removeEventListener("dispose",b),v(S)}function C(T){const S=n.get(T);if(S.__webglInit===void 0)return;const k=T.source,j=d.get(k);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(j).length===0&&d.delete(k)}n.remove(T)}function w(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const k=T.source,j=d.get(k);delete j[S.__cacheKey],a.memory.textures--}function v(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[j][J]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=T.textures;for(let j=0,J=k.length;j<J;j++){const q=n.get(k[j]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(T)}let P=0;function U(){P=0}function B(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function W(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Y(T,S){const k=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,T,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function X(T,S){const k=n.get(T);if(T.version>0&&k.__version!==T.version){$(k,T,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Z(T,S){const k=n.get(T);if(T.version>0&&k.__version!==T.version){$(k,T,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function G(T,S){const k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const rt={[Mr]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[yr]:s.MIRRORED_REPEAT},ut={[je]:s.NEAREST,[Vc]:s.NEAREST_MIPMAP_NEAREST,[Hi]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[Ps]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},St={[Yc]:s.NEVER,[Qc]:s.ALWAYS,[$c]:s.LESS,[qo]:s.LEQUAL,[jc]:s.EQUAL,[Jc]:s.GEQUAL,[Kc]:s.GREATER,[Zc]:s.NOTEQUAL};function Ot(T,S){if(S.type===un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Je||S.magFilter===Ps||S.magFilter===Hi||S.magFilter===Gn||S.minFilter===Je||S.minFilter===Ps||S.minFilter===Hi||S.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,rt[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,rt[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,rt[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==Hi&&S.minFilter!==Gn||S.type===un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(T,S){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const j=S.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const q=W(S);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[q].usedTimes++;const Mt=J[T.__cacheKey];Mt!==void 0&&(J[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(S)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return k}function $(T,S,k){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const J=Jt(T,S),q=S.source;e.bindTexture(j,T.__webglTexture,s.TEXTURE0+k);const Mt=n.get(q);if(q.version!==Mt.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const ot=Wt.getPrimaries(Wt.workingColorSpace),dt=S.colorSpace===En?null:Wt.getPrimaries(S.colorSpace),Vt=S.colorSpace===En||ot===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=_(S.image,!1,i.maxTextureSize);Q=ie(S,Q);const ft=r.convert(S.format,S.colorSpace),bt=r.convert(S.type);let Ct=M(S.internalFormat,ft,bt,S.colorSpace,S.isVideoTexture);Ot(j,S);let pt;const Ht=S.mipmaps,Nt=S.isVideoTexture!==!0,Qt=Mt.__version===void 0||J===!0,I=q.dataReady,st=D(S,Q);if(S.isDepthTexture)Ct=x(S.format===xi,S.type),Qt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Ct,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Ct,Q.width,Q.height,0,ft,bt,null));else if(S.isDataTexture)if(Ht.length>0){Nt&&Qt&&e.texStorage2D(s.TEXTURE_2D,st,Ct,Ht[0].width,Ht[0].height);for(let V=0,K=Ht.length;V<K;V++)pt=Ht[V],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(s.TEXTURE_2D,V,Ct,pt.width,pt.height,0,ft,bt,pt.data);S.generateMipmaps=!1}else Nt?(Qt&&e.texStorage2D(s.TEXTURE_2D,st,Ct,Q.width,Q.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,bt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,Q.width,Q.height,0,ft,bt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Ct,Ht[0].width,Ht[0].height,Q.depth);for(let V=0,K=Ht.length;V<K;V++)if(pt=Ht[V],S.format!==$e)if(ft!==null)if(Nt){if(I)if(S.layerUpdates.size>0){const ht=_o(pt.width,pt.height,S.format,S.type);for(const ct of S.layerUpdates){const Lt=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ct,pt.width,pt.height,1,ft,Lt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Ct,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,bt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Ct,pt.width,pt.height,Q.depth,0,ft,bt,pt.data)}else{Nt&&Qt&&e.texStorage2D(s.TEXTURE_2D,st,Ct,Ht[0].width,Ht[0].height);for(let V=0,K=Ht.length;V<K;V++)pt=Ht[V],S.format!==$e?ft!==null?Nt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(s.TEXTURE_2D,V,Ct,pt.width,pt.height,0,ft,bt,pt.data)}else if(S.isDataArrayTexture)if(Nt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Ct,Q.width,Q.height,Q.depth),I)if(S.layerUpdates.size>0){const V=_o(Q.width,Q.height,S.format,S.type);for(const K of S.layerUpdates){const ht=Q.data.subarray(K*V/Q.data.BYTES_PER_ELEMENT,(K+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ft,bt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,bt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,Q.width,Q.height,Q.depth,0,ft,bt,Q.data);else if(S.isData3DTexture)Nt?(Qt&&e.texStorage3D(s.TEXTURE_3D,st,Ct,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,bt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,Q.width,Q.height,Q.depth,0,ft,bt,Q.data);else if(S.isFramebufferTexture){if(Qt)if(Nt)e.texStorage2D(s.TEXTURE_2D,st,Ct,Q.width,Q.height);else{let V=Q.width,K=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(s.TEXTURE_2D,ht,Ct,V,K,0,ft,bt,null),V>>=1,K>>=1}}else if(Ht.length>0){if(Nt&&Qt){const V=wt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,st,Ct,V.width,V.height)}for(let V=0,K=Ht.length;V<K;V++)pt=Ht[V],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ft,bt,pt):e.texImage2D(s.TEXTURE_2D,V,Ct,ft,bt,pt);S.generateMipmaps=!1}else if(Nt){if(Qt){const V=wt(Q);e.texStorage2D(s.TEXTURE_2D,st,Ct,V.width,V.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,bt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Ct,ft,bt,Q);p(S)&&u(j),Mt.__version=q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function et(T,S,k){if(S.image.length!==6)return;const j=Jt(T,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const q=n.get(J);if(J.version!==q.__version||j===!0){e.activeTexture(s.TEXTURE0+k);const Mt=Wt.getPrimaries(Wt.workingColorSpace),ot=S.colorSpace===En?null:Wt.getPrimaries(S.colorSpace),dt=S.colorSpace===En||Mt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Vt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Vt&&!Q?ft[K]=_(S.image[K],!0,i.maxCubemapSize):ft[K]=Q?S.image[K].image:S.image[K],ft[K]=ie(S,ft[K]);const bt=ft[0],Ct=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),Ht=M(S.internalFormat,Ct,pt,S.colorSpace),Nt=S.isVideoTexture!==!0,Qt=q.__version===void 0||j===!0,I=J.dataReady;let st=D(S,bt);Ot(s.TEXTURE_CUBE_MAP,S);let V;if(Vt){Nt&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ht,bt.width,bt.height);for(let K=0;K<6;K++){V=ft[K].mipmaps;for(let ht=0;ht<V.length;ht++){const ct=V[ht];S.format!==$e?Ct!==null?Nt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,Ct,pt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Ht,ct.width,ct.height,0,Ct,pt,ct.data)}}}else{if(V=S.mipmaps,Nt&&Qt){V.length>0&&st++;const K=wt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Nt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Ct,pt,ft[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ft[K].width,ft[K].height,0,Ct,pt,ft[K].data);for(let ht=0;ht<V.length;ht++){const Lt=V[ht].image[K].image;Nt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Lt.width,Lt.height,Ct,pt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Ht,Lt.width,Lt.height,0,Ct,pt,Lt.data)}}else{Nt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,pt,ft[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Ct,pt,ft[K]);for(let ht=0;ht<V.length;ht++){const ct=V[ht];Nt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Ct,pt,ct.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Ht,Ct,pt,ct.image[K])}}}p(S)&&u(s.TEXTURE_CUBE_MAP),q.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function vt(T,S,k,j,J,q){const Mt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),dt=M(k.internalFormat,Mt,ot,k.colorSpace),Vt=n.get(S),Q=n.get(k);if(Q.__renderTarget=S,!Vt.__hasExternalTextures){const ft=Math.max(1,S.width>>q),bt=Math.max(1,S.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,q,dt,ft,bt,S.depth,0,Mt,ot,null):e.texImage2D(J,q,dt,ft,bt,0,Mt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),zt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,J,Q.__webglTexture,0,kt(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,J,Q.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(T,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=x(S.stencilBuffer,J),Mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=kt(S);zt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,q,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,T)}else{const j=S.textures;for(let J=0;J<j.length;J++){const q=j[J],Mt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),dt=M(q.internalFormat,Mt,ot,q.colorSpace),Vt=kt(S);k&&zt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,dt,S.width,S.height):zt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,dt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,dt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const J=j.__webglTexture,q=kt(S);if(S.depthTexture.format===di)zt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===xi)zt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const S=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,T)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),at(S.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),at(S.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(T,S,k){const j=n.get(T);S!==void 0&&vt(j.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Dt(T)}function le(T){const S=T.texture,k=n.get(T),j=n.get(S);T.addEventListener("dispose",b);const J=T.textures,q=T.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let dt=0;dt<S.mipmaps.length;dt++)k.__webglFramebuffer[ot][dt]=s.createFramebuffer()}else k.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)k.__webglFramebuffer[ot]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ot=0,dt=J.length;ot<dt;ot++){const Vt=n.get(J[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&zt(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const dt=J[ot];k.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const Vt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),ft=M(dt.internalFormat,Vt,Q,dt.colorSpace,T.isXRRenderTarget===!0),bt=kt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),at(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)vt(k.__webglFramebuffer[ot][dt],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else vt(k.__webglFramebuffer[ot],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,dt=J.length;ot<dt;ot++){const Vt=J[ot],Q=n.get(Vt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ot(s.TEXTURE_2D,Vt),vt(k.__webglFramebuffer,T,Vt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),p(Vt)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),Ot(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)vt(k.__webglFramebuffer[dt],T,S,s.COLOR_ATTACHMENT0,ot,dt);else vt(k.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,ot,0);p(S)&&u(ot),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Gt(T){const S=T.textures;for(let k=0,j=S.length;k<j;k++){const J=S[k];if(p(J)){const q=y(T),Mt=n.get(J).__webglTexture;e.bindTexture(q,Mt),u(q),e.unbindTexture()}}}const fe=[],O=[];function Be(T){if(T.samples>0){if(zt(T)===!1){const S=T.textures,k=T.width,j=T.height;let J=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(T),ot=S.length>1;if(ot)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const Vt=n.get(S[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,J,s.NEAREST),c===!0&&(fe.length=0,O.length=0,fe.push(s.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(fe.push(q),O.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const Vt=n.get(S[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function kt(T){return Math.min(i.maxSamples,T.samples)}function zt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function ie(T,S){const k=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Mi&&k!==En&&(Wt.getTransfer(k)===jt?(j!==$e||J!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=zt}function rp(s,t){function e(n,i=En){let r;const a=Wt.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===Qr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===No)return s.BYTE;if(n===Fo)return s.SHORT;if(n===Ni)return s.UNSIGNED_SHORT;if(n===Jr)return s.INT;if(n===Vn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===Fi)return s.HALF_FLOAT;if(n===Bo)return s.ALPHA;if(n===ko)return s.RGB;if(n===$e)return s.RGBA;if(n===zo)return s.LUMINANCE;if(n===Ho)return s.LUMINANCE_ALPHA;if(n===di)return s.DEPTH_COMPONENT;if(n===xi)return s.DEPTH_STENCIL;if(n===Go)return s.RED;if(n===ea)return s.RED_INTEGER;if(n===Vo)return s.RG;if(n===na)return s.RG_INTEGER;if(n===ia)return s.RGBA_INTEGER;if(n===us||n===ds||n===fs||n===ps)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sr||n===wr||n===Er||n===Tr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===br||n===Ar||n===Rr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===br||n===Ar)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cr||n===Pr||n===Dr||n===Lr||n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===kr||n===zr||n===Hr||n===Gr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ir)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Br)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ms||n===Vr||n===Wr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ms)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xr||n===qr||n===Yr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ms)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class ap extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ee extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=h.position.distanceTo(m.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(op)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:cp,fragmentShader:lp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class up extends qn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,d=null,f=null,g=null;const _=new hp,p=e.getContextAttributes();let u=null,y=null;const M=[],x=[],D=new Tt;let R=null;const b=new Oe;b.viewport=new Zt;const C=new Oe;C.viewport=new Zt;const w=[b,C],v=new ap;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new sr,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new sr,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new sr,M[$]=et),et.getHandSpace()};function B($){const et=x.indexOf($.inputSource);if(et===-1)return;const vt=M[et];vt!==void 0&&(vt.update($.inputSource,$.frame,l||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<M.length;$++){const et=x[$];et!==null&&(x[$]=null,M[$].disconnect(et))}P=null,U=null,_.reset(),t.setRenderTarget(u),f=null,d=null,m=null,i=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wn(f.framebufferWidth,f.framebufferHeight,{format:$e,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,vt=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?xi:di,vt=p.stencil?_i:Vn);const Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};m=new XRWebGLBinding(i,e),d=m.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Wn(d.textureWidth,d.textureHeight,{format:$e,type:pn,depthTexture:new sc(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let et=0;et<$.removed.length;et++){const vt=$.removed[et],at=x.indexOf(vt);at>=0&&(x[at]=null,M[at].disconnect(vt))}for(let et=0;et<$.added.length;et++){const vt=$.added[et];let at=x.indexOf(vt);if(at===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=x.length){x.push(vt),at=Dt;break}else if(x[Dt]===null){x[Dt]=vt,at=Dt;break}if(at===-1)break}const Rt=M[at];Rt&&Rt.connect(vt)}}const X=new A,Z=new A;function G($,et,vt){X.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);const at=X.distanceTo(Z),Rt=et.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Bt=Rt[14]/(Rt[10]-1),le=Rt[14]/(Rt[10]+1),Gt=(Rt[9]+1)/Rt[5],fe=(Rt[9]-1)/Rt[5],O=(Rt[8]-1)/Rt[0],Be=(Dt[8]+1)/Dt[0],kt=Bt*O,zt=Bt*Be,Et=at/(-O+Be),ie=Et*-O;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(Et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const wt=Bt+Et,T=le+Et,S=kt-ie,k=zt+(at-ie),j=Gt*le/T*wt,J=fe*le/T*wt;$.projectionMatrix.makePerspective(S,k,j,J,wt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,vt=$.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),v.near=C.near=b.near=et,v.far=C.far=b.far=vt,(P!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,U=v.far),b.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,v.layers.mask=b.layers.mask|C.layers.mask;const at=$.parent,Rt=v.cameras;rt(v,at);for(let Dt=0;Dt<Rt.length;Dt++)rt(Rt[Dt],at);Rt.length===2?G(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),ut($,v,at)};function ut($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$r*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let St=null;function Ot($,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Dt=0;Dt<vt.length;Dt++){const Bt=vt[Dt];let le=null;if(f!==null)le=f.getViewport(Bt);else{const fe=m.getViewSubImage(d,Bt);le=fe.viewport,Dt===0&&(t.setRenderTargetTextures(y,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(y))}let Gt=w[Dt];Gt===void 0&&(Gt=new Oe,Gt.layers.enable(Dt),Gt.viewport=new Zt,w[Dt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(le.x,le.y,le.width,le.height),Dt===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Gt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=m.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let vt=0;vt<M.length;vt++){const at=x[vt],Rt=M[vt];at!==null&&Rt!==void 0&&Rt.update(at,et,l||a)}St&&St($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Jt=new nc;Jt.setAnimationLoop(Ot),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}}const On=new tn,dp=new oe;function fp(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Qo(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,y,M,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),m(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&f(p,u,x)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,y,M):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ie&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ie&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=t.get(u),M=y.envMap,x=y.envMapRotation;M&&(p.envMap.value=M,On.copy(x),On.x*=-1,On.y*=-1,On.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),p.envMapRotation.value.setFromMatrix4(dp.makeRotationFromEuler(On)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,y,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=M*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function m(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function f(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ie&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function l(y,M){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",p));const D=M.program;n.updateUBOMapping(y,D);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const M=m();y.__bindingPointIndex=M;const x=s.createBuffer(),D=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function m(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],x=y.uniforms,D=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,b=x.length;R<b;R++){const C=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,v=C.length;w<v;w++){const P=C[w];if(f(P,R,w,D)===!0){const U=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<B.length;Y++){const X=B[Y],Z=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,U+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,x,D){const R=y.value,b=M+"_"+x;if(D[b]===void 0)return typeof R=="number"||typeof R=="boolean"?D[b]=R:D[b]=R.clone(),!0;{const C=D[b];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return D[b]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(y){const M=y.uniforms;let x=0;const D=16;for(let b=0,C=M.length;b<C;b++){const w=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,P=w.length;v<P;v++){const U=w[v],B=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Y=B.length;W<Y;W++){const X=B[W],Z=_(X),G=x%D,rt=G%Z.boundary,ut=G+rt;x+=rt,ut!==0&&D-ut<Z.storage&&(x+=D-ut),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Z.storage}}}const R=x%D;return R>0&&(x+=D-R),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function u(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:u}}class mp{constructor(t={}){const{canvas:e=nl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,u=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Rn,this.toneMappingExposure=1;const x=this;let D=!1,R=0,b=0,C=null,w=-1,v=null;const P=new Zt,U=new Zt;let B=null;const W=new xt(0);let Y=0,X=e.width,Z=e.height,G=1,rt=null,ut=null;const St=new Zt(0,0,X,Z),Ot=new Zt(0,0,X,Z);let Jt=!1;const $=new ra;let et=!1,vt=!1;const at=new oe,Rt=new oe,Dt=new A,Bt=new Zt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function fe(){return C===null?G:1}let O=n;function Be(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zr}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const N="webgl2";if(O=Be(N,E),O===null)throw Be(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,zt,Et,ie,wt,T,S,k,j,J,q,Mt,ot,dt,Vt,Q,ft,bt,Ct,pt,Ht,Nt,Qt,I;function st(){kt=new vd(O),kt.init(),Nt=new rp(O,kt),zt=new fd(O,kt,t,Nt),Et=new np(O,kt),zt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),ie=new Sd(O),wt=new Hf,T=new sp(O,kt,Et,wt,zt,Nt,ie),S=new md(x),k=new xd(x),j=new Cl(O),Qt=new ud(O,j),J=new Md(O,j,ie,Qt),q=new Ed(O,J,j,ie),Ct=new wd(O,zt,T),Q=new pd(wt),Mt=new zf(x,S,k,kt,zt,Qt,Q),ot=new fp(x,wt),dt=new Vf,Vt=new jf(kt),bt=new hd(x,S,k,Et,q,f,c),ft=new tp(x,q,zt),I=new pp(O,ie,zt,Et),pt=new dd(O,kt,ie),Ht=new yd(O,kt,ie),ie.programs=Mt.programs,x.capabilities=zt,x.extensions=kt,x.properties=wt,x.renderLists=dt,x.shadowMap=ft,x.state=Et,x.info=ie}st();const V=new up(x,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(X,Z,!1))},this.getSize=function(E){return E.set(X,Z)},this.setSize=function(E,N,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Z=N,e.width=Math.floor(E*G),e.height=Math.floor(N*G),z===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(E,N,z){X=E,Z=N,G=z,e.width=Math.floor(E*z),e.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,N,z,H){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,N,z,H),Et.viewport(P.copy(St).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,N,z,H){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,N,z,H),Et.scissor(U.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(E){Et.setScissorTest(Jt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(E=!0,N=!0,z=!0){let H=0;if(E){let F=!1;if(C!==null){const tt=C.texture.format;F=tt===ia||tt===na||tt===ea}if(F){const tt=C.texture.type,lt=tt===pn||tt===Vn||tt===Ni||tt===_i||tt===Qr||tt===ta,mt=bt.getClearColor(),gt=bt.getClearAlpha(),Pt=mt.r,It=mt.g,_t=mt.b;lt?(g[0]=Pt,g[1]=It,g[2]=_t,g[3]=gt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Pt,_[1]=It,_[2]=_t,_[3]=gt,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Vt.dispose(),wt.dispose(),S.dispose(),k.dispose(),q.dispose(),Qt.dispose(),I.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",ua),V.removeEventListener("sessionend",da),Dn.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=ie.autoReset,N=ft.enabled,z=ft.autoUpdate,H=ft.needsUpdate,F=ft.type;st(),ie.autoReset=E,ft.enabled=N,ft.autoUpdate=z,ft.needsUpdate=H,ft.type=F}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){const N=E.target;N.removeEventListener("dispose",Lt),ue(N)}function ue(E){we(E),wt.remove(E)}function we(E){const N=wt.get(E).programs;N!==void 0&&(N.forEach(function(z){Mt.releaseProgram(z)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,H,F,tt){N===null&&(N=le);const lt=F.isMesh&&F.matrixWorld.determinant()<0,mt=dc(E,N,z,H,F);Et.setMaterial(H,lt);let gt=z.index,Pt=1;if(H.wireframe===!0){if(gt=J.getWireframeAttribute(z),gt===void 0)return;Pt=2}const It=z.drawRange,_t=z.attributes.position;let Xt=It.start*Pt,te=(It.start+It.count)*Pt;tt!==null&&(Xt=Math.max(Xt,tt.start*Pt),te=Math.min(te,(tt.start+tt.count)*Pt)),gt!==null?(Xt=Math.max(Xt,0),te=Math.min(te,gt.count)):_t!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,_t.count));const se=te-Xt;if(se<0||se===1/0)return;Qt.setup(F,H,mt,z,gt);let Pe,qt=pt;if(gt!==null&&(Pe=j.get(gt),qt=Ht,qt.setIndex(Pe)),F.isMesh)H.wireframe===!0?(Et.setLineWidth(H.wireframeLinewidth*fe()),qt.setMode(O.LINES)):qt.setMode(O.TRIANGLES);else if(F.isLine){let yt=H.linewidth;yt===void 0&&(yt=1),Et.setLineWidth(yt*fe()),F.isLineSegments?qt.setMode(O.LINES):F.isLineLoop?qt.setMode(O.LINE_LOOP):qt.setMode(O.LINE_STRIP)}else F.isPoints?qt.setMode(O.POINTS):F.isSprite&&qt.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,nn=F._multiDrawCounts,Yt=F._multiDrawCount,Ve=gt?j.get(gt).bytesPerElement:1,Yn=wt.get(H).currentProgram.getUniforms();for(let Ue=0;Ue<Yt;Ue++)Yn.setValue(O,"_gl_DrawID",Ue),qt.render(yt[Ue]/Ve,nn[Ue])}else if(F.isInstancedMesh)qt.renderInstances(Xt,se,F.count);else if(z.isInstancedBufferGeometry){const yt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,nn=Math.min(z.instanceCount,yt);qt.renderInstances(Xt,se,nn)}else qt.render(Xt,se)};function $t(E,N,z){E.transparent===!0&&E.side===he&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,zi(E,N,z),E.side=Cn,E.needsUpdate=!0,zi(E,N,z),E.side=he):zi(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),u=Vt.get(z),u.init(N),M.push(u),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const tt=F.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];$t(mt,z,F),H.add(mt)}else $t(tt,z,F),H.add(tt)}),M.pop(),u=null,H},this.compileAsync=function(E,N,z=null){const H=this.compile(E,N,z);return new Promise(F=>{function tt(){if(H.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){F(E);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ge=null;function en(E){Ge&&Ge(E)}function ua(){Dn.stop()}function da(){Dn.start()}const Dn=new nc;Dn.setAnimationLoop(en),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(E){Ge=E,V.setAnimationLoop(E),E===null?Dn.stop():Dn.start()},V.addEventListener("sessionstart",ua),V.addEventListener("sessionend",da),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,C),u=Vt.get(E,M.length),u.init(N),M.push(u),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Rt),vt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,vt),p=dt.get(E,y.length),p.init(),y.push(p),V.enabled===!0&&V.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Cs(tt,N,-1/0,x.sortObjects)}Cs(E,N,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(rt,ut),Gt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Gt&&bt.addToRenderList(p,E),this.info.render.frame++,et===!0&&Q.beginShadows();const z=u.state.shadowsArray;ft.render(z,E,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,F=p.transmissive;if(u.setupLights(),N.isArrayCamera){const tt=N.cameras;if(F.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];pa(H,F,E,gt)}Gt&&bt.render(E);for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];fa(p,E,gt,gt.viewport)}}else F.length>0&&pa(H,F,E,N),Gt&&bt.render(E),fa(p,E,N);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,N),Qt.resetDefaultState(),w=-1,v=null,M.pop(),M.length>0?(u=M[M.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Cs(E,N,z,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){H&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);const lt=q.update(E),mt=E.material;mt.visible&&p.push(E,lt,mt,z,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const lt=q.update(E),mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(mt)){const gt=lt.groups;for(let Pt=0,It=gt.length;Pt<It;Pt++){const _t=gt[Pt],Xt=mt[_t.materialIndex];Xt&&Xt.visible&&p.push(E,lt,Xt,z,Bt.z,_t)}}else mt.visible&&p.push(E,lt,mt,z,Bt.z,null)}}const tt=E.children;for(let lt=0,mt=tt.length;lt<mt;lt++)Cs(tt[lt],N,z,H)}function fa(E,N,z,H){const F=E.opaque,tt=E.transmissive,lt=E.transparent;u.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),H&&Et.viewport(P.copy(H)),F.length>0&&ki(F,N,z),tt.length>0&&ki(tt,N,z),lt.length>0&&ki(lt,N,z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function pa(E,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Wn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Fi:pn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const tt=u.state.transmissionRenderTarget[H.id],lt=H.viewport||P;tt.setSize(lt.z,lt.w);const mt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&bt.render(z);const gt=x.toneMapping;x.toneMapping=Rn;const Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),et===!0&&Q.setGlobalState(x.clippingPlanes,H),ki(E,z,H),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _t=0,Xt=N.length;_t<Xt;_t++){const te=N[_t],se=te.object,Pe=te.geometry,qt=te.material,yt=te.group;if(qt.side===he&&se.layers.test(H.layers)){const nn=qt.side;qt.side=Ie,qt.needsUpdate=!0,ma(se,z,H,Pe,qt,yt),qt.side=nn,qt.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}x.setRenderTarget(mt),x.setClearColor(W,Y),Pt!==void 0&&(H.viewport=Pt),x.toneMapping=gt}function ki(E,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,tt=E.length;F<tt;F++){const lt=E[F],mt=lt.object,gt=lt.geometry,Pt=H===null?lt.material:H,It=lt.group;mt.layers.test(z.layers)&&ma(mt,N,z,gt,Pt,It)}}function ma(E,N,z,H,F,tt){E.onBeforeRender(x,N,z,H,F,tt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,N,z,H,E,tt),F.transparent===!0&&F.side===he&&F.forceSinglePass===!1?(F.side=Ie,F.needsUpdate=!0,x.renderBufferDirect(z,N,H,F,E,tt),F.side=Cn,F.needsUpdate=!0,x.renderBufferDirect(z,N,H,F,E,tt),F.side=he):x.renderBufferDirect(z,N,H,F,E,tt),E.onAfterRender(x,N,z,H,F,tt)}function zi(E,N,z){N.isScene!==!0&&(N=le);const H=wt.get(E),F=u.state.lights,tt=u.state.shadowsArray,lt=F.state.version,mt=Mt.getParameters(E,F.state,tt,N,z),gt=Mt.getProgramCacheKey(mt);let Pt=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Lt),Pt=new Map,H.programs=Pt);let It=Pt.get(gt);if(It!==void 0){if(H.currentProgram===It&&H.lightsStateVersion===lt)return _a(E,mt),It}else mt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(mt,x),It=Mt.acquireProgram(mt,gt),Pt.set(gt,It),H.uniforms=mt.uniforms;const _t=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_t.clippingPlanes=Q.uniform),_a(E,mt),H.needsLights=pc(E),H.lightsStateVersion=lt,H.needsLights&&(_t.ambientLightColor.value=F.state.ambient,_t.lightProbe.value=F.state.probe,_t.directionalLights.value=F.state.directional,_t.directionalLightShadows.value=F.state.directionalShadow,_t.spotLights.value=F.state.spot,_t.spotLightShadows.value=F.state.spotShadow,_t.rectAreaLights.value=F.state.rectArea,_t.ltc_1.value=F.state.rectAreaLTC1,_t.ltc_2.value=F.state.rectAreaLTC2,_t.pointLights.value=F.state.point,_t.pointLightShadows.value=F.state.pointShadow,_t.hemisphereLights.value=F.state.hemi,_t.directionalShadowMap.value=F.state.directionalShadowMap,_t.directionalShadowMatrix.value=F.state.directionalShadowMatrix,_t.spotShadowMap.value=F.state.spotShadowMap,_t.spotLightMatrix.value=F.state.spotLightMatrix,_t.spotLightMap.value=F.state.spotLightMap,_t.pointShadowMap.value=F.state.pointShadowMap,_t.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=It,H.uniformsList=null,It}function ga(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=_s.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function _a(E,N){const z=wt.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function dc(E,N,z,H,F){N.isScene!==!0&&(N=le),T.resetTextureUnits();const tt=N.fog,lt=H.isMeshStandardMaterial?N.environment:null,mt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mi,gt=(H.isMeshStandardMaterial?k:S).get(H.envMap||lt),Pt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_t=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let se=Rn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=x.toneMapping);const Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qt=Pe!==void 0?Pe.length:0,yt=wt.get(H),nn=u.state.lights;if(et===!0&&(vt===!0||E!==v)){const ke=E===v&&H.id===w;Q.setState(H,E,ke)}let Yt=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==nn.state.version||yt.outputColorSpace!==mt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==gt||H.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Pt||yt.vertexTangents!==It||yt.morphTargets!==_t||yt.morphNormals!==Xt||yt.morphColors!==te||yt.toneMapping!==se||yt.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,yt.__version=H.version);let Ve=yt.currentProgram;Yt===!0&&(Ve=zi(H,N,F));let Yn=!1,Ue=!1,wi=!1;const re=Ve.getUniforms(),Ke=yt.uniforms;if(Et.useProgram(Ve.program)&&(Yn=!0,Ue=!0,wi=!0),H.id!==w&&(w=H.id,Ue=!0),Yn||v!==E){Et.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),sl(at),rl(at),re.setValue(O,"projectionMatrix",at)):re.setValue(O,"projectionMatrix",E.projectionMatrix),re.setValue(O,"viewMatrix",E.matrixWorldInverse);const mn=re.map.cameraPosition;mn!==void 0&&mn.setValue(O,Dt.setFromMatrixPosition(E.matrixWorld)),zt.logarithmicDepthBuffer&&re.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&re.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Ue=!0,wi=!0)}if(F.isSkinnedMesh){re.setOptional(O,F,"bindMatrix"),re.setOptional(O,F,"bindMatrixInverse");const ke=F.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),re.setValue(O,"boneTexture",ke.boneTexture,T))}F.isBatchedMesh&&(re.setOptional(O,F,"batchingTexture"),re.setValue(O,"batchingTexture",F._matricesTexture,T),re.setOptional(O,F,"batchingIdTexture"),re.setValue(O,"batchingIdTexture",F._indirectTexture,T),re.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&re.setValue(O,"batchingColorTexture",F._colorsTexture,T));const Ei=z.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Ct.update(F,z,Ve),(Ue||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,re.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ke.envMap.value=gt,Ke.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),Ue&&(re.setValue(O,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&fc(Ke,wi),tt&&H.fog===!0&&ot.refreshFogUniforms(Ke,tt),ot.refreshMaterialUniforms(Ke,H,G,Z,u.state.transmissionRenderTarget[E.id]),_s.upload(O,ga(yt),Ke,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_s.upload(O,ga(yt),Ke,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&re.setValue(O,"center",F.center),re.setValue(O,"modelViewMatrix",F.modelViewMatrix),re.setValue(O,"normalMatrix",F.normalMatrix),re.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ke=H.uniformsGroups;for(let mn=0,gn=ke.length;mn<gn;mn++){const xa=ke[mn];I.update(xa,Ve),I.bind(xa,Ve)}}return Ve}function fc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function pc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,z){wt.get(E.texture).__webglTexture=N,wt.get(E.depthTexture).__webglTexture=z;const H=wt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const z=wt.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){C=E,R=N,b=z;let H=!0,F=null,tt=!1,lt=!1;if(E){const gt=wt.get(E);if(gt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(gt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(gt.__hasExternalTextures)T.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const _t=E.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&wt.has(_t)&&(E.width!==_t.image.width||E.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const It=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[N])?F=It[N][z]:F=It[N],tt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?F=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?F=It[z]:F=It,P.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest}else P.copy(St).multiplyScalar(G).floor(),U.copy(Ot).multiplyScalar(G).floor(),B=Jt;if(Et.bindFramebuffer(O.FRAMEBUFFER,F)&&H&&Et.drawBuffers(E,F),Et.viewport(P),Et.scissor(U),Et.setScissorTest(B),tt){const gt=wt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,gt.__webglTexture,z)}else if(lt){const gt=wt.get(E.texture),Pt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Pt)}w=-1},this.readRenderTargetPixels=function(E,N,z,H,F,tt,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Et.bindFramebuffer(O.FRAMEBUFFER,mt);try{const gt=E.texture,Pt=gt.format,It=gt.type;if(!zt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&z>=0&&z<=E.height-F&&O.readPixels(N,z,H,F,Nt.convert(Pt),Nt.convert(It),tt)}finally{const gt=C!==null?wt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,H,F,tt,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=E.texture,Pt=gt.format,It=gt.type;if(!zt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-H&&z>=0&&z<=E.height-F){Et.bindFramebuffer(O.FRAMEBUFFER,mt);const _t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.bufferData(O.PIXEL_PACK_BUFFER,tt.byteLength,O.STREAM_READ),O.readPixels(N,z,H,F,Nt.convert(Pt),Nt.convert(It),0);const Xt=C!==null?wt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,Xt);const te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await il(O,te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,tt),O.deleteBuffer(_t),O.deleteSync(te),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,z=0){E.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(E.image.width*H),tt=Math.floor(E.image.height*H),lt=N!==null?N.x:0,mt=N!==null?N.y:0;T.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,lt,mt,F,tt),Et.unbindTexture()},this.copyTextureToTexture=function(E,N,z=null,H=null,F=0){E.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let tt,lt,mt,gt,Pt,It,_t,Xt,te;const se=E.isCompressedTexture?E.mipmaps[F]:E.image;z!==null?(tt=z.max.x-z.min.x,lt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,gt=z.min.x,Pt=z.min.y,It=z.isBox3?z.min.z:0):(tt=se.width,lt=se.height,mt=se.depth||1,gt=0,Pt=0,It=0),H!==null?(_t=H.x,Xt=H.y,te=H.z):(_t=0,Xt=0,te=0);const Pe=Nt.convert(N.format),qt=Nt.convert(N.type);let yt;N.isData3DTexture?(T.setTexture3D(N,0),yt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),yt=O.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),yt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const nn=O.getParameter(O.UNPACK_ROW_LENGTH),Yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ve=O.getParameter(O.UNPACK_SKIP_PIXELS),Yn=O.getParameter(O.UNPACK_SKIP_ROWS),Ue=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);const wi=E.isDataArrayTexture||E.isData3DTexture,re=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Ke=wt.get(E),Ei=wt.get(N),ke=wt.get(Ke.__renderTarget),mn=wt.get(Ei.__renderTarget);Et.bindFramebuffer(O.READ_FRAMEBUFFER,ke.__webglFramebuffer),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let gn=0;gn<mt;gn++)wi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(E).__webglTexture,F,It+gn),E.isDepthTexture?(re&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,F,te+gn),O.blitFramebuffer(gt,Pt,tt,lt,_t,Xt,tt,lt,O.DEPTH_BUFFER_BIT,O.NEAREST)):re?O.copyTexSubImage3D(yt,F,_t,Xt,te+gn,gt,Pt,tt,lt):O.copyTexSubImage2D(yt,F,_t,Xt,te+gn,gt,Pt,tt,lt);Et.bindFramebuffer(O.READ_FRAMEBUFFER,null),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else re?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(yt,F,_t,Xt,te,tt,lt,mt,Pe,qt,se.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,F,_t,Xt,te,tt,lt,mt,Pe,se.data):O.texSubImage3D(yt,F,_t,Xt,te,tt,lt,mt,Pe,qt,se):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,_t,Xt,tt,lt,Pe,qt,se.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,_t,Xt,se.width,se.height,Pe,se.data):O.texSubImage2D(O.TEXTURE_2D,F,_t,Xt,tt,lt,Pe,qt,se);O.pixelStorei(O.UNPACK_ROW_LENGTH,nn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue),F===0&&N.generateMipmaps&&O.generateMipmap(yt),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z=null,H=null,F=0){return E.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,z,H,F)},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){R=0,b=0,C=null,Et.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class oa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(t),this.density=e}clone(){return new oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class lc extends yi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ms=new A,ys=new A,xo=new oe,Pi=new bs,cs=new Ts,rr=new A,vo=new A;class _p extends xe{constructor(t=new Ce,e=new lc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ms.fromBufferAttribute(e,i-1),ys.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ms.distanceTo(ys);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=r,t.ray.intersectsSphere(cs)===!1)return;xo.copy(i).invert(),Pi.copy(t.ray).applyMatrix4(xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const u=h.getX(_),y=h.getX(_+1),M=ls(this,t,Pi,c,u,y);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),u=ls(this,t,Pi,c,_,p);u&&e.push(u)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const u=ls(this,t,Pi,c,_,_+1);u&&e.push(u)}if(this.isLineLoop){const _=ls(this,t,Pi,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ls(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Ms.fromBufferAttribute(a,i),ys.fromBufferAttribute(a,r),e.distanceSqToSegment(Ms,ys,rr,vo)>n)return;rr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(rr);if(!(c<t.near||c>t.far))return{distance:c,point:vo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class xp extends Re{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new A,h=new Tt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let m=0,d=3;m<=e;m++,d+=3){const f=n+m/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class At extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],m=[],d=[],f=[];let g=0;const _=[],p=n/2;let u=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){const x=new A,D=new A;let R=0;const b=(e-t)/n;for(let C=0;C<=r;C++){const w=[],v=C/r,P=v*(e-t)+t;for(let U=0;U<=i;U++){const B=U/i,W=B*c+o,Y=Math.sin(W),X=Math.cos(W);D.x=P*Y,D.y=-v*n+p,D.z=P*X,m.push(D.x,D.y,D.z),x.set(Y,b,X).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-v),w.push(g++)}_.push(w)}for(let C=0;C<i;C++)for(let w=0;w<r;w++){const v=_[w][C],P=_[w+1][C],U=_[w+1][C+1],B=_[w][C+1];(t>0||w!==0)&&(h.push(v,P,B),R+=3),(e>0||w!==r-1)&&(h.push(P,U,B),R+=3)}l.addGroup(u,R,0),u+=R}function M(x){const D=g,R=new Tt,b=new A;let C=0;const w=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=i;U++)m.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),g++;const P=g;for(let U=0;U<=i;U++){const W=U/i*c+o,Y=Math.cos(W),X=Math.sin(W);b.x=w*X,b.y=p*v,b.z=w*Y,m.push(b.x,b.y,b.z),d.push(0,v,0),R.x=Y*.5+.5,R.y=X*.5*v+.5,f.push(R.x,R.y),g++}for(let U=0;U<i;U++){const B=D+U,W=P+U;x===!0?h.push(W,W+1,B):h.push(W+1,W,B),C+=3}l.addGroup(u,C,x===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new At(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _e extends At{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new A,x=new A,D=new A;for(let R=0;R<e.length;R+=3)f(e[R+0],M),f(e[R+1],x),f(e[R+2],D),c(M,x,D,y)}function c(y,M,x,D){const R=D+1,b=[];for(let C=0;C<=R;C++){b[C]=[];const w=y.clone().lerp(x,C/R),v=M.clone().lerp(x,C/R),P=R-C;for(let U=0;U<=P;U++)U===0&&C===R?b[C][U]=w:b[C][U]=w.clone().lerp(v,U/P)}for(let C=0;C<R;C++)for(let w=0;w<2*(R-C)-1;w++){const v=Math.floor(w/2);w%2===0?(d(b[C][v+1]),d(b[C+1][v]),d(b[C][v])):(d(b[C][v+1]),d(b[C+1][v+1]),d(b[C+1][v]))}}function l(y){const M=new A;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const y=new A;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=p(y)/2/Math.PI+.5,D=u(y)/Math.PI+.5;a.push(x,1-D)}g(),m()}function m(){for(let y=0;y<a.length;y+=6){const M=a[y+0],x=a[y+2],D=a[y+4],R=Math.max(M,x,D),b=Math.min(M,x,D);R>.9&&b<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),D<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const y=new A,M=new A,x=new A,D=new A,R=new Tt,b=new Tt,C=new Tt;for(let w=0,v=0;w<r.length;w+=9,v+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),R.set(a[v+0],a[v+1]),b.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),D.copy(y).add(M).add(x).divideScalar(3);const P=p(D);_(R,v+0,y,P),_(b,v+2,M,P),_(C,v+4,x,P)}}function _(y,M,x,D){D<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=D/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class ca extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ca(t.radius,t.detail)}}class Ui extends Rs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ui(t.radius,t.detail)}}class Tn extends Ce{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let m=t;const d=(e-t)/i,f=new A,g=new Tt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const u=r+p/n*a;f.x=m*Math.cos(u),f.y=m*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}m+=d}for(let _=0;_<i;_++){const p=_*(n+1);for(let u=0;u<n;u++){const y=u+p,M=y,x=y+n+1,D=y+n+2,R=y+1;o.push(M,x,R),o.push(x,D,R)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ce extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],m=new A,d=new A,f=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const y=[],M=u/n;let x=0;u===0&&a===0?x=.5/e:u===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const R=D/e;m.x=-t*Math.cos(i+R*r)*Math.sin(a+M*o),m.y=t*Math.cos(a+M*o),m.z=t*Math.sin(i+R*r)*Math.sin(a+M*o),g.push(m.x,m.y,m.z),d.copy(m).normalize(),_.push(d.x,d.y,d.z),p.push(R+x,1-M),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<e;y++){const M=h[u][y+1],x=h[u][y],D=h[u+1][y],R=h[u+1][y+1];(u!==0||a>0)&&f.push(M,x,R),(u!==n-1||c<Math.PI)&&f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hn extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new A,m=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,p=f/n*Math.PI*2;m.x=(t+e*Math.cos(p))*Math.cos(_),m.y=(t+e*Math.cos(p))*Math.sin(_),m.z=e*Math.sin(p),o.push(m.x,m.y,m.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(m,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,u=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,p,y),a.push(p,u,y)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class de extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class la extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ar=new oe,Mo=new A,yo=new A;class hc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mo),yo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yo),e.updateMatrixWorld(),ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const So=new oe,Di=new A,or=new A;class vp extends hc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Di.setFromMatrixPosition(t.matrixWorld),n.position.copy(Di),or.copy(n.position),or.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-Di.x,-Di.y,-Di.z),So.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So)}}class wo extends la{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mp extends hc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eo extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yp extends la{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const To=new oe;class Sp{constructor(t,e,n=0,i=1/0){this.ray=new bs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return To.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(To),this}intersectObject(t,e=!0,n=[]){return Kr(t,this,n,e),n.sort(bo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Kr(t[i],this,n,e);return n.sort(bo),n}}function bo(s,t){return s.distance-t.distance}function Kr(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Kr(r[a],t,e,!0)}}class Ao{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wp extends qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zr);const me={ultramarines:{id:"ultramarines",name:"Adeptus Astartes",subname:"Ultramarines XIII Legion",motto:"Courage and Honour!",icon:"🦅",themeColor:"#1e5aa8",accentColor:"#d4af37",glowColor:"#00d2ff",eyeColor:"#ff2222",metalColor:"#8a95a5",clothColor:"#8b1c1c",baseRimColor:"#1e5aa8",projectileType:"bolter",magicType:"warp_blue",stratagems:{overcharge:{name:"Fury of the First",cost:1,desc:"+5 Attack Damage & +2 Armor Piercing on your next combat this turn."},heal:{name:"Apothecary Narthecium",cost:2,desc:"Restore +10 Wounds (HP) to a selected friendly unit."},orbital:{name:"Orbital Strike Lance",cost:3,desc:"Call down a Battle Barge lance strike on an enemy non-King unit for 9 Damage."}},units:{p:{role:"p",name:"Primaris Intercessor",title:"Battleline Squad",weapon:"Bolt Rifle & Astartes Chainsword",rangedType:"bolter",meleeType:"chainsword",finisherName:"Chainsword Evisceration",maxHp:14,atkDice:2,atkBase:3,armor:2,counterBase:4,scale:.92,lore:"Transhuman shock troops clad in Mk X Tacticus power armour, firing mass-reactive bolts before closing with roaring chainswords."},r:{role:"r",name:"Redemptor Dreadnought",title:"Ancients of War",weapon:"Heavy Onslaught Gatling & Redemptor Fist",rangedType:"gatling",meleeType:"titan_fist",finisherName:"Hydraulic Dreadnought Crush",maxHp:30,atkDice:2,atkBase:7,armor:4,counterBase:7,scale:1.25,lore:"A towering cybernetic sarcophagus housing a fallen hero. Even in death, he still serves."},n:{role:"n",name:"Jump Pack Intercessor",title:"Skyhammer Assault",weapon:"Twin Plasma Pistol & Power Sword",rangedType:"plasma",meleeType:"powersword",finisherName:"Meteor Thruster Cleave",maxHp:18,atkDice:2,atkBase:5,armor:2,counterBase:5,scale:1,lore:"Hurtling into the fray on roaring turbine thrusters, leaping over battlelines to strike from the skies."},b:{role:"b",name:"Primaris Librarian",title:"Psyker of the Librarius",weapon:"Force Stave & Smite Warp-Lightning",rangedType:"psychic_blue",meleeType:"forcestave",finisherName:"Empyric Brain-Burst",maxHp:18,atkDice:2,atkBase:6,armor:2,armorPierce:2,counterBase:5,scale:1.02,lore:"Wielding the raw power of the Immaterium through a psychic hood, unleashing searing bolts of warp lightning."},q:{role:"q",name:"Terminator Champion",title:"First Company Veteran",weapon:"Relic Storm Bolter & Burning Blade",rangedType:"bolter_heavy",meleeType:"relic_blade",finisherName:"Emperor’s Executioner",maxHp:28,atkDice:3,atkBase:6,armor:3,armorPierce:2,counterBase:8,scale:1.15,lore:"Clad in indomitable tactical dreadnought plate, wielding a relic blade that burns with solar fire."},k:{role:"k",name:"Chapter Master Calgar",title:"Lord of Macragge",weapon:"Gauntlets of Ultramar",rangedType:"bolter_heavy",meleeType:"power_gauntlets",finisherName:"Wrath of Ultramar",maxHp:34,atkDice:3,atkBase:5,armor:4,armorPierce:2,counterBase:8,scale:1.2,lore:"Supreme commander of the Ultramarines, crushing foes beneath twin master-crafted power gauntlets."}}},chaos:{id:"chaos",name:"Heretic Astartes",subname:"Black Legion of Chaos",motto:"Let the Galaxy Burn!",icon:"✴️",themeColor:"#1a1a1f",accentColor:"#c98a2c",glowColor:"#ff2a00",eyeColor:"#ff5500",metalColor:"#5c4a38",clothColor:"#7a0a18",baseRimColor:"#9e1b1b",projectileType:"chaos_bolter",magicType:"warp_purple",stratagems:{overcharge:{name:"Dark Pact of Khorne",cost:1,desc:"+5 Attack Damage & +2 Armor Piercing on your next combat this turn."},heal:{name:"Flesh-Stitching Daemonforge",cost:2,desc:"Restore +10 Wounds (HP) to a selected friendly unit."},orbital:{name:"Blackstone Warp-Rift",cost:3,desc:"Tear open a localized Warp Rift on an enemy non-King unit for 9 Damage."}},units:{p:{role:"p",name:"Chaos Legionary",title:"Veterans of the Long War",weapon:"Corrupted Bolter & Brutal Chainaxe",rangedType:"chaos_bolter",meleeType:"chainaxe",finisherName:"Blood for the Blood God",maxHp:14,atkDice:2,atkBase:3,armor:2,counterBase:4,scale:.92,lore:"Ten-thousand-year-old traitors driven by hatred for the Corpse-Emperor and thirst for slaughter."},r:{role:"r",name:"Chaos Helbrute",title:"Tormented Daemon-Engine",weapon:"Multi-Melta & Helbrute Hammer",rangedType:"melta",meleeType:"titan_fist",finisherName:"Frenzied Pulverization",maxHp:30,atkDice:2,atkBase:7,armor:4,counterBase:7,scale:1.25,lore:"A maddened warrior fused into a flesh-metal sarcophagus, driven insane by agony and warp corruption."},n:{role:"n",name:"Warp Talon Raptor",title:"Nightmare from Above",weapon:"Hellforged Lightning Claws",rangedType:"warp_fire",meleeType:"claws",finisherName:"Shredding Talon Dive",maxHp:18,atkDice:2,atkBase:5,armor:2,counterBase:5,scale:1,lore:"Mutated jump-pack predators who tear through dimensional barriers to butcher their prey."},b:{role:"b",name:"Master of Possession",title:"Chaos Sorcerer",weapon:"Staff of Ruin & Doombolt",rangedType:"psychic_purple",meleeType:"forcestave",finisherName:"Soul-Flaying Hex",maxHp:18,atkDice:2,atkBase:6,armor:2,armorPierce:2,counterBase:5,scale:1.02,lore:"Channeling forbidden pacts with the Dark Gods to hurl screaming bolts of mutating warpfire."},q:{role:"q",name:"Daemon Prince Herald",title:"Chosen of the Pantheon",weapon:"Hellforged Greataxe & Warp Bolter",rangedType:"warp_fire",meleeType:"relic_blade",finisherName:"Damned Decapitation",maxHp:28,atkDice:3,atkBase:6,armor:3,armorPierce:2,counterBase:8,scale:1.16,lore:"An ascendant champion wreathed in dark flames and wielding a daemon-bound blade of ruin."},k:{role:"k",name:"Warmaster Abaddon",title:"The Despoiler",weapon:"Talon of Horus & Drach’nyen",rangedType:"chaos_bolter",meleeType:"relic_blade",finisherName:"End of Empires",maxHp:34,atkDice:3,atkBase:5,armor:4,armorPierce:2,counterBase:8,scale:1.22,lore:"Supreme Warmaster of Chaos, bearing the claw of Horus and the screaming daemon sword Drach’nyen."}}},orks:{id:"orks",name:"Ork Waaagh!",subname:"Goff Clan Warhorde",motto:"WAAAGH!!",icon:"💀",themeColor:"#2d4c1e",accentColor:"#d9381e",glowColor:"#ff8800",eyeColor:"#ff0000",metalColor:"#55585c",clothColor:"#3a2b1c",skinColor:"#4c7c29",baseRimColor:"#4c7c29",projectileType:"dakka",magicType:"waaagh_green",stratagems:{overcharge:{name:"Call Da WAAAGH!",cost:1,desc:"+5 Attack Damage & +2 Armor Piercing on your next combat this turn."},heal:{name:"Painboy Cybork Patch",cost:2,desc:"Restore +10 Wounds (HP) to a selected friendly unit."},orbital:{name:"Rokkit Kroozer Bombardment",cost:3,desc:"Rain erratic rokkits from orbit onto an enemy non-King unit for 9 Damage."}},units:{p:{role:"p",name:"Ork Boy",title:"Green Tide Mob",weapon:"Slugga & Big Choppa",rangedType:"dakka",meleeType:"choppa",finisherName:"Brutal Krumpin’",maxHp:14,atkDice:2,atkBase:3,armor:2,counterBase:4,scale:.94,lore:"Hulking, muscle-bound greenskins who live only for loud shootas, heavy choppas, and a proppa scrap."},r:{role:"r",name:"Deff Dread",title:"Stompy Mek-Construct",weapon:"Kustom Mega-Blasta & Dread Klaws",rangedType:"dakka_heavy",meleeType:"titan_fist",finisherName:"Klaw Rip & Stomp",maxHp:30,atkDice:2,atkBase:7,armor:4,counterBase:7,scale:1.26,lore:"A belching, smoke-spewing iron walker wired directly to a ferocious Ork pilot inside."},n:{role:"n",name:"Stormboy",title:"Rokkit-Pack Maniac",weapon:"Strapped Rokkit & Power Klaw",rangedType:"dakka",meleeType:"choppa",finisherName:"Full-Throttle Rokkit Slam",maxHp:18,atkDice:2,atkBase:5,armor:2,counterBase:5,scale:1,lore:"Strapping volatile fuel-tanks to their backs to blast across the battlefield in a trail of black smoke."},b:{role:"b",name:"Weirdboy",title:"Waaagh! Conduit",weapon:"Copper Staff & ’Eadbanger Blast",rangedType:"waaagh_green",meleeType:"forcestave",finisherName:"Green Lightning Pop",maxHp:18,atkDice:2,atkBase:6,armor:2,armorPierce:2,counterBase:5,scale:1.02,lore:"Crackling with the collective psychic energy of the Waaagh!, vomiting lethal green lightning bolts."},q:{role:"q",name:"Meganob Boss",title:"Walking Tank",weapon:"Twin Killsaws & Kombi-Skorcha",rangedType:"dakka_heavy",meleeType:"power_gauntlets",finisherName:"Killsaw Disassembly",maxHp:28,atkDice:3,atkBase:6,armor:3,armorPierce:2,counterBase:8,scale:1.16,lore:"Encased in slabs of salvaged battle-tank armor and armed with buzzing industrial killsaws."},k:{role:"k",name:"Warboss Ghazghkull",title:"Prophet of the Waaagh!",weapon:"Gork’s Klaw & Mork’s Roar",rangedType:"dakka_heavy",meleeType:"titan_fist",finisherName:"Headbutt & Klaw Crush",maxHp:34,atkDice:3,atkBase:5,armor:4,armorPierce:2,counterBase:8,scale:1.25,lore:"The biggest, meanest Warboss in the galaxy, unstoppable in piston-driven mega-armour."}}},necrons:{id:"necrons",name:"Necron Dynasties",subname:"Szarekhan Undying Legions",motto:"The Stars Are Ours Once More.",icon:"☥",themeColor:"#252b29",accentColor:"#b88b4a",glowColor:"#00ff55",eyeColor:"#00ff66",metalColor:"#8d9994",clothColor:"#133822",baseRimColor:"#00cc44",projectileType:"gauss",magicType:"gauss_beam",stratagems:{overcharge:{name:"Disintegration Capacitors",cost:1,desc:"+5 Attack Damage & +2 Armor Piercing on your next combat this turn."},heal:{name:"Reanimation Protocols",cost:2,desc:"Restore +10 Wounds (HP) to a selected friendly unit."},orbital:{name:"Doomsday Ark Cannon",cost:3,desc:"Fire a sub-atomic Doomsday beam on an enemy non-King unit for 9 Damage."}},units:{p:{role:"p",name:"Necron Warrior",title:"Immortal Phalanx",weapon:"Gauss Flayer & Bayonet",rangedType:"gauss",meleeType:"hyperphase",finisherName:"Atomizing Gauss Flay",maxHp:14,atkDice:2,atkBase:3,armor:2,counterBase:4,scale:.92,lore:"Soulless living-metal androids whose Gauss Flayers strip targets down atom by atom."},r:{role:"r",name:"Canoptek Doomstalker",title:"Sentinel Construct",weapon:"Doomsday Blaster & Construct Limbs",rangedType:"gauss_heavy",meleeType:"titan_fist",finisherName:"Obliteration Beam",maxHp:30,atkDice:2,atkBase:7,armor:4,counterBase:7,scale:1.25,lore:"A towering war-construct crowned with a devastating Doomsday plasma-gauss cannon."},n:{role:"n",name:"Skorpekh Destroyer",title:"Annihilation Cult",weapon:"Hyperphase Threshers",rangedType:"gauss",meleeType:"hyperphase",finisherName:"Dimensional Phase-Reap",maxHp:18,atkDice:2,atkBase:5,armor:2,counterBase:5,scale:1.02,lore:"obsessed with the extermination of all organic life, flickering across space with glowing phase-blades."},b:{role:"b",name:"Technomancer Cryptek",title:"Master of the Aeons",weapon:"Staff of Light & Eldritch Lance",rangedType:"gauss_heavy",meleeType:"forcestave",finisherName:"Chrono-Disintegration",maxHp:18,atkDice:2,atkBase:6,armor:2,armorPierce:2,counterBase:5,scale:1.02,lore:"Wielding hyper-advanced science indistinguishable from sorcery to unravel matter and time."},q:{role:"q",name:"Lychguard Warden",title:"Royal Executioner",weapon:"Warscythe & Dispersion Shield",rangedType:"gauss_heavy",meleeType:"hyperphase",finisherName:"Hyperphase Bisection",maxHp:28,atkDice:3,atkBase:6,armor:3,armorPierce:2,counterBase:8,scale:1.15,lore:"Incorruptible bodyguards of the nobility whose Warscythes slice effortlessly through tank armor."},k:{role:"k",name:"Necron Overlord",title:"Phaeron of the Dynasty",weapon:"Voidscythe & Resurrection Orb",rangedType:"gauss_heavy",meleeType:"hyperphase",finisherName:"Verdict of the Silent King",maxHp:34,atkDice:3,atkBase:5,armor:4,armorPierce:2,counterBase:8,scale:1.22,lore:"An ancient ruler of the galaxy clad in resplendent necrodermis, commanding legions of undying machines."}}}},Ep={p:"Pawn • Infantry",r:"Rook • Heavy Walker",n:"Knight • Jump Assault",b:"Bishop • Psyker / Cryptek",q:"Queen • Champion",k:"King • Warlord"};class Tp{constructor(t="wargame",e="ultramarines",n="chaos"){this.mode=t,this.factions={w:e,b:n},this.reset()}reset(){this.board=Array.from({length:8},()=>Array(8).fill(null)),this.turn="w",this.turnNumber=1,this.pieceIdCounter=1,this.enPassantTarget=null,this.gameOver=!1,this.winner=null,this.winReason="",this.moveHistory=[],this.captured={w:[],b:[]},this.cp={w:2,b:2},this.activeBuffs={w:{overcharge:!1},b:{overcharge:!1}};const t=["r","n","b","q","k","b","n","r"];for(let e=0;e<8;e++)this.board[0][e]=this.createPiece("b",t[e],0,e),this.board[1][e]=this.createPiece("b","p",1,e);for(let e=0;e<8;e++)this.board[6][e]=this.createPiece("w","p",6,e),this.board[7][e]=this.createPiece("w",t[e],7,e)}createPiece(t,e,n,i){const r=this.factions[t],a=me[r].units[e];return{id:`${t}_${e}_${this.pieceIdCounter++}`,side:t,type:e,faction:r,name:a.name,maxHp:a.maxHp,hp:a.maxHp,atkDice:a.atkDice,atkBase:a.atkBase,armor:a.armor,armorPierce:a.armorPierce||0,counterBase:a.counterBase,hasMoved:!1,r:n,c:i}}setFactions(t,e){this.factions.w=t,this.factions.b=e;for(let n=0;n<8;n++)for(let i=0;i<8;i++){const r=this.board[n][i];if(r){const a=this.factions[r.side],o=me[a].units[r.type],c=r.hp/r.maxHp;r.faction=a,r.name=o.name,r.maxHp=o.maxHp,r.hp=Math.max(1,Math.round(o.maxHp*c)),r.atkDice=o.atkDice,r.atkBase=o.atkBase,r.armor=o.armor,r.armorPierce=o.armorPierce||0,r.counterBase=o.counterBase}}}setMode(t){this.mode=t}getPiece(t,e){return t<0||t>7||e<0||e>7?null:this.board[t][e]}getAllPieces(t=null){const e=[];for(let n=0;n<8;n++)for(let i=0;i<8;i++){const r=this.board[n][i];r&&(!t||r.side===t)&&e.push(r)}return e}findKing(t,e=this.board){for(let n=0;n<8;n++)for(let i=0;i<8;i++){const r=e[n][i];if(r&&r.side===t&&r.type==="k")return{r:n,c:i,piece:r}}return null}isSquareAttacked(t,e,n,i=this.board){for(let r=0;r<8;r++)for(let a=0;a<8;a++){const o=i[r][a];if(!o||o.side!==n)continue;if(this.getPseudoLegalMovesForPiece(r,a,i,!0).some(l=>l.toR===t&&l.toC===e))return!0}return!1}isInCheck(t,e=this.board){const n=this.findKing(t,e);if(!n)return!0;const i=t==="w"?"b":"w";return this.isSquareAttacked(n.r,n.c,i,e)}getPseudoLegalMovesForPiece(t,e,n=this.board,i=!1){var d;const r=n[t][e];if(!r)return[];const a=[],{side:o,type:c}=r,l=o==="w"?-1:1,h=o==="w"?6:1,m=(f,g)=>f>=0&&f<=7&&g>=0&&g<=7;if(c==="p"){if(!i){const f=t+l;if(m(f,e)&&!n[f][e]){a.push({fromR:t,fromC:e,toR:f,toC:e,isAttack:!1});const g=t+l*2;t===h&&m(g,e)&&!n[g][e]&&a.push({fromR:t,fromC:e,toR:g,toC:e,isAttack:!1,isDoublePawn:!0})}}for(const f of[-1,1]){const g=t+l,_=e+f;if(!m(g,_))continue;const p=n[g][_];if(i)a.push({fromR:t,fromC:e,toR:g,toC:_,isAttack:!0});else if(p&&p.side!==o)a.push({fromR:t,fromC:e,toR:g,toC:_,isAttack:!0,targetPiece:p});else if(this.enPassantTarget&&this.enPassantTarget.r===g&&this.enPassantTarget.c===_){const u=(d=n[this.enPassantTarget.pawnR])==null?void 0:d[this.enPassantTarget.pawnC];u&&u.side!==o&&a.push({fromR:t,fromC:e,toR:g,toC:_,isAttack:!0,isEnPassant:!0,targetPiece:u,epR:this.enPassantTarget.pawnR,epC:this.enPassantTarget.pawnC})}}}else if(c==="n"){const f=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[g,_]of f){const p=t+g,u=e+_;if(!m(p,u))continue;const y=n[p][u];y?y.side!==o&&a.push({fromR:t,fromC:e,toR:p,toC:u,isAttack:!0,targetPiece:y}):i||a.push({fromR:t,fromC:e,toR:p,toC:u,isAttack:!1})}}else if(c==="k"){for(let f=-1;f<=1;f++)for(let g=-1;g<=1;g++){if(f===0&&g===0)continue;const _=t+f,p=e+g;if(!m(_,p))continue;const u=n[_][p];u?u.side!==o&&a.push({fromR:t,fromC:e,toR:_,toC:p,isAttack:!0,targetPiece:u}):i||a.push({fromR:t,fromC:e,toR:_,toC:p,isAttack:!1})}if(!i&&!r.hasMoved&&!this.isInCheck(o,n)){const f=o==="w"?"b":"w",g=n[t][7];g&&g.type==="r"&&g.side===o&&!g.hasMoved&&!n[t][5]&&!n[t][6]&&!this.isSquareAttacked(t,5,f,n)&&!this.isSquareAttacked(t,6,f,n)&&a.push({fromR:t,fromC:e,toR:t,toC:6,isAttack:!1,isCastle:"kingside",rookFromC:7,rookToC:5});const _=n[t][0];_&&_.type==="r"&&_.side===o&&!_.hasMoved&&!n[t][1]&&!n[t][2]&&!n[t][3]&&!this.isSquareAttacked(t,3,f,n)&&!this.isSquareAttacked(t,2,f,n)&&a.push({fromR:t,fromC:e,toR:t,toC:2,isAttack:!1,isCastle:"queenside",rookFromC:0,rookToC:3})}}else{const f=[];(c==="r"||c==="q")&&f.push([-1,0],[1,0],[0,-1],[0,1]),(c==="b"||c==="q")&&f.push([-1,-1],[-1,1],[1,-1],[1,1]);for(const[g,_]of f){let p=t+g,u=e+_,y=t,M=e;for(;m(p,u);){const x=n[p][u];if(!x)i||a.push({fromR:t,fromC:e,toR:p,toC:u,isAttack:!1});else{x.side!==o&&a.push({fromR:t,fromC:e,toR:p,toC:u,isAttack:!0,targetPiece:x,fallbackR:y,fallbackC:M});break}y=p,M=u,p+=g,u+=_}}}return a}getLegalMoves(t,e){const n=this.getPiece(t,e);if(!n||n.side!==this.turn||this.gameOver)return[];const i=this.getPseudoLegalMovesForPiece(t,e,this.board,!1);return this.mode==="classic"?i.filter(r=>!this.wouldLeaveKingInCheck(r,n.side)):i.filter(r=>n.type==="k"&&n.hp<=12?!this.wouldLeaveKingInCheck(r,n.side):!0)}wouldLeaveKingInCheck(t,e){const n=this.board.map(r=>r.slice()),i=n[t.fromR][t.fromC];return n[t.fromR][t.fromC]=null,t.isEnPassant&&(n[t.epR][t.epC]=null),n[t.toR][t.toC]=i,this.isInCheck(e,n)}getAllLegalMovesForSide(t=this.turn){const e=this.turn;this.turn=t;const n=[];for(let i=0;i<8;i++)for(let r=0;r<8;r++){const a=this.board[i][r];if(a&&a.side===t){const o=this.getLegalMoves(i,r);n.push(...o)}}return this.turn=e,n}executeMove(t,e="q"){const n=this.board[t.fromR][t.fromC];if(!n)return null;const i=t.isEnPassant?t.epR:t.toR,r=t.isEnPassant?t.epC:t.toC,a=t.isAttack?this.board[i][r]:null,o=t.fallbackR!==void 0?t.fallbackR:t.fromR,c=t.fallbackC!==void 0?t.fallbackC:t.fromC,l={move:t,attackerId:n.id,attackerSnapshot:{...n},defenderId:a?a.id:null,defenderSnapshot:a?{...a}:null,fromR:t.fromR,fromC:t.fromC,toR:t.toR,toC:t.toC,finalAttackerR:t.toR,finalAttackerC:t.toC,isAttack:!!a,isCastle:t.isCastle||null,rookMove:null,combat:null,promotedTo:null,gameOver:!1,winner:null,winReason:""};if(this.enPassantTarget=null,t.isDoublePawn){const d=n.side==="w"?-1:1;this.enPassantTarget={r:t.fromR+d,c:t.fromC,pawnR:t.toR,pawnC:t.toC}}if(a){const d=this.activeBuffs[n.side].overcharge;if(this.activeBuffs[n.side].overcharge=!1,this.mode==="classic"){const f=Array.from({length:n.atkDice},()=>Math.floor(Math.random()*6)+1),g=a.hp;a.hp=0,this.board[t.fromR][t.fromC]=null,t.isEnPassant&&(this.board[t.epR][t.epC]=null),this.board[t.toR][t.toC]=n,n.r=t.toR,n.c=t.toC,n.hasMoved=!0,this.captured[a.side].push(a),l.combat={mode:"classic",overcharged:d,diceRolls:f,rawAttack:g,armorMitigated:0,damageDealt:g,isCrit:!0,defenderSurvived:!1,defenderRemainingHp:0,counterAttack:null,attackerDiedInCounter:!1,attackerRemainingHp:n.hp}}else{const f=Array.from({length:n.atkDice},()=>Math.floor(Math.random()*6)+1),g=f.reduce((w,v)=>w+v,0),_=f.includes(6),p=_?2:0,u=d?5:0,y=g+n.atkBase+p+u,M=(n.armorPierce||0)+(d?2:0),x=Math.max(0,a.armor-M),D=Math.max(2,y-x);a.hp=Math.max(0,a.hp-D);const R=a.hp>0;let b=null,C=!1;if(!R)this.board[t.fromR][t.fromC]=null,t.isEnPassant&&(this.board[t.epR][t.epC]=null),this.board[t.toR][t.toC]=n,n.r=t.toR,n.c=t.toC,n.hasMoved=!0,this.captured[a.side].push(a);else{const w=Math.floor(Math.random()*6)+1,v=w+a.counterBase,P=Math.max(0,n.armor-(a.armorPierce||0)),U=Math.max(1,v-P);n.type==="k"?n.hp=Math.max(1,n.hp-U):n.hp=Math.max(0,n.hp-U),b={die:w,damage:U,defenderName:a.name},n.hp<=0?(C=!0,this.board[t.fromR][t.fromC]=null,this.captured[n.side].push(n),l.finalAttackerR=o,l.finalAttackerC=c):(this.board[t.fromR][t.fromC]=null,this.board[o][c]=n,n.r=o,n.c=c,n.hasMoved=!0,l.finalAttackerR=o,l.finalAttackerC=c)}l.combat={mode:"wargame",overcharged:d,diceRolls:f,rawAttack:y,armorMitigated:x,damageDealt:D,isCrit:_,defenderSurvived:R,defenderRemainingHp:a.hp,counterAttack:b,attackerDiedInCounter:C,attackerRemainingHp:n.hp}}}else if(this.board[t.fromR][t.fromC]=null,this.board[t.toR][t.toC]=n,n.r=t.toR,n.c=t.toC,n.hasMoved=!0,t.isCastle){const d=this.board[t.fromR][t.rookFromC];d&&(this.board[t.fromR][t.rookFromC]=null,this.board[t.fromR][t.rookToC]=d,d.r=t.fromR,d.c=t.rookToC,d.hasMoved=!0,l.rookMove={rookId:d.id,fromR:t.fromR,fromC:t.rookFromC,toR:t.fromR,toC:t.rookToC})}const h=n.side==="w"?0:7;n.hp>0&&n.type==="p"&&n.r===h&&this.board[n.r][n.c]===n&&(this.promotePiece(n,e),l.promotedTo={type:n.type,name:n.name,maxHp:n.maxHp,hp:n.hp});const m=this.turn==="w"?"b":"w";return this.turn=m,m==="w"&&this.turnNumber++,this.cp[m]=Math.min(6,this.cp[m]+1),this.activeBuffs[m].overcharge=!1,this.evaluateGameEnd(),l.gameOver=this.gameOver,l.winner=this.winner,l.winReason=this.winReason,this.moveHistory.push(l),l}promotePiece(t,e="q"){const n=this.factions[t.side],i=me[n].units[e];t.type=e,t.name=i.name,t.maxHp=i.maxHp,t.hp=i.maxHp,t.atkDice=i.atkDice,t.atkBase=i.atkBase,t.armor=i.armor,t.armorPierce=i.armorPierce||0,t.counterBase=i.counterBase}useOverchargeStratagem(t=this.turn){return this.mode!=="wargame"||this.cp[t]<1||this.activeBuffs[t].overcharge?!1:(this.cp[t]-=1,this.activeBuffs[t].overcharge=!0,!0)}useHealStratagem(t,e,n=this.turn){if(this.mode!=="wargame"||this.cp[n]<2)return null;const i=this.getPiece(t,e);if(!i||i.side!==n||i.hp>=i.maxHp)return null;this.cp[n]-=2;const r=i.hp;return i.hp=Math.min(i.maxHp,i.hp+10),{pieceId:i.id,pieceName:i.name,r:t,c:e,healedAmount:i.hp-r,newHp:i.hp,maxHp:i.maxHp}}useOrbitalStratagem(t,e,n=this.turn){if(this.mode!=="wargame"||this.cp[n]<3)return null;const i=this.getPiece(t,e);if(!i||i.side===n||i.type==="k")return null;this.cp[n]-=3;const r=9;i.hp=Math.max(0,i.hp-r);const a=i.hp<=0;return a&&(this.board[t][e]=null,this.captured[i.side].push(i),this.evaluateGameEnd()),{pieceId:i.id,pieceName:i.name,r:t,c:e,damage:r,killed:a,remainingHp:i.hp}}evaluateGameEnd(){const t=this.findKing("w"),e=this.findKing("b");if(!t){this.gameOver=!0,this.winner="b",this.winReason="Regicide! White Warlord Slain in Combat";return}if(!e){this.gameOver=!0,this.winner="w",this.winReason="Regicide! Enemy Warlord Slain in Combat";return}this.getAllLegalMovesForSide(this.turn).length===0&&(this.gameOver=!0,this.isInCheck(this.turn)?(this.winner=this.turn==="w"?"b":"w",this.winReason="Checkmate! Enemy Warlord Cornered"):(this.winner="draw",this.winReason="Stalemate on the Battlefield"))}chooseAIMove(t="medium"){if(this.gameOver)return null;const e=this.turn,n=this.getAllLegalMovesForSide(e);if(n.length===0)return null;let i=null;if(this.mode==="wargame"&&t!=="easy"){const l=this.findKing(e);if(l&&l.piece.hp<=l.piece.maxHp-10&&this.cp[e]>=2){const h=this.useHealStratagem(l.r,l.c,e);h&&(i={type:"heal",data:h})}else this.cp[e]>=2&&!this.activeBuffs[e].overcharge&&n.some(m=>m.isAttack)&&(this.useOverchargeStratagem(e),i={type:"overcharge"})}if(t==="easy"){const l=n.filter(h=>h.isAttack);return l.length>0&&Math.random()<.65?{move:l[Math.floor(Math.random()*l.length)],aiStratagemEvent:i}:{move:n[Math.floor(Math.random()*n.length)],aiStratagemEvent:i}}const r={p:100,n:320,b:340,r:520,q:950,k:1e4};let a=-1/0,o=[];for(const l of n){const h=this.board[l.fromR][l.fromC];let m=0;const d=Math.abs(3.5-l.toR)+Math.abs(3.5-l.toC);if(m+=(7-d)*4,h.type==="p"){const f=e==="w"?6-l.toR:l.toR-1;m+=f*8}if(l.isAttack&&l.targetPiece){const f=l.targetPiece,g=r[f.type]||100;if(this.mode==="classic")m+=g-r[h.type]*.12;else{const _=h.atkDice*3.5+h.atkBase+(this.activeBuffs[e].overcharge?5:0),p=Math.max(0,f.armor-(h.armorPierce||0)),u=Math.max(2,_-p);if(u>=f.hp)m+=g*1.4;else{const y=u/f.maxHp;m+=g*y*.65;const M=Math.max(1,3.5+f.counterBase-h.armor);M>=h.hp&&h.type!=="k"?m-=r[h.type]*.9:m-=M/h.maxHp*r[h.type]*.3}}}if(t==="hard"){const f=e==="w"?"b":"w",g=this.board.map(_=>_.slice());g[l.fromR][l.fromC]=null,g[l.toR][l.toC]=h,this.isSquareAttacked(l.toR,l.toC,f,g)&&(m-=r[h.type]*(this.mode==="classic"?.55:.25))}m+=(Math.random()-.5)*6,m>a?(a=m,o=[l]):Math.abs(m-a)<4&&o.push(l)}return{move:o[Math.floor(Math.random()*o.length)]||n[0],aiStratagemEvent:i}}}const Ro={type:"change"},ha={type:"start"},uc={type:"end"},hs=new bs,Co=new wn,bp=Math.cos(70*el.DEG2RAD),ve=new A,Le=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cr=1e-6;class Ap extends wp{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Xn,this._lastTargetPosition=new A,this._quat=new Xn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ao,this._sphericalDelta=new Ao,this._scale=1,this._panOffset=new A,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new A,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cp.bind(this),this._onPointerDown=Rp.bind(this),this._onPointerUp=Pp.bind(this),this._onContextMenu=Op.bind(this),this._onMouseWheel=Ip.bind(this),this._onKeyDown=Up.bind(this),this._onTouchStart=Np.bind(this),this._onTouchMove=Fp.bind(this),this._onMouseDown=Dp.bind(this),this._onMouseMove=Lp.bind(this),this._interceptControlDown=Bp.bind(this),this._interceptControlUp=kp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ro),this.update(),this.state=Kt.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Le:n>Math.PI&&(n-=Le),i<-Math.PI?i+=Le:i>Math.PI&&(i-=Le),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ve.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(hs.origin.copy(this.object.position),hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hs.direction))<bp?this.object.lookAt(this.target):(Co.setFromNormalAndCoplanarPoint(this.object.up,this.target),hs.intersectPlane(Co,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cr||this._lastTargetPosition.distanceToSquared(this.target)>cr?(this.dispatchEvent(Ro),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Le/60*this.autoRotateSpeed*t:Le/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ve.copy(i).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Le*this._rotateDelta.x/e.clientHeight),this._rotateUp(Le*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Le*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Le*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Le*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Le*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Le*this._rotateDelta.x/e.clientHeight),this._rotateUp(Le*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Rp(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Cp(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Pp(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uc),this.state=Kt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dp(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Kt.DOLLY;break;case hi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}break;case hi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(ha)}function Lp(s){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ip(s){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(s.preventDefault(),this.dispatchEvent(ha),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(uc))}function Up(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Np(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Kt.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Kt.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(ha)}function Fp(s){switch(this._trackPointer(s),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Kt.NONE}}function Op(s){this.enabled!==!1&&s.preventDefault()}function Bp(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kp(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class zp{constructor(){this.sharedGeometries={baseCylinder:new At(.43,.49,.11,28),baseInner:new At(.4,.4,.12,24),selectRing:new Tn(.5,.57,36),rivet:new ce(.014,6,6),skull:new ce(.038,8,8)},this.sharedGeometries.selectRing.rotateX(-Math.PI/2)}createMaterials(t){const e=me[t];return{armor:new de({color:new xt(e.themeColor),roughness:t==="necrons"?.26:.36,metalness:t==="necrons"?.88:.62}),armorSecondary:new de({color:new xt(e.themeColor).multiplyScalar(.72),roughness:.45,metalness:.55}),trim:new de({color:new xt(e.accentColor),roughness:.24,metalness:.92}),metal:new de({color:new xt(e.metalColor),roughness:.32,metalness:.88}),darkMetal:new de({color:1579808,roughness:.48,metalness:.8}),cloth:new de({color:new xt(e.clothColor),roughness:.82,metalness:.08,side:he}),parchment:new de({color:15129797,roughness:.85,metalness:.05,side:he}),wax:new de({color:11145506,roughness:.4,metalness:.2}),skin:new de({color:new xt(e.skinColor||"#c99b72"),roughness:.62,metalness:.05}),glow:new de({color:new xt(e.glowColor),emissive:new xt(e.glowColor),emissiveIntensity:2.6,roughness:.15}),eyes:new de({color:new xt(e.eyeColor),emissive:new xt(e.eyeColor),emissiveIntensity:3.2}),bone:new de({color:14471870,roughness:.52,metalness:.12}),hazard:new de({color:15051032,roughness:.45,metalness:.35}),baseRim:new de({color:new xt(e.baseRimColor),roughness:.45,metalness:.35}),baseTop:new de({color:2500912,roughness:.88,metalness:.18})}}createUnitMesh(t){const{side:e,type:n,faction:i}=t,a=me[i].units[n],o=this.createMaterials(i),c=new ee;c.userData={pieceId:t.id,side:e,type:n,faction:i},this.buildScenicBase(c,n,i,o);const l=new pe({color:e==="w"?2284936:16729156,side:he,transparent:!0,opacity:.85}),h=new L(this.sharedGeometries.selectRing,l);h.position.y=.02,c.add(h);const m=new ee,d=n==="k"?.2:n==="q"?.17:.12;m.position.y=d;const f=a.scale||1;m.scale.setScalar(f),c.add(m);const g={root:c,bodyPivot:m,torso:new ee,head:new ee,leftArm:new ee,rightArm:new ee,leftLeg:new ee,rightLeg:new ee,muzzlePoint:new xe,bladeTip:new xe,bladeBase:new xe,thrusters:[],chainswordTeeth:[],orbitingShards:[],gatlingBarrel:null,hpRing:h,mats:o,baseY:d,baseScale:f,animPhase:Math.random()*Math.PI*2};return n==="r"?this.buildSculptedWalkerRook(g,i,o):n==="n"&&i==="necrons"?this.buildSkorpekhDestroyer(g,o):this.buildSculptedWarrior(g,n,i,o),c.traverse(_=>{_.isMesh&&_!==h&&(_.castShadow=!0,_.receiveShadow=!0)}),c.rotation.y=e==="w"?0:Math.PI,c.userData.defaultRotY=c.rotation.y,c.userData.rig=g,c}buildScenicBase(t,e,n,i){const r=new L(this.sharedGeometries.baseCylinder,i.baseRim);r.position.y=.055,t.add(r);const a=new L(this.sharedGeometries.baseInner,i.baseTop);a.position.y=.062,t.add(a);const o=e==="k"||e==="q"?3:2;for(let l=0;l<o;l++){const h=new L(new it(.28-l*.05,.045,.24-l*.04),i.baseTop);h.position.set((l-.5)*.08,.11+l*.03,(l%2===0?1:-1)*.05),h.rotation.y=l*.7,t.add(h)}const c=this.createMiniSkull(i.bone);if(c.position.set(.22,.13,.18),c.rotation.set(-.2,.5,.2),t.add(c),n==="necrons")for(let l=0;l<2;l++){const h=new L(new _e(.032,.14,5),i.glow);h.position.set(-.24+l*.08,.16,-.18),h.rotation.z=.25-l*.4,t.add(h)}}createMiniSkull(t){const e=new ee,n=new L(this.sharedGeometries.skull,t),i=new L(new it(.04,.03,.04),t);return i.position.set(0,-.025,-.015),e.add(n,i),e}createPuritySeal(t){const e=new ee,n=new L(new At(.024,.024,.012,8),t.wax);n.rotation.x=Math.PI/2,e.add(n);for(const i of[-.01,.01]){const r=new L(new it(.022,.09,.004),t.parchment);r.position.set(i,-.045,-.002),r.rotation.z=i*4,e.add(r)}return e}buildSculptedWalkerRook(t,e,n){const{bodyPivot:i,torso:r,head:a,leftArm:o,rightArm:c,leftLeg:l,rightLeg:h,muzzlePoint:m,bladeTip:d,bladeBase:f}=t;l.position.set(-.2,.3,0),h.position.set(.2,.3,0),[l,h].forEach((C,w)=>{const v=w===0?-1:1,P=new L(new At(.06,.06,.14,10),n.metal);P.rotation.z=Math.PI/2,C.add(P);const U=new L(new it(.13,.16,.14),n.darkMetal);U.position.set(0,-.08,.02),U.rotation.x=-.2,C.add(U);const B=new L(new it(.17,.2,.18),n.armor);B.position.set(0,-.19,-.01),C.add(B);const W=new L(new it(.18,.05,.2),n.trim);W.position.set(0,-.11,-.01),C.add(W);const Y=new L(new At(.02,.02,.22,6),n.metal);Y.position.set(v*.09,-.16,.06),C.add(Y);const X=new L(new it(.2,.06,.24),n.darkMetal);X.position.set(0,-.28,-.03),C.add(X);for(const Z of[-.35,0,.35]){const G=new L(new it(.05,.05,.12),n.trim);G.position.set(Math.sin(Z)*.08,-.285,-.15),G.rotation.y=-Z,C.add(G)}i.add(C)});const g=new L(new it(.32,.12,.24),n.darkMetal);g.position.set(0,.34,0),i.add(g);const _=new L(new it(.14,.18,.04),n.cloth);if(_.position.set(0,.25,-.13),i.add(_),r.position.set(0,.58,0),i.add(r),e==="necrons"){const C=new L(new At(.12,.18,.56,10),n.metal);r.add(C);for(let U=0;U<4;U++){const B=new L(new hn(.2-U*.015,.035,8,16,Math.PI),n.armor);B.position.set(0,-.1+U*.09,.04),B.rotation.x=Math.PI/2+.2,r.add(B)}const w=new L(new Ui(.15,1),n.glow);w.position.set(0,.04,-.08),r.add(w),t.orbitingShards.push(w);const v=new L(new it(.22,.18,.68),n.armor);v.position.set(0,.38,-.1),r.add(v);const P=new L(new At(.065,.085,.78,12),n.darkMetal);P.rotation.x=Math.PI/2,P.position.set(0,.38,-.24),r.add(P);for(let U=0;U<5;U++){const B=new L(new hn(.085,.018,6,14),n.glow);B.position.set(0,.38,-.05-U*.11),r.add(B)}}else{const C=new L(new it(.58,.48,.4),n.armor);r.add(C);for(const U of[-.19,.19]){const B=new L(new it(.18,.42,.08),n.armor);B.position.set(U,0,-.2),B.rotation.y=U>0?.15:-.15,r.add(B);const W=new L(new it(.19,.05,.09),n.trim);W.position.set(U,.16,-.2),r.add(W)}const w=new L(new it(.24,.34,.1),n.trim);w.position.set(0,.02,-.19),r.add(w);const v=new L(new it(.18,.07,.11),n.darkMetal);v.position.set(0,.09,-.195),r.add(v);const P=new L(new it(.14,.032,.12),n.eyes);P.position.set(0,.09,-.198),r.add(P);for(const U of[-.16,.16]){const B=new L(new At(.08,.09,.34,10),n.darkMetal);B.position.set(U,.04,.24),r.add(B);const W=new L(new At(.04,.045,.32,8),n.metal);W.position.set(U,.28,.24),r.add(W);const Y=new L(new At(.052,.04,.05,8),n.trim);Y.position.set(U,.44,.24),r.add(Y)}if(e==="ultramarines"){const U=this.createPuritySeal(n);U.position.set(-.2,-.05,-.25),r.add(U)}else if(e==="chaos")for(const U of[-.22,-.08,.08,.22]){const B=new L(new _e(.032,.24,6),n.trim);B.position.set(U,.34,-.04),B.rotation.z=-U*.6,r.add(B)}else if(e==="orks"){const U=new L(new it(.42,.14,.16),n.metal);U.position.set(0,-.14,-.23),r.add(U);for(let B=-2;B<=2;B++){const W=new L(new _e(.032,.09,4),n.bone);W.position.set(B*.075,-.05,-.28),r.add(W)}}}r.add(a),o.position.set(-.38,.06,0),r.add(o);const p=new L(new it(.2,.24,.28),n.armor);o.add(p);const u=new L(new it(.21,.06,.29),n.trim);u.position.y=.09,o.add(u);const y=new ee;y.position.set(-.02,-.06,-.26),o.add(y),t.gatlingBarrel=y;for(let C=0;C<6;C++){const w=C/6*Math.PI*2,v=new L(new At(.02,.02,.44,6),n.metal);v.rotation.x=Math.PI/2,v.position.set(Math.cos(w)*.048,Math.sin(w)*.048,0),y.add(v)}const M=new L(new At(.075,.075,.05,12),n.trim);M.rotation.x=Math.PI/2,M.position.z=-.16,y.add(M);const x=new L(new ce(.045,8,8),n.glow);x.position.set(-.02,-.06,-.49),o.add(x),m.position.set(-.02,-.06,-.54),o.add(m),c.position.set(.38,.06,0),r.add(c);const D=new L(new it(.2,.24,.28),n.armor);c.add(D);const R=new L(new it(.22,.2,.34),n.armor);R.position.set(.03,-.08,-.18),c.add(R);const b=new L(new it(.23,.21,.06),n.trim);b.position.set(.03,-.08,-.32),c.add(b);for(const[C,w]of[[-.06,.06],[.06,.06],[-.06,-.06],[.06,-.06]]){const v=new L(new _e(.032,.18,4),n.glow);v.rotation.x=-Math.PI/2,v.position.set(.03+C,-.08+w,-.43),c.add(v)}f.position.set(.03,-.08,-.25),d.position.set(.03,-.08,-.52),c.add(f,d)}buildSkorpekhDestroyer(t,e){const{bodyPivot:n,torso:i,head:r,leftArm:a,rightArm:o,leftLeg:c,rightLeg:l,muzzlePoint:h,bladeTip:m,bladeBase:d}=t;[-.7,.7,Math.PI].forEach((_,p)=>{const u=p===0?c:p===1?l:new ee;n.add(u),u.position.set(Math.sin(_)*.14,.26,Math.cos(_)*.12);const y=new L(new At(.03,.025,.24,6),e.metal);y.position.set(Math.sin(_)*.08,.02,Math.cos(_)*.08),y.rotation.z=-Math.sin(_)*.6,u.add(y);const M=new L(new _e(.035,.32,6),e.armor);M.rotation.x=Math.PI,M.position.set(Math.sin(_)*.16,-.14,Math.cos(_)*.16),u.add(M)});const g=new L(new ce(.1,10,10),e.glow);g.position.set(0,.28,0),n.add(g),i.position.set(0,.46,0),n.add(i),this.buildDetailedTorsoAndHead(t,"n","necrons",e),a.position.set(-.24,.1,0),o.position.set(.24,.1,0),i.add(a,o),[a,o].forEach((_,p)=>{const u=p===0?-1:1,y=new L(new it(.14,.14,.18),e.trim);_.add(y);const M=new L(new At(.03,.03,.24,6),e.metal);M.position.set(u*.04,-.1,-.1),M.rotation.x=.7,_.add(M);const x=new L(new it(.024,.46,.14),e.glow);x.position.set(u*.04,-.12,-.28),x.rotation.x=Math.PI/3,_.add(x);const D=new L(new it(.032,.44,.05),e.darkMetal);D.position.set(u*.04,-.11,-.24),D.rotation.x=Math.PI/3,_.add(D)}),h.position.set(0,-.12,-.45),a.add(h),d.position.set(.04,-.05,-.18),m.position.set(.04,-.25,-.48),o.add(d,m)}buildSculptedWarrior(t,e,n,i){const{bodyPivot:r,torso:a,leftArm:o,rightArm:c,leftLeg:l,rightLeg:h}=t;l.position.set(-.115,.3,0),h.position.set(.115,.3,0),[l,h].forEach(g=>{if(n==="necrons"){const _=new L(new At(.032,.028,.14,8),i.metal);_.position.y=-.05;const p=new L(new ce(.038,8,8),i.trim);p.position.y=-.12;const u=new L(new At(.038,.025,.16,8),i.armor);u.position.y=-.2;const y=new L(new it(.08,.05,.16),i.metal);y.position.set(0,-.27,-.03),g.add(_,p,u,y)}else{const _=new L(new At(.068,.062,.14,10),i.armorSecondary);_.position.y=-.05;const p=new L(new ce(.058,8,8),i.trim);p.position.set(0,-.12,-.035),p.scale.set(1.1,1,.7);const u=new L(new At(.065,.085,.16,10),i.armor);u.position.y=-.2;const y=new L(new it(.115,.075,.2),i.darkMetal);y.position.set(0,-.265,-.035);const M=new L(new ce(.058,8,8),i.armor);M.position.set(0,-.265,-.11),M.scale.set(1,.65,1),g.add(_,p,u,y,M)}r.add(g)});const m=new L(new At(.12,.135,.1,10),i.darkMetal);m.position.set(0,.33,0),r.add(m);const d=new L(new it(.08,.065,.04),i.trim);d.position.set(0,.33,-.13),r.add(d),a.position.set(0,.48,0),r.add(a),this.buildDetailedTorsoAndHead(t,e,n,i);const f=e==="k"||e==="q"?.23:.195;o.position.set(-f,.1,0),c.position.set(f,.1,0),a.add(o,c),this.buildPauldronAndArm(o,-1,e,n,i),this.buildPauldronAndArm(c,1,e,n,i),this.attachWeapons(t,e,n,i)}buildDetailedTorsoAndHead(t,e,n,i){const{torso:r,head:a,thrusters:o}=t,c=e==="k"||e==="q",l=c?.34:.28,h=new L(new it(l,.28,.21),i.armor);r.add(h);const m=new L(new At(.11,.125,.08,12,1,!0,-Math.PI*.75,Math.PI*1.5),i.trim);if(m.position.set(0,.15,.01),r.add(m),n==="ultramarines"){const d=this.createMiniSkull(i.trim);d.position.set(0,.04,-.115),r.add(d);for(const g of[-1,1])for(let _=0;_<3;_++){const p=new L(new it(.09-_*.02,.024,.025),i.trim);p.position.set(g*(.065+_*.01),.055-_*.026,-.11),p.rotation.z=g*(.22-_*.08),r.add(p)}const f=this.createPuritySeal(i);f.position.set(-.09,-.04,-.115),r.add(f)}else if(n==="chaos"){for(let f=0;f<4;f++){const g=new L(new it(.18,.022,.025),i.trim);g.position.set(0,.03,-.11),g.rotation.z=f*Math.PI/4,r.add(g)}const d=new L(new ce(.03,8,8),i.glow);d.position.set(0,.03,-.12),r.add(d)}else if(n==="orks"){const d=new L(new it(l*.85,.14,.04),i.metal);d.position.set(0,.03,-.1),r.add(d);const f=new L(new _e(.04,.1,4),i.trim);f.position.set(0,.03,-.13),f.rotation.x=Math.PI/2,r.add(f)}else if(n==="necrons"){for(let f=-1;f<=1;f++){const g=new L(new it(.19,.024,.22),i.glow);g.position.set(0,.03+f*.055,0),r.add(g)}const d=new L(new it(.05,.16,.23),i.trim);d.position.set(0,.02,0),r.add(d)}if(e==="b"||e==="q"||e==="k"){const d=new L(new it(.15,.3,.025),i.parchment);d.position.set(0,-.22,-.115),r.add(d)}if(c||e==="b"){const d=new ee;d.position.set(0,.1,.12),d.rotation.x=.22;for(let f=-1;f<=1;f++){const g=new L(new it(.15,.54,.028),i.cloth);g.position.set(f*.12,-.24,Math.abs(f)*-.02),g.rotation.y=f*.18,d.add(g)}r.add(d)}if(a.position.set(0,.22,-.01),r.add(a),n==="orks"){const d=new L(new ce(.1,10,10),i.skin);a.add(d);const f=new L(new it(.14,.04,.09),i.skin);f.position.set(0,.035,-.065),a.add(f);const g=new L(new it(.145,.075,.11),i.metal);g.position.set(0,-.045,-.065),a.add(g);for(const u of[-.048,.048]){const y=new L(new _e(.02,.075,5),i.bone);y.position.set(u,-.005,-.115),y.rotation.x=.2,a.add(y)}const _=new L(new ce(.104,10,8,0,Math.PI*2,0,Math.PI*.5),i.darkMetal);a.add(_);const p=new L(new _e(.025,.11,6),i.metal);p.position.set(0,.14,0),a.add(p)}else if(n==="necrons"){const d=new L(new At(.075,.065,.14,8),i.trim);d.position.y=.02,a.add(d);const f=new L(new it(.07,.06,.08),i.metal);if(f.position.set(0,-.055,-.03),a.add(f),c||e==="b"){const g=new L(new it(.18,.18,.035),i.trim);g.position.set(0,.13,.02),a.add(g);const _=new L(new ce(.035,8,8),i.glow);_.position.set(0,.15,-.01),a.add(_)}}else{const d=new L(new ce(.102,12,12),i.armor);a.add(d);const f=new L(new it(.038,.045,.17),i.trim);f.position.set(0,.085,0),a.add(f);const g=new L(new _e(.078,.11,4),i.armor);g.rotation.x=-Math.PI/2,g.rotation.z=Math.PI/4,g.position.set(0,-.025,-.075),a.add(g);for(const _ of[-.098,.098]){const p=new L(new At(.03,.03,.03,8),i.metal);p.rotation.z=Math.PI/2,p.position.set(_,-.01,0),a.add(p)}if(n==="chaos"){for(const _ of[-1,1]){const p=new L(new At(.022,.032,.1,6),i.bone);p.position.set(_*.095,.05,-.01),p.rotation.z=-_*.85,a.add(p);const u=new L(new _e(.022,.14,6),i.bone);u.position.set(_*.14,.12,-.03),u.rotation.z=-_*.25,u.rotation.x=.3,a.add(u)}if(c){const _=new L(new At(.022,.028,.07,6),i.trim);_.position.set(0,.13,0);const p=new L(new _e(.055,.2,8),i.cloth);p.position.set(0,.24,.02),p.rotation.x=-.25,a.add(_,p)}}else if(n==="ultramarines"&&c){const _=new L(new it(.24,.11,.035),i.cloth);_.position.set(0,.15,0);const p=new L(new it(.22,.03,.045),i.trim);p.position.set(0,.1,0),a.add(_,p)}}for(const d of[-.038,.038]){const f=new L(new it(.034,.018,.035),i.eyes);f.position.set(d,.012,-.092),f.rotation.z=d>0?-.15:.15,a.add(f)}if(e==="b"){const d=new L(new ce(.135,12,10,0,Math.PI*2,0,Math.PI*.55),i.trim);d.position.set(0,.02,.025),d.rotation.x=-.35,a.add(d)}if(e==="n")if(n==="orks"){const d=new L(new At(.09,.11,.44,12),i.trim);d.position.set(0,.08,.16);const f=new L(new _e(.09,.18,12),i.hazard);f.position.set(0,.39,.16);const g=new L(new ce(.075,8,8),i.glow);g.position.set(0,-.15,.16),r.add(d,f,g),o.push(g)}else for(const d of[-.12,.12]){const f=new L(new At(.088,.075,.38,12),i.armor);f.position.set(d,.09,.15);const g=new L(new hn(.088,.016,6,12),i.trim);g.rotation.x=Math.PI/2,g.position.set(d,.27,.15);const _=new L(new ce(.06,8,8),i.glow);_.position.set(d,-.11,.15),r.add(f,g,_),o.push(_)}else if(n!=="necrons"){const d=new L(new it(.22,.25,.13),i.armor);d.position.set(0,.04,.14),r.add(d);for(const f of[-.12,.12]){const g=new L(new At(.032,.032,.12,8),i.metal);g.position.set(f,.16,.14),g.rotation.z=f>0?-.45:.45;const _=new L(new ce(.052,10,10),i.trim);_.position.set(f*1.25,.21,.14),r.add(g,_)}}if(c){const d=e==="k"?.32:.26;if(n==="ultramarines"){const f=new L(new hn(.13,.02,8,20),i.trim);f.position.set(0,d,.11),r.add(f);for(let g=0;g<7;g++){const _=g/6*Math.PI-Math.PI/2,p=new L(new _e(.016,.08,4),i.trim);p.position.set(Math.sin(_)*.16,d+Math.cos(_)*.16,.11),p.rotation.z=-_,r.add(p)}}else if(n==="chaos")for(const f of[-.11,.11]){const g=new L(new At(.01,.018,.34,6),i.metal);g.position.set(f,d,.12),g.rotation.z=f*-.8;const _=this.createMiniSkull(i.bone);_.position.set(f*1.15,d+.12,.12),r.add(g,_)}else if(n==="orks"){const f=new L(new At(.022,.022,.38,8),i.metal);f.position.set(0,d,.12);const g=new L(new it(.24,.12,.05),i.trim);g.position.set(0,d+.16,.12),r.add(f,g)}else if(n==="necrons"){const f=new L(new hn(.15,.022,8,16,Math.PI),i.trim);f.position.set(0,d-.04,.08);const g=new L(new ce(.068,12,12),i.glow);g.position.set(0,d+.04,.08),r.add(f,g)}}}buildPauldronAndArm(t,e,n,i,r){const a=n==="k"||n==="q"?1.15:1,o=new L(new ce(.115*a,12,10,0,Math.PI*2,0,Math.PI*.62),r.armor);o.position.y=.025,o.rotation.z=e*-.25,t.add(o);const c=new L(new hn(.108*a,.02,8,16),r.trim);if(c.rotation.x=Math.PI/2,c.rotation.y=e*-.25,t.add(c),i==="chaos"||i==="orks"){const m=new L(new _e(.024,.11,6),r.trim);m.position.set(e*.06,.13,0),m.rotation.z=e*-.4,t.add(m)}const l=new L(new At(.052,.046,.22,8),i==="orks"?r.skin:r.armor);l.position.set(0,-.1,-.065),l.rotation.x=Math.PI/3,t.add(l);const h=new L(new At(.056,.056,.05,8),r.trim);h.position.set(0,-.15,-.12),h.rotation.x=Math.PI/3,t.add(h)}attachWeapons(t,e,n,i){const{leftArm:r,rightArm:a,muzzlePoint:o,bladeTip:c,bladeBase:l}=t;if(e==="q"&&(n==="necrons"||n==="ultramarines")){const h=new ee;h.position.set(-.06,-.12,-.16);const m=new L(new it(.035,.42,.26),i.armor),d=new L(new it(.042,.45,.28),i.trim);d.position.x=.005;const f=new L(new Ui(.055,0),i.glow);f.position.x=-.025,h.add(m,d,f),r.add(h),o.position.set(0,-.12,-.34),r.add(o)}else{const h=new ee;h.position.set(0,-.14,-.22),r.add(h);const m=n==="necrons",d=m?.36:.26,f=new L(new it(.055,.095,d),i.darkMetal);h.add(f);const g=new L(new it(.062,.065,d*.75),n==="chaos"?i.trim:i.armor);if(g.position.y=.01,h.add(g),m){const _=new L(new At(.022,.022,.3,8),i.glow);_.rotation.x=Math.PI/2,_.position.set(0,-.03,-.04);const p=new L(new it(.015,.08,.16),i.trim);p.position.set(0,-.06,-.18),h.add(_,p)}else{const _=new L(new it(.04,.11,.055),i.metal);_.position.set(0,-.08,-.03),_.rotation.x=.25;const p=new L(new At(.018,.018,.11,8),i.metal);p.rotation.x=Math.PI/2,p.position.set(0,.065,0);const u=new L(new At(.022,.022,.1,8),i.metal);u.rotation.x=Math.PI/2,u.position.set(0,.015,-d*.5-.03),h.add(_,p,u)}o.position.set(0,-.13,-.22-d*.65),r.add(o)}if(e==="b"){const h=new ee;h.position.set(0,.04,-.18),h.rotation.x=.18,a.add(h);const m=new L(new At(.02,.024,.86,8),i.trim);h.add(m);const d=new L(new hn(.09,.016,8,16),i.trim);d.position.y=.45;const f=new L(new Ui(.065,0),i.glow);f.position.y=.45,h.add(d,f),t.orbitingShards.push(f),o.position.set(0,.48,-.26),l.position.set(0,.1,-.2),c.position.set(0,.5,-.28),a.add(o,l,c)}else if(e==="k"&&(n==="ultramarines"||n==="orks")){const h=new ee;h.position.set(0,-.14,-.2),a.add(h);const m=new L(new it(.16,.16,.28),i.armor),d=new L(new it(.17,.17,.08),i.trim);d.position.z=-.08,h.add(m,d);for(let f=-1;f<=1;f++){const g=new L(new _e(.028,.18,4),i.glow);g.rotation.x=-Math.PI/2,g.position.set(f*.045,.02,-.21),h.add(g)}l.position.set(0,-.14,-.18),c.position.set(0,-.14,-.44),a.add(l,c)}else if(n==="necrons"&&(e==="q"||e==="k")){const h=new ee;h.position.set(0,.02,-.2),h.rotation.x=.35,a.add(h);const m=new L(new At(.02,.022,.84,8),i.metal),d=new L(new At(.032,.032,.12,8),i.trim);d.position.y=.32;const f=new L(new it(.022,.34,.16),i.glow);f.position.set(0,.38,-.09),f.rotation.x=-.55,h.add(m,d,f),l.position.set(0,.1,-.22),c.position.set(0,.46,-.38),a.add(l,c)}else{const h=new ee;h.position.set(0,-.15,-.16),h.rotation.x=Math.PI/4,a.add(h);const m=new L(new At(.02,.022,.15,8),i.darkMetal),d=new L(new ce(.028,8,8),i.trim);d.position.y=-.08;const f=new L(new it(.14,.032,.055),i.trim);f.position.y=.075,h.add(m,d,f);const g=e==="q"||e==="k"||e==="n",_=e==="q"||e==="k"?.54:.42;if(g){const p=new L(new it(.02,_,.075),i.glow);p.position.y=.08+_*.5;const u=new L(new it(.026,_*.75,.025),i.trim);u.position.y=.08+_*.4,h.add(p,u)}else if(n==="chaos"||n==="orks"){const p=new L(new At(.022,.022,_,8),i.metal);p.position.y=.08+_*.5;const u=new L(new it(.028,.22,.16),i.armor);u.position.set(0,.08+_*.72,-.06);const y=new L(new it(.02,.24,.05),i.metal);y.position.set(0,.08+_*.72,-.14),h.add(p,u,y);for(let M=0;M<6;M++){const x=new L(new _e(.016,.038,4),i.trim);x.rotation.x=-Math.PI/2,x.position.set(0,.08+_*.52+M*.038,-.165),h.add(x),t.chainswordTeeth.push(x)}}else{const p=new L(new it(.034,_,.068),i.armor);p.position.y=.08+_*.5;const u=new L(new it(.038,_*.95,.025),i.trim);u.position.set(0,.08+_*.5,.025),h.add(p,u);for(let y=0;y<8;y++){const M=new L(new _e(.015,.035,4),i.metal);M.rotation.x=-Math.PI/2,M.position.set(0,.12+y*.045,-.045),h.add(M),t.chainswordTeeth.push(M)}}l.position.set(0,-.08,-.22),c.position.set(0,.24,-.52),a.add(l,c)}}}class Hp{constructor(){this.ctx=null,this.muted=!1,this.masterVolume=.45}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}createNoiseBuffer(t=.5){if(!this.ctx)return null;const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}playStep(t=!1){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type=t?"sawtooth":"triangle",n.frequency.setValueAtTime(t?75:120,e),n.frequency.exponentialRampToValueAtTime(22,e+(t?.22:.11)),i.gain.setValueAtTime(this.masterVolume*(t?.55:.25),e),i.gain.exponentialRampToValueAtTime(.001,e+(t?.24:.12)),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+(t?.25:.13))}playBolterShot(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(190,t),e.frequency.exponentialRampToValueAtTime(35,t+.12),n.gain.setValueAtTime(this.masterVolume*.65,t),n.gain.exponentialRampToValueAtTime(.001,t+.13),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.14);const i=this.createNoiseBuffer(.09);if(i){const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1400,t);const o=this.ctx.createGain();o.gain.setValueAtTime(this.masterVolume*.5,t),o.gain.exponentialRampToValueAtTime(.001,t+.09),r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start(t)}}playChainswordRev(t=.45){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(95,e),n.frequency.linearRampToValueAtTime(210,e+t*.5),n.frequency.linearRampToValueAtTime(140,e+t),i.type="square",i.frequency.setValueAtTime(42,e),r.gain.setValueAtTime(35,e),i.connect(r),r.connect(n.frequency),a.gain.setValueAtTime(.01,e),a.gain.linearRampToValueAtTime(this.masterVolume*.45,e+.05),a.gain.exponentialRampToValueAtTime(.001,e+t),n.connect(a),a.connect(this.ctx.destination),n.start(e),i.start(e),n.stop(e+t),i.stop(e+t)}playSwordClash(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[920,1480,2210,3100].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=i%2===0?"triangle":"sine",r.frequency.setValueAtTime(n,t),r.frequency.exponentialRampToValueAtTime(n*.75,t+.25),a.gain.setValueAtTime(this.masterVolume*.22,t),a.gain.exponentialRampToValueAtTime(.001,t+.25),r.connect(a),a.connect(this.ctx.destination),r.start(t),r.stop(t+.26)})}playPsychicBlast(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",n.type="sawtooth",e.frequency.setValueAtTime(680,t),e.frequency.exponentialRampToValueAtTime(110,t+.5),n.frequency.setValueAtTime(340,t),n.frequency.linearRampToValueAtTime(880,t+.25),n.frequency.exponentialRampToValueAtTime(90,t+.5),i.gain.setValueAtTime(this.masterVolume*.45,t),i.gain.exponentialRampToValueAtTime(.001,t+.52),e.connect(i),n.connect(i),i.connect(this.ctx.destination),e.start(t),n.start(t),e.stop(t+.53),n.stop(t+.53)}playJumpPack(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.createNoiseBuffer(.55);if(!e)return;const n=this.ctx.createBufferSource();n.buffer=e;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(350,t),i.frequency.linearRampToValueAtTime(1600,t+.22),i.frequency.linearRampToValueAtTime(400,t+.55);const r=this.ctx.createGain();r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(this.masterVolume*.5,t+.12),r.gain.exponentialRampToValueAtTime(.001,t+.55),n.connect(i),i.connect(r),r.connect(this.ctx.destination),n.start(t)}playExplosion(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(130,t),e.frequency.exponentialRampToValueAtTime(20,t+.65),n.gain.setValueAtTime(this.masterVolume*.9,t),n.gain.exponentialRampToValueAtTime(.001,t+.68),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.7);const i=this.createNoiseBuffer(.7);if(i){const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(900,t),a.frequency.exponentialRampToValueAtTime(120,t+.68);const o=this.ctx.createGain();o.gain.setValueAtTime(this.masterVolume*.75,t),o.gain.exponentialRampToValueAtTime(.001,t+.68),r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start(t)}}playDiceRoll(){if(!this.muted&&(this.init(),!!this.ctx))for(let t=0;t<4;t++)setTimeout(()=>{if(!this.ctx||this.muted)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(600+Math.random()*500,e),i.gain.setValueAtTime(this.masterVolume*.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.045),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.05)},t*55)}playWarhorn(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[110,165,220].forEach(n=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n*.98,t),i.frequency.linearRampToValueAtTime(n,t+.2);const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(480,t),r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(this.masterVolume*.22,t+.15),r.gain.exponentialRampToValueAtTime(.001,t+.95),i.connect(a),a.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+1)})}}const ae=new Hp;class Gp{constructor(t,e,n){this.container=t,this.onSquareClick=e,this.onSquareHover=n,this.unitFactory=new zp,this.unitMeshes=new Map,this.tileMeshes=[],this.particles=[],this.shockwaves=[],this.lightningBolts=[],this.slashArcs=[],this.braziers=[],this.isAnimating=!1,this.skipRequested=!1,this.autoActionCam=!0,this.screenShake=0,this.duelOrbitTarget=null,this.duelOrbitRadius=2.6,this.duelOrbitAngle=0,this.duelOrbitHeight=1.6,this.duelOrbitSpeed=0,this.raycaster=new Sp,this.mouse=new Tt,this.hoveredSquare=null,this.initScene(),this.buildBoard(),this.setupInteraction(),this.animate()}initScene(){this.scene=new gp,this.scene.background=new xt(526863),this.scene.fog=new oa(526863,.03),this.camera=new Oe(44,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,8.6,8.6),this.renderer=new mp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Do,this.renderer.toneMapping=Io,this.renderer.toneMappingExposure=1.3,this.container.appendChild(this.renderer.domElement),this.controls=new Ap(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.07,this.controls.maxPolarAngle=Math.PI/2-.05,this.controls.minDistance=2.2,this.controls.maxDistance=20,this.controls.target.set(0,.3,0),this.ambientLight=new yp(4016998,1.4),this.scene.add(this.ambientLight),this.keyLight=new Eo(16773856,2.5),this.keyLight.position.set(6,14,8),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.width=2048,this.keyLight.shadow.mapSize.height=2048,this.keyLight.shadow.camera.near=1,this.keyLight.shadow.camera.far=32;const t=6.5;this.keyLight.shadow.camera.left=-t,this.keyLight.shadow.camera.right=t,this.keyLight.shadow.camera.top=t,this.keyLight.shadow.camera.bottom=-t,this.keyLight.shadow.bias=-5e-4,this.scene.add(this.keyLight);const e=new Eo(4491519,1.25);e.position.set(-8,9,-7),this.scene.add(e),this.combatLight=new wo(16755251,0,6.5),this.combatLight.position.set(0,2.2,0),this.scene.add(this.combatLight),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}boardToWorld(t,e){return new A(e-3.5,0,t-3.5)}buildBoard(){this.boardGroup=new ee,this.scene.add(this.boardGroup);const t=new it(9.5,.55,9.5),e=new de({color:1382432,roughness:.68,metalness:.48}),n=new L(t,e);n.position.y=-.3,n.receiveShadow=!0,this.boardGroup.add(n);const i=new it(8.56,.16,8.56),r=new de({color:10780732,roughness:.32,metalness:.88}),a=new L(i,r);a.position.y=-.06,a.receiveShadow=!0,this.boardGroup.add(a);const o=new it(.94,.1,.94),c=new de({color:14213872,emissive:1716296,emissiveIntensity:.45,roughness:.34,metalness:.25}),l=new de({color:1119518,emissive:395794,emissiveIntensity:.2,roughness:.58,metalness:.52}),h=new pe({color:8186111,transparent:!0,opacity:.42,side:he}),m=new pe({color:13147461,transparent:!0,opacity:.28,side:he}),d=new Tn(.41,.445,4);d.rotateX(-Math.PI/2),d.rotateY(Math.PI/4),this.tileMeshes=Array.from({length:8},()=>Array(8).fill(null));for(let M=0;M<8;M++)for(let x=0;x<8;x++){const D=(M+x)%2===0,R=new L(o,D?c.clone():l.clone()),b=this.boardToWorld(M,x);R.position.set(b.x,-.05,b.z),R.receiveShadow=!0,R.userData={isTile:!0,r:M,c:x,isLight:D},this.boardGroup.add(R),this.tileMeshes[M][x]=R;const C=new L(d,D?h:m);C.position.set(b.x,.002,b.z),this.boardGroup.add(C)}this.gridPulseMaterials=[];const f=new pe({color:58879,transparent:!0,opacity:.78}),g=new pe({color:15911788,transparent:!0,opacity:.92});this.gridPulseMaterials.push(f,g);for(let M=0;M<=8;M++){const x=M-4,D=M===0||M===8,R=D?g:f,b=D?.045:.026,C=new L(new it(8.04,.012,b),R);C.position.set(0,.004,x),this.boardGroup.add(C);const w=new L(new it(b,.012,8.04),R);w.position.set(x,.004,0),this.boardGroup.add(w)}const _=new At(.032,.032,.016,8);for(let M=0;M<=8;M++)for(let x=0;x<=8;x++){const D=new L(_,g);D.position.set(x-4,.006,M-4),this.boardGroup.add(D)}const p=["A","B","C","D","E","F","G","H"],u=["8","7","6","5","4","3","2","1"];for(let M=0;M<8;M++){const x=M-3.5;this.boardGroup.add(this.createCoordLabel(p[M],x,4.16,0)),this.boardGroup.add(this.createCoordLabel(p[M],x,-4.16,Math.PI)),this.boardGroup.add(this.createCoordLabel(u[M],-4.16,x,Math.PI/2)),this.boardGroup.add(this.createCoordLabel(u[M],4.16,x,-Math.PI/2))}[[-4.45,-4.45],[4.45,-4.45],[-4.45,4.45],[4.45,4.45]].forEach(([M,x])=>{const D=new L(new At(.28,.36,.92,8),r);D.position.set(M,.2,x),D.castShadow=!0,this.boardGroup.add(D);const R=new L(new At(.38,.2,.22,10),e);R.position.set(M,.72,x),this.boardGroup.add(R);const b=new pe({color:16737792}),C=new L(new _e(.24,.5,7),b);C.position.set(M,.98,x),this.boardGroup.add(C);const w=new wo(16733440,1.9,6.8);w.position.set(M,1.25,x),this.boardGroup.add(w),this.braziers.push({fireCone:C,fireLight:w,x:M,z:x,phase:Math.random()*10})}),this.highlightGroup=new ee,this.scene.add(this.highlightGroup),this.scarGroup=new ee,this.scene.add(this.scarGroup)}createCoordLabel(t,e,n,i=0){const r=document.createElement("canvas");r.width=64,r.height=64;const a=r.getContext("2d");a.clearRect(0,0,64,64),a.font="bold 42px Cinzel, Georgia, serif",a.textAlign="center",a.textBaseline="middle",a.shadowColor="#00e5ff",a.shadowBlur=10,a.fillStyle="#f2cb6c",a.fillText(t,32,34);const o=new xp(r),c=new pe({map:o,transparent:!0,opacity:.9,side:he,depthWrite:!1}),l=new L(new bn(.28,.28),c);return l.rotation.x=-Math.PI/2,l.rotation.z=i,l.position.set(e,.025,n),l}clearBattleScars(){for(;this.scarGroup.children.length>0;)this.scarGroup.remove(this.scarGroup.children[0])}spawnBattleScar(t,e=8914952,n=.34){const i=new Ss(n,14);i.rotateX(-Math.PI/2);const r=new pe({color:e,transparent:!0,opacity:.52,depthWrite:!1}),a=new L(i,r);a.position.set(t.x+(Math.random()-.5)*.16,.006,t.z+(Math.random()-.5)*.16),a.rotation.z=Math.random()*Math.PI*2,this.scarGroup.add(a)}setupInteraction(){let t={x:0,y:0};this.renderer.domElement.addEventListener("pointerdown",e=>{t={x:e.clientX,y:e.clientY}}),this.renderer.domElement.addEventListener("pointerup",e=>{const n=e.clientX-t.x,i=e.clientY-t.y;if(Math.hypot(n,i)>6||this.isAnimating)return;const r=this.pickSquare(e);r&&this.onSquareClick&&this.onSquareClick(r.r,r.c)}),this.renderer.domElement.addEventListener("pointermove",e=>{if(this.isAnimating)return;const n=this.pickSquare(e);n?(!this.hoveredSquare||this.hoveredSquare.r!==n.r||this.hoveredSquare.c!==n.c)&&(this.hoveredSquare=n,this.renderer.domElement.style.cursor="pointer",this.onSquareHover&&this.onSquareHover(n.r,n.c)):this.hoveredSquare&&(this.hoveredSquare=null,this.renderer.domElement.style.cursor="default",this.onSquareHover&&this.onSquareHover(null,null))})}pickSquare(t){var o,c;const e=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=Array.from(this.unitMeshes.values()),i=this.raycaster.intersectObjects(n,!0);if(i.length>0){let l=i[0].object;for(;l&&!((o=l.userData)!=null&&o.pieceId);)l=l.parent;if(l&&((c=l.userData)!=null&&c.gridPos))return l.userData.gridPos}const r=this.tileMeshes.flat(),a=this.raycaster.intersectObjects(r,!1);if(a.length>0){const{r:l,c:h}=a[0].object.userData;return{r:l,c:h}}return null}syncBoardPieces(t){const e=new Set;for(let n=0;n<8;n++)for(let i=0;i<8;i++){const r=t.board[n][i];if(r){e.add(r.id);let a=this.unitMeshes.get(r.id);a&&(a.userData.type!==r.type||a.userData.faction!==r.faction)&&(this.scene.remove(a),this.unitMeshes.delete(r.id),a=null),a||(a=this.unitFactory.createUnitMesh(r),this.scene.add(a),this.unitMeshes.set(r.id,a));const o=this.boardToWorld(n,i);a.position.set(o.x,0,o.z),a.scale.setScalar(1),a.rotation.set(0,a.userData.defaultRotY,0),a.userData.gridPos={r:n,c:i};const c=a.userData.rig;c&&(c.bodyPivot.position.set(0,c.baseY,0),c.bodyPivot.rotation.set(0,0,0),c.torso.rotation.set(0,0,0),c.leftArm.rotation.set(0,0,0),c.rightArm.rotation.set(0,0,0),c.leftLeg.rotation.set(0,0,0),c.rightLeg.rotation.set(0,0,0)),this.updateUnitHealthRing(a,r,t.mode)}}for(const[n,i]of this.unitMeshes.entries())e.has(n)||(this.scene.remove(i),this.unitMeshes.delete(n))}updateUnitHealthRing(t,e,n){const i=t.userData.rig;if(!(!i||!i.hpRing))if(n==="classic")i.hpRing.material.color.setHex(e.side==="w"?2267647:16724787);else{const r=Math.max(0,e.hp/e.maxHp);r>.6?i.hpRing.material.color.setHex(e.side==="w"?2289288:16733491):r>.3?i.hpRing.material.color.setHex(16759552):i.hpRing.material.color.setHex(16716066)}}setHighlights(t,e=[],n=[],i=null){for(;this.highlightGroup.children.length>0;)this.highlightGroup.remove(this.highlightGroup.children[0]);if(i&&[{r:i.fromR,c:i.fromC},{r:i.finalAttackerR,c:i.finalAttackerC}].forEach(r=>{if(r.r===void 0)return;const a=this.boardToWorld(r.r,r.c),o=new L(new bn(.9,.9),new pe({color:13938487,transparent:!0,opacity:.18,side:he}));o.rotation.x=-Math.PI/2,o.position.set(a.x,.01,a.z),this.highlightGroup.add(o)}),t){const r=this.boardToWorld(t.r,t.c),a=new L(new bn(.92,.92),new pe({color:54015,transparent:!0,opacity:.38,side:he}));a.rotation.x=-Math.PI/2,a.position.set(r.x,.015,r.z),this.highlightGroup.add(a)}e.forEach(r=>{const a=this.boardToWorld(r.toR,r.toC);if(r.isAttack){const o=new L(new Tn(.34,.46,24),new pe({color:16720418,transparent:!0,opacity:.88,side:he}));o.rotation.x=-Math.PI/2,o.position.set(a.x,.025,a.z),this.highlightGroup.add(o);const c=new L(new bn(.88,.88),new pe({color:16716049,transparent:!0,opacity:.25,side:he}));c.rotation.x=-Math.PI/2,c.position.set(a.x,.014,a.z),this.highlightGroup.add(c)}else{const o=new L(new Ss(.18,20),new pe({color:2293640,transparent:!0,opacity:.78,side:he}));o.rotation.x=-Math.PI/2,o.position.set(a.x,.02,a.z),this.highlightGroup.add(o)}}),n.forEach(r=>{const a=this.boardToWorld(r.r,r.c),o=new L(new Tn(.32,.45,24),new pe({color:r.color||16763904,transparent:!0,opacity:.9,side:he}));o.rotation.x=-Math.PI/2,o.position.set(a.x,.03,a.z),this.highlightGroup.add(o)})}setCameraPreset(t){this.duelOrbitTarget=null,t==="white"?this.tweenCamera(new A(0,8.5,8.8),new A(0,.2,0),650):t==="black"?this.tweenCamera(new A(0,8.5,-8.8),new A(0,.2,0),650):t==="top"?this.tweenCamera(new A(0,13.5,.01),new A(0,0,0),650):t==="cinematic"&&this.tweenCamera(new A(6.8,5.8,6.8),new A(0,.4,0),650)}tweenCamera(t,e,n=550){const i=this.camera.position.clone(),r=this.controls.target.clone(),a=performance.now();return new Promise(o=>{const c=l=>{const h=Math.min(1,(l-a)/n),m=1-Math.pow(1-h,3);this.camera.position.lerpVectors(i,t,m),this.controls.target.lerpVectors(r,e,m),this.controls.update(),h<1&&!this.skipRequested?requestAnimationFrame(c):o()};requestAnimationFrame(c)})}sleep(t){return this.skipRequested?Promise.resolve():new Promise(e=>{const n=performance.now(),i=r=>{this.skipRequested||r-n>=t?e():requestAnimationFrame(i)};requestAnimationFrame(i)})}skipCurrentAnimation(){this.isAnimating&&(this.skipRequested=!0)}spawnSparks(t,e=16755200,n=18,i=3.5,r=.042){const a=new it(r,r,r);for(let o=0;o<n;o++){const c=new pe({color:e,transparent:!0,opacity:1}),l=new L(a,c);l.position.copy(t);const h=new A((Math.random()-.5)*i,Math.random()*i*.9+.8,(Math.random()-.5)*i);this.scene.add(l),this.particles.push({mesh:l,vel:h,gravity:9.8,life:.45+Math.random()*.35,maxLife:.8,spin:new A(Math.random()*10,Math.random()*10,Math.random()*10)})}}spawnShellCasings(t,e=3){const n=new At(.012,.012,.04,6);for(let i=0;i<e;i++){const r=new de({color:13938487,roughness:.25,metalness:.9,transparent:!0,opacity:1}),a=new L(n,r);a.position.copy(t);const o=new A((Math.random()-.5)*1.8,1.8+Math.random()*1.2,(Math.random()-.5)*1.8);this.scene.add(a),this.particles.push({mesh:a,vel:o,gravity:11.5,bounceFloor:!0,life:.9,maxLife:.9,spin:new A(16,12,20)})}}spawnSlashArc(t,e,n=.4,i="#00d2ff",r=.48){const a=new Tn(r*.65,r,18,1,-Math.PI*.65,Math.PI*1.3),o=new pe({color:new xt(i),side:he,transparent:!0,opacity:.92}),c=new L(a,o);c.position.copy(t).add(new A(0,.52,0)),c.rotation.y=e,c.rotation.x=Math.PI/2,c.rotation.z=n,this.scene.add(c),this.slashArcs.push({mesh:c,age:0,duration:.24})}spawnShatterExplosion(t,e){ae.playExplosion(),this.screenShake=.34;const n=me[e],i=[new xt(n.themeColor),new xt(n.accentColor),new xt(n.glowColor),new xt(16729088)],r=e==="necrons"?43588:7801362;this.spawnBattleScar(t,r,.38);const a=[new ce(.1,10,10),new ce(.11,8,8,0,Math.PI*2,0,Math.PI*.6),new ce(.11,8,8,0,Math.PI*2,0,Math.PI*.6),new it(.06,.32,.08)];a.forEach((o,c)=>{const l=new de({color:c===0?new xt(n.accentColor):new xt(n.themeColor),roughness:.35,metalness:.75,transparent:!0,opacity:1}),h=new L(o,l);h.position.copy(t).add(new A(0,.5,0));const m=c/a.length*Math.PI*2+Math.random()*.5,d=new A(Math.cos(m)*2.6,3.4+Math.random()*2,Math.sin(m)*2.6);this.scene.add(h),this.particles.push({mesh:h,vel:d,gravity:11,bounceFloor:!0,life:1.55,maxLife:1.55,spin:new A(10,14,9)})});for(let o=0;o<32;o++){const c=.04+Math.random()*.08,l=new ca(c,0),h=i[o%i.length],m=new de({color:h,emissive:h,emissiveIntensity:o%3===0?2.2:.3,roughness:.35,metalness:.75,transparent:!0,opacity:1}),d=new L(l,m);d.position.copy(t).add(new A(0,.38,0));const f=Math.random()*Math.PI*2,g=1.6+Math.random()*4.6,_=new A(Math.cos(f)*g,2.4+Math.random()*4.2,Math.sin(f)*g);this.scene.add(d),this.particles.push({mesh:d,vel:_,gravity:11.2,bounceFloor:!0,life:1.2+Math.random()*.5,maxLife:1.7,spin:new A(Math.random()*14,Math.random()*14,Math.random()*14)})}this.spawnShockwave(t,n.glowColor,2)}spawnShockwave(t,e="#ffaa00",n=1.5){const i=new Tn(.1,.24,36);i.rotateX(-Math.PI/2);const r=new pe({color:new xt(e),transparent:!0,opacity:.92,side:he}),a=new L(i,r);a.position.set(t.x,.035,t.z),this.scene.add(a),this.shockwaves.push({mesh:a,age:0,duration:.48,maxRadius:n})}spawnLightningArc(t,e,n=54015,i=.26){const a=[];for(let h=0;h<=12;h++){const m=h/12,d=new A().lerpVectors(t,e,m);h>0&&h<12&&(d.x+=(Math.random()-.5)*.26,d.y+=(Math.random()-.5)*.26,d.z+=(Math.random()-.5)*.26),a.push(d)}const o=new Ce().setFromPoints(a),c=new lc({color:n,linewidth:3}),l=new _p(o,c);this.scene.add(l),this.lightningBolts.push({line:l,life:i})}async animateMove(t,e){this.isAnimating=!0,this.skipRequested=!1;const n=this.unitMeshes.get(t.attackerId);if(!n){this.isAnimating=!1;return}const i=this.boardToWorld(t.fromR,t.fromC),r=this.boardToWorld(t.toR,t.toC),a=t.attackerSnapshot.type==="n";if(await this.moveUnitAlongPath(n,i,r,a?480:380,a),t.rookMove){const o=this.unitMeshes.get(t.rookMove.rookId);if(o){const c=this.boardToWorld(t.rookMove.fromR,t.rookMove.fromC),l=this.boardToWorld(t.rookMove.toR,t.rookMove.toC);await this.moveUnitAlongPath(o,c,l,300,!1)}}this.syncBoardPieces(e),this.isAnimating=!1}async moveUnitAlongPath(t,e,n,i=420,r=!1){if(this.skipRequested){t.position.copy(n),t.position.y=0;return}const a=t.userData.rig,o=n.x-e.x,c=n.z-e.z,l=Math.atan2(o,c)+Math.PI;t.rotation.y=l,r?ae.playJumpPack():ae.playStep(t.userData.type==="r");const h=performance.now();await new Promise(m=>{const d=f=>{const g=Math.min(1,(f-h)/i),_=g<.5?2*g*g:1-Math.pow(-2*g+2,2)/2;if(t.position.lerpVectors(e,n,_),r){const p=Math.sin(g*Math.PI)*1.75;t.position.y=p,a&&(a.bodyPivot.rotation.x=Math.sin(g*Math.PI)*.4),Math.random()<.65&&this.spawnSparks(t.position.clone().add(new A(0,.25,0)),16742144,2,1.4,.038)}else if(a){const p=Math.sin(g*Math.PI*4)*.6;a.leftLeg.rotation.x=p,a.rightLeg.rotation.x=-p,a.leftArm.rotation.x=-p*.55,a.rightArm.rotation.x=p*.55,a.bodyPivot.position.y=a.baseY+Math.abs(Math.sin(g*Math.PI*4))*.055}g<1&&!this.skipRequested?requestAnimationFrame(d):(t.position.copy(n),t.position.y=0,a&&(a.leftLeg.rotation.set(0,0,0),a.rightLeg.rotation.set(0,0,0),a.leftArm.rotation.set(0,0,0),a.rightArm.rotation.set(0,0,0),a.bodyPivot.rotation.set(0,0,0),a.bodyPivot.position.y=a.baseY),m())};requestAnimationFrame(d)})}async animateCombat(t,e,n={}){this.isAnimating=!0,this.skipRequested=!1;const i=this.unitMeshes.get(t.attackerId),r=this.unitMeshes.get(t.defenderId);if(!i||!r){this.syncBoardPieces(e),this.isAnimating=!1;return}const a=i.userData.rig,o=r.userData.rig,c=t.attackerSnapshot,l=t.defenderSnapshot,h=me[c.faction],m=me[l.faction],d=t.combat,f=this.boardToWorld(t.fromR,t.fromC),g=r.position.clone(),_=new A().subVectors(g,f),p=_.length();_.normalize();const u=c.type==="b"&&p>1.8&&d.defenderSurvived,y=u?f.clone().addScaledVector(_,.45):g.clone().addScaledVector(_,-.72),M=Math.atan2(-_.x,-_.z),x=Math.atan2(_.x,_.z);i.rotation.y=M,r.rotation.y=x;const D=new A().lerpVectors(y,g,.5);D.y=.52,this.combatLight.position.set(D.x,2.2,D.z),this.combatLight.color.set(h.glowColor),this.combatLight.intensity=4.2;const R=this.camera.position.clone(),b=this.controls.target.clone();if(this.autoActionCam){const w=new A(-_.z,0,_.x).normalize(),v=y.clone().addScaledVector(_,-1.55).addScaledVector(w,1.35).add(new A(0,1.35,0));v.x=Math.max(-7.5,Math.min(7.5,v.x)),v.z=Math.max(-7.5,Math.min(7.5,v.z)),await this.tweenCamera(v,D,420)}const C=c.type==="n";if(await this.moveUnitAlongPath(i,f,y,C?460:360,C),i.rotation.y=M,r.rotation.y=x,o&&!this.skipRequested&&(o.leftArm.rotation.x=-.65,o.rightArm.rotation.x=-.45),!this.skipRequested)if(c.type==="b"){n.onPhaseText&&n.onPhaseText(`⚡ ${c.name} unleashes Immaterium Lightning!`),ae.playPsychicBlast(),this.spawnShockwave(y,h.glowColor,1.1),this.spawnShockwave(g,h.glowColor,1.1),a&&(a.rightArm.rotation.x=-.95);const w=new A;a!=null&&a.muzzlePoint?a.muzzlePoint.getWorldPosition(w):w.copy(i.position).add(new A(0,.85,0));const v=g.clone().add(new A(0,.55,0)),P=new xt(h.glowColor).getHex();for(let U=0;U<5;U++)this.spawnLightningArc(w,v,P,.22),this.spawnSparks(v,P,12,3,.042),o&&(o.torso.rotation.z=(U%2===0?1:-1)*.2),await this.sleep(80);o&&(o.torso.rotation.z=0)}else{n.onPhaseText&&n.onPhaseText(`🔫 ${c.name} fires point-blank salvo!`),a&&(a.leftArm.rotation.x=-.82);const w=c.type==="r"?5:3,v=new xt(h.glowColor).getHex();for(let P=0;P<w&&!this.skipRequested;P++){ae.playBolterShot(),a!=null&&a.gatlingBarrel&&(a.gatlingBarrel.rotation.z+=1.2);const U=new A;a!=null&&a.muzzlePoint?a.muzzlePoint.getWorldPosition(U):U.copy(i.position).add(new A(0,.55,0)),c.faction!=="necrons"&&this.spawnShellCasings(U,1);const B=g.clone().add(new A((Math.random()-.5)*.16,.45+Math.random()*.22,(Math.random()-.5)*.16));this.spawnLightningArc(U,B,v,.08),this.spawnSparks(B,16755234,9,2.8,.036),o&&(o.torso.rotation.x=-.25,setTimeout(()=>{o&&(o.torso.rotation.x=0)},60)),await this.sleep(85)}a&&(a.leftArm.rotation.x=0)}if(this.autoActionCam&&!this.skipRequested&&(this.duelOrbitTarget=D.clone(),this.duelOrbitRadius=2.35,this.duelOrbitHeight=1.45,this.duelOrbitAngle=Math.atan2(this.camera.position.z-D.z,this.camera.position.x-D.x),this.duelOrbitSpeed=.65),!u&&!this.skipRequested&&(n.onPhaseText&&n.onPhaseText(`⚔️ Blade-to-Blade Duel! Rolling ${c.atkDice}D6...`),ae.playDiceRoll(),(c.type==="p"||c.faction==="orks")&&ae.playChainswordRev(.45),await this.animateMeleeSwing(a,o,g,M,h.glowColor,1),ae.playSwordClash(),await this.animateMeleeSwing(o,a,y,x,m.glowColor,-1),ae.playSwordClash(),await this.animateMeleeSwing(a,o,g,M,h.glowColor,-1),ae.playSwordClash()),n.onDamagePopup&&n.onDamagePopup(g.clone().add(new A(0,1.15,0)),`-${d.damageDealt} HP${d.isCrit?" CRIT!":""}`,d.isCrit?"#ffcc00":"#ff3333"),d.defenderSurvived){if(this.spawnBattleScar(g,3346705,.22),this.updateUnitHealthRing(r,{...l,hp:d.defenderRemainingHp},e.mode),d.counterAttack&&!this.skipRequested)if(n.onPhaseText&&n.onPhaseText(`🛡️ ${l.name} holds the line (${d.defenderRemainingHp} HP) & Counter-Strikes!`),await this.sleep(200),ae.playSwordClash(),await this.animateMeleeSwing(o,a,y,x,m.glowColor,1),n.onDamagePopup&&n.onDamagePopup(y.clone().add(new A(0,1.15,0)),`COUNTER -${d.counterAttack.damage} HP`,"#ff8800"),await this.sleep(240),this.duelOrbitTarget=null,d.attackerDiedInCounter)n.onPhaseText&&n.onPhaseText(`💀 ${c.name} was cut down by ${l.name}'s counter-attack!`),this.spawnShatterExplosion(y,c.faction),this.scene.remove(i),this.unitMeshes.delete(t.attackerId),await this.sleep(450);else{const w=this.boardToWorld(t.finalAttackerR,t.finalAttackerC);n.onPhaseText&&n.onPhaseText(`↩️ ${c.name} falls back (${d.attackerRemainingHp} HP).`),await this.moveUnitAlongPath(i,y,w,340,!1)}}else{const w=h.units[c.type].finisherName;n.onPhaseText&&n.onPhaseText(`💀 SYNC-KILL: ${w.toUpperCase()}!`),this.autoActionCam&&!this.skipRequested&&(this.duelOrbitRadius=1.95,this.duelOrbitHeight=1.05,this.duelOrbitSpeed=1.15),await this.executeRoleSyncKill(i,r,c,l,y,g,_,M),this.duelOrbitTarget=null,this.spawnShatterExplosion(g,l.faction),this.scene.remove(r),this.unitMeshes.delete(t.defenderId),await this.moveUnitAlongPath(i,i.position.clone(),g,260,!1),a&&!this.skipRequested&&(a.rightArm.rotation.x=-2.35,a.leftArm.rotation.x=-1.2,await this.sleep(360),a.rightArm.rotation.x=0,a.leftArm.rotation.x=0)}this.duelOrbitTarget=null,this.combatLight.intensity=0,this.autoActionCam&&await this.tweenCamera(R,b,450),this.syncBoardPieces(e),this.isAnimating=!1}async animateMeleeSwing(t,e,n,i,r,a=1){if(!t||this.skipRequested)return;const o=185,c=performance.now();this.spawnSlashArc(n,i,a*.45,r,.52),await new Promise(h=>{const m=d=>{const f=Math.min(1,(d-c)/o),g=Math.sin(f*Math.PI);t.rightArm.rotation.x=-1.85*g,t.rightArm.rotation.z=a*.55*g,t.torso.rotation.y=a*.42*g,e&&f>.4&&(e.torso.rotation.x=-.32*g,e.torso.rotation.z=-a*.18*g),f<1&&!this.skipRequested?requestAnimationFrame(m):(t.rightArm.rotation.set(0,0,0),t.torso.rotation.set(0,0,0),e&&e.torso.rotation.set(0,0,0),h())};requestAnimationFrame(m)});const l=n.clone().add(new A(0,.55,0));this.spawnSparks(l,new xt(r).getHex(),15,3.4,.044),this.screenShake=.1}async executeRoleSyncKill(t,e,n,i,r,a,o,c){if(this.skipRequested)return;const l=t.userData.rig,h=e.userData.rig,m=me[n.faction],d=new xt(m.glowColor).getHex();if(n.type==="p"){ae.playChainswordRev(.55);const f=a.clone().addScaledVector(o,-.42),g=performance.now();await new Promise(_=>{const p=u=>{const y=Math.min(1,(u-g)/520);if(y<.7)t.position.lerpVectors(r,f,Math.min(1,y*2.5)),l&&(l.rightArm.rotation.x=-1.45+Math.sin(y*60)*.08,l.torso.rotation.x=.25),h&&(h.torso.rotation.x=-.35+Math.sin(y*50)*.06,e.position.y=.12),Math.random()<.7&&this.spawnSparks(a.clone().add(new A(0,.55,0)),n.faction==="necrons"?65382:16716066,3,2.8,.042);else{const M=(y-.7)/.3;l&&(l.rightArm.rotation.x=-1.45-M*1.1),e.position.y=.12+M*.55}y<1&&!this.skipRequested?requestAnimationFrame(p):_()};requestAnimationFrame(p)})}else if(n.type==="r"){ae.playChainswordRev(.48);const f=performance.now();await new Promise(g=>{const _=p=>{const u=Math.min(1,(p-f)/620);if(u<.65){const y=u/.65;l&&(l.rightArm.rotation.x=-2.1*y,l.leftArm.rotation.x=-.9*y),e.position.y=y*1.15,e.rotation.z=Math.sin(u*45)*.25,Math.random()<.5&&this.spawnSparks(e.position.clone().add(new A(0,.4,0)),16755200,3,2.2,.04)}else{const y=(u-.65)/.35;l&&(l.rightArm.rotation.x=-2.1+2.6*y),e.position.y=Math.max(0,1.15*(1-y)),e.scale.y=Math.max(.3,1-y*.65)}u<1&&!this.skipRequested?requestAnimationFrame(_):g()};requestAnimationFrame(_)}),ae.playBolterShot()}else if(n.type==="n"){ae.playJumpPack();const f=t.position.clone(),g=performance.now();await new Promise(_=>{const p=u=>{const y=Math.min(1,(u-g)/520);if(y<.55){const M=y/.55;t.position.y=M*2.3,l&&(l.bodyPivot.rotation.x=M*Math.PI*2),this.spawnSparks(t.position.clone(),16737792,2,1.8,.045)}else{const M=(y-.55)/.45;t.position.lerpVectors(f,a,M),t.position.y=2.3*(1-M),l&&(l.rightArm.rotation.x=-2.4)}y<1&&!this.skipRequested?requestAnimationFrame(p):(t.position.y=0,l&&(l.bodyPivot.rotation.x=0),_())};requestAnimationFrame(p)}),this.spawnSlashArc(a,c,0,m.glowColor,.75)}else if(n.type==="b"){ae.playPsychicBlast(),this.spawnShockwave(a,m.glowColor,1.6);const f=performance.now();await new Promise(g=>{const _=p=>{const u=Math.min(1,(p-f)/560);if(e.position.y=Math.sin(u*Math.PI*.65)*1.35,e.rotation.y+=.35,e.rotation.x=u*.8,h&&(h.leftArm.rotation.z=-1.2,h.rightArm.rotation.z=1.2),u>.75){const y=Math.max(.15,1-(u-.75)*3.2);e.scale.setScalar(y)}Math.random()<.6&&this.spawnLightningArc(t.position.clone().add(new A(0,.9,0)),e.position.clone().add(new A(0,.4,0)),d,.12),u<1&&!this.skipRequested?requestAnimationFrame(_):g()};requestAnimationFrame(_)})}else if(n.type==="q"){ae.playSwordClash();const f=a.clone().addScaledVector(o,.55);this.spawnSlashArc(a,c,.65,m.glowColor,.68),this.spawnSlashArc(a,c,-.65,m.glowColor,.68);const g=performance.now();await new Promise(_=>{const p=u=>{const y=Math.min(1,(u-g)/280);t.position.lerpVectors(r,f,y),l&&(l.bodyPivot.rotation.x=.35,l.rightArm.rotation.z=1.3),y<1&&!this.skipRequested?requestAnimationFrame(p):_()};requestAnimationFrame(p)}),await this.sleep(220),l&&(l.bodyPivot.rotation.x=0,l.rightArm.rotation.z=0)}else{ae.playWarhorn();const f=performance.now();await new Promise(_=>{const p=u=>{const y=Math.min(1,(u-f)/560);if(y<.5){const M=y/.5;l&&(l.rightArm.rotation.x=-2.4*M),e.position.y=Math.sin(M*Math.PI*.5)*1.45,e.rotation.x=-M*1.2}else{const M=(y-.5)/.5;l&&(l.rightArm.rotation.x=-2.4+2.8*M,l.leftArm.rotation.x=-2+2.4*M),e.position.y=1.45*(1-M)}y<1&&!this.skipRequested?requestAnimationFrame(p):_()};requestAnimationFrame(p)});const g=new L(new At(.35,.35,12,16),new pe({color:new xt(m.glowColor),transparent:!0,opacity:.8}));g.position.set(a.x,6,a.z),this.scene.add(g),setTimeout(()=>this.scene.remove(g),380)}}async animateStratagemEffect(t,e,n,i=!1,r="ultramarines"){const a=this.boardToWorld(e,n);if(t==="heal")ae.playPsychicBlast(),this.spawnShockwave(a,"#22ff88",1.2),this.spawnSparks(a.clone().add(new A(0,.4,0)),2293640,24,2.5,.05);else if(t==="orbital"){ae.playExplosion();const o=new At(.34,.34,16,16),c=new pe({color:65535,transparent:!0,opacity:.85}),l=new L(o,c);l.position.set(a.x,8,a.z),this.scene.add(l),this.spawnShockwave(a,"#00ffff",2.2),this.spawnSparks(a.clone().add(new A(0,.5,0)),65535,32,4.5,.06),this.screenShake=.35,i&&this.spawnShatterExplosion(a,r),setTimeout(()=>{this.scene.remove(l)},420)}}projectToScreen(t){const e=t.clone().project(this.camera);return{x:(e.x*.5+.5)*window.innerWidth,y:(-e.y*.5+.5)*window.innerHeight,visible:e.z<1}}animate(){requestAnimationFrame(()=>this.animate());const t=.016,e=performance.now()*.001;for(const n of this.unitMeshes.values()){const i=n.userData.rig;if(i){if(!this.isAnimating){const r=Math.sin(e*2.6+i.animPhase)*.018;i.bodyPivot.position.y=i.baseY+r,i.rightArm.rotation.z=Math.sin(e*1.8+i.animPhase)*.04}i.orbitingShards&&i.orbitingShards.forEach(r=>{r.rotation.y+=.04,r.rotation.x+=.02})}}if(this.duelOrbitTarget&&this.autoActionCam){this.duelOrbitAngle+=this.duelOrbitSpeed*t;const n=this.duelOrbitTarget.x+Math.cos(this.duelOrbitAngle)*this.duelOrbitRadius,i=this.duelOrbitTarget.z+Math.sin(this.duelOrbitAngle)*this.duelOrbitRadius,r=this.duelOrbitTarget.y+this.duelOrbitHeight;this.camera.position.lerp(new A(n,r,i),.12),this.controls.target.lerp(this.duelOrbitTarget,.18)}this.gridPulseMaterials&&this.gridPulseMaterials.length>0&&(this.gridPulseMaterials[0].opacity=.68+Math.sin(e*2.4)*.16),this.braziers.forEach(n=>{const i=.88+Math.sin(e*11+n.phase)*.15+Math.cos(e*19)*.08;n.fireCone.scale.set(1,i,1),n.fireLight.intensity=1.7*i,Math.random()<.08&&this.spawnSparks(new A(n.x,1.05,n.z),16737792,1,.8,.028)});for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life-=t,i.life<=0){this.scene.remove(i.mesh),this.particles.splice(n,1);continue}i.vel.y-=i.gravity*t,i.mesh.position.addScaledVector(i.vel,t),i.bounceFloor&&i.mesh.position.y<.05&&(i.mesh.position.y=.05,i.vel.y=Math.abs(i.vel.y)*.44,i.vel.x*=.76,i.vel.z*=.76),i.mesh.rotation.x+=i.spin.x*t,i.mesh.rotation.y+=i.spin.y*t,i.mesh.material.opacity=Math.min(1,i.life/(i.maxLife*.35))}for(let n=this.slashArcs.length-1;n>=0;n--){const i=this.slashArcs[n];i.age+=t;const r=i.age/i.duration;if(r>=1){this.scene.remove(i.mesh),this.slashArcs.splice(n,1);continue}i.mesh.scale.setScalar(1+r*.45),i.mesh.material.opacity=(1-r)*.92}for(let n=this.shockwaves.length-1;n>=0;n--){const i=this.shockwaves[n];i.age+=t;const r=i.age/i.duration;if(r>=1){this.scene.remove(i.mesh),this.shockwaves.splice(n,1);continue}const a=1+r*i.maxRadius*4.5;i.mesh.scale.setScalar(a),i.mesh.material.opacity=(1-r)*.85}for(let n=this.lightningBolts.length-1;n>=0;n--){const i=this.lightningBolts[n];i.life-=t,i.life<=0&&(this.scene.remove(i.line),this.lightningBolts.splice(n,1))}this.screenShake>.005?(this.camera.position.x+=(Math.random()-.5)*this.screenShake,this.camera.position.y+=(Math.random()-.5)*this.screenShake,this.screenShake*=.84):this.screenShake=0,this.controls.update(),this.renderer.render(this.scene,this.camera)}}class Vp{constructor(){this.engine=new Tp("wargame","ultramarines","chaos"),this.opponentMode="ai_medium",this.selectedSquare=null,this.legalMoves=[],this.pendingStratagem=null,this.lastMoveResult=null,this.inspectedPiece=null,this.hpBarElements=new Map,this.arenaContainer=document.getElementById("arena-container"),this.worldUiLayer=document.getElementById("world-ui-layer"),this.arena=new Gp(this.arenaContainer,(t,e)=>this.handleSquareClick(t,e),(t,e)=>this.handleSquareHover(t,e)),this.bindUI(),this.startNewBattle(),this.startWorldUILoop()}bindUI(){const t=document.getElementById("btn-mode-wargame"),e=document.getElementById("btn-mode-classic");t.addEventListener("click",()=>{t.classList.add("active"),e.classList.remove("active"),this.engine.setMode("wargame"),document.getElementById("stratagems-card").classList.remove("hidden"),document.getElementById("cp-bar-container").classList.remove("hidden"),this.logMessage("⚔️ Switched to WARGAME MODE: Units use Wounds (HP), Armor Saves, Dice Rolls & Counter-Attacks!","strat"),this.arena.syncBoardPieces(this.engine),this.updateHUD()}),e.addEventListener("click",()=>{e.classList.add("active"),t.classList.remove("active"),this.engine.setMode("classic"),this.pendingStratagem=null,document.getElementById("stratagems-card").classList.add("hidden"),document.getElementById("cp-bar-container").classList.add("hidden"),this.logMessage("♟️ Switched to CLASSIC BATTLE CHESS: Standard chess rules with guaranteed 3D execution finishers!","strat"),this.arena.syncBoardPieces(this.engine),this.updateHUD()});const n=document.getElementById("select-white-faction"),i=document.getElementById("select-black-faction"),r=()=>{this.engine.setFactions(n.value,i.value),this.arena.syncBoardPieces(this.engine),this.updateHUD();const l=me[n.value].name,h=me[i.value].name;this.logMessage(`⚜️ Army Matchup updated: ${l} vs. ${h}`,"strat")};n.addEventListener("change",r),i.addEventListener("change",r);const a=document.getElementById("select-opponent");a.addEventListener("change",()=>{this.opponentMode=a.value,this.checkAndTriggerAITurn()}),document.getElementById("btn-new-game").addEventListener("click",()=>this.startNewBattle()),document.getElementById("btn-play-again").addEventListener("click",()=>{document.getElementById("victory-modal").classList.add("hidden"),this.startNewBattle()});const o=document.getElementById("btn-sound");o.addEventListener("click",()=>{const l=ae.toggleMute();o.textContent=l?"🔇":"🔊"}),document.querySelectorAll(".cam-btn").forEach(l=>{l.addEventListener("click",()=>{this.arena.setCameraPreset(l.dataset.cam)})});const c=document.getElementById("btn-toggle-duelcam");c.addEventListener("click",()=>{this.arena.autoActionCam=!this.arena.autoActionCam,c.classList.toggle("active",this.arena.autoActionCam),c.textContent=`🎬 Auto Action Duel Cam: ${this.arena.autoActionCam?"ON":"OFF"}`}),document.getElementById("btn-skip-anim").addEventListener("click",()=>{this.arena.skipCurrentAnimation()}),document.getElementById("btn-strat-overcharge").addEventListener("click",()=>{if(!(this.arena.isAnimating||!this.isHumanTurn())&&this.engine.useOverchargeStratagem()){ae.playPsychicBlast();const l=me[this.engine.factions[this.engine.turn]].stratagems.overcharge.name;this.logMessage(`⚡ STRATAGEM ACTIVATED: ${l} (+5 DMG & +2 Armor Pierce on next combat!)`,"strat"),this.updateHUD()}}),document.getElementById("btn-strat-heal").addEventListener("click",()=>{this.arena.isAnimating||!this.isHumanTurn()||(this.pendingStratagem==="heal"?this.pendingStratagem=null:(this.pendingStratagem="heal",this.selectedSquare=null,this.legalMoves=[]),this.refreshBoardHighlights(),this.updateHUD())}),document.getElementById("btn-strat-orbital").addEventListener("click",()=>{this.arena.isAnimating||!this.isHumanTurn()||(this.pendingStratagem==="orbital"?this.pendingStratagem=null:(this.pendingStratagem="orbital",this.selectedSquare=null,this.legalMoves=[]),this.refreshBoardHighlights(),this.updateHUD())})}startNewBattle(){this.arena.skipCurrentAnimation(),this.selectedSquare=null,this.legalMoves=[],this.pendingStratagem=null,this.lastMoveResult=null,this.inspectedPiece=null,this.engine.reset(),this.arena.clearBattleScars(),this.arena.syncBoardPieces(this.engine),this.arena.setHighlights(null,[],[],null),document.getElementById("combat-log").innerHTML="",document.getElementById("victory-modal").classList.add("hidden"),document.getElementById("duel-overlay").classList.add("hidden"),ae.playWarhorn();const t=me[this.engine.factions.w],e=me[this.engine.factions.b];this.logMessage(`⚜️ BATTLE JOINED: ${t.name} (${t.subname}) vs. ${e.name} (${e.subname})!`,"strat"),this.logMessage("💡 Select any friendly miniature to view legal moves and initiate 3D combat.","normal");const n=this.engine.findKing("w");n&&this.renderUnitDataslate(n.piece),this.updateHUD(),this.checkAndTriggerAITurn()}isHumanTurn(){return this.engine.gameOver||this.opponentMode==="ai_vs_ai"?!1:this.opponentMode==="pvp"?!0:this.engine.turn==="w"}handleSquareHover(t,e){if(t===null||e===null){if(this.selectedSquare){const i=this.engine.getPiece(this.selectedSquare.r,this.selectedSquare.c);i&&this.renderUnitDataslate(i)}return}const n=this.engine.getPiece(t,e);n&&this.renderUnitDataslate(n)}async handleSquareClick(t,e){if(this.arena.isAnimating||!this.isHumanTurn())return;if(this.pendingStratagem==="heal"){const i=this.engine.useHealStratagem(t,e);if(i){this.pendingStratagem=null,this.refreshBoardHighlights(),await this.arena.animateStratagemEffect("heal",t,e,!1);const r=this.arena.boardToWorld(t,e).add(new A(0,1.1,0));this.spawnFloatingDamage(r,`+${i.healedAmount} HP`,"#22ff88"),this.logMessage(`💉 ${i.pieceName} healed for +${i.healedAmount} Wounds (${i.newHp}/${i.maxHp} HP).`,"strat"),this.arena.syncBoardPieces(this.engine),this.updateHUD();return}}else if(this.pendingStratagem==="orbital"){const i=this.engine.getPiece(t,e),r=this.engine.useOrbitalStratagem(t,e);if(r){this.pendingStratagem=null,this.refreshBoardHighlights(),await this.arena.animateStratagemEffect("orbital",t,e,r.killed,i==null?void 0:i.faction);const a=this.arena.boardToWorld(t,e).add(new A(0,1.1,0));this.spawnFloatingDamage(a,`ORBITAL -${r.damage} HP!`,"#00ffff"),this.logMessage(`☄️ Orbital Strike hit ${r.pieceName} for ${r.damage} DMG! ${r.killed?"TARGET VAPORIZED!":`(${r.remainingHp} HP left)`}`,r.killed?"kill":"strat"),this.arena.syncBoardPieces(this.engine),this.updateHUD(),this.engine.gameOver&&this.showVictoryModal();return}}if(this.selectedSquare){const i=this.legalMoves.find(r=>r.toR===t&&r.toC===e);if(i){this.selectedSquare=null,this.legalMoves=[],this.arena.setHighlights(null,[],[],this.lastMoveResult);const r=this.engine.getPiece(i.fromR,i.fromC),a=r.side==="w"?0:7;let o="q";r.type==="p"&&i.toR===a&&(o=await this.promptPromotionChoice(r.side)),await this.executeAndAnimateMove(i,o);return}}const n=this.engine.getPiece(t,e);n&&n.side===this.engine.turn?(this.pendingStratagem=null,this.selectedSquare={r:t,c:e},this.legalMoves=this.engine.getLegalMoves(t,e),this.renderUnitDataslate(n),this.refreshBoardHighlights(),ae.playStep(!1)):(this.selectedSquare=null,this.legalMoves=[],n&&this.renderUnitDataslate(n),this.refreshBoardHighlights())}refreshBoardHighlights(){const t=[];if(this.pendingStratagem==="heal")this.engine.getAllPieces(this.engine.turn).forEach(n=>{n.hp<n.maxHp&&t.push({r:n.r,c:n.c,color:2293640})});else if(this.pendingStratagem==="orbital"){const e=this.engine.turn==="w"?"b":"w";this.engine.getAllPieces(e).forEach(i=>{i.type!=="k"&&t.push({r:i.r,c:i.c,color:65535})})}this.arena.setHighlights(this.selectedSquare,this.legalMoves,t,this.lastMoveResult)}promptPromotionChoice(t){return new Promise(e=>{const n=document.getElementById("promotion-modal"),i=me[this.engine.factions[t]];n.querySelectorAll(".promo-btn").forEach(a=>{const o=a.dataset.type;a.textContent=`${i.units[o].name} (${o.toUpperCase()})`,a.onclick=()=>{n.classList.add("hidden"),e(o)}}),n.classList.remove("hidden")})}async executeAndAnimateMove(t,e="q"){const n=this.engine.executeMove(t,e);if(n){if(this.lastMoveResult=n,n.isAttack)this.showDuelOverlay(n),await this.arena.animateCombat(n,this.engine,{onPhaseText:i=>{document.getElementById("duel-phase-text").textContent=i},onDamagePopup:(i,r,a)=>{this.spawnFloatingDamage(i,r,a),this.updateDuelOverlayLiveHP(n)}}),this.hideDuelOverlay(),this.logCombatOutcome(n);else{const i=this.formatSquare(n.toR,n.toC);this.logMessage(`🥾 <strong>${n.attackerSnapshot.name}</strong> advances to <strong>${i}</strong>${n.isCastle?" (Castled)":""}.`,"normal"),await this.arena.animateMove(n,this.engine)}if(n.promotedTo&&this.logMessage(`👑 ASCENSION! Promoted to <strong>${n.promotedTo.name}</strong>!`,"kill"),this.arena.setHighlights(null,[],[],this.lastMoveResult),this.updateHUD(),this.engine.gameOver){ae.playWarhorn(),this.showVictoryModal();return}await this.checkAndTriggerAITurn()}}showDuelOverlay(t){const e=document.getElementById("duel-overlay"),n=t.attackerSnapshot,i=t.defenderSnapshot,r=me[n.faction].units[n.type],a=me[i.faction].units[i.type],o=t.combat;document.getElementById("duel-atk-name").textContent=n.name,document.getElementById("duel-atk-weapon").textContent=r.weapon,document.getElementById("duel-atk-hp-bar").style.width=`${n.hp/n.maxHp*100}%`,document.getElementById("duel-atk-hp-text").textContent=`${n.hp} / ${n.maxHp} HP`;const c=o.diceRolls.map(l=>`[${l}]`).join(" ");document.getElementById("duel-atk-dice").textContent=`🎲 ${c} + ${n.atkBase}${o.overcharged?" ⚡+5":""}`,document.getElementById("duel-def-name").textContent=i.name,document.getElementById("duel-def-weapon").textContent=a.weapon,document.getElementById("duel-def-hp-bar").style.width=`${i.hp/i.maxHp*100}%`,document.getElementById("duel-def-hp-text").textContent=`${i.hp} / ${i.maxHp} HP`,document.getElementById("duel-def-armor").textContent=`🛡️ Armor ${i.armor}`,document.getElementById("duel-phase-text").textContent=`${n.name} charges ${i.name}!`,e.classList.remove("hidden")}updateDuelOverlayLiveHP(t){const e=t.attackerSnapshot,n=t.defenderSnapshot,i=t.combat,r=Math.max(0,i.defenderRemainingHp/n.maxHp*100);document.getElementById("duel-def-hp-bar").style.width=`${r}%`,document.getElementById("duel-def-hp-text").textContent=`${i.defenderRemainingHp} / ${n.maxHp} HP`;const a=Math.max(0,i.attackerRemainingHp/e.maxHp*100);document.getElementById("duel-atk-hp-bar").style.width=`${a}%`,document.getElementById("duel-atk-hp-text").textContent=`${i.attackerRemainingHp} / ${e.maxHp} HP`}hideDuelOverlay(){document.getElementById("duel-overlay").classList.add("hidden")}logCombatOutcome(t){const e=t.attackerSnapshot,n=t.defenderSnapshot,i=t.combat,r=me[e.faction].units[e.type].finisherName;if(!i.defenderSurvived)this.logMessage(`💀 <strong>${e.name}</strong> executed <strong>${n.name}</strong> with <em>${r}</em> (-${i.damageDealt} DMG)!`,"kill");else{let a=`⚔️ <strong>${e.name}</strong> dealt <strong>${i.damageDealt} DMG</strong> to <strong>${n.name}</strong> (${i.defenderRemainingHp}/${n.maxHp} HP left).`;i.counterAttack&&(a+=` 🛡️ Counter-attack dealt <strong>${i.counterAttack.damage} DMG</strong> back!`),i.attackerDiedInCounter&&(a+=` 💀 <strong>${e.name}</strong> was slain in counter-combat!`),this.logMessage(a,"combat")}}async checkAndTriggerAITurn(){if(this.engine.gameOver||this.arena.isAnimating||!(this.opponentMode==="ai_vs_ai"||this.opponentMode.startsWith("ai_")&&this.engine.turn==="b"))return;const e=this.opponentMode==="ai_easy"?"easy":this.opponentMode==="ai_hard"?"hard":"medium";if(await new Promise(i=>setTimeout(i,380)),this.engine.gameOver)return;const n=this.engine.chooseAIMove(e);if(!(!n||!n.move)){if(n.aiStratagemEvent){const i=n.aiStratagemEvent;if(i.type==="heal"){const r=i.data;await this.arena.animateStratagemEffect("heal",r.r,r.c,!1),this.logMessage(`🤖 AI used Repair Stratagem on <strong>${r.pieceName}</strong> (+${r.healedAmount} HP)!`,"strat")}else i.type==="overcharge"&&this.logMessage("🤖 AI activated Overcharge Weapons Stratagem (+5 DMG)!","strat");this.updateHUD()}await this.executeAndAnimateMove(n.move,"q")}}updateHUD(){const t=this.engine.turn,e=this.engine.factions[t],n=me[e];document.getElementById("turn-icon").textContent=n.icon,document.getElementById("turn-number-label").textContent=`TURN ${this.engine.turnNumber} • ${t==="w"?"SOUTH COMMAND":"NORTH COMMAND"}`,document.getElementById("turn-faction-name").textContent=n.name,document.getElementById("turn-motto").textContent=`"${n.motto}"`,document.getElementById("cp-value").textContent=`⚡ ${this.engine.cp[t]} / 6`;const i=this.engine.isInCheck(t);document.getElementById("check-warning").classList.toggle("hidden",!i);const r=n.stratagems;document.getElementById("strat-overcharge-name").textContent=r.overcharge.name,document.getElementById("strat-heal-name").textContent=r.heal.name,document.getElementById("strat-orbital-name").textContent=r.orbital.name;const a=this.engine.cp[t],o=this.isHumanTurn(),c=this.engine.activeBuffs[t].overcharge,l=document.getElementById("btn-strat-overcharge"),h=document.getElementById("btn-strat-heal"),m=document.getElementById("btn-strat-orbital");l.disabled=!o||a<1||c,l.classList.toggle("active",c),h.disabled=!o||a<2,h.classList.toggle("active",this.pendingStratagem==="heal"),m.disabled=!o||a<3,m.classList.toggle("active",this.pendingStratagem==="orbital");const d=document.getElementById("stratagem-status-tag");this.pendingStratagem==="heal"?d.textContent="SELECT FRIENDLY UNIT":this.pendingStratagem==="orbital"?d.textContent="SELECT ENEMY TARGET":c?d.textContent="OVERCHARGED!":d.textContent=`${a} CP READY`}renderUnitDataslate(t){if(!t)return;this.inspectedPiece=t;const e=me[t.faction],n=e.units[t.type];document.getElementById("unit-role-badge").textContent=Ep[t.type].toUpperCase();const i=Math.max(0,Math.round(t.hp/t.maxHp*100)),r=document.getElementById("unit-inspector-content");r.innerHTML=`
      <div class="unit-title-block">
        <h3>${e.icon} ${t.name}</h3>
        <div class="unit-subtitle">${n.title} • ${e.name}</div>
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700;">
          <span>WOUNDS (HP)</span>
          <span>${this.engine.mode==="classic"?"1-HIT LETHAL (CLASSIC)":`${t.hp} / ${t.maxHp} HP`}</span>
        </div>
        <div class="hp-bar-outer">
          <div class="hp-bar-inner" style="width: ${i}%"></div>
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-box">
          <span>ATTACK ROLL</span>
          <strong>🎲 ${t.atkDice}D6 + ${t.atkBase}</strong>
        </div>
        <div class="stat-box">
          <span>ARMOR SAVE</span>
          <strong>🛡️ ${t.armor} ${t.armorPierce?`(AP -${t.armorPierce})`:""}</strong>
        </div>
        <div class="stat-box">
          <span>COUNTER-STRIKE</span>
          <strong>⚔️ 1D6 + ${t.counterBase}</strong>
        </div>
        <div class="stat-box">
          <span>FINISHER</span>
          <strong>💀 ${n.finisherName}</strong>
        </div>
      </div>

      <div class="stat-box">
        <span>ARMAMENT</span>
        <strong style="color:#fff; font-size:12px;">${n.weapon}</strong>
      </div>

      <p class="unit-lore">"${n.lore}"</p>
    `}spawnFloatingDamage(t,e,n="#ff3333"){const i=this.arena.projectToScreen(t);if(!i.visible)return;const r=document.createElement("div");r.className="floating-dmg",r.style.left=`${i.x}px`,r.style.top=`${i.y}px`,r.style.color=n,r.textContent=e,this.worldUiLayer.appendChild(r),setTimeout(()=>{r.remove()},1250)}startWorldUILoop(){const t=()=>{if(requestAnimationFrame(t),this.engine.mode!=="wargame"){for(const n of this.hpBarElements.values())n.style.opacity="0";return}const e=new Set;for(let n=0;n<8;n++)for(let i=0;i<8;i++){const r=this.engine.board[n][i];if(!r)continue;e.add(r.id);let a=this.hpBarElements.get(r.id);a||(a=document.createElement("div"),a.className="world-hp-tag",a.innerHTML='<div class="world-hp-num"></div><div class="world-hp-fill"></div>',this.worldUiLayer.appendChild(a),this.hpBarElements.set(r.id,a));const o=this.arena.unitMeshes.get(r.id);if(!o)continue;const c=r.hp<r.maxHp,l=r.type==="k",h=this.selectedSquare&&this.selectedSquare.r===n&&this.selectedSquare.c===i;if(!c&&!l&&!h){a.style.opacity="0";continue}const m=o.position.clone().add(new A(0,1.15,0)),d=this.arena.projectToScreen(m);if(!d.visible){a.style.opacity="0";continue}a.style.opacity="1",a.style.left=`${d.x}px`,a.style.top=`${d.y}px`;const f=Math.max(0,Math.round(r.hp/r.maxHp*100)),g=a.querySelector(".world-hp-fill"),_=a.querySelector(".world-hp-num");_.textContent=`${r.hp}/${r.maxHp}`,g.style.width=`${f}%`,g.style.background=f>60?"#22ee88":f>30?"#ffbb00":"#ff2233"}for(const[n,i]of this.hpBarElements.entries())e.has(n)||(i.remove(),this.hpBarElements.delete(n))};requestAnimationFrame(t)}showVictoryModal(){const t=document.getElementById("victory-modal"),e=this.engine.winner;if(e==="w"||e==="b"){const n=me[this.engine.factions[e]];document.getElementById("victory-icon").textContent=n.icon,document.getElementById("victory-title").textContent=`${n.name.toUpperCase()} TRIUMPH!`}else document.getElementById("victory-icon").textContent="⚔️",document.getElementById("victory-title").textContent="GRIMDARK STALEMATE";document.getElementById("victory-reason").textContent=this.engine.winReason,t.classList.remove("hidden")}formatSquare(t,e){return`${["A","B","C","D","E","F","G","H"][e]}${8-t}`}logMessage(t,e="normal"){const n=document.getElementById("combat-log"),i=document.createElement("div");i.className=`log-entry ${e}`,i.innerHTML=t,n.prepend(i)}}window.addEventListener("DOMContentLoaded",()=>{window.battleChessApp=new Vp});
