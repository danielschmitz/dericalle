import{a as ae,b as se,c as me,d as F}from"./chunk-HVG5GDRI.js";import"./chunk-7MJ4RZQ5.js";import{c as pe}from"./chunk-VG3A5HLW.js";import"./chunk-OKND4WHD.js";import{a as le}from"./chunk-UGTNF6ZB.js";import{e as re,o as ce}from"./chunk-FLXPZ6LF.js";import{A as $,L as ee,O as te,P as ie,S as ne,T as oe,y as Z}from"./chunk-JQ5RO5NF.js";import{Lb as Q,Mb as X,Na as U,Ra as q,Sb as Y,Ub as D,fb as G,ib as z,j,kb as K,l as A,ub as J}from"./chunk-7FB75CJ2.js";import{$b as b,Ab as o,Bb as a,Cb as _,E as R,Gb as k,J as N,Kb as f,Lb as g,Ta as l,U as B,Wb as H,Xb as d,Yb as w,_ as x,a as O,ac as h,bc as C,dc as v,ea as m,eb as I,ec as S,fa as p,kb as T,n as L,oa as E,rb as c,rc as y,ta as M,ub as V}from"./chunk-RFMYBWBP.js";var P=class i extends ae{constructor(){super("tasks")}getAllTasks(){return this.http.get(`${this.apiBaseUrl}/all`)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=B({token:i,factory:i.\u0275fac,providedIn:"root"})};var be=()=>({width:"450px",height:"auto"}),he=i=>({"ng-invalid ng-dirty":i}),ge=i=>({"ng-invalid ng-dirty":i,"w-full":!0}),Ce=i=>({"ng-invalid":i});function ye(i,t){i&1&&(o(0,"small",15),d(1,"Name is required."),a())}function Te(i,t){i&1&&(o(0,"small",15),d(1,"Description is required."),a())}function xe(i,t){i&1&&(o(0,"small",15),d(1,"Category is required."),a())}function ve(i,t){if(i&1){let e=k();o(0,"div",3)(1,"p-floatlabel",4)(2,"p-dropdown",5),C("ngModelChange",function(n){m(e);let r=g();return h(r.task.categoryId,n)||(r.task.categoryId=n),p(n)}),a(),o(3,"label",6),d(4,"Category"),a()(),o(5,"p-floatlabel",4)(6,"input",7),C("ngModelChange",function(n){m(e);let r=g();return h(r.task.name,n)||(r.task.name=n),p(n)}),a(),o(7,"label",8),d(8,"Name"),a()(),T(9,ye,2,0,"small",9),o(10,"p-floatlabel",4)(11,"input",10),C("ngModelChange",function(n){m(e);let r=g();return h(r.task.description,n)||(r.task.description=n),p(n)}),a(),o(12,"label",11),d(13,"Description"),a()(),T(14,Te,2,0,"small",9)(15,xe,2,0,"small",9),o(16,"div",12)(17,"p-checkbox",13),C("ngModelChange",function(n){m(e);let r=g();return h(r.task.done,n)||(r.task.done=n),p(n)}),a(),o(18,"label",14),d(19,"Done"),a()()()}if(i&2){let e=g();l(2),c("options",e.categories()),b("ngModel",e.task.categoryId),c("ngClass",S(13,he,e.submitted&&!e.task.categoryId)),l(4),b("ngModel",e.task.name),c("ngClass",S(15,ge,e.submitted&&!e.task.name)),l(3),c("ngIf",e.submitted&&!e.task.name),l(2),b("ngModel",e.task.description),c("ngClass",S(17,ge,e.submitted&&!e.task.description)),l(3),c("ngIf",e.submitted&&!e.task.description),l(),c("ngIf",e.submitted&&!e.task.categoryId),l(2),b("ngModel",e.task.done),c("binary",!0)("ngClass",S(19,Ce,e.submitted&&e.task.done===void 0))}}function we(i,t){if(i&1){let e=k();o(0,"button",16),f("click",function(){m(e);let n=g();return p(n.onHide())}),a(),o(1,"button",17),f("click",function(){m(e);let n=g();return p(n.onSave())}),a()}if(i&2){let e=g();l(),c("loading",e.loading)}}var W=class i{visible=!1;task={name:"",description:"",done:0,categoryId:0};submitted=!1;loading=!1;visibleChange=new E;save=new E;cancel=new E;categoryService=x(se);categories=M([]);ngOnInit(){this.loadCategories()}loadCategories(){this.categoryService.getAll().subscribe({next:t=>{this.categories.set(t)}})}onHide(){this.visibleChange.emit(!1),this.cancel.emit()}onSave(){this.save.emit(this.task)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=I({type:i,selectors:[["app-task-form"]],inputs:{visible:"visible",task:"task",submitted:"submitted",loading:"loading"},outputs:{visibleChange:"visibleChange",save:"save",cancel:"cancel"},decls:5,vars:5,consts:[["content",""],["footer",""],["header","Task Details",1,"p-fluid",3,"visibleChange","onHide","visible","modal"],[1,"flex","flex-col","gap-4","py-2"],["variant","on"],["id","category","optionLabel","name","optionValue","id",3,"ngModelChange","options","ngModel","ngClass"],["for","category"],["type","text","id","name","pInputText","",3,"ngModelChange","ngModel","ngClass"],["for","name"],["class","p-error",4,"ngIf"],["type","text","id","description","pInputText","",3,"ngModelChange","ngModel","ngClass"],["for","description"],[1,"flex","flex-row"],["id","done",3,"ngModelChange","ngModel","binary","ngClass"],["for","done",1,"ml-2"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click","loading"]],template:function(e,s){if(e&1){let n=k();o(0,"p-dialog",2),C("visibleChange",function(u){return m(n),h(s.visible,u)||(s.visible=u),p(u)}),f("onHide",function(){return m(n),p(s.onHide())}),T(1,ve,20,21,"ng-template",null,0,y)(3,we,2,1,"ng-template",null,1,y),a()}e&2&&(V(v(4,be)),b("visible",s.visible),c("modal",!0))},dependencies:[F,j,A,Q,Y,re,me,pe,G,z,K,D,J],styles:[".field[_ngcontent-%COMP%]{margin-bottom:1.5rem}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:.25rem;display:block}.field[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]     .p-dropdown{width:100%}[_nghost-%COMP%]     .p-checkbox{margin-right:.5rem}"]})};var Se=()=>["name","description","category"],Ee=()=>[10,20,30],Me=()=>({width:"450px"});function Ie(i,t){if(i&1){let e=k();o(0,"p-button",9),f("click",function(){m(e);let n=g();return p(n.newTask())}),a(),o(1,"p-button",10),f("click",function(){m(e);let n=g();return p(n.deleteSelectedTasks())}),a()}if(i&2){let e=g();l(),c("disabled",e.selectedTasks.length==0)}}function Ve(i,t){i&1&&_(0,"p-button",11)}function De(i,t){if(i&1){let e=k();o(0,"div",12)(1,"h5",13),d(2,"Tasks"),a(),o(3,"p-iconfield"),_(4,"p-inputicon",14),o(5,"input",15),f("input",function(n){m(e);let r=g(),u=H(6);return p(r.onGlobalFilter(u,n))}),a()()()}}function Fe(i,t){i&1&&(o(0,"tr")(1,"th",16),_(2,"p-tableHeaderCheckbox"),a(),o(3,"th",17),d(4," Name "),_(5,"p-sortIcon",18),a(),o(6,"th",19),d(7," Description "),_(8,"p-sortIcon",20),a(),o(9,"th",21),d(10," Done "),_(11,"p-sortIcon",22),a(),o(12,"th",23),d(13," Category "),_(14,"p-sortIcon",24),a(),_(15,"th",25),a())}function Pe(i,t){if(i&1){let e=k();o(0,"tr")(1,"td"),_(2,"p-tableCheckbox",26),a(),o(3,"td"),d(4),a(),o(5,"td"),d(6),a(),o(7,"td"),d(8),a(),o(9,"td"),d(10),a(),o(11,"td")(12,"p-button",27),f("click",function(){let n=m(e).$implicit,r=g();return p(r.editTask(n))}),a()()()}if(i&2){let e=t.$implicit,s=g();l(2),c("value",e),l(2),w(e.name),l(2),w(e.description),l(2),w(s.getDoneEmoji(e.done)),l(2),w(e.category),l(2),c("rounded",!0)("outlined",!0)}}var ue=class i{service=x(P);message=x(q);confirmationService=x(U);tasks=M([]);selectedTasks=[];task={name:"",description:"",done:0,categoryId:0};taskDialog=!1;submitted=!1;formLoading=!1;loading=!1;cols=[{field:"name",header:"Name"},{field:"description",header:"Description"},{field:"done",header:"Done"},{field:"category",header:"Category"}];ngOnInit(){this.fetchTasks()}fetchTasks(){this.loading=!0,this.service.getAllTasks().subscribe({next:t=>{this.loading=!1,this.tasks.set(t)},error:t=>{this.message.add({severity:"error",summary:"Error",detail:t.error.message}),this.loading=!1}})}getDoneEmoji(t){return t?"\u2705":"\u274C"}newTask(){this.task={name:"",description:"",done:0,categoryId:0},this.submitted=!1,this.taskDialog=!0}onTaskUpdated(t){this.service.update(t.id,t).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Updated",life:3e3})},error:e=>{this.message.add({severity:"error",summary:"Error",detail:e.error.message})}})}deleteSelectedTasks(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected tasks?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{L(this.selectedTasks).pipe(R(t=>this.service.delete(t.id)),N(()=>{this.selectedTasks=[],this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Tasks Deleted",life:3e3})})).subscribe()}})}editTask(t){this.task=O({},t),this.taskDialog=!0}deleteTask(t){this.confirmationService.confirm({message:"Are you sure you want to delete "+t.name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.service.delete(t.id).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Deleted",life:3e3})}})}})}hideDialog(){this.taskDialog=!1,this.submitted=!1}saveTask(t){this.submitted=!0,this.formLoading=!0,t.name?.trim()&&t.description?.trim()&&t.categoryId&&(t.id?this.service.update(t.id,t).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Updated",life:3e3}),this.taskDialog=!1,this.task={name:"",description:"",done:0,categoryId:0}},error:e=>{this.message.add({severity:"error",summary:"Error",detail:e.error.message})},complete:()=>{this.formLoading=!1}}):this.service.create(t).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Created",life:3e3}),this.taskDialog=!1,this.task={name:"",description:"",done:0,categoryId:0}},error:e=>{this.message.add({severity:"error",summary:"Error",detail:e.error.message})},complete:()=>{this.formLoading=!1}}))}onGlobalFilter(t,e){t.filterGlobal(e.target.value,"contains")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=I({type:i,selectors:[["app-tasks"]],decls:15,vars:19,consts:[["start",""],["end",""],["dt",""],["caption",""],["header",""],["body",""],["styleClass","mb-6"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} tasks",3,"selectionChange","loading","value","rows","columns","paginator","globalFilterFields","selection","rowHover","showCurrentPageReport","rowsPerPageOptions"],[3,"visibleChange","save","cancel","visible","task","submitted","loading"],["label","New","icon","pi pi-plus","severity","secondary",1,"mr-2",3,"click"],["severity","secondary","label","Delete","icon","pi pi-trash","outlined","",3,"click","disabled"],["label","Export","icon","pi pi-upload","severity","secondary"],[1,"flex","items-center","justify-between"],[1,"m-0"],["styleClass","pi pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","3rem"],["pSortableColumn","name"],["field","name"],["pSortableColumn","description"],["field","description"],["pSortableColumn","done"],["field","done"],["pSortableColumn","category"],["field","category"],[2,"width","5rem"],[3,"value"],["icon","pi pi-pencil",1,"mr-2",3,"click","rounded","outlined"]],template:function(e,s){if(e&1){let n=k();o(0,"p-toolbar",6),T(1,Ie,2,1,"ng-template",null,0,y)(3,Ve,1,0,"ng-template",null,1,y),a(),o(5,"p-table",7,2),C("selectionChange",function(u){return m(n),h(s.selectedTasks,u)||(s.selectedTasks=u),p(u)}),T(7,De,6,0,"ng-template",null,3,y)(9,Fe,16,0,"ng-template",null,4,y)(11,Pe,13,7,"ng-template",null,5,y),a(),o(13,"app-task-form",8),C("visibleChange",function(u){return m(n),h(s.taskDialog,u)||(s.taskDialog=u),p(u)}),f("save",function(u){return m(n),p(s.saveTask(u))})("cancel",function(){return m(n),p(s.hideDialog())}),a(),_(14,"p-confirmDialog")}e&2&&(l(5),c("loading",s.loading)("value",s.tasks())("rows",10)("columns",s.cols)("paginator",!0)("globalFilterFields",v(16,Se)),b("selection",s.selectedTasks),c("rowHover",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",v(17,Ee)),l(8),b("visible",s.taskDialog),c("task",s.task)("submitted",s.submitted)("loading",s.formLoading),l(),V(v(18,Me)))},dependencies:[F,X,le,Z,$,D,ee,te,ie,ne,oe,ce,W],encapsulation:2})};export{ue as TasksComponent};
