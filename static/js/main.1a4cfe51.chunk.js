(this.webpackJsonpnextrental=this.webpackJsonpnextrental||[]).push([[0],{101:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),l=i(13),r=i.n(l),o=(i(68),i(69),i(11)),c=i(10),s=i(20),d=i(113),j=i(57),b=i(110),m=i(114),u=i(111),h=i(112),O=(i(70),i(99),i(100),i(3));function p(){var e,t=this,i=Object(n.useState)(""),a=Object(c.a)(i,2),l=a[0],r=a[1],p=Object(n.useState)(!1),y=Object(c.a)(p,2),x=y[0],f=y[1],g=Object(n.useState)(!1),C=Object(c.a)(g,2),_=C[0],v=C[1],w=Object(n.useState)(!1),L=Object(c.a)(w,2),F=L[0],S=L[1],z=Object(n.useState)(!1),N=Object(c.a)(z,2),B=N[0],R=N[1],T=Object(n.useState)(!1),D=Object(c.a)(T,2),k=D[0],M=D[1],P=Object(n.useState)(""),E=Object(c.a)(P,2),A=E[0],U=E[1],Y=Object(n.useState)(""),H=Object(c.a)(Y,2),q=H[0],I=H[1],W=Object(n.useState)(""),G=Object(c.a)(W,2),J=G[0],K=G[1],$=Object(n.useState)(""),V=Object(c.a)($,2),Q=V[0],X=V[1],Z=Object(n.useState)(""),ee=Object(c.a)(Z,2),te=ee[0],ie=ee[1],ne=Object(n.useState)(""),ae=Object(c.a)(ne,2),le=ae[0],re=ae[1],oe=Object(n.useState)(""),ce=Object(c.a)(oe,2),se=ce[0],de=ce[1],je=Object(n.useState)(""),be=Object(c.a)(je,2),me=be[0],ue=be[1],he=Object(n.useState)(""),Oe=Object(c.a)(he,2),pe=Oe[0],ye=Oe[1];function xe(){f(!x)}function fe(){v(!_)}function ge(){M(!k),M(!k),R(!B),f(!x)}function Ce(){if(A&&J){S(!F);var e=s.filter((function(e){return e.name+"/"+e.code===A}));X(e[0].price*J),ie("false"===e[0].needing_repair?"No":"Yes"),re(e[0].minimum_rent_period)}else alert("Please Fill all the required Fields")}function _e(){if(q&&se&&me){var e=new Date;console.log(e);new Date(se);var t=s.filter((function(e){return e.name+"/"+e.code===q})),i=new Date(me),n=new Date(se),a=Math.abs(n-i),l=Math.ceil(a/864e5);se>me?(alert("To Date must be Greater than From Date!"),R(B)):l>=t[0].minimum_rent_period?R(!B):alert("You have to Rent this for minumum "+t[0].minimum_rent_period+" Days"),X(t[0].price*l)}else alert("Please Fill all the required Fields")}return Object(n.useEffect)((function(){""==pe&&ye(1),setTimeout(function(){ye(pe+1)}.bind(t),1e3)}),[]),Object(O.jsxs)("div",{className:"App",children:[console.log(pe),Object(O.jsxs)("div",{className:"center",children:[Object(O.jsx)("div",{className:"float-right mt-4",style:{marginRight:50},children:Object(O.jsxs)(d.a,{className:"mb-3",children:[Object(O.jsx)(d.a.Text,{id:"basic-addon1",children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",children:Object(O.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}),Object(O.jsx)(j.a,{placeholder:"Name or Type","aria-label":"Search",style:{height:50},"aria-describedby":"basic-addon1",onChange:function(e){r(e.target.value)}})]})}),Object(O.jsx)("div",{style:{marginRight:50,border:"1px solid white"},className:"TableDesign",children:Object(O.jsxs)(b.a,(e={responsive:"sm"},Object(o.a)(e,"responsive","md"),Object(o.a)(e,"responsive","xs"),Object(o.a)(e,"responsive","lg"),Object(o.a)(e,"responsive","xl"),Object(o.a)(e,"striped",!0),Object(o.a)(e,"hover",!0),Object(o.a)(e,"children",[Object(O.jsx)("thead",{className:"",style:{backgroundColor:"#2621a0"},children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"}}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Name"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Type "}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Availability"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Repair Needed"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Durability"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Maximum Durability"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Mileage"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Price"}),Object(O.jsx)("th",{style:{fontsize:21,color:"white",fontFamily:"Lucida Console"},children:"Minimum Rent Period"})]})}),Object(O.jsx)("tbody",{children:s.filter((function(e){return""==l||e.name.toLowerCase().includes(l.toLowerCase())||e.type.toLowerCase().includes(l.toLowerCase())?e:void 0})).map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.type}),Object(O.jsx)("td",{children:!0===e.availability?"Yes":"No"}),Object(O.jsx)("td",{children:!0===e.needing_repair?"Yes":"No"}),Object(O.jsx)("td",{children:e.durability}),Object(O.jsx)("td",{children:e.max_durability}),Object(O.jsx)("td",{children:""===e.mileage||null===e.mileage?"N/A":e.mileage}),Object(O.jsx)("td",{children:e.price}),Object(O.jsx)("td",{children:e.minimum_rent_period})]},e.code)}))})]),e))})]}),Object(O.jsxs)("div",{className:"mb-5",style:{marginRight:61,display:"flex",justifyContent:"flex-end"},children:[Object(O.jsx)(m.a,{onClick:xe,children:"Book"}),Object(O.jsx)(m.a,{onClick:fe,style:{marginLeft:5},variant:"danger",children:"Return"})]}),Object(O.jsxs)(u.a,{show:!!x,onRequestClose:xe,contentLabel:"My dialog",children:[Object(O.jsx)(u.a.Header,{children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{style:{fontSize:20,fontFamily:"Lucida Console",fontWeight:"bold"},children:"BOOK A PRODUCT"})})}),Object(O.jsxs)(u.a.Body,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{fontSize:18,fontFamily:"Lucida Console"},children:"SELECT PRODUCT"}),Object(O.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(O.jsxs)("select",{align:"center",className:"form-control",name:"product",value:q,onChange:function(e){return I(e.target.value)},required:!0,style:{width:"100%"},children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"-- Product --"}),s.map((function(e){return Object(O.jsxs)("option",{text:e.code,children:[e.name,"/",e.code]})}))]}),Object(O.jsx)("br",{}),s.filter((function(e){return e.name+"/"+e.code===q})).map((function(e){return Object(O.jsxs)("p",{style:{fontSize:22,fontFamily:"Lucida Console"},children:[Object(O.jsxs)("p",{children:["Name:\xa0",e.name]}),Object(O.jsxs)("p",{children:["Rental Period:\xa0",e.minimum_rent_period]}),console.log(e.mileage),Object(O.jsxs)("p",{children:["Mileage:\xa0",null===e.mileage?"N/A":e.mileage]}),Object(O.jsxs)("p",{children:["Repair Needed:\xa0",!0===e.needing_repair?"Yes":"No"]})]})})),Object(O.jsx)("span",{style:{fontSize:18,fontFamily:"Lucida Console"},children:"FROM"}),Object(O.jsx)("span",{style:{color:"red"},children:"*"})," \xa0",Object(O.jsx)(h.a.Control,{type:"date",value:se,min:(new Date).toISOString().split("T")[0],onChange:function(e){de(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{fontSize:18,fontFamily:"Lucida Console"},children:"TO"}),Object(O.jsx)("span",{style:{color:"red"},children:"*"}),"\xa0",Object(O.jsx)(h.a.Control,{type:"date",value:me,onChange:function(e){ue(e.target.value)}})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(u.a.Footer,{children:[Object(O.jsx)(m.a,{onClick:_e,style:{width:108,fontSize:18,fontFamily:"Lucida Console",height:40,marginBottom:10,backgroundColor:"#2621a0",color:"white"},children:"Book"}),"\xa0",Object(O.jsx)(m.a,{variant:"danger",onClick:xe,style:{width:108,marginTop:-2,fontSize:18,fontFamily:"Lucida Console",height:40,color:"white"},children:"Close"})]})]}),Object(O.jsxs)(u.a,{show:!!B,onRequestClose:_e,contentLabel:"My dialog",children:[Object(O.jsx)(u.a.Header,{children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{style:{fontSize:20,fontFamily:"Lucida Console",fontWeight:"bold"},children:"BOOK A PRODUCT"})})}),Object(O.jsxs)(u.a.Body,{children:[Object(O.jsx)("span",{style:{fontSize:23,fontFamily:"Lucida Console"},children:"Your Estimated Price"}),"($)",Object(O.jsx)("input",{type:"number",placeholder:"Enter Amount",value:Q,style:{border:"0",fontSize:22,fontFamily:"Lucida Handwriting",background:"white",fontWeight:"bold",marginBottom:10},disabled:!0}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(u.a.Footer,{children:[Object(O.jsx)("span",{style:{fontsize:22,fontFamily:"Lucida Console"},children:"Do you want to procedure?"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(m.a,{onClick:ge,style:{width:58,fontSize:18,fontFamily:"Lucida Console",height:37,marginBottom:10,backgroundColor:"#2621a0",color:"white"},children:"Yes"}),"\xa0",Object(O.jsx)(m.a,{variant:"danger",onClick:function(){R(!B)},style:{width:58,marginTop:-2,fontSize:18,fontFamily:"Lucida Console",height:37,color:"white"},children:"No"})]})]}),Object(O.jsxs)(u.a,{show:!!k,onRequestClose:ge,contentLabel:"My dialog",children:[Object(O.jsxs)(u.a.Header,{children:[Object(O.jsx)("span",{style:{fontFamily:"Lucida Handwriting",fontSize:22},children:"CONGRATULATIONS!"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(u.a.Body,{children:[Object(O.jsx)("span",{style:{fontsize:22,fontFamily:"Lucida Console"},children:"YOU HAVE BOOKED THIS PRODUCT!"})," ",Object(O.jsx)("br",{})]}),Object(O.jsxs)(u.a.Footer,{children:[Object(O.jsx)(m.a,{onClick:function(){M(!k)},style:{fontSize:18,fontFamily:"Lucida Console",width:150,height:40,background:"#2621a0",color:"white"},children:"Main Menu"}),Object(O.jsx)("br",{})]})]}),Object(O.jsxs)(u.a,{show:!!_,onRequestClose:fe,contentLabel:"My dialog",children:[Object(O.jsx)(u.a.Header,{children:Object(O.jsx)("div",{children:Object(O.jsx)("span",{style:{fontSize:20,fontFamily:"Lucida Console",fontWeight:"bold"},children:"RETURN PRODUCT"})})}),Object(O.jsxs)(u.a.Body,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{fontSize:19,fontFamily:"Lucida Console"},children:"SELECT PRODUCT"}),Object(O.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(O.jsxs)("select",{className:"form-control",name:"product",value:A,onChange:function(e){return U(e.target.value)},style:{width:"100%"},required:!0,children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"-- Product --"}),s.map((function(e){return Object(O.jsxs)("option",{text:e.code,children:[e.name,"/",e.code]})}))]}),Object(O.jsx)("br",{}),s.filter((function(e){return e.name+"/"+e.code===A})).map((function(e){return Object(O.jsxs)("p",{style:{fontSize:22,fontFamily:"Lucida Console"},children:[Object(O.jsxs)("p",{children:["Name:\xa0",e.name]}),Object(O.jsxs)("p",{children:["Rental Period:\xa0",e.minimum_rent_period]}),Object(O.jsxs)("p",{children:["Mileage:\xa0",null===e.mileage?"N/A":e.mileage]}),Object(O.jsxs)("p",{children:["Repair Needed:\xa0",!0===e.needing_repair?"Yes":"No"]})]})})),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{fontSize:19,fontFamily:"Lucida Console"},children:"USED MILEAGE"}),Object(O.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(O.jsx)("input",{type:"number",placeholder:"Enter Mileage",value:J,min:"0",style:{width:"100%"},className:"form-control",onChange:function(e){K(e.target.value)}}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(u.a.Footer,{children:[Object(O.jsx)(m.a,{onClick:Ce,style:{width:58,fontSize:18,fontFamily:"Lucida Console",height:40,marginBottom:10,backgroundColor:"#2621a0",color:"white"},children:"Yes"}),"\xa0",Object(O.jsx)(m.a,{variant:"danger",onClick:fe,style:{width:58,marginTop:-2,fontSize:18,fontFamily:"Lucida Console",height:40,color:"white"},children:"No"})]})]}),Object(O.jsxs)(u.a,{show:!!F,onRequestClose:Ce,contentLabel:"My dialog",children:[Object(O.jsxs)(u.a.Header,{children:[Object(O.jsx)("span",{style:{fontFamily:"Lucida Handwriting",fontSize:22},children:" RETURN A PRODUCT!"})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{})]}),Object(O.jsxs)(u.a.Body,{children:[Object(O.jsx)("span",{style:{fontsize:22,fontFamily:"Lucida Console"},children:"YOU ARE GOING TO RETUEN PRODUCT..."})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{fontSize:20,fontFamily:"Lucida Console"},children:"Your Total Price is"}),"($)",Object(O.jsx)("input",{value:Q,style:{border:"0",fontSize:22,fontFamily:"Lucida Handwriting",background:"white",fontWeight:"bold",marginBottom:10},disabled:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{fontSize:22,fontFamily:"Lucida Console"},children:"Is Repair Needed?\xa0"}),Object(O.jsx)("input",{value:te,style:{border:"0",fontSize:22,fontFamily:"Lucida Console",background:"white",fontWeight:"bold",marginBottom:10},disabled:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{fontSize:22,fontFamily:"Lucida Console"},children:"Minimum Rent Period\xa0"}),Object(O.jsx)("input",{value:le,style:{border:"0",fontSize:22,fontFamily:"Lucida Console",background:"white",fontWeight:"bold",marginBottom:10},disabled:!0}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(u.a.Footer,{children:[Object(O.jsx)("span",{style:{fontsize:22,fontFamily:"Lucida Console"},children:"DO you want to procedure?"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(m.a,{onClick:function(){S(!F),v(!_)},style:{fontSize:18,fontFamily:"Lucida Console",width:120,height:41,background:"#2621a0",color:"white"},children:"Confirm"}),Object(O.jsx)("br",{})]})]})]})}var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{})})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,115)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),l(e),r(e)}))};i(98);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),x()},20:function(e){e.exports=JSON.parse('[{"code":"p1","name":"Air Compressor 12 GAS","type":"plain","availability":true,"needing_repair":false,"durability":3000,"max_durability":3000,"mileage":null,"price":4500,"minimum_rent_period":1},{"code":"p2","name":"Air Compressor 5 Electric","type":"plain","availability":true,"needing_repair":false,"durability":1500,"max_durability":2000,"mileage":null,"price":6500,"minimum_rent_period":1},{"code":"p3","name":"Dia Blade 14 inch","type":"plain","availability":true,"needing_repair":false,"durability":40000,"max_durability":50000,"mileage":null,"price":3000,"minimum_rent_period":2},{"code":"p4","name":"Copper Blade 5 inch","type":"plain","availability":false,"needing_repair":true,"durability":0,"max_durability":2000,"mileage":null,"price":200,"minimum_rent_period":2},{"code":"p5","name":"Copper Blade 5 inch","type":"plain","availability":false,"needing_repair":true,"durability":0,"max_durability":2000,"mileage":null,"price":200,"minimum_rent_period":2},{"code":"p6","name":"Copper Blade 8 inch","type":"plain","availability":true,"needing_repair":false,"durability":1500,"max_durability":2000,"mileage":null,"price":300,"minimum_rent_period":2},{"code":"p7","name":"Beam Clamp","type":"plain","availability":true,"needing_repair":false,"durability":15000,"max_durability":20000,"mileage":null,"price":800,"minimum_rent_period":30},{"code":"p8","name":"Beam Clamp","type":"plain","availability":true,"needing_repair":false,"durability":10000,"max_durability":20000,"mileage":null,"price":800,"minimum_rent_period":30},{"code":"p9","name":"Beam Clamp","type":"plain","availability":false,"needing_repair":false,"durability":5000,"max_durability":20000,"mileage":null,"price":800,"minimum_rent_period":30},{"code":"m1","name":"Boom lift 40","type":"meter","availability":true,"needing_repair":false,"durability":4000,"max_durability":8000,"mileage":10000,"price":1000,"minimum_rent_period":4},{"code":"m2","name":"Boom lift 60","type":"meter","availability":true,"needing_repair":false,"durability":8000,"max_durability":10000,"mileage":5000,"price":1500,"minimum_rent_period":4},{"code":"m3","name":"Boom lift 80","type":"meter","availability":false,"needing_repair":true,"durability":500,"max_durability":12000,"mileage":200,"price":2000,"minimum_rent_period":2},{"code":"m4","name":"Boom lift 100","type":"meter","availability":true,"needing_repair":false,"durability":4000,"max_durability":12000,"mileage":8500,"price":2500,"minimum_rent_period":2},{"code":"m5","name":"Boom lift 20","type":"meter","availability":true,"needing_repair":false,"durability":1200,"max_durability":8000,"mileage":600,"price":500,"minimum_rent_period":1},{"code":"m6","name":"Boom lift 20","type":"meter","availability":true,"needing_repair":false,"durability":8000,"max_durability":8000,"mileage":0,"price":500,"minimum_rent_period":1},{"code":"m7","name":"Boom lift 20","type":"meter","availability":true,"needing_repair":false,"durability":5000,"max_durability":8000,"mileage":1200,"price":500,"minimum_rent_period":1},{"code":"m8","name":"Boom lift 40","type":"meter","availability":true,"needing_repair":false,"durability":8000,"max_durability":10000,"mileage":2500,"price":1000,"minimum_rent_period":2}]')},68:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){}},[[101,1,2]]]);
//# sourceMappingURL=main.1a4cfe51.chunk.js.map