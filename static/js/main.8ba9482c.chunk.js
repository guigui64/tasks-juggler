(window["webpackJsonptasks-juggler"]=window["webpackJsonptasks-juggler"]||[]).push([[0],{47:function(e,t,n){e.exports=n(72)},52:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),i=n(28),l=n(16),s=n(23),m=(n(52),n(74)),d=n(18),u=function(e){var t=e.isOpen,n=e.onCancel,a=e.onConfirm,o=e.confirmButtonText,r=e.deletionTargetName;return c.a.createElement(m.a,{cancelButtonText:"Cancel",confirmButtonText:o,icon:"trash",intent:d.a.DANGER,isOpen:t,onCancel:n,onConfirm:a,canEscapeKeyCancel:!0,canOutsideClickCancel:!0},c.a.createElement("p",null,"Are you sure you want to delete ".concat(r," ?")))},p=n(38),j=n(15),E=n(39),f=function(e){var t=e.isOpen,n=e.handleClose,a=e.handleConfirm;return c.a.createElement(p.a,{isOpen:t,icon:"info-sign",onClose:n,title:"Palantir Foundry"},c.a.createElement("div",{className:j.a.DIALOG_BODY},c.a.createElement("p",null,"TODO add form")),c.a.createElement("div",{className:j.a.DIALOG_FOOTER},c.a.createElement("div",{className:j.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(E.a,{content:"This button is hooked up to close the dialog."},c.a.createElement(s.a,{onClick:n},"Close")),c.a.createElement(s.a,{text:"Add",onClick:function(){a(),n()}}))))},O=n(76),k=n(75),h=n(19),T=n(77),g=n(22),b=n(8),C=j.a.DARK,I=-2,v=function(e){var t=e.theme,n=e.switchTheme,a=e.dumpDataBase,o=e.setSelectedProject,r=e.projects,i=e.selectedProject,l=e.openDeleteProjAlert,m=e.openAddProjDialog,d=c.a.createElement(O.a,null,c.a.createElement(O.a.Item,{text:(""===t?"Dark":"Light")+" theme",icon:""===t?"moon":"flash",onClick:n}),c.a.createElement(O.a.Divider,null),c.a.createElement(O.a.Item,{text:"Dump database",icon:"floppy-disk",onClick:a}),c.a.createElement(O.a.Item,{text:"TODO",icon:"lock",disabled:!0})),u=c.a.createElement(O.a,null,c.a.createElement(O.a.Divider,{title:"Projects"}),c.a.createElement(O.a.Item,{text:"Add project",icon:"add",onClick:function(){return m(!0)}}),c.a.createElement(O.a.Item,{text:"Delete current project",icon:"trash",intent:"danger",disabled:i===I,onClick:function(){return l(!0)}}),c.a.createElement(O.a.Divider,{title:"Tasks"}),c.a.createElement(O.a.Item,{text:"Add task",icon:"add"}));return c.a.createElement(k.a,null,c.a.createElement(k.a.Group,{align:h.a.LEFT},c.a.createElement(k.a.Heading,null,"Tasks Juggler")),c.a.createElement(k.a.Group,{align:h.a.RIGHT},c.a.createElement(T.a,{large:!0,onChange:function(e){o(e)},selectedTabId:i},r.map(function(e){return c.a.createElement(T.a.Tab,{title:e.name,id:e.id})})),c.a.createElement(k.a.Divider,null),c.a.createElement(g.a,{content:u,position:b.a.BOTTOM},c.a.createElement(s.a,{minimal:!0,icon:"menu",text:"Actions"})),c.a.createElement(g.a,{content:d,position:b.a.BOTTOM},c.a.createElement(s.a,{minimal:!0,icon:"cog",text:"Settings"}))))},D=0,A=0,w={projects:[{name:"Toto",desc:"toto project",id:D++},{name:"Titi",desc:"titi project",id:D++}],tasks:[{title:"ZombieTask",desc:"I have no project...",id:A++,projectId:-1,duration:1},{title:"TotoTask1",desc:"task 1 of toto project",id:A++,projectId:0,duration:.5},{title:"TotoTask2",desc:"task 2 of toto project",id:A++,projectId:0,duration:1},{title:"TitiTask",desc:"task 1 of titi project",id:A++,projectId:1,duration:1}]},S=function(){var e=Object(a.useState)(2),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(I),m=Object(l.a)(r,2),d=m[0],p=m[1],j=Object(a.useState)(w),E=Object(l.a)(j,2),O=E[0],k=E[1],h=Object(a.useState)(!1),T=Object(l.a)(h,2),g=T[0],b=T[1],D=Object(a.useState)(localStorage.getItem("tasks-juggler-theme")||""),A=Object(l.a)(D,2),S=A[0],x=A[1],P=Object(a.useState)([{name:"All",id:I}].concat(Object(i.a)(O.projects.map(function(e){return{name:e.name,id:e.id}})))),y=Object(l.a)(P,2),B=y[0],N=y[1],G=Object(a.useState)(!1),L=Object(l.a)(G,2),R=L[0],F=L[1],_=Object(a.useState)(!1),H=Object(l.a)(_,2),J=H[0],K=H[1],M=function(e){O.projects=O.projects.filter(function(t){return t.id!==e}),O.tasks.forEach(function(t){return t.projectId===e&&(t.projectId=-1)}),k(O),N([{name:"All",id:I}].concat(Object(i.a)(O.projects.map(function(e){return{name:e.name,id:e.id}})))),p(I)},W=c.a.createElement(u,{confirmButtonText:"Delete project",isOpen:R,onCancel:function(){return F(!1)},onConfirm:function(){F(!1),M(d)},deletionTargetName:B.find(function(e){return e.id===d}).name}),Y=c.a.createElement(f,{isOpen:J,handleConfirm:function(){return e="Test"+n,O.projects.push({name:e,desc:"",id:n}),k(O),N([{name:"All",id:I}].concat(Object(i.a)(O.projects.map(function(e){return{name:e.name,id:e.id}})))),p(n),void o(n+1);var e},handleClose:function(){return K(!1)}});return c.a.createElement("div",{className:S,id:"container"},c.a.createElement(v,{theme:S,switchTheme:function(){var e=""===S?C:"";x(e),function(e){localStorage.setItem("tasks-juggler-theme",e)}(e)},dumpDataBase:function(){return console.log(O)},setSelectedProject:p,projects:B,deleteProject:M,selectedProject:d,openDeleteProjAlert:F,openAddProjDialog:K}),c.a.createElement("div",{id:"content"},c.a.createElement("h2",null,"Tasks"),c.a.createElement("ul",null,O.tasks.filter(function(e){return e.projectId===d||d===I&&-1!==e.projectId}).map(function(e){return c.a.createElement("li",{key:e.id},e.title,c.a.createElement("small",null," ",e.desc," -- (",e.duration," days)"))})),c.a.createElement("h3",null,"Orphan tasks",c.a.createElement(s.a,{onClick:function(){return b(!g)}},g?"Hide":"Show")),g&&c.a.createElement("ul",null,O.tasks.filter(function(e){return-1===e.projectId}).map(function(e){return c.a.createElement("li",{key:e.id},e.title,c.a.createElement("small",null," ",e.desc," -- (",e.duration," days)"))})),c.a.createElement("h2",null,"Planning")),W,Y)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(67),n(68),n(69),n(70),n(71);r.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.8ba9482c.chunk.js.map