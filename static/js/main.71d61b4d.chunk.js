(window["webpackJsonptasks-juggler"]=window["webpackJsonptasks-juggler"]||[]).push([[0],{60:function(e,t,n){e.exports=n(89)},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(105),r=n(11),o=(n(61),n(62),n(63),n(64),n(65),n(0)),c=n.n(o),i=n(12),l=n.n(i),s=n(20),u=n(19),d=n(9),p=n(33),m=n(21),f=n(10),g="@@settings/SELECT_TASK",O=n(6),b=O.a.DARK,j=-2,E="ProjectNameValidity::OK",h=function(e){return function(t){return t.length<3?{valid:"ProjectNameValidity::NOK_TOO_SHORT",reason:"Too short"}:e.projects.find(function(e){return e.name.toUpperCase()===t.toUpperCase()})?{valid:"ProjectNameValidity::NOK_NAME_TAKEN",reason:"Project with name ".concat(t," already exists")}:{valid:E}}},v="TaskTitleValidity::OK",y=function(e){return function(t,n){return t.length<3?{valid:"TaskTitleValidity::NOK_TOO_SHORT",reason:"Too short"}:e.tasks.filter(function(e){return e.projectId===n}).some(function(e){return e.title===t})?{valid:"TaskTitleValidity::NOK_TITLE_TAKEN",reason:"Task with title ".concat(t," already exists in project ").concat(e.projects.find(function(e){return e.id===n}).name)}:{valid:v}}},T=function(e){return function(t){return e.tasks.find(function(e){return e.id===t})}},k=n(35),w=n(102),S=n(26),C=n(104),x=n(49),I=n(30);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M256,405.993c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10 C265.999,410.472,261.52,405.993,256,405.993z"}))),N=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M277.206,263.064c-3.907-3.902-10.239-3.899-14.141,0.009c-1.878,1.88-4.387,2.916-7.064,2.916 c-2.677,0-5.186-1.036-7.064-2.916c-3.903-3.908-10.234-3.912-14.141-0.009c-3.908,3.903-3.912,10.234-0.009,14.141 c5.656,5.664,13.189,8.783,21.213,8.783c8.024,0,15.558-3.119,21.215-8.783C281.118,273.299,281.113,266.967,277.206,263.064z"}))),B=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M256,0.011c-22.055,0-39.998,17.943-39.998,39.998S233.945,80.007,256,80.007c22.055,0,39.998-17.943,39.998-39.998 S278.055,0.011,256,0.011z M256,60.008c-11.027,0-19.999-8.972-19.999-19.999c0-11.028,8.972-19.999,19.999-19.999 c11.028,0,19.999,8.972,19.999,19.999C275.999,51.037,267.027,60.008,256,60.008z"}))),L=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M136.005,40.009c-22.055,0-39.998,17.943-39.998,39.998c0,22.055,17.943,39.998,39.998,39.998 s39.998-17.943,39.998-39.998C176.003,57.952,158.06,40.009,136.005,40.009z M136.005,100.006 c-11.028,0-19.999-8.972-19.999-19.999c0-11.027,8.972-19.999,19.999-19.999s19.999,8.972,19.999,19.999 C156.004,91.035,147.033,100.006,136.005,100.006z"}))),R=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M40.01,137.005c-22.055,0-39.998,17.943-39.998,39.998s17.943,39.998,39.998,39.998c22.055,0,39.998-17.943,39.998-39.998 S62.064,137.005,40.01,137.005z M40.01,197.002c-11.028,0-19.999-8.972-19.999-19.999s8.972-19.999,19.999-19.999 c11.027,0,19.999,8.972,19.999,19.999S51.037,197.002,40.01,197.002z"}))),_=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M375.994,40.009c-22.055,0-39.998,17.943-39.998,39.998c0,22.055,17.943,39.998,39.998,39.998 s39.998-17.943,39.998-39.998C415.993,57.952,398.049,40.009,375.994,40.009z M375.994,100.006 c-11.028,0-19.999-8.972-19.999-19.999c0-11.027,8.972-19.999,19.999-19.999c11.028,0,19.999,8.972,19.999,19.999 C395.993,91.035,387.022,100.006,375.994,100.006z"}))),M=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M471.99,137.005c-22.055,0-39.998,17.943-39.998,39.998s17.943,39.998,39.998,39.998 c22.055,0,39.998-17.943,39.998-39.998S494.045,137.005,471.99,137.005z M471.99,197.002c-11.027,0-19.999-8.972-19.999-19.999 s8.972-19.999,19.999-19.999c11.028,0,19.999,8.972,19.999,19.999S483.018,197.002,471.99,197.002z"}))),z=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M505.269,327.811c-12.26-18.398-37.078-23.37-55.471-11.091c-0.07,0.047-0.139,0.094-0.208,0.143l-48.431,34.123 l-101.276-40.509c15.91-12.842,26.114-32.486,26.114-54.477c0-38.596-31.401-69.997-69.997-69.997 c-38.596,0-69.997,31.401-69.997,69.997c0,21.99,10.202,41.633,26.111,54.475l-101.274,40.511l-48.429-34.121 c-0.072-0.051-0.145-0.101-0.218-0.149c-18.435-12.279-43.225-7.289-55.464,11.096c-12.234,18.359-7.325,43.113,11.003,55.399 l65.918,45.943c0.058,0.04,0.116,0.08,0.174,0.119c11.174,7.443,25.017,8.664,37.045,3.852l45.134-18.053v86.915 c0,5.523,4.477,10,10,10h159.993c5.523,0,10-4.477,10-10v-86.915l45.113,18.045c11.718,4.719,25.656,3.757,37.067-3.844 c0.058-0.039,0.116-0.078,0.174-0.119l65.917-45.942C512.596,370.927,517.506,346.172,505.269,327.811z M206.002,255.999 c0-27.569,22.429-49.998,49.998-49.998c27.569,0,49.998,22.429,49.998,49.998c0,27.569-22.429,49.998-49.998,49.998 C228.431,305.997,206.002,283.569,206.002,255.999z M277.319,325.996L256,357.97l-21.319-31.974H277.319z M29.088,366.75 c-0.057-0.04-0.114-0.079-0.172-0.117c-9.196-6.129-11.68-18.523-5.541-27.736c6.088-9.145,18.401-11.677,27.632-5.604 l5.906,4.161l-23.98,31.976L29.088,366.75z M417.011,412.681c-5.558,3.665-12.463,4.288-18.453,1.876l-58.847-23.539 c-3.082-1.233-6.573-0.856-9.32,1.004c-2.747,1.86-4.394,4.962-4.394,8.281v91.686h-59.997V455.99c0-5.523-4.477-10-10-10 c-5.523,0-10,4.477-10,10v35.998h-59.997v-91.686c0-3.318-1.646-6.42-4.394-8.281c-2.748-1.861-6.239-2.237-9.32-1.004 l-58.847,23.539c-6.086,2.434-12.954,1.75-18.454-1.876L49.35,380.873l23.918-31.895l30.491,21.482 c2.765,1.948,6.329,2.366,9.472,1.109l100.892-40.355l33.557,50.328c1.854,2.781,4.977,4.452,8.32,4.452 c3.343,0,6.465-1.671,8.32-4.452l33.56-50.33l100.891,40.357c3.142,1.257,6.707,0.839,9.473-1.11l26.968-19l20.535,34.225 L417.011,412.681z M483.085,366.633c-0.059,0.039-0.116,0.078-0.173,0.118l-10.719,7.472l-20.586-34.314l9.391-6.616 c9.17-6.052,21.514-3.57,27.632,5.609C494.758,348.101,492.288,360.5,483.085,366.633z"}))),G=c.a.createElement("g",null),F=c.a.createElement("g",null),H=c.a.createElement("g",null),U=c.a.createElement("g",null),W=c.a.createElement("g",null),K=c.a.createElement("g",null),V=c.a.createElement("g",null),J=c.a.createElement("g",null),Y=c.a.createElement("g",null),q=c.a.createElement("g",null),X=c.a.createElement("g",null),Z=c.a.createElement("g",null),$=c.a.createElement("g",null),Q=c.a.createElement("g",null),ee=c.a.createElement("g",null),te=function(e){var t=e.svgRef,n=e.title,a=D(e,["svgRef","title"]);return c.a.createElement("svg",P({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 511.999 511.999",style:{enableBackground:"new 0 0 511.999 511.999"},xmlSpace:"preserve",ref:t},a),c.a.createElement("title",null,n),A,N,B,L,R,_,M,z,G,F,H,U,W,K,V,J,Y,q,X,Z,$,Q,ee)},ne=c.a.forwardRef(function(e,t){return c.a.createElement(te,P({svgRef:t},e))}),ae=(n.p,n(22)),re=Object(s.b)(function(e){return{smallScreen:e.window.smallScreen}})(function(e){var t=e.text,n=e.showButtonText,a=e.position,r=e.disabled,o=void 0!==r&&r,i=e.smallScreen,l=e.buttonProps;return c.a.createElement(x.a,{content:t,disabled:o||n||i,position:a},c.a.createElement(ae.b,Object.assign({text:n?t:"",disabled:o},l)))}),oe=n(101),ce=function(e){var t=e.openAddProjDialog,n=e.openEditProjDialog,a=e.selectedProject,r=e.openDeleteProjAlert,o=e.dumpDataBase,i=e.loadDataBase;return c.a.createElement(oe.a,null,c.a.createElement(oe.a.Divider,{title:"Projects"}),c.a.createElement(oe.a.Item,{text:"Add project",icon:"add",onClick:function(){return t(!0)}}),c.a.createElement(oe.a.Item,{text:"Edit project",icon:"edit",disabled:a===j,onClick:function(){return n(!0)}}),c.a.createElement(oe.a.Item,{text:"Delete project",icon:"trash",intent:"danger",disabled:a===j,onClick:function(){return r(!0)}}),c.a.createElement(oe.a.Divider,{title:"Database"}),c.a.createElement(oe.a.Item,{text:"Dump database",icon:"floppy-disk",onClick:o}),c.a.createElement(oe.a.Item,{text:"Load database",icon:"database",onClick:i}))},ie=n(93),le=n(94),se="@@settings/SET_THEME",ue=Object(s.b)(function(e){return{theme:e.settings.theme,showOrphan:e.settings.showOrphan,showButtonText:e.settings.showButtonText}},function(e){return{setTheme:function(t){return e(function(e){return{type:se,payload:e}}(t))},setShowOrphan:function(t){return e(function(e){return{type:"@@settings/SET_SHOW_ORPHAN",payload:e}}(t))},setShowButtonText:function(t){return e(function(e){return{type:"@@settings/SET_SHOW_BUTTON_TEXT",payload:e}}(t))}}})(function(e){var t=e.theme,n=e.setTheme,a=e.showOrphan,r=e.showButtonText,o=e.setShowOrphan,i=e.setShowButtonText;return c.a.createElement(ie.a,{style:{padding:"10px",margin:"0"}},c.a.createElement(le.a,{alignIndicator:S.a.RIGHT,checked:t===b,onChange:function(){var e=""===t?b:"";n(e),localStorage.setItem("tasks-juggler-theme",e)}},(""===t?"Dark":"Light")+" theme"),c.a.createElement(le.a,{alignIndicator:S.a.RIGHT,checked:a,onChange:function(){var e=!a;o(e),localStorage.setItem("tasks-juggler-show-orphan",String(e))}},"Show orphan tasks"),c.a.createElement(le.a,{alignIndicator:S.a.RIGHT,checked:r,onChange:function(){var e=!r;i(e),localStorage.setItem("tasks-juggler-show-button-text",String(e))}},"Show buttons text"))}),de=Object(s.b)(function(e){return{theme:e.settings.theme,showButtonText:e.settings.showButtonText}})(function(e){var t=e.theme,n=e.dumpDataBase,a=e.loadDataBase,i=e.setSelectedProject,l=e.dataBase,s=e.selectedProject,u=e.openDeleteProjAlert,p=e.openAddProjDialog,m=e.openEditProjDialog,f=e.showButtonText,g=[{name:"All",id:j,desc:"All the projects"}].concat(Object(k.a)(l.projects)),O=Object(o.useState)(""),E=Object(d.a)(O,2),h=E[0],v=E[1],y=["bounce","flash","pulse","rubberBand","headShake","swing","tada","wobble","jello","heartBeat"],T=Object(o.useState)(0),P=Object(d.a)(T,2),D=P[0],A=P[1];return c.a.createElement(w.a,null,c.a.createElement(w.a.Group,{align:S.a.LEFT},c.a.createElement(w.a.Heading,{style:{fontWeight:"bold",display:"flex",alignItems:"center"},onMouseEnter:function(){return v("animated "+y[D])},onMouseLeave:function(){v(""),A((D+1)%y.length)}},c.a.createElement(ne,{className:h,style:{animationIterationCount:"infinite"},height:"40px",fill:t===b?"white":"black"}),c.a.createElement("div",{style:{marginLeft:"10px"}},"Tasks Juggler".toUpperCase()))),c.a.createElement(w.a.Group,{align:S.a.RIGHT},c.a.createElement(C.a,{large:!0,onChange:function(e){i(e)},selectedTabId:s},g.map(function(e){return c.a.createElement(C.a.Tab,{title:c.a.createElement(x.a,{content:e.desc,position:r.a.BOTTOM},e.name.toUpperCase()),id:e.id,key:e.id})})),c.a.createElement(w.a.Divider,null),c.a.createElement(I.a,{content:c.a.createElement(ce,{openAddProjDialog:p,openEditProjDialog:m,selectedProject:s,openDeleteProjAlert:u,dumpDataBase:n,loadDataBase:a}),position:r.a.BOTTOM},c.a.createElement(re,{buttonProps:{minimal:!0,icon:"build"},text:"Actions",showButtonText:f,position:r.a.LEFT})),c.a.createElement(I.a,{content:c.a.createElement(ue,null),position:r.a.BOTTOM},c.a.createElement(re,{buttonProps:{minimal:!0,icon:"cog"},text:"Settings",showButtonText:f,position:r.a.LEFT}))))}),pe=n(54),me=n(95),fe=n(96),ge=n(86),Oe=new FileReader,be=function(e){var t=e.isOpen,n=e.onClose,a=e.dump,r=e.onClipboard;return c.a.createElement(pe.a,{icon:"database",title:"DataBase dump",isOpen:t,onClose:n},c.a.createElement("div",{className:O.a.DIALOG_BODY},c.a.createElement("p",null,"Copy to clipboard or save it to your files :"),c.a.createElement(me.a,{id:"dump",readOnly:!0,style:{width:"100%",minHeight:"300px"},defaultValue:a})),c.a.createElement("div",{className:O.a.DIALOG_FOOTER},c.a.createElement("div",{className:O.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(ae.b,{text:"Copy to clipboard",icon:"clipboard",intent:m.a.PRIMARY,onClick:function(){document.getElementById("dump").select(),document.execCommand("copy"),r()}}),c.a.createElement(ae.b,{text:"Download as JSON",icon:"download",intent:m.a.PRIMARY,onClick:function(){var e=new Blob([a],{type:"text/plain;charset=utf-8"});ge.saveAs(e,"tasks-juggler-db.json")}}))))},je=function(e){var t=e.isOpen,n=e.onClose,a=e.onLoad,r=Object(o.useState)(""),i=Object(d.a)(r,2),l=i[0],s=i[1],u=Object(o.useState)(""),p=Object(d.a)(u,2),f=p[0],g=p[1],b=function(e){a(e)&&n()};return c.a.createElement(pe.a,{icon:"database",title:"DataBase dump",isOpen:t,onClose:n},c.a.createElement("div",{className:O.a.DIALOG_BODY},c.a.createElement("p",null,"Copy your database in the following area and click on 'Load' :"),c.a.createElement(me.a,{autoFocus:!0,id:"dump",style:{width:"100%",minHeight:"100px",marginBottom:"10px"},value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("div",{className:O.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(ae.b,{text:"Load",disabled:0===l.length,icon:"upload",intent:m.a.PRIMARY,onClick:function(){return b(l)}}))),c.a.createElement("div",{className:O.a.DIALOG_FOOTER},c.a.createElement("p",null,"OR load from your files :"),c.a.createElement("div",{className:O.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(fe.a,{text:f||"Choose JSON file",buttonText:"Browse",inputProps:{id:"file-input",accept:".json",multiple:!1,onChange:function(e){return g(e.currentTarget.value)}}}),c.a.createElement(ae.b,{text:"Load from a file",icon:"folder-open",intent:m.a.PRIMARY,disabled:""===f,onClick:function(){var e=document.getElementById("file-input");Oe.onload=function(){b(Oe.result)},Oe.readAsText(e.files[0])}}))))},Ee=n(17),he=n(97),ve=function(e){var t=e.deletionTargetName,n=Object(Ee.a)(e,["deletionTargetName"]);return c.a.createElement(he.a,Object.assign({cancelButtonText:"Cancel",icon:"trash",intent:m.a.DANGER,canEscapeKeyCancel:!0,canOutsideClickCancel:!0},n),c.a.createElement("p",null,"Are you sure you want to delete ".concat(t," ?")))},ye=n(55),Te=function(e){var t=e.type,n=e.what,a=e.disabled,r=e.action,o=Object(Ee.a)(e,["type","what","disabled","action"]);return c.a.createElement(pe.a,Object.assign({icon:t,title:"".concat(t.charAt(0).toUpperCase()+t.slice(1)," ").concat(n),canOutsideClickClose:!1},o),c.a.createElement("div",{className:O.a.DIALOG_BODY},o.children),c.a.createElement("div",{className:O.a.DIALOG_FOOTER},c.a.createElement("div",{className:O.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(ae.b,{onClick:o.onClose},"Close"),c.a.createElement(ae.b,{text:"".concat(t.charAt(0).toUpperCase()+t.slice(1)," ").concat(n),intent:m.a.PRIMARY,onClick:function(){r(),o.onClose()},disabled:a}))))},ke=function(e){var t=e.type,n=e.disabled,a=e.action,r=e.errorMessage,o=e.name,i=e.desc,l=e.onNameChange,s=e.onDescChange,u=Object(Ee.a)(e,["type","disabled","action","errorMessage","name","desc","onNameChange","onDescChange"]);return c.a.createElement(Te,Object.assign({type:t,what:"project",disabled:n,action:a},u),c.a.createElement(ie.a,{helperText:r,label:"Project name",labelFor:"name-input",labelInfo:"(required)",inline:!0},c.a.createElement(ye.a,{id:"name-input",placeholder:"Enter project name here.",value:o,onChange:l,autoFocus:!0})),c.a.createElement(ie.a,{label:"Description",labelFor:"desc-input",labelInfo:"(recommended)"},c.a.createElement(me.a,{id:"desc-input",placeholder:"Enter a short description of the project here.",style:{width:"100%"},value:i,onChange:s})))},we=function(e){var t=e.add,n=e.validateName,a=Object(Ee.a)(e,["add","validateName"]),r=Object(o.useState)(""),i=Object(d.a)(r,2),l=i[0],s=i[1],u=Object(o.useState)(""),p=Object(d.a)(u,2),m=p[0],f=p[1],g=Object(o.useState)(!0),O=Object(d.a)(g,2),b=O[0],j=O[1],h=Object(o.useState)(""),v=Object(d.a)(h,2),y=v[0],T=v[1];return c.a.createElement(ke,Object.assign({type:"add",disabled:b,action:function(){return t(l,m)},errorMessage:y,name:l,desc:m,onNameChange:function(e){var t=e.target.value;s(t);var a=n(t),r=a.valid,o=a.reason;j(r!==E),T(o||"")},onDescChange:function(e){return f(e.target.value)}},a))},Se=function(e){var t=e.project,n=e.validateName,a=e.edit,r=Object(Ee.a)(e,["project","validateName","edit"]),i=Object(o.useState)("ERROR"),l=Object(d.a)(i,2),s=l[0],u=l[1],p=Object(o.useState)("ERROR"),m=Object(d.a)(p,2),f=m[0],g=m[1];Object(o.useEffect)(function(){t&&(u(t.name),g(t.desc))},[t]);var O=Object(o.useState)(!0),b=Object(d.a)(O,2),j=b[0],h=b[1],v=Object(o.useState)(""),y=Object(d.a)(v,2),T=y[0],k=y[1],w=function(e,a){var r=n(e),o=r.valid,c=r.reason;"ProjectNameValidity::NOK_NAME_TAKEN"===o&&e===t.name&&(a!==t.desc?(o=E,c=""):(o="ProjectNameValidity::NOK_OTHER",c="Nothing changed...")),h(o!==E),k(c||"")};return c.a.createElement(ke,Object.assign({type:"edit",disabled:j,action:function(){return a(t.id,s,f)},errorMessage:T,name:s,desc:f,onNameChange:function(e){var t=e.target.value;u(t),w(t,f)},onDescChange:function(e){g(e.target.value),w(s,e.target.value)}},r))},Ce=n(98),xe=n(103),Ie=n(100),Pe=n(32),De=function(e){var t,n=e.customClass,a=e.customStyle,r=e.enteringAnimation,o=e.enteredAnimation,i=e.exitingAnimation,l=e.exitedAnimation,s=Object(Ee.a)(e,["customClass","customStyle","enteringAnimation","enteredAnimation","exitingAnimation","exitedAnimation"]),d=(t={},Object(u.a)(t,Pe.b,r),Object(u.a)(t,Pe.a,o),Object(u.a)(t,Pe.d,i),Object(u.a)(t,Pe.c,l),t);return c.a.createElement(Pe.e,s,function(e){return c.a.createElement("div",{className:"".concat(n||""," animated ").concat(d[e]||""),style:a},s.children)})},Ae=function(e){var t=e.type,n=e.taskToEdit,a=e.action,r=e.projects,i=e.selectedProjectId,l=e.validateTitle,s=Object(Ee.a)(e,["type","taskToEdit","action","projects","selectedProjectId","validateTitle"]),u=Object(o.useState)(""),p=Object(d.a)(u,2),m=p[0],f=p[1],g=Object(o.useState)(""),O=Object(d.a)(g,2),b=O[0],j=O[1],E=Object(o.useState)(0),h=Object(d.a)(E,2),y=h[0],T=h[1];Object(o.useEffect)(function(){n&&(f(n.title),j(n.desc),T(n.duration))},[n]);var k=Object(o.useState)("add"===t),w=Object(d.a)(k,2),S=w[0],C=w[1],x=Object(o.useState)(""),I=Object(d.a)(x,2),P=I[0],D=I[1],A=Object(o.useState)(0),N=Object(d.a)(A,2),B=N[0],L=N[1];Object(o.useEffect)(function(){i&&L(i>=0?i:0)},[i]);var R=Object(o.useState)("edit"===t),_=Object(d.a)(R,2),M=_[0],z=_[1];return c.a.createElement(Te,Object.assign({type:t,what:"task",disabled:S,action:function(){return a(B,y,m,b)}},s),"edit"!==t&&c.a.createElement(ie.a,{label:"Task project",labelFor:"project-input",labelInfo:"(required)",inline:!0},c.a.createElement(Ce.a,{options:r.map(function(e){return e.name}),value:r.find(function(e){return e.id===B}).name,onChange:function(e){var t=r.find(function(t){return t.name===e.currentTarget.value}).id;if(L(t),""!==m){var n=l(m,t),a=n.valid,o=n.reason;C(a!==v),D(o||"")}}})),c.a.createElement(ie.a,{helperText:P,label:"Task title",labelFor:"title-input",labelInfo:"(required)",inline:!0},c.a.createElement(ye.a,{id:"title-input",placeholder:"Enter task title here.",value:m,onChange:function(e){var t=e.target.value;if(f(t),n&&t===n.title)C(!1);else{var a=l(t,B),r=a.valid,o=a.reason;C(r!==v),D(o||"")}}})),c.a.createElement(ie.a,{label:"Description",labelFor:"desc-input",labelInfo:"(recommended)"},c.a.createElement(me.a,{id:"desc-input",placeholder:"Enter a short description of the task here.",style:{width:"100%"},value:b,onChange:function(e){return j(e.target.value)}})),c.a.createElement(le.a,{checked:M,label:"Set a duration",onChange:function(){z(!M),T(0)}}),c.a.createElement(De,{in:M,timeout:800,unmountOnExit:!0,enteringAnimation:"fadeIn fast",exitingAnimation:"fadeOut fast"},c.a.createElement(ie.a,{label:"Duration",labelFor:"dur-input",labelInfo:"in days (optionnal)"},c.a.createElement(xe.a,{id:"dur-input",placeholder:"Enter number (float) of days here.",value:y,min:0,max:15,stepSize:.5,majorStepSize:1,onValueChange:function(e){return T(e)}}),c.a.createElement(Ie.a,{min:0,max:15,stepSize:.5,value:y,onChange:function(e){return T(e)}}))))},Ne=function(e){var t=e.add,n=e.validateTitle,a=e.projects,r=e.selectedProjectId,o=Object(Ee.a)(e,["add","validateTitle","projects","selectedProjectId"]);return c.a.createElement(Ae,Object.assign({type:"add",action:function(e,n,a,r){return t(a,r,e,n)},projects:a,validateTitle:n,selectedProjectId:r},o))},Be=function(e){var t=e.taskId,n=e.taskToEdit,a=e.edit,r=e.validateTitle,o=e.projects,i=Object(Ee.a)(e,["taskId","taskToEdit","edit","validateTitle","projects"]);return c.a.createElement(Ae,Object.assign({type:"edit",action:function(e,n,r,o){return a(t,r,o,n)},projects:o,validateTitle:r,taskToEdit:n},i))},Le=n(34),Re=n(99),_e=n(23),Me=function(e){var t=e.title,n=e.desc,a=e.duration,r=e.onClick,o=e.selected;return c.a.createElement(Re.a,{interactive:!0,elevation:_e.a.TWO,className:"taskcard animated fadeIn fast",onClick:r,style:{border:"2px solid ".concat(o?"#39acac":"rgba(0,0,0,0)")}},c.a.createElement("h3",{className:"taskcard"},t),c.a.createElement("p",{className:"taskcard"},n),0!==a&&c.a.createElement("p",{className:"taskcard"},"".concat(a," day(s)")))},ze=Object(s.b)(function(e){return{showButtonText:e.settings.showButtonText,selectedIds:e.tasks.selected,smallScreen:e.window.smallScreen}},function(e){return{selectTask:function(t){return e(function(e){return{type:g,payload:e}}(t))},unselectTask:function(t){return e(function(e){return{type:"@@settings/UNSELECT_TASK",payload:e}}(t))}}})(function(e){var t=e.title,n=e.tasks,a=e.selectedProject,o=e.show,i=void 0===o||o,l=e.openAddTaskDialog,s=e.openEditTaskDialog,u=e.openDeleteTaskAlert,d=e.showButtonText,m=e.selectedIds,f=e.selectTask,g=e.unselectTask,O=e.smallScreen,b=n.filter(function(e){return e.projectId===a||a===j&&-1!==e.projectId});return c.a.createElement(De,{in:i,timeout:800,unmountOnExit:!0,customStyle:{padding:"50px 50px 0 50px"},enteringAnimation:"fadeInDown fast",exitingAnimation:"fadeOutUp fast"},c.a.createElement("div",{style:{display:"inline"}},c.a.createElement(p.a,{style:{display:"inline-block",marginRight:"10px"}},t),c.a.createElement(Le.a,null,c.a.createElement(re,{text:O?"Add":"Add task",position:r.a.TOP,showButtonText:d,buttonProps:{icon:"add",onClick:function(){return l(!0)}}})),c.a.createElement(Le.a,null,c.a.createElement(De,{in:b.some(function(e){var t=e.id;return m.includes(t)}),timeout:800,unmountOnExit:!0,customStyle:{display:"inline"},enteringAnimation:"fadeInLeft fast",exitingAnimation:"fadeOutLeft fast"},c.a.createElement("div",{style:{display:"inline-block"}},c.a.createElement(re,{text:O?"Edit":"Edit task",disabled:b.filter(function(e){var t=e.id;return m.includes(t)}).length>1,position:r.a.TOP,showButtonText:d,buttonProps:{icon:"edit",onClick:function(){s(!0)}}})),c.a.createElement("div",{style:{display:"inline-block"}},c.a.createElement(re,{text:O?"Delete":"Delete task"+(b.filter(function(e){var t=e.id;return m.includes(t)}).length>1?"s":""),position:r.a.TOP,showButtonText:d,buttonProps:{icon:"trash",onClick:function(){n.filter(function(e){return e.projectId!==a&&a===j&&-1===e.projectId}).map(function(e){return e.id}).forEach(function(e){return g(e)}),u(!0)}}})),c.a.createElement("div",{style:{display:"inline-block"}},c.a.createElement(re,{text:"Select all",position:r.a.TOP,showButtonText:d,buttonProps:{icon:"multi-select",onClick:function(){return b.forEach(function(e){var t=e.id;return f(t)})}},disabled:b.every(function(e){var t=e.id;return!m.includes(t)})||b.every(function(e){var t=e.id;return m.includes(t)})})),c.a.createElement("div",{style:{display:"inline-block"}},c.a.createElement(re,{text:O?"Clear":"Clear selection",position:r.a.TOP,showButtonText:d,buttonProps:{icon:"eraser",onClick:function(){return b.forEach(function(e){var t=e.id;return g(t)})}}}))))),c.a.createElement("div",{style:{marginTop:"10px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:"10px"}},b.map(function(e){var t=e.title,n=e.desc,a=e.duration,r=e.id;return c.a.createElement(Me,Object.assign({title:t,desc:n,duration:a},{key:r,onClick:function(){return m.includes(r)?g(r):f(r)},selected:m.includes(r)}))})))});n(87);function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Fe=Object(s.b)(function(e){return{theme:e.settings.theme,showOrphan:e.settings.showOrphan,selectedTasks:e.tasks.selected}},function(e){return{unselectAll:function(){return e({type:"@@settings/UNSELECT_ALL"})},setSmallScreen:function(t){return e(function(e){return{type:"@@window/SET_SMALL_SCREEN",payload:e}}(t))}}})(function(e){var t,n=e.toaster,a=e.theme,r=e.showOrphan,i=e.selectedTasks,s=e.unselectAll,g=e.setSmallScreen,O=Object(o.useState)(!1),b=Object(d.a)(O,2),E=b[0],v=b[1],k=Object(o.useState)(!1),w=Object(d.a)(k,2),S=w[0],C=w[1],x=Object(o.useState)(!1),I=Object(d.a)(x,2),P=I[0],D=I[1],A=Object(o.useState)(!1),N=Object(d.a)(A,2),B=N[0],L=N[1],R=Object(o.useState)(!1),_=Object(d.a)(R,2),M=_[0],z=_[1],G=Object(o.useState)(!1),F=Object(d.a)(G,2),H=F[0],U=F[1],W=Object(o.useState)(!1),K=Object(d.a)(W,2),V=K[0],J=K[1],Y=Object(o.useState)(!1),q=Object(d.a)(Y,2),X=q[0],Z=q[1],$=localStorage.getItem("tasks-juggler-database");if($)try{t=JSON.parse($)}catch(Oe){}var Q=Object(o.useState)(t||function(){var e=0,t=0;return{projects:[{name:"Toto",desc:"toto project",id:e++},{name:"Titi",desc:"titi project",id:e++}],tasks:[{title:"ZombieTask",desc:"I have no project...",id:t++,projectId:-1,duration:1},{title:"TotoTask1",desc:"task 1 of toto project",id:t++,projectId:0,duration:.5},{title:"TotoTask2",desc:"task 2 of toto project",id:t++,projectId:0,duration:1},{title:"TitiTask",desc:"task 1 of titi project",id:t++,projectId:1,duration:1}]}}()),ee=Object(d.a)(Q,2),te=ee[0],ne=ee[1],ae=function(e){ne(e),localStorage.setItem("tasks-juggler-database",JSON.stringify(e))},re=Object(o.useState)(j),oe=Object(d.a)(re,2),ce=oe[0],ie=oe[1],le=Object(o.useState)({title:"NO_TITLE",desc:"NO_DESC",duration:-1}),se=Object(d.a)(le,2),ue=se[0],pe=se[1];Object(o.useEffect)(function(){var e=T(te)(i[0]);e&&pe({title:e.title,desc:e.desc,duration:e.duration})},[te,i]);var me=function(e){te.projects=te.projects.filter(function(t){return t.id!==e}),te.tasks.forEach(function(t){return t.projectId===e&&(t.projectId=-1)}),ae(te),ie(j)};l.a.createPortal(n,document.getElementById("root"));var fe,ge=function(e,t){n.show({message:e,intent:t})};return Object(o.useEffect)(function(){var e=function(e){e.keyCode===f.ESCAPE&&s()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[s]),window.matchMedia("(max-width: 500px)").addListener(function(e){return g(e.matches)}),c.a.createElement("div",{className:a,id:"container"},c.a.createElement(de,Object.assign({dumpDataBase:function(){return J(!0)},loadDataBase:function(){return Z(!0)}},{setSelectedProject:ie,dataBase:te,deleteProject:me,selectedProject:ce,openAddProjDialog:C,openDeleteProjAlert:v,openEditProjDialog:D,openAddTaskDialog:z,openDeleteTaskAlert:L})),c.a.createElement("div",{id:"content"},c.a.createElement(ze,{title:"Tasks",tasks:te.tasks,selectedProject:ce,openAddTaskDialog:z,openEditTaskDialog:U,openDeleteTaskAlert:L}),c.a.createElement(ze,{title:"Orphan tasks",tasks:te.tasks,selectedProject:-1,show:r,openAddTaskDialog:z,openEditTaskDialog:U,openDeleteTaskAlert:L}),c.a.createElement("div",{style:{padding:"50px 50px 0 50px"}},c.a.createElement("div",{style:{display:"inline"}},c.a.createElement(p.a,{style:{display:"inline-block",marginRight:"10px"}},"Planning")))),c.a.createElement("div",{id:"footer"},"\xa9 2019 \u2013 Guillaume Comte \u2013 All rights reserved"),c.a.createElement(we,{isOpen:S,onClose:function(){return C(!1)},add:function(e,t){var n=te.projects.map(function(e){return e.id}).reduce(function(e,t){return Math.max(e,t)})+1;te.projects.push({name:e,desc:t,id:n}),ae(te),ie(n)},validateName:h(te)}),c.a.createElement(Se,{isOpen:P,onClose:function(){return D(!1)},edit:function(e,t,n){te.projects.forEach(function(a){a.id===e&&(a.name=t,a.desc=n)}),ae(te)},validateName:h(te),project:(fe=te,function(e){return fe.projects.find(function(t){return t.id===e})})(ce)}),c.a.createElement(ve,{confirmButtonText:"Delete project",isOpen:E,onCancel:function(){return v(!1)},onConfirm:function(){v(!1),me(ce)},deletionTargetName:ce===j?"ALL => IMPOSSIBLE":te.projects.find(function(e){return e.id===ce}).name}),c.a.createElement(Ne,{isOpen:M,onClose:function(){return z(!1)},add:function(e,t,n,a){var r;te.tasks.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({id:(r=te,r.tasks.map(function(e){return e.id}).reduce(function(e,t){return Math.max(e,t)})+1)},{title:e,projectId:n,desc:t,duration:a})),ae(te),ie(n)},validateTitle:y(te),projects:te.projects,selectedProjectId:ce}),c.a.createElement(Be,{isOpen:H,onClose:function(){return U(!1)},taskId:i[0],edit:function(e,t,n,a){var r=T(te)(e),o=[t,n,a];r.title=o[0],r.desc=o[1],r.duration=o[2],ae(te)},validateTitle:y(te),projects:te.projects,taskToEdit:ue}),c.a.createElement(ve,{confirmButtonText:"Delete task"+(i.length>1?"s":""),isOpen:B,onCancel:function(){return L(!1)},onConfirm:function(){L(!1),i.forEach(function(e){return t=e,te.tasks=te.tasks.filter(function(e){return e.id!==t}),ae(te),void s();var t})},deletionTargetName:i?i.length>1?i.map(function(e){return te.tasks.find(function(t){return t.id===e}).title}).join(", "):te.tasks.find(function(e){return e.id===i[0]})?te.tasks.find(function(e){return e.id===i[0]}).title:"":""}),c.a.createElement(be,{isOpen:V,onClose:function(){return J(!1)},dump:JSON.stringify(te,null,"\t"),onClipboard:function(){return ge("Copied to clipboard !",m.a.SUCCESS)}}),c.a.createElement(je,{isOpen:X,onClose:function(){return Z(!1)},onLoad:function(e){var t;try{t=JSON.parse(e)}catch(Oe){return ge("Imported DB format is not correct",m.a.WARNING),!1}var n=function(e){if("object"!==typeof e||Array.isArray(e))return{valid:!1,reason:"Imported DB is not an object"};var t=[];if(!e.projects)return{valid:!1,reason:"Imported DB has no 'projects' child"};if(!Array.isArray(e.projects))return{valid:!1,reason:"Imported DB 'projects' is not an array"};if(!e.projects.every(function(e){return void 0!==e.name&&"string"===typeof e.name&&void 0!==e.desc&&"string"===typeof e.desc&&void 0!==e.id&&"number"===typeof e.id&&!t.includes(e.id)&&(t.push(e.id),!0)}))return{valid:!1,reason:"Imported DB projects are not correctly formed"};t.push(-1);var n=[];return e.tasks?Array.isArray(e.tasks)?e.tasks.every(function(e){return void 0!==e.title&&"string"===typeof e.title&&void 0!==e.desc&&"string"===typeof e.desc&&void 0!==e.id&&"number"===typeof e.id&&void 0!==e.projectId&&"number"===typeof e.projectId&&void 0!==e.duration&&"number"===typeof e.duration&&(!n.includes(e.id)&&(n.push(e.id),!!t.includes(e.projectId)))})?{valid:!0}:{valid:!1,reason:"Imported DB tasks are not correctly formed"}:{valid:!1,reason:"Imported DB 'tasks' is not an array"}:{valid:!1,reason:"Imported DB has no 'tasks' child"}}(t),a=n.valid,r=n.reason;return a?(ae(t),ge("DB successfully imported",m.a.SUCCESS),!0):(ge(r,m.a.WARNING),!1)}}))}),He=(n(88),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ue(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var We=n(27),Ke=n(56);function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ye={theme:localStorage.getItem("tasks-juggler-theme")||"",showOrphan:"true"===localStorage.getItem("tasks-juggler-show-orphan"),showButtonText:null==localStorage.getItem("tasks-juggler-show-button-text")||"true"===localStorage.getItem("tasks-juggler-show-button-text")},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Je({},e,{theme:t.payload});case"@@settings/SET_SHOW_ORPHAN":return Je({},e,{showOrphan:t.payload});case"@@settings/SET_SHOW_BUTTON_TEXT":return Je({},e,{showButtonText:t.payload});default:return e}};function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $e={selected:[]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Ze({},e,{selected:e.selected.concat(t.payload)});case"@@settings/UNSELECT_TASK":return Ze({},e,{selected:e.selected.filter(function(e){return e!==t.payload})});case"@@settings/UNSELECT_ALL":return Ze({},e,{selected:[]});default:return e}};function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var nt={smallScreen:window.innerWidth<=500},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@@window/SET_SMALL_SCREEN":return tt({},e,{smallScreen:t.payload});default:return e}},rt=Object(We.combineReducers)({settings:qe,tasks:Qe,window:at}),ot=Object(We.createStore)(rt,Object(Ke.composeWithDevTools)(We.applyMiddleware.apply(void 0,Object(k.a)([])))),ct=a.a.create({position:r.a.TOP});l.a.render(c.a.createElement(s.a,{store:ot},c.a.createElement(Fe,{toaster:ct})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tasks-juggler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/tasks-juggler","/service-worker.js");He?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ue(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ue(t,e)})}}()}},[[60,1,2]]]);
//# sourceMappingURL=main.71d61b4d.chunk.js.map