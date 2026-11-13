(()=>{var gu=0,Yl=1,_u=2;var bh=1,wl=2,Bn=3,ai=0,qe=1,Ye=2;var ni=0,rs=1,ql=2,$l=3,Zl=4,xu=5,Ei=100,yu=101,vu=102,Jl=103,Kl=104,Mu=200,bu=201,Su=202,Eu=203,Do=204,No=205,Tu=206,wu=207,Au=208,Ru=209,Cu=210,Pu=211,Lu=212,Iu=213,Uu=214,Du=0,Nu=1,Ou=2,Zr=3,Fu=4,ku=5,Bu=6,zu=7,Sh=0,Hu=1,Gu=2,ii=0,Vu=1,Wu=2,Xu=3,Yu=4,qu=5,$u=6;var Eh=300,ls=301,cs=302,Oo=303,Fo=304,Ra=306,Pi=1e3,Mn=1001,ko=1002,Ue=1003,jl=1004;var Ja=1005;var pn=1006,Zu=1007;var Ws=1008;var si=1009,Ju=1010,Ku=1011,Al=1012,Th=1013,ti=1014,ei=1015,Xs=1016,wh=1017,Ah=1018,Ai=1020,ju=1021,bn=1023,Qu=1024,td=1025,Ri=1026,hs=1027,Rl=1028,Rh=1029,ed=1030,Ch=1031,Ph=1033,Ka=33776,ja=33777,Qa=33778,to=33779,Ql=35840,tc=35841,ec=35842,nc=35843,Lh=36196,ic=37492,sc=37496,rc=37808,ac=37809,oc=37810,lc=37811,cc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,eo=36492,yc=36494,vc=36495,nd=36283,Mc=36284,bc=36285,Sc=36286;var Jr=2300,Kr=2301,no=2302,Ec=2400,Tc=2401,wc=2402;var Ih=3e3,Ci=3001,id=3200,sd=3201,Uh=0,rd=1,mn="",Ae="srgb",Vn="srgb-linear",Cl="display-p3",Ca="display-p3-linear",jr="linear",me="srgb",Qr="rec709",ta="p3";var Fi=7680;var Ac=519,ad=512,od=513,ld=514,Dh=515,cd=516,hd=517,ud=518,dd=519,Bo=35044;var Rc="300 es",zo=1035,Gn=2e3,ea=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var io=Math.PI/180,Ho=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function fd(i,t){return(i%t+t)%t}function so(i,t,e){return(1-e)*i+e*t}function Cc(i){return(i&i-1)===0&&i!==0}function Go(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],_=s[1],y=s[4],w=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*x+o*_+l*C,r[3]=a*p+o*y+l*T,r[6]=a*m+o*w+l*A,r[1]=c*x+h*_+u*C,r[4]=c*p+h*y+u*T,r[7]=c*m+h*w+u*A,r[2]=f*x+d*_+g*C,r[5]=f*p+d*y+g*T,r[8]=f*m+d*w+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ro.makeScale(t,e)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ro=new Zt;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=na("canvas");return i.style.display="block",i}var Pc={};function zs(i){i in Pc||(Pc[i]=!0,console.warn(i))}var Lc=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ic=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vr={[Vn]:{transfer:jr,primaries:Qr,toReference:i=>i,fromReference:i=>i},[Ae]:{transfer:me,primaries:Qr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ca]:{transfer:jr,primaries:ta,toReference:i=>i.applyMatrix3(Ic),fromReference:i=>i.applyMatrix3(Lc)},[Cl]:{transfer:me,primaries:ta,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ic),fromReference:i=>i.applyMatrix3(Lc).convertLinearToSRGB()}},md=new Set([Vn,Ca]),re={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!md.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=vr[t].toReference,s=vr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return vr[i].primaries},getTransfer:function(i){return i===mn?jr:vr[i].transfer}};function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,ia=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=na("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=as(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gd=0,sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oo(s[a].image)):r.push(oo(s[a]))}else r=oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,cn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=pn,a=Ws,o=bn,l=si,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ri(),this.name="",this.source=new sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ci?Ae:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?Ci:Ih}set encoding(t){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ci?Ae:mn}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Eh;cn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,w=(d+1)/2,C=(m+1)/2,T=(h+f)/4,A=(u+x)/4,D=(g+p)/4;return y>w&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=D/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vo=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?Ae:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Vo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ra=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wo=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-o,m=l*f+c*d+h*g+u*x,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let C=Math.sqrt(y),T=Math.atan2(C,m*_);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}let w=o*_;if(l=l*p+f*w,c=c*p+d*w,h=h*p+g*w,u=u*p+x*w,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo=new P,Uc=new li,Li=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),br.subVectors(this.max,Is),Bi.subVectors(t.a,Is),zi.subVectors(t.b,Is),Hi.subVectors(t.c,Is),Zn.subVectors(zi,Bi),Jn.subVectors(Hi,zi),yi.subVectors(Bi,Hi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-yi.z,yi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,yi.z,0,-yi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-yi.y,yi.x,0];return!co(e,Bi,zi,Hi,br)||(e=[1,0,0,0,1,0,0,0,1],!co(e,Bi,zi,Hi,br))?!1:(Sr.crossVectors(Zn,Jn),e=[Sr.x,Sr.y,Sr.z],co(e,Bi,zi,Hi,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,Mr=new Li,Bi=new P,zi=new P,Hi=new P,Zn=new P,Jn=new P,yi=new P,Is=new P,br=new P,Sr=new P,vi=new P;function co(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xd=new Li,Us=new P,ho=new P,us=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(ho)),this.expandByPoint(Us.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new P,uo=new P,Er=new P,Kn=new P,fo=new P,Tr=new P,po=new P,aa=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uo.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(uo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Er),o=Kn.dot(this.direction),l=-Kn.dot(Er),c=Kn.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uo).addScaledVector(Er,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){fo.subVectors(e,t),Tr.subVectors(n,t),po.crossVectors(fo,Tr);let a=this.direction.dot(po),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);let l=o*this.direction.dot(Tr.crossVectors(Kn,Tr));if(l<0)return null;let c=o*this.direction.dot(fo.cross(Kn));if(c<0||l+c>a)return null;let h=-o*Kn.dot(po);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,vd)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),jn.crossVectors(n,on),jn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),jn.crossVectors(n,on)),jn.normalize(),wr.crossVectors(on,jn),s[0]=jn.x,s[4]=wr.x,s[8]=on.x,s[1]=jn.y,s[5]=wr.y,s[9]=on.y,s[2]=jn.z,s[6]=wr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],y=n[7],w=n[11],C=n[15],T=s[0],A=s[4],D=s[8],v=s[12],S=s[1],N=s[5],Y=s[9],ot=s[13],I=s[2],F=s[6],V=s[10],Z=s[14],J=s[3],$=s[7],Q=s[11],at=s[15];return r[0]=a*T+o*S+l*I+c*J,r[4]=a*A+o*N+l*F+c*$,r[8]=a*D+o*Y+l*V+c*Q,r[12]=a*v+o*ot+l*Z+c*at,r[1]=h*T+u*S+f*I+d*J,r[5]=h*A+u*N+f*F+d*$,r[9]=h*D+u*Y+f*V+d*Q,r[13]=h*v+u*ot+f*Z+d*at,r[2]=g*T+x*S+p*I+m*J,r[6]=g*A+x*N+p*F+m*$,r[10]=g*D+x*Y+p*V+m*Q,r[14]=g*v+x*ot+p*Z+m*at,r[3]=_*T+y*S+w*I+C*J,r[7]=_*A+y*N+w*F+C*$,r[11]=_*D+y*Y+w*V+C*Q,r[15]=_*v+y*ot+w*Z+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+p*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=u*p*c-x*f*c+x*l*d-o*p*d-u*l*m+o*f*m,y=g*f*c-h*p*c-g*l*d+a*p*d+h*l*m-a*f*m,w=h*x*c-g*u*c+g*o*d-a*x*d-h*o*m+a*u*m,C=g*u*l-h*x*l-g*o*f+a*x*f+h*o*p-a*u*p,T=e*_+n*y+s*w+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=_*A,t[1]=(x*f*r-u*p*r-x*s*d+n*p*d+u*s*m-n*f*m)*A,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*m+n*l*m)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*A,t[4]=y*A,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*A,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*A,t[8]=w*A,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*m-e*u*m)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*A,t[12]=C*A,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*p+e*u*p)*A,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,p=a*u,m=o*u,_=l*c,y=l*h,w=l*u,C=n.x,T=n.y,A=n.z;return s[0]=(1-(x+m))*C,s[1]=(d+w)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-w)*T,s[5]=(1-(f+m))*T,s[6]=(p+_)*T,s[7]=0,s[8]=(g+y)*A,s[9]=(p-_)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Gi.set(s[0],s[1],s[2]).length(),a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,h=1/a,u=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===Gn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ea)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h,g,x;if(o===Gn)g=(a+r)*u,x=-2*u;else if(o===ea)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new P,yn=new be,yd=new P(0,0,0),vd=new P(1,1,1),jn=new P,wr=new P,on=new P,Dc=new be,Nc=new li,oa=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oa.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,Oc=new P,Vi=new li,On=new be,Ar=new P,Ds=new P,bd=new P,Sd=new li,Fc=new P(1,0,0),kc=new P(0,1,0),Bc=new P(0,0,1),Ed={type:"added"},Td={type:"removed"},Ze=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new oa,n=new li,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Zt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ds,Ar,this.up):On.lookAt(Ar,Ds,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(On),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ze.DEFAULT_UP=new P(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new P,Fn=new P,mo=new P,kn=new P,Wi=new P,Xi=new P,zc=new P,go=new P,_o=new P,xo=new P,Rr=!1,wi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Fn.subVectors(n,e),mo.subVectors(t,e);let a=vn.dot(vn),o=vn.dot(Fn),l=vn.dot(mo),c=Fn.dot(Fn),h=Fn.dot(mo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(t,e,n,s,r,a,o,l){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Fn.subVectors(t,e),vn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),go.subVectors(t,n);let l=Wi.dot(go),c=Xi.dot(go);if(l<=0&&c<=0)return e.copy(n);_o.subVectors(t,s);let h=Wi.dot(_o),u=Xi.dot(_o);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Wi,a);xo.subVectors(t,r);let d=Wi.dot(xo),g=Xi.dot(xo);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Xi,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return zc.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(zc,o);let m=1/(p+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=fd(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return re.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Xe(Qe.r*255,0,255))*65536+Math.round(Xe(Qe.g*255,0,255))*256+Math.round(Xe(Qe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ae){re.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Cr);let n=so(Qn.h,Cr.h,e),s=so(Qn.s,Cr.s,e),r=so(Qn.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Ot;Ot.NAMES=Oh;var wd=0,Xn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=rs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},jt=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new P,Pr=new pt,$e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}};var ca=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ha=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ad=0,fn=new be,vo=new Ze,Yi=new P,ln=new Li,Ns=new Li,He=new P,Pe=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?ha:ca)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(ln.min,Ns.min),ln.expandByPoint(He),He.addVectors(ln.max,Ns.max),ln.expandByPoint(He)):(ln.expandByPoint(Ns.min),ln.expandByPoint(Ns.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),He.add(Yi)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new P,h[S]=new P;let u=new P,f=new P,d=new P,g=new pt,x=new pt,p=new pt,m=new P,_=new P;function y(S,N,Y){u.fromArray(s,S*3),f.fromArray(s,N*3),d.fromArray(s,Y*3),g.fromArray(a,S*2),x.fromArray(a,N*2),p.fromArray(a,Y*2),f.sub(u),d.sub(u),x.sub(g),p.sub(g);let ot=1/(x.x*p.y-p.x*x.y);isFinite(ot)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-x.y).multiplyScalar(ot),_.copy(d).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(ot),c[S].add(m),c[N].add(m),c[Y].add(m),h[S].add(_),h[N].add(_),h[Y].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let S=0,N=w.length;S<N;++S){let Y=w[S],ot=Y.start,I=Y.count;for(let F=ot,V=ot+I;F<V;F+=3)y(n[F+0],n[F+1],n[F+2])}let C=new P,T=new P,A=new P,D=new P;function v(S){A.fromArray(r,S*3),D.copy(A);let N=c[S];C.copy(N),C.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(D,N);let ot=T.dot(h[S])<0?-1:1;l[S*4]=C.x,l[S*4+1]=C.y,l[S*4+2]=C.z,l[S*4+3]=ot}for(let S=0,N=w.length;S<N;++S){let Y=w[S],ot=Y.start,I=Y.count;for(let F=ot,V=ot+I;F<V;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new $e(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new be,Mi=new aa,Lr=new us,Gc=new P,qi=new P,$i=new P,Zi=new P,Mo=new P,Ir=new P,Ur=new pt,Dr=new pt,Nr=new pt,Vc=new P,Wc=new P,Xc=new P,Or=new P,Fr=new P,Ct=class extends Ze{constructor(t=new Pe,e=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mo.fromBufferAttribute(u,t),a?Ir.addScaledVector(Mo,h):Ir.addScaledVector(Mo.sub(e),h))}e.add(Ir)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Lr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Lr,Gc)===null||Mi.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Hc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=a[p.materialIndex],_=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let w=_,C=y;w<C;w+=3){let T=o.getX(w),A=o.getX(w+1),D=o.getX(w+2);s=kr(this,m,t,n,c,h,u,T,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=o.getX(p),y=o.getX(p+1),w=o.getX(p+2);s=kr(this,a,t,n,c,h,u,_,y,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=a[p.materialIndex],_=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let w=_,C=y;w<C;w+=3){let T=w,A=w+1,D=w+2;s=kr(this,m,t,n,c,h,u,T,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=p,y=p+1,w=p+2;s=kr(this,a,t,n,c,h,u,_,y,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Rd(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ai,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:i}}function kr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qi),i.getVertexPosition(l,$i),i.getVertexPosition(c,Zi);let h=Rd(i,t,e,n,qi,$i,Zi,Or);if(h){s&&(Ur.fromBufferAttribute(s,o),Dr.fromBufferAttribute(s,l),Nr.fromBufferAttribute(s,c),h.uv=wi.getInterpolation(Or,qi,$i,Zi,Ur,Dr,Nr,new pt)),r&&(Ur.fromBufferAttribute(r,o),Dr.fromBufferAttribute(r,l),Nr.fromBufferAttribute(r,c),h.uv1=wi.getInterpolation(Or,qi,$i,Zi,Ur,Dr,Nr,new pt),h.uv2=h.uv1),a&&(Vc.fromBufferAttribute(a,o),Wc.fromBufferAttribute(a,l),Xc.fromBufferAttribute(a,c),h.normal=wi.getInterpolation(Or,qi,$i,Zi,Vc,Wc,Xc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};wi.getNormal(qi,$i,Zi,u.normal),h.face=u}return h}var tn=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(x,p,m,_,y,w,C,T,A,D,v){let S=w/A,N=C/D,Y=w/2,ot=C/2,I=T/2,F=A+1,V=D+1,Z=0,J=0,$=new P;for(let Q=0;Q<V;Q++){let at=Q*N-ot;for(let dt=0;dt<F;dt++){let X=dt*S-Y;$[x]=X*_,$[p]=at*y,$[m]=I,c.push($.x,$.y,$.z),$[x]=0,$[p]=0,$[m]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(dt/A),u.push(1-Q/D),Z+=1}}for(let Q=0;Q<D;Q++)for(let at=0;at<A;at++){let dt=f+at+F*Q,X=f+at+F*(Q+1),tt=f+(at+1)+F*(Q+1),ft=f+(at+1)+F*Q;l.push(dt,X,ft),l.push(X,tt,ft),J+=6}o.addGroup(d,J,v),d+=J,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Cd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fh(i){return i.getRenderTarget()===null?i.outputColorSpace:re.workingColorSpace}var Pd={clone:ds,merge:rn},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ua=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ge=class extends ua{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,Ki=1,Xo=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(Ji,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Ge(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let a=new Ge(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let o=new Ge(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let l=new Ge(Ji,Ki,t,e);l.layers=this.layers,this.add(l);let c=new Ge(Ji,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},da=class extends cn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yo=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ci?Ae:mn),this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ni});r.uniforms.tEquirect.value=e;let a=new Ct(s,r),o=e.minFilter;return e.minFilter===Ws&&(e.minFilter=pn),new Xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},bo=new P,Ud=new P,Dd=new Zt,zn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bo.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dd.getNormalMatrix(t),s=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new us,Br=new P,Ys=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],_=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,p-d,w-m).normalize(),n[1].setComponents(l+r,f+c,p+d,w+m).normalize(),n[2].setComponents(l+a,f+h,p+g,w+_).normalize(),n[3].setComponents(l-a,f-h,p-g,w-_).normalize(),n[4].setComponents(l-o,f-u,p-x,w-y).normalize(),e===Gn)n[5].setComponents(l+o,f+u,p+x,w+y).normalize();else if(e===ea)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];e?i.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):i.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Le=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*f-a;for(let y=0;y<c;y++){let w=y*u-r;g.push(w,-_,0),x.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let y=_+c*m,w=_+c*(m+1),C=_+1+c*(m+1),T=_+1+c*m;d.push(y,w,T),d.push(w,C,T)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lf=`vec3 transformedNormal = objectNormal;
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
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`
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
}`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cf=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,Of=`struct PhysicalMaterial {
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
}`,Ff=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,em=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Od,alphahash_pars_fragment:Fd,alphamap_fragment:kd,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:Yd,beginnormal_vertex:qd,bsdfs:$d,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:tf,color_fragment:ef,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:rf,common:af,cube_uv_reflection_fragment:of,defaultnormal_vertex:lf,displacementmap_pars_vertex:cf,displacementmap_vertex:hf,emissivemap_fragment:uf,emissivemap_pars_fragment:df,colorspace_fragment:ff,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:gf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:vf,fog_pars_vertex:Mf,fog_fragment:bf,fog_pars_fragment:Sf,gradientmap_pars_fragment:Ef,lightmap_fragment:Tf,lightmap_pars_fragment:wf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Rf,lights_pars_begin:Cf,lights_toon_fragment:Lf,lights_toon_pars_fragment:If,lights_phong_fragment:Uf,lights_phong_pars_fragment:Df,lights_physical_fragment:Nf,lights_physical_pars_fragment:Of,lights_fragment_begin:Ff,lights_fragment_maps:kf,lights_fragment_end:Bf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Vf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:Yf,map_particle_pars_fragment:qf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Zf,morphcolor_vertex:Jf,morphnormal_vertex:Kf,morphtarget_pars_vertex:jf,morphtarget_vertex:Qf,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:vp,shadowmask_pars_fragment:Mp,skinbase_vertex:bp,skinning_pars_vertex:Sp,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:wp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Ip,uv_pars_vertex:Up,uv_vertex:Dp,worldpos_vertex:Np,background_vert:Op,background_frag:Fp,backgroundCube_vert:kp,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:Hp,depth_vert:Gp,depth_frag:Vp,distanceRGBA_vert:Wp,distanceRGBA_frag:Xp,equirect_vert:Yp,equirect_frag:qp,linedashed_vert:$p,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:Kp,meshlambert_vert:jp,meshlambert_frag:Qp,meshmatcap_vert:tm,meshmatcap_frag:em,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},ut={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Cn={basic:{uniforms:rn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:rn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:rn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:rn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:rn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:rn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:rn([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:rn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:rn([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:rn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:rn([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:rn([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:rn([ut.lights,ut.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Cn.physical={uniforms:rn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var zr={r:0,b:0,g:0};function gm(i,t,e,n,s,r,a){let o=new Ot(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(p,m){let _=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?e:t).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ra)?(h===void 0&&(h=new Ct(new tn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ds(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=re.getTransfer(y.colorSpace)!==me,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ct(new Le(2,2),new Sn({name:"BackgroundMaterial",uniforms:ds(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=re.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,m){p.getRGB(zr,Fh(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:g}}function _m(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(I,F,V,Z,J){let $=!1;if(a){let Q=x(Z,V,F);c!==Q&&(c=Q,d(c.object)),$=m(I,Z,V,J),$&&_(I,Z,V,J)}else{let Q=F.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==Q)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=Q,$=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,D(I,F,V,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,F,V){let Z=V.wireframe===!0,J=o[I.id];J===void 0&&(J={},o[I.id]=J);let $=J[F.id];$===void 0&&($={},J[F.id]=$);let Q=$[Z];return Q===void 0&&(Q=p(f()),$[Z]=Q),Q}function p(I){let F=[],V=[],Z=[];for(let J=0;J<s;J++)F[J]=0,V[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:Z,object:I,attributes:{},index:null}}function m(I,F,V,Z){let J=c.attributes,$=F.attributes,Q=0,at=V.getAttributes();for(let dt in at)if(at[dt].location>=0){let tt=J[dt],ft=$[dt];if(ft===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Z}function _(I,F,V,Z){let J={},$=F.attributes,Q=0,at=V.getAttributes();for(let dt in at)if(at[dt].location>=0){let tt=$[dt];tt===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),J[dt]=ft,Q++}c.attributes=J,c.attributesNum=Q,c.index=Z}function y(){let I=c.newAttributes;for(let F=0,V=I.length;F<V;F++)I[F]=0}function w(I){C(I,0)}function C(I,F){let V=c.newAttributes,Z=c.enabledAttributes,J=c.attributeDivisors;V[I]=1,Z[I]===0&&(i.enableVertexAttribArray(I),Z[I]=1),J[I]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),J[I]=F)}function T(){let I=c.newAttributes,F=c.enabledAttributes;for(let V=0,Z=F.length;V<Z;V++)F[V]!==I[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(I,F,V,Z,J,$,Q){Q===!0?i.vertexAttribIPointer(I,F,V,J,$):i.vertexAttribPointer(I,F,V,Z,J,$)}function D(I,F,V,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let J=Z.attributes,$=V.getAttributes(),Q=F.defaultAttributeValues;for(let at in $){let dt=$[at];if(dt.location>=0){let X=J[at];if(X===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let tt=X.normalized,ft=X.itemSize,vt=e.get(X);if(vt===void 0)continue;let Mt=vt.buffer,wt=vt.type,At=vt.bytesPerElement,Et=n.isWebGL2===!0&&(wt===i.INT||wt===i.UNSIGNED_INT||X.gpuType===Th);if(X.isInterleavedBufferAttribute){let Yt=X.data,R=Yt.stride,lt=X.offset;if(Yt.isInstancedInterleavedBuffer){for(let L=0;L<dt.locationSize;L++)C(dt.location+L,Yt.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let L=0;L<dt.locationSize;L++)w(dt.location+L);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let L=0;L<dt.locationSize;L++)A(dt.location+L,ft/dt.locationSize,wt,tt,R*At,(lt+ft/dt.locationSize*L)*At,Et)}else{if(X.isInstancedBufferAttribute){for(let Yt=0;Yt<dt.locationSize;Yt++)C(dt.location+Yt,X.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Yt=0;Yt<dt.locationSize;Yt++)w(dt.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Yt=0;Yt<dt.locationSize;Yt++)A(dt.location+Yt,ft/dt.locationSize,wt,tt,ft*At,ft/dt.locationSize*Yt*At,Et)}}else if(Q!==void 0){let tt=Q[at];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(dt.location,tt);break;case 3:i.vertexAttrib3fv(dt.location,tt);break;case 4:i.vertexAttrib4fv(dt.location,tt);break;default:i.vertexAttrib1fv(dt.location,tt)}}}}T()}function v(){Y();for(let I in o){let F=o[I];for(let V in F){let Z=F[V];for(let J in Z)g(Z[J].object),delete Z[J];delete F[V]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;let F=o[I.id];for(let V in F){let Z=F[V];for(let J in Z)g(Z[J].object),delete Z[J];delete F[V]}delete o[I.id]}function N(I){for(let F in o){let V=o[F];if(V[I.id]===void 0)continue;let Z=V[I.id];for(let J in Z)g(Z[J].object),delete Z[J];delete V[I.id]}}function Y(){ot(),h=!0,c!==l&&(c=l,d(c.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:ot,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:w,disableUnusedAttributes:T}}function xm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ym(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,w=a||t.has("OES_texture_float"),C=y&&w,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:T}}function vm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,y=_*4,w=m.clippingState||null;l.value=w,w=h(g,f,y,d);for(let C=0;C!==y;++C)w[C]=e[C];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,w=d;y!==x;++y,w+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Mm(i){let t=new WeakMap;function e(a,o){return o===Oo?a.mapping=ls:o===Fo&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Oo||o===Fo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yo(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fa=class extends ua{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,Yc=[.125,.215,.35,.446,.526,.582],Ti=20,So=new fa,qc=new Ot,Eo=null,To=0,wo=0,Si=(1+Math.sqrt(5))/2,ji=1/Si,$c=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Si,ji),new P(0,Si,-ji),new P(ji,0,Si),new P(-ji,0,Si),new P(Si,ji,0),new P(-Si,ji,0)],pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,To,wo),t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Xs,format:bn,colorSpace:Vn,depthBuffer:!1},s=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(r)),this._blurMaterial=Sm(r,t,e)}return s}_compileMaterial(t){let e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s){let o=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qc),h.toneMapping=ii,h.autoClear=!1;let d=new jt({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Ct(new tn,d),x=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(qc),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;Hr(s,_*y,m>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,So)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$c[(s-1)%$c.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ct(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Ti;p>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);let m=[],_=0;for(let A=0;A<Ti;++A){let D=A/x,v=Math.exp(-D*D/2);m.push(v),A===0?_+=v:A<p&&(_+=2*v)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let w=this._sizeLods[s],C=3*w*(s>y-is?s-y+is:0),T=4*(this._cubeSize-w);Hr(e,C,T,3*w,2*w),l.setRenderTarget(e),l.render(u,So)}};function bm(i){let t=[],e=[],n=[],s=i,r=i-is+1+Yc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-is?l=Yc[a-i+is-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*d),y=new Float32Array(p*g*d),w=new Float32Array(m*g*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,D=T>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(v,x*g*T),y.set(f,p*g*T);let S=[T,T,T,T,T,T];w.set(S,m*g*T)}let C=new Pe;C.setAttribute("position",new $e(_,x)),C.setAttribute("uv",new $e(y,p)),C.setAttribute("faceIndex",new $e(w,m)),t.push(C),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zc(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sm(i,t,e){let n=new Float32Array(Ti),s=new P(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function Em(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Oo||l===Fo,h=l===ls||l===cs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new pa(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new pa(i));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,w=_.length;y<w;y+=3){let C=_[y+0],T=_[y+1],A=_[y+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,w=_.length/3-1;y<w;y+=3){let C=y+0,T=y+1,A=y+2;f.push(C,T,T,A,A,C)}}else return;let p=new(Nh(f)?ha:ca)(f,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Am(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,o,d*l),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,d*l,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let m=0;for(let _=0;_<x;_++)m+=g[_];e.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Rm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t){return i[0]-t[0]}function Pm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Lm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new _e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;_===!0&&(D=1),y===!0&&(D=2),w===!0&&(D=3);let v=h.attributes.position.count*D,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let N=new Float32Array(v*S*4*g),Y=new ra(N,v,S,g);Y.type=ei,Y.needsUpdate=!0;let ot=D*4;for(let F=0;F<g;F++){let V=C[F],Z=T[F],J=A[F],$=v*S*4*F;for(let Q=0;Q<V.count;Q++){let at=Q*ot;_===!0&&(a.fromBufferAttribute(V,Q),N[$+at+0]=a.x,N[$+at+1]=a.y,N[$+at+2]=a.z,N[$+at+3]=0),y===!0&&(a.fromBufferAttribute(Z,Q),N[$+at+4]=a.x,N[$+at+5]=a.y,N[$+at+6]=a.z,N[$+at+7]=0),w===!0&&(a.fromBufferAttribute(J,Q),N[$+at+8]=a.x,N[$+at+9]=a.y,N[$+at+10]=a.z,N[$+at+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:Y,size:new pt(v,S)},r.set(h,x),h.addEventListener("dispose",I)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<d;y++){let w=g[y];w[0]=y,w[1]=f[y]}g.sort(Pm);for(let y=0;y<8;y++)y<d&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Cm);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let w=o[y],C=w[0],T=w[1];C!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),p&&h.getAttribute("morphNormal"+y)!==p[C]&&h.setAttribute("morphNormal"+y,p[C]),s[y]=T,m+=T):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Im(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ma=class extends cn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ri,h!==Ri&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=ti),n===void 0&&h===hs&&(n=Ai),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bh=new cn,zh=new ma(1,1);zh.compareFunction=Dh;var Hh=new ra,Gh=new Wo,Vh=new da,jc=[],Qc=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Oe(e,n)}}function km(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Oe(e,n)}}function Bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Oe(e,n)}}function zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?zh:Bh;e.setTexture2D(t||r,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gh,s)}function Jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function Km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function jm(i){switch(i){case 5126:return Um;case 35664:return Dm;case 35665:return Nm;case 35666:return Om;case 35674:return Fm;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return Ym;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,t){i.uniform1fv(this.addr,t)}function t0(i,t){let e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function e0(i,t){let e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function n0(i,t){let e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function i0(i,t){let e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s0(i,t){let e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){let e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a0(i,t){i.uniform1iv(this.addr,t)}function o0(i,t){i.uniform2iv(this.addr,t)}function l0(i,t){i.uniform3iv(this.addr,t)}function c0(i,t){i.uniform4iv(this.addr,t)}function h0(i,t){i.uniform1uiv(this.addr,t)}function u0(i,t){i.uniform2uiv(this.addr,t)}function d0(i,t){i.uniform3uiv(this.addr,t)}function f0(i,t){i.uniform4uiv(this.addr,t)}function p0(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bh,r[a])}function m0(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gh,r[a])}function g0(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vh,r[a])}function _0(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hh,r[a])}function x0(i){switch(i){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}var qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}},$o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x0(e.type)}},Zo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function ih(i,t){i.seq.push(t),i.map[t.id]=t}function y0(i,t,e){let n=i.name,s=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),a=Ao.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ih(e,c===void 0?new qo(o,i,t):new $o(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Zo(o),ih(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);y0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function sh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v0=37297,M0=0;function b0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function S0(i){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i),n;switch(t===e?n="":t===ta&&e===Qr?n="LinearDisplayP3ToLinearSRGB":t===Qr&&e===ta&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case Ca:return[n,"LinearTransferOETF"];case Ae:case Cl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+b0(i.getShaderSource(t),a)}else return s}function E0(i,t){let e=S0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function T0(i,t){let e;switch(t){case Vu:e="Linear";break;case Wu:e="Reinhard";break;case Xu:e="OptimizedCineon";break;case Yu:e="ACESFilmic";break;case $u:e="AgX";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function w0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function R0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ss(i){return i!==""}function ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(P0,I0)}var L0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function I0(i,t){let e=Wt[t];if(e===void 0){let n=L0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(U0,D0)}function D0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function O0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(t="ENVMAP_MODE_REFRACTION"),t}function k0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Hu:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function B0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=N0(e),c=O0(e),h=F0(e),u=k0(e),f=B0(e),d=e.isWebGL2?"":w0(e),g=A0(e),x=R0(r),p=s.createProgram(),m,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ss).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ss).join(`
`),_.length>0&&(_+=`
`)):(m=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),_=[d,ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ii?T0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=Jo(a),a=ah(a,e),a=oh(a,e),o=Jo(o),o=ah(o,e),o=oh(o,e),a=lh(a),o=lh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=y+m+a,C=y+_+o,T=sh(s,s.VERTEX_SHADER,w),A=sh(s,s.FRAGMENT_SHADER,C);s.attachShader(p,T),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(Y){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(A).trim(),V=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,T,A);else{let J=rh(s,T,"vertex"),$=rh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+J+`
`+$)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(I===""||F==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:V,programLog:ot,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:_}})}s.deleteShader(T),s.deleteShader(A),v=new os(s,p),S=C0(s,p)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,v0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var H0=0,Ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jo(t),e.set(t,n)),n}},jo=class{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}};function G0(i,t,e,n,s,r,a){let o=new la,l=new Ko,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function p(v,S,N,Y,ot){let I=Y.fog,F=ot.geometry,V=v.isMeshStandardMaterial?Y.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),J=Z&&Z.mapping===Ra?Z.image.height:null,$=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,at=Q!==void 0?Q.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let X,tt,ft,vt;if($){let en=Cn[$];X=en.vertexShader,tt=en.fragmentShader}else X=v.vertexShader,tt=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);let Mt=i.getRenderTarget(),wt=ot.isInstancedMesh===!0,At=ot.isBatchedMesh===!0,Et=!!v.map,Yt=!!v.matcap,R=!!Z,lt=!!v.aoMap,L=!!v.lightMap,q=!!v.bumpMap,G=!!v.normalMap,et=!!v.displacementMap,nt=!!v.emissiveMap,b=!!v.metalnessMap,M=!!v.roughnessMap,O=v.anisotropy>0,j=v.clearcoat>0,K=v.iridescence>0,st=v.sheen>0,yt=v.transmission>0,ct=O&&!!v.anisotropyMap,_t=j&&!!v.clearcoatMap,St=j&&!!v.clearcoatNormalMap,Nt=j&&!!v.clearcoatRoughnessMap,it=K&&!!v.iridescenceMap,ee=K&&!!v.iridescenceThicknessMap,Kt=st&&!!v.sheenColorMap,kt=st&&!!v.sheenRoughnessMap,Rt=!!v.specularMap,bt=!!v.specularColorMap,Vt=!!v.specularIntensityMap,ie=yt&&!!v.transmissionMap,ve=yt&&!!v.thicknessMap,qt=!!v.gradientMap,ht=!!v.alphaMap,U=v.alphaTest>0,mt=!!v.alphaHash,gt=!!v.extensions,It=!!F.attributes.uv1,Pt=!!F.attributes.uv2,ce=!!F.attributes.uv3,he=ii;return v.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(he=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:tt,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:At,instancing:wt,instancingColor:wt&&ot.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Vn,map:Et,matcap:Yt,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:J,aoMap:lt,lightMap:L,bumpMap:q,normalMap:G,displacementMap:f&&et,emissiveMap:nt,normalMapObjectSpace:G&&v.normalMapType===rd,normalMapTangentSpace:G&&v.normalMapType===Uh,metalnessMap:b,roughnessMap:M,anisotropy:O,anisotropyMap:ct,clearcoat:j,clearcoatMap:_t,clearcoatNormalMap:St,clearcoatRoughnessMap:Nt,iridescence:K,iridescenceMap:it,iridescenceThicknessMap:ee,sheen:st,sheenColorMap:Kt,sheenRoughnessMap:kt,specularMap:Rt,specularColorMap:bt,specularIntensityMap:Vt,transmission:yt,transmissionMap:ie,thicknessMap:ve,gradientMap:qt,opaque:v.transparent===!1&&v.blending===rs,alphaMap:ht,alphaTest:U,alphaHash:mt,combine:v.combine,mapUv:Et&&x(v.map.channel),aoMapUv:lt&&x(v.aoMap.channel),lightMapUv:L&&x(v.lightMap.channel),bumpMapUv:q&&x(v.bumpMap.channel),normalMapUv:G&&x(v.normalMap.channel),displacementMapUv:et&&x(v.displacementMap.channel),emissiveMapUv:nt&&x(v.emissiveMap.channel),metalnessMapUv:b&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:ct&&x(v.anisotropyMap.channel),clearcoatMapUv:_t&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(v.sheenRoughnessMap.channel),specularMapUv:Rt&&x(v.specularMap.channel),specularColorMapUv:bt&&x(v.specularColorMap.channel),specularIntensityMapUv:Vt&&x(v.specularIntensityMap.channel),transmissionMapUv:ie&&x(v.transmissionMap.channel),thicknessMapUv:ve&&x(v.thicknessMap.channel),alphaMapUv:ht&&x(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(G||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Pt,vertexUv3s:ce,pointsUvs:ot.isPoints===!0&&!!F.attributes.uv&&(Et||ht),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ot.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Et&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ye,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:gt&&v.extensions.derivatives===!0,extensionFragDepth:gt&&v.extensions.fragDepth===!0,extensionDrawBuffers:gt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(S,v),y(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function w(v){let S=g[v.type],N;if(S){let Y=Cn[S];N=Pd.clone(Y.uniforms)}else N=v.uniforms;return N}function C(v,S){let N;for(let Y=0,ot=c.length;Y<ot;Y++){let I=c[Y];if(I.cacheKey===S){N=I,++N.usedTimes;break}}return N===void 0&&(N=new z0(i,S,v,r),c.push(N)),N}function T(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:D}}function V0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function W0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function o(u,f,d,g,x,p){let m=a(u,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,x,p){let m=a(u,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||W0),n.length>1&&n.sort(f||hh),s.length>1&&s.sort(f||hh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function X0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new uh,i.set(n,[a])):s>=r.length?(a=new uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ot};break;case"SpotLight":e={position:new P,direction:new P,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $0=0;function Z0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function J0(i,t){let e=new Y0,n=q0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new be,o=new be;function l(h,u){let f=0,d=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,p=0,m=0,_=0,y=0,w=0,C=0,T=0,A=0,D=0,v=0;h.sort(Z0);let S=u===!0?Math.PI:1;for(let Y=0,ot=h.length;Y<ot;Y++){let I=h[Y],F=I.color,V=I.intensity,Z=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*V*S,d+=F.g*V*S,g+=F.b*V*S;else if(I.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(I.sh.coefficients[$],V);v++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){let Q=I.shadow,at=n.get(I);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,s.directionalShadow[x]=at,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=I.shadow.matrix,w++}s.directional[x]=$,x++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(F).multiplyScalar(V*S),$.distance=Z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,s.spot[m]=$;let Q=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,Q.updateMatrices(I),I.castShadow&&D++),s.spotLightMatrix[m]=Q.matrix,I.castShadow){let at=n.get(I);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,s.spotShadow[m]=at,s.spotShadowMap[m]=J,T++}m++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(F).multiplyScalar(V),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),s.rectArea[_]=$,_++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*S),$.distance=I.distance,$.decay=I.decay,I.castShadow){let Q=I.shadow,at=n.get(I);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,at.shadowCameraNear=Q.camera.near,at.shadowCameraFar=Q.camera.far,s.pointShadow[p]=at,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=I.shadow.matrix,C++}s.point[p]=$,p++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(V*S),$.groundColor.copy(I.groundColor).multiplyScalar(V*S),s.hemi[y]=$,y++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==p||N.spotLength!==m||N.rectAreaLength!==_||N.hemiLength!==y||N.numDirectionalShadows!==w||N.numPointShadows!==C||N.numSpotShadows!==T||N.numSpotMaps!==A||N.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=_,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=v,N.directionalLength=x,N.pointLength=p,N.spotLength=m,N.rectAreaLength=_,N.hemiLength=y,N.numDirectionalShadows=w,N.numPointShadows=C,N.numSpotShadows=T,N.numSpotMaps=A,N.numLightProbes=v,s.version=$0++)}function c(h,u){let f=0,d=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let w=h[_];if(w.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),f++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(w.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let C=s.point[d];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function dh(i,t){let e=new J0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function K0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new dh(i,t),e.set(r,[l])):a>=o.length?(l=new dh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Qo=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function tg(i,t,e){let n=new Ys,s=new pt,r=new pt,a=new _e,o=new Qo({depthPacking:sd}),l=new tl,c={},h=e.maxTextureSize,u={[ai]:qe,[qe]:ai,[Ye]:Ye},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:j0,fragmentShader:Q0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ct(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let m=this.type;this.render=function(T,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ni),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let ot=m!==Bn&&this.type===Bn,I=m===Bn&&this.type!==Bn;for(let F=0,V=T.length;F<V;F++){let Z=T[F],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let $=J.getFrameExtents();if(s.multiply($),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||ot===!0||I===!0){let at=this.type!==Bn?{minFilter:Ue,magFilter:Ue}:{};J.map!==null&&J.map.dispose(),J.map=new Wn(s.x,s.y,at),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let Q=J.getViewportCount();for(let at=0;at<Q;at++){let dt=J.getViewport(at);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),Y.viewport(a),J.updateMatrices(Z,at),n=J.getFrustum(),w(A,D,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Bn&&_(J,D),J.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(v,S,N)};function _(T,A){let D=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,d,x,null)}function y(T,A,D,v){let S=null,N=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let Y=S.uuid,ot=A.uuid,I=c[Y];I===void 0&&(I={},c[Y]=I);let F=I[ot];F===void 0&&(F=S.clone(),I[ot]=F,A.addEventListener("dispose",C)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,v===Bn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=i.properties.get(S);Y.light=D}return S}function w(T,A,D,v,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let ot=t.update(T),I=T.material;if(Array.isArray(I)){let F=ot.groups;for(let V=0,Z=F.length;V<Z;V++){let J=F[V],$=I[J.materialIndex];if($&&$.visible){let Q=y(T,$,v,S);T.onBeforeShadow(i,T,A,D,ot,Q,J),i.renderBufferDirect(D,null,ot,Q,T,J),T.onAfterShadow(i,T,A,D,ot,Q,J)}}}else if(I.visible){let F=y(T,I,v,S);T.onBeforeShadow(i,T,A,D,ot,F,null),i.renderBufferDirect(D,null,ot,F,T,null),T.onAfterShadow(i,T,A,D,ot,F,null)}}let Y=T.children;for(let ot=0,I=Y.length;ot<I;ot++)w(Y[ot],A,D,v,S)}function C(T){T.target.removeEventListener("dispose",C);for(let D in c){let v=c[D],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function eg(i,t,e){let n=e.isWebGL2;function s(){let U=!1,mt=new _e,gt=null,It=new _e(0,0,0,0);return{setMask:function(Pt){gt!==Pt&&!U&&(i.colorMask(Pt,Pt,Pt,Pt),gt=Pt)},setLocked:function(Pt){U=Pt},setClear:function(Pt,ce,he,Be,en){en===!0&&(Pt*=Be,ce*=Be,he*=Be),mt.set(Pt,ce,he,Be),It.equals(mt)===!1&&(i.clearColor(Pt,ce,he,Be),It.copy(mt))},reset:function(){U=!1,gt=null,It.set(-1,0,0,0)}}}function r(){let U=!1,mt=null,gt=null,It=null;return{setTest:function(Pt){Pt?At(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(Pt){mt!==Pt&&!U&&(i.depthMask(Pt),mt=Pt)},setFunc:function(Pt){if(gt!==Pt){switch(Pt){case Du:i.depthFunc(i.NEVER);break;case Nu:i.depthFunc(i.ALWAYS);break;case Ou:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Fu:i.depthFunc(i.EQUAL);break;case ku:i.depthFunc(i.GEQUAL);break;case Bu:i.depthFunc(i.GREATER);break;case zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Pt}},setLocked:function(Pt){U=Pt},setClear:function(Pt){It!==Pt&&(i.clearDepth(Pt),It=Pt)},reset:function(){U=!1,mt=null,gt=null,It=null}}}function a(){let U=!1,mt=null,gt=null,It=null,Pt=null,ce=null,he=null,Be=null,en=null;return{setTest:function(ue){U||(ue?At(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!U&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,nn,Rn){(gt!==ue||It!==nn||Pt!==Rn)&&(i.stencilFunc(ue,nn,Rn),gt=ue,It=nn,Pt=Rn)},setOp:function(ue,nn,Rn){(ce!==ue||he!==nn||Be!==Rn)&&(i.stencilOp(ue,nn,Rn),ce=ue,he=nn,Be=Rn)},setLocked:function(ue){U=ue},setClear:function(ue){en!==ue&&(i.clearStencil(ue),en=ue)},reset:function(){U=!1,mt=null,gt=null,It=null,Pt=null,ce=null,he=null,Be=null,en=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],p=null,m=!1,_=null,y=null,w=null,C=null,T=null,A=null,D=null,v=new Ot(0,0,0),S=0,N=!1,Y=null,ot=null,I=null,F=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,$=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=$>=2);let at=null,dt={},X=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ft=new _e().fromArray(X),vt=new _e().fromArray(tt);function Mt(U,mt,gt,It){let Pt=new Uint8Array(4),ce=i.createTexture();i.bindTexture(U,ce),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<gt;he++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(mt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(mt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ce}let wt={};wt[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(wt[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),At(i.DEPTH_TEST),l.setFunc(Zr),nt(!1),b(Yl),At(i.CULL_FACE),G(ni);function At(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Et(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Yt(U,mt){return d[U]!==mt?(i.bindFramebuffer(U,mt),d[U]=mt,n&&(U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt)),!0):!1}function R(U,mt){let gt=x,It=!1;if(U)if(gt=g.get(mt),gt===void 0&&(gt=[],g.set(mt,gt)),U.isWebGLMultipleRenderTargets){let Pt=U.texture;if(gt.length!==Pt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,he=Pt.length;ce<he;ce++)gt[ce]=i.COLOR_ATTACHMENT0+ce;gt.length=Pt.length,It=!0}}else gt[0]!==i.COLOR_ATTACHMENT0&&(gt[0]=i.COLOR_ATTACHMENT0,It=!0);else gt[0]!==i.BACK&&(gt[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function lt(U){return p!==U?(i.useProgram(U),p=U,!0):!1}let L={[Ei]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};if(n)L[Jl]=i.MIN,L[Kl]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(L[Jl]=U.MIN_EXT,L[Kl]=U.MAX_EXT)}let q={[Mu]:i.ZERO,[bu]:i.ONE,[Su]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function G(U,mt,gt,It,Pt,ce,he,Be,en,ue){if(U===ni){m===!0&&(Et(i.BLEND),m=!1);return}if(m===!1&&(At(i.BLEND),m=!0),U!==xu){if(U!==_||ue!==N){if((y!==Ei||T!==Ei)&&(i.blendEquation(i.FUNC_ADD),y=Ei,T=Ei),ue)switch(U){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,C=null,A=null,D=null,v.set(0,0,0),S=0,_=U,N=ue}return}Pt=Pt||mt,ce=ce||gt,he=he||It,(mt!==y||Pt!==T)&&(i.blendEquationSeparate(L[mt],L[Pt]),y=mt,T=Pt),(gt!==w||It!==C||ce!==A||he!==D)&&(i.blendFuncSeparate(q[gt],q[It],q[ce],q[he]),w=gt,C=It,A=ce,D=he),(Be.equals(v)===!1||en!==S)&&(i.blendColor(Be.r,Be.g,Be.b,en),v.copy(Be),S=en),_=U,N=!1}function et(U,mt){U.side===Ye?Et(i.CULL_FACE):At(i.CULL_FACE);let gt=U.side===qe;mt&&(gt=!gt),nt(gt),U.blending===rs&&U.transparent===!1?G(ni):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let It=U.stencilWrite;c.setTest(It),It&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),O(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){Y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),Y=U)}function b(U){U!==gu?(At(i.CULL_FACE),U!==ot&&(U===Yl?i.cullFace(i.BACK):U===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),ot=U}function M(U){U!==I&&(J&&i.lineWidth(U),I=U)}function O(U,mt,gt){U?(At(i.POLYGON_OFFSET_FILL),(F!==mt||V!==gt)&&(i.polygonOffset(mt,gt),F=mt,V=gt)):Et(i.POLYGON_OFFSET_FILL)}function j(U){U?At(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function K(U){U===void 0&&(U=i.TEXTURE0+Z-1),at!==U&&(i.activeTexture(U),at=U)}function st(U,mt,gt){gt===void 0&&(at===null?gt=i.TEXTURE0+Z-1:gt=at);let It=dt[gt];It===void 0&&(It={type:void 0,texture:void 0},dt[gt]=It),(It.type!==U||It.texture!==mt)&&(at!==gt&&(i.activeTexture(gt),at=gt),i.bindTexture(U,mt||wt[U]),It.type=U,It.texture=mt)}function yt(){let U=dt[at];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(U){ft.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ft.copy(U))}function ie(U){vt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),vt.copy(U))}function ve(U,mt){let gt=u.get(mt);gt===void 0&&(gt=new WeakMap,u.set(mt,gt));let It=gt.get(U);It===void 0&&(It=i.getUniformBlockIndex(mt,U.name),gt.set(U,It))}function qt(U,mt){let It=u.get(mt).get(U);h.get(mt)!==It&&(i.uniformBlockBinding(mt,It,U.__bindingPointIndex),h.set(mt,It))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},at=null,dt={},d={},g=new WeakMap,x=[],p=null,m=!1,_=null,y=null,w=null,C=null,T=null,A=null,D=null,v=new Ot(0,0,0),S=0,N=!1,Y=null,ot=null,I=null,F=null,V=null,ft.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:At,disable:Et,bindFramebuffer:Yt,drawBuffers:R,useProgram:lt,setBlending:G,setMaterial:et,setFlipSided:nt,setCullFace:b,setLineWidth:M,setPolygonOffset:O,setScissorTest:j,activeTexture:K,bindTexture:st,unbindTexture:yt,compressedTexImage2D:ct,compressedTexImage3D:_t,texImage2D:Rt,texImage3D:bt,updateUBOMapping:ve,uniformBlockBinding:qt,texStorage2D:Kt,texStorage3D:kt,texSubImage2D:St,texSubImage3D:Nt,compressedTexSubImage2D:it,compressedTexSubImage3D:ee,scissor:Vt,viewport:ie,reset:ht}}function ng(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return d?new OffscreenCanvas(b,M):na("canvas")}function x(b,M,O,j){let K=1;if((b.width>j||b.height>j)&&(K=j/Math.max(b.width,b.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let st=M?Go:Math.floor,yt=st(K*b.width),ct=st(K*b.height);u===void 0&&(u=g(yt,ct));let _t=O?g(yt,ct):u;return _t.width=yt,_t.height=ct,_t.getContext("2d").drawImage(b,0,0,yt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+yt+"x"+ct+")."),_t}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Cc(b.width)&&Cc(b.height)}function m(b){return o?!1:b.wrapS!==Mn||b.wrapT!==Mn||b.minFilter!==Ue&&b.minFilter!==pn}function _(b,M){return b.generateMipmaps&&M&&b.minFilter!==Ue&&b.minFilter!==pn}function y(b){i.generateMipmap(b)}function w(b,M,O,j,K=!1){if(o===!1)return M;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let st=M;if(M===i.RED&&(O===i.FLOAT&&(st=i.R32F),O===i.HALF_FLOAT&&(st=i.R16F),O===i.UNSIGNED_BYTE&&(st=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(st=i.R8UI),O===i.UNSIGNED_SHORT&&(st=i.R16UI),O===i.UNSIGNED_INT&&(st=i.R32UI),O===i.BYTE&&(st=i.R8I),O===i.SHORT&&(st=i.R16I),O===i.INT&&(st=i.R32I)),M===i.RG&&(O===i.FLOAT&&(st=i.RG32F),O===i.HALF_FLOAT&&(st=i.RG16F),O===i.UNSIGNED_BYTE&&(st=i.RG8)),M===i.RGBA){let yt=K?jr:re.getTransfer(j);O===i.FLOAT&&(st=i.RGBA32F),O===i.HALF_FLOAT&&(st=i.RGBA16F),O===i.UNSIGNED_BYTE&&(st=yt===me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function C(b,M,O){return _(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==Ue&&b.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===Ue||b===jl||b===Ja?i.NEAREST:i.LINEAR}function A(b){let M=b.target;M.removeEventListener("dispose",A),v(M),M.isVideoTexture&&h.delete(M)}function D(b){let M=b.target;M.removeEventListener("dispose",D),N(M)}function v(b){let M=n.get(b);if(M.__webglInit===void 0)return;let O=b.source,j=f.get(O);if(j){let K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(b),Object.keys(j).length===0&&f.delete(O)}n.remove(b)}function S(b){let M=n.get(b);i.deleteTexture(M.__webglTexture);let O=b.source,j=f.get(O);delete j[M.__cacheKey],a.memory.textures--}function N(b){let M=b.texture,O=n.get(b),j=n.get(M);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(O.__webglFramebuffer[K]))for(let st=0;st<O.__webglFramebuffer[K].length;st++)i.deleteFramebuffer(O.__webglFramebuffer[K][st]);else i.deleteFramebuffer(O.__webglFramebuffer[K]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[K])}else{if(Array.isArray(O.__webglFramebuffer))for(let K=0;K<O.__webglFramebuffer.length;K++)i.deleteFramebuffer(O.__webglFramebuffer[K]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let K=0;K<O.__webglColorRenderbuffer.length;K++)O.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[K]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let K=0,st=M.length;K<st;K++){let yt=n.get(M[K]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(M[K])}n.remove(M),n.remove(b)}let Y=0;function ot(){Y=0}function I(){let b=Y;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),Y+=1,b}function F(b){let M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function V(b,M){let O=n.get(b);if(b.isVideoTexture&&et(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){let j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(O,b,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function Z(b,M){let O=n.get(b);if(b.version>0&&O.__version!==b.version){ft(O,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function J(b,M){let O=n.get(b);if(b.version>0&&O.__version!==b.version){ft(O,b,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function $(b,M){let O=n.get(b);if(b.version>0&&O.__version!==b.version){vt(O,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}let Q={[Pi]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},at={[Ue]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Zu]:i.LINEAR_MIPMAP_NEAREST,[Ws]:i.LINEAR_MIPMAP_LINEAR},dt={[ad]:i.NEVER,[dd]:i.ALWAYS,[od]:i.LESS,[Dh]:i.LEQUAL,[ld]:i.EQUAL,[ud]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function X(b,M,O){if(O?(i.texParameteri(b,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Q[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,at[M.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Mn||M.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(M.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Ue&&M.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ue||M.minFilter!==Ja&&M.minFilter!==Ws||M.type===ei&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Xs&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(b,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function tt(b,M){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));let j=M.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let st=F(M);if(st!==b.__cacheKey){K[st]===void 0&&(K[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[st].usedTimes++;let yt=K[b.__cacheKey];yt!==void 0&&(K[b.__cacheKey].usedTimes--,yt.usedTimes===0&&S(M)),b.__cacheKey=st,b.__webglTexture=K[st].texture}return O}function ft(b,M,O){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);let K=tt(b,M),st=M.source;e.bindTexture(j,b.__webglTexture,i.TEXTURE0+O);let yt=n.get(st);if(st.version!==yt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let ct=re.getPrimaries(re.workingColorSpace),_t=M.colorSpace===mn?null:re.getPrimaries(M.colorSpace),St=M.colorSpace===mn||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Nt=m(M)&&p(M.image)===!1,it=x(M.image,Nt,!1,s.maxTextureSize);it=nt(M,it);let ee=p(it)||o,Kt=r.convert(M.format,M.colorSpace),kt=r.convert(M.type),Rt=w(M.internalFormat,Kt,kt,M.colorSpace,M.isVideoTexture);X(j,M,ee);let bt,Vt=M.mipmaps,ie=o&&M.isVideoTexture!==!0&&Rt!==Lh,ve=yt.__version===void 0||K===!0,qt=C(M,it,ee);if(M.isDepthTexture)Rt=i.DEPTH_COMPONENT,o?M.type===ei?Rt=i.DEPTH_COMPONENT32F:M.type===ti?Rt=i.DEPTH_COMPONENT24:M.type===Ai?Rt=i.DEPTH24_STENCIL8:Rt=i.DEPTH_COMPONENT16:M.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ri&&Rt===i.DEPTH_COMPONENT&&M.type!==Al&&M.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ti,kt=r.convert(M.type)),M.format===hs&&Rt===i.DEPTH_COMPONENT&&(Rt=i.DEPTH_STENCIL,M.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ai,kt=r.convert(M.type))),ve&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,Kt,kt,null));else if(M.isDataTexture)if(Vt.length>0&&ee){ie&&ve&&e.texStorage2D(i.TEXTURE_2D,qt,Rt,Vt[0].width,Vt[0].height);for(let ht=0,U=Vt.length;ht<U;ht++)bt=Vt[ht],ie?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,Kt,kt,bt.data):e.texImage2D(i.TEXTURE_2D,ht,Rt,bt.width,bt.height,0,Kt,kt,bt.data);M.generateMipmaps=!1}else ie?(ve&&e.texStorage2D(i.TEXTURE_2D,qt,Rt,it.width,it.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,Kt,kt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,Kt,kt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ie&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Rt,Vt[0].width,Vt[0].height,it.depth);for(let ht=0,U=Vt.length;ht<U;ht++)bt=Vt[ht],M.format!==bn?Kt!==null?ie?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,it.depth,Kt,bt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Rt,bt.width,bt.height,it.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,it.depth,Kt,kt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Rt,bt.width,bt.height,it.depth,0,Kt,kt,bt.data)}else{ie&&ve&&e.texStorage2D(i.TEXTURE_2D,qt,Rt,Vt[0].width,Vt[0].height);for(let ht=0,U=Vt.length;ht<U;ht++)bt=Vt[ht],M.format!==bn?Kt!==null?ie?e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,Kt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Rt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,Kt,kt,bt.data):e.texImage2D(i.TEXTURE_2D,ht,Rt,bt.width,bt.height,0,Kt,kt,bt.data)}else if(M.isDataArrayTexture)ie?(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Rt,it.width,it.height,it.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Kt,kt,it.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,Kt,kt,it.data);else if(M.isData3DTexture)ie?(ve&&e.texStorage3D(i.TEXTURE_3D,qt,Rt,it.width,it.height,it.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Kt,kt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,Kt,kt,it.data);else if(M.isFramebufferTexture){if(ve)if(ie)e.texStorage2D(i.TEXTURE_2D,qt,Rt,it.width,it.height);else{let ht=it.width,U=it.height;for(let mt=0;mt<qt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Rt,ht,U,0,Kt,kt,null),ht>>=1,U>>=1}}else if(Vt.length>0&&ee){ie&&ve&&e.texStorage2D(i.TEXTURE_2D,qt,Rt,Vt[0].width,Vt[0].height);for(let ht=0,U=Vt.length;ht<U;ht++)bt=Vt[ht],ie?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Kt,kt,bt):e.texImage2D(i.TEXTURE_2D,ht,Rt,Kt,kt,bt);M.generateMipmaps=!1}else ie?(ve&&e.texStorage2D(i.TEXTURE_2D,qt,Rt,it.width,it.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Kt,kt,it)):e.texImage2D(i.TEXTURE_2D,0,Rt,Kt,kt,it);_(M,ee)&&y(j),yt.__version=st.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function vt(b,M,O){if(M.image.length!==6)return;let j=tt(b,M),K=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);let st=n.get(K);if(K.version!==st.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let yt=re.getPrimaries(re.workingColorSpace),ct=M.colorSpace===mn?null:re.getPrimaries(M.colorSpace),_t=M.colorSpace===mn||yt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let St=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,it=[];for(let ht=0;ht<6;ht++)!St&&!Nt?it[ht]=x(M.image[ht],!1,!0,s.maxCubemapSize):it[ht]=Nt?M.image[ht].image:M.image[ht],it[ht]=nt(M,it[ht]);let ee=it[0],Kt=p(ee)||o,kt=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),bt=w(M.internalFormat,kt,Rt,M.colorSpace),Vt=o&&M.isVideoTexture!==!0,ie=st.__version===void 0||j===!0,ve=C(M,ee,Kt);X(i.TEXTURE_CUBE_MAP,M,Kt);let qt;if(St){Vt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ve,bt,ee.width,ee.height);for(let ht=0;ht<6;ht++){qt=it[ht].mipmaps;for(let U=0;U<qt.length;U++){let mt=qt[U];M.format!==bn?kt!==null?Vt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,0,0,mt.width,mt.height,kt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,bt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,0,0,mt.width,mt.height,kt,Rt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,bt,mt.width,mt.height,0,kt,Rt,mt.data)}}}else{qt=M.mipmaps,Vt&&ie&&(qt.length>0&&ve++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ve,bt,it[0].width,it[0].height));for(let ht=0;ht<6;ht++)if(Nt){Vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,it[ht].width,it[ht].height,kt,Rt,it[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,bt,it[ht].width,it[ht].height,0,kt,Rt,it[ht].data);for(let U=0;U<qt.length;U++){let gt=qt[U].image[ht].image;Vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,0,0,gt.width,gt.height,kt,Rt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,bt,gt.width,gt.height,0,kt,Rt,gt.data)}}else{Vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,kt,Rt,it[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,bt,kt,Rt,it[ht]);for(let U=0;U<qt.length;U++){let mt=qt[U];Vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,0,0,kt,Rt,mt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,bt,kt,Rt,mt.image[ht])}}}_(M,Kt)&&y(i.TEXTURE_CUBE_MAP),st.__version=K.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Mt(b,M,O,j,K,st){let yt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),_t=w(O.internalFormat,yt,ct,O.colorSpace);if(!n.get(M).__hasExternalTextures){let Nt=Math.max(1,M.width>>st),it=Math.max(1,M.height>>st);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,st,_t,Nt,it,M.depth,0,yt,ct,null):e.texImage2D(K,st,_t,Nt,it,0,yt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),G(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,n.get(O).__webglTexture,0,q(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,n.get(O).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(b,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let j=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||G(M)){let K=M.depthTexture;K&&K.isDepthTexture&&(K.type===ei?j=i.DEPTH_COMPONENT32F:K.type===ti&&(j=i.DEPTH_COMPONENT24));let st=q(M);G(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,j,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,j,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){let j=q(M);O&&G(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,M.width,M.height):G(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let j=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0;K<j.length;K++){let st=j[K],yt=r.convert(st.format,st.colorSpace),ct=r.convert(st.type),_t=w(st.internalFormat,yt,ct,st.colorSpace),St=q(M);O&&G(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,_t,M.width,M.height):G(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let j=n.get(M.depthTexture).__webglTexture,K=q(M);if(M.depthTexture.format===Ri)G(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===hs)G(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Et(b){let M=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(M.__webglFramebuffer,b)}else if(O){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=i.createRenderbuffer(),wt(M.__webglDepthbuffer[j],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),wt(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(b,M,O){let j=n.get(b);M!==void 0&&Mt(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Et(b)}function R(b){let M=b.texture,O=n.get(b),j=n.get(M);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++);let K=b.isWebGLCubeRenderTarget===!0,st=b.isWebGLMultipleRenderTargets===!0,yt=p(b)||o;if(K){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let _t=0;_t<M.mipmaps.length;_t++)O.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let ct=b.texture;for(let _t=0,St=ct.length;_t<St;_t++){let Nt=n.get(ct[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&G(b)===!1){let ct=st?M:[M];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){let St=ct[_t];O.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);let Nt=r.convert(St.format,St.colorSpace),it=r.convert(St.type),ee=w(St.internalFormat,Nt,it,St.colorSpace,b.isXRRenderTarget===!0),Kt=q(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),X(i.TEXTURE_CUBE_MAP,M,yt);for(let ct=0;ct<6;ct++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Mt(O.__webglFramebuffer[ct][_t],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else Mt(O.__webglFramebuffer[ct],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);_(M,yt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let ct=b.texture;for(let _t=0,St=ct.length;_t<St;_t++){let Nt=ct[_t],it=n.get(Nt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),X(i.TEXTURE_2D,Nt,yt),Mt(O.__webglFramebuffer,b,Nt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),_(Nt,yt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,j.__webglTexture),X(ct,M,yt),o&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Mt(O.__webglFramebuffer[_t],b,M,i.COLOR_ATTACHMENT0,ct,_t);else Mt(O.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,ct,0);_(M,yt)&&y(ct),e.unbindTexture()}b.depthBuffer&&Et(b)}function lt(b){let M=p(b)||o,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let j=0,K=O.length;j<K;j++){let st=O[j];if(_(st,M)){let yt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(st).__webglTexture;e.bindTexture(yt,ct),y(yt),e.unbindTexture()}}}function L(b){if(o&&b.samples>0&&G(b)===!1){let M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,j=b.height,K=i.COLOR_BUFFER_BIT,st=[],yt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(b),_t=b.isWebGLMultipleRenderTargets===!0;if(_t)for(let St=0;St<M.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<M.length;St++){st.push(i.COLOR_ATTACHMENT0+St),b.depthBuffer&&st.push(yt);let Nt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Nt===!1&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),_t&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[St]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[yt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[yt])),_t){let it=n.get(M[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let St=0;St<M.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);let Nt=n.get(M[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function q(b){return Math.min(s.maxSamples,b.samples)}function G(b){let M=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(b){let M=a.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function nt(b,M){let O=b.colorSpace,j=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===zo||O!==Vn&&O!==mn&&(re.getTransfer(O)===me?o===!1?t.has("EXT_sRGB")===!0&&j===bn?(b.format=zo,b.minFilter=pn,b.generateMipmaps=!1):M=ia.sRGBToLinear(M):(j!==bn||K!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=I,this.resetTextureUnits=ot,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=Yt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=G}function ig(i,t,e){let n=e.isWebGL2;function s(r,a=mn){let o,l=re.getTransfer(a);if(r===si)return i.UNSIGNED_BYTE;if(r===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ju)return i.BYTE;if(r===Ku)return i.SHORT;if(r===Al)return i.UNSIGNED_SHORT;if(r===Th)return i.INT;if(r===ti)return i.UNSIGNED_INT;if(r===ei)return i.FLOAT;if(r===Xs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ju)return i.ALPHA;if(r===bn)return i.RGBA;if(r===Qu)return i.LUMINANCE;if(r===td)return i.LUMINANCE_ALPHA;if(r===Ri)return i.DEPTH_COMPONENT;if(r===hs)return i.DEPTH_STENCIL;if(r===zo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Rl)return i.RED;if(r===Rh)return i.RED_INTEGER;if(r===ed)return i.RG;if(r===Ch)return i.RG_INTEGER;if(r===Ph)return i.RGBA_INTEGER;if(r===Ka||r===ja||r===Qa||r===to)if(l===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===tc||r===ec||r===nc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ic||r===sc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ic)return l===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===sc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rc||r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===xc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===rc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ac)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_c)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eo||r===yc||r===vc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===eo)return l===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nd||r===Mc||r===bc||r===Sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===eo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var el=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},sg={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nl=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),p=null,m=null,_=[],y=[],w=new pt,C=null,T=new Ge;T.layers.enable(1),T.viewport=new _e;let A=new Ge;A.layers.enable(2),A.viewport=new _e;let D=[T,A],v=new el;v.layers.enable(1),v.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=_[X];return tt===void 0&&(tt=new Hs,_[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=_[X];return tt===void 0&&(tt=new Hs,_[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=_[X];return tt===void 0&&(tt=new Hs,_[X]=tt),tt.getHandSpace()};function Y(X){let tt=y.indexOf(X.inputSource);if(tt===-1)return;let ft=_[tt];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||a),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function ot(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",I);for(let X=0;X<_.length;X++){let tt=y[X];tt!==null&&(y[X]=null,_[X].disconnect(tt))}S=null,N=null,t.setRenderTarget(p),d=null,f=null,u=null,s=null,m=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Wn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let tt=null,ft=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?hs:Ri,ft=x.stencil?Ai:ti);let Mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new Wn(f.textureWidth,f.textureHeight,{format:bn,type:si,depthTexture:new ma(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let wt=t.properties.get(m);wt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(X){for(let tt=0;tt<X.removed.length;tt++){let ft=X.removed[tt],vt=y.indexOf(ft);vt>=0&&(y[vt]=null,_[vt].disconnect(ft))}for(let tt=0;tt<X.added.length;tt++){let ft=X.added[tt],vt=y.indexOf(ft);if(vt===-1){for(let wt=0;wt<_.length;wt++)if(wt>=y.length){y.push(ft),vt=wt;break}else if(y[wt]===null){y[wt]=ft,vt=wt;break}if(vt===-1)break}let Mt=_[vt];Mt&&Mt.connect(ft)}}let F=new P,V=new P;function Z(X,tt,ft){F.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(ft.matrixWorld);let vt=F.distanceTo(V),Mt=tt.projectionMatrix.elements,wt=ft.projectionMatrix.elements,At=Mt[14]/(Mt[10]-1),Et=Mt[14]/(Mt[10]+1),Yt=(Mt[9]+1)/Mt[5],R=(Mt[9]-1)/Mt[5],lt=(Mt[8]-1)/Mt[0],L=(wt[8]+1)/wt[0],q=At*lt,G=At*L,et=vt/(-lt+L),nt=et*-lt;tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(nt),X.translateZ(et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let b=At+et,M=Et+et,O=q-nt,j=G+(vt-nt),K=Yt*Et/M*b,st=R*Et/M*b;X.projectionMatrix.makePerspective(O,j,K,st,b,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.near=A.near=T.near=X.near,v.far=A.far=T.far=X.far,(S!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,N=v.far);let tt=X.parent,ft=v.cameras;J(v,tt);for(let vt=0;vt<ft.length;vt++)J(ft[vt],tt);ft.length===2?Z(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),$(X,v,tt)};function $(X,tt,ft){ft===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ho*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let Q=null;function at(X,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let ft=h.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let vt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let Mt=0;Mt<ft.length;Mt++){let wt=ft[Mt],At=null;if(d!==null)At=d.getViewport(wt);else{let Yt=u.getViewSubImage(f,wt);At=Yt.viewport,Mt===0&&(t.setRenderTargetTextures(m,Yt.colorTexture,f.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(m))}let Et=D[Mt];Et===void 0&&(Et=new Ge,Et.layers.enable(Mt),Et.viewport=new _e,D[Mt]=Et),Et.matrix.fromArray(wt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(wt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(At.x,At.y,At.width,At.height),Mt===0&&(v.matrix.copy(Et.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(Et)}}for(let ft=0;ft<_.length;ft++){let vt=y[ft],Mt=_[ft];vt!==null&&Mt!==void 0&&Mt.update(vt,tt,c||a)}Q&&Q(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let dt=new kh;dt.setAnimationLoop(at),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}};function rg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Fh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,y,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ag(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let w=y.program;n.uniformBlockBinding(_,w)}function c(_,y){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",p));let C=y.program;n.updateUBOMapping(_,C);let T=t.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function h(_){let y=u();_.__bindingPointIndex=y;let w=i.createBuffer(),C=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],w=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=w.length;T<A;T++){let D=Array.isArray(w[T])?w[T]:[w[T]];for(let v=0,S=D.length;v<S;v++){let N=D[v];if(d(N,T,v,C)===!0){let Y=N.__offset,ot=Array.isArray(N.value)?N.value:[N.value],I=0;for(let F=0;F<ot.length;F++){let V=ot[F],Z=x(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,Y+I,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,y,w,C){let T=_.value,A=y+"_"+w;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let D=C[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return C[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(_){let y=_.uniforms,w=0,C=16;for(let A=0,D=y.length;A<D;A++){let v=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,N=v.length;S<N;S++){let Y=v[S],ot=Array.isArray(Y.value)?Y.value:[Y.value];for(let I=0,F=ot.length;I<F;I++){let V=ot[I],Z=x(V),J=w%C;J!==0&&C-J<Z.boundary&&(w+=C-J),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=Z.storage}}}let T=w%C;return T>0&&(w+=C-T),_.__size=w,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var qs=class{constructor(t={}){let{canvas:e=pd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let y=this,w=!1,C=0,T=0,A=null,D=-1,v=null,S=new _e,N=new _e,Y=null,ot=new Ot(0),I=0,F=e.width,V=e.height,Z=1,J=null,$=null,Q=new _e(0,0,F,V),at=new _e(0,0,F,V),dt=!1,X=new Ys,tt=!1,ft=!1,vt=null,Mt=new be,wt=new pt,At=new P,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return A===null?Z:1}let R=n;function lt(E,k){for(let z=0;z<E.length;z++){let W=E[z],B=e.getContext(W,k);if(B!==null)return B}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",mt,!1),R===null){let k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),R=lt(k,E),R===null)throw lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let L,q,G,et,nt,b,M,O,j,K,st,yt,ct,_t,St,Nt,it,ee,Kt,kt,Rt,bt,Vt,ie;function ve(){L=new Tm(R),q=new ym(R,L,t),L.init(q),bt=new ig(R,L,q),G=new eg(R,L,q),et=new Rm(R),nt=new V0,b=new ng(R,L,G,nt,q,bt,et),M=new Mm(y),O=new Em(y),j=new Nd(R,q),Vt=new _m(R,L,j,q),K=new wm(R,j,et,Vt),st=new Im(R,K,j,et),Kt=new Lm(R,q,b),Nt=new vm(nt),yt=new G0(y,M,O,L,q,Vt,Nt),ct=new rg(y,nt),_t=new X0,St=new K0(L,q),ee=new gm(y,M,O,G,st,f,l),it=new tg(y,st,q),ie=new ag(R,et,q,G),kt=new xm(R,L,et,q),Rt=new Am(R,L,et,q),et.programs=yt.programs,y.capabilities=q,y.extensions=L,y.properties=nt,y.renderLists=_t,y.shadowMap=it,y.state=G,y.info=et}ve();let qt=new nl(y,R);this.xr=qt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=L.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=L.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(F,V,!1))},this.getSize=function(E){return E.set(F,V)},this.setSize=function(E,k,z=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,V=k,e.width=Math.floor(E*Z),e.height=Math.floor(k*Z),z===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(F*Z,V*Z).floor()},this.setDrawingBufferSize=function(E,k,z){F=E,V=k,Z=z,e.width=Math.floor(E*z),e.height=Math.floor(k*z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,k,z,W){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,k,z,W),G.viewport(S.copy(Q).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,k,z,W){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,k,z,W),G.scissor(N.copy(at).multiplyScalar(Z).floor())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){G.setScissorTest(dt=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,k=!0,z=!0){let W=0;if(E){let B=!1;if(A!==null){let xt=A.texture.format;B=xt===Ph||xt===Ch||xt===Rh}if(B){let xt=A.texture.type,Tt=xt===si||xt===ti||xt===Al||xt===Ai||xt===wh||xt===Ah,Lt=ee.getClearColor(),Dt=ee.getClearAlpha(),Xt=Lt.r,zt=Lt.g,Ht=Lt.b;Tt?(d[0]=Xt,d[1]=zt,d[2]=Ht,d[3]=Dt,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=Xt,g[1]=zt,g[2]=Ht,g[3]=Dt,R.clearBufferiv(R.COLOR,0,g))}else W|=R.COLOR_BUFFER_BIT}k&&(W|=R.DEPTH_BUFFER_BIT),z&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),_t.dispose(),St.dispose(),nt.dispose(),M.dispose(),O.dispose(),st.dispose(),Vt.dispose(),ie.dispose(),yt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",en),qt.removeEventListener("sessionend",ue),vt&&(vt.dispose(),vt=null),nn.stop()};function ht(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=et.autoReset,k=it.enabled,z=it.autoUpdate,W=it.needsUpdate,B=it.type;ve(),et.autoReset=E,it.enabled=k,it.autoUpdate=z,it.needsUpdate=W,it.type=B}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function gt(E){let k=E.target;k.removeEventListener("dispose",gt),It(k)}function It(E){Pt(E),nt.remove(E)}function Pt(E){let k=nt.get(E).programs;k!==void 0&&(k.forEach(function(z){yt.releaseProgram(z)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,z,W,B,xt){k===null&&(k=Et);let Tt=B.isMesh&&B.matrixWorld.determinant()<0,Lt=du(E,k,z,W,B);G.setMaterial(W,Tt);let Dt=z.index,Xt=1;if(W.wireframe===!0){if(Dt=K.getWireframeAttribute(z),Dt===void 0)return;Xt=2}let zt=z.drawRange,Ht=z.attributes.position,we=zt.start*Xt,an=(zt.start+zt.count)*Xt;xt!==null&&(we=Math.max(we,xt.start*Xt),an=Math.min(an,(xt.start+xt.count)*Xt)),Dt!==null?(we=Math.max(we,0),an=Math.min(an,Dt.count)):Ht!=null&&(we=Math.max(we,0),an=Math.min(an,Ht.count));let ze=an-we;if(ze<0||ze===1/0)return;Vt.setup(B,W,Lt,z,Dt);let Un,ye=kt;if(Dt!==null&&(Un=j.get(Dt),ye=Rt,ye.setIndex(Un)),B.isMesh)W.wireframe===!0?(G.setLineWidth(W.wireframeLinewidth*Yt()),ye.setMode(R.LINES)):ye.setMode(R.TRIANGLES);else if(B.isLine){let $t=W.linewidth;$t===void 0&&($t=1),G.setLineWidth($t*Yt()),B.isLineSegments?ye.setMode(R.LINES):B.isLineLoop?ye.setMode(R.LINE_LOOP):ye.setMode(R.LINE_STRIP)}else B.isPoints?ye.setMode(R.POINTS):B.isSprite&&ye.setMode(R.TRIANGLES);if(B.isBatchedMesh)ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ye.renderInstances(we,ze,B.count);else if(z.isInstancedBufferGeometry){let $t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ya=Math.min(z.instanceCount,$t);ye.renderInstances(we,ze,Ya)}else ye.render(we,ze)};function ce(E,k,z){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=qe,E.needsUpdate=!0,yr(E,k,z),E.side=ai,E.needsUpdate=!0,yr(E,k,z),E.side=Ye):yr(E,k,z)}this.compile=function(E,k,z=null){z===null&&(z=E),p=St.get(z),p.init(),_.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==z&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(y._useLegacyLights);let W=new Set;return E.traverse(function(B){let xt=B.material;if(xt)if(Array.isArray(xt))for(let Tt=0;Tt<xt.length;Tt++){let Lt=xt[Tt];ce(Lt,z,B),W.add(Lt)}else ce(xt,z,B),W.add(xt)}),_.pop(),p=null,W},this.compileAsync=function(E,k,z=null){let W=this.compile(E,k,z);return new Promise(B=>{function xt(){if(W.forEach(function(Tt){nt.get(Tt).currentProgram.isReady()&&W.delete(Tt)}),W.size===0){B(E);return}setTimeout(xt,10)}L.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let he=null;function Be(E){he&&he(E)}function en(){nn.stop()}function ue(){nn.start()}let nn=new kh;nn.setAnimationLoop(Be),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(E){he=E,qt.setAnimationLoop(E),E===null?nn.stop():nn.start()},qt.addEventListener("sessionstart",en),qt.addEventListener("sessionend",ue),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(k),k=qt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,A),p=St.get(E,_.length),p.init(),_.push(p),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(Mt),ft=this.localClippingEnabled,tt=Nt.init(this.clippingPlanes,ft),x=_t.get(E,m.length),x.init(),m.push(x),Rn(E,k,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(J,$),this.info.render.frame++,tt===!0&&Nt.beginShadows();let z=p.state.shadowsArray;if(it.render(z,E,k),tt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(x,E),p.setupLights(y._useLegacyLights),k.isArrayCamera){let W=k.cameras;for(let B=0,xt=W.length;B<xt;B++){let Tt=W[B];zl(x,E,Tt,Tt.viewport)}}else zl(x,E,k);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(y,E,k),Vt.resetDefaultState(),D=-1,v=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Rn(E,k,z,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Mt);let Tt=st.update(E),Lt=E.material;Lt.visible&&x.push(E,Tt,Lt,z,At.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let Tt=st.update(E),Lt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),At.copy(Tt.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(Mt)),Array.isArray(Lt)){let Dt=Tt.groups;for(let Xt=0,zt=Dt.length;Xt<zt;Xt++){let Ht=Dt[Xt],we=Lt[Ht.materialIndex];we&&we.visible&&x.push(E,Tt,we,z,At.z,Ht)}}else Lt.visible&&x.push(E,Tt,Lt,z,At.z,null)}}let xt=E.children;for(let Tt=0,Lt=xt.length;Tt<Lt;Tt++)Rn(xt[Tt],k,z,W)}function zl(E,k,z,W){let B=E.opaque,xt=E.transmissive,Tt=E.transparent;p.setupLightsView(z),tt===!0&&Nt.setGlobalState(y.clippingPlanes,z),xt.length>0&&uu(B,xt,k,z),W&&G.viewport(S.copy(W)),B.length>0&&xr(B,k,z),xt.length>0&&xr(xt,k,z),Tt.length>0&&xr(Tt,k,z),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function uu(E,k,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let xt=q.isWebGL2;vt===null&&(vt=new Wn(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?Xs:si,minFilter:Ws,samples:xt?4:0})),y.getDrawingBufferSize(wt),xt?vt.setSize(wt.x,wt.y):vt.setSize(Go(wt.x),Go(wt.y));let Tt=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(ot),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let Lt=y.toneMapping;y.toneMapping=ii,xr(E,z,W),b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt);let Dt=!1;for(let Xt=0,zt=k.length;Xt<zt;Xt++){let Ht=k[Xt],we=Ht.object,an=Ht.geometry,ze=Ht.material,Un=Ht.group;if(ze.side===Ye&&we.layers.test(W.layers)){let ye=ze.side;ze.side=qe,ze.needsUpdate=!0,Hl(we,z,W,an,ze,Un),ze.side=ye,ze.needsUpdate=!0,Dt=!0}}Dt===!0&&(b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt)),y.setRenderTarget(Tt),y.setClearColor(ot,I),y.toneMapping=Lt}function xr(E,k,z){let W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,xt=E.length;B<xt;B++){let Tt=E[B],Lt=Tt.object,Dt=Tt.geometry,Xt=W===null?Tt.material:W,zt=Tt.group;Lt.layers.test(z.layers)&&Hl(Lt,k,z,Dt,Xt,zt)}}function Hl(E,k,z,W,B,xt){E.onBeforeRender(y,k,z,W,B,xt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(y,k,z,W,E,xt),B.transparent===!0&&B.side===Ye&&B.forceSinglePass===!1?(B.side=qe,B.needsUpdate=!0,y.renderBufferDirect(z,k,W,B,E,xt),B.side=ai,B.needsUpdate=!0,y.renderBufferDirect(z,k,W,B,E,xt),B.side=Ye):y.renderBufferDirect(z,k,W,B,E,xt),E.onAfterRender(y,k,z,W,B,xt)}function yr(E,k,z){k.isScene!==!0&&(k=Et);let W=nt.get(E),B=p.state.lights,xt=p.state.shadowsArray,Tt=B.state.version,Lt=yt.getParameters(E,B.state,xt,k,z),Dt=yt.getProgramCacheKey(Lt),Xt=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||W.environment),Xt===void 0&&(E.addEventListener("dispose",gt),Xt=new Map,W.programs=Xt);let zt=Xt.get(Dt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===Tt)return Vl(E,Lt),zt}else Lt.uniforms=yt.getUniforms(E),E.onBuild(z,Lt,y),E.onBeforeCompile(Lt,y),zt=yt.acquireProgram(Lt,Dt),Xt.set(Dt,zt),W.uniforms=Lt.uniforms;let Ht=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Nt.uniform),Vl(E,Lt),W.needsLights=pu(E),W.lightsStateVersion=Tt,W.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function Gl(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=os.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Vl(E,k){let z=nt.get(E);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function du(E,k,z,W,B){k.isScene!==!0&&(k=Et),b.resetTextureUnits();let xt=k.fog,Tt=W.isMeshStandardMaterial?k.environment:null,Lt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vn,Dt=(W.isMeshStandardMaterial?O:M).get(W.envMap||Tt),Xt=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!z.morphAttributes.position,we=!!z.morphAttributes.normal,an=!!z.morphAttributes.color,ze=ii;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ze=y.toneMapping);let Un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ye=Un!==void 0?Un.length:0,$t=nt.get(W),Ya=p.state.lights;if(tt===!0&&(ft===!0||E!==v)){let dn=E===v&&W.id===D;Nt.setState(W,E,dn)}let Me=!1;W.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ya.state.version||$t.outputColorSpace!==Lt||B.isBatchedMesh&&$t.batching===!1||!B.isBatchedMesh&&$t.batching===!0||B.isInstancedMesh&&$t.instancing===!1||!B.isInstancedMesh&&$t.instancing===!0||B.isSkinnedMesh&&$t.skinning===!1||!B.isSkinnedMesh&&$t.skinning===!0||B.isInstancedMesh&&$t.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&$t.instancingColor===!1&&B.instanceColor!==null||$t.envMap!==Dt||W.fog===!0&&$t.fog!==xt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Nt.numPlanes||$t.numIntersection!==Nt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==zt||$t.morphTargets!==Ht||$t.morphNormals!==we||$t.morphColors!==an||$t.toneMapping!==ze||q.isWebGL2===!0&&$t.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,$t.__version=W.version);let _i=$t.currentProgram;Me===!0&&(_i=yr(W,k,B));let Wl=!1,Ls=!1,qa=!1,Ke=_i.getUniforms(),xi=$t.uniforms;if(G.useProgram(_i.program)&&(Wl=!0,Ls=!0,qa=!0),W.id!==D&&(D=W.id,Ls=!0),Wl||v!==E){Ke.setValue(R,"projectionMatrix",E.projectionMatrix),Ke.setValue(R,"viewMatrix",E.matrixWorldInverse);let dn=Ke.map.cameraPosition;dn!==void 0&&dn.setValue(R,At.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&Ke.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ke.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Ls=!0,qa=!0)}if(B.isSkinnedMesh){Ke.setOptional(R,B,"bindMatrix"),Ke.setOptional(R,B,"bindMatrixInverse");let dn=B.skeleton;dn&&(q.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Ke.setValue(R,"boneTexture",dn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ke.setOptional(R,B,"batchingTexture"),Ke.setValue(R,"batchingTexture",B._matricesTexture,b));let $a=z.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0&&q.isWebGL2===!0)&&Kt.update(B,z,_i),(Ls||$t.receiveShadow!==B.receiveShadow)&&($t.receiveShadow=B.receiveShadow,Ke.setValue(R,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xi.envMap.value=Dt,xi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Ls&&(Ke.setValue(R,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&fu(xi,qa),xt&&W.fog===!0&&ct.refreshFogUniforms(xi,xt),ct.refreshMaterialUniforms(xi,W,Z,V,vt),os.upload(R,Gl($t),xi,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(os.upload(R,Gl($t),xi,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ke.setValue(R,"center",B.center),Ke.setValue(R,"modelViewMatrix",B.modelViewMatrix),Ke.setValue(R,"normalMatrix",B.normalMatrix),Ke.setValue(R,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let dn=W.uniformsGroups;for(let Za=0,mu=dn.length;Za<mu;Za++)if(q.isWebGL2){let Xl=dn[Za];ie.update(Xl,_i),ie.bind(Xl,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function fu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function pu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,k,z){nt.get(E.texture).__webglTexture=k,nt.get(E.depthTexture).__webglTexture=z;let W=nt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){let z=nt.get(E);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,z=0){A=E,C=k,T=z;let W=!0,B=null,xt=!1,Tt=!1;if(E){let Dt=nt.get(E);Dt.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(R.FRAMEBUFFER,null),W=!1):Dt.__webglFramebuffer===void 0?b.setupRenderTarget(E):Dt.__hasExternalTextures&&b.rebindTextures(E,nt.get(E.texture).__webglTexture,nt.get(E.depthTexture).__webglTexture);let Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Tt=!0);let zt=nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[k])?B=zt[k][z]:B=zt[k],xt=!0):q.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?B=nt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[z]:B=zt,S.copy(E.viewport),N.copy(E.scissor),Y=E.scissorTest}else S.copy(Q).multiplyScalar(Z).floor(),N.copy(at).multiplyScalar(Z).floor(),Y=dt;if(G.bindFramebuffer(R.FRAMEBUFFER,B)&&q.drawBuffers&&W&&G.drawBuffers(E,B),G.viewport(S),G.scissor(N),G.setScissorTest(Y),xt){let Dt=nt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,z)}else if(Tt){let Dt=nt.get(E.texture),Xt=k||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,z||0,Xt)}D=-1},this.readRenderTargetPixels=function(E,k,z,W,B,xt,Tt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){G.bindFramebuffer(R.FRAMEBUFFER,Lt);try{let Dt=E.texture,Xt=Dt.format,zt=Dt.type;if(Xt!==bn&&bt.convert(Xt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=zt===Xs&&(L.has("EXT_color_buffer_half_float")||q.isWebGL2&&L.has("EXT_color_buffer_float"));if(zt!==si&&bt.convert(zt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===ei&&(q.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&z>=0&&z<=E.height-B&&R.readPixels(k,z,W,B,bt.convert(Xt),bt.convert(zt),xt)}finally{let Dt=A!==null?nt.get(A).__webglFramebuffer:null;G.bindFramebuffer(R.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(E,k,z=0){let W=Math.pow(2,-z),B=Math.floor(k.image.width*W),xt=Math.floor(k.image.height*W);b.setTexture2D(k,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,E.x,E.y,B,xt),G.unbindTexture()},this.copyTextureToTexture=function(E,k,z,W=0){let B=k.image.width,xt=k.image.height,Tt=bt.convert(z.format),Lt=bt.convert(z.type);b.setTexture2D(z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment),k.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,W,E.x,E.y,B,xt,Tt,Lt,k.image.data):k.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,W,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Tt,k.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,W,E.x,E.y,Tt,Lt,k.image),W===0&&z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(E,k,z,W,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=E.max.x-E.min.x+1,Tt=E.max.y-E.min.y+1,Lt=E.max.z-E.min.z+1,Dt=bt.convert(W.format),Xt=bt.convert(W.type),zt;if(W.isData3DTexture)b.setTexture3D(W,0),zt=R.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),zt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,W.unpackAlignment);let Ht=R.getParameter(R.UNPACK_ROW_LENGTH),we=R.getParameter(R.UNPACK_IMAGE_HEIGHT),an=R.getParameter(R.UNPACK_SKIP_PIXELS),ze=R.getParameter(R.UNPACK_SKIP_ROWS),Un=R.getParameter(R.UNPACK_SKIP_IMAGES),ye=z.isCompressedTexture?z.mipmaps[B]:z.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,E.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,E.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?R.texSubImage3D(zt,B,k.x,k.y,k.z,xt,Tt,Lt,Dt,Xt,ye.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(zt,B,k.x,k.y,k.z,xt,Tt,Lt,Dt,ye.data)):R.texSubImage3D(zt,B,k.x,k.y,k.z,xt,Tt,Lt,Dt,Xt,ye),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,we),R.pixelStorei(R.UNPACK_SKIP_PIXELS,an),R.pixelStorei(R.UNPACK_SKIP_ROWS,ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Un),B===0&&W.generateMipmaps&&R.generateMipmap(zt),G.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),G.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,G.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Cl?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Ca?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?Ci:Ih}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ci?Ae:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},il=class extends qs{};il.prototype.isWebGL1Renderer=!0;var ga=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},sl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new P,_a=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$s=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qi,Os=new P,ts=new P,es=new P,ns=new pt,Fs=new pt,Wh=new be,Gr=new P,ks=new P,Vr=new P,fh=new pt,Ro=new pt,ph=new pt,xa=class extends Ze{constructor(t=new $s){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sl(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new _a(n,3,0,!1)),Qi.setAttribute("uv",new _a(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Wr(Gr.set(-.5,-.5,0),es,a,ts,s,r),Wr(ks.set(.5,-.5,0),es,a,ts,s,r),Wr(Vr.set(.5,.5,0),es,a,ts,s,r),fh.set(0,0),Ro.set(1,0),ph.set(1,1);let o=t.ray.intersectTriangle(Gr,ks,Vr,!1,Os);if(o===null&&(Wr(ks.set(-.5,.5,0),es,a,ts,s,r),Ro.set(0,1),o=t.ray.intersectTriangle(Gr,Vr,ks,!1,Os),o===null))return;let l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:wi.getInterpolation(Os,Gr,ks,Vr,fh,Ro,ph,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wr(i,t,e,n,s,r){ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*ns.x-s*ns.y,Fs.y=s*ns.x+r*ns.y):Fs.copy(ns),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Wh)}var ya=class extends cn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mh=new be,rl=new aa,Xr=new us,Yr=new P,va=class extends Ze{constructor(t=new Pe,e=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;mh.copy(s).invert(),rl.copy(t.ray).applyMatrix4(mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Yr.fromBufferAttribute(u,p),gh(Yr,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Yr.fromBufferAttribute(u,g),gh(Yr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gh(i,t,e,n,s,r,a){let o=rl.distanceSqToPoint(i);if(o<e){let l=new P;rl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var ps=class extends cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new be;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends gn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new pt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},al=class extends Js{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var qr=new P,Co=new Ll,Po=new Ll,Lo=new Ll,ol=class extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),c=qr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Co.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),Po.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),Lo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Po.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Lo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Co.calc(l),Po.calc(l),Lo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _h(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function og(i,t){let e=1-i;return e*e*t}function lg(i,t){return 2*(1-i)*i*t}function cg(i,t){return i*i*t}function Gs(i,t,e,n){return og(i,t)+lg(i,e)+cg(i,n)}function hg(i,t){let e=1-i;return e*e*e*t}function ug(i,t){let e=1-i;return 3*e*e*i*t}function dg(i,t){return 3*(1-i)*i*i*t}function fg(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return hg(i,t)+ug(i,e)+dg(i,n)+fg(i,s)}var Ma=class extends gn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,s.x,r.x,a.x,o.x),Vs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ll=class extends gn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,s.x,r.x,a.x,o.x),Vs(t,s.y,r.y,a.y,o.y),Vs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends gn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cl=class extends gn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends gn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends gn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y),Gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(_h(o,l.x,c.x,h.x,u.x),_h(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},xh=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:ol,CubicBezierCurve:Ma,CubicBezierCurve3:ll,EllipseCurve:Js,LineCurve:ba,LineCurve3:cl,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:hl,SplineCurve:Ea}),ul=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xh[s.type]().fromJSON(s))}return this}},dl=class extends ul{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ba(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Sa(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ma(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Js(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ks=class i extends Pe{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,f=new pt,d=new P,g=new P,x=new P,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*s,w=Math.sin(y),C=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*w,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),f.x=_/e,f.y=T/(t.length-1),o.push(f.x,f.y);let A=l[3*T+0]*w,D=l[3*T+1],v=l[3*T+0]*C;c.push(A,D,v)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let w=y+_*t.length,C=w,T=w+t.length,A=w+t.length+1,D=w+1;r.push(C,T,D),r.push(A,D,T)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ta=class i extends Ks{constructor(t=1,e=1,n=4,s=8){let r=new dl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},En=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},de=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=n/2,m=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function _(){let w=new P,C=new P,T=0,A=(e-t)/n;for(let D=0;D<=r;D++){let v=[],S=D/r,N=S*(e-t)+t;for(let Y=0;Y<=s;Y++){let ot=Y/s,I=ot*l+o,F=Math.sin(I),V=Math.cos(I);C.x=N*F,C.y=-S*n+p,C.z=N*V,u.push(C.x,C.y,C.z),w.set(F,A,V).normalize(),f.push(w.x,w.y,w.z),d.push(ot,1-S),v.push(g++)}x.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){let S=x[v][D],N=x[v+1][D],Y=x[v+1][D+1],ot=x[v][D+1];h.push(S,N,ot),h.push(N,Y,ot),T+=6}c.addGroup(m,T,0),m+=T}function y(w){let C=g,T=new pt,A=new P,D=0,v=w===!0?t:e,S=w===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;let N=g;for(let Y=0;Y<=s;Y++){let I=Y/s*l+o,F=Math.cos(I),V=Math.sin(I);A.x=v*V,A.y=p*S,A.z=v*F,u.push(A.x,A.y,A.z),f.push(0,S,0),T.x=F*.5+.5,T.y=V*.5*S+.5,d.push(T.x,T.y),g++}for(let Y=0;Y<s;Y++){let ot=C+Y,I=N+Y;w===!0?h.push(I,I+1,ot):h.push(I+1,I,ot),D+=3}c.addGroup(m,D,w===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ms=class i extends de{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fl=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new P,w=new P,C=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],y),d(e[T+1],w),d(e[T+2],C),l(y,w,C,_)}function l(_,y,w,C){let T=C+1,A=[];for(let D=0;D<=T;D++){A[D]=[];let v=_.clone().lerp(w,D/T),S=y.clone().lerp(w,D/T),N=T-D;for(let Y=0;Y<=N;Y++)Y===0&&D===T?A[D][Y]=v:A[D][Y]=v.clone().lerp(S,Y/N)}for(let D=0;D<T;D++)for(let v=0;v<2*(T-D)-1;v++){let S=Math.floor(v/2);v%2===0?(f(A[D][S+1]),f(A[D+1][S]),f(A[D][S])):(f(A[D][S+1]),f(A[D+1][S+1]),f(A[D+1][S]))}}function c(_){let y=new P;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(_),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){let _=new P;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let w=p(_)/2/Math.PI+.5,C=m(_)/Math.PI+.5;a.push(w,1-C)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let y=a[_+0],w=a[_+2],C=a[_+4],T=Math.max(y,w,C),A=Math.min(y,w,C);T>.9&&A<.1&&(y<.2&&(a[_+0]+=1),w<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,y){let w=_*3;y.x=t[w+0],y.y=t[w+1],y.z=t[w+2]}function g(){let _=new P,y=new P,w=new P,C=new P,T=new pt,A=new pt,D=new pt;for(let v=0,S=0;v<r.length;v+=9,S+=6){_.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),w.set(r[v+6],r[v+7],r[v+8]),T.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),C.copy(_).add(y).add(w).divideScalar(3);let N=p(C);x(T,S+0,_,N),x(A,S+2,y,N),x(D,S+4,w,N)}}function x(_,y,w,C){C<0&&_.x===1&&(a[y]=_.x-1),w.x===0&&w.z===0&&(a[y]=C/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var gs=class i extends fl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ci=class i extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new P,g=new pt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let _=m+p,y=_,w=_+n+1,C=_+n+2,T=_+1;o.push(y,w,T),o.push(w,C,T)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Se=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,f=new P,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],y=m/n,w=0;m===0&&a===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(T+w,1-y),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let y=h[m][_+1],w=h[m][_],C=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&d.push(y,w,T),(m!==n-1||l<Math.PI)&&d.push(w,C,T)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,_=(s+1)*d+g;a.push(x,p,_),a.push(p,m,_)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var js=class extends Xn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function $r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,o=2*e-n;break;case wc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:a=t,l=2*n-e;break;case wc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,_=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*x+.5*g,w=d*p-d*x;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+_*a[c+C]+y*a[l+C]+w*a[u+C];return r}},ml=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},gl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Jr:e=this.InterpolantFactoryMethodDiscrete;break;case Kr:e=this.InterpolantFactoryMethodLinear;break;case no:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&pg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===no,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Kr;var Ii=class extends Tn{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Jr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Tn{};_l.prototype.ValueTypeName="color";var xl=class extends Tn{};xl.prototype.ValueTypeName="number";var yl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)li.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qs=class extends Tn{InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.DefaultInterpolation=Kr;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Tn{};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Jr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Tn{};vl.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},mg=new Ml,bl=class{constructor(t){this.manager=t!==void 0?t:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ys=class extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Io=new be,yh=new P,vh=new P,wa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Mh=new be,Bs=new P,Uo=new P,Sl=class extends wa{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),Uo.copy(n.position),Uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Uo),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh)}},er=class extends tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},El=class extends wa{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new El}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Il="\\[\\]\\.:\\/",gg=new RegExp("["+Il+"]","g"),Ul="[^"+Il+"]",_g="[^"+Il.replace("\\.","")+"]",xg=/((?:WC+[\/:])*)/.source.replace("WC",Ul),yg=/(WCOD+)?/.source.replace("WCOD",_g),vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),bg=new RegExp("^"+xg+yg+vg+Mg+"$"),Sg=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(t){let e=bg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Tl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Xh={_readme:"Edit this file to put your crew in the game. One entry per friend. Stats are 1 to 10 and should add up to 45. Drop a face photo at faces/<id>.png and it is picked up automatically (optional extras: faces/<id>_happy.png, faces/<id>_shock.png, faces/<id>_sad.png). Abilities: lock, sharp, juice, chalk, hedge, tout. Spots in the Lounge: tv, bar, pool, window, pacer.",crew:{title:"HOOP LEGENDS",homeName:"LOCKS",awayName:"FADES",homeColor:"#2b6c99",awayColor:"#e4472b",startingUnits:10},bartender:{name:"VIG",look:{skin:"#d9a37a",hair:"#e8e8e8",hairStyle:"short",beard:!0},lines:["What'll it be? Advice is free. Worth every penny.","House always wins. I am the house.","Tip of the day is on the board. Fade at your own risk."]},players:[{id:"prof",name:"THE PROFESSOR",you:!0,number:9,look:{skin:"#f0c39a",hair:"#5a3a22",hairStyle:"short",glasses:!0,height:1},bio:"Shoots threes, refuses to play defense",stats:{shooting:9,dunking:2,handles:7,speed:9,defense:2,clutch:8,trashTalk:8},ability:"lock",lines:["This line is a gift!","I ran the numbers. Twice.","It's not gambling if you're right.","Hammer it. Trust the model."],worstPick:"Lost a 12-leg parlay on the very last leg",beefs:["unit"],spot:"tv"},{id:"unit",name:"BIG UNIT",number:45,look:{skin:"#b97a50",hair:"#1c1310",hairStyle:"bald",beard:!0,height:1.14,build:1.2},bio:"Dunks on everyone, shoots like a fridge",stats:{shooting:3,dunking:10,handles:4,speed:5,defense:9,clutch:6,trashTalk:8},ability:"juice",lines:["Five units. No, ten. MAX BET.","Get that weak stuff outta here!","Who's guarding me? Nobody? Correct.","I only bet overs. Life's too short."],worstPick:"Went max bet on a team that scored 61 points. Total.",beefs:["prof","chalk"],spot:"bar"},{id:"chalk",name:"CHALK",number:2,look:{skin:"#e8b58a",hair:"#222222",hairStyle:"cap",height:1.02},bio:"Only takes favorites. Solid at everything, great at nothing",stats:{shooting:7,dunking:5,handles:6,speed:6,defense:7,clutch:8,trashTalk:6},ability:"chalk",lines:["Favorites win. That's why they're favorites.","Laying the points. Always.","Minus 900 is basically free money.","Never met a dog I liked."],worstPick:"Laid -900 on a sure thing. It was not a sure thing.",beefs:["square"],spot:"pool"},{id:"square",name:"SQUARE",number:11,look:{skin:"#8d5a3b",hair:"#111111",hairStyle:"flat",headband:!0,height:1.07},bio:"Bets with his heart. Plays defense with his whole chest",stats:{shooting:5,dunking:7,handles:5,speed:7,defense:8,clutch:4,trashTalk:9},ability:"hedge",lines:["My team by a million.","The public is NEVER wrong. Okay sometimes.","I saw it on a billboard, it's a lock.","Same game parlay, 14 legs, feeling good."],worstPick:"Bet his own team to win the title. In the preseason. Every year.",beefs:["chalk","sharpie"],spot:"pool"},{id:"sharpie",name:"SHARPIE",number:7,look:{skin:"#f3d2b3",hair:"#c9a227",hairStyle:"afro",height:.94},bio:"Tiny, shifty, sees the play before it happens",stats:{shooting:8,dunking:3,handles:9,speed:8,defense:5,clutch:7,trashTalk:5},ability:"sharp",lines:["I got that number on Tuesday.","Closing line value, baby.","You're betting it NOW? Yikes.","I don't sweat games. I sweat numbers."],worstPick:"Got the best number of his life. Still lost by 40.",beefs:["square","tout"],spot:"tv"},{id:"tout",name:"THE TOUT",number:1,look:{skin:"#c98e62",hair:"#2b1a10",hairStyle:"short",glasses:!0,beard:!0,height:1},bio:"All talk, all the time, 100 percent guaranteed",stats:{shooting:6,dunking:4,handles:8,speed:7,defense:3,clutch:7,trashTalk:10},ability:"tout",lines:["WHALE PLAY OF THE CENTURY, link in bio.","I'm 47 and 2 this month. Don't check.","Guaranteed winner or the next one's free!","Fade me? FADE ME?!"],worstPick:"Sold a 'lock of the year'. Three times. In one week. All lost.",beefs:["sharpie"],spot:"bar"},{id:"steam",name:"STEAM",number:23,look:{skin:"#6f4630",hair:"#0e0e0e",hairStyle:"flat",height:1.09},bio:"Fastest man in the building, moves like the line",stats:{shooting:4,dunking:9,handles:6,speed:10,defense:6,clutch:5,trashTalk:5},ability:"juice",abilityName:"LINE MOVER",lines:["Line's moving. So am I.","Blink and it's minus seven.","Catch me? You can't even catch the number."],worstPick:"Chased steam into a trap game. The trap was for him.",beefs:["late"],spot:"pacer"},{id:"late",name:"LATE MONEY",number:0,look:{skin:"#eab08c",hair:"#7a1f1f",hairStyle:"cap",beard:!0,height:1.03},bio:"Quiet for 39 minutes, then ruins your night",stats:{shooting:8,dunking:6,handles:5,speed:6,defense:6,clutch:10,trashTalk:4},ability:"lock",abilityName:"BUZZER BEATER",lines:["It's never over. Ask my bookie.","Backdoor cover incoming.","I live for the last two minutes."],worstPick:"Cashed out early. It hit. He has not recovered.",beefs:["steam"],spot:"window"}],roasts:[{a:"prof",b:"unit",lines:["Statistically, you shoot worse than a blindfolded toddler.","Statistically, I can pick you up with one hand.","HAHAHA"]},{a:"chalk",b:"square",lines:["You bet with your heart, Square.","And you bet -900 with your rent.","\u2026that was ONE time."]},{a:"tout",b:"sharpie",lines:["Tail me tonight, kid. Guaranteed.","I'd rather tail the bartender.","HAHAHA okay that hurt."]}],reactions:{afterWin:["Okay {you}, I see you!","Respect. Don't let it go to your giant head.","Covered AND won? Who are you?"],afterLoss:["Tough scene out there, {you}.","HAHA I had the other side.","Fade {you}. Free money."],afterBadBeat:["Ohhh that one HURT. Bad beat city.","I felt that slip rip from here.","Moment of silence for {you}'s units."],night:["Late games are the best games.","West coast tip in ten. Who's got action?","Sleep is for people who don't have the over."]},ads:["UNITS ARE FAKE","THE BEEF IS REAL","TAIL OR FADE","HOOP LEGENDS","LOCK OF THE NIGHT","NO REAL MONEY"]};var Yn=new Set,nr=new Set,La=new Set,ir={},Dl=null,Ve={x:0,z:0,id:null,ox:0,oy:0},Tg=()=>window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,bs={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]},Ia="",te={down:i=>Yn.has(i),pressed:i=>nr.has(i),released:i=>La.has(i),anyPressed:()=>nr.size>0,axis(){let i=Ve.x,t=Ve.z;for(let n in bs)Yn.has(n)&&(i+=bs[n][0],t+=bs[n][1]);let e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,z:t,m:Math.min(1,e)}},sprint:()=>Yn.has("ShiftLeft")||Yn.has("ShiftRight")||Math.hypot(Ve.x,Ve.z)>.93,doubleTap(){let i=Dl;return Dl=null,i},typed:()=>Ia,clearTyped(){Ia=""},endFrame(){nr.clear(),La.clear()},press(i){Yn.has(i)||nr.add(i),Yn.add(i)},release(i){Yn.has(i)&&La.add(i),Yn.delete(i)},reset(){Yn.clear(),nr.clear(),La.clear(),Ve.x=Ve.z=0}};function Yh(i){addEventListener("keydown",o=>{if(!(o.target&&/INPUT|TEXTAREA/.test(o.target.tagName))&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(o.code)&&o.preventDefault(),!o.repeat&&(te.press(o.code),o.key&&o.key.length===1&&(Ia=(Ia+o.key.toLowerCase()).slice(-24)),bs[o.code]))){let l=performance.now();ir.c===o.code&&l-ir.t<260?(Dl={x:bs[o.code][0],z:bs[o.code][1]},ir.t=0):(ir.c=o.code,ir.t=l)}}),addEventListener("keyup",o=>te.release(o.code)),addEventListener("blur",()=>te.reset());let t=document.createElement("div");t.id="touch",t.innerHTML=`<div id="joyzone"><div id="joybase"><div id="joyknob"></div></div></div>
  <div id="tbtns">
    <button data-k="KeyF" class="tb sig" id="tb-f">SIG</button>
    <button data-k="KeyT" class="tb" id="tb-t">PROP</button>
    <button data-k="KeyQ" class="tb" id="tb-q">STEAL<br>JUKE</button>
    <button data-k="KeyE" class="tb" id="tb-e">PASS</button>
    <button data-k="Space" class="tb big" id="tb-s">SHOOT</button>
  </div>`,i.appendChild(t),Tg()||(t.hidden=!0),addEventListener("touchstart",()=>{t.hidden=!1},{once:!0,passive:!0});let e=t.querySelector("#joyzone"),n=t.querySelector("#joybase"),s=t.querySelector("#joyknob"),r=52;e.addEventListener("pointerdown",o=>{Ve.id=o.pointerId,Ve.ox=o.clientX,Ve.oy=o.clientY,e.setPointerCapture(o.pointerId),n.style.left=o.clientX-e.getBoundingClientRect().left+"px",n.style.top=o.clientY-e.getBoundingClientRect().top+"px",n.classList.add("on")}),e.addEventListener("pointermove",o=>{if(o.pointerId!==Ve.id)return;let l=o.clientX-Ve.ox,c=o.clientY-Ve.oy,h=Math.hypot(l,c);h>r&&(l*=r/h,c*=r/h),Ve.x=l/r,Ve.z=c/r,s.style.transform=`translate(${l}px,${c}px)`});let a=o=>{o.pointerId===Ve.id&&(Ve.id=null,Ve.x=Ve.z=0,s.style.transform="",n.classList.remove("on"))};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),t.querySelectorAll(".tb").forEach(o=>{let l=o.dataset.k;o.addEventListener("pointerdown",h=>{h.preventDefault(),te.press(l),o.classList.add("on")});let c=()=>{te.release(l),o.classList.remove("on")};o.addEventListener("pointerup",c),o.addEventListener("pointercancel",c),o.addEventListener("pointerleave",c),o.addEventListener("contextmenu",h=>h.preventDefault())})}function sr(i){let t=document.getElementById("touch");if(!t)return;t.dataset.mode=i;let e=document.getElementById("tb-e"),n=document.getElementById("tb-s");i==="lounge"?e.innerHTML="TALK<br>ENTER":(e.textContent="PASS",n.textContent="SHOOT")}var fe=null,hi=null,Ss=!1,Pn=null;function Na(){if(fe){fe.state==="suspended"&&fe.resume();return}try{let i=window.AudioContext||window.webkitAudioContext;fe=new i,hi=fe.createGain(),hi.gain.value=.5,hi.connect(fe.destination)}catch{fe=null}}function qh(){return Ss=!Ss,hi&&(hi.gain.value=Ss?0:.5),Ss}function xe(i,t,e,n="sine",s=.2,r){let a=fe.createOscillator(),o=fe.createGain();a.type=n,a.frequency.setValueAtTime(i,t),r&&a.frequency.exponentialRampToValueAtTime(r,t+e),o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(s,t+.012),o.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(o),o.connect(hi),a.start(t),a.stop(t+e+.02)}var Es=null;function Ln(i,t,e,n,s,r="bandpass"){if(!Es){Es=fe.createBuffer(1,fe.sampleRate*2,fe.sampleRate);let c=Es.getChannelData(0);for(let h=0;h<c.length;h++)c[h]=Math.random()*2-1}let a=fe.createBufferSource(),o=fe.createBiquadFilter(),l=fe.createGain();a.buffer=Es,a.loop=!0,o.type=r,o.frequency.value=e,o.Q.value=n,l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(s,i+Math.min(.08,t*.3)),l.gain.exponentialRampToValueAtTime(1e-4,i+t),a.connect(o),o.connect(l),l.connect(hi),a.start(i),a.stop(i+t+.05)}function Ut(i,t=1){if(!fe||Ss)return;let e=fe.currentTime+.01;switch(i){case"bounce":xe(150,e,.09,"sine",.25*t,60);break;case"swish":Ln(e,.28,3200,1.2,.25*t,"highpass");break;case"rim":xe(410,e,.18,"triangle",.22*t,380),xe(623,e,.12,"triangle",.1*t);break;case"buzzer":xe(196,e,.9,"sawtooth",.16*t),xe(247,e,.9,"square",.07*t);break;case"whistle":xe(2300,e,.3,"square",.06*t,2100);break;case"cheer":Ln(e,1.3,1100,.6,.3*t),Ln(e+.1,1,2400,.8,.12*t);break;case"ooh":Ln(e,.7,500,1.5,.25*t);break;case"cash":xe(1318,e,.12,"square",.08*t),xe(1760,e+.09,.3,"square",.08*t);break;case"click":xe(700,e,.05,"square",.06*t);break;case"pop":xe(520,e,.08,"sine",.14*t,900);break;case"steal":xe(300,e,.1,"square",.1*t,900);break;case"block":xe(120,e,.2,"sawtooth",.25*t,50),Ln(e,.15,800,1,.3*t);break;case"dunk":xe(90,e,.35,"sawtooth",.3*t,40),Ln(e,.3,300,.8,.4*t),xe(410,e+.03,.3,"triangle",.15*t);break;case"power":[392,523,659,784].forEach((n,s)=>xe(n,e+s*.07,.25,"sawtooth",.09*t));break;case"fire":Ln(e,.6,900,.5,.2*t),xe(220,e,.5,"sawtooth",.08*t,660);break;case"ice":[1568,1175,880].forEach((n,s)=>xe(n,e+s*.1,.3,"sine",.1*t));break;case"trombone":[311,293,277,261].forEach((n,s)=>xe(n,e+s*.42,s===3?1:.38,"sawtooth",.12*t,s===3?240:n*.97));break;case"laugh":{let n=380+Math.random()*260;for(let s=0;s<5;s++)xe(n*(1-s*.07),e+s*.11,.09,"triangle",.12*t,n*(.8-s*.07));break}case"talk":xe(260+Math.random()*200,e,.06,"triangle",.07*t),xe(300+Math.random()*200,e+.07,.06,"triangle",.07*t);break;case"win":[523,659,784,1047].forEach((n,s)=>xe(n,e+s*.13,.4,"square",.08*t));break}}function Oa(i){if(fe){if(i&&!Pn){Es||Ln(fe.currentTime,.01,500,1,1e-4);let t=fe.createBufferSource(),e=fe.createBiquadFilter();Pn=fe.createGain(),t.buffer=Es,t.loop=!0,e.type="bandpass",e.frequency.value=700,e.Q.value=.4,Pn.gain.value=.035,t.connect(e),e.connect(Pn),Pn.connect(hi),t.start(),Pn._src=t}else if(!i&&Pn){try{Pn._src.stop()}catch{}Pn.disconnect(),Pn=null}}}var Ua=null,Da=0,rr=0;function Fa(i){if(!fe)return;if(!i){clearInterval(Ua),Ua=null;return}if(Ua)return;Da=0,rr=fe.currentTime+.1;let t=60/104/2,e=[55,55,65.4,55,73.4,55,65.4,82.4];Ua=setInterval(()=>{if(Ss){rr=fe.currentTime+.1;return}for(;rr<fe.currentTime+.2;){let n=Da%16,s=rr;(n%4===0||n===10)&&xe(120,s,.16,"sine",.28,42),n%8===4&&Ln(s,.12,1800,.7,.16),n%2===1&&Ln(s,.03,7e3,1.5,.05,"highpass"),n%2===0&&xe(e[(Da>>1)%8],s,t*1.7,"triangle",.13),Da++,rr+=t}},60)}var se=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),hn=(i,t,e)=>i+(t-i)*e,Qt=(i=1,t)=>t===void 0?Math.random()*i:i+Math.random()*(t-i),Ie=i=>i[Math.floor(Math.random()*i.length)],ae=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Je=(i,t,e,n)=>hn(i,t,1-Math.exp(-e*n));function $h(i,t,e,n){let s=((t-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return i+s*(1-Math.exp(-e*n))}var pe={bg:"#1d1714",gold:"#f5b83d",home:"#2b6c99",away:"#e4472b",green:"#7ed08a",red:"#ff6a4d",ink:"#1d1714",paper:"#f5ecd8"};function un(i,t){let e=parseInt(i.slice(1),16),n=s=>se(Math.round((e>>s&255)*t),0,255);return"#"+[16,8,0].map(s=>n(s).toString(16).padStart(2,"0")).join("")}var Zh=["shooting","dunking","handles","speed","defense","clutch","trashTalk"],Jh={shooting:"SHT",dunking:"DNK",handles:"HND",speed:"SPD",defense:"DEF",clutch:"CLT",trashTalk:"TLK"},ka={lock:{name:"THE LOCK",desc:"Next shot is a guaranteed make"},sharp:{name:"SHARP MONEY",desc:"See where defenders are going. They contest half as well for 8 seconds"},juice:{name:"JUICE",desc:"Teammate gets +2 to every stat for 10 seconds"},chalk:{name:"CHALK EATER",desc:"Next bucket counts double if you are behind, +1 if not"},hedge:{name:"HEDGE",desc:"Swap in a fresh friend from the bench with full stamina"},tout:{name:"TOUT MODE",desc:"Loud trash talk freezes the nearest defender"}},Ts=i=>(i.abilityName||(ka[i.ability]||ka.lock).name).toUpperCase(),Ba=i=>(ka[i.ability]||ka.lock).desc;function ar(i){let t=0;for(let e of i){let n=e.stats;t+=n.shooting*1.2+n.dunking*.8+n.handles+n.speed+n.defense*1.1+n.clutch*.6+n.trashTalk*.3}return t}function Nl(i,t){try{if(t===void 0){let e=localStorage.getItem(i);return e?JSON.parse(e):null}localStorage.setItem(i,JSON.stringify(t))}catch{}return null}var H={ink:"#1d1714",paper:"#f5ecd8",paper2:"#e9dcc0",tomato:"#e4472b",mustard:"#f5b83d",teal:"#1f8f86",sea:"#2b6c99",leaf:"#5a9e52",wood:"#a8683a",woodDark:"#6e3f22",wall:"#efe0c2",wallLow:"#2f6b5e",concrete:"#cfc4b0",sky1:"#ffd9a0",sky2:"#f08a5d",sky3:"#6a5a8c"},Fe='Anton, "Arial Narrow", Impact, sans-serif',ui=null;function Kh(){return ui||(ui=new ya(Uint8Array.of(150,205,255),3,1,Rl),ui.minFilter=ui.magFilter=Ue,ui.generateMipmaps=!1,ui.needsUpdate=!0,ui)}var Ol=new Map;function Gt(i,t){if(!t){let e=String(i);if(Ol.has(e))return Ol.get(e);let n=new js({color:i,gradientMap:Kh()});return Ol.set(e,n),n}return new js(Object.assign({color:i,gradientMap:Kh()},t))}var Fl=new Map;function wg(i){if(Fl.has(i))return Fl.get(i);let t=new Sn({side:qe,uniforms:{t:{value:i},c:{value:new Ot(H.ink)}},vertexShader:"uniform float t; void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normalize(normal) * t, 1.0); }",fragmentShader:"uniform vec3 c; void main(){ gl_FragColor = vec4(c, 1.0); }"});return Fl.set(i,t),t}function Ag(i,t=.022){let e=new Ct(i.geometry,wg(t));return e.userData.outline=!0,i.add(e),i}function Bt(i,t,e=0){let n=new Ct(i,typeof t=="string"?Gt(t):t);return n.castShadow=!0,n.receiveShadow=!0,e&&Ag(n,e),n}function ke(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=new ps(e);return n.colorSpace=Ae,n.anisotropy=4,{c:e,x:e.getContext("2d"),t:n}}function za(i,{color:t=16773597,intensity:e=2.2,pos:n=[8,14,10],size:s=20,depth:r=50,map:a=2048}={}){let o=new Aa(t,e);o.position.set(...n),o.castShadow=!0;let l=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;o.shadow.mapSize.set(l?1024:a,l?1024:a);let c=o.shadow.camera;return c.left=-s,c.right=s,c.top=s,c.bottom=-s,c.near=1,c.far=r,o.shadow.bias=-6e-4,o.shadow.normalBias=.03,o.shadow.radius=3,i.add(o),i.add(o.target),o}function jh(i,t,e=70,n=60,s=-6){let r=ke(8,256),a=r.x.createLinearGradient(0,0,0,256);t.forEach(([l,c])=>a.addColorStop(l,c)),r.x.fillStyle=a,r.x.fillRect(0,0,8,256),r.t.needsUpdate=!0;let o=new Ct(new de(e,e,n,24,1,!0),new jt({map:r.t,side:qe,fog:!1,depthWrite:!1}));return o.position.y=s+n/2,o.renderOrder=-10,i.add(o),o}function wn(i,t,e,{fg:n=H.ink,bg:s=H.mustard,border:r=H.ink,sub:a=""}={}){let o=ke(512,Math.max(32,Math.round(512*e/t))),l=o.x,c=o.c.height;l.fillStyle=r,l.fillRect(0,0,512,c);let h=Math.max(5,c*.07);l.fillStyle=s,l.fillRect(h,h,512-2*h,c-2*h),l.fillStyle=n,l.textAlign="center",l.textBaseline="middle";let u=c*(a?.5:.66);for(l.font=`${u}px ${Fe}`;l.measureText(i).width>512-4*h-16&&u>10;)u-=3,l.font=`${u}px ${Fe}`;return l.fillText(i,256,c*(a?.4:.54)),a&&(l.font=`700 ${c*.17}px Figtree, system-ui, sans-serif`,l.fillText(a,256,c*.78)),o.t.needsUpdate=!0,new Ct(new Le(t,e),new jt({map:o.t}))}var tu=["neutral","happy","shock","sad"],As=H.ink;function eu(i,t,e,n,s,r){let a=s.look||{},o=a.hair||"#2a1c14",l=a.beard===!0?"full":a.beard,c=e+n*.5;l&&(i.save(),i.fillStyle=o,i.globalAlpha=l==="stubble"?.3:1,i.beginPath(),l==="full"||l==="stubble"?(i.rect(t-n*2,e+n*.2,n*4,n*3),i.clip(),i.beginPath(),i.ellipse(t,e+n*.55,n*1.6,n*1.2,0,0,7),i.ellipse(t,c+n*.02,n*.33,n*.19,0,0,7),i.fill("evenodd")):l==="goatee"?(i.ellipse(t,c+n*.12,n*.46,n*.5,0,0,7),i.ellipse(t,c+n*.02,n*.27,n*.15,0,0,7),i.fill("evenodd")):l==="mustache"&&(i.ellipse(t-n*.17,c-n*.2,n*.24,n*.1,-.25,0,7),i.ellipse(t+n*.17,c-n*.2,n*.24,n*.1,.25,0,7),i.fill()),i.restore()),i.fillStyle="rgba(228,71,43,.16)";for(let f of[-1,1])i.beginPath(),i.ellipse(t+f*n*.62,e+n*.3,n*.19,n*.13,0,0,7),i.fill();let h=e-n*.02,u=n*.37;i.lineCap="round",i.lineJoin="round";for(let f of[-1,1]){let d=t+f*u;if(i.fillStyle=As,i.strokeStyle=As,r==="happy")i.lineWidth=n*.085,i.beginPath(),i.arc(d,h+n*.1,n*.15,Math.PI*1.12,Math.PI*1.88),i.stroke();else if(r==="shock")i.fillStyle="#fff",i.beginPath(),i.ellipse(d,h,n*.17,n*.21,0,0,7),i.fill(),i.lineWidth=n*.05,i.stroke(),i.fillStyle=As,i.beginPath(),i.arc(d,h,n*.055,0,7),i.fill();else{let x=r==="sad"?n*.05:0;i.beginPath(),i.ellipse(d,h+x,n*.082,n*(a.eyes==="sleepy"?.075:.125),0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(d+n*.03,h+x-n*.05,n*.028,0,7),i.fill()}i.strokeStyle=un(o,.55),i.lineWidth=n*(a.brows==="thick"?.105:.075),i.beginPath();let g=h-n*(r==="shock"?.4:.27);r==="sad"?(i.moveTo(d-f*n*.17,g-n*.07),i.lineTo(d+f*n*.15,g+n*.03)):r==="happy"?(i.moveTo(d-n*.15,g-n*.02),i.quadraticCurveTo(d,g-n*.09,d+n*.15,g-n*.02)):(i.moveTo(d-f*n*.16,g+n*.035),i.lineTo(d+f*n*.16,g-n*.03)),i.stroke()}if(a.glasses){i.strokeStyle=As,i.lineWidth=n*.06,i.fillStyle="rgba(255,255,255,.22)";for(let f of[-1,1])i.beginPath(),i.arc(t+f*u,h,n*.245,0,7),i.fill(),i.stroke();i.beginPath(),i.moveTo(t-n*.125,h-n*.03),i.lineTo(t+n*.125,h-n*.03),i.stroke()}i.strokeStyle=As,i.lineWidth=n*.065,r==="happy"?(i.fillStyle="#5a1418",i.beginPath(),i.moveTo(t-n*.3,c-n*.1),i.quadraticCurveTo(t,c+n*.42,t+n*.3,c-n*.1),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.beginPath(),i.moveTo(t-n*.24,c-n*.075),i.lineTo(t+n*.24,c-n*.075),i.lineTo(t+n*.2,c),i.lineTo(t-n*.2,c),i.fill()):r==="shock"?(i.fillStyle="#5a1418",i.beginPath(),i.ellipse(t,c+n*.03,n*.13,n*.19,0,0,7),i.fill(),i.stroke()):r==="sad"?(i.beginPath(),i.arc(t,c+n*.27,n*.24,Math.PI*1.2,Math.PI*1.8),i.stroke()):(i.beginPath(),i.moveTo(t-n*.2,c-n*.02),i.quadraticCurveTo(t+n*.02,c+n*.13,t+n*.23,c-n*.07),i.stroke())}function nu(i,t,e,n){let s=e.look||{},r=t/2,a=t/2,o=t*.4;i.clearRect(0,0,t,t),i.fillStyle=s.skin||"#e0b090",i.fillRect(0,0,t,t);let l=s.usePhoto&&e._img&&(e._img[n]||e._img.neutral);if(l){let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),u=Math.max(t/l.width,t/l.height)*1.06;h.drawImage(l,r-l.width*u/2,a-l.height*u/2,l.width*u,l.height*u),h.globalCompositeOperation="destination-in";let f=h.createRadialGradient(r,a,t*.34,r,a,t*.49);f.addColorStop(0,"rgba(0,0,0,1)"),f.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=f,h.fillRect(0,0,t,t),i.drawImage(c,0,0);return}eu(i,r,a,o,e,n)}function Rg(i,t,e,n){let s=e.look||{},r=s.skin||"#e0b090",a=s.hair||"#2a1c14",o=s.hairStyle||"short",l=t/2,c=t*.52,h=t*.27,u=t*.29,f=Math.max(2,t*.026);i.clearRect(0,0,t,t),i.save(),i.beginPath(),i.arc(t/2,t/2,t/2,0,7),i.clip(),i.fillStyle=e._bg||H.mustard,i.fillRect(0,0,t,t),i.lineWidth=f,i.strokeStyle=As,i.lineJoin="round",i.fillStyle=e._jersey||H.sea,i.beginPath(),i.ellipse(l,t*1.03,t*.44,t*.2,0,0,7),i.fill(),i.stroke(),i.fillStyle=un(r,.9),i.fillRect(l-t*.075,c+u*.7,t*.15,t*.16),(o==="afro"||o==="curly")&&(i.fillStyle=a,i.beginPath(),i.arc(l,c-u*.28,h*(o==="afro"?1.42:1.22),0,7),i.fill(),i.stroke()),i.fillStyle=r;for(let g of[-1,1])i.beginPath(),i.ellipse(l+g*h*.98,c+u*.05,h*.16,u*.2,0,0,7),i.fill(),i.stroke();i.beginPath(),i.ellipse(l,c,h,u,0,0,7),i.fill(),i.save(),i.beginPath(),i.ellipse(l,c,h,u,0,0,7),i.clip(),eu(i,l,c+u*.08,h*.98,e,n),i.fillStyle=a;let d=(g,x=1)=>{i.globalAlpha=x,i.beginPath(),i.moveTo(l-h*1.2,c-u*g),i.quadraticCurveTo(l-h*.3,c-u*(g+.32),l+h*.1,c-u*(g+.1)),i.quadraticCurveTo(l+h*.7,c-u*(g+.2),l+h*1.2,c-u*(g-.05)),i.lineTo(l+h*1.2,c-u*1.3),i.lineTo(l-h*1.2,c-u*1.3),i.fill(),i.globalAlpha=1};o==="short"?d(.42):o==="buzz"?d(.5,.45):o==="flat"?i.fillRect(l-h*1.2,c-u*1.3,h*2.4,u*.82):o==="afro"||o==="curly"?(i.beginPath(),i.ellipse(l,c-u*.95,h*1.15,u*.5,0,0,7),i.fill()):o==="cap"&&(i.fillStyle=s.capColor||H.tomato,i.fillRect(l-h*1.2,c-u*1.3,h*2.4,u*.9)),s.headband&&(i.fillStyle="#fff",i.fillRect(l-h*1.2,c-u*.58,h*2.4,u*.2)),i.restore(),i.beginPath(),i.ellipse(l,c,h,u,0,0,7),i.stroke(),o==="flat"&&(i.fillStyle=a,i.beginPath(),i.roundRect(l-h*.86,c-u*1.22,h*1.72,u*.5,t*.03),i.fill(),i.stroke()),o==="cap"&&!s.noBrim&&(i.fillStyle=s.capColor||H.tomato,i.beginPath(),i.roundRect(l-h*.2,c-u*.62,h*1.55,u*.2,t*.03),i.fill(),i.stroke()),i.lineWidth=f*.8,i.strokeStyle=un(r,.6),i.beginPath(),i.arc(l,c+u*.26,h*.09,.15,Math.PI-.15),i.stroke(),i.restore()}function Cg(i){if(!i._faces){i._faces={},i._tex={};for(let t of tu){let e=ke(256,256);nu(e.x,256,i,t),i._faces[t]=e.c,i._tex[t]=e.t}}}function Qh(i){if(i._faces)for(let t of tu)nu(i._faces[t].getContext("2d"),256,i,t),i._tex[t].needsUpdate=!0}function iu(i){if(!(i.look&&i.look.usePhoto))return Promise.resolve(!1);let t=i.photo||`faces/${i.id}.png`;return new Promise(e=>{let n=new Image;n.onload=()=>{i._img={neutral:n},Qh(i),e(!0);for(let s of["happy","shock","sad"]){let r=i.photos&&i.photos[s]||t.replace(/(\.\w+)$/,`_${s}$1`),a=new Image;a.onload=()=>{i._img[s]=a,Qh(i)},a.onerror=()=>{},a.src=r}},n.onerror=()=>e(!1),n.src=t})}function or(i,t=96,e="neutral"){let n=document.createElement("canvas");return n.width=n.height=t*2,n.style.width=n.style.height=t+"px",n.dataset.face=i.id,n.dataset.ex=e,n.className="avatar",Rg(n.getContext("2d"),t*2,i,e),n}var Jt={},Ha=(i,t,e=10)=>{let n=new Ta(i,t,4,e);return n.translate(0,-t/2,0),n};function kl(){if(Jt.head)return Jt;Jt.head=new Se(.4,32,22),Jt.face=new Se(.4035,32,22,Math.PI/2-1.3,2.6,.38,2.25),Jt.ear=new Se(.09,12,10),Jt.nose=new Se(.058,12,10),Jt.neck=new de(.085,.1,.16,12),Jt.thigh=Ha(.092,.26),Jt.shin=Ha(.074,.24),Jt.uarm=Ha(.066,.26),Jt.farm=Ha(.058,.24),Jt.sleeve=new de(.118,.13,.25,14),Jt.sleeve.translate(0,-.11,0),Jt.sock=new de(.08,.078,.11,12),Jt.hand=new Se(.082,12,10),Jt.shoe=new Se(.1,14,10),Jt.shoe.scale(.98,.64,1.8),Jt.sole=new de(.1,.1,.035,14),Jt.sole.scale(.98,1,1.8),Jt.pelvis=new Se(.27,18,12),Jt.pelvis.scale(1,.62,.74);let i=[[.19,0],[.262,.05],[.288,.26],[.292,.42],[.252,.52],[.14,.59],[.001,.605]].map(([t,e])=>new pt(t,e));return Jt.torso=new Ks(i,22,Math.PI/2,Math.PI*2),Jt.torso.scale(1,1,.7),Jt.torso.computeVertexNormals(),Jt.shadow=new En(.42,20),Jt.shadow.rotateX(-Math.PI/2),Jt.hairTop=new Se(.425,28,14,0,Math.PI*2,0,1.12),Jt.hairBack=new Se(.418,22,14,Math.PI+.3,Math.PI-.6,.35,1.5),Jt.quiff=new Se(.17,14,10),Jt.quiff.scale(1.7,.7,1.05),Jt.flat=new de(.34,.39,.26,22),Jt.afro=new Se(.5,22,16),Jt.curl=new Se(.2,12,10),Jt.brim=new de(.31,.31,.035,18,1,!1,-Math.PI/2,Math.PI),Jt.band=new _s(.405,.04,8,28),Jt.ring=new ci(.56,.7,36),Jt.ring.rotateX(-Math.PI/2),Jt}var Pg=new jt({color:0,transparent:!0,opacity:.16,depthWrite:!1}),Bl={};function Lg(i,t,e="#ffffff"){let n=i+"|"+t+"|"+e;if(Bl[n])return Bl[n];let s=ke(512,256),r=s.x;r.fillStyle=i,r.fillRect(0,0,512,256);for(let a of[0,256,512])r.fillStyle=un(i,.62),r.fillRect(a-34,0,68,256),r.fillStyle=e,r.fillRect(a-40,0,7,256),r.fillRect(a+33,0,7,256);if(r.fillStyle=e,r.fillRect(0,0,512,16),r.fillRect(0,236,512,6),t!=null&&t!==""){r.textAlign="center",r.textBaseline="middle",r.lineJoin="round";let a=(o,l,c)=>{r.save(),r.translate(o,l),r.scale(.7,1),r.font=`${c}px ${Fe}`,r.lineWidth=c*.14,r.strokeStyle=un(i,.45),r.strokeText(String(t),0,0),r.fillStyle=e,r.fillText(String(t),0,0),r.restore()};a(384,128,104),a(128,122,132)}return s.t.needsUpdate=!0,Bl[n]=Gt("#ffffff",{map:s.t})}function lr(i,t=H.ink,e=H.paper){let n=document.createElement("canvas"),s=n.getContext("2d"),r=`34px ${Fe}`;s.font=r;let a=Math.ceil(s.measureText(i).width)+40;n.width=a,n.height=64,s.fillStyle=H.ink,s.beginPath(),s.roundRect(0,0,a,64,14),s.fill(),s.fillStyle=e,s.beginPath(),s.roundRect(5,5,a-10,54,10),s.fill(),s.font=r,s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,a/2,35);let o=new ps(n);o.colorSpace=Ae;let l=new xa(new $s({map:o,depthTest:!1,transparent:!0}));return l.scale.set(a/64*.36,.36,1),l.renderOrder=10,l}var An=.02,qn=class{constructor(t,e={}){Cg(t),this.def=t;let n=kl(),s=t.look||{},r=e.jersey||H.sea,a=s.skin||"#e0b090",o=e.trim||"#ffffff",l=Gt(a),c=Gt(un(r,.72)),h=Gt(e.shoe||H.paper),u=Gt(H.ink),f=Gt("#ffffff");this.group=new De,this.shadow=new Ct(n.shadow,Pg),this.shadow.position.y=.025,this.group.add(this.shadow),this.tilt=new De,this.group.add(this.tilt),this.body=new De,this.tilt.add(this.body);let d=s.height||1,g=s.build||1;this.ht=d,this.build=g,this.body.scale.set(d*g,d,d*g),this.legs=[-1,1].map(C=>{let T=new De;T.position.set(C*.125,.64,0),T.add(Bt(n.thigh,l,An)),T.add(Bt(n.sleeve,c,An));let A=new De;A.position.y=-.28,T.add(A),A.add(Bt(n.shin,l,An));let D=Bt(n.sock,f);D.position.y=-.2,A.add(D);let v=Bt(n.shoe,h,An);v.position.set(0,-.29,.065),A.add(v);let S=Bt(n.sole,u);return S.position.set(0,-.343,.065),A.add(S),T.knee=A,this.body.add(T),T});let x=Bt(n.pelvis,c,An);x.position.y=.69,this.body.add(x),this.upper=new De,this.upper.position.y=.74,this.body.add(this.upper),this.torso=Bt(n.torso,Lg(r,e.number,o),An),this.upper.add(this.torso),this.arms=[-1,1].map(C=>{let T=new De;T.position.set(C*.305,.49,0),T.add(Bt(n.uarm,l,An));let A=new De;A.position.y=-.27,T.add(A),A.add(Bt(n.farm,l,An));let D=Bt(n.hand,l,An);return D.position.y=-.3,A.add(D),T.elbow=A,T.side=C,this.upper.add(T),T}),this.neck=new De,this.neck.position.y=.56,this.upper.add(this.neck);let p=Bt(n.neck,Gt(un(a,.88)));p.position.y=.03,this.neck.add(p),this.head=new De,this.head.position.y=.36,this.neck.add(this.head);let m=(e.headScale||1)/Math.pow(d,.7);this.neck.scale.set(m/g,m,m/g);let _=Bt(n.head,l,.024);_.scale.set(1,.95,.97),this.head.add(_),this.faceMat=Gt("#ffffff",{map:t._tex.neutral});let y=new Ct(n.face,this.faceMat);y.rotation.x=-.2,y.scale.set(1,.95,.97),this.head.add(y);for(let C of[-1,1]){let T=Bt(n.ear,l,An);T.position.set(C*.385,-.03,0),T.scale.set(.55,1,.8),this.head.add(T)}let w=Bt(n.nose,Gt(un(a,.9)));if(w.position.set(0,-.085,.385),w.scale.set(1,.85,.9),this.head.add(w),this.addHair(s),s.headband){let C=Bt(n.band,"#ffffff");C.rotation.x=Math.PI/2-.12,C.position.y=.15,this.head.add(C)}this.ring=null,this.t=Math.random()*10,this.phase=Math.random()*6,this.seed=Math.random()*6,this.face=0,this.faceTarget=0,this.armsUp=0,this.armsUpT=0,this.fall=0,this.fallT=0,this.laugh=0,this.y=0,this.wave=0,this.guard=0,this.guardAmt=0,this.drib=-1,this.dribAmt=0,this.air=0,this.squash=0,this.prevY=0,this.lean=0,this.expr="neutral",this.exprT=0,this.moveAmt=0}addHair(t){let e=kl(),n=t.hairStyle||"short",s=Gt(t.hair||"#2a1c14"),r=this.head,a=(o,l,c=An)=>{let h=Bt(o,l,c);return r.add(h),h};if(n==="short"){a(e.hairTop,s).rotation.x=-.42,a(e.hairBack,s);let o=a(e.quiff,s);o.position.set(.03,.33,.17),o.rotation.z=-.08}else if(n==="buzz"){let o=Gt(un(t.hair||"#2a1c14",1.5));a(e.hairTop,o,0).rotation.x=-.45,a(e.hairBack,o,0)}else if(n==="flat"){let o=a(e.flat,s);o.position.y=.36,a(e.hairTop,s).rotation.x=-.5,a(e.hairBack,s)}else if(n==="afro")a(e.afro,s,.026).position.set(0,.17,-.1);else if(n==="curly"){a(e.hairTop,s).rotation.x=-.4,a(e.hairBack,s);for(let o=0;o<7;o++){let l=o/7*Math.PI*2;a(e.curl,s).position.set(Math.sin(l)*.24,.33+o%2*.04,Math.cos(l)*.22-.02)}a(e.curl,s).position.set(0,.42,0)}else if(n==="cap"){let o=Gt(t.capColor||H.tomato),l=a(e.hairTop,o);if(l.rotation.x=-.3,l.scale.setScalar(1.035),!t.noBrim){let c=a(e.brim,o);c.position.set(0,.21,.3),c.rotation.set(.12,Math.PI/2,0)}a(e.hairBack,s)}}setRing(t){if(!t){this.ring&&(this.ring.visible=!1);return}this.ring||(this.ring=new Ct(kl().ring,new jt({color:t,transparent:!0,opacity:.95,depthWrite:!1})),this.ring.position.y=.035,this.group.add(this.ring)),this.ring.material.color.set(t),this.ring.visible=!0}setExpr(t,e=1.5){this.expr=t,this.exprT=e,this.faceMat.map=this.def._tex[t]||this.def._tex.neutral}update(t,e=0){this.t+=t;let n=se(e/4.6,0,1.4),s=this.moveAmt=Je(this.moveAmt,n,10,t);this.phase+=t*(5.5+e*1.8)*(n>.05?1:0),this.exprT>0&&(this.exprT-=t,this.exprT<=0&&this.setExpr("neutral",0)),this.face=$h(this.face,this.faceTarget,12,t),this.group.rotation.y=this.face;let r=this.armsUp=Je(this.armsUp,this.armsUpT,16,t);this.fall=Je(this.fall,this.fallT,10,t);let a=this.guardAmt=Je(this.guardAmt,this.guard*(1-r),9,t),o=this.dribAmt=Je(this.dribAmt,this.drib>=0&&r<.3?1:0,14,t),l=this.air=Je(this.air,this.y>.06?1:0,18,t);this.prevY>.08&&this.y<=.02&&(this.squash=1),this.prevY=this.y,this.squash=Je(this.squash,0,9,t);let c=Math.sin(this.phase),h=Math.cos(this.phase),u=this.t,f=this.laugh;this.legs.forEach((_,y)=>{let w=y?-1:1;_.rotation.x=w*c*.95*s-a*.55-l*(y?.75:.1)*(1-a),_.rotation.z=(y?1:-1)*a*.3,_.knee.rotation.x=Math.max(0,w*h)*1.35*s+.12*s+a*1+l*(y?1.2:.35)}),this.arms.forEach((_,y)=>{let C=(y?1:-1)*c*.85*s,T=_.side*(.16+a*.95+f*.25),A=-(.3+.85*s);if(y===1&&o>0){let D=Math.max(0,this.drib);C=ws(C,-.55-D*.35,o),A=ws(A,-.35-D*.75,o),T=ws(T,_.side*.3,o)}C=ws(C,-2.55,r),A=ws(A,-.35+Math.sin(u*20)*.03,r),T=ws(T,_.side*.1,r),y===0&&this.wave&&(C=-2.7,T=-.4+Math.sin(u*9)*.35,A=-.3),a>.05&&(C+=Math.sin(u*7+y*2)*.12*a),_.rotation.x=C,_.rotation.z=T,_.elbow.rotation.x=A});let d=this.lean=Je(this.lean,s*.24+a*.28,8,t);this.upper.rotation.x=d-f*.12-r*.06,this.upper.rotation.z=Math.sin(u*.9+this.seed)*.025*(1-s)+c*.05*s,this.upper.scale.y=1+Math.sin(u*2.1+this.seed)*.012;let g=Math.abs(c)*.07*s+f*Math.abs(Math.sin(u*14))*.06,x=this.squash*.16,p=l*.05;this.body.scale.set(this.ht*this.build*(1+x*.6-p*.5),this.ht*(1-x+p),this.ht*this.build*(1+x*.6-p*.5)),this.body.position.y=this.y+g-a*.13*this.ht,this.tilt.rotation.x=-this.fall*1.45,this.tilt.position.y=this.fall*.28;let m=.4+s*1.6;this.head.rotation.z=Math.sin(u*5.3+this.phase)*.05*m+f*Math.sin(u*24)*.12,this.head.rotation.x=-d*.75+Math.sin(u*3.9+this.seed)*.035*m-f*.28+this.fall*.3-r*.12,this.shadow.scale.setScalar(1-se(this.y,0,1.5)*.35),this.ring&&this.ring.visible&&(this.ring.rotation.y+=t*2)}},ws=(i,t,e)=>i+(t-i)*e;var Re={w:innerWidth,h:innerHeight},Oi=()=>document.getElementById("ui");function Ft(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n}var oe=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),di=null,su=null;function Ee(i,t="",e="var(--gold)",n=1.6){di||(di=Ft("div","banner"),Oi().appendChild(di)),di.innerHTML=`<div class="b-title" style="color:${e}">${oe(i)}</div>${t?`<div class="b-sub">${oe(t)}</div>`:""}`,di.classList.remove("show"),di.offsetWidth,di.classList.add("show"),clearTimeout(su),su=setTimeout(()=>di.classList.remove("show"),n*1e3)}var Di=null,ru=null;function $n(i,t=3.5){if(Di||(Di=Ft("div","caption"),Oi().appendChild(Di)),!i){Di.classList.remove("show");return}Di.textContent=i,Di.classList.add("show"),clearTimeout(ru),t&&(ru=setTimeout(()=>Di.classList.remove("show"),t*1e3))}var fi=null;function ur(i){if(fi||(fi=Ft("div","prompt"),Oi().appendChild(fi)),!i){fi.classList.remove("show");return}fi.dataset.t!==i&&(fi.dataset.t=i,fi.innerHTML=i),fi.classList.add("show")}var Ni=[],cr=new P,_n={say(i,t,e=2.6,n=""){for(let a of Ni)a.anchor===i&&(a.until=0);let s=Ft("div","bubble "+n);s.textContent=t,Oi().appendChild(s);let r={el:s,anchor:i,until:performance.now()+e*1e3};return Ni.push(r),r},update(i){let t=performance.now(),e=Re.w,n=Re.h;for(let s=Ni.length-1;s>=0;s--){let r=Ni[s];if(t>r.until){r.el.remove(),Ni.splice(s,1);continue}let a=r.anchor();if(cr.set(a.x,a.y,a.z).project(i),cr.z>1||Math.abs(cr.x)>1.15){r.el.style.opacity=0;continue}r.el.style.opacity=Math.min(1,(r.until-t)/250),r.el.style.transform=`translate(-50%,-100%) translate(${(cr.x*.5+.5)*e}px,${(-cr.y*.5+.5)*n}px)`}},clear(){for(let i of Ni)i.el.remove();Ni.length=0}},hr=null;function Rs(i){return pi(),hr=i,i.classList.add("screen"),Oi().appendChild(i),i}function pi(){hr&&(hr.remove(),hr=null)}var Ga=()=>!!hr;function In(i,t,e){let n=Ft("button","btn "+(t||""),i);return n.type="button",n.addEventListener("click",s=>{Ut("click"),e(s)}),n}function Cs(i,t,e){let n=Ft("div","modal-wrap"),s=Ft("div","modal");s.appendChild(Ft("h2","",oe(i))),typeof t=="string"?s.appendChild(Ft("div","modal-body",t)):(t.classList.add("modal-body"),s.appendChild(t));let r=()=>{pi(),e&&e()};return s.appendChild(In("Close <kbd>Esc</kbd>","ghost",r)),n.appendChild(s),n._close=r,n.addEventListener("click",a=>{a.target===n&&r()}),Rs(n)}var Ps={tv:[[-2.6,-5.4,Math.PI],[1.6,-5.7,Math.PI],[4.2,-5.2,Math.PI]],bar:[[-9.3,.2,-Math.PI/2],[-9.3,2.6,-Math.PI/2],[-9.3,4.4,-Math.PI/2]],pool:[[3.3,1.9,Math.PI/2],[7.9,1.9,-Math.PI/2],[5.6,3.7,Math.PI]],window:[[11.2,-2,Math.PI/2],[11.2,-.4,Math.PI/2]],pacer:[[-4,5.6,0],[-6,3.6,0]],table:[[-3,3.3,Math.PI],[-1.7,1.9,-Math.PI/2],[.2,3.2,0],[1.4,4.6,-Math.PI/2]],trophy:[[11,3.9,Math.PI/2],[10.4,5.6,Math.PI/2]]},Ig=[[-11.4,-2.6,-10.1,5.2],[4,1,7.2,2.8],[-3.6,1.4,-2.4,2.6],[-.6,3.9,.6,5.1]],dr=class{constructor(t){this.G=t;let e=this.scene=new fs,n=new Date().getHours();this.night=n<6||t.cheats.night;let s=this.night;e.background=new Ot(s?"#120f16":"#2b201b"),this.camera=new Ge(46,Re.w/Re.h,.1,90),e.add(new ys(s?8423616:16773852,s?2105388:12097656,s?.75:1.45)),za(e,{color:s?10135807:16771528,intensity:s?.9:1.75,pos:[5,15,9],size:20,depth:50});let r=R=>Gt(R),a=(R,lt,L,q,G,et,nt,b=0)=>{let M=Bt(new tn(R,lt,L),q,b);return M.position.set(G,et,nt),e.add(M),M},o=(R,lt,L,q,G,et,nt,b=0,M=14)=>{let O=Bt(new de(R,lt,L,M),q,b);return O.position.set(G,et,nt),e.add(O),O},l=ke(256,256);for(let R=0;R<2;R++)for(let lt=0;lt<2;lt++)l.x.fillStyle=(R+lt)%2?"#ead9b8":"#dcc7a0",l.x.fillRect(R*128,lt*128,128,128);l.x.fillStyle="#c9623f";for(let[R,lt]of[[0,0],[128,0],[0,128],[128,128],[256,0],[0,256],[256,256],[256,128],[128,256]])l.x.save(),l.x.translate(R,lt),l.x.rotate(Math.PI/4),l.x.fillRect(-13,-13,26,26),l.x.restore();l.x.strokeStyle="rgba(90,60,40,.28)",l.x.lineWidth=2,l.x.strokeRect(0,0,128,128),l.x.strokeRect(128,128,128,128),l.x.strokeRect(128,0,128,128),l.x.strokeRect(0,128,128,128),l.t.wrapS=l.t.wrapT=Pi,l.t.repeat.set(21,14),l.t.needsUpdate=!0;let c=new Ct(new Le(42,28),Gt("#ffffff",{map:l.t}));c.rotation.x=-Math.PI/2,c.position.set(-2,0,5.5),c.receiveShadow=!0,e.add(c);let h=new Ct(new En(2.6,40),Gt(H.tomato));h.rotation.x=-Math.PI/2,h.position.set(0,.012,5.6),h.receiveShadow=!0,e.add(h);let u=new Ct(new ci(2.05,2.25,40),Gt(H.paper));u.rotation.x=-Math.PI/2,u.position.set(0,.018,5.6),e.add(u);let f=r(H.wall),d=r(H.wallLow),g=r(H.wood),x=r(H.woodDark),p=r("#231a1c"),m=(R,lt,L,q)=>{a(R,7.4,lt,f,L,3.7,q),a(R+(lt>R?.12:0),1.25,lt+(R>lt?.12:0),d,L,.625,q),a(R+(lt>R?.2:0),.1,lt+(R>lt?.2:0),x,L,1.3,q)};m(26.6,.3,0,-8.15),m(.3,16.3,13.15,0),m(.3,9.8,-13.15,3.1),m(.3,1.2,-13.15,-7.4),a(.3,4.6,1.6,f,-13.15,5.1,-6),a(4,7.4,.3,p,-15,3.7,-8.15),a(.3,7.4,4.6,p,-17.15,3.7,-5.9);let _=new Ct(new Le(1.6,2.8),Gt("#7a1626",{transparent:!0,opacity:.95,side:Ye}));_.rotation.y=Math.PI/2,_.position.set(-13,1.4,-5.8),e.add(_);let y=wn("STAFF ONLY",1.4,.34,{bg:H.tomato,fg:H.paper});y.rotation.y=Math.PI/2,y.position.set(-12.95,3.05,-5.8),e.add(y);let w=new De;w.add(Bt(new tn(.5,.28,.12),"#2b2b2b",.015));for(let R of[-1,1]){let lt=Bt(new de(.07,.09,.3,8),"#2b2b2b",.015);lt.position.set(R*.22,-.18,0),w.add(lt);let L=Bt(new Se(.04,8,6),R<0?H.tomato:H.teal);L.position.set(R*.12,.03,.08),w.add(L)}w.position.set(-16.92,1.7,-5.9),w.rotation.set(.4,Math.PI/2,.5),e.add(w);for(let R=0;R<5;R++){let lt=new Ct(new Le(.04,Qt(.4,.9)),new jt({color:0}));lt.rotation.y=Math.PI/2,lt.rotation.x=R*1.25,lt.position.set(-16.98,1.7,-5.9),e.add(lt)}let C=wn("RAGE QUIT HALL OF FAME",2.6,.44,{bg:"#231a1c",fg:H.tomato,border:H.tomato});C.rotation.y=Math.PI/2,C.position.set(-16.97,2.9,-5.9),e.add(C);let T=new er(16731486,6,7);T.position.set(-15,3,-5.9),e.add(T),a(1.1,1.1,7.6,g,-10.75,.55,1.3,.025),a(1.5,.12,7.9,r(H.paper),-10.75,1.16,1.3,.025);for(let R=0;R<6;R++)a(.04,.9,.5,x,-10.18,.55,-1.85+R*1.26);a(.4,2.6,6.2,x,-12.8,2.1,1.3,.025);for(let R of[1.55,2.3])a(.5,.07,5.8,r(H.paper2),-12.6,R,1.3);let A=[H.leaf,H.mustard,H.tomato,H.teal,"#8a5fa8","#d98a3a",H.sea];for(let R=0;R<16;R++){let lt=1.59+R%2*.75,L=-1.35+R*.36;o(.075,.085,.32,r(A[R%7]),-12.5,lt+.16,L,.012,8),o(.03,.04,.14,r(A[R%7]),-12.5,lt+.39,L,0,6)}a(.5,.5,.7,r("#c9ced0"),-10.85,1.47,-1.6,.02),a(.52,.12,.72,r(H.tomato),-10.85,1.77,-1.6,.02),o(.07,.05,.1,r(H.paper),-10.5,1.27,-1.5,.01,10);for(let R of[.2,2.6,4.4])o(.27,.27,.1,r(H.tomato),-9.75,.72,R+.75,.02),o(.04,.04,.68,r("#59666c"),-9.75,.34,R+.75,0,6),o(.2,.22,.04,r("#59666c"),-9.75,.02,R+.75,0,10);let D=wn("THE VIG",2.6,.75,{bg:H.tomato,fg:H.paper,sub:"KAFENEIO \xB7 EST. LAST WEEK"});D.rotation.y=Math.PI/2,D.position.set(-12.58,4.1,1.3),e.add(D),this.tipBoard=ke(512,256),a(.08,1.3,2.4,x,-12.98,2.6,5.9,.02);let v=new Ct(new Le(2.2,1.1),new jt({map:this.tipBoard.t}));v.rotation.y=Math.PI/2,v.position.set(-12.92,2.6,5.9),e.add(v),a(3.4,.24,2,g,5.6,.86,1.9,.025),a(3,.06,1.6,r("#2f8f5b"),5.6,.99,1.9);for(let[R,lt]of[[4.2,1.2],[7,1.2],[4.2,2.6],[7,2.6]])a(.18,.76,.18,x,R,.38,lt,.02);[H.paper,H.mustard,H.tomato,H.ink,H.teal].forEach((R,lt)=>{let L=Bt(new Se(.075,12,10),R,.01);L.position.set(4.8+lt*.42,1.095,1.6+lt%3*.25),e.add(L)});let S=Bt(new de(.018,.028,2,6),H.paper2,.01);S.rotation.set(0,.5,Math.PI/2),S.position.set(5.9,1.06,2.35),e.add(S);for(let[R,lt]of[[-3,2],[0,4.5]])o(.62,.62,.07,r(H.paper),R,1.1,lt,.025,22),o(.07,.07,1.06,r("#59666c"),R,.55,lt,0,8),o(.34,.38,.05,r("#59666c"),R,.025,lt,0,14),o(.07,.055,.09,r(H.paper2),R+.3,1.18,lt-.15,.01,10),o(.07,.055,.09,r(H.paper2),R-.28,1.18,lt+.2,.01,10);let N=ke(128,96);N.x.fillStyle="#7a4a28",N.x.fillRect(0,0,128,96),N.x.fillStyle="#c99a5a",N.x.fillRect(6,6,54,84),N.x.fillRect(68,6,54,84);for(let R=0;R<12;R++){let lt=6+R%6*9+(R%6>2,0)+(R>=6?62:0);N.x.fillStyle=R%2?H.tomato:H.ink,N.x.beginPath(),N.x.moveTo(lt,6),N.x.lineTo(lt+9,6),N.x.lineTo(lt+4.5,40),N.x.fill(),N.x.beginPath(),N.x.moveTo(lt,90),N.x.lineTo(lt+9,90),N.x.lineTo(lt+4.5,56),N.x.fill()}N.t.needsUpdate=!0;let Y=new Ct(new tn(.56,.04,.42),[g,g,Gt("#ffffff",{map:N.t}),g,g,g]);Y.position.set(0,1.16,4.5),Y.rotation.y=.3,Y.castShadow=!0,e.add(Y);for(let[R,lt,L]of[[5.6,1.9,H.leaf],[-3,2,H.mustard],[0,4.5,H.mustard],[-10.7,0,H.tomato],[-10.7,2.8,H.tomato]]){let q=new Ct(new de(.012,.012,3,4),new jt({color:H.ink}));q.position.set(R,5.1,lt),e.add(q);let G=Bt(new ms(.42,.34,18,1,!0),Gt(L,{side:Ye}),.02);G.position.set(R,3.6,lt),e.add(G);let et=new Ct(new Se(.11,10,8),new jt({color:"#fff3c4"}));if(et.position.set(R,3.47,lt),e.add(et),s){let nt=new er(16767392,5,7);nt.position.set(R,3.3,lt),e.add(nt)}}this.tvs=[],[["board",-4.6],["game",0],["you",4.6]].forEach(([R,lt])=>{let L=ke(640,360);L.kind=R,a(4.4,2.6,.16,r(H.ink),lt,2.95,-7.93,.03);let q=new Ct(new Le(4.1,2.3),new jt({map:L.t}));q.position.set(lt,2.95,-7.84),e.add(q),this.tvs.push(L)}),this.tvT=0,this.fake={a:14,b:12,tick:0};let ot=new Pe;ot.setAttribute("position",new $e(new Float32Array([-.2,0,0,.2,0,0,0,-.42,0]),3)),ot.computeVertexNormals();let I=[H.tomato,H.mustard,H.teal,H.paper,H.sea];for(let R=0;R<44;R++){let lt=R/43,L=new Ct(ot,new jt({color:I[R%5],side:Ye}));L.position.set(-12.4+lt*20.4,4.95-Math.abs(Math.sin(lt*Math.PI*3))*.28,-7.9),e.add(L)}this.frameDef=Ie(t.roster.players.filter(R=>R.worstPick));let F=ke(256,340);F.x.fillStyle=H.paper,F.x.fillRect(0,0,256,340),F.x.fillStyle=H.ink,F.x.font=`30px ${Fe}`,F.x.textAlign="center",F.x.fillText("BET SLIP",128,44),F.x.font="700 13px monospace",F.x.fillText("#000-WORST-EVER",128,66);for(let R=0;R<9;R++)F.x.fillStyle="rgba(29,23,20,.4)",F.x.fillRect(28,88+R*20,200-R*37%70,7);F.x.strokeStyle=H.tomato,F.x.lineWidth=6,F.x.save(),F.x.translate(128,284),F.x.rotate(-.15),F.x.strokeRect(-80,-26,160,50),F.x.fillStyle=H.tomato,F.x.font=`38px ${Fe}`,F.x.fillText("LOSER",0,14),F.x.restore(),F.t.needsUpdate=!0,a(1.56,2,.12,r(H.mustard),-9.6,2.9,-7.95,.025);let V=new Ct(new Le(1.3,1.72),new jt({map:F.t}));V.position.set(-9.6,2.9,-7.87),e.add(V),a(3.3,3.9,.22,x,9.4,1.95,-7.95,.03);let Z=new Ct(new Le(2.6,3.4),new jt({color:"#ffd9a0"}));Z.position.set(9.4,1.7,-7.82),e.add(Z),this.glow=Z;let J=new Ct(new Le(2.6,3.2),new jt({color:"#ffe2b0",transparent:!0,opacity:.33,depthWrite:!1}));J.rotation.x=-Math.PI/2,J.position.set(9.4,.02,-6.2),e.add(J);let $=wn("TO THE COURT",3.2,.62,{bg:H.mustard});$.position.set(9.4,4.25,-7.82),e.add($),a(.6,2.7,3.3,r(H.teal),12.75,1.35,-1.6,.025),a(.2,1.05,2.5,Gt("#bfe6e2"),12.42,1.85,-1.6),a(.5,.1,3,r(H.paper),12.5,1.25,-1.6,.02);let Q=ke(128,32);for(let R=0;R<8;R++)Q.x.fillStyle=R%2?H.paper:H.tomato,Q.x.fillRect(R*16,0,16,32);Q.t.needsUpdate=!0;let at=new Ct(new Le(3.5,1.1),Gt("#ffffff",{map:Q.t,side:Ye}));at.position.set(12.25,2.95,-1.6),at.rotation.set(0,-Math.PI/2,0),at.rotateX(.75),at.castShadow=!0,e.add(at);let dt=wn("BETTING WINDOW",3.2,.5,{bg:H.paper});dt.rotation.y=-Math.PI/2,dt.position.set(12.97,3.75,-1.6),e.add(dt),a(.75,2.3,2.3,g,12.6,1.15,3,.025),a(.5,1.5,1.9,Gt("#fff0c2",{transparent:!0,opacity:.45}),12.42,1.35,3);let X=Bt(new de(.24,.1,.5,14),H.mustard,.015);X.position.set(12.4,1.4,3),e.add(X),o(.14,.17,.08,r(H.ink),12.4,1.1,3,0,12);let tt=wn("TROPHY CASE",2.3,.44,{bg:H.mustard});tt.rotation.y=-Math.PI/2,tt.position.set(12.97,2.95,3),e.add(tt),a(.2,3.1,1.8,r(H.sea),12.95,1.55,6.3,.025),o(.05,.05,.06,r(H.mustard),12.8,1.5,5.7,0,8);let ft=wn("LOCKER ROOM",2.3,.44,{bg:H.paper});ft.rotation.y=-Math.PI/2,ft.position.set(12.9,3.5,6.3),e.add(ft),[["TAIL OR FADE",-6.9,H.teal,H.paper],["NO REAL MONEY",6.9,H.paper,H.tomato]].forEach(([R,lt,L,q],G)=>{let et=wn(R,1.9,.6,{bg:L,fg:q});et.position.set(lt,4.5,-7.98),et.rotation.z=G?.03:-.03,e.add(et)});let vt=(R,lt,L=1)=>{o(.34*L,.26*L,.6*L,r("#c9623f"),R,.3*L,lt,.02);for(let[q,G,et,nt]of[[0,1.1,0,.5],[.3,.85,.1,.36],[-.28,.9,-.1,.38],[.05,1.5,-.05,.34]]){let b=Bt(new gs(nt*L,1),"#4c8a52",.025);b.position.set(R+q*L,G*L,lt+et*L),e.add(b)}};vt(-12.2,6.9,1.1),vt(12.2,-6.9,1.1),vt(6.9,-7.2,.9),vt(-7.4,-7.2,.9);let Mt=t.you;this.me=new qn(Mt,{jersey:t.roster.crew.homeColor,number:Mt.number,headScale:t.headScale(Mt)}),this.me.pos={x:0,z:5.8},this.me.speed=0,e.add(this.me.group),this.me.setRing(H.mustard),this.npcs=[];let wt={},At=[H.tomato,H.mustard,H.teal,"#8a5fa8",H.leaf,H.paper2,"#d9779a",H.sea,"#d98a3a"];t.roster.players.filter(R=>R!==Mt).forEach((R,lt)=>{let L=Ps[R.spot]?R.spot:Object.keys(Ps)[lt%7];wt[L]=wt[L]||0,wt[L]>=Ps[L].length&&(L=Object.keys(Ps).find(nt=>(wt[nt]||0)<Ps[nt].length)||"pacer");let q=Ps[L][(wt[L]=(wt[L]||0)+1)-1]||[Qt(-6,6),Qt(0,6),0],G=new qn(R,{jersey:At[lt%At.length],number:R.number,headScale:t.headScale(R)});G.pos={x:q[0],z:q[1]},G.home={x:q[0],z:q[1]},G.baseFace=q[2],G.face=G.faceTarget=q[2],G.kind=L,G.cool=Qt(0,2),G.laughT=Qt(3,12),G.greeted=!1,G.paceDir=1;let et=lr(R.name);et.position.y=2.72,et.visible=!1,G.group.add(et),G.tag=et,G.group.position.set(G.pos.x,0,G.pos.z),e.add(G.group),this.npcs.push(G)});let Et=t.roster.bartender||{name:"VIG",look:{},lines:["What can I get you?"]};Et.id=Et.id||"bartender",Et.stats=Et.stats||{},this.bartender=new qn(Et,{jersey:H.paper,trim:H.ink}),this.bartender.pos={x:-12,z:1.3},this.bartender.face=this.bartender.faceTarget=Math.PI/2,this.bartender.group.position.set(-12,0,1.3),e.add(this.bartender.group);let Yt=lr(Et.name+" \xB7 BARTENDER",H.ink,H.mustard);Yt.position.y=2.75,this.bartender.group.add(Yt),this.pairs=[];for(let R=0;R<this.npcs.length;R++)for(let lt=R+1;lt<this.npcs.length;lt++)ae(this.npcs[R].pos,this.npcs[lt].pos)<5.2&&this.npcs[R].kind===this.npcs[lt].kind&&this.pairs.push({a:this.npcs[R],b:this.npcs[lt],cool:Qt(1,4)});this.convo=null,this.hot=[{x:9.4,z:-6.9,r:1.9,label:"Head to the court",act:()=>t.openMatchup()},{x:11.9,z:-1.6,r:1.7,label:"Check your bankroll",act:()=>this.showBankroll()},{x:11.9,z:3,r:1.5,label:"Look at the trophy case",act:()=>this.showTrophies()},{x:12.1,z:6.3,r:1.5,label:"Open the locker room",act:()=>t.showCards()},{x:-9.4,z:1.3,r:1.5,label:"Ask the bartender for a tip",act:()=>this.tip()},{x:-9.6,z:-7,r:1.6,label:"Read the framed slip",act:()=>this.frame()},{x:-16.2,z:-5.9,r:1.6,label:"Inspect the controller",act:()=>this.egg("rage","RAGE QUIT HALL OF FAME",'A controller, buried two inches into the drywall. A plaque reads: "Thrown after a half-point loss. The dog covered. Nobody speaks of it."')}],this.camPos=new P(0,9,16),this.entered=0,this.drawTip(),this.drawTVs(!0)}enter(t){this.entered=performance.now(),this.result=t||null;for(let e of this.npcs)e.greeted=!1;this.me.pos.x=t?8.6:0,this.me.pos.z=t?-5.2:5.8,t&&t.badBeat&&setTimeout(()=>Ut("trombone"),600),this.drawTVs(!0),this.drawTip(),$n(this.night?"It is after midnight. The Lounge is in night mode.":"Walk around with WASD or the arrow keys. People talk when you get close.",5)}drawTip(){let t=this.G,e=this.tipBoard,n=e.x;t.save.tip||(t.save.tip=Ie(["home","away","over","under"]));let s={home:"TAKE THE FAVORITE",away:"TAKE THE DOG",over:"HAMMER THE OVER",under:"UNDER. TRUST ME."};n.fillStyle="#23423c",n.fillRect(0,0,512,256),n.fillStyle=H.paper,n.textAlign="center",n.font=`38px ${Fe}`,n.fillText("VIG'S TIP OF THE DAY",256,72),n.fillStyle=H.mustard,n.font=`58px ${Fe}`,n.fillText(s[t.save.tip],256,152),n.fillStyle="#bfe0d6",n.font="700 22px Figtree, system-ui",n.fillText("(record this year: 3-41)",256,205),e.t.needsUpdate=!0}drawTVs(t){let e=this.G,n=e.roster,s=this.fake;for(let r of this.tvs){if(!t&&r.kind!=="game")continue;let a=r.x;if(a.fillStyle="#1c3a35",a.fillRect(0,0,640,360),a.textAlign="left",a.fillStyle=H.mustard,a.font=`38px ${Fe}`,r.kind==="board"){if(!t)continue;a.fillText("THE LINE BOARD",24,48),a.font=`24px ${Fe}`;let o=n.players.map(c=>({p:c,r:ar([c])})).sort((c,h)=>h.r-c.r).slice(0,9),l=o[0].r;o.forEach(({p:c,r:h},u)=>{let f=Math.round((l-h)*28)+(u===0?-140:110);a.fillStyle=u%2?"#cfe3d8":H.paper,a.fillText(c.name.slice(0,16),24,86+u*30),a.fillStyle=f<0?"#8fe0a0":H.mustard,a.textAlign="right",a.fillText((f>0?"+":"")+f,616,86+u*30),a.textAlign="left"})}else if(r.kind==="game"){a.fillStyle="#2f9a92",a.fillRect(0,60,640,230),a.strokeStyle="rgba(255,255,255,.5)",a.lineWidth=3,a.strokeRect(20,75,600,200),a.beginPath(),a.moveTo(320,75),a.lineTo(320,275),a.stroke(),a.beginPath(),a.arc(320,175,40,0,7),a.stroke();for(let c=0;c<4;c++)a.fillStyle=c<2?H.tomato:H.paper,a.beginPath(),a.arc(320+Math.sin(s.tick*.7+c*2)*240,175+Math.cos(s.tick*.9+c*1.7)*70,12,0,7),a.fill();a.fillStyle=H.paper,a.font=`34px ${Fe}`,a.fillText(`${n.crew.homeName} ${s.a}`,24,44),a.textAlign="right",a.fillText(`${s.b} ${n.crew.awayName}`,616,42),a.textAlign="center",a.fillStyle=H.tomato,a.font=`22px ${Fe}`,a.fillText("\u25CF LIVE",320,42),a.fillStyle=H.mustard,a.fillRect(0,300,640,60),a.fillStyle=H.ink,a.font=`26px ${Fe}`,a.textAlign="left";let o=n.players.map((c,h)=>`${c.name} ${["o2.5 threes","u1.5 dunks","to talk trash -500","o0.5 excuses","first bucket +450"][h%5]}`).join("   \xB7   "),l=a.measureText(o).width+100;a.fillText(o,640-s.tick*60%(l+640),338)}else{if(!t)continue;a.fillText("YOUR ACTION",24,48),a.fillStyle=H.paper,a.font=`28px ${Fe}`,a.fillText(`Bankroll: ${e.save.units.toFixed(1)} units`,24,92),a.fillText(`Record: ${e.save.w}-${e.save.l}`,24,128),a.font=`22px ${Fe}`,(e.save.slips||[]).slice(-5).reverse().forEach((o,l)=>{a.fillStyle=o.net>=0?"#8fe0a0":"#ff8f7a",a.fillText(`${o.won?"W":"L"} ${o.score}  ${o.net>=0?"+":""}${o.net.toFixed(1)}u  ${o.grade}`,24,176+l*32)}),(e.save.slips||[]).length||(a.fillStyle="#bfe0d6",a.fillText("No slips yet. Go play a game.",24,176))}r.t.needsUpdate=!0}}anchor(t){return t._anchor||(t._anchor=()=>({x:t.group.position.x,y:2.75*t.ht*.92+.25,z:t.group.position.z}))}say(t,e,n=2.8,s=!1){_n.say(this.anchor(t),e,n);let r=ae(t.pos,this.me.pos),a=se(1.2-r/9,.1,1);s?(t.laugh=1,t.laughUntil=performance.now()+1300,t.setExpr("happy",1.6),Ut("laugh",a)):Ut("talk",a)}roastFor(t,e){let n=this.G.roster,s=(n.roasts||[]).find(a=>a.a===t.def.id&&a.b===e.def.id||a.a===e.def.id&&a.b===t.def.id);if(s){let a=s.a===t.def.id?t:e,o=a===t?e:t;return s.lines.map((l,c)=>({who:c%2?o:a,text:l}))}let r=[[`Remember when ${e.def.name.toLowerCase()} did this? "${e.def.worstPick||"lost a coin flip parlay"}"`,"We do NOT talk about that.","HAHAHA"],[`${e.def.name}, your jumper is a -2000 favorite to hit the backboard.`,"Still better than your picks.","HAHAHA fair."],["Who do you like tonight?",Ie(e.def.lines||["No comment."]),"Great. Fading that."]];return Ie(r).map((a,o)=>({who:o%2?e:t,text:a.replace(/^(.)/,l=>l.toUpperCase())}))}update(t){let e=this.G,n=this.me,s=Ga(),r=s?{x:0,z:0,m:0}:te.axis(),a=(te.sprint()?7.5:5)*r.m,o=n.pos.x+r.x*a*t,l=n.pos.z+r.z*a*t,c=.45,h=(_,y)=>_<-13&&y>-7.6&&y<-4.2,u=_=>_>-6.5&&_<-5.1;o<-12.5&&!(u(l)||h(n.pos.x,n.pos.z))&&(o=-12.5),o<-13&&(o=Math.max(o,-16.6),l=se(l,u(l)&&o>-13.4?-6.5:-7.5,u(l)&&o>-13.4?-5.1:-4.3)),o=Math.min(o,12.4),o>=-13&&(l=se(l,-7.3,7.4));for(let _ of Ig)if(o>_[0]-c&&o<_[2]+c&&l>_[1]-c&&l<_[3]+c){let y=Math.min(o-(_[0]-c),_[2]+c-o),w=Math.min(l-(_[1]-c),_[3]+c-l);y<w?o=o-(_[0]-c)<_[2]+c-o?_[0]-c:_[2]+c:l=l-(_[1]-c)<_[3]+c-l?_[1]-c:_[3]+c}for(let _ of this.npcs){let y=Math.hypot(o-_.pos.x,l-_.pos.z);y<.9&&y>.001&&(o=_.pos.x+(o-_.pos.x)/y*.9,l=_.pos.z+(l-_.pos.z)/y*.9)}n.pos.x=o,n.pos.z=l,r.m>.1&&(n.faceTarget=Math.atan2(r.x,r.z)),n.group.position.set(o,0,l),n.update(t,a);let f=performance.now();for(let _ of this.npcs){let y=ae(_.pos,n.pos);_.tag.visible=y<4.6&&this.G.mode!=="title";let w=0;if(_.kind==="pacer"&&y>3&&!this.convo?(_.pos.x+=_.paceDir*1.3*t,w=1.3,_.faceTarget=_.paceDir>0?Math.PI/2:-Math.PI/2,_.pos.x>_.home.x+5&&(_.paceDir=-1),_.pos.x<_.home.x&&(_.paceDir=1)):y<4.2?_.faceTarget=Math.atan2(n.pos.x-_.pos.x,n.pos.z-_.pos.z):_.faceTarget=_.baseFace,_.group.position.set(_.pos.x,0,_.pos.z),_.laughUntil&&f>_.laughUntil&&(_.laugh=0,_.laughUntil=0),_.cool-=t,_.laughT-=t,!(this.convo&&(this.convo.a===_||this.convo.b===_))&&!s)if(y<3.4&&_.cool<=0){let T,A=!1;if(!_.greeted&&this.result){let D=e.roster.reactions||{},v=this.result.badBeat?D.afterBadBeat:this.result.won?D.afterWin:D.afterLoss;T=Ie(v||["Good game."]).replace("{you}",e.you.name),A=!this.result.won,_.setExpr(this.result.won?"shock":"happy",2)}else this.night&&Math.random()<.4?T=Ie((e.roster.reactions||{}).night||["Late one tonight."]):T=Ie(_.def.lines||["..."]);_.greeted=!0,this.say(_,T,3,A),_.cool=Qt(5,8)}else _.laughT<=0&&(_.laughT=Qt(6,16),y<11&&this.say(_,Ie(["HAHAHA","Ha!","LOL","No way!","Hahaha stop"]),1.4,!0));_.update(t,w)}let d=this.bartender;if(d.faceTarget=ae(d.pos,n.pos)<5?Math.atan2(n.pos.x-d.pos.x,n.pos.z-d.pos.z):Math.PI/2,d.update(t,0),d.laughUntil&&f>d.laughUntil&&(d.laugh=0,d.laughUntil=0),this.convo){let _=this.convo;if(_.t-=t,_.t<=0){let y=_.steps[_.i++];if(!y)_.pair.cool=Qt(9,15),_.a.cool=_.b.cool=3,this.convo=null;else{let w=/^(ha|lol)/i.test(y.text);this.say(y.who,y.text,2.6,w);let C=y.who===_.a?_.b:_.a;y.who.faceTarget=Math.atan2(C.pos.x-y.who.pos.x,C.pos.z-y.who.pos.z),w&&(C.laugh=1,C.laughUntil=f+1200,C.setExpr("happy",1.5)),_.t=2.3}}}else if(!s)for(let _ of this.pairs){_.cool-=t;let y={x:(_.a.pos.x+_.b.pos.x)/2,z:(_.a.pos.z+_.b.pos.z)/2};if(_.cool<=0&&ae(y,n.pos)<5&&_.a.greeted&&_.b.greeted){let w=Math.random()<.5,C=w?_.a:_.b,T=w?_.b:_.a;this.convo={pair:_,a:C,b:T,steps:this.roastFor(C,T),i:0,t:.2};break}}let g=null;if(!s)for(let _ of this.hot)Math.hypot(n.pos.x-_.x,n.pos.z-_.z)<_.r&&(g=_);ur(g?`<kbd>E</kbd> ${g.label}`:null),g&&(te.pressed("KeyE")||te.pressed("Enter"))&&(Ut("click"),g.act()),this.glow.material.color.setHSL(.1,1,.8+Math.sin(f/400)*.04),this.fake.tick+=t,this.tvT-=t,this.tvT<=0&&(this.tvT=.12,Math.random()<.02&&(this.fake[Math.random()<.5?"a":"b"]+=Ie([2,2,3])),(this.fake.a>40||this.fake.b>40)&&(this.fake.a=0,this.fake.b=0),this.drawTVs(!1));let x=se(n.pos.x,-14,10),p=n.pos.z,m=Re.w<Re.h;this.camPos.set(Je(this.camPos.x,x*.85,4,t),m?11:8.2,Je(this.camPos.z,p+(m?13:9.5),4,t)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camPos.x+(x-this.camPos.x)*.5,1.3,p-1.5),_n.update(this.camera)}egg(t,e,n){let s=this.G;s.save.eggs=s.save.eggs||{};let r=!s.save.eggs[t];s.save.eggs[t]=1,s.persist(),Cs(e,`<p>${oe(n)}</p>${r?`<p class="found">Secret found: ${Object.keys(s.save.eggs).length} so far</p>`:""}`),r&&Ut("cash")}frame(){let t=this.frameDef;if(!t)return;this.egg("frame","THE WORST PICK EVER",`Framed, laminated and lit from above. It belongs to ${t.name}: "${t.worstPick}"`);let e=this.npcs.find(n=>n.def===t);e&&setTimeout(()=>this.say(e,"WHO FRAMED THAT?!",2.5),300)}tip(){let t=this.G,e=this.bartender,n={home:"the favorite",away:"the dog",over:"the over",under:"the under"};this.say(e,`Tonight? Take ${n[t.save.tip]}. Can't lose.`,3.5),e.laugh=1,e.laughUntil=performance.now()+800,$n("Vig is almost never right. Fade the tip at the betting screen and a winning pick pays an extra unit.",6)}showBankroll(){let t=this.G,e=t.save,n=(e.slips||[]).slice(-8).reverse().map(s=>`<tr><td>${s.won?"W":"L"}</td><td>${oe(s.score)}</td><td class="${s.net>=0?"pos":"neg"}">${s.net>=0?"+":""}${s.net.toFixed(1)}u</td><td>${oe(s.grade)}</td></tr>`).join("");Cs("BETTING WINDOW",`<p class="big-num">${e.units.toFixed(1)} <span>units</span></p><p>Units are fake. Lock your pregame pick on the matchup screen when you head to the court.</p>${n?`<table class="slips">${n}</table>`:"<p>No slips yet.</p>"}`)}showTrophies(){let t=this.G,e=t.save,n=Object.keys(e.eggs||{}).length;Cs("TROPHY CASE",`<p class="big-num">${e.w}<span>W</span> ${e.l}<span>L</span></p><p>Best slip: ${e.best?"+"+e.best.toFixed(1)+" units":"none yet"}</p><p>Bad beats survived: ${e.badBeats||0}</p><p>Secrets found: ${n}</p><p class="dim">Bracket night trophies will live here.</p>`)}};var Te=14,We=7.5,mi=12.3,fr=3.05,gi=6.75,Va=21,au=150,pr=12,Wa=17,Ug=[[11.4,-6.2],[11.4,6.2],[7.2,-5],[7.2,5],[5.2,0],[10.6,-2.6],[10.6,2.6]],ou=["WASD or arrows to move. Hold SHIFT to sprint (drains stamina)","Hold SPACE and release in the green. Better shooters get a bigger green window","Sprint at the rim and SPACE becomes a dunk or layup","E passes and swaps control. Double-tap a direction to juke","On defense: Q to steal (mistime it and you foul), SPACE to jump and block","Hype meter full? Press F for your signature ability","Props pop up on the right. Press T to take one for 1 unit","Three + steal + assist with no answer and the PARLAY hits"],mr=(i,t)=>{let e=Math.hypot(i,t)||1;return{x:i/e,z:t/e}},Xa=class{constructor(t,e){this.G=t,this.cfg=e,this.auto=!!e.auto;let n=t.roster.crew;this.diff={rookie:-2,pro:0,allstar:1.5}[e.diff]||0,this.col=[n.homeColor||pe.home,n.awayColor||pe.away],this.names=[n.homeName||"HOME",n.awayName||"AWAY"],this.scene=new fs,this.scene.background=new Ot("#f59a6a"),this.camera=new Ge(40,Re.w/Re.h,.1,120),this.camX=0,this.shake=0,this.buildArena(),this.P=[],[e.home,e.away].forEach((l,c)=>l.forEach((h,u)=>{let f={def:h,team:c,i:u,pos:{x:(c?1:-1)*(2+u*3),z:u?3:-1},vel:{x:0,z:0},y:0,vy:0,stamina:1,st:"ok",stT:0,streak:0,juiceT:0,stealCd:0,jukeCd:0,jumpCd:0,charge:0,pts:0,ai:{t:Qt(.3),side:Math.random()<.5?1:-1,hold:0,spot:null,spotT:0,jumped:!1},target:null};this.makeBob(f),this.P.push(f)})),this.bench=(e.bench||[]).slice(),this.ball={pos:new P(0,1,0),vel:new P,state:"held",holder:null,t:0,shot:null,pass:null,lastPass:null,mesh:null};let s=ke(256,128),r=s.x;r.fillStyle="#e8762c",r.fillRect(0,0,256,128),r.strokeStyle=H.ink,r.lineWidth=7,r.beginPath(),r.moveTo(0,64),r.lineTo(256,64),r.moveTo(64,0),r.lineTo(64,128),r.moveTo(192,0),r.lineTo(192,128),r.stroke();for(let l of[0,128,256])r.beginPath(),r.ellipse(l,64,34,62,0,0,7),r.stroke();s.t.needsUpdate=!0,this.ballMat=Gt("#ffffff",{map:s.t}),this.ball.mesh=Bt(new Se(.19,20,14),this.ballMat,.018),this.scene.add(this.ball.mesh),this.ballShadow=new Ct(new En(.2,12),new jt({color:0,transparent:!0,opacity:.14,depthWrite:!1})),this.ballShadow.rotation.x=-Math.PI/2,this.scene.add(this.ballShadow);let a=70;this.trailN=a,this.trailI=0,this.trailLife=new Float32Array(a);let o=new Pe;o.setAttribute("position",new $e(new Float32Array(a*3).fill(-100),3)),this.trailMat=new Zs({color:16742938,size:.42,transparent:!0,opacity:.85,depthWrite:!1}),this.trail=new va(o,this.trailMat),this.trail.frustumCulled=!1,this.scene.add(this.trail),this.ghosts=[0,1].map(()=>{let l=new Ct(new ci(.4,.55,24),new jt({color:4054122,transparent:!0,opacity:.7,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.visible=!1,this.scene.add(l),l}),this.score=[0,0],this.clock=au,this.half=1,this.shotClock=pr,this.poss=0,this.possT=0,this.phase="intro",this.phaseT=2.4,this.time=0,this.hitstop=0,this.slowT=0,this.sudden=!1,this.hype=[0,0],this.locked=[!1,!1],this.chalk=[!1,!1],this.superShot=[!1,!1],this.sharpT=[0,0],this.parlay={three:!1,steal:!1,assist:!1},this.parlayHits=0,this.run={team:-1,pts:0,steamed:0},this.liveLine=e.spread,this.props=[],this.offer=null,this.activeProp=null,this.offerT=Qt(14,20),this.me=this.P[0],this.hintI=0,this.hintT=3,this.lastFlip=null,this.endT=0,this.stats={steals:0,blocks:0,dunks:0,threes:0,ankles:0,perfect:0},this.buildHud(),this.give(this.P[0]),this.setupInbound(0,!0),Oa(!0),Fa(!0),this.openTag=lr("OPEN \xB7 E","#ffffff","#2e9e5b"),this.openTag.visible=!1,this.scene.add(this.openTag),this.zoom=0,this.punch=0,Ee(`${this.names[0]} vs ${this.names[1]}`,`First to ${Va}, or the lead after two halves`,pe.gold,2.2)}buildArena(){let t=this.scene,e=this.G.roster.crew,n=7,s=(L=1,q)=>{n=n*16807%2147483647;let G=n/2147483647;return q===void 0?G*L:L+G*(q-L)};t.fog=new ga("#f6c9a0",55,130),jh(t,[[0,"#6f9fc0"],[.42,"#f3d7b0"],[.62,"#fbc48a"],[.8,"#f59a6a"],[1,"#f59a6a"]],78,62,-8),t.add(new ys(16773336,11569776,1.35)),za(t,{color:16769725,intensity:2.1,pos:[-12,17,13],size:23,depth:60});let r=new Ct(new En(4.2,40),new jt({color:"#fff3c9",fog:!1}));r.position.set(17,15.5,-66),t.add(r);let a=new Ct(new En(8,40),new jt({color:"#ffe0a0",transparent:!0,opacity:.35,fog:!1,depthWrite:!1}));a.position.set(17,15.5,-66.5),t.add(a);let o=new jt({color:"#fff1dc",transparent:!0,opacity:.85,fog:!1,depthWrite:!1});for(let[L,q,G]of[[-30,27,15],[-8,31,10],[34,25,13],[48,33,9]])for(let et=0;et<3;et++){let nt=new Ct(new En(1,24),o);nt.scale.set(G*(1-et*.28),1.3-et*.2,1),nt.position.set(L+et*G*.35,q+et*.9,-68+et*.1),t.add(nt)}let l=4,c=3.75,h=2304,u=1440,f=ke(h,u),d=f.x,g=h/(2*(Te+l)),x=u/(2*(We+c)),p=L=>h/2+L*g,m=L=>u/2+L*x,_="#2f8a82",y="#e6c998",w="#2f8a82",C="#1f5550";d.fillStyle=_,d.fillRect(0,0,h,u),d.fillStyle=y,d.fillRect(p(-Te),m(-We),2*Te*g,2*We*x),d.lineWidth=.09*g,d.strokeStyle=C,d.lineJoin="miter";for(let L of[-1,1]){let q=Math.asin(6.6/gi),G=()=>{d.beginPath(),d.moveTo(p(L*Te),m(-6.6)),d.lineTo(p(L*(mi-gi*Math.cos(q))),m(-6.6)),d.ellipse(p(L*mi),m(0),gi*g,gi*x,0,L>0?Math.PI+q:-q,L>0?Math.PI-q:q,L>0),d.lineTo(p(L*Te),m(6.6))};G(),d.closePath(),d.fillStyle="#dcb97f",d.fill();let et=Math.min(p(L*Te),p(L*(Te-5.8)));d.fillStyle=w,d.fillRect(et,m(-2.45),5.8*g,4.9*x),d.beginPath(),d.arc(p(L*(Te-5.8)),m(0),1.8*g,L>0?Math.PI/2:-Math.PI/2,L>0?Math.PI*1.5:Math.PI/2),d.fill(),d.strokeRect(et,m(-2.45),5.8*g,4.9*x),d.beginPath(),d.arc(p(L*(Te-5.8)),m(0),1.8*g,0,7),d.stroke(),G(),d.stroke(),d.beginPath(),d.arc(p(L*mi),m(0),1.25*g,L>0?Math.PI/2:-Math.PI/2,L>0?Math.PI*1.5:Math.PI/2),d.stroke()}d.beginPath(),d.moveTo(p(0),m(-We)),d.lineTo(p(0),m(We)),d.stroke(),d.fillStyle="#d9583a",d.beginPath(),d.arc(p(0),m(0),1.8*g,0,7),d.fill(),d.stroke(),d.strokeRect(p(-Te),m(-We),2*Te*g,2*We*x),d.fillStyle="#fff3dc",d.textAlign="center",d.textBaseline="middle";let T=String(e.title||"HOOP LEGENDS").split(" ");d.font=`${g*.92}px ${Fe}`,d.fillText(T[0],p(0),m(-.48)),d.fillText(T.slice(1).join(" ")||"CLUB",p(0),m(.55));for(let L=0;L<5200;L++)d.fillStyle=s()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.06)",d.fillRect(s(h),s(u),s(1,4),s(1,4));for(let L=0;L<60;L++){d.strokeStyle="rgba(255,255,255,.05)",d.lineWidth=s(8,26),d.beginPath();let q=s(h),G=s(u);d.moveTo(q,G),d.lineTo(q+s(-160,160),G+s(-40,40)),d.stroke()}d.strokeStyle="rgba(40,20,10,.22)",d.lineWidth=2;for(let L=0;L<7;L++){let q=s(h),G=s(u);d.beginPath(),d.moveTo(q,G);for(let et=0;et<9;et++)q+=s(-50,70),G+=s(-45,45),d.lineTo(q,G);d.stroke()}f.t.anisotropy=8,f.t.needsUpdate=!0;let A=new Ct(new Le(2*(Te+l),2*(We+c)),Gt("#ffffff",{map:f.t}));A.rotation.x=-Math.PI/2,A.receiveShadow=!0,t.add(A);let D=new Ct(new Le(260,200),Gt("#cdbb9f"));D.rotation.x=-Math.PI/2,D.position.y=-.03,D.receiveShadow=!0,t.add(D);let v=(L,q,G,et,nt,b,M,O=0)=>{let j=Bt(new tn(L,q,G),et,O);return j.position.set(nt,b,M),t.add(j),j};for(let L of[-1,1])v(2*(Te+l)+.5,.16,.25,H.concrete,0,.06,L*(We+c+.12)),v(.25,.16,2*(We+c),H.concrete,L*(Te+l+.12),.06,0);this.nets=[];let S=ke(256,160);S.x.fillStyle="#fdf8ec",S.x.fillRect(0,0,256,160),S.x.strokeStyle=H.ink,S.x.lineWidth=10,S.x.strokeRect(5,5,246,150),S.x.strokeStyle=H.tomato,S.x.lineWidth=9,S.x.strokeRect(86,70,84,62),S.t.needsUpdate=!0;let N=ke(128,64);N.x.strokeStyle="#ffffff",N.x.lineWidth=3;for(let L=-4;L<12;L++)N.x.beginPath(),N.x.moveTo(L*16,0),N.x.lineTo(L*16+40,64),N.x.moveTo(L*16+40,0),N.x.lineTo(L*16,64),N.x.stroke();N.t.needsUpdate=!0;let Y=Gt("#3b4a52"),ot=[Gt("#fdf8ec"),Gt("#fdf8ec"),Gt("#fdf8ec"),Gt("#fdf8ec"),Gt("#fdf8ec"),Gt("#fdf8ec")];for(let L of[-1,1]){let q=Bt(new de(.11,.13,3.5,10),Y,.02);q.position.set(L*(Te+1.25),1.75,0),t.add(q);let G=Bt(new de(.08,.08,1.75,8),Y,.02);G.rotation.z=L*1.15,G.position.set(L*(Te+.5),3.45,0),t.add(G),v(.9,.3,.9,"#55656d",L*(Te+1.25),.15,0,.02);let et=ot.slice();et[L>0?1:0]=Gt("#ffffff",{map:S.t});let nt=Bt(new tn(.09,1.15,1.85),et,.03);nt.position.set(L*(mi+.45),3.52,0),t.add(nt);let b=Bt(new _s(.245,.032,8,26),H.tomato);b.rotation.x=Math.PI/2,b.position.set(L*mi,fr,0),t.add(b);let M=Bt(new tn(.22,.05,.1),H.tomato);M.position.set(L*(mi+.32),fr,0),t.add(M);let O=new Ct(new de(.24,.15,.46,14,1,!0),new jt({map:N.t,transparent:!0,alphaTest:.3,side:Ye}));O.position.set(L*mi,fr-.24,0),t.add(O),this.nets.push(O)}let I=ke(64,64);I.x.strokeStyle="rgba(70,90,96,.9)",I.x.lineWidth=3,I.x.beginPath(),I.x.moveTo(0,32),I.x.lineTo(32,0),I.x.lineTo(64,32),I.x.lineTo(32,64),I.x.closePath(),I.x.stroke(),I.t.wrapS=I.t.wrapT=Pi,I.t.needsUpdate=!0;let F=(L,q,G,et)=>{let nt=I.t.clone();nt.needsUpdate=!0,nt.repeat.set(L*2.2,9);let b=new Ct(new Le(L,4.2),new jt({map:nt,transparent:!0,alphaTest:.25,side:Ye}));b.position.set(q,2.1,G),b.rotation.y=et,t.add(b);let M=Math.round(L/4);for(let j=0;j<=M;j++){let K=Bt(new de(.07,.07,4.3,8),"#2c5f63"),st=-L/2+j*(L/M);K.position.set(q+(et?0:st),2.15,G+(et?st:0)),t.add(K)}let O=Bt(new tn(et?.1:L,.1,et?L:.1),"#2c5f63");O.position.set(q,4.25,G),t.add(O)},V=-(We+c+1.9),Z=Te+l+1.2;F(2*Z,0,V,0),F(Math.abs(V)+6,-Z,V/2+3,Math.PI/2),F(Math.abs(V)+6,Z,V/2+3,Math.PI/2);let J=this.G.roster.ads||["HOOP LEGENDS"],$=[[H.paper,H.ink],[H.tomato,H.paper],[H.mustard,H.ink],[this.col[0],"#ffffff"],[H.teal,H.paper]],Q=-Z+2.2;for(let L=0;Q<Z-3;L++){let q=J[L%J.length],G=se(q.length*.36+1,3.2,7.5);if(Q+G>Z-1)break;let[et,nt]=$[L%$.length],b=wn(q,G,1.05,{bg:et,fg:nt});b.position.set(Q+G/2,3.1+L%2*.12,V+.06),b.rotation.z=(L%2?1:-1)*.012,t.add(b),Q+=G+.7}for(let L=0;L<3;L++)v(30,.42,.75,L%2?"#c2b59c":H.concrete,0,.21+L*.42,-(We+2.55)-L*.75);this.crowd=[];let at=new Set([...this.cfg.home,...this.cfg.away]),dt=this.G.roster.players.filter(L=>!at.has(L)),X=[H.tomato,H.mustard,H.sea,H.leaf,"#8a5fa8",H.paper2,"#d9779a",H.teal],tt=Math.max(10,Math.min(16,dt.length));for(let L=0;L<tt;L++){let q=dt.length?dt[L%dt.length]:Ie(this.G.roster.players),G=L%2,et=new qn(q,{jersey:X[L%X.length],headScale:this.G.headScale(q)});et.group.position.set(-13.4+L*(26.8/(tt-1)),.42+G*.42,-(We+2.5)-G*.75),et.cheerT=0,t.add(et.group),this.crowd.push(et)}v(2.6,.1,.5,H.wood,-11.5,.5,V+.9,.02);for(let L of[-1.1,1.1])v(.1,.5,.45,Y,-11.5+L,.25,V+.9);v(.7,.5,.45,H.sea,12.2,.25,V+.8,.02),v(.74,.1,.49,H.paper,12.2,.55,V+.8,.02);for(let[L,q]of[[-Z-.6,V-.6],[Z+.6,V-.6]]){let G=Bt(new de(.12,.16,9.5,8),Y);G.position.set(L,4.75,q),t.add(G);let et=v(1.9,.9,.3,"#2b363c",L,9.6,q+.15);et.rotation.x=.35;let nt=new Ct(new Le(1.6,.62),new jt({color:"#fff6d8",fog:!1}));nt.position.set(L,9.55,q+.33),nt.rotation.x=.35,t.add(nt)}let ft=["#f4e3c4","#efc9a0","#f7efe0","#e9b48a","#f2d9a8","#e6d3bd","#f0bfa6"],vt=[H.tomato,H.teal,H.mustard,"#f7efe0",H.sea],Mt=(L,q,G)=>{let et=ke(256,Math.round(256*q/L)),nt=et.x,b=et.c.height,M=Math.max(2,Math.round(q/3.1)),O=b/M,j=Math.max(2,Math.round(L/2.6)),K=256/j;nt.fillStyle=G,nt.fillRect(0,0,256,b);for(let st=0;st<M;st++){let yt=st*O;for(let ct=0;ct<j;ct++){let _t=s()<.3,St=ct*K+K*.22,Nt=K*.56,it=yt+O*.2,ee=O*.5;nt.fillStyle=_t?"#ffd88a":"#3d5a66",nt.fillRect(St,it,Nt,ee),nt.fillStyle=s()<.5?"#4f7f6a":"#7a5a44",s()<.55&&nt.fillRect(St,it,Nt*.3,ee),s()<.4&&(nt.fillStyle=vt[Math.floor(s(vt.length))],nt.beginPath(),nt.moveTo(St-K*.08,it-O*.02),nt.lineTo(St+Nt+K*.08,it-O*.02),nt.lineTo(St+Nt+K*.14,it+O*.16),nt.lineTo(St-K*.14,it+O*.16),nt.fill())}nt.fillStyle="rgba(60,40,30,.22)",nt.fillRect(0,yt+O*.78,256,O*.035),nt.fillStyle="rgba(255,255,255,.5)",nt.fillRect(0,yt+O*.815,256,O*.14),nt.strokeStyle="rgba(60,40,30,.35)",nt.lineWidth=1;for(let ct=0;ct<256;ct+=6)nt.beginPath(),nt.moveTo(ct,yt+O*.815),nt.lineTo(ct,yt+O*.955),nt.stroke()}return et.t.needsUpdate=!0,et.t},wt=(L,q,G,et,nt,b)=>{let M=ft[Math.floor(s(ft.length))],O=new jt({color:un(M,.82)}),j=new jt({color:un(M,.7)}),K=new jt({map:Mt(G,et,M)});if(b)for(let yt of[O,j,K])yt.color.lerp(new Ot("#f6c9a0"),b);let st=new Ct(new tn(G,et,nt),[O,O,j,j,K,O]);if(st.position.set(L,et/2,q),t.add(st),!b){for(let yt=0;yt<2;yt++)if(s()<.8){let ct=L+s(-G/2+1,G/2-1),_t=new Ct(new de(.32,.32,1.1,10),new jt({color:"#eef2f2"}));_t.rotation.z=Math.PI/2,_t.position.set(ct,et+.95,q+nt/2-1),t.add(_t);let St=new Ct(new tn(1.2,.06,1.3),new jt({color:"#2f4f6a"}));St.rotation.x=.7,St.position.set(ct,et+.5,q+nt/2-.3),t.add(St)}}},At=-58;for(;At<58;){let L=s(7,12),q=s(9,17);wt(At+L/2,-27-s(0,3),L,q,9,0),At+=L+s(.3,2.2)}for(At=-70;At<70;){let L=s(9,15),q=s(17,27);wt(At+L/2,-44,L,q,8,.5),At+=L+s(0,3)}for(let L of[-1,1])for(let q=0;q<3;q++){let G=s(8,11),et=s(9,15);wt(L*(34+s(0,3)),-14+q*11,9,et,G,0)}let Et=[Gt("#3f7a4c"),Gt("#2f6a4a"),Gt("#5a9151")],Yt=Gt("#6e4a30"),R=(L,q,G,et=1)=>{let nt=Bt(new de(.16*et,.22*et,2.2*et,7),Yt);if(nt.position.set(L,1.1*et,q),t.add(nt),G){let b=Bt(new ms(1.05*et,7.2*et,9),Et[1],.04);b.position.set(L,4.6*et,q),t.add(b)}else for(let[b,M,O,j]of[[0,3.2,0,1.7],[1.1,2.7,.2,1.2],[-1,2.9,-.3,1.3],[.2,4.2,.1,1.2]]){let K=Bt(new gs(j*et,1),Et[Math.floor(s(3))],.04);K.position.set(L+b*et,M*et,q+O*et),t.add(K)}};for(let[L,q,G,et]of[[-24,-17,0,1.3],[-28,-8,1,1.1],[-25,3,0,1.1],[25,-16,1,1.25],[27.5,-6,0,1.35],[24.5,5,1,1],[-9,-18.5,1,1.15],[4,-19,0,1.2],[15,-18.5,1,1.05],[-17,-19,0,1]])R(L,q,G,et);let lt=new jt({color:"#fff0b8",fog:!1});for(let L=0;L<=26;L++){let q=L/26,G=new Ct(new Se(.09,8,6),lt);G.position.set(hn(-Z-.6,Z+.6,q),8.6-Math.sin(q*Math.PI)*1.9,V-.6),t.add(G)}}makeBob(t){t.bob&&this.scene.remove(t.bob.group),t.bob=new qn(t.def,{jersey:this.col[t.team],number:t.def.number,headScale:this.G.headScale(t.def)}),t.bob.faceTarget=t.bob.face=t.team?-Math.PI/2:Math.PI/2,this.scene.add(t.bob.group)}buildHud(){let t=this.cfg,e=this.hud=Ft("div","hud");e.innerHTML=`
    <div class="sb">
      <div class="tm" style="--tc:${this.col[0]}"><span class="nm">${oe(this.names[0])}</span><span class="sc" id="h-s0">0</span></div>
      <div class="mid"><div class="clk" id="h-clk">2:30</div><div class="subl"><span id="h-half">1ST</span><span class="shot" id="h-shot">12</span></div></div>
      <div class="tm away" style="--tc:${this.col[1]}"><span class="sc" id="h-s1">0</span><span class="nm">${oe(this.names[1])}</span></div>
      <div class="line" id="h-line"></div>
    </div>
    <div class="units"><b id="h-units"></b><span id="h-pick"></span></div>
    <div class="pcard"><div class="pc-top"><span id="h-av"></span><div><div class="pc-name" id="h-name"></div><div class="pc-ab" id="h-ab"></div></div></div>
      <div class="bar stam"><i id="h-stam"></i></div>
      <div class="bar hype"><i id="h-hype"></i><em id="h-hypel">HYPE</em></div>
      <div class="chips"><span>PARLAY</span><b id="c-three">THREE</b><b id="c-steal">STEAL</b><b id="c-assist">ASSIST</b></div>
    </div>
    <div class="offer" id="h-offer" hidden></div>
    <div class="meter" id="h-meter" hidden><div class="green" id="h-green"></div><div class="fill" id="h-fill"></div></div>
    <div class="sigcard" id="h-sig" hidden></div>
    <div class="tint" id="h-tint"></div>`,Oi().appendChild(e),this.$=s=>e.querySelector("#"+s);let n=t.pick;this.$("h-pick").textContent=n?`Pick: ${n.label} (${n.stake}u)`:"No pick locked",this.$("h-offer").addEventListener("click",()=>this.takeOffer()),this.hudMe=null}stat(t,e){return se((t.def.stats[e]||5)+(t.juiceT>0?2:0)+(t.team===1?this.diff:0),1,12)}hoop(t){return{x:(t?-1:1)*mi,z:0}}dir(t){return t?-1:1}mate(t){return this.P.find(e=>e.team===t.team&&e!==t)}opps(t){return this.P.filter(e=>e.team!==t.team)}nearestOpp(t){let e=null,n=99;for(let s of this.opps(t)){let r=ae(t.pos,s.pos);r<n&&(n=r,e=s)}return[e,n]}isUser(t){return!this.auto&&t===this.me}addHype(t,e,n){let s=n?this.stat(n,"trashTalk"):5;this.hype[t]=se(this.hype[t]+e*(.7+s*.06),0,100)}give(t){let e=this.ball,n=this.poss;e.state="held",e.holder=t,e.shot=null,e.pass=null,(t.team!==n||this.possT>90)&&(this.poss=t.team,this.shotClock=pr,this.possT=0),this.poss=t.team,t.team===0?this.me=t:this.me&&(this.me=this.P[t.i])}crowdSay(t,e=1){for(let n=0;n<e;n++){let s=Ie(this.crowd);s.cheerT=1.2,s.setExpr(/BRICK|FADE|BOO|ICE/i.test(t)?"happy":"shock",1.5),_n.say(()=>({x:s.group.position.x,y:s.group.position.y+2.6,z:s.group.position.z}),t,2.2,"crowd")}}cheer(t){for(let e of this.crowd)(t||Math.random()<.5)&&(e.cheerT=Qt(.6,1.4));Ut("cheer",t?1:.6)}startShot(t){if(t.st!=="ok"||this.ball.holder!==t)return;t.st="windup",t.stT=0,t.charge=0,t.vy=4.7,t.vel.x*=.3,t.vel.z*=.3;let e=this.hoop(t.team);if(t.bob.faceTarget=Math.atan2(e.x-t.pos.x,e.z-t.pos.z),!this.isUser(t)){let n=this.stat(t,"shooting"),s=Math.random();t.aiQ=s<.12+n*.04?"perfect":s<.75+n*.02?"good":"bad",t.aiRel=Qt(.72,.86)}for(let n of this.opps(t))n.ai.jumped=!1}greenHalf(t){return(.035+this.stat(t,"shooting")*.009)*(t.streak>=3?1.4:t.streak<=-3?.65:1)}timing(t,e){let n=this.greenHalf(t),s=Math.abs(e-.8);return s<=n?"perfect":s<=n+.13?"good":"bad"}contest(t){let e=0;for(let n of this.opps(t)){if(n.st==="down"||n.st==="frozen")continue;let s=ae(t.pos,n.pos),r=se(1-s/2.3)*(.3+this.stat(n,"defense")*.035)*(n.def.look&&n.def.look.height>1.08?1.12:1)*(n.y>.2?1.3:1);this.sharpT[t.team]>0&&(r*=.5),e=Math.max(e,r)}return Math.min(e,.62)}release(t,e,n=!1){let s=this.ball,r=this.hoop(t.team),a=ae(t.pos,r),o=t.team;t.st="ok";let l=a>gi?3:2,c=this.locked[o]||this.superShot[o];if(!c){for(let T of this.opps(t))if(T.y>.22&&ae(t.pos,T.pos)<1.45&&T.st==="ok"&&Math.random()<.2+this.stat(T,"defense")*.045-(n?.05:0))return this.blocked(t,T)}let h=n?.74:a<2.6?.7:a<=gi?.45:.35;a>8.4&&(h=Math.max(.03,h-(a-8.4)*.06));let f=.72+this.stat(t,"shooting")*.075,d=n?1.15:e==="perfect"?1.55:e==="good"?1.05:.5,g=this.contest(t),x=t.streak>=3?1.15:t.streak<=-3?.9:1,p=this.half===2&&this.clock<30||this.score[o]>=Va-3||this.sudden?1+(this.stat(t,"clutch")-5)*.03:1,m=se(h*f*d*(1-g)*x*p,.03,.96),_=c||Math.random()<m,y=this.superShot[o],w=this.locked[o]&&!y;if(y?this.superShot[o]=!1:this.locked[o]&&(this.locked[o]=!1),this.isUser(t)){if(e==="perfect"&&!n&&(this.stats.perfect++,this.addHype(0,8,t)),!n){let T=e==="perfect"?"PERFECT":t.charge<.8?e==="good"?"A BIT EARLY":"TOO EARLY":e==="good"?"A BIT LATE":"TOO LATE",A=g>.33?"SMOTHERED":g>.14?"CONTESTED":"OPEN",D=t.pos.x,v=t.pos.z;_n.say(()=>({x:D,y:3.5,z:v}),c?"LOCKED IN":`${T} \xB7 ${A}`,1.1,"fb "+(e==="perfect"||c?"good":e==="bad"?"bad":""))}this.propEvent("release",{perfect:e==="perfect"&&!n})}let C=new P(r.x,fr,0);if(!_){let T=Qt(Math.PI*2);C.x+=Math.cos(T)*.25,C.z+=Math.sin(T)*.25}s.state="shot",s.holder=null,s.shot={t:0,T:n?.45:.72+a*.045,from:s.pos.clone(),to:C,H:n?.6:1.3+a*.16,make:_,pts:l,shooter:t,kind:n?"layup":l===3?"three":"mid",trail:y?4054122:w?16762161:t.streak>=3?16742938:0},t.charge=0,t.bob.armsUpT=1,setTimeout(()=>{t.bob.armsUpT=0},350)}blocked(t,e){let n=this.ball;t.st="ok",n.state="loose",n.holder=null,n.t=0;let s=mr(t.pos.x-e.pos.x,t.pos.z-e.pos.z);n.vel.set(s.x*Qt(3,6),Qt(2,4),s.z*Qt(3,6)+Qt(-2,2)),this.shake=.5,this.hitstop=.08,Ut("block"),Ee("BLOCKED!",e.def.name,this.col[e.team],1.1),this.addHype(e.team,20,e),t.bob.setExpr("shock",1.5),e.bob.setExpr("happy",1.5),e.team===0&&this.stats.blocks++,this.crowdSay(Ie(["GET THAT OUTTA HERE!","NOT IN MY HOUSE!","SIT DOWN!"])),t.streak=Math.min(-1,t.streak-1)}drive(t){if(t.st!=="ok"||this.ball.holder!==t)return;if(this.stat(t,"dunking")>=6){let n=this.hoop(t.team),s=this.dir(t.team);t.st="air",t.stT=0,t.from={x:t.pos.x,z:t.pos.z},t.to={x:n.x-s*.55,z:t.pos.z*.15},t.bob.faceTarget=Math.atan2(n.x-t.pos.x,-t.pos.z),t.bob.armsUpT=1}else t.vy=4.2,this.release(t,"good",!0)}finishDunk(t){let e=t.team,n=this.hoop(e);t.st="ok",t.vy=0,t.bob.armsUpT=0;let s=null,r=null;for(let o of this.opps(t))Math.hypot(o.pos.x-n.x,o.pos.z)<1.9&&o.st==="ok"&&(r=o,Math.random()<.12+this.stat(o,"defense")*.035-this.stat(t,"dunking")*.012+(o.y>.2?.15:0)&&(s=o));if(s&&!this.locked[e]&&!this.superShot[e])return this.blocked(t,s);let a=this.ball;a.state="dead",a.holder=null,a.pos.set(n.x,fr-.1,0),a.vel.set(0,-5,0),this.hitstop=.16,this.shake=.9,this.punch=1,Ut("dunk"),r&&(r.bob.setExpr("shock",2),r.st="down",r.stT=.9),this.stats.dunks+=e===0?1:0,this.scored(t,2,r?"poster":"dunk")}pass(t,e){let n=this.ball;if(n.holder!==t||!e||t.st!=="ok")return;let s=e,r=null;for(let o of this.opps(t)){if(o.st!=="ok")continue;let l=e.pos.x-t.pos.x,c=e.pos.z-t.pos.z,h=l*l+c*c||1,u=se(((o.pos.x-t.pos.x)*l+(o.pos.z-t.pos.z)*c)/h,0,1),f=Math.hypot(t.pos.x+l*u-o.pos.x,t.pos.z+c*u-o.pos.z);u>.15&&f<.75&&Math.random()<.1+this.stat(o,"defense")*.035&&(r=o)}r&&(s=r);let a=ae(t.pos,s.pos);n.state="pass",n.holder=null,n.pass={t:0,T:se(a/15,.18,.7),from:n.pos.clone(),to:s,passer:t,stolen:!!r},s.team===0&&!r&&(this.me=s),Ut("pop",.6)}trySteal(t,e){if(t.stealCd>0||t.st!=="ok"||!e||this.ball.holder!==e||e.st==="air")return;if(t.stealCd=.9,ae(t.pos,e.pos)>1.55){t.st="frozen",t.stT=.25;return}if(this.possT<.7)return;let n=se((this.isUser(t)?.2:.09)+(this.stat(t,"defense")-this.stat(e,"handles"))*.035+(e.st==="windup"?.1:0),.05,.6);Math.random()<n?(this.give(t),e.st==="windup"&&(e.st="ok"),Ut("steal"),Ee("STOLEN!",t.def.name,this.col[t.team],1),this.addHype(t.team,20,t),t.bob.setExpr("happy",1.2),e.bob.setExpr("shock",1.2),t.team===0&&(this.stats.steals++,this.parlayLeg("steal")),this.propEvent("steal",{team:t.team})):Math.random()<.22?(t.st="frozen",t.stT=1,this.shotClock=pr,Ut("whistle"),Ee("REACH-IN FOUL",`${t.def.name} mistimed it. Shot clock resets`,"#fff",1.1),this.addHype(e.team,10,e)):(t.st="frozen",t.stT=this.isUser(t)?.3:.55)}juke(t,e,n){if(t.jukeCd>0||t.st!=="ok"||t.stamina<.1)return;let s=mr(e,n);if(t.dash={x:s.x,z:s.z,t:.17},t.jukeCd=1.2,t.stamina-=.1,Ut("pop",.5),this.ball.holder===t)for(let r of this.opps(t)){if(r.st!=="ok"||ae(t.pos,r.pos)>2.2)continue;let a=se(.3+(this.stat(t,"handles")-this.stat(r,"defense"))*.06,.08,.8);this.isUser(r)&&(a*=.5),Math.random()<a&&(r.st="down",r.stT=1.1,r.bob.setExpr("shock",1.6),this.slowT=.55,Ut("ooh"),Ee("ANKLE BREAKER",`${r.def.name} is on skates`,pe.gold,1.3),this.addHype(t.team,25,t),t.team===0&&this.stats.ankles++,this.crowdSay("HE'S ON SKATES!"))}}signature(t){let e=t.team;if(this.hype[e]<100)return;this.hype[e]=0;let n=t.def.ability||"lock",s=Ts(t.def),r=Ba(t.def);if(n==="lock")this.locked[e]=!0;else if(n==="sharp")this.sharpT[e]=8;else if(n==="juice"){let o=this.mate(t);o.juiceT=10,o.bob.setRing(pe.green)}else if(n==="chalk")this.chalk[e]=!0;else if(n==="tout"){let[o]=this.nearestOpp(t);o&&(o.st="frozen",o.stT=1.6,o.bob.setExpr("shock",1.8)),_n.say(()=>({x:t.pos.x,y:3,z:t.pos.z}),Ie(t.def.lines||["LOCK OF THE CENTURY!"]).toUpperCase(),1.8,"loud")}else if(n==="hedge")if(this.bench.length){let o=this.bench.shift();this.bench.push(t.def),r=`${o.name} checks in for ${t.def.name} with fresh legs`,t.def=o,this.makeBob(t),t.stamina=1,t.streak=0}else t.stamina=1;Ut("power"),this.hitstop=.75;let a=this.$("h-sig");a.hidden=!1,a.style.setProperty("--tc",this.col[e]),a.innerHTML=`<small>SIGNATURE ABILITY \xB7 ${oe(t.def.name)}</small><b>${oe(s)}</b><span>${oe(r)}</span>`,clearTimeout(this.sigT),this.sigT=setTimeout(()=>{a.hidden=!0},1700)}covers(t,e,n){let s=this.cfg;return t==="home"?e+s.spread>n:t==="away"?e+s.spread<n:t==="over"?e+n>s.total:e+n<s.total}scored(t,e,n){let s=t.team,r=1-s,a=this.cfg.pick?this.covers(this.cfg.pick.side,this.score[0],this.score[1]):null,o="";this.chalk[s]&&(this.chalk[s]=!1,this.score[s]<this.score[r]?(e*=2,o="CHALK EATER: DOUBLE"):(e+=1,o="CHALK EATER +1")),n==="super"&&(e+=1),this.score[s]+=e,t.pts+=e;let l=n==="three"||n==="super"&&e>=4;t.streak=Math.max(1,t.streak+1),t.streak===3?(Ee("HEATER!",`${t.def.name} has three straight`,this.col[s],1.5),Ut("fire"),this.crowdSay("HE CANNOT MISS")):n==="poster"?Ee("POSTER!",`${t.def.name} put him on one`,this.col[s],1.4):n==="dunk"?Ee("DUNK!",t.def.name,this.col[s],1):n==="super"?Ee("SUPER SHOT",`+${e} for ${this.names[s]}`,pe.green,1.3):o?Ee(o,`+${e}`,pe.gold,1.2):l&&Ee("CASH! +3",t.def.name,this.col[s],.9),this.cheer(n==="poster"||n==="dunk"||l),this.addHype(s,l?25:18,t),t.bob.setExpr("happy",2);for(let c of this.opps(t))c.bob.setExpr("sad",1.6);if(l&&Math.random()<.7&&this.crowdSay(`"${Ie(t.def.lines||["Cash it!"])}"`),s===0){l&&(this.stats.threes++,this.parlayLeg("three"));let c=this.ball.lastPass;c&&c.to===t&&this.time-c.time<6&&this.parlayLeg("assist")}else(this.parlay.three||this.parlay.steal||this.parlay.assist)&&(this.parlay={three:!1,steal:!1,assist:!1});if(this.run.team===s?this.run.pts+=e:this.run={team:s,pts:e,steamed:0},this.run.pts>=6*(this.run.steamed+1)&&(this.run.steamed++,this.liveLine+=s===0?-1.5:1.5,setTimeout(()=>{this.phase!=="final"&&(Ee("STEAM MOVE",`Sharp money coming in on ${this.names[s]}`,pe.gold,1.6),Ut("cash"))},900)),this.propEvent("score",{team:s,pts:e,three:l,kind:n}),a!==null){let c=this.covers(this.cfg.pick.side,this.score[0],this.score[1]);this.lastFlip=a&&!c?this.time:this.lastFlip,!a&&c&&(this.lastFlip=null)}if(this.ball.lastPass=null,this.score[s]>=Va||this.sudden)return this.finish();this.phase="dead",this.phaseT=1.4,this.nextTeam=r,this.setupInbound(r)}missed(t){t.streak=Math.min(-1,t.streak-1),t.streak===-3&&(Ee("ICE COLD",`${t.def.name} has missed three straight`,"#7fd4ff",1.5),Ut("ice"),this.crowdSay(Ie(["BRICK!","FADE THIS MAN","BOOOO"]),2)),t.bob.setExpr("sad",1.2)}parlayLeg(t){this.parlay[t]||(this.parlay[t]=!0,Ut("pop"),this.parlay.three&&this.parlay.steal&&this.parlay.assist&&(this.parlay={three:!1,steal:!1,assist:!1},this.parlayHits++,this.superShot[0]=!0,setTimeout(()=>{Ee("PARLAY HITS","Super shot unlocked: your next shot cannot miss and is worth +1",pe.green,2),Ut("cash")},700)))}makeOffer(){let t=[{k:"three",text:"Next bucket is a three",odds:150},{k:"steal",text:"Your team gets a steal in the next 20 seconds",odds:200,time:20},{k:"dunk",text:"Your team dunks in the next 25 seconds",odds:250,time:25},{k:"next",text:"Your team scores the next bucket",odds:110},{k:"green",text:"Perfect release on your next jump shot",odds:130}],e=Ie(t);e.k==="dunk"&&!this.cfg.home.some(s=>s.stats.dunking>=6)&&(e=t[0]),this.offer=Object.assign({until:this.time+7},e);let n=this.$("h-offer");n.hidden=!1,n.className="offer",n.innerHTML=`<small>LIVE PROP \xB7 1 unit</small><b>${oe(e.text)}</b><span class="odds">+${e.odds}</span><em><kbd>T</kbd> take it</em>`,Ut("pop")}takeOffer(){if(!this.offer||this.activeProp)return;let t=this.offer;this.offer=null,this.activeProp={k:t.k,text:t.text,odds:t.odds,deadline:t.time?this.time+t.time:null,result:null};let e=this.$("h-offer");e.className="offer taken",e.innerHTML=`<small>PROP LOCKED \xB7 1 unit to win ${(t.odds/100).toFixed(1)}</small><b>${oe(t.text)}</b>`,Ut("click")}propEvent(t,e){let n=this.activeProp;if(!n)return;let s=null;if(t==="score"&&(n.k==="three"?s=e.three:n.k==="next"?s=e.team===0:n.k==="dunk"&&e.team===0&&(e.kind==="dunk"||e.kind==="poster")&&(s=!0)),t==="steal"&&n.k==="steal"&&e.team===0&&(s=!0),t==="release"&&n.k==="green"&&(s=e.perfect),t==="time"&&n.deadline&&this.time>n.deadline&&(s=!1),t==="end"&&(s=!1),s===null)return;n.result=s,n.units=s?n.odds/100:-1,this.props.push(n),this.activeProp=null;let r=this.$("h-offer");r.className="offer "+(s?"won":"lost"),r.innerHTML=`<small>${s?"PROP CASHED":"PROP LOST"}</small><b>${oe(n.text)}</b><span class="odds">${s?"+"+n.units.toFixed(1):"-1.0"}u</span>`,s&&(this.addHype(0,40),Ut("cash")),clearTimeout(this.offerHide),this.offerHide=setTimeout(()=>{!this.offer&&!this.activeProp&&(r.hidden=!0)},2200),this.offerT=Qt(16,26)}finish(){if(this.phase==="final")return;this.propEvent("end",{}),this.phase="final",this.phaseT=2.6,this.slowT=1.2,Ut("buzzer"),Oa(!1),Fa(!1);let t=this.score[0]>this.score[1];Ee(t?"BALLGAME!":"FINAL",`${this.names[0]} ${this.score[0]} \xB7 ${this.names[1]} ${this.score[1]}`,t?pe.green:pe.red,2.4),t&&Ut("win");for(let e of this.P)e.bob.setExpr(e.team===(t?0:1)?"happy":"sad",5)}result(){let t=this.cfg,e=this.score[0],n=this.score[1],s=e>n,r=0,a=[],o=null,l=!1,c=!1;if(t.pick){o=this.covers(t.pick.side,e,n);let f=o?t.pick.stake:-t.pick.stake;r+=f,a.push(["PICK",t.pick.label,o?"COVERED":"LOST",(f>0?"+":"")+f.toFixed(1)+"u",o]),l=!o&&this.lastFlip!==null&&this.time-this.lastFlip<14;let d={home:"away",away:"home",over:"under",under:"over"};o&&t.pick.side===d[this.G.tipSide||this.G.save.tip]&&(c=!0,r+=1,a.push(["FADE","Faded Vig's tip of the day","CASHED","+1.0u",!0]))}for(let f of this.props)r+=f.units,a.push(["PROP",`${f.text} (+${f.odds})`,f.result?"CASHED":"LOST",(f.units>0?"+":"")+f.units.toFixed(1)+"u",f.result]);this.parlayHits&&a.push(["PARLAY","Three + steal + assist","HIT"+(this.parlayHits>1?" x"+this.parlayHits:""),"SUPER SHOT",!0]);let h=r>=4?"LOCK OF THE NIGHT":r>0?"SHARP PLAY":r===0?s?"NO SWEAT":"NO ACTION":s?"SQUARE PLAY":"FADE THIS MAN",u=this.P.slice().sort((f,d)=>d.pts-f.pts)[0];return{won:s,hs:e,as:n,names:this.names,score:`${e}-${n}`,rows:a,net:r,grade:h,badBeat:l,fade:c,stats:this.stats,mvp:u.def,mvpPts:u.pts,line:`${this.names[0]} ${t.spread>0?"+":""}${t.spread} \xB7 O/U ${t.total}`,home:t.home,away:t.away}}setupInbound(t,e){let n=this.dir(t),s=this.P.filter(l=>l.team===t),r=this.P.filter(l=>l.team!==t),a=t===0&&this.me&&this.me.team===0?this.me:s.slice().sort((l,c)=>this.stat(c,"handles")-this.stat(l,"handles"))[0],o=s.find(l=>l!==a);if(a.target={x:-n*8.5,z:0},o.target={x:-n*2.5,z:Math.random()<.5?3.6:-3.6},r[a.i].target={x:-n*4.5,z:0},r[o.i].target={x:n*.5,z:o.target.z*.8},this.inbounder=a,e)for(let l of this.P)l.pos.x=l.target.x,l.pos.z=l.target.z,l.vel.x=l.vel.z=0}startLive(){for(let t of this.P)t.pos.x=t.target.x,t.pos.z=t.target.z,t.vel.x=t.vel.z=0,t.st="ok",t.y=0,t.vy=0,t.target=null,t.bob.fallT=0,t.bob.armsUpT=0,t.ai.spotT=0;this.possT=99,this.give(this.inbounder),this.phase="live"}aiHandler(t,e){let n=this.hoop(t.team),s=ae(t.pos,n),[,r]=this.nearestOpp(t),a=t.ai,o=mr(n.x-t.pos.x,n.z-t.pos.z);if(r<1.9&&s>2.4&&(o=mr(o.x*.55-o.z*a.side*.85,o.z*.55+o.x*a.side*.85),Math.abs(t.pos.z)>We-1.2&&(a.side=-a.side)),a.hold>0&&(a.hold-=e,o={x:0,z:0}),a.t-=e,a.t<=0&&this.possT>.6){if(a.t=.3+Qt(.15),Math.random()<.12&&(a.side=-a.side),this.hype[t.team]>=100&&Math.random()<.5)return this.signature(t),o;if(s<3.1)return this.drive(t),o;let l=this.stat(t,"shooting"),c=r>2.1?1.7:r>1.4?.9:.35,h=0;if(s>gi&&s<=8.1?h=(.06+l*.05)*c*(l>=7?1.3:.6):s<=gi&&(h=(.05+l*.012)*c*(this.stat(t,"dunking")>=7?.5:1)),this.shotClock<3&&(h=Math.max(h,.6)),(this.shotClock<1.3||this.half&&this.clock<1.5)&&(h=1),(this.locked[t.team]||this.superShot[t.team])&&s<8.6&&(h=1),Math.random()<h)return this.startShot(t),o;let u=this.mate(t),[,f]=this.nearestOpp(u);if(u.st==="ok"&&f>2&&(ae(u.pos,n)<s-1||r<1.3)&&Math.random()<.22)return this.pass(t,u),o;r<1.7&&t.jukeCd<=0&&Math.random()<.14&&this.juke(t,-o.z*a.side,o.x*a.side),l>=7&&s<8&&s>6.85&&r>1.3&&Math.random()<.6&&(a.hold=.6)}return{x:o.x,z:o.z,sprint:s>5&&t.stamina>.3}}aiOffBall(t,e){let n=t.ai,s=this.dir(t.team),r=this.ball.holder||this.ball.pass&&this.ball.pass.to||t;if(n.spotT-=e,n.spotT<=0||!n.spot){n.spotT=Qt(2,3.6);let c=null,h=-1e9;for(let u of Ug){let f={x:s*u[0],z:u[1]},d=Math.min(ae(f,r.pos),7)+Qt(2.5);for(let g of this.opps(t))d+=Math.min(ae(f,g.pos),3)*.6;d>h&&(h=d,c=f)}n.spot=c}let a=n.spot.x-t.pos.x,o=n.spot.z-t.pos.z,l=Math.hypot(a,o);if(l<.4){let c=this.hoop(t.team);return t.bob.faceTarget=Math.atan2(r.pos.x-t.pos.x,r.pos.z-t.pos.z)||Math.atan2(c.x-t.pos.x,0),{x:0,z:0}}return{x:a/l,z:o/l,sprint:l>6&&t.stamina>.4}}aiDefend(t,e){let n=this.ball,s=n.holder,r=this.hoop(1-t.team);if(n.state==="loose"){let p=n.pos.x-t.pos.x,m=n.pos.z-t.pos.z,_=Math.hypot(p,m)||1;return _<1.3&&n.pos.y>2&&n.vel.y<0&&t.y===0&&Math.random()<.08&&(t.vy=5.2),{x:p/_,z:m/_,sprint:t.stamina>.2}}let a=this.P.find(p=>p.team!==t.team&&p.i===t.i),o=a===s||n.pass&&n.pass.to===a,l=mr(r.x-a.pos.x,r.z-a.pos.z),c=o?1.3-this.stat(t,"defense")*.04:2.3,h=a.pos.x+l.x*c,u=a.pos.z+l.z*c;!o&&s&&(h=hn(h,s.pos.x,.22),u=hn(u,s.pos.z,.22));let f=h-t.pos.x,d=u-t.pos.z,g=Math.hypot(f,d);if(t.bob.faceTarget=Math.atan2(a.pos.x-t.pos.x,a.pos.z-t.pos.z),o&&s){let p=ae(t.pos,s.pos);s.st==="windup"&&p<2&&!t.ai.jumped&&t.y===0&&(t.ai.jumped=!0,Math.random()<.22+this.stat(t,"defense")*.05&&(t.vy=5.4)),p<1.45&&t.stealCd<=0&&s.st==="ok"&&(Math.random()<.18+(t.team===1?this.diff*.05:0)?this.trySteal(t,s):t.stealCd=Qt(.7,1.3))}if(g<.15)return{x:0,z:0};let x=Math.min(1,g/.8);return{x:f/g*x,z:d/g*x,sprint:g>3&&t.stamina>.3}}userControl(t,e){let n=te.axis(),s=this.ball;if(te.pressed("KeyF")&&this.signature(t),s.holder===t){let r=this.hoop(0),a=ae(t.pos,r);te.pressed("Space")?a<3.4&&(te.sprint()||a<2.1)&&t.pos.x<r.x+.4?this.drive(t):(this.startShot(t),this.userShot=!0):te.pressed("KeyE")&&this.pass(t,this.mate(t));let o=te.doubleTap();if(o)this.juke(t,o.x,o.z);else if(te.pressed("KeyQ")){let l=n.m>.2?n:{x:1,z:0};this.juke(t,l.x,l.z)}}else(this.poss===1||s.state==="loose")&&(te.doubleTap(),te.pressed("Space")&&t.y===0&&t.jumpCd<=0&&(t.vy=5.6,t.jumpCd=.9),te.pressed("KeyQ")&&this.trySteal(t,s.holder&&s.holder.team===1?s.holder:null),te.pressed("KeyE")&&this.poss===1&&(this.me=this.mate(t),Ut("click")));return{x:n.x,z:n.z,sprint:te.sprint()}}update(t){let e=this.ball;if(this.shake=Math.max(0,this.shake-t*2.2),!this.auto&&te.pressed("KeyT")&&this.takeOffer(),this.hitstop>0){this.hitstop-=t,this.render(t,0);return}let n=Math.min(4,Math.max(1,Math.ceil(t/(1/30))));for(let s=0;s<n&&!this.done&&(this.step(t/n),!(this.hitstop>0));s++);this.render(t,t/n)}step(t){let e=this.ball,n=Math.min(t,1/30);if(this.slowT>0&&(this.slowT-=t,n*=.3),this.time+=n,this.phase==="intro"||this.phase==="dead"||this.phase==="half"){this.phaseT-=n;for(let s of this.P)if((s.st==="windup"||s.st==="air")&&(s.st="ok",s.bob.armsUpT=0),s.vy-=Wa*n,s.y+=s.vy*n,s.y<=0&&(s.y=0,s.vy=0),s.target){let r=s.target.x-s.pos.x,a=s.target.z-s.pos.z,o=Math.hypot(r,a),l=Math.min(9,o/Math.max(.2,this.phaseT-.3));o>.1?(s.pos.x+=r/o*l*n,s.pos.z+=a/o*l*n,s.bob.faceTarget=Math.atan2(r,a),s.spd=l):s.spd=0}e.state==="dead"||e.state==="loose"?this.ballPhysics(n,!1):e.state==="held"&&e.holder&&this.holdBall(n),this.phaseT<=0&&(this.phase==="half"&&(this.half=2,this.clock=au),this.startLive())}else if(this.phase==="final"){this.phaseT-=t,this.ballPhysics(n,!1);for(let s of this.P)s.spd=0,s.vy-=Wa*n,s.y+=s.vy*n,s.y<=0&&(s.y=0,s.vy=0);this.phaseT<=0&&!this.done&&(this.done=!0,this.G.showSlip(this.result()))}else this.live(n)}live(t){let e=this.ball;this.possT+=t,this.sudden||(this.clock-=t),e.state==="held"&&(this.shotClock-=t);for(let n of[0,1])this.sharpT[n]>0&&(this.sharpT[n]-=t);if(this.propEvent("time",{}),!this.activeProp&&!this.auto&&(this.offerT-=t,this.offer&&this.time>this.offer.until&&(this.offer=null,this.$("h-offer").hidden=!0,this.offerT=Qt(14,22)),!this.offer&&this.offerT<=0&&this.clock>12&&this.makeOffer()),e.state==="loose"){let n=this.P.filter(r=>r.team===0),s=n.find(r=>r!==this.me);(this.me.team!==0||ae(s.pos,e.pos)+1.5<ae(this.me.pos,e.pos))&&(this.me=s)}this.me.team!==0&&(this.me=this.P[0]);for(let n of this.P){n.stealCd-=t,n.jukeCd-=t,n.jumpCd-=t,n.juiceT>0&&(n.juiceT-=t,n.juiceT<=0&&n!==this.me&&n.bob.setRing(null));let s={x:0,z:0,sprint:!1};if(n.st==="down"||n.st==="frozen")n.stT-=t,n.bob.fallT=n.st==="down"?1:0,n.stT<=0&&(n.st="ok",n.bob.fallT=0);else if(n.st==="air"){n.stT+=t;let r=se(n.stT/.48);n.pos.x=hn(n.from.x,n.to.x,r),n.pos.z=hn(n.from.z,n.to.z,r),n.y=Math.sin(r*Math.PI*.62)*1.5,n.vy=0,r>=1&&this.finishDunk(n)}else n.st==="windup"?(n.stT+=t,n.charge=n.stT/.75,n.bob.armsUpT=1,this.isUser(n)?(!te.down("Space")||n.charge>=1.12)&&this.release(n,n.charge>=1.12?"bad":this.timing(n,n.charge)):n.charge>=n.aiRel&&this.release(n,n.aiQ)):this.isUser(n)?s=this.userControl(n,t):e.holder===n?s=this.aiHandler(n,t):e.state==="loose"?s=this.aiDefend(n,t):this.poss===n.team?s=this.aiOffBall(n,t):s=this.aiDefend(n,t);if(n.st==="ok"||n.st==="windup"){let r=s.sprint&&n.stamina>.04&&(s.x||s.z),a=this.stat(n,"speed"),[,o]=e.holder===n?this.nearestOpp(n):[null,9],l=(3.5+a*.27)*(r?1.42:1)*(e.holder===n?o<1.25?.72:.93:1)*(this.sharpT[1-n.team]>0&&this.poss!==n.team?.85:1);n.st==="windup"&&(l=0),r?n.stamina=Math.max(0,n.stamina-t*.3/(.7+a*.06)):n.stamina=Math.min(1,n.stamina+t*.17),n.sprinting=r,n.vel.x=Je(n.vel.x,s.x*l,11,t),n.vel.z=Je(n.vel.z,s.z*l,11,t),n.dash&&(n.dash.t-=t,n.vel.x=n.dash.x*13,n.vel.z=n.dash.z*13,n.dash.t<=0&&(n.dash=null)),n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t,n.st==="ok"&&Math.abs(n.vel.x)+Math.abs(n.vel.z)>.6&&(e.holder===n||this.poss===n.team||e.state==="loose"||this.isUser(n))&&(n.bob.faceTarget=Math.atan2(n.vel.x,n.vel.z))}n.st!=="air"&&(n.vy-=Wa*t,n.y+=n.vy*t,n.y<=0&&(n.y=0,n.vy=0)),n.pos.x=se(n.pos.x,-Te-.6,Te+.6),n.pos.z=se(n.pos.z,-We-.4,We+.4),n.spd=Math.hypot(n.vel.x,n.vel.z)}for(let n=0;n<4;n++)for(let s=n+1;s<4;s++){let r=this.P[n],a=this.P[s];if(r.st==="air"||a.st==="air")continue;let o=a.pos.x-r.pos.x,l=a.pos.z-r.pos.z,c=Math.hypot(o,l);if(c<.8&&c>.001){let h=(.8-c)/2;r.pos.x-=o/c*h,r.pos.z-=l/c*h,a.pos.x+=o/c*h,a.pos.z+=l/c*h}}if(e.state==="held")this.holdBall(t);else if(e.state==="shot"){let n=e.shot;n.t+=t;let s=se(n.t/n.T);if(e.pos.lerpVectors(n.from,n.to,s),e.pos.y+=4*n.H*s*(1-s),n.trail&&this.emitTrail(n.trail),n.make&&!n.slowed&&s>.5&&(this.sudden||this.score[n.shooter.team]+n.pts>=Va)&&(n.slowed=!0,this.slowT=.9,this.punch=1),s>=1){let r=n.shooter;if(n.make)Ut("swish"),this.netT=.4,e.state="dead",e.vel.set(0,-4,0),this.scored(r,n.pts,n.trail===4054122?"super":n.kind);else{Ut("rim"),this.missed(r),e.state="loose",e.t=0,this.shotClock=pr;let a=-Math.sign(n.to.x),o=Qt(-1.2,1.2);e.vel.set(a*Math.cos(o)*Qt(2.2,4.8),Qt(2.5,5.5),Math.sin(o)*Qt(2.2,4.8))}}}else if(e.state==="pass"){let n=e.pass;n.t+=t;let s=se(n.t/n.T),r=n.to.pos;if(e.pos.set(hn(n.from.x,r.x,s),hn(n.from.y,1.3+n.to.y,s)+Math.sin(s*Math.PI)*.5,hn(n.from.z,r.z,s)),s>=1){n.stolen?(Ut("steal"),Ee("PICKED OFF!",n.to.def.name,this.col[n.to.team],1),this.addHype(n.to.team,20,n.to),n.to.team===0&&(this.stats.steals++,this.parlayLeg("steal")),this.propEvent("steal",{team:n.to.team})):e.lastPass={from:n.passer,to:n.to,time:this.time};let a=e.lastPass;this.give(n.to),e.lastPass=n.stolen?null:a}}else this.ballPhysics(t,!0);if(this.phase==="live"&&this.shotClock<=0&&e.state==="held"){Ut("buzzer",.6),Ee("SHOT CLOCK",`${this.names[1-this.poss]} ball`,"#fff",1.1);let n=1-this.poss;e.holder.streak=Math.min(0,e.holder.streak),this.phase="dead",this.phaseT=1.5,this.me=this.P[0],this.setupInbound(n),this.inbounder.team===0&&(this.me=this.inbounder),e.state="dead",e.holder=null,e.vel.set(0,0,0)}this.phase==="live"&&this.clock<=0&&!this.sudden&&e.state!=="shot"&&(this.clock=0,this.half===1?(Ut("buzzer"),Ee("HALFTIME",`${this.names[0]} ${this.score[0]} \xB7 ${this.names[1]} ${this.score[1]}`,pe.gold,2.4),this.phase="half",this.phaseT=2.8,e.state="dead",e.holder=null,this.setupInbound(1)):this.score[0]===this.score[1]?(this.sudden=!0,Ut("buzzer"),Ee("SUDDEN DEATH","Next bucket wins",pe.red,2)):this.finish()),!this.auto&&!this.G.save.w&&!this.G.save.l&&(this.hintT-=t,this.hintT<=0&&this.hintI<ou.length&&($n(ou[this.hintI++],4.6),this.hintT=5.4))}holdBall(t){let e=this.ball,n=e.holder;if(!n)return;let s=n.bob.face,r=Math.sin(s),a=Math.cos(s);if(n.st==="windup"||n.st==="air")e.pos.set(n.pos.x+r*.42,n.y+1.98*n.bob.ht,n.pos.z+a*.42),this.dribB=-1;else{let o=this.time*(7+n.spd*.6),l=Math.abs(Math.sin(o));this.phase==="live"&&l<.12&&!this.bounced?(Ut("bounce",.35),this.bounced=!0):l>.5&&(this.bounced=!1),e.pos.set(n.pos.x+r*.34+a*.3,.2+l*.72*n.bob.ht,n.pos.z+a*.34-r*.3),this.dribB=l}(this.locked[n.team]||this.superShot[n.team])&&Math.random()<.5&&this.emitTrail(this.superShot[n.team]?4054122:16762161)}ballPhysics(t,e){let n=this.ball;if(n.t+=t,n.vel.y-=Wa*t,n.pos.addScaledVector(n.vel,t),n.pos.y<.19&&(n.pos.y=.19,Math.abs(n.vel.y)>1.2&&Ut("bounce",.4),n.vel.y=Math.abs(n.vel.y)*.62,n.vel.x*=.82,n.vel.z*=.82,n.vel.y<.6&&(n.vel.y=0)),Math.abs(n.pos.x)>Te+.3&&(n.pos.x=Math.sign(n.pos.x)*(Te+.3),n.vel.x*=-.6),Math.abs(n.pos.z)>We+.2&&(n.pos.z=Math.sign(n.pos.z)*(We+.2),n.vel.z*=-.6),!(!e||n.state!=="loose")){if(n.t>.22){for(let s of this.P.slice().sort((r,a)=>ae(r.pos,n.pos)-ae(a.pos,n.pos)))if(s.st==="ok"&&ae(s.pos,n.pos)<.95&&n.pos.y<2+s.y){let r=this.poss;this.give(s),s.team!==r&&(this.shotClock=pr,this.possT=0),Ut("pop",.5);return}}if(n.t>7){let s=this.P.slice().sort((r,a)=>ae(r.pos,n.pos)-ae(a.pos,n.pos))[0];this.give(s)}}}emitTrail(t){let e=this.trail.geometry.attributes.position,n=this.trailI=(this.trailI+1)%this.trailN,s=this.ball.pos;e.setXYZ(n,s.x+Qt(-.12,.12),s.y+Qt(-.12,.12),s.z+Qt(-.12,.12)),this.trailLife[n]=.5,this.trailMat.color.setHex(t),e.needsUpdate=!0}render(t,e){let n=this.ball,s=this.me;for(let p of this.P){p.bob.group.position.set(p.pos.x,0,p.pos.z),p.bob.y=p.y/p.bob.ht,p.st==="frozen"?p.bob.head.rotation.y=Math.sin(this.time*40)*.2:p.bob.head.rotation.y=0;let m=p===s&&!this.auto;p.bob.drib=n.holder===p&&n.state==="held"?this.dribB===void 0?-1:this.dribB:-1,p.bob.guard=this.phase==="live"&&p.team!==this.poss&&p.st==="ok"&&p.y<.05?1:0,p.bob.setRing(m?"#ffffff":p.juiceT>0?pe.green:null),(e>0||this.phase!=="live")&&p.bob.update(e||t*.2,p.spd||0)}for(let p of this.crowd)p.cheerT>0&&(p.cheerT-=t),p.armsUpT=p.cheerT>0?1:0,p.y=p.cheerT>0?Math.abs(Math.sin(this.time*12+p.t))*.3:0,p.update(t,0);n.mesh.position.copy(n.pos),n.mesh.rotation.x+=t*6,n.mesh.rotation.z+=t*3,this.ballShadow.position.set(n.pos.x,.03,n.pos.z);let r=n.holder&&(this.locked[n.holder.team]||this.superShot[n.holder.team]);this.ballMat.emissive.setHex(r?this.superShot[n.holder.team]?1866293:9071104:0);let a=this.trail.geometry.attributes.position,o=!1;for(let p=0;p<this.trailN;p++)this.trailLife[p]>0&&(this.trailLife[p]-=t,a.setY(p,a.getY(p)+t*.8),this.trailLife[p]<=0&&a.setY(p,-100),o=!0);o&&(a.needsUpdate=!0),this.netT>0&&(this.netT-=t);for(let p of this.nets)p.scale.y=1+(this.netT>0&&Math.sign(p.position.x)===Math.sign(n.pos.x)?Math.sin(this.netT*30)*.25:0);let l=this.sharpT[0]>0&&!this.auto;this.P.filter(p=>p.team===1).forEach((p,m)=>{let _=this.ghosts[m];_.visible=l,l&&_.position.set(p.pos.x+p.vel.x*.7,.04,p.pos.z+p.vel.z*.7)});let c=Re.w/Re.h,h=Math.max(1,1.5/c);this.zoom=Je(this.zoom,this.phase==="live"?se((Math.abs(n.pos.x)-3.5)/4.5):.3,2.2,t),this.punch=Math.max(0,this.punch-t*1.3);let u=se(this.zoom+this.punch*.35,0,1.3);this.camX=Je(this.camX,se(n.pos.x*hn(.72,.86,this.zoom),-9,9),3.5,t);let f=this.shake*.35;this.camera.position.set(this.camX+Qt(-f,f),hn(11.5,9.2,u)*h+Qt(-f,f),hn(21,16.4,u)*h),this.camera.lookAt(this.camX,1,-.8);let d=n.holder,g=d&&d===s&&!this.auto?this.mate(s):null,x=!1;if(g&&this.phase==="live"){let[,p]=this.nearestOpp(g),m=this.hoop(0);x=p>2.4&&ae(g.pos,m)<8.5,x&&this.openTag.position.set(g.pos.x,3.3,g.pos.z)}this.openTag.visible=x,_n.update(this.camera),this.updateHud()}updateHud(){let t=this.$,e=this.me,n=this.score,s=(d,g)=>{let x=t(d);x._v!==g&&(x._v=g,x.textContent=g)};s("h-s0",n[0]),s("h-s1",n[1]);let r=Math.max(0,Math.ceil(this.clock));s("h-clk",this.sudden?"OT":`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`),s("h-half",this.sudden?"NEXT BUCKET WINS":this.half===1?"1ST HALF":"2ND HALF"),s("h-shot",Math.max(0,Math.ceil(this.shotClock))),t("h-shot").classList.toggle("low",this.shotClock<4);let a=this.liveLine,o=a!==this.cfg.spread;if(s("h-line",`LINE  ${this.names[0]} ${a>0?"+":""}${a.toFixed(1)}   O/U ${this.cfg.total}`),t("h-line").classList.toggle("moved",o),s("h-units",`${this.G.save.units.toFixed(1)}u`),this.hudMe!==e.def){this.hudMe=e.def;let d=t("h-av");d.innerHTML="",d.appendChild(or(e.def,44)),s("h-name",e.def.name),s("h-ab",Ts(e.def))}t("h-stam").style.width=e.stamina*100+"%",t("h-hype").style.width=this.hype[0]+"%";let l=this.hype[0]>=100;t("h-hype").parentNode.classList.toggle("full",l),s("h-hypel",l?"PRESS F: "+Ts(e.def):"HYPE");for(let d of["three","steal","assist"])t("c-"+d).classList.toggle("on",this.parlay[d]);let c=document.getElementById("tb-f");c&&c.classList.toggle("ready",l);let h=t("h-meter");if(e.st==="windup"&&!this.auto){h.hidden=!1;let d=new P(e.pos.x,3.3,e.pos.z).project(this.camera);h.style.transform=`translate(-50%,-100%) translate(${(d.x*.5+.5)*Re.w}px,${(-d.y*.5+.5)*Re.h}px)`;let g=this.greenHalf(e),x=1.12;t("h-green").style.left=(.8-g)/x*100+"%",t("h-green").style.width=2*g/x*100+"%",t("h-fill").style.width=Math.min(1,e.charge/x)*100+"%"}else h.hidden=!0;let u=e.streak<=-3,f=e.streak>=3;t("h-tint").className="tint"+(u?" cold":f?" hot":"")}dispose(){Oa(!1),Fa(!1),this.hud.remove(),_n.clear(),$n(null),clearTimeout(this.sigT),clearTimeout(this.offerHide),this.scene.traverse(t=>{t.geometry&&t.geometry._shared})}};var cu="hoopLegends.v1",rt={roster:null,you:null,mode:"title",lounge:null,court:null,speed:1,paused:!1,cheats:{big:new Set,all:!1,night:!1},save:{units:10,w:0,l:0,slips:[],eggs:{},tip:null,best:0,badBeats:0},headScale(i){return this.cheats.all||this.cheats.big.has(i.id)?1.75:1},persist(){Nl(cu,this.save)}};window.__hoop=rt;async function Dg(){let i=Xh;try{let t=await fetch("players.json",{cache:"no-store"});if(t.ok){let e=await t.json();e&&Array.isArray(e.players)&&e.players.length>=4&&(i=e)}}catch{}return i.crew=Object.assign({title:"HOOP LEGENDS",homeName:"LOCKS",awayName:"FADES",homeColor:pe.home,awayColor:pe.away,startingUnits:10},i.crew||{}),i.players.forEach((t,e)=>{t.id=t.id||"p"+e,t.name=(t.name||t.id).toUpperCase(),t.look=t.look||{},t.stats=Object.assign({shooting:6,dunking:6,handles:6,speed:7,defense:6,clutch:7,trashTalk:7},t.stats||{}),t.lines=t.lines&&t.lines.length?t.lines:["Lock it in."],t.ability=t.ability||"lock",t._jersey=i.crew.homeColor}),i}function Ng(){rt.mode="title",sr("off");let i=Ft("div","title");i.innerHTML=`<div class="logo"><span>${oe(rt.roster.crew.title.split(" ")[0]||"HOOP")}</span><span class="l2">${oe(rt.roster.crew.title.split(" ").slice(1).join(" ")||"LEGENDS")}</span></div>
  <p class="tag">Walk into the Lounge. Talk trash. Then settle it on the court.</p>`,i.appendChild(In("Walk in <kbd>Enter</kbd>","primary",_r)),i.appendChild(Ft("p","fine","Move: WASD or arrows \xB7 Talk / enter: E \xB7 Mute: M \xB7 Units are fake, no real money")),i.appendChild(Ft("p","fine psst",'psst: type a nickname here. Or "bighead". Or "night".')),Rs(i)}function Og(){let i=te.typed();if(!i)return;let t=null;if(i.endsWith("bighead"))rt.cheats.all=!rt.cheats.all,t=rt.cheats.all?"BIG HEAD MODE":"Normal heads";else if(i.endsWith("night"))rt.cheats.night=!rt.cheats.night,t=rt.cheats.night?"NIGHT MODE":"Lights on";else for(let e of rt.roster.players)(i.endsWith(e.id.toLowerCase())||i.endsWith(e.name.toLowerCase().replace(/^the /,"")))&&(rt.cheats.big.has(e.id)?rt.cheats.big.delete(e.id):rt.cheats.big.add(e.id),t=`${e.name}: giant head ${rt.cheats.big.has(e.id)?"ON":"off"}`);t&&(te.clearTyped(),Ut("power"),Ee(t,"Cheat code",pe.gold,1.4),rt.lounge=new dr(rt),rt.save.eggs.cheat=1,rt.persist())}function _r(i){Na(),pi(),_n.clear(),ur(null),rt.court&&(rt.court.dispose(),rt.court=null),rt.mode="lounge",sr("lounge"),rt.lounge.enter(i&&i.won!==void 0?i:null)}rt.enterLounge=_r;function Fg(i){return`<div class="stats">${Zh.map(t=>`<div><i>${Jh[t]}</i><span class="sbar"><b style="width:${i.stats[t]*10}%"></b></span><em>${i.stats[t]}</em></div>`).join("")}</div>`}function hu(i,t){let e=Ft("div","pcardx"+(t?" small":""));e.appendChild(or(i,t?54:72));let n=Ft("div","pbody",`<b>${oe(i.name)}</b>${t?"":`<p>${oe(i.bio||"")}</p>`}${Fg(i)}<div class="abil"><span>${oe(Ts(i))}</span>${t?"":" "+oe(Ba(i))}</div>${t||!i.worstPick?"":`<p class="worst">Worst pick: ${oe(i.worstPick)}</p>`}`);return e.appendChild(n),e}rt.showCards=()=>{let i=Ft("div","cardgrid");rt.roster.players.forEach(t=>i.appendChild(hu(t))),Cs("LOCKER ROOM",i)};function lu(i,t){let e=ar(i)-ar(t),n=Math.round(Math.abs(e)*.3)+.5,s=[...i,...t].reduce((r,a)=>r+a.stats.shooting+a.stats.dunking*.6-a.stats.defense*.5,0);return{spread:e>=0?-n:n,total:se(Math.round(36+(s-22)*.25),31,40)+.5}}rt.openMatchup=()=>{let i=rt.roster,t=i.players,e=rt.you,n=(e.beefs||[]).map(u=>t.find(f=>f.id===u)).filter(Boolean),s=t.filter(u=>u!==e&&!n.includes(u)),r=[e,s[0]||t[1],n[0]||s[1]||t[2],n[1]||s[2]||s[1]||t[3]];for(let u=0;u<4;u++)(r.indexOf(r[u])!==u||!r[u])&&(r[u]=t.find(f=>!r.includes(f)));let a=1,o=null,l=Ft("div","matchup"),c=()=>{let u=[r[0],r[1]],f=[r[2],r[3]],d=lu(u,f);l.innerHTML="<h1>THE MATCHUP</h1>";let g=Ft("div","teams");[0,1].forEach(A=>{let D=Ft("div","team",`<h3 style="color:${A?i.crew.awayColor:i.crew.homeColor}">${oe(A?i.crew.awayName:i.crew.homeName)}${A?"":" \xB7 YOU"}</h3>`);[0,1].forEach(v=>{let S=A*2+v,N=Ft("button","slot"+(a===S?" sel":""));N.type="button",N.appendChild(hu(r[S],!0)),S===0&&N.appendChild(Ft("span","youtag","YOU START WITH THE BALL")),N.addEventListener("click",()=>{a=S,Ut("click"),c()}),D.appendChild(N)}),g.appendChild(D),A||g.appendChild(Ft("div","vs","VS"))}),l.appendChild(g),l.appendChild(Ft("p","fine","Tap a slot above, then tap a player below to put them in it."));let x=Ft("div","pickgrid");t.forEach(A=>{let D=Ft("button","mini"+(r.includes(A)?" used":""));D.type="button",D.appendChild(or(A,40)),D.appendChild(Ft("span","",oe(A.name))),D.addEventListener("click",()=>{let v=r.indexOf(A);v>=0&&(r[v]=r[a]),r[a]=A,Ut("click"),c()}),x.appendChild(D)}),l.appendChild(x);let p=d.spread<0,m=Ft("div","linebox",`<small>PREGAME LINE</small><div class="ln"><b>${oe(i.crew.homeName)} ${d.spread>0?"+":""}${d.spread}</b><span>TOTAL ${d.total}</span></div><p>Lock a pick for 2 units. ${p?"You are the favorite.":"You are the underdog."} Bankroll: ${rt.save.units.toFixed(1)}u</p>`),_=[["home",`${i.crew.homeName} ${d.spread>0?"+":""}${d.spread}`],["away",`${i.crew.awayName} ${-d.spread>0?"+":""}${-d.spread}`],["over",`OVER ${d.total}`],["under",`UNDER ${d.total}`]],y=Ft("div","picks");_.forEach(([A,D])=>{let v=Ft("button","pk"+(o===A?" on":""),oe(D));v.type="button",v.addEventListener("click",()=>{o=o===A?null:A,Ut(o?"cash":"click"),c()}),y.appendChild(v)}),m.appendChild(y);let w={home:"the favorite",away:"the dog",over:"the over",under:"the under"};m.appendChild(Ft("p","fine",`Vig's tip of the day: ${w[rt.save.tip]}. Fade it and a winning pick pays +1 unit.`)),l.appendChild(m);let C=Ft("div","diff","<span>DIFFICULTY</span>");[["rookie","ROOKIE"],["pro","PRO"],["allstar","ALL-STAR"]].forEach(([A,D])=>{let v=Ft("button","pk"+((rt.save.diff||"pro")===A?" on":""),D);v.type="button",v.addEventListener("click",()=>{rt.save.diff=A,rt.persist(),Ut("click"),c()}),C.appendChild(v)}),l.appendChild(C);let T=Ft("div","row");T.appendChild(In("Back","ghost",()=>{pi()})),T.appendChild(In("TIP OFF <kbd>Enter</kbd>","primary",()=>h(d))),l.appendChild(T)},h=u=>{let f=[r[0],r[1]],d=[r[2],r[3]],g=u.spread<0?"home":"away",x=g==="home"?"away":"home";rt.tipSide=rt.save.tip==="home"?g:rt.save.tip==="away"?x:rt.save.tip;let p={home:`${i.crew.homeName} ${u.spread>0?"+":""}${u.spread}`,away:`${i.crew.awayName} ${-u.spread>0?"+":""}${-u.spread}`,over:`OVER ${u.total}`,under:`UNDER ${u.total}`};gr({home:f,away:d,bench:t.filter(m=>!r.includes(m)),diff:rt.save.diff||"pro",spread:u.spread,total:u.total,pick:o?{side:o,label:p[o],stake:2}:null})};l._enter=()=>h(lu([r[0],r[1]],[r[2],r[3]])),c(),Rs(l)};function gr(i){Na(),pi(),_n.clear(),ur(null),$n(null),rt.court&&rt.court.dispose(),rt.lastCfg=i,rt.court=new Xa(rt,i),rt.mode="court",rt.paused=!1,sr("court")}rt.startGame=gr;rt.showSlip=i=>{rt.lastResult=i;let t=rt.save;t.units=Math.round((t.units+i.net)*10)/10,i.won?t.w++:t.l++,t.slips=(t.slips||[]).concat([{won:i.won,score:i.score,net:i.net,grade:i.grade}]).slice(-12),t.best=Math.max(t.best||0,i.net),i.badBeat&&(t.badBeats=(t.badBeats||0)+1),t.tip=Ie(["home","away","over","under"]),rt.persist(),i.badBeat?Ut("trombone"):i.net>0&&Ut("cash"),sr("off");let e=640,n=Math.max(1,i.rows.length)*58,s=560+n,r=document.createElement("canvas");r.width=e*2,r.height=s*2;let a=r.getContext("2d");a.scale(2,2);let o=(p,m=900,_="system-ui, sans-serif")=>{a.font=`${m} ${p}px ${_}`};a.fillStyle=pe.paper,a.fillRect(0,0,e,s),a.fillStyle="#1f8f86";for(let p=0;p<e;p+=24)a.beginPath(),a.arc(p+12,0,9,0,7),a.fill(),a.beginPath(),a.arc(p+12,s,9,0,7),a.fill();a.fillStyle=pe.ink,a.textAlign="center",o(44,400,"Anton, Impact, system-ui"),a.fillText(rt.roster.crew.title+" \xB7 THE SLIP",e/2,78),o(15,700,"ui-monospace, monospace"),a.fillText(`SLIP #${String(t.w+t.l).padStart(4,"0")} \xB7 ${new Date().toLocaleDateString()}`,e/2,104),a.setLineDash([6,6]),a.strokeStyle=pe.ink,a.lineWidth=1.5,a.beginPath(),a.moveTo(40,124),a.lineTo(e-40,124),a.stroke(),o(30,900,"ui-monospace, monospace"),a.fillText(`FINAL  ${i.names[0]} ${i.hs} \xB7 ${i.names[1]} ${i.as}`,e/2,170),o(15,600,"ui-monospace, monospace"),a.fillText(`${i.home.map(p=>p.name).join(" + ")}  vs  ${i.away.map(p=>p.name).join(" + ")}`,e/2,198),a.fillText(`CLOSING LINE: ${i.line}`,e/2,220),a.beginPath(),a.moveTo(40,240),a.lineTo(e-40,240),a.stroke();let l=284;a.textAlign="left",i.rows.length||(o(18,600,"ui-monospace, monospace"),a.fillText("No action on this one. Scared money.",48,l),l+=58);for(let[p,m,_,y,w]of i.rows)o(13,800),a.fillStyle="#6a6a7a",a.fillText(p,48,l-14),o(18,700,"ui-monospace, monospace"),a.fillStyle=pe.ink,a.fillText(m.length>38?m.slice(0,37)+"\u2026":m,48,l+8),a.textAlign="right",o(18,900,"ui-monospace, monospace"),a.fillStyle=w?"#0f8a3c":"#c21f2f",a.fillText(`${_}  ${y}`,e-48,l+8),a.textAlign="left",l+=58;a.strokeStyle=pe.ink,a.beginPath(),a.moveTo(40,l-14),a.lineTo(e-40,l-14),a.stroke(),a.setLineDash([]),o(22,900,"ui-monospace, monospace"),a.fillStyle=pe.ink,a.fillText("NET",48,l+26),a.textAlign="right",a.fillStyle=i.net>=0?"#0f8a3c":"#c21f2f",a.fillText(`${i.net>=0?"+":""}${i.net.toFixed(1)} UNITS`,e-48,l+26),a.fillStyle=pe.ink,o(15,600,"ui-monospace, monospace"),a.fillText(`BANKROLL ${t.units.toFixed(1)}u`,e-48,l+50),a.textAlign="left";let c=i.stats;a.fillText(`3PT ${c.threes} \xB7 STL ${c.steals} \xB7 BLK ${c.blocks} \xB7 DNK ${c.dunks} \xB7 ANKLES ${c.ankles}`,48,l+84),a.fillText(`PLAYER OF THE GAME: ${i.mvp.name} (${i.mvpPts} pts)`,48,l+108),a.save(),a.translate(e/2,l+190),a.rotate(-.07);let h=i.net>0||i.net===0&&i.won;a.strokeStyle=a.fillStyle=h?"#0f8a3c":"#c21f2f",a.lineWidth=6,a.globalAlpha=.9,o(46,400,"Anton, Impact, system-ui"),a.textAlign="center";let u=a.measureText(i.grade).width+50;a.strokeRect(-u/2,-44,u,64),a.fillText(i.grade,0,4),a.restore(),i.badBeat&&(a.save(),a.translate(e-150,150),a.rotate(.2),a.strokeStyle=a.fillStyle="#c21f2f",a.lineWidth=5,o(32,400,"Anton, Impact, system-ui"),a.textAlign="center",a.strokeRect(-90,-30,180,44),a.fillText("BAD BEAT",0,4),a.restore()),a.fillStyle="#6a6a7a",a.textAlign="center",o(13,600),a.fillText("Units are fake. No real money. The beef is real.",e/2,s-34);let f=Ft("div","slipscreen"),d=new Image;d.alt=`Bet slip: ${i.grade}, net ${i.net.toFixed(1)} units`,d.className="slip";try{d.src=r.toDataURL("image/png")}catch{}f.appendChild(d);let g=Ft("div","slipside");g.appendChild(Ft("h2",i.won?"pos":"neg",i.won?"YOU WIN":"YOU LOSE")),i.badBeat&&g.appendChild(Ft("p","neg","BAD BEAT. You were covering until the very end.")),g.appendChild(In("Run it back <kbd>Enter</kbd>","primary",()=>gr(rt.lastCfg))),g.appendChild(In("Back to the Lounge","",()=>_r(i))),g.appendChild(In("Save slip image","ghost",()=>{try{let p=document.createElement("a");p.href=d.src,p.download="hoop-legends-slip.png",p.click()}catch{}x.hidden=!1}));let x=Ft("p","fine","If nothing downloaded, press and hold (or right-click) the slip and choose Save image.");x.hidden=!0,g.appendChild(x),f.appendChild(g),f._enter=()=>gr(rt.lastCfg),rt.court&&rt.court.dispose(),Rs(f),rt.mode="slip"};function kg(){if(rt.mode!=="court"||Ga())return;rt.paused=!0;let i=Ft("div","modal-wrap"),t=Ft("div","modal");t.appendChild(Ft("h2","","PAUSED")),t.appendChild(Ft("div","modal-body","<p>Move: WASD \xB7 Sprint: Shift \xB7 Shoot / jump: Space (hold and release in the green) \xB7 Pass / switch: E \xB7 Steal: Q \xB7 Juke: double-tap a direction \xB7 Signature: F \xB7 Take prop: T</p>"));let e=()=>{pi(),rt.paused=!1};t.appendChild(In("Resume <kbd>Esc</kbd>","primary",e)),t.appendChild(In("Quit to the Lounge","ghost",()=>{rt.paused=!1,_r(null)})),i.appendChild(t),i._close=e,Rs(i)}async function Bg(){let i=document.getElementById("app"),t=document.getElementById("gl");rt.roster=await Dg();try{await Promise.race([Promise.all([document.fonts.load("40px Anton"),document.fonts.load("700 20px Figtree")]),new Promise(l=>setTimeout(l,2500))])}catch{}rt.you=rt.roster.players.find(l=>l.you)||rt.roster.players[0];let e=Nl(cu);rt.save.units=rt.roster.crew.startingUnits||10,e&&Object.assign(rt.save,e),await Promise.race([Promise.all(rt.roster.players.map(iu)),new Promise(l=>setTimeout(l,1500))]);let n;try{n=new qs({canvas:t,antialias:!0,powerPreference:"high-performance"})}catch{document.getElementById("ui").innerHTML='<div class="screen title"><p class="tag">This browser could not start 3D graphics (WebGL). Try Chrome, Safari or Firefox on a recent phone or laptop.</p></div>';return}n.setPixelRatio(Math.min(devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=wl;let s=()=>{let l=i.getBoundingClientRect();Re.w=l.width,Re.h=l.height,n.setSize(l.width,l.height,!1);for(let c of[rt.lounge,rt.court])c&&(c.camera.aspect=l.width/l.height,c.camera.updateProjectionMatrix())};addEventListener("resize",s),Yh(document.getElementById("ui")),rt.lounge=new dr(rt),s(),Ng(),addEventListener("pointerdown",Na,{once:!0});let r=performance.now(),a=0;function o(l){requestAnimationFrame(o);let c=Math.min(.12,(l-r)/1e3);if(r=l,te.pressed("KeyM")&&$n(qh()?"Sound off":"Sound on",1.2),te.pressed("Escape")){let f=document.querySelector(".screen");f&&f._close?f._close():rt.mode==="court"?kg():f&&f.classList.contains("matchup")&&pi()}if(te.pressed("Enter")){let f=document.querySelector(".screen");rt.mode==="title"?_r():f&&f._enter&&f._enter()}let h,u;if(rt.mode==="court"&&rt.court){if(!rt.paused)for(let f=0;f<rt.speed;f++)rt.court.update(rt.speed>1?1/30:c);rt.court&&(h=rt.court.scene,u=rt.court.camera)}h||(rt.mode==="title"&&Og(),rt.lounge.update(c),rt.mode==="title"&&(a+=c*.12,rt.lounge.camera.position.set(Math.sin(a)*7,5.5,13),rt.lounge.camera.lookAt(Math.sin(a)*2,2,-4)),h=rt.lounge.scene,u=rt.lounge.camera),u.aspect!==Re.w/Re.h&&(u.aspect=Re.w/Re.h,u.updateProjectionMatrix()),n.render(h,u),te.endFrame()}requestAnimationFrame(o),document.getElementById("boot").remove(),rt.autoGame=(l=1)=>{let c=rt.roster.players;rt.speed=l,gr({home:[c[0],c[1]],away:[c[2],c[3]],bench:c.slice(4),spread:-1.5,total:30.5,pick:{side:"home",label:"test",stake:2},auto:!0})},location.hash==="#auto"&&rt.autoGame(1)}Bg();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
