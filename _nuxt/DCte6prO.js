import{d as Q,bk as nn,A as ln,B as en,S as O,ae as on,bl as H,bm as w,aX as tn,bn as rn,bo as an}from"./GbpiD7bQ.js";import{f as un}from"./BneCoJRQ.js";class C{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}C.prototype.property={};C.prototype.normal={};C.prototype.space=null;function _(n,e){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new C(o,t,e)}function L(n){return n.toLowerCase()}class v{constructor(e,o){this.property=e,this.attribute=o}}v.prototype.space=null;v.prototype.boolean=!1;v.prototype.booleanish=!1;v.prototype.overloadedBoolean=!1;v.prototype.number=!1;v.prototype.commaSeparated=!1;v.prototype.spaceSeparated=!1;v.prototype.commaOrSpaceSeparated=!1;v.prototype.mustUseProperty=!1;v.prototype.defined=!1;let sn=0;const u=b(),g=b(),F=b(),l=b(),d=b(),k=b(),m=b();function b(){return 2**++sn}const M=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:g,commaOrSpaceSeparated:m,commaSeparated:k,number:l,overloadedBoolean:F,spaceSeparated:d},Symbol.toStringTag,{value:"Module"})),D=Object.keys(M);class A extends v{constructor(e,o,t,r){let a=-1;if(super(e,o),I(this,"space",r),typeof t=="number")for(;++a<D.length;){const s=D[a];I(this,D[a],(t&M[s])===M[s])}}}A.prototype.defined=!0;function I(n,e,o){o&&(n[e]=o)}const cn={}.hasOwnProperty;function S(n){const e={},o={};let t;for(t in n.properties)if(cn.call(n.properties,t)){const r=n.properties[t],a=new A(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,o[L(t)]=t,o[L(a.attribute)]=t}return new C(e,o,n.space)}const V=S({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),N=S({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function q(n,e){return e in n?n[e]:e}function W(n,e){return q(n,e.toLowerCase())}const K=S({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:W,properties:{xmlns:null,xmlnsXLink:null}}),X=S({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:g,ariaAutoComplete:null,ariaBusy:g,ariaChecked:g,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:d,ariaCurrent:null,ariaDescribedBy:d,ariaDetails:null,ariaDisabled:g,ariaDropEffect:d,ariaErrorMessage:null,ariaExpanded:g,ariaFlowTo:d,ariaGrabbed:g,ariaHasPopup:null,ariaHidden:g,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:d,ariaLevel:l,ariaLive:null,ariaModal:g,ariaMultiLine:g,ariaMultiSelectable:g,ariaOrientation:null,ariaOwns:d,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:g,ariaReadOnly:g,ariaRelevant:null,ariaRequired:g,ariaRoleDescription:d,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:g,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),pn=S({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:W,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:d,accessKey:d,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:d,autoFocus:u,autoPlay:u,blocking:d,capture:null,charSet:null,checked:u,cite:null,className:d,cols:l,colSpan:null,content:null,contentEditable:g,controls:u,controlsList:d,coords:l|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:F,draggable:g,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:d,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:d,httpEquiv:d,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:d,itemRef:d,itemScope:u,itemType:d,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:d,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:d,required:u,reversed:u,rows:l,rowSpan:l,sandbox:d,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:g,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:g,width:l,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:d,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:g,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),dn=S({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:q,properties:{about:m,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:d,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:d,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),gn=/^data[-\w.:]+$/i,j=/-[a-z]/g,hn=/[A-Z]/g;function fn(n,e){const o=L(e);let t=e,r=v;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&gn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(j,yn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!j.test(a)){let s=a.replace(hn,mn);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=A}return new r(t,e)}function mn(n){return"-"+n.toLowerCase()}function yn(n){return n.charAt(1).toUpperCase()}const vn=_([N,V,K,X,pn],"html"),Un=_([N,V,K,X,dn],"svg"),E=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],T="default",Y=/^@|^v-on:/,$=/^:|^v-bind:/,Z=/^v-model/,bn=["select","textarea","input"],kn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),Bn=Q({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var s,i,c,h,f,p,y,B;const e=(c=(i=(s=nn())==null?void 0:s.appContext)==null?void 0:i.app)==null?void 0:c.$nuxt,o=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((h=e==null?void 0:e.$config)==null?void 0:h.public)||{},r={...(f=t==null?void 0:t.components)!=null&&f.prose&&n.prose!==!1?kn:{},...((p=t==null?void 0:t.components)==null?void 0:p.map)||{},...ln(((B=(y=n.data)==null?void 0:y.mdc)==null?void 0:B.components)||{}),...n.components},a=en(()=>{var z;const G=(((z=n.body)==null?void 0:z.children)||[]).map(x=>x.tag||x.type).filter(x=>!E.includes(x));return Array.from(new Set(G)).sort().join(".")});return await Rn(n.body,{tags:r}),{tags:r,contentKey:a,route:o}},render(n){var p,y;const{tags:e,tag:o,body:t,data:r,contentKey:a,route:s,unwrap:i}=n;if(!t)return null;const c={...r,tags:e,$route:s},h=o!==!1?U(o||((p=c.component)==null?void 0:p.name)||c.component||"div"):void 0;return h?O(h,{...(y=c.component)==null?void 0:y.props,class:n.class,...this.$attrs,key:a},{default:f}):f==null?void 0:f();function f(){return i?un(R(t,O,c,c).default(),typeof i=="string"?i.split(" "):["*"]):R(t,O,c,c).default()}}});function Sn(n,e,o,t={}){if(n.type==="text")return e(w,n.value);if(n.type==="comment")return e(rn,null,n.value);const r=n.tag,a=J(n,o.tags);if(n.tag==="binding")return Cn(n,e,o,t);const s=U(a);typeof s=="object"&&(s.tag=r);const i=xn(n,o);return e(s,i,R(n,e,o,{...t,...i}))}function Cn(n,e,o,t={}){var h,f;const r={...t,$document:o,$doc:o},a=/\.|\[(\d+)\]/,i=((h=n.props)==null?void 0:h.value.trim().split(a).filter(Boolean)).reduce((p,y)=>{if(p&&y in p)return typeof p[y]=="function"?p[y]():p[y]},r),c=(f=n.props)==null?void 0:f.defaultValue;return e(w,i??c??"")}function R(n,e,o,t){const a=(n.children||[]).reduce((i,c)=>{if(!Mn(c))return i[T].push(c),i;const h=Ln(c);return i[h]=i[h]||[],c.type==="element"&&i[h].push(...c.children||[]),i},{[T]:[]});return Object.entries(a).reduce((i,[c,h])=>(h.length&&(i[c]=()=>{const f=h.map(p=>Sn(p,e,o,t));return Tn(f)}),i),{})}function xn(n,e){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const s=t[a];if(Z.test(a)&&!bn.includes(o))return wn(a,s,r,e);if(a==="v-bind")return Pn(a,s,r,e);if(Y.test(a))return On(a,s,r,e);if($.test(a))return Dn(a,s,r,e);const{attribute:i}=fn(vn,a);return Array.isArray(s)&&s.every(c=>typeof c=="string")?(r[i]=s.join(" "),r):(r[i]=s,r)},{})}function wn(n,e,o,t){const r=p=>+p,a=p=>p.trim(),s=p=>p,i=n.replace(Z,"").split(".").filter(p=>p).reduce((p,y)=>(p[y]=!0,p),{}),c="value",h=i.lazy?"change":"input",f=i.number?r:i.trim?a:s;return o[c]=P(e,t),o.on=o.on||{},o.on[h]=p=>t[e]=f(p),o}function Pn(n,e,o,t){const r=P(e,t);return o=Object.assign(o,r),o}function On(n,e,o,t){return n=n.replace(Y,""),o.on=o.on||{},o.on[n]=()=>P(e,t),o}function Dn(n,e,o,t){return n=n.replace($,""),o[n]=P(e,t),o}const U=n=>typeof n=="string"?E.includes(n)?n:on(H(n),!1):n;function P(n,e){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof o>"u"?an(n):o}function Ln(n){let e="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||T}function Mn(n){return n.tag==="template"}function Tn(n){const e=[];for(const o of n){const t=e[e.length-1];o.type===w&&(t==null?void 0:t.type)===w?t.children=t.children+o.children:e.push(o)}return e}async function Rn(n,e){if(!n)return;const o=Array.from(new Set(t(n,e)));await Promise.all(o.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=U(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const s=r.tag;if(r.type==="text"||s==="binding"||r.type==="comment")return[];const i=J(r,a.tags),c=[];r.type!=="root"&&!E.includes(i)&&c.push(i);for(const h of r.children||[])c.push(...t(h,a));return c}}function J(n,e){var t;const o=n.tag;return!o||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?o:e[o]||e[H(o)]||e[tn(n.tag)]||o}export{Bn as _,E as a,fn as f,vn as h,L as n,Un as s};
