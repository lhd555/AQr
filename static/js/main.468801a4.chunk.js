(self.webpackJsonpaqr=self.webpackJsonpaqr||[]).push([[0],{1:function(e,t,r){e.exports={container:"cameraControle_container__zJKGL",collapse:"cameraControle_collapse__1djfp",Select:"cameraControle_Select__2PnWr",Option:"cameraControle_Option__HY9Lq",Selected:"cameraControle_Selected__28xc7",Open:"cameraControle_Open__mzjVl",Close:"cameraControle_Close__3dtcD",svg:"cameraControle_svg__1odyM"}},11:function(e,t,r){e.exports=function(){return new Worker(r.p+"eb244ba2c7c36bc4db0e.worker.js")}},12:function(e,t,r){e.exports=r(22)},17:function(e,t,r){},18:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),i=r.n(c),o=(r(17),r(18),r(2)),s=r(5),u=r.n(s),l=r(6),d=r(3),m=r(7),f=r(1),p=r.n(f);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=function(e){var t=e.children,r=e.onChange,c=e.value,i=Object(n.useState)(c),s=Object(d.a)(i,2),u=s[0],l=s[1];return a.a.createElement("div",{className:p.a.Select},t.map((function(e){var t=e.props,n=e.key,c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);return c.className=t.value===u?[p.a.Option,p.a.Selected].join(" "):p.a.Option,c.onClick=function(){l(t.value),r(t.value)},a.a.createElement("span",Object.assign({key:n},c),t.children)})))},h=function(e){var t=e.cameraList,r=e.selectedCameraId,n=e.selectCamera;return t.length?a.a.createElement(b,{className:p.a.select,value:r,onChange:function(e){return n(e)}},t.map((function(e){return a.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)}))):null},g=function(e){var t=e.constraints,r=e.selectedConstraint,n=e.selectConstraint;return t.length?a.a.createElement(b,{className:p.a.select,value:t.findIndex((function(e){return e.width===r.width})),onChange:function(e){return n(t[e])}},t.map((function(e,t){return a.a.createElement("option",{key:e.label,value:t},e.label)}))):null},O=function(e){var t=e.streamProps,r=e.cameraProps,c=Object(n.useState)(!1),i=Object(d.a)(c,2),o=i[0],s=i[1];return a.a.createElement("div",{className:[p.a.container,o?p.a.Open:p.a.Close].join(" ")},a.a.createElement("div",{style:{display:"inline-block",maxWidth:"100%"}},a.a.createElement(h,r),a.a.createElement(g,t)),a.a.createElement("span",{className:p.a.collapse,onClick:function(){return s(!o)}},o?a.a.createElement("svg",{className:p.a.svg,viewBox:"0 0 20 20"},a.a.createElement("path",{fill:"none",d:"M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"})):a.a.createElement("svg",{className:p.a.svg,viewBox:"0 0 20 20"},a.a.createElement("path",{fill:"none",d:"M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"}))))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}window.adapter=r(21);var w=[[480,360,"360p - 4:3"],[640,480,"480p - 4:3"],[1280,720,"720p - 16:9"],[1920,1080,"1080p - 16:9"]],C=function(e){var t=e.height,r=e.width;return w.filter((function(e){return e[0]>=r.min&&e[0]<=r.max&&e[1]>=t.min&&e[1]<=t.max})).map((function(e){return{label:e[2],width:e[0],height:e[1]}}))};var E=function(e,t){var r=e.cameraList,n=e.selectedCameraId,a=t.type,c=t.id,i=t.list;switch(a){case"SET_LIST":return{cameraList:i,selectedCameraId:i[0].deviceId};case"SELECT":return{cameraList:Object(m.a)(r),selectedCameraId:c};default:return{cameraList:Object(m.a)(r),selectedCameraId:n}}},y=function(e,t){var r=e.stream,n=e.constraints,a=e.permitted,c=e.selectedConstraint,i=t.type,o=t.newstream,s=t.newConstraints,u=t.newSelectedConstraint;switch(i){case"SET_STREAM":return{stream:o,permitted:!0,constraints:s,selectedConstraint:u};case"SET_STREAM_CONS":return{stream:r,permitted:a,constraints:n,selectedConstraint:u};case"RESET_STREAM":return{stream:null,permitted:!1,constraints:[],selectedConstraint:null};default:return{stream:r,permitted:a,constraints:n,selectedConstraint:c}}},S=function(e){var t=e.children,r=e.controle,c=Object(n.useReducer)(E,{cameraList:[],selectedCameraId:null}),i=Object(d.a)(c,2),s=i[0],m=s.selectedCameraId,f=s.cameraList,p=i[1],v=Object(n.useReducer)(y,{stream:null,permitted:!1,constraints:[],selectedConstraint:null}),b=Object(d.a)(v,2),h=b[0],g=h.stream,w=h.permitted,S=h.constraints,_=h.selectedConstraint,k=b[1],T=Object(n.useState)(null),x=Object(d.a)(T,2),L=x[0],P=x[1],R=Object(n.useCallback)((function(){P(null),g&&g.getTracks().forEach((function(e){return e.stop()}))}),[g]);return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("mediaDevices"in navigator&&"enumerateDevices"in navigator.mediaDevices)){e.next=13;break}return e.prev=1,e.next=4,navigator.mediaDevices.enumerateDevices();case 4:t=e.sent,r=[],t.forEach((function(e){if("videoinput"===e.kind){var t={label:e.label,deviceId:e.deviceId};r.push(t)}})),p({type:"SET_LIST",list:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),P(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[w]),Object(n.useEffect)((function(){R();var e=f.length&&m?m:void 0;e&&function(){var t=Object(l.a)(u.a.mark((function t(){var r,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)||!e){t.next=15;break}return t.prev=1,t.next=4,navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:e},width:480,height:360}});case 4:r=t.sent,n=r.getTracks()[0].getCapabilities?C(r.getTracks()[0].getCapabilities()):[],a=r.getTracks()[0].getSettings?r.getTracks()[0].getSettings():null,k({type:"SET_STREAM",newstream:r,newConstraints:n,newSelectedConstraint:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),P(t.t0);case 13:t.next=16;break;case 15:return t.abrupt("return",P(new Error("No camera device was found!")));case 16:case 17:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}()()}),[m,f.length]),Object(n.useEffect)((function(){g&&_&&g.getVideoTracks()[0].applyConstraints(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},_))}),[_,g]),L?a.a.createElement("span",null,L.message):a.a.createElement(a.a.Fragment,null,r&&a.a.createElement(O,{cameraProps:{cameraList:f,selectedCameraId:m,selectCamera:function(e){return p({type:"SELECT",id:e})}},streamProps:{constraints:S,selectedConstraint:_,selectConstraint:function(e){return k({type:"SET_STREAM_CONS",newSelectedConstraint:e})}}}),t({stream:g}))},_=r(11),k=r.n(_);r(20);function T(e,t,r,n){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.lineWidth=4,e.strokeStyle=n,e.stroke()}var x=function(e){var t=e.stream,r=e.style,c=e.crop,i=(e.onFrame,Object(n.useState)(c)),o=Object(d.a)(i,2),s=o[0],u=o[1],l=Object(n.useState)(null),m=Object(d.a)(l,2),f=m[0],p=m[1],v=Object(n.useRef)(null),b=Object(n.useRef)(null),h=Object(n.useRef)(null),g=Object(n.useRef)(new k.a),O=Object(n.useRef)(null),j=Object(n.useRef)(!0);return Object(n.useEffect)((function(){var e=function(e){j.current=!0;var t=e.data;if(t)return O.current=t;O.current=null};return console.log("creating"),g.current.onmessage=e,function(){g.removeEventListener("message",e)}}),[]),function(e,t){var r=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(t||0),i=function n(i){if(void 0!==a.current){var o=i-a.current;c.current<t?c.current++:(e(o),c.current=0)}a.current=i,r.current=requestAnimationFrame(n)};Object(n.useEffect)((function(){return r.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(r.current)}}),[])}((function(){var e=b.current.getContext("2d");if(v.current.readyState===v.current.HAVE_ENOUGH_DATA){b.current.height=v.current.videoHeight,b.current.width=v.current.videoWidth,e.drawImage(v.current,0,0,b.current.width,b.current.height);var t=e.getImageData(0,0,b.current.width,b.current.height);j.current&&(j.current=!1,g.current.postMessage({data:t.data.buffer,width:b.current.width,height:b.current.height},[t.data.buffer]));var r=h.current;r.height=v.current.videoHeight,r.width=v.current.videoWidth;var n=r.getContext("2d");O.current?(T(n,O.current.location.topLeftCorner,O.current.location.topRightCorner,"#FF3B58"),T(n,O.current.location.topRightCorner,O.current.location.bottomRightCorner,"#FF3B58"),T(n,O.current.location.bottomRightCorner,O.current.location.bottomLeftCorner,"#FF3B58"),T(n,O.current.location.bottomLeftCorner,O.current.location.topLeftCorner,"#FF3B58")):n.clearRect(0,0,r.width,r.height)}}),2),Object(n.useEffect)((function(){if(t){var e=window.innerHeight>window.innerWidth;p(function(e,t){return t?e?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{width:"100%",top:"50%",transform:"translateY(-50%)"}:e?{width:"100%",top:"50%",transform:"translateY(-50%)"}:{height:"100%",left:"50%",transform:"translateX(-50%)"}}(s,e)),v.current.srcObject=t}}),[s,t]),a.a.createElement("div",{style:Object.assign({position:"absolute",width:"100%",height:"100%",overflow:"hidden"},r)},a.a.createElement("video",{ref:v,playsInline:!0,autoPlay:!0,style:Object.assign({},f,{position:"absolute"})}),a.a.createElement("canvas",{ref:h,style:Object.assign({},f,{position:"absolute"})}),a.a.createElement("canvas",{hidden:!0,ref:b}),a.a.createElement("span",{style:{position:"absolute"},onClick:function(){return u(!s)}},s?"uncrop":"crop"))};var L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{controle:!0},(function(e){var t=e.stream;return a.a.createElement(x,{stream:t,crop:!0})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.468801a4.chunk.js.map