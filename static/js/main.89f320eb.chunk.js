(this["webpackJsonptech-dashboard"]=this["webpackJsonptech-dashboard"]||[]).push([[0],{263:function(e,t,a){e.exports=a(397)},268:function(e,t,a){},269:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},393:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),i=(a(268),a(13)),o=(a(269),a(10)),s=a(64),m=a(2),u=a(223),d=a(19),p=a(225),f=a.n(p),E=a(431),h=a(432),b=a(183),g=a(184),v=a(66),y=a(472),O=a(437),w=a(438),j=a(411),x=a(439),S=a(185),k=a(56),_=a(435),N=a(436),A=a(440),I=a(441),D=a(442),R=a(443),C=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function T(){var e=C(),t=Object(d.a)(),a=r.a.useState(!1),n=Object(i.a)(a,2),c=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,null),r.a.createElement(h.a,{position:"fixed",className:Object(m.a)(e.appBar,Object(o.a)({},e.appBarShift,c))},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(m.a)(e.menuButton,c&&e.hide)},r.a.createElement(f.a,null)),r.a.createElement(v.a,{variant:"h6",noWrap:!0},"PSA Tech Dashboard"))),r.a.createElement(y.a,{className:e.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(g.a,{onClick:function(){l(!1)}},"ltr"===t.direction?r.a.createElement(_.a,null):r.a.createElement(N.a,null))),r.a.createElement(O.a,null),r.a.createElement(w.a,null,r.a.createElement(j.a,{button:!0,key:"All Data",component:k.b,to:"/table"},r.a.createElement(x.a,null,r.a.createElement(A.a,null)),r.a.createElement(S.a,{primary:"All Data"})),r.a.createElement(j.a,{button:!0,key:"Issues",component:k.b,to:"/issues"},r.a.createElement(x.a,null,r.a.createElement(I.a,null)),r.a.createElement(S.a,{primary:"Issues"})),r.a.createElement(j.a,{button:!0,key:"Devices",component:k.b,to:"/devices"},r.a.createElement(x.a,null,r.a.createElement(D.a,null)),r.a.createElement(S.a,{primary:"Devices"})),r.a.createElement(j.a,{button:!0,key:"Forms",component:k.b,to:"/kobo-forms"},r.a.createElement(x.a,null,r.a.createElement(R.a,null)),r.a.createElement(S.a,{primary:"Forms"})))))}var F=a(470),P=a(24),L=a.n(P),W=a(227),z=a.n(W),Y=a(234),B=a.n(Y),M=a(244),U=a.n(M),G=a(235),H=a.n(G),J=a(242),V=a.n(J),q=a(172),Z=a.n(q),$=a(171),K=a.n($),Q=a(236),X=a.n(Q),ee=a(237),te=a.n(ee),ae=a(239),ne=a.n(ae),re=a(240),ce=a.n(re),le=a(241),ie=a.n(le),oe=a(245),se=a.n(oe),me=a(238),ue=a.n(me),de=a(243),pe=a.n(de),fe=a(246),Ee=a.n(fe),he=function(e,t){return Object(s.a)({},e,{psaForms:t.data})},be=function(e,t){return Object(s.a)({},e,{psassgForms:t.data})},ge=function(e,t){return Object(s.a)({},e,{devices:t.data})},ve=function(e,t){return Object(s.a)({},e,{repositories:t.data})},ye=function(e,t){return Object(s.a)({},e,{helloText:"hi world"})},Oe=function(e,t){return Object(s.a)({},e,{site_information:t.data})},we=function(e,t){return Object(s.a)({},e,{site_information:e.site_information.push(t.data)})},je=function(e,t){switch(t.type){case"UPDATE_HELLO_WORLD":return ye(e,t);case"SET_SITE_INFO":return Oe(e,t);case"ADD_ONE_SITE_INFO_TO_STATE":return we(e,t);case"UPDATE_ALL_REPOS":return ve(e,t);case"SET_DEVICES_INFO":return ge(e,t);case"SET_PSA_FORMS":return he(e,t);case"SET_PSASSG_FORMS":return be(e,t);default:return Object(s.a)({},e)}},xe={helloText:"hello world",site_information:[],repositories:[],devices:[],psaForms:[],psassgForms:[]},Se=Object(n.createContext)(xe),ke=function(e){var t=e.children,a=Object(n.useReducer)(je,xe),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement(Se.Provider,{value:[l,o]},t)},_e=a(57),Ne=a.n(_e),Ae={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(K.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(X.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(Z.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(te.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(ue.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(ne.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(ce.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(ie.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Z.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(K.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(pe.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(se.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ee.a,Object.assign({},e,{ref:t}))}))},Ie=function(){var e=Object(n.useContext)(Se),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(i.a)(l,2),s=o[0],m=o[1];Object(n.useEffect)((function(){console.log("hello from table"),0===a.site_information.length?u("http://13.72.51.225/api/?tablerecords=all").then((function(){m(!1)})):m(!1)}),[s]);var u=function(e){return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.awrap(Ne.a.get(e).then((function(e){var t=e.data;c({type:"SET_SITE_INFO",data:t})})));case 2:case"end":return t.stop()}}))};return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(z.a,{isLoading:s,editable:{isEditable:function(e){return"MD"===e.state},isDeletable:!1,onRowAdd:function(e){}},icons:Ae,columns:[{title:"Code",field:"code"},{title:"Grower",field:"grower"},{title:"State",field:"state"},{title:"County",field:"county"},{title:"Email",field:"email"},{title:"Year",field:"year"},{title:"Address",field:"address"},{title:"Lat, Long",field:"latlng"},{title:"Notes",field:"notes"}],data:a.site_information,title:"Data Table",options:{exportButton:!0,exportFileName:"Site Information",addRowPosition:"last",exportAllData:!0,pageSize:10,pageSizeOptions:[5,10,20,50,100],groupRowSeparator:"  ",grouping:!0}}))},De=a(89),Re=(a(382),a(140)),Ce=a.n(Re),Te=a(448),Fe=a(449),Pe=a(474),Le=a(450),We=a(451),ze=a(203),Ye=Object(u.a)({card:{minWidth:275,maxWidth:300},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),Be=function(e){var t=e.data;Ye();return r.a.createElement(Te.a,{key:t.id,className:"repo"},r.a.createElement(Fe.a,{avatar:r.a.createElement(Pe.a,{variant:"square",src:t.owner.avatar_url,alt:t.owner.login}),title:t.name}),r.a.createElement(Le.a,null,r.a.createElement(v.a,null,"Open Issues: ",t.open_issues_count)),r.a.createElement(We.a,null,r.a.createElement(ze.a,{type:"button",size:"small",href:t.url,target:"_blank",title:"Check it on github"},"View")))},Me=function(e){var t=e.data;return console.log(t),r.a.createElement("div",{className:"repoRow"},t.map((function(e,t){return r.a.createElement(Be,{key:t,data:e})})))},Ue=function(){var e=r.a.useContext(Se),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){(function(e){var t;return L.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L.a.awrap(Ne.a.get(e).then((function(e){return e.data})).then((function(e){return e.length>0?{success:!0,data:e}:{success:!1,data:e}})).then((function(e){return e.success?(Promise.resolve("no error"),e.data):(Promise.reject("error"),!1)})));case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}))})("https://api.github.com/orgs/precision-sustainable-ag/repos").then((function(e){n({type:"UPDATE_ALL_REPOS",data:e})}))}),[]),r.a.createElement("div",{className:"issuesWrapper"},0===a.repositories.length?r.a.createElement("div",{className:"loaderRow"},r.a.createElement(Ce.a,{type:"cubes",color:"#3f51b5",width:"400px",height:"400px"})):r.a.createElement(Me,{data:a.repositories}))},Ge=(a(383),a(149)),He=a(150),Je=a(452),Ve=a(77),qe=a.n(Ve),Ze=Ge.a[300],$e=He.a[100],Ke=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),m=s[0],u=s[1],d=e.deviceData,p="",f="",E=!1;if(d.lastsession){var h=d.links.cellular[0].last_connect_time;f=qe.a.tz(h,"Africa/Abidjan").tz("America/New_York").format("MM/DD/YYYY hh:mm A").toString();var b=qe.a.tz(h,"Africa/Abidjan").tz("America/New_York").date(),g=qe.a.tz(h,"Africa/Abidjan").tz("America/New_York").month()+1,v=qe.a.tz(h,"Africa/Abidjan").tz("America/New_York").year(),y=qe()(),O=y.date(),w=y.month()+1;y.year()===v&&w===g?O===b?(p="Active Today",E=!0):p="Active this month":p="Not active this month"}return m?r.a.createElement(De.a,{to:{pathname:"/devices/".concat(c),state:d}}):r.a.createElement(Je.a,{className:d.lastsession?"deviceActionArea aliveDevice":"deviceActionArea deadDevice",style:{backgroundColor:d.lastsession?E?$e:"":Ze,color:d.lastsession?E?"#114C2A !important":"":"#360000 !important"},disabled:!d.lastsession,onClick:function(){!function(e){l(e),u(!0)}(d.id)}},r.a.createElement("p",{style:{fontWeight:"bold"}},d.name),d.lastsession?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Last Session: ",f),r.a.createElement("p",{style:{fontWeight:"bold"}},p)):r.a.createElement(n.Fragment,null,r.a.createElement("p",{style:{fontWeight:"bold"}},"Last Session: Not Available"),r.a.createElement("p",{style:{fontWeight:"bold"}},"Device Dead")))},Qe=(a(387),function(){return console.log("env: ","production"),"https://private-anon-3185b3b9ae-hologram.apiary-proxy.com"}),Xe=function(){var e=btoa("apikey:8Lcx29Nrqf6LqcWjqhYI9w4EHPHnCZ");return{responseType:"json",headers:{Authorization:"Basic ".concat(e)}}},et=function(){var e=Object(n.useContext)(Se),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(i.a)(l,2),s=o[0],m=o[1],u=[],d="";Object(n.useEffect)((function(){console.log("hello from devices"),d=Qe(),console.log(d),p("".concat(d,"/api/1/devices?withlocation=true")).then((function(){m(!1),console.log("This is just intended to retrieve basic info, rest of the data should technically come from websockets")}))}),[]);var p=function(e){var t;return L.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Xe(),a.next=3,L.a.awrap(f(e,t));case 3:case"end":return a.stop()}}))},f=function e(t,a){return L.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.awrap(Ne.a.get(t,a).then((function(e){return u.push(e.data.data),e})).then((function(t){var n;return L.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.data.continues){r.next=5;break}return r.next=3,L.a.awrap(e("".concat(d).concat(t.data.links.next),a));case 3:r.next=9;break;case 5:n=[],n=(n=u.flat()).sort(E),c({type:"SET_DEVICES_INFO",data:n});case 9:case"end":return r.stop()}}))})).catch((function(e){console.log(e)})));case 2:case"end":return n.stop()}}))},E=function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r};return r.a.createElement("div",{className:"devicesWrapper"},r.a.createElement("div",{className:"devicesListWrapper"},s?r.a.createElement(Ce.a,{type:"cubes",width:"500px",height:"500px",color:"#3f51b5"}):r.a.createElement("div",{className:"devices"},a.devices.map((function(e,t){return r.a.createElement("div",{className:"device",key:e.id},r.a.createElement(Te.a,{variant:"elevation",elevation:3,className:"deviceDataWrapper"},r.a.createElement(Ke,{deviceData:e})))})))))},tt=a(471),at=a(475),nt=a(454),rt=a(476),ct=a(469),lt=(a(389),a(31)),it=a.n(lt),ot=a(455),st=a(456),mt=a(457),ut=a(218),dt=a(453),pt=a(458),ft=a(459),Et=a(460),ht=a(461),bt=a(462),gt=a(463),vt=a(464),yt=a(465),Ot=a(466),wt=a(467),jt=a(468);delete it.a.Icon.Default.prototype._getIconUrl,it.a.Icon.Default.mergeOptions({iconRetinaUrl:a(390),iconUrl:a(391),shadowUrl:a(392)});var xt=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"100%",height:300,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}})),St=function(e){var t=xt();console.log(e.location.state);var a=Object(n.useState)({name:""}),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)({flag:!1,data:{}}),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)({}),f=Object(i.a)(p,2),E=f[0],h=f[1];Object(n.useEffect)((function(){void 0===e.location.state?(console.log("undefined !"),o({name:"Loading"}),Ne.a.get("".concat(Qe(),"/api/1/devices/").concat(e.match.params.deviceId,"/?withlocation=true"),Xe()).then((function(e){e.data.success&&(o(e.data.data),d({flag:!0,data:[e.data.data.lastsession.latitude,e.data.data.lastsession.longitude]}))}))):(o(e.location.state),Ne.a.get("".concat(Qe(),"/api/1/csr/rdm?deviceid=").concat(e.location.state.id),Xe()).then((function(e){console.log("most recent data",e),h(e.data.data[0])})).then((function(){d({flag:!0,data:[e.location.state.lastsession.latitude,e.location.state.lastsession.longitude]})})))}),[]);var b=function(){var e=JSON.parse(E.data);(e=e.data).substring(0,100),e.substring(100);return e=atob(e),r.a.createElement("span",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"}},e)},v=function(){var e=JSON.parse(E.data);console.log(e);var t=e.timestamp;return r.a.createElement("span",null,t)},y=function(){var e=JSON.parse(E.data).errorcode;return r.a.createElement("span",null,e)};return u.flag?r.a.createElement("div",null,r.a.createElement(ot.a,{cellHeight:600,spacing:1,className:t.gridList},r.a.createElement(st.a,{key:l.id,style:{width:"100%"}},r.a.createElement(tt.a,{center:u.data,style:{height:"300px"},zoom:13,zoomControl:!1},r.a.createElement(at.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(nt.a,{position:u.data},r.a.createElement(rt.a,null,"Last Active Location"))),r.a.createElement(mt.a,{title:l.name,style:{zIndex:"999"},titlePosition:"top",actionIcon:r.a.createElement(k.b,{to:"/devices"},r.a.createElement(g.a,{"aria-label":"All Devices",tooltip:"All Devices",className:t.icon,to:"/devices"},r.a.createElement(dt.a,null))),actionPosition:"left",className:t.titleBar}))),r.a.createElement(n.Fragment,{key:"griddata"},r.a.createElement(ot.a,{cols:3,style:{flexWrap:"nowrap",transform:"translateZ(0)",height:"auto"}},r.a.createElement(st.a,{style:{height:"auto"}},r.a.createElement(Te.a,null,r.a.createElement(Le.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{alignItems:"flex-start",key:"created"},r.a.createElement(x.a,null,r.a.createElement(pt.a,null)),r.a.createElement(S.a,{primary:"Created",secondary:l.whencreated})),r.a.createElement(j.a,{alignItems:"flex-start",key:"imei"},r.a.createElement(x.a,null,r.a.createElement(ft.a,null)),r.a.createElement(S.a,{primary:"IMEI",secondary:l.imei})),r.a.createElement(j.a,{alignItems:"flex-start",key:"phone"},r.a.createElement(x.a,null,r.a.createElement(Et.a,null)),r.a.createElement(S.a,{primary:"Phone Number",secondary:l.phonenumber?l.phonenumber:"None"})))))),r.a.createElement(st.a,{style:{height:"auto"}},r.a.createElement(Te.a,null,r.a.createElement(Le.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{alignItems:"flex-start",key:"orgid"},r.a.createElement(x.a,null,r.a.createElement(ht.a,null)),r.a.createElement(S.a,{primary:"ORG ID",secondary:l.orgid})),r.a.createElement(j.a,{alignItems:"flex-start",key:"imeisv"},r.a.createElement(x.a,null,r.a.createElement(bt.a,null)),r.a.createElement(S.a,{primary:"IMEI SV",secondary:l.imei_sv})),r.a.createElement(j.a,{alignItems:"flex-start",key:"type"},r.a.createElement(x.a,null,r.a.createElement(gt.a,null)),r.a.createElement(S.a,{primary:"Type",secondary:l.type})))))),r.a.createElement(st.a,{style:{height:"auto"}},r.a.createElement(Te.a,null,r.a.createElement(Le.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{alignItems:"flex-start",key:"network"},r.a.createElement(x.a,null,r.a.createElement(vt.a,null)),r.a.createElement(S.a,{primary:"Network",secondary:l.links.cellular[0].last_network_used})),r.a.createElement(j.a,{alignItems:"flex-start",key:"lastconnect"},r.a.createElement(x.a,null,r.a.createElement(yt.a,null)),r.a.createElement(S.a,{primary:"Last Connection",secondary:qe.a.tz(l.links.cellular[0].last_connect_time,"UTC").tz("America/New_York").format("MM/DD/YYYY hh:mm A").toString()})),r.a.createElement(j.a,{alignItems:"flex-start",key:"expires"},r.a.createElement(x.a,null,r.a.createElement(Ot.a,null)),r.a.createElement(S.a,{primary:"Expires",secondary:qe.a.tz(l.links.cellular[0].whenexpires,"UTC").tz("America/New_York").format("MM/DD/YYYY").toString()}))))))),r.a.createElement(ot.a,{row:1},r.a.createElement(st.a,{style:{height:"auto",width:"100%"}},r.a.createElement(Te.a,null,r.a.createElement(Fe.a,{title:"Most Recent Connection"}),r.a.createElement(Le.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{alignItems:"flex-start",key:"data"},r.a.createElement(x.a,null,r.a.createElement(wt.a,null)),r.a.createElement(S.a,{primary:"Data",secondary:b()})),r.a.createElement(j.a,{alignItems:"flex-start",key:"timestamp"},r.a.createElement(x.a,null,r.a.createElement(wt.a,null)),r.a.createElement(S.a,{primary:"Timestamp",secondary:v()})),r.a.createElement(j.a,{alignItems:"flex-start",key:"errorcode"},r.a.createElement(x.a,null,r.a.createElement(wt.a,null)),r.a.createElement(S.a,{primary:"Error Code",secondary:y()}))))))),r.a.createElement(ot.a,{row:1},r.a.createElement(st.a,{style:{height:"auto",width:"100%"}},r.a.createElement(Te.a,null,r.a.createElement(Fe.a,{title:"Tags"}),r.a.createElement(Le.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{alignItems:"flex-start",key:"tags"},r.a.createElement(x.a,null,r.a.createElement(jt.a,null)),r.a.createElement(S.a,{primary:JSON.parse(E.data).tags.map((function(e,t){return r.a.createElement(ut.a,{key:"chip".concat(t),style:{marginRight:"1em",marginBottom:"1em"},label:e})})),title:"Tags"}))))))))):r.a.createElement(ct.a,{variant:"rect",width:"100%",height:"300px",animation:"wave"})},kt=function(e){return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="psa"===t.t0?3:"psassg"===t.t0?6:9;break;case 3:return t.next=5,L.a.awrap(Ne.a.get("http://13.72.51.225/api/kobo.php?get=assets&for=psa"));case 5:return t.abrupt("return",t.sent);case 6:return t.next=8,L.a.awrap(Ne.a.get("http://13.72.51.225/api/kobo.php?get=assets&for=psassg"));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}))},_t=(a(393),function(){return r.a.createElement("div",{className:"skeletonWrapper"},r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ct.a,{variant:"rect",height:"200px",width:"200px"}))}),Nt=(a(394),Object(u.a)({card:{maxWidth:400,width:300},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})),At=function(){var e=Nt(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),m=s[0],u=s[1],d=Object(n.useContext)(Se),p=Object(i.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){console.log("hello from forms"),kt("psa").then((function(e){l(!1),E({type:"SET_PSA_FORMS",data:e.data.results})})).then((function(){return L.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.awrap(kt("psassg").then((function(e){u(!1),E({type:"SET_PSASSG_FORMS",data:e.data.results})})));case 2:case"end":return e.stop()}}))}))}),[]),r.a.createElement("div",{className:"koboFormsWrapper"},r.a.createElement(v.a,{variant:"h5",className:"mb-2"},"PSA Forms"),c?r.a.createElement(_t,null):0!==f.psaForms.length?r.a.createElement("div",{className:"koboForms"},f.psaForms.map((function(t,a){return""!==t.name&&t.deployment__active?r.a.createElement(Te.a,{className:e.card,variant:"outlined",key:a},r.a.createElement(Le.a,null,r.a.createElement(v.a,{variant:"body1"},t.name),r.a.createElement(v.a,{variant:"body2"},"Total Submission Count: ",t.deployment__submission_count))):""}))):"",r.a.createElement(v.a,{variant:"h5",className:"mt-2"},"Social Science Group Forms"),m?r.a.createElement(_t,null):0!==f.psassgForms.length?r.a.createElement("div",{className:"koboForms"},f.psassgForms.map((function(t,a){return""!==t.name&&t.deployment__active?r.a.createElement(Te.a,{className:e.card,variant:"outlined",key:a},r.a.createElement(Le.a,null,r.a.createElement(v.a,{variant:"body1"},t.name),r.a.createElement(v.a,{variant:"body2"},"Total Submission Count: ",t.deployment__submission_count))):""}))):"")},It=function(){var e=Object(n.useContext)(Se),t=Object(i.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"Landing")))},Dt=a(219),Rt=a(247),Ct=a.n(Rt),Tt=(a(395),function(){var e=Object(n.useState)("idle"),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"animationWrapper"},r.a.createElement(Ct.a,{transparent:!0,width:640,height:480,animationName:a,file:"login-bear.flr"})),r.a.createElement("div",{className:"formWrapper"},r.a.createElement(Dt.a,{onFocus:function(){c("idle"===a?"test":"idle")},onfocusout:function(){c(c("idle"===a?"test":"idle"))},type:"text",label:"Username",variant:"outlined",color:"secondary",style:{width:"100%"}}),r.a.createElement(F.a,{pb:2.5}),r.a.createElement(Dt.a,{type:"password",label:"Password",variant:"outlined",color:"secondary",style:{width:"100%"}}))))}),Ft=Object(u.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));var Pt=function(){var e=Ft(),t=Object(n.useState)(!1),a=Object(i.a)(t,2);return a[0],a[1],r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(F.a,null,r.a.createElement(De.d,null,r.a.createElement(De.b,{path:"/",component:Tt,exact:!0}),r.a.createElement(De.b,{path:"/table",component:Ie,exact:!0}),r.a.createElement(De.b,{path:"/landing",component:It,exact:!0}),r.a.createElement(De.b,{path:"/issues",component:Ue,exact:!0}),r.a.createElement(De.b,{path:"/devices",component:et,exact:!0}),r.a.createElement(De.b,{path:"/devices/:deviceId",component:St}),r.a.createElement(De.b,{path:"/kobo-forms",component:At})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(396);l.a.render(r.a.createElement(ke,null,r.a.createElement(k.a,null,r.a.createElement(Pt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[263,1,2]]]);
//# sourceMappingURL=main.89f320eb.chunk.js.map