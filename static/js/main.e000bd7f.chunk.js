(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{53:function(e,t,o){},58:function(e,t,o){"use strict";o.r(t);var i=o(7),a=o(32),r=o.n(a),n=(o(53),o(12)),s=o(10),c=o(15),j=o(29),l=o(20),b=o(0),p=o(62),O=o(63),h=o(60),d=o(49),u=o(13),m=o(6);function g(e){var t,o,a,r=e.color,n=void 0===r?16777215:r,s=e.position,c=void 0===s?[0,0,0]:s,j=e.direction,l=void 0===j?[0,0,0]:j,p=e.angle,O=void 0===p?1:p,h=(e.intensity,e.distance),d=void 0===h?0:h,g=e.penumbra,x=void 0===g?0:g,f=e.decay,y=void 0===f?0:f,v=[c[0]+l[0],c[1]+l[1],c[2]+l[2]],S=Object(i.useMemo)((function(){return new b.SpotLight(n)}),[]);return S.angle=O,S.distance=d,S.penumbra=x,S.decay=y,S.castShadow=!0,S.shadow.mapSize.width=1024,S.shadow.mapSize.height=1024,Object(m.jsxs)("group",(a={castShadow:!0,shadowMap:!0},Object(u.a)(a,"castShadow",!0),Object(u.a)(a,"receiveShadow",!0),Object(u.a)(a,"children",[Object(m.jsx)("primitive",(t={castShadow:!0,shadowMap:!0},Object(u.a)(t,"castShadow",!0),Object(u.a)(t,"receiveShadow",!0),Object(u.a)(t,"object",S),Object(u.a)(t,"position",c),t)),Object(m.jsx)("primitive",(o={castShadow:!0,shadowMap:!0},Object(u.a)(o,"castShadow",!0),Object(u.a)(o,"receiveShadow",!0),Object(u.a)(o,"object",S.target),Object(u.a)(o,"position",v),o))]),a))}var x=o(19);function f(e){var t=e.visible_flag,o=Object(x.useSpring)({loop:!0,from:{rotateZ:225,x:-35},to:{rotateZ:-135},reset:!0,config:x.config.molasses});return Object(m.jsxs)("div",{style:{width:"100vw",height:"100vh"},children:[Object(m.jsxs)(x.animated.h1,{style:{position:"absolute",top:"40%",visibility:t,width:"100vw",textAlign:"center",color:"white"},children:[Object(m.jsx)("p",{children:"LOADING..."}),Object(m.jsx)("p",{children:"Dandepaz.net"})]}),Object(m.jsx)(x.animated.div,{style:Object(s.a)({position:"relative",width:"65px",height:"65px",left:"50%",top:"32%",borderRadius:"15px",backgroundColor:"#C2B280"},o)})]})}function y(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function v(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function S(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function w(e,t,o){return"#"+S(e)+S(t)+S(o)}function I(e){var t=Object(c.f)(j.a,"./zeppelin/scene.gltf"),o=(Object(c.f)(j.a,"./zeppelin/texture/scene.gltf"),t.nodes.mesh_0.geometry,Object(l.useSpring)({loop:!1,from:{rotation:[0,3.14,0],position:y(e.position,[0,0,0])},to:{rotation:[0,1.57,0],position:y(e.position,[0,-5,0])},config:{mass:200,tension:100,friction:0}})),a=Object(i.useState)(!1),r=Object(n.a)(a,2),p=r[0],O=r[1],h=Object(i.useState)(!1),d=Object(n.a)(h,2),u=d[0],g=d[1],x=Object(i.useState)("#000000"),f=Object(n.a)(x,2),S=f[0],I=f[1],_=Object(i.useState)(),M=Object(n.a)(_,2),P=M[0],C=M[1],k="#012a4a",Z="#014f86",z=Object(i.useState)("#000000"),A=Object(n.a)(z,2),B=A[0],E=A[1];Object(i.useEffect)((function(){var e,t=100;if(p&&u&&(C(t),E(k),I(Z)),p&&0==u&&(g(!0),C(0),E(k),I(Z)),u&&(e=setInterval((function(){C(P+1)}),1)),P<t){var o=b.MathUtils.lerp(parseInt(v(S).r),parseInt(v(B).r),P/t),i=b.MathUtils.lerp(parseInt(v(S).g),parseInt(v(B).g),P/t),a=b.MathUtils.lerp(parseInt(v(S).b),parseInt(v(B).b),P/t),r=w(parseInt(o),parseInt(i),parseInt(a));I(r)}else g(!1);return document.body.style.cursor=p?"pointer":"auto",function(){return clearInterval(e)}}),[p,P]);var U=new b.MeshPhongMaterial({color:S,flatShading:!1,transmission:1});return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({shadowMap:!0,castShadow:!0,receiveShadow:!0},o),{},{children:Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,shadowMap:!0,geometry:t.nodes.mesh_0.geometry,scale:2,onPointerOver:function(e){return e.stopPropagation(),O(!0)},onPointerOut:function(e){return e.stopPropagation(),O(!1)},material:U})}))})}var _=o(61);function M(e){var t=Object.assign({},e),o=Object(i.useRef)(),a=Object(_.a)("./clapper/scene.gltf"),r=a.nodes,c=(a.materials,Object(i.useState)(!1)),j=Object(n.a)(c,2),p=j[0],O=j[1],h=Object(i.useState)(!1),d=Object(n.a)(h,2),u=d[0],g=d[1],x=Object(i.useState)("#000000"),f=Object(n.a)(x,2),S=f[0],I=f[1],M=Object(i.useState)(),P=Object(n.a)(M,2),C=P[0],k=P[1],Z="#6c757d",z="#ced4da",A=Object(i.useState)("#000000"),B=Object(n.a)(A,2),E=B[0],U=B[1];Object(i.useEffect)((function(){var e,t=100;if(p&&u&&(k(t),U(Z),I(z)),p&&0==u&&(g(!0),k(0),U(Z),I(z)),u&&(e=setInterval((function(){k(C+1)}),1)),C<t){var o=b.MathUtils.lerp(parseInt(v(S).r),parseInt(v(E).r),C/t),i=b.MathUtils.lerp(parseInt(v(S).g),parseInt(v(E).g),C/t),a=b.MathUtils.lerp(parseInt(v(S).b),parseInt(v(E).b),C/t),r=w(parseInt(o),parseInt(i),parseInt(a));I(r)}else g(!1);return document.body.style.cursor=p?"pointer":"auto",function(){return clearInterval(e)}}),[p,C]);var L=new b.MeshPhongMaterial({color:S,flatShading:!0,transmission:1}),R=Object(l.useSpring)({loop:!1,from:{rotation:[.2,-.1,.2],position:y(t.position,[0,2,0])},to:{rotation:[-.1,.1,.1],position:y(t.position,[0,-1,0])},config:{mass:100,tension:100,friction:0}}),D=Object(l.useSpring)({loop:!1,from:{rotation:[.26,0,0]},to:{rotation:[0,0,0]},config:{mass:10,tension:100,friction:0}});return Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({castShadow:!0,receiveShadow:!0},R),{},{children:Object(m.jsx)("group",Object(s.a)(Object(s.a)({ref:o},t),{},{dispose:null,onPointerOver:function(e){return e.stopPropagation(),O(!0)},onPointerOut:function(e){return e.stopPropagation(),O(!1)},children:Object(m.jsxs)("group",{rotation:[-Math.PI/2,0,0],position:[-160,-20,250],children:[Object(m.jsx)("group",{position:[0,0,14.25],children:Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Cube_0.geometry,material:L})}),Object(m.jsxs)("group",{position:[0,0,13.71],children:[Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Cube002_0.geometry,material:L}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Cube002_1.geometry,material:L})]}),Object(m.jsx)("group",{position:[0,-9.01,15.44],children:Object(m.jsx)("mesh",{geometry:r.Cube003_0.geometry,material:L})}),Object(m.jsx)("group",{position:[-1.68,-9.01,15.44],children:Object(m.jsx)("mesh",{geometry:r.Cube004_0.geometry,material:L})}),Object(m.jsx)("group",{position:[.99,-9.49,16.26],rotation:[1.79,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:r.Sphere04_0.geometry,material:L})}),Object(m.jsx)("group",{position:[.99,-9.49,14.02],rotation:[.83,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:r.Sphere04001_0.geometry,material:L})}),Object(m.jsx)("group",{position:[.99,-6.42,14.02],rotation:[2.37,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:r.Sphere04002_0.geometry,material:L})}),Object(m.jsx)("group",{position:[-.99,-6.42,14.02],rotation:[2.37,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:r.Sphere04003_0.geometry,material:L})}),Object(m.jsx)("group",{position:[-.99,-9.49,14.02],rotation:[.83,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:r.Sphere04004_0.geometry,material:L})}),Object(m.jsx)("group",{position:[-.99,-9.49,16.26],rotation:[1.79,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:r.Sphere04005_0.geometry,material:L})}),Object(m.jsx)("group",{position:[.96,-9.5,16.28],rotation:[.29,0,0],children:Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({castShadow:!0,receiveShadow:!0,geometry:r.Cube001_0.geometry},D),{},{material:L}))}),Object(m.jsx)("group",{position:[38.23,-8.13,7.88],rotation:[1.77,1.27,-1.7]})]})}))}))}function P(e){var t=Object.assign({},e),o=Object(i.useRef)(),a=Object(_.a)("./boombox/scene.gltf"),r=a.nodes,c=a.materials,j=Object(i.useState)(!1),p=Object(n.a)(j,2),O=p[0],h=p[1],d=Object(i.useState)(!1),u=Object(n.a)(d,2),g=u[0],x=u[1],f=Object(i.useState)("#000000"),S=Object(n.a)(f,2),I=S[0],M=S[1],P=Object(i.useState)(),C=Object(n.a)(P,2),k=C[0],Z=C[1],z="#c9184a",A="#ff4d6d",B=Object(i.useState)("#000000"),E=Object(n.a)(B,2),U=E[0],L=E[1];Object(i.useEffect)((function(){var e,t=100;if(O&&g&&(Z(t),L(z),M(A)),O&&0==g&&(x(!0),Z(0),L(z),M(A)),g&&(e=setInterval((function(){Z(k+1)}),1)),k<t){var o=b.MathUtils.lerp(parseInt(v(I).r),parseInt(v(U).r),k/t),i=b.MathUtils.lerp(parseInt(v(I).g),parseInt(v(U).g),k/t),a=b.MathUtils.lerp(parseInt(v(I).b),parseInt(v(U).b),k/t),r=w(parseInt(o),parseInt(i),parseInt(a));M(r)}else x(!1);return document.body.style.cursor=O?"pointer":"auto",function(){return clearInterval(e)}}),[O,k]);var R=new b.MeshPhongMaterial({color:I,flatShading:!0,transmission:1}),D=Object(l.useSpring)({pause:t.pause,loop:!0,from:{rotation:[.2,0,.1],position:y(t.position,[0,2,-10])},to:{rotation:[-.2,0,-.1],position:y(t.position,[0,-2,-10])},config:{mass:10,tension:100,friction:0}}),W=Object(l.useSpring)({pause:t.pause,loop:!0,from:{rotation:[.36,0,0]},to:{rotation:[0,0,0]},config:{mass:10,tension:100,friction:0}});return Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({castShadow:!0,receiveShadow:!0},D),{},{children:Object(m.jsx)("group",Object(s.a)(Object(s.a)({ref:o,scale:10,rotation:[0,-Math.PI/2,0]},t),{},{dispose:null,position:[-10,0,10],onPointerOver:function(e){return e.stopPropagation(),h(!0)},onPointerOut:function(e){return e.stopPropagation(),h(!1)},children:Object(m.jsx)("group",{rotation:[-Math.PI/2,0,0],children:Object(m.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(m.jsxs)("group",{position:[0,.65,0],scale:[1,.63,.38],children:[Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Object_4.geometry,material:R}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Object_5.geometry,material:r.Object_5.material}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.Object_6.geometry,material:c.glass})]}),Object(m.jsx)("group",{position:[.64,.42,.38],scale:[.29,.29,.07],children:Object(m.jsx)("mesh",{geometry:r.Object_8.geometry,material:r.Object_8.material})}),Object(m.jsx)("group",{position:[-.66,.42,.38],scale:[.29,.29,.07],children:Object(m.jsx)("mesh",{geometry:r.Object_10.geometry,material:r.Object_10.material})}),Object(m.jsx)("group",{position:[.12,.69,.34],scale:[.04,.04,.01],children:Object(m.jsx)("mesh",{geometry:r.Object_12.geometry,material:r.Object_12.material})}),Object(m.jsx)("group",{position:[-.11,.69,.34],scale:[.04,.04,.01],children:Object(m.jsx)("mesh",{geometry:r.Object_14.geometry,material:r.Object_14.material})}),Object(m.jsx)("group",{position:[-.66,1.27,.18],scale:.06,children:Object(m.jsx)("mesh",{geometry:r.Object_16.geometry,material:R})}),Object(m.jsx)("group",{position:[-.47,1.27,.18],scale:.06,children:Object(m.jsx)("mesh",{geometry:r.Object_18.geometry,material:R})}),Object(m.jsx)("group",{position:[-.26,1.27,.18],scale:.06,children:Object(m.jsx)("mesh",{geometry:r.Object_20.geometry,material:R})}),Object(m.jsx)("group",{position:[1.03,.92,.2],rotation:[0,0,1.57],scale:[.1,.03,.1],children:Object(m.jsx)("mesh",{geometry:r.Object_22.geometry,material:R})}),Object(m.jsx)("group",{position:[0,1.73,0],scale:[1.14,.08,.08],children:Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({castShadow:!0,receiveShadow:!0,geometry:r.Object_24.geometry},W),{},{material:R}))}),Object(m.jsx)("group",{position:[1,1.2,0],rotation:[0,0,1.57],scale:[.04,.01,.04],children:Object(m.jsx)("mesh",Object(s.a)(Object(s.a)({},W),{},{geometry:r.Object_26.geometry,material:r.Object_26.material}))}),Object(m.jsx)("group",{position:[-1.01,1.2,0],rotation:[0,0,1.57],scale:[.04,.01,.04],children:Object(m.jsx)("mesh",{geometry:r.Object_28.geometry,material:r.Object_28.material})})]})})}))}))}function C(){var e=Object(x.useSpring)({loop:!0,from:{rotateZ:-2,y:15},to:{rotateZ:1,y:-15},delay:0,config:{mass:30,tension:100,friction:0}}),t=Object(x.useSpring)({loop:!0,from:{rotateZ:-2,y:15},to:{rotateZ:1,y:-15},delay:100,config:{mass:30,tension:100,friction:0}}),o=Object(x.useSpring)({loop:!0,from:{rotateZ:-2,y:15},to:{rotateZ:1,y:-15},delay:200,config:{mass:30,tension:100,friction:0}});return Object(m.jsxs)("div",{children:[Object(m.jsx)(x.animated.h1,{style:Object(s.a)({textAlign:"center",position:"relative",top:"60px",color:"#C2B280"},e),children:"Welcome to my site!"}),Object(m.jsx)(x.animated.h2,{style:Object(s.a)({textAlign:"center",position:"relative",top:"60px",color:"#C2B280"},t),children:"My name is Dan and I love making silly things."}),Object(m.jsx)(x.animated.h3,{style:Object(s.a)({textAlign:"center",position:"relative",top:"70px",color:"#C2B280"},o),children:"Still under construction!"})]})}function k(e){var t=e.music_state,o=Object(x.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:0,config:{mass:10,tension:100,friction:0}}),i=Object(x.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:200,config:{mass:10,tension:100,friction:0}}),a=Object(x.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:400,config:{mass:10,tension:100,friction:0}}),r=Object(x.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:600,config:{mass:10,tension:100,friction:0}});return Object(m.jsx)("div",{children:Object(m.jsxs)("h2",{style:{textAlign:"center",position:"relative",top:"30px",color:"#C2B280"},children:[Object(m.jsx)("p",{children:"Play some music!"}),Object(m.jsx)("p",{children:t?"Audio is on \u266b":"Audio is off"}),Object(m.jsxs)("div",{style:{},children:[Object(m.jsx)(x.animated.p,{style:Object(s.a)({position:"relative",top:40,left:-160},o),children:"\u266b"}),Object(m.jsx)(x.animated.p,{style:Object(s.a)({position:"relative",top:-10,left:-40},i),children:"\u266b"}),Object(m.jsx)(x.animated.p,{style:Object(s.a)({position:"relative",top:-65,left:60},a),children:"\u266b"}),Object(m.jsx)(x.animated.p,{style:Object(s.a)({position:"relative",top:-120,left:160},r),children:"\u266b"})]})]})})}_.a.preload("./clapper/scene.gltf"),_.a.preload("./boombox/scene.gltf");var Z=function(){var e=Object(c.f)(j.a,"./island/Redoneisland.glb"),t=new b.MeshPhongMaterial({color:"#C2B280",flatShading:!0});return Object(m.jsx)("mesh",{shadows:!0,castShadow:!0,receiveShadow:!0,geometry:e.nodes.Landscape001.geometry,scale:200,material:t,position:[0,-11,-250]})};function z(){var e=Object(i.useRef)(),t=Object(c.g)((function(e){return e.gl})),o=Object(c.f)(b.TextureLoader,"/0110.png");o.wrapS=o.wrapT=b.RepeatWrapping;var a=Object(i.useMemo)((function(){return new b.PlaneGeometry(15e3,15e3)}),[]),r=Object(i.useMemo)((function(){return{textureWidth:512,textureHeight:512,waterNormals:o,sunDirection:new b.Vector3(-1),sunColor:"hotpink",waterColor:"#012a4a",distortionScale:3,fog:void 0!==t.fog,format:t.encoding}}),[o]);Object(c.e)((function(t,o){return e.current.material.uniforms.time.value+=o}));var n=Object(l.useSpring)({loop:!1,from:{position:[0,.5,0]},to:{position:[0,-.5,0]},config:{mass:10,tension:10,friction:0}});return Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({},n),{},{children:Object(m.jsx)("water",{ref:e,args:[a,r],"rotation-x":-Math.PI/2})}))}function A(e){var t=e.cam_pos,o=void 0===t?[0,0,0]:t,i=.008,a=new b.Vector3(0-o[0],0,-250-o[2]),r=100*(a=a.normalize()).x,n=100*a.z;return Object(c.e)((function(e){var t=e.camera;t.position.x+=(o[0]-r-t.position.x)*i,t.position.y+=(o[1]-t.position.y)*i,t.position.z+=(o[2]-n-t.position.z)*i})),null}function B(e){var t=e.text;return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{style:{position:"relative",top:"50px",textAlign:"center",color:"#C2B280"},children:t})})}Object(c.d)({Water:h.a});function E(){document.title="Welcome to adeadzeplin";var e=Object(i.useState)(8),t=Object(n.a)(e,2),o=t[0],a=t[1],r=Object(i.useState)(!0),s=Object(n.a)(r,2),j=s[0],l=s[1],b=function(e){var t=Object(i.useState)(new Audio(e)),o=Object(n.a)(t,1)[0],a=Object(i.useState)(!1),r=Object(n.a)(a,2),s=r[0],c=r[1];return o.volume=.4,Object(i.useEffect)((function(){s?o.play():o.pause()}),[s]),Object(i.useEffect)((function(){return o.addEventListener("ended",(function(){return c(!1)})),function(){o.removeEventListener("ended",(function(){return c(!1)}))}}),[]),[s,function(){return c(!s)}]}("./music.mp3"),h=Object(n.a)(b,2),u=h[0],x=h[1],v=[[0,20,-90],[-130,20,-130],[-160,20,-250],[-130,20,-370],[0,20,-400],[130,20,-370],[160,20,-250],[110,20,-130],[0,20,-90]],S=[Object(m.jsx)(C,{}),Object(m.jsx)(B,{text:"place holder text 2"}),Object(m.jsx)(k,{music_state:u}),Object(m.jsx)(B,{text:"place holder text 4"}),Object(m.jsx)(B,{text:"place holder text 5"}),Object(m.jsx)(B,{text:"place holder text 6"}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(B,{text:"Credits: this is where I will credit"}),Object(m.jsx)(B,{text:"the assets that i use"})]}),Object(m.jsx)(B,{text:"place holder text"}),Object(m.jsx)(B,{text:""})];return Object(i.useEffect)((function(){l(!1)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{visible:j,position:"absolute",width:"100vw",height:"100vh",backgroundColor:"#012a4a"},children:Object(m.jsx)(f,{style:{textAlign:"center"},visible_flag:j})}),Object(m.jsx)("div",{style:{visible:!j,position:"relative",width:"100%",height:"70%",marginBottom:"-5vh"},children:Object(m.jsxs)(c.a,{colorManagement:!0,shadows:!0,camera:{position:[300,3e3,-600],fov:60,near:1,far:5e3,zoom:1},mode:"concurrent",children:[Object(m.jsxs)(i.Suspense,{fallback:null,children:[g({color:15794063,position:y(v[o],[0,100,0]),direction:[0,-1,0],angle:.4,decay:.1,penumbra:.9,intensity:.1,distance:200}),g({color:4276224,position:y(v[0],[0,50,50]),direction:[0,-1,-10],angle:20,decay:.1,penumbra:.1,intensity:.1,distance:1e3}),Object(m.jsx)("ambientLight",{intensity:.2}),Object(m.jsxs)("mesh",{children:[Object(m.jsx)("mesh",{onClick:function(e){return a(0)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:v[0]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(1)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:v[1]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(2)},children:Object(m.jsx)(P,{castShadow:!0,receiveShadow:!0,position:v[2],onClick:x,pause:!u})}),Object(m.jsx)("mesh",{onClick:function(e){return a(3)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:v[3]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(4)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:v[4]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(5)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:v[5]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(6)},children:Object(m.jsx)(M,{castShadow:!0,receiveShadow:!0,position:v[6]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(7)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:v[7]})})]}),Object(m.jsx)(A,{cam_pos:y(v[o],[0,20,0])}),Object(m.jsx)(z,{position:[0,-100,0]}),Object(m.jsx)(p.a,{intensity:1e4,scale:1e4,turbidity:0,rayleigh:1,mieCoefficient:.1,mieDirectionalG:.1,elevation:100,azimuth:10}),Object(m.jsx)(Z,{position:[0,0,0]})]}),Object(m.jsx)(O.a,{target:[0,-5,-250],enablePan:!1})]})}),Object(m.jsx)("div",{style:{position:"absolute",width:"100vw"},children:Object(m.jsx)(d.a,{fill:"#012a4a",paused:!1,options:{height:20,amplitude:20,speed:.2,points:4}})}),Object(m.jsx)("div",{style:{position:"absolute",width:"100vw"}}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{style:{height:"45vh",backgroundColor:"#012a4a"},children:S[o]})})]})}o.p;r.a.render(Object(m.jsx)(E,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.e000bd7f.chunk.js.map