(this["webpackJsonptech-dashboard"]=this["webpackJsonptech-dashboard"]||[]).push([[0],{173:function(e){e.exports=JSON.parse('{"domain":"psa-tech-dashboard.auth0.com","clientId":"jw8MpURCiiyE3TqjYriwGUtRvq9hEIgD"}')},265:function(e,t,a){e.exports=a(398)},270:function(e,t,a){},271:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(270),a(12)),o=(a(271),a(10)),s=a(55),u=a(3),m=a(225),d=a(20),p=a(227),f=a.n(p),E=a(432),h=a(433),g=a(184),b=a(185),v=a(66),w=a(130),y=a(186),O=a(475),j=a(442),x=a(438),k=a(412),S=a(443),_=a(187),N=a(46),A=a(434),C=a(435),I=a(440),R=a(441),D=a(444),T=a(445),P=a(446),F=a(447),W=a(18),L=a.n(W),z=a(2),Y=a(224),U=a.n(Y),M=function(){var e="";e="https://precision-sustainable-ag.github.io"===window.location.pathname||"https://precision-sustainable-ag.github.io/tech-dashboard"===window.location.pathname?"/tech-dashboard":"",window.history.replaceState({},document.title,window.location.pathname+e)},B=r.a.createContext(),G=function(){return Object(n.useContext)(B)},H=Object(m.a)((function(e){return{root:{display:"flex",flexGrow:1},title:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function J(){var e=H(),t=Object(d.a)(),a=r.a.useState(!1),n=Object(i.a)(a,2),c=n[0],l=n[1],s=r.a.useState(null),m=Object(i.a)(s,2),p=m[0],W=m[1],L=Boolean(p),z=G(),Y=z.isAuthenticated,U=z.loginWithRedirect,M=z.logout,B=function(){W(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,null),r.a.createElement(h.a,{position:"fixed",className:Object(u.a)(e.appBar,Object(o.a)({},e.appBarShift,c)),color:"primary"},r.a.createElement(g.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(u.a)(e.menuButton,c&&e.hide)},r.a.createElement(f.a,null)),r.a.createElement(v.a,{variant:"h6",noWrap:!0,className:e.title},"PSA Tech Dashboard"),!Y&&r.a.createElement(b.a,{color:"inherit",onClick:function(){return U({})}},r.a.createElement(A.a,null)),Y&&r.a.createElement("div",null,r.a.createElement(b.a,{"aria-label":"user profile","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){W(e.currentTarget)},color:"inherit"},r.a.createElement(C.a,null)),r.a.createElement(w.a,{id:"menu-appbar",anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:L,onClose:B},r.a.createElement(y.a,{onClick:B},"Profile"),r.a.createElement(y.a,{onClick:function(){return M()}},"Log Out"))))),r.a.createElement(O.a,{className:e.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(b.a,{onClick:function(){l(!1)}},"ltr"===t.direction?r.a.createElement(I.a,null):r.a.createElement(R.a,null))),r.a.createElement(j.a,null),r.a.createElement(x.a,null,r.a.createElement(k.a,{button:!0,key:"Home",component:N.b,to:"/"},r.a.createElement(S.a,null,r.a.createElement(D.a,null)),r.a.createElement(_.a,{primary:"Quick Links"})),r.a.createElement(k.a,{button:!0,key:"All Data",component:N.b,to:"/table"},r.a.createElement(S.a,null,r.a.createElement(D.a,null)),r.a.createElement(_.a,{primary:"All Data"})),r.a.createElement(k.a,{button:!0,key:"Issues",component:N.b,to:"/issues"},r.a.createElement(S.a,null,r.a.createElement(T.a,null)),r.a.createElement(_.a,{primary:"Issues"})),r.a.createElement(k.a,{button:!0,key:"Devices",component:N.b,to:"/devices"},r.a.createElement(S.a,null,r.a.createElement(P.a,null)),r.a.createElement(_.a,{primary:"Devices"})),r.a.createElement(k.a,{button:!0,key:"Forms",component:N.b,to:"/kobo-forms"},r.a.createElement(S.a,null,r.a.createElement(F.a,null)),r.a.createElement(_.a,{primary:"Forms"})))))}var q=a(473),V=a(229),Z=a.n(V),K=a(236),Q=a.n(K),$=a(246),X=a.n($),ee=a(237),te=a.n(ee),ae=a(244),ne=a.n(ae),re=a(172),ce=a.n(re),le=a(171),ie=a.n(le),oe=a(238),se=a.n(oe),ue=a(239),me=a.n(ue),de=a(241),pe=a.n(de),fe=a(242),Ee=a.n(fe),he=a(243),ge=a.n(he),be=a(247),ve=a.n(be),we=a(240),ye=a.n(we),Oe=a(245),je=a.n(Oe),xe=a(248),ke=a.n(xe),Se=function(e,t){return Object(s.a)({},e,{psaForms:t.data})},_e=function(e,t){return Object(s.a)({},e,{psassgForms:t.data})},Ne=function(e,t){return Object(s.a)({},e,{devices:t.data})},Ae=function(e,t){return Object(s.a)({},e,{repositories:t.data})},Ce=function(e,t){return Object(s.a)({},e,{helloText:"hi world"})},Ie=function(e,t){return Object(s.a)({},e,{site_information:t.data})},Re=function(e,t){return Object(s.a)({},e,{site_information:e.site_information.push(t.data)})},De=function(e,t){return"hey"===t.data.username&&"hey"===t.data.password?Object(s.a)({},e,{loggedIn:!0}):Object(s.a)({},e,{loggedIn:!1})},Te=function(e,t){switch(t.type){case"UPDATE_HELLO_WORLD":return Ce(e,t);case"SET_SITE_INFO":return Ie(e,t);case"ADD_ONE_SITE_INFO_TO_STATE":return Re(e,t);case"UPDATE_ALL_REPOS":return Ae(e,t);case"SET_DEVICES_INFO":return Ne(e,t);case"SET_PSA_FORMS":return Se(e,t);case"SET_PSASSG_FORMS":return _e(e,t);case"CHECK_USERNAME_PASSWORD":return De(e,t);default:return Object(s.a)({},e)}},Pe={loggedIn:!1,site_information:[],repositories:[],devices:[],psaForms:[],psassgForms:[]},Fe=Object(n.createContext)(Pe),We=function(e){var t=e.children,a=Object(n.useReducer)(Te,Pe),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement(Fe.Provider,{value:[l,o]},t)},Le=a(59),ze=a.n(Le),Ye={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(te.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(ie.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(se.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(ce.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(me.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(ye.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(pe.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ee.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(ge.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(ce.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(ne.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(ie.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(je.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(X.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(ve.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(ke.a,Object.assign({},e,{ref:t}))}))},Ue=function(){var e=Object(n.useContext)(Fe),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(i.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)((function(){console.log("hello from table"),0===a.site_information.length?m("http://13.72.51.225/api/?tablerecords=all").then((function(){u(!1)})):u(!1)}),[s]);var m=function(e){return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.awrap(ze.a.get(e).then((function(e){var t=e.data;c({type:"SET_SITE_INFO",data:t})})));case 2:case"end":return t.stop()}}))};return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(Z.a,{isLoading:s,editable:{isEditable:function(e){return"MD"===e.state},isDeletable:!1,onRowAdd:function(e){}},icons:Ye,columns:[{title:"Code",field:"code"},{title:"Grower",field:"grower"},{title:"State",field:"state"},{title:"County",field:"county"},{title:"Email",field:"email"},{title:"Year",field:"year"},{title:"Address",field:"address"},{title:"Lat, Long",field:"latlng"},{title:"Notes",field:"notes"}],data:a.site_information,title:"Data Table",options:{exportButton:!0,exportFileName:"Site Information",addRowPosition:"last",exportAllData:!0,pageSize:10,pageSizeOptions:[5,10,20,50,100],groupRowSeparator:"  ",grouping:!0}}))},Me=a(89),Be=(a(384),a(106)),Ge=a.n(Be),He=a(451),Je=a(452),qe=a(477),Ve=a(453),Ze=a(454),Ke=a(204),Qe=Object(m.a)({card:{minWidth:275,maxWidth:300},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),$e=function(e){var t=e.data;Qe();return r.a.createElement(He.a,{key:t.id,className:"repo"},r.a.createElement(Je.a,{avatar:r.a.createElement(qe.a,{variant:"square",src:t.owner.avatar_url,alt:t.owner.login}),title:t.name}),r.a.createElement(Ve.a,null,r.a.createElement(v.a,null,"Open Issues: ",t.open_issues_count)),r.a.createElement(Ze.a,null,r.a.createElement(Ke.a,{type:"button",size:"small",href:t.url,target:"_blank",title:"Check it on github"},"View")))},Xe=function(e){var t=e.data;return console.log(t),r.a.createElement("div",{className:"repoRow"},t.map((function(e,t){return r.a.createElement($e,{key:t,data:e})})))},et=function(){var e=r.a.useContext(Fe),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){(function(e){var t;return L.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L.a.awrap(ze.a.get(e).then((function(e){return e.data})).then((function(e){return e.length>0?{success:!0,data:e}:{success:!1,data:e}})).then((function(e){return e.success?(Promise.resolve("no error"),e.data):(Promise.reject("error"),!1)})));case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}))})("https://api.github.com/orgs/precision-sustainable-ag/repos").then((function(e){n({type:"UPDATE_ALL_REPOS",data:e})}))}),[]),r.a.createElement("div",{className:"issuesWrapper"},0===a.repositories.length?r.a.createElement("div",{className:"loaderRow"},r.a.createElement(Ge.a,{type:"cubes",color:"#3f51b5",width:"400px",height:"400px"})):r.a.createElement(Xe,{data:a.repositories}))},tt=(a(385),a(150)),at=a(151),nt=a(455),rt=a(77),ct=a.n(rt),lt=tt.a[300],it=at.a[100],ot=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=e.deviceData,p="",f="",E=!1;if(d.lastsession){var h=d.links.cellular[0].last_connect_time;f=ct.a.tz(h,"Africa/Abidjan").tz("America/New_York").format("MM/DD/YYYY hh:mm A").toString();var g=ct.a.tz(h,"Africa/Abidjan").tz("America/New_York").date(),b=ct.a.tz(h,"Africa/Abidjan").tz("America/New_York").month()+1,v=ct.a.tz(h,"Africa/Abidjan").tz("America/New_York").year(),w=ct()(),y=w.date(),O=w.month()+1;w.year()===v&&O===b?y===g?(p="Active Today",E=!0):p="Active this month":p="Not active this month"}return u?r.a.createElement(Me.a,{to:{pathname:"/devices/".concat(c),state:d}}):r.a.createElement(nt.a,{className:d.lastsession?"deviceActionArea aliveDevice":"deviceActionArea deadDevice",style:{backgroundColor:d.lastsession?E?it:"":lt,color:d.lastsession?E?"#114C2A !important":"":"#360000 !important"},disabled:!d.lastsession,onClick:function(){!function(e){l(e),m(!0)}(d.id)}},r.a.createElement("p",{style:{fontWeight:"bold"}},d.name),d.lastsession?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Last Session: ",f),r.a.createElement("p",{style:{fontWeight:"bold"}},p)):r.a.createElement(n.Fragment,null,r.a.createElement("p",{style:{fontWeight:"bold"}},"Last Session: Not Available"),r.a.createElement("p",{style:{fontWeight:"bold"}},"Device Dead")))},st=(a(389),function(){return console.log("env: ","production"),"https://private-anon-3185b3b9ae-hologram.apiary-proxy.com"}),ut=function(){var e=btoa("apikey:8Lcx29Nrqf6LqcWjqhYI9w4EHPHnCZ");return{responseType:"json",headers:{Authorization:"Basic ".concat(e)}}},mt=function(){var e=Object(n.useContext)(Fe),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(i.a)(l,2),s=o[0],u=o[1],m=[],d="";Object(n.useEffect)((function(){console.log("hello from devices"),d=st(),console.log(d),p("".concat(d,"/api/1/devices?withlocation=true")).then((function(){u(!1),console.log("This is just intended to retrieve basic info, rest of the data should technically come from websockets")}))}),[]);var p=function(e){var t;return L.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=ut(),a.next=3,L.a.awrap(f(e,t));case 3:case"end":return a.stop()}}))},f=function e(t,a){return L.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.awrap(ze.a.get(t,a).then((function(e){return m.push(e.data.data),e})).then((function(t){var n;return L.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.data.continues){r.next=5;break}return r.next=3,L.a.awrap(e("".concat(d).concat(t.data.links.next),a));case 3:r.next=9;break;case 5:n=[],n=(n=m.flat()).sort(E),c({type:"SET_DEVICES_INFO",data:n});case 9:case"end":return r.stop()}}))})).catch((function(e){console.log(e)})));case 2:case"end":return n.stop()}}))},E=function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r};return r.a.createElement("div",{className:"devicesWrapper"},r.a.createElement("div",{className:"devicesListWrapper"},s?r.a.createElement(Ge.a,{type:"cubes",width:"500px",height:"500px",color:"#3f51b5"}):r.a.createElement("div",{className:"devices"},a.devices.map((function(e,t){return r.a.createElement("div",{className:"device",key:e.id},r.a.createElement(He.a,{variant:"elevation",elevation:3,className:"deviceDataWrapper"},r.a.createElement(ot,{deviceData:e})))})))))},dt=a(474),pt=a(478),ft=a(457),Et=a(479),ht=a(472),gt=(a(391),a(31)),bt=a.n(gt),vt=a(458),wt=a(459),yt=a(460),Ot=a(219),jt=a(456),xt=a(461),kt=a(462),St=a(463),_t=a(464),Nt=a(465),At=a(466),Ct=a(467),It=a(468),Rt=a(469),Dt=a(470),Tt=a(471);delete bt.a.Icon.Default.prototype._getIconUrl,bt.a.Icon.Default.mergeOptions({iconRetinaUrl:a(392),iconUrl:a(393),shadowUrl:a(394)});var Pt=Object(m.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"100%",height:300,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}})),Ft=function(e){var t=Pt();console.log(e.location.state);var a=Object(n.useState)({name:""}),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)({flag:!1,data:{}}),u=Object(i.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)({}),f=Object(i.a)(p,2),E=f[0],h=f[1];Object(n.useEffect)((function(){void 0===e.location.state?(console.log("undefined !"),o({name:"Loading"}),ze.a.get("".concat(st(),"/api/1/devices/").concat(e.match.params.deviceId,"/?withlocation=true"),ut()).then((function(e){e.data.success&&(o(e.data.data),d({flag:!0,data:[e.data.data.lastsession.latitude,e.data.data.lastsession.longitude]}))}))):(o(e.location.state),ze.a.get("".concat(st(),"/api/1/csr/rdm?deviceid=").concat(e.location.state.id),ut()).then((function(e){console.log("most recent data",e),h(e.data.data[0])})).then((function(){d({flag:!0,data:[e.location.state.lastsession.latitude,e.location.state.lastsession.longitude]})})))}),[]);var g=function(){var e=JSON.parse(E.data);(e=e.data).substring(0,100),e.substring(100);return e=atob(e),r.a.createElement("span",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"}},e)},v=function(){var e=JSON.parse(E.data);console.log(e);var t=e.timestamp;return r.a.createElement("span",null,t)},w=function(){var e=JSON.parse(E.data).errorcode;return r.a.createElement("span",null,e)};return m.flag?r.a.createElement("div",null,r.a.createElement(vt.a,{cellHeight:600,spacing:1,className:t.gridList},r.a.createElement(wt.a,{key:l.id,style:{width:"100%"}},r.a.createElement(dt.a,{center:m.data,style:{height:"300px"},zoom:13,zoomControl:!1},r.a.createElement(pt.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(ft.a,{position:m.data},r.a.createElement(Et.a,null,"Last Active Location"))),r.a.createElement(yt.a,{title:l.name,style:{zIndex:"999"},titlePosition:"top",actionIcon:r.a.createElement(N.b,{to:"/devices"},r.a.createElement(b.a,{"aria-label":"All Devices",tooltip:"All Devices",className:t.icon,to:"/devices"},r.a.createElement(jt.a,null))),actionPosition:"left",className:t.titleBar}))),r.a.createElement(n.Fragment,{key:"griddata"},r.a.createElement(vt.a,{cols:3,style:{flexWrap:"nowrap",transform:"translateZ(0)",height:"auto"}},r.a.createElement(wt.a,{style:{height:"auto"}},r.a.createElement(He.a,null,r.a.createElement(Ve.a,null,r.a.createElement(x.a,null,r.a.createElement(k.a,{alignItems:"flex-start",key:"created"},r.a.createElement(S.a,null,r.a.createElement(xt.a,null)),r.a.createElement(_.a,{primary:"Created",secondary:l.whencreated})),r.a.createElement(k.a,{alignItems:"flex-start",key:"imei"},r.a.createElement(S.a,null,r.a.createElement(kt.a,null)),r.a.createElement(_.a,{primary:"IMEI",secondary:l.imei})),r.a.createElement(k.a,{alignItems:"flex-start",key:"phone"},r.a.createElement(S.a,null,r.a.createElement(St.a,null)),r.a.createElement(_.a,{primary:"Phone Number",secondary:l.phonenumber?l.phonenumber:"None"})))))),r.a.createElement(wt.a,{style:{height:"auto"}},r.a.createElement(He.a,null,r.a.createElement(Ve.a,null,r.a.createElement(x.a,null,r.a.createElement(k.a,{alignItems:"flex-start",key:"orgid"},r.a.createElement(S.a,null,r.a.createElement(_t.a,null)),r.a.createElement(_.a,{primary:"ORG ID",secondary:l.orgid})),r.a.createElement(k.a,{alignItems:"flex-start",key:"imeisv"},r.a.createElement(S.a,null,r.a.createElement(Nt.a,null)),r.a.createElement(_.a,{primary:"IMEI SV",secondary:l.imei_sv})),r.a.createElement(k.a,{alignItems:"flex-start",key:"type"},r.a.createElement(S.a,null,r.a.createElement(At.a,null)),r.a.createElement(_.a,{primary:"Type",secondary:l.type})))))),r.a.createElement(wt.a,{style:{height:"auto"}},r.a.createElement(He.a,null,r.a.createElement(Ve.a,null,r.a.createElement(x.a,null,r.a.createElement(k.a,{alignItems:"flex-start",key:"network"},r.a.createElement(S.a,null,r.a.createElement(Ct.a,null)),r.a.createElement(_.a,{primary:"Network",secondary:l.links.cellular[0].last_network_used})),r.a.createElement(k.a,{alignItems:"flex-start",key:"lastconnect"},r.a.createElement(S.a,null,r.a.createElement(It.a,null)),r.a.createElement(_.a,{primary:"Last Connection",secondary:ct.a.tz(l.links.cellular[0].last_connect_time,"UTC").tz("America/New_York").format("MM/DD/YYYY hh:mm A").toString()})),r.a.createElement(k.a,{alignItems:"flex-start",key:"expires"},r.a.createElement(S.a,null,r.a.createElement(Rt.a,null)),r.a.createElement(_.a,{primary:"Expires",secondary:ct.a.tz(l.links.cellular[0].whenexpires,"UTC").tz("America/New_York").format("MM/DD/YYYY").toString()}))))))),r.a.createElement(vt.a,{row:1},r.a.createElement(wt.a,{style:{height:"auto",width:"100%"}},r.a.createElement(He.a,null,r.a.createElement(Je.a,{title:"Most Recent Connection"}),r.a.createElement(Ve.a,null,r.a.createElement(x.a,null,r.a.createElement(k.a,{alignItems:"flex-start",key:"data"},r.a.createElement(S.a,null,r.a.createElement(Dt.a,null)),r.a.createElement(_.a,{primary:"Data",secondary:g()})),r.a.createElement(k.a,{alignItems:"flex-start",key:"timestamp"},r.a.createElement(S.a,null,r.a.createElement(Dt.a,null)),r.a.createElement(_.a,{primary:"Timestamp",secondary:v()})),r.a.createElement(k.a,{alignItems:"flex-start",key:"errorcode"},r.a.createElement(S.a,null,r.a.createElement(Dt.a,null)),r.a.createElement(_.a,{primary:"Error Code",secondary:w()}))))))),r.a.createElement(vt.a,{row:1},r.a.createElement(wt.a,{style:{height:"auto",width:"100%"}},r.a.createElement(He.a,null,r.a.createElement(Je.a,{title:"Tags"}),r.a.createElement(Ve.a,null,r.a.createElement(x.a,null,r.a.createElement(k.a,{alignItems:"flex-start",key:"tags"},r.a.createElement(S.a,null,r.a.createElement(Tt.a,null)),r.a.createElement(_.a,{primary:JSON.parse(E.data).tags.map((function(e,t){return r.a.createElement(Ot.a,{key:"chip".concat(t),style:{marginRight:"1em",marginBottom:"1em"},label:e})})),title:"Tags"}))))))))):r.a.createElement(ht.a,{variant:"rect",width:"100%",height:"300px",animation:"wave"})},Wt=function(e){return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="psa"===t.t0?3:"psassg"===t.t0?6:9;break;case 3:return t.next=5,L.a.awrap(ze.a.get("http://13.72.51.225/api/kobo.php?get=assets&for=psa"));case 5:return t.abrupt("return",t.sent);case 6:return t.next=8,L.a.awrap(ze.a.get("http://13.72.51.225/api/kobo.php?get=assets&for=psassg"));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}))},Lt=(a(395),function(){return r.a.createElement("div",{className:"skeletonWrapper"},r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}),r.a.createElement(ht.a,{variant:"rect",height:"200px",width:"200px"}))}),zt=(a(396),Object(m.a)({card:{maxWidth:400,width:300},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})),Yt=function(){var e=zt(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useContext)(Fe),p=Object(i.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){console.log("hello from forms"),Wt("psa").then((function(e){l(!1),E({type:"SET_PSA_FORMS",data:e.data.results})})).then((function(){return L.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.awrap(Wt("psassg").then((function(e){m(!1),E({type:"SET_PSASSG_FORMS",data:e.data.results})})));case 2:case"end":return e.stop()}}))}))}),[]),r.a.createElement("div",{className:"koboFormsWrapper"},r.a.createElement(v.a,{variant:"h5",className:"mb-2"},"PSA Forms"),c?r.a.createElement(Lt,null):0!==f.psaForms.length?r.a.createElement("div",{className:"koboForms"},f.psaForms.map((function(t,a){return""!==t.name&&t.deployment__active?r.a.createElement(He.a,{className:e.card,variant:"outlined",key:a},r.a.createElement(Ve.a,null,r.a.createElement(v.a,{variant:"body1"},t.name),r.a.createElement(v.a,{variant:"body2"},"Total Submission Count: ",t.deployment__submission_count))):""}))):"",r.a.createElement(v.a,{variant:"h5",className:"mt-2"},"Social Science Group Forms"),u?r.a.createElement(Lt,null):0!==f.psassgForms.length?r.a.createElement("div",{className:"koboForms"},f.psassgForms.map((function(t,a){return""!==t.name&&t.deployment__active?r.a.createElement(He.a,{className:e.card,variant:"outlined",key:a},r.a.createElement(Ve.a,null,r.a.createElement(v.a,{variant:"body1"},t.name),r.a.createElement(v.a,{variant:"body2"},"Total Submission Count: ",t.deployment__submission_count))):""}))):"")},Ut=function(){var e=Object(n.useContext)(Fe),t=Object(i.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"Landing")))},Mt=function(e){var t=e.component,a=e.path,c=Object(z.a)(e,["component","path"]),l=G(),i=l.loading,o=l.isAuthenticated,s=l.loginWithRedirect;Object(n.useEffect)((function(){if(!i&&!o){L.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.awrap(s({appState:{targetUrl:a}}));case 2:case"end":return e.stop()}}))}}),[i,o,s,a]);return r.a.createElement(Me.b,Object.assign({path:a,render:function(e){return!0===o?r.a.createElement(t,e):null}},c))},Bt=Object(m.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));var Gt=function(){var e=G().loading,t=Bt(),a=Object(n.useState)(!1),c=Object(i.a)(a,2);return c[0],c[1],e?r.a.createElement(Ge.a,{type:"spin",width:"200",height:"200"}):r.a.createElement(n.Fragment,null,r.a.createElement(J,null),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(q.a,null,r.a.createElement(Me.d,null,r.a.createElement(Mt,{path:"/table",component:Ue}),r.a.createElement(Me.b,{path:"/",component:Ut,exact:!0}),r.a.createElement(Mt,{path:"/issues",component:et,exact:!0}),r.a.createElement(Mt,{path:"/devices",component:mt,exact:!0}),r.a.createElement(Mt,{path:"/devices/:deviceId",component:Ft}),r.a.createElement(Mt,{path:"/kobo-forms",component:Yt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(397);var Ht=a(49),Jt=Object(Ht.a)(),qt=a(173);l.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?M:a,l=Object(z.a)(e,["children","onRedirectCallback"]),o=Object(n.useState)(),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(),p=Object(i.a)(d,2),f=p[0],E=p[1],h=Object(n.useState)(),g=Object(i.a)(h,2),b=g[0],v=g[1],w=Object(n.useState)(!0),y=Object(i.a)(w,2),O=y[0],j=y[1],x=Object(n.useState)(!1),k=Object(i.a)(x,2),S=k[0],_=k[1];Object(n.useEffect)((function(){!function(){var e,t,a,n,r;L.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,L.a.awrap(U()(l));case 2:if(e=i.sent,v(e),!window.location.search.includes("code=")||!window.location.search.includes("state=")){i.next=10;break}return i.next=7,L.a.awrap(e.handleRedirectCallback());case 7:t=i.sent,a=t.appState,c(a);case 10:return i.next=12,L.a.awrap(e.isAuthenticated());case 12:if(n=i.sent,m(n),!n){i.next=19;break}return i.next=17,L.a.awrap(e.getUser());case 17:r=i.sent,E(r);case 19:j(!1);case 20:case"end":return i.stop()}}))}()}),[]);return r.a.createElement(B.Provider,{value:{isAuthenticated:u,user:f,loading:O,popupOpen:S,loginWithPopup:function(){var e,t,a=arguments;return L.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{},_(!0),n.prev=2,n.next=5,L.a.awrap(b.loginWithPopup(e));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.error(n.t0);case 10:return n.prev=10,_(!1),n.finish(10);case 13:return n.next=15,L.a.awrap(b.getUser());case 15:t=n.sent,E(t),m(!0);case 18:case"end":return n.stop()}}),null,null,[[2,7,10,13]])},handleRedirectCallback:function(){var e;return L.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,L.a.awrap(b.handleRedirectCallback());case 3:return t.next=5,L.a.awrap(b.getUser());case 5:e=t.sent,j(!1),m(!0),E(e);case 9:case"end":return t.stop()}}))},getIdTokenClaims:function(){return b.getIdTokenClaims.apply(b,arguments)},loginWithRedirect:function(){return b.loginWithRedirect.apply(b,arguments)},getTokenSilently:function(){return b.getTokenSilently.apply(b,arguments)},getTokenWithPopup:function(){return b.getTokenWithPopup.apply(b,arguments)},logout:function(){return b.logout.apply(b,arguments)}}},t)}),{domain:qt.domain,client_id:qt.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){Jt.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(We,null,r.a.createElement(N.a,{history:Jt},r.a.createElement(Gt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[265,1,2]]]);
//# sourceMappingURL=main.8b6f0d1a.chunk.js.map