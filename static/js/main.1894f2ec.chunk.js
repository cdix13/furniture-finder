(this.webpackJsonpfabelio=this.webpackJsonpfabelio||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(59),l=a(12),s=a(60),u=a.n(s),m=a(160),d=a(154),p=a(150),h=a(166),b=a(164),f=a(152),g=a(161),E=a(153),v=a(151),j=a(167),O=a(8),y=a(64),w=a.n(y),S=a(165),k=a(162),x=a(163),C=a(61),I=a.n(C),N=a(63),F=a.n(N),W=r.a.createElement(I.a,{fontSize:"small"}),R=r.a.createElement(F.a,{fontSize:"small"}),z=Object(p.a)((function(e){return Object(h.a)({toolbar:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:e.spacing(1),marginTop:e.spacing(2)},autocomplete:{padding:e.spacing(3)},textField:{backgroundColor:e.palette.common.white},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.c)(e.palette.common.white,.25)},width:"100%",fontSize:"3em"},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2em"},inputRoot:{color:"inherit"},inputInput:{fontSize:"2em",color:e.palette.common.white,padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"}})})),B=[{label:"1 Week",value:"7"},{label:"2 Week",value:"14"},{label:"1 Month",value:"30"},{label:"More than a month",value:"moreThanAMonth"}];function T(e){var t=e.children,a=e.window,n=Object(v.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return r.a.cloneElement(t,{elevation:n?4:0})}var _=function(e){var t=e.styles,a=e.products,c=e.setIsFiltered,i=e.setFilteredProducts,o=z(),s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],p=u[1],h=Object(n.useState)([]),b=Object(l.a)(h,2),g=b[0],v=b[1],O=Object(n.useState)([]),y=Object(l.a)(O,2),C=y[0],I=y[1];return Object(n.useEffect)((function(){var e=a,t=!1;m&&(e=e.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())})),t=!0),g.length>0&&(e=e.filter((function(e){return e.furniture_style.some((function(e){return g.includes(e)}))})),t=!0),C.length>0&&(e=e.filter((function(e){return C.includes(e.dt)})),t=!0),c(t),i(e)}),[C,g,a,m,i,c]),r.a.createElement(f.a,{maxWidth:"md"},r.a.createElement(T,null,r.a.createElement(E.a,{className:o.toolbar},r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(d.a,{item:!0,xs:6,className:o.search},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(w.a,null)),r.a.createElement(j.a,{placeholder:"Search Furniture",onChange:function(e){var t=e.target.value;p(t)},classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(d.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(x.a,{multiple:!0,id:"furniture-styles",onChange:function(e,t){v(t)},options:t,autoHighlight:!0,disableCloseOnSelect:!0,renderOption:function(e,t){var a=t.selected;return r.a.createElement(d.a,{container:!0,justify:"space-between"},e,r.a.createElement(S.a,{icon:W,checkedIcon:R,style:{marginRight:8},checked:a}))},className:o.autocomplete,renderInput:function(e){return r.a.createElement(k.a,Object.assign({},e,{variant:"outlined",label:"Furniture Styles",placeholder:"Furniture Styles",fullWidth:!0,className:o.textField}))}})),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(x.a,{multiple:!0,id:"",options:B,onChange:function(e,t){I(t.map((function(e){return e.value})))},disableCloseOnSelect:!0,autoHighlight:!0,getOptionLabel:function(e){return e.label},renderOption:function(e,t){var a=t.selected;return r.a.createElement(d.a,{container:!0,justify:"space-between"},e.label,r.a.createElement(S.a,{icon:W,checkedIcon:R,style:{marginLeft:8},checked:a}))},className:o.autocomplete,renderInput:function(e){return r.a.createElement(k.a,Object.assign({},e,{variant:"outlined",label:"Delivery Time",placeholder:"Delivery Time",fullWidth:!0,className:o.textField}))}})))))),r.a.createElement(E.a,null))},D=a(159),M=a(157),L=a(158),G=a(42),H=a.n(G),P={thousand:".",precision:0,decimal:","};var A=Object(p.a)((function(e){return Object(h.a)({card:{height:"100%",display:"flex",flexDirection:"column",border:"2px solid ".concat(e.palette.grey[400]),borderRadius:e.shape.borderRadius},title:{fontWeight:e.typography.fontWeightBold,margin:e.spacing(2,0)},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}})})),J=function(e){var t,a=A(),n=e.product;return r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(M.a,{className:a.card},r.a.createElement(L.a,{className:a.cardContent},r.a.createElement(d.a,{container:!0,justify:"space-between",className:a.title},r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},n.name),r.a.createElement(D.a,{gutterBottom:!0,variant:"subtitle1"},(t=n.price,"Rp ".concat(H.a.format(t,P))))),r.a.createElement(D.a,{gutterBottom:!0},n.description.split("").splice(0,115).join("")),r.a.createElement(D.a,null,n.furniture_style.join(", ")),r.a.createElement(D.a,{align:"right"},"Delivery ",n.delivery_time," Days"))))},$=Object(p.a)((function(e){return Object(h.a)({loader:{position:"absolute",top:"40%",left:"50%"},cardGrid:{padding:e.spacing(0,3)}})})),q=function(){var e=$(),t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(!1),p=Object(l.a)(s,2),h=p[0],E=p[1],v=Object(n.useState)(""),j=Object(l.a)(v,2),O=j[0],y=j[1],w=Object(n.useState)(!1),S=Object(l.a)(w,2),k=S[0],x=S[1],C=Object(n.useState)([]),I=Object(l.a)(C,2),N=I[0],F=I[1],W=Object(n.useState)([]),R=Object(l.a)(W,2),z=R[0],B=R[1];Object(n.useEffect)((function(){E(!0),u.a.get("http://www.mocky.io/v2/5c9105cb330000112b649af8").then((function(e){var t=e.data;i(t.furniture_styles),F(t.products.map((function(e){return Object(o.a)({},e,{dt:Number(e.delivery_time)>30?"moreThanAMonth":e.delivery_time})}))),E(!1)})).catch((function(e){y(e),E(!1)}))}),[]);var T=k?z:N;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(_,{products:N,styles:c,setIsFiltered:function(e){return x(e)},setFilteredProducts:function(e){return B(e)}}),r.a.createElement("main",null,r.a.createElement(f.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(d.a,{container:!0,spacing:4},h?r.a.createElement(g.a,{size:100,className:e.loader}):O?r.a.createElement(b.a,{severity:"error"},"".concat(O)):T.map((function(e,t){return r.a.createElement(J,{key:t,product:e})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(106)}},[[74,1,2]]]);
//# sourceMappingURL=main.1894f2ec.chunk.js.map