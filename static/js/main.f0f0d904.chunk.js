(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{53:function(e,t,o){},58:function(e,t,o){"use strict";o.r(t);var i=o(6),n=o(31),a=o.n(n),r=(o(53),o(12)),s=o(11),c=o(15),j=o(28),l=o(22),b=o(0),h=o(62),p=o(63),d=o(60),u=o(42),O=o(13),m=o(9);function g(e){var t,o,n,a=e.color,r=void 0===a?16777215:a,s=e.position,c=void 0===s?[0,0,0]:s,j=e.direction,l=void 0===j?[0,0,0]:j,h=e.angle,p=void 0===h?1:h,d=(e.intensity,e.distance),u=void 0===d?0:d,g=e.penumbra,x=void 0===g?0:g,f=e.decay,v=void 0===f?0:f,w=[c[0]+l[0],c[1]+l[1],c[2]+l[2]],y=Object(i.useMemo)((function(){return new b.SpotLight(r)}),[]);return y.angle=p,y.distance=u,y.penumbra=x,y.decay=v,y.castShadow=!0,y.shadow.mapSize.width=1024,y.shadow.mapSize.height=1024,Object(m.jsxs)("group",(n={castShadow:!0,shadowMap:!0},Object(O.a)(n,"castShadow",!0),Object(O.a)(n,"receiveShadow",!0),Object(O.a)(n,"children",[Object(m.jsx)("primitive",(t={castShadow:!0,shadowMap:!0},Object(O.a)(t,"castShadow",!0),Object(O.a)(t,"receiveShadow",!0),Object(O.a)(t,"object",y),Object(O.a)(t,"position",c),t)),Object(m.jsx)("primitive",(o={castShadow:!0,shadowMap:!0},Object(O.a)(o,"castShadow",!0),Object(O.a)(o,"receiveShadow",!0),Object(O.a)(o,"object",y.target),Object(O.a)(o,"position",w),o))]),n))}var x=o(39);function f(){var e=Object(x.useSpring)({loop:!0,to:{opacity:1,top:"50vh"},from:{opacity:0,top:"0vh"},config:x.config.wobbly});return Object(m.jsx)("div",{children:Object(m.jsx)(x.animated.h1,{style:Object(s.a)({position:"absolute",left:"50vw",color:"white"},e),children:"LOADING..."})})}function v(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function w(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function S(e,t,o){return"#"+y(e)+y(t)+y(o)}function I(e){var t=Object(c.f)(j.a,"./zeppelin/scene.gltf"),o=(Object(c.f)(j.a,"./zeppelin/texture/scene.gltf"),t.nodes.mesh_0.geometry,Object(l.useSpring)({loop:!1,from:{rotation:[0,3.14,0],position:v(e.position,[0,0,0])},to:{rotation:[0,1.57,0],position:v(e.position,[0,-5,0])},config:{mass:200,tension:100,friction:0}})),n=Object(i.useState)(!1),a=Object(r.a)(n,2),h=a[0],p=a[1],d=Object(i.useState)(!1),u=Object(r.a)(d,2),O=u[0],g=u[1],x=Object(i.useState)("#000000"),f=Object(r.a)(x,2),y=f[0],I=f[1],M=Object(i.useState)(),C=Object(r.a)(M,2),P=C[0],k=C[1],_="#012a4a",z="#014f86",U=Object(i.useState)("#000000"),L=Object(r.a)(U,2),W=L[0],B=L[1];Object(i.useEffect)((function(){var e,t=100;if(h&&O&&(k(t),B(_),I(z)),h&&0==O&&(g(!0),k(0),B(_),I(z)),O&&(e=setInterval((function(){k(P+1)}),1)),P<t){var o=b.MathUtils.lerp(parseInt(w(y).r),parseInt(w(W).r),P/t),i=b.MathUtils.lerp(parseInt(w(y).g),parseInt(w(W).g),P/t),n=b.MathUtils.lerp(parseInt(w(y).b),parseInt(w(W).b),P/t),a=S(parseInt(o),parseInt(i),parseInt(n));I(a)}else g(!1);return document.body.style.cursor=h?"pointer":"auto",function(){return clearInterval(e)}}),[h,P]);var E=new b.MeshPhongMaterial({color:y,flatShading:!0,transmission:1});return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({shadowMap:!0,castShadow:!0,receiveShadow:!0},o),{},{children:Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,shadowMap:!0,geometry:t.nodes.mesh_0.geometry,scale:2,onPointerOver:function(e){return e.stopPropagation(),p(!0)},onPointerOut:function(e){return e.stopPropagation(),p(!1)},material:E})}))})}var M=o(61);function C(e){var t=Object.assign({},e),o=Object(i.useRef)(),n=Object(M.a)("./clapper/scene.gltf"),a=n.nodes,c=(n.materials,Object(i.useState)(!1)),j=Object(r.a)(c,2),h=j[0],p=j[1],d=Object(i.useState)(!1),u=Object(r.a)(d,2),O=u[0],g=u[1],x=Object(i.useState)("#000000"),f=Object(r.a)(x,2),y=f[0],I=f[1],C=Object(i.useState)(),P=Object(r.a)(C,2),k=P[0],_=P[1],z="#012a4a",U="#014f86",L=Object(i.useState)("#000000"),W=Object(r.a)(L,2),B=W[0],E=W[1];Object(i.useEffect)((function(){var e,t=100;if(h&&O&&(_(t),E(z),I(U)),h&&0==O&&(g(!0),_(0),E(z),I(U)),O&&(e=setInterval((function(){_(k+1)}),1)),k<t){var o=b.MathUtils.lerp(parseInt(w(y).r),parseInt(w(B).r),k/t),i=b.MathUtils.lerp(parseInt(w(y).g),parseInt(w(B).g),k/t),n=b.MathUtils.lerp(parseInt(w(y).b),parseInt(w(B).b),k/t),a=S(parseInt(o),parseInt(i),parseInt(n));I(a)}else g(!1);return document.body.style.cursor=h?"pointer":"auto",function(){return clearInterval(e)}}),[h,k]);var R=new b.MeshPhongMaterial({color:y,flatShading:!0,transmission:1}),D=Object(l.useSpring)({loop:!1,from:{rotation:[.1,-1.57,.1],position:v(t.position,[0,1,0])},to:{rotation:[0,1.57,0],position:v(t.position,[0,-1,0])},config:{mass:100,tension:100,friction:0}});return Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({},D),{},{children:Object(m.jsx)("group",Object(s.a)(Object(s.a)({ref:o},t),{},{dispose:null,onPointerOver:function(e){return e.stopPropagation(),p(!0)},onPointerOut:function(e){return e.stopPropagation(),p(!1)},children:Object(m.jsxs)("group",{rotation:[-Math.PI/2,0,0],position:[-160,-20,250],children:[Object(m.jsx)("group",{position:[0,0,14.25],children:Object(m.jsx)("mesh",{geometry:a.Cube_0.geometry,material:R})}),Object(m.jsxs)("group",{position:[0,0,13.71],children:[Object(m.jsx)("mesh",{geometry:a.Cube002_0.geometry,material:R}),Object(m.jsx)("mesh",{geometry:a.Cube002_1.geometry,material:R})]}),Object(m.jsx)("group",{position:[0,-9.01,15.44],children:Object(m.jsx)("mesh",{geometry:a.Cube003_0.geometry,material:R})}),Object(m.jsx)("group",{position:[-1.68,-9.01,15.44],children:Object(m.jsx)("mesh",{geometry:a.Cube004_0.geometry,material:R})}),Object(m.jsx)("group",{position:[.99,-9.49,16.26],rotation:[1.79,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:a.Sphere04_0.geometry,material:R})}),Object(m.jsx)("group",{position:[.99,-9.49,14.02],rotation:[.83,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:a.Sphere04001_0.geometry,material:R})}),Object(m.jsx)("group",{position:[.99,-6.42,14.02],rotation:[2.37,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:a.Sphere04002_0.geometry,material:R})}),Object(m.jsx)("group",{position:[-.99,-6.42,14.02],rotation:[2.37,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:a.Sphere04003_0.geometry,material:R})}),Object(m.jsx)("group",{position:[-.99,-9.49,14.02],rotation:[.83,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:a.Sphere04004_0.geometry,material:R})}),Object(m.jsx)("group",{position:[-.99,-9.49,16.26],rotation:[1.79,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(m.jsx)("mesh",{geometry:a.Sphere04005_0.geometry,material:R})}),Object(m.jsx)("group",{position:[.96,-9.5,16.28],rotation:[.26,0,0],children:Object(m.jsx)("mesh",{geometry:a.Cube001_0.geometry,material:R})}),Object(m.jsx)("group",{position:[38.23,-8.13,7.88],rotation:[1.77,1.27,-1.7]})]})}))}))}M.a.preload("./clapper/scene.gltf");var P=function(){var e=Object(c.f)(j.a,"./island/Redoneisland.glb"),t=new b.MeshPhongMaterial({color:"#C2B280",flatShading:!0});return Object(m.jsx)("mesh",{shadows:!0,castShadow:!0,receiveShadow:!0,geometry:e.nodes.Landscape001.geometry,scale:200,material:t,position:[0,-11,-250]})};function k(){var e=Object(i.useRef)(),t=Object(c.g)((function(e){return e.gl})),o=Object(c.f)(b.TextureLoader,"/0110.png");o.wrapS=o.wrapT=b.RepeatWrapping;var n=Object(i.useMemo)((function(){return new b.PlaneGeometry(2e4,2e4)}),[]),a=Object(i.useMemo)((function(){return{textureWidth:512,textureHeight:512,waterNormals:o,sunDirection:new b.Vector3(-1),sunColor:"hotpink",waterColor:"#012a4a",distortionScale:3,fog:void 0!==t.fog,format:t.encoding}}),[o]);Object(c.e)((function(t,o){return e.current.material.uniforms.time.value+=o}));var r=Object(l.useSpring)({loop:!1,from:{position:[0,.5,0]},to:{position:[0,-.5,0]},config:{mass:10,tension:10,friction:0}});return Object(m.jsx)(l.animated.mesh,Object(s.a)(Object(s.a)({},r),{},{children:Object(m.jsx)("water",{ref:e,args:[n,a],"rotation-x":-Math.PI/2})}))}function _(e){var t=e.cam_pos,o=void 0===t?[0,0,0]:t,i=.008,n=new b.Vector3(0-o[0],0,-250-o[2]),a=100*(n=n.normalize()).x,r=100*n.z;return Object(c.e)((function(e){var t=e.camera;t.position.x+=(o[0]-a-t.position.x)*i,t.position.y+=(o[1]-t.position.y)*i,t.position.z+=(o[2]-r-t.position.z)*i})),null}function z(e){var t=e.text;return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{style:{position:"relative",top:"50px",left:"40%",color:"#C2B280"},children:t})})}function U(){document.title="Welcome to adeadzeplin";var e={position:[300,3e3,-600],fov:60,near:1,far:5e3,zoom:1},t=Object(i.useState)(8),o=Object(r.a)(t,2),n=o[0],a=o[1],s=Object(i.useState)(!0),j=Object(r.a)(s,2),l=j[0],b=j[1];console.log(l);var d=[[0,20,-90],[-130,20,-130],[-160,20,-250],[-130,20,-370],[0,20,-400],[130,20,-370],[160,20,-250],[110,20,-130],[0,20,-90]],O=[Object(m.jsx)(z,{text:"Welcome to my site its nearly done!"}),Object(m.jsx)(z,{text:"asdgfsdfghdfghjdy 2"}),Object(m.jsx)(z,{text:"what is up?????? 3"}),Object(m.jsx)(z,{text:"yo what are you looking at? 4"}),Object(m.jsx)(z,{text:"Can you stop clicking these zeplins? 5"}),Object(m.jsx)(z,{text:"more important info is located here 6"}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{text:"Credits: this is where I will credit"}),Object(m.jsx)(z,{text:"the assests that i use"})]}),Object(m.jsx)(z,{text:"spagetti"}),,];return Object(i.useEffect)((function(){b(!1)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{visible:l,position:"absolute",width:"100vw",height:"100vh",backgroundColor:"#012a4a"},children:Object(m.jsx)(f,{})}),Object(m.jsx)("div",{style:{visible:!l,position:"relative",width:"100%",height:"70%",marginBottom:"-5vh"},children:Object(m.jsxs)(c.a,{colorManagement:!0,shadows:!0,camera:e,mode:"concurrent",children:[Object(m.jsxs)(i.Suspense,{fallback:null,children:[g({color:15794063,position:v(d[n],[0,100,0]),direction:[0,-1,0],angle:.4,decay:.1,penumbra:.9,intensity:.1,distance:200}),g({color:15794063,position:v(e,[0,100,0]),direction:[0,-1,0],angle:20,decay:.1,penumbra:.9,intensity:.1,distance:200}),Object(m.jsx)("ambientLight",{intensity:.2}),Object(m.jsxs)("mesh",{children:[Object(m.jsx)("mesh",{onClick:function(e){return a(0)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[0]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(1)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[1]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(2)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[2]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(3)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[3]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(4)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[4]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(5)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[5]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(6)},children:Object(m.jsx)(C,{castShadow:!0,receiveShadow:!0,position:d[6]})}),Object(m.jsx)("mesh",{onClick:function(e){return a(7)},children:Object(m.jsx)(I,{castShadow:!0,receiveShadow:!0,position:d[7]})})]}),Object(m.jsx)(_,{cam_pos:v(d[n],[0,20,0])}),Object(m.jsx)(k,{position:[0,-100,0]}),Object(m.jsx)(h.a,{intensity:1e4,scale:1e4,turbidity:0,rayleigh:1,mieCoefficient:.1,mieDirectionalG:.1,elevation:100,azimuth:10}),Object(m.jsx)(P,{position:[0,0,0]})]}),Object(m.jsx)(p.a,{target:[0,-5,-250],enablePan:!1})]})}),Object(m.jsx)("div",{style:{position:"absolute",width:"100vw"},children:Object(m.jsx)(u.a,{fill:"#012a4a",paused:!1,options:{height:20,amplitude:20,speed:.2,points:4}})}),Object(m.jsx)("div",{style:{position:"absolute",width:"100vw"},children:Object(m.jsx)(u.a,{fill:"#012a4a",paused:!1,options:{height:10,amplitude:30,speed:.2,points:10}})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{style:{height:"45vh",backgroundColor:"#012a4a"},children:O[n]})})]})}Object(c.d)({Water:d.a}),a.a.render(Object(m.jsx)(U,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.f0f0d904.chunk.js.map